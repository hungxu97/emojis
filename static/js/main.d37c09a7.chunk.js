(this.webpackJsonpemoji=this.webpackJsonpemoji||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),i=(n(12),n(13),n(14),n(3)),l=n(4),s=n(5),m=(n(15),n(6)),u=(n(16),n(17),function(e){var t=e.character;e.unicodeName;return o.a.createElement("div",{className:"emoji"},o.a.createElement("span",{role:"img"},t))}),f=function(e){var t=e.emojis,n=e.title;return console.log("render"+n),o.a.createElement("div",{className:"category-item"},o.a.createElement("h1",null,n.toUpperCase()),t.length>0&&t.map((function(e){var t=e.codePoint,n=Object(m.a)(e,["codePoint"]);return o.a.createElement(u,Object.assign({key:t},n))})))},d=(n(18),function(e){var t=e.onchange;return o.a.createElement("div",{className:"search"},o.a.createElement("input",{type:"text",onChange:t,placeholder:"Anything that you remember about a emoj..."}))}),h=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){fetch("https://emoji-api.com/emojis?access_key=8c621d1ab91385b6534d555df3e9f39362eb9082").then((function(e){return e.json()})).then((function(e){e.length=1e3,a.cat1=e.filter((function(e){return"smileys-emotion"===e.group})),a.cat2=e.filter((function(e){return"people-body"===e.group})),a.setState({emojis:e})}))},a.handleInputChange=function(e){a.setState({input:e.currentTarget.value})},a.getFilteredEmojis=function(){return a.state.emojis.length>0?a.state.emojis.filter((function(e){return e.unicodeName.includes(a.state.input)})):[]},a.render=function(){return o.a.createElement("div",{className:"category"},o.a.createElement(d,{onchange:a.handleInputChange}),o.a.createElement("div",{className:"items"},o.a.createElement("div",{className:"left"},o.a.createElement(f,{title:"Emojis",emojis:a.getFilteredEmojis()})),o.a.createElement("div",{className:"right"},o.a.createElement(f,{title:"smileys emotion",emojis:a.cat1}),o.a.createElement(f,{title:"people body",emojis:a.cat2}))))},a.state={emojis:[],input:""},a.cat1=[],a.cat2=[],a}return n}(o.a.Component),p=function(){return o.a.createElement("div",{className:"home"},o.a.createElement(h,null))};var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d37c09a7.chunk.js.map