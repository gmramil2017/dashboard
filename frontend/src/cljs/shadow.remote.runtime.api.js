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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.api.js");

goog.provide('shadow.remote.runtime.api');

/**
 * @interface
 */
shadow.remote.runtime.api.IRuntime = function(){};

var shadow$remote$runtime$api$IRuntime$relay_msg$dyn_34975 = (function (runtime,msg){
var x__5393__auto__ = (((runtime == null))?null:runtime);
var m__5394__auto__ = (shadow.remote.runtime.api.relay_msg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(runtime,msg) : m__5394__auto__.call(null,runtime,msg));
} else {
var m__5392__auto__ = (shadow.remote.runtime.api.relay_msg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(runtime,msg) : m__5392__auto__.call(null,runtime,msg));
} else {
throw cljs.core.missing_protocol("IRuntime.relay-msg",runtime);
}
}
});
shadow.remote.runtime.api.relay_msg = (function shadow$remote$runtime$api$relay_msg(runtime,msg){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2(runtime,msg);
} else {
return shadow$remote$runtime$api$IRuntime$relay_msg$dyn_34975(runtime,msg);
}
});

var shadow$remote$runtime$api$IRuntime$add_extension$dyn_34976 = (function (runtime,key,spec){
var x__5393__auto__ = (((runtime == null))?null:runtime);
var m__5394__auto__ = (shadow.remote.runtime.api.add_extension[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(runtime,key,spec) : m__5394__auto__.call(null,runtime,key,spec));
} else {
var m__5392__auto__ = (shadow.remote.runtime.api.add_extension["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(runtime,key,spec) : m__5392__auto__.call(null,runtime,key,spec));
} else {
throw cljs.core.missing_protocol("IRuntime.add-extension",runtime);
}
}
});
shadow.remote.runtime.api.add_extension = (function shadow$remote$runtime$api$add_extension(runtime,key,spec){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$add_extension$arity$3 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$add_extension$arity$3(runtime,key,spec);
} else {
return shadow$remote$runtime$api$IRuntime$add_extension$dyn_34976(runtime,key,spec);
}
});

var shadow$remote$runtime$api$IRuntime$del_extension$dyn_34978 = (function (runtime,key){
var x__5393__auto__ = (((runtime == null))?null:runtime);
var m__5394__auto__ = (shadow.remote.runtime.api.del_extension[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(runtime,key) : m__5394__auto__.call(null,runtime,key));
} else {
var m__5392__auto__ = (shadow.remote.runtime.api.del_extension["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(runtime,key) : m__5392__auto__.call(null,runtime,key));
} else {
throw cljs.core.missing_protocol("IRuntime.del-extension",runtime);
}
}
});
shadow.remote.runtime.api.del_extension = (function shadow$remote$runtime$api$del_extension(runtime,key){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$del_extension$arity$2 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$del_extension$arity$2(runtime,key);
} else {
return shadow$remote$runtime$api$IRuntime$del_extension$dyn_34978(runtime,key);
}
});


/**
 * @interface
 */
shadow.remote.runtime.api.Inspectable = function(){};

var shadow$remote$runtime$api$Inspectable$describe$dyn_34985 = (function (thing,opts){
var x__5393__auto__ = (((thing == null))?null:thing);
var m__5394__auto__ = (shadow.remote.runtime.api.describe[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : m__5394__auto__.call(null,thing,opts));
} else {
var m__5392__auto__ = (shadow.remote.runtime.api.describe["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : m__5392__auto__.call(null,thing,opts));
} else {
throw cljs.core.missing_protocol("Inspectable.describe",thing);
}
}
});
/**
 * returns a map descriptor that tells system how to handle things further
 */
shadow.remote.runtime.api.describe = (function shadow$remote$runtime$api$describe(thing,opts){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(thing),cljs.core.with_meta(new cljs.core.Symbol("shadow.remote.runtime.api","describe","shadow.remote.runtime.api/describe",1388020131,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return (meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__5395__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : meta_impl__5395__auto__.call(null,thing,opts));
} else {
if((((!((thing == null)))) && ((!((thing.shadow$remote$runtime$api$Inspectable$describe$arity$2 == null)))))){
return thing.shadow$remote$runtime$api$Inspectable$describe$arity$2(thing,opts);
} else {
return shadow$remote$runtime$api$Inspectable$describe$dyn_34985(thing,opts);
}
}
});


/**
 * @interface
 */
shadow.remote.runtime.api.IEvalCLJS = function(){};

var shadow$remote$runtime$api$IEvalCLJS$_cljs_eval$dyn_34989 = (function (runtime,input,callback){
var x__5393__auto__ = (((runtime == null))?null:runtime);
var m__5394__auto__ = (shadow.remote.runtime.api._cljs_eval[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(runtime,input,callback) : m__5394__auto__.call(null,runtime,input,callback));
} else {
var m__5392__auto__ = (shadow.remote.runtime.api._cljs_eval["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(runtime,input,callback) : m__5392__auto__.call(null,runtime,input,callback));
} else {
throw cljs.core.missing_protocol("IEvalCLJS.-cljs-eval",runtime);
}
}
});
shadow.remote.runtime.api._cljs_eval = (function shadow$remote$runtime$api$_cljs_eval(runtime,input,callback){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IEvalCLJS$_cljs_eval$arity$3 == null)))))){
return runtime.shadow$remote$runtime$api$IEvalCLJS$_cljs_eval$arity$3(runtime,input,callback);
} else {
return shadow$remote$runtime$api$IEvalCLJS$_cljs_eval$dyn_34989(runtime,input,callback);
}
});



