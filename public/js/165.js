"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[165],{6165:(e,t,l)=>{l.r(t),l.d(t,{default:()=>S});var a=l(6598),n={class:"mb-3 gap-3 d-flex row text-uppercase"},o={class:"col-sm col-12 me-auto"},c=(0,a.createElementVNode)("h4",null,"TANGGAL PEMBELIAN",-1),r={class:"fst-italic"},d={class:"col-sm col-12 me-auto"},i=(0,a.createElementVNode)("h4",null,"NOMOR NOTA",-1),m={class:"fst-italic"},s={class:"col-sm col-12 me-auto"},p=(0,a.createElementVNode)("h4",null,"NAMA SUPPLIER",-1),u={class:"fst-italic"},N={class:"card border-0 rounded shadow"},E={class:"card-body"},V={class:"table-responsive"},b={class:"table table-striped table-hover table-bordered"},h=(0,a.createElementVNode)("thead",null,[(0,a.createElementVNode)("tr",null,[(0,a.createElementVNode)("th",{scope:"col"},"NO"),(0,a.createElementVNode)("th",{scope:"col"},"NAMA"),(0,a.createElementVNode)("th",{scope:"col"},"HARGA"),(0,a.createElementVNode)("th",{scope:"col"},"JUMLAH"),(0,a.createElementVNode)("th",{scope:"col"},"DIKEMBALIKAN"),(0,a.createElementVNode)("th",{scope:"col"},"SATUAN"),(0,a.createElementVNode)("th",{scope:"col"},"TOTAL")])],-1),g={key:0},k={key:1,class:"text-center"},y=[(0,a.createElementVNode)("tr",null,[(0,a.createElementVNode)("td",{colspan:"6"},"Belum Ada Data")],-1)],A=(0,a.createElementVNode)("th",{colspan:"3",class:"text-center"},"TOTAL",-1),D=(0,a.createElementVNode)("th",null,null,-1);const f={props:{pembelian:Object}};const S=(0,l(3744).Z)(f,[["render",function(e,t,l,f,S,B){var v=(0,a.resolveComponent)("inertia-head");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(v,{title:"Detail Pembelian | ".concat(e.getDateFull(l.pembelian.tanggal))},null,8,["title"]),(0,a.createElementVNode)("div",n,[(0,a.createElementVNode)("div",o,[c,(0,a.createElementVNode)("span",r,(0,a.toDisplayString)(e.getDateFull(l.pembelian.tanggal)),1)]),(0,a.createElementVNode)("div",d,[i,(0,a.createElementVNode)("span",m,(0,a.toDisplayString)(l.pembelian.no_nota),1)]),(0,a.createElementVNode)("div",s,[p,(0,a.createElementVNode)("span",u,(0,a.toDisplayString)(l.pembelian.supplier),1)])]),(0,a.createElementVNode)("div",N,[(0,a.createElementVNode)("div",E,[(0,a.createElementVNode)("div",V,[(0,a.createElementVNode)("table",b,[h,(0,a.createVNode)(a.Transition,{name:"fade",mode:"out-in"},{default:(0,a.withCtx)((function(){return[l.pembelian.detail_pembelian.length>0?((0,a.openBlock)(),(0,a.createElementBlock)("tbody",g,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(l.pembelian.detail_pembelian,(function(t,l){return(0,a.openBlock)(),(0,a.createElementBlock)("tr",{key:t.id},[(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(l+1),1),(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(t.nama),1),(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(e.getRupiah(t.harga)),1),(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(t.jumlah),1),(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(t.kembali),1),(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(t.satuan),1),(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(e.getRupiah(t.total)),1)])})),128))])):((0,a.openBlock)(),(0,a.createElementBlock)("tbody",k,y))]})),_:1}),(0,a.createElementVNode)("tfoot",null,[(0,a.createElementVNode)("tr",null,[A,(0,a.createElementVNode)("th",null,(0,a.toDisplayString)(l.pembelian.detail_pembelian.reduce((function(e,t){return e+t.jumlah}),0)),1),(0,a.createElementVNode)("th",null,(0,a.toDisplayString)(l.pembelian.detail_pembelian.reduce((function(e,t){return e+t.kembali}),0)),1),D,(0,a.createElementVNode)("th",null,(0,a.toDisplayString)(e.getRupiah(l.pembelian.detail_pembelian.reduce((function(e,t){return e+t.harga*(t.jumlah-t.kembali)}),0))),1)])])])])])])],64)}]])}}]);