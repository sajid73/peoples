(this.webpackJsonppeoplesjs=this.webpackJsonppeoplesjs||[]).push([[0],{26:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(27),a=n.n(r),i=n(10),o=n(15),j=n(6),l=(n(34),n(47)),u=n(29),h=n(16),p=n.n(h),b=n(19),d=n(48),O=(n(36),n(2)),x=function(e){var t=e.people,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(""),j=Object(i.a)(o,2),l=j[0],u=j[1];return fetch(t.homeworld).then((function(e){return e.json()})).then((function(e){return a(e.name)})),void 0!==t.species[0]&&fetch(t.species[0]).then((function(e){return e.json()})).then((function(e){return u(e.name)})),Object(O.jsxs)("div",{className:"people_card",children:[Object(O.jsxs)("div",{className:"infos",children:[Object(O.jsx)("h4",{children:t.name}),Object(O.jsx)("p",{children:r||"Loading..."})]}),Object(O.jsx)("div",{className:"category",children:Object(O.jsx)("p",{children:l?"".concat(l):"Human"})})]})},f=function(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(j.f)(),a=function(){var e=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people/?page=".concat(t.queryKey[1]));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=Object(d.a)(["people",n],a),u=l.data,h=l.status;return Object(O.jsxs)("div",{children:["success"===h&&u.results?u.results.map((function(e){return Object(O.jsx)("div",{onClick:function(){return function(e){var t=e.url.slice(29,30);r.push("/api/people/".concat(t))}(e)},children:Object(O.jsx)(x,{people:e})},e.name)})):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"error",children:"No more data available"}),Object(O.jsx)(o.b,{to:"/",children:"Go to home"})]}),"loading"===h&&Object(O.jsx)("h1",{className:"loading",children:"Loading. Please wait!"}),"error"===h&&Object(O.jsx)("h1",{className:"error",children:"Something went wrong!"}),Object(O.jsxs)("div",{children:[1===n?"":Object(O.jsx)("button",{onClick:function(){return s((function(e){return e-1}))},className:"pagination-button",children:"Prev"}),n,Object(O.jsx)("button",{onClick:function(){return s((function(e){return e+1}))},className:"pagination-button",children:"Next"})]})]})},m=(n(43),function(e){var t=e.setPeople;return Object(O.jsx)("div",{children:Object(O.jsx)("input",{className:"searchbar",type:"text",name:"peopleName",placeholder:"Search people",onChange:function(e){return function(e){t(e.target.value)}(e)}})})}),v=function(e){var t=e.search,n=function(){var e=Object(b.a)(p.a.mark((function e(){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://swapi.dev/api/people/?search=".concat(t),e.next=3,fetch(n);case 3:return c=e.sent,e.abrupt("return",c.json());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=Object(d.a)("search",n),s=c.data,r=c.status;return Object(O.jsxs)("div",{children:["success"===r&&s.results.map((function(e){return Object(O.jsx)(x,{people:e},e.name)})),"loading"===r&&Object(O.jsx)("h1",{className:"loading",children:"Loading. Please wait!"}),"idle"===r&&Object(O.jsx)("h1",{className:"loading",children:"Loading. Please wait!"}),"error"===r&&Object(O.jsx)("h1",{className:"error",children:"No Match found / something went wrong!"})]})},g=new l.a,N=function(e){var t=e.people,n=e.setPeople;return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{setPeople:n}),t&&Object(O.jsxs)("h3",{style:{margin:"10px"},children:["Searching for: ",t]}),Object(O.jsx)(u.a,{client:g,children:t?Object(O.jsx)(v,{search:t}):Object(O.jsx)(f,{})})]})},w=(n(26),function(e){var t=e.vehicle,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],a=s[1];return fetch(t).then((function(e){return e.json()})).then((function(e){return a(e.name)})),Object(O.jsxs)("li",{className:"vehicle",children:["- ",r]})}),S=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(j.g)().id;return Object(c.useEffect)((function(){fetch("https://swapi.dev/api/people/"+r).then((function(e){return e.json()})).then((function(e){s(e)}))}),[r]),Object(O.jsx)("div",{className:"singleDetails",children:n&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:n.name}),Object(O.jsx)("h3",{className:"vehicles",children:"Vehicles"}),Object(O.jsx)("ul",{children:n.vehicles.map((function(e){return Object(O.jsx)(w,{vehicle:e},e)}))}),Object(O.jsxs)("h3",{className:"vehicles",children:["Height: ",n.height," cm"]}),Object(O.jsxs)("h3",{className:"vehicles",children:["Mass: ",n.mass," kg"]})]})})};var k=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(o.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",children:Object(O.jsx)(o.b,{to:"/api/people",children:"See all people list"})}),Object(O.jsx)(j.a,{exact:!0,path:"/api/people",children:Object(O.jsx)(N,{people:n,setPeople:s})}),Object(O.jsx)(j.a,{path:"/api/people/:id",children:Object(O.jsx)(S,{})})]})})})};n(44);a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c2e24ab9.chunk.js.map