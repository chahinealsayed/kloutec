import{g as M}from"./m0006e5d5f2f1d6ce.js";var B={exports:{}};(function(R,N){(function(P,T){R.exports=T()})(self,()=>(()=>{var P={424:(d,f,c)=>{(f=c(645)(!1)).push([d.id,`.picker_wrapper.popup {
  z-index: 99;
  width: 170px;
  margin: 0;
  box-shadow: 0 0 10px 1px #eaeaea;
  background: #ffffff;
}

.picker_arrow {
  display: none;
}

.layout_default .picker_slider, .layout_default .picker_selector {
  padding: 5px;
}

.colorPlugin.ce-inline-tool {
  width: 32px;
  border-radius: 3px;
}

.colorPlugin.ce-inline-tool--active svg {
  fill: #3c99ff;
}

#color-left-btn {
  height: 35px;
  width: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

#color-left-btn:hover {
  border-radius: 5px 0 0 5px;
  background: rgba(203, 203, 203, 0.49);
}

#color-text {
  padding: 0 4px;
}

#color-btn-text {
  height: 15px;
}

`,""]),d.exports=f},645:d=>{d.exports=function(f){var c=[];return c.toString=function(){return this.map(function(u){var b=function(m,C){var g,n,s,a=m[1]||"",t=m[3];if(!t)return a;if(C&&typeof btoa=="function"){var i=(g=t,n=btoa(unescape(encodeURIComponent(JSON.stringify(g)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(s," */")),e=t.sources.map(function(p){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(p," */")});return[a].concat(e).concat([i]).join(`
`)}return[a].join(`
`)}(u,f);return u[2]?"@media ".concat(u[2]," {").concat(b,"}"):b}).join("")},c.i=function(u,b,m){typeof u=="string"&&(u=[[null,u,""]]);var C={};if(m)for(var g=0;g<this.length;g++){var n=this[g][0];n!=null&&(C[n]=!0)}for(var s=0;s<u.length;s++){var a=[].concat(u[s]);m&&C[a[0]]||(b&&(a[2]?a[2]="".concat(b," and ").concat(a[2]):a[2]=b),c.push(a))}},c}},548:(d,f,c)=>{var u=c(379),b=c(424);typeof(b=b.__esModule?b.default:b)=="string"&&(b=[[d.id,b,""]]),u(b,{insert:"head",singleton:!1}),d.exports=b.locals||{}},379:(d,f,c)=>{var u,b=function(){var o={};return function(l){if(o[l]===void 0){var r=document.querySelector(l);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch{r=null}o[l]=r}return o[l]}}(),m=[];function C(o){for(var l=-1,r=0;r<m.length;r++)if(m[r].identifier===o){l=r;break}return l}function g(o,l){for(var r={},h=[],x=0;x<o.length;x++){var v=o[x],y=l.base?v[0]+l.base:v[0],E=r[y]||0,A="".concat(y," ").concat(E);r[y]=E+1;var L=C(A),S={css:v[1],media:v[2],sourceMap:v[3]};L!==-1?(m[L].references++,m[L].updater(S)):m.push({identifier:A,updater:k(S,l),references:1}),h.push(A)}return h}function n(o){var l=document.createElement("style"),r=o.attributes||{};if(r.nonce===void 0){var h=c.nc;h&&(r.nonce=h)}if(Object.keys(r).forEach(function(v){l.setAttribute(v,r[v])}),typeof o.insert=="function")o.insert(l);else{var x=b(o.insert||"head");if(!x)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");x.appendChild(l)}return l}var s,a=(s=[],function(o,l){return s[o]=l,s.filter(Boolean).join(`
`)});function t(o,l,r,h){var x=r?"":h.media?"@media ".concat(h.media," {").concat(h.css,"}"):h.css;if(o.styleSheet)o.styleSheet.cssText=a(l,x);else{var v=document.createTextNode(x),y=o.childNodes;y[l]&&o.removeChild(y[l]),y.length?o.insertBefore(v,y[l]):o.appendChild(v)}}function i(o,l,r){var h=r.css,x=r.media,v=r.sourceMap;if(x?o.setAttribute("media",x):o.removeAttribute("media"),v&&typeof btoa<"u"&&(h+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(v))))," */")),o.styleSheet)o.styleSheet.cssText=h;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(h))}}var e=null,p=0;function k(o,l){var r,h,x;if(l.singleton){var v=p++;r=e||(e=n(l)),h=t.bind(null,r,v,!1),x=t.bind(null,r,v,!0)}else r=n(l),h=i.bind(null,r,l),x=function(){(function(y){if(y.parentNode===null)return!1;y.parentNode.removeChild(y)})(r)};return h(o),function(y){if(y){if(y.css===o.css&&y.media===o.media&&y.sourceMap===o.sourceMap)return;h(o=y)}else x()}}d.exports=function(o,l){(l=l||{}).singleton||typeof l.singleton=="boolean"||(l.singleton=(u===void 0&&(u=!!(window&&document&&document.all&&!window.atob)),u));var r=g(o=o||[],l);return function(h){if(h=h||[],Object.prototype.toString.call(h)==="[object Array]"){for(var x=0;x<r.length;x++){var v=C(r[x]);m[v].references--}for(var y=g(h,l),E=0;E<r.length;E++){var A=C(r[E]);m[A].references===0&&(m[A].updater(),m.splice(A,1))}r=y}}}},452:d=>{d.exports={markerIcon:`<svg fill="#000000" height="34px" width="34px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 491.644 491.644" xml:space="preserve">
<g>
	<path d="M456.623,2.282c-42.758-20.283-141.107,96.84-223.473,264.224c-2.35,4.776-2.686,10.294-0.936,15.32
		c1.75,5.026,5.442,9.145,10.251,11.426L366.758,352.2c4.809,2.281,10.332,2.538,15.333,0.714c5.001-1.825,9.059-5.579,11.272-10.42
		C470.883,172.829,499.385,22.562,456.623,2.282z"/>
	<path d="M34.71,461.799l-17.257,16.708c-2.225,2.17-2.934,5.475-1.773,8.363c1.179,2.886,3.985,4.773,7.099,4.773h160.887
		c-1.364-5.043-0.921-10.445,1.391-15.306l7.919-16.692H40.036C38.036,459.646,36.129,460.419,34.71,461.799z"/>
	<path d="M264.766,448.864l-32.615-15.458c-1.046-0.502-2.161-0.744-3.257-0.744c-2.87,0-5.611,1.614-6.901,4.372l-22.001,46.384
		c-0.871,1.789-0.723,3.895,0.341,5.564c1.046,1.661,2.888,2.661,4.855,2.661h0.046l44.275-0.378
		c2.206-0.016,4.206-1.299,5.159-3.292l13.724-28.925c0.856-1.838,0.967-3.936,0.29-5.846
		C268.004,451.292,266.585,449.728,264.766,448.864z"/>
	<path d="M348.445,366.038l-112.572-51.392c-8.909-4.067-19.434-0.227-23.63,8.622c-2.551,5.378-3.58,11.353-2.975,17.275
		l5.2,50.909c0.703,6.882,4.983,12.884,11.261,15.792l60.031,27.797c6.688,3.097,14.548,2.179,20.343-2.375l45.983-36.137
		c4.931-3.875,7.487-10.041,6.743-16.269C358.086,374.032,354.151,368.642,348.445,366.038z"/>
</g>
</svg>`,textIcon:'<svg fill="#000000" viewBox="-6 0 512 512" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><title>text</title><path d="M365 432L328 352 172 352 135 432 64 432 227 80 272 80 436 432 365 432ZM201 288L299 288 250 183 201 288Z"></path></g></svg>'}},138:(d,f,c)=>{const u=c(442),{markerIcon:b,textIcon:m}=c(452),{getDefaultColorCache:C,handleCSSVariables:g}=c(697);c(548).toString(),d.exports=class{constructor({config:n,api:s}){this.api=s,this.config=n,this.clickedOnLeft=!1,this.pluginType=this.config.type||"text",this.parentTag=this.pluginType==="marker"?"MARK":"FONT",this.hasCustomPicker=this.config.customPicker||!1,this.color=g(C(this.config.defaultColor,this.pluginType)),this.picker=null,this.icon=null,this.button=null,this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}static get isInline(){return!0}render(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add("colorPlugin"),this.button.classList.add(this.iconClasses.base),this.button.appendChild(this.createLeftButton()),this.button.appendChild(this.createRightButton(this)),this.button}createLeftButton(){return this.icon||(this.icon=document.createElement("div"),this.icon.id="color-left-btn",this.icon.appendChild(this.createButtonIcon()),this.icon.addEventListener("click",()=>this.clickedOnLeft=!0)),this.icon}createButtonIcon(){const n=document.createElement("div");n.id="color-btn-text";const s=this.pluginType==="marker"?b:m;return n.innerHTML=this.config.icon||s,n}createRightButton(n){return this.picker||(this.picker=new u.ColorPlugin({onColorPicked:function(s){n.color=s},hasCustomPicker:this.hasCustomPicker,defaultColor:this.config.defaultColor,colorCollections:this.config.colorCollections,type:this.pluginType})),this.picker}surround(n){if(!n)return;const s=this.api.selection.findParentTag("SPAN");s&&this.unwrap(s);const a=this.api.selection.findParentTag(this.parentTag);a?this.unwrap(a):this.wrap(n),this.clickedOnLeft=!1}wrap(n){const s=n.extractContents(),a=document.createElement(this.parentTag);a.appendChild(s),n.insertNode(a),this.pluginType==="marker"?this.wrapMarker(a):this.wrapTextColor(a),this.api.selection.expandToTag(a)}wrapMarker(n){n.style.backgroundColor=this.color;const s=this.api.selection.findParentTag("FONT");s&&(n.style.color=s.style.color)}wrapTextColor(n){n.style.color=this.color}unwrap(n){this.api.selection.expandToTag(n);const s=window.getSelection(),a=s.getRangeAt(0),t=a.extractContents();this.clickedOnLeft?this.removeWrapper(n):this.updateWrapper(n),a.insertNode(t),s.removeAllRanges(),s.addRange(a)}updateWrapper(n){this.pluginType==="marker"?n.style.backgroundColor=this.color:n.style.color=this.color}removeWrapper(n){n.parentNode.removeChild(n)}checkState(){const n=this.api.selection.findParentTag("SPAN"),s=this.api.selection.findParentTag(this.parentTag);let a=n?this.handleLegacyWrapper(n,s):s;return this.button.classList.toggle(this.iconClasses.active,!!a),!!a}handleLegacyWrapper(n,s){return this.pluginType==="marker"?n:s&n}static get sanitize(){return{font:!0,span:!0,mark:!0}}clear(){this.picker=null,this.icon=null}}},442:(d,f,c)=>{c.r(f),c.d(f,{ColorPlugin:()=>s});class u extends HTMLElement{static get observedAttributes(){return["disabled","icon","loading","href","htmltype"]}constructor(){super(),this.attachShadow({mode:"open"}).innerHTML=`
        <style>
        :host{ 
            position:relative; 
            display:inline-flex; 
            padding: .25em .625em;
            box-sizing:border-box; 
            vertical-align: middle;
            line-height: 1.8;
            width: 5px;
            overflow:hidden; 
            align-items:center;
            justify-content: center;
            font-size: 14px; 
            color: var(--fontColor,#333);  
            border-radius: var(--borderRadius,.25em);
            background: var(--fontColor,#333); 
            transition:background .3s,box-shadow .3s,border-color .3s,color .3s;
        }
        :host([shape="circle"]){ 
            border-radius:50%; 
        }
        /*
        :host(:not([disabled]):active){
            z-index:1;
            transform:translateY(.1em);
        }
        */
        :host([disabled]),:host([loading]){
            pointer-events: none; 
            opacity:.6; 
        }
        :host([block]){ 
            display:flex; 
        }
        :host([disabled]:not([type])){ 
            background:rgba(0,0,0,.1); 
        }
        :host([disabled]) .btn,:host([loading]) .btn{ 
            cursor: not-allowed; 
            pointer-events: all; 
        }
        :host(:not([type="primary"]):not([type="danger"]):not([disabled]):hover),
        :host(:not([type="primary"]):not([type="danger"]):focus-within),
        :host([type="flat"][focus]){ 
            color:var(--themeColor,#42b983); 
            border-color: var(--themeColor,#42b983); 
        }
        :host(:not([type="primary"]):not([type="danger"])) .btn::after{ 
            background-image: radial-gradient(circle, var(--themeColor,#42b983) 10%, transparent 10.01%); 
        }
        :host([type="primary"]){ 
            color: #fff; 
            background:var(--themeBackground,var(--themeColor,#42b983));
        }
        :host([type="danger"]){ 
            color: #fff; 
            background:var(--themeBackground,var(--dangerColor,#ff7875));
        }
        :host([type="dashed"]){ 
            border-style:dashed 
        }
        :host([type="flat"]),:host([type="primary"]),:host([type="danger"]){ 
            border:0;
            padding: calc( .25em + 1px ) calc( .625em + 1px );
        }
        :host([type="flat"]) .btn::before{ 
            content:''; 
            position:absolute; 
            background:var(--themeColor,#42b983);
            pointer-events:none; 
            left:0; 
            right:0; 
            top:0; 
            bottom:0; 
            opacity:0; 
            transition:.3s;
        }
        :host([type="flat"]:not([disabled]):hover) .btn::before{ 
            opacity:.1 
        }
        :host(:not([disabled]):hover){ 
            z-index:1 
        }
        :host([type="flat"]:focus-within) .btn:before,
        :host([type="flat"][focus]) .btn:before{ 
            opacity:.2; 
        }
        :host(:focus-within){ 
            /*box-shadow: 0 0 10px rgba(0,0,0,0.1);*/ 
        }
        .btn{ 
            background:none; 
            outline:0; 
            border:0; 
            position: 
            absolute; 
            left:0; 
            top:0;
            width:100%;
            height:100%;
            padding:0;
            user-select: none;
            cursor: unset;
        }
        xy-loading{ 
            margin-right: 0.35em;  
        }
        ::-moz-focus-inner{
            border:0;
        }
        .btn::before{
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            left:0;
            top:0;
            transition:.2s;
            background:#fff;
            opacity:0;
        }
        :host(:not([disabled]):active) .btn::before{ 
            opacity:.2;
        }
        .btn::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            left: var(--x,0); 
            top: var(--y,0);
            pointer-events: none;
            background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
            background-repeat: no-repeat;
            background-position: 50%;
            transform: translate(-50%,-50%) scale(10);
            opacity: 0;
            transition: transform .3s, opacity .8s;
        }
        .btn:not([disabled]):active::after {
            transform: translate(-50%,-50%) scale(0);
            opacity: .3;
            transition: 0s;
        }
        xy-icon{
            margin-right: 0.35em;
            transition: none;
        }
        :host(:empty) xy-icon{
            margin: auto;
        }
        :host(:empty){
            padding: .65em;
        }
        :host([type="flat"]:empty),:host([type="primary"]:empty){ 
            padding: calc( .65em + 1px );
        }
        ::slotted(xy-icon){
            transition: none;
        }
        :host([href]){
            cursor:pointer;
        }
        </style>
        <${this.href?"a":"button"} ${this.htmltype?'type="'+this.htmltype+'"':""} ${this.download&&this.href?'download="'+this.download+'"':""} ${this.href?'href="'+this.href+'" target="'+this.target+'" rel="'+this.rel+'"':""} class="btn" id="btn"></${this.href?"a":"button"}>${!this.loading&&this.icon&&this.icon!="null"?'<xy-icon id="icon" name='+this.icon+"></xy-icon>":""}<slot></slot>
        `}focus(){this.btn.focus()}get disabled(){return this.getAttribute("disabled")!==null}get toggle(){return this.getAttribute("toggle")!==null}get htmltype(){return this.getAttribute("htmltype")}get name(){return this.getAttribute("name")}get checked(){return this.getAttribute("checked")!==null}get href(){return this.getAttribute("href")}get target(){return this.getAttribute("target")||"_blank"}get rel(){return this.getAttribute("rel")}get download(){return this.getAttribute("download")}get icon(){return this.getAttribute("icon")}get loading(){return this.getAttribute("loading")!==null}set icon(t){this.setAttribute("icon",t)}set htmltype(t){this.setAttribute("htmltype",t)}set href(t){this.setAttribute("href",t)}set disabled(t){t===null||t===!1?this.removeAttribute("disabled"):this.setAttribute("disabled","")}set checked(t){t===null||t===!1?this.removeAttribute("checked"):this.setAttribute("checked","")}set loading(t){t===null||t===!1?this.removeAttribute("loading"):this.setAttribute("loading","")}connectedCallback(){this.btn=this.shadowRoot.getElementById("btn"),this.ico=this.shadowRoot.getElementById("icon"),this.load=document.createElement("xy-loading"),this.load.style.color="inherit",this.btn.addEventListener("mousedown",function(t){if(!this.disabled){const{left:i,top:e}=this.getBoundingClientRect();this.style.setProperty("--x",t.clientX-i+"px"),this.style.setProperty("--y",t.clientY-e+"px")}}),this.addEventListener("click",function(t){this.toggle&&(this.checked=!this.checked)}),this.btn.addEventListener("keydown",t=>{t.keyCode===13&&t.stopPropagation()}),this.disabled=this.disabled,this.loading=this.loading}attributeChangedCallback(t,i,e){t=="disabled"&&this.btn&&(e!==null?(this.btn.setAttribute("disabled","disabled"),this.href&&this.btn.removeAttribute("href")):(this.btn.removeAttribute("disabled"),this.href&&(this.btn.href=this.href))),t=="loading"&&this.btn&&(e!==null?(this.shadowRoot.prepend(this.load),this.btn.setAttribute("disabled","disabled")):(this.shadowRoot.removeChild(this.load),this.btn.removeAttribute("disabled"))),t=="icon"&&this.ico&&(this.ico.name=e),t=="href"&&this.btn&&(this.disabled||(this.btn.href=e)),t=="htmltype"&&this.btn&&(this.btn.type=e)}}customElements.get("xy-button")||customElements.define("xy-button",u);class b extends HTMLElement{static get observedAttributes(){return["disabled"]}constructor(){super(),this.attachShadow({mode:"open"}).innerHTML=`
        <style>
        :host {
            display:inline-flex;
        }
        ::slotted(xy-button:not(:first-of-type):not(:last-of-type)){
            border-radius:0;
        }
        ::slotted(xy-button){
            margin:0!important;
        }
        ::slotted(xy-button:not(:first-of-type)){
            margin-left:-1px!important;
        }
        ::slotted(xy-button[type]:not([type="dashed"]):not(:first-of-type)){
            margin-left:1px!important;
        }
        ::slotted(xy-button:first-of-type){
            border-top-right-radius: 0;
            border-bottom-right-radius: 0px;
        }
        ::slotted(xy-button:last-of-type){
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        </style>
        <slot></slot>
        `}get disabled(){return this.getAttribute("disabled")!==null}set disabled(t){t===null||t===!1?this.removeAttribute("disabled"):this.setAttribute("disabled","")}connectedCallback(){}attributeChangedCallback(t,i,e){}}customElements.get("xy-button-group")||customElements.define("xy-button-group",b);class m extends HTMLElement{static get observedAttributes(){return["open","title","oktext","canceltext","loading","type"]}constructor(t){super(),this.attachShadow({mode:"open"}).innerHTML=`
        <style>
        :host{
            position:absolute;
            display:flex;
            box-shadow: 2px 2px 15px rgba(0,0,0,0.15);
            box-sizing: border-box;
            transform:scale(0);
            opacity:0.5;
            border-radius: 3px;
            z-index:10;
            transition:.3s cubic-bezier(.645, .045, .355, 1);
            transform-origin:inherit;
            background:#fff;
            visibility:hidden;
        }
        .popcon-content{
            box-sizing: border-box;
            display:flex;
            width: max-content;
            padding: 0 15px;
            flex:1;
            flex-direction:column;
        }
        .popcon-title {
            line-height: 30px;
            padding: 15px 30px 0 0;
            font-weight: 700;
            font-size: 14px;
            color: #4c5161;
            user-select: none;
            cursor: default;
        }
        .popcon-body {
            flex: 1;
            padding: 5px 0 15px 0;
        }
        .popcon-footer {
            padding: 3px 0 15px 0;
            margin-top: -3px;
            text-align: right;
            white-space: nowrap;
        }
        .btn-close{
            position:absolute;
            right:10px;
            top:10px;
            border:0;
        }
        .popcon-footer xy-button {
            font-size: .8em;
            margin-left: .8em;
        }
        .popcon-type{
            display:flex;
            width:30px;
            height:30px;
            font-size:22px;
            margin: 15px -10px 0 15px;
        }
        /*
        :host(:not([type="confirm"])) .popcon-type,
        :host(:not([type="confirm"])) .popcon-footer,
        :host(:not([type])) .popcon-title,
        :host(:not([type])) .btn-close{
            display:none;
        }
        */
        :host([type="confirm"]){
            min-width:250px;
        }
        :host([type="confirm"]) .popcon-body{
            font-size:14px;
        }
        :host(:not([type])) .popcon-content,:host(:not([type])) .popcon-body{
            padding: 0;
        }
        </style>
            ${(t||this.type)==="confirm"?'<xy-icon id="popcon-type" class="popcon-type" name="question-circle" color="var(--waringColor,#faad14)"></xy-icon>':""}
            <div class="popcon-content">
                ${(t||this.type)!==null?'<div class="popcon-title" id="title">'+this.title+'</div><xy-button class="btn-close" id="btn-close" icon="close"></xy-button>':""}
                <div class="popcon-body">
                    <slot></slot>
                </div>
                ${(t||this.type)==="confirm"?'<div class="popcon-footer"><xy-button id="btn-cancel">'+this.canceltext+'</xy-button><xy-button id="btn-submit" type="primary">'+this.oktext+"</xy-button></div>":""}
            </div>
        `}get open(){return this.getAttribute("open")!==null}get stopfocus(){return this.getAttribute("stopfocus")!==null}get title(){return this.getAttribute("title")||"popcon"}get type(){return this.getAttribute("type")}get oktext(){return this.getAttribute("oktext")||"confirm"}get canceltext(){return this.getAttribute("canceltext")||"cancel"}get loading(){return this.getAttribute("loading")!==null}set title(t){this.setAttribute("title",t)}set type(t){t===null||t===!1?this.removeAttribute("type"):this.setAttribute("type",t)}set oktext(t){this.setAttribute("oktext",t)}set canceltext(t){this.setAttribute("canceltext",t)}set open(t){t===null||t===!1?(this.removeAttribute("open"),this.parentNode.removeAttribute("open")):(this.setAttribute("open",""),this.parentNode.setAttribute("open",""),this.loading&&(this.loading=!1))}set loading(t){t===null||t===!1?this.removeAttribute("loading"):this.setAttribute("loading","")}connectedCallback(){this.remove=!1,this.type&&(this.titles=this.shadowRoot.getElementById("title"),this.btnClose=this.shadowRoot.getElementById("btn-close")),this.type=="confirm"&&(this.btnCancel=this.shadowRoot.getElementById("btn-cancel"),this.btnSubmit=this.shadowRoot.getElementById("btn-submit")),this.addEventListener("transitionend",t=>{t.propertyName==="transform"&&this.open&&(this.type=="confirm"&&this.btnSubmit.focus(),this.type=="pane"&&this.btnClose.focus(),this.dispatchEvent(new CustomEvent("open")))}),this.addEventListener("transitionend",t=>{t.propertyName!=="transform"||this.open||(this.remove&&this.parentNode.removeChild(this),this.dispatchEvent(new CustomEvent("close")))}),this.addEventListener("click",t=>{t.target.closest("[autoclose]")&&(this.open=!1,window.xyActiveElement.focus())}),this.type&&this.btnClose.addEventListener("click",()=>{this.open=!1,window.xyActiveElement.focus()}),this.type=="confirm"&&(this.btnCancel.addEventListener("click",async()=>{this.dispatchEvent(new CustomEvent("cancel")),this.open=!1,window.xyActiveElement.focus()}),this.btnSubmit.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("submit")),this.loading||(this.open=!1,window.xyActiveElement.focus())}))}attributeChangedCallback(t,i,e){t=="open"&&this.shadowRoot&&e==null&&this.stopfocus,t=="loading"&&this.shadowRoot&&(this.btnSubmit.loading=e!==null),t=="title"&&this.titles&&e!==null&&(this.titles.innerHTML=e),t=="oktext"&&this.btnSubmit&&e!==null&&(this.btnSubmit.innerHTML=e),t=="canceltext"&&this.btnCancel&&e!==null&&(this.btnCancel.innerHTML=e)}}customElements.get("xy-popcon")||customElements.define("xy-popcon",m);class C extends HTMLElement{static get observedAttributes(){return["title","oktext","canceltext","loading","type"]}constructor(){super(),this.attachShadow({mode:"open"}).innerHTML=`
        <style>
        :host {
            display:inline-block;
            position:relative;
            overflow:visible;
        }
        :host([dir="top"]) ::slotted(xy-popcon){
            bottom:100%;
            left:50%;
            transform:translate(-50%,-10px) scale(0);
            transform-origin: center bottom;
        }
        :host([dir="top"]) ::slotted(xy-popcon[open]),
        :host([dir="top"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="top"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-50%,-10px) scale(1);
        }
        :host([dir="right"]) ::slotted(xy-popcon){
            left:100%;
            top:50%;
            transform:translate(10px,-50%) scale(0);
            transform-origin: left;
        }
        :host([dir="right"]) ::slotted(xy-popcon[open]),
        :host([dir="right"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="right"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(10px,-50%) scale(1);
        }
        :host([dir="bottom"]) ::slotted(xy-popcon){
            top:100%;
            left:50%;
            transform:translate(-50%,10px) scale(0);
            transform-origin: center top;
        }
        :host([dir="bottom"]) ::slotted(xy-popcon[open]),
        :host([dir="bottom"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="bottom"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-50%,10px) scale(1);
        }
        :host([dir="left"]) ::slotted(xy-popcon){
            right:100%;
            top:50%;
            transform:translate(-10px,-50%) scale(0);
            transform-origin: right;
        }
        :host([dir="left"]) ::slotted(xy-popcon[open]),
        :host([dir="left"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="left"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-10px,-50%) scale(1);
        }
        :host([dir="lefttop"]) ::slotted(xy-popcon){
            right:100%;
            top:0;
            transform:translate(-10px) scale(0);
            transform-origin: right top;
        }
        :host([dir="lefttop"]) ::slotted(xy-popcon[open]),
        :host([dir="lefttop"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="lefttop"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-10px) scale(1);
        }
        :host([dir="leftbottom"]) ::slotted(xy-popcon){
            right:100%;
            bottom:0;
            transform:translate(-10px) scale(0);
            transform-origin: right bottom;
        }
        :host([dir="leftbottom"]) ::slotted(xy-popcon[open]),
        :host([dir="leftbottom"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="leftbottom"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-10px) scale(1);
        }
        :host([dir="topleft"]) ::slotted(xy-popcon){
            bottom:100%;
            left:0;
            transform:translate(0,-10px) scale(0);
            transform-origin: left bottom;
        }
        :host([dir="topleft"]) ::slotted(xy-popcon[open]),
        :host([dir="topleft"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="topleft"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,-10px) scale(1);
        }
        :host([dir="topright"]) ::slotted(xy-popcon){
            bottom:100%;
            right:0;
            transform:translate(0,-10px) scale(0);
            transform-origin: right bottom;
        }
        :host([dir="topright"]) ::slotted(xy-popcon[open]),
        :host([dir="topright"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="topright"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,-10px) scale(1);
        }
        :host([dir="righttop"]) ::slotted(xy-popcon){
            left:100%;
            top:0;
            transform:translate(10px) scale(0);
            transform-origin: left top;
        }
        :host([dir="righttop"]) ::slotted(xy-popcon[open]),
        :host([dir="righttop"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="righttop"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(10px) scale(1);
        }
        :host([dir="rightbottom"]) ::slotted(xy-popcon){
            left:100%;
            bottom:0;
            transform:translate(10px) scale(0);
            transform-origin: left bottom;
        }
        :host([dir="rightbottom"]) ::slotted(xy-popcon[open]),
        :host([dir="rightbottom"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="rightbottom"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(10px) scale(1);
        }
        :host([dir="bottomleft"]) ::slotted(xy-popcon),
        :host(:not([dir])) ::slotted(xy-popcon){
            left:0;
            top:100%;
            transform:translate(0,10px) scale(0);
            transform-origin: left top;
        }
        :host(:not([dir])) ::slotted(xy-popcon[open]),
        :host(:not([dir])[trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host(:not([dir])[trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon),
        :host([dir="bottomleft"]) ::slotted(xy-popcon[open]),
        :host([dir="bottomleft"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="bottomleft"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,10px) scale(1);
        }
        :host([dir="bottomright"]) ::slotted(xy-popcon){
            right:0;
            top:100%;
            transform:translate(0,10px) scale(0);
            transform-origin: right top;
        }
        :host([dir="bottomright"]) ::slotted(xy-popcon[open]),
        :host([dir="bottomright"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="bottomright"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,10px) scale(1);
        }
        :host([trigger="contextmenu"]) ::slotted(xy-popcon){
            right:auto;
            bottom:auto;
            left:var(--x,0);
            top:var(--y,100%);
            transform-origin: left top;
            transform:translate(5px,5px) scale(0);
            transition: .15s;
        }
        :host([trigger="contextmenu"]) ::slotted(xy-popcon[open]){
            transform:translate(5px,5px) scale(1);
        }
        :host ::slotted(xy-popcon[open]),
        :host([trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            opacity:1;
            visibility:visible;
        }
        slot{
            border-radius: inherit;
        }
        </style>
        <slot></slot>
        `}get title(){return this.getAttribute("title")||"popcon"}get trigger(){return this.getAttribute("trigger")}get disabled(){return this.getAttribute("disabled")!==null}get type(){return this.getAttribute("type")}get accomplish(){return this.getAttribute("accomplish")!==null}get content(){return this.getAttribute("content")}get oktext(){return this.getAttribute("oktext")}get canceltext(){return this.getAttribute("canceltext")}get dir(){return this.getAttribute("dir")}get loading(){return this.getAttribute("loading")!==null}set dir(t){this.setAttribute("dir",t)}set title(t){this.setAttribute("title",t)}set type(t){this.setAttribute("type",t)}set oktext(t){this.setAttribute("oktext",t)}set canceltext(t){this.setAttribute("canceltext",t)}set loading(t){t===null||t===!1?this.removeAttribute("loading"):this.setAttribute("loading","")}set disabled(t){t===null||t===!1?this.removeAttribute("disabled"):this.setAttribute("disabled","")}show(t){if(this.popcon=this.querySelector("xy-popcon"),this.disabled)(this.popcon||this).dispatchEvent(new CustomEvent("submit"));else if(this.popcon||(this.popcon=new m(this.type),this.popcon.type=this.type,this.appendChild(this.popcon),this.popcon.title=this.title||"popover",this.popcon.innerHTML=this.content||"",this.type=="confirm"&&(this.popcon.oktext=this.oktext||"confirm",this.popcon.canceltext=this.canceltext||"cancel",this.popcon.onsubmit=()=>this.dispatchEvent(new CustomEvent("submit")),this.popcon.oncancel=()=>this.dispatchEvent(new CustomEvent("cancel")))),this.trigger==="contextmenu"){const{x:i,y:e}=this.getBoundingClientRect();this.popcon.style.setProperty("--x",t.clientX-i+"px"),this.popcon.style.setProperty("--y",t.clientY-e+"px"),this.popcon.open=!0}else(t.path||t.composedPath&&t.composedPath()).includes(this.popcon)||(window.xyActiveElement=document.activeElement,this.accomplish?this.popcon.open=!0:this.popcon.open=!this.popcon.open);return this.popcon}connectedCallback(){this.popcon=this.querySelector("xy-popcon"),this.trigger&&this.trigger!=="click"||this.addEventListener("click",this.show),this.trigger==="contextmenu"&&this.addEventListener("contextmenu",t=>{t.preventDefault(),(t.path||t.composedPath&&t.composedPath()).includes(this.popcon)||this.show(t)}),document.addEventListener("mousedown",t=>{const i=t.path||t.composedPath&&t.composedPath();(this.popcon&&!i.includes(this.popcon)&&!this.popcon.loading&&!i.includes(this.children[0])||this.trigger==="contextmenu"&&!i.includes(this.popcon)&&t.which=="1")&&(this.popcon.open=!1)})}attributeChangedCallback(t,i,e){t=="loading"&&this.popcon&&(this.popcon.loading=e!==null),t=="title"&&this.popcon&&e!==null&&(this.popcon.title=e),t=="oktext"&&this.popcon&&e!==null&&(this.popcon.oktext=e),t=="canceltext"&&this.popcon&&e!==null&&(this.popcon.canceltext=e)}}customElements.get("xy-popover")||customElements.define("xy-popover",C);var g=c(697);const n=["#ff1300","#EC7878","#9C27B0","#673AB7","#3F51B5","#0070FF","#03A9F4","#00BCD4","#4CAF50","#8BC34A","#CDDC39","#FFE500","#FFBF00","#FF9800","#795548","#9E9E9E","#5A5A5A","#FFF"];class s extends HTMLElement{static get observedAttributes(){return["disabled","dir"]}constructor(t){super();const i=this.attachShadow({mode:"open"});this.colorCollections=t.colorCollections||n,this.onColorPicked=t.onColorPicked,this.defaulColor=(0,g.handleCSSVariables)(t.defaultColor||this.colorCollections[0]),this.pluginType=t.type,this.hasCustomPicker=t.hasCustomPicker,this.customColor=(0,g.getCustomColorCache)(this.pluginType),i.innerHTML=`
        <style>
        :host{
            display:inline-block;
            width:15px;
            font-size:14px;
            border: none;
        }
        :host([block]){
            display:block;
        }
        :host([disabled]){
            pointer-events:none;
        }
        
        :host(:focus-within) xy-popover,:host(:hover) xy-popover{ 
            z-index: 2;
        }
        input[type="color"]{
            -webkit-appearance: none;
            outline: none;
            border: none;
        }
        xy-popover{
            width: 12px;
            height:35px;
            padding-right: 1px;
        }
        xy-popover:hover {
            border-radius: 0 5px 5px 0;
            background: rgba(203, 203, 203, 0.49);
        }
        .color-btn {
            border: 1px solid #cab9b9;
            margin: 18px 3px 2px 3px;
            width: 7px;
            height: 7px;
            opacity: 0.9;
            padding: 1px 0 1px 0;
            color: var(--themeColor, #42b983);
            background: var(--themeColor, #42b983);
            font-weight: bolder;
            border-radius: 2px;
        }
        .color-btn:hover {
            opacity: 1;
            z-index: auto;
        }
        xy-popover{
            display:block;
        }
        xy-popcon{
            position: fixed;
            min-width:100%;
        }
        #custom-picker {
            position: relative;
            top: -1px;
            background-color: rgb(250, 250, 250);
            border-color: rgb(255 118 21) rgb(245 80 80 / 74%) #89c1c9 #95d5b6;
            border-width: 3px;
            border-radius: 8px;
            height: 18px;
        }
        .pop-footer{
            display:flex;
            justify-content:flex-end;
            padding:0 .8em .8em;
        }
        .pop-footer xy-button{
            font-size: .8em;
            margin-left: .8em;
        }
        .color-btn::before{
            content:'';
            position:absolute;
            left:5px;
            top:5px;
            right:5px;
            bottom:5px;
            z-index:-1;
            background: linear-gradient(45deg, #ddd 25%,transparent 0,transparent 75%,#ddd 0 ), linear-gradient(45deg, #ddd 25%, transparent 0, transparent 75%, #ddd 0);
            background-position: 0 0,5px 5px;
            background-size: 10px 10px;
        }
        .color-sign {
           max-width: 220px;
           padding: 10px;
           display:grid;
           cursor: default;
           grid-template-columns: repeat(auto-fit, minmax(15px, 1fr));
           grid-gap: 10px;     
        }
        .color-sign>button {
            position: relative;
            width: 16px;
            height: 16px;
            border-radius: 6px;
            border: 1px solid #b8b9b49e;
            outline: 0;
            opacity: 0.9;
        }
        .color-sign>button:hover {
            cursor: pointer;
            opacity: 1;
        }
        .color-section {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .color-fire-btn {
            font-size: 17px;
            font-weight: bold;
            height: 28px;
            padding-top: 8px;
            padding-right: 1px;
            margin-left: 3px;
            padding-left: 3px;
            border-radius: 5px 0 0 5px;
        }
        .color-fire-btn:hover {
            font-size: 17px;
            font-weight: bold;
            background: rgba(203, 203, 203, 0.49);
            border-radius: 5px 0 0 5px;
        }
        </style>
        <section class="color-section">
            <xy-popover id="popover" ${this.dir?"dir='"+this.dir+"'":""}>
                <xy-button class="color-btn" id="color-btn" ${this.disabled?"disabled":""}>_</xy-button>
                <xy-popcon id="popcon">
                    <div class="color-sign" id="colors">
                        ${this.hasCustomPicker?'<button id="custom-picker" class="rainbow-mask"/>':""}
                        ${this.colorCollections.map(e=>'<button class="color-cube" style="background-color:'+e+'" data-color='+e+"></button>").join("")}
                    </div>
                </xy-popcon>
            </xy-popover>
        </section>`}focus(){this.colorBtn.focus()}connectedCallback(){this.popoverEle=this.shadowRoot.getElementById("popover"),this.popcon=this.shadowRoot.getElementById("popcon"),this.colorBtn=this.shadowRoot.getElementById("color-btn"),this.colors=this.shadowRoot.getElementById("colors"),this.colors.addEventListener("click",t=>{const i=t.target.closest("button");i&&i.id!=="custom-picker"&&(this.nativeclick=!0,this.value=(0,g.handleCSSVariables)(i.dataset.color),this.onColorPicked(this.value))}),this.popoverEle.addEventListener("click",()=>this.closeConverter()),this.hasCustomPicker&&this.setupCustomPicker(),this.value=this.defaultvalue}closeConverter(){if(document.getElementsByClassName(g.CONVERTER_PANEL)[0]){const t=document.getElementsByClassName(g.CONVERTER_BTN)[0];t==null||t.click()}}disconnectedCallback(){this.pickerInput&&document.body.removeChild(this.pickerInput)}setupCustomPicker(){let t=!1;this.customPicker=this.shadowRoot.getElementById("custom-picker");const i=this.customPicker;i.style.backgroundColor=this.customColor,this.customPicker.addEventListener("click",e=>{if(t)return void(t=!1);this.pickerInput&&document.body.removeChild(this.pickerInput),this.pickerInput=document.createElement("input");const p=this.pickerInput,k=this.popcon.getBoundingClientRect();p.setAttribute("type","color"),p.value=this.customColor,p.style.position="fixed",p.style.left=`${k.x+3}px`,p.style.top=`${k.y+10}px`,p.style.pointerEvents="none",p.style.zIndex="999",p.style.opacity="0",p.addEventListener("input",(0,g.throttle)(o=>{this.nativeclick=!0,this.value=(0,g.handleCSSVariables)(o.target.value),this.onColorPicked(this.value),(0,g.setCustomColorCache)(this.value,this.pluginType),i.style.backgroundColor=this.value,t=!0,i.click()},30)),document.body.appendChild(p),setTimeout(()=>{p.focus(),p.click()},0)})}get defaultvalue(){return this.defaulColor}get value(){return this.$value}get type(){return this.getAttribute("type")}get disabled(){return this.getAttribute("disabled")!==null}get dir(){return this.getAttribute("dir")}set dir(t){this.setAttribute("dir",t)}set disabled(t){t===null||t===!1?this.removeAttribute("disabled"):this.setAttribute("disabled","")}set defaultvalue(t){this.setAttribute("defaultvalue",t)}set value(t){t&&(this.$value=t,this.colorBtn.style.setProperty("--themeColor",this.nativeclick?(0,g.setDefaultColorCache)(t,this.pluginType):(0,g.getDefaultColorCache)(t,this.pluginType)),this.nativeclick?(this.nativeclick=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))):this.colorPane?this.colorPane.value=this.value:this.defaultvalue=this.value)}attributeChangedCallback(t,i,e){t=="disabled"&&this.colorBtn&&(e!=null?this.colorBtn.setAttribute("disabled","disabled"):this.colorBtn.removeAttribute("disabled")),t=="dir"&&this.popoverEle&&e!=null&&(this.popoverEle.dir=e)}}customElements.get("xy-color-picker")||customElements.define("xy-color-picker",s)},697:(d,f,c)=>{c.r(f),c.d(f,{CONVERTER_BTN:()=>a,CONVERTER_PANEL:()=>t,getCustomColorCache:()=>s,getDefaultColorCache:()=>g,handleCSSVariables:()=>b,setCustomColorCache:()=>n,setDefaultColorCache:()=>C,throttle:()=>m});const u="editor-js-text-color-cache";function b(i){if(function(e){return(typeof(p=e)=="string"||p instanceof String)&&e.includes("--");var p}(i)){const e=function(p){const k=/\((.*?)\)/.exec(p);if(k)return k[1]}(i);return function(p){return window.getComputedStyle(document.documentElement).getPropertyValue(p)}(e)}return i}function m(i,e){let p;return(...k)=>{p||(p=setTimeout(()=>{i(...k),p=null},e))}}function C(i,e){return sessionStorage.setItem(`${u}-${e}`,JSON.stringify(i)),i}function g(i,e){const p=sessionStorage.getItem(`${u}-${e}`);return p?JSON.parse(p):i}function n(i,e){sessionStorage.setItem(`${u}-${e}-custom`,JSON.stringify(i))}function s(i){const e=sessionStorage.getItem(`${u}-${i}-custom`);return e?JSON.parse(e):null}const a="ce-inline-toolbar__dropdown",t="ce-conversion-toolbar--showed"}},T={};function w(d){var f=T[d];if(f!==void 0)return f.exports;var c=T[d]={id:d,exports:{}};return P[d](c,c.exports,w),c.exports}return w.d=(d,f)=>{for(var c in f)w.o(f,c)&&!w.o(d,c)&&Object.defineProperty(d,c,{enumerable:!0,get:f[c]})},w.o=(d,f)=>Object.prototype.hasOwnProperty.call(d,f),w.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})},w.nc=void 0,w(138)})())})(B);var I=B.exports;const $=M(I);export{$ as C};
