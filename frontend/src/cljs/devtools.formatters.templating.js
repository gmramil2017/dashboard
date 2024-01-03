var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.walk.js");
require("./devtools.util.js");
require("./devtools.protocols.js");
require("./devtools.formatters.helpers.js");
require("./devtools.formatters.state.js");
require("./clojure.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("devtools.formatters.templating.js");

goog.provide('devtools.formatters.templating');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x31830_32060 = value;
(x31830_32060.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x31833_32065 = value;
(x31833_32065.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x31835_32070 = value;
(x31835_32070.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32076 = arguments.length;
var i__5770__auto___32077 = (0);
while(true){
if((i__5770__auto___32077 < len__5769__auto___32076)){
args__5775__auto__.push((arguments[i__5770__auto___32077]));

var G__32078 = (i__5770__auto___32077 + (1));
i__5770__auto___32077 = G__32078;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_([]);
var seq__31843_32082 = cljs.core.seq(items);
var chunk__31844_32083 = null;
var count__31845_32084 = (0);
var i__31846_32085 = (0);
while(true){
if((i__31846_32085 < count__31845_32084)){
var item_32087 = chunk__31844_32083.cljs$core$IIndexed$_nth$arity$2(null,i__31846_32085);
if((!((item_32087 == null)))){
if(cljs.core.coll_QMARK_(item_32087)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_32087)));
} else {
group.push(devtools.formatters.helpers.pref(item_32087));
}
} else {
}


var G__32090 = seq__31843_32082;
var G__32091 = chunk__31844_32083;
var G__32092 = count__31845_32084;
var G__32093 = (i__31846_32085 + (1));
seq__31843_32082 = G__32090;
chunk__31844_32083 = G__32091;
count__31845_32084 = G__32092;
i__31846_32085 = G__32093;
continue;
} else {
var temp__5804__auto___32095 = cljs.core.seq(seq__31843_32082);
if(temp__5804__auto___32095){
var seq__31843_32096__$1 = temp__5804__auto___32095;
if(cljs.core.chunked_seq_QMARK_(seq__31843_32096__$1)){
var c__5568__auto___32098 = cljs.core.chunk_first(seq__31843_32096__$1);
var G__32099 = cljs.core.chunk_rest(seq__31843_32096__$1);
var G__32100 = c__5568__auto___32098;
var G__32101 = cljs.core.count(c__5568__auto___32098);
var G__32102 = (0);
seq__31843_32082 = G__32099;
chunk__31844_32083 = G__32100;
count__31845_32084 = G__32101;
i__31846_32085 = G__32102;
continue;
} else {
var item_32103 = cljs.core.first(seq__31843_32096__$1);
if((!((item_32103 == null)))){
if(cljs.core.coll_QMARK_(item_32103)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_32103)));
} else {
group.push(devtools.formatters.helpers.pref(item_32103));
}
} else {
}


var G__32104 = cljs.core.next(seq__31843_32096__$1);
var G__32105 = null;
var G__32106 = (0);
var G__32107 = (0);
seq__31843_32082 = G__32104;
chunk__31844_32083 = G__32105;
count__31845_32084 = G__32106;
i__31846_32085 = G__32107;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq31841){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31841));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32109 = arguments.length;
var i__5770__auto___32110 = (0);
while(true){
if((i__5770__auto___32110 < len__5769__auto___32109)){
args__5775__auto__.push((arguments[i__5770__auto___32110]));

var G__32114 = (i__5770__auto___32110 + (1));
i__5770__auto___32110 = G__32114;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref(tag);
var style__$1 = devtools.formatters.helpers.pref(style);
var template = devtools.formatters.templating.mark_as_template_BANG_([tag__$1,((cljs.core.empty_QMARK_(style__$1))?({}):({"style": style__$1}))]);
var seq__31864_32120 = cljs.core.seq(children);
var chunk__31865_32121 = null;
var count__31866_32122 = (0);
var i__31867_32123 = (0);
while(true){
if((i__31867_32123 < count__31866_32122)){
var child_32124 = chunk__31865_32121.cljs$core$IIndexed$_nth$arity$2(null,i__31867_32123);
if((!((child_32124 == null)))){
if(cljs.core.coll_QMARK_(child_32124)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_32124))));
} else {
var temp__5802__auto___32128 = devtools.formatters.helpers.pref(child_32124);
if(cljs.core.truth_(temp__5802__auto___32128)){
var child_value_32129 = temp__5802__auto___32128;
template.push(child_value_32129);
} else {
}
}
} else {
}


var G__32131 = seq__31864_32120;
var G__32132 = chunk__31865_32121;
var G__32133 = count__31866_32122;
var G__32134 = (i__31867_32123 + (1));
seq__31864_32120 = G__32131;
chunk__31865_32121 = G__32132;
count__31866_32122 = G__32133;
i__31867_32123 = G__32134;
continue;
} else {
var temp__5804__auto___32136 = cljs.core.seq(seq__31864_32120);
if(temp__5804__auto___32136){
var seq__31864_32137__$1 = temp__5804__auto___32136;
if(cljs.core.chunked_seq_QMARK_(seq__31864_32137__$1)){
var c__5568__auto___32138 = cljs.core.chunk_first(seq__31864_32137__$1);
var G__32139 = cljs.core.chunk_rest(seq__31864_32137__$1);
var G__32140 = c__5568__auto___32138;
var G__32141 = cljs.core.count(c__5568__auto___32138);
var G__32142 = (0);
seq__31864_32120 = G__32139;
chunk__31865_32121 = G__32140;
count__31866_32122 = G__32141;
i__31867_32123 = G__32142;
continue;
} else {
var child_32145 = cljs.core.first(seq__31864_32137__$1);
if((!((child_32145 == null)))){
if(cljs.core.coll_QMARK_(child_32145)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_32145))));
} else {
var temp__5802__auto___32149 = devtools.formatters.helpers.pref(child_32145);
if(cljs.core.truth_(temp__5802__auto___32149)){
var child_value_32150 = temp__5802__auto___32149;
template.push(child_value_32150);
} else {
}
}
} else {
}


