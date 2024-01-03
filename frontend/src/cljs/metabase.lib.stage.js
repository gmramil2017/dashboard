var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./medley.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.binning.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.expression.js");
require("./metabase.lib.field.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.join.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.normalize.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.stage.js");

goog.provide('metabase.lib.stage');
metabase.lib.hierarchy.derive(new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.Keyword("metabase.lib.stage","stage","metabase.lib.stage/stage",1448689281));
metabase.lib.hierarchy.derive(new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),new cljs.core.Keyword("metabase.lib.stage","stage","metabase.lib.stage/stage",1448689281));
metabase.lib.normalize.normalize.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (stage){
return metabase.lib.normalize.normalize_map.cljs$core$IFn$_invoke$arity$3(stage,cljs.core.keyword,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,metabase.lib.normalize.normalize),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,metabase.lib.normalize.normalize)], null));
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.stage","stage","metabase.lib.stage/stage",1448689281),(function (_query,_stage_number,_stage){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You can't calculate a metadata map for a stage! Use lib.metadata.calculation/returned-columns-method instead.",cljs.core.PersistentArrayMap.EMPTY);
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Recursively calculate the metadata for the previous stages and add it to them, we'll need it for metadata
 *   calculations for [[lib.metadata.calculation/returned-columns]] and [[lib.metadata.calculation/visible-columns]], and
 *   we don't want to have to calculate it more than once...
 */
metabase.lib.stage.ensure_previous_stages_have_metadata = (function metabase$lib$stage$ensure_previous_stages_have_metadata(query,stage_number){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (query__$1,stage_number__$1){
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query__$1,stage_number__$1,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("metabase.lib.stage","cached-metadata","metabase.lib.stage/cached-metadata",-1406479151),metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query__$1,stage_number__$1,metabase.lib.util.query_stage(query__$1,stage_number__$1))], 0));
}),query,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),metabase.lib.util.canonical_stage_index(query,stage_number)));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 *        
 * 
 *   Return existing stage metadata attached to a stage if is already present: return it as-is, but only if this is a
 *   native stage or a source-Card stage. if it's any other sort of stage then ignore the metadata, it's probably wrong;
 *   we can recalculate the correct metadata anyway.
 */
