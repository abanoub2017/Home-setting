import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import Notifications from '@kyvg/vue3-notification'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// Added by the CLI
import './registerServiceWorker';
createApp(App).use(router).use(VueSidebarMenu).use(Notifications).mount('#app')
