import{d as p,r as d,az as h,o as v,q as y,w as a,i as e,a as l,j as r,t as _,at as i,__tla as g}from"./index-9a3dc6a8.js";import{E as x,a as E,__tla as I}from"./el-descriptions-item-4912b042.js";import{__tla as w}from"./Descriptions.vue_vue_type_style_index_0_scoped_59d56eec_lang-45925201.js";import{D as n,__tla as P}from"./DescriptionsItemLabel-2f3aa0c8.js";import{g as R,__tla as j}from"./index-0e5322c5.js";import{_ as q}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as z}from"./DictTag.vue_vue_type_script_lang-8b411a6b.js";import"./color-a8b4eb58.js";import{__tla as A}from"./dict-8e2bc13b.js";let m,D=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return I}catch{}})(),(()=>{try{return w}catch{}})(),(()=>{try{return P}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return z}catch{}})(),(()=>{try{return A}catch{}})()]).then(async()=>{m=q(p({__name:"UserAccountInfo",props:{user:{}},setup(b){const c=b,u={balance:0,totalExpense:0,totalRecharge:0},o=d(u);return h(()=>c.user.id,()=>(async()=>{if(!c.user.id)return void(o.value=u);const s={userId:c.user.id};o.value=await R(s)||u})(),{immediate:!0}),(s,N)=>{const t=x,f=E;return v(),y(f,{column:2},{default:a(()=>[e(t,null,{label:a(()=>[e(l(n),{label:" \u7B49\u7EA7 ",icon:"svg-icon:member_level"})]),default:a(()=>[r(" "+_(s.user.levelName||"\u65E0"),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u6210\u957F\u503C ",icon:"ep:suitcase"})]),default:a(()=>[r(" "+_(s.user.experience||0),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u5F53\u524D\u79EF\u5206 ",icon:"ep:coin"})]),default:a(()=>[r(" "+_(s.user.point||0),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u603B\u79EF\u5206 ",icon:"ep:coin"})]),default:a(()=>[r(" "+_(s.user.totalPoint||0),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u5F53\u524D\u4F59\u989D ",icon:"svg-icon:member_balance"})]),default:a(()=>[r(" "+_(l(i)(l(o).balance||0)),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u652F\u51FA\u91D1\u989D ",icon:"svg-icon:member_expenditure_balance"})]),default:a(()=>[r(" "+_(l(i)(l(o).totalExpense||0)),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u5145\u503C\u91D1\u989D ",icon:"svg-icon:member_recharge_balance"})]),default:a(()=>[r(" "+_(l(i)(l(o).totalRecharge||0)),1)]),_:1})]),_:1})}}}),[["__scopeId","data-v-c407fd0f"]])});export{D as __tla,m as default};