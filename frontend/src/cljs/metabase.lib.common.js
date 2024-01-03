var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.common.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.common.js");

goog.provide('metabase.lib.common');
/**
 * Inputs: [[operator options :as clause]]
 *   Return: [:maybe :metabase.lib.schema.common/external-op]
 *        
 * 
 *   Convert the internal operator `clause` to the external format.
 */
metabase.lib.common.external_op = (function metabase$lib$common$external_op(p__63442){
var vec__63444 = p__63442;
var operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63444,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63444,(1),null);
var clause = vec__63444;

if(cljs.core.truth_(clause)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("lib","external-op","lib/external-op",-1470923877),new cljs.core.Keyword(null,"operator","operator",-1860875338),(function (){var G__63447 = operator;
if((operator instanceof cljs.core.Keyword)){
return cljs.core.name(G__63447);
} else {
return G__63447;
}
})(),new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(clause,(2))], null);
} else {
return null;
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.common !== 'undefined') && (typeof metabase.lib.common.__GT_op_arg !== 'undefined')){
} else {
/**
 * Ensures that clause arguments are properly unwrapped
 */
metabase.lib.common.__GT_op_arg = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__63451 = cljs.core.get_global_hierarchy;
return (fexpr__63451.cljs$core$IFn$_invoke$arity$0 ? fexpr__63451.cljs$core$IFn$_invoke$arity$0() : fexpr__63451.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.common","->op-arg"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.common.__GT_op_arg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.common.__GT_op_arg,x);
} else {
return x;
}
}));
metabase.lib.common.__GT_op_arg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969),(function (xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.common.__GT_op_arg,xs);
}));
metabase.lib.common.__GT_op_arg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (field_metadata){
return metabase.lib.ref.ref(field_metadata);
}));
metabase.lib.common.__GT_op_arg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),(function (metric_def){
return metabase.lib.ref.ref(metric_def);
}));
metabase.lib.common.__GT_op_arg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib","external-op","lib/external-op",-1470923877),(function (p__63455){
var map__63456 = p__63455;
var map__63456__$1 = cljs.core.__destructure_map(map__63456);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63456__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63456__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63456__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(metabase.lib.options.ensure_uuid(cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(operator),options], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.common.__GT_op_arg),args)));
}));
/**
 * Impl for [[defop]].
 */
metabase.lib.common.defop_create = (function metabase$lib$common$defop_create(op_name,args){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.common.__GT_op_arg),args);
});
Object.defineProperty(module.exports, "external_op", { enumerable: false, get: function() { return metabase.lib.common.external_op; } });
Object.defineProperty(module.exports, "__GT_op_arg", { enumerable: false, get: function() { return metabase.lib.common.__GT_op_arg; } });
Object.defineProperty(module.exports, "defop_create", { enumerable: false, get: function() { return metabase.lib.common.defop_create; } });
//# sourceMappingURL=metabase.lib.common.js.map
