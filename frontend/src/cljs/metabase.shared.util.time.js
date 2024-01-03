var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.shared.util.internal.time.js");
require("./metabase.shared.util.internal.time_common.js");
require("./metabase.shared.util.namespaces.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.util.time.js");

goog.provide('metabase.shared.util.time');
/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.to_range = (function() { 
var metabase$shared$util$time$to_range__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time_common.to_range,args__52718__auto__);
};
var metabase$shared$util$time$to_range = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__80273__i = 0, G__80273__a = new Array(arguments.length -  0);
while (G__80273__i < G__80273__a.length) {G__80273__a[G__80273__i] = arguments[G__80273__i + 0]; ++G__80273__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__80273__a,0,null);
} 
return metabase$shared$util$time$to_range__delegate.call(this,args__52718__auto__);};
metabase$shared$util$time$to_range.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$to_range.cljs$lang$applyTo = (function (arglist__80274){
var args__52718__auto__ = cljs.core.seq(arglist__80274);
return metabase$shared$util$time$to_range__delegate(args__52718__auto__);
});
metabase$shared$util$time$to_range.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$to_range__delegate;
return metabase$shared$util$time$to_range;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.valid_QMARK_ = (function() { 
var metabase$shared$util$time$valid_QMARK___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.valid_QMARK_,args__52718__auto__);
};
var metabase$shared$util$time$valid_QMARK_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__80275__i = 0, G__80275__a = new Array(arguments.length -  0);
while (G__80275__i < G__80275__a.length) {G__80275__a[G__80275__i] = arguments[G__80275__i + 0]; ++G__80275__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__80275__a,0,null);
} 
return metabase$shared$util$time$valid_QMARK___delegate.call(this,args__52718__auto__);};
metabase$shared$util$time$valid_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$valid_QMARK_.cljs$lang$applyTo = (function (arglist__80276){
var args__52718__auto__ = cljs.core.seq(arglist__80276);
return metabase$shared$util$time$valid_QMARK___delegate(args__52718__auto__);
});
metabase$shared$util$time$valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$valid_QMARK___delegate;
return metabase$shared$util$time$valid_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.same_day_QMARK_ = (function() { 
var metabase$shared$util$time$same_day_QMARK___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.same_day_QMARK_,args__52718__auto__);
};
var metabase$shared$util$time$same_day_QMARK_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__80277__i = 0, G__80277__a = new Array(arguments.length -  0);
while (G__80277__i < G__80277__a.length) {G__80277__a[G__80277__i] = arguments[G__80277__i + 0]; ++G__80277__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__80277__a,0,null);
} 
return metabase$shared$util$time$same_day_QMARK___delegate.call(this,args__52718__auto__);};
metabase$shared$util$time$same_day_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$same_day_QMARK_.cljs$lang$applyTo = (function (arglist__80278){
var args__52718__auto__ = cljs.core.seq(arglist__80278);
return metabase$shared$util$time$same_day_QMARK___delegate(args__52718__auto__);
});
metabase$shared$util$time$same_day_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$same_day_QMARK___delegate;
return metabase$shared$util$time$same_day_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.same_month_QMARK_ = (function() { 
var metabase$shared$util$time$same_month_QMARK___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.same_month_QMARK_,args__52718__auto__);
};
var metabase$shared$util$time$same_month_QMARK_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__80279__i = 0, G__80279__a = new Array(arguments.length -  0);
while (G__80279__i < G__80279__a.length) {G__80279__a[G__80279__i] = arguments[G__80279__i + 0]; ++G__80279__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__80279__a,0,null);
} 
return metabase$shared$util$time$same_month_QMARK___delegate.call(this,args__52718__auto__);};
metabase$shared$util$time$same_month_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$same_month_QMARK_.cljs$lang$applyTo = (function (arglist__80280){
var args__52718__auto__ = cljs.core.seq(arglist__80280);
return metabase$shared$util$time$same_month_QMARK___delegate(args__52718__auto__);
});
metabase$shared$util$time$same_month_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$same_month_QMARK___delegate;
return metabase$shared$util$time$same_month_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.same_year_QMARK_ = (function() { 
var metabase$shared$util$time$same_year_QMARK___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.same_year_QMARK_,args__52718__auto__);
};
var metabase$shared$util$time$same_year_QMARK_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__80281__i = 0, G__80281__a = new Array(arguments.length -  0);
while (G__80281__i < G__80281__a.length) {G__80281__a[G__80281__i] = arguments[G__80281__i + 0]; ++G__80281__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__80281__a,0,null);
} 
return metabase$shared$util$time$same_year_QMARK___delegate.call(this,args__52718__auto__);};
metabase$shared$util$time$same_year_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$same_year_QMARK_.cljs$lang$applyTo = (function (arglist__80282){
var args__52718__auto__ = cljs.core.seq(arglist__80282);
return metabase$shared$util$time$same_year_QMARK___delegate(args__52718__auto__);
});
metabase$shared$util$time$same_year_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$same_year_QMARK___delegate;
return metabase$shared$util$time$same_year_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.day_diff = (function() { 
var metabase$shared$util$time$day_diff__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.day_diff,args__52718__auto__);
};
var metabase$shared$util$time$day_diff = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__80283__i = 0, G__80283__a = new Array(arguments.length -  0);
while (G__80283__i < G__80283__a.length) {G__80283__a[G__80283__i] = arguments[G__80283__i + 0]; ++G__80283__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__80283__a,0,null);
} 
return metabase$shared$util$time$day_diff__delegate.call(this,args__52718__auto__);};
metabase$shared$util$time$day_diff.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$day_diff.cljs$lang$applyTo = (function (arglist__80284){
var args__52718__auto__ = cljs.core.seq(arglist__80284);
return metabase$shared$util$time$day_diff__delegate(args__52718__auto__);
});
metabase$shared$util$time$day_diff.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$day_diff__delegate;
return metabase$shared$util$time$day_diff;
})()
;
metabase.shared.util.time.prep_options = (function metabase$shared$util$time$prep_options(options){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.util.internal.time.default_options,metabase.util.normalize_map(options)], 0));
});
/**
 * Parses a timestamp value into a date object. This can be a straightforward Unix timestamp or ISO format string.
 *   But the `:unit` field can be used to alter the parsing to, for example, treat the input number as a day-of-week or
 *   day-of-month number.
 *   Returns Moments in JS and OffsetDateTimes in Java.
 */
