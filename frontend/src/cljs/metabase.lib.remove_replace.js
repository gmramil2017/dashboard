var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./medley.core.js");
require("./metabase.lib.common.js");
require("./metabase.lib.join.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.util.js");
require("./metabase.mbql.util.match.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.remove_replace.js");

goog.provide('metabase.lib.remove_replace');
metabase.lib.remove_replace.stage_paths = (function metabase$lib$remove_replace$stage_paths(query,stage_number){
var joins = metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2(query,stage_number);
var join_indices = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(joins));
var join_condition_paths = (function (){var iter__5523__auto__ = (function metabase$lib$remove_replace$stage_paths_$_iter__80744(s__80745){
return (new cljs.core.LazySeq(null,(function (){
var s__80745__$1 = s__80745;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80745__$1);
if(temp__5804__auto__){
var s__80745__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80745__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__80745__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__80747 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__80746 = (0);
while(true){
if((i__80746 < size__5522__auto__)){
var idx = cljs.core._nth(c__5521__auto__,i__80746);
cljs.core.chunk_append(b__80747,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),idx,new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null));

var G__81087 = (i__80746 + (1));
i__80746 = G__81087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80747),metabase$lib$remove_replace$stage_paths_$_iter__80744(cljs.core.chunk_rest(s__80745__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80747),null);
}
} else {
var idx = cljs.core.first(s__80745__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),idx,new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null),metabase$lib$remove_replace$stage_paths_$_iter__80744(cljs.core.rest(s__80745__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(join_indices);
})();
var join_field_paths = (function (){var iter__5523__auto__ = (function metabase$lib$remove_replace$stage_paths_$_iter__80820(s__80821){
return (new cljs.core.LazySeq(null,(function (){
var s__80821__$1 = s__80821;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80821__$1);
if(temp__5804__auto__){
var s__80821__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80821__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__80821__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__80823 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__80822 = (0);
while(true){
if((i__80822 < size__5522__auto__)){
var idx = cljs.core._nth(c__5521__auto__,i__80822);
var join = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(joins,idx);
if((!((new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(join) instanceof cljs.core.Keyword)))){
cljs.core.chunk_append(b__80823,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),idx,new cljs.core.Keyword(null,"fields","fields",-1932066230)], null));

var G__81089 = (i__80822 + (1));
i__80822 = G__81089;
continue;
} else {
var G__81090 = (i__80822 + (1));
i__80822 = G__81090;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80823),metabase$lib$remove_replace$stage_paths_$_iter__80820(cljs.core.chunk_rest(s__80821__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80823),null);
}
} else {
var idx = cljs.core.first(s__80821__$2);
var join = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(joins,idx);
if((!((new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(join) instanceof cljs.core.Keyword)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),idx,new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),metabase$lib$remove_replace$stage_paths_$_iter__80820(cljs.core.rest(s__80821__$2)));
} else {
var G__81092 = cljs.core.rest(s__80821__$2);
s__80821__$1 = G__81092;
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
return iter__5523__auto__(join_indices);
})();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",1527318070)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakout","breakout",-732419050)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expressions","expressions",255689909)], null)], null),join_field_paths,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([join_condition_paths], 0));
});
metabase.lib.remove_replace.find_matching_order_by_index = (function metabase$lib$remove_replace$find_matching_order_by_index(query,stage_number,p__80828){
var vec__80829 = p__80828;
var target_op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80829,(0),null);
var map__80832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80829,(1),null);
var map__80832__$1 = cljs.core.__destructure_map(map__80832);
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80832__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
var binning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80832__$1,new cljs.core.Keyword(null,"binning","binning",1709835866));
var target_ref_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80829,(2),null);
return cljs.core.first(medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p__80833){
var vec__80834 = p__80833;
var _idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80834,(0),null);
var vec__80837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80834,(1),null);
var _dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80837,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80837,(1),null);
var ordered_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80837,(2),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ordered_clause),target_op)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(cljs.core.second(ordered_clause)),temporal_unit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binning","binning",1709835866).cljs$core$IFn$_invoke$arity$1(cljs.core.second(ordered_clause)),binning)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(ordered_clause),target_ref_id)))))));
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)))));
});
metabase.lib.remove_replace.sync_order_by_options_with_breakout = (function metabase$lib$remove_replace$sync_order_by_options_with_breakout(query,stage_number,target_clause,new_options){
var temp__5802__auto__ = metabase.lib.remove_replace.find_matching_order_by_index(query,stage_number,target_clause);
if(cljs.core.truth_(temp__5802__auto__)){
var order_by_idx = temp__5802__auto__;
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",1527318070),order_by_idx,(2),(1)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__80840_SHARP_){
return medley.core.remove_vals(cljs.core.nil_QMARK_,p1__80840_SHARP_);
}),cljs.core.merge),new_options], 0));
} else {
return query;
}
});
metabase.lib.remove_replace.remove_breakout_order_by = (function metabase$lib$remove_replace$remove_breakout_order_by(query,stage_number,target_clause){
var temp__5802__auto__ = metabase.lib.remove_replace.find_matching_order_by_index(query,stage_number,target_clause);
if(cljs.core.truth_(temp__5802__auto__)){
var order_by_idx = temp__5802__auto__;
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,metabase.lib.util.remove_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",1527318070)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.query_stage(query,stage_number),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",1527318070),order_by_idx], null))], 0));
} else {
return query;
}
});
metabase.lib.remove_replace.remove_replace_location = (function metabase$lib$remove_replace$remove_replace_location(query,stage_number,unmodified_query_for_stage,location,target_clause,remove_replace_fn){
var result = metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,remove_replace_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([location,target_clause], 0));
var target_uuid = metabase.lib.options.uuid(target_clause);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query,result)){
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$remove_replace$remove_replace_location_$_match_80856(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 1)))){
try{var _AMPERSAND_match_0__80860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__80860,new cljs.core.Keyword(null,"expressions","expressions",255689909))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__80910 = (function (){var G__80914 = result;
var G__80915 = stage_number;
var G__80916 = unmodified_query_for_stage;
var G__80917 = new cljs.core.Keyword(null,"expression","expression",202311876);
var G__80918 = cljs.core.PersistentArrayMap.EMPTY;
var G__80919 = metabase.lib.util.expression_name(target_clause);
return (metabase.lib.remove_replace.remove_local_references.cljs$core$IFn$_invoke$arity$6 ? metabase.lib.remove_replace.remove_local_references.cljs$core$IFn$_invoke$arity$6(G__80914,G__80915,G__80916,G__80917,G__80918,G__80919) : metabase.lib.remove_replace.remove_local_references.call(null,G__80914,G__80915,G__80916,G__80917,G__80918,G__80919));
})();
var G__80911 = stage_number;
var G__80912 = unmodified_query_for_stage;
var G__80913 = target_uuid;
return (metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4(G__80910,G__80911,G__80912,G__80913) : metabase.lib.remove_replace.remove_stage_references.call(null,G__80910,G__80911,G__80912,G__80913));
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e80889){if((e80889 instanceof Error)){
var e__61771__auto__ = e80889;
if((e__61771__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__80860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__80860,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__80892 = (function (){var G__80896 = result;
var G__80897 = stage_number;
var G__80898 = unmodified_query_for_stage;
var G__80899 = new cljs.core.Keyword(null,"aggregation","aggregation",1597476696);
var G__80900 = cljs.core.PersistentArrayMap.EMPTY;
var G__80901 = target_uuid;
return (metabase.lib.remove_replace.remove_local_references.cljs$core$IFn$_invoke$arity$6 ? metabase.lib.remove_replace.remove_local_references.cljs$core$IFn$_invoke$arity$6(G__80896,G__80897,G__80898,G__80899,G__80900,G__80901) : metabase.lib.remove_replace.remove_local_references.call(null,G__80896,G__80897,G__80898,G__80899,G__80900,G__80901));
})();
var G__80893 = stage_number;
var G__80894 = unmodified_query_for_stage;
var G__80895 = target_uuid;
return (metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4(G__80892,G__80893,G__80894,G__80895) : metabase.lib.remove_replace.remove_stage_references.call(null,G__80892,G__80893,G__80894,G__80895));
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e80890){if((e80890 instanceof Error)){
var e__61771__auto____$1 = e80890;
if((e__61771__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto____$1;
}
} else {
throw e80890;

}
}} else {
throw e__61771__auto__;
}
} else {
throw e80889;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80868){if((e80868 instanceof Error)){
var e__61771__auto__ = e80868;
if((e__61771__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 1)))){
try{var _AMPERSAND_match_0__80863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__80863,new cljs.core.Keyword(null,"breakout","breakout",-732419050))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4(result,stage_number,unmodified_query_for_stage,target_uuid) : metabase.lib.remove_replace.remove_stage_references.call(null,result,stage_number,unmodified_query_for_stage,target_uuid))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e80879){if((e80879 instanceof Error)){
var e__61771__auto____$1 = e80879;
if((e__61771__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__80863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__80863,new cljs.core.Keyword(null,"fields","fields",-1932066230))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4(result,stage_number,unmodified_query_for_stage,target_uuid) : metabase.lib.remove_replace.remove_stage_references.call(null,result,stage_number,unmodified_query_for_stage,target_uuid))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e80880){if((e80880 instanceof Error)){
var e__61771__auto____$2 = e80880;
if((e__61771__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto____$2;
}
} else {
throw e80880;

}
}} else {
throw e__61771__auto____$1;
}
} else {
throw e80879;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80873){if((e80873 instanceof Error)){
var e__61771__auto____$1 = e80873;
if((e__61771__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__80864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__80864,new cljs.core.Keyword(null,"joins","joins",1033962699))){
try{var _AMPERSAND_match_2__80866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__80866,new cljs.core.Keyword(null,"fields","fields",-1932066230))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4(result,stage_number,unmodified_query_for_stage,target_uuid) : metabase.lib.remove_replace.remove_stage_references.call(null,result,stage_number,unmodified_query_for_stage,target_uuid))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e80878){if((e80878 instanceof Error)){
var e__61771__auto____$2 = e80878;
if((e__61771__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto____$2;
}
} else {
throw e80878;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80875){if((e80875 instanceof Error)){
var e__61771__auto____$2 = e80875;
if((e__61771__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto____$2;
}
} else {
throw e80875;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80874){if((e80874 instanceof Error)){
var e__61771__auto____$2 = e80874;
if((e__61771__auto____$2 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
} else {
throw e__61771__auto____$2;
}
} else {
throw e80874;

}
}} else {
throw e__61771__auto____$1;
}
} else {
throw e80873;

}
}} else {
throw e__61771__auto__;
}
} else {
throw e80868;

}
}})(cljs.core.PersistentVector.EMPTY,location))));
} else {
return result;
}
});
metabase.lib.remove_replace.remove_local_references = (function metabase$lib$remove_replace$remove_local_references(query,stage_number,unmodified_query_for_stage,target_op,target_opts,target_ref_id){
var stage = metabase.lib.util.query_stage(query,stage_number);
var to_remove = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (location){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,location);
if(cljs.core.truth_(temp__5804__auto__)){
var clauses = temp__5804__auto__;
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (clause){
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$remove_replace$remove_local_references_$_match_80923(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__80930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_0__80930,target_op)){
try{var _AMPERSAND_match_1__80931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if((function (p1__80920_SHARP_){
return ((cljs.core.empty_QMARK_(target_opts)) || (clojure.set.subset_QMARK_(cljs.core.set(target_opts),cljs.core.set(p1__80920_SHARP_))));
})(_AMPERSAND_match_1__80931)){
try{var _AMPERSAND_match_2__80932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__80932,target_ref_id)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,clause], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e80936){if((e80936 instanceof Error)){
var e__61771__auto__ = e80936;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e80936;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80935){if((e80935 instanceof Error)){
var e__61771__auto__ = e80935;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e80935;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80934){if((e80934 instanceof Error)){
var e__61771__auto__ = e80934;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e80934;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80933){if((e80933 instanceof Error)){
var e__61771__auto__ = e80933;
if((e__61771__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$lib$remove_replace$remove_local_references_$_match_80923,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__61771__auto__;
}
} else {
throw e80933;

}
}})(cljs.core.PersistentVector.EMPTY,clause))));
}),clauses);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.remove_replace.stage_paths(query,stage_number)], 0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (query__$1,p__80973){
var vec__80974 = p__80973;
var location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80974,(0),null);
var target_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80974,(1),null);
return metabase.lib.remove_replace.remove_replace_location(query__$1,stage_number,unmodified_query_for_stage,location__$1,target_clause,metabase.lib.util.remove_clause);
}),query,to_remove);
});
metabase.lib.remove_replace.remove_stage_references = (function metabase$lib$remove_replace$remove_stage_references(query,previous_stage_number,unmodified_query_for_stage,target_uuid){
var temp__5802__auto__ = metabase.lib.util.next_stage_number(unmodified_query_for_stage,previous_stage_number);
if(cljs.core.truth_(temp__5802__auto__)){
var stage_number = temp__5802__auto__;
var stage = metabase.lib.util.query_stage(unmodified_query_for_stage,stage_number);
var target_ref_id = cljs.core.some((function (p__80977){
var map__80978 = p__80977;
var map__80978__$1 = cljs.core.__destructure_map(map__80978);
var column = map__80978__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80978__$1,new cljs.core.Keyword("lib","source","lib/source",-434086550));
var source_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80978__$1,new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878),source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_uuid,source_uuid)))){
return new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(column);
} else {
return null;
}
}),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(unmodified_query_for_stage,stage_number,stage));
if(cljs.core.truth_(target_ref_id)){
return metabase.lib.remove_replace.remove_local_references(query,stage_number,query,new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.PersistentArrayMap.EMPTY,target_ref_id);
} else {
return query;
}
} else {
return query;
}
});
metabase.lib.remove_replace.remove_replace_STAR_ = (function metabase$lib$remove_replace$remove_replace_STAR_(query,stage_number,target_clause,remove_or_replace,replacement){
var _STAR_enforce_STAR__orig_val__80990 = metabase.util.malli._STAR_enforce_STAR_;
var _STAR_enforce_STAR__temp_val__80991 = false;
(metabase.util.malli._STAR_enforce_STAR_ = _STAR_enforce_STAR__temp_val__80991);

try{var target_clause__$1 = metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(target_clause);
var stage = metabase.lib.util.query_stage(query,stage_number);
var location__$1 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (possible_location){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,possible_location);
if(cljs.core.truth_(temp__5804__auto__)){
var clauses = temp__5804__auto__;
var target_uuid = metabase.lib.options.uuid(target_clause__$1);
if(cljs.core.truth_(cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([target_uuid]),new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.second),clauses))){
return possible_location;
} else {
return null;
}
} else {
return null;
}
}),metabase.lib.remove_replace.stage_paths(query,stage_number));
var replace_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"replace","replace",-786587770),remove_or_replace);
var replacement_clause = ((replace_QMARK_)?metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(replacement):null);
var remove_replace_fn = ((replace_QMARK_)?(function (p1__80987_SHARP_,p2__80988_SHARP_,p3__80989_SHARP_){
return metabase.lib.util.replace_clause(p1__80987_SHARP_,p2__80988_SHARP_,p3__80989_SHARP_,replacement_clause);
}):metabase.lib.util.remove_clause);
var changing_breakout_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakout","breakout",-732419050)], null),location__$1);
var sync_breakout_ordering_QMARK_ = ((replace_QMARK_) && (((changing_breakout_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target_clause__$1),cljs.core.first(replacement_clause))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(target_clause__$1),cljs.core.last(replacement_clause))))))));
var query__$1 = ((sync_breakout_ordering_QMARK_)?metabase.lib.remove_replace.sync_order_by_options_with_breakout(query,stage_number,target_clause__$1,cljs.core.select_keys(cljs.core.second(replacement_clause),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binning","binning",1709835866),new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358)], null))):((changing_breakout_QMARK_)?metabase.lib.remove_replace.remove_breakout_order_by(query,stage_number,target_clause__$1):query
));
if(cljs.core.truth_(location__$1)){
return metabase.lib.remove_replace.remove_replace_location(query__$1,stage_number,query__$1,location__$1,target_clause__$1,remove_replace_fn);
} else {
return query__$1;
}
}finally {(metabase.util.malli._STAR_enforce_STAR_ = _STAR_enforce_STAR__orig_val__80990);
}});
/**
 * Inputs: ([query :- :metabase.lib.schema/query target-clause]
 *         [query :- :metabase.lib.schema/query stage-number :- :int target-clause])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Removes the `target-clause` from the stage specified by `stage-number` of `query`.
 *   If `stage-number` is not specified, the last stage is used.
 */
