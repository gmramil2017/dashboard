var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.shared.formatting.constants.js");
require("./metabase.shared.formatting.internal.date_builder.js");
require("./metabase.shared.formatting.internal.date_formatters.js");
require("./metabase.shared.formatting.internal.date_options.js");
require("./metabase.shared.util.time.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.formatting.date.js");

goog.provide('metabase.shared.formatting.date');
/**
 * The range separator is a Unicode en-dash, not an ASCII hyphen.
 */
metabase.shared.formatting.date.range_separator = " \u2013 ";
metabase.shared.formatting.date.parameter_formatters = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"-",new cljs.core.Keyword(null,"month-dd","month-dd",-765979484)], null)),new cljs.core.Keyword(null,"quarter","quarter",-508147616),metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Q",new cljs.core.Keyword(null,"quarter","quarter",-508147616),"-",new cljs.core.Keyword(null,"year","year",335913393)], null)),new cljs.core.Keyword(null,"day","day",-274800446),metabase.shared.formatting.internal.date_formatters.big_endian_day], null);
/**
 * Returns a formatting date string for a datetime used as a parameter to a Card.
 */
metabase.shared.formatting.date.format_for_parameter = (function metabase$shared$formatting$date$format_for_parameter(value,options){
var options__$1 = metabase.shared.formatting.internal.date_options.prepare_options(options);
var t = metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$2(value,options__$1);
if(cljs.core.not(metabase.shared.util.time.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
} else {
var temp__5802__auto__ = (function (){var G__81666 = new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(options__$1);
return (metabase.shared.formatting.date.parameter_formatters.cljs$core$IFn$_invoke$arity$1 ? metabase.shared.formatting.date.parameter_formatters.cljs$core$IFn$_invoke$arity$1(G__81666) : metabase.shared.formatting.date.parameter_formatters.call(null,G__81666));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var fmt = temp__5802__auto__;
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(t) : fmt.call(null,t));
} else {
var vec__81667 = metabase.shared.util.time.to_range.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,options__$1], 0));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81667,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81667,(1),null);
if(cljs.core.truth_(metabase.shared.util.time.same_day_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start,end], 0)))){
return metabase.shared.formatting.internal.date_formatters.big_endian_day(start);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.formatting.internal.date_formatters.big_endian_day(start)),"~",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.formatting.internal.date_formatters.big_endian_day(end))].join('');
}
}
}
});
metabase.shared.formatting.date.format_range_with_unit_inner = (function metabase$shared$formatting$date$format_range_with_unit_inner(p__81673,options){
var vec__81674 = p__81673;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81674,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81674,(1),null);
if(((cljs.core.not(metabase.shared.formatting.constants.condense_ranges_QMARK_(options))) || (cljs.core.not(metabase.shared.util.time.same_year_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start,end], 0)))))){
var fmt = metabase.shared.formatting.internal.date_formatters.month_day_year(options);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt(start)),metabase.shared.formatting.date.range_separator,cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt(end))].join('');
} else {
if(cljs.core.not(metabase.shared.util.time.same_month_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start,end], 0)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.formatting.internal.date_formatters.month_day(options)(start)),metabase.shared.formatting.date.range_separator,cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.formatting.internal.date_formatters.month_day_year(options)(end))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.formatting.internal.date_formatters.month_day(options)(start)),metabase.shared.formatting.date.range_separator,cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),", ",new cljs.core.Keyword(null,"year","year",335913393)], null))(end))].join('');

}
}
});
/**
 * Returns a string with this datetime formatted as a range, rounded to the given `:unit`.
 */
metabase.shared.formatting.date.format_range_with_unit = (function metabase$shared$formatting$date$format_range_with_unit(value,options){
var options__$1 = metabase.shared.formatting.internal.date_options.prepare_options(options);
var t = metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$2(value,options__$1);
if(cljs.core.truth_(metabase.shared.util.time.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0)))){
return metabase.shared.formatting.date.format_range_with_unit_inner(metabase.shared.util.time.to_range.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,options__$1], 0)),options__$1);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}
});
/**
 * Returns a string with this datetime formatted as a single value, rounded to the given `:unit`.
 */
metabase.shared.formatting.date.format_datetime_with_unit = (function metabase$shared$formatting$date$format_datetime_with_unit(value,options){
var map__81677 = metabase.shared.formatting.internal.date_options.prepare_options(options);
var map__81677__$1 = cljs.core.__destructure_map(map__81677);
var options__$1 = map__81677__$1;
var is_exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81677__$1,new cljs.core.Keyword(null,"is-exclude","is-exclude",1738462979));
var no_range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81677__$1,new cljs.core.Keyword(null,"no-range","no-range",-1511420040));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81677__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81677__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var t = metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$2(value,options__$1);
if(cljs.core.truth_(is_exclude)){
var G__81681 = unit;
var G__81681__$1 = (((G__81681 instanceof cljs.core.Keyword))?G__81681.fqn:null);
switch (G__81681__$1) {
case "hour-of-day":
return metabase.shared.formatting.internal.date_formatters.hour_only(t);

break;
case "day-of-week":
return metabase.shared.formatting.internal.date_formatters.weekday(t);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("is-exclude option is only compatible with hour-of-day and day-of-week units",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),options__$1], null));

}
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"week","week",-1326473278));
if(and__5043__auto__){
var and__5043__auto____$1 = (function (){var fexpr__81682 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["tooltip",null,"cell",null], null), null);
return (fexpr__81682.cljs$core$IFn$_invoke$arity$1 ? fexpr__81682.cljs$core$IFn$_invoke$arity$1(type) : fexpr__81682.call(null,type));
})();
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not(no_range);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return metabase.shared.formatting.date.format_range_with_unit(value,options__$1);
} else {
var fexpr__81683 = metabase.shared.formatting.internal.date_formatters.options__GT_formatter(options__$1);
return (fexpr__81683.cljs$core$IFn$_invoke$arity$1 ? fexpr__81683.cljs$core$IFn$_invoke$arity$1(t) : fexpr__81683.call(null,t));

}
}
});
Object.defineProperty(module.exports, "range_separator", { enumerable: false, get: function() { return metabase.shared.formatting.date.range_separator; } });
Object.defineProperty(module.exports, "parameter_formatters", { enumerable: false, get: function() { return metabase.shared.formatting.date.parameter_formatters; } });
Object.defineProperty(module.exports, "format_for_parameter", { enumerable: true, get: function() { return metabase.shared.formatting.date.format_for_parameter; } });
Object.defineProperty(module.exports, "format_range_with_unit_inner", { enumerable: false, get: function() { return metabase.shared.formatting.date.format_range_with_unit_inner; } });
Object.defineProperty(module.exports, "format_range_with_unit", { enumerable: true, get: function() { return metabase.shared.formatting.date.format_range_with_unit; } });
Object.defineProperty(module.exports, "format_datetime_with_unit", { enumerable: true, get: function() { return metabase.shared.formatting.date.format_datetime_with_unit; } });
//# sourceMappingURL=metabase.shared.formatting.date.js.map
