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
                icon="mdi-menu-left"
                variant="tonal"
                rounded
                @click="prevPage"
              ></v-btn>

              <!-- <div class="mx-2 text-caption">Page {{ page }} of {{ pageCount }}</div> -->
              <div class="mx-2 text-caption">Page {{ page }} of ...</div>

              <v-btn
                :disabled="page >= pageCount"
                density="comfortable"
                icon="mdi-menu-right"
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
    img: 'https://www.dropbox.com/scl/fi/kwputs3zeyoar0fnul3dn/138-01.jpg?rlkey=wewx1roje1m9z8744udhi4mha&st=dyjddgm9&dl=1',
    title: '做完美甲的滿足感',
    subtitle: '今天去做了美甲，指尖變得閃閃發亮，心情也跟著好起來...',
    advanced: true,
    description: '今天去做了美甲，指尖變得閃閃發亮，心情也跟著好起來。看著美甲師細心地修剪、打磨、上色，每個步驟都讓我覺得療癒，好像所有的壓力和煩惱都暫時被拋到一邊。選了清新的綠色調，帶一點細膩的珠光，低調卻很精緻。每次看見指尖，都有一種「我值得這份美好」的感覺。雖然只是個小小的改變，卻讓整個人都變得不一樣了。有時候快樂其實很簡單，像這樣好好對待自己，讓生活多一點儀式感，就足夠了。',
    duration: '11 minutes',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/0y9vh497mwqszz54jv0ed/140-01-01.jpg?rlkey=6ephsmyocczcya9wo3rqfp8cy&st=lfikzk6o&dl=1',
    title: '內心的孤獨',
    subtitle: '有時候，我們害怕孤獨，卻又渴望獨處...',
    advanced: false,
    description: '有時候，我們害怕孤獨，卻又渴望獨處。我們害怕沒有人懂自己，害怕被遺忘，害怕在人群裡顯得格格不入。但當真的與人為伍時，又覺得疲憊，想逃回自己的世界。或許，學會享受孤獨，才是真正的成熟。當我們不再需要別人來填補內心的空缺，而是自己能與自己相處時，孤獨就不再是一種痛苦，而是一種自由。',
    duration: '1 day',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/jvb5ts9jmvzofnuqqh0vb/141-01.jpg?rlkey=4kigoiqti30as75de7gn4wqo9&st=yh269r4d&dl=1',
    title: '你的訊息讓我快樂',
    subtitle: '「在幹嘛？」...',
    advanced: false,
    description: '「在幹嘛？」你隨口的一句話，卻讓我快樂了一整天。原來，喜歡一個人就是這樣，哪怕只是幾個簡單的字，都能讓我感受到滿滿的溫暖。',
    duration: '23 minutes',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/sby853e7pg2s64tqtv362/143-01.jpg?rlkey=f0t2v8i0ll5h7pihnl9eewwen&st=p3tt5q6u&dl=1',
    title: '過去、現在、未來',
    subtitle: '過去已經發生，無論如何後悔，都無法改變...',
    advanced: false,
    description: '過去已經發生，無論如何後悔，都無法改變；未來還未到來，無論如何焦慮，都無法掌控。唯一能觸碰的，只有現在這一刻。如果我們總是活在過去的遺憾或未來的不安中，那是不是永遠都無法真正活著？或許，學會珍惜現在，就是對自己最好的救贖。',
    duration: '4 days',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/a3ed4zzf8dhrbf4s1gdid/144-01.jpg?rlkey=2tya0og7byfawje6e9wcun3of&st=syagn8q3&dl=1',
    title: '人生的進度條',
    subtitle: '有時候覺得自己卡在一個...',
    advanced: false,
    description: '有時候覺得自己卡在一個無法跳過的載入畫面，看起來是「99%」，但永遠不會到「100%」。或許這就是人生吧，總覺得快要變好了，結果只是系統當機。',
    duration: '10 mounths',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/6ylv7ot7m9hplbx3ktm9r/145-01.jpg?rlkey=anaoqiacn7lz6kwe5yzuxm9f2&st=3hetgyp5&dl=1',
    title: '人生客服',
    subtitle: '「您好，這裡是人生客服中心。」...',
    advanced: false,
    description: '「您好，這裡是人生客服中心。」「請問我的人生是不是有瑕疵？怎麼沒幸運功能，還常當機？」「先生，您使用的是標準版人生，不含幸運，且內建隱藏難度。」「那能升級嗎？」「抱歉，人生一經發售，概不退換，也無法升級。我們提供的只有——接受現實服務。」「……」「感謝來電，祝您人生愉快！雖然我們知道這很難。」',
    duration: '3 years',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/yswvvb1l5bt42padi6qmc/131.jpg?rlkey=72pv2h6842wl18xptza6e27qb&st=u12c6bxb&dl=1',
    title: '人生的 Schema',
    subtitle: '阿誠是一個軟體工程師，每天都在跟Schema（模式）打交道...',
    advanced: false,
    description: '阿誠是一個軟體工程師，每天都在跟Schema（模式）打交道。他知道，一個好的 Schema 能讓數據有條不紊，而一個壞的 Schema，則會讓系統變得混亂不堪。有一天，他突然想，如果人生也有 Schema 會怎麼樣呢？他開始設計屬於他的專屬 Schema，但是卻發現自己的 Schema 無法運行，於是他仔細檢查了一下，發現**"happiness_level"** 居然是空的。這說明什麼？是不是他整個 Schema 設計錯了？他試圖 debug，修改目標、調整優先順序，甚至試著刪掉某些不必要的條件。但無論怎麼改，他的 "happiness_level" 還是始終為 null。最後，他靜靜地坐在電腦前，嘆了口氣。或許問題不是 Schema，而是——這個系統本來就沒有 happiness 這個字段。',
    duration: '1 minutes',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/gj3vnnb584m8skofv7dkf/146-01.jpg?rlkey=t4v2rzxw7gc9zvjvy0unfvgcn&st=olwzifmp&dl=1',
    title: '長大的真相',
    subtitle: '小時候以為長大後...',
    advanced: false,
    description: '小時候以為長大後，會變得無所不能。結果只是變得無能為力。',
    duration: '19 days',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/yswvvb1l5bt42padi6qmc/131.jpg?rlkey=72pv2h6842wl18xptza6e27qb&st=u12c6bxb&dl=1',
    title: '我可以的...吧?',
    subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
    advanced: false,
    description: '有時候覺得自己已經習慣了壓抑，笑著說沒事，點頭說「我可以的」，但其實內心早已千瘡百孔。我不知道還能撐多久，也不知道到底是為了什麼而撐著。',
    duration: '9 minutes',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/gj3vnnb584m8skofv7dkf/146-01.jpg?rlkey=t4v2rzxw7gc9zvjvy0unfvgcn&st=olwzifmp&dl=1',
    title: '我們錯過了嗎？',
    subtitle: '有時候，會忍不住想，如果當初我們勇敢一點...',
    advanced: false,
    description: '有時候，會忍不住想，如果當初我們勇敢一點，結果會不會不一樣？如果沒有那場誤會，或者我們再多愛彼此一點，現在是不是還能在一起？但人生沒有如果，只有遺憾。',
    duration: '36 minutes',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/yswvvb1l5bt42padi6qmc/131.jpg?rlkey=72pv2h6842wl18xptza6e27qb&st=u12c6bxb&dl=1',
    title: '人為什麼活著？',
    subtitle: '這個問題沒有標準答案。有人為了夢想...',
    advanced: false,
    description: '這個問題沒有標準答案。有人為了夢想，有人為了責任，有人只是因為「不得不活」。但如果把「意義」當作活下去的理由，那麼當我們找不到意義時，是不是就會失去繼續的動力？或許，活著本身就是一種意義，不需要特別去定義它。當我們不再執著於尋找一個「理由」，而是單純去體驗生活的每一刻時，人生才真正開始。',
    duration: '3 years',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/gj3vnnb584m8skofv7dkf/146-01.jpg?rlkey=t4v2rzxw7gc9zvjvy0unfvgcn&st=olwzifmp&dl=1',
    title: '終點在哪？',
    subtitle: '每天都在走，卻不知道終點在哪...',
    advanced: false,
    description: '每天都在走，卻不知道終點在哪。我不知道這樣的日子還要持續多久，也不知道自己還能撐多久。只是一步一步地往前走，沒有方向，也沒有期待。',
    duration: '6 days',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/gj3vnnb584m8skofv7dkf/146-01.jpg?rlkey=t4v2rzxw7gc9zvjvy0unfvgcn&st=olwzifmp&dl=1',
    title: '沒有人記得的日子',
    subtitle: '今天是我的生日，但沒有人記得...',
    advanced: false,
    description: '今天是我的生日，但沒有人記得。我沒有期待，也沒有失望，只是有種莫名的空虛感。或許，我真的不那麼重要吧。',
    duration: '12 days',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/yswvvb1l5bt42padi6qmc/131.jpg?rlkey=72pv2h6842wl18xptza6e27qb&st=u12c6bxb&dl=1',
    title: '擁有 vs. 失去',
    subtitle: '人總是習慣專注在「失去」的東西，而忽略了自己「擁有」的一切...',
    advanced: false,
    description: '人總是習慣專注在「失去」的東西，而忽略了自己「擁有」的一切。我們擁有健康時，覺得它理所當然，直到生病才發現它的珍貴；擁有愛時，覺得它是必然，直到失去才知道有多痛。如果能珍惜當下，而不是等到失去才後悔，那是不是就能少一些遺憾？或許，幸福不是擁有更多，而是懂得感謝眼前的一切。',
    duration: '49 minutes',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/gj3vnnb584m8skofv7dkf/146-01.jpg?rlkey=t4v2rzxw7gc9zvjvy0unfvgcn&st=olwzifmp&dl=1',
    title: '真正的強大',
    subtitle: '這世界總是教我們要堅強，要忍耐，要不被打倒...',
    advanced: false,
    description: '這世界總是教我們要堅強，要忍耐，要不被打倒。但真正的強大，並不是從不脆弱，而是敢於承認自己的脆弱。當我們能夠坦然接受自己的不完美，承認自己有時候會害怕、會崩潰、會無能為力，那才是真正的勇敢。因為只有接受自己的全部，才能真正成為自己。',
    duration: '6 years',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/yswvvb1l5bt42padi6qmc/131.jpg?rlkey=72pv2h6842wl18xptza6e27qb&st=u12c6bxb&dl=1',
    title: '戀愛的日常',
    subtitle: '喜歡一個人的時候，世界好像都變得不一樣了...',
    advanced: false,
    description: '喜歡一個人的時候，世界好像都變得不一樣了。連平凡的日子都變得可愛了起來，連無聊的話題都能聊上半天。你的訊息讓我期待，你的聲音讓我安心，你的存在讓我覺得，這個世界沒有那麼冷漠。愛情最美好的，或許不是轟轟烈烈的激情，而是這樣細水長流的陪伴吧。',
    duration: '3 months',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/gj3vnnb584m8skofv7dkf/146-01.jpg?rlkey=t4v2rzxw7gc9zvjvy0unfvgcn&st=olwzifmp&dl=1',
    title: '你的不經意，我的心動',
    subtitle: '今天你隨口說了一句「小心點」，我愣住了好幾秒...',
    advanced: false,
    description: '今天你隨口說了一句「小心點」，我愣住了好幾秒。對你來說，或許只是再普通不過的關心，但對我來說，卻是一整天的心動。原來，喜歡一個人，就是這麼容易被打動啊。',
    duration: '59 seconds',
  },
  {
    img: 'https://www.dropbox.com/scl/fi/yswvvb1l5bt42padi6qmc/131.jpg?rlkey=72pv2h6842wl18xptza6e27qb&st=u12c6bxb&dl=1',
    title: '不愛了嗎？',
    subtitle: '最近你的訊息越來越少了，回應也不再像從前一樣熱絡...',
    advanced: false,
    description: '最近你的訊息越來越少了，回應也不再像從前一樣熱絡。以前的「晚安」變成了已讀，問你怎麼了，你只是淡淡說：「沒什麼。」愛情好像也是這樣慢慢變淡的吧，不是某一天突然結束，而是逐漸冷卻，直到某一方發現，我們好像已經沒那麼愛了。',
    duration: '45 minutes',
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
