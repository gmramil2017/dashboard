var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.mbql.util.match.impl.js");

goog.provide('metabase.mbql.util.match.impl');
/**
 * Return a function to use for pattern matching via `core.match`'s `:guard` functionality based on the value of a
 *   `pred-or-class` passed in as a pattern to `match` or `replace`.
 * 
 *   (Class-based matching currently only works in Clojure. For ClojureScript, only predicate function matching works.)
 */
metabase.mbql.util.match.impl.match_with_pred_or_class = (function metabase$mbql$util$match$impl$match_with_pred_or_class(pred_or_class){
if(cljs.core.fn_QMARK_(pred_or_class)){
return pred_or_class;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid pattern: don't know how to handle symbol.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),pred_or_class], null));

}
});
/**
 * Internal impl for `match`. If `form` is a collection, call `match-fn` to recursively look for matches in it.
 */
metabase.mbql.util.match.impl.match_in_collection = (function metabase$mbql$util$match$impl$match_in_collection(match_fn,clause_parents,form){
if(cljs.core.fn_QMARK_(match_fn)){
} else {
throw (new Error("Assert failed: (fn? match-fn)"));
}

if(cljs.core.vector_QMARK_(clause_parents)){
} else {
throw (new Error("Assert failed: (vector? clause-parents)"));
}

if(cljs.core.map_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function metabase$mbql$util$match$impl$match_in_collection_$_iter__62699(s__62700){
return (new cljs.core.LazySeq(null,(function (){
var s__62700__$1 = s__62700;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__62700__$1);
if(temp__5804__auto__){
var s__62700__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62700__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__62700__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__62702 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__62701 = (0);
while(true){
if((i__62701 < size__5522__auto__)){
var vec__62703 = cljs.core._nth(c__5521__auto__,i__62701);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62703,(1),null);
cljs.core.chunk_append(b__62702,(function (){var G__62706 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,k);
var G__62707 = v;
return (match_fn.cljs$core$IFn$_invoke$arity$2 ? match_fn.cljs$core$IFn$_invoke$arity$2(G__62706,G__62707) : match_fn.call(null,G__62706,G__62707));
})());

var G__62749 = (i__62701 + (1));
i__62701 = G__62749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62702),metabase$mbql$util$match$impl$match_in_collection_$_iter__62699(cljs.core.chunk_rest(s__62700__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62702),null);
}
} else {
var vec__62708 = cljs.core.first(s__62700__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62708,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62708,(1),null);
return cljs.core.cons((function (){var G__62711 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,k);
var G__62712 = v;
return (match_fn.cljs$core$IFn$_invoke$arity$2 ? match_fn.cljs$core$IFn$_invoke$arity$2(G__62711,G__62712) : match_fn.call(null,G__62711,G__62712));
})(),metabase$mbql$util$match$impl$match_in_collection_$_iter__62699(cljs.core.rest(s__62700__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(form);
})());
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(match_fn,(((cljs.core.first(form) instanceof cljs.core.Keyword))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,cljs.core.first(form)):clause_parents)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
} else {
return null;
}
}
});
/**
 * Inernal impl for `replace`. Recursively replace values in a collection using a `replace-fn`.
 */
metabase.mbql.util.match.impl.replace_in_collection = (function metabase$mbql$util$match$impl$replace_in_collection(replace_fn,clause_parents,form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(form,(function (){var iter__5523__auto__ = (function metabase$mbql$util$match$impl$replace_in_collection_$_iter__62717(s__62718){
return (new cljs.core.LazySeq(null,(function (){
var s__62718__$1 = s__62718;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__62718__$1);
if(temp__5804__auto__){
var s__62718__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62718__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__62718__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__62720 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__62719 = (0);
while(true){
if((i__62719 < size__5522__auto__)){
var vec__62723 = cljs.core._nth(c__5521__auto__,i__62719);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62723,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62723,(1),null);
cljs.core.chunk_append(b__62720,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__62726 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,k);
var G__62727 = v;
return (replace_fn.cljs$core$IFn$_invoke$arity$2 ? replace_fn.cljs$core$IFn$_invoke$arity$2(G__62726,G__62727) : replace_fn.call(null,G__62726,G__62727));
})()], null));

var G__62750 = (i__62719 + (1));
i__62719 = G__62750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62720),metabase$mbql$util$match$impl$replace_in_collection_$_iter__62717(cljs.core.chunk_rest(s__62718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62720),null);
}
} else {
var vec__62728 = cljs.core.first(s__62718__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62728,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__62731 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,k);
var G__62732 = v;
return (replace_fn.cljs$core$IFn$_invoke$arity$2 ? replace_fn.cljs$core$IFn$_invoke$arity$2(G__62731,G__62732) : replace_fn.call(null,G__62731,G__62732));
})()], null),metabase$mbql$util$match$impl$replace_in_collection_$_iter__62717(cljs.core.rest(s__62718__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(form);
})());
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(replace_fn,(((cljs.core.first(form) instanceof cljs.core.Keyword))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,cljs.core.first(form)):clause_parents)),form);
} else {
return form;

}
}
});
/**
 * Like `update-in`, but only updates in the existing value is non-empty.
 */
metabase.mbql.util.match.impl.update_in_unless_empty = (function metabase$mbql$util$match$impl$update_in_unless_empty(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62751 = arguments.length;
var i__5770__auto___62752 = (0);
while(true){
if((i__5770__auto___62752 < len__5769__auto___62751)){
args__5775__auto__.push((arguments[i__5770__auto___62752]));

var G__62753 = (i__5770__auto___62752 + (1));
i__5770__auto___62752 = G__62753;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return metabase.mbql.util.match.impl.update_in_unless_empty.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(metabase.mbql.util.match.impl.update_in_unless_empty.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
if(cljs.core.not(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,ks)))){
return m;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,m,ks,f,args);
}
}));

(metabase.mbql.util.match.impl.update_in_unless_empty.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metabase.mbql.util.match.impl.update_in_unless_empty.cljs$lang$applyTo = (function (seq62739){
var G__62740 = cljs.core.first(seq62739);
var seq62739__$1 = cljs.core.next(seq62739);
var G__62741 = cljs.core.first(seq62739__$1);
var seq62739__$2 = cljs.core.next(seq62739__$1);
var G__62742 = cljs.core.first(seq62739__$2);
var seq62739__$3 = cljs.core.next(seq62739__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62740,G__62741,G__62742,seq62739__$3);
}));

Object.defineProperty(module.exports, "match_with_pred_or_class", { enumerable: false, get: function() { return metabase.mbql.util.match.impl.match_with_pred_or_class; } });
Object.defineProperty(module.exports, "match_in_collection", { enumerable: false, get: function() { return metabase.mbql.util.match.impl.match_in_collection; } });
Object.defineProperty(module.exports, "replace_in_collection", { enumerable: false, get: function() { return metabase.mbql.util.match.impl.replace_in_collection; } });
Object.defineProperty(module.exports, "update_in_unless_empty", { enumerable: false, get: function() { return metabase.mbql.util.match.impl.update_in_unless_empty; } });
//# sourceMappingURL=metabase.mbql.util.match.impl.js.map
