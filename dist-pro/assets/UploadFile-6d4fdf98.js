import{d as g,r as b,f as I,o as v,q as x,w as r,g as U,aI as H,i as j,j as q,a as t,H as w,bn as E,__tla as F}from"./index-7b6f7d71.js";import{b as P,a as Q,U as S,H as $,__tla as k}from"./upload-a563168f.js";import{u as z,__tla as A}from"./useMessage-74a9519a.js";import{U as i,__tla as B}from"./useUpload-377788a5.js";import{_ as C}from"./_plugin-vue_export-helper-1b428a4d.js";let _,D=Promise.all([(()=>{try{return F}catch{}})(),(()=>{try{return k}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return B}catch{}})()]).then(async()=>{let l;l={class:"el-upload__tip",style:{"margin-left":"5px"}},_=C(g({__name:"UploadFile",props:{type:{}},emits:["uploaded"],setup(p,{emit:d}){const e=z(),n=p,o=b([]),u=d,s=I({type:i.Image,title:"",introduction:""}),c=n.type===i.Image?P:Q,m=a=>{if(a.code!==0)return e.alertError("\u4E0A\u4F20\u51FA\u9519\uFF1A"+a.msg),!1;o.value=[],s.title="",s.introduction="",e.notifySuccess("\u4E0A\u4F20\u6210\u529F"),u("uploaded")},f=a=>e.error("\u4E0A\u4F20\u5931\u8D25: "+a.message);return(a,G)=>{const y=w,h=E;return v(),x(h,{action:t(S),headers:t($),multiple:"",limit:1,"file-list":t(o),data:t(s),"on-error":f,"before-upload":t(c),"on-success":m},{tip:r(()=>[U("span",l,[H(a.$slots,"default",{},void 0,!0)])]),default:r(()=>[j(y,{type:"primary",plain:""},{default:r(()=>[q(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:3},8,["action","headers","file-list","data","before-upload"])}}}),[["__scopeId","data-v-f51d7ad9"]])});export{D as __tla,_ as default};
