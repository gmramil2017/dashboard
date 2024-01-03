var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./camel_snake_kebab.internals.macros.js");
require("./clojure.data.js");
require("./cljs.pprint.js");
require("./clojure.set.js");
require("./clojure.string.js");
require("./clojure.walk.js");
require("./flatland.ordered.map.js");
require("./medley.core.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.shared.util.namespaces.js");
require("./metabase.util.format.js");
require("./metabase.util.log.js");
require("./net.cgrand.macrovich.js");
require("./weavejester.dependency.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.util.js");

goog.provide('metabase.util');
/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.colorize = (function() { 
var metabase$util$colorize__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.colorize,args__52718__auto__);
};
var metabase$util$colorize = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__56825__i = 0, G__56825__a = new Array(arguments.length -  0);
while (G__56825__i < G__56825__a.length) {G__56825__a[G__56825__i] = arguments[G__56825__i + 0]; ++G__56825__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__56825__a,0,null);
} 
return metabase$util$colorize__delegate.call(this,args__52718__auto__);};
metabase$util$colorize.cljs$lang$maxFixedArity = 0;
metabase$util$colorize.cljs$lang$applyTo = (function (arglist__56826){
var args__52718__auto__ = cljs.core.seq(arglist__56826);
return metabase$util$colorize__delegate(args__52718__auto__);
});
metabase$util$colorize.cljs$core$IFn$_invoke$arity$variadic = metabase$util$colorize__delegate;
return metabase$util$colorize;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.format_bytes = (function() { 
var metabase$util$format_bytes__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.format_bytes,args__52718__auto__);
};
var metabase$util$format_bytes = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__56827__i = 0, G__56827__a = new Array(arguments.length -  0);
while (G__56827__i < G__56827__a.length) {G__56827__a[G__56827__i] = arguments[G__56827__i + 0]; ++G__56827__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__56827__a,0,null);
} 
return metabase$util$format_bytes__delegate.call(this,args__52718__auto__);};
metabase$util$format_bytes.cljs$lang$maxFixedArity = 0;
metabase$util$format_bytes.cljs$lang$applyTo = (function (arglist__56828){
var args__52718__auto__ = cljs.core.seq(arglist__56828);
return metabase$util$format_bytes__delegate(args__52718__auto__);
});
metabase$util$format_bytes.cljs$core$IFn$_invoke$arity$variadic = metabase$util$format_bytes__delegate;
return metabase$util$format_bytes;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.format_color = (function() { 
var metabase$util$format_color__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.format_color,args__52718__auto__);
};
var metabase$util$format_color = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__56833__i = 0, G__56833__a = new Array(arguments.length -  0);
while (G__56833__i < G__56833__a.length) {G__56833__a[G__56833__i] = arguments[G__56833__i + 0]; ++G__56833__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__56833__a,0,null);
} 
return metabase$util$format_color__delegate.call(this,args__52718__auto__);};
metabase$util$format_color.cljs$lang$maxFixedArity = 0;
metabase$util$format_color.cljs$lang$applyTo = (function (arglist__56834){
var args__52718__auto__ = cljs.core.seq(arglist__56834);
return metabase$util$format_color__delegate(args__52718__auto__);
});
metabase$util$format_color.cljs$core$IFn$_invoke$arity$variadic = metabase$util$format_color__delegate;
return metabase$util$format_color;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.format_milliseconds = (function() { 
var metabase$util$format_milliseconds__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.format_milliseconds,args__52718__auto__);
};
var metabase$util$format_milliseconds = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__56836__i = 0, G__56836__a = new Array(arguments.length -  0);
while (G__56836__i < G__56836__a.length) {G__56836__a[G__56836__i] = arguments[G__56836__i + 0]; ++G__56836__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__56836__a,0,null);
} 
return metabase$util$format_milliseconds__delegate.call(this,args__52718__auto__);};
metabase$util$format_milliseconds.cljs$lang$maxFixedArity = 0;
metabase$util$format_milliseconds.cljs$lang$applyTo = (function (arglist__56837){
var args__52718__auto__ = cljs.core.seq(arglist__56837);
return metabase$util$format_milliseconds__delegate(args__52718__auto__);
});
metabase$util$format_milliseconds.cljs$core$IFn$_invoke$arity$variadic = metabase$util$format_milliseconds__delegate;
return metabase$util$format_milliseconds;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.format_nanoseconds = (function() { 
var metabase$util$format_nanoseconds__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.format_nanoseconds,args__52718__auto__);
};
var metabase$util$format_nanoseconds = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__56838__i = 0, G__56838__a = new Array(arguments.length -  0);
while (G__56838__i < G__56838__a.length) {G__56838__a[G__56838__i] = arguments[G__56838__i + 0]; ++G__56838__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__56838__a,0,null);
} 
return metabase$util$format_nanoseconds__delegate.call(this,args__52718__auto__);};
metabase$util$format_nanoseconds.cljs$lang$maxFixedArity = 0;
metabase$util$format_nanoseconds.cljs$lang$applyTo = (function (arglist__56839){
var args__52718__auto__ = cljs.core.seq(arglist__56839);
return metabase$util$format_nanoseconds__delegate(args__52718__auto__);
});
metabase$util$format_nanoseconds.cljs$core$IFn$_invoke$arity$variadic = metabase$util$format_nanoseconds__delegate;
return metabase$util$format_nanoseconds;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.format_seconds = (function() { 
var metabase$util$format_seconds__delegate = function (args__52718__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.format_seconds,args__52718__auto__);
};
var metabase$util$format_seconds = function (var_args){
var args__52718__auto__ = null;
if (arguments.length > 0) {
var G__56840__i = 0, G__56840__a = new Array(arguments.length -  0);
while (G__56840__i < G__56840__a.length) {G__56840__a[G__56840__i] = arguments[G__56840__i + 0]; ++G__56840__i;}
  args__52718__auto__ = new cljs.core.IndexedSeq(G__56840__a,0,null);
} 
return metabase$util$format_seconds__delegate.call(this,args__52718__auto__);};
metabase$util$format_seconds.cljs$lang$maxFixedArity = 0;
metabase$util$format_seconds.cljs$lang$applyTo = (function (arglist__56841){
var args__52718__auto__ = cljs.core.seq(arglist__56841);
return metabase$util$format_seconds__delegate(args__52718__auto__);
});
metabase$util$format_seconds.cljs$core$IFn$_invoke$arity$variadic = metabase$util$format_seconds__delegate;
return metabase$util$format_seconds;
})()
;
/**
 * Takes a message string and returns a basic exception: [[java.lang.Exception]] on JVM and [[Error]] in JS.
 */
metabase.util.error = (function metabase$util$error(msg){
return (new Error(msg));
});
/**
 * Return `k` as a string, qualified by its namespace, if any (unlike `name`). Handles `nil` values gracefully as well
 *   (also unlike `name`).
 * 
 *   (u/qualified-name :type/FK) -> "type/FK"
 */
metabase.util.qualified_name = (function metabase$util$qualified_name(k){
if((!((k == null)))){
var temp__5802__auto__ = (((((!((k == null))))?(((((k.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === k.cljs$core$INamed$))))?true:(((!k.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.INamed,k):false)):cljs.core.native_satisfies_QMARK_(cljs.core.INamed,k)))?cljs.core.namespace(k):null);
if(cljs.core.truth_(temp__5802__auto__)){
var namespac = temp__5802__auto__;
return [namespac,"/",cljs.core.name(k)].join('');
} else {
return cljs.core.name(k);
}
} else {
return null;
}
});
/**
 * Given a map, returns a new map with all nil values removed.
 */
metabase.util.remove_nils = (function metabase$util$remove_nils(m){
return medley.core.filter_vals(cljs.core.some_QMARK_,m);
});
/**
 * Recursively replace the keys in a map with the value of `(f key)`.
 */
metabase.util.recursive_map_keys = (function metabase$util$recursive_map_keys(f,m){
return clojure.walk.postwalk((function (p1__56658_SHARP_){
if(cljs.core.map_QMARK_(p1__56658_SHARP_)){
return medley.core.map_keys(f,p1__56658_SHARP_);
} else {
return p1__56658_SHARP_;
}
}),m);
});
/**
 * Fixes strings that don't terminate in a period; also accounts for strings
 *   that end in `:`. Used for formatting docs.
 */
metabase.util.add_period = (function metabase$util$add_period(s){
var text = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_((function (){var or__5045__auto__ = clojure.string.blank_QMARK_(text);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var G__56660 = cljs.core.last(text);
var fexpr__56659 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["!",null,".",null,"?",null], null), null);
return (fexpr__56659.cljs$core$IFn$_invoke$arity$1 ? fexpr__56659.cljs$core$IFn$_invoke$arity$1(G__56660) : fexpr__56659.call(null,G__56660));
}
})())){
return text;
} else {
if(clojure.string.ends_with_QMARK_(text,":")){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),(((text).length) - (1))),"."].join('');
} else {
return [text,"."].join('');
}
}
});
/**
 * Locale-agnostic version of [[clojure.string/lower-case]]. [[clojure.string/lower-case]] uses the default locale in
 *   conversions, turning `ID` into `ıd`, in the Turkish locale. This function always uses the `en-US` locale.
 */
metabase.util.lower_case_en = (function metabase$util$lower_case_en(s){
return s.toLowerCase();
});
/**
 * Locale-agnostic version of `clojure.string/upper-case`.
 *   `clojure.string/upper-case` uses the default locale in conversions, turning
 *   `id` into `İD`, in the Turkish locale. This function always uses the
 *   `en-US` locale.
 */
