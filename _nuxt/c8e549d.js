(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{293:function(t,n,e){"use strict";var r=e(2),o=e(207).trim;r({target:"String",proto:!0,forced:e(295)("trim")},{trim:function(){return o(this)}})},294:function(t,n,e){"use strict";e(293);n.a={wasEdited:function(){return this.customTranslation&&this.customTranslation.trim().length>0&&this.customTranslation!=this.originalTranslation},currentTranslation:function(){return this.wasEdited?this.customTranslation:this.originalTranslation}}},295:function(t,n,e){var r=e(83).PROPER,o=e(3),l=e(208);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},296:function(t,n,e){var content=e(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(136).default)("28017d43",content,!0,{sourceMap:!1})},297:function(t,n,e){var content=e(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(136).default)("8a59016c",content,!0,{sourceMap:!1})},298:function(t,n,e){var content=e(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(136).default)("443c0afc",content,!0,{sourceMap:!1})},299:function(t,n,e){var content=e(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(136).default)("5ae7e192",content,!0,{sourceMap:!1})},300:function(t,n,e){"use strict";e.d(n,"b",(function(){return d})),e.d(n,"f",(function(){return f})),e.d(n,"a",(function(){return h})),e.d(n,"e",(function(){return v})),e.d(n,"c",(function(){return m})),e.d(n,"d",(function(){return w}));var r=e(14),o=e(22),l=(e(25),e(137),e(15),e(33),e(34),e(209),e(82),e(32),e(206),e(40),window.location.search),c=new URLSearchParams(l);function d(){return["de","en","fr","it","es"]}function f(t){t}function h(t){var n={},e=function t(e,path){var l=Object(o.a)(e,2),c=l[0],d=l[1],p=""===path?c:"".concat(path,".").concat(c);d&&"object"===Object(r.a)(d)?Object.entries(d).forEach((function(n){return t(n,p)})):n[p]=d};return Object.entries(t).forEach((function(t){return e(t,"")})),n}function v(data){if(Array.isArray(data)||Object(data)!==data)return data;for(var t,n,e,r,o,l={},c=0,d=Object.keys(data);c<d.length;c++){var p=d[c];t=l,n="",r=0;do{e=p.indexOf(".",r),o=p.substring(r,-1!==e?e:void 0),t[n]||(t[n]=isNaN(parseInt(o))?{}:[]),t=t[n],n=o,r=e+1}while(e>=0);t[n]=data[p]}return l[""]}function m(t){return c.get(t)}function w(t){return new Promise((function(n,e){$.ajax({url:t,dataType:"json",success:function(t){try{"string"==typeof t?n(JSON.parse(t)):"object"===Object(r.a)(t)?n(t):n({})}catch(t){console.error(t),n({})}},error:function(t){e(t)}})}))}},301:function(t,n,e){"use strict";e(296)},302:function(t,n,e){var r=e(135)((function(i){return i[1]}));r.push([t.i,'.parent-key{font-weight:700}.translation-row>td{max-width:540px}.translation-row{--line-color:var(--light-text);cursor:pointer;position:relative}.translation-row.parent-key{cursor:default}#edit-table th,.translation-row td{padding:1rem .5rem}.translation-row:not(.depth-0) td:first-child:before{border-bottom:1px solid var(--line-color);border-left:1px solid var(--line-color);content:"";display:block;height:100%;left:var(--depth-in-px);position:absolute;top:0;transform:translateY(-50%);transform-origin:center;width:17px}.translation-row:nth-child(odd){background:var(--bg-accent)}.translation-row:hover{background:rgba(0,106,255,.122)}.depth-line{border-left:1px solid var(--line-color);content:"";height:100%;left:var(--depth-in-px-2);position:absolute;top:0}',""]),r.locals={},t.exports=r},303:function(t,n,e){"use strict";e(297)},304:function(t,n,e){var r=e(135)((function(i){return i[1]}));r.push([t.i,".current-word-translation{border-radius:5px;padding:1px 2px}.current-word-translation.edited{background:rgba(255,181,22,.52)}",""]),r.locals={},t.exports=r},305:function(t,n,e){"use strict";e(298)},306:function(t,n,e){var r=e(135)((function(i){return i[1]}));r.push([t.i,".translation-word-grid{grid-gap:1rem;display:grid;gap:1rem}.translation-word td.iso{vertical-align:top;width:3rem}.translation-word:first-child td{padding-top:0}.translation-word:last-child td{padding-bottom:3rem}.translation-word td{padding-top:3rem}",""]),r.locals={},t.exports=r},307:function(t,n,e){"use strict";e(299)},308:function(t,n,e){var r=e(135)((function(i){return i[1]}));r.push([t.i,"label[data-v-2a220a18]{grid-gap:.2rem;display:grid;gap:.2rem}.iso[data-v-2a220a18],label>b[data-v-2a220a18]{color:#000}.translation-word .original-translation[data-v-2a220a18]{background:none;padding:0;resize:none}",""]),r.locals={},t.exports=r},309:function(t,n,e){var content=e(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(136).default)("ee5c9c5c",content,!0,{sourceMap:!1})},310:function(t,n,e){"use strict";e.r(n);e(300);var r={props:["translationKey","isParent","path","value","languages"],emits:["input","open-edit"],data:function(){return{pxPerDepth:20}},computed:{paddingLeft:function(){return"".concat(this.depth*this.pxPerDepth,"px")},depth:function(){return this.path.split(".").length-1}}},o=(e(301),e(46)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("tr",{staticClass:"translation-row",class:{"parent-key":t.isParent,"depth-0":0===t.depth},style:{"--depth-in-px":"".concat((t.depth-1)*t.pxPerDepth,"px")},on:{click:function(n){return t.$emit("open-edit")}}},[n("td",{staticClass:"translation-key",class:{"parent-key":t.isParent}},[n("span",{style:{"padding-left":t.paddingLeft}},[t._v("\n      "+t._s(t.translationKey)+"\n    ")])]),t._v(" "),t.isParent?n("td"):t._e(),t._v(" "),t._l(t.languages,(function(e){return t.isParent?n("td",{key:e}):t._e()})),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},311:function(t,n,e){"use strict";e.r(n);var r=e(294),o={props:["originalTranslation","customTranslation"],computed:{wasEdited:r.a.wasEdited,currentTranslation:r.a.currentTranslation}},l=(e(303),e(46)),component=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"current-word-translation",class:{edited:t.wasEdited}},[t._v("\n  "+t._s(t.currentTranslation)+"\n")])}),[],!1,null,null,null);n.default=component.exports},312:function(t,n,e){"use strict";e.r(n);var r=e(294),o={props:["originalTranslation","customTranslation","iso"],computed:{wasEdited:r.a.wasEdited,currentTranslation:r.a.currentTranslation}},l=(e(305),e(307),e(46)),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("tr",{staticClass:"translation-word"},[n("td",{staticClass:"iso"},[n("b",{staticClass:"iso"},[t._v(t._s(t.iso))])]),t._v(" "),n("td",[n("div",{staticClass:"translation-word-grid"},[n("label",[n("b",[t._v("Original translation:")]),t._v(" "),n("span",{staticClass:"original-translation"},[t._v(t._s(t.originalTranslation))])]),t._v(" "),n("label",[n("b",[t._v("Your translation:")]),t._v(" "),t._t("default")],2)])])])}),[],!1,null,"2a220a18",null);n.default=component.exports},313:function(t,n,e){"use strict";e(309)},314:function(t,n,e){var r=e(135)((function(i){return i[1]}));r.push([t.i,'html{font-size:14px}body{--accent:#0084ff;--light-text:#8c8c8c;--medium-text:#495057;--input-bg:#f3f3f3;--bg-accent:hsla(0,0%,86%,.188);color:#8c8c8c;color:var(--light-text);font-family:Roboto,system-ui,-apple-system,Segoe UI,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Oxygen,"Open Sans","Helvetica Neue";padding:1rem}#wrapper{align-items:left;display:flex;flex-direction:column;padding-bottom:10rem}h1,h2,h3,h4,h5,h6{color:#000}.btn{background:#000;border:none;border-radius:.2rem;color:#fff;cursor:pointer;font-weight:700;height:40px;padding:8px 12px}.iso{text-transform:uppercase}.translation-group{margin-left:24px}#edit-word-window-wrapper{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background:rgba(0,0,0,.4);height:100%;left:0;position:fixed;top:0;width:100%}#edit-word-window-container{align-content:center;align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}#edit-word-window-container>div{background:#fff;border-radius:.25rem;margin-left:5vmin;margin-right:5vmin;max-width:640px;padding:1rem 2.5rem;pointer-events:all}#edit-table{color:var(--medium-text)}#edit-table thead th{background:#fff;position:sticky;text-align:left;top:0}.original-translation,textarea{background:#f3f3f3;border:none;border-radius:.25rem;color:var(--medium-text);font-family:inherit;font-size:1rem;font-weight:400;line-height:1.5;overflow:auto;padding:.375rem .75rem;resize:vertical}textarea{--placeholder-col:var(--light-text)}textarea::-moz-placeholder{color:var(--placeholder-col);opacity:1}textarea::placeholder{color:var(--placeholder-col);opacity:1}textarea:-ms-input-placeholder{color:var(--placeholder-col)}textarea::-ms-input-placeholder{color:var(--placeholder-col)}input[type=file],select{background-color:var(--bg-accent);border:1px solid var(--light-text);border-radius:4px}input[type=file]{color:#000;height:40px;width:500px}input[type=file]::file-selector-button{background-color:#000;border:1px solid #000;border-radius:4px;color:#fff;cursor:pointer;height:40px;transition:all .25s ease-in}input[type=file]::file-selector-button:hover{background-color:#fff;color:#000;transition:all .25s ease-in}#column-selection label{align-items:center;font-weight:500;margin-right:.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}#column-selection,#column-selection label{display:flex;flex-wrap:nowrap}',""]),r.locals={},t.exports=r},315:function(t,n,e){"use strict";e.r(n);e(84),e(85),e(47),e(41),e(15),e(82),e(35),e(65),e(66);var r=e(27),o=e(22),l=e(14),c=e(12);e(64),e(40),e(32),e(206),e(293),e(25),e(67),e(33),e(34),e(138);function d(t,n){var e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),r=document.createElement("a");r.setAttribute("href",e),r.setAttribute("download",n+".json"),document.body.appendChild(r),r.click(),r.remove()}var main=e(300);e(310);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var h={data:function(){return{baseUrl:"https://dev.d1u2qdrqduf5v6.amplifyapp.com/translations/",customTranslations:{},languages:["de","en"],allLanguages:Object(main.b)(),translationKeys:null,defaultTranslations:null,defaultTranslationsFlat:{},editWordPath:null,originalTranslationColumnIso:"de",customTranslationsFileName:null,showFileImport:!1,showDownloadSrcFileSection:!Object(main.c)("anbieterId")}},created:function(){this.loadDefaultTranslations();var t=Object(main.c)("anbieterId"),n=Object(main.c)("subdomain");n&&t?(this.showFileImport=!1,this.customTranslationsFileName="".concat(n,"_").concat(t,".json"),this.loadCustomTranslationsFromServer()):(this.showFileImport=!0,this.$nextTick().then(this.setUpListenerForFileImport))},methods:{loadCustomTranslationsFromServer:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var e,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={},n.prev=1,r="".concat(t.baseUrl,"custom/").concat(t.customTranslationsFileName),n.next=5,Object(main.d)(r);case 5:o=n.sent,Object.keys(o).length>0&&(e=o),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),e={},console.error(n.t0);case 13:t.customTranslations=Object(main.a)(e),console.log(t.customTranslations),t.setTranslationKeys();case 16:case"end":return n.stop()}}),n,null,[[1,9]])})))()},setUpListenerForFileImport:function(){var t=this;document.getElementById("fileInput").addEventListener("change",(function(){if(0!==this.files.length){var n=new FileReader;n.onload=function(){var e=n.result,r=JSON.parse(e);r&&"object"===Object(l.a)(r)&&(t.loadedCustomTranslations=Object(main.a)(r),t.customTranslations=Object(main.a)(r),console.log(t.customTranslations),t.setTranslationKeys())},n.readAsText(this.files[0])}else console.log("No file selected.")}))},downloadResult:function(){var t=this,n={};Object.entries(this.customTranslations).forEach((function(e){var r=Object(o.a)(e,2),l=r[0],c=r[1],d=String(c||"").trim();d.length>0&&d!=t.defaultTranslationsFlat[l]&&(n[l]=d)})),d(Object(main.e)(n),this.customTranslationsFileName?this.customTranslationsFileName.replace(".json",""):"translations")},loadDefaultTranslations:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var e,r,o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.setDefaultTranslations(null),e=t.allLanguages.map((function(n){return"".concat(t.baseUrl).concat(n,"/translations.json")})),r=e.map(main.d),n.next=5,Promise.all(r);case 5:o=n.sent,l={},t.allLanguages.forEach((function(t,n){var data=o[n];l[t]=data})),t.setDefaultTranslations(l),t.setTranslationKeys();case 10:case"end":return n.stop()}}),n)})))()},openEdit:function(path){this.editWordPath=path},closeEdit:function(){this.editWordPath=null},setDefaultTranslations:function(t){Object(main.f)(t),this.defaultTranslationsFlat=Object(main.a)(t||{}),this.defaultTranslations=t},setTranslationKeys:function(){var t=this,n=function(t,n){var r=Object(o.a)(t,2),c=r[0],d=r[1],path=""===n?c:"".concat(n,".").concat(c),f={key:c,children:null,path:path};return d&&"object"===Object(l.a)(d)?f.children=e(d,path):f.original=d,f},e=function(t,path){return Object.entries(t).map((function(t){return n(t,path)}))},r=null;if(this.defaultTranslations){r=[],this.translationKeys=e(this.defaultTranslations.de,"");this.translationKeys.forEach((function t(n){var e={key:n.key,path:n.path,isParent:!1};n.children?(e.isParent=!0,r.push(e),n.children.forEach(t)):(e.original=n.original,r.push(e))})),this.languages.forEach((function(n){r.forEach((function(e){var r=e.isParent,path=e.path;if(!r){var o="".concat(n,".").concat(path);t.customTranslations[o]=t.customTranslations[o]||""}}))}))}else this.translationKeys=null;this.translationRows=r},updateTranslation:function(t,path,n){this.customTranslations["".concat(t,".").concat(path)]=n.target.value,this.customTranslations=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},this.customTranslations)},languageSelectionChanged:function(t){var n=this,e=this.languages.includes(t);this.languages=this.allLanguages.filter((function(r){return r===t?!e:n.languages.includes(r)}))},downloadResultAsSourceFile:function(t){var n=this,e={};Object.entries(this.customTranslations).forEach((function(r){var l=Object(o.a)(r,2),c=l[0],d=l[1];if(!c.startsWith(t))return null;var f=String(d||"").trim();e[c]=f.length>0?f:n.defaultTranslationsFlat[c]})),d(Object(main.e)(e),t)}},computed:{isLoading:function(){return null===this.defaultTranslations}}},v=h,m=(e(313),e(46)),component=Object(m.a)(v,(function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"wrapper"}},[t.isLoading?n("div",[n("h1",[t._v("CADI Translation Editor")]),t._v(" "),n("p",[t._v("Loading...")])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticStyle:{display:"grid",gap:"5rem"}},[n("h1",[t._v("CADI Translation Editor")]),t._v(" "),t.showFileImport?n("div",[n("h2",[t._v("Load project (optional)")]),t._v(" "),t._m(0),t._v(" "),n("input",{attrs:{type:"file",name:"fileInput",id:"fileInput",accept:".json"}})]):t._e(),t._v(" "),n("div",[n("h2",[t._v("Edit translations")]),t._v(" "),n("div",{attrs:{id:"column-selection"}},t._l(t.allLanguages,(function(e){return n("label",{key:e},[n("input",{attrs:{type:"checkbox",name:e},domProps:{checked:t.languages.includes(e)},on:{input:function(n){return t.languageSelectionChanged(e)}}}),t._v(" "),n("span",{staticClass:"iso"},[t._v("\n            "+t._s(e)+"\n          ")])])})),0),t._v(" "),t.translationKeys&&t.translationRows?n("table",{attrs:{id:"edit-table"}},[n("thead",[n("th",[t._v("Key")]),t._v(" "),n("th",{staticStyle:{"white-space":"nowrap"}},[t._v("\n            Original\n            "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.originalTranslationColumnIso,expression:"originalTranslationColumnIso"}],staticClass:"iso",staticStyle:{"margin-left":"4px"},on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.originalTranslationColumnIso=n.target.multiple?e:e[0]}}},t._l(t.allLanguages,(function(e){return n("option",{key:e,staticClass:"iso",domProps:{value:e}},[t._v("\n                "+t._s(e)+"\n              ")])})),0)]),t._v(" "),t._l(t.languages,(function(e){return n("th",{key:e,staticClass:"iso"},[t._v(t._s(e))])}))],2),t._v(" "),n("tbody",t._l(t.translationRows,(function(e){var r=e.key,o=e.isParent,path=e.path;return n("translationRow",{key:path,attrs:{isParent:o,translationKey:r,path:path,languages:t.languages},on:{"open-edit":function(n){!o&&t.openEdit(path)}}},[o?t._e():n("td",[t._v("\n              "+t._s(t.defaultTranslationsFlat["".concat(t.originalTranslationColumnIso,".").concat(path)])+"\n            ")]),t._v(" "),t._l(t.languages,(function(e){return o?t._e():n("td",{key:e},[n("current-word-translation",{attrs:{originalTranslation:t.defaultTranslationsFlat["".concat(e,".").concat(path)],customTranslation:t.customTranslations["".concat(e,".").concat(path)]}})],1)}))],2)})),1)]):t._e()]),t._v(" "),t.editWordPath?n("div",{attrs:{id:"edit-word-window-wrapper"}},[n("div",{staticStyle:{display:"absolut",left:"0",top:"0",width:"100%",height:"100%"},on:{click:t.closeEdit}}),t._v(" "),n("div",{attrs:{id:"edit-word-window-container"}},[n("div",[n("table",t._l(t.languages,(function(e){return n("translation-word",{key:e,attrs:{iso:e,originalTranslation:t.defaultTranslationsFlat["".concat(e,".").concat(t.editWordPath)],customTranslation:t.customTranslations["".concat(e,".").concat(t.editWordPath)]}},[n("textarea",{staticStyle:{"min-width":"200px"},attrs:{rows:"5",cols:"16",placeholder:t.defaultTranslationsFlat["".concat(e,".").concat(t.editWordPath)]},domProps:{value:t.customTranslations["".concat(e,".").concat(t.editWordPath)]},on:{input:function(n){return t.updateTranslation(e,t.editWordPath,n)}}})])})),1),t._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[n("span",{staticStyle:{"margin-right":"2rem","font-size":"small"}},[t._v("Changes get automatically saved")]),t._v(" "),n("button",{staticClass:"btn",on:{click:t.closeEdit}},[t._v("Ok")])])])])]):t._e(),t._v(" "),n("div",{staticStyle:{"max-width":"540px"}},[n("h2",[t._v("Download results")]),t._v(" "),n("p",[t._v("\n        Download the output file, which contains your custom translations.\n        Send it to us via email. We will check it and set it up for your\n        booking mask.\n      ")]),t._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("button",{staticClass:"btn",on:{click:t.downloadResult}},[t._v("Download")]),t._v(" "),t.showDownloadSrcFileSection?n("div",{staticStyle:{display:"flex","flex-wrap":"nowrap"}},[n("span",{staticStyle:{"margin-right":"6px","margin-top":"auto","margin-bottom":"auto","font-weight":"500"}},[t._v("Download source file:")]),t._v(" "),t._l(t.languages,(function(e){return n("button",{key:e,staticClass:"iso btn",staticStyle:{"margin-left":"4px"},on:{click:function(n){return t.downloadResultAsSourceFile(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2):t._e()])])])])}),[function(){var t=this._self._c;return t("label",{attrs:{for:"fileInput"}},[t("p",[this._v("\n          Load your current custom translations .json file to continue\n          editing.\n        ")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{CurrentWordTranslation:e(311).default,TranslationWord:e(312).default})}}]);