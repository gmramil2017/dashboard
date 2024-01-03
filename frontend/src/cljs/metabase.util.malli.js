var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
require("./malli.destructure.js");
require("./malli.error.js");
require("./malli.generator.js");
require("./malli.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.util.malli.js");

goog.provide('metabase.util.malli');
metabase.util.malli.encode_uri = (function metabase$util$malli$encode_uri(fragment){
return encodeURI(fragment);
});
metabase.util.malli.__GT_malli_io_link = (function metabase$util$malli$__GT_malli_io_link(var_args){
var G__58497 = arguments.length;
switch (G__58497) {
case 1:
return metabase.util.malli.__GT_malli_io_link.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.util.malli.__GT_malli_io_link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.util.malli.__GT_malli_io_link.cljs$core$IFn$_invoke$arity$1 = (function (schema__$1){
return metabase.util.malli.__GT_malli_io_link.cljs$core$IFn$_invoke$arity$2(schema__$1,(function (){try{return malli.generator.generate.cljs$core$IFn$_invoke$arity$2(schema__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seed","seed",68613327),(1),new cljs.core.Keyword(null,"size","size",1098693007),(1)], null));
}catch (e58498){if((e58498 instanceof Error)){
var _ = e58498;
return new cljs.core.Keyword("metabase.util.malli","none","metabase.util.malli/none",-204132675);
} else {
throw e58498;

}
}})());
}));

(metabase.util.malli.__GT_malli_io_link.cljs$core$IFn$_invoke$arity$2 = (function (schema__$1,value){
if(cljs.core.truth_(schema__$1)){
var url_schema = metabase.util.malli.encode_uri(metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(malli.core.form.cljs$core$IFn$_invoke$arity$1(schema__$1)));
var url_value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.util.malli","none","metabase.util.malli/none",-204132675),value))?"":metabase.util.malli.encode_uri(metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(value)));
var url = ["https://malli.io?schema=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url_schema),"&value=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url_value)].join('');
if(cljs.core.truth_(cljs.core.re_find(/#function/,url))){
return null;
} else {
if(((2000) <= ((url).length))){
return null;
} else {
return url;

}
}
} else {
return null;
}
}));

(metabase.util.malli.__GT_malli_io_link.cljs$lang$maxFixedArity = 2);

/**
 * Pass into mu/humanize to include the value received in the error message.
 */
metabase.util.malli.humanize_include_value = (function metabase$util$malli$humanize_include_value(p__58499){
var map__58500 = p__58499;
var map__58500__$1 = cljs.core.__destructure_map(map__58500);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58500__$1,new cljs.core.Keyword(null,"value","value",305978217));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n("received")),": ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
});
/**
 * Bind to false to skip enforcing instrumented function schemas.
 */
metabase.util.malli._STAR_enforce_STAR_ = true;
/**
 * Used as reporting function to minst/instrument!
 */
metabase.util.malli.explain_fn_fail_BANG_ = (function metabase$util$malli$explain_fn_fail_BANG_(type,data){
if(cljs.core.truth_(metabase.util.malli._STAR_enforce_STAR_)){
var map__58501_58514 = data;
var map__58501_58515__$1 = cljs.core.__destructure_map(map__58501_58514);
var input_58516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58501_58515__$1,new cljs.core.Keyword(null,"input","input",556931961));
var args_58517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58501_58515__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var output_58518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58501_58515__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var value_58519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58501_58515__$1,new cljs.core.Keyword(null,"value","value",305978217));
var humanized_58520 = (cljs.core.truth_(input_58516)?malli.error.humanize.cljs$core$IFn$_invoke$arity$2(malli.core.explain.cljs$core$IFn$_invoke$arity$2(input_58516,args_58517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap","wrap",851669987),metabase.util.malli.humanize_include_value], null)):(cljs.core.truth_(output_58518)?malli.error.humanize.cljs$core$IFn$_invoke$arity$2(malli.core.explain.cljs$core$IFn$_invoke$arity$2(output_58518,value_58519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap","wrap",851669987),metabase.util.malli.humanize_include_value], null)):null));
var link_58521 = (cljs.core.truth_(input_58516)?metabase.util.malli.__GT_malli_io_link.cljs$core$IFn$_invoke$arity$2(input_58516,args_58517):(cljs.core.truth_(output_58518)?metabase.util.malli.__GT_malli_io_link.cljs$core$IFn$_invoke$arity$2(output_58518,value_58519):null));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([humanized_58520], 0)),(function (){var G__58502 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null);
var G__58502__$1 = (cljs.core.truth_(data)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58502,new cljs.core.Keyword(null,"humanized","humanized",-287672961),humanized_58520):G__58502);
if(cljs.core.truth_((function (){var and__5043__auto__ = data;
if(cljs.core.truth_(and__5043__auto__)){
return link_58521;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58502__$1,new cljs.core.Keyword(null,"link","link",-1769163468),link_58521);
} else {
return G__58502__$1;
}
})());
} else {
}

