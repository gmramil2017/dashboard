var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.temporal_bucketing.js");

goog.provide('metabase.lib.schema.temporal_bucketing');
/**
 * Units that you can EXTRACT from a date or datetime. These return integers in temporal bucketing expressions.
 *   The front end shows the options in this order.
 */
metabase.lib.schema.temporal_bucketing.ordered_date_extraction_units = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),new cljs.core.Keyword(null,"day-of-year","day-of-year",478600113),new cljs.core.Keyword(null,"week-of-year","week-of-year",-910114435),new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),new cljs.core.Keyword(null,"quarter-of-year","quarter-of-year",-472803491),new cljs.core.Keyword(null,"year","year",335913393)], null);
/**
 * Units that you can EXTRACT from a date or datetime. These return integers in temporal bucketing expressions.
 */
metabase.lib.schema.temporal_bucketing.date_extraction_units = cljs.core.set(metabase.lib.schema.temporal_bucketing.ordered_date_extraction_units);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date.extract","metabase.lib.schema.temporal-bucketing/unit.date.extract",1595055425),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid date extraction unit"], null)], null),metabase.lib.schema.temporal_bucketing.date_extraction_units));
/**
 * Units that you can TRUNCATE a date or datetime to. In temporal bucketing expressions these return a `:type/Date`.
 *   The front end shows the options in this order.
 */
metabase.lib.schema.temporal_bucketing.ordered_date_truncation_units = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"week","week",-1326473278),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"quarter","quarter",-508147616),new cljs.core.Keyword(null,"year","year",335913393)], null);
/**
 * Units that you can TRUNCATE a date or datetime to. In temporal bucketing expressions these return a `:type/Date`.
 */
metabase.lib.schema.temporal_bucketing.date_truncation_units = cljs.core.set(metabase.lib.schema.temporal_bucketing.ordered_date_truncation_units);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date.truncate","metabase.lib.schema.temporal-bucketing/unit.date.truncate",1199064479),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid date truncation unit"], null)], null),metabase.lib.schema.temporal_bucketing.date_truncation_units));
/**
 * Valid date or datetime bucketing units for either truncation or extraction operations.
 *   The front end shows the options in this order.
 */
metabase.lib.schema.temporal_bucketing.ordered_date_bucketing_units = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.temporal_bucketing.ordered_date_truncation_units,metabase.lib.schema.temporal_bucketing.ordered_date_extraction_units));
/**
 * Valid date or datetime bucketing units for either truncation or extraction operations.
 */
metabase.lib.schema.temporal_bucketing.date_bucketing_units = cljs.core.set(metabase.lib.schema.temporal_bucketing.ordered_date_bucketing_units);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date","metabase.lib.schema.temporal-bucketing/unit.date",1876937510),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid date bucketing unit"], null)], null),metabase.lib.schema.temporal_bucketing.date_bucketing_units));
/**
 * Units that you can EXTRACT from a time or datetime. These return integers in temporal bucketing expressions.
 *   The front end shows the options in this order.
 */
metabase.lib.schema.temporal_bucketing.ordered_time_extraction_units = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minute-of-hour","minute-of-hour",1903220478),new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099)], null);
/**
 * Units that you can EXTRACT from a time or datetime. These return integers in temporal bucketing expressions.
 */
metabase.lib.schema.temporal_bucketing.time_extraction_units = cljs.core.set(metabase.lib.schema.temporal_bucketing.ordered_time_extraction_units);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.time.extract","metabase.lib.schema.temporal-bucketing/unit.time.extract",-456342719),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid time extraction unit"], null)], null),metabase.lib.schema.temporal_bucketing.time_extraction_units));
/**
 * Units you can TRUNCATE a time or datetime to. These return the same type as the expression being bucketed in temporal
 *   bucketing expressions. The front end shows the options in this order.
 */
