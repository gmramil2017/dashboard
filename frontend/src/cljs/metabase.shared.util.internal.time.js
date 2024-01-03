var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$moment.js");
require("./metabase.shared.util.internal.time_common.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.util.internal.time.js");

goog.provide('metabase.shared.util.internal.time');
metabase.shared.util.internal.time.now = (function metabase$shared$util$internal$time$now(){
return shadow.js.shim.module$moment();
});
/**
 * Given any value, check if it's a (possibly invalid) Moment.
 */
metabase.shared.util.internal.time.datetime_QMARK_ = (function metabase$shared$util$internal$time$datetime_QMARK_(value){
var and__5043__auto__ = value;
if(cljs.core.truth_(and__5043__auto__)){
return shadow.js.shim.module$moment.isMoment(value);
} else {
return and__5043__auto__;
}
});
/**
 * checks if the provided value is a local time value.
 */
metabase.shared.util.internal.time.time_QMARK_ = (function metabase$shared$util$internal$time$time_QMARK_(value){
return shadow.js.shim.module$moment.isMoment(value);
});
/**
 * Given a Moment, check that it's valid.
 */
metabase.shared.util.internal.time.valid_QMARK_ = (function metabase$shared$util$internal$time$valid_QMARK_(value){
var and__5043__auto__ = metabase.shared.util.internal.time.datetime_QMARK_(value);
if(cljs.core.truth_(and__5043__auto__)){
return value.isValid();
} else {
return and__5043__auto__;
}
});
/**
 * Does nothing. Just a placeholder in CLJS; the JVM implementation does some real work.
 */
metabase.shared.util.internal.time.normalize = (function metabase$shared$util$internal$time$normalize(value){
return value;
});
/**
 * Given two platform-specific datetimes, checks if they fall within the same day.
 */
metabase.shared.util.internal.time.same_day_QMARK_ = (function metabase$shared$util$internal$time$same_day_QMARK_(d1,d2){
return d1.isSame(d2,"day");
});
/**
 * True if these two datetimes fall in the same (year and) month.
 */
metabase.shared.util.internal.time.same_month_QMARK_ = (function metabase$shared$util$internal$time$same_month_QMARK_(d1,d2){
return d1.isSame(d2,"month");
});
/**
 * True if these two datetimes fall in the same year.
 */
metabase.shared.util.internal.time.same_year_QMARK_ = (function metabase$shared$util$internal$time$same_year_QMARK_(d1,d2){
return d1.isSame(d2,"year");
});
/**
 * The first day of the week varies by locale, but Dashboard has a setting that overrides it.
 *   In CLJS, Moment is already configured with that setting.
 */
metabase.shared.util.internal.time.first_day_of_week = (function metabase$shared$util$internal$time$first_day_of_week(){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$moment.weekdays((0)).toLowerCase());
});
/**
 * The default map of options - empty in CLJS.
 */
metabase.shared.util.internal.time.default_options = cljs.core.PersistentArrayMap.EMPTY;
metabase.shared.util.internal.time_common.to_range.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (value,p__80406){
var map__80407 = p__80406;
var map__80407__$1 = cljs.core.__destructure_map(map__80407);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80407__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var c1 = value.clone();
var c2 = value.clone();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1.startOf(cljs.core.name(unit)),c2.endOf(cljs.core.name(unit))], null);
}));
metabase.shared.util.internal.time_common.string__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (value,_){
return shadow.js.shim.module$moment.utc(value,shadow.js.shim.module$moment.ISO_8601);
}));
metabase.shared.util.internal.time_common.string__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),(function (value,options){
var as_default = (function (){try{var fexpr__80410 = cljs.core.get_method(metabase.shared.util.internal.time_common.string__GT_timestamp,new cljs.core.Keyword(null,"default","default",-1987822328));
return (fexpr__80410.cljs$core$IFn$_invoke$arity$2 ? fexpr__80410.cljs$core$IFn$_invoke$arity$2(value,options) : fexpr__80410.call(null,value,options));
}catch (e80408){if((e80408 instanceof Error)){
var _ = e80408;
return null;
} else {
throw e80408;

}
}})();
if(cljs.core.truth_(metabase.shared.util.internal.time.valid_QMARK_(as_default))){
return as_default;
} else {
return metabase.shared.util.internal.time.now().isoWeekday(value).startOf("day");
}
}));
/**
 * Some of the date coercions are relative, and not directly involved with any particular month.
 *   To avoid errors we need to use a reference date that is (a) in a month with 31 days,(b) in a leap year.
 *   This uses 2016-01-01 for the purpose.
 *   This is a function that returns fresh values, since Moments are mutable.
 */
