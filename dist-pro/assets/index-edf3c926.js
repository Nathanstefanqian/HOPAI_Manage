import{ao as g,d as K,r as A,f as E,A as L,o as C,c as G,i as a,w as e,a as h,x as T,F as k,k as N,q as P,g as i,M as W,C as Q,D as X,G as Z,I as $,E as aa,n as ea,__tla as ta}from"./index-9a3dc6a8.js";import{E as la,__tla as sa}from"./el-card-a6a1b26c.js";import{_ as ra,__tla as na}from"./Echart.vue_vue_type_script_setup_true_lang-c1f04667.js";import{_ as ua,__tla as oa}from"./ContentWrap.vue_vue_type_script_setup_true_lang-29b6dc10.js";import{l as da,m as ia,n as q,f as o,o as ca,__tla as ma}from"./formatTime-62b946ce.js";import{f as pa,__tla as _a}from"./index-2590bb84.js";import{u as ha,__tla as va}from"./useMessage-78b6afd0.js";let j,fa=Promise.all([(()=>{try{return ta}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return va}catch{}})()]).then(async()=>{let I,Y,M,U;I=i("div",null,[i("span",null,"\u7528\u6237\u589E\u51CF\u6570\u636E")],-1),Y=i("div",null,[i("span",null,"\u7D2F\u8BA1\u7528\u6237\u6570\u636E")],-1),M=i("div",null,[i("span",null,"\u6D88\u606F\u6982\u51B5\u6570\u636E")],-1),U=i("div",null,[i("span",null,"\u63A5\u53E3\u5206\u6790\u6570\u636E")],-1),j=K({name:"MpStatistics",__name:"index",setup(xa){const V=ha(),t=A([da(new Date(new Date().getTime()-6048e5)),ia(new Date(new Date().getTime()-864e5))]),d=A(-1),x=A([]),c=A([]),m=E({color:["#67C23A","#E5323E"],legend:{data:["\u65B0\u589E\u7528\u6237","\u53D6\u6D88\u5173\u6CE8\u7684\u7528\u6237"]},tooltip:{},xAxis:{data:[]},yAxis:{minInterval:1},series:[{name:"\u65B0\u589E\u7528\u6237",type:"bar",label:{show:!0},barGap:0,data:[]},{name:"\u53D6\u6D88\u5173\u6CE8\u7684\u7528\u6237",type:"bar",label:{show:!0},data:[]}]}),f=E({legend:{data:["\u7D2F\u8BA1\u7528\u6237\u91CF"]},xAxis:{type:"category",data:[]},yAxis:{minInterval:1},series:[{name:"\u7D2F\u8BA1\u7528\u6237\u91CF",data:[],type:"line",smooth:!0,label:{show:!0}}]}),p=E({color:["#67C23A","#E5323E"],legend:{data:["\u7528\u6237\u53D1\u9001\u4EBA\u6570","\u7528\u6237\u53D1\u9001\u6761\u6570"]},tooltip:{},xAxis:{data:[]},yAxis:{minInterval:1},series:[{name:"\u7528\u6237\u53D1\u9001\u4EBA\u6570",type:"line",smooth:!0,label:{show:!0},data:[]},{name:"\u7528\u6237\u53D1\u9001\u6761\u6570",type:"line",smooth:!0,label:{show:!0},data:[]}]}),u=E({color:["#67C23A","#E5323E","#E6A23C","#409EFF"],legend:{data:["\u88AB\u52A8\u56DE\u590D\u7528\u6237\u6D88\u606F\u7684\u6B21\u6570","\u5931\u8D25\u6B21\u6570","\u6700\u5927\u8017\u65F6","\u603B\u8017\u65F6"]},tooltip:{},xAxis:{data:[]},yAxis:{},series:[{name:"\u88AB\u52A8\u56DE\u590D\u7528\u6237\u6D88\u606F\u7684\u6B21\u6570",type:"bar",label:{show:!0},barGap:0,data:[]},{name:"\u5931\u8D25\u6B21\u6570",type:"bar",label:{show:!0},data:[]},{name:"\u6700\u5927\u8017\u65F6",type:"bar",label:{show:!0},data:[]},{name:"\u603B\u8017\u65F6",type:"bar",label:{show:!0},data:[]}]}),D=()=>{if(!d)return V.error("\u672A\u9009\u4E2D\u516C\u4F17\u53F7\uFF0C\u65E0\u6CD5\u7EDF\u8BA1\u6570\u636E"),!1;if(q(t.value[0],t.value[1])>=7)return V.error("\u65F6\u95F4\u95F4\u9694 7 \u5929\u4EE5\u5185\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9"),!1;c.value=[];const s=q(t.value[0],t.value[1]);for(let l=0;l<=s;l++)c.value.push(o(ca(t.value[0],864e5*l),"YYYY-MM-DD"));O(),R(),S(),z()},O=async()=>{m.xAxis.data=[],m.series[0].data=[],m.series[1].data=[];try{const l=await(s={accountId:d.value,date:[o(t.value[0]),o(t.value[1])]},g.get({url:"/mp/statistics/user-summary",params:s}));m.xAxis.data=c.value,c.value.forEach((n,r)=>{l.forEach(v=>{o(new Date(v.refDate),"YYYY-MM-DD").indexOf(n)!==-1&&(m.series[0].data[r]=v.newUser,m.series[1].data[r]=v.cancelUser)})})}catch{}var s},R=async()=>{f.xAxis.data=[],f.series[0].data=[];try{const l=await(s={accountId:d.value,date:[o(t.value[0]),o(t.value[1])]},g.get({url:"/mp/statistics/user-cumulate",params:s}));f.xAxis.data=c.value,l.forEach((n,r)=>{f.series[0].data[r]=n.cumulateUser})}catch{}var s},S=async()=>{p.xAxis.data=[],p.series[0].data=[],p.series[1].data=[];try{const l=await(s={accountId:d.value,date:[o(t.value[0]),o(t.value[1])]},g.get({url:"/mp/statistics/upstream-message",params:s}));p.xAxis.data=c.value,l.forEach((n,r)=>{p.series[0].data[r]=n.messageUser,p.series[1].data[r]=n.messageCount})}catch{}var s},z=async()=>{u.xAxis.data=[],u.series[0].data=[],u.series[1].data=[],u.series[2].data=[],u.series[3].data=[];try{const l=await(s={accountId:d.value,date:[o(t.value[0]),o(t.value[1])]},g.get({url:"/mp/statistics/interface-summary",params:s}));u.xAxis.data=c.value,l.forEach((n,r)=>{u.series[0].data[r]=n.callbackCount,u.series[1].data[r]=n.failCount,u.series[2].data[r]=n.maxTimeCost,u.series[3].data[r]=n.totalTimeCost})}catch{}var s};return L(async()=>{await(async()=>{x.value=await pa(),x.value.length>0&&(d.value=x.value[0].id)})(),D()}),(s,l)=>{const n=W,r=Q,v=X,B=Z,H=$,F=ua,y=ra,b=la,w=aa,J=ea;return C(),G(k,null,[a(F,null,{default:e(()=>[a(H,{class:"-mb-15px",ref:"queryForm",inline:!0,"label-width":"68px"},{default:e(()=>[a(v,{label:"\u516C\u4F17\u53F7",prop:"accountId"},{default:e(()=>[a(r,{modelValue:h(d),"onUpdate:modelValue":l[0]||(l[0]=_=>T(d)?d.value=_:null),onChange:D,class:"!w-240px"},{default:e(()=>[(C(!0),G(k,null,N(h(x),_=>(C(),P(n,{key:_.id,label:_.name,value:_.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(v,{label:"\u65F6\u95F4\u8303\u56F4",prop:"dateRange"},{default:e(()=>[a(B,{modelValue:h(t),"onUpdate:modelValue":l[1]||(l[1]=_=>T(t)?t.value=_:null),type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],onChange:D,class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1})]),_:1},512)]),_:1}),a(F,null,{default:e(()=>[a(J,null,{default:e(()=>[a(w,{span:12,class:"card-box"},{default:e(()=>[a(b,null,{header:e(()=>[I]),default:e(()=>[a(y,{options:h(m),height:420},null,8,["options"])]),_:1})]),_:1}),a(w,{span:12,class:"card-box"},{default:e(()=>[a(b,null,{header:e(()=>[Y]),default:e(()=>[a(y,{options:h(f),height:420},null,8,["options"])]),_:1})]),_:1}),a(w,{span:12,class:"card-box"},{default:e(()=>[a(b,null,{header:e(()=>[M]),default:e(()=>[a(y,{options:h(p),height:420},null,8,["options"])]),_:1})]),_:1}),a(w,{span:12,class:"card-box"},{default:e(()=>[a(b,null,{header:e(()=>[U]),default:e(()=>[a(y,{options:h(u),height:420},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}}})});export{fa as __tla,j as default};