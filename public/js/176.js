"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[176],{2176:(e,a,n)=>{n.r(a),n.d(a,{default:()=>me});var t=n(8222),l={class:"card border-0 rounded shadow"},r={class:"card-body"},o=(0,t.createElementVNode)("h4",null,"TAMBAH DATA PEMBELIAN",-1),i=(0,t.createElementVNode)("hr",null,null,-1);var c=n(9038),s={class:"mb-3"},d=(0,t.createElementVNode)("label",{class:"form-label"},"Pilih Barang",-1),u={class:"row gap-2"},m={class:"col-sm col-12"},p=(0,t.createTextVNode)("Data Tidak Ditemukan."),b=(0,t.createTextVNode)("Data Tidak Ada."),g={class:"col-sm col-12"},h=(0,t.createTextVNode)("Data Tidak Ditemukan."),f=(0,t.createTextVNode)("Data Tidak Ada."),N={class:"mb-3"},V={class:"row gap-2"},E={class:"col-sm col-12"},k=(0,t.createElementVNode)("label",{class:"form-label"},"Jumlah Barang",-1),B={class:"input-group"},v=["disabled"],y={key:0,class:"input-group-text"},D={class:"col-sm col-12"},C=(0,t.createElementVNode)("label",{class:"form-label"},"Dikembalikan",-1),T={class:"input-group"},w=["disabled"],S={key:0,class:"input-group-text"},A={class:"mb-3"},x=(0,t.createElementVNode)("label",{class:"form-label"},"Harga Barang",-1),O={class:"input-group"},j=(0,t.createElementVNode)("span",{class:"input-group-text"},"Rp.",-1),P=["disabled"],M=(0,t.createElementVNode)("span",{class:"input-group-text"},",00",-1),_={class:"mb-3"},R=(0,t.createElementVNode)("hr",null,null,-1),U={class:"mb-3"},I=(0,t.createElementVNode)("label",{class:"form-label"},"Nomor Nota",-1),H=["disabled"],G={key:0,class:"invalid-feedback"},L={class:"mb-3"},z=(0,t.createElementVNode)("label",{class:"form-label"},"Nama Supplier",-1),F=(0,t.createTextVNode)("Data Tidak Ditemukan."),J=(0,t.createTextVNode)("Data Tidak Ada."),K={key:0,class:"invalid-feedback"},Z={class:"table-responsive"},$={class:"table table-striped table-hover table-bordered"},q=(0,t.createElementVNode)("thead",null,[(0,t.createElementVNode)("tr",null,[(0,t.createElementVNode)("th",{scope:"col"},"NO"),(0,t.createElementVNode)("th",{scope:"col"},"NAMA BARANG"),(0,t.createElementVNode)("th",{scope:"col"},"HARGA BARANG"),(0,t.createElementVNode)("th",{scope:"col"},"JUMLAH BARANG"),(0,t.createElementVNode)("th",{scope:"col"},"DIKEMBALIKAN"),(0,t.createElementVNode)("th",{scope:"col"},"SATUAN"),(0,t.createElementVNode)("th",{scope:"col"},"TOTAL"),(0,t.createElementVNode)("th",{scope:"col"},"AKSI")])],-1),Q=["onClick"],W={key:1,class:"text-center"},X=[(0,t.createElementVNode)("tr",null,[(0,t.createElementVNode)("td",{colspan:"8"},"Belum Ada Data")],-1)],Y=(0,t.createElementVNode)("th",{colspan:"3",class:"text-center"},"TOTAL",-1),ee=(0,t.createElementVNode)("th",null,null,-1),ae=(0,t.createElementVNode)("th",null,null,-1),ne={class:"mb-3"},te=["disabled"];var le=n(2444),re=n(6486);function oe(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function ie(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?oe(Object(n),!0).forEach((function(a){ce(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function ce(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}const se={components:{VSelect:le.ZP},props:{pembelian:Object},remember:"pembelian",setup:function(){var e={options:[],selected:null,loading:!1},a=(0,t.reactive)({options:[],loading:!1}),n=(0,re.debounce)((function(e){a.loading=!0,axios.post("/api/supplier",{value:e}).then((function(e){a.options=e.data})).catch((function(e){console.log("error",e)})).finally((function(){a.loading=!1}))}),500),l=(0,t.reactive)(ie({},e)),r=(0,re.debounce)((function(e){l.loading=!0,axios.post("/api/barang",{value:e}).then((function(e){l.options=e.data})).catch((function(e){console.log("error",e)})).finally((function(){l.loading=!1}))}),500),o=(0,t.reactive)(ie(ie({},e),{},{jumlah:0,harga:0,kembali:0})),i=(0,re.debounce)((function(e){o.loading=!0,axios.post("/api/barang/detail",{value:e,restok:!0,id_barang:l.selected.id}).then((function(e){o.options=e.data})).catch((function(e){console.log("error",e)})).finally((function(){o.loading=!1}))}),500);return{supplier:a,getDataSupplier:n,barang:l,getDataBarang:r,detailBarang:o,getDataDetailBarang:i,pushBarang:function(a,n){-1===function(e,a){return e.findIndex((function(e){return e.id===a.id}))}(a,n)&&(n.nama=l.selected.nama+" — "+n.nama,a.push(ie(ie({},n),{},{jumlah:o.jumlah,harga:o.harga,kembali:o.kembali,satuan:l.selected.satuan})),Object.assign(l,e),Object.assign(o,ie(ie({},e),{},{jumlah:0,harga:0,kembali:0})))}}}};var de=n(3744);const ue={components:{FormPembelian:(0,de.Z)(se,[["render",function(e,a,n,l,r,o){var i=(0,t.resolveComponent)("v-select");return(0,t.openBlock)(),(0,t.createElementBlock)("form",{onSubmit:a[16]||(a[16]=(0,t.withModifiers)((function(a){return e.$emit("submit")}),["prevent"]))},[(0,t.createElementVNode)("div",s,[d,(0,t.createElementVNode)("div",u,[(0,t.createElementVNode)("div",m,[(0,t.createVNode)(i,{options:l.barang.options,searchable:!0,loading:l.barang.loading,"allow-empty":!1,"internal-search":!1,disabled:n.pembelian.processing,modelValue:l.barang.selected,"onUpdate:modelValue":a[0]||(a[0]=function(e){return l.barang.selected=e}),placeholder:"Pilih Barang",class:"form-group",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:l.getDataBarang,onClose:a[1]||(a[1]=function(e){return l.barang.options=[]}),onOpen:a[2]||(a[2]=function(e){l.detailBarang.selected=null,l.getDataBarang("")})},{noResult:(0,t.withCtx)((function(){return[p]})),noOptions:(0,t.withCtx)((function(){return[b]})),_:1},8,["options","loading","disabled","modelValue","onSearchChange"])]),(0,t.createElementVNode)("div",g,[(0,t.createVNode)(i,{options:l.detailBarang.options,searchable:!0,loading:l.detailBarang.loading,"allow-empty":!1,"internal-search":!1,disabled:n.pembelian.processing||null===l.barang.selected||l.barang.selected.jumlah_jenis<1,modelValue:l.detailBarang.selected,"onUpdate:modelValue":a[3]||(a[3]=function(e){return l.detailBarang.selected=e}),placeholder:"Pilih Detail Barang",class:"form-group",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:l.getDataDetailBarang,onClose:a[4]||(a[4]=function(e){return l.detailBarang.options=[]}),onOpen:a[5]||(a[5]=function(e){return l.getDataDetailBarang("")})},{noResult:(0,t.withCtx)((function(){return[h]})),noOptions:(0,t.withCtx)((function(){return[f]})),_:1},8,["options","loading","disabled","modelValue","onSearchChange"])])])]),(0,t.createElementVNode)("div",N,[(0,t.createElementVNode)("div",V,[(0,t.createElementVNode)("div",E,[k,(0,t.createElementVNode)("div",B,[(0,t.withDirectives)((0,t.createElementVNode)("input",{type:"number",class:"form-control",min:"0",disabled:n.pembelian.processing||null===l.detailBarang.selected,"onUpdate:modelValue":a[6]||(a[6]=function(e){return l.detailBarang.jumlah=e}),placeholder:"Masukkan jumlah pembelian"},null,8,v),[[t.vModelText,l.detailBarang.jumlah]]),null!==l.barang.selected?((0,t.openBlock)(),(0,t.createElementBlock)("span",y,(0,t.toDisplayString)(l.barang.selected.satuan),1)):(0,t.createCommentVNode)("",!0)])]),(0,t.createElementVNode)("div",D,[C,(0,t.createElementVNode)("div",T,[(0,t.withDirectives)((0,t.createElementVNode)("input",{type:"number",min:"0",class:"form-control",disabled:n.pembelian.processing||null===l.detailBarang.selected,"onUpdate:modelValue":a[7]||(a[7]=function(e){return l.detailBarang.kembali=e}),placeholder:"Masukkan Jumlah Dikembalikan"},null,8,w),[[t.vModelText,l.detailBarang.kembali]]),null!==l.barang.selected?((0,t.openBlock)(),(0,t.createElementBlock)("span",S,(0,t.toDisplayString)(l.barang.selected.satuan),1)):(0,t.createCommentVNode)("",!0)])])])]),(0,t.createElementVNode)("div",A,[x,(0,t.createElementVNode)("div",O,[j,(0,t.withDirectives)((0,t.createElementVNode)("input",{type:"number",min:"0",class:"form-control",step:"100",disabled:n.pembelian.processing||null===l.detailBarang.selected,"onUpdate:modelValue":a[8]||(a[8]=function(e){return l.detailBarang.harga=e}),placeholder:"Masukkan Harga Barang"},null,8,P),[[t.vModelText,l.detailBarang.harga]]),M])]),(0,t.createElementVNode)("div",_,[(0,t.createElementVNode)("span",{class:(0,t.normalizeClass)([{disabled:n.pembelian.processing||null===l.barang.selected||null===l.detailBarang.selected||l.detailBarang.jumlah<1||l.detailBarang.harga<1},"btn btn-primary btn-md shadow-sm"]),onClick:a[9]||(a[9]=function(e){return l.pushBarang(n.pembelian.barang,l.detailBarang.selected)})}," TAMBAH BARANG ",2)]),R,(0,t.createElementVNode)("div",U,[I,(0,t.withDirectives)((0,t.createElementVNode)("input",{type:"text",class:(0,t.normalizeClass)(["form-control",{"is-invalid":n.pembelian.errors.no_nota}]),disabled:n.pembelian.processing,"onUpdate:modelValue":a[10]||(a[10]=function(e){return n.pembelian.no_nota=e}),onInput:a[11]||(a[11]=function(e){return n.pembelian.clearErrors("no_nota")}),placeholder:"Masukkan Nomor Nota pembelian"},null,42,H),[[t.vModelText,n.pembelian.no_nota]]),(0,t.createVNode)(t.Transition,{name:"fade"},{default:(0,t.withCtx)((function(){return[n.pembelian.errors.no_nota?((0,t.openBlock)(),(0,t.createElementBlock)("div",G,(0,t.toDisplayString)(n.pembelian.errors.no_nota),1)):(0,t.createCommentVNode)("",!0)]})),_:1})]),(0,t.createElementVNode)("div",L,[z,(0,t.createVNode)(i,{options:l.supplier.options,searchable:!0,loading:l.supplier.loading,class:(0,t.normalizeClass)([{"is-invalid":n.pembelian.errors["supplier.id"]},"form-group"]),"allow-empty":!1,"internal-search":!1,disabled:n.pembelian.processing,modelValue:n.pembelian.supplier,"onUpdate:modelValue":a[12]||(a[12]=function(e){return n.pembelian.supplier=e}),placeholder:"Pilih Supplier",label:"nama","track-by":"nama","select-label":"","deselect-label":"Terpilih","selected-label":"Terpilih",onSearchChange:l.getDataSupplier,onClose:a[13]||(a[13]=function(e){return l.supplier.options=[]}),onOpen:a[14]||(a[14]=function(e){n.pembelian.clearErrors("supplier.id"),l.getDataSupplier("")})},{noResult:(0,t.withCtx)((function(){return[F]})),noOptions:(0,t.withCtx)((function(){return[J]})),_:1},8,["options","loading","class","disabled","modelValue","onSearchChange"]),(0,t.createVNode)(t.Transition,{name:"fade"},{default:(0,t.withCtx)((function(){return[n.pembelian.errors["supplier.id"]?((0,t.openBlock)(),(0,t.createElementBlock)("div",K,(0,t.toDisplayString)(n.pembelian.errors["supplier.id"]),1)):(0,t.createCommentVNode)("",!0)]})),_:1})]),(0,t.createElementVNode)("div",Z,[(0,t.createElementVNode)("table",$,[q,(0,t.createVNode)(t.Transition,{name:"fade",mode:"out-in"},{default:(0,t.withCtx)((function(){return[n.pembelian.barang.length>0?((0,t.openBlock)(),(0,t.createBlock)(t.TransitionGroup,{key:0,name:"fade",mode:"out-in",tag:"tbody"},{default:(0,t.withCtx)((function(){return[((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,null,(0,t.renderList)(n.pembelian.barang,(function(a,l){return(0,t.openBlock)(),(0,t.createElementBlock)("tr",{key:a.id},[(0,t.createElementVNode)("td",null,(0,t.toDisplayString)(l+1),1),(0,t.createElementVNode)("td",null,(0,t.toDisplayString)(a.nama),1),(0,t.createElementVNode)("td",null,(0,t.toDisplayString)(e.getRupiah(a.harga)),1),(0,t.createElementVNode)("td",null,(0,t.toDisplayString)(a.jumlah),1),(0,t.createElementVNode)("td",null,(0,t.toDisplayString)(a.kembali),1),(0,t.createElementVNode)("td",null,(0,t.toDisplayString)(a.satuan),1),(0,t.createElementVNode)("td",null,(0,t.toDisplayString)(e.getRupiah(a.harga*(a.jumlah-a.kembali))),1),(0,t.createElementVNode)("td",null,[(0,t.createElementVNode)("span",{onClick:function(e){return n.pembelian.barang.splice(l,1)},class:"btn btn-danger btn-md shadow-sm"}," HAPUS ",8,Q)])])})),128))]})),_:1})):((0,t.openBlock)(),(0,t.createElementBlock)("tbody",W,X))]})),_:1}),(0,t.createElementVNode)("tfoot",null,[(0,t.createElementVNode)("tr",null,[Y,(0,t.createElementVNode)("th",null,(0,t.toDisplayString)(n.pembelian.barang.reduce((function(e,a){return e+a.jumlah}),0)),1),(0,t.createElementVNode)("th",null,(0,t.toDisplayString)(n.pembelian.barang.reduce((function(e,a){return e+a.kembali}),0)),1),ee,(0,t.createElementVNode)("th",null,(0,t.toDisplayString)(e.getRupiah(n.pembelian.barang.reduce((function(e,a){return e+(a.jumlah-a.kembali)*a.harga}),0))),1),ae])])])]),(0,t.createElementVNode)("div",ne,[(0,t.createElementVNode)("button",{type:"submit",disabled:n.pembelian.processing||null===n.pembelian.supplier||n.pembelian.barang.length<1,class:"btn btn-primary btn-md shadow-sm me-2"}," SIMPAN ",8,te),(0,t.createElementVNode)("span",{class:(0,t.normalizeClass)([{disabled:n.pembelian.processing||null===n.pembelian.supplier||n.pembelian.barang.length<1},"btn btn-warning btn-md shadow-sm"]),onClick:a[15]||(a[15]=function(e){return n.pembelian.reset()})}," RESET ",2)])],32)}]])},setup:function(){return{pembelian:(0,c.cI)({supplier:null,barang:[],no_nota:""})}}},me=(0,de.Z)(ue,[["render",function(e,a,n,c,s,d){var u=(0,t.resolveComponent)("inertia-head"),m=(0,t.resolveComponent)("form-pembelian");return(0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,null,[(0,t.createVNode)(u,{title:"Tambah Pembelian"}),(0,t.createElementVNode)("div",null,[(0,t.createElementVNode)("div",l,[(0,t.createElementVNode)("div",r,[o,i,(0,t.createVNode)(m,{pembelian:c.pembelian,onSubmit:a[0]||(a[0]=function(e){return c.pembelian.post("/transaksi/pembelian")})},null,8,["pembelian"])])])])],64)}]])}}]);