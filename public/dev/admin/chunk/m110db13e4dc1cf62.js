var R="top",S="bottom",T="right",B="left",ye="auto",ne=[R,S,T,B],J="start",_="end",at="clippingParents",$e="viewport",Z="popper",nt="reference",Pe=ne.reduce(function(e,t){return e.concat([t+"-"+J,t+"-"+_])},[]),Re=[].concat(ne,[ye]).reduce(function(e,t){return e.concat([t,t+"-"+J,t+"-"+_])},[]),ot="beforeRead",it="read",st="afterRead",ft="beforeMain",pt="main",ct="afterMain",ut="beforeWrite",lt="write",vt="afterWrite",dt=[ot,it,st,ft,pt,ct,ut,lt,vt];function V(e){return e?(e.nodeName||"").toLowerCase():null}function k(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function K(e){var t=k(e).Element;return e instanceof t||e instanceof Element}function M(e){var t=k(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Be(e){if(typeof ShadowRoot>"u")return!1;var t=k(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Tt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var a=t.styles[r]||{},n=t.attributes[r]||{},o=t.elements[r];!M(o)||!V(o)||(Object.assign(o.style,a),Object.keys(n).forEach(function(p){var s=n[p];s===!1?o.removeAttribute(p):o.setAttribute(p,s===!0?"":s)}))})}function kt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(a){var n=t.elements[a],o=t.attributes[a]||{},p=Object.keys(t.styles.hasOwnProperty(a)?t.styles[a]:r[a]),s=p.reduce(function(i,c){return i[c]="",i},{});!M(n)||!V(n)||(Object.assign(n.style,s),Object.keys(o).forEach(function(i){n.removeAttribute(i)}))})}}const Ce={name:"applyStyles",enabled:!0,phase:"write",fn:Tt,effect:kt,requires:["computeStyles"]};function H(e){return e.split("-")[0]}var G=Math.max,ge=Math.min,ee=Math.round;function De(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ht(){return!/^((?!chrome|android).)*safari/i.test(De())}function te(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var a=e.getBoundingClientRect(),n=1,o=1;t&&M(e)&&(n=e.offsetWidth>0&&ee(a.width)/e.offsetWidth||1,o=e.offsetHeight>0&&ee(a.height)/e.offsetHeight||1);var p=K(e)?k(e):window,s=p.visualViewport,i=!ht()&&r,c=(a.left+(i&&s?s.offsetLeft:0))/n,f=(a.top+(i&&s?s.offsetTop:0))/o,h=a.width/n,y=a.height/o;return{width:h,height:y,top:f,right:c+h,bottom:f+y,left:c,x:c,y:f}}function Se(e){var t=te(e),r=e.offsetWidth,a=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:a}}function mt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Be(r)){var a=t;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function N(e){return k(e).getComputedStyle(e)}function Mt(e){return["table","td","th"].indexOf(V(e))>=0}function q(e){return((K(e)?e.ownerDocument:e.document)||window.document).documentElement}function be(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(Be(e)?e.host:null)||q(e)}function Je(e){return!M(e)||N(e).position==="fixed"?null:e.offsetParent}function Lt(e){var t=/firefox/i.test(De()),r=/Trident/i.test(De());if(r&&M(e)){var a=N(e);if(a.position==="fixed")return null}var n=be(e);for(Be(n)&&(n=n.host);M(n)&&["html","body"].indexOf(V(n))<0;){var o=N(n);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return n;n=n.parentNode}return null}function pe(e){for(var t=k(e),r=Je(e);r&&Mt(r)&&N(r).position==="static";)r=Je(r);return r&&(V(r)==="html"||V(r)==="body"&&N(r).position==="static")?t:r||Lt(e)||t}function Te(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function se(e,t,r){return G(e,ge(t,r))}function Wt(e,t,r){var a=se(e,t,r);return a>r?r:a}function gt(){return{top:0,right:0,bottom:0,left:0}}function yt(e){return Object.assign({},gt(),e)}function bt(e,t){return t.reduce(function(r,a){return r[a]=e,r},{})}var Ht=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,yt(typeof t!="number"?t:bt(t,ne))};function Vt(e){var t,r=e.state,a=e.name,n=e.options,o=r.elements.arrow,p=r.modifiersData.popperOffsets,s=H(r.placement),i=Te(s),c=[B,T].indexOf(s)>=0,f=c?"height":"width";if(!(!o||!p)){var h=Ht(n.padding,r),y=Se(o),u=i==="y"?R:B,w=i==="y"?S:T,d=r.rects.reference[f]+r.rects.reference[i]-p[i]-r.rects.popper[f],v=p[i]-r.rects.reference[i],b=pe(o),O=b?i==="y"?b.clientHeight||0:b.clientWidth||0:0,A=d/2-v/2,l=h[u],m=O-y[f]-h[w],g=O/2-y[f]/2+A,x=se(l,g,m),D=i;r.modifiersData[a]=(t={},t[D]=x,t.centerOffset=x-g,t)}}function Nt(e){var t=e.state,r=e.options,a=r.element,n=a===void 0?"[data-popper-arrow]":a;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||mt(t.elements.popper,n)&&(t.elements.arrow=n))}const wt={name:"arrow",enabled:!0,phase:"main",fn:Vt,effect:Nt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function re(e){return e.split("-")[1]}var Ft={top:"auto",right:"auto",bottom:"auto",left:"auto"};function qt(e,t){var r=e.x,a=e.y,n=t.devicePixelRatio||1;return{x:ee(r*n)/n||0,y:ee(a*n)/n||0}}function Ke(e){var t,r=e.popper,a=e.popperRect,n=e.placement,o=e.variation,p=e.offsets,s=e.position,i=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,h=e.isFixed,y=p.x,u=y===void 0?0:y,w=p.y,d=w===void 0?0:w,v=typeof f=="function"?f({x:u,y:d}):{x:u,y:d};u=v.x,d=v.y;var b=p.hasOwnProperty("x"),O=p.hasOwnProperty("y"),A=B,l=R,m=window;if(c){var g=pe(r),x="clientHeight",D="clientWidth";if(g===k(r)&&(g=q(r),N(g).position!=="static"&&s==="absolute"&&(x="scrollHeight",D="scrollWidth")),g=g,n===R||(n===B||n===T)&&o===_){l=S;var P=h&&g===m&&m.visualViewport?m.visualViewport.height:g[x];d-=P-a.height,d*=i?1:-1}if(n===B||(n===R||n===S)&&o===_){A=T;var E=h&&g===m&&m.visualViewport?m.visualViewport.width:g[D];u-=E-a.width,u*=i?1:-1}}var j=Object.assign({position:s},c&&Ft),L=f===!0?qt({x:u,y:d},k(r)):{x:u,y:d};if(u=L.x,d=L.y,i){var $;return Object.assign({},j,($={},$[l]=O?"0":"",$[A]=b?"0":"",$.transform=(m.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",$))}return Object.assign({},j,(t={},t[l]=O?d+"px":"",t[A]=b?u+"px":"",t.transform="",t))}function Xt(e){var t=e.state,r=e.options,a=r.gpuAcceleration,n=a===void 0?!0:a,o=r.adaptive,p=o===void 0?!0:o,s=r.roundOffsets,i=s===void 0?!0:s,c={placement:H(t.placement),variation:re(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ke(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ke(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const ke={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Xt,data:{}};var he={passive:!0};function It(e){var t=e.state,r=e.instance,a=e.options,n=a.scroll,o=n===void 0?!0:n,p=a.resize,s=p===void 0?!0:p,i=k(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(f){f.addEventListener("scroll",r.update,he)}),s&&i.addEventListener("resize",r.update,he),function(){o&&c.forEach(function(f){f.removeEventListener("scroll",r.update,he)}),s&&i.removeEventListener("resize",r.update,he)}}const Me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:It,data:{}};var Yt={left:"right",right:"left",bottom:"top",top:"bottom"};function me(e){return e.replace(/left|right|bottom|top/g,function(t){return Yt[t]})}var zt={start:"end",end:"start"};function Qe(e){return e.replace(/start|end/g,function(t){return zt[t]})}function Le(e){var t=k(e),r=t.pageXOffset,a=t.pageYOffset;return{scrollLeft:r,scrollTop:a}}function We(e){return te(q(e)).left+Le(e).scrollLeft}function Ut(e,t){var r=k(e),a=q(e),n=r.visualViewport,o=a.clientWidth,p=a.clientHeight,s=0,i=0;if(n){o=n.width,p=n.height;var c=ht();(c||!c&&t==="fixed")&&(s=n.offsetLeft,i=n.offsetTop)}return{width:o,height:p,x:s+We(e),y:i}}function Gt(e){var t,r=q(e),a=Le(e),n=(t=e.ownerDocument)==null?void 0:t.body,o=G(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=G(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-a.scrollLeft+We(e),i=-a.scrollTop;return N(n||r).direction==="rtl"&&(s+=G(r.clientWidth,n?n.clientWidth:0)-o),{width:o,height:p,x:s,y:i}}function He(e){var t=N(e),r=t.overflow,a=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+a)}function xt(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:M(e)&&He(e)?e:xt(be(e))}function fe(e,t){var r;t===void 0&&(t=[]);var a=xt(e),n=a===((r=e.ownerDocument)==null?void 0:r.body),o=k(a),p=n?[o].concat(o.visualViewport||[],He(a)?a:[]):a,s=t.concat(p);return n?s:s.concat(fe(be(p)))}function je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Jt(e,t){var r=te(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ze(e,t,r){return t===$e?je(Ut(e,r)):K(t)?Jt(t,r):je(Gt(q(e)))}function Kt(e){var t=fe(be(e)),r=["absolute","fixed"].indexOf(N(e).position)>=0,a=r&&M(e)?pe(e):e;return K(a)?t.filter(function(n){return K(n)&&mt(n,a)&&V(n)!=="body"}):[]}function Qt(e,t,r,a){var n=t==="clippingParents"?Kt(e):[].concat(t),o=[].concat(n,[r]),p=o[0],s=o.reduce(function(i,c){var f=Ze(e,c,a);return i.top=G(f.top,i.top),i.right=ge(f.right,i.right),i.bottom=ge(f.bottom,i.bottom),i.left=G(f.left,i.left),i},Ze(e,p,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ot(e){var t=e.reference,r=e.element,a=e.placement,n=a?H(a):null,o=a?re(a):null,p=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(n){case R:i={x:p,y:t.y-r.height};break;case S:i={x:p,y:t.y+t.height};break;case T:i={x:t.x+t.width,y:s};break;case B:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var c=n?Te(n):null;if(c!=null){var f=c==="y"?"height":"width";switch(o){case J:i[c]=i[c]-(t[f]/2-r[f]/2);break;case _:i[c]=i[c]+(t[f]/2-r[f]/2);break}}return i}function ae(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=a===void 0?e.placement:a,o=r.strategy,p=o===void 0?e.strategy:o,s=r.boundary,i=s===void 0?at:s,c=r.rootBoundary,f=c===void 0?$e:c,h=r.elementContext,y=h===void 0?Z:h,u=r.altBoundary,w=u===void 0?!1:u,d=r.padding,v=d===void 0?0:d,b=yt(typeof v!="number"?v:bt(v,ne)),O=y===Z?nt:Z,A=e.rects.popper,l=e.elements[w?O:y],m=Qt(K(l)?l:l.contextElement||q(e.elements.popper),i,f,p),g=te(e.elements.reference),x=Ot({reference:g,element:A,strategy:"absolute",placement:n}),D=je(Object.assign({},A,x)),P=y===Z?D:g,E={top:m.top-P.top+b.top,bottom:P.bottom-m.bottom+b.bottom,left:m.left-P.left+b.left,right:P.right-m.right+b.right},j=e.modifiersData.offset;if(y===Z&&j){var L=j[n];Object.keys(E).forEach(function($){var X=[T,S].indexOf($)>=0?1:-1,I=[R,S].indexOf($)>=0?"y":"x";E[$]+=L[I]*X})}return E}function Zt(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=r.boundary,o=r.rootBoundary,p=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,c=i===void 0?Re:i,f=re(a),h=f?s?Pe:Pe.filter(function(w){return re(w)===f}):ne,y=h.filter(function(w){return c.indexOf(w)>=0});y.length===0&&(y=h);var u=y.reduce(function(w,d){return w[d]=ae(e,{placement:d,boundary:n,rootBoundary:o,padding:p})[H(d)],w},{});return Object.keys(u).sort(function(w,d){return u[w]-u[d]})}function _t(e){if(H(e)===ye)return[];var t=me(e);return[Qe(e),t,Qe(t)]}function er(e){var t=e.state,r=e.options,a=e.name;if(!t.modifiersData[a]._skip){for(var n=r.mainAxis,o=n===void 0?!0:n,p=r.altAxis,s=p===void 0?!0:p,i=r.fallbackPlacements,c=r.padding,f=r.boundary,h=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,w=u===void 0?!0:u,d=r.allowedAutoPlacements,v=t.options.placement,b=H(v),O=b===v,A=i||(O||!w?[me(v)]:_t(v)),l=[v].concat(A).reduce(function(Q,F){return Q.concat(H(F)===ye?Zt(t,{placement:F,boundary:f,rootBoundary:h,padding:c,flipVariations:w,allowedAutoPlacements:d}):F)},[]),m=t.rects.reference,g=t.rects.popper,x=new Map,D=!0,P=l[0],E=0;E<l.length;E++){var j=l[E],L=H(j),$=re(j)===J,X=[R,S].indexOf(L)>=0,I=X?"width":"height",C=ae(t,{placement:j,boundary:f,rootBoundary:h,altBoundary:y,padding:c}),W=X?$?T:B:$?S:R;m[I]>g[I]&&(W=me(W));var ce=me(W),Y=[];if(o&&Y.push(C[L]<=0),s&&Y.push(C[W]<=0,C[ce]<=0),Y.every(function(Q){return Q})){P=j,D=!1;break}x.set(j,Y)}if(D)for(var ue=w?3:1,xe=function(F){var ie=l.find(function(ve){var z=x.get(ve);if(z)return z.slice(0,F).every(function(Oe){return Oe})});if(ie)return P=ie,"break"},oe=ue;oe>0;oe--){var le=xe(oe);if(le==="break")break}t.placement!==P&&(t.modifiersData[a]._skip=!0,t.placement=P,t.reset=!0)}}const At={name:"flip",enabled:!0,phase:"main",fn:er,requiresIfExists:["offset"],data:{_skip:!1}};function _e(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function et(e){return[R,T,S,B].some(function(t){return e[t]>=0})}function tr(e){var t=e.state,r=e.name,a=t.rects.reference,n=t.rects.popper,o=t.modifiersData.preventOverflow,p=ae(t,{elementContext:"reference"}),s=ae(t,{altBoundary:!0}),i=_e(p,a),c=_e(s,n,o),f=et(i),h=et(c);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":h})}const Et={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:tr};function rr(e,t,r){var a=H(e),n=[B,R].indexOf(a)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,p=o[0],s=o[1];return p=p||0,s=(s||0)*n,[B,T].indexOf(a)>=0?{x:s,y:p}:{x:p,y:s}}function ar(e){var t=e.state,r=e.options,a=e.name,n=r.offset,o=n===void 0?[0,0]:n,p=Re.reduce(function(f,h){return f[h]=rr(h,t.rects,o),f},{}),s=p[t.placement],i=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=c),t.modifiersData[a]=p}const Pt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ar};function nr(e){var t=e.state,r=e.name;t.modifiersData[r]=Ot({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Ve={name:"popperOffsets",enabled:!0,phase:"read",fn:nr,data:{}};function or(e){return e==="x"?"y":"x"}function ir(e){var t=e.state,r=e.options,a=e.name,n=r.mainAxis,o=n===void 0?!0:n,p=r.altAxis,s=p===void 0?!1:p,i=r.boundary,c=r.rootBoundary,f=r.altBoundary,h=r.padding,y=r.tether,u=y===void 0?!0:y,w=r.tetherOffset,d=w===void 0?0:w,v=ae(t,{boundary:i,rootBoundary:c,padding:h,altBoundary:f}),b=H(t.placement),O=re(t.placement),A=!O,l=Te(b),m=or(l),g=t.modifiersData.popperOffsets,x=t.rects.reference,D=t.rects.popper,P=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,E=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(g){if(o){var $,X=l==="y"?R:B,I=l==="y"?S:T,C=l==="y"?"height":"width",W=g[l],ce=W+v[X],Y=W-v[I],ue=u?-D[C]/2:0,xe=O===J?x[C]:D[C],oe=O===J?-D[C]:-x[C],le=t.elements.arrow,Q=u&&le?Se(le):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:gt(),ie=F[X],ve=F[I],z=se(0,x[C],Q[C]),Oe=A?x[C]/2-ue-z-ie-E.mainAxis:xe-z-ie-E.mainAxis,jt=A?-x[C]/2+ue+z+ve+E.mainAxis:oe+z+ve+E.mainAxis,Ae=t.elements.arrow&&pe(t.elements.arrow),$t=Ae?l==="y"?Ae.clientTop||0:Ae.clientLeft||0:0,Ne=($=j==null?void 0:j[l])!=null?$:0,Rt=W+Oe-Ne-$t,Bt=W+jt-Ne,Fe=se(u?ge(ce,Rt):ce,W,u?G(Y,Bt):Y);g[l]=Fe,L[l]=Fe-W}if(s){var qe,Ct=l==="x"?R:B,St=l==="x"?S:T,U=g[m],de=m==="y"?"height":"width",Xe=U+v[Ct],Ie=U-v[St],Ee=[R,B].indexOf(b)!==-1,Ye=(qe=j==null?void 0:j[m])!=null?qe:0,ze=Ee?Xe:U-x[de]-D[de]-Ye+E.altAxis,Ue=Ee?U+x[de]+D[de]-Ye-E.altAxis:Ie,Ge=u&&Ee?Wt(ze,U,Ue):se(u?ze:Xe,U,u?Ue:Ie);g[m]=Ge,L[m]=Ge-U}t.modifiersData[a]=L}}const Dt={name:"preventOverflow",enabled:!0,phase:"main",fn:ir,requiresIfExists:["offset"]};function sr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function fr(e){return e===k(e)||!M(e)?Le(e):sr(e)}function pr(e){var t=e.getBoundingClientRect(),r=ee(t.width)/e.offsetWidth||1,a=ee(t.height)/e.offsetHeight||1;return r!==1||a!==1}function cr(e,t,r){r===void 0&&(r=!1);var a=M(t),n=M(t)&&pr(t),o=q(t),p=te(e,n,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(a||!a&&!r)&&((V(t)!=="body"||He(o))&&(s=fr(t)),M(t)?(i=te(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):o&&(i.x=We(o))),{x:p.left+s.scrollLeft-i.x,y:p.top+s.scrollTop-i.y,width:p.width,height:p.height}}function ur(e){var t=new Map,r=new Set,a=[];e.forEach(function(o){t.set(o.name,o)});function n(o){r.add(o.name);var p=[].concat(o.requires||[],o.requiresIfExists||[]);p.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&n(i)}}),a.push(o)}return e.forEach(function(o){r.has(o.name)||n(o)}),a}function lr(e){var t=ur(e);return dt.reduce(function(r,a){return r.concat(t.filter(function(n){return n.phase===a}))},[])}function vr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function dr(e){var t=e.reduce(function(r,a){var n=r[a.name];return r[a.name]=n?Object.assign({},n,a,{options:Object.assign({},n.options,a.options),data:Object.assign({},n.data,a.data)}):a,r},{});return Object.keys(t).map(function(r){return t[r]})}var tt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function we(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,a=r===void 0?[]:r,n=t.defaultOptions,o=n===void 0?tt:n;return function(s,i,c){c===void 0&&(c=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},tt,o),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},h=[],y=!1,u={state:f,setOptions:function(b){var O=typeof b=="function"?b(f.options):b;d(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:K(s)?fe(s):s.contextElement?fe(s.contextElement):[],popper:fe(i)};var A=lr(dr([].concat(a,f.options.modifiers)));return f.orderedModifiers=A.filter(function(l){return l.enabled}),w(),u.update()},forceUpdate:function(){if(!y){var b=f.elements,O=b.reference,A=b.popper;if(rt(O,A)){f.rects={reference:cr(O,pe(A),f.options.strategy==="fixed"),popper:Se(A)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(E){return f.modifiersData[E.name]=Object.assign({},E.data)});for(var l=0;l<f.orderedModifiers.length;l++){if(f.reset===!0){f.reset=!1,l=-1;continue}var m=f.orderedModifiers[l],g=m.fn,x=m.options,D=x===void 0?{}:x,P=m.name;typeof g=="function"&&(f=g({state:f,options:D,name:P,instance:u})||f)}}}},update:vr(function(){return new Promise(function(v){u.forceUpdate(),v(f)})}),destroy:function(){d(),y=!0}};if(!rt(s,i))return u;u.setOptions(c).then(function(v){!y&&c.onFirstUpdate&&c.onFirstUpdate(v)});function w(){f.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,A=O===void 0?{}:O,l=v.effect;if(typeof l=="function"){var m=l({state:f,name:b,instance:u,options:A}),g=function(){};h.push(m||g)}})}function d(){h.forEach(function(v){return v()}),h=[]}return u}}var hr=we(),mr=[Me,Ve,ke,Ce],gr=we({defaultModifiers:mr}),yr=[Me,Ve,ke,Ce,Pt,At,Dt,wt,Et],br=we({defaultModifiers:yr});const wr=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ct,afterRead:st,afterWrite:vt,applyStyles:Ce,arrow:wt,auto:ye,basePlacements:ne,beforeMain:ft,beforeRead:ot,beforeWrite:ut,bottom:S,clippingParents:at,computeStyles:ke,createPopper:br,createPopperBase:hr,createPopperLite:gr,detectOverflow:ae,end:_,eventListeners:Me,flip:At,hide:Et,left:B,main:pt,modifierPhases:dt,offset:Pt,placements:Re,popper:Z,popperGenerator:we,popperOffsets:Ve,preventOverflow:Dt,read:it,reference:nt,right:T,start:J,top:R,variationPlacements:Pe,viewport:$e,write:lt},Symbol.toStringTag,{value:"Module"}));export{wr as P,br as c};
//# sourceMappingURL=m110db13e4dc1cf62.js.map
