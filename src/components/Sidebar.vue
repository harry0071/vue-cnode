<template>
	<div id="sidebar" v-if="userInfo">
		<div class="panel">
			<div class="title">作者</div>
			<div class="content">
				<router-link :to="{name:'User',params:{loginname:userInfo.loginname}}">
					<img :src="userInfo.avatar_url" width="48" height="48">
					<span>{{userInfo.loginname}}</span>					
				</router-link>
				<p class="score">积分: {{userInfo.score}}</p>
			</div>
		</div>
		<div class="panel">
			<div class="title">作者创建的话题</div>
			<div class="content">
				<ul>
					<li v-for="(topic,index) in userInfo.recent_topics" v-if="index<5"><router-link :to="{name:'Topic',params:{id:topic.id,loginname:topic.author.loginname}}">{{topic.title}}</router-link></li>
				</ul>
			</div>
		</div>
		<div class="panel">
			<div class="title">作者参与的话题</div>
			<div class="content">
				<ul>
					<li v-for="(topic,index) in userInfo.recent_replies" v-if="index<5"><router-link :to="{name:'Topic',params:{id:topic.id,loginname:topic.author.loginname}}">{{topic.title}}</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import url from '@/modules/api.js';
	export default {
		data(){
	      return {
	        userInfo:null
	      }
	    },
      watch:{
        '$route'(){
          this.getUserInfo();
        }
      },
	    created(){
	      this.getUserInfo();
	    },
	    methods:{
	      getUserInfo(){
	        this.$request(url.user+this.$route.params.loginname)
	        .then(({data}) => this.userInfo = data);
	      }
	    }
	}
</script>

<style>
	#sidebar{
		float: left;
		width: 240px;
		margin: 10px 0 0 -350px;
	}
	  #sidebar a {
      color: #08c;
      word-break: break-all;
      font-size: 14px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      display: inline-block;
      width: 100%;
  }

  #sidebar a:hover {
      text-decoration: underline;
  }
	#sidebar .panel{
		margin-bottom: 10px;
	}
	#sidebar .title{
		padding: 10px;
		background-color: #f6f6f6;
		font-size: 13px;
	}
	#sidebar .content{
		background-color: #fff;
		padding: 10px;
	}
	#sidebar .score{
		font-size: 14px;
	}
	#sidebar p{
		margin: 8px 0;
	}
	#sidebar li{
		line-height: 1.5em;
	}
</style>