import Vue from 'vue'

// Import 'single-spa-vue' module เพิ่ม
import singleSpaVue from 'single-spa-vue';

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

// เปลี่ยนจาก new Vue เป็น ประกาศ Vue ไว้ใน singleSpaVue เผื่อนำไป Export
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    vuetify,
    render(h) {
      return h(App);
    },
  },
});

// Export life cycle ให้ root web app นำไปใช้ต่อ
export const { bootstrap, mount, unmount } = vueLifecycles;