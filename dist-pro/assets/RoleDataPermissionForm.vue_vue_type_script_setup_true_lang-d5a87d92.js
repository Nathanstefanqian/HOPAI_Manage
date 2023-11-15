import{d as B,l as K,r as u,f as L,o as v,q as h,w as s,i as d,a,j as c,B as Q,t as C,c as Y,F as z,k as G,x as S,a3 as J,ak as W,D as X,M as Z,C as $,I as ee,af as ae,dR as le,H as te,L as oe,__tla as se}from"./index-7b6f7d71.js";import{_ as de,__tla as ue}from"./Dialog.vue_vue_type_style_index_0_lang-0063616d.js";import{E as re,__tla as ce}from"./el-card-dd6e1c0a.js";import{a as ne,D as me,__tla as _e}from"./dict-5a036729.js";import{d as ie,h as pe}from"./tree-ebab458e.js";import{m as D}from"./constants-3cc050b6.js";import{g as ve,__tla as fe}from"./index-27ac28fa.js";import{b as ye,__tla as he}from"./index-fd4d2282.js";import{u as Se,__tla as ke}from"./useMessage-74a9519a.js";let w,xe=Promise.all([(()=>{try{return se}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{w=B({name:"SystemRoleDataPermissionForm",__name:"RoleDataPermissionForm",emits:["success"],setup(Ve,{expose:E,emit:P}){const{t:T}=K(),U=Se(),n=u(!1),f=u(!1),o=L({id:0,name:"",code:"",dataScope:void 0,dataScopeDeptIds:[]}),V=u(),k=u([]),m=u(!1),_=u(),i=u(!1),p=u(!0);E({open:async l=>{var e;n.value=!0,F(),k.value=pe(await ve()),o.id=l.id,o.name=l.name,o.code=l.code,o.dataScope=l.dataScope,(e=l.dataScopeDeptIds)==null||e.forEach(r=>{_.value.setChecked(r,!0,!1)})}});const I=P,R=async()=>{f.value=!0;try{const l={roleId:o.id,dataScope:o.dataScope,dataScopeDeptIds:o.dataScope!==D.DEPT_CUSTOM?[]:_.value.getCheckedKeys(!1)};await ye(l),U.success(T("common.updateSuccess")),n.value=!1,I("success")}finally{f.value=!1}},F=()=>{var l,e;i.value=!1,m.value=!1,p.value=!0,o.value={id:0,name:"",code:"",dataScope:void 0,dataScopeDeptIds:[]},(l=_.value)==null||l.setCheckedNodes([]),(e=V.value)==null||e.resetFields()},M=()=>{var e;const l=(e=_.value)==null?void 0:e.store.nodesMap;for(let r in l)l[r].expanded!==m.value&&(l[r].expanded=m.value)};return(l,e)=>{const r=W,y=X,g=Z,A=$,O=ee,x=ae,H=le,N=re,b=te,j=de,q=oe;return v(),h(j,{modelValue:a(n),"onUpdate:modelValue":e[6]||(e[6]=t=>S(n)?n.value=t:null),title:"\u83DC\u5355\u6743\u9650",width:"800"},{footer:s(()=>[d(b,{disabled:a(f),type:"primary",onClick:R},{default:s(()=>[c("\u786E \u5B9A")]),_:1},8,["disabled"]),d(b,{onClick:e[5]||(e[5]=t=>n.value=!1)},{default:s(()=>[c("\u53D6 \u6D88")]),_:1})]),default:s(()=>[Q((v(),h(O,{ref_key:"formRef",ref:V,model:a(o),"label-width":"80px"},{default:s(()=>[d(y,{label:"\u89D2\u8272\u540D\u79F0"},{default:s(()=>[d(r,null,{default:s(()=>[c(C(a(o).name),1)]),_:1})]),_:1}),d(y,{label:"\u89D2\u8272\u6807\u8BC6"},{default:s(()=>[d(r,null,{default:s(()=>[c(C(a(o).code),1)]),_:1})]),_:1}),d(y,{label:"\u6743\u9650\u8303\u56F4"},{default:s(()=>[d(A,{modelValue:a(o).dataScope,"onUpdate:modelValue":e[0]||(e[0]=t=>a(o).dataScope=t)},{default:s(()=>[(v(!0),Y(z,null,G(a(ne)(a(me).SYSTEM_DATA_SCOPE),t=>(v(),h(g,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[q,a(f)]]),a(o).dataScope===a(D).DEPT_CUSTOM?(v(),h(y,{key:0,label:"\u6743\u9650\u8303\u56F4",style:{display:"flex"}},{default:s(()=>[d(N,{class:"card",shadow:"never"},{header:s(()=>[c(" \u5168\u9009/\u5168\u4E0D\u9009: "),d(x,{modelValue:a(i),"onUpdate:modelValue":e[1]||(e[1]=t=>S(i)?i.value=t:null),"active-text":"\u662F","inactive-text":"\u5426","inline-prompt":"",onChange:e[2]||(e[2]=t=>{_.value.setCheckedNodes(i.value?k.value:[])})},null,8,["modelValue"]),c(" \u5168\u90E8\u5C55\u5F00/\u6298\u53E0: "),d(x,{modelValue:a(m),"onUpdate:modelValue":e[3]||(e[3]=t=>S(m)?m.value=t:null),"active-text":"\u5C55\u5F00","inactive-text":"\u6298\u53E0","inline-prompt":"",onChange:M},null,8,["modelValue"]),c(" \u7236\u5B50\u8054\u52A8(\u9009\u4E2D\u7236\u8282\u70B9\uFF0C\u81EA\u52A8\u9009\u62E9\u5B50\u8282\u70B9): "),d(x,{modelValue:a(p),"onUpdate:modelValue":e[4]||(e[4]=t=>S(p)?p.value=t:null),"active-text":"\u662F","inactive-text":"\u5426","inline-prompt":""},null,8,["modelValue"])]),default:s(()=>[d(H,{ref_key:"treeRef",ref:_,"check-strictly":!a(p),data:a(k),props:a(ie),"default-expand-all":"","empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E","node-key":"id","show-checkbox":""},null,8,["check-strictly","data","props"])]),_:1})]),_:1})):J("",!0)]),_:1},8,["modelValue"])}}})});export{w as _,xe as __tla};
