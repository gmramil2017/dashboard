var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.test.check.random.longs.bit_count_impl.js");
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

$CLJS.SHADOW_ENV.setLoaded("clojure.test.check.random.longs.js");

goog.provide('clojure.test.check.random.longs');
goog.scope(function(){
  clojure.test.check.random.longs.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
clojure.test.check.random.longs.unsigned_bit_shift_right = (function clojure$test$check$random$longs$unsigned_bit_shift_right(x,n){
return x.shiftRightUnsigned(n);
});
clojure.test.check.random.longs._PLUS_ = (function clojure$test$check$random$longs$_PLUS_(x,y){
return x.add(y);
});
clojure.test.check.random.longs._STAR_ = (function clojure$test$check$random$longs$_STAR_(x,y){
var a48 = (x.high_ >>> (16));
var a32 = (x.high_ & (65535));
var a16 = (x.low_ >>> (16));
var a00 = (x.low_ & (65535));
var b48 = (y.high_ >>> (16));
var b32 = (y.high_ & (65535));
var b16 = (y.low_ >>> (16));
var b00 = (y.low_ & (65535));
var arr = [(0),(0),(0),(0)];
(arr[(0)] = (a00 * b00));

(arr[(1)] = ((arr[(0)]) >>> (16)));

(arr[(0)] = ((arr[(0)]) & (65535)));

(arr[(1)] = ((arr[(1)]) + (a16 * b00)));

(arr[(2)] = ((arr[(1)]) >>> (16)));

(arr[(1)] = ((arr[(1)]) & (65535)));

(arr[(1)] = ((arr[(1)]) + (a00 * b16)));

(arr[(2)] = ((arr[(2)]) + ((arr[(1)]) >>> (16))));

(arr[(1)] = ((arr[(1)]) & (65535)));

(arr[(2)] = ((arr[(2)]) + (a32 * b00)));

(arr[(3)] = ((arr[(2)]) >>> (16)));

(arr[(2)] = ((arr[(2)]) & (65535)));

(arr[(2)] = ((arr[(2)]) + (a16 * b16)));

(arr[(3)] = ((arr[(3)]) + ((arr[(2)]) >>> (16))));

(arr[(2)] = ((arr[(2)]) & (65535)));

(arr[(2)] = ((arr[(2)]) + (a00 * b32)));

(arr[(3)] = ((arr[(3)]) + ((arr[(2)]) >>> (16))));

(arr[(2)] = ((arr[(2)]) & (65535)));

(arr[(3)] = (((((arr[(3)]) + (a48 * b00)) + (a32 * b16)) + (a16 * b32)) + (a00 * b48)));

(arr[(3)] = ((arr[(3)]) & (65535)));

return clojure.test.check.random.longs.goog$module$goog$math$Long.fromBits((((arr[(1)]) << (16)) | (arr[(0)])),(((arr[(3)]) << (16)) | (arr[(2)])));
});
clojure.test.check.random.longs.bit_xor = (function clojure$test$check$random$longs$bit_xor(x,y){
return x.xor(y);
});
clojure.test.check.random.longs.bit_or = (function clojure$test$check$random$longs$bit_or(x,y){
return x.or(y);
});
clojure.test.check.random.longs.from_string = (function clojure$test$check$random$longs$from_string(s,radix){
return clojure.test.check.random.longs.goog$module$goog$math$Long.fromString(s,radix);
});
clojure.test.check.random.longs.from_number = (function clojure$test$check$random$longs$from_number(x){
return clojure.test.check.random.longs.goog$module$goog$math$Long.fromNumber(x);
});
/**
 * Coerces to long, or returns nil if not possible.
 */
clojure.test.check.random.longs.__GT_long = (function clojure$test$check$random$longs$__GT_long(x){
if(typeof x === 'number'){
return clojure.test.check.random.longs.goog$module$goog$math$Long.fromNumber(x);
} else {
if((x instanceof clojure.test.check.random.longs.goog$module$goog$math$Long)){
return x;
} else {
return null;
}
}
});
clojure.test.check.random.longs.ONE = clojure.test.check.random.longs.goog$module$goog$math$Long.getOne();
clojure.test.check.random.longs.bit_count = clojure.test.check.random.longs.bit_count_impl.bit_count;
Object.defineProperty(module.exports, "from_number", { enumerable: false, get: function() { return clojure.test.check.random.longs.from_number; } });
Object.defineProperty(module.exports, "bit_count", { enumerable: false, get: function() { return clojure.test.check.random.longs.bit_count; } });
Object.defineProperty(module.exports, "bit_xor", { enumerable: false, get: function() { return clojure.test.check.random.longs.bit_xor; } });
Object.defineProperty(module.exports, "unsigned_bit_shift_right", { enumerable: false, get: function() { return clojure.test.check.random.longs.unsigned_bit_shift_right; } });
Object.defineProperty(module.exports, "_STAR_", { enumerable: false, get: function() { return clojure.test.check.random.longs._STAR_; } });
Object.defineProperty(module.exports, "from_string", { enumerable: false, get: function() { return clojure.test.check.random.longs.from_string; } });
Object.defineProperty(module.exports, "__GT_long", { enumerable: false, get: function() { return clojure.test.check.random.longs.__GT_long; } });
Object.defineProperty(module.exports, "bit_or", { enumerable: false, get: function() { return clojure.test.check.random.longs.bit_or; } });
Object.defineProperty(module.exports, "ONE", { enumerable: false, get: function() { return clojure.test.check.random.longs.ONE; } });
Object.defineProperty(module.exports, "_PLUS_", { enumerable: false, get: function() { return clojure.test.check.random.longs._PLUS_; } });
//# sourceMappingURL=clojure.test.check.random.longs.js.map
