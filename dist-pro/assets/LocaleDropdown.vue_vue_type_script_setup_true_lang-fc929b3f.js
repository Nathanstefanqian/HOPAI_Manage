import{d as w,U as T,r as j,o as d,q as L,a as o,x,V as b,Z as C,bI as O,d1 as u,d2 as z,d3 as y,d4 as A,d5 as M,p as R,c6 as S,b as k,w as p,i as D,c as U,k as $,F as q,_ as F,j as N,t as Z,__tla as B}from"./index-12d626d1.js";import{u as I,__tla as G}from"./useIcon-e31c55fc.js";import{_ as H}from"./_plugin-vue_export-helper-1b428a4d.js";import{b as J,a as K,E as Q,__tla as W}from"./el-dropdown-item-4a76961d.js";let V,E,X=Promise.all([(()=>{try{return B}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return W}catch{}})()]).then(async()=>{let i,v;i="var(--el-color-black)",V=H(w({name:"ThemeSwitch",__name:"ThemeSwitch",setup(l){const{getPrefixCls:s}=C(),t=s("theme-switch"),a=I({icon:"emojione-monotone:sun",color:"#fde047"}),c=I({icon:"emojione-monotone:crescent-moon",color:"#fde047"}),_=T(),n=j(_.getIsDark),e=r=>{_.setIsDark(r)};return(r,m)=>{const g=O;return d(),L(g,{modelValue:o(n),"onUpdate:modelValue":m[0]||(m[0]=f=>x(n)?n.value=f:null),"active-color":i,"active-icon":o(a),"border-color":i,class:b(o(t)),"inactive-color":i,"inactive-icon":o(c),"inline-prompt":"",onChange:e},null,8,["modelValue","active-icon","class","inactive-icon"])}}}),[["__scopeId","data-v-02db50c9"]]),v=()=>({changeLocale:async l=>{const s=u.global,t=await z(Object.assign({"../../locales/en.ts":()=>y(()=>import("./en-706ee4dd.js"),[]),"../../locales/zh-CN.ts":()=>y(()=>import("./zh-CN-8f027195.js"),[])}),`../../locales/${l}.ts`);s.setLocaleMessage(l,t.default),(a=>{const c=A();u.mode==="legacy"?u.global.locale=a:u.global.locale.value=a,c.setCurrentLocale({lang:a}),M(a)})(l)}}),E=w({name:"LocaleDropdown",__name:"LocaleDropdown",props:{color:R.string.def("")},setup(l){const{getPrefixCls:s}=C(),t=s("locale-dropdown"),a=S(),c=k(()=>a.getLocaleMap),_=k(()=>a.getCurrentLocale),n=e=>{if(e===o(_).lang)return;window.location.reload(),a.setCurrentLocale({lang:e});const{changeLocale:r}=v();r(e)};return(e,r)=>{const m=F,g=Q,f=K,P=J;return d(),L(P,{class:b(o(t)),trigger:"click",onCommand:n},{dropdown:p(()=>[D(f,null,{default:p(()=>[(d(!0),U(q,null,$(o(c),h=>(d(),L(g,{key:h.lang,command:h.lang},{default:p(()=>[N(Z(h.name),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:p(()=>[D(m,{class:b([e.$attrs.class,"cursor-pointer !p-0"]),color:l.color,size:18,icon:"ion:language-sharp"},null,8,["class","color"])]),_:1},8,["class"])}}})});export{V as T,E as _,X as __tla};
