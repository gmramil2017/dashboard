var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./medley.core.js");
require("./metabase.lib.common.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.types.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.expression.js");

goog.provide('metabase.lib.expression');
/**
 * Inputs: [metadata :- lib.metadata/ColumnMetadata]
 *   Return: :mbql.clause/expression
 *        
 * 
 *   Given `:metadata/column` column metadata for an expression, construct an `:expression` reference.
 */
metabase.lib.expression.column_metadata__GT_expression_ref = (function metabase$lib$expression$column_metadata__GT_expression_ref(metadata){

var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(metadata)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),options,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata)], null);
});
/**
 * Inputs: ([query expression-name]
 *         [query :- :metabase.lib.schema/query stage-number :- :int expression-name :- :metabase.lib.schema.common/non-blank-string])
 *   Return: :metabase.lib.schema.expression/expression
 *        
 * 
 *   Find the expression with `expression-name` in a given stage of a `query`, or throw an Exception if it doesn't
 *   exist.
 */
metabase.lib.expression.resolve_expression = (function metabase$lib$expression$resolve_expression(var_args){
var G__80180 = arguments.length;
switch (G__80180) {
case 2:
return metabase.lib.expression.resolve_expression.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.expression.resolve_expression.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.expression.resolve_expression.cljs$core$IFn$_invoke$arity$2 = (function (query,expression_name){

return metabase.lib.expression.resolve_expression.cljs$core$IFn$_invoke$arity$3(query,(-1),expression_name);
}));

(metabase.lib.expression.resolve_expression.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,expression_name){

var stage = metabase.lib.util.query_stage(query,stage_number);
var or__5045__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([expression_name]),metabase.lib.util.expression_name),new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(stage));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No expression named {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expression_name], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expression-name","expression-name",-1798450709),expression_name,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null));
}
}));

(metabase.lib.expression.resolve_expression.cljs$lang$maxFixedArity = 3);

metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (query,stage_number,p__80181){
var vec__80182 = p__80181;
var _expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80182,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80182,(1),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80182,(2),null);
var _expression_ref = vec__80182;
var expression = metabase.lib.expression.resolve_expression.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression_name);
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression);
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (query,stage_number,p__80185){
var vec__80186 = p__80185;
var _expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80186,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80186,(1),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80186,(2),null);
var expression_ref_clause = vec__80186;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"name","name",1843675177),expression_name,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression_ref_clause),new cljs.core.Keyword(null,"base-type","base-type",1167971299),metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression_ref_clause),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","expressions","source/expressions",-458367840)], null);
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","integer","dispatch-type/integer",1558418815),(function (_query,_stage_number,n,_style){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","number","dispatch-type/number",-594990247),(function (_query,_stage_number,n,_style){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","string","dispatch-type/string",171698561),(function (_query,_stage_number,s,_style){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (_query,_stage_number,p__80190,_style){
var vec__80191 = p__80190;
var _expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80191,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80191,(1),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80191,(2),null);
return expression_name;
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (_query,_stage_number,p__80194){
var vec__80195 = p__80194;
var _expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80195,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80195,(1),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80195,(2),null);
return expression_name;
}));
/**
 * Whether the display name we are generated is recursively nested inside another display name. For infix math operators
 *   we'll wrap the results in parentheses to make the display name more obvious.
 */
metabase.lib.expression._STAR_nested_STAR_ = false;
metabase.lib.expression.wrap_str_in_parens_if_nested = (function metabase$lib$expression$wrap_str_in_parens_if_nested(s){
if(cljs.core.truth_(metabase.lib.expression._STAR_nested_STAR_)){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join('');
} else {
return s;
}
});
/**
 * Generate a infix-style display name for an arithmetic expression like `:+`, e.g. `x + y`.
 */
