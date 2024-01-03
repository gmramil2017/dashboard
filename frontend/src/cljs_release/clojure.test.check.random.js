var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./clojure.test.check.random.doubles.js");require("./clojure.test.check.random.longs.js");
'use strict';var Dw,Ew,Fw,Hw,Nw,Ow;$CLJS.Cw=function(a,b){b&=63;if(0==b)return a;var c=a.ra;return 32>b?$CLJS.ca(a.Aa>>>b|c<<32-b,c>>>b):32==b?$CLJS.ca(c,0):$CLJS.ca(c>>>b-32,0)};
Dw=function(a,b){if("-"==a.charAt(0))return $CLJS.fa(Dw(a.substring(1),b));var c=parseInt(a,b||10);if(9007199254740991>=c)return new $CLJS.aa(c%4294967296|0,c/4294967296|0);if(0==a.length)throw Error("number format error: empty string");if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);b=b||10;if(2>b||36<b)throw Error("radix out of range: "+b);c=$CLJS.ja(Math.pow(b,8));for(var d=$CLJS.ia,e=0;e<a.length;e+=8){var f=Math.min(8,a.length-e),g=parseInt(a.substring(e,e+
f),b);8>f?(f=$CLJS.ja(Math.pow(b,f)),d=d.multiply(f).add($CLJS.ja(g))):(d=d.multiply(c),d=d.add($CLJS.ja(g)))}return d};Ew=function(a){var b=a.Aa;a=a.ra;return $CLJS.xw[b&255]+$CLJS.xw[b>>8&255]+$CLJS.xw[b>>16&255]+$CLJS.xw[b>>24&255]+$CLJS.xw[a&255]+$CLJS.xw[a>>8&255]+$CLJS.xw[a>>16&255]+$CLJS.xw[a>>24&255]};
Fw=function(a,b){var c=a.ra>>>16,d=a.ra&65535,e=a.Aa>>>16;a=a.Aa&65535;var f=b.ra>>>16,g=b.ra&65535,l=b.Aa>>>16;b=b.Aa&65535;var n=[0,0,0,0];n[0]=a*b;n[1]=n[0]>>>16;n[0]&=65535;n[1]+=e*b;n[2]=n[1]>>>16;n[1]&=65535;n[1]+=a*l;n[2]+=n[1]>>>16;n[1]&=65535;n[2]+=d*b;n[3]=n[2]>>>16;n[2]&=65535;n[2]+=e*l;n[3]+=n[2]>>>16;n[2]&=65535;n[2]+=a*g;n[3]+=n[2]>>>16;n[2]&=65535;n[3]=n[3]+c*b+d*l+e*g+a*f;n[3]&=65535;return $CLJS.ca(n[1]<<16|n[0],n[3]<<16|n[2])};
$CLJS.Gw=function(a){if(null!=a&&null!=a.Hg)a=a.Hg(a);else{var b=$CLJS.Gw[$CLJS.Na(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=$CLJS.Gw._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw $CLJS.Ob("IRandom.split",a);}return a};Hw=function(a,b){return $CLJS.Cw(a,b).xor(a)};$CLJS.Iw=function(a){return Hw(Fw(Hw(Fw(Hw(a,30),pca),27),qca),31)};
$CLJS.Jw=function(a){a=Hw(Fw(Hw(Fw(Hw(a,33),rca),33),sca),33).or($CLJS.mca);var b=Hw(a,1);return 24>(Ew.g?Ew.g(b):Ew.call(null,b))?a.xor(tca):a};$CLJS.Kw=function(a,b){this.gamma=a;this.state=b};$CLJS.Mw=function(a){var b="number"===typeof a?$CLJS.ja(a):a instanceof $CLJS.aa?a:null;if(!$CLJS.m(b))throw $CLJS.Ej("Bad random seed!",new $CLJS.k(null,1,[$CLJS.Lw,a],null));return new $CLJS.Kw(uca,b)};Nw=new $CLJS.N(null,"returned","returned",-2020439163);$CLJS.Lw=new $CLJS.N(null,"seed","seed",68613327);
Ow=new $CLJS.N(null,"state","state",-1988618099);var pca=Dw("bf58476d1ce4e5b9",16),qca=Dw("94d049bb133111eb",16),rca=Dw("ff51afd7ed558ccd",16),sca=Dw("c4ceb9fe1a85ec53",16),tca=Dw("aaaaaaaaaaaaaaaa",16),uca;$CLJS.Kw.prototype.Je=$CLJS.La(51);$CLJS.Kw.prototype.Wf=$CLJS.La(52);$CLJS.Kw.prototype.Hg=function(){var a=this.gamma.add(this.state),b=this.gamma.add(a),c=$CLJS.Jw(b);return new $CLJS.R(null,2,5,$CLJS.S,[new $CLJS.Kw(this.gamma,b),new $CLJS.Kw(c,$CLJS.Iw(a))],null)};$CLJS.Kw.prototype.Xf=$CLJS.La(53);uca=Dw("9e3779b97f4a7c15",16);
$CLJS.vca=function(){var a=$CLJS.ij.g(new $CLJS.k(null,1,[Ow,$CLJS.Mw((new Date).valueOf())],null));return function(){return Nw.g($CLJS.jj.h(a,function(b){b=$CLJS.Uf(b);b=$CLJS.M.h(b,Ow);var c=$CLJS.Gw(b);b=$CLJS.K(c,0,null);c=$CLJS.K(c,1,null);return new $CLJS.k(null,2,[Ow,b,Nw,c],null)}))}}();