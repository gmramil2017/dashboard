var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$crc_32.js");
require("./clojure.set.js");
require("./clojure.string.js");
require("./medley.core.js");
require("./metabase.lib.common.js");
require("./metabase.lib.options.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.id.js");
require("./metabase.mbql.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.util.js");

goog.provide('metabase.lib.util');
/**
 * Exactly like [[clojure.core/format]] but ClojureScript-friendly.
 */
metabase.lib.util.format = goog.string.format;
/**
 * Returns true if this is a clause.
 */
metabase.lib.util.clause_QMARK_ = (function metabase$lib$util$clause_QMARK_(clause){
return ((cljs.core.vector_QMARK_(clause)) && ((((cljs.core.count(clause) > (1))) && ((((cljs.core.first(clause) instanceof cljs.core.Keyword)) && (((cljs.core.map_QMARK_(cljs.core.second(clause))) && (cljs.core.contains_QMARK_(cljs.core.second(clause),new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720))))))))));
});
/**
 * Returns true if this is a clause.
 */
metabase.lib.util.clause_of_type_QMARK_ = (function metabase$lib$util$clause_of_type_QMARK_(clause,clause_type){
return ((metabase.lib.util.clause_QMARK_(clause)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clause),clause_type)));
});
/**
 * Returns true if this is a field clause.
 */
metabase.lib.util.field_clause_QMARK_ = (function metabase$lib$util$field_clause_QMARK_(clause){
return metabase.lib.util.clause_of_type_QMARK_(clause,new cljs.core.Keyword(null,"field","field",-1302436500));
});
/**
 * Returns the :lib/expression-name of `clause`. Returns nil if `clause` is not a clause.
 */
metabase.lib.util.expression_name = (function metabase$lib$util$expression_name(clause){
if(metabase.lib.util.clause_QMARK_(clause)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clause,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590)], null));
} else {
return null;
}
});
/**
 * Top level expressions must be clauses with :lib/expression-name, so if we get a literal, wrap it in :value.
 */
metabase.lib.util.named_expression_clause = (function metabase$lib$util$named_expression_clause(clause,a_name){
return cljs.core.assoc_in(((metabase.lib.util.clause_QMARK_(clause))?clause:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),metabase.lib.schema.expression.type_of(clause)], null),clause], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590)], null),a_name);
});
/**
 * Replace the `target-clause` in `stage` `location` with `new-clause`.
 * If a clause has :lib/uuid equal to the `target-clause` it is swapped with `new-clause`.
 * If `location` contains no clause with `target-clause` no replacement happens.
 */
metabase.lib.util.replace_clause = (function metabase$lib$util$replace_clause(stage,location,target_clause,new_clause){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.clause_QMARK_,(function (p1__64433_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(p1__64433_SHARP_),new cljs.core.Keyword("mbql","join","mbql/join",-709512370));
}))(target_clause))){
} else {
throw (new Error("Assert failed: ((some-fn clause? (fn* [p1__64433#] (= (:lib/type p1__64433#) :mbql/join))) target-clause)"));
}

