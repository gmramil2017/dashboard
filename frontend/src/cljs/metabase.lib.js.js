var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.core.js");
require("./metabase.lib.join.js");
require("./metabase.lib.js.metadata.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.protocols.js");
require("./metabase.lib.stage.js");
require("./metabase.mbql.js.js");
require("./metabase.mbql.normalize.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.js.js");

goog.provide('metabase.lib.js');
/**
 * Extract the template tags from a native query's text.
 * 
 *   If the optional map of existing tags previously parsed is given, this will reuse the existing tags where
 *   they match up with the new one (in particular, it will preserve the UUIDs).
 * 
 *   Given the text of a native query, extract a possibly-empty set of template tag strings from it.
 * 
 *   These look like mustache templates. For variables, we only allow alphanumeric characters, eg. `{{foo}}`.
 *   For snippets they start with `snippet:`, eg. `{{ snippet: arbitrary text here }}`.
 *   And for card references either `{{ #123 }}` or with the optional human label `{{ #123-card-title-slug }}`.
 * 
 *   Invalid patterns are simply ignored, so something like `{{&foo!}}` is just disregarded.
 */
metabase.lib.js.extract_template_tags = (function metabase$lib$js$extract_template_tags(var_args){
var G__81909 = arguments.length;
switch (G__81909) {
case 1:
return metabase.lib.js.extract_template_tags.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.js.extract_template_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.extract_template_tags', metabase.lib.js.extract_template_tags);

(metabase.lib.js.extract_template_tags.cljs$core$IFn$_invoke$arity$1 = (function (query_text){
return metabase.lib.js.extract_template_tags.cljs$core$IFn$_invoke$arity$2(query_text,cljs.core.PersistentArrayMap.EMPTY);
}));

(metabase.lib.js.extract_template_tags.cljs$core$IFn$_invoke$arity$2 = (function (query_text,existing_tags){
return metabase.lib.core.TemplateTags__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.core.extract_template_tags.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_text,metabase.lib.core.__GT_TemplateTags.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([existing_tags], 0))], 0))], 0));
}));

(metabase.lib.js.extract_template_tags.cljs$lang$maxFixedArity = 2);

/**
 * Return a nice description of a query.
 */
metabase.lib.js.suggestedName = (function metabase$lib$js$suggestedName(query){
return metabase.lib.core.suggested_name.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query], 0));
});
metabase.lib.js.pMBQL = (function metabase$lib$js$pMBQL(query_map){
var _LT__GT_ = query_map;
var _LT__GT___$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(_LT__GT_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var _LT__GT___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(_LT__GT___$1))?_LT__GT___$1:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_LT__GT___$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510)));
var _LT__GT___$3 = metabase.mbql.normalize.normalize(_LT__GT___$2);
return metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(_LT__GT___$3);
});
/**
 * Convert metadata to a metadata provider if it is not one already.
 */
metabase.lib.js.metadataProvider = (function metabase$lib$js$metadataProvider(database_id,metadata){
if(metabase.lib.metadata.protocols.metadata_provider_QMARK_(metadata)){
return metadata;
} else {
return metabase.lib.js.metadata.metadata_provider(database_id,metadata);
}
});
/**
 * Coerce a plain map `query` to an actual query object that you can use with MLv2.
 */
metabase.lib.js.query = (function metabase$lib$js$query(database_id,metadata,query_map){
var query_map__$1 = metabase.lib.js.pMBQL(query_map);
var level__47393__auto___82130 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"debug","debug",-1608172596));
var logger__47394__auto___82131 = "metabase.lib.js";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47394__auto___82131,level__47393__auto___82130))){
var x__47395__auto___82132 = "query map: %s";
if((x__47395__auto___82132 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47394__auto___82131,level__47393__auto___82130,metabase.util.log.format_msg(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_map__$1], 0))),x__47395__auto___82132);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47394__auto___82131,level__47393__auto___82130,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__47395__auto___82132,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_map__$1], 0))], 0)),null);
}
} else {
}

return metabase.lib.core.query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.js.metadataProvider(database_id,metadata),query_map__$1], 0));
});
/**
 * This converts namespaced keywords to strings as `"foo/bar"`.
 * 
 *   `clj->js` supports overriding how keyword map keys get transformed, but it doesn't let you override how values are
 *   handled. So this function runs first and turns them into strings.
 * 
 *   As an example of such a value, `(get-in card [:template-tags "some-tag" :widget-type])` can be `:date/all-options`.
 */
metabase.lib.js.fix_namespaced_values = (function metabase$lib$js$fix_namespaced_values(x){
if(cljs.core.qualified_keyword_QMARK_(x)){
return [cljs.core.namespace(x),"/",cljs.core.name(x)].join('');
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.update_vals(x,metabase.lib.js.fix_namespaced_values);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.js.fix_namespaced_values,x);
} else {
return x;

}
}
}
});
/**
 * Coerce a CLJS pMBQL query back to (1) a legacy query (2) in vanilla JS.
 */
metabase.lib.js.legacy_query = (function metabase$lib$js$legacy_query(query_map){
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.js.fix_namespaced_values(metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(query_map)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),metabase.util.qualified_name], 0));
});
/**
 * Adds a new blank stage to the end of the pipeline
 */
metabase.lib.js.append_stage = (function metabase$lib$js$append_stage(a_query){
return metabase.lib.core.append_stage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
});
/**
 * Drops the final stage in the pipeline
 */
metabase.lib.js.drop_stage = (function metabase$lib$js$drop_stage(a_query){
return metabase.lib.core.drop_stage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
});
/**
 * Return a sequence of Column metadatas about the columns you can add order bys for in a given stage of `a-query.` To
 *   add an order by, pass the result to [[order-by]].
 */
metabase.lib.js.orderable_columns = (function metabase$lib$js$orderable_columns(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.orderable_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Given an opaque Cljs object, return a plain JS object with info you'd need to implement UI for it.
 *   See `:metabase.lib.metadata.calculation/display-info` for the keys this might contain. Note that the JS versions of
 *   the keys are converted to the equivalent `camelCase` strings from the original `:kebab-case`.
 */
metabase.lib.js.display_info = (function metabase$lib$js$display_info(a_query,stage_number,x){
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update_keys(metabase.lib.core.display_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.stage.ensure_previous_stages_have_metadata(a_query,stage_number),stage_number,x], 0)),metabase.util.__GT_camelCaseEn),new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.update_keys,metabase.util.__GT_camelCaseEn),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),metabase.util.qualified_name], 0));
});
/**
 * Create an order-by clause independently of a query, e.g. for `replace` or whatever.
 */
