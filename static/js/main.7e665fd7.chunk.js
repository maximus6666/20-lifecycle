(this["webpackJsonp20-lifecycle"]=this["webpackJsonp20-lifecycle"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(1),i=n.n(s),a=n(3),c=n.n(a),r=(n(12),n(13),n(4)),o=n(5),u=n(7),l=n(6),m=(n(14),n(0)),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).getTimeString=function(){var t=Math.floor(s.state.time/1e3/60),e=Math.floor(s.state.time/1e3%60);return t<10&&(t="0"+t),e<10&&(e="0"+e),"".concat(t,":").concat(e)},s.startTimer=function(){if(s.state.paused){var t=setInterval((function(){var e=s.state.time-s.state.step;s.state.onTick(e),s.setState({time:e}),0===s.state.time&&(clearInterval(t),s.setState({paused:!0}))}),s.state.step);s.setState({time:s.props.time,id:t,paused:!1})}else 0===s.state.time&&s.setState({time:s.props.time}),clearInterval(s.state.id),s.setState({paused:!0})},s.button=i.a.createRef(),s.state={time:t.time,id:0,paused:!0,step:t.step||1e3,onTick:t.onTick||function(){}},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.autostart&&this.startTimer()}},{key:"render",value:function(){var t=this.state.paused?"Start":"Pause",e=this.getTimeString(),n="".concat(100*this.state.time/this.props.time,"%");return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("button",{className:"button",ref:this.button,onClick:this.startTimer,children:t}),Object(m.jsx)("div",{children:e}),Object(m.jsx)("div",{style:{width:n},className:"line"})]})}}]),n}(i.a.Component);var d=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Timer"}),Object(m.jsx)(p,{time:5e3,autostart:!1}),Object(m.jsx)(p,{onTick:function(t){return console.log("\u0417\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044c \u0447\u0430\u0441\u0443 "+t)},time:2e4,autostart:!0,step:2e3})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),s(t),i(t),a(t),c(t)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(d,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.7e665fd7.chunk.js.map