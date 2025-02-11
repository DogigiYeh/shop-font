<template>
  <v-app-bar id="navbar" style="background-color: var(--v-theme-myWhiteColor1); color: var(--v-theme-);">
    <v-container class="d-flex align-center">
      <v-btn to="/" :active="false">Dendro</v-btn>
      <v-spacer />
      <template v-for="nav of navs" :key="nav.to">
        <v-btn v-if="nav.show" :to="nav.to" :prepend-icon="nav.icon">
          {{ nav.text }}
          <v-badge v-if="nav.to === '/cart'" :content="user.cart" floating color="red"></v-badge>
        </v-btn>
      </template>
      <v-btn v-if="user.isLoggedIn" prepend-icon="mdi-account-arrow-right" @click="logout">{{ $t('nav.logout') }}</v-btn>
      <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props">
            <v-icon icon="mdi-translate"></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="lang in langs" :key="lang.value"
            @click="$i18n.locale = lang.value"
          >{{ lang.text }}</v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user'
import { useAxios } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

// 註冊 ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let lastScrollY = window.scrollY;
  let isScrollingUp = false;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      // 向上滾動 -> 立即顯示 Navbar
      if (!isScrollingUp) {
        isScrollingUp = true;
        gsap.to("#navbar", { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
      }
    } else {
      // 向下滾動 -> 隱藏 Navbar
      if (isScrollingUp) {
        isScrollingUp = false;
        gsap.to("#navbar", { y: -100, opacity: 0, duration: 0.3, ease: "power2.out" });
      }
    }

    lastScrollY = currentScrollY;
  });
});





const { t } = useI18n()
const user = useUserStore()
const { apiAuth } = useAxios()
const createSnackbar = useSnackbar()
const router = useRouter()

// 導覽列項目
const navs = computed(() => {
  return [
    { to: '/register', text: t('nav.register'), icon: 'mdi-account-plus', show: !user.isLoggedIn },
    { to: '/login', text: t('nav.login'), icon: 'mdi-account-arrow-left', show: !user.isLoggedIn },
    { to: '/', text: t('nav.home'), icon: 'mdi-home', show: user.isLoggedIn },  // 首頁
    { to: '/about', text: t('nav.orders'), icon: 'mdi-barley', show: user.isLoggedIn },  // 關於
    { to: '/orders', text: t('nav.explore'), icon: ' mdi-magnify-expand', show: user.isLoggedIn },  // 探索
    { to: '/cart', text: t('nav.cart'), icon: 'mdi-bookshelf', show: user.isLoggedIn }, // 日記
    { to: '/admin', text: t('nav.admin'), icon: 'mdi-cog', show: user.isLoggedIn && user.isAdmin },
  ]
})

const langs = [
  { text: '繁體中文', value: 'zhHant' },
  { text: 'English', value: 'en' },
]

const logout = async () => {
  try {
    await apiAuth.delete('/user/logout')
  } catch (error) {
    console.log(error)
  }
  user.logout()
  createSnackbar({
    text: t('logout.success'),
    snackbarProps: {
      color: 'green'
    }
  })
  router.push('/')
}
</script>

