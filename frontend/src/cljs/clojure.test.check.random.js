var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.test.check.random.doubles.js");
require("./clojure.test.check.random.longs.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var weavejester=$CLJS.weavejester || ($CLJS.weavejester = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var module$shadow_js_shim_module$ttag=$CLJS.module$shadow_js_shim_module$ttag || ($CLJS.module$shadow_js_shim_module$ttag = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var module$shadow_js_shim_module$moment_timezone=$CLJS.module$shadow_js_shim_module$moment_timezone || ($CLJS.module$shadow_js_shim_module$moment_timezone = {});
var module$shadow_js_shim_module$moment=$CLJS.module$shadow_js_shim_module$moment || ($CLJS.module$shadow_js_shim_module$moment = {});
var module$shadow_js_shim_module$crc_32=$CLJS.module$shadow_js_shim_module$crc_32 || ($CLJS.module$shadow_js_shim_module$crc_32 = {});
var devtools=$CLJS.devtools || ($CLJS.devtools = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var schema=$CLJS.schema || ($CLJS.schema = {});
var inflections=$CLJS.inflections || ($CLJS.inflections = {});
var net=$CLJS.net || ($CLJS.net = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
var flatland=$CLJS.flatland || ($CLJS.flatland = {});
var lambdaisland=$CLJS.lambdaisland || ($CLJS.lambdaisland = {});
var medley=$CLJS.medley || ($CLJS.medley = {});
var no=$CLJS.no || ($CLJS.no = {});
var metabase=$CLJS.metabase || ($CLJS.metabase = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("clojure.test.check.random.js");

goog.provide('clojure.test.check.random');

/**
 * @interface
 */
clojure.test.check.random.IRandom = function(){};

var clojure$test$check$random$IRandom$rand_long$dyn_44587 = (function (rng){
var x__5393__auto__ = (((rng == null))?null:rng);
var m__5394__auto__ = (clojure.test.check.random.rand_long[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__5394__auto__.call(null,rng));
} else {
var m__5392__auto__ = (clojure.test.check.random.rand_long["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__5392__auto__.call(null,rng));
} else {
throw cljs.core.missing_protocol("IRandom.rand-long",rng);
}
}
});
/**
 * Returns a random goog.math.Long based on the given immutable RNG.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.rand_long = (function clojure$test$check$random$rand_long(rng){
if((((!((rng == null)))) && ((!((rng.clojure$test$check$random$IRandom$rand_long$arity$1 == null)))))){
return rng.clojure$test$check$random$IRandom$rand_long$arity$1(rng);
} else {
return clojure$test$check$random$IRandom$rand_long$dyn_44587(rng);
}
});

var clojure$test$check$random$IRandom$rand_double$dyn_44588 = (function (rng){
var x__5393__auto__ = (((rng == null))?null:rng);
var m__5394__auto__ = (clojure.test.check.random.rand_double[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__5394__auto__.call(null,rng));
} else {
var m__5392__auto__ = (clojure.test.check.random.rand_double["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__5392__auto__.call(null,rng));
} else {
throw cljs.core.missing_protocol("IRandom.rand-double",rng);
}
}
});
/**
 * Returns a random double between 0.0 (inclusive) and 1.0 (exclusive)
 *   based on the given immutable RNG.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.rand_double = (function clojure$test$check$random$rand_double(rng){
if((((!((rng == null)))) && ((!((rng.clojure$test$check$random$IRandom$rand_double$arity$1 == null)))))){
return rng.clojure$test$check$random$IRandom$rand_double$arity$1(rng);
} else {
return clojure$test$check$random$IRandom$rand_double$dyn_44588(rng);
}
});

var clojure$test$check$random$IRandom$split$dyn_44589 = (function (rng){
var x__5393__auto__ = (((rng == null))?null:rng);
var m__5394__auto__ = (clojure.test.check.random.split[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__5394__auto__.call(null,rng));
} else {
var m__5392__auto__ = (clojure.test.check.random.split["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__5392__auto__.call(null,rng));
} else {
throw cljs.core.missing_protocol("IRandom.split",rng);
}
}
});
/**
 * Returns two new RNGs [rng1 rng2], which should generate
 *   sufficiently independent random data.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.split = (function clojure$test$check$random$split(rng){
if((((!((rng == null)))) && ((!((rng.clojure$test$check$random$IRandom$split$arity$1 == null)))))){
return rng.clojure$test$check$random$IRandom$split$arity$1(rng);
} else {
return clojure$test$check$random$IRandom$split$dyn_44589(rng);
}
});

var clojure$test$check$random$IRandom$split_n$dyn_44590 = (function (rng,n){
var x__5393__auto__ = (((rng == null))?null:rng);
var m__5394__auto__ = (clojure.test.check.random.split_n[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(rng,n) : m__5394__auto__.call(null,rng,n));
} else {
var m__5392__auto__ = (clojure.test.check.random.split_n["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(rng,n) : m__5392__auto__.call(null,rng,n));
} else {
throw cljs.core.missing_protocol("IRandom.split-n",rng);
}
}
});
/**
 * Returns a collection of `n` RNGs, which should generate
 *   sufficiently independent random data.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.split_n = (function clojure$test$check$random$split_n(rng,n){
if((((!((rng == null)))) && ((!((rng.clojure$test$check$random$IRandom$split_n$arity$2 == null)))))){
return rng.clojure$test$check$random$IRandom$split_n$arity$2(rng,n);
} else {
return clojure$test$check$random$IRandom$split_n$dyn_44590(rng,n);
}
});

/**
 * Helper for defining constants.
 */
clojure.test.check.random.hex_long = (function clojure$test$check$random$hex_long(s){
return clojure.test.check.random.longs.from_string(s,(16));
});
/**
 * Performs (-> x (unsigned-bit-shift-right n) (bit-xor x)).
 */
clojure.test.check.random.bxoubsr = (function clojure$test$check$random$bxoubsr(x,n){
return clojure.test.check.random.longs.bit_xor(clojure.test.check.random.longs.unsigned_bit_shift_right(x,n),x);
});
clojure.test.check.random.mix_64_const_1 = clojure.test.check.random.hex_long("bf58476d1ce4e5b9");
clojure.test.check.random.mix_64_const_2 = clojure.test.check.random.hex_long("94d049bb133111eb");
clojure.test.check.random.mix_64 = (function clojure$test$check$random$mix_64(n){
return clojure.test.check.random.bxoubsr(clojure.test.check.random.longs._STAR_(clojure.test.check.random.bxoubsr(clojure.test.check.random.longs._STAR_(clojure.test.check.random.bxoubsr(n,(30)),clojure.test.check.random.mix_64_const_1),(27)),clojure.test.check.random.mix_64_const_2),(31));
});
clojure.test.check.random.mix_gamma_const_1 = clojure.test.check.random.hex_long("ff51afd7ed558ccd");
clojure.test.check.random.mix_gamma_const_2 = clojure.test.check.random.hex_long("c4ceb9fe1a85ec53");
clojure.test.check.random.mix_gamma_const_3 = clojure.test.check.random.hex_long("aaaaaaaaaaaaaaaa");
clojure.test.check.random.mix_gamma = (function clojure$test$check$random$mix_gamma(n){
var z = clojure.test.check.random.longs.bit_or(clojure.test.check.random.bxoubsr(clojure.test.check.random.longs._STAR_(clojure.test.check.random.bxoubsr(clojure.test.check.random.longs._STAR_(clojure.test.check.random.bxoubsr(n,(33)),clojure.test.check.random.mix_gamma_const_1),(33)),clojure.test.check.random.mix_gamma_const_2),(33)),clojure.test.check.random.longs.ONE);
var G__44576 = z;
if(((24) > (function (){var G__44577 = clojure.test.check.random.bxoubsr(z,(1));
return (clojure.test.check.random.longs.bit_count.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.random.longs.bit_count.cljs$core$IFn$_invoke$arity$1(G__44577) : clojure.test.check.random.longs.bit_count.call(null,G__44577));
})())){
return clojure.test.check.random.longs.bit_xor(G__44576,clojure.test.check.random.mix_gamma_const_3);
} else {
return G__44576;
}
});

/**
* @constructor
 * @implements {clojure.test.check.random.IRandom}
*/
clojure.test.check.random.JavaUtilSplittableRandom = (function (gamma,state){
this.gamma = gamma;
this.state = state;
});
(clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$rand_long$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return clojure.test.check.random.mix_64(clojure.test.check.random.longs._PLUS_(self__.state,self__.gamma));
}));

(clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$rand_double$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clojure.test.check.random.doubles.rand_long__GT_rand_double(this$__$1.clojure$test$check$random$IRandom$rand_long$arity$1(null));
}));

(clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$split$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var state_SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_(self__.gamma,self__.state);
var state_SINGLEQUOTE__SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_(self__.gamma,state_SINGLEQUOTE_);
var gamma_SINGLEQUOTE_ = clojure.test.check.random.mix_gamma(state_SINGLEQUOTE__SINGLEQUOTE_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new clojure.test.check.random.JavaUtilSplittableRandom(self__.gamma,state_SINGLEQUOTE__SINGLEQUOTE_)),(new clojure.test.check.random.JavaUtilSplittableRandom(gamma_SINGLEQUOTE_,clojure.test.check.random.mix_64(state_SINGLEQUOTE_)))], null);
}));

(clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$split_n$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
var G__44579 = n;
switch (G__44579) {
case (0):
return cljs.core.PersistentVector.EMPTY;

break;
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null);

break;
default:
var n_dec = (n - (1));
var state__$1 = self__.state;
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_dec,cljs.core.count(ret))){
return cljs.core.persistent_BANG_(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,(new clojure.test.check.random.JavaUtilSplittableRandom(self__.gamma,state__$1))));
} else {
var state_SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_(self__.gamma,state__$1);
var state_SINGLEQUOTE__SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_(self__.gamma,state_SINGLEQUOTE_);
var gamma_SINGLEQUOTE_ = clojure.test.check.random.mix_gamma(state_SINGLEQUOTE__SINGLEQUOTE_);
var new_rng = (new clojure.test.check.random.JavaUtilSplittableRandom(gamma_SINGLEQUOTE_,clojure.test.check.random.mix_64(state_SINGLEQUOTE_)));
var G__44592 = state_SINGLEQUOTE__SINGLEQUOTE_;
var G__44593 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,new_rng);
state__$1 = G__44592;
ret = G__44593;
continue;
}
break;
}

}
}));

(clojure.test.check.random.JavaUtilSplittableRandom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gamma","gamma",-770466082,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$type = true);

(clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$ctorStr = "clojure.test.check.random/JavaUtilSplittableRandom");

(clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"clojure.test.check.random/JavaUtilSplittableRandom");
}));