metabase.util.upper_case_en = (function metabase$util$upper_case_en(s){
return s.toUpperCase();
});
/**
 * Locale-agnostic version of [[clojure.string/capitalize]].
 */
metabase.util.capitalize_en = (function metabase$util$capitalize_en(s){
var temp__5804__auto__ = (function (){var G__56661 = s;
if((G__56661 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56661);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var s__$1 = temp__5804__auto__;
if((((s__$1).length) < (2))){
return metabase.util.upper_case_en(s__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.util.upper_case_en(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.util.lower_case_en(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1))))].join('');
}
} else {
return null;
}
});
metabase.util.__GT_kebab_case_en_STAR_ = (function metabase$util$__GT_kebab_case_en_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56856 = arguments.length;
var i__5770__auto___56857 = (0);
while(true){
if((i__5770__auto___56857 < len__5769__auto___56856)){
args__5775__auto__.push((arguments[i__5770__auto___56857]));

var G__56858 = (i__5770__auto___56857 + (1));
i__5770__auto___56857 = G__56858;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_kebab_case_en_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_kebab_case_en_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (s__53885__auto__,rest__53886__auto__){
var convert_case__53887__auto__ = (function (p1__53884__53888__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"-",p1__53884__53888__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53886__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__53885__auto__,convert_case__53887__auto__);
}));

(metabase.util.__GT_kebab_case_en_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_kebab_case_en_STAR_.cljs$lang$applyTo = (function (seq56664){
var G__56665 = cljs.core.first(seq56664);
var seq56664__$1 = cljs.core.next(seq56664);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56665,seq56664__$1);
}));


metabase.util.__GT_kebab_case_en_STAR__string = (function metabase$util$__GT_kebab_case_en_STAR__string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56859 = arguments.length;
var i__5770__auto___56860 = (0);
while(true){
if((i__5770__auto___56860 < len__5769__auto___56859)){
args__5775__auto__.push((arguments[i__5770__auto___56860]));

var G__56861 = (i__5770__auto___56860 + (1));
i__5770__auto___56860 = G__56861;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_kebab_case_en_STAR__string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_kebab_case_en_STAR__string.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"-",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_kebab_case_en_STAR__string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_kebab_case_en_STAR__string.cljs$lang$applyTo = (function (seq56666){
var G__56668 = cljs.core.first(seq56666);
var seq56666__$1 = cljs.core.next(seq56666);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56668,seq56666__$1);
}));


metabase.util.__GT_kebab_case_en_STAR__symbol = (function metabase$util$__GT_kebab_case_en_STAR__symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56862 = arguments.length;
var i__5770__auto___56863 = (0);
while(true){
if((i__5770__auto___56863 < len__5769__auto___56862)){
args__5775__auto__.push((arguments[i__5770__auto___56863]));

var G__56864 = (i__5770__auto___56863 + (1));
i__5770__auto___56863 = G__56864;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_kebab_case_en_STAR__symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_kebab_case_en_STAR__symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"-",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_kebab_case_en_STAR__symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_kebab_case_en_STAR__symbol.cljs$lang$applyTo = (function (seq56673){
var G__56674 = cljs.core.first(seq56673);
var seq56673__$1 = cljs.core.next(seq56673);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56674,seq56673__$1);
}));


metabase.util.__GT_kebab_case_en_STAR__keyword = (function metabase$util$__GT_kebab_case_en_STAR__keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56866 = arguments.length;
var i__5770__auto___56871 = (0);
while(true){
if((i__5770__auto___56871 < len__5769__auto___56866)){
args__5775__auto__.push((arguments[i__5770__auto___56871]));

var G__56872 = (i__5770__auto___56871 + (1));
i__5770__auto___56871 = G__56872;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_kebab_case_en_STAR__keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_kebab_case_en_STAR__keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"-",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_kebab_case_en_STAR__keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_kebab_case_en_STAR__keyword.cljs$lang$applyTo = (function (seq56675){
var G__56677 = cljs.core.first(seq56675);
var seq56675__$1 = cljs.core.next(seq56675);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56677,seq56675__$1);
}));

metabase.util.__GT_camelCaseEn_STAR_ = (function metabase$util$__GT_camelCaseEn_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56873 = arguments.length;
var i__5770__auto___56874 = (0);
while(true){
if((i__5770__auto___56874 < len__5769__auto___56873)){
args__5775__auto__.push((arguments[i__5770__auto___56874]));

var G__56875 = (i__5770__auto___56874 + (1));
i__5770__auto___56874 = G__56875;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_camelCaseEn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_camelCaseEn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (s__53885__auto__,rest__53886__auto__){
var convert_case__53887__auto__ = (function (p1__53884__53888__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.capitalize_en,"",p1__53884__53888__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53886__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__53885__auto__,convert_case__53887__auto__);
}));

(metabase.util.__GT_camelCaseEn_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_camelCaseEn_STAR_.cljs$lang$applyTo = (function (seq56678){
var G__56679 = cljs.core.first(seq56678);
var seq56678__$1 = cljs.core.next(seq56678);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56679,seq56678__$1);
}));


metabase.util.__GT_camelCaseEn_STAR_String = (function metabase$util$__GT_camelCaseEn_STAR_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56876 = arguments.length;
var i__5770__auto___56877 = (0);
while(true){
if((i__5770__auto___56877 < len__5769__auto___56876)){
args__5775__auto__.push((arguments[i__5770__auto___56877]));

var G__56880 = (i__5770__auto___56877 + (1));
i__5770__auto___56877 = G__56880;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_camelCaseEn_STAR_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_camelCaseEn_STAR_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.capitalize_en,"",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_camelCaseEn_STAR_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_camelCaseEn_STAR_String.cljs$lang$applyTo = (function (seq56680){
var G__56681 = cljs.core.first(seq56680);
var seq56680__$1 = cljs.core.next(seq56680);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56681,seq56680__$1);
}));


metabase.util.__GT_camelCaseEn_STAR_Symbol = (function metabase$util$__GT_camelCaseEn_STAR_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56886 = arguments.length;
var i__5770__auto___56887 = (0);
while(true){
if((i__5770__auto___56887 < len__5769__auto___56886)){
args__5775__auto__.push((arguments[i__5770__auto___56887]));

var G__56888 = (i__5770__auto___56887 + (1));
i__5770__auto___56887 = G__56888;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_camelCaseEn_STAR_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_camelCaseEn_STAR_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.capitalize_en,"",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_camelCaseEn_STAR_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_camelCaseEn_STAR_Symbol.cljs$lang$applyTo = (function (seq56686){
var G__56687 = cljs.core.first(seq56686);
var seq56686__$1 = cljs.core.next(seq56686);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56687,seq56686__$1);
}));


metabase.util.__GT_camelCaseEn_STAR_Keyword = (function metabase$util$__GT_camelCaseEn_STAR_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56891 = arguments.length;
var i__5770__auto___56892 = (0);
while(true){
if((i__5770__auto___56892 < len__5769__auto___56891)){
args__5775__auto__.push((arguments[i__5770__auto___56892]));

var G__56893 = (i__5770__auto___56892 + (1));
i__5770__auto___56892 = G__56893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_camelCaseEn_STAR_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_camelCaseEn_STAR_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.capitalize_en,"",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_camelCaseEn_STAR_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_camelCaseEn_STAR_Keyword.cljs$lang$applyTo = (function (seq56694){
var G__56695 = cljs.core.first(seq56694);
var seq56694__$1 = cljs.core.next(seq56694);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56695,seq56694__$1);
}));

metabase.util.__GT_snake_case_en_STAR_ = (function metabase$util$__GT_snake_case_en_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56895 = arguments.length;
var i__5770__auto___56896 = (0);
while(true){
if((i__5770__auto___56896 < len__5769__auto___56895)){
args__5775__auto__.push((arguments[i__5770__auto___56896]));

var G__56897 = (i__5770__auto___56896 + (1));
i__5770__auto___56896 = G__56897;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_snake_case_en_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_snake_case_en_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (s__53885__auto__,rest__53886__auto__){
var convert_case__53887__auto__ = (function (p1__53884__53888__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"_",p1__53884__53888__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53886__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__53885__auto__,convert_case__53887__auto__);
}));

(metabase.util.__GT_snake_case_en_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_snake_case_en_STAR_.cljs$lang$applyTo = (function (seq56700){
var G__56701 = cljs.core.first(seq56700);
var seq56700__$1 = cljs.core.next(seq56700);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56701,seq56700__$1);
}));


metabase.util.__GT_snake_case_en_STAR__string = (function metabase$util$__GT_snake_case_en_STAR__string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56899 = arguments.length;
var i__5770__auto___56900 = (0);
while(true){
if((i__5770__auto___56900 < len__5769__auto___56899)){
args__5775__auto__.push((arguments[i__5770__auto___56900]));

var G__56901 = (i__5770__auto___56900 + (1));
i__5770__auto___56900 = G__56901;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_snake_case_en_STAR__string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_snake_case_en_STAR__string.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"_",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_snake_case_en_STAR__string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_snake_case_en_STAR__string.cljs$lang$applyTo = (function (seq56703){
var G__56704 = cljs.core.first(seq56703);
var seq56703__$1 = cljs.core.next(seq56703);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56704,seq56703__$1);
}));


metabase.util.__GT_snake_case_en_STAR__symbol = (function metabase$util$__GT_snake_case_en_STAR__symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56906 = arguments.length;
var i__5770__auto___56907 = (0);
while(true){
if((i__5770__auto___56907 < len__5769__auto___56906)){
args__5775__auto__.push((arguments[i__5770__auto___56907]));

var G__56908 = (i__5770__auto___56907 + (1));
i__5770__auto___56907 = G__56908;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_snake_case_en_STAR__symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_snake_case_en_STAR__symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"_",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_snake_case_en_STAR__symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_snake_case_en_STAR__symbol.cljs$lang$applyTo = (function (seq56705){
var G__56706 = cljs.core.first(seq56705);
var seq56705__$1 = cljs.core.next(seq56705);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56706,seq56705__$1);
}));


metabase.util.__GT_snake_case_en_STAR__keyword = (function metabase$util$__GT_snake_case_en_STAR__keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56909 = arguments.length;
var i__5770__auto___56910 = (0);
while(true){
if((i__5770__auto___56910 < len__5769__auto___56909)){
args__5775__auto__.push((arguments[i__5770__auto___56910]));

var G__56911 = (i__5770__auto___56910 + (1));
i__5770__auto___56910 = G__56911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_snake_case_en_STAR__keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_snake_case_en_STAR__keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"_",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_snake_case_en_STAR__keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_snake_case_en_STAR__keyword.cljs$lang$applyTo = (function (seq56707){
var G__56708 = cljs.core.first(seq56707);
var seq56707__$1 = cljs.core.next(seq56707);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56708,seq56707__$1);
}));

metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_ = (function metabase$util$__GT_SCREAMING_SNAKE_CASE_EN_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56912 = arguments.length;
var i__5770__auto___56913 = (0);
while(true){
if((i__5770__auto___56913 < len__5769__auto___56912)){
args__5775__auto__.push((arguments[i__5770__auto___56913]));

var G__56914 = (i__5770__auto___56913 + (1));
i__5770__auto___56913 = G__56914;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (s__53885__auto__,rest__53886__auto__){
var convert_case__53887__auto__ = (function (p1__53884__53888__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.upper_case_en,metabase.util.upper_case_en,"_",p1__53884__53888__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53886__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__53885__auto__,convert_case__53887__auto__);
}));

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_.cljs$lang$applyTo = (function (seq56710){
var G__56711 = cljs.core.first(seq56710);
var seq56710__$1 = cljs.core.next(seq56710);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56711,seq56710__$1);
}));


metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING = (function metabase$util$__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56915 = arguments.length;
var i__5770__auto___56916 = (0);
while(true){
if((i__5770__auto___56916 < len__5769__auto___56915)){
args__5775__auto__.push((arguments[i__5770__auto___56916]));

var G__56917 = (i__5770__auto___56916 + (1));
i__5770__auto___56916 = G__56917;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.upper_case_en,metabase.util.upper_case_en,"_",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING.cljs$lang$applyTo = (function (seq56712){
var G__56713 = cljs.core.first(seq56712);
var seq56712__$1 = cljs.core.next(seq56712);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56713,seq56712__$1);
}));


metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL = (function metabase$util$__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56918 = arguments.length;
var i__5770__auto___56919 = (0);
while(true){
if((i__5770__auto___56919 < len__5769__auto___56918)){
args__5775__auto__.push((arguments[i__5770__auto___56919]));

var G__56920 = (i__5770__auto___56919 + (1));
i__5770__auto___56919 = G__56920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.upper_case_en,metabase.util.upper_case_en,"_",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL.cljs$lang$applyTo = (function (seq56714){
var G__56715 = cljs.core.first(seq56714);
var seq56714__$1 = cljs.core.next(seq56714);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56715,seq56714__$1);
}));


metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD = (function metabase$util$__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56923 = arguments.length;
var i__5770__auto___56924 = (0);
while(true){
if((i__5770__auto___56924 < len__5769__auto___56923)){
args__5775__auto__.push((arguments[i__5770__auto___56924]));

var G__56925 = (i__5770__auto___56924 + (1));
i__5770__auto___56924 = G__56925;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__53890__auto__,rest__53891__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.upper_case_en,metabase.util.upper_case_en,"_",cljs.core.name(s__53890__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__53891__auto__], 0)));
}));

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD.cljs$lang$applyTo = (function (seq56716){
var G__56717 = cljs.core.first(seq56716);
var seq56716__$1 = cljs.core.next(seq56716);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56717,seq56716__$1);
}));

/**
 * Wrap a CSK defconversion function so that it handles nil and namespaced keywords, which it doesn't support out of the
 *   box for whatever reason.
 */
metabase.util.wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords = (function metabase$util$wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords(f){
return (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.qualified_keyword_QMARK_(x)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var G__56718 = cljs.core.namespace(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56718) : f.call(null,G__56718));
})(),(function (){var G__56719 = cljs.core.name(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56719) : f.call(null,G__56719));
})());
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}
} else {
return null;
}
});
});
/**
 * Like [[camel-snake-kebab.core/->kebab-case]], but always uses English for lower-casing, supports keywords with
 *   namespaces, and returns `nil` when passed `nil` (rather than throwing an exception).
 */
metabase.util.__GT_kebab_case_en = metabase.util.wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords(metabase.util.__GT_kebab_case_en_STAR_);
/**
 * Like [[camel-snake-kebab.core/->snake_case]], but always uses English for lower-casing, supports keywords with
 *   namespaces, and returns `nil` when passed `nil` (rather than throwing an exception).
 */
metabase.util.__GT_snake_case_en = metabase.util.wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords(metabase.util.__GT_snake_case_en_STAR_);
/**
 * Like [[camel-snake-kebab.core/->camelCase]], but always uses English for upper- and lower-casing, supports keywords
 *   with namespaces, and returns `nil` when passed `nil` (rather than throwing an exception).
 */
metabase.util.__GT_camelCaseEn = metabase.util.wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords(metabase.util.__GT_camelCaseEn_STAR_);
/**
 * Like [[camel-snake-kebab.core/->SCREAMING_SNAKE_CASE]], but always uses English for upper- and lower-casing, supports
 *   keywords with namespaces, and returns `nil` when passed `nil` (rather than throwing an exception).
 */
metabase.util.__GT_SCREAMING_SNAKE_CASE_EN = metabase.util.wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_);
/**
 * Like string/capitalize, only it ignores the rest of the string
 *   to retain case-sensitive capitalization, e.g., PostgreSQL.
 */
