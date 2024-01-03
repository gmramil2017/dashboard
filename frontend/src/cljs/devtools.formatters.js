var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./devtools.prefs.js");
require("./devtools.util.js");
require("./devtools.context.js");
require("./devtools.formatters.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("devtools.formatters.js");

goog.provide('devtools.formatters');
goog.scope(function(){
  devtools.formatters.goog$module$goog$labs$userAgent$browser = goog.module.get('goog.labs.userAgent.browser');
});
devtools.formatters._STAR_installed_STAR_ = false;
devtools.formatters._STAR_sanitizer_enabled_STAR_ = true;
devtools.formatters._STAR_monitor_enabled_STAR_ = false;
devtools.formatters.obsolete_formatter_key = "devtoolsFormatter";
devtools.formatters.available_QMARK_ = (function devtools$formatters$available_QMARK_(){
var or__5045__auto__ = devtools.util.in_node_context_QMARK_.call(null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = devtools.formatters.goog$module$goog$labs$userAgent$browser.isChrome();
if(cljs.core.truth_(and__5043__auto__)){
return devtools.formatters.goog$module$goog$labs$userAgent$browser.isVersionOrHigher((47));
} else {
return and__5043__auto__;
}
}
});

/**
* @constructor
*/
devtools.formatters.CLJSDevtoolsFormatter = (function (){
});

(devtools.formatters.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$type = true);

(devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.formatters/CLJSDevtoolsFormatter");

(devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"devtools.formatters/CLJSDevtoolsFormatter");
}));

/**
 * Positional factory function for devtools.formatters/CLJSDevtoolsFormatter.
 */
devtools.formatters.__GT_CLJSDevtoolsFormatter = (function devtools$formatters$__GT_CLJSDevtoolsFormatter(){
return (new devtools.formatters.CLJSDevtoolsFormatter());
});

devtools.formatters.find_fn_in_debug_ns = (function devtools$formatters$find_fn_in_debug_ns(fn_name){
try{return (devtools.context.get_root.call(null)["devtools"]["debug"][fn_name]);
}catch (e33002){var _ = e33002;
return null;
}});
devtools.formatters.monitor_api_call_if_avail = (function devtools$formatters$monitor_api_call_if_avail(name,api_call,args){
var temp__5802__auto__ = devtools.formatters.find_fn_in_debug_ns("monitor_api_call");
if(cljs.core.truth_(temp__5802__auto__)){
var monitor_api_call = temp__5802__auto__;
return (monitor_api_call.cljs$core$IFn$_invoke$arity$3 ? monitor_api_call.cljs$core$IFn$_invoke$arity$3(name,api_call,args) : monitor_api_call.call(null,name,api_call,args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
}
});
devtools.formatters.log_exception_if_avail = (function devtools$formatters$log_exception_if_avail(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33042 = arguments.length;
var i__5770__auto___33043 = (0);
while(true){
if((i__5770__auto___33043 < len__5769__auto___33042)){
args__5775__auto__.push((arguments[i__5770__auto___33043]));

var G__33044 = (i__5770__auto___33043 + (1));
i__5770__auto___33043 = G__33044;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__5802__auto__ = devtools.formatters.find_fn_in_debug_ns("log_exception");
if(cljs.core.truth_(temp__5802__auto__)){
var log_exception = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(log_exception,args);
} else {
return null;
}
}));

(devtools.formatters.log_exception_if_avail.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq33009){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33009));
}));

