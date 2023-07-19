import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './icons/index.js'

createApp(App).use(store).mount('#app')
