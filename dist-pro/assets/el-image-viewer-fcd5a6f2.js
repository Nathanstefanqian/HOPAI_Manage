import{cf as me,aA as ve,aE as pe,aM as be,bY as ge,aU as X,d as W,cg as j,ch as ke,ci as _e,bn as we,aG as xe,cj as Ie,r as z,ck as he,c5 as ye,b as _,az as q,al as ze,A as Ce,o as C,q as G,i,w as b,g as v,V as f,a,au as U,be as Ne,a3 as N,aI as w,cl as Oe,c as S,F as J,cm as Te,cn as Ae,co as Le,cp as Ye,aH as Ee,cq as Re,cr as Xe,k as Se,B as Be,a2 as Fe,aJ as $e,Y as Me,cs as De,aK as He,ct as L,bk as y,cu as Pe,aL as Ve,__tla as We}from"./index-12d626d1.js";let K,O,je=Promise.all([(()=>{try{return We}catch{}})()]).then(async()=>{O=function(g,T,m){var n=!0,p=!0;if(typeof g!="function")throw new TypeError("Expected a function");return me(m)&&(n="leading"in m?!!m.leading:n,p="trailing"in m?!!m.trailing:p),ve(g,T,{leading:n,maxWait:T,trailing:p})};const Q=pe({urlList:{type:be(Array),default:()=>ge([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),Z={close:()=>!0,switch:g=>X(g),rotate:g=>X(g)},ee=["src"],ae=W({name:"ElImageViewer"});K=Ve(He(W({...ae,props:Q,emits:Z,setup(g,{expose:T,emit:m}){const n=g,p={CONTAIN:{name:"contain",icon:j(ke)},ORIGINAL:{name:"original",icon:j(_e)}},{t:se}=we(),l=xe("image-viewer"),{nextZIndex:ne}=Ie(),Y=z(),B=z([]),F=he(),I=z(!0),k=z(n.initialIndex),A=ye(p.CONTAIN),t=z({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),le=_(()=>{const{urlList:e}=n;return e.length<=1}),$=_(()=>k.value===0),M=_(()=>k.value===n.urlList.length-1),te=_(()=>n.urlList[k.value]),oe=_(()=>[l.e("btn"),l.e("prev"),l.is("disabled",!n.infinite&&$.value)]),ie=_(()=>[l.e("btn"),l.e("next"),l.is("disabled",!n.infinite&&M.value)]),ce=_(()=>{const{scale:e,deg:s,offsetX:o,offsetY:u,enableTransition:c}=t.value;let r=o/e,d=u/e;switch(s%360){case 90:case-270:[r,d]=[d,-r];break;case 180:case-180:[r,d]=[-r,-d];break;case 270:case-90:[r,d]=[-d,r]}const h={transform:`scale(${e}) rotate(${s}deg) translate(${r}px, ${d}px)`,transition:c?"transform .3s":""};return A.value.name===p.CONTAIN.name&&(h.maxWidth=h.maxHeight="100%"),h}),ue=_(()=>X(n.zIndex)?n.zIndex:ne());function E(){F.stop(),m("close")}function re(){I.value=!1}function de(e){I.value=!1,e.target.alt=se("el.image.error")}function fe(e){if(I.value||e.button!==0||!Y.value)return;t.value.enableTransition=!1;const{offsetX:s,offsetY:o}=t.value,u=e.pageX,c=e.pageY,r=O(h=>{t.value={...t.value,offsetX:s+h.pageX-u,offsetY:o+h.pageY-c}}),d=L(document,"mousemove",r);L(document,"mouseup",()=>{d()}),e.preventDefault()}function D(){t.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function H(){if(I.value)return;const e=Pe(p),s=Object.values(p),o=A.value.name,u=(s.findIndex(c=>c.name===o)+1)%e.length;A.value=p[e[u]],D()}function R(e){const s=n.urlList.length;k.value=(e+s)%s}function P(){$.value&&!n.infinite||R(k.value-1)}function V(){M.value&&!n.infinite||R(k.value+1)}function x(e,s={}){if(I.value)return;const{minScale:o,maxScale:u}=n,{zoomRate:c,rotateDeg:r,enableTransition:d}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...s};switch(e){case"zoomOut":t.value.scale>o&&(t.value.scale=Number.parseFloat((t.value.scale/c).toFixed(3)));break;case"zoomIn":t.value.scale<u&&(t.value.scale=Number.parseFloat((t.value.scale*c).toFixed(3)));break;case"clockwise":t.value.deg+=r,m("rotate",t.value.deg);break;case"anticlockwise":t.value.deg-=r,m("rotate",t.value.deg)}t.value.enableTransition=d}return q(te,()=>{ze(()=>{const e=B.value[0];e!=null&&e.complete||(I.value=!0)})}),q(k,e=>{D(),m("switch",e)}),Ce(()=>{var e,s;(function(){const o=O(c=>{switch(c.code){case y.esc:n.closeOnPressEscape&&E();break;case y.space:H();break;case y.left:P();break;case y.up:x("zoomIn");break;case y.right:V();break;case y.down:x("zoomOut")}}),u=O(c=>{x((c.deltaY||c.deltaX)<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});F.run(()=>{L(document,"keydown",o),L(document,"wheel",u)})})(),(s=(e=Y.value)==null?void 0:e.focus)==null||s.call(e)}),T({setActiveItem:R}),(e,s)=>(C(),G(De,{to:"body",disabled:!e.teleported},[i(Me,{name:"viewer-fade",appear:""},{default:b(()=>[v("div",{ref_key:"wrapper",ref:Y,tabindex:-1,class:f(a(l).e("wrapper")),style:U({zIndex:a(ue)})},[v("div",{class:f(a(l).e("mask")),onClick:s[0]||(s[0]=Ne(o=>e.hideOnClickModal&&E(),["self"]))},null,2),N(" CLOSE "),v("span",{class:f([a(l).e("btn"),a(l).e("close")]),onClick:E},[i(a(w),null,{default:b(()=>[i(a(Oe))]),_:1})],2),N(" ARROW "),a(le)?N("v-if",!0):(C(),S(J,{key:0},[v("span",{class:f(a(oe)),onClick:P},[i(a(w),null,{default:b(()=>[i(a(Te))]),_:1})],2),v("span",{class:f(a(ie)),onClick:V},[i(a(w),null,{default:b(()=>[i(a(Ae))]),_:1})],2)],64)),N(" ACTIONS "),v("div",{class:f([a(l).e("btn"),a(l).e("actions")])},[v("div",{class:f(a(l).e("actions__inner"))},[i(a(w),{onClick:s[1]||(s[1]=o=>x("zoomOut"))},{default:b(()=>[i(a(Le))]),_:1}),i(a(w),{onClick:s[2]||(s[2]=o=>x("zoomIn"))},{default:b(()=>[i(a(Ye))]),_:1}),v("i",{class:f(a(l).e("actions__divider"))},null,2),i(a(w),{onClick:H},{default:b(()=>[(C(),G(Ee(a(A).icon)))]),_:1}),v("i",{class:f(a(l).e("actions__divider"))},null,2),i(a(w),{onClick:s[3]||(s[3]=o=>x("anticlockwise"))},{default:b(()=>[i(a(Re))]),_:1}),i(a(w),{onClick:s[4]||(s[4]=o=>x("clockwise"))},{default:b(()=>[i(a(Xe))]),_:1})],2)],2),N(" CANVAS "),v("div",{class:f(a(l).e("canvas"))},[(C(!0),S(J,null,Se(e.urlList,(o,u)=>Be((C(),S("img",{ref_for:!0,ref:c=>B.value[u]=c,key:o,src:o,style:U(a(ce)),class:f(a(l).e("img")),onLoad:re,onError:de,onMousedown:fe},null,46,ee)),[[Fe,u===k.value]])),128))],2),$e(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]))});export{K as E,je as __tla,O as t};
