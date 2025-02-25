<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">EXPLORE:_)</h1>
      </v-col>

      <v-divider></v-divider>

      <!-- 📌 彈出視窗 (Dialog) -->
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title class="text-h5">
            {{ selectedGame?.title }}
          </v-card-title>
          <v-card-text>
            <v-img :src="selectedGame?.img" class="mb-3"></v-img>
            <p>{{ selectedGame?.description }}</p>
            <p><strong>Duration:</strong> {{ selectedGame?.duration }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close" @click="dialog = false"></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-card>
        <v-data-iterator :items="games" :items-per-page="6" :search="search">
          <template #header>
            <v-toolbar class="px-2">
              <v-text-field
                v-model="search"
                density="comfortable"
                placeholder="Search"
                prepend-inner-icon="mdi-magnify"
                style="max-width: 300px;"
                variant="solo"
                clearable
                hide-details
              ></v-text-field>
            </v-toolbar>
          </template>

          <template #default="{ items }">
            <v-container class="pa-2" fluid>
              <v-row dense>
                <v-col v-for="item in items" :key="item.title" cols="auto" md="4">
                  <v-card class="pb-3" border flat>
                    <v-img :src="item.raw.img"></v-img>
                    <v-list-item :subtitle="item.raw.subtitle" class="mb-2">
                      <template #title>
                        <v-slot>
                          <strong class="text-h6 mb-2">{{ item.raw.title }}</strong>
                        </v-slot>
                      </template>
                    </v-list-item>
                    <div class="d-flex justify-space-between px-4">
                      <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                        <v-icon icon="mdi-clock" start></v-icon>
                        <div class="text-truncate">{{ item.raw.duration }}</div>
                      </div>

                      <!-- 📌 Read 按鈕 -->
                      <v-btn
                        class="text-none"
                        size="small"
                        text="Read"
                        variant="flat"
                        border
                        @click="openDialog(item.raw)"
                      >
                      </v-btn>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>

          <template #footer="{ page, pageCount, prevPage, nextPage }">
            <div class="d-flex align-center justify-center pa-4">
              <v-btn
                :disabled="page === 1"
                density="comfortable"
                icon="mdi-arrow-left"
                variant="tonal"
                rounded
                @click="prevPage"
              ></v-btn>

              <div class="mx-2 text-caption">Page {{ page }} of {{ pageCount }}</div>

              <v-btn
                :disabled="page >= pageCount"
                density="comfortable"
                icon="mdi-arrow-right"
                variant="tonal"
                rounded
                @click="nextPage"
              ></v-btn>
            </div>
          </template>
        </v-data-iterator>
      </v-card>
    </v-row>
  </v-container>
</template>



<script setup>
import { ref } from 'vue'

const dialog = ref(false);
const selectedGame = ref(null);

const openDialog = (game) => {
  selectedGame.value = game;
  dialog.value = true;
};

const search = ref('')

const games = ref([
  {
    img: 'https://www.dropbox.com/scl/fi/yswvvb1l5bt42padi6qmc/131.jpg?rlkey=72pv2h6842wl18xptza6e27qb&st=u12c6bxb&dl=1',
    title: '雨天的靜謐',
    subtitle: '今天的雨聲像是溫柔的呢喃，輕輕拍打窗戶...',
    advanced: false,
    description: '今天的雨聲像是溫柔的呢喃，輕輕拍打窗戶。我泡了一杯熱茶，窩在沙發上翻閱一本舊書，感覺時間變得緩慢。這樣的日子，讓我覺得自己可以暫時從喧囂中抽離，好好聆聽內心的聲音。',
    duration: '8 minutes',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/2gr9k131zathlh2qz36pk/bg2.jpg?rlkey=pctvgnukv4u0wy02znwo8n045&st=wawz72gl&dl=1',
    title: '生活的小確幸',
    subtitle: '今天買了一杯最喜歡的奶茶，剛好有優惠...',
    advanced: true,
    description: '今天買了一杯最喜歡的奶茶，剛好有優惠。走在路上時，發現天邊的雲像一幅畫。這些微不足道的小事，卻讓一整天變得特別美好。',
    duration: '10 minutes',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/y9ky1s9kigf9vhn737ya9/132-01.jpg?rlkey=uhgrl4wp00u1x0p2swm4v8pk1&st=pvagdm7q&dl=1',
    title: '無聲的崩潰',
    subtitle: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」...',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/9jn77dopoo08gzricghpr/133-01.jpg?rlkey=fgz57xrmgrukvwrgiekl4wn9s&st=aylman2l&dl=1',
    title: '過於疲憊的人生',
    subtitle: '一天又過去了，好像什麼也沒做...',
    advanced: true,
    description: '一天又過去了，好像什麼也沒做，又好像用光了所有力氣。我只想躺著，不想動，也不想說話，甚至連思考都覺得疲憊。活著真的太累了。',
    duration: '12 minutes',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/4ldwqjn1c95xxddbnu07b/135-01.jpg?rlkey=wlm3q9yiyjeb8fakpnred4qzy&st=32a8jau7&dl=1',
    title: '關於鳳梨的思考',
    subtitle: '今天吃了一塊鳳梨，酸甜的滋味在舌尖蔓延...',
    advanced: false,
    description: '今天吃了一塊鳳梨，酸甜的滋味在舌尖蔓延，讓我忍不住開始思考這種水果的奇妙之處。鳳梨總是帶著一種矛盾的個性——外表滿是尖刺，看起來不太友善，但裡面卻是金黃柔軟的果肉，甜中帶點微酸，像是人生的縮影。越是費力剝開，越能嚐到它的美好。有人說鳳梨的酸會刺激舌頭，吃多了甚至會有點痛，但這不就是它的魅力嗎？人生不也是這樣，有時候酸澀難耐，有時候卻意外甘甜。我想，如果能像鳳梨一樣，擁有不畏風雨的外殼，同時保有內心的甜美，那應該也不算太糟吧。突然覺得，今天的鳳梨特別好吃。',
    duration: '11 minutes',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/42dx2jmf8qqcq6leh51ca/137-01.jpg?rlkey=u75flxy8i7ec3ue8u3j8z5o38&st=4ljnczg9&dl=1',
    title: '沉默的求救',
    subtitle: '有人說，如果你真的難過，就說出口...',
    advanced: true,
    description: '有人說，如果你真的難過，就說出口。但我試過了，換來的只是「你想太多」、「你應該樂觀點」、「這沒什麼好難過的」。後來我發現，沉默才是最好的保護色。',
    duration: '10 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png',
    title: 'Underwater VR Exploration Adventure',
    subtitle: 'Dive deep into the ocean and discover the mysteries of the underwater world.',
    advanced: true,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '11 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920s Mystery Detective Chronicles',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920s Mystery Detective Chronicles',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920s Mystery Detective Chronicles',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920s Mystery Detective Chronicles',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920s Mystery Detective Chronicles',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920s Mystery Detective Chronicles',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920s Mystery Detective Chronicles',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920s Mystery Detective Chronicles',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920s Mystery Detective Chronicles',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920s Mystery Detective Chronicles',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920s Mystery Detective Chronicles',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
])


// import { useAxios } from '@/composables/axios'
// import { useI18n } from 'vue-i18n
// import { ref, computed } from 'vue'
// import { useSnackbar } from 'vuetify-use-dialog'

// const { apiAuth } = useAxios()
// const { t } = useI18n()
// const createSnackbar = useSnackbar()

// const orders = ref([])

// const headers = computed(() => {
//   return [
//     { title: 'ID', key: '_id' },
//     { title: t('order.createdAt'), key: 'createdAt', value: item => new Date(item.createdAt).toLocaleString() },
//     { title: t('order.cart'), key: 'cart', sortable: false },
//     {
//       title: t('order.price'),
//       key: 'price',
//       value: item => {
//         return item.cart.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0)
//       }
//     }
//   ]
// })

// const getOrders = async () => {
//   try {
//     const { data } = await apiAuth.get('/order')
//     orders.value = data.result
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
// getOrders()
</script>

<route lang="yaml">;
meta:
  login: true
  title: 'nav.orders'
</route>;
