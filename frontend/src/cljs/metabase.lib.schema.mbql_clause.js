var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.types.js");
require("./metabase.util.malli.js");
require("./metabase.util.malli.registry.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.mbql_clause.js");

goog.provide('metabase.lib.schema.mbql_clause');
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.schema !== 'undefined') && (typeof metabase.lib.schema.mbql_clause !== 'undefined') && (typeof metabase.lib.schema.mbql_clause.tag_registry !== 'undefined')){
} else {
/**
 * Set of all registered MBQL clause tags e.g. #{:starts-with}
 */
metabase.lib.schema.mbql_clause.tag_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
/**
 * Build the schema for `::tag`, for a valid MBQL clause tag.
 */
metabase.lib.schema.mbql_clause.tag_schema = (function metabase$lib$schema$mbql_clause$tag_schema(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432)], null),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(metabase.lib.schema.mbql_clause.tag_registry)));
});
metabase.lib.schema.mbql_clause.update_tag_schema_BANG_ = (function metabase$lib$schema$mbql_clause$update_tag_schema_BANG_(){
return metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.mbql-clause","tag","metabase.lib.schema.mbql-clause/tag",-405459143),metabase.lib.schema.mbql_clause.tag_schema());
});
/**
 * Given an MBQL clause tag like `:starts-with`, return the name of the schema we'll register for it, e.g.
 *   `:mbql.clause/starts-with`.
 */
metabase.lib.schema.mbql_clause.tag__GT_registered_schema_name = (function metabase$lib$schema$mbql_clause$tag__GT_registered_schema_name(tag){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("mbql.clause",cljs.core.name(tag));
});
/**
 * Build the schema for `::clause*`, a `:multi` schema that maps MBQL clause tag -> the schema
 *   in [[clause-schema-registry]].
 */
metabase.lib.schema.mbql_clause.clause_STAR__schema = (function metabase$lib$schema$mbql_clause$clause_STAR__schema(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.first,new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__59968,_){
var map__59969 = p__59968;
var map__59969__$1 = cljs.core.__destructure_map(map__59969);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59969__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.vector_QMARK_(value)){
return ["Invalid ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(value)], 0))," clause: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
} else {
return "not an MBQL clause";
}
})], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (tag){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),metabase.lib.schema.mbql_clause.tag__GT_registered_schema_name(tag)], null)], null);
})),cljs.core.deref(metabase.lib.schema.mbql_clause.tag_registry));
});
metabase.lib.schema.mbql_clause.update_clause_schema_BANG_ = (function metabase$lib$schema$mbql_clause$update_clause_schema_BANG_(){
return metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.mbql-clause","clause*","metabase.lib.schema.mbql-clause/clause*",1127493678),metabase.lib.schema.mbql_clause.clause_STAR__schema());
});
cljs.core.add_watch(metabase.lib.schema.mbql_clause.tag_registry,new cljs.core.Keyword("metabase.lib.schema.mbql-clause","update-schemas","metabase.lib.schema.mbql-clause/update-schemas",-447263953),(function (_key,_ref,_old_state,_new_state){
metabase.lib.schema.mbql_clause.update_tag_schema_BANG_();

return metabase.lib.schema.mbql_clause.update_clause_schema_BANG_();
}));
metabase.lib.schema.mbql_clause.update_tag_schema_BANG_();
metabase.lib.schema.mbql_clause.update_clause_schema_BANG_();
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.mbql-clause","clause","metabase.lib.schema.mbql-clause/clause",955279388),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.mbql-clause","tag","metabase.lib.schema.mbql-clause/tag",-405459143)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.any_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.mbql-clause","clause*","metabase.lib.schema.mbql-clause/clause*",1127493678)], null)], null));
/**
 * Inputs: ([tag :- simple-keyword? schema]
 *         [tag :- simple-keyword? _arrow :- [:= :-] return-type :- :metabase.lib.schema.expression/base-type schema])
 *   Return: :any
 *        
 * 
 *   Register the `schema` for an MBQL clause with `tag` keyword, and update the `:metabase.lib.schema.mbql-clause/clause`
 *   so it knows about this clause. Optionally specify the [[expression/type-of]] that this clause returns, inline, if
 *   the clause always returns a certain type; otherwise you can implement [[expression/type-of]] separately.
 * 
 *   (define-mbql-clause :is-null :- :type/Boolean
 *  [:tuple
 *   [:= :is-null]
 *   ::common/options
 *   [:ref :metabase.lib.schema.expression/expression]])
 */
