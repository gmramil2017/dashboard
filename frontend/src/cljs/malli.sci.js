var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./borkdude.dynaload.js");
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

$CLJS.SHADOW_ENV.setLoaded("malli.sci.js");

goog.provide('malli.sci');
malli.sci.evaluator = (function malli$sci$evaluator(options,fail_BANG_){
var eval_string_STAR_ = borkdude.dynaload.__GT_LazyVar((function (){
if((typeof sci !== 'undefined') && (typeof sci.core !== 'undefined') && (typeof sci.core.eval_string_STAR_ !== 'undefined')){
return sci.core.eval_string_STAR_;
} else {
var temp__5802__auto__ = cljs.core.find(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5802__auto__)){
var e__39864__auto__ = temp__5802__auto__;
return cljs.core.val(e__39864__auto__);
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("sci.core","eval-string*","sci.core/eval-string*",2134763594,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("sci.core","eval-string*","sci.core/eval-string*",2134763594,null))," never required"].join('')));
}
}
}),null);
var init = borkdude.dynaload.__GT_LazyVar((function (){
if((typeof sci !== 'undefined') && (typeof sci.core !== 'undefined') && (typeof sci.core.init !== 'undefined')){
return sci.core.init;
} else {
var temp__5802__auto__ = cljs.core.find(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5802__auto__)){
var e__39864__auto__ = temp__5802__auto__;
return cljs.core.val(e__39864__auto__);
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("sci.core","init","sci.core/init",-622666095,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("sci.core","init","sci.core/init",-622666095,null))," never required"].join('')));
}
}
}),null);
var fork = borkdude.dynaload.__GT_LazyVar((function (){
if((typeof sci !== 'undefined') && (typeof sci.core !== 'undefined') && (typeof sci.core.fork !== 'undefined')){
return sci.core.fork;
} else {
var temp__5802__auto__ = cljs.core.find(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5802__auto__)){
var e__39864__auto__ = temp__5802__auto__;
return cljs.core.val(e__39864__auto__);
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("sci.core","fork","sci.core/fork",-1806691042,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("sci.core","fork","sci.core/fork",-1806691042,null))," never required"].join('')));
}
}
}),null);
return (function (){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(eval_string_STAR_);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.deref(init);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.deref(fork);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var ctx = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(options) : init.call(null,options));
(eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(ctx,"(alias 'm 'malli.core)") : eval_string_STAR_.call(null,ctx,"(alias 'm 'malli.core)"));

return (function malli$sci$evaluator_$_eval(s){
var G__40056 = (fork.cljs$core$IFn$_invoke$arity$1 ? fork.cljs$core$IFn$_invoke$arity$1(ctx) : fork.call(null,ctx));
var G__40057 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
return (eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__40056,G__40057) : eval_string_STAR_.call(null,G__40056,G__40057));
});
} else {
return fail_BANG_;
}
});
});
Object.defineProperty(module.exports, "evaluator", { enumerable: false, get: function() { return malli.sci.evaluator; } });
//# sourceMappingURL=malli.sci.js.map
