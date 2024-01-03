var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.options.js");
require("./metabase.lib.util.js");
require("./metabase.mbql.util.match.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.equality.js");

goog.provide('metabase.lib.equality');
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.equality !== 'undefined') && (typeof metabase.lib.equality._EQ_ !== 'undefined')){
} else {
/**
 * Determine whether two already-normalized pMBQL maps, clauses, or other sorts of expressions are equal. The basic rule
 *   is that two things are considered equal if they are [[clojure.core/=]], or, if they are both maps, if they
 *   are [[clojure.core/=]] if you ignore all qualified keyword keys besides `:lib/type`.
 */
metabase.lib.equality._EQ_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__64889 = cljs.core.get_global_hierarchy;
return (fexpr__64889.cljs$core$IFn$_invoke$arity$0 ? fexpr__64889.cljs$core$IFn$_invoke$arity$0() : fexpr__64889.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.equality","="),(function (x,y){
var x_dispatch_value = metabase.lib.dispatch.dispatch_value(x);
var y_dispatch_value = metabase.lib.dispatch.dispatch_value(y);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x_dispatch_value,y_dispatch_value)){
return new cljs.core.Keyword("metabase.lib.equality","different-dispatch-values","metabase.lib.equality/different-dispatch-values",-2107733395);
} else {
return x_dispatch_value;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.equality","different-dispatch-values","metabase.lib.equality/different-dispatch-values",-2107733395),(function (_x,_y){
return false;
}));
/**
 * Set of keys in a map that we consider relevant for [[=]] purposes.
 */
metabase.lib.equality.relevant_keys_set = (function metabase$lib$equality$relevant_keys_set(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (k){
return ((cljs.core.qualified_keyword_QMARK_(k)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("lib","type","lib/type",1175424801))));
})),cljs.core.keys(m));
});
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422),(function (m1,m2){
var m1_keys = metabase.lib.equality.relevant_keys_set(m1);
var m2_keys = metabase.lib.equality.relevant_keys_set(m2);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m1_keys,m2_keys)) && (cljs.core.every_QMARK_((function (k){
return metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m2,k));
}),m1_keys)));
}));
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969),(function (xs,ys){
var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),cljs.core.count(ys));
if(and__5043__auto__){
var G__64918 = xs;
var vec__64920 = G__64918;
var seq__64921 = cljs.core.seq(vec__64920);
var first__64922 = cljs.core.first(seq__64921);
var seq__64921__$1 = cljs.core.next(seq__64921);
var x = first__64922;
var more_x = seq__64921__$1;
var G__64919 = ys;
var vec__64923 = G__64919;
var seq__64924 = cljs.core.seq(vec__64923);
var first__64925 = cljs.core.first(seq__64924);
var seq__64924__$1 = cljs.core.next(seq__64924);
var y = first__64925;
var more_y = seq__64924__$1;
var G__64918__$1 = G__64918;
var G__64919__$1 = G__64919;
while(true){
var vec__64926 = G__64918__$1;
var seq__64927 = cljs.core.seq(vec__64926);
var first__64928 = cljs.core.first(seq__64927);
var seq__64927__$1 = cljs.core.next(seq__64927);
var x__$1 = first__64928;
var more_x__$1 = seq__64927__$1;
var vec__64929 = G__64919__$1;
var seq__64930 = cljs.core.seq(vec__64929);
var first__64931 = cljs.core.first(seq__64930);
var seq__64930__$1 = cljs.core.next(seq__64930);
var y__$1 = first__64931;
var more_y__$1 = seq__64930__$1;
var and__5043__auto____$1 = metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y__$1);
if(cljs.core.truth_(and__5043__auto____$1)){
var or__5045__auto__ = cljs.core.empty_QMARK_(more_x__$1);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var G__64981 = more_x__$1;
var G__64982 = more_y__$1;
G__64918__$1 = G__64981;
G__64919__$1 = G__64982;
continue;
}
} else {
return and__5043__auto____$1;
}
break;
}
} else {
return and__5043__auto__;
}
}));
metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_ = null;
metabase.lib.equality.aggregation_uuid__GT_index = (function metabase$lib$equality$aggregation_uuid__GT_index(stage){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,p__64938){
var vec__64940 = p__64938;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64940,(0),null);
var map__64943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64940,(1),null);
var map__64943__$1 = cljs.core.__destructure_map(map__64943);
var ag_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64943__$1,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ag_uuid,idx], null);
})),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(stage));
});
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (x,y){
var _STAR_side__GT_uuid__GT_index_STAR__orig_val__64944 = metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_;
var _STAR_side__GT_uuid__GT_index_STAR__temp_val__64945 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),metabase.lib.equality.aggregation_uuid__GT_index(x),new cljs.core.Keyword(null,"right","right",-452581833),metabase.lib.equality.aggregation_uuid__GT_index(y)], null);
(metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_ = _STAR_side__GT_uuid__GT_index_STAR__temp_val__64945);