metabase.util.capitalize_first_char = (function metabase$util$capitalize_first_char(s){
if((cljs.core.count(s) < (2))){
return metabase.util.upper_case_en(s);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.util.upper_case_en(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join('');
}
});
/**
 * Convert the keys in a map from `kebab-case` to `snake_case`.
 */
metabase.util.snake_keys = (function metabase$util$snake_keys(m){
return metabase.util.recursive_map_keys(metabase.util.__GT_snake_case_en,m);
});
/**
 * Given any map-like object, return it as a Clojure map with :kebab-case keyword keys.
 *   The input map can be a:
 *   - Clojure map with string or keyword keys,
 *   - JS object (with string keys)
 *   The keys are converted to `kebab-case` from `camelCase` or `snake_case` as necessary, and turned into keywords.
 * 
 *   Returns an empty map if nil is input (like [[update-keys]]).
 */
metabase.util.normalize_map = (function metabase$util$normalize_map(m){
var base = ((cljs.core.object_QMARK_(m))?cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(m):m);
return cljs.core.update_keys(base,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,metabase.util.__GT_kebab_case_en));
});
(cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.constantly((120)));
/**
 * Is `s` a valid email address string?
 */
metabase.util.email_QMARK_ = (function metabase$util$email_QMARK_(s){
return cljs.core.boolean$(((typeof s === 'string')?cljs.core.re_matches(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,metabase.util.lower_case_en(s)):null));
});
/**
 * Is `s` a state string?
 */
metabase.util.state_QMARK_ = (function metabase$util$state_QMARK_(s){
return cljs.core.boolean$(((typeof s === 'string')?cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 100, ["rhode island",null,"delaware",null,"ct",null,"ohio",null,"new york",null,"colorado",null,"nh",null,"wi",null,"la",null,"california",null,"md",null,"wisconsin",null,"massachusetts",null,"ne",null,"alaska",null,"al",null,"pennsylvania",null,"oklahoma",null,"texas",null,"mo",null,"vt",null,"north carolina",null,"idaho",null,"nevada",null,"new jersey",null,"indiana",null,"west virginia",null,"florida",null,"new mexico",null,"nc",null,"ky",null,"maine",null,"sc",null,"kentucky",null,"id",null,"arkansas",null,"utah",null,"co",null,"connecticut",null,"vermont",null,"ca",null,"mi",null,"ut",null,"wv",null,"kansas",null,"ma",null,"ia",null,"wa",null,"ms",null,"south dakota",null,"fl",null,"il",null,"oh",null,"south carolina",null,"tn",null,"or",null,"de",null,"ri",null,"hi",null,"wy",null,"iowa",null,"maryland",null,"ga",null,"hawaii",null,"montana",null,"wyoming",null,"mt",null,"tx",null,"missouri",null,"oregon",null,"georgia",null,"nm",null,"mn",null,"north dakota",null,"virginia",null,"illinois",null,"ar",null,"ny",null,"sd",null,"ak",null,"ok",null,"alabama",null,"nv",null,"louisiana",null,"nebraska",null,"tennessee",null,"new hampshire",null,"washington",null,"pa",null,"va",null,"minnesota",null,"ks",null,"me",null,"nj",null,"arizona",null,"michigan",null,"in",null,"az",null,"mississippi",null,"nd",null], null), null),metabase.util.lower_case_en(s)):null));
});
metabase.util.url_regex_pattern = (function (){var alpha = "Alphabetic";
return ["^[\\p{",alpha,"}\\d_\\-]+(\\.[\\p{",alpha,"}\\d_\\-]+)*(:\\d*)?"].join('');
})();
/**
 * Is `s` a valid HTTP/HTTPS URL string?
 */
