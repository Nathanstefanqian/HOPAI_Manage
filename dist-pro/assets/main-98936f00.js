import{d as w,b as x,r as T,az as z,a as _,o as M,q as N,w as t,i as a,j as s,x as c,_ as j,n as I,y as P,z as R,__tla as q}from"./index-12d626d1.js";import{N as S,R as n,c as y,T as W,__tla as k}from"./TabNews-2a368fc1.js";import{_ as A,__tla as B}from"./TabText.vue_vue_type_script_setup_true_lang-24f31a32.js";import C,{__tla as D}from"./TabImage-b3837482.js";import E,{__tla as F}from"./TabVoice-1cabb509.js";import G,{__tla as H}from"./TabVideo-31dd8e7d.js";import{_ as J,__tla as K}from"./TabMusic.vue_vue_type_script_setup_true_lang-1e602cfd.js";import{_ as L}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as O}from"./main-6eda7ca1.js";import{__tla as Q}from"./el-image-617e8c43.js";import{__tla as X}from"./el-image-viewer-fcd5a6f2.js";import{__tla as Y}from"./main-0c875e63.js";import{__tla as Z}from"./index.vue_vue_type_script_setup_true_lang-8de1d8de.js";import{__tla as $}from"./index-e6561b08.js";import{__tla as aa}from"./main-fb13312d.js";import{__tla as ea}from"./main.vue_vue_type_script_setup_true_lang-eacc6eea.js";import{__tla as ta}from"./index-2b42347c.js";import{__tla as la}from"./index-b34f8cb1.js";import{__tla as _a}from"./formatTime-cb061491.js";import{__tla as ra}from"./useUpload-cc9dbe48.js";import{__tla as oa}from"./useMessage-86d9ff5e.js";let V,ma=Promise.all([(()=>{try{return q}catch{}})(),(()=>{try{return k}catch{}})(),(()=>{try{return B}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return oa}catch{}})()]).then(async()=>{V=L(w({name:"WxReplySelect",__name:"main",props:{modelValue:{},newsType:{default:()=>S.Published}},emits:["update:modelValue"],setup(h,{expose:v,emit:g}){const p=h,b=g,e=x({get:()=>p.modelValue,set:u=>b("update:modelValue",u)}),f=new Map,i=T(p.modelValue.type||n.Text);return z(i,(u,l)=>{if(l===void 0||u===void 0)return;f.set(l,_(e));const o=f.get(u);if(o)e.value=o;else{let m=y(e);m.type=u,e.value=m}},{immediate:!0}),v({clear:()=>{e.value=y(e)}}),(u,l)=>{const o=j,m=I,d=P,U=R;return M(),N(U,{type:"border-card",modelValue:_(i),"onUpdate:modelValue":l[6]||(l[6]=r=>c(i)?i.value=r:null)},{default:t(()=>[a(d,{name:_(n).Text},{label:t(()=>[a(m,{align:"middle"},{default:t(()=>[a(o,{icon:"ep:document"}),s(" \u6587\u672C")]),_:1})]),default:t(()=>[a(A,{modelValue:_(e).content,"onUpdate:modelValue":l[0]||(l[0]=r=>_(e).content=r)},null,8,["modelValue"])]),_:1},8,["name"]),a(d,{name:_(n).Image},{label:t(()=>[a(m,{align:"middle"},{default:t(()=>[a(o,{icon:"ep:picture",class:"mr-5px"}),s(" \u56FE\u7247")]),_:1})]),default:t(()=>[a(C,{modelValue:_(e),"onUpdate:modelValue":l[1]||(l[1]=r=>c(e)?e.value=r:null)},null,8,["modelValue"])]),_:1},8,["name"]),a(d,{name:_(n).Voice},{label:t(()=>[a(m,{align:"middle"},{default:t(()=>[a(o,{icon:"ep:phone"}),s(" \u8BED\u97F3")]),_:1})]),default:t(()=>[a(E,{modelValue:_(e),"onUpdate:modelValue":l[2]||(l[2]=r=>c(e)?e.value=r:null)},null,8,["modelValue"])]),_:1},8,["name"]),a(d,{name:_(n).Video},{label:t(()=>[a(m,{align:"middle"},{default:t(()=>[a(o,{icon:"ep:share"}),s(" \u89C6\u9891")]),_:1})]),default:t(()=>[a(G,{modelValue:_(e),"onUpdate:modelValue":l[3]||(l[3]=r=>c(e)?e.value=r:null)},null,8,["modelValue"])]),_:1},8,["name"]),a(d,{name:_(n).News},{label:t(()=>[a(m,{align:"middle"},{default:t(()=>[a(o,{icon:"ep:reading"}),s(" \u56FE\u6587")]),_:1})]),default:t(()=>[a(W,{modelValue:_(e),"onUpdate:modelValue":l[4]||(l[4]=r=>c(e)?e.value=r:null),"news-type":u.newsType},null,8,["modelValue","news-type"])]),_:1},8,["name"]),a(d,{name:_(n).Music},{label:t(()=>[a(m,{align:"middle"},{default:t(()=>[a(o,{icon:"ep:service"}),s("\u97F3\u4E50")]),_:1})]),default:t(()=>[a(J,{modelValue:_(e),"onUpdate:modelValue":l[5]||(l[5]=r=>c(e)?e.value=r:null)},null,8,["modelValue"])]),_:1},8,["name"])]),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-1d5dc1ea"]])});export{ma as __tla,V as default};
