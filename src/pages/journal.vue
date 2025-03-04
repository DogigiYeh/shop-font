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
    <v-card class="diaryCard" style="color: #102b05" prepend-icon="mdi-bookshelf" title="新增日記">
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
        <v-btn text="cancel:_(" variant="plain" @click="diaryDialog = false"></v-btn>
        <v-btn color="#102b05" text="save:_)" variant="tonal" @click="saveDiary"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

          <!-- <v-col cols="auto">
            <v-btn density="default">日記草稿:_)</v-btn>
          </v-col> -->

          <!-- 個人資料按鈕 (包在 v-dialog) -->
          <v-col cols="auto">
            <v-dialog v-model="profileDialog" max-width="600">
              <template #activator="{ props }">
                <v-btn density="default" v-bind="props">個人資料:_)</v-btn>
              </template>

              <v-card class="profileCard" style="color: #102b05;" prepend-icon="mdi-card-account-details-outline" title="個人資料:_)">
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
                      <v-textarea v-model="user.dendro" label="DENDRO:_)" required></v-textarea>
                    </v-col>
                  </v-row>
                  <small class="text-caption text-medium-emphasis">*表示必填字段</small>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text="cancel:_(" variant="plain" @click="profileDialog = false"></v-btn>
                  <v-btn color="#102b05" text="save:_)" variant="tonal" @click="saveProfile"></v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>

          <v-col cols="auto">
            <v-btn density="default" v-bind="activatorProps" @click="publicDialog = true">
              公開日記:_)
            </v-btn>
          </v-col>

          <v-dialog v-model="publicDialog" max-width="400" persistent>
            <v-card class="publicCard" style="color: #102b05;">
              <v-card-title class="headline">
                事前通知：公開日記後無法再隱藏
              </v-card-title>

              <v-divider></v-divider>

              <p class="text-content">
                親愛的使用者，<br><br>
                感謝你使用「年輪說」，我們希望為每一位書寫者提供一個安心且自由的書寫空間。<br><br>
                為了維護平台的初衷，確保公開內容的穩定性與可持續性，我們特別提醒：<br><br>
                <span class="highlight">一旦日記被設定為公開，將無法再改回隱藏狀態。</span><br><br>
                這項設計旨在保護平台內的分享機制，避免內容頻繁變動，確保每一篇公開的日記都能長期供他人閱讀與探索。因此，在選擇公開前，請務必確認你的內容是否適合公開，並謹慎做出決定。
              </p>
            <template #actions>

              <v-divider></v-divider>

              <v-spacer></v-spacer>
                <v-btn @click="publicDialog = false">
                  Disagree:_(
              </v-btn>
                <v-btn @click="publicDialog = false">
                  Agree:_)
              </v-btn>
            </template>
            </v-card>
          </v-dialog>


          <!-- <v-col cols="auto">
            <v-btn density="default">查詢日記:_)</v-btn>
          </v-col> -->
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
          height="360"
          width="640"
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
      <div v-if="model !== null" class="text-center mt-4 centered" >
        <h1 class="text-h4 font-weight-bold mt-10">{{ diaryEntries[model].date }}</h1>
        <h2 class="text-h5 font-weight-bold mt-2">{{ diaryEntries[model].title }}</h2>
        <p class="text-subtitle-1 mt-2">{{ diaryEntries[model].content }}</p>
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

const publicDialog = ref(false);

