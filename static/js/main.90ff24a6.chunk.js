(this["webpackJsonphw-2"]=this["webpackJsonphw-2"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={sectionContainer:"Section_sectionContainer__cGJ5c"}},function(e,t,n){e.exports={button:"FeedbackOptions_button__3n-hy"}},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=(n(15),n(3)),u=n(4),i=n(5),s=n(9),d=n(8),m=n(6),b=n.n(m);var p=function(e){var t=e.title,n=e.children;return r.a.createElement("div",{className:b.a.sectionContainer},r.a.createElement("h2",null,t),r.a.createElement("div",null,n))},v=n(7),f=n.n(v);var E=function(e){var t=e.options,n=e.onAddFeedback,a=Object.keys(t).map((function(e){return r.a.createElement("button",{className:f.a.button,key:e,onClick:function(){return n(e)}},e)}));return r.a.createElement(r.a.Fragment,null,a)};var h=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Good: ",t),r.a.createElement("p",null,"Neutral: ",n),r.a.createElement("p",null,"Bad: ",a),r.a.createElement("p",null,"Total: ",c),r.a.createElement("p",null,"Positive feedback: ",o,"% "))};var k=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,t))},g=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.addFeedback=function(t){e.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"Live your Feedback"},r.a.createElement(E,{options:this.state,onAddFeedback:this.addFeedback})),r.a.createElement(p,{title:"Statistics"},this.countTotalFeedback()?r.a.createElement(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):r.a.createElement(k,{message:"No feedback given :("})))}}]),n}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.90ff24a6.chunk.js.map