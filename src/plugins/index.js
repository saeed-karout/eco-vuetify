/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import i18n from './i18n'
import AOS from 'aos'



 import 'aos/dist/aos.css'








pinia.use(piniaPluginPersistedState)

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(i18n)
    .use(AOS)





}
