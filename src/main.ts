import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import Notifications from '@kyvg/vue3-notification'
// Added by the CLI
import './registerServiceWorker';
createApp(App).use(router).use(Notifications).mount('#app')
