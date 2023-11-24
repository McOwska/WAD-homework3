import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; 
import Router from './router';

const app = createApp(App);

app.use(store);
app.use(Router);

app.mount('#app');
