var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./medley.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.binning.js");
require("./metabase.lib.card.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.expression.js");
require("./metabase.lib.join.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.normalize.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.ref.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.shared.util.time.js");
require("./metabase.util.js");
require("./metabase.util.humanization.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.field.js");

goog.provide('metabase.lib.field');
metabase.lib.field.normalize_binning_options = (function metabase$lib$field$normalize_binning_options(opts){
return metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.keyword,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),cljs.core.keyword], null));
});
metabase.lib.field.normalize_field_options = (function metabase$lib$field$normalize_field_options(opts){
return metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.keyword,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),cljs.core.keyword,new cljs.core.Keyword(null,"binning","binning",1709835866),metabase.lib.field.normalize_binning_options], null));
});
metabase.lib.normalize.normalize.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__80656){
var vec__80657 = p__80656;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80657,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80657,(1),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80657,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag),metabase.lib.field.normalize_field_options(opts),id_or_name], null);
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int field-id :- :metabase.lib.schema.id/field]
 *   Return: lib.metadata/ColumnMetadata
 *        
 * 
 *   Integer Field ID: get metadata from the metadata provider. If this is the first stage of the query, merge in
 *   Saved Question metadata if available.
 */
metabase.lib.field.resolve_field_id = (function metabase$lib$field$resolve_field_id(query,stage_number,field_id){

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((metabase.lib.util.first_stage_QMARK_(query,stage_number))?(function (){var temp__5804__auto__ = metabase.lib.util.source_card_id(query);
if(cljs.core.truth_(temp__5804__auto__)){
var card_id = temp__5804__auto__;
var temp__5804__auto____$1 = metabase.lib.card.saved_question_metadata(query,card_id);
if(cljs.core.truth_(temp__5804__auto____$1)){
var card_metadata = temp__5804__auto____$1;
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__80660_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__80660_SHARP_),field_id);
}),card_metadata);
} else {
return null;
}
} else {
return null;
}
})():null),(function (){try{return metabase.lib.metadata.field(query,field_id);
}catch (e80662){var _ = e80662;
return null;
}})()], 0));
});
/**
 * Inputs: [column-name :- :metabase.lib.schema.common/non-blank-string column-metadatas :- [:sequential lib.metadata/ColumnMetadata]]
 *   Return: [:maybe lib.metadata/ColumnMetadata]
 */
metabase.lib.field.resolve_column_name_in_metadata = (function metabase$lib$field$resolve_column_name_in_metadata(column_name,column_metadatas){

var or__5045__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__80663_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(p1__80663_SHARP_),column_name);
}),column_metadatas);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__80664_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__80664_SHARP_),column_name);
}),column_metadatas);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var level__47249__auto___81161 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__47250__auto___81162 = "metabase.lib.field";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47250__auto___81162,level__47249__auto___81161))){
var x__47251__auto___81163 = metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Invalid :field clause: column {0} does not exist. Found: {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_name], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),column_metadatas)], 0))], 0));
if((x__47251__auto___81163 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___81162,level__47249__auto___81161,cljs.core.print_str(),x__47251__auto___81163);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___81162,level__47249__auto___81161,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__47251__auto___81163], 0)),null);
}
} else {
}

return null;
}
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int column-name :- :metabase.lib.schema.common/non-blank-string]
 *   Return: [:maybe lib.metadata/ColumnMetadata]
 *        
 * 
 *   String column name: get metadata from the previous stage, if it exists, otherwise if this is the first stage and we
 *   have a native query or a Saved Question source query or whatever get it from our results metadata.
 */
metabase.lib.field.resolve_column_name = (function metabase$lib$field$resolve_column_name(query,stage_number,column_name){

var previous_stage_number = metabase.lib.util.previous_stage_number(query,stage_number);
var stage = (cljs.core.truth_(previous_stage_number)?metabase.lib.util.query_stage(query,previous_stage_number):metabase.lib.util.query_stage(query,stage_number));
var stage_columns = (function (){var or__5045__auto__ = new cljs.core.Keyword("metabase.lib.stage","cached-metadata","metabase.lib.stage/cached-metadata",-1406479151).cljs$core$IFn$_invoke$arity$1(stage);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610),new cljs.core.Keyword(null,"columns","columns",1998437288)], null));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(stage))?metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage):null);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var level__47249__auto__ = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__47250__auto__ = "metabase.lib.field";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47250__auto__,level__47249__auto__))){
var x__47251__auto__ = metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Cannot resolve column {0}: stage has no metadata",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_name], 0))], 0));
if((x__47251__auto__ instanceof Error)){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto__,level__47249__auto__,cljs.core.print_str(),x__47251__auto__);
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto__,level__47249__auto__,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__47251__auto__], 0)),null);
}
} else {
return null;
}
}
}
}
})();
var temp__5804__auto__ = (function (){var and__5043__auto__ = cljs.core.seq(stage_columns);
if(and__5043__auto__){
return metabase.lib.field.resolve_column_name_in_metadata(column_name,stage_columns);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var column = temp__5804__auto__;
var G__80674 = column;
if(cljs.core.truth_(previous_stage_number)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.join.with_join_alias(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__80674,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727)], 0)),null),new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5045__auto__ = new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
}
})()),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878));
} else {
return G__80674;
}
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int [_field {:keys [join-alias], :as opts} id-or-name :as _field-clause] :- :mbql.clause/field]
 *   Return: lib.metadata/ColumnMetadata
 *        
 * 
 *   Resolve metadata for a `:field` ref. This is part of the implementation
 *   for [[lib.metadata.calculation/metadata-method]] a `:field` clause.
 */