metabase.util.url_QMARK_ = (function metabase$util$url_QMARK_(s){
try{var url = (new URL(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
return cljs.core.boolean$((function (){var and__5043__auto__ = cljs.core.re_matches((new RegExp(metabase.util.url_regex_pattern,"u")),url.host);
if(cljs.core.truth_(and__5043__auto__)){
var G__56722 = url.protocol;
var fexpr__56721 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (fexpr__56721.cljs$core$IFn$_invoke$arity$1 ? fexpr__56721.cljs$core$IFn$_invoke$arity$1(G__56722) : fexpr__56721.call(null,G__56722));
} else {
return and__5043__auto__;
}
})());
}catch (e56720){if((e56720 instanceof Error)){
var _ = e56720;
return false;
} else {
throw e56720;

}
}});
/**
 * Returns `true` if X is `nil`, otherwise calls (F X).
 * This can be used to see something is either `nil` or statisfies a predicate function:
 * 
 *   (string? nil)          -> false
 *   (string? "A")        -> true
 *   (maybe? string? nil)   -> true
 *   (maybe? string? "A") -> true
 * 
 * It can also be used to make sure a given function won't throw a `NullPointerException`:
 * 
 *   (str/lower-case nil)            -> NullPointerException
 *   (str/lower-case "ABC")        -> "abc"
 *   (maybe? str/lower-case nil)     -> true
 *   (maybe? str/lower-case "ABC") -> "abc"
 * 
 * The latter use-case can be useful for things like sorting where some values in a collection
 * might be `nil`:
 * 
 *   (sort-by (partial maybe? s/lower-case) some-collection)
 */
metabase.util.maybe_QMARK_ = (function metabase$util$maybe_QMARK_(f,x){
var or__5045__auto__ = (x == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}
});
/**
 * Returns the `emoji-string` passed in if emoji in logs are enabled, otherwise always returns an empty string.
 */
metabase.util.emoji = cljs.core.constantly("");
/**
 * Round (presumabily floating-point) `number` to `decimal-place`. Returns a `Double`.
 * 
 *   Rounds by decimal places, no matter how many significant figures the number has. See [[round-to-precision]].
 * 
 *  (round-to-decimals 2 35.5058998M) -> 35.51
 */
metabase.util.round_to_decimals = (function metabase$util$round_to_decimals(decimal_place,number){
if(cljs.core.integer_QMARK_(decimal_place)){
} else {
throw (new Error("Assert failed: (integer? decimal-place)"));
}

if(typeof number === 'number'){
} else {
throw (new Error("Assert failed: (number? number)"));
}

return number.toPrecision(decimal_place);
});
/**
 * Is `x` a real number (i.e. not a `NaN` or an `Infinity`)?
 */
metabase.util.real_number_QMARK_ = (function metabase$util$real_number_QMARK_(x){
return ((typeof x === 'number') && ((((!(cljs.core.NaN_QMARK_(x)))) && ((!(cljs.core.infinite_QMARK_(x)))))));
});
/**
 * Return a version of `s` with diacritical marks removed.
 */
metabase.util.remove_diacritical_marks = (function metabase$util$remove_diacritical_marks(s){
if(cljs.core.seq(s)){
return s.normalize("NFKD").replace((new RegExp("[\u0300-\u036F]","gu")),"");
} else {
return null;
}
});
/**
 * Valid *ASCII* characters for URL slugs generated by `slugify`.
 */
metabase.util.slugify_valid_chars = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 37, ["a",null,"b",null,"c",null,"d",null,"e",null,"f",null,"g",null,"h",null,"i",null,"j",null,"k",null,"l",null,"m",null,"n",null,"o",null,"0",null,"p",null,"1",null,"q",null,"2",null,"r",null,"3",null,"s",null,"4",null,"t",null,"5",null,"u",null,"6",null,"v",null,"7",null,"w",null,"8",null,"x",null,"9",null,"y",null,"z",null,"_",null], null), null);
metabase.util.slugify_char = (function metabase$util$slugify_char(c,url_encode_QMARK_){
if((c.charCodeAt((0)) < (128))){
if(cljs.core.contains_QMARK_(metabase.util.slugify_valid_chars,c)){
return c;
} else {
return "_";
}
} else {
if(cljs.core.truth_(url_encode_QMARK_)){
return encodeURIComponent(c);
} else {
return c;
}
}
});
/**
 * Return a version of String `s` appropriate for use as a URL slug.
 *   Downcase the name and remove diacritcal marks, and replace non-alphanumeric *ASCII* characters with underscores.
 * 
 *   If `unicode?` is falsy (the default), URL-encode non-ASCII characters. With `unicode?` truthy, non-ASCII characters
 *   are preserved.
 *   (Even when we want full ASCII output for eg. URL slugs, non-ASCII characters should be encoded rather than
 *   replaced with underscores in order to support languages that don't use the Latin alphabet; see metabase#3818).
 * 
 *   Optionally specify `:max-length` which will truncate the slug after that many characters.
 */
metabase.util.slugify = (function metabase$util$slugify(var_args){
var G__56725 = arguments.length;
switch (G__56725) {
case 1:
return metabase.util.slugify.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.util.slugify.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.util.slugify.cljs$core$IFn$_invoke$arity$1 = (function (s){
return metabase.util.slugify.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(metabase.util.slugify.cljs$core$IFn$_invoke$arity$2 = (function (s,p__56726){
var map__56727 = p__56726;
var map__56727__$1 = cljs.core.__destructure_map(map__56727);
var max_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56727__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var unicode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56727__$1,new cljs.core.Keyword(null,"unicode?","unicode?",-1511958714));
if(cljs.core.seq(s)){
var slug = clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function metabase$util$iter__56728(s__56729){
return (new cljs.core.LazySeq(null,(function (){
var s__56729__$1 = s__56729;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56729__$1);
if(temp__5804__auto__){
var s__56729__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56729__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56729__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56731 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56730 = (0);
while(true){
if((i__56730 < size__5522__auto__)){
var c = cljs.core._nth(c__5521__auto__,i__56730);
cljs.core.chunk_append(b__56731,metabase.util.slugify_char(c,cljs.core.not(unicode_QMARK_)));

var G__56961 = (i__56730 + (1));
i__56730 = G__56961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56731),metabase$util$iter__56728(cljs.core.chunk_rest(s__56729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56731),null);
}
} else {
var c = cljs.core.first(s__56729__$2);
return cljs.core.cons(metabase.util.slugify_char(c,cljs.core.not(unicode_QMARK_)),metabase$util$iter__56728(cljs.core.rest(s__56729__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(metabase.util.remove_diacritical_marks(metabase.util.lower_case_en(s)));
})());
if(cljs.core.truth_(max_length)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_length,slug));
} else {
return slug;
}
} else {
return null;
}
}));

(metabase.util.slugify.cljs$lang$maxFixedArity = 2);

/**
 * If passed an integer ID, returns it. If passed a map containing an `:id` key, returns the value if it is an integer.
 *   Otherwise returns `nil`.
 * 
 *   Provided as a convenience to allow model-layer functions to easily accept either an object or raw ID. Use this in
 *   cases where the ID/object is allowed to be `nil`. Use `the-id` below in cases where you would also like to guarantee
 *   it is non-`nil`.
 */
metabase.util.id = (function metabase$util$id(object_or_id){
while(true){
if(cljs.core.map_QMARK_(object_or_id)){
var G__56965 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object_or_id);
object_or_id = G__56965;
continue;
} else {
if(cljs.core.integer_QMARK_(object_or_id)){
return object_or_id;
} else {
return null;
}
}
break;
}
});
/**
 * If passed an integer ID, returns it. If passed a map containing an `:id` key, returns the value if it is an integer.
 *   Otherwise, throws an Exception.
 * 
 *   Provided as a convenience to allow model-layer functions to easily accept either an object or raw ID, and to assert
 *   that you have a valid ID.
 */
metabase.util.the_id = (function metabase$util$the_id(object_or_id){
var or__5045__auto__ = metabase.util.id(object_or_id);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw metabase.util.error(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Not something with an ID: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object_or_id], 0))], 0)));
}
});
/**
 * A regular expression for matching canonical string representations of UUIDs.
 */
metabase.util.uuid_regex = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/;
/**
 * Wraps a single element in a sequence; returns sequences as-is. In lots of situations we'd like to accept either a
 *   single value or a collection of values as an argument to a function, and then loop over them; rather than repeat
 *   logic to check whether something is a collection and wrap if not everywhere, this utility function is provided for
 *   your convenience.
 * 
 *  (u/one-or-many 1)     ; -> [1]
 *  (u/one-or-many [1 2]) ; -> [1 2]
 */
metabase.util.one_or_many = (function metabase$util$one_or_many(arg){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.nil_QMARK_)(arg))){
return arg;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null);
}
});
/**
 * Returns coll if it has multiple elements, or else returns its only element
 */
