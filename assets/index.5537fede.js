import{_ as w}from"./CpIcon.65695a50.js";import{d as B,r as O,c as t,A as V,l as E,E as N,_ as R,Q as j,o as M,a as z,w as u,g as b}from"./index.704bf49d.js";import{c as y,t as C,n as g,e as D,u as F,g as K,a1 as Q,w as A,f as X,j as Y,X as Z,i as q,I as G}from"./index.e27673f9.js";import{u as H}from"./use-placeholder.efae37ec.js";import{c as J}from"./interceptor.d8cac4bc.js";import{r as L,u as U}from"./use-route.123cb7a7.js";const[$,I]=y("tabbar"),W={route:Boolean,fixed:C,border:C,zIndex:g,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:D(0),safeAreaInsetBottom:{type:Boolean,default:null}},k=Symbol($);var ee=B({name:$,props:W,emits:["change","update:modelValue"],setup(e,{emit:a,slots:c}){const l=O(),{linkChildren:s}=F(k),d=H(l,I),n=()=>{var o;return(o=e.safeAreaInsetBottom)!=null?o:e.fixed},i=()=>{var o;const{fixed:r,zIndex:m,border:v}=e;return t("div",{ref:l,role:"tablist",style:K(m),class:[I({fixed:r}),{[Q]:v,"van-safe-area-bottom":n()}]},[(o=c.default)==null?void 0:o.call(c)])};return s({props:e,setActive:(o,r)=>{J(e.beforeChange,{args:[o],done(){a("update:modelValue",o),a("change",o),r()}})}}),()=>e.fixed&&e.placeholder?d(i):i()}});const te=A(ee),[ae,x]=y("tabbar-item"),ne=X({},L,{dot:Boolean,icon:String,name:g,badge:g,badgeProps:Object,iconPrefix:String});var oe=B({name:ae,props:ne,emits:["click"],setup(e,{emit:a,slots:c}){const l=U(),s=V().proxy,{parent:d,index:n}=Y(k);if(!d)return;const i=E(()=>{var r;const{route:m,modelValue:v}=d.props;if(m&&"$route"in s){const{$route:p}=s,{to:_}=e,f=q(_)?_:{path:_};return!!p.matched.find(P=>{const T="path"in f&&f.path===P.path,S="name"in f&&f.name===P.name;return T||S})}return((r=e.name)!=null?r:n.value)===v}),h=r=>{var m;i.value||d.setActive((m=e.name)!=null?m:n.value,l),a("click",r)},o=()=>{if(c.icon)return c.icon({active:i.value});if(e.icon)return t(G,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var r;const{dot:m,badge:v}=e,{activeColor:p,inactiveColor:_}=d.props,f=i.value?p:_;return t("div",{role:"tab",class:x({active:i.value}),style:{color:f},tabindex:0,"aria-selected":i.value,onClick:h},[t(Z,N({dot:m,class:x("icon"),content:v},e.badgeProps),{default:o}),t("div",{class:x("text")},[(r=c.default)==null?void 0:r.call(c,{active:i.value})])])}}});const re=A(oe);const ce={},le={class:"layout-page"};function se(e,a){const c=j("router-view"),l=w,s=re,d=te;return M(),z("div",le,[t(c),t(d,{route:""},{default:u(()=>[t(s,{to:"/home"},{icon:u(n=>[t(l,{name:`home-index-${n.active?"active":"default"}`},null,8,["name"])]),default:u(()=>[a[0]||(a[0]=b(" \u9996\u9875 "))]),_:1}),t(s,{to:"/article"},{icon:u(n=>[t(l,{name:`home-article-${n.active?"active":"default"}`},null,8,["name"])]),default:u(()=>[a[1]||(a[1]=b(" \u5065\u5EB7\u767E\u79D1 "))]),_:1}),t(s,{to:"/notify"},{icon:u(n=>[t(l,{name:`home-notice-${n.active?"active":"default"}`},null,8,["name"])]),default:u(()=>[a[2]||(a[2]=b("\u6D88\u606F\u901A\u77E5 "))]),_:1}),t(s,{to:"/user"},{icon:u(n=>[t(l,{name:`home-mine-${n.active?"active":"default"}`},null,8,["name"])]),default:u(()=>[a[3]||(a[3]=b("\u6211\u7684 "))]),_:1})]),_:1})])}const _e=R(ce,[["render",se],["__scopeId","data-v-4900149e"]]);export{_e as default};
