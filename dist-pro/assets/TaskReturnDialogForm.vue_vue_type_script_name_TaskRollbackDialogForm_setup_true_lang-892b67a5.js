import{d as U,r as o,o as _,q as c,w as r,i as n,j as v,a,B as I,c as M,k as R,F as j,x as B,C as H,D as L,T as P,I as z,H as A,L as E,M as G,__tla as J}from"./index-03db6098.js";import{_ as N,__tla as O}from"./Dialog.vue_vue_type_style_index_0_lang-0ea1a6f5.js";import{b as Q,c as S,__tla as W}from"./index-c3edb35b.js";import{u as X,__tla as Y}from"./useMessage-3de53a8e.js";let g,Z=Promise.all([(()=>{try{return J}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return Y}catch{}})()]).then(async()=>{g=U({__name:"TaskReturnDialogForm",emits:["success"],setup($,{expose:h,emit:b}){const f=X(),s=o(!1),u=o(!1),l=o({id:"",targetDefinitionKey:void 0,reason:""}),V=o({targetDefinitionKey:[{required:!0,message:"\u5FC5\u987B\u9009\u62E9\u56DE\u9000\u8282\u70B9",trigger:"change"}],reason:[{required:!0,message:"\u56DE\u9000\u7406\u7531\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),d=o(),m=o([]);h({open:async i=>{if(m.value=await Q({taskId:i}),m.value.length===0)return f.warning("\u5F53\u524D\u6CA1\u6709\u53EF\u56DE\u9000\u7684\u8282\u70B9"),!1;s.value=!0,k(),l.value.id=i}});const w=b,K=async()=>{if(d&&await d.value.validate()){u.value=!0;try{await S(l.value),f.success("\u56DE\u9000\u6210\u529F"),s.value=!1,w("success")}finally{u.value=!1}}},k=()=>{var i;l.value={id:"",targetDefinitionKey:void 0,reason:""},(i=d.value)==null||i.resetFields()};return(i,t)=>{const D=G,x=H,y=L,q=P,C=z,p=A,F=N,T=E;return _(),c(F,{modelValue:a(s),"onUpdate:modelValue":t[3]||(t[3]=e=>B(s)?s.value=e:null),title:"\u56DE\u9000",width:"500"},{footer:r(()=>[n(p,{disabled:a(u),type:"primary",onClick:K},{default:r(()=>[v("\u786E \u5B9A")]),_:1},8,["disabled"]),n(p,{onClick:t[2]||(t[2]=e=>s.value=!1)},{default:r(()=>[v("\u53D6 \u6D88")]),_:1})]),default:r(()=>[I((_(),c(C,{ref_key:"formRef",ref:d,model:a(l),rules:a(V),"label-width":"110px"},{default:r(()=>[n(y,{label:"\u9000\u56DE\u8282\u70B9",prop:"targetDefinitionKey"},{default:r(()=>[n(x,{modelValue:a(l).targetDefinitionKey,"onUpdate:modelValue":t[0]||(t[0]=e=>a(l).targetDefinitionKey=e),clearable:"",style:{width:"100%"}},{default:r(()=>[(_(!0),M(j,null,R(a(m),e=>(_(),c(D,{key:e.definitionKey,label:e.name,value:e.definitionKey},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(y,{label:"\u56DE\u9000\u7406\u7531",prop:"reason"},{default:r(()=>[n(q,{modelValue:a(l).reason,"onUpdate:modelValue":t[1]||(t[1]=e=>a(l).reason=e),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u56DE\u9000\u7406\u7531"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[T,a(u)]])]),_:1},8,["modelValue"])}}})});export{g as _,Z as __tla};