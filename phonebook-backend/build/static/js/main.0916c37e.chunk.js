(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},20:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=(t(20),t(14)),l=t(2),i=function(e){var n=e.message,t=e.errorStatus;return null===n?null:r.a.createElement("div",{className:t?"error":"notification"},n)},m=t(3),s=t.n(m),f="/api/persons",d=function(e){return s.a.post(f,e).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},h=function(){return s.a.get(f).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},E=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),m=Object(l.a)(c,2),s=m[0],f=m[1],E=Object(a.useState)(""),g=Object(l.a)(E,2),N=g[0],j=g[1],O=Object(a.useState)(""),C=Object(l.a)(O,2),S=C[0],T=C[1],y=Object(a.useState)(null),k=Object(l.a)(y,2),L=k[0],D=k[1],P=Object(a.useState)(!1),x=Object(l.a)(P,2),B=x[0],J=x[1];Object(a.useEffect)((function(){h().then((function(e){return u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"PhoneBook"),r.a.createElement("div",null,"Showing results for:"),r.a.createElement(i,{message:L,errorStatus:B}),r.a.createElement(w,{searchTerm:S,onChange:function(e){return T(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v,{addPerson:function(e){e.preventDefault();var n={name:s,number:N},a=t.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));if(0===a.length)d(n).then((function(e){u(t.concat(e)),J(!1),D("".concat(e.name," was added!")),setTimeout((function(){D(null)}),4e3),f(""),j("")})).catch((function(e){J(!0),D(e.response.data.error),setTimeout((function(){D(null)}),6e3),f(""),j("")}));else if(window.confirm("".concat(a[0].name," already exists, replace the old phone number with a new one?"))){var r=Object(o.a)({},a[0],{number:N});b(a[0].id,r).then((function(e){u(t.map((function(n){return n.id===a[0].id?e:n}))),D("".concat(a[0].name,"'s details was updated")),setTimeout((function(){D(null)}),4e3),f(""),j("")})).catch((function(e){D(e.response.data),setTimeout((function(){D(null)}),4e3),J(!0),f(""),j("")}))}else f(""),j("")},newName:s,newNumber:N,handleNewName:function(e){return f(e.target.value)},handleNewNumber:function(e){return j(e.target.value)}}),r.a.createElement("h3",null,"Records"),function(e){return t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",": ".concat(e.number),r.a.createElement("button",{onClick:function(){return function(e,n){var a=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n,"?"))?(p(a.id),u(t.filter((function(n){return n.id!==e}))),J(!1),D("".concat(n," was deleted successfully!")),setTimeout((function(){D(null)}),4e3)):u(t)}(e.id,e.name)},style:{marginLeft:"1rem"}},"Delete"))}))}(S))},w=function(e){var n=e.searchTerm,t=e.onChange;return r.a.createElement("input",{value:n,onChange:t})},v=function(e){var n=e.addPerson,t=e.newName,a=e.newNumber,u=e.handleNewName,c=e.handleNewNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{value:t,onChange:u}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Number:"),r.a.createElement("input",{value:a,onChange:c})," ",r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add"))};c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0916c37e.chunk.js.map