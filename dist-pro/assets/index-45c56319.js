import{ao as t,__tla as i}from"./index-12d626d1.js";let e,r,s,l,m,g,c=Promise.all([(()=>{try{return i}catch{}})()]).then(async()=>{r=async a=>await t.get({url:"/member/tag/page",params:a}),e=async a=>await t.get({url:"/member/tag/get?id="+a}),m=async()=>await t.get({url:"/member/tag/list-all-simple"}),s=async a=>await t.post({url:"/member/tag/create",data:a}),g=async a=>await t.put({url:"/member/tag/update",data:a}),l=async a=>await t.delete({url:"/member/tag/delete?id="+a})});export{c as __tla,e as a,r as b,s as c,l as d,m as g,g as u};
