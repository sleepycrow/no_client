/**
 * "You get so caught up on what could go wrong that you miss your chance to do anything, which is
 * just as bad."
 * -- Pride Leader Merin ("Reevesbane: Gryphon Insurrection Book 4", K. Vale Nagle)
 * 
 * ---
 * 
 * this is "No Client", an experimental client for an experiment in decentralized social media.
 * this code will be awful, and messy, and terrible. and that's okay.
 */

import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
