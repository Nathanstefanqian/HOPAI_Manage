import{co as oe,cp as se,d as ie,by as re,b as Y,r as ce,o as c,q as y,w as n,i as e,g as m,c as C,F as ue,k as de,a,V as $,t as D,a3 as _,x as me,_ as pe,H as _e,n as he,aT as ve,T as ge,E as fe,dY as ye,aW as Ce,$ as we,a0 as ke,__tla as Ve}from"./index-866c10ab.js";import{_ as Ue,__tla as be}from"./style.css_vue_type_style_index_0_src_true_lang-292a7aa7.js";import{u as G,__tla as Fe}from"./useMessage-68df17f5.js";import Se,{__tla as Ie}from"./CoverSelect-c931aff3.js";import{_ as Ne}from"./_plugin-vue_export-helper-1b428a4d.js";let b,J,K,Oe=Promise.all([(()=>{try{return Ve}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return Ie}catch{}})()]).then(async()=>{let V,F,S,I,N,O,x,z,E,P,M,j,A,T,B,W,q;V=G(),F=(h,U)=>({MENU_CONF:{uploadImage:{server:h,maxFileSize:5242880,maxNumberOfFiles:10,allowedFileTypes:["image/*"],meta:{accountId:U,type:"image"},metaWithUrl:!0,headers:{Accept:"*",Authorization:"Bearer "+oe(),"tenant-id":se()},withCredentials:!0,timeout:5e3,fieldName:"file",onBeforeUpload:d=>d,onProgress(d){},onSuccess(d,p){},onFailed(d,p){V.alertError(p.message)},onError(d,p,H){V.alertError(p.message)},customInsert(d,p){p(d.data.url,"image",d.data.url)}}}}),K=()=>({title:"",thumbMediaId:"",author:"",digest:"",showCoverPic:"",content:"",contentSourceUrl:"",needOpenComment:"",onlyFansCanComment:"",thumbUrl:""}),S={class:"select-item"},I=["onClick"],N={class:"news-content"},O=["src"],x={class:"news-content-title"},z={key:0,class:"child"},E=["onClick"],P={class:"news-content-item"},M={class:"news-content-item-title"},j={class:"news-content-item-img"},A=["src"],T={class:"child"},B={key:0},W=(h=>(we("data-v-c4606cac"),h=h(),ke(),h))(()=>m("p",null,"\u6458\u8981:",-1)),q=ie({name:"NewsForm",__name:"NewsForm",props:{isCreating:{type:Boolean},modelValue:{}},emits:["update:modelValue"],setup(h,{emit:U}){const d=G(),p=h,H=re("accountId"),X=F("https://mp.api.hopai.cn/admin-api/mp/material/upload-permanent",H),Z=U,l=Y({get:()=>p.modelValue===null?[{title:"",thumbMediaId:"",author:"",digest:"",showCoverPic:"",content:"",contentSourceUrl:"",needOpenComment:"",onlyFansCanComment:"",thumbUrl:""}]:p.modelValue,set(o){Z("update:modelValue",o)}}),u=ce(0),r=Y(()=>l.value[u.value]),L=o=>{const s=l.value[o];l.value[o]=l.value[o+1],l.value[o+1]=s,u.value=o+1},Q=async o=>{try{await d.confirm("\u786E\u5B9A\u5220\u9664\u8BE5\u56FE\u6587\u5417?"),l.value.splice(o,1),u.value===o&&(u.value=0)}catch{}},ee=()=>{l.value.push({title:"",thumbMediaId:"",author:"",digest:"",showCoverPic:"",content:"",contentSourceUrl:"",needOpenComment:"",onlyFansCanComment:"",thumbUrl:""}),u.value=l.value.length-1};return(o,s)=>{const g=pe,f=_e,w=he,ae=ve,k=ge,R=fe,le=ye,te=Ce;return c(),y(te,null,{default:n(()=>[e(ae,{width:"40%"},{default:n(()=>[m("div",S,[(c(!0),C(ue,null,de(a(l),(t,i)=>(c(),C("div",{key:i},[i===0?(c(),C("div",{key:0,class:$(["news-main father",{activeAddNews:a(u)===i}]),onClick:v=>u.value=i},[m("div",N,[m("img",{class:"material-img",src:t.thumbUrl},null,8,O),m("div",x,D(t.title),1)]),a(l).length>1?(c(),C("div",z,[e(f,{type:"info",circle:"",size:"small",onClick:()=>L(i)},{default:n(()=>[e(g,{icon:"ep:arrow-down-bold"})]),_:2},1032,["onClick"]),o.isCreating?(c(),y(f,{key:0,type:"danger",circle:"",size:"small",onClick:()=>Q(i)},{default:n(()=>[e(g,{icon:"ep:delete"})]),_:2},1032,["onClick"])):_("",!0)])):_("",!0)],10,I)):_("",!0),i>0?(c(),C("div",{key:1,class:$(["news-main-item father",{activeAddNews:a(u)===i}]),onClick:v=>u.value=i},[m("div",P,[m("div",M,D(t.title),1),m("div",j,[m("img",{class:"material-img",src:t.thumbUrl,width:"100%"},null,8,A)])]),m("div",T,[a(l).length>i+1?(c(),y(f,{key:0,circle:"",type:"info",size:"small",onClick:()=>L(i)},{default:n(()=>[e(g,{icon:"ep:arrow-down-bold"})]),_:2},1032,["onClick"])):_("",!0),i>0?(c(),y(f,{key:1,type:"info",circle:"",size:"small",onClick:()=>(v=>{const ne=l.value[v];l.value[v]=l.value[v-1],l.value[v-1]=ne,u.value=v-1})(i)},{default:n(()=>[e(g,{icon:"ep:arrow-up-bold"})]),_:2},1032,["onClick"])):_("",!0),o.isCreating?(c(),y(f,{key:2,type:"danger",size:"small",circle:"",onClick:()=>Q(i)},{default:n(()=>[e(g,{icon:"ep:delete"})]),_:2},1032,["onClick"])):_("",!0)])],10,E)):_("",!0)]))),128)),e(w,{justify:"center",class:"ope-row"},{default:n(()=>[a(l).length<8&&o.isCreating?(c(),y(f,{key:0,type:"primary",circle:"",onClick:ee},{default:n(()=>[e(g,{icon:"ep:plus"})]),_:1})):_("",!0)]),_:1})])]),_:1}),e(le,null,{default:n(()=>[a(l).length>0?(c(),C("div",B,[e(w,{gutter:20},{default:n(()=>[e(k,{modelValue:a(r).title,"onUpdate:modelValue":s[0]||(s[0]=t=>a(r).title=t),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF08\u5FC5\u586B\uFF09"},null,8,["modelValue"]),e(k,{modelValue:a(r).author,"onUpdate:modelValue":s[1]||(s[1]=t=>a(r).author=t),placeholder:"\u8BF7\u8F93\u5165\u4F5C\u8005",style:{"margin-top":"5px"}},null,8,["modelValue"]),e(k,{modelValue:a(r).contentSourceUrl,"onUpdate:modelValue":s[2]||(s[2]=t=>a(r).contentSourceUrl=t),placeholder:"\u8BF7\u8F93\u5165\u539F\u6587\u5730\u5740",style:{"margin-top":"5px"}},null,8,["modelValue"])]),_:1}),e(w,{gutter:20},{default:n(()=>[e(R,{span:12},{default:n(()=>[e(Se,{modelValue:a(r),"onUpdate:modelValue":s[3]||(s[3]=t=>me(r)?r.value=t:null),"is-first":a(u)===0},null,8,["modelValue","is-first"])]),_:1}),e(R,{span:12},{default:n(()=>[W,e(k,{rows:8,type:"textarea",modelValue:a(r).digest,"onUpdate:modelValue":s[4]||(s[4]=t=>a(r).digest=t),placeholder:"\u8BF7\u8F93\u5165\u6458\u8981",class:"digest",maxlength:"120"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:n(()=>[e(a(Ue),{modelValue:a(r).content,"onUpdate:modelValue":s[5]||(s[5]=t=>a(r).content=t),"editor-config":a(X)},null,8,["modelValue","editor-config"])]),_:1})])):_("",!0)]),_:1})]),_:1})}}}),b=Ne(q,[["__scopeId","data-v-c4606cac"]]),J=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}))});export{b as N,Oe as __tla,J as a,K as c};
