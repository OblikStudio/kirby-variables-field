!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e,r){"use strict";var n=r(2),a="object"==typeof self&&self&&self.Object===Object&&self,o=n.a||a||Function("return this")();e.a=o},function(t,e,r){"use strict";(function(t){var n=r(2),a="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=a&&"object"==typeof t&&t&&!t.nodeType&&t,i=o&&o.exports===a&&n.a.process,s=function(){try{var t=o&&o.require&&o.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();e.a=s}).call(this,r(4)(t))},function(t,e,r){"use strict";(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.a=r}).call(this,r(8))},function(t,e,r){"use strict";(function(t){var n=r(0),a=r(5),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=i&&i.exports===o?n.a.Buffer:void 0,u=(s?s.isBuffer:void 0)||a.a;e.a=u}).call(this,r(4)(t))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,r){"use strict";e.a=function(){return!1}},function(t,e,r){"use strict";(function(t){var n=r(0),a="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=a&&"object"==typeof t&&t&&!t.nodeType&&t,i=o&&o.exports===a?n.a.Buffer:void 0,s=i?i.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var r=t.length,n=s?s(r):new t.constructor(r);return t.copy(n),n}}).call(this,r(4)(t))},,function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data&&"object"==typeof t.data?r("JsonEditor",{attrs:{label:t.label,options:t.editorOptions},on:{input:t.emitInput},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}}):r("k-text-field",{attrs:{label:t.label},on:{input:t.emitInput},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}})};n._withStripped=!0;var a=function(){this.__data__=[],this.size=0};var o=function(t,e){return t===e||t!=t&&e!=e};var i=function(t,e){for(var r=t.length;r--;)if(o(t[r][0],e))return r;return-1},s=Array.prototype.splice;var u=function(t){var e=this.__data__,r=i(e,t);return!(r<0||(r==e.length-1?e.pop():s.call(e,r,1),--this.size,0))};var c=function(t){var e=this.__data__,r=i(e,t);return r<0?void 0:e[r][1]};var l=function(t){return i(this.__data__,t)>-1};var p=function(t,e){var r=this.__data__,n=i(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function f(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}f.prototype.clear=a,f.prototype.delete=u,f.prototype.get=c,f.prototype.has=l,f.prototype.set=p;var v=f;var b=function(){this.__data__=new v,this.size=0};var d=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var h=function(t){return this.__data__.get(t)};var y=function(t){return this.__data__.has(t)},_=r(0),j=_.a.Symbol,g=Object.prototype,m=g.hasOwnProperty,k=g.toString,O=j?j.toStringTag:void 0;var x=function(t){var e=m.call(t,O),r=t[O];try{t[O]=void 0;var n=!0}catch(t){}var a=k.call(t);return n&&(e?t[O]=r:delete t[O]),a},w=Object.prototype.toString;var A=function(t){return w.call(t)},S="[object Null]",$="[object Undefined]",C=j?j.toStringTag:void 0;var E=function(t){return null==t?void 0===t?$:S:C&&C in Object(t)?x(t):A(t)};var P=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},M="[object AsyncFunction]",z="[object Function]",T="[object GeneratorFunction]",I="[object Proxy]";var F,U=function(t){if(!P(t))return!1;var e=E(t);return e==z||e==T||e==M||e==I},V=_.a["__core-js_shared__"],R=(F=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+F:"";var B=function(t){return!!R&&R in t},D=Function.prototype.toString;var L=function(t){if(null!=t){try{return D.call(t)}catch(t){}try{return t+""}catch(t){}}return""},N=/^\[object .+?Constructor\]$/,K=Function.prototype,W=Object.prototype,J=K.toString,q=W.hasOwnProperty,G=RegExp("^"+J.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var X=function(t){return!(!P(t)||B(t))&&(U(t)?G:N).test(L(t))};var H=function(t,e){return null==t?void 0:t[e]};var Q=function(t,e){var r=H(t,e);return X(r)?r:void 0},Y=Q(_.a,"Map"),Z=Q(Object,"create");var tt=function(){this.__data__=Z?Z(null):{},this.size=0};var et=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},rt="__lodash_hash_undefined__",nt=Object.prototype.hasOwnProperty;var at=function(t){var e=this.__data__;if(Z){var r=e[t];return r===rt?void 0:r}return nt.call(e,t)?e[t]:void 0},ot=Object.prototype.hasOwnProperty;var it=function(t){var e=this.__data__;return Z?void 0!==e[t]:ot.call(e,t)},st="__lodash_hash_undefined__";var ut=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Z&&void 0===e?st:e,this};function ct(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ct.prototype.clear=tt,ct.prototype.delete=et,ct.prototype.get=at,ct.prototype.has=it,ct.prototype.set=ut;var lt=ct;var pt=function(){this.size=0,this.__data__={hash:new lt,map:new(Y||v),string:new lt}};var ft=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var vt=function(t,e){var r=t.__data__;return ft(e)?r["string"==typeof e?"string":"hash"]:r.map};var bt=function(t){var e=vt(this,t).delete(t);return this.size-=e?1:0,e};var dt=function(t){return vt(this,t).get(t)};var ht=function(t){return vt(this,t).has(t)};var yt=function(t,e){var r=vt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function _t(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}_t.prototype.clear=pt,_t.prototype.delete=bt,_t.prototype.get=dt,_t.prototype.has=ht,_t.prototype.set=yt;var jt=_t,gt=200;var mt=function(t,e){var r=this.__data__;if(r instanceof v){var n=r.__data__;if(!Y||n.length<gt-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new jt(n)}return r.set(t,e),this.size=r.size,this};function kt(t){var e=this.__data__=new v(t);this.size=e.size}kt.prototype.clear=b,kt.prototype.delete=d,kt.prototype.get=h,kt.prototype.has=y,kt.prototype.set=mt;var Ot=kt;var xt=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},wt=function(){try{var t=Q(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var At=function(t,e,r){"__proto__"==e&&wt?wt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},St=Object.prototype.hasOwnProperty;var $t=function(t,e,r){var n=t[e];St.call(t,e)&&o(n,r)&&(void 0!==r||e in t)||At(t,e,r)};var Ct=function(t,e,r,n){var a=!r;r||(r={});for(var o=-1,i=e.length;++o<i;){var s=e[o],u=n?n(r[s],t[s],s,r,t):void 0;void 0===u&&(u=t[s]),a?At(r,s,u):$t(r,s,u)}return r};var Et=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var Pt=function(t){return null!=t&&"object"==typeof t},Mt="[object Arguments]";var zt=function(t){return Pt(t)&&E(t)==Mt},Tt=Object.prototype,It=Tt.hasOwnProperty,Ft=Tt.propertyIsEnumerable,Ut=zt(function(){return arguments}())?zt:function(t){return Pt(t)&&It.call(t,"callee")&&!Ft.call(t,"callee")},Vt=Array.isArray,Rt=r(3),Bt=9007199254740991,Dt=/^(?:0|[1-9]\d*)$/;var Lt=function(t,e){var r=typeof t;return!!(e=null==e?Bt:e)&&("number"==r||"symbol"!=r&&Dt.test(t))&&t>-1&&t%1==0&&t<e},Nt=9007199254740991;var Kt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Nt},Wt={};Wt["[object Float32Array]"]=Wt["[object Float64Array]"]=Wt["[object Int8Array]"]=Wt["[object Int16Array]"]=Wt["[object Int32Array]"]=Wt["[object Uint8Array]"]=Wt["[object Uint8ClampedArray]"]=Wt["[object Uint16Array]"]=Wt["[object Uint32Array]"]=!0,Wt["[object Arguments]"]=Wt["[object Array]"]=Wt["[object ArrayBuffer]"]=Wt["[object Boolean]"]=Wt["[object DataView]"]=Wt["[object Date]"]=Wt["[object Error]"]=Wt["[object Function]"]=Wt["[object Map]"]=Wt["[object Number]"]=Wt["[object Object]"]=Wt["[object RegExp]"]=Wt["[object Set]"]=Wt["[object String]"]=Wt["[object WeakMap]"]=!1;var Jt=function(t){return Pt(t)&&Kt(t.length)&&!!Wt[E(t)]};var qt=function(t){return function(e){return t(e)}},Gt=r(1),Xt=Gt.a&&Gt.a.isTypedArray,Ht=Xt?qt(Xt):Jt,Qt=Object.prototype.hasOwnProperty;var Yt=function(t,e){var r=Vt(t),n=!r&&Ut(t),a=!r&&!n&&Object(Rt.a)(t),o=!r&&!n&&!a&&Ht(t),i=r||n||a||o,s=i?Et(t.length,String):[],u=s.length;for(var c in t)!e&&!Qt.call(t,c)||i&&("length"==c||a&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Lt(c,u))||s.push(c);return s},Zt=Object.prototype;var te=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Zt)};var ee=function(t,e){return function(r){return t(e(r))}},re=ee(Object.keys,Object),ne=Object.prototype.hasOwnProperty;var ae=function(t){if(!te(t))return re(t);var e=[];for(var r in Object(t))ne.call(t,r)&&"constructor"!=r&&e.push(r);return e};var oe=function(t){return null!=t&&Kt(t.length)&&!U(t)};var ie=function(t){return oe(t)?Yt(t):ae(t)};var se=function(t,e){return t&&Ct(e,ie(e),t)};var ue=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},ce=Object.prototype.hasOwnProperty;var le=function(t){if(!P(t))return ue(t);var e=te(t),r=[];for(var n in t)("constructor"!=n||!e&&ce.call(t,n))&&r.push(n);return r};var pe=function(t){return oe(t)?Yt(t,!0):le(t)};var fe=function(t,e){return t&&Ct(e,pe(e),t)},ve=r(6);var be=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e};var de=function(t,e){for(var r=-1,n=null==t?0:t.length,a=0,o=[];++r<n;){var i=t[r];e(i,r,t)&&(o[a++]=i)}return o};var he=function(){return[]},ye=Object.prototype.propertyIsEnumerable,_e=Object.getOwnPropertySymbols,je=_e?function(t){return null==t?[]:(t=Object(t),de(_e(t),function(e){return ye.call(t,e)}))}:he;var ge=function(t,e){return Ct(t,je(t),e)};var me=function(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t},ke=ee(Object.getPrototypeOf,Object),Oe=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)me(e,je(t)),t=ke(t);return e}:he;var xe=function(t,e){return Ct(t,Oe(t),e)};var we=function(t,e,r){var n=e(t);return Vt(t)?n:me(n,r(t))};var Ae=function(t){return we(t,ie,je)};var Se=function(t){return we(t,pe,Oe)},$e=Q(_.a,"DataView"),Ce=Q(_.a,"Promise"),Ee=Q(_.a,"Set"),Pe=Q(_.a,"WeakMap"),Me=L($e),ze=L(Y),Te=L(Ce),Ie=L(Ee),Fe=L(Pe),Ue=E;($e&&"[object DataView]"!=Ue(new $e(new ArrayBuffer(1)))||Y&&"[object Map]"!=Ue(new Y)||Ce&&"[object Promise]"!=Ue(Ce.resolve())||Ee&&"[object Set]"!=Ue(new Ee)||Pe&&"[object WeakMap]"!=Ue(new Pe))&&(Ue=function(t){var e=E(t),r="[object Object]"==e?t.constructor:void 0,n=r?L(r):"";if(n)switch(n){case Me:return"[object DataView]";case ze:return"[object Map]";case Te:return"[object Promise]";case Ie:return"[object Set]";case Fe:return"[object WeakMap]"}return e});var Ve=Ue,Re=Object.prototype.hasOwnProperty;var Be=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Re.call(t,"index")&&(r.index=t.index,r.input=t.input),r},De=_.a.Uint8Array;var Le=function(t){var e=new t.constructor(t.byteLength);return new De(e).set(new De(t)),e};var Ne=function(t,e){var r=e?Le(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)},Ke=/\w*$/;var We=function(t){var e=new t.constructor(t.source,Ke.exec(t));return e.lastIndex=t.lastIndex,e},Je=j?j.prototype:void 0,qe=Je?Je.valueOf:void 0;var Ge=function(t){return qe?Object(qe.call(t)):{}};var Xe=function(t,e){var r=e?Le(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)},He="[object Boolean]",Qe="[object Date]",Ye="[object Map]",Ze="[object Number]",tr="[object RegExp]",er="[object Set]",rr="[object String]",nr="[object Symbol]",ar="[object ArrayBuffer]",or="[object DataView]",ir="[object Float32Array]",sr="[object Float64Array]",ur="[object Int8Array]",cr="[object Int16Array]",lr="[object Int32Array]",pr="[object Uint8Array]",fr="[object Uint8ClampedArray]",vr="[object Uint16Array]",br="[object Uint32Array]";var dr=function(t,e,r){var n=t.constructor;switch(e){case ar:return Le(t);case He:case Qe:return new n(+t);case or:return Ne(t,r);case ir:case sr:case ur:case cr:case lr:case pr:case fr:case vr:case br:return Xe(t,r);case Ye:return new n;case Ze:case rr:return new n(t);case tr:return We(t);case er:return new n;case nr:return Ge(t)}},hr=Object.create,yr=function(){function t(){}return function(e){if(!P(e))return{};if(hr)return hr(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var _r=function(t){return"function"!=typeof t.constructor||te(t)?{}:yr(ke(t))},jr="[object Map]";var gr=function(t){return Pt(t)&&Ve(t)==jr},mr=Gt.a&&Gt.a.isMap,kr=mr?qt(mr):gr,Or="[object Set]";var xr=function(t){return Pt(t)&&Ve(t)==Or},wr=Gt.a&&Gt.a.isSet,Ar=wr?qt(wr):xr,Sr=1,$r=2,Cr=4,Er="[object Arguments]",Pr="[object Function]",Mr="[object GeneratorFunction]",zr="[object Object]",Tr={};Tr[Er]=Tr["[object Array]"]=Tr["[object ArrayBuffer]"]=Tr["[object DataView]"]=Tr["[object Boolean]"]=Tr["[object Date]"]=Tr["[object Float32Array]"]=Tr["[object Float64Array]"]=Tr["[object Int8Array]"]=Tr["[object Int16Array]"]=Tr["[object Int32Array]"]=Tr["[object Map]"]=Tr["[object Number]"]=Tr[zr]=Tr["[object RegExp]"]=Tr["[object Set]"]=Tr["[object String]"]=Tr["[object Symbol]"]=Tr["[object Uint8Array]"]=Tr["[object Uint8ClampedArray]"]=Tr["[object Uint16Array]"]=Tr["[object Uint32Array]"]=!0,Tr["[object Error]"]=Tr[Pr]=Tr["[object WeakMap]"]=!1;var Ir=function t(e,r,n,a,o,i){var s,u=r&Sr,c=r&$r,l=r&Cr;if(n&&(s=o?n(e,a,o,i):n(e)),void 0!==s)return s;if(!P(e))return e;var p=Vt(e);if(p){if(s=Be(e),!u)return be(e,s)}else{var f=Ve(e),v=f==Pr||f==Mr;if(Object(Rt.a)(e))return Object(ve.a)(e,u);if(f==zr||f==Er||v&&!o){if(s=c||v?{}:_r(e),!u)return c?xe(e,fe(s,e)):ge(e,se(s,e))}else{if(!Tr[f])return o?e:{};s=dr(e,f,u)}}i||(i=new Ot);var b=i.get(e);if(b)return b;if(i.set(e,s),Ar(e))return e.forEach(function(a){s.add(t(a,r,n,a,e,i))}),s;if(kr(e))return e.forEach(function(a,o){s.set(o,t(a,r,n,o,e,i))}),s;var d=l?c?Se:Ae:c?keysIn:ie,h=p?void 0:d(e);return xt(h||e,function(a,o){h&&(a=e[o=a]),$t(s,o,t(a,r,n,o,e,i))}),s},Fr=1,Ur=4;var Vr=function(t){return Ir(t,Fr|Ur)},Rr=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("k-field",[r("header",{staticClass:"k-field-header",attrs:{slot:"header"},slot:"header"},[r("label",{staticClass:"k-field-label",on:{click:function(t){t.preventDefault()}}},[t._l(t.displayPath,function(e){return[e.index<t.path.length-1?[r("button",{staticClass:"k-je-label-button",on:{click:function(r){return t.openPath(e.index)}}},[t._v(" "+t._s(e.name)+" ")]),r("span",{staticClass:"k-je-separator"},[t._v("/")])]:r("span",[t._v(t._s(e.name))])]})],2)]),r(t.isArray(t.currentObject)?"ArrayTable":"ObjectTable",{tag:"component",attrs:{settings:t.settings,value:t.currentObject},on:{input:t.input,open:t.openKey}})],1)};Rr._withStripped=!0;var Br="[object Symbol]";var Dr=function(t){return"symbol"==typeof t||Pt(t)&&E(t)==Br},Lr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nr=/^\w*$/;var Kr=function(t,e){if(Vt(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Dr(t))||Nr.test(t)||!Lr.test(t)||null!=e&&t in Object(e)},Wr="Expected a function";function Jr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(Wr);var r=function(){var n=arguments,a=e?e.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=t.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(Jr.Cache||jt),r}Jr.Cache=jt;var qr=Jr,Gr=500;var Xr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hr=/\\(\\)?/g,Qr=function(t){var e=qr(t,function(t){return r.size===Gr&&r.clear(),t}),r=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Xr,function(t,r,n,a){e.push(n?a.replace(Hr,"$1"):r||t)}),e});var Yr=function(t,e){for(var r=-1,n=null==t?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a},Zr=1/0,tn=j?j.prototype:void 0,en=tn?tn.toString:void 0;var rn=function t(e){if("string"==typeof e)return e;if(Vt(e))return Yr(e,t)+"";if(Dr(e))return en?en.call(e):"";var r=e+"";return"0"==r&&1/e==-Zr?"-0":r};var nn=function(t){return null==t?"":rn(t)};var an=function(t,e){return Vt(t)?t:Kr(t,e)?[t]:Qr(nn(t))},on=1/0;var sn=function(t){if("string"==typeof t||Dr(t))return t;var e=t+"";return"0"==e&&1/t==-on?"-0":e};var un=function(t,e){for(var r=0,n=(e=an(e,t)).length;null!=t&&r<n;)t=t[sn(e[r++])];return r&&r==n?t:void 0};var cn=function(t,e,r){var n=null==t?void 0:un(t,e);return void 0===n?r:n},ln=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("table",{staticClass:"k-structure-table",attrs:{"data-sortable":!!t.settings.isSortable&&"true"}},[t.list.length?r("thead",[r("tr",[r("th",{staticClass:"k-structure-table-index"},[t._v("#")]),r("th",{staticClass:"k-structure-table-column k-je-column-header-key"},[t._v(t._s(t.$t("key")))]),r("th",{staticClass:"k-structure-table-column"},[t._v(t._s(t.$t("value")))]),r("th")])]):t._e(),r("k-draggable",{attrs:{element:"tbody",list:t.list,handle:!0,options:t.dragOptions}},t._l(t.list,function(e,n){return r("tr",{key:n},[r("td",{staticClass:"k-structure-table-index"},[t.settings.isSortable?r("k-sort-handle"):t._e(),r("span",{staticClass:"k-structure-table-index-number"},[t._v(" "+t._s(n+1)+" ")])],1),r("td",{staticClass:"k-structure-table-column"},[r("p",{staticClass:"k-structure-table-text",class:{"k-je-not-editable":!t.settings.isKeysEditable}},[t.settings.isKeysEditable?r("k-input",{attrs:{name:"text",type:"text"},model:{value:e.key,callback:function(r){t.$set(e,"key",r)},expression:"entry.key"}}):r("span",[t._v(t._s(e.key))])],1)]),r("td",{staticClass:"k-structure-table-column"},[r("p",{staticClass:"k-structure-table-text",class:{"k-je-not-editable":!t.settings.isValuesEditable}},[e.value&&"object"==typeof e.value?r("k-button",{attrs:{icon:"open"},on:{click:function(r){return t.$emit("open",e.key)}}},[t._v(" "+t._s(t.$t(t.isArray(e.value)?"array":"object"))+" ("+t._s(t.keys(e.value).length)+" "+t._s(t.$t("values"))+") ")]):[t.settings.isValuesEditable?r("k-input",{attrs:{name:"text",type:"text"},model:{value:e.value,callback:function(r){t.$set(e,"value",r)},expression:"entry.value"}}):r("span",[t._v(t._s(e.value))])]],2)]),r("td",{staticClass:"k-structure-table-option"},[r("k-button",{class:{"k-je-not-allowed":!t.settings.isMutatable},attrs:{tooltip:t.$t("remove"),icon:"remove"},on:{click:function(r){return t.remove(e.key)}}})],1)])}),0),t.settings.isMutatable?r("Foot",{attrs:{colspan:2},on:{add:t.add}}):t._e()],1)])};ln._withStripped=!0;var pn=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("table",{staticClass:"k-structure-table",attrs:{"data-sortable":!!t.settings.isSortable&&"true"}},[t.list.length?r("thead",[r("tr",[r("th",{staticClass:"k-structure-table-index"},[t._v("#")]),r("th",{staticClass:"k-structure-table-column"},[t._v(t._s(t.$t("value")))]),r("th")])]):t._e(),r("k-draggable",{attrs:{element:"tbody",list:t.list,handle:!0,options:t.dragOptions}},t._l(t.list,function(e,n){return r("tr",{key:e.key},[r("td",{staticClass:"k-structure-table-index"},[t.settings.isSortable?r("k-sort-handle"):t._e(),r("span",{staticClass:"k-structure-table-index-number"},[t._v(" "+t._s(n)+" ")])],1),r("td",{staticClass:"k-structure-table-column"},[r("p",{staticClass:"k-structure-table-text",class:{"k-je-not-editable":!t.settings.isValuesEditable}},[e.value&&"object"==typeof e.value?r("k-button",{attrs:{icon:"open"},on:{click:function(r){return t.$emit("open",e.key)}}},[t._v(" "+t._s(t.$t(t.isArray(e.value)?"array":"object"))+" ("+t._s(t.keys(e.value).length)+" "+t._s(t.$t("values"))+") ")]):[t.settings.isValuesEditable?r("k-input",{attrs:{name:"text",type:"text"},model:{value:e.value,callback:function(r){t.$set(e,"value",r)},expression:"entry.value"}}):r("span",[t._v(t._s(e.value))])]],2)]),r("td",{staticClass:"k-structure-table-option"},[r("k-button",{class:{"k-je-not-allowed":!t.settings.isMutatable},attrs:{tooltip:t.$t("remove"),icon:"remove"},on:{click:function(r){return t.remove(e.key)}}})],1)])}),0),t.settings.isMutatable?r("Foot",{on:{add:t.add}}):t._e()],1)])};pn._withStripped=!0;var fn=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tfoot",{staticClass:"k-je-foot"},[r("tr",[r("td",{staticClass:"k-structure-table-index"}),r("td",{attrs:{colspan:t.colspan}},[r("p",{staticClass:"k-structure-table-text"},[r("k-input",{attrs:{options:[{value:"object",text:t.$t("Object")},{value:"array",text:t.$t("Array")},{value:"value",text:t.$t("Value")}],type:"radio"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)]),r("td",{staticClass:"k-structure-table-option"},[r("k-button",{attrs:{tooltip:t.$t("add"),icon:"add"},on:{click:function(e){return t.$emit("add",t.type)}}})],1)])])};function vn(t,e,r,n,a,o,i,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=u):a&&(u=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:c}}fn._withStripped=!0;var bn=vn({props:{colspan:{type:Number,default:1}},data:function(){return{type:"value"}}},fn,[],!1,null,null,null);bn.options.__file="app/editor/Foot.vue";var dn=vn({components:{Foot:bn.exports},props:{value:Object,settings:Object},data:function(){return{list:null,updatingList:!1}},computed:{dragOptions:function(){return{disabled:!this.settings.isSortable,fallbackClass:"k-sortable-row-fallback"}}},methods:{keys:Object.keys,isArray:Array.isArray,generateEntryId:function(){return this.list.length},serialize:function(){return this.list.map(function(t){return t.value})},updateList:function(t){this.updatingList=!0,this.list=Object.keys(this.value).map(function(t){return{key:t,value:this.value[t]}}.bind(this)),this.$nextTick(function(){this.updatingList=!1}.bind(this))},add:function(t){var e={key:this.generateEntryId()};switch(t){case"value":e.value="Value";break;case"array":e.value=[];break;case"object":e.value={}}this.settings.isMutatable&&this.list.push(e)},remove:function(t){this.settings.isMutatable&&(this.list=this.list.filter(function(e){return e.key!==t}))}},watch:{value:{deep:!0,immediate:!0,handler:function(t){this.updateList(t)}},list:{deep:!0,handler:function(t){this.updatingList||this.$emit("input",this.serialize())}}}},pn,[],!1,null,null,null);dn.options.__file="app/editor/ArrayTable.vue";var hn=dn.exports,yn=vn({extends:hn,methods:{generateEntryId:function(){return"key"+(Math.floor(9e3*Math.random())+1e3)},serialize:function(t){var e={};return this.list.forEach(function(t){void 0!==t.key&&(e[t.key]=t.value)}),e}}},ln,[],!1,null,null,null);yn.options.__file="app/editor/ObjectTable.vue";var _n=yn.exports,jn={isKeysEditable:!0,isValuesEditable:!0,isMutatable:!0,isSortable:!0},gn=vn({components:{ObjectTable:_n,ArrayTable:hn},props:{value:Object,options:Object,label:{type:String,default:"Root"}},data:function(){return{data:null,path:[],settings:Object.assign({},jn,this.options)}},computed:{currentObject:function(){var t=this.data;return this.path.forEach(function(e){t=t[e]}),t},displayPath:function(){var t=this.path.map(function(t,e){return{name:t,index:e}});return t.unshift({name:this.label,index:-1}),t}},methods:{isArray:Array.isArray,openKey:function(t){this.path.push(t)},openPath:function(t){this.path.splice(t+1)},input:function(t){var e=this.path.slice(),r=e.pop(),n=e.length?cn(this.data,e):this.data;n&&r?n[r]=t:this.data=t,this.$emit("input",this.data)}},watch:{value:{immediate:!0,handler:function(t){this.data=Vr(t)}}}},Rr,[],!1,null,null,null);gn.options.__file="app/editor/JsonEditor.vue";var mn=vn({components:{JsonEditor:gn.exports},props:{value:Object,endpoints:Object,label:String,variable:String,editor:Object},data(){return{data:Vr(this.value),editorOptions:{isKeysEditable:this.editor.keys,isValuesEditable:this.editor.values,isMutatable:this.editor.mutate,isSortable:this.editor.sort}}},methods:{emitInput(){this.$emit("input",this.data)}},watch:{value:function(t){this.data=Vr(t)}}},n,[],!1,null,null,null);mn.options.__file="app/App.vue";var kn=mn.exports;panel.plugin("oblik/variables-field",{fields:{variables:kn}})}]);