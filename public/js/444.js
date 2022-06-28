"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[444],{9878:(e,r,l)=>{l.d(r,{Z:()=>h});var t=l(6598),n={class:"mb-3"},a=(0,t.createElementVNode)("label",{class:"form-label"},"Nama Supplier",-1),o=["disabled"],s={key:0,class:"invalid-feedback"},i={class:"mb-3"},p=(0,t.createElementVNode)("label",{class:"form-label"},"Alamat Supplier",-1),u=["disabled"],c={key:0,class:"invalid-feedback"},d={class:"mb-3"},m=(0,t.createElementVNode)("label",{class:"form-label"},"Nomor Telepon Supplier",-1),b={class:"input-group"},f=(0,t.createElementVNode)("span",{class:"input-group-text"},"62",-1),N=["disabled"],v={key:0,class:"invalid-feedback"},E={class:"mb-3"},V=["disabled"];const k={props:{supplier:Object},remember:"supplier",computed:{onlyNumber:function(){this.supplier.clearErrors("no_telp"),this.supplier.no_telp=this.supplier.no_telp.replaceAll(/^0|\D/g,"")}}};const h=(0,l(3744).Z)(k,[["render",function(e,r,l,k,h,y){return(0,t.openBlock)(),(0,t.createElementBlock)("form",{onSubmit:r[7]||(r[7]=(0,t.withModifiers)((function(r){return e.$emit("submit")}),["prevent"]))},[(0,t.createElementVNode)("div",n,[a,(0,t.withDirectives)((0,t.createElementVNode)("input",{type:"text",class:(0,t.normalizeClass)(["form-control",{"is-invalid":l.supplier.errors.nama}]),disabled:l.supplier.processing,"onUpdate:modelValue":r[0]||(r[0]=function(e){return l.supplier.nama=e}),onInput:r[1]||(r[1]=function(e){return l.supplier.clearErrors("nama")}),placeholder:"Masukkan Nama Supplier"},null,42,o),[[t.vModelText,l.supplier.nama]]),(0,t.createVNode)(t.Transition,{name:"fade"},{default:(0,t.withCtx)((function(){return[l.supplier.errors.nama?((0,t.openBlock)(),(0,t.createElementBlock)("div",s,(0,t.toDisplayString)(l.supplier.errors.nama),1)):(0,t.createCommentVNode)("",!0)]})),_:1})]),(0,t.createElementVNode)("div",i,[p,(0,t.withDirectives)((0,t.createElementVNode)("input",{type:"text",class:(0,t.normalizeClass)(["form-control",{"is-invalid":l.supplier.errors.alamat}]),disabled:l.supplier.processing,"onUpdate:modelValue":r[2]||(r[2]=function(e){return l.supplier.alamat=e}),onInput:r[3]||(r[3]=function(e){return l.supplier.clearErrors("alamat")}),placeholder:"Masukkan Alamat Supplier"},null,42,u),[[t.vModelText,l.supplier.alamat]]),(0,t.createVNode)(t.Transition,{name:"fade"},{default:(0,t.withCtx)((function(){return[l.supplier.errors.alamat?((0,t.openBlock)(),(0,t.createElementBlock)("div",c,(0,t.toDisplayString)(l.supplier.errors.alamat),1)):(0,t.createCommentVNode)("",!0)]})),_:1})]),(0,t.createElementVNode)("div",d,[m,(0,t.createElementVNode)("div",b,[f,(0,t.withDirectives)((0,t.createElementVNode)("input",{type:"text",class:(0,t.normalizeClass)(["form-control",{"is-invalid":l.supplier.errors.no_telp}]),disabled:l.supplier.processing,"onUpdate:modelValue":r[4]||(r[4]=function(e){return l.supplier.no_telp=e}),onInput:r[5]||(r[5]=function(){return y.onlyNumber&&y.onlyNumber.apply(y,arguments)}),placeholder:"Masukkan Nomor Telepon Supplier"},null,42,N),[[t.vModelText,l.supplier.no_telp]]),(0,t.createVNode)(t.Transition,{name:"fade"},{default:(0,t.withCtx)((function(){return[l.supplier.errors.no_telp?((0,t.openBlock)(),(0,t.createElementBlock)("div",v,(0,t.toDisplayString)(l.supplier.errors.no_telp),1)):(0,t.createCommentVNode)("",!0)]})),_:1})])]),(0,t.createElementVNode)("div",E,[(0,t.createElementVNode)("button",{type:"submit",disabled:l.supplier.processing||!l.supplier.isDirty,class:"btn btn-primary btn-md shadow-sm me-2"}," SIMPAN ",8,V),(0,t.createElementVNode)("span",{class:(0,t.normalizeClass)([{disabled:l.supplier.processing||!l.supplier.isDirty},"btn btn-warning btn-md shadow-sm"]),onClick:r[6]||(r[6]=function(e){return l.supplier.reset()})}," RESET ",2)])],32)}]])},7444:(e,r,l)=>{l.r(r),l.d(r,{default:()=>u});var t=l(6598),n={class:"card border-0 rounded shadow"},a={class:"card-body"},o=(0,t.createElementVNode)("h4",null,"TAMBAH DATA SUPPLIER",-1),s=(0,t.createElementVNode)("hr",null,null,-1);var i=l(9038);const p={components:{FormSupplier:l(9878).Z},setup:function(){return{supplier:(0,i.cI)({nama:"",alamat:"",no_telp:""})}}};const u=(0,l(3744).Z)(p,[["render",function(e,r,l,i,p,u){var c=(0,t.resolveComponent)("inertia-head"),d=(0,t.resolveComponent)("form-supplier");return(0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,null,[(0,t.createVNode)(c,{title:"Tambah Supplier"}),(0,t.createElementVNode)("div",null,[(0,t.createElementVNode)("div",n,[(0,t.createElementVNode)("div",a,[o,s,(0,t.createVNode)(d,{supplier:i.supplier,onSubmit:r[0]||(r[0]=function(e){return i.supplier.post("/master/supplier")})},null,8,["supplier"])])])])],64)}]])}}]);