"use strict";(self.webpackChunkmetapledefi=self.webpackChunkmetapledefi||[]).push([[910],{98823:function(n,e,r){r.d(e,{Z:function(){return T}});var t=r(42982),u=r(30168),o=r(54385),i=r(52999),a=r(72791),c=r(17939),l=r(184),s=r(67357),d=r(8170),f=r(73580),v=r(21705),p=r(41177),m=r(44253);function h(n){var e=(0,a.useMemo)((function(){return n?(0,s.y)(n):void 0}),[n]),r=function(n){var e,r,t,u=(0,a.useMemo)((function(){if(!n)return[void 0];try{return n?[(0,f.namehash)(n)]:[void 0]}catch(e){return[void 0]}}),[n]),o=(0,m.zb)(!1),i=(0,v.Wk)(o,"resolver",u),c=null===(e=i.result)||void 0===e?void 0:e[0],l=(0,m.uU)(c&&(0,p.Z)(c)?void 0:c,!1),s=(0,v.Wk)(l,"contenthash",u);return{contenthash:null!==(t=null===(r=s.result)||void 0===r?void 0:r[0])&&void 0!==t?t:null,loading:i.loading||s.loading}}(null===e||void 0===e?void 0:e.ensName);return(0,a.useMemo)((function(){return e?r.contenthash?(0,d.Z)((0,l.Z)(r.contenthash)):[]:n?(0,d.Z)(n):[]}),[e,r.contenthash,n])}var g=r(79237),b=function(n){return"https://dapp.metaple.finance/tokens/".concat(n,".png")},x=r(1413),y=r(70885);var N,k={},I=function(n){var e=n.srcs,r=n.alt,t=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var u=0;for(t=Object.getOwnPropertySymbols(n);u<t.length;u++)e.indexOf(t[u])<0&&Object.prototype.propertyIsEnumerable.call(n,t[u])&&(r[t[u]]=n[t[u]])}return r}(n,["srcs","alt"]),u=(0,a.useState)(0),o=(0,y.Z)(u,2)[1],c=e.find((function(n){return!k[n]}));return c?a.createElement("img",(0,x.Z)((0,x.Z)({},t),{},{alt:r,src:c,onError:function(){c&&(k[c]=!0),o((function(n){return n+1}))}})):a.createElement(i.byK,(0,x.Z)({},t))},w=(0,c.ZP)(I)(N||(N=(0,u.Z)(["\n  width: ",";\n  height: ",";\n"])),(function(n){return n.size}),(function(n){return n.size}));function T(n){var e,r=n.currency,u=n.size,c=void 0===u?"24px":u,l=n.style,s=h(r instanceof g.DT?r.logoURI:void 0),d=(0,a.useMemo)((function(){return r===o.c0?[]:r instanceof o.WU?r instanceof g.DT?[].concat((0,t.Z)(s),[b(r.address)]):[b(r.address)]:[]}),[r,s]);return r===o.c0?a.createElement(i.Dtm,{width:c,style:l}):a.createElement(w,{size:c,srcs:d,alt:"".concat(null!==(e=null===r||void 0===r?void 0:r.symbol)&&void 0!==e?e:"token"," logo"),style:l})}},72479:function(n,e,r){var t=r(70885),u=r(72791),o=r(18680),i=r(31299),a=r(80184);e.Z=function(){var n=(0,i.Z)().login,e=u.useState(!1),r=(0,t.Z)(e,2),c=r[0],l=r[1];return(0,a.jsx)(a.Fragment,{children:c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:(0,a.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-md",children:(0,a.jsxs)("div",{className:"border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 dark:border-gray-600 dark:border-opacity-30 rounded-t",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold dark:text-white",children:"Connect Wallet"}),(0,a.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-40 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:function(){return l(!1)},children:(0,a.jsx)("span",{className:"bg-transparent text-black dark:text-white hover:text-indigo-600 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),(0,a.jsx)("div",{className:"relative p-6 flex-auto",children:(0,a.jsx)("p",{className:"my-0 text-blueGray-500 text-lg leading-relaxed",children:(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"col-span-1",children:(0,a.jsxs)("div",{onClick:function(){n(o.Mt.Injected)},style:{cursor:"pointer"},className:"w-full flex items-center justify-center flex-col",children:[(0,a.jsx)("img",{src:"images/meta.webp",alt:"",className:"w-10 h-10 mx-auto mb-4"}),(0,a.jsx)("div",{className:"text-black dark:text-white text-xs font-semibold",children:"Metamask"})]})}),(0,a.jsx)("div",{className:"col-span-1",children:(0,a.jsxs)("div",{onClick:function(){n(o.Mt.WalletConnect)},className:"w-full flex items-center justify-center flex-col",children:[(0,a.jsx)("svg",{viewBox:"0 0 40 40",width:"40px",color:"text",xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10 mx-auto mb-4",children:(0,a.jsx)("path",{d:"M8.68096 12.4756C14.9323 6.39698 25.0677 6.39698 31.3191 12.4756L32.0714 13.2071C32.384 13.511 32.384 14.0038 32.0714 14.3077L29.4978 16.8103C29.3415 16.9622 29.0881 16.9622 28.9318 16.8103L27.8965 15.8036C23.5354 11.563 16.4647 11.563 12.1036 15.8036L10.9948 16.8817C10.8385 17.0336 10.5851 17.0336 10.4288 16.8817L7.85517 14.3791C7.54261 14.0752 7.54261 13.5824 7.85517 13.2785L8.68096 12.4756ZM36.6417 17.6511L38.9322 19.8783C39.2448 20.1823 39.2448 20.675 38.9322 20.979L28.6039 31.022C28.2913 31.3259 27.7846 31.3259 27.472 31.022C27.472 31.022 27.472 31.022 27.472 31.022L20.1416 23.8942C20.0634 23.8182 19.9367 23.8182 19.8586 23.8942C19.8586 23.8942 19.8586 23.8942 19.8586 23.8942L12.5283 31.022C12.2157 31.3259 11.709 31.3259 11.3964 31.022C11.3964 31.022 11.3964 31.022 11.3964 31.022L1.06775 20.9788C0.755186 20.6749 0.755186 20.1821 1.06775 19.8782L3.35833 17.6509C3.6709 17.347 4.17767 17.347 4.49024 17.6509L11.8208 24.7789C11.8989 24.8549 12.0256 24.8549 12.1038 24.7789C12.1038 24.7789 12.1038 24.7789 12.1038 24.7789L19.4339 17.6509C19.7465 17.347 20.2533 17.347 20.5658 17.6509C20.5658 17.6509 20.5658 17.6509 20.5658 17.6509L27.8964 24.7789C27.9745 24.8549 28.1012 24.8549 28.1794 24.7789L35.5098 17.6511C35.8223 17.3471 36.3291 17.3471 36.6417 17.6511Z",fill:"#0369a1"})}),(0,a.jsx)("div",{className:"text-black dark:text-white text-xs font-semibold",children:"WalletConnect"})]})})]})})}),(0,a.jsxs)("div",{className:"flex items-center flex-col justify-end px-6 py-4 border-t border-solid border-blueGray-200 dark:border-gray-600 dark:border-opacity-30 rounded-b",children:[(0,a.jsx)("div",{className:"text-sm text-sky-600 font-semibold mb-4",children:"Haven\u2019t got a crypto wallet yet?"}),(0,a.jsx)("button",{className:"bg-sky-500 hover:bg-pink-600 text-white active:bg-sky-600 font-bold uppercase text-xs w-full px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150",type:"button",onClick:function(){return l(!1)},children:"Close"})]})]})})}),(0,a.jsx)("div",{className:"opacity-75 fixed inset-0 z-40 bg-black backdrop-blur-xl"})]}):null})}},34069:function(n,e,r){r.d(e,{Z:function(){return s}});var t=r(78235),u=r(73580),o=r(72791),i=r(21705),a=r(41177),c=r(44253),l=r(58112);function s(n){var e=(0,t.UJ)(n),r=function(n){var e,r,a,s=(0,l.Z)(n,200),d=(0,o.useMemo)((function(){if(!s||!(0,t.UJ)(s))return[void 0];try{return s?[(0,u.namehash)("".concat(s.toLowerCase().substr(2),".addr.reverse"))]:[void 0]}catch(n){return[void 0]}}),[s]),f=(0,c.zb)(!1),v=(0,i.Wk)(f,"resolver",d),p=null===(e=v.result)||void 0===e?void 0:e[0],m=(0,c.uU)(p&&!(0,t.Fr)(p)?p:void 0,!1),h=(0,i.Wk)(m,"name",d),g=s!==n;return{ENSName:g?null:null!==(a=null===(r=h.result)||void 0===r?void 0:r[0])&&void 0!==a?a:null,loading:g||v.loading||h.loading}}(e||void 0),s=function(n){var e,r,t,s=(0,l.Z)(n,200),d=(0,o.useMemo)((function(){if(!s)return[void 0];try{return s?[(0,u.namehash)(s)]:[void 0]}catch(n){return[void 0]}}),[s]),f=(0,c.zb)(!1),v=(0,i.Wk)(f,"resolver",d),p=null===(e=v.result)||void 0===e?void 0:e[0],m=(0,c.uU)(p&&!(0,a.Z)(p)?p:void 0,!1),h=(0,i.Wk)(m,"addr",d),g=s!==n;return{address:g?null:null!==(t=null===(r=h.result)||void 0===r?void 0:r[0])&&void 0!==t?t:null,loading:g||v.loading||h.loading}}(n);return{loading:r.loading||s.loading,address:e||s.address,name:r.ENSName?r.ENSName:!e&&s.address&&n||null}}},76049:function(n,e,r){r.d(e,{mP:function(){return x},AU:function(){return g},in:function(){return b}});var t=r(42982),u=r(70885),o=r(54385),i=r(5008),a=r.n(i),c=r(72791),l=r(33017);function s(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.fI;if(n&&!e)return!1;if(e&&!n)return!0;if(n&&e){if(n.tradeType!==e.tradeType||!(0,o.KA)(n.inputAmount.currency,e.inputAmount.currency)||!(0,o.KA)(e.outputAmount.currency,e.outputAmount.currency))throw new Error("Trades are not comparable");return r.equalTo(l.fI)?n.executionPrice.lessThan(e.executionPrice):n.executionPrice.raw.multiply(r.add(l.yC)).lessThan(e.executionPrice)}}var d=r(23529),f=r(86047),v=r(53413),p=r(176),m=r(65200);function h(n,e){var r=(0,f.Z)().chainId,o=r?[(0,p.pu)(n,r),(0,p.pu)(e,r)]:[void 0,void 0],i=(0,u.Z)(o,2),s=i[0],d=i[1],m=(0,c.useMemo)((function(){var n,e,u,o,i;if(!r)return[];var a=null!==(n=l.lM[r])&&void 0!==n?n:[],c=s&&null!==(e=null===(u=l.ck[r])||void 0===u?void 0:u[s.address])&&void 0!==e?e:[],f=d&&null!==(o=null===(i=l.ck[r])||void 0===i?void 0:i[d.address])&&void 0!==o?o:[];return[].concat((0,t.Z)(a),(0,t.Z)(c),(0,t.Z)(f))}),[r,s,d]),h=(0,c.useMemo)((function(){return a()(m,(function(n){return m.map((function(e){return[n,e]}))}))}),[m]),g=(0,c.useMemo)((function(){return s&&d?[[s,d]].concat((0,t.Z)(m.map((function(n){return[s,n]}))),(0,t.Z)(m.map((function(n){return[d,n]}))),(0,t.Z)(h)).filter((function(n){return Boolean(n[0]&&n[1])})).filter((function(n){var e=(0,u.Z)(n,2),r=e[0],t=e[1];return r.address!==t.address})).filter((function(n){var e=(0,u.Z)(n,2),t=e[0],o=e[1];if(!r)return!0;var i=l.IP[r],a=null===i||void 0===i?void 0:i[t.address],c=null===i||void 0===i?void 0:i[o.address];return!a&&!c||!(a&&!a.find((function(n){return o.equals(n)})))&&!(c&&!c.find((function(n){return t.equals(n)})))})):[]}),[s,d,m,h,r]),b=(0,v.z$)(g);return(0,c.useMemo)((function(){return Object.values(b.filter((function(n){return Boolean(n[0]===v._G.EXISTS&&n[1])})).reduce((function(n,e){var r,t=(0,u.Z)(e,2)[1];return n[t.liquidityToken.address]=null!==(r=n[t.liquidityToken.address])&&void 0!==r?r:t,n}),{}))}),[b])}function g(n,e){var r=h(null===n||void 0===n?void 0:n.currency,e),t=(0,d.RO)(),i=(0,u.Z)(t,1)[0];return(0,c.useMemo)((function(){if(n&&e&&r.length>0){var t;if(i)return null!==(t=o.ho.bestTradeExactIn(r,n,e,{maxHops:1,maxNumResults:1})[0])&&void 0!==t?t:null;for(var u=null,a=1;a<=3;a++){var c,d=null!==(c=o.ho.bestTradeExactIn(r,n,e,{maxHops:a,maxNumResults:1})[0])&&void 0!==c?c:null;s(u,d,l.Ru)&&(u=d)}return u}return null}),[r,n,e,i])}function b(n,e){var r=h(n,null===e||void 0===e?void 0:e.currency),t=(0,d.RO)(),i=(0,u.Z)(t,1)[0];return(0,c.useMemo)((function(){if(n&&e&&r.length>0){var t;if(i)return null!==(t=o.ho.bestTradeExactOut(r,n,e,{maxHops:1,maxNumResults:1})[0])&&void 0!==t?t:null;for(var u=null,a=1;a<=3;a++){var c,d=null!==(c=o.ho.bestTradeExactOut(r,n,e,{maxHops:a,maxNumResults:1})[0])&&void 0!==c?c:null;s(u,d,l.Ru)&&(u=d)}return u}return null}),[n,e,r,i])}function x(n,e){var r=(0,m.l6)(),t=(0,f.Z)().chainId,u=(0,p.pu)(n,t),o=(0,p.pu)(e,t);if(r){if(u&&Object.keys(r).includes(u.address))return!0;if(o&&Object.keys(r).includes(o.address))return!0}return!1}},24822:function(n,e,r){r.d(e,{UK:function(){return x},qL:function(){return y},gv:function(){return k},re:function(){return N}});var t=r(15861),u=r(87757),o=r.n(u),i=r(75422),a=r(54385),c=r(72791),l=r(86047),s=r(17406),d=r(44253),f=r(21705);var v=function(n,e,r){var t=(0,d.Ib)(null===n||void 0===n?void 0:n.address,!1),u=(0,c.useMemo)((function(){return[e,r]}),[e,r]),o=(0,f.Wk)(t,"allowance",u).result;return(0,c.useMemo)((function(){return n&&o?new a.dt(n,o.toString()):void 0}),[n,o])},p=r(8112),m=r(13362),h=r(45260),g=r(78235),b=r(27459),x={UNKNOWN:0,NOT_APPROVED:1,PENDING:2,APPROVED:3};function y(n,e){var r=(0,l.Z)().account,u=(0,b.d)().callWithGasPrice,s=n instanceof a.dt?n.token:void 0,f=v(s,null!==r&&void 0!==r?r:void 0,e),p=(0,m.wB)(null===s||void 0===s?void 0:s.address,e),h=(0,c.useMemo)((function(){return n&&e?n.currency===a.c0?x.APPROVED:f?f.lessThan(n)?p?x.PENDING:x.NOT_APPROVED:x.APPROVED:x.UNKNOWN:x.UNKNOWN}),[n,f,p,e]),y=(0,d.Ib)(null===s||void 0===s?void 0:s.address),N=(0,m.h7)(),k=(0,c.useCallback)((0,t.Z)(o().mark((function r(){var t,a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(h===x.NOT_APPROVED){r.next=3;break}return console.error("approve was called unnecessarily"),r.abrupt("return");case 3:if(s){r.next=6;break}return console.error("no token"),r.abrupt("return");case 6:if(y){r.next=9;break}return console.error("tokenContract is null"),r.abrupt("return");case 9:if(n){r.next=12;break}return console.error("missing amount to approve"),r.abrupt("return");case 12:if(e){r.next=15;break}return console.error("no spender"),r.abrupt("return");case 15:return t=!1,r.next=18,y.estimateGas.approve(e,i.Bz).catch((function(){return t=!0,y.estimateGas.approve(e,n.raw.toString())}));case 18:return a=r.sent,r.abrupt("return",u(y,"approve",[e,t?n.raw.toString():i.Bz],{gasLimit:(0,g.yC)(a)}).then((function(r){N(r,{summary:"Approve ".concat(n.currency.symbol),approval:{tokenAddress:s.address,spender:e}})})).catch((function(n){throw console.error("Failed to approve token",n),n})));case 20:case"end":return r.stop()}}),r)}))),[h,s,y,n,e,N,u]);return[h,k]}function N(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(0,c.useMemo)((function(){return n?(0,h.b5)(n,e)[p.gN.INPUT]:void 0}),[n,e]);return y(r,s.fE)}function k(n,e){var r=(0,l.Z)().account,u=(0,b.d)().callWithGasPrice,s=n?n.liquidityToken:void 0,f=v(s,null!==r&&void 0!==r?r:void 0,e),p=(0,m.wB)(null===s||void 0===s?void 0:s.address,e),h=(0,c.useMemo)((function(){return n&&e?n.currency===a.c0?x.APPROVED:f?parseFloat(f.toFixed(2))<=0?p?x.PENDING:x.NOT_APPROVED:x.APPROVED:x.UNKNOWN:x.UNKNOWN}),[n,f,p,e]),y=(0,d.Ib)(null===s||void 0===s?void 0:s.address),N=(0,m.h7)(),k=(0,c.useCallback)((0,t.Z)(o().mark((function r(){var t,a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(h===x.NOT_APPROVED){r.next=3;break}return console.error("approve was called unnecessarily"),r.abrupt("return");case 3:if(s){r.next=6;break}return console.error("no token"),r.abrupt("return");case 6:if(y){r.next=9;break}return console.error("tokenContract is null"),r.abrupt("return");case 9:if(n){r.next=12;break}return console.error("missing amount to approve"),r.abrupt("return");case 12:if(e){r.next=15;break}return console.error("no spender"),r.abrupt("return");case 15:return t=!1,r.next=18,y.estimateGas.approve(e,i.Bz).catch((function(){return t=!0,y.estimateGas.approve(e,n.raw.toString())}));case 18:return a=r.sent,r.abrupt("return",u(y,"approve",[e,t?n.raw.toString():i.Bz],{gasLimit:(0,g.yC)(a)}).then((function(r){N(r,{summary:"Approve ".concat(n.liquidityToken.symbol),approval:{tokenAddress:s.address,spender:e}})})).catch((function(n){throw console.error("Failed to approve token",n),n})));case 20:case"end":return r.stop()}}),r)}))),[h,s,y,n,e,N,u]);return[h,k]}},27459:function(n,e,r){r.d(e,{d:function(){return d}});var t=r(1413),u=r(42982),o=r(15861),i=r(87757),a=r.n(i),c=r(72791),l=r(763),s=r(23529);function d(){var n=(0,s.Fh)(),e=(0,c.useCallback)(function(){var e=(0,o.Z)(a().mark((function e(r,o){var i,c,s,d,f,v=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=v.length>2&&void 0!==v[2]?v[2]:[],c=v.length>3&&void 0!==v[3]?v[3]:null,s=(0,l.get)(r,o),d=null===c||void 0===c?void 0:c.gasPrice,e.next=6,s.apply(void 0,(0,u.Z)(i).concat([d?(0,t.Z)({},c):(0,t.Z)((0,t.Z)({},c),{},{gasPrice:n})]));case 6:return f=e.sent,e.abrupt("return",f);case 8:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),[n]);return{callWithGasPrice:e}}},53413:function(n,e,r){r.d(e,{_G:function(){return f},z$:function(){return v}});var t=r(70885),u=r(54385),o=r(72791),i=r(96912),a=r(82147),c=r(86047),l=r(21705),s=r(176),d=new a.vU(i.Mt),f={LOADING:0,NOT_EXISTS:1,EXISTS:2,INVALID:3};function v(n){var e=(0,c.Z)().chainId,r=(0,o.useMemo)((function(){return n.map((function(n){var r=(0,t.Z)(n,2),u=r[0],o=r[1];return[(0,s.pu)(u,e),(0,s.pu)(o,e)]}))}),[e,n]),i=(0,o.useMemo)((function(){return r.map((function(n){var e=(0,t.Z)(n,2),r=e[0],o=e[1];return r&&o&&!r.equals(o)?u.sO.getAddress(r,o):void 0}))}),[r]),a=(0,l._Y)(i,d,"getReserves");return(0,o.useMemo)((function(){return a.map((function(n,e){var o=n.result,i=n.loading,a=r[e][0],c=r[e][1];if(i)return[f.LOADING,null];if(!a||!c||a.equals(c))return[f.INVALID,null];if(!o)return[f.NOT_EXISTS,null];var l=o.reserve0,s=o.reserve1,d=a.sortsBefore(c)?[a,c]:[c,a],v=(0,t.Z)(d,2),p=v[0],m=v[1];return[f.EXISTS,new u.sO(new u.dt(p,l.toString()),new u.dt(m,s.toString()))]}))}),[a,r])}},14710:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(72791);r(16030),r(21705),r(44253);var u=r(2257);function o(){var n=1200,e=parseInt(new Date/1e3);return(0,t.useMemo)((function(){if(e)return u.O$.from((e+n).toString())}),[e,n])}},54285:function(n,e,r){r.d(e,{eo:function(){return k},jj:function(){return O},SM:function(){return T},_r:function(){return N},dU:function(){return y}});var t=r(70885),u=r(4942),o=r(19601),i=r(54385),a=r(72791),c=r(16030),l=r(32808),s=r(16871);var d=r(76049),f=r(78235),v=r(45260),p=r(65200),m=r(86047),h=r(34069),g=r(17764),b=r(8112),x=r(23529);function y(){return(0,c.v9)((function(n){return n.swap}))}function N(){var n=(0,c.I0)(),e=(0,a.useCallback)((function(e,r){n((0,b.j)({field:e,currencyId:r?r.address:r===i.c0?"BNB":""}))}),[n]);return{onSwitchTokens:(0,a.useCallback)((function(){n((0,b.KS)())}),[n]),onCurrencySelection:e,onUserInput:(0,a.useCallback)((function(e,r){n((0,b.LC)({field:e,typedValue:r}))}),[n]),onChangeRecipient:(0,a.useCallback)((function(e){n((0,b.He)({recipient:e}))}),[n])}}function k(n,e){if(n&&e)try{var r=(0,o.parseUnits)(n,e.decimals).toString();if("0"!==r)return e instanceof i.WU?new i.dt(e,i.QA.BigInt(r)):i.ih.ether(i.QA.BigInt(r))}catch(t){console.debug('Failed to parse input amount: "'.concat(n,'"'),t)}}var I=["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f","0xf164fC0Ec4E93095b804a4795bBe1e041497b92a","0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"];function w(n,e){return n.route.path.some((function(n){return n.address===e}))||n.route.pairs.some((function(n){return n.liquidityToken.address===e}))}function T(){var n,e,r,o,i,a=(0,m.Z)().account,c=y(),l=c.independentField,s=c.typedValue,N=c[b.gN.INPUT].currencyId,T=c[b.gN.OUTPUT].currencyId,Z=c.recipient,P=(0,p.U8)(N),U=(0,p.U8)(T),C=(0,h.Z)(null!==Z&&void 0!==Z?Z:void 0),O=null!==(r=null===Z?a:C.address)&&void 0!==r?r:null,A=(0,g.K5)(null!==a&&void 0!==a?a:void 0,[null!==P&&void 0!==P?P:void 0,null!==U&&void 0!==U?U:void 0]),M=l===b.gN.INPUT,E=k(s,null!==(o=M?P:U)&&void 0!==o?o:void 0),j=(0,d.AU)(M?E:void 0,null!==U&&void 0!==U?U:void 0),B=(0,d.in)(null!==P&&void 0!==P?P:void 0,M?void 0:E),S=M?j:B,D=(n={},(0,u.Z)(n,b.gN.INPUT,A[0]),(0,u.Z)(n,b.gN.OUTPUT,A[1]),n),L=(e={},(0,u.Z)(e,b.gN.INPUT,null!==P&&void 0!==P?P:void 0),(0,u.Z)(e,b.gN.OUTPUT,null!==U&&void 0!==U?U:void 0),e);a||(i="Connect Wallet"),E||(i=null!==i&&void 0!==i?i:"Enter an amount"),L[b.gN.INPUT]&&L[b.gN.OUTPUT]||(i=null!==i&&void 0!==i?i:"Select a token");var G=(0,f.UJ)(O);O&&G?(-1!==I.indexOf(G)||j&&w(j,G)||B&&w(B,G))&&(i=null!==i&&void 0!==i?i:"Invalid recipient"):i=null!==i&&void 0!==i?i:"Enter a recipient";var W=(0,x.$2)(),z=(0,t.Z)(W,1)[0],R=S&&z&&(0,v.b5)(S,z),F=[D[b.gN.INPUT],R?R[b.gN.INPUT]:null],V=F[0],_=F[1];return V&&_&&V.lessThan(_)&&(i="Insufficient ".concat(_.currency.symbol," balance")),{currencies:L,currencyBalances:D,parsedAmount:E,v2Trade:null!==S&&void 0!==S?S:void 0,inputError:i}}function Z(n){if("string"===typeof n){var e=(0,f.UJ)(n);if(e)return e;if("BNB"===n.toUpperCase())return"BNB";if(!1===e)return"BNB"}return"BNB"}var P=/^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,U=/^0x[a-fA-F0-9]{40}$/;function C(n){var e,r=Z(n.inputCurrency),t=Z(n.outputCurrency);r===t&&("string"===typeof n.outputCurrency?r="":t="");var o,i=function(n){return"string"!==typeof n?null:(0,f.UJ)(n)||(P.test(n)||U.test(n)?n:null)}(n.recipient);return e={},(0,u.Z)(e,b.gN.INPUT,{currencyId:r}),(0,u.Z)(e,b.gN.OUTPUT,{currencyId:t}),(0,u.Z)(e,"typedValue","string"!==typeof(o=n.exactAmount)||isNaN(parseFloat(o))?"":o),(0,u.Z)(e,"independentField",function(n){return"string"===typeof n&&"output"===n.toLowerCase()?b.gN.OUTPUT:b.gN.INPUT}(n.exactField)),(0,u.Z)(e,"recipient",i),e}function O(){var n=(0,m.Z)().chainId,e=(0,c.I0)(),r=function(){var n=(0,s.TH)().search;return(0,a.useMemo)((function(){return n&&n.length>1?(0,l.parse)(n,{parseArrays:!1,ignoreQueryPrefix:!0}):{}}),[n])}(),u=(0,a.useState)(),o=(0,t.Z)(u,2),i=o[0],d=o[1];return(0,a.useEffect)((function(){if(n){var t=C(r);e((0,b.mV)({typedValue:t.typedValue,field:t.independentField,inputCurrencyId:t[b.gN.INPUT].currencyId,outputCurrencyId:t[b.gN.OUTPUT].currencyId,recipient:null})),d({inputCurrencyId:t[b.gN.INPUT].currencyId,outputCurrencyId:t[b.gN.OUTPUT].currencyId})}}),[e,n]),i}},13362:function(n,e,r){r.d(e,{h7:function(){return a},wB:function(){return l}});var t=r(72791),u=r(16030),o=r(86047),i=r(82355);function a(){var n=(0,o.Z)(),e=n.chainId,r=n.account,a=(0,u.I0)();return(0,t.useCallback)((function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=t.summary,o=t.approval,c=t.claim;if(r&&e){var l=n.hash;if(!l)throw Error("No transaction hash found.");a((0,i.dT)({hash:l,from:r,chainId:e,approval:o,summary:u,claim:c}))}}),[a,e,r])}function c(){var n,e=(0,o.Z)().chainId,r=(0,u.v9)((function(n){return n.transactions}));return e&&null!==(n=r[e])&&void 0!==n?n:{}}function l(n,e){var r=c();return(0,t.useMemo)((function(){return"string"===typeof n&&"string"===typeof e&&Object.keys(r).some((function(t){var u=r[t];if(!u)return!1;if(u.receipt)return!1;var o=u.approval;return!!o&&(o.spender===e&&o.tokenAddress===n&&function(n){return(new Date).getTime()-n.addedTime<864e5}(u))}))}),[r,e,n])}},23529:function(n,e,r){r.d(e,{$2:function(){return g},B3:function(){return y},Ce:function(){return x},DG:function(){return m},Fh:function(){return b},LO:function(){return p},RO:function(){return h}});var t=r(70885),u=r(54385),o=r(5008),i=r.n(o),a=r(72791),c=r(16030),l=r(33017),s=r(86047),d=r(65200),f=r(17290),v=r(23224);function p(){return(0,c.v9)((function(n){return n.user.userExpertMode}))}function m(){var n=(0,c.I0)(),e=p(),r=(0,a.useCallback)((function(){n((0,f.zv)({userExpertMode:!e}))}),[e,n]);return[e,r]}function h(){var n=(0,c.I0)();return[(0,c.v9)((function(n){return n.user.userSingleHopOnly})),(0,a.useCallback)((function(e){n((0,f.fO)({userSingleHopOnly:e}))}),[n])]}function g(){var n=(0,c.I0)();return[(0,c.v9)((function(n){return n.user.userSlippageTolerance})),(0,a.useCallback)((function(e){n((0,f.rQ)({userSlippageTolerance:e}))}),[n])]}function b(){var n=(0,c.v9)((function(n){return n.user.gasPrice}));return"97"===u.a_.MAINNET.toString()?n:v.j4.testnet}function x(n){var e=(0,t.Z)(n,2),r=e[0],o=e[1];return new u.WU(r.chainId,u.sO.getAddress(r,o),18,"UDE-LP","UDEGO LPs")}function y(){var n=(0,s.Z)().chainId,e=(0,d.e_)(),r=(0,a.useMemo)((function(){var e;return n&&null!==(e=l.Q8[n])&&void 0!==e?e:[]}),[n]),u=(0,a.useMemo)((function(){return n?i()(Object.keys(e),(function(r){var t,u=e[r];return(null!==(t=l.xu[n])&&void 0!==t?t:[]).map((function(n){return n.address===u.address?null:[n,u]})).filter((function(n){return null!==n}))})):[]}),[e,n]),o=(0,c.v9)((function(n){return n.user.pairs})),f=(0,a.useMemo)((function(){if(!n||!o)return[];var e=o[n];return e?Object.keys(e).map((function(n){return[(0,v.iG)(e[n].token0),(0,v.iG)(e[n].token1)]})):[]}),[o,n]),p=(0,a.useMemo)((function(){return f.concat(u).concat(r)}),[u,r,f]);return(0,a.useMemo)((function(){var n=p.reduce((function(n,e){var r=(0,t.Z)(e,2),u=r[0],o=r[1],i=u.sortsBefore(o),a=i?"".concat(u.address,":").concat(o.address):"".concat(o.address,":").concat(u.address);return n[a]||(n[a]=i?[u,o]:[o,u]),n}),{});return Object.keys(n).map((function(e){return n[e]}))}),[p])}},17764:function(n,e,r){r.d(e,{K5:function(){return f},_h:function(){return v},mM:function(){return d},v2:function(){return l}});var t=r(54385),u=r(72791),o=(r(75910),r(76659)),i=(r(65200),r(44253)),a=r(78235),c=r(21705);function l(n,e){var r=(0,u.useMemo)((function(){var n;return null!==(n=null===e||void 0===e?void 0:e.filter((function(n){return!1!==(0,a.UJ)(null===n||void 0===n?void 0:n.address)})))&&void 0!==n?n:[]}),[e]),i=(0,u.useMemo)((function(){return r.map((function(n){return n.address}))}),[r]),l=(0,c._Y)(i,o.ZP,"balanceOf",[n]),s=(0,u.useMemo)((function(){return l.some((function(n){return n.loading}))}),[l]);return[(0,u.useMemo)((function(){return n&&r.length>0?r.reduce((function(n,e,r){var u,o,i=null===l||void 0===l||null===(u=l[r])||void 0===u||null===(o=u.result)||void 0===o?void 0:o[0],a=i?t.QA.BigInt(i.toString()):void 0;return a&&(n[e.address]=new t.dt(e,a)),n}),{}):{}}),[n,r,l]),s]}function s(n,e){return l(n,e)[0]}function d(n,e){var r=s(n,[e]);if(e)return r[e.address]}function f(n,e){var r=(0,u.useMemo)((function(){var n;return null!==(n=null===e||void 0===e?void 0:e.filter((function(n){return!0})))&&void 0!==n?n:[]}),[e]),o=s(n,r),l=function(n){var e=(0,i.gq)(),r=(0,u.useMemo)((function(){return n?n.map(a.UJ).filter((function(n){return!1!==n})).sort():[]}),[n]),o=(0,c.es)(e,"getEthBalance",r.map((function(n){return[n]})));return(0,u.useMemo)((function(){return r.reduce((function(n,e,r){var u,i,a=null===(i=null===(u=null===o||void 0===o?void 0:o[r])||void 0===u?void 0:u.result)||void 0===i?void 0:i[0];return a&&(n[e]=t.ih.ether(t.QA.BigInt(a.toString()))),n}),{})}),[r,o])}((0,u.useMemo)((function(){var n;return null!==(n=null===e||void 0===e?void 0:e.some((function(n){return n&&"BNB"===n.name})))&&void 0!==n&&n}),[e])?[n]:[]);return(0,u.useMemo)((function(){var r;return null!==(r=null===e||void 0===e?void 0:e.map((function(e){if(n&&e)return"BNB"===e.name?l[n]:e?o[e.address]:void 0})))&&void 0!==r?r:[]}),[n,e,l,o])}function v(n,e){return f(n,[e])[0]}},41177:function(n,e,r){function t(n){return/^0x0*$/.test(n)}r.d(e,{Z:function(){return t}})},74004:function(n,e,r){r.d(e,{i:function(){return o}});var t=r(54385),u=r(33017);function o(n){if(n)return n.currency===t.c0?t.QA.greaterThan(n.raw,u.Uz)?t.ih.ether(t.QA.subtract(n.raw,u.Uz)):t.ih.ether(t.QA.BigInt(0)):n}},45260:function(n,e,r){r.d(e,{U7:function(){return d},b5:function(){return f},oX:function(){return v}});var t=r(4942),u=r(54385),o=r(33017),i=r(8112),a=r(78235),c=new u.gG(u.QA.BigInt(25),u.QA.BigInt(1e4)),l=new u.gG(u.QA.BigInt(1e4),u.QA.BigInt(1e4)),s=l.subtract(c);function d(n){var e=n?l.subtract(n.route.pairs.reduce((function(n){return n.multiply(s)}),l)):void 0,r=n&&e?n.priceImpact.subtract(e):void 0;return{priceImpactWithoutFee:r?new u.gG(null===r||void 0===r?void 0:r.numerator,null===r||void 0===r?void 0:r.denominator):void 0,realizedLPFee:e&&n&&(n.inputAmount instanceof u.dt?new u.dt(n.inputAmount.token,e.multiply(n.inputAmount.raw).quotient):u.ih.ether(e.multiply(n.inputAmount.raw).quotient))}}function f(n,e){var r,u=(0,a.P4)(e);return r={},(0,t.Z)(r,i.gN.INPUT,null===n||void 0===n?void 0:n.maximumAmountIn(u)),(0,t.Z)(r,i.gN.OUTPUT,null===n||void 0===n?void 0:n.minimumAmountOut(u)),r}function v(n){return(null===n||void 0===n?void 0:n.lessThan(o.lN))?(null===n||void 0===n?void 0:n.lessThan(o.Uf))?(null===n||void 0===n?void 0:n.lessThan(o.p9))?(null===n||void 0===n?void 0:n.lessThan(o.Bz))?0:1:2:3:4}},176:function(n,e,r){r.d(e,{Bv:function(){return i},N:function(){return o},pu:function(){return u}});var t=r(54385);function u(n,e){return e&&n===t.c0?t.DX[e]:n instanceof t.WU?n:void 0}function o(n,e){var r=n&&e?u(n.currency,e):void 0;return r&&n?new t.dt(r,n.raw):void 0}function i(n){return n.equals(t.DX[n.chainId])?t.c0:n}}}]);
//# sourceMappingURL=910.429560c2.chunk.js.map