devtools.formatters.monitor_api_calls = (function devtools$formatters$monitor_api_calls(name,api_call){
return (function() { 
var G__33045__delegate = function (args){
if(cljs.core.not(devtools.formatters._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
return devtools.formatters.monitor_api_call_if_avail(name,api_call,args);
}
};
var G__33045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33047__i = 0, G__33047__a = new Array(arguments.length -  0);
while (G__33047__i < G__33047__a.length) {G__33047__a[G__33047__i] = arguments[G__33047__i + 0]; ++G__33047__i;}
  args = new cljs.core.IndexedSeq(G__33047__a,0,null);
} 
return G__33045__delegate.call(this,args);};
G__33045.cljs$lang$maxFixedArity = 0;
G__33045.cljs$lang$applyTo = (function (arglist__33048){
var args = cljs.core.seq(arglist__33048);
return G__33045__delegate(args);
});
G__33045.cljs$core$IFn$_invoke$arity$variadic = G__33045__delegate;
return G__33045;
})()
;
});
devtools.formatters.sanitize = (function devtools$formatters$sanitize(name,api_call){
return (function() { 
var G__33049__delegate = function (args){
if(cljs.core.not(devtools.formatters._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
}catch (e33017){var e = e33017;
devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], 0));

return null;
}}
};
var G__33049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33093__i = 0, G__33093__a = new Array(arguments.length -  0);
while (G__33093__i < G__33093__a.length) {G__33093__a[G__33093__i] = arguments[G__33093__i + 0]; ++G__33093__i;}
  args = new cljs.core.IndexedSeq(G__33093__a,0,null);
} 
return G__33049__delegate.call(this,args);};
G__33049.cljs$lang$maxFixedArity = 0;
G__33049.cljs$lang$applyTo = (function (arglist__33094){
var args = cljs.core.seq(arglist__33094);
return G__33049__delegate(args);
});
G__33049.cljs$core$IFn$_invoke$arity$variadic = G__33049__delegate;
return G__33049;
})()
;
});
devtools.formatters.build_cljs_formatter = (function devtools$formatters$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.monitor_api_calls,name);
var sanitizer = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.sanitize,name);
cljs.core.comp.cljs$core$IFn$_invoke$arity$2(monitor,sanitizer)(api_call);

return api_call;
});
var formatter = (new devtools.formatters.CLJSDevtoolsFormatter());
var define_BANG_ = (function (name,fn){
return (formatter[name] = wrap(name,fn));
});
define_BANG_("header",devtools.formatters.core.header_api_call);

define_BANG_("hasBody",devtools.formatters.core.has_body_api_call);

define_BANG_("body",devtools.formatters.core.body_api_call);

