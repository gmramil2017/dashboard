var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.normalize.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.log.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.query.js");

goog.provide('metabase.lib.query');
metabase.lib.normalize.normalize.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (query){
return metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$3(query,cljs.core.keyword,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,metabase.lib.normalize.normalize)], null));
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (_query,_stage_number,_query__$1){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You can't calculate a metadata map for a query! Use lib.metadata.calculation/returned-columns-method instead.",cljs.core.PersistentArrayMap.EMPTY);
}));
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (query,stage_number,a_query,options){
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(a_query,stage_number),options);
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (query,stage_number,x,style){
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(x,stage_number),style);
}));
/**
 * Inputs: ([metadata-providerable stages]
 *         [database-id :- :metabase.lib.schema.id/database metadata-providerable :- lib.metadata/MetadataProviderable stages])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Create a query from a sequence of stages.
 */
metabase.lib.query.query_with_stages = (function metabase$lib$query$query_with_stages(var_args){
var G__65278 = arguments.length;
switch (G__65278) {
case 2:
return metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2 = (function (metadata_providerable,stages){

return metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.database(metadata_providerable)),metadata_providerable,stages);
}));

(metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$3 = (function (database_id,metadata_providerable,stages){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220),metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),new cljs.core.Keyword(null,"database","database",1849087575),database_id,new cljs.core.Keyword(null,"stages","stages",-442109532),stages], null);
}));

(metabase.lib.query.query_with_stages.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: ([metadata-providerable stage]
 *         [database-id :- :metabase.lib.schema.id/database metadata-providerable :- lib.metadata/MetadataProviderable stage])
 *   Return: :any
 *        
 * 
 *   Create a query from a specific stage.
 */
metabase.lib.query.query_with_stage = (function metabase$lib$query$query_with_stage(var_args){
var G__65285 = arguments.length;
switch (G__65285) {
case 2:
return metabase.lib.query.query_with_stage.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.query.query_with_stage.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.query.query_with_stage.cljs$core$IFn$_invoke$arity$2 = (function (metadata_providerable,stage){

return metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(metadata_providerable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stage], null));
}));

(metabase.lib.query.query_with_stage.cljs$core$IFn$_invoke$arity$3 = (function (database_id,metadata_providerable,stage){

return metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$3(database_id,metadata_providerable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stage], null));
}));

(metabase.lib.query.query_with_stage.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: [metadata-providerable :- lib.metadata/MetadataProviderable query :- lib.util/LegacyOrPMBQLQuery]
 *   Return: :metabase.lib.schema/query
 */
metabase.lib.query.query_from_existing = (function metabase$lib$query$query_from_existing(metadata_providerable,query){

var query__$1 = metabase.lib.util.pipeline(query);
return metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(metadata_providerable,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query__$1));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.query !== 'undefined') && (typeof metabase.lib.query.__GT_query !== 'undefined')){
} else {
/**
 * Implementation for [[query]].
 */
metabase.lib.query.__GT_query = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65289 = cljs.core.get_global_hierarchy;
return (fexpr__65289.cljs$core$IFn$_invoke$arity$0 ? fexpr__65289.cljs$core$IFn$_invoke$arity$0() : fexpr__65289.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.query","->query"),(function (_metadata_providerable,x){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.query.__GT_query.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422),(function (metadata_providerable,query){
return metabase.lib.query.query_from_existing(metadata_providerable,query);
}));
metabase.lib.query.__GT_query.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (metadata_providerable,query){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220),metabase.lib.metadata.__GT_metadata_provider(metadata_providerable));
}));
metabase.lib.query.__GT_query.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","table","metadata/table",-882499405),(function (metadata_providerable,table_metadata){
return metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(metadata_providerable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(table_metadata)], null)], null));
}));
/**
 * Inputs: [metadata-providerable :- lib.metadata/MetadataProviderable x]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Create a new MBQL query from anything that could conceptually be an MBQL query, like a Database or Table or an
 *   existing MBQL query or saved question or whatever. If the thing in question does not already include metadata, pass
 *   it in separately -- metadata is needed for most query manipulation operations.
 */
metabase.lib.query.query = (function metabase$lib$query$query(metadata_providerable,x){

return metabase.lib.query.__GT_query.cljs$core$IFn$_invoke$arity$2(metadata_providerable,x);
});
/**
 * Inputs: [metadata-providerable :- lib.metadata/MetadataProviderable {mbql-query :dataset-query, metadata :result-metadata, :as saved-question}]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Convenience for creating a query from a Saved Question (i.e., a Card).
 */
metabase.lib.query.saved_question_query = (function metabase$lib$query$saved_question_query(metadata_providerable,p__65362){
var map__65363 = p__65362;
var map__65363__$1 = cljs.core.__destructure_map(map__65363);
var saved_question = map__65363__$1;
var mbql_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65363__$1,new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65363__$1,new cljs.core.Keyword(null,"result-metadata","result-metadata",2017934672));

if(cljs.core.truth_(mbql_query)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n("Saved Question is missing query")),"\n","mbql-query"].join('')));
}

if(cljs.core.truth_(metadata)){
} else {
var level__47249__auto___65377 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__47250__auto___65378 = "metabase.lib.query";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47250__auto___65378,level__47249__auto___65377))){
var x__47251__auto___65379 = metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Saved Question {0} {1} is missing result metadata",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(saved_question),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metabase.lib.query.saved_question_query)], 0))], 0));
if((x__47251__auto___65379 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___65378,level__47249__auto___65377,cljs.core.print_str(),x__47251__auto___65379);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___65378,level__47249__auto___65377,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__47251__auto___65379], 0)),null);
}
} else {
}
}

var mbql_query__$1 = (function (){var G__65364 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(mbql_query),new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220),metabase.lib.metadata.__GT_metadata_provider(metadata_providerable));
if(cljs.core.truth_(metadata)){
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(G__65364,(-1),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610),metabase.lib.util.__GT_stage_metadata(metadata)], 0));
} else {
return G__65364;
}
})();
return metabase.lib.query.query(metadata_providerable,mbql_query__$1);
});
/**
 * Inputs: [metadata-providerable :- lib.metadata/MetadataProviderable database-id :- :metabase.lib.schema.id/database inner-query :- :map]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Create a pMBQL query from a legacy inner query.
 */
metabase.lib.query.query_from_legacy_inner_query = (function metabase$lib$query$query_from_legacy_inner_query(metadata_providerable,database_id,inner_query){

return metabase.lib.query.query(metadata_providerable,metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(metabase.lib.convert.legacy_query_from_inner_query(database_id,inner_query)));
});
Object.defineProperty(module.exports, "query_with_stages", { enumerable: false, get: function() { return metabase.lib.query.query_with_stages; } });
Object.defineProperty(module.exports, "query_with_stage", { enumerable: false, get: function() { return metabase.lib.query.query_with_stage; } });
Object.defineProperty(module.exports, "query_from_existing", { enumerable: false, get: function() { return metabase.lib.query.query_from_existing; } });
Object.defineProperty(module.exports, "__GT_query", { enumerable: false, get: function() { return metabase.lib.query.__GT_query; } });
Object.defineProperty(module.exports, "query", { enumerable: false, get: function() { return metabase.lib.query.query; } });
Object.defineProperty(module.exports, "saved_question_query", { enumerable: false, get: function() { return metabase.lib.query.saved_question_query; } });
Object.defineProperty(module.exports, "query_from_legacy_inner_query", { enumerable: false, get: function() { return metabase.lib.query.query_from_legacy_inner_query; } });
//# sourceMappingURL=metabase.lib.query.js.map