metabase.lib.expression.infix_display_name = (function metabase$lib$expression$infix_display_name(query,stage_number,operator,args){
return metabase.lib.expression.wrap_str_in_parens_if_nested((function (){var _STAR_nested_STAR__orig_val__80204 = metabase.lib.expression._STAR_nested_STAR_;
var _STAR_nested_STAR__temp_val__80205 = true;
(metabase.lib.expression._STAR_nested_STAR_ = _STAR_nested_STAR__temp_val__80205);

try{return clojure.string.join.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.name(operator)," "].join(''),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(metabase.lib.metadata.calculation.display_name,query,stage_number),args));
}finally {(metabase.lib.expression._STAR_nested_STAR_ = _STAR_nested_STAR__orig_val__80204);
}})());
});
metabase.lib.expression.infix_operator_display_name = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"+","+",1913524883),"+",new cljs.core.Keyword(null,"-","-",-2112348439),"-",new cljs.core.Keyword(null,"*","*",-1294732318),"\u00D7",new cljs.core.Keyword(null,"/","/",1282502798),"\u00F7"], null);
var seq__80207_80686 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"/","/",1282502798),new cljs.core.Keyword(null,"*","*",-1294732318)], null));
var chunk__80208_80687 = null;
var count__80209_80688 = (0);
var i__80210_80689 = (0);
while(true){
if((i__80210_80689 < count__80209_80688)){
var tag_80694 = chunk__80208_80687.cljs$core$IIndexed$_nth$arity$2(null,i__80210_80689);
metabase.lib.hierarchy.derive(tag_80694,new cljs.core.Keyword("metabase.lib.expression","infix-operator","metabase.lib.expression/infix-operator",246733613));


var G__80695 = seq__80207_80686;
var G__80696 = chunk__80208_80687;
var G__80697 = count__80209_80688;
var G__80698 = (i__80210_80689 + (1));
seq__80207_80686 = G__80695;
chunk__80208_80687 = G__80696;
count__80209_80688 = G__80697;
i__80210_80689 = G__80698;
continue;
} else {
var temp__5804__auto___80699 = cljs.core.seq(seq__80207_80686);
if(temp__5804__auto___80699){
var seq__80207_80700__$1 = temp__5804__auto___80699;
if(cljs.core.chunked_seq_QMARK_(seq__80207_80700__$1)){
var c__5568__auto___80701 = cljs.core.chunk_first(seq__80207_80700__$1);
var G__80702 = cljs.core.chunk_rest(seq__80207_80700__$1);
var G__80703 = c__5568__auto___80701;
var G__80704 = cljs.core.count(c__5568__auto___80701);
var G__80705 = (0);
seq__80207_80686 = G__80702;
chunk__80208_80687 = G__80703;
count__80209_80688 = G__80704;
i__80210_80689 = G__80705;
continue;
} else {
var tag_80706 = cljs.core.first(seq__80207_80700__$1);
metabase.lib.hierarchy.derive(tag_80706,new cljs.core.Keyword("metabase.lib.expression","infix-operator","metabase.lib.expression/infix-operator",246733613));


var G__80707 = cljs.core.next(seq__80207_80700__$1);
var G__80708 = null;
var G__80709 = (0);
var G__80710 = (0);
seq__80207_80686 = G__80707;
chunk__80208_80687 = G__80708;
count__80209_80688 = G__80709;
i__80210_80689 = G__80710;
continue;
}
} else {
}
}
break;
}
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.expression","infix-operator","metabase.lib.expression/infix-operator",246733613),(function (query,stage_number,p__80214,_style){
var vec__80215 = p__80214;
var seq__80216 = cljs.core.seq(vec__80215);
var first__80217 = cljs.core.first(seq__80216);
var seq__80216__$1 = cljs.core.next(seq__80216);
var tag = first__80217;
var first__80217__$1 = cljs.core.first(seq__80216__$1);
var seq__80216__$2 = cljs.core.next(seq__80216__$1);
var _opts = first__80217__$1;
var args = seq__80216__$2;
return metabase.lib.expression.infix_display_name(query,stage_number,cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.infix_operator_display_name,tag),args);
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.expression","infix-operator","metabase.lib.expression/infix-operator",246733613),(function (_query,_stage_number,_expr){
return "expression";
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib.type-of","type-is-type-of-arithmetic-args","lib.type-of/type-is-type-of-arithmetic-args",-626871615),(function (query,stage_number,p__80218){
var vec__80219 = p__80218;
var seq__80220 = cljs.core.seq(vec__80219);
var first__80221 = cljs.core.first(seq__80220);
var seq__80220__$1 = cljs.core.next(seq__80220);
var _tag = first__80221;
var first__80221__$1 = cljs.core.first(seq__80220__$1);
var seq__80220__$2 = cljs.core.next(seq__80220__$1);
var _opts = first__80221__$1;
var args = seq__80220__$2;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(metabase.types.most_specific_common_ancestor,(function (){var iter__5523__auto__ = (function metabase$lib$expression$iter__80222(s__80223){
return (new cljs.core.LazySeq(null,(function (){
var s__80223__$1 = s__80223;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80223__$1);
if(temp__5804__auto__){
var s__80223__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80223__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__80223__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__80225 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__80224 = (0);
while(true){
if((i__80224 < size__5522__auto__)){
var arg = cljs.core._nth(c__5521__auto__,i__80224);
cljs.core.chunk_append(b__80225,metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,arg));

var G__80715 = (i__80224 + (1));
i__80224 = G__80715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80225),metabase$lib$expression$iter__80222(cljs.core.chunk_rest(s__80223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80225),null);
}
} else {
var arg = cljs.core.first(s__80223__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,arg),metabase$lib$expression$iter__80222(cljs.core.rest(s__80223__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(args);
})());
}));
metabase.lib.expression.interval_unit_str = (function metabase$lib$expression$interval_unit_str(amount,unit){
return clojure.string.lower_case(metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2(amount,unit));
});
/**
 * Inputs: [amount :- :int unit :- :metabase.lib.schema.temporal-bucketing/unit.date-time.interval]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   e.g. something like "- 2 days"
 */
metabase.lib.expression.interval_display_name = (function metabase$lib$expression$interval_display_name(amount,unit){

var unit_str = metabase.lib.expression.interval_unit_str(amount,unit);
return metabase.lib.expression.wrap_str_in_parens_if_nested((((amount > (0)))?(metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3("+ %d %s",amount,unit_str) : metabase.lib.util.format.call(null,"+ %d %s",amount,unit_str)):(function (){var G__80231 = "- %d %s";
var G__80232 = cljs.core.abs(amount);
var G__80233 = unit_str;
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3(G__80231,G__80232,G__80233) : metabase.lib.util.format.call(null,G__80231,G__80232,G__80233));
})()));
});
/**
 * Inputs: [amount :- :int unit :- :metabase.lib.schema.temporal-bucketing/unit.date-time.interval]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   e.g. something like `minus_2_days`
 */
metabase.lib.expression.interval_column_name = (function metabase$lib$expression$interval_column_name(amount,unit){

var unit_str = metabase.lib.expression.interval_unit_str(amount,unit);
if((amount > (0))){
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3("plus_%s_%s",amount,unit_str) : metabase.lib.util.format.call(null,"plus_%s_%s",amount,unit_str));
} else {
var G__80235 = "minus_%d_%s";
var G__80236 = cljs.core.abs(amount);
var G__80237 = unit_str;
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3(G__80235,G__80236,G__80237) : metabase.lib.util.format.call(null,G__80235,G__80236,G__80237));
}
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),(function (query,stage_number,p__80238,style){
var vec__80239 = p__80238;
var _datetime_add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80239,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80239,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80239,(2),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80239,(3),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80239,(4),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.expression.interval_display_name(amount,unit))].join('');
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),(function (query,stage_number,p__80243){
var vec__80244 = p__80243;
var _datetime_add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80244,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80244,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80244,(2),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80244,(3),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80244,(4),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,x)),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.expression.interval_column_name(amount,unit))].join('');
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"coalesce","coalesce",654622029),(function (query,stage_number,p__80247,style){
var vec__80248 = p__80247;
var _coalesce = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80248,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80248,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80248,(2),null);
var _null_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80248,(3),null);
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,expr,style);
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"coalesce","coalesce",654622029),(function (query,stage_number,p__80251){
var vec__80252 = p__80251;
var _coalesce = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80252,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80252,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80252,(2),null);
var _null_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80252,(3),null);
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,expr);
}));
metabase.lib.expression.conflicting_name_QMARK_ = (function metabase$lib$expression$conflicting_name_QMARK_(query,stage_number,expression_name){
var stage = metabase.lib.util.query_stage(query,stage_number);
var cols = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
var expr_name = metabase.util.lower_case_en(expression_name);
return cljs.core.some((function (p1__80255_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.util.lower_case_en(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__80255_SHARP_)),expr_name);
}),cols);
});
metabase.lib.expression.add_expression_to_stage = (function metabase$lib$expression$add_expression_to_stage(stage,expression){
var G__80258 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(stage,new cljs.core.Keyword(null,"expressions","expressions",255689909),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),expression);
if(cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(stage))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__80258,new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.conj,metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),cljs.core.PersistentArrayMap.EMPTY,metabase.lib.util.expression_name(expression)], null)));
} else {
return G__80258;
}
});
/**
 * Inputs: ([query expression-name expressionable]
 *         [query :- :metabase.lib.schema/query stage-number :- [:maybe :int] expression-name :- :metabase.lib.schema.common/non-blank-string expressionable])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Adds an expression to query.
 */
