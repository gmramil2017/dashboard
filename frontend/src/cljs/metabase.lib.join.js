var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./inflections.core.js");
require("./medley.core.js");
require("./metabase.lib.common.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.filter.operator.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.query.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.filter.js");
require("./metabase.lib.schema.join.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.util.js");
require("./metabase.mbql.util.match.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.join.js");

goog.provide('metabase.lib.join');
/**
 * A Join that may not yet have an `:alias`, which is normally required; [[join]] accepts this and will add a default
 *   alias if one is not present.
 */
metabase.lib.join.JoinWithOptionalAlias = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.join","join","metabase.lib.schema.join/join",1110197236)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.join","alias","metabase.lib.schema.join/alias",53862412)], null)], null)], null)], null);
/**
 * A join that may not yet have an `:alias` or `:conditions`.
 */
metabase.lib.join.PartialJoin = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),metabase.lib.join.JoinWithOptionalAlias,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.join","conditions","metabase.lib.schema.join/conditions",118173612)], null)], null)], null)], null);
metabase.lib.join.FieldOrPartialJoin = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),metabase.lib.metadata.ColumnMetadata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("mbql.clause","field","mbql.clause/field",1497292735)], null),metabase.lib.join.PartialJoin], null);
/**
 * Inputs: [field-or-join :- [:maybe FieldOrPartialJoin]]
 *   Return: [:maybe :metabase.lib.schema.common/non-blank-string]
 *        
 * 
 *   Get the current join alias associated with something, if it has one.
 */
metabase.lib.join.current_join_alias = (function metabase$lib$join$current_join_alias(field_or_join){

var G__79923 = metabase.lib.dispatch.dispatch_value(field_or_join);
var G__79923__$1 = (((G__79923 instanceof cljs.core.Keyword))?G__79923.fqn:null);
switch (G__79923__$1) {
case "dispatch-type/nil":
return null;

break;
case "field":
return new cljs.core.Keyword(null,"join-alias","join-alias",1454206794).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(field_or_join));

break;
case "metadata/column":
return new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023).cljs$core$IFn$_invoke$arity$1(field_or_join);

break;
case "mbql/join":
return new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(field_or_join);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79923__$1)].join('')));

}
});
/**
 * Impl for [[with-join-alias]] for a join: recursively update the `:join-alias` for the `:field` refs inside `:fields`
 *   as needed.
 */
metabase.lib.join.with_join_alias_update_join_fields = (function metabase$lib$join$with_join_alias_update_join_fields(join,new_alias){
var G__79930 = join;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(join))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__79930,new cljs.core.Keyword(null,"fields","fields",-1932066230),(function (fields){
if((!(cljs.core.sequential_QMARK_(fields)))){
return fields;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (field_ref){
return (metabase.lib.join.with_join_alias.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.join.with_join_alias.cljs$core$IFn$_invoke$arity$2(field_ref,new_alias) : metabase.lib.join.with_join_alias.call(null,field_ref,new_alias));
}),fields);
}
}));
} else {
return G__79930;
}
});
/**
 * Inputs: [condition :- :metabase.lib.schema.expression/boolean]
 *   Return: :boolean
 *        
 * 
 *   Whether this join condition is a binary condition with two `:field` references (a LHS and a RHS), as you'd produce
 *   in the frontend using functions like [[join-condition-operators]], [[join-condition-lhs-columns]],
 *   and [[join-condition-rhs-columns]].
 */
metabase.lib.join.standard_join_condition_QMARK_ = (function metabase$lib$join$standard_join_condition_QMARK_(condition){

return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$join$standard_join_condition_QMARK__$_match_79936(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__79940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if((_AMPERSAND_match_0__79940 instanceof cljs.core.Keyword)){
try{var _AMPERSAND_match_2__79942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_2__79942)) && ((cljs.core.count(_AMPERSAND_match_2__79942) === 3)))){
try{var _AMPERSAND_match_2__79942_0__79944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__79942,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__79942_0__79944,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_3__79943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_3__79943)) && ((cljs.core.count(_AMPERSAND_match_3__79943) === 3)))){
try{var _AMPERSAND_match_3__79943_0__79977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_3__79943,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_3__79943_0__79977,new cljs.core.Keyword(null,"field","field",-1302436500))){
var _rhs_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_3__79943,(1));
var _rhs_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_3__79943,(2));
var _lhs_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__79942,(1));
var _lhs_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__79942,(2));
var _operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79990){if((e79990 instanceof Error)){
var e__61771__auto__ = e79990;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e79990;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79988){if((e79988 instanceof Error)){
var e__61771__auto__ = e79988;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e79988;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79987){if((e79987 instanceof Error)){
var e__61771__auto__ = e79987;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e79987;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79986){if((e79986 instanceof Error)){
var e__61771__auto__ = e79986;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e79986;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79985){if((e79985 instanceof Error)){
var e__61771__auto__ = e79985;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e79985;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79983){if((e79983 instanceof Error)){
var e__61771__auto__ = e79983;
if((e__61771__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null);
} else {
throw e__61771__auto__;
}
} else {
throw e79983;

}
}})(cljs.core.PersistentVector.EMPTY,condition))));
});
/**
 * If `condition` is a [[standard-join-condition?]], return the RHS.
 */
metabase.lib.join.standard_join_condition_rhs = (function metabase$lib$join$standard_join_condition_rhs(condition){
if(cljs.core.truth_(metabase.lib.join.standard_join_condition_QMARK_(condition))){
var vec__79992 = condition;
var _operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79992,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79992,(1),null);
var _lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79992,(2),null);
var rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79992,(3),null);
return rhs;
} else {
return null;
}
});
/**
 * If `condition` is a [[standard-join-condition?]], update the RHS with `f` like
 * 
 *  (apply f rhs args)
 */
metabase.lib.join.standard_join_condition_update_rhs = (function metabase$lib$join$standard_join_condition_update_rhs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___80435 = arguments.length;
var i__5770__auto___80436 = (0);
while(true){
if((i__5770__auto___80436 < len__5769__auto___80435)){
args__5775__auto__.push((arguments[i__5770__auto___80436]));

var G__80437 = (i__5770__auto___80436 + (1));
i__5770__auto___80436 = G__80437;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.join.standard_join_condition_update_rhs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.join.standard_join_condition_update_rhs.cljs$core$IFn$_invoke$arity$variadic = (function (condition,f,args){
if(cljs.core.not(metabase.lib.join.standard_join_condition_QMARK_(condition))){
return condition;
} else {
var vec__79998 = condition;
var operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79998,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79998,(1),null);
var lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79998,(2),null);
var rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79998,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [operator,opts,lhs,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,rhs,args)], null);
}
}));

(metabase.lib.join.standard_join_condition_update_rhs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.join.standard_join_condition_update_rhs.cljs$lang$applyTo = (function (seq79995){
var G__79996 = cljs.core.first(seq79995);
var seq79995__$1 = cljs.core.next(seq79995);
var G__79997 = cljs.core.first(seq79995__$1);
var seq79995__$2 = cljs.core.next(seq79995__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79996,G__79997,seq79995__$2);
}));

/**
 * Inputs: [join :- PartialJoin old-alias :- [:maybe :metabase.lib.schema.common/non-blank-string] new-alias :- [:maybe :metabase.lib.schema.common/non-blank-string]]
 *   Return: PartialJoin
 *        
 * 
 *   Impl for [[with-join-alias]] for a join: recursively update the `:join-alias` for inside the `:conditions` of the
 *   join.
 * 
 *   If `old-alias` is specified, uses [[metabase.mbql.util.match]] to update all the `:field` references using the old
 *   alias.
 * 
 *   If `old-alias` is `nil`, updates the RHS of all 'standard' conditions (binary filter clauses with two `:field` refs as
 *   args, e.g. the kind you'd get if you were using [[join-condition-operators]] and the like to create them). This
 *   currently doesn't handle more complex filter clauses that were created without the 'normal' MLv2 functions used by
 *   the frontend; we can add this in the future if we need it.
 */
