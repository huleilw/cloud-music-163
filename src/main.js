import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'amfe-flexible';
import QS from 'qs'

import {
  Search,
  Icon,
  Image,
  Row,
  Col,
  NavBar
} from 'vant';

Vue.use(Search).use(Icon).use(Image).use(Row).use(Col).use(NavBar)

//重置样式
import '@/assets/css/reset.css'

//import '@/assets/js/rem.js'

Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;
Vue.config.productionTip = false
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
