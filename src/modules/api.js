//后台接口地址
const url = {
	topics:'/topics',//首页主题
	topic:'/topic/',//主题详情,完整形式：/topic/:id
	user:'/user/',//用户信息 :/user/:loginname
};

const host = 'https://cnodejs.org/api/v1';

for (let key in url) {
	url[key] = host + url[key];
}

export default url;