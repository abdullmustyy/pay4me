import './assets/styles/main.css'

import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
      darkModeSelector: '.my-app-dark',
    },
  },
})

app.mount('#app')
