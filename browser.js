// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).ztest2=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,i=e.toString,u=e.__defineGetter__,o=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,s,v;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),s="get"in t,v="set"in t,l&&(s||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,n,t.get),v&&o&&o.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var s=Math.floor;function v(r){return s(r)===r}function y(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&v(r.length)&&r.length>=0&&r.length<=4294967295}(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}function p(r){return"number"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return b&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;function m(r,n){return null!=r&&w.call(r,n)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=d()?function(r){var n,t,e;if(null==r)return h.call(r);t=r[g],n=m(r,g);try{r[g]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[g]=t:delete r[g],e}:function(r){return h.call(r)},N=Number,O=N.prototype.toString;var A=d();function _(r){return"object"==typeof r&&(r instanceof N||(A?function(r){try{return O.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function E(r){return p(r)||_(r)}l(E,"isPrimitive",p),l(E,"isObject",_);var T=y(E.isPrimitive),U=y(E.isObject),P=y(E);l(P,"primitives",T),l(P,"objects",U);var S=Number.POSITIVE_INFINITY,F=N.NEGATIVE_INFINITY;function I(r){return r<S&&r>F&&v(r)}function V(r){return p(r)&&I(r)}function L(r){return _(r)&&I(r.valueOf())}function M(r){return V(r)||L(r)}function k(r){return V(r)&&r>=0}function B(r){return L(r)&&r.valueOf()>=0}function G(r){return k(r)||B(r)}l(M,"isPrimitive",V),l(M,"isObject",L),l(G,"isPrimitive",k),l(G,"isObject",B);function H(r){return null!==r&&"object"==typeof r&&k(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}function x(r){return p(r)&&r>0}function R(r){return _(r)&&r.valueOf()>0}function C(r){return x(r)||R(r)}function W(r,n,t){c(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function Y(r){return r!=r}l(C,"isPrimitive",x),l(C,"isObject",R);var q=Math.sqrt,z="function"==typeof Uint32Array;var X="function"==typeof Uint32Array?Uint32Array:null;var D,J="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,n,t;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(z&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K=D,Q="function"==typeof Float64Array;var Z="function"==typeof Float64Array?Float64Array:null;var $,rr="function"==typeof Float64Array?Float64Array:void 0;$=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z([1,3.14,-3.14,NaN]),t=n,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var nr=$,tr="function"==typeof Uint8Array;var er="function"==typeof Uint8Array?Uint8Array:null;var ir,ur="function"==typeof Uint8Array?Uint8Array:void 0;ir=function(){var r,n,t;if("function"!=typeof er)return!1;try{n=new er(n=[1,3.14,-3.14,256,257]),t=n,r=(tr&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var or=ir,fr="function"==typeof Uint16Array;var ar="function"==typeof Uint16Array?Uint16Array:null;var cr,lr="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,65536,65537]),t=n,r=(fr&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var sr,vr={uint16:cr,uint8:or};(sr=new vr.uint16(1))[0]=4660;var yr=52===new vr.uint8(sr.buffer)[0],pr=!0===yr?1:0,br=new nr(1),dr=new K(br.buffer);function hr(r){return br[0]=r,dr[pr]}var wr=!0===yr?1:0,mr=new nr(1),gr=new K(mr.buffer);function jr(r,n){return mr[0]=r,gr[wr]=n>>>0,mr[0]}var Nr=1023;var Or=.6931471803691238,Ar=1.9082149292705877e-10,_r=1048575;function Er(r){var n,t,e,i,u,o,f,a,c,l,s,v;return 0===r?F:Y(r)||r<0?NaN:(u=0,(t=hr(r))<1048576&&(u-=54,t=hr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-Nr|0,u+=(a=(t&=_r)+614244&1048576|0)>>20|0,f=(r=jr(r,t|1072693248^a))-1,(_r&2+t)<3?0===f?0===u?0:u*Or+u*Ar:(o=f*f*(.5-.3333333333333333*f),0===u?f-o:u*Or-(o-u*Ar-f)):(a=t-398458|0,c=440401-t|0,i=(s=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=e+i,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+o)):u*Or-(n-(l*(n+o)+u*Ar)-f)):0===u?f-l*(f-o):u*Or-(l*(f-o)-u*Ar-f))))}function Tr(r){var n,t,e,i,u;return Y(r)?NaN:1===r?S:-1===r?F:0===r?r:r>1||r<-1?NaN:(r<0?(n=-1,t=-r):(n=1,t=r),e=1-t,t<=.5?(i=t*(t+10),u=function(r){var n,t;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(n=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/t)}(t),n*(.08913147449493408*i+i*u)):e>=.25?(i=q(-2*Er(e)),u=function(r){var n,t;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(n=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/t)}(e-=.25),n*(i/(2.249481201171875+u))):(e=q(-Er(e)))<3?(u=function(r){var n,t;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(n=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(n=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),n/t)}(e-1.125),n*(.807220458984375*e+u*e)):e<6?(u=function(r){var n,t;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(n=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(n=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),n/t)}(e-3),n*(.9399557113647461*e+u*e)):(u=function(r){var n,t;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(n=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(n=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),t=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),n/t)}(e-6),n*(.9836282730102539*e+u*e)))}function Ur(r){return function(){return r}}function Pr(r,n){var t,e;return Y(r)||Y(n)||n<0?Ur(NaN):(t=r,e=n*q(2),function(r){if(Y(r)||r<0||r>1)return NaN;return t+e*Tr(2*r-1)})}l((function(r,n){return Y(r)||r<0||r>1?NaN:n}),"factory",(function(r){return Y(r)?Ur(NaN):function(n){if(Y(n)||n<0||n>1)return NaN;return r}})),l((function(r,n,t){return Y(n)||Y(t)||Y(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*q(2)*Tr(2*r-1)}),"factory",Pr);var Sr=Math.ceil;function Fr(r){return r<0?Sr(r):s(r)}function Ir(r){return r===S||r===F}var Vr,Lr,Mr=2147483647;!0===yr?(Vr=1,Lr=0):(Vr=0,Lr=1);var kr,Br,Gr={HIGH:Vr,LOW:Lr},Hr=new nr(1),xr=new K(Hr.buffer),Rr=Gr.HIGH,Cr=Gr.LOW;function Wr(r,n,t,e){return Hr[0]=r,n[e]=xr[Rr],n[e+t]=xr[Cr],n}function Yr(r){return Wr(r,[0,0],1,0)}l(Yr,"assign",Wr),!0===yr?(kr=1,Br=0):(kr=0,Br=1);var qr={HIGH:kr,LOW:Br},zr=new nr(1),Xr=new K(zr.buffer),Dr=qr.HIGH,Jr=qr.LOW;function Kr(r,n){return Xr[Dr]=r,Xr[Jr]=n,zr[0]}var Qr=[0,0];function Zr(r,n){var t,e;return Yr.assign(r,Qr,1,0),t=Qr[0],t&=Mr,e=hr(n),Kr(t|=e&=2147483648,Qr[1])}function $r(r){return Math.abs(r)}function rn(r,n,t,e){return Y(r)||Ir(r)?(n[e]=r,n[e+t]=0,n):0!==r&&$r(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return rn(r,[0,0],1,0)}),"assign",rn);var nn=[0,0],tn=[0,0];function en(r,n){var t,e;return 0===n||0===r||Y(r)||Ir(r)?r:(rn(r,nn,1,0),n+=nn[1],n+=function(r){var n=hr(r);return(n=(2146435072&n)>>>20)-Nr|0}(r=nn[0]),n<-1074?Zr(0,r):n>1023?r<0?F:S:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Yr.assign(r,tn,1,0),t=tn[0],t&=2148532223,e*Kr(t|=n+Nr<<20,tn[1])))}var un=1.4426950408889634,on=1/(1<<28);function fn(r){var n;return Y(r)||r===S?r:r===F?0:r>709.782712893384?S:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<on?1+r:function(r,n,t){var e,i,u,o;return en(1-(n-(e=r-n)*(u=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=Fr(r<0?un*r-.5:un*r+.5)),1.9082149292705877e-10*n,n)}var an=!0===yr?0:1,cn=new nr(1),ln=new K(cn.buffer);function sn(r,n){return cn[0]=r,ln[an]=n>>>0,cn[0]}var vn=.8450629115104675;function yn(r){var n,t,e,i,u,o,f,a;if(Y(r))return NaN;if(r===S)return 0;if(r===F)return 2;if(0===r)return 1;if(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(i=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),u=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),o=i/u,r<.25?1-(r+r*o):(i=r*o,.5-(i+=r-.5)));if(t<1.25)return f=(u=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(u)-.0023621185607526594,a=1+u*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(u),n?1+vn+f/a:1-vn-f/a;if(t<28){if(u=1/(t*t),t<2.857142857142857)i=u*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u)-.009864944034847148,u=1+u*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(u);else{if(r<-6)return 2;i=u*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u)-.0098649429247001,u=1+u*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(u)}return i=fn(-(e=sn(t,0))*e-.5625)*fn((e-t)*(e+t)+i/u),n?2-i/t:i/t}return n?2:0}function pn(r){return Y(r)?Ur(NaN):function(n){if(Y(n))return NaN;return n<r?0:1}}function bn(r,n){var t;return Y(r)||Y(n)||n<0?Ur(NaN):0===n?pn(r):(t=n*q(2),function(n){if(Y(n))return NaN;return.5*yn(-(n-r)/t)})}function dn(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}l((function(r,n){return Y(r)||Y(n)?NaN:r<n?0:1}),"factory",pn),l((function(r,n,t){return Y(r)||Y(n)||Y(t)||t<0?NaN:0===t?r<n?0:1:.5*yn(-(r-n)/(t*q(2)))}),"factory",bn);function hn(r,n,t,e){var i,u,o,f,a,c,l,v,y,p,b,d,h;if(r<=0)return 0;if(1===r||0===t)return n[e];if(i=e,r<8){for(b=0,h=0;h<r;h++)b+=n[i],i+=t;return b}if(r<=128){for(u=n[i],o=n[i+t],f=n[i+2*t],a=n[i+3*t],c=n[i+4*t],l=n[i+5*t],v=n[i+6*t],y=n[i+7*t],i+=8*t,p=r%8,h=8;h<r-p;h+=8)u+=n[i],o+=n[i+t],f+=n[i+2*t],a+=n[i+3*t],c+=n[i+4*t],l+=n[i+5*t],v+=n[i+6*t],y+=n[i+7*t],i+=8*t;for(b=u+o+(f+a)+(c+l+(v+y));h<r;h++)b+=n[i],i+=t;return b}return d=s(r/2),hn(d-=d%8,n,t,i)+hn(r-d,n,t,i+d*t)}function wn(r,n,t){var e,i,u;if(r<=0)return 0;if(1===r||0===t)return n[0];if(e=t<0?(1-r)*t:0,r<8){for(i=0,u=0;u<r;u++)i+=n[e],e+=t;return i}return hn(r,n,t,e)}l(wn,"ndarray",hn);function mn(r,n,t,e,i){var u,o,f,a,c,l,v,y,p,b,d,h,w;if(r<=0)return 0;if(1===r||0===e)return n+t[i];if(u=i,r<8){for(d=0,w=0;w<r;w++)d+=n+t[u],u+=e;return d}if(r<=128){for(o=n+t[u],f=n+t[u+e],a=n+t[u+2*e],c=n+t[u+3*e],l=n+t[u+4*e],v=n+t[u+5*e],y=n+t[u+6*e],p=n+t[u+7*e],u+=8*e,b=r%8,w=8;w<r-b;w+=8)o+=n+t[u],f+=n+t[u+e],a+=n+t[u+2*e],c+=n+t[u+3*e],l+=n+t[u+4*e],v+=n+t[u+5*e],y+=n+t[u+6*e],p+=n+t[u+7*e],u+=8*e;for(d=o+f+(a+c)+(l+v+(y+p));w<r;w++)d+=n+t[u],u+=e;return d}return h=s(r/2),mn(h-=h%8,n,t,e,u)+mn(r-h,n,t,e,u+h*e)}function gn(r,n,t,e){var i,u,o;if(r<=0)return 0;if(1===r||0===e)return n+t[0];if(i=e<0?(1-r)*e:0,r<8){for(u=0,o=0;o<r;o++)u+=n+t[i],i+=e;return u}return mn(r,n,t,e,i)}function jn(r,n,t){var e;return r<=0?NaN:1===r||0===t?n[0]:(e=wn(r,n,t)/r)+gn(r,-e,n,t)/r}l(gn,"ndarray",mn),l(jn,"ndarray",(function(r,n,t,e){var i;return r<=0?NaN:1===r||0===t?n[e]:(i=hn(r,n,t,e)/r)+mn(r,-i,n,t,e)/r}));const{ndarray:Nn}=jn;function On(r,n,t){return jn(r,n,t)}function An(r){return p(r)&&r>=0&&r<=1}function _n(r){return _(r)&&r.valueOf()>=0&&r.valueOf()<=1}function En(r){return An(r)||_n(r)}l(On,"ndarray",(function(r,n,t,e){return Nn(r,n,t,e)})),l(En,"isPrimitive",An),l(En,"isObject",_n);var Tn=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};var Un=/./;function Pn(r){return"boolean"==typeof r}var Sn=Boolean.prototype.toString;var Fn=d();function In(r){return"object"==typeof r&&(r instanceof Boolean||(Fn?function(r){try{return Sn.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function Vn(r){return Pn(r)||In(r)}function Ln(){return new Function("return this;")()}l(Vn,"isPrimitive",Pn),l(Vn,"isObject",In);var Mn="object"==typeof self?self:null,kn="object"==typeof window?window:null,Bn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Gn="object"==typeof Bn?Bn:null;var Hn=function(r){if(arguments.length){if(!Pn(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ln()}if(Mn)return Mn;if(kn)return kn;if(Gn)return Gn;throw new Error("unexpected error. Unable to resolve global object.")}(),xn=Hn.document&&Hn.document.childNodes,Rn=Int8Array;function Cn(){return/^\s*function\s*([^(]*)/i}var Wn=/^\s*function\s*([^(]*)/i;function Yn(r){return null!==r&&"object"==typeof r}function qn(r){var n,t,e,i;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=Wn.exec(e.toString()))return n[1]}return Yn(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}l(Cn,"REGEXP",Wn),l(Yn,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!Tn(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(Yn));var zn="function"==typeof Un||"object"==typeof Rn||"function"==typeof xn?function(r){return qn(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?qn(r).toLowerCase():n};function Xn(r){return"function"===zn(r)}var Dn,Jn=Object.getPrototypeOf;Dn=Xn(Object.getPrototypeOf)?Jn:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Kn=Dn;var Qn=Object.prototype;function Zn(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!Tn(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),Kn(r))}(r),!n||!m(r,"constructor")&&m(n,"constructor")&&Xn(n.constructor)&&"[object Function]"===j(n.constructor)&&m(n,"isPrototypeOf")&&Xn(n.isPrototypeOf)&&(n===Qn||function(r){var n;for(n in r)if(!m(r,n))return!1;return!0}(r)))}function $n(r){return"string"==typeof r}var rt=String.prototype.valueOf;var nt=d();function tt(r){return"object"==typeof r&&(r instanceof String||(nt?function(r){try{return rt.call(r),!0}catch(r){return!1}}(r):"[object String]"===j(r)))}function et(r){return $n(r)||tt(r)}function it(r){return p(r)&&Y(r)}function ut(r){return _(r)&&Y(r.valueOf())}function ot(r){return it(r)||ut(r)}function ft(r){return V(r)&&r>0}function at(r){return L(r)&&r.valueOf()>0}function ct(r){return ft(r)||at(r)}function lt(r){return v(r/2)}function st(r){return lt(r>0?r-1:r+1)}function vt(r){return 0|r}l(et,"isPrimitive",$n),l(et,"isObject",tt),l(ot,"isPrimitive",it),l(ot,"isObject",ut),l(ct,"isPrimitive",ft),l(ct,"isObject",at);var yt=1048576,pt=[1,1.5],bt=[0,.5849624872207642],dt=[0,1.350039202129749e-8];var ht=1048575;var wt=1048576;var mt=1083179008,gt=1e300,jt=1e-300,Nt=[0,0],Ot=[0,0];function At(r,n){var t,e,i,u,o,f,a,c,l,s,y,p,b,d;if(Y(r)||Y(n))return NaN;if(Yr.assign(n,Nt,1,0),o=Nt[0],0===Nt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return q(r);if(-.5===n)return 1/q(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Ir(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:$r(r)<1==(n===S)?0:S}(r,n)}if(Yr.assign(r,Nt,1,0),u=Nt[0],0===Nt[1]){if(0===u)return function(r,n){return n===F?S:n===S?0:n>0?st(n)?r:0:st(n)?Zr(S,r):S}(r,n);if(1===r)return 1;if(-1===r&&st(n))return-1;if(Ir(r))return r===F?At(-0,-n):n<0?0:S}if(r<0&&!1===v(n))return(r-r)/(r-r);if(i=$r(r),t=u&Mr|0,e=o&Mr|0,a=o>>>31|0,f=(f=u>>>31|0)&&st(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(hr(r)&Mr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*gt*gt:f*jt*jt;if(t>1072693248)return 0===a?f*gt*gt:f*jt*jt;y=function(r,n){var t,e,i,u,o,f;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=sn(e=(u=1.4426950216293335*i)+o,0))-u),r[0]=e,r[1]=t,r}(Ot,i)}else y=function(r,n,t){var e,i,u,o,f,a,c,l,s,v,y,p,b,d,h,w,m,g,j,N,O;return g=0,t<yt&&(g-=53,t=hr(n*=9007199254740992)),g+=(t>>20)-Nr|0,t=1072693248|(j=1048575&t|0),j<=235662?N=0:j<767610?N=1:(N=0,g+=1,t-=yt),o=sn(i=(w=(n=jr(n,t))-(c=pt[N]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=jr(0,e+=N<<18),h=(u=i*i)*u*(0===(O=u)?.5999999999999946:.5999999999999946+O*(.4285714285785502+O*(.33333332981837743+O*(.272728123808534+O*(.23066074577556175+.20697501780033842*O))))),a=sn(a=3+(u=o*o)+(h+=(f=m*(w-o*a-o*(n-(a-c))))*(o+i)),0),b=(y=-7.028461650952758e-9*(s=sn(s=(w=o*a)+(m=f*a+(h-(a-3-u))*i),0))+.9617966939259756*(m-(s-w))+dt[N])-((p=sn(p=(v=.9617967009544373*s)+y+(l=bt[N])+(d=g),0))-d-l-v),r[0]=p,r[1]=b,r}(Ot,i,t);if(p=(s=(n-(c=sn(n,0)))*y[0]+n*y[1])+(l=c*y[0]),Yr.assign(p,Nt,1,0),b=vt(Nt[0]),d=vt(Nt[1]),b>=mt){if(0!=(b-mt|d))return f*gt*gt;if(s+8008566259537294e-32>p-l)return f*gt*gt}else if((b&Mr)>=1083231232){if(0!=(b-3230714880|d))return f*jt*jt;if(s<=p-l)return f*jt*jt}return p=function(r,n,t){var e,i,u,o,f,a,c,l,s,v;return s=((l=r&Mr|0)>>20)-Nr|0,c=0,l>1071644672&&(i=jr(0,((c=r+(wt>>s+1)>>>0)&~(ht>>(s=((c&Mr)>>20)-Nr|0)))>>>0),c=(c&ht|wt)>>20-s>>>0,r<0&&(c=-c),n-=i),r=vt(r=hr(a=1-((a=(u=.6931471824645996*(i=sn(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=a-(i=a*a)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?en(a,c):jr(a,r)}(b,l,s),f*p}var _t=Math.round,Et=1e308;function Tt(r,n){var t,e;return Y(r)||Y(n)||Ir(n)?NaN:Ir(r)||0===r||n<-324||$r(r)>9007199254740992&&n<=0?r:n>308?0*r:n<-308?(t=At(10,-(n+308)),Ir(e=r*Et*t)?r:_t(e)/Et/t):Ir(e=r*(t=At(10,-n)))?r:_t(e)/t}function Ut(r){var n,t,e;if(t=4,n=!0,arguments.length>0){if(!Zn(r))throw new TypeError(dn("0fu3X",r));if(m(r,"digits")){if(!ct(r.digits))throw new TypeError(dn("0fu3b","digits",r.digits));t=r.digits}if(m(r,"decision")){if(!Pn(r.decision))throw new TypeError(dn("0fu30","decision",r.decision));n=r.decision}}switch(e="",e+=this.method,e+="\n\n",e+="Alternative hypothesis: ",e+="True difference in means is ",this.alternative){case"less":e+="less than ";break;case"greater":e+="greater than ";break;default:e+="not equal to "}return e+=this.nullValue,e+="\n\n",e+="    pValue: "+Tt(this.pValue,-t)+"\n",e+="    statistic: "+Tt(this.statistic,-t)+"\n",e+="    "+100*(1-this.alpha)+"% confidence interval: ["+Tt(this.ci[0],-t)+","+Tt(this.ci[1],-t)+"]",e+="\n\n",n&&(e+="Test Decision: ",this.rejected?e+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":e+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",e+="\n"),e}var Pt=Pr(0,1),St=bn(0,1);return function(r,n,t,e,i){var u,o,f,a,c,l,s,v,y,b,d,h,w,g;if(!H(r)&&!T(r))throw new TypeError(dn("0fu8j",r));if(!H(n)&&!T(n))throw new TypeError(dn("0fuAa",n));if(!x(t))throw new TypeError(dn("invalid argument. Third argument must be a positive number. Value: `%s`.",t));if(!x(e))throw new TypeError(dn("invalid argument. Fourth argument must be a positive number. Value: `%s`.",e));if(s={},i&&(d=function(r,n){if(!Zn(n))return new TypeError(dn("0fu2h",n));if(m(n,"alpha")){if(r.alpha=n.alpha,!p(r.alpha)||ot(r.alpha))return new TypeError(dn("0fu8h","alpha",r.alpha));if(!An(r.alpha))return new RangeError(dn("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",r.alpha))}return m(n,"alternative")&&(r.alternative=n.alternative,!$n(r.alternative))?new TypeError(dn("0fu2i","alternative",r.alternative)):m(n,"difference")&&(r.difference=n.difference,!p(r.difference)||ot(r.difference))?new TypeError(dn("0fu8h","difference",r.difference)):null}(s,i),d))throw d;switch(l=s.difference||0,o=void 0===s.alpha?.05:s.alpha,w=r.length,g=n.length,u=q(t*t/w+e*e/g),y=((f=On(w,r,1))-(a=On(g,n,1))-l)/u,b=s.alternative||"two-sided"){case"two-sided":v=2*St(-$r(y)),(c=[y-Pt(1-o/2),y+Pt(1-o/2)])[0]=l+c[0]*u,c[1]=l+c[1]*u;break;case"greater":v=1-St(y),(c=[y-Pt(1-o),S])[0]=l+c[0]*u;break;case"less":v=St(y),(c=[F,y+Pt(1-o)])[1]=l+c[1]*u;break;default:throw new Error(dn("0fu3t","alternative",["two-sided","less","greater"].join('", "'),b))}return W(h={},"rejected",v<=o),W(h,"alpha",o),W(h,"pValue",v),W(h,"statistic",y),W(h,"ci",c),W(h,"alternative",b),W(h,"method","Two-sample z-test"),W(h,"nullValue",l),W(h,"xmean",f),W(h,"ymean",a),W(h,"print",Ut),h}}));
//# sourceMappingURL=browser.js.map