metabase.lib.field.resolve_field_metadata = (function metabase$lib$field$resolve_field_metadata(query,stage_number,p__80685){
var vec__80690 = p__80685;
var _field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80690,(0),null);
var map__80693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80690,(1),null);
var map__80693__$1 = cljs.core.__destructure_map(map__80693);
var opts = map__80693__$1;
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80693__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80690,(2),null);
var _field_clause = vec__80690;

var metadata = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var base_type = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),base_type], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var effective_type = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),effective_type], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"binning","binning",1709835866).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var binning = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),binning], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var unit = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),unit], null);
} else {
return null;
}
})(),((cljs.core.integer_QMARK_(id_or_name))?metabase.lib.field.resolve_field_id(query,stage_number,id_or_name):(cljs.core.truth_(join_alias)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword(null,"name","name",1843675177),id_or_name], null):(function (){var or__5045__auto__ = metabase.lib.field.resolve_column_name(query,stage_number,id_or_name);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword(null,"name","name",1843675177),id_or_name], null);
}
})()
))], 0));
var G__80722 = metadata;
if(cljs.core.truth_(join_alias)){
return metabase.lib.join.with_join_alias(G__80722,join_alias);
} else {
return G__80722;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query metadata :- lib.metadata/ColumnMetadata]
 *   Return: :any
 *        
 * 
 *   If this is a nested column, add metadata about the parent column.
 */
metabase.lib.field.add_parent_column_metadata = (function metabase$lib$field$add_parent_column_metadata(query,metadata){

var parent_metadata = metabase.lib.metadata.field(query,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(metadata));
var map__80725 = (function (){var G__80726 = parent_metadata;
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(parent_metadata))){
return (metabase.lib.field.add_parent_column_metadata.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.field.add_parent_column_metadata.cljs$core$IFn$_invoke$arity$2(query,G__80726) : metabase.lib.field.add_parent_column_metadata.call(null,query,G__80726));
} else {
return G__80726;
}
})();
var map__80725__$1 = cljs.core.__destructure_map(map__80725);
var parent_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80725__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(metadata,new cljs.core.Keyword(null,"name","name",1843675177),(function (field_name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name)].join('');
}));
});
/**
 * Effective type of a column when taking the `::temporal-unit` into account. If we have a temporal extraction like
 *   `:month-of-year`, then this actually returns an integer rather than the 'original` effective type of `:type/Date` or
 *   whatever.
 */