metabase.lib.join.with_join_alias_update_join_conditions = (function metabase$lib$join$with_join_alias_update_join_conditions(join,old_alias,new_alias){

if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"conditions","conditions",-1647236270).cljs$core$IFn$_invoke$arity$1(join))){
return join;
} else {
if(cljs.core.truth_(old_alias)){
return metabase.mbql.util.match.impl.update_in_unless_empty(join,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null),(function (x__63598__auto__){
return (function metabase$lib$join$with_join_alias_update_join_conditions_$_replace_80004(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__80007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__80007,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_1__80008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if((((!((_AMPERSAND_match_1__80008 == null))))?(((((_AMPERSAND_match_1__80008.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === _AMPERSAND_match_1__80008.cljs$core$ILookup$))))?true:(((!_AMPERSAND_match_1__80008.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_1__80008):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_1__80008))){
try{var _AMPERSAND_match_1__80008_join_alias__80013 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match_1__80008,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__80008_join_alias__80013,old_alias)){
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return (metabase.lib.join.with_join_alias.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.join.with_join_alias.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,new_alias) : metabase.lib.join.with_join_alias.call(null,_AMPERSAND_match,new_alias));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80037){if((e80037 instanceof Error)){
var e__61771__auto__ = e80037;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e80037;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80018){if((e80018 instanceof Error)){
var e__61771__auto__ = e80018;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e80018;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80016){if((e80016 instanceof Error)){
var e__61771__auto__ = e80016;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e80016;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80014){if((e80014 instanceof Error)){
var e__61771__auto__ = e80014;
if((e__61771__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$lib$join$with_join_alias_update_join_conditions_$_replace_80004,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__61771__auto__;
}
} else {
throw e80014;

}
}})(cljs.core.PersistentVector.EMPTY,x__63598__auto__);
}));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"conditions","conditions",-1647236270),(function (conditions){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (condition){
return metabase.lib.join.standard_join_condition_update_rhs.cljs$core$IFn$_invoke$arity$variadic(condition,metabase.lib.join.with_join_alias,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_alias], 0));
}),conditions);
}));

}
}
});
/**
 * Impl for [[with-join-alias]] for a join.
 */
metabase.lib.join.with_join_alias_update_join = (function metabase$lib$join$with_join_alias_update_join(join,new_alias){
var old_alias = metabase.lib.join.current_join_alias(join);
return metabase.lib.join.with_join_alias_update_join_conditions(metabase.lib.join.with_join_alias_update_join_fields(metabase.util.assoc_dissoc(join,new cljs.core.Keyword(null,"alias","alias",-2039751630),new_alias),new_alias),old_alias,new_alias);
});
/**
 * Inputs: [field-or-join :- FieldOrPartialJoin join-alias :- [:maybe :metabase.lib.schema.common/non-blank-string]]
 *   Return: FieldOrPartialJoin
 *        
 * 
 *   Add OR REMOVE a specific `join-alias` to `field-or-join`, which is either a `:field`/Field metadata, or a join map.
 *   Does not recursively update other references (yet; we can add this in the future).
 */
metabase.lib.join.with_join_alias = (function metabase$lib$join$with_join_alias(field_or_join,join_alias){

var G__80039 = metabase.lib.dispatch.dispatch_value(field_or_join);
var G__80039__$1 = (((G__80039 instanceof cljs.core.Keyword))?G__80039.fqn:null);
switch (G__80039__$1) {
case "field":
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(field_or_join,metabase.util.assoc_dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),join_alias], 0));

break;
case "metadata/column":
return metabase.util.assoc_dissoc(field_or_join,new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023),join_alias);

break;
case "mbql/join":
return metabase.lib.join.with_join_alias_update_join(field_or_join,join_alias);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80039__$1)].join('')));

}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int join-alias :- :metabase.lib.schema.common/non-blank-string]
 *   Return: :metabase.lib.schema.join/join
 *        
 * 
 *   Resolve a join with a specific `join-alias`.
 */
metabase.lib.join.resolve_join = (function metabase$lib$join$resolve_join(query,stage_number,join_alias){

var map__80047 = metabase.lib.util.query_stage(query,stage_number);
var map__80047__$1 = cljs.core.__destructure_map(map__80047);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80047__$1,new cljs.core.Keyword(null,"joins","joins",1033962699));
var or__5045__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__80044_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(p1__80044_SHARP_),join_alias);
}),joins);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No join named {0}, found: {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([join_alias], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630),joins)], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),join_alias,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null));
}
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (query,_stage_number,p__80055,_style){
var map__80056 = p__80055;
var map__80056__$1 = cljs.core.__destructure_map(map__80056);
var _join = map__80056__$1;
var vec__80057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80056__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
var map__80060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80057,(0),null);
var map__80060__$1 = cljs.core.__destructure_map(map__80060);
var _first_stage = map__80060__$1;
var source_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80060__$1,new cljs.core.Keyword(null,"source-table","source-table",-225307692));
var source_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80060__$1,new cljs.core.Keyword(null,"source-card","source-card",-1580820390));
var or__5045__auto__ = (cljs.core.truth_(source_table)?new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.table(query,source_table)):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (cljs.core.truth_(source_card)?metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Question {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_card], 0)):null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return metabase.shared.util.i18n.js_i18n("Native Query");
}
}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (query,stage_number,join){
var display_name = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,join);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return display_name;
}
})(),new cljs.core.Keyword(null,"display-name","display-name",694513143),display_name], null);
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (_query,_stage_number,_query__$1){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You can't calculate a metadata map for a join! Use lib.metadata.calculation/returned-columns-method instead.",cljs.core.PersistentArrayMap.EMPTY);
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int column-metadata :- lib.metadata/ColumnMetadata join-alias :- :metabase.lib.schema.common/non-blank-string]
 *   Return: lib.metadata.calculation/ColumnMetadataWithSource
 *        
 * 
 *   For a column that comes from a join `:fields` list, add or update metadata as needed, e.g. include join name in the
 *   display name.
 */
metabase.lib.join.column_from_join_fields = (function metabase$lib$join$column_from_join_fields(query,stage_number,column_metadata,join_alias){

var column_metadata__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(column_metadata,new cljs.core.Keyword(null,"source-alias","source-alias",1652088724),join_alias);
var col = metabase.lib.join.with_join_alias(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(column_metadata__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,column_metadata__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","joins","source/joins",1225821486)], 0)),join_alias);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.current_join_alias(col),join_alias)){
} else {
throw (new Error("Assert failed: (= (current-join-alias col) join-alias)"));
}

return col;
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("option","join.strategy","option/join.strategy",1337097154),(function (_query,_stage_number,p__80065,_style){
var map__80066 = p__80065;
var map__80066__$1 = cljs.core.__destructure_map(map__80066);
var strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80066__$1,new cljs.core.Keyword(null,"strategy","strategy",-1471631918));
var G__80067 = strategy;
var G__80067__$1 = (((G__80067 instanceof cljs.core.Keyword))?G__80067.fqn:null);
switch (G__80067__$1) {
case "left-join":
return metabase.shared.util.i18n.js_i18n("Left outer join");

break;
case "right-join":
return metabase.shared.util.i18n.js_i18n("Right outer join");

break;
case "inner-join":
return metabase.shared.util.i18n.js_i18n("Inner join");

break;
case "full-join":
return metabase.shared.util.i18n.js_i18n("Full outer join");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80067__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("option","join.strategy","option/join.strategy",1337097154),(function (query,stage_number,p__80069){
var map__80070 = p__80069;
var map__80070__$1 = cljs.core.__destructure_map(map__80070);
var option = map__80070__$1;
var strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80070__$1,new cljs.core.Keyword(null,"strategy","strategy",-1471631918));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80070__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var G__80071 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"short-name","short-name",-1767085022),metabase.util.qualified_name(strategy),new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,option)], null);
if(cljs.core.truth_(default$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80071,new cljs.core.Keyword(null,"default","default",-1987822328),true);
} else {
return G__80071;
}
}));
/**
 * Inputs: [join-alias :- :metabase.lib.schema.common/non-blank-string field-name :- :metabase.lib.schema.common/non-blank-string]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Desired alias for a Field that comes from a join, e.g.
 * 
 *  MyJoin__my_field
 * 
 *   You should pass the results thru a unique name function.
 */
