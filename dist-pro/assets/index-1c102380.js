import{d as ua,l as ia,u as pa,r as y,aQ as ca,A as da,O as ma,o as u,c as D,i as a,w as t,a as l,P as _a,j as c,B as w,q as d,F as L,k as fa,g as C,t as k,at as Y,T as ya,D as wa,bY as ha,G as ba,_ as ga,H as ka,I as va,y as Ca,z as xa,E as Va,n as Ea,J as Sa,bZ as Ta,aj as Ia,K as Pa,L as Ua,__tla as Da}from"./index-ad2885e5.js";import{_ as La,__tla as Ya}from"./index.vue_vue_type_script_setup_true_lang-8fc12eb8.js";import{E as Aa,__tla as Na}from"./el-image-c4c86403.js";import{__tla as Ba}from"./el-image-viewer-3779b731.js";import{_ as za,__tla as Fa}from"./ContentWrap.vue_vue_type_script_setup_true_lang-22fef0d2.js";import{c as Ra,__tla as $a}from"./index-25ec65bf.js";import{d as ja,__tla as qa}from"./formatTime-7d212ed5.js";import{h as Ha,d as Ka,t as Ma}from"./tree-ebab458e.js";import{d as v}from"./constants-3cc050b6.js";import{d as Oa}from"./download-20922b56.js";import{a as Qa,b as Za,d as K,e as Ga,f as Ja,__tla as Wa}from"./spu-e7e965e6.js";import{g as Xa,__tla as at}from"./category-32ab07e6.js";import{u as tt,__tla as et}from"./useMessage-db992d55.js";import{_ as lt}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as rt}from"./index-d8b2d492.js";import{__tla as nt}from"./el-card-5175ae0f.js";import{__tla as st}from"./ImageViewer.vue_vue_type_script_setup_true_lang-cf41bc24.js";let M,ot=Promise.all([(()=>{try{return Da}catch{}})(),(()=>{try{return Ya}catch{}})(),(()=>{try{return Na}catch{}})(),(()=>{try{return Ba}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return $a}catch{}})(),(()=>{try{return qa}catch{}})(),(()=>{try{return Wa}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return st}catch{}})()]).then(async()=>{M=lt(ua({name:"ProductSpu",__name:"index",setup(ut){const h=tt(),{t:O}=ia(),{currentRoute:Q,push:A}=pa(),T=y(!1),I=y(!1),N=y(0),B=y([]),z=y([{count:0,name:"\u51FA\u552E\u4E2D\u5546\u54C1",type:0},{count:0,name:"\u4ED3\u5E93\u4E2D\u5546\u54C1",type:1},{count:0,name:"\u5DF2\u552E\u7F44\u5546\u54C1",type:2},{count:0,name:"\u8B66\u6212\u5E93\u5B58",type:3},{count:0,name:"\u5546\u54C1\u56DE\u6536\u7AD9",type:4}]),x=async()=>{const n=await Qa();for(let r in n)z.value[Number(r)].count=n[r]},s=y({pageNo:1,pageSize:10,tabType:0,name:"",categoryId:void 0,createTime:void 0}),F=y(),Z=n=>{s.value.tabType=n.paneName,f()},f=async()=>{T.value=!0;try{const n=await Za(s.value);B.value=n.list,N.value=n.total}finally{T.value=!1}},R=async(n,r)=>{try{const V=r===v.RECYCLE.status?"\u52A0\u5165\u5230\u56DE\u6536\u7AD9":"\u6062\u590D\u5230\u4ED3\u5E93";await h.confirm(`\u786E\u8BA4\u8981"${n.name}"${V}\u5417\uFF1F`),await K({id:n.id,status:r}),h.success(V+"\u6210\u529F"),await x(),await f()}catch{}},P=()=>{f()},G=()=>{F.value.resetFields(),P()},$=n=>{A(typeof n!="number"?{name:"ProductSpuAdd"}:{name:"ProductSpuEdit",params:{id:n}})},J=async()=>{try{await h.exportConfirm(),I.value=!0;const n=await Ja(s);Oa.excel(n,"\u5546\u54C1\u5217\u8868.xls")}catch{}finally{I.value=!1}},U=y();return ca(()=>Q.value,()=>{f()}),da(async()=>{await x(),await f();const n=await Xa({});U.value=Ha(n,"id","parentId")}),(n,r)=>{const V=ya,m=wa,W=ha,X=ba,E=ga,_=ka,j=va,q=za,aa=Ca,ta=xa,b=Va,S=Ea,i=Sa,ea=Aa,la=Ta,ra=Ia,na=Pa,sa=La,g=ma("hasPermi"),oa=Ua;return u(),D(L,null,[a(q,null,{default:t(()=>[a(j,{ref_key:"queryFormRef",ref:F,inline:!0,model:l(s),class:"-mb-15px","label-width":"68px"},{default:t(()=>[a(m,{label:"\u5546\u54C1\u540D\u79F0",prop:"name"},{default:t(()=>[a(V,{modelValue:l(s).name,"onUpdate:modelValue":r[0]||(r[0]=e=>l(s).name=e),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",onKeyup:_a(P,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),a(m,{label:"\u5546\u54C1\u5206\u7C7B",prop:"categoryId"},{default:t(()=>[a(W,{modelValue:l(s).categoryId,"onUpdate:modelValue":r[1]||(r[1]=e=>l(s).categoryId=e),options:l(U),props:l(Ka),class:"w-1/1",clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u5546\u54C1\u5206\u7C7B"},null,8,["modelValue","options","props"])]),_:1}),a(m,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:t(()=>[a(X,{modelValue:l(s).createTime,"onUpdate:modelValue":r[2]||(r[2]=e=>l(s).createTime=e),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px","end-placeholder":"\u7ED3\u675F\u65E5\u671F","start-placeholder":"\u5F00\u59CB\u65E5\u671F",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","default-time"])]),_:1}),a(m,null,{default:t(()=>[a(_,{onClick:P},{default:t(()=>[a(E,{class:"mr-5px",icon:"ep:search"}),c(" \u641C\u7D22 ")]),_:1}),a(_,{onClick:G},{default:t(()=>[a(E,{class:"mr-5px",icon:"ep:refresh"}),c(" \u91CD\u7F6E ")]),_:1}),w((u(),d(_,{plain:"",type:"primary",onClick:r[3]||(r[3]=e=>$(void 0))},{default:t(()=>[a(E,{class:"mr-5px",icon:"ep:plus"}),c(" \u65B0\u589E ")]),_:1})),[[g,["product:spu:create"]]]),w((u(),d(_,{loading:l(I),plain:"",type:"success",onClick:J},{default:t(()=>[a(E,{class:"mr-5px",icon:"ep:download"}),c(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[g,["product:spu:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(q,null,{default:t(()=>[a(ta,{modelValue:l(s).tabType,"onUpdate:modelValue":r[4]||(r[4]=e=>l(s).tabType=e),onTabClick:Z},{default:t(()=>[(u(!0),D(L,null,fa(l(z),e=>(u(),d(aa,{key:e.type,label:e.name+"("+e.count+")",name:e.type},null,8,["label","name"]))),128))]),_:1},8,["modelValue"]),w((u(),d(na,{data:l(B)},{default:t(()=>[a(i,{type:"expand"},{default:t(({row:e})=>[a(j,{class:"spu-table-expand","label-position":"left"},{default:t(()=>[a(S,null,{default:t(()=>[a(b,{span:24},{default:t(()=>[a(S,null,{default:t(()=>[a(b,{span:8},{default:t(()=>[a(m,{label:"\u5546\u54C1\u5206\u7C7B:"},{default:t(()=>{return[C("span",null,k((p=e.categoryId,Ma(U.value,p))),1)];var p}),_:2},1024)]),_:2},1024),a(b,{span:8},{default:t(()=>[a(m,{label:"\u5E02\u573A\u4EF7:"},{default:t(()=>[C("span",null,k(l(Y)(e.marketPrice)),1)]),_:2},1024)]),_:2},1024),a(b,{span:8},{default:t(()=>[a(m,{label:"\u6210\u672C\u4EF7:"},{default:t(()=>[C("span",null,k(l(Y)(e.costPrice)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(S,null,{default:t(()=>[a(b,{span:24},{default:t(()=>[a(S,null,{default:t(()=>[a(b,{span:8},{default:t(()=>[a(m,{label:"\u6D4F\u89C8\u91CF:"},{default:t(()=>[C("span",null,k(e.browseCount),1)]),_:2},1024)]),_:2},1024),a(b,{span:8},{default:t(()=>[a(m,{label:"\u865A\u62DF\u9500\u91CF:"},{default:t(()=>[C("span",null,k(e.virtualSalesCount),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),a(i,{align:"center",label:"\u5546\u54C1\u7F16\u53F7","min-width":"60",prop:"id"}),a(i,{label:"\u5546\u54C1\u56FE","min-width":"80"},{default:t(({row:e})=>[a(ea,{src:e.picUrl,class:"h-30px w-30px",onClick:p=>{return o=e.picUrl,void Ra({urlList:[o]});var o}},null,8,["src","onClick"])]),_:1}),a(i,{"show-overflow-tooltip":!0,label:"\u5546\u54C1\u540D\u79F0","min-width":"300",prop:"name"}),a(i,{align:"center",label:"\u5546\u54C1\u552E\u4EF7","min-width":"90",prop:"price"},{default:t(({row:e})=>[c(k(l(Y)(e.price))+"\u5143",1)]),_:1}),a(i,{align:"center",label:"\u9500\u91CF","min-width":"90",prop:"salesCount"}),a(i,{align:"center",label:"\u5E93\u5B58","min-width":"90",prop:"stock"}),a(i,{align:"center",label:"\u6392\u5E8F","min-width":"70",prop:"sort"}),a(i,{formatter:l(ja),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180"},null,8,["formatter"]),a(i,{align:"center",label:"\u72B6\u6001","min-width":"80"},{default:t(({row:e})=>[e.status>=0?(u(),d(la,{key:0,modelValue:e.status,"onUpdate:modelValue":p=>e.status=p,"active-value":1,"inactive-value":0,"active-text":"\u4E0A\u67B6","inactive-text":"\u4E0B\u67B6","inline-prompt":"",onChange:p=>(async o=>{try{const H=o.status?"\u4E0A\u67B6":"\u4E0B\u67B6";await h.confirm(`\u786E\u8BA4\u8981${H}"${o.name}"\u5417\uFF1F`),await K({id:o.id,status:o.status}),h.success(H+"\u6210\u529F"),await x(),await f()}catch{o.status=o.status===v.DISABLE.status?v.ENABLE.status:v.DISABLE.status}})(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])):(u(),d(ra,{key:1,type:"info"},{default:t(()=>[c("\u56DE\u6536\u7AD9")]),_:1}))]),_:1}),a(i,{align:"center",fixed:"right",label:"\u64CD\u4F5C","min-width":"200"},{default:t(({row:e})=>[w((u(),d(_,{link:"",type:"primary",onClick:p=>{return o=e.id,void A({name:"ProductSpuDetail",params:{id:o}});var o}},{default:t(()=>[c(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[g,["product:spu:update"]]]),w((u(),d(_,{link:"",type:"primary",onClick:p=>$(e.id)},{default:t(()=>[c(" \u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[g,["product:spu:update"]]]),l(s).tabType===4?(u(),D(L,{key:0},[w((u(),d(_,{link:"",type:"danger",onClick:p=>(async o=>{try{await h.delConfirm(),await Ga(o),h.success(O("common.delSuccess")),await x(),await f()}catch{}})(e.id)},{default:t(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[g,["product:spu:delete"]]]),w((u(),d(_,{link:"",type:"primary",onClick:p=>R(e,l(v).DISABLE.status)},{default:t(()=>[c(" \u6062\u590D\u5230\u4ED3\u5E93 ")]),_:2},1032,["onClick"])),[[g,["product:spu:update"]]])],64)):w((u(),d(_,{key:1,link:"",type:"primary",onClick:p=>R(e,l(v).RECYCLE.status)},{default:t(()=>[c(" \u52A0\u5165\u56DE\u6536\u7AD9 ")]),_:2},1032,["onClick"])),[[g,["product:spu:update"]]])]),_:1})]),_:1},8,["data"])),[[oa,l(T)]]),a(sa,{limit:l(s).pageSize,"onUpdate:limit":r[5]||(r[5]=e=>l(s).pageSize=e),page:l(s).pageNo,"onUpdate:page":r[6]||(r[6]=e=>l(s).pageNo=e),total:l(N),onPagination:f},null,8,["limit","page","total"])]),_:1})],64)}}}),[["__scopeId","data-v-254dc974"]])});export{ot as __tla,M as default};