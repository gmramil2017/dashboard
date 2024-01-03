var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.data.js");
require("./clojure.set.js");
require("./clojure.string.js");
require("./malli.core.js");
require("./malli.error.js");
require("./medley.core.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.options.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.util.js");
require("./metabase.util.js");
require("./metabase.util.log.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.convert.js");

goog.provide('metabase.lib.convert');
metabase.lib.convert._STAR_pMBQL_uuid__GT_legacy_index_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
metabase.lib.convert.clean_location = (function metabase$lib$convert$clean_location(almost_stage,error_type,error_location){
var operate_on_parent_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666),null,new cljs.core.Keyword("malli.core","end-of-input","malli.core/end-of-input",-491237771),null], null), null);
var location__$1 = (cljs.core.truth_((operate_on_parent_QMARK_.cljs$core$IFn$_invoke$arity$1 ? operate_on_parent_QMARK_.cljs$core$IFn$_invoke$arity$1(error_type) : operate_on_parent_QMARK_.call(null,error_type)))?cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),error_location):cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((1),error_location));
var vec__79332 = (cljs.core.truth_((operate_on_parent_QMARK_.cljs$core$IFn$_invoke$arity$1 ? operate_on_parent_QMARK_.cljs$core$IFn$_invoke$arity$1(error_type) : operate_on_parent_QMARK_.call(null,error_type)))?cljs.core.take_last((2),error_location):cljs.core.take_last((1),error_location));
var location_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79332,(0),null);
if(cljs.core.seq(location__$1)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(almost_stage,location__$1,(function (error_loc){
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error_loc,location_key,null);
if(cljs.core.vector_QMARK_(error_loc)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),result);
} else {
if(cljs.core.map_QMARK_(error_loc)){
return metabase.util.remove_nils(result);
} else {
return result;

}
}
}));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(almost_stage,location_key);
}
});
metabase.lib.convert.stage_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filters","filters",974726919),null,new cljs.core.Keyword(null,"fields","fields",-1932066230),null,new cljs.core.Keyword(null,"joins","joins",1033962699),null,new cljs.core.Keyword(null,"expressions","expressions",255689909),null,new cljs.core.Keyword(null,"breakout","breakout",-732419050),null,new cljs.core.Keyword(null,"order-by","order-by",1527318070),null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),null], null), null);
metabase.lib.convert.clean_stage = (function metabase$lib$convert$clean_stage(almost_stage){
var almost_stage__$1 = almost_stage;
var removals = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"in","in",-1531184865)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(metabase.lib.convert.stage_keys,cljs.core.first,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388),almost_stage__$1)))));
if(cljs.core.truth_(temp__5802__auto__)){
var vec__79356 = temp__5802__auto__;
var error_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79356,(0),null);
var error_location = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79356,(1),null);
var new_stage = metabase.lib.convert.clean_location(almost_stage__$1,error_type,error_location);
var level__47393__auto___79823 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__47394__auto___79824 = "metabase.lib.convert";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47394__auto___79824,level__47393__auto___79823))){
var x__47395__auto___79825 = "Clean: Removing bad clause in %s due to error %s:\n%s";
if((x__47395__auto___79825 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47394__auto___79824,level__47393__auto___79823,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(metabase.util.colorize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yellow","yellow",-881035449),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_location], 0))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.util.colorize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yellow","yellow",-881035449),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = error_type;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return malli.error.humanize.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388),almost_stage__$1));
}
})()], 0))], 0)),metabase.util.colorize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"red","red",-969428204),metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.data.diff(almost_stage__$1,new_stage)))], 0))], 0)),x__47395__auto___79825);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47394__auto___79824,level__47393__auto___79823,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__47395__auto___79825,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.util.colorize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yellow","yellow",-881035449),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_location], 0))], 0)),metabase.util.colorize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yellow","yellow",-881035449),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = error_type;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return malli.error.humanize.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388),almost_stage__$1));
}
})()], 0))], 0)),metabase.util.colorize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"red","red",-969428204),metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.data.diff(almost_stage__$1,new_stage)))], 0))], 0)),null);
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_stage,almost_stage__$1)){
return almost_stage__$1;
} else {
var G__79829 = new_stage;
var G__79830 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [error_type,error_location], null));
almost_stage__$1 = G__79829;
removals = G__79830;
continue;
}
} else {
return almost_stage__$1;
}
break;
}
});
metabase.lib.convert.clean = (function metabase$lib$convert$clean(almost_query){
var almost_query__$1 = almost_query;
var stage_index = (0);
while(true){
var current_stage = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(almost_query__$1),stage_index);
var new_stage = metabase.lib.convert.clean_stage(current_stage);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_stage,new_stage)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stage_index,(cljs.core.count(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(almost_query__$1)) - (1)))){
return almost_query__$1;
} else {
var G__79832 = almost_query__$1;
var G__79833 = (stage_index + (1));
almost_query__$1 = G__79832;
stage_index = G__79833;
continue;
}
} else {
var G__79834 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(almost_query__$1,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.assoc,stage_index,new_stage);
var G__79835 = stage_index;
almost_query__$1 = G__79834;
stage_index = G__79835;
continue;
}
break;
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.convert !== 'undefined') && (typeof metabase.lib.convert.__GT_pMBQL !== 'undefined')){
} else {
/**
 * Coerce something to pMBQL (the version of MBQL manipulated by Dashboard Lib v2) if it's not already pMBQL.
 */
metabase.lib.convert.__GT_pMBQL = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79380 = cljs.core.get_global_hierarchy;
return (fexpr__79380.cljs$core$IFn$_invoke$arity$0 ? fexpr__79380.cljs$core$IFn$_invoke$arity$0() : fexpr__79380.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.convert","->pMBQL"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.convert.default_MBQL_clause__GT_pMBQL = (function metabase$lib$convert$default_MBQL_clause__GT_pMBQL(mbql_clause){
var last_elem = cljs.core.peek(mbql_clause);
var last_elem_option_QMARK_ = cljs.core.map_QMARK_(last_elem);
var vec__79389 = (function (){var G__79392 = mbql_clause;
if(last_elem_option_QMARK_){
return cljs.core.pop(G__79392);
} else {
return G__79392;
}
})();
var seq__79390 = cljs.core.seq(vec__79389);
var first__79391 = cljs.core.first(seq__79390);
var seq__79390__$1 = cljs.core.next(seq__79390);
var clause_type = first__79391;
var args = seq__79390__$1;
var options = ((last_elem_option_QMARK_)?last_elem:cljs.core.PersistentArrayMap.EMPTY);
return metabase.lib.options.ensure_uuid(cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_type,options], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.convert.__GT_pMBQL),args));
});
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)))){
return metabase.lib.convert.default_MBQL_clause__GT_pMBQL(x);
} else {
return x;
}
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (query){
return query;
}));
/**
 * In legacy MBQL, join `:alias` was optional, and if unspecified, this was the default alias used. In reality all joins
 *   normally had an explicit `:alias` since the QB would generate one and you generally need one to do useful things
 *   with the join anyway.
 * 
 *   Since the new pMBQL schema makes `:alias` required, we'll explicitly add the implicit default when we encounter a
 *   join without an alias, and remove it so we can round-trip without changes.
 */
