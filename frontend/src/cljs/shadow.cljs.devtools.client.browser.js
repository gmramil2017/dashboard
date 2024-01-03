var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./shadow.json.js");
require("./shadow.cljs.devtools.client.env.js");
require("./shadow.cljs.devtools.client.console.js");
require("./shadow.cljs.devtools.client.hud.js");
require("./shadow.cljs.devtools.client.websocket.js");
require("./shadow.cljs.devtools.client.shared.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.shared.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.browser.js");

goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41483 = arguments.length;
var i__5770__auto___41484 = (0);
while(true){
if((i__5770__auto___41484 < len__5769__auto___41483)){
args__5775__auto__.push((arguments[i__5770__auto___41484]));

var G__41485 = (i__5770__auto___41484 + (1));
i__5770__auto___41484 = G__41485;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40068){
var G__40069 = cljs.core.first(seq40068);
var seq40068__$1 = cljs.core.next(seq40068);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40069,seq40068__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40073 = cljs.core.seq(sources);
var chunk__40074 = null;
var count__40075 = (0);
var i__40076 = (0);
while(true){
if((i__40076 < count__40075)){
var map__40083 = chunk__40074.cljs$core$IIndexed$_nth$arity$2(null,i__40076);
var map__40083__$1 = cljs.core.__destructure_map(map__40083);
var src = map__40083__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40083__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40083__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40083__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40083__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40084){var e_41489 = e40084;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41489);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41489.message)].join('')));
}

var G__41491 = seq__40073;
var G__41492 = chunk__40074;
var G__41493 = count__40075;
var G__41494 = (i__40076 + (1));
seq__40073 = G__41491;
chunk__40074 = G__41492;
count__40075 = G__41493;
i__40076 = G__41494;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40073);
if(temp__5804__auto__){
var seq__40073__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40073__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40073__$1);
var G__41495 = cljs.core.chunk_rest(seq__40073__$1);
var G__41496 = c__5568__auto__;
var G__41497 = cljs.core.count(c__5568__auto__);
var G__41498 = (0);
seq__40073 = G__41495;
chunk__40074 = G__41496;
count__40075 = G__41497;
i__40076 = G__41498;
continue;
} else {
var map__40085 = cljs.core.first(seq__40073__$1);
var map__40085__$1 = cljs.core.__destructure_map(map__40085);
var src = map__40085__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40085__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40085__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40085__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40085__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40086){var e_41501 = e40086;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41501);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41501.message)].join('')));
}

var G__41502 = cljs.core.next(seq__40073__$1);
var G__41503 = null;
var G__41504 = (0);
var G__41505 = (0);
seq__40073 = G__41502;
chunk__40074 = G__41503;
count__40075 = G__41504;
i__40076 = G__41505;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40089 = cljs.core.seq(js_requires);
var chunk__40090 = null;
var count__40091 = (0);
var i__40092 = (0);
while(true){
if((i__40092 < count__40091)){
var js_ns = chunk__40090.cljs$core$IIndexed$_nth$arity$2(null,i__40092);
var require_str_41509 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41509);


var G__41510 = seq__40089;
var G__41511 = chunk__40090;
var G__41512 = count__40091;
var G__41513 = (i__40092 + (1));
seq__40089 = G__41510;
chunk__40090 = G__41511;
count__40091 = G__41512;
i__40092 = G__41513;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40089);
if(temp__5804__auto__){
var seq__40089__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40089__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40089__$1);
var G__41514 = cljs.core.chunk_rest(seq__40089__$1);
var G__41515 = c__5568__auto__;
var G__41516 = cljs.core.count(c__5568__auto__);
var G__41517 = (0);
seq__40089 = G__41514;
chunk__40090 = G__41515;
count__40091 = G__41516;
i__40092 = G__41517;
continue;
} else {
var js_ns = cljs.core.first(seq__40089__$1);
var require_str_41519 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41519);


