import{dg as o,dh as j,aM as u,di as k,dj as P,d as x,p as M,cn as O,b as m,o as _,q as p,w as e,V as L,a as d,Z as V,i as f,c as z,k as A,F as I,_ as R,j as T,t as $,__tla as q}from"./index-7b6f7d71.js";import{b as v,a as F,E as N,__tla as Z}from"./el-dropdown-item-23a0d70a.js";let h,B=Promise.all([(()=>{try{return q}catch{}})(),(()=>{try{return Z}catch{}})()]).then(async()=>{let g;g=()=>({changeLocale:async l=>{const t=o.global,c=await j(Object.assign({"../../locales/en.ts":()=>u(()=>import("./en-706ee4dd.js"),[]),"../../locales/zh-CN.ts":()=>u(()=>import("./zh-CN-d6b27568.js"),[])}),`../../locales/${l}.ts`);t.setLocaleMessage(l,c.default),(a=>{const n=k();o.mode==="legacy"?o.global.locale=a:o.global.locale.value=a,n.setCurrentLocale({lang:a}),P(a)})(l)}}),h=x({name:"LocaleDropdown",__name:"LocaleDropdown",props:{color:M.string.def("")},setup(l){const{getPrefixCls:t}=V(),c=t("locale-dropdown"),a=O(),n=m(()=>a.getLocaleMap),w=m(()=>a.getCurrentLocale),b=s=>{if(s===d(w).lang)return;window.location.reload(),a.setCurrentLocale({lang:s});const{changeLocale:i}=g();i(s)};return(s,i)=>{const C=R,y=N,E=F,D=v;return _(),p(D,{class:L(d(c)),trigger:"click",onCommand:b},{dropdown:e(()=>[f(E,null,{default:e(()=>[(_(!0),z(I,null,A(d(n),r=>(_(),p(y,{key:r.lang,command:r.lang},{default:e(()=>[T($(r.name),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:e(()=>[f(C,{class:L([s.$attrs.class,"cursor-pointer !p-0"]),color:l.color,size:18,icon:"ion:language-sharp"},null,8,["class","color"])]),_:1},8,["class"])}}})});export{h as _,B as __tla};
