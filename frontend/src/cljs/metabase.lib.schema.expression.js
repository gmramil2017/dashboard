var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.schema.common.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.types.js");
require("./metabase.util.malli.js");
require("./metabase.util.malli.registry.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.expression.js");

goog.provide('metabase.lib.schema.expression');
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.schema !== 'undefined') && (typeof metabase.lib.schema.expression !== 'undefined') && (typeof metabase.lib.schema.expression.type_of_method !== 'undefined')){
} else {
/**
 * Impl for [[type-of]]. Use [[type-of]], but implement [[type-of-method]].
 * 
 *   For MBQL clauses, try really hard not return an ambiguous set of possible types! Calculate things and determine what
 *   the result type will be!
 * 
 *   If we don't have enough information to determine the type (e.g. a `:field` clause that needs a metadata provider to
 *   determine the type), return `::expression/type.unknown`. This is a temporary workaround until we figure out how to
 *   always have type info!
 */
metabase.lib.schema.expression.type_of_method = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59506 = cljs.core.get_global_hierarchy;
return (fexpr__59506.cljs$core$IFn$_invoke$arity$0 ? fexpr__59506.cljs$core$IFn$_invoke$arity$0() : fexpr__59506.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.schema.expression","type-of-method"),(function (x){
var dispatch_value = metabase.lib.dispatch.dispatch_value(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dispatch_value,new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403))){
return cljs.core.type(x);
} else {
return dispatch_value;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.lib.schema.expression.mbql_clause_QMARK_ = (function metabase$lib$schema$expression$mbql_clause_QMARK_(expr){
return ((cljs.core.vector_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Keyword)));
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","base-type","metabase.lib.schema.expression/base-type",578343967),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107)], null),new cljs.core.Keyword("metabase.lib.schema.common","base-type","metabase.lib.schema.common/base-type",999524206)], null));
/**
 * Inputs: [expr]
 *   Return: [:or :metabase.lib.schema.expression/base-type [:set {:min 2} :metabase.lib.schema.expression/base-type]]
 *        
 * 
 *   Determine the type of an MBQL expression. Returns either a type keyword, or if the type is ambiguous, a set of
 *   possible types.
 */
metabase.lib.schema.expression.type_of = (function metabase$lib$schema$expression$type_of(expr){

var or__5045__auto__ = (function (){var and__5043__auto__ = metabase.lib.schema.expression.mbql_clause_QMARK_(expr);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.map_QMARK_(cljs.core.second(expr));
if(and__5043__auto____$1){
var or__5045__auto__ = new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(cljs.core.second(expr));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(cljs.core.second(expr));
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.lib.schema.expression.type_of_method.cljs$core$IFn$_invoke$arity$1(expr);
}
});
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0}: Don''t know how to determine the type of {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("metabase.lib.schema.expression","type-of","metabase.lib.schema.expression/type-of",-1625245814,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),expr], null));
}));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib.type-of","type-is-type-of-first-arg","lib.type-of/type-is-type-of-first-arg",-317600808),(function (p__59548){
var vec__59549 = p__59548;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59549,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59549,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59549,(2),null);
return metabase.lib.schema.expression.type_of(expr);
}));
metabase.lib.schema.expression.is_type_QMARK_ = (function metabase$lib$schema$expression$is_type_QMARK_(x,y){
if(cljs.core.set_QMARK_(x)){
return cljs.core.some((function (p1__59552_SHARP_){
return (metabase.lib.schema.expression.is_type_QMARK_.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.schema.expression.is_type_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__59552_SHARP_,y) : metabase.lib.schema.expression.is_type_QMARK_.call(null,p1__59552_SHARP_,y));
}),x);
} else {
if(cljs.core.set_QMARK_(y)){
return cljs.core.some((function (p1__59553_SHARP_){
return (metabase.lib.schema.expression.is_type_QMARK_.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.schema.expression.is_type_QMARK_.cljs$core$IFn$_invoke$arity$2(x,p1__59553_SHARP_) : metabase.lib.schema.expression.is_type_QMARK_.call(null,x,p1__59553_SHARP_));
}),y);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107))){
return true;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}
});
/**
 * Whether the [[type-of]] `expr` isa? [[metabase.types]] `base-type`.
 */
metabase.lib.schema.expression.type_of_QMARK_ = (function metabase$lib$schema$expression$type_of_QMARK_(expr,base_type){
var expr_type = metabase.lib.schema.expression.type_of(expr);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.set_QMARK_)(expr_type))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("type-of {0} returned an invalid type {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr_type], 0))], 0))),"\n","((some-fn keyword? set?) expr-type)"].join('')));
}

