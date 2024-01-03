var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.shared.formatting.internal.date_builder.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.formatting.constants.js");

goog.provide('metabase.shared.formatting.constants');
/**
 * Months and weekdays should be abbreviated for `compact` output.
 */
metabase.shared.formatting.constants.abbreviated_QMARK_ = (function metabase$shared$formatting$constants$abbreviated_QMARK_(p__81583){
var map__81584 = p__81583;
var map__81584__$1 = cljs.core.__destructure_map(map__81584);
var output_density = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81584__$1,new cljs.core.Keyword(null,"output-density","output-density",105174015));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output_density,"compact");
});
/**
 * For `compact` and `condensed` output, ranges should be shortened if they're in the same month or year.
 *   Eg. `January 8 - 15, 2022`, or `January 28 - February 4, 2022`.
 */
metabase.shared.formatting.constants.condense_ranges_QMARK_ = (function metabase$shared$formatting$constants$condense_ranges_QMARK_(p__81585){
var map__81586 = p__81585;
var map__81586__$1 = cljs.core.__destructure_map(map__81586);
var output_density = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81586__$1,new cljs.core.Keyword(null,"output-density","output-density",105174015));
var fexpr__81588 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["compact",null,"condensed",null], null), null);
return (fexpr__81588.cljs$core$IFn$_invoke$arity$1 ? fexpr__81588.cljs$core$IFn$_invoke$arity$1(output_density) : fexpr__81588.call(null,output_density));
});
/**
 * The default date style, used in a few places in the JS code as well as by this formatting library.
 */
metabase.shared.formatting.constants.default_date_style = "MMMM D, YYYY";
/**
 * The default time style, used in a few places in the JS code as well as by this formatting library.
 */
metabase.shared.formatting.constants.default_time_style = "h:mm A";
/**
 * A map of string patterns for dates, to functions from options to the data structures consumed by
 *   [[metabase.shared.formatting.internal.date-builder]].
 * 
 *   Prefer passing the data structure directly, or use `:date_style`.
 */
metabase.shared.formatting.constants.known_date_styles = new cljs.core.PersistentArrayMap(null, 6, ["M/D/YYYY",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-d","month-d",-417018321),"/",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),"/",new cljs.core.Keyword(null,"year","year",335913393)], null),"D/M/YYYY",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),"/",new cljs.core.Keyword(null,"month-d","month-d",-417018321),"/",new cljs.core.Keyword(null,"year","year",335913393)], null),"YYYY/M/D",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"/",new cljs.core.Keyword(null,"month-d","month-d",-417018321),"/",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973)], null),"MMMM D, YYYY",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-full","month-full",-980003620)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),", ",new cljs.core.Keyword(null,"year","year",335913393)], null),"D MMMM, YYYY",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973)," ",new cljs.core.Keyword(null,"month-full","month-full",-980003620),", ",new cljs.core.Keyword(null,"year","year",335913393)], null),"dddd, MMMM D, YYYY",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-week-full","day-of-week-full",-1338599604),", ",new cljs.core.Keyword(null,"month-full","month-full",-980003620)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),", ",new cljs.core.Keyword(null,"year","year",335913393)], null)], null);
/**
 * A table of string patterns for dates to the data structures consumed by
 *   [[metabase.shared.formatting.internal.date-builder]].
 * 
 *   Don't rely on these - prefer passing the data structure directly, or use `:date_style`.
 */
metabase.shared.formatting.constants.known_time_styles = new cljs.core.PersistentArrayMap(null, 3, ["h:mm A",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-12-d","hour-12-d",-1761180644),":",new cljs.core.Keyword(null,"minute-dd","minute-dd",-53740577)," ",new cljs.core.Keyword(null,"am-pm","am-pm",-2014941402)], null),"HH:mm",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-24-dd","hour-24-dd",520374299),":",new cljs.core.Keyword(null,"minute-dd","minute-dd",-53740577)], null),"HH",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-24-dd","hour-24-dd",520374299)], null)], null);
/**
 * A table of string patterns for datetimes to the data structures consumed by
 *   [[metabase.shared.formatting.internal.date-builder]].
 * 
 *   Don't rely on these - prefer passing the data structure directly, or use `:date_style`.
 */
