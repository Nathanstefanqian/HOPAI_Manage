import{r as c,b as l,a as o,d as m,o as _,c as u,t as O,l as R,__tla as T}from"./index-dc75a212.js";let e,r,S,s,L=Promise.all([(()=>{try{return T}catch{}})()]).then(async()=>{e=(t=>(t[t.LOGIN=0]="LOGIN",t[t.REGISTER=1]="REGISTER",t[t.RESET_PASSWORD=2]="RESET_PASSWORD",t[t.MOBILE=3]="MOBILE",t[t.QR_CODE=4]="QR_CODE",t[t.SSO=5]="SSO",t))(e||{});const a=c(0);s=function(){function t(n){a.value=n}return{setLoginState:t,getLoginState:l(()=>a.value),handleBackLogin:function(){t(0)}}},S=function(t){return{validForm:async function(){const n=o(t);if(n)return await n.validate()}}};let i;i={class:"enter-x mb-3 text-center text-2xl font-bold xl:text-center xl:text-3xl"},r=m({name:"LoginFormTitle",__name:"LoginFormTitle",setup(t){const{t:n}=R(),{getLoginState:g}=s(),E=l(()=>({[e.RESET_PASSWORD]:n("sys.login.forgetFormTitle"),[e.LOGIN]:n("sys.login.signInFormTitle"),[e.REGISTER]:n("sys.login.signUpFormTitle"),[e.MOBILE]:n("sys.login.mobileSignInFormTitle"),[e.QR_CODE]:n("sys.login.qrSignInFormTitle"),[e.SSO]:n("sys.login.ssoFormTitle")})[o(g)]);return(I,x)=>(_(),u("h2",i,O(o(E)),1))}})});export{e as L,r as _,L as __tla,S as a,s as u};