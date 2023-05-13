(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(e,t,n){"use strict";n.d(t,{$s:function(){return U},BH:function(){return v},L:function(){return l},LL:function(){return O},P0:function(){return m},Pz:function(){return y},Sg:function(){return w},ZR:function(){return A},aH:function(){return g},b$:function(){return T},eu:function(){return k},hl:function(){return S},m9:function(){return V},ne:function(){return M},pd:function(){return x},q4:function(){return p},ru:function(){return I},tV:function(){return u},uI:function(){return E},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let o=t[s],a=n[s];if(R(o)&&R(a)){if(!e(o,a))return!1}else if(o!==a)return!1}for(let l of i)if(!r.includes(l))return!1;return!0}},w1:function(){return _},xO:function(){return P},xb:function(){return D},z$:function(){return b},zI:function(){return C},zd:function(){return L}});var r=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let o=e[n++],a=e[n++],l=e[n++],u=((7&i)<<18|(63&o)<<12|(63&a)<<6|63&l)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{let c=e[n++],h=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&c)<<6|63&h)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let s=n[e.charAt(i++)],o=i<e.length,a=o?n[e.charAt(i)]:0;++i;let l=i<e.length,u=l?n[e.charAt(i)]:64;++i;let c=i<e.length,h=c?n[e.charAt(i)]:64;if(++i,null==s||null==a||null==u||null==h)throw Error();let d=s<<2|a>>4;if(r.push(d),64!==u){let f=a<<4&240|u>>2;if(r.push(f),64!==h){let p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){let t=i(e);return o.encodeByteArray(t,!0)},l=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null},c=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,h=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},d=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let n=e&&u(e[1]);return n&&JSON.parse(n)},f=()=>{try{return c()||h()||d()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},p=e=>{var t,n;return null===(n=null===(t=f())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{let t=p(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},g=()=>{var e;return null===(e=f())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=f())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function w(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[l(JSON.stringify({alg:"none",type:"JWT"})),l(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function I(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function T(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function _(){let e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S(){try{return"object"==typeof indexedDB}catch(e){return!1}}function k(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(s){t(s)}})}function C(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(N,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new A(r,o,n);return a}}let N=/\{\$([^}]+)}/g;function D(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function P(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function L(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function x(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function M(e,t){let n=new j(e,t);return n.subscribe.bind(n)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(){}function U(e,t=1e3,n=2){let r=t*Math.pow(n,e);return Math.min(144e5,r+Math.round(.5*r*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function V(e){return e&&e._delegate?e._delegate:e}},7272:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(e){return"'"+e+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[$]}function s(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===z}(e)||Array.isArray(e)||!!e[B]||!!(null===(t=e.constructor)||void 0===t?void 0:t[B])||h(e)||d(e))}function o(e,t,n){void 0===n&&(n=!1),0===a(e)?(n?Object.keys:K)(e).forEach(function(r){n&&"symbol"==typeof r||t(r,e[r],e)}):e.forEach(function(n,r){return t(r,n,e)})}function a(e){var t=e[$];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:h(e)?2:d(e)?3:0}function l(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u(e,t,n){var r=a(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function c(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e){return F&&e instanceof Map}function d(e){return U&&e instanceof Set}function f(e){return e.o||e.t}function p(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=H(e);delete t[$];for(var n=K(t),r=0;r<n.length;r++){var i=n[r],s=t[i];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function m(e,t){return void 0===t&&(t=!1),y(e)||i(e)||!s(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=g),Object.freeze(e),t&&o(e,function(e,t){return m(t,!0)},!0)),e}function g(){r(2)}function y(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function v(e){var t=W[e];return t||r(18,e),t}function w(e,t){t&&(v("Patches"),e.u=[],e.s=[],e.v=t)}function b(e){E(e),e.p.forEach(T),e.p=null}function E(e){e===M&&(M=e.l)}function I(e){return M={p:[],l:M,h:e,m:!0,_:0}}function T(e){var t=e[$];0===t.i||1===t.i?t.j():t.O=!0}function _(e,t){t._=t.p.length;var n=t.p[0],i=void 0!==e&&e!==n;return t.h.g||v("ES5").S(t,e,i),i?(n[$].P&&(b(t),r(4)),s(e)&&(e=S(t,e),t.l||C(t,e)),t.u&&v("Patches").M(n[$].t,e,t.u,t.s)):e=S(t,n,[]),b(t),t.u&&t.v(t.u,t.s),e!==q?e:void 0}function S(e,t,n){if(y(t))return t;var r=t[$];if(!r)return o(t,function(i,s){return k(e,r,t,i,s,n)},!0),t;if(r.A!==e)return t;if(!r.P)return C(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=p(r.k):r.o,s=i,a=!1;3===r.i&&(s=new Set(i),i.clear(),a=!0),o(s,function(t,s){return k(e,r,i,t,s,n,a)}),C(e,i,!1),n&&e.u&&v("Patches").N(r,n,e.u,e.s)}return r.o}function k(e,t,n,r,o,a,c){if(i(o)){var h=S(e,o,a&&t&&3!==t.i&&!l(t.R,r)?a.concat(r):void 0);if(u(n,r,h),!i(h))return;e.m=!1}else c&&n.add(o);if(s(o)&&!y(o)){if(!e.h.D&&e._<1)return;S(e,o),t&&t.A.l||C(e,o)}}function C(e,t,n){void 0===n&&(n=!1),!e.l&&e.h.D&&e.m&&m(t,n)}function A(e,t){var n=e[$];return(n?f(n):e)[t]}function O(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function N(e){e.P||(e.P=!0,e.l&&N(e.l))}function D(e){e.o||(e.o=p(e.t))}function R(e,t,n){var r,i,s,o,a,l,u,c=h(t)?v("MapSet").F(t,n):d(t)?v("MapSet").T(t,n):e.g?(s=i={i:(r=Array.isArray(t))?1:0,A:n?n.A:M,P:!1,I:!1,R:{},l:n,t:t,k:null,o:null,j:null,C:!1},o=G,r&&(s=[i],o=Q),l=(a=Proxy.revocable(s,o)).revoke,u=a.proxy,i.k=u,i.j=l,u):v("ES5").J(t,n);return(n?n.A:M).p.push(c),c}function P(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return p(e)}n.d(t,{xC:function(){return em},oM:function(){return ev}});var L,x,M,j="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),F="undefined"!=typeof Map,U="undefined"!=typeof Set,V="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,q=j?Symbol.for("immer-nothing"):((x={})["immer-nothing"]=!0,x),B=j?Symbol.for("immer-draftable"):"__$immer_draftable",$=j?Symbol.for("immer-state"):"__$immer_state",z=""+Object.prototype.constructor,K="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,H=Object.getOwnPropertyDescriptors||function(e){var t={};return K(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},W={},G={get:function(e,t){if(t===$)return e;var n,r,i=f(e);if(!l(i,t))return(r=O(i,t))?"value"in r?r.value:null===(n=r.get)||void 0===n?void 0:n.call(e.k):void 0;var o=i[t];return e.I||!s(o)?o:o===A(e.t,t)?(D(e),e.o[t]=R(e.A.h,o,e)):o},has:function(e,t){return t in f(e)},ownKeys:function(e){return Reflect.ownKeys(f(e))},set:function(e,t,n){var r=O(f(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=A(f(e),t),s=null==i?void 0:i[$];if(s&&s.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(c(n,i)&&(void 0!==n||l(e.t,t)))return!0;D(e),N(e)}return e.o[t]===n&&(void 0!==n||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==A(e.t,t)||t in e.t?(e.R[t]=!1,D(e),N(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=f(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},Q={};o(G,function(e,t){Q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Q.deleteProperty=function(e,t){return Q.set.call(this,e,t,void 0)},Q.set=function(e,t,n){return G.set.call(this,e[0],t,n,e[0])};var X=new(function(){function e(e){var t=this;this.g=V,this.D=!0,this.produce=function(e,n,i){if("function"==typeof e&&"function"!=typeof n){var o,a=n;return n=e,function(e){var r=this;void 0===e&&(e=a);for(var i=arguments.length,s=Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return t.produce(e,function(e){var t;return(t=n).call.apply(t,[r,e].concat(s))})}}if("function"!=typeof n&&r(6),void 0!==i&&"function"!=typeof i&&r(7),s(e)){var l=I(t),u=R(t,e,void 0),c=!0;try{o=n(u),c=!1}finally{c?b(l):E(l)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then(function(e){return w(l,i),_(e,l)},function(e){throw b(l),e}):(w(l,i),_(o,l))}if(!e||"object"!=typeof e){if(void 0===(o=n(e))&&(o=e),o===q&&(o=void 0),t.D&&m(o,!0),i){var h=[],d=[];v("Patches").M(e,o,h,d),i(h,d)}return o}r(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return t.produceWithPatches(n,function(t){return e.apply(void 0,[t].concat(i))})};var r,i,s=t.produce(e,n,function(e,t){r=e,i=t});return"undefined"!=typeof Promise&&s instanceof Promise?s.then(function(e){return[e,r,i]}):[s,r,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){s(e)||r(8),i(e)&&(i(t=e)||r(22,t),e=function e(t){if(!s(t))return t;var n,r=t[$],i=a(t);if(r){if(!r.P&&(r.i<4||!v("ES5").K(r)))return r.t;r.I=!0,n=P(t,i),r.I=!1}else n=P(t,i);return o(n,function(t,i){var s;r&&(2===a(s=r.t)?s.get(t):s[t])===i||u(n,t,e(i))}),3===i?new Set(n):n}(t));var t,n=I(this),l=R(this,e,void 0);return l[$].C=!0,E(n),l},t.finishDraft=function(e,t){var n=(e&&e[$]).A;return w(n,t),_(void 0,n)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!V&&r(20),this.g=e},t.applyPatches=function(e,t){for(n=t.length-1;n>=0;n--){var n,r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var s=v("Patches").$;return i(e)?s(e,t):this.produce(e,function(e){return s(e,t)})},e}()),J=X.produce;X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseProxies.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X);var Y=n(8356),Z=n(3894);n(3454);var ee=(L=function(e,t){return(L=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),et=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},en=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},er=Object.defineProperty,ei=Object.defineProperties,es=Object.getOwnPropertyDescriptors,eo=Object.getOwnPropertySymbols,ea=Object.prototype.hasOwnProperty,el=Object.prototype.propertyIsEnumerable,eu=function(e,t,n){return t in e?er(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},ec=function(e,t){for(var n in t||(t={}))ea.call(t,n)&&eu(e,n,t[n]);if(eo)for(var r=0,i=eo(t);r<i.length;r++){var n=i[r];el.call(t,n)&&eu(e,n,t[n])}return e},eh=function(e,t){return ei(e,es(t))},ed="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?Y.qC:Y.qC.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var ef=function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return ee(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,en([void 0],e[0].concat(this)))):new(t.bind.apply(t,en([void 0],e.concat(this))))},t}(Array);function ep(e){return s(e)?J(e,function(){}):e}function em(e){var t,n=function(e){var t,n,r,i;return void 0===(t=e)&&(t={}),r=void 0===(n=t.thunk)||n,t.immutableCheck,t.serializableCheck,i=new ef,r&&("boolean"==typeof r?i.push(Z.Z):i.push(Z.Z.withExtraArgument(r.extraArgument))),i},r=e||{},i=r.reducer,s=void 0===i?void 0:i,o=r.middleware,a=void 0===o?n():o,l=r.devTools,u=void 0===l||l,c=r.preloadedState,h=r.enhancers,d=void 0===h?void 0:h;if("function"==typeof s)t=s;else if(function(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return t===n}(s))t=(0,Y.UY)(s);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var f=a;"function"==typeof f&&(f=f(n));var p=Y.md.apply(void 0,f),m=Y.qC;u&&(m=ed(ec({trace:!1},"object"==typeof u&&u)));var g=[p];Array.isArray(d)?g=en([p],d):"function"==typeof d&&(g=d(g));var y=m.apply(void 0,g);return(0,Y.MT)(t,void 0===c?void 0:c,y)}function eg(e,t){function n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t){var i=t.apply(void 0,n);if(!i)throw Error("prepareAction did not return an object");return ec(ec({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(t){return t.type===e},n}function ey(e){var t,n={},r=[],i={addCase:function(e,t){var r="string"==typeof e?e:e.type;if(r in n)throw Error("addCase cannot be called with two reducers for the same action type");return n[r]=t,i},addMatcher:function(e,t){return r.push({matcher:e,reducer:t}),i},addDefaultCase:function(e){return t=e,i}};return e(i),[n,r,t]}function ev(e){var t,n=e.name;if(!n)throw Error("`name` is a required option for createSlice");var r="function"==typeof e.initialState?e.initialState:ep(e.initialState),o=e.reducers||{},a=Object.keys(o),l={},u={},c={};function h(){var t="function"==typeof e.extraReducers?ey(e.extraReducers):[e.extraReducers],n=t[0],o=t[1],a=void 0===o?[]:o,l=t[2],c=void 0===l?void 0:l,h=ec(ec({},void 0===n?{}:n),u);return function(e,t,n,r){void 0===n&&(n=[]);var o,a="function"==typeof t?ey(t):[t,n,void 0],l=a[0],u=a[1],c=a[2];if("function"==typeof e)o=function(){return ep(e())};else{var h=ep(e);o=function(){return h}}function d(e,t){void 0===e&&(e=o());var n=en([l[t.type]],u.filter(function(e){return(0,e.matcher)(t)}).map(function(e){return e.reducer}));return 0===n.filter(function(e){return!!e}).length&&(n=[c]),n.reduce(function(e,n){if(n){if(i(e)){var r=n(e,t);return void 0===r?e:r}if(s(e))return J(e,function(e){return n(e,t)});var r=n(e,t);if(void 0===r){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e},e)}return d.getInitialState=o,d}(r,function(e){for(var t in h)e.addCase(t,h[t]);for(var n=0;n<a.length;n++){var r=a[n];e.addMatcher(r.matcher,r.reducer)}c&&e.addDefaultCase(c)})}return a.forEach(function(e){var t,r,i=o[e],s=n+"/"+e;"reducer"in i?(t=i.reducer,r=i.prepare):t=i,l[e]=t,u[s]=t,c[e]=r?eg(s,r):eg(s)}),{name:n,reducer:function(e,n){return t||(t=h()),t(e,n)},actions:c,caseReducers:l,getInitialState:function(){return t||(t=h()),t.getInitialState()}}}var ew=function(e){void 0===e&&(e=21);for(var t="",n=e;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},eb=["name","message","stack","code"],eE=function(e,t){this.payload=e,this.meta=t},eI=function(e,t){this.payload=e,this.meta=t},eT=function(e){if("object"==typeof e&&null!==e){for(var t={},n=0;n<eb.length;n++){var r=eb[n];"string"==typeof e[r]&&(t[r]=e[r])}return t}return{message:String(e)}};function e_(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}!function(){function e(e,t,n){var r=eg(e+"/fulfilled",function(e,t,n,r){return{payload:e,meta:eh(ec({},r||{}),{arg:n,requestId:t,requestStatus:"fulfilled"})}}),i=eg(e+"/pending",function(e,t,n){return{payload:void 0,meta:eh(ec({},n||{}),{arg:t,requestId:e,requestStatus:"pending"})}}),s=eg(e+"/rejected",function(e,t,r,i,s){return{payload:i,error:(n&&n.serializeError||eT)(e||"Rejected"),meta:eh(ec({},s||{}),{arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:(null==e?void 0:e.name)==="AbortError",condition:(null==e?void 0:e.name)==="ConditionError"})}}),o="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign(function(e){return function(a,l,u){var c,h=(null==n?void 0:n.idGenerator)?n.idGenerator(e):ew(),d=new o;function f(e){c=e,d.abort()}var p=function(){var o,p;return o=this,p=function(){var o,p,m,g,y,v;return et(this,function(w){switch(w.label){case 0:var b;if(w.trys.push([0,4,,5]),!(null!==(b=g=null==(o=null==n?void 0:n.condition)?void 0:o.call(n,e,{getState:l,extra:u}))&&"object"==typeof b&&"function"==typeof b.then))return[3,2];return[4,g];case 1:g=w.sent(),w.label=2;case 2:if(!1===g||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return y=new Promise(function(e,t){return d.signal.addEventListener("abort",function(){return t({name:"AbortError",message:c||"Aborted"})})}),a(i(h,e,null==(p=null==n?void 0:n.getPendingMeta)?void 0:p.call(n,{requestId:h,arg:e},{getState:l,extra:u}))),[4,Promise.race([y,Promise.resolve(t(e,{dispatch:a,getState:l,extra:u,requestId:h,signal:d.signal,abort:f,rejectWithValue:function(e,t){return new eE(e,t)},fulfillWithValue:function(e,t){return new eI(e,t)}})).then(function(t){if(t instanceof eE)throw t;return t instanceof eI?r(t.payload,h,e,t.meta):r(t,h,e)})])];case 3:return m=w.sent(),[3,5];case 4:return m=(v=w.sent())instanceof eE?s(null,h,e,v.payload,v.meta):s(v,h,e),[3,5];case 5:return n&&!n.dispatchConditionRejection&&s.match(m)&&m.meta.condition||a(m),[2,m]}})},new Promise(function(e,t){var n=function(e){try{i(p.next(e))}catch(n){t(n)}},r=function(e){try{i(p.throw(e))}catch(n){t(n)}},i=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(n,r)};i((p=p.apply(o,null)).next())})}();return Object.assign(p,{abort:f,requestId:h,arg:e,unwrap:function(){return p.then(e_)}})}},{pending:i,rejected:s,fulfilled:r,typePrefix:e})}e.withTypes=function(){return e}}();var eS="listenerMiddleware";eg(eS+"/add"),eg(eS+"/removeAll"),eg(eS+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==n.g?n.g:globalThis),"undefined"!=typeof window&&window.requestAnimationFrame&&window.requestAnimationFrame,function(){function e(e,t){var n=s[e];return n?n.enumerable=t:s[e]=n={configurable:!0,enumerable:t,get:function(){var t=this[$];return G.get(t,e)},set:function(t){var n=this[$];G.set(n,e,t)}},n}function t(e){for(var t=e.length-1;t>=0;t--){var i=e[t][$];if(!i.P)switch(i.i){case 5:r(i)&&N(i);break;case 4:n(i)&&N(i)}}}function n(e){for(var t=e.t,n=e.k,r=K(n),i=r.length-1;i>=0;i--){var s=r[i];if(s!==$){var o=t[s];if(void 0===o&&!l(t,s))return!0;var a=n[s],u=a&&a[$];if(u?u.t!==o:!c(a,o))return!0}}var h=!!t[$];return r.length!==K(t).length+(h?0:1)}function r(e){var t=e.k;if(t.length!==e.t.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);if(n&&!n.get)return!0;for(var r=0;r<t.length;r++)if(!t.hasOwnProperty(r))return!0;return!1}var s={};W.ES5||(W.ES5={J:function(t,n){var r=Array.isArray(t),i=function(t,n){if(t){for(var r=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(r,""+i,e(i,!0));return r}var s=H(n);delete s[$];for(var o=K(s),a=0;a<o.length;a++){var l=o[a];s[l]=e(l,t||!!s[l].enumerable)}return Object.create(Object.getPrototypeOf(n),s)}(r,t),s={i:r?5:4,A:n?n.A:M,P:!1,I:!1,R:{},l:n,t:t,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,$,{value:s,writable:!0}),i},S:function(e,n,s){s?i(n)&&n[$].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var n=t[$];if(n){var i=n.t,s=n.k,a=n.R,u=n.i;if(4===u)o(s,function(t){t!==$&&(void 0!==i[t]||l(i,t)?a[t]||e(s[t]):(a[t]=!0,N(n)))}),o(i,function(e){void 0!==s[e]||l(s,e)||(a[e]=!1,N(n))});else if(5===u){if(r(n)&&(N(n),a.length=!0),s.length<i.length)for(var c=s.length;c<i.length;c++)a[c]=!1;else for(var h=i.length;h<s.length;h++)a[h]=!0;for(var d=Math.min(s.length,i.length),f=0;f<d;f++)s.hasOwnProperty(f)||(a[f]=!0),void 0===a[f]&&e(s[f])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?n(e):r(e)}})}()},8679:function(e,t,n){"use strict";var r=n(9864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return r.isMemo(e)?o:a[e.$$typeof]||i}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=o;var u=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var i=f(n);i&&i!==p&&e(t,i,r)}var o=c(n);h&&(o=o.concat(h(n)));for(var a=l(t),m=l(n),g=0;g<o.length;++g){var y=o[g];if(!s[y]&&!(r&&r[y])&&!(m&&m[y])&&!(a&&a[y])){var v=d(n,y);try{u(t,y,v)}catch(w){}}}}return t}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1248)}])},5096:function(e,t,n){"use strict";n.d(t,{a:function(){return u},s:function(){return l}});var r=n(5893),i=n(7294),s=n(2796),o=n(1163);let a=(0,i.createContext)({authUser:null,loading:!0,async signOut(){},async signInWithCustomEmailAndPassword(e,t){},async createNewUserWithEmailAndPassword(e,t){},async updateUsername(e,t){},async signInWithGoogle(){},async signInWithFacebook(){}});function l(e){let{children:t}=e,n=(0,s.Z)();return(0,o.useRouter)(),(0,r.jsx)(a.Provider,{value:n,children:t})}let u=()=>(0,i.useContext)(a)},2583:function(e,t,n){"use strict";let r,i,s,o;n.d(t,{I:function(){return eA},db:function(){return eC}});var a=n(2238);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0,a.KN)("firebase","9.16.0","app");var l=n(3333),u=n(4444),c=n(8463),h=n(6531);let d="@firebase/installations",f="0.6.1",p=`w:${f}`,m="FIS_v2",g=new u.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function y(e){return e instanceof u.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function v({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function w(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function b(e,t){let n=await t.json(),r=n.error;return g.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function E({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function I(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function T({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=v(e),i=E(e),s=t.getImmediate({optional:!0});if(s){let o=await s.getHeartbeatsHeader();o&&i.append("x-firebase-client",o)}let a={fid:n,authVersion:m,appId:e.appId,sdkVersion:p},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await I(()=>fetch(r,l));if(u.ok){let c=await u.json(),h={fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:w(c.authToken)};return h}throw await b("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let S=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function k(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let C=new Map;function A(e,t){let n=k(e);O(n,t),function(e,t){let n=(!N&&"BroadcastChannel"in self&&((N=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{O(e.data.key,e.data.fid)}),N);n&&n.postMessage({key:e,fid:t}),0===C.size&&N&&(N.close(),N=null)}(n,t)}function O(e,t){let n=C.get(e);if(n)for(let r of n)r(t)}let N=null,D="firebase-installations-store",R=null;function P(){return R||(R=(0,h.X3)("firebase-installations-database",1,{upgrade(e,t){0===t&&e.createObjectStore(D)}})),R}async function L(e,t){let n=k(e),r=await P(),i=r.transaction(D,"readwrite"),s=i.objectStore(D),o=await s.get(n);return await s.put(t,n),await i.done,o&&o.fid===t.fid||A(e,t.fid),t}async function x(e){let t=k(e),n=await P(),r=n.transaction(D,"readwrite");await r.objectStore(D).delete(t),await r.done}async function M(e,t){let n=k(e),r=await P(),i=r.transaction(D,"readwrite"),s=i.objectStore(D),o=await s.get(n),a=t(o);return void 0===a?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&A(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function j(e){let t;let n=await M(e.appConfig,n=>{let r=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let n=function(e){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return S.test(n)?n:""}catch(r){return""}}(),registrationStatus:0};return q(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let n=Promise.reject(g.create("app-offline"));return{installationEntry:t,registrationPromise:n}}let r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=F(e,r);return{installationEntry:r,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:U(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function F(e,t){try{let n=await T(e,t);return L(e.appConfig,n)}catch(r){throw y(r)&&409===r.customData.serverCode?await x(e.appConfig):await L(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function U(e){let t=await V(e.appConfig);for(;1===t.registrationStatus;)await _(100),t=await V(e.appConfig);if(0===t.registrationStatus){let{installationEntry:n,registrationPromise:r}=await j(e);return r||n}return t}function V(e){return M(e,e=>{if(!e)throw g.create("installation-not-found");return q(e)})}function q(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function B({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${v(e)}/${t}/authTokens:generate`}(e,n),i=function(e,{refreshToken:t}){let n=E(e);return n.append("Authorization",`${m} ${t}`),n}(e,n),s=t.getImmediate({optional:!0});if(s){let o=await s.getHeartbeatsHeader();o&&i.append("x-firebase-client",o)}let a={installation:{sdkVersion:p,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await I(()=>fetch(r,l));if(u.ok){let c=await u.json(),h=w(c);return h}throw await b("Generate Auth Token",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $(e,t=!1){let n;let r=await M(e.appConfig,r=>{var i;if(!W(r))throw g.create("not-registered");let s=r.authToken;if(!t&&2===(i=s).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1===s.requestStatus)return n=z(e,t),r;{if(!navigator.onLine)throw g.create("app-offline");let o=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=H(e,o),o}}),i=n?await n:r.authToken;return i}async function z(e,t){let n=await K(e.appConfig);for(;1===n.authToken.requestStatus;)await _(100),n=await K(e.appConfig);let r=n.authToken;return 0===r.requestStatus?$(e,t):r}function K(e){return M(e,e=>{if(!W(e))throw g.create("not-registered");let t=e.authToken;return 1===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function H(e,t){try{let n=await B(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await L(e.appConfig,r),n}catch(s){if(y(s)&&(401===s.customData.serverCode||404===s.customData.serverCode))await x(e.appConfig);else{let i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await L(e.appConfig,i)}throw s}}function W(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function G(e){let{installationEntry:t,registrationPromise:n}=await j(e);return n?n.catch(console.error):$(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Q(e,t=!1){await X(e);let n=await $(e,t);return n.token}async function X(e){let{registrationPromise:t}=await j(e);t&&await t}function J(e){return g.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Y="installations",Z=e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if(!e||!e.options)throw J("App Configuration");if(!e.name)throw J("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw J(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=(0,a.qX)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ee=e=>{let t=e.getProvider("app").getImmediate(),n=(0,a.qX)(t,Y).getImmediate();return{getId:()=>G(n),getToken:e=>Q(n,e)}};(0,a.Xd)(new c.wA(Y,Z,"PUBLIC")),(0,a.Xd)(new c.wA("installations-internal",ee,"PRIVATE")),(0,a.KN)(d,f),(0,a.KN)(d,f,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let et="analytics",en="https://www.googletagmanager.com/gtag/js",er=new l.Yd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ei(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function es(e,t,n,r,i,s){let o=r[i];try{if(o)await t[o];else{let a=await ei(n),l=a.find(e=>e.measurementId===i);l&&await t[l.appId]}}catch(u){er.error(u)}e("config",i,s)}async function eo(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);let a=await ei(n);for(let l of o){let u=a.find(e=>e.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(h){er.error(h)}}let ea=new u.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),el=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function eu(e){var t;let{appId:n,apiKey:r}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let a="";try{let l=await o.json();(null===(t=l.error)||void 0===t?void 0:t.message)&&(a=l.error.message)}catch(u){}throw ea.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function ec(e,t=el,n){let{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw ea.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ea.create("no-api-key")}let o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ed;return setTimeout(async()=>{a.abort()},void 0!==n?n:6e4),eh({appId:r,apiKey:i,measurementId:s},o,a,t)}async function eh(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=el){var s;let{appId:o,measurementId:a}=e;try{await new Promise((e,n)=>{let i=Math.max(t-Date.now(),0),s=setTimeout(e,i);r.addEventListener(()=>{clearTimeout(s),n(ea.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(l){if(a)return er.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{let c=await eu(e);return i.deleteThrottleMetadata(o),c}catch(f){if(!function(e){if(!(e instanceof u.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(f)){if(i.deleteThrottleMetadata(o),a)return er.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==f?void 0:f.message}]`),{appId:o,measurementId:a};throw f}let h=503===Number(null===(s=null==f?void 0:f.customData)||void 0===s?void 0:s.httpStatus)?(0,u.$s)(n,i.intervalMillis,30):(0,u.$s)(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,d),er.debug(`Calling attemptFetch again in ${h} millis`),eh(e,d,r,i)}}class ed{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ef(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}{let s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ep(){if(!(0,u.hl)())return er.warn(ea.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,u.eu)()}catch(e){return er.warn(ea.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function em(e,t,n,s,o,a,l){var u;let c=ec(e);c.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&er.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>er.error(e)),t.push(c);let h=ep().then(e=>e?s.getId():void 0),[d,f]=await Promise.all([c,h]);!function(e){let t=window.document.getElementsByTagName("script");for(let n of Object.values(t))if(n.src&&n.src.includes(en)&&n.src.includes(e))return n;return null}(a)&&function(e,t){let n=document.createElement("script");n.src=`${en}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(a,d.measurementId),i&&(o("consent","default",i),i=void 0),o("js",new Date);let p=null!==(u=null==l?void 0:l.config)&&void 0!==u?u:{};return p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),o("config",d.measurementId,p),r&&(o("set",r),r=void 0),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eg{constructor(e){this.app=e}_delete(){return delete ey[this.app.options.appId],Promise.resolve()}}let ey={},ev=[],ew={},eb="dataLayer",eE=!1,eI="@firebase/analytics",eT="0.9.1";(0,a.Xd)(new c.wA(et,(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return function(e,t,n){!function(){let e=[];if((0,u.ru)()&&e.push("This is a browser extension environment."),(0,u.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=ea.create("invalid-analytics-context",{errorInfo:t});er.warn(n.message)}}();let r=e.options.appId;if(!r)throw ea.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)er.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ea.create("no-api-key")}if(null!=ey[r])throw ea.create("already-exists",{id:r});if(!eE){var i,a;let l,c;l=[],Array.isArray(window[eb])?l=window[eb]:window[eb]=l;let{wrappedGtag:h,gtagCore:d}=(i="gtag",c=function(...e){window[eb].push(arguments)},window[i]&&"function"==typeof window[i]&&(c=window[i]),window[i]=(a=c,async function(e,t,n){try{"event"===e?await eo(a,ey,ev,t,n):"config"===e?await es(a,ey,ev,ew,t,n):"consent"===e?a("consent","update",n):a("set",t)}catch(r){er.error(r)}}),{gtagCore:c,wrappedGtag:window[i]});o=h,s=d,eE=!0}ey[r]=em(e,ev,ew,t,s,eb,n);let f=new eg(e);return f}(n,r,t)},"PUBLIC")),(0,a.Xd)(new c.wA("analytics-internal",function(e){try{let t=e.getProvider(et).getImmediate();return{logEvent:(e,n,r)=>(function(e,t,n,r){ef(o,ey[(e=(0,u.m9)(e)).app.options.appId],t,n,r).catch(e=>er.error(e))})(t,e,n,r)}}catch(n){throw ea.create("interop-component-reg-failed",{reason:n})}},"PRIVATE")),(0,a.KN)(eI,eT),(0,a.KN)(eI,eT,"esm2017");var e_=n(2465),eS=n(3247);let ek=(0,a.ZF)({apiKey:"AIzaSyC_anNIk3aPsyNhPQM_fLqQ1yoEKjlSGk0",authDomain:"jobie-farm.firebaseapp.com",projectId:"jobie-farm",storageBucket:"jobie-farm.appspot.com",messagingSenderId:"937897298518",appId:"1:937897298518:web:38f7d3b50703ca8d3d89f7",measurementId:"G-MKYV4L1C9W"});!function(e=(0,a.Mq)()){e=(0,u.m9)(e);let t=(0,a.qX)(e,et);t.isInitialized()?t.getImmediate():function(e,t={}){let n=(0,a.qX)(e,et);if(n.isInitialized()){let r=n.getImmediate();if((0,u.vZ)(t,n.getOptions()))return r;throw ea.create("already-initialized")}let i=n.initialize({options:t});return i}(e)}(ek);let eC=(0,eS.ad)(ek),eA=(0,e_.v0)(ek)},2796:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2465),i=n(7294),s=n(2583);let o=e=>({uid:e.uid,email:e.email});function a(){let[e,t]=(0,i.useState)(null),[n,a]=(0,i.useState)(!0),l=e=>{let{email:t,password:n}=e;return(0,r.e5)(s.I,t,n)},u=async e=>{let{email:t,password:n}=e,i=await (0,r.Xb)(s.I,t,n);return await (0,r.w$)(i.user),i.user},c=async e=>await (0,r.LS)(s.I,e,{url:"http://localhost:3000/?reset-password=ok"}),h=async()=>{let e=new r.hJ,t=await (0,r.rh)(s.I,e);return t.user},d=async()=>{let e=new r._O,t=await (0,r.rh)(s.I,e);return t.user},f=(e,t)=>(0,r.ck)(e,{displayName:t}),p=()=>s.I.signOut();return(0,i.useEffect)(()=>{let e=(0,r.Aj)(s.I,e=>{if(!e){t(null),a(!1);return}a(!0),t(o(e)),a(!1)});return()=>e()},[]),{authUser:e,loading:n,signInWithCustomEmailAndPassword:l,createNewUserWithEmailAndPassword:u,updateUsername:f,signInWithGoogle:h,signInWithFacebook:d,requestForgotPassword:c,signOut:p}}},1248:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return er}});var r,i,s,o,a,l,u,c,h,d,f,p,m,g,y,v=n(5893);n(1535),n(7475),n(3749);var w=n(4298),b=n.n(w),E=n(5096),I=n(9473),T=n(7272),_=n(6734),S="persist:",k="persist/FLUSH",C="persist/REHYDRATE",A="persist/PAUSE",O="persist/PERSIST",N="persist/PURGE",D="persist/REGISTER";function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){return JSON.stringify(e)}function x(e){return JSON.parse(e)}function M(e){}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var U=n(8356);function V(e){return function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance")}()}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach(function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var $={registry:[],bootstrapped:!1},z=n(3894),K=n(4438);let H={key:"root",storage:_.Z},W=(r=K.Z,i=void 0!==H.version?H.version:-1,H.debug,s=void 0===H.stateReconciler?function(e,t,n,r){r.debug;var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n);return e&&"object"===R(e)&&Object.keys(e).forEach(function(r){"_persist"!==r&&t[r]===n[r]&&(i[r]=e[r])}),i}:H.stateReconciler,o=H.getStoredState||function(e){var t,n=e.transforms||[],r="".concat(void 0!==e.keyPrefix?e.keyPrefix:S).concat(e.key),i=e.storage;return e.debug,t=!1===e.deserialize?function(e){return e}:"function"==typeof e.deserialize?e.deserialize:x,i.getItem(r).then(function(e){if(e)try{var r={},i=t(e);return Object.keys(i).forEach(function(e){r[e]=n.reduceRight(function(t,n){return n.out(t,e,i)},t(i[e]))}),r}catch(s){throw s}})},a=void 0!==H.timeout?H.timeout:5e3,l=null,u=!1,c=!0,h=function(e){return e._persist.rehydrated&&l&&!c&&l.update(e),e},function(e,t){var n,d,f=e||{},p=f._persist,m=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(f,["_persist"]);if(t.type===O){var g=!1,y=function(e,n){g||(t.rehydrate(H.key,e,n),g=!0)};if(a&&setTimeout(function(){g||y(void 0,Error('redux-persist: persist timed out for persist key "'.concat(H.key,'"')))},a),c=!1,l||(l=function(e){var t,n=e.blacklist||null,r=e.whitelist||null,i=e.transforms||[],s=e.throttle||0,o="".concat(void 0!==e.keyPrefix?e.keyPrefix:S).concat(e.key),a=e.storage;t=!1===e.serialize?function(e){return e}:"function"==typeof e.serialize?e.serialize:L;var l=e.writeFailHandler||null,u={},c={},h=[],d=null,f=null;function p(){if(0===h.length){d&&clearInterval(d),d=null;return}var e=h.shift(),n=i.reduce(function(t,n){return n.in(t,e,u)},u[e]);if(void 0!==n)try{c[e]=t(n)}catch(r){console.error("redux-persist/createPersistoid: error serializing state",r)}else delete c[e];0===h.length&&(Object.keys(c).forEach(function(e){void 0===u[e]&&delete c[e]}),f=a.setItem(o,t(c)).catch(g))}function m(e){return(!r||-1!==r.indexOf(e)||"_persist"===e)&&(!n||-1===n.indexOf(e))}function g(e){l&&l(e)}return{update:function(e){Object.keys(e).forEach(function(t){m(t)&&u[t]!==e[t]&&-1===h.indexOf(t)&&h.push(t)}),Object.keys(u).forEach(function(t){void 0===e[t]&&m(t)&&-1===h.indexOf(t)&&void 0!==u[t]&&h.push(t)}),null===d&&(d=setInterval(p,s)),u=e},flush:function(){for(;0!==h.length;)p();return f||Promise.resolve()}}}(H)),p)return F({},r(m,t),{_persist:p});if("function"!=typeof t.rehydrate||"function"!=typeof t.register)throw Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return t.register(H.key),o(H).then(function(e){(H.migrate||function(e,t){return Promise.resolve(e)})(e,i).then(function(e){y(e)},function(e){y(void 0,e)})},function(e){y(void 0,e)}),F({},r(m,t),{_persist:{version:i,rehydrated:!1}})}if(t.type===N)return u=!0,t.result((n=H.storage,d="".concat(void 0!==H.keyPrefix?H.keyPrefix:S).concat(H.key),n.removeItem(d,M))),F({},r(m,t),{_persist:p});if(t.type===k)return t.result(l&&l.flush()),F({},r(m,t),{_persist:p});if(t.type===A)c=!0;else if(t.type===C){if(u)return F({},m,{_persist:F({},p,{rehydrated:!0})});if(t.key===H.key){var v=r(m,t),w=t.payload;return h(F({},!1!==s&&void 0!==w?s(w,e,v,H):v,{_persist:F({},p,{rehydrated:!0})}))}}if(!p)return r(e,t);var b=r(m,t);return b===m?e:h(F({},b,{_persist:p}))}),G=(0,T.xC)({reducer:{products:W},middleware:[z.Z]}),Q=(f=!1,p=(0,U.MT)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return B({},e,{registry:[].concat(V(e.registry),[t.key])});case C:var n=e.registry.indexOf(t.key),r=V(e.registry);return r.splice(n,1),B({},e,{registry:r,bootstrapped:0===r.length});default:return e}},$,d&&d.enhancer?d.enhancer:void 0),m=function(e){p.dispatch({type:D,key:e})},g=function(e,t,n){var r={type:C,payload:t,err:n,key:e};G.dispatch(r),p.dispatch(r),f&&y.getState().bootstrapped&&(f(),f=!1)},y=B({},p,{purge:function(){var e=[];return G.dispatch({type:N,result:function(t){e.push(t)}}),Promise.all(e)},flush:function(){var e=[];return G.dispatch({type:k,result:function(t){e.push(t)}}),Promise.all(e)},pause:function(){G.dispatch({type:A})},persist:function(){G.dispatch({type:O,register:m,rehydrate:g})}}),d&&d.manualPersist||y.persist(),y);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function et(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var en=function(e){var t;function n(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,n);for(var e,t,r,i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=(e=(t=Y(n)).call.apply(t,[this].concat(s)))&&("object"===X(e)||"function"==typeof e)?e:Z(this),et(Z(r),"state",{bootstrapped:!1}),et(Z(r),"_unsubscribe",void 0),et(Z(r),"handlePersistorState",function(){r.props.persistor.getState().bootstrapped&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(n,e),J(n.prototype,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return"function"==typeof this.props.children?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t&&J(n,t),n}(n(7294).PureComponent);function er(e){let{Component:t,pageProps:n}=e;return(0,v.jsx)(E.s,{children:(0,v.jsxs)("div",{children:[(0,v.jsx)(b(),{src:"/assets/js/jquery.js",onLoad:()=>console.log("jQuery loaded")}),(0,v.jsx)(b(),{src:"/assets/js/fontawesome.min.js",onLoad:()=>console.log("fontAwesome loaded")}),(0,v.jsx)(b(),{src:"/assets/js/waypoints.min.js",onLoad:()=>console.log("waypoint loaded")}),(0,v.jsx)(b(),{src:"https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js",integrity:"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy",crossOrigin:"anonymous",onLoad:()=>console.log("bootsrap loaded")}),(0,v.jsx)(b(),{src:"/assets/js/swiper.min.js",onLoad:()=>console.log("swiper loaded")}),(0,v.jsx)(b(),{src:"/assets/js/jquery.countdown.min.js",onLoad:()=>console.log("jquery countdowm loaded")}),(0,v.jsx)(b(),{src:"/assets/js/jquery.counterup.min.js",onLoad:()=>console.log("countup loaded")}),(0,v.jsx)(b(),{src:"/assets/js/isotope.pkgd.min.js",onLoad:()=>console.log("isotope loaded")}),(0,v.jsx)(b(),{src:"/assets/js/lightcase.js",onLoad:()=>console.log("lightcase loaded")}),(0,v.jsx)(b(),{src:"/assets/js/functions.js",onLoad:()=>console.log("function loaded")}),(0,v.jsx)(I.zt,{store:G,children:(0,v.jsx)(en,{loading:null,persistor:Q,children:(0,v.jsx)(t,{...n})})})]})})}et(en,"defaultProps",{children:null,loading:null})},4438:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});var r=n(7272);let i=(0,r.oM)({name:"products",initialState:{products:[],carts:[],totalAmount:0,totalQuantity:0,changed:!1,users:[],transactions:[],filteredTransactions:[],noTransaction:!1,orders:[],filteredOrders:[],noOrder:!1},reducers:{addProducts(e,t){e.products=t.payload.products},addCartItem(e,t){e.totalQuantity++;let n=t.payload,r=e.carts.find(e=>e.id===n.id),i=+e.totalAmount+ +n.price;e.totalAmount=i.toFixed(2);let s=+n.price;r?(r.quantity++,r.totalPrice=Math.round(r.totalPrice+Number(parseFloat(s).toFixed(2)))):e.carts.push({id:n.id,price:n.price,quantity:1,totalPrice:Number(parseFloat(s).toFixed(2)),title:n.title,image:n.image,type:n.type})},removeCartItem(e,t){let{id:n}=t.payload,r=e.carts.find(e=>e.id===n),i=+e.totalAmount-+r.price;if(e.totalAmount=i.toFixed(2),e.totalQuantity=e.totalQuantity-+r.quantity,1===r.quantity)e.carts=e.carts.filter(e=>e.id!==n);else{let s=r.totalPrice-r.price;r.quantity--,r.totalPrice=s.toFixed(2)}},deleteCartItem(e,t){let{id:n}=t.payload,r=e.carts.find(e=>e.id===n),i=+e.totalAmount-+r.totalPrice;e.totalAmount=i.toFixed(2),e.totalQuantity=e.totalQuantity-+r.quantity,e.carts=e.carts.filter(e=>e.id!==n)},addUsers(e,t){e.users=t.payload.users},addTransactions(e,t){e.transactions=t.payload.transactions},addOrders(e,t){e.orders=t.payload.orders},filterByDate(e,t){let{startDate:n,endDate:r}=t.payload,i=e.transactions.filter(e=>{let t=new Date(e.date);return t>=n&&t<=r});0===i.length?e.noTransaction=!0:e.noTransaction=!1,e.filteredTransactions=i},filterOrders(e,t){let{type:n,order:r,payment:i}=t.payload;if("All"===n&&"All"===r&&"All"===i){e.filteredOrders=e.orders;return}let s=e.orders.filter(e=>(e.type===n||"All"===n)&&(e.orderStatus===r||"All"===r)&&(e.paymentStatus===i||"All"===i));e.filteredOrders=s}}}),s=i.actions;t.Z=i.reducer},3749:function(){},1535:function(){},7475:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(r){n=o}}();var l=[],u=!1,c=-1;function h(){u&&r&&(u=!1,r.length?l=r.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(r=l,l=[];++c<t;)r&&r[c].run();c=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,r),o=!1}finally{o&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},1163:function(e,t,n){e.exports=n(880)},4298:function(e,t,n){e.exports=n(3573)},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,s=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,h=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case h:case s:case a:case o:case f:return e;default:switch(e=e&&e.$$typeof){case u:case d:case g:case m:case l:return e;default:return t}}case i:return t}}}function I(e){return E(e)===h}t.AsyncMode=c,t.ConcurrentMode=h,t.ContextConsumer=u,t.ContextProvider=l,t.Element=r,t.ForwardRef=d,t.Fragment=s,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=a,t.StrictMode=o,t.Suspense=f,t.isAsyncMode=function(e){return I(e)||E(e)===c},t.isConcurrentMode=I,t.isContextConsumer=function(e){return E(e)===u},t.isContextProvider=function(e){return E(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return E(e)===d},t.isFragment=function(e){return E(e)===s},t.isLazy=function(e){return E(e)===g},t.isMemo=function(e){return E(e)===m},t.isPortal=function(e){return E(e)===i},t.isProfiler=function(e){return E(e)===a},t.isStrictMode=function(e){return E(e)===o},t.isSuspense=function(e){return E(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===h||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===w||e.$$typeof===b||e.$$typeof===y)},t.typeOf=E},9864:function(e,t,n){"use strict";e.exports=n(9921)},9473:function(e,t,n){"use strict";n.d(t,{zt:function(){return v},I0:function(){return E},v9:function(){return p}});var r=n(1688),i=n(2798),s=n(3935);let o=function(e){e()},a=()=>o;var l=n(7294);let u=(0,l.createContext)(null);function c(){let e=(0,l.useContext)(u);return e}let h=()=>{throw Error("uSES not initialized!")},d=h,f=(e,t)=>e===t,p=function(e=u){let t=e===u?c:()=>(0,l.useContext)(e);return function(e,n=f){let{store:r,subscription:i,getServerState:s}=t(),o=d(i.addNestedSub,r.getState,s||r.getState,e,n);return(0,l.useDebugValue)(o),o}}();n(8679),n(2973);let m={notify(){},get:()=>[]},g=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),y=g?l.useLayoutEffect:l.useEffect;var v=function({store:e,context:t,children:n,serverState:r}){let i=(0,l.useMemo)(()=>{let t=function(e,t){let n;let r=m;function i(){o.onStateChange&&o.onStateChange()}function s(){n||(n=t?t.addNestedSub(i):e.subscribe(i),r=function(){let e=a(),t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,i=n={callback:e,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){r&&null!==t&&(r=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}())}let o={addNestedSub:function(e){return s(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:i,isSubscribed:function(){return Boolean(n)},trySubscribe:s,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=m)},getListeners:()=>r};return o}(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0}},[e,r]),s=(0,l.useMemo)(()=>e.getState(),[e]);return y(()=>{let{subscription:t}=i;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[i,s]),l.createElement((t||u).Provider,{value:i},n)};function w(e=u){let t=e===u?c:()=>(0,l.useContext)(e);return function(){let{store:e}=t();return e}}let b=w(),E=function(e=u){let t=e===u?b:w(e);return function(){let e=t();return e.dispatch}}();d=i.useSyncExternalStoreWithSelector,r.useSyncExternalStore,o=s.unstable_batchedUpdates},8359:function(e,t){"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},2973:function(e,t,n){"use strict";n(8359)},3488:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=(0,i.default)(e);return{getItem:function(e){return new Promise(function(n,r){n(t.getItem(e))})},setItem:function(e,n){return new Promise(function(r,i){r(t.setItem(e,n))})},removeItem:function(e){return new Promise(function(n,r){n(t.removeItem(e))})}}};var r,i=(r=n(7290))&&r.__esModule?r:{default:r}},7290:function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(){}t.__esModule=!0,t.default=function(e){var t="".concat(e,"Storage");return!function(e){if(("undefined"==typeof self?"undefined":n(self))!=="object"||!(e in self))return!1;try{var t=self[e],r="redux-persist ".concat(e," test");t.setItem(r,"test"),t.getItem(r),t.removeItem(r)}catch(i){return!1}return!0}(t)?i:self[t]};var i={getItem:r,setItem:r,removeItem:r}},6734:function(e,t,n){"use strict";t.Z=void 0;var r,i=(0,((r=n(3488))&&r.__esModule?r:{default:r}).default)("local");t.Z=i},3894:function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}var r=n();r.withExtraArgument=n,t.Z=r},8356:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){!function(e,t,n){var i;i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===r(i)?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}n.d(t,{md:function(){return f},UY:function(){return h},qC:function(){return d},MT:function(){return c}});var a="function"==typeof Symbol&&Symbol.observable||"@@observable",l=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+l(),REPLACE:"@@redux/REPLACE"+l(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+l()}};function c(e,t,n){if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(o(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw Error(o(1));return n(c)(e,t)}if("function"!=typeof e)throw Error(o(2));var r,i=e,s=t,l=[],h=l,d=!1;function f(){h===l&&(h=l.slice())}function p(){if(d)throw Error(o(3));return s}function m(e){if("function"!=typeof e)throw Error(o(4));if(d)throw Error(o(5));var t=!0;return f(),h.push(e),function(){if(t){if(d)throw Error(o(6));t=!1,f();var n=h.indexOf(e);h.splice(n,1),l=null}}}function g(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error(o(7));if(void 0===e.type)throw Error(o(8));if(d)throw Error(o(9));try{d=!0,s=i(s,e)}finally{d=!1}for(var t=l=h,n=0;n<t.length;n++)(0,t[n])();return e}return g({type:u.INIT}),(r={dispatch:g,subscribe:m,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw Error(o(10));i=e,g({type:u.REPLACE})}})[a]=function(){var e;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw Error(o(11));function t(){e.next&&e.next(p())}return t(),{unsubscribe:m(t)}}})[a]=function(){return this},e},r}function h(e){for(var t,n=Object.keys(e),r={},i=0;i<n.length;i++){var s=n[i];"function"==typeof e[s]&&(r[s]=e[s])}var a=Object.keys(r);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:u.INIT}))throw Error(o(12));if(void 0===n(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw Error(o(13))})}(r)}catch(l){t=l}return function(e,n){if(void 0===e&&(e={}),t)throw t;for(var i=!1,s={},l=0;l<a.length;l++){var u=a[l],c=r[u],h=e[u],d=c(h,n);if(void 0===d)throw n&&n.type,Error(o(14));s[u]=d,i=i||d!==h}return(i=i||a.length!==Object.keys(e).length)?s:e}}function d(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw Error(o(15))},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},a=t.map(function(e){return e(i)});return r=d.apply(void 0,a)(n.dispatch),s(s({},n),{},{dispatch:r})}}}},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r=n(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useState,o=r.useEffect,a=r.useLayoutEffect,l=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(r){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return a(function(){i.value=n,i.getSnapshot=t,u(i)&&c({inst:i})},[e,n,t]),o(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},6742:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r=n(7294),i=n(1688),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,a=r.useRef,l=r.useEffect,u=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var h=a(null);if(null===h.current){var d={hasValue:!1,value:null};h.current=d}else d=h.current;h=u(function(){function e(e){if(!l){if(l=!0,o=e,e=r(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return a=t}return a=e}if(t=a,s(o,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(o=e,a=n)}var o,a,l=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,n,r,i]);var f=o(e,h[0],h[1]);return l(function(){d.hasValue=!0,d.value=f},[f]),c(f),f}},1688:function(e,t,n){"use strict";e.exports=n(3250)},2798:function(e,t,n){"use strict";e.exports=n(6742)},2238:function(e,t,n){"use strict";n.d(t,{Jn:function(){return w},KN:function(){return I},Mq:function(){return E},Xd:function(){return m},ZF:function(){return b},qX:function(){return g}});var r=n(8463),i=n(3333),s=n(4444),o=n(6531);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let l="@firebase/app",u="0.9.1",c=new i.Yd("@firebase/app"),h="[DEFAULT]",d={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,p=new Map;function m(e){let t=e.name;if(p.has(t))return c.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(p.set(t,e),f.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function g(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let y=new s.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw y.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let w="9.16.0";function b(e,t={}){let n=e;if("object"!=typeof t){let i=t;t={name:i}}let o=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),a=o.name;if("string"!=typeof a||!a)throw y.create("bad-app-name",{appName:String(a)});if(n||(n=(0,s.aH)()),!n)throw y.create("no-options");let l=f.get(a);if(l){if((0,s.vZ)(n,l.options)&&(0,s.vZ)(o,l.config))return l;throw y.create("duplicate-app",{appName:a})}let u=new r.H0(a);for(let c of p.values())u.addComponent(c);let d=new v(n,o,u);return f.set(a,d),d}function E(e=h){let t=f.get(e);if(!t&&e===h)return b();if(!t)throw y.create("no-app",{appName:e});return t}function I(e,t,n){var i;let s=null!==(i=d[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);let o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),c.warn(l.join(" "));return}m(new r.wA(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}let T="firebase-heartbeat-store",_=null;function S(){return _||(_=(0,o.X3)("firebase-heartbeat-database",1,{upgrade(e,t){0===t&&e.createObjectStore(T)}}).catch(e=>{throw y.create("idb-open",{originalErrorMessage:e.message})})),_}async function k(e){try{let t=await S();return t.transaction(T).objectStore(T).get(A(e))}catch(r){if(r instanceof s.ZR)c.warn(r.message);else{let n=y.create("idb-get",{originalErrorMessage:null==r?void 0:r.message});c.warn(n.message)}}}async function C(e,t){try{let n=await S(),r=n.transaction(T,"readwrite"),i=r.objectStore(T);return await i.put(t,A(e)),r.done}catch(a){if(a instanceof s.ZR)c.warn(a.message);else{let o=y.create("idb-set",{originalErrorMessage:null==a?void 0:a.message});c.warn(o.message)}}}function A(e){return`${e.name}!${e.options.appId}`}class O{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new D(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=N();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=N(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let s=n.find(e=>e.agent===i.agent);if(s){if(s.dates.push(i.date),R(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),R(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function N(){let e=new Date;return e.toISOString().substring(0,10)}class D{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await k(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return C(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return C(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function R(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}m(new r.wA("platform-logger",e=>new a(e),"PRIVATE")),m(new r.wA("heartbeat",e=>new O(e),"PRIVATE")),I(l,u,""),I(l,u,"esm2017"),I("fire-js","")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return a},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new r.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch(s){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch(a){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[i,s]of this.instancesDeferred.entries()){let o=this.normalizeInstanceIdentifier(i);n===o&&s.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Yd:function(){return c},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},2465:function(e,t,n){"use strict";n.d(t,{_O:function(){return ej},hJ:function(){return eF},Xb:function(){return eY},v0:function(){return t4},Aj:function(){return e3},w$:function(){return e0},LS:function(){return eJ},e5:function(){return eZ},rh:function(){return t_},ck:function(){return e2}});var r,i=n(4444),s=n(2238),o=n(3333);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var l=n(8463);function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let c=new i.LL("auth","Firebase",u()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o.in.ERROR&&h.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){let r=Object.assign(Object.assign({},u()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function g(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function y(e,t,...n){if(!e)throw g(t,...n)}function v(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let w=new Map;function b(e){e instanceof Function||v("Expected a class definition");let t=w.get(e);return t?(t instanceof e||v("Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class T{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||v("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===I()||"https:"===I()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _(e,t){e.emulator||v("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class S{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let k={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},C=new T(3e4,6e4);function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function O(e,t,n,r,s={}){return N(e,s,async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});let a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),S.fetch()(R(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function N(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},k),t);try{let s=new P(e),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();let a=await o.json();if("needConfirmation"in a)throw L(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{let l=o.ok?a.errorMessage:a.error.message,[u,c]=l.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===u)throw L(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===u)throw L(e,"email-already-in-use",a);if("USER_DISABLED"===u)throw L(e,"user-disabled",a);let h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw m(e,h,c);f(e,h)}}catch(d){if(d instanceof i.ZR)throw d;f(e,"network-request-failed")}}async function D(e,t,n,r,i={}){let s=await O(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function R(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?_(e.config,i):`${e.config.apiScheme}://${i}`}class P{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),C.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function L(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=p(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function x(e,t){return O(e,"POST","/v1/accounts:delete",t)}async function M(e,t){return O(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function j(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(n){}}async function F(e,t=!1){let n=(0,i.m9)(e),r=await n.getIdToken(t),s=V(r);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");let o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:j(U(s.auth_time)),issuedAtTime:j(U(s.iat)),expirationTime:j(U(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function U(e){return 1e3*Number(e)}function V(e){let[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{let s=(0,i.tV)(n);if(!s)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(s)}catch(o){return d("Caught error parsing JWT payload as JSON",null==o?void 0:o.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function q(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class B{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}{this.errorBackoff=3e4;let r=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=r-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ${constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=j(this.lastLoginAt),this.creationTime=j(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function z(e){var t;let n=e.auth,r=await e.getIdToken(),i=await q(e,M(n,{idToken:r}));y(null==i?void 0:i.users.length,n,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[],l=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new $(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&c};Object.assign(e,h)}async function K(e){let t=(0,i.m9)(e);await z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function H(e,t){let n=await N(e,{},async()=>{let n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=R(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",S.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class W{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=V(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await H(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new W;return n&&(y("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new W,this.toJSON())}_performRefresh(){return v("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function G(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Q{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await q(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return F(this,e)}reload(){return K(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Q(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await q(this,x(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,u;let c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:E,providerData:I,stsTokenManager:T}=t;y(w&&T,e,"internal-error");let _=W.fromJSON(this.name,T);y("string"==typeof w,e,"internal-error"),G(c,e.name),G(h,e.name),y("boolean"==typeof b,e,"internal-error"),y("boolean"==typeof E,e,"internal-error"),G(d,e.name),G(f,e.name),G(p,e.name),G(m,e.name),G(g,e.name),G(v,e.name);let S=new Q({uid:w,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:g,lastLoginAt:v});return I&&Array.isArray(I)&&(S.providerData=I.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){let r=new W;r.updateFromServerResponse(t);let i=new Q({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await z(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function J(e,t,n){return`firebase:${e}:${t}:${n}`}X.type="NONE";class Y{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=J(this.userKey,r.apiKey,i),this.fullPersistenceKey=J("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Q._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Y(b(X),e,n);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||b(X),s=J(n,e.config.apiKey,e.name),o=null;for(let a of t)try{let l=await a._get(s);if(l){let u=Q._fromJSON(e,l);a!==i&&(o=u),i=a;break}}catch(c){}let h=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&h.length&&(i=h[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(t){}}))),new Y(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Z(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(er(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(es(t))return"Blackberry";if(eo(t))return"Webos";if(et(t))return"Safari";if((t.includes("chrome/")||en(t))&&!t.includes("edge/"))return"Chrome";if(ei(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function ee(e=(0,i.z$)()){return/firefox\//i.test(e)}function et(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function en(e=(0,i.z$)()){return/crios\//i.test(e)}function er(e=(0,i.z$)()){return/iemobile/i.test(e)}function ei(e=(0,i.z$)()){return/android/i.test(e)}function es(e=(0,i.z$)()){return/blackberry/i.test(e)}function eo(e=(0,i.z$)()){return/webos/i.test(e)}function ea(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function el(e=(0,i.z$)()){return ea(e)||ei(e)||eo(e)||es(e)||/windows phone/i.test(e)||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eu(e,t=[]){let n;switch(e){case"Browser":n=Z((0,i.z$)());break;case"Worker":n=`${Z((0,i.z$)())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ec{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let i=e(t);n(i)}catch(s){r(s)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(s){for(let r of(t.reverse(),t))try{r()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==s?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eh{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ef(this),this.idTokenSubscription=new ef(this),this.beforeStateQueue=new ec(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=b(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Y.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&(null==a?void 0:a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await z(e)}catch(t){if((null==t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(b(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&b(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[b(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(y(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ed(e){return(0,i.m9)(e)}class ef{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ep(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function em(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}async function ey(e,t){return O(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ev(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}async function ew(e,t){return O(e,"POST","/v1/accounts:sendOobCode",A(e,t))}async function eb(e,t){return ew(e,t)}async function eE(e,t){return ew(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eI(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function eT(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e_ extends eg{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new e_(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new e_(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ev(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eI(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ey(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eT(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eS(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}class ek extends eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new ek(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new ek(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return eS(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,eS(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eS(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eC(e,t){return O(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function eA(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function eO(e,t){let n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw L(e,"account-exists-with-different-credential",n);return n}let eN={USER_NOT_FOUND:"user-not-found"};async function eD(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,n),eN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eR extends eg{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eR({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eR({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eA(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eO(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eD(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new eR({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class eP{constructor(e){var t,n,r,s,o,a;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(n=l.oobCode)&&void 0!==n?n:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=l.mode)&&void 0!==r?r:null);y(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,n=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,r=(0,i.zd)((0,i.pd)(e)).deep_link_id,s=r?(0,i.zd)((0,i.pd)(r)).link:null;return s||r||n||t||e}(e);try{return new eP(t)}catch(n){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eL{constructor(){this.providerId=eL.PROVIDER_ID}static credential(e,t){return e_._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=eP.parseLink(t);return y(n,"argument-error"),e_._fromEmailAndCode(e,n.code,n.tenantId)}}eL.PROVIDER_ID="password",eL.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eL.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ex{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eM extends ex{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ej extends eM{constructor(){super("facebook.com")}static credential(e){return ek._fromParams({providerId:ej.PROVIDER_ID,signInMethod:ej.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ej.credentialFromTaggedObject(e)}static credentialFromError(e){return ej.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ej.credential(e.oauthAccessToken)}catch(t){return null}}}ej.FACEBOOK_SIGN_IN_METHOD="facebook.com",ej.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eF extends eM{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ek._fromParams({providerId:eF.PROVIDER_ID,signInMethod:eF.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eF.credentialFromTaggedObject(e)}static credentialFromError(e){return eF.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return eF.credential(t,n)}catch(r){return null}}}eF.GOOGLE_SIGN_IN_METHOD="google.com",eF.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eU extends eM{constructor(){super("github.com")}static credential(e){return ek._fromParams({providerId:eU.PROVIDER_ID,signInMethod:eU.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eU.credentialFromTaggedObject(e)}static credentialFromError(e){return eU.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eU.credential(e.oauthAccessToken)}catch(t){return null}}}eU.GITHUB_SIGN_IN_METHOD="github.com",eU.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eV extends eM{constructor(){super("twitter.com")}static credential(e,t){return ek._fromParams({providerId:eV.PROVIDER_ID,signInMethod:eV.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eV.credentialFromTaggedObject(e)}static credentialFromError(e){return eV.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return eV.credential(t,n)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eq(e,t){return D(e,"POST","/v1/accounts:signUp",A(e,t))}eV.TWITTER_SIGN_IN_METHOD="twitter.com",eV.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eB{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await Q._fromIdTokenResponse(e,n,r),s=e$(n),o=new eB({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let r=e$(n);return new eB({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function e$(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ez extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ez.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ez(e,t,n,r)}}function eK(e,t,n,r){let i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw ez._fromErrorAndOperation(e,n,t,r);throw n})}async function eH(e,t,n=!1){let r=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return eB._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eW(e,t,n=!1){let{auth:r}=e,i="reauthenticate";try{let s=await q(e,eK(r,i,t,e),n);y(s.idToken,r,"internal-error");let o=V(s.idToken);y(o,r,"internal-error");let{sub:a}=o;return y(e.uid===a,r,"user-mismatch"),eB._forOperation(e,i,s)}catch(l){throw(null==l?void 0:l.code)==="auth/user-not-found"&&f(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eG(e,t,n=!1){let r="signIn",i=await eK(e,r,t),s=await eB._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function eQ(e,t){return eG(ed(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eX(e,t,n){var r;y((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),y(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(y(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(y(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eJ(e,t,n){let r=(0,i.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&eX(r,s,n),await eE(r,s)}async function eY(e,t,n){let r=ed(e),i=await eq(r,{returnSecureToken:!0,email:t,password:n}),s=await eB._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function eZ(e,t,n){return eQ((0,i.m9)(e),eL.credential(t,n))}async function e0(e,t){let n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&eX(n.auth,s,t);let{email:o}=await eb(n.auth,s);o!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function e1(e,t){return O(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function e2(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;let r=(0,i.m9)(e),s=await r.getIdToken(),o=await q(r,e1(r.auth,{idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0}));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;let a=r.providerData.find(({providerId:e})=>"password"===e);a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function e3(e,t,n,r){return(0,i.m9)(e).onAuthStateChanged(t,n,r)}new WeakMap;let e4="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e6{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(e4,"1"),this.storage.removeItem(e4),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class e5 extends e6{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let e=(0,i.z$)();return et(e)||ea(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=el(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let s=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);(0,i.w1)()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e5.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e9 extends e6{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e9.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e8{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new e8(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:n});let s=Array.from(i).map(async t=>t(e.origin,r)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(n){return{fulfilled:!1,reason:n}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e7(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}e8.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class te{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=e7("",20);s.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},n);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(u),clearTimeout(r),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tt(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tn(){return void 0!==tt().WorkerGlobalScope&&"function"==typeof tt().importScripts}async function tr(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ti="firebaseLocalStorageDb",ts="firebaseLocalStorage",to="fbase_key";class ta{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tl(e,t){return e.transaction([ts],t?"readwrite":"readonly").objectStore(ts)}function tu(){let e=indexedDB.open(ti,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(ts,{keyPath:to})}catch(r){n(r)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(ts)?t(n):(n.close(),await function(){let e=indexedDB.deleteDatabase(ti);return new ta(e).toPromise()}(),t(await tu()))})})}async function tc(e,t,n){let r=tl(e,!0).put({[to]:t,value:n});return new ta(r).toPromise()}async function th(e,t){let n=tl(e,!1).get(t),r=await new ta(n).toPromise();return void 0===r?null:r.value}function td(e,t){let n=tl(e,!0).delete(t);return new ta(n).toPromise()}class tf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await tu()),this.db}async _withRetries(e){let t=0;for(;;)try{let n=await this._openDb();return await e(n)}catch(r){if(t++>3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=e8._getInstance(tn()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tr(),!this.activeServiceWorker)return;this.sender=new te(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await tu();return await tc(e,e4,"1"),await td(e,e4),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>tc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>th(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>td(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=tl(e,!1).getAll();return new ta(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}function tp(e){return`__${e}${Math.floor(1e6*Math.random())}`}async function tm(e,t,n){var r,i,s;let o=await n.verify();try{let a;if(y("string"==typeof o,e,"argument-error"),y("recaptcha"===n.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let l=a.session;if("phoneNumber"in a){y("enroll"===l.type,e,"internal-error");let u=await (i={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},O(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,i)));return u.phoneSessionInfo.sessionInfo}{y("signin"===l.type,e,"internal-error");let c=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid;y(c,e,"missing-multi-factor-info");let h=await (s={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:o}},O(e,"POST","/v2/accounts/mfaSignIn:start",A(e,s)));return h.phoneResponseInfo.sessionInfo}}{let{sessionInfo:d}=await eC(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return d}}finally{n._reset()}}tf.type="LOCAL",tp("rcb"),new T(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tg{constructor(e){this.providerId=tg.PROVIDER_ID,this.auth=ed(e)}verifyPhoneNumber(e,t){return tm(this.auth,e,(0,i.m9)(t))}static credential(e,t){return eR._fromVerification(e,t)}static credentialFromResult(e){return tg.credentialFromTaggedObject(e)}static credentialFromError(e){return tg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?eR._fromTokenResponse(t,n):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ty(e,t){return t?b(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}tg.PROVIDER_ID="phone",tg.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tv extends eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eS(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eS(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eS(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tw(e){return eG(e.auth,new tv(e),e.bypassAuthState)}function tb(e){let{auth:t,user:n}=e;return y(n,t,"internal-error"),eW(n,new tv(e),e.bypassAuthState)}async function tE(e){let{auth:t,user:n}=e;return y(n,t,"internal-error"),eH(n,new tv(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tI{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tw;case"linkViaPopup":case"linkViaRedirect":return tE;case"reauthViaPopup":case"reauthViaRedirect":return tb;default:f(this.auth,"internal-error")}}resolve(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tT=new T(2e3,1e4);async function t_(e,t,n){let r=ed(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&f(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,ex);let i=ty(r,n),s=new tS(r,"signInViaPopup",t,i);return s.executeNotNull()}class tS extends tI{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,tS.currentPopupAction&&tS.currentPopupAction.cancel(),tS.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||v("Popup operations only handle one event");let e=e7();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tS.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tT.get())};e()}}tS.currentPopupAction=null;let tk=new Map;class tC extends tI{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=tk.get(this.auth._key());if(!e){try{let t=await tA(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}tk.set(this.auth._key(),e)}return this.bypassAuthState||tk.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tA(e,t){let n=J("pendingRedirect",t.config.apiKey,t.name),r=b(e._redirectPersistence);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}function tO(e,t){tk.set(e._key(),t)}async function tN(e,t,n=!1){let r=ed(e),i=ty(r,t),s=new tC(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class tD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tP(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tP(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tR(e))}saveEventToCache(e){this.cachedEventUids.add(tR(e)),this.lastProcessedEventTime=Date.now()}}function tR(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tP({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tL(e,t={}){return O(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tM=/^https?/;async function tj(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tL(e);for(let n of t)try{if(function(e){let t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tM.test(n))return!1;if(tx.test(e))return r===e;let s=e.replace(/\./g,"\\."),o=RegExp("^(.+\\."+s+"|"+s+")$","i");return o.test(r)}(n))return}catch(r){}f(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tF=new T(3e4,6e4);function tU(){let e=tt().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}let tV=null,tq=new T(5e3,15e3),tB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tz(e){let t=await (tV=tV||new Promise((t,n)=>{var r,i,s,o;function a(){tU(),gapi.load("gapi.iframes",{callback(){t(gapi.iframes.getContext())},ontimeout(){tU(),n(p(e,"network-request-failed"))},timeout:tF.get()})}if(null===(i=null===(r=tt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=tt().gapi)||void 0===s?void 0:s.load)a();else{let l=tp("iframefcb");return tt()[l]=()=>{gapi.load?a():n(p(e,"network-request-failed"))},(o=`https://apis.google.com/js/api.js?onload=${l}`,new Promise((e,t)=>{var n,r;let i=document.createElement("script");i.setAttribute("src",o),i.onload=e,i.onerror=e=>{let n=p("internal-error");n.customData=e,t(n)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(i)})).catch(e=>n(e))}}).catch(e=>{throw tV=null,e})),n=tt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;y(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?_(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:s.Jn},o=t$.get(e.config.apiHost);o&&(r.eid=o);let a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tB,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=tt().setTimeout(()=>{r(i)},tq.get());function o(){tt().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tK={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tH{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function tW(e,t,n,r,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.Jn,eventId:o};if(t instanceof ex)for(let[u,c]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[u]=c;if(t instanceof eM){let h=t.getScopes().filter(e=>""!==e);h.length>0&&(l.scopes=h.join(","))}e.tenantId&&(l.tid=e.tenantId);let d=l;for(let f of Object.keys(d))void 0===d[f]&&delete d[f];return`${function({config:e}){return e.emulator?_(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(d).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tG="webStorageSupport",tQ=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e9,this._completeRedirectFn=tN,this._overrideRedirectResult=tO}async _openPopup(e,t,n,r){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||v("_initialize() not called before _openPopup()");let o=tW(e,t,n,E(),r);return function(e,t,n,r=500,s=600){let o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),l="",u=Object.assign(Object.assign({},tK),{width:r.toString(),height:s.toString(),top:o,left:a}),c=(0,i.z$)().toLowerCase();n&&(l=en(c)?"_blank":n),ee(c)&&(t=t||"http://localhost",u.scrollbars="yes");let h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,i.z$)()){var t;return ea(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",l),new tH(null);let d=window.open(t||"",l,h);y(d,e,"popup-blocked");try{d.focus()}catch(f){}return new tH(d)}(e,o,e7())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=tW(e,t,n,E(),r),tt().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:n,promise:r}=this.eventManagers[t];return n?Promise.resolve(n):(r||v("If manager is not set, promise should be"),r)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await tz(e),n=new tD(e);return t.register("authEvent",t=>{y(null==t?void 0:t.authEvent,e,"invalid-auth-event");let r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(tG,{type:tG},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[tG];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tj(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return el()||et()||ea()}};class tX{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class tJ extends tX{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tJ(e)}_finalizeEnroll(e,t,n){return O(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}var tY="@firebase/auth",tZ="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let t1=(0,i.Pz)("authIdTokenMaxAge")||300,t2=null,t3=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>t1)return;let i=null==n?void 0:n.token;t2!==i&&(t2=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function t4(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){let n=(0,s.qX)(e,"auth");if(n.isInitialized()){let r=n.getImmediate(),o=n.getOptions();if((0,i.vZ)(o,null!=t?t:{}))return r;f(r,"already-initialized")}let a=n.initialize({options:t});return a}(e,{popupRedirectResolver:tQ,persistence:[tf,e5,e9]}),r=(0,i.Pz)("authTokenSyncURL");if(r){var o,a;let l=t3(r);o=()=>l(n.currentUser),(0,i.m9)(n).beforeAuthStateChanged(l,o),a=e=>l(e),(0,i.m9)(n).onIdTokenChanged(a,void 0,void 0)}let u=(0,i.q4)("auth");return u&&function(e,t,n){let r=ed(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");let i=!!(null==n?void 0:n.disableWarnings),s=ep(t),{host:o,port:a}=function(e){let t=ep(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:em(r.substr(s.length+1))}}{let[o,a]=r.split(":");return{host:o,port:em(a)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${u}`),n}r="Browser",(0,s.Xd)(new l.wA("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=n.options;return((e,n)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),y(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});let i={apiKey:s,authDomain:o,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eu(r)},a=new eh(e,n,i);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(b);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider("auth-internal");r.initialize()})),(0,s.Xd)(new l.wA("auth-internal",e=>{let t=ed(e.getProvider("auth").getImmediate());return new t0(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(tY,tZ,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(r)),(0,s.KN)(tY,tZ,"esm2017")},3247:function(e,t,n){"use strict";n.d(t,{ET:function(){return a0},hJ:function(){return al},JU:function(){return au},PL:function(){return aY},ad:function(){return aw},r7:function(){return aZ}});var r,i,s,o,a,l,u,c,h=n(2238),d=n(8463),f=n(3333),p=n(4444),m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},g={},y=y||{},v=m||self;function w(){}function b(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function E(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function I(e,t,n){return e.call.apply(e.bind,arguments)}function T(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return(_=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?I:T).apply(null,arguments)}function S(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function k(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function C(){this.s=this.s,this.o=this.o}C.prototype.s=!1,C.prototype.na=function(){this.s||(this.s=!0,this.M())},C.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let A=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function O(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function N(e,t){for(let n=1;n<arguments.length;n++){let r=arguments[n];if(b(r)){let i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function D(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",w,t),v.removeEventListener("test",w,t)}catch(n){}return e}();function P(e){return/^[\s\xa0]*$/.test(e)}var L=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return e<t?-1:e>t?1:0}function M(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function j(e){return -1!=M().indexOf(e)}function F(e){return F[" "](e),e}F[" "]=w;var U=j("Opera"),V=j("Trident")||j("MSIE"),q=j("Edge"),B=q||V,$=j("Gecko")&&!(-1!=M().toLowerCase().indexOf("webkit")&&!j("Edge"))&&!(j("Trident")||j("MSIE"))&&!j("Edge"),z=-1!=M().toLowerCase().indexOf("webkit")&&!j("Edge");function K(){var e=v.document;return e?e.documentMode:void 0}e:{var H,W="",G=(H=M(),$?/rv:([^\);]+)(\)|;)/.exec(H):q?/Edge\/([\d\.]+)/.exec(H):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(H):z?/WebKit\/(\S+)/.exec(H):U?/(?:Version)[ \/]?(\S+)/.exec(H):void 0);if(G&&(W=G?G[1]:""),V){var Q=K();if(null!=Q&&Q>parseFloat(W)){i=String(Q);break e}}i=W}var X={},J=v.document&&V&&(K()||parseInt(i,10))||void 0;function Y(e,t){if(D.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{F(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Z[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Y.X.h.call(this)}}k(Y,D);var Z={2:"touch",3:"pen",4:"mouse"};Y.prototype.h=function(){Y.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ee="closure_listenable_"+(1e6*Math.random()|0),et=0;function en(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++et,this.ba=this.ea=!1}function er(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ei(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function es(e){let t={};for(let n in e)t[n]=e[n];return t}let eo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ea(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(let s=0;s<eo.length;s++)n=eo[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function el(e){this.src=e,this.g={},this.h=0}function eu(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=A(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(er(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ec(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}el.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ec(e,t,r,i);return -1<o?(t=e[o],n||(t.ea=!1)):((t=new en(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var eh="closure_lm_"+(1e6*Math.random()|0),ed={};function ef(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=E(i)?!!i.capture:!!i,a=ey(e);if(a||(e[eh]=a=new el(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function e(t){return eg.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(em(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ep(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[ee])eu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(em(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ey(t))?(eu(n,e),0==n.h&&(n.src=null,t[eh]=null)):er(e)}}}function em(e){return e in ed?ed[e]:ed[e]="on"+e}function eg(e,t){if(e.ba)e=!0;else{t=new Y(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&ep(e),e=n.call(r,t)}return e}function ey(e){return(e=e[eh])instanceof el?e:null}var ev="__closure_events_fn_"+(1e9*Math.random()>>>0);function ew(e){return"function"==typeof e?e:(e[ev]||(e[ev]=function(t){return e.handleEvent(t)}),e[ev])}function eb(){C.call(this),this.i=new el(this),this.P=this,this.I=null}function eE(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new D(t,e);else if(t instanceof D)t.target=t.target||e;else{var i=t;ea(t=new D(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=eI(o,r,!0,t)&&i}if(i=eI(o=t.g=e,r,!0,t)&&i,i=eI(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=eI(o=t.g=n[s],r,!1,t)&&i}function eI(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&eu(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}k(eb,C),eb.prototype[ee]=!0,eb.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else(i=E(i)?!!i.capture:!!i,r=ew(r),t&&t[ee])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=ec(o=t.g[n],r,i,s))&&(er(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=ey(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ec(n,r,i,s)),(r=-1<t?n[t]:null)&&ep(r))}(this,e,t,n,r)},eb.prototype.M=function(){if(eb.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)er(n[r]);delete t.g[e],t.h--}}this.I=null},eb.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},eb.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var eT=v.JSON.stringify,e_=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eS,e=>e.reset());class eS{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ek(e,t){var n;o||(n=v.Promise.resolve(void 0),o=function(){n.then(eO)}),eC||(o(),eC=!0),eA.add(e,t)}var eC=!1,eA=new class{constructor(){this.h=this.g=null}add(e,t){let n=e_.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function eO(){let e;for(;e=null,(n=eA).g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),r=e;){try{r.h.call(r.g)}catch(t){!function(e){v.setTimeout(()=>{throw e},0)}(t)}var n,r,i=e_;i.j(r),100>i.h&&(i.h++,r.next=i.g,i.g=r)}eC=!1}function eN(e,t){eb.call(this),this.h=e||1,this.g=t||v,this.j=_(this.lb,this),this.l=Date.now()}function eD(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function eR(e,t,n){if("function"==typeof e)n&&(e=_(e,n));else if(e&&"function"==typeof e.handleEvent)e=_(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}k(eN,eb),(c=eN.prototype).ca=!1,c.R=null,c.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),eE(this,"tick"),this.ca&&(eD(this),this.start()))}},c.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},c.M=function(){eN.X.M.call(this),eD(this),delete this.g};class eP extends C{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eR(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eL(e){C.call(this),this.h=e,this.g={}}k(eL,C);var ex=[];function eM(e,t,n,r){Array.isArray(n)||(n&&(ex[0]=n.toString()),n=ex);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=ew(r),t&&t[ee]?t.O(n,r,E(i)?!!i.capture:!!i,s):ef(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=ew(r),t&&t[ee]?t.N(n,r,E(i)?!!i.capture:!!i,s):ef(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ej(e){ei(e.g,function(e,t){this.g.hasOwnProperty(t)&&ep(e)},e),e.g={}}function eF(){this.g=!0}function eU(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return eT(n)}catch(a){return t}}(e,n)+(r?" "+r:"")})}eL.prototype.M=function(){eL.X.M.call(this),ej(this)},eL.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eF.prototype.Aa=function(){this.g=!1},eF.prototype.info=function(){};var eV={},eq=null;function eB(){return eq=eq||new eb}function e$(e){D.call(this,eV.Pa,e)}function ez(e){let t=eB();eE(t,new e$(t))}function eK(e,t){D.call(this,eV.STAT_EVENT,e),this.stat=t}function eH(e){let t=eB();eE(t,new eK(t,e))}function eW(e,t){D.call(this,eV.Qa,e),this.size=t}function eG(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}eV.Pa="serverreachability",k(e$,D),eV.STAT_EVENT="statevent",k(eK,D),eV.Qa="timingevent",k(eW,D);var eQ={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},eX={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function eJ(){}function eY(e){return e.h||(e.h=e.i())}function eZ(){}eJ.prototype.h=null;var e0={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function e1(){D.call(this,"d")}function e2(){D.call(this,"c")}function e3(){}function e4(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new eL(this),this.O=e5,e=B?125:void 0,this.T=new eN(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new e6}function e6(){this.i=null,this.g="",this.h=!1}k(e1,D),k(e2,D),k(e3,eJ),e3.prototype.g=function(){return new XMLHttpRequest},e3.prototype.i=function(){return{}},a=new e3;var e5=45e3,e9={},e8={};function e7(e,t,n){e.K=1,e.v=ty(td(t)),e.s=n,e.P=!0,te(e,null)}function te(e,t){e.F=Date.now(),tr(e),e.A=td(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),tN(n.i,"t",r),e.C=0,n=e.l.H,e.h=new e6,e.g=nw(e.l,n?t:null,!e.s),0<e.N&&(e.L=new eP(_(e.La,e,e.g),e.N)),eM(e.S,e.g,"readystatechange",e.ib),t=e.H?es(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ez(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.j,e.u,e.A,e.m,e.U,e.s)}function tt(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function tn(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if((i=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?e8:isNaN(n=Number(t.substring(n,r)))?e9:(r+=1)+n>t.length?e8:(t=t.substr(r,n),e.C=r+n,t)}(e,n))==e8){4==t&&(e.o=4,eH(14),r=!1),eU(e.j,e.m,null,"[Incomplete Response]");break}else if(i==e9){e.o=4,eH(15),eU(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else eU(e.j,e.m,i,null),tl(e,i);tt(e)&&i!=e8&&i!=e9&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,eH(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nh(t),t.K=!0,eH(11))):(eU(e.j,e.m,n,"[Invalid Chunked Response]"),ta(e),to(e))}function tr(e){e.V=Date.now()+e.O,ti(e,e.O)}function ti(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eG(_(e.gb,e),t)}function ts(e){e.B&&(v.clearTimeout(e.B),e.B=null)}function to(e){0==e.l.G||e.I||np(e.l,e)}function ta(e){ts(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,eD(e.T),ej(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function tl(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||tj(n.h,e))){if(!e.J&&tj(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(i){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)nf(n),nr(n);else break e}nc(n),eH(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=eG(_(n.cb,n),6e3));if(1>=tM(n.h)&&n.ja){try{n.ja()}catch(o){}n.ja=void 0}}else ng(n,11)}else if((e.J||n.g==e)&&nf(n),!P(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let a=s[t];if(n.T=a[0],a=a[1],2==n.G){if("c"==a[0]){n.I=a[1],n.ka=a[2];let l=a[3];null!=l&&(n.ma=l,n.j.info("VER="+n.ma));let u=a[4];null!=u&&(n.Ca=u,n.j.info("SVER="+n.Ca));let c=a[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let h=e.g;if(h){let d=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var f=r.h;f.g||-1==d.indexOf("spdy")&&-1==d.indexOf("quic")&&-1==d.indexOf("h2")||(f.j=f.l,f.g=new Set,f.h&&(tF(f,f.h),f.h=null))}if(r.D){let p=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.za=p,tg(r.F,r.D,p))}}if(n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),(r=n).sa=nv(r,r.H?r.ka:null,r.V),e.J){tU(r.h,e);var m=r.J;m&&e.setTimeout(m),e.B&&(ts(e),tr(e)),r.g=e}else nu(r);0<n.i.length&&ns(n)}else"stop"!=a[0]&&"close"!=a[0]||ng(n,7)}else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?ng(n,7):nn(n):"noop"!=a[0]&&n.l&&n.l.wa(a),n.A=0)}}ez(4)}catch(g){}}function tu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(b(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(b(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(b(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(c=e4.prototype).setTimeout=function(e){this.O=e},c.ib=function(e){e=e.target;let t=this.L;t&&3==t5(e)?t.l():this.La(e)},c.La=function(e){try{if(e==this.g)e:{let t=t5(this.g);var n=this.g.Ea();let r=this.g.aa();if(!(3>t)&&(3!=t||B||this.g&&(this.h.h||this.g.fa()||t9(this.g)))){this.I||4!=t||7==n||(8==n||0>=r?ez(3):ez(2)),ts(this);var i=this.g.aa();this.Y=i;t:if(tt(this)){var s=t9(this.g);e="";var o=s.length,a=4==t5(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ta(this),to(this);var l="";break t}this.h.i=new v.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,e+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=e,this.C=0,l=this.h.g}else l=this.g.fa();if(this.i=200==i,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.U,t,i),this.i){if(this.Z&&!this.J){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(u)){var h=u;break t}}h=null}if(i=h)eU(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tl(this,i);else{this.i=!1,this.o=3,eH(12),ta(this),to(this);break e}}this.P?(tn(this,t,l),B&&this.i&&3==t&&(eM(this.S,this.T,"tick",this.hb),this.T.start())):(eU(this.j,this.m,l,null),tl(this,l)),4==t&&ta(this),this.i&&!this.I&&(4==t?np(this.l,this):(this.i=!1,tr(this)))}else 400==i&&0<l.indexOf("Unknown SID")?(this.o=3,eH(12)):(this.o=0,eH(13)),ta(this),to(this)}}}catch(d){}finally{}},c.hb=function(){if(this.g){var e=t5(this.g),t=this.g.fa();this.C<t.length&&(ts(this),tn(this,e,t),this.i&&4!=e&&tr(this))}},c.cancel=function(){this.I=!0,ta(this)},c.gb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(ez(),eH(17)),ta(this),this.o=2,to(this)):ti(this,this.V-e)};var tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function th(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof th){this.h=void 0!==t?t:e.h,tf(this,e.j),this.s=e.s,this.g=e.g,tp(this,e.m),this.l=e.l,t=e.i;var n=new tk;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tm(this,n),this.o=e.o}else e&&(n=String(e).match(tc))?(this.h=!!t,tf(this,n[1]||"",!0),this.s=tv(n[2]||""),this.g=tv(n[3]||"",!0),tp(this,n[4]),this.l=tv(n[5]||"",!0),tm(this,n[6]||"",!0),this.o=tv(n[7]||"")):(this.h=!!t,this.i=new tk(null,this.h))}function td(e){return new th(e)}function tf(e,t,n){e.j=n?tv(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tp(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tm(e,t,n){var r,i;t instanceof tk?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tC(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tA(this,t),tN(this,n,e))},r)),r.j=i):(n||(t=tw(t,t_)),e.i=new tk(t,e.h))}function tg(e,t,n){e.i.set(t,n)}function ty(e){return tg(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tv(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tw(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tb),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tb(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}th.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tw(t,tE,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tw(t,tE,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tw(n,"/"==n.charAt(0)?tT:tI,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tw(n,tS)),e.join("")};var tE=/[#\/\?@]/g,tI=/[#\?:]/g,tT=/[#\?]/g,t_=/[#\?@]/g,tS=/#/g;function tk(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tC(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tA(e,t){tC(e),t=tD(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tO(e,t){return tC(e),t=tD(e,t),e.g.has(t)}function tN(e,t,n){tA(e,t),0<n.length&&(e.i=null,e.g.set(tD(e,t),O(n)),e.h+=n.length)}function tD(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(c=tk.prototype).add=function(e,t){tC(this),this.i=null,e=tD(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},c.forEach=function(e,t){tC(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},c.oa=function(){tC(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n},c.W=function(e){tC(this);let t=[];if("string"==typeof e)tO(this,e)&&(t=t.concat(this.g.get(tD(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},c.set=function(e,t){return tC(this),this.i=null,tO(this,e=tD(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},c.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},c.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let i=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};var tR=class{constructor(e,t){this.h=e,this.g=t}};function tP(e){this.l=e||tL,e=v.PerformanceNavigationTiming?0<(e=v.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(v.g&&v.g.Ga&&v.g.Ga()&&v.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tL=10;function tx(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tM(e){return e.h?1:e.g?e.g.size:0}function tj(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tF(e,t){e.g?e.g.add(t):e.h=t}function tU(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tV(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return O(e.i)}function tq(){}function tB(){this.g=new tq}function t$(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function tz(e){this.l=e.ac||null,this.j=e.jb||!1}function tK(e,t){eb.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=tH,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tP.prototype.cancel=function(){if(this.i=tV(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},tq.prototype.stringify=function(e){return v.JSON.stringify(e,void 0)},tq.prototype.parse=function(e){return v.JSON.parse(e,void 0)},k(tz,eJ),tz.prototype.g=function(){return new tK(this.l,this.j)},tz.prototype.i=(r={},function(){return r}),k(tK,eb);var tH=0;function tW(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function tG(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tQ(e)}function tQ(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(c=tK.prototype).open=function(e,t){if(this.readyState!=tH)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tQ(this)},c.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||v).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},c.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tG(this)),this.readyState=tH},c.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tQ(this)),this.g&&(this.readyState=3,tQ(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==v.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tW(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))}},c.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tG(this):tQ(this),3==this.readyState&&tW(this)}},c.Va=function(e){this.g&&(this.response=this.responseText=e,tG(this))},c.Ua=function(e){this.g&&(this.response=e,tG(this))},c.ga=function(){this.g&&tG(this)},c.setRequestHeader=function(e,t){this.v.append(e,t)},c.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},c.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tK.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tX=v.JSON.parse;function tJ(e){eb.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tY,this.K=this.L=!1}k(tJ,eb);var tY="",tZ=/^https?$/i,t0=["POST","PUT"];function t1(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t2(e),t4(e)}function t2(e){e.D||(e.D=!0,eE(e,"complete"),eE(e,"error"))}function t3(e){if(e.h&&void 0!==y&&(!e.C[1]||4!=t5(e)||2!=e.aa())){if(e.v&&4==t5(e))eR(e.Ha,0,e);else if(eE(e,"readystatechange"),4==t5(e)){e.h=!1;try{let t=e.aa();e:switch(t){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n,r,i=!0;break e;default:i=!1}if(!(n=i)){if(r=0===t){var s=String(e.H).match(tc)[1]||null;if(!s&&v.self&&v.self.location){var o=v.self.location.protocol;s=o.substr(0,o.length-1)}r=!tZ.test(s?s.toLowerCase():"")}n=r}if(n)eE(e,"complete"),eE(e,"success");else{e.m=6;try{var a=2<t5(e)?e.g.statusText:""}catch(l){a=""}e.j=a+" ["+e.aa()+"]",t2(e)}}finally{t4(e)}}}}function t4(e,t){if(e.g){t6(e);let n=e.g,r=e.C[0]?w:null;e.g=null,e.C=null,t||eE(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function t6(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}function t5(e){return e.g?e.g.readyState:0}function t9(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case tY:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function t8(e){let t="";return ei(e,function(e,n){t=n+":"+e+"\r\n"}),t}function t7(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=t8(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tg(e,t,n))}function ne(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function nt(e){this.Ca=0,this.i=[],this.j=new eF,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ne("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ne("baseRetryDelayMs",5e3,e),this.bb=ne("retryDelaySeedMs",1e4,e),this.$a=ne("forwardChannelMaxRetries",2,e),this.ta=ne("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new tP(e&&e.concurrentRequestLimit),this.Fa=new tB,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function nn(e){if(ni(e),3==e.G){var t=e.U++,n=td(e.F);tg(n,"SID",e.I),tg(n,"RID",t),tg(n,"TYPE","terminate"),na(e,n),(t=new e4(e,e.j,t,void 0)).K=2,t.v=ty(td(n)),n=!1,v.navigator&&v.navigator.sendBeacon&&(n=v.navigator.sendBeacon(t.v.toString(),"")),!n&&v.Image&&((new Image).src=t.v,n=!0),n||(t.g=nw(t.l,null),t.g.da(t.v)),t.F=Date.now(),tr(t)}ny(e)}function nr(e){e.g&&(nh(e),e.g.cancel(),e.g=null)}function ni(e){nr(e),e.u&&(v.clearTimeout(e.u),e.u=null),nf(e),e.h.cancel(),e.m&&("number"==typeof e.m&&v.clearTimeout(e.m),e.m=null)}function ns(e){tx(e.h)||e.m||(e.m=!0,ek(e.Ja,e),e.C=0)}function no(e,t){var n;n=t?t.m:e.U++;let r=td(e.F);tg(r,"SID",e.I),tg(r,"RID",n),tg(r,"AID",e.T),na(e,r),e.o&&e.s&&t7(r,e.o,e.s),n=new e4(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=nl(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),tF(e.h,n),e7(n,r,t)}function na(e,t){e.ia&&ei(e.ia,function(e,n){tg(t,n,e)}),e.l&&tu({},function(e,n){tg(t,n,e)})}function nl(e,t,n){n=Math.min(e.i.length,n);var r=e.l?_(e.l.Ra,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){let o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h,c=i[l].g;if(0>(u-=s))s=Math.max(0,i[l].h-100),a=!1;else try{!function(e,t,n){let r=n||"";try{tu(e,function(e,n){let i=e;E(e)&&(i=eT(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}(c,o,"req"+u+"_")}catch(h){r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function nu(e){e.g||e.u||(e.Z=1,ek(e.Ia,e),e.A=0)}function nc(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=eG(_(e.Ia,e),nm(e,e.A)),e.A++,!0)}function nh(e){null!=e.B&&(v.clearTimeout(e.B),e.B=null)}function nd(e){e.g=new e4(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=td(e.sa);tg(t,"RID","rpc"),tg(t,"SID",e.I),tg(t,"CI",e.L?"0":"1"),tg(t,"AID",e.T),tg(t,"TYPE","xmlhttp"),na(e,t),e.o&&e.s&&t7(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ty(td(t)),n.s=null,n.P=!0,te(n,e)}function nf(e){null!=e.v&&(v.clearTimeout(e.v),e.v=null)}function np(e,t){var n=null;if(e.g==t){nf(e),nh(e),e.g=null;var r=2}else{if(!tj(e.h,t))return;n=t.D,tU(e.h,t),r=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i,s,o=e.C;eE(r=eB(),new eW(r,n)),ns(e)}else nu(e)}else if(3==(o=t.o)||0==o&&0<e.pa||!(1==r&&(i=e,s=t,!(tM(i.h)>=i.h.j-(i.m?1:0))&&(i.m?(i.i=s.D.concat(i.i),!0):1!=i.G&&2!=i.G&&!(i.C>=(i.Za?0:i.$a))&&(i.m=eG(_(i.Ja,i,s),nm(i,i.C)),i.C++,!0)))||2==r&&nc(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),o){case 1:ng(e,5);break;case 4:ng(e,10);break;case 3:ng(e,6);break;default:ng(e,2)}}}function nm(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function ng(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=_(e.kb,e);n||(n=new th("//www.google.com/images/cleardot.gif"),v.location&&"http"==v.location.protocol||tf(n,"https"),ty(n)),function(e,t){let n=new eF;if(v.Image){let r=new Image;r.onload=S(t$,n,r,"TestLoadImage: loaded",!0,t),r.onerror=S(t$,n,r,"TestLoadImage: error",!1,t),r.onabort=S(t$,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=S(t$,n,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else eH(2);e.G=0,e.l&&e.l.va(t),ny(e),ni(e)}function ny(e){if(e.G=0,e.la=[],e.l){let t=tV(e.h);(0!=t.length||0!=e.i.length)&&(N(e.la,t),N(e.la,e.i),e.h.i.length=0,O(e.i),e.i.length=0),e.l.ua()}}function nv(e,t,n){var r=n instanceof th?td(n):new th(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),tp(r,r.m);else{var i=v.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new th(null,void 0);r&&tf(s,r),t&&(s.g=t),i&&tp(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&tg(r,n,t),tg(r,"VER",e.ma),na(e,r),r}function nw(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tJ(n&&e.Da&&!e.ra?new tz({jb:!0}):e.ra)).Ka(e.H),t}function nb(){}function nE(){if(V&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function nI(e,t){eb.call(this),this.g=new nt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!P(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!P(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nS(this)}function nT(e){e1.call(this);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function n_(){e2.call(this),this.status=1}function nS(e){this.g=e}(c=tJ.prototype).Ka=function(e){this.L=e},c.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?eY(this.u):eY(a),this.g.onreadystatechange=_(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){t1(this,s);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)n.set(o,r[o]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let l of r.keys())n.set(l,r.get(l));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[u,c]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),o=v.FormData&&e instanceof v.FormData,!(0<=A(t0,t))||r||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(u,c);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var h,d;t6(this),0<this.B&&((this.K=(h=this.g,V&&(d=X,Object.prototype.hasOwnProperty.call(d,9)?d[9]:d[9]=function(){let e=0,t=L(String(i)).split("."),n=L("9").split("."),r=Math.max(t.length,n.length);for(let s=0;0==e&&s<r;s++){var o=t[s]||"",a=n[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;e=x(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||x(0==o[2].length,0==a[2].length)||x(o[2],a[2]),o=o[3],a=a[3]}while(0==e)}return 0<=e}(9))&&"number"==typeof h.timeout&&void 0!==h.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=_(this.qa,this)):this.A=eR(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(f){t1(this,f)}},c.qa=function(){void 0!==y&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eE(this,"timeout"),this.abort(8))},c.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,eE(this,"complete"),eE(this,"abort"),t4(this))},c.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t4(this,!0)),tJ.X.M.call(this)},c.Ha=function(){this.s||(this.F||this.v||this.l?t3(this):this.fb())},c.fb=function(){t3(this)},c.aa=function(){try{return 2<t5(this)?this.g.status:-1}catch(e){return -1}},c.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},c.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tX(t)}},c.Ea=function(){return this.m},c.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(c=nt.prototype).ma=8,c.G=1,c.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let t=new e4(this,this.j,e,void 0),n=this.s;if(this.S&&(n?ea(n=es(n),this.S):n=this.S),null!==this.o||this.N||(t.H=n,n=null),this.O)e:{for(var r=0,i=0;i<this.i.length;i++){t:{var s=this.i[i];if("__data__"in s.g&&"string"==typeof(s=s.g.__data__)){s=s.length;break t}s=void 0}if(void 0===s)break;if(4096<(r+=s)){r=i;break e}if(4096===r||i===this.i.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=nl(this,t,r),tg(i=td(this.F),"RID",e),tg(i,"CVER",22),this.D&&tg(i,"X-HTTP-Session-Id",this.D),na(this,i),n&&(this.N?r="headers="+encodeURIComponent(String(t8(n)))+"&"+r:this.o&&t7(i,this.o,n)),tF(this.h,t),this.Ya&&tg(i,"TYPE","init"),this.O?(tg(i,"$req",r),tg(i,"SID","null"),t.Z=!0,e7(t,i,null)):e7(t,i,r),this.G=2}}else 3==this.G&&(e?no(this,e):0==this.i.length||tx(this.h)||no(this))}},c.Ia=function(){if(this.u=null,nd(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=eG(_(this.eb,this),e)}},c.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,eH(10),nr(this),nd(this))},c.cb=function(){null!=this.v&&(this.v=null,nr(this),nc(this),eH(19))},c.kb=function(e){e?(this.j.info("Successfully pinged google.com"),eH(2)):(this.j.info("Failed to ping google.com"),eH(1))},(c=nb.prototype).xa=function(){},c.wa=function(){},c.va=function(){},c.ua=function(){},c.Ra=function(){},nE.prototype.g=function(e,t){return new nI(e,t)},k(nI,eb),nI.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;eH(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=nv(e,null,e.V),ns(e)},nI.prototype.close=function(){nn(this.g)},nI.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=eT(e),e=n);t.i.push(new tR(t.ab++,e)),3==t.G&&ns(t)},nI.prototype.M=function(){this.g.l=null,delete this.j,nn(this.g),delete this.g,nI.X.M.call(this)},k(nT,e1),k(n_,e2),k(nS,nb),nS.prototype.xa=function(){eE(this.g,"a")},nS.prototype.wa=function(e){eE(this.g,new nT(e))},nS.prototype.va=function(e){eE(this.g,new n_)},nS.prototype.ua=function(){eE(this.g,"b")},nE.prototype.createWebChannel=nE.prototype.g,nI.prototype.send=nI.prototype.u,nI.prototype.open=nI.prototype.m,nI.prototype.close=nI.prototype.close,eQ.NO_ERROR=0,eQ.TIMEOUT=8,eQ.HTTP_ERROR=6,eX.COMPLETE="complete",eZ.EventType=e0,e0.OPEN="a",e0.CLOSE="b",e0.ERROR="c",e0.MESSAGE="d",eb.prototype.listen=eb.prototype.N,tJ.prototype.listenOnce=tJ.prototype.O,tJ.prototype.getLastError=tJ.prototype.Oa,tJ.prototype.getLastErrorCode=tJ.prototype.Ea,tJ.prototype.getStatus=tJ.prototype.aa,tJ.prototype.getResponseJson=tJ.prototype.Sa,tJ.prototype.getResponseText=tJ.prototype.fa,tJ.prototype.send=tJ.prototype.da,tJ.prototype.setWithCredentials=tJ.prototype.Ka;var nk=g.createWebChannelTransport=function(){return new nE},nC=g.getStatEventTarget=function(){return eB()},nA=g.ErrorCode=eQ,nO=g.EventType=eX,nN=g.Event=eV,nD=g.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nR=g.FetchXmlHttpFactory=tz,nP=g.WebChannel=eZ,nL=g.XhrIo=tJ;n(3454);let nx="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nM{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nM.UNAUTHENTICATED=new nM(null),nM.GOOGLE_CREDENTIALS=new nM("google-credentials-uid"),nM.FIRST_PARTY=new nM("first-party-uid"),nM.MOCK_USER=new nM("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nj="9.16.0",nF=new f.Yd("@firebase/firestore");function nU(){return nF.logLevel}function nV(e,...t){if(nF.logLevel<=f.in.DEBUG){let n=t.map(n$);nF.debug(`Firestore (${nj}): ${e}`,...n)}}function nq(e,...t){if(nF.logLevel<=f.in.ERROR){let n=t.map(n$);nF.error(`Firestore (${nj}): ${e}`,...n)}}function nB(e,...t){if(nF.logLevel<=f.in.WARN){let n=t.map(n$);nF.warn(`Firestore (${nj}): ${e}`,...n)}}function n$(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nz(e="Unexpected state"){let t=`FIRESTORE (${nj}) INTERNAL ASSERTION FAILED: `+e;throw nq(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nK={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nH extends p.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nW{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nG{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nQ{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nM.UNAUTHENTICATED))}shutdown(){}}class nX{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nJ{constructor(e){this.t=e,this.currentUser=nM.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new nW;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nW,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{nV("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(nV("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nW)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(nV("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||nz(),new nG(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||nz(),new nM(e)}}class nY{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=nM.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||nz(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class nZ{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new nY(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(nM.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class n0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&nV("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,nV("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{nV("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):nV("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||nz(),this.A=e.token,new n0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n2{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function n3(e,t){return e<t?-1:e>t?1:0}function n4(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n6{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new nH(nK.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new nH(nK.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n6.fromMillis(Date.now())}static fromDate(e){return n6.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new n6(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?n3(this.nanoseconds,e.nanoseconds):n3(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n5{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n5(e)}static min(){return new n5(new n6(0,0))}static max(){return new n5(new n6(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n9{constructor(e,t,n){void 0===t?t=0:t>e.length&&nz(),void 0===n?n=e.length-t:n>e.length-t&&nz(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===n9.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n9?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let i=e.get(r),s=t.get(r);if(i<s)return -1;if(i>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class n8 extends n9{construct(e,t,n){return new n8(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new nH(nK.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new n8(t)}static emptyPath(){return new n8([])}}let n7=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends n9{construct(e,t,n){return new re(e,t,n)}static isValidIdentifier(e){return n7.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new re(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new nH(nK.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let o=e[r];if("\\"===o){if(r+1===e.length)throw new nH(nK.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let a=e[r+1];if("\\"!==a&&"."!==a&&"`"!==a)throw new nH(nK.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=a,r+=2}else"`"===o?(s=!s,r++):"."!==o||s?(n+=o,r++):(i(),r++)}if(i(),s)throw new nH(nK.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new re(t)}static emptyPath(){return new re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rt{constructor(e){this.path=e}static fromPath(e){return new rt(n8.fromString(e))}static fromName(e){return new rt(n8.fromString(e).popFirst(5))}static empty(){return new rt(n8.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===n8.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return n8.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rt(new n8(e.slice()))}}class rn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rn(n5.min(),rt.empty(),-1)}static max(){return new rn(n5.max(),rt.empty(),-1)}}class rr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ri(e){if(e.code!==nK.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;nV("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rs{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&nz(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rs((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rs?t:rs.resolve(t)}catch(n){return rs.reject(n)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rs.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rs.reject(t)}static resolve(e){return new rs((t,n)=>{t(e)})}static reject(e){return new rs((t,n)=>{n(e)})}static waitFor(e){return new rs((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=rs.resolve(!1);for(let n of e)t=t.next(e=>e?rs.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new rs((n,r)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new rs((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function ro(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ra{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}ra.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rl{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ru{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ru("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ru&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rc(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rh(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rd(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function rf(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rp{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new rp(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new rp(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return n3(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rp.EMPTY_BYTE_STRING=new rp("");let rm=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rg(e){if(e||nz(),"string"==typeof e){let t=0,n=rm.exec(e);if(n||nz(),n[1]){let r=n[1];t=Number(r=(r+"000000000").substr(0,9))}let i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ry(e.seconds),nanos:ry(e.nanos)}}function ry(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rv(e){return"string"==typeof e?rp.fromBase64String(e):rp.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rw(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function rb(e){let t=rg(e.mapValue.fields.__local_write_time__.timestampValue);return new n6(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rE={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rI(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rw(e)?4:rL(e)?9007199254740991:10:nz()}function rT(e,t){if(e===t)return!0;let n=rI(e);if(n!==rI(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rb(e).isEqual(rb(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=rg(e.timestampValue),r=rg(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rv(e.bytesValue).isEqual(rv(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ry(e.geoPointValue.latitude)===ry(t.geoPointValue.latitude)&&ry(e.geoPointValue.longitude)===ry(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ry(e.integerValue)===ry(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ry(e.doubleValue),r=ry(t.doubleValue);return n===r?rf(n)===rf(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return n4(e.arrayValue.values||[],t.arrayValue.values||[],rT);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(rc(n)!==rc(r))return!1;for(let i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!rT(n[i],r[i])))return!1;return!0}(e,t);default:return nz()}}function r_(e,t){return void 0!==(e.values||[]).find(e=>rT(e,t))}function rS(e,t){if(e===t)return 0;let n=rI(e),r=rI(t);if(n!==r)return n3(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return n3(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=ry(e.integerValue||e.doubleValue),r=ry(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return rk(e.timestampValue,t.timestampValue);case 4:return rk(rb(e),rb(t));case 5:return n3(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rv(e),r=rv(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){let s=n3(n[i],r[i]);if(0!==s)return s}return n3(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=n3(ry(e.latitude),ry(t.latitude));return 0!==n?n:n3(ry(e.longitude),ry(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){let s=rS(n[i],r[i]);if(s)return s}return n3(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===rE.mapValue&&t===rE.mapValue)return 0;if(e===rE.mapValue)return 1;if(t===rE.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){let a=n3(r[o],s[o]);if(0!==a)return a;let l=rS(n[r[o]],i[s[o]]);if(0!==l)return l}return n3(r.length,s.length)}(e.mapValue,t.mapValue);default:throw nz()}}function rk(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return n3(e,t);let n=rg(e),r=rg(t),i=n3(n.seconds,r.seconds);return 0!==i?i:n3(n.nanos,r.nanos)}function rC(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rg(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rv(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,rt.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=rC(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${rC(e.fields[i])}`;return n+"}"}(e.mapValue):nz()}function rA(e){return!!e&&"integerValue"in e}function rO(e){return!!e&&"arrayValue"in e}function rN(e){return!!e&&"nullValue"in e}function rD(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rR(e){return!!e&&"mapValue"in e}function rP(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rh(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rP(n)),t}if(e.arrayValue){let n={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=rP(e.arrayValue.values[r]);return n}return Object.assign({},e)}function rL(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rx{constructor(e,t){this.position=e,this.inclusive=t}}function rM(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(r=s.field.isKeyField()?rt.comparator(rt.fromName(o.referenceValue),n.key):rS(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function rj(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rT(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rF{}class rU extends rF{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new r$(e,t,n):"array-contains"===t?new rW(e,n):"in"===t?new rG(e,n):"not-in"===t?new rQ(e,n):"array-contains-any"===t?new rX(e,n):new rU(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new rz(e,n):new rK(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rS(t,this.value)):null!==t&&rI(this.value)===rI(t)&&this.matchesComparison(rS(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return nz()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class rV extends rF{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new rV(e,t)}matches(e){return rq(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function rq(e){return"and"===e.op}function rB(e){for(let t of e.filters)if(t instanceof rV)return!1;return!0}class r$ extends rU{constructor(e,t,n){super(e,t,n),this.key=rt.fromName(n.referenceValue)}matches(e){let t=rt.comparator(e.key,this.key);return this.matchesComparison(t)}}class rz extends rU{constructor(e,t){super(e,"in",t),this.keys=rH("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rK extends rU{constructor(e,t){super(e,"not-in",t),this.keys=rH("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rH(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>rt.fromName(e.referenceValue))}class rW extends rU{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rO(t)&&r_(t.arrayValue,this.value)}}class rG extends rU{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&r_(this.value.arrayValue,t)}}class rQ extends rU{constructor(e,t){super(e,"not-in",t)}matches(e){if(r_(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!r_(this.value.arrayValue,t)}}class rX extends rU{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rO(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>r_(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rJ{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rY{constructor(e,t){this.comparator=e,this.root=t||r0.EMPTY}insert(e,t){return new rY(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,r0.BLACK,null,null))}remove(e){return new rY(this.comparator,this.root.remove(e,this.comparator).copy(null,null,r0.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rZ(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rZ(this.root,e,this.comparator,!1)}getReverseIterator(){return new rZ(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rZ(this.root,e,this.comparator,!0)}}class rZ{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class r0{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:r0.RED,this.left=null!=r?r:r0.EMPTY,this.right=null!=i?i:r0.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new r0(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return r0.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return r0.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,r0.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,r0.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nz();let e=this.left.check();if(e!==this.right.check())throw nz();return e+(this.isRed()?0:1)}}r0.EMPTY=null,r0.RED=!0,r0.BLACK=!1,r0.EMPTY=new class{constructor(){this.size=0}get key(){throw nz()}get value(){throw nz()}get color(){throw nz()}get left(){throw nz()}get right(){throw nz()}copy(e,t,n,r,i){return this}insert(e,t,n){return new r0(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r1{constructor(e){this.comparator=e,this.data=new rY(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new r2(this.data.getIterator())}getIteratorFrom(e){return new r2(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof r1)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(r,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new r1(this.comparator);return t.data=e,t}}class r2{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r3{constructor(e){this.fields=e,e.sort(re.comparator)}static empty(){return new r3([])}unionWith(e){let t=new r1(re.comparator);for(let n of this.fields)t=t.add(n);for(let r of e)t=t.add(r);return new r3(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return n4(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r4{constructor(e){this.value=e}static empty(){return new r4({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!rR(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rP(t)}setAll(e){let t=re.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let s=this.getFieldsMap(t);this.applyChanges(s,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=rP(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());rR(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rT(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];rR(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(rh(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new r4(rP(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r6{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new r6(e,0,n5.min(),n5.min(),n5.min(),r4.empty(),0)}static newFoundDocument(e,t,n,r){return new r6(e,1,t,n5.min(),n,r,0)}static newNoDocument(e,t){return new r6(e,2,t,n5.min(),n5.min(),r4.empty(),0)}static newUnknownDocument(e,t){return new r6(e,3,t,n5.min(),n5.min(),r4.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(n5.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=r4.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=r4.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=n5.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof r6&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new r6(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r5{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function r9(e,t=null,n=[],r=[],i=null,s=null,o=null){return new r5(e,t,n,r,i,s,o)}function r8(e){let t=e;if(null===t.ft){let n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n="|f:"+t.filters.map(e=>(function e(t){if(t instanceof rU)return t.field.canonicalString()+t.op.toString()+rC(t.value);if(rB(t)&&rq(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(n="|l:"+t.limit),t.startAt&&(n="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rC(e)).join(",")),t.endAt&&(n="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rC(e)).join(",")),t.ft=n}return t.ft}function r7(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++){var r,i;if(r=e.orderBy[n],i=t.orderBy[n],!(r.dir===i.dir&&r.field.isEqual(i.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(!function e(t,n){return t instanceof rU?n instanceof rU&&t.op===n.op&&t.field.isEqual(n.field)&&rT(t.value,n.value):t instanceof rV?n instanceof rV&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void nz()}(e.filters[s],t.filters[s]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rj(e.startAt,t.startAt)&&rj(e.endAt,t.endAt)}function ie(e){return rt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class it{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function ir(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ii(e){let t=e;if(null===t.dt){t.dt=[];let n=function(e){for(let t of e.filters){let n=t.getFirstInequalityField();if(null!==n)return n}return null}(t),r=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==n&&null===r)n.isKeyField()||t.dt.push(new rJ(n)),t.dt.push(new rJ(re.keyField(),"asc"));else{let i=!1;for(let s of t.explicitOrderBy)t.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){let o=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new rJ(re.keyField(),o))}}}return t.dt}function is(e){let t=e;if(!t._t){if("F"===t.limitType)t._t=r9(t.path,t.collectionGroup,ii(t),t.filters,t.limit,t.startAt,t.endAt);else{let n=[];for(let r of ii(t)){let i="desc"===r.dir?"asc":"desc";n.push(new rJ(r.field,i))}let s=t.endAt?new rx(t.endAt.position,t.endAt.inclusive):null,o=t.startAt?new rx(t.startAt.position,t.startAt.inclusive):null;t._t=r9(t.path,t.collectionGroup,n,t.filters,t.limit,s,o)}}return t._t}function io(e,t,n){return new it(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ia(e,t){return r7(is(e),is(t))&&e.limitType===t.limitType}function il(e){return`${r8(is(e))}|lt:${e.limitType}`}function iu(e){var t;let n;return`Query(target=${n=(t=is(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof rU?`${t.field.canonicalString()} ${t.op} ${rC(t.value)}`:t instanceof rV?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rC(e)).join(",")),t.endAt&&(n=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rC(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function ic(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):rt.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of ii(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=rM(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,ii(e),t))&&(!e.endAt||!!function(e,t,n){let r=rM(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,ii(e),t))}function ih(e){return(t,n)=>{let r=!1;for(let i of ii(e)){let s=function(e,t,n){let r=e.field.isKeyField()?rt.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?rS(r,i):nz()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return nz()}}(i,t,n);if(0!==s)return s;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function id(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rf(t)?"-0":t}}function ip(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class im{constructor(){this._=void 0}}function ig(e,t){return e instanceof iI?rA(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class iy extends im{}class iv extends im{constructor(e){super(),this.elements=e}}function iw(e,t){let n=i_(t);for(let r of e.elements)n.some(e=>rT(e,r))||n.push(r);return{arrayValue:{values:n}}}class ib extends im{constructor(e){super(),this.elements=e}}function iE(e,t){let n=i_(t);for(let r of e.elements)n=n.filter(e=>!rT(e,r));return{arrayValue:{values:n}}}class iI extends im{constructor(e,t){super(),this.yt=e,this.gt=t}}function iT(e){return ry(e.integerValue||e.doubleValue)}function i_(e){return rO(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class iS{constructor(e,t){this.version=e,this.transformResults=t}}class ik{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ik}static exists(e){return new ik(void 0,e)}static updateTime(e){return new ik(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function iC(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class iA{}function iO(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ij(e.key,ik.none()):new iR(e.key,e.data,ik.none());{let n=e.data,r=r4.empty(),i=new r1(re.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);null===o&&s.length>1&&(s=s.popLast(),o=n.field(s)),null===o?r.delete(s):r.set(s,o),i=i.add(s)}return new iP(e.key,r,new r3(i.toArray()),ik.none())}}function iN(e,t,n,r){return e instanceof iR?function(e,t,n,r){if(!iC(e.precondition,t))return n;let i=e.value.clone(),s=iM(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof iP?function(e,t,n,r){if(!iC(e.precondition,t))return n;let i=iM(e.fieldTransforms,r,t),s=t.data;return(s.setAll(iL(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):iC(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function iD(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&n4(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof iv&&r instanceof iv||n instanceof ib&&r instanceof ib?n4(n.elements,r.elements,rT):n instanceof iI&&r instanceof iI?rT(n.gt,r.gt):n instanceof iy&&r instanceof iy)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class iR extends iA{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class iP extends iA{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iL(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function ix(e,t,n){var r;let i=new Map;e.length===n.length||nz();for(let s=0;s<n.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(r=n[s],a instanceof iv?iw(a,l):a instanceof ib?iE(a,l):r))}return i}function iM(e,t,n){let r=new Map;for(let i of e){let s=i.transform,o=n.data.field(i.field);r.set(i.field,s instanceof iy?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,o):s instanceof iv?iw(s,o):s instanceof ib?iE(s,o):function(e,t){let n=ig(e,t),r=iT(n)+iT(e.gt);return rA(n)&&rA(e.gt)?ip(r):id(e.yt,r)}(s,o))}return r}class ij extends iA{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iF extends iA{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iU{constructor(e){this.count=e}}function iV(e){if(void 0===e)return nq("GRPC error has no .code"),nK.UNKNOWN;switch(e){case l.OK:return nK.OK;case l.CANCELLED:return nK.CANCELLED;case l.UNKNOWN:return nK.UNKNOWN;case l.DEADLINE_EXCEEDED:return nK.DEADLINE_EXCEEDED;case l.RESOURCE_EXHAUSTED:return nK.RESOURCE_EXHAUSTED;case l.INTERNAL:return nK.INTERNAL;case l.UNAVAILABLE:return nK.UNAVAILABLE;case l.UNAUTHENTICATED:return nK.UNAUTHENTICATED;case l.INVALID_ARGUMENT:return nK.INVALID_ARGUMENT;case l.NOT_FOUND:return nK.NOT_FOUND;case l.ALREADY_EXISTS:return nK.ALREADY_EXISTS;case l.PERMISSION_DENIED:return nK.PERMISSION_DENIED;case l.FAILED_PRECONDITION:return nK.FAILED_PRECONDITION;case l.ABORTED:return nK.ABORTED;case l.OUT_OF_RANGE:return nK.OUT_OF_RANGE;case l.UNIMPLEMENTED:return nK.UNIMPLEMENTED;case l.DATA_LOSS:return nK.DATA_LOSS;default:return nz()}}(u=l||(l={}))[u.OK=0]="OK",u[u.CANCELLED=1]="CANCELLED",u[u.UNKNOWN=2]="UNKNOWN",u[u.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",u[u.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",u[u.NOT_FOUND=5]="NOT_FOUND",u[u.ALREADY_EXISTS=6]="ALREADY_EXISTS",u[u.PERMISSION_DENIED=7]="PERMISSION_DENIED",u[u.UNAUTHENTICATED=16]="UNAUTHENTICATED",u[u.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",u[u.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",u[u.ABORTED=10]="ABORTED",u[u.OUT_OF_RANGE=11]="OUT_OF_RANGE",u[u.UNIMPLEMENTED=12]="UNIMPLEMENTED",u[u.INTERNAL=13]="INTERNAL",u[u.UNAVAILABLE=14]="UNAVAILABLE",u[u.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iq{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rh(this.inner,(t,n)=>{for(let[r,i]of n)e(r,i)})}isEmpty(){return rd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iB=new rY(rt.comparator),i$=new rY(rt.comparator);function iz(...e){let t=i$;for(let n of e)t=t.insert(n.key,n);return t}function iK(e){let t=i$;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function iH(){return new iq(e=>e.toString(),(e,t)=>e.isEqual(t))}let iW=new rY(rt.comparator),iG=new r1(rt.comparator);function iQ(...e){let t=iG;for(let n of e)t=t.add(n);return t}let iX=new r1(n3);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iJ{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,iY.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new iJ(n5.min(),r,iX,iB,iQ())}}class iY{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new iY(n,t,iQ(),iQ(),iQ())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iZ{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class i0{constructor(e,t){this.targetId=e,this.Et=t}}class i1{constructor(e,t,n=rp.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class i2{constructor(){this.At=0,this.Rt=i6(),this.bt=rp.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=iQ(),t=iQ(),n=iQ();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:nz()}}),new iY(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=i6()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class i3{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=iB,this.qt=i4(),this.Ut=new r1(n3)}Kt(e){for(let t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(let n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{let n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:nz()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((e,n)=>{this.zt(n)&&t(n)})}Jt(e){let t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){let i=r.target;if(ie(i)){if(0===n){let s=new rt(i.path);this.Qt(t,s,r6.newNoDocument(s,n5.min()))}else 1===n||nz()}else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){let t=new Map;this.Bt.forEach((n,r)=>{let i=this.Yt(r);if(i){if(n.current&&ie(i.target)){let s=new rt(i.target.path);null!==this.Lt.get(s)||this.te(r,s)||this.Qt(r,s,r6.newNoDocument(s,e))}n.St&&(t.set(r,n.Ct()),n.xt())}});let n=iQ();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Lt.forEach((t,n)=>n.setReadTime(e));let r=new iJ(e,t,this.Ut,this.Lt,n);return this.Lt=iB,this.qt=i4(),this.Ut=new r1(n3),r}Gt(e,t){if(!this.zt(e))return;let n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;let r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){let t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new i2,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new r1(n3),this.qt=this.qt.insert(e,t)),t}zt(e){let t=null!==this.Yt(e);return t||nV("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){let t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new i2),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function i4(){return new rY(rt.comparator)}function i6(){return new rY(rt.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i5={asc:"ASCENDING",desc:"DESCENDING"},i9={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},i8={and:"AND",or:"OR"};class i7{constructor(e,t){this.databaseId=e,this.wt=t}}function se(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function st(e,t){return e.wt?t.toBase64():t.toUint8Array()}function sn(e){return e||nz(),n5.fromTimestamp(function(e){let t=rg(e);return new n6(t.seconds,t.nanos)}(e))}function sr(e,t){return new n8(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function si(e){let t=n8.fromString(e);return sf(t)||nz(),t}function ss(e,t){return sr(e.databaseId,t.path)}function so(e,t){let n=si(t);if(n.get(1)!==e.databaseId.projectId)throw new nH(nK.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new nH(nK.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rt(su(n))}function sa(e,t){return sr(e.databaseId,t)}function sl(e){return new n8(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function su(e){return e.length>4&&"documents"===e.get(4)||nz(),e.popFirst(5)}function sc(e,t,n){return{name:ss(e,t),fields:n.value.mapValue.fields}}function sh(e){return{fieldPath:e.canonicalString()}}function sd(e){return re.fromServerFormat(e.fieldPath)}function sf(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sp{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){let i=this.mutations[r];if(i.key.isEqual(e.key)){var s;s=n[r],i instanceof iR?function(e,t,n){let r=e.value.clone(),i=ix(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,s):i instanceof iP?function(e,t,n){if(!iC(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=ix(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(iL(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,s):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,s)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=iN(n,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=iN(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=iH();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;let a=iO(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(n5.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),iQ())}isEqual(e){return this.batchId===e.batchId&&n4(this.mutations,e.mutations,(e,t)=>iD(e,t))&&n4(this.baseMutations,e.baseMutations,(e,t)=>iD(e,t))}}class sm{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||nz();let r=iW,i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new sm(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sy{constructor(e,t,n,r,i=n5.min(),s=n5.min(),o=rp.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new sy(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new sy(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sy(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sv{constructor(e){this.ie=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sw{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(ry(e.integerValue));else if("doubleValue"in e){let n=ry(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),rf(n)?t.le(0):t.le(n))}else if("timestampValue"in e){let r=e.timestampValue;this.he(t,20),"string"==typeof r?t.fe(r):(t.fe(`${r.seconds||""}`),t.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(rv(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.he(t,45),t.le(i.latitude||0),t.le(i.longitude||0)}else"mapValue"in e?rL(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):nz()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){let n=e.fields||{};for(let r of(this.he(t,55),Object.keys(n)))this.de(r,t),this.ce(n[r],t)}ye(e,t){let n=e.values||[];for(let r of(this.he(t,50),n))this.ce(r,t)}me(e,t){this.he(t,37),rt.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}sw.Ie=new sw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sb{constructor(){this.Je=new sE}addToCollectionParentIndex(e,t){return this.Je.add(t),rs.resolve()}getCollectionParents(e,t){return rs.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return rs.resolve()}deleteFieldIndex(e,t){return rs.resolve()}getDocumentsMatchingTarget(e,t){return rs.resolve(null)}getIndexType(e,t){return rs.resolve(0)}getFieldIndexes(e,t){return rs.resolve([])}getNextCollectionGroupToUpdate(e){return rs.resolve(null)}getMinOffset(e,t){return rs.resolve(rn.min())}getMinOffsetFromCollectionGroup(e,t){return rs.resolve(rn.min())}updateCollectionGroup(e,t,n){return rs.resolve()}updateIndexEntries(e,t){return rs.resolve()}}class sE{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new r1(n8.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new r1(n8.comparator)).toArray()}}new Uint8Array(0);class sI{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new sI(e,sI.DEFAULT_COLLECTION_PERCENTILE,sI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ sI.DEFAULT_COLLECTION_PERCENTILE=10,sI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sI.DEFAULT=new sI(41943040,sI.DEFAULT_COLLECTION_PERCENTILE,sI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sI.DISABLED=new sI(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sT{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new sT(0)}static vn(){return new sT(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s_{constructor(){this.changes=new iq(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,r6.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?rs.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sk{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&iN(n.mutation,e,r3.empty(),n6.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,iQ()).next(()=>t))}getLocalViewOfDocuments(e,t,n=iQ()){let r=iH();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=iz();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=iH();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,iQ()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=iB,s=iH(),o=iH();return t.forEach((e,t)=>{let o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof iP)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),iN(o.mutation,t,o.mutation.getFieldMask(),n6.now())):s.set(t.key,r3.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new sS(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){let n=iH(),r=new rY((e,t)=>e-t),i=iQ();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=n.get(e)||r3.empty();o=i.applyToLocalView(s,o),n.set(e,o);let a=(r.get(i.batchId)||iQ()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{let s=[],o=r.getReverseIterator();for(;o.hasNext();){let a=o.getNext(),l=a.key,u=a.value,c=iH();u.forEach(e=>{if(!i.has(e)){let r=iO(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,l,c))}return rs.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return rt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):rs.resolve(iH()),o=-1,a=i;return s.next(t=>rs.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?rs.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,iQ())).next(e=>({batchId:o,changes:iK(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new rt(t)).next(e=>{let t=iz();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=iz();return this.indexManager.getCollectionParents(e,r).next(s=>rs.forEach(s,s=>{var o;let a=(o=s.child(r),new it(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,a,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId))).next(e=>{e.forEach((e,t)=>{let n=t.getKey();null===r.get(n)&&(r=r.insert(n,r6.newInvalidDocument(n)))});let n=iz();return r.forEach((r,i)=>{let s=e.get(r);void 0!==s&&iN(s.mutation,i,r3.empty(),n6.now()),ic(t,i)&&(n=n.insert(r,i))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sC{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return rs.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:sn(t.createTime)}),rs.resolve()}getNamedQuery(e,t){return rs.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,r,i,s,o,a,l;let u,c=function(e){let t=si(e);return 4===t.length?n8.emptyPath():su(t)}(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||nz();let p=h.from[0];p.allDescendants?f=p.collectionId:c=c.child(p.collectionId)}let m=[];h.where&&(m=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sd(e.unaryFilter.field);return rU.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=sd(e.unaryFilter.field);return rU.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=sd(e.unaryFilter.field);return rU.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=sd(e.unaryFilter.field);return rU.create(i,"!=",{nullValue:"NULL_VALUE"});default:return nz()}}(t):void 0!==t.fieldFilter?rU.create(sd(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nz()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rV.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return nz()}}(t.compositeFilter.op)):nz()}(e);return n instanceof rV&&rB(t=n)&&rq(t)?n.getFilters():[n]}(h.where));let g=[];h.orderBy&&(g=h.orderBy.map(e=>new rJ(sd(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let y=null;h.limit&&(y=null==(u="object"==typeof(t=h.limit)?t.value:t)?null:u);let v=null;h.startAt&&(v=function(e){let t=!!e.before,n=e.values||[];return new rx(n,t)}(h.startAt));let w=null;return h.endAt&&(w=function(e){let t=!e.before,n=e.values||[];return new rx(n,t)}(h.endAt)),n=c,r=f,i=g,s=m,o=y,a=v,l=w,new it(n,r,i,s,o,"F",a,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?io(t,t.limit,"L"):t}(t.bundledQuery),readTime:sn(t.readTime)}),rs.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sA{constructor(){this.overlays=new rY(rt.comparator),this.es=new Map}getOverlay(e,t){return rs.resolve(this.overlays.get(t))}getOverlays(e,t){let n=iH();return rs.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.oe(e,t,r)}),rs.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.es.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),rs.resolve()}getOverlaysForCollection(e,t,n){let r=iH(),i=t.length+1,s=new rt(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let a=o.getNext().value,l=a.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&a.largestBatchId>n&&r.set(a.getKey(),a)}return rs.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new rY((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let o=s.getNext().value;if(o.getKey().getCollectionGroup()===t&&o.largestBatchId>n){let a=i.get(o.largestBatchId);null===a&&(a=iH(),i=i.insert(o.largestBatchId,a)),a.set(o.getKey(),o)}}let l=iH(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((e,t)=>l.set(e,t)),!(l.size()>=r)););return rs.resolve(l)}oe(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let i=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new sg(t,n));let s=this.es.get(t);void 0===s&&(s=iQ(),this.es.set(t,s)),this.es.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sO{constructor(){this.ns=new r1(sN.ss),this.rs=new r1(sN.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let n=new sN(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new sN(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new rt(new n8([])),n=new sN(t,e),r=new sN(t,e+1),i=[];return this.rs.forEachInRange([n,r],e=>{this.cs(e),i.push(e.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new rt(new n8([])),n=new sN(t,e),r=new sN(t,e+1),i=iQ();return this.rs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sN(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class sN{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return rt.comparator(e.key,t.key)||n3(e._s,t._s)}static os(e,t){return n3(e._s,t._s)||rt.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new r1(sN.ss)}checkEmpty(e){return rs.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new sp(i,t,n,r);for(let o of(this.mutationQueue.push(s),r))this.gs=this.gs.add(new sN(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return rs.resolve(s)}lookupMutationBatch(e,t){return rs.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ps(t+1),r=n<0?0:n;return rs.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return rs.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return rs.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new sN(t,0),r=new sN(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],e=>{let t=this.ys(e._s);i.push(t)}),rs.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new r1(n3);return t.forEach(e=>{let t=new sN(e,0),r=new sN(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],e=>{n=n.add(e._s)})}),rs.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;rt.isDocumentKey(i)||(i=i.child(""));let s=new sN(new rt(i),0),o=new r1(n3);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)},s),rs.resolve(this.Is(o))}Is(e){let t=[];return e.forEach(e=>{let n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Ts(t.batchId,"removed")||nz(),this.mutationQueue.shift();let n=this.gs;return rs.forEach(t.mutations,r=>{let i=new sN(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){let n=new sN(t,0),r=this.gs.firstAfterOrEqual(n);return rs.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,rs.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sR{constructor(e){this.Es=e,this.docs=new rY(rt.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return rs.resolve(n?n.document.mutableCopy():r6.newInvalidDocument(t))}getEntries(e,t){let n=iB;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():r6.newInvalidDocument(e))}),rs.resolve(n)}getAllFromCollection(e,t,n){let r=iB,i=new rt(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){let{key:o,value:{document:a}}=s.getNext();if(!t.isPrefixOf(o.path))break;o.path.length>t.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=rt.comparator(e.documentKey,t.documentKey))?n:n3(e.largestBatchId,t.largestBatchId)}(new rn(a.readTime,a.key,-1),n)||(r=r.insert(a.key,a.mutableCopy()))}return rs.resolve(r)}getAllFromCollectionGroup(e,t,n,r){nz()}As(e,t){return rs.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sP(this)}getSize(e){return rs.resolve(this.size)}}class sP extends s_{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)}),rs.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sL{constructor(e){this.persistence=e,this.Rs=new iq(e=>r8(e),r7),this.lastRemoteSnapshotVersion=n5.min(),this.highestTargetId=0,this.bs=0,this.Ps=new sO,this.targetCount=0,this.vs=sT.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),rs.resolve()}getLastRemoteSnapshotVersion(e){return rs.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rs.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),rs.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),rs.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new sT(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,rs.resolve()}updateTargetData(e,t){return this.Dn(t),rs.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,rs.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Rs.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),rs.waitFor(i).next(()=>r)}getTargetCount(e){return rs.resolve(this.targetCount)}getTargetData(e,t){let n=this.Rs.get(t)||null;return rs.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),rs.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),rs.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),rs.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ps.ds(t);return rs.resolve(n)}containsKey(e,t){return rs.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sx{constructor(e,t){var n;this.Vs={},this.overlays={},this.Ss=new ra(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new sL(this),this.indexManager=new sb,this.remoteDocumentCache=(n=e=>this.referenceDelegate.xs(e),new sR(n)),this.yt=new sv(t),this.Ns=new sC(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new sD(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){nV("MemoryPersistence","Starting transaction:",e);let r=new sM(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(e=>this.referenceDelegate.Os(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ms(e,t){return rs.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class sM extends rr{constructor(e){super(),this.currentSequenceNumber=e}}class sj{constructor(e){this.persistence=e,this.Fs=new sO,this.$s=null}static Bs(e){return new sj(e)}get Ls(){if(this.$s)return this.$s;throw nz()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),rs.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),rs.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),rs.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rs.forEach(this.Ls,n=>{let r=rt.fromPath(n);return this.qs(e,r).next(e=>{e||t.removeEntry(r,n5.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return rs.or([()=>rs.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sF{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=iQ(),r=iQ();for(let i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new sF(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sU{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(ir(t))return rs.resolve(null);let n=is(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=is(t=io(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=iQ(...r);return this.Ni.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,io(t,null,"F")):this.Bi(e,s,t,n)}))})))}Oi(e,t,n,r){return ir(t)||r.isEqual(n5.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(i=>{let s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(nU()<=f.in.DEBUG&&nV("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),iu(t)),this.Bi(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=n5.fromTimestamp(1e9===r?new n6(n+1,0):new n6(n,r));return new rn(i,rt.empty(),-1)}(r,0)))})}Fi(e,t){let n=new r1(ih(e));return t.forEach((t,r)=>{ic(e,r)&&(n=n.add(r))}),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return nU()<=f.in.DEBUG&&nV("QueryEngine","Using full collection scan to execute query:",iu(t)),this.Ni.getDocumentsMatchingQuery(e,t,rn.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sV{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new rY(n3),this.Ui=new iq(e=>r8(e),r7),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sk(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}async function sq(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Qi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],o=iQ();for(let a of r)for(let l of(i.push(a.batchId),a.mutations))o=o.add(l.key);for(let u of t)for(let c of(s.push(u.batchId),u.mutations))o=o.add(c.key);return e.localDocuments.getDocuments(n,o).next(e=>({ji:e,removedBatchIds:i,addedBatchIds:s}))})})}function sB(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}async function s$(e,t,n){let r=e,i=r.qi.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(s){if(!ro(s))throw s;nV("LocalStore",`Failed to update sequence numbers for target ${t}: ${s}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function sz(e,t,n){let r=n5.min(),i=iQ();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.Ui.get(n);return void 0!==r?rs.resolve(e.qi.get(r)):e.Cs.getTargetData(t,n)})(e,s,is(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Li.getDocumentsMatchingQuery(s,t,n?r:n5.min(),n?i:iQ())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Ki.get(r)||n5.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Ki.set(r,s),{documents:n,Hi:i}}))}class sK{constructor(){this.activeTargetIds=iX}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sH{constructor(){this.Lr=new sK,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new sK,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sW{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sG{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(nV("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(nV("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let sQ={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sX{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sJ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){let s=this.ho(e,t);nV("RestConnection","Sending: ",s,n);let o={};return this.lo(o,r,i),this.fo(e,s,o,n).then(e=>(nV("RestConnection","Received: ",e),e),t=>{throw nB("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nj,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){let n=sQ[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise((i,s)=>{let o=new nL;o.setWithCredentials(!0),o.listenOnce(nO.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case nA.NO_ERROR:let t=o.getResponseJson();nV("Connection","XHR received:",JSON.stringify(t)),i(t);break;case nA.TIMEOUT:nV("Connection",'RPC "'+e+'" timed out'),s(new nH(nK.DEADLINE_EXCEEDED,"Request time out"));break;case nA.HTTP_ERROR:let n=o.getStatus();if(nV("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let r=o.getResponseJson();Array.isArray(r)&&(r=r[0]);let a=null==r?void 0:r.error;if(a&&a.status&&a.message){let l=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(nK).indexOf(t)>=0?t:nK.UNKNOWN}(a.status);s(new nH(l,a.message))}else s(new nH(nK.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new nH(nK.UNAVAILABLE,"Connection failed."));break;default:nz()}}finally{nV("Connection",'RPC "'+e+'" completed.')}});let a=JSON.stringify(r);o.send(t,"POST",a,n,15)})}wo(e,t,n){let r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=nk(),s=nC(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new nR({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let a=r.join("");nV("Connection","Creating WebChannel: "+a,o);let u=i.createWebChannel(a,o),c=!1,h=!1,d=new sX({Hr(e){h?nV("Connection","Not sending because WebChannel is closed:",e):(c||(nV("Connection","Opening WebChannel transport."),u.open(),c=!0),nV("Connection","WebChannel sending:",e),u.send(e))},Jr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return f(u,nP.EventType.OPEN,()=>{h||nV("Connection","WebChannel transport opened.")}),f(u,nP.EventType.CLOSE,()=>{h||(h=!0,nV("Connection","WebChannel transport closed"),d.io())}),f(u,nP.EventType.ERROR,e=>{h||(h=!0,nB("Connection","WebChannel transport errored:",e),d.io(new nH(nK.UNAVAILABLE,"The operation could not be completed")))}),f(u,nP.EventType.MESSAGE,e=>{var t;if(!h){let n=e.data[0];n||nz();let r=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(r){nV("Connection","WebChannel received error:",r);let i=r.status,s=function(e){let t=l[e];if(void 0!==t)return iV(t)}(i),o=r.message;void 0===s&&(s=nK.INTERNAL,o="Unknown error status: "+i+" with message "+r.message),h=!0,d.io(new nH(s,o)),u.close()}else nV("Connection","WebChannel received:",n),d.ro(n)}}),f(s,nN.STAT_EVENT,e=>{e.stat===nD.PROXY?nV("Connection","Detected buffering proxy"):e.stat===nD.NOPROXY&&nV("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function sY(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sZ(e){return new i7(e,!0)}class s0{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&nV("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s1{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new s0(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===nK.RESOURCE_EXHAUSTED?(nq(t.toString()),nq("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===nK.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{let e=new nH(nK.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return nV("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(nV("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class s2 extends s1{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:nz(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.wt?(void 0===i||"string"==typeof i||nz(),rp.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||nz(),rp.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?nK.UNKNOWN:iV(e.code);return new nH(t,e.message||"")}(l);n=new i1(s,o,a,u||null)}else if("documentChange"in t){t.documentChange;let c=t.documentChange;c.document,c.document.name,c.document.updateTime;let h=so(e,c.document.name),d=sn(c.document.updateTime),f=c.document.createTime?sn(c.document.createTime):n5.min(),p=new r4({mapValue:{fields:c.document.fields}}),m=r6.newFoundDocument(h,d,f,p),g=c.targetIds||[],y=c.removedTargetIds||[];n=new iZ(g,y,m.key,m)}else if("documentDelete"in t){t.documentDelete;let v=t.documentDelete;v.document;let w=so(e,v.document),b=v.readTime?sn(v.readTime):n5.min(),E=r6.newNoDocument(w,b),I=v.removedTargetIds||[];n=new iZ([],I,E.key,E)}else if("documentRemove"in t){t.documentRemove;let T=t.documentRemove;T.document;let _=so(e,T.document),S=T.removedTargetIds||[];n=new iZ([],S,_,null)}else{if(!("filter"in t))return nz();{t.filter;let k=t.filter;k.targetId;let C=k.count||0,A=new iU(C),O=k.targetId;n=new i0(O,A)}}return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return n5.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?n5.min():t.readTime?sn(t.readTime):n5.min()}(e);return this.listener.Wo(t,n)}zo(e){let t={};t.database=sl(this.yt),t.addTarget=function(e,t){let n;let r=t.target;return(n=ie(r)?{documents:{documents:[sa(e,r.path)]}}:{query:function(e,t){var n,r,i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(s.parent=sa(e,o),s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s.parent=sa(e,o.popLast()),s.structuredQuery.from=[{collectionId:o.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof rU?function(e){if("=="===e.op){if(rD(e.value))return{unaryFilter:{field:sh(e.field),op:"IS_NAN"}};if(rN(e.value))return{unaryFilter:{field:sh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rD(e.value))return{unaryFilter:{field:sh(e.field),op:"IS_NOT_NAN"}};if(rN(e.value))return{unaryFilter:{field:sh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sh(e.field),op:i9[e.op],value:e.value}}}(t):t instanceof rV?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:i8[t.op],filters:n}}}(t):nz()}(rV.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:sh(e.field),direction:i5[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=(r=t.limit,e.wt||null==r?r:{value:r});return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),s}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=st(e,t.resumeToken):t.snapshotVersion.compareTo(n5.min())>0&&(n.readTime=se(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return nz()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){let t={};t.database=sl(this.yt),t.removeTarget=e,this.Bo(t)}}class s3 extends s1{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||nz(),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||nz(),t.map(e=>{let t;return(t=e.updateTime?sn(e.updateTime):sn(n)).isEqual(n5.min())&&(t=sn(n)),new iS(t,e.transformResults||[])})):[]),i=sn(e.commitTime);return this.listener.Zo(i,r)}return e.writeResults&&0!==e.writeResults.length&&nz(),this.Jo=!0,this.listener.tu()}eu(){let e={};e.database=sl(this.yt),this.Bo(e)}Xo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof iR)r={update:sc(e,t.key,t.value)};else if(t instanceof ij)r={delete:ss(e,t.key)};else if(t instanceof iP)r={update:sc(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof iF))return nz();r={verify:ss(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof iy)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof iv)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ib)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof iI)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw nz()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:se(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:nz()),r})(this.yt,e))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s4 extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new nH(nK.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nK.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nH(nK.UNKNOWN,e.toString())})}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection._o(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nK.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nH(nK.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class s6{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(nq(t),this.ou=!1):nV("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s5{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(e=>{n.enqueueAndForget(async()=>{os(this)&&(nV("RemoteStore","Restarting streams for network reachability change."),await async function(e){e._u.add(4),await s8(e),e.gu.set("Unknown"),e._u.delete(4),await s9(e)}(this))})}),this.gu=new s6(n,r)}}async function s9(e){if(os(e))for(let t of e.wu)await t(!0)}async function s8(e){for(let t of e.wu)await t(!1)}function s7(e,t){e.du.has(t.targetId)||(e.du.set(t.targetId,t),oi(e)?or(e):ob(e).ko()&&ot(e,t))}function oe(e,t){let n=ob(e);e.du.delete(t),n.ko()&&on(e,t),0===e.du.size&&(n.ko()?n.Fo():os(e)&&e.gu.set("Unknown"))}function ot(e,t){e.yu.Ot(t.targetId),ob(e).zo(t)}function on(e,t){e.yu.Ot(t),ob(e).Ho(t)}function or(e){e.yu=new i3({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),ob(e).start(),e.gu.uu()}function oi(e){return os(e)&&!ob(e).No()&&e.du.size>0}function os(e){return 0===e._u.size}async function oo(e){e.du.forEach((t,n)=>{ot(e,t)})}async function oa(e,t){e.yu=void 0,oi(e)?(e.gu.hu(t),or(e)):e.gu.set("Unknown")}async function ol(e,t,n){if(e.gu.set("Online"),t instanceof i1&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(r){nV("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ou(e,r)}else if(t instanceof iZ?e.yu.Kt(t):t instanceof i0?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(n5.min()))try{let i=await sB(e.localStore);n.compareTo(i)>=0&&await function(e,t){let n=e.yu.Zt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(rp.EMPTY_BYTE_STRING,n.snapshotVersion)),on(e,t);let r=new sy(n.target,t,1,n.sequenceNumber);ot(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){nV("RemoteStore","Failed to raise snapshot:",s),await ou(e,s)}}async function ou(e,t,n){if(!ro(t))throw t;e._u.add(1),await s8(e),e.gu.set("Offline"),n||(n=()=>sB(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{nV("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await s9(e)})}function oc(e,t){return t().catch(n=>ou(e,n,t))}async function oh(e){let t=oE(e),n=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;os(e)&&e.fu.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.fu.length&&t.Fo();break}n=r.batchId,function(e,t){e.fu.push(t);let n=oE(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}(e,r)}catch(i){await ou(e,i)}od(e)&&of(e)}function od(e){return os(e)&&!oE(e).No()&&e.fu.length>0}function of(e){oE(e).start()}async function op(e){oE(e).eu()}async function om(e){let t=oE(e);for(let n of e.fu)t.Xo(n.mutations)}async function og(e,t,n){let r=e.fu.shift(),i=sm.from(r,t,n);await oc(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await oh(e)}async function oy(e,t){t&&oE(e).Yo&&await async function(e,t){var n;if(function(e){switch(e){default:return nz();case nK.CANCELLED:case nK.UNKNOWN:case nK.DEADLINE_EXCEEDED:case nK.RESOURCE_EXHAUSTED:case nK.INTERNAL:case nK.UNAVAILABLE:case nK.UNAUTHENTICATED:return!1;case nK.INVALID_ARGUMENT:case nK.NOT_FOUND:case nK.ALREADY_EXISTS:case nK.PERMISSION_DENIED:case nK.FAILED_PRECONDITION:case nK.ABORTED:case nK.OUT_OF_RANGE:case nK.UNIMPLEMENTED:case nK.DATA_LOSS:return!0}}(n=t.code)&&n!==nK.ABORTED){let r=e.fu.shift();oE(e).Mo(),await oc(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await oh(e)}}(e,t),od(e)&&of(e)}async function ov(e,t){e.asyncQueue.verifyOperationInProgress(),nV("RemoteStore","RemoteStore received new credentials");let n=os(e);e._u.add(3),await s8(e),n&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await s9(e)}async function ow(e,t){t?(e._u.delete(2),await s9(e)):t||(e._u.add(2),await s8(e),e.gu.set("Unknown"))}function ob(e){var t,n,r;return e.pu||(e.pu=(t=e.datastore,n=e.asyncQueue,r={Yr:oo.bind(null,e),Zr:oa.bind(null,e),Wo:ol.bind(null,e)},t.su(),new s2(n,t.connection,t.authCredentials,t.appCheckCredentials,t.yt,r)),e.wu.push(async t=>{t?(e.pu.Mo(),oi(e)?or(e):e.gu.set("Unknown")):(await e.pu.stop(),e.yu=void 0)})),e.pu}function oE(e){var t,n,r;return e.Iu||(e.Iu=(t=e.datastore,n=e.asyncQueue,r={Yr:op.bind(null,e),Zr:oy.bind(null,e),tu:om.bind(null,e),Zo:og.bind(null,e)},t.su(),new s3(n,t.connection,t.authCredentials,t.appCheckCredentials,t.yt,r)),e.wu.push(async t=>{t?(e.Iu.Mo(),await oh(e)):(await e.Iu.stop(),e.fu.length>0&&(nV("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oI{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nW,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,o=new oI(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nH(nK.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oT(e,t){if(nq("AsyncQueue",`${t}: ${e}`),ro(e))return new nH(nK.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o_{constructor(e){this.comparator=e?(t,n)=>e(t,n)||rt.comparator(t.key,n.key):(e,t)=>rt.comparator(e.key,t.key),this.keyedMap=iz(),this.sortedSet=new rY(this.comparator)}static emptySet(e){return new o_(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof o_)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new o_;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oS{constructor(){this.Tu=new rY(rt.comparator)}track(e){let t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):nz():this.Tu=this.Tu.insert(t,e)}Eu(){let e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class ok{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new ok(e,t,o_.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oC{constructor(){this.Au=void 0,this.listeners=[]}}class oA{constructor(){this.queries=new iq(e=>il(e),ia),this.onlineState="Unknown",this.Ru=new Set}}async function oO(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new oC),r)try{i.Au=await e.onListen(n)}catch(o){let s=oT(o,`Initialization of query '${iu(t.query)}' failed`);return void t.onError(s)}e.queries.set(n,i),i.listeners.push(t),t.bu(e.onlineState),i.Au&&t.Pu(i.Au)&&oP(e)}async function oN(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let s=i.listeners.indexOf(t);s>=0&&(i.listeners.splice(s,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function oD(e,t){let n=!1;for(let r of t){let i=r.query,s=e.queries.get(i);if(s){for(let o of s.listeners)o.Pu(r)&&(n=!0);s.Au=r}}n&&oP(e)}function oR(e,t,n){let r=e.queries.get(t);if(r)for(let i of r.listeners)i.onError(n);e.queries.delete(t)}function oP(e){e.Ru.forEach(e=>{e.next()})}class oL{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new ok(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),r=!0):this.Cu(e,this.onlineState)&&(this.xu(e),r=!0),this.Su=e,r}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){return!e.fromCache||(!this.options.Nu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;let t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=ok.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ox{constructor(e){this.key=e}}class oM{constructor(e){this.key=e}}class oj{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=iQ(),this.mutatedKeys=iQ(),this.Gu=ih(e),this.Qu=new o_(this.Gu)}get ju(){return this.qu}Wu(e,t){let n=t?t.zu:new oS,r=t?t.Qu:this.Qu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1,a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=ic(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Hu(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Gu(c,a)>0||l&&0>this.Gu(c,l))&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let u="F"===this.query.limitType?s.last():s.first();s=s.delete(u.key),i=i.delete(u.key),n.track({type:1,doc:u})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;let i=e.zu.Eu();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nz()}};return n(e)-n(t)})(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);let s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return(this.Uu=o,0!==i.length||a)?{snapshot:new ok(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new oS,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.qu=this.qu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.qu=this.qu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];let e=this.Ku;this.Ku=iQ(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});let t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new oM(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new ox(n))}),t}tc(e){this.qu=e.Hi,this.Ku=iQ();let t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return ok.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class oF{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class oU{constructor(e){this.key=e,this.nc=!1}}class oV{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new iq(e=>il(e),ia),this.rc=new Map,this.oc=new Set,this.uc=new rY(rt.comparator),this.cc=new Map,this.ac=new sO,this.hc={},this.lc=new Map,this.fc=sT.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function oq(e,t){let n,r;let i=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=oK.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=o4.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=oW.bind(null,t),t.sc.Wo=oD.bind(null,t.eventManager),t.sc.wc=oR.bind(null,t.eventManager),t}(e),s=i.ic.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.ec();else{let o=await function(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Cs.getTargetData(e,t).next(i=>i?(r=i,rs.resolve(r)):n.Cs.allocateTargetId(e).next(i=>(r=new sy(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e})}(i.localStore,is(t));i.isPrimaryClient&&s7(i.remoteStore,o);let a=i.sharedClientState.addLocalQueryTarget(o.targetId);r=await oB(i,t,n=o.targetId,"current"===a,o.resumeToken)}return r}async function oB(e,t,n,r,i){e._c=(t,n,r)=>(async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await sz(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,i)));let s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return o0(e,t.targetId,o.Xu),o.snapshot})(e,t,n,r);let s=await sz(e.localStore,t,!0),o=new oj(t,s.Hi),a=o.Wu(s.documents),l=iY.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);o0(e,n,u.Xu);let c=new oF(t,n,o);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function o$(e,t){let n=e.ic.get(t),r=e.rc.get(n.targetId);if(r.length>1)return e.rc.set(n.targetId,r.filter(e=>!ia(e,t))),void e.ic.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await s$(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),oe(e.remoteStore,n.targetId),oY(e,n.targetId)}).catch(ri)):(oY(e,n.targetId),await s$(e.localStore,n.targetId,!0))}async function oz(e,t,n){let r=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=oG.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=oQ.bind(null,t),t}(e);try{var i,s;let o;let a=await function(e,t){let n,r;let i=n6.now(),s=t.reduce((e,t)=>e.add(t.key),iQ());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=iB,l=iQ();return e.Gi.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(r=>{n=r;let s=[];for(let a of t){let l=function(e,t){let n=null;for(let r of e.fieldTransforms){let i=t.data.field(r.field),s=ig(r.transform,i||null);null!=s&&(null===n&&(n=r4.empty()),n.set(r.field,s))}return n||null}(a,n.get(a.key).overlayedDocument);null!=l&&s.push(new iP(a.key,l,function e(t){let n=[];return rh(t.fields,(t,r)=>{let i=new re([t]);if(rR(r)){let s=e(r.mapValue).fields;if(0===s.length)n.push(i);else for(let o of s)n.push(i.child(o))}else n.push(i)}),new r3(n)}(l.value.mapValue),ik.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:iK(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(a.batchId),i=r,s=a.batchId,(o=i.hc[i.currentUser.toKey()])||(o=new rY(n3)),o=o.insert(s,n),i.hc[i.currentUser.toKey()]=o,await o2(r,a.changes),await oh(r.remoteStore)}catch(u){let l=oT(u,"Failed to persist write");n.reject(l)}}async function oK(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var s;let o,a;let l=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;let u=[];t.targetChanges.forEach((s,o)=>{var a;let l=i.get(o);if(!l)return;u.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,o).next(()=>n.Cs.addMatchingKeys(e,s.addedDocuments,o)));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(o)?c=c.withResumeToken(rp.EMPTY_BYTE_STRING,n5.min()).withLastLimboFreeSnapshotVersion(n5.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(o,c),a=c,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(n.Cs.updateTargetData(e,c))});let c=iB,h=iQ();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),u.push((s=t.documentUpdates,o=iQ(),a=iQ(),s.forEach(e=>o=o.add(e)),l.getEntries(e,o).next(e=>{let t=iB;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(n)),r.isNoDocument()&&r.version.isEqual(n5.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):nV("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Wi:t,zi:a}})).next(e=>{c=e.Wi,h=e.zi})),!r.isEqual(n5.min())){let d=n.Cs.getLastRemoteSnapshotVersion(e).next(t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r));u.push(d)}return rs.waitFor(u).next(()=>l.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,c,h)).next(()=>c)}).then(e=>(n.qi=i,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.cc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||nz(),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?r.nc||nz():t.removedDocuments.size>0&&(r.nc||nz(),r.nc=!1))}),await o2(e,n,t)}catch(r){await ri(r)}}function oH(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let i=[];r.ic.forEach((e,n)=>{let r=n.view.bu(t);r.snapshot&&i.push(r.snapshot)}),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(let i of n.listeners)i.bu(t)&&(r=!0)}),r&&oP(n)}(r.eventManager,t),i.length&&r.sc.Wo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function oW(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.cc.get(t),s=i&&i.key;if(s){let o=new rY(rt.comparator);o=o.insert(s,r6.newNoDocument(s,n5.min()));let a=iQ().add(s),l=new iJ(n5.min(),new Map,new r1(n3),o,a);await oK(r,l),r.uc=r.uc.remove(s),r.cc.delete(t),o1(r)}else await s$(r.localStore,t,!1).then(()=>oY(r,t,n)).catch(ri)}async function oG(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),o=rs.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||nz(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=iQ();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});oJ(e,r,null),oX(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await o2(e,i)}catch(s){await ri(s)}}async function oQ(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||nz(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});oJ(e,t,n),oX(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await o2(e,i)}catch(s){await ri(s)}}function oX(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function oJ(e,t,n){let r=e,i=r.hc[r.currentUser.toKey()];if(i){let s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function oY(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.rc.get(t)))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||oZ(e,t)})}function oZ(e,t){e.oc.delete(t.path.canonicalString());let n=e.uc.get(t);null!==n&&(oe(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),o1(e))}function o0(e,t,n){for(let r of n)r instanceof ox?(e.ac.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(nV("SyncEngine","New document in limbo: "+n),e.oc.add(r),o1(e))}(e,r)):r instanceof oM?(nV("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||oZ(e,r.key)):nz()}function o1(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){var t;let n=e.oc.values().next().value;e.oc.delete(n);let r=new rt(n8.fromString(n)),i=e.fc.next();e.cc.set(i,new oU(r)),e.uc=e.uc.insert(r,i),s7(e.remoteStore,new sy(is((t=r.path,new it(t))),i,2,ra.at))}}async function o2(e,t,n){let r=[],i=[],s=[];e.ic.isEmpty()||(e.ic.forEach((o,a)=>{s.push(e._c(a,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let s=sF.Ci(a.targetId,t);i.push(s)}}))}),await Promise.all(s),e.sc.Wo(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>rs.forEach(t,t=>rs.forEach(t.Si,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>rs.forEach(t.Di,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!ro(r))throw r;nV("LocalStore","Failed to update sequence numbers: "+r)}for(let i of t){let s=i.targetId;if(!i.fromCache){let o=n.qi.get(s),a=o.snapshotVersion,l=o.withLastLimboFreeSnapshotVersion(a);n.qi=n.qi.insert(s,l)}}}(e.localStore,i))}async function o3(e,t){let n=e;if(!n.currentUser.isEqual(t)){nV("SyncEngine","User change. New user:",t.toKey());let r=await sq(n.localStore,t);n.currentUser=t,n.lc.forEach(e=>{e.forEach(e=>{e.reject(new nH(nK.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.lc.clear(),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await o2(n,r.ji)}}function o4(e,t){let n=e.cc.get(t);if(n&&n.nc)return iQ().add(n.key);{let r=iQ(),i=e.rc.get(t);if(!i)return r;for(let s of i){let o=e.ic.get(s);r=r.unionWith(o.view.ju)}return r}}class o6{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=sZ(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){var t,n,r,i;return t=this.persistence,n=new sU,r=e.initialUser,i=this.yt,new sV(t,n,r,i)}yc(e){return new sx(sj.Bs,this.yt)}gc(e){return new sH}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class o5{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oH(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=o3.bind(null,this.syncEngine),await ow(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oA}createDatastore(e){var t,n,r;let i=sZ(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new sJ(t));return n=e.authCredentials,r=e.appCheckCredentials,new s4(n,r,s,i)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>oH(this.syncEngine,e,0),s=sG.C()?new sG:new sW,new s5(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){let a=new oV(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){nV("RemoteStore","RemoteStore shutting down."),e._u.add(5),await s8(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function o9(e,t,n){if(!n)throw new nH(nK.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function o8(e){if(!rt.isDocumentKey(e))throw new nH(nK.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function o7(e){if(rt.isDocumentKey(e))throw new nH(nK.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ae(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":nz()}function at(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new nH(nK.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ae(e);throw new nH(nK.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let an=new Map;class ar{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new nH(nK.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new nH(nK.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new nH(nK.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ai{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ar({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new nH(nK.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new nH(nK.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ar(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new nQ;switch(e.type){case"gapi":let t=e.client;return new nZ(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new nH(nK.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=an.get(e);t&&(nV("ComponentProvider","Removing Datastore"),an.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class as{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new as(this.firestore,e,this._key)}}class ao{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ao(this.firestore,e,this._query)}}class aa extends ao{constructor(e,t,n){super(e,t,new it(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new as(this.firestore,null,new rt(e))}withConverter(e){return new aa(this.firestore,e,this._path)}}function al(e,t,...n){if(e=(0,p.m9)(e),o9("collection","path",t),e instanceof ai){let r=n8.fromString(t,...n);return o7(r),new aa(e,null,r)}{if(!(e instanceof as||e instanceof aa))throw new nH(nK.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(n8.fromString(t,...n));return o7(i),new aa(e.firestore,null,i)}}function au(e,t,...n){if(e=(0,p.m9)(e),1==arguments.length&&(t=n2.R()),o9("doc","path",t),e instanceof ai){let r=n8.fromString(t,...n);return o8(r),new as(e,null,new rt(r))}{if(!(e instanceof as||e instanceof aa))throw new nH(nK.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(n8.fromString(t,...n));return o8(i),new as(e.firestore,e instanceof aa?e.converter:null,new rt(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ac{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):nq("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ah{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=nM.UNAUTHENTICATED,this.clientId=n2.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{nV("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(nV("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new nH(nK.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nW;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=oT(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ad(e,t){e.asyncQueue.verifyOperationInProgress(),nV("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await sq(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function af(e,t){e.asyncQueue.verifyOperationInProgress();let n=await ap(e);nV("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>ov(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ov(t.remoteStore,n)),e.onlineComponents=t}async function ap(e){return e.offlineComponents||(nV("FirestoreClient","Using default OfflineComponentProvider"),await ad(e,new o6)),e.offlineComponents}async function am(e){return e.onlineComponents||(nV("FirestoreClient","Using default OnlineComponentProvider"),await af(e,new o5)),e.onlineComponents}async function ag(e){let t=await am(e),n=t.eventManager;return n.onListen=oq.bind(null,t.syncEngine),n.onUnlisten=o$.bind(null,t.syncEngine),n}class ay{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new s0(this,"async_queue_retry"),this.Wc=()=>{let e=sY();e&&nV("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=sY();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;let t=sY();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});let t=new nW;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ro(e))throw e;nV("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{let t;this.Kc=e,this.Gc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw nq("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let r=oI.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.Uc.push(r),r}zc(){this.Kc&&nz()}verifyOperationInProgress(){}async Xc(){let e;do await (e=this.Bc);while(e!==this.Bc)}Zc(e){for(let t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Uc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class av extends ai{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ay,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aE(this),this._firestoreClient.terminate()}}function aw(e,t){let n="object"==typeof e?e:(0,h.Mq)(),r=(0,h.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let i=(0,p.P0)("firestore");i&&function(e,t,n,r={}){var i;let s=(e=at(e,ai))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&nB("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if("string"==typeof r.mockUserToken)o=r.mockUserToken,a=nM.MOCK_USER;else{o=(0,p.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new nH(nK.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nM(l)}e._authCredentials=new nX(new nG(o,a))}}(r,...i)}return r}function ab(e){return e._firestoreClient||aE(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function aE(e){var t,n,r,i;let s=e._freezeSettings(),o=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new rl(n,r,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new ah(e._authCredentials,e._appCheckCredentials,e._queue,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aI{constructor(e){this._byteString=e}static fromBase64String(e){try{return new aI(rp.fromBase64String(e))}catch(t){throw new nH(nK.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new aI(rp.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aT{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new nH(nK.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aS{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new nH(nK.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new nH(nK.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return n3(this._lat,e._lat)||n3(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ak=/^__.*__$/;class aC{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new iP(e,this.data,this.fieldMask,t,this.fieldTransforms):new iR(e,this.data,t,this.fieldTransforms)}}class aA{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new iP(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aO(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nz()}}class aN{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new aN(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return aq(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(aO(this.sa)&&ak.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class aD{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||sZ(e)}da(e,t,n,r=!1){return new aN({sa:e,methodName:t,fa:n,path:re.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function aR(e){let t=e._freezeSettings(),n=sZ(e._databaseId);return new aD(e._databaseId,!!t.ignoreUndefinedProperties,n)}class aP extends a_{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof aP}}function aL(e,t){if(aM(e=(0,p.m9)(e)))return aj("Unsupported field value:",t,e),ax(e,t);if(e instanceof a_)return function(e,t){if(!aO(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let s=aL(i,t.aa(r));null==s&&(s={nullValue:"NULL_VALUE"}),n.push(s),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,p.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.yt,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!rf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?ip(r):id(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let s=n6.fromDate(e);return{timestampValue:se(t.yt,s)}}if(e instanceof n6){let o=new n6(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:se(t.yt,o)}}if(e instanceof aS)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof aI)return{bytesValue:st(t.yt,e._byteString)};if(e instanceof as){let a=t.databaseId,l=e.firestore._databaseId;if(!l.isEqual(a))throw t.ha(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:sr(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${ae(e)}`)}(e,t)}function ax(e,t){let n={};return rd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rh(e,(e,r)=>{let i=aL(r,t.ra(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function aM(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof n6||e instanceof aS||e instanceof aI||e instanceof as||e instanceof a_)}function aj(e,t,n){if(!aM(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=ae(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function aF(e,t,n){if((t=(0,p.m9)(t))instanceof aT)return t._internalPath;if("string"==typeof t)return aV(e,t);throw aq("Field path arguments must be of type string or ",e,!1,void 0,n)}let aU=RegExp("[~\\*/\\[\\]]");function aV(e,t,n){if(t.search(aU)>=0)throw aq(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new aT(...t.split("."))._internalPath}catch(r){throw aq(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function aq(e,t,n,r,i){let s=r&&!r.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new nH(nK.INVALID_ARGUMENT,a+e+l)}function aB(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a${constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new as(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new az(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(aK("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class az extends a${data(){return super.data()}}function aK(e,t){return"string"==typeof t?aV(e,t):t instanceof aT?t._internalPath:t._delegate._internalPath}class aH{convertValue(e,t="none"){switch(rI(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ry(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rv(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw nz()}}convertObject(e,t){let n={};return rh(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new aS(ry(e.latitude),ry(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return rw(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(rb(e));default:return null}}convertTimestamp(e){let t=rg(e);return new n6(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=n8.fromString(e);sf(n)||nz();let r=new ru(n.get(1),n.get(3)),i=new rt(n.popFirst(5));return r.isEqual(t)||nq(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aW{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aG extends a${constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new aQ(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(aK("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class aQ extends aG{data(e={}){return super.data(e)}}class aX{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new aW(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new aQ(this._firestore,this._userDataWriter,n.key,n,new aW(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new nH(nK.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let n=0;return e._snapshot.docChanges.map(t=>{let r=new aQ(e._firestore,e._userDataWriter,t.doc.key,t.doc,new aW(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:r,oldIndex:-1,newIndex:n++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new aQ(e._firestore,e._userDataWriter,t.doc.key,t.doc,new aW(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nz()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class aJ extends aH{constructor(e){super(),this.firestore=e}convertBytes(e){return new aI(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new as(this.firestore,null,t)}}function aY(e){e=at(e,ao);let t=at(e.firestore,av),n=ab(t),r=new aJ(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new nH(nK.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new nW;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new ac({next(n){t.enqueueAndForget(()=>oN(e,o)),n.fromCache&&"server"===r.source?i.reject(new nH(nK.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new oL(n,s,{includeMetadataChanges:!0,Nu:!0});return oO(e,o)})(await ag(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new aX(t,r,e,n)))}function aZ(e,t,n,...r){let i;e=at(e,as);let s=at(e.firestore,av),o=aR(s);return i="string"==typeof(t=(0,p.m9)(t))||t instanceof aT?function(e,t,n,r,i,s){let o=e.da(1,t,n),a=[aF(t,r,n)],l=[i];if(s.length%2!=0)throw new nH(nK.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let u=0;u<s.length;u+=2)a.push(aF(t,s[u])),l.push(s[u+1]);let c=[],h=r4.empty();for(let d=a.length-1;d>=0;--d)if(!aB(c,a[d])){let f=a[d],m=l[d];m=(0,p.m9)(m);let g=o.ca(f);if(m instanceof aP)c.push(f);else{let y=aL(m,g);null!=y&&(c.push(f),h.set(f,y))}}let v=new r3(c);return new aA(h,v,o.fieldTransforms)}(o,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.da(1,t,n);aj("Data must be an object, but it was:",i,r);let s=[],o=r4.empty();rh(r,(e,r)=>{let a=aV(t,e,n);r=(0,p.m9)(r);let l=i.ca(a);if(r instanceof aP)s.push(a);else{let u=aL(r,l);null!=u&&(s.push(a),o.set(a,u))}});let a=new r3(s);return new aA(o,a,i.fieldTransforms)}(o,"updateDoc",e._key,t),a1(s,[i.toMutation(e._key,ik.exists(!0))])}function a0(e,t){var n,r;let i=at(e.firestore,av),s=au(e),o=(n=e.converter)?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t;return a1(i,[(function(e,t,n,r,i,s={}){let o,a;let l=e.da(s.merge||s.mergeFields?2:0,t,n,i);aj("Data must be an object, but it was:",l,r);let u=ax(r,l);if(s.merge)o=new r3(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let c=[];for(let h of s.mergeFields){let d=aF(t,h,n);if(!l.contains(d))throw new nH(nK.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);aB(c,d)||c.push(d)}o=new r3(c),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new aC(new r4(u),o,a)})(aR(e.firestore),"addDoc",s._key,o,null!==e.converter,{}).toMutation(s._key,ik.exists(!1))]).then(()=>s)}function a1(e,t){return function(e,t){let n=new nW;return e.asyncQueue.enqueueAndForget(async()=>oz(await am(e).then(e=>e.syncEngine),t,n)),n.promise}(ab(e),t)}!function(e,t=!0){nj=h.Jn,(0,h.Xd)(new d.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new av(new nJ(e.getProvider("auth-internal")),new n1(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new nH(nK.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ru(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,h.KN)(nx,"3.8.1",void 0),(0,h.KN)(nx,"3.8.1","esm2017")}()},6531:function(e,t,n){"use strict";var r;let i,s;n.d(t,{X3:function(){return m}});let o=(e,t)=>t.some(t=>e instanceof t),a=new WeakMap,l=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(f(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&a.set(t,e)}).catch(()=>{}),h.set(t,e),t}(e);if(c.has(e))return c.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),f(a.get(this))}:function(...e){return f(t.apply(p(this),e))}:function(e,...n){let r=t.call(p(this),e,...n);return u.set(r,e.sort?e.sort():[e]),f(r)}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});l.set(e,t)}(t),o(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,d):t;return n!==e&&(c.set(e,n),h.set(n,e)),n}let p=e=>h.get(e);function m(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(e,t),a=f(o);return r&&o.addEventListener("upgradeneeded",e=>{r(f(o.result),e.oldVersion,e.newVersion,f(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}let g=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],v=new Map;function w(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(v.get(t))return v.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||g.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return v.set(t,s),s}d={...r=d,get:(e,t,n)=>w(e,t)||r.get(e,t,n),has:(e,t)=>!!w(e,t)||r.has(e,t)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);