metabase.lib.js.order_by_clause = (function metabase$lib$js$order_by_clause(var_args){
var G__82031 = arguments.length;
switch (G__82031) {
case 1:
return metabase.lib.js.order_by_clause.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.js.order_by_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.order_by_clause', metabase.lib.js.order_by_clause);

(metabase.lib.js.order_by_clause.cljs$core$IFn$_invoke$arity$1 = (function (orderable){
return metabase.lib.js.order_by_clause.cljs$core$IFn$_invoke$arity$2(orderable,new cljs.core.Keyword(null,"asc","asc",356854569));
}));

(metabase.lib.js.order_by_clause.cljs$core$IFn$_invoke$arity$2 = (function (orderable,direction){
return metabase.lib.core.order_by_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(orderable,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(direction)], 0));
}));

(metabase.lib.js.order_by_clause.cljs$lang$maxFixedArity = 2);

/**
 * Add an `order-by` clause to `a-query`. Returns updated query.
 */
metabase.lib.js.order_by = (function metabase$lib$js$order_by(a_query,stage_number,orderable,direction){
return metabase.lib.core.order_by.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,orderable,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(direction)], 0));
});
/**
 * Get the order-by clauses (as an array of opaque objects) in `a-query` at a given `stage-number`.
 *   Returns an empty array if there are no order bys in the query.
 */
metabase.lib.js.order_bys = (function metabase$lib$js$order_bys(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.order_bys.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Flip the direction of `current-order-by` in `a-query`.
 */
metabase.lib.js.change_direction = (function metabase$lib$js$change_direction(a_query,current_order_by){
return metabase.lib.core.change_direction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,current_order_by], 0));
});
/**
 * Return an array of Column metadatas about the columns that can be broken out by in a given stage of `a-query.`
 *   To break out by a given column, the corresponding element of the result has to be added to the query using
 *   [[breakout]].
 */
metabase.lib.js.breakoutable_columns = (function metabase$lib$js$breakoutable_columns(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.breakoutable_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Get the breakout clauses (as an array of opaque objects) in `a-query` at a given `stage-number`.
 *   Returns an empty array if there are no order bys in the query.
 */
metabase.lib.js.breakouts = (function metabase$lib$js$breakouts(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.breakouts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Add an `order-by` clause to `a-query`. Returns updated query.
 */
metabase.lib.js.breakout = (function metabase$lib$js$breakout(a_query,stage_number,x){
return metabase.lib.core.breakout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,metabase.lib.core.ref.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))], 0));
});
/**
 * Retrieve the current binning state of a `:field` clause, field metadata, etc. as an opaque object, or `nil` if it
 *   does not have binning options set.
 */
metabase.lib.js.binning = (function metabase$lib$js$binning(x){
return metabase.lib.core.binning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
});
/**
 * Given `x` (a field reference) and a `binning` value, return a new `:field` clause with its `:binning` options set.
 * 
 *   If `binning` is `nil`, removes any `:binning` options currently present.
 * 
 *   `binning` can be one of the opaque values returned by [[available-binning-strategies]], or a literal
 *   [[metabase.lib.schema.binning/binning]] value.
 */
metabase.lib.js.with_binning = (function metabase$lib$js$with_binning(x,binning_option){
return metabase.lib.core.with_binning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,binning_option], 0));
});
/**
 * Get a list of available binning strategies for `x` (a field reference, generally) in the context of `a-query` and
 *   optionally `stage-number`. The returned list contains opaque objects which should be passed to [[display-info]].
 */
metabase.lib.js.available_binning_strategies = (function metabase$lib$js$available_binning_strategies(var_args){
var G__82053 = arguments.length;
switch (G__82053) {
case 2:
return metabase.lib.js.available_binning_strategies.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.js.available_binning_strategies.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.available_binning_strategies', metabase.lib.js.available_binning_strategies);

(metabase.lib.js.available_binning_strategies.cljs$core$IFn$_invoke$arity$2 = (function (a_query,x){
return cljs.core.to_array(metabase.lib.core.available_binning_strategies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,x], 0)));
}));

(metabase.lib.js.available_binning_strategies.cljs$core$IFn$_invoke$arity$3 = (function (a_query,stage_number,x){
return cljs.core.to_array(metabase.lib.core.available_binning_strategies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,x], 0)));
}));

(metabase.lib.js.available_binning_strategies.cljs$lang$maxFixedArity = 3);

/**
 * Get the current temporal bucketing options associated with something, if any.
 */
metabase.lib.js.temporal_bucket = (function metabase$lib$js$temporal_bucket(x){
return metabase.lib.core.temporal_bucket.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
});
/**
 * Add a temporal bucketing option to an MBQL clause (or something that can be converted to an MBQL clause).
 */
metabase.lib.js.with_temporal_bucket = (function metabase$lib$js$with_temporal_bucket(x,bucketing_option){
return metabase.lib.core.with_temporal_bucket.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,bucketing_option], 0));
});
/**
 * Get a list of available temporal bucketing options for `x` (a field reference, generally) in the context of `a-query`
 *   and optionally `stage-number`. The returned list contains opaque objects which should be passed to [[display-info]].
 */
metabase.lib.js.available_temporal_buckets = (function metabase$lib$js$available_temporal_buckets(var_args){
var G__82069 = arguments.length;
switch (G__82069) {
case 2:
return metabase.lib.js.available_temporal_buckets.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.js.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.available_temporal_buckets', metabase.lib.js.available_temporal_buckets);

(metabase.lib.js.available_temporal_buckets.cljs$core$IFn$_invoke$arity$2 = (function (a_query,x){
return cljs.core.to_array(metabase.lib.core.available_temporal_buckets.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,x], 0)));
}));

(metabase.lib.js.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3 = (function (a_query,stage_number,x){
return cljs.core.to_array(metabase.lib.core.available_temporal_buckets.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,x], 0)));
}));

(metabase.lib.js.available_temporal_buckets.cljs$lang$maxFixedArity = 3);

/**
 * Removes the `target-clause` in the filter of the `query`.
 */
metabase.lib.js.remove_clause = (function metabase$lib$js$remove_clause(a_query,stage_number,clause){
return metabase.lib.core.remove_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0))], 0));
});
/**
 * Replaces the `target-clause` with `new-clause` in the `query` stage.
 */
