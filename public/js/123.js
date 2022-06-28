"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[123],{6804:(e,r,t)=>{t.d(r,{Z:()=>h});var n=t(6598),o={class:"mb-3"},a=(0,n.createElementVNode)("label",{class:"form-label"},"Nama Pengguna",-1),l=["disabled"],s={key:0,class:"invalid-feedback"},i={class:"mb-3"},c=(0,n.createElementVNode)("label",{class:"form-label"},"Nomor Telepon Pengguna",-1),d=["disabled"],u={key:0,class:"invalid-feedback"},m={key:0,class:"mb-3"},p=(0,n.createElementVNode)("label",{class:"form-label"},"Role Pengguna",-1),b=["disabled"],f=[(0,n.createElementVNode)("option",{disabled:"",selected:"",value:""},"— Pilih Role —",-1),(0,n.createElementVNode)("option",{value:"admin"},"Admin",-1),(0,n.createElementVNode)("option",{value:"staf"},"Staf",-1)],N={key:0,class:"invalid-feedback"},v=(0,n.createElementVNode)("div",{class:"mb-3"},[(0,n.createTextVNode)("Kata Sandi: "),(0,n.createElementVNode)("b",null,"12345")],-1),V={class:"mb-3"},E=["disabled"];const k={props:{user:Object,disableRole:Boolean},remember:"user"};const h=(0,t(3744).Z)(k,[["render",function(e,r,t,k,h,g){return(0,n.openBlock)(),(0,n.createElementBlock)("form",{onSubmit:r[7]||(r[7]=(0,n.withModifiers)((function(r){return e.$emit("submit")}),["prevent"]))},[(0,n.createElementVNode)("div",o,[a,(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text",class:(0,n.normalizeClass)(["form-control",{"is-invalid":t.user.errors.nama}]),disabled:t.user.processing,"onUpdate:modelValue":r[0]||(r[0]=function(e){return t.user.nama=e}),onInput:r[1]||(r[1]=function(e){return t.user.clearErrors("nama")}),placeholder:"Masukkan Nama Pengguna"},null,42,l),[[n.vModelText,t.user.nama]]),(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[t.user.errors.nama?((0,n.openBlock)(),(0,n.createElementBlock)("div",s,(0,n.toDisplayString)(t.user.errors.nama),1)):(0,n.createCommentVNode)("",!0)]})),_:1})]),(0,n.createElementVNode)("div",i,[c,(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text",class:(0,n.normalizeClass)(["form-control",{"is-invalid":t.user.errors.no_telp}]),disabled:t.user.processing,"onUpdate:modelValue":r[2]||(r[2]=function(e){return t.user.no_telp=e}),onInput:r[3]||(r[3]=function(e){return t.user.clearErrors("no_telp")}),placeholder:"Masukkan Nomor Telepon Pengguna"},null,42,d),[[n.vModelText,t.user.no_telp]]),(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[t.user.errors.no_telp?((0,n.openBlock)(),(0,n.createElementBlock)("div",u,(0,n.toDisplayString)(t.user.errors.no_telp),1)):(0,n.createCommentVNode)("",!0)]})),_:1})]),t.disableRole?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createElementBlock)("div",m,[p,(0,n.withDirectives)((0,n.createElementVNode)("select",{class:(0,n.normalizeClass)(["form-select text-capitalize",{"is-invalid":t.user.errors.role}]),disabled:t.user.processing,"onUpdate:modelValue":r[4]||(r[4]=function(e){return t.user.role=e}),onClick:r[5]||(r[5]=function(e){return t.user.clearErrors("role")})},f,10,b),[[n.vModelSelect,t.user.role]]),(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[t.user.errors.role?((0,n.openBlock)(),(0,n.createElementBlock)("div",N,(0,n.toDisplayString)(t.user.errors.role),1)):(0,n.createCommentVNode)("",!0)]})),_:1})])),v,(0,n.createElementVNode)("div",V,[(0,n.createElementVNode)("button",{type:"submit",disabled:t.user.processing||!t.user.isDirty,class:"btn btn-primary btn-md shadow-sm me-2"}," SIMPAN ",8,E),(0,n.createElementVNode)("span",{class:(0,n.normalizeClass)([{disabled:t.user.processing||!t.user.isDirty},"btn btn-warning btn-md shadow-sm"]),onClick:r[6]||(r[6]=function(e){return t.user.reset()})}," RESET ",2)])],32)}]])},9123:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var n=t(6598),o={class:"card border-0 rounded shadow"},a={class:"card-body"},l=(0,n.createElementVNode)("h4",null,"UBAH DATA PENGGUNA",-1),s=(0,n.createElementVNode)("hr",null,null,-1);var i=t(9038);const c={components:{FormUser:t(6804).Z},props:{user:Object},setup:function(e){var r=e.user.id;return{users:(0,i.cI)({nama:e.user.nama,no_telp:e.user.no_telp,role:e.user.role}),id:r}}};const d=(0,t(3744).Z)(c,[["render",function(e,r,t,i,c,d){var u=(0,n.resolveComponent)("inertia-head"),m=(0,n.resolveComponent)("form-user");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(u,{title:"Ubah User | ".concat(t.user.nama)},null,8,["title"]),(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",a,[l,s,(0,n.createVNode)(m,{user:i.users,disableRole:e.$attrs.auth.user.role.toLowerCase()==t.user.role.toLowerCase(),onSubmit:r[0]||(r[0]=function(e){return i.users.put("/user/"+i.id)})},null,8,["user","disableRole"])])])])],64)}]])}}]);