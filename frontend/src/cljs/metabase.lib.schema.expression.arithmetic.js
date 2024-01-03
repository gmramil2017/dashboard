var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
require("./medley.core.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.mbql_clause.js");
require("./metabase.lib.schema.temporal_bucketing.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.expression.arithmetic.js");

goog.provide('metabase.lib.schema.expression.arithmetic');
metabase.lib.schema.expression.arithmetic.valid_interval_for_type_QMARK_ = (function metabase$lib$schema$expression$arithmetic$valid_interval_for_type_QMARK_(p__60387,expr_type){
var vec__60388 = p__60387;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60388,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60388,(1),null);
var _n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60388,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60388,(3),null);
var _interval = vec__60388;
var unit_schema = ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(expr_type,new cljs.core.Keyword("type","Date","type/Date",-690428629)))?new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date.interval","metabase.lib.schema.temporal-bucketing/unit.date.interval",-1463811525):((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(expr_type,new cljs.core.Keyword("type","Time","type/Time",-814852413)))?new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.time.interval","metabase.lib.schema.temporal-bucketing/unit.time.interval",-718964325):((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(expr_type,new cljs.core.Keyword("type","DateTime","type/DateTime",352113310)))?new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time.interval","metabase.lib.schema.temporal-bucketing/unit.date-time.interval",659301368):null)));
if(cljs.core.truth_(unit_schema)){
return malli.core.validate.cljs$core$IFn$_invoke$arity$2(unit_schema,unit);
} else {
return true;
}
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","args.temporal","metabase.lib.schema.expression.arithmetic/args.temporal",1338604923),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword("mbql.clause","interval","mbql.clause/interval",-990446354)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Temporal arithmetic expression with valid interval units for the expression type"], null),(function (p__60392){
var vec__60393 = p__60392;
var seq__60394 = cljs.core.seq(vec__60393);
var first__60395 = cljs.core.first(seq__60394);
var seq__60394__$1 = cljs.core.next(seq__60394);
var expr = first__60395;
var intervals = seq__60394__$1;
var expr_type = metabase.lib.schema.expression.type_of(expr);
return cljs.core.every_QMARK_((function (p1__60391_SHARP_){
return metabase.lib.schema.expression.arithmetic.valid_interval_for_type_QMARK_(p1__60391_SHARP_,expr_type);
}),intervals);
})], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","args.numbers","metabase.lib.schema.expression.arithmetic/args.numbers",-179216621),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], null));
/**
 * Validate a `:+` or `:-` expression with temporal args. Return a string describing any errors found, or `nil` if it
 *   looks ok.
 */
metabase.lib.schema.expression.arithmetic.validate_plus_minus_temporal_arithmetic_expression = (function metabase$lib$schema$expression$arithmetic$validate_plus_minus_temporal_arithmetic_expression(p__60397){
var vec__60398 = p__60397;
var seq__60399 = cljs.core.seq(vec__60398);
var first__60400 = cljs.core.first(seq__60399);
var seq__60399__$1 = cljs.core.next(seq__60399);
var _tag = first__60400;
var first__60400__$1 = cljs.core.first(seq__60399__$1);
var seq__60399__$2 = cljs.core.next(seq__60399__$1);
var _opts = first__60400__$1;
var exprs = seq__60399__$2;
var map__60402 = cljs.core.group_by((function (p1__60396_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of(p1__60396_SHARP_),new cljs.core.Keyword("type","Interval","type/Interval",-365323617));
}),exprs);
var map__60402__$1 = cljs.core.__destructure_map(map__60402);
var non_intervals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60402__$1,false);
var intervals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60402__$1,true);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(non_intervals),(1))){
return "Temporal arithmetic expression must contain exactly one non-interval value";
} else {
if((cljs.core.count(intervals) < (1))){
return "Temporal arithmetic expression must contain at least one :interval";
} else {
var expr_type = metabase.lib.schema.expression.type_of(cljs.core.first(non_intervals));
return cljs.core.some((function (p__60403){
var vec__60405 = p__60403;
var _tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60405,(0),null);
var _opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60405,(1),null);
var _n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60405,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60405,(3),null);
var interval = vec__60405;
if(cljs.core.truth_(metabase.lib.schema.expression.arithmetic.valid_interval_for_type_QMARK_(interval,expr_type))){
return null;
} else {
return ["Cannot add a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)," interval to a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr_type)," expression"].join('');
}
}),intervals);

}
}
});
/**
 * Create a schema for `:+` or `:-` with temporal args: <temporal> ± <interval(s)> in any order
 */
