var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.options.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
require("./metabase.util.log.js");
require("./metabase.util.malli.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.metadata.calculation.js");

goog.provide('metabase.lib.metadata.calculation');
/**
 * Schema for valid values of `display-name-style` as passed to [[display-name-method]].
 * 
 *   * `:default`: normal style used for 99% of FE stuff. For example a column that comes from a joined table might return
 *  "Price".
 * 
 *   * `:long`: Slightly longer style that includes a little bit of extra context, used for stuff like query suggested
 *  name generation. For a joined column, this might look like "Venues → Price".
 */
metabase.lib.metadata.calculation.DisplayNameStyle = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"long","long",-171452093)], null);
/**
 * Display name style to use when not explicitly passed in to [[display-name]].
 */
metabase.lib.metadata.calculation._STAR_display_name_style_STAR_ = new cljs.core.Keyword(null,"default","default",-1987822328);
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.display_name_method !== 'undefined')){
} else {
/**
 * Calculate a nice human-friendly display name for something.
 */
metabase.lib.metadata.calculation.display_name_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__64903 = cljs.core.get_global_hierarchy;
return (fexpr__64903.cljs$core$IFn$_invoke$arity$0 ? fexpr__64903.cljs$core$IFn$_invoke$arity$0() : fexpr__64903.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","display-name-method"),(function (_query,_stage_number,x,_display_name_style){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.column_name_method !== 'undefined')){
} else {
/**
 * Calculate a database-friendly name to use for something.
 */
metabase.lib.metadata.calculation.column_name_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__64909 = cljs.core.get_global_hierarchy;
return (fexpr__64909.cljs$core$IFn$_invoke$arity$0 ? fexpr__64909.cljs$core$IFn$_invoke$arity$0() : fexpr__64909.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","column-name-method"),(function (_query,_stage_number,x){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
/**
 * Inputs: ([query]
 *         [query x]
 *         [query stage-number x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x style :- DisplayNameStyle])
 *   Return: :string
 *        
 * 
 *   Calculate a nice human-friendly display name for something. See [[DisplayNameStyle]] for a the difference between
 *   different `style`s.
 */
metabase.lib.metadata.calculation.display_name = (function metabase$lib$metadata$calculation$display_name(var_args){
var G__64939 = arguments.length;
switch (G__64939) {
case 1:
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.metadata.calculation.display_name', metabase.lib.metadata.calculation.display_name);

(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$2(query,query);
}));

(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$2 = (function (query,x){

return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,(-1),x);
}));

(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,x){

return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,metabase.lib.metadata.calculation._STAR_display_name_style_STAR_);
}));

(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4 = (function (query,stage_number,x,style){

var or__5045__auto__ = new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(x));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
try{return metabase.lib.metadata.calculation.display_name_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style);
}catch (e64955){if((e64955 instanceof Error)){
var e = e64955;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error calculating display name for {0}: {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"x","x",2099068185),x], null),e);
} else {
throw e64955;

}
}}
}));

(metabase.lib.metadata.calculation.display_name.cljs$lang$maxFixedArity = 4);

/**
 * Inputs: ([query x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x])
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Calculate a database-friendly name to use for an expression.
 */
metabase.lib.metadata.calculation.column_name = (function metabase$lib$metadata$calculation$column_name(var_args){
var G__64960 = arguments.length;
switch (G__64960) {
case 2:
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$2 = (function (query,x){

return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,(-1),x);
}));

(metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,x){

var or__5045__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(x));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
try{return metabase.lib.metadata.calculation.column_name_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
}catch (e64971){if((e64971 instanceof Error)){
var e = e64971;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error calculating column name for {0}: {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null),e);
} else {
throw e64971;

}
}}
}));

(metabase.lib.metadata.calculation.column_name.cljs$lang$maxFixedArity = 3);

metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_query,_stage_number,x,_stage){
var level__47254__auto___65138 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__47255__auto___65139 = "metabase.lib.metadata.calculation";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47255__auto___65139,level__47254__auto___65138))){
var x__47256__auto___65140 = "Don't know how to calculate display name for %s. Add an impl for %s for %s";
if((x__47256__auto___65140 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47255__auto___65139,level__47254__auto___65138,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("metabase.lib.metadata.calculation","display-name-method","metabase.lib.metadata.calculation/display-name-method",37675198,null),metabase.lib.dispatch.dispatch_value(x)], 0)),x__47256__auto___65140);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47255__auto___65139,level__47254__auto___65138,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__47256__auto___65140,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),new cljs.core.Symbol("metabase.lib.metadata.calculation","display-name-method","metabase.lib.metadata.calculation/display-name-method",37675198,null),metabase.lib.dispatch.dispatch_value(x)], 0)),null);
}
} else {
}

if(((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)))){
return cljs.core.name(cljs.core.first(x));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}
}));
metabase.lib.metadata.calculation.slugify = (function metabase$lib$metadata$calculation$slugify(s){
return metabase.util.slugify.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/[\(\)]/,""),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unicode?","unicode?",-1511958714),true], null));
});
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (query,stage_number,x){
return metabase.lib.metadata.calculation.slugify(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,x));
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.describe_top_level_key_method !== 'undefined')){
} else {
/**
 * Implementation for [[describe-top-level-key]]. Describe part of a stage of a query, e.g. the `:filters` part or the
 *   `:aggregation` part. Return `nil` if there is nothing to describe.
 * 
 *   Implementations that call [[display-name]] should specify the `:long` display name style.
 */
metabase.lib.metadata.calculation.describe_top_level_key_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__64980 = cljs.core.get_global_hierarchy;
return (fexpr__64980.cljs$core$IFn$_invoke$arity$0 ? fexpr__64980.cljs$core$IFn$_invoke$arity$0() : fexpr__64980.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","describe-top-level-key-method"),(function (_query,_stage_number,top_level_key){
return top_level_key;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
/**
 * In the interest of making this easy to use in JS-land we'll accept either strings or keywords.
 */
metabase.lib.metadata.calculation.TopLevelKey = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.Keyword(null,"breakout","breakout",-732419050),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"source-card","source-card",-1580820390)], null);
/**
 * Inputs: ([query top-level-key]
 *         [query :- :metabase.lib.schema/query stage-number :- :int top-level-key :- TopLevelKey])
 *   Return: [:maybe :metabase.lib.schema.common/non-blank-string]
 *        
 * 
 *   'top-level' here means the top level of an individual stage. Generate a human-friendly string describing a specific
 *   part of an MBQL stage, or `nil` if that part doesn't exist.
 */
metabase.lib.metadata.calculation.describe_top_level_key = (function metabase$lib$metadata$calculation$describe_top_level_key(var_args){
var G__64985 = arguments.length;
switch (G__64985) {
case 2:
return metabase.lib.metadata.calculation.describe_top_level_key.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.metadata.calculation.describe_top_level_key.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.metadata.calculation.describe_top_level_key.cljs$core$IFn$_invoke$arity$2 = (function (query,top_level_key){

return metabase.lib.metadata.calculation.describe_top_level_key.cljs$core$IFn$_invoke$arity$3(query,(-1),top_level_key);
}));

(metabase.lib.metadata.calculation.describe_top_level_key.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,top_level_key){

return metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(top_level_key));
}));

(metabase.lib.metadata.calculation.describe_top_level_key.cljs$lang$maxFixedArity = 3);

