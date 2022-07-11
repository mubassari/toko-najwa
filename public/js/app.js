/*! For license information please see app.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[773],{4914:(e,t,r)=>{"use strict";var n=r(9038),a=r(1966),o=r(6598),i={id:"sidenav-container"},l={class:"container-fluid mr-4 mt-4"},s={key:0};var c={class:"bg-white border-end user-select-none"},u={class:"p-3 sticky-top"},d=(0,o.createElementVNode)("div",{class:"d-flex align-items-center justify-content-center text-center mb-3 mb-md-0 me-md-auto text-decoration-none"},[(0,o.createElementVNode)("span",{class:"fs-4 text-uppercase"},"Toko Najwa")],-1),p=(0,o.createElementVNode)("hr",null,null,-1),f={class:"d-flex align-items-center justify-content-between"},m={class:"ms-3 badge bg-primary"},v=(0,o.createElementVNode)("hr",null,null,-1),h={class:"nav nav-pills flex-column mb-auto"},g={key:0},y=[(0,o.createElementVNode)("button",{class:"btn btn-light m-3"},[(0,o.createElementVNode)("i",{class:"fa-solid fa-xmark"})],-1)];const b={data:function(){return{sidebar:[{name:"Beranda",url:"/home",icon:"fa-solid fa-house",admin_only:!1},{name:"Data Transaksi",url:"/transaksi",icon:"fa-solid fa-cart-shopping",admin_only:!1},{name:"Data Master",url:"/master",icon:"fa-solid fa-database",admin_only:!1},{name:"Laporan",url:"/laporan",icon:"fa-solid fa-file",admin_only:!1},{name:"Pengguna",url:"/user",icon:"fa-solid fa-users",admin_only:!0}]}},emits:["toggleSidebar"]};var w=r(3744);const x=(0,w.Z)(b,[["render",function(e,t,r,n,a,i){var l=(0,o.resolveComponent)("inertia-link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("nav",c,[(0,o.createElementVNode)("div",u,[d,p,(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.$attrs.auth.user.nama),1),(0,o.createElementVNode)("span",m,(0,o.toDisplayString)(e.$attrs.auth.user.role),1)]),v,(0,o.createElementVNode)("ul",h,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.sidebar,(function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:r},[!t.admin_only||e.$attrs.auth.user.can.manage_user?((0,o.openBlock)(),(0,o.createElementBlock)("li",g,[(0,o.createVNode)(l,{class:(0,o.normalizeClass)(["nav-link",[t.url=="/"+e.$page.url.split(/(\/|\?)+/)[2]?"active":"text-dark"]]),href:t.url},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("i",{style:{width:"18px"},class:(0,o.normalizeClass)(["me-2 text-center",t.icon])},null,2),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(t.name),1)]})),_:2},1032,["class","href"])])):(0,o.createCommentVNode)("",!0)],64)})),128))])])]),(0,o.createElementVNode)("div",{id:"sidenav-toggle",class:"sidenav-close",onClick:t[0]||(t[0]=function(t){return e.$emit("toggleSidebar")})},y)],64)}]]);var E={class:"p-3 bg-white border-bottom d-flex justify-content-between align-items-center user-select-none sticky-top"},k={class:"d-flex align-items-top"},N=[(0,o.createElementVNode)("i",{class:"fa-solid fa-bars"},null,-1)],S=(0,o.createElementVNode)("span",{class:"ms-3 text-uppercase fs-4 text-center"},"SISTEM INVENTORY BARANG",-1),L=(0,o.createElementVNode)("i",{class:"fa-solid fa-right-from-bracket"},null,-1),T=(0,o.createTextVNode)(" Keluar ");const C={emits:["toggleSidebar"]},V=(0,w.Z)(C,[["render",function(e,t,r,n,a,i){var l=(0,o.resolveComponent)("inertia-link");return(0,o.openBlock)(),(0,o.createElementBlock)("nav",E,[(0,o.createElementVNode)("div",k,[(0,o.createElementVNode)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=function(t){return e.$emit("toggleSidebar")})},N)]),S,(0,o.createElementVNode)("div",null,[(0,o.createVNode)(l,{class:"text-decoration-none btn btn-link",href:"/logout",method:"post",as:"button"},{default:(0,o.withCtx)((function(){return[L,T]})),_:1})])])}]]);var B=r(1534),M=r(119),P=r(2262);const I={components:{Sidebar:x,Navbar:V,Toast:B.Z,ScrollTop:M.Z},inheritAttrs:!0,setup:function(){var e=(0,P.iH)(!1);return{sidebarToggled:e,toggleSidebar:function(){return e.value=!e.value}}}},_=(0,w.Z)(I,[["render",function(e,t,r,n,a,c){var u=(0,o.resolveComponent)("sidebar"),d=(0,o.resolveComponent)("navbar"),p=(0,o.resolveComponent)("toast"),f=(0,o.resolveComponent)("scroll-top");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("div",{id:"sidenav-bg",class:(0,o.normalizeClass)({"sidenav-toggled":n.sidebarToggled})},null,2),(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("aside",{id:"sidenav-open",class:(0,o.normalizeClass)({"sidenav-toggled":n.sidebarToggled})},[(0,o.createVNode)(u,(0,o.mergeProps)({onToggleSidebar:n.toggleSidebar},e.$attrs),null,16,["onToggleSidebar"])],2),(0,o.createElementVNode)("div",null,[(0,o.createVNode)(d,(0,o.mergeProps)({onToggleSidebar:n.toggleSidebar},e.$attrs),null,16,["onToggleSidebar"]),(0,o.createElementVNode)("main",l,[(0,o.createVNode)(p,{toast:e.$page.props.toast,popstate:e.$page.props.popstate},null,8,["toast","popstate"]),(0,o.createVNode)(o.Transition,{name:"fade",mode:"out-in",appear:""},{default:(0,o.withCtx)((function(){return[e.$slots.default?((0,o.openBlock)(),(0,o.createElementBlock)("div",s,[(0,o.renderSlot)(e.$slots,"default")])):(0,o.createCommentVNode)("",!0)]})),_:3})])])]),(0,o.createVNode)(f)],64)}]]);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function F(){F=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new k(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=w(i,r);if(l){if(l===u)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=c(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u={};function d(){}function p(){}function f(){}var m={};l(m,a,(function(){return this}));var v=Object.getPrototypeOf,h=v&&v(v(N([])));h&&h!==t&&r.call(h,a)&&(m=h);var g=f.prototype=d.prototype=Object.create(m);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function n(a,o,i,l){var s=c(e[a],e,o);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==j(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,l)}))}l(s.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=f,l(g,"constructor",f),l(f,"constructor",p),p.displayName=l(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),l(g,i,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function D(e,t,r,n,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,a)}var O,$;r(7333),(0,n.yP)({resolve:(O=F().mark((function e(t){var n;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(4985)("./".concat(t));case 2:return void 0===(n=e.sent.default).layout&&(n.layout=_),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})),$=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=O.apply(e,t);function o(e){D(a,r,n,o,i,"next",e)}function i(e){D(a,r,n,o,i,"throw",e)}o(void 0)}))},function(e){return $.apply(this,arguments)}),title:function(e){return"''"===e?"Toko Najwa":"".concat(e," | Toko Najwa")},setup:function(e){var t=e.el,r=e.App,a=e.props,i=e.plugin;(0,o.createApp)({render:function(){return(0,o.h)(r,a)}}).use(i).component("InertiaLink",n.rU).component("InertiaHead",n.Fb).mixin({mounted:function(){var e=this;window.addEventListener("popstate",(function(){return e.$page.props.popstate=!0}))},methods:{getDate:function(e){return new Date(e).toLocaleString("id-ID",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).replace(".",":")},getMonthYear:function(e){return new Date(e).toLocaleString("id-ID",{month:"long",year:"numeric"}).replace(".",":")},getDateFull:function(e){return new Date(e).toLocaleString("id-ID",{dateStyle:"full"}).replace(".",":")},getRupiah:function(e){return Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e)}}}).mount(t)}}),a.I.init()},7333:(e,t,r)=>{window._=r(6486),window.axios=r(9669),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",window.axios.defaults.withCredentials=!0},7731:()=>{},119:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(6598),a=[(0,n.createElementVNode)("i",{class:"fa-solid fa-angle-up"},null,-1)];var o=r(2262),i=r(6252);const l={setup:function(){var e=(0,o.iH)(!1),t=function(){return e.value=window.scrollY>100};return(0,i.wF)((function(){return window.addEventListener("scroll",t)})),(0,i.Jd)((function(){return window.removeEventListener("scroll",t)})),{scrolled:e,scrollToTop:function(){return window.scrollTo(0,0)}}}};const s=(0,r(3744).Z)(l,[["render",function(e,t,r,o,i,l){return(0,n.openBlock)(),(0,n.createBlock)(n.Transition,{name:"fade",mode:"out-in"},{default:(0,n.withCtx)((function(){return[o.scrolled?((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:0,class:"scroll-to-top text-white rounded",onClick:t[0]||(t[0]=function(){return o.scrollToTop&&o.scrollToTop.apply(o,arguments)})},a)):(0,n.createCommentVNode)("",!0)]})),_:1})}]])},1534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(6598),a={key:0,style:{"z-index":"9999999999",position:"fixed",right:"1rem",top:"1rem",width:"20rem"}},o={"aria-live":"polite","aria-atomic":"true",class:"d-flex flex-column-reverse",style:{position:"relative"}},i={class:"d-flex"},l={class:"toast-body"};const s={props:{toast:Object,popstate:Boolean},setup:function(e){var t=(0,n.ref)(!1),r=function(){t.value=!0,setTimeout((function(){return t.value=!1}),2e3)};return(0,n.onMounted)((function(){return r()})),(0,n.watch)(e.toast,(function(){return r()}),{deep:!0}),{visible:t}}};const c=(0,r(3744).Z)(s,[["render",function(e,t,r,s,c,u){return(0,n.openBlock)(),(0,n.createBlock)(n.Transition,{name:"slide-fade"},{default:(0,n.withCtx)((function(){return[r.toast.message&&s.visible&&!r.popstate?((0,n.openBlock)(),(0,n.createElementBlock)("div",a,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["toast show align-items-center border-5","border-"+(r.toast.status?r.toast.status:"primary")]),role:"alert","aria-live":"assertive","aria-atomic":"true"},[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",l,(0,n.toDisplayString)(r.toast.message),1),(0,n.createElementVNode)("button",{type:"button",class:"btn-close me-2 m-auto","data-bs-dismiss":"toast","aria-label":"Close",onClick:t[0]||(t[0]=function(e){return s.visible=!1})})])],2)])])):(0,n.createCommentVNode)("",!0)]})),_:1})}]])},4985:(e,t,r)=>{var n={"./Home":[1345,345],"./Home.vue":[1345,345],"./Index":[8666,666],"./Index.vue":[8666,666],"./Laporan/Form/Barang":[6042,898,42],"./Laporan/Form/Barang.vue":[6042,898,42],"./Laporan/Form/Pembelian":[1380,898,380],"./Laporan/Form/Pembelian.vue":[1380,898,380],"./Laporan/Form/Pengembalian":[8273,898,273],"./Laporan/Form/Pengembalian.vue":[8273,898,273],"./Laporan/Form/Penjualan":[5576,898,576],"./Laporan/Form/Penjualan.vue":[5576,898,576],"./Laporan/Form/Supplier":[9866,866],"./Laporan/Form/Supplier.vue":[9866,866],"./Laporan/Index":[9920,898,920],"./Laporan/Index.vue":[9920,898,920],"./Master/Barang/Create":[1347,898,347],"./Master/Barang/Create.vue":[1347,898,347],"./Master/Barang/Detail/Create":[2264,898,264],"./Master/Barang/Detail/Create.vue":[2264,898,264],"./Master/Barang/Detail/Edit":[3248,898,248],"./Master/Barang/Detail/Edit.vue":[3248,898,248],"./Master/Barang/Edit":[8146,898,146],"./Master/Barang/Edit.vue":[8146,898,146],"./Master/Barang/Index":[9061,61],"./Master/Barang/Index.vue":[9061,61],"./Master/Barang/Show":[9006,6],"./Master/Barang/Show.vue":[9006,6],"./Master/Index":[6437,437],"./Master/Index.vue":[6437,437],"./Master/Kategori/Create":[4153,153],"./Master/Kategori/Create.vue":[4153,153],"./Master/Kategori/Edit":[7326,326],"./Master/Kategori/Edit.vue":[7326,326],"./Master/Kategori/Index":[3221,221],"./Master/Kategori/Index.vue":[3221,221],"./Master/Satuan/Create":[1563,563],"./Master/Satuan/Create.vue":[1563,563],"./Master/Satuan/Edit":[1599,599],"./Master/Satuan/Edit.vue":[1599,599],"./Master/Satuan/Index":[4667,667],"./Master/Satuan/Index.vue":[4667,667],"./Master/Supplier/Create":[4036,36],"./Master/Supplier/Create.vue":[4036,36],"./Master/Supplier/Edit":[5523,523],"./Master/Supplier/Edit.vue":[5523,523],"./Master/Supplier/Index":[4493,493],"./Master/Supplier/Index.vue":[4493,493],"./Pengguna/Create":[5662,662],"./Pengguna/Create.vue":[5662,662],"./Pengguna/Edit":[4917,917],"./Pengguna/Edit.vue":[4917,917],"./Pengguna/Index":[4516,516],"./Pengguna/Index.vue":[4516,516],"./Transaksi/Index":[7850,850],"./Transaksi/Index.vue":[7850,850],"./Transaksi/Pembelian/Create":[6858,898,858],"./Transaksi/Pembelian/Create.vue":[6858,898,858],"./Transaksi/Pembelian/Index":[2920,898,530],"./Transaksi/Pembelian/Index.vue":[2920,898,530],"./Transaksi/Pembelian/Show":[6165,165],"./Transaksi/Pembelian/Show.vue":[6165,165],"./Transaksi/Penjualan/Create":[1256,898,256],"./Transaksi/Penjualan/Create.vue":[1256,898,256],"./Transaksi/Penjualan/Index":[5631,898,631],"./Transaksi/Penjualan/Index.vue":[5631,898,631],"./Transaksi/Penjualan/Show":[8449,449],"./Transaksi/Penjualan/Show.vue":[8449,449]};function a(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(a)))}a.keys=()=>Object.keys(n),a.id=4985,e.exports=a},4654:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[170,898],(()=>(t(4914),t(7731))));e.O()}]);