metabase.lib.join.joined_field_desired_alias = (function metabase$lib$join$joined_field_desired_alias(join_alias,field_name){

return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3("%s__%s",join_alias,field_name) : metabase.lib.util.format.call(null,"%s__%s",join_alias,field_name));
});
/**
 * Inputs: [join :- [:map [:alias {:error/message "Join must have an alias to determine column aliases!"} :metabase.lib.schema.common/non-blank-string]] unique-name-fn :- fn? col :- :map]
 *   Return: :map
 */
metabase.lib.join.add_source_and_desired_aliases = (function metabase$lib$join$add_source_and_desired_aliases(join,unique_name_fn,col){

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(col,new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177))(col),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__80125 = metabase.lib.join.joined_field_desired_alias(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177))(col));
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__80125) : unique_name_fn.call(null,G__80125));
})()], 0));
});
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (query,stage_number,p__80138,p__80139){
var map__80140 = p__80138;
var map__80140__$1 = cljs.core.__destructure_map(map__80140);
var join = map__80140__$1;
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80140__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80140__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"none","none",1333468478));
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80140__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
var map__80141 = p__80139;
var map__80141__$1 = cljs.core.__destructure_map(map__80141);
var options = map__80141__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80141__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fields,new cljs.core.Keyword(null,"none","none",1333468478))){
return null;
} else {
var ensure_previous_stages_have_metadata = (((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.stage !== 'undefined') && (typeof metabase.lib.stage.ensure_previous_stages_have_metadata !== 'undefined'))?(new cljs.core.Var((function (){
return metabase.lib.stage.ensure_previous_stages_have_metadata;
}),cljs.core.with_meta(new cljs.core.Symbol("metabase.lib.stage","ensure-previous-stages-have-metadata","metabase.lib.stage/ensure-previous-stages-have-metadata",2048342183,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null);
var join_query = (function (){var G__80158 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword(null,"stages","stages",-442109532),stages);
if(cljs.core.truth_(ensure_previous_stages_have_metadata)){
return (ensure_previous_stages_have_metadata.cljs$core$IFn$_invoke$arity$2 ? ensure_previous_stages_have_metadata.cljs$core$IFn$_invoke$arity$2(G__80158,(-1)) : ensure_previous_stages_have_metadata.call(null,G__80158,(-1)));
} else {
return G__80158;
}
})();
var field_metadatas = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fields,new cljs.core.Keyword(null,"all","all",892129742)))?metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(join_query,(-1),cljs.core.peek(stages),options):(function (){var iter__5523__auto__ = (function metabase$lib$join$iter__80159(s__80160){
return (new cljs.core.LazySeq(null,(function (){
var s__80160__$1 = s__80160;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80160__$1);
if(temp__5804__auto__){
var s__80160__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80160__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__80160__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__80162 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__80161 = (0);
while(true){
if((i__80161 < size__5522__auto__)){
var field_ref = cljs.core._nth(c__5521__auto__,i__80161);
var join_field = metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(field_ref,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794)], 0));
cljs.core.chunk_append(b__80162,metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(join_query,(-1),join_field));

var G__80469 = (i__80161 + (1));
i__80161 = G__80469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80162),metabase$lib$join$iter__80159(cljs.core.chunk_rest(s__80160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80162),null);
}
} else {
var field_ref = cljs.core.first(s__80160__$2);
var join_field = metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(field_ref,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794)], 0));
return cljs.core.cons(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(join_query,(-1),join_field),metabase$lib$join$iter__80159(cljs.core.rest(s__80160__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(fields);
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (field_metadata){
return metabase.lib.join.add_source_and_desired_aliases(join,unique_name_fn,metabase.lib.join.column_from_join_fields(query,stage_number,field_metadata,join_alias));
}),field_metadatas);
}
}));
metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (query,stage_number,join,options){
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"all","all",892129742)),options);
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- fn?]
 *   Return: lib.metadata.calculation/ColumnsWithUniqueAliases
 *        
 * 
 *   Convenience for calling [[lib.metadata.calculation/visible-columns]] on all of the joins in a query stage.
 */
metabase.lib.join.all_joins_visible_columns = (function metabase$lib$join$all_joins_visible_columns(query,stage_number,unique_name_fn){

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (join){
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870),unique_name_fn,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null));
})),new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int options :- lib.metadata.calculation/ReturnedColumnsOptions]
 *   Return: lib.metadata.calculation/ColumnsWithUniqueAliases
 *        
 * 
 *   Convenience for calling [[lib.metadata.calculation/returned-columns-method]] on all the joins in a query stage.
 */
metabase.lib.join.all_joins_expected_columns = (function metabase$lib$join$all_joins_expected_columns(query,stage_number,options){

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (join){
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,join,options);
})),new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.join !== 'undefined') && (typeof metabase.lib.join.join_clause_method !== 'undefined')){
} else {
/**
 * Convert something to a join clause.
 */
metabase.lib.join.join_clause_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__80175 = cljs.core.get_global_hierarchy;
return (fexpr__80175.cljs$core$IFn$_invoke$arity$0 ? fexpr__80175.cljs$core$IFn$_invoke$arity$0() : fexpr__80175.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.join","join-clause-method"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.join.join_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (a_join_clause){
return a_join_clause;
}));
metabase.lib.join.join_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (another_query){
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","join","mbql/join",-709512370),new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.pipeline(another_query))], null));
}));
metabase.lib.join.join_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (mbql_stage){
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","join","mbql/join",-709512370),new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mbql_stage], null)], null));
}));
/**
 * Add `join-alias` to the RHS of all [[standard-join-condition?]] `conditions` that don't already have a `:join-alias`.
 *   If an RHS already has a `:join-alias`, don't second guess what was already explicitly specified.
 */
metabase.lib.join.with_join_conditions_add_alias_to_rhses = (function metabase$lib$join$with_join_conditions_add_alias_to_rhses(conditions,join_alias){
if(cljs.core.not(join_alias)){
return conditions;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (condition){
var or__5045__auto__ = (function (){var temp__5804__auto__ = metabase.lib.join.standard_join_condition_rhs(condition);
if(cljs.core.truth_(temp__5804__auto__)){
var rhs = temp__5804__auto__;
if(cljs.core.truth_(metabase.lib.join.current_join_alias(rhs))){
return null;
} else {
return metabase.lib.join.standard_join_condition_update_rhs.cljs$core$IFn$_invoke$arity$variadic(condition,metabase.lib.join.with_join_alias,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([join_alias], 0));
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return condition;
}
}),conditions);
}
});
/**
 * Inputs: [a-join :- PartialJoin conditions :- [:maybe [:sequential [:or :metabase.lib.schema.expression/boolean :metabase.lib.schema.common/external-op]]]]
 *   Return: PartialJoin
 *        
 * 
 *   Update the `:conditions` (filters) for a Join clause.
 */
metabase.lib.join.with_join_conditions = (function metabase$lib$join$with_join_conditions(a_join,conditions){

var conditions__$1 = metabase.lib.join.with_join_conditions_add_alias_to_rhses(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.common.__GT_op_arg,conditions),metabase.lib.join.current_join_alias(a_join));
return metabase.util.assoc_dissoc(a_join,new cljs.core.Keyword(null,"conditions","conditions",-1647236270),cljs.core.not_empty(conditions__$1));
});
/**
 * Inputs: ([joinable]
 *         [joinable conditions])
 *   Return: PartialJoin
 *        
 * 
 *   Create an MBQL join map from something that can conceptually be joined against. A `Table`? An MBQL or native query? A
 *   Saved Question? You should be able to join anything, and this should return a sensible MBQL join map.
 */
