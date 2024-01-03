var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.normalize.js");

goog.provide('metabase.lib.normalize');
metabase.lib.normalize.mbql_clause_type = (function metabase$lib$normalize$mbql_clause_type(x){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.vector_QMARK_(x);
if(and__5043__auto__){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(cljs.core.first(x));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(x));
} else {
return null;
}
});
metabase.lib.normalize.map_type = (function metabase$lib$normalize$map_type(m){
if(cljs.core.map_QMARK_(m)){
var G__65029 = (function (){var or__5045__auto__ = new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,"lib/type");
}
})();
if((G__65029 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__65029);
}
} else {
return null;
}
});
metabase.lib.normalize.dispatch_value = (function metabase$lib$normalize$dispatch_value(x){
var or__5045__auto__ = metabase.lib.normalize.mbql_clause_type(x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = metabase.lib.normalize.map_type(x);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(metabase.lib.dispatch.dispatch_value(x));
}
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.normalize !== 'undefined') && (typeof metabase.lib.normalize.normalize !== 'undefined')){
} else {
/**
 * Ensure some part of an MBQL query `x`, e.g. a clause or map, is in the right shape after coming in from JavaScript or
 *   deserialized JSON (from the app DB or a REST API request). This is intended for things that are already in a
 *   generally correct pMBQL; to 'normalize' things from legacy MBQL, use [[metabase.lib.convert]].
 * 
 *   The default implementation will keywordize keys for maps, and convert some known keys
 *   using [[default-map-value-fns]]; for MBQL clauses, it will convert the clause name to a keyword and recursively
 *   normalize its options and arguments. Implement this method if you need custom behavior for something.
 */
metabase.lib.normalize.normalize = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65032 = cljs.core.get_global_hierarchy;
return (fexpr__65032.cljs$core$IFn$_invoke$arity$0 ? fexpr__65032.cljs$core$IFn$_invoke$arity$0() : fexpr__65032.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.normalize","normalize"),metabase.lib.normalize.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
/**
 * Default normalization functions keys when doing map normalization.
 */
metabase.lib.normalize.default_map_value_fns = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),cljs.core.keyword,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),cljs.core.keyword,new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),cljs.core.keyword,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword,new cljs.core.Keyword(null,"field_ref","field_ref",-1985640334),cljs.core.constantly(new cljs.core.Keyword("metabase.lib.normalize","do-not-use-me","metabase.lib.normalize/do-not-use-me",3649521)),new cljs.core.Keyword("lib","type","lib/type",1175424801),cljs.core.keyword,new cljs.core.Keyword("lib","options","lib/options",99794548),metabase.lib.normalize.normalize], null);
/**
 * [[normalize]] a map using `key-fn` (default [[clojure.core/keyword]]) for keys and
 *   `value-fns` (default [[default-map-value-fns]]; additional functions are merged into this map).
 * 
 *   This is the default implementation for maps. Custom map implementations can call this with a different `key-fn` or
 *   additional `value-fns` as needed.
 */
metabase.lib.normalize.normalize_map = (function metabase$lib$normalize$normalize_map(var_args){
var G__65038 = arguments.length;
switch (G__65038) {
case 1:
return metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$1 = (function (m){
return metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$2(m,cljs.core.keyword);
}));

(metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$2 = (function (m,key_fn){
return metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$3(m,key_fn,null);
}));

(metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$3 = (function (m,key_fn,value_fns){
var value_fns__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.normalize.default_map_value_fns,value_fns], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__65046){
var vec__65047 = p__65046;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65047,(1),null);
var k__$1 = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(k) : key_fn.call(null,k));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,(function (){var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(value_fns__$1,k__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
} else {
return v;
}
})()], null);
})),m);
}));

(metabase.lib.normalize.normalize_map.cljs$lang$maxFixedArity = 3);

metabase.lib.normalize.normalize.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422),(function (m){
return metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$1(m);
}));
metabase.lib.normalize.default_normalize_mbql_clause = (function metabase$lib$normalize$default_normalize_mbql_clause(p__65054){
var vec__65055 = p__65054;
var seq__65056 = cljs.core.seq(vec__65055);
var first__65057 = cljs.core.first(seq__65056);
var seq__65056__$1 = cljs.core.next(seq__65056);
var tag = first__65057;
var first__65057__$1 = cljs.core.first(seq__65056__$1);
var seq__65056__$2 = cljs.core.next(seq__65056__$1);
var opts = first__65057__$1;
var args = seq__65056__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag),metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$1(opts)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.normalize.normalize),args);
});
metabase.lib.normalize.normalize.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(cljs.core.truth_(metabase.lib.normalize.mbql_clause_type(x))){
return metabase.lib.normalize.default_normalize_mbql_clause(x);
} else {
if(cljs.core.truth_(metabase.lib.normalize.map_type(x))){
return metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;

}
}
}));
Object.defineProperty(module.exports, "mbql_clause_type", { enumerable: false, get: function() { return metabase.lib.normalize.mbql_clause_type; } });
Object.defineProperty(module.exports, "map_type", { enumerable: false, get: function() { return metabase.lib.normalize.map_type; } });
Object.defineProperty(module.exports, "dispatch_value", { enumerable: false, get: function() { return metabase.lib.normalize.dispatch_value; } });
Object.defineProperty(module.exports, "normalize", { enumerable: false, get: function() { return metabase.lib.normalize.normalize; } });
Object.defineProperty(module.exports, "default_map_value_fns", { enumerable: false, get: function() { return metabase.lib.normalize.default_map_value_fns; } });
Object.defineProperty(module.exports, "normalize_map", { enumerable: false, get: function() { return metabase.lib.normalize.normalize_map; } });
Object.defineProperty(module.exports, "default_normalize_mbql_clause", { enumerable: false, get: function() { return metabase.lib.normalize.default_normalize_mbql_clause; } });
//# sourceMappingURL=metabase.lib.normalize.js.map
