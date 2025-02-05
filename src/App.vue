<template>
  <v-app class="bg-lime-lighten-5">
    <router-view :key="$route.fullPath" />
  </v-app>
</template>

<style>
:root {
  --v-theme-myGreenColor: #102b05; /* 定義一個新的顏色 */
  --v-theme-myBrownColor: #422b01;  /* 另一個新的顏色 */
  --v-theme-myWhiteColor1: #efeee7;  /* 另一個新的顏色 */
  --v-theme-myWhiteColor2: #eae5d3;  /* 另一個新的顏色 */
  --v-theme-myWhiteColor3: #e2decc;  /* 另一個新的顏色 */
  --v-theme-myWhiteColor4: #d3cdb4;  /* 另一個新的顏色 */
  --v-theme-myWhiteColor5: #c6bfa3;  /* 另一個新的顏色 */
}
</style>
