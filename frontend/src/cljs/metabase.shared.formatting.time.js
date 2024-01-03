var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.shared.formatting.date.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.formatting.time.js");

goog.provide('metabase.shared.formatting.time');
/**
 * Formats a give time (an hour number, a local time string, or a platform-specific local time object) in the
 *   idiomatic style for this locale.
 * 
 *   For example, `"7:45 PM"` in English, `"19h45"` in French.
 */
metabase.shared.formatting.time.format_time = (function metabase$shared$formatting$time$format_time(value){
var t = metabase.shared.util.time.coerce_to_time(value);
if(cljs.core.truth_(metabase.shared.util.time.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0)))){
return t.format("LT");
} else {
return null;
}
});
/**
 * Formats the given time (as a string or platform-specific local time or datetime object) based on the `:unit` and
 *   other options, as is done for date formatting.
 */
metabase.shared.formatting.time.format_time_with_unit = (function metabase$shared$formatting$time$format_time_with_unit(value,options){
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.shared.formatting.internal.date_options.prepare_options(options),new cljs.core.Keyword(null,"date-enabled","date-enabled",1961030769),false);
return metabase.shared.formatting.date.format_datetime_with_unit(value,options__$1);
});
Object.defineProperty(module.exports, "format_time", { enumerable: true, get: function() { return metabase.shared.formatting.time.format_time; } });
Object.defineProperty(module.exports, "format_time_with_unit", { enumerable: true, get: function() { return metabase.shared.formatting.time.format_time_with_unit; } });
//# sourceMappingURL=metabase.shared.formatting.time.js.map
