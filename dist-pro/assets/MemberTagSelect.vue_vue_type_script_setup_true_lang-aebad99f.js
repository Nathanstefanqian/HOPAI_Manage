import{d as S,b as T,r as _,A as j,O as B,o as l,c,i as p,w as i,F as y,k as C,a as f,x as P,B as q,q as h,j as F,a3 as H,C as O,H as R,M as U,__tla as z}from"./index-12d626d1.js";import{g as D,__tla as E}from"./index-45c56319.js";import{_ as G,__tla as I}from"./TagForm.vue_vue_type_script_setup_true_lang-8e378924.js";let v,J=Promise.all([(()=>{try{return z}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return I}catch{}})()]).then(async()=>{v=S({name:"MemberTagSelect",__name:"MemberTagSelect",props:{modelValue:{type:Array,default:void 0},showAdd:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{expose:w,emit:b}){const r=s,V=b;w({showAdd:r.showAdd});const t=T({get:()=>r.modelValue,set(m){V("update:modelValue",m)}}),o=_([]),u=async()=>{o.value=await D()},d=_();return j(()=>{u()}),(m,e)=>{const k=U,A=O,g=R,x=B("hasPermi");return l(),c(y,null,[p(A,{modelValue:f(t),"onUpdate:modelValue":e[0]||(e[0]=a=>P(t)?t.value=a:null),placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u6807\u7B7E",clearable:"",multiple:"",class:"!w-240px"},{default:i(()=>[(l(!0),c(y,null,C(f(o),a=>(l(),h(k,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),s.showAdd?q((l(),h(g,{key:0,type:"primary",class:"ml-2",link:"",onClick:e[1]||(e[1]=a=>{return n="create",void d.value.open(n,M);var n,M})},{default:i(()=>[F(" \u65B0\u589E\u6807\u7B7E ")]),_:1})),[[x,["member:tag:create"]]]):H("",!0),p(G,{ref_key:"formRef",ref:d,onSuccess:u},null,512)],64)}}})});export{v as _,J as __tla};
