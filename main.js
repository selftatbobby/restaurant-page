(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),c=n.n(o)()(a());c.push([e.id,"body {\n    background-color: green;;\n}\nbutton {\n    border: 1px solid red;\n}\n\nbutton.active {\n    border: 1px solid red;\n    background-color: #ccc;\n\n}\n\n.tabcontent {\n    display: block;\n}\n\n",""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],s=0;s<e.length;s++){var i=e[s],d=r.base?i[0]+r.base:i[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var s=n(o[c]);t[s].references--}for(var i=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),c=n.n(o),s=n(565),i=n.n(s),d=n(216),l=n.n(d),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=i(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let v=document.getElementById("content"),h=document.createElement("div"),b=document.createElement("button"),y=document.createElement("button"),g=document.createElement("button"),E=document.createElement("div"),C=document.createElement("img"),x=document.createElement("p"),L=document.getElementsByClassName("tabcontent");function T(e){var t,n;for(t=0;t<L.length;t++)L[t].style.display="none";for(n=document.getElementsByClassName("tablinks"),t=0;t<n.length;t++)n[t].className=n[t].className.replace(" active","");e.currentTarget.className+=" active",console.log(e.currentTarget)}v.appendChild(h),h.appendChild(b),b.innerHTML="Home",h.appendChild(y),y.innerHTML="Menu",h.appendChild(g),g.innerHTML="Contact",b.classList.add("tablinks"),y.classList.add("tablinks"),g.classList.add("tablinks"),v.appendChild(E),E.classList.add("tabcontent"),E.appendChild(x),x.innerHTML="Food tastes good. At One Bite, TRY MORE with LESS!",E.appendChild(C),C.src="../src/spoon-cereal.png",C.alt="Spoon of cereal",b.classList.add("active"),b.addEventListener("click",T),y.addEventListener("click",T),g.addEventListener("click",T)})()})();