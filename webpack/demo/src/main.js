// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Posts from './components/Posts'
import Contact from './components/Contact'

Vue.use(VueRouter);

const routes = [
	{
		path: '/', component: Posts
	},
	{
		path: '/contact', component: Contact
	}
];

const router = new VueRouter({routes: routes});

Vue.config.productionTip = false

/* eslint-disable no-new ,*/
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