try{var fexpr__64946 = cljs.core.get_method(metabase.lib.equality._EQ_,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422));
return (fexpr__64946.cljs$core$IFn$_invoke$arity$2 ? fexpr__64946.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__64946.call(null,x,y));
}finally {(metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_ = _STAR_side__GT_uuid__GT_index_STAR__orig_val__64944);
}}));
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p__64947,p__64948){
var vec__64949 = p__64947;
var x_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64949,(0),null);
var x_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64949,(1),null);
var x_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64949,(2),null);
var x = vec__64949;
var vec__64952 = p__64948;
var y_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64952,(0),null);
var y_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64952,(1),null);
var y_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64952,(2),null);
var y = vec__64952;
var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((3),cljs.core.count(x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(y)], 0));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x_tag,y_tag);
if(and__5043__auto____$1){
var and__5043__auto____$2 = metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(x_opts,y_opts);
if(cljs.core.truth_(and__5043__auto____$2)){
if(cljs.core.truth_(metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),x_uuid], null),new cljs.core.Keyword("metabase.lib.equality","no-left","metabase.lib.equality/no-left",-1403666439)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),y_uuid], null),new cljs.core.Keyword("metabase.lib.equality","no-right","metabase.lib.equality/no-right",2015744769)));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x_uuid,y_uuid);
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}));
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x,y){
if(cljs.core.map_QMARK_(x)){
var fexpr__64957 = cljs.core.get_method(metabase.lib.equality._EQ_,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422));
return (fexpr__64957.cljs$core$IFn$_invoke$arity$2 ? fexpr__64957.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__64957.call(null,x,y));
} else {
if(cljs.core.sequential_QMARK_(x)){
var fexpr__64958 = cljs.core.get_method(metabase.lib.equality._EQ_,new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969));
return (fexpr__64958.cljs$core$IFn$_invoke$arity$2 ? fexpr__64958.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__64958.call(null,x,y));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}));
/**
 * Are two refs `x` and `y` equal?
 * 
 *   DEPRECATED: use [[find-closest-matching-ref]] instead. This does not work if things like `:base-type` are missing or
 *   differ slightly, or handle `:binning` correctly, let alone when things are broken more significantly. If we improve
 *   type calculation it shouldn't break existing queries... right?
 */
metabase.lib.equality.ref_EQ_ = (function metabase$lib$equality$ref_EQ_(x,y){
var or__5045__auto__ = metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.with_default_effective_type(x),metabase.lib.util.with_default_effective_type(y));
}
});
metabase.lib.equality.update_options_remove_namespaced_keys = (function metabase$lib$equality$update_options_remove_namespaced_keys(a_ref){
return metabase.lib.options.update_options(a_ref,(function (options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__64961){
var vec__64962 = p__64961;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64962,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64962,(1),null);
return cljs.core.qualified_keyword_QMARK_(k);
})),options);
}));
});
/**
 * Find the ref that most closely matches `a-ref` from a sequence of `refs`. This is meant to power things
 *   like [[metabase.lib.breakout/breakoutable-columns]] which are supposed to include `:breakout-position` for columns
 *   that are already present as a breakout; sometimes the column in the breakout does not exactly match what MLv2 would
 *   have generated. So try to figure out which column it is referring to.
 * 
 *   This first looks for a matching ref with a strict comparison, then in increasingly less-strict comparisons until it
 *   finds something that matches. This is mostly to work around bugs like #31482 where MLv1 generated queries with
 *   `:field` refs that did not include join aliases even tho the Fields came from joined Tables... we still know the
 *   Fields are the same if they have the same IDs.
 * 
 *   The three-arity version can also find matches between integer Field ID references like `[:field {} 1]` and
 *   equivalent string column name field literal references like `[:field {} "bird_type"]` by resolving Field IDs using
 *   a `metadata-providerable` (something that can be treated as a metadata provider, e.g. a `query` with a
 *   MetadataProvider associated with it). This is the ultimately hacky workaround for totally busted legacy queries.
 *   Note that this currently only works when `a-ref` is the one with the integer Field ID and `refs` have string literal
 *   column names; it does not work the other way around. Luckily we currently don't have problems with MLv1/legacy
 *   queries accidentally using string :field literals where it shouldn't have been doing so.
 */
