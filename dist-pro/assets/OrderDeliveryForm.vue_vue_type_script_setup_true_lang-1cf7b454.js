import{d as H,r as i,A as L,o as _,q as f,w as a,i as o,j as n,a as l,B as P,x as b,c as V,F as h,k as R,a3 as S,l as T,dD as z,ah as E,ag as G,D as J,C as K,T as Q,I as W,H as X,L as Y,M as Z,__tla as $}from"./index-866c10ab.js";import{_ as ee,__tla as ae}from"./Dialog.vue_vue_type_style_index_0_lang-9293068d.js";import{g as le,__tla as se}from"./index-3a6ac2cd.js";import{d as te,__tla as oe}from"./index-4f552a72.js";import{u as ue,__tla as de}from"./useMessage-68df17f5.js";let x,re=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return de}catch{}})()]).then(async()=>{x=H({name:"OrderDeliveryForm",__name:"OrderDeliveryForm",emits:["success"],setup(ie,{expose:k,emit:w}){const{t:I}=T(),N=ue(),d=i(!1),c=i(!1),r=i("express"),u=i({id:0,logisticsId:null,logisticsNo:""}),p=i();k({open:async s=>{U(),z(u.value,s),s.logisticsId===0&&(r.value="none"),d.value=!0}});const D=w,F=async()=>{c.value=!0;try{const s=l(u);r.value==="none"&&(s.logisticsId=0,s.logisticsNo=""),await te(s),N.success(I("common.updateSuccess")),d.value=!1,D("success",!0)}finally{c.value=!1}},U=()=>{var s;u.value={id:0,logisticsId:null,logisticsNo:""},(s=p.value)==null||s.resetFields()},y=i([]);return L(async()=>{y.value=await le()}),(s,t)=>{const v=E,C=G,m=J,O=Z,M=K,j=Q,q=W,g=X,A=ee,B=Y;return _(),f(A,{modelValue:l(d),"onUpdate:modelValue":t[4]||(t[4]=e=>b(d)?d.value=e:null),title:"\u8BA2\u5355\u53D1\u8D27",width:"25%"},{footer:a(()=>[o(g,{disabled:l(c),type:"primary",onClick:F},{default:a(()=>[n("\u786E \u5B9A")]),_:1},8,["disabled"]),o(g,{onClick:t[3]||(t[3]=e=>d.value=!1)},{default:a(()=>[n("\u53D6 \u6D88")]),_:1})]),default:a(()=>[P((_(),f(q,{ref_key:"formRef",ref:p,model:l(u),"label-width":"80px"},{default:a(()=>[o(m,{label:"\u53D1\u8D27\u65B9\u5F0F"},{default:a(()=>[o(C,{modelValue:l(r),"onUpdate:modelValue":t[0]||(t[0]=e=>b(r)?r.value=e:null)},{default:a(()=>[o(v,{border:"",label:"express"},{default:a(()=>[n("\u5FEB\u9012\u7269\u6D41")]),_:1}),o(v,{border:"",label:"none"},{default:a(()=>[n("\u65E0\u9700\u53D1\u8D27")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(r)==="express"?(_(),V(h,{key:0},[o(m,{label:"\u7269\u6D41\u516C\u53F8"},{default:a(()=>[o(M,{modelValue:l(u).logisticsId,"onUpdate:modelValue":t[1]||(t[1]=e=>l(u).logisticsId=e),placeholder:"\u8BF7\u9009\u62E9",style:{width:"100%"}},{default:a(()=>[(_(!0),V(h,null,R(l(y),e=>(_(),f(O,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(m,{label:"\u7269\u6D41\u5355\u53F7"},{default:a(()=>[o(j,{modelValue:l(u).logisticsNo,"onUpdate:modelValue":t[2]||(t[2]=e=>l(u).logisticsNo=e)},null,8,["modelValue"])]),_:1})],64)):S("",!0)]),_:1},8,["model"])),[[B,l(c)]])]),_:1},8,["modelValue"])}}})});export{x as _,re as __tla};