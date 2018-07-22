<template>
  <div id="user">
    <Loading v-if="!userInfo"/>
    <div class="userinfo" v-else>
      <section class="main">
        <img :src="userInfo.avatar_url" width="40" height="40" alt="头像">
        <span class="loginname">{{userInfo.loginname}}</span>
        <p class="score">{{userInfo.score}} 积分</p>
        <p class="github">github: <a :href="'https://github.com/'+userInfo.githubUsername">@{{userInfo.loginname}}</a></p>
        <p class="create-at">注册时间 {{userInfo.create_at | formatDate}}</p>
      </section>
      <section class="topics" v-if="userInfo.recent_topics.length">
        <div class="title">最近创建的话题</div>
        <ul>
          <li v-for="topic in userInfo.recent_topics" :key="topic.id">
            <img :src="topic.author.avatar_url" width="40" height="40" alt="头像">
            <router-link class="topic-title" :to="{name:'Topic',params:{id:topic.id,loginname:topic.author.loginname}}">{{topic.title}}</router-link>
            <span class="reply-time">{{topic.last_reply_at | formatDate}}有人回复</span>
          </li>
        </ul>
      </section>
      <section class="topics" v-if="userInfo.recent_replies.length">
        <div class="title">最近参与的话题</div>
        <ul>
          <li v-for="topic in userInfo.recent_replies" :key="topic.id">
            <img :src="topic.author.avatar_url" width="40" height="40" alt="头像">
            <router-link class="topic-title" :to="{name:'Topic',params:{id:topic.id,loginname:topic.author.loginname}}">{{topic.title}}</router-link>
            <span class="reply-time">{{topic.last_reply_at | formatDate}}有人回复</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import url from '@/modules/api.js';
  import mixin from '@/modules/mixin.js';
	export default {
    mixins:[mixin],
    data(){
      return {
        userInfo:null
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

<style scoped>
  #user {
      padding: 10px 100px 40px;
  }
  .main{
    background-color: #fff;
    padding: 10px;
  }
  .loginname,.score,.github,.create-at{
    font-size: 14px;
    color: #778087;
  }
  .score,.github,.create-at{
    margin: 8px 0;
  }
  a{
    color: #08c;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  a:hover{
    text-decoration: underline;
  }
  .topic-title{
    margin-left: 16px;
    width: 70%;
  }
  .topics{
    background-color: #fff;
    margin: 16px 0;
    position: relative;
  }
  li{
    padding: 10px;
    display: flex;
    align-items: center;
    border-top: 1px solid #f0f0f0;
  }
  .title{
    background: #f6f6f6;
    padding: 10px;
    font-size: 14px;
    color: #444;
  }
  .reply-time{
    position: absolute;
    right: 0;
    margin-right: 16px;
    font-size: 11px;
    color: #777;
  }
</style>
