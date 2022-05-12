import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/main.css'
import '@/assets/styles/variables.css'
import '@/assets/styles/basic styles/textStyles.css'
import '@/assets/styles/basic styles/basicStyles.css'
import '@/assets/styles/basic styles/flex.css'
import '@/assets/styles/basic styles/devStyles.css'


createApp(App).use(router).mount('#app')