return metabase.lib.schema.expression.is_type_QMARK_(expr_type,base_type);
});
/**
 * Schema that matches the following rules:
 * 
 *   1a. expression is *not* an MBQL clause, OR
 * 
 *   1b. expression is an registered MBQL clause and matches the schema registered
 *    with [[metabase.lib.schema.mbql-clause]], AND
 * 
 *   2. expression's [[type-of]] isa? `base-type`
 */
metabase.lib.schema.expression.expression_schema = (function metabase$lib$schema$expression$expression_schema(base_type,description){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"valid MBQL clause",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__59556,_){
var map__59557 = p__59556;
var map__59557__$1 = cljs.core.__destructure_map(map__59557);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59557__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["invalid MBQL clause: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
})], null),cljs.core.complement(metabase.lib.schema.expression.mbql_clause_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.mbql-clause","clause","metabase.lib.schema.mbql-clause/clause",955279388)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),description], null),(function (p1__59554_SHARP_){
return metabase.lib.schema.expression.type_of_QMARK_(p1__59554_SHARP_,base_type);
})], null)], null);
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","boolean","metabase.lib.schema.expression/boolean",-1396506592),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Boolean","type/Boolean",26348630),"expression returning a boolean"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","string","metabase.lib.schema.expression/string",1750008170),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Text","type/Text",603746827),"expression returning a string"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","integer","metabase.lib.schema.expression/integer",2060430870),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Integer","type/Integer",-638928316),"expression returning an integer"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","non-integer-real","metabase.lib.schema.expression/non-integer-real",-1855491016),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Float","type/Float",1261800143),"expression returning a non-integer real number"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Number","type/Number",-2071693690),"expression returning a number"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","date","metabase.lib.schema.expression/date",1943847782),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Date","type/Date",-690428629),"expression returning a date"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","time","metabase.lib.schema.expression/time",865466446),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Time","type/Time",-814852413),"expression returning a time"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","datetime","metabase.lib.schema.expression/datetime",-51960022),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","DateTime","type/DateTime",352113310),"expression returning a date time"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010),"expression returning a date, time, or date time"));
/**
 * Set of base types that are orderable.
 */
metabase.lib.schema.expression.orderable_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("type","Number","type/Number",-2071693690),null,new cljs.core.Keyword("type","Text","type/Text",603746827),null,new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010),null], null), null);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","orderable","metabase.lib.schema.expression/orderable",-1555566130),metabase.lib.schema.expression.expression_schema(metabase.lib.schema.expression.orderable_types,"an expression that can be compared with :> or :<"));
/**
 * Set of base types that can be campared with equality.
 */
metabase.lib.schema.expression.equality_comparable_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("type","Number","type/Number",-2071693690),null,new cljs.core.Keyword("type","Text","type/Text",603746827),null,new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010),null,new cljs.core.Keyword("type","Boolean","type/Boolean",26348630),null], null), null);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","equality-comparable","metabase.lib.schema.expression/equality-comparable",-658449046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),metabase.lib.schema.expression.expression_schema(metabase.lib.schema.expression.equality_comparable_types,"an expression that can appear in := or :!=")], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","*","type/*",-1283496752),"any type of expression")], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","expressions","metabase.lib.schema.expression/expressions",790922225),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null)], null));
Object.defineProperty(module.exports, "type_of_method", { enumerable: false, get: function() { return metabase.lib.schema.expression.type_of_method; } });
Object.defineProperty(module.exports, "mbql_clause_QMARK_", { enumerable: false, get: function() { return metabase.lib.schema.expression.mbql_clause_QMARK_; } });
Object.defineProperty(module.exports, "type_of", { enumerable: false, get: function() { return metabase.lib.schema.expression.type_of; } });
Object.defineProperty(module.exports, "is_type_QMARK_", { enumerable: false, get: function() { return metabase.lib.schema.expression.is_type_QMARK_; } });
Object.defineProperty(module.exports, "type_of_QMARK_", { enumerable: false, get: function() { return metabase.lib.schema.expression.type_of_QMARK_; } });
Object.defineProperty(module.exports, "expression_schema", { enumerable: false, get: function() { return metabase.lib.schema.expression.expression_schema; } });
Object.defineProperty(module.exports, "orderable_types", { enumerable: false, get: function() { return metabase.lib.schema.expression.orderable_types; } });
Object.defineProperty(module.exports, "equality_comparable_types", { enumerable: false, get: function() { return metabase.lib.schema.expression.equality_comparable_types; } });
//# sourceMappingURL=metabase.lib.schema.expression.js.map
