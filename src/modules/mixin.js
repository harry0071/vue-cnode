import Loading from 'cp/Loading.vue';
export default {
	components:{
		Loading
	},
	filters:{
		formatDate(val){
			let date = new Date(val);
			let time = (new Date().getTime() - date.getTime())/1000; //时间差(毫秒/1000 = 秒)
			if (time<60) {
				return '刚刚';
			} else if (time/60<60) {
				return parseInt(time/60) + '分钟前';
			} else if (time/3600<24) {
				return parseInt(time/3600) + '小时前';
			} else if (time/86400<31) {
				return parseInt(time/86400) + '天前';
			} else if (time/2628000<12) {
				return parseInt(time/2628000) + '个月前';
			} else {
				return parseInt(time/31536000) + '年前';
			}
		},
		formatTopic(topic){
			if (topic.top) {
				return '置顶';
			} else if (topic.good) {
				return '精华'
			} else if (topic.tab === 'ask') {
				return '问答';
			} else if (topic.tab === 'job') {
				return '招聘';
			} else {
				return '分享';
			}
		},
	},

}