metabase.util.many_or_one = (function metabase$util$many_or_one(coll){
if(cljs.core.next(coll)){
return coll;
} else {
return cljs.core.first(coll);
}
});
/**
 * Like `select-keys`, but can also handle nested keypaths:
 * 
 *   (select-nested-keys {:a 100, :b {:c 200, :d 300}} [:a [:b :d] :c])
 *   ;; -> {:a 100, :b {:d 300}}
 * 
 * The values of `keyseq` can be either regular keys, which work the same way as `select-keys`,
 * or vectors of the form `[k & nested-keys]`, which call `select-nested-keys` recursively
 * on the value of `k`. 
 */
metabase.util.select_nested_keys = (function metabase$util$select_nested_keys(m,keyseq){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$util$select_nested_keys_$_iter__56732(s__56733){
return (new cljs.core.LazySeq(null,(function (){
var s__56733__$1 = s__56733;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56733__$1);
if(temp__5804__auto__){
var s__56733__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56733__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56733__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56735 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56734 = (0);
while(true){
if((i__56734 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__56734);
var vec__56736 = metabase.util.one_or_many(k);
var seq__56737 = cljs.core.seq(vec__56736);
var first__56738 = cljs.core.first(seq__56737);
var seq__56737__$1 = cljs.core.next(seq__56737);
var k__$1 = first__56738;
var nested_keys = seq__56737__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
if(cljs.core.contains_QMARK_(m,k__$1)){
cljs.core.chunk_append(b__56735,cljs.core.PersistentArrayMap.createAsIfByAssoc([k__$1,((cljs.core.not(cljs.core.seq(nested_keys)))?v:(metabase.util.select_nested_keys.cljs$core$IFn$_invoke$arity$2 ? metabase.util.select_nested_keys.cljs$core$IFn$_invoke$arity$2(v,nested_keys) : metabase.util.select_nested_keys.call(null,v,nested_keys)))]));

var G__56979 = (i__56734 + (1));
i__56734 = G__56979;
continue;
} else {
var G__56980 = (i__56734 + (1));
i__56734 = G__56980;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56735),metabase$util$select_nested_keys_$_iter__56732(cljs.core.chunk_rest(s__56733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56735),null);
}
} else {
var k = cljs.core.first(s__56733__$2);
var vec__56739 = metabase.util.one_or_many(k);
var seq__56740 = cljs.core.seq(vec__56739);
var first__56741 = cljs.core.first(seq__56740);
var seq__56740__$1 = cljs.core.next(seq__56740);
var k__$1 = first__56741;
var nested_keys = seq__56740__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
if(cljs.core.contains_QMARK_(m,k__$1)){
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([k__$1,((cljs.core.not(cljs.core.seq(nested_keys)))?v:(metabase.util.select_nested_keys.cljs$core$IFn$_invoke$arity$2 ? metabase.util.select_nested_keys.cljs$core$IFn$_invoke$arity$2(v,nested_keys) : metabase.util.select_nested_keys.call(null,v,nested_keys)))]),metabase$util$select_nested_keys_$_iter__56732(cljs.core.rest(s__56733__$2)));
} else {
var G__56986 = cljs.core.rest(s__56733__$2);
s__56733__$1 = G__56986;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(keyseq);
})());
});
/**
 * Is `s` a Base-64 encoded string?
 */
metabase.util.base64_string_QMARK_ = (function metabase$util$base64_string_QMARK_(s){
return cljs.core.boolean$(((typeof s === 'string')?(function (){var s__$1 = s;
var s__$2 = clojure.string.replace(s__$1,/\s/,"");
return cljs.core.re_matches(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/,s__$2);
})():null));
});
/**
 * Returns coll split into seqs of up to n items
 */
metabase.util.batches_of = (function metabase$util$batches_of(n,coll){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$4(n,n,null,coll);
});
/**
 * Increment `n` if it is non-`nil`, otherwise return `1` (e.g. as if incrementing `0`).
 */
metabase.util.safe_inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
/**
 * Like `select-keys`, but returns a map only containing keys in KS that are present *and non-nil* in M.
 * 
 *   (select-non-nil-keys {:a 100, :b nil} #{:a :b :c})
 *   ;; -> {:a 100}
 */
metabase.util.select_non_nil_keys = (function metabase$util$select_non_nil_keys(m,ks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$util$select_non_nil_keys_$_iter__56742(s__56743){
return (new cljs.core.LazySeq(null,(function (){
var s__56743__$1 = s__56743;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56743__$1);
if(temp__5804__auto__){
var s__56743__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56743__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56743__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56745 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56744 = (0);
while(true){
if((i__56744 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__56744);
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null)))){
cljs.core.chunk_append(b__56745,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)]));

var G__56990 = (i__56744 + (1));
i__56744 = G__56990;
continue;
} else {
var G__56991 = (i__56744 + (1));
i__56744 = G__56991;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56745),metabase$util$select_non_nil_keys_$_iter__56742(cljs.core.chunk_rest(s__56743__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56745),null);
}
} else {
var k = cljs.core.first(s__56743__$2);
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null)))){
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)]),metabase$util$select_non_nil_keys_$_iter__56742(cljs.core.rest(s__56743__$2)));
} else {
var G__56995 = cljs.core.rest(s__56743__$2);
s__56743__$1 = G__56995;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(ks);
})());
});
/**
 * Returns a map that only contains keys that are either `:present` or `:non-nil`. Combines behavior of `select-keys`
 *   and `select-non-nil-keys`. This is useful for API endpoints that update a model, which often have complex rules
 *   about what gets updated (some keys are updated if `nil`, others only if non-nil).
 * 
 *   (select-keys-when {:a 100, :b nil, :d 200, :e nil}
 *     :present #{:a :b :c}
 *     :non-nil #{:d :e :f})
 *   ;; -> {:a 100, :b nil, :d 200}
 */
metabase.util.select_keys_when = (function metabase$util$select_keys_when(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56996 = arguments.length;
var i__5770__auto___56997 = (0);
while(true){
if((i__5770__auto___56997 < len__5769__auto___56996)){
args__5775__auto__.push((arguments[i__5770__auto___56997]));

var G__56998 = (i__5770__auto___56997 + (1));
i__5770__auto___56997 = G__56998;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.util.select_keys_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.util.select_keys_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__56748){
var map__56749 = p__56748;
var map__56749__$1 = cljs.core.__destructure_map(map__56749);
var options = map__56749__$1;
var present = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56749__$1,new cljs.core.Keyword(null,"present","present",-1224645465));
var non_nil = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56749__$1,new cljs.core.Keyword(null,"non-nil","non-nil",1888502833));
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"present","present",-1224645465),null,new cljs.core.Keyword(null,"non-nil","non-nil",1888502833),null], null), null),cljs.core.keys(options))){
} else {
throw (new Error("Assert failed: (every? #{:present :non-nil} (keys options))"));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(m,present),metabase.util.select_non_nil_keys(m,non_nil)], 0));
}));

(metabase.util.select_keys_when.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.select_keys_when.cljs$lang$applyTo = (function (seq56746){
var G__56747 = cljs.core.first(seq56746);
var seq56746__$1 = cljs.core.next(seq56746);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56747,seq56746__$1);
}));

/**
 * Return the order of magnitude as a power of 10 of a given number.
 */
metabase.util.order_of_magnitude = (function metabase$util$order_of_magnitude(x){
if((x === (0))){
return (0);
} else {
return Math.floor((Math.log(cljs.core.abs(x)) / Math.log((10))));
}
});
/**
 * Like `clojure.core/update` but does not create a new key if it does not exist. Useful when you don't want to create
 *   cruft.
 */
metabase.util.update_if_exists = (function metabase$util$update_if_exists(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56999 = arguments.length;
var i__5770__auto___57000 = (0);
while(true){
if((i__5770__auto___57000 < len__5769__auto___56999)){
args__5775__auto__.push((arguments[i__5770__auto___57000]));

var G__57002 = (i__5770__auto___57000 + (1));
i__5770__auto___57000 = G__57002;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return metabase.util.update_if_exists.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(metabase.util.update_if_exists.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,args){
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,m,k,f,args);
} else {
return m;
}
}));

(metabase.util.update_if_exists.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metabase.util.update_if_exists.cljs$lang$applyTo = (function (seq56750){
var G__56752 = cljs.core.first(seq56750);
var seq56750__$1 = cljs.core.next(seq56750);
var G__56753 = cljs.core.first(seq56750__$1);
var seq56750__$2 = cljs.core.next(seq56750__$1);
var G__56754 = cljs.core.first(seq56750__$2);
var seq56750__$3 = cljs.core.next(seq56750__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56752,G__56753,G__56754,seq56750__$3);
}));

/**
 * Like `clojure.core/update-in` but does not create new keys if they do not exist. Useful when you don't want to create
 *   cruft.
 */
metabase.util.update_in_if_exists = (function metabase$util$update_in_if_exists(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57003 = arguments.length;
var i__5770__auto___57004 = (0);
while(true){
if((i__5770__auto___57004 < len__5769__auto___57003)){
args__5775__auto__.push((arguments[i__5770__auto___57004]));

var G__57005 = (i__5770__auto___57004 + (1));
i__5770__auto___57004 = G__57005;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return metabase.util.update_in_if_exists.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(metabase.util.update_in_if_exists.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.util","not-found","metabase.util/not-found",186621342),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword("metabase.util","not-found","metabase.util/not-found",186621342)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,m,ks,f,args);
} else {
return m;
}
}));

(metabase.util.update_in_if_exists.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metabase.util.update_in_if_exists.cljs$lang$applyTo = (function (seq56757){
var G__56758 = cljs.core.first(seq56757);
var seq56757__$1 = cljs.core.next(seq56757);
var G__56759 = cljs.core.first(seq56757__$1);
var seq56757__$2 = cljs.core.next(seq56757__$1);
var G__56760 = cljs.core.first(seq56757__$2);
var seq56757__$3 = cljs.core.next(seq56757__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56758,G__56759,G__56760,seq56757__$3);
}));

/**
 * Return index of the first element in `coll` for which `pred` reutrns true.
 */
metabase.util.index_of = (function metabase$util$index_of(pred,coll){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return i;
} else {
return null;
}
}),coll));
});
/**
 * Returns truthy if `new-value` is a hexadecimal-string
 */
