import{ap as x,d as H,l as J,r as i,f as L,A as M,O as G,o as u,c as I,i as e,w as r,a,P as V,F as S,k as Q,q as f,j as y,B as U,T as W,D as X,M as Z,C as $,_ as ee,H as ae,I as le,J as te,K as re,L as se,__tla as oe}from"./index-16a04392.js";import{_ as ne,__tla as ue}from"./index.vue_vue_type_script_setup_true_lang-2be6eb37.js";import{_ as pe,__tla as _e}from"./DictTag.vue_vue_type_script_lang-367720e6.js";import{_ as ce,__tla as ie}from"./ContentWrap.vue_vue_type_script_setup_true_lang-d6c48078.js";import{_ as de,__tla as me}from"./index-e0fefe89.js";import{a as fe,D as C,__tla as ye}from"./dict-8f5ca76e.js";import{d as P,__tla as he}from"./formatTime-12dff3a8.js";import{u as ge,__tla as be}from"./useMessage-e6a37d8e.js";import{__tla as ke}from"./index-866d8c10.js";import{__tla as Te}from"./el-card-c0206f00.js";import"./_plugin-vue_export-helper-1b428a4d.js";let K,we=Promise.all([(()=>{try{return oe}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Te}catch{}})()]).then(async()=>{K=H({name:"SystemTokenClient",__name:"index",setup(ve){const h=ge(),{t:z}=J(),d=i(!0),g=i(0),b=i([]),s=L({pageNo:1,pageSize:10,userId:null,userType:null,clientId:null}),k=i(),p=async()=>{d.value=!0;try{const t=await(n=s,x.get({url:"/system/oauth2-token/page",params:n}));b.value=t.list,g.value=t.total}finally{d.value=!1}var n},_=()=>{s.pageNo=1,p()},D=()=>{k.value.resetFields(),_()},E=async n=>{try{await h.confirm("\u662F\u5426\u8981\u5F3A\u5236\u9000\u51FA\u7528\u6237"),await(t=>x.delete({url:"/system/oauth2-token/delete?accessToken="+t}))(n),h.success(z("common.success")),await p()}catch{}};return M(()=>{p()}),(n,t)=>{const F=de,T=W,c=X,N=Z,O=$,w=ee,m=ae,R=le,v=ce,o=te,q=pe,A=re,Y=ne,j=G("hasPermi"),B=se;return u(),I(S,null,[e(F,{title:"OAuth 2.0\uFF08SSO \u5355\u70B9\u767B\u5F55)",url:"https://doc.iocoder.cn/oauth2/"}),e(v,null,{default:r(()=>[e(R,{class:"-mb-15px",model:a(s),ref_key:"queryFormRef",ref:k,inline:!0,"label-width":"90px"},{default:r(()=>[e(c,{label:"\u7528\u6237\u7F16\u53F7",prop:"userId"},{default:r(()=>[e(T,{modelValue:a(s).userId,"onUpdate:modelValue":t[0]||(t[0]=l=>a(s).userId=l),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u7F16\u53F7",clearable:"",onKeyup:V(_,["enter"]),class:"!w-240px"},null,8,["modelValue","onKeyup"])]),_:1}),e(c,{label:"\u7528\u6237\u7C7B\u578B",prop:"userType"},{default:r(()=>[e(O,{modelValue:a(s).userType,"onUpdate:modelValue":t[1]||(t[1]=l=>a(s).userType=l),placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u7C7B\u578B",clearable:"",class:"!w-240px"},{default:r(()=>[(u(!0),I(S,null,Q(a(fe)(a(C).USER_TYPE),l=>(u(),f(N,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(c,{label:"\u5BA2\u6237\u7AEF\u7F16\u53F7",prop:"clientId"},{default:r(()=>[e(T,{modelValue:a(s).clientId,"onUpdate:modelValue":t[2]||(t[2]=l=>a(s).clientId=l),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u7AEF\u7F16\u53F7",clearable:"",onKeyup:V(_,["enter"]),class:"!w-240px"},null,8,["modelValue","onKeyup"])]),_:1}),e(c,null,{default:r(()=>[e(m,{onClick:_},{default:r(()=>[e(w,{icon:"ep:search",class:"mr-5px"}),y(" \u641C\u7D22")]),_:1}),e(m,{onClick:D},{default:r(()=>[e(w,{icon:"ep:refresh",class:"mr-5px"}),y(" \u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(v,null,{default:r(()=>[U((u(),f(A,{data:a(b)},{default:r(()=>[e(o,{label:"\u8BBF\u95EE\u4EE4\u724C",align:"center",prop:"accessToken",width:"300"}),e(o,{label:"\u5237\u65B0\u4EE4\u724C",align:"center",prop:"refreshToken",width:"300"}),e(o,{label:"\u7528\u6237\u7F16\u53F7",align:"center",prop:"userId"}),e(o,{label:"\u7528\u6237\u7C7B\u578B",align:"center",prop:"userType"},{default:r(l=>[e(q,{type:a(C).USER_TYPE,value:l.row.userType},null,8,["type","value"])]),_:1}),e(o,{label:"\u8FC7\u671F\u65F6\u95F4",align:"center",prop:"expiresTime",formatter:a(P),width:"180"},null,8,["formatter"]),e(o,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:a(P),width:"180"},null,8,["formatter"]),e(o,{label:"\u64CD\u4F5C",align:"center"},{default:r(l=>[U((u(),f(m,{link:"",type:"danger",onClick:xe=>E(l.row.accessToken)},{default:r(()=>[y(" \u5F3A\u9000 ")]),_:2},1032,["onClick"])),[[j,["system:oauth2-token:delete"]]])]),_:1})]),_:1},8,["data"])),[[B,a(d)]]),e(Y,{total:a(g),page:a(s).pageNo,"onUpdate:page":t[3]||(t[3]=l=>a(s).pageNo=l),limit:a(s).pageSize,"onUpdate:limit":t[4]||(t[4]=l=>a(s).pageSize=l),onPagination:p},null,8,["total","page","limit"])]),_:1})],64)}}})});export{we as __tla,K as default};