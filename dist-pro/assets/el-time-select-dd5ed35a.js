import{a$ as E,ci as F,b5 as S,cj as P,bu as N,d as _,c9 as x,ck as U,b1 as q,r as A,cl as G,bG as D,b as i,o as f,q as b,w as h,a as c,b2 as J,V as K,aP as L,a3 as Q,c as R,F as W,k as X,C as $,b3 as Y,__tla as Z}from"./index-16a04392.js";let I,ee=Promise.all([(()=>{try{return Z}catch{}})()]).then(async()=>{const V=E({format:{type:String,default:"HH:mm"},modelValue:String,disabled:Boolean,editable:{type:Boolean,default:!0},effect:{type:String,default:"light"},clearable:{type:Boolean,default:!0},size:F,placeholder:String,start:{type:String,default:"09:00"},end:{type:String,default:"18:00"},step:{type:String,default:"00:30"},minTime:String,maxTime:String,name:String,prefixIcon:{type:S([String,Object]),default:()=>P},clearIcon:{type:S([String,Object]),default:()=>N}}),u=n=>{const o=(n||"").split(":");if(o.length>=2){let t=Number.parseInt(o[0],10);const r=Number.parseInt(o[1],10),s=n.toUpperCase();return s.includes("AM")&&t===12?t=0:s.includes("PM")&&t!==12&&(t+=12),{hours:t,minutes:r}}return null},v=(n,o)=>{const t=u(n);if(!t)return-1;const r=u(o);if(!r)return-1;const s=t.minutes+60*t.hours,d=r.minutes+60*r.hours;return s===d?0:s>d?1:-1},g=n=>`${n}`.padStart(2,"0"),m=n=>`${g(n.hours)}:${g(n.minutes)}`,k=(n,o)=>{const t=u(n);if(!t)return"";const r=u(o);if(!r)return"";const s={hours:t.hours,minutes:t.minutes};return s.minutes+=r.minutes,s.hours+=r.hours,s.hours+=Math.floor(s.minutes/60),s.minutes=s.minutes%60,m(s)},T=_({name:"ElTimeSelect"});var p=Y(_({...T,props:V,emits:["change","blur","focus","update:modelValue"],setup(n,{expose:o}){const t=n;x.extend(U);const{Option:r}=$,s=q("input"),d=A(),z=G(),{lang:B}=D(),C=i(()=>t.modelValue),H=i(()=>{const e=u(t.start);return e?m(e):null}),y=i(()=>{const e=u(t.end);return e?m(e):null}),M=i(()=>{const e=u(t.step);return e?m(e):null}),O=i(()=>{const e=u(t.minTime||"");return e?m(e):null}),j=i(()=>{const e=u(t.maxTime||"");return e?m(e):null}),w=i(()=>{const e=[];if(t.start&&t.end&&t.step){let a,l=H.value;for(;l&&y.value&&v(l,y.value)<=0;)a=x(l,"HH:mm").locale(B.value).format(t.format),e.push({value:a,disabled:v(l,O.value||"-1:-1")<=0||v(l,j.value||"100:100")>=0}),l=k(l,M.value)}return e});return o({blur:()=>{var e,a;(a=(e=d.value)==null?void 0:e.blur)==null||a.call(e)},focus:()=>{var e,a;(a=(e=d.value)==null?void 0:e.focus)==null||a.call(e)}}),(e,a)=>(f(),b(c($),{ref_key:"select",ref:d,"model-value":c(C),disabled:c(z),clearable:e.clearable,"clear-icon":e.clearIcon,size:e.size,effect:e.effect,placeholder:e.placeholder,"default-first-option":"",filterable:e.editable,"onUpdate:modelValue":a[0]||(a[0]=l=>e.$emit("update:modelValue",l)),onChange:a[1]||(a[1]=l=>e.$emit("change",l)),onBlur:a[2]||(a[2]=l=>e.$emit("blur",l)),onFocus:a[3]||(a[3]=l=>e.$emit("focus",l))},{prefix:h(()=>[e.prefixIcon?(f(),b(c(J),{key:0,class:K(c(s).e("prefix-icon"))},{default:h(()=>[(f(),b(L(e.prefixIcon)))]),_:1},8,["class"])):Q("v-if",!0)]),default:h(()=>[(f(!0),R(W,null,X(c(w),l=>(f(),b(c(r),{key:l.value,label:l.value,value:l.value,disabled:l.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["model-value","disabled","clearable","clear-icon","size","effect","placeholder","filterable"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-select/src/time-select.vue"]]);p.install=n=>{n.component(p.name,p)},I=p});export{I as E,ee as __tla};