if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.type_of_method !== 'undefined')){
} else {
/**
 * Calculate the effective type of something. This differs from [[metabase.lib.schema.expression/type-of]] in that it is
 *   called with a query/MetadataProvider and a stage number, allowing us to fully resolve information and return
 *   complete, unambigous type information. Default implementation calls [[metabase.lib.schema.expression/type-of]].
 */
metabase.lib.metadata.calculation.type_of_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__64989 = cljs.core.get_global_hierarchy;
return (fexpr__64989.cljs$core$IFn$_invoke$arity$0 ? fexpr__64989.cljs$core$IFn$_invoke$arity$0() : fexpr__64989.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","type-of-method"),(function (_query,_stage_number,expr){
return metabase.lib.dispatch.dispatch_value(expr);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
/**
 * Inputs: ([query x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x])
 *   Return: :metabase.lib.schema.common/base-type
 *        
 * 
 *   Get the effective type of an MBQL expression.
 */
metabase.lib.metadata.calculation.type_of = (function metabase$lib$metadata$calculation$type_of(var_args){
var G__64992 = arguments.length;
switch (G__64992) {
case 2:
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$2 = (function (query,x){

return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,(-1),x);
}));

(metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,x){

var map__64993 = metabase.lib.options.options(x);
var map__64993__$1 = cljs.core.__destructure_map(map__64993);
var options = map__64993__$1;
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64993__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
var or__5045__auto__ = new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (cljs.core.truth_((function (){var and__5043__auto__ = temporal_unit;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.contains_QMARK_(metabase.lib.schema.temporal_bucketing.datetime_extraction_units,temporal_unit);
} else {
return and__5043__auto__;
}
})())?new cljs.core.Keyword("type","Integer","type/Integer",-638928316):null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var calculated_type = metabase.lib.metadata.calculation.type_of_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(calculated_type,new cljs.core.Keyword("type","*","type/*",-1283496752))){
return calculated_type;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
}
}
}
}));

(metabase.lib.metadata.calculation.type_of.cljs$lang$maxFixedArity = 3);

metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_query,_stage_number,expr){
return metabase.lib.schema.expression.type_of(expr);
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib.type-of","type-is-type-of-first-arg","lib.type-of/type-is-type-of-first-arg",-317600808),(function (query,stage_number,p__64994){
var vec__64995 = p__64994;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64995,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64995,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64995,(2),null);
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,expr);
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib.type-of","type-is-temporal-type-of-first-arg","lib.type-of/type-is-temporal-type-of-first-arg",76272405),(function (query,stage_number,p__64998){
var vec__64999 = p__64998;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64999,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64999,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64999,(2),null);
var clause = vec__64999;
if(typeof expr === 'string'){
return metabase.lib.schema.expression.type_of(clause);
} else {
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,expr);
}
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.metadata_method !== 'undefined')){
} else {
/**
 * Impl for [[metadata]]. Implementations that call [[display-name]] should use the `:default` display name style.
 */
metabase.lib.metadata.calculation.metadata_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65002 = cljs.core.get_global_hierarchy;
return (fexpr__65002.cljs$core$IFn$_invoke$arity$0 ? fexpr__65002.cljs$core$IFn$_invoke$arity$0() : fexpr__65002.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","metadata-method"),(function (_query,_stage_number,x){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (query,stage_number,x){
try{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword(null,"base-type","base-type",1167971299),metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,x),new cljs.core.Keyword(null,"name","name",1843675177),metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,x),new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,x)], null);
}catch (e65003){if((e65003 instanceof Error)){
var e = e65003;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error calculating metadata for {0}: {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.dispatch.dispatch_value(x)], 0)),cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number,new cljs.core.Keyword(null,"x","x",2099068185),x], null),e);
} else {
throw e65003;

}
}}));
/**
 * Inputs: ([query]
 *         [query x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x])
 *   Return: [:map
 *         [:lib/type
 *          [:and
 *           :keyword
 *           [:fn
 *            {:error/message ":lib/type should be a :metadata/ keyword"}
 *            (fn* [p1__65004#] (= (namespace p1__65004#) "metadata"))]]]]
 *        
 * 
 *   Calculate an appropriate `:metadata/*` object for something. What this looks like depends on what we're calculating
 *   metadata for. If it's a reference or expression of some sort, this should return a single `:metadata/column`
 *   map (i.e., something satisfying the [[metabase.lib.metadata/ColumnMetadata]] schema.
 */
metabase.lib.metadata.calculation.metadata = (function metabase$lib$metadata$calculation$metadata(var_args){
var G__65010 = arguments.length;
switch (G__65010) {
case 1:
return metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,(-1),query);
}));

(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$2 = (function (query,x){

return metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,(-1),x);
}));

