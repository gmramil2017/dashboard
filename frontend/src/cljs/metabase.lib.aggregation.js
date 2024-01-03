var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.common.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.aggregation.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.types.isa.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.aggregation.js");

goog.provide('metabase.lib.aggregation');
/**
 * Inputs: [metadata :- lib.metadata/ColumnMetadata]
 *   Return: :mbql.clause/aggregation
 *        
 * 
 *   Given `:metadata/column` column metadata for an aggregation, construct an `:aggregation` reference.
 */
metabase.lib.aggregation.column_metadata__GT_aggregation_ref = (function metabase$lib$aggregation$column_metadata__GT_aggregation_ref(metadata){

var options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(metadata)], null);
var ag_uuid = new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(ag_uuid)){
} else {
throw (new Error(["Assert failed: ","Metadata for an aggregation reference should include :lib/source-uuid","\n","ag-uuid"].join('')));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),options,ag_uuid], null);
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int ag-uuid :- :string]
 *   Return: :metabase.lib.schema.aggregation/aggregation
 *        
 * 
 *   Resolve an aggregation with a specific `index`.
 */
metabase.lib.aggregation.resolve_aggregation = (function metabase$lib$aggregation$resolve_aggregation(query,stage_number,ag_uuid){

var map__79572 = metabase.lib.util.query_stage(query,stage_number);
var map__79572__$1 = cljs.core.__destructure_map(map__79572);
var aggregations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79572__$1,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696));
var found = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([ag_uuid]),new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.second),aggregations);
if(cljs.core.truth_(found)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No aggregation with uuid {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ag_uuid], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),ag_uuid,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null));
}

return found;
});
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (query,stage_number,_k){
var temp__5804__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if(cljs.core.truth_(temp__5804__auto__)){
var aggregations = temp__5804__auto__;
return metabase.lib.util.join_strings_with_conjunction(metabase.shared.util.i18n.js_i18n("and"),(function (){var iter__5523__auto__ = (function metabase$lib$aggregation$iter__79573(s__79574){
return (new cljs.core.LazySeq(null,(function (){
var s__79574__$1 = s__79574;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__79574__$1);
if(temp__5804__auto____$1){
var s__79574__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79574__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__79574__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__79576 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__79575 = (0);
while(true){
if((i__79575 < size__5522__auto__)){
var aggregation = cljs.core._nth(c__5521__auto__,i__79575);
cljs.core.chunk_append(b__79576,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,aggregation,new cljs.core.Keyword(null,"long","long",-171452093)));

var G__80068 = (i__79575 + (1));
i__79575 = G__80068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79576),metabase$lib$aggregation$iter__79573(cljs.core.chunk_rest(s__79574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79576),null);
}
} else {
var aggregation = cljs.core.first(s__79574__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,aggregation,new cljs.core.Keyword(null,"long","long",-171452093)),metabase$lib$aggregation$iter__79573(cljs.core.rest(s__79574__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(aggregations);
})());
} else {
return null;
}
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (query,stage_number,p__79577){
var vec__79578 = p__79577;
var _ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79578,(0),null);
var map__79581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79578,(1),null);
var map__79581__$1 = cljs.core.__destructure_map(map__79581);
var _opts = map__79581__$1;
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79581__$1,new cljs.core.Keyword(null,"base-type","base-type",1167971299));
var effective_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79581__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458));
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79578,(2),null);
var _aggregation_ref = vec__79578;
var aggregation = metabase.lib.aggregation.resolve_aggregation(query,stage_number,index);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,aggregation),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137),new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(cljs.core.second(aggregation))], null),(cljs.core.truth_(base_type)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),base_type], null):null),(cljs.core.truth_(effective_type)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),effective_type], null):null)], 0));
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (query,stage_number,p__79582,style){
var vec__79583 = p__79582;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79583,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79583,(1),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79583,(2),null);
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.aggregation.resolve_aggregation(query,stage_number,index),style);
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
var seq__79586_80077 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543)], null));
var chunk__79587_80078 = null;
var count__79588_80079 = (0);
var i__79589_80080 = (0);
while(true){
if((i__79589_80080 < count__79588_80079)){
var tag_80081 = chunk__79587_80078.cljs$core$IIndexed$_nth$arity$2(null,i__79589_80080);
metabase.lib.hierarchy.derive(tag_80081,new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018));


var G__80082 = seq__79586_80077;
var G__80083 = chunk__79587_80078;
var G__80084 = count__79588_80079;
var G__80085 = (i__79589_80080 + (1));
seq__79586_80077 = G__80082;
chunk__79587_80078 = G__80083;
count__79588_80079 = G__80084;
i__79589_80080 = G__80085;
continue;
} else {
var temp__5804__auto___80086 = cljs.core.seq(seq__79586_80077);
if(temp__5804__auto___80086){
var seq__79586_80087__$1 = temp__5804__auto___80086;
if(cljs.core.chunked_seq_QMARK_(seq__79586_80087__$1)){
var c__5568__auto___80088 = cljs.core.chunk_first(seq__79586_80087__$1);
var G__80089 = cljs.core.chunk_rest(seq__79586_80087__$1);
var G__80090 = c__5568__auto___80088;
var G__80091 = cljs.core.count(c__5568__auto___80088);
var G__80092 = (0);
seq__79586_80077 = G__80089;
chunk__79587_80078 = G__80090;
count__79588_80079 = G__80091;
i__79589_80080 = G__80092;
continue;
} else {
var tag_80093 = cljs.core.first(seq__79586_80087__$1);
metabase.lib.hierarchy.derive(tag_80093,new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018));


var G__80094 = cljs.core.next(seq__79586_80087__$1);
var G__80095 = null;
var G__80096 = (0);
var G__80097 = (0);
seq__79586_80077 = G__80094;
chunk__79587_80078 = G__80095;
count__79588_80079 = G__80096;
i__79589_80080 = G__80097;
continue;
}
} else {
}
}
break;
}
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018),(function (query,stage_number,p__79595,style){
var vec__79596 = p__79595;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79596,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79596,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79596,(2),null);
if(cljs.core.truth_(x)){
var x_display_name = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style);
var G__79599 = tag;
var G__79599__$1 = (((G__79599 instanceof cljs.core.Keyword))?G__79599.fqn:null);
switch (G__79599__$1) {
case "count":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Count of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_display_name], 0));

