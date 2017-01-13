import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import Mapa from './mapa.vue'
import Marcos from './marcos.vue'
//import Sub from './subtab.vue'
const UserPosts = {template: '<div> Posts</div>' }
const Baz = { template: '<div>baz ... <router-link to="/mapa/sub">/teste</router-link> <router-view class="view three" name="te"></router-view> <\div>' }
//import Vue from 'vue/dist/vue.js'
//const Foos = { template: '<div>foodsadsadsa</div>' }
const Foo = { template: '<div>foo</div>' }
//const Bar = { template: '<div>bar</div>' }
//const dinamico = { template: '<div>Meu id é {{ $route.params.id}} </div>' }
//const dinamico2 = { template: '<div>Meu id é {{ $route.params.id}} e o meu nome é {{$route.params.nome}} </div>' }
//const Mapa = require(['./mapa.vue'])
// const app = new Vue({
//   el : '#map',
//   render: h => h(Mapa)
//  })
//const Mapa = require('./mapa.vue')

const RouterConfig = [
  //{ path: '/foo', component: Foo },
 // { path: '/bar', component: Bar },
 // { path: '/home', component: App },
  { path: '/table', component: Marcos },
  { path: '/sub', components: {teste:Foo} },
   { path: '/mapa', component:Mapa// Vue.component('mapa',Mapa),
   ,children: [{
     path: 'sub', name:'sub', component:  UserPosts 
   }]
 },
 // { path: '/dinamico/:id', component: dinamico },
 // { path: '/dinamico/:id/:nome', component: dinamico2 }
  // { path: '/dinamico/:pai', component: filhos,
  //       children:[
  //         { path:        }
  //         ] 
  // }
]

export default RouterConfig; 