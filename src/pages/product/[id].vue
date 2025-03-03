<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">{{ product.name }}</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" md="6">
        <v-img :src="product.image"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>{{ product.description }}</p>
        <v-btn prepend-icon="mdi-magnify-expand" class="explore-btn" style="color: #102b05;" @click="goHome">{{ $t('nav.explore') }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-overlay :model-value="!product.sell" class="align-center justify-center" scrim="black" opacity="0.8" persistent>
    <h1 class="text-center">{{ $t('api.productNotOnSell') }}</h1>
  </v-overlay>
</template>

<script setup>
import { ref } from 'vue'
import { useAxios } from '@/composables/axios'
import { useRoute, useRouter } from 'vue-router'

const { api } = useAxios()
const route = useRoute()
const router = useRouter()


const product = ref({
  _id: '',
  name: '',
  description: '',
  image: ''
})

const getProduct = async () => {
  try {
    const { data } = await api.get('/product/' + route.params.id)
    product.value = data.result
    document.title = product.value.name + ' | 購物網站'
  } catch (error) {
    console.log(error)
    router.push('/')
  }
}
getProduct()

const goHome = () => {
  router.push('/explore')
}
</script>

<style scoped>
.explore-btn {
  position: absolute;
  right: 200px;
  bottom: 370px;
}
</style>


<route lang="yaml">
meta:
  title: 'nav.product'
</route>
