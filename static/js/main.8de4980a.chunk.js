(this.webpackJsonpjongkeun=this.webpackJsonpjongkeun||[]).push([[0],{29:function(n,e,t){n.exports=t(40)},40:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),c=t.n(o),i=t(7),l=t(2),u=t(3);function s(){var n=Object(l.a)(["\nbody {\n  background-color: #003b00;\n  padding: 1em 2em;\n}\n"]);return s=function(){return n},n}var f=Object(u.a)(s()),m=t(8),p=t(22),b=t(23),d=t(26),h=t(24),E=t(28),g=t(10);function v(){var n=Object(l.a)(["\n  color: #00ff41;\n  font-size: 2rem;\n"]);return v=function(){return n},n}function O(){var n=Object(l.a)(["\n  border-left: 0.1em solid #00ff41;\n  animation: blink 0.7s steps(1) infinite;\n"]);return O=function(){return n},n}function j(){var n=Object(l.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n\n  @keyframes blink {\n    50% {\n      border-color: transparent;\n    }\n  }\n  @import url("https://fonts.googleapis.com/css?family=VT323");\n  font-family: "VT323", monospace;\n']);return j=function(){return n},n}var x=u.b.div(j()),y=u.b.span(O()),k=u.b.h1(v()),w=function(n){var e=n.heading,t=n.dataText,o=Object(r.useState)(""),c=Object(g.a)(o,2),i=c[0],l=c[1],u=Object(r.useState)(!1),s=Object(g.a)(u,2),f=s[0],m=s[1],p=Object(r.useState)(0),b=Object(g.a)(p,2),d=b[0],h=b[1],E=Object(r.useState)(150),v=Object(g.a)(E,2),O=v[0],j=v[1],w=function(){var n=d%t.length,e=t[n];l(f?e.substring(0,i.length-1):e.substring(0,i.length+1)),j(f?30:150),f||i!==e?f&&""===i&&(m(!1),h(d+1)):setTimeout((function(){return m(!0)}),500)};return Object(r.useEffect)((function(){setTimeout(w,O)}),[i,f]),a.a.createElement(x,null,a.a.createElement(k,null,e,"\xa0",a.a.createElement("span",null,i),a.a.createElement(y,null)))},T=function(n){function e(){return Object(p.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(E.a)(e,n),Object(b.a)(e,[{key:"render",value:function(){return a.a.createElement(w,{heading:"JONGKEUN:~$",dataText:["WELCOME TO MY WORLD","THIS IS MY WEBSITE","I LIKE FRONTEND PROGRAMMING"]})}}]),e}(a.a.Component);function N(){var n=Object(l.a)(["\n  width: 20px;\n  height: 20px;\n  font-size: 3rem;\n  color: white;\n  background-color: transparent;\n  transform: translate(-50%, -50%) rotate(-90deg);\n  bottom: 0;\n  cursor: pointer;\n"]);return N=function(){return n},n}var S=u.b.div(N()),C=function(n){return a.a.createElement(S,n,"<")};function I(){var n=Object(l.a)(["\n  position: absolute;\n  bottom: 10vh;\n  left: 50%;\n  margin-left: -10px;\n"]);return I=function(){return n},n}function D(){var n=Object(l.a)(["\n  display: block;\n  height: 80vh;\n"]);return D=function(){return n},n}var F=u.b.section(D()),M=u.b.div(I()),X=function(){var n=Object(m.e)();return a.a.createElement(F,null,a.a.createElement(T,null),a.a.createElement(M,null,a.a.createElement(C,{onClick:function(){return n.push("/about")}})))},z=function(){return a.a.createElement("div",null,"About")},A=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{path:"/",exact:!0},a.a.createElement(X,null)),a.a.createElement(m.a,{path:"/about"},a.a.createElement(z,null)))},G=function(n){return a.a.createElement(i.b,Object.assign({to:"/about"},n),n.children)};function J(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]);return J=function(){return n},n}function R(){var n=Object(l.a)(["\n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n  background: #effffa;\n  transform: ",";\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transition: transform 0.3s ease-in-out;\n\n  @media (max-width: 576px) {\n    width: 100%;\n  }\n\n  a {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: #0d0c1d;\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: 576px) {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: #343078;\n    }\n  }\n"]);return R=function(){return n},n}function Y(){var n=Object(l.a)(["\n  top: 5%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-end;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return Y=function(){return n},n}var H=u.b.button(Y(),(function(n){return n.open?"#0D0C1D":"#EFFFFA"}),(function(n){return n.open?"rotate(45deg) translateX(20px) translateY(-20px)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"translateX(20px)":"translateX(0)"}),(function(n){return n.open?"rotate(-45deg) translateX(20px) translateY(20px)":"rotate(0)"})),K=u.b.nav(R(),(function(n){return n.open?"flex":"none"}),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),L=function(n){var e=n.open,t=n.setOpen;return a.a.createElement(K,{open:e},a.a.createElement(G,{onClick:function(){return t(!e)}},a.a.createElement("span",{role:"img","aria-label":"about us"},"\ud83d\udc81\ud83c\udffb\u200d\u2642\ufe0f"),"About Me"),a.a.createElement("a",{href:"/"},a.a.createElement("span",{role:"img","aria-label":"price"},"\ud83d\udcb8"),"Pricing"),a.a.createElement("a",{href:"/"},a.a.createElement("span",{role:"img","aria-label":"contact"},"\ud83d\udce9"),"Contact"))},W=u.b.div(J()),B=function(n){var e=n.open,t=n.setOpen;return a.a.createElement(H,{open:e,onClick:function(){return t(!e)}},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},P=function(){var n=Object(r.useState)(!1),e=Object(g.a)(n,2),t=e[0],o=e[1];return a.a.createElement(W,null,a.a.createElement(B,{open:t,setOpen:o}),a.a.createElement(L,{open:t,setOpen:o}))},U=function(n){return a.a.createElement(i.b,Object.assign({to:"/"},n),n.children)};function V(){var n=Object(l.a)(['\n  color: white;\n  @import url("https://fonts.googleapis.com/css?family=Do+Hyeon");\n  font-family: "Do Hyeon", sans-serif;\n']);return V=function(){return n},n}function $(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 10vh;\n"]);return $=function(){return n},n}var q=u.b.header($()),Q=u.b.h3(V()),Z=function(){return a.a.createElement(q,null,a.a.createElement(U,null,a.a.createElement(Q,null,"JONGKEUN")),a.a.createElement(P,null))};var _=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null),a.a.createElement(i.a,null,a.a.createElement(Z,null),a.a.createElement(A,null)))};c.a.render(a.a.createElement(_,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8de4980a.chunk.js.map