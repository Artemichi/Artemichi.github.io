(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{13:function(e,t,n){e.exports={carusel:"imgSlider_carusel__82FUQ",control:"imgSlider_control__1SMs8",prev:"imgSlider_prev__2oPQn",next:"imgSlider_next__3QT_z",indicatorsList:"imgSlider_indicatorsList__bIJEZ",settings:"imgSlider_settings__3p7hv",likes:"imgSlider_likes__2NXQc"}},54:function(e,t,n){e.exports=n(66)},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=n(29),l=n.n(i),s=n(33),u=n(14),m=n(99),p=n(13),f=n.n(p);function d(e,t){switch(t.type){case"NEXT_IMG":return e===t.payload-1?0:e+1;case"PREV_IMG":return 0===t.payload.index?t.payload.last:e-1;case"JUMP_TO":return t.payload;default:return e}}var h=n(17),E=n(41),g=n.n(E),b=n(42),v=n.n(b),y=n(46),O=n.n(y),j=n(45),_=n.n(j),x=n(48),S=n.n(x),k=n(47),w=n.n(k),z=n(50),I=n.n(z),N=n(44),M=n.n(N),T=n(49),C=n.n(T),P=n(43),G=n.n(P),R=n(100),L=n(94),U=n(95),X=n(101),D=n(98),F=n(96),J=n(97),V=n(38),Q=n.n(V),W=n(36),Z=n.n(W),B=function(e){var t=e.imgs,n=e.index,a=e.dispatch,c=e.setDir,o=Object(h.b)({from:{transform:"translateY(200px)"},transform:"translateY(0px)"});return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a.div,{style:o,className:f.a.indicatorsList},t.map((function(e,t){return r.a.createElement("div",{key:t,onClick:function(){c((function(){return n>t?"right":"left"})),a({type:"JUMP_TO",payload:t})}},t===n?r.a.createElement(Z.a,{color:"inherit"}):r.a.createElement(Q.a,{color:"action"}))}))))},A=n(39),Y=n(40),H=function(e){var t=e.idx,n=e.images,a=e.dispatch,c=e.autoPlay,o=e.dir,i=e.setDir,l=Object(Y.a)({onSwipedLeft:function(){i("left"),a({type:"NEXT_IMG",payload:n.length})},onSwipedRight:function(){i("right"),a({type:"PREV_IMG",payload:{index:t,last:n.length-1}})},preventDefaultTouchmoveEvent:!0,trackTouch:!0,trackMouse:!0});return Object(h.c)(n[t],t,{from:{opacity:0,transform:"scale(1)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.7)"}}).map((function(e){var t=e.item,n=e.props,a=e.key;return r.a.createElement(h.a.div,Object.assign({key:a},l,{className:f.a.carusel,style:Object(A.a)({},n,{backgroundImage:"url(".concat(t,")"),transformOrigin:c?"left":o})}))}))},$=function(e){var t=e.images,n=e.links,c=e.likes,o=e.info,i=Object(a.useState)((function(){return window.innerWidth>767})),l=Object(u.a)(i,2),s=l[0],m=l[1],p=Object(a.useState)(!1),E=Object(u.a)(p,2),b=E[0],y=E[1],j=Object(a.useReducer)(d,0),x=Object(u.a)(j,2),k=x[0],z=x[1],N=Object(h.b)({opacity:s?1:0}),T=r.a.useState(null),P=Object(u.a)(T,2),V=P[0],Q=P[1],W=Object(a.useState)(""),Z=Object(u.a)(W,2),A=Z[0],Y=Z[1];Object(a.useEffect)((function(){var e=b?setInterval((function(){return z({type:"NEXT_IMG",payload:t.length})}),3e3):null;return b&&m(!1),function(){clearInterval(e),m((function(){return window.innerWidth>767}))}}),[b,t.length]);var $=Boolean(V),q=$?"popover":void 0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{idx:k,images:t,dispatch:z,autoPlay:b,dir:A,setDir:Y}),r.a.createElement(h.a.div,{style:N},r.a.createElement("div",{className:"".concat(f.a.control," ").concat(f.a.prev)},r.a.createElement(X.a,{"aria-label":"prev",color:"inherit",onClick:function(){Y("right"),z({type:"PREV_IMG",payload:{index:k,last:t.length-1}})}},r.a.createElement(g.a,{fontSize:"large"}))),r.a.createElement("div",{className:"".concat(f.a.control," ").concat(f.a.next)},r.a.createElement(X.a,{"aria-label":"next",color:"inherit",onClick:function(){Y("left"),z({type:"NEXT_IMG",payload:t.length})}},r.a.createElement(v.a,{fontSize:"large"})))),r.a.createElement("div",{className:f.a.settings},r.a.createElement(X.a,{"aria-describedby":q,"aria-label":"info",color:"inherit",onClick:function(e){return Q(e.currentTarget)}},r.a.createElement(G.a,{fontSize:"large"})),r.a.createElement(R.a,{id:q,open:$,anchorEl:V,onClose:function(){return Q(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(L.a,{className:f.a.root},r.a.createElement(U.a,null,r.a.createElement(F.a,{color:"textSecondary"},"\u0410\u0432\u0442\u043e\u0440"),r.a.createElement(F.a,{variant:"h6",component:"h2"},o[k].user),r.a.createElement(J.a,null),o[k].description?r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{color:"textSecondary"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.a.createElement(F.a,{variant:"h6",component:"h2"},o[k].description),r.a.createElement(J.a,null)):null,r.a.createElement(F.a,{variant:"body2",component:"p"},o[k].location)))),r.a.createElement(X.a,{"aria-label":"download",color:"inherit",onClick:function(){window.open(n[k]).focus()}},r.a.createElement(M.a,{fontSize:"large"})),r.a.createElement(X.a,{"aria-label":"controls",color:"inherit",onClick:function(){return m((function(e){return!e}))}},s?r.a.createElement(_.a,{fontSize:"large"}):r.a.createElement(O.a,{color:"action",fontSize:"large"})),r.a.createElement(X.a,{"aria-label":"play",color:"inherit",onClick:function(){return y((function(e){return!e}))}},b?r.a.createElement(w.a,{color:"action",fontSize:"large"}):r.a.createElement(S.a,{fontSize:"large"}))),r.a.createElement("div",{className:f.a.likes},r.a.createElement(D.a,{badgeContent:c[k],max:100,color:"primary"},0===c[k]?r.a.createElement(C.a,{color:"error",fontSize:"large"}):r.a.createElement(I.a,{color:"error",fontSize:"large"}))),r.a.createElement(B,{imgs:t,index:k,dispatch:z,setDir:Y}))};var q=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),i=Object(u.a)(o,2),p=i[0],f=i[1],d=Object(a.useState)([]),h=Object(u.a)(d,2),E=h[0],g=h[1],b=Object(a.useState)([]),v=Object(u.a)(b,2),y=v[0],O=v[1],j=Object(a.useState)(!0),_=Object(u.a)(j,2),x=_[0],S=_[1];return Object(a.useEffect)((function(){var e=Object.values({count:"&count=8",filter:"&content_filter=high",orientation:"&orientation=landscape"}).join("");(function(){var e=Object(s.a)(l.a.mark((function e(t){var n,a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.next=8,a.map((function(e){return e.urls.regular}));case 8:return r=e.sent,e.t0=f,e.next=12,a.map((function(e){return e.urls.full}));case 12:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=g,e.next=17,a.map((function(e){return e.likes}));case 17:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=O,e.next=22,a.map((function(e){return{user:e.user.name,description:e.description,location:e.location.name}}));case 22:return e.t5=e.sent,(0,e.t4)(e.t5),e.next=26,r.map(function(){var e=Object(s.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return a=e.sent,r=URL.createObjectURL(a),(new Image).src=r,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 26:return c=e.sent,e.next=29,Promise.all(c);case 29:return e.abrupt("return",e.sent);case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()("".concat("https://api.unsplash.com/").concat("photos/random","?client_id=").concat("3IOdrMVNZtnMLpdiVZRXUFi27z863zHxtejNZO1t0hA").concat(e)).then((function(e){c(e),S(!1)}))}),[]),r.a.createElement("div",{className:"App"},x?r.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",color:"#f44336"}},r.a.createElement(m.a,{color:"inherit",size:70})):r.a.createElement($,{images:n,links:p,likes:E,info:y}))};n(65),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.2e037f54.chunk.js.map