metabase.lib.stage.existing_stage_metadata = (function metabase$lib$stage$existing_stage_metadata(query,stage_number){

var map__81166 = metabase.lib.util.query_stage(query,stage_number);
var map__81166__$1 = cljs.core.__destructure_map(map__81166);
var stage = map__81166__$1;
var stage_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81166__$1,new cljs.core.Keyword("lib","type","lib/type",1175424801));
var source_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81166__$1,new cljs.core.Keyword(null,"source-card","source-card",-1580820390));
var or__5045__auto__ = new cljs.core.Keyword("metabase.lib.stage","cached-metadata","metabase.lib.stage/cached-metadata",-1406479151).cljs$core$IFn$_invoke$arity$1(stage);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5804__auto__ = new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610).cljs$core$IFn$_invoke$arity$1(stage);
if(cljs.core.truth_(temp__5804__auto__)){
var metadata = temp__5804__auto__;
if(cljs.core.truth_((function (){var or__5045__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stage_type,new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194));
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return source_card;
}
})())){
var source_type = (function (){var G__81167 = stage_type;
var G__81167__$1 = (((G__81167 instanceof cljs.core.Keyword))?G__81167.fqn:null);
switch (G__81167__$1) {
case "mbql.stage/native":
return new cljs.core.Keyword("source","native","source/native",-1444604147);

break;
case "mbql.stage/mbql":
return new cljs.core.Keyword("source","card","source/card",-139977973);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81167__$1)].join('')));

}
})();
return cljs.core.not_empty((function (){var iter__5523__auto__ = (function metabase$lib$stage$existing_stage_metadata_$_iter__81168(s__81169){
return (new cljs.core.LazySeq(null,(function (){
var s__81169__$1 = s__81169;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__81169__$1);
if(temp__5804__auto____$1){
var s__81169__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81169__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81169__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81171 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81170 = (0);
while(true){
if((i__81170 < size__5522__auto__)){
var col = cljs.core._nth(c__5521__auto__,i__81170);
cljs.core.chunk_append(b__81171,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col)], null),col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","source","lib/source",-434086550),source_type], null)], 0)));

var G__81449 = (i__81170 + (1));
i__81170 = G__81449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81171),metabase$lib$stage$existing_stage_metadata_$_iter__81168(cljs.core.chunk_rest(s__81169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81171),null);
}
} else {
var col = cljs.core.first(s__81169__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col)], null),col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","source","lib/source",-434086550),source_type], null)], 0)),metabase$lib$stage$existing_stage_metadata_$_iter__81168(cljs.core.rest(s__81169__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(metadata));
})());
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- fn?]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 */
metabase.lib.stage.breakouts_columns = (function metabase$lib$stage$breakouts_columns(query,stage_number,unique_name_fn){

return cljs.core.not_empty((function (){var iter__5523__auto__ = (function metabase$lib$stage$breakouts_columns_$_iter__81179(s__81180){
return (new cljs.core.LazySeq(null,(function (){
var s__81180__$1 = s__81180;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81180__$1);
if(temp__5804__auto__){
var s__81180__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81180__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81180__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81182 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81181 = (0);
while(true){
if((i__81181 < size__5522__auto__)){
var breakout = cljs.core._nth(c__5521__auto__,i__81181);
cljs.core.chunk_append(b__81182,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(breakout,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","breakouts","source/breakouts",-1706018158),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177))(breakout),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81186 = metabase.lib.field.desired_alias(query,breakout);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81186) : unique_name_fn.call(null,G__81186));
})()], 0)));

var G__81450 = (i__81181 + (1));
i__81181 = G__81450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81182),metabase$lib$stage$breakouts_columns_$_iter__81179(cljs.core.chunk_rest(s__81180__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81182),null);
}
} else {
var breakout = cljs.core.first(s__81180__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(breakout,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","breakouts","source/breakouts",-1706018158),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177))(breakout),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81188 = metabase.lib.field.desired_alias(query,breakout);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81188) : unique_name_fn.call(null,G__81188));
})()], 0)),metabase$lib$stage$breakouts_columns_$_iter__81179(cljs.core.rest(s__81180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(metabase.lib.breakout.breakouts_metadata(query,stage_number));
})());
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- fn?]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 */
metabase.lib.stage.aggregations_columns = (function metabase$lib$stage$aggregations_columns(query,stage_number,unique_name_fn){

return cljs.core.not_empty((function (){var iter__5523__auto__ = (function metabase$lib$stage$aggregations_columns_$_iter__81193(s__81194){
return (new cljs.core.LazySeq(null,(function (){
var s__81194__$1 = s__81194;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81194__$1);
if(temp__5804__auto__){
var s__81194__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81194__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81194__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81196 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81195 = (0);
while(true){
if((i__81195 < size__5522__auto__)){
var ag = cljs.core._nth(c__5521__auto__,i__81195);
cljs.core.chunk_append(b__81196,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ag,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ag),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81201 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ag);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81201) : unique_name_fn.call(null,G__81201));
})()], 0)));

var G__81452 = (i__81195 + (1));
i__81195 = G__81452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81196),metabase$lib$stage$aggregations_columns_$_iter__81193(cljs.core.chunk_rest(s__81194__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81196),null);
}
} else {
var ag = cljs.core.first(s__81194__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ag,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ag),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81205 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ag);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81205) : unique_name_fn.call(null,G__81205));
})()], 0)),metabase$lib$stage$aggregations_columns_$_iter__81193(cljs.core.rest(s__81194__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(metabase.lib.aggregation.aggregations_metadata.cljs$core$IFn$_invoke$arity$2(query,stage_number));
})());
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- fn?]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 */
metabase.lib.stage.fields_columns = (function metabase$lib$stage$fields_columns(query,stage_number,unique_name_fn){

var temp__5804__auto__ = metabase.lib.util.query_stage(query,stage_number);
if(cljs.core.truth_(temp__5804__auto__)){
var map__81213 = temp__5804__auto__;
var map__81213__$1 = cljs.core.__destructure_map(map__81213);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81213__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return cljs.core.not_empty((function (){var iter__5523__auto__ = (function metabase$lib$stage$fields_columns_$_iter__81214(s__81215){
return (new cljs.core.LazySeq(null,(function (){
var s__81215__$1 = s__81215;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__81215__$1);
if(temp__5804__auto____$1){
var s__81215__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81215__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81215__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81217 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81216 = (0);
while(true){
if((i__81216 < size__5522__auto__)){
var vec__81221 = cljs.core._nth(c__5521__auto__,i__81216);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81221,(0),null);
var ref_clause = vec__81221;
var source = (function (){var G__81224 = tag;
var G__81224__$1 = (((G__81224 instanceof cljs.core.Keyword))?G__81224.fqn:null);
switch (G__81224__$1) {
case "field":
return new cljs.core.Keyword("source","fields","source/fields",-649667981);

break;
case "expression":
return new cljs.core.Keyword("source","expressions","source/expressions",-458367840);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81224__$1)].join('')));

}
})();
var metadata = metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,ref_clause);
cljs.core.chunk_append(b__81217,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metadata,new cljs.core.Keyword("lib","source","lib/source",-434086550),source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,metadata),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81225 = metabase.lib.field.desired_alias(query,metadata);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81225) : unique_name_fn.call(null,G__81225));
})()], 0)));

