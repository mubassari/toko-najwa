"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[576],{7072:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(6598),l={class:"card mb-4 shadow user-select-none"},r=(0,n.createElementVNode)("div",null,null,-1),o={class:"card-title text-center"},i={key:0,class:"card-body"};const c={props:{title:String},data:function(){return{hide:!1}}};const d=(0,a(3744).Z)(c,[["render",function(e,t,a,c,d,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("div",{role:"button",class:(0,n.normalizeClass)(["card-header d-flex align-items-center justify-content-between",{"border-bottom-0":d.hide}]),onClick:t[0]||(t[0]=function(e){return d.hide=!d.hide})},[r,(0,n.createElementVNode)("h5",o,(0,n.toDisplayString)(a.title),1),(0,n.createElementVNode)("i",{class:"flex-end fa-solid fa-angle-up",style:(0,n.normalizeStyle)([{transition:"transform 0.5s ease-out"},d.hide?"transform: rotateZ(0deg)":"transform: rotateZ(180deg)"])},null,4)],2),(0,n.createVNode)(n.Transition,{name:"fade",mode:"out-in"},{default:(0,n.withCtx)((function(){return[d.hide?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createElementBlock)("div",i,[(0,n.renderSlot)(e.$slots,"default")]))]})),_:3})])}]])},8277:(e,t,a)=>{a.d(t,{Z:()=>V});var n=a(6598);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i={class:"card-subtitle mb-3"},c={class:"btn-group"},d=[(0,n.createElementVNode)("i",{class:"fas fa-file-pdf me-2"},null,-1),(0,n.createTextVNode)(" Cetak PDF ")],s=(0,n.createElementVNode)("i",{class:"fas fa-paper-plane me-2"},null,-1),u=(0,n.createTextVNode)(" Kirim PDF ke Telegram ");var m=a(4865),p=a.n(m);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const h={props:{title:String,url:String,data:Object},setup:function(e){return{printPDF:function(){p().start(),axios.post(e.url,b(b({},e.data),{},{title:e.title,telegram:!1}),{responseType:"blob"}).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=a,n.setAttribute("download",e.title+".pdf"),document.body.appendChild(n),n.click(),n.remove()})).catch((function(e){console.log(e)})).finally((function(){p().done()}))}}}};const V=(0,a(3744).Z)(h,[["render",function(e,t,a,l,o,m){var p=(0,n.resolveComponent)("inertia-link");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("h5",i,(0,n.toDisplayString)(a.title),1),(0,n.renderSlot)(e.$slots,"default"),(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("button",{class:"btn btn-success",onClick:t[0]||(t[0]=function(e){return l.printPDF()})},d),e.$attrs.auth.user.can.send_to_telegram?((0,n.openBlock)(),(0,n.createBlock)(p,{key:0,class:"btn btn-primary",href:a.url,data:r(r({},a.data),{},{title:a.title,telegram:!0}),method:"post",as:"button",type:"button","preserve-scroll":""},{default:(0,n.withCtx)((function(){return[s,u]})),_:1},8,["href","data"])):(0,n.createCommentVNode)("",!0)])],64)}]])},5576:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(6598),l={class:"row mb-3"},r=(0,n.createElementVNode)("span",{class:"col-sm-3 col-12 col-form-label"}," Pilih Hari ",-1),o={class:"col-sm col-12"},i=(0,n.createElementVNode)("hr",null,null,-1),c={class:"row mb-3"},d=(0,n.createElementVNode)("span",{class:"col-sm-3 col-12 col-form-label"}," Pilih Periode ",-1),s={class:"col-sm col-12"},u=(0,n.createElementVNode)("hr",null,null,-1),m={class:"row mb-3"},p=(0,n.createElementVNode)("span",{class:"col-sm-3 col-12 col-form-label"}," Pilih Periode ",-1),g={class:"col-sm col-12"},b={class:"row mb-3"},f=(0,n.createElementVNode)("span",{class:"col-sm-3 col-12 col-form-label"}," Pilih Barang ",-1),h={class:"col-sm col-12"},V=(0,n.createTextVNode)("Data Tidak Ditemukan."),y=(0,n.createTextVNode)("Data Tidak Ada."),w={class:"row mb-3"},O=(0,n.createElementVNode)("span",{class:"col-sm-3 col-12 col-form-label"}," Pilih Detail Barang ",-1),P={class:"col-sm col-12"},N=(0,n.createTextVNode)("Data Tidak Ditemukan."),v=(0,n.createTextVNode)("Data Tidak Ada.");var B=a(2444),j=a(8277),k=a(8591),D=a(7072);const E={components:{FormReport:j.Z,VSelect:B.ZP,Datepicker:k.Z,AccordionCard:D.Z},props:{harian:Object,bulanan:Object,barang:Object,detailBarang:Object,hide:Boolean},emits:["getBarang","getDetailBarang","hideToggle"],data:function(){return{title:"Cetak Laporan Penjualan Barang"}}};const C=(0,a(3744).Z)(E,[["render",function(e,t,a,B,j,k){var D=(0,n.resolveComponent)("datepicker"),E=(0,n.resolveComponent)("form-report"),C=(0,n.resolveComponent)("v-select"),T=(0,n.resolveComponent)("accordion-card");return(0,n.openBlock)(),(0,n.createBlock)(T,{title:j.title},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(E,(0,n.mergeProps)(e.$attrs,{title:"Laporan Riwayat Penjualan Harian",url:"/laporan/penjualan",data:{filter:{Filter:"Per "+e.getDateFull(a.harian.time)},type:"harian",day:new Date(a.harian.time).toLocaleString("id-ID",{day:"2-digit"})}}),{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",l,[r,(0,n.createElementVNode)("div",o,[(0,n.createVNode)(D,{modelValue:a.harian.time,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.harian.time=e}),startingView:"day",minimumView:"day",upperLimit:new Date,inputFormat:"dd MMMM yyyy",locale:a.harian.locale,placeholder:"Pilih Tanggal",class:"input-date"},null,8,["modelValue","upperLimit","locale"])])])]})),_:1},16,["data"]),i,(0,n.createVNode)(E,(0,n.mergeProps)(e.$attrs,{title:"Laporan Riwayat Penjualan Bulanan",url:"/laporan/penjualan",data:{filter:{Filter:"Periode "+e.getMonthYear(a.bulanan.time)},type:null,month:new Date(a.bulanan.time).toLocaleString("id-ID",{month:"2-digit"})}}),{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",c,[d,(0,n.createElementVNode)("div",s,[(0,n.createVNode)(D,{modelValue:a.bulanan.time,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.bulanan.time=e}),startingView:"month",minimumView:"month",upperLimit:new Date,inputFormat:"MMMM yyyy",locale:a.bulanan.locale,placeholder:"Pilih Tanggal",class:"input-date"},null,8,["modelValue","upperLimit","locale"])])])]})),_:1},16,["data"]),u,(0,n.createVNode)(E,(0,n.mergeProps)(e.$attrs,{title:"Laporan Riwayat Penjualan Per Barang",url:"/laporan/penjualan",data:{filter:{Periode:e.getMonthYear(a.bulanan.time),"Kode Barang":a.detailBarang.selected?a.detailBarang.selected.id:null,"Nama Barang":a.barang.selected?a.barang.selected.nama:null,"Kategori Barang":a.barang.selected?a.barang.selected.kategori:null,"Detail Barang":a.detailBarang.selected?a.detailBarang.selected.nama:null},type:"barang",barang:a.detailBarang.selected?a.detailBarang.selected.id:null,month:new Date(a.bulanan.time).toLocaleString("id-ID",{month:"2-digit"})}}),{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",m,[p,(0,n.createElementVNode)("div",g,[(0,n.createVNode)(D,{modelValue:a.bulanan.time,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.bulanan.time=e}),startingView:"month",minimumView:"month",upperLimit:new Date,inputFormat:"MMMM yyyy",locale:a.bulanan.locale,placeholder:"Pilih Tanggal",class:"input-date"},null,8,["modelValue","upperLimit","locale"])])]),(0,n.createElementVNode)("div",b,[f,(0,n.createElementVNode)("div",h,[(0,n.createVNode)(C,{options:a.barang.options,searchable:!0,loading:a.barang.loading,"allow-empty":!1,"internal-search":!1,"custom-label":function(e){return e.kode+" — "+e.nama},modelValue:a.barang.selected,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.barang.selected=e}),placeholder:"Pilih Barang",class:"form-group",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:t[4]||(t[4]=function(t){return e.$emit("getBarang",t)}),onClose:t[5]||(t[5]=function(e){return a.barang.options=[]}),onOpen:t[6]||(t[6]=function(t){a.detailBarang.selected=null,e.$emit("getBarang","")})},{noResult:(0,n.withCtx)((function(){return[V]})),noOptions:(0,n.withCtx)((function(){return[y]})),_:1},8,["options","loading","custom-label","modelValue"])])]),(0,n.createElementVNode)("div",w,[O,(0,n.createElementVNode)("div",P,[(0,n.createVNode)(C,{options:a.detailBarang.options,searchable:!0,loading:a.detailBarang.loading,"allow-empty":!1,"internal-search":!1,disabled:null===a.barang.selected||a.barang.selected.length<1||a.barang.selected.jumlah_jenis<1,modelValue:a.detailBarang.selected,"onUpdate:modelValue":t[7]||(t[7]=function(e){return a.detailBarang.selected=e}),placeholder:"Pilih Detail Barang",class:"form-group",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:t[8]||(t[8]=function(t){return e.$emit("getDetailBarang",t)}),onClose:t[9]||(t[9]=function(e){return a.detailBarang.options=[]}),onOpen:t[10]||(t[10]=function(t){return e.$emit("getDetailBarang","")})},{noResult:(0,n.withCtx)((function(){return[N]})),noOptions:(0,n.withCtx)((function(){return[v]})),_:1},8,["options","loading","disabled","modelValue"])])])]})),_:1},16,["data"])]})),_:1},8,["title"])}]])}}]);