import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import router from './router'
import './assets/main.css'
// import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
