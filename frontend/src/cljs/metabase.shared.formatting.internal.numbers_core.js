var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.shared.util.currency.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.formatting.internal.numbers_core.js");

goog.provide('metabase.shared.formatting.internal.numbers_core');
metabase.shared.formatting.internal.numbers_core.default_decimal_places = (function metabase$shared$formatting$internal$numbers_core$default_decimal_places(p__79615){
var map__79616 = p__79615;
var map__79616__$1 = cljs.core.__destructure_map(map__79616);
var currency = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79616__$1,new cljs.core.Keyword(null,"currency","currency",-898327568));
var number_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79616__$1,new cljs.core.Keyword(null,"number-style","number-style",-1326567402));
if(cljs.core.truth_((function (){var and__5043__auto__ = currency;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number_style,"currency");
} else {
return and__5043__auto__;
}
})())){
var places = new cljs.core.Keyword(null,"decimal_digits","decimal_digits",1175939265).cljs$core$IFn$_invoke$arity$1((function (){var G__79622 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(currency);
var fexpr__79621 = cljs.core.deref(metabase.shared.util.currency.currency_map);
return (fexpr__79621.cljs$core$IFn$_invoke$arity$1 ? fexpr__79621.cljs$core$IFn$_invoke$arity$1(G__79622) : fexpr__79621.call(null,G__79622));
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"minimum-fraction-digits","minimum-fraction-digits",994355100),places,new cljs.core.Keyword(null,"maximum-fraction-digits","maximum-fraction-digits",1232463505),places], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maximum-fraction-digits","maximum-fraction-digits",1232463505),(2)], null);
}
});
/**
 * Transforms input options with defaults and other adjustments.
 *   Defaults:
 *   - `:maximum-fraction-digits` is 2 if not specified
 *   - BUT if `:currency` is set, `:minimum-fraction-digits = :maximum-fraction-digits = (:decimal_digits currency)`
 * 
 *   Adjustments:
 *   - :decimals is dropped, and both min and max fraction-digits are set to that value.
 */
metabase.shared.formatting.internal.numbers_core.prep_options = (function metabase$shared$formatting$internal$numbers_core$prep_options(options){
var expand_decimals = (function metabase$shared$formatting$internal$numbers_core$prep_options_$_expand_decimals(opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"decimals","decimals",1715096484)),new cljs.core.Keyword(null,"maximum-fraction-digits","maximum-fraction-digits",1232463505),new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(options),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"minimum-fraction-digits","minimum-fraction-digits",994355100),new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(options)], 0));
});
var G__79624 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.formatting.internal.numbers_core.default_decimal_places(options),options], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(options))){
return expand_decimals(G__79624);
} else {
return G__79624;
}
});
/**
 * A Unicode non-breaking space character.
 */
metabase.shared.formatting.internal.numbers_core.non_breaking_space = "\u00A0";

/**
 * @interface
 */
metabase.shared.formatting.internal.numbers_core.NumberFormatter = function(){};

var metabase$shared$formatting$internal$numbers_core$NumberFormatter$format_number_basic$dyn_79650 = (function (this$,number){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (metabase.shared.formatting.internal.numbers_core.format_number_basic[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,number) : m__5394__auto__.call(null,this$,number));
} else {
var m__5392__auto__ = (metabase.shared.formatting.internal.numbers_core.format_number_basic["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,number) : m__5392__auto__.call(null,this$,number));
} else {
throw cljs.core.missing_protocol("NumberFormatter.format-number-basic",this$);
}
}
});
/**
 * Returns a String that represents the number in this format.
 */
metabase.shared.formatting.internal.numbers_core.format_number_basic = (function metabase$shared$formatting$internal$numbers_core$format_number_basic(this$,number){
if((((!((this$ == null)))) && ((!((this$.metabase$shared$formatting$internal$numbers_core$NumberFormatter$format_number_basic$arity$2 == null)))))){
return this$.metabase$shared$formatting$internal$numbers_core$NumberFormatter$format_number_basic$arity$2(this$,number);
} else {
return metabase$shared$formatting$internal$numbers_core$NumberFormatter$format_number_basic$dyn_79650(this$,number);
}
});

