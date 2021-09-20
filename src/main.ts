import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// element-plus
import 'element-plus/dist/index.css';
// app.config.globalProperties.$ELEMENT = {
//     size: 'small',
// }


app.use(store).use(router).mount('#app');