metabase.lib.js.replace_clause = (function metabase$lib$js$replace_clause(a_query,stage_number,target_clause,new_clause){
return metabase.lib.core.replace_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(target_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0)),metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(new_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0))], 0));
});
metabase.lib.js.prep_query_for_equals = (function metabase$lib$js$prep_query_for_equals(a_query,field_ids){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(metabase.mbql.js.normalize_cljs(a_query),new cljs.core.Keyword(null,"native","native",-613060878),(function (p1__82074_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),cljs.core.PersistentArrayMap.EMPTY], null),p1__82074_SHARP_], 0));
})),new cljs.core.Keyword(null,"query","query",-1288509510),(function (inner_query){
var fields = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(inner_query);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var iter__5523__auto__ = (function metabase$lib$js$prep_query_for_equals_$_iter__82078(s__82079){
return (new cljs.core.LazySeq(null,(function (){
var s__82079__$1 = s__82079;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__82079__$1);
if(temp__5804__auto__){
var s__82079__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82079__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__82079__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__82081 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__82080 = (0);
while(true){
if((i__82080 < size__5522__auto__)){
var id = cljs.core._nth(c__5521__auto__,i__82080);
cljs.core.chunk_append(b__82081,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id,null], null));

var G__82136 = (i__82080 + (1));
i__82080 = G__82136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82081),metabase$lib$js$prep_query_for_equals_$_iter__82078(cljs.core.chunk_rest(s__82079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82081),null);
}
} else {
var id = cljs.core.first(s__82079__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id,null], null),metabase$lib$js$prep_query_for_equals_$_iter__82078(cljs.core.rest(s__82079__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(field_ids);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inner_query,new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.frequencies(fields));
}));
});
/**
 * Returns whether the provided queries should be considered equal.
 * 
 *   If `field-ids` is specified, an input MBQL query without `:fields` set defaults to the `field-ids`.
 * 
 *   Currently this works only for legacy queries in JS form!
 *   It duplicates the logic formerly found in `query_builder/selectors.js`.
 * 
 *   TODO: This should evolve into a more robust, pMBQL-based sense of equality over time.
 *   For now it pulls logic that touches query internals into `metabase.lib`.
 */
metabase.lib.js.query_EQ_ = (function metabase$lib$js$query_EQ_(var_args){
var G__82089 = arguments.length;
switch (G__82089) {
case 2:
return metabase.lib.js.query_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.js.query_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.query_EQ_', metabase.lib.js.query_EQ_);

(metabase.lib.js.query_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (query1,query2){
return metabase.lib.js.query_EQ_.cljs$core$IFn$_invoke$arity$3(query1,query2,null);
}));

(metabase.lib.js.query_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (query1,query2,field_ids){
var n1 = metabase.lib.js.prep_query_for_equals(query1,field_ids);
var n2 = metabase.lib.js.prep_query_for_equals(query2,field_ids);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n1,n2);
}));

(metabase.lib.js.query_EQ_.cljs$lang$maxFixedArity = 3);

/**
 * Given a group of columns returned by a function like [[metabase.lib.js/orderable-columns]], group the columns
 *   by Table or equivalent (e.g. Saved Question) so that they're in an appropriate shape for showing in the Query
 *   Builder. e.g a sequence of columns like
 * 
 *  [venues.id
 *   venues.name
 *   venues.category-id
 *   ;; implicitly joinable
 *   categories.id
 *   categories.name]
 * 
 *   would get grouped into groups like
 * 
 *  [{::columns [venues.id
 *               venues.name
 *               venues.category-id]}
 *   {::columns [categories.id
 *               categories.name]}]
 * 
 *   Groups have the type `:metadata/column-group` and can be passed directly
 *   to [[metabase.lib.js/display-info]].
 *   Use [[metabase.lib.js/columns-group-columns]] to extract the columns from a group.
 */
metabase.lib.js.group_columns = (function metabase$lib$js$group_columns(column_metadatas){
return cljs.core.to_array(metabase.lib.core.group_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_metadatas], 0)));
});
/**
 * Get the columns associated with a column group
 */
metabase.lib.js.columns_group_columns = (function metabase$lib$js$columns_group_columns(column_group){
return cljs.core.to_array(metabase.lib.core.columns_group_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_group], 0)));
});
/**
 * Get a translated description of a temporal bucketing unit.
 */
metabase.lib.js.describe_temporal_unit = (function metabase$lib$js$describe_temporal_unit(n,unit){
var unit__$1 = ((typeof unit === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit):unit);
return metabase.lib.core.describe_temporal_unit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,unit__$1], 0));
});
/**
 * Get a translated description of a temporal bucketing interval.
 */
metabase.lib.js.describe_temporal_interval = (function metabase$lib$js$describe_temporal_interval(n,unit){
var n__$1 = ((typeof n === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(n):n);
var unit__$1 = ((typeof unit === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit):unit);
return metabase.lib.core.describe_temporal_interval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,unit__$1], 0));
});
/**
 * Get a translated description of a relative datetime interval.
 */
metabase.lib.js.describe_relative_datetime = (function metabase$lib$js$describe_relative_datetime(n,unit){
var n__$1 = ((typeof n === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(n):n);
var unit__$1 = ((typeof unit === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit):unit);
return metabase.lib.core.describe_relative_datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,unit__$1], 0));
});
/**
 * Adds an aggregation to query.
 */
metabase.lib.js.aggregate = (function metabase$lib$js$aggregate(a_query,stage_number,an_aggregate_clause){
return metabase.lib.core.aggregate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(an_aggregate_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0));
});
/**
 * Get the aggregations in a given stage of a query.
 */
metabase.lib.js.aggregations = (function metabase$lib$js$aggregations(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.aggregations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Returns a standalone aggregation clause for an `aggregation-operator` and
 * a `column`.
 * For aggregations requiring an argument `column` is mandatory, otherwise
 * it is optional.
 */
metabase.lib.js.aggregation_clause = (function metabase$lib$js$aggregation_clause(var_args){
var G__82099 = arguments.length;
switch (G__82099) {
case 1:
return metabase.lib.js.aggregation_clause.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.js.aggregation_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.aggregation_clause', metabase.lib.js.aggregation_clause);

(metabase.lib.js.aggregation_clause.cljs$core$IFn$_invoke$arity$1 = (function (aggregation_operator){
return metabase.lib.core.aggregation_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aggregation_operator], 0));
}));

(metabase.lib.js.aggregation_clause.cljs$core$IFn$_invoke$arity$2 = (function (aggregation_operator,column){
return metabase.lib.core.aggregation_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aggregation_operator,column], 0));
}));

