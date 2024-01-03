var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.schema.aggregation.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.expression.arithmetic.js");
require("./metabase.lib.schema.expression.conditional.js");
require("./metabase.lib.schema.expression.string.js");
require("./metabase.lib.schema.expression.temporal.js");
require("./metabase.lib.schema.filter.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.join.js");
require("./metabase.lib.schema.literal.js");
require("./metabase.lib.schema.order_by.js");
require("./metabase.lib.schema.ref.js");
require("./metabase.lib.schema.template_tag.js");
require("./metabase.lib.schema.util.js");
require("./metabase.mbql.util.match.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.js");

goog.provide('metabase.lib.schema');
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.native","metabase.lib.schema/stage.native",-1206212320),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native","native",-613060878),cljs.core.some_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljs.core.any_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.template-tag","template-tag-map","metabase.lib.schema.template-tag/template-tag-map",1471181299)], null)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","breakouts","metabase.lib.schema/breakouts",1354104361),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","fields","metabase.lib.schema/fields",-2010307316),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","filters","metabase.lib.schema/filters",889389881),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","boolean","metabase.lib.schema.expression/boolean",-1396506592)], null)], null));
metabase.lib.schema.expression_ref_error_for_stage = (function metabase$lib$schema$expression_ref_error_for_stage(stage){
var expression_names = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590),cljs.core.second)),new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(stage));
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$schema$expression_ref_error_for_stage_$_match_63610(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__63634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63634,new cljs.core.Keyword(null,"expression","expression",202311876))){
try{var _AMPERSAND_match_2__63636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(cljs.core.complement(expression_names)(_AMPERSAND_match_2__63636))){
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Invalid :expression reference: no expression named ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expression_name], 0))].join('')], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63642){if((e63642 instanceof Error)){
var e__62528__auto__ = e63642;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63642;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63641){if((e63641 instanceof Error)){
var e__62528__auto__ = e63641;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63641;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63638){if((e63638 instanceof Error)){
var e__62528__auto__ = e63638;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$lib$schema$expression_ref_error_for_stage_$_match_63610,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e63638;

}
}})(cljs.core.PersistentVector.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(stage,new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610)], 0))))));
});
metabase.lib.schema.aggregation_ref_error_for_stage = (function metabase$lib$schema$aggregation_ref_error_for_stage(stage){
var uuids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.second)),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(stage));
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$schema$aggregation_ref_error_for_stage_$_match_63649(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__63652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63652,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696))){
try{var _AMPERSAND_match_2__63654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(cljs.core.complement(uuids)(_AMPERSAND_match_2__63654))){
var ag_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Invalid :aggregation reference: no aggregation with uuid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ag_uuid)].join('')], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63657){if((e63657 instanceof Error)){
var e__62528__auto__ = e63657;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63657;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63656){if((e63656 instanceof Error)){
var e__62528__auto__ = e63656;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63656;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63655){if((e63655 instanceof Error)){
var e__62528__auto__ = e63655;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$lib$schema$aggregation_ref_error_for_stage_$_match_63649,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e63655;

}
}})(cljs.core.PersistentVector.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(stage,new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610)], 0))))));
});
/**
 * Validate references in the context of a single `stage`, independent of any previous stages. If there is an error with
 *   a reference, return a string describing the error.
 */
