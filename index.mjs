// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";import{ndarray as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dfirst-index-equal@esm/index.mjs";function r(e,s,r,n,d,i,a){var m;return e<=0?-1:(m=t(e,s,-r,n+(e-1)*r,d,-i,a+(e-1)*i))<0?m:e-1-m}function n(e,t,n,d,i){return r(e,t,n,s(e,n),d,i,s(e,i))}e(n,"ndarray",r);export{n as default,r as ndarray};
//# sourceMappingURL=index.mjs.map
