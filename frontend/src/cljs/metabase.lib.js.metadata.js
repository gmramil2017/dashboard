var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.core.protocols.js");
require("./clojure.string.js");
require("./clojure.walk.js");
require("./metabase.lib.metadata.protocols.js");
require("./metabase.lib.util.js");
require("./metabase.util.js");
require("./metabase.util.log.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.js.metadata.js");

goog.provide('metabase.lib.js.metadata');
goog.scope(function(){
  metabase.lib.js.metadata.goog$module$goog$object = goog.module.get('goog.object');
});
metabase.lib.js.metadata.object_get = (function metabase$lib$js$metadata$object_get(obj,k){
if(cljs.core.truth_(obj)){
return metabase.lib.js.metadata.goog$module$goog$object.get(obj,k);
} else {
return null;
}
});
/**
 * Convert a JS object of *any* class to a ClojureScript object.
 */
metabase.lib.js.metadata.obj__GT_clj = (function metabase$lib$js$metadata$obj__GT_clj(var_args){
var G__81263 = arguments.length;
switch (G__81263) {
case 2:
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (xform,obj){
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$3(xform,obj,cljs.core.PersistentArrayMap.EMPTY);
}));

(metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$3 = (function (xform,obj,p__81264){
var map__81265 = p__81264;
var map__81265__$1 = cljs.core.__destructure_map(map__81265);
var use_plain_object_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81265__$1,new cljs.core.Keyword(null,"use-plain-object?","use-plain-object?",-1174595475),true);
if(cljs.core.map_QMARK_(obj)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,xform,obj);
} else {
var temp__5802__auto__ = (cljs.core.truth_(use_plain_object_QMARK_)?(function (){var G__81266 = metabase.lib.js.metadata.object_get(obj,"_plainObject");
var G__81266__$1 = (((G__81266 == null))?null:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(G__81266));
if((G__81266__$1 == null)){
return null;
} else {
return cljs.core.not_empty(G__81266__$1);
}
})():null);
if(cljs.core.truth_(temp__5802__auto__)){
var plain_object = temp__5802__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,xform,plain_object);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,metabase.lib.js.metadata.object_get(obj,k)], null);
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__81269){
var vec__81270 = p__81269;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81270,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.typeOf(v),"function");
})),xform),metabase.lib.js.metadata.goog$module$goog$object.getKeys(obj));
}
}
}));

(metabase.lib.js.metadata.obj__GT_clj.cljs$lang$maxFixedArity = 3);

if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.excluded_keys !== 'undefined')){
} else {
metabase.lib.js.metadata.excluded_keys = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__81278 = cljs.core.get_global_hierarchy;
return (fexpr__81278.cljs$core$IFn$_invoke$arity$0 ? fexpr__81278.cljs$core$IFn$_invoke$arity$0() : fexpr__81278.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","excluded-keys"),cljs.core.keyword,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.parse_field_fn !== 'undefined')){
} else {
/**
 * Return a function with the signature
 * 
 *  (f k v) => v'
 * 
 *   For parsing an individual field.
 */
metabase.lib.js.metadata.parse_field_fn = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__81282 = cljs.core.get_global_hierarchy;
return (fexpr__81282.cljs$core$IFn$_invoke$arity$0 ? fexpr__81282.cljs$core$IFn$_invoke$arity$0() : fexpr__81282.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","parse-field-fn"),cljs.core.keyword,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_object_type){
return null;
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.lib_type !== 'undefined')){
} else {
/**
 * The metadata type that should be attached the sorts of metadatas with the `:lib/type` key, e.g. `:metadata/table`.
 */
metabase.lib.js.metadata.lib_type = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__81285 = cljs.core.get_global_hierarchy;
return (fexpr__81285.cljs$core$IFn$_invoke$arity$0 ? fexpr__81285.cljs$core$IFn$_invoke$arity$0() : fexpr__81285.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","lib-type"),cljs.core.keyword,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.js.metadata.parse_object_xform = (function metabase$lib$js$metadata$parse_object_xform(object_type){
var excluded_keys_set = metabase.lib.js.metadata.excluded_keys.cljs$core$IFn$_invoke$arity$1(object_type);
var parse_field = metabase.lib.js.metadata.parse_field_fn.cljs$core$IFn$_invoke$arity$1(object_type);
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__81296){
var vec__81297 = p__81296;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81297,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81297,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(metabase.util.__GT_kebab_case_en(k)),v], null);
})),((cljs.core.empty_QMARK_(excluded_keys_set))?cljs.core.identity:cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__81301){
var vec__81302 = p__81301;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81302,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81302,(1),null);
return cljs.core.contains_QMARK_(excluded_keys_set,k);
}))),((cljs.core.not(parse_field))?cljs.core.identity:cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__81308){
var vec__81309 = p__81308;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81309,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(parse_field.cljs$core$IFn$_invoke$arity$2 ? parse_field.cljs$core$IFn$_invoke$arity$2(k,v) : parse_field.call(null,k,v))], null);
}))));
});
metabase.lib.js.metadata.parse_object_fn = (function metabase$lib$js$metadata$parse_object_fn(var_args){
var G__81316 = arguments.length;
switch (G__81316) {
case 1:
return metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1 = (function (object_type){
return metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$2(object_type,cljs.core.PersistentArrayMap.EMPTY);
}));

(metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$2 = (function (object_type,opts){
var xform = metabase.lib.js.metadata.parse_object_xform(object_type);
var lib_type_name = metabase.lib.js.metadata.lib_type.cljs$core$IFn$_invoke$arity$1(object_type);
return (function (object){
try{var parsed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$3(xform,object,opts),new cljs.core.Keyword("lib","type","lib/type",1175424801),lib_type_name);
var level__47254__auto___81690 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"debug","debug",-1608172596));
var logger__47255__auto___81691 = "metabase.lib.js.metadata";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47255__auto___81691,level__47254__auto___81690))){
var x__47256__auto___81692 = "Parsed metadata %s %s\n%s";
if((x__47256__auto___81692 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47255__auto___81691,level__47254__auto___81690,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(object_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parsed),metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(parsed)], 0)),x__47256__auto___81692);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47255__auto___81691,level__47254__auto___81690,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__47256__auto___81692,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parsed),metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(parsed)], 0)),null);
}
} else {
}