(metabase.lib.js.aggregation_clause.cljs$lang$maxFixedArity = 2);

/**
 * Get the available aggregation operators for the stage with `stage-number` of
 *   the query `a-query`.
 *   If `stage-number` is omitted, the last stage is used.
 */
metabase.lib.js.available_aggregation_operators = (function metabase$lib$js$available_aggregation_operators(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.available_aggregation_operators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Get the columns `aggregation-operator` can be applied to.
 *   The columns are valid for the stage of the query that was used in
 *   [[available-binning-strategies]] to get `available-aggregation`.
 */
metabase.lib.js.aggregation_operator_columns = (function metabase$lib$js$aggregation_operator_columns(aggregation_operator){
return cljs.core.to_array(metabase.lib.core.aggregation_operator_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aggregation_operator], 0)));
});
/**
 * Mark the operator and the column (if any) in `agg-operators` selected by `agg-clause`.
 */
metabase.lib.js.selected_aggregation_operators = (function metabase$lib$js$selected_aggregation_operators(agg_operators,agg_clause){
return cljs.core.to_array(metabase.lib.core.selected_aggregation_operators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(agg_operators),agg_clause], 0)));
});
/**
 * Get the available filterable columns for the stage with `stage-number` of the query `a-query`.
 */
metabase.lib.js.filterable_columns = (function metabase$lib$js$filterable_columns(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.filterable_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Returns the operators for which `filterable-column` is applicable.
 */
metabase.lib.js.filterable_column_operators = (function metabase$lib$js$filterable_column_operators(filterable_column){
return cljs.core.to_array(metabase.lib.core.filterable_column_operators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([filterable_column], 0)));
});
/**
 * Returns a standalone filter clause for a `filter-operator`,
 *   a `column`, and arguments.
 */
metabase.lib.js.filter_clause = (function metabase$lib$js$filter_clause(var_args){
var args__5775__auto__ = [];
var len__5769__auto___82139 = arguments.length;
var i__5770__auto___82140 = (0);
while(true){
if((i__5770__auto___82140 < len__5769__auto___82139)){
args__5775__auto__.push((arguments[i__5770__auto___82140]));

var G__82141 = (i__5770__auto___82140 + (1));
i__5770__auto___82140 = G__82141;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.js.filter_clause.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});
goog.exportSymbol('metabase.lib.js.filter_clause', metabase.lib.js.filter_clause);

(metabase.lib.js.filter_clause.cljs$core$IFn$_invoke$arity$variadic = (function (filter_operator,column,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(metabase.lib.core.filter_clause,filter_operator,column,args);
}));

(metabase.lib.js.filter_clause.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.js.filter_clause.cljs$lang$applyTo = (function (seq82113){
var G__82114 = cljs.core.first(seq82113);
var seq82113__$1 = cljs.core.next(seq82113);
var G__82115 = cljs.core.first(seq82113__$1);
var seq82113__$2 = cljs.core.next(seq82113__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82114,G__82115,seq82113__$2);
}));

/**
 * Returns the filter operator of `filter-clause`.
 */
metabase.lib.js.filter_operator = (function metabase$lib$js$filter_operator(a_query,stage_number,a_filter_clause){
return metabase.lib.core.filter_operator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,a_filter_clause], 0));
});
/**
 * Sets `boolean-expression` as a filter on `query`.
 */
metabase.lib.js.filter = (function metabase$lib$js$filter(a_query,stage_number,boolean_expression){
return metabase.lib.core.filter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(boolean_expression,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0));
});
/**
 * Returns the current filters in stage with `stage-number` of `query`.
 *   Logicaly, the filter attached to the query is the conjunction of the expressions
 *   in the returned list. If the returned list is empty, then there is no filter
 *   attached to the query.
 */
metabase.lib.js.filters = (function metabase$lib$js$filters(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.filters.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Get the current `:fields` in a query. Unlike the lib core version, this will return an empty sequence if `:fields` is
 *   not specified rather than `nil` for JS-friendliness.
 */
metabase.lib.js.fields = (function metabase$lib$js$fields(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.fields.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Specify the `:fields` for a query. Pass an empty sequence or `nil` to remove `:fields`.
 */
metabase.lib.js.with_fields = (function metabase$lib$js$with_fields(a_query,stage_number,new_fields){
return metabase.lib.core.with_fields.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,new_fields], 0));
});
/**
 * Return a sequence of column metadatas for columns that you can specify in the `:fields` of a query.
 */
metabase.lib.js.fieldable_columns = (function metabase$lib$js$fieldable_columns(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.fieldable_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Get the strategy (type) of a given join as an opaque JoinStrategy object.
 */
metabase.lib.js.join_strategy = (function metabase$lib$js$join_strategy(a_join){
return metabase.lib.core.join_strategy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join], 0));
});
/**
 * Return a copy of `a-join` with its `:strategy` set to an opaque JoinStrategy.
 */
metabase.lib.js.with_join_strategy = (function metabase$lib$js$with_join_strategy(a_join,strategy){
return metabase.lib.core.with_join_strategy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join,strategy], 0));
});
/**
 * Get available join strategies for the current Database (based on the Database's
 *   supported [[metabase.driver/driver-features]]) as opaque JoinStrategy objects.
 */
metabase.lib.js.available_join_strategies = (function metabase$lib$js$available_join_strategies(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.available_join_strategies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Get a sequence of columns that can be used as the left-hand-side (source column) in a join condition. This column
 *   is the one that comes from the source Table/Card/previous stage of the query or a previous join.
 * 
 *   If you are changing the LHS of a condition for an existing join, pass in that existing join as
 *   `existing-join-or-nil` so we can filter out the columns added by it (it doesn't make sense to present the columns
 *   added by a join as options for its own LHS). Otherwise pass `nil` when building a new join. See #32005 for more
 *   info.
 * 
 *   If the right-hand-side column has already been chosen (they can be chosen in any order in the Query Builder UI),
 *   pass in the chosen RHS column. In the future, this may be used to restrict results to compatible columns. (See #31174)
 * 
 *   Results will be returned in a 'somewhat smart' order with PKs and FKs returned before other columns.
 * 
 *   Unlike most other things that return columns, implicitly-joinable columns ARE NOT returned here.
 */
metabase.lib.js.join_condition_lhs_columns = (function metabase$lib$js$join_condition_lhs_columns(a_query,stage_number,existing_join_or_nil,rhs_column_or_nil){
return cljs.core.to_array(metabase.lib.core.join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,existing_join_or_nil,rhs_column_or_nil], 0)));
});
/**
 * Get a sequence of columns that can be used as the right-hand-side (target column) in a join condition. This column
 *   is the one that belongs to the thing being joined, `joinable`, which can be something like a
 *   Table ([[metabase.lib.metadata/TableMetadata]]), Saved Question/Model ([[metabase.lib.metadata/CardMetadata]]),
 *   another query, etc. -- anything you can pass to [[join-clause]].
 * 
 *   If the lhs-hand-side column has already been chosen (they can be chosen in any order in the Query Builder UI),
 *   pass in the chosen LHS column. In the future, this may be used to restrict results to compatible columns. (See #31174)
 * 
 *   Results will be returned in a 'somewhat smart' order with PKs and FKs returned before other columns.
 */
