var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.order_by.js");
require("./metabase.lib.util.js");
require("./metabase.mbql.util.match.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.order_by.js");

goog.provide('metabase.lib.order_by');
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword("metabase.lib.order-by","order-by-clause","metabase.lib.order-by/order-by-clause",774979647));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword("metabase.lib.order-by","order-by-clause","metabase.lib.order-by/order-by-clause",774979647));
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"order-by","order-by",1527318070),(function (query,stage_number,_k){
var temp__5804__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if(cljs.core.truth_(temp__5804__auto__)){
var order_bys = temp__5804__auto__;
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Sorted by {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.util.join_strings_with_conjunction(metabase.shared.util.i18n.js_i18n("and"),(function (){var iter__5523__auto__ = (function metabase$lib$order_by$iter__80817(s__80818){
return (new cljs.core.LazySeq(null,(function (){
var s__80818__$1 = s__80818;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__80818__$1);
if(temp__5804__auto____$1){
var s__80818__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__80818__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__80818__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__80820 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__80819 = (0);
while(true){
if((i__80819 < size__5522__auto__)){
var order_by = cljs.core._nth(c__5521__auto__,i__80819);
cljs.core.chunk_append(b__80820,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,order_by,new cljs.core.Keyword(null,"long","long",-171452093)));

var G__81049 = (i__80819 + (1));
i__80819 = G__81049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80820),metabase$lib$order_by$iter__80817(cljs.core.chunk_rest(s__80818__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80820),null);
}
} else {
var order_by = cljs.core.first(s__80818__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,order_by,new cljs.core.Keyword(null,"long","long",-171452093)),metabase$lib$order_by$iter__80817(cljs.core.rest(s__80818__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(order_bys);
})())], 0));
} else {
return null;
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.order-by","order-by-clause","metabase.lib.order-by/order-by-clause",774979647),(function (query,stage_number,p__80834,style){
var vec__80835 = p__80834;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80835,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80835,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80835,(2),null);
var expr_display_name = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,expr,style);
var G__80838 = tag;
var G__80838__$1 = (((G__80838 instanceof cljs.core.Keyword))?G__80838.fqn:null);
switch (G__80838__$1) {
case "asc":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} ascending",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr_display_name], 0));

break;
case "desc":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} descending",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr_display_name], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80838__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.order-by","order-by-clause","metabase.lib.order-by/order-by-clause",774979647),(function (query,stage_number,p__80839){
var vec__80840 = p__80839;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80840,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80840,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80840,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,expr),new cljs.core.Keyword(null,"direction","direction",-633359395),tag);
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.order_by !== 'undefined') && (typeof metabase.lib.order_by.order_by_clause_method !== 'undefined')){
} else {
metabase.lib.order_by.order_by_clause_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__80852 = cljs.core.get_global_hierarchy;
return (fexpr__80852.cljs$core$IFn$_invoke$arity$0 ? fexpr__80852.cljs$core$IFn$_invoke$arity$0() : fexpr__80852.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.order-by","order-by-clause-method"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.order_by.order_by_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.order-by","order-by-clause","metabase.lib.order-by/order-by-clause",774979647),(function (clause){
return metabase.lib.options.ensure_uuid(clause);
}));
metabase.lib.order_by.order_by_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if((x == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n("Can''t order by nil"),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),metabase.lib.ref.ref(x)], null));
}));
/**
 * Inputs: [clause :- :metabase.lib.schema.order-by/order-by direction :- :metabase.lib.schema.order-by/direction]
 *   Return: :metabase.lib.schema.order-by/order-by
 *        
 * 
 *   Update the direction of an order by clause.
 */
metabase.lib.order_by.with_direction = (function metabase$lib$order_by$with_direction(clause,direction){

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(clause),(0),direction);
});
/**
 * Inputs: ([orderable]
 *         [orderable :- some? direction :- [:maybe [:enum :asc :desc]]])
 *   Return: :any
 *        
 * 
 *   Create an order-by clause independently of a query, e.g. for `replace` or whatever.
 */
metabase.lib.order_by.order_by_clause = (function metabase$lib$order_by$order_by_clause(var_args){
var G__80878 = arguments.length;
switch (G__80878) {
case 1:
return metabase.lib.order_by.order_by_clause.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.order_by.order_by_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.order_by.order_by_clause.cljs$core$IFn$_invoke$arity$1 = (function (orderable){

return metabase.lib.order_by.order_by_clause.cljs$core$IFn$_invoke$arity$2(orderable,new cljs.core.Keyword(null,"asc","asc",356854569));
}));

(metabase.lib.order_by.order_by_clause.cljs$core$IFn$_invoke$arity$2 = (function (orderable,direction){

return metabase.lib.order_by.with_direction(metabase.lib.order_by.order_by_clause_method.cljs$core$IFn$_invoke$arity$1(orderable),(function (){var or__5045__auto__ = direction;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"asc","asc",356854569);
}
})());
}));

