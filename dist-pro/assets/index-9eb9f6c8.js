import{_ as Pe,__tla as Re}from"./ContentWrap.vue_vue_type_script_setup_true_lang-5fc9c47a.js";import{d as Se,p as Q,r as v,N as we,u as Ae,A as ge,O as ee,o,c as p,i as l,w as a,F as b,a as e,j as _,t as u,q as i,a3 as n,B as ae,k as S,at as y,H as Ce,J as De,K as Ie,E as Ne,n as Ue,g as m,au as Fe,$ as Oe,a0 as Ye,aj as Le,__tla as Xe}from"./index-75dbf65e.js";import{E as je,a as Ke,__tla as Ve}from"./el-timeline-item-7ed29cea.js";import{E as xe,__tla as Me}from"./el-link-f7e38500.js";import{E as He,a as Je,__tla as qe}from"./el-descriptions-item-736f2389.js";import{_ as Be,__tla as Ge}from"./DictTag.vue_vue_type_script_lang-c4c2c941.js";import{g as We,a as Ze,p as $e,__tla as ze}from"./index-80b2b767.js";import{f as D,__tla as Qe}from"./formatTime-69bc332e.js";import{D as k,b as ea,c as aa,__tla as la}from"./dict-0c18406e.js";import{_ as ta,__tla as ra}from"./OrderUpdateRemarkForm.vue_vue_type_script_setup_true_lang-cceb9ce6.js";import{_ as sa,__tla as _a}from"./OrderDeliveryForm.vue_vue_type_script_setup_true_lang-adaa8184.js";import{_ as ua,__tla as oa}from"./OrderUpdateAddressForm.vue_vue_type_script_setup_true_lang-91d18798.js";import{_ as ca,__tla as ia}from"./OrderUpdatePriceForm.vue_vue_type_script_setup_true_lang-0cbd9a58.js";import{g as na,__tla as da}from"./index-2ab7db69.js";import{u as pa,__tla as ya}from"./tagsView-2123ff39.js";import{D as E,T as le}from"./constants-3cc050b6.js";import{g as ma,__tla as fa}from"./index-e2f232f9.js";import{u as va,__tla as ba}from"./useMessage-116f318e.js";import{_ as ka}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as Ea}from"./el-card-8a9cc7c3.js";import"./color-a8b4eb58.js";import{__tla as ha}from"./Dialog.vue_vue_type_style_index_0_lang-0602d223.js";import{__tla as Ta}from"./el-tree-select-347d2422.js";import{__tla as Pa}from"./index-7b5f953f.js";import"./tree-ebab458e.js";let te,Ra=Promise.all([(()=>{try{return Re}catch{}})(),(()=>{try{return Xe}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return qe}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Qe}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ba}catch{}})(),(()=>{try{return Ea}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return Pa}catch{}})()]).then(async()=>{let f,N,U,F,O,Y,L,X,j,K,V;f=h=>(Oe("data-v-483b862d"),h=h(),Ye(),h),N=f(()=>m("span",{style:{color:"red"}},"\u63D0\u9192: ",-1)),U=f(()=>m("br",null,null,-1)),F=f(()=>m("br",null,null,-1)),O=f(()=>m("span",{style:{color:"red"}},"\u4F18\u60E0\u52B5\u4F18\u60E0: ",-1)),Y=f(()=>m("span",{style:{color:"red"}},"VIP \u4F18\u60E0: ",-1)),L=f(()=>m("span",{style:{color:"red"}},"\u6D3B\u52A8\u4F18\u60E0: ",-1)),X=f(()=>m("span",{style:{color:"red"}},"\u79EF\u5206\u62B5\u6263: ",-1)),j={key:0},K={key:1},V={class:"el-timeline-right-content"},te=ka(Se({name:"TradeOrderDetail",__name:"index",props:{id:Q.number.def(void 0),showPickUp:Q.bool.def(!0)},setup(h){const g=va(),re=c=>{const C=aa(k.USER_TYPE,c);switch(C==null?void 0:C.colorType){case"success":return"#67C23A";case"info":return"#909399";case"warning":return"#E6A23C";case"danger":return"#F56C6C"}return"#409EFF"},t=v({logs:[]}),x=v(),se=()=>{var c;(c=x.value)==null||c.open(t.value)},M=v(),_e=()=>{var c;(c=M.value)==null||c.open(t.value)},H=v(),ue=()=>{var c;(c=H.value)==null||c.open(t.value)},J=v(),oe=()=>{var c;(c=J.value)==null||c.open(t.value)},ce=async()=>{try{await g.confirm("\u786E\u8BA4\u6838\u9500\u8BA2\u5355\u5417\uFF1F"),await $e(t.value.id),g.success("\u6838\u9500\u6210\u529F"),await T()}catch{}},{params:ie}=we(),ne=h,q=ie.id||ne.id,T=async()=>{if(q){const c=await Ze(q);c||(g.error("\u4EA4\u6613\u8BA2\u5355\u4E0D\u5B58\u5728"),me()),t.value=c}},{delView:de}=pa(),{push:pe,currentRoute:ye}=Ae(),me=()=>{de(e(ye)),pe({name:"TradeOrder"})},fe=()=>{g.success("\u590D\u5236\u6210\u529F")},B=v([]),I=v([]),G=v({});return ge(async()=>{await T(),t.value.deliveryType===E.EXPRESS.type?(B.value=await na(),form.value.logisticsId&&(I.value=await We(t.value.id))):t.value.deliveryType===E.PICK_UP.type&&(G.value=await ma(t.value.pickUpStoreId))}),(c,C)=>{const r=He,P=Be,R=Je,w=Ce,ve=Le,A=De,be=Ie,W=Ne,ke=Ue,Ee=xe,Z=Ke,$=je,he=Pe,Te=ee("hasPermi"),z=ee("clipboard");return o(),p(b,null,[l(he,null,{default:a(()=>[l(R,{title:"\u8BA2\u5355\u4FE1\u606F"},{default:a(()=>[l(r,{label:"\u8BA2\u5355\u53F7: "},{default:a(()=>[_(u(e(t).no),1)]),_:1}),l(r,{label:"\u4E70\u5BB6: "},{default:a(()=>{var s,d;return[_(u((d=(s=e(t))==null?void 0:s.user)==null?void 0:d.nickname),1)]}),_:1}),l(r,{label:"\u8BA2\u5355\u7C7B\u578B: "},{default:a(()=>[l(P,{type:e(k).TRADE_ORDER_TYPE,value:e(t).type},null,8,["type","value"])]),_:1}),l(r,{label:"\u8BA2\u5355\u6765\u6E90: "},{default:a(()=>[l(P,{type:e(k).TERMINAL,value:e(t).terminal},null,8,["type","value"])]),_:1}),l(r,{label:"\u4E70\u5BB6\u7559\u8A00: "},{default:a(()=>[_(u(e(t).userRemark),1)]),_:1}),l(r,{label:"\u5546\u5BB6\u5907\u6CE8: "},{default:a(()=>[_(u(e(t).remark),1)]),_:1}),l(r,{label:"\u652F\u4ED8\u5355\u53F7: "},{default:a(()=>[_(u(e(t).payOrderId),1)]),_:1}),l(r,{label:"\u4ED8\u6B3E\u65B9\u5F0F: "},{default:a(()=>[l(P,{type:e(k).PAY_CHANNEL_CODE,value:e(t).payChannelCode},null,8,["type","value"])]),_:1}),e(t).brokerageUser?(o(),i(r,{key:0,label:"\u63A8\u5E7F\u7528\u6237: "},{default:a(()=>{var s;return[_(u((s=e(t).brokerageUser)==null?void 0:s.nickname),1)]}),_:1})):n("",!0)]),_:1}),l(R,{column:1,title:"\u8BA2\u5355\u72B6\u6001"},{default:a(()=>[l(r,{label:"\u8BA2\u5355\u72B6\u6001: "},{default:a(()=>[l(P,{type:e(k).TRADE_ORDER_STATUS,value:e(t).status},null,8,["type","value"])]),_:1}),ae((o(),i(r,{"label-class-name":"no-colon"},{default:a(()=>[e(t).status===e(le).UNPAID.status?(o(),i(w,{key:0,type:"primary",onClick:oe},{default:a(()=>[_(" \u8C03\u6574\u4EF7\u683C ")]),_:1})):n("",!0),l(w,{type:"primary",onClick:se},{default:a(()=>[_("\u5907\u6CE8")]),_:1}),e(t).status===e(le).UNDELIVERED.status?(o(),p(b,{key:1},[e(t).deliveryType===e(E).EXPRESS.type?(o(),i(w,{key:0,type:"primary",onClick:_e},{default:a(()=>[_(" \u53D1\u8D27 ")]),_:1})):n("",!0),e(t).deliveryType===e(E).EXPRESS.type?(o(),i(w,{key:1,type:"primary",onClick:ue},{default:a(()=>[_(" \u4FEE\u6539\u5730\u5740 ")]),_:1})):n("",!0),e(t).deliveryType===e(E).PICK_UP.type&&h.showPickUp?(o(),i(w,{key:2,type:"primary",onClick:ce},{default:a(()=>[_(" \u6838\u9500 ")]),_:1})):n("",!0)],64)):n("",!0)]),_:1})),[[Te,["trade:order:update"]]]),l(r,null,{label:a(()=>[N]),default:a(()=>[_(" \u4E70\u5BB6\u4ED8\u6B3E\u6210\u529F\u540E\uFF0C\u8D27\u6B3E\u5C06\u76F4\u63A5\u8FDB\u5165\u60A8\u7684\u5546\u6237\u53F7\uFF08\u5FAE\u4FE1\u3001\u652F\u4ED8\u5B9D\uFF09"),U,_(" \u8BF7\u53CA\u65F6\u5173\u6CE8\u4F60\u53D1\u51FA\u7684\u5305\u88F9\u72B6\u6001\uFF0C\u786E\u4FDD\u53EF\u4EE5\u914D\u9001\u81F3\u4E70\u5BB6\u624B\u4E2D "),F,_(" \u5982\u679C\u4E70\u5BB6\u8868\u793A\u6CA1\u6536\u5230\u8D27\u6216\u8D27\u7269\u6709\u95EE\u9898\uFF0C\u8BF7\u53CA\u65F6\u8054\u7CFB\u4E70\u5BB6\u5904\u7406\uFF0C\u53CB\u597D\u534F\u5546 ")]),_:1})]),_:1}),l(R,{title:"\u5546\u54C1\u4FE1\u606F"},{default:a(()=>[l(r,{labelClassName:"no-colon"},{default:a(()=>[l(ke,{gutter:20},{default:a(()=>[l(W,{span:15},{default:a(()=>[l(be,{data:e(t).items,border:""},{default:a(()=>[l(A,{label:"\u5546\u54C1",prop:"spuName",width:"auto"},{default:a(({row:s})=>[_(u(s.spuName)+" ",1),(o(!0),p(b,null,S(s.properties,d=>(o(),i(ve,{key:d.propertyId},{default:a(()=>[_(u(d.propertyName)+": "+u(d.valueName),1)]),_:2},1024))),128))]),_:1}),l(A,{label:"\u5546\u54C1\u539F\u4EF7",prop:"price",width:"150"},{default:a(({row:s})=>[_(u(e(y)(s.price))+"\u5143",1)]),_:1}),l(A,{label:"\u6570\u91CF",prop:"count",width:"100"}),l(A,{label:"\u5408\u8BA1",prop:"payPrice",width:"150"},{default:a(({row:s})=>[_(u(e(y)(s.payPrice))+"\u5143",1)]),_:1}),l(A,{label:"\u552E\u540E\u72B6\u6001",prop:"afterSaleStatus",width:"120"},{default:a(({row:s})=>[l(P,{type:e(k).TRADE_ORDER_ITEM_AFTER_SALE_STATUS,value:s.afterSaleStatus},null,8,["type","value"])]),_:1})]),_:1},8,["data"])]),_:1}),l(W,{span:10})]),_:1})]),_:1})]),_:1}),l(R,{column:4},{default:a(()=>[l(r,{label:"\u5546\u54C1\u603B\u989D: "},{default:a(()=>[_(u(e(y)(e(t).totalPrice))+" \u5143 ",1)]),_:1}),l(r,{label:"\u8FD0\u8D39\u91D1\u989D: "},{default:a(()=>[_(u(e(y)(e(t).deliveryPrice))+" \u5143 ",1)]),_:1}),l(r,{label:"\u8BA2\u5355\u8C03\u4EF7: "},{default:a(()=>[_(u(e(y)(e(t).adjustPrice))+" \u5143 ",1)]),_:1}),(o(),p(b,null,S(1,s=>l(r,{key:s,"label-class-name":"no-colon"})),64)),l(r,null,{label:a(()=>[O]),default:a(()=>[_(" "+u(e(y)(e(t).couponPrice))+" \u5143 ",1)]),_:1}),l(r,null,{label:a(()=>[Y]),default:a(()=>[_(" "+u(e(y)(e(t).vipPrice))+" \u5143 ",1)]),_:1}),l(r,null,{label:a(()=>[L]),default:a(()=>[_(" "+u(e(y)(e(t).discountPrice))+" \u5143 ",1)]),_:1}),l(r,null,{label:a(()=>[X]),default:a(()=>[_(" "+u(e(y)(e(t).pointPrice))+" \u5143 ",1)]),_:1}),(o(),p(b,null,S(3,s=>l(r,{key:s,"label-class-name":"no-colon"})),64)),l(r,{label:"\u5E94\u4ED8\u91D1\u989D: "},{default:a(()=>[_(u(e(y)(e(t).payPrice))+" \u5143 ",1)]),_:1})]),_:1}),l(R,{column:4,title:"\u6536\u8D27\u4FE1\u606F"},{default:a(()=>[l(r,{label:"\u914D\u9001\u65B9\u5F0F: "},{default:a(()=>[l(P,{type:e(k).TRADE_DELIVERY_TYPE,value:e(t).deliveryType},null,8,["type","value"])]),_:1}),l(r,{label:"\u6536\u8D27\u4EBA: "},{default:a(()=>[_(u(e(t).receiverName),1)]),_:1}),l(r,{label:"\u8054\u7CFB\u7535\u8BDD: "},{default:a(()=>[_(u(e(t).receiverMobile),1)]),_:1}),e(t).deliveryType===e(E).EXPRESS.type?(o(),p("div",j,[e(t).receiverDetailAddress?(o(),i(r,{key:0,label:"\u6536\u8D27\u5730\u5740: "},{default:a(()=>[_(u(e(t).receiverAreaName)+" "+u(e(t).receiverDetailAddress)+" ",1),ae(l(Ee,{icon:"ep:document-copy",type:"primary"},null,512),[[z,e(t).receiverAreaName+" "+e(t).receiverDetailAddress,"copy"],[z,fe,"success"]])]),_:1})):n("",!0),e(t).logisticsId?(o(),i(r,{key:1,label:"\u7269\u6D41\u516C\u53F8: "},{default:a(()=>{var s;return[_(u((s=e(B).find(d=>d.id===e(t).logisticsId))==null?void 0:s.name),1)]}),_:1})):n("",!0),e(t).logisticsId?(o(),i(r,{key:2,label:"\u8FD0\u5355\u53F7: "},{default:a(()=>[_(u(e(t).logisticsNo),1)]),_:1})):n("",!0),e(D).deliveryTime?(o(),i(r,{key:3,label:"\u53D1\u8D27\u65F6\u95F4: "},{default:a(()=>[_(u(e(D)(e(t).deliveryTime)),1)]),_:1})):n("",!0),(o(),p(b,null,S(2,s=>l(r,{key:s,"label-class-name":"no-colon"})),64)),e(I).length>0?(o(),i(r,{key:4,label:"\u7269\u6D41\u8BE6\u60C5: "},{default:a(()=>[l($,null,{default:a(()=>[(o(!0),p(b,null,S(e(I),(s,d)=>(o(),i(Z,{key:d,timestamp:e(D)(s.time)},{default:a(()=>[_(u(s.content),1)]),_:2},1032,["timestamp"]))),128))]),_:1})]),_:1})):n("",!0)])):n("",!0),e(t).deliveryType===e(E).PICK_UP.type?(o(),p("div",K,[e(t).pickUpStoreId?(o(),i(r,{key:0,label:"\u81EA\u63D0\u95E8\u5E97: "},{default:a(()=>{var s;return[_(u((s=e(G))==null?void 0:s.name),1)]}),_:1})):n("",!0)])):n("",!0)]),_:1}),l(R,{title:"\u8BA2\u5355\u64CD\u4F5C\u65E5\u5FD7"},{default:a(()=>[l(r,{labelClassName:"no-colon"},{default:a(()=>[l($,null,{default:a(()=>[(o(!0),p(b,null,S(e(t).logs,(s,d)=>(o(),i(Z,{key:d,timestamp:e(D)(s.createTime),placement:"top"},{dot:a(()=>[m("span",{style:Fe({backgroundColor:re(s.userType)}),class:"dot-node-style"},u(e(ea)(e(k).USER_TYPE,s.userType)[0]),5)]),default:a(()=>[m("div",V,u(s.content),1)]),_:2},1032,["timestamp"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),l(sa,{ref_key:"deliveryFormRef",ref:M,onSuccess:T},null,512),l(ta,{ref_key:"updateRemarkForm",ref:x,onSuccess:T},null,512),l(ua,{ref_key:"updateAddressFormRef",ref:H,onSuccess:T},null,512),l(ca,{ref_key:"updatePriceFormRef",ref:J,onSuccess:T},null,512)],64)}}}),[["__scopeId","data-v-483b862d"]])});export{Ra as __tla,te as default};