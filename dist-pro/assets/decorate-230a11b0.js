import{P as d,_ as f,__tla as v}from"./util-40f54cdd.js";import{g as h,u as w,__tla as g}from"./page-d324defa.js";import{u as b,__tla as V}from"./tagsView-1bf434ed.js";import{u as P,__tla as k}from"./useMessage-e6a37d8e.js";import{d as D,r as _,u as I,N as U,A as j,a,o as q,q as x,a3 as A,__tla as F}from"./index-16a04392.js";import{__tla as N}from"./el-card-c0206f00.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as R}from"./vuedraggable.umd-75749b29.js";import{__tla as S}from"./el-collapse-item-e9da937c.js";let n,z=Promise.all([(()=>{try{return v}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return k}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return S}catch{}})()]).then(async()=>{n=D({name:"DiyPageDecorate",__name:"decorate",setup(B){const s=P(),r=_(!1),t=_(),o=_(),m=async()=>{if(o){r.value=!0;try{await w(a(t)),s.success("\u4FDD\u5B58\u6210\u529F")}finally{r.value=!1}}},{currentRoute:u}=I(),{delView:c}=b(),i=U();return j(()=>{var l;if(t.value={id:void 0,templateId:void 0,name:"",remark:"",previewImageUrls:[],property:""},(l=o.value)==null||l.resetFields(),!i.params.id)return s.warning("\u53C2\u6570\u9519\u8BEF\uFF0C\u9875\u9762\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A\uFF01"),void c(a(u));(async e=>{r.value=!0;try{t.value=await h(e)}finally{r.value=!1}})(i.params.id)}),(l,e)=>{const p=f;return a(t)&&!a(r)?(q(),x(p,{key:0,modelValue:a(t).property,"onUpdate:modelValue":e[0]||(e[0]=y=>a(t).property=y),title:a(t).name,libs:a(d),"show-page-config":!0,"show-navigation-bar":!0,"show-tab-bar":!1,onSave:m},null,8,["modelValue","title","libs"])):A("",!0)}}})});export{z as __tla,n as default};