import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Mapa from './mapa.vue'
import Marcos from './marcos.vue'

Vue.use(VueRouter);
Vue.component('mapa',Mapa)

const RouterConfig = [
  
   { path: '/mapa', component:Mapa},
   { path: '/marcos', component:Marcos},
   //{ path: '/app', component:App}
]

const router = new VueRouter({
  routes:RouterConfig
})  
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
// new Vue({
//   el: '#marcos',
//   router//,
//   //render: h => h(Marcos)
// })
