import{_ as A}from"./CpNavBar.e59f99e4.js";import{g as y}from"./consult.95ebbc64.js";import{d as v,c as i,E as S,r as b,v as w,l as I,L as N,Q as E,o as c,a as m,b as f,w as g,I as k,N as C,f as x,g as $,t as j,e as L,_ as R}from"./index.704bf49d.js";import{c as V,e as F,u as K,w as h,f as M,n as O,j as Q,X as T}from"./index.e27673f9.js";import{r as U,u as X}from"./use-route.123cb7a7.js";import"./use-placeholder.efae37ec.js";import"./request.3cade431.js";import"./interceptor.d8cac4bc.js";const[B,Y]=V("sidebar"),P=Symbol(B),q={modelValue:F(0)};var z=v({name:B,props:q,emits:["change","update:modelValue"],setup(l,{emit:o,slots:s}){const{linkChildren:r}=K(P),n=()=>+l.modelValue;return r({getActive:n,setActive:e=>{e!==n()&&(o("update:modelValue",e),o("change",e))}}),()=>{var e;return i("div",{role:"tablist",class:Y()},[(e=s.default)==null?void 0:e.call(s)])}}});const G=h(z),[H,D]=V("sidebar-item"),J=M({},U,{dot:Boolean,title:String,badge:O,disabled:Boolean,badgeProps:Object});var W=v({name:H,props:J,emits:["click"],setup(l,{emit:o,slots:s}){const r=X(),{parent:n,index:a}=Q(P);if(!n)return;const e=()=>{l.disabled||(o("click",a.value),n.setActive(a.value),r())};return()=>{const{dot:u,badge:p,title:_,disabled:d}=l,t=a.value===n.getActive();return i("div",{role:"tab",class:D({select:t,disabled:d}),tabindex:d?void 0:0,"aria-selected":t,onClick:e},[i(T,S({dot:u,class:D("text"),content:p},l.badgeProps),{default:()=>[s.title?s.title():_]})])}}});const Z=h(W),ee={class:"consult-dep-page"},te={class:"wrapper"},ae={class:"sub-dep"},se=v({__name:"ConsultDep",setup(l){const o=b(0),s=b([]);w(async()=>{const a=await y();s.value=a.data});const r=I(()=>{var a;return(a=s.value[o.value])==null?void 0:a.child}),n=N();return(a,e)=>{const u=A,p=Z,_=G,d=E("router-link");return c(),m("div",ee,[i(u,{title:"\u9009\u62E9\u79D1\u5BA4"}),f("div",te,[i(_,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t)},{default:g(()=>[(c(!0),m(k,null,C(s.value,t=>(c(),x(p,{title:t.name,key:t.id},null,8,["title"]))),128))]),_:1},8,["modelValue"]),f("div",ae,[(c(!0),m(k,null,C(r.value,t=>(c(),x(d,{to:"/consult/illness",key:t.id,onClick:oe=>L(n).setDep(t.id)},{default:g(()=>[$(j(t.name),1)]),_:2},1032,["onClick"]))),128))])])])}}});const _e=R(se,[["__scopeId","data-v-78198227"]]);export{_e as default};
