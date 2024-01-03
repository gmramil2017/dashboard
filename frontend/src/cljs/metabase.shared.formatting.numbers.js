var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.shared.formatting.internal.numbers.js");
require("./metabase.shared.formatting.internal.numbers_core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.formatting.numbers.js");

goog.provide('metabase.shared.formatting.numbers');
/**
 * Extra defaults that are mixed in when formatted a currency value in compact mode.
 */
metabase.shared.formatting.numbers.compact_currency_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"currency-style","currency-style",-1629734318),"symbol"], null);
/**
 * Extra defaults that are mixed in when formatted a currency value in compact mode.
 */
metabase.shared.formatting.numbers.compact_currency_options_js = cljs.core.clj__GT_js(metabase.shared.formatting.numbers.compact_currency_options);
metabase.shared.formatting.numbers.display_compact_decimals_cutoff = (1000);
metabase.shared.formatting.numbers.humanized_powers = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000000000000),"T"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000000000),"B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000000),"M"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),"k"], null)], null);
metabase.shared.formatting.numbers.format_number_compact_basic = (function metabase$shared$formatting$numbers$format_number_compact_basic(number,options){
var options__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"compact","compact",-348732150),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"number-style","number-style",-1326567402)], 0));
var abs_value = cljs.core.abs(number);
if((number === (0))){
return "0";
} else {
if((abs_value < metabase.shared.formatting.numbers.display_compact_decimals_cutoff)){
return (metabase.shared.formatting.numbers.format_number.cljs$core$IFn$_invoke$arity$2 ? metabase.shared.formatting.numbers.format_number.cljs$core$IFn$_invoke$arity$2(number,options__$1) : metabase.shared.formatting.numbers.format_number.call(null,number,options__$1));
} else {
var vec__79784 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__79782_SHARP_){
return (abs_value >= cljs.core.first(p1__79782_SHARP_));
}),metabase.shared.formatting.numbers.humanized_powers));
var power = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79784,(0),null);
var suffix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79784,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__79791 = (number / power);
var G__79792 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"minimum-fraction-digits","minimum-fraction-digits",994355100),(1),new cljs.core.Keyword(null,"maximum-fraction-digits","maximum-fraction-digits",1232463505),(1)], null)], 0));
return (metabase.shared.formatting.numbers.format_number.cljs$core$IFn$_invoke$arity$2 ? metabase.shared.formatting.numbers.format_number.cljs$core$IFn$_invoke$arity$2(G__79791,G__79792) : metabase.shared.formatting.numbers.format_number.call(null,G__79791,G__79792));
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');

}
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.shared !== 'undefined') && (typeof metabase.shared.formatting !== 'undefined') && (typeof metabase.shared.formatting.numbers !== 'undefined') && (typeof metabase.shared.formatting.numbers.format_number_compact_STAR_ !== 'undefined')){
} else {
metabase.shared.formatting.numbers.format_number_compact_STAR_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79794 = cljs.core.get_global_hierarchy;
return (fexpr__79794.cljs$core$IFn$_invoke$arity$0 ? fexpr__79794.cljs$core$IFn$_invoke$arity$0() : fexpr__79794.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.shared.formatting.numbers","format-number-compact*"),(function (_,p__79795){
var map__79796 = p__79795;
var map__79796__$1 = cljs.core.__destructure_map(map__79796);
var number_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79796__$1,new cljs.core.Keyword(null,"number-style","number-style",-1326567402));
return number_style;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.shared.formatting.numbers.format_number_compact_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (number,options){
return metabase.shared.formatting.numbers.format_number_compact_basic(number,options);
}));
metabase.shared.formatting.numbers.format_number_compact_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"percent",(function (number,options){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.formatting.numbers.format_number_compact_basic(((100) * number),options)),"%"].join('');
}));
metabase.shared.formatting.numbers.format_number_compact_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"currency",(function (number,options){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,metabase.shared.formatting.numbers.compact_currency_options], 0));
var formatter = metabase.shared.formatting.internal.numbers.number_formatter_for_options(options__$1);
if((cljs.core.abs(number) < metabase.shared.formatting.numbers.display_compact_decimals_cutoff)){
return formatter.metabase$shared$formatting$internal$numbers_core$NumberFormatter$format_number_basic$arity$2(null,number);
} else {
return formatter.metabase$shared$formatting$internal$numbers_core$NumberFormatter$wrap_currency$arity$2(null,metabase.shared.formatting.numbers.format_number_compact_basic(number,options__$1));
}
}));
metabase.shared.formatting.numbers.format_number_compact_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"scientific",(function (number,options){
return metabase.shared.formatting.internal.numbers.format_number_scientific(number,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maximum-fraction-digits","maximum-fraction-digits",1232463505),(1),new cljs.core.Keyword(null,"minimum-fraction-digits","minimum-fraction-digits",994355100),(1)], null)], 0)));
}));
metabase.shared.formatting.numbers.format_number_compact = (function metabase$shared$formatting$numbers$format_number_compact(number,options){
return metabase.shared.formatting.numbers.format_number_compact_STAR_.cljs$core$IFn$_invoke$arity$2(number,metabase.shared.formatting.internal.numbers_core.prep_options(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"compact","compact",-348732150))));
});
metabase.shared.formatting.numbers.format_number_standard = (function metabase$shared$formatting$numbers$format_number_standard(number,options){
var options__$1 = metabase.shared.formatting.internal.numbers_core.prep_options(options);
var nf = (cljs.core.truth_(new cljs.core.Keyword(null,"number-formatter","number-formatter",929788393).cljs$core$IFn$_invoke$arity$1(options__$1))?new cljs.core.Keyword(null,"number-formatter","number-formatter",929788393).cljs$core$IFn$_invoke$arity$1(options__$1):((((cljs.core.not(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(options__$1))) && (((cljs.core.not(new cljs.core.Keyword(null,"minimum-fraction-digits","minimum-fraction-digits",994355100).cljs$core$IFn$_invoke$arity$1(options__$1))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number-style","number-style",-1326567402).cljs$core$IFn$_invoke$arity$1(options__$1),"currency")) && ((cljs.core.abs(number) < ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number-style","number-style",-1326567402).cljs$core$IFn$_invoke$arity$1(options__$1),"percent"))?0.01:(1))))))))))?metabase.shared.formatting.internal.numbers.number_formatter_for_options(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$1,new cljs.core.Keyword(null,"maximum-fraction-digits","maximum-fraction-digits",1232463505)),new cljs.core.Keyword(null,"maximum-significant-digits","maximum-significant-digits",599508904),(function (){var x__5130__auto__ = (2);
var y__5131__auto__ = new cljs.core.Keyword(null,"minimum-significant-digits","minimum-significant-digits",-1841461464).cljs$core$IFn$_invoke$arity$2(options__$1,(0));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})())):metabase.shared.formatting.internal.numbers.number_formatter_for_options(options__$1)
));
return metabase.shared.formatting.internal.numbers_core.format_number_basic(nf,number);
});
/**
 * Formats a number according to a map of options.
 *   The options:
 *   - `:compact` boolean: Set true for human-readable contractions like $2.4M rather than $2,413,326.98.
 *   - `:currency` string: The ISO currency code, eg. USD, RMB, EUR. **Required** when `:number-style "currency"`.
 *   - `:currency-style` "symbol" | "code" | "name": Sets how the currency unit is displayed. Default is "symbol".
 *   - `:maximum-fraction-digits` number: Show at most this many decimal places. Default 2.
 *   - `:minimum-fraction-digits` number: Show at least this many decimal places. Default 0, or 2 for currencies.
 *   - `:minimum-integer-digits` number: Show at least this many integer digits. Default 1.
 *   - `:maximum-significant-digits` number: Show at most this many significant figures. Default not set; no extra rounding.
 *   - `:minimum-significant-digits` number: Show at least this many significant figures. Default not set; no padding.
 *   - `:negative-in-parentheses` boolean: True wraps negative values in parentheses; false (the default) uses minus signs.
 *   - `:number-serpators` string: A two-character string "ab" where `a` is the decimal symbol and `b` is the grouping.
 *  Default is American-style ".,".
 *   - `:number-style` "currency" | "decimal" | "scientific" | "percent": The fundamental type to display.
 *    - "currency" renders as eg. "$123.45" based on the `:currency` value.
 *    - "percent" renders eg. 0.432 as "43.2%".
 *    - "scientific" renders in scientific notation with 1 integer digit: eg. 0.00432 as "4.32e-3".
 *    - "decimal" (the default) is basic numeric notation.
 *   - `:scale` number: Gives a factor by which to multiply the value before rendering it.
 */