(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,x){

return metabase.lib.metadata.calculation.metadata_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
}));

(metabase.lib.metadata.calculation.metadata.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: [query]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Convenience for calling [[display-name]] on a query to describe the results of its final stage.
 */
metabase.lib.metadata.calculation.describe_query = (function metabase$lib$metadata$calculation$describe_query(query){

return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$2(query,query);
});
/**
 * Inputs: [query]
 *   Return: [:maybe :metabase.lib.schema.common/non-blank-string]
 *        
 * 
 *   Name you might want to use for a query when saving an previously-unsaved query. This is the same
 *   as [[describe-query]] except for native queries, where we don't describe anything.
 */
metabase.lib.metadata.calculation.suggested_name = (function metabase$lib$metadata$calculation$suggested_name(query){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,(-1))),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194))){
return null;
} else {
try{return metabase.lib.metadata.calculation.describe_query(query);
}catch (e65019){if((e65019 instanceof Error)){
var e = e65019;
var level__47249__auto___65162 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"error","error",-978969032));
var logger__47250__auto___65163 = "metabase.lib.metadata.calculation";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47250__auto___65163,level__47249__auto___65162))){
var x__47251__auto___65168 = e;
if((x__47251__auto___65168 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___65163,level__47249__auto___65162,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error calculating display name for query: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0))], 0)),x__47251__auto___65168);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___65163,level__47249__auto___65162,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__47251__auto___65168,metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error calculating display name for query: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0))], 0)),null);
}
} else {
}

return null;
} else {
throw e65019;

}
}}
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.display_info_method !== 'undefined')){
} else {
/**
 * Implementation for [[display-info]]. Implementations that call [[display-name]] should use the `:default` display
 *   name style.
 */
metabase.lib.metadata.calculation.display_info_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65020 = cljs.core.get_global_hierarchy;
return (fexpr__65020.cljs$core$IFn$_invoke$arity$0 ? fexpr__65020.cljs$core$IFn$_invoke$arity$0() : fexpr__65020.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","display-info-method"),(function (_query,_stage_number,x){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.metadata.calculation","display-info","metabase.lib.metadata.calculation/display-info",-2072755534),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"long-display-name","long-display-name",1550784464),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.metadata.calculation","display-info","metabase.lib.metadata.calculation/display-info",-2072755534)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-from-previous-stage","is-from-previous-stage",956780376),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-from-join","is-from-join",-1107917905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-calculated","is-calculated",-86687269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-implicitly-joinable","is-implicitly-joinable",2054926844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-source-table","is-source-table",1559075056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-breakout-column","is-breakout-column",46784229),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-order-by-column","is-order-by-column",1320802549),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-name","column-name",551523580),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short-name","short-name",-1767085022),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires-column","requires-column",934105295),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], null)], null));
/**
 * Inputs: ([query x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x])
 *   Return: :metabase.lib.metadata.calculation/display-info
 *        
 * 
 *   Given some sort of Cljs object, return a map with the info you'd need to implement UI for it. This is mostly meant to
 *   power the Frontend JavaScript UI; in JS, results will be converted to plain JavaScript objects, so avoid returning
 *   things that should remain opaque.
 */
metabase.lib.metadata.calculation.display_info = (function metabase$lib$metadata$calculation$display_info(var_args){
var G__65028 = arguments.length;
switch (G__65028) {
case 2:
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$2 = (function (query,x){

return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,(-1),x);
}));

(metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,x){

try{return metabase.lib.metadata.calculation.display_info_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
}catch (e65030){if((e65030 instanceof Error)){
var e = e65030;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error calculating display info for {0}: {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.dispatch.dispatch_value(x),cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number,new cljs.core.Keyword(null,"x","x",2099068185),x], null),e);
} else {
throw e65030;

}
}}));

(metabase.lib.metadata.calculation.display_info.cljs$lang$maxFixedArity = 3);

/**
 * Default implementation of [[display-info-method]], available in case you want to use this in a different
 *   implementation and add additional information to it.
 */
