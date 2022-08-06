"use strict";(self.webpackChunkmetapledefi=self.webpackChunkmetapledefi||[]).push([[360],{35628:function(e,t,n){n.d(t,{Z:function(){return we}});var i=n(74165),o=n(42982),a=n(15861),l=n(1413),r=n(4942),d=n(70885),s=n(72791),c=n(16030),u=n(27712),x=n(2257),v=n(16871),m=n(94942),g=n(35230),h=n(86047),b=n(23529),p=n(65200),f=n(12506),N=n(96912),C=n(17303),y=n(21705),R=n(176),k=new C.vU(N.Mt),j=0,w=1,E=2,Z=3;function U(e,t){return function(e){var t=(0,h.Z)().chainId,n=(0,s.useMemo)((function(){return e.map((function(e){var n=(0,d.Z)(e,2),i=n[0],o=n[1];return[(0,R.pu)(i,t),(0,R.pu)(o,t)]}))}),[t,e]),i=(0,s.useMemo)((function(){return n.map((function(e){var t=(0,d.Z)(e,2),n=t[0],i=t[1];return n&&i&&!n.equals(i)?u.sO.getAddress(n,i):void 0}))}),[n]),o=(0,y._Y)(i,k,"getReserves");return(0,s.useMemo)((function(){return o.map((function(e,t){var i=e.result,o=e.loading,a=n[t][0],l=n[t][1];if(o)return[j,null];if(!a||!l||a.equals(l))return[Z,null];if(!i)return[w,null];var r=i.reserve0,s=i.reserve1,c=a.sortsBefore(l)?[a,l]:[l,a],x=(0,d.Z)(c,2),v=x[0],m=x[1];return[E,new u.sO(new u.dt(v,r.toString()),new u.dt(m,s.toString()))]}))}),[o,n])}([[e,t]])[0]}var _=n(44253);var A=function(e){var t,n,i=(0,_.Ib)(null===e||void 0===e?void 0:e.address,!1),o=null===(t=(0,y.Wk)(i,"totalSupply"))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0];return e&&o?new u.dt(e,o.toString()):void 0},Y=n(54285),P=n(17764),S=n(78235),B=u.QA.BigInt(0);function T(){return(0,c.v9)((function(e){return e.mint}))}var I=n(14710),q=n(74004),L=n(24822),M=n(13362),V=n(17406);function O(e){if(e===u.c0)return"BNB";if(e)return e.address;throw new Error("invalid currency")}var D,K=n(76049),F=n(53413),G=n(30168),H=n(17691).ZP.span(D||(D=(0,G.Z)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]))),Q=n(33017),W=n(70316),z=n(77904),$=n(31767),X=n(80184);function J(e){var t,n,i,o=e.currency,a=e.item,l=e.selectedToken,r=e.tokenSelected,d=(0,h.Z)().account,s=(0,P._h)(null!==d&&void 0!==d?d:void 0,null!==o&&void 0!==o?o:void 0);return(0,X.jsxs)("a",{href:"javascript:void(0);",onClick:function(){r(a)},disabled:(null===l||void 0===l||null===(t=l.address)||void 0===t?void 0:t.toLowerCase())===(null===a||void 0===a||null===(n=a.address)||void 0===n?void 0:n.toLowerCase()),className:"tokens-list-item p-3 border-b last:border-b-0 border-gray-100 border-opacity-10 flex flex-row items-center justify-between hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-25",children:[(0,X.jsxs)("div",{className:"token-info flex flex-row items-center justify-start",children:[(0,X.jsx)("div",{className:"tokan-icon mr-2",children:(0,X.jsx)("img",{src:"".concat(null===a||void 0===a?void 0:a.tokenImg,"?w=248&fit=crop&auto=format"),width:32,alt:""})}),(0,X.jsxs)("div",{className:"tokan-info",children:[(0,X.jsx)("div",{className:"text-black dark:text-white text-sm font-semibold mb-1",children:null===a||void 0===a?void 0:a.name}),(0,X.jsx)("div",{className:"text-black dark:text-white text-opacity-50 text-xs",children:null===a||void 0===a?void 0:a.symbol})]})]}),(0,X.jsx)("div",{className:"flex flex-row items-center justify-end",children:(0,X.jsx)("div",{className:"text-black dark:text-white text-opacity-50 text-2sm mr-2",children:"".concat(null!==(i=null===s||void 0===s?void 0:s.toSignificant(6))&&void 0!==i?i:"Loading")})})]},null===a||void 0===a?void 0:a.address)}var ee=n(98823),te=RegExp("^\\d*(?:\\\\[.])?\\d*$");function ne(e){var t,n=e.tokenSymbol,i=void 0===n?"bnb":n,o=(e.isMax,e.tokenAddress),a=void 0===o?"":o,l=e.label,r=void 0===l?"":l,c=(e.placeHolder,e.inputValue),u=void 0===c?"":c,x=e.onInputChange,v=void 0===x?null:x,m=e.onItemChange,g=void 0===m?null:m,b=e.tokenImg,p=void 0===b?"./tokens/bnb.png":b,f=(e.showApprove,e.onApprove,e.approveText,e.onMax,e.selectedToken),N=(e.isDisabled,(0,s.useState)(i)),C=(0,d.Z)(N,2),y=(C[0],C[1]),R=(0,s.useState)(p),k=(0,d.Z)(R,2),j=(k[0],k[1]),w=(0,s.useState)(a),E=(0,d.Z)(w,2),Z=(E[0],E[1]),U=(0,h.Z)().account,_=(0,s.useState)(!1),A=(0,d.Z)(_,2),Y=A[0],B=A[1],T=(0,z.I0)(),I=(0,z.v9)((function(e){return e.tokens})),q=(I.tokens,I.pooltokens);(0,s.useEffect)((function(){T((0,$.Vr)())}),[T]);var L=function(){B(!1)},M=function(e){j(e.tokenImg),Z(e.address),y(e.symbol),B(!1),g(e)},V=(0,P._h)(null!==U&&void 0!==U?U:void 0,null!==f&&void 0!==f?f:void 0);return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)("div",{className:"token-select-input",children:[(0,X.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,X.jsx)("div",{className:"text-sm text-black dark:text-white text-opacity-50 hover:text-opacity-100 font-semibold",children:r}),(0,X.jsxs)("div",{className:"text-sm text-black dark:text-gray-400 hover:text-indigo-500 dark:hover:text-white",children:["Balance: ",null!==(t=null===V||void 0===V?void 0:V.toSignificant(6))&&void 0!==t?t:"Loading"]})]}),(0,X.jsxs)("div",{className:"token-row flex flex-row items-center justify-between my-2",children:[(0,X.jsxs)("button",{className:"select-source-token token-row flex flex-row items-center justify-start",onClick:function(){B(!0)},children:[(0,X.jsx)("div",{className:"tokan-icon mr-2 w-6",children:(0,X.jsx)(ee.Z,{currency:f})}),(0,X.jsx)("div",{className:"token-name text-2sm text-black dark:text-white font-semibold mt-1",children:(f&&f.symbol&&f.symbol.length>20?"".concat(f.symbol.slice(0,4),"...").concat(f.symbol.slice(f.symbol.length-5,f.symbol.length)):null===f||void 0===f?void 0:f.symbol)||"Select"}),(0,X.jsx)("i",{className:"las la-angle-down ml-2 text-black dark:text-white"})]}),(0,X.jsx)("div",{className:"tokan-input",children:(0,X.jsx)("input",{className:"bg-transparent border-0 p-0 bg-gray-100 w-full outline-none text-sm appearance-none",inputMode:"decimal",maxLength:18,pattern:"^[0-9]*[.,]?[0-9]*$","x-inputmode":"decimal",tabIndex:0,defaultValue:1,type:"text",fullWidth:!0,value:u,variant:"filled",label:r,placeholder:"0.0",title:r,onInput:function(e){var t;(""===(t=e.target.value.replace(/,/g,"."))||te.test((0,S.hr)(t)))&&v(t)}})})]})]}),Y?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3",children:(0,X.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-xl",children:(0,X.jsxs)("div",{className:"border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white dark:bg-indigo-900 outline-none focus:outline-none",children:[(0,X.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 dark:border-gray-100 dark:border-opacity-10 rounded-t",children:[(0,X.jsx)("h3",{className:"text-lg font-semibold",children:"Select a Token"}),(0,X.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-40 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:L,children:(0,X.jsx)("span",{className:"bg-transparent text-black dark:text-white hover:text-indigo-600 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),(0,X.jsx)("div",{className:"relative p-6 flex-auto",children:(0,X.jsx)("div",{className:"rounded-b-3xl overflow-hidden",children:(0,X.jsxs)("div",{className:"token-list",children:[!q&&(0,X.jsx)("div",{loading:!0,children:"Loading Token List..."}),null===q||void 0===q?void 0:q.map((function(e){return(0,X.jsx)(J,{item:e,tokenSelected:M,selectedToken:f,currency:e},null===e||void 0===e?void 0:e.address)}))]})})}),(0,X.jsx)("div",{className:"flex items-center flex-col justify-end px-6 py-4 border-t border-solid border-blueGray-200 dark:border-gray-100 dark:border-opacity-10 rounded-b",children:(0,X.jsx)("button",{className:"bg-indigo-500 hover:bg-sky-600 text-white active:bg-sky-600 font-bold uppercase text-xs w-full px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150",type:"button",onClick:L,children:"Close"})})]})})}),(0,X.jsx)("div",{className:"opacity-75 fixed inset-0 z-40 bg-black backdrop-blur-xl"})]}):null]})}var ie=n(89426),oe=n(46087),ae=n(63366),le=n(87462),re=n(28182),de=n(80163),se=n(55477),ce=n(80920),ue=n(59903),xe=n(34923);function ve(e){return(0,xe.Z)("MuiCardHeader",e)}var me=(0,n(50782).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),ge=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],he=(0,ue.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,le.Z)((n={},(0,r.Z)(n,"& .".concat(me.title),t.title),(0,r.Z)(n,"& .".concat(me.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),be=(0,ue.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),pe=(0,ue.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),fe=(0,ue.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),Ne=s.forwardRef((function(e,t){var n=(0,ce.Z)({props:e,name:"MuiCardHeader"}),i=n.action,o=n.avatar,a=n.className,l=n.component,r=void 0===l?"div":l,d=n.disableTypography,s=void 0!==d&&d,c=n.subheader,u=n.subheaderTypographyProps,x=n.title,v=n.titleTypographyProps,m=(0,ae.Z)(n,ge),g=(0,le.Z)({},n,{component:r,disableTypography:s}),h=function(e){var t=e.classes;return(0,de.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},ve,t)}(g),b=x;null==b||b.type===se.Z||s||(b=(0,X.jsx)(se.Z,(0,le.Z)({variant:o?"body2":"h5",className:h.title,component:"span",display:"block"},v,{children:b})));var p=c;return null==p||p.type===se.Z||s||(p=(0,X.jsx)(se.Z,(0,le.Z)({variant:o?"body2":"body1",className:h.subheader,color:"text.secondary",component:"span",display:"block"},u,{children:p}))),(0,X.jsxs)(he,(0,le.Z)({className:(0,re.Z)(h.root,a),as:r,ref:t,ownerState:g},m,{children:[o&&(0,X.jsx)(be,{className:h.avatar,ownerState:g,children:o}),(0,X.jsxs)(fe,{className:h.content,ownerState:g,children:[b,p]}),i&&(0,X.jsx)(pe,{className:h.action,ownerState:g,children:i})]}))})),Ce=n(61540),ye=n(26483),Re=n(77321);function ke(e){var t=e.pair,n=(0,h.Z)(),o=n.account,l=n.library,r=(0,R.Bv)(t.token0),c=(0,R.Bv)(t.token1),x=(0,s.useState)(!1),v=(0,d.Z)(x,2),m=(v[0],v[1],(0,P.mM)(null!==o&&void 0!==o?o:void 0,t.liquidityToken)),g=A(t.liquidityToken),b=(0,L.gv)(t,V.NU),p=(0,d.Z)(b,2),f=p[0],N=p[1],C=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var n,a,r,d,s,c,u,x,v,m,g,h,b,p;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,W.uN)(V.NU,Re.qV,l.getSigner());case 3:return n=e.sent,e.next=6,(0,W.uN)(t.liquidityToken.address,Re.a2,l.getSigner());case 6:if(a=e.sent,null==n){e.next=42;break}return e.next=10,a.totalSupply();case 10:return r=e.sent,e.next=13,a.token0();case 13:return d=e.sent,e.next=16,a.token1();case 16:return s=e.sent,e.next=19,(0,W.uN)(d,Re.ZP,l.getSigner());case 19:return c=e.sent,e.next=22,(0,W.uN)(s,Re.ZP,l.getSigner());case 22:return u=e.sent,e.next=25,c.balanceOf(a.address);case 25:return x=e.sent,e.next=28,u.balanceOf(a.address);case 28:return v=e.sent,e.next=31,a.balanceOf(o);case 31:return m=e.sent,g=m*x/r,h=m*v/r,(b=m/r)>99.99?b=99.99:b<.01&&(b=.01),e.next=40,n.removeLiquidity(d,s,m,(0,W.KE)(g),(0,W.KE)(h),o,(0,W.fQ)());case 40:p=e.sent,(0,W.B)(p.wait());case 42:e.next=48;break;case 44:e.prev=44,e.t0=e.catch(0),console.log(e.t0),(0,W.x2)(e.t0.data?e.t0.data.message:e.t0.message);case 48:case"end":return e.stop()}}),e,null,[[0,44]])})));return function(){return e.apply(this,arguments)}}(),y=m&&g&&u.QA.greaterThanOrEqual(g.raw,m.raw)?new u.gG(m.raw,g.raw):void 0,k=t&&g&&m&&u.QA.greaterThanOrEqual(g.raw,m.raw)?[t.getLiquidityValue(t.token0,g,m,!1),t.getLiquidityValue(t.token1,g,m,!1)]:[void 0,void 0],j=(0,d.Z)(k,2),w=j[0],E=j[1];return parseFloat(m.toSignificant(18))>0&&(0,X.jsx)(ie.ZP,{item:!0,xs:12,md:12,sx:{textAlign:"center"},children:(0,X.jsxs)(oe.Z,{children:[(0,X.jsx)(Ne,{title:"Pool Details",subheader:"Pool balances in your wallet"}),(0,X.jsxs)(Ce.Z,{children:[(0,X.jsxs)(ie.ZP,{container:!0,spacing:1,children:[(0,X.jsx)(ie.ZP,{item:!0,xs:6,md:6,children:r&&c?"".concat(r.symbol,"/").concat(c.symbol," LPs"):(0,X.jsx)(H,{children:"Loading"})}),(0,X.jsx)(ie.ZP,{item:!0,xs:6,md:6,children:(0,X.jsx)("b",{children:null===m||void 0===m?void 0:m.toSignificant(4)})})]}),(0,X.jsxs)(ie.ZP,{container:!0,spacing:1,children:[(0,X.jsxs)(ie.ZP,{item:!0,xs:6,md:6,children:[r.symbol," Tokens"]}),(0,X.jsx)(ie.ZP,{item:!0,xs:6,md:6,children:(0,X.jsx)("b",{children:w?null===w||void 0===w?void 0:w.toSignificant(6):"-"})})]}),(0,X.jsxs)(ie.ZP,{container:!0,spacing:1,children:[(0,X.jsxs)(ie.ZP,{item:!0,xs:6,md:6,children:[c.symbol," Tokens"]}),(0,X.jsx)(ie.ZP,{item:!0,xs:6,md:6,children:(0,X.jsx)("b",{children:E?null===E||void 0===E?void 0:E.toSignificant(6):"-"})})]}),(0,X.jsxs)(ie.ZP,{container:!0,spacing:1,children:[(0,X.jsx)(ie.ZP,{item:!0,xs:6,md:6,children:"Pool Shares"}),(0,X.jsx)(ie.ZP,{item:!0,xs:6,md:6,children:(0,X.jsx)("b",{style:{color:"green"},children:y?"".concat("0.00"===y.toFixed(2)?"<0.01":y.toFixed(2),"%"):"-"})})]}),(0,X.jsxs)(ie.ZP,{container:!0,spacing:1,children:[(0,X.jsx)(ie.ZP,{item:!0,xs:6,md:6,children:(0,X.jsx)(ye.Z,{variant:"contained",fullWidth:!0,sx:{maxWidth:620,borderRadius:25},onClick:N,size:"large",disabled:f===L.UK.APPROVED,children:"Approve to Remove"})}),(0,X.jsx)(ie.ZP,{item:!0,xs:6,md:6,children:(0,X.jsx)(ye.Z,{variant:"contained",color:"error",onClick:C,fullWidth:!0,sx:{maxWidth:620,borderRadius:25},size:"large",disabled:f!==L.UK.APPROVED||parseFloat(m.toFixed(2))<=0,children:"Remove Liquidity"})})]})]})]})})}var je=n(72479);function we(){var e,t,n,N,C,y,k,j,E,_,D,G,z,$,J,ee,te,ie,oe,ae=s.useState(!1),le=(0,d.Z)(ae,2),re=le[0],de=le[1],se=(0,h.Z)(),ce=se.account,ue=se.chainId,xe=se.library,ve=((0,v.s0)(),(0,c.I0)()),me=(0,b.Fh)(),ge=(0,s.useState)(""),he=(0,d.Z)(ge,2),be=he[0],pe=he[1],fe=(0,s.useState)(""),Ne=(0,d.Z)(fe,2),Ce=Ne[0],ye=Ne[1],Re=(0,p.U8)(be),we=(0,p.U8)(Ce);(0,s.useEffect)((function(){be||Ce||ve((0,f.dA)())}),[ve,be,Ce]);Boolean(ue&&(Re&&(0,u.KA)(Re,u.DX[ue])||we&&(0,u.KA)(we,u.DX[ue]))),(0,b.LO)();var Ee=T(),Ze=Ee.independentField,Ue=Ee.typedValue,_e=Ee.otherTypedValue,Ae=function(e,t){var n,i=(0,h.Z)(),o=i.account,a=i.chainId,l=T(),c=l.independentField,x=l.typedValue,v=l.otherTypedValue,m=c===f.gN.CURRENCY_A?f.gN.CURRENCY_B:f.gN.CURRENCY_A,g=(0,s.useMemo)((function(){var n;return n={},(0,r.Z)(n,f.gN.CURRENCY_A,null!==e&&void 0!==e?e:void 0),(0,r.Z)(n,f.gN.CURRENCY_B,null!==t&&void 0!==t?t:void 0),n}),[e,t]),b=U(g[f.gN.CURRENCY_A],g[f.gN.CURRENCY_B]),p=(0,d.Z)(b,2),N=p[0],C=p[1];console.log(C);var y,k=A(null===C||void 0===C?void 0:C.liquidityToken),j=N===w||Boolean(k&&u.QA.equal(k.raw,B)),E=(0,P.K5)(null!==o&&void 0!==o?o:void 0,[g[f.gN.CURRENCY_A],g[f.gN.CURRENCY_B]]),_=(n={},(0,r.Z)(n,f.gN.CURRENCY_A,E[0]),(0,r.Z)(n,f.gN.CURRENCY_B,E[1]),n),I=(0,Y.eo)(x,g[c]),q=(0,s.useMemo)((function(){if(j)return v&&g[m]?(0,Y.eo)(v,g[m]):void 0;if(I){var n=(0,R.N)(I,a),i=[(0,R.pu)(e,a),(0,R.pu)(t,a)],o=i[0],l=i[1];try{if(o&&l&&n&&C){var r=m===f.gN.CURRENCY_B?t:e,d=m===f.gN.CURRENCY_B?C.priceOf(o).quote(n):C.priceOf(l).quote(n);return r===u.c0?u.ih.ether(d.raw):d}}catch(s){return}}}),[j,v,g,m,I,e,a,t,C]),L=(0,s.useMemo)((function(){var e;return e={},(0,r.Z)(e,f.gN.CURRENCY_A,c===f.gN.CURRENCY_A?I:q),(0,r.Z)(e,f.gN.CURRENCY_B,c===f.gN.CURRENCY_A?q:I),e}),[q,I,c]),M=(0,s.useMemo)((function(){if(j){var t=L[f.gN.CURRENCY_A],n=L[f.gN.CURRENCY_B];return t&&n?new u.tA(t.currency,n.currency,t.raw,n.raw):void 0}var i=(0,R.pu)(e,a);return C&&i?C.priceOf(i):void 0}),[a,e,j,C,L]),V=(0,s.useMemo)((function(){var e=L[f.gN.CURRENCY_A],t=L[f.gN.CURRENCY_B];(0,R.N)(e,a),(0,R.N)(t,a)}),[L,a,C,k]),O=(0,s.useMemo)((function(){if(V&&k)return new u.gG(V.raw,k.add(V).raw)}),[V,k]);o||(y="Connect Wallet"),N===Z&&(y=null!==y&&void 0!==y?y:"Invalid pair"),L[f.gN.CURRENCY_A]&&L[f.gN.CURRENCY_B]||(y=null!==y&&void 0!==y?y:"Enter an amount");var D,K,F=L[f.gN.CURRENCY_A],G=L[f.gN.CURRENCY_B];return F&&null!==_&&void 0!==_&&_[f.gN.CURRENCY_A]&&(0,S.Qj)(null===_||void 0===_?void 0:_[f.gN.CURRENCY_A],F)&&(y="Insufficient ".concat(null===(D=g[f.gN.CURRENCY_A])||void 0===D?void 0:D.symbol," balance")),G&&null!==_&&void 0!==_&&_[f.gN.CURRENCY_B]&&(0,S.Qj)(null===_||void 0===_?void 0:_[f.gN.CURRENCY_B],G)&&(y="Insufficient ".concat(null===(K=g[f.gN.CURRENCY_B])||void 0===K?void 0:K.symbol," balance")),{dependentField:m,currencies:g,pair:C,pairState:N,currencyBalances:_,parsedAmounts:L,price:M,noLiquidity:j,liquidityMinted:V,poolTokenPercentage:O,error:y}}(null!==Re&&void 0!==Re?Re:void 0,null!==we&&void 0!==we?we:void 0),Ye=Ae.dependentField,Pe=Ae.currencies,Se=(Ae.pair,Ae.pairState),Be=Ae.currencyBalances,Te=Ae.parsedAmounts,Ie=Ae.price,qe=Ae.noLiquidity,Le=(Ae.liquidityMinted,Ae.poolTokenPercentage),Me=Ae.error,Ve=function(e){var t=(0,c.I0)();return{onFieldAInput:(0,s.useCallback)((function(n){t((0,f.LC)({field:f.gN.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[t,e]),onFieldBInput:(0,s.useCallback)((function(n){t((0,f.LC)({field:f.gN.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[t,e])}}(qe),Oe=Ve.onFieldAInput,De=Ve.onFieldBInput,Ke=!Me,Fe=(0,s.useState)(!1),Ge=(0,d.Z)(Fe,2),He=(Ge[0],Ge[1]),Qe=(0,I.Z)(),We=(0,b.$2)(),ze=(0,d.Z)(We,1)[0],$e=(0,s.useState)(""),Xe=(0,d.Z)($e,2),Je=(Xe[0],Xe[1]),et=(n={},(0,r.Z)(n,Ze,Ue),(0,r.Z)(n,Ye,qe?_e:null!==(e=null===(t=Te[Ye])||void 0===t?void 0:t.toSignificant(6))&&void 0!==e?e:""),n),tt=[f.gN.CURRENCY_A,f.gN.CURRENCY_B].reduce((function(e,t){return(0,l.Z)((0,l.Z)({},e),{},(0,r.Z)({},t,(0,q.i)(Be[t])))}),{}),nt=[f.gN.CURRENCY_A,f.gN.CURRENCY_B].reduce((function(e,t){var n;return(0,l.Z)((0,l.Z)({},e),{},(0,r.Z)({},t,tt[t]===(null!==(n=Te[t])&&void 0!==n?n:"0")))}),{}),it=(0,L.qL)(Te[f.gN.CURRENCY_A],V.NU),ot=(0,d.Z)(it,2),at=ot[0],lt=ot[1],rt=(0,L.qL)(Te[f.gN.CURRENCY_B],V.NU),dt=(0,d.Z)(rt,2),st=dt[0],ct=dt[1],ut=(0,M.h7)();function xt(){return(xt=(0,a.Z)((0,i.Z)().mark((function e(){var t,n,a,d,s,c,v,m,g,h,b,p,N,C,y,k;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ue&&xe&&ce){e.next=2;break}return e.abrupt("return");case 2:if(n=(0,S.Bq)(ue,xe,ce),a=Te[f.gN.CURRENCY_A],d=Te[f.gN.CURRENCY_B],a&&d&&Re&&we&&Qe){e.next=6;break}return e.abrupt("return");case 6:return t={},(0,r.Z)(t,f.gN.CURRENCY_A,(0,S.uc)(a,qe?0:ze)[0]),(0,r.Z)(t,f.gN.CURRENCY_B,(0,S.uc)(d,qe?0:ze)[0]),s=t,Re===u.c0||we===u.c0?(p=we===u.c0,c=n.estimateGas.addLiquidityETH,v=n.addLiquidityETH,m=[null!==(h=null===(b=(0,R.pu)(p?Re:we,ue))||void 0===b?void 0:b.address)&&void 0!==h?h:"",(p?a:d).raw.toString(),s[p?f.gN.CURRENCY_A:f.gN.CURRENCY_B].toString(),s[p?f.gN.CURRENCY_B:f.gN.CURRENCY_A].toString(),ce,Qe.toHexString()],g=x.O$.from((p?d:a).raw.toString())):(c=n.estimateGas.addLiquidity,v=n.addLiquidity,m=[null!==(N=null===(C=(0,R.pu)(Re,ue))||void 0===C?void 0:C.address)&&void 0!==N?N:"",null!==(y=null===(k=(0,R.pu)(we,ue))||void 0===k?void 0:k.address)&&void 0!==y?y:"",a.raw.toString(),d.raw.toString(),s[f.gN.CURRENCY_A].toString(),s[f.gN.CURRENCY_B].toString(),ce,Qe.toHexString()],g=null),He(!0),e.next=11,c.apply(void 0,(0,o.Z)(m).concat([g?{value:g}:{}])).then((function(e){return v.apply(void 0,(0,o.Z)(m).concat([(0,l.Z)((0,l.Z)({},g?{value:g}:{}),{},{gasLimit:(0,S.yC)(e),gasPrice:me})])).then((function(e){var t,n,i,o;He(!1),(0,W.B)(e.wait()),ut(e,{summary:"Add ".concat(null===(t=Te[f.gN.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===(n=Pe[f.gN.CURRENCY_A])||void 0===n?void 0:n.symbol," and ").concat(null===(i=Te[f.gN.CURRENCY_B])||void 0===i?void 0:i.toSignificant(3)," ").concat(null===(o=Pe[f.gN.CURRENCY_B])||void 0===o?void 0:o.symbol)}),Je(e.hash),de(!1),Oe("")}))})).catch((function(e){He(!1),(0,W.x2)(e.data?e.data.message:e.message),4001!==(null===e||void 0===e?void 0:e.code)&&console.error(e)}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var vt=(0,s.useCallback)((function(e){var t=O(e);if(t===Ce){var n=Ce;ye(be),pe(n)}else pe(t)}),[Ce,be]),mt=(0,s.useCallback)((function(e){var t=O(e);if(be===t){var n=Ce;ye(be),pe(n)}else ye(t)}),[be,Ce]),gt=((0,K.mP)(null===Pe||void 0===Pe?void 0:Pe.CURRENCY_A,null===Pe||void 0===Pe?void 0:Pe.CURRENCY_B),(0,b.B3)()),ht=(0,s.useMemo)((function(){return gt.map((function(e){return{liquidityToken:(0,b.Ce)(e),tokens:e}}))}),[gt]),bt=(0,s.useMemo)((function(){return ht.map((function(e){return e.liquidityToken}))}),[ht]),pt=(0,P.v2)(null!==ce&&void 0!==ce?ce:void 0,bt),ft=(0,d.Z)(pt,2),Nt=ft[0],Ct=(ft[1],(0,s.useMemo)((function(){return ht.filter((function(e){var t,n=e.liquidityToken;return null===(t=Nt[n.address])||void 0===t?void 0:t.greaterThan("0")}))}),[ht,Nt]),U(Pe[f.gN.CURRENCY_A],Pe[f.gN.CURRENCY_B]));return ce?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)("a",{href:"javascript:;",class:"px-4 py-3 text-center text-xs leading-3 text-white dark:text-black dark:hover:text-white bg-indigo-900 dark:bg-white dark:hover:bg-black rounded-lg w-auto font-medium hover:bg-blue-800 transition-all flex items-center",onClick:function(){return de(!0)},children:[(0,X.jsx)("i",{class:"las la-plus mr-2 text-lg leading-none"}),(0,X.jsx)("span",{children:"Create Pool"})]}),re?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3",children:(0,X.jsx)("div",{className:"relative w-full md:w-1/2 my-6 mx-auto",children:(0,X.jsxs)("div",{className:"border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none",children:[(0,X.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",children:[(0,X.jsx)("h3",{className:"text-lg font-semibold dark:text-white",children:"Create Liquidity Pool"}),(0,X.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-40 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:function(){return de(!1)},children:(0,X.jsx)("span",{className:"bg-transparent text-black dark:text-white hover:text-indigo-600 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),(0,X.jsxs)("div",{className:"relative p-6 flex-auto max-h-[550px] overflow-auto",children:[(0,X.jsxs)("div",{className:"md:grid md:grid-cols-10 gap-5 md:mb-0 mb-5",children:[(0,X.jsxs)("div",{className:"md:col-span-10 2xl:col-span-8",children:[(0,X.jsx)("div",{className:"mb-5 border-2 border-gray-100 border-opacity-50 dark:border-opacity-5 bg-gray-100 dark:bg-gray-200 bg-opacity-50 dark:bg-opacity-5 rounded-md shadow-sm p-3 pb-1",children:(0,X.jsx)(ne,{placeHolder:"Token A Amount",label:"Token A",isMax:!nt[f.gN.CURRENCY_A],tokenAddress:g.ZP.bnb.address,tokenSymbol:"bnb",inputValue:et[f.gN.CURRENCY_A],onInputChange:Oe,onMax:function(){var e,t;Oe(null!==(e=null===(t=tt[f.gN.CURRENCY_A])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"")},showApprove:!1,onItemChange:vt,selectedToken:Pe[f.gN.CURRENCY_A]})}),(0,X.jsx)("div",{className:"mb-5 border-2 border-gray-100 border-opacity-50 dark:border-opacity-5 bg-gray-100 dark:bg-gray-200 bg-opacity-50 dark:bg-opacity-5 rounded-md shadow-sm p-3 pb-1",children:(0,X.jsx)(ne,{placeHolder:"Token B Amount",label:"Token B",isMax:!nt[f.gN.CURRENCY_B],tokenAddress:m.N.mlx,tokenSymbol:"ude",inputValue:et[f.gN.CURRENCY_B],onInputChange:De,onMax:function(){var e,t;De(null!==(e=null===(t=tt[f.gN.CURRENCY_B])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"")},showApprove:!1,onItemChange:mt,selectedToken:Pe[f.gN.CURRENCY_B]})})]}),(0,X.jsx)("div",{className:"md:col-span-10 2xl:col-span-2 text-center",children:(0,X.jsx)("div",{className:"w-32 2xl:w-40 h-32 2xl:h-40 bg-gray-500 rounded-full relative mx-auto overflow-hidden",children:(0,X.jsxs)("div",{className:"w-full h-full absolute top-0 left-0 flex",children:[(0,X.jsx)("div",{className:"w-1/2 h-full bg-blue-400 flex items-center justify-center text-white text-sm font-medium",children:"50%"}),(0,X.jsx)("div",{className:"w-1/2 h-full bg-green-400 flex items-center justify-center text-white text-sm font-medium",children:"50%"})]})})})]}),(0,X.jsx)("div",{children:(0,X.jsx)("div",{gap:"md",children:(at===L.UK.NOT_APPROVED||at===L.UK.PENDING||st===L.UK.NOT_APPROVED||st===L.UK.PENDING)&&Ke&&(0,X.jsxs)("div",{children:[at!==L.UK.APPROVED&&(0,X.jsx)("button",{onClick:lt,disabled:at===L.UK.PENDING,width:st!==L.UK.APPROVED?"48%":"100%",children:at===L.UK.PENDING?(0,X.jsx)(H,{children:"Enabling ".concat(null===(N=Pe[f.gN.CURRENCY_A])||void 0===N?void 0:N.symbol)}):"Enable ".concat(null===(C=Pe[f.gN.CURRENCY_A])||void 0===C?void 0:C.symbol)}),st!==L.UK.APPROVED&&(0,X.jsx)("button",{className:"px-2 py-4 mt-2 text-center text-sm text-white bg-indigo-900 rounded-lg w-full font-medium hover:bg-blue-800 transition-all",onClick:ct,disabled:st===L.UK.PENDING,width:at!==L.UK.APPROVED?"48%":"100%",children:st===L.UK.PENDING?(0,X.jsx)(H,{children:"Enabling ".concat(null===(y=Pe[f.gN.CURRENCY_B])||void 0===y?void 0:y.symbol)}):"Enable ".concat(null===(k=Pe[f.gN.CURRENCY_B])||void 0===k?void 0:k.symbol)})]})})}),(0,X.jsx)("div",{className:"relative mb-5 flex items-center justify-between border-2 border-gray-100 border-opacity-50 dark:border-opacity-0 bg-gray-100 dark:bg-gray-200 bg-opacity-50 dark:bg-opacity-0 rounded-md shadow-sm p-3 pb-1",children:(0,X.jsx)("button",{className:"px-2 py-4 mt-2 text-center text-sm text-white bg-sky-600 rounded-lg w-full font-medium hover:bg-blue-700 transition-all",onClick:function(){return xt.apply(this,arguments)},disabled:!Ke||at!==L.UK.APPROVED||st!==L.UK.APPROVED,children:(0,X.jsx)("span",{children:null!==Me&&void 0!==Me?Me:"Supply Liquidity"})})}),Pe[f.gN.CURRENCY_A]&&Pe[f.gN.CURRENCY_B]&&Se!==F._G.INVALID&&(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-5 md:gap-8 mb-8",children:[(0,X.jsx)("div",{className:"col-span-1 md:col-span-1",children:(0,X.jsx)("div",{className:"px-6 py-6 bg-white dark:bg-opacity-30 rounded-3xl shadow-2xl dark:shadow-xl hover:shadow-3xl transition-all",children:(0,X.jsx)("div",{className:"flex flex-wrap",children:(0,X.jsxs)("div",{className:"w-full md:w-1/2 md:pt-6 mb-3 md:mb-0",children:[(0,X.jsx)("h3",{className:"mb-2 text-2xl font-bold text-white text-center md:text-left",children:(0,X.jsx)("span",{className:"dark:text-white text-indigo-700",children:null!==(j=null===Ie||void 0===Ie?void 0:Ie.toSignificant(6))&&void 0!==j?j:"-"})}),(0,X.jsx)("p",{className:"md:mb-8 text-sm font-medium text-black dark:text-indigo-100 text-center md:text-left",children:"".concat(null!==(E=null===(_=Pe[f.gN.CURRENCY_B])||void 0===_?void 0:_.symbol)&&void 0!==E?E:""," per ").concat(null!==(D=null===(G=Pe[f.gN.CURRENCY_A])||void 0===G?void 0:G.symbol)&&void 0!==D?D:"")})]})})})}),(0,X.jsx)("div",{className:"col-span-1 md:col-span-1",children:(0,X.jsx)("div",{className:"px-6 py-6 bg-white dark:bg-opacity-30 rounded-3xl shadow-2xl dark:shadow-xl hover:shadow-3xl transition-all",children:(0,X.jsx)("div",{className:"flex flex-wrap",children:(0,X.jsxs)("div",{className:"w-full md:w-1/2 md:pt-6 mb-3 md:mb-0",children:[(0,X.jsx)("h3",{className:"mb-2 text-2xl font-bold text-white text-center md:text-left",children:(0,X.jsx)("span",{className:"dark:text-white text-indigo-700",children:null!==(z=null===Ie||void 0===Ie||null===($=Ie.invert())||void 0===$?void 0:$.toSignificant(6))&&void 0!==z?z:"-"})}),(0,X.jsx)("p",{className:"md:mb-8 text-sm font-medium text-black dark:text-indigo-100 text-center md:text-left",children:"".concat(null!==(J=null===(ee=Pe[f.gN.CURRENCY_A])||void 0===ee?void 0:ee.symbol)&&void 0!==J?J:""," per ").concat(null!==(te=null===(ie=Pe[f.gN.CURRENCY_B])||void 0===ie?void 0:ie.symbol)&&void 0!==te?te:"")})]})})})}),(0,X.jsx)("div",{className:"col-span-1 md:col-span-1",children:(0,X.jsx)("div",{className:"px-6 py-6 bg-white dark:bg-opacity-30 rounded-3xl shadow-2xl dark:shadow-xl hover:shadow-3xl transition-all",children:(0,X.jsx)("div",{className:"flex flex-wrap",children:(0,X.jsxs)("div",{className:"w-full md:w-1/2 md:pt-6 mb-3 md:mb-0",children:[(0,X.jsx)("h3",{className:"mb-2 text-2xl font-bold text-white text-center md:text-left",children:(0,X.jsxs)("span",{className:"dark:text-white text-indigo-700",children:[qe&&Ie?"100":null!==(oe=null!==Le&&void 0!==Le&&Le.lessThan(Q.IS)?"<0.01":null===Le||void 0===Le?void 0:Le.toFixed(2))&&void 0!==oe?oe:"0","%"]})}),(0,X.jsx)("p",{className:"md:mb-8 text-sm font-medium text-black dark:text-indigo-100 text-center md:text-left",children:"Share of Pool"})]})})})})]})}),Ct[1]&&(0,X.jsx)(ke,{pair:Ct[1]})]})]})})}),(0,X.jsx)("div",{className:"opacity-75 fixed inset-0 z-40 bg-black backdrop-blur-xl"})]}):null]}):(0,X.jsx)(je.Z,{})}}}]);
//# sourceMappingURL=360.d33ef710.chunk.js.map