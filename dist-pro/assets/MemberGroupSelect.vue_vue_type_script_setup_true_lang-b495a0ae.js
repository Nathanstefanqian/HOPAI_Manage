import{d as b,b as V,r as v,A as y,o as l,q as r,w as f,c as h,k as x,a as o,F as w,x as M,C as g,M as k,__tla as G}from"./index-03db6098.js";import{g as S,__tla as q}from"./index-ebd43129.js";let m,A=Promise.all([(()=>{try{return G}catch{}})(),(()=>{try{return q}catch{}})()]).then(async()=>{m=b({name:"MemberGroupSelect",__name:"MemberGroupSelect",props:{modelValue:{type:Number,default:void 0}},emits:["update:modelValue"],setup(d,{emit:n}){const _=d,c=n,a=V({get:()=>_.modelValue,set(s){c("update:modelValue",s)}}),t=v([]);return y(()=>{(async()=>t.value=await S())()}),(s,u)=>{const p=k,i=g;return l(),r(i,{modelValue:o(a),"onUpdate:modelValue":u[0]||(u[0]=e=>M(a)?a.value=e:null),placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u5206\u7EC4",clearable:"",class:"!w-240px"},{default:f(()=>[(l(!0),h(w,null,x(o(t),e=>(l(),r(p,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}})});export{m as _,A as __tla};