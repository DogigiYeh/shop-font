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


const app = createApp(App)

registerPlugins(app)

app.mount('#app')
