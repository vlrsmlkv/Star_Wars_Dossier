(this["webpackJsonpstar-wars-dossier"]=this["webpackJsonpstar-wars-dossier"]||[]).push([[0],{136:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(20),r=c.n(a),i=(c(32),c(71),c(15)),o=c(141),j=c(142),l=c(140),d=c(138),b=c(66),u=c(60),h=c.n(u),O=function(e,t,c){c(!0),h.a.get(e).then((function(e){t(e.data),c(!1)})).catch((function(e){return console.error("Error: ".concat(e))}))},m=c(2),x=function(e){var t=e.characters,c=e.fetchedData,s=e.setIsLoading;return Object(m.jsx)(b.a,{onClick:function(){O("https://swapi.py4e.com/api/people/",(function(e){c(e),t(e.results)}),s)},appearance:"ghost",color:"blue",children:"Click me to fetch"})},p=function(e){var t=e.data;return t?Object(m.jsx)(d.a.Item,{colspan:8,children:Object(m.jsxs)(d.a,{className:"dossier-container",children:[Object(m.jsx)(d.a.Item,{colspan:24,className:"dossier-title",children:t.name}),Object(m.jsx)(d.a.Item,{colspan:24,children:Object(m.jsxs)(d.a,{justify:"space-around",children:[Object(m.jsx)(d.a.Item,{md:12,children:"Gender"}),Object(m.jsx)(d.a.Item,{md:12,children:t.gender})]})}),Object(m.jsx)(d.a.Item,{colspan:24,children:Object(m.jsxs)(d.a,{justify:"space-around",children:[Object(m.jsx)(d.a.Item,{md:12,children:"Date of birth"}),Object(m.jsx)(d.a.Item,{md:12,children:t.birth_year})]})}),Object(m.jsx)(d.a.Item,{colspan:24,children:Object(m.jsxs)(d.a,{justify:"space-around",children:[Object(m.jsx)(d.a.Item,{md:12,children:"Height"}),Object(m.jsx)(d.a.Item,{md:12,children:t.height})]})}),Object(m.jsx)(d.a.Item,{colspan:24,children:Object(m.jsxs)(d.a,{justify:"space-around",children:[Object(m.jsx)(d.a.Item,{md:12,children:"Mass"}),Object(m.jsx)(d.a.Item,{md:12,children:t.mass})]})}),Object(m.jsx)(d.a.Item,{colspan:24,children:Object(m.jsxs)(d.a,{justify:"space-around",children:[Object(m.jsx)(d.a.Item,{md:12,children:"Hair color"}),Object(m.jsx)(d.a.Item,{md:12,children:t.hair_color})]})}),Object(m.jsx)(d.a.Item,{colspan:24,children:Object(m.jsxs)(d.a,{justify:"space-around",children:[Object(m.jsx)(d.a.Item,{md:12,children:"Scin color"}),Object(m.jsx)(d.a.Item,{md:12,children:t.skin_color})]})}),Object(m.jsx)(d.a.Item,{colspan:24,children:Object(m.jsxs)(d.a,{justify:"space-around",children:[Object(m.jsx)(d.a.Item,{md:12,children:"Eye color"}),Object(m.jsx)(d.a.Item,{md:12,children:t.eye_color})]})})]})}):null},f=function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(null),r=Object(i.a)(a,2),b=r[0],u=r[1],h=Object(s.useState)(1),f=Object(i.a)(h,2),g=f[0],I=f[1],v=Object(s.useState)(!1),w=Object(i.a)(v,2),y=w[0],k=w[1],N=Object(s.useState)(!1),C=Object(i.a)(N,2),S=C[0],E=C[1],L=function(){E(window.pageYOffset>140)};return Object(s.useEffect)((function(){return window.addEventListener("scroll",L),function(){return window.removeEventListener("scroll",L)}}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Star Wars Characters"}),!b&&Object(m.jsx)(x,{className:"fetch-button",characters:n,fetchedData:u,setIsLoading:k}),y&&Object(m.jsx)(l.a,{className:"loader",backdrop:!0,size:"lg",inverse:!0,content:"Fetching characters...",vertical:!0}),b&&Object(m.jsxs)("div",{className:"page-pagination-top",children:[Object(m.jsx)(o.a,{onClick:function(){O(b.previous,(function(e){u(e),n(e.results)}),k),I(b.previous?g-1:g)},icon:Object(m.jsx)(j.a,{icon:"arrow-left"}),placement:"right",disabled:!b.previous||y}),Object(m.jsx)("div",{className:"page-number",children:g}),Object(m.jsx)(o.a,{onClick:function(){O(b.next,(function(e){u(e),n(e.results)}),k),I(b.next?g+1:g)},icon:Object(m.jsx)(j.a,{icon:"arrow-right"}),placement:"right",disabled:!b.next||y})]}),Object(m.jsx)(d.a,{className:"dossiers-container",justify:"start",children:c&&c.map((function(e,t){return Object(m.jsx)(p,{data:e},"character+".concat(t+1))}))}),b&&S&&Object(m.jsxs)("div",{className:"page-pagination-bottom",children:[Object(m.jsx)(o.a,{onClick:function(){O(b.previous,(function(e){u(e),n(e.results)}),k),I(b.previous?g-1:g)},icon:Object(m.jsx)(j.a,{icon:"arrow-left"}),placement:"right",disabled:!b.previous||y}),Object(m.jsx)("div",{className:"page-number",children:g}),Object(m.jsx)(o.a,{onClick:function(){O(b.next,(function(e){u(e),n(e.results)}),k),I(b.next?g+1:g)},icon:Object(m.jsx)(j.a,{icon:"arrow-right"}),placement:"right",disabled:!b.next||y})]}),b&&Object(m.jsx)("div",{className:"page-up-button",children:Object(m.jsx)(o.a,{style:{display:S?"inline":"none"},icon:Object(m.jsx)(j.a,{icon:"angle-double-up"}),size:"lg",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}})})]})};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))},32:function(e,t,c){}},[[136,1,2]]]);
//# sourceMappingURL=main.117aef02.chunk.js.map