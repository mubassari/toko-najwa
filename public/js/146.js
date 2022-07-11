"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[146],{422:(e,a,n)=>{n.d(a,{Z:()=>B});var r=n(6598),t={class:"mb-3"},o=(0,r.createElementVNode)("label",{class:"form-label"},"Kode Barang",-1),l=["disabled"],i={key:0,class:"invalid-feedback"},c={class:"mb-3"},s=(0,r.createElementVNode)("label",{class:"form-label"},"Nama Barang",-1),d=["disabled"],u={key:0,class:"invalid-feedback"},b={class:"mb-3"},g=(0,r.createElementVNode)("label",{class:"form-label"},"Kategori",-1),m=(0,r.createTextVNode)("Data Tidak Ditemukan."),p=(0,r.createTextVNode)("Data Tidak Ada."),f={key:0,class:"invalid-feedback"},k={class:"mb-3"},h=(0,r.createElementVNode)("label",{class:"form-label"},"Satuan",-1),v=(0,r.createTextVNode)("Data Tidak Ditemukan."),V=(0,r.createTextVNode)("Data Tidak Ada."),N={key:0,class:"invalid-feedback"},E={class:"mb-3"},y=["disabled"];function C(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?C(Object(n),!0).forEach((function(a){D(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function D(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}const O={components:{VSelect:n(2444).ZP},props:{barang:Object},remember:"barang",setup:function(e){(0,r.watch)(e.barang,(function(){e.barang.kode=e.barang.kode.toUpperCase().replaceAll(/[^A-Z]/g,"")}),{deep:!0});var a=_.debounce((function(e,a,n){e.loading=!0,axios.post(a,n).then((function(a){return e.options=a.data})).catch((function(e){return console.error("error: ",e)})).finally((function(){return e.loading=!1}))}),500),n={options:[],loading:!1},t=(0,r.reactive)(w({},n)),o=(0,r.reactive)(w({},n));return{satuan:t,getDataSatuan:function(e){return a(t,"/api/satuan",{value:e})},kategori:o,getDataKategori:function(e){return a(o,"/api/kategori",{value:e})}}}};const B=(0,n(3744).Z)(O,[["render",function(e,a,n,C,w,D){var O=(0,r.resolveComponent)("v-select");return(0,r.openBlock)(),(0,r.createElementBlock)("form",{onSubmit:a[11]||(a[11]=(0,r.withModifiers)((function(a){return e.$emit("submit")}),["prevent"]))},[(0,r.createElementVNode)("div",t,[o,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"text",class:(0,r.normalizeClass)(["form-control",{"is-invalid":n.barang.errors.kode}]),maxlength:"3",disabled:n.barang.processing,"onUpdate:modelValue":a[0]||(a[0]=function(e){return n.barang.kode=e}),onInput:a[1]||(a[1]=function(e){return n.barang.clearErrors("kode")}),placeholder:"Masukkan Kode Barang"},null,42,l),[[r.vModelText,n.barang.kode]]),(0,r.createVNode)(r.Transition,{name:"fade"},{default:(0,r.withCtx)((function(){return[n.barang.errors.kode?((0,r.openBlock)(),(0,r.createElementBlock)("div",i,(0,r.toDisplayString)(n.barang.errors.kode),1)):(0,r.createCommentVNode)("",!0)]})),_:1})]),(0,r.createElementVNode)("div",c,[s,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"text",class:(0,r.normalizeClass)(["form-control",{"is-invalid":n.barang.errors.nama}]),disabled:n.barang.processing,"onUpdate:modelValue":a[2]||(a[2]=function(e){return n.barang.nama=e}),onInput:a[3]||(a[3]=function(e){return n.barang.clearErrors("nama")}),placeholder:"Masukkan Nama Barang"},null,42,d),[[r.vModelText,n.barang.nama]]),(0,r.createVNode)(r.Transition,{name:"fade"},{default:(0,r.withCtx)((function(){return[n.barang.errors.nama?((0,r.openBlock)(),(0,r.createElementBlock)("div",u,(0,r.toDisplayString)(n.barang.errors.nama),1)):(0,r.createCommentVNode)("",!0)]})),_:1})]),(0,r.createElementVNode)("div",b,[g,(0,r.createVNode)(O,{options:C.kategori.options,searchable:!0,loading:C.kategori.loading,class:(0,r.normalizeClass)([{"is-invalid":n.barang.errors["kategori.id"]},"form-group"]),"allow-empty":!1,"internal-search":!1,disabled:n.barang.processing,"custom-label":function(e){return e.kode+" — "+e.nama},modelValue:n.barang.kategori,"onUpdate:modelValue":a[4]||(a[4]=function(e){return n.barang.kategori=e}),placeholder:"Pilih kategori",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:C.getDataKategori,onClose:a[5]||(a[5]=function(e){return C.kategori.options=[]}),onOpen:a[6]||(a[6]=function(e){n.barang.clearErrors("kategori.id"),C.getDataKategori("")})},{noResult:(0,r.withCtx)((function(){return[m]})),noOptions:(0,r.withCtx)((function(){return[p]})),_:1},8,["options","loading","class","disabled","custom-label","modelValue","onSearchChange"]),(0,r.createVNode)(r.Transition,{name:"fade"},{default:(0,r.withCtx)((function(){return[n.barang.errors["kategori.id"]?((0,r.openBlock)(),(0,r.createElementBlock)("div",f,(0,r.toDisplayString)(n.barang.errors["kategori.id"]),1)):(0,r.createCommentVNode)("",!0)]})),_:1})]),(0,r.createElementVNode)("div",k,[h,(0,r.createVNode)(O,{options:C.satuan.options,searchable:!0,loading:C.satuan.loading,class:(0,r.normalizeClass)([{"is-invalid":n.barang.errors["satuan.id"]},"form-group"]),"allow-empty":!1,"internal-search":!1,disabled:n.barang.processing,modelValue:n.barang.satuan,"onUpdate:modelValue":a[7]||(a[7]=function(e){return n.barang.satuan=e}),placeholder:"Pilih satuan",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:C.getDataSatuan,onClose:a[8]||(a[8]=function(e){return C.satuan.options=[]}),onOpen:a[9]||(a[9]=function(e){n.barang.clearErrors("satuan.id"),C.getDataSatuan("")})},{noResult:(0,r.withCtx)((function(){return[v]})),noOptions:(0,r.withCtx)((function(){return[V]})),_:1},8,["options","loading","class","disabled","modelValue","onSearchChange"]),(0,r.createVNode)(r.Transition,{name:"fade"},{default:(0,r.withCtx)((function(){return[n.barang.errors["satuan.id"]?((0,r.openBlock)(),(0,r.createElementBlock)("div",N,(0,r.toDisplayString)(n.barang.errors["satuan.id"]),1)):(0,r.createCommentVNode)("",!0)]})),_:1})]),(0,r.createElementVNode)("div",E,[(0,r.createElementVNode)("button",{type:"submit",disabled:n.barang.processing||0==n.barang.kategori.length||0==n.barang.satuan.length,class:"btn btn-primary btn-md shadow-sm me-2"}," SIMPAN ",8,y),(0,r.createElementVNode)("span",{class:(0,r.normalizeClass)([{disabled:n.barang.processing||0==n.barang.kategori.length||0==n.barang.satuan.length},"btn btn-warning btn-md shadow-sm"]),onClick:a[10]||(a[10]=function(e){return n.barang.reset()})}," RESET ",2)])],32)}]])},8146:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});var r=n(6598),t={class:"card border-0 rounded shadow"},o={class:"card-body"},l=(0,r.createElementVNode)("h4",null,"UBAH DATA BARANG",-1),i=(0,r.createElementVNode)("hr",null,null,-1);var c=n(9038);const s={components:{FormBarang:n(422).Z},props:{barang:Object},setup:function(e){var a=e.barang.id;return{barang:(0,c.cI)({kode:e.barang.kode,nama:e.barang.nama,kategori:e.barang.kategori,satuan:e.barang.satuan}),id:a}}};const d=(0,n(3744).Z)(s,[["render",function(e,a,n,c,s,d){var u=(0,r.resolveComponent)("inertia-head"),b=(0,r.resolveComponent)("form-barang");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(u,{title:"Ubah Data Barang | ".concat(c.barang.nama)},null,8,["title"]),(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("div",t,[(0,r.createElementVNode)("div",o,[l,i,(0,r.createVNode)(b,{barang:c.barang,onSubmit:a[0]||(a[0]=function(e){return c.barang.put("/master/barang/"+c.id)})},null,8,["barang"])])])])],64)}]])}}]);