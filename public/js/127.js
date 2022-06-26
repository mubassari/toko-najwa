"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[127],{4388:(e,a,n)=>{n.d(a,{Z:()=>O});var t=n(8222),r={class:"mb-3"},o=(0,t.createElementVNode)("label",{class:"form-label"},"Nama Barang",-1),l=["disabled"],i={key:0,class:"invalid-feedback"},c={class:"mb-3"},s=(0,t.createElementVNode)("label",{class:"form-label"},"Kategori",-1),d=(0,t.createTextVNode)("Data Tidak Ditemukan."),u=(0,t.createTextVNode)("Data Tidak Ada."),b={key:0,class:"invalid-feedback"},g={class:"mb-3"},m=(0,t.createElementVNode)("label",{class:"form-label"},"Satuan",-1),p=(0,t.createTextVNode)("Data Tidak Ditemukan."),f=(0,t.createTextVNode)("Data Tidak Ada."),h={key:0,class:"invalid-feedback"},k={class:"mb-3"},v=["disabled"];var V=n(2444),N=n(6486);function y(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function E(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?y(Object(n),!0).forEach((function(a){C(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function C(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}const w={components:{VSelect:V.ZP},props:{barang:Object},remember:"barang",setup:function(){var e={options:[],loading:!1},a=(0,t.reactive)(E({},e)),n=(0,N.debounce)((function(e){a.loading=!0,axios.post("/api/satuan",{value:e}).then((function(e){a.options=e.data})).catch((function(e){console.log("error",e)})).finally((function(){a.loading=!1}))}),500),r=(0,t.reactive)(E({},e)),o=(0,N.debounce)((function(e){r.loading=!0,axios.post("/api/kategori",{value:e}).then((function(e){r.options=e.data})).catch((function(e){console.log("error",e)})).finally((function(){r.loading=!1}))}),500);return{satuan:a,getDataSatuan:n,kategori:r,getDataKategori:o}}};const O=(0,n(3744).Z)(w,[["render",function(e,a,n,V,N,y){var E=(0,t.resolveComponent)("v-select");return(0,t.openBlock)(),(0,t.createElementBlock)("form",{onSubmit:a[9]||(a[9]=(0,t.withModifiers)((function(a){return e.$emit("submit")}),["prevent"]))},[(0,t.createElementVNode)("div",r,[o,(0,t.withDirectives)((0,t.createElementVNode)("input",{type:"text",class:(0,t.normalizeClass)(["form-control",{"is-invalid":n.barang.errors.nama}]),disabled:n.barang.processing,"onUpdate:modelValue":a[0]||(a[0]=function(e){return n.barang.nama=e}),onInput:a[1]||(a[1]=function(e){return n.barang.clearErrors("nama")}),placeholder:"Masukkan Nama Barang"},null,42,l),[[t.vModelText,n.barang.nama]]),(0,t.createVNode)(t.Transition,{name:"fade"},{default:(0,t.withCtx)((function(){return[n.barang.errors.nama?((0,t.openBlock)(),(0,t.createElementBlock)("div",i,(0,t.toDisplayString)(n.barang.errors.nama),1)):(0,t.createCommentVNode)("",!0)]})),_:1})]),(0,t.createElementVNode)("div",c,[s,(0,t.createVNode)(E,{options:V.kategori.options,searchable:!0,loading:V.kategori.loading,class:(0,t.normalizeClass)([{"is-invalid":n.barang.errors["kategori.id"]},"form-group"]),"allow-empty":!1,"internal-search":!1,disabled:n.barang.processing,modelValue:n.barang.kategori,"onUpdate:modelValue":a[2]||(a[2]=function(e){return n.barang.kategori=e}),placeholder:"Pilih kategori",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:V.getDataKategori,onClose:a[3]||(a[3]=function(e){return V.kategori.options=[]}),onOpen:a[4]||(a[4]=function(e){n.barang.clearErrors("kategori.id"),V.getDataKategori("")})},{noResult:(0,t.withCtx)((function(){return[d]})),noOptions:(0,t.withCtx)((function(){return[u]})),_:1},8,["options","loading","class","disabled","modelValue","onSearchChange"]),(0,t.createVNode)(t.Transition,{name:"fade"},{default:(0,t.withCtx)((function(){return[n.barang.errors["kategori.id"]?((0,t.openBlock)(),(0,t.createElementBlock)("div",b,(0,t.toDisplayString)(n.barang.errors["kategori.id"]),1)):(0,t.createCommentVNode)("",!0)]})),_:1})]),(0,t.createElementVNode)("div",g,[m,(0,t.createVNode)(E,{options:V.satuan.options,searchable:!0,loading:V.satuan.loading,class:(0,t.normalizeClass)([{"is-invalid":n.barang.errors["satuan.id"]},"form-group"]),"allow-empty":!1,"internal-search":!1,disabled:n.barang.processing,modelValue:n.barang.satuan,"onUpdate:modelValue":a[5]||(a[5]=function(e){return n.barang.satuan=e}),placeholder:"Pilih satuan",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:V.getDataSatuan,onClose:a[6]||(a[6]=function(e){return V.satuan.options=[]}),onOpen:a[7]||(a[7]=function(e){n.barang.clearErrors("satuan.id"),V.getDataSatuan("")})},{noResult:(0,t.withCtx)((function(){return[p]})),noOptions:(0,t.withCtx)((function(){return[f]})),_:1},8,["options","loading","class","disabled","modelValue","onSearchChange"]),(0,t.createVNode)(t.Transition,{name:"fade"},{default:(0,t.withCtx)((function(){return[n.barang.errors["satuan.id"]?((0,t.openBlock)(),(0,t.createElementBlock)("div",h,(0,t.toDisplayString)(n.barang.errors["satuan.id"]),1)):(0,t.createCommentVNode)("",!0)]})),_:1})]),(0,t.createElementVNode)("div",k,[(0,t.createElementVNode)("button",{type:"submit",disabled:n.barang.processing||0==n.barang.kategori.length||0==n.barang.satuan.length,class:"btn btn-primary btn-md shadow-sm me-2"}," SIMPAN ",8,v),(0,t.createElementVNode)("span",{class:(0,t.normalizeClass)([{disabled:n.barang.processing||0==n.barang.kategori.length||0==n.barang.satuan.length},"btn btn-warning btn-md shadow-sm"]),onClick:a[8]||(a[8]=function(e){return n.barang.reset()})}," RESET ",2)])],32)}]])},5127:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});var t=n(8222),r={class:"card border-0 rounded shadow"},o={class:"card-body"},l=(0,t.createElementVNode)("h4",null,"UBAH DATA BARANG",-1),i=(0,t.createElementVNode)("hr",null,null,-1);var c=n(9038);const s={components:{FormBarang:n(4388).Z},props:{barang:Object},setup:function(e){var a=e.barang.id;return{barang:(0,c.cI)({nama:e.barang.nama,kategori:e.barang.kategori,satuan:e.barang.satuan}),id:a}}};const d=(0,n(3744).Z)(s,[["render",function(e,a,n,c,s,d){var u=(0,t.resolveComponent)("inertia-head"),b=(0,t.resolveComponent)("form-barang");return(0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,null,[(0,t.createVNode)(u,{title:"Ubah Data Barang | ".concat(c.barang.nama)},null,8,["title"]),(0,t.createElementVNode)("div",null,[(0,t.createElementVNode)("div",r,[(0,t.createElementVNode)("div",o,[l,i,(0,t.createVNode)(b,{barang:c.barang,onSubmit:a[0]||(a[0]=function(e){return c.barang.put("/master/barang/"+c.id)})},null,8,["barang"])])])])],64)}]])}}]);