metabase.lib.convert.legacy_default_join_alias = "__join";
/**
 * Join `:alias`es had to be unique in legacy MBQL, but they were optional. Since we add [[legacy-default-join-alias]]
 *   to each join that doesn't have an explicit `:alias` for pMBQL compatibility now, we need to deduplicate the aliases
 *   if it is used more than once.
 * 
 *   Only deduplicate the default `__join` aliases; we don't want the [[lib.util/unique-name-generator]] to touch other
 *   aliases and truncate them or anything like that.
 */
metabase.lib.convert.deduplicate_join_aliases = (function metabase$lib$convert$deduplicate_join_aliases(joins){
var unique_name_fn = metabase.lib.util.unique_name_generator();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (join){
var G__79409 = join;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join),metabase.lib.convert.legacy_default_join_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__79409,new cljs.core.Keyword(null,"alias","alias",-2039751630),unique_name_fn);
} else {
return G__79409;
}
}),joins);
});
/**
 * If a query `stage` has a legacy `card__<id>` `:source-table`, convert it to a pMBQL-style `:source-card`.
 */
metabase.lib.convert.stage_source_card_id__GT_pMBQL = (function metabase$lib$convert$stage_source_card_id__GT_pMBQL(stage){
if(typeof new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(stage) === 'string'){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stage,new cljs.core.Keyword(null,"source-card","source-card",-1580820390),metabase.lib.util.legacy_string_table_id__GT_card_id(new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(stage))),new cljs.core.Keyword(null,"source-table","source-table",-225307692));
} else {
return stage;
}
});
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (stage){
var aggregations = metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(stage));
var expressions = cljs.core.not_empty(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__79444){
var vec__79445 = p__79444;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79445,(1),null);
return metabase.lib.util.named_expression_clause(metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(v),k);
}),new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(stage)));
var _STAR_legacy_index__GT_pMBQL_uuid_STAR__orig_val__79449 = metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_;
var _STAR_legacy_index__GT_pMBQL_uuid_STAR__temp_val__79450 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,p__79455){
var vec__79456 = p__79455;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79456,(0),null);
var map__79459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79456,(1),null);
var map__79459__$1 = cljs.core.__destructure_map(map__79459);
var ag_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79459__$1,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,ag_uuid], null);
})),aggregations);
(metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_ = _STAR_legacy_index__GT_pMBQL_uuid_STAR__temp_val__79450);