metabase.lib.schema.temporal_bucketing.ordered_time_truncation_units = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millisecond","millisecond",-540123566),new cljs.core.Keyword(null,"second","second",-444702010),new cljs.core.Keyword(null,"minute","minute",-642875969),new cljs.core.Keyword(null,"hour","hour",-555989214)], null);
/**
 * Units you can TRUNCATE a time or datetime to. These return the same type as the expression being bucketed in temporal
 *   bucketing expressions.
 */
metabase.lib.schema.temporal_bucketing.time_truncation_units = cljs.core.set(metabase.lib.schema.temporal_bucketing.ordered_time_truncation_units);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.time.truncate","metabase.lib.schema.temporal-bucketing/unit.time.truncate",-948820335),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid time truncation unit"], null)], null),metabase.lib.schema.temporal_bucketing.time_truncation_units));
/**
 * Valid time bucketing units for either truncation or extraction operations.
 *   The front end shows the options in this order.
 */
metabase.lib.schema.temporal_bucketing.ordered_time_bucketing_units = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"second","second",-444702010),null,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566),null], null), null)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.temporal_bucketing.ordered_time_truncation_units,metabase.lib.schema.temporal_bucketing.ordered_time_extraction_units));
/**
 * Valid time bucketing units for either truncation or extraction operations.
 */
metabase.lib.schema.temporal_bucketing.time_bucketing_units = cljs.core.set(metabase.lib.schema.temporal_bucketing.ordered_time_extraction_units);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.time","metabase.lib.schema.temporal-bucketing/unit.time",713582593),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid time bucketing unit"], null)], null),metabase.lib.schema.temporal_bucketing.time_bucketing_units));
/**
 * Valid datetime bucketing units for either truncation or extraction operations.
 *   The front end shows the options in this order.
 */
metabase.lib.schema.temporal_bucketing.ordered_datetime_bucketing_units = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"second","second",-444702010),null,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566),null], null), null)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.schema.temporal_bucketing.ordered_time_truncation_units,metabase.lib.schema.temporal_bucketing.ordered_date_truncation_units,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.schema.temporal_bucketing.ordered_time_extraction_units,metabase.lib.schema.temporal_bucketing.ordered_date_extraction_units], 0)));
/**
 * Valid datetime bucketing units for either truncation or extraction operations.
 */
metabase.lib.schema.temporal_bucketing.datetime_bucketing_units = cljs.core.set(metabase.lib.schema.temporal_bucketing.ordered_datetime_bucketing_units);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time","metabase.lib.schema.temporal-bucketing/unit.date-time",1924841408),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid datetime bucketing unit"], null)], null),metabase.lib.schema.temporal_bucketing.datetime_bucketing_units));
/**
 * This is the same as [[datetime-bucketing-units]], but also includes `:default`.
 */
metabase.lib.schema.temporal_bucketing.temporal_bucketing_units = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.temporal_bucketing.datetime_bucketing_units,new cljs.core.Keyword(null,"default","default",-1987822328));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit","metabase.lib.schema.temporal-bucketing/unit",1808010880),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid temporal bucketing unit"], null)], null),metabase.lib.schema.temporal_bucketing.temporal_bucketing_units));
/**
 * Valid TRUNCATION units for a datetime.
 */
metabase.lib.schema.temporal_bucketing.datetime_truncation_units = clojure.set.union.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.temporal_bucketing.date_truncation_units,metabase.lib.schema.temporal_bucketing.time_truncation_units);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time.truncate","metabase.lib.schema.temporal-bucketing/unit.date-time.truncate",686665771),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid datetime truncation unit"], null)], null),metabase.lib.schema.temporal_bucketing.datetime_truncation_units));
/**
 * Valid EXTRACTION units for a datetime. Extraction units return integers!
 */
