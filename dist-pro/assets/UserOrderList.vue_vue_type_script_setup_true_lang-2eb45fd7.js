import{d as X,u as J,r as _,f as Q,A as W,o,c as i,i as t,w as r,a,F as n,k as y,q as p,a3 as g,P as Z,B as N,j as I,C as $,D as ee,G as ae,T as le,_ as te,H as ue,I as re,K as oe,L as de,a2 as pe,M as se,__tla as ie}from"./index-12d626d1.js";import{_ as ne,__tla as ce}from"./index.vue_vue_type_script_setup_true_lang-8de1d8de.js";import{_ as me,__tla as _e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-6c4b8253.js";import{e as ye,__tla as ve}from"./index-4395b1cd.js";import{a as b,D as v,e as fe,__tla as be}from"./dict-8bf7f732.js";import{a as Ve,__tla as he}from"./index-49b43684.js";import{g as ke,__tla as Ue}from"./index-3781b1a3.js";import we,{__tla as Ce}from"./OrderTableColumn-740f1ed8.js";import{D as P}from"./constants-3cc050b6.js";let O,Te=Promise.all([(()=>{try{return ie}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Ce}catch{}})()]).then(async()=>{O=X({__name:"UserOrderList",props:{userId:{}},setup(K){const{push:L}=J(),{userId:x}=K,V=_(!0),D=_(0),h=_([]),k=_([]),E=_([]),R=_(),l=_({pageNo:1,pageSize:10,userId:x,status:void 0,payChannelCode:void 0,createTime:void 0,terminal:void 0,type:void 0,deliveryType:void 0,logisticsId:void 0,pickUpStoreId:void 0,pickUpVerifyCode:void 0}),f=Q({queryParam:""}),S=_([{value:"no",label:"\u8BA2\u5355\u53F7"},{value:"userNickname",label:"\u7528\u6237\u6635\u79F0"},{value:"userMobile",label:"\u7528\u6237\u7535\u8BDD"}]),M=c=>{var u;(u=S.value.filter(d=>d.value!==c))==null||u.forEach(d=>{l.value.hasOwnProperty(d.value)&&delete l.value[d.value]})},U=async()=>{l.value.pageNo=1,await w()},H=()=>{var c;(c=R.value)==null||c.resetFields(),l.value.userId=x,U()},w=async()=>{V.value=!0;try{const c=await ye(l.value);h.value=c.list,D.value=c.total}finally{V.value=!1}};return W(async()=>{await w(),k.value=await Ve(),E.value=await ke()}),(c,u)=>{const d=se,m=$,s=ee,z=ae,Y=le,C=te,T=ue,F=re,q=me,j=oe,B=ne,G=de;return o(),i(n,null,[t(q,null,{default:r(()=>[t(F,{ref_key:"queryFormRef",ref:R,inline:!0,model:a(l),class:"-mb-15px","label-width":"68px"},{default:r(()=>[t(s,{label:"\u8BA2\u5355\u72B6\u6001",prop:"status"},{default:r(()=>[t(m,{modelValue:a(l).status,"onUpdate:modelValue":u[0]||(u[0]=e=>a(l).status=e),class:"!w-280px",clearable:"",placeholder:"\u5168\u90E8"},{default:r(()=>[(o(!0),i(n,null,y(a(b)(a(v).TRADE_ORDER_STATUS),e=>(o(),p(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"\u652F\u4ED8\u65B9\u5F0F",prop:"payChannelCode"},{default:r(()=>[t(m,{modelValue:a(l).payChannelCode,"onUpdate:modelValue":u[1]||(u[1]=e=>a(l).payChannelCode=e),class:"!w-280px",clearable:"",placeholder:"\u5168\u90E8"},{default:r(()=>[(o(!0),i(n,null,y(a(fe)(a(v).PAY_CHANNEL_CODE),e=>(o(),p(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:r(()=>[t(z,{modelValue:a(l).createTime,"onUpdate:modelValue":u[2]||(u[2]=e=>a(l).createTime=e),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-280px","end-placeholder":"\u81EA\u5B9A\u4E49\u65F6\u95F4","start-placeholder":"\u81EA\u5B9A\u4E49\u65F6\u95F4",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","default-time"])]),_:1}),t(s,{label:"\u8BA2\u5355\u6765\u6E90",prop:"terminal"},{default:r(()=>[t(m,{modelValue:a(l).terminal,"onUpdate:modelValue":u[3]||(u[3]=e=>a(l).terminal=e),class:"!w-280px",clearable:"",placeholder:"\u5168\u90E8"},{default:r(()=>[(o(!0),i(n,null,y(a(b)(a(v).TERMINAL),e=>(o(),p(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"\u8BA2\u5355\u7C7B\u578B",prop:"type"},{default:r(()=>[t(m,{modelValue:a(l).type,"onUpdate:modelValue":u[4]||(u[4]=e=>a(l).type=e),class:"!w-280px",clearable:"",placeholder:"\u5168\u90E8"},{default:r(()=>[(o(!0),i(n,null,y(a(b)(a(v).TRADE_ORDER_TYPE),e=>(o(),p(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"\u914D\u9001\u65B9\u5F0F",prop:"deliveryType"},{default:r(()=>[t(m,{modelValue:a(l).deliveryType,"onUpdate:modelValue":u[5]||(u[5]=e=>a(l).deliveryType=e),class:"!w-280px",clearable:"",placeholder:"\u5168\u90E8"},{default:r(()=>[(o(!0),i(n,null,y(a(b)(a(v).TRADE_DELIVERY_TYPE),e=>(o(),p(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(l).deliveryType===a(P).EXPRESS.type?(o(),p(s,{key:0,label:"\u5FEB\u9012\u516C\u53F8",prop:"logisticsId"},{default:r(()=>[t(m,{modelValue:a(l).logisticsId,"onUpdate:modelValue":u[6]||(u[6]=e=>a(l).logisticsId=e),class:"!w-280px",clearable:"",placeholder:"\u5168\u90E8"},{default:r(()=>[(o(!0),i(n,null,y(a(E),e=>(o(),p(d,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):g("",!0),a(l).deliveryType===a(P).PICK_UP.type?(o(),p(s,{key:1,label:"\u81EA\u63D0\u95E8\u5E97",prop:"pickUpStoreId"},{default:r(()=>[t(m,{modelValue:a(l).pickUpStoreId,"onUpdate:modelValue":u[7]||(u[7]=e=>a(l).pickUpStoreId=e),class:"!w-280px",clearable:"",multiple:"",placeholder:"\u5168\u90E8"},{default:r(()=>[(o(!0),i(n,null,y(a(k),e=>(o(),p(d,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):g("",!0),a(l).deliveryType===a(P).PICK_UP.type?(o(),p(s,{key:2,label:"\u6838\u9500\u7801",prop:"pickUpVerifyCode"},{default:r(()=>[t(Y,{modelValue:a(l).pickUpVerifyCode,"onUpdate:modelValue":u[8]||(u[8]=e=>a(l).pickUpVerifyCode=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u81EA\u63D0\u6838\u9500\u7801",onKeyup:Z(U,["enter"])},null,8,["modelValue","onKeyup"])]),_:1})):g("",!0),t(s,{label:"\u805A\u5408\u641C\u7D22"},{default:r(()=>[N(t(Y,{modelValue:a(l)[a(f).queryParam],"onUpdate:modelValue":u[10]||(u[10]=e=>a(l)[a(f).queryParam]=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u8F93\u5165"},{prepend:r(()=>[t(m,{modelValue:a(f).queryParam,"onUpdate:modelValue":u[9]||(u[9]=e=>a(f).queryParam=e),class:"!w-110px",clearable:"",placeholder:"\u5168\u90E8",onChange:M},{default:r(()=>[(o(!0),i(n,null,y(a(S),e=>(o(),p(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),[[pe,!0]])]),_:1}),t(s,null,{default:r(()=>[t(T,{onClick:U},{default:r(()=>[t(C,{class:"mr-5px",icon:"ep:search"}),I(" \u641C\u7D22 ")]),_:1}),t(T,{onClick:H},{default:r(()=>[t(C,{class:"mr-5px",icon:"ep:refresh"}),I(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(q,null,{default:r(()=>[N((o(),p(j,{data:a(h),"row-key":"id"},{default:r(()=>[t(a(we),{list:a(h),"pick-up-store-list":a(k)},{default:r(({row:e})=>[t(T,{link:"",type:"primary",onClick:ge=>{return A=e.id,void L({name:"TradeOrderDetail",params:{orderId:A}});var A}},{default:r(()=>[t(C,{icon:"ep:notification"}),I(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])]),_:1},8,["list","pick-up-store-list"])]),_:1},8,["data"])),[[G,a(V)]]),t(B,{limit:a(l).pageSize,"onUpdate:limit":u[11]||(u[11]=e=>a(l).pageSize=e),page:a(l).pageNo,"onUpdate:page":u[12]||(u[12]=e=>a(l).pageNo=e),total:a(D),onPagination:w},null,8,["limit","page","total"])]),_:1})],64)}}})});export{O as _,Te as __tla};
