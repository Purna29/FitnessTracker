import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


var SocialSharing = require('vue-social-sharing');
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = "http://localhost:8000/api"
Vue.use(SocialSharing);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
