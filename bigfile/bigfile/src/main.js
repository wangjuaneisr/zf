import Vue from 'vue'
import App from './App'
// import Router from 'vue-router'
// import router from './router'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);
// Vue.use(Router);
Vue.config.productionTip = false

new Vue({
  el:'#app',
  template:'<App/>',
  components:{ App },
})
