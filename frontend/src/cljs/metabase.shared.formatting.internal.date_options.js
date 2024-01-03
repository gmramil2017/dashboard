var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.shared.formatting.constants.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.formatting.internal.date_options.js");

goog.provide('metabase.shared.formatting.internal.date_options');
metabase.shared.formatting.internal.date_options.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date-enabled","date-enabled",1961030769),true,new cljs.core.Keyword(null,"date-style","date-style",-192846325),metabase.shared.formatting.constants.default_date_style,new cljs.core.Keyword(null,"time-style","time-style",-1943466186),metabase.shared.formatting.constants.default_time_style,new cljs.core.Keyword(null,"output-density","output-density",105174015),"default",new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"default","default",-1987822328)], null);
metabase.shared.formatting.internal.date_options.units_with_hour = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hour","hour",-555989214),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099),null,new cljs.core.Keyword(null,"minute","minute",-642875969),null], null), null);
metabase.shared.formatting.internal.date_options.units_with_day = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [null,null,new cljs.core.Keyword(null,"day","day",-274800446),null,new cljs.core.Keyword(null,"hour","hour",-555989214),null,new cljs.core.Keyword(null,"week","week",-1326473278),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"minute","minute",-642875969),null], null), null);
metabase.shared.formatting.internal.date_options.time_only_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099),null], null), null);
/**
 * Normalizes the options map. This returns a Clojure map with `:kebab-case-keys`, whatever the input object or
 *   key spelling.
 * 
 *   Mixes in the [[default-options]], plus:
 *   - defaulting `:time-enabled` to `"minutes"` if the `:unit` is smaller than a day.
 *   - transforming `:date-format` and `:time-format` to the corresponding styles.
 *   - transforming `:type` of `"cell"` or `"tooltip"` to `condensed` output density
 *   - transforming `:compact true` to `:output-density "compact"` (takes precedence over `"condensed"`).
 *   - make `:unit` a keyword
 */
metabase.shared.formatting.internal.date_options.prepare_options = (function metabase$shared$formatting$internal$date_options$prepare_options(options){
var options__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(metabase.util.normalize_map(options),new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.keyword);
var map__81634 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.formatting.internal.date_options.default_options,(cljs.core.truth_((function (){var G__81635 = new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(options__$1);
return (metabase.shared.formatting.internal.date_options.units_with_hour.cljs$core$IFn$_invoke$arity$1 ? metabase.shared.formatting.internal.date_options.units_with_hour.cljs$core$IFn$_invoke$arity$1(G__81635) : metabase.shared.formatting.internal.date_options.units_with_hour.call(null,G__81635));
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time-enabled","time-enabled",-1856094894),"minutes"], null):null),options__$1], 0));
var map__81634__$1 = cljs.core.__destructure_map(map__81634);
var options__$2 = map__81634__$1;
var compact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81634__$1,new cljs.core.Keyword(null,"compact","compact",-348732150));
var date_abbreviate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81634__$1,new cljs.core.Keyword(null,"date-abbreviate","date-abbreviate",-1610414518));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81634__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81634__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var G__81636 = options__$2;
var G__81636__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__81636,new cljs.core.Keyword(null,"compact","compact",-348732150),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"date-abbreviate","date-abbreviate",-1610414518)], 0))
;
var G__81636__$2 = (cljs.core.truth_((metabase.shared.formatting.internal.date_options.time_only_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metabase.shared.formatting.internal.date_options.time_only_QMARK_.cljs$core$IFn$_invoke$arity$1(unit) : metabase.shared.formatting.internal.date_options.time_only_QMARK_.call(null,unit)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81636__$1,new cljs.core.Keyword(null,"date-enabled","date-enabled",1961030769),false):G__81636__$1);
var G__81636__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"tooltip"))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81636__$2,new cljs.core.Keyword(null,"output-density","output-density",105174015),"condensed"):G__81636__$2);
var G__81636__$4 = (cljs.core.truth_((function (){var or__5045__auto__ = compact;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return date_abbreviate;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81636__$3,new cljs.core.Keyword(null,"output-density","output-density",105174015),"compact"):G__81636__$3);
if(cljs.core.not((metabase.shared.formatting.internal.date_options.units_with_day.cljs$core$IFn$_invoke$arity$1 ? metabase.shared.formatting.internal.date_options.units_with_day.cljs$core$IFn$_invoke$arity$1(unit) : metabase.shared.formatting.internal.date_options.units_with_day.call(null,unit)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__81636__$4,new cljs.core.Keyword(null,"weekday-enabled","weekday-enabled",-1447123049));
} else {
return G__81636__$4;
}
});
Object.defineProperty(module.exports, "default_options", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_options.default_options; } });
Object.defineProperty(module.exports, "units_with_hour", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_options.units_with_hour; } });
Object.defineProperty(module.exports, "units_with_day", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_options.units_with_day; } });
Object.defineProperty(module.exports, "time_only_QMARK_", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_options.time_only_QMARK_; } });
Object.defineProperty(module.exports, "prepare_options", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_options.prepare_options; } });
//# sourceMappingURL=metabase.shared.formatting.internal.date_options.js.map
