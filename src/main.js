import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mission from './components/Mission.vue'
import MissionDetail from './components/MissionDetail.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter);
Vue.use(ElementUI);

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
  render:h => h(App)
});
