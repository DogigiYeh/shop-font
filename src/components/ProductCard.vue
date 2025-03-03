<template>
  <v-card class="custom-card" :to="'/product/' + _id">
    <v-img :src="image" height="360" cover class="card-image"></v-img>

    <div class="card-content">
      <v-card-title class="title">
        <router-link :to="'/product/' + _id">{{ name }}</router-link>
      </v-card-title>

      <v-card-text class="description">
        {{ showFullDescription ? description : shortText }}
        <span v-if="!showFullDescription && description.length > maxLength">...</span>
      </v-card-text>

      <v-card-actions class="card-actions">
        <v-icon size="18" style="color: #102b05;">mdi-bookshelf</v-icon>
        <span class="time-text">Click to see more</span>
        <v-spacer></v-spacer>
        <v-btn v-if="description.length > maxLength" variant="text" color="#102b05" @click="showFullDescription = !showFullDescription">
          {{ showFullDescription ? "收起" : "READ MORE:_)" }}
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  _id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})

// 重新命名 `_id`
const _id = computed(() => props._id)

const showFullDescription = ref(false)
const maxLength = 60 // 顯示的最大字數
const shortText = computed(() => props.description.slice(0, maxLength))
</script>

<style scoped>
.custom-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  max-width: 500px;
}

.card-image {
  position: relative;
  overflow: hidden;
}

.card-image::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2); /* 半透明白色 */
  backdrop-filter: blur(1px); /* 毛玻璃效果 */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.card-image:hover::after {
  opacity: 1;
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #efeee7f8;
  padding: 12px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.title a {
  text-decoration: none;
  color: #102b05;
  font-weight: bold;
}

.description {
  font-size: 14px;
  color: gray;
}

.card-actions {
  display: flex;
  align-items: center;
}

.time-text {
  font-size: 12px;
  margin-left: 4px;
  color: gray;
}
</style>