metabase.lib.metadata.calculation.default_display_info = (function metabase$lib$metadata$calculation$default_display_info(query,stage_number,x){
var x_metadata = metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(x_metadata,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107)], null)),(function (){var temp__5804__auto__ = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,new cljs.core.Keyword(null,"long","long",-171452093));
if(cljs.core.truth_(temp__5804__auto__)){
var long_display_name = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long-display-name","long-display-name",1550784464),long_display_name], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(x_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var effective_type = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),effective_type], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(x_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var table_id = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table","table",-564943036),metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,((cljs.core.integer_QMARK_(table_id))?metabase.lib.metadata.table(query,table_id):((typeof table_id === 'string')?metabase.lib.metadata.card(query,metabase.lib.util.legacy_string_table_id__GT_card_id(table_id)):null)))], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(x_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var source = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"is-from-previous-stage","is-from-previous-stage",956780376),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878)),new cljs.core.Keyword(null,"is-from-join","is-from-join",-1107917905),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,new cljs.core.Keyword("source","joins","source/joins",1225821486)),new cljs.core.Keyword(null,"is-calculated","is-calculated",-86687269),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,new cljs.core.Keyword("source","expressions","source/expressions",-458367840)),new cljs.core.Keyword(null,"is-implicitly-joinable","is-implicitly-joinable",2054926844),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,new cljs.core.Keyword("source","implicitly-joinable","source/implicitly-joinable",-729101197))], null);
} else {
return null;
}
})(),(function (){var temp__5808__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(x_metadata);
if((temp__5808__auto__ == null)){
return null;
} else {
var selected = temp__5808__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),selected], null);
}
})(),cljs.core.select_keys(x_metadata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakout-position","breakout-position",-760153191),new cljs.core.Keyword(null,"order-by-position","order-by-position",-1307229997)], null))], 0));
});
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (query,stage_number,x){
return metabase.lib.metadata.calculation.default_display_info(query,stage_number,x);
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","table","metadata/table",-882499405),(function (query,stage_number,table){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.default_display_info(query,stage_number,table),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-source-table","is-source-table",1559075056),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.source_table_id(query),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(table))], null)], 0));
}));
/**
 * Schema for the column metadata that should be returned by [[metadata]].
 */
metabase.lib.metadata.calculation.ColumnMetadataWithSource = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),metabase.lib.metadata.ColumnMetadata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("metabase.lib.metadata","column-source","metabase.lib.metadata/column-source",-458963769)], null)], null)], null);
/**
 * Schema for column metadata that should be returned by [[visible-columns]]. This is mostly used
 *   to power metadata calculation for stages (see [[metabase.lib.stage]].
 */
metabase.lib.metadata.calculation.ColumnsWithUniqueAliases = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),metabase.lib.metadata.calculation.ColumnMetadataWithSource,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(60)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"Column :lib/desired-column-alias values must be distinct, regardless of case, for each stage!",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__65051,_){
var map__65052 = p__65051;
var map__65052__$1 = cljs.core.__destructure_map(map__65052);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65052__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["Column :lib/desired-column-alias values must be distinct, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),value)], 0))].join('');
})], null),(function (columns){
var or__5045__auto__ = cljs.core.empty_QMARK_(columns);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.util.lower_case_en,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402)),columns));
}
})], null)], null);
metabase.lib.metadata.calculation.UniqueNameFn = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null);
/**
 * Schema for options passed to [[returned-columns]] and [[returned-columns-method]].
 */
metabase.lib.metadata.calculation.ReturnedColumnsOptions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),metabase.lib.metadata.calculation.UniqueNameFn], null)], null);
/**
 * Inputs: []
 *   Return: ReturnedColumnsOptions
 */