metabase.lib.schema.expression.arithmetic.plus_minus_temporal_schema = (function metabase$lib$schema$expression$arithmetic$plus_minus_temporal_schema(tag){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," clause with a temporal expression and one or more :interval clauses"].join('')], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("mbql.clause","interval","mbql.clause/interval",-990446354)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("mbql.clause","interval","mbql.clause/interval",-990446354)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__60408,_){
var map__60409 = p__60408;
var map__60409__$1 = cljs.core.__destructure_map(map__60409);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60409__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["Invalid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.schema.expression.arithmetic.validate_plus_minus_temporal_arithmetic_expression(value))].join('');
})], null),cljs.core.complement(metabase.lib.schema.expression.arithmetic.validate_plus_minus_temporal_arithmetic_expression)], null)], null);
});
/**
 * Create a schema for `:+` or `:-` with numeric args.
 */
metabase.lib.schema.expression.arithmetic.plus_minus_numeric_schema = (function metabase$lib$schema$expression$arithmetic$plus_minus_numeric_schema(tag){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," clause with numeric args"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], null)], null);
});
metabase.lib.schema.expression.arithmetic.plus_minus_schema = (function metabase$lib$schema$expression$arithmetic$plus_minus_schema(tag){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),metabase.lib.schema.expression.arithmetic.plus_minus_temporal_schema(tag),metabase.lib.schema.expression.arithmetic.plus_minus_numeric_schema(tag)], null);
});
/**
 * Given a sequence of args to a numeric arithmetic expression like `:+`, determine the type returned by the expression
 *   by calculating the most-specific common ancestor type of all the args. E.g. `[:+ ... 2.0 2.0]` has two `:type/Float`
 *   args, and thus the most-specific common ancestor type is `:type/Float`. `[:+ ... 2.0 2]` has a `:type/Float` and a
 *   `:type/Integer` arg; the most-specific common ancestor type is `:type/Number`. For refs without type
 *   information (e.g. `:field` clauses), assume `:type/Number`.
 */
metabase.lib.schema.expression.arithmetic.type_of_numeric_arithmetic_args = (function metabase$lib$schema$expression$arithmetic$type_of_numeric_arithmetic_args(args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(metabase.types.most_specific_common_ancestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (expr){
var expr_type = metabase.lib.schema.expression.type_of(expr);
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(expr_type,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107));
if(and__5043__auto__){
return malli.core.validate.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498),expr);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.Keyword("type","Number","type/Number",-2071693690);
} else {
return expr_type;
}
}),args));
});
/**
 * Given a temporal value plus one or more intervals `args` passed to an arithmetic expression like `:+`, determine the
 *   overall type returned by the expression. This is the type of the temporal value (the arg that is not an interval),
 *   or assume `:type/Temporal` if it is a ref without type information.
 */
metabase.lib.schema.expression.arithmetic.type_of_temporal_arithmetic_args = (function metabase$lib$schema$expression$arithmetic$type_of_temporal_arithmetic_args(args){
var first_non_interval_arg_type = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__60416_SHARP_){
return (!(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__60416_SHARP_,new cljs.core.Keyword("type","Interval","type/Interval",-365323617))));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of,args));
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(first_non_interval_arg_type,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107))){
return new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010);
} else {
return first_non_interval_arg_type;
}
});
/**
 * Given a sequence of `args` to an arithmetic expression like `:+`, determine the overall type that the expression
 *   returns. There are two types of arithmetic expressions:
 * 
 *   * Ones consisting of numbers. See [[type-of-numeric-arithmetic-args]].
 * 
 *   * Ones consisting of a temporal value like a Date plus one or more `:interval` clauses, in any order. See
 *  [[type-of-temporal-arithmetic-args]].
 */