break;
case "cum-count":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Cumulative count of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_display_name], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79599__$1)].join('')));

}
} else {
var G__79600 = tag;
var G__79600__$1 = (((G__79600 instanceof cljs.core.Keyword))?G__79600.fqn:null);
switch (G__79600__$1) {
case "count":
return metabase.shared.util.i18n.js_i18n("Count");

break;
case "cum-count":
return metabase.shared.util.i18n.js_i18n("Cumulative count");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79600__$1)].join('')));

}
}
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018),(function (_query,_stage_number,p__79605){
var vec__79606 = p__79605;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79606,(0),null);
var _clause = vec__79606;
var G__79609 = tag;
var G__79609__$1 = (((G__79609 instanceof cljs.core.Keyword))?G__79609.fqn:null);
switch (G__79609__$1) {
case "count":
return "count";

break;
case "cum-count":
return "cum_count";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79609__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018),(function (query,stage_number,clause){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var fexpr__79610 = cljs.core.get_method(metabase.lib.metadata.calculation.metadata_method,new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
return (fexpr__79610.cljs$core$IFn$_invoke$arity$3 ? fexpr__79610.cljs$core$IFn$_invoke$arity$3(query,stage_number,clause) : fexpr__79610.call(null,query,stage_number,clause));
})(),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.Keyword("type","Quantity","type/Quantity",-1936151227));
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (_query,_stage_number,_case,_style){
return metabase.shared.util.i18n.js_i18n("Case");
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (_query,_stage_number,_case){
return "case";
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword("metabase.lib.aggregation","unary-aggregation","metabase.lib.aggregation/unary-aggregation",1064133592),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
var seq__79611_80101 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.Keyword(null,"cum-sum","cum-sum",2064902349),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"stddev","stddev",-865474939),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"var","var",-769682797)], null));
var chunk__79612_80102 = null;
var count__79613_80103 = (0);
var i__79614_80104 = (0);
while(true){
if((i__79614_80104 < count__79613_80103)){
var tag_80105 = chunk__79612_80102.cljs$core$IIndexed$_nth$arity$2(null,i__79614_80104);
metabase.lib.hierarchy.derive(tag_80105,new cljs.core.Keyword("metabase.lib.aggregation","unary-aggregation","metabase.lib.aggregation/unary-aggregation",1064133592));


var G__80106 = seq__79611_80101;
var G__80107 = chunk__79612_80102;
var G__80108 = count__79613_80103;
var G__80109 = (i__79614_80104 + (1));
seq__79611_80101 = G__80106;
chunk__79612_80102 = G__80107;
count__79613_80103 = G__80108;
i__79614_80104 = G__80109;
continue;
} else {
var temp__5804__auto___80110 = cljs.core.seq(seq__79611_80101);
if(temp__5804__auto___80110){
var seq__79611_80111__$1 = temp__5804__auto___80110;
if(cljs.core.chunked_seq_QMARK_(seq__79611_80111__$1)){
var c__5568__auto___80112 = cljs.core.chunk_first(seq__79611_80111__$1);
var G__80113 = cljs.core.chunk_rest(seq__79611_80111__$1);
var G__80114 = c__5568__auto___80112;
var G__80115 = cljs.core.count(c__5568__auto___80112);
var G__80116 = (0);
seq__79611_80101 = G__80113;
chunk__79612_80102 = G__80114;
count__79613_80103 = G__80115;
i__79614_80104 = G__80116;
continue;
} else {
var tag_80117 = cljs.core.first(seq__79611_80111__$1);
metabase.lib.hierarchy.derive(tag_80117,new cljs.core.Keyword("metabase.lib.aggregation","unary-aggregation","metabase.lib.aggregation/unary-aggregation",1064133592));


var G__80118 = cljs.core.next(seq__79611_80111__$1);
var G__80119 = null;
var G__80120 = (0);
var G__80121 = (0);
seq__79611_80101 = G__80118;
chunk__79612_80102 = G__80119;
count__79613_80103 = G__80120;
i__79614_80104 = G__80121;
continue;
}
} else {
}
}
break;
}
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","unary-aggregation","metabase.lib.aggregation/unary-aggregation",1064133592),(function (_query,_stage_number,p__79623){
var vec__79629 = p__79623;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79629,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79629,(1),null);
var _arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79629,(2),null);
var G__79632 = tag;
var G__79632__$1 = (((G__79632 instanceof cljs.core.Keyword))?G__79632.fqn:null);
switch (G__79632__$1) {
case "avg":
return "avg";

break;
case "cum-sum":
return "sum";

break;
case "distinct":
return "count";

break;
case "max":
return "max";

break;
case "median":
return "median";

break;
case "min":
return "min";

break;
case "stddev":
return "stddev";

break;
case "sum":
return "sum";

break;
case "var":
return "var";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79632__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","unary-aggregation","metabase.lib.aggregation/unary-aggregation",1064133592),(function (query,stage_number,p__79633,style){
var vec__79634 = p__79633;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79634,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79634,(1),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79634,(2),null);
var arg__$1 = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,arg,style);
var G__79637 = tag;
var G__79637__$1 = (((G__79637 instanceof cljs.core.Keyword))?G__79637.fqn:null);
switch (G__79637__$1) {
case "avg":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Average of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "cum-sum":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Cumulative sum of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "distinct":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Distinct values of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "max":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Max of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "median":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Median of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "min":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Min of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "stddev":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Standard deviation of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "sum":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Sum of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "var":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Variance of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79637__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"percentile","percentile",-601188752),(function (query,stage_number,p__79638,style){
var vec__79643 = p__79638;
var _percentile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79643,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79643,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79643,(2),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79643,(3),null);
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0}th percentile of {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style)], 0));
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"percentile","percentile",-601188752),(function (_query,_stage_number,_clause){
return "percentile";
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"percentile","percentile",-601188752),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),(function (query,stage_number,p__79646,style){
var vec__79647 = p__79646;
var _sum_where = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79647,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79647,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79647,(2),null);
var _pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79647,(3),null);
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Sum of {0} matching condition",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style)], 0));
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),(function (query,stage_number,p__79653){
var vec__79658 = p__79653;
var _sum_where = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79658,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79658,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79658,(2),null);
var _pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79658,(3),null);
return ["sum_where_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,x))].join('');
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"share","share",-589433933),(function (_query,_stage_number,_share,_style){
return metabase.shared.util.i18n.js_i18n("Share of rows matching condition");
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"share","share",-589433933),(function (_query,_stage_number,_share){
return "share";
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"share","share",-589433933),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"count-where","count-where",385407720),(function (_query,_stage_number,_count_where,_style){
return metabase.shared.util.i18n.js_i18n("Count of rows matching condition");
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"count-where","count-where",385407720),(function (_query,_stage_number,_count_where){
return "count-where";
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"count-where","count-where",385407720),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815),(function (query,stage_number,p__79723){
var vec__79724 = p__79723;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79724,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79724,(1),null);
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79724,(2),null);
var clause = vec__79724;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(first_arg)?cljs.core.select_keys(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,first_arg),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875)], null)):null),(function (){var fexpr__79729 = cljs.core.get_method(metabase.lib.metadata.calculation.metadata_method,new cljs.core.Keyword(null,"default","default",-1987822328));
return (fexpr__79729.cljs$core$IFn$_invoke$arity$3 ? fexpr__79729.cljs$core$IFn$_invoke$arity$3(query,stage_number,clause) : fexpr__79729.call(null,query,stage_number,clause));
})()], 0));
}));
/**
 * Inputs: ([]
 *         [x])
 *   Return: :mbql.clause/count
 *        
 * 
 *   Create a standalone clause of type `count`.
 */
