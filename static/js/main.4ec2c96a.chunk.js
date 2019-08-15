(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(3),r=a.n(i),c=(a(15),a(4)),o=a(5),l=a(7),h=a(6),u=a(1),m=a(8),d=(a(16),window.accurateInterval),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={timerLabel:"Session",breakLength:5,sessionLength:25,timer:1500,start:!1,intervalID:""},a.startPause=a.startPause.bind(Object(u.a)(a)),a.countdown=a.countdown.bind(Object(u.a)(a)),a.reset=a.reset.bind(Object(u.a)(a)),a.startCountdown=a.startCountdown.bind(Object(u.a)(a)),a.clockUpdater=a.clockUpdater.bind(Object(u.a)(a)),a.breakInc=a.breakInc.bind(Object(u.a)(a)),a.breakDec=a.breakDec.bind(Object(u.a)(a)),a.sessionInc=a.sessionInc.bind(Object(u.a)(a)),a.sessionDec=a.sessionDec.bind(Object(u.a)(a)),a.defBreakLength=a.defBreakLength.bind(Object(u.a)(a)),a.defSessionLength=a.defBreakLength.bind(Object(u.a)(a)),a.playBeep=a.playBeep.bind(Object(u.a)(a)),a.pauseBeep=a.pauseBeep.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"breakInc",value:function(){this.state.breakLength<=59&&0==this.state.start&&this.setState({breakLength:this.state.breakLength+1})}},{key:"breakDec",value:function(){this.state.breakLength>=2&&0==this.state.start&&this.setState({breakLength:this.state.breakLength-1})}},{key:"sessionInc",value:function(){this.state.sessionLength<=59&&0==this.state.start&&this.setState({sessionLength:this.state.sessionLength+1,timer:this.state.timer+60})}},{key:"sessionDec",value:function(){this.state.sessionLength>=2&&0==this.state.start&&this.setState({sessionLength:this.state.sessionLength-1,timer:this.state.timer-60})}},{key:"defBreakLength",value:function(){this.setState({breakLength:5})}},{key:"defSessionLength",value:function(){this.setState({sessionLength:25})}},{key:"startPause",value:function(){this.state.start?(this.setState({start:!1}),this.state.intervalID&&this.state.intervalID.cancel()):(this.startCountdown(),this.setState({start:!0}))}},{key:"clock",value:function(){var e=Math.floor(this.state.timer/60),t=this.state.timer-60*e;return(e=e<10?"0"+e:e)+":"+(t=t<10?"0"+t:t)}},{key:"startCountdown",value:function(){var e=this;this.setState({intervalID:d(function(){e.countdown(),e.clockUpdater()},1e3)})}},{key:"clockUpdater",value:function(){this.state.timer<0&&("Session"==this.state.timerLabel?(this.setState({timer:60*this.state.breakLength,timerLabel:"Break"}),this.playBeep()):(this.setState({timer:60*this.state.sessionLength,timerLabel:"Session"}),this.playBeep()))}},{key:"countdown",value:function(){this.setState(function(e){return{timer:e.timer-1}})}},{key:"reset",value:function(){this.pauseBeep(),this.setState({breakLength:5,sessionLength:25,timer:1500,start:!1,timerLabel:"Session"}),this.state.intervalID&&this.state.intervalID.cancel()}},{key:"playBeep",value:function(){document.getElementById("beep").play()}},{key:"pauseBeep",value:function(){var e=document.getElementById("beep");e.pause(),e.currentTime=0}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("h1",{id:"title"},"Pomodoro Clock"),n.a.createElement("p",{id:"timer-label"},this.state.timerLabel),n.a.createElement("div",{id:"time-left"},this.clock()),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-6"},n.a.createElement("p",{id:"break-label"},"Break Length"),n.a.createElement("p",{id:"break-length"},this.state.breakLength),n.a.createElement("div",{class:"break-button"},n.a.createElement("p",{id:"break-decrement",onClick:this.breakDec},n.a.createElement("i",{class:"fas fa-minus"})),n.a.createElement("p",{id:"break-increment",onClick:this.breakInc},n.a.createElement("i",{class:"fas fa-plus"})))),n.a.createElement("div",{class:"col-6"},n.a.createElement("p",{id:"session-label"},"Session Length"),n.a.createElement("p",{id:"session-length"},this.state.sessionLength),n.a.createElement("div",{class:"session-button"},n.a.createElement("p",{id:"session-decrement",onClick:this.sessionDec},n.a.createElement("i",{class:"fas fa-minus"})),n.a.createElement("p",{id:"session-increment",onClick:this.sessionInc},n.a.createElement("i",{class:"fas fa-plus"}))))),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-12"},n.a.createElement("div",{class:"start-reset-btn"},n.a.createElement("p",{id:"start-stop",onClick:this.startPause},n.a.createElement("i",{class:"fa fa-play"})," ",n.a.createElement("i",{class:"fa fa-pause"})),n.a.createElement("p",{id:"reset",onClick:this.reset},n.a.createElement("i",{class:"fas fa-undo"}))))),n.a.createElement("div",null,n.a.createElement("audio",{id:"beep",src:"https://goo.gl/65cBl1"})))}}]),t}(n.a.Component);(function(){window.accurateInterval=function(e,t){var a,s,n,i;return s=(new Date).getTime()+t,n=null,i=function(){return s+=t,n=setTimeout(i,s-(new Date).getTime()),e()},a=function(){return clearTimeout(n)},n=setTimeout(i,s-(new Date).getTime()),{cancel:a}}}).call(void 0);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.4ec2c96a.chunk.js.map