var new_clause__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expressions","expressions",255689909),cljs.core.first(location)))?metabase.lib.util.named_expression_clause(new_clause,metabase.lib.util.expression_name(target_clause)):new_clause);
return medley.core.update_existing_in(stage,location,(function (clause_or_clauses){
return cljs.core.vec((function (){var iter__5523__auto__ = (function metabase$lib$util$replace_clause_$_iter__64441(s__64442){
return (new cljs.core.LazySeq(null,(function (){
var s__64442__$1 = s__64442;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__64442__$1);
if(temp__5804__auto__){
var s__64442__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64442__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__64442__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__64444 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__64443 = (0);
while(true){
if((i__64443 < size__5522__auto__)){
var clause = cljs.core._nth(c__5521__auto__,i__64443);
cljs.core.chunk_append(b__64444,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.options.uuid(clause),metabase.lib.options.uuid(target_clause)))?new_clause__$1:clause));

var G__64798 = (i__64443 + (1));
i__64443 = G__64798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64444),metabase$lib$util$replace_clause_$_iter__64441(cljs.core.chunk_rest(s__64442__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64444),null);
}
} else {
var clause = cljs.core.first(s__64442__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.options.uuid(clause),metabase.lib.options.uuid(target_clause)))?new_clause__$1:clause),metabase$lib$util$replace_clause_$_iter__64441(cljs.core.rest(s__64442__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(clause_or_clauses);
})());
}));
});
/**
 * Remove the `target-clause` in `stage` `location`.
 * If a clause has :lib/uuid equal to the `target-clause` it is removed.
 * If `location` contains no clause with `target-clause` no removal happens.
 * If the the location is empty, dissoc it from stage.
 * For the [:fields] location if only expressions remain, dissoc from stage.
 */
metabase.lib.util.remove_clause = (function metabase$lib$util$remove_clause(stage,location,target_clause){
if(metabase.lib.util.clause_QMARK_(target_clause)){
} else {
throw (new Error("Assert failed: (clause? target-clause)"));
}

var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,location);
if(cljs.core.truth_(temp__5802__auto__)){
var target = temp__5802__auto__;
var target_uuid = metabase.lib.options.uuid(target_clause);
var vec__64446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(location),cljs.core.last(location)], null);
var first_loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64446,(0),null);
var last_loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64446,(1),null);
var result = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([target_uuid]),metabase.lib.options.uuid)),target);
var result__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null))) && (cljs.core.every_QMARK_((function (p1__64445_SHARP_){
return metabase.lib.util.clause_of_type_QMARK_(p1__64445_SHARP_,new cljs.core.Keyword(null,"expression","expression",202311876));
}),result))))?null:result);
if(cljs.core.seq(result__$1)){
return cljs.core.assoc_in(stage,location,result__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_loc,last_loc], null))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n("Cannot remove the final join condition"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,location)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_loc,last_loc], null))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(stage,cljs.core.pop(location),cljs.core.dissoc,last_loc);
} else {
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(stage,location);

}
}
}
} else {
return stage;
}
});
/**
 * Convert a `:type` `:native` QP MBQL query to a pMBQL query. See docstring for [[mbql-query->pipeline]] for an
 *   explanation of what this means.
 */
metabase.lib.util.native_query__GT_pipeline = (function metabase$lib$util$native_query__GT_pipeline(query){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194)], null),clojure.set.rename_keys(new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(query),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"native","native",-613060878)], null))], 0))], null)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(query,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"native","native",-613060878)], 0))], 0));
});
/**
 * Updates m with a legacy boolean expression at `legacy-key` into a list with an implied and for pMBQL at `pMBQL-key`
 */
metabase.lib.util.update_legacy_boolean_expression__GT_list = (function metabase$lib$util$update_legacy_boolean_expression__GT_list(m,legacy_key,pMBQL_key){
var G__64450 = m;
var G__64450__$1 = ((cljs.core.contains_QMARK_(m,legacy_key))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__64450,legacy_key,(function (p1__64449_SHARP_){
if(((cljs.core.vector_QMARK_(p1__64449_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__64449_SHARP_),new cljs.core.Keyword(null,"and","and",-971899817))))){
return cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),p1__64449_SHARP_));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64449_SHARP_], null);
}
})):G__64450);
if(cljs.core.contains_QMARK_(m,legacy_key)){
return clojure.set.rename_keys(G__64450__$1,cljs.core.PersistentArrayMap.createAsIfByAssoc([legacy_key,pMBQL_key]));
} else {
return G__64450__$1;
}
});
metabase.lib.util.join__GT_pipeline = (function metabase$lib$util$join__GT_pipeline(join){
var source = cljs.core.select_keys(join,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"source-query","source-query",198004422)], null));
var stages = (metabase.lib.util.inner_query__GT_stages.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.util.inner_query__GT_stages.cljs$core$IFn$_invoke$arity$1(source) : metabase.lib.util.inner_query__GT_stages.call(null,source));
return metabase.lib.options.ensure_uuid(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.util.update_legacy_boolean_expression__GT_list(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(join,new cljs.core.Keyword(null,"source-table","source-table",-225307692),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"source-query","source-query",198004422)], 0)),new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.Keyword(null,"conditions","conditions",-1647236270)),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","join","mbql/join",-709512370),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stages","stages",-442109532),stages], 0)));
});
metabase.lib.util.joins__GT_pipeline = (function metabase$lib$util$joins__GT_pipeline(joins){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.join__GT_pipeline,joins);
});
/**
 * Convert legacy `:source-metadata` to [[metabase.lib.metadata/StageMetadata]].
 */