metabase.shared.util.internal.time.magic_base_date = (function metabase$shared$util$internal$time$magic_base_date(){
return shadow.js.shim.module$moment("2016-01-01");
});
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (value,_){
return shadow.js.shim.module$moment.utc(value,shadow.js.shim.module$moment.ISO_8601);
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"minute-of-hour","minute-of-hour",1903220478),(function (value,_){
return metabase.shared.util.internal.time.now().minute(value).startOf("minute");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099),(function (value,_){
return metabase.shared.util.internal.time.now().hour(value).startOf("hour");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),(function (value,_){
return metabase.shared.util.internal.time.now().weekday((value - (1))).startOf("day");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),(function (value,_){
return metabase.shared.util.internal.time.magic_base_date().date(value).startOf("day");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"day-of-year","day-of-year",478600113),(function (value,_){
return metabase.shared.util.internal.time.magic_base_date().dayOfYear(value).startOf("day");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"week-of-year","week-of-year",-910114435),(function (value,_){
return metabase.shared.util.internal.time.now().week(value).startOf("week");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),(function (value,_){
return metabase.shared.util.internal.time.now().month((value - (1))).startOf("month");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quarter-of-year","quarter-of-year",-472803491),(function (value,_){
return metabase.shared.util.internal.time.now().quarter(value).startOf("quarter");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"year","year",335913393),(function (value,_){
return metabase.shared.util.internal.time.now().year(value).startOf("year");
}));
/**
 * Parses a timestamp with Z or a timezone offset at the end.
 *   This requires a different API call from timestamps without time zones in CLJS.
 */
metabase.shared.util.internal.time.parse_with_zone = (function metabase$shared$util$internal$time$parse_with_zone(value){
return shadow.js.shim.module$moment.parseZone(value);
});
/**
 * Given a freshly parsed absolute Moment, convert it to a local one.
 */
metabase.shared.util.internal.time.localize = (function metabase$shared$util$internal$time$localize(value){
return value.local();
});
metabase.shared.util.internal.time.parse_time_formats = ["HH:mm:ss.SSS[Z]","HH:mm:ss.SSS","HH:mm:ss","HH:mm"];
/**
 * Parses a time string that has been stripped of any time zone.
 */
metabase.shared.util.internal.time.parse_time_string = (function metabase$shared$util$internal$time$parse_time_string(value){
return shadow.js.shim.module$moment(value,metabase.shared.util.internal.time.parse_time_formats);
});
/**
 * Returns the time elapsed between `before` and `after` in days.
 */
metabase.shared.util.internal.time.day_diff = (function metabase$shared$util$internal$time$day_diff(before,after){
return after.diff(before,"day");
});
Object.defineProperty(module.exports, "same_day_QMARK_", { enumerable: false, get: function() { return metabase.shared.util.internal.time.same_day_QMARK_; } });
Object.defineProperty(module.exports, "datetime_QMARK_", { enumerable: false, get: function() { return metabase.shared.util.internal.time.datetime_QMARK_; } });
Object.defineProperty(module.exports, "normalize", { enumerable: false, get: function() { return metabase.shared.util.internal.time.normalize; } });
Object.defineProperty(module.exports, "time_QMARK_", { enumerable: false, get: function() { return metabase.shared.util.internal.time.time_QMARK_; } });
Object.defineProperty(module.exports, "default_options", { enumerable: false, get: function() { return metabase.shared.util.internal.time.default_options; } });
Object.defineProperty(module.exports, "parse_with_zone", { enumerable: false, get: function() { return metabase.shared.util.internal.time.parse_with_zone; } });
Object.defineProperty(module.exports, "now", { enumerable: false, get: function() { return metabase.shared.util.internal.time.now; } });
Object.defineProperty(module.exports, "valid_QMARK_", { enumerable: false, get: function() { return metabase.shared.util.internal.time.valid_QMARK_; } });
Object.defineProperty(module.exports, "day_diff", { enumerable: false, get: function() { return metabase.shared.util.internal.time.day_diff; } });
Object.defineProperty(module.exports, "parse_time_string", { enumerable: false, get: function() { return metabase.shared.util.internal.time.parse_time_string; } });
Object.defineProperty(module.exports, "localize", { enumerable: false, get: function() { return metabase.shared.util.internal.time.localize; } });
Object.defineProperty(module.exports, "same_year_QMARK_", { enumerable: false, get: function() { return metabase.shared.util.internal.time.same_year_QMARK_; } });
Object.defineProperty(module.exports, "parse_time_formats", { enumerable: false, get: function() { return metabase.shared.util.internal.time.parse_time_formats; } });
Object.defineProperty(module.exports, "same_month_QMARK_", { enumerable: false, get: function() { return metabase.shared.util.internal.time.same_month_QMARK_; } });
Object.defineProperty(module.exports, "first_day_of_week", { enumerable: false, get: function() { return metabase.shared.util.internal.time.first_day_of_week; } });
Object.defineProperty(module.exports, "magic_base_date", { enumerable: false, get: function() { return metabase.shared.util.internal.time.magic_base_date; } });
//# sourceMappingURL=metabase.shared.util.internal.time.js.map
