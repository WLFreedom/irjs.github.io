import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@mdi/font/css/materialdesignicons.css'
// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { fa, de, en, sk } from 'vuetify/locale'
import {createI18n} from "vue-i18n";
import {en as ien} from "@/lang/en";
import {fa as ifa} from "@/lang/fa";
import {se as ise} from "@/lang/se";
import {de as ide} from "@/lang/de";
import {nl as inl} from "@/lang/nl";

const vuetify = createVuetify({
    components,
    directives,
    locale: {
        locale: 'en',
        fallback: 'en',
        messages: { en, fa, de, sk }
    }
})

const i18n = createI18n({
    legacy: false,
    availableLocales: ['en', 'fa', 'se', 'de', 'nl'],
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: ien, fa: ifa, se: ise, de: ide, nl: inl
    }
})

createApp(App).use(i18n).use(store).use(vuetify).use(router).mount('#app')
