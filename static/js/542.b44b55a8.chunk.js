"use strict";(self.webpackChunkmetapledefi=self.webpackChunkmetapledefi||[]).push([[542],{16542:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var i=a(1413),r=a(72791),l=a(60047),s=a(86047),n=a(52007),d=a.n(n);var o=a(80184),c=[{name:"default",lighter:"#EBD6FD",light:"#B985F4",main:"#7635dc",dark:"#431A9E",darker:"#200A69",contrastText:"#fff"},{name:"green"},{name:"cyan",lighter:"#D1FFFC",light:"#76F2FF",main:"#1CCAFF",dark:"#0E77B7",darker:"#053D7A"},{name:"blue",lighter:"#CCDFFF",light:"#6697FF",main:"#0045FF",dark:"#0027B7",darker:"#00137A",contrastText:"#fff"},{name:"orange",lighter:"#FEF4D4",light:"#FED680",main:"#fda92d",dark:"#B66816",darker:"#793908"},{name:"red",lighter:"#FFE3D5",light:"#FFC1AC",main:"#FF3030",dark:"#B71833",darker:"#7A0930",contrastText:"#fff"}];function m(e){var t,a=c[0],i=c[1],r=c[2],l=c[3],s=c[4],n=c[5];switch(e){case"green":t=i;break;case"cyan":t=r;break;case"blue":t=l;break;case"orange":t=s;break;case"red":t=n;break;default:t=a}return t}m.propTypes={themeColor:d().oneOf(["default","purple","cyan","blue","orange","red"])};var x={themeMode:"light",themeDirection:"ltr",themeColor:"default",themeStretch:!1,onChangeMode:function(){},onChangeDirection:function(){},onChangeColor:function(){},onToggleStretch:function(){},setColor:c[0],colorOption:[]},u=(0,r.createContext)(x);var h=function(){return(0,r.useContext)(u)},f=a(77904),b=a(99533),p=a(75455),g=a(84471),k=a(10354),v=a(66532),j=a(45987),w=a(30323),y=["farm","displayApr","udePrice"];function F(e){var t=e.farm,a=e.displayApr,i=e.udePrice,r=((0,j.Z)(e,y),(0,s.Z)().account),l=(t.id,t.stakeAssetImage,t.userData,t.liquidity&&t.liquidity.gt(0)?"$".concat(t.liquidity.toNumber().toLocaleString(void 0,{maximumFractionDigits:0})):"$0.00"),n=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("METAPLE",""),d=t.dual?t.dual.earnLabel:"MLX + Fees",c=t.poolWeight.toNumber()||0;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"col-span-1",children:(0,o.jsxs)("div",{className:"p-5 border-gray-300 shadow-xl hover:shadow-2xl bg-white dark:bg-black bg-opacity-100 dark:bg-opacity-50 rounded-3xl transition-all",children:[(0,o.jsx)("div",{className:"relative",children:(0,o.jsx)("div",{className:"bg-gradient-to-r from-sky-700 to-blue-700 bg-opacity-25 rounded-3xl overflow-hidden z-10",children:(0,o.jsxs)("div",{className:"px-6 py-6 transition-all flex align-middle justify-between relative z-10",children:[(0,o.jsx)("div",{className:"w-32 h-32 bg-circle bg-white rounded-full opacity-10 absolute pin-t ml-8 p-2 z-20 top-0 right-0 -mr-14 -mt-14"}),(0,o.jsx)("div",{className:"w-32 h-32 bg-circle bg-white rounded-full opacity-5 absolute pin-t ml-8 p-2 z-20 bottom-0 left-0 -ml-14 -mb-14"}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"text-white font-semibold mb-3 text-sm",children:n})}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"text-white font-semibold mb-3 text-sm",children:"Earn MLX "})})]})})}),(0,o.jsx)("div",{className:"flex align-middle justify-center -mt-6 mb-15 relative z-10",children:(0,o.jsx)("div",{className:"rounded-full overflow-hidden -mx-2",children:(0,o.jsx)("img",{src:"./tokens/".concat(null===t||void 0===t?void 0:t.quoteToken.address,".png"),className:"rounded-full border-0 border-white",width:45,alt:""})})}),(0,o.jsxs)("div",{className:"flex justify-between mb-1",children:[(0,o.jsx)("div",{className:"text-black dark:text-white dark:text-opacity-70 mb-3 text-xs font-semibold",children:"Earn"}),(0,o.jsx)("div",{className:"text-black dark:text-white font-semibold text-xs",children:d})]}),(0,o.jsxs)("div",{className:"flex justify-between mb-1",children:[(0,o.jsx)("div",{className:"text-black dark:text-white dark:text-opacity-70 mb-3 text-xs font-semibold",children:"Multiplier"}),(0,o.jsxs)("div",{className:"text-black dark:text-white font-semibold text-xs",children:[Math.round(100*c),"x"]})]}),(0,o.jsxs)("div",{className:"flex justify-between mb-1",children:[(0,o.jsx)("div",{className:"text-black dark:text-white dark:text-opacity-70 mb-3 text-xs font-semibold",children:"Liquidity"}),(0,o.jsx)("div",{className:"text-black dark:text-white font-semibold text-xs",children:l})]}),(0,o.jsxs)("div",{className:"flex justify-between mb-1",children:[(0,o.jsx)("div",{className:"text-black dark:text-white dark:text-opacity-70 mb-3 text-xs font-semibold",children:"Total APR"}),(0,o.jsxs)("div",{className:"text-black dark:text-white font-semibold text-xs",children:[a,"%"]})]}),(0,o.jsx)(w.Z,{farm:t,lpLabel:n,account:r,udePrice:i})]})})})}var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e&&t?(e+t).toLocaleString("en-US",{maximumFractionDigits:2}):e?e.toLocaleString("en-US",{maximumFractionDigits:2}):null},C=function(){(0,s.Z)().account,h().themeStretch,(0,f.I0)();var e=(0,b.E2)(),t=e.data,a=(e.userDataLoaded,(0,b.GT)()),n=t.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier&&!(0,p.Z)(e.pid)}));t.filter((function(e){return 0!==e.pid&&"0X"===e.multiplier&&!(0,p.Z)(e.pid)})),t.filter((function(e){return(0,p.Z)(e.pid)}));(0,b.Cs)(!1);var d=(0,r.useCallback)((function(e){return e.map((function(e){if(!e.lpTotalInQuoteToken||!e.quoteTokenPriceBusd)return e;var t=new g.Z(e.lpTotalInQuoteToken).times(e.quoteTokenPriceBusd),r=(0,k.yW)(new g.Z(e.poolWeight),a,t,e.lpAddresses[v.a_.MAINNET]),l=r.udeRewardsApr,s=r.lpRewardsApr;return(0,i.Z)((0,i.Z)({},e),{},{apr:l,lpRewardsApr:s,liquidity:t})}))}),[a])(n);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"mx-auto lg:ml-64",children:(0,o.jsxs)("div",{className:"hero-section px-5 py-4 md:px-10 md:py-4 h-full relative",children:[(0,o.jsxs)("nav",{className:"flex items-center justify-between mb-4",children:[(0,o.jsx)("h2",{className:"title text-black dark:text-white text-opacity-75 text-3xl font-bold",children:"Farm LP Tokens & Harvest MLX"}),(0,o.jsx)(l.Z,{})]}),(0,o.jsx)("div",{className:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-6 mb-8",children:d&&d.map((function(e){return(0,o.jsx)(F,{farm:e,displayApr:N(e.apr,e.lpRewardsApr),udePrice:a})}))})]})})})}}}]);
//# sourceMappingURL=542.b44b55a8.chunk.js.map