metabase.util.hexadecimal_string_QMARK_ = (function metabase$util$hexadecimal_string_QMARK_(new_value){
var and__5043__auto__ = typeof new_value === 'string';
if(and__5043__auto__){
return cljs.core.re_matches(/[0-9a-f]{64}/,new_value);
} else {
return and__5043__auto__;
}
});
/**
 * Topologically sorts vertexs in graph g. Graph is a map of vertexs to edges. Optionally takes an
 * additional argument `edges-fn`, a function used to extract edges. Returns data in the same shape
 * (a graph), only sorted.
 * 
 * Say you have a graph shaped like:
 * 
 *   a     b
 *   | \  |
 *   c  |  |
 *   \ | /
 *      d
 *      |
 *      e
 * 
 * (u/topological-sort identity {:b []
 *                               :c [:a]
 *                               :e [:d]
 *                               :d [:a :b :c]
 *                               :a []})
 * 
 * => (ordered-map :a [] :b [] :c [:a] :d [:a :b :c] :e [:d])
 * 
 * If the graph has cycles, throws an exception.
 * 
 * https://en.wikipedia.org/wiki/Topological_sorting
 */
metabase.util.topological_sort = (function metabase$util$topological_sort(var_args){
var G__56763 = arguments.length;
switch (G__56763) {
case 1:
return metabase.util.topological_sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.util.topological_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.util.topological_sort.cljs$core$IFn$_invoke$arity$1 = (function (g){
return metabase.util.topological_sort.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,g);
}));

(metabase.util.topological_sort.cljs$core$IFn$_invoke$arity$2 = (function (edges_fn,g){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(edges_fn,cljs.core.val))),(function() {
var G__57008 = null;
var G__57008__0 = (function (){
return weavejester.dependency.graph();
});
var G__57008__1 = (function (acc){
var sorted = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(g,weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$1(acc));
var independent = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(g)),cljs.core.set(sorted));
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (vertex){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(vertex) : g.call(null,vertex))], null);
})),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(independent,sorted)));
});
var G__57008__2 = (function (acc,p__56765){
var vec__56766 = p__56765;
var vertex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56766,(0),null);
var edges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56766,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,edge){
return weavejester.dependency.depend(acc__$1,vertex,edge);
}),acc,edges);
});
G__57008 = function(acc,p__56765){
switch(arguments.length){
case 0:
return G__57008__0.call(this);
case 1:
return G__57008__1.call(this,acc);
case 2:
return G__57008__2.call(this,acc,p__56765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57008.cljs$core$IFn$_invoke$arity$0 = G__57008__0;
G__57008.cljs$core$IFn$_invoke$arity$1 = G__57008__1;
G__57008.cljs$core$IFn$_invoke$arity$2 = G__57008__2;
return G__57008;
})()
,g);
}));

(metabase.util.topological_sort.cljs$lang$maxFixedArity = 2);

/**
 * Changes the keys of a given map to lower case.
 */
metabase.util.lower_case_map_keys = (function metabase$util$lower_case_map_keys(m){
return cljs.core.update_keys(m,(function (p1__56771_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(metabase.util.lower_case_en(cljs.core.name(p1__56771_SHARP_)));
}));
});
/**
 * Returns the output of pretty-printing `x` as a string.
 *   Optionally accepts `color-symb`, which colorizes the output (JVM only, it's ignored in CLJS).
 * 
 *   (pprint-to-str 'green some-obj)
 */
metabase.util.pprint_to_str = (function metabase$util$pprint_to_str(var_args){
var G__56773 = arguments.length;
switch (G__56773) {
case 1:
return metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1 = (function (x){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56774_57011 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56775_57012 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56776_57013 = true;
var _STAR_print_fn_STAR__temp_val__56777_57014 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56776_57013);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56777_57014);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56775_57012);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56774_57011);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
}));

(metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$2 = (function (color_symb,x){
return metabase.util.format.colorize(color_symb,metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(x));
}));

(metabase.util.pprint_to_str.cljs$lang$maxFixedArity = 2);

/**
 * Impl for `profile` macro -- don't use this directly. Nesting-level for the `profile` macro e.g. 0 for a top-level
 *   `profile` form or 1 for a form inside that.
 */
metabase.util._STAR_profile_level_STAR_ = (0);
/**
 * Impl for [[profile]] macro -- don't use this directly. Prints the `___ took ___` message at the conclusion of a
 *   [[profile]]d form.
 */
metabase.util._profile_print_time = (function metabase$util$_profile_print_time(message_thunk,start_time){
var level__47249__auto__ = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"info","info",-317069002));
var logger__47250__auto__ = "metabase.util";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47250__auto__,level__47249__auto__))){
var x__47251__auto__ = metabase.util.format.format_color.cljs$core$IFn$_invoke$arity$variadic((function (){var G__56778 = (cljs.core.mod(metabase.util._STAR_profile_level_STAR_,(4)) | (0));
switch (G__56778) {
case (0):
return new cljs.core.Keyword(null,"green","green",-945526839);

break;
case (1):
return new cljs.core.Keyword(null,"cyan","cyan",1118839274);

break;
case (2):
return new cljs.core.Keyword(null,"magenta","magenta",1687937081);

break;
case (3):
return new cljs.core.Keyword(null,"yellow","yellow",-881035449);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56778)].join('')));

}
})(),"%s%s took %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((metabase.util._STAR_profile_level_STAR_ > (0)))?[clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((metabase.util._STAR_profile_level_STAR_ - (1)),"  "))," \u2BA6 "].join(''):""),(message_thunk.cljs$core$IFn$_invoke$arity$0 ? message_thunk.cljs$core$IFn$_invoke$arity$0() : message_thunk.call(null)),metabase.util.format.format_nanoseconds((((1000000) * performance.now()) - start_time))], 0));
if((x__47251__auto__ instanceof Error)){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto__,level__47249__auto__,cljs.core.print_str(),x__47251__auto__);
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto__,level__47249__auto__,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__47251__auto__], 0)),null);
}
} else {
return null;
}
});
/**
 * Convert `seconds` to milliseconds. More readable than doing this math inline.
 */
metabase.util.seconds__GT_ms = (function metabase$util$seconds__GT_ms(seconds){
return (seconds * (1000));
});
/**
 * Convert `minutes` to seconds. More readable than doing this math inline.
 */
metabase.util.minutes__GT_seconds = (function metabase$util$minutes__GT_seconds(minutes){
return ((60) * minutes);
});
/**
 * Convert `minutes` to milliseconds. More readable than doing this math inline.
 */
metabase.util.minutes__GT_ms = (function metabase$util$minutes__GT_ms(minutes){
return metabase.util.seconds__GT_ms(metabase.util.minutes__GT_seconds(minutes));
});
/**
 * Convert `hours` to milliseconds. More readable than doing this math inline.
 */
metabase.util.hours__GT_ms = (function metabase$util$hours__GT_ms(hours){
return metabase.util.seconds__GT_ms(metabase.util.minutes__GT_seconds(((60) * hours)));
});
/**
 * Parse a currency String to a BigDecimal. Handles a variety of different formats, such as:
 * 
 *  $1,000.00
 *  -£127.54
 *  -127,54 €
 *  kr-127,54
 *  € 127,54-
 *  ¥200
 */
metabase.util.parse_currency = (function metabase$util$parse_currency(s){
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return parseFloat(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,clojure.string.replace),s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/[^\d,.-]+/,""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/(?<=\d)[,.](\d{3})/,"$1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/,/,"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/(^[^-]+)-$/,"-$1"], null)], null)));
}
});
/**
 * Extract the domain portion of an `email-address`.
 * 
 *  (email->domain "cam@toucan.farm") ; -> "toucan.farm"
 */
metabase.util.email__GT_domain = (function metabase$util$email__GT_domain(email_address){
if(typeof email_address === 'string'){
return cljs.core.last(cljs.core.re_find(/^.*@(.*$)/,email_address));
} else {
return null;
}
});
/**
 * Is `email-address` in `domain`?
 * 
 *  (email-in-domain? "cam@toucan.farm" "toucan.farm")  ; -> true
 *  (email-in-domain? "cam@toucan.farm" "metabase.com") ; -> false
 */
metabase.util.email_in_domain_QMARK_ = (function metabase$util$email_in_domain_QMARK_(email_address,domain){
if(metabase.util.email_QMARK_(email_address)){
} else {
throw (new Error("Assert failed: (email? email-address)"));
}

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.util.email__GT_domain(email_address),domain);
});
/**
 * Returns a pair [match others] where match is the first element of `coll` for which `pred` returns
 *   a truthy value and others is a sequence of the other elements of `coll` with the order preserved.
 *   Returns nil if no element satisfies `pred`.
 */