var G__81475 = (i__81216 + (1));
i__81216 = G__81475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81217),metabase$lib$stage$fields_columns_$_iter__81214(cljs.core.chunk_rest(s__81215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81217),null);
}
} else {
var vec__81227 = cljs.core.first(s__81215__$2);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81227,(0),null);
var ref_clause = vec__81227;
var source = (function (){var G__81230 = tag;
var G__81230__$1 = (((G__81230 instanceof cljs.core.Keyword))?G__81230.fqn:null);
switch (G__81230__$1) {
case "field":
return new cljs.core.Keyword("source","fields","source/fields",-649667981);

break;
case "expression":
return new cljs.core.Keyword("source","expressions","source/expressions",-458367840);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81230__$1)].join('')));

}
})();
var metadata = metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,ref_clause);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metadata,new cljs.core.Keyword("lib","source","lib/source",-434086550),source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,metadata),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81232 = metabase.lib.field.desired_alias(query,metadata);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81232) : unique_name_fn.call(null,G__81232));
})()], 0)),metabase$lib$stage$fields_columns_$_iter__81214(cljs.core.rest(s__81215__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(fields);
})());
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- fn?]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 */
metabase.lib.stage.summary_columns = (function metabase$lib$stage$summary_columns(query,stage_number,unique_name_fn){

return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (f){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(query,stage_number,unique_name_fn) : f.call(null,query,stage_number,unique_name_fn));
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.stage.breakouts_columns,metabase.lib.stage.aggregations_columns], null)));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- fn?]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 *        
 * 
 *   Metadata for the previous stage, if there is one.
 */
metabase.lib.stage.previous_stage_metadata = (function metabase$lib$stage$previous_stage_metadata(query,stage_number,unique_name_fn){

var temp__5804__auto__ = metabase.lib.util.previous_stage_number(query,stage_number);
if(cljs.core.truth_(temp__5804__auto__)){
var previous_stage_number = temp__5804__auto__;
return cljs.core.not_empty((function (){var iter__5523__auto__ = (function metabase$lib$stage$previous_stage_metadata_$_iter__81253(s__81254){
return (new cljs.core.LazySeq(null,(function (){
var s__81254__$1 = s__81254;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__81254__$1);
if(temp__5804__auto____$1){
var s__81254__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81254__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81254__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81256 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81255 = (0);
while(true){
if((i__81255 < size__5522__auto__)){
var col = cljs.core._nth(c__5521__auto__,i__81255);
var source_alias = (function (){var or__5045__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386))(col);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,col);
}
})();
cljs.core.chunk_append(b__81256,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(col,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),source_alias,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(source_alias) : unique_name_fn.call(null,source_alias))], 0)),new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727)));

var G__81498 = (i__81255 + (1));
i__81255 = G__81498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81256),metabase$lib$stage$previous_stage_metadata_$_iter__81253(cljs.core.chunk_rest(s__81254__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81256),null);
}
} else {
var col = cljs.core.first(s__81254__$2);
var source_alias = (function (){var or__5045__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386))(col);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,col);
}
})();
return cljs.core.cons(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(col,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),source_alias,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(source_alias) : unique_name_fn.call(null,source_alias))], 0)),new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727)),metabase$lib$stage$previous_stage_metadata_$_iter__81253(cljs.core.rest(s__81254__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query,previous_stage_number,metabase.lib.util.query_stage(query,previous_stage_number)));
})());
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int card-id :- [:maybe :metabase.lib.schema.id/card] unique-name-fn :- fn?]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 *        
 * 
 *   Metadata associated with a Saved Question, e.g. if we have a `:source-card`
 */
