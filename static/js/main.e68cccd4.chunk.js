(this.webpackJsonpshakes=this.webpackJsonpshakes||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),c=n.n(a),r=n(3),i=n.n(r),h=(n(13),n(4)),o=n(5),u=n(7),l=n(6),d=(n(14),n(15),function(e){return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{alt:"shake",src:e.shake.strDrinkThumb}),Object(s.jsx)("h2",{children:e.shake.strDrink})]})}),j=(n(16),function(e){return Object(s.jsx)("div",{className:"card-list",children:e.shakes.map((function(e){return Object(s.jsx)(d,{shake:e},e.idDrink)}))})}),k=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(s.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={shakes:[],searchField:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Milk").then((function(e){return e.json()})).then((function(t){return e.setState({shakes:t.drinks})}))}},{key:"render",value:function(){var e=this.state,t=e.shakes,n=e.searchField,a=t.filter((function(e){return e.strDrink.toLowerCase().includes(n.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"MILK SHAKES"}),Object(s.jsx)(k,{placeholder:"search shakes",handleChange:this.handleChange}),Object(s.jsx)(j,{shakes:a})]})}}]),n}(a.Component);i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.e68cccd4.chunk.js.map