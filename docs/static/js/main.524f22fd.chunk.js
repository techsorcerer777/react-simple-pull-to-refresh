(this["webpackJsonpreact-simple-pull-to-refresh-playground"]=this["webpackJsonpreact-simple-pull-to-refresh-playground"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,l=n(0),a=n.n(l),o=n(3),c=n.n(o),i=(n(10),n(4)),s=n(1);n(11);function u(e,t){if(!function(e){var t=getComputedStyle(e).overflowY;return e===document.scrollingElement&&"visible"===t||("scroll"===t||"auto"===t)}(e))return!1;if(t===r.DOWN)return e.scrollTop+e.clientHeight<e.scrollHeight;if(t===r.UP)return e.scrollTop>0;throw new Error("unsupported direction")}function d(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}!function(e){e[e.UP=-1]="UP",e[e.DOWN=1]="DOWN"}(r||(r={}));d(".lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px; }\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: #363636;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n\n.lds-ellipsis div:nth-child(1) {\n  left: 6px;\n  animation: lds-ellipsis1 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(2) {\n  left: 6px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(3) {\n  left: 26px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(4) {\n  left: 45px;\n  animation: lds-ellipsis3 0.6s infinite; }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(19px, 0); } }\n");var m=function(){return a.a.createElement("div",{className:"lds-ellipsis"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},p=function(){return a.a.createElement("div",null,a.a.createElement("p",null,"\u21a7\xa0\xa0pull to refresh\xa0\xa0\u21a7"))};d(".ptr,\n.ptr__children {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  position: relative; }\n\n.ptr.ptr--fetch-more-treshold-breached .ptr__fetch-more {\n  display: block; }\n\n.ptr__fetch-more {\n  display: none; }\n\n/**\n  * Pull down transition \n  */\n.ptr__children,\n.ptr__pull-down {\n  transition: transform 0.2s cubic-bezier(0, 0, 0.31, 1); }\n\n.ptr__pull-down {\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  right: 0;\n  top: 0;\n  visibility: hidden; }\n  .ptr__pull-down > div {\n    display: none; }\n\n.ptr--dragging {\n  /**\n    * Hide PullMore content is treshold breached\n    */\n  /**\n    * Otherwize, display content\n    */ }\n  .ptr--dragging.ptr--pull-down-treshold-breached .ptr__pull-down--pull-more {\n    display: none; }\n  .ptr--dragging .ptr__pull-down--pull-more {\n    display: block; }\n\n.ptr--pull-down-treshold-breached {\n  /**\n    * Force opacity to 1 is pull down trashold breached\n    */\n  /**\n    * And display loader\n    */ }\n  .ptr--pull-down-treshold-breached .ptr__pull-down {\n    opacity: 1 !important; }\n  .ptr--pull-down-treshold-breached .ptr__pull-down--loading {\n    display: block; }\n\n.ptr__loader {\n  margin: 0 auto;\n  text-align: center; }\n");var h=function(e){var t=e.isPullable,n=void 0===t||t,o=e.canFetchMore,c=void 0!==o&&o,i=e.onRefresh,s=e.onFetchMore,d=e.refreshingContent,h=void 0===d?a.a.createElement(m,null):d,f=e.pullingContent,v=void 0===f?a.a.createElement(p,null):f,E=e.children,b=e.pullDownThreshold,w=void 0===b?67:b,g=e.fetchMoreThreshold,y=void 0===g?100:g,_=e.maxPullDownDistance,x=void 0===_?95:_,D=e.resistance,T=void 0===D?1:D,N=e.backgroundColor,P=e.className,L=void 0===P?"":P,M=Object(l.useRef)(null),O=Object(l.useRef)(null),k=Object(l.useRef)(null),j=Object(l.useRef)(null),C=!1,F=!1,R=!1,S=0,A=0;Object(l.useEffect)((function(){if(n&&O&&O.current)return O.current.addEventListener("touchstart",B,{passive:!0}),O.current.addEventListener("mousedown",B),O.current.addEventListener("touchmove",H,{passive:!1}),O.current.addEventListener("mousemove",H),window.addEventListener("scroll",W),O.current.addEventListener("touchend",U),O.current.addEventListener("mouseup",U),document.body.addEventListener("mouseleave",U),function(){n&&O&&O.current&&(O.current.removeEventListener("touchstart",B),O.current.removeEventListener("mousedown",B),O.current.removeEventListener("touchmove",H),O.current.removeEventListener("mousemove",H),window.removeEventListener("scroll",W),O.current.removeEventListener("touchend",U),O.current.removeEventListener("mouseup",U),document.body.removeEventListener("mouseleave",U))}}),[E,n,i,w,x,c,y]),Object(l.useEffect)((function(){var e;(null===(e=M)||void 0===e?void 0:e.current)&&(M.current.classList.contains("ptr--fetch-more-treshold-breached")||c&&z()<y&&s&&(M.current.classList.add("ptr--fetch-more-treshold-breached"),F=!0,s().then(Y).catch(Y)))}),[c,E]);var z=function(){if(!O||!O.current)return-1;var e=window.scrollY;return O.current.scrollHeight-e-window.innerHeight},Y=function(){requestAnimationFrame((function(){O.current&&(O.current.style.overflowX="hidden",O.current.style.overflowY="auto",O.current.style.transform="translate(0px, 0px)"),k.current&&(k.current.style.opacity="0"),M.current&&(M.current.classList.remove("ptr--pull-down-treshold-breached"),M.current.classList.remove("ptr--dragging"),M.current.classList.remove("ptr--fetch-more-treshold-breached")),C&&(C=!1),F&&(F=!1)}))},B=function(e){R=!1,e instanceof MouseEvent&&(S=e.pageY),window.TouchEvent&&e instanceof TouchEvent&&(S=e.touches[0].pageY),A=S,"touchstart"===e.type&&function e(t,n){return!!u(t,n)||null!=t.parentElement&&e(t.parentElement,n)}(e.target,r.UP)||O.current.getBoundingClientRect().top<0||(R=!0)},H=function(e){if(R)if(A=window.TouchEvent&&e instanceof TouchEvent?e.touches[0].pageY:e.pageY,M.current.classList.add("ptr--dragging"),A<S)R=!1;else{var t=Math.min((A-S)/T,x);t>=w&&(R=!0,C=!0,M.current.classList.remove("ptr--dragging"),M.current.classList.add("ptr--pull-down-treshold-breached")),t>=x||(k.current.style.opacity=(t/65).toString(),O.current.style.overflow="visible",O.current.style.transform="translate(0px, "+t+"px)",k.current.style.visibility="visible")}},W=function(e){F||c&&z()<y&&s&&(F=!0,M.current.classList.add("ptr--fetch-more-treshold-breached"),s().then(Y).catch(Y))},U=function(){if(R=!1,S=0,A=0,!C)return k.current&&(k.current.style.visibility="hidden"),void Y();O.current&&(O.current.style.overflow="visible",O.current.style.transform="translate(0px, "+w+"px)"),i().then(Y).catch(Y)};return a.a.createElement("div",{className:"ptr "+L,style:{backgroundColor:N},ref:M},a.a.createElement("div",{className:"ptr__pull-down",ref:k},a.a.createElement("div",{className:"ptr__loader ptr__pull-down--loading"},h),a.a.createElement("div",{className:"ptr__pull-down--pull-more"},v)),a.a.createElement("div",{className:"ptr__children",ref:O},E,a.a.createElement("div",{className:"ptr__fetch-more",ref:j},a.a.createElement("div",{className:"ptr__loader ptr__fetch-more--loading"},h))))},f=(n(12),function(e){var t=e.canFetchMore,n=e.isPullable,r=e.setCanFetchMore,l=e.setIsPullable,o=e.setFetchMoreThreshold,c=e.fetchMoreThreshold,i=e.setPullDownThreshold,s=e.pullDownThreshold,u=e.setMaxPullDownDistance,d=e.maxPullDownDistance,m=e.onReset;return a.a.createElement("div",{className:"commands"},a.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.a.createElement("div",{className:"command__group"},a.a.createElement("button",{onClick:function(){return m()}},a.a.createElement("code",null,"Reset values"))),a.a.createElement("div",{className:"command__group"},a.a.createElement("input",{type:"checkbox",id:"ptr",checked:n,onChange:function(){return l()}}),a.a.createElement("label",{htmlFor:"ptr"},a.a.createElement("code",null,"isPullable"))),a.a.createElement("div",{className:"command__group"},a.a.createElement("input",{type:"checkbox",id:"fetchMore",checked:t,onChange:function(){return r()}}),a.a.createElement("label",{htmlFor:"fetchMore"},a.a.createElement("code",null,"canFetchMore")))),a.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.a.createElement("div",{className:"command__group"},a.a.createElement("input",{type:"number",id:"fetchMoreTreshold",value:c,onChange:function(e){return o(e.target.value)}}),a.a.createElement("label",{htmlFor:"fetchMoreTreshold"},a.a.createElement("code",null,"fetchMoreTreshold"))),a.a.createElement("div",{className:"command__group"},a.a.createElement("input",{type:"number",id:"pullDownThreshold",value:s,onChange:function(e){return i(e.target.value)}}),a.a.createElement("label",{htmlFor:"pullDownThreshold"},a.a.createElement("code",null,"pullDownThreshold"))),a.a.createElement("div",{className:"command__group"},a.a.createElement("input",{type:"number",id:"maxPullDownDistance",value:d,onChange:function(e){return u(e.target.value)}}),a.a.createElement("label",{htmlFor:"maxPullDownDistance"},a.a.createElement("code",null,"maxPullDownDistance")))))}),v=!0,E=!1,b=100,w=67,g=95,y=function(){var e=["foo","bar","baz","foo","foo","bar","baz","foo","foo","bar","baz","foo","foo","bar","baz"],t=Object(l.useState)(e),n=Object(s.a)(t,2),r=n[0],o=n[1],c=Object(l.useState)(v),u=Object(s.a)(c,2),d=u[0],m=u[1],p=Object(l.useState)(E),y=Object(s.a)(p,2),_=y[0],x=y[1],D=Object(l.useState)(b),T=Object(s.a)(D,2),N=T[0],P=T[1],L=Object(l.useState)(w),M=Object(s.a)(L,2),O=M[0],k=M[1],j=Object(l.useState)(g),C=Object(s.a)(j,2),F=C[0],R=C[1],S=function(){return new Promise((function(t){setTimeout((function(){t(o([].concat(Object(i.a)(r),e)))}),1500)}))};return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-commands"},a.a.createElement(f,{canFetchMore:_,setCanFetchMore:function(){return x(!_)},isPullable:d,setIsPullable:function(){return m(!d)},fetchMoreThreshold:N,setFetchMoreThreshold:function(e){return P(e)},pullDownThreshold:O,setPullDownThreshold:function(e){return k(e)},maxPullDownDistance:F,setMaxPullDownDistance:function(e){return R(e)},onReset:function(){m(v),x(E),P(b),k(w),R(g)}})),a.a.createElement("div",{className:"App-ptr"},a.a.createElement(h,{onRefresh:S,canFetchMore:_,isPullable:d,onFetchMore:S,fetchMoreThreshold:N,pullDownThreshold:O,maxPullDownDistance:F,pullingContent:""},a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Demo App"),a.a.createElement("h2",null,"Pull To Refresh")),a.a.createElement("div",{className:"App-container"},a.a.createElement("ul",null,r.map((function(e,t){return a.a.createElement("li",{key:t},t+1," - ",e)}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.524f22fd.chunk.js.map