var G__32151 = cljs.core.next(seq__31864_32137__$1);
var G__32152 = null;
var G__32153 = (0);
var G__32154 = (0);
seq__31864_32120 = G__32151;
chunk__31865_32121 = G__32152;
count__31866_32122 = G__32153;
i__31867_32123 = G__32154;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq31859){
var G__31860 = cljs.core.first(seq31859);
var seq31859__$1 = cljs.core.next(seq31859);
var G__31861 = cljs.core.first(seq31859__$1);
var seq31859__$2 = cljs.core.next(seq31859__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31860,G__31861,seq31859__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32162 = arguments.length;
var i__5770__auto___32163 = (0);
while(true){
if((i__5770__auto___32163 < len__5769__auto___32162)){
args__5775__auto__.push((arguments[i__5770__auto___32163]));

var G__32164 = (i__5770__auto___32163 + (1));
i__5770__auto___32163 = G__32164;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_((template["concat"]).apply(template,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into_array,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq31874){
var G__31875 = cljs.core.first(seq31874);
var seq31874__$1 = cljs.core.next(seq31874);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31875,seq31874__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32171 = arguments.length;
var i__5770__auto___32172 = (0);
while(true){
if((i__5770__auto___32172 < len__5769__auto___32171)){
args__5775__auto__.push((arguments[i__5770__auto___32172]));

var G__32173 = (i__5770__auto___32172 + (1));
i__5770__auto___32172 = G__32173;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq31881){
var G__31882 = cljs.core.first(seq31881);
var seq31881__$1 = cljs.core.next(seq31881);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31882,seq31881__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__31885 = arguments.length;
switch (G__31885) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2(object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3(object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4(object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_((function (){var obj31902 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__5045__auto__ = start_index;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()});
return obj31902;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32201 = arguments.length;
var i__5770__auto___32202 = (0);
while(true){
if((i__5770__auto___32202 < len__5769__auto___32201)){
args__5775__auto__.push((arguments[i__5770__auto___32202]));

var G__32206 = (i__5770__auto___32202 + (1));
i__5770__auto___32202 = G__32206;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__31949){
var vec__31951 = p__31949;
var state_override_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31951,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_(state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], 0));
} else {
var sub_state = (((!((state_override_fn == null))))?(function (){var G__31981 = devtools.formatters.state.get_current_state();
return (state_override_fn.cljs$core$IFn$_invoke$arity$1 ? state_override_fn.cljs$core$IFn$_invoke$arity$1(G__31981) : state_override_fn.call(null,G__31981));
})():devtools.formatters.state.get_current_state());
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["object",({"object": object, "config": sub_state})], 0));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq31944){
var G__31945 = cljs.core.first(seq31944);
var seq31944__$1 = cljs.core.next(seq31944);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31945,seq31944__$1);
}));

devtools.formatters.templating.make_annotation = (function devtools$formatters$templating$make_annotation(data,markups){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_group,"annotation",cljs.core.clj__GT_js(data),markups);
});
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__32001 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__32002 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32002);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markup], 0));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32001);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_(v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk(f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",devtools.formatters.templating.add_stack_separators(devtools.formatters.templating.pprint_render_calls(devtools.formatters.templating.replace_fns_with_markers(cljs.core.reverse(stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path(devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack(devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_(markup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__32034 = name;
switch (G__32034) {
case "surrogate":
var obj = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_surrogate,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first(args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_(obj))?(devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1 ? devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1(obj) : devtools.formatters.templating.render_json_ml_STAR_.call(null,obj)):obj);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_reference,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest(args)));