metabase.lib.stage.saved_question_metadata = (function metabase$lib$stage$saved_question_metadata(query,stage_number,card_id,unique_name_fn){

if(cljs.core.truth_(card_id)){
var temp__5804__auto__ = metabase.lib.metadata.card(query,card_id);
if(cljs.core.truth_(temp__5804__auto__)){
var card = temp__5804__auto__;
return cljs.core.not_empty(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__81268_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__81268_SHARP_,new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287));
}),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870),unique_name_fn,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null))));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- fn?]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 */
metabase.lib.stage.expressions_metadata = (function metabase$lib$stage$expressions_metadata(query,stage_number,unique_name_fn){

return cljs.core.not_empty((function (){var iter__5523__auto__ = (function metabase$lib$stage$expressions_metadata_$_iter__81292(s__81293){
return (new cljs.core.LazySeq(null,(function (){
var s__81293__$1 = s__81293;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81293__$1);
if(temp__5804__auto__){
var s__81293__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81293__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81293__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81295 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81294 = (0);
while(true){
if((i__81294 < size__5522__auto__)){
var expression = cljs.core._nth(c__5521__auto__,i__81294);
cljs.core.chunk_append(b__81295,(function (){var base_type = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(expression);
return metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(expression,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","expressions","source/expressions",-458367840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expression),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81305 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expression);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81305) : unique_name_fn.call(null,G__81305));
})()], 0)),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),(function (){var or__5045__auto__ = base_type;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
})());
})());

var G__81509 = (i__81294 + (1));
i__81294 = G__81509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81295),metabase$lib$stage$expressions_metadata_$_iter__81292(cljs.core.chunk_rest(s__81293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81295),null);
}
} else {
var expression = cljs.core.first(s__81293__$2);
return cljs.core.cons((function (){var base_type = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(expression);
return metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(expression,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","expressions","source/expressions",-458367840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expression),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81313 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expression);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81313) : unique_name_fn.call(null,G__81313));
})()], 0)),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),(function (){var or__5045__auto__ = base_type;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
})());
})(),metabase$lib$stage$expressions_metadata_$_iter__81292(cljs.core.rest(s__81293__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(metabase.lib.expression.expressions_metadata.cljs$core$IFn$_invoke$arity$2(query,stage_number));
})());
});
/**
 * Columns that are implicitly joinable from some other columns in `column-metadatas`. To be joinable, the column has to
 *   have appropriate FK metadata, i.e. have an `:fk-target-field-id` pointing to another Field. (I think we only include
 *   this information for Databases that support FKs and joins, so I don't think we need to do an additional DB feature
 *   check here.)
 * 
 *   This does not include columns from any Tables that are already explicitly joined, and does not include multiple
 *   versions of a column when there are multiple pathways to it (i.e. if there is more than one FK to a Table). This
 *   behavior matches how things currently work in MLv1, at least for order by; we can adjust as needed in the future if
 *   it turns out we do need that stuff.
 * 
 *   Does not include columns that would be implicitly joinable via multiple hops.
 */