metabase.lib.metadata.calculation.default_returned_columns_options = (function metabase$lib$metadata$calculation$default_returned_columns_options(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870),metabase.lib.util.unique_name_generator()], null);
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.returned_columns_method !== 'undefined')){
} else {
/**
 * Impl for [[returned-columns]].
 */
metabase.lib.metadata.calculation.returned_columns_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65076 = cljs.core.get_global_hierarchy;
return (fexpr__65076.cljs$core$IFn$_invoke$arity$0 ? fexpr__65076.cljs$core$IFn$_invoke$arity$0() : fexpr__65076.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","returned-columns-method"),(function (_query,_stage_number,x,_options){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","nil","dispatch-type/nil",-2067723388),(function (_query,_stage_number,_x,_options){
return cljs.core.PersistentVector.EMPTY;
}));
/**
 * Inputs: ([query]
 *         [query x]
 *         [query stage-number x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x options :- [:maybe ReturnedColumnsOptions]])
 *   Return: [:maybe ColumnsWithUniqueAliases]
 *        
 * 
 *   Return a sequence of metadata maps for all the columns expected to be 'returned' at a query, stage of the query, or
 *   join, and include the `:lib/source` of where they came from. This should only include columns that will be present
 *   in the results; DOES NOT include 'expected' columns that are not 'exported' to subsequent stages.
 * 
 *   See [[ReturnedColumnsOptions]] for allowed options and [[default-returned-columns-options]] for default values.
 */
metabase.lib.metadata.calculation.returned_columns = (function metabase$lib$metadata$calculation$returned_columns(var_args){
var G__65095 = arguments.length;
switch (G__65095) {
case 1:
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$2(query,metabase.lib.util.query_stage(query,(-1)));
}));

(metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$2 = (function (query,x){

return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query,(-1),x);
}));

(metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,x){

return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,null);
}));

(metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4 = (function (query,stage_number,x,options){

var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.default_returned_columns_options(),options], 0));
return metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,options__$1);
}));

(metabase.lib.metadata.calculation.returned_columns.cljs$lang$maxFixedArity = 4);

/**
 * Schema for options passed to [[visible-columns]] and [[visible-columns-method]].
 */
metabase.lib.metadata.calculation.VisibleColumnsOptions = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),metabase.lib.metadata.calculation.ReturnedColumnsOptions,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"include-joined?","include-joined?",-410632824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"include-expressions?","include-expressions?",-1817639288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null);
/**
 * Inputs: []
 *   Return: VisibleColumnsOptions
 */
metabase.lib.metadata.calculation.default_visible_columns_options = (function metabase$lib$metadata$calculation$default_visible_columns_options(){

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.default_returned_columns_options(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"include-joined?","include-joined?",-410632824),true,new cljs.core.Keyword(null,"include-expressions?","include-expressions?",-1817639288),true,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),true], null)], 0));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.visible_columns_method !== 'undefined')){
} else {
/**
 * Impl for [[visible-columns]].
 * 
 *   This should mostly be similar to the implementation for [[metadata-method]], but needs to include
 *   `:lib/source-column-alias` and `:lib/desired-column-alias`. `:lib/source-column-alias` should probably be the same
 *   as `:name`; use the supplied `:unique-name-fn` from `options` with the signature `(f str) => str` to ensure
 *   `:lib/desired-column-alias` is unique.
 * 
 *   Also, columns that aren't 'projected' should be returned as well -- in other words, ignore `:fields`,
 *   `:aggregations`, and `:breakouts`.
 */
metabase.lib.metadata.calculation.visible_columns_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65111 = cljs.core.get_global_hierarchy;
return (fexpr__65111.cljs$core$IFn$_invoke$arity$0 ? fexpr__65111.cljs$core$IFn$_invoke$arity$0() : fexpr__65111.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","visible-columns-method"),(function (_query,_stage_number,x,_options){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","nil","dispatch-type/nil",-2067723388),(function (_query,_stage_number,_x,_options){
return cljs.core.PersistentVector.EMPTY;
}));
metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (query,stage_number,x,options){
return metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,options);
}));
/**
 * Inputs: ([query]
 *         [query x]
 *         [query stage-number x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x options :- [:maybe VisibleColumnsOptions]])
 *   Return: ColumnsWithUniqueAliases
 *        
 * 
 *   Return a sequence of columns that should be visible *within* a given stage of something, e.g. a query stage or a
 *   join query. This includes not just the columns that get returned (ones present in [[metadata]], but other columns
 *   that are 'reachable' in this stage of the query. E.g. in a query like
 * 
 *  SELECT id, name
 *  FROM table
 *  ORDER BY position
 * 
 *   only `id` and `name` are 'returned' columns, but other columns such as `position` are visible in this stage as well
 *   and would thus be returned by this function.
 * 
 *   Columns from joins, expressions, and implicitly joinable columns are included automatically by default;
 *   see [[VisibleColumnsOptions]] for the options for disabling these columns.
 */
