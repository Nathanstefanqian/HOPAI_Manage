import{aZ as L,dw as $,dx as I,b1 as B,d as x,dy as H,dz as q,b0 as T,cA as D,dA as y,b as d,r as h,a$ as F,bE as O,c9 as P,dB as U,ai as i,o as t,q as M,i as r,w as n,B as N,g as w,ah as V,aP as Y,V as a,c as o,aH as c,t as Z,a3 as l,a2 as j,Y as G,cH as J,b2 as K,__tla as Q}from"./index-cc83619a.js";let k,W=Promise.all([(()=>{try{return Q}catch{}})()]).then(async()=>{const C=x({name:"ElDrawer",components:{ElOverlay:H,ElFocusTrap:q,ElIcon:T,Close:D},inheritAttrs:!1,props:L({...$,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),emits:I,setup(e,{slots:s}){y({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},d(()=>!!s.title)),y({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},d(()=>!!e.customClass));const f=h(),b=h(),m=F("drawer"),{t:v}=O(),u=d(()=>e.direction==="rtl"||e.direction==="ltr"),p=d(()=>P(e.size));return{...U(e,f),drawerRef:f,focusStartRef:b,isHorizontal:u,drawerSize:p,ns:m,t:v}}}),_=["aria-label","aria-labelledby","aria-describedby"],E=["id","aria-level"],R=["aria-label"],S=["id"];k=K(B(C,[["render",function(e,s,f,b,m,v){const u=i("close"),p=i("el-icon"),z=i("el-focus-trap"),A=i("el-overlay");return t(),M(J,{to:"body",disabled:!e.appendToBody},[r(G,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:n(()=>[N(r(A,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:n(()=>[r(z,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:n(()=>[w("div",V({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:s[1]||(s[1]=Y(()=>{},["stop"]))}),[w("span",{ref:"focusStartRef",class:a(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(t(),o("header",{key:0,class:a(e.ns.e("header"))},[e.$slots.title?c(e.$slots,"title",{key:1},()=>[l(" DEPRECATED SLOT ")]):c(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?l("v-if",!0):(t(),o("span",{key:0,id:e.titleId,role:"heading","aria-level":e.headerAriaLevel,class:a(e.ns.e("title"))},Z(e.title),11,E))]),e.showClose?(t(),o("button",{key:2,"aria-label":e.t("el.drawer.close"),class:a(e.ns.e("close-btn")),type:"button",onClick:s[0]||(s[0]=(...g)=>e.handleClose&&e.handleClose(...g))},[r(p,{class:a(e.ns.e("close"))},{default:n(()=>[r(u)]),_:1},8,["class"])],10,R)):l("v-if",!0)],2)):l("v-if",!0),e.rendered?(t(),o("div",{key:1,id:e.bodyId,class:a(e.ns.e("body"))},[c(e.$slots,"default")],10,S)):l("v-if",!0),e.$slots.footer?(t(),o("div",{key:2,class:a(e.ns.e("footer"))},[c(e.$slots,"footer")],2)):l("v-if",!0)],16,_)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[j,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]))});export{k as E,W as __tla};