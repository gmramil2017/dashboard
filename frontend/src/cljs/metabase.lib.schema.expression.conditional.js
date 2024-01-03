var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.mbql_clause.js");
require("./metabase.types.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.expression.conditional.js");

goog.provide('metabase.lib.schema.expression.conditional');
/**
 * For expressions like `:case` and `:coalesce` that can return different possible expressions, determine the best
 *   return type given all of the various options.
 */
metabase.lib.schema.expression.conditional.best_return_type = (function metabase$lib$schema$expression$conditional$best_return_type(x,y){
if((x == null)){
return y;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107))))){
return new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107);
} else {
if((((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword)))){
return metabase.types.most_specific_common_ancestor(x,y);
} else {
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if((y instanceof cljs.core.Keyword)){
return y;
} else {
var or__5045__auto__ = (function (){var temp__5804__auto__ = cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(x,y));
if(cljs.core.truth_(temp__5804__auto__)){
var intersection = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(intersection),(1))){
return cljs.core.first(intersection);
} else {
return intersection;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(x,y);
}

}
}
}
}
}
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.conditional","case-subclause","metabase.lib.schema.expression.conditional/case-subclause",2034608676),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid :case [pred expr] pair"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","boolean","metabase.lib.schema.expression/boolean",-1396506592)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704)], null)], null));
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"case","case",1143702196),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pred-expr-pairs","pred-expr-pairs",123330907),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.conditional","case-subclause","metabase.lib.schema.expression.conditional/case-subclause",2034608676)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704)], null)], null)], null)], null)], 0));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__60565){
var vec__60566 = p__60565;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60566,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60566,(1),null);
var pred_expr_pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60566,(2),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60566,(3),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (best_guess,p__60569){
var vec__60570 = p__60569;
var _pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60570,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60570,(1),null);
var expr_type = metabase.lib.schema.expression.type_of(expr);
return metabase.lib.schema.expression.conditional.best_return_type(best_guess,expr_type);
}),(((!((default$ == null))))?metabase.lib.schema.expression.type_of(default$):null),pred_expr_pairs);
}));
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"coalesce","coalesce",654622029),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exprs","exprs",1795829094),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704)], null)], null)], null)], null)], 0));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"coalesce","coalesce",654622029),(function (p__60577){
var vec__60578 = p__60577;
var seq__60579 = cljs.core.seq(vec__60578);
var first__60580 = cljs.core.first(seq__60579);
var seq__60579__$1 = cljs.core.next(seq__60579);
var _tag = first__60580;
var first__60580__$1 = cljs.core.first(seq__60579__$1);
var seq__60579__$2 = cljs.core.next(seq__60579__$1);
var _opts = first__60580__$1;
var exprs = seq__60579__$2;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.conditional.best_return_type,cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of,exprs));
}));
Object.defineProperty(module.exports, "best_return_type", { enumerable: false, get: function() { return metabase.lib.schema.expression.conditional.best_return_type; } });
//# sourceMappingURL=metabase.lib.schema.expression.conditional.js.map
