import{u as P,_ as b,a as z,__tla as L}from"./useTable-fe8f4859.js";import{d as k,r as v,A as j,O as w,o as n,c as x,i as r,w as l,a as t,B as C,q as R,j as U,F as q,H as A,__tla as M}from"./index-9a3dc6a8.js";import{_ as O,__tla as B}from"./ContentWrap.vue_vue_type_script_setup_true_lang-29b6dc10.js";import{_ as F,__tla as H}from"./index-977c4d69.js";import{a as i,_ as D,g as E,__tla as G}from"./MailLogDetail.vue_vue_type_script_setup_true_lang-48741d25.js";import{__tla as I}from"./Form-7f07e0db.js";import{__tla as J}from"./el-virtual-list-d0c45bb5.js";import{__tla as K}from"./el-tree-select-aa7ffcf2.js";import{__tla as N}from"./el-time-select-48760331.js";import{__tla as Q}from"./InputPassword-20542638.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as T}from"./style.css_vue_type_style_index_0_src_true_lang-1837822a.js";import{__tla as V}from"./UploadImg-5d1e6385.js";import{__tla as W}from"./el-image-viewer-9fcd8ab9.js";import{__tla as X}from"./index-669fa91c.js";import"./_commonjs-dynamic-modules-3e972b61.js";import{__tla as Y}from"./useMessage-78b6afd0.js";import{__tla as Z}from"./UploadImgs-272fb42d.js";import{__tla as $}from"./UploadImgs.vue_vue_type_style_index_0_scoped_fe640eb9_lang-784ecf7e.js";import{__tla as tt}from"./UploadFile-d506983a.js";import{__tla as at}from"./UploadFile.vue_vue_type_style_index_0_scoped_113ae07d_lang-0370ffc1.js";import{__tla as rt}from"./index-b4b95b06.js";import{__tla as _t}from"./useForm-cd2ec5fb.js";import"./download-20922b56.js";import{__tla as et}from"./el-card-a6a1b26c.js";import{__tla as lt}from"./Dialog.vue_vue_type_style_index_0_lang-63789c9e.js";import{__tla as ot}from"./Descriptions-3bac8e72.js";import{__tla as ct}from"./Descriptions.vue_vue_type_style_index_0_scoped_59d56eec_lang-45925201.js";import{__tla as mt}from"./el-descriptions-item-4912b042.js";import{__tla as st}from"./DictTag.vue_vue_type_script_lang-8b411a6b.js";import"./color-a8b4eb58.js";import{__tla as nt}from"./dict-8e2bc13b.js";import{__tla as it}from"./formatTime-62b946ce.js";import{__tla as ut}from"./index-18af3c18.js";import{__tla as pt}from"./useCrudSchemas-62c7951b.js";import"./tree-ebab458e.js";let u,ht=Promise.all([(()=>{try{return L}catch{}})(),(()=>{try{return M}catch{}})(),(()=>{try{return B}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return I}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return pt}catch{}})()]).then(async()=>{u=k({name:"SystemMailLog",__name:"index",setup(ft){const{tableObject:a,tableMethods:p}=P({getListApi:E}),{getList:h,setSearchParams:o}=p,c=v();return j(()=>{h()}),(yt,e)=>{const f=F,y=b,m=O,g=A,d=z,S=w("hasPermi");return n(),x(q,null,[r(f,{title:"\u90AE\u4EF6\u914D\u7F6E",url:"https://doc.iocoder.cn/mail"}),r(m,null,{default:l(()=>[r(y,{schema:t(i).searchSchema,onSearch:t(o),onReset:t(o)},null,8,["schema","onSearch","onReset"])]),_:1}),r(m,null,{default:l(()=>[r(d,{columns:t(i).tableColumns,data:t(a).tableList,loading:t(a).loading,pagination:{total:t(a).total},pageSize:t(a).pageSize,"onUpdate:pageSize":e[0]||(e[0]=_=>t(a).pageSize=_),currentPage:t(a).currentPage,"onUpdate:currentPage":e[1]||(e[1]=_=>t(a).currentPage=_)},{action:l(({row:_})=>[C((n(),R(g,{link:"",type:"primary",onClick:gt=>{return s=_.id,void c.value.open(s);var s}},{default:l(()=>[U(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[S,["system:mail-log:query"]]])]),_:1},8,["columns","data","loading","pagination","pageSize","currentPage"])]),_:1}),r(D,{ref_key:"detailRef",ref:c},null,512)],64)}}})});export{ht as __tla,u as default};