var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.remote.runtime.api.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.shared.js");

goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34980){
var map__34982 = p__34980;
var map__34982__$1 = cljs.core.__destructure_map(map__34982);
var runtime = map__34982__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34982__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_35164 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_35164)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__34983 = runtime;
var G__34984 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_35164);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__34983,G__34984) : shadow.remote.runtime.shared.process.call(null,G__34983,G__34984));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34986,res){
var map__34987 = p__34986;
var map__34987__$1 = cljs.core.__destructure_map(map__34987);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34987__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34987__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34988 = res;
var G__34988__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34988,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34988);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34988__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34988__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34994 = arguments.length;
switch (G__34994) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__35014,msg,handlers,timeout_after_ms){
var map__35019 = p__35014;
var map__35019__$1 = cljs.core.__destructure_map(map__35019);
var runtime = map__35019__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35019__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35166 = arguments.length;
var i__5770__auto___35167 = (0);
while(true){
if((i__5770__auto___35167 < len__5769__auto___35166)){
args__5775__auto__.push((arguments[i__5770__auto___35167]));

var G__35168 = (i__5770__auto___35167 + (1));
i__5770__auto___35167 = G__35168;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__35024,ev,args){
var map__35025 = p__35024;
var map__35025__$1 = cljs.core.__destructure_map(map__35025);
var runtime = map__35025__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35025__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__35031 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35034 = null;
var count__35035 = (0);
var i__35036 = (0);
while(true){
if((i__35036 < count__35035)){
var ext = chunk__35034.cljs$core$IIndexed$_nth$arity$2(null,i__35036);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35169 = seq__35031;
var G__35170 = chunk__35034;
var G__35171 = count__35035;
var G__35172 = (i__35036 + (1));
seq__35031 = G__35169;
chunk__35034 = G__35170;
count__35035 = G__35171;
i__35036 = G__35172;
continue;
} else {
var G__35173 = seq__35031;
var G__35174 = chunk__35034;
var G__35175 = count__35035;
var G__35176 = (i__35036 + (1));
seq__35031 = G__35173;
chunk__35034 = G__35174;
count__35035 = G__35175;
i__35036 = G__35176;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35031);
if(temp__5804__auto__){
var seq__35031__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35031__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35031__$1);
var G__35177 = cljs.core.chunk_rest(seq__35031__$1);
var G__35178 = c__5568__auto__;
var G__35179 = cljs.core.count(c__5568__auto__);
var G__35180 = (0);
seq__35031 = G__35177;
chunk__35034 = G__35178;
count__35035 = G__35179;
i__35036 = G__35180;
continue;
} else {
var ext = cljs.core.first(seq__35031__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35181 = cljs.core.next(seq__35031__$1);
var G__35182 = null;
var G__35183 = (0);
var G__35184 = (0);
seq__35031 = G__35181;
chunk__35034 = G__35182;
count__35035 = G__35183;
i__35036 = G__35184;
continue;
} else {
var G__35185 = cljs.core.next(seq__35031__$1);
var G__35186 = null;
var G__35187 = (0);
var G__35188 = (0);
seq__35031 = G__35185;
chunk__35034 = G__35186;
count__35035 = G__35187;
i__35036 = G__35188;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq35020){
var G__35021 = cljs.core.first(seq35020);
var seq35020__$1 = cljs.core.next(seq35020);
var G__35022 = cljs.core.first(seq35020__$1);
var seq35020__$2 = cljs.core.next(seq35020__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35021,G__35022,seq35020__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__35060,p__35061){
var map__35065 = p__35060;
var map__35065__$1 = cljs.core.__destructure_map(map__35065);
var runtime = map__35065__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35065__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35066 = p__35061;
var map__35066__$1 = cljs.core.__destructure_map(map__35066);
var msg = map__35066__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35066__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__35077 = cljs.core.deref(state_ref);
var map__35077__$1 = cljs.core.__destructure_map(map__35077);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35077__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35077__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__35089,msg){
var map__35090 = p__35089;
var map__35090__$1 = cljs.core.__destructure_map(map__35090);
var runtime = map__35090__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35090__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__35112,key,p__35113){
var map__35114 = p__35112;
var map__35114__$1 = cljs.core.__destructure_map(map__35114);
var state = map__35114__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35114__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__35115 = p__35113;
var map__35115__$1 = cljs.core.__destructure_map(map__35115);
var spec = map__35115__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35115__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__35118,key,spec){
var map__35119 = p__35118;
var map__35119__$1 = cljs.core.__destructure_map(map__35119);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35119__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__35120_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__35120_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__35121_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__35121_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__35122_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__35122_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__35123_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__35123_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__35124_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__35124_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__35126,key){
var map__35127 = p__35126;
var map__35127__$1 = cljs.core.__destructure_map(map__35127);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35127__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__35134,msg){
var map__35139 = p__35134;
var map__35139__$1 = cljs.core.__destructure_map(map__35139);
var runtime = map__35139__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35139__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__35144,p__35145){
var map__35146 = p__35144;
var map__35146__$1 = cljs.core.__destructure_map(map__35146);
var runtime = map__35146__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35146__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35147 = p__35145;
var map__35147__$1 = cljs.core.__destructure_map(map__35147);
var msg = map__35147__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35147__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35147__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__35150 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35152 = null;
var count__35153 = (0);
var i__35154 = (0);
while(true){
if((i__35154 < count__35153)){
var map__35160 = chunk__35152.cljs$core$IIndexed$_nth$arity$2(null,i__35154);
var map__35160__$1 = cljs.core.__destructure_map(map__35160);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35160__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35206 = seq__35150;
var G__35207 = chunk__35152;
var G__35208 = count__35153;
var G__35209 = (i__35154 + (1));
seq__35150 = G__35206;
chunk__35152 = G__35207;
count__35153 = G__35208;
i__35154 = G__35209;
continue;
} else {
var G__35210 = seq__35150;
var G__35211 = chunk__35152;
var G__35212 = count__35153;
var G__35213 = (i__35154 + (1));
seq__35150 = G__35210;
chunk__35152 = G__35211;
count__35153 = G__35212;
i__35154 = G__35213;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35150);
if(temp__5804__auto__){
var seq__35150__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35150__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35150__$1);
var G__35216 = cljs.core.chunk_rest(seq__35150__$1);
var G__35217 = c__5568__auto__;
var G__35218 = cljs.core.count(c__5568__auto__);
var G__35219 = (0);
seq__35150 = G__35216;
chunk__35152 = G__35217;
count__35153 = G__35218;
i__35154 = G__35219;
continue;
} else {
var map__35161 = cljs.core.first(seq__35150__$1);
var map__35161__$1 = cljs.core.__destructure_map(map__35161);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35161__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35224 = cljs.core.next(seq__35150__$1);
var G__35225 = null;
var G__35226 = (0);
var G__35227 = (0);
seq__35150 = G__35224;
chunk__35152 = G__35225;
count__35153 = G__35226;
i__35154 = G__35227;
continue;
} else {
var G__35228 = cljs.core.next(seq__35150__$1);
var G__35229 = null;
var G__35230 = (0);
var G__35231 = (0);
seq__35150 = G__35228;
chunk__35152 = G__35229;
count__35153 = G__35230;
i__35154 = G__35231;
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
Object.defineProperty(module.exports, "request_supported_ops", { enumerable: false, get: function() { return shadow.remote.runtime.shared.request_supported_ops; } });
Object.defineProperty(module.exports, "unhandled_client_not_found", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unhandled_client_not_found; } });
Object.defineProperty(module.exports, "trigger_BANG_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.trigger_BANG_; } });
Object.defineProperty(module.exports, "add_defaults", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_defaults; } });
Object.defineProperty(module.exports, "reply", { enumerable: false, get: function() { return shadow.remote.runtime.shared.reply; } });
Object.defineProperty(module.exports, "add_extension_STAR_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_extension_STAR_; } });
Object.defineProperty(module.exports, "ping", { enumerable: false, get: function() { return shadow.remote.runtime.shared.ping; } });
Object.defineProperty(module.exports, "del_extension", { enumerable: false, get: function() { return shadow.remote.runtime.shared.del_extension; } });
Object.defineProperty(module.exports, "add_extension", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_extension; } });
Object.defineProperty(module.exports, "now", { enumerable: false, get: function() { return shadow.remote.runtime.shared.now; } });
Object.defineProperty(module.exports, "welcome", { enumerable: false, get: function() { return shadow.remote.runtime.shared.welcome; } });
Object.defineProperty(module.exports, "call", { enumerable: false, get: function() { return shadow.remote.runtime.shared.call; } });
Object.defineProperty(module.exports, "unhandled_call_result", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unhandled_call_result; } });
Object.defineProperty(module.exports, "process", { enumerable: false, get: function() { return shadow.remote.runtime.shared.process; } });
Object.defineProperty(module.exports, "init_state", { enumerable: false, get: function() { return shadow.remote.runtime.shared.init_state; } });
Object.defineProperty(module.exports, "unknown_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unknown_op; } });
Object.defineProperty(module.exports, "run_on_idle", { enumerable: false, get: function() { return shadow.remote.runtime.shared.run_on_idle; } });
Object.defineProperty(module.exports, "relay_msg", { enumerable: false, get: function() { return shadow.remote.runtime.shared.relay_msg; } });
Object.defineProperty(module.exports, "unknown_relay_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unknown_relay_op; } });
Object.defineProperty(module.exports, "get_client_id", { enumerable: false, get: function() { return shadow.remote.runtime.shared.get_client_id; } });
Object.defineProperty(module.exports, "del_extension_STAR_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.del_extension_STAR_; } });
Object.defineProperty(module.exports, "reply_unknown_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.reply_unknown_op; } });
//# sourceMappingURL=shadow.remote.runtime.shared.js.map