try{var stage__$1 = medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.convert.stage_source_card_id__GT_pMBQL(stage),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),aggregations,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expressions","expressions",255689909),expressions], 0));
var stage__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stage__$2,k){
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(stage__$2,k))){
return stage__$2;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(stage__$2,k,metabase.lib.convert.__GT_pMBQL);
}
}),stage__$1,cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.convert.stage_keys,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expressions","expressions",255689909)], 0)));
var G__79468 = stage__$2;
if(cljs.core.truth_(new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage__$2))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__79468,new cljs.core.Keyword(null,"joins","joins",1033962699),metabase.lib.convert.deduplicate_join_aliases);
} else {
return G__79468;
}
}finally {(metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_ = _STAR_legacy_index__GT_pMBQL_uuid_STAR__orig_val__79449);
}}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),(function (stage){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$4(stage,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),cljs.core.update_vals,(function (tag){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(tag,new cljs.core.Keyword(null,"dimension","dimension",543254198),metabase.lib.convert.__GT_pMBQL);
}));
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (join){
var join__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"conditions","conditions",-1647236270),metabase.lib.convert.__GT_pMBQL),new cljs.core.Keyword(null,"stages","stages",-442109532),metabase.lib.convert.__GT_pMBQL);
var G__79478 = join__$1;
var G__79478__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(join__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__79478,new cljs.core.Keyword(null,"fields","fields",-1932066230),(function (fields){
if(cljs.core.seqable_QMARK_(fields)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_pMBQL,fields);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fields);
}
})):G__79478);
if(cljs.core.not(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79478__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),metabase.lib.convert.legacy_default_join_alias);
} else {
return G__79478__$1;
}
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969),(function (xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_pMBQL,xs);
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422),(function (m){
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m))){
return metabase.lib.convert.clean(cljs.core.update.cljs$core$IFn$_invoke$arity$3(metabase.lib.util.pipeline(m),new cljs.core.Keyword(null,"stages","stages",-442109532),(function (stages){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_pMBQL,stages);
})));
} else {
return cljs.core.update_vals(m,metabase.lib.convert.__GT_pMBQL);
}
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__79487){
var vec__79489 = p__79487;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79489,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79489,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79489,(2),null);
var vec__79495 = ((cljs.core.map_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79495,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79495,(1),null);
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),options,id_or_name], null));
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"value","value",305978217),(function (p__79498){
var vec__79499 = p__79498;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79499,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79499,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79499,(2),null);
var opts__$1 = clojure.set.rename_keys(opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"base_type","base_type",1908272670),new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"semantic_type","semantic_type",272485089),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.Keyword(null,"database_type","database_type",-54700895),new cljs.core.Keyword(null,"database-type","database-type",-426840562)], null));
var opts__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return metabase.lib.schema.expression.type_of(value);
}
}
})());
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),opts__$2,value], null));
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__79507){
var vec__79508 = p__79507;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79508,(0),null);
var pred_expr_pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79508,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79508,(2),null);
var default$ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(options);
var G__79512 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"case","case",1143702196),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"default","default",-1987822328)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_pMBQL,pred_expr_pairs)], null);
var G__79512__$1 = metabase.lib.options.ensure_uuid(G__79512)
;
if((!((default$ == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__79512__$1,metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(default$));
} else {
return G__79512__$1;
}
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (p__79519){
var vec__79520 = p__79519;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79520,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79520,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79520,(2),null);
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,opts,value], null));
}));
metabase.lib.convert.get_or_throw_BANG_ = (function metabase$lib$convert$get_or_throw_BANG_(m,k){
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.Keyword("metabase.lib.convert","not-found","metabase.lib.convert/not-found",967996550));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword("metabase.lib.convert","not-found","metabase.lib.convert/not-found",967996550))))){
return result;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unable to find ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))," in map."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m","m",1632677161),m,new cljs.core.Keyword(null,"k","k",-2146297393),k], null));
}
});
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p__79527){
var vec__79528 = p__79527;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79528,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79528,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79528,(2),null);
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,opts,metabase.lib.convert.get_or_throw_BANG_(metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_,value)], null));
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),(function (p__79536){
var vec__79537 = p__79536;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79537,(0),null);
var aggregation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79537,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79537,(2),null);
var vec__79540 = metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(aggregation);
var seq__79541 = cljs.core.seq(vec__79540);
var first__79542 = cljs.core.first(seq__79541);
var seq__79541__$1 = cljs.core.next(seq__79541);
var tag = first__79542;
var first__79542__$1 = cljs.core.first(seq__79541__$1);
var seq__79541__$2 = cljs.core.next(seq__79541__$1);
var opts = first__79542__$1;
var args = seq__79541__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,options], 0))], null),args);
}));
/**
 * Convert a legacy 'inner query' to a full legacy 'outer query' so you can pass it to stuff
 *   like [[metabase.mbql.normalize/normalize]], and then probably to [[->pMBQL]].
 */
