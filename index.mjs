// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import{factory as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-quantile@v0.1.1-esm/index.mjs";import{factory as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-cdf@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-mean@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@v0.1.1-esm/index.mjs";import{isPrimitive as v}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.1.0-esm/index.mjs";function x(e){var t,i,s;if(i=4,t=!0,arguments.length>0){if(!f(e))throw new TypeError(a("invalid argument. First argument must be an object. Value: `%s`.",e));if(u(e,"digits")){if(!b(e.digits))throw new TypeError(a("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",e.digits));i=e.digits}if(u(e,"decision")){if(!g(e.decision))throw new TypeError(a("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",e.decision));t=e.decision}}switch(s="",s+=this.method,s+="\n\n",s+="Alternative hypothesis: ",s+="True difference in means is ",this.alternative){case"less":s+="less than ";break;case"greater":s+="greater than ";break;default:s+="not equal to "}return s+=this.nullValue,s+="\n\n",s+="    pValue: "+w(this.pValue,-i)+"\n",s+="    statistic: "+w(this.statistic,-i)+"\n",s+="    "+100*(1-this.alpha)+"% confidence interval: ["+w(this.ci[0],-i)+","+w(this.ci[1],-i)+"]",s+="\n\n",t&&(s+="Test Decision: ",this.rejected?s+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":s+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",s+="\n"),s}var y=n(0,1),T=r(0,1);function E(n,r,b,g,w){var E,V,O,k,F,P,q,R,z,A,D,S,B,C;if(!t(n)&&!e(n))throw new TypeError(a("invalid argument. First argument must be a numeric array. Value: `%s`.",n));if(!t(r)&&!e(r))throw new TypeError(a("invalid argument. Second argument must be a numeric array. Value: `%s`.",r));if(!i(b))throw new TypeError(a("invalid argument. Third argument must be a positive number. Value: `%s`.",b));if(!i(g))throw new TypeError(a("invalid argument. Fourth argument must be a positive number. Value: `%s`.",g));if(q={},w&&(D=function(e,t){if(!f(t))return new TypeError(a("invalid argument. Options argument must be an object. Value: `%s`.",t));if(u(t,"alpha")){if(e.alpha=t.alpha,!v(e.alpha)||j(e.alpha))return new TypeError(a("invalid option. `%s` option must be a number. Option: `%s`.","alpha",e.alpha));if(!h(e.alpha))return new RangeError(a("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",e.alpha))}return u(t,"alternative")&&(e.alternative=t.alternative,!c(e.alternative))?new TypeError(a("invalid option. `%s` option must be a string. Option: `%s`.","alternative",e.alternative)):u(t,"difference")&&(e.difference=t.difference,!v(e.difference)||j(e.difference))?new TypeError(a("invalid option. `%s` option must be a number. Option: `%s`.","difference",e.difference)):null}(q,w),D))throw D;switch(P=q.difference||0,V=void 0===q.alpha?.05:q.alpha,B=n.length,C=r.length,E=o(b*b/B+g*g/C),z=((O=d(B,n,1))-(k=d(C,r,1))-P)/E,A=q.alternative||"two-sided"){case"two-sided":R=2*T(-l(z)),(F=[z-y(1-V/2),z+y(1-V/2)])[0]=P+F[0]*E,F[1]=P+F[1]*E;break;case"greater":R=1-T(z),(F=[z-y(1-V),p])[0]=P+F[0]*E;break;case"less":R=T(z),(F=[m,z+y(1-V)])[1]=P+F[1]*E;break;default:throw new Error(a('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"alternative",["two-sided","less","greater"].join('", "'),A))}return s(S={},"rejected",R<=V),s(S,"alpha",V),s(S,"pValue",R),s(S,"statistic",z),s(S,"ci",F),s(S,"alternative",A),s(S,"method","Two-sample z-test"),s(S,"nullValue",P),s(S,"xmean",O),s(S,"ymean",k),s(S,"print",x),S}export{E as default};
//# sourceMappingURL=index.mjs.map
