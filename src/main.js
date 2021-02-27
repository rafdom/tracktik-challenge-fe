import { createApp } from 'vue'
import App from './views/_app.vue'
import router from './router'
import './styles/global.css'

createApp(App).use(router).mount('#app')