metabase.lib.field.column_metadata_effective_type = (function metabase$lib$field$column_metadata_effective_type(p__80727){
var map__80728 = p__80727;
var map__80728__$1 = cljs.core.__destructure_map(map__80728);
var column_metadata = map__80728__$1;
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80728__$1,new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727));
if(cljs.core.truth_((function (){var and__5043__auto__ = temporal_unit;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.contains_QMARK_(metabase.lib.schema.temporal_bucketing.datetime_extraction_units,temporal_unit);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.Keyword("type","Integer","type/Integer",-638928316);
} else {
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(column_metadata);
}
});
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (_query,_stage_number,column_metadata){
return metabase.lib.field.column_metadata_effective_type(column_metadata);
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,p__80730){
var vec__80731 = p__80730;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80731,(0),null);
var map__80734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80731,(1),null);
var map__80734__$1 = cljs.core.__destructure_map(map__80734);
var _opts = map__80734__$1;
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80734__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80731,(2),null);
var field_ref = vec__80731;
var metadata = (function (){var G__80735 = metabase.lib.field.resolve_field_metadata(query,stage_number,field_ref);
if(cljs.core.truth_(temporal_unit)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80735,new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),temporal_unit);
} else {
return G__80735;
}
})();
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,metadata);
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (_query,_stage_number,p__80739){
var map__80740 = p__80739;
var map__80740__$1 = cljs.core.__destructure_map(map__80740);
var field_metadata = map__80740__$1;
var field_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(field_metadata,new cljs.core.Keyword(null,"name","name",1843675177),field_name);
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,p__80760){
var vec__80764 = p__80760;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80764,(0),null);
var map__80767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80764,(1),null);
var map__80767__$1 = cljs.core.__destructure_map(map__80767);
var opts = map__80767__$1;
var source_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80767__$1,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80767__$1,new cljs.core.Keyword(null,"base-type","base-type",1167971299));
var binning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80767__$1,new cljs.core.Keyword(null,"binning","binning",1709835866));
var effective_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80767__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458));
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80767__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
var source_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80767__$1,new cljs.core.Keyword(null,"source-field","source-field",933829534));
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80767__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
var field_ref = vec__80764;
var field_metadata = metabase.lib.field.resolve_field_metadata(query,stage_number,field_ref);
var metadata = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),source_uuid], null),field_metadata,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,field_ref);
}
})()], null),(cljs.core.truth_(effective_type)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),effective_type], null):null),(cljs.core.truth_(base_type)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),base_type], null):null),(cljs.core.truth_(temporal_unit)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),temporal_unit], null):null),(cljs.core.truth_(binning)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),binning], null):null),(cljs.core.truth_(source_field)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),source_field], null):null)], 0));
var metadata__$1 = (function (){var G__80775 = metadata;
if(cljs.core.truth_(join_alias)){
return metabase.lib.join.with_join_alias(G__80775,join_alias);
} else {
return G__80775;
}
})();
var G__80776 = metadata__$1;
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(metadata__$1))){
return metabase.lib.field.add_parent_column_metadata(query,G__80776);
} else {
return G__80776;
}
}));
/**
 * Work around the fact that sometimes columns in results metadata come back with legacy `card__<id>` `:table-id`s.
 *   TODO: It would probably be nice to have the metadata providers parse these into a `:card-id` or something as they
 *   come in, sort of like what we do with legacy queries in [[metabase.lib.convert]], but this will have to be good
 *   enough for now.
 */
