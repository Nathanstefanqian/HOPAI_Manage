import{aZ as c,bd as m,d as s,bJ as o,a$ as y,b as d,bx as b,o as g,q as _,w as f,aH as x,V as v,a as w,au as S,aO as h,b1 as k,b2 as C,__tla as E}from"./index-cc83619a.js";let l,$=Promise.all([(()=>{try{return E}catch{}})()]).then(async()=>{const n=c({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:m,default:""},truncated:{type:Boolean},lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),r=s({name:"ElText"});l=C(k(s({...r,props:n,setup(p){const a=p,u=o(),e=y("text"),i=d(()=>[e.b(),e.m(a.type),e.m(u.value),e.is("truncated",a.truncated),e.is("line-clamp",!b(a.lineClamp))]);return(t,q)=>(g(),_(h(t.tag),{class:v(w(i)),style:S({"-webkit-line-clamp":t.lineClamp})},{default:f(()=>[x(t.$slots,"default")]),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/text/src/text.vue"]]))});export{l as E,$ as __tla};