metabase.lib.schema.expression.arithmetic.type_of_arithmetic_args = (function metabase$lib$schema$expression$arithmetic$type_of_arithmetic_args(args){
if(cljs.core.truth_(cljs.core.some((function (p1__60418_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of(p1__60418_SHARP_),new cljs.core.Keyword("type","Interval","type/Interval",-365323617));
}),args))){
return metabase.lib.schema.expression.arithmetic.type_of_temporal_arithmetic_args(args);
} else {
return metabase.lib.schema.expression.arithmetic.type_of_numeric_arithmetic_args(args);
}
});
metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"+","+",1913524883),metabase.lib.schema.expression.arithmetic.plus_minus_schema(new cljs.core.Keyword(null,"+","+",1913524883)));
metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),metabase.lib.schema.expression.arithmetic.plus_minus_schema(new cljs.core.Keyword(null,"-","-",-2112348439)));
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","args.numbers","metabase.lib.schema.expression.arithmetic/args.numbers",-179216621)], null)], 0));
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"/","/",1282502798),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","args.numbers","metabase.lib.schema.expression.arithmetic/args.numbers",-179216621)], null)], 0));
var seq__60423_60455 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"*","*",-1294732318)], null));
var chunk__60424_60456 = null;
var count__60425_60457 = (0);
var i__60426_60458 = (0);
while(true){
if((i__60426_60458 < count__60425_60457)){
var tag_60459 = chunk__60424_60456.cljs$core$IIndexed$_nth$arity$2(null,i__60426_60458);
metabase.lib.hierarchy.derive(tag_60459,new cljs.core.Keyword("lib.type-of","type-is-type-of-arithmetic-args","lib.type-of/type-is-type-of-arithmetic-args",-626871615));


var G__60460 = seq__60423_60455;
var G__60461 = chunk__60424_60456;
var G__60462 = count__60425_60457;
var G__60463 = (i__60426_60458 + (1));
seq__60423_60455 = G__60460;
chunk__60424_60456 = G__60461;
count__60425_60457 = G__60462;
i__60426_60458 = G__60463;
continue;
} else {
var temp__5804__auto___60464 = cljs.core.seq(seq__60423_60455);
if(temp__5804__auto___60464){
var seq__60423_60465__$1 = temp__5804__auto___60464;
if(cljs.core.chunked_seq_QMARK_(seq__60423_60465__$1)){
var c__5568__auto___60467 = cljs.core.chunk_first(seq__60423_60465__$1);
var G__60468 = cljs.core.chunk_rest(seq__60423_60465__$1);
var G__60469 = c__5568__auto___60467;
var G__60470 = cljs.core.count(c__5568__auto___60467);
var G__60471 = (0);
seq__60423_60455 = G__60468;
chunk__60424_60456 = G__60469;
count__60425_60457 = G__60470;
i__60426_60458 = G__60471;
continue;
} else {
var tag_60472 = cljs.core.first(seq__60423_60465__$1);
metabase.lib.hierarchy.derive(tag_60472,new cljs.core.Keyword("lib.type-of","type-is-type-of-arithmetic-args","lib.type-of/type-is-type-of-arithmetic-args",-626871615));


var G__60473 = cljs.core.next(seq__60423_60465__$1);
var G__60474 = null;
var G__60475 = (0);
var G__60476 = (0);
seq__60423_60455 = G__60473;
chunk__60424_60456 = G__60474;
count__60425_60457 = G__60475;
i__60426_60458 = G__60476;
continue;
}
} else {
}
}
break;
}
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib.type-of","type-is-type-of-arithmetic-args","lib.type-of/type-is-type-of-arithmetic-args",-626871615),(function (p__60427){
var vec__60428 = p__60427;
var seq__60429 = cljs.core.seq(vec__60428);
var first__60430 = cljs.core.first(seq__60429);
var seq__60429__$1 = cljs.core.next(seq__60429);
var _tag = first__60430;
var first__60430__$1 = cljs.core.first(seq__60429__$1);
var seq__60429__$2 = cljs.core.next(seq__60429__$1);
var _opts = first__60430__$1;
var args = seq__60429__$2;
return metabase.lib.schema.expression.arithmetic.type_of_arithmetic_args(args);
}));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"abs","abs",-246026477),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword("lib.type-of","type-is-type-of-first-arg","lib.type-of/type-is-type-of-first-arg",-317600808));
var seq__60431_60477 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929)], null));
var chunk__60432_60478 = null;
var count__60433_60479 = (0);
var i__60434_60480 = (0);
while(true){
if((i__60434_60480 < count__60433_60479)){
var op_60481 = chunk__60432_60478.cljs$core$IIndexed$_nth$arity$2(null,i__60434_60480);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_60481,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));


var G__60482 = seq__60431_60477;
var G__60483 = chunk__60432_60478;
var G__60484 = count__60433_60479;
var G__60485 = (i__60434_60480 + (1));
seq__60431_60477 = G__60482;
chunk__60432_60478 = G__60483;
count__60433_60479 = G__60484;
i__60434_60480 = G__60485;
continue;
} else {
var temp__5804__auto___60486 = cljs.core.seq(seq__60431_60477);
if(temp__5804__auto___60486){
var seq__60431_60487__$1 = temp__5804__auto___60486;
if(cljs.core.chunked_seq_QMARK_(seq__60431_60487__$1)){
var c__5568__auto___60488 = cljs.core.chunk_first(seq__60431_60487__$1);
var G__60489 = cljs.core.chunk_rest(seq__60431_60487__$1);
var G__60490 = c__5568__auto___60488;
var G__60491 = cljs.core.count(c__5568__auto___60488);
var G__60492 = (0);
seq__60431_60477 = G__60489;
chunk__60432_60478 = G__60490;
count__60433_60479 = G__60491;
i__60434_60480 = G__60492;
continue;
} else {
var op_60493 = cljs.core.first(seq__60431_60487__$1);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_60493,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));


var G__60494 = cljs.core.next(seq__60431_60487__$1);
var G__60495 = null;
var G__60496 = (0);
var G__60497 = (0);
seq__60431_60477 = G__60494;
chunk__60432_60478 = G__60495;
count__60433_60479 = G__60496;
i__60434_60480 = G__60497;
continue;
}
} else {
}
}
break;
}
var seq__60436_60498 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"round","round",2009433328)], null));
var chunk__60437_60499 = null;
var count__60438_60500 = (0);
var i__60439_60501 = (0);
while(true){
if((i__60439_60501 < count__60438_60500)){
var op_60503 = chunk__60437_60499.cljs$core$IIndexed$_nth$arity$2(null,i__60439_60501);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_60503,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));