metabase.lib.join.join_clause = (function metabase$lib$join$join_clause(var_args){
var G__80202 = arguments.length;
switch (G__80202) {
case 1:
return metabase.lib.join.join_clause.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.join.join_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.join.join_clause.cljs$core$IFn$_invoke$arity$1 = (function (joinable){

return metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3(metabase.lib.join.join_clause_method.cljs$core$IFn$_invoke$arity$1(joinable),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"all","all",892129742));
}));

(metabase.lib.join.join_clause.cljs$core$IFn$_invoke$arity$2 = (function (joinable,conditions){

return metabase.lib.join.with_join_conditions(metabase.lib.join.join_clause.cljs$core$IFn$_invoke$arity$1(joinable),conditions);
}));

(metabase.lib.join.join_clause.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: [joinable :- PartialJoin fields :- [:maybe [:or [:enum :all :none] [:sequential some?]]]]
 *   Return: PartialJoin
 *        
 * 
 *   Update a join (or a function that will return a join) to include `:fields`, either `:all`, `:none`, or a sequence of
 *   references.
 */
metabase.lib.join.with_join_fields = (function metabase$lib$join$with_join_fields(joinable,fields){

var fields__$1 = (((fields instanceof cljs.core.Keyword))?fields:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fields,cljs.core.PersistentVector.EMPTY))?new cljs.core.Keyword(null,"none","none",1333468478):cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.ref.ref),(function (){var temp__5802__auto__ = metabase.lib.join.current_join_alias(joinable);
if(cljs.core.truth_(temp__5802__auto__)){
var current_alias = temp__5802__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__80206_SHARP_){
return metabase.lib.join.with_join_alias(p1__80206_SHARP_,current_alias);
}));
} else {
return cljs.core.identity;
}
})()),fields))
));
return metabase.util.assoc_dissoc(joinable,new cljs.core.Keyword(null,"fields","fields",-1932066230),fields__$1);
});
metabase.lib.join.select_home_column = (function metabase$lib$join$select_home_column(home_cols,cond_fields){
var cond__GT_home = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (home_col){
var temp__5804__auto__ = metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref(home_col),cond_fields);
if(cljs.core.truth_(temp__5804__auto__)){
var cond_field = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cond_field,home_col], null);
} else {
return null;
}
})),home_cols);
var cond_home_cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cond__GT_home,cond_fields);
var or__5045__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.foreign_key_QMARK_,metabase.lib.types.isa.primary_key_QMARK_),cond_home_cols);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.first(cond_home_cols);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.foreign_key_QMARK_,home_cols);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.primary_key_QMARK_,home_cols);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return cljs.core.first(home_cols);
}
}
}
}
});
metabase.lib.join.strip_id = (function metabase$lib$join$strip_id(s){
if(typeof s === 'string'){
return clojure.string.trim(clojure.string.replace(s,/ id$/i,""));
} else {
return null;
}
});
/**
 * Checks if `name0` and `name1` are similar.
 *   Two names are considered similar if they are the same, one is the plural of the other,
 *   or their plurals are equal.
 *   This is used to avoid repeating ourselves in situations like when we have a table called
 *   PRODUCTS and a field (presumably referring to that table) called PRODUCT.
 */
metabase.lib.join.similar_names_QMARK_ = (function metabase$lib$join$similar_names_QMARK_(name0,name1){
var and__5043__auto__ = typeof name0 === 'string';
if(and__5043__auto__){
var and__5043__auto____$1 = typeof name1 === 'string';
if(and__5043__auto____$1){
var plural1 = (new cljs.core.Delay((function (){
return inflections.core.plural(name1);
}),null));
var plural0 = (new cljs.core.Delay((function (){
return inflections.core.plural(name0);
}),null));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name0,name1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name0,cljs.core.deref(plural1))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(plural0),name1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(plural0),cljs.core.deref(plural1))))))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
metabase.lib.join.calculate_join_alias = (function metabase$lib$join$calculate_join_alias(query,joined,home_col){
var joined_name = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(joined),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662)))?joined:query),joined);
var home_name = (cljs.core.truth_(home_col)?metabase.lib.join.strip_id(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$2(query,home_col)):null);
var similar = metabase.lib.join.similar_names_QMARK_(joined_name,home_name);
var join_alias = (function (){var or__5045__auto__ = (function (){var and__5043__auto__ = joined_name;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = home_name;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = cljs.core.not(cljs.core.re_matches(/id/i,home_name));
if(and__5043__auto____$2){
var and__5043__auto____$3 = (!(similar));
if(and__5043__auto____$3){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(joined_name)," - ",home_name].join('');
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = joined_name;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = home_name;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return "source";
}
}
}
})();
return join_alias;
});
metabase.lib.join.add_alias_to_join_refs = (function metabase$lib$join$add_alias_to_join_refs(metadata_providerable,form,join_alias,join_refs){
return (function metabase$lib$join$add_alias_to_join_refs_$_replace_80242(_AMPERSAND_parents,_AMPERSAND_match){
try{if((function (field_clause){
return ((metabase.lib.util.field_clause_QMARK_(field_clause)) && (cljs.core.boolean$(metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$3(metadata_providerable,field_clause,join_refs))));
})(_AMPERSAND_match)){
var field = _AMPERSAND_match;
return metabase.lib.join.with_join_alias(field,join_alias);
} else {
throw cljs.core.match.backtrack;

}
}catch (e80257){if((e80257 instanceof Error)){
var e__61771__auto__ = e80257;
if((e__61771__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$lib$join$add_alias_to_join_refs_$_replace_80242,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__61771__auto__;
}
} else {
throw e80257;

}
}})(cljs.core.PersistentVector.EMPTY,form);
});
metabase.lib.join.add_alias_to_condition = (function metabase$lib$join$add_alias_to_condition(metadata_providerable,condition,join_alias,home_refs,join_refs){
var condition__$1 = metabase.lib.join.add_alias_to_join_refs(metadata_providerable,condition,join_alias,join_refs);
return (function metabase$lib$join$add_alias_to_condition_$_replace_80259(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_2__80263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(metabase.lib.util.field_clause_QMARK_(_AMPERSAND_match_2__80263)){
try{var _AMPERSAND_match_3__80264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(metabase.lib.util.field_clause_QMARK_(_AMPERSAND_match_3__80264)){
var rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
var op_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var lhs_aliased = cljs.core.contains_QMARK_(metabase.lib.options.options(lhs),new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
var rhs_aliased = cljs.core.contains_QMARK_(metabase.lib.options.options(rhs),new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
if((!(((lhs_aliased) || (rhs_aliased))))){
if(cljs.core.truth_(metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$3(metadata_providerable,rhs,home_refs))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,op_opts,metabase.lib.join.with_join_alias(lhs,join_alias),rhs], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,op_opts,lhs,metabase.lib.join.with_join_alias(rhs,join_alias)], null);
}
} else {
if(((lhs_aliased) && (rhs_aliased))){
var bare_lhs = metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(lhs,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794)], 0));
var bare_rhs = metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(rhs,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794)], 0));
if(cljs.core.truth_((function (){var and__5043__auto__ = (metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$3(metadata_providerable,bare_lhs,home_refs) == null);
if(and__5043__auto__){
return metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$3(metadata_providerable,bare_rhs,home_refs);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,op_opts,lhs,bare_rhs], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,op_opts,bare_lhs,rhs], null);
}
} else {
return _AMPERSAND_match;

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e80270){if((e80270 instanceof Error)){
var e__61771__auto__ = e80270;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e80270;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80267){if((e80267 instanceof Error)){
var e__61771__auto__ = e80267;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e80267;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80265){if((e80265 instanceof Error)){
var e__61771__auto__ = e80265;
if((e__61771__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$lib$join$add_alias_to_condition_$_replace_80259,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__61771__auto__;
}
} else {
throw e80265;

}
}})(cljs.core.PersistentVector.EMPTY,condition__$1);
});
metabase.lib.join.generate_unique_name = (function metabase$lib$join$generate_unique_name(base_name,taken_names){
var generator = metabase.lib.util.unique_name_generator();
cljs.core.run_BANG_(generator,taken_names);

return generator(base_name);
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int a-join :- JoinWithOptionalAlias]
 *   Return: :metabase.lib.schema.join/join
 *        
 * 
 *   Add a default generated `:alias` to a join clause that does not already have one.
 */
metabase.lib.join.add_default_alias = (function metabase$lib$join$add_default_alias(query,stage_number,a_join){

if(cljs.core.contains_QMARK_(a_join,new cljs.core.Keyword(null,"alias","alias",-2039751630))){
return a_join;
} else {
var stage = metabase.lib.util.query_stage(query,stage_number);
var home_cols = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
var cond_fields = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$join$add_default_alias_$_match_80292(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__80295 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__80295)) && ((cljs.core.count(_AMPERSAND_match_left__80295) === (1))))){
try{var _AMPERSAND_match_left__80295_0__80297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__80295,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__80295_0__80297,new cljs.core.Keyword(null,"field","field",-1302436500))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e80300){if((e80300 instanceof Error)){
var e__61771__auto__ = e80300;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e80300;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80299){if((e80299 instanceof Error)){
var e__61771__auto__ = e80299;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e80299;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80298){if((e80298 instanceof Error)){
var e__61771__auto__ = e80298;
if((e__61771__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$lib$join$add_default_alias_$_match_80292,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__61771__auto__;
}
} else {
throw e80298;

}
}})(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"conditions","conditions",-1647236270).cljs$core$IFn$_invoke$arity$1(a_join))));
var home_col = metabase.lib.join.select_home_column(home_cols,cond_fields);
var join_alias = metabase.lib.join.generate_unique_name(metabase.lib.join.calculate_join_alias(query,a_join,home_col),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage)));
var home_refs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,home_cols);
var join_refs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$1(metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(a_join))));
return metabase.lib.join.with_join_alias(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a_join,new cljs.core.Keyword(null,"conditions","conditions",-1647236270),(function (conditions){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__80290_SHARP_){
return metabase.lib.join.add_alias_to_condition(query,p1__80290_SHARP_,join_alias,home_refs,join_refs);
}),conditions);
})),join_alias);
}
});
/**
 * Inputs: ([query a-join]
 *         [query :- :metabase.lib.schema/query stage-number :- :int a-join :- PartialJoin])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Add a join clause to a `query`.
 */
