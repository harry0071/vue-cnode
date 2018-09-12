<template>
  <div>
  <div id="topics">
    <Loading v-if="!topics.length" />
    <div id="list" v-else>
      <ul>
        <li v-for="topic in topics" :key="topic.id">
          <router-link :to="{name:'Topic',params:{id:topic.id,loginname:topic.author.loginname}}">
            <img :src="topic.author.avatar_url" :title="topic.author.loginname" alt="头像" width="30" height="30">
            <span class="reply">{{topic.reply_count}}
              <span class="visit">/{{topic.visit_count}}</span>
            </span>
            <div :class="[{special:topic.top||topic.good, normal:!topic.top && !topic.good},'badge']">{{topic | formatTopic}}</div>
            <div class="title">{{topic.title}}</div>
            <time>{{topic.last_reply_at | formatDate}}有人回复</time>
          </router-link>
        </li>
      </ul>
    <Paginate
      v-model="page"
      :pageCount="400"
      :page-range="5"
      :prevText="'上一页'"
      :nextText="'下一页'"
      :containerClass="'pagination'"
    />      
    </div>
  </div>
    <Footer/>
</div>
</template>

<script>
  import Footer from 'cp/Footer.vue';
  import url from '@/modules/api.js';
  import mixin from '@/modules/mixin.js';
  import Paginate from 'vuejs-paginate';
  export default {
    mixins:[mixin],
    components:{Paginate,Footer},
  	data() {
  		return {
  			topics: [],
        page:1
  		}
  	},
  	created() {
  		this.getTopics();
  	},
    watch:{
      page(){
        this.getTopics();
      }
    },
  	methods: {
  		getTopics() {
  			this.$request(url.topics, {
  				page: this.page,
  			}).then(({
  				data
  			}) => this.topics = data)
  		}
  	}
  }
</script>

<style>
  #topics {
      padding: 10px 100px 40px;
  }

  #topics a {
      display: inline-block;
      width: 100%;
  }

  .badge {
      display: inline-block;
      padding: 2px 4px;
      font-size: 12px;
      border-radius: 3px;
      vertical-align: super;
  }
  .special{
  	background-color: #80bd01;
  	color: white;
  }
  .normal{
  	background-color: #e5e5e5;
  	color: #999;
  }
  #list{
    background: white;
  }
  #list li {
      padding: 10px;
      height: 30px;
  }
  #list li:not(:last-child){
      border-bottom: 1px solid #f3f3f3;
  }

  #list li:hover {
      background-color: #f5f5f5;
  }
  #topics .reply {
      color: #9e78c0;
      font-size: 14px;
      width: 70px;
      display: inline-block;
      text-align: center;
  }

  #topics .visit {
      color: #b4b4b4;
      font-size: 10px;
  }
  #topics .title{
  	color: #333;
  	overflow: hidden;
  	text-overflow:ellipsis;
  	white-space: nowrap;
  	display: inline-block;
  	width: 60%;
  	margin-left: 12px;
    line-height: 1.5;
  }
  #topics time {
      float: right;
      color: #778087;
      font-size: 11px;
  }
  #topics time,.title{
  	padding-top: 8px;
  }
  #topics ul.pagination{
    display: inline-block;

  }
  #topics .pagination li{
    display: inline-block;
  }
  #topics .pagination li>a{
    padding: 6px 12px;
    color: #337ab7;
    border: 1px solid #ddd;
    width: inherit;
  }
  #topics .pagination .active>a{
    color: white;
    background: #337ab7;
    border-color: #337ab7;
  }
  #topics .pagination .disabled{
    cursor: pointer;
    pointer-events: none;
  }
  #topics .pagination .disabled>a:focus{
    outline: none;
  }
</style>