metabase.lib.field.table_metadata = (function metabase$lib$field$table_metadata(query,table_id){
if(typeof table_id === 'string'){
return metabase.lib.metadata.card(query,metabase.lib.util.legacy_string_table_id__GT_card_id(table_id));
} else {
if(cljs.core.integer_QMARK_(table_id)){
return metabase.lib.metadata.table(query,table_id);
} else {
return null;
}
}
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (query,stage_number,p__80785,style){
var map__80786 = p__80785;
var map__80786__$1 = cljs.core.__destructure_map(map__80786);
var field_metadata = map__80786__$1;
var field_display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80786__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
var field_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80786__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80786__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var binning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80786__$1,new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823));
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80786__$1,new cljs.core.Keyword(null,"source-alias","source-alias",1652088724));
var fk_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80786__$1,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80786__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
var field_display_name__$1 = (function (){var or__5045__auto__ = field_display_name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.util.humanization.name__GT_human_readable_name.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"simple","simple",-581868663),field_name);
}
})();
var join_display_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"long","long",-171452093))) && ((!(clojure.string.includes_QMARK_(field_display_name__$1," \u2192 "))))))?(function (){var or__5045__auto__ = (cljs.core.truth_(fk_field_id)?(function (){var temp__5802__auto__ = metabase.lib.metadata.field(query,fk_field_id);
if(cljs.core.truth_(temp__5802__auto__)){
var field = temp__5802__auto__;
return metabase.lib.util.strip_id(new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,field)));
} else {
var table = metabase.lib.field.table_metadata(query,table_id);
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,table,style);
}
})():null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = join_alias;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return metabase.lib.join.current_join_alias(field_metadata);
}
}
})():null);
var display_name = (cljs.core.truth_(join_display_name)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(join_display_name)," \u2192 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_display_name__$1)].join(''):field_display_name__$1);
if(cljs.core.truth_(temporal_unit)){
var G__80841 = "%s: %s";
var G__80842 = display_name;
var G__80843 = metabase.util.capitalize_en(clojure.string.replace(cljs.core.name(temporal_unit),"-"," "));
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3(G__80841,G__80842,G__80843) : metabase.lib.util.format.call(null,G__80841,G__80842,G__80843));
} else {
if(cljs.core.truth_(binning)){
var G__80844 = "%s: %s";
var G__80845 = display_name;
var G__80846 = metabase.lib.binning.binning_display_name(binning,field_metadata);
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3(G__80844,G__80845,G__80846) : metabase.lib.util.format.call(null,G__80844,G__80845,G__80846));
} else {
return display_name;

}
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,p__80847,style){
var vec__80850 = p__80847;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80850,(0),null);
var map__80853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80850,(1),null);
var map__80853__$1 = cljs.core.__destructure_map(map__80853);
var _opts = map__80853__$1;
var binning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80853__$1,new cljs.core.Keyword(null,"binning","binning",1709835866));
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80853__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80853__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
var source_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80853__$1,new cljs.core.Keyword(null,"source-field","source-field",933829534));
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80850,(2),null);
var field_clause = vec__80850;
var temp__5802__auto__ = (function (){var G__80855 = metabase.lib.field.resolve_field_metadata(query,stage_number,field_clause);
var G__80855__$1 = (cljs.core.truth_(join_alias)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80855,new cljs.core.Keyword(null,"source-alias","source-alias",1652088724),join_alias):G__80855);
var G__80855__$2 = (cljs.core.truth_(temporal_unit)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80855__$1,new cljs.core.Keyword(null,"unit","unit",375175175),temporal_unit):G__80855__$1);
var G__80855__$3 = (cljs.core.truth_(binning)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80855__$2,new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),binning):G__80855__$2);
if(cljs.core.truth_(source_field)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80855__$3,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),source_field);
} else {
return G__80855__$3;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var field_metadata = temp__5802__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,field_metadata,style);
} else {
return metabase.shared.util.i18n.js_i18n("[Unknown Field]");
}
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (_query,_stage_number,p__80861){
var map__80862 = p__80861;
var map__80862__$1 = cljs.core.__destructure_map(map__80862);
var field_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80862__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return field_name;
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,p__80867){
var vec__80869 = p__80867;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80869,(0),null);
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80869,(1),null);
var field_clause = vec__80869;
var temp__5802__auto__ = metabase.lib.field.resolve_field_metadata(query,stage_number,field_clause);
if(cljs.core.truth_(temp__5802__auto__)){
var field_metadata = temp__5802__auto__;
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,field_metadata);
} else {
return "unknown_field";
}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (query,stage_number,field_metadata){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__80877 = cljs.core.get_method(metabase.lib.metadata.calculation.display_info_method,new cljs.core.Keyword(null,"default","default",-1987822328));
return (fexpr__80877.cljs$core$IFn$_invoke$arity$3 ? fexpr__80877.cljs$core$IFn$_invoke$arity$3(query,stage_number,field_metadata) : fexpr__80877.call(null,query,stage_number,field_metadata));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(field_metadata),new cljs.core.Keyword("source","card","source/card",-139977973)))?(function (){var temp__5804__auto__ = new cljs.core.Keyword("lib","card-id","lib/card-id",-1770167062).cljs$core$IFn$_invoke$arity$1(field_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var card_id = temp__5804__auto__;
var temp__5804__auto____$1 = metabase.lib.metadata.card(query,card_id);
if(cljs.core.truth_(temp__5804__auto____$1)){
var card = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card)], null)], null);
} else {
return null;
}
} else {
return null;
}
})():null)], 0));
}));
metabase.lib.temporal_bucket.temporal_bucket_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__80882){
var vec__80886 = p__80882;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80886,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80886,(1),null);
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80886,(2),null);
return new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(opts);
}));
metabase.lib.temporal_bucket.temporal_bucket_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (metadata){
return new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727).cljs$core$IFn$_invoke$arity$1(metadata);
}));
metabase.lib.temporal_bucket.with_temporal_bucket_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__80905,unit){
var vec__80907 = p__80905;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80907,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80907,(1),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80907,(2),null);
if(cljs.core.truth_(unit)){
var extraction_unit_QMARK_ = cljs.core.contains_QMARK_(metabase.lib.schema.temporal_bucketing.datetime_extraction_units,unit);
var original_effective_type = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(options);
var new_effective_type = ((extraction_unit_QMARK_)?new cljs.core.Keyword("type","Integer","type/Integer",-638928316):original_effective_type);
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new_effective_type,new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372),original_effective_type], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),options__$1,id_or_name], null);
} else {
var options__$1 = (function (){var temp__5802__auto__ = new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5802__auto__)){
var original_effective_type = temp__5802__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),original_effective_type),new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372));
} else {
return options;
}
})();
var options__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),options__$2,id_or_name], null);
}
}));
metabase.lib.temporal_bucket.with_temporal_bucket_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (metadata,unit){
if(cljs.core.truth_(unit)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metadata,new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),unit);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(metadata,new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727));
}
}));
metabase.lib.temporal_bucket.available_temporal_buckets_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,field_ref){
return metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.field.resolve_field_metadata(query,stage_number,field_ref));
}));
metabase.lib.field.fingerprint_based_default_unit = (function metabase$lib$field$fingerprint_based_default_unit(fingerprint){
try{var temp__5804__auto__ = new cljs.core.Keyword("type","DateTime","type/DateTime",352113310).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(fingerprint));
if(cljs.core.truth_(temp__5804__auto__)){
var map__80946 = temp__5804__auto__;
var map__80946__$1 = cljs.core.__destructure_map(map__80946);
var earliest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80946__$1,new cljs.core.Keyword(null,"earliest","earliest",-1928154382));
var latest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80946__$1,new cljs.core.Keyword(null,"latest","latest",24323665));
var days = metabase.shared.util.time.day_diff.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$1(earliest),metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$1(latest)], 0));
if(cljs.core.NaN_QMARK_(days)){
return null;
} else {
var pred__80951 = cljs.core._GT_;
var expr__80952 = days;
if(cljs.core.truth_((pred__80951.cljs$core$IFn$_invoke$arity$2 ? pred__80951.cljs$core$IFn$_invoke$arity$2((1),expr__80952) : pred__80951.call(null,(1),expr__80952)))){
return new cljs.core.Keyword(null,"minute","minute",-642875969);
} else {
if(cljs.core.truth_((pred__80951.cljs$core$IFn$_invoke$arity$2 ? pred__80951.cljs$core$IFn$_invoke$arity$2((31),expr__80952) : pred__80951.call(null,(31),expr__80952)))){
return new cljs.core.Keyword(null,"day","day",-274800446);
} else {
if(cljs.core.truth_((pred__80951.cljs$core$IFn$_invoke$arity$2 ? pred__80951.cljs$core$IFn$_invoke$arity$2((365),expr__80952) : pred__80951.call(null,(365),expr__80952)))){
return new cljs.core.Keyword(null,"week","week",-1326473278);
} else {
return new cljs.core.Keyword(null,"month","month",-1960248533);
}
}
}
}
} else {
return null;
}
}catch (e80945){if((e80945 instanceof Error)){
var _ = e80945;
return null;
} else {
throw e80945;

}
}});
metabase.lib.field.mark_unit = (function metabase$lib$field$mark_unit(options,option_key,unit){
var G__80959 = options;
if(cljs.core.truth_(cljs.core.some((function (p1__80954_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(p1__80954_SHARP_),unit);
}),options))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (option){
var G__80964 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(option,option_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(option),unit)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80964,option_key,true);
} else {
return G__80964;
}
}),G__80959);
} else {
return G__80959;
}
});
metabase.lib.temporal_bucket.available_temporal_buckets_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (_query,_stage_number,field_metadata){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(field_metadata),new cljs.core.Keyword("source","expressions","source/expressions",-458367840))){
var effective_type = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(field_metadata);
var fingerprint_default = (function (){var G__80992 = field_metadata;
var G__80992__$1 = (((G__80992 == null))?null:new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022).cljs$core$IFn$_invoke$arity$1(G__80992));
if((G__80992__$1 == null)){
return null;
} else {
return metabase.lib.field.fingerprint_based_default_unit(G__80992__$1);
}
})();
var G__80993 = ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("type","DateTime","type/DateTime",352113310)))?metabase.lib.temporal_bucket.datetime_bucket_options:((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("type","Date","type/Date",-690428629)))?metabase.lib.temporal_bucket.date_bucket_options:((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("type","Time","type/Time",-814852413)))?metabase.lib.temporal_bucket.time_bucket_options:cljs.core.PersistentVector.EMPTY
)));
var G__80993__$1 = (cljs.core.truth_(fingerprint_default)?metabase.lib.field.mark_unit(G__80993,new cljs.core.Keyword(null,"default","default",-1987822328),fingerprint_default):G__80993);
if(cljs.core.truth_(new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727).cljs$core$IFn$_invoke$arity$1(field_metadata))){
return metabase.lib.field.mark_unit(G__80993__$1,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727).cljs$core$IFn$_invoke$arity$1(field_metadata));
} else {
return G__80993__$1;
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));
metabase.lib.binning.binning_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (field_clause){
var G__80994 = field_clause;
var G__80994__$1 = (((G__80994 == null))?null:metabase.lib.options.options(G__80994));
var G__80994__$2 = (((G__80994__$1 == null))?null:new cljs.core.Keyword(null,"binning","binning",1709835866).cljs$core$IFn$_invoke$arity$1(G__80994__$1));
if((G__80994__$2 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__80994__$2,new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.binning","binning","metabase.lib.binning/binning",-2037319392),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"metadata-fn","metadata-fn",915781389),(function (query,stage_number){
return metabase.lib.field.resolve_field_metadata(query,stage_number,field_clause);
})], 0));
}
}));
metabase.lib.binning.binning_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (metadata){
var G__80995 = metadata;
var G__80995__$1 = (((G__80995 == null))?null:new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823).cljs$core$IFn$_invoke$arity$1(G__80995));
if((G__80995__$1 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__80995__$1,new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.binning","binning","metabase.lib.binning/binning",-2037319392),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"metadata-fn","metadata-fn",915781389),cljs.core.constantly(metadata)], 0));
}
}));
metabase.lib.binning.with_binning_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (field_clause,binning){
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(field_clause,metabase.util.assoc_dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"binning","binning",1709835866),binning], 0));
}));
metabase.lib.binning.with_binning_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (metadata,binning){
return metabase.util.assoc_dissoc(metadata,new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),binning);
}));
metabase.lib.binning.available_binning_strategies_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,field_ref){
return metabase.lib.binning.available_binning_strategies.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.field.resolve_field_metadata(query,stage_number,field_ref));
}));
metabase.lib.binning.available_binning_strategies_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (query,_stage_number,p__80999){
var map__81000 = p__80999;
var map__81000__$1 = cljs.core.__destructure_map(map__81000);
var field_metadata = map__81000__$1;
var effective_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81000__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458));
var fingerprint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81000__$1,new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022));
var semantic_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81000__$1,new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(field_metadata),new cljs.core.Keyword("source","expressions","source/expressions",-458367840))){
var binning_QMARK_ = (function (){var G__81001 = query;
var G__81001__$1 = (((G__81001 == null))?null:metabase.lib.metadata.database(G__81001));
var G__81001__$2 = (((G__81001__$1 == null))?null:new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(G__81001__$1));
if((G__81001__$2 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__81001__$2,new cljs.core.Keyword(null,"binning","binning",1709835866));
}
})();
var fingerprint__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fingerprint,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("type","Number","type/Number",-2071693690)], null));
var existing = metabase.lib.binning.binning(field_metadata);
var strategies = ((cljs.core.not((function (){var and__5043__auto__ = binning_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(fingerprint__$1);
if(cljs.core.truth_(and__5043__auto____$1)){
return new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(fingerprint__$1);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})()))?null:((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(semantic_type,new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043)))?metabase.lib.binning.coordinate_binning_strategies():((((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("type","Number","type/Number",-2071693690))) && ((!(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(semantic_type,new cljs.core.Keyword("Relation","*","Relation/*",-706261522)))))))?metabase.lib.binning.numeric_binning_strategies():null)));
var iter__5523__auto__ = (function metabase$lib$field$iter__81002(s__81003){
return (new cljs.core.LazySeq(null,(function (){
var s__81003__$1 = s__81003;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81003__$1);
if(temp__5804__auto__){
var s__81003__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81003__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81003__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81005 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81004 = (0);
while(true){
if((i__81004 < size__5522__auto__)){
var strat = cljs.core._nth(c__5521__auto__,i__81004);
cljs.core.chunk_append(b__81005,(function (){var G__81008 = strat;
if(metabase.lib.binning.strategy_EQ_(strat,existing)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81008,new cljs.core.Keyword(null,"selected","selected",574897764),true);
} else {
return G__81008;
}
})());

var G__81231 = (i__81004 + (1));
i__81004 = G__81231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81005),metabase$lib$field$iter__81002(cljs.core.chunk_rest(s__81003__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81005),null);
}
} else {
var strat = cljs.core.first(s__81003__$2);
return cljs.core.cons((function (){var G__81010 = strat;
if(metabase.lib.binning.strategy_EQ_(strat,existing)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81010,new cljs.core.Keyword(null,"selected","selected",574897764),true);
} else {
return G__81010;
}
})(),metabase$lib$field$iter__81002(cljs.core.rest(s__81003__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(strategies);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));
metabase.lib.ref.ref_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (field_clause){
return field_clause;
}));
metabase.lib.ref.ref_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (p__81011){
var map__81012 = p__81011;
var map__81012__$1 = cljs.core.__destructure_map(map__81012);
var metadata = map__81012__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81012__$1,new cljs.core.Keyword("lib","source","lib/source",-434086550));
var G__81013 = source;
var G__81013__$1 = (((G__81013 instanceof cljs.core.Keyword))?G__81013.fqn:null);
switch (G__81013__$1) {
case "source/aggregations":
return metabase.lib.aggregation.column_metadata__GT_aggregation_ref(metadata);

break;
case "source/expressions":
return metabase.lib.expression.column_metadata__GT_expression_ref(metadata);

break;
default:
var inherited_column_QMARK_ = (function (){var G__81015 = new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(metadata);
var fexpr__81014 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("source","card","source/card",-139977973),null,new cljs.core.Keyword("source","native","source/native",-1444604147),null,new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878),null], null), null);
return (fexpr__81014.cljs$core$IFn$_invoke$arity$1 ? fexpr__81014.cljs$core$IFn$_invoke$arity$1(G__81015) : fexpr__81014.call(null,G__81015));
})();
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),metabase.lib.field.column_metadata_effective_type(metadata)], null),(function (){var temp__5804__auto__ = metabase.lib.join.current_join_alias(metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var join_alias = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),join_alias], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var temporal_unit = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),temporal_unit], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var binning = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binning","binning",1709835866),binning], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var source_field_id = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-field","source-field",933829534),source_field_id], null);
} else {
return null;
}
})()], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),options,(cljs.core.truth_(inherited_column_QMARK_)?(function (){var or__5045__auto__ = new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata);
}
})():(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata);
}
})())], null);

}
}));
metabase.lib.field.implicit_join_name = (function metabase$lib$field$implicit_join_name(query,p__81018){
var map__81019 = p__81018;
var map__81019__$1 = cljs.core.__destructure_map(map__81019);
var _field_metadata = map__81019__$1;
var fk_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81019__$1,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81019__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
if(cljs.core.truth_((function (){var and__5043__auto__ = fk_field_id;
if(cljs.core.truth_(and__5043__auto__)){
return table_id;
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto__ = metabase.lib.field.table_metadata(query,table_id);
if(cljs.core.truth_(temp__5804__auto__)){
var table = temp__5804__auto__;
var table_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(table);
var source_field_id_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.field(query,fk_field_id));
return metabase.lib.join.implicit_join_name(table_name,source_field_id_name);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query field-metadata :- lib.metadata/ColumnMetadata]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Desired alias for a Field e.g.
 * 
 *  my_field
 * 
 *  OR
 * 
 *  MyJoin__my_field
 * 
 *   You should pass the results thru a unique name function.
 */
metabase.lib.field.desired_alias = (function metabase$lib$field$desired_alias(query,field_metadata){

var temp__5802__auto__ = (function (){var or__5045__auto__ = metabase.lib.join.current_join_alias(field_metadata);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.lib.field.implicit_join_name(query,field_metadata);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var join_alias = temp__5802__auto__;
return metabase.lib.join.joined_field_desired_alias(join_alias,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_metadata));
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_metadata);
}
});
/**
 * Create refs for all the expressions in a stage of a query.
 */
metabase.lib.field.expression_refs = (function metabase$lib$field$expression_refs(query,stage_number){
var iter__5523__auto__ = (function metabase$lib$field$expression_refs_$_iter__81083(s__81084){
return (new cljs.core.LazySeq(null,(function (){
var s__81084__$1 = s__81084;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81084__$1);
if(temp__5804__auto__){
var s__81084__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81084__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81084__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81086 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81085 = (0);
while(true){
if((i__81085 < size__5522__auto__)){
var col = cljs.core._nth(c__5521__auto__,i__81085);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword("source","expressions","source/expressions",-458367840))){
cljs.core.chunk_append(b__81086,metabase.lib.ref.ref(col));

var G__81235 = (i__81085 + (1));
i__81085 = G__81235;
continue;
} else {
var G__81236 = (i__81085 + (1));
i__81085 = G__81236;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81086),metabase$lib$field$expression_refs_$_iter__81083(cljs.core.chunk_rest(s__81084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81086),null);
}
} else {
var col = cljs.core.first(s__81084__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword("source","expressions","source/expressions",-458367840))){
return cljs.core.cons(metabase.lib.ref.ref(col),metabase$lib$field$expression_refs_$_iter__81083(cljs.core.rest(s__81084__$2)));
} else {
var G__81238 = cljs.core.rest(s__81084__$2);
s__81084__$1 = G__81238;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(query,stage_number),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"include-joined?","include-joined?",-410632824),false,new cljs.core.Keyword(null,"include-expressions?","include-expressions?",-1817639288),true,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null)));
});
/**
 * Inputs: ([xs]
 *         [query xs]
 *         [query :- :metabase.lib.schema/query stage-number :- :int xs])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Specify the `:fields` for a query. Pass `nil` or an empty sequence to remove `:fields`.
 */
metabase.lib.field.with_fields = (function metabase$lib$field$with_fields(var_args){
var G__81094 = arguments.length;
switch (G__81094) {
case 1:
return metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$1 = (function (xs){

return (function (query,stage_number){
return metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$3(query,stage_number,xs);
});
}));

(metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$2 = (function (query,xs){

return metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$3(query,(-1),xs);
}));

(metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,xs){

var xs__$1 = cljs.core.not_empty(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,xs));
var xs__$2 = (function (){var G__81095 = xs__$1;
if((G__81095 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__81095,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__81088_SHARP_){
return metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$2(p1__81088_SHARP_,xs__$1);
})),metabase.lib.field.expression_refs(query,stage_number));
}
})();
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,metabase.util.assoc_dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230),xs__$2], 0));
}));

