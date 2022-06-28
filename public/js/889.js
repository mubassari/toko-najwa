"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[889],{8645:(e,t,a)=>{a.d(t,{Z:()=>V});var n=a(6598);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i={class:"card-subtitle mb-3"},c={class:"btn-group"},d=[(0,n.createElementVNode)("i",{class:"fas fa-file-pdf me-2"},null,-1),(0,n.createTextVNode)(" Cetak PDF ")],s=(0,n.createElementVNode)("i",{class:"fas fa-paper-plane me-2"},null,-1),u=(0,n.createTextVNode)(" Kirim PDF ke Telegram ");var m=a(4865),p=a.n(m);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const h={props:{title:String,url:String,data:Object},setup:function(e){return{printPDF:function(){p().start(),axios.post(e.url,g(g({},e.data),{},{title:e.title,telegram:!1}),{responseType:"blob"}).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=a,n.setAttribute("download",e.title+".pdf"),document.body.appendChild(n),n.click(),n.remove()})).catch((function(e){console.log(e)})).finally((function(){p().done()}))}}}};const V=(0,a(3744).Z)(h,[["render",function(e,t,a,l,o,m){var p=(0,n.resolveComponent)("inertia-link");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("h5",i,(0,n.toDisplayString)(a.title),1),(0,n.renderSlot)(e.$slots,"default"),(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("button",{class:"btn btn-success",onClick:t[0]||(t[0]=function(e){return l.printPDF()})},d),e.$attrs.auth.user.can.send_to_telegram?((0,n.openBlock)(),(0,n.createBlock)(p,{key:0,class:"btn btn-primary",href:a.url,data:r(r({},a.data),{},{title:a.title,telegram:!0}),method:"post",as:"button",type:"button","preserve-scroll":""},{default:(0,n.withCtx)((function(){return[s,u]})),_:1},8,["href","data"])):(0,n.createCommentVNode)("",!0)])],64)}]])},3889:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var n=a(6598),l={class:"card mb-4 shadow user-select-none"},r=(0,n.createElementVNode)("div",null,null,-1),o=(0,n.createElementVNode)("h5",{class:"card-title text-center"}," Cetak Laporan Penjualan Barang ",-1),i={class:"flex-end fa-solid fa-angle-down",ref:"icon",style:{transition:"transform 0.5s ease-out"}},c={key:0,class:"card-body"},d={class:"row mb-3"},s=(0,n.createElementVNode)("span",{class:"col-sm-3 col-12 col-form-label"}," Pilih Hari ",-1),u={class:"col-sm col-12"},m=(0,n.createElementVNode)("hr",null,null,-1),p={class:"row mb-3"},b=(0,n.createElementVNode)("span",{class:"col-sm-3 col-12 col-form-label"}," Pilih Periode ",-1),g={class:"col-sm col-12"},f=(0,n.createElementVNode)("hr",null,null,-1),h={class:"row mb-3"},V=(0,n.createElementVNode)("span",{class:"col-sm-3 col-12 col-form-label"}," Pilih Periode ",-1),y={class:"col-sm col-12"},w={class:"row mb-3"},O=(0,n.createElementVNode)("span",{class:"col-sm-3 col-12 col-form-label"}," Pilih Barang ",-1),P={class:"col-sm col-12"},N=(0,n.createTextVNode)("Data Tidak Ditemukan."),j=(0,n.createTextVNode)("Data Tidak Ada."),v={class:"row mb-3"},B=(0,n.createElementVNode)("span",{class:"col-sm-3 col-12 col-form-label"}," Pilih Detail Barang ",-1),D={class:"col-sm col-12"},k=(0,n.createTextVNode)("Data Tidak Ditemukan."),E=(0,n.createTextVNode)("Data Tidak Ada.");var C=a(2444),T=a(8645),x=a(8591);const L={components:{FormReport:T.Z,VSelect:C.ZP,Datepicker:x.Z},props:{harian:Object,bulanan:Object,barang:Object,detailBarang:Object,hide:Boolean},emits:["getBarang","getDetailBarang","hideToggle"]};const M=(0,a(3744).Z)(L,[["render",function(e,t,a,C,T,x){var L=(0,n.resolveComponent)("datepicker"),M=(0,n.resolveComponent)("form-report"),S=(0,n.resolveComponent)("v-select");return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("div",{role:"button",class:(0,n.normalizeClass)(["card-header d-flex align-items-center justify-content-between",{"border-bottom-0":a.hide}]),onClick:t[0]||(t[0]=function(t){e.$emit("hideToggle","penjualan"),e.$refs.icon.style.transform=a.hide?"rotate(180deg)":"rotate(0deg)"})},[r,o,(0,n.createElementVNode)("i",i,null,512)],2),(0,n.createVNode)(n.Transition,{name:"fade",mode:"out-in"},{default:(0,n.withCtx)((function(){return[a.hide?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createElementBlock)("div",c,[(0,n.createVNode)(M,(0,n.mergeProps)(e.$attrs,{title:"Laporan Riwayat Penjualan Harian",url:"/laporan/penjualan",data:{filter:{Filter:"Per "+e.getDateFull(a.harian.time)},type:"harian",day:new Date(a.harian.time).toLocaleString("id-ID",{day:"2-digit"})}}),{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",d,[s,(0,n.createElementVNode)("div",u,[(0,n.createVNode)(L,{modelValue:a.harian.time,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.harian.time=e}),startingView:"day",minimumView:"day",upperLimit:new Date,inputFormat:"dd MMMM yyyy",locale:a.harian.locale,placeholder:"Pilih Tanggal",class:"input-date"},null,8,["modelValue","upperLimit","locale"])])])]})),_:1},16,["data"]),m,(0,n.createVNode)(M,(0,n.mergeProps)(e.$attrs,{title:"Laporan Riwayat Penjualan Bulanan",url:"/laporan/penjualan",data:{filter:{Filter:"Periode "+e.getMonthYear(a.bulanan.time)},type:null,month:new Date(a.bulanan.time).toLocaleString("id-ID",{month:"2-digit"})}}),{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",p,[b,(0,n.createElementVNode)("div",g,[(0,n.createVNode)(L,{modelValue:a.bulanan.time,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.bulanan.time=e}),startingView:"month",minimumView:"month",upperLimit:new Date,inputFormat:"MMMM yyyy",locale:a.bulanan.locale,placeholder:"Pilih Tanggal",class:"input-date"},null,8,["modelValue","upperLimit","locale"])])])]})),_:1},16,["data"]),f,(0,n.createVNode)(M,(0,n.mergeProps)(e.$attrs,{title:"Laporan Riwayat Penjualan Per Barang",url:"/laporan/penjualan",data:{filter:{Periode:e.getMonthYear(a.bulanan.time),"Kode Barang":a.detailBarang.selected?a.detailBarang.selected.id:null,"Nama Barang":a.barang.selected?a.barang.selected.nama:null,"Kategori Barang":a.barang.selected?a.barang.selected.kategori:null,"Detail Barang":a.detailBarang.selected?a.detailBarang.selected.nama:null},type:"barang",barang:a.detailBarang.selected?a.detailBarang.selected.id:null,month:new Date(a.bulanan.time).toLocaleString("id-ID",{month:"2-digit"})}}),{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",h,[V,(0,n.createElementVNode)("div",y,[(0,n.createVNode)(L,{modelValue:a.bulanan.time,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.bulanan.time=e}),startingView:"month",minimumView:"month",upperLimit:new Date,inputFormat:"MMMM yyyy",locale:a.bulanan.locale,placeholder:"Pilih Tanggal",class:"input-date"},null,8,["modelValue","upperLimit","locale"])])]),(0,n.createElementVNode)("div",w,[O,(0,n.createElementVNode)("div",P,[(0,n.createVNode)(S,{options:a.barang.options,searchable:!0,loading:a.barang.loading,"allow-empty":!1,"internal-search":!1,"custom-label":function(e){return e.kode+" — "+e.nama},modelValue:a.barang.selected,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.barang.selected=e}),placeholder:"Pilih Barang",class:"form-group",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:t[5]||(t[5]=function(t){return e.$emit("getBarang",t)}),onClose:t[6]||(t[6]=function(e){return a.barang.options=[]}),onOpen:t[7]||(t[7]=function(t){a.detailBarang.selected=null,e.$emit("getBarang","")})},{noResult:(0,n.withCtx)((function(){return[N]})),noOptions:(0,n.withCtx)((function(){return[j]})),_:1},8,["options","loading","custom-label","modelValue"])])]),(0,n.createElementVNode)("div",v,[B,(0,n.createElementVNode)("div",D,[(0,n.createVNode)(S,{options:a.detailBarang.options,searchable:!0,loading:a.detailBarang.loading,"allow-empty":!1,"internal-search":!1,disabled:null===a.barang.selected||a.barang.selected.jumlah_jenis<1,modelValue:a.detailBarang.selected,"onUpdate:modelValue":t[8]||(t[8]=function(e){return a.detailBarang.selected=e}),placeholder:"Pilih Detail Barang",class:"form-group",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:t[9]||(t[9]=function(t){return e.$emit("getDetailBarang",t)}),onClose:t[10]||(t[10]=function(e){return a.detailBarang.options=[]}),onOpen:t[11]||(t[11]=function(t){return e.$emit("getDetailBarang","")})},{noResult:(0,n.withCtx)((function(){return[k]})),noOptions:(0,n.withCtx)((function(){return[E]})),_:1},8,["options","loading","disabled","modelValue"])])])]})),_:1},16,["data"])]))]})),_:1})])}]])}}]);