var G__41520 = cljs.core.next(seq__40089__$1);
var G__41521 = null;
var G__41522 = (0);
var G__41523 = (0);
seq__40089 = G__41520;
chunk__40090 = G__41521;
count__40091 = G__41522;
i__40092 = G__41523;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40099){
var map__40100 = p__40099;
var map__40100__$1 = cljs.core.__destructure_map(map__40100);
var msg = map__40100__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40100__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40100__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40101(s__40102){
return (new cljs.core.LazySeq(null,(function (){
var s__40102__$1 = s__40102;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40102__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__40107 = cljs.core.first(xs__6360__auto__);
var map__40107__$1 = cljs.core.__destructure_map(map__40107);
var src = map__40107__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40107__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40107__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__40102__$1,map__40107,map__40107__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40100,map__40100__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40101_$_iter__40103(s__40104){
return (new cljs.core.LazySeq(null,((function (s__40102__$1,map__40107,map__40107__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40100,map__40100__$1,msg,info,reload_info){
return (function (){
var s__40104__$1 = s__40104;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__40104__$1);
if(temp__5804__auto____$1){
var s__40104__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40104__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40104__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40106 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40105 = (0);
while(true){
if((i__40105 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__40105);
cljs.core.chunk_append(b__40106,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41529 = (i__40105 + (1));
i__40105 = G__41529;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40106),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40101_$_iter__40103(cljs.core.chunk_rest(s__40104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40106),null);
}
} else {
var warning = cljs.core.first(s__40104__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40101_$_iter__40103(cljs.core.rest(s__40104__$2)));
}
} else {
return null;
}
break;
}
});})(s__40102__$1,map__40107,map__40107__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40100,map__40100__$1,msg,info,reload_info))
,null,null));
});})(s__40102__$1,map__40107,map__40107__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40100,map__40100__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40101(cljs.core.rest(s__40102__$1)));
} else {
var G__41532 = cljs.core.rest(s__40102__$1);
s__40102__$1 = G__41532;
continue;
}
} else {
var G__41533 = cljs.core.rest(s__40102__$1);
s__40102__$1 = G__41533;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40111_41534 = cljs.core.seq(warnings);
var chunk__40112_41535 = null;
var count__40113_41536 = (0);
var i__40114_41537 = (0);
while(true){
if((i__40114_41537 < count__40113_41536)){
var map__40117_41538 = chunk__40112_41535.cljs$core$IIndexed$_nth$arity$2(null,i__40114_41537);
var map__40117_41539__$1 = cljs.core.__destructure_map(map__40117_41538);
var w_41540 = map__40117_41539__$1;
var msg_41541__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117_41539__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117_41539__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117_41539__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117_41539__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41544)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41542),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41543),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41541__$1)].join(''));


var G__41548 = seq__40111_41534;
var G__41549 = chunk__40112_41535;
var G__41550 = count__40113_41536;
var G__41551 = (i__40114_41537 + (1));
seq__40111_41534 = G__41548;
chunk__40112_41535 = G__41549;
count__40113_41536 = G__41550;
i__40114_41537 = G__41551;
continue;
} else {
var temp__5804__auto___41552 = cljs.core.seq(seq__40111_41534);
if(temp__5804__auto___41552){
var seq__40111_41553__$1 = temp__5804__auto___41552;
if(cljs.core.chunked_seq_QMARK_(seq__40111_41553__$1)){
var c__5568__auto___41554 = cljs.core.chunk_first(seq__40111_41553__$1);
var G__41555 = cljs.core.chunk_rest(seq__40111_41553__$1);
var G__41556 = c__5568__auto___41554;
var G__41557 = cljs.core.count(c__5568__auto___41554);
var G__41558 = (0);
seq__40111_41534 = G__41555;
chunk__40112_41535 = G__41556;
count__40113_41536 = G__41557;
i__40114_41537 = G__41558;
continue;
} else {
var map__40118_41559 = cljs.core.first(seq__40111_41553__$1);
var map__40118_41560__$1 = cljs.core.__destructure_map(map__40118_41559);
var w_41561 = map__40118_41560__$1;
var msg_41562__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40118_41560__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40118_41560__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40118_41560__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40118_41560__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41565)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41563),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41564),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41562__$1)].join(''));


