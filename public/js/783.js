"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[783],{7927:(e,t,l)=>{l.d(t,{Z:()=>c});var n=l(6598),a={key:0},r={class:"pagination justify-content-center"};const o={props:{links:Array}};const c=(0,l(3744).Z)(o,[["render",function(e,t,l,o,c,d){return l.links.length>3?((0,n.openBlock)(),(0,n.createElementBlock)("nav",a,[(0,n.createElementVNode)("ul",r,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(l.links,(function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{class:(0,n.normalizeClass)(["page-item",{active:e.active,disabled:null===e.url}]),key:t},[((0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(e.url?"inertia-link":"span"),{class:"page-link",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"]))],2)})),128))])])):(0,n.createCommentVNode)("",!0)}]])},8783:(e,t,l)=>{l.r(t),l.d(t,{default:()=>A});var n=l(6598),a=(0,n.createElementVNode)("div",{class:"mb-3 gap-3 d-flex row text-uppercase"},[(0,n.createElementVNode)("div",{class:"col-sm col-12 me-auto"},[(0,n.createElementVNode)("h4",null,"DATA PENJUALAN")])],-1),r={class:"mb-3 gap-3 d-flex justify-content-between row"},o={class:"col-12 col-sm-4"},c=(0,n.createTextVNode)("TAMBAH DATA"),d={class:"col-12 col-sm-4"},i={class:"card border-0 rounded shadow"},s={class:"card-body"},u={class:"table-responsive"},m={class:"table table-striped table-hover table-bordered"},p=(0,n.createElementVNode)("thead",null,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("th",{scope:"col"},"NO"),(0,n.createElementVNode)("th",{scope:"col"},"TANGGAL PENJUALAN"),(0,n.createElementVNode)("th",{scope:"col"},"KODE PENJUALAN"),(0,n.createElementVNode)("th",{scope:"col"},"JUMLAH BARANG"),(0,n.createElementVNode)("th",{scope:"col"},"TOTAL PENJUALAN"),(0,n.createElementVNode)("th",{scope:"col"},"AKSI")])],-1),N={key:0},k=(0,n.createTextVNode)("TAMPIL DETAIL"),E={key:1,class:"text-center"},V=[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("td",{colspan:"6"},"Data Tidak Ditemukan")],-1)];var f=l(9680),g=l(7927),h=l(6486),b=l(8591),y=l(2728);const v={components:{Pagination:g.Z,Datepicker:b.Z},props:{penjualans:Object,filters:Object},setup:function(e){var t=(0,n.ref)(null==e.filters.date?null:new Date(e.filters.date)),l=(0,n.ref)(y.Z);return(0,n.watch)(t,(0,h.debounce)((function(e){f.Inertia.get("/transaksi/penjualan",{date:null==e?"":new Date(e).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}).split("/").reverse().join("-")},{preserveState:!0,replace:!0})}),100)),{date:t,locale:l}}};const A=(0,l(3744).Z)(v,[["render",function(e,t,l,f,g,h){var b=(0,n.resolveComponent)("inertia-head"),y=(0,n.resolveComponent)("inertia-link"),v=(0,n.resolveComponent)("datepicker"),A=(0,n.resolveComponent)("pagination");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(b,{title:"Data Penjualan"}),a,(0,n.createElementVNode)("div",r,[(0,n.createElementVNode)("div",o,[(0,n.createVNode)(y,{href:"/transaksi/penjualan/create",class:"btn btn-primary"},{default:(0,n.withCtx)((function(){return[c]})),_:1})]),(0,n.createElementVNode)("div",d,[(0,n.createVNode)(v,{modelValue:f.date,"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.date=e}),startingView:"day",minimumView:"day",upperLimit:new Date,inputFormat:"dd MMMM yyyy",locale:f.locale,clearable:!0,placeholder:"Pilih Tanggal",class:"input-date"},null,8,["modelValue","upperLimit","locale"])])]),(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("table",m,[p,l.penjualans.data.length>0?((0,n.openBlock)(),(0,n.createElementBlock)("tbody",N,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(l.penjualans.data,(function(t,a){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:t.id},[(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(l.penjualans.from+a),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(e.getDate(t.tanggal)),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(t.kode),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(t.jumlah_barang||0),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(e.getRupiah(t.total_jual)),1),(0,n.createElementVNode)("td",null,[(0,n.createVNode)(y,{href:"/transaksi/penjualan/"+t.id,class:"btn btn-sm btn-primary me-2"},{default:(0,n.withCtx)((function(){return[k]})),_:2},1032,["href"])])])})),128))])):((0,n.openBlock)(),(0,n.createElementBlock)("tbody",E,V))])]),(0,n.createVNode)(A,{links:l.penjualans.links},null,8,["links"])])])],64)}]])}}]);