metabase.lib.stage.implicitly_joinable_columns = (function metabase$lib$stage$implicitly_joinable_columns(query,stage_number,column_metadatas,unique_name_fn){
var existing_table_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table-id","table-id",-766649466)),column_metadatas);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287)),medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287)),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__81325){
var map__81326 = p__81325;
var map__81326__$1 = cljs.core.__destructure_map(map__81326);
var source_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81326__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fk_target_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81326__$1,new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.metadata.field(query,fk_target_field_id),new cljs.core.Keyword("metabase.lib.stage","source-field-id","metabase.lib.stage/source-field-id",-962431705),source_field_id);
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__81319_SHARP_){
return cljs.core.contains_QMARK_(existing_table_ids,new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(p1__81319_SHARP_));
})),medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table-id","table-id",-766649466)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__81329){
var map__81330 = p__81329;
var map__81330__$1 = cljs.core.__destructure_map(map__81330);
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81330__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
var source_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81330__$1,new cljs.core.Keyword("metabase.lib.stage","source-field-id","metabase.lib.stage/source-field-id",-962431705));
var table_metadata = metabase.lib.metadata.table(query,table_id);
var options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870),unique_name_fn,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null);
var iter__5523__auto__ = (function metabase$lib$stage$implicitly_joinable_columns_$_iter__81331(s__81332){
return (new cljs.core.LazySeq(null,(function (){
var s__81332__$1 = s__81332;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81332__$1);
if(temp__5804__auto__){
var s__81332__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81332__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81332__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81334 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81333 = (0);
while(true){
if((i__81333 < size__5522__auto__)){
var field = cljs.core._nth(c__5521__auto__,i__81333);
var field__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(field,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),source_field_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","implicitly-joinable","source/implicitly-joinable",-729101197),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field)], 0));
cljs.core.chunk_append(b__81334,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(field__$1,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81336 = metabase.lib.field.desired_alias(query,field__$1);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81336) : unique_name_fn.call(null,G__81336));
})()));

var G__81548 = (i__81333 + (1));
i__81333 = G__81548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81334),metabase$lib$stage$implicitly_joinable_columns_$_iter__81331(cljs.core.chunk_rest(s__81332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81334),null);
}
} else {
var field = cljs.core.first(s__81332__$2);
var field__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(field,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),source_field_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","implicitly-joinable","source/implicitly-joinable",-729101197),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field)], 0));
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(field__$1,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81339 = metabase.lib.field.desired_alias(query,field__$1);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81339) : unique_name_fn.call(null,G__81339));
})()),metabase$lib$stage$implicitly_joinable_columns_$_iter__81331(cljs.core.rest(s__81332__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,table_metadata,options));
}))], 0)),column_metadatas);
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [unique-name-fn], :as options} :- lib.metadata.calculation/VisibleColumnsOptions]
 *   Return: lib.metadata.calculation/ColumnsWithUniqueAliases
 *        
 * 
 *   Return columns from the previous query stage or source Table/Card.
 */
metabase.lib.stage.previous_stage_or_source_visible_columns = (function metabase$lib$stage$previous_stage_or_source_visible_columns(query,stage_number,p__81349){
var map__81350 = p__81349;
var map__81350__$1 = cljs.core.__destructure_map(map__81350);
var options = map__81350__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81350__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
if(cljs.core.fn_QMARK_(unique_name_fn)){
} else {
throw (new Error("Assert failed: (fn? unique-name-fn)"));
}

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__81340_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__81340_SHARP_,new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357)], 0));
}),(function (){var or__5045__auto__ = metabase.lib.stage.previous_stage_metadata(query,stage_number,unique_name_fn);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var map__81351 = metabase.lib.util.query_stage(query,stage_number);
var map__81351__$1 = cljs.core.__destructure_map(map__81351);
var this_stage = map__81351__$1;
var source_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81351__$1,new cljs.core.Keyword(null,"source-table","source-table",-225307692));
var source_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81351__$1,new cljs.core.Keyword(null,"source-card","source-card",-1580820390));
var or__5045__auto____$1 = (cljs.core.truth_(source_table)?(function (){
if(cljs.core.integer_QMARK_(source_table)){
} else {
throw (new Error("Assert failed: (integer? source-table)"));
}

var table_metadata = metabase.lib.metadata.table(query,source_table);
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,table_metadata,options);
})()
:null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (cljs.core.truth_(source_card)?metabase.lib.stage.saved_question_metadata(query,stage_number,source_card,unique_name_fn):null);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var iter__5523__auto__ = (function metabase$lib$stage$previous_stage_or_source_visible_columns_$_iter__81352(s__81353){
return (new cljs.core.LazySeq(null,(function (){
var s__81353__$1 = s__81353;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81353__$1);
if(temp__5804__auto__){
var s__81353__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81353__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81353__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81355 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81354 = (0);
while(true){
if((i__81354 < size__5522__auto__)){
var col = cljs.core._nth(c__5521__auto__,i__81354);
cljs.core.chunk_append(b__81355,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(col,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","native","source/native",-1444604147),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81357 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81357) : unique_name_fn.call(null,G__81357));
})()], 0)));

var G__81572 = (i__81354 + (1));
i__81354 = G__81572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81355),metabase$lib$stage$previous_stage_or_source_visible_columns_$_iter__81352(cljs.core.chunk_rest(s__81353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81355),null);
}
} else {
var col = cljs.core.first(s__81353__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(col,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","native","source/native",-1444604147),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__81358 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__81358) : unique_name_fn.call(null,G__81358));
})()], 0)),metabase$lib$stage$previous_stage_or_source_visible_columns_$_iter__81352(cljs.core.rest(s__81353__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610).cljs$core$IFn$_invoke$arity$1(this_stage)));
}
}
}
})());
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [unique-name-fn include-joined? include-expressions?], :as options} :- lib.metadata.calculation/VisibleColumnsOptions]
 *   Return: lib.metadata.calculation/ColumnsWithUniqueAliases
 */
