import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from '../src/store/index';
import router from './router/router';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(store);
app.mount('#app');
