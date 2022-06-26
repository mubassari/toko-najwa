"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[925],{7927:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8222),r={key:0},a={class:"pagination justify-content-center"};const o={props:{links:Array}};const c=(0,n(3744).Z)(o,[["render",function(e,t,n,o,c,i){return n.links.length>3?((0,l.openBlock)(),(0,l.createElementBlock)("nav",r,[(0,l.createElementVNode)("ul",a,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.links,(function(e,t){return(0,l.openBlock)(),(0,l.createElementBlock)("li",{class:(0,l.normalizeClass)(["page-item",{active:e.active,disabled:null===e.url}]),key:t},[((0,l.openBlock)(),(0,l.createBlock)((0,l.resolveDynamicComponent)(e.url?"inertia-link":"span"),{class:"page-link",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"]))],2)})),128))])])):(0,l.createCommentVNode)("",!0)}]])},925:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var l=n(8222),r={class:"mb-3 gap-3 d-flex justify-content-between row"},a={class:"col-12 col-sm-4"},o=(0,l.createTextVNode)("TAMBAH DATA"),c={class:"col-12 col-sm-4"},i={class:"card border-0 rounded shadow"},s={class:"card-body"},d={class:"table table-striped table-hover table-bordered"},p=(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("th",{scope:"col"},"NO"),(0,l.createElementVNode)("th",{scope:"col"},"NAMA"),(0,l.createElementVNode)("th",{scope:"col"},"ALAMAT"),(0,l.createElementVNode)("th",{scope:"col"},"NO TELP"),(0,l.createElementVNode)("th",{scope:"col"},"AKSI")])],-1),u={key:0},m=(0,l.createTextVNode)("UBAH"),k=(0,l.createTextVNode)("HAPUS"),f={key:1,class:"text-center"},h=[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",{colspan:"5"},"Data Tidak Ditemukan")],-1)];var N=n(9680),V=n(7927),E=n(6486);const b={components:{Pagination:V.Z},props:{suppliers:Object,filters:Object},setup:function(e){var t=(0,l.ref)(e.filters.search);return(0,l.watch)(t,(0,E.debounce)((function(e){N.Inertia.get("/master/supplier",{search:e},{preserveState:!0,replace:!0})}),100)),{search:t,deleteData:function(e){N.Inertia.delete(e,{onBefore:function(){return confirm("Apakah Anda yakin ingin menghapus data ini?")}})}}}};const g=(0,n(3744).Z)(b,[["render",function(e,t,n,N,V,E){var b=(0,l.resolveComponent)("inertia-head"),g=(0,l.resolveComponent)("inertia-link"),v=(0,l.resolveComponent)("pagination");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(b,{title:"Supplier"}),(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",a,[(0,l.createVNode)(g,{href:e.$page.url.split("?")[0]+"/create",class:"btn btn-primary"},{default:(0,l.withCtx)((function(){return[o]})),_:1},8,["href"])]),(0,l.createElementVNode)("div",c,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",class:"form-control",placeholder:"Cari data","onUpdate:modelValue":t[0]||(t[0]=function(e){return N.search=e})},null,512),[[l.vModelText,N.search]])])]),(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",s,[(0,l.createElementVNode)("table",d,[p,n.suppliers.data.length>0?((0,l.openBlock)(),(0,l.createElementBlock)("tbody",u,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.suppliers.data,(function(t,r){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",{key:t.id},[(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(n.suppliers.from+r),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(t.nama),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(t.alamat),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)("0"+t.no_telp),1),(0,l.createElementVNode)("td",null,[(0,l.createVNode)(g,{href:e.$page.url.split("?")[0]+"/"+t.id+"/edit",class:"btn btn-sm btn-primary me-2"},{default:(0,l.withCtx)((function(){return[m]})),_:2},1032,["href"]),(0,l.createVNode)(g,{onClick:(0,l.withModifiers)((function(n){return N.deleteData(e.$page.url.split("?")[0]+"/"+t.id)}),["prevent"]),class:"btn btn-sm btn-danger"},{default:(0,l.withCtx)((function(){return[k]})),_:2},1032,["onClick"])])])})),128))])):((0,l.openBlock)(),(0,l.createElementBlock)("tbody",f,h))]),(0,l.createVNode)(v,{links:n.suppliers.links},null,8,["links"])])])],64)}]])}}]);