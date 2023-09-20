!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){"use strict";function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i=Math.round;function a(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,a=1;return r(e)&&t&&(o=n.width/e.offsetWidth||1,a=n.height/e.offsetHeight||1),{width:i(n.width/o),height:i(n.height/a),top:i(n.top/a),right:i(n.right/o),bottom:i(n.bottom/a),left:i(n.left/o),x:i(n.left/o),y:i(n.top/a)}}function s(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function f(e){return e?(e.nodeName||"").toLowerCase():null}function p(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function c(e){return a(p(e)).left+s(e).scrollLeft}function l(e){return t(e).getComputedStyle(e)}function u(e){var t=l(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function d(e,n,o){void 0===o&&(o=!1);var i,l,d=r(n),m=r(n)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(n),h=p(n),v=a(e,m),g={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(d||!d&&!o)&&(("body"!==f(n)||u(h))&&(g=(i=n)!==t(i)&&r(i)?{scrollLeft:(l=i).scrollLeft,scrollTop:l.scrollTop}:s(i)),r(n)?((b=a(n,!0)).x+=n.clientLeft,b.y+=n.clientTop):h&&(b.x=c(h))),{x:v.left+g.scrollLeft-b.x,y:v.top+g.scrollTop-b.y,width:v.width,height:v.height}}function m(e){var t=a(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function h(e){return"html"===f(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||p(e)}function v(e,n){var o;void 0===n&&(n=[]);var i=function e(t){return["html","body","#document"].indexOf(f(t))>=0?t.ownerDocument.body:r(t)&&u(t)?t:e(h(t))}(e),a=i===(null==(o=e.ownerDocument)?void 0:o.body),s=t(i),p=a?[s].concat(s.visualViewport||[],u(i)?i:[]):i,c=n.concat(p);return a?c:c.concat(v(h(p)))}function g(e){return["table","td","th"].indexOf(f(e))>=0}function b(e){return r(e)&&"fixed"!==l(e).position?e.offsetParent:null}function y(e){for(var n=t(e),o=b(e);o&&g(o)&&"static"===l(o).position;)o=b(o);return o&&("html"===f(o)||"body"===f(o)&&"static"===l(o).position)?n:o||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&r(e)&&"fixed"===l(e).position)return null;for(var n=h(e);r(n)&&["html","body"].indexOf(f(n))<0;){var o=l(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||n}var w="top",x="bottom",O="right",j="left",E=[w,x,O,j],S=E.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),P=[].concat(E,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),k=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function D(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var o=t.get(r);o&&e(o)}})),r.push(o)}(e)})),r}function M(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return[].concat(n).reduce((function(e,t){return e.replace(/%s/,t)}),e)}var L='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',A=["name","enabled","phase","fn","effect","requires","options"];function T(e){return e.split("-")[0]}var q=Math.max,W=Math.min,B=Math.round;function H(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function C(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function R(e,n){return"viewport"===n?C(function(e){var n=t(e),r=p(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;return o&&(i=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,f=o.offsetTop)),{width:i,height:a,x:s+c(e),y:f}}(e)):r(n)?function(e){var t=a(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(n):C(function(e){var t,n=p(e),r=s(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=q(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=q(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+c(e),u=-r.scrollTop;return"rtl"===l(o||n).direction&&(f+=q(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:f,y:u}}(p(e)))}function I(e,t,o){var i="clippingParents"===t?function(e){var t=v(h(e)),o=["absolute","fixed"].indexOf(l(e).position)>=0&&r(e)?y(e):e;return n(o)?t.filter((function(e){return n(e)&&H(e,o)&&"body"!==f(e)})):[]}(e):[].concat(t),a=[].concat(i,[o]),s=a[0],p=a.reduce((function(t,n){var r=R(e,n);return t.top=q(r.top,t.top),t.right=W(r.right,t.right),t.bottom=W(r.bottom,t.bottom),t.left=q(r.left,t.left),t}),R(e,s));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function V(e){return e.split("-")[1]}function N(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function U(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?T(o):null,a=o?V(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case w:t={x:s,y:n.y-r.height};break;case x:t={x:s,y:n.y+n.height};break;case O:t={x:n.x+n.width,y:f};break;case j:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var p=i?N(i):null;if(null!=p){var c="y"===p?"height":"width";switch(a){case"start":t[p]=t[p]-(n[c]/2-r[c]/2);break;case"end":t[p]=t[p]+(n[c]/2-r[c]/2)}}return t}function _(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function F(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function z(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,s=r.boundary,f=void 0===s?"clippingParents":s,c=r.rootBoundary,l=void 0===c?"viewport":c,u=r.elementContext,d=void 0===u?"popper":u,m=r.altBoundary,h=void 0!==m&&m,v=r.padding,g=void 0===v?0:v,b=_("number"!=typeof g?g:F(g,E)),y="popper"===d?"reference":"popper",j=e.elements.reference,S=e.rects.popper,P=e.elements[h?y:d],k=I(n(P)?P:P.contextElement||p(e.elements.popper),f,l),D=a(j),M=U({reference:D,element:S,strategy:"absolute",placement:i}),L=C(Object.assign({},S,M)),A="popper"===d?L:D,T={top:k.top-A.top+b.top,bottom:A.bottom-k.bottom+b.bottom,left:k.left-A.left+b.left,right:A.right-k.right+b.right},q=e.modifiersData.offset;if("popper"===d&&q){var W=q[i];Object.keys(T).forEach((function(e){var t=[O,x].indexOf(e)>=0?1:-1,n=[w,x].indexOf(e)>=0?"y":"x";T[e]+=W[n]*t}))}return T}var G="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",X={placement:"bottom",modifiers:[],strategy:"absolute"};function Y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function J(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?X:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},X,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},p=[],c=!1,u={state:f,setOptions:function(r){h(),f.options=Object.assign({},a,f.options,r),f.scrollParents={reference:n(e)?v(e):e.contextElement?v(e.contextElement):[],popper:v(t)};var i=function(e){var t=D(e);return k.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,f.options.modifiers)));(f.orderedModifiers=i.filter((function(e){return e.enabled})),function(e){e.forEach((function(t){Object.keys(t).forEach((function(n){switch(n){case"name":"string"!=typeof t.name&&console.error(M(L,String(t.name),'"name"','"string"','"'+String(t.name)+'"'));break;case"enabled":"boolean"!=typeof t.enabled&&console.error(M(L,t.name,'"enabled"','"boolean"','"'+String(t.enabled)+'"'));case"phase":k.indexOf(t.phase)<0&&console.error(M(L,t.name,'"phase"',"either "+k.join(", "),'"'+String(t.phase)+'"'));break;case"fn":"function"!=typeof t.fn&&console.error(M(L,t.name,'"fn"','"function"','"'+String(t.fn)+'"'));break;case"effect":"function"!=typeof t.effect&&console.error(M(L,t.name,'"effect"','"function"','"'+String(t.fn)+'"'));break;case"requires":Array.isArray(t.requires)||console.error(M(L,t.name,'"requires"','"array"','"'+String(t.requires)+'"'));break;case"requiresIfExists":Array.isArray(t.requiresIfExists)||console.error(M(L,t.name,'"requiresIfExists"','"array"','"'+String(t.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+t.name+'" modifier, valid properties are '+A.map((function(e){return'"'+e+'"'})).join(", ")+'; but "'+n+'" was provided.')}t.requires&&t.requires.forEach((function(n){null==e.find((function(e){return e.name===n}))&&console.error(M('Popper: modifier "%s" requires "%s", but "%s" modifier is not available',String(t.name),n,n))}))}))}))}((s=[].concat(i,f.options.modifiers),c=function(e){return e.name},d=new Set,s.filter((function(e){var t=c(e);if(!d.has(t))return d.add(t),!0})))),"auto"===T(f.options.placement))&&(f.orderedModifiers.find((function(e){return"flip"===e.name}))||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" ")));var s,c,d,m=l(t);return[m.marginTop,m.marginRight,m.marginBottom,m.marginLeft].some((function(e){return parseFloat(e)}))&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" ")),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r});p.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!c){var e=f.elements,t=e.reference,n=e.popper;if(Y(t,n)){f.rects={reference:d(t,y(n),"fixed"===f.options.strategy),popper:m(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0,o=0;o<f.orderedModifiers.length;o++){if((r+=1)>100){console.error("Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.");break}if(!0!==f.reset){var i=f.orderedModifiers[o],a=i.fn,s=i.options,p=void 0===s?{}:s,l=i.name;"function"==typeof a&&(f=a({state:f,options:p,name:l,instance:u})||f)}else f.reset=!1,o=-1}}else console.error(G)}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){h(),c=!0}};if(!Y(e,t))return console.error(G),u;function h(){p.forEach((function(e){return e()})),p=[]}return u.setOptions(r).then((function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var K={passive:!0};var Q={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,p=t(n.elements.popper),c=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&c.forEach((function(e){e.addEventListener("scroll",r.update,K)})),f&&p.addEventListener("resize",r.update,K),function(){a&&c.forEach((function(e){e.removeEventListener("scroll",r.update,K)})),f&&p.removeEventListener("resize",r.update,K)}},data:{}};var Z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=U({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},$={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,d=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:B(B(t*r)/r)||0,y:B(B(n*r)/r)||0}}(a):"function"==typeof u?u(a):a,m=d.x,h=void 0===m?0:m,v=d.y,g=void 0===v?0:v,b=a.hasOwnProperty("x"),E=a.hasOwnProperty("y"),S=j,P=w,k=window;if(c){var D=y(r),M="clientHeight",L="clientWidth";D===t(r)&&"static"!==l(D=p(r)).position&&(M="scrollHeight",L="scrollWidth"),D=D,i===w&&(P=x,g-=D[M]-o.height,g*=f?1:-1),i===j&&(S=O,h-=D[L]-o.width,h*=f?1:-1)}var A,T=Object.assign({position:s},c&&$);return f?Object.assign({},T,((A={})[P]=E?"0":"",A[S]=b?"0":"",A.transform=(k.devicePixelRatio||1)<2?"translate("+h+"px, "+g+"px)":"translate3d("+h+"px, "+g+"px, 0)",A)):Object.assign({},T,((n={})[P]=E?g+"px":"",n[S]=b?h+"px":"",n.transform="",n))}var te={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,p=l(t.elements.popper).transitionProperty||"";a&&["transform","top","right","bottom","left"].some((function(e){return p.indexOf(e)>=0}))&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',"\n\n",'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.","\n\n","We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "));var c={placement:T(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ne={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];r(i)&&f(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});r(o)&&f(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};var re={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=P.reduce((function(e,n){return e[n]=function(e,t,n){var r=T(e),o=[j,w].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[j,O].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=p),t.modifiersData[r]=a}},oe={left:"right",right:"left",bottom:"top",top:"bottom"};function ie(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var ae={start:"end",end:"start"};function se(e){return e.replace(/start|end/g,(function(e){return ae[e]}))}function fe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,p=void 0===f?P:f,c=V(r),l=c?s?S:S.filter((function(e){return V(e)===c})):E,u=l.filter((function(e){return p.indexOf(e)>=0}));0===u.length&&(u=l,console.error(["Popper: The `allowedAutoPlacements` option did not allow any","placements. Ensure the `placement` option matches the variation","of the allowed placements.",'For example, "auto" cannot be used to allow "bottom-start".','Use "auto-start" instead.'].join(" ")));var d=u.reduce((function(t,n){return t[n]=z(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[T(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var pe={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,p=n.padding,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=T(v),b=f||(g===v||!m?[ie(v)]:function(e){if("auto"===T(e))return[];var t=ie(e);return[se(e),t,se(t)]}(v)),y=[v].concat(b).reduce((function(e,n){return e.concat("auto"===T(n)?fe(t,{placement:n,boundary:c,rootBoundary:l,padding:p,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),E=t.rects.reference,S=t.rects.popper,P=new Map,k=!0,D=y[0],M=0;M<y.length;M++){var L=y[M],A=T(L),q="start"===V(L),W=[w,x].indexOf(A)>=0,B=W?"width":"height",H=z(t,{placement:L,boundary:c,rootBoundary:l,altBoundary:u,padding:p}),C=W?q?O:j:q?x:w;E[B]>S[B]&&(C=ie(C));var R=ie(C),I=[];if(i&&I.push(H[A]<=0),s&&I.push(H[C]<=0,H[R]<=0),I.every((function(e){return e}))){D=L,k=!1;break}P.set(L,I)}if(k)for(var N=function(e){var t=y.find((function(t){var n=P.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return D=t,"break"},U=m?3:1;U>0;U--){if("break"===N(U))break}t.placement!==D&&(t.modifiersData[r]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ce(e,t,n){return q(e,W(t,n))}var le={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,p=n.rootBoundary,c=n.altBoundary,l=n.padding,u=n.tether,d=void 0===u||u,h=n.tetherOffset,v=void 0===h?0:h,g=z(t,{boundary:f,rootBoundary:p,padding:l,altBoundary:c}),b=T(t.placement),E=V(t.placement),S=!E,P=N(b),k="x"===P?"y":"x",D=t.modifiersData.popperOffsets,M=t.rects.reference,L=t.rects.popper,A="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,B={x:0,y:0};if(D){if(i||s){var H="y"===P?w:j,C="y"===P?x:O,R="y"===P?"height":"width",I=D[P],U=D[P]+g[H],_=D[P]-g[C],F=d?-L[R]/2:0,G="start"===E?M[R]:L[R],X="start"===E?-L[R]:-M[R],Y=t.elements.arrow,J=d&&Y?m(Y):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Q=K[H],Z=K[C],$=ce(0,M[R],J[R]),ee=S?M[R]/2-F-$-Q-A:G-$-Q-A,te=S?-M[R]/2+F+$+Z+A:X+$+Z+A,ne=t.elements.arrow&&y(t.elements.arrow),re=ne?"y"===P?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][P]:0,ie=D[P]+ee-oe-re,ae=D[P]+te-oe;if(i){var se=ce(d?W(U,ie):U,I,d?q(_,ae):_);D[P]=se,B[P]=se-I}if(s){var fe="x"===P?w:j,pe="x"===P?x:O,le=D[k],ue=le+g[fe],de=le-g[pe],me=ce(d?W(ue,ie):ue,le,d?q(de,ae):de);D[k]=me,B[k]=me-le}}t.modifiersData[r]=B}},requiresIfExists:["offset"]};var ue={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=T(n.placement),f=N(s),p=[j,O].indexOf(s)>=0?"height":"width";if(i&&a){var c=function(e,t){return _("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:F(e,E))}(o.padding,n),l=m(i),u="y"===f?w:j,d="y"===f?x:O,h=n.rects.reference[p]+n.rects.reference[f]-a[f]-n.rects.popper[p],v=a[f]-n.rects.reference[f],g=y(i),b=g?"y"===f?g.clientHeight||0:g.clientWidth||0:0,S=h/2-v/2,P=c[u],k=b-l[p]-c[d],D=b/2-l[p]/2+S,M=ce(P,D,k),L=f;n.modifiersData[r]=((t={})[L]=M,t.centerOffset=M-D,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&(r(o)||console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).',"To use an SVG arrow, wrap it in an HTMLElement that will be used as","the arrow."].join(" ")),H(t.elements.popper,o)?t.elements.arrow=o:console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper',"element."].join(" ")))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function de(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function me(e){return[w,O,x,j].some((function(t){return e[t]>=0}))}var he={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=z(t,{elementContext:"reference"}),s=z(t,{altBoundary:!0}),f=de(a,r),p=de(s,o,i),c=me(f),l=me(p);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}},ve=J({defaultModifiers:[Q,Z,te,ne]}),ge=[Q,Z,te,ne,re,pe,le,ue,he],be=J({defaultModifiers:ge});e.applyStyles=ne,e.arrow=ue,e.computeStyles=te,e.createPopper=be,e.createPopperLite=ve,e.defaultModifiers=ge,e.detectOverflow=z,e.eventListeners=Q,e.flip=pe,e.hide=he,e.offset=re,e.popperGenerator=J,e.popperOffsets=Z,e.preventOverflow=le,Object.defineProperty(e,"__esModule",{value:!0})}));