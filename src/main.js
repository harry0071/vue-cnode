import 'css/normalize.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import request from '@/modules/request.js';

Vue.config.productionTip = false;
Vue.prototype.$request = request;


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
