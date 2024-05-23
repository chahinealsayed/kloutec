import{d as N,w as U}from"./chunk/m78c574d5c3843a3d.js";import{i as F}from"./chunk/m6cd080c8112b9076.js";import{I as M}from"./chunk/Icon.js";import{d as E,c as C,a as _,b as P,t as K,p as T,q as D,w as G,f as R,v as S,x as Q,T as X,o as Y,e as $,r as w,y as z,k as A,z as q,j as Z,n as O,F as ee}from"./chunk/mc55b2a42316522d6.js";import{J as te,n as oe,y as ne,K as se}from"./chunk/ma6cfd38af5d4c661.js";import{u as I,r as h}from"./chunk/m6bdda40d8bd2cf5a.js";import{_ as H}from"./chunk/_plugin-vue_export-helper.js";import{_ as ae}from"./chunk/EditorView.vue_vue_type_style_index_0_lang.js";import{s as re,r as le,B as ce}from"./chunk/Button.js";import{_ as ie}from"./chunk/md825331c71ee2150.js";import{_ as fe}from"./chunk/CloseButton.vue_vue_type_script_setup_true_lang.js";import{O as ue}from"./chunk/m3fc8d974e5d8216d.js";import"./chunk/m110db13e4dc1cf62.js";const de="modulepreload",pe=function(d,r){return new URL(d,r).href},j={},ve=function(r,e,n){if(!e||e.length===0)return r();const a=document.getElementsByTagName("link");return Promise.all(e.map(c=>{if(c=pe(c,n),c in j)return;j[c]=!0;const i=c.endsWith(".css"),m=i?'[rel="stylesheet"]':"";if(!!n)for(let o=a.length-1;o>=0;o--){const l=a[o];if(l.href===c&&(!i||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":de,i||(u.as="script",u.crossOrigin=""),u.href=c,document.head.appendChild(u),i)return new Promise((o,l)=>{u.addEventListener("load",o),u.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>r()).catch(c=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=c,window.dispatchEvent(i),!i.defaultPrevented)throw c})};const he=E({__name:"Icon.ce",props:{path:{},type:{},size:{},viewbox:{},flip:{},rotate:{},color:{}},setup(d){const r=d,e=F[r.path]??r.path,n=C(()=>({transform:"rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))",color:"var(--color)",width:"var(--size)",height:"var(--size)"}));return(a,c)=>(_(),P(M,te(K({...r,...a.$attrs,path:I(e),style:n.value})),null,16))}}),me=`:host{height:var(--size)}
`,ye=H(he,[["styles",[me]]]);customElements.define("web-icon",N(ye));const ge=E({__name:"EditorView.ce",props:{blocks:{}},setup(d){const r=d,e=D(),n=C(()=>{if(typeof r.blocks=="string")try{return JSON.parse(r.blocks)}catch{}return r.blocks});return T(()=>{var a;e.vnode.el.parentNode.host.shadowRoot.appendChild((a=document.querySelector("#main-css"))==null?void 0:a.cloneNode())}),(a,c)=>(_(),P(ae,{content:n.value},null,8,["content"]))}});customElements.define("web-view",N(ge));const _e=["src","alt"],be=E({__name:"Image.ce",props:{meta:{},fancybox:{type:[Boolean,String]}},setup(d){const r=d,e=JSON.parse(r.meta),n=h(r.fancybox);G(()=>r.fancybox,o=>{n.value=o},{deep:!0});const a=h(null),c=C(()=>{if(e!=null&&e.palette){const o=re(e==null?void 0:e.palette.map(le)).reverse(),l=[],y=o.length-1;return o.forEach((p,g)=>{let s=g*100/y;l.push(`${p.hex} ${s}%`)}),`radial-gradient(farthest-corner at center,${l.join(", ")})`}return"#fff"}),i=C(()=>{if(a.value){const o=parseInt((e==null?void 0:e.width)??"0");return o<a.value.offsetWidth?`${o}px`:`${a.value.offsetWidth}px`}return"auto"}),m=C(()=>{if(a.value){const o=parseInt((e==null?void 0:e.height)??"0"),l=parseInt((e==null?void 0:e.width)??"0");if(o>0&&l>0)return l<a.value.offsetWidth?`${o}px`:`${Math.ceil(a.value.offsetWidth*o/l)}px`}return"auto"}),f=()=>{var o,l;(l=(o=a.value)==null?void 0:o.remove)==null||l.call(o)},u=()=>{if(n.value&&(e!=null&&e.url)){const o={},l=[];typeof n.value=="string"?(o.groupAttr="fancybox",o.groupAll=!0,document.querySelectorAll(`[${o.groupAttr}=${n.value}]`).forEach((y,p)=>{const{url:g}=JSON.parse(y.meta);l.push({src:g}),g===(e==null?void 0:e.url)&&(o.startIndex=p)})):l.push({src:e==null?void 0:e.url}),ie.show(l,o)}};return(o,l)=>{var y,p;return _(),R("figure",{ref_key:"wrapper",ref:a,class:oe(["figure image",{"with-fancybox":n.value}]),style:ne({background:c.value,width:i.value,height:m.value,margin:0}),onClick:u},[S("img",{src:(y=I(e))==null?void 0:y.url,class:"figure-img img-fluid",alt:(p=I(e))==null?void 0:p.size,loading:"lazy",onError:f,style:{"max-width":"100%"}},null,40,_e)],6)}}}),we=`.figure{--color: #fff;--bg: rgba(0, 0, 0, .7);position:relative}.figure.with-fancybox{cursor:pointer}.figure.with-fancybox:after{content:"Click to Enlarge";position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;background:var(--bg);color:var(--color);z-index:-1;opacity:0;transition:all .25s ease}.figure:hover:after{z-index:1;opacity:1}
`,ke=H(be,[["styles",[we]]]);customElements.define("web-image",N(ke));const $e={key:0,class:"offcanvas-title"},Ee={class:"offcanvas-body"},Ce=E({inheritAttrs:!1,__name:"Offcanvas",props:{title:{default:""},placement:{default:"start"},responsive:{default:null},backdrop:{type:[Boolean,String],default:"static"},keyboard:{type:Boolean,default:!1},scroll:{type:Boolean,default:!1},noHeader:{type:Boolean,default:!1},native:{type:Boolean,default:!1}},emits:["close","closed","prevented","open","opened"],setup(d,{expose:r,emit:e}){Q();const n=h(null),a=h(null),c=h(!1),i=h(d.native?"div":X),m=t=>{e("close",t)},f=t=>{e("closed",t)},u=t=>{e("prevented",t)},o=t=>{e("open",t)},l=t=>{e("opened",t)},y=()=>{a.value=new ue(n.value,{backdrop:d.backdrop,keyboard:d.keyboard,scroll:d.scroll}),n.value.addEventListener("hide.bs.offcanvas",m),n.value.addEventListener("hidden.bs.offcanvas",f),n.value.addEventListener("hidePrevented.bs.offcanvas",u),n.value.addEventListener("show.bs.offcanvas",o),n.value.addEventListener("shown.bs.offcanvas",l)},p=()=>{var t,v;(v=(t=a.value)==null?void 0:t.show)==null||v.call(t)},g=()=>{c.value=!0,O(()=>{var t,v;(v=(t=a.value)==null?void 0:t.hide)==null||v.call(t),setTimeout(()=>{c.value=!1},300)})};function s(){window.location.href="/"}return r({open:p,close:g}),T(()=>{y()}),Y(()=>{var t,v,k,b,x,V,B,W,L,J;(v=(t=n.value)==null?void 0:t.removeEventListener)==null||v.call(t,"hide.bs.offcanvas",m),(b=(k=n.value)==null?void 0:k.removeEventListener)==null||b.call(k,"hidden.bs.offcanvas",f),(V=(x=n.value)==null?void 0:x.removeEventListener)==null||V.call(x,"hidePrevented.bs.offcanvas",u),(W=(B=n.value)==null?void 0:B.removeEventListener)==null||W.call(B,"show.bs.offcanvas",o),(J=(L=n.value)==null?void 0:L.removeEventListener)==null||J.call(L,"shown.bs.offcanvas",l)}),(t,v)=>(_(),P(Z(i.value),{to:"body"},{default:$(()=>[S("div",q({ref_key:"offcanvasRef",ref:n,class:{[`offcanvas${t.responsive?"-${responsive}":""}`]:!0,[`offcanvas-${t.placement}`]:!0,show:!0,closing:c.value},tabindex:"-1","aria-labelledby":"offcanvasLabel"},t.$attrs),[t.noHeader?z("",!0):(_(),R("div",{key:0,class:"offcanvas-header",onClick:s},[t.$slots.title||t.title?(_(),R("div",$e,[w(t.$slots,"title",{},()=>[S("h5",null,se(t.title),1)])])):z("",!0),A(fe,{onClick:U(g,["prevent","stop"]),class:"ms-auto"},null,8,["onClick"])])),S("div",Ee,[w(t.$slots,"default")])],16)]),_:3}))}});const xe=E({inheritAttrs:!1,__name:"ToggleButton",emits:["open","close"],setup(d,{expose:r,emit:e}){const n=h(null),a=h(!1),c=()=>{a.value=!0,O(()=>{var f,u;(u=(f=n.value)==null?void 0:f.open)==null||u.call(f),O(()=>{var o,l;(l=(o=n.value)==null?void 0:o.update)==null||l.call(o),O(()=>{e("open")})})})},i=f=>{n.value=f},m=()=>{a.value=!1,e("close")};return r({open:c}),(f,u)=>(_(),R(ee,null,[A(ce,q({onClick:c},f.$attrs),{default:$(()=>[w(f.$slots,"default")]),_:3},16),a.value?w(f.$slots,"content",{key:0,element:i,closed:m}):z("",!0)],64))}}),Be=E({inheritAttrs:!1,__name:"OffCanvas.ce",emits:["close","closed","prevented","open","opened"],setup(d,{expose:r,emit:e}){const n=D(),a=h(null),c=h(null),i=h(null),m=s=>{i.value=s},f=s=>{e("close",s)},u=s=>{e("closed",s)},o=s=>{e("prevented",s)},l=s=>{e("open",s)},y=s=>{e("opened",s)},p=()=>{var s,t;(t=(s=c.value)==null?void 0:s.open)==null||t.call(s)},g=()=>{var s,t;(t=(s=i.value)==null?void 0:s.close)==null||t.call(s)};return r({open:p,close:g}),T(()=>{var s;a.value=document.documentElement.dataset.bsTheme,n.vnode.el.parentNode.host.open=p,n.vnode.el.parentNode.host.close=g,n.vnode.el.parentNode.host.shadowRoot.appendChild((s=document.querySelector("#main-css"))==null?void 0:s.cloneNode())}),(s,t)=>(_(),P(xe,{ref_key:"toggleButton",ref:c},{default:$(()=>[w(s.$slots,"button")]),content:$(({element:v,closed:k})=>[A(Ce,q({ref:b=>{v(b),m(b)}},s.$attrs,{native:"",class:{dark:a.value==="dark"},onClose:f,onClosed:b=>{k(),u(b)},onPrevented:o,onOpen:l,onOpened:y}),{title:$(()=>[w(s.$slots,"title")]),default:$(()=>[w(s.$slots,"default")]),_:2},1040,["class","onClosed"])]),_:3},512))}}),Le=`.dark .btn-close{filter:var(--bs-btn-close-white-filter)}
`,Se=H(Be,[["styles",[Le]]]);customElements.define("web-offcanvas",N(Se));document.addEventListener("readystatechange",async d=>{var r,e;d.target.readyState==="complete"&&((e=(r=await ve(()=>import("./chunk/index.js").then(n=>n.d),["./chunk\\index.js","./chunk\\m21bbc25c9f3922b4.js","./chunk\\m64d389f71fee61f4.js","./chunk\\m6bdda40d8bd2cf5a.js","./chunk\\ma6cfd38af5d4c661.js","./chunk\\mc55b2a42316522d6.js"],import.meta.url))==null?void 0:r.initTheme)==null||e.call(r))});
