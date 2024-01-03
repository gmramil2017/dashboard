var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.json.js");

goog.provide('shadow.json');
goog.scope(function(){
  shadow.json.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * simplified js->clj for JSON data, :key-fn default to keyword
 */
shadow.json.to_clj = (function shadow$json$to_clj(var_args){
var G__33040 = arguments.length;
switch (G__33040) {
case 1:
return shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.json.to_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1 = (function (x){
return shadow.json.to_clj.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.json.to_clj.cljs$core$IFn$_invoke$arity$2 = (function (x,opts){
if((x == null)){
return x;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.boolean_QMARK_(x)){
return x;
} else {
if(cljs.core.array_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__33038_SHARP_){
return shadow.json.to_clj.cljs$core$IFn$_invoke$arity$2(p1__33038_SHARP_,opts);
})),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(x));
} else {
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.keyword);
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,key){
var value = shadow.json.goog$module$goog$object.get(x,key);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(result,((typeof key === 'string')?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(key) : key_fn.call(null,key)):shadow.json.to_clj.cljs$core$IFn$_invoke$arity$2(key,opts)),shadow.json.to_clj.cljs$core$IFn$_invoke$arity$2(value,opts));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),shadow.json.goog$module$goog$object.getKeys(x)));

}
}
}
}
}
}));

(shadow.json.to_clj.cljs$lang$maxFixedArity = 2);

shadow.json.read_str = (function shadow$json$read_str(str,opts){
return shadow.json.to_clj.cljs$core$IFn$_invoke$arity$2(JSON.parse(str),opts);
});
shadow.json.write_str = (function shadow$json$write_str(obj){
return JSON.stringify(cljs.core.clj__GT_js(obj));
});
Object.defineProperty(module.exports, "to_clj", { enumerable: false, get: function() { return shadow.json.to_clj; } });
Object.defineProperty(module.exports, "read_str", { enumerable: false, get: function() { return shadow.json.read_str; } });
Object.defineProperty(module.exports, "write_str", { enumerable: false, get: function() { return shadow.json.write_str; } });
//# sourceMappingURL=shadow.json.js.map
