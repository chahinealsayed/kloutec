import{g as P}from"./m0006e5d5f2f1d6ce.js";var I={exports:{}};(function(_,F){(function(b,y){_.exports=y()})(window,function(){return function(b){var y={};function i(e){if(y[e])return y[e].exports;var o=y[e]={i:e,l:!1,exports:{}};return b[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=b,i.c=y,i.d=function(e,o,p){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:p})},i.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o||4&o&&typeof e=="object"&&e&&e.__esModule)return e;var p=Object.create(null);if(i.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:e}),2&o&&typeof e!="string")for(var d in e)i.d(p,d,(function(f){return e[f]}).bind(null,d));return p},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="/",i(i.s=5)}([function(b,y,i){var e=i(1);typeof e=="string"&&(e=[[b.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(3)(e,o),e.locals&&(b.exports=e.locals)},function(b,y,i){(b.exports=i(2)(!1)).push([b.i,`.ce-delimiter {
    line-height: 1.6em;
    width: 100%;
    text-align: center;
}

.ce-delimiter:before {
    display: inline-block;
    content: "***";
    font-size: 30px;
    line-height: 65px;
    height: 30px;
    letter-spacing: 0.2em;
}`,""])},function(b,y){b.exports=function(i){var e=[];return e.toString=function(){return this.map(function(o){var p=function(d,f){var h=d[1]||"",u=d[3];if(!u)return h;if(f&&typeof btoa=="function"){var g=(j=u,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(j))))+" */"),w=u.sources.map(function(k){return"/*# sourceURL="+u.sourceRoot+k+" */"});return[h].concat(w).concat([g]).join(`
`)}var j;return[h].join(`
`)}(o,i);return o[2]?"@media "+o[2]+"{"+p+"}":p}).join("")},e.i=function(o,p){typeof o=="string"&&(o=[[null,o,""]]);for(var d={},f=0;f<this.length;f++){var h=this[f][0];typeof h=="number"&&(d[h]=!0)}for(f=0;f<o.length;f++){var u=o[f];typeof u[0]=="number"&&d[u[0]]||(p&&!u[2]?u[2]=p:p&&(u[2]="("+u[2]+") and ("+p+")"),e.push(u))}},e}},function(b,y,i){var e,o,p={},d=(e=function(){return window&&document&&document.all&&!window.atob},function(){return o===void 0&&(o=e.apply(this,arguments)),o}),f=function(n){var t={};return function(r){if(typeof r=="function")return r();if(t[r]===void 0){var s=(function(l){return document.querySelector(l)}).call(this,r);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch{s=null}t[r]=s}return t[r]}}(),h=null,u=0,g=[],w=i(4);function j(n,t){for(var r=0;r<n.length;r++){var s=n[r],l=p[s.id];if(l){l.refs++;for(var c=0;c<l.parts.length;c++)l.parts[c](s.parts[c]);for(;c<s.parts.length;c++)l.parts.push(M(s.parts[c],t))}else{var v=[];for(c=0;c<s.parts.length;c++)v.push(M(s.parts[c],t));p[s.id]={id:s.id,refs:1,parts:v}}}}function k(n,t){for(var r=[],s={},l=0;l<n.length;l++){var c=n[l],v=t.base?c[0]+t.base:c[0],a={css:c[1],media:c[2],sourceMap:c[3]};s[v]?s[v].parts.push(a):r.push(s[v]={id:v,parts:[a]})}return r}function C(n,t){var r=f(n.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var s=g[g.length-1];if(n.insertAt==="top")s?s.nextSibling?r.insertBefore(t,s.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else if(n.insertAt==="bottom")r.appendChild(t);else{if(typeof n.insertAt!="object"||!n.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var l=f(n.insertInto+" "+n.insertAt.before);r.insertBefore(t,l)}}function L(n){if(n.parentNode===null)return!1;n.parentNode.removeChild(n);var t=g.indexOf(n);t>=0&&g.splice(t,1)}function R(n){var t=document.createElement("style");return n.attrs.type===void 0&&(n.attrs.type="text/css"),E(t,n.attrs),C(n,t),t}function E(n,t){Object.keys(t).forEach(function(r){n.setAttribute(r,t[r])})}function M(n,t){var r,s,l,c;if(t.transform&&n.css){if(!(c=t.transform(n.css)))return function(){};n.css=c}if(t.singleton){var v=u++;r=h||(h=R(t)),s=A.bind(null,r,v,!1),l=A.bind(null,r,v,!0)}else n.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(r=function(a){var m=document.createElement("link");return a.attrs.type===void 0&&(a.attrs.type="text/css"),a.attrs.rel="stylesheet",E(m,a.attrs),C(a,m),m}(t),s=(function(a,m,S){var x=S.css,U=S.sourceMap,D=m.convertToAbsoluteUrls===void 0&&U;(m.convertToAbsoluteUrls||D)&&(x=w(x)),U&&(x+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(U))))+" */");var N=new Blob([x],{type:"text/css"}),T=a.href;a.href=URL.createObjectURL(N),T&&URL.revokeObjectURL(T)}).bind(null,r,t),l=function(){L(r),r.href&&URL.revokeObjectURL(r.href)}):(r=R(t),s=(function(a,m){var S=m.css,x=m.media;if(x&&a.setAttribute("media",x),a.styleSheet)a.styleSheet.cssText=S;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(S))}}).bind(null,r),l=function(){L(r)});return s(n),function(a){if(a){if(a.css===n.css&&a.media===n.media&&a.sourceMap===n.sourceMap)return;s(n=a)}else l()}}b.exports=function(n,t){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs=typeof t.attrs=="object"?t.attrs:{},t.singleton||typeof t.singleton=="boolean"||(t.singleton=d()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=k(n,t);return j(r,t),function(s){for(var l=[],c=0;c<r.length;c++){var v=r[c];(a=p[v.id]).refs--,l.push(a)}for(s&&j(k(s,t),t),c=0;c<l.length;c++){var a;if((a=l[c]).refs===0){for(var m=0;m<a.parts.length;m++)a.parts[m]();delete p[a.id]}}}};var O,B=(O=[],function(n,t){return O[n]=t,O.filter(Boolean).join(`
`)});function A(n,t,r,s){var l=r?"":s.css;if(n.styleSheet)n.styleSheet.cssText=B(t,l);else{var c=document.createTextNode(l),v=n.childNodes;v[t]&&n.removeChild(v[t]),v.length?n.insertBefore(c,v[t]):n.appendChild(c)}}},function(b,y){b.exports=function(i){var e=typeof window<"u"&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!i||typeof i!="string")return i;var o=e.protocol+"//"+e.host,p=o+e.pathname.replace(/\/[^\/]*$/,"/");return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(d,f){var h,u=f.trim().replace(/^"(.*)"$/,function(g,w){return w}).replace(/^'(.*)'$/,function(g,w){return w});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(u)?d:(h=u.indexOf("//")===0?u:u.indexOf("/")===0?o+u:p+u.replace(/^\.\//,""),"url("+JSON.stringify(h)+")")})}},function(b,y,i){i.r(y),i(0);function e(d,f){for(var h=0;h<f.length;h++){var u=f[h];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(d,u.key,u)}}function o(d,f,h){return f&&e(d.prototype,f),h&&e(d,h),d}/**
 * Delimiter Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */i.d(y,"default",function(){return p});var p=function(){function d(f){var h=f.data,u=(f.config,f.api);(function(g,w){if(!(g instanceof w))throw new TypeError("Cannot call a class as a function")})(this,d),this.api=u,this._CSS={block:this.api.styles.block,wrapper:"ce-delimiter"},this._data={},this._element=this.drawView(),this.data=h}return o(d,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"contentless",get:function(){return!0}}]),o(d,[{key:"drawView",value:function(){var f=document.createElement("DIV");return f.classList.add(this._CSS.wrapper,this._CSS.block),f}},{key:"render",value:function(){return this._element}},{key:"save",value:function(f){return{}}}],[{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="6" x2="10" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="14" x2="18" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',title:"Delimiter"}}}]),d}()}]).default})})(I);var $=I.exports;const V=P($);export{V as D};
