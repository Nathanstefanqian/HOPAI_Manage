import{r as q,A,aQ as F,a_ as _,d as p,b0 as b,o as t,c as r,q as g,a,b5 as H,a3 as h,V as m,b2 as w,b6 as L,F as k,k as x,aH as S,i as P,ah as $,aI as Q,b3 as V,b7 as j,__tla as z}from"./index-ad2885e5.js";let E,C=Promise.all([(()=>{try{return z}catch{}})()]).then(async()=>{const I=_({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),N=_({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),B=p({name:"ElSkeletonItem"});var u=w(p({...B,props:N,setup(d){const i=b("skeleton");return(o,s)=>(t(),r("div",{class:m([a(i).e("item"),a(i).e(o.variant)])},[o.variant==="image"?(t(),g(a(H),{key:0})):h("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const T=p({name:"ElSkeleton"});E=V(w(p({...T,props:I,setup(d,{expose:i}){const o=d,s=b("skeleton"),v=((e,c=0)=>{if(c===0)return e;const l=q(!1);let n=0;const y=()=>{n&&clearTimeout(n),n=window.setTimeout(()=>{l.value=e.value},c)};return A(y),F(()=>e.value,f=>{f?y():l.value=f}),l})(L(o,"loading"),o.throttle);return i({uiLoading:v}),(e,c)=>a(v)?(t(),r("div",$({key:0,class:[a(s).b(),a(s).is("animated",e.animated)]},e.$attrs),[(t(!0),r(k,null,x(e.count,l=>(t(),r(k,{key:l},[e.loading?S(e.$slots,"template",{key:l},()=>[P(u,{class:m(a(s).is("first")),variant:"p"},null,8,["class"]),(t(!0),r(k,null,x(e.rows,n=>(t(),g(u,{key:n,class:m([a(s).e("paragraph"),a(s).is("last",n===e.rows&&e.rows>1)]),variant:"p"},null,8,["class"]))),128))]):h("v-if",!0)],64))),128))],16)):S(e.$slots,"default",Q($({key:1},e.$attrs)))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]),{SkeletonItem:u}),j(u)});export{E,C as __tla};