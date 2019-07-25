import Vue from 'vue';
import App from './app/app';
import Container from './app/components/container'
import LoadingPage from './app/components/LoadingPage'
import LoadingAfter from './app/components/LoadingAfter'
import VueRouter from 'vue-router';
import routes from './app/routes';


Vue.component('container', Container)
Vue.component('LoadingPage', LoadingPage)
Vue.component('LoadingAfter', LoadingAfter)


Vue.use(VueRouter);


const router = new VueRouter({routes, mode: 'history',});

new Vue({
  el: '#render_target',
  render: ( h ) => h(App),
  router,
})