var metabase$shared$formatting$internal$numbers_core$NumberFormatter$split_exponent$dyn_79651 = (function (this$,formatted){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (metabase.shared.formatting.internal.numbers_core.split_exponent[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,formatted) : m__5394__auto__.call(null,this$,formatted));
} else {
var m__5392__auto__ = (metabase.shared.formatting.internal.numbers_core.split_exponent["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,formatted) : m__5392__auto__.call(null,this$,formatted));
} else {
throw cljs.core.missing_protocol("NumberFormatter.split-exponent",this$);
}
}
});
/**
 * Given a scientific notation string, split it at the locale-dependent exponent.
 *                Returns a map `{:mantissa "123" :exponent "+4"}`.
 */
metabase.shared.formatting.internal.numbers_core.split_exponent = (function metabase$shared$formatting$internal$numbers_core$split_exponent(this$,formatted){
if((((!((this$ == null)))) && ((!((this$.metabase$shared$formatting$internal$numbers_core$NumberFormatter$split_exponent$arity$2 == null)))))){
return this$.metabase$shared$formatting$internal$numbers_core$NumberFormatter$split_exponent$arity$2(this$,formatted);
} else {
return metabase$shared$formatting$internal$numbers_core$NumberFormatter$split_exponent$dyn_79651(this$,formatted);
}
});

var metabase$shared$formatting$internal$numbers_core$NumberFormatter$wrap_currency$dyn_79654 = (function (this$,text){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (metabase.shared.formatting.internal.numbers_core.wrap_currency[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,text) : m__5394__auto__.call(null,this$,text));
} else {
var m__5392__auto__ = (metabase.shared.formatting.internal.numbers_core.wrap_currency["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,text) : m__5392__auto__.call(null,this$,text));
} else {
throw cljs.core.missing_protocol("NumberFormatter.wrap-currency",this$);
}
}
});
/**
 * Given an opaque string, wraps it with the currency prefix/suffix for this locale.
 */
metabase.shared.formatting.internal.numbers_core.wrap_currency = (function metabase$shared$formatting$internal$numbers_core$wrap_currency(this$,text){
if((((!((this$ == null)))) && ((!((this$.metabase$shared$formatting$internal$numbers_core$NumberFormatter$wrap_currency$arity$2 == null)))))){
return this$.metabase$shared$formatting$internal$numbers_core$NumberFormatter$wrap_currency$arity$2(this$,text);
} else {
return metabase$shared$formatting$internal$numbers_core$NumberFormatter$wrap_currency$dyn_79654(this$,text);
}
});

Object.defineProperty(module.exports, "default_decimal_places", { enumerable: false, get: function() { return metabase.shared.formatting.internal.numbers_core.default_decimal_places; } });
Object.defineProperty(module.exports, "prep_options", { enumerable: false, get: function() { return metabase.shared.formatting.internal.numbers_core.prep_options; } });
Object.defineProperty(module.exports, "non_breaking_space", { enumerable: false, get: function() { return metabase.shared.formatting.internal.numbers_core.non_breaking_space; } });
Object.defineProperty(module.exports, "NumberFormatter", { enumerable: false, get: function() { return metabase.shared.formatting.internal.numbers_core.NumberFormatter; } });
Object.defineProperty(module.exports, "format_number_basic", { enumerable: false, get: function() { return metabase.shared.formatting.internal.numbers_core.format_number_basic; } });
Object.defineProperty(module.exports, "split_exponent", { enumerable: false, get: function() { return metabase.shared.formatting.internal.numbers_core.split_exponent; } });
Object.defineProperty(module.exports, "wrap_currency", { enumerable: false, get: function() { return metabase.shared.formatting.internal.numbers_core.wrap_currency; } });
//# sourceMappingURL=metabase.shared.formatting.internal.numbers_core.js.map
