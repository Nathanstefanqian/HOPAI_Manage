import{ao as e,__tla as i}from"./index-03db6098.js";let t,l,r,d,n,o,s,g,c,u=Promise.all([(()=>{try{return i}catch{}})()]).then(async()=>{l=a=>e.get({url:"/infra/codegen/table/page",params:a}),o=a=>e.get({url:"/infra/codegen/detail?tableId="+a}),c=a=>e.put({url:"/infra/codegen/update",data:a}),g=a=>e.put({url:"/infra/codegen/sync-from-db?tableId="+a}),s=a=>e.get({url:"/infra/codegen/preview?tableId="+a}),n=a=>e.download({url:"/infra/codegen/download?tableId="+a}),t=a=>e.get({url:"/infra/codegen/db/table/list",params:a}),r=a=>e.post({url:"/infra/codegen/create-list",data:a}),d=a=>e.delete({url:"/infra/codegen/delete?tableId="+a})});export{u as __tla,t as a,l as b,r as c,d,n as e,o as g,s as p,g as s,c as u};