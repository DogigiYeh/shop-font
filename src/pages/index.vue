<template>
  <v-container>
    <!-- 圖片上的文字 -->
    <div id="text" class="container ">
      <div class="grid1 animate__animated animate__fadeInUp">
        <div class="text1">DENDRO</div>
        <div class="text1">WELCOME</div>
        <div class="text1 small-text1">Living Memories Encased in Rings</div>
      </div>
    </div>
    <!-- 分離 Swiper 區塊 -->
    <div id="img" class="swiper-container animate__animated animate__slideInDown">
      <swiper
        :slides-per-view="3"
        :space-between="30"
        :loop="true"
        :centered-slides="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="false"
        :free-mode="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide><img src="../assets/01.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/09.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/02.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/06.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/03.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/07.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/04.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/08.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/05.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/10.jpg"></swiper-slide>
      </swiper>
    </div>

    <div class="line-separator"></div> <!-- 上分隔線 -->
    <!-- about 區 -->
    <swiper
    :style="{
      '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    :autoplay="false"
    class="mySwiper"
  >

    <!-- 🚀 Slide 1: "ABOUT" 區塊 -->
    <swiper-slide>
  <v-container class="pa-0">
    <v-row class="ma-1 pa-0">
      <v-col cols="12" class="pa-0">
        <div id="text" class="container">
          <div class="grid2 text-center">
            <h2 class="text2">MOTIVATION</h2>
            <p class="text2 small-text2">Echoes of Growth</p>
          </div>
          <!-- 主要內容 -->
          <v-row class="mt-10 d-flex align-center">
            <!-- 左側圖片 -->
            <v-col cols="12" md="4" class="d-flex justify-center">
              <img src="../assets/11.jpg" aspect-ratio="16/9" class="rounded-lg img-style" />
            </v-col>
            <!-- 右側文字內容 -->
            <v-col cols="12" md="6" class="text-right align-self-end">
              <h3 class="text5 text-lg font-bold">DENDRO 年輪時間日記</h3>
              <p class="text4 mt-5">
                在快速變遷的時代，我們的情感與記憶常被忽略<br />
                「年輪說」誕⽣於⼀個願望<br />
                為每個⼈提供⼀⽚匿名書寫的淨⼟<br />
                讓真實情感化為永恆印記<br />
                不可編輯與刪除的設計，賦予當下珍貴的重量<br />
                分享⽇記，則連結個體與世界，透過探索他⼈的故事<br />
                發現共鳴與治癒⼒量<br />
                我們希望，每⼀篇⽇記都如年輪般記錄時間的痕跡<br />
                溫暖並豐富每個⼈的內⼼世界<br />
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</swiper-slide>


    <!-- 🚀 Slide 2 -->
    <swiper-slide>
      <v-container class="pa-0">
    <v-row class="ma-1 pa-0">
      <v-col cols="12" class="pa-0">
        <div id="text" class="container">
          <div class="grid2 text-center">
            <h2 class="text2">STORY</h2>
            <p class="text2 small-text2">Echoes of Growth</p>
          </div>
          <!-- 主要內容 -->
          <v-row class="mt-10 d-flex align-center">
            <!-- 左側圖片 -->
            <v-col cols="12" md="4" class="d-flex justify-center">
              <img src="../assets/11.jpg" aspect-ratio="16/9" class="rounded-lg img-style" />
            </v-col>
            <!-- 右側文字內容 -->
            <v-col cols="12" md="6" class="text-right align-self-end">
              <h3 class="text5 text-lg font-bold">品牌故事</h3>
              <p class="text4 mt-5">
                靈感來源於 "Dendrochronology"（樹木年輪學）這是⼀⾨透過分析年輪來研究歷史的科學<br />
                年輪不僅是時間的印記，更象徵著⽣命的延續與成⻑<br />
                <br />
                希望⼈們能像樹木⼀樣，將⾃⼰的故事層層累積，成為⼈⽣的年輪。每⼀次記憶的封存<br />
                都是⼀圈新的成⻑，象徵著⽣命的厚度與意義<br />
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
    </swiper-slide>

    <!-- 🚀 Slide 3 -->
    <swiper-slide>
  <v-container class="pa-0">
    <v-row class="ma-1 pa-0">
      <v-col cols="12" class="pa-0">
        <div id="text" class="container">
          <div class="grid2 text-center">
            <h2 class="text2">MOTIVATION</h2>
            <p class="text2 small-text2">Echoes of Growth</p>
          </div>
          <!-- 主要內容 -->
          <v-row class="mt-10 d-flex align-center">
            <!-- 左側圖片 -->
            <v-col cols="12" md="4" class="d-flex justify-center">
              <img src="../assets/11.jpg" aspect-ratio="16/9" class="rounded-lg img-style" />
            </v-col>
            <!-- 右側文字內容 -->
            <v-col cols="12" md="6" class="text-right align-self-end">
              <h3 class="text5 text-lg font-bold">DENDRO 年輪時間日記</h3>
              <p class="text4 mt-5">
                在快速變遷的時代，我們的情感與記憶常被忽略<br />
                「年輪說」誕⽣於⼀個願望<br />
                為每個⼈提供⼀⽚匿名書寫的淨⼟<br />
                讓真實情感化為永恆印記<br />
                不可編輯與刪除的設計，賦予當下珍貴的重量<br />
                分享⽇記，則連結個體與世界，透過探索他⼈的故事<br />
                發現共鳴與治癒⼒量<br />
                我們希望，每⼀篇⽇記都如年輪般記錄時間的痕跡<br />
                溫暖並豐富每個⼈的內⼼世界<br />
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</swiper-slide>
  </swiper>
      <div class="line-separator"></div>

    <!-- 搜索框 -->
    <!-- <div class="line-separator"></div> 上分隔線 -->
    <v-row>
      <v-col cols="12">
        <div id="text" class="container">
          <div class="grid3">
            <div class="text3">EXPLORE</div>
            <div class="text3 small-text3">Looking for Other People’s Stories</div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="search" label="Search" rounded="lg" prepend-inner-icon="mdi-magnify"></v-text-field>
      </v-col>
    </v-row>

    <!-- 產品列表 -->
    <v-row>
      <v-col v-for="product in filteredProducts" :key="product._id" cols="12" md="6" lg="3">
        <product-card v-bind="product"></product-card>
      </v-col>
    </v-row>

    <!-- 分頁 -->
    <v-row>
      <v-col cols="12">
        <v-pagination v-model="currentPage" :length="totalPage"></v-pagination>
      </v-col>
    </v-row>
    <!-- <div class="line-separator"></div> 下分隔線 -->
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAxios } from '@/composables/axios'
import ProductCard from '@/components/ProductCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'  // 加入 FreeMode 模組的樣式
import 'animate.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Autoplay, Pagination, FreeMode } from 'swiper/modules' // 移除 Navigation，加入 FreeMode

