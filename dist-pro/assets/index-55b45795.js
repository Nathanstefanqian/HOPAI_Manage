import{ap as t,__tla as u}from"./index-866c10ab.js";let e,a,m,l,p,r,d,o=Promise.all([(()=>{try{return u}catch{}})()]).then(async()=>{e=s=>t.get({url:"/system/sms-template/page",params:s}),p=s=>t.get({url:"/system/sms-template/get?id="+s}),a=s=>t.post({url:"/system/sms-template/create",data:s}),d=s=>t.put({url:"/system/sms-template/update",data:s}),m=s=>t.delete({url:"/system/sms-template/delete?id="+s}),l=s=>t.download({url:"/system/sms-template/export-excel",params:s}),r=s=>t.post({url:"/system/sms-template/send-sms",data:s})});export{o as __tla,e as a,a as c,m as d,l as e,p as g,r as s,d as u};