metabase.lib.convert.legacy_query_from_inner_query = (function metabase$lib$convert$legacy_query_from_inner_query(database_id,inner_query){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"database","database",1849087575),database_id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(inner_query))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),clojure.set.rename_keys(inner_query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null))], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),inner_query], null))], 0));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.convert !== 'undefined') && (typeof metabase.lib.convert.__GT_legacy_MBQL !== 'undefined')){
} else {
/**
 * Coerce something to legacy MBQL (the version of MBQL understood by the query processor and Dashboard Lib v1) if it's
 *   not already legacy MBQL.
 */
metabase.lib.convert.__GT_legacy_MBQL = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79546 = cljs.core.get_global_hierarchy;
return (fexpr__79546.cljs$core$IFn$_invoke$arity$0 ? fexpr__79546.cljs$core$IFn$_invoke$arity$0() : fexpr__79546.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.convert","->legacy-MBQL"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
/**
 * Remove any keys starting with the `:lib/` namespace from map `m`.
 * 
 *   No args = return transducer to remove `:lib/` keys from a map. One arg = update a map `m`.
 */
metabase.lib.convert.disqualify = (function metabase$lib$convert$disqualify(var_args){
var G__79552 = arguments.length;
switch (G__79552) {
case 0:
return metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__79554){
var vec__79555 = p__79554;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79555,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79555,(1),null);
return ((cljs.core.qualified_keyword_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(k),"lib")));
}));
}));

(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1 = (function (m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$0(),m);
}));

(metabase.lib.convert.disqualify.cljs$lang$maxFixedArity = 1);

/**
 * Convert an options map in an MBQL clause to the equivalent shape for legacy MBQL. Remove `:lib/*` keys and
 *   `:effective-type`, which is not used in options maps in legacy MBQL.
 */
