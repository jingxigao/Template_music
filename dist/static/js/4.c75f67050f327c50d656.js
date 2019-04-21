webpackJsonp([4],{587:function(t,i,e){e(622);var n=e(10)(e(606),e(634),"data-v-5e3f430c",null);t.exports=n.exports},590:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(58),s=e.n(n),a=e(69),o=e.n(a),A=e(206),l=e.n(A),r=e(207),c=e.n(r),d=e(133),p=e(89),g=e(50),u=e.i(d.a)("transform"),f=e.i(d.a)("backdrop-filter");i.default={mixins:[p.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:s()({handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},e.i(g.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTransalteY,t),e=1,n=0,s=0,a=Math.abs(t/this.imageHeight);t>0?(e=1+a,n=10):s=Math.min(20,20*a),this.$refs.layer.style[u]="translate3d(0,"+i+"px,0)",this.$refs.filter.style[f]="blur("+s+"px)",t<this.minTransalteY?(n=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[u]="scale("+e+")",this.$refs.bgImage.style.zIndex=n}},components:{Scroll:o.a,Loading:l.a,SongList:c.a}}},591:function(t,i,e){i=t.exports=e(579)(!0),i.push([t.i,".music-list[data-v-691d284c]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-691d284c]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-691d284c]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-691d284c]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-691d284c]{position:relative;width:100%;height:0;padding-top:70%;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-691d284c]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-691d284c]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-691d284c]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-691d284c]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-691d284c]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-691d284c]{position:relative;height:100%;background:#222}.music-list .list[data-v-691d284c]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-691d284c]{padding:20px 30px}.music-list .list .loading-container[data-v-691d284c]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["/Users/jingxigao/Downloads/vue音乐/项目源码/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,qBAAsB,AACtB,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"music-list.vue",sourcesContent:["\n.music-list[data-v-691d284c] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-691d284c] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-691d284c] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-691d284c] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-691d284c] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-691d284c] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-691d284c] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-691d284c] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-691d284c] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-691d284c] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-691d284c] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-691d284c] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-691d284c] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-691d284c] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},592:function(t,i,e){var n=e(591);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(580)("0bec491c",n,!0)},593:function(t,i,e){e(592);var n=e(10)(e(590),e(594),"data-v-691d284c",null);t.exports=n.exports},594:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[]}},595:function(t,i,e){"use strict";function n(){var t=o()({},l.b,{uin:0,needNewCode:1,platform:"h5"});return e.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function s(t){var i=o()({},l.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return e.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",i,l.c)}i.b=n,i.a=s;var a=e(90),o=e.n(a),A=e(205),l=e(68)},606:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(58),s=e.n(n),a=e(593),o=e.n(a),A=e(595),l=e(68),r=e(50),c=e(134);i.default={computed:s()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},e.i(r.a)(["topList"])),data:function(){return{songs:[],rank:!0}},created:function(){this._getMusicList()},methods:{_getMusicList:function(){var t=this;if(!this.topList.id)return void this.$router.push("/rank");e.i(A.a)(this.topList.id).then(function(i){i.code===l.a&&(t.songs=t._normalizeSongs(i.songlist))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){var n=t.data;n.songid&&n.albummid&&i.push(e.i(c.b)(n))}),i}},components:{MusicList:o.a}}},612:function(t,i,e){i=t.exports=e(579)(!0),i.push([t.i,".slide-enter-active[data-v-5e3f430c],.slide-leave-active[data-v-5e3f430c]{transition:all .3s ease}.slide-enter[data-v-5e3f430c],.slide-leave-to[data-v-5e3f430c]{transform:translate3d(100%,0,0)}","",{version:3,sources:["/Users/jingxigao/Downloads/vue音乐/项目源码/src/components/top-list/top-list.vue"],names:[],mappings:"AACA,0EAEE,uBAA0B,CAC3B,AACD,+DAEE,+BAAmC,CACpC",file:"top-list.vue",sourcesContent:["\n.slide-enter-active[data-v-5e3f430c],\n.slide-leave-active[data-v-5e3f430c] {\n  transition: all 0.3s ease;\n}\n.slide-enter[data-v-5e3f430c],\n.slide-leave-to[data-v-5e3f430c] {\n  transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},622:function(t,i,e){var n=e(612);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(580)("eee8d1a8",n,!0)},634:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{rank:t.rank,title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.c75f67050f327c50d656.js.map