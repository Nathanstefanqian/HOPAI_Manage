import{ao as e,__tla as c}from"./index-03db6098.js";let t,r,s,l,d,i,u,n=Promise.all([(()=>{try{return c}catch{}})()]).then(async()=>{d=async a=>await e.get({url:"/trade/after-sale/page",params:a}),i=async a=>await e.get({url:`/trade/after-sale/get-detail?id=${a}`}),t=async a=>await e.put({url:`/trade/after-sale/agree?id=${a}`}),l=async a=>await e.put({url:"/trade/after-sale/disagree",data:a}),u=async a=>await e.put({url:`/trade/after-sale/receive?id=${a}`}),r=async a=>await e.put({url:`/trade/after-sale/refuse?id=${a}`}),s=async a=>await e.put({url:`/trade/after-sale/refund?id=${a}`})});export{n as __tla,t as a,r as b,s as c,l as d,d as e,i as g,u as r};