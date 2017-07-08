import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mission from './components/Mission.vue'

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Mission
}];

const router = new VueRouter({
  routes: routes
});

var app = new Vue({
  el: '#app',
  router: router,
  render:h => h(App)
});
