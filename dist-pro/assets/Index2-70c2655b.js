import{_ as q,__tla as C}from"./Echart.vue_vue_type_script_setup_true_lang-49a90406.js";import{d as F,l as H,r as M,f as p,o as Q,c as T,i as a,w as t,a as e,g as s,V as n,t as f,F as U,Z as V,_ as Z,E as B,n as G,v as _,__tla as J}from"./index-12d626d1.js";import{E as K,__tla as L}from"./el-card-9cf947e7.js";import{E as N,__tla as R}from"./el-skeleton-item-71fedd06.js";import{_ as W,__tla as X}from"./CountTo.vue_vue_type_script_setup_true_lang-4cf23a71.js";import{p as Y,b as aa,l as ea,__tla as ta}from"./echarts-data-29c2c6f9.js";import{_ as sa}from"./_plugin-vue_export-helper-1b428a4d.js";let z,la=Promise.all([(()=>{try{return C}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return ta}catch{}})()]).then(async()=>{let w,$,j,k;w={class:"flex flex-col justify-between"},$={class:"flex flex-col justify-between"},j={class:"flex flex-col justify-between"},k={class:"flex flex-col justify-between"},z=sa(F({name:"Home2",__name:"Index2",setup(na){const{t:m}=H(),d=M(!0),{getPrefixCls:I}=V(),l=I("panel"),g=p(Y);let A=p({users:0,messages:0,moneys:0,shoppings:0});const O=async()=>{A=Object.assign(A,{users:102400,messages:81212,moneys:9280,shoppings:13600})},P=async()=>{const o=[{value:335,name:"analysis.directAccess"},{value:310,name:"analysis.mailMarketing"},{value:234,name:"analysis.allianceAdvertising"},{value:135,name:"analysis.videoAdvertising"},{value:1548,name:"analysis.searchEngines"}];_(g,"legend.data",o.map(i=>m(i.name))),_(g,"series.data",o)},v=p(aa),D=async()=>{const o=[{value:13253,name:"analysis.monday"},{value:34235,name:"analysis.tuesday"},{value:26321,name:"analysis.wednesday"},{value:12340,name:"analysis.thursday"},{value:24643,name:"analysis.friday"},{value:1322,name:"analysis.saturday"},{value:1324,name:"analysis.sunday"}];_(v,"xAxis.data",o.map(i=>m(i.name))),_(v,"series",[{name:m("analysis.activeQuantity"),data:o.map(i=>i.value),type:"bar"}])},h=p(ea),S=async()=>{const o=[{estimate:100,actual:120,name:"analysis.january"},{estimate:120,actual:82,name:"analysis.february"},{estimate:161,actual:91,name:"analysis.march"},{estimate:134,actual:154,name:"analysis.april"},{estimate:105,actual:162,name:"analysis.may"},{estimate:160,actual:140,name:"analysis.june"},{estimate:165,actual:145,name:"analysis.july"},{estimate:114,actual:250,name:"analysis.august"},{estimate:163,actual:134,name:"analysis.september"},{estimate:185,actual:56,name:"analysis.october"},{estimate:118,actual:99,name:"analysis.november"},{estimate:123,actual:123,name:"analysis.december"}];_(h,"xAxis.data",o.map(i=>m(i.name))),_(h,"series",[{name:m("analysis.estimate"),smooth:!0,type:"line",data:o.map(i=>i.estimate),animationDuration:2800,animationEasing:"cubicInOut"},{name:m("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:o.map(i=>i.actual),animationDuration:2800,animationEasing:"quadraticOut"}])};return(async()=>(await Promise.all([O(),P(),D(),S()]),d.value=!1))(),(o,i)=>{const x=Z,y=W,u=N,r=K,c=B,E=G,b=q;return Q(),T(U,null,[a(E,{class:n(e(l)),gutter:20,justify:"space-between"},{default:t(()=>[a(c,{lg:6,md:12,sm:12,xl:6,xs:24},{default:t(()=>[a(r,{class:"mb-20px",shadow:"hover"},{default:t(()=>[a(u,{loading:e(d),rows:2,animated:""},{default:t(()=>[s("div",{class:n(`${e(l)}__item flex justify-between`)},[s("div",null,[s("div",{class:n(`${e(l)}__item--icon ${e(l)}__item--peoples p-16px inline-block rounded-6px`)},[a(x,{size:40,icon:"svg-icon:peoples"})],2)]),s("div",w,[s("div",{class:n(`${e(l)}__item--text text-16px text-gray-500 text-right`)},f(e(m)("analysis.newUser")),3),a(y,{duration:2600,"end-val":102400,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),a(c,{lg:6,md:12,sm:12,xl:6,xs:24},{default:t(()=>[a(r,{class:"mb-20px",shadow:"hover"},{default:t(()=>[a(u,{loading:e(d),rows:2,animated:""},{default:t(()=>[s("div",{class:n(`${e(l)}__item flex justify-between`)},[s("div",null,[s("div",{class:n(`${e(l)}__item--icon ${e(l)}__item--message p-16px inline-block rounded-6px`)},[a(x,{size:40,icon:"svg-icon:message"})],2)]),s("div",$,[s("div",{class:n(`${e(l)}__item--text text-16px text-gray-500 text-right`)},f(e(m)("analysis.unreadInformation")),3),a(y,{duration:2600,"end-val":81212,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),a(c,{lg:6,md:12,sm:12,xl:6,xs:24},{default:t(()=>[a(r,{class:"mb-20px",shadow:"hover"},{default:t(()=>[a(u,{loading:e(d),rows:2,animated:""},{default:t(()=>[s("div",{class:n(`${e(l)}__item flex justify-between`)},[s("div",null,[s("div",{class:n(`${e(l)}__item--icon ${e(l)}__item--money p-16px inline-block rounded-6px`)},[a(x,{size:40,icon:"svg-icon:money"})],2)]),s("div",j,[s("div",{class:n(`${e(l)}__item--text text-16px text-gray-500 text-right`)},f(e(m)("analysis.transactionAmount")),3),a(y,{duration:2600,"end-val":9280,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),a(c,{lg:6,md:12,sm:12,xl:6,xs:24},{default:t(()=>[a(r,{class:"mb-20px",shadow:"hover"},{default:t(()=>[a(u,{loading:e(d),rows:2,animated:""},{default:t(()=>[s("div",{class:n(`${e(l)}__item flex justify-between`)},[s("div",null,[s("div",{class:n(`${e(l)}__item--icon ${e(l)}__item--shopping p-16px inline-block rounded-6px`)},[a(x,{size:40,icon:"svg-icon:shopping"})],2)]),s("div",k,[s("div",{class:n(`${e(l)}__item--text text-16px text-gray-500 text-right`)},f(e(m)("analysis.totalShopping")),3),a(y,{duration:2600,"end-val":13600,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["class"]),a(E,{gutter:20,justify:"space-between"},{default:t(()=>[a(c,{lg:10,md:24,sm:24,xl:10,xs:24},{default:t(()=>[a(r,{class:"mb-20px",shadow:"hover"},{default:t(()=>[a(u,{loading:e(d),animated:""},{default:t(()=>[a(b,{height:300,options:e(g)},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),a(c,{lg:14,md:24,sm:24,xl:14,xs:24},{default:t(()=>[a(r,{class:"mb-20px",shadow:"hover"},{default:t(()=>[a(u,{loading:e(d),animated:""},{default:t(()=>[a(b,{height:300,options:e(v)},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),a(c,{span:24},{default:t(()=>[a(r,{class:"mb-20px",shadow:"hover"},{default:t(()=>[a(u,{loading:e(d),rows:4,animated:""},{default:t(()=>[a(b,{height:350,options:e(h)},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})],64)}}}),[["__scopeId","data-v-66f62258"]])});export{la as __tla,z as default};