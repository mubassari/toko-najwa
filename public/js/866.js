"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{7072:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(6598),o={class:"card mb-4 shadow user-select-none"},a=(0,n.createElementVNode)("div",null,null,-1),l={class:"card-title text-center"},c={key:0,class:"card-body"};const i={props:{title:String},data:function(){return{hide:!1}}};const s=(0,r(3744).Z)(i,[["render",function(e,t,r,i,s,u){return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",{role:"button",class:(0,n.normalizeClass)(["card-header d-flex align-items-center justify-content-between",{"border-bottom-0":s.hide}]),onClick:t[0]||(t[0]=function(e){return s.hide=!s.hide})},[a,(0,n.createElementVNode)("h5",l,(0,n.toDisplayString)(r.title),1),(0,n.createElementVNode)("i",{class:"flex-end fa-solid fa-angle-up",style:(0,n.normalizeStyle)([{transition:"transform 0.5s ease-out"},s.hide?"transform: rotateZ(0deg)":"transform: rotateZ(180deg)"])},null,4)],2),(0,n.createVNode)(n.Transition,{name:"fade",mode:"out-in"},{default:(0,n.withCtx)((function(){return[s.hide?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createElementBlock)("div",c,[(0,n.renderSlot)(e.$slots,"default")]))]})),_:3})])}]])},8277:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(6598);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={class:"card-subtitle mb-3"},i={class:"btn-group"},s=[(0,n.createElementVNode)("i",{class:"fas fa-file-pdf me-2"},null,-1),(0,n.createTextVNode)(" Cetak PDF ")],u=(0,n.createElementVNode)("i",{class:"fas fa-paper-plane me-2"},null,-1),d=(0,n.createTextVNode)(" Kirim PDF ke Telegram ");var p=r(4865),f=r.n(p);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const O={props:{title:String,url:String,data:Object},setup:function(e){return{printPDF:function(){f().start(),axios.post(e.url,m(m({},e.data),{},{title:e.title,telegram:!1}),{responseType:"blob"}).then((function(t){var r=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=r,n.setAttribute("download",e.title+".pdf"),document.body.appendChild(n),n.click(),n.remove()})).catch((function(e){console.log(e)})).finally((function(){f().done()}))}}}};const g=(0,r(3744).Z)(O,[["render",function(e,t,r,o,l,p){var f=(0,n.resolveComponent)("inertia-link");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("h5",c,(0,n.toDisplayString)(r.title),1),(0,n.renderSlot)(e.$slots,"default"),(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("button",{class:"btn btn-success",onClick:t[0]||(t[0]=function(e){return o.printPDF()})},s),e.$attrs.auth.user.can.send_to_telegram?((0,n.openBlock)(),(0,n.createBlock)(f,{key:0,class:"btn btn-primary",href:r.url,data:a(a({},r.data),{},{title:r.title,telegram:!0}),method:"post",as:"button",type:"button","preserve-scroll":""},{default:(0,n.withCtx)((function(){return[u,d]})),_:1},8,["href","data"])):(0,n.createCommentVNode)("",!0)])],64)}]])},9866:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(6598);var o=r(8277),a=r(7072);const l={components:{FormReport:o.Z,AccordionCard:a.Z},props:{hide:Boolean},emits:["hideToggle"],data:function(){return{title:"Cetak Laporan Supplier"}}};const c=(0,r(3744).Z)(l,[["render",function(e,t,r,o,a,l){var c=(0,n.resolveComponent)("form-report"),i=(0,n.resolveComponent)("accordion-card");return(0,n.openBlock)(),(0,n.createBlock)(i,{title:a.title},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(c,(0,n.mergeProps)(e.$attrs,{title:"Laporan Supplier",url:"/laporan/supplier",data:{filter:"Semua",type:null}}),null,16)]})),_:1},8,["title"])}]])}}]);