return parsed;
}catch (e81322){if((e81322 instanceof Error)){
var e = e81322;
var level__47254__auto___81693 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"error","error",-978969032));
var logger__47255__auto___81694 = "metabase.lib.js.metadata";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47255__auto___81694,level__47254__auto___81693))){
var x__47256__auto___81695 = e;
if((x__47256__auto___81695 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47255__auto___81694,level__47254__auto___81693,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic("Error parsing %s %s: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object_type,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object], 0)),cljs.core.ex_message(e)], 0)),x__47256__auto___81695);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47255__auto___81694,level__47254__auto___81693,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__47256__auto___81695,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing %s %s: %s",object_type,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object], 0)),cljs.core.ex_message(e)], 0)),null);
}
} else {
}

return null;
} else {
throw e81322;

}
}});
}));

(metabase.lib.js.metadata.parse_object_fn.cljs$lang$maxFixedArity = 2);

if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.parse_objects !== 'undefined')){
} else {
metabase.lib.js.metadata.parse_objects = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__81337 = cljs.core.get_global_hierarchy;
return (fexpr__81337.cljs$core$IFn$_invoke$arity$0 ? fexpr__81337.cljs$core$IFn$_invoke$arity$0() : fexpr__81337.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","parse-objects"),(function (object_type,_metadata){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(object_type);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.parse_objects_default_key !== 'undefined')){
} else {
/**
 * Key to use to get unparsed objects of this type from the metadata, if you're using the default implementation
 *   of [[parse-objects]].
 */
metabase.lib.js.metadata.parse_objects_default_key = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__81341 = cljs.core.get_global_hierarchy;
return (fexpr__81341.cljs$core$IFn$_invoke$arity$0 ? fexpr__81341.cljs$core$IFn$_invoke$arity$0() : fexpr__81341.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","parse-objects-default-key"),cljs.core.keyword,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.js.metadata.parse_objects.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (object_type,metadata){
var parse_object = metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1(object_type);
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__81345){
var vec__81346 = p__81345;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81346,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81346,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.parse_long(k),(new cljs.core.Delay((function (){
return (parse_object.cljs$core$IFn$_invoke$arity$1 ? parse_object.cljs$core$IFn$_invoke$arity$1(v) : parse_object.call(null,v));
}),null))], null);
})),metabase.lib.js.metadata.object_get(metadata,metabase.lib.js.metadata.parse_objects_default_key.cljs$core$IFn$_invoke$arity$1(object_type)));
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"database","database",1849087575),(function (_object_type){
return new cljs.core.Keyword("metadata","database","metadata/database",-924828824);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"database","database",1849087575),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),null,new cljs.core.Keyword(null,"tables","tables",1334623052),null], null), null);
}));
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"database","database",1849087575),(function (_object_type){
return (function (k,v){
var G__81356 = k;
var G__81356__$1 = (((G__81356 instanceof cljs.core.Keyword))?G__81356.fqn:null);
switch (G__81356__$1) {
case "dbms-version":
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));

break;
case "features":
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword),v);

break;
case "native-permissions":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
default:
return v;

}
});
}));
metabase.lib.js.metadata.parse_objects_default_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"database","database",1849087575),(function (_object_type){
return "databases";
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"table","table",-564943036),(function (_object_type){
return new cljs.core.Keyword("metadata","table","metadata/table",-882499405);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"table","table",-564943036),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dimension-options","dimension-options",2122379680),null,new cljs.core.Keyword(null,"fields","fields",-1932066230),null,new cljs.core.Keyword(null,"segments","segments",1937535949),null,new cljs.core.Keyword(null,"database","database",1849087575),null,new cljs.core.Keyword(null,"metrics","metrics",394093469),null], null), null);
}));
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"table","table",-564943036),(function (_object_type){
return (function (k,v){
var G__81360 = k;
var G__81360__$1 = (((G__81360 instanceof cljs.core.Keyword))?G__81360.fqn:null);
switch (G__81360__$1) {
case "entity-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "field-order":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "initial-sync-status":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "visibility-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
default:
return v;

}
});
}));
metabase.lib.js.metadata.parse_objects.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"table","table",-564943036),(function (object_type,metadata){
var parse_table = metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1(object_type);
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__81367){
var vec__81368 = p__81367;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81368,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81368,(1),null);
return clojure.string.starts_with_QMARK_(k,"card__");
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__81371){
var vec__81374 = p__81371;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81374,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81374,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.parse_long(k),(new cljs.core.Delay((function (){
return (parse_table.cljs$core$IFn$_invoke$arity$1 ? parse_table.cljs$core$IFn$_invoke$arity$1(v) : parse_table.call(null,v));
}),null))], null);
}))),metabase.lib.js.metadata.object_get(metadata,"tables"));
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (_object_type){
return new cljs.core.Keyword("metadata","column","metadata/column",-1799249054);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"dimension-options","dimension-options",2122379680),null,new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"default-dimension-option","default-dimension-option",149055958),null,new cljs.core.Keyword(null,"database","database",1849087575),null,new cljs.core.Keyword(null,"_comesFromEndpoint","_comesFromEndpoint",-1390455588),null,new cljs.core.Keyword(null,"metrics","metrics",394093469),null], null), null);
}));
metabase.lib.js.metadata.parse_field_id = (function metabase$lib$js$metadata$parse_field_id(id){
var G__81383 = id;
if(cljs.core.vector_QMARK_(id)){
return cljs.core.second(G__81383);
} else {
return G__81383;
}
});
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (_object_type){
return (function (k,v){
var G__81388 = k;
var G__81388__$1 = (((G__81388 instanceof cljs.core.Keyword))?G__81388.fqn:null);
switch (G__81388__$1) {
case "base-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "coercion-strategy":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "effective-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "fingerprint":
if(cljs.core.map_QMARK_(v)){
return clojure.walk.keywordize_keys(v);
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}

break;
case "has-field-values":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "semantic-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "visibility-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "id":
return metabase.lib.js.metadata.parse_field_id(v);

break;
default:
return v;

}
});
}));
metabase.lib.js.metadata.parse_objects_default_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (_object_type){
return "fields";
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"card","card",-1430355152),(function (_object_type){
return new cljs.core.Keyword("metadata","card","metadata/card",-1039333889);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"card","card",-1430355152),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"dimension-options","dimension-options",2122379680),null,new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"fks","fks",2041987076),null,new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"db","db",993250759),null,new cljs.core.Keyword(null,"plain-object","plain-object",-943264281),null,new cljs.core.Keyword(null,"segments","segments",1937535949),null,new cljs.core.Keyword(null,"database","database",1849087575),null,new cljs.core.Keyword(null,"metadata","metadata",1799301597),null,new cljs.core.Keyword(null,"metrics","metrics",394093469),null,new cljs.core.Keyword(null,"schema-name","schema-name",1666725119),null], null), null);
}));
metabase.lib.js.metadata.parse_fields = (function metabase$lib$js$metadata$parse_fields(fields){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"field","field",-1302436500)),fields);
});
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"card","card",-1430355152),(function (_object_type){
return (function (k,v){
var G__81405 = k;
var G__81405__$1 = (((G__81405 instanceof cljs.core.Keyword))?G__81405.fqn:null);
switch (G__81405__$1) {
case "result-metadata":
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,cljs.core.array_QMARK_)(v))){
return metabase.lib.js.metadata.parse_fields(v);
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}

break;
case "fields":
return metabase.lib.js.metadata.parse_fields(v);

break;
case "visibility-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "dataset-query":
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));

