"use strict";var __read=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,s=n.call(t),a=[];try{for(;(void 0===e||0<e--)&&!(r=s.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(o)throw o.error}}return a},__spread=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t};!function(t){function r(t,e,n){t=t.style,e=e.style,n="on"===n,e.overflow=n?"hidden":"unset",e.verticalAlign=n?"bottom":"unset",e.maxWidth=n?"150px":"unset",t.zIndex=n?"unset":"2"}var o=".grid--cell",n="badge-tag",e=__spread(t.getElementsByClassName(n));e.forEach(function(t){var e,n=t.closest(o);!n||(e=n.nextElementSibling)&&(e.style.zIndex="1",n.style.maxWidth="50%",r(n,t,"on"))}),t.addEventListener("mouseover",function(t){var e=t.target;!e.classList.contains(n)||(t=e.closest(o))&&r(t,e,"off")}),t.addEventListener("mouseout",function(t){var e=t.target;!e.classList.contains(n)||(t=e.closest(o))&&r(t,e,"on")})}((window,document));