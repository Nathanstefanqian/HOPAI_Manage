import{d as m,b0 as u,bU as w,h as T,aH as p,a_ as S,a$ as $,b as B,o as l,c as i,g as r,V as s,a,au as E,q as y,w as x,aO as z,b1 as I,a3 as n,t as f,b2 as q,b3 as C,b7 as H,__tla as O}from"./index-ad2885e5.js";let v,b,P=Promise.all([(()=>{try{return O}catch{}})()]).then(async()=>{const g=m({name:"ElTimeline",setup(d,{slots:o}){const e=u("timeline");return w("timeline",o),()=>T("ul",{class:[e.b()]},[p(o,"default")])}}),_=S({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:$},hollow:{type:Boolean,default:!1}}),h=m({name:"ElTimelineItem"});var c=q(m({...h,props:_,setup(d){const o=d,e=u("timeline-item"),k=B(()=>[e.e("node"),e.em("node",o.size||""),e.em("node",o.type||""),e.is("hollow",o.hollow)]);return(t,U)=>(l(),i("li",{class:s([a(e).b(),{[a(e).e("center")]:t.center}])},[r("div",{class:s(a(e).e("tail"))},null,2),t.$slots.dot?n("v-if",!0):(l(),i("div",{key:0,class:s(a(k)),style:E({backgroundColor:t.color})},[t.icon?(l(),y(a(I),{key:0,class:s(a(e).e("icon"))},{default:x(()=>[(l(),y(z(t.icon)))]),_:1},8,["class"])):n("v-if",!0)],6)),t.$slots.dot?(l(),i("div",{key:1,class:s(a(e).e("dot"))},[p(t.$slots,"dot")],2)):n("v-if",!0),r("div",{class:s(a(e).e("wrapper"))},[t.hideTimestamp||t.placement!=="top"?n("v-if",!0):(l(),i("div",{key:0,class:s([a(e).e("timestamp"),a(e).is("top")])},f(t.timestamp),3)),r("div",{class:s(a(e).e("content"))},[p(t.$slots,"default")],2),t.hideTimestamp||t.placement!=="bottom"?n("v-if",!0):(l(),i("div",{key:1,class:s([a(e).e("timestamp"),a(e).is("bottom")])},f(t.timestamp),3))],2)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/timeline/src/timeline-item.vue"]]);v=C(g,{TimelineItem:c}),b=H(c)});export{v as E,P as __tla,b as a};