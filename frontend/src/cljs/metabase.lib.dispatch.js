var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.dispatch.js");

goog.provide('metabase.lib.dispatch');
metabase.lib.dispatch.mbql_clause_type = (function metabase$lib$dispatch$mbql_clause_type(x){
if(((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)))){
return cljs.core.first(x);
} else {
return null;
}
});
/**
 * Dispatch value for a clause, map, or other object. Dispatch rules are as follows:
 * 
 *   1. If it is an MBQL clause (vector with a keyword as its first argument), dispatch on that clause keyword
 * 
 *   2. If it is a map with a `:lib/type` key, dispatch on that;
 * 
 *   3. Otherwise, dispatch on a keyword representing the class of the object, e.g. `:dispatch-type/string` for a String.
 *   The main reason this returns weird keywords like this rather than class names like `String` is to make it easier to
 *   write cross-compatible code. See [[u/dispatch-type-keyword]] for more info.
 */
metabase.lib.dispatch.dispatch_value = (function metabase$lib$dispatch$dispatch_value(x){
var or__5045__auto__ = metabase.lib.dispatch.mbql_clause_type(x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = ((cljs.core.map_QMARK_(x))?new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(x):null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return metabase.util.dispatch_type_keyword(x);
}
}
});
Object.defineProperty(module.exports, "mbql_clause_type", { enumerable: false, get: function() { return metabase.lib.dispatch.mbql_clause_type; } });
Object.defineProperty(module.exports, "dispatch_value", { enumerable: false, get: function() { return metabase.lib.dispatch.dispatch_value; } });
//# sourceMappingURL=metabase.lib.dispatch.js.map
