webpackJsonp([1],{119:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n.n(a),s=n(10),l=n(125),c=n(122),C=n(128),m=n(44),d=n(45),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(e){function t(){var e,n,r,a;o(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return n=r=A(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.componentDidMount=function(){r.props.getCalendars()},r.showAllCalendars=function(){if(!r.props.visible)return void r.props.showAll();r.props.hide()},a=n,A(r,a)}return r(t,e),f(t,[{key:"render",value:function(){var e=this,t=this.props.visible?"Hide calendars":"Show hidden calendars",n=i.a.createElement(c.a,null);return n=this.props.cList?this.props.cList.map(function(t){var n=localStorage.getItem(t.id),o=!1;if(n&&(o=JSON.parse(n).hidden),!o||e.props.visible)return i.a.createElement(C.a,{key:t.id,id:t.id,name:t.summary,bgColor:t.backgroundColor})}):"No calendars found",i.a.createElement("div",{className:"Content_wrapper"},i.a.createElement(l.a,{title:"Yours Calendars"}),i.a.createElement("button",{className:"Show_all Basic_button",onClick:this.showAllCalendars},i.a.createElement(m.c,null)," ",t),n)}}]),t}(a.Component),p=function(e){return{visible:e.showAll,isAuth:e.signedIn,cList:e.calendarsList}},b=function(e){return{getCalendars:function(){return e(d.a())},showAll:function(){return e(d.e())},hide:function(){return e(d.b())}}};t.default=Object(s.b)(p,b)(u)},122:function(e,t,n){"use strict";var o=n(0),A=n.n(o),r=n(123),a=(n.n(r),function(){return A.a.createElement("div",{className:"sk-folding-cube"},A.a.createElement("div",{className:"sk-cube1 sk-cube"}),A.a.createElement("div",{className:"sk-cube2 sk-cube"}),A.a.createElement("div",{className:"sk-cube4 sk-cube"}),A.a.createElement("div",{className:"sk-cube3 sk-cube"}))});t.a=a},123:function(e,t,n){var o=n(124);"string"===typeof o&&(o=[[e.i,o,""]]);var A={hmr:!1};A.transform=void 0;n(118)(o,A);o.locals&&(e.exports=o.locals)},124:function(e,t,n){t=e.exports=n(117)(!0),t.push([e.i,'.sk-folding-cube{margin:20px auto;width:40px;height:40px;position:relative;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.sk-folding-cube .sk-cube{float:left;width:50%;height:50%;position:relative;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.sk-folding-cube .sk-cube:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--white);-webkit-animation:sk-foldCubeAngle 2.4s infinite linear both;animation:sk-foldCubeAngle 2.4s infinite linear both;-webkit-transform-origin:100% 100%;-ms-transform-origin:100% 100%;transform-origin:100% 100%}.sk-folding-cube .sk-cube2{-webkit-transform:scale(1.1) rotate(90deg);-ms-transform:scale(1.1) rotate(90deg);transform:scale(1.1) rotate(90deg)}.sk-folding-cube .sk-cube3{-webkit-transform:scale(1.1) rotate(180deg);-ms-transform:scale(1.1) rotate(180deg);transform:scale(1.1) rotate(180deg)}.sk-folding-cube .sk-cube4{-webkit-transform:scale(1.1) rotate(270deg);-ms-transform:scale(1.1) rotate(270deg);transform:scale(1.1) rotate(270deg)}.sk-folding-cube .sk-cube2:before{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-folding-cube .sk-cube3:before{-webkit-animation-delay:.6s;animation-delay:.6s}.sk-folding-cube .sk-cube4:before{-webkit-animation-delay:.9s;animation-delay:.9s}@-webkit-keyframes sk-foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0deg);opacity:1}90%,to{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes sk-foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0deg);opacity:1}90%,to{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}',"",{version:3,sources:["/hcc/gc-ec/src/components/UI/Loader/Loader.css"],names:[],mappings:"AAAA,iBACE,iBAAkB,AAClB,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,gCAAkC,AAC1B,4BAA6B,AACjC,uBAA0B,CAC/B,AAED,0BACE,WAAY,AACZ,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,6BAA8B,AAC1B,yBAA0B,AACtB,oBAAsB,CAC/B,AACD,iCACE,WAAY,AACZ,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,8BAA+B,AAC/B,6DAA8D,AACtD,qDAAsD,AAC9D,mCAAoC,AAChC,+BAAgC,AAC5B,0BAA4B,CACrC,AACD,2BACE,2CAA6C,AACrC,uCAAwC,AAC5C,kCAAqC,CAC1C,AACD,2BACE,4CAA8C,AACtC,wCAAyC,AAC7C,mCAAsC,CAC3C,AACD,2BACE,4CAA8C,AACtC,wCAAyC,AAC7C,mCAAsC,CAC3C,AACD,kCACE,4BAA8B,AACtB,mBAAsB,CAC/B,AACD,kCACE,4BAA8B,AACtB,mBAAsB,CAC/B,AACD,kCACE,4BAA8B,AACtB,mBAAsB,CAC/B,AACD,oCACE,OACE,sDAAuD,AAC/C,8CAA+C,AACvD,SAAW,CACZ,AAAC,QACA,mDAAoD,AAC5C,2CAA4C,AACpD,SAAW,CACZ,AAAC,OACA,qDAAsD,AAC9C,6CAA8C,AACtD,SAAW,CACZ,CACF,AAED,4BACE,OACE,sDAAuD,AAC/C,8CAA+C,AACvD,SAAW,CACZ,AAAC,QACA,mDAAoD,AAC5C,2CAA4C,AACpD,SAAW,CACZ,AAAC,OACA,qDAAsD,AAC9C,6CAA8C,AACtD,SAAW,CACZ,CACF",file:"Loader.css",sourcesContent:[".sk-folding-cube {\n  margin: 20px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  -webkit-transform: rotateZ(45deg);\n          -ms-transform: rotate(45deg);\n      transform: rotateZ(45deg);\n}\n\n.sk-folding-cube .sk-cube {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1); \n}\n.sk-folding-cube .sk-cube:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--white);\n  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n          animation: sk-foldCubeAngle 2.4s infinite linear both;\n  -webkit-transform-origin: 100% 100%;\n      -ms-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n.sk-folding-cube .sk-cube2 {\n  -webkit-transform: scale(1.1) rotateZ(90deg);\n          -ms-transform: scale(1.1) rotate(90deg);\n      transform: scale(1.1) rotateZ(90deg);\n}\n.sk-folding-cube .sk-cube3 {\n  -webkit-transform: scale(1.1) rotateZ(180deg);\n          -ms-transform: scale(1.1) rotate(180deg);\n      transform: scale(1.1) rotateZ(180deg);\n}\n.sk-folding-cube .sk-cube4 {\n  -webkit-transform: scale(1.1) rotateZ(270deg);\n          -ms-transform: scale(1.1) rotate(270deg);\n      transform: scale(1.1) rotateZ(270deg);\n}\n.sk-folding-cube .sk-cube2:before {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.sk-folding-cube .sk-cube3:before {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s; \n}\n.sk-folding-cube .sk-cube4:before {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n@-webkit-keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; \n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; \n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; \n  } \n}\n\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; \n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; \n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; \n  }\n}"],sourceRoot:""}])},125:function(e,t,n){"use strict";var o=n(0),A=n.n(o),r=n(9),a=n(126),i=(n.n(a),n(44)),s=n(21),l=function(e){return A.a.createElement("div",{className:"Page_header"},A.a.createElement("h2",{className:"Page_title"},e.title),A.a.createElement("button",{className:"Logout_button",onClick:s.d},"Log Out"),A.a.createElement("button",{className:"Settings_button",onClick:s.a},A.a.createElement(i.d,null)),A.a.createElement(r.b,{to:"/about",className:"About-link Ph_link"},"i"))};t.a=Object(r.f)(l)},126:function(e,t,n){var o=n(127);"string"===typeof o&&(o=[[e.i,o,""]]);var A={hmr:!1};A.transform=void 0;n(118)(o,A);o.locals&&(e.exports=o.locals)},127:function(e,t,n){t=e.exports=n(117)(!0),t.push([e.i,'.Page_header{display:-ms-flexbox;display:flex;border-bottom:.1rem solid var(--color1);padding-bottom:2rem;margin:.1rem 0 2rem}.Page_title{font-size:calc(1.6rem + 1.2vmax);margin-bottom:.3em}.Page_header .About-link{font-size:1.4rem;margin:1em 0 -.6em -.7em}.Page_header .About-link:after{border-color:var(--color1);height:1.75em;width:1.75em}.Logout_button{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:1.4rem;font-weight:700;color:var(--color2);fill:var(--color2);-webkit-transition:color .2s ease-in-out;-o-transition:color .2s ease-in-out;transition:color .2s ease-in-out;padding:2em 0;margin:-1.5em 0 -1em auto}.Logout_button:after{content:"";background-color:var(--white);border:.2rem solid var(--color1);display:block;width:4em;height:4em;-webkit-transform:translate(-50%,-50%) rotate(45deg);-ms-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);position:absolute;z-index:-1;top:50%;left:50%;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.Settings_button{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:1.4rem;width:1.4rem;color:var(--color2);fill:var(--color2);-webkit-transition:color .2s ease-in-out;-o-transition:color .2s ease-in-out;transition:color .2s ease-in-out;margin:-1em 0 0 1em}.Settings_button:after{content:"";background-color:var(--white);border:.2rem solid var(--color1);display:block;width:2.2em;height:2.2em;-webkit-transform:translate(-50%,-50%) rotate(45deg);-ms-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);position:absolute;z-index:-1;top:50%;left:50%;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.Settings_button svg{display:block;height:1.4rem;width:1.4rem}',"",{version:3,sources:["/hcc/gc-ec/src/components/PageHeader/PageHeader.css"],names:[],mappings:"AAAA,aACI,oBAAqB,AACrB,aAAc,AACd,wCAAyC,AACzC,oBAAqB,AACrB,mBAAqB,CACxB,AAED,YACI,iCAAkC,AAClC,kBAAoB,CACvB,AAED,yBACI,iBAAkB,AAClB,wBAA4B,CAC/B,AACD,+BACI,2BAA4B,AAC5B,cAAe,AACf,YAAc,CACjB,AAED,eACI,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,iBAAkB,AAClB,gBAAiB,AACjB,oBAAqB,AACrB,mBAAoB,AACpB,yCAA0C,AAC1C,oCAAqC,AACrC,iCAAkC,AAClC,cAAe,AACf,yBAA2B,CAC9B,AACD,qBACI,WAAY,AACZ,8BAA+B,AAC/B,iCAAkC,AAClC,cAAe,AACf,UAAW,AACX,WAAY,AACZ,qDAAuD,AACnD,iDAAmD,AAC/C,6CAA+C,AACvD,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,SAAU,AACV,uCAAwC,AACxC,kCAAmC,AACnC,8BAAgC,CACnC,AAED,iBACI,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,cAAe,AACf,aAAc,AACd,oBAAqB,AACrB,mBAAoB,AACpB,yCAA0C,AAC1C,oCAAqC,AACrC,iCAAkC,AAClC,mBAAqB,CACxB,AACD,uBACI,WAAY,AACZ,8BAA+B,AAC/B,iCAAkC,AAClC,cAAe,AACf,YAAa,AACb,aAAc,AACd,qDAAuD,AACnD,iDAAmD,AAC/C,6CAA+C,AACvD,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,SAAU,AACV,uCAAwC,AACxC,kCAAmC,AACnC,8BAAgC,CACnC,AACD,qBACI,cAAe,AACf,cAAe,AACf,YAAc,CACjB",file:"PageHeader.css",sourcesContent:[".Page_header {\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: .1rem solid var(--color1);\n    padding-bottom: 2rem;\n    margin: .1rem 0 2rem;\n}\n\n.Page_title {\n    font-size: calc(1.6rem + 1.2vmax);\n    margin-bottom: .3em;\n}\n\n.Page_header .About-link {\n    font-size: 1.4rem;\n    margin: 1em 0 -0.6em -0.7em;\n}\n.Page_header .About-link::after {\n    border-color: var(--color1);\n    height: 1.75em;\n    width: 1.75em;\n}\n\n.Logout_button {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    font-size: 1.4rem;\n    font-weight: 700;\n    color: var(--color2);\n    fill: var(--color2);\n    -webkit-transition: color .2s ease-in-out;\n    -o-transition: color .2s ease-in-out;\n    transition: color .2s ease-in-out;\n    padding: 2em 0;\n    margin: -1.5em 0 -1em auto;\n}\n.Logout_button::after {\n    content: '';\n    background-color: var(--white);\n    border: .2rem solid var(--color1);\n    display: block;\n    width: 4em;\n    height: 4em;\n    -webkit-transform: translate(-50%, -50%) rotate(45deg);\n        -ms-transform: translate(-50%, -50%) rotate(45deg);\n            transform: translate(-50%, -50%) rotate(45deg);\n    position: absolute;\n    z-index: -1;\n    top: 50%;\n    left: 50%;\n    -webkit-transition: all .2s ease-in-out;\n    -o-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out;\n}\n\n.Settings_button {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    height: 1.4rem;\n    width: 1.4rem;\n    color: var(--color2);\n    fill: var(--color2);\n    -webkit-transition: color .2s ease-in-out;\n    -o-transition: color .2s ease-in-out;\n    transition: color .2s ease-in-out;\n    margin: -1em 0 0 1em;\n}\n.Settings_button::after {\n    content: '';\n    background-color: var(--white);\n    border: .2rem solid var(--color1);\n    display: block;\n    width: 2.2em;\n    height: 2.2em;\n    -webkit-transform: translate(-50%, -50%) rotate(45deg);\n        -ms-transform: translate(-50%, -50%) rotate(45deg);\n            transform: translate(-50%, -50%) rotate(45deg);\n    position: absolute;\n    z-index: -1;\n    top: 50%;\n    left: 50%;\n    -webkit-transition: all .2s ease-in-out;\n    -o-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out;\n}\n.Settings_button svg {\n    display: block;\n    height: 1.4rem;\n    width: 1.4rem;\n}"],sourceRoot:""}])},128:function(e,t,n){"use strict";var o=n(0),A=n.n(o),r=n(9),a=n(129),i=(n.n(a),function(e){var t={borderColor:e.bgColor},n=e.id.split("@");return A.a.createElement("div",{className:"Calendar_box",style:t},A.a.createElement("p",null,A.a.createElement("i",null,"Calendar:"),A.a.createElement("br",null),A.a.createElement("b",null,e.name)),A.a.createElement(r.b,{className:"Details_link",to:"/calendar/"+n[0]},"Details\xa0\u21e8"))});t.a=Object(r.f)(i)},129:function(e,t,n){var o=n(130);"string"===typeof o&&(o=[[e.i,o,""]]);var A={hmr:!1};A.transform=void 0;n(118)(o,A);o.locals&&(e.exports=o.locals)},130:function(e,t,n){t=e.exports=n(117)(!0),t.push([e.i,".Calendar_box{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;width:100%;background-color:var(--white);color:var(--color2);font-size:1.6rem;padding:1.25em 1em;border-left:.5em solid transparent}.Calendar_box:not(:last-of-type){margin-bottom:.75em}.Calendar_box i{margin-right:.5em;padding-right:.2em}.Details_link{color:var(--color2);cursor:pointer;font-weight:300;margin-left:auto;text-decoration:none}","",{version:3,sources:["/hcc/gc-ec/src/components/Calendar/Calendar.css"],names:[],mappings:"AAAA,cACI,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,iBAAkB,AACtB,WAAY,AACZ,8BAA+B,AAC/B,oBAAqB,AACrB,iBAAkB,AAClB,mBAAoB,AACpB,kCAAoC,CACvC,AACD,iCACI,mBAAqB,CACxB,AAED,gBACI,kBAAmB,AACnB,kBAAoB,CACvB,AAED,cACI,oBAAqB,AACrB,eAAgB,AAChB,gBAAiB,AACjB,iBAAkB,AAClB,oBAAsB,CACzB",file:"Calendar.css",sourcesContent:[".Calendar_box {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    width: 100%;\n    background-color: var(--white);\n    color: var(--color2);\n    font-size: 1.6rem;\n    padding: 1.25em 1em;\n    border-left: .5em solid transparent;\n}\n.Calendar_box:not(:last-of-type) {\n    margin-bottom: .75em;\n}\n\n.Calendar_box i {\n    margin-right: .5em;\n    padding-right: .2em;\n}\n\n.Details_link {\n    color: var(--color2);\n    cursor: pointer;\n    font-weight: 300;\n    margin-left: auto;\n    text-decoration: none;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=1.c2fbe7d5.chunk.js.map