metabase.lib.util.__GT_stage_metadata = (function metabase$lib$util$__GT_stage_metadata(source_metadata){
if(cljs.core.truth_(source_metadata)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(((cljs.core.seqable_QMARK_(source_metadata))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),source_metadata], null):source_metadata),new cljs.core.Keyword(null,"columns","columns",1998437288),(function (columns){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (column){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_keys(column,metabase.util.__GT_kebab_case_en),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054));
}),columns);
})),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","results","metadata/results",330329298));
} else {
return null;
}
});
metabase.lib.util.inner_query__GT_stages = (function metabase$lib$util$inner_query__GT_stages(p__64468){
var map__64469 = p__64468;
var map__64469__$1 = cljs.core.__destructure_map(map__64469);
var inner_query = map__64469__$1;
var source_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64469__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var source_metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64469__$1,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085));
var previous_stages = (cljs.core.truth_(source_query)?(metabase.lib.util.inner_query__GT_stages.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.util.inner_query__GT_stages.cljs$core$IFn$_invoke$arity$1(source_query) : metabase.lib.util.inner_query__GT_stages.call(null,source_query)):cljs.core.PersistentVector.EMPTY);
var source_metadata__$1 = metabase.lib.util.__GT_stage_metadata(source_metadata);
var previous_stage = (cljs.core.count(previous_stages) - (1));
var previous_stages__$1 = (function (){var G__64475 = previous_stages;
if(cljs.core.truth_((function (){var and__5043__auto__ = source_metadata__$1;
if(cljs.core.truth_(and__5043__auto__)){
return (!((previous_stage < (0))));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc_in(G__64475,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [previous_stage,new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610)], null),source_metadata__$1);
} else {
return G__64475;
}
})();
var stage_type = (cljs.core.truth_(new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(inner_query))?new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194):new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798));
var this_stage = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","type","lib/type",1175424801),stage_type], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(inner_query,new cljs.core.Keyword(null,"source-query","source-query",198004422),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085)], 0))], 0));
var this_stage__$1 = (function (){var G__64483 = this_stage;
var G__64483__$1 = ((cljs.core.seq(new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(this_stage)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__64483,new cljs.core.Keyword(null,"joins","joins",1033962699),metabase.lib.util.joins__GT_pipeline):G__64483);
return metabase.lib.util.update_legacy_boolean_expression__GT_list(G__64483__$1,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"filters","filters",974726919));

})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(previous_stages__$1,this_stage__$1);
});
/**
 * Convert a `:type` `:query` QP MBQL (i.e., MBQL as currently understood by the Query Processor, or the JS MLv1) to a
 *   pMBQL query. The key difference is that instead of having a `:query` with a `:source-query` with a `:source-query`
 *   and so forth, you have a vector of `:stages` where each stage serves as the source query for the next stage.
 *   Initially this was an implementation detail of a few functions, but it's easier to visualize and manipulate, so now
 *   all of MLv2 deals with pMBQL. See this Slack thread
 *   https://metaboat.slack.com/archives/C04DN5VRQM6/p1677118410961169?thread_ts=1677112778.742589&cid=C04DN5VRQM6 for
 *   more information.
 */
metabase.lib.util.mbql_query__GT_pipeline = (function metabase$lib$util$mbql_query__GT_pipeline(query){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),new cljs.core.Keyword(null,"stages","stages",-442109532),metabase.lib.util.inner_query__GT_stages(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(query,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510)], 0))], 0));
});
/**
 * Schema for a map that is either a legacy query OR a pMBQL query.
 */
metabase.lib.util.LegacyOrPMBQLQuery = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"legacy query"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"pMBQL query"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662)], null)], null)], null)], null);
/**
 * Inputs: [query :- LegacyOrPMBQLQuery]
 *   Return: :any
 *        
 * 
 *   Ensure that a `query` is in the general shape of a pMBQL query. This doesn't walk the query and fix everything! The
 *   goal here is just to make sure we have `:stages` in the correct place and the like. See [[metabase.lib.convert]] for
 *   functions that actually ensure all parts of the query match the pMBQL schema (they use this function as part of that
 *   process.)
 */
metabase.lib.util.pipeline = (function metabase$lib$util$pipeline(query){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(query),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662))){
return query;
} else {
var G__64522 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(query);
var G__64522__$1 = (((G__64522 instanceof cljs.core.Keyword))?G__64522.fqn:null);
switch (G__64522__$1) {
case "native":
return metabase.lib.util.native_query__GT_pipeline(query);

break;
case "query":
return metabase.lib.util.mbql_query__GT_pipeline(query);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64522__$1)].join('')));

}
}
});
/**
 * Inputs: [{:keys [stages], :as _query} :- :map stage-number :- :int]
 *   Return: [:int {:min 0}]
 *        
 * 
 *   If `stage-number` index is a negative number e.g. `-1` convert it to a positive index so we can use `nth` on
 *   `stages`. `-1` = the last stage, `-2` = the penultimate stage, etc.
 */