metabase.lib.join.join = (function metabase$lib$join$join(var_args){
var G__80311 = arguments.length;
switch (G__80311) {
case 2:
return metabase.lib.join.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.join.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.join.join.cljs$core$IFn$_invoke$arity$2 = (function (query,a_join){

return metabase.lib.join.join.cljs$core$IFn$_invoke$arity$3(query,(-1),a_join);
}));

(metabase.lib.join.join.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,a_join){

var a_join__$1 = metabase.lib.join.add_default_alias(query,stage_number,a_join);
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"joins","joins",1033962699),(function (joins){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(joins),a_join__$1);
})], 0));
}));

(metabase.lib.join.join.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe :metabase.lib.schema.join/joins]
 *        
 * 
 *   Get all joins in a specific `stage` of a `query`. If `stage` is unspecified, returns joins in the final stage of the
 *   query.
 */
metabase.lib.join.joins = (function metabase$lib$join$joins(var_args){
var G__80318 = arguments.length;
switch (G__80318) {
case 1:
return metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.query_stage(query,stage_number),new cljs.core.Keyword(null,"joins","joins",1033962699)));
}));

(metabase.lib.join.joins.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: [table-name :- :metabase.lib.schema.common/non-blank-string source-field-id-name :- :metabase.lib.schema.common/non-blank-string]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Name for an implicit join against `table-name` via an FK field, e.g.
 * 
 *  CATEGORIES__via__CATEGORY_ID
 * 
 *   You should make sure this gets ran thru a unique-name fn.
 */
metabase.lib.join.implicit_join_name = (function metabase$lib$join$implicit_join_name(table_name,source_field_id_name){

return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3("%s__via__%s",table_name,source_field_id_name) : metabase.lib.util.format.call(null,"%s__via__%s",table_name,source_field_id_name));
});
/**
 * Inputs: [a-join :- PartialJoin]
 *   Return: [:maybe :metabase.lib.schema.join/conditions]
 *        
 * 
 *   Get all join conditions for the given join
 */
metabase.lib.join.join_conditions = (function metabase$lib$join$join_conditions(a_join){

return new cljs.core.Keyword(null,"conditions","conditions",-1647236270).cljs$core$IFn$_invoke$arity$1(a_join);
});
/**
 * Inputs: [a-join :- PartialJoin]
 *   Return: [:maybe :metabase.lib.schema.join/fields]
 *        
 * 
 *   Get all join conditions for the given join
 */
metabase.lib.join.join_fields = (function metabase$lib$join$join_fields(a_join){

return new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(a_join);
});
metabase.lib.join.raw_join_strategy__GT_strategy_option = (function metabase$lib$join$raw_join_strategy__GT_strategy_option(raw_strategy){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("option","join.strategy","option/join.strategy",1337097154),new cljs.core.Keyword(null,"strategy","strategy",-1471631918),raw_strategy], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_strategy,new cljs.core.Keyword(null,"left-join","left-join",-672831855)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),true], null):null)], 0));
});
/**
 * Inputs: [a-join :- PartialJoin]
 *   Return: :metabase.lib.schema.join/strategy
 *        
 * 
 *   Get the raw keyword strategy (type) of a given join, e.g. `:left-join` or `:right-join`. This is either the value
 *   of the optional `:strategy` key or the default, `:left-join`, if `:strategy` is not specified.
 */
metabase.lib.join.raw_join_strategy = (function metabase$lib$join$raw_join_strategy(a_join){

return cljs.core.get.cljs$core$IFn$_invoke$arity$3(a_join,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"left-join","left-join",-672831855));
});
/**
 * Inputs: [a-join :- PartialJoin]
 *   Return: :metabase.lib.schema.join/strategy.option
 *        
 * 
 *   Get the strategy (type) of a given join, as a `:option/join.strategy` map. If `:stategy` is unspecified, returns
 *   the default, left join.
 */
metabase.lib.join.join_strategy = (function metabase$lib$join$join_strategy(a_join){

return metabase.lib.join.raw_join_strategy__GT_strategy_option(metabase.lib.join.raw_join_strategy(a_join));
});
/**
 * Inputs: [a-join :- PartialJoin strategy :- [:or :metabase.lib.schema.join/strategy :metabase.lib.schema.join/strategy.option]]
 *   Return: PartialJoin
 *        
 * 
 *   Return a copy of `a-join` with its `:strategy` set to `strategy`.
 */
metabase.lib.join.with_join_strategy = (function metabase$lib$join$with_join_strategy(a_join,strategy){

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a_join,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),(function (){var G__80339 = strategy;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.dispatch.dispatch_value(strategy),new cljs.core.Keyword("option","join.strategy","option/join.strategy",1337097154))){
return new cljs.core.Keyword(null,"strategy","strategy",-1471631918).cljs$core$IFn$_invoke$arity$1(G__80339);
} else {
return G__80339;
}
})());
});
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query _stage-number :- :int])
 *   Return: [:sequential :metabase.lib.schema.join/strategy.option]
 *        
 * 
 *   Get available join strategies for the current Database (based on the Database's
 *   supported [[metabase.driver/driver-features]]) as raw keywords like `:left-join`.
 */
metabase.lib.join.available_join_strategies = (function metabase$lib$join$available_join_strategies(var_args){
var G__80346 = arguments.length;
switch (G__80346) {
case 1:
return metabase.lib.join.available_join_strategies.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.join.available_join_strategies.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.join.available_join_strategies.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.join.available_join_strategies.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.join.available_join_strategies.cljs$core$IFn$_invoke$arity$2 = (function (query,_stage_number){

var database = metabase.lib.metadata.database(query);
var features = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(database);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,features)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.join.raw_join_strategy__GT_strategy_option)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-join","left-join",-672831855),new cljs.core.Keyword(null,"right-join","right-join",-56349359),new cljs.core.Keyword(null,"inner-join","inner-join",659431740),new cljs.core.Keyword(null,"full-join","full-join",1305476385)], null));
}));

