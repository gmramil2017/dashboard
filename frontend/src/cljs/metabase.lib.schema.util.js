var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.options.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.util.js");

goog.provide('metabase.lib.schema.util');
metabase.lib.schema.util.collect_uuids_in_map = (function metabase$lib$schema$util$collect_uuids_in_map(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var temp__5802__auto__ = (function (){var or__5045__auto__ = new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(m));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var our_uuid = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_uuid], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__61224){
var vec__61225 = p__61224;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61225,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61225,(1),null);
var fexpr__61228 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220),null,new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610),null,new cljs.core.Keyword("lib","options","lib/options",99794548),null], null), null);
return (fexpr__61228.cljs$core$IFn$_invoke$arity$1 ? fexpr__61228.cljs$core$IFn$_invoke$arity$1(k) : fexpr__61228.call(null,k));
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__61229){
var vec__61230 = p__61229;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61230,(1),null);
return (metabase.lib.schema.util.collect_uuids.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.schema.util.collect_uuids.cljs$core$IFn$_invoke$arity$1(v) : metabase.lib.schema.util.collect_uuids.call(null,v));
}))),m);
});
metabase.lib.schema.util.collect_uuids_in_sequence = (function metabase$lib$schema$util$collect_uuids_in_sequence(xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(metabase.lib.schema.util.collect_uuids),xs);
});
/**
 * Return all the `:lib/uuid`s in a part of an MBQL query (a clause or map) as a sequence. This will be used to ensure
 *   there are no duplicates.
 */
metabase.lib.schema.util.collect_uuids = (function metabase$lib$schema$util$collect_uuids(x){
if(cljs.core.map_QMARK_(x)){
return metabase.lib.schema.util.collect_uuids_in_map(x);
} else {
if(cljs.core.sequential_QMARK_(x)){
return metabase.lib.schema.util.collect_uuids_in_sequence(x);
} else {
return null;

}
}
});
metabase.lib.schema.util.find_duplicate_uuid = (function metabase$lib$schema$util$find_duplicate_uuid(x){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,(function() {
var G__61236 = null;
var G__61236__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var G__61236__1 = (function (result){
if(typeof result === 'string'){
return result;
} else {
return null;
}
});
var G__61236__2 = (function (seen,a_uuid){
if(cljs.core.contains_QMARK_(seen,a_uuid)){
return cljs.core.reduced(a_uuid);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,a_uuid);
}
});
G__61236 = function(seen,a_uuid){
switch(arguments.length){
case 0:
return G__61236__0.call(this);
case 1:
return G__61236__1.call(this,seen);
case 2:
return G__61236__2.call(this,seen,a_uuid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61236.cljs$core$IFn$_invoke$arity$0 = G__61236__0;
G__61236.cljs$core$IFn$_invoke$arity$1 = G__61236__1;
G__61236.cljs$core$IFn$_invoke$arity$2 = G__61236__2;
return G__61236;
})()
,metabase.lib.schema.util.collect_uuids(x));
});
/**
 * True if all the `:lib/uuid`s in something are unique.
 */
metabase.lib.schema.util.unique_uuids_QMARK_ = (function metabase$lib$schema$util$unique_uuids_QMARK_(x){
return cljs.core.not(metabase.lib.schema.util.find_duplicate_uuid(x));
});
/**
 * Malli schema for to ensure that all `:lib/uuid`s are unique.
 */
metabase.lib.schema.util.UniqueUUIDs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"all :lib/uuids must be unique",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__61234,_){
var map__61235 = p__61234;
var map__61235__$1 = cljs.core.__destructure_map(map__61235);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61235__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["Duplicate :lib/uuid ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.schema.util.find_duplicate_uuid(value)], 0))].join('');
})], null),new cljs.core.Var(function(){return metabase.lib.schema.util.unique_uuids_QMARK_;},new cljs.core.Symbol("metabase.lib.schema.util","unique-uuids?","metabase.lib.schema.util/unique-uuids?",638115116,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"metabase.lib.schema.util","metabase.lib.schema.util",782894276,null),new cljs.core.Symbol(null,"unique-uuids?","unique-uuids?",-1723224962,null),"metabase/lib/schema/util.cljc",20,1,45,45,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"True if all the `:lib/uuid`s in something are unique.",(cljs.core.truth_(metabase.lib.schema.util.unique_uuids_QMARK_)?metabase.lib.schema.util.unique_uuids_QMARK_.cljs$lang$test:null)]))], null);
Object.defineProperty(module.exports, "collect_uuids", { enumerable: false, get: function() { return metabase.lib.schema.util.collect_uuids; } });
Object.defineProperty(module.exports, "collect_uuids_in_map", { enumerable: false, get: function() { return metabase.lib.schema.util.collect_uuids_in_map; } });
Object.defineProperty(module.exports, "collect_uuids_in_sequence", { enumerable: false, get: function() { return metabase.lib.schema.util.collect_uuids_in_sequence; } });
Object.defineProperty(module.exports, "find_duplicate_uuid", { enumerable: false, get: function() { return metabase.lib.schema.util.find_duplicate_uuid; } });
Object.defineProperty(module.exports, "unique_uuids_QMARK_", { enumerable: false, get: function() { return metabase.lib.schema.util.unique_uuids_QMARK_; } });
Object.defineProperty(module.exports, "UniqueUUIDs", { enumerable: false, get: function() { return metabase.lib.schema.util.UniqueUUIDs; } });
//# sourceMappingURL=metabase.lib.schema.util.js.map
