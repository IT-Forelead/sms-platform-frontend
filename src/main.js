import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './index.css'
import './script.js'
import 'flowbite'
import { VueMaskDirective } from 'v-mask';

const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
    beforeMount: vMaskV2.bind,
    updated: vMaskV2.componentUpdated,
    unmounted: vMaskV2.unbind
};

createApp(App).use(router).use(store).directive('mask', vMaskV3).mount('#app')
