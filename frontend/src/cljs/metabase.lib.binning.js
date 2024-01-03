var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.binning.js");
require("./metabase.shared.formatting.numbers.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.malli.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.binning.js");

goog.provide('metabase.lib.binning');
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.binning !== 'undefined') && (typeof metabase.lib.binning.with_binning_method !== 'undefined')){
} else {
/**
 * Implementation for [[with-binning]]. Implement this to tell [[with-binning]] how to add binning to a particular MBQL
 *   clause.
 */
metabase.lib.binning.with_binning_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79825 = cljs.core.get_global_hierarchy;
return (fexpr__79825.cljs$core$IFn$_invoke$arity$0 ? fexpr__79825.cljs$core$IFn$_invoke$arity$0() : fexpr__79825.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.binning","with-binning-method"),(function (x,_binning){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
/**
 * Inputs: [x binning :- [:maybe [:or :metabase.lib.schema.binning/binning :metabase.lib.schema.binning/binning-option]]]
 *   Return: :any
 *        
 * 
 *   Add binning to an MBQL clause or something that can be converted to an MBQL clause.
 *   Eg. for a Field or Field metadata or `:field` clause, this might do something like this:
 * 
 *  (with-binning some-field (bin-by :num-bins 4))
 * 
 *  =>
 * 
 *  [:field {:binning {:strategy :num-bins :num-bins 4}} 1]
 * 
 *   Pass `nil` `binning` to remove any binning.
 */
metabase.lib.binning.with_binning = (function metabase$lib$binning$with_binning(x,binning){

return metabase.lib.binning.with_binning_method.cljs$core$IFn$_invoke$arity$2(x,((cljs.core.contains_QMARK_(binning,new cljs.core.Keyword(null,"mbql","mbql",69346710)))?new cljs.core.Keyword(null,"mbql","mbql",69346710).cljs$core$IFn$_invoke$arity$1(binning):binning));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.binning !== 'undefined') && (typeof metabase.lib.binning.binning_method !== 'undefined')){
} else {
/**
 * Implementation of [[binning]]. Return the current binning options associated with `x`.
 */
metabase.lib.binning.binning_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79851 = cljs.core.get_global_hierarchy;
return (fexpr__79851.cljs$core$IFn$_invoke$arity$0 ? fexpr__79851.cljs$core$IFn$_invoke$arity$0() : fexpr__79851.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.binning","binning-method"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.binning.binning_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_x){
return null;
}));
/**
 * Inputs: [x]
 *   Return: [:maybe :metabase.lib.schema.binning/binning]
 *        
 * 
 *   Get the current binning options associated with `x`, if any.
 */
metabase.lib.binning.binning = (function metabase$lib$binning$binning(x){

return metabase.lib.binning.binning_method.cljs$core$IFn$_invoke$arity$1(x);
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.binning !== 'undefined') && (typeof metabase.lib.binning.available_binning_strategies_method !== 'undefined')){
} else {
/**
 * Implementation for [[available-binning-strategies]]. Return a set of binning strategies from
 *   `:metabase.lib.schema.binning/binning-strategies` that are allowed to be used with `x`.
 */
metabase.lib.binning.available_binning_strategies_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79916 = cljs.core.get_global_hierarchy;
return (fexpr__79916.cljs$core$IFn$_invoke$arity$0 ? fexpr__79916.cljs$core$IFn$_invoke$arity$0() : fexpr__79916.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.binning","available-binning-strategies-method"),(function (_query,_stage_number,x){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.binning.available_binning_strategies_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_query,_stage_number,_x){
return null;
}));
/**
 * Inputs: ([query x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x])
 *   Return: [:sequential [:ref :metabase.lib.schema.binning/binning-option]]
 *        
 * 
 *   Get a set of available binning strategies for `x`. Returns nil if none are available.
 */
