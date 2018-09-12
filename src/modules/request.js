//接口规范
/*
{
  success: true,
  data: [{},{},{}]
}
*/

import axios from 'axios';
import qs from 'qs';

function request(url,data={},method='get') {
	return new Promise((resolve,reject) => {
		let config = {
			url,
			method,
		};
		if (method.toLowerCase() == 'get') {
			config.params = data;
		} else {
			config.headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
			config.data = qs.stringify(data);
		}
		axios(config).then(({data}) => {
			if (data.success) {
				resolve(data);
			} else {
				console.log(data);
				reject(data);
			}
		}).catch(err => {
			console.dir(err);
			document.write(err);
		});
	});
}

export default request;

//使用方法：
// request('/user', {name:'stage', age:24}, 'post').then(data => console.log(data));