metabase.lib.aggregation.count = (function metabase$lib$aggregation$count(var_args){
var G__79748 = arguments.length;
switch (G__79748) {
case 0:
return metabase.lib.aggregation.count.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return metabase.lib.aggregation.count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.aggregation.count.cljs$core$IFn$_invoke$arity$0 = (function (){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.PersistentVector.EMPTY);
}));

(metabase.lib.aggregation.count.cljs$core$IFn$_invoke$arity$1 = (function (x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
}));

(metabase.lib.aggregation.count.cljs$lang$maxFixedArity = 1);

/**
 * Inputs: ([]
 *         [x])
 *   Return: :mbql.clause/cum-count
 *        
 * 
 *   Create a standalone clause of type `cum-count`.
 */
metabase.lib.aggregation.cum_count = (function metabase$lib$aggregation$cum_count(var_args){
var G__79753 = arguments.length;
switch (G__79753) {
case 0:
return metabase.lib.aggregation.cum_count.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return metabase.lib.aggregation.cum_count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.aggregation.cum_count.cljs$core$IFn$_invoke$arity$0 = (function (){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543),cljs.core.PersistentVector.EMPTY);
}));

(metabase.lib.aggregation.cum_count.cljs$core$IFn$_invoke$arity$1 = (function (x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
}));

(metabase.lib.aggregation.cum_count.cljs$lang$maxFixedArity = 1);

/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/count-where
 *        
 * 
 *   Create a standalone clause of type `count-where`.
 */
metabase.lib.aggregation.count_where = (function metabase$lib$aggregation$count_where(x,y){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"count-where","count-where",385407720),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/avg
 *        
 * 
 *   Create a standalone clause of type `avg`.
 */
metabase.lib.aggregation.avg = (function metabase$lib$aggregation$avg(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/distinct
 *        
 * 
 *   Create a standalone clause of type `distinct`.
 */
metabase.lib.aggregation.distinct = (function metabase$lib$aggregation$distinct(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/max
 *        
 * 
 *   Create a standalone clause of type `max`.
 */
metabase.lib.aggregation.max = (function metabase$lib$aggregation$max(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/median
 *        
 * 
 *   Create a standalone clause of type `median`.
 */
metabase.lib.aggregation.median = (function metabase$lib$aggregation$median(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/min
 *        
 * 
 *   Create a standalone clause of type `min`.
 */
metabase.lib.aggregation.min = (function metabase$lib$aggregation$min(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/percentile
 *        
 * 
 *   Create a standalone clause of type `percentile`.
 */
metabase.lib.aggregation.percentile = (function metabase$lib$aggregation$percentile(x,y){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"percentile","percentile",-601188752),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/share
 *        
 * 
 *   Create a standalone clause of type `share`.
 */
metabase.lib.aggregation.share = (function metabase$lib$aggregation$share(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"share","share",-589433933),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/stddev
 *        
 * 
 *   Create a standalone clause of type `stddev`.
 */
metabase.lib.aggregation.stddev = (function metabase$lib$aggregation$stddev(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"stddev","stddev",-865474939),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/sum
 *        
 * 
 *   Create a standalone clause of type `sum`.
 */
metabase.lib.aggregation.sum = (function metabase$lib$aggregation$sum(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/cum-sum
 *        
 * 
 *   Create a standalone clause of type `cum-sum`.
 */
metabase.lib.aggregation.cum_sum = (function metabase$lib$aggregation$cum_sum(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"cum-sum","cum-sum",2064902349),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/sum-where
 *        
 * 
 *   Create a standalone clause of type `sum-where`.
 */
metabase.lib.aggregation.sum_where = (function metabase$lib$aggregation$sum_where(x,y){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/var
 *        
 * 
 *   Create a standalone clause of type `var`.
 */
metabase.lib.aggregation.var$ = (function metabase$lib$aggregation$var(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
metabase.lib.ref.ref_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (aggregation_clause){
return aggregation_clause;
}));
/**
 * Schema for something you can pass to [[aggregate]] to add to a query as an aggregation.
 */
metabase.lib.aggregation.Aggregatable = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregation","metabase.lib.schema.aggregation/aggregation",-736862750),new cljs.core.Keyword("metabase.lib.schema.common","external-op","metabase.lib.schema.common/external-op",1918684841),metabase.lib.metadata.MetricMetadata], null);
/**
 * Inputs: ([query aggregatable]
 *         [query :- :metabase.lib.schema/query stage-number :- :int aggregatable :- Aggregatable])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Adds an aggregation to query.
 */
metabase.lib.aggregation.aggregate = (function metabase$lib$aggregation$aggregate(var_args){
var G__79829 = arguments.length;
switch (G__79829) {
case 2:
return metabase.lib.aggregation.aggregate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.aggregation.aggregate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.aggregation.aggregate.cljs$core$IFn$_invoke$arity$2 = (function (query,aggregatable){

return metabase.lib.aggregation.aggregate.cljs$core$IFn$_invoke$arity$3(query,(-1),aggregatable);
}));

(metabase.lib.aggregation.aggregate.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,aggregatable){
while(true){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.dispatch.dispatch_value(aggregatable),new cljs.core.Keyword("metadata","metric","metadata/metric",538003406))){
var G__80149 = query;
var G__80150 = stage_number;
var G__80151 = metabase.lib.ref.ref(aggregatable);
query = G__80149;
stage_number = G__80150;
aggregatable = G__80151;
continue;
} else {
return metabase.lib.util.add_summary_clause(query,stage_number,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),aggregatable);
}
break;
}
}));

(metabase.lib.aggregation.aggregate.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential :metabase.lib.schema.aggregation/aggregation]]
 *        
 * 
 *   Get the aggregations in a given stage of a query.
 */
metabase.lib.aggregation.aggregations = (function metabase$lib$aggregation$aggregations(var_args){
var G__79925 = arguments.length;
switch (G__79925) {
case 1:
return metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

return cljs.core.not_empty(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
}));

(metabase.lib.aggregation.aggregations.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential lib.metadata/ColumnMetadata]]
 *        
 * 
 *   Get metadata about the aggregations in a given stage of a query.
 */
metabase.lib.aggregation.aggregations_metadata = (function metabase$lib$aggregation$aggregations_metadata(var_args){
var G__79935 = arguments.length;
switch (G__79935) {
case 1:
return metabase.lib.aggregation.aggregations_metadata.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.aggregation.aggregations_metadata.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.aggregation.aggregations_metadata.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.aggregation.aggregations_metadata.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.aggregation.aggregations_metadata.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

var G__79947 = cljs.core.not_empty(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if((G__79947 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (aggregation){
var metadata = metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,aggregation);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3(metadata,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
})()),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(cljs.core.second(aggregation))], 0));
})),G__79947);
}
}));

(metabase.lib.aggregation.aggregations_metadata.cljs$lang$maxFixedArity = 2);

metabase.lib.aggregation.OperatorWithColumns = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword("metabase.lib.schema.aggregation","operator","metabase.lib.schema.aggregation/operator",2070038764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),metabase.lib.metadata.ColumnMetadata], null)], null)], null)], null);
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("operator","aggregation","operator/aggregation",-1961510924),(function (_query,_stage_number,p__79954,_display_name_style){
var map__79955 = p__79954;
var map__79955__$1 = cljs.core.__destructure_map(map__79955);
var display_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79955__$1,new cljs.core.Keyword(null,"display-info","display-info",-816930907));
return new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1((display_info.cljs$core$IFn$_invoke$arity$0 ? display_info.cljs$core$IFn$_invoke$arity$0() : display_info.call(null)));
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("operator","aggregation","operator/aggregation",-1961510924),(function (_query,_stage_number,p__79959){
var map__79960 = p__79959;
var map__79960__$1 = cljs.core.__destructure_map(map__79960);
var short_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79960__$1,new cljs.core.Keyword(null,"short","short",1928760516));
var display_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79960__$1,new cljs.core.Keyword(null,"display-info","display-info",-816930907));
var requires_column_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79960__$1,new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79960__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var G__79961 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((display_info.cljs$core$IFn$_invoke$arity$0 ? display_info.cljs$core$IFn$_invoke$arity$0() : display_info.call(null)),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),metabase.util.qualified_name(short_name),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"requires-column","requires-column",934105295),requires_column_QMARK_], 0));
if((!((selected_QMARK_ == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79961,new cljs.core.Keyword(null,"selected","selected",574897764),selected_QMARK_);
} else {
return G__79961;
}
}));
/**
 * Inputs: [aggregation-operator :- OperatorWithColumns]
 *   Return: [:maybe [:sequential lib.metadata/ColumnMetadata]]
 *        
 * 
 *   Returns the columns for which `aggregation-operator` is applicable.
 */
