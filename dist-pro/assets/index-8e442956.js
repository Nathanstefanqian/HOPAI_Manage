import{d as R,u as Y,r as _,f as q,A as z,o as w,c as E,i as a,w as t,a as e,P as F,j as i,B as H,q as K,F as M,T as A,D as L,G as j,_ as G,H as J,I as O,J as Q,K as W,L as X,__tla as Z}from"./index-75dbf65e.js";import{_ as $,__tla as aa}from"./index.vue_vue_type_script_setup_true_lang-10fe25a0.js";import{_ as ea,__tla as ta}from"./DictTag.vue_vue_type_script_lang-c4c2c941.js";import{_ as la,__tla as ra}from"./ContentWrap.vue_vue_type_script_setup_true_lang-5fc9c47a.js";import{D as na,__tla as oa}from"./dict-0c18406e.js";import{d as sa,__tla as _a}from"./formatTime-69bc332e.js";import{h as pa,__tla as ca}from"./index-e5764dd0.js";import{_ as ia,__tla as ma}from"./TaskDetail.vue_vue_type_script_setup_true_lang-746c1afe.js";import{__tla as ua}from"./index-7b240998.js";import"./color-a8b4eb58.js";import{__tla as da}from"./el-card-8a9cc7c3.js";import{__tla as fa}from"./Dialog.vue_vue_type_style_index_0_lang-0602d223.js";import{__tla as ya}from"./el-descriptions-item-736f2389.js";let T,ha=Promise.all([(()=>{try{return Z}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ya}catch{}})()]).then(async()=>{T=R({name:"BpmTodoTask",__name:"index",setup(ga){const{push:x}=Y(),m=_(!0),y=_(0),h=_([]),r=q({pageNo:1,pageSize:10,name:"",createTime:[]}),g=_(),p=async()=>{m.value=!0;try{const d=await pa(r);h.value=d.list,y.value=d.total}finally{m.value=!1}},u=()=>{r.pageNo=1,p()},C=()=>{g.value.resetFields(),u()},b=_();return z(()=>{p()}),(d,n)=>{const S=A,f=L,D=j,v=G,c=J,I=O,k=la,o=Q,N=ea,U=W,P=$,V=X;return w(),E(M,null,[a(k,null,{default:t(()=>[a(I,{ref_key:"queryFormRef",ref:g,inline:!0,model:e(r),class:"-mb-15px","label-width":"68px"},{default:t(()=>[a(f,{label:"\u4EFB\u52A1\u540D\u79F0",prop:"name"},{default:t(()=>[a(S,{modelValue:e(r).name,"onUpdate:modelValue":n[0]||(n[0]=l=>e(r).name=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0",onKeyup:F(u,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),a(f,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:t(()=>[a(D,{modelValue:e(r).createTime,"onUpdate:modelValue":n[1]||(n[1]=l=>e(r).createTime=l),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px","end-placeholder":"\u7ED3\u675F\u65E5\u671F","start-placeholder":"\u5F00\u59CB\u65E5\u671F",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","default-time"])]),_:1}),a(f,null,{default:t(()=>[a(c,{onClick:u},{default:t(()=>[a(v,{class:"mr-5px",icon:"ep:search"}),i(" \u641C\u7D22 ")]),_:1}),a(c,{onClick:C},{default:t(()=>[a(v,{class:"mr-5px",icon:"ep:refresh"}),i(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(k,null,{default:t(()=>[H((w(),K(U,{data:e(h)},{default:t(()=>[a(o,{align:"center",label:"\u4EFB\u52A1\u7F16\u53F7",prop:"id",width:"300px"}),a(o,{align:"center",label:"\u4EFB\u52A1\u540D\u79F0",prop:"name"}),a(o,{align:"center",label:"\u6240\u5C5E\u6D41\u7A0B",prop:"processInstance.name"}),a(o,{align:"center",label:"\u6D41\u7A0B\u53D1\u8D77\u4EBA",prop:"processInstance.startUserNickname"}),a(o,{align:"center",label:"\u72B6\u6001",prop:"result"},{default:t(l=>[a(N,{type:e(na).BPM_PROCESS_INSTANCE_RESULT,value:l.row.result},null,8,["type","value"])]),_:1}),a(o,{align:"center",label:"\u539F\u56E0",prop:"reason"}),a(o,{formatter:e(sa),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180"},null,8,["formatter"]),a(o,{align:"center",label:"\u64CD\u4F5C"},{default:t(l=>[a(c,{link:"",type:"primary",onClick:B=>{return s=l.row,void b.value.open(s);var s}},{default:t(()=>[i("\u8BE6\u60C5")]),_:2},1032,["onClick"]),a(c,{link:"",type:"primary",onClick:B=>{return s=l.row,void x({name:"BpmProcessInstanceDetail",query:{id:s.processInstance.id}});var s}},{default:t(()=>[i("\u6D41\u7A0B")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[V,e(m)]]),a(P,{limit:e(r).pageSize,"onUpdate:limit":n[2]||(n[2]=l=>e(r).pageSize=l),page:e(r).pageNo,"onUpdate:page":n[3]||(n[3]=l=>e(r).pageNo=l),total:e(y),onPagination:p},null,8,["limit","page","total"])]),_:1}),a(ia,{ref_key:"detailRef",ref:b,onSuccess:p},null,512)],64)}}})});export{ha as __tla,T as default};