(metabase.lib.order_by.order_by_clause.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: ([query orderable]
 *         [query orderable direction]
 *         [query stage-number :- [:maybe :int] orderable :- some? direction :- [:maybe [:enum :asc :desc]]])
 *   Return: :any
 *        
 * 
 *   Add an MBQL order-by clause (i.e., `:asc` or `:desc`) from something that you can theoretically sort by -- maybe a
 *   Field, or `:field` clause, or expression of some sort, etc.
 * 
 *   You can teach Dashboard lib how to generate order by clauses for different things by implementing the
 *   underlying [[order-by-clause-method]] multimethod.
 */
metabase.lib.order_by.order_by = (function metabase$lib$order_by$order_by(var_args){
var G__80896 = arguments.length;
switch (G__80896) {
case 2:
return metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$2 = (function (query,orderable){

return metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$4(query,(-1),orderable,null);
}));

(metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$3 = (function (query,orderable,direction){

return metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$4(query,(-1),orderable,direction);
}));

(metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$4 = (function (query,stage_number,orderable,direction){

var stage_number__$1 = (function (){var or__5045__auto__ = stage_number;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-1);
}
})();
var new_order_by = (function (){var G__80907 = metabase.lib.order_by.order_by_clause_method.cljs$core$IFn$_invoke$arity$1(orderable);
if(cljs.core.truth_(direction)){
return metabase.lib.order_by.with_direction(G__80907,direction);
} else {
return G__80907;
}
})();
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number__$1,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"order-by","order-by",1527318070),(function (order_bys){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(order_bys),new_order_by);
})], 0));
}));

(metabase.lib.order_by.order_by.cljs$lang$maxFixedArity = 4);

/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential :metabase.lib.schema.order-by/order-by]]
 *        
 * 
 *   Get the order-by clauses in a query.
 */
metabase.lib.order_by.order_bys = (function metabase$lib$order_by$order_bys(var_args){
var G__80936 = arguments.length;
switch (G__80936) {
case 1:
return metabase.lib.order_by.order_bys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.order_by.order_bys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.order_by.order_bys.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.order_by.order_bys.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.order_by.order_bys.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.query_stage(query,stage_number),new cljs.core.Keyword(null,"order-by","order-by",1527318070)));
}));

(metabase.lib.order_by.order_bys.cljs$lang$maxFixedArity = 2);

metabase.lib.order_by.orderable_column_QMARK_ = (function metabase$lib$order_by$orderable_column_QMARK_(p__80941){
var map__80942 = p__80941;
var map__80942__$1 = cljs.core.__destructure_map(map__80942);
var _column_metadata = map__80942__$1;
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80942__$1,new cljs.core.Keyword(null,"base-type","base-type",1167971299));
return cljs.core.some((function (orderable_base_type){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(base_type,orderable_base_type);
}),metabase.lib.schema.expression.orderable_types);
});
/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:sequential lib.metadata/ColumnMetadata]
 *        
 * 
 *   Get column metadata for all the columns you can order by in a given `stage-number` of a `query`. Rules are as
 *   follows:
 * 
 *   1. If the stage has aggregations or breakouts, you can only order by those columns. E.g.
 * 
 *       SELECT id, count(*) AS count FROM core_user GROUP BY id ORDER BY count ASC;
 * 
 *   You can't ORDER BY something not in the SELECT, e.g. ORDER BY user.first_name would not make sense here.
 * 
 *   2. If the stage has no aggregations or breakouts, you can order by any visible Field:
 * 
 *   a. You can filter by any custom `:expressions` in this stage of the query
 * 
 *   b. You can filter by any Field 'exported' by the previous stage of the query, if there is one; otherwise you can
 *      filter by any Fields from the current `:source-table`.
 * 
 *   c. You can filter by any Fields exported by any explicit joins
 * 
 *   d. You can filter by and Fields in Tables that are implicitly joinable.
 */