metabase.lib.js.join_condition_rhs_columns = (function metabase$lib$js$join_condition_rhs_columns(a_query,stage_number,joinable,lhs_column_or_nil){
return cljs.core.to_array(metabase.lib.core.join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,joinable,lhs_column_or_nil], 0)));
});
/**
 * Return a sequence of valid filter clause operators that can be used to build a join condition. In the Query Builder
 *   UI, this can be chosen at any point before or after choosing the LHS and RHS. Invalid options are not currently
 *   filtered out based on values of the LHS or RHS, but in the future we can add this -- see #31174.
 */
metabase.lib.js.join_condition_operators = (function metabase$lib$js$join_condition_operators(a_query,stage_number,lhs_column_or_nil,rhs_column_or_nil){
return cljs.core.to_array(metabase.lib.core.join_condition_operators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,lhs_column_or_nil,rhs_column_or_nil], 0)));
});
/**
 * Adds an expression to query.
 */
metabase.lib.js.expression = (function metabase$lib$js$expression(a_query,stage_number,expression_name,an_expression_clause){
return metabase.lib.core.expression.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,expression_name,an_expression_clause], 0));
});
/**
 * Get the expressions map from a given stage of a `query`.
 */
metabase.lib.js.expressions = (function metabase$lib$js$expressions(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.expressions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Return an array of Column metadatas about the columns that can be used in an expression in a given stage of `a-query`.
 * Pass the current `expression-position` or `null` for new expressions.
 */
metabase.lib.js.expressionable_columns = (function metabase$lib$js$expressionable_columns(var_args){
var G__82120 = arguments.length;
switch (G__82120) {
case 2:
return metabase.lib.js.expressionable_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.js.expressionable_columns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.expressionable_columns', metabase.lib.js.expressionable_columns);

(metabase.lib.js.expressionable_columns.cljs$core$IFn$_invoke$arity$2 = (function (a_query,expression_position){
return metabase.lib.js.expressionable_columns.cljs$core$IFn$_invoke$arity$2(a_query,expression_position);
}));

(metabase.lib.js.expressionable_columns.cljs$core$IFn$_invoke$arity$3 = (function (a_query,stage_number,expression_position){
return cljs.core.to_array(metabase.lib.core.expressionable_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,expression_position], 0)));
}));

(metabase.lib.js.expressionable_columns.cljs$lang$maxFixedArity = 3);

/**
 * Return a suggested default join condition when constructing a join against `joinable`, e.g. a Table, Saved
 *   Question, or another query. A suggested condition will be returned if the source Table has a foreign key to the
 *   primary key of the thing we're joining (see #31175 for more info); otherwise this will return `nil` if no default
 *   condition is suggested.
 */
metabase.lib.js.suggested_join_condition = (function metabase$lib$js$suggested_join_condition(a_query,stage_number,joinable){
return metabase.lib.core.suggested_join_condition.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,joinable], 0));
});
/**
 * Get the `:fields` associated with a join.
 */
metabase.lib.js.join_fields = (function metabase$lib$js$join_fields(a_join){
var joined_fields = metabase.lib.core.join_fields.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join], 0));
if((joined_fields instanceof cljs.core.Keyword)){
return metabase.util.qualified_name(joined_fields);
} else {
return cljs.core.to_array(joined_fields);
}
});
/**
 * Set the `:fields` for `a-join`.
 */
metabase.lib.js.with_join_fields = (function metabase$lib$js$with_join_fields(a_join,new_fields){
return metabase.lib.core.with_join_fields.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join,(function (){var G__82124 = new_fields;
if(typeof new_fields === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__82124);
} else {
return G__82124;
}
})()], 0));
});
/**
 * Create a join clause (an `:mbql/join` map) against something `joinable` (Table metadata, a Saved Question, another
 *   query, etc.) with `conditions`, which should be an array of filter clauses. You can then manipulate this join clause
 *   with stuff like [[with-join-fields]], or add it to a query with [[join]].
 */
metabase.lib.js.join_clause = (function metabase$lib$js$join_clause(joinable,conditions){
return metabase.lib.core.join_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([joinable,conditions], 0));
});
/**
 * Add a join clause (as created by [[join-clause]]) to a stage of a query.
 */
metabase.lib.js.join = (function metabase$lib$js$join(a_query,stage_number,a_join){
return metabase.lib.core.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,a_join], 0));
});
/**
 * Get the conditions (filter clauses) associated with a join.
 */
metabase.lib.js.join_conditions = (function metabase$lib$js$join_conditions(a_join){
return cljs.core.to_array(metabase.lib.core.join_conditions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join], 0)));
});
/**
 * Set the `:conditions` (filter clauses) for a join.
 */
metabase.lib.js.with_join_conditions = (function metabase$lib$js$with_join_conditions(a_join,conditions){
return metabase.lib.core.with_join_conditions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(conditions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0));
});
/**
 * Get the joins associated with a particular query stage.
 */
metabase.lib.js.joins = (function metabase$lib$js$joins(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.joins.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Rename the join specified by `join-spec` in `a-query` at `stage-number` to `new-name`.
 *   The join can be specified either by itself (as returned by [[joins]]), by its alias
 *   or by its index in the list of joins as returned by [[joins]].
 *   If the specified join cannot be found, then `query` is returned as is.
 *   If renaming the join to `new-name` would clash with an existing join, a
 *   suffix is appended to `new-name` to make it unique.
 */
metabase.lib.js.rename_join = (function metabase$lib$js$rename_join(a_query,stage_number,join_spec,new_name){
return metabase.lib.core.rename_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,join_spec,new_name], 0));
});
/**
 * Remove the join specified by `join-spec` in `a-query` at `stage-number`.
 *   The join can be specified either by itself (as returned by [[joins]]), by its alias
 *   or by its index in the list of joins as returned by [[joins]].
 *   If the specified join cannot be found, then `a-query` is returned as is.
 *   Top level clauses containing references to the removed join are removed too.
 */
