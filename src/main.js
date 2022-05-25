import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './index.css'
import vClickOutside from 'v-click-outside'

createApp(App)
    .use(router)
    .use(store)
    .use(vClickOutside)
    .mount('#app')