var G__60504 = seq__60436_60498;
var G__60505 = chunk__60437_60499;
var G__60506 = count__60438_60500;
var G__60507 = (i__60439_60501 + (1));
seq__60436_60498 = G__60504;
chunk__60437_60499 = G__60505;
count__60438_60500 = G__60506;
i__60439_60501 = G__60507;
continue;
} else {
var temp__5804__auto___60508 = cljs.core.seq(seq__60436_60498);
if(temp__5804__auto___60508){
var seq__60436_60509__$1 = temp__5804__auto___60508;
if(cljs.core.chunked_seq_QMARK_(seq__60436_60509__$1)){
var c__5568__auto___60510 = cljs.core.chunk_first(seq__60436_60509__$1);
var G__60511 = cljs.core.chunk_rest(seq__60436_60509__$1);
var G__60512 = c__5568__auto___60510;
var G__60513 = cljs.core.count(c__5568__auto___60510);
var G__60514 = (0);
seq__60436_60498 = G__60511;
chunk__60437_60499 = G__60512;
count__60438_60500 = G__60513;
i__60439_60501 = G__60514;
continue;
} else {
var op_60515 = cljs.core.first(seq__60436_60509__$1);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_60515,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));


var G__60516 = cljs.core.next(seq__60436_60509__$1);
var G__60517 = null;
var G__60518 = (0);
var G__60519 = (0);
seq__60436_60498 = G__60516;
chunk__60437_60499 = G__60517;
count__60438_60500 = G__60518;
i__60439_60501 = G__60519;
continue;
}
} else {
}
}
break;
}
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"power","power",-937852079),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"power","power",-937852079),(function (p__60443){
var vec__60444 = p__60443;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60444,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60444,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60444,(2),null);
var exponent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60444,(3),null);
if(((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of(expr),new cljs.core.Keyword("type","Integer","type/Integer",-638928316))) && (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of(exponent),new cljs.core.Keyword("type","Integer","type/Integer",-638928316))))){
return new cljs.core.Keyword("type","Integer","type/Integer",-638928316);
} else {
return new cljs.core.Keyword("type","Float","type/Float",1261800143);
}
}));
Object.defineProperty(module.exports, "valid_interval_for_type_QMARK_", { enumerable: false, get: function() { return metabase.lib.schema.expression.arithmetic.valid_interval_for_type_QMARK_; } });
Object.defineProperty(module.exports, "validate_plus_minus_temporal_arithmetic_expression", { enumerable: false, get: function() { return metabase.lib.schema.expression.arithmetic.validate_plus_minus_temporal_arithmetic_expression; } });
Object.defineProperty(module.exports, "plus_minus_temporal_schema", { enumerable: false, get: function() { return metabase.lib.schema.expression.arithmetic.plus_minus_temporal_schema; } });
Object.defineProperty(module.exports, "plus_minus_numeric_schema", { enumerable: false, get: function() { return metabase.lib.schema.expression.arithmetic.plus_minus_numeric_schema; } });
Object.defineProperty(module.exports, "plus_minus_schema", { enumerable: false, get: function() { return metabase.lib.schema.expression.arithmetic.plus_minus_schema; } });
Object.defineProperty(module.exports, "type_of_numeric_arithmetic_args", { enumerable: false, get: function() { return metabase.lib.schema.expression.arithmetic.type_of_numeric_arithmetic_args; } });
Object.defineProperty(module.exports, "type_of_temporal_arithmetic_args", { enumerable: false, get: function() { return metabase.lib.schema.expression.arithmetic.type_of_temporal_arithmetic_args; } });
Object.defineProperty(module.exports, "type_of_arithmetic_args", { enumerable: false, get: function() { return metabase.lib.schema.expression.arithmetic.type_of_arithmetic_args; } });
//# sourceMappingURL=metabase.lib.schema.expression.arithmetic.js.map
