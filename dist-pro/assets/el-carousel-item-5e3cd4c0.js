import{aE as te,aU as Ne,ei as Be,ak as le,cb as Te,r as m,b as A,a as e,aW as Ae,az as D,c5 as Ve,A as oe,bv as Pe,aB as $e,bC as ze,cD as De,aV as Oe,d as q,aG as ne,o as H,c as V,g as F,q as se,w as G,B as O,V as L,be as R,i as W,aI as re,cm as Re,a2 as j,Y as ie,a3 as K,cn as We,aJ as ue,au as ce,F as je,k as Ke,t as Ye,aK as ve,bf as qe,f as Fe,b1 as Ge,bg as Je,aL as Qe,aQ as Ue,__tla as Xe}from"./index-12d626d1.js";import{t as de,__tla as Ze}from"./el-image-viewer-fcd5a6f2.js";let he,fe,ea=Promise.all([(()=>{try{return Xe}catch{}})(),(()=>{try{return Ze}catch{}})()]).then(async()=>{const pe=te({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),me={change:(o,N)=>[o,N].every(Ne)},J=Symbol("carouselContextKey"),ge=(o,N,i)=>{const{children:r,addChild:B,removeChild:g}=Be(le(),"ElCarouselItem"),S=Te(),n=m(-1),d=m(null),I=m(!1),h=m(),w=m(0),y=m(!0),_=A(()=>o.arrow!=="never"&&!e(u)),b=A(()=>r.value.some(a=>a.props.label.toString().length>0)),M=A(()=>o.type==="card"),u=A(()=>o.direction==="vertical"),p=A(()=>o.height!=="auto"?{height:o.height}:{height:`${w.value}px`,overflow:"hidden"}),P=de(a=>{C(a)},300,{trailing:!0}),$=de(a=>{(function(t){o.trigger==="hover"&&t!==n.value&&(n.value=t)})(a)},300);function x(){d.value&&(clearInterval(d.value),d.value=null)}function E(){o.interval<=0||!o.autoplay||d.value||(d.value=setInterval(()=>T(),o.interval))}const T=()=>{n.value<r.value.length-1?n.value=n.value+1:o.loop&&(n.value=0)};function C(a){if(Ae(a)){const c=r.value.filter(k=>k.props.name===a);c.length>0&&(a=r.value.indexOf(c[0]))}if(a=Number(a),Number.isNaN(a)||a!==Math.floor(a))return;const t=r.value.length,s=n.value;n.value=a<0?o.loop?t-1:0:a>=t?o.loop?0:t-1:a,s===n.value&&v(s),l()}function v(a){r.value.forEach((t,s)=>{t.translateItem(s,n.value,a)})}function l(){x(),o.pauseOnHover||E()}D(()=>n.value,(a,t)=>{v(t),y.value&&(a%=2,t%=2),t>-1&&N("change",a,t)}),D(()=>o.autoplay,a=>{a?E():x()}),D(()=>o.loop,()=>{C(n.value)}),D(()=>o.interval,()=>{l()});const f=Ve();return oe(()=>{D(()=>r.value,()=>{r.value.length>0&&C(o.initialIndex)},{immediate:!0}),f.value=Pe(h.value,()=>{v()}),E()}),$e(()=>{x(),h.value&&f.value&&f.value.stop()}),ze(J,{root:h,isCardType:M,isVertical:u,items:r,loop:o.loop,addItem:B,removeItem:g,setActiveItem:C,setContainerHeight:function(a){o.height==="auto"&&(w.value=a)}}),{root:h,activeIndex:n,arrowDisplay:_,hasLabel:b,hover:I,isCardType:M,items:r,isVertical:u,containerStyle:p,isItemsTwoLength:y,handleButtonEnter:function(a){e(u)||r.value.forEach((t,s)=>{a===function(c,k){var Y,U,X,Z;const z=e(r),ee=z.length;if(ee===0||!c.states.inStage)return!1;const Se=k+1,Me=k-1,ae=ee-1,xe=z[ae].states.active,Ee=z[0].states.active,He=(U=(Y=z[Se])==null?void 0:Y.states)==null?void 0:U.active,Le=(Z=(X=z[Me])==null?void 0:X.states)==null?void 0:Z.active;return k===ae&&Ee||He?"left":!!(k===0&&xe||Le)&&"right"}(t,s)&&(t.states.hover=!0)})},handleButtonLeave:function(){e(u)||r.value.forEach(a=>{a.states.hover=!1})},handleIndicatorClick:function(a){n.value=a},handleMouseEnter:function(){I.value=!0,o.pauseOnHover&&x()},handleMouseLeave:function(){I.value=!1,E()},setActiveItem:C,prev:function(){C(n.value-1)},next:function(){C(n.value+1)},PlaceholderItem:function(){var a;const t=(a=S.default)==null?void 0:a.call(S);if(!t)return null;const s=De(t).filter(c=>Oe(c)&&c.type.name==="ElCarouselItem");return(s==null?void 0:s.length)===2&&o.loop&&!M.value?(y.value=!0,s):(y.value=!1,null)},isTwoLengthShow:a=>!y.value||(n.value<=1?a<=1:a>1),throttledArrowClick:P,throttledIndicatorHover:$}},ye=["onMouseenter","onClick"],Ie={key:0},be=q({name:"ElCarousel"});var Ce=ve(q({...be,props:pe,emits:me,setup(o,{expose:N,emit:i}){const r=o,{root:B,activeIndex:g,arrowDisplay:S,hasLabel:n,hover:d,isCardType:I,items:h,isVertical:w,containerStyle:y,handleButtonEnter:_,handleButtonLeave:b,handleIndicatorClick:M,handleMouseEnter:u,handleMouseLeave:p,setActiveItem:P,prev:$,next:x,PlaceholderItem:E,isTwoLengthShow:T,throttledArrowClick:C,throttledIndicatorHover:v}=ge(r,i),l=ne("carousel"),f=A(()=>{const t=[l.b(),l.m(r.direction)];return e(I)&&t.push(l.m("card")),t}),a=A(()=>{const t=[l.e("indicators"),l.em("indicators",r.direction)];return e(n)&&t.push(l.em("indicators","labels")),r.indicatorPosition==="outside"&&t.push(l.em("indicators","outside")),e(w)&&t.push(l.em("indicators","right")),t});return N({setActiveItem:P,prev:$,next:x}),(t,s)=>(H(),V("div",{ref_key:"root",ref:B,class:L(e(f)),onMouseenter:s[6]||(s[6]=R((...c)=>e(u)&&e(u)(...c),["stop"])),onMouseleave:s[7]||(s[7]=R((...c)=>e(p)&&e(p)(...c),["stop"]))},[F("div",{class:L(e(l).e("container")),style:ce(e(y))},[e(S)?(H(),se(ie,{key:0,name:"carousel-arrow-left",persisted:""},{default:G(()=>[O(F("button",{type:"button",class:L([e(l).e("arrow"),e(l).em("arrow","left")]),onMouseenter:s[0]||(s[0]=c=>e(_)("left")),onMouseleave:s[1]||(s[1]=(...c)=>e(b)&&e(b)(...c)),onClick:s[2]||(s[2]=R(c=>e(C)(e(g)-1),["stop"]))},[W(e(re),null,{default:G(()=>[W(e(Re))]),_:1})],34),[[j,(t.arrow==="always"||e(d))&&(r.loop||e(g)>0)]])]),_:1})):K("v-if",!0),e(S)?(H(),se(ie,{key:1,name:"carousel-arrow-right",persisted:""},{default:G(()=>[O(F("button",{type:"button",class:L([e(l).e("arrow"),e(l).em("arrow","right")]),onMouseenter:s[3]||(s[3]=c=>e(_)("right")),onMouseleave:s[4]||(s[4]=(...c)=>e(b)&&e(b)(...c)),onClick:s[5]||(s[5]=R(c=>e(C)(e(g)+1),["stop"]))},[W(e(re),null,{default:G(()=>[W(e(We))]),_:1})],34),[[j,(t.arrow==="always"||e(d))&&(r.loop||e(g)<e(h).length-1)]])]),_:1})):K("v-if",!0),W(e(E)),ue(t.$slots,"default")],6),t.indicatorPosition!=="none"?(H(),V("ul",{key:0,class:L(e(a))},[(H(!0),V(je,null,Ke(e(h),(c,k)=>O((H(),V("li",{key:k,class:L([e(l).e("indicator"),e(l).em("indicator",t.direction),e(l).is("active",k===e(g))]),onMouseenter:Y=>e(v)(k),onClick:R(Y=>e(M)(k),["stop"])},[F("button",{class:L(e(l).e("button"))},[e(n)?(H(),V("span",Ie,Ye(c.props.label),1)):K("v-if",!0)],2)],42,ye)),[[j,e(T)(k)]])),128))],2)):K("v-if",!0)],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const ke=te({name:{type:String,default:""},label:{type:[String,Number],default:""}}),we=(o,N)=>{const i=qe(J),r=le(),B=.83,g=m(),S=m(!1),n=m(0),d=m(1),I=m(!1),h=m(!1),w=m(!1),y=m(!1),{isCardType:_,isVertical:b}=i,M=(u,p,P)=>{var $;const x=e(_),E=($=i.items.value.length)!=null?$:Number.NaN,T=u===p;x||Je(P)||(y.value=T||u===P),!T&&E>2&&i.loop&&(u=function(v,l,f){const a=f-1,t=f/2;return l===0&&v===a?-1:l===a&&v===0?f:v<l-1&&l-v>=t?f+1:v>l+1&&v-l>=t?-2:v}(u,p,E));const C=e(b);I.value=T,x?(w.value=Math.round(Math.abs(u-p))<=1,n.value=function(v,l){var f,a;const t=e(b)?((f=i.root.value)==null?void 0:f.offsetHeight)||0:((a=i.root.value)==null?void 0:a.offsetWidth)||0;return w.value?t*(1.17*(v-l)+1)/4:v<l?-1.83*t/4:3.83*t/4}(u,p),d.value=e(I)?1:B):n.value=function(v,l,f){const a=i.root.value;return a?((f?a.offsetHeight:a.offsetWidth)||0)*(v-l):0}(u,p,C),h.value=!0,T&&g.value&&i.setContainerHeight(g.value.offsetHeight)};return oe(()=>{i.addItem({props:o,states:Fe({hover:S,translate:n,scale:d,active:I,ready:h,inStage:w,animating:y}),uid:r.uid,translateItem:M})}),Ge(()=>{i.removeItem(r.uid)}),{carouselItemRef:g,active:I,animating:y,hover:S,inStage:w,isVertical:b,translate:n,isCardType:_,scale:d,ready:h,handleItemClick:function(){if(i&&e(_)){const u=i.items.value.findIndex(({uid:p})=>p===r.uid);i.setActiveItem(u)}}}},_e=q({name:"ElCarouselItem"});var Q=ve(q({..._e,props:ke,setup(o){const N=o,i=ne("carousel"),{carouselItemRef:r,active:B,animating:g,hover:S,inStage:n,isVertical:d,translate:I,isCardType:h,scale:w,ready:y,handleItemClick:_}=we(N),b=A(()=>({transform:[`${"translate"+(e(d)?"Y":"X")}(${e(I)}px)`,`scale(${e(w)})`].join(" ")}));return(M,u)=>O((H(),V("div",{ref_key:"carouselItemRef",ref:r,class:L([e(i).e("item"),e(i).is("active",e(B)),e(i).is("in-stage",e(n)),e(i).is("hover",e(S)),e(i).is("animating",e(g)),{[e(i).em("item","card")]:e(h),[e(i).em("item","card-vertical")]:e(h)&&e(d)}]),style:ce(e(b)),onClick:u[0]||(u[0]=(...p)=>e(_)&&e(_)(...p))},[e(h)?O((H(),V("div",{key:0,class:L(e(i).e("mask"))},null,2)),[[j,!e(B)]]):K("v-if",!0),ue(M.$slots,"default")],6)),[[j,e(y)]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);fe=Qe(Ce,{CarouselItem:Q}),he=Ue(Q)});export{he as E,ea as __tla,fe as a};