metabase.lib.util.canonical_stage_index = (function metabase$lib$util$canonical_stage_index(p__64524,stage_number){
var map__64525 = p__64524;
var map__64525__$1 = cljs.core.__destructure_map(map__64525);
var _query = map__64525__$1;
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64525__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));

var stage_number_SINGLEQUOTE_ = (((stage_number < (0)))?(cljs.core.count(stages) + stage_number):stage_number);
if((((stage_number_SINGLEQUOTE_ >= cljs.core.count(stages))) || ((stage_number_SINGLEQUOTE_ < (0))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Stage {0} does not exist",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stage_number], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-stages","num-stages",1426797535),cljs.core.count(stages)], null));
} else {
}

return stage_number_SINGLEQUOTE_;
});
/**
 * Inputs: [query :- :map stage-number :- :int]
 *   Return: [:maybe [:int {:min 0}]]
 *        
 * 
 *   The index of the previous stage, if there is one. `nil` if there is no previous stage.
 */
metabase.lib.util.previous_stage_number = (function metabase$lib$util$previous_stage_number(query,stage_number){

var stage_number__$1 = metabase.lib.util.canonical_stage_index(query,stage_number);
if((stage_number__$1 > (0))){
return (stage_number__$1 - (1));
} else {
return null;
}
});
/**
 * Whether a `stage-number` is referring to the first stage of a query or not.
 */
metabase.lib.util.first_stage_QMARK_ = (function metabase$lib$util$first_stage_QMARK_(query,stage_number){
return cljs.core.not(metabase.lib.util.previous_stage_number(query,stage_number));
});
/**
 * The index of the next stage, if there is one. `nil` if there is no next stage.
 */
metabase.lib.util.next_stage_number = (function metabase$lib$util$next_stage_number(p__64529,stage_number){
var map__64530 = p__64529;
var map__64530__$1 = cljs.core.__destructure_map(map__64530);
var _query = map__64530__$1;
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64530__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
var stage_number__$1 = (((stage_number < (0)))?(cljs.core.count(stages) + stage_number):stage_number);
if(((stage_number__$1 + (1)) < cljs.core.count(stages))){
return (stage_number__$1 + (1));
} else {
return null;
}
});
/**
 * Inputs: [query :- LegacyOrPMBQLQuery stage-number :- :int]
 *   Return: :metabase.lib.schema/stage
 *        
 * 
 *   Fetch a specific `stage` of a query. This handles negative indices as well, e.g. `-1` will return the last stage of
 *   the query.
 */
metabase.lib.util.query_stage = (function metabase$lib$util$query_stage(query,stage_number){

var map__64532 = metabase.lib.util.pipeline(query);
var map__64532__$1 = cljs.core.__destructure_map(map__64532);
var query__$1 = map__64532__$1;
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64532__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(stages),metabase.lib.util.canonical_stage_index(query__$1,stage_number));
});
/**
 * Inputs: [query stage-number :- :int]
 *   Return: [:maybe :metabase.lib.schema/stage]
 *        
 * 
 *   Return the previous stage of the query, if there is one; otherwise return `nil`.
 */
metabase.lib.util.previous_stage = (function metabase$lib$util$previous_stage(query,stage_number){

var temp__5804__auto__ = metabase.lib.util.previous_stage_number(query,stage_number);
if(cljs.core.truth_(temp__5804__auto__)){
var stage_num = temp__5804__auto__;
return metabase.lib.util.query_stage(query,stage_num);
} else {
return null;
}
});
/**
 * Inputs: [query :- LegacyOrPMBQLQuery stage-number :- :int f & args]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Update a specific `stage-number` of a `query` by doing
 * 
 *  (apply f stage args)
 * 
 *   `stage-number` can be a negative index, e.g. `-1` will update the last stage of the query.
 */
