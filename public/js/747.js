"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[747],{7927:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8222),a={key:0},r={class:"pagination justify-content-center"};const o={props:{links:Array}};const c=(0,n(3744).Z)(o,[["render",function(e,t,n,o,c,i){return n.links.length>3?((0,l.openBlock)(),(0,l.createElementBlock)("nav",a,[(0,l.createElementVNode)("ul",r,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.links,(function(e,t){return(0,l.openBlock)(),(0,l.createElementBlock)("li",{class:(0,l.normalizeClass)(["page-item",{active:e.active,disabled:null===e.url}]),key:t},[((0,l.openBlock)(),(0,l.createBlock)((0,l.resolveDynamicComponent)(e.url?"inertia-link":"span"),{class:"page-link",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"]))],2)})),128))])])):(0,l.createCommentVNode)("",!0)}]])},3747:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var l=n(8222),a={class:"mb-3 gap-3 d-flex justify-content-between row"},r={class:"col-12 col-sm-4"},o=(0,l.createTextVNode)("TAMBAH DATA"),c={class:"col-12 col-sm-4"},i={class:"card border-0 rounded shadow"},d={class:"card-body"},s={class:"table-responsive"},u={class:"table table-striped table-hover table-bordered"},p=(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("th",{scope:"col"},"NO"),(0,l.createElementVNode)("th",{scope:"col"},"TANGGAL PENJUALAN"),(0,l.createElementVNode)("th",{scope:"col"},"JUMLAH BARANG"),(0,l.createElementVNode)("th",{scope:"col"},"TOTAL PENJUALAN"),(0,l.createElementVNode)("th",{scope:"col"},"AKSI")])],-1),m={key:0},k=(0,l.createTextVNode)("TAMPIL DETAIL"),N={key:1,class:"text-center"},V=[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",{colspan:"6"},"Data Tidak Ditemukan")],-1)];var E=n(9680),f=n(7927),g=n(6486),h=n(8591),b=n(2728);const y={components:{Pagination:f.Z,Datepicker:h.Z},props:{penjualans:Object,filters:Object},setup:function(e){var t=(0,l.ref)(null==e.filters.date?null:new Date(e.filters.date)),n=(0,l.ref)(b.Z);return(0,l.watch)(t,(0,g.debounce)((function(e){E.Inertia.get("/transaksi/penjualan",{date:null==e?"":new Date(e).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}).split("/").reverse().join("-")},{preserveState:!0,replace:!0})}),100)),{date:t,locale:n}}};const v=(0,n(3744).Z)(y,[["render",function(e,t,n,E,f,g){var h=(0,l.resolveComponent)("inertia-head"),b=(0,l.resolveComponent)("inertia-link"),y=(0,l.resolveComponent)("datepicker"),v=(0,l.resolveComponent)("pagination");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(h,{title:"Penjualan"}),(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("div",r,[(0,l.createVNode)(b,{href:e.$page.url.split("?")[0]+"/create",class:"btn btn-primary"},{default:(0,l.withCtx)((function(){return[o]})),_:1},8,["href"])]),(0,l.createElementVNode)("div",c,[(0,l.createVNode)(y,{modelValue:E.date,"onUpdate:modelValue":t[0]||(t[0]=function(e){return E.date=e}),startingView:"day",minimumView:"day",upperLimit:new Date,inputFormat:"dd MMMM yyyy",locale:E.locale,clearable:!0,placeholder:"Pilih Tanggal",class:"input-date"},null,8,["modelValue","upperLimit","locale"])])]),(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",d,[(0,l.createElementVNode)("div",s,[(0,l.createElementVNode)("table",u,[p,n.penjualans.data.length>0?((0,l.openBlock)(),(0,l.createElementBlock)("tbody",m,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.penjualans.data,(function(t,a){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",{key:t.id},[(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(n.penjualans.from+a),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.getDate(t.tanggal)),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(t.jumlah_barang||0),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.getRupiah(t.detail_penjualan.reduce((function(e,t){return e+t.jumlah*t.harga}),0))),1),(0,l.createElementVNode)("td",null,[(0,l.createVNode)(b,{href:e.$page.url.split("?")[0]+"/"+t.id,class:"btn btn-sm btn-primary me-2"},{default:(0,l.withCtx)((function(){return[k]})),_:2},1032,["href"])])])})),128))])):((0,l.openBlock)(),(0,l.createElementBlock)("tbody",N,V))])]),(0,l.createVNode)(v,{links:n.penjualans.links},null,8,["links"])])])],64)}]])}}]);