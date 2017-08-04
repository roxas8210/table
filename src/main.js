import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'
import IndexComponent from './components/IndexComponent.vue'
import CompanyDetail from './components/CompanyDetail.vue'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);

const tableStore = new Vuex.Store({
  state: {
    table: []
  }
});

const routes = [{
  path: '/',
  component: IndexComponent
},{
  path: '/company',
  component: CompanyDetail
}];

const router = new VueRouter({
  routes: routes
});

var app = new Vue({
  el: '#app',
  router: router,
  store: tableStore,
  render:h => h(App)
});
