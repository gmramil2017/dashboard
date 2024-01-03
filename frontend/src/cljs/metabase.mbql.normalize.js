var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./clojure.walk.js");
require("./medley.core.js");
require("./metabase.mbql.util.js");
require("./metabase.mbql.util.match.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.log.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.mbql.normalize.js");

goog.provide('metabase.mbql.normalize');
/**
 * True if `x` is an MBQL clause (a sequence with a token as its first arg). (This is different from the implementation
 *   in `mbql.u` because it also supports un-normalized clauses. You shouldn't need to use this outside of this
 *   namespace.)
 */
metabase.mbql.normalize.mbql_clause_QMARK_ = (function metabase$mbql$normalize$mbql_clause_QMARK_(x){
var and__5043__auto__ = cljs.core.sequential_QMARK_(x);
if(and__5043__auto__){
var and__5043__auto____$1 = (!(cljs.core.map_entry_QMARK_(x)));
if(and__5043__auto____$1){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(cljs.core.first(x));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
/**
 * Normalize token `x`, but only if it's a keyword or string.
 */
metabase.mbql.normalize.maybe_normalize_token = (function metabase$mbql$normalize$maybe_normalize_token(x){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(x))){
return metabase.mbql.util.normalize_token(x);
} else {
return x;
}
});
/**
 * If `x` an MBQL clause, and an instance of clauses defined by keyword(s) `k-or-ks`?
 * 
 *  (is-clause? :count [:count 10])        ; -> true
 *  (is-clause? #{:+ :- :* :/} [:+ 10 20]) ; -> true
 * 
 *   (This is different from the implementation in `mbql.u` because it also supports un-normalized clauses. You shouldn't
 *   need to use this outside of this namespace.)
 */
metabase.mbql.normalize.is_clause_QMARK_ = (function metabase$mbql$normalize$is_clause_QMARK_(k_or_ks,x){
var and__5043__auto__ = metabase.mbql.normalize.mbql_clause_QMARK_(x);
if(cljs.core.truth_(and__5043__auto__)){
var clause_name = metabase.mbql.normalize.maybe_normalize_token(cljs.core.first(x));
if(cljs.core.coll_QMARK_(k_or_ks)){
var fexpr__80515 = cljs.core.set(k_or_ks);
return (fexpr__80515.cljs$core$IFn$_invoke$arity$1 ? fexpr__80515.cljs$core$IFn$_invoke$arity$1(clause_name) : fexpr__80515.call(null,clause_name));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_or_ks,clause_name);
}
} else {
return and__5043__auto__;
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.mbql !== 'undefined') && (typeof metabase.mbql.normalize !== 'undefined') && (typeof metabase.mbql.normalize.normalize_mbql_clause_tokens !== 'undefined')){
} else {
metabase.mbql.normalize.normalize_mbql_clause_tokens = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__80517 = cljs.core.get_global_hierarchy;
return (fexpr__80517.cljs$core$IFn$_invoke$arity$0 ? fexpr__80517.cljs$core$IFn$_invoke$arity$0() : fexpr__80517.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.mbql.normalize","normalize-mbql-clause-tokens"),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.maybe_normalize_token,cljs.core.first),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p__80518){
var vec__80519 = p__80518;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80519,(0),null);
var aggregation_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80519,(1),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80519,(2),null);
var G__80522 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),aggregation_index], null);
if((!((option == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__80522,option);
} else {
return G__80522;
}
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (p__80523){
var vec__80524 = p__80523;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80524,(0),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80524,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),(((expression_name instanceof cljs.core.Keyword))?metabase.mbql.util.qualified_name(expression_name):expression_name)], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),(function (p__80528){
var vec__80529 = p__80528;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80529,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80529,(1),null);
var strategy_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80529,(2),null);
var strategy_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80529,(3),null);
if(cljs.core.truth_(strategy_param)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),field,strategy_name], null)),strategy_param);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.mbql.normalize.maybe_normalize_token(strategy_name)], null);
}
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__80532){
var vec__80533 = p__80532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80533,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80533,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80533,(2),null);
var opts__$1 = (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,opts,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,(function (){var G__80536 = opts__$1;
var G__80536__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80536,new cljs.core.Keyword(null,"base-type","base-type",1167971299),cljs.core.keyword):G__80536);
var G__80536__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80536__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),cljs.core.keyword):G__80536__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binning","binning",1709835866).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80536__$2,new cljs.core.Keyword(null,"binning","binning",1709835866),(function (binning){
var G__80537 = binning;
if(cljs.core.truth_(new cljs.core.Keyword(null,"strategy","strategy",-1471631918).cljs$core$IFn$_invoke$arity$1(binning))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80537,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),cljs.core.keyword);
} else {
return G__80537;
}
}));
} else {
return G__80536__$2;
}
})()], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field-literal","field-literal",-1295883554),(function (p__80538){
var vec__80539 = p__80538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80539,(0),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80539,(1),null);
var field_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80539,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field-literal","field-literal",-1295883554),(((field_name instanceof cljs.core.Keyword))?metabase.mbql.util.qualified_name(field_name):field_name),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_type)], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(function (p__80542){
var vec__80543 = p__80542;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80543,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80543,(1),null);
var as_or_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80543,(2),null);
var maybe_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80543,(3),null);
if(cljs.core.truth_(maybe_unit)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),new cljs.core.Keyword(null,"as","as",1148689641),metabase.mbql.normalize.maybe_normalize_token(maybe_unit)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.mbql.normalize.maybe_normalize_token(as_or_unit)], null);
}
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(function (p__80547){
var vec__80548 = p__80547;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80548,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80548,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80548,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80548,(3),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80548,(4),null);
if(cljs.core.truth_(options)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field,amount,unit], null)),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,options,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))));
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),((cljs.core.integer_QMARK_(amount))?amount:metabase.mbql.normalize.maybe_normalize_token(amount)),metabase.mbql.normalize.maybe_normalize_token(unit)], null);
}
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(function (p__80556){
var vec__80557 = p__80556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80557,(0),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80557,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80557,(2),null);
if(cljs.core.truth_(unit)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),amount,metabase.mbql.normalize.maybe_normalize_token(unit)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),new cljs.core.Keyword(null,"current","current",-1088038603)], null);
}
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"interval","interval",1708495417),(function (p__80560){
var vec__80561 = p__80560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80561,(0),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80561,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80561,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interval","interval",1708495417),amount,metabase.mbql.normalize.maybe_normalize_token(unit)], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),(function (p__80564){
var vec__80565 = p__80564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80565,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80565,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80565,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80565,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),amount,metabase.mbql.normalize.maybe_normalize_token(unit)], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-subtract","datetime-subtract",275307697),(function (p__80568){
var vec__80569 = p__80568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80569,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80569,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80569,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80569,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-subtract","datetime-subtract",275307697),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),amount,metabase.mbql.normalize.maybe_normalize_token(unit)], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"get-week","get-week",-888059349),(function (p__80572){
var vec__80573 = p__80572;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80573,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80573,(1),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80573,(2),null);
if(cljs.core.truth_(mode)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.mbql.normalize.maybe_normalize_token(mode)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)))], null);
}
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"temporal-extract","temporal-extract",1781686405),(function (p__80576){
var vec__80577 = p__80576;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80577,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80577,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80577,(2),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80577,(3),null);
if(cljs.core.truth_(mode)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temporal-extract","temporal-extract",1781686405),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.mbql.normalize.maybe_normalize_token(unit),metabase.mbql.normalize.maybe_normalize_token(mode)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temporal-extract","temporal-extract",1781686405),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.mbql.normalize.maybe_normalize_token(unit)], null);
}
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-diff","datetime-diff",1133112155),(function (p__80580){
var vec__80581 = p__80580;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80581,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80581,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80581,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80581,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-diff","datetime-diff",1133112155),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,x,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(y,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,y,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.mbql.normalize.maybe_normalize_token(unit)], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"value","value",305978217),(function (p__80584){
var vec__80585 = p__80584;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80585,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80585,(1),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80585,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value,info], null);
}));
metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__80589){
var vec__80590 = p__80589;
var seq__80591 = cljs.core.seq(vec__80590);
var first__80592 = cljs.core.first(seq__80591);
var seq__80591__$1 = cljs.core.next(seq__80591);
var clause_name = first__80592;
var args = seq__80591__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.normalize.maybe_normalize_token(clause_name)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__80588_SHARP_){
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(p1__80588_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,p1__80588_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
})),args);
}));
metabase.mbql.normalize.aggregation_subclause_QMARK_ = (function metabase$mbql$normalize$aggregation_subclause_QMARK_(x){
var or__5045__auto__ = (cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(x))?(function (){var G__80595 = metabase.mbql.normalize.maybe_normalize_token(x);
var fexpr__80594 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"min","min",444991522),null,new cljs.core.Keyword(null,"*","*",-1294732318),null,new cljs.core.Keyword(null,"stddev","stddev",-865474939),null,new cljs.core.Keyword(null,"count-where","count-where",385407720),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543),null,new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),null,new cljs.core.Keyword(null,"/","/",1282502798),null,new cljs.core.Keyword(null,"distinct","distinct",-1788879121),null,new cljs.core.Keyword(null,"percentile","percentile",-601188752),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"median","median",569566131),null,new cljs.core.Keyword(null,"share","share",-589433933),null,new cljs.core.Keyword(null,"max","max",61366548),null,new cljs.core.Keyword(null,"count","count",2139924085),null,new cljs.core.Keyword(null,"avg","avg",197406200),null,new cljs.core.Keyword(null,"sum","sum",136986814),null], null), null);
return (fexpr__80594.cljs$core$IFn$_invoke$arity$1 ? fexpr__80594.cljs$core$IFn$_invoke$arity$1(G__80595) : fexpr__80594.call(null,G__80595));
})():null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(x))){
var G__80596 = cljs.core.first(x);
return (metabase.mbql.normalize.aggregation_subclause_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.normalize.aggregation_subclause_QMARK_.cljs$core$IFn$_invoke$arity$1(G__80596) : metabase.mbql.normalize.aggregation_subclause_QMARK_.call(null,G__80596));
} else {
return null;
}
}
});
/**
 * For old-style aggregations like `{:aggregation :count}` make sure we normalize the ag type (`:count`). Other wacky
 *   clauses like `{:aggregation [:count :count]}` need to be handled as well :(
 */
