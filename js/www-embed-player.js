(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function u(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return ja(a,a)}
function ja(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ma});
var oa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if(typeof Object.setPrototypeOf=="function")qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function z(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function va(){this.B=!1;this.u=null;this.i=void 0;this.h=1;this.D=this.o=0;this.R=this.j=null}
function wa(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
va.prototype.H=function(a){this.i=a};
function xa(a,b){a.j={exception:b,gd:!0};a.h=a.o||a.D}
va.prototype.return=function(a){this.j={return:a};this.h=this.D};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.F=function(a){this.h=a};
function ya(a,b,c){a.o=b;c!=void 0&&(a.D=c)}
function za(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Aa(a){var b=a.R.splice(0)[0];(b=a.j=a.j||b)?b.gd?a.h=a.o||a.D:b.F!=void 0&&a.D<b.F?(a.h=b.F,a.j=null):a.h=a.D:a.h=0}
function Ba(a){this.h=new va;this.i=a}
function Ca(a,b){wa(a.h);var c=a.h.u;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.u=null,xa(a.h,g),Ea(a)}a.h.u=null;d.call(a.h,f);return Ea(a)}
function Ea(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.gd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){wa(a.h);a.h.u?b=Da(a,a.h.u.next,b,a.h.H):(a.h.H(b),b=Ea(a));return b};
this.throw=function(b){wa(a.h);a.h.u?b=Da(a,a.h.u["throw"],b,a.h.H):(xa(a.h,b),b=Ea(a));return b};
this.return=function(b){return Ca(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ga(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ga(new Fa(new Ba(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return pa});
u("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.B=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.D()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.D=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Z),reject:g(this.D)}};
b.prototype.Z=function(g){if(g===this)this.D(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.Y(g):this.u(g)}};
b.prototype.Y=function(g){var h=void 0;try{h=g.then}catch(k){this.D(k);return}typeof h=="function"?this.ta(h,g):this.u(g)};
b.prototype.D=function(g){this.H(2,g)};
b.prototype.u=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ga();this.R()};
b.prototype.ga=function(){var g=this;e(function(){if(g.U()){var h=ea.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.B)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.R=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ia=function(g){var h=this.o();g.Xb(h.resolve,h.reject)};
b.prototype.ta=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(v){try{l(p(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.Xb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Xb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).Xb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){p[v]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).Xb(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||ua});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("globalThis",function(a){return a||ea});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&la(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
function Ia(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ia(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ka=Ka||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function La(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Oa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Qa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(Math.random()*1E9>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Wa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ua:Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(){return Date.now()}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
Za($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var bb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var db=globalThis.trustedTypes,eb;function fb(){var a=null;if(!db)return a;try{var b=function(c){return c};
a=db.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function gb(){eb===void 0&&(eb=fb());return eb}
;function hb(a){this.h=a}
hb.prototype.toString=function(){return this.h+""};
function ib(a){var b=gb();return new hb(b?b.createScriptURL(a):a)}
function jb(a){if(a instanceof hb)return a.h;throw Error("");}
;var kb=ha([""]),lb=ja(["\x00"],["\\0"]),mb=ja(["\n"],["\\n"]),nb=ja(["\x00"],["\\u0000"]);function ob(a){return a.toString().indexOf("`")===-1}
ob(function(a){return a(kb)})||ob(function(a){return a(lb)})||ob(function(a){return a(mb)})||ob(function(a){return a(nb)});function pb(a){this.h=a}
pb.prototype.toString=function(){return this.h};
var qb=new pb("about:invalid#zClosurez");function rb(a){this.te=a}
function sb(a){return new rb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var tb=[sb("data"),sb("http"),sb("https"),sb("mailto"),sb("ftp"),new rb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],ub=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function vb(a){if(a instanceof pb)if(a instanceof pb)a=a.h;else throw Error("");else a=ub.test(a)?a:void 0;return a}
;function wb(a,b){b=vb(b);b!==void 0&&(a.href=b)}
;function xb(){this.h=yb[0].toLowerCase()}
xb.prototype.toString=function(){return this.h};function zb(a){this.h=a}
zb.prototype.toString=function(){return this.h+""};function Ab(a){var b="true".toString(),c=[new xb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof xb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Bb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Cb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Db(a,b){if(b instanceof hb)a.href=jb(b).toString(),a.rel="stylesheet";else{if(Cb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=vb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function Eb(a){a=a===void 0?document:a;var b,c;a=(c=(b="document"in a?a.document:a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Fb(a){this.h=a}
Fb.prototype.toString=function(){return this.h+""};function Gb(a){var b=Eb(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function Hb(a,b){if(b instanceof Fb)b=b.h;else throw Error("");a.textContent=b;Gb(a)}
function Ib(a,b){a.src=jb(b);Gb(a)}
;var Jb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Kb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Lb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Mb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Nb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Kb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ob(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Pb(a,b){b=Jb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Qb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Rb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Sb(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Tb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ub[c])c=Ub[c];else{c=String(c);if(!Ub[c]){var f=/function\s+([^\(]+)/m.exec(c);Ub[c]=f?f[1]:"[Anonymous]"}c=Ub[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Tb(a,b){b||(b={});b[Vb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Vb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Tb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Vb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Tb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Vb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Ub={};function Wb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Xb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yb(a){return a?decodeURI(a):a}
function Zb(a,b){return b.match(Xb)[a]||null}
function $b(a){return Yb(Zb(3,a))}
function ac(a){var b=a.match(Xb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function bc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
function ec(a,b){b=dc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function fc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var hc=/#|$/,ic=/[?&]($|#)/;function jc(a,b){for(var c=a.search(hc),d=0,e,f=[];(e=fc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(ic,"$1")}
;function kc(a){var b=b===void 0?Number("33"):b;for(var c=[],d=0;d<lc(a,mc,1).length;d++){var e=lc(a,mc,1)[d];nc(e,2)<=b&&c.push(Number(nc(e,1)))}return c}
function oc(a){var b=b===void 0?Number("33"):b;for(var c=[],d=0;d<lc(a,mc,1).length;d++){var e=lc(a,mc,1)[d];nc(e,2)>b&&c.push(Number(nc(e,1)))}return c}
;function pc(a){return{fieldType:2,fieldName:a}}
function F(a){return{fieldType:3,fieldName:a}}
;function qc(a){this.h=a;a.Ha("/client_streamz/bg/fic",F("ke"))}
function rc(a){this.h=a;a.Ha("/client_streamz/bg/fiec",F("ke"),pc("ec"))}
function sc(a){this.h=a;a.kb("/client_streamz/bg/fil",F("ke"))}
sc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function tc(a){this.h=a;a.Ha("/client_streamz/bg/fcc",pc("ph"),F("ke"))}
function uc(a){this.h=a;a.kb("/client_streamz/bg/fcd",pc("ph"),F("ke"))}
uc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function vc(a){this.h=a;a.Ha("/client_streamz/bg/fsc",F("ke"))}
function wc(a){this.h=a;a.kb("/client_streamz/bg/fsl",F("ke"))}
wc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};
function xc(a){this.h=a;a.kb("/client_streamz/bg/frs",F("ke"))}
xc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function yc(a){this.h=a;a.kb("/client_streamz/bg/wrl",F("mn"),pc("ac"),pc("sc"),F("rk"),F("mk"))}
yc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function zc(a){this.h=a;a.Ha("/client_streamz/bg/ec",F("en"),F("mk"))}
function Ac(a){this.h=a;a.kb("/client_streamz/bg/el",F("en"),F("rk"),F("mk"))}
Ac.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Bc(a){this.h=a;a.Ha("/client_streamz/bg/cec",pc("ec"),F("rk"),F("mk"))}
function Cc(a){a.Ha("/client_streamz/bg/po/csc",pc("cs"),F("rk"),F("mk"))}
function Dc(a){a.Ha("/client_streamz/bg/po/ctav",F("av"),F("rk"),F("mk"))}
function Ec(a){a.Ha("/client_streamz/bg/po/cwsc",F("su"),F("rk"),F("mk"))}
;function Fc(a){C.setTimeout(function(){throw a;},0)}
;var Gc=La(610401301,!1),Hc=La(653718497,La(1,!0));function Ic(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Jc,Kc=C.navigator;Jc=Kc?Kc.userAgentData||null:null;function Lc(a){return Gc?Jc?Jc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function H(a){return Ic().indexOf(a)!=-1}
;function Mc(){return Gc?!!Jc&&Jc.brands.length>0:!1}
function Nc(){return Mc()?!1:H("Opera")}
function Oc(){return H("Firefox")||H("FxiOS")}
function Pc(){return Mc()?Lc("Chromium"):(H("Chrome")||H("CriOS"))&&!(Mc()?0:H("Edge"))||H("Silk")}
;function Qc(){return Gc?!!Jc&&!!Jc.platform:!1}
function Rc(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;var Sc=Nc(),Tc=Mc()?!1:H("Trident")||H("MSIE"),Uc=H("Edge"),Vc=H("Gecko")&&!(Ic().toLowerCase().indexOf("webkit")!=-1&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Wc=Ic().toLowerCase().indexOf("webkit")!=-1&&!H("Edge");Wc&&H("Mobile");Qc()||H("Macintosh");Qc()||H("Windows");(Qc()?Jc.platform==="Linux":H("Linux"))||Qc()||H("CrOS");var Xc=Qc()?Jc.platform==="Android":H("Android");Rc();H("iPad");H("iPod");Rc()||H("iPad")||H("iPod");Ic().toLowerCase().indexOf("kaios");Oc();var Yc=Rc()||H("iPod"),Zc=H("iPad");!H("Android")||Pc()||Oc()||Nc()||H("Silk");Pc();var $c=H("Safari")&&!(Pc()||(Mc()?0:H("Coast"))||Nc()||(Mc()?0:H("Edge"))||(Mc()?Lc("Microsoft Edge"):H("Edg/"))||(Mc()?Lc("Opera"):H("OPR"))||Oc()||H("Silk")||H("Android"))&&!(Rc()||H("iPad")||H("iPod"));var ad={},bd=null;function cd(a,b){Pa(a);b===void 0&&(b=0);dd();b=ad[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function ed(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;fd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function fd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=bd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
dd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function dd(){if(!bd){bd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));ad[c]=d;for(var e=0;e<d.length;e++){var f=d[e];bd[f]===void 0&&(bd[f]=e)}}}}
;var gd=typeof Uint8Array!=="undefined",hd=!Tc&&typeof btoa==="function";function id(a){if(!hd)return cd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var jd=/[-_.]/g,kd={"-":"+",_:"/",".":"="};function ld(a){return kd[a]||""}
function md(a){return gd&&a!=null&&a instanceof Uint8Array}
var nd={};function od(a,b){pd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
od.prototype.sizeBytes=function(){pd(nd);var a=this.h;if(a!=null&&!md(a))if(typeof a==="string")if(hd){jd.test(a)&&(a=a.replace(jd,ld));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=ed(a);else Oa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var qd;function pd(a){if(a!==nd)throw Error("illegal external caller");}
;var rd;function sd(){var a=Error();Rb(a,"incident");Fc(a)}
function td(a){a=Error(a);Rb(a,"warning");return a}
;function ud(){return typeof BigInt==="function"}
;function vd(a){return Array.prototype.slice.call(a)}
;var wd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function xd(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var yd=xd(),zd=xd("2ex"),Ad=xd("1oa");Math.max.apply(Math,ka(Object.values({ah:1,Yg:2,Xg:4,eh:8,dh:16,bh:32,Ff:64,gh:128,Wg:256,Vg:512,Zg:1024,Lf:2048,fh:4096,Mf:8192,Gf:16384})));var Bd=wd?function(a,b){a[yd]|=b}:function(a,b){a.Qa!==void 0?a.Qa|=b:Object.defineProperties(a,{Qa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},Cd=wd?function(a){return a[yd]|0}:function(a){return a.Qa|0},Dd=wd?function(a){return a[yd]}:function(a){return a.Qa},Ed=wd?function(a,b){a[yd]=b}:function(a,b){a.Qa!==void 0?a.Qa=b:Object.defineProperties(a,{Qa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Fd(a,b){Ed(b,(a|0)&-30975)}
function Gd(a,b){Ed(b,(a|34)&-30941)}
;var Hd={},Id={};function Jd(a){return!(!a||typeof a!=="object"||a.h!==Id)}
function Kd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Ld(a){return!Array.isArray(a)||a.length?!1:Cd(a)&1?!0:!1}
var Md,Nd=[];Ed(Nd,55);Md=Object.freeze(Nd);function Od(a){if(a&2)throw Error();}
var Pd=Object.freeze({}),Qd=Object.freeze({}),Rd=Object.freeze({});function Sd(a){a.sh=!0;return a}
;var Td=Sd(function(a){return typeof a==="number"}),Ud=Sd(function(a){return typeof a==="string"}),Vd=Sd(function(a){return typeof a==="boolean"});
function Wd(){var a=Xd;return Sd(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var Yd=Sd(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var Zd=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function $d(a){var b=a;if(Ud(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Td(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Zd?BigInt(a):a=Vd(a)?a?"1":"0":Ud(a)?a.trim()||"0":String(a)}
var fe=Sd(function(a){return Zd?a>=ae&&a<=be:a[0]==="-"?ce(a,de):ce(a,ee)}),de=Number.MIN_SAFE_INTEGER.toString(),ae=Zd?BigInt(Number.MIN_SAFE_INTEGER):void 0,ee=Number.MAX_SAFE_INTEGER.toString(),be=Zd?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ce(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var ge=0,he=0;function ie(a){var b=a>>>0;ge=b;he=(a-b)/4294967296>>>0}
function je(a){if(a<0){ie(0-a);var b=w(ke(ge,he));a=b.next().value;b=b.next().value;ge=a>>>0;he=b>>>0}else ie(a)}
function le(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else ud()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+me(c)+me(a));return c}
function me(a){a=String(a);return"0000000".slice(a.length)+a}
function ne(){var a=ge,b=he;b&2147483648?ud()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(ke(a,b)),a=b.next().value,b=b.next().value,a="-"+le(a,b)):a=le(a,b);return a}
function ke(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function oe(a){return a.displayName||a.name||"unknown type name"}
function pe(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Oa(a)+": "+a);return a}
var qe=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function re(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:qe.test(a)}
function se(a){if(typeof a!=="number")throw td("int32");if(!Number.isFinite(a))throw td("int32");return a|0}
function te(a){return a==null?a:se(a)}
function ue(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function ve(a){var b=0;b=b===void 0?0:b;if(!re(a))throw td("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return we(a);case "bigint":return String(BigInt.asIntN(64,a));default:return xe(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=$d(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=ud()?$d(BigInt.asIntN(64,BigInt(a))):$d(ye(a))),a;case "bigint":return $d(BigInt.asIntN(64,a));default:return Number.isSafeInteger(a)?$d(ze(a)):$d(xe(a))}case 0:switch(c){case "string":return we(a);
case "bigint":return $d(BigInt.asIntN(64,a));default:return ze(a)}default:return Bb(b,"Unknown format requested type for int64")}}
function Ae(a){return a==null?a:ve(a)}
function Be(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function ye(a){a.indexOf(".");if(Be(a))return a;if(a.length<16)je(Number(a));else if(ud())a=BigInt(a),ge=Number(a&BigInt(4294967295))>>>0,he=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");he=ge=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),he*=1E6,ge=ge*1E6+d,ge>=4294967296&&(he+=Math.trunc(ge/4294967296),he>>>=0,ge>>>=0);b&&(b=w(ke(ge,he)),a=b.next().value,b=b.next().value,ge=a,he=b)}return ne()}
function ze(a){re(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){je(a);var b=ge,c=he;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function xe(a){re(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Be(b)?a=b:(je(a),a=ne())}return a}
function we(a){re(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return ye(a)}
function Ce(a){if(a==null)return a;if(typeof a==="bigint")return fe(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=fe(a)?Number(a):String(a)),a;if(re(a))return typeof a==="number"?ze(a):we(a)}
function De(a){if(typeof a!=="string")throw Error();return a}
function Ee(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Fe(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+oe(b)+" but got "+(a&&oe(a.constructor)));}
function Ge(a,b,c){if(a!=null&&typeof a==="object"&&a.Ec===Hd)return a;if(Array.isArray(a)){var d=Cd(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Ed(a,e);return new b(a)}}
;function He(a){Ie===void 0&&(Ie=typeof Proxy==="function"?Je(Proxy):null);var b;(b=!Ie)||(Ke===void 0&&(Ke=typeof WeakMap==="function"?Je(WeakMap):null),b=!Ke);if(b)return a;if(b=Le(a))return b;if(Math.random()>.01)return a;Me(a);b=new Ie(a,{set:function(c,d,e){Ne();c[d]=e;return!0}});
Oe(a,b);return b}
function Ne(){sd()}
var Pe=void 0,Qe=void 0;function Le(a){var b;return(b=Pe)==null?void 0:b.get(a)}
function Re(a){var b;return((b=Qe)==null?void 0:b.get(a))||a}
function Oe(a,b){(Pe||(Pe=new Ke)).set(a,b);(Qe||(Qe=new Ke)).set(b,a)}
var Ie=void 0,Ke=void 0;function Je(a){try{return a.toString().indexOf("[native code]")!==-1?a:null}catch(b){return null}}
var Se=void 0;function Me(a){if(Se===void 0){var b=new Ie([],{});Se=Array.prototype.concat.call([],b).length===1}Se&&typeof Symbol==="function"&&Symbol.isConcatSpreadable&&(a[Symbol.isConcatSpreadable]=!0)}
;var Te;function Ue(a,b){Cd(b);Te=b;a=new a(b);Te=void 0;return a}
function J(a,b,c){var d=d!=null?d:0;a==null&&(a=Te);Te=void 0;if(a==null){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");e=Cd(a);if(e&2048)throw Error("farr");if(e&64)return a;d===1||d===2||(e|=64);if(c&&(e|=512,c!==a[0]))throw Error("mid");a:{c=a;if(d=c.length){var f=d-1;if(Kd(c[f])){e|=256;b=f-(+!!(e&512)-1);if(b>=1024)throw Error("pvtlmt");e=e&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,d-(+!!(e&512)-1));if(b>1024)throw Error("spvt");
e=e&-33521665|(b&1023)<<15}}}Ed(a,e);return a}
;function Ve(a,b){return We(b)}
function We(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return fe(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Ld(a))return}else{if(md(a))return id(a);if(a instanceof od){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=id(b)}}}return a}
;function Xe(a,b,c){a=vd(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Ye(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Ld(a)?void 0:e&&Cd(a)&2?a:Ze(a,b,c,d!==void 0,e);else if(Kd(a)){var f={},g;for(g in a)f[g]=Ye(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Ze(a,b,c,d,e){var f=d||c?Cd(a):0;d=d?!!(f&32):void 0;a=vd(a);for(var g=0;g<a.length;g++)a[g]=Ye(a[g],b,c,d,e);c&&c(f,a);return a}
function $e(a){return a.Ec===Hd?a.toJSON():We(a)}
;function af(a,b,c){c=c===void 0?Gd:c;if(a!=null){if(gd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Cd(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Ed(a,(d|34)&-12293),a):Ze(a,af,d&4?Gd:c,!0,!0)}a.Ec===Hd&&(c=a.G,d=Dd(c),a=d&2?a:Ue(a.constructor,bf(c,d,!0)));return a}}
function bf(a,b,c){var d=c||b&2?Gd:Fd,e=!!(b&32);a=Xe(a,b,function(f){return af(f,e,d)});
Bd(a,32|(c?2:0));return a}
function cf(a){var b=a.G,c=Dd(b);return c&2?Ue(a.constructor,bf(b,c,!1)):a}
;function df(a,b){a=a.G;return ef(a,Dd(a),b)}
function ff(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function ef(a,b,c,d){if(c===-1)return null;var e=b>>15&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(ff(a,b,e,c)&&zd!=null){var g;a=(g=rd)!=null?g:rd={};g=a[zd]||0;g>=4||(a[zd]=g+1,sd())}return d}return ff(a,b,e,c)}}
function gf(a,b,c){var d=a.G,e=Dd(d);Od(e);hf(d,e,b,c);return a}
function hf(a,b,c,d){Kd(d);var e=b>>15&1023||536870912;if(c>=e){var f=b;if(b&256)var g=a[a.length-1];else{if(d==null)return f;g=a[e+(+!!(b&512)-1)]={};f|=256}g[c]=d;c<e&&(a[c+(+!!(b&512)-1)]=void 0);f!==b&&Ed(a,f);return f}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function jf(a){return kf(a,lf,11,!1)!==void 0}
function mf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function nf(a,b,c){var d=a.G,e=Dd(d);Od(e);if(b==null)return hf(d,e,3),a;b=Re(b);if(!Array.isArray(b))throw td();var f=Cd(b),g=f,h=!!(2&f)||Object.isFrozen(b),k=!h&&(void 0===Rd||void 0!==Qd);if(!(4&f))for(f=21,h&&(b=vd(b),g=0,f=of(f,e),f=pf(f,e,!0)),h=0;h<b.length;h++)b[h]=c(b[h]);k&&(b=vd(b),g=0,f=of(f,e),f=pf(f,e,!0));f!==g&&Ed(b,f);hf(d,e,3,b);return a}
function qf(a,b,c,d){a=a.G;var e=Dd(a);Od(e);if(d==null){var f=rf(a);if(sf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=rf(a);var g=sf(f,a,e,c);g!==b&&(g&&(e=hf(a,e,g)),f.set(c,b))}hf(a,e,b,d)}
function rf(a){if(wd){var b;return(b=a[Ad])!=null?b:a[Ad]=new Map}if(Ad in a)return a[Ad];b=new Map;Object.defineProperty(a,Ad,{value:b});return b}
function sf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];ef(b,c,g)!=null&&(e!==0&&(c=hf(b,c,e)),e=g)}a.set(d,e);return e}
function kf(a,b,c,d){a=a.G;var e=Dd(a);d=ef(a,e,c,d);b=Ge(d,b,e);b!==d&&b!=null&&hf(a,e,c,b);return b}
function tf(a,b,c,d){b=kf(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.G;d=Dd(a);if(!(d&2)){var e=cf(b);e!==b&&(b=e,hf(a,d,c,b))}return b}
function lc(a,b,c){var d=void 0===Pd?2:Hc?4:5;var e=Dd(a.G),f=e,g=!(2&e);a=a.G;d=(e=!!(2&f))?1:d;g&&(g=!e);e=ef(a,f,c);e=Array.isArray(e)?e:Md;var h=Cd(e),k=!!(4&h);if(!k){var l=h;l===0&&(l=of(l,f));h=e;l|=1;var m=f,n=!!(2&l);n&&(m|=2);for(var p=!n,t=!0,v=0,x=0;v<h.length;v++){var y=Ge(h[v],b,m);if(y instanceof b){if(!n){var G=!!(Cd(y.G)&2);p&&(p=!G);t&&(t=G)}h[x++]=y}}x<v&&(h.length=x);l|=4;l=t?l|16:l&-17;l=p?l|8:l&-9;Ed(h,l);n&&Object.freeze(h);h=l}if(g&&!(8&h||!e.length&&(d===1||d===4&&32&h))){mf(h)&&
(e=vd(e),h=of(h,f),f=hf(a,f,c,e));b=e;g=h;for(h=0;h<b.length;h++)l=b[h],m=cf(l),l!==m&&(b[h]=m);g|=8;g=b.length?g&-17:g|16;Ed(b,g);h=g}var I;if(d===1||d===4&&32&h){if(!mf(h)){f=h;var O=!!(32&h);h|=!e.length||16&h&&(!k||O)?2:2048;h!==f&&Ed(e,h);Object.freeze(e)}}else k=d!==5?!1:!!(32&h)||mf(h)||!!Le(e),(d===2||k)&&mf(h)&&(e=vd(e),h=of(h,f),h=pf(h,f,!1),Ed(e,h),f=hf(a,f,c,e)),mf(h)||(c=h,h=pf(h,f,!1),h!==c&&Ed(e,h)),k?I=He(e):d===2&&((O=Pe)==null||O.delete(e));return I||e}
function uf(a,b,c,d){d!=null?Fe(d,b):d=void 0;return gf(a,c,d)}
function vf(a,b,c,d){var e=a.G,f=Dd(e);Od(f);if(d==null)return hf(e,f,c),a;d=Re(d);if(!Array.isArray(d))throw td();for(var g=Cd(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),m=!l&&(void 0===Rd||void 0!==Qd),n=!0,p=!0,t=0;t<d.length;t++){var v=d[t];Fe(v,b);k||(v=!!(Cd(v.G)&2),n&&(n=!v),p&&(p=v))}k||(g|=5,g=n?g|8:g&-9,g=p?g|16:g&-17);if(m||l&&g!==h)d=vd(d),h=0,g=of(g,f),g=pf(g,f,!0);g!==h&&Ed(d,g);hf(e,f,c,d);return a}
function of(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function pf(a,b,c){32&b&&c||(a&=-33);return a}
function wf(a){a=df(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(BigInt.asIntN(64,a)):re(a)?c==="string"?we(a):b?xe(a):ze(a):void 0;return b}
function xf(a,b){return a!=null?a:b}
function yf(a){var b=b===void 0?!1:b;a=df(a,4);return xf(a==null||typeof a==="boolean"?a:typeof a==="number"?!!a:void 0,b)}
function nc(a,b,c){c=c===void 0?0:c;return xf(ue(df(a,b)),c)}
function zf(a,b){var c=c===void 0?"":c;a=df(a,b);return xf(a==null||typeof a==="string"?a:void 0,c)}
function Af(a){var b=0;b=b===void 0?0:b;a=df(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return xf(a,b)}
function Bf(a,b,c){return gf(a,b,Ee(c))}
function Cf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw td("enum");c|=0}return gf(a,b,c)}
;function Df(a){return a}
function Ef(a){return a}
function Ff(a,b,c,d){return Gf(a,b,c,d,Hf,If)}
function Jf(a,b,c,d){return Gf(a,b,c,d,Kf,Lf)}
function Gf(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var p=c[n];d&&n===c.length-1&&p===d||(l++,p!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Mf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;p=g;for(var v=m,x=c.length-1;x>=0;x--){var y=c[x];if(!(y==null||d&&x===c.length-1&&y===d)){y=x-b;var G=e(y,t)+f(n,p,v);G<l&&(a=1+y,l=G);n++;t--;v+=Mf(y);p=Math.max(p,y)}}b=e(0,0)+f(n,p,v);b<l&&(a=0,l=b);if(d){n=h;p=g;v=m;t=k;for(var I in d)d=+I,isNaN(d)||d>=
1024||(n--,t++,v-=I.length,g=e(d,t)+f(n,p,v),g<l&&(a=1+d,l=g))}return a}
function Lf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Kf(a,b){return(a>1?a-1:0)+(a-b)*4}
function If(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Hf(a){return 40+4*a}
function Mf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Nf,Of;function K(a,b,c){this.G=J(a,b,c)}
r=K.prototype;r.toJSON=function(){return Pf(this)};
r.serialize=function(a){try{return Of=!0,a&&(Nf=a===Ef||a!==Df&&a!==Ff&&a!==Jf?Ef:a),JSON.stringify(Pf(this),Ve)}finally{a&&(Nf=void 0),Of=!1}};
function Qf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Bd(b,32);return Ue(a,b)}
r.clone=function(){var a=this.G,b=Dd(a);return Ue(this.constructor,bf(a,b,!1))};
r.Ec=Hd;r.toString=function(){try{return Of=!0,Pf(this).toString()}finally{Of=!1}};
function Pf(a){var b;Of?b=a.G:b=Ze(a.G,$e,void 0,void 0,!1);var c=!Of,d=Dd(c?a.G:b);if(a=b.length){var e=b[a-1],f=Kd(e);f?a--:e=void 0;var g=+!!(d&512)-1,h=a-g;d=!!Nf&&!(d&512);var k,l=(k=Nf)!=null?k:Ef;k=d?l(h,g,b,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(b,0,a):b;if(f||h){b:{var m=d;var n=e;var p;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],v=l-g;t==null||Ld(t)||Jd(t)&&t.size===0||(f=m[l]=void 0,((f=p)!=null?f:p={})[v]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,((l=
p)!=null?l:p={})[x]=n[x];else if(t=n[x],Array.isArray(t)&&(Ld(t)||Jd(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(v=m.length;v<=t;v++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=p)!=null?l:p={})[x]=t);f||(p=n);if(p)for(var y in p){n=p;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(;a>0;a--){p=d[a-1];if(!(p==null||Ld(p)||Jd(p)&&p.size===0))break;var G=!0}if(d!==b||m||G){if(!h&&!c)d=Array.prototype.slice.call(d,0,a);else if(G||m||n)d.length=a;n&&d.push(n)}G=
d}else G=b;return G}
;function Rf(a){return function(b){return Qf(a,b)}}
;function Sf(a){this.G=J(a)}
z(Sf,K);function Tf(a,b){return nf(a,b,se)}
;function Uf(a){this.G=J(a)}
z(Uf,K);var Vf=[1,2,3];function Wf(a){this.G=J(a)}
z(Wf,K);var Xf=[1,2,3];function Yf(a){this.G=J(a)}
z(Yf,K);function Zf(a){this.G=J(a)}
z(Zf,K);function $f(a){this.G=J(a)}
z($f,K);function ag(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function bg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],y=e[3],G=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var I=y^v&(x^y);var O=1518500249}else I=v^x^y,O=1859775393;else t<60?(I=v&x|y&(v|x),O=2400959708):(I=v^x^y,O=3395469782);I=((n<<5|n>>>27)&4294967295)+I+G+O+p[t]&4294967295;G=y;y=x;x=(v<<30|v>>>2)&4294967295;v=n;n=I}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+G&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var v=24;v>=0;v-=8)n[p++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Td:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function cg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,dg(ag(d),a,c||null)].join(" "):null}
function dg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Kb(d,function(h){e.push(h)}),eg(e.join(" "));
var f=[],g=[];Kb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Kb(d,function(h){e.push(h)});
a=eg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function eg(a){var b=bg();b.update(a);return b.Td().toLowerCase()}
;var fg={};function gg(a){this.h=a||{cookie:""}}
r=gg.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Kb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.Oe;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Kb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=bb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Kb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=bb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var hg=new gg(typeof document=="undefined"?null:document);function ig(a){return!!fg.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function jg(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;ig(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new gg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");ig(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function kg(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new gg(document)).get(b));return a?cg(a,c,d):null}
function lg(a,b){b=b===void 0?!1:b;var c=ag(String(C.location.href)),d=[];if(jg(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new gg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?cg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&ig(b)&&((b=kg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),
(a=kg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function mg(){}
mg.prototype.compress=function(a){var b,c,d,e;return A(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
mg.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function ng(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function og(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?og.apply(null,d):ng(d)}}
;function L(){this.ea=this.ea;this.D=this.D}
L.prototype.ea=!1;L.prototype.dispose=function(){this.ea||(this.ea=!0,this.aa())};
L.prototype[Symbol.dispose]=function(){this.dispose()};
function pg(a,b){a.addOnDisposeCallback(Xa(ng,b))}
L.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.D||(this.D=[]),b&&(a=a.bind(b)),this.D.push(a))};
L.prototype.aa=function(){if(this.D)for(;this.D.length;)this.D.shift()()};function qg(a){this.G=J(a)}
z(qg,K);function rg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Ya()};
this.i=this.h()}
rg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
rg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
rg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
rg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function sg(a){this.G=J(a)}
z(sg,K);function tg(a){this.G=J(a)}
z(tg,K);function ug(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=ug.prototype;r.clone=function(){return new ug(this.x,this.y)};
r.equals=function(a){return a instanceof ug&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function vg(a,b){this.width=a;this.height=b}
r=vg.prototype;r.clone=function(){return new vg(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function wg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function xg(a){var b=yg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function zg(a){for(var b in a)return!1;return!0}
function Ag(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Bg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Cg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Dg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Eg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Eg(a[c]);return b}
var Fg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Fg.length;f++)c=Fg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Hg(a,b){this.h=a===Ig&&b||""}
Hg.prototype.toString=function(){return this.h};
var Ig={};new Hg(Ig,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Jg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Kg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Lg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Mg=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ng(a){this.h=this.i=this.j=a}
Ng.prototype.reset=function(){this.h=this.i=this.j};
Ng.prototype.getValue=function(){return this.i};function Og(a){this.G=J(a)}
z(Og,K);Og.prototype.cc=function(){return Af(this)};function Pg(a){this.G=J(a)}
z(Pg,K);function Qg(a){this.G=J(a)}
z(Qg,K);function Rg(a,b){vf(a,Pg,1,b)}
;function lf(a){this.G=J(a)}
z(lf,K);var Sg=["platform","platformVersion","architecture","model","uaFullVersion"],Tg=new Qg,Ug=null;function Vg(a,b){b=b===void 0?Sg:b;if(!Ug){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Pg;f=Bf(f,1,e.brand);return Bf(f,2,e.version)});
Rg(gf(Tg,2,pe(a.mobile)),c);Ug=a.getHighEntropyValues(b)}var d=new Set(b);return Ug.then(function(e){var f=Tg.clone();d.has("platform")&&Bf(f,3,e.platform);d.has("platformVersion")&&Bf(f,4,e.platformVersion);d.has("architecture")&&Bf(f,5,e.architecture);d.has("model")&&Bf(f,6,e.model);d.has("uaFullVersion")&&Bf(f,7,e.uaFullVersion);return f}).catch(function(){return Tg.clone()})}
;function Wg(a){this.G=J(a)}
z(Wg,K);function Zg(a){this.G=J(a,4)}
z(Zg,K);function $g(a){this.G=J(a,36)}
z($g,K);function ah(a){this.G=J(a,19)}
z(ah,K);ah.prototype.Nb=function(a){return Cf(this,2,a)};function bh(a){this.G=J(a,8)}
z(bh,K);var ch=Rf(bh);function dh(a){this.G=J(a)}
z(dh,K);var eh=new function(){this.ctor=dh;this.isRepeated=0;this.h=tf;this.defaultValue=void 0};function fh(a){L.call(this);var b=this;this.componentId="";this.j=[];this.ga="";this.pageId=null;this.ia=this.U=-1;this.B=this.experimentIds=null;this.R=this.u=0;this.ta=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Gb=a.Gb||function(){};
this.i=new gh(a.logSource,a.Za);this.network=a.network;this.wb=a.wb||null;this.bufferSize=1E3;this.H=a.rf||null;this.sessionIndex=a.sessionIndex||null;this.Eb=a.Eb||!1;this.logger=null;this.withCredentials=!a.Wc;this.Za=a.Za||!1;this.Z=typeof URLSearchParams!=="undefined"&&!!(new URL(hh())).searchParams&&!!(new URL(hh())).searchParams.set;var c=Cf(new Wg,1,1);ih(this.i,c);this.o=new Ng(1E4);a=jh(this,a.Rc);this.h=new rg(this.o.getValue(),a);this.Y=new rg(6E5,a);this.Eb||this.Y.start();this.Za||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.wc()}),document.addEventListener("pagehide",this.wc.bind(this)))}
z(fh,L);function jh(a,b){return a.Z?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
r=fh.prototype;r.aa=function(){this.wc();this.h.stop();this.Y.stop();L.prototype.aa.call(this)};
r.log=function(a){if(this.Z){a=a.clone();var b=this.ta++;a=gf(a,21,Ae(b));this.componentId&&Bf(a,26,this.componentId);if(wf(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";gf(b,1,Ae(c))}Ce(df(a,15))==null&&gf(a,15,Ae((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),uf(b,qg,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.u+=b);this.j.push(a);this.Eb||this.h.enabled||this.h.start()}};
r.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ia>d&&this.U<d)b&&b("throttled");else{this.network&&(typeof this.network.cc==="function"?kh(this.i,this.network.cc()):kh(this.i,0));var e=lh(this.i,this.j,this.u,this.R,this.wb);d={};var f=this.Gb();f&&(d.Authorization=f);this.H||(this.H=hh());try{var g=(new URL(this.H)).toString()}catch(t){g=(new URL(this.H,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.ga===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.u=0;var h=e.serialize(),k;this.B&&this.B.isSupported(h.length)&&(k=this.B.compress(h));var l={url:g.toString(),body:h,Ld:1,nc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},m=function(t){c.o.reset();
c.h.setInterval(c.o.getValue());if(t){var v=null;try{var x=JSON.stringify(JSON.parse(t.replace(")]}'\n","")));v=ch(x)}catch(y){}v&&(t=Number,x="-1",x=x===void 0?"0":x,x=xf(wf(v),x),t=t(x),t>0&&(c.U=Date.now(),c.ia=c.U+t),v=eh.ctor?eh.h(v,eh.ctor,175237375,!0):eh.h(v,175237375,null,!0),v=v===null?void 0:v)&&(v=nc(v,1,-1),v!==-1&&(c.o=new Ng(v<1?1:v),c.h.setInterval(c.o.getValue())))}a&&a();c.R=0},n=function(t,v){var x=lc(e,$g,3);
var y=Ce(df(e,14));y=y==null?void 0:y;var G=c.o;G.h=Math.min(3E5,G.h*2);G.i=Math.min(3E5,G.h+Math.round(.1*(Math.random()-.5)*2*G.h));c.h.setInterval(c.o.getValue());t===401&&f&&(c.ga=f);y&&(c.u+=y);v===void 0&&(v=c.isRetryable(t));v&&(c.j=x.concat(c.j),c.Eb||c.h.enabled||c.h.start());b&&b("net-send-failed",t);++c.R},p=function(){c.network&&c.network.send(l,m,n)};
k?k.then(function(t){l.nc["Content-Encoding"]="gzip";l.nc["Content-Type"]="application/binary";l.body=t;l.Ld=2;p()},function(){p()}):p()}}}};
r.wc=function(){mh(this.i,!0);this.flush();mh(this.i,!1)};
r.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function hh(){return"https://play.google.com/log?format=json&hasfast=true"}
function gh(a,b){this.Za=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new ah;Number.isInteger(a)&&this.h.Nb(a);b||(this.locale=document.documentElement.getAttribute("lang"));ih(this,new Wg)}
gh.prototype.Nb=function(a){this.h.Nb(a);return this};
function ih(a,b){uf(a.h,Wg,1,b);Af(b)||Cf(b,1,1);a.Za||(b=nh(a),zf(b,5)||Bf(b,5,a.locale));a.i&&(b=nh(a),tf(b,Qg,9)||uf(b,Qg,9,a.i))}
function kh(a,b){jf(oh(a))&&(a=ph(a),Cf(a,1,b))}
function mh(a,b){jf(oh(a))&&(a=ph(a),gf(a,2,pe(b)))}
function oh(a){return tf(a.h,Wg,1)}
function qh(a){var b=b===void 0?Sg:b;var c=a.Za?void 0:window;c?Vg(c,b).then(function(d){a.i=d;d=nh(a);uf(d,Qg,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function nh(a){a=oh(a);var b=tf(a,lf,11);b||(b=new lf,uf(a,lf,11,b));return b}
function ph(a){a=nh(a);var b=tf(a,Og,10);b||(b=new Og,gf(b,2,pe(!1)),uf(a,Og,10,b));return b}
function lh(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(jf(oh(a))){var h=ph(a);gf(h,3,te(d))}jf(oh(a))&&(d=ph(a),gf(d,4,te(f)));jf(oh(a))&&(f=ph(a),gf(f,5,te(g)));a=a.h.clone();g=Date.now().toString();a=gf(a,4,Ae(g));b=b.slice();b=vf(a,$g,3,b);e&&(a=new sg,e=gf(a,13,te(e)),a=new tg,e=uf(a,sg,2,e),a=new Zg,e=uf(a,tg,1,e),e=Cf(e,2,9),uf(b,Zg,18,e));c&&gf(b,14,Ae(c));return b}
;function rh(){this.Gd=typeof AbortController!=="undefined"}
rh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return A(function(v){switch(v.h){case 1:return f=(e=d.Gd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,ya(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.nc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.F(3);break}if((l=b)==null){v.F(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.R=[v.j];v.o=0;v.D=0;clearTimeout(f);Aa(v);break;case 2:m=za(v);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}v.F(3)}})};
rh.prototype.cc=function(){return 4};function sh(a,b){L.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.pageId=this.h=this.wb=null}
z(sh,L);function th(a,b){a.i=b;return a}
function uh(a,b){a.network=b;return a}
function vh(a,b){a.h=b}
sh.prototype.Wc=function(){this.u=!0;return this};
function wh(a){a.network||(a.network=new rh);var b=new fh({logSource:a.logSource,Gb:a.Gb?a.Gb:lg,sessionIndex:a.sessionIndex,rf:a.j,Za:a.o,Eb:!1,Wc:a.u,Rc:a.Rc,network:a.network});pg(a,b);if(a.i){var c=a.i,d=nh(b.i);Bf(d,7,c)}Math.random()<.01&&(b.B=new mg);a.componentId&&(b.componentId=a.componentId);a.wb&&(b.wb=a.wb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new qg),c=b.experimentIds,d=d.serialize(),Bf(c,4,d)):b.experimentIds&&gf(b.experimentIds,4));qh(b.i);
a.network.Nb&&a.network.Nb(a.logSource);a.network.Ze&&a.network.Ze(b);return b}
;function xh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;L.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new sh(a,"0"),a.componentId=b,pg(this,a),c!==""&&(a.j=c),d&&(a.o=!0),e&&th(a,e),g&&uh(a,g),b=wh(a));this.h=b}
z(xh,L);
xh.prototype.flush=function(a){var b=a||[];if(b.length){a=new $f;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Zf;f=Bf(f,1,e.i);var g=yh(e);f=nf(f,g,De);g=[];var h=[];for(var k=w(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.xc(l)||[],p=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new Wf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&qf(v,1,Xf,Ae(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);qf(v,2,Xf,x)}p.push(v)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Yf;p=uf(t,Wf,2,p);t=l;v=[];x=zh(e);for(var y=0;y<x.length;y++){var G=x[y],I=t[y],O=new Uf;switch(G){case 3:qf(O,1,Vf,Ee(String(I)));break;case 2:G=Number(I);Number.isFinite(G)&&qf(O,2,Vf,te(G));break;case 1:qf(O,3,Vf,pe(I==="true"))}v.push(O)}vf(p,Uf,1,v);g.push(p)}}vf(f,Yf,4,g);c.push(f);e.clear()}vf(a,Zf,1,c);b=this.h;if(a instanceof $g)b.log(a);else try{var T=new $g,Ja=a.serialize();var cb=Bf(T,8,Ja);b.log(cb)}catch(ca){}this.h.flush()}};function Ah(a){this.h=a}
;function Bh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function zh(a){return a.fields.map(function(b){return b.fieldType})}
function yh(a){return a.fields.map(function(b){return b.fieldName})}
r=Bh.prototype;r.Hd=function(a){var b=B.apply(1,arguments),c=this.xc(b);c?c.push(new Ah(a)):this.sd(a,b)};
r.sd=function(a){var b=this.Qc(B.apply(1,arguments));this.h.set(b,[new Ah(a)])};
r.xc=function(){var a=this.Qc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.de=function(){var a=this.xc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.Qc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Ch(a,b){Bh.call(this,a,3,b)}
z(Ch,Bh);Ch.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.de(b);d&&(c=d.h);this.sd(c+a,b)};function Dh(a,b){Bh.call(this,a,2,b)}
z(Dh,Bh);Dh.prototype.record=function(a){this.Hd(a,B.apply(1,arguments))};function Eh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Eh.prototype.stopPropagation=function(){this.j=!0};
Eh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Fh(a,b){Eh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(Fh,Eh);
Fh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Fh.Aa.preventDefault.call(this)};
Fh.prototype.stopPropagation=function(){Fh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Fh.prototype.preventDefault=function(){Fh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Gh="closure_listenable_"+(Math.random()*1E6|0);var Hh=0;function Ih(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.dc=e;this.key=++Hh;this.Mb=this.Wb=!1}
function Jh(a){a.Mb=!0;a.listener=null;a.proxy=null;a.src=null;a.dc=null}
;function Kh(a){this.src=a;this.listeners={};this.h=0}
Kh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Lh(a,b,d,e);g>-1?(b=a[g],c||(b.Wb=!1)):(b=new Ih(b,this.src,f,!!d,e),b.Wb=c,a.push(b));return b};
Kh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Lh(e,b,c,d);return b>-1?(Jh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Mh(a,b){var c=b.type;c in a.listeners&&Pb(a.listeners[c],b)&&(Jh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Lh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Mb&&f.listener==b&&f.capture==!!c&&f.dc==d)return e}return-1}
;var Nh="closure_lm_"+(Math.random()*1E6|0),Oh={},Ph=0;function Qh(a,b,c,d,e){if(d&&d.once)Rh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Qh(a,b[f],c,d,e);else c=Sh(c),a&&a[Gh]?a.listen(b,c,Qa(d)?!!d.capture:!!d,e):Th(a,b,c,!1,d,e)}
function Th(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Uh(a);h||(a[Nh]=h=new Kh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Vh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Mg||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Wh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ph++}}
function Vh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Xh;return a}
function Rh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Rh(a,b[f],c,d,e);else c=Sh(c),a&&a[Gh]?a.h.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Th(a,b,c,!0,d,e)}
function Yh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Yh(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Sh(c),a&&a[Gh])?a.h.remove(String(b),c,d,e):a&&(a=Uh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Lh(b,c,d,e)),(c=a>-1?b[a]:null)&&Zh(c))}
function Zh(a){if(typeof a!=="number"&&a&&!a.Mb){var b=a.src;if(b&&b[Gh])Mh(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Wh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ph--;(c=Uh(b))?(Mh(c,a),c.h==0&&(c.src=null,b[Nh]=null)):Jh(a)}}}
function Wh(a){return a in Oh?Oh[a]:Oh[a]="on"+a}
function Xh(a,b){if(a.Mb)a=!0;else{b=new Fh(b,this);var c=a.listener,d=a.dc||a.src;a.Wb&&Zh(a);a=c.call(d,b)}return a}
function Uh(a){a=a[Nh];return a instanceof Kh?a:null}
var $h="__closure_events_fn_"+(Math.random()*1E9>>>0);function Sh(a){if(typeof a==="function")return a;a[$h]||(a[$h]=function(b){return a.handleEvent(b)});
return a[$h]}
;function ai(){L.call(this);this.h=new Kh(this);this.ta=this;this.Z=null}
Za(ai,L);ai.prototype[Gh]=!0;r=ai.prototype;r.addEventListener=function(a,b,c,d){Qh(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Yh(this,a,b,c,d)};
function bi(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.ta;c=b.type||b;typeof b==="string"?b=new Eh(b,a):b instanceof Eh?b.target=b.target||a:(e=b,b=new Eh(c,a),Gg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=ci(g,c,!0,b)&&e}b.j||(g=b.h=a,e=ci(g,c,!0,b)&&e,b.j||(e=ci(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=ci(g,c,!1,b)&&e}
r.aa=function(){ai.Aa.aa.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
r.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Jh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function ci(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Mb&&g.capture==c){var h=g.listener,k=g.dc||g.src;g.Wb&&Mh(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function di(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
di.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ei(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function fi(){this.i=this.h=null}
fi.prototype.add=function(a,b){var c=gi.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
fi.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var gi=new di(function(){return new hi},function(a){return a.reset()});
function hi(){this.next=this.scope=this.h=null}
hi.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
hi.prototype.reset=function(){this.next=this.scope=this.h=null};var ii,ji=!1,ki=new fi;function li(a,b){ii||mi();ji||(ii(),ji=!0);ki.add(a,b)}
function mi(){var a=Promise.resolve(void 0);ii=function(){a.then(ni)}}
function ni(){for(var a;a=ki.remove();){try{a.h.call(a.scope)}catch(b){Fc(b)}ei(gi,a)}ji=!1}
;function oi(){}
function pi(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function qi(a){this.h=0;this.B=void 0;this.o=this.i=this.j=null;this.D=this.u=!1;if(a!=oi)try{var b=this;a.call(void 0,function(c){ri(b,2,c)},function(c){ri(b,3,c)})}catch(c){ri(this,3,c)}}
var si=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};
function ti(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
ti.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ui=new di(function(){return new ti},function(a){a.reset()});
function vi(a,b,c){var d=ui.get();d.i=a;d.h=b;d.context=c;return d}
function wi(a){return new qi(function(b,c){c(a)})}
qi.prototype.then=function(a,b,c){return xi(this,si(typeof a==="function"?a:null),si(typeof b==="function"?b:null),c)};
qi.prototype.$goog_Thenable=!0;r=qi.prototype;r.pc=function(a,b){return xi(this,null,si(a),b)};
r.catch=qi.prototype.pc;r.cancel=function(a){if(this.h==0){var b=new yi(a);li(function(){zi(this,b)},this)}};
function zi(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?zi(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):Ai(c),Bi(c,e,3,b)))}a.j=null}else ri(a,3,b)}
function Ci(a,b){a.i||a.h!=2&&a.h!=3||Di(a);a.o?a.o.next=b:a.i=b;a.o=b}
function xi(a,b,c,d){var e=vi(null,null,null);e.child=new qi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof yi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Ci(a,e);return e.child}
r.pf=function(a){this.h=0;ri(this,2,a)};
r.qf=function(a){this.h=0;ri(this,3,a)};
function ri(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.pf,f=a.qf;if(d instanceof qi){Ci(d,vi(e||oi,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if(typeof k==="function"){Ei(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.B=c,a.h=b,a.j=null,Di(a),b!=3||c instanceof yi||Fi(a,c))}}
function Ei(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Di(a){a.u||(a.u=!0,li(a.Yd,a))}
function Ai(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
r.Yd=function(){for(var a;a=Ai(this);)Bi(this,a,this.h,this.B);this.u=!1};
function Bi(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.D;a=a.j)a.D=!1;if(b.child)b.child.j=null,Gi(b,c,d);else try{b.j?b.i.call(b.context):Gi(b,c,d)}catch(e){Hi.call(null,e)}ei(ui,b)}
function Gi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Fi(a,b){a.D=!0;li(function(){a.D&&Hi.call(null,b)})}
var Hi=Fc;function yi(a){$a.call(this,a)}
Za(yi,$a);yi.prototype.name="cancel";function Ii(a,b){ai.call(this);this.j=a||1;this.i=b||C;this.o=Wa(this.lf,this);this.u=Ya()}
Za(Ii,ai);r=Ii.prototype;r.enabled=!1;r.Da=null;r.setInterval=function(a){this.j=a;this.Da&&this.enabled?(this.stop(),this.start()):this.Da&&this.stop()};
r.lf=function(){if(this.enabled){var a=Ya()-this.u;a>0&&a<this.j*.8?this.Da=this.i.setTimeout(this.o,this.j-a):(this.Da&&(this.i.clearTimeout(this.Da),this.Da=null),bi(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Da||(this.Da=this.i.setTimeout(this.o,this.j),this.u=Ya())};
r.stop=function(){this.enabled=!1;this.Da&&(this.i.clearTimeout(this.Da),this.Da=null)};
r.aa=function(){Ii.Aa.aa.call(this);this.stop();delete this.i};function Ji(a){L.call(this);this.H=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new Ii(this.flushInterval);this.h.listen("tick",this.yb,!1,this);pg(this,this.h)}
z(Ji,L);r=Ji.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Ki(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.yb()}
r.yb=function(){var a=this.i.values();a=[].concat(ka(a)).filter(function(b){return b.h.size});
a.length&&this.H.flush(a,this.u);Li(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Ha=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ch(a,b))};
r.kb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Dh(a,b))};
function Mi(a,b){return a.B.has(b)?void 0:a.i.get(b)}
r.hb=function(a){this.Fd(a,1,B.apply(1,arguments))};
r.Fd=function(a,b){var c=B.apply(2,arguments),d=Mi(this,a);d&&d instanceof Ch&&(d.j(b,c),Ki(this))};
r.record=function(a,b){var c=B.apply(2,arguments),d=Mi(this,a);d&&d instanceof Dh&&(d.record(b,c),Ki(this))};
function Li(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Ni(){}
Ni.prototype.serialize=function(a){var b=[];Oi(this,a,b);return b.join("")};
function Oi(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Oi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Pi(d,c),c.push(":"),Oi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Pi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Qi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ri=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Pi(a,b){b.push('"',a.replace(Ri,function(c){var d=Qi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Qi[c]=d);return d}),'"')}
;function Si(){ai.call(this);this.headers=new Map;this.i=!1;this.K=null;this.o=this.Y="";this.j=this.U=this.B=this.R=!1;this.H=0;this.u=null;this.ia="";this.ga=!1}
Za(Si,ai);var Ti=/^https?$/i,Ui=["POST","PUT"],Vi=[];function Wi(a,b,c,d,e,f,g){var h=new Si;Vi.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Pd,!0,void 0,void 0);f&&(h.H=Math.max(0,f));g&&(h.ga=g);h.send(a,c,d,e)}
r=Si.prototype;r.Pd=function(){this.dispose();Pb(Vi,this)};
r.send=function(a,b,c,d){if(this.K)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.R=!1;this.i=!0;this.K=new XMLHttpRequest;this.K.onreadystatechange=Wa(this.ld,this);try{this.getStatus(),this.U=!0,this.K.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Xi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=w(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Jb(Ui,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(d=b.next();!d.done;d=b.next())c=w(d.value),d=c.next().value,c=c.next().value,this.K.setRequestHeader(d,c);this.ia&&(this.K.responseType=this.ia);"withCredentials"in this.K&&this.K.withCredentials!==this.ga&&(this.K.withCredentials=this.ga);try{this.u&&(clearTimeout(this.u),this.u=null),this.H>0&&(this.getStatus(),this.u=setTimeout(this.nf.bind(this),this.H)),
this.getStatus(),this.B=!0,this.K.send(a),this.B=!1}catch(g){this.getStatus(),Xi(this,g)}};
r.nf=function(){typeof Ka!="undefined"&&this.K&&(this.o="Timed out after "+this.H+"ms, aborting",this.getStatus(),bi(this,"timeout"),this.abort(8))};
function Xi(a,b){a.i=!1;a.K&&(a.j=!0,a.K.abort(),a.j=!1);a.o=b;Yi(a);Zi(a)}
function Yi(a){a.R||(a.R=!0,bi(a,"complete"),bi(a,"error"))}
r.abort=function(){this.K&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.K.abort(),this.j=!1,bi(this,"complete"),bi(this,"abort"),Zi(this))};
r.aa=function(){this.K&&(this.i&&(this.i=!1,this.j=!0,this.K.abort(),this.j=!1),Zi(this,!0));Si.Aa.aa.call(this)};
r.ld=function(){this.ea||(this.U||this.B||this.j?$i(this):this.Ce())};
r.Ce=function(){$i(this)};
function $i(a){if(a.i&&typeof Ka!="undefined")if(a.B&&(a.K?a.K.readyState:0)==4)setTimeout(a.ld.bind(a),0);else if(bi(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(aj(a))bi(a,"complete"),bi(a,"success");else{try{var b=(a.K?a.K.readyState:0)>2?a.K.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Yi(a)}}finally{Zi(a)}}}
function Zi(a,b){if(a.K){a.u&&(clearTimeout(a.u),a.u=null);var c=a.K;a.K=null;b||bi(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.K};
r.isComplete=function(){return(this.K?this.K.readyState:0)==4};
function aj(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=Zb(1,String(a.Y)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Ti.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.K?this.K.readyState:0)>2?this.K.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function bj(){}
bj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Wi(a.url,function(d){d=d.target;if(aj(d)){try{var e=d.K?d.K.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.nc,a.timeoutMillis,a.withCredentials)};
bj.prototype.cc=function(){return 1};var cj={sa:"_",qc:"",Yc:[],hd:0};function dj(a,b){this.logger=a;this.event=b;this.startTime=ej()}
dj.prototype.done=function(){this.logger.Jb(this.event,ej()-this.startTime)};
function fj(){L.apply(this,arguments)}
z(fj,L);function gj(a,b){var c=ej();b=b();a.Jb("n",ej()-c);return b}
function hj(){fj.apply(this,arguments)}
z(hj,fj);r=hj.prototype;r.Bc=function(){};
r.rb=function(){};
r.Jb=function(){};
r.Ea=function(){};
r.Rb=function(){};
r.xd=function(){};
function ij(a){return{ke:new qc(a),ne:new sc(a),le:new rc(a),ff:new vc(a),gf:new wc(a),hf:new xc(a),Md:new tc(a),Nd:new uc(a),errorCount:new Bc(a),eventCount:new zc(a),Xd:new Ac(a),Kh:new yc(a),Mh:new Cc(a),kh:new Dc(a),Lh:new Ec(a)}}
function jj(a){var b=uh(th(new sh(1828,"0"),"33"),new bj);(a==null?0:a.length)&&vh(b,Tf(new Sf,a));a=new xh(1828,"","",!1,"",wh(b));pg(a,b);var c=new Ji(a);c.addOnDisposeCallback(function(){return void c.yb()});
pg(c,a);c.o=1E5;c.flushInterval=3E4;c.h.setInterval(3E4);return c}
function kj(a,b){L.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;b&&this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
z(kj,L);function lj(a){if(a.timer===void 0){var b=ej(),c=a.h+a.i-b;c>0?a.timer=setTimeout(function(){a.timer=void 0;lj(a)},c):(a.h=b,a.callback())}}
function mj(a,b,c){fj.call(this);this.metrics=a;this.sa=b;this.qc=c;this.h=new Map;this.i=new Map;this.h.set("h",1);this.h.set("u",2);this.h.set("k",3);this.i.set(25,1);this.i.set(26,2);this.i.set(27,3);this.i.set(28,4)}
z(mj,fj);mj.prototype.Bc=function(a){this.metrics.hf.record(a,this.sa)};
mj.prototype.rb=function(a){a==="t"?this.metrics.ke.h.hb("/client_streamz/bg/fic",this.sa):a==="n"?this.metrics.ff.h.hb("/client_streamz/bg/fsc",this.sa):a==="h"||a==="u"||a==="k"?(a=this.h.get(a))&&this.metrics.Md.h.hb("/client_streamz/bg/fcc",a,this.sa):this.metrics.eventCount.h.hb("/client_streamz/bg/ec",a,this.sa)};
mj.prototype.Jb=function(a,b){a==="t"?this.metrics.ne.record(b,this.sa):a==="n"?this.metrics.gf.record(b,this.sa):a==="h"||a==="u"||a==="k"?(a=this.h.get(a))&&this.metrics.Nd.record(b,a,this.sa):this.metrics.Xd.record(b,a,this.qc,this.sa)};
mj.prototype.Ea=function(a){var b=this.i.get(a);b?this.metrics.le.h.hb("/client_streamz/bg/fiec",this.sa,b):this.metrics.errorCount.h.hb("/client_streamz/bg/cec",a,this.qc,this.sa)};
function nj(a,b){b=b===void 0?[]:b;a=Object.assign({},cj,a);b=jj(a.Yc.concat(b));mj.call(this,ij(b),a.sa,a.qc);var c=this;this.options=a;this.service=b;this.j=new kj(function(){return void c.service.yb()},a.hd);
this.addOnDisposeCallback(function(){c.j.dispose();c.service.dispose()})}
z(nj,mj);nj.prototype.xd=function(a){var b=this;this.j.dispose();this.service.dispose();this.service=jj(this.options.Yc.concat(a));this.j=new kj(function(){return void b.service.yb()},this.options.hd);
this.metrics=ij(this.service)};
nj.prototype.Rb=function(){lj(this.j)};
function ej(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function mc(a){this.G=J(a)}
z(mc,K);function oj(a){this.G=J(a)}
z(oj,K);var pj=Rf(oj);function qj(a){this.G=J(a,0,"bfkj")}
z(qj,K);var rj=function(a){return Sd(function(b){return b instanceof a&&!(Cd(b.G)&2)})}(qj);function sj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function tj(a){function b(y,G,I,O){Promise.resolve().then(function(){m.done();d.logger.Rb();l.resolve({Jd:y,cf:G,zh:I,mh:O})})}
function c(y,G,I,O){if(!d.logger.ea){var T="k";G?T="h":I&&(T="u");T!=="k"?O!==0&&(d.logger.rb(T),d.logger.Jb(T,y)):d.j<=0?(d.logger.rb(T),d.logger.Jb(T,y),d.j=Math.floor(Math.random()*200)):d.j--}}
L.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.i=[];if("challenge"in a&&rj(a.challenge)){var e=zf(a.challenge,4);var f=zf(a.challenge,5);zf(a.challenge,7).length?this.h=pj(zf(a.challenge,7)):this.h=tf(a.challenge,oj,6)}else e=a.program,f=a.ge;var g=new L;this.addOnDisposeCallback(function(){var y,G,I;return A(function(O){if(O.h==1)return O.yield(d.o,2);if(O.h!=3)return y=O.i,G=y.cf,O.yield(Promise.all(d.i),3);d.i=[];(I=G)==null||I();g.dispose();O.h=0})});
if(a.Ie!==!1){var h,k=((h=this.h)==null?0:yf(h))?kc(this.h):[];a.Qd?(this.logger=a.Qd,k.length&&this.logger.xd(k)):pg(g,this.logger=new nj(a.Ae||{},k))}else pg(g,this.logger=new hj);var l=new sj;this.o=l.promise;var m=new dj(this.logger,"t");this.logger.rb("t");if(!C[f])throw this.logger.Ea(25),Error("EGOU");if(!C[f].a)throw this.logger.Ea(26),Error("ELIU");try{var n=C[f].a;f=[];h=[];var p;if((p=this.h)==null?0:yf(p)){var t=kc(this.h);for(p=0;p<t.length;p++)f.push(t[p]),h.push(1);var v=oc(this.h);
for(t=0;t<v.length;t++)f.push(v[t]),h.push(2)}var x;this.u=w(n(e,b,!0,a.Jh,c,[f,h],(x=this.h)==null?void 0:zf(x,5))).next().value;this.bf=l.promise.then(function(){})}catch(y){throw this.logger.Ea(28),y;
}}
z(tj,L);tj.prototype.snapshot=function(a){var b=this;if(this.ea)throw Error("Already disposed");var c=new sj;this.i.push(c.promise);this.logger.rb("n");return this.o.then(function(d){var e=d.Jd;return new Promise(function(f){var g=new dj(b.logger,"n");e(function(h){g.done();b.logger.Bc(h.length);b.logger.Rb();f(h)},[a.Vc,
a.df,a.tf,a.ef])})}).finally(function(){return void c.resolve()})};
tj.prototype.ud=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.rb("n");var c=gj(this.logger,function(){return b.u([a.Vc,a.df,a.tf,a.ef])});
this.logger.Bc(c.length);this.logger.Rb();return c};
tj.prototype.getLogger=function(){return this.logger};var uj=window;function vj(a){var b=wj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function xj(){var a=[];vj(function(b){a.push(b)});
return a}
var wj={uf:"allow-forms",vf:"allow-modals",wf:"allow-orientation-lock",xf:"allow-pointer-lock",yf:"allow-popups",zf:"allow-popups-to-escape-sandbox",Af:"allow-presentation",Bf:"allow-same-origin",Cf:"allow-scripts",Df:"allow-top-navigation",Ef:"allow-top-navigation-by-user-activation"},yj=pi(function(){return xj()});
function zj(){var a=Aj(),b={};Kb(yj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Aj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Bj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Cj=(new Date).getTime();function Dj(a){ai.call(this);var b=this;this.B=this.j=0;this.Ca=a!=null?a:{oa:function(e,f){return setTimeout(e,f)},
pa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Ej(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||Fj(this)}
z(Dj,ai);function Gj(){var a=Hj;Dj.h||(Dj.h=new Dj(a));return Dj.h}
Dj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.pa(this.B);delete Dj.h};
Dj.prototype.wa=function(){return this.i};
function Fj(a){a.B=a.Ca.oa(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.F(3):c.yield(Ej(a),3):c.yield(Ej(a),3);Fj(a);c.h=0})},3E4)}
function Ej(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.Ca.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.R=[h.j];h.o=0;h.D=0;a.u=void 0;a.j&&(a.Ca.pa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?bi(a,"networkstatus-online"):bi(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:za(h),g=!1,h.F(3)}})})}
;function Ij(){this.data=[];this.h=-1}
Ij.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Ij.prototype.get=function(a){return!!this.data[a]};
function Jj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Kj(){this.blockSize=-1}
;function Lj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.D=[];this.u=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
Za(Lj,Kj);Lj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Mj(a,b,c){c||(c=0);var d=a.u;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Lj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.D,f=this.i;d<b;){if(f==0)for(;d<=c;)Mj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Mj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Mj(this,e);f=0;break}}this.i=f;this.o+=b}};
Lj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.D[c]=b&255,b/=256;Mj(this,this.D);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Nj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Oj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Pj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Nj(a).match(/\S+/g)||[],b=Jb(a,b)>=0);return b}
function Qj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Pj(a,"inverted-hdpi")&&Oj(a,Array.prototype.filter.call(a.classList?a.classList:Nj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Rj(){}
Rj.prototype.next=function(){return Sj};
var Sj={done:!0,value:void 0};Rj.prototype.jb=function(){return this};function Tj(a){if(a instanceof Uj||a instanceof Vj||a instanceof Wj)return a;if(typeof a.next=="function")return new Uj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Uj(function(){return a[Symbol.iterator]()});
if(typeof a.jb=="function")return new Uj(function(){return a.jb()});
throw Error("Not an iterator or iterable.");}
function Uj(a){this.h=a}
Uj.prototype.jb=function(){return new Vj(this.h())};
Uj.prototype[Symbol.iterator]=function(){return new Wj(this.h())};
Uj.prototype.i=function(){return new Wj(this.h())};
function Vj(a){this.h=a}
z(Vj,Rj);Vj.prototype.next=function(){return this.h.next()};
Vj.prototype[Symbol.iterator]=function(){return new Wj(this.h)};
Vj.prototype.i=function(){return new Wj(this.h)};
function Wj(a){Uj.call(this,function(){return a});
this.j=a}
z(Wj,Uj);Wj.prototype.next=function(){return this.j.next()};function M(a){L.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
Za(M,L);r=M.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Qb(a)}return!1};
r.Qb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Pb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.ib=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.B)for(f=0;f<c.length;f++)e=c[f],Xj(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Qb(c)}}return f!=0}return!1};
function Xj(a,b,c){li(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Qb,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.aa=function(){M.Aa.aa.call(this);this.clear();this.j.length=0};function Yj(a){this.h=a}
Yj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Ni).serialize(b))};
Yj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Yj.prototype.remove=function(a){this.h.remove(a)};function Zj(a){this.h=a}
Za(Zj,Yj);function ak(a){this.data=a}
function bk(a){return a===void 0||a instanceof ak?a:new ak(a)}
Zj.prototype.set=function(a,b){Zj.Aa.set.call(this,a,bk(b))};
Zj.prototype.i=function(a){a=Zj.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Zj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ck(a){this.h=a}
Za(ck,Zj);ck.prototype.set=function(a,b,c){if(b=bk(b)){if(c){if(c<Ya()){ck.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ya()}ck.Aa.set.call(this,a,b)};
ck.prototype.i=function(a){var b=ck.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ya()||c&&c>Ya())ck.prototype.remove.call(this,a);else return b}};function dk(){}
;function ek(){}
Za(ek,dk);ek.prototype[Symbol.iterator]=function(){return Tj(this.jb(!0)).i()};
ek.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function fk(a){this.h=a;this.i=null}
Za(fk,ek);r=fk.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){gk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){gk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){gk(this);this.h.removeItem(a)};
r.jb=function(a){gk(this);var b=0,c=this.h,d=new Rj;d.next=function(){if(b>=c.length)return Sj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){gk(this);this.h.clear()};
r.key=function(a){gk(this);return this.h.key(a)};
function gk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Fc(Error("Storage mechanism: Storage unavailable"))}
;function hk(){var a=null;try{a=C.localStorage||null}catch(b){}fk.call(this,a)}
Za(hk,fk);function ik(a,b){this.i=a;this.h=b+"::"}
Za(ik,ek);ik.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ik.prototype.get=function(a){return this.i.get(this.h+a)};
ik.prototype.remove=function(a){this.i.remove(this.h+a)};
ik.prototype.jb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Rj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},jk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Mc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var kk={lb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Zc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},lk={lb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Zc:function(a){return[].concat.apply([],a)}};
N.af=function(){jk?(N.gb=Uint8Array,N.Ga=Uint16Array,N.Ed=Int32Array,N.assign(N,kk)):(N.gb=Array,N.Ga=Array,N.Ed=Array,N.assign(N,lk))};
N.af();var mk=!0;try{new Uint8Array(1)}catch(a){mk=!1}
function nk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.gb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var ok={};ok=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var pk={},qk,rk=[],sk=0;sk<256;sk++){qk=sk;for(var tk=0;tk<8;tk++)qk=qk&1?3988292384^qk>>>1:qk>>>1;rk[sk]=qk}pk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^rk[(a^b[d])&255];return a^-1};var uk={};uk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function vk(a){for(var b=a.length;--b>=0;)a[b]=0}
var wk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],xk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],yk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],zk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ak=Array(576);vk(Ak);var Bk=Array(60);vk(Bk);var Ck=Array(512);vk(Ck);var Dk=Array(256);vk(Dk);var Ek=Array(29);vk(Ek);var Fk=Array(30);vk(Fk);function Gk(a,b,c,d,e){this.vd=a;this.be=b;this.ae=c;this.Ud=d;this.ze=e;this.dd=a&&a.length}
var Hk,Ik,Jk;function Kk(a,b){this.Xc=a;this.tb=0;this.Ta=b}
function Lk(a,b){a.X[a.pending++]=b&255;a.X[a.pending++]=b>>>8&255}
function Mk(a,b,c){a.ha>16-c?(a.na|=b<<a.ha&65535,Lk(a,a.na),a.na=b>>16-a.ha,a.ha+=c-16):(a.na|=b<<a.ha&65535,a.ha+=c)}
function Nk(a,b,c){Mk(a,c[b*2],c[b*2+1])}
function Ok(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Pk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Ok(d[e]++,e))}
function Qk(a){var b;for(b=0;b<286;b++)a.qa[b*2]=0;for(b=0;b<30;b++)a.Xa[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.qa[512]=1;a.Na=a.xb=0;a.ya=a.matches=0}
function Rk(a){a.ha>8?Lk(a,a.na):a.ha>0&&(a.X[a.pending++]=a.na);a.na=0;a.ha=0}
function Sk(a,b,c){Rk(a);Lk(a,c);Lk(a,~c);N.lb(a.X,a.window,b,c,a.pending);a.pending+=c}
function Tk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Uk(a,b,c){for(var d=a.ba[c],e=c<<1;e<=a.La;){e<a.La&&Tk(b,a.ba[e+1],a.ba[e],a.depth)&&e++;if(Tk(b,d,a.ba[e],a.depth))break;a.ba[c]=a.ba[e];c=e;e<<=1}a.ba[c]=d}
function Vk(a,b,c){var d=0;if(a.ya!==0){do{var e=a.X[a.Db+d*2]<<8|a.X[a.Db+d*2+1];var f=a.X[a.Ac+d];d++;if(e===0)Nk(a,f,b);else{var g=Dk[f];Nk(a,g+256+1,b);var h=wk[g];h!==0&&(f-=Ek[g],Mk(a,f,h));e--;g=e<256?Ck[e]:Ck[256+(e>>>7)];Nk(a,g,c);h=xk[g];h!==0&&(e-=Fk[g],Mk(a,e,h))}}while(d<a.ya)}Nk(a,256,b)}
function Wk(a,b){var c=b.Xc,d=b.Ta.vd,e=b.Ta.dd,f=b.Ta.Ud,g,h=-1;a.La=0;a.ob=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ba[++a.La]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.La<2;){var k=a.ba[++a.La]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Na--;e&&(a.xb-=d[k*2+1])}b.tb=h;for(g=a.La>>1;g>=1;g--)Uk(a,c,g);k=f;do g=a.ba[1],a.ba[1]=a.ba[a.La--],Uk(a,c,1),d=a.ba[1],a.ba[--a.ob]=g,a.ba[--a.ob]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ba[1]=k++,Uk(a,c,1);while(a.La>=
2);a.ba[--a.ob]=a.ba[1];g=b.Xc;k=b.tb;d=b.Ta.vd;e=b.Ta.dd;f=b.Ta.be;var l=b.Ta.ae,m=b.Ta.ze,n,p=0;for(n=0;n<=15;n++)a.Ia[n]=0;g[a.ba[a.ob]*2+1]=0;for(b=a.ob+1;b<573;b++){var t=a.ba[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ia[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Na+=x*(n+v);e&&(a.xb+=x*(d[t*2+1]+v))}}if(p!==0){do{for(n=m-1;a.Ia[n]===0;)n--;a.Ia[n]--;a.Ia[n+1]+=2;a.Ia[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ia[n];t!==0;)d=a.ba[--b],d>k||(g[d*2+1]!==n&&(a.Na+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Pk(c,h,a.Ia)}
function Xk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Yk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Nk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Nk(a,l,a.ja),g--),Nk(a,16,a.ja),Mk(a,g-3,2)):g<=10?(Nk(a,17,a.ja),Mk(a,g-3,3)):(Nk(a,18,a.ja),Mk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Zk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.qa[c*2]!==0)return 0;if(a.qa[18]!==0||a.qa[20]!==0||a.qa[26]!==0)return 1;for(c=32;c<256;c++)if(a.qa[c*2]!==0)return 1;return 0}
var $k=!1;function al(a,b,c){a.X[a.Db+a.ya*2]=b>>>8&255;a.X[a.Db+a.ya*2+1]=b&255;a.X[a.Ac+a.ya]=c&255;a.ya++;b===0?a.qa[c*2]++:(a.matches++,b--,a.qa[(Dk[c]+256+1)*2]++,a.Xa[(b<256?Ck[b]:Ck[256+(b>>>7)])*2]++);return a.ya===a.Ib-1}
;function bl(a,b){a.msg=uk[b];return b}
function cl(a){for(var b=a.length;--b>=0;)a[b]=0}
function dl(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(N.lb(a.output,b.X,b.Lb,c,a.ub),a.ub+=c,b.Lb+=c,a.Nc+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Lb=0))}
function el(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.M.vc===2&&(a.M.vc=Zk(a));Wk(a,a.fc);Wk(a,a.Zb);Xk(a,a.qa,a.fc.tb);Xk(a,a.Xa,a.Zb.tb);Wk(a,a.Sc);for(e=18;e>=3&&a.ja[zk[e]*2+1]===0;e--);a.Na+=3*(e+1)+5+5+4;var f=a.Na+3+7>>>3;var g=a.xb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Mk(a,b?1:0,3),Sk(a,c,d);else if(a.strategy===4||g===f)Mk(a,2+(b?1:0),3),Vk(a,Ak,Bk);else{Mk(a,4+(b?1:0),3);c=a.fc.tb+1;d=a.Zb.tb+1;e+=1;Mk(a,c-257,5);Mk(a,d-1,5);Mk(a,e-4,4);for(f=0;f<e;f++)Mk(a,
a.ja[zk[f]*2+1],3);Yk(a,a.qa,c-1);Yk(a,a.Xa,d-1);Vk(a,a.qa,a.Xa)}Qk(a);b&&Rk(a);a.va=a.v;dl(a.M)}
function P(a,b){a.X[a.pending++]=b}
function fl(a,b){a.X[a.pending++]=b>>>8&255;a.X[a.pending++]=b&255}
function gl(a,b){var c=a.jd,d=a.v,e=a.xa,f=a.kd,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.Ua,l=a.Fa,m=a.v+258,n=h[d+e-1],p=h[d+e];a.xa>=a.cd&&(c>>=2);f>a.A&&(f=a.A);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.sb=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.A?e:a.A}
function hl(a){var b=a.la,c;do{var d=a.Cd-a.A-a.v;if(a.v>=b+(b-262)){N.lb(a.window,a.window,b,b,0);a.sb-=b;a.v-=b;a.va-=b;var e=c=a.ec;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Fa[--e],a.Fa[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.ma===0)break;e=a.M;c=a.window;f=a.v+a.A;var g=e.ma;g>d&&(g=d);g===0?c=0:(e.ma-=g,N.lb(c,e.input,e.cb,g,f),e.state.wrap===1?e.J=ok(e.J,c,g,f):e.state.wrap===2&&(e.J=pk(e.J,c,g,f)),e.cb+=g,e.fb+=g,c=g);a.A+=c;if(a.A+a.ra>=3)for(d=a.v-a.ra,a.P=a.window[d],
a.P=(a.P<<a.Ka^a.window[d+1])&a.Ja;a.ra&&!(a.P=(a.P<<a.Ka^a.window[d+3-1])&a.Ja,a.Fa[d&a.Ua]=a.head[a.P],a.head[a.P]=d,d++,a.ra--,a.A+a.ra<3););}while(a.A<262&&a.M.ma!==0)}
function il(a,b){for(var c;;){if(a.A<262){hl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,c=a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=gl(a,c));if(a.T>=3)if(c=al(a,a.v-a.sb,a.T-3),a.A-=a.T,a.T<=a.Cc&&a.A>=3){a.T--;do a.v++,a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.P=a.window[a.v],a.P=(a.P<<a.Ka^a.window[a.v+1])&a.Ja;else c=al(a,0,
a.window[a.v]),a.A--,a.v++;if(c&&(el(a,!1),a.M.S===0))return 1}a.ra=a.v<2?a.v:2;return b===4?(el(a,!0),a.M.S===0?3:4):a.ya&&(el(a,!1),a.M.S===0)?1:2}
function jl(a,b){for(var c,d;;){if(a.A<262){hl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,c=a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);a.xa=a.T;a.nd=a.sb;a.T=2;c!==0&&a.xa<a.Cc&&a.v-c<=a.la-262&&(a.T=gl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.sb>4096)&&(a.T=2));if(a.xa>=3&&a.T<=a.xa){d=a.v+a.A-3;c=al(a,a.v-1-a.nd,a.xa-3);a.A-=a.xa-1;a.xa-=2;do++a.v<=d&&(a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,a.Fa[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);
while(--a.xa!==0);a.ab=0;a.T=2;a.v++;if(c&&(el(a,!1),a.M.S===0))return 1}else if(a.ab){if((c=al(a,0,a.window[a.v-1]))&&el(a,!1),a.v++,a.A--,a.M.S===0)return 1}else a.ab=1,a.v++,a.A--}a.ab&&(al(a,0,a.window[a.v-1]),a.ab=0);a.ra=a.v<2?a.v:2;return b===4?(el(a,!0),a.M.S===0?3:4):a.ya&&(el(a,!1),a.M.S===0)?1:2}
function kl(a,b){for(var c,d,e,f=a.window;;){if(a.A<=258){hl(a);if(a.A<=258&&b===0)return 1;if(a.A===0)break}a.T=0;if(a.A>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.A&&(a.T=a.A)}a.T>=3?(c=al(a,1,a.T-3),a.A-=a.T,a.v+=a.T,a.T=0):(c=al(a,0,a.window[a.v]),a.A--,a.v++);if(c&&(el(a,!1),a.M.S===0))return 1}a.ra=0;return b===4?(el(a,!0),a.M.S===0?3:4):
a.ya&&(el(a,!1),a.M.S===0)?1:2}
function ll(a,b){for(var c;;){if(a.A===0&&(hl(a),a.A===0)){if(b===0)return 1;break}a.T=0;c=al(a,0,a.window[a.v]);a.A--;a.v++;if(c&&(el(a,!1),a.M.S===0))return 1}a.ra=0;return b===4?(el(a,!0),a.M.S===0?3:4):a.ya&&(el(a,!1),a.M.S===0)?1:2}
function ml(a,b,c,d,e){this.he=a;this.ye=b;this.Be=c;this.xe=d;this.ce=e}
var nl;nl=[new ml(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.A<=1){hl(a);if(a.A===0&&b===0)return 1;if(a.A===0)break}a.v+=a.A;a.A=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.A=a.v-d,a.v=d,el(a,!1),a.M.S===0)return 1;if(a.v-a.va>=a.la-262&&(el(a,!1),a.M.S===0))return 1}a.ra=0;if(b===4)return el(a,!0),a.M.S===0?3:4;a.v>a.va&&el(a,!1);return 1}),
new ml(4,4,8,4,il),new ml(4,5,16,8,il),new ml(4,6,32,32,il),new ml(4,4,16,16,jl),new ml(8,16,32,32,jl),new ml(8,16,128,128,jl),new ml(8,32,128,256,jl),new ml(32,128,258,1024,jl),new ml(32,258,258,4096,jl)];
function ol(){this.M=null;this.status=0;this.X=null;this.wrap=this.pending=this.Lb=this.za=0;this.I=null;this.Ba=0;this.method=8;this.qb=-1;this.Ua=this.Pc=this.la=0;this.window=null;this.Cd=0;this.head=this.Fa=null;this.kd=this.cd=this.strategy=this.level=this.Cc=this.jd=this.xa=this.A=this.sb=this.v=this.ab=this.nd=this.T=this.va=this.Ka=this.Ja=this.yc=this.ec=this.P=0;this.qa=new N.Ga(1146);this.Xa=new N.Ga(122);this.ja=new N.Ga(78);cl(this.qa);cl(this.Xa);cl(this.ja);this.Sc=this.Zb=this.fc=
null;this.Ia=new N.Ga(16);this.ba=new N.Ga(573);cl(this.ba);this.ob=this.La=0;this.depth=new N.Ga(573);cl(this.depth);this.ha=this.na=this.ra=this.matches=this.xb=this.Na=this.Db=this.ya=this.Ib=this.Ac=0}
function pl(a,b){if(!a||!a.state||b>5||b<0)return a?bl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ma!==0||c.status===666&&b!==4)return bl(a,a.S===0?-5:-2);c.M=a;var d=c.qb;c.qb=b;if(c.status===42)if(c.wrap===2)a.J=0,P(c,31),P(c,139),P(c,8),c.I?(P(c,(c.I.text?1:0)+(c.I.Pa?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),P(c,c.I.time&255),P(c,c.I.time>>8&255),P(c,c.I.time>>16&255),P(c,c.I.time>>24&255),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(P(c,c.I.extra.length&255),P(c,c.I.extra.length>>8&255)),c.I.Pa&&(a.J=pk(a.J,c.X,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,3),c.status=113);else{var e=8+(c.Pc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;fl(c,e+(31-e%31));c.v!==0&&(fl(c,a.J>>>16),fl(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Ba<(c.I.extra.length&65535)&&(c.pending!==c.za||
(c.I.Pa&&c.pending>e&&(a.J=pk(a.J,c.X,c.pending-e,e)),dl(a),e=c.pending,c.pending!==c.za));)P(c,c.I.extra[c.Ba]&255),c.Ba++;c.I.Pa&&c.pending>e&&(a.J=pk(a.J,c.X,c.pending-e,e));c.Ba===c.I.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.za&&(c.I.Pa&&c.pending>e&&(a.J=pk(a.J,c.X,c.pending-e,e)),dl(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.I.name.length?c.I.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.I.Pa&&c.pending>
e&&(a.J=pk(a.J,c.X,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.za&&(c.I.Pa&&c.pending>e&&(a.J=pk(a.J,c.X,c.pending-e,e)),dl(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.I.comment.length?c.I.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.I.Pa&&c.pending>e&&(a.J=pk(a.J,c.X,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Pa?(c.pending+2>c.za&&dl(a),c.pending+2<=c.za&&(P(c,a.J&
255),P(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if(dl(a),a.S===0)return c.qb=-1,0}else if(a.ma===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return bl(a,-5);if(c.status===666&&a.ma!==0)return bl(a,-5);if(a.ma!==0||c.A!==0||b!==0&&c.status!==666){d=c.strategy===2?ll(c,b):c.strategy===3?kl(c,b):nl[c.level].ce(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.qb=-1),0;if(d===2&&(b===1?(Mk(c,2,3),Nk(c,256,Ak),c.ha===16?(Lk(c,c.na),c.na=0,c.ha=0):c.ha>=8&&
(c.X[c.pending++]=c.na&255,c.na>>=8,c.ha-=8)):b!==5&&(Mk(c,0,3),Sk(c,0,0),b===3&&(cl(c.head),c.A===0&&(c.v=0,c.va=0,c.ra=0))),dl(a),a.S===0))return c.qb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(P(c,a.J&255),P(c,a.J>>8&255),P(c,a.J>>16&255),P(c,a.J>>24&255),P(c,a.fb&255),P(c,a.fb>>8&255),P(c,a.fb>>16&255),P(c,a.fb>>24&255)):(fl(c,a.J>>>16),fl(c,a.J&65535));dl(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var ql={};ql=function(){this.input=null;this.fb=this.ma=this.cb=0;this.output=null;this.Nc=this.S=this.ub=0;this.msg="";this.state=null;this.vc=2;this.J=0};var rl=Object.prototype.toString;
function sl(a){if(!(this instanceof sl))return new sl(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new ql;this.M.S=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=bl(b,-2);else{e===8&&(e=9);var k=new ol;b.state=k;k.M=b;k.wrap=h;k.I=null;k.Pc=e;k.la=1<<k.Pc;k.Ua=k.la-1;k.yc=f+7;k.ec=1<<k.yc;k.Ja=k.ec-1;k.Ka=~~((k.yc+3-1)/3);k.window=new N.gb(k.la*2);k.head=new N.Ga(k.ec);k.Fa=new N.Ga(k.la);k.Ib=1<<f+6;k.za=k.Ib*4;k.X=new N.gb(k.za);k.Db=1*k.Ib;k.Ac=3*k.Ib;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.fb=b.Nc=0;b.vc=2;c=b.state;c.pending=0;c.Lb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.qb=0;if(!$k){d=Array(16);for(f=g=0;f<28;f++)for(Ek[f]=g,e=0;e<1<<wk[f];e++)Dk[g++]=f;Dk[g-1]=f;for(f=g=0;f<16;f++)for(Fk[f]=g,e=0;e<1<<xk[f];e++)Ck[g++]=f;for(g>>=7;f<30;f++)for(Fk[f]=g<<7,e=0;e<1<<xk[f]-7;e++)Ck[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Ak[e*2+1]=8,e++,d[8]++;for(;e<=255;)Ak[e*2+1]=9,e++,d[9]++;for(;e<=279;)Ak[e*2+1]=7,e++,d[7]++;for(;e<=287;)Ak[e*2+1]=8,e++,d[8]++;Pk(Ak,287,d);for(e=0;e<30;e++)Bk[e*2+1]=5,Bk[e*2]=Ok(e,5);Hk=new Gk(Ak,wk,257,286,15);Ik=new Gk(Bk,
xk,0,30,15);Jk=new Gk([],yk,0,19,7);$k=!0}c.fc=new Kk(c.qa,Hk);c.Zb=new Kk(c.Xa,Ik);c.Sc=new Kk(c.ja,Jk);c.na=0;c.ha=0;Qk(c);c=0}else c=bl(b,-2);c===0&&(b=b.state,b.Cd=2*b.la,cl(b.head),b.Cc=nl[b.level].ye,b.cd=nl[b.level].he,b.kd=nl[b.level].Be,b.jd=nl[b.level].xe,b.v=0,b.va=0,b.A=0,b.ra=0,b.T=b.xa=2,b.ab=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(uk[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=nk(a.dictionary):
rl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.A)b=-2;else{b===1&&(a.J=ok(a.J,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(cl(l.head),l.v=0,l.va=0,l.ra=0),c=new N.gb(l.la),N.lb(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.ma;d=a.cb;e=a.input;a.ma=g;a.cb=0;a.input=f;for(hl(l);l.A>=3;){f=l.v;g=l.A-2;do l.P=(l.P<<l.Ka^l.window[f+3-1])&l.Ja,l.Fa[f&l.Ua]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.A=2;hl(l)}l.v+=l.A;l.va=l.v;l.ra=l.A;l.A=0;l.T=l.xa=2;l.ab=0;a.cb=d;a.input=e;a.ma=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(uk[b]);this.hh=!0}}
sl.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=nk(a):rl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.cb=0;c.ma=c.input.length;do{c.S===0&&(c.output=new N.gb(d),c.ub=0,c.S=d);a=pl(c,e);if(a!==1&&a!==0)return tl(this,a),this.ended=!0,!1;if(c.S===0||c.ma===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.Mc(c.output,c.ub);b=f;f=f.length;if(f<65537&&(b.subarray&&mk||!b.subarray))b=
String.fromCharCode.apply(null,N.Mc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Mc(c.output,c.ub),this.chunks.push(b)}while((c.ma>0||c.S===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=bl(c,-2):(c.state=null,a=d===113?bl(c,-3):0)):a=-2,tl(this,a),this.ended=!0,a===0;e===2&&(tl(this,0),c.S=0);return!0};
function tl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.Zc(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function ul(a,b){b=b||{};b.gzip=!0;b=new sl(b);b.push(a,!0);if(b.err)throw b.msg||uk[b.err];return b.result}
;function vl(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=ib(a):b=null;return b}
;function wl(a){return ib(a===null?"null":a===void 0?"undefined":a)}
;function xl(a){this.name=a}
;var yl=new xl("rawColdConfigGroup");var zl=new xl("rawHotConfigGroup");function Al(a){this.G=J(a)}
z(Al,K);function Bl(a){this.G=J(a)}
z(Bl,K);Bl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new od(a,nd):qd||(qd=new od(null,nd));else if(a.constructor!==od)if(md(a))a=a.length?new od(new Uint8Array(a),nd):qd||(qd=new od(null,nd));else throw Error();return gf(this,1,a)};var Cl=new xl("continuationCommand");var Dl=new xl("webCommandMetadata");var El=new xl("signalServiceEndpoint");var Fl={Kf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Hf:"EMBEDDED_PLAYER_MODE_DEFAULT",Jf:"EMBEDDED_PLAYER_MODE_PFP",If:"EMBEDDED_PLAYER_MODE_PFL"};var Gl=new xl("feedbackEndpoint");var Xd={Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED"};var Hl=new xl("shareEndpoint"),Il=new xl("shareEntityEndpoint"),Jl=new xl("shareEntityServiceEndpoint"),Kl=new xl("webPlayerShareEntityServiceEndpoint");var Ll=new xl("playlistEditEndpoint");var Ml=new xl("modifyChannelNotificationPreferenceEndpoint");var Nl=new xl("unsubscribeEndpoint");var Ol=new xl("subscribeEndpoint");function Pl(){var a=Ql;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Rl(a){D("yt.ads.biscotti.lastId_",a)}
;function Sl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Tl=C.window,Ul,Vl,Wl=(Tl==null?void 0:(Ul=Tl.yt)==null?void 0:Ul.config_)||(Tl==null?void 0:(Vl=Tl.ytcfg)==null?void 0:Vl.data_)||{};D("yt.config_",Wl);function Xl(){Sl(Wl,arguments)}
function R(a,b){return a in Wl?Wl[a]:b}
function Yl(a){var b=Wl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Zl=[];function $l(a){Zl.forEach(function(b){return b(a)})}
function am(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){bm(b)}}:a}
function bm(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Xl("ERRORS",b));$l(a)}
function cm(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Xl("ERRORS",f))}
;var dm=/^[\w.]*$/,em={q:!0,search_query:!0};function fm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=gm(f[0]||""),h=gm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Qb(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(fm);l.args=[{key:m,value:f[1],query:a,method:hm===n?"unchanged":n}];em.hasOwnProperty(m)||cm(l)}}return c}
var hm=String(fm);function im(a){var b=[];wg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Kb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function jm(a){a.charAt(0)==="?"&&(a=a.substring(1));return fm(a,"&")}
function km(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),jm(a.length>1?a[1]:a[0])):{}}
function lm(a,b){return mm(a,b||{},!0)}
function mm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=jm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return ec(a,e)+d}
function nm(a){if(!b)var b=window.location.href;var c=Zb(1,a),d=$b(a);c&&d?(a=a.match(Xb),b=b.match(Xb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?$b(b)===d&&(Number(Zb(4,b))||null)===(Number(Zb(4,a))||null):!0;return a}
function gm(a){return a&&a.match(dm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function om(a){var b=pm;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Cj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?uj:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=(k=uj.screen)==null?void 0:k.height;var l;e.u_w=(l=uj.screen)==null?void 0:l.width;var m;e.u_ah=(m=uj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=uj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=uj.screen)==null?void 0:p.colorDepth}catch(Ma){}h=b.h;try{var t=h.screenX;var v=h.screenY}catch(Ma){}try{var x=h.outerWidth;var y=h.outerHeight}catch(Ma){}try{var G=h.innerWidth;var I=h.innerHeight}catch(Ma){}try{var O=h.screenLeft;var T=h.screenTop}catch(Ma){}try{G=h.innerWidth,I=h.innerHeight}catch(Ma){}try{var Ja=h.screen.availWidth;var cb=h.screen.availTop}catch(Ma){}t=[O,T,t,v,Ja,cb,x,y,G,I];try{var ca=(b.h.top||window).document,Z=ca.compatMode==
"CSS1Compat"?ca.documentElement:ca.body;var na=(new vg(Z.clientWidth,Z.clientHeight)).round()}catch(Ma){na=new vg(-12245933,-12245933)}ca=na;na={};var Na=Na===void 0?C:Na;Z=new Ij;"SVGElement"in Na&&"createElementNS"in Na.document&&Z.set(0);v=zj();v["allow-top-navigation-by-user-activation"]&&Z.set(1);v["allow-popups-to-escape-sandbox"]&&Z.set(2);Na.crypto&&Na.crypto.subtle&&Z.set(3);"TextDecoder"in Na&&"TextEncoder"in Na&&Z.set(4);Na=Jj(Z);na.bc=Na;na.bih=ca.height;na.biw=ca.width;na.brdim=t.join();
b=b.i;b=(na.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,na.wgl=!!uj.WebGLRenderingContext,na);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var pm=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return im(om(a))});Ya();navigator.userAgent.indexOf(" (CrKey ");var qm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function rm(){if(!qm)return null;var a=qm();return"open"in a?a:null}
function sm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function tm(a,b){typeof a==="function"&&(a=am(a));return window.setTimeout(a,b)}
;var um="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ka(um),["client_dev_set_cookie"]);function S(a){a=wm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function xm(a,b){a=wm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function wm(a){return R("EXPERIMENT_FLAGS",{})[a]}
function ym(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var zm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Am="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(um)),Bm=!1;function Cm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&am(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=rm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=Dm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Em(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){cm(n)}}l.send(d);return l}
function Em(a,b){b=b===void 0?{}:b;var c=nm(a),d=R("INNERTUBE_CLIENT_NAME"),e=S("web_ajax_ignore_global_headers_if_set"),f;for(f in zm){var g=R(zm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=R("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||($b(a)?!1:!0))){k=a;var l;if(l=S("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=$b(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=Yb(Zb(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!$b(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!$b(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&$b(a)||(b["X-YouTube-Ad-Signals"]=im(om()));return b}
function Fm(a,b){b.method="POST";b.postParams||(b.postParams={});return Gm(a,b)}
function Gm(a,b){var c=b.format||"JSON";a=Hm(a,b);var d=Im(a,b),e=!1,f=Jm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=sm(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=Km(a,c,k,b.convertToSafeHtml);l&&(l=Lm(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=tm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Hm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=lm(a,b);return a}
function Im(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||$b(a)&&!b.withCredentials&&$b(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=jm(e),Gg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):dc(e));f=e||f&&!zg(f);!Bm&&f&&b.method!=="POST"&&(Bm=!0,bm(Error("AJAX request with postData should use POST")));return e}
function Km(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,cm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Mm(a):null)e={},Kb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Nm(g)})}d&&Om(e);
return e}
function Om(a){if(Qa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=gb();d=new zb(e?e.createHTML(d):d);a[c]=d}else Om(a[b])}}
function Lm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Mm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Nm(a){var b="";Kb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Dm(a){var b=window.location.search,c=$b(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&nm(a)&&(c=document.location.hostname);var d=Yb(Zb(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=jm(b),f={};Kb(Am,function(g){e[g]&&(f[g]=e[g])});
return mm(a,f||{},!1)}
var Jm=Cm;var Pm=[{Dc:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Dc:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Dc:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Rm={Sa:[],Oa:[{callback:Qm,weight:500}]};function Qm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Sm(){this.Oa=[];this.Sa=[]}
var Tm;function Um(){if(!Tm){var a=Tm=new Sm;a.Sa.length=0;a.Oa.length=0;Rm.Sa&&a.Sa.push.apply(a.Sa,Rm.Sa);Rm.Oa&&a.Oa.push.apply(a.Oa,Rm.Oa)}return Tm}
;var Vm=new M;function Wm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Xm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Xm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Xm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Xm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Ym(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Zm(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Wm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Zm(f+".ve",g,h,k):0;d+=f;d+=Zm(e,a[e],b,c);if(d>500)break}}else c[b]=$m(a),d+=c[b].length;else c[b]=$m(a),d+=c[b].length;return d}
function Zm(a,b,c,d){c+="."+a;a=$m(b);d[c]=a;return c.length+a.length}
function $m(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function an(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function bn(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function cn(){this.jf=!0}
function dn(){cn.h||(cn.h=new cn);return cn.h}
function en(a,b){a={};var c=[],d=S("enable_first_party_auth_v2");"USER_SESSION_ID"in Wl&&d&&c.push({key:"u",value:R("USER_SESSION_ID")});if(c=lg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Wl||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in Wl&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
;var fn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function gn(a,b,c,d,e){hg.set(""+a,b,{Kb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function hn(a){return hg.get(""+a,void 0)}
function jn(a,b,c){hg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function kn(){if(S("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!hg.isEnabled())return!1;if(hg.h.cookie)return!0;S("embeds_web_enable_cookie_detection_fix")?hg.set("TESTCOOKIESENABLED","1",{Kb:60,Oe:"none",secure:!0}):hg.set("TESTCOOKIESENABLED","1",{Kb:60});if(hg.get("TESTCOOKIESENABLED")!=="1")return!1;hg.remove("TESTCOOKIESENABLED");return!0}
;var ln=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",ln);function mn(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=hn(this.h);a&&this.parse(a)}
var nn;function on(){nn||(nn=new mn);return nn}
r=mn.prototype;r.get=function(a,b){pn(a);qn(a);a=ln[a]!==void 0?ln[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){pn(a);qn(a);if(b==null)throw Error("ExpectedNotNull");ln[a]=b.toString()};
function rn(a){return!!((sn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){pn(a);qn(a);delete ln[a]};
r.clear=function(){for(var a in ln)delete ln[a]};
function qn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function pn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function sn(a){a=ln[a]!==void 0?ln[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(ln[d]=c.toString())}};var tn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},un={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function vn(){var a=C.navigator;return a?a.connection:void 0}
function wn(){var a=vn();if(a){var b=tn[a.type||"unknown"]||"CONN_UNKNOWN";a=tn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function xn(){var a=vn();if(a!=null&&a.effectiveType)return un.hasOwnProperty(a.effectiveType)?un[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
z(U,Error);function yn(){try{return zn(),!0}catch(a){return!1}}
function zn(a){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function An(){}
function Bn(a,b){return Hj.Wa(a,0,b)}
An.prototype.oa=function(a,b){return this.Wa(a,1,b)};
An.prototype.Bb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Cn=xm("web_emulated_idle_callback_delay",300),Dn=1E3/60-3,En=[8,5,4,3,2,1,0];
function Fn(a){a=a===void 0?{}:a;L.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.R=[];this.U=this.ga=!1;for(var b=w(En),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.uc=a.timeout||1;this.H=Dn;this.B=0;this.ta=this.De.bind(this);this.sc=this.mf.bind(this);this.zb=this.Id.bind(this);this.Ab=this.je.bind(this);this.Sb=this.He.bind(this);this.Va=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ia=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ta)}
z(Fn,L);r=Fn.prototype;r.Bb=function(a){var b=Ya();Gn(this,a);a=Ya()-b;this.u||(this.H-=a)};
r.Wa=function(a,b,c){++this.Z;if(b===10)return this.Bb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Hn(this)!==this.B&&this.stop(),this.start()));return d};
r.pa=function(a){delete this.j[a]};
function In(a){a.R.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function Jn(a){return!a.isHidden()&&a.ia}
function Hn(a){if(a.i[8].length){if(a.U)return 4;if(Jn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Jn(a)?3:2:1;return 0}
r.Ea=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Gn(a,b){try{b()}catch(c){a.Ea(c)}}
function Kn(a){for(var b=w(En),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.je=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ga=!0;Ln(this,b);this.ga=!1};
r.mf=function(){Ln(this)};
r.Id=function(){Mn(this)};
r.He=function(a){this.U=!0;var b=Hn(this);b===4&&b!==this.B&&(this.stop(),this.start());Ln(this,void 0,a);this.U=!1};
r.De=function(){this.isHidden()||Mn(this);this.h&&(this.stop(),this.start())};
function Mn(a){a.stop();a.u=!0;for(var b=Ya(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Gn(a,e)}Nn(a);a.u=!1;Kn(a)&&a.start();b=Ya()-b;a.H-=b}
function Nn(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function Ln(a,b,c){a.U&&a.B===4&&a.h||a.stop();a.u=!0;b=Ya()+(b||a.H);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ea(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Gn(a,f);d=a.ga?0:1;d=a.o>d?a.o:d;if(!(Ya()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Gn(a,c)}while(c&&Ya()<b)}a.u=!1;Nn(a);a.H=Dn;Kn(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.B=Hn(this),this.B){case 1:var a=this.Ab;this.h=this.Va?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Cn);break;case 2:this.h=window.setTimeout(this.sc,this.uc);break;case 3:this.h=window.requestAnimationFrame(this.Sb);break;case 4:this.h=window.setTimeout(this.zb,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Va?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.aa=function(){In(this);this.stop();this.ia&&document.removeEventListener("visibilitychange",this.ta);L.prototype.aa.call(this)};var On=E("yt.scheduler.instance.timerIdMap_")||{},Pn=xm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Qn=0,Rn=0;function Sn(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new Fn(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Tn(){Un();var a=E("ytglobal.schedulerInstanceInstance_");a&&(ng(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Un(){In(Sn());for(var a in On)On.hasOwnProperty(a)&&delete On[Number(a)]}
function Vn(a,b,c){if(!c)return c=c===void 0,-Sn().Wa(a,b,c);var d=window.setTimeout(function(){var e=Sn().Wa(a,b);On[d]=e},c);
return d}
function Wn(a){Sn().Bb(a)}
function Xn(a){var b=Sn();if(a<0)b.pa(-a);else{var c=On[a];c?(b.pa(c),delete On[a]):window.clearTimeout(a)}}
function Yn(){Zn()}
function Zn(){window.clearTimeout(Qn);Sn().start()}
function $n(){Sn().pause();window.clearTimeout(Qn);Qn=window.setTimeout(Yn,Pn)}
function ao(){window.clearTimeout(Rn);Rn=window.setTimeout(function(){bo(0)},Pn)}
function bo(a){ao();var b=Sn();b.o=a;b.start()}
function co(a){ao();var b=Sn();b.o>a&&(b.o=a,b.start())}
function eo(){window.clearTimeout(Rn);var a=Sn();a.o=0;a.start()}
;function fo(){An.apply(this,arguments)}
z(fo,An);function go(){fo.h||(fo.h=new fo);return fo.h}
fo.prototype.Wa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):tm(a,c||0)};
fo.prototype.pa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
fo.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
fo.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Hj=go();
S("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Tn),D("yt.scheduler.instance.addJob",Vn),D("yt.scheduler.instance.addImmediateJob",Wn),D("yt.scheduler.instance.cancelJob",Xn),D("yt.scheduler.instance.cancelAllJobs",Un),D("yt.scheduler.instance.start",Zn),D("yt.scheduler.instance.pause",$n),D("yt.scheduler.instance.setPriorityThreshold",bo),D("yt.scheduler.instance.enablePriorityThreshold",co),D("yt.scheduler.instance.clearPriorityThreshold",eo),D("yt.scheduler.initialized",
!0));function ho(a){var b=new hk;this.h=(a=b.isAvailable()?a?new ik(b,a):b:null)?new ck(a):null;this.i=document.domain||window.location.hostname}
ho.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Ni).serialize(b))}catch(f){return}else e=escape(b);gn(a,e,c,this.i)};
ho.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=hn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ho.prototype.remove=function(a){this.h&&this.h.remove(a);jn(a,"/",this.i)};var io=function(){var a;return function(){a||(a=new ho("ytidb"));return a}}();
function jo(){var a;return(a=io())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ko=[],lo,mo=!1;function no(){var a={};for(lo=new oo(a.handleError===void 0?po:a.handleError,a.logEvent===void 0?qo:a.logEvent);ko.length>0;)switch(a=ko.shift(),a.type){case "ERROR":lo.Ea(a.payload);break;case "EVENT":lo.logEvent(a.eventType,a.payload)}}
function ro(a){mo||(lo?lo.Ea(a):(ko.push({type:"ERROR",payload:a}),ko.length>10&&ko.shift()))}
function so(a,b){mo||(lo?lo.logEvent(a,b):(ko.push({type:"EVENT",eventType:a,payload:b}),ko.length>10&&ko.shift()))}
;function to(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function uo(a){return a.substr(0,a.indexOf(":"))||a}
;var vo=Yc||Zc;function wo(a){var b=Ic();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var xo={},yo=(xo.AUTH_INVALID="No user identifier specified.",xo.EXPLICIT_ABORT="Transaction was explicitly aborted.",xo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",xo.MISSING_INDEX="Index not created.",xo.MISSING_OBJECT_STORES="Object stores not created.",xo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",xo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",xo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
xo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",xo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",xo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",xo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",xo),zo={},Ao=(zo.AUTH_INVALID="ERROR",zo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",zo.EXPLICIT_ABORT="IGNORED",zo.IDB_NOT_SUPPORTED="ERROR",zo.MISSING_INDEX=
"WARNING",zo.MISSING_OBJECT_STORES="ERROR",zo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",zo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",zo.QUOTA_EXCEEDED="WARNING",zo.QUOTA_MAYBE_EXCEEDED="WARNING",zo.UNKNOWN_ABORT="WARNING",zo.INCOMPATIBLE_DB_VERSION="WARNING",zo),Bo={},Co=(Bo.AUTH_INVALID=!1,Bo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Bo.EXPLICIT_ABORT=!1,Bo.IDB_NOT_SUPPORTED=!1,Bo.MISSING_INDEX=!1,Bo.MISSING_OBJECT_STORES=!1,Bo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Bo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Bo.QUOTA_EXCEEDED=!1,Bo.QUOTA_MAYBE_EXCEEDED=!0,Bo.UNKNOWN_ABORT=!0,Bo.INCOMPATIBLE_DB_VERSION=!1,Bo);function Do(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?yo[a]:c;d=d===void 0?Ao[a]:d;e=e===void 0?Co[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Do.prototype)}
z(Do,U);function Eo(a,b){Do.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},yo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Eo.prototype)}
z(Eo,Do);function Fo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Fo.prototype)}
z(Fo,Error);var Go=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ho(a,b,c,d){b=uo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Do)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Do("QUOTA_EXCEEDED",a);if($c&&e.name==="UnknownError")return new Do("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Fo)return new Do("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Go.some(function(f){return e.message.includes(f)}))return new Do("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Do("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",md:e.name})];e.level="WARNING";return e}
function Io(a,b,c){var d=jo();return new Do("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Jo(a){if(!a)throw Error();throw a;}
function Ko(a){return a}
function Lo(a){this.h=a}
function Mo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Mo.all=function(a){return new Mo(new Lo(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={pb:0};f.pb<a.length;f={pb:f.pb},++f.pb)Mo.resolve(a[f.pb]).then(function(g){return function(h){d[g.pb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Mo.resolve=function(a){return new Mo(new Lo(function(b,c){a instanceof Mo?a.then(b,c):b(a)}))};
Mo.reject=function(a){return new Mo(new Lo(function(b,c){c(a)}))};
Mo.prototype.then=function(a,b){var c=this,d=a!=null?a:Ko,e=b!=null?b:Jo;return new Mo(new Lo(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){No(c,c,d,f,g)}),c.i.push(function(){Oo(c,c,e,f,g)})):c.state.status==="FULFILLED"?No(c,c,d,f,g):c.state.status==="REJECTED"&&Oo(c,c,e,f,g)}))};
Mo.prototype.catch=function(a){return this.then(void 0,a)};
function No(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Mo?Po(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Oo(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Mo?Po(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Po(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Mo?Po(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Qo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ro(a){return new Promise(function(b,c){Qo(a,b,c)})}
function So(a){return new Mo(new Lo(function(b,c){Qo(a,b,c)}))}
;function To(a,b){return new Mo(new Lo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Uo=window,V=Uo.ytcsi&&Uo.ytcsi.now?Uo.ytcsi.now:Uo.performance&&Uo.performance.timing&&Uo.performance.now&&Uo.performance.timing.navigationStart?function(){return Uo.performance.timing.navigationStart+Uo.performance.now()}:function(){return(new Date).getTime()};function Vo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
r=Vo.prototype;r.add=function(a,b,c){return Wo(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return Wo(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return Wo(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function Xo(a,b,c){a=a.h.createObjectStore(b,c);return new Yo(a)}
r.delete=function(a,b){return Wo(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return Wo(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function Zo(a,b,c){return Wo(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return So(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Wo(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,v,x;return A(function(y){switch(y.h){case 1:var G={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){y.F(4);break}g++;k=Math.round(V());ya(y,5);l=a.h.transaction(b,e.mode);G=y.yield;var I=new $o(l);I=ap(I,d);return G.call(y,I,7);case 7:return m=y.i,n=Math.round(V()),bp(a,k,n,g,void 0,b.join(),e),y.return(m);case 5:p=za(y);t=Math.round(V());v=Ho(p,
a.h.name,b.join(),a.h.version);if((x=v instanceof Do&&!v.h)||g>=f)bp(a,k,t,g,v,b.join(),e),h=v;y.F(2);break;case 4:return y.return(Promise.reject(h))}})}
function bp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Do&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&so("QUOTA_EXCEEDED",{dbName:uo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Do&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),so("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),cp(a,!1,d,f,b,g.tag),ro(e)):cp(a,!0,d,f,b,g.tag)}
function cp(a,b,c,d,e,f){so("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function Yo(a){this.h=a}
r=Yo.prototype;r.add=function(a,b){return So(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return So(this.h.clear()).then(function(){})};
function dp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return So(this.h.count(a))};
function ep(a,b){return fp(a,{query:b},function(c){return c.delete().then(function(){return gp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?ep(this,a):So(this.h.delete(a))};
r.get=function(a){return So(this.h.get(a))};
r.index=function(a){try{return new hp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Fo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function fp(a,b,c){a=a.h.openCursor(b.query,b.direction);return ip(a).then(function(d){return To(d,c)})}
function $o(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Do;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ap(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
$o.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Do("EXPLICIT_ABORT");};
$o.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Yo(a),this.i.set(a,b));return b};
function hp(a){this.h=a}
r=hp.prototype;r.count=function(a){return So(this.h.count(a))};
r.delete=function(a){return jp(this,{query:a},function(b){return b.delete().then(function(){return gp(b)})})};
r.get=function(a){return So(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function jp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return ip(a).then(function(d){return To(d,c)})}
function kp(a,b){this.request=a;this.cursor=b}
function ip(a){return So(a).then(function(b){return b?new kp(a,b):null})}
function gp(a){a.cursor.continue(void 0);return ip(a.request)}
kp.prototype.delete=function(){return So(this.cursor.delete()).then(function(){})};
kp.prototype.getValue=function(){return this.cursor.value};
kp.prototype.update=function(a){return So(this.cursor.update(a))};function lp(a,b,c){return new Promise(function(d,e){function f(){p||(p=new Vo(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Kd,k=c.blocking,l=c.kf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&so("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:uo(a)});var v=f(),x=new $o(g.transaction);
m&&m(v,function(y){return t.oldVersion<y&&t.newVersion>=y},x);
x.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){so("IDB_UNEXPECTEDLY_CLOSED",{dbName:uo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function mp(a,b,c){c=c===void 0?{}:c;return lp(a,b,c)}
function np(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Kd)&&c.addEventListener("blocked",function(){e()}),g.yield(Ro(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=za(g),Ho(f,a,"",-1);})}
;function op(a,b){this.name=a;this.options=b;this.j=!0;this.D=this.o=0}
op.prototype.i=function(a,b,c){c=c===void 0?{}:c;return mp(a,b,c)};
op.prototype.delete=function(a){a=a===void 0?{}:a;return np(this.name,a)};
function pp(a,b){return new Do("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function qp(a,b){if(!b)throw Io("openWithToken",uo(a.name));return a.open()}
op.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,v;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",ya(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=x.i,G=c.options,I=[],O=w(Object.keys(G.vb)),T=O.next();!T.done;T=O.next()){T=T.value;var Ja=G.vb[T],cb=Ja.Je===void 0?Number.MAX_VALUE:Ja.Je;!(y.h.version>=Ja.Cb)||y.h.version>=cb||y.h.objectStoreNames.contains(T)||I.push(T)}k=I;if(k.length===0){x.F(5);break}l=Object.keys(c.options.vb);
m=h.objectStoreNames();if(c.D<xm("ytidb_reopen_db_retries",0))return c.D++,h.close(),ro(new Do("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<xm("ytidb_remake_db_retries",1))){x.F(6);break}c.o++;return x.yield(c.delete(),7);case 7:return ro(new Do("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Eo(m,l);case 5:return x.return(h);case 2:n=za(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.F(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,pp(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!S("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ho(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw pp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,kf:b,upgrade:this.options.upgrade};return this.h=d=a()};var rp=new op("YtIdbMeta",{vb:{databases:{Cb:1}},upgrade:function(a,b){b(1)&&Xo(a,"databases",{keyPath:"actualName"})}});
function sp(a,b){var c;return A(function(d){if(d.h==1)return d.yield(qp(rp,b),2);c=d.i;return d.return(Wo(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return So(f.h.put(a,void 0)).then(function(){})})}))})}
function tp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(qp(rp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function up(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(qp(rp,b),2)):e.h!=3?(d=e.i,e.yield(Wo(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return fp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return gp(g)})}),3)):e.return(c)})}
function vp(a){return up(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function wp(a,b,c){return up(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function xp(a){var b,c;return A(function(d){if(d.h==1)return b=zn("YtIdbMeta hasAnyMeta other"),d.yield(up(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var yp,zp=new function(){}(new function(){});
function Ap(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=jo();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=vo)f=/WebKit\/([0-9]+)/.exec(Ic()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Ic()),f=!(f&&parseInt(f[1],10)>=602));if(f||Uc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(sp(d,zp),4);case 4:return e.yield(tp("yt-idb-test-do-not-use",zp),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Bp(){if(yp!==void 0)return yp;mo=!0;return yp=Ap().then(function(a){mo=!1;var b;if((b=io())!=null&&b.h){var c;b={hasSucceededOnce:((c=jo())==null?void 0:c.hasSucceededOnce)||a};var d;(d=io())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Cp(){return E("ytglobal.idbToken_")||void 0}
function Dp(){var a=Cp();return a?Promise.resolve(a):Bp().then(function(b){(b=b?zp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Ep=0;function Fp(a,b){Ep||(Ep=Hj.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Dp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield(wp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.F(6);break}f=e[0];return h.yield(np(f.actualName),7);case 7:return h.yield(tp(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=za(h),ro(g),d=!1;case 4:Hj.pa(Ep),Ep=0,d&&Fp(a,b),h.h=0}})}))}
function Gp(){var a;return A(function(b){return b.h==1?b.yield(Dp(),2):(a=b.i)?b.return(xp(a)):b.return(!1)})}
new sj;function Hp(a){if(!yn())throw a=new Do("AUTH_INVALID",{dbName:a}),ro(a),a;var b=zn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ip(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Dp(),2);case 2:g=m.i;if(!g)throw h=Io("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ro(h),h;to(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Hp(a);ya(m,3);return m.yield(sp(k,g),5);case 5:return m.yield(mp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=za(m),ya(m,7),m.yield(tp(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:za(m);case 8:throw l;}})}
function Jp(a,b,c){c=c===void 0?{}:c;return Ip(a,b,!1,c)}
function Kp(a,b,c){c=c===void 0?{}:c;return Ip(a,b,!0,c)}
function Lp(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Dp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();to(a);d=Hp(a);return e.yield(np(d.actualName,b),3)}return e.yield(tp(d.actualName,c),0)})}
function Mp(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(np(d.actualName,b),2):e.yield(tp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Np(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Dp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();to("LogsDatabaseV2");return d.yield(vp(b),3)}c=d.i;return d.yield(Mp(c,a,b),0)})}
function Op(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Dp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();to(a);return d.yield(np(a,b),3)}return d.yield(tp(a,c),0)})}
;function Pp(a,b){op.call(this,a,b);this.options=b;to(a)}
z(Pp,op);function Qp(a,b){var c;return function(){c||(c=new Pp(a,b));return c}}
Pp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Kp:Jp)(a,b,Object.assign({},c))};
Pp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Op:Lp)(this.name,a)};
function Rp(a,b){return Qp(a,b)}
;var Sp={},Tp=Rp("ytGcfConfig",{vb:(Sp.coldConfigStore={Cb:1},Sp.hotConfigStore={Cb:1},Sp),shared:!1,upgrade:function(a,b){b(1)&&(dp(Xo(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),dp(Xo(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Up(a){return qp(Tp(),a)}
function Vp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(Up(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Zo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Wp(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(Up(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Zo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Xp(a){var b,c;return A(function(d){return d.h==1?d.yield(Up(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Wo(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return jp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Yp(a){var b,c;return A(function(d){return d.h==1?d.yield(Up(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Wo(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return jp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Zp(){L.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ka(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
z(Zp,L);Zp.prototype.aa=function(){for(var a=w(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;L.prototype.aa.call(this)};function $p(){this.h=0;this.i=new Zp}
function aq(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:R("RAW_HOT_CONFIG_GROUP")}
function bq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.F(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Cp();if(!d){g.F(3);break}if(c){g.F(4);break}return g.yield(Yp(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Vp(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function cq(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!S("start_client_gcf"))return h.F(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Cp())?c?h.F(4):h.yield(Xp(d),5):h.F(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.F(0);g=c.configData;return h.yield(Wp(c,b,g,d),0)})}
function dq(){if(!$p.h){var a=new $p;$p.h=a}a=$p.h;var b=V()-a.h;if(!(a.h!==0&&b<xm("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
$p.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function eq(){return"INNERTUBE_API_KEY"in Wl&&"INNERTUBE_API_VERSION"in Wl}
function fq(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),oe:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ed:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),qh:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),qe:R("INNERTUBE_CONTEXT_HL"),pe:R("INNERTUBE_CONTEXT_GL"),re:R("INNERTUBE_HOST_OVERRIDE")||"",se:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),rh:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function gq(a){var b={client:{hl:a.qe,gl:a.pe,clientName:a.ed,clientVersion:a.innertubeContextClientVersion,configInfo:a.oe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=ym();c.length>0&&(b.request={internalExperimentFlags:c});c=a.ed;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=bn()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=wn())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&
(a=xn())&&b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=dq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var g;if(S("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=w(Object.entries(jm(R("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=w(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function hq(a,b,c){c=c===void 0?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().ih:(a=en(dn()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var iq=typeof TextEncoder!=="undefined"?new TextEncoder:null,jq=iq?function(a){return iq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function kq(a,b){this.version=a;this.args=b}
kq.prototype.serialize=function(){return{version:this.version,args:this.args}};function lq(a,b){this.topic=a;this.h=b}
lq.prototype.toString=function(){return this.topic};var mq=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Qb;M.prototype.publish=M.prototype.ib;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",mq);var nq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",nq);var oq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",oq);var pq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",pq);
D("ytPubsub2Pubsub2SkipSubKey",null);function qq(a,b){var c=rq();c&&c.publish.call(c,a.toString(),a,b)}
function sq(a){var b=tq,c=rq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(nq[d])try{if(f&&b instanceof lq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ad){var l=new h;h.Ad=l.version}var m=h.Ad}catch(y){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=p[k];var x=v}else x=[];f=n.call(m,h,x)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){bm(y)}},pq[b.toString()]?E("yt.scheduler.instance")?Hj.oa(g):tm(g,0):g())});
nq[d]=!0;oq[b.toString()]||(oq[b.toString()]=[]);oq[b.toString()].push(d);return d}
function uq(){var a=vq,b=sq(function(c){a.apply(void 0,arguments);wq(b)});
return b}
function wq(a){var b=rq();b&&(typeof a==="number"&&(a=[a]),Kb(a,function(c){b.unsubscribeByKey(c);delete nq[c]}))}
function rq(){return E("ytPubsub2Pubsub2Instance")}
;function xq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&qq("meta_logging_csi_event",{timerName:a,Ih:b})}
;var yq=void 0,zq=void 0;function Aq(){zq||(zq=vl(R("WORKER_SERIALIZATION_URL")));return zq||void 0}
function Bq(){var a=Aq();yq||a===void 0||(yq=new Worker(jb(a),void 0));return yq}
;var Cq=xm("max_body_size_to_compress",5E5),Dq=xm("min_body_size_to_compress",500),Eq=!0,Fq=0,Gq=0,Hq=xm("compression_performance_threshold_lr",250),Iq=xm("slow_compressions_before_abandon_count",4),Jq=!1,Kq=new Map,Lq=1,Mq=!0;function Nq(){if(typeof Worker==="function"&&Aq()&&!Jq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Kq.get(c.key);d&&(Oq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Kq.delete(c.key))}},b=Bq();
b&&(b.addEventListener("message",a),b.onerror=function(){Kq.clear()},Jq=!0)}}
function Pq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(Eq)try{var g=Qq(b);if(g!=null&&(g>Cq||g<Dq))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!Mq||!S("initial_gzip_use_main_thread"))){Jq||Nq();var h=Bq();if(h&&!e){Kq.set(Lq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Lq});Lq++;return}}var k=ul(jq(b));Oq(k,f,a,c,d)}}catch(l){cm(l),d(a,c)}else d(a,c)}
function Oq(a,b,c,d,e){Mq=!1;var f=V();b.ticks.gelc=f;Gq++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Hq&&(Fq++,S("abandon_compression_after_N_slow_zips")?Gq===xm("compression_disable_point")&&Fq>Iq&&(Eq=!1):Eq=!1);Rq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Sq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Eq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Qq(g);if(h!=null&&(h>Cq||h<Dq))return a;c=b?{level:1}:void 0;f=ul(jq(g),c);var k=V();e.ticks.gelc=k;if(b){Gq++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Hq)if(Fq++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=Fq/Gq;var l=Iq/xm("compression_disable_point");Gq>0&&Gq%xm("compression_disable_point")===0&&b>=l&&(Eq=!1)}else Eq=!1;Rq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return cm(m),a}}else return a}
function Qq(a){try{return(new Blob(a.split(""))).size}catch(b){return cm(b),null}}
function Rq(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||xq("gel_compression",a,{sampleRate:.1})}
;function Tq(a){a=Object.assign({},a);delete a.Authorization;var b=lg();if(b){var c=new Lj;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=cd(c.digest(),3)}return a}
;var Uq;function Vq(){Uq||(Uq=new ho("yt.innertube"));return Uq}
function Wq(a,b,c,d){if(d)return null;d=Vq().get("nextId",!0)||1;var e=Vq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Tq(c),requestTime:Math.round(V())};Vq().set("nextId",d+1,86400,!0);Vq().set("requests",e,86400,!0);return d}
function Xq(a){var b=Vq().get("requests",!0)||{};delete b[a];Vq().set("requests",b,86400,!0)}
function Yq(a){var b=Vq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(V())-d.requestTime<6E4)){var e=d.authState,f=Tq(hq(!1));Cg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),Zq(a,d.method,e,{}));delete b[c]}}Vq().set("requests",b,86400,!0)}}
;function $q(a){this.Vb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.nb=function(){};
this.now=Date.now;this.Fb=!1;var b;this.wd=(b=a.wd)!=null?b:100;var c;this.rd=(c=a.rd)!=null?c:1;var d;this.pd=(d=a.pd)!=null?d:2592E6;var e;this.od=(e=a.od)!=null?e:12E4;var f;this.qd=(f=a.qd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.ac=!!a.ac;var h;this.Yb=(h=a.Yb)!=null?h:.1;var k;this.jc=(k=a.jc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.nb&&(this.nb=a.nb);a.Fb&&(this.Fb=a.Fb);a.Vb&&(this.Vb=a.Vb);this.W=a.W;this.Ca=a.Ca;this.fa=a.fa;this.da=a.da;this.sendFn=a.sendFn;
this.Jc=a.Jc;this.Gc=a.Gc;ar(this)&&(!this.W||this.W("networkless_logging"))&&br(this)}
function br(a){ar(a)&&!a.Fb&&(a.h=!0,a.ac&&Math.random()<=a.Yb&&a.fa.Od(a.V),cr(a),a.da.wa()&&a.Pb(),a.da.listen(a.Jc,a.Pb.bind(a)),a.da.listen(a.Gc,a.Tc.bind(a)))}
r=$q.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(ar(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.V).then(function(e){d.id=e;c.da.wa()&&dr(c,d)}).catch(function(e){dr(c,d);
er(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(ar(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.da.wa()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.fa.set(e,d.V).catch(function(l){er(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
er(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(ar(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.mb(d.id,c.V):e=!0;c.da.bb&&c.W&&c.W("vss_network_hint")&&c.da.bb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.V).then(function(g){d.id=g;e&&c.fa.mb(d.id,c.V)}).catch(function(g){er(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.Pb=function(){var a=this;if(!ar(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.oa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.fa.bd("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(dr(a,b),3):(a.Tc(),c.return());a.i&&(a.i=0,a.Pb());c.h=0})},this.wd))};
r.Tc=function(){this.Ca.pa(this.i);this.i=0};
function dr(a,b){var c;return A(function(d){switch(d.h){case 1:if(!ar(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.F(2);break}return d.yield(a.fa.we(b.id,a.V),3);case 3:(c=d.i)||a.nb(Error("The request cannot be found in the database."));case 2:if(fr(a,b,a.pd)){d.F(4);break}a.nb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.F(5);break}return d.yield(a.fa.mb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=gr(a,
b));if(!b){d.F(0);break}if(!b.skipRetry||b.id===void 0){d.F(8);break}return d.yield(a.fa.mb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function gr(a,b){if(!ar(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=hr(f);(h=ir(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){m.F(2);break}if(!a.da.oc){m.F(3);break}return m.yield(a.da.oc(),3);case 3:if(a.da.wa()){m.F(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.F(6);
break}return m.yield(a.fa.Kc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.F(8);break}return b.sendCount<a.rd?m.yield(a.fa.Kc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.fa.mb(b.id,a.V),8);case 12:a.Ca.oa(function(){a.da.wa()&&a.Pb()},a.qd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.F(2):h.yield(a.fa.mb(b.id,a.V),2);a.da.bb&&a.W&&a.W("vss_network_hint")&&a.da.bb(!0);d(e,f);h.h=0})};
return b}
function fr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function cr(a){if(!ar(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.bd("QUEUED",a.V).then(function(b){b&&!fr(a,b,a.od)?a.Ca.oa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.F(2):c.yield(a.fa.Kc(b.id,a.V),2);cr(a);c.h=0})}):a.da.wa()&&a.Pb()})}
function er(a,b){a.Dd&&!a.da.wa()?a.Dd(b):a.handleError(b)}
function ar(a){return!!a.V||a.Vb}
function hr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function ir(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var jr;
function kr(){if(jr)return jr();var a={};jr=Rp("LogsDatabaseV2",{vb:(a.LogsRequestsStore={Cb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Xo(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),dp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return jr()}
;function lr(a){return qp(kr(),a)}
function mr(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(lr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Zo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();nr(c);return g.return(f)})}
function or(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(lr(b),2);if(m.h!=3)return d=m.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k="prev",S("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Wo(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return jp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=V();nr(c);return m.return(l)})}
function pr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(lr(b),2);c=d.i;return d.return(Wo(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",So(f.h.put(g,void 0)).then(function(){return g})})}))})}
function qr(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(lr(b),2);e=f.i;return f.return(Wo(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),So(h.h.put(k,void 0)).then(function(){return k})):Mo.resolve(void 0)})}))})}
function rr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(lr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function sr(a){var b,c;return A(function(d){if(d.h==1)return d.yield(lr(a),2);b=d.i;c=V()-2592E6;return d.yield(Wo(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return fp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return gp(f)})})}),0)})}
function tr(){A(function(a){return a.yield(Np(),0)})}
function nr(a){S("nwl_csi_killswitch")||xq("networkless_performance",a,{sampleRate:1})}
;var ur={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506};var vr={},wr=Rp("ServiceWorkerLogsDatabase",{vb:(vr.SWHealthLog={Cb:1},vr),shared:!0,upgrade:function(a,b){b(1)&&dp(Xo(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function xr(a){return qp(wr(),a)}
function yr(a){var b,c;A(function(d){if(d.h==1)return d.yield(xr(a),2);b=d.i;c=V()-2592E6;return d.yield(Wo(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return fp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return gp(f)})})}),0)})}
function zr(a){var b;return A(function(c){if(c.h==1)return c.yield(xr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Ar={},Br=0;function Cr(a){var b=new Image,c=""+Br++;Ar[c]=b;b.onload=b.onerror=function(){delete Ar[c]};
b.src=a}
;var Dr;function Er(){Dr||(Dr=new ho("yt.offline"));return Dr}
function Fr(a){if(S("offline_error_handling")){var b=Er().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Er().set("errors",b,2592E3,!0)}}
;function Gr(){this.h=new Map;this.i=!1}
function Hr(){if(!Gr.h){var a=E("yt.networkRequestMonitor.instance")||new Gr;D("yt.networkRequestMonitor.instance",a);Gr.h=a}return Gr.h}
Gr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Gr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Gr.prototype.removeParams=function(a){return a.split("?")[0]};
Gr.prototype.removeParams=Gr.prototype.removeParams;Gr.prototype.isEndpointCFR=Gr.prototype.isEndpointCFR;Gr.prototype.requestComplete=Gr.prototype.requestComplete;Gr.getInstance=Hr;function Ir(){ai.call(this);var a=this;this.j=!1;this.i=Gj();this.i.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=Er().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;bm(d)}Er().set("errors",{},2592E3,!0)}}})}
z(Ir,ai);function Jr(){if(!Ir.h){var a=E("yt.networkStatusManager.instance")||new Ir;D("yt.networkStatusManager.instance",a);Ir.h=a}return Ir.h}
r=Ir.prototype;r.wa=function(){return this.i.wa()};
r.bb=function(a){this.i.i=a};
r.ee=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.Vd=function(){this.j=!0};
r.listen=function(a,b){return this.i.listen(a,b)};
r.oc=function(a){a=Ej(this.i,a);a.then(function(b){S("use_cfr_monitor")&&Hr().requestComplete("generate_204",b)});
return a};
Ir.prototype.sendNetworkCheckRequest=Ir.prototype.oc;Ir.prototype.listen=Ir.prototype.listen;Ir.prototype.enableErrorFlushing=Ir.prototype.Vd;Ir.prototype.getWindowStatus=Ir.prototype.ee;Ir.prototype.networkStatusHint=Ir.prototype.bb;Ir.prototype.isNetworkAvailable=Ir.prototype.wa;Ir.getInstance=Jr;function Kr(a){a=a===void 0?{}:a;ai.call(this);var b=this;this.i=this.u=0;this.j=Jr();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Lr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Lr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){bi(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){bi(b,"publicytnetworkstatus-offline")})))}
z(Kr,ai);Kr.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Kr.prototype.bb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Kr.prototype.oc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&Hr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.bb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Lr(a,b){a.rateLimit?a.i?(Hj.pa(a.u),a.u=Hj.oa(function(){a.o!==b&&(bi(a,b),a.o=b,a.i=V())},a.rateLimit-(V()-a.i))):(bi(a,b),a.o=b,a.i=V()):bi(a,b)}
;var Mr;function Rr(){var a=$q.call;Mr||(Mr=new Kr({wh:!0,oh:!0}));a.call($q,this,{fa:{Od:sr,mb:rr,bd:or,we:pr,Kc:qr,set:mr},da:Mr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;cm(new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else bm(b)},
nb:cm,sendFn:Sr,now:V,Dd:Fr,Ca:go(),Jc:"publicytnetworkstatus-online",Gc:"publicytnetworkstatus-offline",ac:!0,Yb:.1,jc:xm("potential_esf_error_limit",10),W:S,Fb:!(yn()&&Tr())});this.j=new sj;S("networkless_immediately_drop_all_requests")&&tr();Op("LogsDatabaseV2")}
z(Rr,$q);function Ur(){var a=E("yt.networklessRequestController.instance");a||(a=new Rr,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&Dp().then(function(b){a.V=b;br(a);a.j.resolve();a.ac&&Math.random()<=a.Yb&&a.V&&yr(a.V);S("networkless_immediately_drop_sw_health_store")&&Vr(a)}));
return a}
Rr.prototype.writeThenSend=function(a,b){b||(b={});b=Wr(a,b);yn()||(this.h=!1);$q.prototype.writeThenSend.call(this,a,b)};
Rr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Wr(a,b);yn()||(this.h=!1);$q.prototype.sendThenWrite.call(this,a,b,c)};
Rr.prototype.sendAndWrite=function(a,b){b||(b={});b=Wr(a,b);yn()||(this.h=!1);$q.prototype.sendAndWrite.call(this,a,b)};
Rr.prototype.awaitInitialization=function(){return this.j.promise};
function Vr(a){var b;A(function(c){if(!a.V)throw b=Io("clearSWHealthLogsDb"),b;return c.return(zr(a.V).catch(function(d){a.handleError(d)}))})}
function Sr(a,b,c,d){d=d===void 0?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Xr(a,b);if(S("use_request_time_ms_header"))b.headers&&nm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Cm(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Cm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new ab({url:a});if(k.j&&k.i||k.o){var l=Yb(Zb(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(hc),p=fc(a,0,"ri",n);if(p<0)var t=null;else{var v=a.indexOf("&",p);if(v<0||v>n)v=n;t=decodeURIComponent(a.slice(p+3,v!==-1?v:0).replace(/\+/g," "))}m=t!=="1"}var x=!m;break b}}catch(G){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(G){}y=!1}c=y?!0:!1}else c=
!1;c||Cr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Pq(a,b.postBody,b,Gm,d)):Pq(a,JSON.stringify(b.postParams),b,Fm,d):Gm(a,b)}
function Wr(a,b){S("use_event_time_ms_header")&&nm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function Xr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Hr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Hr().requestComplete(a,!0);d(e,f)}}
function Tr(){return $b(document.location.toString())!=="www.youtube-nocookie.com"}
;var Yr=!1,Zr=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Yr};D("ytNetworklessLoggingInitializationOptions",Zr);function $r(){var a;A(function(b){if(b.h==1)return b.yield(Dp(),2);a=b.i;if(!a||!yn()&&!S("nwl_init_require_datasync_id_killswitch")||!Tr())return b.F(0);Yr=!0;Zr.isNwlInitialized=Yr;return b.yield(Ur().awaitInitialization(),0)})}
;function as(a){var b=this;this.config_=null;a?this.config_=a:eq()&&(this.config_=fq());Bn(function(){Yq(b)},5E3)}
as.prototype.isReady=function(){!this.config_&&eq()&&(this.config_=fq());return!!this.config_};
function Zq(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||S("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=Wq(b,c,l,k)),p)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(G,I){Xq(p);t(G,I)};
c.onFetchSuccess=function(G,I){Xq(p);v(G,I)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Ur().writeThenSend(m,g):Ur().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var y=g.postBody;typeof y!=="string"&&(y=JSON.stringify(g.postBody));Pq(m,y,g,Gm,x)}else Pq(m,JSON.stringify(g.postParams),g,Fm,x)}else S("web_all_payloads_via_jspb")?Gm(m,g):Fm(m,g)}catch(G){if(G.name==="InvalidAccessError")p&&(Xq(p),p=0),cm(Error("An extension is blocking network request."));else throw G;}p&&Bn(function(){Yq(a)},5E3)}
!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&cm(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);bm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.re)&&(h=f);var k=a.config_.se||!1,l=hq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=lm(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(E("ytNetworklessLoggingInitializationOptions")?Zr.isNwlInitialized:Yr)?Bp().then(function(n){e(n)}):e(!1)}
;var bs=0,cs=Wc?"webkit":Vc?"moz":Tc?"ms":Sc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++bs});var ds={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function es(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ds||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function gs(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
es.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
es.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
es.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var yg=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",yg);var hs=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",hs);
function is(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return xg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&Cg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function js(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=is(a,b,c,d);if(e)return e;e=++hs.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new es(h);if(!Lg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new es(h);
h.currentTarget=a;return c.call(a,h)};
g=am(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ks()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);yg[e]=[a,b,c,g,d];return e}
function ls(a){a&&(typeof a=="string"&&(a=[a]),Kb(a,function(b){if(b in yg){var c=yg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ks()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete yg[b]}}))}
var ks=pi(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function ms(a){this.H=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=js(window,"mousemove",Wa(this.Y,this));a=Wa(this.R,this);typeof a==="function"&&(a=am(a));this.Z=window.setInterval(a,25)}
Za(ms,L);ms.prototype.Y=function(a){a.h===void 0&&gs(a);var b=a.h;a.i===void 0&&gs(a);this.h=new ug(b,a.i)};
ms.prototype.R=function(){if(this.h){var a=V();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.H();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
ms.prototype.aa=function(){window.clearInterval(this.Z);ls(this.U)};var ns={};
function ps(a){var b=a===void 0?{}:a;a=b.Fe===void 0?!1:b.Fe;b=b.Wd===void 0?!0:b.Wd;if(E("_lact",window)==null){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&qs();js(document,"keydown",qs);js(document,"keyup",qs);js(document,"mousedown",qs);js(document,"mouseup",qs);a?js(window,"touchmove",function(){rs("touchmove",200)},{passive:!0}):(js(window,"resize",function(){rs("resize",200)}),b&&js(window,"scroll",function(){rs("scroll",200)}));
new ms(function(){rs("mouse",100)});
js(document,"touchstart",qs,{passive:!0});js(document,"touchend",qs,{passive:!0})}}
function rs(a,b){ns[a]||(ns[a]=!0,Hj.oa(function(){qs();ns[a]=!1},b))}
function qs(){E("_lact",window)==null&&ps();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function ss(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var ts=C.ytPubsubPubsubInstance||new M,us=C.ytPubsubPubsubSubscribedKeys||{},vs=C.ytPubsubPubsubTopicToKeys||{},ws=C.ytPubsubPubsubIsSynchronous||{};function xs(a,b){var c=ys();if(c&&b){var d=c.subscribe(a,function(){function e(){us[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{ws[a]?e():tm(e,0)}catch(g){bm(g)}},void 0);
us[d]=!0;vs[a]||(vs[a]=[]);vs[a].push(d);return d}return 0}
function zs(a){var b=ys();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Kb(a,function(c){b.unsubscribeByKey(c);delete us[c]}))}
function As(a,b){var c=ys();c&&c.publish.apply(c,arguments)}
function Bs(a){var b=ys();if(b)if(b.clear(a),a)Cs(a);else for(var c in vs)Cs(c)}
function ys(){return C.ytPubsubPubsubInstance}
function Cs(a){vs[a]&&(a=vs[a],Kb(a,function(b){us[b]&&delete us[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Qb;M.prototype.publish=M.prototype.ib;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",ts);D("ytPubsubPubsubTopicToKeys",vs);D("ytPubsubPubsubIsSynchronous",ws);D("ytPubsubPubsubSubscribedKeys",us);var Ds=Symbol("injectionDeps");function Es(a){this.name=a}
Es.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Fs(a){this.key=a}
function Gs(){this.i=new Map;this.j=new Map;this.h=new Map}
function Hs(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);if(c)try{c.Eh(a.resolve(b.lc))}catch(d){c.Ch(d)}}
Gs.prototype.resolve=function(a){return a instanceof Fs?Is(this,a.key,[],!0):Is(this,a,[])};
function Is(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.zd!==void 0)var e=d.zd;else if(d.sf)e=d[Ds]?Js(a,d[Ds],c):[],e=d.sf.apply(d,ka(e));else if(d.yd){e=d.yd;var f=e[Ds]?Js(a,e[Ds],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Hh||a.h.set(b,e);return e}
function Js(a,b,c){return b?b.map(function(d){return d instanceof Fs?Is(a,d.key,c,!0):Is(a,d,c)}):[]}
;var Ks;function Ls(){Ks||(Ks=new Gs);return Ks}
;var Ms=window;function Ns(){var a,b;return"h5vcc"in Ms&&((a=Ms.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Ms.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Ms&&Ms.performance.mark&&Ms.performance.measure?2:0}
function Os(a){var b=Ns();switch(b){case 1:Ms.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ms.performance.mark(a+"-start");break;case 0:break;default:Bb(b,"unknown trace type")}}
function Ps(a){var b=Ns();switch(b){case 1:Ms.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Ms.performance.mark(c);Ms.performance.measure(a,b,c);break;case 0:break;default:Bb(b,"unknown trace type")}}
;var Qs=S("web_enable_lifecycle_monitoring")&&Ns()!==0,Rs=S("web_enable_lifecycle_monitoring");function Ss(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Ts(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?go():d;this.j=c;this.scheduler=d;this.i=new sj;this.h=a;for(a={Ya:0};a.Ya<this.h.length;a={ic:void 0,Ya:a.Ya},a.Ya++)a.ic=this.h[a.Ya],c=function(e){return function(){e.ic.zc();b.h[e.Ya].kc=!0;b.h.every(function(f){return f.kc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.ic),d=this.scheduler.Wa(c,d),this.h[a.Ya]=Object.assign({},a.ic,{zc:c,
jobId:d})}
function Us(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.kc||(a.scheduler.pa(c.jobId),a.scheduler.Wa(c.zc,10))}
Ts.prototype.cancel=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.kc||this.scheduler.pa(b.jobId),b.kc=!0;this.i.resolve()};
Ts.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Vs(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};Qs&&Os(this.state)}
r=Vs.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;Qs&&Ps(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Us(this.j),this.j=void 0);Ws(this,a,b);this.state=a;Qs&&Os(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Xs(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Xs(a,b){var c=b.filter(function(e){return Ys(a,e)===10}),d=b.filter(function(e){return Ys(a,e)!==10});
return a.B.Gh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Me.apply(a,[c].concat(ka(e))),2);a.td.apply(a,[d].concat(ka(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Ne.apply(a,[c].concat(ka(e)));a.td.apply(a,[d].concat(ka(e)))}}
r.Ne=function(a){for(var b=B.apply(1,arguments),c=go(),d=w(a),e=d.next(),f={};!e.done;f={Hb:void 0},e=d.next())f.Hb=e.value,c.Bb(function(g){return function(){Zs(g.Hb.name);$s(function(){return g.Hb.callback.apply(g.Hb,ka(b))});
at(g.Hb.name)}}(f))};
r.Me=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=go(),d=w(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.F(0);f.Ra=e.value;f.Tb=void 0;g=function(k){return function(){Zs(k.Ra.name);var l=$s(function(){return k.Ra.callback.apply(k.Ra,ka(b))});
Yd(l)?k.Tb=S("web_lifecycle_error_handling_killswitch")?l.then(function(){at(k.Ra.name)}):l.then(function(){at(k.Ra.name)},function(m){Ss(m);
at(k.Ra.name)}):at(k.Ra.name)}}(f);
c.Bb(g);return f.Tb?h.yield(f.Tb,3):h.F(3)}f={Ra:void 0,Tb:void 0};e=d.next();return h.F(2)})};
r.td=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{zc:function(){Zs(e.name);$s(function(){return e.callback.apply(e,ka(b))});
at(e.name)},
priority:Ys(c,e)}});
d.length&&(this.j=new Ts(d))};
function Ys(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Zs(a){Qs&&a&&Os(a)}
function at(a){Qs&&a&&Ps(a)}
function Ws(a,b,c){Rs&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(Vs.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function $s(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Ss(b)}}
;function bt(a){Vs.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.D},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var ct;z(bt,Vs);bt.prototype.i=function(a,b){var c=this;this.h=Bn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
bt.prototype.D=function(a,b){this.h&&(Hj.pa(this.h),this.h=null);a(b==null?void 0:b.event)};
function dt(){ct||(ct=new bt);return ct}
;var et=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return et});function ft(){this.store={};this.h={}}
ft.prototype.storePayload=function(a,b){a=gt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
ft.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=ht(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
ft.prototype.extractMatchingEntries=function(a){a=ht(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
ft.prototype.getSequenceCount=function(a){a=ht(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function ht(a,b){var c=gt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&gt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(jt(b.auth,g[0])){var h=b.isJspb;jt(h===void 0?"undefined":h?"true":"false",g[1])&&jt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),jt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function jt(a,b){return a===void 0||a==="undefined"?!0:a===b}
ft.prototype.getSequenceCount=ft.prototype.getSequenceCount;ft.prototype.extractMatchingEntries=ft.prototype.extractMatchingEntries;ft.prototype.smartExtractMatchingEntries=ft.prototype.smartExtractMatchingEntries;ft.prototype.storePayload=ft.prototype.storePayload;function gt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function kt(a,b){if(a)return a[b.name]}
;var lt=xm("initial_gel_batch_timeout",2E3),mt=xm("gel_queue_timeout_max_ms",6E4),nt=xm("gel_min_batch_size",5),ot=void 0;function pt(){this.o=this.h=this.i=0;this.j=!1}
var qt=new pt,rt=new pt,st=new pt,tt=new pt,ut,vt=!0,wt=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",wt);var xt={};function zt(){var a=E("yt.logging.ims");a||(a=new ft,D("yt.logging.ims",a));return a}
function At(a,b){if(a.endpoint==="log_event"){Bt();var c=Ct(a),d=Dt(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=ur[d||""];var f,g,h,k=Ls().resolve(new Fs($p))==null?void 0:(f=aq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;k=Et(e.tier);if(k===400){Ft(a,b);return}}xt[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};zt().storePayload(e,a.payload);Gt(b,c,e,d==="gelDebuggingEvent")}}
function Gt(a,b,c,d){function e(){Ht({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(ot=new a);a=xm("tvhtml5_logging_max_batch_ads_fork")||xm("tvhtml5_logging_max_batch")||xm("web_logging_max_batch")||100;var g=V(),h=It(f,c.tier),k=h.o;d&&(h.j=!0);d=0;c&&(d=zt().getSequenceCount(c));d>=1E3?e():d>=a?ut||(ut=Jt(function(){e();ut=void 0},0)):g-k>=10&&(Kt(f,c.tier),h.o=g)}
function Ft(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&zt().storePayload({isJspb:!1},a.payload);Bt();var c=Ct(a),d=new Map;d.set(c,[a.payload]);var e=Dt(a.payload)||"";b&&(ot=new b);return new qi(function(f,g){ot&&ot.isReady()?Lt(d,ot,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Ct(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);wt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Ht(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new qi(function(e,f){var g=It(c,d),h=g.j;g.j=!1;Mt(g.i);Mt(g.h);g.h=0;ot&&ot.isReady()?d===void 0&&S("enable_web_tiered_gel")?Nt(e,f,a,b,c,300,h):Nt(e,f,a,b,c,d,h):(Kt(c,d),e())})}
function Nt(a,b,c,d,e,f,g){var h=ot;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=S("enable_web_tiered_gel")?zt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):zt().extractMatchingEntries(e),k.set(d,f);else for(d=w(Object.keys(xt)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?zt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):zt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete xt[l];Lt(k,h,a,b,c,!1,g)}
function Kt(a,b){function c(){Ht({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=It(a,b),e=d===tt||d===st?5E3:mt;S("web_gel_timeout_cap")&&!d.h&&(e=Jt(function(){c()},e),d.h=e);
Mt(d.i);e=R("LOGGING_BATCH_TIMEOUT",xm("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&vt&&(e=lt);e=Jt(function(){xm("gel_min_batch_size")>0?zt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=nt&&c():c()},e);
d.i=e}
function Lt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(V()),k=a.size,l=(g===void 0?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=w(a);var m=a.next();for(g={};!m.done;g={Fc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Ic:void 0,Hc:void 0},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Eg({context:gq(b.config_||fq())});if(!Pa(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=wt[m])&&
Ot(g.batchRequest,m,n);delete wt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Pt(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.Ic=function(p){S("start_client_gcf")&&Hj.oa(function(){return A(function(t){return t.yield(Qt(p),0)})});
k--;k||c()};
g.Fc=0;g.Hc=function(p){return function(){p.Fc++;if(e.bypassNetworkless&&p.Fc===1)try{Zq(b,l,p.batchRequest,Rt({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Ic,p.Hc,f)),vt=!1}catch(t){bm(t),d()}k--;k||c()}}(g);
try{Zq(b,l,g.batchRequest,Rt(e,g.dangerousLogToVisitorSession,g.Ic,g.Hc,f)),vt=!1}catch(p){bm(p),d()}}}
function Rt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,jh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};St()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Pt(a,b,c){St()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),Xl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ot(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Bt(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=wm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(et=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",et),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function St(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Jt(a,b){return S("transport_use_scheduler")===!1?tm(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?Bn(function(){if(dt().currentState==="none")a();else{var c={};dt().install((c.none={callback:a},c))}},b):Bn(a,b)}
function Mt(a){S("transport_use_scheduler")?Hj.pa(a):window.clearTimeout(a)}
function Qt(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=kt(d,zl),g=(f=d)==null?void 0:f.hotHashData,h=kt(d,yl),l=(k=d)==null?void 0:k.coldHashData,(m=Ls().resolve(new Fs($p)))?g?e?n.yield(bq(m,g,e),2):n.yield(bq(m,g),2):n.F(2):n.return()):l?h?n.yield(cq(m,l,h),0):n.yield(cq(m,l),0):n.F(0)})}
function It(a,b){b=b===void 0?200:b;return a?b===300?tt:rt:b===300?st:qt}
function Dt(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,ur[b])return b}
function Et(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Tt=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Tt);
function Ut(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ss();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Tt[b]=b in Tt?Tt[b]+1:0,a.sequence={index:Tt[b],groupKey:b},d.endOfSequence&&delete Tt[d.sequenceGroup]);(d.sendIsolatedPayload?Ft:At)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function qo(a,b,c){c=c===void 0?{}:c;var d=as;R("ytLoggingEventsDefaultDisabled",!1)&&as===as&&(d=null);Ut(a,b,d,c)}
;function Vt(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var Wt=new Set,Xt=0,Yt=0,Zt=0,$t=[],au=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function po(a){bu(a)}
function cu(a){bu(a,"WARNING")}
function du(a){a instanceof Error?bu(a):(a=Qa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",cu(a))}
function bu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(Xt>=5))){d=$t;var k=Sb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=Ym(a.args[p],"params."+p,c,n),
n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var v="params."+p,x=$m(t[p]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=$m(t)}if(d.length)for(p=0;p<d.length&&!(n=Ym(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=
p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Um();c=w(a.Sa);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.xh)){a=d.weight;break a}a=w(a.Oa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=w(Pm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[p.name])for(e=w(c.hc[p.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Dc(f);break}p.params||(p.params={});a=Um();p.params["params.errorServiceSignature"]="msg="+a.Sa.length+"&cb="+a.Oa.length;p.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Hg(Ig,"sample")).constructor!==Hg&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(p);if(p.sampleWeight!==0&&!Wt.has(p.message)){if(g&&S("web_enable_error_204"))eu(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Vm.ib("handleError",p),S("record_app_crashed_web")&&Zt===0&&p.sampleWeight===1&&(Zt++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),qo("appCrashed",g)),Yt++):b==="WARNING"&&Vm.ib("handleWarning",p);if(S("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=w(au);for(c=a.next();!c.done;c=a.next())if(wo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,
sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Yl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=w(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=w(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(qo("clientError",h),(g==="ERROR"||S("errors_flush_gel_always_killswitch"))&&Ht(void 0,void 0,!1))}S("suppress_error_204_logging")||eu(b,p)}try{Wt.add(p.message)}catch(y){}Xt++}}}
function eu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Gm(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function fu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ka(b))}
;function gu(){this.register=new Map}
function hu(a){a=w(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Bh("ABORTED")}
gu.prototype.clear=function(){hu(this);this.register.clear()};
var iu=new gu;var ju=Date.now().toString();
function ku(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(ju)for(a=1,b=0;b<ju.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ju.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var lu,mu=C.ytLoggingDocDocumentNonce_;mu||(mu=ku(),D("ytLoggingDocDocumentNonce_",mu));lu=mu;function nu(a){this.h=a}
r=nu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new Bl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&gf(a,2,te(this.h.veType)),this.h.veCounter!==void 0&&gf(a,6,te(this.h.veCounter)),this.h.elementIndex!==void 0&&gf(a,3,te(this.h.elementIndex)),this.h.isCounterfactual&&gf(a,5,pe(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();uf(a,Bl,7,b)}this.h.youtubeData!==void 0&&uf(a,Al,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function ou(a){return R("client-screen-nonce-store",{})[a===void 0?0:a]}
function pu(a,b){b=b===void 0?0:b;var c=R("client-screen-nonce-store");c||(c={},Xl("client-screen-nonce-store",c));c[b]=a}
function qu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ru(a){return R(qu(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",ru);function su(){var a=R("csn-to-ctt-auth-info");a||(a={},Xl("csn-to-ctt-auth-info",a));return a}
function tu(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function uu(a){a=ou(a===void 0?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",uu);function vu(a,b,c){var d=su();(c=uu(c))&&delete d[c];b&&(d[a]=b)}
function wu(a){return su()[a]}
D("yt_logging_screen.getCttAuthInfo",wu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==ou(c)||b!==R(qu(c)))if(vu(a,d,c),pu(a,c),Xl(qu(c),b),b=function(){setTimeout(function(){a&&qo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:lu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function xu(){var a=Dg(yu),b;return(new qi(function(c,d){a.onSuccess=function(e){sm(e)?c(new zu(e)):d(new Au("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Au("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Au("Request timed out","net.timeout",e))};
b=Gm("//googleads.g.doubleclick.net/pagead/id",a)})).pc(function(c){if(c instanceof yi){var d;
(d=b)==null||d.abort()}return wi(c)})}
function Au(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
z(Au,$a);function zu(a){this.xhr=a}
;function Bu(){this.h=0;this.i=null}
Bu.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:Cu(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:Du(a):this};
Bu.prototype.getValue=function(){return this.i};
Bu.prototype.isRejected=function(){return this.h==2};
Bu.prototype.$goog_Thenable=!0;function Du(a){var b=new Bu;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function Cu(a){var b=new Bu;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function Eu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:nm(a)?"same-origin":"cors",credentials:nm(a)?"same-origin":"include"};b={};for(var d=w(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Fu(){return jg()||(Yc||Zc)&&wo("applewebkit")&&!wo("version")&&(!wo("safari")||wo("gsa/"))||Xc&&wo("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Gu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Fl)if(Fl[d]==c.embeddedPlayerMode){b=Fl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Hu(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Iu;this.isTimeout=a instanceof Au&&a.errorCode=="net.timeout";this.isCanceled=a instanceof yi}
z(Hu,$a);Hu.prototype.name="BiscottiError";function Iu(){$a.call(this,"Biscotti ID is missing from server")}
z(Iu,$a);Iu.prototype.name="BiscottiMissingError";var yu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ju=null;function Ku(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Fu())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if(Bg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Gu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Ql(){var a=Ku();if(a!==void 0)return wi(a);Ju||(Ju=xu().then(Lu).pc(function(b){return Mu(2,b)}));
return Ju}
function Lu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Iu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Iu;a=a.id;Rl(a);Ju=Cu(a);Nu(18E5,2);return a}
function Mu(a,b){b=new Hu(b);Rl("");Ju=Du(b);a>0&&Nu(12E4,a-1);throw b;}
function Nu(a,b){tm(function(){xu().then(Lu,function(c){return Mu(b,c)}).pc(oi)},a)}
function Ou(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Ql()}catch(b){return wi(b)}}
;var yb=ha(["data-"]);function Pu(a){a&&(a.dataset?a.dataset[Qu()]="true":Ab(a))}
function Ru(a){return a?a.dataset?a.dataset[Qu()]:a.getAttribute("data-loaded"):null}
var Su={};function Qu(){return Su.loaded||(Su.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Tu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Dg(b);this.assets=a.assets||{};this.attrs=a.attrs||Dg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Tu.prototype.clone=function(){var a=new Tu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Oa(c)=="object"?a[b]=Dg(c):a[b]=c}return a};var Uu=["share/get_share_panel"],Vu=["share/get_web_player_share_panel"],Wu=["feedback"],Xu=["notification/modify_channel_preference"],Yu=["browse/edit_playlist"],Zu=["subscription/subscribe"],$u=["subscription/unsubscribe"];var av=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",av);function bv(a){Sl(av,arguments)}
;function cv(a,b,c){dv(a,b,c===void 0?null:c)}
function ev(a){a=fv(a);var b=document.getElementById(a);b&&(Bs(a),b.parentNode.removeChild(b))}
function gv(a,b){a&&b&&(a=""+Ra(b),(a=hv[a])&&zs(a))}
function dv(a,b,c){c=c===void 0?null:c;var d=fv(a),e=document.getElementById(d),f=e&&Ru(e),g=e&&!f;f?b&&b():(b&&(f=xs(d,b),b=""+Ra(b),hv[b]=f),g||(e=iv(a,d,function(){Ru(e)||(Pu(e),As(d),tm(function(){Bs(d)},0))},c)))}
function iv(a,b,c,d){d=d===void 0?null:d;var e=Kg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ib(e,wl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function fv(a){var b=document.createElement("a");wb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Wb(a)}
var hv={};function jv(a){var b=kv(a),c=document.getElementById(b),d=c&&Ru(c);d||c&&!d||(c=lv(a,b,function(){if(!Ru(c)){Pu(c);As(b);var e=Xa(Bs,b);tm(e,0)}}))}
function lv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=wl(a);Db(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function kv(a){var b=Kg("A");wb(b,new pb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Wb(a)}
;function mv(a){var b=B.apply(1,arguments);if(!nv(a)||b.some(function(d){return!nv(d)}))throw Error("Only objects may be merged.");
b=w(b);for(var c=b.next();!c.done;c=b.next())ov(a,c.value)}
function ov(a,b){for(var c in b)if(nv(b[c])){if(c in a&&!nv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ov(a[c],b[c])}else if(pv(b[c])){if(c in a&&!pv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);qv(a[c],b[c])}else a[c]=b[c];return a}
function qv(a,b){b=w(b);for(var c=b.next();!c.done;c=b.next())c=c.value,nv(c)?a.push(ov({},c)):pv(c)?a.push(qv([],c)):a.push(c);return a}
function nv(a){return typeof a==="object"&&!Array.isArray(a)}
function pv(a){return typeof a==="object"&&Array.isArray(a)}
;var rv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function sv(a,b){var c=c===void 0?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=$b(window.location.href);e&&d.push(e);e=$b(a);if(Jb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),wb(d,a),a=d.href)if(a=ac(a),a=bc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:uu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&tv(a,b,f)}else tv(a,b)}
function tv(a,b,c){a=uv(a);b=b?dc(b):"";c=c||5;Fu()&&gn(a,b,c)}
function uv(a){for(var b=w(rv),c=b.next();!c.done;c=b.next())a=jc(a,c.value);return"ST-"+Wb(a).toString(36)}
;function vv(a){kq.call(this,1,arguments);this.csn=a}
z(vv,kq);var tq=new lq("screen-created",vv),wv=[],xv=0,yv=new Map,zv=new Map,Av=new Map;
function Bv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Cv({cttAuthInfo:wu(b)||void 0},b),g=w(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(zg(k)||!k.trackingParams&&!k.veType)&&cu(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=Dv(h,b);if(k.veType&&!zv.has(l)&&!Av.has(l)&&!e){if(!S("il_attach_cache_limit")||yv.size<1E3){yv.set(l,[a,b,c,h]);return}S("il_attach_cache_limit")&&yv.size>1E3&&cu(new U("IL Attach cache exceeded limit"))}h=Dv(c,b);yv.has(h)?
Ev(c,b):Av.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Mb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Fv("visualElementAttached",f,c):a?Ut("visualElementAttached",c,a,f):qo("visualElementAttached",c,f)}
function Fv(a,b,c){wv.push({Ee:a,payload:c,th:void 0,options:b});xv||(xv=uq())}
function vq(a){if(wv){for(var b=w(wv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,qo(c.Ee,c.payload,c.options));wv.length=0}xv=0}
function Dv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Ev(a,b){a=Dv(a,b);yv.has(a)&&(b=yv.get(a)||[],Bv(b[0],b[1],b[2],[b[3]],!0),yv.delete(a))}
function Cv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Gv(){try{return!!self.localStorage}catch(a){return!1}}
;function Hv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Iv(a){if(Gv()){var b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Hv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Jv(){if(!Gv())return!1;var a=zn(),b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=Hv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Kv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(R("INNERTUBE_CLIENT_NAME")==="WEB"||R("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Lv(a){if(R("LOGGED_IN",!0)&&Kv()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=$b(window.location.href);c&&b.push(c);c=$b(a);Jb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=ac(a),(b=bc(b))?(b=uv(b),b=(b=hn(b)||null)?jm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Kv()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&sv(a,b)}}
;function Mv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&sv(a,b);if(c)return!1;Lv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=ec(a,e);Lv(a);f=a+f;var h=h===void 0?tb:h;a:if(h=h===void 0?tb:h,f instanceof pb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof rb&&b.te(f)){h=new pb(f);break a}h=void 0}g=g.location;h=vb(h||qb);h!==void 0&&(g.href=h);return!0}
;function Nv(a){if(Bg(R("PLAYER_VARS",{}))!="1"){a&&Pl();try{Ou().then(function(){},function(){}),tm(Nv,18E5)}catch(b){bm(b)}}}
;var Ov=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Pv(){var a=a===void 0?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;var b=Yb(Zb(5,a));if(S("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=km(a).theme;return Ov.get(c)||null}catch(d){}return null}
;function Qv(){this.h={};if(this.i=kn()){var a=hn("CONSISTENCY");a&&Rv(this,{encryptedTokenJarContents:a})}}
Qv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ma.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=w(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Rv(this,a)}};
function Rv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&gn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Sv=window.location.hostname.split(".").slice(-2).join(".");function Tv(){this.j=-1;var a=R("LOCATION_PLAYABILITY_TOKEN");R("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Uv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Vv;function Wv(){Vv=E("yt.clientLocationService.instance");Vv||(Vv=new Tv,D("yt.clientLocationService.instance",Vv));return Vv}
r=Tv.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,R("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Uv(this))&&this.h.set("yt-location-playability-token",a,15552E3):gn("YT_CL",JSON.stringify({loctok:a}),15552E3,Sv,!0))};
function Uv(a){return a.h===void 0?new ho("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Uv(this))&&this.h.remove("yt-location-playability-token"):jn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;R("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function Xv(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function Yv(){this.h={}}
Yv.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
Yv.prototype.get=function(a){if(this.contains(a))return this.h[a]};
Yv.prototype.set=function(a,b){this.h[a]=b};
Yv.prototype.remove=function(a){delete this.h[a]};function Zv(){this.mappings=new Yv}
Zv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Zv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Bb(b)}}return a};
new Zv;function $v(a){return function(){return new a}}
;var aw={},bw=(aw.WEB_UNPLUGGED="^unplugged/",aw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",aw.WEB_UNPLUGGED_OPS="^unplugged/",aw.WEB_UNPLUGGED_PUBLIC="^unplugged/",aw.WEB_CREATOR="^creator/",aw.WEB_KIDS="^kids/",aw.WEB_EXPERIMENTS="^experiments/",aw.WEB_MUSIC="^music/",aw.WEB_REMIX="^music/",aw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",aw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",aw);
function cw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=bw[b];if(c){c=new RegExp(c);for(var d=w(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(bw).forEach(function(g){var h=w(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=w(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function dw(){}
dw.prototype.D=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?fn:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=Eg(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;on();var l="USER_INTERFACE_THEME_LIGHT";rn(165)?l="USER_INTERFACE_THEME_DARK":rn(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Pv()||l;h.userInterfaceTheme=k;if(!f){if(k=wn())h.connectionType=k;S("web_log_effective_connection_type")&&(k=xn())&&(g.client.effectiveConnectionType=k)}var m;if(S("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}S("web_gcf_hashes_innertube")&&(k=dq())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=km(C.location.href);!S("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&an.h&&(n=an.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=bn(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!S("web_lr_app_quality_killswitch")&&(n=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!S("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var p=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(na){}p=
void 0}p&&(h.timeZone=p)}(p=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=p:delete h.experimentsToken;p=ym();Qv.h||(Qv.h=new Qv);h=Qv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:p,consistencyTokenJars:n});!S("web_prequest_context_killswitch")&&(t=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);p=on();t=rn(58);p=p.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);p&&(g.user.lockedSafetyMode=
!0);S("warm_op_csn_cleanup")?e&&(f=uu())&&(g.clientScreenNonce=f):!f&&(f=uu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Wv().setLocationOnInnerTubeContext(g);try{var v=om(),x=v.bid;delete v.bid;g.adSignalsInfo={params:[],bid:x};var y=w(Object.entries(v));for(var G=y.next();!G.done;G=y.next()){var I=w(G.value),O=I.next().value,T=I.next().value;v=O;x=T;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:v,value:""+
x})}var Ja,cb;if(((Ja=g.client)==null?void 0:Ja.clientName)==="TVHTML5"||((cb=g.client)==null?void 0:cb.clientName)==="TVHTML5_UNPLUGGED"&&S("add_ifa_to_tvh5_requests")){var ca=R("INNERTUBE_CONTEXT");ca.adSignalsInfo&&(g.adSignalsInfo.advertisingId=ca.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=ca.adSignalsInfo.limitAdTracking)}}catch(na){bu(na)}y=g}else bu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
y={};y={context:y};if(G=this.i(a)){this.h(y,G,b);var Z;b="/youtubei/v1/"+cw(this.j());(G=(Z=kt(a.commandMetadata,Dl))==null?void 0:Z.apiUrl)&&(b=G);Z=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(Z=String(b)+String(ac(Z)));b={};S("json_condensed_response")&&(b.prettyPrint="false");Z=mm(Z,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:Z,eb:Eu(Z),Ma:y,config:a};a.config.Ub?a.config.Ub.identity=c:a.config.Ub={identity:c};return a}bu(new U("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(dw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function ew(){}
z(ew,dw);function fw(){}
z(fw,ew);fw.prototype.D=function(){return{input:"/getDatasyncIdsEndpoint",eb:Eu("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
fw.prototype.j=function(){return[]};
fw.prototype.i=function(){};
fw.prototype.h=function(){};var gw={},hw=(gw.GET_DATASYNC_IDS=$v(fw),gw);function iw(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function jw(){var a=iw();a.info||(a.info={});return a.info}
function kw(a){a=iw(a);a.metadata||(a.metadata={});return a.metadata}
function lw(a){a=iw(a);a.tick||(a.tick={});return a.tick}
function mw(a){a=iw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function nw(a){a=mw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ow(a){var b=iw(a).nonce;b||(b=ku(),iw(a).nonce=b);return b}
;function pw(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function qw(a){a=a||"";var b=E("ytcsi.reference");b||(pw(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=pw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},rw=(W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]=
"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W),X={},sw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",X.editor="LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",
X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",
X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
X);Object.assign(sw,rw);function tw(a,b){kq.call(this,1,arguments);this.timer=b}
z(tw,kq);var uw=new lq("aft-recorded",tw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var vw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",vw);function ww(){this.h=0}
function xw(){ww.h||(ww.h=new ww);return ww.h}
ww.prototype.tick=function(a,b,c,d){yw(this,"tick_"+a+"_"+b)||qo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
ww.prototype.info=function(a,b,c){var d=Object.keys(a).join("");yw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,qo("latencyActionInfo",a,{cttAuthInfo:c}))};
ww.prototype.jspbInfo=function(){};
ww.prototype.span=function(a,b,c){var d=Object.keys(a).join("");yw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,qo("latencyActionSpan",a,{cttAuthInfo:c}))};
function yw(a,b){vw[b]=vw[b]||{count:0};var c=vw[b];c.count++;c.time=V();a.h||(a.h=Bn(function(){var d=V(),e;for(e in vw)vw[e]&&d-vw[e].time>6E4&&delete vw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||cu(c)),!0):!1}
;var zw=window;function Aw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Bw(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Cw(e.requestStart),e.responseEnd=Cw(e.responseEnd),e.redirectStart=Cw(e.redirectStart),e.redirectEnd=Cw(e.redirectEnd),e.domainLookupEnd=Cw(e.domainLookupEnd),e.connectStart=Cw(e.connectStart),e.connectEnd=
Cw(e.connectEnd),e.responseStart=Cw(e.responseStart),e.secureConnectionStart=Cw(e.secureConnectionStart),e.domainLookupStart=Cw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=S("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Cw(a){return Math.round(Dw()+a)}
function Dw(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=zw.performance||zw.mozPerformance||zw.msPerformance||zw.webkitPerformance||new Aw;var Ew=!1,Fw=!1,Gw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Wa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||oi,Y);function Hw(a,b){if(!S("web_csi_action_sampling_enabled")||!iw(b).actionDisabled){var c=qw(b||"");mv(c.info,a);a.loadType&&(c=a.loadType,kw(b).loadType=c);mv(nw(b),a);c=ow(b);b=iw(b).cttAuthInfo;xw().info(a,c,b)}}
function Iw(){var a,b,c,d;return((d=Ls().resolve(new Fs($p))==null?void 0:(a=aq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Jw(a,b,c){if(!S("web_csi_action_sampling_enabled")||!iw(c).actionDisabled){var d=ow(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){(Ls().resolve(new Fs($p))==null?0:aq())&&!Fw&&(Fw=!0,Jw("gcfl",V(),c));var f,g,h;e=(Ls().resolve(new Fs($p))==null?void 0:(f=aq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Iw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+
d.charCodeAt(g),g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;iw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Hw(f,c));iw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||S("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);
try{Y.mark(e,{startTime:f})}catch(k){}}e=qw(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=w(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=mw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=lw(c);e=b||V();S("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=iw(c).cttAuthInfo;a==="_start"?(a=xw(),yw(a,"baseline_"+d)||qo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):xw().tick(a,d,b,f);Kw(c);return e}}}
function Lw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=cs+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Mw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=w(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=w(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Nw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Eb(window)&&a.setAttribute("nonce",Eb(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Dw(),Jw("rsf_"+b,c+Math.round(a.fetchStart)),Jw("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Ow(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Lb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Nb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Jw("wffs",Cw(b.startTime)),Jw("wffe",Cw(b.responseEnd)))}
function Pw(a){var b=Qw("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Qw(b[d],a);if(e)return e}return NaN}
function Qw(a,b){if(a=lw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Kw(a){var b=Qw("_start",a),c=Pw(a),d=S("enable_cow_info_csi")||!Ew;b&&c&&d&&(qq(uw,new tw(Math.round(c-b),a)),Ew=!0)}
function Rw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Ob(a,function(c){return c.name==="first-paint"}))return Cw(a.startTime)}var b;
S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.yh;return b?Math.max(0,b):0}
;function Sw(a,b){am(function(){qw("").info.actionType=a;b&&Xl("TIMING_AFT_KEYS",b);Xl("TIMING_ACTION",a);var c=Mw();Object.keys(c).length>0&&Hw(c);c={isNavigation:!0,actionType:sw[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=sw[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=uu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Lw();if(d===1||d===-1)c.isVisible=!0;kw();jw();
c.loadType="cold";d=jw();var e=Bw(),f=Dw(),g=R("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Jw("srt",e.responseStart),d.prerender!==1&&Jw("_start",f,void 0));d=Rw();d>0&&Jw("fpt",d);d=Bw();d.isPerformanceNavigationTiming&&Hw({performanceNavigationTiming:!0},void 0);Jw("nreqs",d.requestStart,void 0);Jw("nress",d.responseStart,void 0);Jw("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Jw("nrs",d.redirectStart,void 0),Jw("nre",
d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Jw("ndnss",d.domainLookupStart,void 0),Jw("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Jw("ntcps",d.connectStart,void 0),Jw("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Dw()&&d.connectEnd-d.secureConnectionStart>0&&(Jw("nstcps",d.secureConnectionStart,void 0),Jw("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Ow();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Gw)Gw.hasOwnProperty(h)&&
(e=Gw[h],Nw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=w(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Hw(c);c=mw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=nw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(kw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=lw();e=mw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Jw(k,Qw(k));else if(S("log_repeated_ytcsi_ticks"))for(f=
w(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Jw(k.slice(1),g);k={};d=!1;h=w(h);for(e=h.next();!e.done;e=h.next())d=e.value,mv(c,d),mv(k,d),d=!0;d&&Hw(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Tw()&&Pw()&&Kw()})()}
function Tw(){return am(function(){return Uw()})()}
function Vw(a,b,c){am(Hw)(a,b,c===void 0?!1:c)}
function Ww(a,b,c){return am(Jw)(a,b,c)}
function Uw(){return am(function(){return"_start"in lw()})()}
function Xw(){am(function(){var a=ow();requestAnimationFrame(function(){setTimeout(function(){a===ow()&&Ww("ol",void 0,void 0)},0)})})()}
var Yw=window;Yw.ytcsi&&(Yw.ytcsi.infoGel=Vw,Yw.ytcsi.tick=Ww);var Zw="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),$w=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function ax(a,b,c,d){this.D=a;this.da=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Ob||(a.Ob={});a.Ob=Object.assign({},hw,a.Ob)}
function bx(a,b,c,d){if(ax.h!==void 0){if(d=ax.h,a=[a!==d.D,b!==d.da,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else ax.h=new ax(a,b,c,d)}
function cx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?fn:c;var d=dx(a,b);return d?new qi(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.D(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.F(0);break}Lv(h.input);l=((k=h.eb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.jf){var p=h.config,t;p=p==null?void 0:(t=p.Ub)==null?void 0:t.sessionIndex;t=en(0,{sessionIndex:p});m=Object.assign({},
Xv(l),t);n.F(4);break}return n.yield(ex(h.config,l),5);case 5:m=n.i;case 4:e(fx(a,h,m)),n.h=0}})}):wi(new U("Error: No request builder found for command.",b))}
function gx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=w(Zw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function fx(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,v,x,y,G,I,O,T,Ja,cb,ca,Z,na,Na,Ma,Xg,Yg,Nr,Or,Pr,Qr;return A(function(ia){switch(ia.h){case 1:ia.F(2);break;case 3:if((e=ia.i)&&!e.isExpired())return ia.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ma)==null?0:g.context)){ia.F(4);break}h=b.Ma.context;ia.F(5);break;case 5:k=w([]),l=k.next();case 8:if(l.done){ia.F(4);break}m=l.value;return ia.yield(m.Ah(h),9);case 9:l=k.next();ia.F(8);break;case 4:if((n=a.i)==null||!n.Fh(b.input,b.Ma)){ia.F(12);break}return ia.yield(a.i.vh(b.input,
b.Ma),13);case 13:return p=ia.i,gx(a,p,b),ia.return(p);case 12:return(x=(v=b.config)==null?void 0:v.Dh)&&a.h.has(x)?t=a.h.get(x):(y=JSON.stringify(b.Ma),O=(I=(G=b.eb)==null?void 0:G.headers)!=null?I:{},b.eb=Object.assign({},b.eb,{headers:Object.assign({},O,c)}),T=Object.assign({},b.eb),b.eb.method==="POST"&&(T=Object.assign({},T,{body:y})),((Ja=b.config)==null?0:Ja.Ke)&&Ww(b.config.Ke),cb=function(){return a.da.fetch(b.input,T,b.config)},t=cb(),x&&a.h.set(x,t)),ia.yield(t,14);
case 14:if((ca=ia.i)&&"error"in ca&&((Z=ca)==null?0:(na=Z.error)==null?0:na.details))for(Na=ca.error.details,Ma=w(Na),Xg=Ma.next();!Xg.done;Xg=Ma.next())Yg=Xg.value,(Nr=Yg["@type"])&&$w.indexOf(Nr)>-1&&(delete Yg["@type"],ca=Yg);x&&a.h.has(x)&&a.h.delete(x);((Or=b.config)==null?0:Or.Le)&&Ww(b.config.Le);if(ca||(Pr=a.i)==null||!Pr.lh(b.input,b.Ma)){ia.F(15);break}return ia.yield(a.i.uh(b.input,b.Ma),16);case 16:ca=ia.i;case 15:return gx(a,ca,b),((Qr=b.config)==null?0:Qr.Ge)&&Ww(b.config.Ge),d(),ia.return(ca||
void 0)}})}
function dx(a,b){a:{a=a.D;var c,d=(c=kt(b,El))==null?void 0:c.signal;if(d&&a.Ob&&(c=a.Ob[d])){var e=c();break a}var f;if((c=(f=kt(b,Cl))==null?void 0:f.request)&&a.Sd&&(f=a.Sd[c])){e=f();break a}for(e in b)if(a.Uc[e]&&(b=a.Uc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function ex(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Ub)==null?void 0:d.sessionIndex;var h=g.yield;var k=en(0,{sessionIndex:e});if(!(k instanceof qi)){var l=new qi(oi);ri(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Xv(b),f)))})}
;var hx=new Es("INNERTUBE_TRANSPORT_TOKEN");function ix(){}
z(ix,ew);ix.prototype.j=function(){return Zu};
ix.prototype.i=function(a){return kt(a,Ol)||void 0};
ix.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(ix.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function jx(){}
z(jx,ew);jx.prototype.j=function(){return $u};
jx.prototype.i=function(a){return kt(a,Nl)||void 0};
jx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(jx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var kx=new Es("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function lx(a){this.u=a}
z(lx,ew);lx.prototype.j=function(){return Uu};
lx.prototype.i=function(a){return kt(a,Il)||kt(a,Jl)||kt(a,Hl)};
lx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.u)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.u.i(b.clientParamIdentifier)}};
lx[Ds]=[kx];function mx(){}
z(mx,ew);mx.prototype.j=function(){return Wu};
mx.prototype.i=function(a){return kt(a,Gl)||void 0};
mx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(mx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function nx(){}
z(nx,ew);nx.prototype.j=function(){return Xu};
nx.prototype.i=function(a){return kt(a,Ml)||void 0};
nx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function ox(){}
z(ox,ew);ox.prototype.j=function(){return Yu};
ox.prototype.i=function(a){return kt(a,Ll)||void 0};
ox.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function px(){}
z(px,ew);px.prototype.j=function(){return Vu};
px.prototype.i=function(a){return kt(a,Kl)};
px.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var qx=new Es("FETCH_FN_TOKEN"),rx=new Es("PARSE_FN_TOKEN");function sx(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
z(sx,U);var tx=new Es("NETWORK_SLI_TOKEN");function ux(a,b,c){this.h=a;this.i=b;this.j=c}
ux.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=vx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){cu(k);
if((c==null?0:c.Zd)&&k instanceof sx&&k.errorType===1)return Promise.reject(k)}))})};
function vx(a,b,c){if(a.h){var d=Yb(Zb(5,jc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;S("wug_networking_gzip_request")&&(a=Sq(c));return new window.Request(b,a)}
ux.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.ue)&&a.ok)return Qf(b.ue,e);e=e.replace(")]}'","");if((b==null?0:b.Zd)&&e)try{var f=d(e)}catch(h){throw new sx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.ph(),c=c.then(function(e){cu(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
ux[Ds]=[new Fs(tx),new Fs(qx),new Fs(rx)];var wx=new Es("NETWORK_MANAGER_TOKEN");var xx;function yx(){var a,b,c;return A(function(d){if(d.h==1)return a=Ls().resolve(hx),a?d.yield(cx(a),2):(cu(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return cu(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.nh;return d.return(c)}cu(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function zx(){var a;return(a=R("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var Ax=C.caches,Bx;function Cx(a){var b=a.indexOf(":");return b===-1?{md:a}:{md:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Dx(){return A(function(a){if(Bx!==void 0)return a.return(Bx);Bx=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return ya(d,2),d.yield(Ax.open("test-only"),4);case 4:return d.yield(Ax.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=za(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Bx)})}
function Ex(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(Dx(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(Ax.keys(),3)}c=k.i;d=w(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Cx(f),h=g.datasyncId,!h||a.includes(h)||b.push(Ax.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function Fx(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(Dx(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=zn("cache contains other");return h.yield(Ax.keys(),3)}b=h.i;c=w(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Cx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Gx(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Hx(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Ix(a){if(Gx()){var b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Hx(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Jx(){if(!Gx())return!1;var a=zn(),b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=Hx(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Kx(){yx().then(function(a){a&&(Fp(a),Ex(a),Iv(a),Ix(a))})}
function Lx(){var a=new Kr;Hj.oa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){g.F(2);break}b=zn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Fp(h);Ex(h);Iv(h);Ix(h);return g.return()}c=Jv();d=Jx();return g.yield(Fx(),3);case 3:return e=g.i,g.yield(Gp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.wa()?Kx():a.h.add("publicytnetworkstatus-online",Kx,!0,void 0,void 0),g.h=0}})})}
;function Mx(){this.state=1;this.h=null}
r=Mx.prototype;r.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=gb(),f=new Fb(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=vl(a.interpreterSafeUrl).toString());Nx(this,d,e,a.program,b,c)}else cu(Error("Cannot initialize botguard without program"))};
function Nx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,cv(c,function(){window[g]?Ox(a,d,g,e):(a.state=3,ev(c),cu(new U("Unable to load Botguard","from "+c)))},f)):b?(f=Kg("SCRIPT"),b instanceof Fb?Hb(f,b):f.textContent=b,f.nonce=Eb(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Ox(a,d,g,e):(a.state=4,cu(new U("Unable to load Botguard from JS")))):cu(new U("Unable to load VM; no url or JS provided"))}
r.isLoading=function(){return this.state===2};
function Ox(a,b,c,d){a.state=5;try{var e=new tj({program:b,ge:c,Ie:S("att_web_record_metrics"),Ae:{sa:"aGIf"}});e.bf.then(function(){a.state=6;d&&d(b)});
a.Lc(e)}catch(f){a.state=7,f instanceof Error&&cu(f)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.Oc()?this.Bd({Vc:a}):null};
r.dispose=function(){this.Lc(null);this.state=8};
r.Oc=function(){return!!this.h};
r.Bd=function(a){return this.h.ud(a)};
r.Lc=function(a){ng(this.h);this.h=a};var Px=[],Qx=!1;function Rx(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&Fu()){var a=R("PLAYER_VARS",{});if(Bg(a)!="1"&&!Gu(a)){var b=function(){Qx=!0;"google_ad_status"in window?Xl("DCLKSTAT",1):Xl("DCLKSTAT",2)};
try{cv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Px.push(Hj.oa(function(){if(!(Qx||"google_ad_status"in window)){try{gv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Qx=!0;Xl("DCLKSTAT",3)}},5E3))}}}
function Sx(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Tx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Ux(){Mx.apply(this,arguments)}
z(Ux,Mx);Ux.prototype.Lc=function(a){var b;(b=Tx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.ud.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Ux.prototype.Oc=function(){return!!Tx()};
Ux.prototype.Bd=function(a){return Tx().bgvmc(a)};function Vx(a){Vs.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.H},{from:"document_active",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"flush_logs",action:this.u},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.u},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
z(Vx,Vs);Vx.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Vx.prototype.D=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Vx.prototype.u=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Vx.prototype.i=function(){this.h=new Map};function Wx(a){Vs.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.u},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.D},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.u},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.u},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.D},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.D},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
z(Wx,Vs);Wx.prototype.i=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Wx.prototype.h=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Wx.prototype.D=function(a,b){a(b==null?void 0:b.event)};
Wx.prototype.u=function(a,b){a(b==null?void 0:b.event)};function Xx(){this.o=new Vx;this.D=new Wx}
Xx.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.D.install(c)})};function Yx(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Yx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=uu(c===void 0?0:c)){a=this.client;d=new nu({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=Dv(d,c);zv.set(f,!0);Ev(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Cv({cttAuthInfo:wu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Fv("visualElementGestured",f,d):a?Ut("visualElementGestured",d,a,f):qo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Yx.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new nu({trackingParams:a}),b,c===void 0?0:c)};
Yx.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=uu(d);a||(a=(a=ru(d===void 0?0:d))?new nu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Cv({cttAuthInfo:wu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Fv("visualElementStateChanged",d,b):a?Ut("visualElementStateChanged",b,a,d):qo("visualElementStateChanged",b,d))}};
function Zx(a,b){if(b===void 0)for(var c=tu(),d=0;d<c.length;d++)c[d]!==void 0&&Zx(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Bv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function $x(){Xx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));S("web_log_cfg_cee_ks")||Bn(ay)}
z($x,Xx);$x.prototype.j=function(){qo("finalPayload",{csn:uu()})};
$x.prototype.h=function(){hu(iu)};
$x.prototype.i=function(){var a=Zx;Yx.h||(Yx.h=new Yx);a(Yx.h)};
function ay(){var a=R("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Wd();a=w(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&qo("genericClientExperimentEvent",{eventType:c});delete Wl.CLIENT_EXPERIMENT_EVENTS}}
;function by(){}
function cy(){var a=E("ytglobal.storage_");a||(a=new by,D("ytglobal.storage_",a));return a}
by.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(dy()):d.return()})};
function dy(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",by);function oo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
oo.prototype.Ea=function(a){this.handleError(a)};
oo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":ey(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function ey(a,b){cy().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:fy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:fy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function fy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var gy={},hy=(gy["api.invalidparam"]=2,gy.auth=150,gy["drm.auth"]=150,gy["heartbeat.net"]=150,gy["heartbeat.servererror"]=150,gy["heartbeat.stop"]=150,gy["html5.unsupportedads"]=5,gy["fmt.noneavailable"]=5,gy["fmt.decode"]=5,gy["fmt.unplayable"]=5,gy["html5.missingapi"]=5,gy["html5.unsupportedlive"]=5,gy["drm.unavailable"]=5,gy["mrm.blocked"]=151,gy["embedder.identity.denied"]=152,gy);var iy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function jy(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function ky(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=w(iy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function ly(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function my(a){L.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.B=[];this.R={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=S("web_player_split_event_bus_iframe");this.o=R("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.H=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",ny(b));b.sendMessage("onReady");e=w(b.B);for(d=e.next();!d.done;d=e.next())oy(b,d.value);b.B=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.R[e]||e==="onReady"||
(c=py(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.R[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&jy(e)){var f=d;if(Qa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=ky(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=ky(g);break;case "loadPlaylist":case "cuePlaylist":g=ly(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);jy(e)&&qy(b,ny(b))}}}};
ry.addEventListener("message",this.H);if(a=R("WIDGET_ID"))this.sessionId=a;sy(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?hy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
sy(this,"onVideoProgress",this.We.bind(this));sy(this,"onVolumeChange",this.Xe.bind(this));sy(this,"onApiChange",this.Pe.bind(this));sy(this,"onPlaybackQualityChange",this.Te.bind(this));sy(this,"onPlaybackRateChange",this.Ue.bind(this));sy(this,"onStateChange",this.Ve.bind(this));sy(this,"onWebglSettingsChanged",this.Ye.bind(this));sy(this,"onCaptionsTrackListChanged",this.Qe.bind(this));sy(this,"captionssettingschanged",this.Re.bind(this))}
z(my,L);function qy(a,b){a.sendMessage("infoDelivery",b)}
r=my.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?oy(this,a):this.B.push(a)};
function py(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function sy(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function ny(a){if(!a.api)return null;var b=a.api.getApiInterface();Pb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.Ve=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());qy(this,a)};
r.Te=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());qy(this,a)};
r.Ue=function(a){qy(this,{playbackRate:a})};
r.Pe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.Xe=function(){qy(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.We=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());qy(this,a)};
r.Ye=function(){qy(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.Qe=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};qy(this,a)}};
r.Re=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};qy(this,a)}};
function oy(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){cu(d)}}}
r.aa=function(){L.prototype.aa.call(this);ry.removeEventListener("message",this.H);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var ry=window;function ty(a,b,c){L.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=S("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=uy(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=vy(g,f))&&wy(d,g,f))}}}}}};
xy.addEventListener("message",this.i);wy(this,"RECEIVING")}
z(ty,L);r=ty.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.Se.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.Se=function(a,b){this.ea||wy(this,a,yy(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function uy(a,b){switch(a){case "loadVideoById":return[ky(b)];case "cueVideoById":return[ky(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[ly(b)];case "cuePlaylist":return[ly(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function vy(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function yy(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function wy(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),zy.postMessage(JSON.stringify(b),a.origin))}
r.aa=function(){xy.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);L.prototype.aa.call(this)};
var xy=window,zy=window.parent;var Ay=new Ux;function By(){return Ay.Oc()}
function Cy(a){a=a===void 0?{}:a;return Ay.invoke(a)}
;function Dy(a,b,c,d,e){L.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.sc=e;this.zb=!1;this.api={};this.ia=this.u=null;this.U=new M;this.h={};this.Z=this.ta=this.elementId=this.Ab=this.config=null;this.Y=!1;this.j=this.H=null;this.Va={};this.uc=["onReady"];this.lastError=null;this.Sb=NaN;this.R={};this.ga=0;this.i=this.o=a;pg(this,this.U);Ey(this);c?this.ga=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Fy(this),Gy(this))}
z(Dy,L);r=Dy.prototype;r.getId=function(){return this.B};
r.loadNewVideoConfig=function(a){if(!this.ea){this.ga&&(clearTimeout(this.ga),this.ga=0);var b=a||{};b instanceof Tu||(b=new Tu(b));this.config=b;this.setConfig(a);Gy(this);this.isReady()&&Hy(this)}};
function Fy(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Ab=a;this.config=Iy(a);Fy(this);if(!this.ta){var b;this.ta=Jy(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Bj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Bj(Number(a)||a))};
function Hy(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Ky(a){var b=!0,c=Ly(a);c&&a.config&&(b=c.dataset.version===My(a));return b&&!!E("yt.player.Application.create")}
function Gy(a){if(!a.ea&&!a.Y){var b=Ky(a);if(b&&(Ly(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||Ny(a);else if(Oy(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),Ny(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.H=function(){c=!0;var d=Py(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Iy(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.sc);Ny(a)};
a.Y=!0;b?a.H():(cv(My(a),a.H),(b=Qy(a))&&jv(b||""),Ry(a)&&!c&&D("yt.player.Application.create",null))}}}
function Ly(a){var b=Jg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Ny(a){if(!a.ea){var b=Ly(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!Py(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Sy(a)}else a.Sb=setTimeout(function(){Ny(a)},50)}}
function Sy(a){Ey(a);a.zb=!0;var b=Ly(a);if(b){a.u=Ty(a,b,"addEventListener");a.ia=Ty(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Ty(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);Hy(a);a.ta&&a.ta(a.api);a.U.ib("onReady",a.api)}
function Ty(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function Ey(a){a.zb=!1;if(a.ia)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ia(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&clearTimeout(Number(c));a.R={};a.u=null;a.ia=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ab};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.zb};
r.addEventListener=function(a,b){var c=this,d=Jy(this,b);d&&(Jb(this.uc,a)>=0||this.h[a]||(b=Uy(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ea||(b=Jy(this,b))&&this.U.unsubscribe(a,b)};
function Jy(a,b){var c=b;if(typeof b==="string"){if(a.Va[b])return a.Va[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Va[b]=c}return c?c:null}
function Uy(a,b){function c(d){function e(){if(!a.ea)try{a.U.ib(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.Rd});g.level="WARNING";throw g;}}
if(Py(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.R,h=String(f);h in g&&delete g[h]},0);
Ag(a.R,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(Ly(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function Oy(a){a.cancel();Ey(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=Ly(a);b&&(Ky(a)||!Ry(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.H&&gv(My(this),this.H);clearTimeout(this.Sb);this.Y=!1};
r.aa=function(){Oy(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Va=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ab=this.config=this.api=null;delete this.o;delete this.i;L.prototype.aa.call(this)};
function Ry(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function My(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Qy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Py(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Iy(a){for(var b={},c=w(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Dg(e):e}return b}
;var Vy={},Wy="player_uid_"+(Math.random()*1E9>>>0);function Xy(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Jg(c):c;var e=Wy+"_"+Ra(c),f=Vy[e];if(f&&d)return Yy(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Dy(c,e,a,b,void 0);Vy[e]=f;f.addOnDisposeCallback(function(){delete Vy[f.getId()]});
return f.api}
function Yy(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Zy=null,$y=null;
function az(){Xw();var a=on(),b=rn(119),c=window.devicePixelRatio>1;if(document.body&&Pj(document.body,"exp-invert-logo"))if(c&&!Pj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Pj(d,"inverted-hdpi")){var e=Nj(d);Oj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Pj(document.body,"inverted-hdpi")&&Qj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=sn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete ln[b]:(c=d.toString(16),ln[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in ln)ln.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(ln[f])));var f=d.join("&");gn(b,f,63072E3,a.i,c)}}
function bz(){cz()}
function dz(){Ww("ep_init_pr");cz()}
function cz(){var a=Zy.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function ez(){Zy&&Zy.sendAbandonmentPing&&Zy.sendAbandonmentPing();R("PL_ATT")&&Ay.dispose();for(var a=Hj,b=0,c=Px.length;b<c;b++)a.pa(Px[b]);Px.length=0;ev("//static.doubleclick.net/instream/ad_status.js");Qx=!1;Xl("DCLKSTAT",0);og($y);Zy&&(Zy.removeEventListener("onVideoDataChange",bz),Zy.destroy())}
;D("yt.setConfig",Xl);D("yt.config.set",Xl);D("yt.setMsg",bv);D("yt.msgs.set",bv);D("yt.logging.errors.log",bu);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}Nv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Sw("embed",["ol"]);c=zx();if(!c.serializedForcedExperimentIds){var d=km(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&Sw("watch",["pbs","pbu","pbp"]);Zy=Xy(a,c);Zy.addEventListener("onVideoDataChange",bz);Zy.addEventListener("onReady",dz);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?$y=new my(Zy):R("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&($y=new ty(Zy,a,b));Rx();S("ytidb_create_logger_embed_killswitch")||no();a={};$x.h||($x.h=new $x);$x.h.install((a.flush_logs={callback:function(){Ht()}},a));
$r();S("ytidb_clear_embedded_player")&&Hj.oa(function(){var f,g;if(!xx){var h=Ls();Hs(h,{lc:wx,yd:ux});var k={Uc:{feedbackEndpoint:$v(mx),modifyChannelNotificationPreferenceEndpoint:$v(nx),playlistEditEndpoint:$v(ox),shareEntityEndpoint:$v(lx),subscribeEndpoint:$v(ix),unsubscribeEndpoint:$v(jx),webPlayerShareEntityServiceEndpoint:$v(px)}},l=Wv(),m={};l&&(m.client_location=l);f===void 0&&(f=dn());g===void 0&&(g=h.resolve(wx));bx(k,g,f,m);Hs(h,{lc:hx,zd:ax.h});xx=h.resolve(hx)}Lx()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||By);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Cy);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Sx);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Mv);D("yt.util.activity.init",E("yt.util.activity.init")||ps);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||ss);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||qs);window.addEventListener("load",am(function(){az()}));
window.addEventListener("pageshow",am(function(a){a.persisted||az()}));
window.addEventListener("pagehide",am(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?ez():a.persisted||ez()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=Yl("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!S("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Rd)f||(f={}),f.componentStack=Vt(m)}f&&fu(e,f);g?bu(e):cu(e)}};
Hi=du;window.addEventListener("unhandledrejection",function(a){du(a.reason)});
Kb(R("ERRORS")||[],function(a){bu.apply(null,a)});
Xl("ERRORS",[]);}).call(this);
