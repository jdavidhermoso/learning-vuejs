(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{443:function(t,e,n){var content=n(472);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("212045cf",content,!0,{sourceMap:!1})},444:function(t,e,n){var content=n(474);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("0edd4ea2",content,!0,{sourceMap:!1})},464:function(t,e,n){"use strict";n(2),n(3),n(4),n(8),n(10),n(6),n(5);var o=n(30),r=n(43);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"DownloadButton",props:{location:{type:String,required:!0}},data:function(){return{slide:0,copy:["NuxtJS","Vue 3","Vue Essentials"]}},computed:d(d({},Object(r.c)({account:function(t){return t.account.account}})),{},{shift:function(){return"shift-"+Math.abs(this.slide%3)}}),methods:{openLogin:function(){this.$modal.show("login-form",{newAccount:!0,headerTitle:"Please sign up to download free",location:this.location})},checkAccount:function(t,e){this.account||(e.preventDefault(),this.openLogin())},download:function(){this.$refs["cheatsheet".concat(this.slide)].click()},prev:function(){this.slide>=2?this.slide=0:this.slide++},next:function(){this.slide?this.slide--:this.slide=2}}},l=(n(471),n(19)),f={name:"CheatSheetMain",components:{CheatSheets:Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",{staticClass:"cheatsheets-carousel-wrapper",class:t.shift},[n("div",{staticClass:"cheatsheets-carousel"},[n("div",{staticClass:"copy"},[t._v(t._s(t.copy[t.slide])),n("br"),t._v("Cheat Sheet")]),n("a",{ref:"cheatsheet2",staticClass:"cheatsheets-item cheatsheets-essential",attrs:{href:t.account?"/pdf/Vue-Essentials-Cheat-Sheet.pdf":"#createAccount",download:""},on:{click:function(e){return t.checkAccount(0,e)}}}),n("a",{ref:"cheatsheet0",staticClass:"cheatsheets-item cheatsheets-nuxt",attrs:{href:t.account?"/pdf/Nuxtjs-Cheat-Sheet.pdf":"#createAccount",download:""},on:{click:function(e){return t.checkAccount(1,e)}}}),n("a",{ref:"cheatsheet1",staticClass:"cheatsheets-item cheatsheets-vue-3",attrs:{href:t.account?"/pdf/Vue-3-Cheat-Sheet.pdf":"#createAccount",download:""},on:{click:function(e){return t.checkAccount(2,e)}}}),n("button",{staticClass:"prev",on:{click:t.prev}}),n("button",{staticClass:"next",on:{click:t.next}})]),n("div",{staticClass:"buttons"},[n("button",{staticClass:"prev",on:{click:t.prev}},[n("i",{staticClass:"fa fa-chevron-left"})]),n("button",{staticClass:"button modern border -small -plain",on:{click:t.download}},[t._v("Download "+t._s(t.copy[t.slide])+" Cheat Sheet")]),n("button",{staticClass:"next",on:{click:t.next}},[n("i",{staticClass:"fa fa-chevron-right"})])])])])}),[],!1,null,"114a6f54",null).exports}},v=(n(473),Object(l.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-wrapper align-top"},[this._m(0),e("CheatSheets",{attrs:{"button-class":"inverted",location:"Front-page cheat sheet download"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body"},[e("h2",{staticClass:"title"},[this._v("Download the cheatsheets")]),e("p",{staticClass:"lead"},[this._v("Our Vue essentials, Vue 3, and Nuxt.Js cheat sheets save you time and energy by giving you essential syntax at your fingertips.")])])}],!1,null,"b9318918",null));e.a=v.exports},471:function(t,e,n){"use strict";var o=n(443);n.n(o).a},472:function(t,e,n){(e=n(38)(!1)).push([t.i,'.cheatsheets-carousel-wrapper[data-v-114a6f54]{position:absolute;width:100%;height:102%;left:0;top:167px;z-index:4;background:url(/images/cheatsheets/bottom.svg);background-position:center 299px;background-repeat:no-repeat;background-size:150% 324px}@media screen and (min-width:40em){.cheatsheets-carousel-wrapper[data-v-114a6f54]{background-size:107% 350px;background-position:center 300px}}@media screen and (min-width:82em){.cheatsheets-carousel-wrapper[data-v-114a6f54]{background-size:100% 300px;background-position:center 303px}}.cheatsheets-carousel[data-v-114a6f54]{cursor:pointer;width:375px;height:337px;position:absolute;right:50%;background-image:url(/images/cheatsheets/light.svg);background-size:100% auto;background-position:12px bottom;background-repeat:no-repeat;transform:translateX(50%);perspective:1000px}@media screen and (min-width:82em){.cheatsheets-carousel[data-v-114a6f54]{transform:translateX(0)}}.cheatsheets-carousel .next[data-v-114a6f54],.cheatsheets-carousel .prev[data-v-114a6f54]{position:absolute;height:240px;width:120px}.cheatsheets-carousel .prev[data-v-114a6f54]{left:-18px}.cheatsheets-carousel .next[data-v-114a6f54]{right:-18px}.next[data-v-114a6f54],.prev[data-v-114a6f54]{background:none;border:none;cursor:pointer}.copy[data-v-114a6f54]{position:absolute;background:hsla(0,0%,100%,.788);width:206px;padding:16px 30px;z-index:5;left:50%;transform:translateX(-50%) translateY(-100%);top:50%;-webkit-text-decoration:uppercase;text-decoration:uppercase;text-align:center;line-height:22px;box-shadow:0 1px 3px #c1c0c0;font-weight:800}.copy[data-v-114a6f54]:after,.copy[data-v-114a6f54]:before{content:"";position:absolute;display:block;bottom:-9px;border:4px solid hsla(0,0%,90.2%,.788);border-bottom-color:transparent;z-index:-1}.copy[data-v-114a6f54]:before{left:0;border-right-width:4px;border-left-color:transparent}.copy[data-v-114a6f54]:after{right:0;border-left-width:4px;border-right-color:transparent}i[data-v-114a6f54]{font-size:28px;color:#fff}.buttons[data-v-114a6f54]{display:flex;justify-content:space-evenly;width:400px;margin:0 auto;top:368px;position:absolute;left:50%;transform:translateX(-50%)}.buttons .modern[data-v-114a6f54]{padding:0 30px}@media screen and (min-width:82em){.buttons[data-v-114a6f54]{transform:translateX(0);max-width:50%;width:700px;justify-content:center;top:200px;bottom:auto}.buttons .next[data-v-114a6f54],.buttons .prev[data-v-114a6f54]{padding:0 20px}}.cheatsheets-item[data-v-114a6f54]{background-image:url(/images/cheatsheets/cheatsheets.png);display:block;background-size:auto 100%;width:192px;height:260px;position:absolute;transition:all .2s cubic-bezier(0,0,.2,1);border:10px solid #fff;box-shadow:0 1px 10px 0 rgba(0,0,0,.5)}.cheatsheets-essential[data-v-114a6f54]{left:0;opacity:.8;transform:scale(.8) translateX(-25%);background-position:0}.cheatsheets-nuxt[data-v-114a6f54]{left:50%;transform:translateX(-50%);background-position:50%}.cheatsheets-vue-3[data-v-114a6f54]{background-position:100%}.cheatsheets-vue-3[data-v-114a6f54],.shift-1 .cheatsheets-essential[data-v-114a6f54]{left:100%;opacity:.8;transform:scale(.8) translateX(-100%);z-index:-1}.shift-1 .cheatsheets-nuxt[data-v-114a6f54]{left:0;opacity:.8;z-index:-1;transform:scale(.8) translateX(-25%)}.shift-1 .cheatsheets-vue-3[data-v-114a6f54],.shift-2 .cheatsheets-essential[data-v-114a6f54]{left:50%;opacity:1;z-index:2;transform:translateX(-50%)}.shift-2 .cheatsheets-nuxt[data-v-114a6f54]{left:100%;opacity:.8;z-index:-1;transform:scale(.8) translateX(-100%)}.shift-2 .cheatsheets-vue-3[data-v-114a6f54]{left:0;opacity:.8;z-index:-1;transform:scale(.8) translateX(-25%)}',""]),t.exports=e},473:function(t,e,n){"use strict";var o=n(444);n.n(o).a},474:function(t,e,n){(e=n(38)(!1)).push([t.i,'.bg-wrapper[data-v-b9318918]{position:relative;overflow:hidden;background-size:cover;background-attachment:fixed;background-position:50%;-webkit-overflow-scrolling:touch}.bg-wrapper[data-v-b9318918]:after,.bg-wrapper[data-v-b9318918]:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-size:cover;background-position:bottom;background-repeat:no-repeat;z-index:1}.bg-wrapper[data-v-b9318918]:before{transform:translateZ(-1px) scale(1.5);bottom:-1px;left:-4px}section.bg-wrapper[data-v-b9318918]{height:638px;margin-top:-2px;margin-bottom:64px;overflow:visible;z-index:3}section.bg-wrapper[data-v-b9318918]:after,section.bg-wrapper[data-v-b9318918]:before{background-image:url(/images/cheatsheets/background.svg)}section.bg-wrapper[data-v-b9318918]:before{background:linear-gradient(1turn,#b5ffda -3.63%,#8ce5ce 6.41%,#23a4b1 28.9%,#008ea7 36.25%,#0087a0 39.46%,#00516a 67.67%,#003049 88.78%,#00233c 100.25%) fixed;transform:none;height:100%}@media screen and (min-width:82em){section.bg-wrapper[data-v-b9318918]{height:596px}section.bg-wrapper .body[data-v-b9318918]{top:132px}section.bg-wrapper .buttons[data-v-b9318918]{top:180px}}.body[data-v-b9318918]{position:absolute;text-align:center;display:flex;flex-direction:column;align-items:center;color:#fff;z-index:5;width:100%;height:664px;padding:0 30px;top:26px;justify-content:space-between;pointer-events:none}@media screen and (min-width:40em){.body[data-v-b9318918]{height:700px}}@media screen and (min-width:82em){.body[data-v-b9318918]{width:700px;max-width:50%;top:15%;left:50%;height:auto}}.lead[data-v-b9318918],.title[data-v-b9318918]{max-width:320px}@media screen and (min-width:40em){.lead[data-v-b9318918],.title[data-v-b9318918]{max-width:366px}}.title[data-v-b9318918]{margin-bottom:0;font-size:2rem}@media screen and (min-width:82em){.title[data-v-b9318918]{font-size:2.5rem}}',""]),t.exports=e},773:function(t,e,n){"use strict";n.r(e);var o={name:"PageVueCheatCheet",middleware:"anonymous",components:{CheatSheetMain:n(464).a},head:function(){return{title:"Get the Ultimate Vue Cheat Sheet | Vue Mastery",meta:[{hid:"og:url",property:"og:url",content:"".concat("https://www.vuemastery.com")}]}}},r=n(19),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homepage"},[e("div",{staticClass:"cheatsheet"},[e("CheatSheetMain")],1)])}),[],!1,null,"3ad8ecee",null);e.default=component.exports}}]);