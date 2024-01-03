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

$CLJS.SHADOW_ENV.setLoaded("clojure.test.check.results.js");

goog.provide('clojure.test.check.results');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

var clojure$test$check$results$Result$pass_QMARK_$dyn_44573 = (function (result){
var x__5393__auto__ = (((result == null))?null:result);
var m__5394__auto__ = (clojure.test.check.results.pass_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__5394__auto__.call(null,result));
} else {
var m__5392__auto__ = (clojure.test.check.results.pass_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__5392__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.pass?",result);
}
}
});
/**
 * A boolean indicating if the result passed.
 */
clojure.test.check.results.pass_QMARK_ = (function clojure$test$check$results$pass_QMARK_(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$pass_QMARK_$arity$1 == null)))))){
return result.clojure$test$check$results$Result$pass_QMARK_$arity$1(result);
} else {
return clojure$test$check$results$Result$pass_QMARK_$dyn_44573(result);
}
});

var clojure$test$check$results$Result$result_data$dyn_44578 = (function (result){
var x__5393__auto__ = (((result == null))?null:result);
var m__5394__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__5394__auto__.call(null,result));
} else {
var m__5392__auto__ = (clojure.test.check.results.result_data["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__5392__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.result-data",result);
}
}
});
/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
return clojure$test$check$results$Result$result_data$dyn_44578(result);
}
});

(clojure.test.check.results.Result["_"] = true);

(clojure.test.check.results.pass_QMARK_["_"] = (function (this$){
return cljs.core.boolean$(this$);
}));

(clojure.test.check.results.result_data["_"] = (function (this$){
return null;
}));

(clojure.test.check.results.Result["null"] = true);

(clojure.test.check.results.pass_QMARK_["null"] = (function (this$){
return false;
}));

(clojure.test.check.results.result_data["null"] = (function (this$){
return null;
}));
Object.defineProperty(module.exports, "Result", { enumerable: false, get: function() { return clojure.test.check.results.Result; } });
Object.defineProperty(module.exports, "pass_QMARK_", { enumerable: false, get: function() { return clojure.test.check.results.pass_QMARK_; } });
Object.defineProperty(module.exports, "result_data", { enumerable: false, get: function() { return clojure.test.check.results.result_data; } });
//# sourceMappingURL=clojure.test.check.results.js.map
