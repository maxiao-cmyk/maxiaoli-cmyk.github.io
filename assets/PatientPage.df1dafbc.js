import{C as j}from"./CpRadioBtn.568fab2f.js";import{_ as G}from"./CpIcon.65695a50.js";import{_ as H}from"./CpNavBar.e59f99e4.js";import{d as J,r as _,v as K,l as h,L as Q,o as l,a as s,c as a,b as n,M as F,I as W,N as X,w as v,g as Y,e as w,f as Z,i as ee,h as ue,n as te,t as g,O as ae,_ as ne}from"./index.704bf49d.js";import{g as oe,e as le,b as se,d as ie}from"./user.dfe0b079.js";import{F as de,n as re,i as pe}from"./rules.752667c5.js";import{A as ce,a as ve,s as P}from"./function-call.2cae2cfb.js";import{P as me,a as V,s as _e}from"./request.3cade431.js";import"./index.3ca281aa.js";import{B as Fe}from"./index.6b080f53.js";import{F as fe}from"./index.5b122279.js";import{C as ge}from"./index.931ef82a.js";import"./use-placeholder.efae37ec.js";import"./index.e27673f9.js";import"./use-route.123cb7a7.js";import"./interceptor.d8cac4bc.js";import"./index.4b6ed35c.js";import"./use-id.6dd5551f.js";const Be={class:"patient-page"},Ce={key:0,class:"patient-change"},Ee={class:"patient-list"},Ae=["onClick"],De={class:"info"},ke={class:"name"},be={class:"id"},he=["onClick"],we={key:0,class:"tag"},Pe={key:1,class:"patient-next"},Ve=J({__name:"PatientPage",setup(ye){const i=_([]),B=async()=>{const o=await oe();if(i.value=o.data,m.value&&i.value.length){const e=i.value.find(p=>p.defaultFlag===1);e?r.value=e.id:r.value=i.value[0].id}};K(()=>{B()});const y=[{label:"\u7537",value:1},{label:"\u5973",value:0}],d=_(!1),D=o=>{var e;if(o){const{id:p,name:f,idCard:E,gender:c,defaultFlag:A}=o;u.value={id:p,name:f,idCard:E,gender:c,defaultFlag:A}}else(e=C.value)==null||e.resetValidation(),u.value={...k};d.value=!0},k={name:"",idCard:"",gender:1,defaultFlag:0},u=_(k),b=h({get(){return u.value.defaultFlag===1},set(o){return u.value.defaultFlag=o?1:0}}),C=_(),x=async()=>{var e;await((e=C.value)==null?void 0:e.validate()),+u.value.idCard.slice(-2,-1)%2!==u.value.gender&&await P({title:"\u6E29\u99A8\u63D0\u793A",message:`\u9009\u62E9\u7684\u6027\u522B\u548C\u8EAB\u4EFD\u8BC1\u4FE1\u606F\u4E2D\u7684\u4E0D\u4E00\u81F4
\u60A8\u786E\u8BA4\u63D0\u4EA4\u5417?`}),u.value.id?await le(u.value):await se(u.value),d.value=!1,B(),V(u.value.id?"\u7F16\u8F91\u6210\u529F":"\u6DFB\u52A0\u6210\u529F")},R=async()=>{u.value.id&&(await P({title:"\u6E29\u99A8\u63D0\u793A",message:"\u786E\u8BA4\u5220\u9664 "+u.value.name+"\u60A3\u8005\u4FE1\u606F\u5417?"}),await ie(u.value.id),d.value=!1,B(),V("\u5220\u9664\u60A3\u8005\u4FE1\u606F\u6210\u529F"))},$=ee(),m=h(()=>$.query.isChange==="1"),r=_(),N=o=>{m.value&&(r.value=o.id)},U=Q(),I=ue(),S=()=>{if(r.value)U.setPatientId(r.value),I.push("/consult/pay");else return _e("\u8BF7\u9009\u62E9\u60A3\u8005")};return(o,e)=>{const p=H,f=G,E=Fe,c=fe,A=j,L=ge,M=de,T=ce,z=ve,q=me;return l(),s("div",Be,[a(p,{title:m.value?"\u6DFB\u52A0\u60A3\u8005":"\u5BB6\u5EAD\u6863\u6848"},null,8,["title"]),m.value?(l(),s("div",Ce,e[6]||(e[6]=[n("h3",null,"\u8BF7\u9009\u62E9\u60A3\u8005\u4FE1\u606F",-1),n("p",null,"\u4EE5\u4FBF\u533B\u751F\u7ED9\u51FA\u66F4\u51C6\u786E\u7684\u6CBB\u7597\uFF0C\u4FE1\u606F\u4EC5\u533B\u751F\u53EF\u89C1",-1)]))):F("",!0),n("div",Ee,[(l(!0),s(W,null,X(i.value,t=>(l(),s("div",{class:te(["patient-item",{selected:r.value===t.id}]),key:t.id,onClick:O=>N(t)},[n("div",De,[n("span",ke,g(t.name),1),n("span",be,g(t.idCard.replace(/^(.{6}).+(.{4})$/,"$1********$2")),1),n("span",null,g(t.genderValue),1),n("span",null,g(t.age)+"\u5C81",1)]),n("div",{class:"icon",onClick:ae(O=>D(t),["stop"])},[a(f,{name:"user-edit"})],8,he),t.defaultFlag===1?(l(),s("div",we,"\u9ED8\u8BA4")):F("",!0)],10,Ae))),128)),i.value.length<6?(l(),s("div",{key:0,class:"patient-add",onClick:e[0]||(e[0]=t=>D())},[a(f,{name:"user-add"}),e[7]||(e[7]=n("p",null,"\u6DFB\u52A0\u60A3\u8005",-1))])):F("",!0),e[9]||(e[9]=n("div",{class:"patient-tip"},"\u6700\u591A\u53EF\u6DFB\u52A0 6 \u4EBA",-1)),m.value?(l(),s("div",Pe,[a(E,{type:"primary",round:"",block:"",onClick:S},{default:v(()=>e[8]||(e[8]=[Y("\u4E0B\u4E00\u6B65")])),_:1})])):F("",!0)]),a(q,{show:d.value,"onUpdate:show":e[5]||(e[5]=t=>d.value=t),position:"right"},{default:v(()=>[a(p,{title:u.value.id?"\u7F16\u8F91\u60A3\u8005":"\u6DFB\u52A0\u60A3\u8005","right-text":"\u4FDD\u5B58",back:()=>d.value=!1,onClickRight:x},null,8,["title","back"]),a(M,{autocomplete:"off",ref_key:"form",ref:C},{default:v(()=>[a(c,{modelValue:u.value.name,"onUpdate:modelValue":e[1]||(e[1]=t=>u.value.name=t),rules:w(re),label:"\u771F\u5B9E\u59D3\u540D",placeholder:"\u8BF7\u8F93\u5165\u771F\u5B9E\u59D3\u540D"},null,8,["modelValue","rules"]),a(c,{modelValue:u.value.idCard,"onUpdate:modelValue":e[2]||(e[2]=t=>u.value.idCard=t),rules:w(pe),label:"\u8EAB\u4EFD\u8BC1\u53F7",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7"},null,8,["modelValue","rules"]),a(c,{label:"\u6027\u522B",class:"pb4"},{input:v(()=>[a(A,{options:y,modelValue:u.value.gender,"onUpdate:modelValue":e[3]||(e[3]=t=>u.value.gender=t)},null,8,["modelValue"])]),_:1}),a(c,{label:"\u9ED8\u8BA4\u5C31\u8BCA\u4EBA"},{input:v(()=>[a(L,{modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=t=>b.value=t),"icon-size":18,round:""},null,8,["modelValue"])]),_:1})]),_:1},512),u.value.id?(l(),Z(z,{key:0},{default:v(()=>[a(T,{text:"\u5220\u9664",onClick:R})]),_:1})):F("",!0)]),_:1},8,["show"])])}}});const Qe=ne(Ve,[["__scopeId","data-v-ffc30159"]]);export{Qe as default};