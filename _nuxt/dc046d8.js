(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{293:function(t,n,r){"use strict";var o=r(2),e=r(205).trim;o({target:"String",proto:!0,forced:r(295)("trim")},{trim:function(){return e(this)}})},294:function(t,n,r){"use strict";r(293);n.a={wasEdited:function(){return this.customTranslation&&this.customTranslation.trim().length>0&&this.customTranslation!=this.originalTranslation},currentTranslation:function(){return this.wasEdited?this.customTranslation:this.originalTranslation}}},295:function(t,n,r){var o=r(83).PROPER,e=r(3),c=r(206);t.exports=function(t){return e((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||o&&c[t].name!==t}))}},297:function(t,n,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(113).default)("8a59016c",content,!0,{sourceMap:!1})},304:function(t,n,r){"use strict";r(297)},305:function(t,n,r){var o=r(112)((function(i){return i[1]}));o.push([t.i,".current-word-translation{border-radius:5px;padding:1px 2px}.current-word-translation.edited{background:rgba(255,181,22,.52)}",""]),o.locals={},t.exports=o},312:function(t,n,r){"use strict";r.r(n);var o=r(294),e={props:["originalTranslation","customTranslation"],computed:{wasEdited:o.a.wasEdited,currentTranslation:o.a.currentTranslation}},c=(r(304),r(46)),component=Object(c.a)(e,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"current-word-translation",class:{edited:t.wasEdited}},[t._v("\n  "+t._s(t.currentTranslation)+"\n")])}),[],!1,null,null,null);n.default=component.exports}}]);