metabase.lib.stage.existing_visible_columns = (function metabase$lib$stage$existing_visible_columns(query,stage_number,p__81364){
var map__81366 = p__81364;
var map__81366__$1 = cljs.core.__destructure_map(map__81366);
var options = map__81366__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81366__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
var include_joined_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81366__$1,new cljs.core.Keyword(null,"include-joined?","include-joined?",-410632824));
var include_expressions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81366__$1,new cljs.core.Keyword(null,"include-expressions?","include-expressions?",-1817639288));

return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.stage.previous_stage_or_source_visible_columns(query,stage_number,options),(cljs.core.truth_(include_expressions_QMARK_)?metabase.lib.stage.expressions_metadata(query,stage_number,unique_name_fn):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(include_joined_QMARK_)?metabase.lib.join.all_joins_visible_columns(query,stage_number,unique_name_fn):null)], 0));
});
metabase.lib.stage.ref_to_QMARK_ = (function metabase$lib$stage$ref_to_QMARK_(p__81377,column){
var vec__81378 = p__81377;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81378,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81378,(1),null);
var pointer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81378,(2),null);
var clause = vec__81378;
var G__81381 = tag;
var G__81381__$1 = (((G__81381 instanceof cljs.core.Keyword))?G__81381.fqn:null);
switch (G__81381__$1) {
case "field":
if(((typeof pointer === 'number') || (typeof pointer === 'string'))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pointer,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unknown type of :field ref in lib.stage/ref-to?",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clause","clause",1479668060),clause,new cljs.core.Keyword(null,"column","column",2078222095),column], null));
}