metabase.lib.remove_replace.remove_clause = (function metabase$lib$remove_replace$remove_clause(var_args){
var G__80998 = arguments.length;
switch (G__80998) {
case 2:
return metabase.lib.remove_replace.remove_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.remove_replace.remove_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.remove_replace.remove_clause.cljs$core$IFn$_invoke$arity$2 = (function (query,target_clause){

return metabase.lib.remove_replace.remove_clause.cljs$core$IFn$_invoke$arity$3(query,(-1),target_clause);
}));

(metabase.lib.remove_replace.remove_clause.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,target_clause){

if(((cljs.core.map_QMARK_(target_clause)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(target_clause),new cljs.core.Keyword("mbql","join","mbql/join",-709512370))))){
return (metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3(query,stage_number,target_clause) : metabase.lib.remove_replace.remove_join.call(null,query,stage_number,target_clause));
} else {
return metabase.lib.remove_replace.remove_replace_STAR_(query,stage_number,target_clause,new cljs.core.Keyword(null,"remove","remove",-131428414),null);
}
}));

(metabase.lib.remove_replace.remove_clause.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: ([query :- :metabase.lib.schema/query target-clause new-clause]
 *         [query :- :metabase.lib.schema/query stage-number :- :int target-clause new-clause])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Replaces the `target-clause` with `new-clause` in the `query` stage specified by `stage-number`.
 *   If `stage-number` is not specified, the last stage is used.
 */
metabase.lib.remove_replace.replace_clause = (function metabase$lib$remove_replace$replace_clause(var_args){
var G__81009 = arguments.length;
switch (G__81009) {
case 3:
return metabase.lib.remove_replace.replace_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.remove_replace.replace_clause.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.remove_replace.replace_clause.cljs$core$IFn$_invoke$arity$3 = (function (query,target_clause,new_clause){

return metabase.lib.remove_replace.replace_clause.cljs$core$IFn$_invoke$arity$4(query,(-1),target_clause,new_clause);
}));

(metabase.lib.remove_replace.replace_clause.cljs$core$IFn$_invoke$arity$4 = (function (query,stage_number,target_clause,new_clause){

if(((cljs.core.map_QMARK_(target_clause)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(target_clause),new cljs.core.Keyword("mbql","join","mbql/join",-709512370))))){
return (metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$4(query,stage_number,target_clause,new_clause) : metabase.lib.remove_replace.replace_join.call(null,query,stage_number,target_clause,new_clause));
} else {
return metabase.lib.remove_replace.remove_replace_STAR_(query,stage_number,target_clause,new cljs.core.Keyword(null,"replace","replace",-786587770),new_clause);
}
}));

(metabase.lib.remove_replace.replace_clause.cljs$lang$maxFixedArity = 4);

metabase.lib.remove_replace.replace_join_alias = (function metabase$lib$remove_replace$replace_join_alias(a_join,old_name,new_name){
return (function metabase$lib$remove_replace$replace_join_alias_$_replace_81016(_AMPERSAND_parents,_AMPERSAND_match){
try{if((function (field_clause){
return ((metabase.lib.util.field_clause_QMARK_(field_clause)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.current_join_alias(field_clause),old_name)));
})(_AMPERSAND_match)){
var field = _AMPERSAND_match;
return metabase.lib.join.with_join_alias(field,new_name);
} else {
throw cljs.core.match.backtrack;

}
}catch (e81020){if((e81020 instanceof Error)){
var e__61771__auto__ = e81020;
if((e__61771__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$lib$remove_replace$replace_join_alias_$_replace_81016,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__61771__auto__;
}
} else {
throw e81020;

}
}})(cljs.core.PersistentVector.EMPTY,a_join);
});
metabase.lib.remove_replace.rename_join_in_stage = (function metabase$lib$remove_replace$rename_join_in_stage(stage,idx,new_name){
var the_joins = new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage);
var vec__81021 = ((((((-1) < idx)) && ((idx < cljs.core.count(the_joins)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_joins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"alias","alias",-2039751630)], null))], null):null);
var idx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81021,(0),null);
var old_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81021,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = idx__$1;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_name,new_name);
} else {
return and__5043__auto__;
}
})())){
var unique_name_fn = metabase.lib.util.unique_name_generator();
var _ = cljs.core.run_BANG_(unique_name_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630),the_joins));
var unique_name = unique_name_fn(new_name);
return metabase.lib.remove_replace.replace_join_alias(cljs.core.assoc_in(stage,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),idx__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630)], null),unique_name),old_name,unique_name);
} else {
return stage;
}
});
metabase.lib.remove_replace.join_spec__GT_clause = (function metabase$lib$remove_replace$join_spec__GT_clause(query,stage_number,join_spec){
if(cljs.core.integer_QMARK_(join_spec)){
return join_spec;
} else {
var pred = (function (){var G__81032 = cljs.core.PersistentHashSet.createAsIfByAssoc([join_spec]);
if(typeof join_spec === 'string'){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__81032,new cljs.core.Keyword(null,"alias","alias",-2039751630));
} else {
return G__81032;
}
})();
return cljs.core.some((function (p__81037){
var vec__81038 = p__81037;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81038,(0),null);
var a_join = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81038,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(a_join) : pred.call(null,a_join)))){
return idx;
} else {
return null;
}
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number))));
}
});
/**
 * Inputs: ([query join-spec new-name]
 *         [query :- :metabase.lib.schema/query stage-number :- :int join-spec :- [:or :metabase.lib.schema.join/join :string :int] new-name :- :metabase.lib.schema.common/non-blank-string])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Rename the join specified by `join-spec` in `query` at `stage-number` to `new-name`.
 *   The join can be specified either by itself (as returned by [[joins]]), by its alias
 *   or by its index in the list of joins as returned by [[joins]].
 *   If `stage-number` is not provided, the last stage is used.
 *   If the specified join cannot be found, then `query` is returned as is.
 *   If renaming the join to `new-name` would clash with an existing join, a
 *   suffix is appended to `new-name` to make it unique.
 */