metabase.util.pick_first = (function metabase$util$pick_first(pred,coll){
var xs = cljs.core.seq(coll);
var prefix = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5804__auto__ = xs;
if(temp__5804__auto__){
var vec__56793 = temp__5804__auto__;
var seq__56794 = cljs.core.seq(vec__56793);
var first__56795 = cljs.core.first(seq__56794);
var seq__56794__$1 = cljs.core.next(seq__56794);
var x = first__56795;
var xs__$1 = seq__56794__$1;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(prefix,xs__$1)], null);
} else {
var G__57023 = xs__$1;
var G__57024 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,x);
xs = G__57023;
prefix = G__57024;
continue;
}
} else {
return null;
}
break;
}
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","nil","dispatch-type/nil",-2067723388),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","boolean","dispatch-type/boolean",179271749),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","string","dispatch-type/string",171698561),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","keyword","dispatch-type/keyword",-1316103320),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","number","dispatch-type/number",-594990247),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","integer","dispatch-type/integer",1558418815),new cljs.core.Keyword("dispatch-type","number","dispatch-type/number",-594990247));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","set","dispatch-type/set",-1894332821),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","symbol","dispatch-type/symbol",1044875899),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","fn","dispatch-type/fn",922813137),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","regex","dispatch-type/regex",-1190650143),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
/**
 * In Cljs `(type 1) is `js/Number`, but `(isa? 1 js/Number)` isn't truthy, so dispatching off of [[clojure.core/type]]
 *   doesn't really work the way we'd want. Also, type names are different between Clojure and ClojureScript.
 * 
 *   This function exists as a workaround: use it as a multimethod dispatch function for Cljc multimethods that would
 *   have dispatched on `type` if they were written in pure Clojure.
 * 
 *   Returns `:dispatch-type/*` if there is no mapping for the current type, but you can add more as needed if
 *   appropriate. All type keywords returned by this method also derive from `:dispatch-type/*`, meaning you can write an
 *   implementation for `:dispatch-type/*` and use it as a fallback method.
 * 
 *   Think of `:dispatch-type/*` as similar to how you would use `Object` if you were dispatching
 *   off of `type` in pure Clojure.
 */