metabase.lib.aggregation.aggregation_operator_columns = (function metabase$lib$aggregation$aggregation_operator_columns(aggregation_operator){

return new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(aggregation_operator);
});
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential OperatorWithColumns]]
 *        
 * 
 *   Returns the available aggegation operators for the stage with `stage-number` of `query`.
 *   If `stage-number` is omitted, uses the last stage.
 */
metabase.lib.aggregation.available_aggregation_operators = (function metabase$lib$aggregation$available_aggregation_operators(var_args){
var G__79971 = arguments.length;
switch (G__79971) {
case 1:
return metabase.lib.aggregation.available_aggregation_operators.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.aggregation.available_aggregation_operators.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.aggregation.available_aggregation_operators.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.aggregation.available_aggregation_operators.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.aggregation.available_aggregation_operators.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

var db_features = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.database(query));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var stage = metabase.lib.util.query_stage(query,stage_number);
var columns = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
var with_columns = (function (p__80002){
var map__80003 = p__80002;
var map__80003__$1 = cljs.core.__destructure_map(map__80003);
var operator = map__80003__$1;
var requires_column_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80003__$1,new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448));
var supported_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80003__$1,new cljs.core.Keyword(null,"supported-field","supported-field",-2061545519));
if(cljs.core.not(requires_column_QMARK_)){
return operator;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(supported_field,new cljs.core.Keyword(null,"any","any",1705907423))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(operator,new cljs.core.Keyword(null,"columns","columns",1998437288),columns);
} else {
var temp__5804__auto__ = cljs.core.not_empty(cljs.core.filterv((function (p1__79966_SHARP_){
return metabase.lib.types.isa.field_type_QMARK_(supported_field,p1__79966_SHARP_);
}),columns));
if(cljs.core.truth_(temp__5804__auto__)){
var cols = temp__5804__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(operator,new cljs.core.Keyword(null,"columns","columns",1998437288),cols);
} else {
return null;
}

}
}
});
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (op){
var feature = new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248).cljs$core$IFn$_invoke$arity$1(op);
var or__5045__auto__ = (feature == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return (db_features.cljs$core$IFn$_invoke$arity$1 ? db_features.cljs$core$IFn$_invoke$arity$1(feature) : db_features.call(null,feature));
}
})),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(with_columns),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__79967_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__79967_SHARP_,new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("operator","aggregation","operator/aggregation",-1961510924));
}))),metabase.lib.schema.aggregation.aggregation_operators));
}));

