import{d as G,N as L,r as e,f as M,A as F,O as H,o,c as b,i as l,w as s,B as S,a as n,q as i,F as P,k as J,j as A,a3 as O,J as U,H as W,K as Y,L as z,t as Q,aj as V,__tla as X}from"./index-ad2885e5.js";import{_ as Z,__tla as $}from"./ContentWrap.vue_vue_type_script_setup_true_lang-22fef0d2.js";import{_ as aa,__tla as ta}from"./DictTag.vue_vue_type_script_lang-7bba2a00.js";import{a as ra,D,__tla as ea}from"./dict-197e00ae.js";import{_ as la,g as sa,__tla as _a}from"./TaskAssignRuleForm.vue_vue_type_script_setup_true_lang-86644e4e.js";import{g as oa,__tla as na}from"./index-b0127fdc.js";import{g as ia,__tla as ua}from"./index-a3778cf9.js";import{g as fa,__tla as ca}from"./index-afe6774e.js";import{g as ma,__tla as pa}from"./index-600d2f7f.js";import{g as ya,__tla as da}from"./index-dc9e09a6.js";import{__tla as va}from"./el-card-5175ae0f.js";import"./color-a8b4eb58.js";import{__tla as ha}from"./Dialog.vue_vue_type_style_index_0_lang-98b85c6a.js";import{__tla as ga}from"./el-tree-select-27ee869a.js";import"./tree-ebab458e.js";import{__tla as ka}from"./useMessage-db992d55.js";let B,wa=Promise.all([(()=>{try{return X}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return ka}catch{}})()]).then(async()=>{B=G({name:"BpmTaskAssignRule",__name:"index",setup(Ia){const{query:m}=L(),u=e(!0),p=e([]),f=M({modelId:m.modelId,processDefinitionId:m.processDefinitionId}),y=e([]),d=e([]),v=e([]),h=e([]),g=e([]),N=ra(D.BPM_TASK_ASSIGN_SCRIPT),k=async()=>{u.value=!0;try{p.value=await sa(f)}finally{u.value=!1}},R=(t,r)=>{if(t===10){for(const a of y.value)if(a.id===r)return a.name}else if(t===20||t===21){for(const a of d.value)if(a.id===r)return a.name}else if(t===22){for(const a of v.value)if(a.id===r)return a.name}else if(t===30||t===31||t===32){for(const a of h.value)if(a.id===r)return a.nickname}else if(t===40){for(const a of g.value)if(a.id===r)return a.name}else if(t===50){r+="";for(const a of N)if(a.value===r)return a.label}return"\u672A\u77E5("+r+")"},w=e();return F(async()=>{await k(),y.value=await oa(),d.value=await ia(),v.value=await fa(),h.value=await ma(),g.value=await ya()}),(t,r)=>{const a=U,T=aa,K=V,x=W,C=Y,j=Z,q=H("hasPermi"),E=z;return o(),b(P,null,[l(j,null,{default:s(()=>[S((o(),i(C,{data:n(p)},{default:s(()=>[l(a,{label:"\u4EFB\u52A1\u540D",align:"center",prop:"taskDefinitionName"}),l(a,{label:"\u4EFB\u52A1\u6807\u8BC6",align:"center",prop:"taskDefinitionKey"}),l(a,{label:"\u89C4\u5219\u7C7B\u578B",align:"center",prop:"type"},{default:s(_=>[l(T,{type:n(D).BPM_TASK_ASSIGN_RULE_TYPE,value:_.row.type},null,8,["type","value"])]),_:1}),l(a,{label:"\u89C4\u5219\u8303\u56F4",align:"center",prop:"options"},{default:s(_=>[(o(!0),b(P,null,J(_.row.options,c=>(o(),i(K,{class:"mr-5px",key:c},{default:s(()=>[A(Q(R(_.row.type,c)),1)]),_:2},1024))),128))]),_:1}),n(f).modelId?(o(),i(a,{key:0,label:"\u64CD\u4F5C",align:"center"},{default:s(_=>[S((o(),i(x,{link:"",type:"primary",onClick:c=>{return I=_.row,void w.value.open(f.modelId,I);var I}},{default:s(()=>[A(" \u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[q,["bpm:task-assign-rule:update"]]])]),_:1})):O("",!0)]),_:1},8,["data"])),[[E,n(u)]])]),_:1}),l(la,{ref_key:"formRef",ref:w,onSuccess:k},null,512)],64)}}})});export{wa as __tla,B as default};