return data;
});
/**
 * Instrument a [[metabase.util.malli/defn]]. No-op for ClojureScript. Instrumentation currently only works in
 *   Clojure AFAIK. [[malli.instrument]] is a Clj-only namespace.
 */
metabase.util.malli.instrument_BANG_ = (function metabase$util$malli$instrument_BANG_(_id){
return null;
});
metabase.util.malli.Schema = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.any_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"a malli schema"], null),malli.core.schema], null)], null);
metabase.util.malli.localized_string_schema = cljs.core.string_QMARK_;
/**
 * Inputs: ([mschema :- Schema error-message :- localized-string-schema]
 *         [mschema :- :any description-message :- localized-string-schema specific-error-message :- localized-string-schema])
 *   Return: :any
 *        
 * 
 *   Update a malli schema to have a :description (used by umd/describe, which is used by api docs),
 *   and a :error/fn (used by me/humanize, which is used by defendpoint).
 *   They don't have to be the same, but usually are.
 * 
 *   (with-api-error-message
 *  [:string {:min 1}]
 *  (deferred-tru "Must be a string with at least 1 character representing a User ID."))
 */
metabase.util.malli.with_api_error_message = (function metabase$util$malli$with_api_error_message(var_args){
var G__58512 = arguments.length;
switch (G__58512) {
case 2:
return metabase.util.malli.with_api_error_message.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.util.malli.with_api_error_message.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.util.malli.with_api_error_message.cljs$core$IFn$_invoke$arity$2 = (function (mschema,error_message){

return metabase.util.malli.with_api_error_message.cljs$core$IFn$_invoke$arity$3(mschema,error_message,error_message);
}));

(metabase.util.malli.with_api_error_message.cljs$core$IFn$_invoke$arity$3 = (function (mschema,description_message,specific_error_message){

return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(malli.core.schema.cljs$core$IFn$_invoke$arity$1(mschema),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),description_message,new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (_,___$1){
return specific_error_message;
})], 0));
}));

(metabase.util.malli.with_api_error_message.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "localized_string_schema", { enumerable: false, get: function() { return metabase.util.malli.localized_string_schema; } });
Object.defineProperty(module.exports, "with_api_error_message", { enumerable: false, get: function() { return metabase.util.malli.with_api_error_message; } });
Object.defineProperty(module.exports, "explain_fn_fail_BANG_", { enumerable: false, get: function() { return metabase.util.malli.explain_fn_fail_BANG_; } });
Object.defineProperty(module.exports, "instrument_BANG_", { enumerable: false, get: function() { return metabase.util.malli.instrument_BANG_; } });
Object.defineProperty(module.exports, "__GT_malli_io_link", { enumerable: false, get: function() { return metabase.util.malli.__GT_malli_io_link; } });
Object.defineProperty(module.exports, "encode_uri", { enumerable: false, get: function() { return metabase.util.malli.encode_uri; } });
Object.defineProperty(module.exports, "humanize_include_value", { enumerable: false, get: function() { return metabase.util.malli.humanize_include_value; } });
Object.defineProperty(module.exports, "_STAR_enforce_STAR_", { enumerable: false, get: function() { return metabase.util.malli._STAR_enforce_STAR_; } });
Object.defineProperty(module.exports, "Schema", { enumerable: false, get: function() { return metabase.util.malli.Schema; } });
//# sourceMappingURL=metabase.util.malli.js.map
