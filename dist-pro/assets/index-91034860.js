import{ao as t,__tla as l}from"./index-03db6098.js";let r,s,e,n=Promise.all([(()=>{try{return l}catch{}})()]).then(async()=>{s=async a=>await t.post({url:"/pay/transfer/create",data:a}),r=async a=>await t.get({url:"/pay/transfer/page",params:a}),e=async a=>await t.get({url:"/pay/transfer/get?id="+a})});export{n as __tla,r as a,s as c,e as g};