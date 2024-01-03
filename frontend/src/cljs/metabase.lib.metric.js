var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.metadata.protocols.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.util.js");
require("./metabase.mbql.normalize.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.metric.js");

goog.provide('metabase.lib.metric');
metabase.lib.metric.resolve_metric = (function metabase$lib$metric$resolve_metric(query,metric_id){
if(cljs.core.integer_QMARK_(metric_id)){
return metabase.lib.metadata.metric(query,metric_id);
} else {
return null;
}
});
/**
 * Inputs: [{:keys [definition], :as _metric-metadata} :- lib.metadata/MetricMetadata]
 *   Return: [:maybe :metabase.lib.schema/stage.mbql]
 */
metabase.lib.metric.metric_definition = (function metabase$lib$metric$metric_definition(p__81363){
var map__81365 = p__81363;
var map__81365__$1 = cljs.core.__destructure_map(map__81365);
var _metric_metadata = map__81365__$1;
var definition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81365__$1,new cljs.core.Keyword(null,"definition","definition",-1198729982));

if(cljs.core.truth_(definition)){
if(cljs.core.truth_(new cljs.core.Keyword("mbql","type","mbql/type",1170405116).cljs$core$IFn$_invoke$arity$1(definition))){
return definition;
} else {
return metabase.lib.util.query_stage(metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(metabase.mbql.normalize.normalize(metabase.lib.convert.legacy_query_from_inner_query(Number.MAX_SAFE_INTEGER,definition))),(-1));
}
} else {
return null;
}
});
metabase.lib.ref.ref_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),(function (p__81372){
var map__81373 = p__81372;
var map__81373__$1 = cljs.core.__destructure_map(map__81373);
var metric_metadata = map__81373__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81373__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var effective_type = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(metric_metadata);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(metric_metadata);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var temp__5804__auto__ = cljs.core.first(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.metric.metric_definition(metric_metadata)));
if(cljs.core.truth_(temp__5804__auto__)){
var aggregation = temp__5804__auto__;
var ag_effective_type = metabase.lib.schema.expression.type_of(aggregation);
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(ag_effective_type,new cljs.core.Keyword("type","*","type/*",-1283496752))){
return ag_effective_type;
} else {
return null;
}
} else {
return null;
}
}
}
})();
var options = (function (){var G__81382 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null);
if(cljs.core.truth_(effective_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81382,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),effective_type);
} else {
return G__81382;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metric","metric",408798077),options,id], null);
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),(function (query,stage_number,metric_metadata){
var or__5045__auto__ = (function (){var temp__5804__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.metric.metric_definition(metric_metadata)));
if(cljs.core.truth_(temp__5804__auto__)){
var vec__81385 = temp__5804__auto__;
var aggregation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81385,(0),null);
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,aggregation);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (query,stage_number,p__81393){
var vec__81394 = p__81393;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81394,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81394,(1),null);
var metric_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81394,(2),null);
var or__5045__auto__ = (function (){var temp__5804__auto__ = metabase.lib.metric.resolve_metric(query,metric_id_or_name);
if(cljs.core.truth_(temp__5804__auto__)){
var metric_metadata = temp__5804__auto__;
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,metric_metadata);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
}));
metabase.lib.metric.fallback_display_name = (function metabase$lib$metric$fallback_display_name(){
return metabase.shared.util.i18n.js_i18n("[Unknown Metric]");
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),(function (_query,_stage_number,metric_metadata,_style){
var or__5045__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"name","name",1843675177))(metric_metadata);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.lib.metric.fallback_display_name();
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (query,stage_number,p__81399,style){
var vec__81401 = p__81399;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81401,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81401,(1),null);
var metric_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81401,(2),null);
var or__5045__auto__ = (function (){var temp__5804__auto__ = metabase.lib.metric.resolve_metric(query,metric_id_or_name);
if(cljs.core.truth_(temp__5804__auto__)){
var metric_metadata = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,metric_metadata,style);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.lib.metric.fallback_display_name();
}
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int metric-id :- :metabase.lib.schema.id/metric]
 *   Return: :boolean
 *        
 * 
 *   Whether a given stage of a query currently includes a `:metric` ref clause in its aggregations.
 */
