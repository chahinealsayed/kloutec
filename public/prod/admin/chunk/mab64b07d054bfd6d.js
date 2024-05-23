import{g as A}from"./m0006e5d5f2f1d6ce.js";var T={exports:{}};(function(M,z){(function(m,v){M.exports=v()})(window,function(){return function(m){var v={};function s(t){if(v[t])return v[t].exports;var a=v[t]={i:t,l:!1,exports:{}};return m[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=m,s.c=v,s.d=function(t,a,u){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:u})},s.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a||4&a&&typeof t=="object"&&t&&t.__esModule)return t;var u=Object.create(null);if(s.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:t}),2&a&&typeof t!="string")for(var o in t)s.d(u,o,(function(e){return t[e]}).bind(null,o));return u},s.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/",s(s.s=0)}([function(m,v,s){function t(o,e){for(var l=0;l<e.length;l++){var c=e[l];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(o,c.key,c)}}function a(o,e,l){return e&&t(o.prototype,e),l&&t(o,l),o}s(1).toString();var u=function(){function o(e){var l=e.data,c=e.config,p=e.api,b=e.readOnly;(function(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")})(this,o),this.api=p,this.config=c,this.readOnly=b,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph",alignment:{left:"ce-paragraph--left",center:"ce-paragraph--center",right:"ce-paragraph--right",justify:"ce-paragraph--justify"}},this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive},this.settings=[{name:"left",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 23h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 45h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>'},{name:"center",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 23c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 45c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>'},{name:"right",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 19h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 41h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/></svg>'},{name:"justify",icon:'<svg viewBox="0 0 64 64" width="20" height="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.867 19 L 10.914 19 C 9.26 19 7.918 19.896 7.918 21 C 7.918 22.104 9.26 23 10.914 23 L 52.867 23 C 54.522 23 55.863 22.104 55.863 21 C 55.863 19.896 54.522 19 52.867 19 Z" style=""></path><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.779 41 L 11.113 41 C 9.469 41 8.136 41.896 8.136 43 C 8.136 44.104 9.469 45 11.113 45 L 52.779 45 C 54.421 45 55.754 44.104 55.754 43 C 55.754 41.896 54.421 41 52.779 41 Z" style=""></path></svg>'}],this.onKeyUp=this.onKeyUp.bind(this),this._placeholder=c.placeholder?c.placeholder:o.DEFAULT_PLACEHOLDER,this._data={text:l.text||"",alignment:l.alignment||c.defaultAlignment||o.DEFAULT_ALIGNMENT},this._element=this.drawView(),this.data=l,this._preserveBlank=c.preserveBlank!==void 0&&c.preserveBlank}return a(o,null,[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}},{key:"ALIGNMENTS",get:function(){return{left:"left",center:"center",right:"right",justify:"justify"}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"DEFAULT_ALIGNMENT",get:function(){return o.ALIGNMENTS.left}}]),a(o,[{key:"onKeyUp",value:function(e){e.code!=="Backspace"&&e.code!=="Delete"||this._element.textContent===""&&(this._element.innerHTML="")}},{key:"drawView",value:function(){var e=document.createElement("DIV");return e.classList.add(this._CSS.wrapper,this._CSS.block,this._CSS.alignment[this.data.alignment]),e.contentEditable=!this.readOnly,e.dataset.placeholder=this.api.i18n.t(this._placeholder),e.innerHTML=this.data.text,e.addEventListener("keyup",this.onKeyUp),e}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(e){var l={text:this.data.text+=e.text,alignment:this.data.alignment};this._element.innerHTML=this.data.text,this.data=l}},{key:"validate",value:function(e){return!(e.text.trim()===""&&!this._preserveBlank)}},{key:"save",value:function(e){return Object.assign(this.data,{text:e.innerHTML})}},{key:"onPaste",value:function(e){var l={text:e.detail.data.innerHTML,alignment:this.config.defaultAlignment||o.DEFAULT_ALIGNMENT};this.data=l}},{key:"renderSettings",value:function(){var e=this,l=document.createElement("div");return this.settings.map(function(c){var p=document.createElement("div");return p.classList.add("cdx-settings-button"),p.innerHTML=c.icon,p.classList.toggle(e.CSS.settingsButtonActive,c.name===e.data.alignment),l.appendChild(p),p}).forEach(function(c,p,b){c.addEventListener("click",function(){e._toggleTune(e.settings[p].name),b.forEach(function(y,w){var x=e.settings[w].name;y.classList.toggle(e.CSS.settingsButtonActive,x===e.data.alignment),e._element.classList.toggle(e._CSS.alignment[x],x===e.data.alignment)})})}),l}},{key:"_toggleTune",value:function(e){this.data.alignment=e}},{key:"data",get:function(){return this._data},set:function(e){this._data={text:e.text||"",alignment:e.alignment||this.config.defaultAlignment||o.DEFAULT_ALIGNMENT},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0},alignment:{}}}},{key:"pasteConfig",get:function(){return{tags:["P"]}}},{key:"toolbox",get:function(){return{icon:s(5).default,title:"Text"}}}]),o}();m.exports=u},function(m,v,s){var t=s(2),a=s(3);typeof(a=a.__esModule?a.default:a)=="string"&&(a=[[m.i,a,""]]);var u={insert:"head",singleton:!1};t(a,u),m.exports=a.locals||{}},function(m,v,s){var t,a=function(){return t===void 0&&(t=!!(window&&document&&document.all&&!window.atob)),t},u=function(){var n={};return function(r){if(n[r]===void 0){var i=document.querySelector(r);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch{i=null}n[r]=i}return n[r]}}(),o=[];function e(n){for(var r=-1,i=0;i<o.length;i++)if(o[i].identifier===n){r=i;break}return r}function l(n,r){for(var i={},h=[],d=0;d<n.length;d++){var g=n[d],f=r.base?g[0]+r.base:g[0],k=i[f]||0,L="".concat(f," ").concat(k);i[f]=k+1;var _=e(L),E={css:g[1],media:g[2],sourceMap:g[3]};_!==-1?(o[_].references++,o[_].updater(E)):o.push({identifier:L,updater:S(E,r),references:1}),h.push(L)}return h}function c(n){var r=document.createElement("style"),i=n.attributes||{};if(i.nonce===void 0){var h=s.nc;h&&(i.nonce=h)}if(Object.keys(i).forEach(function(g){r.setAttribute(g,i[g])}),typeof n.insert=="function")n.insert(r);else{var d=u(n.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(r)}return r}var p,b=(p=[],function(n,r){return p[n]=r,p.filter(Boolean).join(`
`)});function y(n,r,i,h){var d=i?"":h.media?"@media ".concat(h.media," {").concat(h.css,"}"):h.css;if(n.styleSheet)n.styleSheet.cssText=b(r,d);else{var g=document.createTextNode(d),f=n.childNodes;f[r]&&n.removeChild(f[r]),f.length?n.insertBefore(g,f[r]):n.appendChild(g)}}function w(n,r,i){var h=i.css,d=i.media,g=i.sourceMap;if(d?n.setAttribute("media",d):n.removeAttribute("media"),g&&typeof btoa<"u"&&(h+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(g))))," */")),n.styleSheet)n.styleSheet.cssText=h;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(h))}}var x=null,C=0;function S(n,r){var i,h,d;if(r.singleton){var g=C++;i=x||(x=c(r)),h=y.bind(null,i,g,!1),d=y.bind(null,i,g,!0)}else i=c(r),h=w.bind(null,i,r),d=function(){(function(f){if(f.parentNode===null)return!1;f.parentNode.removeChild(f)})(i)};return h(n),function(f){if(f){if(f.css===n.css&&f.media===n.media&&f.sourceMap===n.sourceMap)return;h(n=f)}else d()}}m.exports=function(n,r){(r=r||{}).singleton||typeof r.singleton=="boolean"||(r.singleton=a());var i=l(n=n||[],r);return function(h){if(h=h||[],Object.prototype.toString.call(h)==="[object Array]"){for(var d=0;d<i.length;d++){var g=e(i[d]);o[g].references--}for(var f=l(h,r),k=0;k<i.length;k++){var L=e(i[k]);o[L].references===0&&(o[L].updater(),o.splice(L,1))}i=f}}}},function(m,v,s){(v=s(4)(!1)).push([m.i,`.ce-paragraph {
    line-height: 1.6em;
    outline: none;
}
.ce-paragraph--right {
    text-align: right;
}
.ce-paragraph--center {
    text-align: center;
}
.ce-paragraph--left {
    text-align: left;
}

