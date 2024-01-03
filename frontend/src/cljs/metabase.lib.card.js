var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.query.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
require("./metabase.util.humanization.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.card.js");

goog.provide('metabase.lib.card');
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),(function (_query,_stage_number,card_metadata,_style){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"name","name",1843675177))(card_metadata);
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),(function (_query,_stage_number,p__80076){
var map__80126 = p__80076;
var map__80126__$1 = cljs.core.__destructure_map(map__80126);
var card_metadata = map__80126__$1;
var card_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80126__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80126__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
var G__80128 = card_metadata;
if(cljs.core.not(display_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80128,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.util.humanization.name__GT_human_readable_name.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"simple","simple",-581868663),card_name));
} else {
return G__80128;
}
}));
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"source-card","source-card",-1580820390),(function (query,stage_number,_k){
var map__80130 = metabase.lib.util.query_stage(query,stage_number);
var map__80130__$1 = cljs.core.__destructure_map(map__80130);
var source_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80130__$1,new cljs.core.Keyword(null,"source-card","source-card",-1580820390));
if(cljs.core.truth_(source_card)){
var or__5045__auto__ = (function (){var temp__5804__auto__ = metabase.lib.metadata.card(query,source_card);
if(cljs.core.truth_(temp__5804__auto__)){
var card_metadata = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,card_metadata,new cljs.core.Keyword(null,"long","long",-171452093));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Saved Question {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_card], 0))], 0));
}
} else {
return null;
}
}));
/**
 * Inputs: [metadata-providerable :- lib.metadata/MetadataProviderable card-query :- :map]
 *   Return: :any
 */
metabase.lib.card.infer_returned_columns = (function metabase$lib$card$infer_returned_columns(metadata_providerable,card_query){

if((!((card_query == null)))){
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$1(metabase.lib.query.query(metadata_providerable,metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(card_query)));
} else {
return null;
}
});
metabase.lib.card.Card = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Card with :dataset-query"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null);
/**
 * Inputs: [metadata-providerable :- lib.metadata/MetadataProviderable card :- Card]
 *   Return: :any
 */
metabase.lib.card.card_metadata_columns = (function metabase$lib$card$card_metadata_columns(metadata_providerable,card){

var temp__5804__auto__ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"result-metadata","result-metadata",2017934672).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return metabase.lib.card.infer_returned_columns(metadata_providerable,new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427).cljs$core$IFn$_invoke$arity$1(card));
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var result_metadata = temp__5804__auto__;
var temp__5804__auto____$1 = cljs.core.not_empty(((cljs.core.map_QMARK_(result_metadata))?new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(result_metadata):((cljs.core.sequential_QMARK_(result_metadata))?result_metadata:null)));
if(cljs.core.truth_(temp__5804__auto____$1)){
var cols = temp__5804__auto____$1;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword("type","*","type/*",-1283496752),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054)], null),(function (){var temp__5804__auto____$2 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(col);
if(cljs.core.truth_(temp__5804__auto____$2)){
var field_id = temp__5804__auto____$2;
try{return metabase.lib.metadata.field(metadata_providerable,field_id);
}catch (e80136){var _ = e80136;
return null;
}} else {
return null;
}
})(),cljs.core.update_keys(col,metabase.util.__GT_kebab_case_en),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","card","source/card",-139977973),new cljs.core.Keyword("lib","card-id","lib/card-id",-1770167062),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col)], null)], 0));
}),cols);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [metadata-providerable :- lib.metadata/MetadataProviderable card-id :- :metabase.lib.schema.id/card]
 *   Return: [:maybe [:sequential {:min 1} lib.metadata.calculation/ColumnMetadataWithSource]]
 *        
 * 
 *   Metadata associated with a Saved Question with `card-id`.
 */
metabase.lib.card.saved_question_metadata = (function metabase$lib$card$saved_question_metadata(metadata_providerable,card_id){

var temp__5804__auto__ = metabase.lib.metadata.card(metadata_providerable,card_id);
if(cljs.core.truth_(temp__5804__auto__)){
var card = temp__5804__auto__;
return metabase.lib.card.card_metadata_columns(metadata_providerable,card);
} else {
return null;
}
});
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),(function (query,_stage_number,card,p__80142){
var map__80143 = p__80142;
var map__80143__$1 = cljs.core.__destructure_map(map__80143);
var _options = map__80143__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80143__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__80144 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__80144) : unique_name_fn.call(null,G__80144));
})());
}),metabase.lib.card.card_metadata_columns(query,card));
}));
Object.defineProperty(module.exports, "infer_returned_columns", { enumerable: false, get: function() { return metabase.lib.card.infer_returned_columns; } });
Object.defineProperty(module.exports, "Card", { enumerable: false, get: function() { return metabase.lib.card.Card; } });
Object.defineProperty(module.exports, "card_metadata_columns", { enumerable: false, get: function() { return metabase.lib.card.card_metadata_columns; } });
Object.defineProperty(module.exports, "saved_question_metadata", { enumerable: false, get: function() { return metabase.lib.card.saved_question_metadata; } });
//# sourceMappingURL=metabase.lib.card.js.map
