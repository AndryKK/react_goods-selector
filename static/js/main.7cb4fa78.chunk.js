(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var c=o(4),s=o.n(c),n=o(2),l=o(5),a=o(6),d=o(9),r=o(8),i=o(1),u=o.n(i),b=(o(14),o(7)),j=o.n(b),p=o(0),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(d.a)(o,e);var t=Object(r.a)(o);function o(){var e;Object(l.a)(this,o);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={allSelectedGood:["Jam"],goods:m},e.selectGoods=function(t){var o=Object(n.a)(e.state.allSelectedGood);o.push(t),e.setState({allSelectedGood:Object(n.a)(o)})},e.removeGoods=function(){e.setState({allSelectedGood:[]})},e.removeGood=function(t){var o=Object(n.a)(e.state.allSelectedGood);e.setState({allSelectedGood:o.filter((function(e){return e!==t}))})},e}return Object(a.a)(o,[{key:"render",value:function(){var e=this,t=this.state,o=t.allSelectedGood,c=t.goods;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"App__selectBlock",children:[Object(p.jsx)("h1",{className:"App__title",children:0!==o.length?"".concat(o," is selected"):"No goods selected"}),Object(p.jsx)("button",{className:"App__button",type:"button",onClick:function(){return e.removeGoods()},children:"X"})]}),Object(p.jsx)("ul",{children:c.map((function(t){return Object(p.jsxs)("div",{className:"goods__list",children:[Object(p.jsx)("li",{className:j()("goods__item",{"goods__item--selected":e.state.allSelectedGood.includes(t)}),children:t}),e.state.allSelectedGood.includes(t)?Object(p.jsx)("button",{type:"button",className:"goods__button",onClick:function(){return e.removeGood(t)},children:"Remove"}):Object(p.jsx)("button",{type:"button",className:"goods__button",onClick:function(){return e.selectGoods(t)},children:"Add"})]})}))})]})}}]),o}(u.a.Component),_=h;s.a.render(Object(p.jsx)(_,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7cb4fa78.chunk.js.map