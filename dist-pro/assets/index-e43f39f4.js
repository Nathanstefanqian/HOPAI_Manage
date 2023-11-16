import{aZ as L,a_ as J,d as k,bE as j,b as h,o as c,c as C,t as U,q as M,w as D,aO as X,a,b0 as Y,b1 as O,bw as Fe,b3 as ee,cc as ae,bd as te,a$ as F,r as E,aQ as G,bK as $e,i as ne,F as le,k as se,M as Ve,C as Je,V as z,g as re,T as Qe,b8 as We,a3 as Q,cN as Ze,cO as ie,cP as De,P as Ge,ak as He,bT as Re,bL as Xe,h as I,ba as K,cB as Ye,cC as ea,b2 as aa,__tla as ta}from"./index-cc83619a.js";let ue,na=Promise.all([(()=>{try{return ta}catch{}})()]).then(async()=>{const H=Symbol("elPaginationKey"),oe=L({disabled:Boolean,currentPage:{type:Number,default:1},prevText:{type:String},prevIcon:{type:J}}),pe={click:e=>e instanceof MouseEvent},ce=["disabled","aria-label","aria-disabled"],ge={key:0},de=k({name:"ElPaginationPrev"});var be=O(k({...de,props:oe,emits:pe,setup(e){const u=e,{t:n}=j(),g=h(()=>u.disabled||u.currentPage<=1);return(r,o)=>(c(),C("button",{type:"button",class:"btn-prev",disabled:a(g),"aria-label":r.prevText||a(n)("el.pagination.prev"),"aria-disabled":a(g),onClick:o[0]||(o[0]=b=>r.$emit("click",b))},[r.prevText?(c(),C("span",ge,U(r.prevText),1)):(c(),M(a(Y),{key:1},{default:D(()=>[(c(),M(X(r.prevIcon)))]),_:1}))],8,ce))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);const ve=L({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50},nextText:{type:String},nextIcon:{type:J}}),me=["disabled","aria-label","aria-disabled"],fe={key:0},Ce=k({name:"ElPaginationNext"});var ye=O(k({...Ce,props:ve,emits:["click"],setup(e){const u=e,{t:n}=j(),g=h(()=>u.disabled||u.currentPage===u.pageCount||u.pageCount===0);return(r,o)=>(c(),C("button",{type:"button",class:"btn-next",disabled:a(g),"aria-label":r.nextText||a(n)("el.pagination.next"),"aria-disabled":a(g),onClick:o[0]||(o[0]=b=>r.$emit("click",b))},[r.nextText?(c(),C("span",fe,U(r.nextText),1)):(c(),M(a(Y),{key:1},{default:D(()=>[(c(),M(X(r.nextIcon)))]),_:1}))],8,me))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);const W=()=>Fe(H,{}),Pe=L({pageSize:{type:Number,required:!0},pageSizes:{type:ee(Array),default:()=>ae([10,20,30,40,50,100])},popperClass:{type:String},disabled:Boolean,teleported:Boolean,size:{type:String,values:te}}),xe=k({name:"ElPaginationSizes"});var ke=O(k({...xe,props:Pe,emits:["page-size-change"],setup(e,{emit:u}){const n=e,{t:g}=j(),r=F("pagination"),o=W(),b=E(n.pageSize);G(()=>n.pageSizes,(d,y)=>{if(!$e(d,y)&&Array.isArray(d)){const p=d.includes(n.pageSize)?n.pageSize:n.pageSizes[0];u("page-size-change",p)}}),G(()=>n.pageSize,d=>{b.value=d});const x=h(()=>n.pageSizes);function w(d){var y;d!==b.value&&(b.value=d,(y=o.handleSizeChange)==null||y.call(o,Number(d)))}return(d,y)=>(c(),C("span",{class:z(a(r).e("sizes"))},[ne(a(Je),{"model-value":b.value,disabled:d.disabled,"popper-class":d.popperClass,size:d.size,teleported:d.teleported,"validate-event":!1,onChange:w},{default:D(()=>[(c(!0),C(le,null,se(a(x),p=>(c(),M(a(Ve),{key:p,value:p,label:p+a(g)("el.pagination.pagesize")},null,8,["value","label"]))),128))]),_:1},8,["model-value","disabled","popper-class","size","teleported"])],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);const he=L({size:{type:String,values:te}}),ze=["disabled"],Se=k({name:"ElPaginationJumper"});var Ne=O(k({...Se,props:he,setup(e){const{t:u}=j(),n=F("pagination"),{pageCount:g,disabled:r,currentPage:o,changeEvent:b}=W(),x=E(),w=h(()=>{var p;return(p=x.value)!=null?p:o==null?void 0:o.value});function d(p){x.value=p?+p:""}function y(p){p=Math.trunc(+p),b==null||b(p),x.value=void 0}return(p,S)=>(c(),C("span",{class:z(a(n).e("jump")),disabled:a(r)},[re("span",{class:z([a(n).e("goto")])},U(a(u)("el.pagination.goto")),3),ne(a(Qe),{size:p.size,class:z([a(n).e("editor"),a(n).is("in-pagination")]),min:1,max:a(g),disabled:a(r),"model-value":a(w),"validate-event":!1,label:a(u)("el.pagination.page"),type:"number","onUpdate:modelValue":d,onChange:y},null,8,["size","class","max","disabled","model-value","label"]),re("span",{class:z([a(n).e("classifier")])},U(a(u)("el.pagination.pageClassifier")),3)],10,ze))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);const _e=L({total:{type:Number,default:1e3}}),Te=["disabled"],Be=k({name:"ElPaginationTotal"});var Ee=O(k({...Be,props:_e,setup(e){const{t:u}=j(),n=F("pagination"),{disabled:g}=W();return(r,o)=>(c(),C("span",{class:z(a(n).e("total")),disabled:a(g)},U(a(u)("el.pagination.total",{total:r.total})),11,Te))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);const we=L({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),Me=["onKeyup"],Ie=["aria-current","aria-label","tabindex"],qe=["tabindex","aria-label"],Ae=["aria-current","aria-label","tabindex"],Le=["tabindex","aria-label"],je=["aria-current","aria-label","tabindex"],Ue=k({name:"ElPaginationPager"});var Ke=O(k({...Ue,props:we,emits:["change"],setup(e,{emit:u}){const n=e,g=F("pager"),r=F("icon"),{t:o}=j(),b=E(!1),x=E(!1),w=E(!1),d=E(!1),y=E(!1),p=E(!1),S=h(()=>{const t=n.pagerCount,l=(t-1)/2,s=Number(n.currentPage),N=Number(n.pageCount);let B=!1,_=!1;N>t&&(s>t-l&&(B=!0),s<N-l&&(_=!0));const T=[];if(B&&!_)for(let P=N-(t-2);P<N;P++)T.push(P);else if(!B&&_)for(let P=2;P<t;P++)T.push(P);else if(B&&_){const P=Math.floor(t/2)-1;for(let Z=s-P;Z<=s+P;Z++)T.push(Z)}else for(let P=2;P<N;P++)T.push(P);return T}),f=h(()=>["more","btn-quickprev",r.b(),g.is("disabled",n.disabled)]),$=h(()=>["more","btn-quicknext",r.b(),g.is("disabled",n.disabled)]),q=h(()=>n.disabled?-1:0);function V(t=!1){n.disabled||(t?w.value=!0:d.value=!0)}function A(t=!1){t?y.value=!0:p.value=!0}function i(t){const l=t.target;if(l.tagName.toLowerCase()==="li"&&Array.from(l.classList).includes("number")){const s=Number(l.textContent);s!==n.currentPage&&u("change",s)}else l.tagName.toLowerCase()==="li"&&Array.from(l.classList).includes("more")&&v(t)}function v(t){const l=t.target;if(l.tagName.toLowerCase()==="ul"||n.disabled)return;let s=Number(l.textContent);const N=n.pageCount,B=n.currentPage,_=n.pagerCount-2;l.className.includes("more")&&(l.className.includes("quickprev")?s=B-_:l.className.includes("quicknext")&&(s=B+_)),Number.isNaN(+s)||(s<1&&(s=1),s>N&&(s=N)),s!==B&&u("change",s)}return We(()=>{const t=(n.pagerCount-1)/2;b.value=!1,x.value=!1,n.pageCount>n.pagerCount&&(n.currentPage>n.pagerCount-t&&(b.value=!0),n.currentPage<n.pageCount-t&&(x.value=!0))}),(t,l)=>(c(),C("ul",{class:z(a(g).b()),onClick:v,onKeyup:Ge(i,["enter"])},[t.pageCount>0?(c(),C("li",{key:0,class:z([[a(g).is("active",t.currentPage===1),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===1,"aria-label":a(o)("el.pagination.currentPage",{pager:1}),tabindex:a(q)}," 1 ",10,Ie)):Q("v-if",!0),b.value?(c(),C("li",{key:1,class:z(a(f)),tabindex:a(q),"aria-label":a(o)("el.pagination.prevPages",{pager:t.pagerCount-2}),onMouseenter:l[0]||(l[0]=s=>V(!0)),onMouseleave:l[1]||(l[1]=s=>w.value=!1),onFocus:l[2]||(l[2]=s=>A(!0)),onBlur:l[3]||(l[3]=s=>y.value=!1)},[!w.value&&!y.value||t.disabled?(c(),M(a(ie),{key:1})):(c(),M(a(Ze),{key:0}))],42,qe)):Q("v-if",!0),(c(!0),C(le,null,se(a(S),s=>(c(),C("li",{key:s,class:z([[a(g).is("active",t.currentPage===s),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===s,"aria-label":a(o)("el.pagination.currentPage",{pager:s}),tabindex:a(q)},U(s),11,Ae))),128)),x.value?(c(),C("li",{key:2,class:z(a($)),tabindex:a(q),"aria-label":a(o)("el.pagination.nextPages",{pager:t.pagerCount-2}),onMouseenter:l[4]||(l[4]=s=>V()),onMouseleave:l[5]||(l[5]=s=>d.value=!1),onFocus:l[6]||(l[6]=s=>A()),onBlur:l[7]||(l[7]=s=>p.value=!1)},[!d.value&&!p.value||t.disabled?(c(),M(a(ie),{key:1})):(c(),M(a(De),{key:0}))],42,Le)):Q("v-if",!0),t.pageCount>1?(c(),C("li",{key:3,class:z([[a(g).is("active",t.currentPage===t.pageCount),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===t.pageCount,"aria-label":a(o)("el.pagination.currentPage",{pager:t.pageCount}),tabindex:a(q)},U(t.pageCount),11,je)):Q("v-if",!0)],42,Me))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);const m=e=>typeof e!="number",Oe=L({pageSize:Number,defaultPageSize:Number,total:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>K(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2==1,default:7},currentPage:Number,defaultCurrentPage:Number,layout:{type:String,default:["prev","pager","next","jumper","->","total"].join(", ")},pageSizes:{type:ee(Array),default:()=>ae([10,20,30,40,50,100])},popperClass:{type:String,default:""},prevText:{type:String,default:""},prevIcon:{type:J,default:()=>Ye},nextText:{type:String,default:""},nextIcon:{type:J,default:()=>ea},teleported:{type:Boolean,default:!0},small:Boolean,background:Boolean,disabled:Boolean,hideOnSinglePage:Boolean}),R="ElPagination";ue=aa(k({name:R,props:Oe,emits:{"update:current-page":e=>K(e),"update:page-size":e=>K(e),"size-change":e=>K(e),"current-change":e=>K(e),"prev-click":e=>K(e),"next-click":e=>K(e)},setup(e,{emit:u,slots:n}){const{t:g}=j(),r=F("pagination"),o=He().vnode.props||{},b="onUpdate:currentPage"in o||"onUpdate:current-page"in o||"onCurrentChange"in o,x="onUpdate:pageSize"in o||"onUpdate:page-size"in o||"onSizeChange"in o,w=h(()=>{if(m(e.total)&&m(e.pageCount)||!m(e.currentPage)&&!b)return!1;if(e.layout.includes("sizes")){if(m(e.pageCount)){if(!m(e.total)&&!m(e.pageSize)&&!x)return!1}else if(!x)return!1}return!0}),d=E(m(e.defaultPageSize)?10:e.defaultPageSize),y=E(m(e.defaultCurrentPage)?1:e.defaultCurrentPage),p=h({get:()=>m(e.pageSize)?d.value:e.pageSize,set(i){m(e.pageSize)&&(d.value=i),x&&(u("update:page-size",i),u("size-change",i))}}),S=h(()=>{let i=0;return m(e.pageCount)?m(e.total)||(i=Math.max(1,Math.ceil(e.total/p.value))):i=e.pageCount,i}),f=h({get:()=>m(e.currentPage)?y.value:e.currentPage,set(i){let v=i;i<1?v=1:i>S.value&&(v=S.value),m(e.currentPage)&&(y.value=v),b&&(u("update:current-page",v),u("current-change",v))}});function $(i){f.value=i}function q(){e.disabled||(f.value-=1,u("prev-click",f.value))}function V(){e.disabled||(f.value+=1,u("next-click",f.value))}function A(i,v){i&&(i.props||(i.props={}),i.props.class=[i.props.class,v].join(" "))}return G(S,i=>{f.value>i&&(f.value=i)}),Re(H,{pageCount:S,disabled:h(()=>e.disabled),currentPage:f,changeEvent:$,handleSizeChange:function(i){p.value=i;const v=S.value;f.value>v&&(f.value=v)}}),()=>{var i,v;if(!w.value)return Xe(R,g("el.pagination.deprecationWarning")),null;if(!e.layout||e.hideOnSinglePage&&S.value<=1)return null;const t=[],l=[],s=I("div",{class:r.e("rightwrapper")},l),N={prev:I(be,{disabled:e.disabled,currentPage:f.value,prevText:e.prevText,prevIcon:e.prevIcon,onClick:q}),jumper:I(Ne,{size:e.small?"small":"default"}),pager:I(Ke,{currentPage:f.value,pageCount:S.value,pagerCount:e.pagerCount,onChange:$,disabled:e.disabled}),next:I(ye,{disabled:e.disabled,currentPage:f.value,pageCount:S.value,nextText:e.nextText,nextIcon:e.nextIcon,onClick:V}),sizes:I(ke,{pageSize:p.value,pageSizes:e.pageSizes,popperClass:e.popperClass,disabled:e.disabled,teleported:e.teleported,size:e.small?"small":"default"}),slot:(v=(i=n==null?void 0:n.default)==null?void 0:i.call(n))!=null?v:null,total:I(Ee,{total:m(e.total)?0:e.total})},B=e.layout.split(",").map(T=>T.trim());let _=!1;return B.forEach(T=>{T!=="->"?_?l.push(N[T]):t.push(N[T]):_=!0}),A(t[0],r.is("first")),A(t[t.length-1],r.is("last")),_&&l.length>0&&(A(l[0],r.is("first")),A(l[l.length-1],r.is("last")),t.push(s)),I("div",{class:[r.b(),r.is("background",e.background),{[r.m("small")]:e.small}]},t)}}}))});export{ue as E,na as __tla};