import{d as D,p as u,r as F,B as H,o as l,q as m,w as s,L as G,i as e,g as _,c as r,k as J,F as K,E as Q,j as i,t as o,a as c,an as V,a3 as n,_ as W,H as X,aj as Y,__tla as Z}from"./index-12d626d1.js";import{E as $,a as aa,__tla as ta}from"./el-timeline-item-1ba67c60.js";import{E as la,__tla as sa}from"./el-card-9cf947e7.js";import{_ as ea,__tla as ra}from"./DictTag.vue_vue_type_script_lang-297052e2.js";import{f as P,a as na,__tla as oa}from"./formatTime-cb061491.js";import{D as ia,__tla as ca}from"./dict-8bf7f732.js";import{_ as _a,__tla as ua}from"./ProcessInstanceChildrenTaskList.vue_vue_type_script_setup_true_lang-c7df91ef.js";let M,ma=Promise.all([(()=>{try{return Z}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return ua}catch{}})()]).then(async()=>{let y,p,f,d,g,k,h,b,w,T,x;y=_("span",{class:"el-icon-picture-outline"},"\u5BA1\u6279\u8BB0\u5F55",-1),p={class:"block"},f={style:{"font-weight":"700"}},d={key:0,style:{"margin-right":"30px","font-weight":"normal"}},g={key:1,style:{"font-weight":"normal"}},k={style:{"font-weight":"normal",color:"#8a909c"}},h={key:2,style:{"margin-left":"30px","font-weight":"normal"}},b={key:3,style:{"font-weight":"normal",color:"#8a909c"}},w={key:4,style:{"margin-left":"30px","font-weight":"normal"}},T={key:5,style:{"font-weight":"normal",color:"#8a909c"}},x={key:6},M=D({name:"BpmProcessInstanceTaskList",__name:"ProcessInstanceTaskList",props:{loading:u.bool,tasks:u.arrayOf(u.object)},setup(I){const S=t=>t.result===1?"el-icon-time":t.result===2?"el-icon-check":t.result===3?"el-icon-close":t.result===4?"el-icon-remove-outline":t.result===5?"el-icon-back":"",E=t=>t.result===1?"primary":t.result===2?"success":t.result===3?"danger":t.result===4?"info":t.result===5?"warning":t.result===6?"default":t.result===7||t.result===8?"warning":"",v=F();return(t,ya)=>{const U=ea,j=W,B=X,C=Y,L=la,N=aa,A=$,O=Q,R=G;return H((l(),m(L,{class:"box-card"},{header:s(()=>[y]),default:s(()=>[e(O,{offset:4,span:16},{default:s(()=>[_("div",p,[e(A,null,{default:s(()=>[(l(!0),r(K,null,J(I.tasks,(a,q)=>(l(),m(N,{key:q,icon:S(a),type:E(a)},{default:s(()=>[_("p",f,[i(" \u4EFB\u52A1\uFF1A"+o(a.name)+" ",1),e(U,{type:c(ia).BPM_PROCESS_INSTANCE_RESULT,value:a.result},null,8,["type","value"]),c(V)(a.children)?n("",!0):(l(),m(B,{key:0,style:{"margin-left":"5px"},onClick:pa=>(z=>{v.value.open(z)})(a)},{default:s(()=>[e(j,{icon:"ep:memo"}),i(" \u5B50\u4EFB\u52A1 ")]),_:2},1032,["onClick"]))]),e(L,{"body-style":{padding:"10px"}},{default:s(()=>[a.assigneeUser?(l(),r("label",d,[i(" \u5BA1\u6279\u4EBA\uFF1A"+o(a.assigneeUser.nickname)+" ",1),e(C,{size:"small",type:"info"},{default:s(()=>[i(o(a.assigneeUser.deptName),1)]),_:2},1024)])):n("",!0),a.createTime?(l(),r("label",g,"\u521B\u5EFA\u65F6\u95F4\uFF1A")):n("",!0),_("label",k,o(c(P)(a==null?void 0:a.createTime)),1),a.endTime?(l(),r("label",h," \u5BA1\u6279\u65F6\u95F4\uFF1A ")):n("",!0),a.endTime?(l(),r("label",b,o(c(P)(a==null?void 0:a.endTime)),1)):n("",!0),a.durationInMillis?(l(),r("label",w," \u8017\u65F6\uFF1A ")):n("",!0),a.durationInMillis?(l(),r("label",T,o(c(na)(a==null?void 0:a.durationInMillis)),1)):n("",!0),a.reason?(l(),r("p",x,[e(C,{type:E(a)},{default:s(()=>[i(o(a.reason),1)]),_:2},1032,["type"])])):n("",!0)]),_:2},1024)]),_:2},1032,["icon","type"]))),128))]),_:1})])]),_:1}),e(_a,{ref_key:"processInstanceChildrenTaskList",ref:v},null,512)]),_:1})),[[R,I.loading]])}}})});export{M as _,ma as __tla};