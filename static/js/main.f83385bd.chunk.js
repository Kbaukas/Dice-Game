(this["webpackJsonpappas-2"]=this["webpackJsonpappas-2"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(6),r=n.n(o),c=(n(12),n(13),n(14),n(1)),s=n(2),l=n(3),u=n(4),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={num:1},a.makeTimer(),a}return Object(s.a)(n,[{key:"makeTimer",value:function(){var e=this;setInterval((function(){e.setState({num:Math.floor(Math.random()*e.props.maxNum)})}),1e3)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null),i.a.createElement("h1",null,this.state.num,"\uf526"," "))}}]),n}(a.Component),f=(a.Component,n(15),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e,t=this.props.number;switch(console.log(t),t){case 1:e="one";break;case 2:e="two";break;case 3:e="three";break;case 4:e="four";break;case 5:e="five";break;case 6:e="six";break;default:e="one"}return i.a.createElement("div",{className:"roll"},i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-dice-".concat(e,"\n            ").concat(this.props.isRolling&&"animacija")})))}}]),n}(a.Component)),h=(n(16),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={dice1:1,dice2:1,isrolling:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"DiceGame"},i.a.createElement("h1",null,"Dice Game"),i.a.createElement("div",{className:"Dices"},i.a.createElement(f,{isRolling:this.state.isrolling,number:this.state.dice1}),i.a.createElement(f,{isRolling:this.state.isrolling,number:this.state.dice2})),i.a.createElement("button",{isRolling:this.state.isrolling,onClick:function(t){e.setState({dice1:Math.floor(6*Math.random()+1),dice2:Math.floor(6*Math.random()+1),isrolling:!0}),setTimeout((function(){e.setState({isrolling:!1})}),1e3)},disabled:this.state.isrolling},this.state.isrolling?"Is Rolling...":"Please Roll"))}}]),n}(a.Component));var m=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Dice-Game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Dice-Game","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()}],[[7,1,2]]]);
//# sourceMappingURL=main.f83385bd.chunk.js.map