metabase.lib.binning.available_binning_strategies = (function metabase$lib$binning$available_binning_strategies(var_args){
var G__79927 = arguments.length;
switch (G__79927) {
case 2:
return metabase.lib.binning.available_binning_strategies.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.binning.available_binning_strategies.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.binning.available_binning_strategies.cljs$core$IFn$_invoke$arity$2 = (function (query,x){

return metabase.lib.binning.available_binning_strategies.cljs$core$IFn$_invoke$arity$3(query,(-1),x);
}));

(metabase.lib.binning.available_binning_strategies.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,x){

return metabase.lib.binning.available_binning_strategies_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
}));

(metabase.lib.binning.available_binning_strategies.cljs$lang$maxFixedArity = 3);

metabase.lib.binning.default_auto_bin = (function metabase$lib$binning$default_auto_bin(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Auto bin"),new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"mbql","mbql",69346710),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
});
metabase.lib.binning.with_binning_option_type = (function metabase$lib$binning$with_binning_option_type(m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("option","binning","option/binning",-1447264011));
});
metabase.lib.binning._STAR_numeric_binning_strategies = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.binning.with_binning_option_type,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.binning.default_auto_bin(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("10 bins"),new cljs.core.Keyword(null,"mbql","mbql",69346710),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"num-bins","num-bins",847672055),new cljs.core.Keyword(null,"num-bins","num-bins",847672055),(10)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("50 bins"),new cljs.core.Keyword(null,"mbql","mbql",69346710),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"num-bins","num-bins",847672055),new cljs.core.Keyword(null,"num-bins","num-bins",847672055),(50)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("100 bins"),new cljs.core.Keyword(null,"mbql","mbql",69346710),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"num-bins","num-bins",847672055),new cljs.core.Keyword(null,"num-bins","num-bins",847672055),(100)], null)], null)], null));
}),null));
/**
 * List of binning options for numeric fields. These split the data evenly into a fixed number of bins.
 */
metabase.lib.binning.numeric_binning_strategies = (function metabase$lib$binning$numeric_binning_strategies(){
return cljs.core.deref(metabase.lib.binning._STAR_numeric_binning_strategies);
});
metabase.lib.binning._STAR_coordinate_binning_strategies = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.binning.with_binning_option_type,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.binning.default_auto_bin(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Bin every 0.1 degrees"),new cljs.core.Keyword(null,"mbql","mbql",69346710),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),0.1], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Bin every 1 degree"),new cljs.core.Keyword(null,"mbql","mbql",69346710),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),1.0], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Bin every 10 degrees"),new cljs.core.Keyword(null,"mbql","mbql",69346710),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),10.0], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Bin every 20 degrees"),new cljs.core.Keyword(null,"mbql","mbql",69346710),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),20.0], null)], null)], null));
}),null));
/**
 * List of binning options for coordinate fields (ie. latitude and longitude). These split the data into as many
 *   ranges as necessary, with each range being a certain number of degrees wide.
 */
metabase.lib.binning.coordinate_binning_strategies = (function metabase$lib$binning$coordinate_binning_strategies(){
return cljs.core.deref(metabase.lib.binning._STAR_coordinate_binning_strategies);
});
/**
 * This is implemented outside of [[lib.metadata.calculation/display-name]] because it needs access to the field type.
 *   It's called directly by `:field` or `:metadata/column`'s [[lib.metadata.calculation/display-name]].
 */