metabase.shared.formatting.constants.known_datetime_styles = new cljs.core.PersistentArrayMap(null, 1, ["M/D/YYYY, h:mm A",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date-format","date-format",-557196721),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.constants.known_date_styles,"M/D/YYYY"),new cljs.core.Keyword(null,"time-format","time-format",511469226),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.constants.known_time_styles,"h:mm A")], null)], null);
metabase.shared.formatting.constants.basic_map = (function metabase$shared$formatting$constants$basic_map(m){
return cljs.core.clj__GT_js(cljs.core.update_vals(m,cljs.core.constantly((1))));
});

/**
 * Vanilla JS object version of [[known-date-styles]] that can be used with keyof in TS.
 */
metabase.shared.formatting.constants.known_date_styles_js = metabase.shared.formatting.constants.basic_map(metabase.shared.formatting.constants.known_date_styles);
goog.exportSymbol('metabase.shared.formatting.constants.known_date_styles_js', metabase.shared.formatting.constants.known_date_styles_js);

/**
 * Vanilla JS object version of [[known-datetime-formats]] that can be used with keyof in TS.
 */
metabase.shared.formatting.constants.known_datetime_styles_js = metabase.shared.formatting.constants.basic_map(metabase.shared.formatting.constants.known_datetime_styles);
goog.exportSymbol('metabase.shared.formatting.constants.known_datetime_styles_js', metabase.shared.formatting.constants.known_datetime_styles_js);

/**
 * Vanilla JS object version of [[known-time-formats]] that can be used with keyof in TS.
 */
metabase.shared.formatting.constants.known_time_styles_js = metabase.shared.formatting.constants.basic_map(metabase.shared.formatting.constants.known_time_styles);
goog.exportSymbol('metabase.shared.formatting.constants.known_time_styles_js', metabase.shared.formatting.constants.known_time_styles_js);

/**
 * Vanilla JS object version of [[builder/format-strings]] that can be used with keyof in TS.
 */
metabase.shared.formatting.constants.format_strings_js = metabase.shared.formatting.constants.basic_map(metabase.shared.formatting.internal.date_builder.format_strings);
goog.exportSymbol('metabase.shared.formatting.constants.format_strings_js', metabase.shared.formatting.constants.format_strings_js);
Object.defineProperty(module.exports, "known_datetime_styles_js", { enumerable: true, get: function() { return metabase.shared.formatting.constants.known_datetime_styles_js; } });
Object.defineProperty(module.exports, "known_datetime_styles", { enumerable: true, get: function() { return metabase.shared.formatting.constants.known_datetime_styles; } });
Object.defineProperty(module.exports, "format_strings_js", { enumerable: true, get: function() { return metabase.shared.formatting.constants.format_strings_js; } });
Object.defineProperty(module.exports, "condense_ranges_QMARK_", { enumerable: false, get: function() { return metabase.shared.formatting.constants.condense_ranges_QMARK_; } });
Object.defineProperty(module.exports, "known_time_styles", { enumerable: true, get: function() { return metabase.shared.formatting.constants.known_time_styles; } });
Object.defineProperty(module.exports, "default_time_style", { enumerable: true, get: function() { return metabase.shared.formatting.constants.default_time_style; } });
Object.defineProperty(module.exports, "known_date_styles", { enumerable: true, get: function() { return metabase.shared.formatting.constants.known_date_styles; } });
Object.defineProperty(module.exports, "abbreviated_QMARK_", { enumerable: false, get: function() { return metabase.shared.formatting.constants.abbreviated_QMARK_; } });
Object.defineProperty(module.exports, "default_date_style", { enumerable: true, get: function() { return metabase.shared.formatting.constants.default_date_style; } });
Object.defineProperty(module.exports, "known_time_styles_js", { enumerable: true, get: function() { return metabase.shared.formatting.constants.known_time_styles_js; } });
Object.defineProperty(module.exports, "basic_map", { enumerable: false, get: function() { return metabase.shared.formatting.constants.basic_map; } });
Object.defineProperty(module.exports, "known_date_styles_js", { enumerable: true, get: function() { return metabase.shared.formatting.constants.known_date_styles_js; } });
//# sourceMappingURL=metabase.shared.formatting.constants.js.map
