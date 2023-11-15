import{d as U,r as v,f as V,A as Z,O as F,o as S,c as K,i,w as u,a as e,dU as _,au as d,g as M,B as X,q as z,j as J,E as N,n as Q,_ as W,H as Y,__tla as $}from"./index-866c10ab.js";import{E as ee,__tla as te}from"./el-card-978308e1.js";import{E as ae,__tla as re}from"./el-skeleton-item-4eb3eff5.js";import{_ as le,__tla as oe}from"./Echart.vue_vue_type_script_setup_true_lang-95a3ccfb.js";import{_ as ce,__tla as ie}from"./index.vue_vue_type_script_setup_true_lang-9f29c409.js";import{c as ne,d as se,e as ue,f as me,__tla as de}from"./trade-fcfc8aa4.js";import{_ as g,__tla as _e}from"./TradeStatisticValue.vue_vue_type_script_setup_true_lang-0ccc2c30.js";import{_ as p,__tla as pe}from"./index.vue_vue_type_script_setup_true_lang-f1df45a0.js";import{d as fe}from"./download-20922b56.js";import{C as ye,__tla as ve}from"./CardTitle-5b28548f.js";import{u as Pe,__tla as xe}from"./useMessage-68df17f5.js";import{_ as ge}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as he}from"./formatTime-2c3ed2e2.js";import{__tla as be}from"./CountTo.vue_vue_type_script_setup_true_lang-c173d2b1.js";let O,we=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return be}catch{}})()]).then(async()=>{let w,C;w={class:"flex flex-col"},C={class:"flex flex-row items-center justify-between"},O=ge(U({name:"TradeStatistics",__name:"index",setup(Ce){const A=Pe(),h=v(!0),b=v(!1),m=v(),n=v(),P=v(),x=V({dataset:{dimensions:["date","turnoverPrice","orderPayPrice","rechargePrice","expensePrice"],source:[]},grid:{left:20,right:20,bottom:20,top:80,containLabel:!0},legend:{top:50},series:[{name:"\u8425\u4E1A\u989D",type:"line",smooth:!0},{name:"\u5546\u54C1\u652F\u4ED8\u91D1\u989D",type:"line",smooth:!0},{name:"\u5145\u503C\u91D1\u989D",type:"line",smooth:!0},{name:"\u652F\u51FA\u91D1\u989D",type:"line",smooth:!0}],toolbox:{feature:{dataZoom:{yAxisIndex:!1},brush:{type:["lineX","clear"]},saveAsImage:{show:!0,name:"\u4EA4\u6613\u72B6\u51B5"}}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},xAxis:{type:"category",boundaryGap:!1,axisTick:{show:!1}},yAxis:{axisTick:{show:!1}}}),R=async()=>{h.value=!0,await Promise.all([I(),j()]),h.value=!1},I=async()=>{const f=P.value.times;n.value=await se({times:f})},j=async()=>{const f=P.value.times,y=await ue({times:f});for(let s of y)s.turnoverPrice=d(s.turnoverPrice),s.orderPayPrice=d(s.orderPayPrice),s.rechargePrice=d(s.rechargePrice),s.expensePrice=d(s.expensePrice);x.dataset&&x.dataset.source&&(x.dataset.source=y)},E=async()=>{try{await A.exportConfirm(),b.value=!0;const f=P.value.times,y=await me({times:f});fe.excel(y,"\u4EA4\u6613\u72B6\u51B5.xls")}catch{}finally{b.value=!1}};return Z(async()=>{await(async()=>{m.value=await ne()})()}),(f,y)=>{const s=N,k=Q,T=W,q=Y,B=ce,D=le,G=ae,H=ee,L=F("hasPermi");return S(),K("div",w,[i(k,{gutter:16,class:"summary"},{default:u(()=>[i(s,{sm:6,xs:12},{default:u(()=>{var t,a,r,l,o,c;return[i(g,{tooltip:"\u6628\u65E5\u8BA2\u5355\u6570\u91CF",title:"\u6628\u65E5\u8BA2\u5355\u6570\u91CF",value:((a=(t=e(m))==null?void 0:t.value)==null?void 0:a.yesterdayOrderCount)||0,percent:e(_)((l=(r=e(m))==null?void 0:r.value)==null?void 0:l.yesterdayOrderCount,(c=(o=e(m))==null?void 0:o.reference)==null?void 0:c.yesterdayOrderCount)},null,8,["value","percent"])]}),_:1}),i(s,{sm:6,xs:12},{default:u(()=>{var t,a,r,l,o,c;return[i(g,{tooltip:"\u672C\u6708\u8BA2\u5355\u6570\u91CF",title:"\u672C\u6708\u8BA2\u5355\u6570\u91CF",value:((a=(t=e(m))==null?void 0:t.value)==null?void 0:a.monthOrderCount)||0,percent:e(_)((l=(r=e(m))==null?void 0:r.value)==null?void 0:l.monthOrderCount,(c=(o=e(m))==null?void 0:o.reference)==null?void 0:c.monthOrderCount)},null,8,["value","percent"])]}),_:1}),i(s,{sm:6,xs:12},{default:u(()=>{var t,a,r,l,o,c;return[i(g,{tooltip:"\u6628\u65E5\u652F\u4ED8\u91D1\u989D",title:"\u6628\u65E5\u652F\u4ED8\u91D1\u989D",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(m))==null?void 0:t.value)==null?void 0:a.yesterdayPayPrice)||0),percent:e(_)((l=(r=e(m))==null?void 0:r.value)==null?void 0:l.yesterdayPayPrice,(c=(o=e(m))==null?void 0:o.reference)==null?void 0:c.yesterdayPayPrice)},null,8,["value","percent"])]}),_:1}),i(s,{sm:6,xs:12},{default:u(()=>{var t,a,r,l,o,c;return[i(g,{tooltip:"\u672C\u6708\u652F\u4ED8\u91D1\u989D",title:"\u672C\u6708\u652F\u4ED8\u91D1\u989D",prefix:"\uFFE5",":decimals":2,value:e(d)(((a=(t=e(m))==null?void 0:t.value)==null?void 0:a.monthPayPrice)||0),percent:e(_)((l=(r=e(m))==null?void 0:r.value)==null?void 0:l.monthPayPrice,(c=(o=e(m))==null?void 0:o.reference)==null?void 0:c.monthPayPrice)},null,8,["value","percent"])]}),_:1})]),_:1}),i(H,{shadow:"never"},{header:u(()=>[M("div",C,[i(e(ye),{title:"\u4EA4\u6613\u72B6\u51B5"}),i(B,{ref_key:"shortcutDateRangePicker",ref:P,onChange:R},{default:u(()=>[X((S(),z(q,{class:"ml-4",onClick:E,loading:e(b)},{default:u(()=>[i(T,{icon:"ep:download",class:"mr-1"}),J("\u5BFC\u51FA ")]),_:1},8,["loading"])),[[L,["statistics:trade:export"]]])]),_:1},512)])]),default:u(()=>[i(k,{gutter:16},{default:u(()=>[i(s,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(p,{title:"\u8425\u4E1A\u989D",tooltip:"\u5546\u54C1\u652F\u4ED8\u91D1\u989D\u3001\u5145\u503C\u91D1\u989D",icon:"fa-solid:yen-sign","icon-color":"bg-blue-100","icon-bg-color":"text-blue-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(n))==null?void 0:t.value)==null?void 0:a.turnoverPrice)||0),percent:e(_)((l=(r=e(n))==null?void 0:r.value)==null?void 0:l.turnoverPrice,(c=(o=e(n))==null?void 0:o.reference)==null?void 0:c.turnoverPrice)},null,8,["value","percent"])]}),_:1}),i(s,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(p,{title:"\u5546\u54C1\u652F\u4ED8\u91D1\u989D",tooltip:"\u7528\u6237\u8D2D\u4E70\u5546\u54C1\u7684\u5B9E\u9645\u652F\u4ED8\u91D1\u989D\uFF0C\u5305\u62EC\u5FAE\u4FE1\u652F\u4ED8\u3001\u4F59\u989D\u652F\u4ED8\u3001\u652F\u4ED8\u5B9D\u652F\u4ED8\u3001\u7EBF\u4E0B\u652F\u4ED8\u91D1\u989D\uFF08\u62FC\u56E2\u5546\u54C1\u5728\u6210\u56E2\u4E4B\u540E\u8BA1\u5165\uFF0C\u7EBF\u4E0B\u652F\u4ED8\u8BA2\u5355\u5728\u540E\u53F0\u786E\u8BA4\u652F\u4ED8\u540E\u8BA1\u5165\uFF09",icon:"fa-solid:shopping-cart","icon-color":"bg-purple-100","icon-bg-color":"text-purple-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(n))==null?void 0:t.value)==null?void 0:a.orderPayPrice)||0),percent:e(_)((l=(r=e(n))==null?void 0:r.value)==null?void 0:l.orderPayPrice,(c=(o=e(n))==null?void 0:o.reference)==null?void 0:c.orderPayPrice)},null,8,["value","percent"])]}),_:1}),i(s,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(p,{title:"\u5145\u503C\u91D1\u989D",tooltip:"\u7528\u6237\u6210\u529F\u5145\u503C\u7684\u91D1\u989D",icon:"fa-solid:money-check-alt","icon-color":"bg-yellow-100","icon-bg-color":"text-yellow-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(n))==null?void 0:t.value)==null?void 0:a.rechargePrice)||0),percent:e(_)((l=(r=e(n))==null?void 0:r.value)==null?void 0:l.rechargePrice,(c=(o=e(n))==null?void 0:o.reference)==null?void 0:c.rechargePrice)},null,8,["value","percent"])]}),_:1}),i(s,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(p,{title:"\u652F\u51FA\u91D1\u989D",tooltip:"\u4F59\u989D\u652F\u4ED8\u91D1\u989D\u3001\u652F\u4ED8\u4F63\u91D1\u91D1\u989D\u3001\u5546\u54C1\u9000\u6B3E\u91D1\u989D",icon:"ep:warning-filled","icon-color":"bg-green-100","icon-bg-color":"text-green-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(n))==null?void 0:t.value)==null?void 0:a.expensePrice)||0),percent:e(_)((l=(r=e(n))==null?void 0:r.value)==null?void 0:l.expensePrice,(c=(o=e(n))==null?void 0:o.reference)==null?void 0:c.expensePrice)},null,8,["value","percent"])]}),_:1}),i(s,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(p,{title:"\u4F59\u989D\u652F\u4ED8\u91D1\u989D",tooltip:"\u7528\u6237\u4E0B\u5355\u65F6\u4F7F\u7528\u4F59\u989D\u5B9E\u9645\u652F\u4ED8\u7684\u91D1\u989D",icon:"fa-solid:wallet","icon-color":"bg-cyan-100","icon-bg-color":"text-cyan-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(n))==null?void 0:t.value)==null?void 0:a.walletPayPrice)||0),percent:e(_)((l=(r=e(n))==null?void 0:r.value)==null?void 0:l.walletPayPrice,(c=(o=e(n))==null?void 0:o.reference)==null?void 0:c.walletPayPrice)},null,8,["value","percent"])]}),_:1}),i(s,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(p,{title:"\u652F\u4ED8\u4F63\u91D1\u91D1\u989D",tooltip:"\u540E\u53F0\u7ED9\u63A8\u5E7F\u5458\u652F\u4ED8\u7684\u63A8\u5E7F\u4F63\u91D1\uFF0C\u4EE5\u5B9E\u9645\u652F\u4ED8\u4E3A\u51C6",icon:"fa-solid:award","icon-color":"bg-yellow-100","icon-bg-color":"text-yellow-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(n))==null?void 0:t.value)==null?void 0:a.brokerageSettlementPrice)||0),percent:e(_)((l=(r=e(n))==null?void 0:r.value)==null?void 0:l.brokerageSettlementPrice,(c=(o=e(n))==null?void 0:o.reference)==null?void 0:c.brokerageSettlementPrice)},null,8,["value","percent"])]}),_:1}),i(s,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(p,{title:"\u5546\u54C1\u9000\u6B3E\u91D1\u989D",tooltip:"\u7528\u6237\u6210\u529F\u9000\u6B3E\u7684\u5546\u54C1\u91D1\u989D",icon:"fa-solid:times-circle","icon-color":"bg-blue-100","icon-bg-color":"text-blue-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(n))==null?void 0:t.value)==null?void 0:a.afterSaleRefundPrice)||0),percent:e(_)((l=(r=e(n))==null?void 0:r.value)==null?void 0:l.afterSaleRefundPrice,(c=(o=e(n))==null?void 0:o.reference)==null?void 0:c.afterSaleRefundPrice)},null,8,["value","percent"])]}),_:1})]),_:1}),i(G,{loading:e(h),animated:""},{default:u(()=>[i(D,{height:500,options:e(x)},null,8,["options"])]),_:1},8,["loading"])]),_:1})])}}}),[["__scopeId","data-v-840eeb55"]])});export{we as __tla,O as default};