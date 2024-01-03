var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.limit.js");

goog.provide('metabase.lib.limit');
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"limit","limit",-1355822363),(function (query,stage_number,_k){
var temp__5804__auto__ = new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number));
if(cljs.core.truth_(temp__5804__auto__)){
var limit = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n_n("row","rows",limit))].join('');
} else {
return null;
}
}));
/**
 * Inputs: ([query n]
 *         [query :- :metabase.lib.schema/query stage-number :- :int n :- [:maybe :metabase.lib.schema.common/int-greater-than-zero]])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Set the maximum number of rows to be returned by a stage of a query to `n`. If `n` is `nil`, remove the limit.
 */
metabase.lib.limit.limit = (function metabase$lib$limit$limit(var_args){
var G__80328 = arguments.length;
switch (G__80328) {
case 2:
return metabase.lib.limit.limit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.limit.limit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.limit.limit', metabase.lib.limit.limit);

(metabase.lib.limit.limit.cljs$core$IFn$_invoke$arity$2 = (function (query,n){

return metabase.lib.limit.limit.cljs$core$IFn$_invoke$arity$3(query,(-1),n);
}));

(metabase.lib.limit.limit.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,n){

return metabase.lib.util.update_query_stage(query,stage_number,(function (stage){
if(cljs.core.truth_(n)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stage,new cljs.core.Keyword(null,"limit","limit",-1355822363),n);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(stage,new cljs.core.Keyword(null,"limit","limit",-1355822363));
}
}));
}));

(metabase.lib.limit.limit.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe :metabase.lib.schema.common/int-greater-than-zero]
 *        
 * 
 *   Get the maximum number of rows to be returned by a stage of a query. `nil` indicates there is no limit
 */
metabase.lib.limit.current_limit = (function metabase$lib$limit$current_limit(var_args){
var G__80336 = arguments.length;
switch (G__80336) {
case 1:
return metabase.lib.limit.current_limit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.limit.current_limit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.limit.current_limit', metabase.lib.limit.current_limit);

(metabase.lib.limit.current_limit.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.limit.current_limit.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.limit.current_limit.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

return new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number));
}));

(metabase.lib.limit.current_limit.cljs$lang$maxFixedArity = 2);

Object.defineProperty(module.exports, "limit", { enumerable: true, get: function() { return metabase.lib.limit.limit; } });
Object.defineProperty(module.exports, "current_limit", { enumerable: true, get: function() { return metabase.lib.limit.current_limit; } });
//# sourceMappingURL=metabase.lib.limit.js.map