metabase.lib.expression.expression = (function metabase$lib$expression$expression(var_args){
var G__80272 = arguments.length;
switch (G__80272) {
case 3:
return metabase.lib.expression.expression.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.expression.expression.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.expression.expression.cljs$core$IFn$_invoke$arity$3 = (function (query,expression_name,expressionable){

return metabase.lib.expression.expression.cljs$core$IFn$_invoke$arity$4(query,(-1),expression_name,expressionable);
}));

(metabase.lib.expression.expression.cljs$core$IFn$_invoke$arity$4 = (function (query,stage_number,expression_name,expressionable){

var stage_number__$1 = (function (){var or__5045__auto__ = stage_number;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-1);
}
})();
if(cljs.core.truth_(metabase.lib.expression.conflicting_name_QMARK_(query,stage_number__$1,expression_name))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Expression name conflicts with a column in the same query stage",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expression-name","expression-name",-1798450709),expression_name], null));
} else {
}

return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number__$1,metabase.lib.expression.add_expression_to_stage,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.util.named_expression_clause(metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(expressionable),expression_name)], 0));
}));

(metabase.lib.expression.expression.cljs$lang$maxFixedArity = 4);

/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/+
 *        
 * 
 *   Create a standalone clause of type `+`.
 */
metabase.lib.expression._PLUS_ = (function metabase$lib$expression$_PLUS_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___80736 = arguments.length;
var i__5770__auto___80737 = (0);
while(true){
if((i__5770__auto___80737 < len__5769__auto___80736)){
args__5775__auto__.push((arguments[i__5770__auto___80737]));

var G__80738 = (i__5770__auto___80737 + (1));
i__5770__auto___80737 = G__80738;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.expression._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.expression._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"+","+",1913524883),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
}));

(metabase.lib.expression._PLUS_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.expression._PLUS_.cljs$lang$applyTo = (function (seq80287){
var G__80288 = cljs.core.first(seq80287);
var seq80287__$1 = cljs.core.next(seq80287);
var G__80289 = cljs.core.first(seq80287__$1);
var seq80287__$2 = cljs.core.next(seq80287__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80288,G__80289,seq80287__$2);
}));

/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/-
 *        
 * 
 *   Create a standalone clause of type `-`.
 */
metabase.lib.expression._ = (function metabase$lib$expression$_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___80741 = arguments.length;
var i__5770__auto___80742 = (0);
while(true){
if((i__5770__auto___80742 < len__5769__auto___80741)){
args__5775__auto__.push((arguments[i__5770__auto___80742]));

var G__80743 = (i__5770__auto___80742 + (1));
i__5770__auto___80742 = G__80743;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.expression._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.expression._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"-","-",-2112348439),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
}));

