<template>
  <div id="topic">
    <div style="width: 460px;" v-if="!topic"><Loading/></div>
    <template v-else>
      <div class="left-part">
        <div class="topic-header">
          <div class="title">{{topic.title}}</div>
          <ul class="clearfix">
            <li>发布于 {{topic.create_at | formatDate}}</li>
            <li>作者 {{topic.author.loginname}}</li>
            <li>{{topic.visit_count}} 次浏览</li>
            <li>来自 {{topic | formatTopic}}</li>
          </ul>
        </div>
        <div class="content" v-html="topic.content"></div>
      </div>
      <div class="reply left-part">
        <div class="reply-title">{{topic.reply_count}} 回复</div>
        <div class="reply-area" v-for="(reply,index) in topic.replies" :key="reply.id">
          <router-link :to="{name:'User',params:{loginname:reply.author.loginname}}">
          <img :src="reply.author.avatar_url" width="30" height="30" alt="头像">
          <span class="reply-size">{{reply.author.loginname}}</span></router-link>
          <span class="reply-size">{{index+1}}楼 • {{reply.create_at | formatDate}}</span>
          <span v-if="reply.ups.length">👍 {{reply.ups.length}}</span>
          <p class="reply-content" v-html="reply.content"></p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import mixin from '@/modules/mixin.js';
  import url from '@/modules/api.js';
  export default {
    mixins: [mixin],
    data() {
      return {
        topic: null
      }
    },
      watch:{
        '$route'(){
          this.getTopic();
        }
      },
    created() {
      this.getTopic();
    },
    methods: {
      getTopic() {
        this.$request(url.topic + this.$route.params.id)
          .then(({
            data
          }) => this.topic = data);
      }
    }
  }
</script>

<style>
  #topic {
      padding: 10px 360px 40px 60px;
      float: left;
  }

  #topic a {
      color: #08c;
      word-break: break-all;
  }

  #topic a:hover {
      text-decoration: underline;
  }
  
  #topic .left-part {
      background-color: #fff;
  }

  #topic .topic-header li:before {
      content: ' • ';
  }

  #topic .topic-header {
      padding: 10px;
      border-bottom: 1px solid #e1e1e1;
  }

  #topic .title {
      font-size: 22px;
      font-weight: bold;
      margin: 8px 0;
  }

  #topic .topic-header li {
      float: left;
      font-size: 12px;
      color: #838383;
      margin-right: 6px;
  }

  #topic .content {
      padding: 10px 26px;
  }

  #top .markdown-text {
      font-size: 15px;
  }

  #topic .markdown-text p {
      margin-bottom: 15px;
      white-space: pre-wrap;
      line-height: 1.7em;
  }

  #topic .markdown-text ul {
      list-style-type: disc;
      margin-left: 2em;
  }

  #topic .markdown-text li {
      float: inherit;
      line-height: 2em;
  }

  #topic .markdown-text img {
      max-width: 100%;
  }

  #topic .reply {
      margin-top: 13px;
  }

  #topic .reply-title {
      background-color: #f6f6f6;
      padding: 10px;
      font-size: 14px;
  }

  #topic .reply-area {
      padding: 10px;
      border-top: 1px solid #f0f0f0;
  }

  #topic .reply-size {
      font-size: 12px;
  }

  #topic .reply-content {
      padding-left: 50px;
  }
</style>
