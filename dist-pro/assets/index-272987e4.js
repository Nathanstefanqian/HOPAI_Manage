import{d as B,l as D,r as y,f as H,O as J,o as s,c as K,i as a,w as l,a as e,B as i,q as p,j as g,F as L,D as M,_ as O,H as A,I as E,J as W,K as Z,L as G,__tla as Q}from"./index-03db6098.js";import{_ as V,__tla as X}from"./index.vue_vue_type_script_setup_true_lang-ac924d97.js";import{_ as Y,__tla as $}from"./ContentWrap.vue_vue_type_script_setup_true_lang-a0ae01cb.js";import{_ as aa,__tla as ta}from"./index-829af316.js";import{d as ea,__tla as la}from"./formatTime-c52167d0.js";import{a as ra,d as ca,s as _a,__tla as sa}from"./index-018e7270.js";import{_ as na,__tla as oa}from"./TagForm.vue_vue_type_script_setup_true_lang-49cd0081.js";import{_ as ia,__tla as pa}from"./main.vue_vue_type_script_setup_true_lang-6119647e.js";import{u as ua,__tla as ma}from"./useMessage-3de53a8e.js";import{__tla as da}from"./index-f44a5e06.js";import{__tla as fa}from"./el-card-cbdeb4d9.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as ya}from"./Dialog.vue_vue_type_style_index_0_lang-0ea1a6f5.js";import{__tla as ga}from"./index-4ac733e8.js";let v,ha=Promise.all([(()=>{try{return Q}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ga}catch{}})()]).then(async()=>{v=B({name:"MpTag",__name:"index",setup(ba){const u=ua(),{t:z}=D(),h=y(!0),b=y(0),w=y([]),t=H({pageNo:1,pageSize:10,accountId:-1}),k=y(null),N=c=>{t.accountId=c,t.pageNo=1,n()},n=async()=>{try{h.value=!0;const c=await ra(t);w.value=c.list,b.value=c.total}finally{h.value=!1}},C=(c,r)=>{var m;(m=k.value)==null||m.open(c,t.accountId,r)},F=async()=>{try{await u.confirm("\u662F\u5426\u786E\u8BA4\u540C\u6B65\u6807\u7B7E\uFF1F"),await _a(t.accountId),u.success("\u540C\u6B65\u6807\u7B7E\u6210\u529F"),await n()}catch{}};return(c,r)=>{const m=aa,I=M,x=O,d=A,P=E,S=Y,o=W,q=Z,R=V,f=J("hasPermi"),T=G;return s(),K(L,null,[a(m,{title:"\u516C\u4F17\u53F7\u6807\u7B7E",url:"https://doc.iocoder.cn/mp/tag/"}),a(S,null,{default:l(()=>[a(P,{class:"-mb-15px",model:e(t),ref:"queryFormRef",inline:!0,"label-width":"68px"},{default:l(()=>[a(I,{label:"\u516C\u4F17\u53F7",prop:"accountId"},{default:l(()=>[a(e(ia),{onChange:N})]),_:1}),a(I,null,{default:l(()=>[i((s(),p(d,{type:"primary",plain:"",onClick:r[0]||(r[0]=_=>C("create")),disabled:e(t).accountId===0},{default:l(()=>[a(x,{icon:"ep:plus",class:"mr-5px"}),g(" \u65B0\u589E ")]),_:1},8,["disabled"])),[[f,["mp:tag:create"]]]),i((s(),p(d,{type:"success",plain:"",onClick:F,disabled:e(t).accountId===0},{default:l(()=>[a(x,{icon:"ep:refresh",class:"mr-5px"}),g(" \u540C\u6B65 ")]),_:1},8,["disabled"])),[[f,["mp:tag:sync"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(S,null,{default:l(()=>[i((s(),p(q,{data:e(w)},{default:l(()=>[a(o,{label:"\u7F16\u53F7",align:"center",prop:"id"}),a(o,{label:"\u6807\u7B7E\u540D\u79F0",align:"center",prop:"name"}),a(o,{label:"\u7C89\u4E1D\u6570",align:"center",prop:"count"}),a(o,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:e(ea)},null,8,["formatter"]),a(o,{label:"\u64CD\u4F5C",align:"center"},{default:l(_=>[i((s(),p(d,{link:"",type:"primary",onClick:U=>C("update",_.row.id)},{default:l(()=>[g(" \u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[f,["mp:tag:update"]]]),i((s(),p(d,{link:"",type:"danger",onClick:U=>(async j=>{try{await u.delConfirm(),await ca(j),u.success(z("common.delSuccess")),await n()}catch{}})(_.row.id)},{default:l(()=>[g(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["mp:tag:delete"]]])]),_:1})]),_:1},8,["data"])),[[T,e(h)]]),a(R,{total:e(b),page:e(t).pageNo,"onUpdate:page":r[1]||(r[1]=_=>e(t).pageNo=_),limit:e(t).pageSize,"onUpdate:limit":r[2]||(r[2]=_=>e(t).pageSize=_),onPagination:n},null,8,["total","page","limit"])]),_:1}),a(na,{ref_key:"formRef",ref:k,onSuccess:n},null,512)],64)}}})});export{ha as __tla,v as default};