metabase.lib.metadata.calculation.visible_columns = (function metabase$lib$metadata$calculation$visible_columns(var_args){
var G__65122 = arguments.length;
switch (G__65122) {
case 1:
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$2(query,metabase.lib.util.query_stage(query,(-1)));
}));

(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$2 = (function (query,x){

return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,(-1),x);
}));

(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,x){

return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,null);
}));

(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4 = (function (query,stage_number,x,options){

var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.default_visible_columns_options(),options], 0));
return metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,options__$1);
}));

(metabase.lib.metadata.calculation.visible_columns.cljs$lang$maxFixedArity = 4);

Object.defineProperty(module.exports, "returned_columns", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.returned_columns; } });
Object.defineProperty(module.exports, "describe_query", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.describe_query; } });
Object.defineProperty(module.exports, "display_name_method", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.display_name_method; } });
Object.defineProperty(module.exports, "column_name", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.column_name; } });
Object.defineProperty(module.exports, "metadata", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.metadata; } });
Object.defineProperty(module.exports, "describe_top_level_key_method", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.describe_top_level_key_method; } });
Object.defineProperty(module.exports, "default_display_info", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.default_display_info; } });
Object.defineProperty(module.exports, "column_name_method", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.column_name_method; } });
Object.defineProperty(module.exports, "VisibleColumnsOptions", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.VisibleColumnsOptions; } });
Object.defineProperty(module.exports, "_STAR_display_name_style_STAR_", { enumerable: false, get: function() { return metabase.lib.metadata.calculation._STAR_display_name_style_STAR_; } });
Object.defineProperty(module.exports, "ColumnMetadataWithSource", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.ColumnMetadataWithSource; } });
Object.defineProperty(module.exports, "visible_columns", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.visible_columns; } });
Object.defineProperty(module.exports, "type_of_method", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.type_of_method; } });
Object.defineProperty(module.exports, "default_returned_columns_options", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.default_returned_columns_options; } });
Object.defineProperty(module.exports, "display_info", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.display_info; } });
Object.defineProperty(module.exports, "slugify", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.slugify; } });
Object.defineProperty(module.exports, "TopLevelKey", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.TopLevelKey; } });
Object.defineProperty(module.exports, "metadata_method", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.metadata_method; } });
Object.defineProperty(module.exports, "ColumnsWithUniqueAliases", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.ColumnsWithUniqueAliases; } });
Object.defineProperty(module.exports, "DisplayNameStyle", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.DisplayNameStyle; } });
Object.defineProperty(module.exports, "describe_top_level_key", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.describe_top_level_key; } });
Object.defineProperty(module.exports, "returned_columns_method", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.returned_columns_method; } });
Object.defineProperty(module.exports, "suggested_name", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.suggested_name; } });
Object.defineProperty(module.exports, "type_of", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.type_of; } });
Object.defineProperty(module.exports, "UniqueNameFn", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.UniqueNameFn; } });
Object.defineProperty(module.exports, "ReturnedColumnsOptions", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.ReturnedColumnsOptions; } });
Object.defineProperty(module.exports, "default_visible_columns_options", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.default_visible_columns_options; } });
Object.defineProperty(module.exports, "display_name", { enumerable: true, get: function() { return metabase.lib.metadata.calculation.display_name; } });
Object.defineProperty(module.exports, "visible_columns_method", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.visible_columns_method; } });
Object.defineProperty(module.exports, "display_info_method", { enumerable: false, get: function() { return metabase.lib.metadata.calculation.display_info_method; } });
//# sourceMappingURL=metabase.lib.metadata.calculation.js.map
