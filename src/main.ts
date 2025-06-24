import './assets/styles/main.css'

import Aura from '@primeuix/themes/aura'
import { createHead } from '@unhead/vue/client'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import { TemplateParamsPlugin } from 'unhead/plugins'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead({
  plugins: [TemplateParamsPlugin],
})

app.use(head)
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
app.use(router)

app.mount('#app')