var G__41568 = cljs.core.next(seq__40111_41553__$1);
var G__41569 = null;
var G__41570 = (0);
var G__41571 = (0);
seq__40111_41534 = G__41568;
chunk__40112_41535 = G__41569;
count__40113_41536 = G__41570;
i__40114_41537 = G__41571;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40098_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40098_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40125){
var map__40126 = p__40125;
var map__40126__$1 = cljs.core.__destructure_map(map__40126);
var msg = map__40126__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40126__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40126__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__40127 = cljs.core.seq(updates);
var chunk__40129 = null;
var count__40130 = (0);
var i__40131 = (0);
while(true){
if((i__40131 < count__40130)){
var path = chunk__40129.cljs$core$IIndexed$_nth$arity$2(null,i__40131);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40598_41579 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40602_41580 = null;
var count__40603_41581 = (0);
var i__40604_41582 = (0);
while(true){
if((i__40604_41582 < count__40603_41581)){
var node_41586 = chunk__40602_41580.cljs$core$IIndexed$_nth$arity$2(null,i__40604_41582);
if(cljs.core.not(node_41586.shadow$old)){
var path_match_41587 = shadow.cljs.devtools.client.browser.match_paths(node_41586.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41587)){
var new_link_41588 = (function (){var G__40891 = node_41586.cloneNode(true);
G__40891.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41587),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40891;
})();
(node_41586.shadow$old = true);

(new_link_41588.onload = ((function (seq__40598_41579,chunk__40602_41580,count__40603_41581,i__40604_41582,seq__40127,chunk__40129,count__40130,i__40131,new_link_41588,path_match_41587,node_41586,path,map__40126,map__40126__$1,msg,updates,reload_info){
return (function (e){
var seq__40893_41590 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40895_41591 = null;
var count__40896_41592 = (0);
var i__40897_41593 = (0);
while(true){
if((i__40897_41593 < count__40896_41592)){
var map__40965_41594 = chunk__40895_41591.cljs$core$IIndexed$_nth$arity$2(null,i__40897_41593);
var map__40965_41595__$1 = cljs.core.__destructure_map(map__40965_41594);
var task_41596 = map__40965_41595__$1;
var fn_str_41597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40965_41595__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40965_41595__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41600 = goog.getObjectByName(fn_str_41597,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41598)].join(''));

(fn_obj_41600.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41600.cljs$core$IFn$_invoke$arity$2(path,new_link_41588) : fn_obj_41600.call(null,path,new_link_41588));


var G__41604 = seq__40893_41590;
var G__41605 = chunk__40895_41591;
var G__41606 = count__40896_41592;
var G__41607 = (i__40897_41593 + (1));
seq__40893_41590 = G__41604;
chunk__40895_41591 = G__41605;
count__40896_41592 = G__41606;
i__40897_41593 = G__41607;
continue;
} else {
var temp__5804__auto___41609 = cljs.core.seq(seq__40893_41590);
if(temp__5804__auto___41609){
var seq__40893_41610__$1 = temp__5804__auto___41609;
if(cljs.core.chunked_seq_QMARK_(seq__40893_41610__$1)){
var c__5568__auto___41611 = cljs.core.chunk_first(seq__40893_41610__$1);
var G__41612 = cljs.core.chunk_rest(seq__40893_41610__$1);
var G__41613 = c__5568__auto___41611;
var G__41614 = cljs.core.count(c__5568__auto___41611);
var G__41615 = (0);
seq__40893_41590 = G__41612;
chunk__40895_41591 = G__41613;
count__40896_41592 = G__41614;
i__40897_41593 = G__41615;
continue;
} else {
var map__40996_41616 = cljs.core.first(seq__40893_41610__$1);
var map__40996_41617__$1 = cljs.core.__destructure_map(map__40996_41616);
var task_41618 = map__40996_41617__$1;
var fn_str_41619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40996_41617__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40996_41617__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41621 = goog.getObjectByName(fn_str_41619,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41620)].join(''));

(fn_obj_41621.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41621.cljs$core$IFn$_invoke$arity$2(path,new_link_41588) : fn_obj_41621.call(null,path,new_link_41588));


var G__41623 = cljs.core.next(seq__40893_41610__$1);
var G__41624 = null;
var G__41625 = (0);
var G__41626 = (0);
seq__40893_41590 = G__41623;
chunk__40895_41591 = G__41624;
count__40896_41592 = G__41625;
i__40897_41593 = G__41626;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41586);
});})(seq__40598_41579,chunk__40602_41580,count__40603_41581,i__40604_41582,seq__40127,chunk__40129,count__40130,i__40131,new_link_41588,path_match_41587,node_41586,path,map__40126,map__40126__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41587], 0));

goog.dom.insertSiblingAfter(new_link_41588,node_41586);


var G__41627 = seq__40598_41579;
var G__41628 = chunk__40602_41580;
var G__41629 = count__40603_41581;
var G__41630 = (i__40604_41582 + (1));
seq__40598_41579 = G__41627;
chunk__40602_41580 = G__41628;
count__40603_41581 = G__41629;
i__40604_41582 = G__41630;
continue;
} else {
var G__41631 = seq__40598_41579;
var G__41632 = chunk__40602_41580;
var G__41633 = count__40603_41581;
var G__41634 = (i__40604_41582 + (1));
seq__40598_41579 = G__41631;
chunk__40602_41580 = G__41632;
count__40603_41581 = G__41633;
i__40604_41582 = G__41634;
continue;
}
} else {
var G__41635 = seq__40598_41579;
var G__41636 = chunk__40602_41580;
var G__41637 = count__40603_41581;
var G__41638 = (i__40604_41582 + (1));
seq__40598_41579 = G__41635;
chunk__40602_41580 = G__41636;
count__40603_41581 = G__41637;
i__40604_41582 = G__41638;
continue;
}
} else {
var temp__5804__auto___41639 = cljs.core.seq(seq__40598_41579);
if(temp__5804__auto___41639){
var seq__40598_41640__$1 = temp__5804__auto___41639;
if(cljs.core.chunked_seq_QMARK_(seq__40598_41640__$1)){
var c__5568__auto___41641 = cljs.core.chunk_first(seq__40598_41640__$1);
var G__41643 = cljs.core.chunk_rest(seq__40598_41640__$1);
var G__41644 = c__5568__auto___41641;
var G__41645 = cljs.core.count(c__5568__auto___41641);
var G__41646 = (0);
seq__40598_41579 = G__41643;
chunk__40602_41580 = G__41644;
count__40603_41581 = G__41645;
i__40604_41582 = G__41646;
continue;
} else {
var node_41648 = cljs.core.first(seq__40598_41640__$1);
if(cljs.core.not(node_41648.shadow$old)){
var path_match_41649 = shadow.cljs.devtools.client.browser.match_paths(node_41648.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41649)){
var new_link_41651 = (function (){var G__41029 = node_41648.cloneNode(true);
G__41029.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41649),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41029;
})();
(node_41648.shadow$old = true);

(new_link_41651.onload = ((function (seq__40598_41579,chunk__40602_41580,count__40603_41581,i__40604_41582,seq__40127,chunk__40129,count__40130,i__40131,new_link_41651,path_match_41649,node_41648,seq__40598_41640__$1,temp__5804__auto___41639,path,map__40126,map__40126__$1,msg,updates,reload_info){
return (function (e){
var seq__41031_41655 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41033_41656 = null;
var count__41034_41657 = (0);
var i__41035_41658 = (0);
while(true){
if((i__41035_41658 < count__41034_41657)){
var map__41073_41661 = chunk__41033_41656.cljs$core$IIndexed$_nth$arity$2(null,i__41035_41658);
var map__41073_41662__$1 = cljs.core.__destructure_map(map__41073_41661);
var task_41663 = map__41073_41662__$1;
var fn_str_41664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41073_41662__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41073_41662__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41667 = goog.getObjectByName(fn_str_41664,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41665)].join(''));

(fn_obj_41667.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41667.cljs$core$IFn$_invoke$arity$2(path,new_link_41651) : fn_obj_41667.call(null,path,new_link_41651));


var G__41668 = seq__41031_41655;
var G__41669 = chunk__41033_41656;
var G__41670 = count__41034_41657;
var G__41671 = (i__41035_41658 + (1));
seq__41031_41655 = G__41668;
chunk__41033_41656 = G__41669;
count__41034_41657 = G__41670;
i__41035_41658 = G__41671;
continue;
} else {
var temp__5804__auto___41672__$1 = cljs.core.seq(seq__41031_41655);
if(temp__5804__auto___41672__$1){
var seq__41031_41673__$1 = temp__5804__auto___41672__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41031_41673__$1)){
var c__5568__auto___41674 = cljs.core.chunk_first(seq__41031_41673__$1);
var G__41675 = cljs.core.chunk_rest(seq__41031_41673__$1);
var G__41676 = c__5568__auto___41674;
var G__41677 = cljs.core.count(c__5568__auto___41674);
var G__41678 = (0);
seq__41031_41655 = G__41675;
chunk__41033_41656 = G__41676;
count__41034_41657 = G__41677;
i__41035_41658 = G__41678;
continue;
} else {
var map__41094_41679 = cljs.core.first(seq__41031_41673__$1);
var map__41094_41680__$1 = cljs.core.__destructure_map(map__41094_41679);
var task_41681 = map__41094_41680__$1;
var fn_str_41682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094_41680__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094_41680__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41684 = goog.getObjectByName(fn_str_41682,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41683)].join(''));

(fn_obj_41684.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41684.cljs$core$IFn$_invoke$arity$2(path,new_link_41651) : fn_obj_41684.call(null,path,new_link_41651));


var G__41687 = cljs.core.next(seq__41031_41673__$1);
var G__41688 = null;
var G__41689 = (0);
var G__41690 = (0);
seq__41031_41655 = G__41687;
chunk__41033_41656 = G__41688;
count__41034_41657 = G__41689;
i__41035_41658 = G__41690;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41648);
});})(seq__40598_41579,chunk__40602_41580,count__40603_41581,i__40604_41582,seq__40127,chunk__40129,count__40130,i__40131,new_link_41651,path_match_41649,node_41648,seq__40598_41640__$1,temp__5804__auto___41639,path,map__40126,map__40126__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41649], 0));

goog.dom.insertSiblingAfter(new_link_41651,node_41648);


var G__41692 = cljs.core.next(seq__40598_41640__$1);
var G__41693 = null;
var G__41694 = (0);
var G__41695 = (0);
seq__40598_41579 = G__41692;
chunk__40602_41580 = G__41693;
count__40603_41581 = G__41694;
i__40604_41582 = G__41695;
continue;
} else {
var G__41697 = cljs.core.next(seq__40598_41640__$1);
var G__41698 = null;
var G__41699 = (0);
var G__41700 = (0);
seq__40598_41579 = G__41697;
chunk__40602_41580 = G__41698;
count__40603_41581 = G__41699;
i__40604_41582 = G__41700;
continue;
}
} else {
var G__41701 = cljs.core.next(seq__40598_41640__$1);
var G__41702 = null;
var G__41703 = (0);
var G__41704 = (0);
seq__40598_41579 = G__41701;
chunk__40602_41580 = G__41702;
count__40603_41581 = G__41703;
i__40604_41582 = G__41704;
continue;
}
}
} else {
}
}
break;
}