metabase.lib.js.remove_join = (function metabase$lib$js$remove_join(a_query,stage_number,join_spec){
return metabase.lib.core.remove_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,join_spec], 0));
});
/**
 * Return metadata about the origin of `join` using `metadata-providerable` as the source of information.
 */
metabase.lib.js.joined_thing = (function metabase$lib$js$joined_thing(a_query,a_join){
return metabase.lib.join.joined_thing(a_query,a_join);
});
/**
 * Temporary solution providing access to internal IDs for the FE to pass on to MLv1 functions.
 */
metabase.lib.js.picker_info = (function metabase$lib$js$picker_info(a_query,metadata){
var G__82125 = new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metadata);
var G__82125__$1 = (((G__82125 instanceof cljs.core.Keyword))?G__82125.fqn:null);
switch (G__82125__$1) {
case "metadata/table":
return ({"databaseId": new cljs.core.Keyword(null,"database","database",1849087575).cljs$core$IFn$_invoke$arity$1(a_query), "tableId": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metadata)});

break;
case "metadata/card":
return ({"databaseId": new cljs.core.Keyword(null,"database","database",1849087575).cljs$core$IFn$_invoke$arity$1(a_query), "tableId": ["card__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metadata))].join(''), "cardId": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metadata), "isModel": new cljs.core.Keyword(null,"dataset","dataset",1159262238).cljs$core$IFn$_invoke$arity$1(metadata)});

break;
default:
var level__47389__auto___82144 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__47390__auto___82145 = "metabase.lib.js";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47390__auto___82145,level__47389__auto___82144))){
var x__47391__auto___82146 = "Cannot provide picker-info for";
if((x__47391__auto___82146 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47390__auto___82145,level__47389__auto___82144,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metadata)], 0)),x__47391__auto___82146);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47390__auto___82145,level__47389__auto___82144,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__47391__auto___82146,new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metadata)], 0)),null);
}
} else {
}

return null;

}
});
/**
 * Convert the internal operator `clause` to the external format.
 */
metabase.lib.js.external_op = (function metabase$lib$js$external_op(clause){
var map__82126 = metabase.lib.core.external_op.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0));
var map__82126__$1 = cljs.core.__destructure_map(map__82126);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82126__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82126__$1,new cljs.core.Keyword(null,"options","options",99638489));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82126__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return ({"operator": operator, "options": cljs.core.clj__GT_js(options), "args": cljs.core.to_array(args)});
});
/**
 * Create a new native query.
 * 
 *   Native in this sense means a pMBQL query with a first stage that is a native query.
 */
metabase.lib.js.native_query = (function metabase$lib$js$native_query(database_id,metadata,inner_query){
return metabase.lib.core.native_query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.js.metadataProvider(database_id,metadata),inner_query], 0));
});
/**
 * Update the raw native query, the first stage must already be a native type.
 * Replaces templates tags
 */
metabase.lib.js.with_native_query = (function metabase$lib$js$with_native_query(a_query,inner_query){
return metabase.lib.core.with_native_query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,inner_query], 0));
});
/**
 * Updates the native query's template tags.
 */
metabase.lib.js.with_template_tags = (function metabase$lib$js$with_template_tags(a_query,tags){
return metabase.lib.core.with_template_tags.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,metabase.lib.core.__GT_TemplateTags.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tags], 0))], 0));
});
/**
 * Returns the native query string
 */
metabase.lib.js.raw_native_query = (function metabase$lib$js$raw_native_query(a_query){
return metabase.lib.core.raw_native_query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
});
/**
 * Returns the native query's template tags
 */
metabase.lib.js.template_tags = (function metabase$lib$js$template_tags(a_query){
return metabase.lib.core.TemplateTags__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.core.template_tags.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0))], 0));
});
/**
 * Returns whether the extra keys required by the database.
 */
metabase.lib.js.required_native_extras = (function metabase$lib$js$required_native_extras(database_id,metadata){
return cljs.core.to_array(metabase.lib.core.required_native_extras.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.js.metadataProvider(database_id,metadata)], 0)));
});
/**
 * Changes the database for this query. The first stage must be a native type.
 * Native extras must be provided if the new database requires it.
 */
metabase.lib.js.with_different_database = (function metabase$lib$js$with_different_database(var_args){
var G__82128 = arguments.length;
switch (G__82128) {
case 3:
return metabase.lib.js.with_different_database.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.js.with_different_database.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.with_different_database', metabase.lib.js.with_different_database);

(metabase.lib.js.with_different_database.cljs$core$IFn$_invoke$arity$3 = (function (a_query,database_id,metadata){
return metabase.lib.js.with_different_database.cljs$core$IFn$_invoke$arity$4(a_query,database_id,metadata,null);
}));

(metabase.lib.js.with_different_database.cljs$core$IFn$_invoke$arity$4 = (function (a_query,database_id,metadata,native_extras){
return metabase.lib.core.with_different_database.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,metabase.lib.js.metadataProvider(database_id,metadata),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(native_extras,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0));
}));

(metabase.lib.js.with_different_database.cljs$lang$maxFixedArity = 4);

/**
 * Updates the extras required for the db to run this query.
 * The first stage must be a native type. Will ignore extras not in `required-native-extras`
 */
metabase.lib.js.with_native_extras = (function metabase$lib$js$with_native_extras(a_query,native_extras){
return metabase.lib.core.with_native_extras.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(native_extras,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0));
});
/**
 * Returns the extra keys for native queries associated with this query.
 */
metabase.lib.js.native_extras = (function metabase$lib$js$native_extras(a_query){
return cljs.core.clj__GT_js(metabase.lib.core.native_extras.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0)));
});
/**
 * Get a list of Metrics that you may consider using as aggregations for a query. Returns JS array of opaque Metric
 *   metadata objects.
 */
metabase.lib.js.available_metrics = (function metabase$lib$js$available_metrics(a_query){
return cljs.core.to_array(metabase.lib.core.available_metrics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0)));
});
/**
 * Return information about the fields that you can pass to [[with-join-fields]] when constructing a join against
 *   something [[Joinable]] (i.e., a Table or Card) or manipulating an existing join. When passing in a join, currently
 *   selected columns (those in the join's `:fields`) will include `:selected true` information.
 */