(metabase.lib.expression._.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.expression._.cljs$lang$applyTo = (function (seq80302){
var G__80303 = cljs.core.first(seq80302);
var seq80302__$1 = cljs.core.next(seq80302);
var G__80304 = cljs.core.first(seq80302__$1);
var seq80302__$2 = cljs.core.next(seq80302__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80303,G__80304,seq80302__$2);
}));

/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/*
 *        
 * 
 *   Create a standalone clause of type `*`.
 */
metabase.lib.expression._STAR_ = (function metabase$lib$expression$_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___80748 = arguments.length;
var i__5770__auto___80749 = (0);
while(true){
if((i__5770__auto___80749 < len__5769__auto___80748)){
args__5775__auto__.push((arguments[i__5770__auto___80749]));

var G__80750 = (i__5770__auto___80749 + (1));
i__5770__auto___80749 = G__80750;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.expression._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.expression._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
}));

(metabase.lib.expression._STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.expression._STAR_.cljs$lang$applyTo = (function (seq80306){
var G__80307 = cljs.core.first(seq80306);
var seq80306__$1 = cljs.core.next(seq80306);
var G__80308 = cljs.core.first(seq80306__$1);
var seq80306__$2 = cljs.core.next(seq80306__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80307,G__80308,seq80306__$2);
}));

/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause//
 *        
 * 
 *   Create a standalone clause of type `/`.
 */
metabase.lib.expression._SLASH_ = (function metabase$lib$expression$_SLASH_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___80751 = arguments.length;
var i__5770__auto___80752 = (0);
while(true){
if((i__5770__auto___80752 < len__5769__auto___80751)){
args__5775__auto__.push((arguments[i__5770__auto___80752]));

var G__80753 = (i__5770__auto___80752 + (1));
i__5770__auto___80752 = G__80753;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.expression._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.expression._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"/","/",1282502798),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
}));

(metabase.lib.expression._SLASH_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.expression._SLASH_.cljs$lang$applyTo = (function (seq80313){
var G__80314 = cljs.core.first(seq80313);
var seq80313__$1 = cljs.core.next(seq80313);
var G__80315 = cljs.core.first(seq80313__$1);
var seq80313__$2 = cljs.core.next(seq80313__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80314,G__80315,seq80313__$2);
}));

/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/case
 *        
 * 
 *   Create a standalone clause of type `case`.
 */
metabase.lib.expression.case$ = (function metabase$lib$expression$case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___80754 = arguments.length;
var i__5770__auto___80755 = (0);
while(true){
if((i__5770__auto___80755 < len__5769__auto___80754)){
args__5775__auto__.push((arguments[i__5770__auto___80755]));

var G__80756 = (i__5770__auto___80755 + (1));
i__5770__auto___80755 = G__80756;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.expression.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.expression.case$.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"case","case",1143702196),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
}));

(metabase.lib.expression.case$.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.expression.case$.cljs$lang$applyTo = (function (seq80323){
var G__80324 = cljs.core.first(seq80323);
var seq80323__$1 = cljs.core.next(seq80323);
var G__80325 = cljs.core.first(seq80323__$1);
var seq80323__$2 = cljs.core.next(seq80323__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80324,G__80325,seq80323__$2);
}));

/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/coalesce
 *        
 * 
 *   Create a standalone clause of type `coalesce`.
 */
metabase.lib.expression.coalesce = (function metabase$lib$expression$coalesce(var_args){
var args__5775__auto__ = [];
var len__5769__auto___80757 = arguments.length;
var i__5770__auto___80758 = (0);
while(true){
if((i__5770__auto___80758 < len__5769__auto___80757)){
args__5775__auto__.push((arguments[i__5770__auto___80758]));

var G__80791 = (i__5770__auto___80758 + (1));
i__5770__auto___80758 = G__80791;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.expression.coalesce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.expression.coalesce.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"coalesce","coalesce",654622029),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
}));

(metabase.lib.expression.coalesce.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.expression.coalesce.cljs$lang$applyTo = (function (seq80332){
var G__80333 = cljs.core.first(seq80332);
var seq80332__$1 = cljs.core.next(seq80332);
var G__80334 = cljs.core.first(seq80332__$1);
var seq80332__$2 = cljs.core.next(seq80332__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80333,G__80334,seq80332__$2);
}));

/**
 * Inputs: ([x])
 *   Return: :mbql.clause/abs
 *        
 * 
 *   Create a standalone clause of type `abs`.
 */