(metabase.lib.join.available_join_strategies.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: [columns :- [:sequential lib.metadata/ColumnMetadata]]
 *   Return: [:sequential lib.metadata/ColumnMetadata]
 *        
 * 
 *   Sort potential join condition columns as returned by [[join-condition-lhs-columns]]
 *   or [[join-condition-rhs-columns]]. PK columns are returned first, followed by FK columns, followed by other columns.
 *   Otherwise original order is maintained.
 */
metabase.lib.join.sort_join_condition_columns = (function metabase$lib$join$sort_join_condition_columns(columns){

var map__80348 = cljs.core.group_by((function (column){
if(metabase.lib.types.isa.primary_key_QMARK_(column)){
return new cljs.core.Keyword(null,"pk","pk",-771936732);
} else {
if(metabase.lib.types.isa.foreign_key_QMARK_(column)){
return new cljs.core.Keyword(null,"fk","fk",398442651);
} else {
return new cljs.core.Keyword(null,"other","other",995793544);

}
}
}),columns);
var map__80348__$1 = cljs.core.__destructure_map(map__80348);
var pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80348__$1,new cljs.core.Keyword(null,"pk","pk",-771936732));
var fk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80348__$1,new cljs.core.Keyword(null,"fk","fk",398442651));
var other = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80348__$1,new cljs.core.Keyword(null,"other","other",995793544));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(pk,fk,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([other], 0));
});
/**
 * Inputs: ([query existing-join-or-nil rhs-column-or-nil]
 *         [query :- :metabase.lib.schema/query stage-number :- :int existing-join-or-nil :- [:maybe :metabase.lib.schema.join/join] _rhs-column-or-nil :- [:maybe lib.metadata/ColumnMetadata]])
 *   Return: [:sequential lib.metadata/ColumnMetadata]
 *        
 * 
 *   Get a sequence of columns that can be used as the left-hand-side (source column) in a join condition. This column
 *   is the one that comes from the source Table/Card/previous stage of the query or a previous join.
 * 
 *   If you are changing the LHS of a condition for an existing join, pass in that existing join as
 *   `existing-join-or-nil` so we can filter out the columns added by it (it doesn't make sense to present the columns
 *   added by a join as options for its own LHS) or added by later joins (joins can only depend on things from previous
 *   joins). Otherwise pass `nil` when building a new join. See #32005 for more info.
 * 
 *   If the right-hand-side column has already been chosen (they can be chosen in any order in the Query Builder UI),
 *   pass in the chosen RHS column. In the future, this may be used to restrict results to compatible columns. (See #31174)
 * 
 *   Results will be returned in a 'somewhat smart' order with PKs and FKs returned before other columns.
 * 
 *   Unlike most other things that return columns, implicitly-joinable columns ARE NOT returned here.
 */
metabase.lib.join.join_condition_lhs_columns = (function metabase$lib$join$join_condition_lhs_columns(var_args){
var G__80352 = arguments.length;
switch (G__80352) {
case 3:
return metabase.lib.join.join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.join.join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.join.join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$3 = (function (query,existing_join_or_nil,rhs_column_or_nil){

return metabase.lib.join.join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$4(query,(-1),existing_join_or_nil,rhs_column_or_nil);
}));

(metabase.lib.join.join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$4 = (function (query,stage_number,existing_join_or_nil,_rhs_column_or_nil){

var existing_join_alias = metabase.lib.join.current_join_alias(existing_join_or_nil);
var join_aliases_to_ignore = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.join.current_join_alias),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1((function (p1__80349_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__80349_SHARP_,existing_join_alias);
}))),metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2(query,stage_number));
return metabase.lib.join.sort_join_condition_columns(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (col){
var temp__5804__auto__ = metabase.lib.join.current_join_alias(col);
if(cljs.core.truth_(temp__5804__auto__)){
var col_join_alias = temp__5804__auto__;
return cljs.core.contains_QMARK_(join_aliases_to_ignore,col_join_alias);
} else {
return null;
}
}),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(query,stage_number),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null))));
}));

(metabase.lib.join.join_condition_lhs_columns.cljs$lang$maxFixedArity = 4);

/**
 * Inputs: ([query joinable lhs-column-or-nil]
 *         [query :- :metabase.lib.schema/query stage-number :- :int joinable _lhs-column-or-nil :- [:maybe lib.metadata/ColumnMetadata]])
 *   Return: [:sequential lib.metadata/ColumnMetadata]
 *        
 * 
 *   Get a sequence of columns that can be used as the right-hand-side (target column) in a join condition. This column
 *   is the one that belongs to the thing being joined, `joinable`, which can be something like a
 *   Table ([[metabase.lib.metadata/TableMetadata]]), Saved Question/Model ([[metabase.lib.metadata/CardMetadata]]),
 *   another query, etc. -- anything you can pass to [[join-clause]].
 * 
 *   If the lhs-hand-side column has already been chosen (they can be chosen in any order in the Query Builder UI),
 *   pass in the chosen LHS column. In the future, this may be used to restrict results to compatible columns. (See #31174)
 * 
 *   Results will be returned in a 'somewhat smart' order with PKs and FKs returned before other columns.
 */
metabase.lib.join.join_condition_rhs_columns = (function metabase$lib$join$join_condition_rhs_columns(var_args){
var G__80355 = arguments.length;
switch (G__80355) {
case 3:
return metabase.lib.join.join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.join.join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.join.join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$3 = (function (query,joinable,lhs_column_or_nil){

return metabase.lib.join.join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$4(query,(-1),joinable,lhs_column_or_nil);
}));

(metabase.lib.join.join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$4 = (function (query,stage_number,joinable,_lhs_column_or_nil){

return metabase.lib.join.sort_join_condition_columns(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,joinable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null)));
}));

(metabase.lib.join.join_condition_rhs_columns.cljs$lang$maxFixedArity = 4);

/**
 * Inputs: ([query lhs-column-or-nil rhs-column-or-nil]
 *         [_query :- :metabase.lib.schema/query _stage-number :- :int _lhs-column-or-nil :- [:maybe lib.metadata/ColumnMetadata] _rhs-column-or-nil :- [:maybe lib.metadata/ColumnMetadata]])
 *   Return: [:sequential :metabase.lib.schema.filter/operator]
 *        
 * 
 *   Return a sequence of valid filter clause operators that can be used to build a join condition. In the Query Builder
 *   UI, this can be chosen at any point before or after choosing the LHS and RHS. Invalid options are not currently
 *   filtered out based on values of the LHS or RHS, but in the future we can add this -- see #31174.
 */
metabase.lib.join.join_condition_operators = (function metabase$lib$join$join_condition_operators(var_args){
var G__80358 = arguments.length;
switch (G__80358) {
case 3:
return metabase.lib.join.join_condition_operators.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.join.join_condition_operators.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.join.join_condition_operators.cljs$core$IFn$_invoke$arity$3 = (function (query,lhs_column_or_nil,rhs_column_or_nil){

return metabase.lib.join.join_condition_operators.cljs$core$IFn$_invoke$arity$4(query,(-1),lhs_column_or_nil,rhs_column_or_nil);
}));

(metabase.lib.join.join_condition_operators.cljs$core$IFn$_invoke$arity$4 = (function (_query,_stage_number,_lhs_column_or_nil,_rhs_column_or_nil){

return metabase.lib.filter.operator.join_operators;
}));

(metabase.lib.join.join_condition_operators.cljs$lang$maxFixedArity = 4);

/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int x]
 *   Return: [:maybe lib.metadata/ColumnMetadata]
 *        
 * 
 *   Given something `x` (e.g. a Table metadata) find the PK column.
 */
metabase.lib.join.pk_column = (function metabase$lib$join$pk_column(query,stage_number,x){

return medley.core.find_first.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.primary_key_QMARK_,metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,x));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int pk-col :- [:maybe lib.metadata/ColumnMetadata]]
 *   Return: [:maybe lib.metadata/ColumnMetadata]
 *        
 * 
 *   Given a query stage find an FK column that points to the PK `pk-col`.
 */
metabase.lib.join.fk_column_for = (function metabase$lib$join$fk_column_for(query,stage_number,pk_col){

var temp__5804__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pk_col);
if(cljs.core.truth_(temp__5804__auto__)){
var pk_id = temp__5804__auto__;
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p__80363){
var map__80364 = p__80363;
var map__80364__$1 = cljs.core.__destructure_map(map__80364);
var col = map__80364__$1;
var fk_target_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80364__$1,new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287));
return ((metabase.lib.types.isa.foreign_key_QMARK_(col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fk_target_field_id,pk_id)));
}),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.util.query_stage(query,stage_number)));
} else {
return null;
}
});
/**
 * Inputs: ([query joinable]
 *         [query :- :metabase.lib.schema/query stage-number :- :int joinable])
 *   Return: [:maybe :metabase.lib.schema.expression/boolean]
 *        
 * 
 *   Return a suggested default join condition when constructing a join against `joinable`, e.g. a Table, Saved
 *   Question, or another query. A suggested condition will be returned if the query stage has a foreign key to the
 *   primary key of the thing we're joining (see #31175 for more info); otherwise this will return `nil` if no default
 *   condition is suggested.
 */
