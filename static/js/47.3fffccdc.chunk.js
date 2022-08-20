"use strict";(self.webpackChunkmetapledefi=self.webpackChunkmetapledefi||[]).push([[47],{60047:function(e,t,n){n.d(t,{Z:function(){return pe}});var i=n(74165),a=n(42982),l=n(15861),o=n(1413),r=n(4942),d=n(70885),s=n(72791),c=n(16030),u=n(66532),x=n(2257),v=n(16871),m=n(94942),g=n(35230),h=n(86047),b=n(23529),N=n(65200),p=n(12506),f=n(15884),C=n(44253),y=n(21705);var R=function(e){var t,n,i=(0,C.Ib)(null===e||void 0===e?void 0:e.address,!1),a=null===(t=(0,y.Wk)(i,"totalSupply"))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0];return e&&a?new u.dt(e,a.toString()):void 0},k=n(176),j=n(54285),w=n(17764),E=n(78235),U=u.QA.BigInt(0);function Z(){return(0,c.v9)((function(e){return e.mint}))}var _=n(14710),A=n(74004),Y=n(24822),P=n(13362),S=n(17406);function B(e){if(e===u.c0)return"BNB";if(e)return e.address;throw new Error("invalid currency")}var T,I=n(76049),q=n(53413),L=n(30168),O=n(17691).ZP.span(T||(T=(0,L.Z)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]))),V=n(33017),D=n(70316),M=n(77904),K=n(31767),F=n(80184);function G(e){var t,n,i,a=e.currency,l=e.item,o=e.selectedToken,r=e.tokenSelected,d=(0,h.Z)().account,s=(0,w._h)(null!==d&&void 0!==d?d:void 0,null!==a&&void 0!==a?a:void 0);return(0,F.jsxs)("a",{href:"javascript:void(0);",onClick:function(){r(l)},disabled:(null===o||void 0===o||null===(t=o.address)||void 0===t?void 0:t.toLowerCase())===(null===l||void 0===l||null===(n=l.address)||void 0===n?void 0:n.toLowerCase()),className:"tokens-list-item p-3 border-b last:border-b-0 border-gray-100 border-opacity-10 flex flex-row items-center justify-between hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-25",children:[(0,F.jsxs)("div",{className:"token-info flex flex-row items-center justify-start",children:[(0,F.jsx)("div",{className:"tokan-icon mr-2",children:(0,F.jsx)("img",{src:"".concat(null===l||void 0===l?void 0:l.tokenImg,"?w=248&fit=crop&auto=format"),width:32,alt:""})}),(0,F.jsxs)("div",{className:"tokan-info",children:[(0,F.jsx)("div",{className:"text-black dark:text-white text-sm font-semibold mb-1",children:null===l||void 0===l?void 0:l.name}),(0,F.jsx)("div",{className:"text-black dark:text-white text-opacity-50 text-xs",children:null===l||void 0===l?void 0:l.symbol})]})]}),(0,F.jsx)("div",{className:"flex flex-row items-center justify-end",children:(0,F.jsx)("div",{className:"text-black dark:text-white text-opacity-50 text-2sm mr-2",children:"".concat(null!==(i=null===s||void 0===s?void 0:s.toSignificant(6))&&void 0!==i?i:"Loading")})})]},null===l||void 0===l?void 0:l.address)}var H=n(98823),z=RegExp("^\\d*(?:\\\\[.])?\\d*$");function Q(e){var t,n=e.tokenSymbol,i=void 0===n?"bnb":n,a=(e.isMax,e.tokenAddress),l=void 0===a?"":a,o=e.label,r=void 0===o?"":o,c=(e.placeHolder,e.inputValue),u=void 0===c?"":c,x=e.onInputChange,v=void 0===x?null:x,m=e.onItemChange,g=void 0===m?null:m,b=e.tokenImg,N=void 0===b?"./tokens/bnb.png":b,p=(e.showApprove,e.onApprove,e.approveText,e.onMax,e.selectedToken),f=(e.isDisabled,(0,s.useState)(i)),C=(0,d.Z)(f,2),y=(C[0],C[1]),R=(0,s.useState)(N),k=(0,d.Z)(R,2),j=(k[0],k[1]),U=(0,s.useState)(l),Z=(0,d.Z)(U,2),_=(Z[0],Z[1]),A=(0,h.Z)().account,Y=(0,s.useState)(!1),P=(0,d.Z)(Y,2),S=P[0],B=P[1],T=(0,M.I0)(),I=(0,M.v9)((function(e){return e.tokens})),q=(I.tokens,I.pooltokens);(0,s.useEffect)((function(){T((0,K.Vr)())}),[T]);var L=function(){B(!1)},O=function(e){j(e.tokenImg),_(e.address),y(e.symbol),B(!1),g(e)},V=(0,w._h)(null!==A&&void 0!==A?A:void 0,null!==p&&void 0!==p?p:void 0);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("div",{className:"token-select-input",children:[(0,F.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,F.jsx)("div",{className:"text-sm text-black dark:text-white text-opacity-50 hover:text-opacity-100 font-semibold",children:r}),(0,F.jsxs)("div",{className:"text-sm text-black dark:text-gray-400 hover:text-indigo-500 dark:hover:text-white",children:["Balance: ",null!==(t=null===V||void 0===V?void 0:V.toSignificant(6))&&void 0!==t?t:"Loading"]})]}),(0,F.jsxs)("div",{className:"token-row flex flex-row items-center justify-between my-2",children:[(0,F.jsxs)("button",{className:"select-source-token token-row flex flex-row items-center justify-start",onClick:function(){B(!0)},children:[(0,F.jsx)("div",{className:"tokan-icon mr-2 w-6",children:(0,F.jsx)(H.Z,{currency:p})}),(0,F.jsx)("div",{className:"token-name text-2sm text-black dark:text-white font-semibold mt-1",children:(p&&p.symbol&&p.symbol.length>20?"".concat(p.symbol.slice(0,4),"...").concat(p.symbol.slice(p.symbol.length-5,p.symbol.length)):null===p||void 0===p?void 0:p.symbol)||"Select"}),(0,F.jsx)("i",{className:"las la-angle-down ml-2 text-black dark:text-white"})]}),(0,F.jsx)("div",{className:"tokan-input",children:(0,F.jsx)("input",{className:"bg-transparent border-0 p-0 bg-gray-100 w-full outline-none text-sm appearance-none",inputMode:"decimal",maxLength:18,pattern:"^[0-9]*[.,]?[0-9]*$","x-inputmode":"decimal",tabIndex:0,defaultValue:1,type:"text",fullWidth:!0,value:u,variant:"filled",label:r,placeholder:"0.0",title:r,onInput:function(e){var t;(""===(t=e.target.value.replace(/,/g,"."))||z.test((0,E.hr)(t)))&&v(t)}})})]})]}),S?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3",children:(0,F.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-xl",children:(0,F.jsxs)("div",{className:"border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white dark:bg-indigo-900 outline-none focus:outline-none",children:[(0,F.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 dark:border-gray-100 dark:border-opacity-10 rounded-t",children:[(0,F.jsx)("h3",{className:"text-lg font-semibold",children:"Select a Token"}),(0,F.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-40 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:L,children:(0,F.jsx)("span",{className:"bg-transparent text-black dark:text-white hover:text-indigo-600 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),(0,F.jsx)("div",{className:"relative p-6 flex-auto",children:(0,F.jsx)("div",{className:"rounded-b-3xl overflow-hidden",children:(0,F.jsxs)("div",{className:"token-list",children:[!q&&(0,F.jsx)("div",{loading:!0,children:"Loading Token List..."}),null===q||void 0===q?void 0:q.map((function(e){return(0,F.jsx)(G,{item:e,tokenSelected:O,selectedToken:p,currency:e},null===e||void 0===e?void 0:e.address)}))]})})}),(0,F.jsx)("div",{className:"flex items-center flex-col justify-end px-6 py-4 border-t border-solid border-blueGray-200 dark:border-gray-100 dark:border-opacity-10 rounded-b",children:(0,F.jsx)("button",{className:"bg-indigo-500 hover:bg-sky-600 text-white active:bg-sky-600 font-bold uppercase text-xs w-full px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150",type:"button",onClick:L,children:"Close"})})]})})}),(0,F.jsx)("div",{className:"opacity-75 fixed inset-0 z-40 bg-black backdrop-blur-xl"})]}):null]})}var W=n(89426),$=n(46087),X=n(63366),J=n(87462),ee=n(28182),te=n(80163),ne=n(55477),ie=n(80920),ae=n(59903),le=n(34923);function oe(e){return(0,le.Z)("MuiCardHeader",e)}var re=(0,n(50782).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),de=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],se=(0,ae.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,J.Z)((n={},(0,r.Z)(n,"& .".concat(re.title),t.title),(0,r.Z)(n,"& .".concat(re.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),ce=(0,ae.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),ue=(0,ae.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),xe=(0,ae.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),ve=s.forwardRef((function(e,t){var n=(0,ie.Z)({props:e,name:"MuiCardHeader"}),i=n.action,a=n.avatar,l=n.className,o=n.component,r=void 0===o?"div":o,d=n.disableTypography,s=void 0!==d&&d,c=n.subheader,u=n.subheaderTypographyProps,x=n.title,v=n.titleTypographyProps,m=(0,X.Z)(n,de),g=(0,J.Z)({},n,{component:r,disableTypography:s}),h=function(e){var t=e.classes;return(0,te.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},oe,t)}(g),b=x;null==b||b.type===ne.Z||s||(b=(0,F.jsx)(ne.Z,(0,J.Z)({variant:a?"body2":"h5",className:h.title,component:"span",display:"block"},v,{children:b})));var N=c;return null==N||N.type===ne.Z||s||(N=(0,F.jsx)(ne.Z,(0,J.Z)({variant:a?"body2":"body1",className:h.subheader,color:"text.secondary",component:"span",display:"block"},u,{children:N}))),(0,F.jsxs)(se,(0,J.Z)({className:(0,ee.Z)(h.root,l),as:r,ref:t,ownerState:g},m,{children:[a&&(0,F.jsx)(ce,{className:h.avatar,ownerState:g,children:a}),(0,F.jsxs)(xe,{className:h.content,ownerState:g,children:[b,N]}),i&&(0,F.jsx)(ue,{className:h.action,ownerState:g,children:i})]}))})),me=n(61540),ge=n(26483),he=n(77321);function be(e){var t=e.pair,n=(0,h.Z)(),a=n.account,o=n.library,r=(0,k.Bv)(t.token0),c=(0,k.Bv)(t.token1),x=(0,s.useState)(!1),v=(0,d.Z)(x,2),m=(v[0],v[1],(0,w.mM)(null!==a&&void 0!==a?a:void 0,t.liquidityToken)),g=R(t.liquidityToken),b=(0,Y.gv)(t,S.NU),N=(0,d.Z)(b,2),p=N[0],f=N[1],C=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var n,l,r,d,s,c,u,x,v,m,g,h,b,N;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,D.uN)(S.NU,he.qV,o.getSigner());case 3:return n=e.sent,e.next=6,(0,D.uN)(t.liquidityToken.address,he.a2,o.getSigner());case 6:if(l=e.sent,null==n){e.next=42;break}return e.next=10,l.totalSupply();case 10:return r=e.sent,e.next=13,l.token0();case 13:return d=e.sent,e.next=16,l.token1();case 16:return s=e.sent,e.next=19,(0,D.uN)(d,he.ZP,o.getSigner());case 19:return c=e.sent,e.next=22,(0,D.uN)(s,he.ZP,o.getSigner());case 22:return u=e.sent,e.next=25,c.balanceOf(l.address);case 25:return x=e.sent,e.next=28,u.balanceOf(l.address);case 28:return v=e.sent,e.next=31,l.balanceOf(a);case 31:return m=e.sent,g=m*x/r,h=m*v/r,(b=m/r)>99.99?b=99.99:b<.01&&(b=.01),e.next=40,n.removeLiquidity(d,s,m,(0,D.KE)(g),(0,D.KE)(h),a,(0,D.fQ)());case 40:N=e.sent,(0,D.B)(N.wait());case 42:e.next=47;break;case 44:e.prev=44,e.t0=e.catch(0),(0,D.x2)(e.t0.data?e.t0.data.message:e.t0.message);case 47:case"end":return e.stop()}}),e,null,[[0,44]])})));return function(){return e.apply(this,arguments)}}(),y=m&&g&&u.QA.greaterThanOrEqual(g.raw,m.raw)?new u.gG(m.raw,g.raw):void 0,j=t&&g&&m&&u.QA.greaterThanOrEqual(g.raw,m.raw)?[t.getLiquidityValue(t.token0,g,m,!1),t.getLiquidityValue(t.token1,g,m,!1)]:[void 0,void 0],E=(0,d.Z)(j,2),U=E[0],Z=E[1];return parseFloat(m.toSignificant(18))>0&&(0,F.jsx)(W.ZP,{item:!0,xs:12,md:12,sx:{textAlign:"center"},children:(0,F.jsxs)($.Z,{children:[(0,F.jsx)(ve,{title:"Pool Details",subheader:"Pool balances in your wallet"}),(0,F.jsxs)(me.Z,{children:[(0,F.jsxs)(W.ZP,{container:!0,spacing:1,children:[(0,F.jsx)(W.ZP,{item:!0,xs:6,md:6,children:r&&c?"".concat(r.symbol,"/").concat(c.symbol," LPs"):(0,F.jsx)(O,{children:"Loading"})}),(0,F.jsx)(W.ZP,{item:!0,xs:6,md:6,children:(0,F.jsx)("b",{children:null===m||void 0===m?void 0:m.toSignificant(4)})})]}),(0,F.jsxs)(W.ZP,{container:!0,spacing:1,children:[(0,F.jsxs)(W.ZP,{item:!0,xs:6,md:6,children:[r.symbol," Tokens"]}),(0,F.jsx)(W.ZP,{item:!0,xs:6,md:6,children:(0,F.jsx)("b",{children:U?null===U||void 0===U?void 0:U.toSignificant(6):"-"})})]}),(0,F.jsxs)(W.ZP,{container:!0,spacing:1,children:[(0,F.jsxs)(W.ZP,{item:!0,xs:6,md:6,children:[c.symbol," Tokens"]}),(0,F.jsx)(W.ZP,{item:!0,xs:6,md:6,children:(0,F.jsx)("b",{children:Z?null===Z||void 0===Z?void 0:Z.toSignificant(6):"-"})})]}),(0,F.jsxs)(W.ZP,{container:!0,spacing:1,children:[(0,F.jsx)(W.ZP,{item:!0,xs:6,md:6,children:"Pool Shares"}),(0,F.jsx)(W.ZP,{item:!0,xs:6,md:6,children:(0,F.jsx)("b",{style:{color:"green"},children:y?"".concat("0.00"===y.toFixed(2)?"<0.01":y.toFixed(2),"%"):"-"})})]}),(0,F.jsxs)(W.ZP,{container:!0,spacing:1,children:[(0,F.jsx)(W.ZP,{item:!0,xs:6,md:6,children:(0,F.jsx)(ge.Z,{variant:"contained",fullWidth:!0,sx:{maxWidth:620,borderRadius:25},onClick:f,size:"large",disabled:p===Y.UK.APPROVED,children:"Approve to Remove"})}),(0,F.jsx)(W.ZP,{item:!0,xs:6,md:6,children:(0,F.jsx)(ge.Z,{variant:"contained",color:"error",onClick:C,fullWidth:!0,sx:{maxWidth:620,borderRadius:25},size:"large",disabled:p!==Y.UK.APPROVED||parseFloat(m.toFixed(2))<=0,children:"Remove Liquidity"})})]})]})]})})}var Ne=n(72479);function pe(){var e,t,n,C,y,T,L,M,K,G,H,z,W,$,X,J,ee,te,ne,ie=s.useState(!1),ae=(0,d.Z)(ie,2),le=ae[0],oe=ae[1],re=(0,h.Z)(),de=re.account,se=re.chainId,ce=re.library,ue=((0,v.s0)(),(0,c.I0)()),xe=(0,b.Fh)(),ve=(0,s.useState)(""),me=(0,d.Z)(ve,2),ge=me[0],he=me[1],pe=(0,s.useState)(""),fe=(0,d.Z)(pe,2),Ce=fe[0],ye=fe[1],Re=(0,N.U8)(ge),ke=(0,N.U8)(Ce);(0,s.useEffect)((function(){ge||Ce||ue((0,p.dA)())}),[ue,ge,Ce]);Boolean(se&&(Re&&(0,u.KA)(Re,u.DX[se])||ke&&(0,u.KA)(ke,u.DX[se]))),(0,b.LO)();var je=Z(),we=je.independentField,Ee=je.typedValue,Ue=je.otherTypedValue,Ze=function(e,t){var n,i,a=(0,h.Z)(),l=a.account,o=a.chainId,c=Z(),x=c.independentField,v=c.typedValue,m=c.otherTypedValue,g=x===p.gN.CURRENCY_A?p.gN.CURRENCY_B:p.gN.CURRENCY_A,b=(0,s.useMemo)((function(){var n;return n={},(0,r.Z)(n,p.gN.CURRENCY_A,null!==e&&void 0!==e?e:void 0),(0,r.Z)(n,p.gN.CURRENCY_B,null!==t&&void 0!==t?t:void 0),n}),[e,t]),N=(0,f.Oz)(b[p.gN.CURRENCY_A],b[p.gN.CURRENCY_B]),C=(0,d.Z)(N,2),y=C[0],_=C[1],A=R(null===_||void 0===_?void 0:_.liquidityToken),Y=y===f._G.NOT_EXISTS||Boolean(A&&u.QA.equal(A.raw,U)),P=(0,w.K5)(null!==l&&void 0!==l?l:void 0,[b[p.gN.CURRENCY_A],b[p.gN.CURRENCY_B]]),S=(n={},(0,r.Z)(n,p.gN.CURRENCY_A,P[0]),(0,r.Z)(n,p.gN.CURRENCY_B,P[1]),n),B=(0,j.eo)(v,b[x]),T=(0,s.useMemo)((function(){if(Y)return m&&b[g]?(0,j.eo)(m,b[g]):void 0;if(B){var n=(0,k.N)(B,o),i=[(0,k.pu)(e,o),(0,k.pu)(t,o)],a=i[0],l=i[1];try{if(a&&l&&n&&_){var r=g===p.gN.CURRENCY_B?t:e,d=g===p.gN.CURRENCY_B?_.priceOf(a).quote(n):_.priceOf(l).quote(n);return r===u.c0?u.ih.ether(d.raw):d}}catch(s){return}}}),[Y,m,b,g,B,e,o,t,_]),I=(0,s.useMemo)((function(){var e;return e={},(0,r.Z)(e,p.gN.CURRENCY_A,x===p.gN.CURRENCY_A?B:T),(0,r.Z)(e,p.gN.CURRENCY_B,x===p.gN.CURRENCY_A?T:B),e}),[T,B,x]),q=(0,s.useMemo)((function(){if(Y){var t=I[p.gN.CURRENCY_A],n=I[p.gN.CURRENCY_B];return t&&n?new u.tA(t.currency,n.currency,t.raw,n.raw):void 0}var i=(0,k.pu)(e,o);return _&&i?_.priceOf(i):void 0}),[o,e,Y,_,I]),L=(0,s.useMemo)((function(){var e=I[p.gN.CURRENCY_A],t=I[p.gN.CURRENCY_B];(0,k.N)(e,o),(0,k.N)(t,o)}),[I,o,_,A]),O=(0,s.useMemo)((function(){if(L&&A)return new u.gG(L.raw,A.add(L).raw)}),[L,A]);l||(i="Connect Wallet"),y===f._G.INVALID&&(i=null!==i&&void 0!==i?i:"Invalid pair"),I[p.gN.CURRENCY_A]&&I[p.gN.CURRENCY_B]||(i=null!==i&&void 0!==i?i:"Enter an amount");var V,D,M=I[p.gN.CURRENCY_A],K=I[p.gN.CURRENCY_B];return M&&null!==S&&void 0!==S&&S[p.gN.CURRENCY_A]&&(0,E.Qj)(null===S||void 0===S?void 0:S[p.gN.CURRENCY_A],M)&&(i="Insufficient ".concat(null===(V=b[p.gN.CURRENCY_A])||void 0===V?void 0:V.symbol," balance")),K&&null!==S&&void 0!==S&&S[p.gN.CURRENCY_B]&&(0,E.Qj)(null===S||void 0===S?void 0:S[p.gN.CURRENCY_B],K)&&(i="Insufficient ".concat(null===(D=b[p.gN.CURRENCY_B])||void 0===D?void 0:D.symbol," balance")),{dependentField:g,currencies:b,pair:_,pairState:y,currencyBalances:S,parsedAmounts:I,price:q,noLiquidity:Y,liquidityMinted:L,poolTokenPercentage:O,error:i}}(null!==Re&&void 0!==Re?Re:void 0,null!==ke&&void 0!==ke?ke:void 0),_e=Ze.dependentField,Ae=Ze.currencies,Ye=(Ze.pair,Ze.pairState),Pe=Ze.currencyBalances,Se=Ze.parsedAmounts,Be=Ze.price,Te=Ze.noLiquidity,Ie=(Ze.liquidityMinted,Ze.poolTokenPercentage),qe=Ze.error,Le=function(e){var t=(0,c.I0)();return{onFieldAInput:(0,s.useCallback)((function(n){t((0,p.LC)({field:p.gN.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[t,e]),onFieldBInput:(0,s.useCallback)((function(n){t((0,p.LC)({field:p.gN.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[t,e])}}(Te),Oe=Le.onFieldAInput,Ve=Le.onFieldBInput,De=!qe,Me=(0,s.useState)(!1),Ke=(0,d.Z)(Me,2),Fe=(Ke[0],Ke[1]),Ge=(0,_.Z)(),He=(0,b.$2)(),ze=(0,d.Z)(He,1)[0],Qe=(0,s.useState)(""),We=(0,d.Z)(Qe,2),$e=(We[0],We[1]),Xe=(n={},(0,r.Z)(n,we,Ee),(0,r.Z)(n,_e,Te?Ue:null!==(e=null===(t=Se[_e])||void 0===t?void 0:t.toSignificant(6))&&void 0!==e?e:""),n),Je=[p.gN.CURRENCY_A,p.gN.CURRENCY_B].reduce((function(e,t){return(0,o.Z)((0,o.Z)({},e),{},(0,r.Z)({},t,(0,A.i)(Pe[t])))}),{}),et=[p.gN.CURRENCY_A,p.gN.CURRENCY_B].reduce((function(e,t){var n;return(0,o.Z)((0,o.Z)({},e),{},(0,r.Z)({},t,Je[t]===(null!==(n=Se[t])&&void 0!==n?n:"0")))}),{}),tt=(0,Y.qL)(Se[p.gN.CURRENCY_A],S.NU),nt=(0,d.Z)(tt,2),it=nt[0],at=nt[1],lt=(0,Y.qL)(Se[p.gN.CURRENCY_B],S.NU),ot=(0,d.Z)(lt,2),rt=ot[0],dt=ot[1],st=(0,P.h7)();function ct(){return(ct=(0,l.Z)((0,i.Z)().mark((function e(){var t,n,l,d,s,c,v,m,g,h,b,N,f,C,y,R;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(se&&ce&&de){e.next=2;break}return e.abrupt("return");case 2:if(n=(0,E.Bq)(se,ce,de),l=Se[p.gN.CURRENCY_A],d=Se[p.gN.CURRENCY_B],l&&d&&Re&&ke&&Ge){e.next=6;break}return e.abrupt("return");case 6:return t={},(0,r.Z)(t,p.gN.CURRENCY_A,(0,E.uc)(l,Te?0:ze)[0]),(0,r.Z)(t,p.gN.CURRENCY_B,(0,E.uc)(d,Te?0:ze)[0]),s=t,Re===u.c0||ke===u.c0?(N=ke===u.c0,c=n.estimateGas.addLiquidityETH,v=n.addLiquidityETH,m=[null!==(h=null===(b=(0,k.pu)(N?Re:ke,se))||void 0===b?void 0:b.address)&&void 0!==h?h:"",(N?l:d).raw.toString(),s[N?p.gN.CURRENCY_A:p.gN.CURRENCY_B].toString(),s[N?p.gN.CURRENCY_B:p.gN.CURRENCY_A].toString(),de,Ge.toHexString()],g=x.O$.from((N?d:l).raw.toString())):(c=n.estimateGas.addLiquidity,v=n.addLiquidity,m=[null!==(f=null===(C=(0,k.pu)(Re,se))||void 0===C?void 0:C.address)&&void 0!==f?f:"",null!==(y=null===(R=(0,k.pu)(ke,se))||void 0===R?void 0:R.address)&&void 0!==y?y:"",l.raw.toString(),d.raw.toString(),s[p.gN.CURRENCY_A].toString(),s[p.gN.CURRENCY_B].toString(),de,Ge.toHexString()],g=null),Fe(!0),e.next=11,c.apply(void 0,(0,a.Z)(m).concat([g?{value:g}:{}])).then((function(e){return v.apply(void 0,(0,a.Z)(m).concat([(0,o.Z)((0,o.Z)({},g?{value:g}:{}),{},{gasLimit:(0,E.yC)(e),gasPrice:xe})])).then((function(e){var t,n,i,a;Fe(!1),(0,D.B)(e.wait()),st(e,{summary:"Add ".concat(null===(t=Se[p.gN.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===(n=Ae[p.gN.CURRENCY_A])||void 0===n?void 0:n.symbol," and ").concat(null===(i=Se[p.gN.CURRENCY_B])||void 0===i?void 0:i.toSignificant(3)," ").concat(null===(a=Ae[p.gN.CURRENCY_B])||void 0===a?void 0:a.symbol)}),$e(e.hash),oe(!1),Oe("")}))})).catch((function(e){Fe(!1),(0,D.x2)(e.data?e.data.message:e.message),4001!==(null===e||void 0===e?void 0:e.code)&&console.error(e)}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ut=(0,s.useCallback)((function(e){var t=B(e);if(t===Ce){var n=Ce;ye(ge),he(n)}else he(t)}),[Ce,ge]),xt=(0,s.useCallback)((function(e){var t=B(e);if(ge===t){var n=Ce;ye(ge),he(n)}else ye(t)}),[ge,Ce]),vt=((0,I.mP)(null===Ae||void 0===Ae?void 0:Ae.CURRENCY_A,null===Ae||void 0===Ae?void 0:Ae.CURRENCY_B),(0,b.B3)()),mt=(0,s.useMemo)((function(){return vt.map((function(e){return{liquidityToken:(0,b.Ce)(e),tokens:e}}))}),[vt]),gt=(0,s.useMemo)((function(){return mt.map((function(e){return e.liquidityToken}))}),[mt]),ht=(0,w.v2)(null!==de&&void 0!==de?de:void 0,gt),bt=(0,d.Z)(ht,2),Nt=bt[0],pt=(bt[1],(0,s.useMemo)((function(){return mt.filter((function(e){var t,n=e.liquidityToken;return null===(t=Nt[n.address])||void 0===t?void 0:t.greaterThan("0")}))}),[mt,Nt]),(0,f.Oz)(Ae[p.gN.CURRENCY_A],Ae[p.gN.CURRENCY_B]));return de?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("a",{href:"javascript:;",class:"px-4 py-3 text-center text-xs leading-3 text-white dark:text-black dark:hover:text-white bg-indigo-900 dark:bg-white dark:hover:bg-black rounded-lg w-auto font-medium hover:bg-blue-800 transition-all flex items-center",onClick:function(){return oe(!0)},children:[(0,F.jsx)("i",{class:"las la-plus mr-2 text-lg leading-none"}),(0,F.jsx)("span",{children:"Create Pool"})]}),le?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3",children:(0,F.jsx)("div",{className:"relative w-full md:w-1/2 my-6 mx-auto",children:(0,F.jsxs)("div",{className:"border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none",children:[(0,F.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",children:[(0,F.jsx)("h3",{className:"text-lg font-semibold dark:text-white",children:"Create Liquidity Pool"}),(0,F.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-40 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:function(){return oe(!1)},children:(0,F.jsx)("span",{className:"bg-transparent text-black dark:text-white hover:text-indigo-600 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),(0,F.jsxs)("div",{className:"relative p-6 flex-auto max-h-[550px] overflow-auto",children:[(0,F.jsxs)("div",{className:"md:grid md:grid-cols-10 gap-5 md:mb-0 mb-5",children:[(0,F.jsxs)("div",{className:"md:col-span-10 2xl:col-span-8",children:[(0,F.jsx)("div",{className:"mb-5 border-2 border-gray-100 border-opacity-50 dark:border-opacity-5 bg-gray-100 dark:bg-gray-200 bg-opacity-50 dark:bg-opacity-5 rounded-md shadow-sm p-3 pb-1",children:(0,F.jsx)(Q,{placeHolder:"Token A Amount",label:"Token A",isMax:!et[p.gN.CURRENCY_A],tokenAddress:g.ZP.bnb.address,tokenSymbol:"bnb",inputValue:Xe[p.gN.CURRENCY_A],onInputChange:Oe,onMax:function(){var e,t;Oe(null!==(e=null===(t=Je[p.gN.CURRENCY_A])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"")},showApprove:!1,onItemChange:ut,selectedToken:Ae[p.gN.CURRENCY_A]})}),(0,F.jsx)("div",{className:"mb-5 border-2 border-gray-100 border-opacity-50 dark:border-opacity-5 bg-gray-100 dark:bg-gray-200 bg-opacity-50 dark:bg-opacity-5 rounded-md shadow-sm p-3 pb-1",children:(0,F.jsx)(Q,{placeHolder:"Token B Amount",label:"Token B",isMax:!et[p.gN.CURRENCY_B],tokenAddress:m.N.mlx,tokenSymbol:"ude",inputValue:Xe[p.gN.CURRENCY_B],onInputChange:Ve,onMax:function(){var e,t;Ve(null!==(e=null===(t=Je[p.gN.CURRENCY_B])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"")},showApprove:!1,onItemChange:xt,selectedToken:Ae[p.gN.CURRENCY_B]})})]}),(0,F.jsx)("div",{className:"md:col-span-10 2xl:col-span-2 text-center",children:(0,F.jsx)("div",{className:"w-32 2xl:w-40 h-32 2xl:h-40 bg-gray-500 rounded-full relative mx-auto overflow-hidden",children:(0,F.jsxs)("div",{className:"w-full h-full absolute top-0 left-0 flex",children:[(0,F.jsx)("div",{className:"w-1/2 h-full bg-blue-400 flex items-center justify-center text-white text-sm font-medium",children:"50%"}),(0,F.jsx)("div",{className:"w-1/2 h-full bg-green-400 flex items-center justify-center text-white text-sm font-medium",children:"50%"})]})})})]}),(0,F.jsx)("div",{children:(0,F.jsx)("div",{gap:"md",children:(it===Y.UK.NOT_APPROVED||it===Y.UK.PENDING||rt===Y.UK.NOT_APPROVED||rt===Y.UK.PENDING)&&De&&(0,F.jsxs)("div",{children:[it!==Y.UK.APPROVED&&(0,F.jsx)("button",{className:"px-2 py-4 mt-2 text-center text-sm text-white bg-indigo-900 rounded-lg w-full font-medium hover:bg-blue-800 transition-all",onClick:at,disabled:it===Y.UK.PENDING,width:rt!==Y.UK.APPROVED?"48%":"100%",children:it===Y.UK.PENDING?(0,F.jsx)(O,{children:"Enabling ".concat(null===(C=Ae[p.gN.CURRENCY_A])||void 0===C?void 0:C.symbol)}):"Enable ".concat(null===(y=Ae[p.gN.CURRENCY_A])||void 0===y?void 0:y.symbol)}),rt!==Y.UK.APPROVED&&(0,F.jsx)("button",{className:"px-2 py-4 mt-2 text-center text-sm text-white bg-indigo-900 rounded-lg w-full font-medium hover:bg-blue-800 transition-all",onClick:dt,disabled:rt===Y.UK.PENDING,width:it!==Y.UK.APPROVED?"48%":"100%",children:rt===Y.UK.PENDING?(0,F.jsx)(O,{children:"Enabling ".concat(null===(T=Ae[p.gN.CURRENCY_B])||void 0===T?void 0:T.symbol)}):"Enable ".concat(null===(L=Ae[p.gN.CURRENCY_B])||void 0===L?void 0:L.symbol)})]})})}),(0,F.jsx)("div",{className:"relative mb-5 flex items-center justify-between border-2 border-gray-100 border-opacity-50 dark:border-opacity-0 bg-gray-100 dark:bg-gray-200 bg-opacity-50 dark:bg-opacity-0 rounded-md shadow-sm p-3 pb-1",children:(0,F.jsx)("button",{className:"px-2 py-4 mt-2 text-center text-sm text-white bg-sky-600 rounded-lg w-full font-medium hover:bg-blue-700 transition-all",onClick:function(){return ct.apply(this,arguments)},disabled:!De||it!==Y.UK.APPROVED||rt!==Y.UK.APPROVED,children:(0,F.jsx)("span",{children:it!==Y.UK.NOT_APPROVED&&it!==Y.UK.PENDING&&rt!==Y.UK.NOT_APPROVED&&rt!==Y.UK.PENDING||!qe?"Supply Liquidity":qe})})}),Ae[p.gN.CURRENCY_A]&&Ae[p.gN.CURRENCY_B]&&Ye!==q._G.INVALID&&(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-5 md:gap-8 mb-8",children:[(0,F.jsx)("div",{className:"col-span-1 md:col-span-1",children:(0,F.jsx)("div",{className:"px-6 py-6 bg-white dark:bg-opacity-30 rounded-3xl shadow-2xl dark:shadow-xl hover:shadow-3xl transition-all",children:(0,F.jsx)("div",{className:"flex flex-wrap",children:(0,F.jsxs)("div",{className:"w-full md:w-1/2 md:pt-6 mb-3 md:mb-0",children:[(0,F.jsx)("h3",{className:"mb-2 text-2xl font-bold text-white text-center md:text-left",children:(0,F.jsx)("span",{className:"dark:text-white text-indigo-700",children:null!==(M=null===Be||void 0===Be?void 0:Be.toSignificant(6))&&void 0!==M?M:"-"})}),(0,F.jsx)("p",{className:"md:mb-8 text-sm font-medium text-black dark:text-indigo-100 text-center md:text-left",children:"".concat(null!==(K=null===(G=Ae[p.gN.CURRENCY_B])||void 0===G?void 0:G.symbol)&&void 0!==K?K:""," per ").concat(null!==(H=null===(z=Ae[p.gN.CURRENCY_A])||void 0===z?void 0:z.symbol)&&void 0!==H?H:"")})]})})})}),(0,F.jsx)("div",{className:"col-span-1 md:col-span-1",children:(0,F.jsx)("div",{className:"px-6 py-6 bg-white dark:bg-opacity-30 rounded-3xl shadow-2xl dark:shadow-xl hover:shadow-3xl transition-all",children:(0,F.jsx)("div",{className:"flex flex-wrap",children:(0,F.jsxs)("div",{className:"w-full md:w-1/2 md:pt-6 mb-3 md:mb-0",children:[(0,F.jsx)("h3",{className:"mb-2 text-2xl font-bold text-white text-center md:text-left",children:(0,F.jsx)("span",{className:"dark:text-white text-indigo-700",children:null!==(W=null===Be||void 0===Be||null===($=Be.invert())||void 0===$?void 0:$.toSignificant(6))&&void 0!==W?W:"-"})}),(0,F.jsx)("p",{className:"md:mb-8 text-sm font-medium text-black dark:text-indigo-100 text-center md:text-left",children:"".concat(null!==(X=null===(J=Ae[p.gN.CURRENCY_A])||void 0===J?void 0:J.symbol)&&void 0!==X?X:""," per ").concat(null!==(ee=null===(te=Ae[p.gN.CURRENCY_B])||void 0===te?void 0:te.symbol)&&void 0!==ee?ee:"")})]})})})}),(0,F.jsx)("div",{className:"col-span-1 md:col-span-1",children:(0,F.jsx)("div",{className:"px-6 py-6 bg-white dark:bg-opacity-30 rounded-3xl shadow-2xl dark:shadow-xl hover:shadow-3xl transition-all",children:(0,F.jsx)("div",{className:"flex flex-wrap",children:(0,F.jsxs)("div",{className:"w-full md:w-1/2 md:pt-6 mb-3 md:mb-0",children:[(0,F.jsx)("h3",{className:"mb-2 text-2xl font-bold text-white text-center md:text-left",children:(0,F.jsxs)("span",{className:"dark:text-white text-indigo-700",children:[Te&&Be?"100":null!==(ne=null!==Ie&&void 0!==Ie&&Ie.lessThan(V.IS)?"<0.01":null===Ie||void 0===Ie?void 0:Ie.toFixed(2))&&void 0!==ne?ne:"0","%"]})}),(0,F.jsx)("p",{className:"md:mb-8 text-sm font-medium text-black dark:text-indigo-100 text-center md:text-left",children:"Share of Pool"})]})})})})]})}),pt[1]&&(0,F.jsx)(be,{pair:pt[1]})]})]})})}),(0,F.jsx)("div",{className:"opacity-75 fixed inset-0 z-40 bg-black backdrop-blur-xl"})]}):null]}):(0,F.jsx)(Ne.Z,{})}}}]);
//# sourceMappingURL=47.3fffccdc.chunk.js.map