break;
case "expression":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pointer,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unknown clause in lib.stage/ref-to?",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clause","clause",1479668060),clause,new cljs.core.Keyword(null,"column","column",2078222095),column], null));

}
});
metabase.lib.stage.mark_selected_breakouts = (function metabase$lib$stage$mark_selected_breakouts(query,stage_number,columns){
var temp__5802__auto__ = new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number));
if(cljs.core.truth_(temp__5802__auto__)){
var breakouts = temp__5802__auto__;
var iter__5523__auto__ = (function metabase$lib$stage$mark_selected_breakouts_$_iter__81389(s__81390){
return (new cljs.core.LazySeq(null,(function (){
var s__81390__$1 = s__81390;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81390__$1);
if(temp__5804__auto__){
var s__81390__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81390__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81390__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81392 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81391 = (0);
while(true){
if((i__81391 < size__5522__auto__)){
var column = cljs.core._nth(c__5521__auto__,i__81391);
cljs.core.chunk_append(b__81392,(function (){var temp__5802__auto____$1 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(((function (i__81391,column,c__5521__auto__,size__5522__auto__,b__81392,s__81390__$2,temp__5804__auto__,breakouts,temp__5802__auto__){
return (function (p1__81384_SHARP_){
return metabase.lib.stage.ref_to_QMARK_(p1__81384_SHARP_,column);
});})(i__81391,column,c__5521__auto__,size__5522__auto__,b__81392,s__81390__$2,temp__5804__auto__,breakouts,temp__5802__auto__))
,breakouts);
if(cljs.core.truth_(temp__5802__auto____$1)){
var match = temp__5802__auto____$1;
var binning = metabase.lib.binning.binning(match);
var map__81397 = metabase.lib.temporal_bucket.temporal_bucket(match);
var map__81397__$1 = cljs.core.__destructure_map(map__81397);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81397__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var G__81398 = column;
var G__81398__$1 = (cljs.core.truth_(binning)?metabase.lib.binning.with_binning(G__81398,binning):G__81398);
if(cljs.core.truth_(unit)){
return metabase.lib.temporal_bucket.with_temporal_bucket(G__81398__$1,unit);
} else {
return G__81398__$1;
}
} else {
return column;
}
})());

var G__81578 = (i__81391 + (1));
i__81391 = G__81578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81392),metabase$lib$stage$mark_selected_breakouts_$_iter__81389(cljs.core.chunk_rest(s__81390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81392),null);
}
} else {
var column = cljs.core.first(s__81390__$2);
return cljs.core.cons((function (){var temp__5802__auto____$1 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(((function (column,s__81390__$2,temp__5804__auto__,breakouts,temp__5802__auto__){
return (function (p1__81384_SHARP_){
return metabase.lib.stage.ref_to_QMARK_(p1__81384_SHARP_,column);
});})(column,s__81390__$2,temp__5804__auto__,breakouts,temp__5802__auto__))
,breakouts);
if(cljs.core.truth_(temp__5802__auto____$1)){
var match = temp__5802__auto____$1;
var binning = metabase.lib.binning.binning(match);
var map__81400 = metabase.lib.temporal_bucket.temporal_bucket(match);
var map__81400__$1 = cljs.core.__destructure_map(map__81400);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81400__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var G__81404 = column;
var G__81404__$1 = (cljs.core.truth_(binning)?metabase.lib.binning.with_binning(G__81404,binning):G__81404);
if(cljs.core.truth_(unit)){
return metabase.lib.temporal_bucket.with_temporal_bucket(G__81404__$1,unit);
} else {
return G__81404__$1;
}
} else {
return column;
}
})(),metabase$lib$stage$mark_selected_breakouts_$_iter__81389(cljs.core.rest(s__81390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(columns);
} else {
return columns;
}
});
metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.stage","stage","metabase.lib.stage/stage",1448689281),(function (query,stage_number,_stage,p__81406){
var map__81407 = p__81406;
var map__81407__$1 = cljs.core.__destructure_map(map__81407);
var options = map__81407__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81407__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
var include_implicitly_joinable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81407__$1,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866));
var query__$1 = metabase.lib.stage.ensure_previous_stages_have_metadata(query,stage_number);
var existing_columns = metabase.lib.stage.existing_visible_columns(query__$1,stage_number,options);
return metabase.lib.stage.mark_selected_breakouts(query__$1,stage_number,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(existing_columns,(cljs.core.truth_(include_implicitly_joinable_QMARK_)?metabase.lib.stage.implicitly_joinable_columns(query__$1,stage_number,existing_columns,unique_name_fn):null)));
}));
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.stage","stage","metabase.lib.stage/stage",1448689281),(function (query,stage_number,_stage,p__81411){
var map__81413 = p__81411;
var map__81413__$1 = cljs.core.__destructure_map(map__81413);
var options = map__81413__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81413__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
var or__5045__auto__ = metabase.lib.stage.existing_stage_metadata(query,stage_number);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var query__$1 = metabase.lib.stage.ensure_previous_stages_have_metadata(query,stage_number);
var summary_cols = metabase.lib.stage.summary_columns(query__$1,stage_number,unique_name_fn);
var field_cols = metabase.lib.stage.fields_columns(query__$1,stage_number,unique_name_fn);
if(cljs.core.truth_(summary_cols)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(summary_cols,field_cols);
} else {
if(cljs.core.truth_(field_cols)){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(field_cols);

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((function (p1__81410_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__81410_SHARP_,new cljs.core.Keyword(null,"source-alias","source-alias",1652088724),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402)], 0));
})),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(field_cols,metabase.lib.join.all_joins_expected_columns(query__$1,stage_number,options)));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.stage.previous_stage_or_source_visible_columns(query__$1,stage_number,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870),unique_name_fn], null)),metabase.lib.stage.expressions_metadata(query__$1,stage_number,unique_name_fn),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.join.all_joins_expected_columns(query__$1,stage_number,options)], 0));

}
}
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),(function (_query,_stage_number,_stage,_style){
return metabase.shared.util.i18n.js_i18n("Native query");
}));
metabase.lib.stage.display_name_parts = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"source-card","source-card",-1580820390),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.Keyword(null,"breakout","breakout",-732419050),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null);
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (query,stage_number,_stage,style){
var query__$1 = metabase.lib.stage.ensure_previous_stages_have_metadata(query,stage_number);
var or__5045__auto__ = cljs.core.not_empty((function (){var descriptions = (function (){var iter__5523__auto__ = (function metabase$lib$stage$iter__81426(s__81427){
return (new cljs.core.LazySeq(null,(function (){
var s__81427__$1 = s__81427;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81427__$1);
if(temp__5804__auto__){
var s__81427__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81427__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81427__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81429 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81428 = (0);
while(true){
if((i__81428 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__81428);
cljs.core.chunk_append(b__81429,metabase.lib.metadata.calculation.describe_top_level_key.cljs$core$IFn$_invoke$arity$3(query__$1,stage_number,k));

var G__81582 = (i__81428 + (1));
i__81428 = G__81582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81429),metabase$lib$stage$iter__81426(cljs.core.chunk_rest(s__81427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81429),null);
}
} else {
var k = cljs.core.first(s__81427__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.describe_top_level_key.cljs$core$IFn$_invoke$arity$3(query__$1,stage_number,k),metabase$lib$stage$iter__81426(cljs.core.rest(s__81427__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(metabase.lib.stage.display_name_parts);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,descriptions));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5804__auto__ = metabase.lib.util.previous_stage_number(query__$1,stage_number);
if(cljs.core.truth_(temp__5804__auto__)){
var previous_stage_number = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query__$1,previous_stage_number,metabase.lib.util.query_stage(query__$1,previous_stage_number),style);
} else {
return null;
}
}
}));
/**
 * Inputs: [query]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Adds a new blank stage to the end of the pipeline
 */
metabase.lib.stage.append_stage = (function metabase$lib$stage$append_stage(query){

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(query,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798)], null));
});
/**
 * Inputs: [query]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Drops the final stage in the pipeline
 */
metabase.lib.stage.drop_stage = (function metabase$lib$stage$drop_stage(query){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n("Cannot drop the only stage"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query)], null));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.butlast));
});
Object.defineProperty(module.exports, "implicitly_joinable_columns", { enumerable: false, get: function() { return metabase.lib.stage.implicitly_joinable_columns; } });
Object.defineProperty(module.exports, "ensure_previous_stages_have_metadata", { enumerable: false, get: function() { return metabase.lib.stage.ensure_previous_stages_have_metadata; } });
Object.defineProperty(module.exports, "summary_columns", { enumerable: false, get: function() { return metabase.lib.stage.summary_columns; } });
Object.defineProperty(module.exports, "drop_stage", { enumerable: false, get: function() { return metabase.lib.stage.drop_stage; } });
Object.defineProperty(module.exports, "append_stage", { enumerable: false, get: function() { return metabase.lib.stage.append_stage; } });
Object.defineProperty(module.exports, "display_name_parts", { enumerable: false, get: function() { return metabase.lib.stage.display_name_parts; } });
Object.defineProperty(module.exports, "expressions_metadata", { enumerable: false, get: function() { return metabase.lib.stage.expressions_metadata; } });
Object.defineProperty(module.exports, "mark_selected_breakouts", { enumerable: false, get: function() { return metabase.lib.stage.mark_selected_breakouts; } });
Object.defineProperty(module.exports, "aggregations_columns", { enumerable: false, get: function() { return metabase.lib.stage.aggregations_columns; } });
Object.defineProperty(module.exports, "ref_to_QMARK_", { enumerable: false, get: function() { return metabase.lib.stage.ref_to_QMARK_; } });
Object.defineProperty(module.exports, "fields_columns", { enumerable: false, get: function() { return metabase.lib.stage.fields_columns; } });
Object.defineProperty(module.exports, "previous_stage_or_source_visible_columns", { enumerable: false, get: function() { return metabase.lib.stage.previous_stage_or_source_visible_columns; } });
Object.defineProperty(module.exports, "breakouts_columns", { enumerable: false, get: function() { return metabase.lib.stage.breakouts_columns; } });
Object.defineProperty(module.exports, "existing_visible_columns", { enumerable: false, get: function() { return metabase.lib.stage.existing_visible_columns; } });
Object.defineProperty(module.exports, "previous_stage_metadata", { enumerable: false, get: function() { return metabase.lib.stage.previous_stage_metadata; } });
Object.defineProperty(module.exports, "saved_question_metadata", { enumerable: false, get: function() { return metabase.lib.stage.saved_question_metadata; } });
Object.defineProperty(module.exports, "existing_stage_metadata", { enumerable: false, get: function() { return metabase.lib.stage.existing_stage_metadata; } });
//# sourceMappingURL=metabase.lib.stage.js.map
