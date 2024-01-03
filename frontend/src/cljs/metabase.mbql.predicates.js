var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.mbql.schema.js");
require("./schema.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.mbql.predicates.js");

goog.provide('metabase.mbql.predicates');
/**
 * Is `unit` a valid datetime bucketing unit?
 */
metabase.mbql.predicates.DateTimeUnit_QMARK_ = cljs.core.complement(schema.core.checker(metabase.mbql.schema.DateTimeUnit));
/**
 * Is `unit` a valid datetime bucketing unit?
 */
metabase.mbql.predicates.TimezoneId_QMARK_ = cljs.core.complement(schema.core.checker(metabase.mbql.schema.TimezoneId));
/**
 * Is this a valid Aggregation clause?
 */
metabase.mbql.predicates.Aggregation_QMARK_ = cljs.core.complement(schema.core.checker(metabase.mbql.schema.Aggregation));
/**
 * Is this a valid Field clause?
 */
metabase.mbql.predicates.Field_QMARK_ = cljs.core.complement(schema.core.checker(metabase.mbql.schema.Field));
/**
 * Is this a valid `:filter` clause?
 */
metabase.mbql.predicates.Filter_QMARK_ = cljs.core.complement(schema.core.checker(metabase.mbql.schema.Filter));
/**
 * Is this a valid DatetimeExpression clause?
 */
metabase.mbql.predicates.DatetimeExpression_QMARK_ = cljs.core.complement(schema.core.checker(metabase.mbql.schema.DatetimeExpression));
/**
 * Is this a something that is valid as a top-level expression definition?
 */
metabase.mbql.predicates.FieldOrExpressionDef_QMARK_ = cljs.core.complement(schema.core.checker(metabase.mbql.schema.FieldOrExpressionDef));
Object.defineProperty(module.exports, "DateTimeUnit_QMARK_", { enumerable: false, get: function() { return metabase.mbql.predicates.DateTimeUnit_QMARK_; } });
Object.defineProperty(module.exports, "TimezoneId_QMARK_", { enumerable: false, get: function() { return metabase.mbql.predicates.TimezoneId_QMARK_; } });
Object.defineProperty(module.exports, "Aggregation_QMARK_", { enumerable: false, get: function() { return metabase.mbql.predicates.Aggregation_QMARK_; } });
Object.defineProperty(module.exports, "Field_QMARK_", { enumerable: false, get: function() { return metabase.mbql.predicates.Field_QMARK_; } });
Object.defineProperty(module.exports, "Filter_QMARK_", { enumerable: false, get: function() { return metabase.mbql.predicates.Filter_QMARK_; } });
Object.defineProperty(module.exports, "DatetimeExpression_QMARK_", { enumerable: false, get: function() { return metabase.mbql.predicates.DatetimeExpression_QMARK_; } });
Object.defineProperty(module.exports, "FieldOrExpressionDef_QMARK_", { enumerable: false, get: function() { return metabase.mbql.predicates.FieldOrExpressionDef_QMARK_; } });
//# sourceMappingURL=metabase.mbql.predicates.js.map
