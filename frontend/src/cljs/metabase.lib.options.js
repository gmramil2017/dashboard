var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.schema.common.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.options.js");

goog.provide('metabase.lib.options');
metabase.lib.options.mbql_clause_QMARK_ = (function metabase$lib$options$mbql_clause_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
/**
 * Inputs: [x]
 *   Return: [:maybe map?]
 *        
 * 
 *   Return the Dashboard lib options map associated with an `x`. Lib options is currently used mostly for
 *   the `:lib/uuid` we attach to everything to facilitate removing or replacing clauses later, but we will probably
 *   stick more stuff in here in the future. Some clauses like `:field` use options extensively for different things.
 * 
 *   Normally for an MBQL clause, options are an optional second argument, e.g.
 * 
 *  [:= {:lib/uuid "03baa510-0415-48ef-987a-462d789c8a02"} 1 2]
 * 
 *   a la Hiccup or Malli. The default implementation already knows how to handle clauses that follow this shape. For
 *   historic reasons some MBQL clauses like `:field` or some of the string filter clauses have options as the last
 *   argument; you'll have to implement this method, and [[with-options]], to deal with the special cases.
 * 
 *   For maps like join specs, options are currently stored under the `:lib/options` key. Does this make sense? Not sure.
 *   Maybe options should be included directly in the map, but then we'd have to decide which keys are and are not
 *   options. Is a join `:alias` an option? Probably. What about a `:condition`? It's not optional. So for purposes of
 *   writing Dashboard lib and tracking `:lib/uuid`, this approach seems ok in the short term.
 */
metabase.lib.options.options = (function metabase$lib$options$options(x){

if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword("lib","options","lib/options",99794548).cljs$core$IFn$_invoke$arity$1(x);
} else {
if(metabase.lib.options.mbql_clause_QMARK_(x)){
if(cljs.core.map_QMARK_(cljs.core.second(x))){
return cljs.core.second(x);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Inputs: [x new-options :- [:maybe map?]]
 *   Return: :any
 *        
 * 
 *   Update `x` so its [[options]] are `new-options`. If the clause or map already has options, this will
 *   *replace* the old options; if it does not, this will set the new options.
 * 
 *   If `x` is a map with `:lib/options` and `new-options` is `empty?`, this will drop `:lib/options` entirely.
 * 
 *   You should probably prefer [[update-options]] to using this directly, so you don't stomp over existing stuff
 *   unintentionally. Implement this if you need to teach Dashboard lib how to support something that doesn't follow the
 *   usual patterns described in [[options]].
 */
metabase.lib.options.with_options = (function metabase$lib$options$with_options(x,new_options){

if(cljs.core.map_QMARK_(x)){
return metabase.util.assoc_dissoc(x,new cljs.core.Keyword("lib","options","lib/options",99794548),cljs.core.not_empty(new_options));
} else {
if(metabase.lib.options.mbql_clause_QMARK_(x)){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_QMARK_)(cljs.core.second(x)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(x),(1),new_options);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(x),new_options], null),cljs.core.rest(x));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Don''t know how to set options for {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),x], null));

}
}
});
/**
 * Update the existing options in an `x` by applying `f` like this:
 * 
 *  (apply f existing-options args)
 */
metabase.lib.options.update_options = (function metabase$lib$options$update_options(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60063 = arguments.length;
var i__5770__auto___60064 = (0);
while(true){
if((i__5770__auto___60064 < len__5769__auto___60063)){
args__5775__auto__.push((arguments[i__5770__auto___60064]));

var G__60065 = (i__5770__auto___60064 + (1));
i__5770__auto___60064 = G__60065;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic = (function (x,f,args){
var current_options = metabase.lib.options.options(x);
var new_options = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,current_options,args);
return metabase.lib.options.with_options(x,new_options);
}));

(metabase.lib.options.update_options.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.options.update_options.cljs$lang$applyTo = (function (seq60052){
var G__60053 = cljs.core.first(seq60052);
var seq60052__$1 = cljs.core.next(seq60052);
var G__60054 = cljs.core.first(seq60052__$1);
var seq60052__$2 = cljs.core.next(seq60052__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60053,G__60054,seq60052__$2);
}));

/**
 * Check that `x` has a `:lib/uuid` in its [[options]]; generate a UUID and add it if it does not
 *   already have one.
 */
metabase.lib.options.ensure_uuid = (function metabase$lib$options$ensure_uuid(x){
return metabase.lib.options.update_options(x,(function (options_map){
var G__60055 = options_map;
if(cljs.core.not(new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(options_map))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60055,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
} else {
return G__60055;
}
}));
});
/**
 * Inputs: [x]
 *   Return: [:maybe :metabase.lib.schema.common/non-blank-string]
 *        
 * 
 *   Get the `:lib/uuid` associated with something, e.g. an MBQL clause or join.
 */
metabase.lib.options.uuid = (function metabase$lib$options$uuid(x){

return new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(x));
});
Object.defineProperty(module.exports, "mbql_clause_QMARK_", { enumerable: false, get: function() { return metabase.lib.options.mbql_clause_QMARK_; } });
Object.defineProperty(module.exports, "options", { enumerable: false, get: function() { return metabase.lib.options.options; } });
Object.defineProperty(module.exports, "with_options", { enumerable: false, get: function() { return metabase.lib.options.with_options; } });
Object.defineProperty(module.exports, "update_options", { enumerable: false, get: function() { return metabase.lib.options.update_options; } });
Object.defineProperty(module.exports, "ensure_uuid", { enumerable: false, get: function() { return metabase.lib.options.ensure_uuid; } });
Object.defineProperty(module.exports, "uuid", { enumerable: false, get: function() { return metabase.lib.options.uuid; } });
//# sourceMappingURL=metabase.lib.options.js.map
