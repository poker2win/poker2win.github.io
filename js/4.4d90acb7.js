(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{1753:function(e,t,n){e.exports=n.p+"img/us.f18dc468.png"},"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{staticStyle:{"background-color":"rgb(245, 237, 221)"},attrs:{view:"lhh Lpr lFf"}},[a("q-header",{staticClass:"q-pa-sm text-black",staticStyle:{"background-color":"rgb(245, 237, 221)"},attrs:{bordered:""}},[a("q-toolbar",[a("q-toolbar-title",{staticClass:"cursor-pointer",on:{click:function(t){return e.gotoIndexPage()}}},[e._v("\n        poker2win . club\n      ")]),a("q-space"),a("q-tabs",{attrs:{"indicator-color":"transparent","active-color":"purple"}},[a("q-tab",{attrs:{name:"index","no-caps":"",label:e.game},on:{click:function(t){return e.gotoIndexPage()}}}),a("q-tab",{attrs:{name:"faq","no-caps":"",label:e.faq},on:{click:function(t){return e.gotoFaqPage()}}})],1),a("q-btn-dropdown",{attrs:{stretch:"",flat:"",icon:e.localeImg}},[a("q-list",[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return e.freshLocale("en-us")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{square:""}},[a("q-img",{attrs:{src:n("1753"),sizes:"height:22px;"}})],1)],1),a("q-item-section",[a("q-item-label",[e._v("English")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return e.freshLocale("zh-cn")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{square:""}},[a("q-img",{attrs:{src:n("77a6"),sizes:"height:22px;"}})],1)],1),a("q-item-section",[a("q-item-label",[e._v("中文")])],1)],1)],1)],1)],1)],1),a("q-page-container",[a("router-view")],1),a("q-separator"),a("div",{staticClass:"row no-wrap items-center q-px-lg"},[a("span",[e._v(e._s(e.network)+" ( "+e._s(e.networkName)+" ) ")]),a("span",[e._v(" ( "+e._s(e.accountBalance)+" ETH )")]),a("q-space"),a("span",{staticClass:"q-pa-lg q-mx-md cursor-pointer",on:{click:function(t){return e.gotoEmail()}}},[e._v(e._s(e.contact))])],1)],1)},o=[],r=n("967e"),s=n.n(r),c=(n("96cf"),n("fa84")),i=n.n(c),u={name:"MainLayout",components:{},data:function(){return{}},created:function(){var e=this;return i()(s.a.mark((function t(){return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.initialWeb3AccountAndNetwork();case 2:e.listenMetaMaskEvent(),e.initialLocale();case 4:case"end":return t.stop()}}),t)})))()},methods:{initialLocale:function(){var e=this.$q.lang.getLocale(),t="zh"===e||"zh-cn"===e||"zh-tw"===e||"zh-hk"===e?"zh-cn":"en-us";this.freshLocale(t)},freshLocale:function(e){this.$q.lang.isoName=e},initialWeb3AccountAndNetwork:function(){var e=this;return i()(s.a.mark((function t(){var n;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,!n.$web3Provider){t.next=7;break}return t.next=4,n.$web3Provider.enable().then((function(e){})).catch((function(e){console.log(e.message)}));case 4:return t.next=6,n.$web3.eth.getAccounts().then((function(e){n.accountAssignValue(e)})).catch((function(e){console.log(e.message)}));case 6:n.$web3.eth.net.getId().then((function(e){n.networkAssignValue(e)})).catch((function(e){console.log(e.message)}));case 7:case"end":return t.stop()}}),t)})))()},listenMetaMaskEvent:function(){var e=this;e.$web3Provider.on("accountsChanged",(function(t){e.accountAssignValue(t),e.$bus.emit("accountsChanged")})),e.$web3Provider.on("networkChanged",(function(t){e.networkAssignValue(t),e.$bus.emit("networkChanged")}))},accountAssignValue:function(e){var t=this;void 0===e||0===e.length?t.$store.commit("poker/setEtherAccount",""):e[0]!==this.$store.state.poker.etherAccount&&(t.$store.commit("poker/setEtherAccount",e[0]),t.$web3.eth.getBalance(e[0]).then((function(e){var n=t.$web3.utils.fromWei(e,"ether");t.$store.commit("poker/setAccountBalance",parseFloat(n).toFixed(4))})).catch((function(e){console.log(e.message)})))},networkAssignValue:function(e){var t=this,n=parseInt(e);switch(t.$store.commit("poker/setNetworkId",n),n){case 1:return t.$store.commit("poker/setNetworkName","Ethereum main network"),void t.$store.commit("poker/setIsMainNet",!0);case 2:t.$store.commit("poker/setNetworkName","Morden test network");break;case 3:t.$store.commit("poker/setNetworkName","Ropsten test network");break;case 42:t.$store.commit("poker/setNetworkName","Kovan test network");break;case 4:t.$store.commit("poker/setNetworkName","Rinkeby test network");break;case 5:t.$store.commit("poker/setNetworkName","Goerli test network");break;case 5777:t.$store.commit("poker/setNetworkName","Ganache dev network");break;default:t.$store.commit("poker/setNetworkName","Unknown network");break}t.$store.commit("poker/setIsMainNet",!1)},gotoIndexPage:function(){this.$router.push({name:"index"})},gotoFaqPage:function(){this.$router.push({name:"faq"})},gotoEmail:function(){window.location.href="mailto:poker2win.club@gmail.com"}},computed:{game:function(){return this.$i18n.messages[this.$q.lang.isoName].game},faq:function(){return this.$i18n.messages[this.$q.lang.isoName].faq},contact:function(){return this.$i18n.messages[this.$q.lang.isoName].contact},localeImg:function(){return this.$i18n.messages[this.$q.lang.isoName].localeImg},network:function(){return this.$i18n.messages[this.$q.lang.isoName].network},networkName:function(){return this.$store.state.poker.networkName},isMainNet:function(){return this.$store.state.poker.isMainNet},etherAccount:function(){return this.$store.state.poker.etherAccount},accountBalance:function(){return this.$store.state.poker.accountBalance}}},l=u,m=n("2877"),p=n("eebe"),h=n.n(p),k=n("4d5a"),g=n("e359"),f=n("65c6"),w=n("6ac5"),b=n("2c91"),d=n("429bb"),q=n("7460"),$=n("f20b"),v=n("1c1c"),N=n("66e5"),x=n("4074"),A=n("cb32"),Q=n("068f"),I=n("0170"),L=n("09e3"),_=n("eb85"),P=n("7f67"),C=Object(m["a"])(l,a,o,!1,null,null,null);t["default"]=C.exports;h()(C,"components",{QLayout:k["a"],QHeader:g["a"],QToolbar:f["a"],QToolbarTitle:w["a"],QSpace:b["a"],QTabs:d["a"],QTab:q["a"],QBtnDropdown:$["a"],QList:v["a"],QItem:N["a"],QItemSection:x["a"],QAvatar:A["a"],QImg:Q["a"],QItemLabel:I["a"],QPageContainer:L["a"],QSeparator:_["a"]}),h()(C,"directives",{ClosePopup:P["a"]})},"77a6":function(e,t,n){e.exports=n.p+"img/cn.f983c9cd.png"}}]);