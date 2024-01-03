var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.join.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
require("./metabase.util.humanization.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.table.js");

goog.provide('metabase.lib.table');
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","table","metadata/table",-882499405),(function (_query,_stage_number,table_metadata,_style){
var or__5045__auto__ = new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(table_metadata);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__81123 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(table_metadata);
if((G__81123 == null)){
return null;
} else {
return metabase.util.humanization.name__GT_human_readable_name.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"simple","simple",-581868663),G__81123);
}
}
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","table","metadata/table",-882499405),(function (_query,_stage_number,table_metadata){
return table_metadata;
}));
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"source-table","source-table",-225307692),(function (query,stage_number,_k){
var map__81127 = metabase.lib.util.query_stage(query,stage_number);
var map__81127__$1 = cljs.core.__destructure_map(map__81127);
var source_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81127__$1,new cljs.core.Keyword(null,"source-table","source-table",-225307692));
if(cljs.core.truth_(source_table)){
if(cljs.core.integer_QMARK_(source_table)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Unexpected source table ID {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_table], 0))], 0))),"\n","(integer? source-table)"].join('')));
}

var or__5045__auto__ = (function (){var temp__5804__auto__ = metabase.lib.metadata.table(query,source_table);
if(cljs.core.truth_(temp__5804__auto__)){
var table_metadata = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,table_metadata,new cljs.core.Keyword(null,"long","long",-171452093));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Table {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_table], 0))], 0));
}
} else {
return null;
}
}));
/**
 * Remove Fields that shouldn't be visible from the default Fields for a source Table.
 *   See [[metabase.query-processor.middleware.add-implicit-clauses/table->sorted-fields*]].
 */
metabase.lib.table.remove_hidden_default_fields = (function metabase$lib$table$remove_hidden_default_fields(field_metadatas){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__81131){
var map__81132 = p__81131;
var map__81132__$1 = cljs.core.__destructure_map(map__81132);
var _field_metadata = map__81132__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81132__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var visibility_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81132__$1,new cljs.core.Keyword(null,"visibility-type","visibility-type",1708521558));
var or__5045__auto__ = active_QMARK_ === false;
if(or__5045__auto__){
return or__5045__auto__;
} else {
var G__81134 = (function (){var G__81135 = visibility_type;
if((G__81135 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__81135);
}
})();
var fexpr__81133 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"retired","retired",-334274397),null,new cljs.core.Keyword(null,"sensitive","sensitive",1953854922),null], null), null);
return (fexpr__81133.cljs$core$IFn$_invoke$arity$1 ? fexpr__81133.cljs$core$IFn$_invoke$arity$1(G__81134) : fexpr__81133.call(null,G__81134));
}
}),field_metadatas);
});
/**
 * Sort default Fields for a source Table. See [[metabase.models.table/field-order-rule]].
 */
metabase.lib.table.sort_default_fields = (function metabase$lib$table$sort_default_fields(field_metadatas){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__81140){
var map__81141 = p__81140;
var map__81141__$1 = cljs.core.__destructure_map(map__81141);
var _field_metadata = map__81141__$1;
var field_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81141__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81141__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = position;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),metabase.util.lower_case_en((function (){var or__5045__auto__ = field_name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})())], null);
}),field_metadatas);
});
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","table","metadata/table",-882499405),(function (query,_stage_number,table_metadata,p__81142){
var map__81143 = p__81142;
var map__81143__$1 = cljs.core.__destructure_map(map__81143);
var _options = map__81143__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81143__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
var temp__5804__auto__ = metabase.lib.metadata.fields(query,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(table_metadata));
if(cljs.core.truth_(temp__5804__auto__)){
var field_metadatas = temp__5804__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(col,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","table-defaults","source/table-defaults",909975194),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81145 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})();
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81145) : unique_name_fn.call(null,G__81145));
})()], 0));
}),metabase.lib.table.sort_default_fields(metabase.lib.table.remove_hidden_default_fields(field_metadatas)));
} else {
return null;
}
}));
metabase.lib.join.join_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","table","metadata/table",-882499405),(function (p__81148){
var map__81149 = p__81148;
var map__81149__$1 = cljs.core.__destructure_map(map__81149);
var table_metadata = map__81149__$1;
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81149__$1,new cljs.core.Keyword("metabase.lib.table","join-alias","metabase.lib.table/join-alias",-1021212739));
var join_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81149__$1,new cljs.core.Keyword("metabase.lib.table","join-fields","metabase.lib.table/join-fields",17340333));
var G__81150 = metabase.lib.join.join_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.Keyword("lib","options","lib/options",99794548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null),new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(table_metadata)], null));
var G__81150__$1 = (cljs.core.truth_(join_alias)?metabase.lib.join.with_join_alias(G__81150,join_alias):G__81150);
if(cljs.core.truth_(join_fields)){
return metabase.lib.join.with_join_fields(G__81150__$1,join_fields);
} else {
return G__81150__$1;
}
}));
Object.defineProperty(module.exports, "remove_hidden_default_fields", { enumerable: false, get: function() { return metabase.lib.table.remove_hidden_default_fields; } });
Object.defineProperty(module.exports, "sort_default_fields", { enumerable: false, get: function() { return metabase.lib.table.sort_default_fields; } });
//# sourceMappingURL=metabase.lib.table.js.map
