var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.mbql_clause.js");
require("./metabase.util.malli.registry.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.literal.js");

goog.provide('metabase.lib.schema.literal');
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","nil","dispatch-type/nil",-2067723388),(function (_nil){
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","boolean","metabase.lib.schema.literal/boolean",1793502815),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","boolean","dispatch-type/boolean",179271749),(function (_bool){
return new cljs.core.Keyword("type","Boolean","type/Boolean",26348630);
}));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","boolean","metabase.lib.schema.literal/boolean",1793502815),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","integer","metabase.lib.schema.literal/integer",-1120986283),new cljs.core.Keyword(null,"int","int",-1741416922));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","integer","dispatch-type/integer",1558418815),(function (_int){
return new cljs.core.Keyword("type","Integer","type/Integer",-638928316);
}));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","non-integer-real","metabase.lib.schema.literal/non-integer-real",1396696695),new cljs.core.Keyword(null,"double","double",884886883));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","number","dispatch-type/number",-594990247),(function (_non_integer_real){
return new cljs.core.Keyword("type","Float","type/Float",1261800143);
}));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","string","metabase.lib.schema.literal/string",-1434211409),new cljs.core.Keyword(null,"string","string",-1989541586));
metabase.lib.schema.literal.year_part = "\\d{4}";
metabase.lib.schema.literal.month_part = "\\d{2}";
metabase.lib.schema.literal.day_part = "\\d{2}";
metabase.lib.schema.literal.date_part = [metabase.lib.schema.literal.year_part,"-",metabase.lib.schema.literal.month_part,"-",metabase.lib.schema.literal.day_part].join('');
metabase.lib.schema.literal.hour_part = "\\d{2}";
metabase.lib.schema.literal.minutes_part = "\\d{2}";
metabase.lib.schema.literal.optional = (function metabase$lib$schema$literal$optional(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60747 = arguments.length;
var i__5770__auto___60748 = (0);
while(true){
if((i__5770__auto___60748 < len__5769__auto___60747)){
args__5775__auto__.push((arguments[i__5770__auto___60748]));

var G__60749 = (i__5770__auto___60748 + (1));
i__5770__auto___60748 = G__60749;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return metabase.lib.schema.literal.optional.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(metabase.lib.schema.literal.optional.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return ["(?:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,parts)),")?"].join('');
}));

(metabase.lib.schema.literal.optional.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metabase.lib.schema.literal.optional.cljs$lang$applyTo = (function (seq60734){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60734));
}));

metabase.lib.schema.literal.seconds_milliseconds_part = [":\\d{2}",metabase.lib.schema.literal.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\\.\\d{1,6}"], 0))].join('');
metabase.lib.schema.literal.time_part = [metabase.lib.schema.literal.hour_part,":",metabase.lib.schema.literal.minutes_part,metabase.lib.schema.literal.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.schema.literal.seconds_milliseconds_part], 0))].join('');
metabase.lib.schema.literal.date_time_part = [metabase.lib.schema.literal.date_part,"T",metabase.lib.schema.literal.time_part].join('');
metabase.lib.schema.literal.offset_part = ["(?:Z|(?:[+-]",metabase.lib.schema.literal.time_part,"))"].join('');
metabase.lib.schema.literal.local_date_regex = cljs.core.re_pattern(["^",metabase.lib.schema.literal.date_part,"$"].join(''));
metabase.lib.schema.literal.local_time_regex = cljs.core.re_pattern(["^",metabase.lib.schema.literal.time_part,"$"].join(''));
metabase.lib.schema.literal.offset_time_regex = cljs.core.re_pattern(["^",metabase.lib.schema.literal.time_part,metabase.lib.schema.literal.offset_part,"$"].join(''));
metabase.lib.schema.literal.local_datetime_regex = cljs.core.re_pattern(["^",metabase.lib.schema.literal.date_time_part,"$"].join(''));
metabase.lib.schema.literal.offset_datetime_regex = cljs.core.re_pattern(["^",metabase.lib.schema.literal.date_time_part,metabase.lib.schema.literal.offset_part,"$"].join(''));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","string.date","metabase.lib.schema.literal/string.date",1716358402),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"date string literal"], null),metabase.lib.schema.literal.local_date_regex], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","string.time","metabase.lib.schema.literal/string.time",1501090167),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"local time string literal"], null),metabase.lib.schema.literal.local_time_regex], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"offset time string literal"], null),metabase.lib.schema.literal.offset_time_regex], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","string.datetime","metabase.lib.schema.literal/string.datetime",-1597850940),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"local date time string literal"], null),metabase.lib.schema.literal.local_datetime_regex], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"offset date time string literal"], null),metabase.lib.schema.literal.offset_datetime_regex], null)], null));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","string","dispatch-type/string",171698561),(function (s){
var pred__60739 = malli.core.validate;
var expr__60740 = s;
if(cljs.core.truth_((pred__60739.cljs$core$IFn$_invoke$arity$2 ? pred__60739.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.schema.literal","string.datetime","metabase.lib.schema.literal/string.datetime",-1597850940),expr__60740) : pred__60739.call(null,new cljs.core.Keyword("metabase.lib.schema.literal","string.datetime","metabase.lib.schema.literal/string.datetime",-1597850940),expr__60740)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("type","Text","type/Text",603746827),null,new cljs.core.Keyword("type","DateTime","type/DateTime",352113310),null], null), null);
} else {
if(cljs.core.truth_((pred__60739.cljs$core$IFn$_invoke$arity$2 ? pred__60739.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.schema.literal","string.date","metabase.lib.schema.literal/string.date",1716358402),expr__60740) : pred__60739.call(null,new cljs.core.Keyword("metabase.lib.schema.literal","string.date","metabase.lib.schema.literal/string.date",1716358402),expr__60740)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("type","Date","type/Date",-690428629),null,new cljs.core.Keyword("type","Text","type/Text",603746827),null], null), null);
} else {
if(cljs.core.truth_((pred__60739.cljs$core$IFn$_invoke$arity$2 ? pred__60739.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.schema.literal","string.time","metabase.lib.schema.literal/string.time",1501090167),expr__60740) : pred__60739.call(null,new cljs.core.Keyword("metabase.lib.schema.literal","string.time","metabase.lib.schema.literal/string.time",1501090167),expr__60740)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("type","Time","type/Time",-814852413),null,new cljs.core.Keyword("type","Text","type/Text",603746827),null], null), null);
} else {
return new cljs.core.Keyword("type","Text","type/Text",603746827);
}
}
}
}));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","date","metabase.lib.schema.literal/date",-906463835),new cljs.core.Keyword("metabase.lib.schema.literal","string.date","metabase.lib.schema.literal/string.date",1716358402));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","time","metabase.lib.schema.literal/time",1928421901),new cljs.core.Keyword("metabase.lib.schema.literal","string.time","metabase.lib.schema.literal/string.time",1501090167));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","datetime","metabase.lib.schema.literal/datetime",985830761),new cljs.core.Keyword("metabase.lib.schema.literal","string.datetime","metabase.lib.schema.literal/string.datetime",-1597850940));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","temporal","metabase.lib.schema.literal/temporal",1227892305),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword("metabase.lib.schema.literal","date","metabase.lib.schema.literal/date",-906463835),new cljs.core.Keyword("metabase.lib.schema.literal","time","metabase.lib.schema.literal/time",1928421901),new cljs.core.Keyword("metabase.lib.schema.literal","datetime","metabase.lib.schema.literal/datetime",985830761)], null));
/**
 * Regex for a year-month literal string.
 */
