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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.writer.js");

goog.provide('shadow.remote.runtime.writer');

/**
* @constructor
 * @implements {cljs.core.IWriter}
*/
shadow.remote.runtime.writer.LimitWriter = (function (sb,limit){
this.sb = sb;
this.limit = limit;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.remote.runtime.writer.LimitWriter.prototype.getString = (function (){
var self__ = this;
var this$ = this;
return self__.sb.toString();
}));

(shadow.remote.runtime.writer.LimitWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
self__.sb.append(s);

if((self__.sb.getLength() >= self__.limit)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["The limit of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.limit)," bytes was reached while printing."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("shadow.remote.runtime.writer","limit-reached","shadow.remote.runtime.writer/limit-reached",1304350996),new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit], null));
} else {
return null;
}
}));

(shadow.remote.runtime.writer.LimitWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(shadow.remote.runtime.writer.LimitWriter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"sb","sb",-1249746442,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"StringBuffer","StringBuffer",864531538,null)], null)),new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
}));

(shadow.remote.runtime.writer.LimitWriter.cljs$lang$type = true);

(shadow.remote.runtime.writer.LimitWriter.cljs$lang$ctorStr = "shadow.remote.runtime.writer/LimitWriter");

(shadow.remote.runtime.writer.LimitWriter.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.remote.runtime.writer/LimitWriter");
}));

/**
 * Positional factory function for shadow.remote.runtime.writer/LimitWriter.
 */
shadow.remote.runtime.writer.__GT_LimitWriter = (function shadow$remote$runtime$writer$__GT_LimitWriter(sb,limit){
return (new shadow.remote.runtime.writer.LimitWriter(sb,limit));
});

shadow.remote.runtime.writer.pr_str_limit = (function shadow$remote$runtime$writer$pr_str_limit(obj,limit){
var sb = (new goog.string.StringBuffer());
var writer = (new shadow.remote.runtime.writer.LimitWriter(sb,limit));
try{cljs.core.pr_writer(obj,writer,cljs.core.pr_opts());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,sb.toString()], null);
}catch (e35429){var e = e35429;
if((!(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("shadow.remote.runtime.writer","limit-reached","shadow.remote.runtime.writer/limit-reached",1304350996),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)))))){
throw e;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var s = sb.toString();
if((s.length > limit)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),limit);
} else {
return s;
}
})()], null);
}
}});
shadow.remote.runtime.writer.limit_writer = (function shadow$remote$runtime$writer$limit_writer(limit){
var sb = (new goog.string.StringBuffer());
return (new shadow.remote.runtime.writer.LimitWriter(sb,limit));
});
shadow.remote.runtime.writer.get_string = (function shadow$remote$runtime$writer$get_string(lw){
return lw.getString();
});
Object.defineProperty(module.exports, "LimitWriter", { enumerable: false, get: function() { return shadow.remote.runtime.writer.LimitWriter; } });
Object.defineProperty(module.exports, "__GT_LimitWriter", { enumerable: false, get: function() { return shadow.remote.runtime.writer.__GT_LimitWriter; } });
Object.defineProperty(module.exports, "pr_str_limit", { enumerable: false, get: function() { return shadow.remote.runtime.writer.pr_str_limit; } });
Object.defineProperty(module.exports, "limit_writer", { enumerable: false, get: function() { return shadow.remote.runtime.writer.limit_writer; } });
Object.defineProperty(module.exports, "get_string", { enumerable: false, get: function() { return shadow.remote.runtime.writer.get_string; } });
//# sourceMappingURL=shadow.remote.runtime.writer.js.map