metabase.lib.util.update_query_stage = (function metabase$lib$util$update_query_stage(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64813 = arguments.length;
var i__5770__auto___64814 = (0);
while(true){
if((i__5770__auto___64814 < len__5769__auto___64813)){
args__5775__auto__.push((arguments[i__5770__auto___64814]));

var G__64815 = (i__5770__auto___64814 + (1));
i__5770__auto___64814 = G__64815;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic = (function (query,stage_number,f,args){

var map__64595 = metabase.lib.util.pipeline(query);
var map__64595__$1 = cljs.core.__destructure_map(map__64595);
var query__$1 = map__64595__$1;
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64595__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
var stage_number_SINGLEQUOTE_ = metabase.lib.util.canonical_stage_index(query__$1,stage_number);
var stages_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,cljs.core.vec(stages),stage_number_SINGLEQUOTE_,f,args);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query__$1,new cljs.core.Keyword(null,"stages","stages",-442109532),stages_SINGLEQUOTE_);
}));

(metabase.lib.util.update_query_stage.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metabase.lib.util.update_query_stage.cljs$lang$applyTo = (function (seq64577){
var G__64578 = cljs.core.first(seq64577);
var seq64577__$1 = cljs.core.next(seq64577);
var G__64579 = cljs.core.first(seq64577__$1);
var seq64577__$2 = cljs.core.next(seq64577__$1);
var G__64580 = cljs.core.first(seq64577__$2);
var seq64577__$3 = cljs.core.next(seq64577__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64578,G__64579,G__64580,seq64577__$3);
}));

/**
 * Inputs: [query]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Convert query to a pMBQL (pipeline) query, and make sure the final stage is an `:mbql` one.
 */
metabase.lib.util.ensure_mbql_final_stage = (function metabase$lib$util$ensure_mbql_final_stage(query){

var query__$1 = metabase.lib.util.pipeline(query);
var G__64624 = query__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query__$1,(-1))),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__64624,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798)], null));
} else {
return G__64624;
}
});
/**
 * This is basically [[clojure.string/join]] but uses commas to join everything but the last two args, which are joined
 *   by a string `conjunction`. Uses Oxford commas for > 2 args.
 * 
 *   (join-strings-with-conjunction "and" ["X" "Y" "Z"])
 *   ;; => "X, Y, and Z"
 */
metabase.lib.util.join_strings_with_conjunction = (function metabase$lib$util$join_strings_with_conjunction(conjunction,coll){
if(cljs.core.seq(coll)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1))){
return cljs.core.first(coll);
} else {
var conjunction__$1 = [" ",clojure.string.trim(conjunction)," "].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(2))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll)),conjunction__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(coll))].join('');
} else {
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.butlast(coll)),",",conjunction__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(coll))].join('');
}
}
} else {
return null;
}
});
/**
 * Inputs: [s :- :string]
 *   Return: [:int {:min 0}]
 *        
 * 
 *   Number of bytes in a string using UTF-8 encoding.
 */
metabase.lib.util.string_byte_count = (function metabase$lib$util$string_byte_count(s){

return (new TextEncoder()).encode(s).length;
});
/**
 * Inputs: [s :- :string max-length-bytes :- [:int {:min 1}]]
 *   Return: :string
 *        
 * 
 *   Truncate string `s` to `max-length-bytes` UTF-8 bytes (as opposed to truncating to some number of
 *   *characters*).
 */
metabase.lib.util.truncate_string_to_byte_count = (function metabase$lib$util$truncate_string_to_byte_count(s,max_length_bytes){

var buf = (new Uint8Array(max_length_bytes));
var result = (new TextEncoder()).encodeInto(s,buf);
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),result.read);
});
/**
 * Length to truncate column and table identifiers to. See [[metabase.driver.impl/default-alias-max-length-bytes]] for
 *   reasoning.
 */
metabase.lib.util.truncate_alias_max_length_bytes = (60);
/**
 * Length of the hash suffixed to truncated strings by [[truncate-alias]].
 */
metabase.lib.util.truncated_alias_hash_suffix_length = (9);
/**
 * Inputs: [s :- :string]
 *   Return: [:string {:min 8, :max 8}]
 *        
 * 
 *   Return a 4-byte CRC-32 checksum of string `s`, encoded as an 8-character hex string.
 */