var G__41707 = seq__40127;
var G__41708 = chunk__40129;
var G__41709 = count__40130;
var G__41710 = (i__40131 + (1));
seq__40127 = G__41707;
chunk__40129 = G__41708;
count__40130 = G__41709;
i__40131 = G__41710;
continue;
} else {
var G__41712 = seq__40127;
var G__41713 = chunk__40129;
var G__41714 = count__40130;
var G__41715 = (i__40131 + (1));
seq__40127 = G__41712;
chunk__40129 = G__41713;
count__40130 = G__41714;
i__40131 = G__41715;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40127);
if(temp__5804__auto__){
var seq__40127__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40127__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40127__$1);
var G__41718 = cljs.core.chunk_rest(seq__40127__$1);
var G__41719 = c__5568__auto__;
var G__41720 = cljs.core.count(c__5568__auto__);
var G__41721 = (0);
seq__40127 = G__41718;
chunk__40129 = G__41719;
count__40130 = G__41720;
i__40131 = G__41721;
continue;
} else {
var path = cljs.core.first(seq__40127__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41101_41722 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41105_41723 = null;
var count__41106_41724 = (0);
var i__41107_41725 = (0);
while(true){
if((i__41107_41725 < count__41106_41724)){
var node_41726 = chunk__41105_41723.cljs$core$IIndexed$_nth$arity$2(null,i__41107_41725);
if(cljs.core.not(node_41726.shadow$old)){
var path_match_41727 = shadow.cljs.devtools.client.browser.match_paths(node_41726.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41727)){
var new_link_41728 = (function (){var G__41246 = node_41726.cloneNode(true);
G__41246.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41727),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41246;
})();
(node_41726.shadow$old = true);

(new_link_41728.onload = ((function (seq__41101_41722,chunk__41105_41723,count__41106_41724,i__41107_41725,seq__40127,chunk__40129,count__40130,i__40131,new_link_41728,path_match_41727,node_41726,path,seq__40127__$1,temp__5804__auto__,map__40126,map__40126__$1,msg,updates,reload_info){
return (function (e){
var seq__41258_41731 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41260_41732 = null;
var count__41261_41733 = (0);
var i__41262_41734 = (0);
while(true){
if((i__41262_41734 < count__41261_41733)){
var map__41275_41736 = chunk__41260_41732.cljs$core$IIndexed$_nth$arity$2(null,i__41262_41734);
var map__41275_41737__$1 = cljs.core.__destructure_map(map__41275_41736);
var task_41738 = map__41275_41737__$1;
var fn_str_41739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41275_41737__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41275_41737__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41742 = goog.getObjectByName(fn_str_41739,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41740)].join(''));

(fn_obj_41742.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41742.cljs$core$IFn$_invoke$arity$2(path,new_link_41728) : fn_obj_41742.call(null,path,new_link_41728));


var G__41745 = seq__41258_41731;
var G__41746 = chunk__41260_41732;
var G__41747 = count__41261_41733;
var G__41748 = (i__41262_41734 + (1));
seq__41258_41731 = G__41745;
chunk__41260_41732 = G__41746;
count__41261_41733 = G__41747;
i__41262_41734 = G__41748;
continue;
} else {
var temp__5804__auto___41750__$1 = cljs.core.seq(seq__41258_41731);
if(temp__5804__auto___41750__$1){
var seq__41258_41752__$1 = temp__5804__auto___41750__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41258_41752__$1)){
var c__5568__auto___41753 = cljs.core.chunk_first(seq__41258_41752__$1);
var G__41754 = cljs.core.chunk_rest(seq__41258_41752__$1);
var G__41755 = c__5568__auto___41753;
var G__41756 = cljs.core.count(c__5568__auto___41753);
var G__41757 = (0);
seq__41258_41731 = G__41754;
chunk__41260_41732 = G__41755;
count__41261_41733 = G__41756;
i__41262_41734 = G__41757;
continue;
} else {
var map__41282_41760 = cljs.core.first(seq__41258_41752__$1);
var map__41282_41761__$1 = cljs.core.__destructure_map(map__41282_41760);
var task_41762 = map__41282_41761__$1;
var fn_str_41763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41282_41761__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41282_41761__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41766 = goog.getObjectByName(fn_str_41763,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41764)].join(''));

(fn_obj_41766.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41766.cljs$core$IFn$_invoke$arity$2(path,new_link_41728) : fn_obj_41766.call(null,path,new_link_41728));


var G__41769 = cljs.core.next(seq__41258_41752__$1);
var G__41770 = null;
var G__41771 = (0);
var G__41772 = (0);
seq__41258_41731 = G__41769;
chunk__41260_41732 = G__41770;
count__41261_41733 = G__41771;
i__41262_41734 = G__41772;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41726);
});})(seq__41101_41722,chunk__41105_41723,count__41106_41724,i__41107_41725,seq__40127,chunk__40129,count__40130,i__40131,new_link_41728,path_match_41727,node_41726,path,seq__40127__$1,temp__5804__auto__,map__40126,map__40126__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41727], 0));

goog.dom.insertSiblingAfter(new_link_41728,node_41726);


var G__41773 = seq__41101_41722;
var G__41774 = chunk__41105_41723;
var G__41775 = count__41106_41724;
var G__41776 = (i__41107_41725 + (1));
seq__41101_41722 = G__41773;
chunk__41105_41723 = G__41774;
count__41106_41724 = G__41775;
i__41107_41725 = G__41776;
continue;
} else {
var G__41777 = seq__41101_41722;
var G__41778 = chunk__41105_41723;
var G__41779 = count__41106_41724;
var G__41780 = (i__41107_41725 + (1));
seq__41101_41722 = G__41777;
chunk__41105_41723 = G__41778;
count__41106_41724 = G__41779;
i__41107_41725 = G__41780;
continue;
}
} else {
var G__41781 = seq__41101_41722;
var G__41782 = chunk__41105_41723;
var G__41783 = count__41106_41724;
var G__41784 = (i__41107_41725 + (1));
seq__41101_41722 = G__41781;
chunk__41105_41723 = G__41782;
count__41106_41724 = G__41783;
i__41107_41725 = G__41784;
continue;
}
} else {
var temp__5804__auto___41785__$1 = cljs.core.seq(seq__41101_41722);
if(temp__5804__auto___41785__$1){
var seq__41101_41786__$1 = temp__5804__auto___41785__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41101_41786__$1)){
var c__5568__auto___41787 = cljs.core.chunk_first(seq__41101_41786__$1);
var G__41788 = cljs.core.chunk_rest(seq__41101_41786__$1);
var G__41789 = c__5568__auto___41787;
var G__41790 = cljs.core.count(c__5568__auto___41787);
var G__41791 = (0);
seq__41101_41722 = G__41788;
chunk__41105_41723 = G__41789;
count__41106_41724 = G__41790;
i__41107_41725 = G__41791;
continue;
} else {
var node_41794 = cljs.core.first(seq__41101_41786__$1);
if(cljs.core.not(node_41794.shadow$old)){
var path_match_41795 = shadow.cljs.devtools.client.browser.match_paths(node_41794.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41795)){
var new_link_41796 = (function (){var G__41305 = node_41794.cloneNode(true);
G__41305.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41795),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41305;
})();
(node_41794.shadow$old = true);

(new_link_41796.onload = ((function (seq__41101_41722,chunk__41105_41723,count__41106_41724,i__41107_41725,seq__40127,chunk__40129,count__40130,i__40131,new_link_41796,path_match_41795,node_41794,seq__41101_41786__$1,temp__5804__auto___41785__$1,path,seq__40127__$1,temp__5804__auto__,map__40126,map__40126__$1,msg,updates,reload_info){
return (function (e){
var seq__41314_41802 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41316_41803 = null;
var count__41317_41804 = (0);
var i__41318_41805 = (0);
while(true){
if((i__41318_41805 < count__41317_41804)){
var map__41348_41806 = chunk__41316_41803.cljs$core$IIndexed$_nth$arity$2(null,i__41318_41805);
var map__41348_41807__$1 = cljs.core.__destructure_map(map__41348_41806);
var task_41808 = map__41348_41807__$1;
var fn_str_41809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348_41807__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348_41807__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41813 = goog.getObjectByName(fn_str_41809,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41810)].join(''));

(fn_obj_41813.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41813.cljs$core$IFn$_invoke$arity$2(path,new_link_41796) : fn_obj_41813.call(null,path,new_link_41796));


var G__41815 = seq__41314_41802;
var G__41816 = chunk__41316_41803;
var G__41817 = count__41317_41804;
var G__41818 = (i__41318_41805 + (1));
seq__41314_41802 = G__41815;
chunk__41316_41803 = G__41816;
count__41317_41804 = G__41817;
i__41318_41805 = G__41818;
continue;
} else {
var temp__5804__auto___41820__$2 = cljs.core.seq(seq__41314_41802);
if(temp__5804__auto___41820__$2){
var seq__41314_41822__$1 = temp__5804__auto___41820__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41314_41822__$1)){
var c__5568__auto___41823 = cljs.core.chunk_first(seq__41314_41822__$1);
var G__41824 = cljs.core.chunk_rest(seq__41314_41822__$1);
var G__41825 = c__5568__auto___41823;
var G__41826 = cljs.core.count(c__5568__auto___41823);
var G__41827 = (0);
seq__41314_41802 = G__41824;
chunk__41316_41803 = G__41825;
count__41317_41804 = G__41826;
i__41318_41805 = G__41827;
continue;
} else {
var map__41358_41828 = cljs.core.first(seq__41314_41822__$1);
var map__41358_41829__$1 = cljs.core.__destructure_map(map__41358_41828);
var task_41830 = map__41358_41829__$1;
var fn_str_41831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41358_41829__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41358_41829__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41835 = goog.getObjectByName(fn_str_41831,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41832)].join(''));

(fn_obj_41835.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41835.cljs$core$IFn$_invoke$arity$2(path,new_link_41796) : fn_obj_41835.call(null,path,new_link_41796));


var G__41839 = cljs.core.next(seq__41314_41822__$1);
var G__41840 = null;
var G__41841 = (0);
var G__41842 = (0);
seq__41314_41802 = G__41839;
chunk__41316_41803 = G__41840;
count__41317_41804 = G__41841;
i__41318_41805 = G__41842;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41794);
});})(seq__41101_41722,chunk__41105_41723,count__41106_41724,i__41107_41725,seq__40127,chunk__40129,count__40130,i__40131,new_link_41796,path_match_41795,node_41794,seq__41101_41786__$1,temp__5804__auto___41785__$1,path,seq__40127__$1,temp__5804__auto__,map__40126,map__40126__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41795], 0));

