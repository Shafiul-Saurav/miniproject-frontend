import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import veeValidation from './utils/validation';
import VueSweetalert2 from 'vue-sweetalert2';
import VPagination from "@hennge/vue3-pagination";

import 'sweetalert2/dist/sweetalert2.min.css';
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(veeValidation)
app.component('v-pagination', VPagination)
app.use(VueSweetalert2, {
    confirmButtonColor: '#A95EEA',
    cancelButtonColor: '#FF7674',
})

app.mount('#app')