(metabase.lib.aggregation.available_aggregation_operators.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: ([aggregation-operator :- :metabase.lib.schema.aggregation/operator]
 *         [aggregation-operator :- :metabase.lib.schema.aggregation/operator column])
 *   Return: :metabase.lib.schema.aggregation/aggregation
 *        
 * 
 *   Returns a standalone aggregation clause for an `aggregation-operator` and
 *   a `column`.
 *   For aggregations requiring an argument `column` is mandatory, otherwise
 *   it is optional.
 */
metabase.lib.aggregation.aggregation_clause = (function metabase$lib$aggregation$aggregation_clause(var_args){
var G__80019 = arguments.length;
switch (G__80019) {
case 1:
return metabase.lib.aggregation.aggregation_clause.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.aggregation.aggregation_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.aggregation.aggregation_clause.cljs$core$IFn$_invoke$arity$1 = (function (aggregation_operator){

if(cljs.core.not(new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448).cljs$core$IFn$_invoke$arity$1(aggregation_operator))){
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(aggregation_operator),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__80021 = "aggregation operator %s requires an argument";
var G__80022 = new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(aggregation_operator);
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$2(G__80021,G__80022) : metabase.lib.util.format.call(null,G__80021,G__80022));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aggregation-operator","aggregation-operator",-1978700834),aggregation_operator], null));
}
}));

(metabase.lib.aggregation.aggregation_clause.cljs$core$IFn$_invoke$arity$2 = (function (aggregation_operator,column){

return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(aggregation_operator),cljs.core.PersistentArrayMap.EMPTY,metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(column)], null));
}));