/**
 * Positional factory function for clojure.test.check.random/JavaUtilSplittableRandom.
 */
clojure.test.check.random.__GT_JavaUtilSplittableRandom = (function clojure$test$check$random$__GT_JavaUtilSplittableRandom(gamma,state){
return (new clojure.test.check.random.JavaUtilSplittableRandom(gamma,state));
});

clojure.test.check.random.golden_gamma = clojure.test.check.random.hex_long("9e3779b97f4a7c15");
clojure.test.check.random.make_java_util_splittable_random = (function clojure$test$check$random$make_java_util_splittable_random(seed){
return (new clojure.test.check.random.JavaUtilSplittableRandom(clojure.test.check.random.golden_gamma,(function (){var or__5045__auto__ = clojure.test.check.random.longs.__GT_long(seed);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Bad random seed!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seed","seed",68613327),seed], null));
}
})()));
});
clojure.test.check.random.next_rng = (function (){var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),clojure.test.check.random.make_java_util_splittable_random((new Date()).valueOf())], null));
return (function (){
return new cljs.core.Keyword(null,"returned","returned",-2020439163).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p__44580){
var map__44581 = p__44580;
var map__44581__$1 = cljs.core.__destructure_map(map__44581);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44581__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var vec__44582 = clojure.test.check.random.split(state);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44582,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44582,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),r1,new cljs.core.Keyword(null,"returned","returned",-2020439163),r2], null);
})));
});
})();
/**
 * Given an optional integer (or goog.math.Long) seed, returns an
 *   implementation of the IRandom protocol.
 */
