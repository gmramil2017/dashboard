var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
require("./malli.registry.js");
require("./malli.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.util.malli.registry.js");

goog.provide('metabase.util.malli.registry');
if((typeof metabase !== 'undefined') && (typeof metabase.util !== 'undefined') && (typeof metabase.util.malli !== 'undefined') && (typeof metabase.util.malli.registry !== 'undefined') && (typeof metabase.util.malli.registry.registry_STAR_ !== 'undefined')){
} else {
metabase.util.malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.default_schemas(),malli.util.schemas()], 0)));
}
if((typeof metabase !== 'undefined') && (typeof metabase.util !== 'undefined') && (typeof metabase.util.malli !== 'undefined') && (typeof metabase.util.malli.registry !== 'undefined') && (typeof metabase.util.malli.registry.registry !== 'undefined')){
} else {
metabase.util.malli.registry.registry = malli.registry.mutable_registry(metabase.util.malli.registry.registry_STAR_);
}
malli.registry.set_default_registry_BANG_(metabase.util.malli.registry.registry);
/**
 * Register a spec with our Malli spec 
 */
metabase.util.malli.registry.register_BANG_ = (function metabase$util$malli$registry$register_BANG_(type,schema__$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metabase.util.malli.registry.registry_STAR_,cljs.core.assoc,type,schema__$1);

return null;
});
/**
 * For REPL/test usage: get the definition of a registered schema from the registry.
 */
metabase.util.malli.registry.resolve_schema = (function metabase$util$malli$registry$resolve_schema(k){
return malli.registry.schema(metabase.util.malli.registry.registry,k);
});
Object.defineProperty(module.exports, "registry_STAR_", { enumerable: false, get: function() { return metabase.util.malli.registry.registry_STAR_; } });
Object.defineProperty(module.exports, "registry", { enumerable: false, get: function() { return metabase.util.malli.registry.registry; } });
Object.defineProperty(module.exports, "register_BANG_", { enumerable: false, get: function() { return metabase.util.malli.registry.register_BANG_; } });
Object.defineProperty(module.exports, "resolve_schema", { enumerable: false, get: function() { return metabase.util.malli.registry.resolve_schema; } });
//# sourceMappingURL=metabase.util.malli.registry.js.map
