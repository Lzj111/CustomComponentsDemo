var nestingView;(()=>{var e={714:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"\n.hello[data-v-18b14a65] {\r\n  width: 300px;\r\n  height: 200px;\r\n  border: 1px solid pink;\n}\nimg[data-v-18b14a65] {\r\n  height: 100px;\n}\r\n",""]);const i=s},225:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"\n.hello[data-v-8cd63cf4] {\r\n  width: 300px;\r\n  height: 200px;\r\n  border: 1px solid pink;\n}\nimg[data-v-8cd63cf4] {\r\n  height: 100px;\n}\r\n",""]);const i=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},82:(e,t,n)=>{var r=n(714);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(346).Z)("5e73fc06",r,!1,{})},109:(e,t,n)=>{var r=n(225);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(346).Z)("e33fc65a",r,!1,{})},346:(e,t,n)=>{"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],s=a[0],i={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(i):n.push(r[s]={id:s,parts:[i]})}return n}n.d(t,{Z:()=>v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},s=o&&(document.head||document.getElementsByTagName("head")[0]),i=null,c=0,d=!1,l=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,o){d=n,u=o||{};var s=r(e,t);return h(s),function(t){for(var n=[],o=0;o<s.length;o++){var i=s[o];(c=a[i.id]).refs--,n.push(c)}for(t?h(s=r(e,t)):s=[],o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete a[c.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(g(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(d)return l;r.parentNode.removeChild(r)}if(f){var o=c++;r=i||(i=m()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=m(),t=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var _,y=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function x(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute(p,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{default:()=>d});var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h3",[e._v("你好啊")]),e._v(" "),n(e.componentName,{tag:"component"})],1)};e._withStripped=!0;var t=function(){var e=this;e.$createElement;return e._self._c,e._m(0)};t._withStripped=!0;const o={name:"HelloWorld",props:{msg:String},computed:{},created(){}};function a(e,t,n,r,o,a,s,i){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=c):o&&(c=i?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}n(82);var s=a(o,t,[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h3",[e._v("组件2222")])])}],!1,null,"18b14a65",null);s.options.__file="src/comm.vue";const i={name:"HelloWorld",components:{comm:s.exports},props:{msg:String},data:()=>({componentName:"comm"}),created(){},mounted(){}};n(109);var c=a(i,e,[],!1,null,"8cd63cf4",null);c.options.__file="src/nestingView.vue";const d=c.exports})(),nestingView=r})();