// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,d=/\.0$/,g=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=s.call(t,b,"$1e"),t=s.call(t,g,"e"),t=s.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,v,"e-0$1"),r.alternate&&(t=s.call(t,y,"$1."),t=s.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var j=String.fromCharCode,N=Array.isArray;function E(r){return r!=r}function A(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,n,t,o,a,f,c,l,s,p,v,y,h;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if("string"==typeof(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=A(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,E(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!E(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(a)?String(t.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=w(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,h=void 0,(h=v-p.length)<0?p:p=y?p+m(h):m(h)+p)),f+=t.arg||"",c+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function S(r){var e,n,t,i;for(n=[],i=0,t=T.exec(r);t;)(e=r.slice(i,T.lastIndex-t[0].length)).length&&n.push(e),n.push(_(t)),i=T.lastIndex,t=T.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function P(r){var e,n;if("string"!=typeof r)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[S(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return O.apply(null,e)}var k,U=Object.prototype,x=U.toString,I=U.__defineGetter__,M=U.__defineSetter__,V=U.__lookupGetter__,F=U.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===x.call(n))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||F.call(r,e)?(t=r.__proto__,r.__proto__=U,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(r,e,n.get),a&&M&&M.call(r,e,n.set),r};var L=k;function R(r,e,n){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var C=Math.floor;function G(r){return C(r)===r}var $=4294967295;function W(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,t;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&G(r.length)&&r.length>=0&&r.length<=$}(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}function B(r){return"number"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return H&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function Y(r,e){return null!=r&&X.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=Z()?function(r){var e,n,t;if(null==r)return z.call(r);n=r[D],e=Y(r,D);try{r[D]=void 0}catch(e){return z.call(r)}return t=z.call(r),e?r[D]=n:delete r[D],t}:function(r){return z.call(r)},K=Number,Q=K.prototype.toString,rr=Z();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function nr(r){return B(r)||er(r)}R(nr,"isPrimitive",B),R(nr,"isObject",er);var tr=W(nr.isPrimitive),ir=W(nr.isObject),or=W(nr);R(or,"primitives",tr),R(or,"objects",ir);var ar=Number.POSITIVE_INFINITY,ur=K.NEGATIVE_INFINITY;function fr(r){return r<ar&&r>ur&&G(r)}function cr(r){return B(r)&&fr(r)}function lr(r){return er(r)&&fr(r.valueOf())}function sr(r){return cr(r)||lr(r)}function pr(r){return cr(r)&&r>=0}function vr(r){return lr(r)&&r.valueOf()>=0}function yr(r){return pr(r)||vr(r)}R(sr,"isPrimitive",cr),R(sr,"isObject",lr),R(yr,"isPrimitive",pr),R(yr,"isObject",vr);var hr=9007199254740991;function dr(r){return null!==r&&"object"==typeof r&&pr(r.length)&&r.length<=hr&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}function gr(r){return B(r)&&r>0}function br(r){return er(r)&&r.valueOf()>0}function wr(r){return gr(r)||br(r)}function mr(r,e,n){L(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function jr(r){return r!=r}R(wr,"isPrimitive",gr),R(wr,"isObject",br);var Nr,Er=Math.sqrt,Ar="function"==typeof Uint32Array,Or="function"==typeof Uint32Array?Uint32Array:null,Tr="function"==typeof Uint32Array?Uint32Array:void 0;Nr=function(){var r,e,n;if("function"!=typeof Or)return!1;try{e=new Or(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Ar&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")};var _r,Sr=Nr,Pr="function"==typeof Float64Array,kr="function"==typeof Float64Array?Float64Array:null,Ur="function"==typeof Float64Array?Float64Array:void 0;_r=function(){var r,e,n;if("function"!=typeof kr)return!1;try{e=new kr([1,3.14,-3.14,NaN]),n=e,r=(Pr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var xr,Ir=_r,Mr="function"==typeof Uint8Array,Vr="function"==typeof Uint8Array?Uint8Array:null,Fr="function"==typeof Uint8Array?Uint8Array:void 0;xr=function(){var r,e,n;if("function"!=typeof Vr)return!1;try{e=new Vr(e=[1,3.14,-3.14,256,257]),n=e,r=(Mr&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Lr,Rr=xr,Cr="function"==typeof Uint16Array,Gr="function"==typeof Uint16Array?Uint16Array:null,$r="function"==typeof Uint16Array?Uint16Array:void 0;Lr=function(){var r,e,n;if("function"!=typeof Gr)return!1;try{e=new Gr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Cr&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Wr,Br={uint16:Lr,uint8:Rr};(Wr=new Br.uint16(1))[0]=4660;var Hr=52===new Br.uint8(Wr.buffer)[0],Zr=!0===Hr?1:0,zr=new Ir(1),Xr=new Sr(zr.buffer);function Yr(r){return zr[0]=r,Xr[Zr]}var qr=!0===Hr?1:0,Dr=new Ir(1),Jr=new Sr(Dr.buffer);function Kr(r,e){return Dr[0]=r,Jr[qr]=e>>>0,Dr[0]}var Qr=1023,re=.6931471803691238,ee=1.9082149292705877e-10,ne=0x40000000000000,te=.3333333333333333,ie=1048575,oe=2146435072,ae=1048576,ue=1072693248;function fe(r){var e,n,t,i,o,a,u,f,c,l,s,p;return 0===r?ur:jr(r)||r<0?NaN:(o=0,(n=Yr(r))<ae&&(o-=54,n=Yr(r*=ne)),n>=oe?r+r:(o+=(n>>20)-Qr|0,o+=(f=614244+(n&=ie)&1048576|0)>>20|0,u=(r=Kr(r,n|f^ue))-1,(ie&2+n)<3?0===u?0===o?0:o*re+o*ee:(a=u*u*(.5-te*u),0===o?u-a:o*re-(a-o*ee-u)):(f=n-398458|0,c=440401-n|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=t+i,(f|=c)>0?(e=.5*u*u,0===o?u-(e-l*(e+a)):o*re-(e-(l*(e+a)+o*ee)-u)):0===o?u-l*(u-a):o*re-(l*(u-a)-o*ee-u))))}var ce=.08913147449493408,le=2.249481201171875,se=.807220458984375,pe=.9399557113647461,ve=.9836282730102539;function ye(r){var e,n,t,i,o;return jr(r)?NaN:1===r?ar:-1===r?ur:0===r?r:r>1||r<-1?NaN:(r<0?(e=-1,n=-r):(e=1,n=r),t=1-n,n<=.5?(i=n*(n+10),o=function(r){var e,n;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(e=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,n=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(e=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),n=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),e/n)}(n),e*(i*ce+i*o)):t>=.25?(i=Er(-2*fe(t)),o=function(r){var e,n;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(e=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,n=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(e=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,n=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),e/n)}(t-=.25),e*(i/(le+o))):(t=Er(-fe(t)))<3?(o=function(r){var e,n;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(e=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(e=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),e/n)}(t-1.125),e*(se*t+o*t)):t<6?(o=function(r){var e,n;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(e=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(e=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),e/n)}(t-3),e*(pe*t+o*t)):(o=function(r){var e,n;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(e=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(e=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),n=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),e/n)}(t-6),e*(ve*t+o*t)))}function he(r){return function(){return r}}function de(r,e){var n,t;return jr(r)||jr(e)||e<0?he(NaN):(n=r,t=e*Er(2),function(r){return jr(r)||r<0||r>1?NaN:n+t*ye(2*r-1)})}R((function(r,e){return jr(r)||r<0||r>1?NaN:e}),"factory",(function(r){return jr(r)?he(NaN):function(e){return jr(e)||e<0||e>1?NaN:r}})),R((function(r,e,n){return jr(e)||jr(n)||jr(r)||n<0||r<0||r>1?NaN:0===n?e:e+n*Er(2)*ye(2*r-1)}),"factory",de);var ge=Math.ceil;function be(r){return r<0?ge(r):C(r)}var we=1023,me=-1023,je=-1074;function Ne(r){return r===ar||r===ur}var Ee,Ae,Oe=2147483648,Te=2147483647;!0===Hr?(Ee=1,Ae=0):(Ee=0,Ae=1);var _e,Se,Pe={HIGH:Ee,LOW:Ae},ke=new Ir(1),Ue=new Sr(ke.buffer),xe=Pe.HIGH,Ie=Pe.LOW;function Me(r,e,n,t){return ke[0]=r,e[t]=Ue[xe],e[t+n]=Ue[Ie],e}function Ve(r){return Me(r,[0,0],1,0)}R(Ve,"assign",Me),!0===Hr?(_e=1,Se=0):(_e=0,Se=1);var Fe={HIGH:_e,LOW:Se},Le=new Ir(1),Re=new Sr(Le.buffer),Ce=Fe.HIGH,Ge=Fe.LOW;function $e(r,e){return Re[Ce]=r,Re[Ge]=e,Le[0]}var We=[0,0];function Be(r,e){var n,t;return Ve.assign(r,We,1,0),n=We[0],n&=Te,t=Yr(e),$e(n|=t&=Oe,We[1])}var He=22250738585072014e-324;function Ze(r){return Math.abs(r)}var ze=4503599627370496;function Xe(r,e,n,t){return jr(r)||Ne(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Ze(r)<He?(e[t]=r*ze,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}R((function(r){return Xe(r,[0,0],1,0)}),"assign",Xe);var Ye=2146435072,qe=2220446049250313e-31,De=2148532223,Je=[0,0],Ke=[0,0];function Qe(r,e){var n,t;return 0===e||0===r||jr(r)||Ne(r)?r:(Xe(r,Je,1,0),r=Je[0],e+=Je[1],e+=function(r){var e=Yr(r);return(e=(e&Ye)>>>20)-Qr|0}(r),e<je?Be(0,r):e>we?r<0?ur:ar:(e<=me?(e+=52,t=qe):t=1,Ve.assign(r,Ke,1,0),n=Ke[0],n&=De,t*$e(n|=e+Qr<<20,Ke[1])))}var rn=.6931471803691238,en=1.9082149292705877e-10,nn=1.4426950408889634,tn=709.782712893384,on=-745.1332191019411,an=1/(1<<28),un=-an;function fn(r){var e;return jr(r)||r===ar?r:r===ur?0:r>tn?ar:r<on?0:r>un&&r<an?1+r:function(r,e,n){var t,i,o,a;return Qe(1-(e-(t=r-e)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-(e=be(r<0?nn*r-.5:nn*r+.5))*rn,e*en,e)}var cn=!0===Hr?0:1,ln=new Ir(1),sn=new Sr(ln.buffer);function pn(r,e){return ln[0]=r,sn[cn]=e>>>0,ln[0]}var vn=1e-300,yn=13877787807814457e-33,hn=.8450629115104675,dn=.12837916709551256,gn=1,bn=-.0023621185607526594,wn=1,mn=-.009864944034847148,jn=1,Nn=-.0098649429247001,En=1;function An(r){var e,n,t,i,o,a,u,f;if(jr(r))return NaN;if(r===ar)return 0;if(r===ur)return 2;if(0===r)return 1;if(r<0?(e=!0,n=-r):(e=!1,n=r),n<.84375)return n<yn?1-r:(i=dn+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),o=gn+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),a=i/o,r<.25?1-(r+r*a):(i=r*a,.5-(i+=r-.5)));if(n<1.25)return u=bn+(o=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(o),f=wn+o*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(o),e?1+hn+u/f:1-hn-u/f;if(n<28){if(o=1/(n*n),n<2.857142857142857)i=mn+o*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(o),o=jn+o*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(o);else{if(r<-6)return 2-vn;i=Nn+o*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(o),o=En+o*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(o)}return i=fn(-(t=pn(n,0))*t-.5625)*fn((t-n)*(t+n)+i/o),e?2-i/n:i/n}return e?2-vn:vn*vn}function On(r){return jr(r)?he(NaN):function(e){return jr(e)?NaN:e<r?0:1}}function Tn(r,e){var n;return jr(r)||jr(e)||e<0?he(NaN):0===e?On(r):(n=e*Er(2),function(e){return jr(e)?NaN:.5*An(-(e-r)/n)})}function _n(){var r,e=arguments,n="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}R((function(r,e){return jr(r)||jr(e)?NaN:r<e?0:1}),"factory",On),R((function(r,e,n){return jr(r)||jr(e)||jr(n)||n<0?NaN:0===n?r<e?0:1:.5*An(-(r-e)/(n*Er(2)))}),"factory",Tn);var Sn=128;function Pn(r,e,n,t){var i,o,a,u,f,c,l,s,p,v,y,h,d;if(r<=0)return 0;if(1===r||0===n)return e[t];if(i=t,r<8){for(y=0,d=0;d<r;d++)y+=e[i],i+=n;return y}if(r<=Sn){for(o=e[i],a=e[i+n],u=e[i+2*n],f=e[i+3*n],c=e[i+4*n],l=e[i+5*n],s=e[i+6*n],p=e[i+7*n],i+=8*n,v=r%8,d=8;d<r-v;d+=8)o+=e[i],a+=e[i+n],u+=e[i+2*n],f+=e[i+3*n],c+=e[i+4*n],l+=e[i+5*n],s+=e[i+6*n],p+=e[i+7*n],i+=8*n;for(y=o+a+(u+f)+(c+l+(s+p));d<r;d++)y+=e[i],i+=n;return y}return h=C(r/2),Pn(h-=h%8,e,n,i)+Pn(r-h,e,n,i+h*n)}function kn(r,e,n){var t,i,o;if(r<=0)return 0;if(1===r||0===n)return e[0];if(t=n<0?(1-r)*n:0,r<8){for(i=0,o=0;o<r;o++)i+=e[t],t+=n;return i}return Pn(r,e,n,t)}R(kn,"ndarray",Pn);var Un=128;function xn(r,e,n,t,i){var o,a,u,f,c,l,s,p,v,y,h,d,g;if(r<=0)return 0;if(1===r||0===t)return e+n[i];if(o=i,r<8){for(h=0,g=0;g<r;g++)h+=e+n[o],o+=t;return h}if(r<=Un){for(a=e+n[o],u=e+n[o+t],f=e+n[o+2*t],c=e+n[o+3*t],l=e+n[o+4*t],s=e+n[o+5*t],p=e+n[o+6*t],v=e+n[o+7*t],o+=8*t,y=r%8,g=8;g<r-y;g+=8)a+=e+n[o],u+=e+n[o+t],f+=e+n[o+2*t],c+=e+n[o+3*t],l+=e+n[o+4*t],s+=e+n[o+5*t],p+=e+n[o+6*t],v+=e+n[o+7*t],o+=8*t;for(h=a+u+(f+c)+(l+s+(p+v));g<r;g++)h+=e+n[o],o+=t;return h}return d=C(r/2),xn(d-=d%8,e,n,t,o)+xn(r-d,e,n,t,o+d*t)}function In(r,e,n,t){var i,o,a;if(r<=0)return 0;if(1===r||0===t)return e+n[0];if(i=t<0?(1-r)*t:0,r<8){for(o=0,a=0;a<r;a++)o+=e+n[i],i+=t;return o}return xn(r,e,n,t,i)}function Mn(r,e,n){var t;return r<=0?NaN:1===r||0===n?e[0]:(t=kn(r,e,n)/r)+In(r,-t,e,n)/r}R(In,"ndarray",xn),R(Mn,"ndarray",(function(r,e,n,t){var i;return r<=0?NaN:1===r||0===n?e[t]:(i=Pn(r,e,n,t)/r)+xn(r,-i,e,n,t)/r}));const{ndarray:Vn}=Mn;function Fn(r,e,n){return Mn(r,e,n)}function Ln(r){return B(r)&&r>=0&&r<=1}function Rn(r){return er(r)&&r.valueOf()>=0&&r.valueOf()<=1}function Cn(r){return Ln(r)||Rn(r)}R(Fn,"ndarray",(function(r,e,n,t){return Vn(r,e,n,t)})),R(Cn,"isPrimitive",Ln),R(Cn,"isObject",Rn);var Gn=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)},$n=/./;function Wn(r){return"boolean"==typeof r}var Bn=Boolean,Hn=Boolean.prototype.toString,Zn=Z();function zn(r){return"object"==typeof r&&(r instanceof Bn||(Zn?function(r){try{return Hn.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Xn(r){return Wn(r)||zn(r)}R(Xn,"isPrimitive",Wn),R(Xn,"isObject",zn);var Yn="object"==typeof self?self:null,qn="object"==typeof window?window:null,Dn="object"==typeof globalThis?globalThis:null,Jn=function(r){if(arguments.length){if(!Wn(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Dn)return Dn;if(Yn)return Yn;if(qn)return qn;throw new Error("unexpected error. Unable to resolve global object.")}(),Kn=Jn.document&&Jn.document.childNodes,Qn=Int8Array;function rt(){return/^\s*function\s*([^(]*)/i}var et=/^\s*function\s*([^(]*)/i;function nt(r){return null!==r&&"object"==typeof r}function tt(r){var e,n,t,i;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=et.exec(t.toString()))return e[1]}return nt(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}R(rt,"REGEXP",et),R(nt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,t;if(!Gn(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(nt));var it="function"==typeof $n||"object"==typeof Qn||"function"==typeof Kn?function(r){return tt(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?tt(r).toLowerCase():e};function ot(r){return"function"===it(r)}var at,ut=Object,ft=Object.getPrototypeOf;at=ot(Object.getPrototypeOf)?ft:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ct=at,lt=Object.prototype;function st(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Gn(r)}(r)&&(e=function(r){return null==r?null:(r=ut(r),ct(r))}(r),!e||!Y(r,"constructor")&&Y(e,"constructor")&&ot(e.constructor)&&"[object Function]"===J(e.constructor)&&Y(e,"isPrototypeOf")&&ot(e.isPrototypeOf)&&(e===lt||function(r){var e;for(e in r)if(!Y(r,e))return!1;return!0}(r)))}function pt(r){return"string"==typeof r}var vt=String.prototype.valueOf,yt=Z();function ht(r){return"object"==typeof r&&(r instanceof String||(yt?function(r){try{return vt.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function dt(r){return pt(r)||ht(r)}function gt(r){return B(r)&&jr(r)}function bt(r){return er(r)&&jr(r.valueOf())}function wt(r){return gt(r)||bt(r)}function mt(r){return cr(r)&&r>0}function jt(r){return lr(r)&&r.valueOf()>0}function Nt(r){return mt(r)||jt(r)}function Et(r){return G(r/2)}function At(r){return Et(r>0?r-1:r+1)}function Ot(r){return 0|r}R(dt,"isPrimitive",pt),R(dt,"isObject",ht),R(wt,"isPrimitive",gt),R(wt,"isObject",bt),R(Nt,"isPrimitive",mt),R(Nt,"isObject",jt);var Tt=1072693247,_t=1e300,St=1e-300,Pt=1048575,kt=1048576,Ut=1072693248,xt=536870912,It=524288,Mt=20,Vt=9007199254740992,Ft=.9617966939259756,Lt=.9617967009544373,Rt=-7.028461650952758e-9,Ct=[1,1.5],Gt=[0,.5849624872207642],$t=[0,1.350039202129749e-8],Wt=1.4426950408889634,Bt=1.4426950216293335,Ht=1.9259629911266175e-8,Zt=.6931471805599453,zt=1048575,Xt=1048576,Yt=1071644672,qt=20,Dt=.6931471824645996,Jt=-1.904654299957768e-9,Kt=1072693247,Qt=1105199104,ri=1139802112,ei=1083179008,ni=1072693248,ti=1083231232,ii=3230714880,oi=31,ai=1e300,ui=1e-300,fi=8008566259537294e-32,ci=[0,0],li=[0,0];function si(r,e){var n,t,i,o,a,u,f,c,l,s,p,v,y,h;if(jr(r)||jr(e))return NaN;if(Ve.assign(e,ci,1,0),a=ci[0],0===ci[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Er(r);if(-.5===e)return 1/Er(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Ne(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Ze(r)<1==(e===ar)?0:ar}(r,e)}if(Ve.assign(r,ci,1,0),o=ci[0],0===ci[1]){if(0===o)return function(r,e){return e===ur?ar:e===ar?0:e>0?At(e)?r:0:At(e)?Be(ar,r):ar}(r,e);if(1===r)return 1;if(-1===r&&At(e))return-1;if(Ne(r))return r===ur?si(-0,-e):e<0?0:ar}if(r<0&&!1===G(e))return(r-r)/(r-r);if(i=Ze(r),n=o&Te|0,t=a&Te|0,f=a>>>oi|0,u=(u=o>>>oi|0)&&At(e)?-1:1,t>Qt){if(t>ri)return function(r,e){return(Yr(r)&Te)<=Tt?e<0?_t*_t:St*St:e>0?_t*_t:St*St}(r,e);if(n<Kt)return 1===f?u*ai*ai:u*ui*ui;if(n>ni)return 0===f?u*ai*ai:u*ui*ui;p=function(r,e){var n,t,i,o,a,u,f;return o=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Ht-o*Wt)-((t=pn(t=(a=Bt*i)+u,0))-a),r[0]=t,r[1]=n,r}(li,i)}else p=function(r,e,n){var t,i,o,a,u,f,c,l,s,p,v,y,h,d,g,b,w,m,j,N,E;return m=0,n<kt&&(m-=53,n=Yr(e*=Vt)),m+=(n>>Mt)-Qr|0,n=(j=n&Pt|0)|Ut|0,j<=235662?N=0:j<767610?N=1:(N=0,m+=1,n-=kt),a=pn(i=(b=(e=Kr(e,n))-(c=Ct[N]))*(w=1/(e+c)),0),t=(n>>1|xt)+It,f=Kr(0,t+=N<<18),g=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=pn(f=3+(o=a*a)+(g+=(u=w*(b-a*f-a*(e-(f-c))))*(a+i)),0),s=pn(s=(b=a*f)+(w=u*f+(g-(f-3-o))*i),0),p=Lt*s,h=(v=Rt*s+(w-(s-b))*Ft+$t[N])-((y=pn(y=p+v+(l=Gt[N])+(d=m),0))-d-l-p),r[0]=y,r[1]=h,r}(li,i,n);if(v=(s=(e-(c=pn(e,0)))*p[0]+e*p[1])+(l=c*p[0]),Ve.assign(v,ci,1,0),y=Ot(ci[0]),h=Ot(ci[1]),y>=ei){if(0!=(y-ei|h))return u*ai*ai;if(s+fi>v-l)return u*ai*ai}else if((y&Te)>=ti){if(0!=(y-ii|h))return u*ui*ui;if(s<=v-l)return u*ui*ui}return v=function(r,e,n){var t,i,o,a,u,f,c,l,s,p;return s=((l=r&Te|0)>>qt)-Qr|0,c=0,l>Yt&&(i=Kr(0,((c=r+(Xt>>s+1)>>>0)&~(zt>>(s=((c&Te)>>qt)-Qr|0)))>>>0),c=(c&zt|Xt)>>qt-s>>>0,r<0&&(c=-c),e-=i),r=Ot(r=Yr(f=1-((f=(o=(i=pn(i=n+e,0))*Dt)+(a=(n-(i-e))*Zt+i*Jt))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<qt>>>0)>>qt<=0?Qe(f,c):Kr(f,r)}(y,l,s),u*v}var pi=Math.round,vi=308,yi=-308,hi=-324,di=9007199254740992,gi=1e308;function bi(r,e){var n,t;return jr(r)||jr(e)||Ne(e)?NaN:Ne(r)||0===r||e<hi||Ze(r)>di&&e<=0?r:e>vi?0*r:e<yi?(n=si(10,-(e+vi)),Ne(t=r*gi*n)?r:pi(t)/gi/n):Ne(t=r*(n=si(10,-e)))?r:pi(t)/n}function wi(r){var e,n,t;if(n=4,e=!0,arguments.length>0){if(!st(r))throw new TypeError(_n("1M13L",r));if(Y(r,"digits")){if(!Nt(r.digits))throw new TypeError(_n("1M13P","digits",r.digits));n=r.digits}if(Y(r,"decision")){if(!Wn(r.decision))throw new TypeError(_n("1M12o","decision",r.decision));e=r.decision}}switch(t="",t+=this.method,t+="\n\n",t+="Alternative hypothesis: ",t+="True difference in means is ",this.alternative){case"less":t+="less than ";break;case"greater":t+="greater than ";break;default:t+="not equal to "}return t+=this.nullValue,t+="\n\n",t+="    pValue: "+bi(this.pValue,-n)+"\n",t+="    statistic: "+bi(this.statistic,-n)+"\n",t+="    "+100*(1-this.alpha)+"% confidence interval: ["+bi(this.ci[0],-n)+","+bi(this.ci[1],-n)+"]",t+="\n\n",e&&(t+="Test Decision: ",this.rejected?t+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":t+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",t+="\n"),t}var mi=de(0,1),ji=Tn(0,1);return function(r,e,n,t,i){var o,a,u,f,c,l,s,p,v,y,h,d,g,b;if(!dr(r)&&!tr(r))throw new TypeError(_n("1M18R",r));if(!dr(e)&&!tr(e))throw new TypeError(_n("1M19k",e));if(!gr(n))throw new TypeError(_n("1M1A7",n));if(!gr(t))throw new TypeError(_n("1M1A8",t));if(s={},i&&(h=function(r,e){if(!st(e))return new TypeError(_n("1M12V",e));if(Y(e,"alpha")){if(r.alpha=e.alpha,!B(r.alpha)||wt(r.alpha))return new TypeError(_n("1M18P","alpha",r.alpha));if(!Ln(r.alpha))return new RangeError(_n("1M18V","alpha",r.alpha))}return Y(e,"alternative")&&(r.alternative=e.alternative,!pt(r.alternative))?new TypeError(_n("1M12W","alternative",r.alternative)):Y(e,"difference")&&(r.difference=e.difference,!B(r.difference)||wt(r.difference))?new TypeError(_n("1M18P","difference",r.difference)):null}(s,i)))throw h;switch(l=s.difference||0,a=void 0===s.alpha?.05:s.alpha,g=r.length,b=e.length,o=Er(n*n/g+t*t/b),v=((u=Fn(g,r,1))-(f=Fn(b,e,1))-l)/o,y=s.alternative||"two-sided"){case"two-sided":p=2*ji(-Ze(v)),(c=[v-mi(1-a/2),v+mi(1-a/2)])[0]=l+c[0]*o,c[1]=l+c[1]*o;break;case"greater":p=1-ji(v),(c=[v-mi(1-a),ar])[0]=l+c[0]*o;break;case"less":p=ji(v),(c=[ur,v+mi(1-a)])[1]=l+c[1]*o;break;default:throw new Error(_n("1M14S","alternative",["two-sided","less","greater"].join('", "'),y))}return mr(d={},"rejected",p<=a),mr(d,"alpha",a),mr(d,"pValue",p),mr(d,"statistic",v),mr(d,"ci",c),mr(d,"alternative",y),mr(d,"method","Two-sample z-test"),mr(d,"nullValue",l),mr(d,"xmean",u),mr(d,"ymean",f),mr(d,"print",wi),d}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ztest2=e();
//# sourceMappingURL=browser.js.map