metabase.lib.equality.find_closest_matching_ref = (function metabase$lib$equality$find_closest_matching_ref(var_args){
var G__64970 = arguments.length;
switch (G__64970) {
case 2:
return metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$2 = (function (a_ref,refs){
var xform = cljs.core.identity;
var more_xforms = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (xform){
return (function (p1__64965_SHARP_){
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(p1__64965_SHARP_,medley.core.update_existing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"binning","binning",1709835866),cljs.core.dissoc,new cljs.core.Keyword(null,"metadata-fn","metadata-fn",915781389),new cljs.core.Keyword("lib","type","lib/type",1175424801)], 0));
});})(xform))
,metabase.lib.equality.update_options_remove_namespaced_keys,((function (xform){
return (function (p1__64966_SHARP_){
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(p1__64966_SHARP_,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458)], 0));
});})(xform))
,((function (xform){
return (function (p1__64967_SHARP_){
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(p1__64967_SHARP_,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794)], 0));
});})(xform))
], null);
while(true){
var or__5045__auto__ = (function (){var a_ref__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(a_ref) : xform.call(null,a_ref));
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2(((function (xform,more_xforms,a_ref__$1){
return (function (p1__64968_SHARP_){
return metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2((xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(p1__64968_SHARP_) : xform.call(null,p1__64968_SHARP_)),a_ref__$1);
});})(xform,more_xforms,a_ref__$1))
,refs);
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.seq(more_xforms)){
var G__64987 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.first(more_xforms));
var G__64988 = cljs.core.rest(more_xforms);
xform = G__64987;
more_xforms = G__64988;
continue;
} else {
return null;
}
}
break;
}
}));

(metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$3 = (function (metadata_providerable,a_ref,refs){
var or__5045__auto__ = metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$2(a_ref,refs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$equality$match_64972(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__64974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__64974,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_2__64976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.integer_QMARK_(_AMPERSAND_match_2__64976)){
var field_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.field(metadata_providerable,field_id));
if(cljs.core.truth_(temp__5804__auto__)){
var field_name = temp__5804__auto__;
return metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),opts,field_name], null),refs);
} else {
return null;
}
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64979){if((e64979 instanceof Error)){
var e__61771__auto__ = e64979;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e64979;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64978){if((e64978 instanceof Error)){
var e__61771__auto__ = e64978;
if((e__61771__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__61771__auto__;
}
} else {
throw e64978;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64977){if((e64977 instanceof Error)){
var e__61771__auto__ = e64977;
if((e__61771__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$lib$equality$match_64972,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__61771__auto__;
}
} else {
throw e64977;

}
}})(cljs.core.PersistentVector.EMPTY,a_ref))));
}
}));

(metabase.lib.equality.find_closest_matching_ref.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "_EQ_", { enumerable: false, get: function() { return metabase.lib.equality._EQ_; } });
Object.defineProperty(module.exports, "relevant_keys_set", { enumerable: false, get: function() { return metabase.lib.equality.relevant_keys_set; } });
Object.defineProperty(module.exports, "_STAR_side__GT_uuid__GT_index_STAR_", { enumerable: false, get: function() { return metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_; } });
Object.defineProperty(module.exports, "aggregation_uuid__GT_index", { enumerable: false, get: function() { return metabase.lib.equality.aggregation_uuid__GT_index; } });
Object.defineProperty(module.exports, "ref_EQ_", { enumerable: false, get: function() { return metabase.lib.equality.ref_EQ_; } });
Object.defineProperty(module.exports, "update_options_remove_namespaced_keys", { enumerable: false, get: function() { return metabase.lib.equality.update_options_remove_namespaced_keys; } });
Object.defineProperty(module.exports, "find_closest_matching_ref", { enumerable: false, get: function() { return metabase.lib.equality.find_closest_matching_ref; } });
//# sourceMappingURL=metabase.lib.equality.js.map
