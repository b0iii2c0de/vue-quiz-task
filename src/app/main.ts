import '@/app/assets/main.css';

import { createApp } from 'vue';
import router from '@/app/router';
import store from '@/app/stores';

import App from '@/app/App.vue';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