metabase.lib.convert.options__GT_legacy_MBQL = (function metabase$lib$convert$options__GT_legacy_MBQL(m){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$0(),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__79562){
var vec__79564 = p__79562;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79564,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79564,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458));
}))),m));
});
metabase.lib.convert.aggregation__GT_legacy_MBQL = (function metabase$lib$convert$aggregation__GT_legacy_MBQL(p__79569){
var vec__79570 = p__79569;
var seq__79571 = cljs.core.seq(vec__79570);
var first__79572 = cljs.core.first(seq__79571);
var seq__79571__$1 = cljs.core.next(seq__79571);
var tag = first__79572;
var first__79572__$1 = cljs.core.first(seq__79571__$1);
var seq__79571__$2 = cljs.core.next(seq__79571__$1);
var options = first__79572__$1;
var args = seq__79571__$2;
var inner = cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.convert.__GT_legacy_MBQL),args);
var inner__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"case","case",1143702196))) && (cljs.core.next(args))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(inner),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.peek(inner)], null)):inner);
var temp__5802__auto__ = cljs.core.not_empty(metabase.lib.convert.options__GT_legacy_MBQL(options));
if(cljs.core.truth_(temp__5802__auto__)){
var aggregation_opts = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),inner__$1,aggregation_opts], null);
} else {
return inner__$1;
}
});
metabase.lib.convert.clause_with_options__GT_legacy_MBQL = (function metabase$lib$convert$clause_with_options__GT_legacy_MBQL(p__79577){
var vec__79580 = p__79577;
var seq__79581 = cljs.core.seq(vec__79580);
var first__79582 = cljs.core.first(seq__79581);
var seq__79581__$1 = cljs.core.next(seq__79581);
var k = first__79582;
var first__79582__$1 = cljs.core.first(seq__79581__$1);
var seq__79581__$2 = cljs.core.next(seq__79581__$1);
var options = first__79582__$1;
var args = seq__79581__$2;
if(cljs.core.map_QMARK_(options)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_legacy_MBQL,args),(function (){var temp__5804__auto__ = metabase.lib.convert.options__GT_legacy_MBQL(options);
if(cljs.core.truth_(temp__5804__auto__)){
var options__$1 = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$1], null);
} else {
return null;
}
})()));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_legacy_MBQL,cljs.core.cons(options,args)));
}
});
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)))){
return metabase.lib.convert.clause_with_options__GT_legacy_MBQL(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.update_vals(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(x),metabase.lib.convert.__GT_legacy_MBQL);
} else {
return x;

}
}
}));
var seq__79585_79853 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.convert","aggregation","metabase.lib.convert/aggregation",108290790),new cljs.core.Keyword("metabase.lib.convert","expression","metabase.lib.convert/expression",1648102782)], null));
var chunk__79586_79854 = null;
var count__79587_79855 = (0);
var i__79588_79856 = (0);
while(true){
if((i__79588_79856 < count__79587_79855)){
var tag_79858 = chunk__79586_79854.cljs$core$IIndexed$_nth$arity$2(null,i__79588_79856);
metabase.lib.hierarchy.derive(tag_79858,new cljs.core.Keyword("metabase.lib.convert","aggregation-or-expression","metabase.lib.convert/aggregation-or-expression",1924029672));


var G__79859 = seq__79585_79853;
var G__79860 = chunk__79586_79854;
var G__79861 = count__79587_79855;
var G__79862 = (i__79588_79856 + (1));
seq__79585_79853 = G__79859;
chunk__79586_79854 = G__79860;
count__79587_79855 = G__79861;
i__79588_79856 = G__79862;
continue;
} else {
var temp__5804__auto___79863 = cljs.core.seq(seq__79585_79853);
if(temp__5804__auto___79863){
var seq__79585_79864__$1 = temp__5804__auto___79863;
if(cljs.core.chunked_seq_QMARK_(seq__79585_79864__$1)){
var c__5568__auto___79865 = cljs.core.chunk_first(seq__79585_79864__$1);
var G__79866 = cljs.core.chunk_rest(seq__79585_79864__$1);
var G__79867 = c__5568__auto___79865;
var G__79868 = cljs.core.count(c__5568__auto___79865);
var G__79869 = (0);
seq__79585_79853 = G__79866;
chunk__79586_79854 = G__79867;
count__79587_79855 = G__79868;
i__79588_79856 = G__79869;
continue;
} else {
var tag_79870 = cljs.core.first(seq__79585_79864__$1);
metabase.lib.hierarchy.derive(tag_79870,new cljs.core.Keyword("metabase.lib.convert","aggregation-or-expression","metabase.lib.convert/aggregation-or-expression",1924029672));


var G__79871 = cljs.core.next(seq__79585_79864__$1);
var G__79872 = null;
var G__79873 = (0);
var G__79874 = (0);
seq__79585_79853 = G__79871;
chunk__79586_79854 = G__79872;
count__79587_79855 = G__79873;
i__79588_79856 = G__79874;
continue;
}
} else {
}
}
break;
}
var seq__79594_79875 = cljs.core.seq(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.Keyword(null,"count-where","count-where",385407720),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"percentile","percentile",-601188752),new cljs.core.Keyword(null,"share","share",-589433933),new cljs.core.Keyword(null,"stddev","stddev",-865474939),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"sum-where","sum-where",2135348428)], null));
var chunk__79595_79876 = null;
var count__79596_79877 = (0);
var i__79597_79878 = (0);
while(true){
if((i__79597_79878 < count__79596_79877)){
var tag_79879 = chunk__79595_79876.cljs$core$IIndexed$_nth$arity$2(null,i__79597_79878);
metabase.lib.hierarchy.derive(tag_79879,new cljs.core.Keyword("metabase.lib.convert","aggregation","metabase.lib.convert/aggregation",108290790));


var G__79880 = seq__79594_79875;
var G__79881 = chunk__79595_79876;
var G__79882 = count__79596_79877;
var G__79883 = (i__79597_79878 + (1));
seq__79594_79875 = G__79880;
chunk__79595_79876 = G__79881;
count__79596_79877 = G__79882;
i__79597_79878 = G__79883;
continue;
} else {
var temp__5804__auto___79884 = cljs.core.seq(seq__79594_79875);
if(temp__5804__auto___79884){
var seq__79594_79885__$1 = temp__5804__auto___79884;
if(cljs.core.chunked_seq_QMARK_(seq__79594_79885__$1)){
var c__5568__auto___79886 = cljs.core.chunk_first(seq__79594_79885__$1);
var G__79887 = cljs.core.chunk_rest(seq__79594_79885__$1);
var G__79888 = c__5568__auto___79886;
var G__79889 = cljs.core.count(c__5568__auto___79886);
var G__79890 = (0);
seq__79594_79875 = G__79887;
chunk__79595_79876 = G__79888;
count__79596_79877 = G__79889;
i__79597_79878 = G__79890;
continue;
} else {
var tag_79891 = cljs.core.first(seq__79594_79885__$1);
metabase.lib.hierarchy.derive(tag_79891,new cljs.core.Keyword("metabase.lib.convert","aggregation","metabase.lib.convert/aggregation",108290790));


var G__79892 = cljs.core.next(seq__79594_79885__$1);
var G__79893 = null;
var G__79894 = (0);
var G__79895 = (0);
seq__79594_79875 = G__79892;
chunk__79595_79876 = G__79893;
count__79596_79877 = G__79894;
i__79597_79878 = G__79895;
continue;
}
} else {
}
}
break;
}
var seq__79601_79896 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"/","/",1282502798),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"coalesce","coalesce",654622029),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929),new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"round","round",2009433328),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"interval","interval",1708495417),new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"absolute-datetime","absolute-datetime",-560340465),new cljs.core.Keyword(null,"now","now",-1650525531),new cljs.core.Keyword(null,"convert-timezone","convert-timezone",-124803001),new cljs.core.Keyword(null,"get-week","get-week",-888059349),new cljs.core.Keyword(null,"get-year","get-year",-936011274),new cljs.core.Keyword(null,"get-month","get-month",-369374731),new cljs.core.Keyword(null,"get-day","get-day",127568857),new cljs.core.Keyword(null,"get-hour","get-hour",622714059),new cljs.core.Keyword(null,"get-minute","get-minute",1468086343),new cljs.core.Keyword(null,"get-second","get-second",-2065946318),new cljs.core.Keyword(null,"get-quarter","get-quarter",1327778593),new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),new cljs.core.Keyword(null,"datetime-subtract","datetime-subtract",275307697),new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.Keyword(null,"substring","substring",1140866276),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"regexextract","regexextract",689742894),new cljs.core.Keyword(null,"regex-match-first","regex-match-first",-657299718),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"trim","trim",774319767),new cljs.core.Keyword(null,"ltrim","ltrim",1654269283),new cljs.core.Keyword(null,"rtrim","rtrim",-661336449),new cljs.core.Keyword(null,"upper","upper",246243906),new cljs.core.Keyword(null,"lower","lower",1120320821)], true));
var chunk__79602_79897 = null;
var count__79603_79898 = (0);
var i__79604_79899 = (0);
while(true){
if((i__79604_79899 < count__79603_79898)){
var tag_79956 = chunk__79602_79897.cljs$core$IIndexed$_nth$arity$2(null,i__79604_79899);
metabase.lib.hierarchy.derive(tag_79956,new cljs.core.Keyword("metabase.lib.convert","expression","metabase.lib.convert/expression",1648102782));


var G__79957 = seq__79601_79896;
var G__79958 = chunk__79602_79897;
var G__79959 = count__79603_79898;
var G__79960 = (i__79604_79899 + (1));
seq__79601_79896 = G__79957;
chunk__79602_79897 = G__79958;
count__79603_79898 = G__79959;
i__79604_79899 = G__79960;
continue;
} else {
var temp__5804__auto___79961 = cljs.core.seq(seq__79601_79896);
if(temp__5804__auto___79961){
var seq__79601_79962__$1 = temp__5804__auto___79961;
if(cljs.core.chunked_seq_QMARK_(seq__79601_79962__$1)){
var c__5568__auto___79963 = cljs.core.chunk_first(seq__79601_79962__$1);
var G__79964 = cljs.core.chunk_rest(seq__79601_79962__$1);
var G__79965 = c__5568__auto___79963;
var G__79966 = cljs.core.count(c__5568__auto___79963);
var G__79967 = (0);
seq__79601_79896 = G__79964;
chunk__79602_79897 = G__79965;
count__79603_79898 = G__79966;
i__79604_79899 = G__79967;
continue;
} else {
var tag_79968 = cljs.core.first(seq__79601_79962__$1);
metabase.lib.hierarchy.derive(tag_79968,new cljs.core.Keyword("metabase.lib.convert","expression","metabase.lib.convert/expression",1648102782));


var G__79969 = cljs.core.next(seq__79601_79962__$1);
var G__79970 = null;
var G__79971 = (0);
var G__79972 = (0);
seq__79601_79896 = G__79969;
chunk__79602_79897 = G__79970;
count__79603_79898 = G__79971;
i__79604_79899 = G__79972;
continue;
}
} else {
}
}
break;
}
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.convert","aggregation-or-expression","metabase.lib.convert/aggregation-or-expression",1924029672),(function (input){
return metabase.lib.convert.aggregation__GT_legacy_MBQL(input);
}));
metabase.lib.convert.stage_metadata__GT_legacy_metadata = (function metabase$lib$convert$stage_metadata__GT_legacy_metadata(stage_metadata){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__79609_SHARP_){
return cljs.core.update_keys(p1__79609_SHARP_,metabase.util.__GT_snake_case_en);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.convert.__GT_legacy_MBQL)),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(stage_metadata));
});
metabase.lib.convert.chain_stages = (function metabase$lib$convert$chain_stages(p__79613){
var map__79614 = p__79613;
var map__79614__$1 = cljs.core.__destructure_map(map__79614);
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79614__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
var inner_query = cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__79617,stage){
var vec__79618 = p__79617;
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79618,(0),null);
var stage_metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79618,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__79621 = metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(stage);
var G__79621__$1 = (cljs.core.truth_(inner)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79621,new cljs.core.Keyword(null,"source-query","source-query",198004422),inner):G__79621);
if(cljs.core.truth_(stage_metadata)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79621__$1,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085),metabase.lib.convert.stage_metadata__GT_legacy_metadata(stage_metadata));
} else {
return G__79621__$1;
}
})(),new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610).cljs$core$IFn$_invoke$arity$1(stage)], null);
}),null,stages));
var G__79622 = inner_query;
if(cljs.core.truth_(new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(inner_query))){
return clojure.set.rename_keys(G__79622,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
} else {
return G__79622;
}
});
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422),(function (m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__79625){
var vec__79626 = p__79625;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79626,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79626,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(v)], null);
}))),m);
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p__79629){
var vec__79631 = p__79629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79631,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79631,(1),null);
var agg_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79631,(2),null);
var ag = vec__79631;
if(cljs.core.map_QMARK_(opts)){
var opts__$1 = metabase.lib.convert.options__GT_legacy_MBQL(opts);
var G__79634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),metabase.lib.convert.get_or_throw_BANG_(metabase.lib.convert._STAR_pMBQL_uuid__GT_legacy_index_STAR_,agg_uuid)], null);
if(cljs.core.truth_(opts__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__79634,opts__$1);
} else {
return G__79634;
}
} else {
return ag;
}
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969),(function (xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_legacy_MBQL,xs);
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__79639){
var vec__79641 = p__79639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79641,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79641,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79641,(2),null);
var vec__79645 = (((((opts == null)) || (cljs.core.map_QMARK_(opts))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,opts], null));
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79645,(0),null);
var id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79645,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(id__$1),metabase.lib.convert.options__GT_legacy_MBQL(opts__$1)], null);
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"value","value",305978217),(function (p__79648){
var vec__79649 = p__79648;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79649,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79649,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79649,(2),null);
var opts__$1 = metabase.lib.convert.options__GT_legacy_MBQL(clojure.set.rename_keys(opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base_type","base_type",1908272670),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.Keyword(null,"semantic_type","semantic_type",272485089),new cljs.core.Keyword(null,"database-type","database-type",-426840562),new cljs.core.Keyword(null,"database_type","database_type",-54700895)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value,opts__$1], null);
}));
metabase.lib.convert.update_list__GT_legacy_boolean_expression = (function metabase$lib$convert$update_list__GT_legacy_boolean_expression(m,pMBQL_key,legacy_key){
var G__79656 = m;
var G__79656__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pMBQL_key)),(1)))?medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(G__79656,pMBQL_key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_legacy_MBQL,cljs.core.first)):G__79656);
var G__79656__$2 = (((cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pMBQL_key)) > (1)))?medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(G__79656__$1,pMBQL_key,(function (p1__79653_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.convert.__GT_legacy_MBQL),p1__79653_SHARP_);
})):G__79656__$1);
return clojure.set.rename_keys(G__79656__$2,cljs.core.PersistentArrayMap.createAsIfByAssoc([pMBQL_key,legacy_key]));

});
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (join){
var base = (function (){var G__79658 = metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(join);
if(clojure.string.starts_with_QMARK_(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join),metabase.lib.convert.legacy_default_join_alias)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__79658,new cljs.core.Keyword(null,"alias","alias",-2039751630));
} else {
return G__79658;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(base,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], 0)),metabase.lib.convert.__GT_legacy_MBQL),metabase.lib.convert.update_list__GT_legacy_boolean_expression(cljs.core.select_keys(base,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null)),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"condition","condition",1668437652)),metabase.lib.convert.chain_stages(base)], 0));
}));
/**
 * If a pMBQL query stage has `:source-card` convert it to legacy-style `:source-table "card__<id>"`.
 */