metabase.lib.remove_replace.rename_join = (function metabase$lib$remove_replace$rename_join(var_args){
var G__81043 = arguments.length;
switch (G__81043) {
case 3:
return metabase.lib.remove_replace.rename_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.remove_replace.rename_join.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.remove_replace.rename_join.cljs$core$IFn$_invoke$arity$3 = (function (query,join_spec,new_name){

return metabase.lib.remove_replace.rename_join.cljs$core$IFn$_invoke$arity$4(query,(-1),join_spec,new_name);
}));

(metabase.lib.remove_replace.rename_join.cljs$core$IFn$_invoke$arity$4 = (function (query,stage_number,join_spec,new_name){

var temp__5802__auto__ = metabase.lib.remove_replace.join_spec__GT_clause(query,stage_number,join_spec);
if(cljs.core.truth_(temp__5802__auto__)){
var idx = temp__5802__auto__;
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,metabase.lib.remove_replace.rename_join_in_stage,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idx,new_name], 0));
} else {
return query;
}
}));

(metabase.lib.remove_replace.rename_join.cljs$lang$maxFixedArity = 4);

metabase.lib.remove_replace.remove_matching_missing_columns = (function metabase$lib$remove_replace$remove_matching_missing_columns(query_after,query_before,stage_number,match_spec){
var removed_cols = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query_before,stage_number,metabase.lib.util.query_stage(query_before,stage_number))),cljs.core.set(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query_after,stage_number,metabase.lib.util.query_stage(query_after,stage_number))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__81052_SHARP_,p2__81053_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(metabase.lib.remove_replace.remove_local_references,p1__81052_SHARP_,stage_number,query_after,(match_spec.cljs$core$IFn$_invoke$arity$1 ? match_spec.cljs$core$IFn$_invoke$arity$1(p2__81053_SHARP_) : match_spec.call(null,p2__81053_SHARP_)));
}),query_after,removed_cols);
});
metabase.lib.remove_replace.remove_invalidated_refs = (function metabase$lib$remove_replace$remove_invalidated_refs(query_after,query_before,stage_number){
var query_without_local_refs = metabase.lib.remove_replace.remove_matching_missing_columns(query_after,query_before,stage_number,(function (column){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023).cljs$core$IFn$_invoke$arity$1(column)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)], null);
}));
var temp__5802__auto__ = metabase.lib.util.next_stage_number(query_without_local_refs,stage_number);
if(cljs.core.truth_(temp__5802__auto__)){
var stage_number__$1 = temp__5802__auto__;
return metabase.lib.remove_replace.remove_matching_missing_columns(query_without_local_refs,query_before,stage_number__$1,(function (column){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(column)], null);
}));
} else {
return query_without_local_refs;
}
});
metabase.lib.remove_replace.join_spec__GT_alias = (function metabase$lib$remove_replace$join_spec__GT_alias(query,stage_number,join_spec){
if(cljs.core.integer_QMARK_(join_spec)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.query_stage(query,stage_number),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),join_spec,new cljs.core.Keyword(null,"alias","alias",-2039751630)], null));
} else {
if(cljs.core.map_QMARK_(join_spec)){
return new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join_spec);
} else {
return join_spec;

}
}
});
metabase.lib.remove_replace.update_joins = (function metabase$lib$remove_replace$update_joins(query,stage_number,join_spec,f){
var temp__5802__auto__ = metabase.lib.remove_replace.join_spec__GT_alias(query,stage_number,join_spec);
if(cljs.core.truth_(temp__5802__auto__)){
var join_alias = temp__5802__auto__;
var _STAR_enforce_STAR__orig_val__81070 = metabase.util.malli._STAR_enforce_STAR_;
var _STAR_enforce_STAR__temp_val__81071 = false;
(metabase.util.malli._STAR_enforce_STAR_ = _STAR_enforce_STAR__temp_val__81071);

try{var query_after = (function (){var $q = query;
var $q__$1 = metabase.lib.util.update_query_stage($q,stage_number,(function (stage){
return metabase.util.assoc_dissoc(stage,new cljs.core.Keyword(null,"joins","joins",1033962699),(function (){var G__81072 = new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage);
var G__81073 = join_alias;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__81072,G__81073) : f.call(null,G__81072,G__81073));
})());
}));
return metabase.lib.util.update_query_stage($q__$1,stage_number,(function (stage){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(stage,new cljs.core.Keyword(null,"joins","joins",1033962699),(function (joins){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__81068_SHARP_){
return metabase.lib.join.add_default_alias($q__$1,stage_number,p1__81068_SHARP_);
}),joins);
}));
}));
})();
return metabase.lib.remove_replace.remove_invalidated_refs(query_after,query,stage_number);
}finally {(metabase.util.malli._STAR_enforce_STAR_ = _STAR_enforce_STAR__orig_val__81070);
}} else {
return query;
}
});
/**
 * Inputs: ([query join-spec]
 *         [query :- :metabase.lib.schema/query stage-number :- :int join-spec :- [:or :metabase.lib.schema.join/join :string :int]])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Remove the join specified by `join-spec` in `query` at `stage-number`.
 *   The join can be specified either by itself (as returned by [[joins]]), by its alias
 *   or by its index in the list of joins as returned by [[joins]].
 *   If `stage-number` is not provided, the last stage is used.
 *   If the specified join cannot be found, then `query` is returned as is.
 *   Top level clauses containing references to the removed join are removed too.
 */
