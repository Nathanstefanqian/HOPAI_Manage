import{d as F,r as _,f as M,o as i,q as f,w as s,i as u,a as t,j as h,B as S,c as U,F as j,k as T,x as B,D,T as H,I,H as L,L as R,__tla as z}from"./index-12d626d1.js";import{_ as A,__tla as E}from"./Dialog.vue_vue_type_style_index_0_lang-28b4751a.js";import{_ as G,__tla as J}from"./style.css_vue_type_style_index_0_src_true_lang-ce0614dc.js";import{g as K,s as N,__tla as O}from"./index-797bcd5a.js";import{u as Q,__tla as W}from"./useMessage-86d9ff5e.js";let g,X=Promise.all([(()=>{try{return z}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return W}catch{}})()]).then(async()=>{g=F({name:"SystemMailTemplateSendForm",__name:"MailTemplateSendForm",setup(Y,{expose:P}){const b=Q(),p=_(!1),n=_(!1),e=_({content:"",params:{},mail:"",templateCode:"",templateParams:new Map}),c=M({mail:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],templateCode:[{required:!0,message:"\u6A21\u7248\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],templateParams:{}}),d=_();P({open:async m=>{p.value=!0,w(),n.value=!0;try{const a=await K(m);e.value.content=a.content,e.value.params=a.params,e.value.templateCode=a.code,e.value.templateParams=a.params.reduce((o,r)=>(o[r]="",o),{}),c.templateParams=a.params.reduce((o,r)=>(o[r]={required:!0,message:"\u53C2\u6570 "+r+" \u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},o),{})}finally{n.value=!1}}});const V=async()=>{if(d&&await d.value.validate()){n.value=!0;try{const m=e.value,a=await N(m);a&&b.success("\u63D0\u4EA4\u53D1\u9001\u6210\u529F\uFF01\u53D1\u9001\u7ED3\u679C\uFF0C\u89C1\u53D1\u9001\u65E5\u5FD7\u7F16\u53F7\uFF1A"+a),p.value=!1}finally{n.value=!1}}},w=()=>{var m;e.value={content:"",params:{},mail:"",templateCode:"",templateParams:new Map},c.templateParams={},(m=d.value)==null||m.resetFields()};return(m,a)=>{const o=G,r=D,v=H,x=I,y=L,C=A,k=R;return i(),f(C,{modelValue:t(p),"onUpdate:modelValue":a[2]||(a[2]=l=>B(p)?p.value=l:null),title:"\u6D4B\u8BD5"},{footer:s(()=>[u(y,{disabled:t(n),type:"primary",onClick:V},{default:s(()=>[h("\u786E \u5B9A")]),_:1},8,["disabled"]),u(y,{onClick:a[1]||(a[1]=l=>p.value=!1)},{default:s(()=>[h("\u53D6 \u6D88")]),_:1})]),default:s(()=>[S((i(),f(x,{ref_key:"formRef",ref:d,model:t(e),rules:t(c),"label-width":"120px"},{default:s(()=>[u(r,{label:"\u6A21\u677F\u5185\u5BB9",prop:"content"},{default:s(()=>[u(o,{"model-value":t(e).content,height:"150px",readonly:""},null,8,["model-value"])]),_:1}),u(r,{label:"\u6536\u4EF6\u90AE\u7BB1",prop:"mail"},{default:s(()=>[u(v,{modelValue:t(e).mail,"onUpdate:modelValue":a[0]||(a[0]=l=>t(e).mail=l),placeholder:"\u8BF7\u8F93\u5165\u6536\u4EF6\u90AE\u7BB1"},null,8,["modelValue"])]),_:1}),(i(!0),U(j,null,T(t(e).params,l=>(i(),f(r,{key:l,label:"\u53C2\u6570 {"+l+"}",prop:"templateParams."+l},{default:s(()=>[u(v,{modelValue:t(e).templateParams[l],"onUpdate:modelValue":q=>t(e).templateParams[l]=q,placeholder:"\u8BF7\u8F93\u5165 "+l+" \u53C2\u6570"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label","prop"]))),128))]),_:1},8,["model","rules"])),[[k,t(n)]])]),_:1},8,["modelValue"])}}})});export{g as _,X as __tla};
