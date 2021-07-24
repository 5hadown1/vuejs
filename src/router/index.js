import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../views/Dashboard.vue';
import About from '../views/About.vue';
import Page404 from '../views/Page404.vue';
import AddPayment from '../components/AddPayment.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: Dashboard
		}, {
			path: '/about*',
			name: 'About',
			component: About
		}, {
			path: '/add/payment/:category',
			name: AddPayment,
			component: { template: '<div></div>' }
		}, {
			path: '/404',
			name: 'NotFound',
			component: Page404
		}, {
			path: '*',
			redirect: '/404'
		}
	]
})
