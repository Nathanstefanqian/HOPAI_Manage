import{d as E,c7 as H,b as P,r as b,f as S,o as n,c as w,a as r,g as I,t as J,i as a,w as l,q as N,j as k,x as O,n as W,_ as $,H as D,cd as F,E as G,b3 as K,$ as L,a0 as Q,__tla as R}from"./index-9a3dc6a8.js";import{W as X,__tla as Y}from"./main-68405b55.js";import Z,{__tla as aa}from"./main-9b3a4b22.js";import{u as ta,U as ea,__tla as la}from"./useUpload-39d248a6.js";import{u as ra,__tla as _a}from"./useMessage-78b6afd0.js";import{_ as sa}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as ca}from"./index.vue_vue_type_script_setup_true_lang-30f8ef1e.js";import{__tla as oa}from"./index-b4b95b06.js";import{__tla as ua}from"./main-b95b6a24.js";import{__tla as ia}from"./el-image-5e367cc1.js";import{__tla as na}from"./el-image-viewer-9fcd8ab9.js";import{__tla as ma}from"./main.vue_vue_type_script_setup_true_lang-da7b4644.js";import{__tla as da}from"./index-177e9bd7.js";import{__tla as pa}from"./index-9f9d9d6a.js";import{__tla as fa}from"./formatTime-62b946ce.js";let g,ya=Promise.all([(()=>{try{return R}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return fa}catch{}})()]).then(async()=>{let m,d,p;m={key:0,class:"select-item2"},d={class:"item-name"},p=(_=>(L("data-v-4ce36eb4"),_=_(),Q(),_))(()=>I("div",{class:"el-upload__tip"}," \u683C\u5F0F\u652F\u6301 mp3/wma/wav/amr\uFF0C\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 2M\uFF0C\u64AD\u653E\u957F\u5EA6\u4E0D\u8D85\u8FC7 60s ",-1)),g=sa(E({__name:"TabVoice",props:{modelValue:{}},emits:["update:modelValue"],setup(_,{emit:j}){const x=ra(),M={Authorization:"Bearer "+H()},C=_,T=j,e=P({get:()=>C.modelValue,set:t=>T("update:modelValue",t)}),s=b(!1),f=b([]),o=S({accountId:e.value.accountId,type:"voice",title:"",introduction:""}),U=t=>ta(ea.Voice,10)(t),q=t=>{if(t.code!==0)return x.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+t.msg),!1;f.value=[],o.title="",o.introduction="",y(t.data)},z=()=>{e.value.mediaId=null,e.value.url=null,e.value.name=null},y=t=>{s.value=!1,e.value.mediaId=t.mediaId,e.value.url=t.url,e.value.name=t.name};return(t,c)=>{const u=W,h=$,i=D,A=F,v=G,B=K;return n(),w("div",null,[r(e).url?(n(),w("div",m,[I("p",d,J(r(e).name),1),a(u,{class:"ope-row",justify:"center"},{default:l(()=>[a(r(Z),{url:r(e).url},null,8,["url"])]),_:1}),a(u,{class:"ope-row",justify:"center"},{default:l(()=>[a(i,{type:"danger",circle:"",onClick:z},{default:l(()=>[a(h,{icon:"ep:delete"})]),_:1})]),_:1})])):(n(),N(u,{key:1,style:{"text-align":"center"}},{default:l(()=>[a(v,{span:12,class:"col-select"},{default:l(()=>[a(i,{type:"success",onClick:c[0]||(c[0]=V=>s.value=!0)},{default:l(()=>[k(" \u7D20\u6750\u5E93\u9009\u62E9"),a(h,{icon:"ep:circle-check"})]),_:1}),a(A,{title:"\u9009\u62E9\u8BED\u97F3",modelValue:r(s),"onUpdate:modelValue":c[1]||(c[1]=V=>O(s)?s.value=V:null),width:"90%","append-to-body":"","destroy-on-close":""},{default:l(()=>[a(r(X),{type:"voice","account-id":r(e).accountId,onSelectMaterial:y},null,8,["account-id"])]),_:1},8,["modelValue"])]),_:1}),a(v,{span:12,class:"col-add"},{default:l(()=>[a(B,{action:"/admin-api/mp/material/upload-temporary",headers:M,multiple:"",limit:1,"file-list":r(f),data:r(o),"before-upload":U,"on-success":q},{tip:l(()=>[p]),default:l(()=>[a(i,{type:"primary"},{default:l(()=>[k("\u70B9\u51FB\u4E0A\u4F20")]),_:1})]),_:1},8,["file-list","data"])]),_:1})]),_:1}))])}}}),[["__scopeId","data-v-4ce36eb4"]])});export{ya as __tla,g as default};