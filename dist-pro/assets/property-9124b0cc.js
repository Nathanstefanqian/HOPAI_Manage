import{d as S,o as i,c as B,i as l,w as t,a as o,F as W,k as Y,q as _,g as m,t as Z,j as n,a3 as h,_ as C,M as X,C as $,D as O,ax as ll,af as el,T as al,H as tl,ay as ol,I as sl,__tla as dl}from"./index-75dbf65e.js";import{E as rl,__tla as ul}from"./el-text-c35f8040.js";import{_ as ml,__tla as nl}from"./UploadImg-4e956a8c.js";import{_ as il,__tla as cl}from"./index-b625e78e.js";import{d as _l,__tla as pl}from"./vuedraggable.umd-72abb4a0.js";import{u as fl,T as D,__tla as yl}from"./util-2cd93186.js";import{__tla as bl}from"./el-image-viewer-212a5d62.js";import{__tla as hl}from"./useMessage-116f318e.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as Vl}from"./el-card-8a9cc7c3.js";import{__tla as xl}from"./el-collapse-item-405fed73.js";let E,gl=Promise.all([(()=>{try{return dl}catch{}})(),(()=>{try{return ul}catch{}})(),(()=>{try{return nl}catch{}})(),(()=>{try{return cl}catch{}})(),(()=>{try{return pl}catch{}})(),(()=>{try{return yl}catch{}})(),(()=>{try{return bl}catch{}})(),(()=>{try{return hl}catch{}})(),(()=>{try{return Vl}catch{}})(),(()=>{try{return xl}catch{}})()]).then(async()=>{let V,x,g,v,w,U,k;V={class:"tab-bar"},x={class:"flex items-center justify-between"},g={class:"mb-4px flex flex-row gap-4px rounded bg-gray-100 p-8px"},v={class:"flex flex-col items-start justify-between"},w={class:"w-full flex flex-col"},U={class:"m-b-8px flex items-center justify-around"},k={class:"flex flex-col items-center justify-between"},E=S({name:"TabBarProperty",__name:"property",props:{modelValue:{}},emits:["update:modelValue"],setup(F,{emit:H}){const P=F,q=H,{formData:e}=fl(P.modelValue,q),M=()=>{var r,s;(s=(r=e==null?void 0:e.value)==null?void 0:r.items)==null||s.push({})},A=()=>{const r=D.find(s=>s.id===e.value.theme);r!=null&&r.color&&(e.value.style.activeColor=r.color)};return(r,s)=>{const p=C,G=X,J=$,d=O,f=il,T=ll,K=el,y=ml,c=rl,j=al,L=tl,N=ol,Q=sl;return i(),B("div",V,[l(Q,{model:o(e),"label-width":"80px"},{default:t(()=>[l(d,{label:"\u4E3B\u9898",prop:"theme"},{default:t(()=>[l(J,{modelValue:o(e).theme,"onUpdate:modelValue":s[0]||(s[0]=a=>o(e).theme=a),onChange:A},{default:t(()=>[(i(!0),B(W,null,Y(o(D),(a,b)=>(i(),_(G,{key:b,label:a.name,value:a.id},{default:t(()=>[m("div",x,[l(p,{icon:a.icon,color:a.color},null,8,["icon","color"]),m("span",null,Z(a.name),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"\u9ED8\u8BA4\u989C\u8272"},{default:t(()=>[l(f,{modelValue:o(e).style.color,"onUpdate:modelValue":s[1]||(s[1]=a=>o(e).style.color=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u9009\u4E2D\u989C\u8272"},{default:t(()=>[l(f,{modelValue:o(e).style.activeColor,"onUpdate:modelValue":s[2]||(s[2]=a=>o(e).style.activeColor=a)},null,8,["modelValue"])]),_:1}),l(d,{label:"\u5BFC\u822A\u80CC\u666F"},{default:t(()=>[l(K,{modelValue:o(e).style.bgType,"onUpdate:modelValue":s[3]||(s[3]=a=>o(e).style.bgType=a)},{default:t(()=>[l(T,{label:"color"},{default:t(()=>[n("\u7EAF\u8272")]),_:1}),l(T,{label:"img"},{default:t(()=>[n("\u56FE\u7247")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(e).style.bgType==="color"?(i(),_(d,{key:0,label:"\u9009\u62E9\u989C\u8272"},{default:t(()=>[l(f,{modelValue:o(e).style.bgColor,"onUpdate:modelValue":s[4]||(s[4]=a=>o(e).style.bgColor=a)},null,8,["modelValue"])]),_:1})):h("",!0),o(e).style.bgType==="img"?(i(),_(d,{key:1,label:"\u9009\u62E9\u56FE\u7247"},{default:t(()=>[l(y,{modelValue:o(e).style.bgImg,"onUpdate:modelValue":s[5]||(s[5]=a=>o(e).style.bgImg=a),width:"100%",height:"50px",class:"min-w-200px"},{tip:t(()=>[n(" \u5EFA\u8BAE\u5C3A\u5BF8 375 * 50 ")]),_:1},8,["modelValue"])]),_:1})):h("",!0),l(c,{tag:"p"},{default:t(()=>[n("\u56FE\u6807\u8BBE\u7F6E")]),_:1}),l(c,{type:"info",size:"small"},{default:t(()=>[n(" \u62D6\u52A8\u5DE6\u4E0A\u89D2\u7684\u5C0F\u5706\u70B9\u53EF\u5BF9\u5176\u6392\u5E8F, \u56FE\u6807\u5EFA\u8BAE\u5C3A\u5BF8 44*44 ")]),_:1}),l(o(_l),{list:o(e).items,"item-key":"index",forceFallback:!0,animation:200,handle:".drag-icon",class:"m-t-8px"},{item:t(({element:a,index:b})=>[m("div",g,[m("div",v,[l(p,{icon:"ic:round-drag-indicator",class:"drag-icon cursor-move"}),o(e).items.length>1?(i(),_(p,{key:0,icon:"ep:delete",class:"cursor-pointer text-red-5",onClick:u=>(R=>{var I,z;(z=(I=e==null?void 0:e.value)==null?void 0:I.items)==null||z.splice(R,1)})(b)},null,8,["onClick"])):h("",!0)]),m("div",w,[m("div",U,[m("div",k,[l(y,{modelValue:a.iconUrl,"onUpdate:modelValue":u=>a.iconUrl=u,width:"40px",height:"40px","show-delete":!1,"show-btn-text":!1},null,8,["modelValue","onUpdate:modelValue"]),l(c,{size:"small"},{default:t(()=>[n("\u9ED8\u8BA4\u56FE\u7247")]),_:1})]),m("div",null,[l(y,{modelValue:a.activeIconUrl,"onUpdate:modelValue":u=>a.activeIconUrl=u,width:"40px",height:"40px","show-delete":!1,"show-btn-text":!1},null,8,["modelValue","onUpdate:modelValue"]),l(c,null,{default:t(()=>[n("\u9009\u4E2D\u56FE\u7247")]),_:1})])]),l(d,{prop:"text","label-width":"0",class:"m-b-8px!"},{default:t(()=>[l(j,{modelValue:a.text,"onUpdate:modelValue":u=>a.text=u,placeholder:"\u8BF7\u8F93\u5165\u6587\u5B57"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{prop:"url","label-width":"0",class:"m-b-0!"},{default:t(()=>[l(j,{modelValue:a.url,"onUpdate:modelValue":u=>a.url=u,placeholder:"\u8BF7\u9009\u62E9\u94FE\u63A5"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)])])]),_:1},8,["list"]),l(d,{"label-width":"0"},{default:t(()=>[l(N,{content:"\u6700\u591A\u6DFB\u52A05\u4E2A"},{default:t(()=>[l(L,{onClick:M,class:"m-b-16px w-full",type:"primary",plain:"",disabled:o(e).items.length>=5},{default:t(()=>[n(" \u6DFB\u52A0\u5BFC\u822A ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["model"])])}}})});export{gl as __tla,E as default};