break;
case "dataset":
return v;

break;
default:
return v;

}
});
}));
/**
 * Sometimes a card is stored in the metadata as some sort of weird object where the thing we actually want is under the
 *   key `_card` (not sure why), but if it is just unwrap it and then parse it normally.
 */
metabase.lib.js.metadata.unwrap_card = (function metabase$lib$js$metadata$unwrap_card(obj){
var or__5045__auto__ = metabase.lib.js.metadata.object_get(obj,"_card");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return obj;
}
});
metabase.lib.js.metadata.assemble_card = (function metabase$lib$js$metadata$assemble_card(metadata,id){
var parse_card_ignoring_plain_object = metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-plain-object?","use-plain-object?",-1174595475),false], null));
var parse_card = metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"card","card",-1430355152));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parse_card_ignoring_plain_object(metabase.lib.js.metadata.object_get(metabase.lib.js.metadata.object_get(metadata,"tables"),["card__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''))),new cljs.core.Keyword(null,"id","id",-1388402092),id),(function (){var G__81421 = metabase.lib.js.metadata.unwrap_card(metabase.lib.js.metadata.object_get(metabase.lib.js.metadata.object_get(metadata,"questions"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
return (parse_card.cljs$core$IFn$_invoke$arity$1 ? parse_card.cljs$core$IFn$_invoke$arity$1(G__81421) : parse_card.call(null,G__81421));
})()], 0));
});
metabase.lib.js.metadata.parse_objects.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"card","card",-1430355152),(function (_object_type,metadata){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(new cljs.core.Delay((function (){
return metabase.lib.js.metadata.assemble_card(metadata,id);
}),null))], null);
})),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(metabase.lib.util.legacy_string_table_id__GT_card_id),metabase.lib.js.metadata.goog$module$goog$object.getKeys(metabase.lib.js.metadata.object_get(metadata,"tables"))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.parse_long),metabase.lib.js.metadata.goog$module$goog$object.getKeys(metabase.lib.js.metadata.object_get(metadata,"questions"))));
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (_object_type){
return new cljs.core.Keyword("metadata","metric","metadata/metric",538003406);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"database","database",1849087575),null], null), null);
}));
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (_object_type){
return (function (_k,v){
return v;
});
}));
metabase.lib.js.metadata.parse_objects_default_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (_object_type){
return "metrics";
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (_object_type){
return new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"database","database",1849087575),null], null), null);
}));
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (_object_type){
return (function (_k,v){
return v;
});
}));
metabase.lib.js.metadata.parse_objects_default_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (_object_type){
return "segments";
}));
metabase.lib.js.metadata.parse_objects_delay = (function metabase$lib$js$metadata$parse_objects_delay(object_type,metadata){
return (new cljs.core.Delay((function (){
try{return metabase.lib.js.metadata.parse_objects.cljs$core$IFn$_invoke$arity$2(object_type,metadata);
}catch (e81440){if((e81440 instanceof Error)){
var e = e81440;
var level__47254__auto___81700 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"error","error",-978969032));
var logger__47255__auto___81701 = "metabase.lib.js.metadata";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47255__auto___81701,level__47254__auto___81700))){
var x__47256__auto___81702 = e;
if((x__47256__auto___81702 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47255__auto___81701,level__47254__auto___81700,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic("Error parsing %s objects: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object_type,cljs.core.ex_message(e)], 0)),x__47256__auto___81702);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47255__auto___81701,level__47254__auto___81700,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__47256__auto___81702,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing %s objects: %s",object_type,cljs.core.ex_message(e)], 0)),null);
}
} else {
}

return null;
} else {
throw e81440;

}
}}),null));
});
metabase.lib.js.metadata.parse_metadata = (function metabase$lib$js$metadata$parse_metadata(metadata){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"databases","databases",2040134125),metabase.lib.js.metadata.parse_objects_delay(new cljs.core.Keyword(null,"database","database",1849087575),metadata),new cljs.core.Keyword(null,"tables","tables",1334623052),metabase.lib.js.metadata.parse_objects_delay(new cljs.core.Keyword(null,"table","table",-564943036),metadata),new cljs.core.Keyword(null,"fields","fields",-1932066230),metabase.lib.js.metadata.parse_objects_delay(new cljs.core.Keyword(null,"field","field",-1302436500),metadata),new cljs.core.Keyword(null,"cards","cards",169174038),metabase.lib.js.metadata.parse_objects_delay(new cljs.core.Keyword(null,"card","card",-1430355152),metadata),new cljs.core.Keyword(null,"metrics","metrics",394093469),metabase.lib.js.metadata.parse_objects_delay(new cljs.core.Keyword(null,"metric","metric",408798077),metadata),new cljs.core.Keyword(null,"segments","segments",1937535949),metabase.lib.js.metadata.parse_objects_delay(new cljs.core.Keyword(null,"segment","segment",-964921196),metadata)], null);
});
metabase.lib.js.metadata.database = (function metabase$lib$js$metadata$database(metadata,database_id){
var G__81445 = metadata;
var G__81445__$1 = (((G__81445 == null))?null:new cljs.core.Keyword(null,"databases","databases",2040134125).cljs$core$IFn$_invoke$arity$1(G__81445));
var G__81445__$2 = (((G__81445__$1 == null))?null:cljs.core.deref(G__81445__$1));
var G__81445__$3 = (((G__81445__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__81445__$2,database_id));
if((G__81445__$3 == null)){
return null;
} else {
return cljs.core.deref(G__81445__$3);
}
});
metabase.lib.js.metadata.table = (function metabase$lib$js$metadata$table(metadata,table_id){
var G__81447 = metadata;
var G__81447__$1 = (((G__81447 == null))?null:new cljs.core.Keyword(null,"tables","tables",1334623052).cljs$core$IFn$_invoke$arity$1(G__81447));
var G__81447__$2 = (((G__81447__$1 == null))?null:cljs.core.deref(G__81447__$1));
var G__81447__$3 = (((G__81447__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__81447__$2,table_id));
if((G__81447__$3 == null)){
return null;
} else {
return cljs.core.deref(G__81447__$3);
}
});
metabase.lib.js.metadata.field = (function metabase$lib$js$metadata$field(metadata,field_id){
var G__81580 = metadata;
var G__81580__$1 = (((G__81580 == null))?null:new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(G__81580));
var G__81580__$2 = (((G__81580__$1 == null))?null:cljs.core.deref(G__81580__$1));
var G__81580__$3 = (((G__81580__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__81580__$2,field_id));
if((G__81580__$3 == null)){
return null;
} else {
return cljs.core.deref(G__81580__$3);
}
});
metabase.lib.js.metadata.card = (function metabase$lib$js$metadata$card(metadata,card_id){
var G__81587 = metadata;
var G__81587__$1 = (((G__81587 == null))?null:new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(G__81587));
var G__81587__$2 = (((G__81587__$1 == null))?null:cljs.core.deref(G__81587__$1));
var G__81587__$3 = (((G__81587__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__81587__$2,card_id));
if((G__81587__$3 == null)){
return null;
} else {
return cljs.core.deref(G__81587__$3);
}
});
metabase.lib.js.metadata.metric = (function metabase$lib$js$metadata$metric(metadata,metric_id){
var G__81589 = metadata;
var G__81589__$1 = (((G__81589 == null))?null:new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(G__81589));
var G__81589__$2 = (((G__81589__$1 == null))?null:cljs.core.deref(G__81589__$1));
var G__81589__$3 = (((G__81589__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__81589__$2,metric_id));
if((G__81589__$3 == null)){
return null;
} else {
return cljs.core.deref(G__81589__$3);
}
});
metabase.lib.js.metadata.segment = (function metabase$lib$js$metadata$segment(metadata,segment_id){
var G__81590 = metadata;
var G__81590__$1 = (((G__81590 == null))?null:new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(G__81590));
var G__81590__$2 = (((G__81590__$1 == null))?null:cljs.core.deref(G__81590__$1));
var G__81590__$3 = (((G__81590__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__81590__$2,segment_id));
if((G__81590__$3 == null)){
return null;
} else {
return cljs.core.deref(G__81590__$3);
}
});
metabase.lib.js.metadata.tables = (function metabase$lib$js$metadata$tables(metadata,database_id){
var iter__5523__auto__ = (function metabase$lib$js$metadata$tables_$_iter__81591(s__81592){
return (new cljs.core.LazySeq(null,(function (){
var s__81592__$1 = s__81592;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81592__$1);
if(temp__5804__auto__){
var s__81592__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81592__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81592__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81594 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81593 = (0);
while(true){
if((i__81593 < size__5522__auto__)){
var vec__81595 = cljs.core._nth(c__5521__auto__,i__81593);
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81595,(0),null);
var table_delay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81595,(1),null);
var a_table = (function (){var G__81598 = table_delay;
if((G__81598 == null)){
return null;
} else {
return cljs.core.deref(G__81598);
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = a_table;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(a_table),database_id);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__81594,a_table);

var G__81703 = (i__81593 + (1));
i__81593 = G__81703;
continue;
} else {
var G__81704 = (i__81593 + (1));
i__81593 = G__81704;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81594),metabase$lib$js$metadata$tables_$_iter__81591(cljs.core.chunk_rest(s__81592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81594),null);
}
} else {
var vec__81600 = cljs.core.first(s__81592__$2);
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81600,(0),null);
var table_delay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81600,(1),null);
var a_table = (function (){var G__81603 = table_delay;
if((G__81603 == null)){
return null;
} else {
return cljs.core.deref(G__81603);
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = a_table;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(a_table),database_id);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(a_table,metabase$lib$js$metadata$tables_$_iter__81591(cljs.core.rest(s__81592__$2)));
} else {
var G__81705 = cljs.core.rest(s__81592__$2);
s__81592__$1 = G__81705;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__((function (){var G__81604 = metadata;
var G__81604__$1 = (((G__81604 == null))?null:new cljs.core.Keyword(null,"tables","tables",1334623052).cljs$core$IFn$_invoke$arity$1(G__81604));
if((G__81604__$1 == null)){
return null;
} else {
return cljs.core.deref(G__81604__$1);
}
})());
});
metabase.lib.js.metadata.fields = (function metabase$lib$js$metadata$fields(metadata,table_id){
var iter__5523__auto__ = (function metabase$lib$js$metadata$fields_$_iter__81605(s__81606){
return (new cljs.core.LazySeq(null,(function (){
var s__81606__$1 = s__81606;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81606__$1);
if(temp__5804__auto__){
var s__81606__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81606__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81606__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81608 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81607 = (0);
while(true){
if((i__81607 < size__5522__auto__)){
var vec__81609 = cljs.core._nth(c__5521__auto__,i__81607);
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81609,(0),null);
var field_delay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81609,(1),null);
var a_field = (function (){var G__81612 = field_delay;
if((G__81612 == null)){
return null;
} else {
return cljs.core.deref(G__81612);
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = a_field;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(a_field),table_id);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__81608,a_field);

var G__81706 = (i__81607 + (1));
i__81607 = G__81706;
continue;
} else {
var G__81707 = (i__81607 + (1));
i__81607 = G__81707;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81608),metabase$lib$js$metadata$fields_$_iter__81605(cljs.core.chunk_rest(s__81606__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81608),null);
}
} else {
var vec__81626 = cljs.core.first(s__81606__$2);
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81626,(0),null);
var field_delay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81626,(1),null);
var a_field = (function (){var G__81629 = field_delay;
if((G__81629 == null)){
return null;
} else {
return cljs.core.deref(G__81629);
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = a_field;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(a_field),table_id);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(a_field,metabase$lib$js$metadata$fields_$_iter__81605(cljs.core.rest(s__81606__$2)));
} else {
var G__81708 = cljs.core.rest(s__81606__$2);
s__81606__$1 = G__81708;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__((function (){var G__81631 = metadata;
var G__81631__$1 = (((G__81631 == null))?null:new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(G__81631));
if((G__81631__$1 == null)){
return null;
} else {
return cljs.core.deref(G__81631__$1);
}
})());
});
metabase.lib.js.metadata.metrics = (function metabase$lib$js$metadata$metrics(metadata,table_id){
var iter__5523__auto__ = (function metabase$lib$js$metadata$metrics_$_iter__81644(s__81645){
return (new cljs.core.LazySeq(null,(function (){
var s__81645__$1 = s__81645;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81645__$1);
if(temp__5804__auto__){
var s__81645__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81645__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81645__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81647 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81646 = (0);
while(true){
if((i__81646 < size__5522__auto__)){
var vec__81648 = cljs.core._nth(c__5521__auto__,i__81646);
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81648,(0),null);
var metric_delay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81648,(1),null);
var a_metric = (function (){var G__81651 = metric_delay;
if((G__81651 == null)){
return null;
} else {
return cljs.core.deref(G__81651);
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = a_metric;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(a_metric),table_id);
} else {
return and__5043__auto__;
}
})())){
cljs.core.chunk_append(b__81647,a_metric);

var G__81709 = (i__81646 + (1));
i__81646 = G__81709;
continue;
} else {
var G__81710 = (i__81646 + (1));
i__81646 = G__81710;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81647),metabase$lib$js$metadata$metrics_$_iter__81644(cljs.core.chunk_rest(s__81645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81647),null);
}
} else {
var vec__81652 = cljs.core.first(s__81645__$2);
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81652,(0),null);
var metric_delay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81652,(1),null);
var a_metric = (function (){var G__81655 = metric_delay;
if((G__81655 == null)){
return null;
} else {
return cljs.core.deref(G__81655);
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = a_metric;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(a_metric),table_id);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(a_metric,metabase$lib$js$metadata$metrics_$_iter__81644(cljs.core.rest(s__81645__$2)));
} else {
var G__81711 = cljs.core.rest(s__81645__$2);
s__81645__$1 = G__81711;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__((function (){var G__81656 = metadata;
var G__81656__$1 = (((G__81656 == null))?null:new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(G__81656));
if((G__81656__$1 == null)){
return null;
} else {
return cljs.core.deref(G__81656__$1);
}
})());
});

/**
* @constructor
 * @implements {metabase.lib.metadata.protocols.MetadataProvider}
 * @implements {clojure.core.protocols.Datafiable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
metabase.lib.js.metadata.t_metabase$lib$js$metadata81659 = (function (database_id,unparsed_metadata,metadata,meta81660){
this.database_id = database_id;
this.unparsed_metadata = unparsed_metadata;
this.metadata = metadata;
this.meta81660 = meta81660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81661,meta81660__$1){
var self__ = this;
var _81661__$1 = this;
return (new metabase.lib.js.metadata.t_metabase$lib$js$metadata81659(self__.database_id,self__.unparsed_metadata,self__.metadata,meta81660__$1));
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81661){
var self__ = this;
var _81661__$1 = this;
return self__.meta81660;
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.metabase$lib$metadata$protocols$MetadataProvider$ = cljs.core.PROTOCOL_SENTINEL);

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.metabase$lib$metadata$protocols$MetadataProvider$metric$arity$2 = (function (_this,metric_id){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.metric(self__.metadata,metric_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.metabase$lib$metadata$protocols$MetadataProvider$metrics$arity$2 = (function (_this,table_id){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.metrics(self__.metadata,table_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.metabase$lib$metadata$protocols$MetadataProvider$table$arity$2 = (function (_this,table_id){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.table(self__.metadata,table_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.metabase$lib$metadata$protocols$MetadataProvider$fields$arity$2 = (function (_this,table_id){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.fields(self__.metadata,table_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.metabase$lib$metadata$protocols$MetadataProvider$tables$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.tables(self__.metadata,self__.database_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.metabase$lib$metadata$protocols$MetadataProvider$field$arity$2 = (function (_this,field_id){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.field(self__.metadata,field_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.metabase$lib$metadata$protocols$MetadataProvider$card$arity$2 = (function (_this,card_id){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.card(self__.metadata,card_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.metabase$lib$metadata$protocols$MetadataProvider$segment$arity$2 = (function (_this,segment_id){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.segment(self__.metadata,segment_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.metabase$lib$metadata$protocols$MetadataProvider$database$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.database(self__.metadata,self__.database_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return clojure.walk.postwalk((function (form){
if(cljs.core.delay_QMARK_(form)){
return cljs.core.deref(form);
} else {
return form;
}
}),self__.metadata);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"database-id","database-id",-770609443,null),new cljs.core.Symbol(null,"unparsed-metadata","unparsed-metadata",69213290,null),new cljs.core.Symbol(null,"metadata","metadata",-855134172,null),new cljs.core.Symbol(null,"meta81660","meta81660",1608963864,null)], null);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.cljs$lang$type = true);

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.cljs$lang$ctorStr = "metabase.lib.js.metadata/t_metabase$lib$js$metadata81659");

(metabase.lib.js.metadata.t_metabase$lib$js$metadata81659.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"metabase.lib.js.metadata/t_metabase$lib$js$metadata81659");
}));

/**
 * Positional factory function for metabase.lib.js.metadata/t_metabase$lib$js$metadata81659.
 */
metabase.lib.js.metadata.__GT_t_metabase$lib$js$metadata81659 = (function metabase$lib$js$metadata$__GT_t_metabase$lib$js$metadata81659(database_id,unparsed_metadata,metadata,meta81660){
return (new metabase.lib.js.metadata.t_metabase$lib$js$metadata81659(database_id,unparsed_metadata,metadata,meta81660));
});


/**
 * Use a `metabase-lib/metadata/Metadata` as a [[metabase.lib.metadata.protocols/MetadataProvider]].
 */
metabase.lib.js.metadata.metadata_provider = (function metabase$lib$js$metadata$metadata_provider(database_id,unparsed_metadata){
var metadata = metabase.lib.js.metadata.parse_metadata(unparsed_metadata);
var level__47249__auto___81713 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"debug","debug",-1608172596));
var logger__47250__auto___81714 = "metabase.lib.js.metadata";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47250__auto___81714,level__47249__auto___81713))){
var x__47251__auto___81715 = "Created metadata provider for metadata";
if((x__47251__auto___81715 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___81714,level__47249__auto___81713,cljs.core.print_str(),x__47251__auto___81715);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___81714,level__47249__auto___81713,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__47251__auto___81715], 0)),null);
}
} else {
}

return (new metabase.lib.js.metadata.t_metabase$lib$js$metadata81659(database_id,unparsed_metadata,metadata,cljs.core.PersistentArrayMap.EMPTY));
});
Object.defineProperty(module.exports, "parse_objects_delay", { enumerable: false, get: function() { return metabase.lib.js.metadata.parse_objects_delay; } });
Object.defineProperty(module.exports, "metadata_provider", { enumerable: false, get: function() { return metabase.lib.js.metadata.metadata_provider; } });
Object.defineProperty(module.exports, "excluded_keys", { enumerable: false, get: function() { return metabase.lib.js.metadata.excluded_keys; } });
Object.defineProperty(module.exports, "object_get", { enumerable: false, get: function() { return metabase.lib.js.metadata.object_get; } });
Object.defineProperty(module.exports, "lib_type", { enumerable: false, get: function() { return metabase.lib.js.metadata.lib_type; } });
Object.defineProperty(module.exports, "parse_object_xform", { enumerable: false, get: function() { return metabase.lib.js.metadata.parse_object_xform; } });
Object.defineProperty(module.exports, "metric", { enumerable: false, get: function() { return metabase.lib.js.metadata.metric; } });
Object.defineProperty(module.exports, "metrics", { enumerable: false, get: function() { return metabase.lib.js.metadata.metrics; } });
Object.defineProperty(module.exports, "t_metabase$lib$js$metadata81659", { enumerable: false, get: function() { return metabase.lib.js.metadata.t_metabase$lib$js$metadata81659; } });
Object.defineProperty(module.exports, "__GT_t_metabase$lib$js$metadata81659", { enumerable: false, get: function() { return metabase.lib.js.metadata.__GT_t_metabase$lib$js$metadata81659; } });
Object.defineProperty(module.exports, "parse_fields", { enumerable: false, get: function() { return metabase.lib.js.metadata.parse_fields; } });
Object.defineProperty(module.exports, "table", { enumerable: false, get: function() { return metabase.lib.js.metadata.table; } });
Object.defineProperty(module.exports, "parse_objects", { enumerable: false, get: function() { return metabase.lib.js.metadata.parse_objects; } });
Object.defineProperty(module.exports, "fields", { enumerable: false, get: function() { return metabase.lib.js.metadata.fields; } });
Object.defineProperty(module.exports, "tables", { enumerable: false, get: function() { return metabase.lib.js.metadata.tables; } });
Object.defineProperty(module.exports, "field", { enumerable: false, get: function() { return metabase.lib.js.metadata.field; } });
Object.defineProperty(module.exports, "parse_metadata", { enumerable: false, get: function() { return metabase.lib.js.metadata.parse_metadata; } });
Object.defineProperty(module.exports, "assemble_card", { enumerable: false, get: function() { return metabase.lib.js.metadata.assemble_card; } });
Object.defineProperty(module.exports, "card", { enumerable: false, get: function() { return metabase.lib.js.metadata.card; } });
Object.defineProperty(module.exports, "parse_field_id", { enumerable: false, get: function() { return metabase.lib.js.metadata.parse_field_id; } });
Object.defineProperty(module.exports, "parse_objects_default_key", { enumerable: false, get: function() { return metabase.lib.js.metadata.parse_objects_default_key; } });
Object.defineProperty(module.exports, "parse_field_fn", { enumerable: false, get: function() { return metabase.lib.js.metadata.parse_field_fn; } });
Object.defineProperty(module.exports, "unwrap_card", { enumerable: false, get: function() { return metabase.lib.js.metadata.unwrap_card; } });
Object.defineProperty(module.exports, "segment", { enumerable: false, get: function() { return metabase.lib.js.metadata.segment; } });
Object.defineProperty(module.exports, "obj__GT_clj", { enumerable: false, get: function() { return metabase.lib.js.metadata.obj__GT_clj; } });
Object.defineProperty(module.exports, "parse_object_fn", { enumerable: false, get: function() { return metabase.lib.js.metadata.parse_object_fn; } });
Object.defineProperty(module.exports, "database", { enumerable: false, get: function() { return metabase.lib.js.metadata.database; } });
//# sourceMappingURL=metabase.lib.js.metadata.js.map