// 註冊插件
gsap.registerPlugin(ScrollTrigger);


// 讓 .box 從左邊滑入
gsap.from(".box", { x: -200, opacity: 0, duration: 1 });

const modules = [Autoplay, Pagination, FreeMode] // 不再包含 Navigation
const { api } = useAxios()

const ITEMS_PER_PAGE = 8
const currentPage = ref(1)
const products = ref([])
const search = ref('')

const totalPage = computed(() => Math.ceil(products.value.length / ITEMS_PER_PAGE))

const filteredProducts = computed(() => {
  return products.value
    .filter(product => product.name.toLowerCase().includes(search.value.toLowerCase()))
    .slice((currentPage.value - 1) * ITEMS_PER_PAGE, currentPage.value * ITEMS_PER_PAGE)
})

const getProducts = async () => {
  try {
    const { data } = await api.get('/product')
    products.value.push(...data.result)
  } catch (error) {
    console.log(error)
  }
}
getProducts()
</script>

<style>
.mySwiper {
  width: 100%; /* 滿版寬度 */
  height: 100vh; /* 高度改為 60% 視窗高度 */
  margin-bottom: 20px;
  display: flex;
  justify-content: center; /* 置中 */
  align-items: center;
}

.mySwiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3 - 15px);  /* 讓每張圖片分配 1/3 寬度，扣掉間距 */
  height: auto;
}

.mySwiper .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 讓圖片滿版，裁剪超出的部分 */
  border-radius: 10px; /* 可選，讓圖片有點圓角 */
}

/* 新增分隔線樣式 */
.line-separator {
  border-top: 1px solid #ccc; /* 灰色分隔線 */
  margin: 20px 0; /* 上下間距 */
}

.container {
  position: relative; /* 讓內部的絕對定位元素相對於此 */
}

.grid1 {
  position: absolute;
  top: 10%;  /* 調整這個數值來改變文字的位置 */
  left: -5%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: left;
  z-index: 10; /* 確保文字在圖片上方 */
}
.grid2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid3 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text1 {
  font-size: 5rem; /* 文字大小 */
  font-weight: bold;
  font-family: 'Merriweather';
  color: #140e02; /* 文字顏色，可根據需求調整 */
  padding: 10px 20px;
  border-radius: 10px;
}

.text2 {
  font-size: 2rem; /* 文字大小 */
  font-weight: bold;
  font-family: 'Merriweather';
  color: #140e02; /* 文字顏色，可根據需求調整 */
  padding: 10px 20px;
  border-radius: 10px;
}

.text3 {
  font-size: 2rem; /* 文字大小 */
  font-weight: bold;
  font-family: 'Merriweather';
  color: #140e02; /* 文字顏色，可根據需求調整 */
  padding: 10px 20px;
  border-radius: 10px;
}

.text4 {
  font-size: 1.2rem;
  font-family: 'Noto Serif TC';
  font-weight: 500;
}

.text5 {
  font-size: 2rem;
  font-family: 'Noto Serif TC';
  font-weight: 900;
}

.small-text1 {
  font-size: 1.7rem; /* 讓第三行字變小 */
  font-weight: bold;
  color: #140e02;
  margin-top: 0.5px; /* 與上方文字間距 */
}

.small-text2 {
  font-size: 1rem; /* 讓第三行字變小 */
  font-weight: bold;
  color: #140e02;
  margin-top: 0.1px; /* 與上方文字間距 */
}

.small-text2::after {
  content: "";
  display: block;
  width: 100px; /* 控制短線的長度 */
  height: 1px; /* 控制短線的粗細 */
  background-color: #102b05; /* 可以改成你想要的顏色 */
  margin: 20px auto 0;
}

.small-text3 {
  font-size: 1rem; /* 讓第三行字變小 */
  font-weight: bold;
  color: #140e02;
  margin-top: 0.1px; /* 與上方文字間距 */
}

.small-text3::after {
  content: "";
  display: block;
  width: 100px; /* 控制短線的長度 */
  height: 1px; /* 控制短線的粗細 */
  background-color: #102b05; /* 可以改成你想要的顏色 */
  margin: 20px auto 0;
}

#img {
  animation-duration: 3s; /* don't forget to set a duration! */
}

.img-style {
  max-width: 100%;
  height: auto;
}

.container {
  padding: 20px;
}

@media (min-width: 960px) {
  .text-left {
    text-align: left;
  }
}

#text {
  position: relative; /* 或 absolute，如果你不希望它影響其他元素 */
  top: -50px; /* 調整這個數值來控制上移的距離 */
}
</style>
