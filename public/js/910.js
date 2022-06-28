"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[910],{8645:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(6598);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={class:"card-subtitle mb-3"},i={class:"btn-group"},s=[(0,n.createElementVNode)("i",{class:"fas fa-file-pdf me-2"},null,-1),(0,n.createTextVNode)(" Cetak PDF ")],u=(0,n.createElementVNode)("i",{class:"fas fa-paper-plane me-2"},null,-1),d=(0,n.createTextVNode)(" Kirim PDF ke Telegram ");var f=r(4865),p=r.n(f);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const k={props:{title:String,url:String,data:Object},setup:function(e){return{printPDF:function(){p().start(),axios.post(e.url,b(b({},e.data),{},{title:e.title,telegram:!1}),{responseType:"blob"}).then((function(t){var r=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=r,n.setAttribute("download",e.title+".pdf"),document.body.appendChild(n),n.click(),n.remove()})).catch((function(e){console.log(e)})).finally((function(){p().done()}))}}}};const h=(0,r(3744).Z)(k,[["render",function(e,t,r,a,l,f){var p=(0,n.resolveComponent)("inertia-link");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("h5",c,(0,n.toDisplayString)(r.title),1),(0,n.renderSlot)(e.$slots,"default"),(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("button",{class:"btn btn-success",onClick:t[0]||(t[0]=function(e){return a.printPDF()})},s),e.$attrs.auth.user.can.send_to_telegram?((0,n.openBlock)(),(0,n.createBlock)(p,{key:0,class:"btn btn-primary",href:r.url,data:o(o({},r.data),{},{title:r.title,telegram:!0}),method:"post",as:"button",type:"button","preserve-scroll":""},{default:(0,n.withCtx)((function(){return[u,d]})),_:1},8,["href","data"])):(0,n.createCommentVNode)("",!0)])],64)}]])},6910:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(6598),a={class:"card mb-4 shadow user-select-none"},o=(0,n.createElementVNode)("div",null,null,-1),l=(0,n.createElementVNode)("h5",{class:"card-title text-center"},"Cetak Laporan Barang",-1),c={class:"flex-end fa-solid fa-angle-down",ref:"icon",style:{transition:"transform 0.5s ease-out"}},i={key:0,class:"card-body"},s={class:"form-check"},u={class:"mb-3 form-check"},d=[(0,n.createElementVNode)("span",null," Per Kategori",-1)],f={class:"col-sm col-12 mt-2"},p=(0,n.createTextVNode)("Data Tidak Ditemukan."),m=(0,n.createTextVNode)("Data Tidak Ada."),b=(0,n.createElementVNode)("hr",null,null,-1),g=(0,n.createElementVNode)("hr",null,null,-1);var k=r(2444);const h={components:{FormReport:r(8645).Z,VSelect:k.ZP},props:{kategori:Object,hide:Boolean},emits:["getKategori","hideToggle"],data:function(){return{filter:!0}}};const y=(0,r(3744).Z)(h,[["render",function(e,t,r,k,h,y){var O=(0,n.resolveComponent)("v-select"),v=(0,n.resolveComponent)("form-report");return(0,n.openBlock)(),(0,n.createElementBlock)("div",a,[(0,n.createElementVNode)("div",{role:"button",class:(0,n.normalizeClass)(["card-header d-flex align-items-center justify-content-between",{"border-bottom-0":r.hide}]),onClick:t[0]||(t[0]=function(t){e.$emit("hideToggle","barang"),e.$refs.icon.style.transform=r.hide?"rotate(180deg)":"rotate(0deg)"})},[o,l,(0,n.createElementVNode)("i",c,null,512)],2),(0,n.createVNode)(n.Transition,{name:"fade",mode:"out-in"},{default:(0,n.withCtx)((function(){return[r.hide?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createElementBlock)("div",i,[(0,n.createVNode)(v,(0,n.mergeProps)(e.$attrs,{title:"Laporan Barang"+(h.filter?"":r.kategori.selected?" (Per Kategori)":""),url:"/laporan/barang",data:{filter:h.filter?"Semua":"Kategori "+(r.kategori.selected?r.kategori.selected.nama:null),type:null,kategori:h.filter?0:r.kategori.selected.id}}),{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",s,[(0,n.withDirectives)((0,n.createElementVNode)("input",{class:"form-check-input",type:"radio",name:"filter_barang",value:"true","onUpdate:modelValue":t[1]||(t[1]=function(e){return h.filter=e})},null,512),[[n.vModelRadio,h.filter]]),(0,n.createElementVNode)("label",{class:"form-check-label",onClick:t[2]||(t[2]=function(e){h.filter=!0,r.kategori.selected=[]})},"Semua")]),(0,n.createElementVNode)("div",u,[(0,n.withDirectives)((0,n.createElementVNode)("input",{class:"form-check-input",type:"radio",name:"filter_barang",value:"false","onUpdate:modelValue":t[3]||(t[3]=function(e){return h.filter=e})},null,512),[[n.vModelRadio,h.filter]]),(0,n.createElementVNode)("label",{class:"form-check-label",onClick:t[4]||(t[4]=function(e){return h.filter=!1})},d),(0,n.createElementVNode)("div",f,[(0,n.createVNode)(O,{options:r.kategori.options,searchable:!0,loading:r.kategori.loading,"allow-empty":!1,"internal-search":!1,"custom-label":function(e){return e.kode+" — "+e.nama},modelValue:r.kategori.selected,"onUpdate:modelValue":t[5]||(t[5]=function(e){return r.kategori.selected=e}),placeholder:"Pilih kategori",class:"form-group",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:t[6]||(t[6]=function(t){return e.$emit("getKategori",t)}),onClose:t[7]||(t[7]=function(e){return r.kategori.options=[]}),onOpen:t[8]||(t[8]=function(t){e.$emit("getKategori",""),h.filter=!1})},{noResult:(0,n.withCtx)((function(){return[p]})),noOptions:(0,n.withCtx)((function(){return[m]})),_:1},8,["options","loading","custom-label","modelValue"])])])]})),_:1},16,["title","data"]),b,(0,n.createVNode)(v,(0,n.mergeProps)(e.$attrs,{title:"Laporan Barang Perlu Restok",url:"/laporan/barang",data:{filter:"Semua",type:"restok"}}),null,16),g,(0,n.createVNode)(v,(0,n.mergeProps)(e.$attrs,{title:"Laporan Barang Tidak Restok",url:"/laporan/barang",data:{filter:"Semua",type:"tidak-restok"}}),null,16)]))]})),_:1})])}]])}}]);