var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./lambdaisland.glogi.js");
require("./lambdaisland.glogi.console.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.util.log.js");

goog.provide('metabase.util.log');
lambdaisland.glogi.console.install_BANG_();
lambdaisland.glogi.set_levels(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("glogi","root","glogi/root",-77414841),new cljs.core.Keyword(null,"info","info",-317069002)], null));
/**
 * Part of the internals of [[glogi-logp]] etc.
 */
metabase.util.log.is_loggable_QMARK_ = (function metabase$util$log$is_loggable_QMARK_(logger_name,level){
return goog.log.isLoggable(lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(logger_name),lambdaisland.glogi.level(level));
});
/**
 * Part of the internals of [[logf]].
 */
metabase.util.log.format_msg = (function metabase$util$log$format_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53377 = arguments.length;
var i__5770__auto___53378 = (0);
while(true){
if((i__5770__auto___53378 < len__5769__auto___53377)){
args__5775__auto__.push((arguments[i__5770__auto___53378]));

var G__53379 = (i__5770__auto___53378 + (1));
i__5770__auto___53378 = G__53379;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(metabase.util.log.format_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.log.format_msg.cljs$lang$applyTo = (function (seq53375){
var G__53376 = cljs.core.first(seq53375);
var seq53375__$1 = cljs.core.next(seq53375);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53376,seq53375__$1);
}));

/**
 * Converts our standard `metabase.util.log` levels to those understood by glogi.
 */
metabase.util.log.glogi_level = (function metabase$util$log$glogi_level(level){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"fatal","fatal",1874419888))){
return new cljs.core.Keyword(null,"shout","shout",186018337);
} else {
return level;
}
});
Object.defineProperty(module.exports, "is_loggable_QMARK_", { enumerable: false, get: function() { return metabase.util.log.is_loggable_QMARK_; } });
Object.defineProperty(module.exports, "format_msg", { enumerable: false, get: function() { return metabase.util.log.format_msg; } });
Object.defineProperty(module.exports, "glogi_level", { enumerable: false, get: function() { return metabase.util.log.glogi_level; } });
//# sourceMappingURL=metabase.util.log.js.map