clojure.test.check.random.make_random = (function clojure$test$check$random$make_random(var_args){
var G__44586 = arguments.length;
switch (G__44586) {
case 0:
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.test.check.random.next_rng();
}));

(clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1 = (function (seed){
return clojure.test.check.random.make_java_util_splittable_random(seed);
}));

(clojure.test.check.random.make_random.cljs$lang$maxFixedArity = 1);

Object.defineProperty(module.exports, "mix_gamma_const_1", { enumerable: false, get: function() { return clojure.test.check.random.mix_gamma_const_1; } });
Object.defineProperty(module.exports, "make_java_util_splittable_random", { enumerable: false, get: function() { return clojure.test.check.random.make_java_util_splittable_random; } });
Object.defineProperty(module.exports, "rand_long", { enumerable: false, get: function() { return clojure.test.check.random.rand_long; } });
Object.defineProperty(module.exports, "mix_64", { enumerable: false, get: function() { return clojure.test.check.random.mix_64; } });
Object.defineProperty(module.exports, "golden_gamma", { enumerable: false, get: function() { return clojure.test.check.random.golden_gamma; } });
Object.defineProperty(module.exports, "mix_gamma_const_2", { enumerable: false, get: function() { return clojure.test.check.random.mix_gamma_const_2; } });
Object.defineProperty(module.exports, "mix_64_const_2", { enumerable: false, get: function() { return clojure.test.check.random.mix_64_const_2; } });
Object.defineProperty(module.exports, "bxoubsr", { enumerable: false, get: function() { return clojure.test.check.random.bxoubsr; } });
Object.defineProperty(module.exports, "make_random", { enumerable: false, get: function() { return clojure.test.check.random.make_random; } });
Object.defineProperty(module.exports, "mix_gamma", { enumerable: false, get: function() { return clojure.test.check.random.mix_gamma; } });
Object.defineProperty(module.exports, "mix_gamma_const_3", { enumerable: false, get: function() { return clojure.test.check.random.mix_gamma_const_3; } });
Object.defineProperty(module.exports, "split_n", { enumerable: false, get: function() { return clojure.test.check.random.split_n; } });
Object.defineProperty(module.exports, "next_rng", { enumerable: false, get: function() { return clojure.test.check.random.next_rng; } });
Object.defineProperty(module.exports, "hex_long", { enumerable: false, get: function() { return clojure.test.check.random.hex_long; } });
Object.defineProperty(module.exports, "rand_double", { enumerable: false, get: function() { return clojure.test.check.random.rand_double; } });
Object.defineProperty(module.exports, "mix_64_const_1", { enumerable: false, get: function() { return clojure.test.check.random.mix_64_const_1; } });
Object.defineProperty(module.exports, "split", { enumerable: false, get: function() { return clojure.test.check.random.split; } });
Object.defineProperty(module.exports, "JavaUtilSplittableRandom", { enumerable: false, get: function() { return clojure.test.check.random.JavaUtilSplittableRandom; } });
Object.defineProperty(module.exports, "IRandom", { enumerable: false, get: function() { return clojure.test.check.random.IRandom; } });
Object.defineProperty(module.exports, "__GT_JavaUtilSplittableRandom", { enumerable: false, get: function() { return clojure.test.check.random.__GT_JavaUtilSplittableRandom; } });
//# sourceMappingURL=clojure.test.check.random.js.map
