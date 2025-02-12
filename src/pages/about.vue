<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <template #container-start>
      <div
        class="parallax-bg"
        :style="{
          'background-image': `url(${backgroundImage})`
        }"
        data-swiper-parallax="-23%"
      ></div>
    </template>

    <swiper-slide>
      <div class="title1" data-swiper-parallax="-300">INTRODUCTION</div><br>
    </swiper-slide>

    <swiper-slide>
      <div class="title2" data-swiper-parallax="-300">⼀個專屬於⽂字的匿名⽇記網站</div>
    </swiper-slide>

    <swiper-slide>
      <div class="text" data-swiper-parallax="-100">
        <p>
          ⽤戶可以書寫⾃⼰的⽇記並選擇是否公開分享。<br>
          公開的⽇記將化為永恆的記錄，<br>
          無法更改為私⼈，也無法編輯或刪除，<br>
          真實呈現書寫當下的情感與思緒。<br>
          ⽤戶可以探索他⼈的公開⽇記，收藏那些觸動⼼靈的⽂字，<br>
          發掘每⼀個年輪故事背後的獨特⾵景。<br>
          在年輪說，⽇記不僅是個⼈的紀錄，也是連結世界的橋樑。<br>
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

import backgroundImage from '@/assets/128.jpg'

const modules = [Parallax, Pagination, Navigation];
</script>

<style scoped>
.title1 {
  font-size: 6rem;
  font-family: 'Merriweather';
  font-weight: bold;
}

.title2 {
  font-size: 4rem;
  font-family: 'Noto Serif TC';
  font-weight: 800;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.text {
  font-size: 2rem;
  font-family: 'Noto Serif TC';
  font-weight: 600;
}

.mySwiper {
  width: 100vw;
  height: 100vh;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100%;
  padding-left: 5vw;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


</style>