(metabase.lib.aggregation.aggregation_clause.cljs$lang$maxFixedArity = 2);

metabase.lib.aggregation.SelectedOperatorWithColumns = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword("metabase.lib.schema.aggregation","operator","metabase.lib.schema.aggregation/operator",2070038764),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),metabase.lib.metadata.ColumnMetadata], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null);
/**
 * Inputs: [agg-operators :- [:maybe [:sequential OperatorWithColumns]] agg-clause]
 *   Return: [:maybe [:sequential SelectedOperatorWithColumns]]
 *        
 * 
 *   Mark the operator and the column (if any) in `agg-operators` selected by `agg-clause`.
 */
metabase.lib.aggregation.selected_aggregation_operators = (function metabase$lib$aggregation$selected_aggregation_operators(agg_operators,agg_clause){

if(cljs.core.seq(agg_operators)){
var vec__80025 = agg_clause;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80025,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80025,(1),null);
var agg_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80025,(2),null);
var agg_temporal_unit = new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(agg_col));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (agg_op){
var G__80028 = agg_op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(agg_op),op)){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80028,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true),new cljs.core.Keyword(null,"columns","columns",1998437288),(function (cols){
var refs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,cols);
var match = metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$2(metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(agg_col,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358)], 0)),refs);
if(cljs.core.truth_(match)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (r,c){
var G__80029 = c;
var G__80029__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,match))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80029,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true):G__80029);
if((!((agg_temporal_unit == null)))){
return metabase.lib.temporal_bucket.with_temporal_bucket(G__80029__$1,agg_temporal_unit);
} else {
return G__80029__$1;
}
}),refs,cols);
} else {
return cols;
}
}));
} else {
return G__80028;
}
}),agg_operators);
} else {
return null;
}
});
/**
 * Inputs: ([query ag-index]
 *         [query :- :metabase.lib.schema/query stage-number :- :int ag-index :- :metabase.lib.schema.common/int-greater-than-or-equal-to-zero])
 *   Return: :mbql.clause/aggregation
 *        
 * 
 *   Find the aggregation at `ag-index` and create an `:aggregation` ref for it. Intended for use
 *   when creating queries using threading macros e.g.
 * 
 *  (-> (lib/query ...)
 *      (lib/aggregate (lib/avg ...))
 *      (as-> <> (lib/order-by <> (lib/aggregation-ref <> 0))))
 */
