import{d as I,p,U as Q,b as $,a$ as Z,cb as G,r as H,o as r,c as x,V as f,a as t,g as v,j as u,t as m,q as h,w as s,a3 as g,i as b,Z as K,_ as L,ay as N,dy as R,B as S,a2 as W,ah as j,cc as X,aJ as d,F as Y,k as ee,bU as ae,__tla as te}from"./index-12d626d1.js";import{a as le,E as re,__tla as se}from"./el-descriptions-item-bcff27da.js";import{_ as oe,__tla as de}from"./DictTag.vue_vue_type_script_lang-297052e2.js";let O,ie=Promise.all([(()=>{try{return te}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return de}catch{}})()]).then(async()=>{let k;k={class:"flex items-center"},O=I({name:"Descriptions",__name:"Descriptions",props:{title:p.string.def(""),message:p.string.def(""),collapse:p.bool.def(!0),columns:p.number.def(1),schema:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})}},setup(a){const A=Q(),B=$(()=>A.getMobile),C=Z(),D=G(),_=a,{getPrefixCls:F}=K(),i=F("descriptions"),P=$(()=>{const l=["title","message","collapse","schema","data","class"],c={...C,..._};for(const o in c)l.indexOf(o)!==-1&&delete c[o];return c}),n=H(!0),T=()=>{_.collapse&&(n.value=!t(n))};return(l,c)=>{const o=L,U=N,q=oe,z=re,E=le,J=R;return r(),x("div",{class:f([t(i),"bg-[var(--el-color-white)] dark:bg-[var(--el-bg-color)] dark:border-[var(--el-border-color)] dark:border-1px"])},[a.title?(r(),x("div",{key:0,class:f([`${t(i)}-header`,"h-50px flex justify-between items-center b-b-1 border-solid border-[var(--el-border-color)] px-10px cursor-pointer dark:border-[var(--el-border-color)]"]),onClick:T},[v("div",{class:f([`${t(i)}-header__title`,"relative font-18px font-bold ml-10px"])},[v("div",k,[u(m(a.title)+" ",1),a.message?(r(),h(U,{key:0,content:a.message,placement:"right"},{default:s(()=>[b(o,{class:"ml-5px",icon:"ep:warning"})]),_:1},8,["content"])):g("",!0)])],2),a.collapse?(r(),h(o,{key:0,icon:t(n)?"ep:arrow-down":"ep:arrow-up"},null,8,["icon"])):g("",!0)],2)):g("",!0),b(J,null,{default:s(()=>[S(v("div",{class:f([`${t(i)}-content`,"p-10px"])},[b(E,j({column:_.columns,direction:t(B)?"vertical":"horizontal",border:""},t(P)),X({default:s(()=>[(r(!0),x(Y,null,ee(a.schema,e=>(r(),h(z,j({key:e.field,"min-width":"80"},(M=>{const V=["field"],y={...M};for(const w in y)V.indexOf(w)!==-1&&delete y[w];return y})(e)),{label:s(()=>[d(l.$slots,`${e.field}-label`,{row:{label:e.label}},()=>[u(m(e.label),1)],!0)]),default:s(()=>[e.dateFormat?d(l.$slots,"default",{key:0},()=>[u(m(a.data[e.field]!==null?t(ae)(a.data[e.field]).format(e.dateFormat):""),1)],!0):e.dictType?d(l.$slots,"default",{key:1},()=>[b(q,{type:e.dictType,value:a.data[e.field]+""},null,8,["type","value"])],!0):d(l.$slots,e.field,{key:2,row:a.data},()=>[u(m(a.data[e.field]),1)],!0)]),_:2},1040))),128))]),_:2},[t(D).extra?{name:"extra",fn:s(()=>[d(l.$slots,"extra",{},void 0,!0)]),key:"0"}:void 0]),1040,["column","direction"])],2),[[W,t(n)]])]),_:3})],2)}}})});export{O as _,ie as __tla};
