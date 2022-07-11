"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[516],{9167:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(6598),r={key:0},a={class:"pagination justify-content-center"};const o={props:{links:Array}};const c=(0,n(3744).Z)(o,[["render",function(e,t,n,o,c,s){return n.links.length>3?((0,l.openBlock)(),(0,l.createElementBlock)("nav",r,[(0,l.createElementVNode)("ul",a,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.links,(function(e,t){return(0,l.openBlock)(),(0,l.createElementBlock)("li",{class:(0,l.normalizeClass)(["page-item",{active:e.active,disabled:null===e.url}]),key:t},[((0,l.openBlock)(),(0,l.createBlock)((0,l.resolveDynamicComponent)(e.url?"inertia-link":"span"),{class:"page-link",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"]))],2)})),128))])])):(0,l.createCommentVNode)("",!0)}]])},4516:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var l=n(6598),r=(0,l.createElementVNode)("div",{class:"mb-3 gap-3 d-flex row text-uppercase"},[(0,l.createElementVNode)("div",{class:"col-sm col-12 me-auto"},[(0,l.createElementVNode)("h4",null,"DATA PENGGUNA")])],-1),a={class:"mb-3 gap-3 d-flex justify-content-between row"},o={class:"col-12 col-sm-4"},c=(0,l.createTextVNode)("TAMBAH DATA"),s={class:"col-12 col-sm-4"},i={class:"card border-0 rounded shadow"},d={class:"card-body"},u={class:"table table-striped table-hover table-bordered"},m=(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("th",{scope:"col"},"NO"),(0,l.createElementVNode)("th",{scope:"col"},"NAMA"),(0,l.createElementVNode)("th",{scope:"col"},"NO TELEPON"),(0,l.createElementVNode)("th",{scope:"col"},"ROLE"),(0,l.createElementVNode)("th",{scope:"col"},"AKSI")])],-1),p={key:0},k={class:"text-capitalize"},N=(0,l.createTextVNode)("UBAH"),E=(0,l.createTextVNode)("HAPUS"),f={key:1,class:"text-center"},V=[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",{colspan:"3"},"Data Tidak Ditemukan")],-1)];var h=n(9680);const b={components:{Pagination:n(9167).Z},props:{users:Object,filters:Object},setup:function(e){var t=(0,l.ref)(e.filters.search);return(0,l.watch)(t,_.debounce((function(e){h.Inertia.get("/master/user",{search:e},{preserveState:!0,replace:!0})}),100)),{search:t,deleteData:function(e){h.Inertia.delete(e,{onBefore:function(){return confirm("Apakah Anda yakin ingin menghapus data ini?")}})}}}};const v=(0,n(3744).Z)(b,[["render",function(e,t,n,h,b,v){var B=(0,l.resolveComponent)("inertia-head"),g=(0,l.resolveComponent)("inertia-link"),y=(0,l.resolveComponent)("pagination");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(B,{title:"Data Pengguna"}),r,(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("div",o,[(0,l.createVNode)(g,{href:"/user/create",class:"btn btn-primary"},{default:(0,l.withCtx)((function(){return[c]})),_:1})]),(0,l.createElementVNode)("div",s,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",class:"form-control",placeholder:"Cari data","onUpdate:modelValue":t[0]||(t[0]=function(e){return h.search=e})},null,512),[[l.vModelText,h.search]])])]),(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",d,[(0,l.createElementVNode)("table",u,[m,n.users.data.length>0?((0,l.openBlock)(),(0,l.createElementBlock)("tbody",p,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.users.data,(function(e,t){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",{key:e.id},[(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(n.users.from+t),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.nama),1),(0,l.createElementVNode)("td",null,"0"+(0,l.toDisplayString)(e.no_telp),1),(0,l.createElementVNode)("td",k,(0,l.toDisplayString)(e.role),1),(0,l.createElementVNode)("td",null,[(0,l.createVNode)(g,{href:"/user/"+e.id+"/edit",class:"btn btn-sm btn-primary me-2"},{default:(0,l.withCtx)((function(){return[N]})),_:2},1032,["href"]),e.editable?((0,l.openBlock)(),(0,l.createBlock)(g,{key:0,onClick:(0,l.withModifiers)((function(t){return h.deleteData("/user/"+e.id)}),["prevent"]),class:"btn btn-sm btn-danger"},{default:(0,l.withCtx)((function(){return[E]})),_:2},1032,["onClick"])):(0,l.createCommentVNode)("",!0)])])})),128))])):((0,l.openBlock)(),(0,l.createElementBlock)("tbody",f,V))]),(0,l.createVNode)(y,{links:n.users.links},null,8,["links"])])])],64)}]])}}]);