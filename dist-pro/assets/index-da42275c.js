import{d as Q,dO as W,l as X,r as i,f as Y,A as Z,O as $,o as n,c as g,i as a,w as e,a as t,P as aa,F as A,k as ea,q as p,j as c,B as m,a3 as la,am as ta,dP as E,T as ra,D as oa,M as sa,C as na,_ as ca,H as ua,I as _a,J as ia,K as pa,L as ma,__tla as da}from"./index-16a04392.js";import{_ as fa,__tla as ya}from"./DictTag.vue_vue_type_script_lang-367720e6.js";import{_ as ha,__tla as wa}from"./ContentWrap.vue_vue_type_script_setup_true_lang-d6c48078.js";import{_ as va,__tla as ka}from"./index-e0fefe89.js";import{a as ba,D as P,__tla as Ca}from"./dict-8f5ca76e.js";import{h as xa}from"./tree-ebab458e.js";import{b as Sa,d as Oa,__tla as Ma}from"./index-ef34b40f.js";import{_ as Ra,__tla as Ta}from"./MenuForm.vue_vue_type_script_setup_true_lang-7deed3ec.js";import{u as Ua,__tla as Va}from"./useMessage-e6a37d8e.js";import{__tla as ga}from"./el-card-c0206f00.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as Aa}from"./Dialog.vue_vue_type_style_index_0_lang-055ef6ab.js";import{__tla as Ea}from"./index-866d8c10.js";import{__tla as Pa}from"./el-tree-select-0ed9db07.js";import"./constants-3cc050b6.js";let q,qa=Promise.all([(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return Aa}catch{}})(),(()=>{try{return Ea}catch{}})(),(()=>{try{return Pa}catch{}})()]).then(async()=>{q=Q({name:"SystemMenu",__name:"index",setup(Ba){const{wsCache:O}=W(),{t:B}=X(),w=Ua(),v=i(!0),M=i([]),u=Y({name:void 0,status:void 0}),R=i(),k=i(!1),b=i(!0),d=async()=>{v.value=!0;try{const f=await Sa(u);M.value=xa(f)}finally{v.value=!1}},C=()=>{d()},F=()=>{R.value.resetFields(),C()},T=i(),x=(f,r,y)=>{T.value.open(f,r,y)},K=()=>{b.value=!1,k.value=!k.value,ta(()=>{b.value=!0})},N=async()=>{try{await w.confirm("\u5373\u5C06\u66F4\u65B0\u7F13\u5B58\u5237\u65B0\u6D4F\u89C8\u5668\uFF01","\u5237\u65B0\u83DC\u5355\u7F13\u5B58"),O.delete(E.USER),O.delete(E.ROLE_ROUTERS),location.reload()}catch{}};return Z(()=>{d()}),(f,r)=>{const y=va,D=ra,S=oa,L=sa,j=na,_=ca,o=ua,H=_a,U=ha,s=ia,I=fa,J=pa,h=$("hasPermi"),z=ma;return n(),g(A,null,[a(y,{title:"\u529F\u80FD\u6743\u9650",url:"https://doc.iocoder.cn/resource-permission"}),a(y,{title:"\u83DC\u5355\u8DEF\u7531",url:"https://doc.iocoder.cn/vue3/route/"}),a(U,null,{default:e(()=>[a(H,{ref_key:"queryFormRef",ref:R,inline:!0,model:t(u),class:"-mb-15px","label-width":"68px"},{default:e(()=>[a(S,{label:"\u83DC\u5355\u540D\u79F0",prop:"name"},{default:e(()=>[a(D,{modelValue:t(u).name,"onUpdate:modelValue":r[0]||(r[0]=l=>t(u).name=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",onKeyup:aa(C,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),a(S,{label:"\u72B6\u6001",prop:"status"},{default:e(()=>[a(j,{modelValue:t(u).status,"onUpdate:modelValue":r[1]||(r[1]=l=>t(u).status=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u83DC\u5355\u72B6\u6001"},{default:e(()=>[(n(!0),g(A,null,ea(t(ba)(t(P).COMMON_STATUS),l=>(n(),p(L,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(S,null,{default:e(()=>[a(o,{onClick:C},{default:e(()=>[a(_,{class:"mr-5px",icon:"ep:search"}),c(" \u641C\u7D22 ")]),_:1}),a(o,{onClick:F},{default:e(()=>[a(_,{class:"mr-5px",icon:"ep:refresh"}),c(" \u91CD\u7F6E ")]),_:1}),m((n(),p(o,{plain:"",type:"primary",onClick:r[2]||(r[2]=l=>x("create"))},{default:e(()=>[a(_,{class:"mr-5px",icon:"ep:plus"}),c(" \u65B0\u589E ")]),_:1})),[[h,["system:menu:create"]]]),a(o,{plain:"",type:"danger",onClick:K},{default:e(()=>[a(_,{class:"mr-5px",icon:"ep:sort"}),c(" \u5C55\u5F00/\u6298\u53E0 ")]),_:1}),a(o,{plain:"",onClick:N},{default:e(()=>[a(_,{class:"mr-5px",icon:"ep:refresh"}),c(" \u5237\u65B0\u83DC\u5355\u7F13\u5B58 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(U,null,{default:e(()=>[t(b)?m((n(),p(J,{key:0,data:t(M),"default-expand-all":t(k),"row-key":"id"},{default:e(()=>[a(s,{"show-overflow-tooltip":!0,label:"\u83DC\u5355\u540D\u79F0",prop:"name",width:"250"}),a(s,{align:"center",label:"\u56FE\u6807",prop:"icon",width:"100"},{default:e(l=>[a(_,{icon:l.row.icon},null,8,["icon"])]),_:1}),a(s,{label:"\u6392\u5E8F",prop:"sort",width:"60"}),a(s,{"show-overflow-tooltip":!0,label:"\u6743\u9650\u6807\u8BC6",prop:"permission"}),a(s,{"show-overflow-tooltip":!0,label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"}),a(s,{"show-overflow-tooltip":!0,label:"\u7EC4\u4EF6\u540D\u79F0",prop:"componentName"}),a(s,{label:"\u72B6\u6001",prop:"status",width:"80"},{default:e(l=>[a(I,{type:t(P).COMMON_STATUS,value:l.row.status},null,8,["type","value"])]),_:1}),a(s,{align:"center",label:"\u64CD\u4F5C"},{default:e(l=>[m((n(),p(o,{link:"",type:"primary",onClick:V=>x("update",l.row.id)},{default:e(()=>[c(" \u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[h,["system:menu:update"]]]),m((n(),p(o,{link:"",type:"primary",onClick:V=>x("create",void 0,l.row.id)},{default:e(()=>[c(" \u65B0\u589E ")]),_:2},1032,["onClick"])),[[h,["system:menu:create"]]]),m((n(),p(o,{link:"",type:"danger",onClick:V=>(async G=>{try{await w.delConfirm(),await Oa(G),w.success(B("common.delSuccess")),await d()}catch{}})(l.row.id)},{default:e(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[h,["system:menu:delete"]]])]),_:1})]),_:1},8,["data","default-expand-all"])),[[z,t(v)]]):la("",!0)]),_:1}),a(Ra,{ref_key:"formRef",ref:T,onSuccess:d},null,512)],64)}}})});export{qa as __tla,q as default};