metabase.lib.schema.ref_error_for_stage = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression_ref_error_for_stage,metabase.lib.schema.aggregation_ref_error_for_stage);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.valid-refs","metabase.lib.schema/stage.valid-refs",-383625241),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid references for a single query stage",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__63660,_){
var map__63661 = p__63660;
var map__63661__$1 = cljs.core.__destructure_map(map__63661);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63661__$1,new cljs.core.Keyword(null,"value","value",305978217));
return metabase.lib.schema.ref_error_for_stage(value);
})], null),cljs.core.complement(metabase.lib.schema.ref_error_for_stage)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.join","joins","metabase.lib.schema.join/joins",106891649)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expressions","expressions",255689909),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","expressions","metabase.lib.schema.expression/expressions",790922225)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakout","breakout",-732419050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema","breakouts","metabase.lib.schema/breakouts",1354104361)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregations","metabase.lib.schema.aggregation/aggregations",-203649172)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema","fields","metabase.lib.schema/fields",-2010307316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema","filters","metabase.lib.schema/filters",889389881)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.order-by","order-bys","metabase.lib.schema.order-by/order-bys",-524479705)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","table","metabase.lib.schema.id/table",-583250693)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-card","source-card",-1580820390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","card","metabase.lib.schema.id/card",-801728009)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":source-query is not allowed in pMBQL queries."], null),(function (p1__63662_SHARP_){
return (!(cljs.core.contains_QMARK_(p1__63662_SHARP_,new cljs.core.Keyword(null,"source-query","source-query",198004422))));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"A query cannot have both a :source-table and a :source-card."], null),cljs.core.complement(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"source-card","source-card",-1580820390)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.valid-refs","metabase.lib.schema/stage.valid-refs",-383625241)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.mbql.with-source-table","metabase.lib.schema/stage.mbql.with-source-table",-2119049176),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","table","metabase.lib.schema.id/table",-583250693)], null)], null)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.mbql.with-source-card","metabase.lib.schema/stage.mbql.with-source-card",-1292215799),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-card","source-card",-1580820390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","card","metabase.lib.schema.id/card",-801728009)], null)], null)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.mbql.with-source","metabase.lib.schema/stage.mbql.with-source",1947556064),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.mbql.with-source-table","metabase.lib.schema/stage.mbql.with-source-table",-2119049176)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.mbql.with-source-card","metabase.lib.schema/stage.mbql.with-source-card",-1292215799)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.mbql.without-source","metabase.lib.schema/stage.mbql.without-source",1507072886),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Only the initial stage of a query can have a :source-table or :source-card."], null),cljs.core.complement(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"source-card","source-card",-1580820390)))], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.type","metabase.lib.schema/stage.type",1362996639),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage","metabase.lib.schema/stage",1626908550),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.schema","stage.type","metabase.lib.schema/stage.type",1362996639)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword("lib","type","lib/type",1175424801)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.native","metabase.lib.schema/stage.native",-1206212320)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388)], null)], null)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.initial","metabase.lib.schema/stage.initial",-1483255395),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.schema","stage.type","metabase.lib.schema/stage.type",1362996639)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword("lib","type","lib/type",1175424801)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.native","metabase.lib.schema/stage.native",-1206212320)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.mbql.with-source","metabase.lib.schema/stage.mbql.with-source",1947556064)], null)], null)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.additional","metabase.lib.schema/stage.additional",1347605157),new cljs.core.Keyword("metabase.lib.schema","stage.mbql.without-source","metabase.lib.schema/stage.mbql.without-source",1507072886));
/**
 * Apparently you're allowed to use a join alias for a join that appeared in any previous stage or the current stage, or
 *   *inside* any join in any previous stage or the current stage. Why? Who knows, but this is a real thing.
 *   See [[metabase.driver.sql.query-processor-test/join-source-queries-with-joins-test]] for example.
 * 
 *   This doesn't really make sense IMO (you should use string field refs to refer to things from a previous
 *   stage...right?) but for now we'll have to allow it until we can figure out how to go fix all of the old broken queries.
 * 
 *   Also, it's apparently legal to use a join alias to refer to a column that comes from a join in a source Card, and
 *   there is no way for us to know what joins exist in the source Card without a metadata provider, so we're just going
 *   to have to go ahead and skip validation in that case. Icky! But it's better than being overly strict and rejecting
 *   queries that the QP could have fixed.
 * 
 *   Anyways, this function returns a function with the signature:
 * 
 *  (visible-join-alias? <join-alias>) => boolean
 */