(metabase.lib.field.with_fields.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:ref :metabase.lib.schema/fields]]
 *        
 * 
 *   Fetches the `:fields` for a query. Returns `nil` if there are no `:fields`. `:fields` should never be empty; this is
 *   enforced by the Malli schema.
 */
metabase.lib.field.fields = (function metabase$lib$field$fields(var_args){
var G__81098 = arguments.length;
switch (G__81098) {
case 1:
return metabase.lib.field.fields.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.field.fields.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.field.fields.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.field.fields.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.field.fields.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

return new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number));
}));

(metabase.lib.field.fields.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:sequential lib.metadata/ColumnMetadata]
 *        
 * 
 *   Return a sequence of column metadatas for columns that you can specify in the `:fields` of a query. This is
 *   basically just the columns returned by the source Table/Saved Question/Model or previous query stage.
 * 
 *   Includes a `:selected?` key letting you know this column is already in `:fields` or not; if `:fields` is
 *   unspecified, all these columns are returned by default, so `:selected?` is true for all columns (this is a little
 *   strange but it matches the behavior of the QB UI).
 */
metabase.lib.field.fieldable_columns = (function metabase$lib$field$fieldable_columns(var_args){
var G__81160 = arguments.length;
switch (G__81160) {
case 1:
return metabase.lib.field.fieldable_columns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.field.fieldable_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.field.fieldable_columns.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.field.fieldable_columns.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.field.fieldable_columns.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

var current_fields = metabase.lib.field.fields.cljs$core$IFn$_invoke$arity$2(query,stage_number);
var selected_column_QMARK_ = ((cljs.core.empty_QMARK_(current_fields))?cljs.core.constantly(true):(function (column){
var col_ref = metabase.lib.ref.ref(column);
return cljs.core.boolean$(cljs.core.some((function (fields_ref){
return metabase.lib.equality.ref_EQ_(col_ref,fields_ref);
}),current_fields));
}));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_column_QMARK_(col));
}),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(query,stage_number),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"include-joined?","include-joined?",-410632824),false,new cljs.core.Keyword(null,"include-expressions?","include-expressions?",-1817639288),false,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null)));
}));

