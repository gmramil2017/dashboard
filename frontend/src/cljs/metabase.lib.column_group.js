var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.join.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.column_group.js");

goog.provide('metabase.lib.column_group');
metabase.lib.column_group.GroupType = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword("group-type","main","group-type/main",-938346573),new cljs.core.Keyword("group-type","join.explicit","group-type/join.explicit",-627022785),new cljs.core.Keyword("group-type","join.implicit","group-type/join.implicit",-684408229)], null);
/**
 * Schema for the metadata returned by [[group-columns]], and accepted by [[columns-group-columns]].
 */
metabase.lib.column_group.ColumnGroup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("metadata","column-group","metadata/column-group",-902258024)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454),metabase.lib.column_group.GroupType], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.column-group","columns","metabase.lib.column-group/columns",1229087729),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),metabase.lib.metadata.ColumnMetadata], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("group-type","main","group-type/main",-938346573),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("group-type","join.explicit","group-type/join.explicit",-627022785),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("group-type","join.implicit","group-type/join.implicit",-684408229),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","field","metabase.lib.schema.id/field",-985236431)], null)], null)], null)], null)], null)], null);
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column-group","metadata/column-group",-902258024),(function (_query,_stage_number,column_group){
return column_group;
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column-group","metadata/column-group",-902258024),(function (query,stage_number,column_group){
var G__80432 = new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454).cljs$core$IFn$_invoke$arity$1(column_group);
var G__80432__$1 = (((G__80432 instanceof cljs.core.Keyword))?G__80432.fqn:null);
switch (G__80432__$1) {
case "group-type/main":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var stage = metabase.lib.util.query_stage(query,stage_number);
var or__5045__auto__ = (function (){var temp__5804__auto__ = (function (){var G__80433 = new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(stage);
if((G__80433 == null)){
return null;
} else {
return metabase.lib.metadata.table(query,G__80433);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var table = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,table);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = (function (){var G__80434 = new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(stage);
if((G__80434 == null)){
return null;
} else {
return metabase.lib.metadata.card(query,G__80434);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var card = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,card);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = ((cljs.core.next(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),""], null):null);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage)], null);
}
}
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-from-join","is-from-join",-1107917905),false,new cljs.core.Keyword(null,"is-implicitly-joinable","is-implicitly-joinable",2054926844),false], null)], 0));

break;
case "group-type/join.explicit":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var join_alias = new cljs.core.Keyword(null,"join-alias","join-alias",1454206794).cljs$core$IFn$_invoke$arity$1(column_group);
var temp__5804__auto__ = metabase.lib.join.resolve_join(query,stage_number,join_alias);
if(cljs.core.truth_(temp__5804__auto__)){
var join = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,join);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-from-join","is-from-join",-1107917905),true,new cljs.core.Keyword(null,"is-implicitly-joinable","is-implicitly-joinable",2054926844),false], null)], 0));

break;
case "group-type/join.implicit":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fk_field_id = new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357).cljs$core$IFn$_invoke$arity$1(column_group);
var temp__5804__auto__ = metabase.lib.metadata.field(query,fk_field_id);
if(cljs.core.truth_(temp__5804__auto__)){
var field = temp__5804__auto__;
var field_info = metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,field);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(field_info,new cljs.core.Keyword(null,"fk-reference-name","fk-reference-name",74295339),metabase.lib.util.strip_id(new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(field_info)));
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-from-join","is-from-join",-1107917905),false,new cljs.core.Keyword(null,"is-implicitly-joinable","is-implicitly-joinable",2054926844),true], null)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80432__$1)].join('')));

}
}));
/**
 * Inputs: [{source :lib/source, :as column-metadata} :- lib.metadata/ColumnMetadata]
 *   Return: [:map [:metabase.lib.column-group/group-type GroupType]]
 *        
 * 
 *   The value we should use to `group-by` inside [[group-columns]].
 */
metabase.lib.column_group.column_group_info = (function metabase$lib$column_group$column_group_info(p__80439){
var map__80440 = p__80439;
var map__80440__$1 = cljs.core.__destructure_map(map__80440);
var column_metadata = map__80440__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80440__$1,new cljs.core.Keyword("lib","source","lib/source",-434086550));

var G__80442 = source;
var G__80442__$1 = (((G__80442 instanceof cljs.core.Keyword))?G__80442.fqn:null);
switch (G__80442__$1) {
case "source/implicitly-joinable":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454),new cljs.core.Keyword("group-type","join.implicit","group-type/join.implicit",-684408229),new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357).cljs$core$IFn$_invoke$arity$1(column_metadata)], null);

break;
case "source/joins":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454),new cljs.core.Keyword("group-type","join.explicit","group-type/join.explicit",-627022785),new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),metabase.lib.join.current_join_alias(column_metadata)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454),new cljs.core.Keyword("group-type","main","group-type/main",-938346573)], null);

}
});
/**
 * Inputs: [column-metadatas :- [:sequential lib.metadata/ColumnMetadata]]
 *   Return: [:sequential ColumnGroup]
 *        
 * 
 *   Given a group of columns returned by a function like [[metabase.lib.order-by/orderable-columns]], group the columns
 *   by Table or equivalent (e.g. Saved Question) so that they're in an appropriate shape for showing in the Query
 *   Builder. e.g a sequence of columns like
 * 
 *  [venues.id
 *   venues.name
 *   venues.category-id
 *   ;; implicitly joinable
 *   categories.id
 *   categories.name]
 * 
 *   would get grouped into groups like
 * 
 *  [{::columns [venues.id
 *               venues.name
 *               venues.category-id]}
 *   {::columns [categories.id
 *               categories.name]}]
 * 
 *   Groups have the type `:metadata/column-group` and can be passed directly
 *   to [[metabase.lib.metadata.calculation/display-info]].
 */
metabase.lib.column_group.group_columns = (function metabase$lib$column_group$group_columns(column_metadatas){

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__80444){
var vec__80445 = p__80444;
var group_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80445,(0),null);
var columns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80445,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(group_info,new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column-group","metadata/column-group",-902258024),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("metabase.lib.column-group","columns","metabase.lib.column-group/columns",1229087729),columns], 0));
}),cljs.core.group_by(metabase.lib.column_group.column_group_info,column_metadatas));
});
/**
 * Inputs: [column-group :- ColumnGroup]
 *   Return: [:sequential lib.metadata/ColumnMetadata]
 *        
 * 
 *   Get the columns associated with a column group
 */
metabase.lib.column_group.columns_group_columns = (function metabase$lib$column_group$columns_group_columns(column_group){

return new cljs.core.Keyword("metabase.lib.column-group","columns","metabase.lib.column-group/columns",1229087729).cljs$core$IFn$_invoke$arity$1(column_group);
});
Object.defineProperty(module.exports, "GroupType", { enumerable: false, get: function() { return metabase.lib.column_group.GroupType; } });
Object.defineProperty(module.exports, "ColumnGroup", { enumerable: false, get: function() { return metabase.lib.column_group.ColumnGroup; } });
Object.defineProperty(module.exports, "column_group_info", { enumerable: false, get: function() { return metabase.lib.column_group.column_group_info; } });
Object.defineProperty(module.exports, "group_columns", { enumerable: false, get: function() { return metabase.lib.column_group.group_columns; } });
Object.defineProperty(module.exports, "columns_group_columns", { enumerable: false, get: function() { return metabase.lib.column_group.columns_group_columns; } });
//# sourceMappingURL=metabase.lib.column_group.js.map
