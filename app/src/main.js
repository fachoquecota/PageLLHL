import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//importar vuerouter
import VueRouter from 'vue-router';

//importar componentes
import llhlIndex from './components/llhlIndex';
import listarLogCheat from './components/listarLogCheat';
import detailsBan from './components/detailsBan';

//crear componente
Vue.component('llhlIndex', llhlIndex);
Vue.component('listarLogCheat', listarLogCheat);
Vue.component('detailsBan', detailsBan);

//uso de vue-router
Vue.use(VueRouter);

//definimos las rutas
const routes = [ 
  {path:'/', component:llhlIndex},
  {path:'/listarLogCheat', component:listarLogCheat},
  {path:'/detailsBan/:idLog', component:detailsBan, name:'detailsBan'},
]

//creamos el objeto router
const router =new VueRouter({
    routes,
    mode:'history' 
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
