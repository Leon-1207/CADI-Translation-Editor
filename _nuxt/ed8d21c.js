(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{293:function(t,n,r){"use strict";var o=r(2),l=r(207).trim;o({target:"String",proto:!0,forced:r(295)("trim")},{trim:function(){return l(this)}})},294:function(t,n,r){"use strict";r(293);n.a={wasEdited:function(){return this.customTranslation&&this.customTranslation.trim().length>0&&this.customTranslation!=this.originalTranslation},currentTranslation:function(){return this.wasEdited?this.customTranslation:this.originalTranslation}}},295:function(t,n,r){var o=r(83).PROPER,l=r(3),e=r(208);t.exports=function(t){return l((function(){return!!e[t]()||"​᠎"!=="​᠎"[t]()||o&&e[t].name!==t}))}},298:function(t,n,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(136).default)("443c0afc",content,!0,{sourceMap:!1})},299:function(t,n,r){var content=r(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(136).default)("5ae7e192",content,!0,{sourceMap:!1})},305:function(t,n,r){"use strict";r(298)},306:function(t,n,r){var o=r(135)((function(i){return i[1]}));o.push([t.i,".translation-word-grid{grid-gap:1rem;display:grid;gap:1rem}.translation-word td.iso{vertical-align:top;width:3rem}.translation-word:first-child td{padding-top:0}.translation-word:last-child td{padding-bottom:3rem}.translation-word td{padding-top:3rem}",""]),o.locals={},t.exports=o},307:function(t,n,r){"use strict";r(299)},308:function(t,n,r){var o=r(135)((function(i){return i[1]}));o.push([t.i,"label[data-v-2a220a18]{grid-gap:.2rem;display:grid;gap:.2rem}.iso[data-v-2a220a18],label>b[data-v-2a220a18]{color:#000}.translation-word .original-translation[data-v-2a220a18]{background:none;padding:0;resize:none}",""]),o.locals={},t.exports=o},312:function(t,n,r){"use strict";r.r(n);var o=r(294),l={props:["originalTranslation","customTranslation","iso"],computed:{wasEdited:o.a.wasEdited,currentTranslation:o.a.currentTranslation}},e=(r(305),r(307),r(46)),component=Object(e.a)(l,(function(){var t=this,n=t._self._c;return n("tr",{staticClass:"translation-word"},[n("td",{staticClass:"iso"},[n("b",{staticClass:"iso"},[t._v(t._s(t.iso))])]),t._v(" "),n("td",[n("div",{staticClass:"translation-word-grid"},[n("label",[n("b",[t._v("Original translation:")]),t._v(" "),n("span",{staticClass:"original-translation"},[t._v(t._s(t.originalTranslation))])]),t._v(" "),n("label",[n("b",[t._v("Your translation:")]),t._v(" "),t._t("default")],2)])])])}),[],!1,null,"2a220a18",null);n.default=component.exports}}]);