metabase.lib.join.suggested_join_condition = (function metabase$lib$join$suggested_join_condition(var_args){
var G__80373 = arguments.length;
switch (G__80373) {
case 2:
return metabase.lib.join.suggested_join_condition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.join.suggested_join_condition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.join.suggested_join_condition.cljs$core$IFn$_invoke$arity$2 = (function (query,joinable){

return metabase.lib.join.suggested_join_condition.cljs$core$IFn$_invoke$arity$3(query,(-1),joinable);
}));

(metabase.lib.join.suggested_join_condition.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,joinable){

var temp__5804__auto__ = metabase.lib.join.pk_column(query,stage_number,joinable);
if(cljs.core.truth_(temp__5804__auto__)){
var pk_col = temp__5804__auto__;
var temp__5804__auto____$1 = metabase.lib.join.fk_column_for(query,stage_number,pk_col);
if(cljs.core.truth_(temp__5804__auto____$1)){
var fk_col = temp__5804__auto____$1;
return metabase.lib.filter.filter_clause.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),fk_col,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pk_col], 0));
} else {
return null;
}
} else {
return null;
}
}));

(metabase.lib.join.suggested_join_condition.cljs$lang$maxFixedArity = 3);

metabase.lib.join.Joinable = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),metabase.lib.metadata.TableMetadata,metabase.lib.metadata.CardMetadata], null);
/**
 * Inputs: [metadata-providerable :- lib.metadata/MetadataProviderable a-join :- :metabase.lib.schema.join/join]
 *   Return: [:maybe Joinable]
 *        
 * 
 *   Return metadata about the origin of `a-join` using `metadata-providerable` as the source of information.
 */
metabase.lib.join.joined_thing = (function metabase$lib$join$joined_thing(metadata_providerable,a_join){

var origin = cljs.core.first(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(a_join));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(origin))){
return metabase.lib.metadata.card(metadata_providerable,new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(origin));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(origin))){
return metabase.lib.metadata.table(metadata_providerable,new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(origin));
} else {
return null;
}
}
});
metabase.lib.join.add_join_alias_to_joinable_columns = (function metabase$lib$join$add_join_alias_to_joinable_columns(cols,a_join){
var join_alias = metabase.lib.join.current_join_alias(a_join);
var unique_name_fn = metabase.lib.util.unique_name_generator();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
var col__$1 = col;
var col__$2 = metabase.lib.join.with_join_alias(col__$1,join_alias);
return metabase.lib.join.add_source_and_desired_aliases(a_join,unique_name_fn,col__$2);
}),cols);
});
/**
 * Mark the column metadatas in `cols` as `:selected` if they appear in `a-join`'s `:fields`.
 */
metabase.lib.join.mark_selected_joinable_columns = (function metabase$lib$join$mark_selected_joinable_columns(cols,a_join){
var j_fields = metabase.lib.join.join_fields(a_join);
var G__80389 = j_fields;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),G__80389)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__80385_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80385_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
}),cols);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),G__80389)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__80386_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80386_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
}),cols);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__80389)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__80386_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80386_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
}),cols);
} else {
var selected_fields_refs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,j_fields);
var cols__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,new cljs.core.Keyword("metabase.lib.join","ref","metabase.lib.join/ref",950805898),metabase.lib.ref.ref(col));
}),cols);
var all_source_refs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.join","ref","metabase.lib.join/ref",950805898),cols__$1);
var selected_source_refs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__80387_SHARP_){
return metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$2(p1__80387_SHARP_,all_source_refs);
})),selected_fields_refs);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.contains_QMARK_(selected_source_refs,new cljs.core.Keyword("metabase.lib.join","ref","metabase.lib.join/ref",950805898).cljs$core$IFn$_invoke$arity$1(col))),new cljs.core.Keyword("metabase.lib.join","ref","metabase.lib.join/ref",950805898));
}),cols__$1);

}
}
}
});
metabase.lib.join.JoinOrJoinable = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.join","join","metabase.lib.schema.join/join",1110197236)], null),metabase.lib.join.Joinable], null);
metabase.lib.join.join_QMARK_ = (function metabase$lib$join$join_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.dispatch.dispatch_value(x),new cljs.core.Keyword("mbql","join","mbql/join",-709512370));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int join-or-joinable :- JoinOrJoinable]
 *   Return: [:sequential lib.metadata/ColumnMetadata]
 *        
 * 
 *   Return information about the fields that you can pass to [[with-join-fields]] when constructing a join against
 *   something [[Joinable]] (i.e., a Table or Card) or manipulating an existing join. When passing in a join, currently
 *   selected columns (those in the join's `:fields`) will include `:selected true` information.
 */
metabase.lib.join.joinable_columns = (function metabase$lib$join$joinable_columns(query,stage_number,join_or_joinable){

var a_join = ((metabase.lib.join.join_QMARK_(join_or_joinable))?join_or_joinable:null);
var source = (cljs.core.truth_(a_join)?metabase.lib.join.joined_thing(query,join_or_joinable):join_or_joinable);
var cols = metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,source);
var G__80396 = cols;
var G__80396__$1 = (cljs.core.truth_(a_join)?metabase.lib.join.add_join_alias_to_joinable_columns(G__80396,a_join):G__80396);
if(cljs.core.truth_(a_join)){
return metabase.lib.join.mark_selected_joinable_columns(G__80396__$1,a_join);
} else {
return G__80396__$1;
}
});
/**
 * Whether a `join-or-joinable` is (or will be) the first join in a stage of a query.
 * 
 *   If a join is passed, we need to check whether it's the first join in the first stage of a source-table query or
 *   not.
 * 
 *   New joins get appended after any existing ones, so it would be safe to assume that if there are any other joins in
 *   the current stage, this **will not** be the first join in the stage.
 */
metabase.lib.join.first_join_QMARK_ = (function metabase$lib$join$first_join_QMARK_(query,stage_number,join_or_joinable){
var existing_joins = metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2(query,stage_number);
var or__5045__auto__ = cljs.core.empty_QMARK_(existing_joins);
if(or__5045__auto__){
return or__5045__auto__;
} else {
if(metabase.lib.join.join_QMARK_(join_or_joinable)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join_or_joinable),new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.first(existing_joins)));
} else {
return null;
}
}
});
/**
 * Inputs: ([query join-or-joinable]
 *         [query :- :metabase.lib.schema/query stage-number :- :int join-or-joinable :- [:maybe JoinOrJoinable]])
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Get the display name for whatever we are joining. See #32015 for screenshot examples.
 * 
 *   The rules, copied from MLv1, are as follows:
 * 
 *   1. If this is the first join in the first stage of a query, and the query uses a `:source-table`, then use the
 *   display name for the source Table.
 * 
 *   2. Otherwise use `Previous results`.
 * 
 *   These rules do seem a little goofy -- why don't we use the name of a Saved Question or Model? But we can worry about
 *   that in the future. For now, let's just replicate MLv1 behavior.
 * 
 *   This function needs to be usable while we are in the process of constructing a join in the context of a given stage,
 *   but also needs to work for rendering existing joins. Pass a join in for existing joins, or something [[Joinable]]
 *   for ones we are currently building.
 */