metabase.mbql.normalize.normalize_ag_clause_tokens = (function metabase$mbql$normalize$normalize_ag_clause_tokens(ag_clause){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(ag_clause))){
return metabase.mbql.normalize.maybe_normalize_token(ag_clause);
} else {
if(cljs.core.truth_(metabase.mbql.normalize.is_clause_QMARK_(new cljs.core.Keyword(null,"named","named",-422393479),ag_clause))){
var vec__80598 = ag_clause;
var seq__80599 = cljs.core.seq(vec__80598);
var first__80600 = cljs.core.first(seq__80599);
var seq__80599__$1 = cljs.core.next(seq__80599);
var _ = first__80600;
var first__80600__$1 = cljs.core.first(seq__80599__$1);
var seq__80599__$2 = cljs.core.next(seq__80599__$1);
var wrapped_ag = first__80600__$1;
var more = seq__80599__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"named","named",-422393479),(metabase.mbql.normalize.normalize_ag_clause_tokens.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.normalize.normalize_ag_clause_tokens.cljs$core$IFn$_invoke$arity$1(wrapped_ag) : metabase.mbql.normalize.normalize_ag_clause_tokens.call(null,wrapped_ag))], null),more);
} else {
if(cljs.core.truth_((cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(ag_clause))?metabase.mbql.normalize.aggregation_subclause_QMARK_(cljs.core.second(ag_clause)):null))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.normalize_ag_clause_tokens,ag_clause);
} else {
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(ag_clause,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,ag_clause,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));

}
}
}
});
/**
 * For expressions, we don't want to normalize the name of the expression; keep that as is, and make it a string;
 * normalize the definitions as normal.
 */
metabase.mbql.normalize.normalize_expressions_tokens = (function metabase$mbql$normalize$normalize_expressions_tokens(expressions_clause){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$mbql$normalize$normalize_expressions_tokens_$_iter__80613(s__80614){
return (new cljs.core.LazySeq(null,(function (){
var s__80614__$1 = s__80614;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80614__$1);
if(temp__5804__auto__){
var s__80614__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80614__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__80614__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__80616 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__80615 = (0);
while(true){
if((i__80615 < size__5522__auto__)){
var vec__80622 = cljs.core._nth(c__5521__auto__,i__80615);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80622,(0),null);
var definition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80622,(1),null);
cljs.core.chunk_append(b__80616,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.qualified_name(expression_name),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)))], null));

var G__81273 = (i__80615 + (1));
i__80615 = G__81273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80616),metabase$mbql$normalize$normalize_expressions_tokens_$_iter__80613(cljs.core.chunk_rest(s__80614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80616),null);
}
} else {
var vec__80625 = cljs.core.first(s__80614__$2);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80625,(0),null);
var definition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80625,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.qualified_name(expression_name),(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)))], null),metabase$mbql$normalize$normalize_expressions_tokens_$_iter__80613(cljs.core.rest(s__80614__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(expressions_clause);
})());
});
/**
 * Normalize tokens in the order-by clause, which can have different syntax when using MBQL 95 or 98
 *   rules (`[<field> :asc]` vs `[:asc <field>]`, for example).
 */
metabase.mbql.normalize.normalize_order_by_tokens = (function metabase$mbql$normalize$normalize_order_by_tokens(clauses){
return cljs.core.vec((function (){var iter__5523__auto__ = (function metabase$mbql$normalize$normalize_order_by_tokens_$_iter__80630(s__80631){
return (new cljs.core.LazySeq(null,(function (){
var s__80631__$1 = s__80631;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80631__$1);
if(temp__5804__auto__){
var s__80631__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80631__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__80631__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__80633 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__80632 = (0);
while(true){
if((i__80632 < size__5522__auto__)){
var subclause = cljs.core._nth(c__5521__auto__,i__80632);
cljs.core.chunk_append(b__80633,(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(subclause))?metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(subclause):cljs.core.reverse(metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(subclause)))));

var G__81274 = (i__80632 + (1));
i__80632 = G__81274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80633),metabase$mbql$normalize$normalize_order_by_tokens_$_iter__80630(cljs.core.chunk_rest(s__80631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80633),null);
}
} else {
var subclause = cljs.core.first(s__80631__$2);
return cljs.core.cons((cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(subclause))?metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(subclause):cljs.core.reverse(metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(subclause)))),metabase$mbql$normalize$normalize_order_by_tokens_$_iter__80630(cljs.core.rest(s__80631__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(clauses);
})());
});
/**
 * Get the function that should be used to transform values for normalized key `k` in a template tag definition.
 */
metabase.mbql.normalize.template_tag_definition_key__GT_transform_fn = (function metabase$mbql$normalize$template_tag_definition_key__GT_transform_fn(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.identity,new cljs.core.Keyword(null,"type","type",1174270348),metabase.mbql.normalize.maybe_normalize_token,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),metabase.mbql.normalize.maybe_normalize_token], null),k,(function (v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__80636 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
var G__80637 = new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061);
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(G__80636,G__80637) : metabase.mbql.normalize.normalize_tokens.call(null,G__80636,G__80637));
})(),k);
}));
});
/**
 * For a template tag definition, normalize all the keys appropriately.
 */
metabase.mbql.normalize.normalize_template_tag_definition = (function metabase$mbql$normalize$normalize_template_tag_definition(tag_definition){
var tag_def = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__80641){
var vec__80645 = p__80641;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80645,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80645,(1),null);
var k__$1 = metabase.mbql.normalize.maybe_normalize_token(k);
var transform_fn = metabase.mbql.normalize.template_tag_definition_key__GT_transform_fn(k__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,(transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(v) : transform_fn.call(null,v))], null);
})),tag_definition);
var G__80648 = tag_def;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tag_def),new cljs.core.Keyword(null,"dimension","dimension",543254198))) && (cljs.core.not(new cljs.core.Keyword(null,"widget-type","widget-type",1836256899).cljs$core$IFn$_invoke$arity$1(tag_def))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80648,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),new cljs.core.Keyword(null,"category","category",-593092832));
} else {
return G__80648;
}
});
/**
 * Normalize native-query template tags. Like `expressions` we want to preserve the original name rather than normalize
 *   it.
 */
metabase.mbql.normalize.normalize_template_tags = (function metabase$mbql$normalize$normalize_template_tags(template_tags){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__80664){
var vec__80665 = p__80664;
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80665,(0),null);
var tag_definition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80665,(1),null);
var tag_name__$1 = metabase.mbql.util.qualified_name(tag_name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.mbql.normalize.normalize_template_tag_definition(tag_definition),new cljs.core.Keyword(null,"name","name",1843675177),tag_name__$1)], null);
})),template_tags);
});
/**
 * Normalize a parameter in the query `:parameters` list.
 */
metabase.mbql.normalize.normalize_query_parameter = (function metabase$mbql$normalize$normalize_query_parameter(p__80671){
var map__80673 = p__80671;
var map__80673__$1 = cljs.core.__destructure_map(map__80673);
var param = map__80673__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80673__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80673__$1,new cljs.core.Keyword(null,"target","target",253001721));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80673__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var values_source_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80673__$1,new cljs.core.Keyword(null,"values_source_config","values_source_config",-590570309));
var G__80677 = param;
var G__80677__$1 = (cljs.core.truth_(id)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80677,new cljs.core.Keyword(null,"id","id",-1388402092),metabase.mbql.util.qualified_name):G__80677);
var G__80677__$2 = (cljs.core.truth_(type)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80677__$1,new cljs.core.Keyword(null,"type","type",1174270348),metabase.mbql.normalize.maybe_normalize_token):G__80677__$1);
var G__80677__$3 = (cljs.core.truth_(target)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80677__$2,new cljs.core.Keyword(null,"target","target",253001721),(function (p1__80668_SHARP_){
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(p1__80668_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,p1__80668_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
})):G__80677__$2);
var G__80677__$4 = (cljs.core.truth_(values_source_config)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__80677__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values_source_config","values_source_config",-590570309),new cljs.core.Keyword(null,"label_field","label_field",-1573182765)], null),(function (p1__80669_SHARP_){
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(p1__80669_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,p1__80669_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
})):G__80677__$3);
if(cljs.core.truth_(values_source_config)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__80677__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values_source_config","values_source_config",-590570309),new cljs.core.Keyword(null,"value_field","value_field",-980977878)], null),(function (p1__80670_SHARP_){
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(p1__80670_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.mbql.normalize.normalize_tokens.call(null,p1__80670_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
}));
} else {
return G__80677__$4;
}
});
metabase.mbql.normalize.normalize_source_query = (function metabase$mbql$normalize$normalize_source_query(source_query){
var map__80681 = medley.core.map_keys(metabase.mbql.normalize.maybe_normalize_token,source_query);
var map__80681__$1 = cljs.core.__destructure_map(map__80681);
var source_query__$1 = map__80681__$1;
var native_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80681__$1,new cljs.core.Keyword(null,"native","native",-613060878));
if(cljs.core.truth_(native_QMARK_)){
return clojure.set.rename_keys((function (){var G__80682 = clojure.set.rename_keys(source_query__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
var G__80683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native","native",-613060878)], null);
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(G__80682,G__80683) : metabase.mbql.normalize.normalize_tokens.call(null,G__80682,G__80683));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"native","native",-613060878)], null));
} else {
var G__80684 = source_query__$1;
var G__80685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null);
return (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(G__80684,G__80685) : metabase.mbql.normalize.normalize_tokens.call(null,G__80684,G__80685));
}
});
metabase.mbql.normalize.normalize_join = (function metabase$mbql$normalize$normalize_join(join){
var map__80687 = (metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(join,new cljs.core.Keyword(null,"query","query",-1288509510)) : metabase.mbql.normalize.normalize_tokens.call(null,join,new cljs.core.Keyword(null,"query","query",-1288509510)));
var map__80687__$1 = cljs.core.__destructure_map(map__80687);
var join__$1 = map__80687__$1;
var strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80687__$1,new cljs.core.Keyword(null,"strategy","strategy",-1471631918));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80687__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80687__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var G__80701 = join__$1;
var G__80701__$1 = (cljs.core.truth_(strategy)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80701,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),metabase.mbql.normalize.maybe_normalize_token):G__80701);
var G__80701__$2 = (cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(fields))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80701__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230),metabase.mbql.normalize.maybe_normalize_token):G__80701__$1);
if(cljs.core.truth_(alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80701__$2,new cljs.core.Keyword(null,"alias","alias",-2039751630),metabase.mbql.util.qualified_name);
} else {
return G__80701__$2;
}
});
/**
 * Normalize source/results metadata for a single column.
 */
metabase.mbql.normalize.normalize_source_metadata = (function metabase$mbql$normalize$normalize_source_metadata(metadata){
if(cljs.core.map_QMARK_(metadata)){
} else {
throw (new Error("Assert failed: (map? metadata)"));
}

return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__80704_SHARP_,p2__80705_SHARP_){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(p1__80704_SHARP_,p2__80705_SHARP_,cljs.core.keyword);
}),metadata,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base_type","base_type",1908272670),new cljs.core.Keyword(null,"effective_type","effective_type",1699478099),new cljs.core.Keyword(null,"semantic_type","semantic_type",272485089),new cljs.core.Keyword(null,"visibility_type","visibility_type",-508434247),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"unit","unit",375175175)], null)),new cljs.core.Keyword(null,"field_ref","field_ref",-1985640334),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clauses,metabase.mbql.normalize.normalize_tokens)),new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022),clojure.walk.keywordize_keys);
});
/**
 * For native queries, normalize the top-level keys, and template tags, but nothing else.
 */
