import{d as _e,l as me,u as de,r as _,f as fe,A as ye,ai as we,O as ke,o as n,c as S,i as a,w as l,a as t,P as H,F as J,k as he,q as i,j as u,B as f,g as B,t as v,a3 as Q,x as M,ah as ge,T as ve,D as be,M as Ce,C as Ve,_ as xe,H as De,I as Te,J as Se,aj as Ue,bY as Pe,K as Be,L as Me,__tla as qe}from"./index-03db6098.js";import{_ as Re,__tla as Ee}from"./Dialog.vue_vue_type_style_index_0_lang-0ea1a6f5.js";import{_ as Ke,__tla as Ne}from"./index.vue_vue_type_script_setup_true_lang-ac924d97.js";import{_ as Oe,__tla as je}from"./DictTag.vue_vue_type_script_lang-708b6aad.js";import{_ as Ae,__tla as Fe}from"./ContentWrap.vue_vue_type_script_setup_true_lang-a0ae01cb.js";import{a as Ie,D as $,__tla as Le}from"./dict-9d6b3d0a.js";import{d as ze,f as Ye,__tla as Ge}from"./formatTime-c52167d0.js";import{j as Xe,__tla as He}from"./bpmn-embedded-ea0ec25c.js";import{a as Je,d as Qe,b as $e,e as We,g as Ze,__tla as ea}from"./index-7b8a44cd.js";import{g as aa,__tla as la}from"./index-47d13a9f.js";import{_ as ta,__tla as ra}from"./ModelForm.vue_vue_type_script_setup_true_lang-36d0d2b3.js";import{_ as oa,__tla as na}from"./ModelImportForm.vue_vue_type_script_setup_true_lang-75482afa.js";import{b as ia}from"./formCreate-a3356cdc.js";import{u as sa,__tla as pa}from"./useMessage-3de53a8e.js";import{__tla as ua}from"./index-f44a5e06.js";import"./color-a8b4eb58.js";import{__tla as ca}from"./el-card-cbdeb4d9.js";import{__tla as _a}from"./XTextButton-e9b02a74.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as ma}from"./XButton-ef3209ef.js";import{__tla as da}from"./el-collapse-item-b2684441.js";import{__tla as fa}from"./el-link-bd7d59ee.js";import{__tla as ya}from"./el-drawer-47e359ce.js";let W,wa=Promise.all([(()=>{try{return qe}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ya}catch{}})()]).then(async()=>{let q,R;q={key:2},R={key:0},W=_e({name:"BpmModel",__name:"index",setup(ka){const k=sa(),{t:E}=me(),{push:b}=de(),U=_(!0),K=_(0),N=_([]),s=fe({pageNo:1,pageSize:10,key:void 0,name:void 0,category:void 0}),O=_(),y=async()=>{U.value=!0;try{const d=await Je(s);N.value=d.list,K.value=d.total}finally{U.value=!1}},C=()=>{s.pageNo=1,y()},Z=()=>{O.value.resetFields(),C()},j=_(),A=(d,r)=>{j.value.open(d,r)},F=_(),ee=()=>{F.value.open()},V=_(!1),P=_({rule:[],option:{}}),I=async d=>{if(d.formType==10){const r=await aa(d.formId);ia(P,r.conf,r.fields),V.value=!0}else await b({path:d.formCustomCreatePath})},x=_(!1),h=_(null),L=_({prefix:"flowable"});return ye(()=>{y()}),(d,r)=>{const z=ve,D=be,ae=Ce,le=Ve,T=xe,p=De,te=Te,Y=Ae,m=Se,re=Oe,G=Ue,oe=Pe,ne=Be,ie=Ke,se=we("form-create"),X=Re,w=ke("hasPermi"),pe=Me;return n(),S(J,null,[a(Y,null,{default:l(()=>[a(te,{class:"-mb-15px",model:t(s),ref_key:"queryFormRef",ref:O,inline:!0,"label-width":"68px"},{default:l(()=>[a(D,{label:"\u6D41\u7A0B\u6807\u8BC6",prop:"key"},{default:l(()=>[a(z,{modelValue:t(s).key,"onUpdate:modelValue":r[0]||(r[0]=e=>t(s).key=e),placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u6807\u8BC6",clearable:"",onKeyup:H(C,["enter"]),class:"!w-240px"},null,8,["modelValue","onKeyup"])]),_:1}),a(D,{label:"\u6D41\u7A0B\u540D\u79F0",prop:"name"},{default:l(()=>[a(z,{modelValue:t(s).name,"onUpdate:modelValue":r[1]||(r[1]=e=>t(s).name=e),placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u540D\u79F0",clearable:"",onKeyup:H(C,["enter"]),class:"!w-240px"},null,8,["modelValue","onKeyup"])]),_:1}),a(D,{label:"\u6D41\u7A0B\u5206\u7C7B",prop:"category"},{default:l(()=>[a(le,{modelValue:t(s).category,"onUpdate:modelValue":r[2]||(r[2]=e=>t(s).category=e),placeholder:"\u8BF7\u9009\u62E9\u6D41\u7A0B\u5206\u7C7B",clearable:"",class:"!w-240px"},{default:l(()=>[(n(!0),S(J,null,he(t(Ie)(t($).BPM_MODEL_CATEGORY),e=>(n(),i(ae,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(D,null,{default:l(()=>[a(p,{onClick:C},{default:l(()=>[a(T,{icon:"ep:search",class:"mr-5px"}),u(" \u641C\u7D22")]),_:1}),a(p,{onClick:Z},{default:l(()=>[a(T,{icon:"ep:refresh",class:"mr-5px"}),u(" \u91CD\u7F6E")]),_:1}),f((n(),i(p,{type:"primary",plain:"",onClick:r[3]||(r[3]=e=>A("create"))},{default:l(()=>[a(T,{icon:"ep:plus",class:"mr-5px"}),u(" \u65B0\u5EFA\u6D41\u7A0B ")]),_:1})),[[w,["bpm:model:create"]]]),f((n(),i(p,{type:"success",plain:"",onClick:ee},{default:l(()=>[a(T,{icon:"ep:upload",class:"mr-5px"}),u(" \u5BFC\u5165\u6D41\u7A0B ")]),_:1})),[[w,["bpm:model:import"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(Y,null,{default:l(()=>[f((n(),i(ne,{data:t(N)},{default:l(()=>[a(m,{label:"\u6D41\u7A0B\u6807\u8BC6",align:"center",prop:"key",width:"200"}),a(m,{label:"\u6D41\u7A0B\u540D\u79F0",align:"center",prop:"name",width:"200"},{default:l(e=>[a(p,{type:"primary",link:"",onClick:c=>(async o=>{const g=await Ze(o.id);h.value=g.bpmnXml||"",x.value=!0})(e.row)},{default:l(()=>[B("span",null,v(e.row.name),1)]),_:2},1032,["onClick"])]),_:1}),a(m,{label:"\u6D41\u7A0B\u5206\u7C7B",align:"center",prop:"category",width:"100"},{default:l(e=>[a(re,{type:t($).BPM_MODEL_CATEGORY,value:e.row.category},null,8,["type","value"])]),_:1}),a(m,{label:"\u8868\u5355\u4FE1\u606F",align:"center",prop:"formType",width:"200"},{default:l(e=>[e.row.formType===10?(n(),i(p,{key:0,type:"primary",link:"",onClick:c=>I(e.row)},{default:l(()=>[B("span",null,v(e.row.formName),1)]),_:2},1032,["onClick"])):e.row.formType===20?(n(),i(p,{key:1,type:"primary",link:"",onClick:c=>I(e.row)},{default:l(()=>[B("span",null,v(e.row.formCustomCreatePath),1)]),_:2},1032,["onClick"])):(n(),S("label",q,"\u6682\u65E0\u8868\u5355"))]),_:1}),a(m,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:t(ze)},null,8,["formatter"]),a(m,{label:"\u6700\u65B0\u90E8\u7F72\u7684\u6D41\u7A0B\u5B9A\u4E49",align:"center"},{default:l(()=>[a(m,{label:"\u6D41\u7A0B\u7248\u672C",align:"center",prop:"processDefinition.version",width:"100"},{default:l(e=>[e.row.processDefinition?(n(),i(G,{key:0},{default:l(()=>[u(" v"+v(e.row.processDefinition.version),1)]),_:2},1024)):(n(),i(G,{key:1,type:"warning"},{default:l(()=>[u("\u672A\u90E8\u7F72")]),_:1}))]),_:1}),a(m,{label:"\u6FC0\u6D3B\u72B6\u6001",align:"center",prop:"processDefinition.version",width:"85"},{default:l(e=>[e.row.processDefinition?(n(),i(oe,{key:0,modelValue:e.row.processDefinition.suspensionState,"onUpdate:modelValue":c=>e.row.processDefinition.suspensionState=c,"active-value":1,"inactive-value":2,onChange:c=>(async o=>{const g=o.processDefinition.suspensionState;try{const ue=o.id,ce="\u662F\u5426\u786E\u8BA4"+(g===1?"\u6FC0\u6D3B":"\u6302\u8D77")+'\u6D41\u7A0B\u540D\u5B57\u4E3A"'+o.name+'"\u7684\u6570\u636E\u9879?';await k.confirm(ce),await $e(ue,g),await y()}catch{o.processDefinition.suspensionState=g===1?2:1}})(e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])):Q("",!0)]),_:1}),a(m,{label:"\u90E8\u7F72\u65F6\u95F4",align:"center",prop:"deploymentTime",width:"180"},{default:l(e=>[e.row.processDefinition?(n(),S("span",R,v(t(Ye)(e.row.processDefinition.deploymentTime)),1)):Q("",!0)]),_:1})]),_:1}),a(m,{label:"\u64CD\u4F5C",align:"center",width:"240",fixed:"right"},{default:l(e=>[f((n(),i(p,{link:"",type:"primary",onClick:c=>A("update",e.row.id)},{default:l(()=>[u(" \u4FEE\u6539\u6D41\u7A0B ")]),_:2},1032,["onClick"])),[[w,["bpm:model:update"]]]),f((n(),i(p,{link:"",type:"primary",onClick:c=>{return o=e.row,void b({name:"BpmModelEditor",query:{modelId:o.id}});var o}},{default:l(()=>[u(" \u8BBE\u8BA1\u6D41\u7A0B ")]),_:2},1032,["onClick"])),[[w,["bpm:model:update"]]]),f((n(),i(p,{link:"",type:"primary",onClick:c=>{return o=e.row,void b({name:"BpmTaskAssignRuleList",query:{modelId:o.id}});var o}},{default:l(()=>[u(" \u5206\u914D\u89C4\u5219 ")]),_:2},1032,["onClick"])),[[w,["bpm:task-assign-rule:query"]]]),f((n(),i(p,{link:"",type:"primary",onClick:c=>(async o=>{try{await k.confirm("\u662F\u5426\u90E8\u7F72\u8BE5\u6D41\u7A0B\uFF01\uFF01"),await We(o.id),k.success(E("\u90E8\u7F72\u6210\u529F")),await y()}catch{}})(e.row)},{default:l(()=>[u(" \u53D1\u5E03\u6D41\u7A0B ")]),_:2},1032,["onClick"])),[[w,["bpm:model:deploy"]]]),f((n(),i(p,{link:"",type:"primary",onClick:c=>{return o=e.row,void b({name:"BpmProcessDefinition",query:{key:o.key}});var o}},{default:l(()=>[u(" \u6D41\u7A0B\u5B9A\u4E49 ")]),_:2},1032,["onClick"])),[[w,["bpm:process-definition:query"]]]),f((n(),i(p,{link:"",type:"danger",onClick:c=>(async o=>{try{await k.delConfirm(),await Qe(o),k.success(E("common.delSuccess")),await y()}catch{}})(e.row.id)},{default:l(()=>[u(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[w,["bpm:model:delete"]]])]),_:1})]),_:1},8,["data"])),[[pe,t(U)]]),a(ie,{total:t(K),page:t(s).pageNo,"onUpdate:page":r[4]||(r[4]=e=>t(s).pageNo=e),limit:t(s).pageSize,"onUpdate:limit":r[5]||(r[5]=e=>t(s).pageSize=e),onPagination:y},null,8,["total","page","limit"])]),_:1}),a(ta,{ref_key:"formRef",ref:j,onSuccess:y},null,512),a(oa,{ref_key:"importFormRef",ref:F,onSuccess:y},null,512),a(X,{title:"\u8868\u5355\u8BE6\u60C5",modelValue:t(V),"onUpdate:modelValue":r[6]||(r[6]=e=>M(V)?V.value=e:null),width:"800"},{default:l(()=>[a(se,{rule:t(P).rule,option:t(P).option},null,8,["rule","option"])]),_:1},8,["modelValue"]),a(X,{title:"\u6D41\u7A0B\u56FE",modelValue:t(x),"onUpdate:modelValue":r[8]||(r[8]=e=>M(x)?x.value=e:null),width:"800"},{default:l(()=>[a(t(Xe),ge({key:"designer",modelValue:t(h),"onUpdate:modelValue":r[7]||(r[7]=e=>M(h)?h.value=e:null),value:t(h)},t(L),{prefix:t(L).prefix}),null,16,["modelValue","value","prefix"])]),_:1},8,["modelValue"])],64)}}})});export{wa as __tla,W as default};