metabase.lib.join.join_lhs_display_name = (function metabase$lib$join$join_lhs_display_name(var_args){
var G__80413 = arguments.length;
switch (G__80413) {
case 2:
return metabase.lib.join.join_lhs_display_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.join.join_lhs_display_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.join.join_lhs_display_name.cljs$core$IFn$_invoke$arity$2 = (function (query,join_or_joinable){

return metabase.lib.join.join_lhs_display_name.cljs$core$IFn$_invoke$arity$3(query,(-1),join_or_joinable);
}));

(metabase.lib.join.join_lhs_display_name.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,join_or_joinable){

if(cljs.core.truth_((function (){var and__5043__auto__ = (metabase.lib.util.canonical_stage_index(query,stage_number) === (0));
if(and__5043__auto__){
var and__5043__auto____$1 = metabase.lib.join.first_join_QMARK_(query,stage_number,join_or_joinable);
if(cljs.core.truth_(and__5043__auto____$1)){
return metabase.lib.util.source_table_id(query);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var table_id = metabase.lib.util.source_table_id(query);
var table = metabase.lib.metadata.table(query,table_id);
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,table);
} else {
return metabase.shared.util.i18n.js_i18n("Previous results");
}
}));

(metabase.lib.join.join_lhs_display_name.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "join_clause_method", { enumerable: false, get: function() { return metabase.lib.join.join_clause_method; } });
Object.defineProperty(module.exports, "current_join_alias", { enumerable: false, get: function() { return metabase.lib.join.current_join_alias; } });
Object.defineProperty(module.exports, "all_joins_expected_columns", { enumerable: false, get: function() { return metabase.lib.join.all_joins_expected_columns; } });
Object.defineProperty(module.exports, "all_joins_visible_columns", { enumerable: false, get: function() { return metabase.lib.join.all_joins_visible_columns; } });
Object.defineProperty(module.exports, "join_fields", { enumerable: false, get: function() { return metabase.lib.join.join_fields; } });
Object.defineProperty(module.exports, "join_conditions", { enumerable: false, get: function() { return metabase.lib.join.join_conditions; } });
Object.defineProperty(module.exports, "column_from_join_fields", { enumerable: false, get: function() { return metabase.lib.join.column_from_join_fields; } });
Object.defineProperty(module.exports, "calculate_join_alias", { enumerable: false, get: function() { return metabase.lib.join.calculate_join_alias; } });
Object.defineProperty(module.exports, "with_join_alias_update_join_fields", { enumerable: false, get: function() { return metabase.lib.join.with_join_alias_update_join_fields; } });
Object.defineProperty(module.exports, "generate_unique_name", { enumerable: false, get: function() { return metabase.lib.join.generate_unique_name; } });
Object.defineProperty(module.exports, "suggested_join_condition", { enumerable: false, get: function() { return metabase.lib.join.suggested_join_condition; } });
Object.defineProperty(module.exports, "join_lhs_display_name", { enumerable: false, get: function() { return metabase.lib.join.join_lhs_display_name; } });
Object.defineProperty(module.exports, "fk_column_for", { enumerable: false, get: function() { return metabase.lib.join.fk_column_for; } });
Object.defineProperty(module.exports, "join", { enumerable: false, get: function() { return metabase.lib.join.join; } });
Object.defineProperty(module.exports, "similar_names_QMARK_", { enumerable: false, get: function() { return metabase.lib.join.similar_names_QMARK_; } });
Object.defineProperty(module.exports, "with_join_conditions", { enumerable: false, get: function() { return metabase.lib.join.with_join_conditions; } });
Object.defineProperty(module.exports, "mark_selected_joinable_columns", { enumerable: false, get: function() { return metabase.lib.join.mark_selected_joinable_columns; } });
Object.defineProperty(module.exports, "join_clause", { enumerable: false, get: function() { return metabase.lib.join.join_clause; } });
Object.defineProperty(module.exports, "raw_join_strategy", { enumerable: false, get: function() { return metabase.lib.join.raw_join_strategy; } });
Object.defineProperty(module.exports, "joined_field_desired_alias", { enumerable: false, get: function() { return metabase.lib.join.joined_field_desired_alias; } });
Object.defineProperty(module.exports, "add_source_and_desired_aliases", { enumerable: false, get: function() { return metabase.lib.join.add_source_and_desired_aliases; } });
Object.defineProperty(module.exports, "with_join_alias_update_join", { enumerable: false, get: function() { return metabase.lib.join.with_join_alias_update_join; } });
Object.defineProperty(module.exports, "PartialJoin", { enumerable: false, get: function() { return metabase.lib.join.PartialJoin; } });
Object.defineProperty(module.exports, "FieldOrPartialJoin", { enumerable: false, get: function() { return metabase.lib.join.FieldOrPartialJoin; } });
Object.defineProperty(module.exports, "with_join_fields", { enumerable: false, get: function() { return metabase.lib.join.with_join_fields; } });
Object.defineProperty(module.exports, "JoinOrJoinable", { enumerable: false, get: function() { return metabase.lib.join.JoinOrJoinable; } });
Object.defineProperty(module.exports, "JoinWithOptionalAlias", { enumerable: false, get: function() { return metabase.lib.join.JoinWithOptionalAlias; } });
Object.defineProperty(module.exports, "add_alias_to_condition", { enumerable: false, get: function() { return metabase.lib.join.add_alias_to_condition; } });
Object.defineProperty(module.exports, "join_condition_rhs_columns", { enumerable: false, get: function() { return metabase.lib.join.join_condition_rhs_columns; } });
Object.defineProperty(module.exports, "join_condition_lhs_columns", { enumerable: false, get: function() { return metabase.lib.join.join_condition_lhs_columns; } });
Object.defineProperty(module.exports, "add_alias_to_join_refs", { enumerable: false, get: function() { return metabase.lib.join.add_alias_to_join_refs; } });
Object.defineProperty(module.exports, "pk_column", { enumerable: false, get: function() { return metabase.lib.join.pk_column; } });
Object.defineProperty(module.exports, "select_home_column", { enumerable: false, get: function() { return metabase.lib.join.select_home_column; } });
Object.defineProperty(module.exports, "resolve_join", { enumerable: false, get: function() { return metabase.lib.join.resolve_join; } });
Object.defineProperty(module.exports, "joinable_columns", { enumerable: false, get: function() { return metabase.lib.join.joinable_columns; } });
Object.defineProperty(module.exports, "raw_join_strategy__GT_strategy_option", { enumerable: false, get: function() { return metabase.lib.join.raw_join_strategy__GT_strategy_option; } });
Object.defineProperty(module.exports, "joins", { enumerable: false, get: function() { return metabase.lib.join.joins; } });
Object.defineProperty(module.exports, "available_join_strategies", { enumerable: false, get: function() { return metabase.lib.join.available_join_strategies; } });
Object.defineProperty(module.exports, "first_join_QMARK_", { enumerable: false, get: function() { return metabase.lib.join.first_join_QMARK_; } });
Object.defineProperty(module.exports, "Joinable", { enumerable: false, get: function() { return metabase.lib.join.Joinable; } });
Object.defineProperty(module.exports, "join_strategy", { enumerable: false, get: function() { return metabase.lib.join.join_strategy; } });
Object.defineProperty(module.exports, "with_join_alias_update_join_conditions", { enumerable: false, get: function() { return metabase.lib.join.with_join_alias_update_join_conditions; } });
Object.defineProperty(module.exports, "standard_join_condition_rhs", { enumerable: false, get: function() { return metabase.lib.join.standard_join_condition_rhs; } });
Object.defineProperty(module.exports, "add_join_alias_to_joinable_columns", { enumerable: false, get: function() { return metabase.lib.join.add_join_alias_to_joinable_columns; } });
Object.defineProperty(module.exports, "with_join_conditions_add_alias_to_rhses", { enumerable: false, get: function() { return metabase.lib.join.with_join_conditions_add_alias_to_rhses; } });
Object.defineProperty(module.exports, "join_condition_operators", { enumerable: false, get: function() { return metabase.lib.join.join_condition_operators; } });
Object.defineProperty(module.exports, "implicit_join_name", { enumerable: false, get: function() { return metabase.lib.join.implicit_join_name; } });
Object.defineProperty(module.exports, "strip_id", { enumerable: false, get: function() { return metabase.lib.join.strip_id; } });
Object.defineProperty(module.exports, "join_QMARK_", { enumerable: false, get: function() { return metabase.lib.join.join_QMARK_; } });
Object.defineProperty(module.exports, "with_join_alias", { enumerable: false, get: function() { return metabase.lib.join.with_join_alias; } });
Object.defineProperty(module.exports, "standard_join_condition_QMARK_", { enumerable: false, get: function() { return metabase.lib.join.standard_join_condition_QMARK_; } });
Object.defineProperty(module.exports, "standard_join_condition_update_rhs", { enumerable: false, get: function() { return metabase.lib.join.standard_join_condition_update_rhs; } });
Object.defineProperty(module.exports, "with_join_strategy", { enumerable: false, get: function() { return metabase.lib.join.with_join_strategy; } });
Object.defineProperty(module.exports, "joined_thing", { enumerable: false, get: function() { return metabase.lib.join.joined_thing; } });
Object.defineProperty(module.exports, "sort_join_condition_columns", { enumerable: false, get: function() { return metabase.lib.join.sort_join_condition_columns; } });
Object.defineProperty(module.exports, "add_default_alias", { enumerable: false, get: function() { return metabase.lib.join.add_default_alias; } });
//# sourceMappingURL=metabase.lib.join.js.map