metabase.shared.util.time.coerce_to_timestamp = (function metabase$shared$util$time$coerce_to_timestamp(var_args){
var G__80269 = arguments.length;
switch (G__80269) {
case 1:
return metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.shared.util.time.coerce_to_timestamp', metabase.shared.util.time.coerce_to_timestamp);

(metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$1 = (function (value){
return metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$2(value,cljs.core.PersistentArrayMap.EMPTY);
}));

(metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$2 = (function (value,options){
var options__$1 = metabase.shared.util.time.prep_options(options);
var base = (cljs.core.truth_(metabase.shared.util.internal.time.datetime_QMARK_(value))?metabase.shared.util.internal.time.normalize(value):(cljs.core.truth_((function (){var and__5043__auto__ = typeof value === 'string';
if(and__5043__auto__){
return cljs.core.re_matches(/.*(Z|[+-]\d\d:?\d\d)$/,value);
} else {
return and__5043__auto__;
}
})())?metabase.shared.util.internal.time.parse_with_zone(value):((typeof value === 'string')?metabase.shared.util.internal.time_common.string__GT_timestamp.cljs$core$IFn$_invoke$arity$2(value,options__$1):metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IFn$_invoke$arity$2(value,options__$1)
)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(options__$1))){
return metabase.shared.util.internal.time.localize(base);
} else {
return base;
}
}));

(metabase.shared.util.time.coerce_to_timestamp.cljs$lang$maxFixedArity = 2);

/**
 * Parses a standalone time, or the time portion of a timestamp.
 *   Accepts a platform time value (eg. Moment, OffsetTime, LocalTime) or a string.
 */
metabase.shared.util.time.coerce_to_time = (function metabase$shared$util$time$coerce_to_time(value){
if(cljs.core.truth_(metabase.shared.util.internal.time.time_QMARK_(value))){
return value;
} else {
if(typeof value === 'string'){
return metabase.shared.util.internal.time.parse_time_string(metabase.shared.util.internal.time_common.drop_trailing_time_zone(value));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown input to coerce-to-time; expecting a string",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null));

}
}
});
Object.defineProperty(module.exports, "same_day_QMARK_", { enumerable: false, get: function() { return metabase.shared.util.time.same_day_QMARK_; } });
Object.defineProperty(module.exports, "to_range", { enumerable: false, get: function() { return metabase.shared.util.time.to_range; } });
Object.defineProperty(module.exports, "valid_QMARK_", { enumerable: false, get: function() { return metabase.shared.util.time.valid_QMARK_; } });
Object.defineProperty(module.exports, "day_diff", { enumerable: false, get: function() { return metabase.shared.util.time.day_diff; } });
Object.defineProperty(module.exports, "coerce_to_timestamp", { enumerable: true, get: function() { return metabase.shared.util.time.coerce_to_timestamp; } });
Object.defineProperty(module.exports, "coerce_to_time", { enumerable: true, get: function() { return metabase.shared.util.time.coerce_to_time; } });
Object.defineProperty(module.exports, "prep_options", { enumerable: false, get: function() { return metabase.shared.util.time.prep_options; } });
Object.defineProperty(module.exports, "same_year_QMARK_", { enumerable: false, get: function() { return metabase.shared.util.time.same_year_QMARK_; } });
Object.defineProperty(module.exports, "same_month_QMARK_", { enumerable: false, get: function() { return metabase.shared.util.time.same_month_QMARK_; } });
//# sourceMappingURL=metabase.shared.util.time.js.map
