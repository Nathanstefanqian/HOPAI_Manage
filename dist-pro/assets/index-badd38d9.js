import{ao as t,__tla as l}from"./index-ad2885e5.js";let r,c,e,o,s,u=Promise.all([(()=>{try{return l}catch{}})()]).then(async()=>{r=async a=>await t.get({url:"/crm/product-category/get?id="+a}),c=async a=>await t.post({url:"/crm/product-category/create",data:a}),s=async a=>await t.put({url:"/crm/product-category/update",data:a}),e=async a=>await t.delete({url:"/crm/product-category/delete?id="+a}),o=async a=>await t.get({url:"/crm/product-category/list",params:a})});export{u as __tla,r as a,c,e as d,o as g,s as u};