metabase.lib.schema.temporal_bucketing.datetime_extraction_units = clojure.set.union.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.temporal_bucketing.date_extraction_units,metabase.lib.schema.temporal_bucketing.time_extraction_units);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time.extract","metabase.lib.schema.temporal-bucketing/unit.date-time.extract",1230935001),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid datetime extraction unit"], null)], null),metabase.lib.schema.temporal_bucketing.datetime_extraction_units));
/**
 * Date units that are valid in intervals or clauses like `:datetime-add`. This is a superset
 *   of [[date-truncation-units]].
 */
metabase.lib.schema.temporal_bucketing.date_interval_units = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.temporal_bucketing.date_truncation_units,new cljs.core.Keyword(null,"year","year",335913393));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date.interval","metabase.lib.schema.temporal-bucketing/unit.date.interval",-1463811525),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid date interval unit"], null)], null),metabase.lib.schema.temporal_bucketing.date_interval_units));
/**
 * Time units that are valid in intervals or clauses like `:datetime-add`. Currently the same
 *   as [[time-truncation-units]].
 */
metabase.lib.schema.temporal_bucketing.time_interval_units = metabase.lib.schema.temporal_bucketing.time_truncation_units;
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.time.interval","metabase.lib.schema.temporal-bucketing/unit.time.interval",-718964325),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid time interval unit"], null)], null),metabase.lib.schema.temporal_bucketing.time_interval_units));
/**
 * Units valid in intervals or clauses like `:datetime-add` for datetimes.
 */
metabase.lib.schema.temporal_bucketing.datetime_interval_units = clojure.set.union.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.temporal_bucketing.date_interval_units,metabase.lib.schema.temporal_bucketing.time_interval_units);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time.interval","metabase.lib.schema.temporal-bucketing/unit.date-time.interval",659301368),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid datetime interval unit"], null)], null),metabase.lib.schema.temporal_bucketing.datetime_interval_units));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","option","metabase.lib.schema.temporal-bucketing/option",-1756789401),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit","metabase.lib.schema.temporal-bucketing/unit",1808010880)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null));
Object.defineProperty(module.exports, "date_extraction_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.date_extraction_units; } });
Object.defineProperty(module.exports, "date_interval_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.date_interval_units; } });
Object.defineProperty(module.exports, "ordered_date_truncation_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.ordered_date_truncation_units; } });
Object.defineProperty(module.exports, "datetime_truncation_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.datetime_truncation_units; } });
Object.defineProperty(module.exports, "datetime_extraction_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.datetime_extraction_units; } });
Object.defineProperty(module.exports, "time_extraction_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.time_extraction_units; } });
Object.defineProperty(module.exports, "ordered_time_bucketing_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.ordered_time_bucketing_units; } });
Object.defineProperty(module.exports, "datetime_bucketing_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.datetime_bucketing_units; } });
Object.defineProperty(module.exports, "date_bucketing_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.date_bucketing_units; } });
Object.defineProperty(module.exports, "datetime_interval_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.datetime_interval_units; } });
Object.defineProperty(module.exports, "ordered_date_extraction_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.ordered_date_extraction_units; } });
Object.defineProperty(module.exports, "time_bucketing_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.time_bucketing_units; } });
Object.defineProperty(module.exports, "ordered_time_truncation_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.ordered_time_truncation_units; } });
Object.defineProperty(module.exports, "time_interval_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.time_interval_units; } });
Object.defineProperty(module.exports, "temporal_bucketing_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.temporal_bucketing_units; } });
Object.defineProperty(module.exports, "time_truncation_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.time_truncation_units; } });
Object.defineProperty(module.exports, "ordered_time_extraction_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.ordered_time_extraction_units; } });
Object.defineProperty(module.exports, "ordered_date_bucketing_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.ordered_date_bucketing_units; } });
Object.defineProperty(module.exports, "date_truncation_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.date_truncation_units; } });
Object.defineProperty(module.exports, "ordered_datetime_bucketing_units", { enumerable: false, get: function() { return metabase.lib.schema.temporal_bucketing.ordered_datetime_bucketing_units; } });
//# sourceMappingURL=metabase.lib.schema.temporal_bucketing.js.map
