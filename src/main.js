import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Router from './router'

createApp(App).use(store).use(Router).mount('#app');
