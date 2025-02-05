<template>
  <v-navigation-drawer permanent style="background-color: var(--v-theme-myGreenColor); color: white;">
    <v-list>
      <v-list-item :prepend-avatar="user.avatar" :title="user.account"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <template v-for="nav in navs" :key="nav.to || nav.text">
        <!-- 如果有子選單 -->
        <v-list-group v-if="nav.children" :prepend-icon="nav.icon">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :title="nav.text"></v-list-item>
          </template>
          <v-list-item
            v-for="child in nav.children"
            :key="child.to"
            :prepend-icon="child.icon"
            :title="child.text"
            :to="child.to">
          </v-list-item>
        </v-list-group>

        <!-- 如果沒有子選單 -->
        <v-list-item v-else :prepend-icon="nav.icon" :title="nav.text" :to="nav.to"></v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>



<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const user = useUserStore()

const navs = computed(() => {
  return [
    {
      text: t('nav.adminProducts'),  // 頁面管理
      icon: 'mdi-cog',
      children: [
        { to: '/admin/products', text: t('nav.adminAbout'), icon: 'mdi-format-list-bulleted' },  // About: 關於
        { to: '/admin/orders', text: t('nav.adminExplore'), icon: 'mdi-account-box-edit-outline' },  // Explore: 探索
      ]
    },
    {
      text: t('nav.userManagement'), // ✅ 改為「用戶管理」
      icon: 'mdi-account-group',
      children: [
        { to: '/admin/reports', text: t('nav.reportManagement'), icon: 'mdi-file-document' },  // ✅ 回報管理
        { to: '/admin/users', text: t('nav.userBlockade'), icon: 'mdi mdi-account-cancel' }  // ✅ 用戶封鎖
      ]
    },
    { to: '/', text: t('nav.home'), icon: 'mdi-home' },
  ]
})

</script>