metabase.lib.schema.literal.year_month_regex = cljs.core.re_pattern(["^",metabase.lib.schema.literal.year_part,"-",metabase.lib.schema.literal.month_part,"$"].join(''));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","string.year-month","metabase.lib.schema.literal/string.year-month",-1014149016),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"year-month string literal"], null),metabase.lib.schema.literal.year_month_regex], null));
/**
 * Regex for a year literal string.
 */
metabase.lib.schema.literal.year_regex = cljs.core.re_pattern(["^",metabase.lib.schema.literal.year_part,"$"].join(''));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","string.year","metabase.lib.schema.literal/string.year",-936788792),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"year string literal"], null),metabase.lib.schema.literal.year_regex], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.literal","value.options","metabase.lib.schema.literal/value.options",-1918568845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword("metabase.lib.schema.common","base-type","metabase.lib.schema.common/base-type",999524206)], null)], null)], null));
metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Value :value clause"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.literal","value.options","metabase.lib.schema.literal/value.options",-1918568845)], null),cljs.core.any_QMARK_], null));
Object.defineProperty(module.exports, "seconds_milliseconds_part", { enumerable: false, get: function() { return metabase.lib.schema.literal.seconds_milliseconds_part; } });
Object.defineProperty(module.exports, "year_part", { enumerable: false, get: function() { return metabase.lib.schema.literal.year_part; } });
Object.defineProperty(module.exports, "offset_time_regex", { enumerable: false, get: function() { return metabase.lib.schema.literal.offset_time_regex; } });
Object.defineProperty(module.exports, "date_time_part", { enumerable: false, get: function() { return metabase.lib.schema.literal.date_time_part; } });
Object.defineProperty(module.exports, "local_date_regex", { enumerable: false, get: function() { return metabase.lib.schema.literal.local_date_regex; } });
Object.defineProperty(module.exports, "month_part", { enumerable: false, get: function() { return metabase.lib.schema.literal.month_part; } });
Object.defineProperty(module.exports, "local_time_regex", { enumerable: false, get: function() { return metabase.lib.schema.literal.local_time_regex; } });
Object.defineProperty(module.exports, "minutes_part", { enumerable: false, get: function() { return metabase.lib.schema.literal.minutes_part; } });
Object.defineProperty(module.exports, "year_regex", { enumerable: false, get: function() { return metabase.lib.schema.literal.year_regex; } });
Object.defineProperty(module.exports, "year_month_regex", { enumerable: false, get: function() { return metabase.lib.schema.literal.year_month_regex; } });
Object.defineProperty(module.exports, "date_part", { enumerable: false, get: function() { return metabase.lib.schema.literal.date_part; } });
Object.defineProperty(module.exports, "hour_part", { enumerable: false, get: function() { return metabase.lib.schema.literal.hour_part; } });
Object.defineProperty(module.exports, "offset_part", { enumerable: false, get: function() { return metabase.lib.schema.literal.offset_part; } });
Object.defineProperty(module.exports, "offset_datetime_regex", { enumerable: false, get: function() { return metabase.lib.schema.literal.offset_datetime_regex; } });
Object.defineProperty(module.exports, "optional", { enumerable: false, get: function() { return metabase.lib.schema.literal.optional; } });
Object.defineProperty(module.exports, "time_part", { enumerable: false, get: function() { return metabase.lib.schema.literal.time_part; } });
Object.defineProperty(module.exports, "day_part", { enumerable: false, get: function() { return metabase.lib.schema.literal.day_part; } });
Object.defineProperty(module.exports, "local_datetime_regex", { enumerable: false, get: function() { return metabase.lib.schema.literal.local_datetime_regex; } });
//# sourceMappingURL=metabase.lib.schema.literal.js.map
