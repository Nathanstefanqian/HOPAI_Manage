import{a$ as q,bf as w,bc as p,b0 as x,b5 as P,d as m,b1 as V,r as $,b as o,be as A,ca as B,aR as F,o as c,c as v,av as b,a as l,q as f,w as I,aP as N,b2 as R,aI as C,V as D,b3 as G,b4 as H,__tla as J}from"./index-7b6f7d71.js";let y,K=Promise.all([(()=>{try{return J}catch{}})()]).then(async()=>{const _=q({size:{type:[Number,String],values:w,default:"",validator:s=>p(s)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:x},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:P(String),default:"cover"}}),d={error:s=>s instanceof Event},S=["src","alt","srcset"],g=m({name:"ElAvatar"});y=H(G(m({...g,props:_,emits:d,setup(s,{emit:h}){const t=s,e=V("avatar"),n=$(!1),k=o(()=>{const{size:a,icon:i,shape:u}=t,r=[e.b()];return A(a)&&r.push(e.m(a)),i&&r.push(e.m("icon")),u&&r.push(e.m(u)),r}),z=o(()=>{const{size:a}=t;return p(a)?e.cssVarBlock({size:B(a)||""}):void 0}),E=o(()=>({objectFit:t.fit}));function j(a){n.value=!0,h("error",a)}return F(()=>t.src,()=>n.value=!1),(a,i)=>(c(),v("span",{class:D(l(k)),style:b(l(z))},[!a.src&&!a.srcSet||n.value?a.icon?(c(),f(l(R),{key:1},{default:I(()=>[(c(),f(N(a.icon)))]),_:1})):C(a.$slots,"default",{key:2}):(c(),v("img",{key:0,src:a.src,alt:a.alt,srcset:a.srcSet,style:b(l(E)),onError:j},null,44,S))],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]))});export{y as E,K as __tla};
