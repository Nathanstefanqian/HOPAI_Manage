import{d as b,O as h,B as _,o as r,q as i,w as t,i as a,a as p,a3 as C,g as x,t as T,j as c,J as B,_ as j,H as q,K as P,L as H,__tla as I}from"./index-03db6098.js";import J,{__tla as K}from"./main-8b2922f9.js";import{d as L,__tla as O}from"./formatTime-c52167d0.js";let m,V=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return O}catch{}})()]).then(async()=>{m=b({__name:"VoiceTable",props:{list:{},loading:{type:Boolean}},emits:["delete"],setup(u,{emit:f}){const n=u,s=f;return(v,z)=>{const l=B,o=j,d=q,y=P,g=h("hasPermi"),w=H;return _((r(),i(y,{data:n.list,stripe:"",border:"",style:{"margin-top":"10px"}},{default:t(()=>[a(l,{label:"\u7F16\u53F7",align:"center",prop:"mediaId"}),a(l,{label:"\u6587\u4EF6\u540D",align:"center",prop:"name"}),a(l,{label:"\u8BED\u97F3",align:"center"},{default:t(e=>[e.row.url?(r(),i(p(J),{key:0,url:e.row.url},null,8,["url"])):C("",!0)]),_:1}),a(l,{label:"\u4E0A\u4F20\u65F6\u95F4",align:"center",prop:"createTime",formatter:p(L),width:"180"},{default:t(e=>[x("span",null,T(e.row.createTime),1)]),_:1},8,["formatter"]),a(l,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:t(e=>[a(d,{type:"primary",link:"",onClick:k=>s("delete",e.row.id)},{default:t(()=>[a(o,{icon:"ep:download"}),c("\u4E0B\u8F7D ")]),_:2},1032,["onClick"]),_((r(),i(d,{type:"primary",link:"",onClick:k=>s("delete",e.row.id)},{default:t(()=>[a(o,{icon:"ep:delete"}),c("\u5220\u9664 ")]),_:2},1032,["onClick"])),[[g,["mp:material:delete"]]])]),_:1})]),_:1},8,["data"])),[[w,n.loading]])}}})});export{m as _,V as __tla};