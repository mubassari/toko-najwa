"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[288],{6288:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var n=a(8222),l={class:"mb-3 gap-3 row"},r={class:"col me-auto"},o={class:"mb-2"},c=(0,n.createElementVNode)("h4",{class:"text-uppercase"},"Nama",-1),d={class:"fst-italic"},i={class:"mb-2"},s=(0,n.createElementVNode)("h4",{class:"text-uppercase"},"Kategori",-1),m={class:"fst-italic"},u={class:"mb-2"},N=(0,n.createElementVNode)("h4",{class:"text-uppercase"},"Satuan",-1),p={class:"fst-italic"},b={class:"col-12 col-sm-4 d-sm-block gap-2 row mx-0"},V=(0,n.createTextVNode)("UBAH DATA"),E=(0,n.createTextVNode)("HAPUS"),g={class:"card border-0 rounded shadow mb-3"},h={class:"card-body"},f={class:"gap-3 d-flex row mb-3"},k=(0,n.createElementVNode)("div",{class:"col me-auto"},[(0,n.createElementVNode)("h4",null,"Detail Barang")],-1),y={class:"col-12 col-sm-4 d-sm-flex justify-content-sm-end gap-2 row mx-0"},A=(0,n.createTextVNode)("TAMBAH DETAIL"),v={class:"table-responsive"},D={class:"table table-striped table-hover table-bordered"},x=(0,n.createElementVNode)("thead",null,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("th",{scope:"col"},"NO"),(0,n.createElementVNode)("th",{scope:"col"},"NAMA"),(0,n.createElementVNode)("th",{scope:"col"},"JUMLAH STOK"),(0,n.createElementVNode)("th",{scope:"col"},"MINIMAL STOK"),(0,n.createElementVNode)("th",{scope:"col"},"HARGA"),(0,n.createElementVNode)("th",{scope:"col"},"NAMA SUPPLIER"),(0,n.createElementVNode)("th",{scope:"col"},"AKSI")])],-1),S={key:0},B=(0,n.createTextVNode)("UBAH"),w=(0,n.createTextVNode)("HAPUS"),T={key:1,class:"text-center"},C=[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("td",{colspan:"7"},"Data Tidak Ditemukan")],-1)],M={class:"card border-0 rounded shadow mb-3"},_={class:"card-body"},H=(0,n.createElementVNode)("div",{class:"gap-3 d-flex row mb-3"},[(0,n.createElementVNode)("div",{class:"col me-auto"},[(0,n.createElementVNode)("h4",null,"Detail Barang Tidak Restok")])],-1),I={class:"table-responsive"},U={class:"table table-striped table-hover table-bordered"},L=(0,n.createElementVNode)("thead",null,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("th",{scope:"col"},"NO"),(0,n.createElementVNode)("th",{scope:"col"},"NAMA"),(0,n.createElementVNode)("th",{scope:"col"},"JUMLAH STOK"),(0,n.createElementVNode)("th",{scope:"col"},"MINIMAL STOK"),(0,n.createElementVNode)("th",{scope:"col"},"HARGA"),(0,n.createElementVNode)("th",{scope:"col"},"NAMA SUPPLIER"),(0,n.createElementVNode)("th",{scope:"col"},"AKSI")])],-1),K={key:0},O=(0,n.createTextVNode)("UBAH"),P=(0,n.createTextVNode)("HAPUS"),R={key:1,class:"text-center"},F=[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("td",{colspan:"7"},"Data Tidak Ditemukan")],-1)];var j=a(9680);const G={props:{barang:Object},setup:function(){return{deleteData:function(e){j.Inertia.delete(e,{onBefore:function(){return confirm("Apakah Anda yakin ingin menghapus data detail ini?")}})}}}};const J=(0,a(3744).Z)(G,[["render",function(e,t,a,j,G,J){var Z=(0,n.resolveComponent)("inertia-head"),q=(0,n.resolveComponent)("inertia-link");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(Z,{title:"Detail Barang | ".concat(a.barang.nama)},null,8,["title"]),(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",r,[(0,n.createElementVNode)("div",o,[c,(0,n.createElementVNode)("span",d,(0,n.toDisplayString)(a.barang.nama),1)]),(0,n.createElementVNode)("div",i,[s,(0,n.createElementVNode)("span",m,(0,n.toDisplayString)(a.barang.kategori),1)]),(0,n.createElementVNode)("div",u,[N,(0,n.createElementVNode)("span",p,(0,n.toDisplayString)(a.barang.satuan),1)])]),(0,n.createElementVNode)("div",b,[(0,n.createVNode)(q,{href:"/master/barang/"+a.barang.id+"/edit",class:"btn btn-primary text-wrap col mb-2"},{default:(0,n.withCtx)((function(){return[V]})),_:1},8,["href"]),(0,n.createVNode)(q,{onClick:t[0]||(t[0]=(0,n.withModifiers)((function(e){return j.deleteData("/master/barang/"+a.barang.id)}),["prevent"])),class:"btn btn-danger text-wrap col mb-2"},{default:(0,n.withCtx)((function(){return[E]})),_:1})])]),(0,n.createElementVNode)("div",g,[(0,n.createElementVNode)("div",h,[(0,n.createElementVNode)("div",f,[k,(0,n.createElementVNode)("div",y,[(0,n.createVNode)(q,{href:"/master/barang/"+a.barang.id+"/detail/create",class:"btn btn-primary text-wrap col"},{default:(0,n.withCtx)((function(){return[A]})),_:1},8,["href"])])]),(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("table",D,[x,a.barang.detail_barang.length>0?((0,n.openBlock)(),(0,n.createElementBlock)("tbody",S,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(a.barang.detail_barang.filter((function(e){return 1===e.restok})),(function(t,l){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:t.id},[(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(l+1),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(t.nama),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(t.stok),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(t.stok_min),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(e.getRupiah(t.harga)),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(t.supplier),1),(0,n.createElementVNode)("td",null,[(0,n.createVNode)(q,{href:"/master/barang/"+a.barang.id+"/detail/"+t.id+"/edit",class:"btn btn-sm btn-primary me-2"},{default:(0,n.withCtx)((function(){return[B]})),_:2},1032,["href"]),(0,n.createVNode)(q,{onClick:(0,n.withModifiers)((function(e){return j.deleteData("/master/barang/"+a.barang.id+"/detail/"+t.id)}),["prevent"]),class:"btn btn-sm btn-danger"},{default:(0,n.withCtx)((function(){return[w]})),_:2},1032,["onClick"])])])})),128))])):((0,n.openBlock)(),(0,n.createElementBlock)("tbody",T,C))])])])]),(0,n.createElementVNode)("div",M,[(0,n.createElementVNode)("div",_,[H,(0,n.createElementVNode)("div",I,[(0,n.createElementVNode)("table",U,[L,a.barang.detail_barang.length>0?((0,n.openBlock)(),(0,n.createElementBlock)("tbody",K,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(a.barang.detail_barang.filter((function(e){return 1!==e.restok})),(function(t,l){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:t.id},[(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(l+1),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(t.nama),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(t.stok),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(t.stok_min),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(e.getRupiah(t.harga)),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(t.supplier),1),(0,n.createElementVNode)("td",null,[(0,n.createVNode)(q,{href:"/master/barang/"+a.barang.id+"/detail/"+t.id+"/edit",class:"btn btn-sm btn-primary me-2"},{default:(0,n.withCtx)((function(){return[O]})),_:2},1032,["href"]),(0,n.createVNode)(q,{onClick:(0,n.withModifiers)((function(e){return j.deleteData("/master/barang/"+a.barang.id+"/detail/"+t.id)}),["prevent"]),class:"btn btn-sm btn-danger"},{default:(0,n.withCtx)((function(){return[P]})),_:2},1032,["onClick"])])])})),128))])):((0,n.openBlock)(),(0,n.createElementBlock)("tbody",R,F))])])])])],64)}]])}}]);