metabase.lib.util.crc32_checksum = (function metabase$lib$util$crc32_checksum(s){

var s__$1 = (shadow.js.shim.module$crc_32.str(s,(0)) >>> (0)).toString((16));
var s__$2 = s__$1;
while(true){
if((cljs.core.count(s__$2) < (8))){
var G__64817 = ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$2)].join('');
s__$2 = G__64817;
continue;
} else {
return s__$2;
}
break;
}
});
/**
 * Inputs: ([s]
 *         [s :- :metabase.lib.schema.common/non-blank-string max-bytes :- [:int {:min 0}]])
 *   Return: [:string {:min 1, :max 60}]
 *        
 * 
 *   Truncate string `s` if it is longer than [[truncate-alias-max-length-bytes]] and append a hex-encoded CRC-32
 *   checksum of the original string. Truncated string is truncated to [[truncate-alias-max-length-bytes]]
 *   minus [[truncated-alias-hash-suffix-length]] characters so the resulting string is
 *   exactly [[truncate-alias-max-length-bytes]]. The goal here is that two really long strings that only differ at the
 *   end will still have different resulting values.
 * 
 *  (truncate-alias "some_really_long_string" 15) ;   -> "some_r_8e0f9bc2"
 *  (truncate-alias "some_really_long_string_2" 15) ; -> "some_r_2a3c73eb"
 */
metabase.lib.util.truncate_alias = (function metabase$lib$util$truncate_alias(var_args){
var G__64690 = arguments.length;
switch (G__64690) {
case 1:
return metabase.lib.util.truncate_alias.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.util.truncate_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.util.truncate_alias.cljs$core$IFn$_invoke$arity$1 = (function (s){

return metabase.lib.util.truncate_alias.cljs$core$IFn$_invoke$arity$2(s,metabase.lib.util.truncate_alias_max_length_bytes);
}));

(metabase.lib.util.truncate_alias.cljs$core$IFn$_invoke$arity$2 = (function (s,max_bytes){

if((metabase.lib.util.string_byte_count(s) <= max_bytes)){
return s;
} else {
var checksum = metabase.lib.util.crc32_checksum(s);
var truncated = metabase.lib.util.truncate_string_to_byte_count(s,(max_bytes - metabase.lib.util.truncated_alias_hash_suffix_length));
return [truncated,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(checksum)].join('');
}
}));

(metabase.lib.util.truncate_alias.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: [table-id]
 *   Return: [:maybe :metabase.lib.schema.id/card]
 *        
 * 
 *   If `table-id` is a legacy `card__<id>`-style string, parse the `<id>` part to an integer Card ID. Only for legacy
 *   queries! You don't need to use this in pMBQL since this is converted automatically by [[metabase.lib.convert]] to
 *   `:source-card`.
 */
metabase.lib.util.legacy_string_table_id__GT_card_id = (function metabase$lib$util$legacy_string_table_id__GT_card_id(table_id){

if(typeof table_id === 'string'){
var temp__5804__auto__ = cljs.core.re_find(/^card__(\d+)$/,table_id);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__64718 = temp__5804__auto__;
var _match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64718,(0),null);
var card_id_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64718,(1),null);
return cljs.core.parse_long(card_id_str);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [query]
 *   Return: [:maybe :metabase.lib.schema.id/table]
 *        
 * 
 *   If this query has a `:source-table` ID, return it.
 */
metabase.lib.util.source_table_id = (function metabase$lib$util$source_table_id(query){

return new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query)));
});
/**
 * Inputs: [query]
 *   Return: [:maybe :metabase.lib.schema.id/card]
 *        
 * 
 *   If this query has a `:source-card` ID, return it.
 */
metabase.lib.util.source_card_id = (function metabase$lib$util$source_card_id(query){

return new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query)));
});
/**
 * Inputs: []
 *   Return: [:=> [:cat :metabase.lib.schema.common/non-blank-string] :metabase.lib.schema.common/non-blank-string]
 *        
 * 
 *   Create a new function with the signature
 * 
 *  (f str) => str
 * 
 *   That takes any sort of string identifier (e.g. a column alias or table/join alias) and returns a guaranteed-unique
 *   name truncated to 60 characters (actually 51 characters plus a hash).
 */
metabase.lib.util.unique_name_generator = (function metabase$lib$util$unique_name_generator(){

return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.truncate_alias,metabase.mbql.util.unique_name_generator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name-key-fn","name-key-fn",-1634839199),metabase.util.lower_case_en,new cljs.core.Keyword(null,"unique-alias-fn","unique-alias-fn",32555420),(function (original,suffix){
return metabase.lib.util.truncate_alias.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(original),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));
})], 0)));
});
metabase.lib.util.strip_id_regex = (new RegExp(" id$","i"));
/**
 * Inputs: [display-name :- :string]
 *   Return: :string
 *        
 * 
 *   Given a display name string like "Product ID", this will drop the trailing "ID" and trim whitespace.
 *   Used to turn a FK field's name into a pseudo table name when implicitly joining.
 */
