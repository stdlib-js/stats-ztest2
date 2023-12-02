// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).ztest2=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,b,"e"),t=p.call(t,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,h,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function j(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function N(r,n,e){var t=n-r.length;return t<0?r:r=e?r+j(t):j(t)+r}var E=String.fromCharCode,A=isNaN,O=Array.isArray;function T(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function _(r){var n,e,t,o,a,c,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(t=r[s]))c+=t;else{if(n=void 0!==t.precision,!(t=T(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),e=t.flags,p=0;p<e.length;p++)switch(o=e.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,A(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,A(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!A(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=A(a)?String(t.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),c+=t.arg||"",l+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function U(r){var n,e,t,i;for(e=[],i=0,t=S.exec(r);t;)(n=r.slice(i,S.lastIndex-t[0].length)).length&&e.push(n),e.push(P(t)),i=S.lastIndex,t=S.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function k(r){return"string"==typeof r}function F(r){var n,e,t;if(!k(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=U(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return _.apply(null,e)}var x,I=Object.prototype,M=I.toString,V=I.__defineGetter__,G=I.__defineSetter__,L=I.__lookupGetter__,R=I.__lookupSetter__;x=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(L.call(r,n)||R.call(r,n)?(t=r.__proto__,r.__proto__=I,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,n,e.get),a&&G&&G.call(r,n,e.set),r};var C=x;function $(r,n,e){C(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var W=Math.floor;function B(r){return W(r)===r}function H(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var e,t;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&B(r.length)&&r.length>=0&&r.length<=4294967295}(n))return!1;if(0===(e=n.length))return!1;for(t=0;t<e;t++)if(!1===r(n[t]))return!1;return!0}}function Z(r){return"number"==typeof r}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function Y(r,n){return null!=r&&D.call(r,n)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=q()?function(r){var n,e,t;if(null==r)return z.call(r);e=r[K],n=Y(r,K);try{r[K]=void 0}catch(n){return z.call(r)}return t=z.call(r),n?r[K]=e:delete r[K],t}:function(r){return z.call(r)},rr=Number,nr=rr.prototype.toString;var er=q();function tr(r){return"object"==typeof r&&(r instanceof rr||(er?function(r){try{return nr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function ir(r){return Z(r)||tr(r)}$(ir,"isPrimitive",Z),$(ir,"isObject",tr);var or=H(ir.isPrimitive),ar=H(ir.isObject),ur=H(ir);$(ur,"primitives",or),$(ur,"objects",ar);var fr=Number.POSITIVE_INFINITY,cr=rr.NEGATIVE_INFINITY;function lr(r){return r<fr&&r>cr&&B(r)}function sr(r){return Z(r)&&lr(r)}function pr(r){return tr(r)&&lr(r.valueOf())}function vr(r){return sr(r)||pr(r)}function yr(r){return sr(r)&&r>=0}function hr(r){return pr(r)&&r.valueOf()>=0}function dr(r){return yr(r)||hr(r)}$(vr,"isPrimitive",sr),$(vr,"isObject",pr),$(dr,"isPrimitive",yr),$(dr,"isObject",hr);function gr(r){return null!==r&&"object"==typeof r&&yr(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}function br(r){return Z(r)&&r>0}function wr(r){return tr(r)&&r.valueOf()>0}function mr(r){return br(r)||wr(r)}function jr(r,n,e){C(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function Nr(r){return r!=r}$(mr,"isPrimitive",br),$(mr,"isObject",wr);var Er=Math.sqrt,Ar="function"==typeof Uint32Array;var Or="function"==typeof Uint32Array?Uint32Array:null;var Tr,_r="function"==typeof Uint32Array?Uint32Array:void 0;Tr=function(){var r,n,e;if("function"!=typeof Or)return!1;try{n=new Or(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(Ar&&e instanceof Uint32Array||"[object Uint32Array]"===Q(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Sr=Tr,Pr="function"==typeof Float64Array;var Ur="function"==typeof Float64Array?Float64Array:null;var kr,Fr="function"==typeof Float64Array?Float64Array:void 0;kr=function(){var r,n,e;if("function"!=typeof Ur)return!1;try{n=new Ur([1,3.14,-3.14,NaN]),e=n,r=(Pr&&e instanceof Float64Array||"[object Float64Array]"===Q(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var xr=kr,Ir="function"==typeof Uint8Array;var Mr="function"==typeof Uint8Array?Uint8Array:null;var Vr,Gr="function"==typeof Uint8Array?Uint8Array:void 0;Vr=function(){var r,n,e;if("function"!=typeof Mr)return!1;try{n=new Mr(n=[1,3.14,-3.14,256,257]),e=n,r=(Ir&&e instanceof Uint8Array||"[object Uint8Array]"===Q(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr=Vr,Rr="function"==typeof Uint16Array;var Cr="function"==typeof Uint16Array?Uint16Array:null;var $r,Wr="function"==typeof Uint16Array?Uint16Array:void 0;$r=function(){var r,n,e;if("function"!=typeof Cr)return!1;try{n=new Cr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(Rr&&e instanceof Uint16Array||"[object Uint16Array]"===Q(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Br,Hr={uint16:$r,uint8:Lr};(Br=new Hr.uint16(1))[0]=4660;var Zr=52===new Hr.uint8(Br.buffer)[0],Xr=!0===Zr?1:0,qr=new xr(1),zr=new Sr(qr.buffer);function Dr(r){return qr[0]=r,zr[Xr]}var Yr=!0===Zr?1:0,Jr=new xr(1),Kr=new Sr(Jr.buffer);function Qr(r,n){return Jr[0]=r,Kr[Yr]=n>>>0,Jr[0]}var rn=1023;var nn=.6931471803691238,en=1.9082149292705877e-10,tn=1048575;function on(r){var n,e,t,i,o,a,u,f,c,l,s,p;return 0===r?cr:Nr(r)||r<0?NaN:(o=0,(e=Dr(r))<1048576&&(o-=54,e=Dr(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-rn|0,o+=(f=(e&=tn)+614244&1048576|0)>>20|0,u=(r=Qr(r,e|1072693248^f))-1,(tn&2+e)<3?0===u?0===o?0:o*nn+o*en:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*nn-(a-o*en-u)):(f=e-398458|0,c=440401-e|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=t+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-l*(n+a)):o*nn-(n-(l*(n+a)+o*en)-u)):0===o?u-l*(u-a):o*nn-(l*(u-a)-o*en-u))))}function an(r){var n,e,t,i,o;return Nr(r)?NaN:1===r?fr:-1===r?cr:0===r?r:r>1||r<-1?NaN:(r<0?(n=-1,e=-r):(n=1,e=r),t=1-e,e<=.5?(i=e*(e+10),o=function(r){var n,e;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(n=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,e=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),e=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/e)}(e),n*(.08913147449493408*i+i*o)):t>=.25?(i=Er(-2*on(t)),o=function(r){var n,e;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(n=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,e=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,e=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/e)}(t-=.25),n*(i/(2.249481201171875+o))):(t=Er(-on(t)))<3?(o=function(r){var n,e;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(n=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,e=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(n=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,e=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),n/e)}(t-1.125),n*(.807220458984375*t+o*t)):t<6?(o=function(r){var n,e;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(n=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,e=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(n=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),e=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),n/e)}(t-3),n*(.9399557113647461*t+o*t)):(o=function(r){var n,e;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(n=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,e=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(n=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),e=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),n/e)}(t-6),n*(.9836282730102539*t+o*t)))}function un(r){return function(){return r}}function fn(r,n){var e,t;return Nr(r)||Nr(n)||n<0?un(NaN):(e=r,t=n*Er(2),function(r){if(Nr(r)||r<0||r>1)return NaN;return e+t*an(2*r-1)})}$((function(r,n){return Nr(r)||r<0||r>1?NaN:n}),"factory",(function(r){return Nr(r)?un(NaN):function(n){if(Nr(n)||n<0||n>1)return NaN;return r}})),$((function(r,n,e){return Nr(n)||Nr(e)||Nr(r)||e<0||r<0||r>1?NaN:0===e?n:n+e*Er(2)*an(2*r-1)}),"factory",fn);var cn=Math.ceil;function ln(r){return r<0?cn(r):W(r)}function sn(r){return r===fr||r===cr}var pn,vn,yn=2147483647;!0===Zr?(pn=1,vn=0):(pn=0,vn=1);var hn,dn,gn={HIGH:pn,LOW:vn},bn=new xr(1),wn=new Sr(bn.buffer),mn=gn.HIGH,jn=gn.LOW;function Nn(r,n,e,t){return bn[0]=r,n[t]=wn[mn],n[t+e]=wn[jn],n}function En(r){return Nn(r,[0,0],1,0)}$(En,"assign",Nn),!0===Zr?(hn=1,dn=0):(hn=0,dn=1);var An={HIGH:hn,LOW:dn},On=new xr(1),Tn=new Sr(On.buffer),_n=An.HIGH,Sn=An.LOW;function Pn(r,n){return Tn[_n]=r,Tn[Sn]=n,On[0]}var Un=[0,0];function kn(r,n){var e,t;return En.assign(r,Un,1,0),e=Un[0],e&=yn,t=Dr(n),Pn(e|=t&=2147483648,Un[1])}function Fn(r){return Math.abs(r)}function xn(r,n,e,t){return Nr(r)||sn(r)?(n[t]=r,n[t+e]=0,n):0!==r&&Fn(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}$((function(r){return xn(r,[0,0],1,0)}),"assign",xn);var In=[0,0],Mn=[0,0];function Vn(r,n){var e,t;return 0===n||0===r||Nr(r)||sn(r)?r:(xn(r,In,1,0),n+=In[1],n+=function(r){var n=Dr(r);return(n=(2146435072&n)>>>20)-rn|0}(r=In[0]),n<-1074?kn(0,r):n>1023?r<0?cr:fr:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,En.assign(r,Mn,1,0),e=Mn[0],e&=2148532223,t*Pn(e|=n+rn<<20,Mn[1])))}var Gn=1.4426950408889634,Ln=1/(1<<28);function Rn(r){var n;return Nr(r)||r===fr?r:r===cr?0:r>709.782712893384?fr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ln?1+r:function(r,n,e){var t,i,o,a;return Vn(1-(n-(t=r-n)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-.6931471803691238*(n=ln(r<0?Gn*r-.5:Gn*r+.5)),1.9082149292705877e-10*n,n)}var Cn=!0===Zr?0:1,$n=new xr(1),Wn=new Sr($n.buffer);function Bn(r,n){return $n[0]=r,Wn[Cn]=n>>>0,$n[0]}var Hn=.8450629115104675;function Zn(r){var n,e,t,i,o,a,u,f;if(Nr(r))return NaN;if(r===fr)return 0;if(r===cr)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<13877787807814457e-33?1-r:(i=.12837916709551256+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),o=1+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),a=i/o,r<.25?1-(r+r*a):(i=r*a,.5-(i+=r-.5)));if(e<1.25)return u=(o=e-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(o)-.0023621185607526594,f=1+o*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(o),n?1+Hn+u/f:1-Hn-u/f;if(e<28){if(o=1/(e*e),e<2.857142857142857)i=o*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(o)-.009864944034847148,o=1+o*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(o);else{if(r<-6)return 2;i=o*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(o)-.0098649429247001,o=1+o*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(o)}return i=Rn(-(t=Bn(e,0))*t-.5625)*Rn((t-e)*(t+e)+i/o),n?2-i/e:i/e}return n?2:0}function Xn(r){return Nr(r)?un(NaN):function(n){if(Nr(n))return NaN;return n<r?0:1}}function qn(r,n){var e;return Nr(r)||Nr(n)||n<0?un(NaN):0===n?Xn(r):(e=n*Er(2),function(n){if(Nr(n))return NaN;return.5*Zn(-(n-r)/e)})}function zn(){var r,n=arguments,e=n[0],t="https://stdlib.io/e/"+e+"?";for(r=1;r<n.length;r++)t+="&arg[]="+encodeURIComponent(n[r]);return t}$((function(r,n){return Nr(r)||Nr(n)?NaN:r<n?0:1}),"factory",Xn),$((function(r,n,e){return Nr(r)||Nr(n)||Nr(e)||e<0?NaN:0===e?r<n?0:1:.5*Zn(-(r-n)/(e*Er(2)))}),"factory",qn);function Dn(r,n,e,t){var i,o,a,u,f,c,l,s,p,v,y,h,d;if(r<=0)return 0;if(1===r||0===e)return n[t];if(i=t,r<8){for(y=0,d=0;d<r;d++)y+=n[i],i+=e;return y}if(r<=128){for(o=n[i],a=n[i+e],u=n[i+2*e],f=n[i+3*e],c=n[i+4*e],l=n[i+5*e],s=n[i+6*e],p=n[i+7*e],i+=8*e,v=r%8,d=8;d<r-v;d+=8)o+=n[i],a+=n[i+e],u+=n[i+2*e],f+=n[i+3*e],c+=n[i+4*e],l+=n[i+5*e],s+=n[i+6*e],p+=n[i+7*e],i+=8*e;for(y=o+a+(u+f)+(c+l+(s+p));d<r;d++)y+=n[i],i+=e;return y}return h=W(r/2),Dn(h-=h%8,n,e,i)+Dn(r-h,n,e,i+h*e)}function Yn(r,n,e){var t,i,o;if(r<=0)return 0;if(1===r||0===e)return n[0];if(t=e<0?(1-r)*e:0,r<8){for(i=0,o=0;o<r;o++)i+=n[t],t+=e;return i}return Dn(r,n,e,t)}$(Yn,"ndarray",Dn);function Jn(r,n,e,t,i){var o,a,u,f,c,l,s,p,v,y,h,d,g;if(r<=0)return 0;if(1===r||0===t)return n+e[i];if(o=i,r<8){for(h=0,g=0;g<r;g++)h+=n+e[o],o+=t;return h}if(r<=128){for(a=n+e[o],u=n+e[o+t],f=n+e[o+2*t],c=n+e[o+3*t],l=n+e[o+4*t],s=n+e[o+5*t],p=n+e[o+6*t],v=n+e[o+7*t],o+=8*t,y=r%8,g=8;g<r-y;g+=8)a+=n+e[o],u+=n+e[o+t],f+=n+e[o+2*t],c+=n+e[o+3*t],l+=n+e[o+4*t],s+=n+e[o+5*t],p+=n+e[o+6*t],v+=n+e[o+7*t],o+=8*t;for(h=a+u+(f+c)+(l+s+(p+v));g<r;g++)h+=n+e[o],o+=t;return h}return d=W(r/2),Jn(d-=d%8,n,e,t,o)+Jn(r-d,n,e,t,o+d*t)}function Kn(r,n,e,t){var i,o,a;if(r<=0)return 0;if(1===r||0===t)return n+e[0];if(i=t<0?(1-r)*t:0,r<8){for(o=0,a=0;a<r;a++)o+=n+e[i],i+=t;return o}return Jn(r,n,e,t,i)}function Qn(r,n,e){var t;return r<=0?NaN:1===r||0===e?n[0]:(t=Yn(r,n,e)/r)+Kn(r,-t,n,e)/r}$(Kn,"ndarray",Jn),$(Qn,"ndarray",(function(r,n,e,t){var i;return r<=0?NaN:1===r||0===e?n[t]:(i=Dn(r,n,e,t)/r)+Jn(r,-i,n,e,t)/r}));const{ndarray:re}=Qn;function ne(r,n,e){return Qn(r,n,e)}function ee(r){return Z(r)&&r>=0&&r<=1}function te(r){return tr(r)&&r.valueOf()>=0&&r.valueOf()<=1}function ie(r){return ee(r)||te(r)}$(ne,"ndarray",(function(r,n,e,t){return re(r,n,e,t)})),$(ie,"isPrimitive",ee),$(ie,"isObject",te);var oe=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};var ae=/./;function ue(r){return"boolean"==typeof r}var fe=Boolean,ce=Boolean.prototype.toString;var le=q();function se(r){return"object"==typeof r&&(r instanceof fe||(le?function(r){try{return ce.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function pe(r){return ue(r)||se(r)}function ve(){return new Function("return this;")()}$(pe,"isPrimitive",ue),$(pe,"isObject",se);var ye="object"==typeof self?self:null,he="object"==typeof window?window:null,de="object"==typeof global?global:null,ge="object"==typeof globalThis?globalThis:null;var be=function(r){if(arguments.length){if(!ue(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ve()}if(ge)return ge;if(ye)return ye;if(he)return he;if(de)return de;throw new Error("unexpected error. Unable to resolve global object.")}(),we=be.document&&be.document.childNodes,me=Int8Array;function je(){return/^\s*function\s*([^(]*)/i}var Ne=/^\s*function\s*([^(]*)/i;function Ee(r){return null!==r&&"object"==typeof r}function Ae(r){var n,e,t,i;if(("Object"===(e=Q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(n=Ne.exec(t.toString()))return n[1]}return Ee(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}$(je,"REGEXP",Ne),$(Ee,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var e,t;if(!oe(n))return!1;if(0===(e=n.length))return!1;for(t=0;t<e;t++)if(!1===r(n[t]))return!1;return!0}}(Ee));var Oe="function"==typeof ae||"object"==typeof me||"function"==typeof we?function(r){return Ae(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?Ae(r).toLowerCase():n};function Te(r){return"function"===Oe(r)}var _e,Se=Object,Pe=Object.getPrototypeOf;_e=Te(Object.getPrototypeOf)?Pe:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ue=_e;var ke=Object.prototype;function Fe(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!oe(r)}(r)&&(n=function(r){return null==r?null:(r=Se(r),Ue(r))}(r),!n||!Y(r,"constructor")&&Y(n,"constructor")&&Te(n.constructor)&&"[object Function]"===Q(n.constructor)&&Y(n,"isPrototypeOf")&&Te(n.isPrototypeOf)&&(n===ke||function(r){var n;for(n in r)if(!Y(r,n))return!1;return!0}(r)))}function xe(r){return"string"==typeof r}var Ie=String.prototype.valueOf;var Me=q();function Ve(r){return"object"==typeof r&&(r instanceof String||(Me?function(r){try{return Ie.call(r),!0}catch(r){return!1}}(r):"[object String]"===Q(r)))}function Ge(r){return xe(r)||Ve(r)}function Le(r){return Z(r)&&Nr(r)}function Re(r){return tr(r)&&Nr(r.valueOf())}function Ce(r){return Le(r)||Re(r)}function $e(r){return sr(r)&&r>0}function We(r){return pr(r)&&r.valueOf()>0}function Be(r){return $e(r)||We(r)}function He(r){return B(r/2)}function Ze(r){return He(r>0?r-1:r+1)}function Xe(r){return 0|r}$(Ge,"isPrimitive",xe),$(Ge,"isObject",Ve),$(Ce,"isPrimitive",Le),$(Ce,"isObject",Re),$(Be,"isPrimitive",$e),$(Be,"isObject",We);var qe=1048576,ze=[1,1.5],De=[0,.5849624872207642],Ye=[0,1.350039202129749e-8];var Je=1048575;var Ke=1048576;var Qe=1083179008,rt=1e300,nt=1e-300,et=[0,0],tt=[0,0];function it(r,n){var e,t,i,o,a,u,f,c,l,s,p,v,y,h;if(Nr(r)||Nr(n))return NaN;if(En.assign(n,et,1,0),a=et[0],0===et[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Er(r);if(-.5===n)return 1/Er(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(sn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Fn(r)<1==(n===fr)?0:fr}(r,n)}if(En.assign(r,et,1,0),o=et[0],0===et[1]){if(0===o)return function(r,n){return n===cr?fr:n===fr?0:n>0?Ze(n)?r:0:Ze(n)?kn(fr,r):fr}(r,n);if(1===r)return 1;if(-1===r&&Ze(n))return-1;if(sn(r))return r===cr?it(-0,-n):n<0?0:fr}if(r<0&&!1===B(n))return(r-r)/(r-r);if(i=Fn(r),e=o&yn|0,t=a&yn|0,f=a>>>31|0,u=(u=o>>>31|0)&&Ze(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(Dr(r)&yn)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===f?u*rt*rt:u*nt*nt;if(e>1072693248)return 0===f?u*rt*rt:u*nt*nt;p=function(r,n){var e,t,i,o,a,u;return e=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Bn(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=e,r}(tt,i)}else p=function(r,n,e){var t,i,o,a,u,f,c,l,s,p,v,y,h,d,g,b,w,m,j,N,E;return m=0,e<qe&&(m-=53,e=Dr(n*=9007199254740992)),m+=(e>>20)-rn|0,e=1072693248|(j=1048575&e|0),j<=235662?N=0:j<767610?N=1:(N=0,m+=1,e-=qe),a=Bn(i=(b=(n=Qr(n,e))-(c=ze[N]))*(w=1/(n+c)),0),t=524288+(e>>1|536870912),f=Qr(0,t+=N<<18),g=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Bn(f=3+(o=a*a)+(g+=(u=w*(b-a*f-a*(n-(f-c))))*(a+i)),0),h=(v=-7.028461650952758e-9*(s=Bn(s=(b=a*f)+(w=u*f+(g-(f-3-o))*i),0))+.9617966939259756*(w-(s-b))+Ye[N])-((y=Bn(y=(p=.9617967009544373*s)+v+(l=De[N])+(d=m),0))-d-l-p),r[0]=y,r[1]=h,r}(tt,i,e);if(v=(s=(n-(c=Bn(n,0)))*p[0]+n*p[1])+(l=c*p[0]),En.assign(v,et,1,0),y=Xe(et[0]),h=Xe(et[1]),y>=Qe){if(0!=(y-Qe|h))return u*rt*rt;if(s+8008566259537294e-32>v-l)return u*rt*rt}else if((y&yn)>=1083231232){if(0!=(y-3230714880|h))return u*nt*nt;if(s<=v-l)return u*nt*nt}return v=function(r,n,e){var t,i,o,a,u,f,c,l,s,p;return s=((l=r&yn|0)>>20)-rn|0,c=0,l>1071644672&&(i=Qr(0,((c=r+(Ke>>s+1)>>>0)&~(Je>>(s=((c&yn)>>20)-rn|0)))>>>0),c=(c&Je|Ke)>>20-s>>>0,r<0&&(c=-c),n-=i),r=Xe(r=Dr(f=1-((f=(o=.6931471824645996*(i=Bn(i=e+n,0)))+(a=.6931471805599453*(e-(i-n))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Vn(f,c):Qr(f,r)}(y,l,s),u*v}var ot=Math.round,at=1e308;function ut(r,n){var e,t;return Nr(r)||Nr(n)||sn(n)?NaN:sn(r)||0===r||n<-324||Fn(r)>9007199254740992&&n<=0?r:n>308?0*r:n<-308?(e=it(10,-(n+308)),sn(t=r*at*e)?r:ot(t)/at/e):sn(t=r*(e=it(10,-n)))?r:ot(t)/e}function ft(r){var n,e,t;if(e=4,n=!0,arguments.length>0){if(!Fe(r))throw new TypeError(zn("1M13L,Gc",r));if(Y(r,"digits")){if(!Be(r.digits))throw new TypeError(zn("1M13P,Fv","digits",r.digits));e=r.digits}if(Y(r,"decision")){if(!ue(r.decision))throw new TypeError(zn("1M12o,GE","decision",r.decision));n=r.decision}}switch(t="",t+=this.method,t+="\n\n",t+="Alternative hypothesis: ",t+="True difference in means is ",this.alternative){case"less":t+="less than ";break;case"greater":t+="greater than ";break;default:t+="not equal to "}return t+=this.nullValue,t+="\n\n",t+="    pValue: "+ut(this.pValue,-e)+"\n",t+="    statistic: "+ut(this.statistic,-e)+"\n",t+="    "+100*(1-this.alpha)+"% confidence interval: ["+ut(this.ci[0],-e)+","+ut(this.ci[1],-e)+"]",t+="\n\n",n&&(t+="Test Decision: ",this.rejected?t+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":t+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",t+="\n"),t}var ct=fn(0,1),lt=qn(0,1);return function(r,n,e,t,i){var o,a,u,f,c,l,s,p,v,y,h,d,g,b;if(!gr(r)&&!or(r))throw new TypeError(zn("1M18R,GO",r));if(!gr(n)&&!or(n))throw new TypeError(zn("1M19k,GP",n));if(!br(e))throw new TypeError(zn("1M1A7,Gq",e));if(!br(t))throw new TypeError(zn("1M1A8,Gr",t));if(s={},i&&(h=function(r,n){if(!Fe(n))return new TypeError(zn("1M12V,FD",n));if(Y(n,"alpha")){if(r.alpha=n.alpha,!Z(r.alpha)||Ce(r.alpha))return new TypeError(zn("1M18P,GU","alpha",r.alpha));if(!ee(r.alpha))return new RangeError(zn("1M18V,Gb","alpha",r.alpha))}return Y(n,"alternative")&&(r.alternative=n.alternative,!xe(r.alternative))?new TypeError(zn("1M12W,Gh","alternative",r.alternative)):Y(n,"difference")&&(r.difference=n.difference,!Z(r.difference)||Ce(r.difference))?new TypeError(zn("1M18P,GU","difference",r.difference)):null}(s,i),h))throw h;switch(l=s.difference||0,a=void 0===s.alpha?.05:s.alpha,g=r.length,b=n.length,o=Er(e*e/g+t*t/b),v=((u=ne(g,r,1))-(f=ne(b,n,1))-l)/o,y=s.alternative||"two-sided"){case"two-sided":p=2*lt(-Fn(v)),(c=[v-ct(1-a/2),v+ct(1-a/2)])[0]=l+c[0]*o,c[1]=l+c[1]*o;break;case"greater":p=1-lt(v),(c=[v-ct(1-a),fr])[0]=l+c[0]*o;break;case"less":p=lt(v),(c=[cr,v+ct(1-a)])[1]=l+c[1]*o;break;default:throw new Error(zn("1M12X,3g,4S,GD,Gg,Jm","alternative",["two-sided","less","greater"].join('", "'),y))}return jr(d={},"rejected",p<=a),jr(d,"alpha",a),jr(d,"pValue",p),jr(d,"statistic",v),jr(d,"ci",c),jr(d,"alternative",y),jr(d,"method","Two-sample z-test"),jr(d,"nullValue",l),jr(d,"xmean",u),jr(d,"ymean",f),jr(d,"print",ft),d}}));
//# sourceMappingURL=index.js.map
