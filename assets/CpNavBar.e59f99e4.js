import{d as _,r as T,c as n,h as C,o as D,a as I,_ as R}from"./index.704bf49d.js";import{u as w}from"./use-placeholder.efae37ec.js";import{c as y,n as A,t as g,g as L,H as u,B as N,I as P,w as S}from"./index.e27673f9.js";const[E,a]=y("nav-bar"),O={title:String,fixed:Boolean,zIndex:A,border:g,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:g};var z=_({name:E,props:O,emits:["clickLeft","clickRight"],setup(e,{emit:r,slots:t}){const c=T(),f=w(c,a),s=l=>{e.leftDisabled||r("clickLeft",l)},d=l=>{e.rightDisabled||r("clickRight",l)},i=()=>t.left?t.left():[e.leftArrow&&n(P,{class:a("arrow"),name:"arrow-left"},null),e.leftText&&n("span",{class:a("text")},[e.leftText])],h=()=>t.right?t.right():n("span",{class:a("text")},[e.rightText]),o=()=>{const{title:l,fixed:b,border:k,zIndex:x}=e,v=L(x),m=e.leftArrow||e.leftText||t.left,B=e.rightText||t.right;return n("div",{ref:c,style:v,class:[a({fixed:b}),{[N]:k,"van-safe-area-top":e.safeAreaInsetTop}]},[n("div",{class:a("content")},[m&&n("div",{class:[a("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?u:""],onClick:s},[i()]),n("div",{class:[a("title"),"van-ellipsis"]},[t.title?t.title():l]),B&&n("div",{class:[a("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?u:""],onClick:d},[h()])])])};return()=>e.fixed&&e.placeholder?f(o):o()}});const F=S(z),H=_({__name:"CpNavBar",props:{title:{},rightText:{},back:{type:Function}},emits:["click-right"],setup(e,{emit:r}){const t=e,c=r,f=()=>{c("click-right")},s=C(),d=()=>{var i;if(t.back)return t.back();(i=history.state)!=null&&i.back?s.back():s.push("/")};return(i,h)=>{const o=F;return D(),I("div",null,[n(o,{fixed:"",onClickLeft:d,"left-arrow":"",title:i.title,"right-text":i.rightText,onClickRight:f},null,8,["title","right-text"])])}}});const V=R(H,[["__scopeId","data-v-0d28871f"]]);export{V as _};
