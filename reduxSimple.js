module.exports=function(r){function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:e})},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},n.p="",n(n.s=0)}([function(r,n,t){"use strict";function e(r){if(Array.isArray(r)){for(var n=0,t=Array(r.length);n<r.length;n++)t[n]=r[n];return t}return Array.from(r)}Object.defineProperty(n,"__esModule",{value:!0}),n.APP_START=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},u=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])}return r},i=t(1),a=n.APP_START="APP_START:NOW",c=function(r,n,t){var e=t.type,i=u({},n);return r.filter(function(r){var n=r.reducer;return Boolean(n)}).forEach(function(r){var n=r.reducer;if("function"==typeof n)return i=n(u({},i),u({},t));"object"===(void 0===n?"undefined":o(n))&&n.hasOwnProperty(e)&&(i=n[e](u({},i),u({},t)))}),i},f=function(r){return r.filter(function(r){var n=r.middleware;return Boolean(n)}).map(function(r){var n=r.middleware;return"function"==typeof n?n:function(r){return function(t){return function(e){var o=e.type;return n.hasOwnProperty(o)?n[o](r,t,e):t(e)}}}})},l=function(r){return r.filter(function(r){var n=r.enhancer;return Boolean(n)}).map(function(r){return r.enhancer})},p=function(r,n){return r.filter(function(r){var n=r.initialState;return Boolean(n)}).reduce(function(r,n){var t=n.initialState;return u({},r,t)},n)};n.default=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=c.bind(void 0,r),o=l(r),u=i.applyMiddleware.apply(void 0,e(f(r))),y=i.compose.apply(void 0,[u].concat(e(o))),d=p(r,n),v=(0,i.createStore)(t,d,y);return v.dispatch({type:a}),v}},function(r,n){r.exports=require("redux")}]);
//# sourceMappingURL=reduxSimple.js.map