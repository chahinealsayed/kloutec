var q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function H(k){return k&&k.__esModule&&Object.prototype.hasOwnProperty.call(k,"default")?k.default:k}var P={exports:{}};(function(k,F){(function(v,m){k.exports=m()})(window,function(){return function(v){var m={};function u(n){if(m[n])return m[n].exports;var s=m[n]={i:n,l:!1,exports:{}};return v[n].call(s.exports,s,s.exports,u),s.l=!0,s.exports}return u.m=v,u.c=m,u.d=function(n,s,h){u.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:h})},u.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,s){if(1&s&&(n=u(n)),8&s||4&s&&typeof n=="object"&&n&&n.__esModule)return n;var h=Object.create(null);if(u.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:n}),2&s&&typeof n!="string")for(var y in n)u.d(h,y,(function(p){return n[p]}).bind(null,y));return h},u.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(s,"a",s),s},u.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},u.p="/",u(u.s=5)}([function(v,m,u){var n=u(1);typeof n=="string"&&(n=[[v.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};u(3)(n,s),n.locals&&(v.exports=n.locals)},function(v,m,u){(v.exports=u(2)(!1)).push([v.i,`.cdx-warning {
  position: relative;

}

@media all and (min-width: 736px) {
  .cdx-warning {
    padding-left: 36px;
  }
}

.cdx-warning [contentEditable=true][data-placeholder]::before{
  position: absolute;
  content: attr(data-placeholder);
  color: #707684;
  font-weight: normal;
  opacity: 0;
}

.cdx-warning [contentEditable=true][data-placeholder]:empty::before {
  opacity: 1;
}

.cdx-warning [contentEditable=true][data-placeholder]:empty:focus::before {
  opacity: 0;
}


.cdx-warning::before {
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='5' width='14' height='14' rx='4' stroke='black' stroke-width='2'/%3E%3Cline x1='12' y1='9' x2='12' y2='12' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M12 15.02V15.01' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  width: 24px;
  height: 24px;
  background-size: 24px 24px;
  position: absolute;
  margin-top: 8px;
  left: 0;
}

@media all and (max-width: 735px) {
  .cdx-warning::before {
    display: none;
  }
}

.cdx-warning__message {
  min-height: 85px;
}

.cdx-warning__title {
  margin-bottom: 6px;
}
`,""])},function(v,m,u){v.exports=function(n){var s=[];return s.toString=function(){return this.map(function(h){var y=function(p,o){var a=p[1]||"",i=p[3];if(!i)return a;if(o&&typeof btoa=="function"){var w=(S=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(S))))+" */"),x=i.sources.map(function(C){return"/*# sourceURL="+i.sourceRoot+C+" */"});return[a].concat(x).concat([w]).join(`
`)}var S;return[a].join(`
`)}(h,n);return h[2]?"@media "+h[2]+"{"+y+"}":y}).join("")},s.i=function(h,y){typeof h=="string"&&(h=[[null,h,""]]);for(var p={},o=0;o<this.length;o++){var a=this[o][0];a!=null&&(p[a]=!0)}for(o=0;o<h.length;o++){var i=h[o];i[0]!=null&&p[i[0]]||(y&&!i[2]?i[2]=y:y&&(i[2]="("+i[2]+") and ("+y+")"),s.push(i))}},s}},function(v,m,u){var n,s,h={},y=(n=function(){return window&&document&&document.all&&!window.atob},function(){return s===void 0&&(s=n.apply(this,arguments)),s}),p=function(t){var e={};return function(r,f){if(typeof r=="function")return r();if(e[r]===void 0){var d=(function(l,g){return g?g.querySelector(l):document.querySelector(l)}).call(this,r,f);if(window.HTMLIFrameElement&&d instanceof window.HTMLIFrameElement)try{d=d.contentDocument.head}catch{d=null}e[r]=d}return e[r]}}(),o=null,a=0,i=[],w=u(4);function x(t,e){for(var r=0;r<t.length;r++){var f=t[r],d=h[f.id];if(d){d.refs++;for(var l=0;l<d.parts.length;l++)d.parts[l](f.parts[l]);for(;l<f.parts.length;l++)d.parts.push(U(f.parts[l],e))}else{var g=[];for(l=0;l<f.parts.length;l++)g.push(U(f.parts[l],e));h[f.id]={id:f.id,refs:1,parts:g}}}}function S(t,e){for(var r=[],f={},d=0;d<t.length;d++){var l=t[d],g=e.base?l[0]+e.base:l[0],c={css:l[1],media:l[2],sourceMap:l[3]};f[g]?f[g].parts.push(c):r.push(f[g]={id:g,parts:[c]})}return r}function C(t,e){var r=p(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var f=i[i.length-1];if(t.insertAt==="top")f?f.nextSibling?r.insertBefore(e,f.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),i.push(e);else if(t.insertAt==="bottom")r.appendChild(e);else{if(typeof t.insertAt!="object"||!t.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var d=p(t.insertAt.before,r);r.insertBefore(e,d)}}function A(t){if(t.parentNode===null)return!1;t.parentNode.removeChild(t);var e=i.indexOf(t);e>=0&&i.splice(e,1)}function T(t){var e=document.createElement("style");if(t.attrs.type===void 0&&(t.attrs.type="text/css"),t.attrs.nonce===void 0){var r=function(){return u.nc}();r&&(t.attrs.nonce=r)}return _(e,t.attrs),C(t,e),e}function _(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function U(t,e){var r,f,d,l;if(e.transform&&t.css){if(!(l=typeof e.transform=="function"?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=l}if(e.singleton){var g=a++;r=o||(o=T(e)),f=M.bind(null,r,g,!1),d=M.bind(null,r,g,!0)}else t.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(r=function(c){var b=document.createElement("link");return c.attrs.type===void 0&&(c.attrs.type="text/css"),c.attrs.rel="stylesheet",_(b,c.attrs),C(c,b),b}(e),f=(function(c,b,L){var E=L.css,j=L.sourceMap,B=b.convertToAbsoluteUrls===void 0&&j;(b.convertToAbsoluteUrls||B)&&(E=w(E)),j&&(E+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(j))))+" */");var D=new Blob([E],{type:"text/css"}),R=c.href;c.href=URL.createObjectURL(D),R&&URL.revokeObjectURL(R)}).bind(null,r,e),d=function(){A(r),r.href&&URL.revokeObjectURL(r.href)}):(r=T(e),f=(function(c,b){var L=b.css,E=b.media;if(E&&c.setAttribute("media",E),c.styleSheet)c.styleSheet.cssText=L;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(L))}}).bind(null,r),d=function(){A(r)});return f(t),function(c){if(c){if(c.css===t.css&&c.media===t.media&&c.sourceMap===t.sourceMap)return;f(t=c)}else d()}}v.exports=function(t,e){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs=typeof e.attrs=="object"?e.attrs:{},e.singleton||typeof e.singleton=="boolean"||(e.singleton=y()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=S(t,e);return x(r,e),function(f){for(var d=[],l=0;l<r.length;l++){var g=r[l];(c=h[g.id]).refs--,d.push(c)}for(f&&x(S(f,e),e),l=0;l<d.length;l++){var c;if((c=d[l]).refs===0){for(var b=0;b<c.parts.length;b++)c.parts[b]();delete h[c.id]}}}};var O,I=(O=[],function(t,e){return O[t]=e,O.filter(Boolean).join(`
`)});function M(t,e,r,f){var d=r?"":f.css;if(t.styleSheet)t.styleSheet.cssText=I(e,d);else{var l=document.createTextNode(d),g=t.childNodes;g[e]&&t.removeChild(g[e]),g.length?t.insertBefore(l,g[e]):t.appendChild(l)}}},function(v,m){v.exports=function(u){var n=typeof window<"u"&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!u||typeof u!="string")return u;var s=n.protocol+"//"+n.host,h=s+n.pathname.replace(/\/[^\/]*$/,"/");return u.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(y,p){var o,a=p.trim().replace(/^"(.*)"$/,function(i,w){return w}).replace(/^'(.*)'$/,function(i,w){return w});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?y:(o=a.indexOf("//")===0?a:a.indexOf("/")===0?s+a:h+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(v,m,u){u.r(m);function n(p){return function(o){if(Array.isArray(o)){for(var a=0,i=new Array(o.length);a<o.length;a++)i[a]=o[a];return i}}(p)||function(o){if(Symbol.iterator in Object(o)||Object.prototype.toString.call(o)==="[object Arguments]")return Array.from(o)}(p)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(p,o){for(var a=0;a<o.length;a++){var i=o[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(p,i.key,i)}}function h(p,o,a){return o&&s(p.prototype,o),a&&s(p,a),p}u.d(m,"default",function(){return y}),u(0).toString();var y=function(){function p(o){var a=o.data,i=o.config,w=o.api,x=o.readOnly;(function(S,C){if(!(S instanceof C))throw new TypeError("Cannot call a class as a function")})(this,p),this.api=w,this.readOnly=x,this.titlePlaceholder=i.titlePlaceholder||p.DEFAULT_TITLE_PLACEHOLDER,this.messagePlaceholder=i.messagePlaceholder||p.DEFAULT_MESSAGE_PLACEHOLDER,this.data={title:a.title||"",message:a.message||""}}return h(p,[{key:"CSS",get:function(){return{baseClass:this.api.styles.block,wrapper:"cdx-warning",title:"cdx-warning__title",input:this.api.styles.input,message:"cdx-warning__message"}}}],[{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>',title:"Warning"}}},{key:"enableLineBreaks",get:function(){return!0}},{key:"DEFAULT_TITLE_PLACEHOLDER",get:function(){return"Title"}},{key:"DEFAULT_MESSAGE_PLACEHOLDER",get:function(){return"Message"}}]),h(p,[{key:"render",value:function(){var o=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),a=this._make("div",[this.CSS.input,this.CSS.title],{contentEditable:!this.readOnly,innerHTML:this.data.title}),i=this._make("div",[this.CSS.input,this.CSS.message],{contentEditable:!this.readOnly,innerHTML:this.data.message});return a.dataset.placeholder=this.titlePlaceholder,i.dataset.placeholder=this.messagePlaceholder,o.appendChild(a),o.appendChild(i),o}},{key:"save",value:function(o){var a=o.querySelector(".".concat(this.CSS.title)),i=o.querySelector(".".concat(this.CSS.message));return Object.assign(this.data,{title:a.innerHTML,message:i.innerHTML})}},{key:"_make",value:function(o){var a,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},x=document.createElement(o);Array.isArray(i)?(a=x.classList).add.apply(a,n(i)):i&&x.classList.add(i);for(var S in w)x[S]=w[S];return x}}],[{key:"sanitize",get:function(){return{title:{},message:{}}}}]),p}()}]).default})})(P);var N=P.exports;const G=H(N);export{G as W,q as c,H as g};
