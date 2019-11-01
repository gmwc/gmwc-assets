!function(n){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],n):n(jQuery)}(function($){"use strict";function n(n){return!n||void 0!==n.allowPageScroll||void 0===n.swipe&&void 0===n.swipeStatus||(n.allowPageScroll=c),void 0!==n.click&&void 0===n.tap&&(n.tap=n.click),n||(n={}),n=$.extend({},$.fn.swipe.defaults,n),this.each(function(){var t=$(this),r=t.data(P);r||(r=new e(this,n),t.data(P,r))})}function e(n,e){function t(n){if(!(sn()||$(n.target).closest(e.excludedElements,qn).length>0)){var t=n.originalEvent?n.originalEvent:n,r,i=t.touches,l=i?i[0]:t;return Vn=S,i?Wn=i.length:e.preventDefaultEvents!==!1&&n.preventDefault(),Nn=0,jn=null,Xn=null,Hn=0,_n=0,Qn=0,Cn=1,Fn=0,Yn=vn(),an(),fn(0,l),!i||Wn===e.fingers||e.fingers===b||X()?(Gn=Mn(),2==Wn&&(fn(1,i[1]),_n=Qn=En(zn[0].start,zn[1].start)),(e.swipeStatus||e.pinchStatus)&&(r=U(t,Vn))):r=!1,r===!1?(Vn=O,U(t,Vn),r):(e.hold&&(ne=setTimeout($.proxy(function(){qn.trigger("hold",[t.target]),e.hold&&(r=e.hold.call(qn,t,t.target))},this),e.longTapThreshold)),pn(!0),null)}}function w(n){var t=n.originalEvent?n.originalEvent:n;if(Vn!==y&&Vn!==O&&!cn()){var r,i=t.touches,l=i?i[0]:t,o=hn(l);if(Zn=Mn(),i&&(Wn=i.length),e.hold&&clearTimeout(ne),Vn=m,2==Wn&&(0==_n?(fn(1,i[1]),_n=Qn=En(zn[0].start,zn[1].start)):(hn(i[1]),Qn=En(zn[0].end,zn[1].end),Xn=mn(zn[0].end,zn[1].end)),Cn=Sn(_n,Qn),Fn=Math.abs(_n-Qn)),Wn===e.fingers||e.fingers===b||!i||X()){if(jn=xn(o.start,o.end),C(n,jn),Nn=yn(o.start,o.end),Hn=bn(),gn(jn,Nn),(e.swipeStatus||e.pinchStatus)&&(r=U(t,Vn)),!e.triggerOnTouchEnd||e.triggerOnTouchLeave){var u=!0;if(e.triggerOnTouchLeave){var a=Dn(this);u=Pn(o.end,a)}!e.triggerOnTouchEnd&&u?Vn=I(m):e.triggerOnTouchLeave&&!u&&(Vn=I(y)),(Vn==O||Vn==y)&&U(t,Vn)}}else Vn=O,U(t,Vn);r===!1&&(Vn=O,U(t,Vn))}}function L(n){var t=n.originalEvent?n.originalEvent:n,r=t.touches;if(r){if(r.length&&!cn())return un(),!0;if(r.length&&cn())return!0}return cn()&&(Wn=Jn),Zn=Mn(),Hn=bn(),H()||!j()?(Vn=O,U(t,Vn)):e.triggerOnTouchEnd||0==e.triggerOnTouchEnd&&Vn===m?(e.preventDefaultEvents!==!1&&n.preventDefault(),Vn=y,U(t,Vn)):!e.triggerOnTouchEnd&&Z()?(Vn=y,N(t,Vn,h)):Vn===m&&(Vn=O,U(t,Vn)),pn(!1),null}function R(){Wn=0,Zn=0,Gn=0,_n=0,Qn=0,Cn=1,an(),pn(!1)}function k(n){var t=n.originalEvent?n.originalEvent:n;e.triggerOnTouchLeave&&(Vn=I(y),U(t,Vn))}function A(){qn.unbind(Rn,t),qn.unbind(Un,R),qn.unbind(kn,w),qn.unbind(An,L),In&&qn.unbind(In,k),pn(!1)}function I(n){var t=n,r=Q(),i=j(),l=H();return!r||l?t=O:!i||n!=m||e.triggerOnTouchEnd&&!e.triggerOnTouchLeave?!i&&n==y&&e.triggerOnTouchLeave&&(t=O):t=y,t}function U(n,e){var t,r=n.touches;return W()&&V()||Y()&&X()?(W()&&V()&&(t=N(n,e,p)),Y()&&X()&&t!==!1&&(t=N(n,e,f))):ln()&&t!==!1?t=N(n,e,d):on()&&t!==!1?t=N(n,e,g):rn()&&t!==!1&&(t=N(n,e,h)),e===O&&(V()&&(t=N(n,e,p)),X()&&(t=N(n,e,f)),R(n)),e===y&&(r?r.length||R(n):R(n)),t}function N(n,t,c){var s;if(c==p){if(qn.trigger("swipeStatus",[t,jn||null,Nn||0,Hn||0,Wn,zn]),e.swipeStatus&&(s=e.swipeStatus.call(qn,n,t,jn||null,Nn||0,Hn||0,Wn,zn),s===!1))return!1;if(t==y&&q()){if(qn.trigger("swipe",[jn,Nn,Hn,Wn,zn]),e.swipe&&(s=e.swipe.call(qn,n,jn,Nn,Hn,Wn,zn),s===!1))return!1;switch(jn){case r:qn.trigger("swipeLeft",[jn,Nn,Hn,Wn,zn]),e.swipeLeft&&(s=e.swipeLeft.call(qn,n,jn,Nn,Hn,Wn,zn));break;case i:qn.trigger("swipeRight",[jn,Nn,Hn,Wn,zn]),e.swipeRight&&(s=e.swipeRight.call(qn,n,jn,Nn,Hn,Wn,zn));break;case l:qn.trigger("swipeUp",[jn,Nn,Hn,Wn,zn]),e.swipeUp&&(s=e.swipeUp.call(qn,n,jn,Nn,Hn,Wn,zn));break;case o:qn.trigger("swipeDown",[jn,Nn,Hn,Wn,zn]),e.swipeDown&&(s=e.swipeDown.call(qn,n,jn,Nn,Hn,Wn,zn))}}}if(c==f){if(qn.trigger("pinchStatus",[t,Xn||null,Fn||0,Hn||0,Wn,Cn,zn]),e.pinchStatus&&(s=e.pinchStatus.call(qn,n,t,Xn||null,Fn||0,Hn||0,Wn,Cn,zn),s===!1))return!1;if(t==y&&F())switch(Xn){case u:qn.trigger("pinchIn",[Xn||null,Fn||0,Hn||0,Wn,Cn,zn]),e.pinchIn&&(s=e.pinchIn.call(qn,n,Xn||null,Fn||0,Hn||0,Wn,Cn,zn));break;case a:qn.trigger("pinchOut",[Xn||null,Fn||0,Hn||0,Wn,Cn,zn]),e.pinchOut&&(s=e.pinchOut.call(qn,n,Xn||null,Fn||0,Hn||0,Wn,Cn,zn))}}return c==h?(t===O||t===y)&&(clearTimeout($n),clearTimeout(ne),B()&&!nn()?(Kn=Mn(),$n=setTimeout($.proxy(function(){Kn=null,qn.trigger("tap",[n.target]),e.tap&&(s=e.tap.call(qn,n,n.target))},this),e.doubleTapThreshold)):(Kn=null,qn.trigger("tap",[n.target]),e.tap&&(s=e.tap.call(qn,n,n.target)))):c==d?(t===O||t===y)&&(clearTimeout($n),Kn=null,qn.trigger("doubletap",[n.target]),e.doubleTap&&(s=e.doubleTap.call(qn,n,n.target))):c==g&&(t===O||t===y)&&(clearTimeout($n),Kn=null,qn.trigger("longtap",[n.target]),e.longTap&&(s=e.longTap.call(qn,n,n.target))),s}function j(){var n=!0;return null!==e.threshold&&(n=Nn>=e.threshold),n}function H(){var n=!1;return null!==e.cancelThreshold&&null!==jn&&(n=wn(jn)-Nn>=e.cancelThreshold),n}function _(){return null!==e.pinchThreshold?Fn>=e.pinchThreshold:!0}function Q(){var n;return n=e.maxTimeThreshold&&Hn>=e.maxTimeThreshold?!1:!0}function C(n,t){if(e.preventDefaultEvents!==!1)if(e.allowPageScroll===c)n.preventDefault();else{var u=e.allowPageScroll===s;switch(t){case r:(e.swipeLeft&&u||!u&&e.allowPageScroll!=v)&&n.preventDefault();break;case i:(e.swipeRight&&u||!u&&e.allowPageScroll!=v)&&n.preventDefault();break;case l:(e.swipeUp&&u||!u&&e.allowPageScroll!=T)&&n.preventDefault();break;case o:(e.swipeDown&&u||!u&&e.allowPageScroll!=T)&&n.preventDefault()}}}function F(){var n=z(),e=G(),t=_();return n&&e&&t}function X(){return!!(e.pinchStatus||e.pinchIn||e.pinchOut)}function Y(){return!(!F()||!X())}function q(){var n=Q(),e=j(),t=z(),r=G(),i=H(),l=!i&&r&&t&&e&&n;return l}function V(){return!!(e.swipe||e.swipeStatus||e.swipeLeft||e.swipeRight||e.swipeUp||e.swipeDown)}function W(){return!(!q()||!V())}function z(){return Wn===e.fingers||e.fingers===b||!x}function G(){return 0!==zn[0].end.x}function Z(){return!!e.tap}function B(){return!!e.doubleTap}function J(){return!!e.longTap}function K(){if(null==Kn)return!1;var n=Mn();return B()&&n-Kn<=e.doubleTapThreshold}function nn(){return K()}function en(){return(1===Wn||!x)&&(isNaN(Nn)||Nn<e.threshold)}function tn(){return Hn>e.longTapThreshold&&E>Nn}function rn(){return!(!en()||!Z())}function ln(){return!(!K()||!B())}function on(){return!(!tn()||!J())}function un(){Bn=Mn(),Jn=event.touches.length+1}function an(){Bn=0,Jn=0}function cn(){var n=!1;if(Bn){var t=Mn()-Bn;t<=e.fingerReleaseThreshold&&(n=!0)}return n}function sn(){return!(qn.data(P+"_intouch")!==!0)}function pn(n){n===!0?(qn.bind(kn,w),qn.bind(An,L),In&&qn.bind(In,k)):(qn.unbind(kn,w,!1),qn.unbind(An,L,!1),In&&qn.unbind(In,k,!1)),qn.data(P+"_intouch",n===!0)}function fn(n,e){var t={start:{x:0,y:0},end:{x:0,y:0}};return t.start.x=t.end.x=e.pageX||e.clientX,t.start.y=t.end.y=e.pageY||e.clientY,zn[n]=t,t}function hn(n){var e=void 0!==n.identifier?n.identifier:0,t=dn(e);return null===t&&(t=fn(e,n)),t.end.x=n.pageX||n.clientX,t.end.y=n.pageY||n.clientY,t}function dn(n){return zn[n]||null}function gn(n,e){e=Math.max(e,wn(n)),Yn[n].distance=e}function wn(n){return Yn[n]?Yn[n].distance:void 0}function vn(){var n={};return n[r]=Tn(r),n[i]=Tn(i),n[l]=Tn(l),n[o]=Tn(o),n}function Tn(n){return{direction:n,distance:0}}function bn(){return Zn-Gn}function En(n,e){var t=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y);return Math.round(Math.sqrt(t*t+r*r))}function Sn(n,e){var t=e/n*1;return t.toFixed(2)}function mn(){return 1>Cn?a:u}function yn(n,e){return Math.round(Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2)))}function On(n,e){var t=n.x-e.x,r=e.y-n.y,i=Math.atan2(r,t),l=Math.round(180*i/Math.PI);return 0>l&&(l=360-Math.abs(l)),l}function xn(n,e){var t=On(n,e);return 45>=t&&t>=0?r:360>=t&&t>=315?r:t>=135&&225>=t?i:t>45&&135>t?o:l}function Mn(){var n=new Date;return n.getTime()}function Dn(n){n=$(n);var e=n.offset(),t={left:e.left,right:e.left+n.outerWidth(),top:e.top,bottom:e.top+n.outerHeight()};return t}function Pn(n,e){return n.x>e.left&&n.x<e.right&&n.y>e.top&&n.y<e.bottom}var e=$.extend({},e),Ln=x||D||!e.fallbackToMouseEvents,Rn=Ln?D?M?"MSPointerDown":"pointerdown":"touchstart":"mousedown",kn=Ln?D?M?"MSPointerMove":"pointermove":"touchmove":"mousemove",An=Ln?D?M?"MSPointerUp":"pointerup":"touchend":"mouseup",In=Ln?null:"mouseleave",Un=D?M?"MSPointerCancel":"pointercancel":"touchcancel",Nn=0,jn=null,Hn=0,_n=0,Qn=0,Cn=1,Fn=0,Xn=0,Yn=null,qn=$(n),Vn="start",Wn=0,zn={},Gn=0,Zn=0,Bn=0,Jn=0,Kn=0,$n=null,ne=null;try{qn.bind(Rn,t),qn.bind(Un,R)}catch(ee){$.error("events not supported "+Rn+","+Un+" on jQuery.swipe")}this.enable=function(){return qn.bind(Rn,t),qn.bind(Un,R),qn},this.disable=function(){return A(),qn},this.destroy=function(){A(),qn.data(P,null),qn=null},this.option=function(n,t){if("object"==typeof n)e=$.extend(e,n);else if(void 0!==e[n]){if(void 0===t)return e[n];e[n]=t}else{if(!n)return e;$.error("Option "+n+" does not exist on jQuery.swipe.options")}return null}}var t="1.6.12",r="left",i="right",l="up",o="down",u="in",a="out",c="none",s="auto",p="swipe",f="pinch",h="tap",d="doubletap",g="longtap",w="hold",v="horizontal",T="vertical",b="all",E=10,S="start",m="move",y="end",O="cancel",x="ontouchstart"in window,M=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,D=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,P="TouchSwipe",L={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(e){var t=$(this),r=t.data(P);if(r&&"string"==typeof e){if(r[e])return r[e].apply(this,Array.prototype.slice.call(arguments,1));$.error("Method "+e+" does not exist on jQuery.swipe")}else if(r&&"object"==typeof e)r.option.apply(this,arguments);else if(!(r||"object"!=typeof e&&e))return n.apply(this,arguments);return t},$.fn.swipe.version=t,$.fn.swipe.defaults=L,$.fn.swipe.phases={PHASE_START:S,PHASE_MOVE:m,PHASE_END:y,PHASE_CANCEL:O},$.fn.swipe.directions={LEFT:r,RIGHT:i,UP:l,DOWN:o,IN:u,OUT:a},$.fn.swipe.pageScroll={NONE:c,HORIZONTAL:v,VERTICAL:T,AUTO:s},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:b}});