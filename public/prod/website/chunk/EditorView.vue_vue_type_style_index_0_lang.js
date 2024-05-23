var p=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var h=(r,e,t)=>(p(r,e,"read from private field"),t?t.call(r):e.get(r)),g=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},_=(r,e,t,a)=>(p(r,e,"write to private field"),a?a.call(r,t):e.set(r,t),t);import{u as j}from"./m78c574d5c3843a3d.js";import{a as O,i as k,n as m}from"./strings.js";import{e as x,f as S}from"./m6cd080c8112b9076.js";import{d as w,c as T,o as M,l as z,q as P,r as V}from"./mc55b2a42316522d6.js";import{r as B,u as $}from"./m6bdda40d8bd2cf5a.js";var c;class i{constructor(e){g(this,c,void 0);this.block=e,_(this,c,O("block"))}get id(){return`${h(this,c)}-${this.block.id}`}get classes(){return[]}}c=new WeakMap;class E extends i{render(){const{text:e,level:t,alignment:a}=this.block.data;return`
            <h${t} style="text-align: ${a};">${e}</h${t}>
        `}}const q=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));class C extends i{render(){const{text:e,alignment:t}=this.block.data;return`
            <p style="text-align: ${t};">${e}</p>
        `}}const L=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));class H extends i{render(){const{file:e,caption:t}=this.block.data;return`
            <figure class="figure" data-size="${e.size}" data-width="${e.width}" data-height="${e.height}" data-mime="${e.mime}" data-bit="${e.bit}">
                <img src="${e.url}" alt="${t||e.url}" style="max-width: 100%;" >
                ${t&&`<figcaption>${t}</figcaption>`||""}
            </figure>
        `}get classes(){const{withBorder:e,stretched:t,withBackground:a}=this.block.data,l=[];return e==="true"&&l.push("image-border"),t==="true"&&l.push("image-stretched"),a==="true"&&l.push("image-bg"),l}}const A=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));class I extends i{render(){const{html:e}=this.block.data;return`
            ${e}
        `}}const N=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));class D extends i{render(){var l,s,o;const{withHeadings:e,content:t}=this.block.data;let a="";return e==="true"&&(a=`
                <thead>
                    <tr>
                        ${((s=(l=t==null?void 0:t[0])==null?void 0:l.map(n=>`<th>${n}</th>`))==null?void 0:s.join(""))??""}
                    </tr>
                </thead>
            `,t.splice(0,1)),`
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    ${a}
                    <tbody>
                        ${((o=t==null?void 0:t.map(n=>{var d;return`
                            <tr>${((d=n==null?void 0:n.map(b=>`<td>${b}</td>`))==null?void 0:d.join(""))??""}</tr>
                        `}))==null?void 0:o.join(""))??""}
                    </tbody>
                </table>
            </div>
        `}}const F=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));class G extends i{render(){const{service:e,source:t,embed:a,width:l=700,height:s=400,caption:o}=this.block.data;return`
            <div style="display: flex; width: 100%; height: ${s}px; flex-direction: column; overflow: hidden;">
                <iframe src="${a}" width="${l}" height="${s}" style="--width:${l}px;--height:${s}px; flex-grow: 1; border: none; margin: 0; padding: 0;" data-url="${t}"></iframe>
                ${o?`<div class="caption">${o}</div>`:""}
            </div>
        `}get classes(){const{service:e}=this.block.data;return[e]}}const J=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));class K extends i{render(){return""}}const Q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));class R extends i{render(){const{text:e,caption:t,alignment:a}=this.block.data;return`
            <div class="text" style="text-align:${a}">${e}</div>
            <div class="caption">${t}</div>
        `}}const U=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));class W extends i{render(){const{items:e,style:t}=this.block.data;return y(t==="ordered"?"ol":"ul",e)}}function y(r,e){return`
            <${r}>
                ${e.map(({content:t,items:a=[]})=>`<li><div>${t}</div>${y(r,a)}</li>`).join("")}
            </${r}>
        `}const X=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));class Y extends i{render(){const{items:e,style:t}=this.block.data,a=t==="ordered"?"ol":"ul";return`
            <${a}>
                ${e.map(({text:l,checked:s})=>`<li class="${s?"checked":""}">${k({path:s?x:S})}&nbsp;${l}</li>`).join("")}
            </${a}>
        `}}const Z=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));class ee extends i{render(){const{type:e,message:t}=this.block.data;return`
            <div class="alert alert-${e}">${t}</div>
        `}}const te=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));class re extends i{render(){const{title:e,message:t}=this.block.data;return`
            <div class="alert alert-warning">
                <h3>${e}</h3>
                <p>${t}</p>
            </div>
        `}}const ae=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));class le extends i{render(){const{link:e,meta:{image:{url:t},title:a,description:l,keywords:s,site_name:o}}=this.block.data;return`
            <a href="${e}" target="_blank" class="link-view">
                <div class="image" style="--image: url(${t});"></div>
                <div class="info">
                    <h4 class="title">${a}</h4>
                    <p class="description">${l}</p>
                    <div class="keywords">${s}</div>
                    <div class="site">${o}</div>
                </div>
            </a>
        `}}const se=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));class oe extends i{render(){const{name:e,bio:t,image:a}=this.block.data;return`
            <div class="card">
                <img src="${a.url}" class="card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${m(e)}</h5>
                    <p class="card-text">${m(t)}</p>
                </div>
            </div>
        `}}const ie=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),v=Object.freeze(Object.defineProperty({__proto__:null,Author:ie,alert:te,checklist:Z,delimiter:Q,embed:J,header:q,image:A,linkTool:se,list:X,paragraph:L,quote:U,raw:N,table:F,warning:ae},Symbol.toStringTag,{value:"Module"})),u={"call-out":r=>`<div class="tunes tunes-call-out">${r}</div>`,citation:r=>`<div class="tunes tunes-citation">${r}</div>`,details:r=>`<div class="tunes tunes-details">${r}</div>`},ne=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),de=Object.freeze(Object.defineProperty({__proto__:null,textVariant:ne},Symbol.toStringTag,{value:"Module"}));function ce(r,e){var t;if(Object.hasOwn(e.tunes,"textVariant")&&Object.hasOwn(de,"textVariant")){const a=(u==null?void 0:u[(t=e.tunes)==null?void 0:t.textVariant])??null;if(a)return a(r)}return r}function ue(r){var t,a;const e=[];return(a=(t=r==null?void 0:r.blocks)==null?void 0:t.forEach)==null||a.call(t,l=>{if(Object.hasOwn(v,l.type)){const s=v[l.type].default,o=new s(l);e.push(`
                <div id="${o.id}" class="block block-${l.type} ${o.classes.join(" ")}">
                    ${ce(o.render(),l)}
                </div>
            `)}}),e.join("")??""}const be={class:"editor-view-wrapper"},fe=["innerHTML"],ye=w({__name:"EditorView",props:{content:{},rtl:{type:Boolean,default:!1}},setup(r){j(o=>({"4e337934":$(t),b6c04328:$(a)}));const e=B(null),t=r.rtl?"rtl":"ltr",a=r.rtl?"right !important":"left",l=T(()=>ue(r.content)),s=()=>{var n,d;(((d=(n=e.value)==null?void 0:n.querySelectorAll)==null?void 0:d.call(n,".block-embed"))??[]).forEach(b=>{const f=b.querySelector("iframe");f&&f.addEventListener("load",pe=>{})})};return M(()=>{s()}),(o,n)=>(z(),P("div",be,[V("div",{ref_key:"container",ref:e,innerHTML:l.value,class:"editor-view"},null,8,fe)]))}});export{ye as _};