metabase.lib.util.strip_id = (function metabase$lib$util$strip_id(display_name){

return clojure.string.trim(clojure.string.replace(display_name,metabase.lib.util.strip_id_regex,""));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int location :- [:enum :breakout :aggregation] a-summary-clause]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   If the given stage has no summary, it will drop :fields, :order-by, and :join :fields from it,
 * as well as any subsequent stages.
 */
metabase.lib.util.add_summary_clause = (function metabase$lib$util$add_summary_clause(query,stage_number,location,a_summary_clause){

var query__$1 = metabase.lib.util.pipeline(query);
var stage_number__$1 = (function (){var or__5045__auto__ = stage_number;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-1);
}
})();
var stage = metabase.lib.util.query_stage(query__$1,stage_number__$1);
var new_summary_QMARK_ = (!(((cljs.core.seq(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(stage))) || (cljs.core.seq(new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(stage))))));
var new_query = metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query__$1,stage_number__$1,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([location,(function (summary_clauses){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(summary_clauses),metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(a_summary_clause));
})], 0));
if(new_summary_QMARK_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(metabase.lib.util.update_query_stage(new_query,stage_number__$1,(function (stage__$1){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(stage__$1,new cljs.core.Keyword(null,"order-by","order-by",1527318070),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230)], 0)),new cljs.core.Keyword(null,"joins","joins",1033962699),(function (joins){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__64761_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__64761_SHARP_,new cljs.core.Keyword(null,"fields","fields",-1932066230));
}),joins);
}));
})),new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__64762_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__64762_SHARP_);
}),cljs.core.subvec),(0),(metabase.lib.util.canonical_stage_index(query__$1,stage_number__$1) + (1)));
} else {
return new_query;
}
});
/**
 * Adds a default :effective-type property if it does not exist and
 *   :base-type is known.
 * 
 *   This is needed only because we have to convert queries to the Legacy
 *   form.
 *   The round trip conversion pMBQL -> legacy MBQL -> pMBQL loses the
 *   :effective-type property, but it should be present for the frontend
 *   to work. It defaults to the :base-type property.
 */
