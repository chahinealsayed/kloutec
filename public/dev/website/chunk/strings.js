const h=(t,e)=>(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)),d=(t="id")=>`${t}-${h(1e3,9999)}-${h(1e5,999999)}-${h(1e3,9999)}-${h(1e6,9999999)}-${h(1e3,9999)}-${h(1e7,99999999)}`;function x(t,e=!1){if(typeof t>"u"||t===null)return"";var n=e||typeof e>"u"?"<br />":"<br>";return(t+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1"+n+"$2")}function v(t){const{path:e,size:n,viewBox:p,attrs:s,color:r}={size:24,viewBox:"0 0 24 24",attrs:{},...t??{}},a=Object.keys(s).map(o=>`${o}="${s[o]}"`).join(" ");return Object.hasOwn(s,"style")&&s.style.includes("--r")&&(s.style+="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));"),`
	<svg
		width="${n}"
		height="${n}"
		viewBox="${p}"
		class="${`${r?"text":"default"}-${r??"color"}`}"
		${a}
	>
		<path d="${e}" style="fill: currentColor" />
	</svg>
	`}const y=t=>{if(/^rgba/.test(t)){const e=t.replace(/^rgba?\(|\s+|\)$/g,"").split(",");let n=`#${((1<<24)+(parseInt(e[0],10)<<16)+(parseInt(e[1],10)<<8)+parseInt(e[2],10)).toString(16).slice(1)}`;if(e[4]){const s=(Math.round(255)+65536).toString(16).substr(-2).toUpperCase();n+=s}return n}return t},I=t=>{const e=s=>{const r={hex:s};let a=r.hex.substring(1),o=parseInt(a.substring(0,2),16)/255,i=parseInt(a.substring(2,4),16)/255,u=parseInt(a.substring(4,6),16)/255,b=Math.max.apply(Math,[o,i,u]),l=Math.min.apply(Math,[o,i,u]),f=b-l,c=0,g=b,$=0;return g>0&&($=f/g,$>0&&(o==b?(c=60*((i-l-(u-l))/f),c<0&&(c+=360)):i==b?c=120+60*((u-l-(o-l))/f):u==b&&(c=240+60*((o-l-(i-l))/f)))),r.chroma=f,r.hue=c,r.sat=$,r.val=g,r.luma=.3*o+.59*i+.11*u,r.red=parseInt(a.substring(0,2),16),r.green=parseInt(a.substring(2,4),16),r.blue=parseInt(a.substring(4,6),16),r},n=s=>s.sort(function(r,a){return r.luma-a.luma}),p=[];return t.forEach(s=>{p.push(e(s))}),n(p)};export{d as a,v as i,x as n,y as r,I as s};
//# sourceMappingURL=strings.js.map