metabase.lib.metric.aggregating_by_metric_QMARK_ = (function metabase$lib$metric$aggregating_by_metric_QMARK_(query,stage_number,metric_id){

var map__81409 = metabase.lib.util.query_stage(query,stage_number);
var map__81409__$1 = cljs.core.__destructure_map(map__81409);
var aggregations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81409__$1,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696));
return cljs.core.boolean$(cljs.core.some((function (p__81412){
var vec__81414 = p__81412;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81414,(0),null);
var clause = vec__81414;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"metric","metric",408798077))){
var vec__81417 = clause;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81417,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81417,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81417,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,metric_id);
} else {
return null;
}
}),aggregations));
});
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),(function (query,stage_number,p__81422){
var map__81423 = p__81422;
var map__81423__$1 = cljs.core.__destructure_map(map__81423);
var metric_metadata = map__81423__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81423__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81423__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__81424 = cljs.core.get_method(metabase.lib.metadata.calculation.display_info_method,new cljs.core.Keyword(null,"default","default",-1987822328));
return (fexpr__81424.cljs$core$IFn$_invoke$arity$3 ? fexpr__81424.cljs$core$IFn$_invoke$arity$3(query,stage_number,metric_metadata) : fexpr__81424.call(null,query,stage_number,metric_metadata));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),description], null),((metabase.lib.metric.aggregating_by_metric_QMARK_(query,stage_number,id))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),true], null):null)], 0));
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (query,stage_number,p__81430){
var vec__81431 = p__81430;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81431,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81431,(1),null);
var metric_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81431,(2),null);
var temp__5802__auto__ = metabase.lib.metric.resolve_metric(query,metric_id_or_name);
if(cljs.core.truth_(temp__5802__auto__)){
var metric_metadata = temp__5802__auto__;
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,metric_metadata);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword("type","*","type/*",-1283496752),new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metric.fallback_display_name(),new cljs.core.Keyword(null,"long-display-name","long-display-name",1550784464),metabase.lib.metric.fallback_display_name()], null);
}
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (query,stage_number,p__81434){
var vec__81435 = p__81434;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81435,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81435,(1),null);
var metric_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81435,(2),null);
var or__5045__auto__ = (function (){var temp__5804__auto__ = metabase.lib.metric.resolve_metric(query,metric_id_or_name);
if(cljs.core.truth_(temp__5804__auto__)){
var metric_metadata = temp__5804__auto__;
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,metric_metadata);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "metric";
}
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: [:maybe [:sequential {:min 1} lib.metadata/MetricMetadata]]
 *        
 * 
 *   Get a list of Metrics that you may consider using as aggregations for a query. Only Metrics that have the same
 *   `table-id` as the `source-table` for this query will be suggested.
 */
metabase.lib.metric.available_metrics = (function metabase$lib$metric$available_metrics(query){

var temp__5804__auto__ = metabase.lib.util.source_table_id(query);
if(cljs.core.truth_(temp__5804__auto__)){
var source_table_id = temp__5804__auto__;
return cljs.core.not_empty(metabase.lib.metadata.protocols.metrics(metabase.lib.metadata.__GT_metadata_provider(query),source_table_id));
} else {
return null;
}
});
Object.defineProperty(module.exports, "resolve_metric", { enumerable: false, get: function() { return metabase.lib.metric.resolve_metric; } });
Object.defineProperty(module.exports, "metric_definition", { enumerable: false, get: function() { return metabase.lib.metric.metric_definition; } });
Object.defineProperty(module.exports, "fallback_display_name", { enumerable: false, get: function() { return metabase.lib.metric.fallback_display_name; } });
Object.defineProperty(module.exports, "aggregating_by_metric_QMARK_", { enumerable: false, get: function() { return metabase.lib.metric.aggregating_by_metric_QMARK_; } });
Object.defineProperty(module.exports, "available_metrics", { enumerable: false, get: function() { return metabase.lib.metric.available_metrics; } });
//# sourceMappingURL=metabase.lib.metric.js.map
