// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ztest2=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,f=i.__lookupGetter__,c=i.__lookupSetter__;var s=function(r,e,t){var n,s,v,l;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(f.call(r,e)||c.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),v="get"in t,l="set"in t,s&&(v||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,e,t.get),l&&u&&u.call(r,e,t.set),r},v=n,l=s,p=t()?v:l,g=p;var d=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=d,y=Math.floor,m=y;var b=function(r){return m(r)===r},w=b;var j=function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&w(r.length)&&r.length>=0&&r.length<=4294967295};var E=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!j(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}};var O=function(r){return"number"==typeof r};var P=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var N=function(){return P&&"symbol"==typeof Symbol.toStringTag},T=Object.prototype.toString,_=T;var A=function(r){return _.call(r)},V=Object.prototype.hasOwnProperty;var x=function(r,e){return null!=r&&V.call(r,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",k=x,F=S,U=T;var I=A,M=function(r){var e,t,n;if(null==r)return U.call(r);t=r[F],e=k(r,F);try{r[F]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[F]=t:delete r[F],n},R=N()?M:I,$=Number,G=$.prototype.toString;var L=R,C=$,B=function(r){try{return G.call(r),!0}catch(r){return!1}},H=N();var W=function(r){return"object"==typeof r&&(r instanceof C||(H?B(r):"[object Number]"===L(r)))},Z=O,z=W;var X=h,Y=function(r){return Z(r)||z(r)},q=W;X(Y,"isPrimitive",O),X(Y,"isObject",q);var D=Y,J=h,K=E,Q=D,rr=K(Q);J(rr,"primitives",K(Q.isPrimitive)),J(rr,"objects",K(Q.isObject));var er=rr,tr=Number.POSITIVE_INFINITY,nr=$.NEGATIVE_INFINITY,ir=tr,ar=nr,or=b;var ur=function(r){return r<ir&&r>ar&&or(r)},fr=D.isPrimitive,cr=ur;var sr=function(r){return fr(r)&&cr(r)},vr=D.isObject,lr=ur;var pr=function(r){return vr(r)&&lr(r.valueOf())},gr=sr,dr=pr;var hr=h,yr=function(r){return gr(r)||dr(r)},mr=pr;hr(yr,"isPrimitive",sr),hr(yr,"isObject",mr);var br=yr,wr=br.isPrimitive;var jr=function(r){return wr(r)&&r>=0},Er=br.isObject;var Or=function(r){return Er(r)&&r.valueOf()>=0},Pr=jr,Nr=Or;var Tr=h,_r=function(r){return Pr(r)||Nr(r)},Ar=Or;Tr(_r,"isPrimitive",jr),Tr(_r,"isObject",Ar);var Vr=_r,xr=Vr.isPrimitive;var Sr=function(r){return null!==r&&"object"==typeof r&&xr(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength},kr=D.isPrimitive;var Fr=function(r){return kr(r)&&r>0},Ur=D.isObject;var Ir=function(r){return Ur(r)&&r.valueOf()>0},Mr=Fr,Rr=Ir;var $r=h,Gr=function(r){return Mr(r)||Rr(r)},Lr=Ir;$r(Gr,"isPrimitive",Fr),$r(Gr,"isObject",Lr);var Cr=Gr,Br=p;var Hr=function(r,e,t){Br(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})},Wr=Hr;var Zr=function(r){return r!=r},zr=Math.sqrt,Xr=R,Yr="function"==typeof Uint32Array;var qr="function"==typeof Uint32Array?Uint32Array:null,Dr=function(r){return Yr&&r instanceof Uint32Array||"[object Uint32Array]"===Xr(r)},Jr=qr;var Kr=function(){var r,e;if("function"!=typeof Jr)return!1;try{e=new Jr(e=[1,3.14,-3.14,4294967296,4294967297]),r=Dr(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Qr="function"==typeof Uint32Array?Uint32Array:void 0,re=function(){throw new Error("not implemented")},ee=Kr()?Qr:re,te=R,ne="function"==typeof Float64Array;var ie="function"==typeof Float64Array?Float64Array:null,ae=function(r){return ne&&r instanceof Float64Array||"[object Float64Array]"===te(r)},oe=ie;var ue=function(){var r,e;if("function"!=typeof oe)return!1;try{e=new oe([1,3.14,-3.14,NaN]),r=ae(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var fe="function"==typeof Float64Array?Float64Array:void 0,ce=function(){throw new Error("not implemented")},se=ue()?fe:ce,ve=R,le="function"==typeof Uint8Array;var pe="function"==typeof Uint8Array?Uint8Array:null,ge=function(r){return le&&r instanceof Uint8Array||"[object Uint8Array]"===ve(r)},de=pe;var he=function(){var r,e;if("function"!=typeof de)return!1;try{e=new de(e=[1,3.14,-3.14,256,257]),r=ge(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var ye="function"==typeof Uint8Array?Uint8Array:void 0,me=function(){throw new Error("not implemented")},be=he()?ye:me,we=R,je="function"==typeof Uint16Array;var Ee="function"==typeof Uint16Array?Uint16Array:null,Oe=function(r){return je&&r instanceof Uint16Array||"[object Uint16Array]"===we(r)},Pe=Ee;var Ne=function(){var r,e;if("function"!=typeof Pe)return!1;try{e=new Pe(e=[1,3.14,-3.14,65536,65537]),r=Oe(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Te,_e="function"==typeof Uint16Array?Uint16Array:void 0,Ae=function(){throw new Error("not implemented")},Ve={uint16:Ne()?_e:Ae,uint8:be};(Te=new Ve.uint16(1))[0]=4660;var xe=52===new Ve.uint8(Te.buffer)[0],Se=ee,ke=!0===xe?1:0,Fe=new se(1),Ue=new Se(Fe.buffer);var Ie=function(r){return Fe[0]=r,Ue[ke]},Me=ee,Re=!0===xe?1:0,$e=new se(1),Ge=new Me($e.buffer);var Le=function(r,e){return $e[0]=r,Ge[Re]=e>>>0,$e[0]},Ce=Le;var Be=Ie,He=Ce,We=Zr,Ze=nr,ze=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Xe=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Ye=.6931471803691238,qe=1.9082149292705877e-10,De=1048575;var Je=function(r){var e,t,n,i,a,o,u,f,c,s,v;return 0===r?Ze:We(r)||r<0?NaN:(i=0,(t=Be(r))<1048576&&(i-=54,t=Be(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(u=(t&=De)+614244&1048576|0)>>20|0,o=(r=He(r,t|1072693248^u))-1,(De&2+t)<3?0===o?0===i?0:i*Ye+i*qe:(a=o*o*(.5-.3333333333333333*o),0===i?o-a:i*Ye-(a-i*qe-o)):(u=t-398458|0,f=440401-t|0,n=(s=(v=(c=o/(2+o))*c)*v)*ze(s),a=v*Xe(s)+n,(u|=f)>0?(e=.5*o*o,0===i?o-(e-c*(e+a)):i*Ye-(e-(c*(e+a)+i*qe)-o)):0===i?o-c*(o-a):i*Ye-(c*(o-a)-i*qe-o))))};var Ke=Zr,Qe=zr,rt=Je,et=tr,tt=nr,nt=function(r){var e,t;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(e=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(e=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),e/t)},it=function(r){var e,t;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(e=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(e=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),e/t)},at=function(r){var e,t;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(e=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(e=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),e/t)},ot=function(r){var e,t;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(e=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(e=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),e/t)},ut=function(r){var e,t;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(e=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(e=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),t=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),e/t)};var ft=function(r){var e,t,n,i;return Ke(r)?NaN:1===r?et:-1===r?tt:0===r?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?e*(.08913147449493408*(i=t*(t+10))+i*nt(t)):n>=.25?e*((i=Qe(-2*rt(n)))/(2.249481201171875+it(n-=.25))):(n=Qe(-rt(n)))<3?e*(.807220458984375*n+at(n-1.125)*n):n<6?e*(.9399557113647461*n+ot(n-3)*n):e*(.9836282730102539*n+ut(n-6)*n))},ct=ft,st=Zr,vt=zr;var lt=function(r,e,t){return st(e)||st(t)||st(r)||t<0||r<0||r>1?NaN:0===t?e:e+t*vt(2)*ct(2*r-1)};var pt=function(r){return function(){return r}},gt=Zr;var dt=pt,ht=Zr;var yt=function(r,e){return gt(r)||r<0||r>1?NaN:e};h(yt,"factory",(function(r){return ht(r)?dt(NaN):function(e){if(ht(e)||e<0||e>1)return NaN;return r}}));var mt=pt,bt=yt.factory,wt=ft,jt=Zr,Et=zr;var Ot=lt;h(Ot,"factory",(function(r,e){var t,n;return jt(r)||jt(e)||e<0?mt(NaN):(0===e&&bt(r),t=r,n=e*Et(2),function(r){if(jt(r)||r<0||r>1)return NaN;return t+n*wt(2*r-1)})}));var Pt=Ot,Nt=Math.ceil,Tt=y,_t=Nt;var At=function(r){return r<0?_t(r):Tt(r)},Vt=tr,xt=nr;var St,kt,Ft=function(r){return r===Vt||r===xt};!0===xe?(St=1,kt=0):(St=0,kt=1);var Ut=ee,It={HIGH:St,LOW:kt},Mt=new se(1),Rt=new Ut(Mt.buffer),$t=It.HIGH,Gt=It.LOW;var Lt=function(r,e){return Mt[0]=e,r[0]=Rt[$t],r[1]=Rt[Gt],r};var Ct,Bt,Ht=function(r,e){return 1===arguments.length?Lt([0,0],r):Lt(r,e)},Wt=Ht;!0===xe?(Ct=1,Bt=0):(Ct=0,Bt=1);var Zt=ee,zt={HIGH:Ct,LOW:Bt},Xt=new se(1),Yt=new Zt(Xt.buffer),qt=zt.HIGH,Dt=zt.LOW;var Jt=function(r,e){return Yt[qt]=r,Yt[Dt]=e,Xt[0]},Kt=Wt,Qt=Ie,rn=Jt,en=[0,0];var tn=function(r,e){var t,n;return Kt(en,r),t=en[0],t&=2147483647,n=Qt(e),rn(t|=n&=2147483648,en[1])};var nn=function(r){return Math.abs(r)},an=Ft,on=Zr,un=nn;var fn=function(r,e){return on(e)||an(e)?(r[0]=e,r[1]=0,r):0!==e&&un(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var cn=function(r,e){return 1===arguments.length?fn([0,0],r):fn(r,e)},sn=Ie;var vn=function(r){var e=sn(r);return(e=(2146435072&e)>>>20)-1023|0},ln=tr,pn=nr,gn=Zr,dn=Ft,hn=tn,yn=cn,mn=vn,bn=Wt,wn=Jt,jn=[0,0],En=[0,0];var On=function(r,e){var t,n;return 0===e||0===r||gn(r)||dn(r)?r:(yn(jn,r),e+=jn[1],(e+=mn(r=jn[0]))<-1074?hn(0,r):e>1023?r<0?pn:ln:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,bn(En,r),t=En[0],t&=2148532223,n*wn(t|=e+1023<<20,En[1])))},Pn=On;var Nn=Pn,Tn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var _n=Zr,An=At,Vn=nr,xn=tr,Sn=function(r,e,t){var n,i,a;return a=(n=r-e)-(i=n*n)*Tn(i),Nn(1-(e-n*a/(2-a)-r),t)},kn=1.4426950408889634,Fn=1/(1<<28);var Un=function(r){var e;return _n(r)||r===xn?r:r===Vn?0:r>709.782712893384?xn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Fn?1+r:(e=An(r<0?kn*r-.5:kn*r+.5),Sn(r-.6931471803691238*e,1.9082149292705877e-10*e,e))},In=ee,Mn=!0===xe?0:1,Rn=new se(1),$n=new In(Rn.buffer);var Gn=function(r,e){return Rn[0]=r,$n[Mn]=e>>>0,Rn[0]},Ln=Gn;var Cn=Zr,Bn=Un,Hn=Ln,Wn=tr,Zn=nr,zn=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},Xn=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},Yn=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},qn=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},Dn=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},Jn=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},Kn=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},Qn=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},ri=.8450629115104675;var ei=function(r){var e,t,n,i,a,o,u,f;if(Cn(r))return NaN;if(r===Wn)return 0;if(r===Zn)return 2;if(0===r)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(o=(i=.12837916709551256+(n=r*r)*zn(n))/(a=1+n*Xn(n)),r<.25?1-(r+r*o):(i=r*o,.5-(i+=r-.5)));if(t<1.25)return u=(a=t-1)*Yn(a)-.0023621185607526594,f=1+a*qn(a),e?1+ri+u/f:1-ri-u/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)i=a*Dn(a)-.009864944034847148,a=1+a*Jn(a);else{if(r<-6)return 2;i=a*Kn(a)-.0098649429247001,a=1+a*Qn(a)}return n=Hn(t,0),i=Bn(-n*n-.5625)*Bn((n-t)*(n+t)+i/a),e?2-i/t:i/t}return e?2:0},ti=ei,ni=zr,ii=Zr;var ai=function(r,e,t){var n;return ii(r)||ii(e)||ii(t)||t<0?NaN:0===t?r<e?0:1:(n=t*ni(2),.5*ti(-(r-e)/n))},oi=Zr;var ui=pt,fi=Zr;var ci=function(r,e){return oi(r)||oi(e)?NaN:r<e?0:1};h(ci,"factory",(function(r){return fi(r)?ui(NaN):function(e){if(fi(e))return NaN;return e<r?0:1}}));var si=pt,vi=ci.factory,li=Zr,pi=zr,gi=ei;var di=ai;h(di,"factory",(function(r,e){var t;return li(r)||li(e)||e<0?si(NaN):0===e?vi(r):(t=e*pi(2),function(e){if(li(e))return NaN;return.5*gi(-(e-r)/t)})}));var hi=di;var yi=function(r){return"string"==typeof r},mi=String.prototype.valueOf;var bi=R,wi=function(r){try{return mi.call(r),!0}catch(r){return!1}},ji=N();var Ei=function(r){return"object"==typeof r&&(r instanceof String||(ji?wi(r):"[object String]"===bi(r)))},Oi=yi,Pi=Ei;var Ni=h,Ti=function(r){return Oi(r)||Pi(r)},_i=Ei;Ni(Ti,"isPrimitive",yi),Ni(Ti,"isObject",_i);var Ai=Ti,Vi=b;var xi=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Vi(r.length)&&r.length>=0&&r.length<=9007199254740991},Si=D.isPrimitive,ki=Zr;var Fi=function(r){return Si(r)&&ki(r)},Ui=D.isObject,Ii=Zr;var Mi=function(r){return Ui(r)&&Ii(r.valueOf())},Ri=Fi,$i=Mi;var Gi=h,Li=function(r){return Ri(r)||$i(r)},Ci=Mi;Gi(Li,"isPrimitive",Fi),Gi(Li,"isObject",Ci);var Bi=Li,Hi=xi,Wi=br.isPrimitive,Zi=Ai.isPrimitive,zi=Bi.isPrimitive;var Xi=function(r,e,t){var n,i,a;if(!Hi(r)&&!Zi(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Wi(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Zi(r)){if(!Zi(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,zi(e)){for(a=i;a<n;a++)if(zi(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Yi=Xi,qi=Ai.isPrimitive;var Di=function(r){if(!qi(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ji=Ai.isPrimitive;var Ki=function(r){if(!Ji(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Qi=Di,ra=Ki,ea=Ai.isPrimitive;var ta=function(r){return ea(r)&&r===ra(r)&&r!==Qi(r)},na=tr,ia=nr;var aa=function(r){return r==r&&r>ia&&r<na},oa=Vr.isPrimitive,ua=Ai.isPrimitive;var fa=function(r,e){var t,n;if(!ua(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!oa(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ca=br.isPrimitive,sa=Ai.isPrimitive;var va=function(r,e,t){var n,i;if(!sa(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!sa(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ca(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},la=fa,pa=va;var ga=function(r,e,t){var n=!1,i=e-r.length;return i<0||(pa(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+la("0",i):la("0",i)+r,n&&(r="-"+r)),r},da=ta,ha=Ki,ya=Di,ma=aa,ba=D.isPrimitive,wa=ga;var ja=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!ma(n)){if(!ba(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=wa(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=wa(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=da(r.specifier)?ha(t):ya(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ea=Ai.isPrimitive,Oa=/[-\/\\^$*+?.()|[\]{}]/g;var Pa=function(r){var e,t;if(!Ea(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Oa,"\\$&"):(e=(e=r.substring(1,t)).replace(Oa,"\\$&"),r=r[0]+e+r.substring(t))},Na=/./;var Ta=function(r){return"boolean"==typeof r},_a=Boolean.prototype.toString;var Aa=R,Va=function(r){try{return _a.call(r),!0}catch(r){return!1}},xa=N();var Sa=function(r){return"object"==typeof r&&(r instanceof Boolean||(xa?Va(r):"[object Boolean]"===Aa(r)))},ka=Ta,Fa=Sa;var Ua=h,Ia=function(r){return ka(r)||Fa(r)},Ma=Sa;Ua(Ia,"isPrimitive",Ta),Ua(Ia,"isObject",Ma);var Ra=Ia;var $a=function(){return new Function("return this;")()},Ga="object"==typeof self?self:null,La="object"==typeof window?window:null,Ca="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ba="object"==typeof Ca?Ca:null;module.exports=Ba;var Ha=Ra.isPrimitive,Wa=$a,Za=Ga,za=La,Xa=r(Object.freeze({__proto__:null}));var Ya=function(r){if(arguments.length){if(!Ha(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Wa()}if(Za)return Za;if(za)return za;if(Xa)return Xa;throw new Error("unexpected error. Unable to resolve global object.")},qa=Ya(),Da=qa.document&&qa.document.childNodes,Ja=Int8Array,Ka=Na,Qa=Da,ro=Ja;var eo=function(){return"function"==typeof Ka||"object"==typeof ro||"function"==typeof Qa};var to=function(){return/^\s*function\s*([^(]*)/i},no=to;h(no,"REGEXP",to());var io=no,ao=R;var oo=Array.isArray?Array.isArray:function(r){return"[object Array]"===ao(r)},uo=oo;var fo=function(r){return null!==r&&"object"==typeof r};h(fo,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!uo(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fo));var co=fo;var so=R,vo=io.REGEXP,lo=function(r){return co(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var po=function(r){var e,t,n;if(("Object"===(t=so(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=vo.exec(n.toString()))return e[1]}return lo(r)?"Buffer":t},go=po;var ho=po;var yo=function(r){var e;return null===r?"null":"object"===(e=typeof r)?go(r).toLowerCase():e},mo=function(r){return ho(r).toLowerCase()},bo=eo()?mo:yo;var wo=function(r){return"function"===bo(r)},jo=RegExp.prototype.exec;var Eo=R,Oo=function(r){try{return jo.call(r),!0}catch(r){return!1}},Po=N();var No=Pa,To=wo,_o=Ai.isPrimitive,Ao=function(r){return"object"==typeof r&&(r instanceof RegExp||(Po?Oo(r):"[object RegExp]"===Eo(r)))};var Vo=ta,xo=Ki,So=Di,ko=function(r,e,t){if(!_o(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(_o(e))e=No(e),e=new RegExp(e,"g");else if(!Ao(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!_o(t)&&!To(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Fo=aa,Uo=D.isPrimitive,Io=nn,Mo=/e\+(\d)$/,Ro=/e-(\d)$/,$o=/^(\d+)$/,Go=/^(\d+)e/,Lo=/\.0$/,Co=/\.0*e/,Bo=/(\..*[^0])0*e/;var Ho=function(r){var e,t,n=parseFloat(r.arg);if(!Fo(n)){if(!Uo(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Io(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=ko(t,Bo,"$1e"),t=ko(t,Co,"e"),t=ko(t,Lo,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ko(t,Mo,"e+0$1"),t=ko(t,Ro,"e-0$1"),r.alternate&&(t=ko(t,$o,"$1."),t=ko(t,Go,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Vo(r.specifier)?xo(t):So(t)},Wo=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Zo=fa;var zo=Ai.isPrimitive,Xo=Yi,Yo=Zr,qo=ja,Do=Ho,Jo=function(r){var e,t,n,i,a;for(e=0,n=[],a=Wo.exec(r);a;)(t=r.slice(e,Wo.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Wo.lastIndex,a=Wo.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Ko=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Zo(" ",n):Zo(" ",n)+r},Qo=ga,ru=String.fromCharCode;var eu=function(r){var e,t,n,i,a,o,u,f,c;if(!zo(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Jo(r),o="",u=1,f=0;f<e.length;f++)if(n=e[f],zo(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Xo(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Yo(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Yo(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=qo(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Yo(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Yo(a)?String(n.arg):ru(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Do(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Qo(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ko(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},tu=eu,nu=y;var iu=function r(e,t,n,i){var a,o,u,f,c,s,v,l,p,g,d,h,y;if(e<=0)return 0;if(1===e||0===n)return t[i];if(a=i,e<8){for(d=0,y=0;y<e;y++)d+=t[a],a+=n;return d}if(e<=128){for(o=t[a],u=t[a+n],f=t[a+2*n],c=t[a+3*n],s=t[a+4*n],v=t[a+5*n],l=t[a+6*n],p=t[a+7*n],a+=8*n,g=e%8,y=8;y<e-g;y+=8)o+=t[a],u+=t[a+n],f+=t[a+2*n],c+=t[a+3*n],s+=t[a+4*n],v+=t[a+5*n],l+=t[a+6*n],p+=t[a+7*n],a+=8*n;for(d=o+u+(f+c)+(s+v+(l+p));y<e;y++)d+=t[a],a+=n;return d}return h=nu(e/2),r(h-=h%8,t,n,a)+r(e-h,t,n,a+h*n)},au=iu;var ou=function(r,e,t){var n,i,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(i=0,a=0;a<r;a++)i+=e[n],n+=t;return i}return au(r,e,t,n)};h(ou,"ndarray",iu);var uu=ou,fu=y;var cu=function r(e,t,n,i,a){var o,u,f,c,s,v,l,p,g,d,h,y,m;if(e<=0)return 0;if(1===e||0===i)return t+n[a];if(o=a,e<8){for(h=0,m=0;m<e;m++)h+=t+n[o],o+=i;return h}if(e<=128){for(u=t+n[o],f=t+n[o+i],c=t+n[o+2*i],s=t+n[o+3*i],v=t+n[o+4*i],l=t+n[o+5*i],p=t+n[o+6*i],g=t+n[o+7*i],o+=8*i,d=e%8,m=8;m<e-d;m+=8)u+=t+n[o],f+=t+n[o+i],c+=t+n[o+2*i],s+=t+n[o+3*i],v+=t+n[o+4*i],l+=t+n[o+5*i],p+=t+n[o+6*i],g+=t+n[o+7*i],o+=8*i;for(h=u+f+(c+s)+(v+l+(p+g));m<e;m++)h+=t+n[o],o+=i;return h}return y=fu(e/2),r(y-=y%8,t,n,i,o)+r(e-y,t,n,i,o+y*i)},su=cu;var vu=function(r,e,t,n){var i,a,o;if(r<=0)return 0;if(1===r||0===n)return e+t[0];if(i=n<0?(1-r)*n:0,r<8){for(a=0,o=0;o<r;o++)a+=e+t[i],i+=n;return a}return su(r,e,t,n,i)};h(vu,"ndarray",cu);var lu=uu,pu=vu;var gu=uu.ndarray,du=vu.ndarray;var hu=function(r,e,t){var n;return r<=0?NaN:1===r||0===t?e[0]:(n=lu(r,e,t)/r)+pu(r,-n,e,t)/r};h(hu,"ndarray",(function(r,e,t,n){var i;return r<=0?NaN:1===r||0===t?e[n]:(i=gu(r,e,t,n)/r)+du(r,-i,e,t,n)/r}));var yu=hu;var mu=hu.ndarray;var bu=function(r,e,t){return yu(r,e,t)};h(bu,"ndarray",(function(r,e,t,n){return mu(r,e,t,n)}));var wu=bu,ju=D.isPrimitive;var Eu=function(r){return ju(r)&&r>=0&&r<=1},Ou=D.isObject;var Pu=function(r){return Ou(r)&&r.valueOf()>=0&&r.valueOf()<=1},Nu=Eu,Tu=Pu;var _u=h,Au=function(r){return Nu(r)||Tu(r)},Vu=Pu;_u(Au,"isPrimitive",Eu),_u(Au,"isObject",Vu);var xu=Au,Su=oo;var ku=function(r){return"object"==typeof r&&null!==r&&!Su(r)},Fu=Object.getPrototypeOf;var Uu=function(r){return r.__proto__},Iu=R,Mu=Uu;var Ru=function(r){var e=Mu(r);return e||null===e?e:"[object Function]"===Iu(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},$u=Fu,Gu=Ru,Lu=wo(Object.getPrototypeOf)?$u:Gu;var Cu=ku,Bu=wo,Hu=function(r){return null==r?null:(r=Object(r),Lu(r))},Wu=x,Zu=R,zu=Object.prototype;var Xu=function(r){var e;return!!Cu(r)&&(!(e=Hu(r))||!Wu(r,"constructor")&&Wu(e,"constructor")&&Bu(e.constructor)&&"[object Function]"===Zu(e.constructor)&&Wu(e,"isPrototypeOf")&&Bu(e.isPrototypeOf)&&(e===zu||function(r){var e;for(e in r)if(!Wu(r,e))return!1;return!0}(r)))},Yu=Xu,qu=xu.isPrimitive,Du=D.isPrimitive,Ju=Yu,Ku=Ai.isPrimitive,Qu=Bi,rf=x,ef=tu;var tf=function(r,e){if(!Ju(e))return new TypeError(ef("invalid argument. Options argument must be an object. Value: `%s`.",e));if(rf(e,"alpha")){if(r.alpha=e.alpha,!Du(r.alpha)||Qu(r.alpha))return new TypeError(ef("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha));if(!qu(r.alpha))return new RangeError(ef("invalid option. `%s` option must be a number in the range 0 to 1. Option: `%f`.","alpha",r.alpha))}return rf(e,"alternative")&&(r.alternative=e.alternative,!Ku(r.alternative))?new TypeError(ef("invalid option. `%s` option must be a string. Option: `%s`.","alternative",r.alternative)):rf(e,"difference")&&(r.difference=e.difference,!Du(r.difference)||Qu(r.difference))?new TypeError(ef("invalid option. `%s` option must be a number. Option: `%s`.","difference",r.difference)):null},nf=br.isPrimitive;var af=function(r){return nf(r)&&r>0},of=br.isObject;var uf=function(r){return of(r)&&r.valueOf()>0},ff=af,cf=uf;var sf=h,vf=function(r){return ff(r)||cf(r)},lf=uf;sf(vf,"isPrimitive",af),sf(vf,"isObject",lf);var pf=vf,gf=b;var df=function(r){return gf(r/2)};var hf=function(r){return df(r>0?r-1:r+1)};var yf=function(r){return 0|r},mf=hf,bf=tn,wf=nr,jf=tr;var Ef=Ie;var Of=nn,Pf=tr;var Nf=Ie,Tf=Ln,_f=Ce,Af=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Vf=1048576,xf=[1,1.5],Sf=[0,.5849624872207642],kf=[0,1.350039202129749e-8];var Ff=Ln,Uf=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var If=Ie,Mf=Ce,Rf=Ln,$f=yf,Gf=Pn,Lf=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Cf=2147483647,Bf=1048575,Hf=1048576;var Wf=Zr,Zf=hf,zf=Ft,Xf=b,Yf=zr,qf=nn,Df=Wt,Jf=Ln,Kf=yf,Qf=nr,rc=tr,ec=function(r,e){return e===wf?jf:e===jf?0:e>0?mf(e)?r:0:mf(e)?bf(jf,r):jf},tc=function(r,e){return(2147483647&Ef(r))<=1072693247?e<0?1/0:0:e>0?1/0:0},nc=function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Of(r)<1==(e===Pf)?0:Pf},ic=function(r,e,t){var n,i,a,o,u,f,c,s,v,l,p,g,d,h,y,m,b,w,j,E;return w=0,t<Vf&&(w-=53,t=Nf(e*=9007199254740992)),w+=(t>>20)-1023|0,t=1072693248|(j=1048575&t|0),j<=235662?E=0:j<767610?E=1:(E=0,w+=1,t-=Vf),n=524288+(t>>1|536870912),u=(b=1/((e=_f(e,t))+(c=xf[E])))*((m=e-c)-(o=Tf(i=m*b,0))*(f=_f(0,n+=E<<18))-o*(e-(f-c))),y=(a=i*i)*a*Af(a),f=Tf(f=3+(a=o*o)+(y+=u*(o+i)),0),d=(p=-7.028461650952758e-9*(v=Tf(v=(m=o*f)+(b=u*f+(y-(f-3-a))*i),0))+.9617966939259756*(b-(v-m))+kf[E])-((g=Tf(g=(l=.9617967009544373*v)+p+(s=Sf[E])+(h=w),0))-h-s-l),r[0]=g,r[1]=d,r},ac=function(r,e){var t,n,i,a,o;return t=(o=1.9259629911266175e-8*(i=e-1)-1.4426950408889634*(i*i*Uf(i)))-((n=Ff(n=(a=1.4426950216293335*i)+o,0))-a),r[0]=n,r[1]=t,r},oc=function(r,e,t){var n,i,a,o,u,f,c,s,v;return v=((s=r&Cf|0)>>20)-1023|0,c=0,s>1071644672&&(i=Mf(0,((c=r+(Hf>>v+1)>>>0)&~(Bf>>(v=((c&Cf)>>20)-1023|0)))>>>0),c=(c&Bf|Hf)>>20-v>>>0,r<0&&(c=-c),e-=i),u=(o=.6931471805599453*(t-((i=Rf(i=t+e,0))-e))+-1.904654299957768e-9*i)-((f=(a=.6931471824645996*i)+o)-a),n=f-(i=f*f)*Lf(i),r=If(f=1-(f*n/(n-2)-(u+f*u)-f)),r=$f(r),f=(r+=c<<20>>>0)>>20<=0?Gf(f,c):Mf(f,r)},uc=2147483647,fc=1083179008,cc=1e300,sc=1e-300,vc=[0,0],lc=[0,0];var pc=function r(e,t){var n,i,a,o,u,f,c,s,v,l,p,g,d,h;if(Wf(e)||Wf(t))return NaN;if(Df(vc,t),u=vc[0],0===vc[1]){if(0===t)return 1;if(1===t)return e;if(-1===t)return 1/e;if(.5===t)return Yf(e);if(-.5===t)return 1/Yf(e);if(2===t)return e*e;if(3===t)return e*e*e;if(4===t)return(e*=e)*e;if(zf(t))return nc(e,t)}if(Df(vc,e),o=vc[0],0===vc[1]){if(0===o)return ec(e,t);if(1===e)return 1;if(-1===e&&Zf(t))return-1;if(zf(e))return e===Qf?r(-0,-t):t<0?0:rc}if(e<0&&!1===Xf(t))return(e-e)/(e-e);if(a=qf(e),n=o&uc|0,i=u&uc|0,c=u>>>31|0,f=(f=o>>>31|0)&&Zf(t)?-1:1,i>1105199104){if(i>1139802112)return tc(e,t);if(n<1072693247)return 1===c?f*cc*cc:f*sc*sc;if(n>1072693248)return 0===c?f*cc*cc:f*sc*sc;p=ac(lc,a)}else p=ic(lc,a,n);if(l=(t-(s=Jf(t,0)))*p[0]+t*p[1],v=s*p[0],Df(vc,g=l+v),d=Kf(vc[0]),h=Kf(vc[1]),d>=fc){if(0!=(d-fc|h))return f*cc*cc;if(l+8008566259537294e-32>g-v)return f*cc*cc}else if((d&uc)>=1083231232){if(0!=(d-3230714880|h))return f*sc*sc;if(l<=g-v)return f*sc*sc}return f*(g=oc(d,v,l))},gc=pc,dc=Math.round,hc=Zr,yc=Ft,mc=gc,bc=nn,wc=dc,jc=1e308;var Ec=pf,Oc=Yu,Pc=Ra.isPrimitive,Nc=x,Tc=function(r,e){var t,n;return hc(r)||hc(e)||yc(e)?NaN:yc(r)||0===r||e<-324||bc(r)>9007199254740992&&e<=0?r:e>308?0*r:e<-308?(t=mc(10,-(e+308)),yc(n=r*jc*t)?r:wc(n)/jc/t):(t=mc(10,-e),yc(n=r*t)?r:wc(n)/t)},_c=tu;var Ac=function(r){var e,t,n;if(t=4,e=!0,arguments.length>0){if(!Oc(r))throw new TypeError(_c("invalid argument. First argument must be an options object. Value: `%s`.",r));if(Nc(r,"digits")){if(!Ec(r.digits))throw new TypeError(_c("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(Nc(r,"decision")){if(!Pc(r.decision))throw new TypeError(_c("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}switch(n="",n+=this.method,n+="\n\n",n+="Alternative hypothesis: ",n+="True difference in means is ",this.alternative){case"less":n+="less than ";break;case"greater":n+="greater than ";break;default:n+="not equal to "}return n+=this.nullValue,n+="\n\n",n+="    pValue: "+Tc(this.pValue,-t)+"\n",n+="    statistic: "+Tc(this.statistic,-t)+"\n",n+="    "+100*(1-this.alpha)+"% confidence interval: ["+Tc(this.ci[0],-t)+","+Tc(this.ci[1],-t)+"]",n+="\n\n",e&&(n+="Test Decision: ",this.rejected?n+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":n+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",n+="\n"),n},Vc=er.primitives,xc=Sr,Sc=Cr.isPrimitive,kc=Wr,Fc=hi.factory,Uc=tu,Ic=zr,Mc=nn,Rc=wu,$c=nr,Gc=tr,Lc=tf,Cc=Ac,Bc=(0,Pt.factory)(0,1),Hc=Fc(0,1);return function(r,e,t,n,i){var a,o,u,f,c,s,v,l,p,g,d,h,y,m;if(!xc(r)&&!Vc(r))throw new TypeError(Uc("invalid argument. First argument `x` must be a numeric array. Value: `%s`.",r));if(!xc(e)&&!Vc(e))throw new TypeError(Uc("invalid argument. Second argument `y` must be a numeric array. Value: `%s`.",e));if(!Sc(t))throw new TypeError(Uc("invalid argument. Third argument `sigmax` must be a positive number. Value: `%s`.",t));if(!Sc(n))throw new TypeError(Uc("invalid argument. Third argument `sigmay` must be a positive number. Value: `%s`.",n));if(v={},i&&(d=Lc(v,i)))throw d;switch(s=v.difference||0,o=void 0===v.alpha?.05:v.alpha,y=r.length,m=e.length,a=Ic(t*t/y+n*n/m),p=((u=Rc(y,r,1))-(f=Rc(m,e,1))-s)/a,g=v.alternative||"two-sided"){case"two-sided":l=2*Hc(-Mc(p)),(c=[p-Bc(1-o/2),p+Bc(1-o/2)])[0]=s+c[0]*a,c[1]=s+c[1]*a;break;case"greater":l=1-Hc(p),(c=[p-Bc(1-o),Gc])[0]=s+c[0]*a;break;case"less":l=Hc(p),(c=[$c,p+Bc(1-o)])[1]=s+c[1]*a;break;default:throw new Error(Uc("Invalid option. `alternative` must be either `two-sided`, `less`, or `greater`. Value: `%s`.",g))}return kc(h={},"rejected",l<=o),kc(h,"alpha",o),kc(h,"pValue",l),kc(h,"statistic",p),kc(h,"ci",c),kc(h,"alternative",g),kc(h,"method","Two-sample z-test"),kc(h,"nullValue",s),kc(h,"xmean",u),kc(h,"ymean",f),kc(h,"print",Cc),h}}));
//# sourceMappingURL=bundle.js.map
