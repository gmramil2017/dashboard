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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.hierarchy.js");

goog.provide('metabase.lib.hierarchy');
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.hierarchy !== 'undefined') && (typeof metabase.lib.hierarchy.hierarchy !== 'undefined')){
} else {
/**
 * Keyword hierarchy for MLv2 stuff.
 */
metabase.lib.hierarchy.hierarchy = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.make_hierarchy());
}
/**
 * Like [[clojure.core/derive]], but affects [[hierarchy]] rather than the global hierarchy.
 */
metabase.lib.hierarchy.derive = (function metabase$lib$hierarchy$derive(tag,parent){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metabase.lib.hierarchy.hierarchy,cljs.core.derive,tag,parent);

return null;
});
/**
 * Like [[clojure.core/isa?]], but uses [[hierarchy]].
 */
metabase.lib.hierarchy.isa_QMARK_ = (function metabase$lib$hierarchy$isa_QMARK_(tag,parent){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(metabase.lib.hierarchy.hierarchy),tag,parent);
});
Object.defineProperty(module.exports, "hierarchy", { enumerable: false, get: function() { return metabase.lib.hierarchy.hierarchy; } });
Object.defineProperty(module.exports, "derive", { enumerable: false, get: function() { return metabase.lib.hierarchy.derive; } });
Object.defineProperty(module.exports, "isa_QMARK_", { enumerable: false, get: function() { return metabase.lib.hierarchy.isa_QMARK_; } });
//# sourceMappingURL=metabase.lib.hierarchy.js.map