goog.dom.insertSiblingAfter(new_link_41796,node_41794);


var G__41843 = cljs.core.next(seq__41101_41786__$1);
var G__41844 = null;
var G__41845 = (0);
var G__41846 = (0);
seq__41101_41722 = G__41843;
chunk__41105_41723 = G__41844;
count__41106_41724 = G__41845;
i__41107_41725 = G__41846;
continue;
} else {
var G__41848 = cljs.core.next(seq__41101_41786__$1);
var G__41849 = null;
var G__41850 = (0);
var G__41851 = (0);
seq__41101_41722 = G__41848;
chunk__41105_41723 = G__41849;
count__41106_41724 = G__41850;
i__41107_41725 = G__41851;
continue;
}
} else {
var G__41852 = cljs.core.next(seq__41101_41786__$1);
var G__41853 = null;
var G__41854 = (0);
var G__41855 = (0);
seq__41101_41722 = G__41852;
chunk__41105_41723 = G__41853;
count__41106_41724 = G__41854;
i__41107_41725 = G__41855;
continue;
}
}
} else {
}
}
break;
}


var G__41856 = cljs.core.next(seq__40127__$1);
var G__41857 = null;
var G__41858 = (0);
var G__41859 = (0);
seq__40127 = G__41856;
chunk__40129 = G__41857;
count__40130 = G__41858;
i__40131 = G__41859;
continue;
} else {
var G__41861 = cljs.core.next(seq__40127__$1);
var G__41862 = null;
var G__41863 = (0);
var G__41864 = (0);
seq__40127 = G__41861;
chunk__40129 = G__41862;
count__40130 = G__41863;
i__40131 = G__41864;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__41385){
var map__41386 = p__41385;
var map__41386__$1 = cljs.core.__destructure_map(map__41386);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41386__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41388,done,error){
var map__41390 = p__41388;
var map__41390__$1 = cljs.core.__destructure_map(map__41390);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41390__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41397,done,error){
var map__41400 = p__41397;
var map__41400__$1 = cljs.core.__destructure_map(map__41400);
var msg = map__41400__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41400__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41400__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41400__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41403){
var map__41405 = p__41403;
var map__41405__$1 = cljs.core.__destructure_map(map__41405);
var src = map__41405__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41405__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41422 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41422) : done.call(null,G__41422));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41424){
var map__41426 = p__41424;
var map__41426__$1 = cljs.core.__destructure_map(map__41426);
var msg__$1 = map__41426__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41426__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41429){var ex = e41429;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41435){
var map__41436 = p__41435;
var map__41436__$1 = cljs.core.__destructure_map(map__41436);
var env = map__41436__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41436__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41471){
var map__41472 = p__41471;
var map__41472__$1 = cljs.core.__destructure_map(map__41472);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41472__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41472__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__41473){
var map__41474 = p__41473;
var map__41474__$1 = cljs.core.__destructure_map(map__41474);
var svc = map__41474__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41474__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}
Object.defineProperty(module.exports, "script_eval", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.script_eval; } });
Object.defineProperty(module.exports, "global_eval", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.global_eval; } });
Object.defineProperty(module.exports, "do_js_load", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_load; } });
Object.defineProperty(module.exports, "handle_asset_update", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.handle_asset_update; } });
Object.defineProperty(module.exports, "page_load_uri", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.page_load_uri; } });
Object.defineProperty(module.exports, "do_js_requires", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_requires; } });
Object.defineProperty(module.exports, "client_info", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.client_info; } });
Object.defineProperty(module.exports, "runtime_info", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.runtime_info; } });
Object.defineProperty(module.exports, "match_paths", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.match_paths; } });
Object.defineProperty(module.exports, "devtools_msg", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.devtools_msg; } });
Object.defineProperty(module.exports, "do_js_reload", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_reload; } });
Object.defineProperty(module.exports, "ws_was_welcome_ref", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.ws_was_welcome_ref; } });
Object.defineProperty(module.exports, "handle_build_complete", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.handle_build_complete; } });
//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
