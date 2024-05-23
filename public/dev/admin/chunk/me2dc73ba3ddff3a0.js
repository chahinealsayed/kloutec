import{g as O}from"./m0006e5d5f2f1d6ce.js";var E={exports:{}};(function(z,N){(function(w,x){z.exports=x()})(window,function(){return function(w){var x={};function l(r){if(x[r])return x[r].exports;var s=x[r]={i:r,l:!1,exports:{}};return w[r].call(s.exports,s,s.exports,l),s.l=!0,s.exports}return l.m=w,l.c=x,l.d=function(r,s,m){l.o(r,s)||Object.defineProperty(r,s,{enumerable:!0,get:m})},l.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},l.t=function(r,s){if(1&s&&(r=l(r)),8&s||4&s&&typeof r=="object"&&r&&r.__esModule)return r;var m=Object.create(null);if(l.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:r}),2&s&&typeof r!="string")for(var g in r)l.d(m,g,(function(d){return r[d]}).bind(null,g));return m},l.n=function(r){var s=r&&r.__esModule?function(){return r.default}:function(){return r};return l.d(s,"a",s),s},l.o=function(r,s){return Object.prototype.hasOwnProperty.call(r,s)},l.p="/",l(l.s=0)}([function(w,x,l){function r(g){return(r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(g)}function s(g,d){for(var y=0;y<d.length;y++){var u=d[y];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(g,u.key,u)}}l(1).toString();/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */var m=function(){function g(e){var a=e.data,c=e.config,p=e.api,L=e.readOnly;(function(_,C){if(!(_ instanceof C))throw new TypeError("Cannot call a class as a function")})(this,g),this.api=p,this.readOnly=L,this._CSS={block:this.api.styles.block,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"ce-header",alignment:{left:"ce-header--left",center:"ce-header--center",right:"ce-header--right",justify:"ce-header--justify"}},this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive},this.inlineToolSettings=[{name:"left",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 23h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 45h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>'},{name:"center",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 23c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 45c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>'},{name:"right",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 19h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 41h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/></svg>'},{name:"justify",icon:'<svg viewBox="0 0 64 64" width="20" height="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.867 19 L 10.914 19 C 9.26 19 7.918 19.896 7.918 21 C 7.918 22.104 9.26 23 10.914 23 L 52.867 23 C 54.522 23 55.863 22.104 55.863 21 C 55.863 19.896 54.522 19 52.867 19 Z" style=""></path><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.779 41 L 11.113 41 C 9.469 41 8.136 41.896 8.136 43 C 8.136 44.104 9.469 45 11.113 45 L 52.779 45 C 54.421 45 55.754 44.104 55.754 43 C 55.754 41.896 54.421 41 52.779 41 Z" style=""></path></svg>'}],this._settings=c,this._data=this.normalizeData(a),this.settingsButtons=[],this._element=this.getTag()}var d,y,u;return d=g,u=[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{level:!1,text:{}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{tags:["H1","H2","H3","H4","H5","H6"]}}},{key:"ALIGNMENTS",get:function(){return{left:"left",center:"center",right:"right",justify:"justify"}}},{key:"DEFAULT_ALIGNMENT",get:function(){return g.ALIGNMENTS.left}},{key:"toolbox",get:function(){return{icon:l(6).default,title:"Heading"}}}],(y=[{key:"normalizeData",value:function(e){var a={};return r(e)!=="object"&&(e={}),a.text=e.text||"",a.level=parseInt(e.level)||this.defaultLevel.number,a.alignment=e.alignment||g.DEFAULT_ALIGNMENT,a}},{key:"render",value:function(){return this._element}},{key:"_toggleTune",value:function(e){this._data.alignment=e}},{key:"renderSettings",value:function(){var e=this,a=document.createElement("DIV");return this.levels.length<=1||(this.inlineToolSettings.map(function(c){var p=document.createElement("div");return p.classList.add(e._CSS.settingsButton),p.innerHTML=c.icon,p.classList.toggle(e.CSS.settingsButtonActive,c.name===e.data.alignment),a.appendChild(p),p}).forEach(function(c,p,L){c.addEventListener("click",function(){e._toggleTune(e.inlineToolSettings[p].name),L.forEach(function(_,C){var A=e.inlineToolSettings[C].name;_.classList.toggle(e.CSS.settingsButtonActive,A===e.data.alignment),e._element.classList.toggle(e._CSS.alignment[A],A===e.data.alignment)})})}),this.levels.forEach(function(c){var p=document.createElement("SPAN");p.classList.add(e._CSS.settingsButton),e.currentLevel.number===c.number&&p.classList.add(e._CSS.settingsButtonActive),p.innerHTML=c.svg,p.dataset.level=c.number,p.addEventListener("click",function(){e.setLevel(c.number)}),a.appendChild(p),e.settingsButtons.push(p)})),a}},{key:"setLevel",value:function(e){var a=this;this.data={level:e,text:this.data.text,alignment:this.data.alignment},this.settingsButtons.forEach(function(c){c.classList.toggle(a._CSS.settingsButtonActive,parseInt(c.dataset.level)===e)})}},{key:"merge",value:function(e){var a={text:this.data.text+e.text,level:this.data.level,alignment:this.data.alignment};this.data=a}},{key:"validate",value:function(e){return e.text.trim()!==""}},{key:"save",value:function(e){return{text:e.innerHTML,level:this.currentLevel.number,alignment:this.data.alignment}}},{key:"getTag",value:function(){var e=document.createElement(this.currentLevel.tag);return e.innerHTML=this._data.text||"",e.classList.add(this._CSS.wrapper,this._CSS.alignment[this._data.alignment]),e.contentEditable=this.readOnly?"false":"true",e.dataset.placeholder=this.api.i18n.t(this._settings.placeholder||""),e}},{key:"onPaste",value:function(e){var a=e.detail.data,c=this.defaultLevel.number;switch(a.tagName){case"H1":c=1;break;case"H2":c=2;break;case"H3":c=3;break;case"H4":c=4;break;case"H5":c=5;break;case"H6":c=6}this._settings.levels&&(c=this._settings.levels.reduce(function(p,L){return Math.abs(L-c)<Math.abs(p-c)?L:p})),this.data={level:c,text:a.innerHTML,alignment:this._settings.defaultAlignment||g.DEFAULT_ALIGNMENT}}},{key:"data",get:function(){return this._data.text=this._element.innerHTML,this._data.level=this.currentLevel.number,this._data.alignment=this._data.alignment||this._settings.defaultAlignment||g.DEFAULT_ALIGNMENT,this._data},set:function(e){if(this._data=this.normalizeData(e),e.level!==void 0&&this._element.parentNode){var a=this.getTag();a.innerHTML=this._element.innerHTML,this._element.parentNode.replaceChild(a,this._element),this._element=a}e.text!==void 0&&(this._element.innerHTML=this._data.text||"")}},{key:"currentLevel",get:function(){var e=this,a=this.levels.find(function(c){return c.number===e._data.level});return a||(a=this.defaultLevel),a}},{key:"defaultLevel",get:function(){var e=this;if(this._settings.defaultLevel){var a=this.levels.find(function(c){return c.number===e._settings.defaultLevel});if(a)return a;console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels")}return this.levels[1]}},{key:"levels",get:function(){var e=this,a=[{number:1,tag:"H1",svg:'<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.14 1.494V4.98h4.62V1.494c0-.498.098-.871.293-1.12A.927.927 0 0 1 7.82 0c.322 0 .583.123.782.37.2.246.3.62.3 1.124v9.588c0 .503-.101.88-.303 1.128a.957.957 0 0 1-.779.374.921.921 0 0 1-.77-.378c-.193-.251-.29-.626-.29-1.124V6.989H2.14v4.093c0 .503-.1.88-.302 1.128a.957.957 0 0 1-.778.374.921.921 0 0 1-.772-.378C.096 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.285.374A.922.922 0 0 1 1.06 0c.321 0 .582.123.782.37.199.246.299.62.299 1.124zm11.653 9.985V5.27c-1.279.887-2.14 1.33-2.583 1.33a.802.802 0 0 1-.563-.228.703.703 0 0 1-.245-.529c0-.232.08-.402.241-.511.161-.11.446-.25.854-.424.61-.259 1.096-.532 1.462-.818a5.84 5.84 0 0 0 .97-.962c.282-.355.466-.573.552-.655.085-.082.246-.123.483-.123.267 0 .481.093.642.28.161.186.242.443.242.77v7.813c0 .914-.345 1.371-1.035 1.371-.307 0-.554-.093-.74-.28-.187-.186-.28-.461-.28-.825z"/></svg>'},{number:2,tag:"H2",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>'},{number:3,tag:"H3",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>'},{number:4,tag:"H4",svg:'<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>'},{number:5,tag:"H5",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm14.16 2.645h-3.234l-.388 2.205c.644-.344 1.239-.517 1.783-.517.436 0 .843.082 1.222.245.38.164.712.39.998.677.286.289.51.63.674 1.025.163.395.245.82.245 1.273 0 .658-.148 1.257-.443 1.797-.295.54-.72.97-1.276 1.287-.556.318-1.197.477-1.923.477-.813 0-1.472-.15-1.978-.45-.506-.3-.865-.643-1.076-1.031-.21-.388-.316-.727-.316-1.018 0-.177.073-.345.22-.504a.725.725 0 0 1 .556-.238c.381 0 .665.22.85.66.182.404.427.719.736.943.309.225.654.337 1.035.337.35 0 .656-.09.919-.272.263-.182.466-.431.61-.749.142-.318.214-.678.214-1.082 0-.436-.078-.808-.232-1.117a1.607 1.607 0 0 0-.62-.69 1.674 1.674 0 0 0-.864-.229c-.39 0-.67.048-.837.143-.168.095-.41.262-.725.5-.316.239-.576.358-.78.358a.843.843 0 0 1-.592-.242c-.173-.16-.259-.344-.259-.548 0-.022.025-.177.075-.463l.572-3.26c.063-.39.181-.675.354-.852.172-.177.454-.265.844-.265h3.595c.708 0 1.062.27 1.062.81a.711.711 0 0 1-.26.572c-.172.145-.426.218-.762.218z"/></svg>'},{number:6,tag:"H6",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zM12.53 7.058a3.093 3.093 0 0 1 1.004-.814 2.734 2.734 0 0 1 1.214-.264c.43 0 .827.08 1.19.24.365.161.684.39.957.686.274.296.485.645.635 1.048a3.6 3.6 0 0 1 .223 1.262c0 .637-.145 1.216-.437 1.736-.292.52-.699.926-1.221 1.218-.522.292-1.114.438-1.774.438-.76 0-1.416-.186-1.967-.557-.552-.37-.974-.919-1.265-1.645-.292-.726-.438-1.613-.438-2.662 0-.855.088-1.62.265-2.293.176-.674.43-1.233.76-1.676.33-.443.73-.778 1.2-1.004.47-.226 1.006-.339 1.608-.339.579 0 1.089.113 1.53.34.44.225.773.506.997.84.224.335.335.656.335.964 0 .185-.07.354-.21.505a.698.698 0 0 1-.536.227.874.874 0 0 1-.529-.18 1.039 1.039 0 0 1-.36-.498 1.42 1.42 0 0 0-.495-.655 1.3 1.3 0 0 0-.786-.247c-.24 0-.479.069-.716.207a1.863 1.863 0 0 0-.6.56c-.33.479-.525 1.333-.584 2.563zm1.832 4.213c.456 0 .834-.186 1.133-.56.298-.373.447-.862.447-1.468 0-.412-.07-.766-.21-1.062a1.584 1.584 0 0 0-.577-.678 1.47 1.47 0 0 0-.807-.234c-.28 0-.548.074-.804.224-.255.149-.461.365-.617.647a2.024 2.024 0 0 0-.234.994c0 .61.158 1.12.475 1.527.316.407.714.61 1.194.61z"/></svg>'}];return this._settings.levels?a.filter(function(c){return e._settings.levels.includes(c.number)}):a}}])&&s(d.prototype,y),u&&s(d,u),g}();w.exports=m},function(w,x,l){var r=l(2);typeof r=="string"&&(r=[[w.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};l(4)(r,s),r.locals&&(w.exports=r.locals)},function(w,x,l){(w.exports=l(3)(!1)).push([w.i,`/**\r
 * Plugin styles\r
 */\r
.ce-header {\r
  padding: 0.6em 0 3px;\r
  margin: 0;\r
  line-height: 1.25em;\r
  outline: none;\r
}\r
\r
.ce-header p,\r
.ce-header div {\r
  padding: 0 !important;\r
  margin: 0 !important;\r
}\r
\r
/**\r
 * Styles for Plugin icon in Toolbar\r
 */\r
.ce-header__icon {\r
}\r
\r
.ce-header[contentEditable="true"][data-placeholder]::before {\r
  position: absolute;\r
  content: attr(data-placeholder);\r
  color: #707684;\r
  font-weight: normal;\r
  display: none;\r
  cursor: text;\r
}\r
\r
.ce-header[contentEditable="true"][data-placeholder]:empty::before {\r
  display: block;\r
}\r
\r
.ce-header[contentEditable="true"][data-placeholder]:empty:focus::before {\r
  display: none;\r
}\r
\r
/* Alignment*/\r
.ce-header--right {\r
  text-align: right;\r
}\r
.ce-header--center {\r
  text-align: center;\r
}\r
.ce-header--left {\r
  text-align: left;\r
}\r
.ce-header--justify {\r
  text-align: justify;\r
}\r
`,""])},function(w,x){w.exports=function(l){var r=[];return r.toString=function(){return this.map(function(s){var m=function(g,d){var y=g[1]||"",u=g[3];if(!u)return y;if(d&&typeof btoa=="function"){var e=(c=u,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),a=u.sources.map(function(p){return"/*# sourceURL="+u.sourceRoot+p+" */"});return[y].concat(a).concat([e]).join(`
`)}var c;return[y].join(`
`)}(s,l);return s[2]?"@media "+s[2]+"{"+m+"}":m}).join("")},r.i=function(s,m){typeof s=="string"&&(s=[[null,s,""]]);for(var g={},d=0;d<this.length;d++){var y=this[d][0];typeof y=="number"&&(g[y]=!0)}for(d=0;d<s.length;d++){var u=s[d];typeof u[0]=="number"&&g[u[0]]||(m&&!u[2]?u[2]=m:m&&(u[2]="("+u[2]+") and ("+m+")"),r.push(u))}},r}},function(w,x,l){var r,s,m={},g=(r=function(){return window&&document&&document.all&&!window.atob},function(){return s===void 0&&(s=r.apply(this,arguments)),s}),d=function(n){return document.querySelector(n)},y=function(n){var t={};return function(i){if(typeof i=="function")return i();if(t[i]===void 0){var o=d.call(this,i);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch{o=null}t[i]=o}return t[i]}}(),u=null,e=0,a=[],c=l(5);function p(n,t){for(var i=0;i<n.length;i++){var o=n[i],f=m[o.id];if(f){f.refs++;for(var h=0;h<f.parts.length;h++)f.parts[h](o.parts[h]);for(;h<o.parts.length;h++)f.parts.push(H(o.parts[h],t))}else{var b=[];for(h=0;h<o.parts.length;h++)b.push(H(o.parts[h],t));m[o.id]={id:o.id,refs:1,parts:b}}}}function L(n,t){for(var i=[],o={},f=0;f<n.length;f++){var h=n[f],b=t.base?h[0]+t.base:h[0],v={css:h[1],media:h[2],sourceMap:h[3]};o[b]?o[b].parts.push(v):i.push(o[b]={id:b,parts:[v]})}return i}function _(n,t){var i=y(n.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=a[a.length-1];if(n.insertAt==="top")o?o.nextSibling?i.insertBefore(t,o.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),a.push(t);else if(n.insertAt==="bottom")i.appendChild(t);else{if(typeof n.insertAt!="object"||!n.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var f=y(n.insertInto+" "+n.insertAt.before);i.insertBefore(t,f)}}function C(n){if(n.parentNode===null)return!1;n.parentNode.removeChild(n);var t=a.indexOf(n);t>=0&&a.splice(t,1)}function A(n){var t=document.createElement("style");return n.attrs.type===void 0&&(n.attrs.type="text/css"),k(t,n.attrs),_(n,t),t}function k(n,t){Object.keys(t).forEach(function(i){n.setAttribute(i,t[i])})}function H(n,t){var i,o,f,h;if(t.transform&&n.css){if(!(h=t.transform(n.css)))return function(){};n.css=h}if(t.singleton){var b=e++;i=u||(u=A(t)),o=M.bind(null,i,b,!1),f=M.bind(null,i,b,!0)}else n.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(i=function(v){var S=document.createElement("link");return v.attrs.type===void 0&&(v.attrs.type="text/css"),v.attrs.rel="stylesheet",k(S,v.attrs),_(v,S),S}(t),o=V.bind(null,i,t),f=function(){C(i),i.href&&URL.revokeObjectURL(i.href)}):(i=A(t),o=B.bind(null,i),f=function(){C(i)});return o(n),function(v){if(v){if(v.css===n.css&&v.media===n.media&&v.sourceMap===n.sourceMap)return;o(n=v)}else f()}}w.exports=function(n,t){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs=typeof t.attrs=="object"?t.attrs:{},t.singleton||typeof t.singleton=="boolean"||(t.singleton=g()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=L(n,t);return p(i,t),function(o){for(var f=[],h=0;h<i.length;h++){var b=i[h];(v=m[b.id]).refs--,f.push(v)}for(o&&p(L(o,t),t),h=0;h<f.length;h++){var v;if((v=f[h]).refs===0){for(var S=0;S<v.parts.length;S++)v.parts[S]();delete m[v.id]}}}};var T,j=(T=[],function(n,t){return T[n]=t,T.filter(Boolean).join(`
`)});function M(n,t,i,o){var f=i?"":o.css;if(n.styleSheet)n.styleSheet.cssText=j(t,f);else{var h=document.createTextNode(f),b=n.childNodes;b[t]&&n.removeChild(b[t]),b.length?n.insertBefore(h,b[t]):n.appendChild(h)}}function B(n,t){var i=t.css,o=t.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}function V(n,t,i){var o=i.css,f=i.sourceMap,h=t.convertToAbsoluteUrls===void 0&&f;(t.convertToAbsoluteUrls||h)&&(o=c(o)),f&&(o+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(f))))+" */");var b=new Blob([o],{type:"text/css"}),v=n.href;n.href=URL.createObjectURL(b),v&&URL.revokeObjectURL(v)}},function(w,x){w.exports=function(l){var r=typeof window<"u"&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!l||typeof l!="string")return l;var s=r.protocol+"//"+r.host,m=s+r.pathname.replace(/\/[^\/]*$/,"/");return l.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(g,d){var y,u=d.trim().replace(/^"(.*)"$/,function(e,a){return a}).replace(/^'(.*)'$/,function(e,a){return a});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(u)?g:(y=u.indexOf("//")===0?u:u.indexOf("/")===0?s+u:m+u.replace(/^\.\//,""),"url("+JSON.stringify(y)+")")})}},function(w,x,l){l.r(x),x.default=`<svg width="10" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">\r
  <path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/>\r
</svg>\r
`}])})})(E);var U=E.exports;const R=O(U);export{R as H};
//# sourceMappingURL=me2dc73ba3ddff3a0.js.map