metabase.lib.remove_replace.remove_join = (function metabase$lib$remove_replace$remove_join(var_args){
var G__81077 = arguments.length;
switch (G__81077) {
case 2:
return metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$2 = (function (query,join_spec){

return metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3(query,(-1),join_spec);
}));

(metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,join_spec){

return metabase.lib.remove_replace.update_joins(query,stage_number,join_spec,(function (joins,join_alias){
return cljs.core.not_empty(cljs.core.filterv((function (p1__81074_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(p1__81074_SHARP_),join_alias);
}),joins));
}));
}));

(metabase.lib.remove_replace.remove_join.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: ([query join-spec new-join]
 *         [query :- :metabase.lib.schema/query stage-number :- :int join-spec :- [:or :metabase.lib.schema.join/join :string :int] new-join])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Replace the join specified by `join-spec` in `query` at `stage-number` with `new-join`.
 *   If `new-join` is nil, the join is removed as if by [[remove-join]].
 *   The join can be specified either by itself (as returned by [[joins]]), by its alias
 *   or by its index in the list of joins as returned by [[joins]].
 *   If `stage-number` is not provided, the last stage is used.
 *   If the specified join cannot be found, then `query` is returned as is.
 *   Top level clauses containing references to the removed join are removed too.
 */
metabase.lib.remove_replace.replace_join = (function metabase$lib$remove_replace$replace_join(var_args){
var G__81082 = arguments.length;
switch (G__81082) {
case 3:
return metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$3 = (function (query,join_spec,new_join){

return metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$4(query,(-1),join_spec,new_join);
}));

(metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$4 = (function (query,stage_number,join_spec,new_join){

if((new_join == null)){
return metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3(query,stage_number,join_spec);
} else {
return metabase.lib.remove_replace.update_joins(query,stage_number,join_spec,(function (joins,join_alias){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__81078_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(p1__81078_SHARP_),join_alias)){
return new_join;
} else {
return p1__81078_SHARP_;
}
}),joins);
}));
}
}));