metabase.mbql.normalize.normalize_native_query = (function metabase$mbql$normalize$normalize_native_query(native_query){
var native_query__$1 = medley.core.map_keys(metabase.mbql.normalize.maybe_normalize_token,native_query);
var G__80706 = native_query__$1;
if(cljs.core.seq(new cljs.core.Keyword(null,"template-tags","template-tags",1853115685).cljs$core$IFn$_invoke$arity$1(native_query__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80706,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),metabase.mbql.normalize.normalize_template_tags);
} else {
return G__80706;
}
});
/**
 * Map of special functions that should be used to perform token normalization for a given path. For example, the
 *   `:expressions` key in an MBQL query should preserve the case of the expression names; this custom behavior is
 *   defined below.
 */
metabase.mbql.normalize.path__GT_special_token_normalization_fn = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),metabase.mbql.normalize.maybe_normalize_token,new cljs.core.Keyword(null,"native","native",-613060878),metabase.mbql.normalize.normalize_native_query,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),metabase.mbql.normalize.normalize_ag_clause_tokens,new cljs.core.Keyword(null,"expressions","expressions",255689909),metabase.mbql.normalize.normalize_expressions_tokens,new cljs.core.Keyword(null,"order-by","order-by",1527318070),metabase.mbql.normalize.normalize_order_by_tokens,new cljs.core.Keyword(null,"source-query","source-query",198004422),metabase.mbql.normalize.normalize_source_query,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683),metabase.mbql.normalize.normalize_source_metadata], null),new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683),metabase.mbql.normalize.normalize_join], null)], null),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metadata","dataset-metadata","metadata/dataset-metadata",-728376469),cljs.core.identity], null),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683),metabase.mbql.normalize.normalize_query_parameter], null),new cljs.core.Keyword(null,"context","context",-830191113),(function (p1__80708_SHARP_){
var G__80710 = p1__80708_SHARP_;
if((G__80710 == null)){
return null;
} else {
return metabase.mbql.normalize.maybe_normalize_token(G__80710);
}
}),new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683),metabase.mbql.normalize.normalize_source_metadata], null),new cljs.core.Keyword(null,"viz-settings","viz-settings",256055379),metabase.mbql.normalize.maybe_normalize_token], null);
/**
 * Recursively normalize tokens in `x`.
 * 
 *   Every time this function recurses (thru a map value) it adds a new (normalized) key to key path, e.g. `path` will be
 *   `[:query :order-by]` when we're in the MBQL order-by clause. If we need to handle these top-level clauses in special
 *   ways add a function to `path->special-token-normalization-fn` above.
 * 
 *   In some cases, dealing with the path isn't desirable, but we don't want to accidentally trigger normalization
 *   functions (such as accidentally normalizing the `:type` key in something other than the top-level of the query), so
 *   by convention please pass `:ignore-path` to avoid accidentally triggering path functions.
 */
metabase.mbql.normalize.normalize_tokens = (function metabase$mbql$normalize$normalize_tokens(var_args){
var args__5775__auto__ = [];
var len__5769__auto___81283 = arguments.length;
var i__5770__auto___81284 = (0);
while(true){
if((i__5770__auto___81284 < len__5769__auto___81283)){
args__5775__auto__.push((arguments[i__5770__auto___81284]));

var G__81285 = (i__5770__auto___81284 + (1));
i__5770__auto___81284 = G__81285;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__80718){
var vec__80719 = p__80718;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80719,(0),null);
var path__$1 = (((path instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null):cljs.core.vec(path));
var special_fn = ((cljs.core.seq(path__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.path__GT_special_token_normalization_fn,path__$1):null);
try{if(cljs.core.fn_QMARK_(special_fn)){
return (special_fn.cljs$core$IFn$_invoke$arity$1 ? special_fn.cljs$core$IFn$_invoke$arity$1(x) : special_fn.call(null,x));
} else {
if(cljs.core.record_QMARK_(x)){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$mbql$normalize$iter__80725(s__80726){
return (new cljs.core.LazySeq(null,(function (){
var s__80726__$1 = s__80726;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80726__$1);
if(temp__5804__auto__){
var s__80726__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80726__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__80726__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__80728 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__80727 = (0);
while(true){
if((i__80727 < size__5522__auto__)){
var vec__80732 = cljs.core._nth(c__5521__auto__,i__80727);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80732,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80732,(1),null);
var k__$1 = metabase.mbql.normalize.maybe_normalize_token(k);
cljs.core.chunk_append(b__80728,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path__$1),k__$1)], 0))], null));

var G__81293 = (i__80727 + (1));
i__80727 = G__81293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80728),metabase$mbql$normalize$iter__80725(cljs.core.chunk_rest(s__80726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80728),null);
}
} else {
var vec__80735 = cljs.core.first(s__80726__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80735,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80735,(1),null);
var k__$1 = metabase.mbql.normalize.maybe_normalize_token(k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path__$1),k__$1)], 0))], null),metabase$mbql$normalize$iter__80725(cljs.core.rest(s__80726__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(x);
})());
} else {
if(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(x))){
return metabase.mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__80712_SHARP_){
return metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(p1__80712_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path__$1),new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683))], 0));
}),x);
} else {
return x;

}
}
}
}
}
}catch (e80723){if((e80723 instanceof Error)){
var e = e80723;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error normalizing form: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),x,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"special-fn","special-fn",1290649344),special_fn], null),e);
} else {
throw e80723;

}
}}));

(metabase.mbql.normalize.normalize_tokens.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.mbql.normalize.normalize_tokens.cljs$lang$applyTo = (function (seq80713){
var G__80714 = cljs.core.first(seq80713);
var seq80713__$1 = cljs.core.next(seq80713);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80714,seq80713__$1);
}));

/**
 * Wrap raw integer Field IDs (i.e., those in an implicit 'field' position) in a `:field` clause if they're not
 *   already. Done for MBQL 95 backwards-compatibility. e.g.:
 * 
 *  {:filter [:= 10 20]} ; -> {:filter [:= [:field 10 nil] 20]}
 */
metabase.mbql.normalize.wrap_implicit_field_id = (function metabase$mbql$normalize$wrap_implicit_field_id(field){
if(cljs.core.integer_QMARK_(field)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),field,null], null);
} else {
return field;
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.mbql !== 'undefined') && (typeof metabase.mbql.normalize !== 'undefined') && (typeof metabase.mbql.normalize.canonicalize_mbql_clause !== 'undefined')){
} else {
metabase.mbql.normalize.canonicalize_mbql_clause = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__80749 = cljs.core.get_global_hierarchy;
return (fexpr__80749.cljs$core$IFn$_invoke$arity$0 ? fexpr__80749.cljs$core$IFn$_invoke$arity$0() : fexpr__80749.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.mbql.normalize","canonicalize-mbql-clause"),(function (clause){
if(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(clause))){
return cljs.core.first(clause);
} else {
return null;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (clause){
return clause;
}));
/**
 * If `clause` is a raw integer ID wrap it in a `:field` clause. Either way, canonicalize the resulting clause.
 */
