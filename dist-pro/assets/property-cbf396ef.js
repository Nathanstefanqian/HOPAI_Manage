import{d as w,o as _,q as k,w as a,i as e,a as o,c as s,F as c,k as v,a3 as z,bJ as D,D as W,_ as C,ax as P,ay as j,af as q,I as F,__tla as I}from"./index-9a3dc6a8.js";import{_ as J,__tla as A}from"./index-0e7ae58e.js";import{u as B,__tla as E}from"./util-a624db27.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as G}from"./el-card-a6a1b26c.js";import{__tla as H}from"./vuedraggable.umd-8bdabacc.js";import{__tla as K}from"./el-collapse-item-229b0dc7.js";import{__tla as L}from"./useMessage-78b6afd0.js";let y,M=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return L}catch{}})()]).then(async()=>{y=w({name:"DividerProperty",__name:"property",props:{modelValue:{}},emits:["update:modelValue"],setup(h,{emit:f}){const b=h,x=f,{formData:l}=B(b.modelValue,x),g=[{icon:"vaadin:line-h",text:"\u5B9E\u7EBF",type:"solid"},{icon:"tabler:line-dashed",text:"\u865A\u7EBF",type:"dashed"},{icon:"tabler:line-dotted",text:"\u70B9\u7EBF",type:"dotted"},{icon:"entypo:progress-empty",text:"\u65E0",type:"none"}];return(N,n)=>{const u=D,d=W,r=C,p=P,i=j,m=q,V=J,T=F;return _(),k(T,{"label-width":"80px",model:o(l)},{default:a(()=>[e(d,{label:"\u9AD8\u5EA6",prop:"height"},{default:a(()=>[e(u,{modelValue:o(l).height,"onUpdate:modelValue":n[0]||(n[0]=t=>o(l).height=t),min:1,max:100,"show-input":"","input-size":"small"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u9009\u62E9\u6837\u5F0F",prop:"borderType"},{default:a(()=>[e(m,{modelValue:o(l).borderType,"onUpdate:modelValue":n[1]||(n[1]=t=>o(l).borderType=t)},{default:a(()=>[(_(),s(c,null,v(g,(t,U)=>e(i,{placement:"top",key:U,content:t.text},{default:a(()=>[e(p,{label:t.type},{default:a(()=>[e(r,{icon:t.icon},null,8,["icon"])]),_:2},1032,["label"])]),_:2},1032,["content"])),64))]),_:1},8,["modelValue"])]),_:1}),o(l).borderType!=="none"?(_(),s(c,{key:0},[e(d,{label:"\u7EBF\u5BBD",prop:"lineWidth"},{default:a(()=>[e(u,{modelValue:o(l).lineWidth,"onUpdate:modelValue":n[2]||(n[2]=t=>o(l).lineWidth=t),min:1,max:30,"show-input":"","input-size":"small"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u5DE6\u53F3\u8FB9\u8DDD",prop:"paddingType"},{default:a(()=>[e(m,{modelValue:o(l).paddingType,"onUpdate:modelValue":n[3]||(n[3]=t=>o(l).paddingType=t)},{default:a(()=>[e(i,{content:"\u65E0\u8FB9\u8DDD",placement:"top"},{default:a(()=>[e(p,{label:"none"},{default:a(()=>[e(r,{icon:"tabler:box-padding"})]),_:1})]),_:1}),e(i,{content:"\u5DE6\u53F3\u7559\u8FB9",placement:"top"},{default:a(()=>[e(p,{label:"horizontal"},{default:a(()=>[e(r,{icon:"vaadin:padding"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u989C\u8272"},{default:a(()=>[e(V,{modelValue:o(l).lineColor,"onUpdate:modelValue":n[4]||(n[4]=t=>o(l).lineColor=t)},null,8,["modelValue"])]),_:1})],64)):z("",!0)]),_:1},8,["model"])}}})});export{M as __tla,y as default};