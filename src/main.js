import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mission from './components/Mission.vue'
import MissionDetail from './components/MissionDetail.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'

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
  component: Mission
},{
  path: '/detail',
  component: MissionDetail
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
