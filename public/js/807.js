"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[807],{9953:(e,a,n)=>{n.d(a,{Z:()=>d});var t=n(8222),r={class:"mb-3"},s=(0,t.createElementVNode)("label",{class:"form-label"},"Nama Satuan",-1),o=["disabled"],l={key:0,class:"invalid-feedback"},u={class:"mb-3"},c=["disabled"];const i={props:{satuan:Object},remember:"satuan"};const d=(0,n(3744).Z)(i,[["render",function(e,a,n,i,d,m){return(0,t.openBlock)(),(0,t.createElementBlock)("form",{onSubmit:a[3]||(a[3]=(0,t.withModifiers)((function(a){return e.$emit("submit")}),["prevent"]))},[(0,t.createElementVNode)("div",r,[s,(0,t.withDirectives)((0,t.createElementVNode)("input",{type:"text",class:(0,t.normalizeClass)(["form-control",{"is-invalid":n.satuan.errors.nama}]),disabled:n.satuan.processing,"onUpdate:modelValue":a[0]||(a[0]=function(e){return n.satuan.nama=e}),onInput:a[1]||(a[1]=function(e){return n.satuan.clearErrors("nama")}),placeholder:"Masukkan Nama Satuan"},null,42,o),[[t.vModelText,n.satuan.nama]]),(0,t.createVNode)(t.Transition,{name:"fade"},{default:(0,t.withCtx)((function(){return[n.satuan.errors.nama?((0,t.openBlock)(),(0,t.createElementBlock)("div",l,(0,t.toDisplayString)(n.satuan.errors.nama),1)):(0,t.createCommentVNode)("",!0)]})),_:1})]),(0,t.createElementVNode)("div",u,[(0,t.createElementVNode)("button",{type:"submit",disabled:n.satuan.processing||!n.satuan.isDirty,class:"btn btn-primary btn-md shadow-sm me-2"}," SIMPAN ",8,c),(0,t.createElementVNode)("span",{class:(0,t.normalizeClass)([{disabled:n.satuan.processing||!n.satuan.isDirty},"btn btn-warning btn-md shadow-sm"]),onClick:a[2]||(a[2]=function(e){return n.satuan.reset()})}," RESET ",2)])],32)}]])},8807:(e,a,n)=>{n.r(a),n.d(a,{default:()=>i});var t=n(8222),r={class:"card border-0 rounded shadow"},s={class:"card-body"},o=(0,t.createElementVNode)("h4",null,"UBAH DATA SATUAN",-1),l=(0,t.createElementVNode)("hr",null,null,-1);var u=n(9038);const c={components:{FormSatuan:n(9953).Z},props:{satuan:Object},setup:function(e){var a=e.satuan.id;return{satuan:(0,u.cI)({nama:e.satuan.nama}),id:a}}};const i=(0,n(3744).Z)(c,[["render",function(e,a,n,u,c,i){var d=(0,t.resolveComponent)("inertia-head"),m=(0,t.resolveComponent)("form-satuan");return(0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,null,[(0,t.createVNode)(d,{title:"Ubah Satuan | ".concat(u.satuan.nama)},null,8,["title"]),(0,t.createElementVNode)("div",null,[(0,t.createElementVNode)("div",r,[(0,t.createElementVNode)("div",s,[o,l,(0,t.createVNode)(m,{satuan:u.satuan,onSubmit:a[0]||(a[0]=function(e){return u.satuan.put("/master/satuan/"+u.id)})},null,8,["satuan"])])])])],64)}]])}}]);