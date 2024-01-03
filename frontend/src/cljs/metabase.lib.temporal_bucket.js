var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.temporal_bucket.js");

goog.provide('metabase.lib.temporal_bucket');
/**
 * Inputs: ([]
 *         [unit]
 *         [n :- :int unit :- [:maybe :keyword]])
 *   Return: :string
 *        
 * 
 *   Get a translated description of a temporal bucketing unit.
 */
metabase.lib.temporal_bucket.describe_temporal_unit = (function metabase$lib$temporal_bucket$describe_temporal_unit(var_args){
var G__65141 = arguments.length;
switch (G__65141) {
case 0:
return metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$0 = (function (){

return metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2((1),null);
}));

(metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1 = (function (unit){

return metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2((1),unit);
}));

(metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2 = (function (n,unit){

if(cljs.core.not(unit)){
return "";
} else {
var n__$1 = cljs.core.abs(n);
var G__65142 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit);
var G__65142__$1 = (((G__65142 instanceof cljs.core.Keyword))?G__65142.fqn:null);
switch (G__65142__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n_n("Default period","Default periods",n__$1);

break;
case "millisecond":
return metabase.shared.util.i18n.js_i18n_n("Millisecond","Milliseconds",n__$1);

break;
case "second":
return metabase.shared.util.i18n.js_i18n_n("Second","Seconds",n__$1);

break;
case "minute":
return metabase.shared.util.i18n.js_i18n_n("Minute","Minutes",n__$1);

break;
case "hour":
return metabase.shared.util.i18n.js_i18n_n("Hour","Hours",n__$1);

break;
case "day":
return metabase.shared.util.i18n.js_i18n_n("Day","Days",n__$1);

break;
case "week":
return metabase.shared.util.i18n.js_i18n_n("Week","Weeks",n__$1);

break;
case "month":
return metabase.shared.util.i18n.js_i18n_n("Month","Months",n__$1);

break;
case "quarter":
return metabase.shared.util.i18n.js_i18n_n("Quarter","Quarters",n__$1);

break;
case "year":
return metabase.shared.util.i18n.js_i18n_n("Year","Years",n__$1);

break;
case "minute-of-hour":
return metabase.shared.util.i18n.js_i18n_n("Minute of hour","Minutes of hour",n__$1);

break;
case "hour-of-day":
return metabase.shared.util.i18n.js_i18n_n("Hour of day","Hours of day",n__$1);

break;
case "day-of-week":
return metabase.shared.util.i18n.js_i18n_n("Day of week","Days of week",n__$1);

break;
case "day-of-month":
return metabase.shared.util.i18n.js_i18n_n("Day of month","Days of month",n__$1);

break;
case "day-of-year":
return metabase.shared.util.i18n.js_i18n_n("Day of year","Days of year",n__$1);

break;
case "week-of-year":
return metabase.shared.util.i18n.js_i18n_n("Week of year","Weeks of year",n__$1);

break;
case "month-of-year":
return metabase.shared.util.i18n.js_i18n_n("Month of year","Months of year",n__$1);

break;
case "quarter-of-year":
return metabase.shared.util.i18n.js_i18n_n("Quarter of year","Quarters of year",n__$1);

break;
default:
var vec__65190 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(unit),/-/);
var seq__65191 = cljs.core.seq(vec__65190);
var first__65192 = cljs.core.first(seq__65191);
var seq__65191__$1 = cljs.core.next(seq__65191);
var unit__$1 = first__65192;
var more = seq__65191__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cons(clojure.string.capitalize(unit__$1),more));

}
}
}));

(metabase.lib.temporal_bucket.describe_temporal_unit.cljs$lang$maxFixedArity = 2);

metabase.lib.temporal_bucket.TemporalIntervalAmount = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"next","next",-117701485)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null);
metabase.lib.temporal_bucket.interval_n__GT_int = (function metabase$lib$temporal_bucket$interval_n__GT_int(n){
if(typeof n === 'number'){
return n;
} else {
var G__65204 = n;
var G__65204__$1 = (((G__65204 instanceof cljs.core.Keyword))?G__65204.fqn:null);
switch (G__65204__$1) {
case "current":
return (0);

break;
case "next":
return (1);

break;
case "last":
return (-1);

break;
default:
return (0);

}
}
});
/**
 * Inputs: [n :- TemporalIntervalAmount unit :- [:maybe :keyword]]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Get a translated description of a temporal bucketing interval. If unit is unspecified, assume `:day`.
 */
