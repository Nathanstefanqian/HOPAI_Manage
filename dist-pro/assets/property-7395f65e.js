import{d as W,o as h,c as b,i as e,w as d,a,F as k,j as n,B as D,a2 as I,a3 as P,T,D as F,_ as J,ax as v,ay as M,af as q,bJ as A,bI as E,ac as G,ag as H,I as K,__tla as L}from"./index-9a3dc6a8.js";import{_ as N,__tla as O}from"./index-0e7ae58e.js";import{u as Q,__tla as R}from"./util-a624db27.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as X}from"./el-card-a6a1b26c.js";import{__tla as Y}from"./vuedraggable.umd-8bdabacc.js";import{__tla as Z}from"./el-collapse-item-229b0dc7.js";import{__tla as $}from"./useMessage-78b6afd0.js";let y,j=Promise.all([(()=>{try{return L}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return $}catch{}})()]).then(async()=>{let s;s={class:"title-bar"},y=W({name:"TitleBarProperty",__name:"property",props:{modelValue:{}},emits:["update:modelValue"],setup(w,{emit:g}){const U=w,x=g,{formData:l}=Q(U.modelValue,x),z={};return(ee,t)=>{const u=T,r=F,_=J,c=v,V=M,f=q,m=A,i=N,C=E,B=G,p=H,S=K;return h(),b("section",s,[e(S,{"label-width":"85px",model:a(l),rules:z},{default:d(()=>[e(r,{label:"\u4E3B\u6807\u9898",prop:"title"},{default:d(()=>[e(u,{modelValue:a(l).title,"onUpdate:modelValue":t[0]||(t[0]=o=>a(l).title=o),placeholder:"\u8BF7\u8F93\u5165\u4E3B\u6807\u9898","show-word-limit":"",maxlength:"20"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u526F\u6807\u9898",prop:"description"},{default:d(()=>[e(u,{type:"textarea",modelValue:a(l).description,"onUpdate:modelValue":t[1]||(t[1]=o=>a(l).description=o),placeholder:"\u8BF7\u8F93\u5165\u526F\u6807\u9898",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),e(r,{label:"\u663E\u793A\u4F4D\u7F6E",prop:"position"},{default:d(()=>[e(f,{modelValue:a(l).position,"onUpdate:modelValue":t[2]||(t[2]=o=>a(l).position=o)},{default:d(()=>[e(V,{content:"\u5C45\u5DE6",placement:"top"},{default:d(()=>[e(c,{label:"left"},{default:d(()=>[e(_,{icon:"ant-design:align-left-outlined"})]),_:1})]),_:1}),e(V,{content:"\u5C45\u4E2D",placement:"top"},{default:d(()=>[e(c,{label:"center"},{default:d(()=>[e(_,{icon:"ant-design:align-center-outlined"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u6807\u9898\u5927\u5C0F",prop:"titleSize"},{default:d(()=>[e(m,{modelValue:a(l).titleSize,"onUpdate:modelValue":t[3]||(t[3]=o=>a(l).titleSize=o),max:60,min:10,"show-input":"","input-size":"small"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u526F\u6807\u9898\u5927\u5C0F",prop:"descriptionSize"},{default:d(()=>[e(m,{modelValue:a(l).descriptionSize,"onUpdate:modelValue":t[4]||(t[4]=o=>a(l).descriptionSize=o),max:60,min:10,"show-input":"","input-size":"small"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u6807\u9898\u7C97\u7EC6",prop:"titleWeight"},{default:d(()=>[e(m,{modelValue:a(l).titleWeight,"onUpdate:modelValue":t[5]||(t[5]=o=>a(l).titleWeight=o),min:100,max:900,step:100,"show-input":"","input-size":"small"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u526F\u6807\u9898\u7C97\u7EC6",prop:"descriptionWeight"},{default:d(()=>[e(m,{modelValue:a(l).descriptionWeight,"onUpdate:modelValue":t[6]||(t[6]=o=>a(l).descriptionWeight=o),min:100,max:900,step:100,"show-input":"","input-size":"small"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u6807\u9898\u989C\u8272",prop:"titleColor"},{default:d(()=>[e(i,{modelValue:a(l).titleColor,"onUpdate:modelValue":t[7]||(t[7]=o=>a(l).titleColor=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u526F\u6807\u9898\u989C\u8272",prop:"descriptionColor"},{default:d(()=>[e(i,{modelValue:a(l).descriptionColor,"onUpdate:modelValue":t[8]||(t[8]=o=>a(l).descriptionColor=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u80CC\u666F\u989C\u8272",prop:"backgroundColor"},{default:d(()=>[e(i,{modelValue:a(l).backgroundColor,"onUpdate:modelValue":t[9]||(t[9]=o=>a(l).backgroundColor=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5E95\u90E8\u5206\u5272\u7EBF",prop:"showBottomBorder"},{default:d(()=>[e(C,{modelValue:a(l).showBottomBorder,"onUpdate:modelValue":t[10]||(t[10]=o=>a(l).showBottomBorder=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u67E5\u770B\u66F4\u591A",prop:"more.show"},{default:d(()=>[e(B,{modelValue:a(l).more.show,"onUpdate:modelValue":t[11]||(t[11]=o=>a(l).more.show=o)},null,8,["modelValue"])]),_:1}),a(l).more.show?(h(),b(k,{key:0},[e(r,{label:"\u6837\u5F0F",prop:"more.type"},{default:d(()=>[e(f,{modelValue:a(l).more.type,"onUpdate:modelValue":t[12]||(t[12]=o=>a(l).more.type=o)},{default:d(()=>[e(p,{label:"text"},{default:d(()=>[n("\u6587\u5B57")]),_:1}),e(p,{label:"icon"},{default:d(()=>[n("\u56FE\u6807")]),_:1}),e(p,{label:"all"},{default:d(()=>[n("\u6587\u5B57+\u56FE\u6807")]),_:1})]),_:1},8,["modelValue"])]),_:1}),D(e(r,{label:"\u66F4\u591A\u6587\u5B57",prop:"more.text"},{default:d(()=>[e(u,{modelValue:a(l).more.text,"onUpdate:modelValue":t[13]||(t[13]=o=>a(l).more.text=o)},null,8,["modelValue"])]),_:1},512),[[I,a(l).more.type!=="icon"]]),e(r,{label:"\u8DF3\u8F6C\u94FE\u63A5",prop:"more.url"},{default:d(()=>[e(u,{modelValue:a(l).more.url,"onUpdate:modelValue":t[14]||(t[14]=o=>a(l).more.url=o),placeholder:"\u8BF7\u8F93\u5165\u8DF3\u8F6C\u94FE\u63A5"},null,8,["modelValue"])]),_:1})],64)):P("",!0)]),_:1},8,["model"])])}}})});export{j as __tla,y as default};