metabase.mbql.normalize.canonicalize_implicit_field_id = (function metabase$mbql$normalize$canonicalize_implicit_field_id(clause){
return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(metabase.mbql.normalize.wrap_implicit_field_id(clause));
});
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__80753){
var vec__80754 = p__80753;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80754,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80754,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80754,(2),null);
if(cljs.core.truth_(metabase.mbql.normalize.is_clause_QMARK_(new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name))){
var vec__80757 = id_or_name;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80757,(0),null);
var nested_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80757,(1),null);
var nested_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80757,(2),null);
return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),nested_id_or_name,cljs.core.not_empty(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nested_opts,opts], 0)))], null));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.not_empty(opts)], null);
}
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p__80764){
var vec__80765 = p__80764;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80765,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80765,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80765,(2),null);
if(cljs.core.empty_QMARK_(opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),index], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),index,opts], null);
}
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field-id","field-id",-353751335),(function (p__80770){
var vec__80771 = p__80770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80771,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80771,(1),null);
if(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(id))){
return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(id);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id,null], null);
}
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field-literal","field-literal",-1295883554),(function (p__80775){
var vec__80778 = p__80775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80778,(0),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80778,(1),null);
var base_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80778,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),field_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),base_type], null)], null);
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fk->","fk->",-499026738),(function (p__80782){
var vec__80785 = p__80782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80785,(0),null);
var field_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80785,(1),null);
var field_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80785,(2),null);
var vec__80788 = metabase.mbql.normalize.canonicalize_implicit_field_id(field_1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80788,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80788,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80788,(2),null);
var vec__80791 = metabase.mbql.normalize.canonicalize_implicit_field_id(field_2);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80791,(0),null);
var dest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80791,(1),null);
var dest_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80791,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),dest,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dest_opts,new cljs.core.Keyword(null,"source-field","source-field",933829534),source)], null);
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"joined-field","joined-field",-2048778268),(function (p__80794){
var vec__80795 = p__80794;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80795,(0),null);
var join_alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80795,(1),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80795,(2),null);
return metabase.mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic(metabase.mbql.normalize.canonicalize_implicit_field_id(field),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),join_alias], 0));
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(function (clause){
var G__80798 = cljs.core.count(clause);
switch (G__80798) {
case (3):
var vec__80799 = clause;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80799,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80799,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80799,(2),null);
return metabase.mbql.util.with_temporal_unit(metabase.mbql.normalize.canonicalize_implicit_field_id(field),unit);

break;
case (4):
var vec__80802 = clause;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80802,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80802,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80802,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80802,(3),null);
return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),field,unit], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80798)].join('')));

}
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),(function (p__80808){
var vec__80809 = p__80808;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80809,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80809,(1),null);
var strategy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80809,(2),null);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80809,(3),null);
var binning_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80809,(4),null);
var vec__80812 = metabase.mbql.normalize.canonicalize_implicit_field_id(field);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80812,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80812,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80812,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"binning","binning",1709835866),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),strategy], null),(cljs.core.truth_(param)?cljs.core.PersistentArrayMap.createAsIfByAssoc([strategy,param]):null),binning_options], 0)))], null);
}));
metabase.mbql.normalize.canonicalize_compound_filter_clause = (function metabase$mbql$normalize$canonicalize_compound_filter_clause(p__80822){
var vec__80823 = p__80822;
var seq__80824 = cljs.core.seq(vec__80823);
var first__80825 = cljs.core.first(seq__80824);
var seq__80824__$1 = cljs.core.next(seq__80824);
var filter_name = first__80825;
var args = seq__80824__$1;
return metabase.mbql.util.simplify_compound_filter(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_name], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clause,args)));
});
var seq__80826_81320 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"not","not",-595976884)], null));
var chunk__80827_81321 = null;
var count__80828_81322 = (0);
var i__80829_81323 = (0);
while(true){
if((i__80829_81323 < count__80828_81322)){
var clause_name_81324 = chunk__80827_81321.cljs$core$IIndexed$_nth$arity$2(null,i__80829_81323);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_81324,((function (seq__80826_81320,chunk__80827_81321,count__80828_81322,i__80829_81323,clause_name_81324){
return (function (clause){
return metabase.mbql.normalize.canonicalize_compound_filter_clause(clause);
});})(seq__80826_81320,chunk__80827_81321,count__80828_81322,i__80829_81323,clause_name_81324))
);


var G__81325 = seq__80826_81320;
var G__81326 = chunk__80827_81321;
var G__81327 = count__80828_81322;
var G__81328 = (i__80829_81323 + (1));
seq__80826_81320 = G__81325;
chunk__80827_81321 = G__81326;
count__80828_81322 = G__81327;
i__80829_81323 = G__81328;
continue;
} else {
var temp__5804__auto___81329 = cljs.core.seq(seq__80826_81320);
if(temp__5804__auto___81329){
var seq__80826_81330__$1 = temp__5804__auto___81329;
if(cljs.core.chunked_seq_QMARK_(seq__80826_81330__$1)){
var c__5568__auto___81331 = cljs.core.chunk_first(seq__80826_81330__$1);
var G__81336 = cljs.core.chunk_rest(seq__80826_81330__$1);
var G__81337 = c__5568__auto___81331;
var G__81338 = cljs.core.count(c__5568__auto___81331);
var G__81339 = (0);
seq__80826_81320 = G__81336;
chunk__80827_81321 = G__81337;
count__80828_81322 = G__81338;
i__80829_81323 = G__81339;
continue;
} else {
var clause_name_81340 = cljs.core.first(seq__80826_81330__$1);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_81340,((function (seq__80826_81320,chunk__80827_81321,count__80828_81322,i__80829_81323,clause_name_81340,seq__80826_81330__$1,temp__5804__auto___81329){
return (function (clause){
return metabase.mbql.normalize.canonicalize_compound_filter_clause(clause);
});})(seq__80826_81320,chunk__80827_81321,count__80828_81322,i__80829_81323,clause_name_81340,seq__80826_81330__$1,temp__5804__auto___81329))
);


var G__81341 = cljs.core.next(seq__80826_81330__$1);
var G__81342 = null;
var G__81343 = (0);
var G__81344 = (0);
seq__80826_81320 = G__81341;
chunk__80827_81321 = G__81342;
count__80828_81322 = G__81343;
i__80829_81323 = G__81344;
continue;
}
} else {
}
}
break;
}
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"inside","inside",1972503011),(function (p__80847){
var vec__80848 = p__80847;
var seq__80849 = cljs.core.seq(vec__80848);
var first__80850 = cljs.core.first(seq__80849);
var seq__80849__$1 = cljs.core.next(seq__80849);
var _ = first__80850;
var first__80850__$1 = cljs.core.first(seq__80849__$1);
var seq__80849__$2 = cljs.core.next(seq__80849__$1);
var field_1 = first__80850__$1;
var first__80850__$2 = cljs.core.first(seq__80849__$2);
var seq__80849__$3 = cljs.core.next(seq__80849__$2);
var field_2 = first__80850__$2;
var coordinates = seq__80849__$3;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inside","inside",1972503011),metabase.mbql.normalize.canonicalize_implicit_field_id(field_1),metabase.mbql.normalize.canonicalize_implicit_field_id(field_2)], null),coordinates);
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(function (p__80853){
var vec__80859 = p__80853;
var seq__80860 = cljs.core.seq(vec__80859);
var first__80861 = cljs.core.first(seq__80860);
var seq__80860__$1 = cljs.core.next(seq__80860);
var _ = first__80861;
var first__80861__$1 = cljs.core.first(seq__80860__$1);
var seq__80860__$2 = cljs.core.next(seq__80860__$1);
var field = first__80861__$1;
var args = seq__80860__$2;
var field__$1 = (function (){var G__80862 = metabase.mbql.normalize.canonicalize_implicit_field_id(field);
if(cljs.core.truth_(metabase.mbql.util.is_clause_QMARK_(new cljs.core.Keyword(null,"field","field",-1302436500),field))){
return metabase.mbql.util.update_field_options.cljs$core$IFn$_invoke$arity$variadic(G__80862,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358)], 0));
} else {
return G__80862;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field__$1], null),args);
}));
metabase.mbql.normalize.canonicalize_simple_filter_clause = (function metabase$mbql$normalize$canonicalize_simple_filter_clause(p__80866){
var vec__80867 = p__80866;
var seq__80868 = cljs.core.seq(vec__80867);
var first__80869 = cljs.core.first(seq__80868);
var seq__80868__$1 = cljs.core.next(seq__80868);
var filter_name = first__80869;
var first__80869__$1 = cljs.core.first(seq__80868__$1);
var seq__80868__$2 = cljs.core.next(seq__80868__$1);
var first_arg = first__80869__$1;
var other_args = seq__80868__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_name,metabase.mbql.normalize.canonicalize_implicit_field_id(first_arg)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clause,other_args));
});
var seq__80871_81345 = cljs.core.seq(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starts-with","starts-with",366503009),new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"!=","!=",-1841737356),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908),new cljs.core.Keyword(null,"not-empty","not-empty",388922063),new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"between","between",1131099276)], null));
var chunk__80872_81346 = null;
var count__80873_81347 = (0);
var i__80874_81348 = (0);
while(true){
if((i__80874_81348 < count__80873_81347)){
var clause_name_81349 = chunk__80872_81346.cljs$core$IIndexed$_nth$arity$2(null,i__80874_81348);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_81349,((function (seq__80871_81345,chunk__80872_81346,count__80873_81347,i__80874_81348,clause_name_81349){
return (function (clause){
return metabase.mbql.normalize.canonicalize_simple_filter_clause(clause);
});})(seq__80871_81345,chunk__80872_81346,count__80873_81347,i__80874_81348,clause_name_81349))
);


var G__81350 = seq__80871_81345;
var G__81351 = chunk__80872_81346;
var G__81352 = count__80873_81347;
var G__81353 = (i__80874_81348 + (1));
seq__80871_81345 = G__81350;
chunk__80872_81346 = G__81351;
count__80873_81347 = G__81352;
i__80874_81348 = G__81353;
continue;
} else {
var temp__5804__auto___81354 = cljs.core.seq(seq__80871_81345);
if(temp__5804__auto___81354){
var seq__80871_81355__$1 = temp__5804__auto___81354;
if(cljs.core.chunked_seq_QMARK_(seq__80871_81355__$1)){
var c__5568__auto___81356 = cljs.core.chunk_first(seq__80871_81355__$1);
var G__81357 = cljs.core.chunk_rest(seq__80871_81355__$1);
var G__81358 = c__5568__auto___81356;
var G__81359 = cljs.core.count(c__5568__auto___81356);
var G__81360 = (0);
seq__80871_81345 = G__81357;
chunk__80872_81346 = G__81358;
count__80873_81347 = G__81359;
i__80874_81348 = G__81360;
continue;
} else {
var clause_name_81361 = cljs.core.first(seq__80871_81355__$1);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_81361,((function (seq__80871_81345,chunk__80872_81346,count__80873_81347,i__80874_81348,clause_name_81361,seq__80871_81355__$1,temp__5804__auto___81354){
return (function (clause){
return metabase.mbql.normalize.canonicalize_simple_filter_clause(clause);
});})(seq__80871_81345,chunk__80872_81346,count__80873_81347,i__80874_81348,clause_name_81361,seq__80871_81355__$1,temp__5804__auto___81354))
);


var G__81362 = cljs.core.next(seq__80871_81355__$1);
var G__81363 = null;
var G__81364 = (0);
var G__81365 = (0);
seq__80871_81345 = G__81362;
chunk__80872_81346 = G__81363;
count__80873_81347 = G__81364;
i__80874_81348 = G__81365;
continue;
}
} else {
}
}
break;
}
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rows","rows",850049680),(function (_){
return null;
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),(function (p__80897){
var vec__80898 = p__80897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80898,(0),null);
var wrapped_aggregation_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80898,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80898,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(wrapped_aggregation_clause),options], null);
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"named","named",-422393479),(function (p__80903){
var vec__80904 = p__80903;
var seq__80905 = cljs.core.seq(vec__80904);
var first__80906 = cljs.core.first(seq__80905);
var seq__80905__$1 = cljs.core.next(seq__80905);
var _ = first__80906;
var first__80906__$1 = cljs.core.first(seq__80905__$1);
var seq__80905__$2 = cljs.core.next(seq__80905__$1);
var wrapped_ag = first__80906__$1;
var first__80906__$2 = cljs.core.first(seq__80905__$2);
var seq__80905__$3 = cljs.core.next(seq__80905__$2);
var expr_name = first__80906__$2;
var more = seq__80905__$3;
return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(wrapped_ag),(function (){var vec__80909 = more;
var map__80912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80909,(0),null);
var map__80912__$1 = cljs.core.__destructure_map(map__80912);
var use_as_display_name_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80912__$1,new cljs.core.Keyword(null,"use-as-display-name?","use-as-display-name?",686752941));
if(use_as_display_name_QMARK_ === false){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),expr_name], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),expr_name], null);
}
})()], null));
}));
metabase.mbql.normalize.canonicalize_count_clause = (function metabase$mbql$normalize$canonicalize_count_clause(p__80918){
var vec__80922 = p__80918;
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80922,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80922,(1),null);
if(cljs.core.truth_(field)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name,metabase.mbql.normalize.canonicalize_implicit_field_id(field)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name], null);
}
});
var seq__80926_81367 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543)], null));
var chunk__80927_81368 = null;
var count__80928_81369 = (0);
var i__80929_81370 = (0);
while(true){
if((i__80929_81370 < count__80928_81369)){
var clause_name_81371 = chunk__80927_81368.cljs$core$IIndexed$_nth$arity$2(null,i__80929_81370);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_81371,((function (seq__80926_81367,chunk__80927_81368,count__80928_81369,i__80929_81370,clause_name_81371){
return (function (clause){
return metabase.mbql.normalize.canonicalize_count_clause(clause);
});})(seq__80926_81367,chunk__80927_81368,count__80928_81369,i__80929_81370,clause_name_81371))
);


var G__81372 = seq__80926_81367;
var G__81373 = chunk__80927_81368;
var G__81374 = count__80928_81369;
var G__81375 = (i__80929_81370 + (1));
seq__80926_81367 = G__81372;
chunk__80927_81368 = G__81373;
count__80928_81369 = G__81374;
i__80929_81370 = G__81375;
continue;
} else {
var temp__5804__auto___81377 = cljs.core.seq(seq__80926_81367);
if(temp__5804__auto___81377){
var seq__80926_81378__$1 = temp__5804__auto___81377;
if(cljs.core.chunked_seq_QMARK_(seq__80926_81378__$1)){
var c__5568__auto___81379 = cljs.core.chunk_first(seq__80926_81378__$1);
var G__81380 = cljs.core.chunk_rest(seq__80926_81378__$1);
var G__81381 = c__5568__auto___81379;
var G__81382 = cljs.core.count(c__5568__auto___81379);
var G__81383 = (0);
seq__80926_81367 = G__81380;
chunk__80927_81368 = G__81381;
count__80928_81369 = G__81382;
i__80929_81370 = G__81383;
continue;
} else {
var clause_name_81384 = cljs.core.first(seq__80926_81378__$1);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_81384,((function (seq__80926_81367,chunk__80927_81368,count__80928_81369,i__80929_81370,clause_name_81384,seq__80926_81378__$1,temp__5804__auto___81377){
return (function (clause){
return metabase.mbql.normalize.canonicalize_count_clause(clause);
});})(seq__80926_81367,chunk__80927_81368,count__80928_81369,i__80929_81370,clause_name_81384,seq__80926_81378__$1,temp__5804__auto___81377))
);


var G__81385 = cljs.core.next(seq__80926_81378__$1);
var G__81386 = null;
var G__81387 = (0);
var G__81388 = (0);
seq__80926_81367 = G__81385;
chunk__80927_81368 = G__81386;
count__80928_81369 = G__81387;
i__80929_81370 = G__81388;
continue;
}
} else {
}
}
break;
}
metabase.mbql.normalize.canonicalize_simple_aggregation_with_field = (function metabase$mbql$normalize$canonicalize_simple_aggregation_with_field(p__80953){
var vec__80955 = p__80953;
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80955,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80955,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name,metabase.mbql.normalize.canonicalize_implicit_field_id(field)], null);
});
var seq__80962_81389 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.Keyword(null,"cum-sum","cum-sum",2064902349),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"stddev","stddev",-865474939),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.Keyword(null,"var","var",-769682797)], null));
var chunk__80963_81390 = null;
var count__80964_81391 = (0);
var i__80965_81392 = (0);
while(true){
if((i__80965_81392 < count__80964_81391)){
var clause_name_81393 = chunk__80963_81390.cljs$core$IIndexed$_nth$arity$2(null,i__80965_81392);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_81393,((function (seq__80962_81389,chunk__80963_81390,count__80964_81391,i__80965_81392,clause_name_81393){
return (function (clause){
return metabase.mbql.normalize.canonicalize_simple_aggregation_with_field(clause);
});})(seq__80962_81389,chunk__80963_81390,count__80964_81391,i__80965_81392,clause_name_81393))
);


var G__81394 = seq__80962_81389;
var G__81395 = chunk__80963_81390;
var G__81396 = count__80964_81391;
var G__81397 = (i__80965_81392 + (1));
seq__80962_81389 = G__81394;
chunk__80963_81390 = G__81395;
count__80964_81391 = G__81396;
i__80965_81392 = G__81397;
continue;
} else {
var temp__5804__auto___81398 = cljs.core.seq(seq__80962_81389);
if(temp__5804__auto___81398){
var seq__80962_81399__$1 = temp__5804__auto___81398;
if(cljs.core.chunked_seq_QMARK_(seq__80962_81399__$1)){
var c__5568__auto___81400 = cljs.core.chunk_first(seq__80962_81399__$1);
var G__81401 = cljs.core.chunk_rest(seq__80962_81399__$1);
var G__81402 = c__5568__auto___81400;
var G__81403 = cljs.core.count(c__5568__auto___81400);
var G__81404 = (0);
seq__80962_81389 = G__81401;
chunk__80963_81390 = G__81402;
count__80964_81391 = G__81403;
i__80965_81392 = G__81404;
continue;
} else {
var clause_name_81405 = cljs.core.first(seq__80962_81399__$1);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_81405,((function (seq__80962_81389,chunk__80963_81390,count__80964_81391,i__80965_81392,clause_name_81405,seq__80962_81399__$1,temp__5804__auto___81398){
return (function (clause){
return metabase.mbql.normalize.canonicalize_simple_aggregation_with_field(clause);
});})(seq__80962_81389,chunk__80963_81390,count__80964_81391,i__80965_81392,clause_name_81405,seq__80962_81399__$1,temp__5804__auto___81398))
);


var G__81406 = cljs.core.next(seq__80962_81399__$1);
var G__81407 = null;
var G__81408 = (0);
var G__81409 = (0);
seq__80962_81389 = G__81406;
chunk__80963_81390 = G__81407;
count__80964_81391 = G__81408;
i__80965_81392 = G__81409;
continue;
}
} else {
}
}
break;
}
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"percentile","percentile",-601188752),(function (p__80994){
var vec__80995 = p__80994;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80995,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80995,(1),null);
var percentile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80995,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"percentile","percentile",-601188752),metabase.mbql.normalize.canonicalize_implicit_field_id(field),percentile], null);
}));
metabase.mbql.normalize.canonicalize_filtered_aggregation_clause = (function metabase$mbql$normalize$canonicalize_filtered_aggregation_clause(p__81002){
var vec__81003 = p__81002;
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81003,(0),null);
var filter_subclause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81003,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name,metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(filter_subclause)], null);
});
var seq__81007_81410 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"share","share",-589433933),new cljs.core.Keyword(null,"count-where","count-where",385407720)], null));
var chunk__81008_81411 = null;
var count__81009_81412 = (0);
var i__81010_81413 = (0);
while(true){
if((i__81010_81413 < count__81009_81412)){
var clause_name_81414 = chunk__81008_81411.cljs$core$IIndexed$_nth$arity$2(null,i__81010_81413);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_81414,((function (seq__81007_81410,chunk__81008_81411,count__81009_81412,i__81010_81413,clause_name_81414){
return (function (clause){
return metabase.mbql.normalize.canonicalize_filtered_aggregation_clause(clause);
});})(seq__81007_81410,chunk__81008_81411,count__81009_81412,i__81010_81413,clause_name_81414))
);


var G__81415 = seq__81007_81410;
var G__81416 = chunk__81008_81411;
var G__81417 = count__81009_81412;
var G__81418 = (i__81010_81413 + (1));
seq__81007_81410 = G__81415;
chunk__81008_81411 = G__81416;
count__81009_81412 = G__81417;
i__81010_81413 = G__81418;
continue;
} else {
var temp__5804__auto___81419 = cljs.core.seq(seq__81007_81410);
if(temp__5804__auto___81419){
var seq__81007_81421__$1 = temp__5804__auto___81419;
if(cljs.core.chunked_seq_QMARK_(seq__81007_81421__$1)){
var c__5568__auto___81423 = cljs.core.chunk_first(seq__81007_81421__$1);
var G__81424 = cljs.core.chunk_rest(seq__81007_81421__$1);
var G__81425 = c__5568__auto___81423;
var G__81426 = cljs.core.count(c__5568__auto___81423);
var G__81427 = (0);
seq__81007_81410 = G__81424;
chunk__81008_81411 = G__81425;
count__81009_81412 = G__81426;
i__81010_81413 = G__81427;
continue;
} else {
var clause_name_81428 = cljs.core.first(seq__81007_81421__$1);
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_81428,((function (seq__81007_81410,chunk__81008_81411,count__81009_81412,i__81010_81413,clause_name_81428,seq__81007_81421__$1,temp__5804__auto___81419){
return (function (clause){
return metabase.mbql.normalize.canonicalize_filtered_aggregation_clause(clause);
});})(seq__81007_81410,chunk__81008_81411,count__81009_81412,i__81010_81413,clause_name_81428,seq__81007_81421__$1,temp__5804__auto___81419))
);


var G__81432 = cljs.core.next(seq__81007_81421__$1);
var G__81433 = null;
var G__81434 = (0);
var G__81435 = (0);
seq__81007_81410 = G__81432;
chunk__81008_81411 = G__81433;
count__81009_81412 = G__81434;
i__81010_81413 = G__81435;
continue;
}
} else {
}
}
break;
}
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),(function (p__81027){
var vec__81028 = p__81027;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81028,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81028,(1),null);
var filter_subclause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81028,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(field),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(filter_subclause)], null);
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__81033){
var vec__81034 = p__81033;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81034,(0),null);
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81034,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81034,(2),null);
if(cljs.core.truth_(options)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"case","case",1143702196),clauses], null)),metabase.mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)], 0)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"case","case",1143702196),cljs.core.vec((function (){var iter__5523__auto__ = (function metabase$mbql$normalize$iter__81040(s__81041){
return (new cljs.core.LazySeq(null,(function (){
var s__81041__$1 = s__81041;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81041__$1);
if(temp__5804__auto__){
var s__81041__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81041__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81041__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81043 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81042 = (0);
while(true){
if((i__81042 < size__5522__auto__)){
var vec__81046 = cljs.core._nth(c__5521__auto__,i__81042);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81046,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81046,(1),null);
cljs.core.chunk_append(b__81043,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(pred),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(expr)], null));

var G__81439 = (i__81042 + (1));
i__81042 = G__81439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81043),metabase$mbql$normalize$iter__81040(cljs.core.chunk_rest(s__81041__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81043),null);
}
} else {
var vec__81050 = cljs.core.first(s__81041__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81050,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81050,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(pred),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(expr)], null),metabase$mbql$normalize$iter__81040(cljs.core.rest(s__81041__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(clauses);
})())], null);
}
}));
metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"substring","substring",1140866276),(function (p__81054){
var vec__81055 = p__81054;
var seq__81056 = cljs.core.seq(vec__81055);
var first__81057 = cljs.core.first(seq__81056);
var seq__81056__$1 = cljs.core.next(seq__81056);
var _ = first__81057;
var first__81057__$1 = cljs.core.first(seq__81056__$1);
var seq__81056__$2 = cljs.core.next(seq__81056__$1);
var arg = first__81057__$1;
var first__81057__$2 = cljs.core.first(seq__81056__$2);
var seq__81056__$3 = cljs.core.next(seq__81056__$2);
var start = first__81057__$2;
var more = seq__81056__$3;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"substring","substring",1140866276),metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(arg),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),start))?(1):metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(start))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clause,more));
}));
/**
 * Walk an `mbql-query` an canonicalize non-top-level clauses like `:fk->`.
 */
