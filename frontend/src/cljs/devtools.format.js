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

$CLJS.SHADOW_ENV.setLoaded("devtools.format.js");

goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_29964 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._header[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.format._header["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_29964(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_29965 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._has_body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.format._has_body["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_29965(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_29968 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.format._body["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_29968(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o29808 = temp__5802__auto__;
var temp__5802__auto____$1 = (o29808["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o29809 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o29809["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o29810 = temp__5802__auto____$2;
return (o29810["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o29815 = temp__5802__auto__;
var temp__5802__auto____$1 = (o29815["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o29816 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o29816["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o29817 = temp__5802__auto____$2;
return (o29817["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o29824 = temp__5802__auto__;
var temp__5802__auto____$1 = (o29824["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o29825 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o29825["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o29826 = temp__5802__auto____$2;
return (o29826["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o29837 = temp__5802__auto__;
var temp__5802__auto____$1 = (o29837["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o29838 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o29838["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o29839 = temp__5802__auto____$2;
return (o29839["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o29844 = temp__5802__auto__;
var temp__5802__auto____$1 = (o29844["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o29845 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o29845["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o29846 = temp__5802__auto____$2;
return (o29846["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o29852 = temp__5802__auto__;
var temp__5802__auto____$1 = (o29852["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o29853 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o29853["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o29854 = temp__5802__auto____$2;
return (o29854["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o29856 = temp__5802__auto__;
var temp__5802__auto____$1 = (o29856["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o29857 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o29857["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o29858 = temp__5802__auto____$2;
return (o29858["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29980 = arguments.length;
var i__5770__auto___29981 = (0);
while(true){
if((i__5770__auto___29981 < len__5769__auto___29980)){
args__5775__auto__.push((arguments[i__5770__auto___29981]));

var G__29982 = (i__5770__auto___29981 + (1));
i__5770__auto___29981 = G__29982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq29861){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29861));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29983 = arguments.length;
var i__5770__auto___29984 = (0);
while(true){
if((i__5770__auto___29984 < len__5769__auto___29983)){
args__5775__auto__.push((arguments[i__5770__auto___29984]));

var G__29985 = (i__5770__auto___29984 + (1));
i__5770__auto___29984 = G__29985;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq29869){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29869));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29986 = arguments.length;
var i__5770__auto___29987 = (0);
while(true){
if((i__5770__auto___29987 < len__5769__auto___29986)){
args__5775__auto__.push((arguments[i__5770__auto___29987]));

var G__29989 = (i__5770__auto___29987 + (1));
i__5770__auto___29987 = G__29989;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq29879){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29879));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29991 = arguments.length;
var i__5770__auto___29992 = (0);
while(true){
if((i__5770__auto___29992 < len__5769__auto___29991)){
args__5775__auto__.push((arguments[i__5770__auto___29992]));

var G__29993 = (i__5770__auto___29992 + (1));
i__5770__auto___29992 = G__29993;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq29887){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29887));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29995 = arguments.length;
var i__5770__auto___29996 = (0);
while(true){
if((i__5770__auto___29996 < len__5769__auto___29995)){
args__5775__auto__.push((arguments[i__5770__auto___29996]));

var G__30001 = (i__5770__auto___29996 + (1));
i__5770__auto___29996 = G__30001;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq29892){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29892));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30003 = arguments.length;
var i__5770__auto___30004 = (0);
while(true){
if((i__5770__auto___30004 < len__5769__auto___30003)){
args__5775__auto__.push((arguments[i__5770__auto___30004]));

var G__30005 = (i__5770__auto___30004 + (1));
i__5770__auto___30004 = G__30005;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq29899){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29899));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30008 = arguments.length;
var i__5770__auto___30009 = (0);
while(true){
if((i__5770__auto___30009 < len__5769__auto___30008)){
args__5775__auto__.push((arguments[i__5770__auto___30009]));

var G__30010 = (i__5770__auto___30009 + (1));
i__5770__auto___30009 = G__30010;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq29906){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29906));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30015 = arguments.length;
var i__5770__auto___30016 = (0);
while(true){
if((i__5770__auto___30016 < len__5769__auto___30015)){
args__5775__auto__.push((arguments[i__5770__auto___30016]));

var G__30017 = (i__5770__auto___30016 + (1));
i__5770__auto___30016 = G__30017;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__29922){
var vec__29923 = p__29922;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29923,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__29913_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__29913_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq29916){
var G__29917 = cljs.core.first(seq29916);
var seq29916__$1 = cljs.core.next(seq29916);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29917,seq29916__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__29935 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__29936 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__29937 = (function (){var G__29939 = new cljs.core.Keyword(null,"li","li",723558921);
var G__29940 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__29941 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__29939,G__29940,G__29941) : devtools.format.make_template_fn.call(null,G__29939,G__29940,G__29941));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__29935,G__29936,G__29937) : devtools.format.make_template_fn.call(null,G__29935,G__29936,G__29937));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30023 = arguments.length;
var i__5770__auto___30025 = (0);
while(true){
if((i__5770__auto___30025 < len__5769__auto___30023)){
args__5775__auto__.push((arguments[i__5770__auto___30025]));

var G__30026 = (i__5770__auto___30025 + (1));
i__5770__auto___30025 = G__30026;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq29944){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29944));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30028 = arguments.length;
var i__5770__auto___30029 = (0);
while(true){
if((i__5770__auto___30029 < len__5769__auto___30028)){
args__5775__auto__.push((arguments[i__5770__auto___30029]));

var G__30030 = (i__5770__auto___30029 + (1));
i__5770__auto___30029 = G__30030;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq29951){
var G__29952 = cljs.core.first(seq29951);
var seq29951__$1 = cljs.core.next(seq29951);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29952,seq29951__$1);
}));

Object.defineProperty(module.exports, "make_template", { enumerable: false, get: function() { return devtools.format.make_template; } });
Object.defineProperty(module.exports, "_header", { enumerable: false, get: function() { return devtools.format._header; } });
Object.defineProperty(module.exports, "IDevtoolsFormat", { enumerable: false, get: function() { return devtools.format.IDevtoolsFormat; } });
Object.defineProperty(module.exports, "render_markup_fn", { enumerable: false, get: function() { return devtools.format.render_markup_fn; } });
Object.defineProperty(module.exports, "make_surrogate_fn", { enumerable: false, get: function() { return devtools.format.make_surrogate_fn; } });
Object.defineProperty(module.exports, "make_surrogate", { enumerable: false, get: function() { return devtools.format.make_surrogate; } });
Object.defineProperty(module.exports, "group", { enumerable: false, get: function() { return devtools.format.group; } });
Object.defineProperty(module.exports, "surrogate", { enumerable: false, get: function() { return devtools.format.surrogate; } });
Object.defineProperty(module.exports, "setup_BANG_", { enumerable: false, get: function() { return devtools.format.setup_BANG_; } });
Object.defineProperty(module.exports, "_has_body", { enumerable: false, get: function() { return devtools.format._has_body; } });
Object.defineProperty(module.exports, "make_template_fn", { enumerable: false, get: function() { return devtools.format.make_template_fn; } });
Object.defineProperty(module.exports, "_LT_header_GT__fn", { enumerable: false, get: function() { return devtools.format._LT_header_GT__fn; } });
Object.defineProperty(module.exports, "standard_reference", { enumerable: false, get: function() { return devtools.format.standard_reference; } });
Object.defineProperty(module.exports, "render_markup", { enumerable: false, get: function() { return devtools.format.render_markup; } });
Object.defineProperty(module.exports, "_STAR_setup_done_STAR_", { enumerable: false, get: function() { return devtools.format._STAR_setup_done_STAR_; } });
Object.defineProperty(module.exports, "standard_body_template", { enumerable: false, get: function() { return devtools.format.standard_body_template; } });
Object.defineProperty(module.exports, "template", { enumerable: false, get: function() { return devtools.format.template; } });
Object.defineProperty(module.exports, "build_header", { enumerable: false, get: function() { return devtools.format.build_header; } });
Object.defineProperty(module.exports, "_LT_standard_body_GT__fn", { enumerable: false, get: function() { return devtools.format._LT_standard_body_GT__fn; } });
Object.defineProperty(module.exports, "make_group", { enumerable: false, get: function() { return devtools.format.make_group; } });
Object.defineProperty(module.exports, "_body", { enumerable: false, get: function() { return devtools.format._body; } });
Object.defineProperty(module.exports, "reference", { enumerable: false, get: function() { return devtools.format.reference; } });
Object.defineProperty(module.exports, "make_reference_fn", { enumerable: false, get: function() { return devtools.format.make_reference_fn; } });
Object.defineProperty(module.exports, "make_group_fn", { enumerable: false, get: function() { return devtools.format.make_group_fn; } });
//# sourceMappingURL=devtools.format.js.map
