import{d as S,b as T,r as c,A as j,O as B,o as l,c as _,i as p,w as i,F as y,k as C,a as f,x as P,B as q,q as h,j as F,a3 as H,C as O,H as R,M as U,__tla as z}from"./index-dc75a212.js";import{_ as D,g as E,__tla as G}from"./TagForm.vue_vue_type_script_setup_true_lang-621b64c4.js";let v,I=Promise.all([(()=>{try{return z}catch{}})(),(()=>{try{return G}catch{}})()]).then(async()=>{v=S({name:"MemberTagSelect",__name:"MemberTagSelect",props:{modelValue:{type:Array,default:void 0},showAdd:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{expose:V,emit:b}){const r=t,w=b;V({showAdd:r.showAdd});const s=T({get:()=>r.modelValue,set(m){w("update:modelValue",m)}}),o=c([]),u=async()=>{o.value=await E()},d=c();return j(()=>{u()}),(m,e)=>{const k=U,A=O,g=R,x=B("hasPermi");return l(),_(y,null,[p(A,{modelValue:f(s),"onUpdate:modelValue":e[0]||(e[0]=a=>P(s)?s.value=a:null),placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u6807\u7B7E",clearable:"",multiple:"",class:"!w-240px"},{default:i(()=>[(l(!0),_(y,null,C(f(o),a=>(l(),h(k,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),t.showAdd?q((l(),h(g,{key:0,type:"primary",class:"ml-2",link:"",onClick:e[1]||(e[1]=a=>{return n="create",void d.value.open(n,M);var n,M})},{default:i(()=>[F(" \u65B0\u589E\u6807\u7B7E ")]),_:1})),[[x,["member:tag:create"]]]):H("",!0),p(D,{ref_key:"formRef",ref:d,onSuccess:u},null,512)],64)}}})});export{v as _,I as __tla};