metabase.mbql.normalize.canonicalize_mbql_clauses = (function metabase$mbql$normalize$canonicalize_mbql_clauses(mbql_query){
return clojure.walk.prewalk((function (x){
if(cljs.core.map_QMARK_(x)){
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clauses,x);
} else {
if(cljs.core.not(metabase.mbql.normalize.mbql_clause_QMARK_(x))){
return x;
} else {
try{return metabase.mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(x);
}catch (e81063){if((e81063 instanceof Error)){
var e = e81063;
var level__47389__auto___81443 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"error","error",-978969032));
var logger__47390__auto___81444 = "metabase.mbql.normalize";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47390__auto___81444,level__47389__auto___81443))){
var x__47391__auto___81446 = metabase.shared.util.i18n.js_i18n("Invalid clause:");
if((x__47391__auto___81446 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47390__auto___81444,level__47389__auto___81443,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),x__47391__auto___81446);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47390__auto___81444,level__47389__auto___81443,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__47391__auto___81446,x], 0)),null);
}
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Invalid MBQL clause: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clause","clause",1479668060),x], null),e);
} else {
throw e81063;

}
}
}
}
}),mbql_query);
});
/**
 * Convert old MBQL 95 single-aggregations like `{:aggregation :count}` or `{:aggregation [:count]}` to MBQL 98+
 *   multiple-aggregation syntax (e.g. `{:aggregation [[:count]]}`).
 */
