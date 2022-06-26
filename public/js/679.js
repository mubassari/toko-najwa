"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[679],{8372:(e,r,t)=>{t.d(r,{Z:()=>h});var n=t(8222),o={class:"mb-3"},l=(0,n.createElementVNode)("label",{class:"form-label"},"Nama User",-1),s=["disabled"],a={key:0,class:"invalid-feedback"},c={class:"mb-3"},i=(0,n.createElementVNode)("label",{class:"form-label"},"Nomor Telepon User",-1),d=["disabled"],u={key:0,class:"invalid-feedback"},m={class:"mb-3"},p=(0,n.createElementVNode)("label",{class:"form-label"},"Role User",-1),b=["disabled"],f=[(0,n.createElementVNode)("option",{disabled:"",selected:"",value:""},"— Pilih Role —",-1),(0,n.createElementVNode)("option",null,"admin",-1),(0,n.createElementVNode)("option",null,"staf",-1)],N={key:0,class:"invalid-feedback"},V=(0,n.createElementVNode)("div",{class:"mb-3"},[(0,n.createTextVNode)("Password: "),(0,n.createElementVNode)("b",null,"12345")],-1),E={class:"mb-3"},v=["disabled"];const k={props:{user:Object},remember:"user"};const h=(0,t(3744).Z)(k,[["render",function(e,r,t,k,h,C){return(0,n.openBlock)(),(0,n.createElementBlock)("form",{onSubmit:r[7]||(r[7]=(0,n.withModifiers)((function(r){return e.$emit("submit")}),["prevent"]))},[(0,n.createElementVNode)("div",o,[l,(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text",class:(0,n.normalizeClass)(["form-control",{"is-invalid":t.user.errors.nama}]),disabled:t.user.processing,"onUpdate:modelValue":r[0]||(r[0]=function(e){return t.user.nama=e}),onInput:r[1]||(r[1]=function(e){return t.user.clearErrors("nama")}),placeholder:"Masukkan Nama User"},null,42,s),[[n.vModelText,t.user.nama]]),(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[t.user.errors.nama?((0,n.openBlock)(),(0,n.createElementBlock)("div",a,(0,n.toDisplayString)(t.user.errors.nama),1)):(0,n.createCommentVNode)("",!0)]})),_:1})]),(0,n.createElementVNode)("div",c,[i,(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text",class:(0,n.normalizeClass)(["form-control",{"is-invalid":t.user.errors.no_telp}]),disabled:t.user.processing,"onUpdate:modelValue":r[2]||(r[2]=function(e){return t.user.no_telp=e}),onInput:r[3]||(r[3]=function(e){return t.user.clearErrors("no_telp")}),placeholder:"Masukkan Nomor Telepon User"},null,42,d),[[n.vModelText,t.user.no_telp]]),(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[t.user.errors.no_telp?((0,n.openBlock)(),(0,n.createElementBlock)("div",u,(0,n.toDisplayString)(t.user.errors.no_telp),1)):(0,n.createCommentVNode)("",!0)]})),_:1})]),(0,n.createElementVNode)("div",m,[p,(0,n.withDirectives)((0,n.createElementVNode)("select",{class:(0,n.normalizeClass)(["form-select text-capitalize",{"is-invalid":t.user.errors.role}]),disabled:t.user.processing,"onUpdate:modelValue":r[4]||(r[4]=function(e){return t.user.role=e}),onClick:r[5]||(r[5]=function(e){return t.user.clearErrors("role")})},f,10,b),[[n.vModelSelect,t.user.role]]),(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[t.user.errors.role?((0,n.openBlock)(),(0,n.createElementBlock)("div",N,(0,n.toDisplayString)(t.user.errors.role),1)):(0,n.createCommentVNode)("",!0)]})),_:1})]),V,(0,n.createElementVNode)("div",E,[(0,n.createElementVNode)("button",{type:"submit",disabled:t.user.processing||!t.user.isDirty,class:"btn btn-primary btn-md shadow-sm me-2"}," SIMPAN ",8,v),(0,n.createElementVNode)("span",{class:(0,n.normalizeClass)([{disabled:t.user.processing||!t.user.isDirty},"btn btn-warning btn-md shadow-sm"]),onClick:r[6]||(r[6]=function(e){return t.user.reset()})}," RESET ",2)])],32)}]])},4679:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var n=t(8222),o={class:"card border-0 rounded shadow"},l={class:"card-body"},s=(0,n.createElementVNode)("h4",null,"TAMBAH DATA USER",-1),a=(0,n.createElementVNode)("hr",null,null,-1);var c=t(9038);const i={components:{FormUser:t(8372).Z},setup:function(){return{user:(0,c.cI)({nama:"",no_telp:"",role:""})}}};const d=(0,t(3744).Z)(i,[["render",function(e,r,t,c,i,d){var u=(0,n.resolveComponent)("inertia-head"),m=(0,n.resolveComponent)("form-user");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(u,{title:"Tambah User"}),(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",l,[s,a,(0,n.createVNode)(m,{user:c.user,onSubmit:r[0]||(r[0]=function(e){return c.user.post("/user")})},null,8,["user"])])])])],64)}]])}}]);