/**
 * @interface
 */
shadow.remote.runtime.api.IEvalJS = function(){};

var shadow$remote$runtime$api$IEvalJS$_js_eval$dyn_34993 = (function (runtime,code){
var x__5393__auto__ = (((runtime == null))?null:runtime);
var m__5394__auto__ = (shadow.remote.runtime.api._js_eval[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(runtime,code) : m__5394__auto__.call(null,runtime,code));
} else {
var m__5392__auto__ = (shadow.remote.runtime.api._js_eval["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(runtime,code) : m__5392__auto__.call(null,runtime,code));
} else {
throw cljs.core.missing_protocol("IEvalJS.-js-eval",runtime);
}
}
});
shadow.remote.runtime.api._js_eval = (function shadow$remote$runtime$api$_js_eval(runtime,code){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 == null)))))){
return runtime.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2(runtime,code);
} else {
return shadow$remote$runtime$api$IEvalJS$_js_eval$dyn_34993(runtime,code);
}
});


shadow.remote.runtime.api.cljs_eval = (function shadow$remote$runtime$api$cljs_eval(runtime,p__34971,callback){
var map__34972 = p__34971;
var map__34972__$1 = cljs.core.__destructure_map(map__34972);
var input = map__34972__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34972__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34972__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
if(((typeof code === 'string') && (cljs.core.simple_symbol_QMARK_(ns)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid cljs-eval input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));
}

return shadow.remote.runtime.api._cljs_eval(runtime,input,callback);
});

shadow.remote.runtime.api.js_eval = (function shadow$remote$runtime$api$js_eval(runtime,code){
if(typeof code === 'string'){
} else {
throw (new Error("Assert failed: (string? code)"));
}

return shadow.remote.runtime.api._js_eval(runtime,code);
});
Object.defineProperty(module.exports, "IEvalCLJS", { enumerable: false, get: function() { return shadow.remote.runtime.api.IEvalCLJS; } });
Object.defineProperty(module.exports, "del_extension", { enumerable: false, get: function() { return shadow.remote.runtime.api.del_extension; } });
Object.defineProperty(module.exports, "IRuntime", { enumerable: false, get: function() { return shadow.remote.runtime.api.IRuntime; } });
Object.defineProperty(module.exports, "Inspectable", { enumerable: false, get: function() { return shadow.remote.runtime.api.Inspectable; } });
Object.defineProperty(module.exports, "add_extension", { enumerable: false, get: function() { return shadow.remote.runtime.api.add_extension; } });
Object.defineProperty(module.exports, "cljs_eval", { enumerable: false, get: function() { return shadow.remote.runtime.api.cljs_eval; } });
Object.defineProperty(module.exports, "_js_eval", { enumerable: false, get: function() { return shadow.remote.runtime.api._js_eval; } });
Object.defineProperty(module.exports, "IEvalJS", { enumerable: false, get: function() { return shadow.remote.runtime.api.IEvalJS; } });
Object.defineProperty(module.exports, "relay_msg", { enumerable: false, get: function() { return shadow.remote.runtime.api.relay_msg; } });
Object.defineProperty(module.exports, "_cljs_eval", { enumerable: false, get: function() { return shadow.remote.runtime.api._cljs_eval; } });
Object.defineProperty(module.exports, "js_eval", { enumerable: false, get: function() { return shadow.remote.runtime.api.js_eval; } });
Object.defineProperty(module.exports, "describe", { enumerable: false, get: function() { return shadow.remote.runtime.api.describe; } });
//# sourceMappingURL=shadow.remote.runtime.api.js.map
