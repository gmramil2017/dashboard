var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.types.js");
require("./schema.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.mbql.schema.helpers.js");

goog.provide('metabase.mbql.schema.helpers');
metabase.mbql.schema.helpers.clause_arg_schema = (function metabase$mbql$schema$helpers$clause_arg_schema(arg_name,arg_schema){
if((!(cljs.core.vector_QMARK_(arg_schema)))){
return schema.core.one(arg_schema,arg_name);
} else {
var vec__60777 = arg_schema;
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60777,(0),null);
var arg_schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60777,(1),null);
var vector_arg_schema = vec__60777;
var G__60780 = option;
var G__60780__$1 = (((G__60780 instanceof cljs.core.Keyword))?G__60780.fqn:null);
switch (G__60780__$1) {
case "optional":
return schema.core.optional(schema.core.maybe(arg_schema__$1),arg_name);

break;
case "rest":
return schema.core.named(arg_schema__$1,arg_name);

break;
default:
return schema.core.one(vector_arg_schema,arg_name);

}
}
});
/**
 * Impl of `defclause` macro.
 */
metabase.mbql.schema.helpers.clause = (function metabase$mbql$schema$helpers$clause(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60864 = arguments.length;
var i__5770__auto___60865 = (0);
while(true){
if((i__5770__auto___60865 < len__5769__auto___60864)){
args__5775__auto__.push((arguments[i__5770__auto___60865]));

var G__60866 = (i__5770__auto___60865 + (1));
i__5770__auto___60865 = G__60866;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.mbql.schema.helpers.clause.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.mbql.schema.helpers.clause.cljs$core$IFn$_invoke$arity$variadic = (function (clause_name,arg_schemas){
return cljs.core.vec(cljs.core.cons(schema.core.one(schema.core.eq(clause_name),clause_name),(function (){var iter__5523__auto__ = (function metabase$mbql$schema$helpers$iter__60783(s__60784){
return (new cljs.core.LazySeq(null,(function (){
var s__60784__$1 = s__60784;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60784__$1);
if(temp__5804__auto__){
var s__60784__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60784__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60784__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60786 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60785 = (0);
while(true){
if((i__60785 < size__5522__auto__)){
var vec__60787 = cljs.core._nth(c__5521__auto__,i__60785);
var arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60787,(0),null);
var arg_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60787,(1),null);
cljs.core.chunk_append(b__60786,metabase.mbql.schema.helpers.clause_arg_schema(arg_name,arg_schema));

var G__60868 = (i__60785 + (1));
i__60785 = G__60868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60786),metabase$mbql$schema$helpers$iter__60783(cljs.core.chunk_rest(s__60784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60786),null);
}
} else {
var vec__60790 = cljs.core.first(s__60784__$2);
var arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60790,(0),null);
var arg_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60790,(1),null);
return cljs.core.cons(metabase.mbql.schema.helpers.clause_arg_schema(arg_name,arg_schema),metabase$mbql$schema$helpers$iter__60783(cljs.core.rest(s__60784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_schemas));
})()));
}));

(metabase.mbql.schema.helpers.clause.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.mbql.schema.helpers.clause.cljs$lang$applyTo = (function (seq60781){
var G__60782 = cljs.core.first(seq60781);
var seq60781__$1 = cljs.core.next(seq60781);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60782,seq60781__$1);
}));

/**
 * If `x` an MBQL clause, and an instance of clauses defined by keyword(s) `k-or-ks`?
 * 
 *  (is-clause? :count [:count 10])        ; -> true
 *  (is-clause? #{:+ :- :* :/} [:+ 10 20]) ; -> true
 */
metabase.mbql.schema.helpers.is_clause_QMARK_ = (function metabase$mbql$schema$helpers$is_clause_QMARK_(k_or_ks,x){
var and__5043__auto__ = cljs.core.sequential_QMARK_(x);
if(and__5043__auto__){
var and__5043__auto____$1 = (cljs.core.first(x) instanceof cljs.core.Keyword);
if(and__5043__auto____$1){
if(cljs.core.coll_QMARK_(k_or_ks)){
var G__60798 = cljs.core.first(x);
var fexpr__60797 = cljs.core.set(k_or_ks);
return (fexpr__60797.cljs$core$IFn$_invoke$arity$1 ? fexpr__60797.cljs$core$IFn$_invoke$arity$1(G__60798) : fexpr__60797.call(null,G__60798));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_or_ks,cljs.core.first(x));
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
/**
 * Interal impl of `one-of` macro.
 */
metabase.mbql.schema.helpers.one_of_STAR_ = (function metabase$mbql$schema$helpers$one_of_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60869 = arguments.length;
var i__5770__auto___60870 = (0);
while(true){
if((i__5770__auto___60870 < len__5769__auto___60869)){
args__5775__auto__.push((arguments[i__5770__auto___60870]));

var G__60871 = (i__5770__auto___60870 + (1));
i__5770__auto___60870 = G__60871;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return metabase.mbql.schema.helpers.one_of_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(metabase.mbql.schema.helpers.one_of_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (clause_names_PLUS_schemas){
return schema.core.named(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.conditional,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function metabase$mbql$schema$helpers$iter__60805(s__60806){
return (new cljs.core.LazySeq(null,(function (){
var s__60806__$1 = s__60806;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60806__$1);
if(temp__5804__auto__){
var s__60806__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60806__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60806__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60808 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60807 = (0);
while(true){
if((i__60807 < size__5522__auto__)){
var vec__60812 = cljs.core._nth(c__5521__auto__,i__60807);
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60812,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60812,(1),null);
cljs.core.chunk_append(b__60808,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.mbql.schema.helpers.is_clause_QMARK_,clause_name),schema__$1], null));

var G__60873 = (i__60807 + (1));
i__60807 = G__60873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60808),metabase$mbql$schema$helpers$iter__60805(cljs.core.chunk_rest(s__60806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60808),null);
}
} else {
var vec__60815 = cljs.core.first(s__60806__$2);
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60815,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60815,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.mbql.schema.helpers.is_clause_QMARK_,clause_name),schema__$1], null),metabase$mbql$schema$helpers$iter__60805(cljs.core.rest(s__60806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(clause_names_PLUS_schemas);
})())),["Must be a valid instance of one of these clauses: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,clause_names_PLUS_schemas))].join(''));
}));

(metabase.mbql.schema.helpers.one_of_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metabase.mbql.schema.helpers.one_of_STAR_.cljs$lang$applyTo = (function (seq60799){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60799));
}));

/**
 * Schema for a string that isn't blank.
 */
metabase.mbql.schema.helpers.NonBlankString = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(schema.core.Str,cljs.core.complement(clojure.string.blank_QMARK_),"Non-blank string");
/**
 * Schema for `:type/*` or one of its descendants in the Dashboard type hierarchy.
 */
metabase.mbql.schema.helpers.FieldType = schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (p1__60818_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__60818_SHARP_,new cljs.core.Keyword("type","*","type/*",-1283496752));
}),"Valid field type");
/**
 * Schema for a `:Semantic/*` (or `:Relation/*`, until we fix this) or one of their descendents in the Dashboard
 *   Hierarchical Type System (MHTS).
 */
metabase.mbql.schema.helpers.FieldSemanticOrRelationType = schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (k){
return ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("Relation","*","Relation/*",-706261522))));
}),"Valid semantic type");
/**
 * Schema for a positive integer.
 */