metabase.util.dispatch_type_keyword = (function metabase$util$dispatch_type_keyword(x){
if((x == null)){
return new cljs.core.Keyword("dispatch-type","nil","dispatch-type/nil",-2067723388);
} else {
if(cljs.core.boolean_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","boolean","dispatch-type/boolean",179271749);
} else {
if(typeof x === 'string'){
return new cljs.core.Keyword("dispatch-type","string","dispatch-type/string",171698561);
} else {
if((x instanceof cljs.core.Keyword)){
return new cljs.core.Keyword("dispatch-type","keyword","dispatch-type/keyword",-1316103320);
} else {
if(cljs.core.integer_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","integer","dispatch-type/integer",1558418815);
} else {
if(typeof x === 'number'){
return new cljs.core.Keyword("dispatch-type","number","dispatch-type/number",-594990247);
} else {
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422);
} else {
if(cljs.core.sequential_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969);
} else {
if(cljs.core.set_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","set","dispatch-type/set",-1894332821);
} else {
if((x instanceof cljs.core.Symbol)){
return new cljs.core.Keyword("dispatch-type","symbol","dispatch-type/symbol",1044875899);
} else {
if(cljs.core.fn_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","fn","dispatch-type/fn",922813137);
} else {
if(cljs.core.regexp_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","regex","dispatch-type/regex",-1190650143);
} else {
return new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403);

}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Called like `(assoc m k v)`, this does [[assoc]] if `(some? v)`, and [[dissoc]] if not.
 * 
 *   Put another way: `k` will either be set to `v`, or removed.
 * 
 *   Note that if `v` is `false`, it will be handled with [[assoc]]; only `nil` causes a [[dissoc]].
 */
metabase.util.assoc_dissoc = (function metabase$util$assoc_dissoc(m,k,v){
if((!((v == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * Called like `(assoc m k v)`, this does [[assoc]] iff `m` does not contain `k`
 *   and `v` is not nil. Can be called with multiple key value pairs. If a key occurs
 *   more than once, only the first occurrence with a non-nil value is used.
 */
metabase.util.assoc_default = (function metabase$util$assoc_default(var_args){
var G__56807 = arguments.length;
switch (G__56807) {
case 3:
return metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___57030 = arguments.length;
var i__5770__auto___57031 = (0);
while(true){
if((i__5770__auto___57031 < len__5769__auto___57030)){
args_arr__5794__auto__.push((arguments[i__5770__auto___57031]));

var G__57032 = (i__5770__auto___57031 + (1));
i__5770__auto___57031 = G__57032;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((((v == null)) || (cljs.core.contains_QMARK_(m,k)))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3(m,k,v);
if(cljs.core.truth_(kvs)){
if(cljs.core.next(kvs)){
var G__57033 = ret;
var G__57034 = cljs.core.first(kvs);
var G__57035 = cljs.core.second(kvs);
var G__57036 = cljs.core.nnext(kvs);
m = G__57033;
k = G__57034;
v = G__57035;
kvs = G__57036;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("assoc-default expects an even number of key-values",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kvs","kvs",958455492),kvs], null));
}
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(metabase.util.assoc_default.cljs$lang$applyTo = (function (seq56803){
var G__56804 = cljs.core.first(seq56803);
var seq56803__$1 = cljs.core.next(seq56803);
var G__56805 = cljs.core.first(seq56803__$1);
var seq56803__$2 = cljs.core.next(seq56803__$1);
var G__56806 = cljs.core.first(seq56803__$2);
var seq56803__$3 = cljs.core.next(seq56803__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56804,G__56805,G__56806,seq56803__$3);
}));

(metabase.util.assoc_default.cljs$lang$maxFixedArity = (3));

/**
 * Given 2 lists of seq maps of changes, where each map an has an `id` key,
 *   return a map of 3 keys: `:to-create`, `:to-update`, `:to-delete`.
 * 
 *   Where:
 *   :to-create is a list of maps that ids in `new-items`
 *   :to-update is a list of maps that has ids in both `current-items` and `new-items`
 *   :to delete is a list of maps that has ids only in `current-items`
 */
metabase.util.classify_changes = (function metabase$util$classify_changes(current_items,new_items){
var vec__56815 = clojure.data.diff(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),current_items)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new_items)));
var delete_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56815,(0),null);
var create_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56815,(1),null);
var update_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56815,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to-create","to-create",-49944542),((cljs.core.seq(create_ids))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56812_SHARP_){
var G__56818 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56812_SHARP_);
return (create_ids.cljs$core$IFn$_invoke$arity$1 ? create_ids.cljs$core$IFn$_invoke$arity$1(G__56818) : create_ids.call(null,G__56818));
}),new_items):null),new cljs.core.Keyword(null,"to-delete","to-delete",1815108123),((cljs.core.seq(delete_ids))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56813_SHARP_){
var G__56819 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56813_SHARP_);
return (delete_ids.cljs$core$IFn$_invoke$arity$1 ? delete_ids.cljs$core$IFn$_invoke$arity$1(G__56819) : delete_ids.call(null,G__56819));
}),current_items):null),new cljs.core.Keyword(null,"to-update","to-update",-219520207),((cljs.core.seq(update_ids))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56814_SHARP_){
var G__56820 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56814_SHARP_);
return (update_ids.cljs$core$IFn$_invoke$arity$1 ? update_ids.cljs$core$IFn$_invoke$arity$1(G__56820) : update_ids.call(null,G__56820));
}),new_items):null)], null);
});
Object.defineProperty(module.exports, "__GT_camelCaseEn_STAR_Symbol", { enumerable: false, get: function() { return metabase.util.__GT_camelCaseEn_STAR_Symbol; } });
Object.defineProperty(module.exports, "safe_inc", { enumerable: false, get: function() { return metabase.util.safe_inc; } });
Object.defineProperty(module.exports, "dispatch_type_keyword", { enumerable: false, get: function() { return metabase.util.dispatch_type_keyword; } });
Object.defineProperty(module.exports, "__GT_kebab_case_en", { enumerable: false, get: function() { return metabase.util.__GT_kebab_case_en; } });
Object.defineProperty(module.exports, "parse_currency", { enumerable: false, get: function() { return metabase.util.parse_currency; } });
Object.defineProperty(module.exports, "batches_of", { enumerable: false, get: function() { return metabase.util.batches_of; } });
Object.defineProperty(module.exports, "__GT_camelCaseEn_STAR_Keyword", { enumerable: false, get: function() { return metabase.util.__GT_camelCaseEn_STAR_Keyword; } });
Object.defineProperty(module.exports, "__GT_SCREAMING_SNAKE_CASE_EN", { enumerable: false, get: function() { return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN; } });
Object.defineProperty(module.exports, "real_number_QMARK_", { enumerable: false, get: function() { return metabase.util.real_number_QMARK_; } });
Object.defineProperty(module.exports, "minutes__GT_ms", { enumerable: false, get: function() { return metabase.util.minutes__GT_ms; } });
Object.defineProperty(module.exports, "minutes__GT_seconds", { enumerable: false, get: function() { return metabase.util.minutes__GT_seconds; } });
Object.defineProperty(module.exports, "__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING", { enumerable: false, get: function() { return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING; } });
Object.defineProperty(module.exports, "add_period", { enumerable: false, get: function() { return metabase.util.add_period; } });
Object.defineProperty(module.exports, "email_QMARK_", { enumerable: false, get: function() { return metabase.util.email_QMARK_; } });
Object.defineProperty(module.exports, "__GT_snake_case_en", { enumerable: false, get: function() { return metabase.util.__GT_snake_case_en; } });
Object.defineProperty(module.exports, "__GT_camelCaseEn", { enumerable: false, get: function() { return metabase.util.__GT_camelCaseEn; } });
Object.defineProperty(module.exports, "emoji", { enumerable: false, get: function() { return metabase.util.emoji; } });
Object.defineProperty(module.exports, "email__GT_domain", { enumerable: false, get: function() { return metabase.util.email__GT_domain; } });
Object.defineProperty(module.exports, "hours__GT_ms", { enumerable: false, get: function() { return metabase.util.hours__GT_ms; } });
Object.defineProperty(module.exports, "capitalize_first_char", { enumerable: false, get: function() { return metabase.util.capitalize_first_char; } });
Object.defineProperty(module.exports, "wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords", { enumerable: false, get: function() { return metabase.util.wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords; } });
Object.defineProperty(module.exports, "state_QMARK_", { enumerable: false, get: function() { return metabase.util.state_QMARK_; } });
Object.defineProperty(module.exports, "__GT_snake_case_en_STAR__keyword", { enumerable: false, get: function() { return metabase.util.__GT_snake_case_en_STAR__keyword; } });
Object.defineProperty(module.exports, "recursive_map_keys", { enumerable: false, get: function() { return metabase.util.recursive_map_keys; } });
Object.defineProperty(module.exports, "assoc_dissoc", { enumerable: false, get: function() { return metabase.util.assoc_dissoc; } });
Object.defineProperty(module.exports, "order_of_magnitude", { enumerable: false, get: function() { return metabase.util.order_of_magnitude; } });
Object.defineProperty(module.exports, "format_color", { enumerable: false, get: function() { return metabase.util.format_color; } });
Object.defineProperty(module.exports, "__GT_camelCaseEn_STAR_String", { enumerable: false, get: function() { return metabase.util.__GT_camelCaseEn_STAR_String; } });
Object.defineProperty(module.exports, "format_nanoseconds", { enumerable: false, get: function() { return metabase.util.format_nanoseconds; } });
Object.defineProperty(module.exports, "round_to_decimals", { enumerable: false, get: function() { return metabase.util.round_to_decimals; } });
Object.defineProperty(module.exports, "__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL", { enumerable: false, get: function() { return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL; } });
Object.defineProperty(module.exports, "remove_diacritical_marks", { enumerable: false, get: function() { return metabase.util.remove_diacritical_marks; } });
Object.defineProperty(module.exports, "slugify_valid_chars", { enumerable: false, get: function() { return metabase.util.slugify_valid_chars; } });
Object.defineProperty(module.exports, "__GT_snake_case_en_STAR__string", { enumerable: false, get: function() { return metabase.util.__GT_snake_case_en_STAR__string; } });
Object.defineProperty(module.exports, "qualified_name", { enumerable: false, get: function() { return metabase.util.qualified_name; } });
Object.defineProperty(module.exports, "snake_keys", { enumerable: false, get: function() { return metabase.util.snake_keys; } });
Object.defineProperty(module.exports, "__GT_SCREAMING_SNAKE_CASE_EN_STAR_", { enumerable: false, get: function() { return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_; } });
Object.defineProperty(module.exports, "slugify", { enumerable: false, get: function() { return metabase.util.slugify; } });
Object.defineProperty(module.exports, "format_milliseconds", { enumerable: false, get: function() { return metabase.util.format_milliseconds; } });
Object.defineProperty(module.exports, "select_nested_keys", { enumerable: false, get: function() { return metabase.util.select_nested_keys; } });
Object.defineProperty(module.exports, "__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD", { enumerable: false, get: function() { return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD; } });
Object.defineProperty(module.exports, "lower_case_en", { enumerable: false, get: function() { return metabase.util.lower_case_en; } });
Object.defineProperty(module.exports, "url_regex_pattern", { enumerable: false, get: function() { return metabase.util.url_regex_pattern; } });
Object.defineProperty(module.exports, "update_in_if_exists", { enumerable: false, get: function() { return metabase.util.update_in_if_exists; } });
Object.defineProperty(module.exports, "upper_case_en", { enumerable: false, get: function() { return metabase.util.upper_case_en; } });
Object.defineProperty(module.exports, "format_seconds", { enumerable: false, get: function() { return metabase.util.format_seconds; } });
Object.defineProperty(module.exports, "colorize", { enumerable: false, get: function() { return metabase.util.colorize; } });
Object.defineProperty(module.exports, "url_QMARK_", { enumerable: false, get: function() { return metabase.util.url_QMARK_; } });
Object.defineProperty(module.exports, "pprint_to_str", { enumerable: false, get: function() { return metabase.util.pprint_to_str; } });
Object.defineProperty(module.exports, "update_if_exists", { enumerable: false, get: function() { return metabase.util.update_if_exists; } });
Object.defineProperty(module.exports, "_STAR_profile_level_STAR_", { enumerable: false, get: function() { return metabase.util._STAR_profile_level_STAR_; } });
Object.defineProperty(module.exports, "__GT_kebab_case_en_STAR__symbol", { enumerable: false, get: function() { return metabase.util.__GT_kebab_case_en_STAR__symbol; } });
Object.defineProperty(module.exports, "_profile_print_time", { enumerable: false, get: function() { return metabase.util._profile_print_time; } });
Object.defineProperty(module.exports, "select_non_nil_keys", { enumerable: false, get: function() { return metabase.util.select_non_nil_keys; } });
Object.defineProperty(module.exports, "classify_changes", { enumerable: false, get: function() { return metabase.util.classify_changes; } });
Object.defineProperty(module.exports, "base64_string_QMARK_", { enumerable: false, get: function() { return metabase.util.base64_string_QMARK_; } });
Object.defineProperty(module.exports, "hexadecimal_string_QMARK_", { enumerable: false, get: function() { return metabase.util.hexadecimal_string_QMARK_; } });
Object.defineProperty(module.exports, "the_id", { enumerable: false, get: function() { return metabase.util.the_id; } });
Object.defineProperty(module.exports, "slugify_char", { enumerable: false, get: function() { return metabase.util.slugify_char; } });
Object.defineProperty(module.exports, "topological_sort", { enumerable: false, get: function() { return metabase.util.topological_sort; } });
Object.defineProperty(module.exports, "assoc_default", { enumerable: false, get: function() { return metabase.util.assoc_default; } });
Object.defineProperty(module.exports, "format_bytes", { enumerable: false, get: function() { return metabase.util.format_bytes; } });
Object.defineProperty(module.exports, "uuid_regex", { enumerable: false, get: function() { return metabase.util.uuid_regex; } });
Object.defineProperty(module.exports, "__GT_kebab_case_en_STAR__string", { enumerable: false, get: function() { return metabase.util.__GT_kebab_case_en_STAR__string; } });
Object.defineProperty(module.exports, "maybe_QMARK_", { enumerable: false, get: function() { return metabase.util.maybe_QMARK_; } });
Object.defineProperty(module.exports, "email_in_domain_QMARK_", { enumerable: false, get: function() { return metabase.util.email_in_domain_QMARK_; } });
Object.defineProperty(module.exports, "pick_first", { enumerable: false, get: function() { return metabase.util.pick_first; } });
Object.defineProperty(module.exports, "__GT_kebab_case_en_STAR_", { enumerable: false, get: function() { return metabase.util.__GT_kebab_case_en_STAR_; } });
Object.defineProperty(module.exports, "id", { enumerable: false, get: function() { return metabase.util.id; } });
Object.defineProperty(module.exports, "one_or_many", { enumerable: false, get: function() { return metabase.util.one_or_many; } });
Object.defineProperty(module.exports, "__GT_snake_case_en_STAR_", { enumerable: false, get: function() { return metabase.util.__GT_snake_case_en_STAR_; } });
Object.defineProperty(module.exports, "seconds__GT_ms", { enumerable: false, get: function() { return metabase.util.seconds__GT_ms; } });
Object.defineProperty(module.exports, "__GT_snake_case_en_STAR__symbol", { enumerable: false, get: function() { return metabase.util.__GT_snake_case_en_STAR__symbol; } });
Object.defineProperty(module.exports, "lower_case_map_keys", { enumerable: false, get: function() { return metabase.util.lower_case_map_keys; } });
Object.defineProperty(module.exports, "capitalize_en", { enumerable: false, get: function() { return metabase.util.capitalize_en; } });
Object.defineProperty(module.exports, "__GT_kebab_case_en_STAR__keyword", { enumerable: false, get: function() { return metabase.util.__GT_kebab_case_en_STAR__keyword; } });
Object.defineProperty(module.exports, "many_or_one", { enumerable: false, get: function() { return metabase.util.many_or_one; } });
Object.defineProperty(module.exports, "index_of", { enumerable: false, get: function() { return metabase.util.index_of; } });
Object.defineProperty(module.exports, "__GT_camelCaseEn_STAR_", { enumerable: false, get: function() { return metabase.util.__GT_camelCaseEn_STAR_; } });
Object.defineProperty(module.exports, "remove_nils", { enumerable: false, get: function() { return metabase.util.remove_nils; } });
Object.defineProperty(module.exports, "error", { enumerable: false, get: function() { return metabase.util.error; } });
Object.defineProperty(module.exports, "select_keys_when", { enumerable: false, get: function() { return metabase.util.select_keys_when; } });
Object.defineProperty(module.exports, "normalize_map", { enumerable: false, get: function() { return metabase.util.normalize_map; } });
//# sourceMappingURL=metabase.util.js.map
