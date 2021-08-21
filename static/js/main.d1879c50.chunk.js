(this["webpackJsonpwine-frontend"]=this["webpackJsonpwine-frontend"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(25),a=n.n(i),s=(n(34),n(12)),o=n(13),j=n(15),h=n(14),l=n(28),d=n(6),b=(n(35),n(47)),u=n(1),p=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"ID"}),Object(u.jsx)("th",{children:" Name"}),Object(u.jsx)("th",{children:" Price"}),Object(u.jsx)("th",{children:"Varietal"}),Object(u.jsx)("th",{children:"Description"})]})}),Object(u.jsx)("tbody",{children:this.props.wines.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t+1}),Object(u.jsx)("td",{children:"name"}),Object(u.jsx)("td",{children:e.price}),Object(u.jsx)("td",{children:e.varietal}),Object(u.jsx)("td",{children:e.description})]},t)}))})]})})}}]),n}(c.Component),O=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={wines:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://wine-app100.herokuapp.com/wines/").then((function(e){return e.json()})).then((function(t){console.log("data",t),e.setState({wines:t})}))}},{key:"render",value:function(){return console.log("data",this.state.wines),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:" All Wines "}),Object(u.jsx)(p,{wines:this.state.wines})]})}}]),n}(c.Component),x=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={wine:{}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e,t=this,n=this.props.match.params.wineID;(e=n,fetch("https://cors-anywhere.herokuapp.com/https://wine-app100.herokuapp.com/wines/".concat(e)).then((function(e){return e.json()}))).then((function(e){return t.setState({wine:e})}))}},{key:"render",value:function(){var e=this.state.wine;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:" Name "}),Object(u.jsxs)("p",{children:[" ",e.name]}),Object(u.jsx)("h2",{children:" Price "}),Object(u.jsxs)("p",{children:[" ",e.price]}),Object(u.jsx)("h2",{children:" Varietal "}),Object(u.jsxs)("p",{children:[" ",e.varietal]}),Object(u.jsx)("h2",{children:" Description "}),Object(u.jsxs)("p",{children:[" ",e.description]})]})}}]),n}(c.Component),v=n(48),f=n(49),m=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={redirect:!1},e}return Object(o.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return fetch("https://cors-anywhere.herokuapp.com/https://wine-app100.herokuapp.com/wines/",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)})}({name:e.target.elements[0].value,price:e.target.elements[2].value,varietal:e.target.elements[1].value,description:e.target.elements[3].value}).then((function(e){t.setState({redirect:!0})}))}},{key:"render",value:function(){return this.state.redirect?Object(u.jsx)(d.a,{to:"/"}):Object(u.jsx)("div",{children:Object(u.jsxs)(v.a,{onSubmit:this.handleSubmit.bind(this),children:[Object(u.jsxs)(v.a.Group,{controlId:"name",children:[Object(u.jsx)(v.a.Label,{children:"Wine Name"}),Object(u.jsx)(v.a.Control,{})]}),Object(u.jsxs)(v.a.Group,{controlId:"varietal",children:[Object(u.jsx)(v.a.Label,{children:"Wine Varietal"}),Object(u.jsx)(v.a.Control,{})]}),Object(u.jsxs)(v.a.Group,{controlId:"price",children:[Object(u.jsx)(v.a.Label,{children:"Wine Price"}),Object(u.jsx)(v.a.Control,{})]}),Object(u.jsxs)(v.a.Group,{controlId:"description",children:[Object(u.jsx)(v.a.Label,{children:"Wine Description"}),Object(u.jsx)(v.a.Control,{})]}),Object(u.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),n}(c.Component),w=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(d.b,{exact:!0,path:"/",component:O}),Object(u.jsx)(d.b,{exact:!0,path:"/add-wine",component:m}),Object(u.jsx)(d.b,{exact:!0,path:"/wines/:wineID",component:x})]})})})}}]),n}(c.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};n(45);a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),y()}},[[46,1,2]]]);
//# sourceMappingURL=main.d1879c50.chunk.js.map