const user = ref({
  name: "",
  email: "",
  password: "",
  dendro: "",
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

const diaryEntries = ref([
  { date: "2月1日", title: "新的開始", content: "二月的第一天，總覺得應該做點什麼來象徵一個新的開始。整理了工作區，把桌面上的東西重新擺放，清理了電腦裡堆積的檔案。這些看似微不足道的事，卻讓心情變得清爽了不少。希望這個月能保持這種條理分明的狀態，無論是生活還是學習，都能有條不紊地前進。" },
  { date: "2月2日", title: "迷茫與前進", content: "今天學習時遇到了一些瓶頸，感覺有點卡住，甚至開始懷疑自己是不是不夠聰明。這種時候真的很容易陷入低潮，不過我知道，這只是學習過程中必然會遇到的階段。回想起過去也有許多次這樣的時刻，但最後還是走過來了。或許，真正重要的不是天賦，而是願不願意在迷茫的時候，選擇繼續前進。" },
  { date: "2月3日", title: "重新整理學習計畫", content: "二月的第三天，空氣裡還帶著冬天的冷意，但陽光開始變得柔和。今天打算重新整理學習計畫，最近學 Vue 3 總覺得有點卡住，希望這個月能有突破。學程式的過程中，最讓人挫折的就是遇到錯誤卻找不到原因，但也正是這種解謎般的挑戰讓學習變得有趣。晚上泡了一杯熱茶，整理了自己的學習筆記，發現其實這段時間還是進步不少的。希望接下來能夠更有條理地安排學習內容，讓自己能夠穩定成長。" },
  { date: "2月4日", title: " Debug 的挑戰", content: "週末的早晨，難得睡了一個好覺。今天試著寫了一個簡單的計算機功能，結果變數搞錯了好幾次，Debug 半天才修好。這讓我深刻體會到，寫程式不只是寫出功能，還要清楚自己的邏輯，才能避免不必要的錯誤。午後去了一趟書店，買了一本關於 JavaScript 的書，希望能夠補強自己的基礎知識。晚上試著用新學的語法寫了一個小功能，雖然還不太熟練，但至少知道方向。希望這個週末能把這部分學好。" },
  { date: "2月5日", title: "咖啡廳裡的學習時光", content: "下班後去了一家新的咖啡廳，邊喝咖啡邊看 JavaScript 文件，覺得自己變成了標準的「工程師養成模式」。學習 Vue 3 讓我感覺像是在搭建一座房子，每個元件都是一塊磚，組合起來才能變成完整的建築。這讓我思考，程式設計其實也是一種創作的過程，每個小細節都決定了最終的成果。晚上回家後，試著用 Vue 3 做了一個小組件，雖然遇到了一些困難，但最後還是成功了。這種成就感讓我覺得，一點一點的努力真的會帶來改變。" },
  { date: "2月6日", title: "八尺大人的恐怖傳說", content: "今天聽了一個日本的都市傳說，說有個叫「八尺大人」的怪物，專門找年輕人下手，想到就覺得背脊發涼。八尺大人是一個高達兩公尺以上的女性身影，穿著白色洋裝，會用詭異的聲音低語。據說，只要被她盯上，就很難逃脫。這讓我想到，恐怖故事之所以可怕，不只是因為內容驚悚，更是因為它讓我們產生聯想。如果能夠用程式設計出一個互動式的恐怖故事，會不會更有沉浸感？這或許是一個有趣的挑戰，值得考慮。" },
  { date: "2月7日", title: "學習低潮的一天", content: "今天心情有點低落，寫的程式一直出錯，感覺自己好像沒進步。不過看看以前的筆記，發現其實已經學了不少，算是給自己一點鼓勵。學習程式的過程總是這樣，時而覺得自己進步神速，時而又懷疑自己是不是永遠學不會。今天決定調整心態，告訴自己不要求快，而是要穩定成長。晚上看了一些開發者的學習經歷，發現大家其實都有過這樣的低潮期，這讓我安心不少。希望明天能有更好的狀態，繼續前進。" },
  { date: "2月8日", title: "初探 CSS 動畫", content: "最近對 CSS 有點興趣，想學會怎麼做出漂亮的動畫效果，看了幾個範例，覺得可以試試看。CSS 不只是排版的工具，還能創造視覺上的變化，讓網站變得更生動。今天試著做了一個簡單的 hover 動畫，雖然只是讓按鈕變色，但還是很有成就感。接下來想試著做更複雜的動畫，比如文字輸入時的流暢特效，或是頁面切換的過渡動畫。這樣的學習過程讓我覺得，程式設計不只是邏輯的組合，更是美感的表現方式。" },
  { date: "2月9日", title: "休息與整理的必要性", content: "最近天氣忽冷忽熱，總覺得身體有點累，決定今天早點睡，不然學習效率也會變差。適當的休息和健康管理也是學習的一部分，如果身體狀況不好，再怎麼努力都無法真正吸收知識。今天試著回顧這週學到的東西，發現自己在 Vue 3 的理解上又更進一步了，雖然還有很多不懂的地方，但至少不像剛開始時那麼迷茫。晚上花了點時間整理電腦資料，清理掉一些用不到的舊檔案，感覺心情也變輕鬆了些。" },
  { date: "2月10日", title: "錯過的夕陽", content: "今天下班時，發現天空被染成了溫柔的橘紅色。我加快腳步，想在天黑前到河邊看看，可惜還是差了一點，抵達時天色已經暗了下來。心裡有點遺憾，但又覺得這樣也很好——錯過一次夕陽，意味著還有下一次可以期待。人生不就是這樣嗎？有些風景留不住，但它曾經存在過，就足夠了。" },
  { date: "2月11日", title: "學習是一場耐力賽", content: "今天試著解一道 JavaScript 的題目，花了好久才找到解法。當發現答案時，有種鬆了口氣的感覺，但也讓我反思：學習從來不是一場短跑，而是一場耐力賽。有時候當下不懂的東西，過一陣子回頭看，才發現自己已經無形中進步了很多。或許，不需要急著成為很厲害的人，只要持續向前，總有一天會走到更遠的地方。" },
  { date: "2月12日", title: "雨天的節奏", content: "細雨綿綿，整座城市像被籠罩在一層薄霧裡。窗外的行人撐著傘，雨滴落在玻璃上，發出輕輕的聲響。這樣的天氣，最適合泡一杯熱茶，窩在角落讀一本書，或者靜靜地聽音樂，讓自己的步調放慢下來。偶爾停下來，聆聽雨聲，也是一種生活的方式。" },
  { date: "2月13日", title: "夜晚的程式挑戰", content: "今晚挑戰了一道關於陣列處理的程式題，一開始完全沒有頭緒，甚至覺得腦袋一片空白。後來試著拆解問題，把大問題變成幾個小步驟，慢慢地才看出解法。這讓我覺得，程式設計真的很像解謎，需要耐心，也需要找到對的思路。雖然最後還是參考了一些解法，但至少學到了一些新的技巧，這樣就值得了。" },
  { date: "2月14日", title: "情人節與自己的對話", content: "今天是情人節，路上多了許多手捧花束的人。我沒有特別安排，只是買了一塊蛋糕，當作送給自己的禮物。學習的路上，有時候會感到孤獨，但這份孤獨也讓我能夠專注在自己的目標上。能夠照顧好自己，努力讓生活變得更好，也是一種愛的表現吧。" },
  { date: "2月15日", title: "記錄自己的成長", content: "回顧了一下這兩週的學習筆記，發現自己從一開始不會 Vue 3，到現在可以寫出一些小組件，雖然不算厲害，但確實有進步。以前總覺得學習是一條漫長的路，但現在明白了，當你願意一步一步前進，終究會到達想去的地方。" },
  { date: "2月16日", title: "深夜的靜謐", content: "這幾天忙著學習，今天決定讓自己放鬆一下。夜深時，城市變得安靜，連空氣都帶著一絲冷冽的清新。我點了一盞小燈，泡了杯熱茶，翻了幾頁之前沒看完的書。這樣的夜晚讓人安心，彷彿時間可以暫時停下來，讓思緒隨意漂流。" },
  { date: "2月17日", title: "探索新技術", content: "今天嘗試接觸了一些新的前端技術，雖然還不太熟悉，但有種開啟新世界的感覺。學習技術最有趣的地方，就是你永遠有無窮無盡的東西可以探索，每次跨出一步，都能看到不一樣的風景。這也是我喜歡寫程式的原因吧。" },
  { date: "2月18日", title: "小確幸", content: "中午的時候去了一家新發現的咖啡店，點了一杯手沖咖啡，結果意外地好喝。最近學習的壓力有點大，但這杯咖啡讓我覺得，生活裡還是有很多值得期待的小事。或許，人生就是這樣，一邊努力前進，一邊尋找那些讓人快樂的瞬間。" },
  { date: "2月19日", title: "重拾舊愛好", content: "今晚翻出了之前畫的素描本，發現自己已經很久沒畫畫了。學程式的時間越來越多，反而忽略了那些讓自己放鬆的愛好。決定之後每週留一點時間給畫畫，不是為了畫得多好，而是為了找回曾經那份純粹的快樂。" },
  { date: "2月20日", title: "錯誤與成長", content: "今天又遇到了一個棘手的 Bug，花了好幾個小時才找到問題，最後發現只是少打了一個括號。雖然有點無奈，但也提醒了自己，寫程式真的不能急，要保持細心。每一次錯誤，都是讓自己變得更好的機會。" },
  { date: "2月21日", title: "風與自由", content: "下班後去河邊散步，風有點冷，但很舒服。望著河面上的波光，突然覺得學習程式的過程，就像水流一樣，有時順暢，有時顛簸，但只要不停下來，終究會流向更廣闊的地方。" },
  { date: "2月22日", title: "程式碼之外的思考", content: "學習程式的時候，常常專注於如何解決問題，但今天在寫 Code 的時候，突然想到：技術只是工具，重點是它能幫助我們做些什麼。如果有一天，我能用技術創造出真正有價值的東西，那才算是學有所成吧。" },
  { date: "2月23日", title: "意外的靈感", content: "今天在路上看到一棵老樹，它的樹皮佈滿歲月的痕跡，讓我想到自己的時間膠囊專案。樹年輪記錄著時間，人們的日記何嘗不是呢？希望未來可以在這個專案裡，讓人們更自由地記錄自己的故事。" },
  { date: "2月24日", title: "累了就休息", content: "這幾天學習很拼，今天突然覺得有點疲憊。與其逼自己繼續，不如停下來休息一下。學習不是短跑，而是長久的累積，適當的放鬆，才能走得更遠。今晚決定早點睡，明天再繼續努力。" },
  { date: "2月25日", title: "嘗試新挑戰", content: "今天試著自己寫一個簡單的 Vue 3 專案，雖然還有很多不懂的地方，但總算跨出了第一步。每次挑戰新的東西，都會有些不安，但只有去做了，才能真正學會。" },
  { date: "2月26日", title: "觀察日常的細節", content: "今天刻意放慢腳步，仔細觀察身邊的事物。發現每天走過的街道，其實藏著很多細節：牆上的小塗鴉、老房子陽台上的盆栽、巷口攤販的笑容。或許，學習也是這樣，只有真正去觀察、去體會，才能發現其中的樂趣。" },
  { date: "2月27日", title: "感謝過去的自己", content: "回頭看這個月的日記，發現自己比想像中更努力。雖然過程中有過低潮，也有過迷茫，但至少，我一直沒有放棄。今天想對過去的自己說一聲謝謝，謝謝你選擇了繼續前進。" },
  { date: "2月28日", title: "新的開始", content: "二月的最後一天，意味著新的開始即將到來。學習的路還很長，但我已經比昨天更接近目標了。希望三月的自己，能夠帶著這份熱情，繼續向前走。" },
  { date: "3月1日", title: "三月的展望", content: "新的月份開始了，這個月想讓自己更有節奏地學習，也希望能嘗試一些新的挑戰。最近 Vue 3 的進度還算順利，或許可以開始著手一個小專案，實踐所學的東西。天氣漸漸回暖，心情也跟著輕快起來，希望能保持這樣的動力，一步步前進。" },
  { date: "3月2日", title: "久違的散步", content: "今天難得放自己一天假，沒有學習，也沒有打開電腦，而是出去散步了很久。走過熟悉的街道，看到春天的氣息慢慢浮現，店家的擺設也換上了新裝。偶爾停下來，看看來往的人群，覺得生活裡的細節其實很有趣。或許，下次也該試著把這些日常的觀察記錄下來，說不定會成為靈感的來源。" },
  { date: "3月3日", title: "關於恐怖與心理暗示", content: "最近發現，恐怖故事之所以讓人害怕，除了內容本身，還有一種心理暗示的效果。例如當你聽完一則詭異的故事，夜晚走在路上時，腦海裡就會開始浮現那些畫面，哪怕其實什麼都沒發生，心跳還是會不自覺加快。這讓我想到，如果能夠結合這種心理機制來設計互動故事，應該會很有趣。或許，未來可以嘗試寫一個帶有「心理暗示」效果的短篇。" },
  { date: "3月4日", title: "投入新專案的第一步", content: "今天正式開始規劃新的 Vue 3 小專案，打算做一個簡單的日記管理工具，讓使用者可以紀錄自己的心情和想法，並透過標籤來分類。這個功能聽起來不難，但實作時一定還會遇到很多問題。不過，這就是開發的樂趣——把一個想法慢慢實現，最後變成真正可以使用的東西。希望這次能夠順利完成！" },
  { date: "3月5日", title: "小小的進步也是進步", content: "今天在開發專案時，終於成功讓標籤分類功能運作起來了！雖然只是個小小的進展，但還是讓我很有成就感。學習程式設計的過程就像拼圖一樣，每解決一個小問題，都讓整體變得更完整。接下來想試著優化 UI，讓操作更直覺一些，希望能把這個專案做得更好。" },
]);
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

.text-content {
  display: block; /* 讓 <span> 變成 block，才有效果 */
  margin: 20px; /* 設定外邊距 */
  white-space: pre-line; /* 讓 \n 變成換行 */
}

.highlight {
  font-weight: bold; /* 讓文字變粗體 */
}

.headline {
  font-weight: bold;
  margin-top: 10px;
}

.diaryCard {
  background-color: #efeee7;
}

.profileCard {
  background-color: #efeee7;
}

.publicCard {
  background-color: #efeee7;
}

.centered {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