metabase.lib.order_by.orderable_columns = (function metabase$lib$order_by$orderable_columns(var_args){
var G__80974 = arguments.length;
switch (G__80974) {
case 1:
return metabase.lib.order_by.orderable_columns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.order_by.orderable_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.order_by.orderable_columns.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.order_by.orderable_columns.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.order_by.orderable_columns.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

var indexed_order_bys = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (pos,p__80980){
var vec__80981 = p__80980;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80981,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80981,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80981,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,expr], null);
}),metabase.lib.order_by.order_bys.cljs$core$IFn$_invoke$arity$2(query,stage_number));
var order_by_pos = (function (x){
return cljs.core.some((function (p__80985){
var vec__80986 = p__80985;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80986,(0),null);
var existing_order_by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80986,(1),null);
var a_ref = metabase.lib.ref.ref(x);
if(cljs.core.truth_((function (){var or__5045__auto__ = metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(a_ref,existing_order_by);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(a_ref,metabase.lib.util.with_default_effective_type(existing_order_by));
}
})())){
return pos;
} else {
return null;
}
}),indexed_order_bys);
});
var breakouts = cljs.core.not_empty(metabase.lib.breakout.breakouts_metadata(query,stage_number));
var aggregations = cljs.core.not_empty(metabase.lib.aggregation.aggregations_metadata.cljs$core$IFn$_invoke$arity$2(query,stage_number));
var columns = (cljs.core.truth_((function (){var or__5045__auto__ = breakouts;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return aggregations;
}
})())?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(breakouts,aggregations):(function (){var stage = metabase.lib.util.query_stage(query,stage_number);
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
})());
var G__80999 = cljs.core.not_empty(columns);
if((G__80999 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(metabase.lib.order_by.orderable_column_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (col){
var pos = order_by_pos(col);
var G__81001 = col;
if(cljs.core.truth_(pos)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81001,new cljs.core.Keyword(null,"order-by-position","order-by-position",-1307229997),pos);
} else {
return G__81001;
}
}))),G__80999);
}
}));

(metabase.lib.order_by.orderable_columns.cljs$lang$maxFixedArity = 2);

metabase.lib.order_by.opposite_direction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"asc","asc",356854569)], null);
/**
 * Inputs: ([query :- :metabase.lib.schema/query current-order-by :- :metabase.lib.schema.order-by/order-by])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Flip the direction of `current-order-by` in `query`.
 */
metabase.lib.order_by.change_direction = (function metabase$lib$order_by$change_direction(query,current_order_by){

var lib_uuid = metabase.lib.options.uuid(current_order_by);
return (function metabase$lib$order_by$change_direction_$_replace_81014(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_1__81023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if((function (p1__81011_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(p1__81011_SHARP_),lib_uuid);
})(_AMPERSAND_match_1__81023)){
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(metabase.lib.order_by.opposite_direction.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.order_by.opposite_direction.cljs$core$IFn$_invoke$arity$1(direction) : metabase.lib.order_by.opposite_direction.call(null,direction)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e81026){if((e81026 instanceof Error)){
var e__62528__auto__ = e81026;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e81026;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e81025){if((e81025 instanceof Error)){
var e__62528__auto__ = e81025;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$lib$order_by$change_direction_$_replace_81014,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e81025;

}
}})(cljs.core.PersistentVector.EMPTY,query);
});
Object.defineProperty(module.exports, "opposite_direction", { enumerable: false, get: function() { return metabase.lib.order_by.opposite_direction; } });
Object.defineProperty(module.exports, "order_bys", { enumerable: false, get: function() { return metabase.lib.order_by.order_bys; } });
Object.defineProperty(module.exports, "order_by_clause_method", { enumerable: false, get: function() { return metabase.lib.order_by.order_by_clause_method; } });
Object.defineProperty(module.exports, "order_by_clause", { enumerable: false, get: function() { return metabase.lib.order_by.order_by_clause; } });
Object.defineProperty(module.exports, "orderable_columns", { enumerable: false, get: function() { return metabase.lib.order_by.orderable_columns; } });
Object.defineProperty(module.exports, "with_direction", { enumerable: false, get: function() { return metabase.lib.order_by.with_direction; } });
Object.defineProperty(module.exports, "orderable_column_QMARK_", { enumerable: false, get: function() { return metabase.lib.order_by.orderable_column_QMARK_; } });
Object.defineProperty(module.exports, "change_direction", { enumerable: false, get: function() { return metabase.lib.order_by.change_direction; } });
Object.defineProperty(module.exports, "order_by", { enumerable: false, get: function() { return metabase.lib.order_by.order_by; } });
//# sourceMappingURL=metabase.lib.order_by.js.map