metabase.shared.formatting.numbers.format_number = (function metabase$shared$formatting$numbers$format_number(number,options){
var map__79804 = metabase.util.normalize_map(options);
var map__79804__$1 = cljs.core.__destructure_map(map__79804);
var options__$1 = map__79804__$1;
var compact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79804__$1,new cljs.core.Keyword(null,"compact","compact",-348732150));
var negative_in_parentheses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79804__$1,new cljs.core.Keyword(null,"negative-in-parentheses","negative-in-parentheses",-1676084141));
var number_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79804__$1,new cljs.core.Keyword(null,"number-style","number-style",-1326567402));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79804__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
if(cljs.core.truth_((function (){var and__5043__auto__ = scale;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.NaN_QMARK_(scale)));
} else {
return and__5043__auto__;
}
})())){
var G__79809 = (scale * number);
var G__79810 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
return (metabase.shared.formatting.numbers.format_number.cljs$core$IFn$_invoke$arity$2 ? metabase.shared.formatting.numbers.format_number.cljs$core$IFn$_invoke$arity$2(G__79809,G__79810) : metabase.shared.formatting.numbers.format_number.call(null,G__79809,G__79810));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = (number < (0));
if(and__5043__auto__){
return negative_in_parentheses;
} else {
return and__5043__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__79813 = (- number);
var G__79814 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.Keyword(null,"negative-in-parentheses","negative-in-parentheses",-1676084141),false);
return (metabase.shared.formatting.numbers.format_number.cljs$core$IFn$_invoke$arity$2 ? metabase.shared.formatting.numbers.format_number.cljs$core$IFn$_invoke$arity$2(G__79813,G__79814) : metabase.shared.formatting.numbers.format_number.call(null,G__79813,G__79814));
})()),")"].join('');
} else {
if(cljs.core.truth_(compact)){
return metabase.shared.formatting.numbers.format_number_compact(number,options__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(number_style),new cljs.core.Keyword(null,"scientific","scientific",316285837))){
return metabase.shared.formatting.internal.numbers.format_number_scientific(number,options__$1);
} else {
return metabase.shared.formatting.numbers.format_number_standard(number,options__$1);

}
}
}
}
});
Object.defineProperty(module.exports, "format_number_compact_basic", { enumerable: false, get: function() { return metabase.shared.formatting.numbers.format_number_compact_basic; } });
Object.defineProperty(module.exports, "compact_currency_options", { enumerable: false, get: function() { return metabase.shared.formatting.numbers.compact_currency_options; } });
Object.defineProperty(module.exports, "display_compact_decimals_cutoff", { enumerable: false, get: function() { return metabase.shared.formatting.numbers.display_compact_decimals_cutoff; } });
Object.defineProperty(module.exports, "humanized_powers", { enumerable: false, get: function() { return metabase.shared.formatting.numbers.humanized_powers; } });
Object.defineProperty(module.exports, "compact_currency_options_js", { enumerable: true, get: function() { return metabase.shared.formatting.numbers.compact_currency_options_js; } });
Object.defineProperty(module.exports, "format_number_compact_STAR_", { enumerable: false, get: function() { return metabase.shared.formatting.numbers.format_number_compact_STAR_; } });
Object.defineProperty(module.exports, "format_number_standard", { enumerable: false, get: function() { return metabase.shared.formatting.numbers.format_number_standard; } });
Object.defineProperty(module.exports, "format_number_compact", { enumerable: false, get: function() { return metabase.shared.formatting.numbers.format_number_compact; } });
Object.defineProperty(module.exports, "format_number", { enumerable: true, get: function() { return metabase.shared.formatting.numbers.format_number; } });
//# sourceMappingURL=metabase.shared.formatting.numbers.js.map