metabase.lib.aggregation.aggregation_ref = (function metabase$lib$aggregation$aggregation_ref(var_args){
var G__80032 = arguments.length;
switch (G__80032) {
case 2:
return metabase.lib.aggregation.aggregation_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.aggregation.aggregation_ref.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.aggregation.aggregation_ref.cljs$core$IFn$_invoke$arity$2 = (function (query,ag_index){

return metabase.lib.aggregation.aggregation_ref.cljs$core$IFn$_invoke$arity$3(query,(-1),ag_index);
}));

(metabase.lib.aggregation.aggregation_ref.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,ag_index){

var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)),ag_index);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__80033 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80033,(0),null);
var map__80036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80033,(1),null);
var map__80036__$1 = cljs.core.__destructure_map(map__80036);
var ag_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80036__$1,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),cljs.core.PersistentArrayMap.EMPTY,ag_uuid], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Undefined aggregation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ag_index)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aggregation-index","aggregation-index",-1057045587),ag_index,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null));
}
}));

(metabase.lib.aggregation.aggregation_ref.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "aggregate", { enumerable: false, get: function() { return metabase.lib.aggregation.aggregate; } });
Object.defineProperty(module.exports, "Aggregatable", { enumerable: false, get: function() { return metabase.lib.aggregation.Aggregatable; } });
Object.defineProperty(module.exports, "sum", { enumerable: false, get: function() { return metabase.lib.aggregation.sum; } });
Object.defineProperty(module.exports, "aggregations", { enumerable: false, get: function() { return metabase.lib.aggregation.aggregations; } });
Object.defineProperty(module.exports, "aggregation_clause", { enumerable: false, get: function() { return metabase.lib.aggregation.aggregation_clause; } });
Object.defineProperty(module.exports, "min", { enumerable: false, get: function() { return metabase.lib.aggregation.min; } });
Object.defineProperty(module.exports, "stddev", { enumerable: false, get: function() { return metabase.lib.aggregation.stddev; } });
Object.defineProperty(module.exports, "aggregation_ref", { enumerable: false, get: function() { return metabase.lib.aggregation.aggregation_ref; } });
Object.defineProperty(module.exports, "selected_aggregation_operators", { enumerable: false, get: function() { return metabase.lib.aggregation.selected_aggregation_operators; } });
Object.defineProperty(module.exports, "count_where", { enumerable: false, get: function() { return metabase.lib.aggregation.count_where; } });
Object.defineProperty(module.exports, "cum_count", { enumerable: false, get: function() { return metabase.lib.aggregation.cum_count; } });
Object.defineProperty(module.exports, "resolve_aggregation", { enumerable: false, get: function() { return metabase.lib.aggregation.resolve_aggregation; } });
Object.defineProperty(module.exports, "available_aggregation_operators", { enumerable: false, get: function() { return metabase.lib.aggregation.available_aggregation_operators; } });
Object.defineProperty(module.exports, "aggregations_metadata", { enumerable: false, get: function() { return metabase.lib.aggregation.aggregations_metadata; } });
Object.defineProperty(module.exports, "sum_where", { enumerable: false, get: function() { return metabase.lib.aggregation.sum_where; } });
Object.defineProperty(module.exports, "cum_sum", { enumerable: false, get: function() { return metabase.lib.aggregation.cum_sum; } });
Object.defineProperty(module.exports, "distinct", { enumerable: false, get: function() { return metabase.lib.aggregation.distinct; } });
Object.defineProperty(module.exports, "percentile", { enumerable: false, get: function() { return metabase.lib.aggregation.percentile; } });
Object.defineProperty(module.exports, "aggregation_operator_columns", { enumerable: false, get: function() { return metabase.lib.aggregation.aggregation_operator_columns; } });
Object.defineProperty(module.exports, "SelectedOperatorWithColumns", { enumerable: false, get: function() { return metabase.lib.aggregation.SelectedOperatorWithColumns; } });
Object.defineProperty(module.exports, "column_metadata__GT_aggregation_ref", { enumerable: false, get: function() { return metabase.lib.aggregation.column_metadata__GT_aggregation_ref; } });
Object.defineProperty(module.exports, "var$", { enumerable: false, get: function() { return metabase.lib.aggregation.var$; } });
Object.defineProperty(module.exports, "median", { enumerable: false, get: function() { return metabase.lib.aggregation.median; } });
Object.defineProperty(module.exports, "share", { enumerable: false, get: function() { return metabase.lib.aggregation.share; } });
Object.defineProperty(module.exports, "max", { enumerable: false, get: function() { return metabase.lib.aggregation.max; } });
Object.defineProperty(module.exports, "count", { enumerable: false, get: function() { return metabase.lib.aggregation.count; } });
Object.defineProperty(module.exports, "OperatorWithColumns", { enumerable: false, get: function() { return metabase.lib.aggregation.OperatorWithColumns; } });
Object.defineProperty(module.exports, "avg", { enumerable: false, get: function() { return metabase.lib.aggregation.avg; } });
//# sourceMappingURL=metabase.lib.aggregation.js.map
