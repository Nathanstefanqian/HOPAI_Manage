import{u as M,_ as w,a as A,__tla as F}from"./useTable-72adb4e4.js";import{_ as U,__tla as j}from"./ContentWrap.vue_vue_type_script_setup_true_lang-6c4b8253.js";import{d as O,r as P,A as T,O as q,o as c,c as B,i as _,w as e,a as t,B as n,q as i,j as p,F as H,_ as D,H as E,__tla as G}from"./index-12d626d1.js";import{_ as I,__tla as J}from"./index-9e47f224.js";import{a as b,_ as K,__tla as N}from"./MailTemplateForm.vue_vue_type_script_setup_true_lang-e444e38d.js";import{a as Q,d as V,__tla as W}from"./index-797bcd5a.js";import{_ as X,__tla as Y}from"./MailTemplateSendForm.vue_vue_type_script_setup_true_lang-2e2b4b3f.js";import{__tla as Z}from"./Form-32b0aca4.js";import{__tla as $}from"./el-virtual-list-37d8173f.js";import{__tla as tt}from"./el-tree-select-15cda898.js";import{__tla as at}from"./el-time-select-7b78d2ed.js";import{__tla as rt}from"./InputPassword-ef692d38.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as _t}from"./style.css_vue_type_style_index_0_src_true_lang-ce0614dc.js";import{__tla as et}from"./UploadImg-33fbae3b.js";import{__tla as lt}from"./el-image-viewer-fcd5a6f2.js";import{__tla as ot}from"./aliyun-oss-sdk-e58d75ca.js";import"./_commonjs-dynamic-modules-3e972b61.js";import{__tla as ct}from"./useMessage-86d9ff5e.js";import{__tla as mt}from"./UploadImgs-41c90ae7.js";import{__tla as st}from"./UploadImgs.vue_vue_type_style_index_0_scoped_5a637087_lang-2428e605.js";import{__tla as nt}from"./UploadFile-0f10404d.js";import{__tla as it}from"./UploadFile.vue_vue_type_style_index_0_scoped_113ae07d_lang-b7de77f1.js";import{__tla as pt}from"./index-e6561b08.js";import{__tla as ut}from"./useForm-894cef10.js";import"./download-20922b56.js";import{__tla as yt}from"./el-card-9cf947e7.js";import{__tla as ft}from"./Dialog.vue_vue_type_style_index_0_lang-28b4751a.js";import{__tla as ht}from"./formatTime-cb061491.js";import{__tla as dt}from"./index-a1651c78.js";import{__tla as gt}from"./formRules-af5f0ee4.js";import{__tla as St}from"./dict-8bf7f732.js";import{__tla as kt}from"./useCrudSchemas-c0312554.js";import"./tree-ebab458e.js";import{__tla as Ct}from"./DictTag.vue_vue_type_script_lang-297052e2.js";import"./color-a8b4eb58.js";let v,Pt=Promise.all([(()=>{try{return F}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return ht}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return Ct}catch{}})()]).then(async()=>{v=O({name:"SystemMailTemplate",__name:"index",setup(bt){const{tableObject:l,tableMethods:u}=M({getListApi:Q,delListApi:V}),{getList:y,setSearchParams:f}=u,h=P(),d=(S,a)=>{h.value.open(S,a)},g=P();return T(()=>{y()}),(S,a)=>{const z=I,L=D,m=E,R=w,k=U,x=A,s=q("hasPermi");return c(),B(H,null,[_(z,{title:"\u90AE\u4EF6\u914D\u7F6E",url:"https://doc.iocoder.cn/mail"}),_(k,null,{default:e(()=>[_(R,{schema:t(b).searchSchema,onSearch:t(f),onReset:t(f)},{actionMore:e(()=>[n((c(),i(m,{type:"primary",plain:"",onClick:a[0]||(a[0]=r=>d("create"))},{default:e(()=>[_(L,{icon:"ep:plus",class:"mr-5px"}),p(" \u65B0\u589E ")]),_:1})),[[s,["system:mail-account:create"]]])]),_:1},8,["schema","onSearch","onReset"])]),_:1}),_(k,null,{default:e(()=>[_(x,{columns:t(b).tableColumns,data:t(l).tableList,loading:t(l).loading,pagination:{total:t(l).total},pageSize:t(l).pageSize,"onUpdate:pageSize":a[1]||(a[1]=r=>t(l).pageSize=r),currentPage:t(l).currentPage,"onUpdate:currentPage":a[2]||(a[2]=r=>t(l).currentPage=r)},{action:e(({row:r})=>[n((c(),i(m,{link:"",type:"primary",onClick:C=>{return o=r.id,void g.value.open(o);var o}},{default:e(()=>[p(" \u6D4B\u8BD5 ")]),_:2},1032,["onClick"])),[[s,["system:mail-template:send-mail"]]]),n((c(),i(m,{link:"",type:"primary",onClick:C=>d("update",r.id)},{default:e(()=>[p(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[s,["system:mail-template:update"]]]),n((c(),i(m,{link:"",type:"danger",onClick:C=>{return o=r.id,void u.delList(o,!1);var o}},{default:e(()=>[p(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[s,["system:mail-template:delete"]]])]),_:1},8,["columns","data","loading","pagination","pageSize","currentPage"])]),_:1}),_(K,{ref_key:"formRef",ref:h,onSuccess:t(y)},null,8,["onSuccess"]),_(X,{ref_key:"sendFormRef",ref:g},null,512)],64)}}})});export{Pt as __tla,v as default};