metabase.lib.js.joinable_columns = (function metabase$lib$js$joinable_columns(a_query,stage_number,join_or_joinable){
return cljs.core.to_array(metabase.lib.core.joinable_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,join_or_joinable], 0)));
});
/**
 * Get TableMetadata if passed an integer `table-id`, or CardMetadata if passed a legacy-style `card__<id>` string.
 *   Returns `nil` if no matching metadata is found.
 */
metabase.lib.js.table_or_card_metadata = (function metabase$lib$js$table_or_card_metadata(query_or_metadata_provider,table_id){
return metabase.lib.metadata.table_or_card(query_or_metadata_provider,table_id);
});
/**
 * Get the display name for whatever we are joining. For an existing join, pass in the join clause. When constructing a
 *   join, pass in the thing we are joining against, e.g. a TableMetadata or CardMetadata.
 */
metabase.lib.js.join_lhs_display_name = (function metabase$lib$js$join_lhs_display_name(a_query,stage_number,join_or_joinable){
return metabase.lib.core.join_lhs_display_name.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,join_or_joinable], 0));
});
/**
 * Get the Database ID (`:database`) associated with a query. If the query is using
 *   the [[metabase.mbql.schema/saved-questions-virtual-database-id]] (used in some situations for queries with a
 *   `:source-card`)
 * 
 *  {:database -1337}
 * 
 *   we will attempt to resolve the correct Database ID by getting metadata for the source Card and returning its
 *   `:database-id`; if this is not available for one reason or another this will return `nil`.
 */
