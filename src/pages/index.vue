<template>
  <v-container>
    <div class="container">
      <div class="grid">
        <div class="text">DENDRO</div>
        <div class="text">WELCOME</div>
      </div>
    </div>
    <!-- 分離 Swiper 區塊 -->
    <div class="swiper-container">
      <swiper
        :slides-per-view="3"
        :space-between="30"
        :loop="true"
        :centered-slides="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{ clickable: true }"
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

    <!-- 搜索框 -->
    <div class="line-separator"></div> <!-- 上分隔線 -->
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="search" label="Search" rounded="lg" prepend-inner-icon="mdi-magnify"></v-text-field>
      </v-col>
    </v-row>
    <div class="line-separator"></div> <!-- 下分隔線 -->

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
import { Autoplay, Pagination, FreeMode } from 'swiper/modules' // 移除 Navigation，加入 FreeMode

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

.grid {
  position: absolute;
  top: 50%;  /* 調整這個數值來改變文字的位置 */
  left: 10%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: left;
  z-index: 10; /* 確保文字在圖片上方 */
}

.text {
  font-size: 6rem; /* 文字大小 */
  font-weight: bold;
  font-family: 'Merriweather';
  color: #140e02; /* 文字顏色，可根據需求調整 */
  padding: 10px 20px;
  border-radius: 10px;
}
</style>
