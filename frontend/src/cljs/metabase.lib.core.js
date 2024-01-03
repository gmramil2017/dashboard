var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.binning.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.card.js");
require("./metabase.lib.column_group.js");
require("./metabase.lib.common.js");
require("./metabase.lib.database.js");
require("./metabase.lib.expression.js");
require("./metabase.lib.field.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.join.js");
require("./metabase.lib.limit.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.metric.js");
require("./metabase.lib.native.js");
require("./metabase.lib.normalize.js");
require("./metabase.lib.order_by.js");
require("./metabase.lib.query.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.remove_replace.js");
require("./metabase.lib.segment.js");
require("./metabase.lib.stage.js");
require("./metabase.lib.table.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.shared.util.namespaces.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.core.js");

goog.provide('metabase.lib.core');
/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregate = (function() { 
var metabase$lib$core$aggregate__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregate,args__52718__auto__);
};
var metabase$lib$core$aggregate = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81751__i = 0, G__81751__a = new Array(arguments.length -  0);
while (G__81751__i < G__81751__a.length) {G__81751__a[G__81751__i] = arguments[G__81751__i + 0]; ++G__81751__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81751__a,0,null);
} 
return metabase$lib$core$aggregate__delegate.call(this,args__52718__auto__);};
metabase$lib$core$aggregate.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregate.cljs$lang$applyTo = (function (arglist__81752){
var args__52718__auto__ = cljs.core.seq(arglist__81752);
return metabase$lib$core$aggregate__delegate(args__52718__auto__);
});
metabase$lib$core$aggregate.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregate__delegate;
return metabase$lib$core$aggregate;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregation_clause = (function() { 
var metabase$lib$core$aggregation_clause__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregation_clause,args__52718__auto__);
};
var metabase$lib$core$aggregation_clause = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81753__i = 0, G__81753__a = new Array(arguments.length -  0);
while (G__81753__i < G__81753__a.length) {G__81753__a[G__81753__i] = arguments[G__81753__i + 0]; ++G__81753__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81753__a,0,null);
} 
return metabase$lib$core$aggregation_clause__delegate.call(this,args__52718__auto__);};
metabase$lib$core$aggregation_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregation_clause.cljs$lang$applyTo = (function (arglist__81754){
var args__52718__auto__ = cljs.core.seq(arglist__81754);
return metabase$lib$core$aggregation_clause__delegate(args__52718__auto__);
});
metabase$lib$core$aggregation_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregation_clause__delegate;
return metabase$lib$core$aggregation_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregation_ref = (function() { 
var metabase$lib$core$aggregation_ref__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregation_ref,args__52718__auto__);
};
var metabase$lib$core$aggregation_ref = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81755__i = 0, G__81755__a = new Array(arguments.length -  0);
while (G__81755__i < G__81755__a.length) {G__81755__a[G__81755__i] = arguments[G__81755__i + 0]; ++G__81755__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81755__a,0,null);
} 
return metabase$lib$core$aggregation_ref__delegate.call(this,args__52718__auto__);};
metabase$lib$core$aggregation_ref.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregation_ref.cljs$lang$applyTo = (function (arglist__81756){
var args__52718__auto__ = cljs.core.seq(arglist__81756);
return metabase$lib$core$aggregation_ref__delegate(args__52718__auto__);
});
metabase$lib$core$aggregation_ref.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregation_ref__delegate;
return metabase$lib$core$aggregation_ref;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregation_operator_columns = (function() { 
var metabase$lib$core$aggregation_operator_columns__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregation_operator_columns,args__52718__auto__);
};
var metabase$lib$core$aggregation_operator_columns = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81757__i = 0, G__81757__a = new Array(arguments.length -  0);
while (G__81757__i < G__81757__a.length) {G__81757__a[G__81757__i] = arguments[G__81757__i + 0]; ++G__81757__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81757__a,0,null);
} 
return metabase$lib$core$aggregation_operator_columns__delegate.call(this,args__52718__auto__);};
metabase$lib$core$aggregation_operator_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregation_operator_columns.cljs$lang$applyTo = (function (arglist__81758){
var args__52718__auto__ = cljs.core.seq(arglist__81758);
return metabase$lib$core$aggregation_operator_columns__delegate(args__52718__auto__);
});
metabase$lib$core$aggregation_operator_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregation_operator_columns__delegate;
return metabase$lib$core$aggregation_operator_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregations = (function() { 
var metabase$lib$core$aggregations__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregations,args__52718__auto__);
};
var metabase$lib$core$aggregations = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81760__i = 0, G__81760__a = new Array(arguments.length -  0);
while (G__81760__i < G__81760__a.length) {G__81760__a[G__81760__i] = arguments[G__81760__i + 0]; ++G__81760__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81760__a,0,null);
} 
return metabase$lib$core$aggregations__delegate.call(this,args__52718__auto__);};
metabase$lib$core$aggregations.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregations.cljs$lang$applyTo = (function (arglist__81761){
var args__52718__auto__ = cljs.core.seq(arglist__81761);
return metabase$lib$core$aggregations__delegate(args__52718__auto__);
});
metabase$lib$core$aggregations.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregations__delegate;
return metabase$lib$core$aggregations;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregations_metadata = (function() { 
var metabase$lib$core$aggregations_metadata__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregations_metadata,args__52718__auto__);
};
var metabase$lib$core$aggregations_metadata = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81762__i = 0, G__81762__a = new Array(arguments.length -  0);
while (G__81762__i < G__81762__a.length) {G__81762__a[G__81762__i] = arguments[G__81762__i + 0]; ++G__81762__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81762__a,0,null);
} 
return metabase$lib$core$aggregations_metadata__delegate.call(this,args__52718__auto__);};
metabase$lib$core$aggregations_metadata.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregations_metadata.cljs$lang$applyTo = (function (arglist__81763){
var args__52718__auto__ = cljs.core.seq(arglist__81763);
return metabase$lib$core$aggregations_metadata__delegate(args__52718__auto__);
});
metabase$lib$core$aggregations_metadata.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregations_metadata__delegate;
return metabase$lib$core$aggregations_metadata;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_aggregation_operators = (function() { 
var metabase$lib$core$available_aggregation_operators__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.available_aggregation_operators,args__52718__auto__);
};
var metabase$lib$core$available_aggregation_operators = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81764__i = 0, G__81764__a = new Array(arguments.length -  0);
while (G__81764__i < G__81764__a.length) {G__81764__a[G__81764__i] = arguments[G__81764__i + 0]; ++G__81764__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81764__a,0,null);
} 
return metabase$lib$core$available_aggregation_operators__delegate.call(this,args__52718__auto__);};
metabase$lib$core$available_aggregation_operators.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_aggregation_operators.cljs$lang$applyTo = (function (arglist__81765){
var args__52718__auto__ = cljs.core.seq(arglist__81765);
return metabase$lib$core$available_aggregation_operators__delegate(args__52718__auto__);
});
metabase$lib$core$available_aggregation_operators.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_aggregation_operators__delegate;
return metabase$lib$core$available_aggregation_operators;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.selected_aggregation_operators = (function() { 
var metabase$lib$core$selected_aggregation_operators__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.selected_aggregation_operators,args__52718__auto__);
};
var metabase$lib$core$selected_aggregation_operators = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81766__i = 0, G__81766__a = new Array(arguments.length -  0);
while (G__81766__i < G__81766__a.length) {G__81766__a[G__81766__i] = arguments[G__81766__i + 0]; ++G__81766__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81766__a,0,null);
} 
return metabase$lib$core$selected_aggregation_operators__delegate.call(this,args__52718__auto__);};
metabase$lib$core$selected_aggregation_operators.cljs$lang$maxFixedArity = 0;
metabase$lib$core$selected_aggregation_operators.cljs$lang$applyTo = (function (arglist__81767){
var args__52718__auto__ = cljs.core.seq(arglist__81767);
return metabase$lib$core$selected_aggregation_operators__delegate(args__52718__auto__);
});
metabase$lib$core$selected_aggregation_operators.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$selected_aggregation_operators__delegate;
return metabase$lib$core$selected_aggregation_operators;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.count = (function() { 
var metabase$lib$core$count__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.count,args__52718__auto__);
};
var metabase$lib$core$count = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81768__i = 0, G__81768__a = new Array(arguments.length -  0);
while (G__81768__i < G__81768__a.length) {G__81768__a[G__81768__i] = arguments[G__81768__i + 0]; ++G__81768__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81768__a,0,null);
} 
return metabase$lib$core$count__delegate.call(this,args__52718__auto__);};
metabase$lib$core$count.cljs$lang$maxFixedArity = 0;
metabase$lib$core$count.cljs$lang$applyTo = (function (arglist__81769){
var args__52718__auto__ = cljs.core.seq(arglist__81769);
return metabase$lib$core$count__delegate(args__52718__auto__);
});
metabase$lib$core$count.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$count__delegate;
return metabase$lib$core$count;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.avg = (function() { 
var metabase$lib$core$avg__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.avg,args__52718__auto__);
};
var metabase$lib$core$avg = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81770__i = 0, G__81770__a = new Array(arguments.length -  0);
while (G__81770__i < G__81770__a.length) {G__81770__a[G__81770__i] = arguments[G__81770__i + 0]; ++G__81770__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81770__a,0,null);
} 
return metabase$lib$core$avg__delegate.call(this,args__52718__auto__);};
metabase$lib$core$avg.cljs$lang$maxFixedArity = 0;
metabase$lib$core$avg.cljs$lang$applyTo = (function (arglist__81771){
var args__52718__auto__ = cljs.core.seq(arglist__81771);
return metabase$lib$core$avg__delegate(args__52718__auto__);
});
metabase$lib$core$avg.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$avg__delegate;
return metabase$lib$core$avg;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.count_where = (function() { 
var metabase$lib$core$count_where__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.count_where,args__52718__auto__);
};
var metabase$lib$core$count_where = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81772__i = 0, G__81772__a = new Array(arguments.length -  0);
while (G__81772__i < G__81772__a.length) {G__81772__a[G__81772__i] = arguments[G__81772__i + 0]; ++G__81772__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81772__a,0,null);
} 
return metabase$lib$core$count_where__delegate.call(this,args__52718__auto__);};
metabase$lib$core$count_where.cljs$lang$maxFixedArity = 0;
metabase$lib$core$count_where.cljs$lang$applyTo = (function (arglist__81773){
var args__52718__auto__ = cljs.core.seq(arglist__81773);
return metabase$lib$core$count_where__delegate(args__52718__auto__);
});
metabase$lib$core$count_where.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$count_where__delegate;
return metabase$lib$core$count_where;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.distinct = (function() { 
var metabase$lib$core$distinct__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.distinct,args__52718__auto__);
};
var metabase$lib$core$distinct = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81774__i = 0, G__81774__a = new Array(arguments.length -  0);
while (G__81774__i < G__81774__a.length) {G__81774__a[G__81774__i] = arguments[G__81774__i + 0]; ++G__81774__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81774__a,0,null);
} 
return metabase$lib$core$distinct__delegate.call(this,args__52718__auto__);};
metabase$lib$core$distinct.cljs$lang$maxFixedArity = 0;
metabase$lib$core$distinct.cljs$lang$applyTo = (function (arglist__81775){
var args__52718__auto__ = cljs.core.seq(arglist__81775);
return metabase$lib$core$distinct__delegate(args__52718__auto__);
});
metabase$lib$core$distinct.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$distinct__delegate;
return metabase$lib$core$distinct;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.max = (function() { 
var metabase$lib$core$max__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.max,args__52718__auto__);
};
var metabase$lib$core$max = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81776__i = 0, G__81776__a = new Array(arguments.length -  0);
while (G__81776__i < G__81776__a.length) {G__81776__a[G__81776__i] = arguments[G__81776__i + 0]; ++G__81776__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81776__a,0,null);
} 
return metabase$lib$core$max__delegate.call(this,args__52718__auto__);};
metabase$lib$core$max.cljs$lang$maxFixedArity = 0;
metabase$lib$core$max.cljs$lang$applyTo = (function (arglist__81777){
var args__52718__auto__ = cljs.core.seq(arglist__81777);
return metabase$lib$core$max__delegate(args__52718__auto__);
});
metabase$lib$core$max.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$max__delegate;
return metabase$lib$core$max;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.median = (function() { 
var metabase$lib$core$median__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.median,args__52718__auto__);
};
var metabase$lib$core$median = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81783__i = 0, G__81783__a = new Array(arguments.length -  0);
while (G__81783__i < G__81783__a.length) {G__81783__a[G__81783__i] = arguments[G__81783__i + 0]; ++G__81783__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81783__a,0,null);
} 
return metabase$lib$core$median__delegate.call(this,args__52718__auto__);};
metabase$lib$core$median.cljs$lang$maxFixedArity = 0;
metabase$lib$core$median.cljs$lang$applyTo = (function (arglist__81784){
var args__52718__auto__ = cljs.core.seq(arglist__81784);
return metabase$lib$core$median__delegate(args__52718__auto__);
});
metabase$lib$core$median.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$median__delegate;
return metabase$lib$core$median;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.min = (function() { 
var metabase$lib$core$min__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.min,args__52718__auto__);
};
var metabase$lib$core$min = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81785__i = 0, G__81785__a = new Array(arguments.length -  0);
while (G__81785__i < G__81785__a.length) {G__81785__a[G__81785__i] = arguments[G__81785__i + 0]; ++G__81785__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81785__a,0,null);
} 
return metabase$lib$core$min__delegate.call(this,args__52718__auto__);};
metabase$lib$core$min.cljs$lang$maxFixedArity = 0;
metabase$lib$core$min.cljs$lang$applyTo = (function (arglist__81786){
var args__52718__auto__ = cljs.core.seq(arglist__81786);
return metabase$lib$core$min__delegate(args__52718__auto__);
});
metabase$lib$core$min.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$min__delegate;
return metabase$lib$core$min;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.percentile = (function() { 
var metabase$lib$core$percentile__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.percentile,args__52718__auto__);
};
var metabase$lib$core$percentile = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81787__i = 0, G__81787__a = new Array(arguments.length -  0);
while (G__81787__i < G__81787__a.length) {G__81787__a[G__81787__i] = arguments[G__81787__i + 0]; ++G__81787__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81787__a,0,null);
} 
return metabase$lib$core$percentile__delegate.call(this,args__52718__auto__);};
metabase$lib$core$percentile.cljs$lang$maxFixedArity = 0;
metabase$lib$core$percentile.cljs$lang$applyTo = (function (arglist__81788){
var args__52718__auto__ = cljs.core.seq(arglist__81788);
return metabase$lib$core$percentile__delegate(args__52718__auto__);
});
metabase$lib$core$percentile.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$percentile__delegate;
return metabase$lib$core$percentile;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.share = (function() { 
var metabase$lib$core$share__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.share,args__52718__auto__);
};
var metabase$lib$core$share = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81790__i = 0, G__81790__a = new Array(arguments.length -  0);
while (G__81790__i < G__81790__a.length) {G__81790__a[G__81790__i] = arguments[G__81790__i + 0]; ++G__81790__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81790__a,0,null);
} 
return metabase$lib$core$share__delegate.call(this,args__52718__auto__);};
metabase$lib$core$share.cljs$lang$maxFixedArity = 0;
metabase$lib$core$share.cljs$lang$applyTo = (function (arglist__81791){
var args__52718__auto__ = cljs.core.seq(arglist__81791);
return metabase$lib$core$share__delegate(args__52718__auto__);
});
metabase$lib$core$share.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$share__delegate;
return metabase$lib$core$share;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.stddev = (function() { 
var metabase$lib$core$stddev__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.stddev,args__52718__auto__);
};
var metabase$lib$core$stddev = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81792__i = 0, G__81792__a = new Array(arguments.length -  0);
while (G__81792__i < G__81792__a.length) {G__81792__a[G__81792__i] = arguments[G__81792__i + 0]; ++G__81792__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81792__a,0,null);
} 
return metabase$lib$core$stddev__delegate.call(this,args__52718__auto__);};
metabase$lib$core$stddev.cljs$lang$maxFixedArity = 0;
metabase$lib$core$stddev.cljs$lang$applyTo = (function (arglist__81793){
var args__52718__auto__ = cljs.core.seq(arglist__81793);
return metabase$lib$core$stddev__delegate(args__52718__auto__);
});
metabase$lib$core$stddev.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$stddev__delegate;
return metabase$lib$core$stddev;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.sum = (function() { 
var metabase$lib$core$sum__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.sum,args__52718__auto__);
};
var metabase$lib$core$sum = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81794__i = 0, G__81794__a = new Array(arguments.length -  0);
while (G__81794__i < G__81794__a.length) {G__81794__a[G__81794__i] = arguments[G__81794__i + 0]; ++G__81794__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81794__a,0,null);
} 
return metabase$lib$core$sum__delegate.call(this,args__52718__auto__);};
metabase$lib$core$sum.cljs$lang$maxFixedArity = 0;
metabase$lib$core$sum.cljs$lang$applyTo = (function (arglist__81795){
var args__52718__auto__ = cljs.core.seq(arglist__81795);
return metabase$lib$core$sum__delegate(args__52718__auto__);
});
metabase$lib$core$sum.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$sum__delegate;
return metabase$lib$core$sum;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.sum_where = (function() { 
var metabase$lib$core$sum_where__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.sum_where,args__52718__auto__);
};
var metabase$lib$core$sum_where = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81796__i = 0, G__81796__a = new Array(arguments.length -  0);
while (G__81796__i < G__81796__a.length) {G__81796__a[G__81796__i] = arguments[G__81796__i + 0]; ++G__81796__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81796__a,0,null);
} 
return metabase$lib$core$sum_where__delegate.call(this,args__52718__auto__);};
metabase$lib$core$sum_where.cljs$lang$maxFixedArity = 0;
metabase$lib$core$sum_where.cljs$lang$applyTo = (function (arglist__81797){
var args__52718__auto__ = cljs.core.seq(arglist__81797);
return metabase$lib$core$sum_where__delegate(args__52718__auto__);
});
metabase$lib$core$sum_where.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$sum_where__delegate;
return metabase$lib$core$sum_where;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.var$ = (function() { 
var metabase$lib$core$var__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.var$,args__52718__auto__);
};
var metabase$lib$core$var = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81798__i = 0, G__81798__a = new Array(arguments.length -  0);
while (G__81798__i < G__81798__a.length) {G__81798__a[G__81798__i] = arguments[G__81798__i + 0]; ++G__81798__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81798__a,0,null);
} 
return metabase$lib$core$var__delegate.call(this,args__52718__auto__);};
metabase$lib$core$var.cljs$lang$maxFixedArity = 0;
metabase$lib$core$var.cljs$lang$applyTo = (function (arglist__81799){
var args__52718__auto__ = cljs.core.seq(arglist__81799);
return metabase$lib$core$var__delegate(args__52718__auto__);
});
metabase$lib$core$var.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$var__delegate;
return metabase$lib$core$var;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.cum_count = (function() { 
var metabase$lib$core$cum_count__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.cum_count,args__52718__auto__);
};
var metabase$lib$core$cum_count = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81800__i = 0, G__81800__a = new Array(arguments.length -  0);
while (G__81800__i < G__81800__a.length) {G__81800__a[G__81800__i] = arguments[G__81800__i + 0]; ++G__81800__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81800__a,0,null);
} 
return metabase$lib$core$cum_count__delegate.call(this,args__52718__auto__);};
metabase$lib$core$cum_count.cljs$lang$maxFixedArity = 0;
metabase$lib$core$cum_count.cljs$lang$applyTo = (function (arglist__81801){
var args__52718__auto__ = cljs.core.seq(arglist__81801);
return metabase$lib$core$cum_count__delegate(args__52718__auto__);
});
metabase$lib$core$cum_count.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$cum_count__delegate;
return metabase$lib$core$cum_count;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.cum_sum = (function() { 
var metabase$lib$core$cum_sum__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.cum_sum,args__52718__auto__);
};
var metabase$lib$core$cum_sum = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81802__i = 0, G__81802__a = new Array(arguments.length -  0);
while (G__81802__i < G__81802__a.length) {G__81802__a[G__81802__i] = arguments[G__81802__i + 0]; ++G__81802__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81802__a,0,null);
} 
return metabase$lib$core$cum_sum__delegate.call(this,args__52718__auto__);};
metabase$lib$core$cum_sum.cljs$lang$maxFixedArity = 0;
metabase$lib$core$cum_sum.cljs$lang$applyTo = (function (arglist__81803){
var args__52718__auto__ = cljs.core.seq(arglist__81803);
return metabase$lib$core$cum_sum__delegate(args__52718__auto__);
});
metabase$lib$core$cum_sum.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$cum_sum__delegate;
return metabase$lib$core$cum_sum;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_binning_strategies = (function() { 
var metabase$lib$core$available_binning_strategies__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.binning.available_binning_strategies,args__52718__auto__);
};
var metabase$lib$core$available_binning_strategies = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81804__i = 0, G__81804__a = new Array(arguments.length -  0);
while (G__81804__i < G__81804__a.length) {G__81804__a[G__81804__i] = arguments[G__81804__i + 0]; ++G__81804__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81804__a,0,null);
} 
return metabase$lib$core$available_binning_strategies__delegate.call(this,args__52718__auto__);};
metabase$lib$core$available_binning_strategies.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_binning_strategies.cljs$lang$applyTo = (function (arglist__81805){
var args__52718__auto__ = cljs.core.seq(arglist__81805);
return metabase$lib$core$available_binning_strategies__delegate(args__52718__auto__);
});
metabase$lib$core$available_binning_strategies.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_binning_strategies__delegate;
return metabase$lib$core$available_binning_strategies;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.binning = (function() { 
var metabase$lib$core$binning__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.binning.binning,args__52718__auto__);
};
var metabase$lib$core$binning = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81806__i = 0, G__81806__a = new Array(arguments.length -  0);
while (G__81806__i < G__81806__a.length) {G__81806__a[G__81806__i] = arguments[G__81806__i + 0]; ++G__81806__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81806__a,0,null);
} 
return metabase$lib$core$binning__delegate.call(this,args__52718__auto__);};
metabase$lib$core$binning.cljs$lang$maxFixedArity = 0;
metabase$lib$core$binning.cljs$lang$applyTo = (function (arglist__81807){
var args__52718__auto__ = cljs.core.seq(arglist__81807);
return metabase$lib$core$binning__delegate(args__52718__auto__);
});
metabase$lib$core$binning.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$binning__delegate;
return metabase$lib$core$binning;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_binning = (function() { 
var metabase$lib$core$with_binning__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.binning.with_binning,args__52718__auto__);
};
var metabase$lib$core$with_binning = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81808__i = 0, G__81808__a = new Array(arguments.length -  0);
while (G__81808__i < G__81808__a.length) {G__81808__a[G__81808__i] = arguments[G__81808__i + 0]; ++G__81808__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81808__a,0,null);
} 
return metabase$lib$core$with_binning__delegate.call(this,args__52718__auto__);};
metabase$lib$core$with_binning.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_binning.cljs$lang$applyTo = (function (arglist__81809){
var args__52718__auto__ = cljs.core.seq(arglist__81809);
return metabase$lib$core$with_binning__delegate(args__52718__auto__);
});
metabase$lib$core$with_binning.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_binning__delegate;
return metabase$lib$core$with_binning;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.breakout = (function() { 
var metabase$lib$core$breakout__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.breakout.breakout,args__52718__auto__);
};
var metabase$lib$core$breakout = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81810__i = 0, G__81810__a = new Array(arguments.length -  0);
while (G__81810__i < G__81810__a.length) {G__81810__a[G__81810__i] = arguments[G__81810__i + 0]; ++G__81810__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81810__a,0,null);
} 
return metabase$lib$core$breakout__delegate.call(this,args__52718__auto__);};
metabase$lib$core$breakout.cljs$lang$maxFixedArity = 0;
metabase$lib$core$breakout.cljs$lang$applyTo = (function (arglist__81811){
var args__52718__auto__ = cljs.core.seq(arglist__81811);
return metabase$lib$core$breakout__delegate(args__52718__auto__);
});
metabase$lib$core$breakout.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$breakout__delegate;
return metabase$lib$core$breakout;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.breakoutable_columns = (function() { 
var metabase$lib$core$breakoutable_columns__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.breakout.breakoutable_columns,args__52718__auto__);
};
var metabase$lib$core$breakoutable_columns = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81813__i = 0, G__81813__a = new Array(arguments.length -  0);
while (G__81813__i < G__81813__a.length) {G__81813__a[G__81813__i] = arguments[G__81813__i + 0]; ++G__81813__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81813__a,0,null);
} 
return metabase$lib$core$breakoutable_columns__delegate.call(this,args__52718__auto__);};
metabase$lib$core$breakoutable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$breakoutable_columns.cljs$lang$applyTo = (function (arglist__81814){
var args__52718__auto__ = cljs.core.seq(arglist__81814);
return metabase$lib$core$breakoutable_columns__delegate(args__52718__auto__);
});
metabase$lib$core$breakoutable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$breakoutable_columns__delegate;
return metabase$lib$core$breakoutable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.breakouts = (function() { 
var metabase$lib$core$breakouts__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.breakout.breakouts,args__52718__auto__);
};
var metabase$lib$core$breakouts = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81816__i = 0, G__81816__a = new Array(arguments.length -  0);
while (G__81816__i < G__81816__a.length) {G__81816__a[G__81816__i] = arguments[G__81816__i + 0]; ++G__81816__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81816__a,0,null);
} 
return metabase$lib$core$breakouts__delegate.call(this,args__52718__auto__);};
metabase$lib$core$breakouts.cljs$lang$maxFixedArity = 0;
metabase$lib$core$breakouts.cljs$lang$applyTo = (function (arglist__81817){
var args__52718__auto__ = cljs.core.seq(arglist__81817);
return metabase$lib$core$breakouts__delegate(args__52718__auto__);
});
metabase$lib$core$breakouts.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$breakouts__delegate;
return metabase$lib$core$breakouts;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.breakouts_metadata = (function() { 
var metabase$lib$core$breakouts_metadata__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.breakout.breakouts_metadata,args__52718__auto__);
};
var metabase$lib$core$breakouts_metadata = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81818__i = 0, G__81818__a = new Array(arguments.length -  0);
while (G__81818__i < G__81818__a.length) {G__81818__a[G__81818__i] = arguments[G__81818__i + 0]; ++G__81818__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81818__a,0,null);
} 
return metabase$lib$core$breakouts_metadata__delegate.call(this,args__52718__auto__);};
metabase$lib$core$breakouts_metadata.cljs$lang$maxFixedArity = 0;
metabase$lib$core$breakouts_metadata.cljs$lang$applyTo = (function (arglist__81819){
var args__52718__auto__ = cljs.core.seq(arglist__81819);
return metabase$lib$core$breakouts_metadata__delegate(args__52718__auto__);
});
metabase$lib$core$breakouts_metadata.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$breakouts_metadata__delegate;
return metabase$lib$core$breakouts_metadata;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.columns_group_columns = (function() { 
var metabase$lib$core$columns_group_columns__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.column_group.columns_group_columns,args__52718__auto__);
};
var metabase$lib$core$columns_group_columns = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81820__i = 0, G__81820__a = new Array(arguments.length -  0);
while (G__81820__i < G__81820__a.length) {G__81820__a[G__81820__i] = arguments[G__81820__i + 0]; ++G__81820__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81820__a,0,null);
} 
return metabase$lib$core$columns_group_columns__delegate.call(this,args__52718__auto__);};
metabase$lib$core$columns_group_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$columns_group_columns.cljs$lang$applyTo = (function (arglist__81821){
var args__52718__auto__ = cljs.core.seq(arglist__81821);
return metabase$lib$core$columns_group_columns__delegate(args__52718__auto__);
});
metabase$lib$core$columns_group_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$columns_group_columns__delegate;
return metabase$lib$core$columns_group_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.group_columns = (function() { 
var metabase$lib$core$group_columns__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.column_group.group_columns,args__52718__auto__);
};
var metabase$lib$core$group_columns = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81822__i = 0, G__81822__a = new Array(arguments.length -  0);
while (G__81822__i < G__81822__a.length) {G__81822__a[G__81822__i] = arguments[G__81822__i + 0]; ++G__81822__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81822__a,0,null);
} 
return metabase$lib$core$group_columns__delegate.call(this,args__52718__auto__);};
metabase$lib$core$group_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$group_columns.cljs$lang$applyTo = (function (arglist__81823){
var args__52718__auto__ = cljs.core.seq(arglist__81823);
return metabase$lib$core$group_columns__delegate(args__52718__auto__);
});
metabase$lib$core$group_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$group_columns__delegate;
return metabase$lib$core$group_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.external_op = (function() { 
var metabase$lib$core$external_op__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.common.external_op,args__52718__auto__);
};
var metabase$lib$core$external_op = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81824__i = 0, G__81824__a = new Array(arguments.length -  0);
while (G__81824__i < G__81824__a.length) {G__81824__a[G__81824__i] = arguments[G__81824__i + 0]; ++G__81824__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81824__a,0,null);
} 
return metabase$lib$core$external_op__delegate.call(this,args__52718__auto__);};
metabase$lib$core$external_op.cljs$lang$maxFixedArity = 0;
metabase$lib$core$external_op.cljs$lang$applyTo = (function (arglist__81825){
var args__52718__auto__ = cljs.core.seq(arglist__81825);
return metabase$lib$core$external_op__delegate(args__52718__auto__);
});
metabase$lib$core$external_op.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$external_op__delegate;
return metabase$lib$core$external_op;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.database_id = (function() { 
var metabase$lib$core$database_id__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.database.database_id,args__52718__auto__);
};
var metabase$lib$core$database_id = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81826__i = 0, G__81826__a = new Array(arguments.length -  0);
while (G__81826__i < G__81826__a.length) {G__81826__a[G__81826__i] = arguments[G__81826__i + 0]; ++G__81826__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81826__a,0,null);
} 
return metabase$lib$core$database_id__delegate.call(this,args__52718__auto__);};
metabase$lib$core$database_id.cljs$lang$maxFixedArity = 0;
metabase$lib$core$database_id.cljs$lang$applyTo = (function (arglist__81827){
var args__52718__auto__ = cljs.core.seq(arglist__81827);
return metabase$lib$core$database_id__delegate(args__52718__auto__);
});
metabase$lib$core$database_id.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$database_id__delegate;
return metabase$lib$core$database_id;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expression = (function() { 
var metabase$lib$core$expression__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.expression,args__52718__auto__);
};
var metabase$lib$core$expression = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81828__i = 0, G__81828__a = new Array(arguments.length -  0);
while (G__81828__i < G__81828__a.length) {G__81828__a[G__81828__i] = arguments[G__81828__i + 0]; ++G__81828__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81828__a,0,null);
} 
return metabase$lib$core$expression__delegate.call(this,args__52718__auto__);};
metabase$lib$core$expression.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expression.cljs$lang$applyTo = (function (arglist__81829){
var args__52718__auto__ = cljs.core.seq(arglist__81829);
return metabase$lib$core$expression__delegate(args__52718__auto__);
});
metabase$lib$core$expression.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expression__delegate;
return metabase$lib$core$expression;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expressions = (function() { 
var metabase$lib$core$expressions__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.expressions,args__52718__auto__);
};
var metabase$lib$core$expressions = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81830__i = 0, G__81830__a = new Array(arguments.length -  0);
while (G__81830__i < G__81830__a.length) {G__81830__a[G__81830__i] = arguments[G__81830__i + 0]; ++G__81830__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81830__a,0,null);
} 
return metabase$lib$core$expressions__delegate.call(this,args__52718__auto__);};
metabase$lib$core$expressions.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expressions.cljs$lang$applyTo = (function (arglist__81831){
var args__52718__auto__ = cljs.core.seq(arglist__81831);
return metabase$lib$core$expressions__delegate(args__52718__auto__);
});
metabase$lib$core$expressions.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expressions__delegate;
return metabase$lib$core$expressions;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expressions_metadata = (function() { 
var metabase$lib$core$expressions_metadata__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.expressions_metadata,args__52718__auto__);
};
var metabase$lib$core$expressions_metadata = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81832__i = 0, G__81832__a = new Array(arguments.length -  0);
while (G__81832__i < G__81832__a.length) {G__81832__a[G__81832__i] = arguments[G__81832__i + 0]; ++G__81832__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81832__a,0,null);
} 
return metabase$lib$core$expressions_metadata__delegate.call(this,args__52718__auto__);};
metabase$lib$core$expressions_metadata.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expressions_metadata.cljs$lang$applyTo = (function (arglist__81833){
var args__52718__auto__ = cljs.core.seq(arglist__81833);
return metabase$lib$core$expressions_metadata__delegate(args__52718__auto__);
});
metabase$lib$core$expressions_metadata.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expressions_metadata__delegate;
return metabase$lib$core$expressions_metadata;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expressionable_columns = (function() { 
var metabase$lib$core$expressionable_columns__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.expressionable_columns,args__52718__auto__);
};
var metabase$lib$core$expressionable_columns = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81834__i = 0, G__81834__a = new Array(arguments.length -  0);
while (G__81834__i < G__81834__a.length) {G__81834__a[G__81834__i] = arguments[G__81834__i + 0]; ++G__81834__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81834__a,0,null);
} 
return metabase$lib$core$expressionable_columns__delegate.call(this,args__52718__auto__);};
metabase$lib$core$expressionable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expressionable_columns.cljs$lang$applyTo = (function (arglist__81835){
var args__52718__auto__ = cljs.core.seq(arglist__81835);
return metabase$lib$core$expressionable_columns__delegate(args__52718__auto__);
});
metabase$lib$core$expressionable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expressionable_columns__delegate;
return metabase$lib$core$expressionable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expression_ref = (function() { 
var metabase$lib$core$expression_ref__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.expression_ref,args__52718__auto__);
};
var metabase$lib$core$expression_ref = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81836__i = 0, G__81836__a = new Array(arguments.length -  0);
while (G__81836__i < G__81836__a.length) {G__81836__a[G__81836__i] = arguments[G__81836__i + 0]; ++G__81836__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81836__a,0,null);
} 
return metabase$lib$core$expression_ref__delegate.call(this,args__52718__auto__);};
metabase$lib$core$expression_ref.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expression_ref.cljs$lang$applyTo = (function (arglist__81837){
var args__52718__auto__ = cljs.core.seq(arglist__81837);
return metabase$lib$core$expression_ref__delegate(args__52718__auto__);
});
metabase$lib$core$expression_ref.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expression_ref__delegate;
return metabase$lib$core$expression_ref;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._PLUS_ = (function() { 
var metabase$lib$core$_PLUS___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression._PLUS_,args__52718__auto__);
};
var metabase$lib$core$_PLUS_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81838__i = 0, G__81838__a = new Array(arguments.length -  0);
while (G__81838__i < G__81838__a.length) {G__81838__a[G__81838__i] = arguments[G__81838__i + 0]; ++G__81838__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81838__a,0,null);
} 
return metabase$lib$core$_PLUS___delegate.call(this,args__52718__auto__);};
metabase$lib$core$_PLUS_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_PLUS_.cljs$lang$applyTo = (function (arglist__81839){
var args__52718__auto__ = cljs.core.seq(arglist__81839);
return metabase$lib$core$_PLUS___delegate(args__52718__auto__);
});
metabase$lib$core$_PLUS_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_PLUS___delegate;
return metabase$lib$core$_PLUS_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._ = (function() { 
var metabase$lib$core$___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression._,args__52718__auto__);
};
var metabase$lib$core$_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81840__i = 0, G__81840__a = new Array(arguments.length -  0);
while (G__81840__i < G__81840__a.length) {G__81840__a[G__81840__i] = arguments[G__81840__i + 0]; ++G__81840__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81840__a,0,null);
} 
return metabase$lib$core$___delegate.call(this,args__52718__auto__);};
metabase$lib$core$_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_.cljs$lang$applyTo = (function (arglist__81841){
var args__52718__auto__ = cljs.core.seq(arglist__81841);
return metabase$lib$core$___delegate(args__52718__auto__);
});
metabase$lib$core$_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$___delegate;
return metabase$lib$core$_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._STAR_ = (function() { 
var metabase$lib$core$_STAR___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression._STAR_,args__52718__auto__);
};
var metabase$lib$core$_STAR_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81842__i = 0, G__81842__a = new Array(arguments.length -  0);
while (G__81842__i < G__81842__a.length) {G__81842__a[G__81842__i] = arguments[G__81842__i + 0]; ++G__81842__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81842__a,0,null);
} 
return metabase$lib$core$_STAR___delegate.call(this,args__52718__auto__);};
metabase$lib$core$_STAR_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_STAR_.cljs$lang$applyTo = (function (arglist__81843){
var args__52718__auto__ = cljs.core.seq(arglist__81843);
return metabase$lib$core$_STAR___delegate(args__52718__auto__);
});
metabase$lib$core$_STAR_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_STAR___delegate;
return metabase$lib$core$_STAR_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._SLASH_ = (function() { 
var metabase$lib$core$_SLASH___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression._SLASH_,args__52718__auto__);
};
var metabase$lib$core$_SLASH_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81844__i = 0, G__81844__a = new Array(arguments.length -  0);
while (G__81844__i < G__81844__a.length) {G__81844__a[G__81844__i] = arguments[G__81844__i + 0]; ++G__81844__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81844__a,0,null);
} 
return metabase$lib$core$_SLASH___delegate.call(this,args__52718__auto__);};
metabase$lib$core$_SLASH_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_SLASH_.cljs$lang$applyTo = (function (arglist__81845){
var args__52718__auto__ = cljs.core.seq(arglist__81845);
return metabase$lib$core$_SLASH___delegate(args__52718__auto__);
});
metabase$lib$core$_SLASH_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_SLASH___delegate;
return metabase$lib$core$_SLASH_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.case$ = (function() { 
var metabase$lib$core$case__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.case$,args__52718__auto__);
};
var metabase$lib$core$case = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81846__i = 0, G__81846__a = new Array(arguments.length -  0);
while (G__81846__i < G__81846__a.length) {G__81846__a[G__81846__i] = arguments[G__81846__i + 0]; ++G__81846__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81846__a,0,null);
} 
return metabase$lib$core$case__delegate.call(this,args__52718__auto__);};
metabase$lib$core$case.cljs$lang$maxFixedArity = 0;
metabase$lib$core$case.cljs$lang$applyTo = (function (arglist__81847){
var args__52718__auto__ = cljs.core.seq(arglist__81847);
return metabase$lib$core$case__delegate(args__52718__auto__);
});
metabase$lib$core$case.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$case__delegate;
return metabase$lib$core$case;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.coalesce = (function() { 
var metabase$lib$core$coalesce__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.coalesce,args__52718__auto__);
};
var metabase$lib$core$coalesce = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81848__i = 0, G__81848__a = new Array(arguments.length -  0);
while (G__81848__i < G__81848__a.length) {G__81848__a[G__81848__i] = arguments[G__81848__i + 0]; ++G__81848__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81848__a,0,null);
} 
return metabase$lib$core$coalesce__delegate.call(this,args__52718__auto__);};
metabase$lib$core$coalesce.cljs$lang$maxFixedArity = 0;
metabase$lib$core$coalesce.cljs$lang$applyTo = (function (arglist__81849){
var args__52718__auto__ = cljs.core.seq(arglist__81849);
return metabase$lib$core$coalesce__delegate(args__52718__auto__);
});
metabase$lib$core$coalesce.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$coalesce__delegate;
return metabase$lib$core$coalesce;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.abs = (function() { 
var metabase$lib$core$abs__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.abs,args__52718__auto__);
};
var metabase$lib$core$abs = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81850__i = 0, G__81850__a = new Array(arguments.length -  0);
while (G__81850__i < G__81850__a.length) {G__81850__a[G__81850__i] = arguments[G__81850__i + 0]; ++G__81850__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81850__a,0,null);
} 
return metabase$lib$core$abs__delegate.call(this,args__52718__auto__);};
metabase$lib$core$abs.cljs$lang$maxFixedArity = 0;
metabase$lib$core$abs.cljs$lang$applyTo = (function (arglist__81851){
var args__52718__auto__ = cljs.core.seq(arglist__81851);
return metabase$lib$core$abs__delegate(args__52718__auto__);
});
metabase$lib$core$abs.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$abs__delegate;
return metabase$lib$core$abs;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.log = (function() { 
var metabase$lib$core$log__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.log,args__52718__auto__);
};
var metabase$lib$core$log = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81852__i = 0, G__81852__a = new Array(arguments.length -  0);
while (G__81852__i < G__81852__a.length) {G__81852__a[G__81852__i] = arguments[G__81852__i + 0]; ++G__81852__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81852__a,0,null);
} 
return metabase$lib$core$log__delegate.call(this,args__52718__auto__);};
metabase$lib$core$log.cljs$lang$maxFixedArity = 0;
metabase$lib$core$log.cljs$lang$applyTo = (function (arglist__81853){
var args__52718__auto__ = cljs.core.seq(arglist__81853);
return metabase$lib$core$log__delegate(args__52718__auto__);
});
metabase$lib$core$log.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$log__delegate;
return metabase$lib$core$log;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.exp = (function() { 
var metabase$lib$core$exp__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.exp,args__52718__auto__);
};
var metabase$lib$core$exp = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81854__i = 0, G__81854__a = new Array(arguments.length -  0);
while (G__81854__i < G__81854__a.length) {G__81854__a[G__81854__i] = arguments[G__81854__i + 0]; ++G__81854__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81854__a,0,null);
} 
return metabase$lib$core$exp__delegate.call(this,args__52718__auto__);};
metabase$lib$core$exp.cljs$lang$maxFixedArity = 0;
metabase$lib$core$exp.cljs$lang$applyTo = (function (arglist__81855){
var args__52718__auto__ = cljs.core.seq(arglist__81855);
return metabase$lib$core$exp__delegate(args__52718__auto__);
});
metabase$lib$core$exp.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$exp__delegate;
return metabase$lib$core$exp;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.sqrt = (function() { 
var metabase$lib$core$sqrt__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.sqrt,args__52718__auto__);
};
var metabase$lib$core$sqrt = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81856__i = 0, G__81856__a = new Array(arguments.length -  0);
while (G__81856__i < G__81856__a.length) {G__81856__a[G__81856__i] = arguments[G__81856__i + 0]; ++G__81856__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81856__a,0,null);
} 
return metabase$lib$core$sqrt__delegate.call(this,args__52718__auto__);};
metabase$lib$core$sqrt.cljs$lang$maxFixedArity = 0;
metabase$lib$core$sqrt.cljs$lang$applyTo = (function (arglist__81857){
var args__52718__auto__ = cljs.core.seq(arglist__81857);
return metabase$lib$core$sqrt__delegate(args__52718__auto__);
});
metabase$lib$core$sqrt.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$sqrt__delegate;
return metabase$lib$core$sqrt;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.ceil = (function() { 
var metabase$lib$core$ceil__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.ceil,args__52718__auto__);
};
var metabase$lib$core$ceil = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81859__i = 0, G__81859__a = new Array(arguments.length -  0);
while (G__81859__i < G__81859__a.length) {G__81859__a[G__81859__i] = arguments[G__81859__i + 0]; ++G__81859__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81859__a,0,null);
} 
return metabase$lib$core$ceil__delegate.call(this,args__52718__auto__);};
metabase$lib$core$ceil.cljs$lang$maxFixedArity = 0;
metabase$lib$core$ceil.cljs$lang$applyTo = (function (arglist__81860){
var args__52718__auto__ = cljs.core.seq(arglist__81860);
return metabase$lib$core$ceil__delegate(args__52718__auto__);
});
metabase$lib$core$ceil.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$ceil__delegate;
return metabase$lib$core$ceil;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.floor = (function() { 
var metabase$lib$core$floor__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.floor,args__52718__auto__);
};
var metabase$lib$core$floor = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81861__i = 0, G__81861__a = new Array(arguments.length -  0);
while (G__81861__i < G__81861__a.length) {G__81861__a[G__81861__i] = arguments[G__81861__i + 0]; ++G__81861__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81861__a,0,null);
} 
return metabase$lib$core$floor__delegate.call(this,args__52718__auto__);};
metabase$lib$core$floor.cljs$lang$maxFixedArity = 0;
metabase$lib$core$floor.cljs$lang$applyTo = (function (arglist__81862){
var args__52718__auto__ = cljs.core.seq(arglist__81862);
return metabase$lib$core$floor__delegate(args__52718__auto__);
});
metabase$lib$core$floor.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$floor__delegate;
return metabase$lib$core$floor;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.round = (function() { 
var metabase$lib$core$round__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.round,args__52718__auto__);
};
var metabase$lib$core$round = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81863__i = 0, G__81863__a = new Array(arguments.length -  0);
while (G__81863__i < G__81863__a.length) {G__81863__a[G__81863__i] = arguments[G__81863__i + 0]; ++G__81863__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81863__a,0,null);
} 
return metabase$lib$core$round__delegate.call(this,args__52718__auto__);};
metabase$lib$core$round.cljs$lang$maxFixedArity = 0;
metabase$lib$core$round.cljs$lang$applyTo = (function (arglist__81864){
var args__52718__auto__ = cljs.core.seq(arglist__81864);
return metabase$lib$core$round__delegate(args__52718__auto__);
});
metabase$lib$core$round.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$round__delegate;
return metabase$lib$core$round;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.power = (function() { 
var metabase$lib$core$power__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.power,args__52718__auto__);
};
var metabase$lib$core$power = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81865__i = 0, G__81865__a = new Array(arguments.length -  0);
while (G__81865__i < G__81865__a.length) {G__81865__a[G__81865__i] = arguments[G__81865__i + 0]; ++G__81865__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81865__a,0,null);
} 
return metabase$lib$core$power__delegate.call(this,args__52718__auto__);};
metabase$lib$core$power.cljs$lang$maxFixedArity = 0;
metabase$lib$core$power.cljs$lang$applyTo = (function (arglist__81866){
var args__52718__auto__ = cljs.core.seq(arglist__81866);
return metabase$lib$core$power__delegate(args__52718__auto__);
});
metabase$lib$core$power.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$power__delegate;
return metabase$lib$core$power;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.interval = (function() { 
var metabase$lib$core$interval__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.interval,args__52718__auto__);
};
var metabase$lib$core$interval = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81867__i = 0, G__81867__a = new Array(arguments.length -  0);
while (G__81867__i < G__81867__a.length) {G__81867__a[G__81867__i] = arguments[G__81867__i + 0]; ++G__81867__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81867__a,0,null);
} 
return metabase$lib$core$interval__delegate.call(this,args__52718__auto__);};
metabase$lib$core$interval.cljs$lang$maxFixedArity = 0;
metabase$lib$core$interval.cljs$lang$applyTo = (function (arglist__81868){
var args__52718__auto__ = cljs.core.seq(arglist__81868);
return metabase$lib$core$interval__delegate(args__52718__auto__);
});
metabase$lib$core$interval.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$interval__delegate;
return metabase$lib$core$interval;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.relative_datetime = (function() { 
var metabase$lib$core$relative_datetime__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.relative_datetime,args__52718__auto__);
};
var metabase$lib$core$relative_datetime = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81869__i = 0, G__81869__a = new Array(arguments.length -  0);
while (G__81869__i < G__81869__a.length) {G__81869__a[G__81869__i] = arguments[G__81869__i + 0]; ++G__81869__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81869__a,0,null);
} 
return metabase$lib$core$relative_datetime__delegate.call(this,args__52718__auto__);};
metabase$lib$core$relative_datetime.cljs$lang$maxFixedArity = 0;
metabase$lib$core$relative_datetime.cljs$lang$applyTo = (function (arglist__81870){
var args__52718__auto__ = cljs.core.seq(arglist__81870);
return metabase$lib$core$relative_datetime__delegate(args__52718__auto__);
});
metabase$lib$core$relative_datetime.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$relative_datetime__delegate;
return metabase$lib$core$relative_datetime;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.time = (function() { 
var metabase$lib$core$time__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.time,args__52718__auto__);
};
var metabase$lib$core$time = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81871__i = 0, G__81871__a = new Array(arguments.length -  0);
while (G__81871__i < G__81871__a.length) {G__81871__a[G__81871__i] = arguments[G__81871__i + 0]; ++G__81871__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81871__a,0,null);
} 
return metabase$lib$core$time__delegate.call(this,args__52718__auto__);};
metabase$lib$core$time.cljs$lang$maxFixedArity = 0;
metabase$lib$core$time.cljs$lang$applyTo = (function (arglist__81872){
var args__52718__auto__ = cljs.core.seq(arglist__81872);
return metabase$lib$core$time__delegate(args__52718__auto__);
});
metabase$lib$core$time.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$time__delegate;
return metabase$lib$core$time;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.absolute_datetime = (function() { 
var metabase$lib$core$absolute_datetime__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.absolute_datetime,args__52718__auto__);
};
var metabase$lib$core$absolute_datetime = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81873__i = 0, G__81873__a = new Array(arguments.length -  0);
while (G__81873__i < G__81873__a.length) {G__81873__a[G__81873__i] = arguments[G__81873__i + 0]; ++G__81873__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81873__a,0,null);
} 
return metabase$lib$core$absolute_datetime__delegate.call(this,args__52718__auto__);};
metabase$lib$core$absolute_datetime.cljs$lang$maxFixedArity = 0;
metabase$lib$core$absolute_datetime.cljs$lang$applyTo = (function (arglist__81874){
var args__52718__auto__ = cljs.core.seq(arglist__81874);
return metabase$lib$core$absolute_datetime__delegate(args__52718__auto__);
});
metabase$lib$core$absolute_datetime.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$absolute_datetime__delegate;
return metabase$lib$core$absolute_datetime;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.now = (function() { 
var metabase$lib$core$now__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.now,args__52718__auto__);
};
var metabase$lib$core$now = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81875__i = 0, G__81875__a = new Array(arguments.length -  0);
while (G__81875__i < G__81875__a.length) {G__81875__a[G__81875__i] = arguments[G__81875__i + 0]; ++G__81875__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81875__a,0,null);
} 
return metabase$lib$core$now__delegate.call(this,args__52718__auto__);};
metabase$lib$core$now.cljs$lang$maxFixedArity = 0;
metabase$lib$core$now.cljs$lang$applyTo = (function (arglist__81876){
var args__52718__auto__ = cljs.core.seq(arglist__81876);
return metabase$lib$core$now__delegate(args__52718__auto__);
});
metabase$lib$core$now.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$now__delegate;
return metabase$lib$core$now;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.convert_timezone = (function() { 
var metabase$lib$core$convert_timezone__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.convert_timezone,args__52718__auto__);
};
var metabase$lib$core$convert_timezone = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81877__i = 0, G__81877__a = new Array(arguments.length -  0);
while (G__81877__i < G__81877__a.length) {G__81877__a[G__81877__i] = arguments[G__81877__i + 0]; ++G__81877__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81877__a,0,null);
} 
return metabase$lib$core$convert_timezone__delegate.call(this,args__52718__auto__);};
metabase$lib$core$convert_timezone.cljs$lang$maxFixedArity = 0;
metabase$lib$core$convert_timezone.cljs$lang$applyTo = (function (arglist__81878){
var args__52718__auto__ = cljs.core.seq(arglist__81878);
return metabase$lib$core$convert_timezone__delegate(args__52718__auto__);
});
metabase$lib$core$convert_timezone.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$convert_timezone__delegate;
return metabase$lib$core$convert_timezone;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_week = (function() { 
var metabase$lib$core$get_week__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_week,args__52718__auto__);
};
var metabase$lib$core$get_week = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81879__i = 0, G__81879__a = new Array(arguments.length -  0);
while (G__81879__i < G__81879__a.length) {G__81879__a[G__81879__i] = arguments[G__81879__i + 0]; ++G__81879__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81879__a,0,null);
} 
return metabase$lib$core$get_week__delegate.call(this,args__52718__auto__);};
metabase$lib$core$get_week.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_week.cljs$lang$applyTo = (function (arglist__81880){
var args__52718__auto__ = cljs.core.seq(arglist__81880);
return metabase$lib$core$get_week__delegate(args__52718__auto__);
});
metabase$lib$core$get_week.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_week__delegate;
return metabase$lib$core$get_week;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_year = (function() { 
var metabase$lib$core$get_year__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_year,args__52718__auto__);
};
var metabase$lib$core$get_year = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81881__i = 0, G__81881__a = new Array(arguments.length -  0);
while (G__81881__i < G__81881__a.length) {G__81881__a[G__81881__i] = arguments[G__81881__i + 0]; ++G__81881__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81881__a,0,null);
} 
return metabase$lib$core$get_year__delegate.call(this,args__52718__auto__);};
metabase$lib$core$get_year.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_year.cljs$lang$applyTo = (function (arglist__81882){
var args__52718__auto__ = cljs.core.seq(arglist__81882);
return metabase$lib$core$get_year__delegate(args__52718__auto__);
});
metabase$lib$core$get_year.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_year__delegate;
return metabase$lib$core$get_year;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_month = (function() { 
var metabase$lib$core$get_month__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_month,args__52718__auto__);
};
var metabase$lib$core$get_month = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81883__i = 0, G__81883__a = new Array(arguments.length -  0);
while (G__81883__i < G__81883__a.length) {G__81883__a[G__81883__i] = arguments[G__81883__i + 0]; ++G__81883__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81883__a,0,null);
} 
return metabase$lib$core$get_month__delegate.call(this,args__52718__auto__);};
metabase$lib$core$get_month.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_month.cljs$lang$applyTo = (function (arglist__81884){
var args__52718__auto__ = cljs.core.seq(arglist__81884);
return metabase$lib$core$get_month__delegate(args__52718__auto__);
});
metabase$lib$core$get_month.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_month__delegate;
return metabase$lib$core$get_month;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_day = (function() { 
var metabase$lib$core$get_day__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_day,args__52718__auto__);
};
var metabase$lib$core$get_day = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81885__i = 0, G__81885__a = new Array(arguments.length -  0);
while (G__81885__i < G__81885__a.length) {G__81885__a[G__81885__i] = arguments[G__81885__i + 0]; ++G__81885__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81885__a,0,null);
} 
return metabase$lib$core$get_day__delegate.call(this,args__52718__auto__);};
metabase$lib$core$get_day.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_day.cljs$lang$applyTo = (function (arglist__81886){
var args__52718__auto__ = cljs.core.seq(arglist__81886);
return metabase$lib$core$get_day__delegate(args__52718__auto__);
});
metabase$lib$core$get_day.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_day__delegate;
return metabase$lib$core$get_day;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_hour = (function() { 
var metabase$lib$core$get_hour__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_hour,args__52718__auto__);
};
var metabase$lib$core$get_hour = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81887__i = 0, G__81887__a = new Array(arguments.length -  0);
while (G__81887__i < G__81887__a.length) {G__81887__a[G__81887__i] = arguments[G__81887__i + 0]; ++G__81887__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81887__a,0,null);
} 
return metabase$lib$core$get_hour__delegate.call(this,args__52718__auto__);};
metabase$lib$core$get_hour.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_hour.cljs$lang$applyTo = (function (arglist__81888){
var args__52718__auto__ = cljs.core.seq(arglist__81888);
return metabase$lib$core$get_hour__delegate(args__52718__auto__);
});
metabase$lib$core$get_hour.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_hour__delegate;
return metabase$lib$core$get_hour;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_minute = (function() { 
var metabase$lib$core$get_minute__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_minute,args__52718__auto__);
};
var metabase$lib$core$get_minute = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81889__i = 0, G__81889__a = new Array(arguments.length -  0);
while (G__81889__i < G__81889__a.length) {G__81889__a[G__81889__i] = arguments[G__81889__i + 0]; ++G__81889__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81889__a,0,null);
} 
return metabase$lib$core$get_minute__delegate.call(this,args__52718__auto__);};
metabase$lib$core$get_minute.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_minute.cljs$lang$applyTo = (function (arglist__81890){
var args__52718__auto__ = cljs.core.seq(arglist__81890);
return metabase$lib$core$get_minute__delegate(args__52718__auto__);
});
metabase$lib$core$get_minute.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_minute__delegate;
return metabase$lib$core$get_minute;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_second = (function() { 
var metabase$lib$core$get_second__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_second,args__52718__auto__);
};
var metabase$lib$core$get_second = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81891__i = 0, G__81891__a = new Array(arguments.length -  0);
while (G__81891__i < G__81891__a.length) {G__81891__a[G__81891__i] = arguments[G__81891__i + 0]; ++G__81891__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81891__a,0,null);
} 
return metabase$lib$core$get_second__delegate.call(this,args__52718__auto__);};
metabase$lib$core$get_second.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_second.cljs$lang$applyTo = (function (arglist__81892){
var args__52718__auto__ = cljs.core.seq(arglist__81892);
return metabase$lib$core$get_second__delegate(args__52718__auto__);
});
metabase$lib$core$get_second.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_second__delegate;
return metabase$lib$core$get_second;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_quarter = (function() { 
var metabase$lib$core$get_quarter__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_quarter,args__52718__auto__);
};
var metabase$lib$core$get_quarter = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81893__i = 0, G__81893__a = new Array(arguments.length -  0);
while (G__81893__i < G__81893__a.length) {G__81893__a[G__81893__i] = arguments[G__81893__i + 0]; ++G__81893__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81893__a,0,null);
} 
return metabase$lib$core$get_quarter__delegate.call(this,args__52718__auto__);};
metabase$lib$core$get_quarter.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_quarter.cljs$lang$applyTo = (function (arglist__81894){
var args__52718__auto__ = cljs.core.seq(arglist__81894);
return metabase$lib$core$get_quarter__delegate(args__52718__auto__);
});
metabase$lib$core$get_quarter.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_quarter__delegate;
return metabase$lib$core$get_quarter;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.datetime_add = (function() { 
var metabase$lib$core$datetime_add__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.datetime_add,args__52718__auto__);
};
var metabase$lib$core$datetime_add = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81897__i = 0, G__81897__a = new Array(arguments.length -  0);
while (G__81897__i < G__81897__a.length) {G__81897__a[G__81897__i] = arguments[G__81897__i + 0]; ++G__81897__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81897__a,0,null);
} 
return metabase$lib$core$datetime_add__delegate.call(this,args__52718__auto__);};
metabase$lib$core$datetime_add.cljs$lang$maxFixedArity = 0;
metabase$lib$core$datetime_add.cljs$lang$applyTo = (function (arglist__81898){
var args__52718__auto__ = cljs.core.seq(arglist__81898);
return metabase$lib$core$datetime_add__delegate(args__52718__auto__);
});
metabase$lib$core$datetime_add.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$datetime_add__delegate;
return metabase$lib$core$datetime_add;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.datetime_subtract = (function() { 
var metabase$lib$core$datetime_subtract__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.datetime_subtract,args__52718__auto__);
};
var metabase$lib$core$datetime_subtract = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81899__i = 0, G__81899__a = new Array(arguments.length -  0);
while (G__81899__i < G__81899__a.length) {G__81899__a[G__81899__i] = arguments[G__81899__i + 0]; ++G__81899__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81899__a,0,null);
} 
return metabase$lib$core$datetime_subtract__delegate.call(this,args__52718__auto__);};
metabase$lib$core$datetime_subtract.cljs$lang$maxFixedArity = 0;
metabase$lib$core$datetime_subtract.cljs$lang$applyTo = (function (arglist__81900){
var args__52718__auto__ = cljs.core.seq(arglist__81900);
return metabase$lib$core$datetime_subtract__delegate(args__52718__auto__);
});
metabase$lib$core$datetime_subtract.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$datetime_subtract__delegate;
return metabase$lib$core$datetime_subtract;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.concat = (function() { 
var metabase$lib$core$concat__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.concat,args__52718__auto__);
};
var metabase$lib$core$concat = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81901__i = 0, G__81901__a = new Array(arguments.length -  0);
while (G__81901__i < G__81901__a.length) {G__81901__a[G__81901__i] = arguments[G__81901__i + 0]; ++G__81901__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81901__a,0,null);
} 
return metabase$lib$core$concat__delegate.call(this,args__52718__auto__);};
metabase$lib$core$concat.cljs$lang$maxFixedArity = 0;
metabase$lib$core$concat.cljs$lang$applyTo = (function (arglist__81902){
var args__52718__auto__ = cljs.core.seq(arglist__81902);
return metabase$lib$core$concat__delegate(args__52718__auto__);
});
metabase$lib$core$concat.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$concat__delegate;
return metabase$lib$core$concat;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.substring = (function() { 
var metabase$lib$core$substring__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.substring,args__52718__auto__);
};
var metabase$lib$core$substring = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81903__i = 0, G__81903__a = new Array(arguments.length -  0);
while (G__81903__i < G__81903__a.length) {G__81903__a[G__81903__i] = arguments[G__81903__i + 0]; ++G__81903__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81903__a,0,null);
} 
return metabase$lib$core$substring__delegate.call(this,args__52718__auto__);};
metabase$lib$core$substring.cljs$lang$maxFixedArity = 0;
metabase$lib$core$substring.cljs$lang$applyTo = (function (arglist__81904){
var args__52718__auto__ = cljs.core.seq(arglist__81904);
return metabase$lib$core$substring__delegate(args__52718__auto__);
});
metabase$lib$core$substring.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$substring__delegate;
return metabase$lib$core$substring;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.replace = (function() { 
var metabase$lib$core$replace__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.replace,args__52718__auto__);
};
var metabase$lib$core$replace = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81905__i = 0, G__81905__a = new Array(arguments.length -  0);
while (G__81905__i < G__81905__a.length) {G__81905__a[G__81905__i] = arguments[G__81905__i + 0]; ++G__81905__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81905__a,0,null);
} 
return metabase$lib$core$replace__delegate.call(this,args__52718__auto__);};
metabase$lib$core$replace.cljs$lang$maxFixedArity = 0;
metabase$lib$core$replace.cljs$lang$applyTo = (function (arglist__81906){
var args__52718__auto__ = cljs.core.seq(arglist__81906);
return metabase$lib$core$replace__delegate(args__52718__auto__);
});
metabase$lib$core$replace.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$replace__delegate;
return metabase$lib$core$replace;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.regexextract = (function() { 
var metabase$lib$core$regexextract__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.regexextract,args__52718__auto__);
};
var metabase$lib$core$regexextract = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81907__i = 0, G__81907__a = new Array(arguments.length -  0);
while (G__81907__i < G__81907__a.length) {G__81907__a[G__81907__i] = arguments[G__81907__i + 0]; ++G__81907__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81907__a,0,null);
} 
return metabase$lib$core$regexextract__delegate.call(this,args__52718__auto__);};
metabase$lib$core$regexextract.cljs$lang$maxFixedArity = 0;
metabase$lib$core$regexextract.cljs$lang$applyTo = (function (arglist__81908){
var args__52718__auto__ = cljs.core.seq(arglist__81908);
return metabase$lib$core$regexextract__delegate(args__52718__auto__);
});
metabase$lib$core$regexextract.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$regexextract__delegate;
return metabase$lib$core$regexextract;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.length = (function() { 
var metabase$lib$core$length__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.length,args__52718__auto__);
};
var metabase$lib$core$length = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81909__i = 0, G__81909__a = new Array(arguments.length -  0);
while (G__81909__i < G__81909__a.length) {G__81909__a[G__81909__i] = arguments[G__81909__i + 0]; ++G__81909__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81909__a,0,null);
} 
return metabase$lib$core$length__delegate.call(this,args__52718__auto__);};
metabase$lib$core$length.cljs$lang$maxFixedArity = 0;
metabase$lib$core$length.cljs$lang$applyTo = (function (arglist__81910){
var args__52718__auto__ = cljs.core.seq(arglist__81910);
return metabase$lib$core$length__delegate(args__52718__auto__);
});
metabase$lib$core$length.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$length__delegate;
return metabase$lib$core$length;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.trim = (function() { 
var metabase$lib$core$trim__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.trim,args__52718__auto__);
};
var metabase$lib$core$trim = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81911__i = 0, G__81911__a = new Array(arguments.length -  0);
while (G__81911__i < G__81911__a.length) {G__81911__a[G__81911__i] = arguments[G__81911__i + 0]; ++G__81911__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81911__a,0,null);
} 
return metabase$lib$core$trim__delegate.call(this,args__52718__auto__);};
metabase$lib$core$trim.cljs$lang$maxFixedArity = 0;
metabase$lib$core$trim.cljs$lang$applyTo = (function (arglist__81912){
var args__52718__auto__ = cljs.core.seq(arglist__81912);
return metabase$lib$core$trim__delegate(args__52718__auto__);
});
metabase$lib$core$trim.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$trim__delegate;
return metabase$lib$core$trim;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.ltrim = (function() { 
var metabase$lib$core$ltrim__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.ltrim,args__52718__auto__);
};
var metabase$lib$core$ltrim = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81913__i = 0, G__81913__a = new Array(arguments.length -  0);
while (G__81913__i < G__81913__a.length) {G__81913__a[G__81913__i] = arguments[G__81913__i + 0]; ++G__81913__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81913__a,0,null);
} 
return metabase$lib$core$ltrim__delegate.call(this,args__52718__auto__);};
metabase$lib$core$ltrim.cljs$lang$maxFixedArity = 0;
metabase$lib$core$ltrim.cljs$lang$applyTo = (function (arglist__81914){
var args__52718__auto__ = cljs.core.seq(arglist__81914);
return metabase$lib$core$ltrim__delegate(args__52718__auto__);
});
metabase$lib$core$ltrim.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$ltrim__delegate;
return metabase$lib$core$ltrim;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.rtrim = (function() { 
var metabase$lib$core$rtrim__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.rtrim,args__52718__auto__);
};
var metabase$lib$core$rtrim = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81915__i = 0, G__81915__a = new Array(arguments.length -  0);
while (G__81915__i < G__81915__a.length) {G__81915__a[G__81915__i] = arguments[G__81915__i + 0]; ++G__81915__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81915__a,0,null);
} 
return metabase$lib$core$rtrim__delegate.call(this,args__52718__auto__);};
metabase$lib$core$rtrim.cljs$lang$maxFixedArity = 0;
metabase$lib$core$rtrim.cljs$lang$applyTo = (function (arglist__81916){
var args__52718__auto__ = cljs.core.seq(arglist__81916);
return metabase$lib$core$rtrim__delegate(args__52718__auto__);
});
metabase$lib$core$rtrim.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$rtrim__delegate;
return metabase$lib$core$rtrim;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.upper = (function() { 
var metabase$lib$core$upper__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.upper,args__52718__auto__);
};
var metabase$lib$core$upper = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81917__i = 0, G__81917__a = new Array(arguments.length -  0);
while (G__81917__i < G__81917__a.length) {G__81917__a[G__81917__i] = arguments[G__81917__i + 0]; ++G__81917__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81917__a,0,null);
} 
return metabase$lib$core$upper__delegate.call(this,args__52718__auto__);};
metabase$lib$core$upper.cljs$lang$maxFixedArity = 0;
metabase$lib$core$upper.cljs$lang$applyTo = (function (arglist__81918){
var args__52718__auto__ = cljs.core.seq(arglist__81918);
return metabase$lib$core$upper__delegate(args__52718__auto__);
});
metabase$lib$core$upper.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$upper__delegate;
return metabase$lib$core$upper;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.lower = (function() { 
var metabase$lib$core$lower__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.lower,args__52718__auto__);
};
var metabase$lib$core$lower = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81919__i = 0, G__81919__a = new Array(arguments.length -  0);
while (G__81919__i < G__81919__a.length) {G__81919__a[G__81919__i] = arguments[G__81919__i + 0]; ++G__81919__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81919__a,0,null);
} 
return metabase$lib$core$lower__delegate.call(this,args__52718__auto__);};
metabase$lib$core$lower.cljs$lang$maxFixedArity = 0;
metabase$lib$core$lower.cljs$lang$applyTo = (function (arglist__81920){
var args__52718__auto__ = cljs.core.seq(arglist__81920);
return metabase$lib$core$lower__delegate(args__52718__auto__);
});
metabase$lib$core$lower.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$lower__delegate;
return metabase$lib$core$lower;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.fields = (function() { 
var metabase$lib$core$fields__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.fields,args__52718__auto__);
};
var metabase$lib$core$fields = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81921__i = 0, G__81921__a = new Array(arguments.length -  0);
while (G__81921__i < G__81921__a.length) {G__81921__a[G__81921__i] = arguments[G__81921__i + 0]; ++G__81921__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81921__a,0,null);
} 
return metabase$lib$core$fields__delegate.call(this,args__52718__auto__);};
metabase$lib$core$fields.cljs$lang$maxFixedArity = 0;
metabase$lib$core$fields.cljs$lang$applyTo = (function (arglist__81922){
var args__52718__auto__ = cljs.core.seq(arglist__81922);
return metabase$lib$core$fields__delegate(args__52718__auto__);
});
metabase$lib$core$fields.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$fields__delegate;
return metabase$lib$core$fields;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_fields = (function() { 
var metabase$lib$core$with_fields__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.with_fields,args__52718__auto__);
};
var metabase$lib$core$with_fields = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81923__i = 0, G__81923__a = new Array(arguments.length -  0);
while (G__81923__i < G__81923__a.length) {G__81923__a[G__81923__i] = arguments[G__81923__i + 0]; ++G__81923__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81923__a,0,null);
} 
return metabase$lib$core$with_fields__delegate.call(this,args__52718__auto__);};
metabase$lib$core$with_fields.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_fields.cljs$lang$applyTo = (function (arglist__81924){
var args__52718__auto__ = cljs.core.seq(arglist__81924);
return metabase$lib$core$with_fields__delegate(args__52718__auto__);
});
metabase$lib$core$with_fields.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_fields__delegate;
return metabase$lib$core$with_fields;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.fieldable_columns = (function() { 
var metabase$lib$core$fieldable_columns__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.fieldable_columns,args__52718__auto__);
};
var metabase$lib$core$fieldable_columns = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81925__i = 0, G__81925__a = new Array(arguments.length -  0);
while (G__81925__i < G__81925__a.length) {G__81925__a[G__81925__i] = arguments[G__81925__i + 0]; ++G__81925__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81925__a,0,null);
} 
return metabase$lib$core$fieldable_columns__delegate.call(this,args__52718__auto__);};
metabase$lib$core$fieldable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$fieldable_columns.cljs$lang$applyTo = (function (arglist__81926){
var args__52718__auto__ = cljs.core.seq(arglist__81926);
return metabase$lib$core$fieldable_columns__delegate(args__52718__auto__);
});
metabase$lib$core$fieldable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$fieldable_columns__delegate;
return metabase$lib$core$fieldable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filter = (function() { 
var metabase$lib$core$filter__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filter,args__52718__auto__);
};
var metabase$lib$core$filter = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81927__i = 0, G__81927__a = new Array(arguments.length -  0);
while (G__81927__i < G__81927__a.length) {G__81927__a[G__81927__i] = arguments[G__81927__i + 0]; ++G__81927__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81927__a,0,null);
} 
return metabase$lib$core$filter__delegate.call(this,args__52718__auto__);};
metabase$lib$core$filter.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filter.cljs$lang$applyTo = (function (arglist__81928){
var args__52718__auto__ = cljs.core.seq(arglist__81928);
return metabase$lib$core$filter__delegate(args__52718__auto__);
});
metabase$lib$core$filter.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filter__delegate;
return metabase$lib$core$filter;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filters = (function() { 
var metabase$lib$core$filters__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filters,args__52718__auto__);
};
var metabase$lib$core$filters = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81929__i = 0, G__81929__a = new Array(arguments.length -  0);
while (G__81929__i < G__81929__a.length) {G__81929__a[G__81929__i] = arguments[G__81929__i + 0]; ++G__81929__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81929__a,0,null);
} 
return metabase$lib$core$filters__delegate.call(this,args__52718__auto__);};
metabase$lib$core$filters.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filters.cljs$lang$applyTo = (function (arglist__81930){
var args__52718__auto__ = cljs.core.seq(arglist__81930);
return metabase$lib$core$filters__delegate(args__52718__auto__);
});
metabase$lib$core$filters.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filters__delegate;
return metabase$lib$core$filters;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filterable_columns = (function() { 
var metabase$lib$core$filterable_columns__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filterable_columns,args__52718__auto__);
};
var metabase$lib$core$filterable_columns = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81931__i = 0, G__81931__a = new Array(arguments.length -  0);
while (G__81931__i < G__81931__a.length) {G__81931__a[G__81931__i] = arguments[G__81931__i + 0]; ++G__81931__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81931__a,0,null);
} 
return metabase$lib$core$filterable_columns__delegate.call(this,args__52718__auto__);};
metabase$lib$core$filterable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filterable_columns.cljs$lang$applyTo = (function (arglist__81932){
var args__52718__auto__ = cljs.core.seq(arglist__81932);
return metabase$lib$core$filterable_columns__delegate(args__52718__auto__);
});
metabase$lib$core$filterable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filterable_columns__delegate;
return metabase$lib$core$filterable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filterable_column_operators = (function() { 
var metabase$lib$core$filterable_column_operators__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filterable_column_operators,args__52718__auto__);
};
var metabase$lib$core$filterable_column_operators = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81933__i = 0, G__81933__a = new Array(arguments.length -  0);
while (G__81933__i < G__81933__a.length) {G__81933__a[G__81933__i] = arguments[G__81933__i + 0]; ++G__81933__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81933__a,0,null);
} 
return metabase$lib$core$filterable_column_operators__delegate.call(this,args__52718__auto__);};
metabase$lib$core$filterable_column_operators.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filterable_column_operators.cljs$lang$applyTo = (function (arglist__81934){
var args__52718__auto__ = cljs.core.seq(arglist__81934);
return metabase$lib$core$filterable_column_operators__delegate(args__52718__auto__);
});
metabase$lib$core$filterable_column_operators.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filterable_column_operators__delegate;
return metabase$lib$core$filterable_column_operators;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filter_clause = (function() { 
var metabase$lib$core$filter_clause__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filter_clause,args__52718__auto__);
};
var metabase$lib$core$filter_clause = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81935__i = 0, G__81935__a = new Array(arguments.length -  0);
while (G__81935__i < G__81935__a.length) {G__81935__a[G__81935__i] = arguments[G__81935__i + 0]; ++G__81935__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81935__a,0,null);
} 
return metabase$lib$core$filter_clause__delegate.call(this,args__52718__auto__);};
metabase$lib$core$filter_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filter_clause.cljs$lang$applyTo = (function (arglist__81936){
var args__52718__auto__ = cljs.core.seq(arglist__81936);
return metabase$lib$core$filter_clause__delegate(args__52718__auto__);
});
metabase$lib$core$filter_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filter_clause__delegate;
return metabase$lib$core$filter_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filter_operator = (function() { 
var metabase$lib$core$filter_operator__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filter_operator,args__52718__auto__);
};
var metabase$lib$core$filter_operator = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81937__i = 0, G__81937__a = new Array(arguments.length -  0);
while (G__81937__i < G__81937__a.length) {G__81937__a[G__81937__i] = arguments[G__81937__i + 0]; ++G__81937__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81937__a,0,null);
} 
return metabase$lib$core$filter_operator__delegate.call(this,args__52718__auto__);};
metabase$lib$core$filter_operator.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filter_operator.cljs$lang$applyTo = (function (arglist__81938){
var args__52718__auto__ = cljs.core.seq(arglist__81938);
return metabase$lib$core$filter_operator__delegate(args__52718__auto__);
});
metabase$lib$core$filter_operator.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filter_operator__delegate;
return metabase$lib$core$filter_operator;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.and = (function() { 
var metabase$lib$core$and__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.and,args__52718__auto__);
};
var metabase$lib$core$and = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81939__i = 0, G__81939__a = new Array(arguments.length -  0);
while (G__81939__i < G__81939__a.length) {G__81939__a[G__81939__i] = arguments[G__81939__i + 0]; ++G__81939__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81939__a,0,null);
} 
return metabase$lib$core$and__delegate.call(this,args__52718__auto__);};
metabase$lib$core$and.cljs$lang$maxFixedArity = 0;
metabase$lib$core$and.cljs$lang$applyTo = (function (arglist__81940){
var args__52718__auto__ = cljs.core.seq(arglist__81940);
return metabase$lib$core$and__delegate(args__52718__auto__);
});
metabase$lib$core$and.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$and__delegate;
return metabase$lib$core$and;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.or = (function() { 
var metabase$lib$core$or__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.or,args__52718__auto__);
};
var metabase$lib$core$or = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81941__i = 0, G__81941__a = new Array(arguments.length -  0);
while (G__81941__i < G__81941__a.length) {G__81941__a[G__81941__i] = arguments[G__81941__i + 0]; ++G__81941__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81941__a,0,null);
} 
return metabase$lib$core$or__delegate.call(this,args__52718__auto__);};
metabase$lib$core$or.cljs$lang$maxFixedArity = 0;
metabase$lib$core$or.cljs$lang$applyTo = (function (arglist__81942){
var args__52718__auto__ = cljs.core.seq(arglist__81942);
return metabase$lib$core$or__delegate(args__52718__auto__);
});
metabase$lib$core$or.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$or__delegate;
return metabase$lib$core$or;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.not = (function() { 
var metabase$lib$core$not__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.not,args__52718__auto__);
};
var metabase$lib$core$not = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81943__i = 0, G__81943__a = new Array(arguments.length -  0);
while (G__81943__i < G__81943__a.length) {G__81943__a[G__81943__i] = arguments[G__81943__i + 0]; ++G__81943__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81943__a,0,null);
} 
return metabase$lib$core$not__delegate.call(this,args__52718__auto__);};
metabase$lib$core$not.cljs$lang$maxFixedArity = 0;
metabase$lib$core$not.cljs$lang$applyTo = (function (arglist__81944){
var args__52718__auto__ = cljs.core.seq(arglist__81944);
return metabase$lib$core$not__delegate(args__52718__auto__);
});
metabase$lib$core$not.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$not__delegate;
return metabase$lib$core$not;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._EQ_ = (function() { 
var metabase$lib$core$_EQ___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._EQ_,args__52718__auto__);
};
var metabase$lib$core$_EQ_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81946__i = 0, G__81946__a = new Array(arguments.length -  0);
while (G__81946__i < G__81946__a.length) {G__81946__a[G__81946__i] = arguments[G__81946__i + 0]; ++G__81946__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81946__a,0,null);
} 
return metabase$lib$core$_EQ___delegate.call(this,args__52718__auto__);};
metabase$lib$core$_EQ_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_EQ_.cljs$lang$applyTo = (function (arglist__81947){
var args__52718__auto__ = cljs.core.seq(arglist__81947);
return metabase$lib$core$_EQ___delegate(args__52718__auto__);
});
metabase$lib$core$_EQ_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_EQ___delegate;
return metabase$lib$core$_EQ_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._BANG__EQ_ = (function() { 
var metabase$lib$core$_BANG__EQ___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._BANG__EQ_,args__52718__auto__);
};
var metabase$lib$core$_BANG__EQ_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81948__i = 0, G__81948__a = new Array(arguments.length -  0);
while (G__81948__i < G__81948__a.length) {G__81948__a[G__81948__i] = arguments[G__81948__i + 0]; ++G__81948__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81948__a,0,null);
} 
return metabase$lib$core$_BANG__EQ___delegate.call(this,args__52718__auto__);};
metabase$lib$core$_BANG__EQ_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_BANG__EQ_.cljs$lang$applyTo = (function (arglist__81949){
var args__52718__auto__ = cljs.core.seq(arglist__81949);
return metabase$lib$core$_BANG__EQ___delegate(args__52718__auto__);
});
metabase$lib$core$_BANG__EQ_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_BANG__EQ___delegate;
return metabase$lib$core$_BANG__EQ_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._LT_ = (function() { 
var metabase$lib$core$_LT___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._LT_,args__52718__auto__);
};
var metabase$lib$core$_LT_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81951__i = 0, G__81951__a = new Array(arguments.length -  0);
while (G__81951__i < G__81951__a.length) {G__81951__a[G__81951__i] = arguments[G__81951__i + 0]; ++G__81951__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81951__a,0,null);
} 
return metabase$lib$core$_LT___delegate.call(this,args__52718__auto__);};
metabase$lib$core$_LT_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_LT_.cljs$lang$applyTo = (function (arglist__81952){
var args__52718__auto__ = cljs.core.seq(arglist__81952);
return metabase$lib$core$_LT___delegate(args__52718__auto__);
});
metabase$lib$core$_LT_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_LT___delegate;
return metabase$lib$core$_LT_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._LT__EQ_ = (function() { 
var metabase$lib$core$_LT__EQ___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._LT__EQ_,args__52718__auto__);
};
var metabase$lib$core$_LT__EQ_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81953__i = 0, G__81953__a = new Array(arguments.length -  0);
while (G__81953__i < G__81953__a.length) {G__81953__a[G__81953__i] = arguments[G__81953__i + 0]; ++G__81953__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81953__a,0,null);
} 
return metabase$lib$core$_LT__EQ___delegate.call(this,args__52718__auto__);};
metabase$lib$core$_LT__EQ_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_LT__EQ_.cljs$lang$applyTo = (function (arglist__81954){
var args__52718__auto__ = cljs.core.seq(arglist__81954);
return metabase$lib$core$_LT__EQ___delegate(args__52718__auto__);
});
metabase$lib$core$_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_LT__EQ___delegate;
return metabase$lib$core$_LT__EQ_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._GT_ = (function() { 
var metabase$lib$core$_GT___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._GT_,args__52718__auto__);
};
var metabase$lib$core$_GT_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81955__i = 0, G__81955__a = new Array(arguments.length -  0);
while (G__81955__i < G__81955__a.length) {G__81955__a[G__81955__i] = arguments[G__81955__i + 0]; ++G__81955__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81955__a,0,null);
} 
return metabase$lib$core$_GT___delegate.call(this,args__52718__auto__);};
metabase$lib$core$_GT_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_GT_.cljs$lang$applyTo = (function (arglist__81956){
var args__52718__auto__ = cljs.core.seq(arglist__81956);
return metabase$lib$core$_GT___delegate(args__52718__auto__);
});
metabase$lib$core$_GT_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_GT___delegate;
return metabase$lib$core$_GT_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._GT__EQ_ = (function() { 
var metabase$lib$core$_GT__EQ___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._GT__EQ_,args__52718__auto__);
};
var metabase$lib$core$_GT__EQ_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81957__i = 0, G__81957__a = new Array(arguments.length -  0);
while (G__81957__i < G__81957__a.length) {G__81957__a[G__81957__i] = arguments[G__81957__i + 0]; ++G__81957__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81957__a,0,null);
} 
return metabase$lib$core$_GT__EQ___delegate.call(this,args__52718__auto__);};
metabase$lib$core$_GT__EQ_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_GT__EQ_.cljs$lang$applyTo = (function (arglist__81958){
var args__52718__auto__ = cljs.core.seq(arglist__81958);
return metabase$lib$core$_GT__EQ___delegate(args__52718__auto__);
});
metabase$lib$core$_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_GT__EQ___delegate;
return metabase$lib$core$_GT__EQ_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.between = (function() { 
var metabase$lib$core$between__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.between,args__52718__auto__);
};
var metabase$lib$core$between = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81959__i = 0, G__81959__a = new Array(arguments.length -  0);
while (G__81959__i < G__81959__a.length) {G__81959__a[G__81959__i] = arguments[G__81959__i + 0]; ++G__81959__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81959__a,0,null);
} 
return metabase$lib$core$between__delegate.call(this,args__52718__auto__);};
metabase$lib$core$between.cljs$lang$maxFixedArity = 0;
metabase$lib$core$between.cljs$lang$applyTo = (function (arglist__81960){
var args__52718__auto__ = cljs.core.seq(arglist__81960);
return metabase$lib$core$between__delegate(args__52718__auto__);
});
metabase$lib$core$between.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$between__delegate;
return metabase$lib$core$between;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.inside = (function() { 
var metabase$lib$core$inside__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.inside,args__52718__auto__);
};
var metabase$lib$core$inside = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81961__i = 0, G__81961__a = new Array(arguments.length -  0);
while (G__81961__i < G__81961__a.length) {G__81961__a[G__81961__i] = arguments[G__81961__i + 0]; ++G__81961__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81961__a,0,null);
} 
return metabase$lib$core$inside__delegate.call(this,args__52718__auto__);};
metabase$lib$core$inside.cljs$lang$maxFixedArity = 0;
metabase$lib$core$inside.cljs$lang$applyTo = (function (arglist__81962){
var args__52718__auto__ = cljs.core.seq(arglist__81962);
return metabase$lib$core$inside__delegate(args__52718__auto__);
});
metabase$lib$core$inside.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$inside__delegate;
return metabase$lib$core$inside;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.is_null = (function() { 
var metabase$lib$core$is_null__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.is_null,args__52718__auto__);
};
var metabase$lib$core$is_null = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81963__i = 0, G__81963__a = new Array(arguments.length -  0);
while (G__81963__i < G__81963__a.length) {G__81963__a[G__81963__i] = arguments[G__81963__i + 0]; ++G__81963__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81963__a,0,null);
} 
return metabase$lib$core$is_null__delegate.call(this,args__52718__auto__);};
metabase$lib$core$is_null.cljs$lang$maxFixedArity = 0;
metabase$lib$core$is_null.cljs$lang$applyTo = (function (arglist__81964){
var args__52718__auto__ = cljs.core.seq(arglist__81964);
return metabase$lib$core$is_null__delegate(args__52718__auto__);
});
metabase$lib$core$is_null.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$is_null__delegate;
return metabase$lib$core$is_null;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.not_null = (function() { 
var metabase$lib$core$not_null__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.not_null,args__52718__auto__);
};
var metabase$lib$core$not_null = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81965__i = 0, G__81965__a = new Array(arguments.length -  0);
while (G__81965__i < G__81965__a.length) {G__81965__a[G__81965__i] = arguments[G__81965__i + 0]; ++G__81965__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81965__a,0,null);
} 
return metabase$lib$core$not_null__delegate.call(this,args__52718__auto__);};
metabase$lib$core$not_null.cljs$lang$maxFixedArity = 0;
metabase$lib$core$not_null.cljs$lang$applyTo = (function (arglist__81966){
var args__52718__auto__ = cljs.core.seq(arglist__81966);
return metabase$lib$core$not_null__delegate(args__52718__auto__);
});
metabase$lib$core$not_null.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$not_null__delegate;
return metabase$lib$core$not_null;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.is_empty = (function() { 
var metabase$lib$core$is_empty__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.is_empty,args__52718__auto__);
};
var metabase$lib$core$is_empty = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81967__i = 0, G__81967__a = new Array(arguments.length -  0);
while (G__81967__i < G__81967__a.length) {G__81967__a[G__81967__i] = arguments[G__81967__i + 0]; ++G__81967__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81967__a,0,null);
} 
return metabase$lib$core$is_empty__delegate.call(this,args__52718__auto__);};
metabase$lib$core$is_empty.cljs$lang$maxFixedArity = 0;
metabase$lib$core$is_empty.cljs$lang$applyTo = (function (arglist__81968){
var args__52718__auto__ = cljs.core.seq(arglist__81968);
return metabase$lib$core$is_empty__delegate(args__52718__auto__);
});
metabase$lib$core$is_empty.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$is_empty__delegate;
return metabase$lib$core$is_empty;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.not_empty = (function() { 
var metabase$lib$core$not_empty__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.not_empty,args__52718__auto__);
};
var metabase$lib$core$not_empty = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81969__i = 0, G__81969__a = new Array(arguments.length -  0);
while (G__81969__i < G__81969__a.length) {G__81969__a[G__81969__i] = arguments[G__81969__i + 0]; ++G__81969__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81969__a,0,null);
} 
return metabase$lib$core$not_empty__delegate.call(this,args__52718__auto__);};
metabase$lib$core$not_empty.cljs$lang$maxFixedArity = 0;
metabase$lib$core$not_empty.cljs$lang$applyTo = (function (arglist__81970){
var args__52718__auto__ = cljs.core.seq(arglist__81970);
return metabase$lib$core$not_empty__delegate(args__52718__auto__);
});
metabase$lib$core$not_empty.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$not_empty__delegate;
return metabase$lib$core$not_empty;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.starts_with = (function() { 
var metabase$lib$core$starts_with__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.starts_with,args__52718__auto__);
};
var metabase$lib$core$starts_with = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81971__i = 0, G__81971__a = new Array(arguments.length -  0);
while (G__81971__i < G__81971__a.length) {G__81971__a[G__81971__i] = arguments[G__81971__i + 0]; ++G__81971__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81971__a,0,null);
} 
return metabase$lib$core$starts_with__delegate.call(this,args__52718__auto__);};
metabase$lib$core$starts_with.cljs$lang$maxFixedArity = 0;
metabase$lib$core$starts_with.cljs$lang$applyTo = (function (arglist__81972){
var args__52718__auto__ = cljs.core.seq(arglist__81972);
return metabase$lib$core$starts_with__delegate(args__52718__auto__);
});
metabase$lib$core$starts_with.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$starts_with__delegate;
return metabase$lib$core$starts_with;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.ends_with = (function() { 
var metabase$lib$core$ends_with__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.ends_with,args__52718__auto__);
};
var metabase$lib$core$ends_with = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81973__i = 0, G__81973__a = new Array(arguments.length -  0);
while (G__81973__i < G__81973__a.length) {G__81973__a[G__81973__i] = arguments[G__81973__i + 0]; ++G__81973__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81973__a,0,null);
} 
return metabase$lib$core$ends_with__delegate.call(this,args__52718__auto__);};
metabase$lib$core$ends_with.cljs$lang$maxFixedArity = 0;
metabase$lib$core$ends_with.cljs$lang$applyTo = (function (arglist__81974){
var args__52718__auto__ = cljs.core.seq(arglist__81974);
return metabase$lib$core$ends_with__delegate(args__52718__auto__);
});
metabase$lib$core$ends_with.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$ends_with__delegate;
return metabase$lib$core$ends_with;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.contains = (function() { 
var metabase$lib$core$contains__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.contains,args__52718__auto__);
};
var metabase$lib$core$contains = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81975__i = 0, G__81975__a = new Array(arguments.length -  0);
while (G__81975__i < G__81975__a.length) {G__81975__a[G__81975__i] = arguments[G__81975__i + 0]; ++G__81975__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81975__a,0,null);
} 
return metabase$lib$core$contains__delegate.call(this,args__52718__auto__);};
metabase$lib$core$contains.cljs$lang$maxFixedArity = 0;
metabase$lib$core$contains.cljs$lang$applyTo = (function (arglist__81976){
var args__52718__auto__ = cljs.core.seq(arglist__81976);
return metabase$lib$core$contains__delegate(args__52718__auto__);
});
metabase$lib$core$contains.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$contains__delegate;
return metabase$lib$core$contains;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.does_not_contain = (function() { 
var metabase$lib$core$does_not_contain__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.does_not_contain,args__52718__auto__);
};
var metabase$lib$core$does_not_contain = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81977__i = 0, G__81977__a = new Array(arguments.length -  0);
while (G__81977__i < G__81977__a.length) {G__81977__a[G__81977__i] = arguments[G__81977__i + 0]; ++G__81977__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81977__a,0,null);
} 
return metabase$lib$core$does_not_contain__delegate.call(this,args__52718__auto__);};
metabase$lib$core$does_not_contain.cljs$lang$maxFixedArity = 0;
metabase$lib$core$does_not_contain.cljs$lang$applyTo = (function (arglist__81978){
var args__52718__auto__ = cljs.core.seq(arglist__81978);
return metabase$lib$core$does_not_contain__delegate(args__52718__auto__);
});
metabase$lib$core$does_not_contain.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$does_not_contain__delegate;
return metabase$lib$core$does_not_contain;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.time_interval = (function() { 
var metabase$lib$core$time_interval__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.time_interval,args__52718__auto__);
};
var metabase$lib$core$time_interval = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81979__i = 0, G__81979__a = new Array(arguments.length -  0);
while (G__81979__i < G__81979__a.length) {G__81979__a[G__81979__i] = arguments[G__81979__i + 0]; ++G__81979__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81979__a,0,null);
} 
return metabase$lib$core$time_interval__delegate.call(this,args__52718__auto__);};
metabase$lib$core$time_interval.cljs$lang$maxFixedArity = 0;
metabase$lib$core$time_interval.cljs$lang$applyTo = (function (arglist__81980){
var args__52718__auto__ = cljs.core.seq(arglist__81980);
return metabase$lib$core$time_interval__delegate(args__52718__auto__);
});
metabase$lib$core$time_interval.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$time_interval__delegate;
return metabase$lib$core$time_interval;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.segment = (function() { 
var metabase$lib$core$segment__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.segment,args__52718__auto__);
};
var metabase$lib$core$segment = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81981__i = 0, G__81981__a = new Array(arguments.length -  0);
while (G__81981__i < G__81981__a.length) {G__81981__a[G__81981__i] = arguments[G__81981__i + 0]; ++G__81981__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81981__a,0,null);
} 
return metabase$lib$core$segment__delegate.call(this,args__52718__auto__);};
metabase$lib$core$segment.cljs$lang$maxFixedArity = 0;
metabase$lib$core$segment.cljs$lang$applyTo = (function (arglist__81982){
var args__52718__auto__ = cljs.core.seq(arglist__81982);
return metabase$lib$core$segment__delegate(args__52718__auto__);
});
metabase$lib$core$segment.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$segment__delegate;
return metabase$lib$core$segment;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_join_strategies = (function() { 
var metabase$lib$core$available_join_strategies__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.available_join_strategies,args__52718__auto__);
};
var metabase$lib$core$available_join_strategies = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81983__i = 0, G__81983__a = new Array(arguments.length -  0);
while (G__81983__i < G__81983__a.length) {G__81983__a[G__81983__i] = arguments[G__81983__i + 0]; ++G__81983__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81983__a,0,null);
} 
return metabase$lib$core$available_join_strategies__delegate.call(this,args__52718__auto__);};
metabase$lib$core$available_join_strategies.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_join_strategies.cljs$lang$applyTo = (function (arglist__81984){
var args__52718__auto__ = cljs.core.seq(arglist__81984);
return metabase$lib$core$available_join_strategies__delegate(args__52718__auto__);
});
metabase$lib$core$available_join_strategies.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_join_strategies__delegate;
return metabase$lib$core$available_join_strategies;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join = (function() { 
var metabase$lib$core$join__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join,args__52718__auto__);
};
var metabase$lib$core$join = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81985__i = 0, G__81985__a = new Array(arguments.length -  0);
while (G__81985__i < G__81985__a.length) {G__81985__a[G__81985__i] = arguments[G__81985__i + 0]; ++G__81985__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81985__a,0,null);
} 
return metabase$lib$core$join__delegate.call(this,args__52718__auto__);};
metabase$lib$core$join.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join.cljs$lang$applyTo = (function (arglist__81986){
var args__52718__auto__ = cljs.core.seq(arglist__81986);
return metabase$lib$core$join__delegate(args__52718__auto__);
});
metabase$lib$core$join.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join__delegate;
return metabase$lib$core$join;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_clause = (function() { 
var metabase$lib$core$join_clause__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_clause,args__52718__auto__);
};
var metabase$lib$core$join_clause = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81987__i = 0, G__81987__a = new Array(arguments.length -  0);
while (G__81987__i < G__81987__a.length) {G__81987__a[G__81987__i] = arguments[G__81987__i + 0]; ++G__81987__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81987__a,0,null);
} 
return metabase$lib$core$join_clause__delegate.call(this,args__52718__auto__);};
metabase$lib$core$join_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_clause.cljs$lang$applyTo = (function (arglist__81988){
var args__52718__auto__ = cljs.core.seq(arglist__81988);
return metabase$lib$core$join_clause__delegate(args__52718__auto__);
});
metabase$lib$core$join_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_clause__delegate;
return metabase$lib$core$join_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_condition_lhs_columns = (function() { 
var metabase$lib$core$join_condition_lhs_columns__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_condition_lhs_columns,args__52718__auto__);
};
var metabase$lib$core$join_condition_lhs_columns = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81989__i = 0, G__81989__a = new Array(arguments.length -  0);
while (G__81989__i < G__81989__a.length) {G__81989__a[G__81989__i] = arguments[G__81989__i + 0]; ++G__81989__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81989__a,0,null);
} 
return metabase$lib$core$join_condition_lhs_columns__delegate.call(this,args__52718__auto__);};
metabase$lib$core$join_condition_lhs_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_condition_lhs_columns.cljs$lang$applyTo = (function (arglist__81990){
var args__52718__auto__ = cljs.core.seq(arglist__81990);
return metabase$lib$core$join_condition_lhs_columns__delegate(args__52718__auto__);
});
metabase$lib$core$join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_condition_lhs_columns__delegate;
return metabase$lib$core$join_condition_lhs_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_condition_operators = (function() { 
var metabase$lib$core$join_condition_operators__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_condition_operators,args__52718__auto__);
};
var metabase$lib$core$join_condition_operators = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81991__i = 0, G__81991__a = new Array(arguments.length -  0);
while (G__81991__i < G__81991__a.length) {G__81991__a[G__81991__i] = arguments[G__81991__i + 0]; ++G__81991__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81991__a,0,null);
} 
return metabase$lib$core$join_condition_operators__delegate.call(this,args__52718__auto__);};
metabase$lib$core$join_condition_operators.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_condition_operators.cljs$lang$applyTo = (function (arglist__81992){
var args__52718__auto__ = cljs.core.seq(arglist__81992);
return metabase$lib$core$join_condition_operators__delegate(args__52718__auto__);
});
metabase$lib$core$join_condition_operators.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_condition_operators__delegate;
return metabase$lib$core$join_condition_operators;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_condition_rhs_columns = (function() { 
var metabase$lib$core$join_condition_rhs_columns__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_condition_rhs_columns,args__52718__auto__);
};
var metabase$lib$core$join_condition_rhs_columns = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81993__i = 0, G__81993__a = new Array(arguments.length -  0);
while (G__81993__i < G__81993__a.length) {G__81993__a[G__81993__i] = arguments[G__81993__i + 0]; ++G__81993__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81993__a,0,null);
} 
return metabase$lib$core$join_condition_rhs_columns__delegate.call(this,args__52718__auto__);};
metabase$lib$core$join_condition_rhs_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_condition_rhs_columns.cljs$lang$applyTo = (function (arglist__81994){
var args__52718__auto__ = cljs.core.seq(arglist__81994);
return metabase$lib$core$join_condition_rhs_columns__delegate(args__52718__auto__);
});
metabase$lib$core$join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_condition_rhs_columns__delegate;
return metabase$lib$core$join_condition_rhs_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_conditions = (function() { 
var metabase$lib$core$join_conditions__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_conditions,args__52718__auto__);
};
var metabase$lib$core$join_conditions = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81995__i = 0, G__81995__a = new Array(arguments.length -  0);
while (G__81995__i < G__81995__a.length) {G__81995__a[G__81995__i] = arguments[G__81995__i + 0]; ++G__81995__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81995__a,0,null);
} 
return metabase$lib$core$join_conditions__delegate.call(this,args__52718__auto__);};
metabase$lib$core$join_conditions.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_conditions.cljs$lang$applyTo = (function (arglist__81996){
var args__52718__auto__ = cljs.core.seq(arglist__81996);
return metabase$lib$core$join_conditions__delegate(args__52718__auto__);
});
metabase$lib$core$join_conditions.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_conditions__delegate;
return metabase$lib$core$join_conditions;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_fields = (function() { 
var metabase$lib$core$join_fields__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_fields,args__52718__auto__);
};
var metabase$lib$core$join_fields = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__81997__i = 0, G__81997__a = new Array(arguments.length -  0);
while (G__81997__i < G__81997__a.length) {G__81997__a[G__81997__i] = arguments[G__81997__i + 0]; ++G__81997__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__81997__a,0,null);
} 
return metabase$lib$core$join_fields__delegate.call(this,args__52718__auto__);};
metabase$lib$core$join_fields.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_fields.cljs$lang$applyTo = (function (arglist__81998){
var args__52718__auto__ = cljs.core.seq(arglist__81998);
return metabase$lib$core$join_fields__delegate(args__52718__auto__);
});
metabase$lib$core$join_fields.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_fields__delegate;
return metabase$lib$core$join_fields;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_lhs_display_name = (function() { 
var metabase$lib$core$join_lhs_display_name__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_lhs_display_name,args__52718__auto__);
};
var metabase$lib$core$join_lhs_display_name = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82000__i = 0, G__82000__a = new Array(arguments.length -  0);
while (G__82000__i < G__82000__a.length) {G__82000__a[G__82000__i] = arguments[G__82000__i + 0]; ++G__82000__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82000__a,0,null);
} 
return metabase$lib$core$join_lhs_display_name__delegate.call(this,args__52718__auto__);};
metabase$lib$core$join_lhs_display_name.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_lhs_display_name.cljs$lang$applyTo = (function (arglist__82001){
var args__52718__auto__ = cljs.core.seq(arglist__82001);
return metabase$lib$core$join_lhs_display_name__delegate(args__52718__auto__);
});
metabase$lib$core$join_lhs_display_name.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_lhs_display_name__delegate;
return metabase$lib$core$join_lhs_display_name;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_strategy = (function() { 
var metabase$lib$core$join_strategy__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_strategy,args__52718__auto__);
};
var metabase$lib$core$join_strategy = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82002__i = 0, G__82002__a = new Array(arguments.length -  0);
while (G__82002__i < G__82002__a.length) {G__82002__a[G__82002__i] = arguments[G__82002__i + 0]; ++G__82002__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82002__a,0,null);
} 
return metabase$lib$core$join_strategy__delegate.call(this,args__52718__auto__);};
metabase$lib$core$join_strategy.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_strategy.cljs$lang$applyTo = (function (arglist__82003){
var args__52718__auto__ = cljs.core.seq(arglist__82003);
return metabase$lib$core$join_strategy__delegate(args__52718__auto__);
});
metabase$lib$core$join_strategy.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_strategy__delegate;
return metabase$lib$core$join_strategy;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.joinable_columns = (function() { 
var metabase$lib$core$joinable_columns__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.joinable_columns,args__52718__auto__);
};
var metabase$lib$core$joinable_columns = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82004__i = 0, G__82004__a = new Array(arguments.length -  0);
while (G__82004__i < G__82004__a.length) {G__82004__a[G__82004__i] = arguments[G__82004__i + 0]; ++G__82004__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82004__a,0,null);
} 
return metabase$lib$core$joinable_columns__delegate.call(this,args__52718__auto__);};
metabase$lib$core$joinable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$joinable_columns.cljs$lang$applyTo = (function (arglist__82006){
var args__52718__auto__ = cljs.core.seq(arglist__82006);
return metabase$lib$core$joinable_columns__delegate(args__52718__auto__);
});
metabase$lib$core$joinable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$joinable_columns__delegate;
return metabase$lib$core$joinable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.joins = (function() { 
var metabase$lib$core$joins__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.joins,args__52718__auto__);
};
var metabase$lib$core$joins = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82007__i = 0, G__82007__a = new Array(arguments.length -  0);
while (G__82007__i < G__82007__a.length) {G__82007__a[G__82007__i] = arguments[G__82007__i + 0]; ++G__82007__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82007__a,0,null);
} 
return metabase$lib$core$joins__delegate.call(this,args__52718__auto__);};
metabase$lib$core$joins.cljs$lang$maxFixedArity = 0;
metabase$lib$core$joins.cljs$lang$applyTo = (function (arglist__82008){
var args__52718__auto__ = cljs.core.seq(arglist__82008);
return metabase$lib$core$joins__delegate(args__52718__auto__);
});
metabase$lib$core$joins.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$joins__delegate;
return metabase$lib$core$joins;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.raw_join_strategy = (function() { 
var metabase$lib$core$raw_join_strategy__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.raw_join_strategy,args__52718__auto__);
};
var metabase$lib$core$raw_join_strategy = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82009__i = 0, G__82009__a = new Array(arguments.length -  0);
while (G__82009__i < G__82009__a.length) {G__82009__a[G__82009__i] = arguments[G__82009__i + 0]; ++G__82009__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82009__a,0,null);
} 
return metabase$lib$core$raw_join_strategy__delegate.call(this,args__52718__auto__);};
metabase$lib$core$raw_join_strategy.cljs$lang$maxFixedArity = 0;
metabase$lib$core$raw_join_strategy.cljs$lang$applyTo = (function (arglist__82010){
var args__52718__auto__ = cljs.core.seq(arglist__82010);
return metabase$lib$core$raw_join_strategy__delegate(args__52718__auto__);
});
metabase$lib$core$raw_join_strategy.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$raw_join_strategy__delegate;
return metabase$lib$core$raw_join_strategy;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.suggested_join_condition = (function() { 
var metabase$lib$core$suggested_join_condition__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.suggested_join_condition,args__52718__auto__);
};
var metabase$lib$core$suggested_join_condition = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82012__i = 0, G__82012__a = new Array(arguments.length -  0);
while (G__82012__i < G__82012__a.length) {G__82012__a[G__82012__i] = arguments[G__82012__i + 0]; ++G__82012__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82012__a,0,null);
} 
return metabase$lib$core$suggested_join_condition__delegate.call(this,args__52718__auto__);};
metabase$lib$core$suggested_join_condition.cljs$lang$maxFixedArity = 0;
metabase$lib$core$suggested_join_condition.cljs$lang$applyTo = (function (arglist__82013){
var args__52718__auto__ = cljs.core.seq(arglist__82013);
return metabase$lib$core$suggested_join_condition__delegate(args__52718__auto__);
});
metabase$lib$core$suggested_join_condition.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$suggested_join_condition__delegate;
return metabase$lib$core$suggested_join_condition;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_join_alias = (function() { 
var metabase$lib$core$with_join_alias__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.with_join_alias,args__52718__auto__);
};
var metabase$lib$core$with_join_alias = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82014__i = 0, G__82014__a = new Array(arguments.length -  0);
while (G__82014__i < G__82014__a.length) {G__82014__a[G__82014__i] = arguments[G__82014__i + 0]; ++G__82014__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82014__a,0,null);
} 
return metabase$lib$core$with_join_alias__delegate.call(this,args__52718__auto__);};
metabase$lib$core$with_join_alias.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_join_alias.cljs$lang$applyTo = (function (arglist__82015){
var args__52718__auto__ = cljs.core.seq(arglist__82015);
return metabase$lib$core$with_join_alias__delegate(args__52718__auto__);
});
metabase$lib$core$with_join_alias.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_join_alias__delegate;
return metabase$lib$core$with_join_alias;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_join_fields = (function() { 
var metabase$lib$core$with_join_fields__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.with_join_fields,args__52718__auto__);
};
var metabase$lib$core$with_join_fields = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82016__i = 0, G__82016__a = new Array(arguments.length -  0);
while (G__82016__i < G__82016__a.length) {G__82016__a[G__82016__i] = arguments[G__82016__i + 0]; ++G__82016__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82016__a,0,null);
} 
return metabase$lib$core$with_join_fields__delegate.call(this,args__52718__auto__);};
metabase$lib$core$with_join_fields.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_join_fields.cljs$lang$applyTo = (function (arglist__82017){
var args__52718__auto__ = cljs.core.seq(arglist__82017);
return metabase$lib$core$with_join_fields__delegate(args__52718__auto__);
});
metabase$lib$core$with_join_fields.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_join_fields__delegate;
return metabase$lib$core$with_join_fields;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_join_strategy = (function() { 
var metabase$lib$core$with_join_strategy__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.with_join_strategy,args__52718__auto__);
};
var metabase$lib$core$with_join_strategy = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82018__i = 0, G__82018__a = new Array(arguments.length -  0);
while (G__82018__i < G__82018__a.length) {G__82018__a[G__82018__i] = arguments[G__82018__i + 0]; ++G__82018__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82018__a,0,null);
} 
return metabase$lib$core$with_join_strategy__delegate.call(this,args__52718__auto__);};
metabase$lib$core$with_join_strategy.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_join_strategy.cljs$lang$applyTo = (function (arglist__82019){
var args__52718__auto__ = cljs.core.seq(arglist__82019);
return metabase$lib$core$with_join_strategy__delegate(args__52718__auto__);
});
metabase$lib$core$with_join_strategy.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_join_strategy__delegate;
return metabase$lib$core$with_join_strategy;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_join_conditions = (function() { 
var metabase$lib$core$with_join_conditions__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.with_join_conditions,args__52718__auto__);
};
var metabase$lib$core$with_join_conditions = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82020__i = 0, G__82020__a = new Array(arguments.length -  0);
while (G__82020__i < G__82020__a.length) {G__82020__a[G__82020__i] = arguments[G__82020__i + 0]; ++G__82020__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82020__a,0,null);
} 
return metabase$lib$core$with_join_conditions__delegate.call(this,args__52718__auto__);};
metabase$lib$core$with_join_conditions.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_join_conditions.cljs$lang$applyTo = (function (arglist__82021){
var args__52718__auto__ = cljs.core.seq(arglist__82021);
return metabase$lib$core$with_join_conditions__delegate(args__52718__auto__);
});
metabase$lib$core$with_join_conditions.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_join_conditions__delegate;
return metabase$lib$core$with_join_conditions;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.current_limit = (function() { 
var metabase$lib$core$current_limit__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.limit.current_limit,args__52718__auto__);
};
var metabase$lib$core$current_limit = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82022__i = 0, G__82022__a = new Array(arguments.length -  0);
while (G__82022__i < G__82022__a.length) {G__82022__a[G__82022__i] = arguments[G__82022__i + 0]; ++G__82022__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82022__a,0,null);
} 
return metabase$lib$core$current_limit__delegate.call(this,args__52718__auto__);};
metabase$lib$core$current_limit.cljs$lang$maxFixedArity = 0;
metabase$lib$core$current_limit.cljs$lang$applyTo = (function (arglist__82023){
var args__52718__auto__ = cljs.core.seq(arglist__82023);
return metabase$lib$core$current_limit__delegate(args__52718__auto__);
});
metabase$lib$core$current_limit.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$current_limit__delegate;
return metabase$lib$core$current_limit;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.limit = (function() { 
var metabase$lib$core$limit__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.limit.limit,args__52718__auto__);
};
var metabase$lib$core$limit = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82024__i = 0, G__82024__a = new Array(arguments.length -  0);
while (G__82024__i < G__82024__a.length) {G__82024__a[G__82024__i] = arguments[G__82024__i + 0]; ++G__82024__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82024__a,0,null);
} 
return metabase$lib$core$limit__delegate.call(this,args__52718__auto__);};
metabase$lib$core$limit.cljs$lang$maxFixedArity = 0;
metabase$lib$core$limit.cljs$lang$applyTo = (function (arglist__82025){
var args__52718__auto__ = cljs.core.seq(arglist__82025);
return metabase$lib$core$limit__delegate(args__52718__auto__);
});
metabase$lib$core$limit.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$limit__delegate;
return metabase$lib$core$limit;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.column_name = (function() { 
var metabase$lib$core$column_name__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.column_name,args__52718__auto__);
};
var metabase$lib$core$column_name = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82026__i = 0, G__82026__a = new Array(arguments.length -  0);
while (G__82026__i < G__82026__a.length) {G__82026__a[G__82026__i] = arguments[G__82026__i + 0]; ++G__82026__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82026__a,0,null);
} 
return metabase$lib$core$column_name__delegate.call(this,args__52718__auto__);};
metabase$lib$core$column_name.cljs$lang$maxFixedArity = 0;
metabase$lib$core$column_name.cljs$lang$applyTo = (function (arglist__82027){
var args__52718__auto__ = cljs.core.seq(arglist__82027);
return metabase$lib$core$column_name__delegate(args__52718__auto__);
});
metabase$lib$core$column_name.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$column_name__delegate;
return metabase$lib$core$column_name;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.describe_query = (function() { 
var metabase$lib$core$describe_query__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.describe_query,args__52718__auto__);
};
var metabase$lib$core$describe_query = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82028__i = 0, G__82028__a = new Array(arguments.length -  0);
while (G__82028__i < G__82028__a.length) {G__82028__a[G__82028__i] = arguments[G__82028__i + 0]; ++G__82028__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82028__a,0,null);
} 
return metabase$lib$core$describe_query__delegate.call(this,args__52718__auto__);};
metabase$lib$core$describe_query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$describe_query.cljs$lang$applyTo = (function (arglist__82029){
var args__52718__auto__ = cljs.core.seq(arglist__82029);
return metabase$lib$core$describe_query__delegate(args__52718__auto__);
});
metabase$lib$core$describe_query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$describe_query__delegate;
return metabase$lib$core$describe_query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.describe_top_level_key = (function() { 
var metabase$lib$core$describe_top_level_key__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.describe_top_level_key,args__52718__auto__);
};
var metabase$lib$core$describe_top_level_key = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82030__i = 0, G__82030__a = new Array(arguments.length -  0);
while (G__82030__i < G__82030__a.length) {G__82030__a[G__82030__i] = arguments[G__82030__i + 0]; ++G__82030__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82030__a,0,null);
} 
return metabase$lib$core$describe_top_level_key__delegate.call(this,args__52718__auto__);};
metabase$lib$core$describe_top_level_key.cljs$lang$maxFixedArity = 0;
metabase$lib$core$describe_top_level_key.cljs$lang$applyTo = (function (arglist__82031){
var args__52718__auto__ = cljs.core.seq(arglist__82031);
return metabase$lib$core$describe_top_level_key__delegate(args__52718__auto__);
});
metabase$lib$core$describe_top_level_key.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$describe_top_level_key__delegate;
return metabase$lib$core$describe_top_level_key;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.display_name = (function() { 
var metabase$lib$core$display_name__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.display_name,args__52718__auto__);
};
var metabase$lib$core$display_name = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82032__i = 0, G__82032__a = new Array(arguments.length -  0);
while (G__82032__i < G__82032__a.length) {G__82032__a[G__82032__i] = arguments[G__82032__i + 0]; ++G__82032__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82032__a,0,null);
} 
return metabase$lib$core$display_name__delegate.call(this,args__52718__auto__);};
metabase$lib$core$display_name.cljs$lang$maxFixedArity = 0;
metabase$lib$core$display_name.cljs$lang$applyTo = (function (arglist__82033){
var args__52718__auto__ = cljs.core.seq(arglist__82033);
return metabase$lib$core$display_name__delegate(args__52718__auto__);
});
metabase$lib$core$display_name.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$display_name__delegate;
return metabase$lib$core$display_name;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.display_info = (function() { 
var metabase$lib$core$display_info__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.display_info,args__52718__auto__);
};
var metabase$lib$core$display_info = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82034__i = 0, G__82034__a = new Array(arguments.length -  0);
while (G__82034__i < G__82034__a.length) {G__82034__a[G__82034__i] = arguments[G__82034__i + 0]; ++G__82034__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82034__a,0,null);
} 
return metabase$lib$core$display_info__delegate.call(this,args__52718__auto__);};
metabase$lib$core$display_info.cljs$lang$maxFixedArity = 0;
metabase$lib$core$display_info.cljs$lang$applyTo = (function (arglist__82035){
var args__52718__auto__ = cljs.core.seq(arglist__82035);
return metabase$lib$core$display_info__delegate(args__52718__auto__);
});
metabase$lib$core$display_info.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$display_info__delegate;
return metabase$lib$core$display_info;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.suggested_name = (function() { 
var metabase$lib$core$suggested_name__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.suggested_name,args__52718__auto__);
};
var metabase$lib$core$suggested_name = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82036__i = 0, G__82036__a = new Array(arguments.length -  0);
while (G__82036__i < G__82036__a.length) {G__82036__a[G__82036__i] = arguments[G__82036__i + 0]; ++G__82036__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82036__a,0,null);
} 
return metabase$lib$core$suggested_name__delegate.call(this,args__52718__auto__);};
metabase$lib$core$suggested_name.cljs$lang$maxFixedArity = 0;
metabase$lib$core$suggested_name.cljs$lang$applyTo = (function (arglist__82037){
var args__52718__auto__ = cljs.core.seq(arglist__82037);
return metabase$lib$core$suggested_name__delegate(args__52718__auto__);
});
metabase$lib$core$suggested_name.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$suggested_name__delegate;
return metabase$lib$core$suggested_name;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.type_of = (function() { 
var metabase$lib$core$type_of__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.type_of,args__52718__auto__);
};
var metabase$lib$core$type_of = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82038__i = 0, G__82038__a = new Array(arguments.length -  0);
while (G__82038__i < G__82038__a.length) {G__82038__a[G__82038__i] = arguments[G__82038__i + 0]; ++G__82038__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82038__a,0,null);
} 
return metabase$lib$core$type_of__delegate.call(this,args__52718__auto__);};
metabase$lib$core$type_of.cljs$lang$maxFixedArity = 0;
metabase$lib$core$type_of.cljs$lang$applyTo = (function (arglist__82039){
var args__52718__auto__ = cljs.core.seq(arglist__82039);
return metabase$lib$core$type_of__delegate(args__52718__auto__);
});
metabase$lib$core$type_of.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$type_of__delegate;
return metabase$lib$core$type_of;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_metrics = (function() { 
var metabase$lib$core$available_metrics__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metric.available_metrics,args__52718__auto__);
};
var metabase$lib$core$available_metrics = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82040__i = 0, G__82040__a = new Array(arguments.length -  0);
while (G__82040__i < G__82040__a.length) {G__82040__a[G__82040__i] = arguments[G__82040__i + 0]; ++G__82040__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82040__a,0,null);
} 
return metabase$lib$core$available_metrics__delegate.call(this,args__52718__auto__);};
metabase$lib$core$available_metrics.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_metrics.cljs$lang$applyTo = (function (arglist__82041){
var args__52718__auto__ = cljs.core.seq(arglist__82041);
return metabase$lib$core$available_metrics__delegate(args__52718__auto__);
});
metabase$lib$core$available_metrics.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_metrics__delegate;
return metabase$lib$core$available_metrics;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.__GT_TemplateTags = (function() { 
var metabase$lib$core$__GT_TemplateTags__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.__GT_TemplateTags,args__52718__auto__);
};
var metabase$lib$core$__GT_TemplateTags = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82042__i = 0, G__82042__a = new Array(arguments.length -  0);
while (G__82042__i < G__82042__a.length) {G__82042__a[G__82042__i] = arguments[G__82042__i + 0]; ++G__82042__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82042__a,0,null);
} 
return metabase$lib$core$__GT_TemplateTags__delegate.call(this,args__52718__auto__);};
metabase$lib$core$__GT_TemplateTags.cljs$lang$maxFixedArity = 0;
metabase$lib$core$__GT_TemplateTags.cljs$lang$applyTo = (function (arglist__82043){
var args__52718__auto__ = cljs.core.seq(arglist__82043);
return metabase$lib$core$__GT_TemplateTags__delegate(args__52718__auto__);
});
metabase$lib$core$__GT_TemplateTags.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$__GT_TemplateTags__delegate;
return metabase$lib$core$__GT_TemplateTags;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.TemplateTags__GT_ = (function() { 
var metabase$lib$core$TemplateTags__GT___delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.TemplateTags__GT_,args__52718__auto__);
};
var metabase$lib$core$TemplateTags__GT_ = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82044__i = 0, G__82044__a = new Array(arguments.length -  0);
while (G__82044__i < G__82044__a.length) {G__82044__a[G__82044__i] = arguments[G__82044__i + 0]; ++G__82044__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82044__a,0,null);
} 
return metabase$lib$core$TemplateTags__GT___delegate.call(this,args__52718__auto__);};
metabase$lib$core$TemplateTags__GT_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$TemplateTags__GT_.cljs$lang$applyTo = (function (arglist__82045){
var args__52718__auto__ = cljs.core.seq(arglist__82045);
return metabase$lib$core$TemplateTags__GT___delegate(args__52718__auto__);
});
metabase$lib$core$TemplateTags__GT_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$TemplateTags__GT___delegate;
return metabase$lib$core$TemplateTags__GT_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.native_query = (function() { 
var metabase$lib$core$native_query__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.native_query,args__52718__auto__);
};
var metabase$lib$core$native_query = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82046__i = 0, G__82046__a = new Array(arguments.length -  0);
while (G__82046__i < G__82046__a.length) {G__82046__a[G__82046__i] = arguments[G__82046__i + 0]; ++G__82046__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82046__a,0,null);
} 
return metabase$lib$core$native_query__delegate.call(this,args__52718__auto__);};
metabase$lib$core$native_query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$native_query.cljs$lang$applyTo = (function (arglist__82047){
var args__52718__auto__ = cljs.core.seq(arglist__82047);
return metabase$lib$core$native_query__delegate(args__52718__auto__);
});
metabase$lib$core$native_query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$native_query__delegate;
return metabase$lib$core$native_query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.raw_native_query = (function() { 
var metabase$lib$core$raw_native_query__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.raw_native_query,args__52718__auto__);
};
var metabase$lib$core$raw_native_query = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82048__i = 0, G__82048__a = new Array(arguments.length -  0);
while (G__82048__i < G__82048__a.length) {G__82048__a[G__82048__i] = arguments[G__82048__i + 0]; ++G__82048__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82048__a,0,null);
} 
return metabase$lib$core$raw_native_query__delegate.call(this,args__52718__auto__);};
metabase$lib$core$raw_native_query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$raw_native_query.cljs$lang$applyTo = (function (arglist__82049){
var args__52718__auto__ = cljs.core.seq(arglist__82049);
return metabase$lib$core$raw_native_query__delegate(args__52718__auto__);
});
metabase$lib$core$raw_native_query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$raw_native_query__delegate;
return metabase$lib$core$raw_native_query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_native_query = (function() { 
var metabase$lib$core$with_native_query__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.with_native_query,args__52718__auto__);
};
var metabase$lib$core$with_native_query = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82050__i = 0, G__82050__a = new Array(arguments.length -  0);
while (G__82050__i < G__82050__a.length) {G__82050__a[G__82050__i] = arguments[G__82050__i + 0]; ++G__82050__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82050__a,0,null);
} 
return metabase$lib$core$with_native_query__delegate.call(this,args__52718__auto__);};
metabase$lib$core$with_native_query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_native_query.cljs$lang$applyTo = (function (arglist__82051){
var args__52718__auto__ = cljs.core.seq(arglist__82051);
return metabase$lib$core$with_native_query__delegate(args__52718__auto__);
});
metabase$lib$core$with_native_query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_native_query__delegate;
return metabase$lib$core$with_native_query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.template_tags = (function() { 
var metabase$lib$core$template_tags__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.template_tags,args__52718__auto__);
};
var metabase$lib$core$template_tags = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82052__i = 0, G__82052__a = new Array(arguments.length -  0);
while (G__82052__i < G__82052__a.length) {G__82052__a[G__82052__i] = arguments[G__82052__i + 0]; ++G__82052__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82052__a,0,null);
} 
return metabase$lib$core$template_tags__delegate.call(this,args__52718__auto__);};
metabase$lib$core$template_tags.cljs$lang$maxFixedArity = 0;
metabase$lib$core$template_tags.cljs$lang$applyTo = (function (arglist__82053){
var args__52718__auto__ = cljs.core.seq(arglist__82053);
return metabase$lib$core$template_tags__delegate(args__52718__auto__);
});
metabase$lib$core$template_tags.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$template_tags__delegate;
return metabase$lib$core$template_tags;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_template_tags = (function() { 
var metabase$lib$core$with_template_tags__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.with_template_tags,args__52718__auto__);
};
var metabase$lib$core$with_template_tags = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82054__i = 0, G__82054__a = new Array(arguments.length -  0);
while (G__82054__i < G__82054__a.length) {G__82054__a[G__82054__i] = arguments[G__82054__i + 0]; ++G__82054__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82054__a,0,null);
} 
return metabase$lib$core$with_template_tags__delegate.call(this,args__52718__auto__);};
metabase$lib$core$with_template_tags.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_template_tags.cljs$lang$applyTo = (function (arglist__82055){
var args__52718__auto__ = cljs.core.seq(arglist__82055);
return metabase$lib$core$with_template_tags__delegate(args__52718__auto__);
});
metabase$lib$core$with_template_tags.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_template_tags__delegate;
return metabase$lib$core$with_template_tags;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.required_native_extras = (function() { 
var metabase$lib$core$required_native_extras__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.required_native_extras,args__52718__auto__);
};
var metabase$lib$core$required_native_extras = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82056__i = 0, G__82056__a = new Array(arguments.length -  0);
while (G__82056__i < G__82056__a.length) {G__82056__a[G__82056__i] = arguments[G__82056__i + 0]; ++G__82056__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82056__a,0,null);
} 
return metabase$lib$core$required_native_extras__delegate.call(this,args__52718__auto__);};
metabase$lib$core$required_native_extras.cljs$lang$maxFixedArity = 0;
metabase$lib$core$required_native_extras.cljs$lang$applyTo = (function (arglist__82057){
var args__52718__auto__ = cljs.core.seq(arglist__82057);
return metabase$lib$core$required_native_extras__delegate(args__52718__auto__);
});
metabase$lib$core$required_native_extras.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$required_native_extras__delegate;
return metabase$lib$core$required_native_extras;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.native_extras = (function() { 
var metabase$lib$core$native_extras__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.native_extras,args__52718__auto__);
};
var metabase$lib$core$native_extras = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82058__i = 0, G__82058__a = new Array(arguments.length -  0);
while (G__82058__i < G__82058__a.length) {G__82058__a[G__82058__i] = arguments[G__82058__i + 0]; ++G__82058__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82058__a,0,null);
} 
return metabase$lib$core$native_extras__delegate.call(this,args__52718__auto__);};
metabase$lib$core$native_extras.cljs$lang$maxFixedArity = 0;
metabase$lib$core$native_extras.cljs$lang$applyTo = (function (arglist__82059){
var args__52718__auto__ = cljs.core.seq(arglist__82059);
return metabase$lib$core$native_extras__delegate(args__52718__auto__);
});
metabase$lib$core$native_extras.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$native_extras__delegate;
return metabase$lib$core$native_extras;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_native_extras = (function() { 
var metabase$lib$core$with_native_extras__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.with_native_extras,args__52718__auto__);
};
var metabase$lib$core$with_native_extras = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82060__i = 0, G__82060__a = new Array(arguments.length -  0);
while (G__82060__i < G__82060__a.length) {G__82060__a[G__82060__i] = arguments[G__82060__i + 0]; ++G__82060__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82060__a,0,null);
} 
return metabase$lib$core$with_native_extras__delegate.call(this,args__52718__auto__);};
metabase$lib$core$with_native_extras.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_native_extras.cljs$lang$applyTo = (function (arglist__82061){
var args__52718__auto__ = cljs.core.seq(arglist__82061);
return metabase$lib$core$with_native_extras__delegate(args__52718__auto__);
});
metabase$lib$core$with_native_extras.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_native_extras__delegate;
return metabase$lib$core$with_native_extras;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_different_database = (function() { 
var metabase$lib$core$with_different_database__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.with_different_database,args__52718__auto__);
};
var metabase$lib$core$with_different_database = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82062__i = 0, G__82062__a = new Array(arguments.length -  0);
while (G__82062__i < G__82062__a.length) {G__82062__a[G__82062__i] = arguments[G__82062__i + 0]; ++G__82062__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82062__a,0,null);
} 
return metabase$lib$core$with_different_database__delegate.call(this,args__52718__auto__);};
metabase$lib$core$with_different_database.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_different_database.cljs$lang$applyTo = (function (arglist__82063){
var args__52718__auto__ = cljs.core.seq(arglist__82063);
return metabase$lib$core$with_different_database__delegate(args__52718__auto__);
});
metabase$lib$core$with_different_database.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_different_database__delegate;
return metabase$lib$core$with_different_database;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.extract_template_tags = (function() { 
var metabase$lib$core$extract_template_tags__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.extract_template_tags,args__52718__auto__);
};
var metabase$lib$core$extract_template_tags = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82064__i = 0, G__82064__a = new Array(arguments.length -  0);
while (G__82064__i < G__82064__a.length) {G__82064__a[G__82064__i] = arguments[G__82064__i + 0]; ++G__82064__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82064__a,0,null);
} 
return metabase$lib$core$extract_template_tags__delegate.call(this,args__52718__auto__);};
metabase$lib$core$extract_template_tags.cljs$lang$maxFixedArity = 0;
metabase$lib$core$extract_template_tags.cljs$lang$applyTo = (function (arglist__82065){
var args__52718__auto__ = cljs.core.seq(arglist__82065);
return metabase$lib$core$extract_template_tags__delegate(args__52718__auto__);
});
metabase$lib$core$extract_template_tags.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$extract_template_tags__delegate;
return metabase$lib$core$extract_template_tags;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.change_direction = (function() { 
var metabase$lib$core$change_direction__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.order_by.change_direction,args__52718__auto__);
};
var metabase$lib$core$change_direction = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82067__i = 0, G__82067__a = new Array(arguments.length -  0);
while (G__82067__i < G__82067__a.length) {G__82067__a[G__82067__i] = arguments[G__82067__i + 0]; ++G__82067__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82067__a,0,null);
} 
return metabase$lib$core$change_direction__delegate.call(this,args__52718__auto__);};
metabase$lib$core$change_direction.cljs$lang$maxFixedArity = 0;
metabase$lib$core$change_direction.cljs$lang$applyTo = (function (arglist__82068){
var args__52718__auto__ = cljs.core.seq(arglist__82068);
return metabase$lib$core$change_direction__delegate(args__52718__auto__);
});
metabase$lib$core$change_direction.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$change_direction__delegate;
return metabase$lib$core$change_direction;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.order_by = (function() { 
var metabase$lib$core$order_by__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.order_by.order_by,args__52718__auto__);
};
var metabase$lib$core$order_by = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82069__i = 0, G__82069__a = new Array(arguments.length -  0);
while (G__82069__i < G__82069__a.length) {G__82069__a[G__82069__i] = arguments[G__82069__i + 0]; ++G__82069__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82069__a,0,null);
} 
return metabase$lib$core$order_by__delegate.call(this,args__52718__auto__);};
metabase$lib$core$order_by.cljs$lang$maxFixedArity = 0;
metabase$lib$core$order_by.cljs$lang$applyTo = (function (arglist__82070){
var args__52718__auto__ = cljs.core.seq(arglist__82070);
return metabase$lib$core$order_by__delegate(args__52718__auto__);
});
metabase$lib$core$order_by.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$order_by__delegate;
return metabase$lib$core$order_by;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.order_by_clause = (function() { 
var metabase$lib$core$order_by_clause__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.order_by.order_by_clause,args__52718__auto__);
};
var metabase$lib$core$order_by_clause = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82071__i = 0, G__82071__a = new Array(arguments.length -  0);
while (G__82071__i < G__82071__a.length) {G__82071__a[G__82071__i] = arguments[G__82071__i + 0]; ++G__82071__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82071__a,0,null);
} 
return metabase$lib$core$order_by_clause__delegate.call(this,args__52718__auto__);};
metabase$lib$core$order_by_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$order_by_clause.cljs$lang$applyTo = (function (arglist__82072){
var args__52718__auto__ = cljs.core.seq(arglist__82072);
return metabase$lib$core$order_by_clause__delegate(args__52718__auto__);
});
metabase$lib$core$order_by_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$order_by_clause__delegate;
return metabase$lib$core$order_by_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.order_bys = (function() { 
var metabase$lib$core$order_bys__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.order_by.order_bys,args__52718__auto__);
};
var metabase$lib$core$order_bys = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82073__i = 0, G__82073__a = new Array(arguments.length -  0);
while (G__82073__i < G__82073__a.length) {G__82073__a[G__82073__i] = arguments[G__82073__i + 0]; ++G__82073__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82073__a,0,null);
} 
return metabase$lib$core$order_bys__delegate.call(this,args__52718__auto__);};
metabase$lib$core$order_bys.cljs$lang$maxFixedArity = 0;
metabase$lib$core$order_bys.cljs$lang$applyTo = (function (arglist__82074){
var args__52718__auto__ = cljs.core.seq(arglist__82074);
return metabase$lib$core$order_bys__delegate(args__52718__auto__);
});
metabase$lib$core$order_bys.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$order_bys__delegate;
return metabase$lib$core$order_bys;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.orderable_columns = (function() { 
var metabase$lib$core$orderable_columns__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.order_by.orderable_columns,args__52718__auto__);
};
var metabase$lib$core$orderable_columns = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82075__i = 0, G__82075__a = new Array(arguments.length -  0);
while (G__82075__i < G__82075__a.length) {G__82075__a[G__82075__i] = arguments[G__82075__i + 0]; ++G__82075__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82075__a,0,null);
} 
return metabase$lib$core$orderable_columns__delegate.call(this,args__52718__auto__);};
metabase$lib$core$orderable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$orderable_columns.cljs$lang$applyTo = (function (arglist__82076){
var args__52718__auto__ = cljs.core.seq(arglist__82076);
return metabase$lib$core$orderable_columns__delegate(args__52718__auto__);
});
metabase$lib$core$orderable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$orderable_columns__delegate;
return metabase$lib$core$orderable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.normalize = (function() { 
var metabase$lib$core$normalize__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.normalize.normalize,args__52718__auto__);
};
var metabase$lib$core$normalize = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82077__i = 0, G__82077__a = new Array(arguments.length -  0);
while (G__82077__i < G__82077__a.length) {G__82077__a[G__82077__i] = arguments[G__82077__i + 0]; ++G__82077__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82077__a,0,null);
} 
return metabase$lib$core$normalize__delegate.call(this,args__52718__auto__);};
metabase$lib$core$normalize.cljs$lang$maxFixedArity = 0;
metabase$lib$core$normalize.cljs$lang$applyTo = (function (arglist__82078){
var args__52718__auto__ = cljs.core.seq(arglist__82078);
return metabase$lib$core$normalize__delegate(args__52718__auto__);
});
metabase$lib$core$normalize.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$normalize__delegate;
return metabase$lib$core$normalize;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.query = (function() { 
var metabase$lib$core$query__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.query.query,args__52718__auto__);
};
var metabase$lib$core$query = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82079__i = 0, G__82079__a = new Array(arguments.length -  0);
while (G__82079__i < G__82079__a.length) {G__82079__a[G__82079__i] = arguments[G__82079__i + 0]; ++G__82079__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82079__a,0,null);
} 
return metabase$lib$core$query__delegate.call(this,args__52718__auto__);};
metabase$lib$core$query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$query.cljs$lang$applyTo = (function (arglist__82080){
var args__52718__auto__ = cljs.core.seq(arglist__82080);
return metabase$lib$core$query__delegate(args__52718__auto__);
});
metabase$lib$core$query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$query__delegate;
return metabase$lib$core$query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.saved_question_query = (function() { 
var metabase$lib$core$saved_question_query__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.query.saved_question_query,args__52718__auto__);
};
var metabase$lib$core$saved_question_query = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82081__i = 0, G__82081__a = new Array(arguments.length -  0);
while (G__82081__i < G__82081__a.length) {G__82081__a[G__82081__i] = arguments[G__82081__i + 0]; ++G__82081__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82081__a,0,null);
} 
return metabase$lib$core$saved_question_query__delegate.call(this,args__52718__auto__);};
metabase$lib$core$saved_question_query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$saved_question_query.cljs$lang$applyTo = (function (arglist__82082){
var args__52718__auto__ = cljs.core.seq(arglist__82082);
return metabase$lib$core$saved_question_query__delegate(args__52718__auto__);
});
metabase$lib$core$saved_question_query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$saved_question_query__delegate;
return metabase$lib$core$saved_question_query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.ref = (function() { 
var metabase$lib$core$ref__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,args__52718__auto__);
};
var metabase$lib$core$ref = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82083__i = 0, G__82083__a = new Array(arguments.length -  0);
while (G__82083__i < G__82083__a.length) {G__82083__a[G__82083__i] = arguments[G__82083__i + 0]; ++G__82083__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82083__a,0,null);
} 
return metabase$lib$core$ref__delegate.call(this,args__52718__auto__);};
metabase$lib$core$ref.cljs$lang$maxFixedArity = 0;
metabase$lib$core$ref.cljs$lang$applyTo = (function (arglist__82084){
var args__52718__auto__ = cljs.core.seq(arglist__82084);
return metabase$lib$core$ref__delegate(args__52718__auto__);
});
metabase$lib$core$ref.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$ref__delegate;
return metabase$lib$core$ref;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.remove_clause = (function() { 
var metabase$lib$core$remove_clause__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.remove_replace.remove_clause,args__52718__auto__);
};
var metabase$lib$core$remove_clause = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82085__i = 0, G__82085__a = new Array(arguments.length -  0);
while (G__82085__i < G__82085__a.length) {G__82085__a[G__82085__i] = arguments[G__82085__i + 0]; ++G__82085__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82085__a,0,null);
} 
return metabase$lib$core$remove_clause__delegate.call(this,args__52718__auto__);};
metabase$lib$core$remove_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$remove_clause.cljs$lang$applyTo = (function (arglist__82086){
var args__52718__auto__ = cljs.core.seq(arglist__82086);
return metabase$lib$core$remove_clause__delegate(args__52718__auto__);
});
metabase$lib$core$remove_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$remove_clause__delegate;
return metabase$lib$core$remove_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.remove_join = (function() { 
var metabase$lib$core$remove_join__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.remove_replace.remove_join,args__52718__auto__);
};
var metabase$lib$core$remove_join = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82087__i = 0, G__82087__a = new Array(arguments.length -  0);
while (G__82087__i < G__82087__a.length) {G__82087__a[G__82087__i] = arguments[G__82087__i + 0]; ++G__82087__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82087__a,0,null);
} 
return metabase$lib$core$remove_join__delegate.call(this,args__52718__auto__);};
metabase$lib$core$remove_join.cljs$lang$maxFixedArity = 0;
metabase$lib$core$remove_join.cljs$lang$applyTo = (function (arglist__82088){
var args__52718__auto__ = cljs.core.seq(arglist__82088);
return metabase$lib$core$remove_join__delegate(args__52718__auto__);
});
metabase$lib$core$remove_join.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$remove_join__delegate;
return metabase$lib$core$remove_join;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.rename_join = (function() { 
var metabase$lib$core$rename_join__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.remove_replace.rename_join,args__52718__auto__);
};
var metabase$lib$core$rename_join = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82089__i = 0, G__82089__a = new Array(arguments.length -  0);
while (G__82089__i < G__82089__a.length) {G__82089__a[G__82089__i] = arguments[G__82089__i + 0]; ++G__82089__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82089__a,0,null);
} 
return metabase$lib$core$rename_join__delegate.call(this,args__52718__auto__);};
metabase$lib$core$rename_join.cljs$lang$maxFixedArity = 0;
metabase$lib$core$rename_join.cljs$lang$applyTo = (function (arglist__82094){
var args__52718__auto__ = cljs.core.seq(arglist__82094);
return metabase$lib$core$rename_join__delegate(args__52718__auto__);
});
metabase$lib$core$rename_join.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$rename_join__delegate;
return metabase$lib$core$rename_join;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.replace_clause = (function() { 
var metabase$lib$core$replace_clause__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.remove_replace.replace_clause,args__52718__auto__);
};
var metabase$lib$core$replace_clause = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82095__i = 0, G__82095__a = new Array(arguments.length -  0);
while (G__82095__i < G__82095__a.length) {G__82095__a[G__82095__i] = arguments[G__82095__i + 0]; ++G__82095__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82095__a,0,null);
} 
return metabase$lib$core$replace_clause__delegate.call(this,args__52718__auto__);};
metabase$lib$core$replace_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$replace_clause.cljs$lang$applyTo = (function (arglist__82096){
var args__52718__auto__ = cljs.core.seq(arglist__82096);
return metabase$lib$core$replace_clause__delegate(args__52718__auto__);
});
metabase$lib$core$replace_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$replace_clause__delegate;
return metabase$lib$core$replace_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.replace_join = (function() { 
var metabase$lib$core$replace_join__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.remove_replace.replace_join,args__52718__auto__);
};
var metabase$lib$core$replace_join = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82097__i = 0, G__82097__a = new Array(arguments.length -  0);
while (G__82097__i < G__82097__a.length) {G__82097__a[G__82097__i] = arguments[G__82097__i + 0]; ++G__82097__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82097__a,0,null);
} 
return metabase$lib$core$replace_join__delegate.call(this,args__52718__auto__);};
metabase$lib$core$replace_join.cljs$lang$maxFixedArity = 0;
metabase$lib$core$replace_join.cljs$lang$applyTo = (function (arglist__82098){
var args__52718__auto__ = cljs.core.seq(arglist__82098);
return metabase$lib$core$replace_join__delegate(args__52718__auto__);
});
metabase$lib$core$replace_join.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$replace_join__delegate;
return metabase$lib$core$replace_join;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.append_stage = (function() { 
var metabase$lib$core$append_stage__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.stage.append_stage,args__52718__auto__);
};
var metabase$lib$core$append_stage = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82099__i = 0, G__82099__a = new Array(arguments.length -  0);
while (G__82099__i < G__82099__a.length) {G__82099__a[G__82099__i] = arguments[G__82099__i + 0]; ++G__82099__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82099__a,0,null);
} 
return metabase$lib$core$append_stage__delegate.call(this,args__52718__auto__);};
metabase$lib$core$append_stage.cljs$lang$maxFixedArity = 0;
metabase$lib$core$append_stage.cljs$lang$applyTo = (function (arglist__82100){
var args__52718__auto__ = cljs.core.seq(arglist__82100);
return metabase$lib$core$append_stage__delegate(args__52718__auto__);
});
metabase$lib$core$append_stage.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$append_stage__delegate;
return metabase$lib$core$append_stage;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.drop_stage = (function() { 
var metabase$lib$core$drop_stage__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.stage.drop_stage,args__52718__auto__);
};
var metabase$lib$core$drop_stage = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82101__i = 0, G__82101__a = new Array(arguments.length -  0);
while (G__82101__i < G__82101__a.length) {G__82101__a[G__82101__i] = arguments[G__82101__i + 0]; ++G__82101__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82101__a,0,null);
} 
return metabase$lib$core$drop_stage__delegate.call(this,args__52718__auto__);};
metabase$lib$core$drop_stage.cljs$lang$maxFixedArity = 0;
metabase$lib$core$drop_stage.cljs$lang$applyTo = (function (arglist__82102){
var args__52718__auto__ = cljs.core.seq(arglist__82102);
return metabase$lib$core$drop_stage__delegate(args__52718__auto__);
});
metabase$lib$core$drop_stage.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$drop_stage__delegate;
return metabase$lib$core$drop_stage;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.describe_temporal_unit = (function() { 
var metabase$lib$core$describe_temporal_unit__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.describe_temporal_unit,args__52718__auto__);
};
var metabase$lib$core$describe_temporal_unit = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82103__i = 0, G__82103__a = new Array(arguments.length -  0);
while (G__82103__i < G__82103__a.length) {G__82103__a[G__82103__i] = arguments[G__82103__i + 0]; ++G__82103__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82103__a,0,null);
} 
return metabase$lib$core$describe_temporal_unit__delegate.call(this,args__52718__auto__);};
metabase$lib$core$describe_temporal_unit.cljs$lang$maxFixedArity = 0;
metabase$lib$core$describe_temporal_unit.cljs$lang$applyTo = (function (arglist__82104){
var args__52718__auto__ = cljs.core.seq(arglist__82104);
return metabase$lib$core$describe_temporal_unit__delegate(args__52718__auto__);
});
metabase$lib$core$describe_temporal_unit.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$describe_temporal_unit__delegate;
return metabase$lib$core$describe_temporal_unit;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.describe_temporal_interval = (function() { 
var metabase$lib$core$describe_temporal_interval__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.describe_temporal_interval,args__52718__auto__);
};
var metabase$lib$core$describe_temporal_interval = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82105__i = 0, G__82105__a = new Array(arguments.length -  0);
while (G__82105__i < G__82105__a.length) {G__82105__a[G__82105__i] = arguments[G__82105__i + 0]; ++G__82105__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82105__a,0,null);
} 
return metabase$lib$core$describe_temporal_interval__delegate.call(this,args__52718__auto__);};
metabase$lib$core$describe_temporal_interval.cljs$lang$maxFixedArity = 0;
metabase$lib$core$describe_temporal_interval.cljs$lang$applyTo = (function (arglist__82106){
var args__52718__auto__ = cljs.core.seq(arglist__82106);
return metabase$lib$core$describe_temporal_interval__delegate(args__52718__auto__);
});
metabase$lib$core$describe_temporal_interval.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$describe_temporal_interval__delegate;
return metabase$lib$core$describe_temporal_interval;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.describe_relative_datetime = (function() { 
var metabase$lib$core$describe_relative_datetime__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.describe_relative_datetime,args__52718__auto__);
};
var metabase$lib$core$describe_relative_datetime = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82107__i = 0, G__82107__a = new Array(arguments.length -  0);
while (G__82107__i < G__82107__a.length) {G__82107__a[G__82107__i] = arguments[G__82107__i + 0]; ++G__82107__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82107__a,0,null);
} 
return metabase$lib$core$describe_relative_datetime__delegate.call(this,args__52718__auto__);};
metabase$lib$core$describe_relative_datetime.cljs$lang$maxFixedArity = 0;
metabase$lib$core$describe_relative_datetime.cljs$lang$applyTo = (function (arglist__82108){
var args__52718__auto__ = cljs.core.seq(arglist__82108);
return metabase$lib$core$describe_relative_datetime__delegate(args__52718__auto__);
});
metabase$lib$core$describe_relative_datetime.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$describe_relative_datetime__delegate;
return metabase$lib$core$describe_relative_datetime;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_temporal_buckets = (function() { 
var metabase$lib$core$available_temporal_buckets__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.available_temporal_buckets,args__52718__auto__);
};
var metabase$lib$core$available_temporal_buckets = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82109__i = 0, G__82109__a = new Array(arguments.length -  0);
while (G__82109__i < G__82109__a.length) {G__82109__a[G__82109__i] = arguments[G__82109__i + 0]; ++G__82109__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82109__a,0,null);
} 
return metabase$lib$core$available_temporal_buckets__delegate.call(this,args__52718__auto__);};
metabase$lib$core$available_temporal_buckets.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_temporal_buckets.cljs$lang$applyTo = (function (arglist__82110){
var args__52718__auto__ = cljs.core.seq(arglist__82110);
return metabase$lib$core$available_temporal_buckets__delegate(args__52718__auto__);
});
metabase$lib$core$available_temporal_buckets.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_temporal_buckets__delegate;
return metabase$lib$core$available_temporal_buckets;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.temporal_bucket = (function() { 
var metabase$lib$core$temporal_bucket__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.temporal_bucket,args__52718__auto__);
};
var metabase$lib$core$temporal_bucket = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82111__i = 0, G__82111__a = new Array(arguments.length -  0);
while (G__82111__i < G__82111__a.length) {G__82111__a[G__82111__i] = arguments[G__82111__i + 0]; ++G__82111__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82111__a,0,null);
} 
return metabase$lib$core$temporal_bucket__delegate.call(this,args__52718__auto__);};
metabase$lib$core$temporal_bucket.cljs$lang$maxFixedArity = 0;
metabase$lib$core$temporal_bucket.cljs$lang$applyTo = (function (arglist__82112){
var args__52718__auto__ = cljs.core.seq(arglist__82112);
return metabase$lib$core$temporal_bucket__delegate(args__52718__auto__);
});
metabase$lib$core$temporal_bucket.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$temporal_bucket__delegate;
return metabase$lib$core$temporal_bucket;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_temporal_bucket = (function() { 
var metabase$lib$core$with_temporal_bucket__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.with_temporal_bucket,args__52718__auto__);
};
var metabase$lib$core$with_temporal_bucket = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__82113__i = 0, G__82113__a = new Array(arguments.length -  0);
while (G__82113__i < G__82113__a.length) {G__82113__a[G__82113__i] = arguments[G__82113__i + 0]; ++G__82113__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__82113__a,0,null);
} 
return metabase$lib$core$with_temporal_bucket__delegate.call(this,args__52718__auto__);};
metabase$lib$core$with_temporal_bucket.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_temporal_bucket.cljs$lang$applyTo = (function (arglist__82114){
var args__52718__auto__ = cljs.core.seq(arglist__82114);
return metabase$lib$core$with_temporal_bucket__delegate(args__52718__auto__);
});
metabase$lib$core$with_temporal_bucket.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_temporal_bucket__delegate;
return metabase$lib$core$with_temporal_bucket;
})()
;
Object.defineProperty(module.exports, "not_null", { enumerable: false, get: function() { return metabase.lib.core.not_null; } });
Object.defineProperty(module.exports, "interval", { enumerable: false, get: function() { return metabase.lib.core.interval; } });
Object.defineProperty(module.exports, "current_limit", { enumerable: false, get: function() { return metabase.lib.core.current_limit; } });
Object.defineProperty(module.exports, "extract_template_tags", { enumerable: false, get: function() { return metabase.lib.core.extract_template_tags; } });
Object.defineProperty(module.exports, "describe_query", { enumerable: false, get: function() { return metabase.lib.core.describe_query; } });
Object.defineProperty(module.exports, "get_day", { enumerable: false, get: function() { return metabase.lib.core.get_day; } });
Object.defineProperty(module.exports, "filter_operator", { enumerable: false, get: function() { return metabase.lib.core.filter_operator; } });
Object.defineProperty(module.exports, "binning", { enumerable: false, get: function() { return metabase.lib.core.binning; } });
Object.defineProperty(module.exports, "query", { enumerable: false, get: function() { return metabase.lib.core.query; } });
Object.defineProperty(module.exports, "columns_group_columns", { enumerable: false, get: function() { return metabase.lib.core.columns_group_columns; } });
Object.defineProperty(module.exports, "join_fields", { enumerable: false, get: function() { return metabase.lib.core.join_fields; } });
Object.defineProperty(module.exports, "aggregate", { enumerable: false, get: function() { return metabase.lib.core.aggregate; } });
Object.defineProperty(module.exports, "join_conditions", { enumerable: false, get: function() { return metabase.lib.core.join_conditions; } });
Object.defineProperty(module.exports, "temporal_bucket", { enumerable: false, get: function() { return metabase.lib.core.temporal_bucket; } });
Object.defineProperty(module.exports, "does_not_contain", { enumerable: false, get: function() { return metabase.lib.core.does_not_contain; } });
Object.defineProperty(module.exports, "remove_clause", { enumerable: false, get: function() { return metabase.lib.core.remove_clause; } });
Object.defineProperty(module.exports, "breakouts_metadata", { enumerable: false, get: function() { return metabase.lib.core.breakouts_metadata; } });
Object.defineProperty(module.exports, "_EQ_", { enumerable: false, get: function() { return metabase.lib.core._EQ_; } });
Object.defineProperty(module.exports, "log", { enumerable: false, get: function() { return metabase.lib.core.log; } });
Object.defineProperty(module.exports, "TemplateTags__GT_", { enumerable: false, get: function() { return metabase.lib.core.TemplateTags__GT_; } });
Object.defineProperty(module.exports, "suggested_join_condition", { enumerable: false, get: function() { return metabase.lib.core.suggested_join_condition; } });
Object.defineProperty(module.exports, "column_name", { enumerable: false, get: function() { return metabase.lib.core.column_name; } });
Object.defineProperty(module.exports, "replace_clause", { enumerable: false, get: function() { return metabase.lib.core.replace_clause; } });
Object.defineProperty(module.exports, "drop_stage", { enumerable: false, get: function() { return metabase.lib.core.drop_stage; } });
Object.defineProperty(module.exports, "_LT_", { enumerable: false, get: function() { return metabase.lib.core._LT_; } });
Object.defineProperty(module.exports, "floor", { enumerable: false, get: function() { return metabase.lib.core.floor; } });
Object.defineProperty(module.exports, "join_lhs_display_name", { enumerable: false, get: function() { return metabase.lib.core.join_lhs_display_name; } });
Object.defineProperty(module.exports, "ends_with", { enumerable: false, get: function() { return metabase.lib.core.ends_with; } });
Object.defineProperty(module.exports, "normalize", { enumerable: false, get: function() { return metabase.lib.core.normalize; } });
Object.defineProperty(module.exports, "native_extras", { enumerable: false, get: function() { return metabase.lib.core.native_extras; } });
Object.defineProperty(module.exports, "available_temporal_buckets", { enumerable: false, get: function() { return metabase.lib.core.available_temporal_buckets; } });
Object.defineProperty(module.exports, "with_binning", { enumerable: false, get: function() { return metabase.lib.core.with_binning; } });
Object.defineProperty(module.exports, "append_stage", { enumerable: false, get: function() { return metabase.lib.core.append_stage; } });
Object.defineProperty(module.exports, "join", { enumerable: false, get: function() { return metabase.lib.core.join; } });
Object.defineProperty(module.exports, "relative_datetime", { enumerable: false, get: function() { return metabase.lib.core.relative_datetime; } });
Object.defineProperty(module.exports, "sum", { enumerable: false, get: function() { return metabase.lib.core.sum; } });
Object.defineProperty(module.exports, "aggregations", { enumerable: false, get: function() { return metabase.lib.core.aggregations; } });
Object.defineProperty(module.exports, "time_interval", { enumerable: false, get: function() { return metabase.lib.core.time_interval; } });
Object.defineProperty(module.exports, "rtrim", { enumerable: false, get: function() { return metabase.lib.core.rtrim; } });
Object.defineProperty(module.exports, "raw_native_query", { enumerable: false, get: function() { return metabase.lib.core.raw_native_query; } });
Object.defineProperty(module.exports, "filterable_column_operators", { enumerable: false, get: function() { return metabase.lib.core.filterable_column_operators; } });
Object.defineProperty(module.exports, "with_temporal_bucket", { enumerable: false, get: function() { return metabase.lib.core.with_temporal_bucket; } });
Object.defineProperty(module.exports, "with_join_conditions", { enumerable: false, get: function() { return metabase.lib.core.with_join_conditions; } });
Object.defineProperty(module.exports, "ceil", { enumerable: false, get: function() { return metabase.lib.core.ceil; } });
Object.defineProperty(module.exports, "available_metrics", { enumerable: false, get: function() { return metabase.lib.core.available_metrics; } });
Object.defineProperty(module.exports, "with_different_database", { enumerable: false, get: function() { return metabase.lib.core.with_different_database; } });
Object.defineProperty(module.exports, "with_fields", { enumerable: false, get: function() { return metabase.lib.core.with_fields; } });
Object.defineProperty(module.exports, "join_clause", { enumerable: false, get: function() { return metabase.lib.core.join_clause; } });
Object.defineProperty(module.exports, "get_quarter", { enumerable: false, get: function() { return metabase.lib.core.get_quarter; } });
Object.defineProperty(module.exports, "raw_join_strategy", { enumerable: false, get: function() { return metabase.lib.core.raw_join_strategy; } });
Object.defineProperty(module.exports, "starts_with", { enumerable: false, get: function() { return metabase.lib.core.starts_with; } });
Object.defineProperty(module.exports, "aggregation_clause", { enumerable: false, get: function() { return metabase.lib.core.aggregation_clause; } });
Object.defineProperty(module.exports, "_LT__EQ_", { enumerable: false, get: function() { return metabase.lib.core._LT__EQ_; } });
Object.defineProperty(module.exports, "upper", { enumerable: false, get: function() { return metabase.lib.core.upper; } });
Object.defineProperty(module.exports, "_STAR_", { enumerable: false, get: function() { return metabase.lib.core._STAR_; } });
Object.defineProperty(module.exports, "min", { enumerable: false, get: function() { return metabase.lib.core.min; } });
Object.defineProperty(module.exports, "external_op", { enumerable: false, get: function() { return metabase.lib.core.external_op; } });
Object.defineProperty(module.exports, "inside", { enumerable: false, get: function() { return metabase.lib.core.inside; } });
Object.defineProperty(module.exports, "with_join_fields", { enumerable: false, get: function() { return metabase.lib.core.with_join_fields; } });
Object.defineProperty(module.exports, "ltrim", { enumerable: false, get: function() { return metabase.lib.core.ltrim; } });
Object.defineProperty(module.exports, "available_binning_strategies", { enumerable: false, get: function() { return metabase.lib.core.available_binning_strategies; } });
Object.defineProperty(module.exports, "contains", { enumerable: false, get: function() { return metabase.lib.core.contains; } });
Object.defineProperty(module.exports, "expression", { enumerable: false, get: function() { return metabase.lib.core.expression; } });
Object.defineProperty(module.exports, "is_empty", { enumerable: false, get: function() { return metabase.lib.core.is_empty; } });
Object.defineProperty(module.exports, "substring", { enumerable: false, get: function() { return metabase.lib.core.substring; } });
Object.defineProperty(module.exports, "expressions_metadata", { enumerable: false, get: function() { return metabase.lib.core.expressions_metadata; } });
Object.defineProperty(module.exports, "describe_relative_datetime", { enumerable: false, get: function() { return metabase.lib.core.describe_relative_datetime; } });
Object.defineProperty(module.exports, "stddev", { enumerable: false, get: function() { return metabase.lib.core.stddev; } });
Object.defineProperty(module.exports, "now", { enumerable: false, get: function() { return metabase.lib.core.now; } });
Object.defineProperty(module.exports, "order_bys", { enumerable: false, get: function() { return metabase.lib.core.order_bys; } });
Object.defineProperty(module.exports, "limit", { enumerable: false, get: function() { return metabase.lib.core.limit; } });
Object.defineProperty(module.exports, "display_info", { enumerable: false, get: function() { return metabase.lib.core.display_info; } });
Object.defineProperty(module.exports, "fieldable_columns", { enumerable: false, get: function() { return metabase.lib.core.fieldable_columns; } });
Object.defineProperty(module.exports, "template_tags", { enumerable: false, get: function() { return metabase.lib.core.template_tags; } });
Object.defineProperty(module.exports, "aggregation_ref", { enumerable: false, get: function() { return metabase.lib.core.aggregation_ref; } });
Object.defineProperty(module.exports, "selected_aggregation_operators", { enumerable: false, get: function() { return metabase.lib.core.selected_aggregation_operators; } });
Object.defineProperty(module.exports, "_GT_", { enumerable: false, get: function() { return metabase.lib.core._GT_; } });
Object.defineProperty(module.exports, "replace", { enumerable: false, get: function() { return metabase.lib.core.replace; } });
Object.defineProperty(module.exports, "order_by_clause", { enumerable: false, get: function() { return metabase.lib.core.order_by_clause; } });
Object.defineProperty(module.exports, "filterable_columns", { enumerable: false, get: function() { return metabase.lib.core.filterable_columns; } });
Object.defineProperty(module.exports, "join_condition_rhs_columns", { enumerable: false, get: function() { return metabase.lib.core.join_condition_rhs_columns; } });
Object.defineProperty(module.exports, "filters", { enumerable: false, get: function() { return metabase.lib.core.filters; } });
Object.defineProperty(module.exports, "join_condition_lhs_columns", { enumerable: false, get: function() { return metabase.lib.core.join_condition_lhs_columns; } });
Object.defineProperty(module.exports, "sqrt", { enumerable: false, get: function() { return metabase.lib.core.sqrt; } });
Object.defineProperty(module.exports, "ref", { enumerable: false, get: function() { return metabase.lib.core.ref; } });
Object.defineProperty(module.exports, "convert_timezone", { enumerable: false, get: function() { return metabase.lib.core.convert_timezone; } });
Object.defineProperty(module.exports, "get_minute", { enumerable: false, get: function() { return metabase.lib.core.get_minute; } });
Object.defineProperty(module.exports, "concat", { enumerable: false, get: function() { return metabase.lib.core.concat; } });
Object.defineProperty(module.exports, "count_where", { enumerable: false, get: function() { return metabase.lib.core.count_where; } });
Object.defineProperty(module.exports, "orderable_columns", { enumerable: false, get: function() { return metabase.lib.core.orderable_columns; } });
Object.defineProperty(module.exports, "_", { enumerable: false, get: function() { return metabase.lib.core._; } });
Object.defineProperty(module.exports, "cum_count", { enumerable: false, get: function() { return metabase.lib.core.cum_count; } });
Object.defineProperty(module.exports, "describe_top_level_key", { enumerable: false, get: function() { return metabase.lib.core.describe_top_level_key; } });
Object.defineProperty(module.exports, "or", { enumerable: false, get: function() { return metabase.lib.core.or; } });
Object.defineProperty(module.exports, "exp", { enumerable: false, get: function() { return metabase.lib.core.exp; } });
Object.defineProperty(module.exports, "filter_clause", { enumerable: false, get: function() { return metabase.lib.core.filter_clause; } });
Object.defineProperty(module.exports, "fields", { enumerable: false, get: function() { return metabase.lib.core.fields; } });
Object.defineProperty(module.exports, "time", { enumerable: false, get: function() { return metabase.lib.core.time; } });
Object.defineProperty(module.exports, "available_aggregation_operators", { enumerable: false, get: function() { return metabase.lib.core.available_aggregation_operators; } });
Object.defineProperty(module.exports, "get_week", { enumerable: false, get: function() { return metabase.lib.core.get_week; } });
Object.defineProperty(module.exports, "breakouts", { enumerable: false, get: function() { return metabase.lib.core.breakouts; } });
Object.defineProperty(module.exports, "joinable_columns", { enumerable: false, get: function() { return metabase.lib.core.joinable_columns; } });
Object.defineProperty(module.exports, "group_columns", { enumerable: false, get: function() { return metabase.lib.core.group_columns; } });
Object.defineProperty(module.exports, "aggregations_metadata", { enumerable: false, get: function() { return metabase.lib.core.aggregations_metadata; } });
Object.defineProperty(module.exports, "describe_temporal_unit", { enumerable: false, get: function() { return metabase.lib.core.describe_temporal_unit; } });
Object.defineProperty(module.exports, "joins", { enumerable: false, get: function() { return metabase.lib.core.joins; } });
Object.defineProperty(module.exports, "get_hour", { enumerable: false, get: function() { return metabase.lib.core.get_hour; } });
Object.defineProperty(module.exports, "saved_question_query", { enumerable: false, get: function() { return metabase.lib.core.saved_question_query; } });
Object.defineProperty(module.exports, "native_query", { enumerable: false, get: function() { return metabase.lib.core.native_query; } });
Object.defineProperty(module.exports, "between", { enumerable: false, get: function() { return metabase.lib.core.between; } });
Object.defineProperty(module.exports, "available_join_strategies", { enumerable: false, get: function() { return metabase.lib.core.available_join_strategies; } });
Object.defineProperty(module.exports, "sum_where", { enumerable: false, get: function() { return metabase.lib.core.sum_where; } });
Object.defineProperty(module.exports, "not", { enumerable: false, get: function() { return metabase.lib.core.not; } });
Object.defineProperty(module.exports, "with_native_extras", { enumerable: false, get: function() { return metabase.lib.core.with_native_extras; } });
Object.defineProperty(module.exports, "cum_sum", { enumerable: false, get: function() { return metabase.lib.core.cum_sum; } });
Object.defineProperty(module.exports, "coalesce", { enumerable: false, get: function() { return metabase.lib.core.coalesce; } });
Object.defineProperty(module.exports, "join_strategy", { enumerable: false, get: function() { return metabase.lib.core.join_strategy; } });
Object.defineProperty(module.exports, "expression_ref", { enumerable: false, get: function() { return metabase.lib.core.expression_ref; } });
Object.defineProperty(module.exports, "is_null", { enumerable: false, get: function() { return metabase.lib.core.is_null; } });
Object.defineProperty(module.exports, "regexextract", { enumerable: false, get: function() { return metabase.lib.core.regexextract; } });
Object.defineProperty(module.exports, "_SLASH_", { enumerable: false, get: function() { return metabase.lib.core._SLASH_; } });
Object.defineProperty(module.exports, "_GT__EQ_", { enumerable: false, get: function() { return metabase.lib.core._GT__EQ_; } });
Object.defineProperty(module.exports, "absolute_datetime", { enumerable: false, get: function() { return metabase.lib.core.absolute_datetime; } });
Object.defineProperty(module.exports, "suggested_name", { enumerable: false, get: function() { return metabase.lib.core.suggested_name; } });
Object.defineProperty(module.exports, "not_empty", { enumerable: false, get: function() { return metabase.lib.core.not_empty; } });
Object.defineProperty(module.exports, "distinct", { enumerable: false, get: function() { return metabase.lib.core.distinct; } });
Object.defineProperty(module.exports, "__GT_TemplateTags", { enumerable: false, get: function() { return metabase.lib.core.__GT_TemplateTags; } });
Object.defineProperty(module.exports, "type_of", { enumerable: false, get: function() { return metabase.lib.core.type_of; } });
Object.defineProperty(module.exports, "percentile", { enumerable: false, get: function() { return metabase.lib.core.percentile; } });
Object.defineProperty(module.exports, "aggregation_operator_columns", { enumerable: false, get: function() { return metabase.lib.core.aggregation_operator_columns; } });
Object.defineProperty(module.exports, "round", { enumerable: false, get: function() { return metabase.lib.core.round; } });
Object.defineProperty(module.exports, "power", { enumerable: false, get: function() { return metabase.lib.core.power; } });
Object.defineProperty(module.exports, "datetime_subtract", { enumerable: false, get: function() { return metabase.lib.core.datetime_subtract; } });
Object.defineProperty(module.exports, "join_condition_operators", { enumerable: false, get: function() { return metabase.lib.core.join_condition_operators; } });
Object.defineProperty(module.exports, "expressionable_columns", { enumerable: false, get: function() { return metabase.lib.core.expressionable_columns; } });
Object.defineProperty(module.exports, "get_second", { enumerable: false, get: function() { return metabase.lib.core.get_second; } });
Object.defineProperty(module.exports, "filter", { enumerable: false, get: function() { return metabase.lib.core.filter; } });
Object.defineProperty(module.exports, "_PLUS_", { enumerable: false, get: function() { return metabase.lib.core._PLUS_; } });
Object.defineProperty(module.exports, "var$", { enumerable: false, get: function() { return metabase.lib.core.var$; } });
Object.defineProperty(module.exports, "abs", { enumerable: false, get: function() { return metabase.lib.core.abs; } });
Object.defineProperty(module.exports, "datetime_add", { enumerable: false, get: function() { return metabase.lib.core.datetime_add; } });
Object.defineProperty(module.exports, "median", { enumerable: false, get: function() { return metabase.lib.core.median; } });
Object.defineProperty(module.exports, "share", { enumerable: false, get: function() { return metabase.lib.core.share; } });
Object.defineProperty(module.exports, "replace_join", { enumerable: false, get: function() { return metabase.lib.core.replace_join; } });
Object.defineProperty(module.exports, "with_join_alias", { enumerable: false, get: function() { return metabase.lib.core.with_join_alias; } });
Object.defineProperty(module.exports, "case$", { enumerable: false, get: function() { return metabase.lib.core.case$; } });
Object.defineProperty(module.exports, "change_direction", { enumerable: false, get: function() { return metabase.lib.core.change_direction; } });
Object.defineProperty(module.exports, "segment", { enumerable: false, get: function() { return metabase.lib.core.segment; } });
Object.defineProperty(module.exports, "max", { enumerable: false, get: function() { return metabase.lib.core.max; } });
Object.defineProperty(module.exports, "_BANG__EQ_", { enumerable: false, get: function() { return metabase.lib.core._BANG__EQ_; } });
Object.defineProperty(module.exports, "get_month", { enumerable: false, get: function() { return metabase.lib.core.get_month; } });
Object.defineProperty(module.exports, "count", { enumerable: false, get: function() { return metabase.lib.core.count; } });
Object.defineProperty(module.exports, "with_template_tags", { enumerable: false, get: function() { return metabase.lib.core.with_template_tags; } });
Object.defineProperty(module.exports, "expressions", { enumerable: false, get: function() { return metabase.lib.core.expressions; } });
Object.defineProperty(module.exports, "lower", { enumerable: false, get: function() { return metabase.lib.core.lower; } });
Object.defineProperty(module.exports, "with_join_strategy", { enumerable: false, get: function() { return metabase.lib.core.with_join_strategy; } });
Object.defineProperty(module.exports, "length", { enumerable: false, get: function() { return metabase.lib.core.length; } });
Object.defineProperty(module.exports, "get_year", { enumerable: false, get: function() { return metabase.lib.core.get_year; } });
Object.defineProperty(module.exports, "order_by", { enumerable: false, get: function() { return metabase.lib.core.order_by; } });
Object.defineProperty(module.exports, "describe_temporal_interval", { enumerable: false, get: function() { return metabase.lib.core.describe_temporal_interval; } });
Object.defineProperty(module.exports, "breakout", { enumerable: false, get: function() { return metabase.lib.core.breakout; } });
Object.defineProperty(module.exports, "database_id", { enumerable: false, get: function() { return metabase.lib.core.database_id; } });
Object.defineProperty(module.exports, "required_native_extras", { enumerable: false, get: function() { return metabase.lib.core.required_native_extras; } });
Object.defineProperty(module.exports, "display_name", { enumerable: false, get: function() { return metabase.lib.core.display_name; } });
Object.defineProperty(module.exports, "remove_join", { enumerable: false, get: function() { return metabase.lib.core.remove_join; } });
Object.defineProperty(module.exports, "trim", { enumerable: false, get: function() { return metabase.lib.core.trim; } });
Object.defineProperty(module.exports, "and", { enumerable: false, get: function() { return metabase.lib.core.and; } });
Object.defineProperty(module.exports, "with_native_query", { enumerable: false, get: function() { return metabase.lib.core.with_native_query; } });
Object.defineProperty(module.exports, "breakoutable_columns", { enumerable: false, get: function() { return metabase.lib.core.breakoutable_columns; } });
Object.defineProperty(module.exports, "avg", { enumerable: false, get: function() { return metabase.lib.core.avg; } });
Object.defineProperty(module.exports, "rename_join", { enumerable: false, get: function() { return metabase.lib.core.rename_join; } });
//# sourceMappingURL=metabase.lib.core.js.map