metabase.lib.temporal_bucket.describe_temporal_interval = (function metabase$lib$temporal_bucket$describe_temporal_interval(n,unit){

var n__$1 = metabase.lib.temporal_bucket.interval_n__GT_int(n);
var unit__$1 = (function (){var or__5045__auto__ = unit;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"day","day",-274800446);
}
})();
if((n__$1 === (0))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit__$1,new cljs.core.Keyword(null,"day","day",-274800446))){
return metabase.shared.util.i18n.js_i18n("Today");
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("This {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1(unit__$1)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit__$1,new cljs.core.Keyword(null,"day","day",-274800446))){
return metabase.shared.util.i18n.js_i18n("Tomorrow");
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Next {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1(unit__$1)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(-1))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit__$1,new cljs.core.Keyword(null,"day","day",-274800446))){
return metabase.shared.util.i18n.js_i18n("Yesterday");
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Previous {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1(unit__$1)], 0));
}
} else {
if((n__$1 < (0))){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Previous {0} {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.abs(n__$1),metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2(cljs.core.abs(n__$1),unit__$1)], 0));
} else {
if((n__$1 > (0))){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Next {0} {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2(n__$1,unit__$1)], 0));
} else {
return null;
}
}
}
}
}
});
/**
 * Inputs: [n :- TemporalIntervalAmount unit :- [:maybe :keyword]]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Get a translated description of a relative datetime interval, ported from
 *  `frontend/src/metabase-lib/queries/utils/query-time.js`.
 * 
 *   e.g. if the relative interval is `-1 days`, then `n` = `-1` and `unit` = `:day`.
 * 
 *   If `:unit` is unspecified, assume `:day`.
 */
metabase.lib.temporal_bucket.describe_relative_datetime = (function metabase$lib$temporal_bucket$describe_relative_datetime(n,unit){

var n__$1 = metabase.lib.temporal_bucket.interval_n__GT_int(n);
var unit__$1 = (function (){var or__5045__auto__ = unit;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"day","day",-274800446);
}
})();
if((n__$1 === (0))){
return metabase.shared.util.i18n.js_i18n("Now");
} else {
if((n__$1 < (0))){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} {1} ago",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.abs(n__$1),clojure.string.lower_case(metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2(cljs.core.abs(n__$1),unit__$1))], 0));
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} {1} from now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,clojure.string.lower_case(metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2(n__$1,unit__$1))], 0));

}
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.temporal_bucket !== 'undefined') && (typeof metabase.lib.temporal_bucket.with_temporal_bucket_method !== 'undefined')){
} else {
/**
 * Implementation for [[temporal-bucket]]. Implement this to tell [[temporal-bucket]] how to add a bucket to a
 *   particular MBQL clause.
 */
metabase.lib.temporal_bucket.with_temporal_bucket_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65231 = cljs.core.get_global_hierarchy;
return (fexpr__65231.cljs$core$IFn$_invoke$arity$0 ? fexpr__65231.cljs$core$IFn$_invoke$arity$0() : fexpr__65231.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.temporal-bucket","with-temporal-bucket-method"),(function (x,_unit){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
/**
 * Inputs: [x option-or-unit :- [:maybe [:or :metabase.lib.schema.temporal-bucketing/option :metabase.lib.schema.temporal-bucketing/unit]]]
 *   Return: :any
 *        
 * 
 *   Add a temporal bucketing unit, e.g. `:day` or `:day-of-year`, to an MBQL clause or something that can be converted to
 *   an MBQL clause. E.g. for a Field or Field metadata or `:field` clause, this might do something like this:
 * 
 *  (temporal some-field :day)
 * 
 *  =>
 * 
 *  [:field 1 {:temporal-unit :day}]
 * 
 *   Pass a `nil` `unit` to remove the temporal bucket.
 */
metabase.lib.temporal_bucket.with_temporal_bucket = (function metabase$lib$temporal_bucket$with_temporal_bucket(x,option_or_unit){

return metabase.lib.temporal_bucket.with_temporal_bucket_method.cljs$core$IFn$_invoke$arity$2(x,(function (){var G__65246 = option_or_unit;
if((!((option_or_unit instanceof cljs.core.Keyword)))){
return new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__65246);
} else {
return G__65246;
}
})());
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.temporal_bucket !== 'undefined') && (typeof metabase.lib.temporal_bucket.temporal_bucket_method !== 'undefined')){
} else {
/**
 * Implementation of [[temporal-bucket]]. Return the current temporal bucketing unit associated with `x`.
 */
metabase.lib.temporal_bucket.temporal_bucket_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65253 = cljs.core.get_global_hierarchy;
return (fexpr__65253.cljs$core$IFn$_invoke$arity$0 ? fexpr__65253.cljs$core$IFn$_invoke$arity$0() : fexpr__65253.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.temporal-bucket","temporal-bucket-method"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.temporal_bucket.temporal_bucket_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_x){
return null;
}));
/**
 * Inputs: [x]
 *   Return: [:maybe :metabase.lib.schema.temporal-bucketing/option]
 *        
 * 
 *   Get the current temporal bucketing option associated with something, if any.
 */
