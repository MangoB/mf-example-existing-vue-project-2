import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false


// Set for display loading state when starting the app
setTimeout(() => {
  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')  
}, 2500);