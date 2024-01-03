var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.mbql.normalize.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.mbql.js.js");

goog.provide('metabase.mbql.js');
/**
 * Sometimes JS queries are passed in with a `Join` or `Aggregation` clause object instead of a simple Array.
 *   These clauses `extend Array` so `Array.isArray(x)` is true, but they're treated as opaque by `js->clj`.
 *   This recurses over the whole query, unwrapping these values to their `.raw()` form.
 */
metabase.mbql.js.unwrap = (function metabase$mbql$js$unwrap(x){
if(cljs.core.truth_((function (){var and__5043__auto__ = x;
if(cljs.core.truth_(and__5043__auto__)){
return (((x instanceof Object)) && (cljs.core.fn_QMARK_(x.raw)));
} else {
return and__5043__auto__;
}
})())){
var G__81359 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(x.raw());
return (metabase.mbql.js.unwrap.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.js.unwrap.cljs$core$IFn$_invoke$arity$1(G__81359) : metabase.mbql.js.unwrap.call(null,G__81359));
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.update_vals(x,metabase.mbql.js.unwrap);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.mbql.js.unwrap,x);
} else {
return x;

}
}
}
});
/**
 * Normalize an MBQL query, and convert it to the latest and greatest version of MBQL.
 * 
 *   Returns the CLJS form of the normalized query. Use [[normalize]] for the JS form.
 */
metabase.mbql.js.normalize_cljs = (function metabase$mbql$js$normalize_cljs(query){
return metabase.mbql.normalize.normalize(metabase.mbql.js.unwrap(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(query)));
});
/**
 * Normalize an MBQL query, and convert it to the latest and greatest version of MBQL.
 * 
 *   Returns the JS form of the normalized query. Use [[normalize-cljs]] for the CLJS form.
 */
metabase.mbql.js.normalize = (function metabase$mbql$js$normalize(query){
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(metabase.mbql.js.normalize_cljs(query),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),metabase.util.qualified_name], 0));
});
Object.defineProperty(module.exports, "unwrap", { enumerable: false, get: function() { return metabase.mbql.js.unwrap; } });
Object.defineProperty(module.exports, "normalize_cljs", { enumerable: false, get: function() { return metabase.mbql.js.normalize_cljs; } });
Object.defineProperty(module.exports, "normalize", { enumerable: true, get: function() { return metabase.mbql.js.normalize; } });
//# sourceMappingURL=metabase.mbql.js.js.map