metabase.lib.util.with_default_effective_type = (function metabase$lib$util$with_default_effective_type(clause){
var options = metabase.lib.options.options(clause);
var default_effective_type = (cljs.core.truth_(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(options))?null:new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(options));
var G__64781 = clause;
if(cljs.core.truth_(default_effective_type)){
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(G__64781,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),default_effective_type], 0));
} else {
return G__64781;
}
});
Object.defineProperty(module.exports, "query_stage", { enumerable: false, get: function() { return metabase.lib.util.query_stage; } });
Object.defineProperty(module.exports, "string_byte_count", { enumerable: false, get: function() { return metabase.lib.util.string_byte_count; } });
Object.defineProperty(module.exports, "source_table_id", { enumerable: false, get: function() { return metabase.lib.util.source_table_id; } });
Object.defineProperty(module.exports, "clause_of_type_QMARK_", { enumerable: false, get: function() { return metabase.lib.util.clause_of_type_QMARK_; } });
Object.defineProperty(module.exports, "remove_clause", { enumerable: false, get: function() { return metabase.lib.util.remove_clause; } });
Object.defineProperty(module.exports, "legacy_string_table_id__GT_card_id", { enumerable: false, get: function() { return metabase.lib.util.legacy_string_table_id__GT_card_id; } });
Object.defineProperty(module.exports, "replace_clause", { enumerable: false, get: function() { return metabase.lib.util.replace_clause; } });
Object.defineProperty(module.exports, "previous_stage_number", { enumerable: false, get: function() { return metabase.lib.util.previous_stage_number; } });
Object.defineProperty(module.exports, "ensure_mbql_final_stage", { enumerable: false, get: function() { return metabase.lib.util.ensure_mbql_final_stage; } });
Object.defineProperty(module.exports, "next_stage_number", { enumerable: false, get: function() { return metabase.lib.util.next_stage_number; } });
Object.defineProperty(module.exports, "native_query__GT_pipeline", { enumerable: false, get: function() { return metabase.lib.util.native_query__GT_pipeline; } });
Object.defineProperty(module.exports, "named_expression_clause", { enumerable: false, get: function() { return metabase.lib.util.named_expression_clause; } });
Object.defineProperty(module.exports, "format", { enumerable: false, get: function() { return metabase.lib.util.format; } });
Object.defineProperty(module.exports, "truncate_string_to_byte_count", { enumerable: false, get: function() { return metabase.lib.util.truncate_string_to_byte_count; } });
Object.defineProperty(module.exports, "join_strings_with_conjunction", { enumerable: false, get: function() { return metabase.lib.util.join_strings_with_conjunction; } });
Object.defineProperty(module.exports, "join__GT_pipeline", { enumerable: false, get: function() { return metabase.lib.util.join__GT_pipeline; } });
Object.defineProperty(module.exports, "pipeline", { enumerable: false, get: function() { return metabase.lib.util.pipeline; } });
Object.defineProperty(module.exports, "update_query_stage", { enumerable: false, get: function() { return metabase.lib.util.update_query_stage; } });
Object.defineProperty(module.exports, "crc32_checksum", { enumerable: false, get: function() { return metabase.lib.util.crc32_checksum; } });
Object.defineProperty(module.exports, "expression_name", { enumerable: false, get: function() { return metabase.lib.util.expression_name; } });
Object.defineProperty(module.exports, "joins__GT_pipeline", { enumerable: false, get: function() { return metabase.lib.util.joins__GT_pipeline; } });
Object.defineProperty(module.exports, "update_legacy_boolean_expression__GT_list", { enumerable: false, get: function() { return metabase.lib.util.update_legacy_boolean_expression__GT_list; } });
Object.defineProperty(module.exports, "clause_QMARK_", { enumerable: false, get: function() { return metabase.lib.util.clause_QMARK_; } });
Object.defineProperty(module.exports, "truncate_alias", { enumerable: false, get: function() { return metabase.lib.util.truncate_alias; } });
Object.defineProperty(module.exports, "canonical_stage_index", { enumerable: false, get: function() { return metabase.lib.util.canonical_stage_index; } });
Object.defineProperty(module.exports, "field_clause_QMARK_", { enumerable: false, get: function() { return metabase.lib.util.field_clause_QMARK_; } });
Object.defineProperty(module.exports, "__GT_stage_metadata", { enumerable: false, get: function() { return metabase.lib.util.__GT_stage_metadata; } });
Object.defineProperty(module.exports, "with_default_effective_type", { enumerable: false, get: function() { return metabase.lib.util.with_default_effective_type; } });
Object.defineProperty(module.exports, "add_summary_clause", { enumerable: false, get: function() { return metabase.lib.util.add_summary_clause; } });
Object.defineProperty(module.exports, "strip_id", { enumerable: false, get: function() { return metabase.lib.util.strip_id; } });
Object.defineProperty(module.exports, "truncate_alias_max_length_bytes", { enumerable: false, get: function() { return metabase.lib.util.truncate_alias_max_length_bytes; } });
Object.defineProperty(module.exports, "source_card_id", { enumerable: false, get: function() { return metabase.lib.util.source_card_id; } });
Object.defineProperty(module.exports, "inner_query__GT_stages", { enumerable: false, get: function() { return metabase.lib.util.inner_query__GT_stages; } });
Object.defineProperty(module.exports, "unique_name_generator", { enumerable: false, get: function() { return metabase.lib.util.unique_name_generator; } });
Object.defineProperty(module.exports, "mbql_query__GT_pipeline", { enumerable: false, get: function() { return metabase.lib.util.mbql_query__GT_pipeline; } });
Object.defineProperty(module.exports, "first_stage_QMARK_", { enumerable: false, get: function() { return metabase.lib.util.first_stage_QMARK_; } });
Object.defineProperty(module.exports, "strip_id_regex", { enumerable: false, get: function() { return metabase.lib.util.strip_id_regex; } });
Object.defineProperty(module.exports, "LegacyOrPMBQLQuery", { enumerable: false, get: function() { return metabase.lib.util.LegacyOrPMBQLQuery; } });
Object.defineProperty(module.exports, "previous_stage", { enumerable: false, get: function() { return metabase.lib.util.previous_stage; } });
Object.defineProperty(module.exports, "truncated_alias_hash_suffix_length", { enumerable: false, get: function() { return metabase.lib.util.truncated_alias_hash_suffix_length; } });
//# sourceMappingURL=metabase.lib.util.js.map
