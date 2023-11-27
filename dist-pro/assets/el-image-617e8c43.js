import{aE as te,aM as B,bY as se,aU as ne,d as M,bn as oe,aG as ie,a$ as re,dq as ce,r as c,b as u,b7 as f,az as ue,A as de,o as i,c as d,aJ as x,g as N,t as ve,a,V as g,F as O,ah as pe,a3 as m,q as fe,w as me,au as ye,aK as ge,al as we,dr as he,aW as _e,ds as be,ct as q,dt as ke,du as Se,aL as xe,__tla as ze}from"./index-12d626d1.js";import{E as Ee,__tla as Ce}from"./el-image-viewer-fcd5a6f2.js";let P,Le=Promise.all([(()=>{try{return ze}catch{}})(),(()=>{try{return Ce}catch{}})()]).then(async()=>{const T=te({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:B([String,Object])},previewSrcList:{type:B(Array),default:()=>se([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),K={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>ne(n),close:()=>!0,show:()=>!0},Y=["src","loading"],j={key:0},F=M({name:"ElImage",inheritAttrs:!1});P=xe(ge(M({...F,props:T,emits:K,setup(n,{emit:v}){const l=n;let z="";const{t:R}=oe(),o=ie("image"),D=re(),G=ce(),w=c(),p=c(!1),r=c(!0),h=c(!1),y=c(),s=c(),H=f&&"loading"in HTMLImageElement.prototype;let _,b;const J=u(()=>[o.e("inner"),k.value&&o.e("preview"),r.value&&o.is("loading")]),U=u(()=>D.style),V=u(()=>{const{fit:e}=l;return f&&e?{objectFit:e}:{}}),k=u(()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0}),W=u(()=>{const{previewSrcList:e,initialIndex:t}=l;let A=t;return t>e.length-1&&(A=0),A}),E=u(()=>l.loading!=="eager"&&(!H&&l.loading==="lazy"||l.lazy)),S=()=>{f&&(r.value=!0,p.value=!1,w.value=l.src)};function Q(e){r.value=!1,p.value=!1,v("load",e)}function X(e){r.value=!1,p.value=!0,v("error",e)}function C(){ke(y.value,s.value)&&(S(),$())}const L=Se(C,200,!0);async function I(){var e;if(!f)return;await we();const{scrollContainer:t}=l;he(t)?s.value=t:_e(t)&&t!==""?s.value=(e=document.querySelector(t))!=null?e:void 0:y.value&&(s.value=be(y.value)),s.value&&(_=q(s,"scroll",L),setTimeout(()=>C(),100))}function $(){f&&s.value&&L&&(_==null||_(),s.value=void 0)}function Z(e){if(e.ctrlKey)return e.deltaY<0||e.deltaY>0?(e.preventDefault(),!1):void 0}function ee(){k.value&&(b=q("wheel",Z,{passive:!1}),z=document.body.style.overflow,document.body.style.overflow="hidden",h.value=!0,v("show"))}function ae(){b==null||b(),document.body.style.overflow=z,h.value=!1,v("close")}function le(e){v("switch",e)}return ue(()=>l.src,()=>{E.value?(r.value=!0,p.value=!1,$(),I()):S()}),de(()=>{E.value?I():S()}),(e,t)=>(i(),d("div",{ref_key:"container",ref:y,class:g([a(o).b(),e.$attrs.class]),style:ye(a(U))},[p.value?x(e.$slots,"error",{key:0},()=>[N("div",{class:g(a(o).e("error"))},ve(a(R)("el.image.error")),3)]):(i(),d(O,{key:1},[w.value!==void 0?(i(),d("img",pe({key:0},a(G),{src:w.value,loading:e.loading,style:a(V),class:a(J),onClick:ee,onLoad:Q,onError:X}),null,16,Y)):m("v-if",!0),r.value?(i(),d("div",{key:1,class:g(a(o).e("wrapper"))},[x(e.$slots,"placeholder",{},()=>[N("div",{class:g(a(o).e("placeholder"))},null,2)])],2)):m("v-if",!0)],64)),a(k)?(i(),d(O,{key:2},[h.value?(i(),fe(a(Ee),{key:0,"z-index":e.zIndex,"initial-index":a(W),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:ae,onSwitch:le},{default:me(()=>[e.$slots.viewer?(i(),d("div",j,[x(e.$slots,"viewer")])):m("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):m("v-if",!0)],64)):m("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]))});export{P as E,Le as __tla};