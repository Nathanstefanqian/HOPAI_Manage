import{aZ as P,b3 as S,cc as ae,bO as V,bP as F,ba as se,r as K,d3 as j,aQ as le,bT as te,a$ as O,b as c,d as _,o as T,c as W,aH as A,V as m,a as e,b1 as Q,du as Z,bw as ie,g as I,j as oe,t as ne,i as w,w as q,cC as ce,b0 as de,P as re,aP as ue,B as pe,a2 as me,dv as be,b2 as ve,b6 as he,__tla as Ce}from"./index-cc83619a.js";let z,D,fe=Promise.all([(()=>{try{return Ce}catch{}})()]).then(async()=>{const $=b=>typeof se(b),G=P({accordion:Boolean,modelValue:{type:S([Array,String,Number]),default:()=>ae([])}}),J={[V]:$,[F]:$},B=Symbol("collapseContextKey"),L=_({name:"ElCollapse"});var M=Q(_({...L,props:G,emits:J,setup(b,{expose:k,emit:h}){const C=b,{activeNames:g,setActiveNames:r}=((t,u)=>{const o=K(j(t.modelValue)),v=d=>{o.value=d;const n=t.accordion?o.value[0]:o.value;u(V,n),u(F,n)};return le(()=>t.modelValue,()=>o.value=j(t.modelValue),{deep:!0}),te(B,{activeNames:o,handleItemClick:d=>{if(t.accordion)v([o.value[0]===d?"":d]);else{const n=[...o.value],y=n.indexOf(d);y>-1?n.splice(y,1):n.push(d),v(n)}}}),{activeNames:o,setActiveNames:v}})(C,h),{rootKls:f}=(()=>{const t=O("collapse");return{rootKls:c(()=>t.b())}})();return k({activeNames:g,setActiveNames:r}),(t,u)=>(T(),W("div",{class:m(e(f))},[A(t.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const R=P({title:{type:String,default:""},name:{type:S([String,Number]),default:()=>Z()},disabled:Boolean}),U=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],X=["id","aria-hidden","aria-labelledby"],Y=_({name:"ElCollapseItem"});var E=Q(_({...Y,props:R,setup(b,{expose:k}){const h=b,{focusing:C,id:g,isActive:r,handleFocus:f,handleHeaderClick:t,handleEnterClick:u}=(i=>{const a=ie(B),s=K(!1),p=K(!1),l=K(Z()),x=c(()=>a==null?void 0:a.activeNames.value.includes(i.name));return{focusing:s,id:l,isActive:x,handleFocus:()=>{setTimeout(()=>{p.value?p.value=!1:s.value=!0},50)},handleHeaderClick:()=>{i.disabled||(a==null||a.handleItemClick(i.name),s.value=!1,p.value=!0)},handleEnterClick:()=>{a==null||a.handleItemClick(i.name)}}})(h),{arrowKls:o,headKls:v,rootKls:d,itemWrapperKls:n,itemContentKls:y,scopedContentId:N,scopedHeadId:H}=((i,{focusing:a,isActive:s,id:p})=>{const l=O("collapse"),x=c(()=>[l.b("item"),l.is("active",e(s)),l.is("disabled",i.disabled)]),ee=c(()=>[l.be("item","header"),l.is("active",e(s)),{focusing:e(a)&&!i.disabled}]);return{arrowKls:c(()=>[l.be("item","arrow"),l.is("active",e(s))]),headKls:ee,rootKls:x,itemWrapperKls:c(()=>l.be("item","wrap")),itemContentKls:c(()=>l.be("item","content")),scopedContentId:c(()=>l.b(`content-${e(p)}`)),scopedHeadId:c(()=>l.b(`head-${e(p)}`))}})(h,{focusing:C,isActive:r,id:g});return k({isActive:r}),(i,a)=>(T(),W("div",{class:m(e(d))},[I("button",{id:e(H),class:m(e(v)),"aria-expanded":e(r),"aria-controls":e(N),"aria-describedby":e(N),tabindex:i.disabled?-1:0,type:"button",onClick:a[0]||(a[0]=(...s)=>e(t)&&e(t)(...s)),onKeydown:a[1]||(a[1]=re(ue((...s)=>e(u)&&e(u)(...s),["stop","prevent"]),["space","enter"])),onFocus:a[2]||(a[2]=(...s)=>e(f)&&e(f)(...s)),onBlur:a[3]||(a[3]=s=>C.value=!1)},[A(i.$slots,"title",{},()=>[oe(ne(i.title),1)]),w(e(de),{class:m(e(o))},{default:q(()=>[w(e(ce))]),_:1},8,["class"])],42,U),w(e(be),null,{default:q(()=>[pe(I("div",{id:e(N),role:"region",class:m(e(n)),"aria-hidden":!e(r),"aria-labelledby":e(H)},[I("div",{class:m(e(y))},[A(i.$slots,"default")],2)],10,X),[[me,e(r)]])]),_:3})],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);D=ve(M,{CollapseItem:E}),z=he(E)});export{z as E,fe as __tla,D as a};