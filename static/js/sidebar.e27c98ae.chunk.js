webpackJsonp([2],{lZ5c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("NpB8"),a={data:function(){return{userInfo:null}},watch:{$route:function(){this.getUserInfo()}},created:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;this.$request(s.a.user+this.$route.params.loginname).then(function(e){var n=e.data;return t.userInfo=n})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userInfo?n("div",{attrs:{id:"sidebar"}},[n("div",{staticClass:"panel"},[n("div",{staticClass:"title"},[t._v("作者")]),t._v(" "),n("div",{staticClass:"content"},[n("router-link",{attrs:{to:{name:"User",params:{loginname:t.userInfo.loginname}}}},[n("img",{attrs:{src:t.userInfo.avatar_url,width:"48",height:"48"}}),t._v(" "),n("span",[t._v(t._s(t.userInfo.loginname))])]),t._v(" "),n("p",{staticClass:"score"},[t._v("积分: "+t._s(t.userInfo.score))])],1)]),t._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"title"},[t._v("作者创建的话题")]),t._v(" "),n("div",{staticClass:"content"},[n("ul",t._l(t.userInfo.recent_topics,function(e,s){return s<5?n("li",[n("router-link",{attrs:{to:{name:"Topic",params:{id:e.id,loginname:e.author.loginname}}}},[t._v(t._s(e.title))])],1):t._e()}))])]),t._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"title"},[t._v("作者参与的话题")]),t._v(" "),n("div",{staticClass:"content"},[n("ul",t._l(t.userInfo.recent_replies,function(e,s){return s<5?n("li",[n("router-link",{attrs:{to:{name:"Topic",params:{id:e.id,loginname:e.author.loginname}}}},[t._v(t._s(e.title))])],1):t._e()}))])])]):t._e()},staticRenderFns:[]};var r=n("VU/8")(a,i,!1,function(t){n("nJ1+")},null,null);e.default=r.exports},"nJ1+":function(t,e){}});