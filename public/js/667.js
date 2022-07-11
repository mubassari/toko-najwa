"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[667],{9167:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(6598),l={key:0},r={class:"pagination justify-content-center"};const o={props:{links:Array}};const c=(0,n(3744).Z)(o,[["render",function(e,t,n,o,c,s){return n.links.length>3?((0,a.openBlock)(),(0,a.createElementBlock)("nav",l,[(0,a.createElementVNode)("ul",r,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(n.links,(function(e,t){return(0,a.openBlock)(),(0,a.createElementBlock)("li",{class:(0,a.normalizeClass)(["page-item",{active:e.active,disabled:null===e.url}]),key:t},[((0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(e.url?"inertia-link":"span"),{class:"page-link",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"]))],2)})),128))])])):(0,a.createCommentVNode)("",!0)}]])},4667:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(6598),l=(0,a.createElementVNode)("div",{class:"mb-3 gap-3 d-flex row text-uppercase"},[(0,a.createElementVNode)("div",{class:"col-sm col-12 me-auto"},[(0,a.createElementVNode)("h4",null,"DATA SATUAN")])],-1),r={class:"mb-3 gap-3 d-flex justify-content-between row"},o={class:"col-12 col-sm-4"},c=(0,a.createTextVNode)("TAMBAH DATA"),s={class:"col-12 col-sm-4"},i={class:"card border-0 rounded shadow"},d={class:"card-body"},u={class:"table table-striped table-hover table-bordered"},m=(0,a.createElementVNode)("thead",null,[(0,a.createElementVNode)("tr",null,[(0,a.createElementVNode)("th",{scope:"col"},"NO"),(0,a.createElementVNode)("th",{scope:"col"},"NAMA"),(0,a.createElementVNode)("th",{scope:"col"},"AKSI")])],-1),p={key:0},k=(0,a.createTextVNode)("UBAH"),f=(0,a.createTextVNode)("HAPUS"),N={key:1,class:"text-center"},h=[(0,a.createElementVNode)("tr",null,[(0,a.createElementVNode)("td",{colspan:"3"},"Data Tidak Ditemukan")],-1)];var V=n(9680);const E={components:{Pagination:n(9167).Z},props:{satuans:Object,filters:Object},setup:function(e){var t=(0,a.ref)(e.filters.search);return(0,a.watch)(t,_.debounce((function(e){V.Inertia.get("/master/satuan",{search:e},{preserveState:!0,replace:!0})}),100)),{search:t,deleteData:function(e){V.Inertia.delete(e,{onBefore:function(){return confirm("Apakah Anda yakin ingin menghapus data ini?")}})}}}};const b=(0,n(3744).Z)(E,[["render",function(e,t,n,V,E,b){var v=(0,a.resolveComponent)("inertia-head"),B=(0,a.resolveComponent)("inertia-link"),g=(0,a.resolveComponent)("pagination");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(v,{title:"Data Satuan"}),l,(0,a.createElementVNode)("div",r,[(0,a.createElementVNode)("div",o,[(0,a.createVNode)(B,{href:"/master/satuan/create",class:"btn btn-primary"},{default:(0,a.withCtx)((function(){return[c]})),_:1})]),(0,a.createElementVNode)("div",s,[(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text",class:"form-control",placeholder:"Cari data","onUpdate:modelValue":t[0]||(t[0]=function(e){return V.search=e})},null,512),[[a.vModelText,V.search]])])]),(0,a.createElementVNode)("div",i,[(0,a.createElementVNode)("div",d,[(0,a.createElementVNode)("table",u,[m,n.satuans.data.length>0?((0,a.openBlock)(),(0,a.createElementBlock)("tbody",p,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(n.satuans.data,(function(e,t){return(0,a.openBlock)(),(0,a.createElementBlock)("tr",{key:e.id},[(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(n.satuans.from+t),1),(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(e.nama),1),(0,a.createElementVNode)("td",null,[(0,a.createVNode)(B,{href:"/master/satuan/"+e.id+"/edit",class:"btn btn-sm btn-primary me-2"},{default:(0,a.withCtx)((function(){return[k]})),_:2},1032,["href"]),(0,a.createVNode)(B,{onClick:(0,a.withModifiers)((function(t){return V.deleteData("/master/satuan/"+e.id)}),["prevent"]),class:"btn btn-sm btn-danger"},{default:(0,a.withCtx)((function(){return[f]})),_:2},1032,["onClick"])])])})),128))])):((0,a.openBlock)(),(0,a.createElementBlock)("tbody",N,h))]),(0,a.createVNode)(g,{links:n.satuans.links},null,8,["links"])])])],64)}]])}}]);