metabase.mbql.normalize.wrap_single_aggregations = (function metabase$mbql$normalize$wrap_single_aggregations(aggregations){
return (function metabase$mbql$normalize$wrap_single_aggregations_$_replace_81072(_AMPERSAND_parents,_AMPERSAND_match){
try{if(cljs.core.truth_((function (){var fexpr__81105 = metabase.mbql.util.match.impl.match_with_pred_or_class(cljs.core.seq_QMARK_);
return (fexpr__81105.cljs$core$IFn$_invoke$arity$1 ? fexpr__81105.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : fexpr__81105.call(null,_AMPERSAND_match));
})())){
return metabase$mbql$normalize$wrap_single_aggregations_$_replace_81072(_AMPERSAND_parents,cljs.core.vec(_AMPERSAND_match));
} else {
throw cljs.core.match.backtrack;

}
}catch (e81091){if((e81091 instanceof Error)){
var e__62528__auto__ = e81091;
if((e__62528__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.truth_((function (){var fexpr__81104 = metabase.mbql.util.match.impl.match_with_pred_or_class(cljs.core.keyword_QMARK_);
return (fexpr__81104.cljs$core$IFn$_invoke$arity$1 ? fexpr__81104.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : fexpr__81104.call(null,_AMPERSAND_match));
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e81093){if((e81093 instanceof Error)){
var e__62528__auto____$1 = e81093;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (2))))){
try{var _AMPERSAND_match_left__81082 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__81082)) && ((cljs.core.count(_AMPERSAND_match_left__81082) === (2))))){
try{var _AMPERSAND_match_left__81082_0__81084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__81082,(0));
if(cljs.core.truth_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"*","*",-1294732318),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"/","/",1282502798),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"named","named",-422393479),null], null), null)))(_AMPERSAND_match_left__81082_0__81084))){
try{var _AMPERSAND_match_left__81082_1__81085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__81082,(1));
if(cljs.core.truth_(metabase.mbql.normalize.aggregation_subclause_QMARK_(_AMPERSAND_match_left__81082_1__81085))){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.wrap_single_aggregations,aggregations)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e81103){if((e81103 instanceof Error)){
var e__62528__auto____$2 = e81103;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$2;
}
} else {
throw e81103;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e81102){if((e81102 instanceof Error)){
var e__62528__auto____$2 = e81102;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$2;
}
} else {
throw e81102;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e81101){if((e81101 instanceof Error)){
var e__62528__auto____$2 = e81101;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$2;
}
} else {
throw e81101;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e81094){if((e81094 instanceof Error)){
var e__62528__auto____$2 = e81094;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__81087 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__81087)) && ((cljs.core.count(_AMPERSAND_match_left__81087) === (1))))){
try{var _AMPERSAND_match_left__81087_0__81089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__81087,(0));
if((_AMPERSAND_match_left__81087_0__81089 instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e81097){if((e81097 instanceof Error)){
var e__62528__auto____$3 = e81097;
if((e__62528__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$3;
}
} else {
throw e81097;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e81096){if((e81096 instanceof Error)){
var e__62528__auto____$3 = e81096;
if((e__62528__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$3;
}
} else {
throw e81096;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e81095){if((e81095 instanceof Error)){
var e__62528__auto____$3 = e81095;
if((e__62528__auto____$3 === cljs.core.match.backtrack)){
return _AMPERSAND_match;
} else {
throw e__62528__auto____$3;
}
} else {
throw e81095;

}
}} else {
throw e__62528__auto____$2;
}
} else {
throw e81094;

}
}} else {
throw e__62528__auto____$1;
}
} else {
throw e81093;

}
}} else {
throw e__62528__auto__;
}
} else {
throw e81091;

}
}})(cljs.core.PersistentVector.EMPTY,aggregations);
});
/**
 * Canonicalize subclauses (see above) and make sure `:aggregation` is a sequence of clauses instead of a single
 *   clause.
 */
metabase.mbql.normalize.canonicalize_aggregations = (function metabase$mbql$normalize$canonicalize_aggregations(aggregations){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clauses,metabase.mbql.normalize.wrap_single_aggregations(aggregations)));
});
metabase.mbql.normalize.canonicalize_breakouts = (function metabase$mbql$normalize$canonicalize_breakouts(breakouts){
while(true){
if(cljs.core.truth_(metabase.mbql.normalize.mbql_clause_QMARK_(breakouts))){
var G__81449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [breakouts], null);
breakouts = G__81449;
continue;
} else {
return cljs.core.not_empty(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.wrap_implicit_field_id,breakouts));
}
break;
}
});
/**
 * Make sure order by clauses like `[:asc 10]` get `:field-id` added where appropriate, e.g. `[:asc [:field-id 10]]`
 */
metabase.mbql.normalize.canonicalize_order_by = (function metabase$mbql$normalize$canonicalize_order_by(clauses){
return (function metabase$mbql$normalize$canonicalize_order_by_$_replace_81113(_AMPERSAND_parents,_AMPERSAND_match){
try{if(cljs.core.truth_((function (){var fexpr__81147 = metabase.mbql.util.match.impl.match_with_pred_or_class(cljs.core.seq_QMARK_);
return (fexpr__81147.cljs$core$IFn$_invoke$arity$1 ? fexpr__81147.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : fexpr__81147.call(null,_AMPERSAND_match));
})())){
return metabase$mbql$normalize$canonicalize_order_by_$_replace_81113(_AMPERSAND_parents,cljs.core.vec(_AMPERSAND_match));
} else {
throw cljs.core.match.backtrack;

}
}catch (e81121){if((e81121 instanceof Error)){
var e__62528__auto__ = e81121;
if((e__62528__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_1__81118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__81118,new cljs.core.Keyword(null,"asc","asc",356854569))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_81113(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e81128){if((e81128 instanceof Error)){
var e__62528__auto____$1 = e81128;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__81118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__81118,new cljs.core.Keyword(null,"desc","desc",2093485764))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_81113(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e81129){if((e81129 instanceof Error)){
var e__62528__auto____$2 = e81129;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__81118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__81118,new cljs.core.Keyword(null,"ascending","ascending",-988350486))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_81113(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e81130){if((e81130 instanceof Error)){
var e__62528__auto____$3 = e81130;
if((e__62528__auto____$3 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__81118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__81118,new cljs.core.Keyword(null,"descending","descending",-24766135))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_81113(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e81131){if((e81131 instanceof Error)){
var e__62528__auto____$4 = e81131;
if((e__62528__auto____$4 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__81117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__81117,new cljs.core.Keyword(null,"ascending","ascending",-988350486))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_81113(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e81132){if((e81132 instanceof Error)){
var e__62528__auto____$5 = e81132;
if((e__62528__auto____$5 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__81117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__81117,new cljs.core.Keyword(null,"descending","descending",-24766135))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$normalize$canonicalize_order_by_$_replace_81113(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e81133){if((e81133 instanceof Error)){
var e__62528__auto____$6 = e81133;
if((e__62528__auto____$6 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__81117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__81117,new cljs.core.Keyword(null,"asc","asc",356854569))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),metabase.mbql.normalize.canonicalize_implicit_field_id(field)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e81135){if((e81135 instanceof Error)){
var e__62528__auto____$7 = e81135;
if((e__62528__auto____$7 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__81117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__81117,new cljs.core.Keyword(null,"desc","desc",2093485764))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),metabase.mbql.normalize.canonicalize_implicit_field_id(field)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e81136){if((e81136 instanceof Error)){
var e__62528__auto____$8 = e81136;
if((e__62528__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$8;
}
} else {
throw e81136;

}
}} else {
throw e__62528__auto____$7;
}
} else {
throw e81135;

}
}} else {
throw e__62528__auto____$6;
}
} else {
throw e81133;

}
}} else {
throw e__62528__auto____$5;
}
} else {
throw e81132;

}
}} else {
throw e__62528__auto____$4;
}
} else {
throw e81131;

}
}} else {
throw e__62528__auto____$3;
}
} else {
throw e81130;

}
}} else {
throw e__62528__auto____$2;
}
} else {
throw e81129;

}
}} else {
throw e__62528__auto____$1;
}
} else {
throw e81128;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e81122){if((e81122 instanceof Error)){
var e__62528__auto____$1 = e81122;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (0))))){
try{var _AMPERSAND_match_left__81119 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(0));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__81119)) && ((cljs.core.count(_AMPERSAND_match_left__81119) === (0))))){
try{var _AMPERSAND_match_right__81120 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_right__81120,clauses)){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_order_by,clauses)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e81127){if((e81127 instanceof Error)){
var e__62528__auto____$2 = e81127;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$2;
}
} else {
throw e81127;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e81126){if((e81126 instanceof Error)){
var e__62528__auto____$2 = e81126;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$2;
}
} else {
throw e81126;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e81123){if((e81123 instanceof Error)){
var e__62528__auto____$2 = e81123;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$normalize$canonicalize_order_by_$_replace_81113,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto____$2;
}
} else {
throw e81123;

}
}} else {
throw e__62528__auto____$1;
}
} else {
throw e81122;

}
}} else {
throw e__62528__auto__;
}
} else {
throw e81121;

}
}})(cljs.core.PersistentVector.EMPTY,clauses);
});
metabase.mbql.normalize.canonicalize_template_tag = (function metabase$mbql$normalize$canonicalize_template_tag(p__81150){
var map__81151 = p__81150;
var map__81151__$1 = cljs.core.__destructure_map(map__81151);
var tag = map__81151__$1;
var dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81151__$1,new cljs.core.Keyword(null,"dimension","dimension",543254198));
var G__81152 = tag;
if(cljs.core.truth_(dimension)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__81152,new cljs.core.Keyword(null,"dimension","dimension",543254198),metabase.mbql.normalize.canonicalize_mbql_clause);
} else {
return G__81152;
}
});
metabase.mbql.normalize.canonicalize_template_tags = (function metabase$mbql$normalize$canonicalize_template_tags(tags){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$mbql$normalize$canonicalize_template_tags_$_iter__81153(s__81154){
return (new cljs.core.LazySeq(null,(function (){
var s__81154__$1 = s__81154;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81154__$1);
if(temp__5804__auto__){
var s__81154__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81154__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81154__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81156 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81155 = (0);
while(true){
if((i__81155 < size__5522__auto__)){
var vec__81159 = cljs.core._nth(c__5521__auto__,i__81155);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81159,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81159,(1),null);
cljs.core.chunk_append(b__81156,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,metabase.mbql.normalize.canonicalize_template_tag(tag)], null));

var G__81452 = (i__81155 + (1));
i__81155 = G__81452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81156),metabase$mbql$normalize$canonicalize_template_tags_$_iter__81153(cljs.core.chunk_rest(s__81154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81156),null);
}
} else {
var vec__81163 = cljs.core.first(s__81154__$2);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81163,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81163,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,metabase.mbql.normalize.canonicalize_template_tag(tag)], null),metabase$mbql$normalize$canonicalize_template_tags_$_iter__81153(cljs.core.rest(s__81154__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(tags);
})());
});
metabase.mbql.normalize.canonicalize_native_query = (function metabase$mbql$normalize$canonicalize_native_query(p__81167){
var map__81168 = p__81167;
var map__81168__$1 = cljs.core.__destructure_map(map__81168);
var native_query = map__81168__$1;
var template_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81168__$1,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685));
var G__81169 = native_query;
if(cljs.core.truth_(template_tags)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__81169,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),metabase.mbql.normalize.canonicalize_template_tags);
} else {
return G__81169;
}
});
metabase.mbql.normalize.canonicalize_source_query = (function metabase$mbql$normalize$canonicalize_source_query(p__81170){
var map__81171 = p__81170;
var map__81171__$1 = cljs.core.__destructure_map(map__81171);
var source_query = map__81171__$1;
var native_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81171__$1,new cljs.core.Keyword(null,"native","native",-613060878));
var G__81172 = source_query;
var G__81172__$1 = ((cljs.core.not(native_QMARK_))?(metabase.mbql.normalize.canonicalize_inner_mbql_query.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.normalize.canonicalize_inner_mbql_query.cljs$core$IFn$_invoke$arity$1(G__81172) : metabase.mbql.normalize.canonicalize_inner_mbql_query.call(null,G__81172)):G__81172);
if(cljs.core.truth_(native_QMARK_)){
return metabase.mbql.normalize.canonicalize_native_query(G__81172__$1);
} else {
return G__81172__$1;
}
});
metabase.mbql.normalize.non_empty_QMARK_ = (function metabase$mbql$normalize$non_empty_QMARK_(x){
if(cljs.core.coll_QMARK_(x)){
return cljs.core.seq(x);
} else {
return (!((x == null)));
}
});
/**
 * Perform specific steps to canonicalize the various top-level clauses in an MBQL query.
 */
