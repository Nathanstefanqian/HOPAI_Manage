import{d as x,o as a,c as e,F as b,k as U,g as t,i as E,t as f,__tla as F}from"./index-16a04392.js";import{E as I,__tla as N}from"./el-image-73d1fa09.js";import{__tla as P}from"./el-image-viewer-4ba37d0b.js";import{_ as W}from"./_plugin-vue_export-helper-1b428a4d.js";let v,j=Promise.all([(()=>{try{return F}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return P}catch{}})()]).then(async()=>{let l,i,r,n,c,m,_,o,d,h,p;l={class:"news-home"},i=["href"],r={class:"news-main"},n={class:"news-content"},c={class:"news-content-title"},m=["href"],_={class:"news-main-item"},o={class:"news-content-item"},d={class:"news-content-item-title"},h={class:"news-content-item-img"},p=["src"],v=W(x({name:"WxNews",__name:"main",props:{articles:{default:null}},setup:(w,{expose:g})=>(g({articles:w.articles}),(y,q)=>{const k=I;return a(),e("div",l,[(a(!0),e(b,null,U(y.articles,(s,u)=>(a(),e("div",{key:u,class:"news-div"},[u===0?(a(),e("a",{key:0,href:s.url,target:"_blank"},[t("div",r,[t("div",n,[E(k,{src:s.picUrl,class:"material-img",style:{width:"100%",height:"120px"}},null,8,["src"]),t("div",c,[t("span",null,f(s.title),1)])])])],8,i)):(a(),e("a",{key:1,href:s.url,target:"_blank"},[t("div",_,[t("div",o,[t("div",d,f(s.title),1),t("div",h,[t("img",{src:s.picUrl,class:"material-img",height:"100%"},null,8,p)])])])],8,m))]))),128))])})}),[["__scopeId","data-v-f0cf6e3b"]])});export{j as __tla,v as default};