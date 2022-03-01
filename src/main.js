import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/axios.js'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import './style/all.scss'
import mixin from './mixin.js'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import VuePageTransition from 'vue-page-transition'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueFileAgent from 'vue-file-agent'
import 'vue-file-agent/dist/vue-file-agent.css'
import ProductZoomer from 'vue-product-zoomer'
Vue.use(ProductZoomer)

Vue.component('ImgInputer', ImgInputer)
Vue.use(VueFileAgent)
Vue.use(VueAwesomeSwiper)
Vue.use(VueSweetalert2)
Vue.use(VuePageTransition)
Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