(metabase.lib.field.fieldable_columns.cljs$lang$maxFixedArity = 2);

Object.defineProperty(module.exports, "expression_refs", { enumerable: false, get: function() { return metabase.lib.field.expression_refs; } });
Object.defineProperty(module.exports, "resolve_column_name", { enumerable: false, get: function() { return metabase.lib.field.resolve_column_name; } });
Object.defineProperty(module.exports, "table_metadata", { enumerable: false, get: function() { return metabase.lib.field.table_metadata; } });
Object.defineProperty(module.exports, "with_fields", { enumerable: false, get: function() { return metabase.lib.field.with_fields; } });
Object.defineProperty(module.exports, "resolve_column_name_in_metadata", { enumerable: false, get: function() { return metabase.lib.field.resolve_column_name_in_metadata; } });
Object.defineProperty(module.exports, "normalize_field_options", { enumerable: false, get: function() { return metabase.lib.field.normalize_field_options; } });
Object.defineProperty(module.exports, "fieldable_columns", { enumerable: false, get: function() { return metabase.lib.field.fieldable_columns; } });
Object.defineProperty(module.exports, "fingerprint_based_default_unit", { enumerable: false, get: function() { return metabase.lib.field.fingerprint_based_default_unit; } });
Object.defineProperty(module.exports, "resolve_field_metadata", { enumerable: false, get: function() { return metabase.lib.field.resolve_field_metadata; } });
Object.defineProperty(module.exports, "add_parent_column_metadata", { enumerable: false, get: function() { return metabase.lib.field.add_parent_column_metadata; } });
Object.defineProperty(module.exports, "fields", { enumerable: false, get: function() { return metabase.lib.field.fields; } });
Object.defineProperty(module.exports, "normalize_binning_options", { enumerable: false, get: function() { return metabase.lib.field.normalize_binning_options; } });
Object.defineProperty(module.exports, "desired_alias", { enumerable: false, get: function() { return metabase.lib.field.desired_alias; } });
Object.defineProperty(module.exports, "column_metadata_effective_type", { enumerable: false, get: function() { return metabase.lib.field.column_metadata_effective_type; } });
Object.defineProperty(module.exports, "mark_unit", { enumerable: false, get: function() { return metabase.lib.field.mark_unit; } });
Object.defineProperty(module.exports, "implicit_join_name", { enumerable: false, get: function() { return metabase.lib.field.implicit_join_name; } });
Object.defineProperty(module.exports, "resolve_field_id", { enumerable: false, get: function() { return metabase.lib.field.resolve_field_id; } });
//# sourceMappingURL=metabase.lib.field.js.map
