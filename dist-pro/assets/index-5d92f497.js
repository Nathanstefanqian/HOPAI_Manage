import{ap as t,__tla as c}from"./index-866c10ab.js";let e,p,r,s=Promise.all([(()=>{try{return c}catch{}})()]).then(async()=>{p=(a,l)=>{const n={appId:a,code:l};return t.get({url:"/pay/channel/get",params:n})},e=a=>t.post({url:"/pay/channel/create",data:a}),r=a=>t.put({url:"/pay/channel/update",data:a})});export{s as __tla,e as c,p as g,r as u};