.ce-paragraph--justify {
    text-align: justify;
}

.ce-paragraph[data-placeholder]:empty::before{
  content: attr(data-placeholder);
  color: #707684;
  font-weight: normal;
  opacity: 0;
}

/** Show placeholder at the first paragraph if Editor is empty */
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {
  opacity: 1;
}

.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {
  opacity: 0;
}

.ce-paragraph p:first-of-type{
    margin-top: 0;
}

.ce-paragraph p:last-of-type{
    margin-bottom: 0;
}


.svg-icon {
    width: 1em;
    height: 1em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
    fill: #4691f6;
}

.svg-icon circle {
    stroke: #4691f6;
    stroke-width: 1;
}`,""]),m.exports=v},function(m,v,s){m.exports=function(t){var a=[];return a.toString=function(){return this.map(function(u){var o=function(e,l){var c=e[1]||"",p=e[3];if(!p)return c;if(l&&typeof btoa=="function"){var b=(w=p,x=btoa(unescape(encodeURIComponent(JSON.stringify(w)))),C="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(x),"/*# ".concat(C," */")),y=p.sources.map(function(S){return"/*# sourceURL=".concat(p.sourceRoot||"").concat(S," */")});return[c].concat(y).concat([b]).join(`
`)}var w,x,C;return[c].join(`
`)}(u,t);return u[2]?"@media ".concat(u[2]," {").concat(o,"}"):o}).join("")},a.i=function(u,o,e){typeof u=="string"&&(u=[[null,u,""]]);var l={};if(e)for(var c=0;c<this.length;c++){var p=this[c][0];p!=null&&(l[p]=!0)}for(var b=0;b<u.length;b++){var y=[].concat(u[b]);e&&l[y[0]]||(o&&(y[2]?y[2]="".concat(o," and ").concat(y[2]):y[2]=o),a.push(y))}},a}},function(m,v,s){s.r(v),v.default=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">
  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>
</svg>
`}])})})(T);var j=T.exports;const N=A(j);export{N as P};