metabase.lib.convert.source_card__GT_legacy_source_table = (function metabase$lib$convert$source_card__GT_legacy_source_table(stage){
var temp__5802__auto__ = new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(stage);
if(cljs.core.truth_(temp__5802__auto__)){
var source_card_id = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(stage,new cljs.core.Keyword(null,"source-card","source-card",-1580820390)),new cljs.core.Keyword(null,"source-table","source-table",-225307692),["card__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_card_id)].join(''));
} else {
return stage;
}
});
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (stage){
var _STAR_pMBQL_uuid__GT_legacy_index_STAR__orig_val__79669 = metabase.lib.convert._STAR_pMBQL_uuid__GT_legacy_index_STAR_;
var _STAR_pMBQL_uuid__GT_legacy_index_STAR__temp_val__79670 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,p__79671){
var vec__79673 = p__79671;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79673,(0),null);
var map__79676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79673,(1),null);
var map__79676__$1 = cljs.core.__destructure_map(map__79676);
var ag_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79676__$1,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ag_uuid,idx], null);
})),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(stage));
(metabase.lib.convert._STAR_pMBQL_uuid__GT_legacy_index_STAR_ = _STAR_pMBQL_uuid__GT_legacy_index_STAR__temp_val__79670);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__79664_SHARP_,p2__79665_SHARP_){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(p1__79664_SHARP_,p2__79665_SHARP_,metabase.lib.convert.__GT_legacy_MBQL);
}),metabase.lib.convert.update_list__GT_legacy_boolean_expression(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(metabase.lib.convert.source_card__GT_legacy_source_table(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(stage)),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p1__79666_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.aggregation__GT_legacy_MBQL,p1__79666_SHARP_);
})),new cljs.core.Keyword(null,"expressions","expressions",255689909),(function (expressions){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$lib$convert$iter__79683(s__79684){
return (new cljs.core.LazySeq(null,(function (){
var s__79684__$1 = s__79684;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79684__$1);
if(temp__5804__auto__){
var s__79684__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79684__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__79684__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__79686 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__79685 = (0);
while(true){
if((i__79685 < size__5522__auto__)){
var expression = cljs.core._nth(c__5521__auto__,i__79685);
var legacy_clause = metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(expression);
cljs.core.chunk_append(b__79686,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.util.expression_name(expression),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first(legacy_clause)))?cljs.core.second(legacy_clause):legacy_clause)], null));

var G__79976 = (i__79685 + (1));
i__79685 = G__79976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79686),metabase$lib$convert$iter__79683(cljs.core.chunk_rest(s__79684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79686),null);
}
} else {
var expression = cljs.core.first(s__79684__$2);
var legacy_clause = metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(expression);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.util.expression_name(expression),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first(legacy_clause)))?cljs.core.second(legacy_clause):legacy_clause)], null),metabase$lib$convert$iter__79683(cljs.core.rest(s__79684__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(expressions);
})());
})),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"filter","filter",-948537934)),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.convert.stage_keys,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"expressions","expressions",255689909)], 0)));
}finally {(metabase.lib.convert._STAR_pMBQL_uuid__GT_legacy_index_STAR_ = _STAR_pMBQL_uuid__GT_legacy_index_STAR__orig_val__79669);
}}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),(function (stage){
return cljs.core.update_vals(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(stage),metabase.lib.convert.__GT_legacy_MBQL);
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (query){
var base = metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(query);
var parameters = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(base);
var inner_query = metabase.lib.convert.chain_stages(base);
var query_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query))),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194)))?new cljs.core.Keyword(null,"native","native",-613060878):new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(base,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parameters","parameters",-1229919748)], 0)),metabase.lib.convert.__GT_legacy_MBQL),(function (){var G__79699 = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348),query_type,query_type,inner_query]);
if(cljs.core.seq(parameters)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79699,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),parameters);
} else {
return G__79699;
}
})()], 0));
}));
Object.defineProperty(module.exports, "source_card__GT_legacy_source_table", { enumerable: false, get: function() { return metabase.lib.convert.source_card__GT_legacy_source_table; } });
Object.defineProperty(module.exports, "disqualify", { enumerable: false, get: function() { return metabase.lib.convert.disqualify; } });
Object.defineProperty(module.exports, "chain_stages", { enumerable: false, get: function() { return metabase.lib.convert.chain_stages; } });
Object.defineProperty(module.exports, "options__GT_legacy_MBQL", { enumerable: false, get: function() { return metabase.lib.convert.options__GT_legacy_MBQL; } });
Object.defineProperty(module.exports, "clean", { enumerable: false, get: function() { return metabase.lib.convert.clean; } });
Object.defineProperty(module.exports, "get_or_throw_BANG_", { enumerable: false, get: function() { return metabase.lib.convert.get_or_throw_BANG_; } });
Object.defineProperty(module.exports, "legacy_query_from_inner_query", { enumerable: false, get: function() { return metabase.lib.convert.legacy_query_from_inner_query; } });
Object.defineProperty(module.exports, "legacy_default_join_alias", { enumerable: false, get: function() { return metabase.lib.convert.legacy_default_join_alias; } });
Object.defineProperty(module.exports, "deduplicate_join_aliases", { enumerable: false, get: function() { return metabase.lib.convert.deduplicate_join_aliases; } });
Object.defineProperty(module.exports, "stage_source_card_id__GT_pMBQL", { enumerable: false, get: function() { return metabase.lib.convert.stage_source_card_id__GT_pMBQL; } });
Object.defineProperty(module.exports, "__GT_legacy_MBQL", { enumerable: false, get: function() { return metabase.lib.convert.__GT_legacy_MBQL; } });
Object.defineProperty(module.exports, "_STAR_legacy_index__GT_pMBQL_uuid_STAR_", { enumerable: false, get: function() { return metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_; } });
Object.defineProperty(module.exports, "clean_location", { enumerable: false, get: function() { return metabase.lib.convert.clean_location; } });
Object.defineProperty(module.exports, "stage_keys", { enumerable: false, get: function() { return metabase.lib.convert.stage_keys; } });
Object.defineProperty(module.exports, "_STAR_pMBQL_uuid__GT_legacy_index_STAR_", { enumerable: false, get: function() { return metabase.lib.convert._STAR_pMBQL_uuid__GT_legacy_index_STAR_; } });
Object.defineProperty(module.exports, "clean_stage", { enumerable: false, get: function() { return metabase.lib.convert.clean_stage; } });
Object.defineProperty(module.exports, "__GT_pMBQL", { enumerable: false, get: function() { return metabase.lib.convert.__GT_pMBQL; } });
Object.defineProperty(module.exports, "default_MBQL_clause__GT_pMBQL", { enumerable: false, get: function() { return metabase.lib.convert.default_MBQL_clause__GT_pMBQL; } });
Object.defineProperty(module.exports, "update_list__GT_legacy_boolean_expression", { enumerable: false, get: function() { return metabase.lib.convert.update_list__GT_legacy_boolean_expression; } });
Object.defineProperty(module.exports, "clause_with_options__GT_legacy_MBQL", { enumerable: false, get: function() { return metabase.lib.convert.clause_with_options__GT_legacy_MBQL; } });
Object.defineProperty(module.exports, "aggregation__GT_legacy_MBQL", { enumerable: false, get: function() { return metabase.lib.convert.aggregation__GT_legacy_MBQL; } });
Object.defineProperty(module.exports, "stage_metadata__GT_legacy_metadata", { enumerable: false, get: function() { return metabase.lib.convert.stage_metadata__GT_legacy_metadata; } });
//# sourceMappingURL=metabase.lib.convert.js.map