metabase.lib.binning.binning_display_name = (function metabase$lib$binning$binning_display_name(p__79981,field_metadata){
var map__79982 = p__79981;
var map__79982__$1 = cljs.core.__destructure_map(map__79982);
var binning_options = map__79982__$1;
var bin_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79982__$1,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579));
var num_bins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79982__$1,new cljs.core.Keyword(null,"num-bins","num-bins",847672055));
var strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79982__$1,new cljs.core.Keyword(null,"strategy","strategy",-1471631918));
if(cljs.core.truth_(binning_options)){
var G__79984 = strategy;
var G__79984__$1 = (((G__79984 instanceof cljs.core.Keyword))?G__79984.fqn:null);
switch (G__79984__$1) {
case "num-bins":
return metabase.shared.util.i18n.js_i18n_n("{0} bin","{0} bins",num_bins);

break;
case "bin-width":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.formatting.numbers.format_number(bin_width,cljs.core.PersistentArrayMap.EMPTY)),((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(field_metadata),new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043)))?"\u00B0":null)].join('');

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Auto binned");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79984__$1)].join('')));

}
} else {
return null;
}
});
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("option","binning","option/binning",-1447264011),(function (_query,_stage_number,binning_option){
return cljs.core.select_keys(binning_option,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.binning","binning","metabase.lib.binning/binning",-2037319392),(function (query,stage_number,binning_value){
var field_metadata = (function (){var fexpr__79989 = new cljs.core.Keyword(null,"metadata-fn","metadata-fn",915781389).cljs$core$IFn$_invoke$arity$1(binning_value);
return (fexpr__79989.cljs$core$IFn$_invoke$arity$2 ? fexpr__79989.cljs$core$IFn$_invoke$arity$2(query,stage_number) : fexpr__79989.call(null,query,stage_number));
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.binning.binning_display_name(binning_value,field_metadata)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"strategy","strategy",-1471631918).cljs$core$IFn$_invoke$arity$1(binning_value)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),true], null):null)], 0));
}));
/**
 * Inputs: [binning-option :- :metabase.lib.schema.binning/binning-option column-binning :- [:maybe :metabase.lib.schema.binning/binning]]
 *   Return: boolean?
 *        
 * 
 *   Given a binning option (as returned by [[available-binning-strategies]]) and the binning value (possibly nil) from
 *   a column, check if they match.
 */
metabase.lib.binning.strategy_EQ_ = (function metabase$lib$binning$strategy_EQ_(binning_option,column_binning){

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mbql","mbql",69346710).cljs$core$IFn$_invoke$arity$1(binning_option),cljs.core.select_keys(column_binning,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"num-bins","num-bins",847672055),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579)], null)));
});
Object.defineProperty(module.exports, "binning_display_name", { enumerable: false, get: function() { return metabase.lib.binning.binning_display_name; } });
Object.defineProperty(module.exports, "binning", { enumerable: false, get: function() { return metabase.lib.binning.binning; } });
Object.defineProperty(module.exports, "available_binning_strategies_method", { enumerable: false, get: function() { return metabase.lib.binning.available_binning_strategies_method; } });
Object.defineProperty(module.exports, "with_binning_option_type", { enumerable: false, get: function() { return metabase.lib.binning.with_binning_option_type; } });
Object.defineProperty(module.exports, "with_binning", { enumerable: false, get: function() { return metabase.lib.binning.with_binning; } });
Object.defineProperty(module.exports, "strategy_EQ_", { enumerable: false, get: function() { return metabase.lib.binning.strategy_EQ_; } });
Object.defineProperty(module.exports, "with_binning_method", { enumerable: false, get: function() { return metabase.lib.binning.with_binning_method; } });
Object.defineProperty(module.exports, "available_binning_strategies", { enumerable: false, get: function() { return metabase.lib.binning.available_binning_strategies; } });
Object.defineProperty(module.exports, "numeric_binning_strategies", { enumerable: false, get: function() { return metabase.lib.binning.numeric_binning_strategies; } });
Object.defineProperty(module.exports, "binning_method", { enumerable: false, get: function() { return metabase.lib.binning.binning_method; } });
Object.defineProperty(module.exports, "_STAR_coordinate_binning_strategies", { enumerable: false, get: function() { return metabase.lib.binning._STAR_coordinate_binning_strategies; } });
Object.defineProperty(module.exports, "coordinate_binning_strategies", { enumerable: false, get: function() { return metabase.lib.binning.coordinate_binning_strategies; } });
Object.defineProperty(module.exports, "default_auto_bin", { enumerable: false, get: function() { return metabase.lib.binning.default_auto_bin; } });
Object.defineProperty(module.exports, "_STAR_numeric_binning_strategies", { enumerable: false, get: function() { return metabase.lib.binning._STAR_numeric_binning_strategies; } });
//# sourceMappingURL=metabase.lib.binning.js.map
