import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.scss';
import components from '@/components/UI/';
const app = createApp(App);
components.forEach(element => {
    app.component(element.name, element);
});
app.use(store).use(router).mount('#app')
