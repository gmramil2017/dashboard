var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.util.malli.js");
require("./metabase.domain_entities.converters.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.domain_entities.queries.util.js");

goog.provide('metabase.domain_entities.queries.util');
/**
 * Schema for an Expression that's part of a query filter.
 */
metabase.domain_entities.queries.util.Expression = new cljs.core.Keyword(null,"any","any",1705907423);
/**
 * Malli schema for a map of expressions by name.
 */
metabase.domain_entities.queries.util.ExpressionMap = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.string_QMARK_,metabase.domain_entities.queries.util.Expression], null);
/**
 * Malli schema for a list of {:name :expression} maps.
 */
metabase.domain_entities.queries.util.ExpressionList = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),metabase.domain_entities.queries.util.Expression], null)], null)], null);
metabase.domain_entities.queries.util.__GT_expression_map = metabase.domain_entities.converters.incoming(metabase.domain_entities.queries.util.ExpressionMap);
metabase.domain_entities.queries.util.expression_list__GT_ = metabase.domain_entities.converters.outgoing(metabase.domain_entities.queries.util.ExpressionList);
/**
 * Inputs: [expressions :- ExpressionMap]
 *   Return: ExpressionList
 *        
 * 
 *   Turns a map of expressions by name into a list of `{:name name :expression expression}` objects.
 */
metabase.domain_entities.queries.util.expressions_list = (function metabase$domain_entities$queries$util$expressions_list(expressions){

var G__58546 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__58547){
var vec__58548 = p__58547;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58548,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58548,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"expression","expression",202311876),expr], null);
}),(metabase.domain_entities.queries.util.__GT_expression_map.cljs$core$IFn$_invoke$arity$1 ? metabase.domain_entities.queries.util.__GT_expression_map.cljs$core$IFn$_invoke$arity$1(expressions) : metabase.domain_entities.queries.util.__GT_expression_map.call(null,expressions)));
return (metabase.domain_entities.queries.util.expression_list__GT_.cljs$core$IFn$_invoke$arity$1 ? metabase.domain_entities.queries.util.expression_list__GT_.cljs$core$IFn$_invoke$arity$1(G__58546) : metabase.domain_entities.queries.util.expression_list__GT_.call(null,G__58546));
});
metabase.domain_entities.queries.util.unique_name = (function metabase$domain_entities$queries$util$unique_name(names,original_name,index){
while(true){
var indexed_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(original_name)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),")"].join('');
if(cljs.core.truth_((names.cljs$core$IFn$_invoke$arity$1 ? names.cljs$core$IFn$_invoke$arity$1(indexed_name) : names.call(null,indexed_name)))){
var G__58553 = names;
var G__58554 = original_name;
var G__58555 = (index + (1));
names = G__58553;
original_name = G__58554;
index = G__58555;
continue;
} else {
return indexed_name;
}
break;
}
});
/**
 * Inputs: [expressions :- ExpressionMap original-name :- string?]
 *   Return: string?
 *        
 * 
 *   Generates an expression name that's unique in the given map of expressions.
 */
metabase.domain_entities.queries.util.unique_expression_name = (function metabase$domain_entities$queries$util$unique_expression_name(expressions,original_name){

var expression_names = cljs.core.set(cljs.core.keys((metabase.domain_entities.queries.util.__GT_expression_map.cljs$core$IFn$_invoke$arity$1 ? metabase.domain_entities.queries.util.__GT_expression_map.cljs$core$IFn$_invoke$arity$1(expressions) : metabase.domain_entities.queries.util.__GT_expression_map.call(null,expressions))));
if(cljs.core.not((expression_names.cljs$core$IFn$_invoke$arity$1 ? expression_names.cljs$core$IFn$_invoke$arity$1(original_name) : expression_names.call(null,original_name)))){
return original_name;
} else {
var re_duplicates = cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original_name)," \\([0-9]+\\)$"].join(''));
var duplicates = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58551_SHARP_){
var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__58551_SHARP_,original_name);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(re_duplicates,p1__58551_SHARP_);
}
}),expression_names));
return metabase.domain_entities.queries.util.unique_name(duplicates,original_name,cljs.core.count(duplicates));
}
});
Object.defineProperty(module.exports, "Expression", { enumerable: false, get: function() { return metabase.domain_entities.queries.util.Expression; } });
Object.defineProperty(module.exports, "ExpressionMap", { enumerable: false, get: function() { return metabase.domain_entities.queries.util.ExpressionMap; } });
Object.defineProperty(module.exports, "ExpressionList", { enumerable: false, get: function() { return metabase.domain_entities.queries.util.ExpressionList; } });
Object.defineProperty(module.exports, "__GT_expression_map", { enumerable: false, get: function() { return metabase.domain_entities.queries.util.__GT_expression_map; } });
Object.defineProperty(module.exports, "expression_list__GT_", { enumerable: false, get: function() { return metabase.domain_entities.queries.util.expression_list__GT_; } });
Object.defineProperty(module.exports, "expressions_list", { enumerable: true, get: function() { return metabase.domain_entities.queries.util.expressions_list; } });
Object.defineProperty(module.exports, "unique_name", { enumerable: false, get: function() { return metabase.domain_entities.queries.util.unique_name; } });
Object.defineProperty(module.exports, "unique_expression_name", { enumerable: true, get: function() { return metabase.domain_entities.queries.util.unique_expression_name; } });
//# sourceMappingURL=metabase.domain_entities.queries.util.js.map