metabase.lib.js.database_id = (function metabase$lib$js$database_id(a_query){
return metabase.lib.core.database_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
});
Object.defineProperty(module.exports, "extract_template_tags", { enumerable: true, get: function() { return metabase.lib.js.extract_template_tags; } });
Object.defineProperty(module.exports, "filter_operator", { enumerable: true, get: function() { return metabase.lib.js.filter_operator; } });
Object.defineProperty(module.exports, "binning", { enumerable: true, get: function() { return metabase.lib.js.binning; } });
Object.defineProperty(module.exports, "query", { enumerable: true, get: function() { return metabase.lib.js.query; } });
Object.defineProperty(module.exports, "columns_group_columns", { enumerable: true, get: function() { return metabase.lib.js.columns_group_columns; } });
Object.defineProperty(module.exports, "join_fields", { enumerable: true, get: function() { return metabase.lib.js.join_fields; } });
Object.defineProperty(module.exports, "aggregate", { enumerable: true, get: function() { return metabase.lib.js.aggregate; } });
Object.defineProperty(module.exports, "join_conditions", { enumerable: true, get: function() { return metabase.lib.js.join_conditions; } });
Object.defineProperty(module.exports, "query_EQ_", { enumerable: true, get: function() { return metabase.lib.js.query_EQ_; } });
Object.defineProperty(module.exports, "temporal_bucket", { enumerable: true, get: function() { return metabase.lib.js.temporal_bucket; } });
Object.defineProperty(module.exports, "remove_clause", { enumerable: true, get: function() { return metabase.lib.js.remove_clause; } });
Object.defineProperty(module.exports, "suggested_join_condition", { enumerable: true, get: function() { return metabase.lib.js.suggested_join_condition; } });
Object.defineProperty(module.exports, "replace_clause", { enumerable: true, get: function() { return metabase.lib.js.replace_clause; } });
Object.defineProperty(module.exports, "drop_stage", { enumerable: true, get: function() { return metabase.lib.js.drop_stage; } });
Object.defineProperty(module.exports, "join_lhs_display_name", { enumerable: true, get: function() { return metabase.lib.js.join_lhs_display_name; } });
Object.defineProperty(module.exports, "native_extras", { enumerable: true, get: function() { return metabase.lib.js.native_extras; } });
Object.defineProperty(module.exports, "available_temporal_buckets", { enumerable: true, get: function() { return metabase.lib.js.available_temporal_buckets; } });
Object.defineProperty(module.exports, "with_binning", { enumerable: true, get: function() { return metabase.lib.js.with_binning; } });
Object.defineProperty(module.exports, "append_stage", { enumerable: true, get: function() { return metabase.lib.js.append_stage; } });
Object.defineProperty(module.exports, "join", { enumerable: true, get: function() { return metabase.lib.js.join; } });
Object.defineProperty(module.exports, "aggregations", { enumerable: true, get: function() { return metabase.lib.js.aggregations; } });
Object.defineProperty(module.exports, "raw_native_query", { enumerable: true, get: function() { return metabase.lib.js.raw_native_query; } });
Object.defineProperty(module.exports, "filterable_column_operators", { enumerable: true, get: function() { return metabase.lib.js.filterable_column_operators; } });
Object.defineProperty(module.exports, "with_temporal_bucket", { enumerable: true, get: function() { return metabase.lib.js.with_temporal_bucket; } });
Object.defineProperty(module.exports, "with_join_conditions", { enumerable: true, get: function() { return metabase.lib.js.with_join_conditions; } });
Object.defineProperty(module.exports, "available_metrics", { enumerable: true, get: function() { return metabase.lib.js.available_metrics; } });
Object.defineProperty(module.exports, "with_different_database", { enumerable: true, get: function() { return metabase.lib.js.with_different_database; } });
Object.defineProperty(module.exports, "with_fields", { enumerable: true, get: function() { return metabase.lib.js.with_fields; } });
Object.defineProperty(module.exports, "join_clause", { enumerable: true, get: function() { return metabase.lib.js.join_clause; } });
Object.defineProperty(module.exports, "aggregation_clause", { enumerable: true, get: function() { return metabase.lib.js.aggregation_clause; } });
Object.defineProperty(module.exports, "prep_query_for_equals", { enumerable: false, get: function() { return metabase.lib.js.prep_query_for_equals; } });
Object.defineProperty(module.exports, "fix_namespaced_values", { enumerable: false, get: function() { return metabase.lib.js.fix_namespaced_values; } });
Object.defineProperty(module.exports, "external_op", { enumerable: true, get: function() { return metabase.lib.js.external_op; } });
Object.defineProperty(module.exports, "with_join_fields", { enumerable: true, get: function() { return metabase.lib.js.with_join_fields; } });
Object.defineProperty(module.exports, "available_binning_strategies", { enumerable: true, get: function() { return metabase.lib.js.available_binning_strategies; } });
Object.defineProperty(module.exports, "expression", { enumerable: true, get: function() { return metabase.lib.js.expression; } });
Object.defineProperty(module.exports, "describe_relative_datetime", { enumerable: true, get: function() { return metabase.lib.js.describe_relative_datetime; } });
Object.defineProperty(module.exports, "pMBQL", { enumerable: false, get: function() { return metabase.lib.js.pMBQL; } });
Object.defineProperty(module.exports, "order_bys", { enumerable: true, get: function() { return metabase.lib.js.order_bys; } });
Object.defineProperty(module.exports, "display_info", { enumerable: true, get: function() { return metabase.lib.js.display_info; } });
Object.defineProperty(module.exports, "fieldable_columns", { enumerable: true, get: function() { return metabase.lib.js.fieldable_columns; } });
Object.defineProperty(module.exports, "template_tags", { enumerable: true, get: function() { return metabase.lib.js.template_tags; } });
Object.defineProperty(module.exports, "selected_aggregation_operators", { enumerable: true, get: function() { return metabase.lib.js.selected_aggregation_operators; } });
Object.defineProperty(module.exports, "order_by_clause", { enumerable: true, get: function() { return metabase.lib.js.order_by_clause; } });
Object.defineProperty(module.exports, "filterable_columns", { enumerable: true, get: function() { return metabase.lib.js.filterable_columns; } });
Object.defineProperty(module.exports, "join_condition_rhs_columns", { enumerable: true, get: function() { return metabase.lib.js.join_condition_rhs_columns; } });
Object.defineProperty(module.exports, "filters", { enumerable: true, get: function() { return metabase.lib.js.filters; } });
Object.defineProperty(module.exports, "join_condition_lhs_columns", { enumerable: true, get: function() { return metabase.lib.js.join_condition_lhs_columns; } });
Object.defineProperty(module.exports, "table_or_card_metadata", { enumerable: true, get: function() { return metabase.lib.js.table_or_card_metadata; } });
Object.defineProperty(module.exports, "orderable_columns", { enumerable: true, get: function() { return metabase.lib.js.orderable_columns; } });
Object.defineProperty(module.exports, "suggestedName", { enumerable: true, get: function() { return metabase.lib.js.suggestedName; } });
Object.defineProperty(module.exports, "metadataProvider", { enumerable: true, get: function() { return metabase.lib.js.metadataProvider; } });
Object.defineProperty(module.exports, "filter_clause", { enumerable: true, get: function() { return metabase.lib.js.filter_clause; } });
Object.defineProperty(module.exports, "fields", { enumerable: true, get: function() { return metabase.lib.js.fields; } });
Object.defineProperty(module.exports, "available_aggregation_operators", { enumerable: true, get: function() { return metabase.lib.js.available_aggregation_operators; } });
Object.defineProperty(module.exports, "breakouts", { enumerable: true, get: function() { return metabase.lib.js.breakouts; } });
Object.defineProperty(module.exports, "joinable_columns", { enumerable: true, get: function() { return metabase.lib.js.joinable_columns; } });
Object.defineProperty(module.exports, "group_columns", { enumerable: true, get: function() { return metabase.lib.js.group_columns; } });
Object.defineProperty(module.exports, "describe_temporal_unit", { enumerable: true, get: function() { return metabase.lib.js.describe_temporal_unit; } });
Object.defineProperty(module.exports, "joins", { enumerable: true, get: function() { return metabase.lib.js.joins; } });
Object.defineProperty(module.exports, "native_query", { enumerable: true, get: function() { return metabase.lib.js.native_query; } });
Object.defineProperty(module.exports, "available_join_strategies", { enumerable: true, get: function() { return metabase.lib.js.available_join_strategies; } });
Object.defineProperty(module.exports, "legacy_query", { enumerable: true, get: function() { return metabase.lib.js.legacy_query; } });
Object.defineProperty(module.exports, "with_native_extras", { enumerable: true, get: function() { return metabase.lib.js.with_native_extras; } });
Object.defineProperty(module.exports, "join_strategy", { enumerable: true, get: function() { return metabase.lib.js.join_strategy; } });
Object.defineProperty(module.exports, "picker_info", { enumerable: true, get: function() { return metabase.lib.js.picker_info; } });
Object.defineProperty(module.exports, "aggregation_operator_columns", { enumerable: true, get: function() { return metabase.lib.js.aggregation_operator_columns; } });
Object.defineProperty(module.exports, "join_condition_operators", { enumerable: true, get: function() { return metabase.lib.js.join_condition_operators; } });
Object.defineProperty(module.exports, "expressionable_columns", { enumerable: true, get: function() { return metabase.lib.js.expressionable_columns; } });
Object.defineProperty(module.exports, "filter", { enumerable: true, get: function() { return metabase.lib.js.filter; } });
Object.defineProperty(module.exports, "change_direction", { enumerable: true, get: function() { return metabase.lib.js.change_direction; } });
Object.defineProperty(module.exports, "with_template_tags", { enumerable: true, get: function() { return metabase.lib.js.with_template_tags; } });
Object.defineProperty(module.exports, "expressions", { enumerable: true, get: function() { return metabase.lib.js.expressions; } });
Object.defineProperty(module.exports, "with_join_strategy", { enumerable: true, get: function() { return metabase.lib.js.with_join_strategy; } });
Object.defineProperty(module.exports, "order_by", { enumerable: true, get: function() { return metabase.lib.js.order_by; } });
Object.defineProperty(module.exports, "describe_temporal_interval", { enumerable: true, get: function() { return metabase.lib.js.describe_temporal_interval; } });
Object.defineProperty(module.exports, "breakout", { enumerable: true, get: function() { return metabase.lib.js.breakout; } });
Object.defineProperty(module.exports, "database_id", { enumerable: true, get: function() { return metabase.lib.js.database_id; } });
Object.defineProperty(module.exports, "required_native_extras", { enumerable: true, get: function() { return metabase.lib.js.required_native_extras; } });
Object.defineProperty(module.exports, "remove_join", { enumerable: true, get: function() { return metabase.lib.js.remove_join; } });
Object.defineProperty(module.exports, "joined_thing", { enumerable: true, get: function() { return metabase.lib.js.joined_thing; } });
Object.defineProperty(module.exports, "with_native_query", { enumerable: true, get: function() { return metabase.lib.js.with_native_query; } });
Object.defineProperty(module.exports, "breakoutable_columns", { enumerable: true, get: function() { return metabase.lib.js.breakoutable_columns; } });
Object.defineProperty(module.exports, "rename_join", { enumerable: true, get: function() { return metabase.lib.js.rename_join; } });
//# sourceMappingURL=metabase.lib.js.js.map
