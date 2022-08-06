"use strict";(self.webpackChunkmetapledefi=self.webpackChunkmetapledefi||[]).push([[323],{30323:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(74165),a=n(15861),s=n(70885),c=n(89426),i=n(72791),u=n(90279),o=n(77904),l=n(44253),d=n(75422),p=n(27459),x=function(e){var t=(0,l.y8)(),n=(0,p.d)().callWithGasPrice;return{onApprove:(0,i.useCallback)((0,a.Z)((0,r.Z)().mark((function a(){var s,c;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n(e,"approve",[t.address,d.Bz]);case 3:return s=r.sent,r.next=6,s.wait();case 6:return c=r.sent,r.abrupt("return",c.status);case 10:return r.prev=10,r.t0=r.catch(0),r.abrupt("return",!1);case 13:case"end":return r.stop()}}),a,null,[[0,10]])}))),[e,t,n])}},f=n(92635),m=n(92308),v=n(76454),h=n(79266),b=n(27712),Z=n(46087),w=n(61540),k=n(26483),g=n(94427),y=n(52697),j=n(84471),S=n(78235),N=n(86047),C=n(70316),A=n(65585),B=n(80184),D=RegExp("^\\d*(?:\\\\[.])?\\d*$");function F(e){var t,n=e.tokenSymbol,u=void 0===n?"":n,o=e.isMax,l=void 0!==o&&o,d=e.label,p=void 0===d?"":d,x=e.placeHolder,f=void 0===x?"":x,m=e.inputValue,v=void 0===m?"":m,h=e.onInputChange,b=void 0===h?null:h,F=e.onMax,U=void 0===F?null:F,M=e.selectedToken,L=e.tokenBalance,T=e.max,I=e.onConfirm,P=e.onDismiss,R=(0,N.Z)().account,E=(0,i.useState)(!1),V=(0,s.Z)(E,2),W=V[0],z=V[1],O=(0,i.useMemo)((function(){return(0,A.NJ)(T)}),[T]),_=new j.Z(v),H=new j.Z(O),K="0"===T||!T;return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(Z.Z,{sx:{maxWidth:620},children:[(0,B.jsxs)(w.Z,{sx:{background:"#e7e9ec",margin:"5px",borderRadius:"inherit"},children:[(0,B.jsx)("div",{children:(0,B.jsxs)("p",{children:[M?"Balance: ".concat(null!==(t=function(e){try{var t=(0,A.U4)(e);return K?"0":t.gt(0)?t.toFixed(8,j.Z.ROUND_DOWN):t.toFixed(3,j.Z.ROUND_DOWN)}catch(n){(0,C.x2)(n.data?n.data.message:n.message)}}(L))&&void 0!==t?t:"Loading"," "):" - ",R&&l&&M&&(0,B.jsx)(k.Z,{variant:"outlined",style:{marginLeft:"3px"},onClick:U,size:"small",children:"Max"})]})}),(0,B.jsx)("div",{style:{marginTop:"5px"},children:(0,B.jsxs)(c.ZP,{container:!0,spacing:1,children:[(0,B.jsx)(c.ZP,{item:!0,xs:8,md:8,children:(0,B.jsx)(g.Z,{inputMode:"decimal",step:"any",min:"0",type:"number",fullWidth:!0,value:parseFloat(v),variant:"filled",label:p,placeholder:f,title:p,onChange:function(e){var t;(""===(t=e.currentTarget.value.replace(/,/g,"."))||D.test((0,S.hr)(t)))&&b(t)}})}),(0,B.jsxs)(c.ZP,{item:!0,xs:4,md:4,style:{fontSize:"10px",display:"flex",alignItems:"center"},children:[(0,B.jsx)(k.Z,{onClick:U,variant:"outlined",style:{marginRight:"5px"},children:"Max"}),u]})]})})]}),(0,B.jsx)(y.Z,{children:(0,B.jsx)(k.Z,{variant:"contained",onClick:(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.prev=1,e.next=4,I(v);case 4:P(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),(0,C.x2)(e.t0.data?e.t0.data.message:e.t0.message);case 10:return e.prev=10,z(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])}))),fullWidth:!0,disabled:W||!_.isFinite()||_.eq(0)||_.gt(H),children:"Confirm"})})]})})}var U=n(41357),M=function(e){var t=(0,l.y8)(),n=(0,i.useCallback)(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){var s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,U.AQ)(t,e,a);case 2:s=n.sent,console.info(s);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[t,e]);return{onStake:n}},L=function(e){var t=(0,l.y8)(),n=(0,i.useCallback)(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,U.dU)(t,e,a);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[t,e]);return{onUnstake:n}},T=n(99533),I=function(e){var t=e.farm,n=e.tokenBalance,c=e.tokenName,u=e.pid,l=e.lpLabel,d=e.isUnstake,p=e.isDisabled,x=void 0!==p&&p,Z=(0,i.useState)(!1),w=(0,s.Z)(Z,2),k=w[0],g=w[1],y=(0,i.useState)(!1),j=(0,s.Z)(y,2),S=j[0],D=j[1],U=M(u).onStake,I=L(u).onUnstake,P=(0,N.Z)().account,R=(0,o.TL)(),E=((0,T.w5)(c),(0,i.useMemo)((function(){return(0,A.NJ)(n)}),[n])),V=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U(t);case 3:R((0,f.IV)({account:P,pids:[u]})),e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),(0,C.x2)(e.t0.data?e.t0.data.message:e.t0.message),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(t);case 3:R((0,f.IV)({account:P,pids:[u]})),e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),(0,C.x2)(e.t0.data?e.t0.data.message:e.t0.message),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("button",{className:"px-4 py-3 text-center text-sm text-white bg-sky-600 rounded-lg font-medium hover:bg-blue-600 transition-all w-full md:w-auto xs:w-auto disabled:bg-opacity-40",variant:"contained",color:"primary",disabled:x,onClick:function(){D(""),g(!0)},children:d?"Unstake":"Stake"}),(0,B.jsxs)(m.Z,{open:k,onClose:function(){g(!1)},children:[(0,B.jsxs)(v.Z,{children:[d?"Unstake":"Stake"," ",l]}),(0,B.jsx)(h.Z,{dividers:!0,children:(0,B.jsx)(F,{tokenSymbol:t.lpSymbol,selectedToken:t.lpAddresses[b.a_.MAINNET],tokenBalance:n,onInputChange:function(e){D(e)},inputValue:S,max:n,onMax:function(){D(E)},onConfirm:d?W:V,onDismiss:function(){g(!1)}})})]})]})},P=function(e){var t=(0,l.y8)();return{onReward:(0,i.useCallback)((0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,U.sA)(t,e);case 2:case"end":return n.stop()}}),n)}))),[e,t])}},R=n(31141),E=function(e){var t=e.earnings,n=e.pid,c=e.timeStamp,u=void 0===c?0:c,l=(0,N.Z)().account,d=(0,o.TL)(),p=(0,i.useState)(!1),x=(0,s.Z)(p,2),m=x[0],v=x[1],h=P(n).onReward,b=l?(0,A.U4)(t):R.HW;return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)("button",{className:"px-4 py-3 text-center text-sm text-white bg-sky-600 rounded-lg font-medium hover:bg-blue-600 transition-all w-full md:w-auto xs:w-auto disabled:bg-opacity-40",disabled:parseFloat(u)>0||b.eq(0)||m,variant:"contained",color:"primary",onClick:(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,h();case 4:(0,C.KX)("Successfully Harvested UDE"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),(0,C.x2)(e.t0.data?e.t0.data.message:e.t0.message);case 10:d((0,f.IV)({account:l,pids:[n]}));case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),children:"Harvest"})})},V=n(40077),W=n(72479);function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,B.jsxs)(c.ZP,{item:!0,xs:4,children:[(0,B.jsx)("div",{variant:"caption",style:{mb:.5,color:"text.white",display:"block",fontSize:"12px"},children:t}),(0,B.jsx)("span",{variant:"subtitle1",className:"text-xs",children:e})]})}var O=function(e){var t,n=e.farm,d=e.account,p=e.lpLabel,m=(e.addLiquidityUrl,e.udePrice,(0,i.useState)(!1)),v=(0,s.Z)(m,2),h=v[0],b=v[1],Z=n.pid,w=n.lpAddresses,k=n.userData||{},g=k.allowance,y=k.tokenBalance,j=k.stakedBalance,S=k.earnings,N=k.userLast,C=(0,u.Kn)(w),A=d&&g&&g.isGreaterThan(0),D=(0,o.TL)(),F=(0,l.X_)(C),U=x(F).onApprove,M=(0,i.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D((0,f.IV)({account:d,pids:[Z]})),b(!0),e.next=5,U();case 5:D((0,f.IV)({account:d,pids:[Z]})),b(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[U,D,d,Z]),L=1e3*(parseFloat(N)+parseFloat(604800))-Date.now(),T=(t=1e3*(L/1e3>0?L/1e3:0),Math.floor(t/864e5)+"d "+Math.floor(t%864e5/36e5)+"h "+Math.floor(t%36e5/6e4)+"m");return(0,i.useEffect)((function(){return D((0,f.IV)({account:d,pids:[Z]}))}),[D]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("div",{className:"flex items-center sm:flex-row flex-col justify-between gap-4 pb-5 mb-2 border-b border-white border-opacity-10",children:[(0,B.jsx)("div",{className:"sm:col-span-1 w-full md:w-auto xs:w-auto",children:(0,B.jsx)(E,{pid:Z,earnings:S})}),(0,B.jsx)("div",{className:"sm:col-span-1 w-full md:w-auto xs:w-auto",children:d?A?(0,B.jsx)(I,{farm:n,tokenBalance:y,tokenName:n.lpSymbol,pid:Z,lpLabel:p}):(0,B.jsx)("button",{className:"px-4 py-3 text-center text-sm text-white bg-blue-700 rounded-lg w-full font-medium hover:bg-sky-600 transition-all",variant:"contained",disabled:h,onClick:M,children:"Approve"}):(0,B.jsx)(W.Z,{mt:"8px",width:"100%"})}),(0,B.jsx)("div",{className:"sm:col-span-1 w-full md:w-auto xs:w-auto",children:(0,B.jsx)(I,{farm:n,pid:Z,tokenBalance:j,lpLabel:p,tokenName:n.lpSymbol,isUnstake:!0,isDisabled:!A||parseFloat(j)<=0})})]}),(0,B.jsxs)(c.ZP,{container:!0,sx:{pt:2,textAlign:"center"},children:[z((0,V.Ac)(j.toNumber()),"STAKED"),z((0,V.Ac)(S.toNumber(),6),"REWARDS"),z("".concat(T),"LOCKED")]})]})}},41357:function(e,t,n){n.d(t,{sA:function(){return p},AQ:function(){return l},dU:function(){return d}});var r=n(74165),a=n(15861),s=n(17144),c=n.n(s),i=n(91941),u=n(40077),o=n(70316),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a,s){var l,d,p,x,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,i.Z)(),l=new(c())(a).times(u.o3).toFormat().replaceAll(",",""),e.prev=2,0!==n){e.next=12;break}return e.next=6,t.enterStaking(l);case 6:return d=e.sent,(0,o.B)(d.wait()),e.next=10,d.wait();case 10:return p=e.sent,e.abrupt("return",p.status);case 12:return e.next=14,t.deposit(n,l);case 14:return x=e.sent,(0,o.B)(x.wait()),e.next=18,x.wait();case 18:return f=e.sent,e.abrupt("return",f.status);case 22:return e.prev=22,e.t0=e.catch(2),(0,o.x2)(e.t0.data?e.t0.data.message:e.t0.message),console.log(e.t0),e.abrupt("return",null);case 27:case"end":return e.stop()}}),e,null,[[2,22]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var s,i,l,d,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=new(c())(a).times(u.o3).toFormat().replaceAll(",",""),e.prev=1,0!==n){e.next=11;break}return e.next=5,t.leaveStaking(s);case 5:return i=e.sent,(0,o.B)(i.wait()),e.next=9,i.wait();case 9:return l=e.sent,e.abrupt("return",l.status);case 11:return e.next=13,t.withdraw(n,s);case 13:return d=e.sent,(0,o.B)(d.wait()),e.next=17,d.wait();case 17:return p=e.sent,e.abrupt("return",p.status);case 21:return e.prev=21,e.t0=e.catch(1),(0,o.x2)(e.t0.data?e.t0.data.message:e.t0.message),e.abrupt("return",null);case 25:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,s,c,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,i.Z)(),e.prev=1,0!==n){e.next=11;break}return e.next=5,t.enterStaking("0");case 5:return a=e.sent,(0,o.B)(a.wait()),e.next=9,a.wait();case 9:return s=e.sent,e.abrupt("return",s.status);case 11:return e.next=13,t.deposit(n,"0");case 13:return c=e.sent,(0,o.B)(c.wait()),e.next=17,c.wait();case 17:return u=e.sent,e.abrupt("return",u.status);case 21:return e.prev=21,e.t0=e.catch(1),(0,o.x2)(e.t0.data?e.t0.data.message:e.t0.message),e.abrupt("return",null);case 25:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t,n){return e.apply(this,arguments)}}();n(60361),n(89848),n(6751),n(90279)},91941:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(27712),a=n(42982),s=n(96382),c=n(55708),i=(n(16030),n(92635)),u=n(12859),o=n(52752),l=n(37419),d=n(41453),p=n(47231),x=n(39616),f=n(65395),m=n(10119),v=n(99823),h=["user","transactions","lists","profile"],b=(0,s.xC)({devTools:!1,reducer:{block:o.ZP,farms:i.ZP,pools:u.ZP,user:d.Z,transactions:p.Z,swap:x.Z,burn:m.Z,multicall:v.Z,lists:f.Z},middleware:[].concat((0,a.Z)((0,s.Bx)({thunk:!0})),[(0,c.a1)({states:h})]),preloadedState:(0,c.zD)({states:h})});b.dispatch((0,l.S)());var Z=b,w=n(23224),k=function(){var e=Z.getState().user.gasPrice||w.j4.default;return"56"===r.a_.MAINNET.toString()?e:w.j4.testnet}}}]);
//# sourceMappingURL=323.198b9fc5.chunk.js.map