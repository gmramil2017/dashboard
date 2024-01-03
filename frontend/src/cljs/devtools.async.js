var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./devtools.context.js");
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

$CLJS.SHADOW_ENV.setLoaded("devtools.async.js");

goog.provide('devtools.async');
goog.scope(function(){
  devtools.async.goog$module$goog$labs$userAgent$browser = goog.module.get('goog.labs.userAgent.browser');
});
devtools.async.available_QMARK_ = (function devtools$async$available_QMARK_(){
return (typeof Promise !== 'undefined');
});
devtools.async.fixed_chrome_version_for_async = "65.0.3321";
devtools.async.needed_QMARK_ = (function devtools$async$needed_QMARK_(){
return cljs.core.not((function (){var and__5043__auto__ = devtools.async.goog$module$goog$labs$userAgent$browser.isChrome();
if(cljs.core.truth_(and__5043__auto__)){
return devtools.async.goog$module$goog$labs$userAgent$browser.isVersionOrHigher(devtools.async.fixed_chrome_version_for_async);
} else {
return and__5043__auto__;
}
})());
});
devtools.async.get_not_needed_message = (function devtools$async$get_not_needed_message(){
return ["cljs-devtools: the :async feature is no longer needed since Chrome ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.async.fixed_chrome_version_for_async),", ","see https://github.com/binaryage/cljs-devtools/issues/20"].join('');
});
devtools.async._STAR_installed_STAR_ = false;
devtools.async._STAR_original_set_immediate_STAR_ = null;
devtools.async.rethrow_outside_promise = (function devtools$async$rethrow_outside_promise(e){
return setTimeout((function (){
throw e;
}),(0));
});
devtools.async.promise_based_set_immediate = (function devtools$async$promise_based_set_immediate(callback){
var o__29638__auto___32111 = (function (){var o__29638__auto___32111 = (function (){var o__29638__auto___32111 = Promise;
return (o__29638__auto___32111["resolve"]).call(o__29638__auto___32111);
})();
return (o__29638__auto___32111["then"]).call(o__29638__auto___32111,callback);
})();
(o__29638__auto___32111["catch"]).call(o__29638__auto___32111,devtools.async.rethrow_outside_promise);

return null;
});
devtools.async.install_async_set_immediate_BANG_ = (function devtools$async$install_async_set_immediate_BANG_(){
(devtools.async._STAR_original_set_immediate_STAR_ = goog.async.nextTick.setImmediate_);

return (goog.async.nextTick.setImmediate_ = devtools.async.promise_based_set_immediate);
});
devtools.async.uninstall_async_set_immediate_BANG_ = (function devtools$async$uninstall_async_set_immediate_BANG_(){
return (goog.async.nextTick.setImmediate_ = devtools.async._STAR_original_set_immediate_STAR_);
});
devtools.async.installed_QMARK_ = (function devtools$async$installed_QMARK_(){
return devtools.async._STAR_installed_STAR_;
});
devtools.async.install_BANG_ = (function devtools$async$install_BANG_(){
if(cljs.core.truth_(devtools.async._STAR_installed_STAR_)){
return null;
} else {
(devtools.async._STAR_installed_STAR_ = true);

var G__32080_32116 = Error;
var target__29660__auto___32117 = G__32080_32116;
if(cljs.core.truth_(target__29660__auto___32117)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32080_32116)].join(''),"\n","target__29660__auto__"].join('')));
}

(target__29660__auto___32117["stackTraceLimit"] = Infinity);


devtools.async.install_async_set_immediate_BANG_();

if(devtools.async.needed_QMARK_.call(null)){
} else {
devtools.context.get_console.call(null).info(devtools.async.get_not_needed_message.call(null));
}

return true;
}
});
devtools.async.uninstall_BANG_ = (function devtools$async$uninstall_BANG_(){
if(cljs.core.truth_(devtools.async._STAR_installed_STAR_)){
(devtools.async._STAR_installed_STAR_ = false);

return devtools.async.uninstall_async_set_immediate_BANG_();
} else {
return null;
}
});
Object.defineProperty(module.exports, "_STAR_installed_STAR_", { enumerable: false, get: function() { return devtools.async._STAR_installed_STAR_; } });
Object.defineProperty(module.exports, "fixed_chrome_version_for_async", { enumerable: false, get: function() { return devtools.async.fixed_chrome_version_for_async; } });
Object.defineProperty(module.exports, "_STAR_original_set_immediate_STAR_", { enumerable: false, get: function() { return devtools.async._STAR_original_set_immediate_STAR_; } });
Object.defineProperty(module.exports, "install_async_set_immediate_BANG_", { enumerable: false, get: function() { return devtools.async.install_async_set_immediate_BANG_; } });
Object.defineProperty(module.exports, "install_BANG_", { enumerable: false, get: function() { return devtools.async.install_BANG_; } });
Object.defineProperty(module.exports, "get_not_needed_message", { enumerable: false, get: function() { return devtools.async.get_not_needed_message; } });
Object.defineProperty(module.exports, "needed_QMARK_", { enumerable: false, get: function() { return devtools.async.needed_QMARK_; } });
Object.defineProperty(module.exports, "available_QMARK_", { enumerable: false, get: function() { return devtools.async.available_QMARK_; } });
Object.defineProperty(module.exports, "uninstall_async_set_immediate_BANG_", { enumerable: false, get: function() { return devtools.async.uninstall_async_set_immediate_BANG_; } });
Object.defineProperty(module.exports, "installed_QMARK_", { enumerable: false, get: function() { return devtools.async.installed_QMARK_; } });
Object.defineProperty(module.exports, "rethrow_outside_promise", { enumerable: false, get: function() { return devtools.async.rethrow_outside_promise; } });
Object.defineProperty(module.exports, "uninstall_BANG_", { enumerable: false, get: function() { return devtools.async.uninstall_BANG_; } });
Object.defineProperty(module.exports, "promise_based_set_immediate", { enumerable: false, get: function() { return devtools.async.promise_based_set_immediate; } });
//# sourceMappingURL=devtools.async.js.map
