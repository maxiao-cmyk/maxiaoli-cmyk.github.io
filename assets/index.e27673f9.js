import{k as S,j as ne,l as O,r as p,m as R,p as oe,q as M,s as V,v as re,x as ve,y as be,z as E,e as D,A as se,B as ae,C as ye,d as L,c as b,D as we,E as Oe}from"./index.704bf49d.js";function bt(){}const Te=Object.assign,z=typeof window<"u",j=e=>e!==null&&typeof e=="object",y=e=>e!=null,$=e=>typeof e=="function",yt=e=>j(e)&&$(e.then)&&$(e.catch),ue=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),Be=()=>z?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function Z(e,t){const n=t.split(".");let o=e;return n.forEach(s=>{var r;o=j(o)&&(r=o[s])!=null?r:""}),o}function wt(e,t,n){return t.reduce((o,s)=>((!n||e[s]!==void 0)&&(o[s]=e[s]),o),{})}const Ot=e=>Array.isArray(e)?e:[e],Tt=null,w=[Number,String],Ce={type:Boolean,default:!0},Bt=e=>({type:e,required:!0}),Ct=()=>({type:Array,default:()=>[]}),xt=e=>({type:Number,default:e}),Dt=e=>({type:w,default:e}),v=e=>({type:String,default:e});var h=typeof window<"u";function P(e){return h?requestAnimationFrame(e):-1}function xe(e){h&&cancelAnimationFrame(e)}function Pt(e){P(()=>P(e))}var De=e=>e===window,H=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),Pe=e=>{const t=D(e);if(De(t)){const n=t.innerWidth,o=t.innerHeight;return H(n,o)}return t!=null&&t.getBoundingClientRect?t.getBoundingClientRect():H(0,0)};function St(e){const t=S(e,null);if(t){const n=se(),{link:o,unlink:s,internalChildren:r}=t;o(n),ne(()=>s(n));const i=O(()=>r.indexOf(n));return{parent:t,index:i}}return{parent:null,index:p(-1)}}function Se(e){const t=[],n=o=>{Array.isArray(o)&&o.forEach(s=>{var r;ye(s)&&(t.push(s),(r=s.component)!=null&&r.subTree&&(t.push(s.component.subTree),n(s.component.subTree.children)),s.children&&n(s.children))})};return n(e),t}var K=(e,t)=>{const n=e.indexOf(t);return n===-1?e.findIndex(o=>t.key!==void 0&&t.key!==null&&o.type===t.type&&o.key===t.key):n};function Ae(e,t,n){const o=Se(e.subTree.children);n.sort((r,i)=>K(o,r.vnode)-K(o,i.vnode));const s=n.map(r=>r.proxy);t.sort((r,i)=>{const a=s.indexOf(r),u=s.indexOf(i);return a-u})}function At(e){const t=R([]),n=R([]),o=se();return{children:t,linkChildren:r=>{ae(e,Object.assign({link:u=>{u.proxy&&(n.push(u),t.push(u.proxy),Ae(o,t,n))},unlink:u=>{const c=n.indexOf(u);t.splice(c,1),n.splice(c,1)},children:t,internalChildren:n},r))}}}var _=1e3,N=60*_,I=60*N,G=24*I;function Fe(e){const t=Math.floor(e/G),n=Math.floor(e%G/I),o=Math.floor(e%I/N),s=Math.floor(e%N/_),r=Math.floor(e%_);return{total:e,days:t,hours:n,minutes:o,seconds:s,milliseconds:r}}function Re(e,t){return Math.floor(e/1e3)===Math.floor(t/1e3)}function Ft(e){let t,n,o,s;const r=p(e.time),i=O(()=>Fe(r.value)),a=()=>{o=!1,xe(t)},u=()=>Math.max(n-Date.now(),0),c=g=>{var U,W;r.value=g,(U=e.onChange)==null||U.call(e,i.value),g===0&&(a(),(W=e.onFinish)==null||W.call(e))},d=()=>{t=P(()=>{o&&(c(u()),r.value>0&&d())})},l=()=>{t=P(()=>{if(o){const g=u();(!Re(g,r.value)||g===0)&&c(g),r.value>0&&l()}})},f=()=>{!h||(e.millisecond?d():l())},he=()=>{o||(n=Date.now()+r.value,o=!0,f())},Ee=(g=e.time)=>{a(),r.value=g};return oe(a),M(()=>{s&&(o=!0,s=!1,f())}),V(()=>{o&&(a(),s=!0)}),{start:he,pause:a,reset:Ee,current:i}}function $e(e){let t;re(()=>{e(),ve(()=>{t=!0})}),M(()=>{t&&e()})}function Rt(e,t,n={}){if(!h)return;const{target:o=window,passive:s=!1,capture:r=!1}=n;let i=!1,a;const u=l=>{if(i)return;const f=D(l);f&&!a&&(f.addEventListener(e,t,{capture:r,passive:s}),a=!0)},c=l=>{if(i)return;const f=D(l);f&&a&&(f.removeEventListener(e,t,r),a=!1)};ne(()=>c(o)),V(()=>c(o)),$e(()=>u(o));let d;return be(o)&&(d=E(o,(l,f)=>{c(f),u(l)})),()=>{d==null||d(),c(o),i=!0}}var B,A;function _e(){if(!B&&(B=p(0),A=p(0),h)){const e=()=>{B.value=window.innerWidth,A.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:B,height:A}}var Ne=/scroll|auto|overlay/i,ie=h?window:void 0;function Ie(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function ke(e,t=ie){let n=e;for(;n&&n!==t&&Ie(n);){const{overflowY:o}=window.getComputedStyle(n);if(Ne.test(o))return n;n=n.parentNode}return t}function $t(e,t=ie){const n=p();return re(()=>{e.value&&(n.value=ke(e.value,t))}),n}var C;function _t(){if(!C&&(C=p("visible"),h)){const e=()=>{C.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return C}var Me=Symbol("van-field");function Nt(e){const t=S(Me,null);t&&!t.customValue.value&&(t.customValue.value=e,E(e,()=>{t.resetValidation(),t.validateWithTrigger("onChange")}))}function Ve(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function q(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function ce(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function Le(e){q(window,e),q(document.body,e)}function It(e,t){if(e===window)return 0;const n=t?Ve(t):ce();return Pe(e).top+n}const ze=Be();function kt(){ze&&Le(ce())}const je=e=>e.stopPropagation();function Mt(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&je(e)}function Vt(e){const t=D(e);if(!t)return!1;const n=window.getComputedStyle(t),o=n.display==="none",s=t.offsetParent===null&&n.position!=="fixed";return o||s}const{width:Ye,height:Ue}=_e();function m(e){if(y(e))return ue(e)?`${e}px`:String(e)}function Lt(e){if(y(e)){if(Array.isArray(e))return{width:m(e[0]),height:m(e[1])};const t=m(e);return{width:t,height:t}}}function zt(e){const t={};return e!==void 0&&(t.zIndex=+e),t}let F;function We(){if(!F){const e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;F=parseFloat(t)}return F}function Ze(e){return e=e.replace(/rem/g,""),+e*We()}function He(e){return e=e.replace(/vw/g,""),+e*Ye.value/100}function Ke(e){return e=e.replace(/vh/g,""),+e*Ue.value/100}function jt(e){if(typeof e=="number")return e;if(z){if(e.includes("rem"))return Ze(e);if(e.includes("vw"))return He(e);if(e.includes("vh"))return Ke(e)}return parseFloat(e)}const Ge=/-(\w)/g,le=e=>e.replace(Ge,(t,n)=>n.toUpperCase()),qe=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"");function Yt(e,t=2){let n=e+"";for(;n.length<t;)n="0"+n;return n}const Ut=(e,t,n)=>Math.min(Math.max(e,t),n);function X(e,t,n){const o=e.indexOf(t);return o===-1?e:t==="-"&&o!==0?e.slice(0,o):e.slice(0,o+1)+e.slice(o).replace(n,"")}function Wt(e,t=!0,n=!0){t?e=X(e,".",/\./g):e=e.split(".")[0],n?e=X(e,"-",/-/g):e=e.replace(/-/,"");const o=t?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(o,"")}const{hasOwnProperty:Xe}=Object.prototype;function Je(e,t,n){const o=t[n];!y(o)||(!Xe.call(e,n)||!j(o)?e[n]=o:e[n]=fe(Object(e[n]),o))}function fe(e,t){return Object.keys(t).forEach(n=>{Je(e,t,n)}),e}var Qe={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",clear:"\u6E05\u7A7A",cancel:"\u53D6\u6D88",confirm:"\u786E\u8BA4",delete:"\u5220\u9664",loading:"\u52A0\u8F7D\u4E2D...",noCoupon:"\u6682\u65E0\u4F18\u60E0\u5238",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",telInvalid:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:(e,t)=>`${e}\u5E74${t}\u6708`,rangePrompt:e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1:"},vanCoupon:{unlimited:"\u65E0\u95E8\u69DB",discount:e=>`${e}\u6298`,condition:e=>`\u6EE1${e}\u5143\u53EF\u7528`},vanCouponCell:{title:"\u4F18\u60E0\u5238",count:e=>`${e}\u5F20\u53EF\u7528`},vanCouponList:{exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",addressDetail:"\u8BE6\u7EC6\u5730\u5740",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}};const J=p("zh-CN"),Q=R({"zh-CN":Qe}),et={messages(){return Q[J.value]},use(e,t){J.value=e,this.add({[e]:t})},add(e={}){fe(Q,e)}};var tt=et;function nt(e){const t=le(e)+".";return(n,...o)=>{const s=tt.messages(),r=Z(s,t+n)||Z(s,n);return $(r)?r(...o):r}}function k(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,o)=>n+k(e,o),""):Object.keys(t).reduce((n,o)=>n+(t[o]?k(e,o):""),""):""}function ot(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${k(t,n)}`)}function Y(e){const t=`van-${e}`;return[t,ot(t),nt(t)]}const T="van-hairline",Zt=`${T}--top`,Ht=`${T}--left`,Kt=`${T}--bottom`,Gt=`${T}--surround`,qt=`${T}--top-bottom`,Xt="van-haptics-feedback",Jt=Symbol("van-form"),Qt=500,en=5;function de(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(le(`-${n}`),e))},e}const rt=Symbol();function tn(e){const t=S(rt,null);t&&E(t,n=>{n&&e()})}const[st,ee]=Y("badge"),at={dot:Boolean,max:w,tag:v("div"),color:String,offset:Array,content:w,showZero:Ce,position:v("top-right")};var ut=L({name:st,props:at,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:a,showZero:u}=e;return y(a)&&a!==""&&(u||a!==0&&a!=="0")},o=()=>{const{dot:a,max:u,content:c}=e;if(!a&&n())return t.content?t.content():y(u)&&ue(c)&&+c>+u?`${u}+`:c},s=a=>a.startsWith("-")?a.replace("-",""):`-${a}`,r=O(()=>{const a={background:e.color};if(e.offset){const[u,c]=e.offset,{position:d}=e,[l,f]=d.split("-");t.default?(typeof c=="number"?a[l]=m(l==="top"?c:-c):a[l]=l==="top"?m(c):s(c),typeof u=="number"?a[f]=m(f==="left"?u:-u):a[f]=f==="left"?m(u):s(u)):(a.marginTop=m(c),a.marginLeft=m(u))}return a}),i=()=>{if(n()||e.dot)return b("div",{class:ee([e.position,{dot:e.dot,fixed:!!t.default}]),style:r.value},[o()])};return()=>{if(t.default){const{tag:a}=e;return b(a,{class:ee("wrapper")},{default:()=>[t.default(),i()]})}return i()}}});const it=de(ut);let me=2e3;const nn=()=>++me,ct=e=>{me=e},[ge,lt]=Y("config-provider"),pe=Symbol(ge),ft={tag:v("div"),theme:v("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,themeVarsScope:v("local"),iconPrefix:String};function dt(e){return e.replace(/([a-zA-Z])(\d)/g,"$1-$2")}function mt(e){const t={};return Object.keys(e).forEach(n=>{const o=dt(qe(n));t[`--van-${o}`]=e[n]}),t}function x(e={},t={}){Object.keys(e).forEach(n=>{e[n]!==t[n]&&document.documentElement.style.setProperty(n,e[n])}),Object.keys(t).forEach(n=>{e[n]||document.documentElement.style.removeProperty(n)})}L({name:ge,props:ft,setup(e,{slots:t}){const n=O(()=>mt(Te({},e.themeVars,e.theme==="dark"?e.themeVarsDark:e.themeVarsLight)));if(z){const o=()=>{document.documentElement.classList.add(`van-theme-${e.theme}`)},s=(r=e.theme)=>{document.documentElement.classList.remove(`van-theme-${r}`)};E(()=>e.theme,(r,i)=>{i&&s(i),o()},{immediate:!0}),M(o),V(s),oe(s),E(n,(r,i)=>{e.themeVarsScope==="global"&&x(r,i)}),E(()=>e.themeVarsScope,(r,i)=>{i==="global"&&x({},n.value),r==="global"&&x(n.value,{})}),e.themeVarsScope==="global"&&x(n.value,{})}return ae(pe,e),we(()=>{e.zIndex!==void 0&&ct(e.zIndex)}),()=>b(e.tag,{class:lt(),style:e.themeVarsScope==="local"?n.value:void 0},{default:()=>{var o;return[(o=t.default)==null?void 0:o.call(t)]}})}});const[gt,te]=Y("icon"),pt=e=>e==null?void 0:e.includes("/"),ht={dot:Boolean,tag:v("i"),name:String,size:w,badge:w,color:String,badgeProps:Object,classPrefix:String};var Et=L({name:gt,props:ht,setup(e,{slots:t}){const n=S(pe,null),o=O(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||te());return()=>{const{tag:s,dot:r,name:i,size:a,badge:u,color:c}=e,d=pt(i);return b(it,Oe({dot:r,tag:s,class:[o.value,d?"":`${o.value}-${i}`],style:{color:c,fontSize:m(a)},content:u},e.badgeProps),{default:()=>{var l;return[(l=t.default)==null?void 0:l.call(t),d&&b("img",{class:te("image"),src:i},null)]}})}}});const on=de(Et);export{P as $,Bt as A,Kt as B,Me as C,wt as D,Gt as E,Jt as F,Lt as G,Xt as H,on as I,$e as J,ke as K,nn as L,xt as M,z as N,tn as O,rt as P,Ye as Q,Ue as R,Pe as S,en as T,bt as U,Ht as V,Zt as W,it as X,_t as Y,Vt as Z,Pt as _,ce as a,Qt as a0,qt as a1,Yt as a2,Ft as a3,$t as a4,Ve as a5,xe as a6,q as a7,jt as a8,It as a9,yt as b,Y as c,$ as d,Dt as e,Te as f,zt as g,Tt as h,j as i,St as j,m as k,Rt as l,v as m,w as n,y as o,Mt as p,Wt as q,Ut as r,Le as s,Ce as t,At as u,Ot as v,de as w,kt as x,Nt as y,Ct as z};