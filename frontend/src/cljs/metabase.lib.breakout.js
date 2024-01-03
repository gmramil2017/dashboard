var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.breakout.js");

goog.provide('metabase.lib.breakout');
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"breakout","breakout",-732419050),(function (query,stage_number,_k){
var temp__5804__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if(cljs.core.truth_(temp__5804__auto__)){
var breakouts = temp__5804__auto__;
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Grouped by {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n("and"))," "].join(''),(function (){var iter__5523__auto__ = (function metabase$lib$breakout$iter__80048(s__80049){
return (new cljs.core.LazySeq(null,(function (){
var s__80049__$1 = s__80049;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__80049__$1);
if(temp__5804__auto____$1){
var s__80049__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__80049__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__80049__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__80051 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__80050 = (0);
while(true){
if((i__80050 < size__5522__auto__)){
var breakout = cljs.core._nth(c__5521__auto__,i__80050);
cljs.core.chunk_append(b__80051,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,breakout,new cljs.core.Keyword(null,"long","long",-171452093)));

var G__80169 = (i__80050 + (1));
i__80050 = G__80169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80051),metabase$lib$breakout$iter__80048(cljs.core.chunk_rest(s__80049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80051),null);
}
} else {
var breakout = cljs.core.first(s__80049__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,breakout,new cljs.core.Keyword(null,"long","long",-171452093)),metabase$lib$breakout$iter__80048(cljs.core.rest(s__80049__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(breakouts);
})())], 0));
} else {
return null;
}
}));
/**
 * Inputs: ([query expr]
 *         [query :- :metabase.lib.schema/query stage-number :- :int expr :- some?])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Add a new breakout on an expression, presumably a Field reference.
 */
metabase.lib.breakout.breakout = (function metabase$lib$breakout$breakout(var_args){
var G__80063 = arguments.length;
switch (G__80063) {
case 2:
return metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$2 = (function (query,expr){

return metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$3(query,(-1),expr);
}));

(metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,expr){

var expr__$1 = metabase.lib.ref.ref(((cljs.core.fn_QMARK_(expr))?(expr.cljs$core$IFn$_invoke$arity$2 ? expr.cljs$core$IFn$_invoke$arity$2(query,stage_number) : expr.call(null,query,stage_number)):expr));
return metabase.lib.util.add_summary_clause(query,stage_number,new cljs.core.Keyword(null,"breakout","breakout",-732419050),expr__$1);
}));

(metabase.lib.breakout.breakout.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential :metabase.lib.schema.expression/expression]]
 *        
 * 
 *   Return the current breakouts
 */
metabase.lib.breakout.breakouts = (function metabase$lib$breakout$breakouts(var_args){
var G__80075 = arguments.length;
switch (G__80075) {
case 1:
return metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

return cljs.core.not_empty(new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
}));

(metabase.lib.breakout.breakouts.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int]
 *   Return: [:maybe [:sequential lib.metadata/ColumnMetadata]]
 *        
 * 
 *   Get metadata about the breakouts in a given stage of a `query`.
 */
metabase.lib.breakout.breakouts_metadata = (function metabase$lib$breakout$breakouts_metadata(query,stage_number){

var G__80129 = cljs.core.not_empty(new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if((G__80129 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (field_ref){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,field_ref),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","breakouts","source/breakouts",-1706018158));
}),G__80129);
}
});
/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:sequential lib.metadata/ColumnMetadata]
 *        
 * 
 *   Get column metadata for all the columns that can be broken out by in
 *   the stage number `stage-number` of the query `query`
 *   If `stage-number` is omitted, the last stage is used.
 *   The rules for determining which columns can be broken out by are as follows:
 * 
 *   1. custom `:expressions` in this stage of the query
 * 
 *   2. Fields 'exported' by the previous stage of the query, if there is one;
 *   otherwise Fields from the current `:source-table`
 * 
 *   3. Fields exported by explicit joins
 * 
 *   4. Fields in Tables that are implicitly joinable.
 */
metabase.lib.breakout.breakoutable_columns = (function metabase$lib$breakout$breakoutable_columns(var_args){
var G__80134 = arguments.length;
switch (G__80134) {
case 1:
return metabase.lib.breakout.breakoutable_columns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.breakout.breakoutable_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.breakout.breakoutable_columns.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.breakout.breakoutable_columns.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.breakout.breakoutable_columns.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

var columns = (function (){var stage = metabase.lib.util.query_stage(query,stage_number);
var iter__5523__auto__ = (function metabase$lib$breakout$iter__80154(s__80155){
return (new cljs.core.LazySeq(null,(function (){
var s__80155__$1 = s__80155;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80155__$1);
if(temp__5804__auto__){
var s__80155__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80155__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__80155__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__80157 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__80156 = (0);
while(true){
if((i__80156 < size__5522__auto__)){
var col = cljs.core._nth(c__5521__auto__,i__80156);
cljs.core.chunk_append(b__80157,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,new cljs.core.Keyword("metabase.lib.breakout","ref","metabase.lib.breakout/ref",-709070505),metabase.lib.ref.ref(col)));

var G__80177 = (i__80156 + (1));
i__80156 = G__80177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80157),metabase$lib$breakout$iter__80154(cljs.core.chunk_rest(s__80155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80157),null);
}
} else {
var col = cljs.core.first(s__80155__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,new cljs.core.Keyword("metabase.lib.breakout","ref","metabase.lib.breakout/ref",-709070505),metabase.lib.ref.ref(col)),metabase$lib$breakout$iter__80154(cljs.core.rest(s__80155__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage));
})();
var ref__GT_existing_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,breakout_ref){
var temp__5804__auto__ = metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$3(query,breakout_ref,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.breakout","ref","metabase.lib.breakout/ref",-709070505),columns));
if(cljs.core.truth_(temp__5804__auto__)){
var matching_ref = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matching_ref,index], null);
} else {
return null;
}
})),metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2(query,stage_number));
var G__80166 = cljs.core.not_empty(columns);
if((G__80166 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (col){
var pos = (function (){var G__80167 = new cljs.core.Keyword("metabase.lib.breakout","ref","metabase.lib.breakout/ref",-709070505).cljs$core$IFn$_invoke$arity$1(col);
return (ref__GT_existing_index.cljs$core$IFn$_invoke$arity$1 ? ref__GT_existing_index.cljs$core$IFn$_invoke$arity$1(G__80167) : ref__GT_existing_index.call(null,G__80167));
})();
var G__80168 = col;
var G__80168__$1 = (cljs.core.truth_(pos)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80168,new cljs.core.Keyword(null,"breakout-position","breakout-position",-760153191),pos):G__80168);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__80168__$1,new cljs.core.Keyword("metabase.lib.breakout","ref","metabase.lib.breakout/ref",-709070505));

})),G__80166);
}
}));

(metabase.lib.breakout.breakoutable_columns.cljs$lang$maxFixedArity = 2);

Object.defineProperty(module.exports, "breakout", { enumerable: false, get: function() { return metabase.lib.breakout.breakout; } });
Object.defineProperty(module.exports, "breakouts", { enumerable: false, get: function() { return metabase.lib.breakout.breakouts; } });
Object.defineProperty(module.exports, "breakouts_metadata", { enumerable: false, get: function() { return metabase.lib.breakout.breakouts_metadata; } });
Object.defineProperty(module.exports, "breakoutable_columns", { enumerable: false, get: function() { return metabase.lib.breakout.breakoutable_columns; } });
//# sourceMappingURL=metabase.lib.breakout.js.map
