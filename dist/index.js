"use strict";var n=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var s=n(function(D,f){
var _=require('@stdlib/blas-ext-base-dfirst-index-equal/dist').ndarray;function O(r,e,a,t,u,q,R){var i,d,o,x,l;return r<=0?-1:(d=t+(r-1)*a,o=R+(r-1)*q,x=-a,l=-q,i=_(r,e,x,d,u,l,o),i<0?i:r-1-i)}f.exports=O
});var E=n(function(F,c){
var y=require('@stdlib/strided-base-stride2offset/dist'),b=s();function g(r,e,a,t,u){return b(r,e,a,y(r,a),t,u,y(r,u))}c.exports=g
});var j=n(function(G,I){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=E(),k=s();h(p,"ndarray",k);I.exports=p
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=j(),v,m=z(w(__dirname,"./native.js"));A(m)?v=B:v=m;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