metabase.lib.expression.abs = (function metabase$lib$expression$abs(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/log
 *        
 * 
 *   Create a standalone clause of type `log`.
 */
metabase.lib.expression.log = (function metabase$lib$expression$log(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/exp
 *        
 * 
 *   Create a standalone clause of type `exp`.
 */
metabase.lib.expression.exp = (function metabase$lib$expression$exp(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/sqrt
 *        
 * 
 *   Create a standalone clause of type `sqrt`.
 */
metabase.lib.expression.sqrt = (function metabase$lib$expression$sqrt(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/ceil
 *        
 * 
 *   Create a standalone clause of type `ceil`.
 */
metabase.lib.expression.ceil = (function metabase$lib$expression$ceil(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/floor
 *        
 * 
 *   Create a standalone clause of type `floor`.
 */
metabase.lib.expression.floor = (function metabase$lib$expression$floor(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/round
 *        
 * 
 *   Create a standalone clause of type `round`.
 */
metabase.lib.expression.round = (function metabase$lib$expression$round(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"round","round",2009433328),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([n expo])
 *   Return: :mbql.clause/power
 *        
 * 
 *   Create a standalone clause of type `power`.
 */
metabase.lib.expression.power = (function metabase$lib$expression$power(n,expo){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,expo], null));
});
/**
 * Inputs: ([n unit])
 *   Return: :mbql.clause/interval
 *        
 * 
 *   Create a standalone clause of type `interval`.
 */
metabase.lib.expression.interval = (function metabase$lib$expression$interval(n,unit){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"interval","interval",1708495417),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,unit], null));
});
/**
 * Inputs: ([t unit])
 *   Return: :mbql.clause/relative-datetime
 *        
 * 
 *   Create a standalone clause of type `relative-datetime`.
 */
metabase.lib.expression.relative_datetime = (function metabase$lib$expression$relative_datetime(t,unit){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,unit], null));
});
/**
 * Inputs: ([t unit])
 *   Return: :mbql.clause/time
 *        
 * 
 *   Create a standalone clause of type `time`.
 */
metabase.lib.expression.time = (function metabase$lib$expression$time(t,unit){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,unit], null));
});
/**
 * Inputs: ([t unit])
 *   Return: :mbql.clause/absolute-datetime
 *        
 * 
 *   Create a standalone clause of type `absolute-datetime`.
 */
metabase.lib.expression.absolute_datetime = (function metabase$lib$expression$absolute_datetime(t,unit){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"absolute-datetime","absolute-datetime",-560340465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,unit], null));
});
/**
 * Inputs: ([])
 *   Return: :mbql.clause/now
 *        
 * 
 *   Create a standalone clause of type `now`.
 */
metabase.lib.expression.now = (function metabase$lib$expression$now(){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"now","now",-1650525531),cljs.core.PersistentVector.EMPTY);
});
/**
 * Inputs: ([t source dest])
 *   Return: :mbql.clause/convert-timezone
 *        
 * 
 *   Create a standalone clause of type `convert-timezone`.
 */
metabase.lib.expression.convert_timezone = (function metabase$lib$expression$convert_timezone(t,source,dest){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"convert-timezone","convert-timezone",-124803001),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,source,dest], null));
});
/**
 * Inputs: ([t mode])
 *   Return: :mbql.clause/get-week
 *        
 * 
 *   Create a standalone clause of type `get-week`.
 */
