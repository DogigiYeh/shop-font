<template>
  <v-container>
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
        <swiper-slide><img src="../assets/01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/09.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/02.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/06.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/03.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/07.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/04.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/08.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/05.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/10.jpg" alt=""></swiper-slide>
      </swiper>
    </div>

    <!-- 搜索框 -->
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify"></v-text-field>
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
</style>