return formatter;
});
devtools.formatters.is_ours_QMARK_ = (function devtools$formatters$is_ours_QMARK_(o){
return (o instanceof devtools.formatters.CLJSDevtoolsFormatter);
});
devtools.formatters.install_our_formatter_BANG_ = (function devtools$formatters$install_our_formatter_BANG_(formatter){
var formatters = devtools.util.get_formatters_safe().slice();
formatters.push(formatter);

devtools.util.set_formatters_safe_BANG_(formatters);

if(cljs.core.truth_(devtools.prefs.pref(new cljs.core.Keyword(null,"legacy-formatter","legacy-formatter",-1954119499)))){
return (devtools.context.get_root.call(null)[devtools.formatters.obsolete_formatter_key] = formatter);
} else {
return null;
}
});
devtools.formatters.uninstall_our_formatters_BANG_ = (function devtools$formatters$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.is_ours_QMARK_,cljs.core.vec(devtools.util.get_formatters_safe()));
var new_formatters_js = ((cljs.core.empty_QMARK_(new_formatters))?null:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new_formatters));
return devtools.util.set_formatters_safe_BANG_(new_formatters_js);
});
devtools.formatters.installed_QMARK_ = (function devtools$formatters$installed_QMARK_(){
return devtools.formatters._STAR_installed_STAR_;
});
devtools.formatters.install_BANG_ = (function devtools$formatters$install_BANG_(){
if(cljs.core.truth_(devtools.formatters._STAR_installed_STAR_)){
return null;
} else {
(devtools.formatters._STAR_installed_STAR_ = true);

devtools.formatters.install_our_formatter_BANG_(devtools.formatters.build_cljs_formatter());

return true;
}
});
devtools.formatters.uninstall_BANG_ = (function devtools$formatters$uninstall_BANG_(){
if(cljs.core.truth_(devtools.formatters._STAR_installed_STAR_)){
(devtools.formatters._STAR_installed_STAR_ = false);

return devtools.formatters.uninstall_our_formatters_BANG_();
} else {
return null;
}
});
devtools.formatters.present_QMARK_ = (function devtools$formatters$present_QMARK_(){
var formatters = devtools.util.get_formatters_safe();
return cljs.core.boolean$(cljs.core.some(devtools.formatters.is_ours_QMARK_,formatters));
});
Object.defineProperty(module.exports, "present_QMARK_", { enumerable: false, get: function() { return devtools.formatters.present_QMARK_; } });
Object.defineProperty(module.exports, "__GT_CLJSDevtoolsFormatter", { enumerable: false, get: function() { return devtools.formatters.__GT_CLJSDevtoolsFormatter; } });
Object.defineProperty(module.exports, "monitor_api_call_if_avail", { enumerable: false, get: function() { return devtools.formatters.monitor_api_call_if_avail; } });
Object.defineProperty(module.exports, "build_cljs_formatter", { enumerable: false, get: function() { return devtools.formatters.build_cljs_formatter; } });
Object.defineProperty(module.exports, "_STAR_installed_STAR_", { enumerable: false, get: function() { return devtools.formatters._STAR_installed_STAR_; } });
Object.defineProperty(module.exports, "is_ours_QMARK_", { enumerable: false, get: function() { return devtools.formatters.is_ours_QMARK_; } });
Object.defineProperty(module.exports, "find_fn_in_debug_ns", { enumerable: false, get: function() { return devtools.formatters.find_fn_in_debug_ns; } });
Object.defineProperty(module.exports, "install_BANG_", { enumerable: false, get: function() { return devtools.formatters.install_BANG_; } });
Object.defineProperty(module.exports, "monitor_api_calls", { enumerable: false, get: function() { return devtools.formatters.monitor_api_calls; } });
Object.defineProperty(module.exports, "sanitize", { enumerable: false, get: function() { return devtools.formatters.sanitize; } });
Object.defineProperty(module.exports, "install_our_formatter_BANG_", { enumerable: false, get: function() { return devtools.formatters.install_our_formatter_BANG_; } });
Object.defineProperty(module.exports, "_STAR_sanitizer_enabled_STAR_", { enumerable: false, get: function() { return devtools.formatters._STAR_sanitizer_enabled_STAR_; } });
Object.defineProperty(module.exports, "available_QMARK_", { enumerable: false, get: function() { return devtools.formatters.available_QMARK_; } });
Object.defineProperty(module.exports, "log_exception_if_avail", { enumerable: false, get: function() { return devtools.formatters.log_exception_if_avail; } });
Object.defineProperty(module.exports, "installed_QMARK_", { enumerable: false, get: function() { return devtools.formatters.installed_QMARK_; } });
Object.defineProperty(module.exports, "obsolete_formatter_key", { enumerable: false, get: function() { return devtools.formatters.obsolete_formatter_key; } });
Object.defineProperty(module.exports, "uninstall_our_formatters_BANG_", { enumerable: false, get: function() { return devtools.formatters.uninstall_our_formatters_BANG_; } });
Object.defineProperty(module.exports, "uninstall_BANG_", { enumerable: false, get: function() { return devtools.formatters.uninstall_BANG_; } });
Object.defineProperty(module.exports, "CLJSDevtoolsFormatter", { enumerable: false, get: function() { return devtools.formatters.CLJSDevtoolsFormatter; } });
Object.defineProperty(module.exports, "_STAR_monitor_enabled_STAR_", { enumerable: false, get: function() { return devtools.formatters._STAR_monitor_enabled_STAR_; } });
//# sourceMappingURL=devtools.formatters.js.map
