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

$CLJS.SHADOW_ENV.setLoaded("malli.impl.util.js");

goog.provide('malli.impl.util');
malli.impl.util._PLUS_max_size_PLUS_ = Number.MAX_VALUE;
malli.impl.util._tagged = (function malli$impl$util$_tagged(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
malli.impl.util._tagged_QMARK_ = (function malli$impl$util$_tagged_QMARK_(v){
return (v instanceof cljs.core.MapEntry);
});
malli.impl.util._invalid_QMARK_ = (function malli$impl$util$_invalid_QMARK_(x){
return cljs.core.keyword_identical_QMARK_(x,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900));
});
malli.impl.util._map_valid = (function malli$impl$util$_map_valid(f,v){
if(malli.impl.util._invalid_QMARK_(v)){
return v;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
}
});
malli.impl.util._map_invalid = (function malli$impl$util$_map_invalid(f,v){
if(malli.impl.util._invalid_QMARK_(v)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
} else {
return v;
}
});
malli.impl.util._reduce_kv_valid = (function malli$impl$util$_reduce_kv_valid(f,init,coll){
return cljs.core.reduce_kv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__39271_SHARP_){
return malli.impl.util._map_invalid(cljs.core.reduced,p1__39271_SHARP_);
}),f),init,coll);
});
malli.impl.util._error = (function malli$impl$util$_error(var_args){
var G__39278 = arguments.length;
switch (G__39278) {
case 4:
return malli.impl.util._error.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return malli.impl.util._error.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.impl.util._error.cljs$core$IFn$_invoke$arity$4 = (function (path,in$,schema__$1,value){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value], null);
}));

(malli.impl.util._error.cljs$core$IFn$_invoke$arity$5 = (function (path,in$,schema__$1,value,type){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"type","type",1174270348),type], null);
}));

(malli.impl.util._error.cljs$lang$maxFixedArity = 5);

malli.impl.util._vmap = (function malli$impl$util$_vmap(var_args){
var G__39280 = arguments.length;
switch (G__39280) {
case 1:
return malli.impl.util._vmap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.impl.util._vmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.impl.util._vmap.cljs$core$IFn$_invoke$arity$1 = (function (os){
return malli.impl.util._vmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,os);
}));

(malli.impl.util._vmap.cljs$core$IFn$_invoke$arity$2 = (function (f,os){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),os);
}));

(malli.impl.util._vmap.cljs$lang$maxFixedArity = 2);

malli.impl.util._every_pred = (function malli$impl$util$_every_pred(preds){
return (function (m){
return cljs.core.boolean$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__39286_SHARP_,p2__39285_SHARP_){
var or__5045__auto__ = (p2__39285_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__39285_SHARP_.cljs$core$IFn$_invoke$arity$1(m) : p2__39285_SHARP_.call(null,m));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.reduced(false);
}
}),true,preds));
});
});
malli.impl.util._some_pred = (function malli$impl$util$_some_pred(preds){
return (function (x){
return cljs.core.boolean$(cljs.core.some((function (p1__39290_SHARP_){
return (p1__39290_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39290_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__39290_SHARP_.call(null,x));
}),preds));
});
});
Object.defineProperty(module.exports, "_reduce_kv_valid", { enumerable: false, get: function() { return malli.impl.util._reduce_kv_valid; } });
Object.defineProperty(module.exports, "_vmap", { enumerable: false, get: function() { return malli.impl.util._vmap; } });
Object.defineProperty(module.exports, "_invalid_QMARK_", { enumerable: false, get: function() { return malli.impl.util._invalid_QMARK_; } });
Object.defineProperty(module.exports, "_every_pred", { enumerable: false, get: function() { return malli.impl.util._every_pred; } });
Object.defineProperty(module.exports, "_tagged", { enumerable: false, get: function() { return malli.impl.util._tagged; } });
Object.defineProperty(module.exports, "_map_valid", { enumerable: false, get: function() { return malli.impl.util._map_valid; } });
Object.defineProperty(module.exports, "_some_pred", { enumerable: false, get: function() { return malli.impl.util._some_pred; } });
Object.defineProperty(module.exports, "_error", { enumerable: false, get: function() { return malli.impl.util._error; } });
Object.defineProperty(module.exports, "_PLUS_max_size_PLUS_", { enumerable: false, get: function() { return malli.impl.util._PLUS_max_size_PLUS_; } });
Object.defineProperty(module.exports, "_tagged_QMARK_", { enumerable: false, get: function() { return malli.impl.util._tagged_QMARK_; } });
Object.defineProperty(module.exports, "_map_invalid", { enumerable: false, get: function() { return malli.impl.util._map_invalid; } });
//# sourceMappingURL=malli.impl.util.js.map