(metabase.lib.remove_replace.replace_join.cljs$lang$maxFixedArity = 4);

Object.defineProperty(module.exports, "remove_clause", { enumerable: false, get: function() { return metabase.lib.remove_replace.remove_clause; } });
Object.defineProperty(module.exports, "replace_clause", { enumerable: false, get: function() { return metabase.lib.remove_replace.replace_clause; } });
Object.defineProperty(module.exports, "remove_stage_references", { enumerable: false, get: function() { return metabase.lib.remove_replace.remove_stage_references; } });
Object.defineProperty(module.exports, "sync_order_by_options_with_breakout", { enumerable: false, get: function() { return metabase.lib.remove_replace.sync_order_by_options_with_breakout; } });
Object.defineProperty(module.exports, "remove_replace_location", { enumerable: false, get: function() { return metabase.lib.remove_replace.remove_replace_location; } });
Object.defineProperty(module.exports, "find_matching_order_by_index", { enumerable: false, get: function() { return metabase.lib.remove_replace.find_matching_order_by_index; } });
Object.defineProperty(module.exports, "update_joins", { enumerable: false, get: function() { return metabase.lib.remove_replace.update_joins; } });
Object.defineProperty(module.exports, "join_spec__GT_clause", { enumerable: false, get: function() { return metabase.lib.remove_replace.join_spec__GT_clause; } });
Object.defineProperty(module.exports, "replace_join_alias", { enumerable: false, get: function() { return metabase.lib.remove_replace.replace_join_alias; } });
Object.defineProperty(module.exports, "remove_breakout_order_by", { enumerable: false, get: function() { return metabase.lib.remove_replace.remove_breakout_order_by; } });
Object.defineProperty(module.exports, "remove_matching_missing_columns", { enumerable: false, get: function() { return metabase.lib.remove_replace.remove_matching_missing_columns; } });
Object.defineProperty(module.exports, "join_spec__GT_alias", { enumerable: false, get: function() { return metabase.lib.remove_replace.join_spec__GT_alias; } });
Object.defineProperty(module.exports, "rename_join_in_stage", { enumerable: false, get: function() { return metabase.lib.remove_replace.rename_join_in_stage; } });
Object.defineProperty(module.exports, "remove_replace_STAR_", { enumerable: false, get: function() { return metabase.lib.remove_replace.remove_replace_STAR_; } });
Object.defineProperty(module.exports, "replace_join", { enumerable: false, get: function() { return metabase.lib.remove_replace.replace_join; } });
Object.defineProperty(module.exports, "remove_local_references", { enumerable: false, get: function() { return metabase.lib.remove_replace.remove_local_references; } });
Object.defineProperty(module.exports, "stage_paths", { enumerable: false, get: function() { return metabase.lib.remove_replace.stage_paths; } });
Object.defineProperty(module.exports, "remove_join", { enumerable: false, get: function() { return metabase.lib.remove_replace.remove_join; } });
Object.defineProperty(module.exports, "rename_join", { enumerable: false, get: function() { return metabase.lib.remove_replace.rename_join; } });
Object.defineProperty(module.exports, "remove_invalidated_refs", { enumerable: false, get: function() { return metabase.lib.remove_replace.remove_invalidated_refs; } });
//# sourceMappingURL=metabase.lib.remove_replace.js.map
