var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.util.internal.time_common.js");

goog.provide('metabase.shared.util.internal.time_common');
metabase.shared.util.internal.time_common.by_unit = (function metabase$shared$util$internal$time_common$by_unit(_,p__80200){
var map__80201 = p__80200;
var map__80201__$1 = cljs.core.__destructure_map(map__80201);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80201__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit);
});
if((typeof metabase !== 'undefined') && (typeof metabase.shared !== 'undefined') && (typeof metabase.shared.util !== 'undefined') && (typeof metabase.shared.util.internal !== 'undefined') && (typeof metabase.shared.util.internal.time_common !== 'undefined') && (typeof metabase.shared.util.internal.time_common.to_range !== 'undefined')){
} else {
/**
 * Given a datetime and a unit (eg. "hour"), returns an *inclusive* datetime range as a pair of datetimes.
 *   For a unit of an hour, and a datetime for 13:49:28, that means [13:00:00 13:59:59.999], ie. 1 ms before the end.
 */
metabase.shared.util.internal.time_common.to_range = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__80203 = cljs.core.get_global_hierarchy;
return (fexpr__80203.cljs$core$IFn$_invoke$arity$0 ? fexpr__80203.cljs$core$IFn$_invoke$arity$0() : fexpr__80203.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.shared.util.internal.time-common","to-range"),metabase.shared.util.internal.time_common.by_unit,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof metabase !== 'undefined') && (typeof metabase.shared !== 'undefined') && (typeof metabase.shared.util !== 'undefined') && (typeof metabase.shared.util.internal !== 'undefined') && (typeof metabase.shared.util.internal.time_common !== 'undefined') && (typeof metabase.shared.util.internal.time_common.string__GT_timestamp !== 'undefined')){
} else {
/**
 * Given a string representation of a datetime and the `options` map, parses the string as a representation of the
 *   `:unit` option (eg. "hour").
 *   Returns a platform-specific datetime.
 */
metabase.shared.util.internal.time_common.string__GT_timestamp = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__80211 = cljs.core.get_global_hierarchy;
return (fexpr__80211.cljs$core$IFn$_invoke$arity$0 ? fexpr__80211.cljs$core$IFn$_invoke$arity$0() : fexpr__80211.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.shared.util.internal.time-common","string->timestamp"),metabase.shared.util.internal.time_common.by_unit,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof metabase !== 'undefined') && (typeof metabase.shared !== 'undefined') && (typeof metabase.shared.util !== 'undefined') && (typeof metabase.shared.util.internal !== 'undefined') && (typeof metabase.shared.util.internal.time_common !== 'undefined') && (typeof metabase.shared.util.internal.time_common.number__GT_timestamp !== 'undefined')){
} else {
/**
 * Given a numeric representation of a datetime and the `options` map, interprets the number based on the `:unit` option
 *   (eg. "day-of-week").
 * 
 *   Note that for two relative units - `day-of-month` and `day-of-year` - an arbitrary date is generated, not necessarily
 *   one in the current month or year. When grouping user data by day-of-month, it doesn't matter whether the current month
 *   has 31 days or not.
 * 
 *   Returns a platform-specific datetime.
 */
metabase.shared.util.internal.time_common.number__GT_timestamp = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__80213 = cljs.core.get_global_hierarchy;
return (fexpr__80213.cljs$core$IFn$_invoke$arity$0 ? fexpr__80213.cljs$core$IFn$_invoke$arity$0() : fexpr__80213.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.shared.util.internal.time-common","number->timestamp"),metabase.shared.util.internal.time_common.by_unit,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
/**
 * Strips off a trailing +0500, -0430, or Z from a time string.
 */
metabase.shared.util.internal.time_common.drop_trailing_time_zone = (function metabase$shared$util$internal$time_common$drop_trailing_time_zone(time_str){
var or__5045__auto__ = cljs.core.second(cljs.core.re_matches(/(.*?)(?:Z|[+-][\d:]+)$/,time_str));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return time_str;
}
});
Object.defineProperty(module.exports, "by_unit", { enumerable: false, get: function() { return metabase.shared.util.internal.time_common.by_unit; } });
Object.defineProperty(module.exports, "to_range", { enumerable: false, get: function() { return metabase.shared.util.internal.time_common.to_range; } });
Object.defineProperty(module.exports, "string__GT_timestamp", { enumerable: false, get: function() { return metabase.shared.util.internal.time_common.string__GT_timestamp; } });
Object.defineProperty(module.exports, "number__GT_timestamp", { enumerable: false, get: function() { return metabase.shared.util.internal.time_common.number__GT_timestamp; } });
Object.defineProperty(module.exports, "drop_trailing_time_zone", { enumerable: false, get: function() { return metabase.shared.util.internal.time_common.drop_trailing_time_zone; } });
//# sourceMappingURL=metabase.shared.util.internal.time_common.js.map
