/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import '@fontsource/merriweather'; // 預設載入 400 字重
import '@fontsource/merriweather/700.css'; // 若要載入特定字重
import "@fontsource/noto-serif-tc"; // 預設權重 400
import "@fontsource/noto-serif-tc/500.css"; // 只載入 500 權重
import "@fontsource/noto-serif-tc/600.css"; // 只載入 600 權重
import "@fontsource/noto-serif-tc/700.css"; // 只載入 700 權重
import "@fontsource/noto-serif-tc/800.css"; // 只載入 800 權重
import "@fontsource/noto-serif-tc/900.css"; // 只載入 900 權重


const app = createApp(App)

registerPlugins(app)

app.mount('#app')
