import{d as g,u as p,o as n,q as _,w as l,i as s,a as b,g as e,c as f,F as C,k as h,V as w,t as y,_ as N,__tla as x}from"./index-dc75a212.js";import{E as v,__tla as k}from"./el-card-e59bf48d.js";import{C as P,__tla as S}from"./CardTitle-8d87b49f.js";let i,T=Promise.all([(()=>{try{return x}catch{}})(),(()=>{try{return k}catch{}})(),(()=>{try{return S}catch{}})()]).then(async()=>{let a,o;a={class:"flex flex-row flex-wrap gap-8 p-4"},o=["onClick"],i=g({name:"ShortcutCard",__name:"ShortcutCard",setup(B){const c=p(),u=[{name:"\u7528\u6237\u7BA1\u7406",icon:"ep:user-filled",bgColor:"bg-red-400",routerName:"MemberUser"},{name:"\u5546\u54C1\u7BA1\u7406",icon:"fluent-mdl2:product",bgColor:"bg-orange-400",routerName:"ProductSpu"},{name:"\u8BA2\u5355\u7BA1\u7406",icon:"ep:list",bgColor:"bg-yellow-500",routerName:"TradeOrder"},{name:"\u552E\u540E\u7BA1\u7406",icon:"ri:refund-2-line",bgColor:"bg-green-600",routerName:"TradeAfterSale"},{name:"\u5206\u9500\u7BA1\u7406",icon:"fa-solid:project-diagram",bgColor:"bg-cyan-500",routerName:"TradeBrokerageUser"},{name:"\u4F18\u60E0\u5238",icon:"ep:ticket",bgColor:"bg-blue-500",routerName:"PromotionCoupon"},{name:"\u62FC\u56E2\u6D3B\u52A8",icon:"fa:group",bgColor:"bg-purple-500",routerName:"PromotionBargainActivity"},{name:"\u4F63\u91D1\u63D0\u73B0",icon:"vaadin:money-withdraw",bgColor:"bg-rose-500",routerName:"TradeBrokerageWithdraw"}];return(j,A)=>{const m=N,d=v;return n(),_(d,{shadow:"never"},{header:l(()=>[s(b(P),{title:"\u5FEB\u6377\u5165\u53E3"})]),default:l(()=>[e("div",a,[(n(),f(C,null,h(u,r=>e("div",{key:r.name,class:"h-20 w-20% flex flex-col cursor-pointer items-center justify-center gap-2",onClick:U=>{return t=r.routerName,void c.push({name:t});var t}},[e("div",{class:w([r.bgColor,"rounded p-3 text-white"])},[s(m,{icon:r.icon,class:"text-7.5!"},null,8,["icon"])],2),e("span",null,y(r.name),1)],8,o)),64))])]),_:1})}}})});export{i as _,T as __tla};