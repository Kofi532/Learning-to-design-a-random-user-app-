(function(e){function t(t){for(var n,o,u=t[0],i=t[1],s=t[2],p=0,f=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==c[i]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},c={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3bbe":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function c(e,t,r,c,a,o){var u=Object(n["g"])("Userapp");return Object(n["d"])(),Object(n["b"])(u)}var a=Object(n["i"])("data-v-03677371");Object(n["f"])("data-v-03677371");var o={class:"container"},u={class:"row justify-content-center"},i={class:"col-lg-6 m6-5"},s={class:"card"},l={class:"card-body"};Object(n["e"])();var p=a((function(e,t,r,c,a,p){return Object(n["d"])(),Object(n["b"])("div",o,[Object(n["c"])("div",u,[Object(n["c"])("div",i,[Object(n["c"])("div",s,[Object(n["c"])("div",l,[Object(n["c"])("img",{src:a.picture,alt:""},null,8,["src"]),Object(n["c"])("h1",null,Object(n["h"])(a.firstName)+" "+Object(n["h"])(a.lastName),1),Object(n["c"])("h4",null,"Email: "+Object(n["h"])(a.email),1),Object(n["c"])("button",{onClick:t[1]||(t[1]=function(){return p.getUser&&p.getUser.apply(p,arguments)}),class:"btn btn-dark"},"Generate random user")])])])])])})),f=r("1da1"),d=(r("96cf"),r("d3b7"),r("b0c0"),{name:"Fullapp",data:function(){return{firstName:"Kofi",lastName:"Adukpo",email:"kadukpo@yahoo.com",picture:"../assets/1.jpg"}},methods:{getUser:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://randomuser.me/api");case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,c=n.results,e.firstName=c[0].name.first,e.lastName=c[0].name.last,e.email=c[0].email,e.picture=c[0].picture.large;case 11:case"end":return t.stop()}}),t)})))()}}});r("8798");d.render=p,d.__scopeId="data-v-03677371";var b=d,v={name:"App",components:{Userapp:b}};r("dd77");v.render=c;var j=v;Object(n["a"])(j).mount("#app")},8798:function(e,t,r){"use strict";r("3bbe")},d518:function(e,t,r){},dd77:function(e,t,r){"use strict";r("d518")}});
//# sourceMappingURL=app.f393cedc.js.map