metabase.lib.temporal_bucket.temporal_bucket = (function metabase$lib$temporal_bucket$temporal_bucket(x){

var temp__5804__auto__ = metabase.lib.temporal_bucket.temporal_bucket_method.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5804__auto__)){
var unit = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
} else {
return null;
}
});
/**
 * The temporal bucketing options for time type expressions.
 */
metabase.lib.temporal_bucket.time_bucket_options = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (unit){
var G__65260 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"hour","hour",-555989214))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65260,new cljs.core.Keyword(null,"default","default",-1987822328),true);
} else {
return G__65260;
}
}),metabase.lib.schema.temporal_bucketing.ordered_time_bucketing_units);
/**
 * The temporal bucketing options for date type expressions.
 */
metabase.lib.temporal_bucket.date_bucket_options = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (unit){
var G__65261 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"day","day",-274800446))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65261,new cljs.core.Keyword(null,"default","default",-1987822328),true);
} else {
return G__65261;
}
}),metabase.lib.schema.temporal_bucketing.ordered_date_bucketing_units);
/**
 * The temporal bucketing options for datetime type expressions.
 */
metabase.lib.temporal_bucket.datetime_bucket_options = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (unit){
var G__65262 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"day","day",-274800446))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65262,new cljs.core.Keyword(null,"default","default",-1987822328),true);
} else {
return G__65262;
}
}),metabase.lib.schema.temporal_bucketing.ordered_datetime_bucketing_units);
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),(function (_query,_stage_number,p__65263,_style){
var map__65264 = p__65263;
var map__65264__$1 = cljs.core.__destructure_map(map__65264);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65264__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
return metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1(unit);
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),(function (query,stage_number,option){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,option)], null),cljs.core.select_keys(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"selected","selected",574897764)], null))], 0));
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.temporal_bucket !== 'undefined') && (typeof metabase.lib.temporal_bucket.available_temporal_buckets_method !== 'undefined')){
} else {
/**
 * Implementation for [[available-temporal-buckets]]. Return a set of units from
 *   `:metabase.lib.schema.temporal-bucketing/unit` that are allowed to be used with `x`.
 */
metabase.lib.temporal_bucket.available_temporal_buckets_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65268 = cljs.core.get_global_hierarchy;
return (fexpr__65268.cljs$core$IFn$_invoke$arity$0 ? fexpr__65268.cljs$core$IFn$_invoke$arity$0() : fexpr__65268.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.temporal-bucket","available-temporal-buckets-method"),(function (_query,_stage_number,x){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.temporal_bucket.available_temporal_buckets_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_query,_stage_number,_x){
return cljs.core.PersistentHashSet.EMPTY;
}));
/**
 * Inputs: ([query x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x])
 *   Return: [:sequential [:ref :metabase.lib.schema.temporal-bucketing/option]]
 *        
 * 
 *   Get a set of available temporal bucketing units for `x`. Returns nil if no units are available.
 */
metabase.lib.temporal_bucket.available_temporal_buckets = (function metabase$lib$temporal_bucket$available_temporal_buckets(var_args){
var G__65280 = arguments.length;
switch (G__65280) {
case 2:
return metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$2 = (function (query,x){

return metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3(query,(-1),x);
}));

(metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,x){

return metabase.lib.temporal_bucket.available_temporal_buckets_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
}));

(metabase.lib.temporal_bucket.available_temporal_buckets.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "temporal_bucket", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.temporal_bucket; } });
Object.defineProperty(module.exports, "available_temporal_buckets", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.available_temporal_buckets; } });
Object.defineProperty(module.exports, "TemporalIntervalAmount", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.TemporalIntervalAmount; } });
Object.defineProperty(module.exports, "with_temporal_bucket", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.with_temporal_bucket; } });
Object.defineProperty(module.exports, "available_temporal_buckets_method", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.available_temporal_buckets_method; } });
Object.defineProperty(module.exports, "datetime_bucket_options", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.datetime_bucket_options; } });
Object.defineProperty(module.exports, "describe_relative_datetime", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.describe_relative_datetime; } });
Object.defineProperty(module.exports, "temporal_bucket_method", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.temporal_bucket_method; } });
Object.defineProperty(module.exports, "describe_temporal_unit", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.describe_temporal_unit; } });
Object.defineProperty(module.exports, "date_bucket_options", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.date_bucket_options; } });
Object.defineProperty(module.exports, "with_temporal_bucket_method", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.with_temporal_bucket_method; } });
Object.defineProperty(module.exports, "interval_n__GT_int", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.interval_n__GT_int; } });
Object.defineProperty(module.exports, "describe_temporal_interval", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.describe_temporal_interval; } });
Object.defineProperty(module.exports, "time_bucket_options", { enumerable: false, get: function() { return metabase.lib.temporal_bucket.time_bucket_options; } });
//# sourceMappingURL=metabase.lib.temporal_bucket.js.map