metabase.lib.schema.mbql_clause.define_mbql_clause = (function metabase$lib$schema$mbql_clause$define_mbql_clause(var_args){
var G__59979 = arguments.length;
switch (G__59979) {
case 2:
return metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2 = (function (tag,schema__$1){

var schema_name_60014 = metabase.lib.schema.mbql_clause.tag__GT_registered_schema_name(tag);
metabase.util.malli.registry.register_BANG_(schema_name_60014,schema__$1);

if(cljs.core.contains_QMARK_(cljs.core.deref(metabase.lib.schema.mbql_clause.tag_registry),tag)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(metabase.lib.schema.mbql_clause.tag_registry,cljs.core.conj,tag);
}

return null;
}));

(metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$4 = (function (tag,_arrow,return_type,schema__$1){

metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(tag,schema__$1);

metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,tag,(function (_clause){
return return_type;
}));

return null;
}));

(metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$lang$maxFixedArity = 4);

/**
 * Helper intended for use with [[define-mbql-clause]]. Create an MBQL clause schema with `:catn`. Use this for clauses
 *   with variable length. For clauses with fixed argument length, use [[tuple-clause-schema]] instead, since that gives
 *   slight better error messages and doesn't love to complain about 'potentially recursive seqexes' when you forget to
 *   wrap args in `:schema`.
 */
metabase.lib.schema.mbql_clause.catn_clause_schema = (function metabase$lib$schema$mbql_clause$catn_clause_schema(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60016 = arguments.length;
var i__5770__auto___60017 = (0);
while(true){
if((i__5770__auto___60017 < len__5769__auto___60016)){
args__5775__auto__.push((arguments[i__5770__auto___60017]));

var G__60018 = (i__5770__auto___60017 + (1));
i__5770__auto___60017 = G__60018;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.lib.schema.mbql_clause.catn_clause_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.lib.schema.mbql_clause.catn_clause_schema.cljs$core$IFn$_invoke$arity$variadic = (function (tag,args){
if(cljs.core.simple_keyword_QMARK_(tag)){
} else {
throw (new Error("Assert failed: (simple-keyword? tag)"));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,args)){
} else {
throw (new Error("Assert failed: (every? vector? args)"));
}

if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,args))){
} else {
throw (new Error("Assert failed: (every? keyword? (map first args))"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),["Valid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," clause"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),tag], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null)], null)], null),args)], null);
}));

(metabase.lib.schema.mbql_clause.catn_clause_schema.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.lib.schema.mbql_clause.catn_clause_schema.cljs$lang$applyTo = (function (seq59980){
var G__59981 = cljs.core.first(seq59980);
var seq59980__$1 = cljs.core.next(seq59980);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59981,seq59980__$1);
}));

/**
 * Helper intended for use with [[define-mbql-clause]]. Create a clause schema with `:tuple`. Use this for fixed-length
 *   MBQL clause schemas. Use [[catn-clause-schema]] for variable-length schemas.
 */
metabase.lib.schema.mbql_clause.tuple_clause_schema = (function metabase$lib$schema$mbql_clause$tuple_clause_schema(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60027 = arguments.length;
var i__5770__auto___60028 = (0);
while(true){
if((i__5770__auto___60028 < len__5769__auto___60027)){
args__5775__auto__.push((arguments[i__5770__auto___60028]));

var G__60029 = (i__5770__auto___60028 + (1));
i__5770__auto___60028 = G__60029;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.lib.schema.mbql_clause.tuple_clause_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.lib.schema.mbql_clause.tuple_clause_schema.cljs$core$IFn$_invoke$arity$variadic = (function (tag,args){
if(cljs.core.simple_keyword_QMARK_(tag)){
} else {
throw (new Error("Assert failed: (simple-keyword? tag)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),["Valid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," clause"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null),args);
}));

(metabase.lib.schema.mbql_clause.tuple_clause_schema.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.lib.schema.mbql_clause.tuple_clause_schema.cljs$lang$applyTo = (function (seq59994){
var G__59995 = cljs.core.first(seq59994);
var seq59994__$1 = cljs.core.next(seq59994);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59995,seq59994__$1);
}));

metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn = (function metabase$lib$schema$mbql_clause$define_mbql_clause_with_schema_fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60030 = arguments.length;
var i__5770__auto___60031 = (0);
while(true){
if((i__5770__auto___60031 < len__5769__auto___60030)){
args__5775__auto__.push((arguments[i__5770__auto___60031]));

var G__60032 = (i__5770__auto___60031 + (1));
i__5770__auto___60031 = G__60032;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn.cljs$core$IFn$_invoke$arity$variadic = (function (schema_fn,tag,args){
var vec__60005 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(args),new cljs.core.Keyword(null,"-","-",-2112348439)))?cljs.core.cons(cljs.core.second(args),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),args)):cljs.core.cons(null,args));
var seq__60006 = cljs.core.seq(vec__60005);
var first__60007 = cljs.core.first(seq__60006);
var seq__60006__$1 = cljs.core.next(seq__60006);
var return_type = first__60007;
var args__$1 = seq__60006__$1;
var schema__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(schema_fn,tag,args__$1);
if(cljs.core.truth_(return_type)){
return metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$4(tag,new cljs.core.Keyword(null,"-","-",-2112348439),return_type,schema__$1);
} else {
return metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(tag,schema__$1);
}
}));

(metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn.cljs$lang$applyTo = (function (seq60002){
var G__60003 = cljs.core.first(seq60002);
var seq60002__$1 = cljs.core.next(seq60002);
var G__60004 = cljs.core.first(seq60002__$1);
var seq60002__$2 = cljs.core.next(seq60002__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60003,G__60004,seq60002__$2);
}));

/**
 * Helper. Combines [[define-mbql-clause]] and [[tuple-clause-schema]].
 */
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause = (function metabase$lib$schema$mbql_clause$define_tuple_mbql_clause(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60033 = arguments.length;
var i__5770__auto___60034 = (0);
while(true){
if((i__5770__auto___60034 < len__5769__auto___60033)){
args__5775__auto__.push((arguments[i__5770__auto___60034]));

var G__60035 = (i__5770__auto___60034 + (1));
i__5770__auto___60034 = G__60035;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic = (function (tag,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn,metabase.lib.schema.mbql_clause.tuple_clause_schema,tag,args);
}));

(metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$lang$applyTo = (function (seq60008){
var G__60009 = cljs.core.first(seq60008);
var seq60008__$1 = cljs.core.next(seq60008);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60009,seq60008__$1);
}));

/**
 * Helper. Combines [[define-mbql-clause]] and [[catn-clause-schema]].
 */
metabase.lib.schema.mbql_clause.define_catn_mbql_clause = (function metabase$lib$schema$mbql_clause$define_catn_mbql_clause(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60036 = arguments.length;
var i__5770__auto___60037 = (0);
while(true){
if((i__5770__auto___60037 < len__5769__auto___60036)){
args__5775__auto__.push((arguments[i__5770__auto___60037]));

var G__60038 = (i__5770__auto___60037 + (1));
i__5770__auto___60037 = G__60038;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic = (function (tag,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn,metabase.lib.schema.mbql_clause.catn_clause_schema,tag,args);
}));

(metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$lang$applyTo = (function (seq60011){
var G__60012 = cljs.core.first(seq60011);
var seq60011__$1 = cljs.core.next(seq60011);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60012,seq60011__$1);
}));

/**
 * For REPL/test usage: get the definition of the schema associated with an MBQL clause tag.
 */
metabase.lib.schema.mbql_clause.resolve_schema = (function metabase$lib$schema$mbql_clause$resolve_schema(tag){
return metabase.util.malli.registry.resolve_schema(metabase.lib.schema.mbql_clause.tag__GT_registered_schema_name(tag));
});
Object.defineProperty(module.exports, "define_catn_mbql_clause", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.define_catn_mbql_clause; } });
Object.defineProperty(module.exports, "update_clause_schema_BANG_", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.update_clause_schema_BANG_; } });
Object.defineProperty(module.exports, "clause_STAR__schema", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.clause_STAR__schema; } });
Object.defineProperty(module.exports, "define_mbql_clause_with_schema_fn", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn; } });
Object.defineProperty(module.exports, "define_mbql_clause", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.define_mbql_clause; } });
Object.defineProperty(module.exports, "define_tuple_mbql_clause", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.define_tuple_mbql_clause; } });
Object.defineProperty(module.exports, "tag__GT_registered_schema_name", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.tag__GT_registered_schema_name; } });
Object.defineProperty(module.exports, "resolve_schema", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.resolve_schema; } });
Object.defineProperty(module.exports, "tuple_clause_schema", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.tuple_clause_schema; } });
Object.defineProperty(module.exports, "update_tag_schema_BANG_", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.update_tag_schema_BANG_; } });
Object.defineProperty(module.exports, "catn_clause_schema", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.catn_clause_schema; } });
Object.defineProperty(module.exports, "tag_schema", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.tag_schema; } });
Object.defineProperty(module.exports, "tag_registry", { enumerable: false, get: function() { return metabase.lib.schema.mbql_clause.tag_registry; } });
//# sourceMappingURL=metabase.lib.schema.mbql_clause.js.map
