(this["webpackJsonpvincit-toimistovierailu"]=this["webpackJsonpvincit-toimistovierailu"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),i=(a(16),a(2)),s=a(3),l=a(5),u=a(4),m=a(6),f=(a(17),a(1)),d=a.n(f),h=a(7);a(19),a(20);function v(e){var t=e.hidden,a=e.className,n=e.onClick,r=e.icon;return o.a.createElement("button",{hidden:t,role:"button",onClick:n,className:"ShutterButton ".concat(a||"")},o.a.createElement("i",{className:"fas fa-".concat(r," fa-2x")}))}var p=a(10),E=a.n(p);a(21);function g(e){var t=e.hidden,a=e.className,n=e.onClick,r=e.icon;return o.a.createElement("button",{role:"button",onClick:n,className:"IconButton ".concat(a||""," ").concat(t?"IconButton--hidden":"")},o.a.createElement("i",{className:"fas fa-".concat(r," fa-2x")}))}var w=function(){var e=Object(h.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("posting"),e.next=3,fetch(a,{method:"POST",body:JSON.stringify({image:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).videoRef=o.a.createRef(),a.canvasRef=o.a.createRef(),a.state={streamSource:null,photoTaken:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(this.createVideoSource).catch((function(e){console.log("Error",e)}))}},{key:"render",value:function(){var e=this,t=(this.state.photoTaken,this.props),a=t.isLoading,n=t.onClear,r=o.a.createRef(),c=function(){var t=Object(h.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(a,"http://10.144.68.104:8080/faces");case 2:n=t.sent,e.props.onPhoto(n.faces);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=a?o.a.createElement(v,{onClick:function(){},icon:"spinner fa-spin"}):o.a.createElement(v,{onClick:function(){var e;(e=c,function(){var t=r.current.getScreenshot();e(t)})()},icon:"camera"});return o.a.createElement("div",{className:"CameraView"},o.a.createElement("div",{className:"CameraView-viewfinder"},o.a.createElement(g,{hidden:!1,onClick:n,className:"CameraView-clearButton",icon:"times"}),o.a.createElement(E.a,{audio:!1,videoConstraints:{facingMode:"user",width:512,height:512},ref:r,screenshotFormat:"image/jpeg"})),o.a.createElement("div",{className:"CameraView-footer"},i))}}]),t}(o.a.Component);a(22);a(23);var k=function(e){var t=e.label;e.onShowDetails;switch(t){case"LIKELY":case"VERY_LIKELY":return o.a.createElement("footer",{className:"ResultFooter ResultFooter--success"},o.a.createElement("div",{className:"ResultFooter-title"},o.a.createElement("span",null,"Hattu l\xf6ydetty!"),o.a.createElement("i",{style:{color:"#2ecc71"},className:"fa fa-check","aria-hidden":"true"})));default:return o.a.createElement("footer",{className:"ResultFooter ResultFooter--failure"},o.a.createElement("div",{className:"ResultFooter-title"},o.a.createElement("span",null,"Ei oo Hattua!"),o.a.createElement("i",{style:{color:"#e74c3c"},className:"fa fa-times","aria-hidden":"true"})))}};var C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={lastResponse:{},isLoading:!1},a.submitData=function(e){a.setState({isLoading:!0});var t=function(e){for(var t=e.split(","),a=t[0].match(/:(.*?);/)[1],n=atob(t[1]),o=n.length,r=new Uint8Array(o);o--;)r[o]=n.charCodeAt(o);return new Blob([r],{type:a})}(e),n=new FormData;n.append("image",t),fetch("/faces",{method:"POST",body:n,mode:"cors"}).then((function(e){return e.json()})).then((function(e){a.setState({lastResponse:e,isLoading:!1})})).catch((function(e){throw a.setState({isLoading:!1}),Error(e)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderCameraView",value:function(){var e=this,t=this.state,a=t.lastResponse,n=t.isLoading,r=a.headwearLikelihood;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App-content"},o.a.createElement(b,{className:"CameraView-video",isLoading:n,onClear:function(){return e.setState({lastResponse:{}})},onPhoto:function(t){e.setState({lastResponse:t[0]})}})),r&&o.a.createElement(k,{onShowDetails:this.showDetails,label:r}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.renderCameraView())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.48602f75.chunk.js.map