metabase.lib.expression.get_week = (function metabase$lib$expression$get_week(t,mode){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-week","get-week",-888059349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,mode], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-year
 *        
 * 
 *   Create a standalone clause of type `get-year`.
 */
metabase.lib.expression.get_year = (function metabase$lib$expression$get_year(t){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-year","get-year",-936011274),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-month
 *        
 * 
 *   Create a standalone clause of type `get-month`.
 */
metabase.lib.expression.get_month = (function metabase$lib$expression$get_month(t){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-month","get-month",-369374731),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-day
 *        
 * 
 *   Create a standalone clause of type `get-day`.
 */
metabase.lib.expression.get_day = (function metabase$lib$expression$get_day(t){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-day","get-day",127568857),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-hour
 *        
 * 
 *   Create a standalone clause of type `get-hour`.
 */
metabase.lib.expression.get_hour = (function metabase$lib$expression$get_hour(t){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-hour","get-hour",622714059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-minute
 *        
 * 
 *   Create a standalone clause of type `get-minute`.
 */
metabase.lib.expression.get_minute = (function metabase$lib$expression$get_minute(t){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-minute","get-minute",1468086343),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-second
 *        
 * 
 *   Create a standalone clause of type `get-second`.
 */
metabase.lib.expression.get_second = (function metabase$lib$expression$get_second(t){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-second","get-second",-2065946318),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-quarter
 *        
 * 
 *   Create a standalone clause of type `get-quarter`.
 */
metabase.lib.expression.get_quarter = (function metabase$lib$expression$get_quarter(t){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-quarter","get-quarter",1327778593),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t i unit])
 *   Return: :mbql.clause/datetime-add
 *        
 * 
 *   Create a standalone clause of type `datetime-add`.
 */
metabase.lib.expression.datetime_add = (function metabase$lib$expression$datetime_add(t,i,unit){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,i,unit], null));
});
/**
 * Inputs: ([t i unit])
 *   Return: :mbql.clause/datetime-subtract
 *        
 * 
 *   Create a standalone clause of type `datetime-subtract`.
 */
metabase.lib.expression.datetime_subtract = (function metabase$lib$expression$datetime_subtract(t,i,unit){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"datetime-subtract","datetime-subtract",275307697),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,i,unit], null));
});
/**
 * Inputs: ([s1 s2 & more])
 *   Return: :mbql.clause/concat
 *        
 * 
 *   Create a standalone clause of type `concat`.
 */
metabase.lib.expression.concat = (function metabase$lib$expression$concat(var_args){
var args__5775__auto__ = [];
var len__5769__auto___80848 = arguments.length;
var i__5770__auto___80849 = (0);
while(true){
if((i__5770__auto___80849 < len__5769__auto___80848)){
args__5775__auto__.push((arguments[i__5770__auto___80849]));

var G__80854 = (i__5770__auto___80849 + (1));
i__5770__auto___80849 = G__80854;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.expression.concat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.expression.concat.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,more){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"concat","concat",-2108183992),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(s1,s2,more));
}));

(metabase.lib.expression.concat.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.expression.concat.cljs$lang$applyTo = (function (seq80480){
var G__80481 = cljs.core.first(seq80480);
var seq80480__$1 = cljs.core.next(seq80480);
var G__80482 = cljs.core.first(seq80480__$1);
var seq80480__$2 = cljs.core.next(seq80480__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80481,G__80482,seq80480__$2);
}));

/**
 * Inputs: ([s start end])
 *   Return: :mbql.clause/substring
 *        
 * 
 *   Create a standalone clause of type `substring`.
 */
metabase.lib.expression.substring = (function metabase$lib$expression$substring(s,start,end){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"substring","substring",1140866276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,start,end], null));
});
/**
 * Inputs: ([s search replacement])
 *   Return: :mbql.clause/replace
 *        
 * 
 *   Create a standalone clause of type `replace`.
 */
metabase.lib.expression.replace = (function metabase$lib$expression$replace(s,search,replacement){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,search,replacement], null));
});
/**
 * Inputs: ([s regex])
 *   Return: :mbql.clause/regexextract
 *        
 * 
 *   Create a standalone clause of type `regexextract`.
 */
metabase.lib.expression.regexextract = (function metabase$lib$expression$regexextract(s,regex){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"regexextract","regexextract",689742894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,regex], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/length
 *        
 * 
 *   Create a standalone clause of type `length`.
 */
metabase.lib.expression.length = (function metabase$lib$expression$length(s){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/trim
 *        
 * 
 *   Create a standalone clause of type `trim`.
 */
metabase.lib.expression.trim = (function metabase$lib$expression$trim(s){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"trim","trim",774319767),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/ltrim
 *        
 * 
 *   Create a standalone clause of type `ltrim`.
 */
metabase.lib.expression.ltrim = (function metabase$lib$expression$ltrim(s){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"ltrim","ltrim",1654269283),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/rtrim
 *        
 * 
 *   Create a standalone clause of type `rtrim`.
 */
metabase.lib.expression.rtrim = (function metabase$lib$expression$rtrim(s){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"rtrim","rtrim",-661336449),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/upper
 *        
 * 
 *   Create a standalone clause of type `upper`.
 */
metabase.lib.expression.upper = (function metabase$lib$expression$upper(s){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"upper","upper",246243906),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/lower
 *        
 * 
 *   Create a standalone clause of type `lower`.
 */
metabase.lib.expression.lower = (function metabase$lib$expression$lower(s){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"lower","lower",1120320821),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int expression-definition :- :metabase.lib.schema.expression/expression]
 *   Return: lib.metadata/ColumnMetadata
 */
metabase.lib.expression.expression_metadata = (function metabase$lib$expression$expression_metadata(query,stage_number,expression_definition){

var expression_name = metabase.lib.util.expression_name(expression_definition);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression_definition),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","expressions","source/expressions",-458367840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),expression_name,new cljs.core.Keyword(null,"display-name","display-name",694513143),expression_name], 0));
});
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential lib.metadata/ColumnMetadata]]
 *        
 * 
 *   Get metadata about the expressions in a given stage of a `query`.
 */
metabase.lib.expression.expressions_metadata = (function metabase$lib$expression$expressions_metadata(var_args){
var G__80606 = arguments.length;
switch (G__80606) {
case 1:
return metabase.lib.expression.expressions_metadata.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.expression.expressions_metadata.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.expression.expressions_metadata.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.expression.expressions_metadata.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.expression.expressions_metadata.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

var G__80644 = cljs.core.not_empty(new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if((G__80644 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(metabase.lib.expression.expression_metadata,query,stage_number),G__80644);
}
}));

(metabase.lib.expression.expressions_metadata.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe :metabase.lib.schema.expression/expressions]
 *        
 * 
 *   Get the expressions map from a given stage of a `query`.
 */
metabase.lib.expression.expressions = (function metabase$lib$expression$expressions(var_args){
var G__80649 = arguments.length;
switch (G__80649) {
case 1:
return metabase.lib.expression.expressions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.expression.expressions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.expression.expressions.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.expression.expressions.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.expression.expressions.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

return cljs.core.not_empty(new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
}));

(metabase.lib.expression.expressions.cljs$lang$maxFixedArity = 2);

metabase.lib.ref.ref_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (expression_clause){
return expression_clause;
}));
/**
 * Inputs: ([query :- :metabase.lib.schema/query expression-position :- [:maybe :metabase.lib.schema.common/int-greater-than-or-equal-to-zero]]
 *         [query :- :metabase.lib.schema/query stage-number :- :int expression-position :- [:maybe :metabase.lib.schema.common/int-greater-than-or-equal-to-zero]])
 *   Return: [:sequential lib.metadata/ColumnMetadata]
 *        
 * 
 *   Get column metadata for all the columns that can be used expressions in
 *   the stage number `stage-number` of the query `query` and in expression index `expression-position`
 *   If `stage-number` is omitted, the last stage is used.
 *   Pass nil to `expression-position` for new expressions.
 *   The rules for determining which columns can be broken out by are as follows:
 * 
 *   1. custom `:expressions` in this stage of the query, that come before the `expression-position`
 * 
 *   2. Fields 'exported' by the previous stage of the query, if there is one;
 *   otherwise Fields from the current `:source-table`
 * 
 *   3. Fields exported by explicit joins
 * 
 *   4. Fields in Tables that are implicitly joinable.
 */
metabase.lib.expression.expressionable_columns = (function metabase$lib$expression$expressionable_columns(var_args){
var G__80652 = arguments.length;
switch (G__80652) {
case 2:
return metabase.lib.expression.expressionable_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.expression.expressionable_columns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.expression.expressionable_columns.cljs$core$IFn$_invoke$arity$2 = (function (query,expression_position){

return metabase.lib.expression.expressionable_columns.cljs$core$IFn$_invoke$arity$3(query,(-1),expression_position);
}));

(metabase.lib.expression.expressionable_columns.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,expression_position){

var indexed_expressions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,expr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.util.expression_name(expr),idx], null);
}),metabase.lib.expression.expressions.cljs$core$IFn$_invoke$arity$2(query,stage_number)));
var unavailable_expressions = (function (column){
return ((cljs.core.not(expression_position)) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","expressions","source/expressions",-458367840))) || ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(indexed_expressions,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column)) < expression_position)))));
});
var stage = metabase.lib.util.query_stage(query,stage_number);
var columns = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
return cljs.core.not_empty(cljs.core.filterv(unavailable_expressions,columns));
}));

(metabase.lib.expression.expressionable_columns.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: ([query expression-name]
 *         [query :- :metabase.lib.schema/query stage-number :- :int expression-name :- :metabase.lib.schema.common/non-blank-string])
 *   Return: :mbql.clause/expression
 *        
 * 
 *   Find the expression with `expression-name` using [[resolve-expression]], then create a ref for it. Intended for use
 *   when creating queries using threading macros e.g.
 * 
 *  (-> (lib/query ...)
 *      (lib/expression "My Expression" ...)
 *      (as-> <> (lib/aggregate <> (lib/avg (lib/expression-ref <> "My Expression")))))
 */
metabase.lib.expression.expression_ref = (function metabase$lib$expression$expression_ref(var_args){
var G__80655 = arguments.length;
switch (G__80655) {
case 2:
return metabase.lib.expression.expression_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.expression.expression_ref.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.expression.expression_ref.cljs$core$IFn$_invoke$arity$2 = (function (query,expression_name){

return metabase.lib.expression.expression_ref.cljs$core$IFn$_invoke$arity$3(query,(-1),expression_name);
}));

(metabase.lib.expression.expression_ref.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,expression_name){

return metabase.lib.ref.ref(metabase.lib.expression.expression_metadata(query,stage_number,metabase.lib.expression.resolve_expression.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression_name)));
}));

(metabase.lib.expression.expression_ref.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "interval", { enumerable: false, get: function() { return metabase.lib.expression.interval; } });
Object.defineProperty(module.exports, "get_day", { enumerable: false, get: function() { return metabase.lib.expression.get_day; } });
Object.defineProperty(module.exports, "log", { enumerable: false, get: function() { return metabase.lib.expression.log; } });
Object.defineProperty(module.exports, "column_metadata__GT_expression_ref", { enumerable: false, get: function() { return metabase.lib.expression.column_metadata__GT_expression_ref; } });
Object.defineProperty(module.exports, "floor", { enumerable: false, get: function() { return metabase.lib.expression.floor; } });
Object.defineProperty(module.exports, "resolve_expression", { enumerable: false, get: function() { return metabase.lib.expression.resolve_expression; } });
Object.defineProperty(module.exports, "relative_datetime", { enumerable: false, get: function() { return metabase.lib.expression.relative_datetime; } });
Object.defineProperty(module.exports, "rtrim", { enumerable: false, get: function() { return metabase.lib.expression.rtrim; } });
Object.defineProperty(module.exports, "ceil", { enumerable: false, get: function() { return metabase.lib.expression.ceil; } });
Object.defineProperty(module.exports, "expression_metadata", { enumerable: false, get: function() { return metabase.lib.expression.expression_metadata; } });
Object.defineProperty(module.exports, "interval_column_name", { enumerable: false, get: function() { return metabase.lib.expression.interval_column_name; } });
Object.defineProperty(module.exports, "get_quarter", { enumerable: false, get: function() { return metabase.lib.expression.get_quarter; } });
Object.defineProperty(module.exports, "conflicting_name_QMARK_", { enumerable: false, get: function() { return metabase.lib.expression.conflicting_name_QMARK_; } });
Object.defineProperty(module.exports, "upper", { enumerable: false, get: function() { return metabase.lib.expression.upper; } });
Object.defineProperty(module.exports, "_STAR_", { enumerable: false, get: function() { return metabase.lib.expression._STAR_; } });
Object.defineProperty(module.exports, "ltrim", { enumerable: false, get: function() { return metabase.lib.expression.ltrim; } });
Object.defineProperty(module.exports, "expression", { enumerable: false, get: function() { return metabase.lib.expression.expression; } });
Object.defineProperty(module.exports, "substring", { enumerable: false, get: function() { return metabase.lib.expression.substring; } });
Object.defineProperty(module.exports, "expressions_metadata", { enumerable: false, get: function() { return metabase.lib.expression.expressions_metadata; } });
Object.defineProperty(module.exports, "now", { enumerable: false, get: function() { return metabase.lib.expression.now; } });
Object.defineProperty(module.exports, "replace", { enumerable: false, get: function() { return metabase.lib.expression.replace; } });
Object.defineProperty(module.exports, "add_expression_to_stage", { enumerable: false, get: function() { return metabase.lib.expression.add_expression_to_stage; } });
Object.defineProperty(module.exports, "sqrt", { enumerable: false, get: function() { return metabase.lib.expression.sqrt; } });
Object.defineProperty(module.exports, "convert_timezone", { enumerable: false, get: function() { return metabase.lib.expression.convert_timezone; } });
Object.defineProperty(module.exports, "get_minute", { enumerable: false, get: function() { return metabase.lib.expression.get_minute; } });
Object.defineProperty(module.exports, "concat", { enumerable: false, get: function() { return metabase.lib.expression.concat; } });
Object.defineProperty(module.exports, "infix_display_name", { enumerable: false, get: function() { return metabase.lib.expression.infix_display_name; } });
Object.defineProperty(module.exports, "_", { enumerable: false, get: function() { return metabase.lib.expression._; } });
Object.defineProperty(module.exports, "exp", { enumerable: false, get: function() { return metabase.lib.expression.exp; } });
Object.defineProperty(module.exports, "time", { enumerable: false, get: function() { return metabase.lib.expression.time; } });
Object.defineProperty(module.exports, "get_week", { enumerable: false, get: function() { return metabase.lib.expression.get_week; } });
Object.defineProperty(module.exports, "get_hour", { enumerable: false, get: function() { return metabase.lib.expression.get_hour; } });
Object.defineProperty(module.exports, "_STAR_nested_STAR_", { enumerable: false, get: function() { return metabase.lib.expression._STAR_nested_STAR_; } });
Object.defineProperty(module.exports, "infix_operator_display_name", { enumerable: false, get: function() { return metabase.lib.expression.infix_operator_display_name; } });
Object.defineProperty(module.exports, "coalesce", { enumerable: false, get: function() { return metabase.lib.expression.coalesce; } });
Object.defineProperty(module.exports, "expression_ref", { enumerable: false, get: function() { return metabase.lib.expression.expression_ref; } });
Object.defineProperty(module.exports, "regexextract", { enumerable: false, get: function() { return metabase.lib.expression.regexextract; } });
Object.defineProperty(module.exports, "_SLASH_", { enumerable: false, get: function() { return metabase.lib.expression._SLASH_; } });
Object.defineProperty(module.exports, "absolute_datetime", { enumerable: false, get: function() { return metabase.lib.expression.absolute_datetime; } });
Object.defineProperty(module.exports, "interval_unit_str", { enumerable: false, get: function() { return metabase.lib.expression.interval_unit_str; } });
Object.defineProperty(module.exports, "round", { enumerable: false, get: function() { return metabase.lib.expression.round; } });
Object.defineProperty(module.exports, "power", { enumerable: false, get: function() { return metabase.lib.expression.power; } });
Object.defineProperty(module.exports, "datetime_subtract", { enumerable: false, get: function() { return metabase.lib.expression.datetime_subtract; } });
Object.defineProperty(module.exports, "wrap_str_in_parens_if_nested", { enumerable: false, get: function() { return metabase.lib.expression.wrap_str_in_parens_if_nested; } });
Object.defineProperty(module.exports, "expressionable_columns", { enumerable: false, get: function() { return metabase.lib.expression.expressionable_columns; } });
Object.defineProperty(module.exports, "get_second", { enumerable: false, get: function() { return metabase.lib.expression.get_second; } });
Object.defineProperty(module.exports, "interval_display_name", { enumerable: false, get: function() { return metabase.lib.expression.interval_display_name; } });
Object.defineProperty(module.exports, "_PLUS_", { enumerable: false, get: function() { return metabase.lib.expression._PLUS_; } });
Object.defineProperty(module.exports, "abs", { enumerable: false, get: function() { return metabase.lib.expression.abs; } });
Object.defineProperty(module.exports, "datetime_add", { enumerable: false, get: function() { return metabase.lib.expression.datetime_add; } });
Object.defineProperty(module.exports, "case$", { enumerable: false, get: function() { return metabase.lib.expression.case$; } });
Object.defineProperty(module.exports, "get_month", { enumerable: false, get: function() { return metabase.lib.expression.get_month; } });
Object.defineProperty(module.exports, "expressions", { enumerable: false, get: function() { return metabase.lib.expression.expressions; } });
Object.defineProperty(module.exports, "lower", { enumerable: false, get: function() { return metabase.lib.expression.lower; } });
Object.defineProperty(module.exports, "length", { enumerable: false, get: function() { return metabase.lib.expression.length; } });
Object.defineProperty(module.exports, "get_year", { enumerable: false, get: function() { return metabase.lib.expression.get_year; } });
Object.defineProperty(module.exports, "trim", { enumerable: false, get: function() { return metabase.lib.expression.trim; } });
//# sourceMappingURL=metabase.lib.expression.js.map
