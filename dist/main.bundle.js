!function(n){function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(1),i=(e.n(r),e(2));e.n(i);$(function(){$("#intro1").clamp({clamp:3,truncationHTML:'...<span class="triangle down"></span>'}),$("#intro2").clamp({hasHeight:!0,truncationHTML:'...<span class="triangle down"></span>'}),$("#tag3");var n=$("#intro3"),t=n.clamp({hasHeight:!0,truncationHTML:'...<span class="triangle down"></span>'});n.data("clamp")&&n.on("click",function(){$(this).data("clamp")?(n.html(t.original+'<span class="triangle up"></span>'),n.css({height:"auto"}),$(this).data("clamp",!1)):(n.html(t.clamped),n.css({height:""}),$(this).data("clamp",!0))});var e=$("#tag4"),r=$("#intro4"),i=r.clamp({hasHeight:!0,truncationHTML:'...<span class="triangle down"></span>',force:e.get(0).scrollHeight>e.get(0).clientHeight});(r.data("clamp")||e.get(0).scrollHeight>e.get(0).clientHeight)&&r.on("click",function(){$(this).data("clamp")?(r.html(i.original+'<span class="triangle up"></span>'),r.css({height:"auto"}),e.css({height:"auto"}),$(this).data("clamp",!1)):(r.html(i.clamped),r.css({height:""}),e.css({height:""}),$(this).data("clamp",!0))});var o=$("#tag5"),a=$("#intro5"),l=a.clamp({hasHeight:!0,truncationHTML:'...<span class="triangle down"></span>',force:o.get(0).scrollHeight>o.get(0).clientHeight});(a.data("clamp")||o.get(0).scrollHeight>o.get(0).clientHeight)&&a.on("click",function(){$(this).data("clamp")?(a.html(l.original+'<span class="triangle up"></span>'),a.css({height:"auto"}),o.css({height:"auto"}),$(this).data("clamp",!1)):(a.html(l.clamped),a.css({height:""}),o.css({height:""}),$(this).data("clamp",!0))});for(var s=$(".intros"),c=0;c<s.length;c++)s.eq(c).clamp({hasHeight:!0,truncationHTML:'...<span class="triangle down"></span>'})})},function(n,t){!function(n){n.extend(n.fn,{clamp:function(t){function e(n,t){return window.getComputedStyle(n,null).getPropertyValue(t)}function r(n,t){if(t){var e=n.html();if(c||(f=u.length>0?u.shift():"",c=e.split(f)),c.length>1?(p=c.pop(),i(n,c.join(f))):c=null,a.truncationHTML&&o.html(n.html()+a.truncationHTML),c&&(a.hasHeight?o[0].scrollHeight<=t:o[0].clientHeight<=t)){if(!(u.length>=0&&""!==f))return l=o.html().replace(a.truncationHTML,""),o.html();i(n,c.join(f)+f+p),c=null}return r(n,t)}}function i(n,t){n.html(t)}var o=this,a={clamp:2,hasHeight:!1,splitOnChars:["，","、","。"," "],truncationHTML:"",force:!1};n.extend(a,t);var l,s,c,p,h=o.html(),u=a.splitOnChars.slice(0),f=u[0];a.force&&o.append(a.truncationHTML);var d=a.hasHeight?parseFloat(e(o[0],"height")):function(n){return function(n){var t=e(n,"line-height");return"normal"===t&&(t=1.1*parseInt(e(n,"font-size"))),parseInt(t)}(o[0])*n}(a.clamp);return(a.hasHeight?d<o[0].scrollHeight:d<o[0].clientHeight)?(s=r(o,d),o.data("clamp",!0)):(s=o.html(),a.force?o.data("clamp",!0):o.data("clamp",!1),a.hasHeight&&o.css({height:"auto"})),{original:h,clamped:s,clampedPure:l}}})}(Zepto)},function(n,t,e){var r=e(3);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0};i.transform=void 0;e(5)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(4)(void 0)).push([n.i,"* {\n  margin: 0;\n  padding: 0;\n}\n\n@media(min-width: 414px) {\n  body {\n    width: 366px;\n    margin: 0 auto;\n  }\n}\n\n@media(max-width: 414px) {\n  body {\n    margin: 0 auto;\n    padding: 24px;\n  }\n}\n\nsection {\n  font-size: 14px;\n  color: #000;\n  margin: 24px 0;\n}\n\np {\n  padding: 6px;\n}\n\n.ellipsis {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.ellipsis-auto {\n  display: inline-block;\n  width: auto;\n  max-width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.ellipsis-full {\n  display: inline-block;\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.clamp {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n\n.clamp1 {\n  -webkit-line-clamp: 1;\n}\n\n.clamp2 {\n  -webkit-line-clamp: 2;\n}\n\n.tag {\n  display: inline-block;\n  padding: 0 8px;\n  height: 20px;\n  line-height: 21px;\n  font-size: 11px;\n  color: rgba(54, 58, 61, 0.35);\n  border: 1px solid;\n  position: relative;\n  border-radius: 4px;\n  vertical-align: bottom;\n  white-space: nowrap;\n  margin: 10px 8px 0 0;\n}\n\n.tag-price {\n  float: right;\n  display: inline-block;\n  padding: 0 8px;\n  margin-left: 6px;\n  height: 20px;\n  line-height: 21px;\n  font-size: 11px;\n  color: rgba(54, 58, 61, 0.35);\n  border: 1px solid;\n  border-radius: 4px;\n  vertical-align: bottom;\n  white-space: nowrap;\n}\n\n.top {\n  float: right;\n  display: inline-block;\n  padding: 0 8px;\n  height: 20px;\n  line-height: 21px;\n  font-size: 16px;\n  color: #e8554d;\n  vertical-align: bottom;\n  white-space: nowrap;\n}\n\n.triangle {\n  display: inline-block;\n  position: relative;\n  float: right;\n  width: 8px;\n  height: 8px;\n}\n\n.triangle::before {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n  border: 4px solid;\n}\n\n.down {\n  margin: 10px 10px 0;\n}\n\n.up {\n  margin: 6px 10px 0;\n}\n\n.down::before {\n  border-color: #000 transparent transparent;\n  vertical-align: -0.25ex;\n}\n\n.up::before {\n  border-color: transparent transparent #000;\n  vertical-align: 0.25ex;\n}\n\n.tags {\n  overflow: hidden;\n  height: 32px;\n}\n\n\n\n\n\n\n\n\n\n/*\nOriginal highlight.js style (c) Ivan Sagalaev <maniac@softwaremaniacs.org>\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #F0F0F0;\n}\n\n\n/* Base color: saturation 0; */\n\n.hljs,\n.hljs-subst {\n  color: #444;\n}\n\n.hljs-comment {\n  color: #888888;\n}\n\n.hljs-keyword,\n.hljs-attribute,\n.hljs-selector-tag,\n.hljs-meta-keyword,\n.hljs-doctag,\n.hljs-name {\n  font-weight: bold;\n}\n\n\n/* User color: hue: 0 */\n\n.hljs-type,\n.hljs-string,\n.hljs-number,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-quote,\n.hljs-template-tag,\n.hljs-deletion {\n  color: #880000;\n}\n\n.hljs-title,\n.hljs-section {\n  color: #880000;\n  font-weight: bold;\n}\n\n.hljs-regexp,\n.hljs-symbol,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-link,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #BC6060;\n}\n\n\n/* Language color: hue: 90; */\n\n.hljs-literal {\n  color: #78A960;\n}\n\n.hljs-built_in,\n.hljs-bullet,\n.hljs-code,\n.hljs-addition {\n  color: #397300;\n}\n\n\n/* Meta color: hue: 200 */\n\n.hljs-meta {\n  color: #1f7199;\n}\n\n.hljs-meta-string {\n  color: #4d99bf;\n}\n\n\n\n\n\n\n\n\n\n\n\n/* Misc effects */\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}",""])},function(n,t){function e(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(r),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(o).concat([i]).join("\n")}return[e].join("\n")}n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var r=e(t,n);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<n.length;i++){var a=n[i];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){function r(n,t){for(var e=0;e<n.length;e++){var r=n[e],i=h[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(c(r.parts[o],t))}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(c(r.parts[o],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function i(n,t){for(var e=[],r={},i=0;i<n.length;i++){var o=n[i],a=t.base?o[0]+t.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(l):e.push(r[a]={id:a,parts:[l]})}return e}function o(n,t){var e=f(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=m[m.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),m.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=f(n.insertInto+" "+n.insertAt.before);e.insertBefore(t,i)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=m.indexOf(n);t>=0&&m.splice(t,1)}function l(n){var t=document.createElement("style");return n.attrs.type="text/css",s(t,n.attrs),o(n,t),t}function s(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function c(n,t){var e,r,i,c;if(t.transform&&n.css){if(!(c=t.transform(n.css)))return function(){};n.css=c}if(t.singleton){var h=g++;e=d||(d=l(t)),r=p.bind(null,e,h,!1),i=p.bind(null,e,h,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",s(t,n.attrs),o(n,t),t}(t),r=function(n,t,e){var r=e.css,i=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=b(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,e,t),i=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=l(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){a(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}function p(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=v(t,i);else{var o=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}var h={},u=function(n){var t;return function(){return void 0===t&&(t=n.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),f=function(n){var t={};return function(n){if(void 0===t[n]){var e=function(n){return document.querySelector(n)}.call(this,n);if(e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}}(),d=null,g=0,m=[],b=e(6);n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=u()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=i(n,t);return r(e,t),function(n){for(var o=[],a=0;a<e.length;a++){var l=e[a];(s=h[l.id]).refs--,o.push(s)}if(n){r(i(n,t),t)}for(a=0;a<o.length;a++){var s;if(0===(s=o[a]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete h[s.id]}}}};var v=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}()},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return n;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}}]);