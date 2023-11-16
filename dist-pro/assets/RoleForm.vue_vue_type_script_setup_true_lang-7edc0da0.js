import{d as M,l as N,r as m,f as R,o as _,q as f,w as s,i as r,a as e,j as h,B as T,c as D,F as O,k as j,x as H,T as I,D as z,M as P,C as G,I as J,H as K,L as Q,__tla as W}from"./index-03db6098.js";import{_ as X,__tla as Y}from"./Dialog.vue_vue_type_style_index_0_lang-0ea1a6f5.js";import{a as Z,D as $,__tla as ee}from"./dict-9d6b3d0a.js";import{C as b}from"./constants-3cc050b6.js";import{a as ae,c as le,u as te,__tla as re}from"./index-ab6694c4.js";import{u as se,__tla as ue}from"./useMessage-3de53a8e.js";let k,oe=Promise.all([(()=>{try{return W}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return ee}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return ue}catch{}})()]).then(async()=>{k=M({name:"SystemRoleForm",__name:"RoleForm",emits:["success"],setup(de,{expose:U,emit:q}){const{t:p}=N(),v=se(),o=m(!1),g=m(""),d=m(!1),y=m(""),t=m({id:void 0,name:"",code:"",sort:void 0,status:b.ENABLE,remark:""}),w=R({name:[{required:!0,message:"\u5C97\u4F4D\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],code:[{required:!0,message:"\u5C97\u4F4D\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],sort:[{required:!0,message:"\u5C97\u4F4D\u987A\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],status:[{required:!0,message:"\u5C97\u4F4D\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],remark:[{required:!1,message:"\u5C97\u4F4D\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),n=m(),C=()=>{var u;t.value={id:void 0,name:"",code:"",sort:void 0,status:b.ENABLE,remark:""},(u=n.value)==null||u.resetFields()};U({open:async(u,a)=>{if(o.value=!0,g.value=p("action."+u),y.value=u,C(),a){d.value=!0;try{t.value=await ae(a)}finally{d.value=!1}}}});const S=q,x=async()=>{if(n&&await n.value.validate()){d.value=!0;try{const u=t.value;y.value==="create"?(await le(u),v.success(p("common.createSuccess"))):(await te(u),v.success(p("common.updateSuccess"))),o.value=!1,S("success")}finally{d.value=!1}}};return(u,a)=>{const i=I,c=z,E=P,A=G,B=J,V=K,F=X,L=Q;return _(),f(F,{modelValue:e(o),"onUpdate:modelValue":a[6]||(a[6]=l=>H(o)?o.value=l:null),title:e(g)},{footer:s(()=>[r(V,{disabled:e(d),type:"primary",onClick:x},{default:s(()=>[h("\u786E \u5B9A")]),_:1},8,["disabled"]),r(V,{onClick:a[5]||(a[5]=l=>o.value=!1)},{default:s(()=>[h("\u53D6 \u6D88")]),_:1})]),default:s(()=>[T((_(),f(B,{ref_key:"formRef",ref:n,model:e(t),rules:e(w),"label-width":"80px"},{default:s(()=>[r(c,{label:"\u89D2\u8272\u540D\u79F0",prop:"name"},{default:s(()=>[r(i,{modelValue:e(t).name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(t).name=l),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),r(c,{label:"\u89D2\u8272\u6807\u8BC6",prop:"code"},{default:s(()=>[r(i,{modelValue:e(t).code,"onUpdate:modelValue":a[1]||(a[1]=l=>e(t).code=l),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6"},null,8,["modelValue"])]),_:1}),r(c,{label:"\u663E\u793A\u987A\u5E8F",prop:"sort"},{default:s(()=>[r(i,{modelValue:e(t).sort,"onUpdate:modelValue":a[2]||(a[2]=l=>e(t).sort=l),placeholder:"\u8BF7\u8F93\u5165\u663E\u793A\u987A\u5E8F"},null,8,["modelValue"])]),_:1}),r(c,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[r(A,{modelValue:e(t).status,"onUpdate:modelValue":a[3]||(a[3]=l=>e(t).status=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001"},{default:s(()=>[(_(!0),D(O,null,j(e(Z)(e($).COMMON_STATUS),l=>(_(),f(E,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(c,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[r(i,{modelValue:e(t).remark,"onUpdate:modelValue":a[4]||(a[4]=l=>e(t).remark=l),placeholder:"\u8BF7\u8F93\u5907\u6CE8",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[L,e(d)]])]),_:1},8,["modelValue","title"])}}})});export{k as _,oe as __tla};