metabase.mbql.normalize.canonicalize_top_level_mbql_clauses = (function metabase$mbql$normalize$canonicalize_top_level_mbql_clauses(mbql_query){
var G__81175 = mbql_query;
var G__81175__$1 = ((metabase.mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__81175,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),metabase.mbql.normalize.canonicalize_aggregations):G__81175);
var G__81175__$2 = ((metabase.mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__81175__$1,new cljs.core.Keyword(null,"breakout","breakout",-732419050),metabase.mbql.normalize.canonicalize_breakouts):G__81175__$1);
var G__81175__$3 = ((metabase.mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__81175__$2,new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,metabase.mbql.normalize.wrap_implicit_field_id)):G__81175__$2);
var G__81175__$4 = ((metabase.mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__81175__$3,new cljs.core.Keyword(null,"order-by","order-by",1527318070),metabase.mbql.normalize.canonicalize_order_by):G__81175__$3);
if(metabase.mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"source-query","source-query",198004422).cljs$core$IFn$_invoke$arity$1(mbql_query))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__81175__$4,new cljs.core.Keyword(null,"source-query","source-query",198004422),metabase.mbql.normalize.canonicalize_source_query);
} else {
return G__81175__$4;
}
});
metabase.mbql.normalize.canonicalize_inner_mbql_query = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.canonicalize_mbql_clauses,metabase.mbql.normalize.canonicalize_top_level_mbql_clauses);
/**
 * In Dashboard 0.33.0 `:source-metadata` about resolved queries is added to the 'inner' MBQL query rather than to the
 *   top-level; if we encounter the old style, move it to the appropriate location.
 */
metabase.mbql.normalize.move_source_metadata_to_mbql_query = (function metabase$mbql$normalize$move_source_metadata_to_mbql_query(p__81178){
var map__81179 = p__81178;
var map__81179__$1 = cljs.core.__destructure_map(map__81179);
var query = map__81179__$1;
var source_metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81179__$1,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085));
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085)], null),source_metadata);
});
/**
 * Canonicalize a query [MBQL query], rewriting the query as if you perfectly followed the recommended style guides for
 *   writing MBQL. Does things like removes unneeded and empty clauses, converts older MBQL '95 syntax to MBQL '98, etc.
 */
metabase.mbql.normalize.canonicalize = (function metabase$mbql$normalize$canonicalize(p__81180){
var map__81181 = p__81180;
var map__81181__$1 = cljs.core.__destructure_map(map__81181);
var outer_query = map__81181__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81181__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81181__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var source_metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81181__$1,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085));
var native$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81181__$1,new cljs.core.Keyword(null,"native","native",-613060878));
try{var G__81184 = outer_query;
var G__81184__$1 = (cljs.core.truth_(source_metadata)?metabase.mbql.normalize.move_source_metadata_to_mbql_query(G__81184):G__81184);
var G__81184__$2 = (cljs.core.truth_(query)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__81184__$1,new cljs.core.Keyword(null,"query","query",-1288509510),metabase.mbql.normalize.canonicalize_inner_mbql_query):G__81184__$1);
var G__81184__$3 = (cljs.core.truth_(parameters)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__81184__$2,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,metabase.mbql.normalize.canonicalize_mbql_clauses)):G__81184__$2);
var G__81184__$4 = (cljs.core.truth_(native$)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__81184__$3,new cljs.core.Keyword(null,"native","native",-613060878),metabase.mbql.normalize.canonicalize_native_query):G__81184__$3);
return metabase.mbql.normalize.canonicalize_mbql_clauses(G__81184__$4);

}catch (e81183){if((e81183 instanceof Error)){
var e = e81183;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error canonicalizing query: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null),e);
} else {
throw e81183;

}
}});
/**
 * Remove any Fields specified in both `:breakout` and `:fields` from `:fields`; it is implied that any breakout Field
 *   will be returned, specifying it in both would imply it is to be returned twice, which tends to cause confusion for
 *   the QP and drivers. (This is done to work around historic bugs with the way queries were generated on the frontend;
 *   I'm not sure this behavior makes sense, but removing it would break existing queries.)
 * 
 *   We will remove either exact matches:
 * 
 *  {:breakout [[:field-id 10]], :fields [[:field-id 10]]} ; -> {:breakout [[:field-id 10]]}
 * 
 *   or unbucketed matches:
 * 
 *  {:breakout [[:datetime-field [:field-id 10] :month]], :fields [[:field-id 10]]}
 *  ;; -> {:breakout [[:field-id 10]]}
 */
metabase.mbql.normalize.remove_breakout_fields_from_fields = (function metabase$mbql$normalize$remove_breakout_fields_from_fields(p__81189){
var map__81190 = p__81189;
var map__81190__$1 = cljs.core.__destructure_map(map__81190);
var query = map__81190__$1;
var map__81191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81190__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__81191__$1 = cljs.core.__destructure_map(map__81191);
var breakout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81191__$1,new cljs.core.Keyword(null,"breakout","breakout",-732419050));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81191__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
if((!(((cljs.core.seq(breakout)) && (cljs.core.seq(fields)))))){
return query;
} else {
var breakout_fields = cljs.core.set(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$mbql$normalize$remove_breakout_fields_from_fields_$_match_81193(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__81196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__81196,new cljs.core.Keyword(null,"field","field",-1302436500))){
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358))], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e81205){if((e81205 instanceof Error)){
var e__62528__auto__ = e81205;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e81205;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e81199){if((e81199 instanceof Error)){
var e__62528__auto__ = e81199;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$mbql$normalize$remove_breakout_fields_from_fields_$_match_81193,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e81199;

}
}})(cljs.core.PersistentVector.EMPTY,breakout)))));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,breakout_fields)));
}
});
/**
 * Perform transformations that operate on the query as a whole, making sure the structure as a whole is logical and
 *   consistent.
 */
metabase.mbql.normalize.perform_whole_query_transformations = (function metabase$mbql$normalize$perform_whole_query_transformations(query){
try{return metabase.mbql.normalize.remove_breakout_fields_from_fields(query);
}catch (e81206){if((e81206 instanceof Error)){
var e = e81206;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n("Error performing whole query transformations"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null),e);
} else {
throw e81206;

}
}});
metabase.mbql.normalize.remove_empty_clauses_in_map = (function metabase$mbql$normalize$remove_empty_clauses_in_map(m,path){
var m__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),(function (){var iter__5523__auto__ = (function metabase$mbql$normalize$remove_empty_clauses_in_map_$_iter__81208(s__81209){
return (new cljs.core.LazySeq(null,(function (){
var s__81209__$1 = s__81209;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81209__$1);
if(temp__5804__auto__){
var s__81209__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81209__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81209__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81211 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81210 = (0);
while(true){
if((i__81210 < size__5522__auto__)){
var vec__81216 = cljs.core._nth(c__5521__auto__,i__81210);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81216,(1),null);
var v__$1 = (function (){var G__81219 = v;
var G__81220 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__81219,G__81220) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__81219,G__81220));
})();
if((!((v__$1 == null)))){
cljs.core.chunk_append(b__81211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null));

var G__81462 = (i__81210 + (1));
i__81210 = G__81462;
continue;
} else {
var G__81463 = (i__81210 + (1));
i__81210 = G__81463;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81211),metabase$mbql$normalize$remove_empty_clauses_in_map_$_iter__81208(cljs.core.chunk_rest(s__81209__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81211),null);
}
} else {
var vec__81221 = cljs.core.first(s__81209__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81221,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81221,(1),null);
var v__$1 = (function (){var G__81224 = v;
var G__81225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__81224,G__81225) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__81224,G__81225));
})();
if((!((v__$1 == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null),metabase$mbql$normalize$remove_empty_clauses_in_map_$_iter__81208(cljs.core.rest(s__81209__$2)));
} else {
var G__81465 = cljs.core.rest(s__81209__$2);
s__81209__$1 = G__81465;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(m);
})());
if(cljs.core.seq(m__$1)){
return m__$1;
} else {
return null;
}
});
metabase.mbql.normalize.remove_empty_clauses_in_sequence = (function metabase$mbql$normalize$remove_empty_clauses_in_sequence(xs,path){
var xs__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__81227_SHARP_){
var G__81229 = p1__81227_SHARP_;
var G__81230 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683));
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__81229,G__81230) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__81229,G__81230));
}),xs);
if(cljs.core.truth_(cljs.core.some(cljs.core.some_QMARK_,xs__$1))){
return xs__$1;
} else {
return null;
}
});
metabase.mbql.normalize.remove_empty_clauses_in_join = (function metabase$mbql$normalize$remove_empty_clauses_in_join(join){
var G__81232 = join;
var G__81233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null);
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__81232,G__81233) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__81232,G__81233));
});
metabase.mbql.normalize.remove_empty_clauses_in_source_query = (function metabase$mbql$normalize$remove_empty_clauses_in_source_query(p__81235){
var map__81236 = p__81235;
var map__81236__$1 = cljs.core.__destructure_map(map__81236);
var source_query = map__81236__$1;
var native_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81236__$1,new cljs.core.Keyword(null,"native","native",-613060878));
if(cljs.core.truth_(native_QMARK_)){
return clojure.set.rename_keys((function (){var G__81238 = clojure.set.rename_keys(source_query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
var G__81239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native","native",-613060878)], null);
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__81238,G__81239) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__81238,G__81239));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"native","native",-613060878)], null));
} else {
var G__81240 = source_query;
var G__81241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null);
return (metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__81240,G__81241) : metabase.mbql.normalize.remove_empty_clauses.call(null,G__81240,G__81241));
}
});
metabase.mbql.normalize.path__GT_special_remove_empty_clauses_fn = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"native","native",-613060878),cljs.core.identity,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-query","source-query",198004422),metabase.mbql.normalize.remove_empty_clauses_in_source_query,new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.mbql.normalize","sequence","metabase.mbql.normalize/sequence",-1700645683),metabase.mbql.normalize.remove_empty_clauses_in_join], null)], null),new cljs.core.Keyword(null,"viz-settings","viz-settings",256055379),cljs.core.identity], null);
/**
 * Remove any empty or `nil` clauses in a query.
 */
