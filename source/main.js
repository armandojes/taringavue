import Vue from 'vue';
import App from './app/app';
import Container from './app/components/container'
import VueRouter from 'vue-router';
import routes from './app/routes';


Vue.component('container', Container)
Vue.use(VueRouter);


const router = new VueRouter({routes});

new Vue({
  el: '#render_target',
  render: ( h ) => h(App),
  router,
})
