(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[190],{221:function(t,e,n){(function(t){var a,i,o,s;function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}window,s=function(){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==r(t)&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=68)}({0:function(t,e,n){"use strict";function a(t,e,n,a,i,o,s,r){var l,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),a&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=l):i&&(l=r?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(t,e){return l.call(e),c(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:d}}n.d(e,"a",(function(){return a}))},1:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,a,i,o=t[1]||"",s=t[3];if(!s)return o;if(e&&"function"==typeof btoa){var r=(n=s,a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(i," */")),l=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[o].concat(l).concat([r]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,a){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(a)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var r=0;r<t.length;r++){var l=[].concat(t[r]);a&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},10:function(t,e){t.exports=n(101)},100:function(t,e,n){(e=n(1)(!1)).push([t.i,"ul[data-v-81c2afc0]{display:flex;flex-direction:column}\n",""]),t.exports=e},12:function(t,e){t.exports=n(100)},2:function(t,e,n){"use strict";function a(t,e){for(var n=[],a={},i=0;i<e.length;i++){var o=e[i],s=o[0],r={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};a[s]?a[s].parts.push(r):n.push(a[s]={id:s,parts:[r]})}return n}n.r(e),n.d(e,"default",(function(){return b}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),r=null,l=0,d=!1,c=function(){},u=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function b(t,e,n,i){d=n,u=i||{};var s=a(t,e);return m(s),function(e){for(var n=[],i=0;i<s.length;i++){var r=s[i];(l=o[r.id]).refs--,n.push(l)}for(e?m(s=a(t,e)):s=[],i=0;i<n.length;i++){var l;if(0===(l=n[i]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete o[l.id]}}}}function m(t){for(var e=0;e<t.length;e++){var n=t[e],a=o[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(f(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(f(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:s}}}}function v(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function f(t){var e,n,a=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(a){if(d)return c;a.parentNode.removeChild(a)}if(p){var i=l++;a=r||(r=v()),e=x.bind(null,a,i,!1),n=x.bind(null,a,i,!0)}else a=v(),e=g.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}var h,y=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function x(t,e,n,a){var i=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function g(t,e){var n=e.css,a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),u.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},20:function(t,e){t.exports=n(103)},3:function(t,e){t.exports=n(51)},31:function(t,e){t.exports=n(188)},41:function(t,e,n){var a=n(96);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,n(2).default)("2c4a49e8",a,!0,{})},42:function(t,e,n){var a=n(98);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,n(2).default)("482a1b4c",a,!0,{})},43:function(t,e,n){var a=n(100);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,n(2).default)("93093140",a,!0,{})},53:function(t,e){},68:function(t,e,n){"use strict";n.r(e),n(20),n(8),n(3),n(12),n(9),n(10),n(31);var a={name:"PopoverMenuItem",props:{item:{type:Object,required:!0,default:function(){return{key:"nextcloud-link",href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}},validator:function(t){return!t.input||-1!==["text","checkbox"].indexOf(t.input)}}},computed:{key:function(){return this.item.key?this.item.key:Math.round(16*Math.random()*1e6).toString(16)},iconIsUrl:function(){try{return new URL(this.item.icon),!0}catch(t){return!1}}},methods:{action:function(t){this.item.action&&this.item.action(t)}}},i=(n(95),n(97),n(0)),o={name:"PopoverMenu",components:{PopoverMenuItem:Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t.item.href?n("a",{staticClass:"focusable",attrs:{href:t.item.href?t.item.href:"#",target:t.item.target?t.item.target:"",download:t.item.download,rel:"noreferrer noopener"},on:{click:t.action}},[t.iconIsUrl?n("img",{attrs:{src:t.item.icon}}):n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):t.item.input?n("span",{staticClass:"menuitem",class:{active:t.item.active}},["checkbox"!==t.item.input?n("span",{class:t.item.icon}):t._e(),t._v(" "),"text"===t.item.input?n("form",{class:t.item.input,on:{submit:function(e){return e.preventDefault(),t.item.action(e)}}},[n("input",{attrs:{type:t.item.input,placeholder:t.item.text,required:""},domProps:{value:t.item.value}}),t._v(" "),n("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}})]):["checkbox"===t.item.input?n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"checkbox"},domProps:{checked:Array.isArray(t.item.model)?t._i(t.item.model,null)>-1:t.item.model},on:{change:[function(e){var n=t.item.model,a=e.target,i=!!a.checked;if(Array.isArray(n)){var o=t._i(n,null);a.checked?o<0&&t.$set(t.item,"model",n.concat([null])):o>-1&&t.$set(t.item,"model",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.item,"model",i)},t.item.action]}}):"radio"===t.item.input?n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"radio"},domProps:{checked:t._q(t.item.model,null)},on:{change:[function(e){return t.$set(t.item,"model",null)},t.item.action]}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:t.item.input},domProps:{value:t.item.model},on:{change:t.item.action,input:function(e){e.target.composing||t.$set(t.item,"model",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:t.key},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.item.action(e)}}},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")])]],2):t.item.action?n("button",{staticClass:"menuitem focusable",class:{active:t.item.active},attrs:{disabled:t.item.disabled},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.item.action(e)}}},[n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):n("span",{staticClass:"menuitem",class:{active:t.item.active}},[n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()])])}),[],!1,null,"3ad7b73b",null).exports},props:{menu:{type:Array,default:function(){return[{href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}]},required:!0}}},s=(n(99),n(53)),r=n.n(s),l=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("ul",this._l(this.menu,(function(t,n){return e("PopoverMenuItem",{key:n,attrs:{item:t}})})),1)}),[],!1,null,"81c2afc0",null);"function"==typeof r.a&&r()(l);var d=l.exports;
/**
       * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
       *
       * @author John Molakvoæ <skjnldsv@protonmail.com>
       *
       * @license GNU AGPL version 3 or any later version
       *
       * This program is free software: you can redistribute it and/or modify
       * it under the terms of the GNU Affero General Public License as
       * published by the Free Software Foundation, either version 3 of the
       * License, or (at your option) any later version.
       *
       * This program is distributed in the hope that it will be useful,
       * but WITHOUT ANY WARRANTY; without even the implied warranty of
       * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
       * GNU Affero General Public License for more details.
       *
       * You should have received a copy of the GNU Affero General Public License
       * along with this program. If not, see <http://www.gnu.org/licenses/>.
       *
       */e.default=d},8:function(t,e){t.exports=n(52)},9:function(t,e){t.exports=n(99)},95:function(t,e,n){"use strict";var a=n(41);n.n(a).a},96:function(t,e,n){(e=n(1)(!1)).push([t.i,"\nbutton.menuitem[data-v-3ad7b73b] {\n\ttext-align: left;\n}\nbutton.menuitem *[data-v-3ad7b73b] {\n\tcursor: pointer;\n}\nbutton.menuitem[data-v-3ad7b73b]:disabled {\n\topacity: 0.5 !important;\n\tcursor: default;\n}\nbutton.menuitem:disabled *[data-v-3ad7b73b] {\n\tcursor: default;\n}\n.menuitem.active[data-v-3ad7b73b] {\n\tbox-shadow: inset 2px 0 var(--color-primary);\n\tborder-radius: 0;\n}\n",""]),t.exports=e},97:function(t,e,n){"use strict";var a=n(42);n.n(a).a},98:function(t,e,n){(e=n(1)(!1)).push([t.i,"li[data-v-3ad7b73b]{display:flex;flex:0 0 auto}li.hidden[data-v-3ad7b73b]{display:none}li>button[data-v-3ad7b73b],li>a[data-v-3ad7b73b],li>.menuitem[data-v-3ad7b73b]{cursor:pointer;line-height:44px;border:0;border-radius:0;background-color:transparent;display:flex;align-items:flex-start;height:auto;margin:0;padding:0;font-weight:normal;box-shadow:none;width:100%;color:var(--color-main-text);white-space:nowrap;opacity:.7}li>button span[class^='icon-'][data-v-3ad7b73b],li>button span[class*=' icon-'][data-v-3ad7b73b],li>button[class^='icon-'][data-v-3ad7b73b],li>button[class*=' icon-'][data-v-3ad7b73b],li>a span[class^='icon-'][data-v-3ad7b73b],li>a span[class*=' icon-'][data-v-3ad7b73b],li>a[class^='icon-'][data-v-3ad7b73b],li>a[class*=' icon-'][data-v-3ad7b73b],li>.menuitem span[class^='icon-'][data-v-3ad7b73b],li>.menuitem span[class*=' icon-'][data-v-3ad7b73b],li>.menuitem[class^='icon-'][data-v-3ad7b73b],li>.menuitem[class*=' icon-'][data-v-3ad7b73b]{min-width:0;min-height:0;background-position:14px center;background-size:16px}li>button span[class^='icon-'][data-v-3ad7b73b],li>button span[class*=' icon-'][data-v-3ad7b73b],li>a span[class^='icon-'][data-v-3ad7b73b],li>a span[class*=' icon-'][data-v-3ad7b73b],li>.menuitem span[class^='icon-'][data-v-3ad7b73b],li>.menuitem span[class*=' icon-'][data-v-3ad7b73b]{padding:22px 0 22px 44px}li>button:not([class^='icon-']):not([class*='icon-'])>span[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>input[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>form[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>span[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>input[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>form[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>span[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>input[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>form[data-v-3ad7b73b]:not([class^='icon-']):not([class*='icon-']):first-child{margin-left:44px}li>button[class^='icon-'][data-v-3ad7b73b],li>button[class*=' icon-'][data-v-3ad7b73b],li>a[class^='icon-'][data-v-3ad7b73b],li>a[class*=' icon-'][data-v-3ad7b73b],li>.menuitem[class^='icon-'][data-v-3ad7b73b],li>.menuitem[class*=' icon-'][data-v-3ad7b73b]{padding:0 14px 0 44px}li>button[data-v-3ad7b73b]:not(:disabled):hover,li>button[data-v-3ad7b73b]:not(:disabled):focus,li>button:not(:disabled).active[data-v-3ad7b73b],li>a[data-v-3ad7b73b]:not(:disabled):hover,li>a[data-v-3ad7b73b]:not(:disabled):focus,li>a:not(:disabled).active[data-v-3ad7b73b],li>.menuitem[data-v-3ad7b73b]:not(:disabled):hover,li>.menuitem[data-v-3ad7b73b]:not(:disabled):focus,li>.menuitem:not(:disabled).active[data-v-3ad7b73b]{opacity:1 !important}li>button.action[data-v-3ad7b73b],li>a.action[data-v-3ad7b73b],li>.menuitem.action[data-v-3ad7b73b]{padding:inherit !important}li>button>span[data-v-3ad7b73b],li>a>span[data-v-3ad7b73b],li>.menuitem>span[data-v-3ad7b73b]{cursor:pointer;white-space:nowrap}li>button>p[data-v-3ad7b73b],li>a>p[data-v-3ad7b73b],li>.menuitem>p[data-v-3ad7b73b]{width:150px;line-height:1.6em;padding:8px 0;white-space:normal}li>button>select[data-v-3ad7b73b],li>a>select[data-v-3ad7b73b],li>.menuitem>select[data-v-3ad7b73b]{margin:0;margin-left:6px}li>button[data-v-3ad7b73b]:not(:empty),li>a[data-v-3ad7b73b]:not(:empty),li>.menuitem[data-v-3ad7b73b]:not(:empty){padding-right:14px !important}li>button>img[data-v-3ad7b73b],li>a>img[data-v-3ad7b73b],li>.menuitem>img[data-v-3ad7b73b]{width:44px;padding:14px}li>button>input.radio+label[data-v-3ad7b73b],li>button>input.checkbox+label[data-v-3ad7b73b],li>a>input.radio+label[data-v-3ad7b73b],li>a>input.checkbox+label[data-v-3ad7b73b],li>.menuitem>input.radio+label[data-v-3ad7b73b],li>.menuitem>input.checkbox+label[data-v-3ad7b73b]{padding:0 !important;width:100%}li>button>input.checkbox+label[data-v-3ad7b73b]::before,li>a>input.checkbox+label[data-v-3ad7b73b]::before,li>.menuitem>input.checkbox+label[data-v-3ad7b73b]::before{margin:-2px 13px 0}li>button>input.radio+label[data-v-3ad7b73b]::before,li>a>input.radio+label[data-v-3ad7b73b]::before,li>.menuitem>input.radio+label[data-v-3ad7b73b]::before{margin:-2px 12px 0}li>button>input[data-v-3ad7b73b]:not([type=radio]):not([type=checkbox]):not([type=image]),li>a>input[data-v-3ad7b73b]:not([type=radio]):not([type=checkbox]):not([type=image]),li>.menuitem>input[data-v-3ad7b73b]:not([type=radio]):not([type=checkbox]):not([type=image]){width:150px}li>button form[data-v-3ad7b73b],li>a form[data-v-3ad7b73b],li>.menuitem form[data-v-3ad7b73b]{display:flex;flex:1 1 auto}li>button form[data-v-3ad7b73b]:not(:first-child),li>a form[data-v-3ad7b73b]:not(:first-child),li>.menuitem form[data-v-3ad7b73b]:not(:first-child){margin-left:5px}li>button>span.hidden+form[data-v-3ad7b73b],li>button>span[style*='display:none']+form[data-v-3ad7b73b],li>a>span.hidden+form[data-v-3ad7b73b],li>a>span[style*='display:none']+form[data-v-3ad7b73b],li>.menuitem>span.hidden+form[data-v-3ad7b73b],li>.menuitem>span[style*='display:none']+form[data-v-3ad7b73b]{margin-left:0}li>button input[data-v-3ad7b73b],li>a input[data-v-3ad7b73b],li>.menuitem input[data-v-3ad7b73b]{min-width:44px;max-height:40px;margin:2px 0;flex:1 1 auto}li>button input[data-v-3ad7b73b]:not(:first-child),li>a input[data-v-3ad7b73b]:not(:first-child),li>.menuitem input[data-v-3ad7b73b]:not(:first-child){margin-left:5px}li:not(.hidden):not([style*='display:none']):first-of-type>button>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):first-of-type>button>input[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):first-of-type>a>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):first-of-type>a>input[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>input[data-v-3ad7b73b]{margin-top:12px}li:not(.hidden):not([style*='display:none']):last-of-type>button>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):last-of-type>button>input[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):last-of-type>a>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):last-of-type>a>input[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>form[data-v-3ad7b73b],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>input[data-v-3ad7b73b]{margin-bottom:12px}li>button[data-v-3ad7b73b]{padding:0}li>button span[data-v-3ad7b73b]{opacity:1}\n",""]),t.exports=e},99:function(t,e,n){"use strict";var a=n(43);n.n(a).a}})},"object"==r(e)&&"object"==r(t)?t.exports=s():(i=[],void 0===(o="function"==typeof(a=s)?a.apply(e,i):a)||(t.exports=o))}).call(this,n(182)(t))},228:function(t,e,n){var a=n(680);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(50).default)("d2238818",a,!0,{})},679:function(t,e,n){"use strict";var a=n(228);n.n(a).a},680:function(t,e,n){(e=n(49)(!1)).push([t.i,".session-list[data-v-77055db6]{position:relative}.session-list[data-v-77055db6] .popovermenu{margin-right:-4px}.session-list[data-v-77055db6] .popovermenu img{padding:0;width:32px !important;height:32px !important;margin:6px;border-radius:50%;filter:none !important}.avatar-list[data-v-77055db6]{display:inline-flex;flex-direction:row-reverse}.avatar-list .avatardiv[data-v-77055db6],.avatar-list[data-v-77055db6] .avatardiv{width:36px;height:36px;margin-right:-8px;border:2px solid var(--color-main-background);box-sizing:content-box !important}.avatar-list .avatardiv.icon-more[data-v-77055db6],.avatar-list[data-v-77055db6] .avatardiv.icon-more{width:32px;height:32px;opacity:.5;cursor:pointer}.popovermenu[data-v-77055db6]{display:block}\n",""]),t.exports=e},687:function(t,e,a){"use strict";a.r(e);var i=a(374),o=a.n(i),s=a(221),r=a.n(s),l=a(187),d=a.n(l),c=a(11);function u(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var b={name:"SessionList",components:{Avatar:o.a,PopoverMenu:r.a},directives:{tooltip:d.a},props:{sessions:{type:Object,default:function(){return{}}}},data:function(){return{popoverVisible:"",myName:""}},computed:{editorsTooltip:function(){if(this.sessionsPopover.length>0){var t=this.activeSessions.slice(0,3).map((function(t){return t.guestName?t.guestName:t.displayName})).join(", "),e=this.activeSessions.slice(3).length;return t+" "+n("text","and %n other editor","and %n other editors",e)}return this.activeSessions.slice(0,3).map((function(t){return t.guestName?t.guestName:t.displayName})).join(", ")},avatarUrl:function(){return function(t){var e=t.guestName?t.guestName:t.userId,n=!!t.guestName,a=Object(c.generateUrl)(n?"/avatar/guest/{user}/{size}":"/avatar/{user}/{size}",{user:e,size:32});return window.location.protocol+"//"+window.location.host+a}},activeSessions:function(){return Object.values(this.sessions).filter((function(t){return t.lastContact>Date.now()/1e3-90&&!t.isCurrent&&(null!==t.userId||null!==t.guestName)}))},currentSession:function(){return Object.values(this.sessions).find((function(t){return t.isCurrent}))},sessionStyle:function(){return function(t){return{opacity:t.lastContact>Date.now()/1e3-60?1:.5}}},sessionsVisible:function(){return this.activeSessions.slice(0,3)},sessionsPopover:function(){var t=this;return u(this.activeSessions.slice(3).map((function(e){return{href:"#",icon:t.avatarUrl(e),text:e.guestName?e.guestName:e.displayName}})))}},methods:{}},m=(a(679),a(18)),v=Object(m.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"session-list"},[n("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.editorsTooltip,expression:"editorsTooltip",modifiers:{bottom:!0}}],staticClass:"avatar-list",on:{click:function(e){t.popoverVisible=!t.popoverVisible}}},[t.sessionsPopover.length>0?n("div",{staticClass:"avatardiv icon-more"}):t._e(),t._v(" "),t._l(t.sessionsVisible,(function(e){return n("Avatar",{key:e.id,style:t.sessionStyle(e),attrs:{user:e.userId?e.userId:e.guestName,"is-guest":null===e.userId,"disable-tooltip":!0,size:32}})}))],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.popoverVisible,expression:"popoverVisible"}],staticClass:"popovermenu menu-right"},[n("PopoverMenu",{attrs:{menu:t.sessionsPopover}}),t._v(" "),t._t("default")],2)])}),[],!1,null,"77055db6",null);e.default=v.exports}}]);
//# sourceMappingURL=editor-collab.js.map?v=52ba19355d9f2642c2f0