metabase.mbql.normalize.remove_empty_clauses = (function metabase$mbql$normalize$remove_empty_clauses(var_args){
var G__81247 = arguments.length;
switch (G__81247) {
case 1:
return metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$1 = (function (query){
return metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(query,cljs.core.PersistentVector.EMPTY);
}));

(metabase.mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 = (function (x,path){
try{var special_fn = ((cljs.core.seq(path))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.mbql.normalize.path__GT_special_remove_empty_clauses_fn,path):null);
if(cljs.core.fn_QMARK_(special_fn)){
return (special_fn.cljs$core$IFn$_invoke$arity$1 ? special_fn.cljs$core$IFn$_invoke$arity$1(x) : special_fn.call(null,x));
} else {
if(cljs.core.record_QMARK_(x)){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
return metabase.mbql.normalize.remove_empty_clauses_in_map(x,path);
} else {
if(cljs.core.sequential_QMARK_(x)){
return metabase.mbql.normalize.remove_empty_clauses_in_sequence(x,path);
} else {
return x;

}
}
}
}
}catch (e81250){if((e81250 instanceof Error)){
var e = e81250;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Error removing empty clauses from form.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),x,new cljs.core.Keyword(null,"path","path",-188191168),path], null),e);
} else {
throw e81250;

}
}}));

(metabase.mbql.normalize.remove_empty_clauses.cljs$lang$maxFixedArity = 2);

/**
 * Normalize the tokens in a Dashboard query (i.e., make them all `lisp-case` keywords), rewrite deprecated clauses as
 *   up-to-date MBQL 2000, and remove empty clauses.
 */
metabase.mbql.normalize.normalize = (function (){var normalize_STAR_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(metabase.mbql.normalize.remove_empty_clauses,metabase.mbql.normalize.perform_whole_query_transformations,metabase.mbql.normalize.canonicalize,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.mbql.normalize.normalize_tokens], 0));
return (function (query){
try{return normalize_STAR_(query);
}catch (e81252){if((e81252 instanceof Error)){
var e = e81252;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error normalizing query: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null),e);
} else {
throw e81252;

}
}});
})();
/**
 * Normalize just a specific fragment of a query, such as just the inner MBQL part or just a filter clause. `path` is
 *   where this fragment would normally live in a full query.
 * 
 *  (normalize-fragment [:query :filter] ["=" 100 200])
 *  ;;-> [:= [:field-id 100] 200]
 */
metabase.mbql.normalize.normalize_fragment = (function metabase$mbql$normalize$normalize_fragment(path,x){
if(cljs.core.not(cljs.core.seq(path))){
return metabase.mbql.normalize.normalize(x);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__81253 = cljs.core.butlast(path);
var G__81254 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.last(path),x]);
return (metabase.mbql.normalize.normalize_fragment.cljs$core$IFn$_invoke$arity$2 ? metabase.mbql.normalize.normalize_fragment.cljs$core$IFn$_invoke$arity$2(G__81253,G__81254) : metabase.mbql.normalize.normalize_fragment.call(null,G__81253,G__81254));
})(),cljs.core.last(path));
}
});
Object.defineProperty(module.exports, "normalize_native_query", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_native_query; } });
Object.defineProperty(module.exports, "canonicalize_count_clause", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_count_clause; } });
Object.defineProperty(module.exports, "canonicalize_implicit_field_id", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_implicit_field_id; } });
Object.defineProperty(module.exports, "normalize_join", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_join; } });
Object.defineProperty(module.exports, "remove_breakout_fields_from_fields", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_breakout_fields_from_fields; } });
Object.defineProperty(module.exports, "normalize", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize; } });
Object.defineProperty(module.exports, "canonicalize_top_level_mbql_clauses", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_top_level_mbql_clauses; } });
Object.defineProperty(module.exports, "mbql_clause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.normalize.mbql_clause_QMARK_; } });
Object.defineProperty(module.exports, "canonicalize_simple_filter_clause", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_simple_filter_clause; } });
Object.defineProperty(module.exports, "normalize_template_tags", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_template_tags; } });
Object.defineProperty(module.exports, "normalize_source_metadata", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_source_metadata; } });
Object.defineProperty(module.exports, "normalize_order_by_tokens", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_order_by_tokens; } });
Object.defineProperty(module.exports, "canonicalize_native_query", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_native_query; } });
Object.defineProperty(module.exports, "non_empty_QMARK_", { enumerable: false, get: function() { return metabase.mbql.normalize.non_empty_QMARK_; } });
Object.defineProperty(module.exports, "remove_empty_clauses_in_join", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_empty_clauses_in_join; } });
Object.defineProperty(module.exports, "remove_empty_clauses_in_sequence", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_empty_clauses_in_sequence; } });
Object.defineProperty(module.exports, "remove_empty_clauses", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_empty_clauses; } });
Object.defineProperty(module.exports, "normalize_expressions_tokens", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_expressions_tokens; } });
Object.defineProperty(module.exports, "canonicalize_breakouts", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_breakouts; } });
Object.defineProperty(module.exports, "normalize_fragment", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_fragment; } });
Object.defineProperty(module.exports, "template_tag_definition_key__GT_transform_fn", { enumerable: false, get: function() { return metabase.mbql.normalize.template_tag_definition_key__GT_transform_fn; } });
Object.defineProperty(module.exports, "path__GT_special_token_normalization_fn", { enumerable: false, get: function() { return metabase.mbql.normalize.path__GT_special_token_normalization_fn; } });
Object.defineProperty(module.exports, "canonicalize_compound_filter_clause", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_compound_filter_clause; } });
Object.defineProperty(module.exports, "normalize_template_tag_definition", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_template_tag_definition; } });
Object.defineProperty(module.exports, "is_clause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.normalize.is_clause_QMARK_; } });
Object.defineProperty(module.exports, "normalize_ag_clause_tokens", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_ag_clause_tokens; } });
Object.defineProperty(module.exports, "canonicalize_order_by", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_order_by; } });
Object.defineProperty(module.exports, "canonicalize_source_query", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_source_query; } });
Object.defineProperty(module.exports, "canonicalize_inner_mbql_query", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_inner_mbql_query; } });
Object.defineProperty(module.exports, "normalize_source_query", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_source_query; } });
Object.defineProperty(module.exports, "aggregation_subclause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.normalize.aggregation_subclause_QMARK_; } });
Object.defineProperty(module.exports, "canonicalize_template_tag", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_template_tag; } });
Object.defineProperty(module.exports, "normalize_query_parameter", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_query_parameter; } });
Object.defineProperty(module.exports, "canonicalize_simple_aggregation_with_field", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_simple_aggregation_with_field; } });
Object.defineProperty(module.exports, "path__GT_special_remove_empty_clauses_fn", { enumerable: false, get: function() { return metabase.mbql.normalize.path__GT_special_remove_empty_clauses_fn; } });
Object.defineProperty(module.exports, "normalize_tokens", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_tokens; } });
Object.defineProperty(module.exports, "normalize_mbql_clause_tokens", { enumerable: false, get: function() { return metabase.mbql.normalize.normalize_mbql_clause_tokens; } });
Object.defineProperty(module.exports, "canonicalize", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize; } });
Object.defineProperty(module.exports, "canonicalize_mbql_clauses", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_mbql_clauses; } });
Object.defineProperty(module.exports, "wrap_implicit_field_id", { enumerable: false, get: function() { return metabase.mbql.normalize.wrap_implicit_field_id; } });
Object.defineProperty(module.exports, "canonicalize_filtered_aggregation_clause", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_filtered_aggregation_clause; } });
Object.defineProperty(module.exports, "canonicalize_mbql_clause", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_mbql_clause; } });
Object.defineProperty(module.exports, "wrap_single_aggregations", { enumerable: false, get: function() { return metabase.mbql.normalize.wrap_single_aggregations; } });
Object.defineProperty(module.exports, "perform_whole_query_transformations", { enumerable: false, get: function() { return metabase.mbql.normalize.perform_whole_query_transformations; } });
Object.defineProperty(module.exports, "remove_empty_clauses_in_source_query", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_empty_clauses_in_source_query; } });
Object.defineProperty(module.exports, "remove_empty_clauses_in_map", { enumerable: false, get: function() { return metabase.mbql.normalize.remove_empty_clauses_in_map; } });
Object.defineProperty(module.exports, "maybe_normalize_token", { enumerable: false, get: function() { return metabase.mbql.normalize.maybe_normalize_token; } });
Object.defineProperty(module.exports, "canonicalize_aggregations", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_aggregations; } });
Object.defineProperty(module.exports, "canonicalize_template_tags", { enumerable: false, get: function() { return metabase.mbql.normalize.canonicalize_template_tags; } });
Object.defineProperty(module.exports, "move_source_metadata_to_mbql_query", { enumerable: false, get: function() { return metabase.mbql.normalize.move_source_metadata_to_mbql_query; } });
//# sourceMappingURL=metabase.mbql.normalize.js.map
