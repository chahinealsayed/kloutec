var p=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var _=(r,e,t)=>(p(r,e,"read from private field"),t?t.call(r):e.get(r)),h=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},g=(r,e,t,a)=>(p(r,e,"write to private field"),a?a.call(r,t):e.set(r,t),t);import{u as j}from"./m78c574d5c3843a3d.js";import{b as O,i as k,n as m}from"./Button.js";import{c as x,d as S}from"./m6cd080c8112b9076.js";import{d as w,c as T,p as M,a as z,f as P,v as V}from"./mc55b2a42316522d6.js";import{r as E,u as $}from"./m6bdda40d8bd2cf5a.js";import{_ as B}from"./_plugin-vue_export-helper.js";var c;class i{constructor(e){h(this,c,void 0);this.block=e,g(this,c,O("block"))}get id(){return`${_(this,c)}-${this.block.id}`}get classes(){return[]}}c=new WeakMap;class q extends i{render(){const{text:e,level:t,alignment:a}=this.block.data;return`
            <h${t} style="text-align: ${a};">${e}</h${t}>
        `}}const C=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));class L extends i{render(){const{text:e,alignment:t}=this.block.data;return`
            <p style="text-align: ${t};">${e}</p>
        `}}const H=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));class A extends i{render(){const{file:e,caption:t}=this.block.data;return`
            <figure class="figure" data-size="${e.size}" data-width="${e.width}" data-height="${e.height}" data-mime="${e.mime}" data-bit="${e.bit}">
                <img src="${e.url}" alt="${t||e.url}" style="max-width: 100%;" >
                ${t&&`<figcaption>${t}</figcaption>`||""}
            </figure>
        `}get classes(){const{withBorder:e,stretched:t,withBackground:a}=this.block.data,l=[];return e==="true"&&l.push("image-border"),t==="true"&&l.push("image-stretched"),a==="true"&&l.push("image-bg"),l}}const I=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));class N extends i{render(){const{html:e}=this.block.data;return`
            ${e}
        `}}const D=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));class F extends i{render(){var l,s,o;const{withHeadings:e,content:t}=this.block.data;let a="";return e==="true"&&(a=`
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
        `}}const G=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));class J extends i{render(){const{service:e,source:t,embed:a,width:l=700,height:s=400,caption:o}=this.block.data;return`
            <div style="display: flex; width: 100%; height: ${s}px; flex-direction: column; overflow: hidden;">
                <iframe src="${a}" width="${l}" height="${s}" style="--width:${l}px;--height:${s}px; flex-grow: 1; border: none; margin: 0; padding: 0;" data-url="${t}"></iframe>
                ${o?`<div class="caption">${o}</div>`:""}
            </div>
        `}get classes(){const{service:e}=this.block.data;return[e]}}const K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));class Q extends i{render(){return""}}const R=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));class U extends i{render(){const{text:e,caption:t,alignment:a}=this.block.data;return`
            <div class="text" style="text-align:${a}">${e}</div>
            <div class="caption">${t}</div>
        `}}const W=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));class X extends i{render(){const{items:e,style:t}=this.block.data;return y(t==="ordered"?"ol":"ul",e)}}function y(r,e){return`
            <${r}>
                ${e.map(({content:t,items:a=[]})=>`<li><div>${t}</div>${y(r,a)}</li>`).join("")}
            </${r}>
        `}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));class Z extends i{render(){const{items:e,style:t}=this.block.data,a=t==="ordered"?"ol":"ul";return`
            <${a}>
                ${e.map(({text:l,checked:s})=>`<li class="${s?"checked":""}">${k({path:s?x:S})}&nbsp;${l}</li>`).join("")}
            </${a}>
        `}}const ee=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));class te extends i{render(){const{type:e,message:t}=this.block.data;return`
            <div class="alert alert-${e}">${t}</div>
        `}}const re=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));class ae extends i{render(){const{title:e,message:t}=this.block.data;return`
            <div class="alert alert-warning">
                <h3>${e}</h3>
                <p>${t}</p>
            </div>
        `}}const le=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));class se extends i{render(){const{link:e,meta:{image:{url:t},title:a,description:l,keywords:s,site_name:o}}=this.block.data;return`
            <a href="${e}" target="_blank" class="link-view">
                <div class="image" style="--image: url(${t});"></div>
                <div class="info">
                    <h4 class="title">${a}</h4>
                    <p class="description">${l}</p>
                    <div class="keywords">${s}</div>
                    <div class="site">${o}</div>
                </div>
            </a>
        `}}const oe=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));class ie extends i{render(){const{name:e,bio:t,image:a}=this.block.data;return`
            <div class="card">
                <img src="${a.url}" class="card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${m(e)}</h5>
                    <p class="card-text">${m(t)}</p>
                </div>
            </div>
        `}}const ne=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),v=Object.freeze(Object.defineProperty({__proto__:null,Author:ne,alert:re,checklist:ee,delimiter:R,embed:K,header:C,image:I,linkTool:oe,list:Y,paragraph:H,quote:W,raw:D,table:G,warning:le},Symbol.toStringTag,{value:"Module"})),u={"call-out":r=>`<div class="tunes tunes-call-out">${r}</div>`,citation:r=>`<div class="tunes tunes-citation">${r}</div>`,details:r=>`<div class="tunes tunes-details">${r}</div>`},de=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),ce=Object.freeze(Object.defineProperty({__proto__:null,textVariant:de},Symbol.toStringTag,{value:"Module"}));function ue(r,e){var t;if(Object.hasOwn(e.tunes,"textVariant")&&Object.hasOwn(ce,"textVariant")){const a=(u==null?void 0:u[(t=e.tunes)==null?void 0:t.textVariant])??null;if(a)return a(r)}return r}function be(r){var t,a;const e=[];return(a=(t=r==null?void 0:r.blocks)==null?void 0:t.forEach)==null||a.call(t,l=>{if(Object.hasOwn(v,l.type)){const s=v[l.type].default,o=new s(l);e.push(`
                <div id="${o.id}" class="block block-${l.type} ${o.classes.join(" ")}">
                    ${ue(o.render(),l)}
                </div>
            `)}}),e.join("")??""}const fe={class:"editor-view-wrapper"},pe=["innerHTML"],_e=w({__name:"EditorView",props:{content:{},rtl:{type:Boolean,default:!1}},setup(r){j(o=>({"4e337934":$(t),b6c04328:$(a)}));const e=E(null),t=r.rtl?"rtl":"ltr",a=r.rtl?"right !important":"left",l=T(()=>be(r.content)),s=()=>{var n,d;(((d=(n=e.value)==null?void 0:n.querySelectorAll)==null?void 0:d.call(n,".block-embed"))??[]).forEach(b=>{const f=b.querySelector("iframe");f&&f.addEventListener("load",he=>{})})};return M(()=>{s()}),(o,n)=>(z(),P("div",fe,[V("div",{ref_key:"container",ref:e,innerHTML:l.value,class:"editor-view"},null,8,pe)]))}});const ke=B(_e,[["__file","EditorView.vue"]]);export{ke as E};
//# sourceMappingURL=EditorView.js.map
