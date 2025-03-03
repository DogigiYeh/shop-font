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
</style>