metabase.mbql.schema.helpers.IntGreaterThanZero = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(schema.core.Int,cljs.core.pos_QMARK_,"positive integer");
/**
 * Schema for an integer >= zero.
 */
metabase.mbql.schema.helpers.IntGreaterThanOrEqualToZero = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(schema.core.Int,cljs.core.complement(cljs.core.neg_QMARK_),"integer >= 0");
/**
 * Schema for any map.
 */
metabase.mbql.schema.helpers.Map = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,schema.core.Any]);
/**
 * Schema for any keyword or string.
 */
metabase.mbql.schema.helpers.KeywordOrString = schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.core.Keyword,schema.core.Str], 0));
/**
 * Add an addditonal constraint to `schema` (presumably an array) that requires it to be non-empty
 * (i.e., it must satisfy `seq`).
 */
metabase.mbql.schema.helpers.non_empty = (function metabase$mbql$schema$helpers$non_empty(schema__$1){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(schema__$1,cljs.core.seq,"Non-empty");
});
/**
 * True if `coll` is either empty or distinct.
 */
metabase.mbql.schema.helpers.empty_or_distinct_QMARK_ = (function metabase$mbql$schema$helpers$empty_or_distinct_QMARK_(coll){
if(cljs.core.seq(coll)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
} else {
return true;
}
});
/**
 * Add an additional constraint to `schema` (presumably an array) that requires all elements to be distinct.
 */
metabase.mbql.schema.helpers.distinct = (function metabase$mbql$schema$helpers$distinct(schema__$1){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(schema__$1,metabase.mbql.schema.helpers.empty_or_distinct_QMARK_,"distinct");
});
Object.defineProperty(module.exports, "FieldType", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.FieldType; } });
Object.defineProperty(module.exports, "clause_arg_schema", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.clause_arg_schema; } });
Object.defineProperty(module.exports, "empty_or_distinct_QMARK_", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.empty_or_distinct_QMARK_; } });
Object.defineProperty(module.exports, "clause", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.clause; } });
Object.defineProperty(module.exports, "FieldSemanticOrRelationType", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.FieldSemanticOrRelationType; } });
Object.defineProperty(module.exports, "KeywordOrString", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.KeywordOrString; } });
Object.defineProperty(module.exports, "Map", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.Map; } });
Object.defineProperty(module.exports, "one_of_STAR_", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.one_of_STAR_; } });
Object.defineProperty(module.exports, "is_clause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.is_clause_QMARK_; } });
Object.defineProperty(module.exports, "non_empty", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.non_empty; } });
Object.defineProperty(module.exports, "IntGreaterThanOrEqualToZero", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.IntGreaterThanOrEqualToZero; } });
Object.defineProperty(module.exports, "distinct", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.distinct; } });
Object.defineProperty(module.exports, "NonBlankString", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.NonBlankString; } });
Object.defineProperty(module.exports, "IntGreaterThanZero", { enumerable: false, get: function() { return metabase.mbql.schema.helpers.IntGreaterThanZero; } });
//# sourceMappingURL=metabase.mbql.schema.helpers.js.map