break;
case "annotation":
var data = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return devtools.formatters.templating.make_annotation(data,converted_args);

break;
default:
return devtools.formatters.templating.assert_markup_error(["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_(v)) || (((cljs.core.array_QMARK_(v)) || (typeof v === 'string'))))){
return cljs.core.empty_QMARK_(v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__32041 = tag;
var html_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32041,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32041,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_(markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__32045 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__32046 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first(markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__32046);

try{var tag = devtools.formatters.helpers.pref(cljs.core.first(markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special(tag,cljs.core.rest(markup));
} else {
if(cljs.core.sequential_QMARK_(tag)){
return devtools.formatters.templating.render_subtree(tag,cljs.core.rest(markup));
} else {
return devtools.formatters.templating.assert_markup_error(["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview(markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__32045);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__32047 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__32048 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__32049 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__32050 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__32049);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__32050);

try{return devtools.formatters.templating.render_json_ml_STAR_(markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__32048);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__32047);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),"initial value: ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_value], 0))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_(value)){
var G__32245 = initial_value;
var G__32246 = (value.cljs$core$IFn$_invoke$arity$0 ? value.cljs$core$IFn$_invoke$arity$0() : value.call(null));
initial_value = G__32245;
value = G__32246;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__32248 = initial_value;
var G__32249 = devtools.formatters.helpers.pref(value);
initial_value = G__32248;
value = G__32249;
continue;
} else {
if(cljs.core.sequential_QMARK_(value)){
var G__32253 = initial_value;
var G__32254 = devtools.formatters.templating.render_json_ml(value);
initial_value = G__32253;
value = G__32254;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_(value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_(value,value);
});
Object.defineProperty(module.exports, "make_template", { enumerable: false, get: function() { return devtools.formatters.templating.make_template; } });
Object.defineProperty(module.exports, "mark_as_surrogate_BANG_", { enumerable: false, get: function() { return devtools.formatters.templating.mark_as_surrogate_BANG_; } });
Object.defineProperty(module.exports, "concat_templates_BANG_", { enumerable: false, get: function() { return devtools.formatters.templating.concat_templates_BANG_; } });
Object.defineProperty(module.exports, "make_reference", { enumerable: false, get: function() { return devtools.formatters.templating.make_reference; } });
Object.defineProperty(module.exports, "make_surrogate", { enumerable: false, get: function() { return devtools.formatters.templating.make_surrogate; } });
Object.defineProperty(module.exports, "pprint_render_path", { enumerable: false, get: function() { return devtools.formatters.templating.pprint_render_path; } });
Object.defineProperty(module.exports, "get_surrogate_body", { enumerable: false, get: function() { return devtools.formatters.templating.get_surrogate_body; } });
Object.defineProperty(module.exports, "reference_QMARK_", { enumerable: false, get: function() { return devtools.formatters.templating.reference_QMARK_; } });
Object.defineProperty(module.exports, "replace_fns_with_markers", { enumerable: false, get: function() { return devtools.formatters.templating.replace_fns_with_markers; } });
Object.defineProperty(module.exports, "_STAR_current_render_path_STAR_", { enumerable: false, get: function() { return devtools.formatters.templating._STAR_current_render_path_STAR_; } });
Object.defineProperty(module.exports, "render_subtree", { enumerable: false, get: function() { return devtools.formatters.templating.render_subtree; } });
Object.defineProperty(module.exports, "emptyish_QMARK_", { enumerable: false, get: function() { return devtools.formatters.templating.emptyish_QMARK_; } });
Object.defineProperty(module.exports, "assert_failed_markup_rendering", { enumerable: false, get: function() { return devtools.formatters.templating.assert_failed_markup_rendering; } });
Object.defineProperty(module.exports, "pprint_render_calls", { enumerable: false, get: function() { return devtools.formatters.templating.pprint_render_calls; } });
Object.defineProperty(module.exports, "render_markup", { enumerable: false, get: function() { return devtools.formatters.templating.render_markup; } });
Object.defineProperty(module.exports, "assert_markup_error", { enumerable: false, get: function() { return devtools.formatters.templating.assert_markup_error; } });
Object.defineProperty(module.exports, "make_annotation", { enumerable: false, get: function() { return devtools.formatters.templating.make_annotation; } });
Object.defineProperty(module.exports, "surrogate_markup_QMARK_", { enumerable: false, get: function() { return devtools.formatters.templating.surrogate_markup_QMARK_; } });
Object.defineProperty(module.exports, "render_markup_STAR_", { enumerable: false, get: function() { return devtools.formatters.templating.render_markup_STAR_; } });
Object.defineProperty(module.exports, "add_stack_separators", { enumerable: false, get: function() { return devtools.formatters.templating.add_stack_separators; } });
Object.defineProperty(module.exports, "make_group", { enumerable: false, get: function() { return devtools.formatters.templating.make_group; } });
Object.defineProperty(module.exports, "get_surrogate_header", { enumerable: false, get: function() { return devtools.formatters.templating.get_surrogate_header; } });
Object.defineProperty(module.exports, "render_json_ml_STAR_", { enumerable: false, get: function() { return devtools.formatters.templating.render_json_ml_STAR_; } });
Object.defineProperty(module.exports, "surrogate_QMARK_", { enumerable: false, get: function() { return devtools.formatters.templating.surrogate_QMARK_; } });
Object.defineProperty(module.exports, "render_json_ml", { enumerable: false, get: function() { return devtools.formatters.templating.render_json_ml; } });
Object.defineProperty(module.exports, "_STAR_current_render_stack_STAR_", { enumerable: false, get: function() { return devtools.formatters.templating._STAR_current_render_stack_STAR_; } });
Object.defineProperty(module.exports, "mark_as_group_BANG_", { enumerable: false, get: function() { return devtools.formatters.templating.mark_as_group_BANG_; } });
Object.defineProperty(module.exports, "get_surrogate_target", { enumerable: false, get: function() { return devtools.formatters.templating.get_surrogate_target; } });
Object.defineProperty(module.exports, "get_surrogate_start_index", { enumerable: false, get: function() { return devtools.formatters.templating.get_surrogate_start_index; } });
Object.defineProperty(module.exports, "mark_as_template_BANG_", { enumerable: false, get: function() { return devtools.formatters.templating.mark_as_template_BANG_; } });
Object.defineProperty(module.exports, "pprint_render_stack", { enumerable: false, get: function() { return devtools.formatters.templating.pprint_render_stack; } });
Object.defineProperty(module.exports, "template_QMARK_", { enumerable: false, get: function() { return devtools.formatters.templating.template_QMARK_; } });
Object.defineProperty(module.exports, "render_special", { enumerable: false, get: function() { return devtools.formatters.templating.render_special; } });
Object.defineProperty(module.exports, "print_preview", { enumerable: false, get: function() { return devtools.formatters.templating.print_preview; } });
Object.defineProperty(module.exports, "group_QMARK_", { enumerable: false, get: function() { return devtools.formatters.templating.group_QMARK_; } });
Object.defineProperty(module.exports, "extend_template_BANG_", { enumerable: false, get: function() { return devtools.formatters.templating.extend_template_BANG_; } });
//# sourceMappingURL=devtools.formatters.templating.js.map
