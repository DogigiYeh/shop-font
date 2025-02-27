<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">JOURNAL:_)</h1>
      </v-col>
      <v-divider></v-divider>

      <!-- 按鈕區塊 -->
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-col cols="auto">
    <v-btn density="default" @click="diaryDialog = true">新增日記:_)</v-btn>
  </v-col>

  <v-dialog v-model="diaryDialog" max-width="600">
    <v-card style="color: #102b05" prepend-icon="mdi-bookshelf" title="新增日記">
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-textarea
              v-model="diaryContent"
              label="寫下你的日記..."
              rows="4"
              auto-grow
              required
            ></v-textarea>
          </v-col>

          <v-col cols="12">
            <v-file-input
              v-model="diaryFile"
              label="上傳圖片或檔案"
              accept="image/*,.pdf,.doc,.docx"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="取消" variant="plain" @click="diaryDialog = false"></v-btn>
        <v-btn color="primary" text="儲存" variant="tonal" @click="saveDiary"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

          <v-col cols="auto">
            <v-btn density="default">日記草稿:_)</v-btn>
          </v-col>

          <!-- 個人資料按鈕 (包在 v-dialog) -->
          <v-col cols="auto">
            <v-dialog v-model="profileDialog" max-width="600">
              <template #activator="{ props }">
                <v-btn density="default" v-bind="props">個人資料:_)</v-btn>
              </template>

              <v-card style="color: #102b05;" prepend-icon="mdi-card-account-details-outline" title="個人資料:_)">
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field v-model="user.name" label="Name:_)*" required></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field v-model="user.email" label="Email:_)*" required></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field v-model="user.password" label="Password:_)*" type="password" required></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea label="DENDRO:_)"></v-textarea>
                    </v-col>
                  </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text="取消" variant="plain" @click="profileDialog = false"></v-btn>
                  <v-btn color="primary" text="儲存" variant="tonal" @click="saveProfile"></v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>

          <v-col cols="auto">
            <v-btn density="default">公開日記:_)</v-btn>
          </v-col>

          <v-col cols="auto">
            <v-btn density="default">查詢日記:_)</v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-divider></v-divider>

<!-- 我的日記 -->
    <v-slide-group v-model="model" class="pa-4" center-active show-arrows elevation="8">
      <v-slide-group-item
        v-for="n in 60"
        :key="n"
        v-slot="{ isSelected, toggle }"
      >
        <v-card
          class="ma-4 custom-card"
          height="800"
          width="500"
          :class="{ 'blur-effect': isSelected }"
          @click="isSelected ? model = null : toggle()"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                icon="mdi-close-circle-outline"
                size="48"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-expand-transition>
      <div v-if="model !== null" class="text-center mt-4 text-h6">
        Selected {{ model }}
      </div>
    </v-expand-transition>
    </v-row>
  </v-container>
</template>

<script setup>
{/* <script setup> */}
import { ref } from "vue";

const model = ref(null);

const diaryDialog = ref(false);
const profileDialog = ref(false);

const diaryContent = ref('');
const diaryFile = ref(null);


const user = ref({
  name: "",
  email: "",
  password: "",
  age: "",
});

const saveProfile = () => {
  console.log("儲存個人資料:", user.value);
  profileDialog.value = false;
};

const saveDiary = () => {
  console.log("日記內容：", diaryContent.value);
  console.log("上傳的檔案：", diaryFile.value);
  diaryDialog.value = false;
};

</script>

<style scoped>
.custom-card {
  position: relative;
  background-image: url('https://www.dropbox.com/scl/fi/rti19iwk6smkn8e4c5mlu/03.jpg?rlkey=1ae2jmw0fha5n1w0x48hpwrqz&st=yzpe7d16&dl=1'); /* 替換成你的圖片網址 */
  background-size: cover;
  background-position: center;
  transition: 1s;
}

.blur-effect::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(229, 213, 160, 0.171); /* 半透明遮罩 */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: inherit;
}
</style>

// import { ref } from 'vue'
// import { ref, computed } from 'vue'
// import { useAxios } from '@/composables/axios'
// import { useUserStore } from '@/stores/user'
// import { useRouter } from 'vue-router'
// import { useSnackbar } from 'vuetify-use-dialog'
// import { useI18n } from 'vue-i18n'

// const { apiAuth } = useAxios()
// const user = useUserStore()
// const router = useRouter()
// const createSnackbar = useSnackbar()
// const { t } = useI18n()

// const cart = ref([])

// const getCart = async () => {
//   try {
//     const { data } = await apiAuth.get('/user/cart')
//     cart.value = data.result
//   } catch (error) {
//     console.log(error)
//   }
// }
// getCart()

// const total = computed(() => {
//   return cart.value.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
// })

// const canCheckout = computed(() => {
//   return cart.value.length > 0 && cart.value.every(item => item.product.sell)
// })

// const editCart = async (product, quantity) => {
//   try {
//     const { data } = await apiAuth.patch('/user/cart', { product, quantity })
//     user.cart = data.result
//     getCart()
//   } catch (error) {
//     console.log(error)
//     createSnackbar({
//       text: t('api.' + (error?.response?.data?.message || 'unknownError')),
//       snackbarProps: {
//         color: 'red'
//       }
//     })
//   }
// }

// const checkout = async () => {
//   try {
//     await apiAuth.post('/order')
//     user.cart = 0
//     router.push('/orders')
//   } catch (error) {
//     console.log(error)
//     createSnackbar({
//       text: t('api.' + (error?.response?.data?.message || 'unknownError')),
//       snackbarProps: {
//         color: 'red'
//       }
//     })
//   }
// }
// <!-- </script> -->

<route lang="yaml">
meta:
  login: true
  title: 'nav.cart'
</route>