metabase.lib.schema.visible_join_alias_QMARK__fn = (function metabase$lib$schema$visible_join_alias_QMARK__fn(stage){
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(stage))){
return cljs.core.constantly(true);
} else {
var join_aliases_in_join = (function metabase$lib$schema$visible_join_alias_QMARK__fn_$_join_aliases_in_join(join){
return cljs.core.cons(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(join_aliases_in_stage,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(join)], 0)));
});
var join_aliases_in_stage = (function metabase$lib$schema$visible_join_alias_QMARK__fn_$_join_aliases_in_stage(stage__$1){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(join_aliases_in_join,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage__$1)], 0));
});
return cljs.core.set(join_aliases_in_stage(stage));
}
});
metabase.lib.schema.join_ref_error_for_stages = (function metabase$lib$schema$join_ref_error_for_stages(stages){
var visible_join_alias_QMARK_ = cljs.core.constantly(false);
var i = (0);
var G__63669 = stages;
var vec__63670 = G__63669;
var seq__63671 = cljs.core.seq(vec__63670);
var first__63672 = cljs.core.first(seq__63671);
var seq__63671__$1 = cljs.core.next(seq__63671);
var stage = first__63672;
var more = seq__63671__$1;
var visible_join_alias_QMARK___$1 = visible_join_alias_QMARK_;
var i__$1 = i;
var G__63669__$1 = G__63669;
while(true){
var visible_join_alias_QMARK___$2 = visible_join_alias_QMARK___$1;
var i__$2 = i__$1;
var vec__63673 = G__63669__$1;
var seq__63674 = cljs.core.seq(vec__63673);
var first__63675 = cljs.core.first(seq__63674);
var seq__63674__$1 = cljs.core.next(seq__63674);
var stage__$1 = first__63675;
var more__$1 = seq__63674__$1;
var visible_join_alias_QMARK___$3 = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(visible_join_alias_QMARK___$2,metabase.lib.schema.visible_join_alias_QMARK__fn(stage__$1));
var or__5045__auto__ = cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,((function (visible_join_alias_QMARK___$1,i__$1,G__63669__$1,visible_join_alias_QMARK___$3,visible_join_alias_QMARK___$2,i__$2,vec__63673,seq__63674,first__63675,seq__63674__$1,stage__$1,more__$1,visible_join_alias_QMARK_,i,G__63669,vec__63670,seq__63671,first__63672,seq__63671__$1,stage,more){
return (function metabase$lib$schema$join_ref_error_for_stages_$_match_63679(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__63688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63688,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_1__63689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"join-alias","join-alias",1454206794).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_1__63689))){
try{var _AMPERSAND_match_1__63689__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if((((!((_AMPERSAND_match_1__63689__$1 == null))))?(((((_AMPERSAND_match_1__63689__$1.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === _AMPERSAND_match_1__63689__$1.cljs$core$ILookup$))))?true:(((!_AMPERSAND_match_1__63689__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_1__63689__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_1__63689__$1))){
try{var _AMPERSAND_match_1__63689_join_alias__63701 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match_1__63689__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.truth_(cljs.core.complement(visible_join_alias_QMARK___$3)(_AMPERSAND_match_1__63689_join_alias__63701))){
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__63689__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Invalid :field reference in stage ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$2),": no join named ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([join_alias], 0))].join('')], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63728){if((e63728 instanceof Error)){
var e__62528__auto__ = e63728;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63728;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63717){if((e63717 instanceof Error)){
var e__62528__auto__ = e63717;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63717;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63715){if((e63715 instanceof Error)){
var e__62528__auto__ = e63715;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63715;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63713){if((e63713 instanceof Error)){
var e__62528__auto__ = e63713;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63713;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63712){if((e63712 instanceof Error)){
var e__62528__auto__ = e63712;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$lib$schema$join_ref_error_for_stages_$_match_63679,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e63712;

}
}});})(visible_join_alias_QMARK___$1,i__$1,G__63669__$1,visible_join_alias_QMARK___$3,visible_join_alias_QMARK___$2,i__$2,vec__63673,seq__63674,first__63675,seq__63674__$1,stage__$1,more__$1,visible_join_alias_QMARK_,i,G__63669,vec__63670,seq__63671,first__63672,seq__63671__$1,stage,more))
(cljs.core.PersistentVector.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(stage__$1,new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("stage","metadata","stage/metadata",1707239131)], 0))))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.seq(more__$1)){
var G__63763 = visible_join_alias_QMARK___$3;
var G__63764 = (i__$2 + (1));
var G__63765 = more__$1;
visible_join_alias_QMARK___$1 = G__63763;
i__$1 = G__63764;
G__63669__$1 = G__63765;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Like [[ref-error-for-stage]], but validate references in the context of a sequence of several stages; for validations
 *   that can't be done on the basis of just a single stage. For example join alias validation needs to take into account
 *   previous stages.
 */
metabase.lib.schema.ref_error_for_stages = metabase.lib.schema.join_ref_error_for_stages;
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stages.valid-refs","metabase.lib.schema/stages.valid-refs",-193458245),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid references for all query stages",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__63731,_){
var map__63733 = p__63731;
var map__63733__$1 = cljs.core.__destructure_map(map__63733);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63733__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (metabase.lib.schema.ref_error_for_stages.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.schema.ref_error_for_stages.cljs$core$IFn$_invoke$arity$1(value) : metabase.lib.schema.ref_error_for_stages.call(null,value));
})], null),cljs.core.complement(metabase.lib.schema.ref_error_for_stages)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stages","metabase.lib.schema/stages",-391672350),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.initial","metabase.lib.schema/stage.initial",-1483255395)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.additional","metabase.lib.schema/stage.additional",1347605157)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stages.valid-refs","metabase.lib.schema/stages.valid-refs",-193458245)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","query","metabase.lib.schema/query",-1207387140),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword("metabase.lib.schema.id","database","metabase.lib.schema.id/database",2063511424),new cljs.core.Keyword("metabase.lib.schema.id","saved-questions-virtual-database","metabase.lib.schema.id/saved-questions-virtual-database",700243236)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stages","metabase.lib.schema/stages",-391672350)], null)], null)], null),metabase.lib.schema.util.UniqueUUIDs], null));
Object.defineProperty(module.exports, "expression_ref_error_for_stage", { enumerable: false, get: function() { return metabase.lib.schema.expression_ref_error_for_stage; } });
Object.defineProperty(module.exports, "aggregation_ref_error_for_stage", { enumerable: false, get: function() { return metabase.lib.schema.aggregation_ref_error_for_stage; } });
Object.defineProperty(module.exports, "ref_error_for_stage", { enumerable: false, get: function() { return metabase.lib.schema.ref_error_for_stage; } });
Object.defineProperty(module.exports, "visible_join_alias_QMARK__fn", { enumerable: false, get: function() { return metabase.lib.schema.visible_join_alias_QMARK__fn; } });
Object.defineProperty(module.exports, "join_ref_error_for_stages", { enumerable: false, get: function() { return metabase.lib.schema.join_ref_error_for_stages; } });
Object.defineProperty(module.exports, "ref_error_for_stages", { enumerable: false, get: function() { return metabase.lib.schema.ref_error_for_stages; } });
//# sourceMappingURL=metabase.lib.schema.js.map
