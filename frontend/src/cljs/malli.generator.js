var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.spec.gen.alpha.js");
require("./clojure.string.js");
require("./clojure.test.check.js");
require("./clojure.test.check.generators.js");
require("./clojure.test.check.properties.js");
require("./clojure.test.check.random.js");
require("./clojure.test.check.rose_tree.js");
require("./malli.core.js");
require("./malli.registry.js");
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

$CLJS.SHADOW_ENV.setLoaded("malli.generator.js");

goog.provide('malli.generator');



/**
 * @interface
 */
malli.generator.Generator = function(){};

var malli$generator$Generator$_generator$dyn_53066 = (function (this$,options){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (malli.generator._generator[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__5394__auto__.call(null,this$,options));
} else {
var m__5392__auto__ = (malli.generator._generator["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__5392__auto__.call(null,this$,options));
} else {
throw cljs.core.missing_protocol("Generator.-generator",this$);
}
}
});
/**
 * returns generator for schema
 */
malli.generator._generator = (function malli$generator$_generator(this$,options){
if((((!((this$ == null)))) && ((!((this$.malli$generator$Generator$_generator$arity$2 == null)))))){
return this$.malli$generator$Generator$_generator$arity$2(this$,options);
} else {
return malli$generator$Generator$_generator$dyn_53066(this$,options);
}
});

/**
 * Return a generator of no values that is compatible with -unreachable-gen?.
 */
malli.generator._never_gen = (function malli$generator$_never_gen(p__52326){
var map__52327 = p__52326;
var map__52327__$1 = cljs.core.__destructure_map(map__52327);
var _options = map__52327__$1;
var original_generator_schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52327__$1,new cljs.core.Keyword("malli.generator","original-generator-schema","malli.generator/original-generator-schema",-1122475395));
return cljs.core.with_meta(clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (_){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot generate values due to infinitely expanding schema: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(original_generator_schema)?malli.core.form.cljs$core$IFn$_invoke$arity$1(original_generator_schema):"<no schema form>"))].join(''),(function (){var G__52329 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(original_generator_schema)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52329,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.form.cljs$core$IFn$_invoke$arity$1(original_generator_schema));
} else {
return G__52329;
}
})());
}),clojure.test.check.generators.any),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("malli.generator","never-gen","malli.generator/never-gen",-887335792),true,new cljs.core.Keyword("malli.generator","original-generator-schema","malli.generator/original-generator-schema",-1122475395),original_generator_schema], null));
});
/**
 * Returns true iff generator g generators no values.
 */
malli.generator._unreachable_gen_QMARK_ = (function malli$generator$_unreachable_gen_QMARK_(g){
return cljs.core.boolean$(new cljs.core.Keyword("malli.generator","never-gen","malli.generator/never-gen",-887335792).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(g)));
});
malli.generator._not_unreachable = (function malli$generator$_not_unreachable(g){
if(malli.generator._unreachable_gen_QMARK_(g)){
return null;
} else {
return g;
}
});
malli.generator._random = (function malli$generator$_random(seed){
if(cljs.core.truth_(seed)){
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed);
} else {
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
}
});
malli.generator._recur = (function malli$generator$_recur(schema__$1,options){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("malli.generator","-recur","malli.generator/-recur",-190439331,null))," is deprecated, please update your generators. See instructions in malli.generator."].join('')], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,options], null);
});
malli.generator._maybe_recur = (function malli$generator$_maybe_recur(schema__$1,options){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("malli.generator","-maybe-recur","malli.generator/-maybe-recur",775446056,null))," is deprecated, please update your generators. See instructions in malli.generator."].join('')], 0));

return options;
});
malli.generator._min_max = (function malli$generator$_min_max(schema__$1,options){
var map__52377 = malli.core.properties.cljs$core$IFn$_invoke$arity$2(schema__$1,options);
var map__52377__$1 = cljs.core.__destructure_map(map__52377);
var gen_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52377__$1,new cljs.core.Keyword("gen","min","gen/min",444569458));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52377__$1,new cljs.core.Keyword("gen","max","gen/max",61264228));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52377__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52377__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = gen_min;
if(cljs.core.truth_(and__5043__auto____$1)){
return (gen_min < min);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","invalid-property","malli.generator/invalid-property",-418941875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("gen","min","gen/min",444569458),new cljs.core.Keyword(null,"value","value",305978217),gen_min,new cljs.core.Keyword(null,"min","min",444991522),min], null));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = max;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = gen_max;
if(cljs.core.truth_(and__5043__auto____$1)){
return (gen_max > max);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","invalid-property","malli.generator/invalid-property",-418941875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("gen","max","gen/max",61264228),new cljs.core.Keyword(null,"value","value",305978217),gen_min,new cljs.core.Keyword(null,"max","max",61366548),min], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(function (){var or__5045__auto__ = gen_min;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return min;
}
})(),new cljs.core.Keyword(null,"max","max",61366548),(function (){var or__5045__auto__ = gen_max;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return max;
}
})()], null);
});
malli.generator._double_gen = (function malli$generator$_double_gen(options){
return clojure.test.check.generators.double_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),false,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),false], null),options], 0)));
});
malli.generator.gen_vector_min = (function malli$generator$gen_vector_min(gen,min,options){
var G__52394 = clojure.test.check.generators.sized((function (p1__52393_SHARP_){
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(gen,min,(min + p1__52393_SHARP_));
}));
if(cljs.core.truth_(new cljs.core.Keyword("malli.generator","generator-ast","malli.generator/generator-ast",-1769943051).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__52394,cljs.core.assoc,new cljs.core.Keyword("malli.generator","generator-ast","malli.generator/generator-ast",-1769943051),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector-min","vector-min",-2065952790),new cljs.core.Keyword(null,"generator","generator",-572962281),gen,new cljs.core.Keyword(null,"min","min",444991522),min], null));
} else {
return G__52394;
}
});
malli.generator._string_gen = (function malli$generator$_string_gen(schema__$1,options){
var map__52395 = malli.generator._min_max(schema__$1,options);
var map__52395__$1 = cljs.core.__destructure_map(map__52395);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52395__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52395__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5043__auto__;
}
})())){
return clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.char_alphanumeric,min));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return max;
} else {
return and__5043__auto__;
}
})())){
return clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.char_alphanumeric,min,max));
} else {
if(cljs.core.truth_(min)){
return clojure.test.check.generators.fmap(clojure.string.join,malli.generator.gen_vector_min(clojure.test.check.generators.char_alphanumeric,min,options));
} else {
if(cljs.core.truth_(max)){
return clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.char_alphanumeric,(0),max));
} else {
return clojure.test.check.generators.string_alphanumeric;

}
}
}
}
});
malli.generator._coll_gen = (function malli$generator$_coll_gen(schema__$1,f,options){
var map__52397 = malli.generator._min_max(schema__$1,options);
var map__52397__$1 = cljs.core.__destructure_map(map__52397);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52397__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52397__$1,new cljs.core.Keyword(null,"max","max",61366548));
var child = cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1));
var gen = (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options) : malli.generator.generator.call(null,child,options));
if(malli.generator._unreachable_gen_QMARK_(gen)){
if(((((function (){var or__5045__auto__ = min;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__5045__auto__ = max;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})())))){
return clojure.test.check.generators.fmap(f,clojure.test.check.generators.return$(cljs.core.PersistentVector.EMPTY));
} else {
return malli.generator._never_gen(options);
}
} else {
return clojure.test.check.generators.fmap(f,(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5043__auto__;
}
})())?clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(gen,min):(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return max;
} else {
return and__5043__auto__;
}
})())?clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(gen,min,max):(cljs.core.truth_(min)?malli.generator.gen_vector_min(gen,min,options):(cljs.core.truth_(max)?clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(gen,(0),max):clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(gen)
)))));
}
});
malli.generator._coll_distinct_gen = (function malli$generator$_coll_distinct_gen(schema__$1,f,options){
var map__52401 = malli.generator._min_max(schema__$1,options);
var map__52401__$1 = cljs.core.__destructure_map(map__52401);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52401__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52401__$1,new cljs.core.Keyword(null,"max","max",61366548));
var child = cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1));
var gen = (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options) : malli.generator.generator.call(null,child,options));
return clojure.test.check.generators.fmap(f,((malli.generator._unreachable_gen_QMARK_(gen))?((((((function (){var or__5045__auto__ = min;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__5045__auto__ = max;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()))))?clojure.test.check.generators.return$(cljs.core.PersistentVector.EMPTY):malli.generator._never_gen(options)):clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2(gen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),min,new cljs.core.Keyword(null,"max-elements","max-elements",433034073),max,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))));
});
malli.generator._and_gen = (function malli$generator$_and_gen(schema__$1,options){
var temp__5806__auto__ = malli.generator._not_unreachable((function (){var G__52403 = cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options));
var G__52404 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52403,G__52404) : malli.generator.generator.call(null,G__52403,G__52404));
})());
if((temp__5806__auto__ == null)){
return malli.generator._never_gen(options);
} else {
var gen = temp__5806__auto__;
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3(malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema__$1,options),gen,(100));
}
});
malli.generator.gen_one_of = (function malli$generator$gen_one_of(gs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(gs))){
return cljs.core.first(gs);
} else {
return clojure.test.check.generators.one_of(gs);
}
});
malli.generator._or_gen = (function malli$generator$_or_gen(schema__$1,options){
var temp__5806__auto__ = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__52408_SHARP_){
return malli.generator._not_unreachable((malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(p1__52408_SHARP_,options) : malli.generator.generator.call(null,p1__52408_SHARP_,options)));
})),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options)));
if((temp__5806__auto__ == null)){
return malli.generator._never_gen(options);
} else {
var gs = temp__5806__auto__;
return malli.generator.gen_one_of(gs);
}
});
malli.generator._multi_gen = (function malli$generator$_multi_gen(schema__$1,options){
var temp__5806__auto__ = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__52409_SHARP_){
return malli.generator._not_unreachable((function (){var G__52410 = cljs.core.last(p1__52409_SHARP_);
var G__52411 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52410,G__52411) : malli.generator.generator.call(null,G__52410,G__52411));
})());
})),malli.core.entries.cljs$core$IFn$_invoke$arity$2(schema__$1,options)));
if((temp__5806__auto__ == null)){
return malli.generator._never_gen(options);
} else {
var gs = temp__5806__auto__;
return malli.generator.gen_one_of(gs);
}
});
malli.generator._map_gen = (function malli$generator$_map_gen(schema__$1,options){
var entries = malli.core.entries.cljs$core$IFn$_invoke$arity$1(schema__$1);
var value_gen = (function (k,s){
var g = (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(s,options) : malli.generator.generator.call(null,s,options));
var G__52415 = g;
if(cljs.core.truth_(malli.generator._not_unreachable(g))){
return clojure.test.check.generators.fmap((function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}),G__52415);
} else {
return G__52415;
}
});
var gens_req = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52420){
var vec__52421 = p__52420;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52421,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52421,(1),null);
return value_gen(k,s);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52412_SHARP_){
return new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(cljs.core.last(p1__52412_SHARP_)));
}),entries));
var gen_opt = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52485){
var vec__52486 = p__52485;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52486,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52486,(1),null);
var g = malli.generator._not_unreachable(value_gen(k,s));
return malli.generator.gen_one_of((function (){var G__52492 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.return$(null)], null);
if(cljs.core.truth_(g)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52492,g);
} else {
return G__52492;
}
})());
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52413_SHARP_){
return new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(cljs.core.last(p1__52413_SHARP_)));
}),entries)));
if(cljs.core.not_any_QMARK_(malli.generator._unreachable_gen_QMARK_,gens_req)){
return clojure.test.check.generators.fmap((function (p__52499){
var vec__52500 = p__52499;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52500,(0),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52500,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req,opt));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,gens_req),gen_opt], 0)));
} else {
return malli.generator._never_gen(options);
}
});
malli.generator._map_of_gen = (function malli$generator$_map_of_gen(schema__$1,options){
var map__52505 = malli.generator._min_max(schema__$1,options);
var map__52505__$1 = cljs.core.__destructure_map(map__52505);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52505__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52505__$1,new cljs.core.Keyword(null,"max","max",61366548));
var vec__52506 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52503_SHARP_){
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(p1__52503_SHARP_,options) : malli.generator.generator.call(null,p1__52503_SHARP_,options));
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options));
var k_gen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52506,(0),null);
var v_gen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52506,(1),null);
var gs = vec__52506;
var opts = (cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),min], null):(cljs.core.truth_((function (){var and__5043__auto__ = min;
if(cljs.core.truth_(and__5043__auto__)){
return max;
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),min,new cljs.core.Keyword(null,"max-elements","max-elements",433034073),max], null):(cljs.core.truth_(min)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),min], null):(cljs.core.truth_(max)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-elements","max-elements",433034073),max], null):cljs.core.PersistentArrayMap.EMPTY
))));
if(cljs.core.truth_(cljs.core.some(malli.generator._unreachable_gen_QMARK_,gs))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),(function (){var or__5045__auto__ = min;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = max;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()], 0))){
return clojure.test.check.generators.return$(cljs.core.PersistentArrayMap.EMPTY);
} else {
return malli.generator._never_gen(options);
}
} else {
return clojure.test.check.generators.fmap((function (p1__52504_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__52504_SHARP_);
}),clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_gen,v_gen], 0)),opts));
}
});
malli.generator._identify_ref_schema = (function malli$generator$_identify_ref_schema(schema__$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),malli.registry._schemas(malli.core._registry.cljs$core$IFn$_invoke$arity$1(malli.core._options(schema__$1))),new cljs.core.Keyword(null,"name","name",1843675177),malli.core._ref(schema__$1)], null);
});
malli.generator._ref_gen = (function malli$generator$_ref_gen(schema__$1,options){
var ref_id = malli.generator._identify_ref_schema(schema__$1);
var or__5045__auto__ = cljs.core.force(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.generator","rec-gen","malli.generator/rec-gen",65631558),ref_id], null)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var scalar_ref_gen = (new cljs.core.Delay((function (){
return malli.generator._never_gen(options);
}),null));
var dschema = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema__$1);
var G__52523 = (function (){var G__52524 = dschema;
var G__52525 = cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.generator","rec-gen","malli.generator/rec-gen",65631558),ref_id], null),scalar_ref_gen);
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52524,G__52525) : malli.generator.generator.call(null,G__52524,G__52525));
})();
if(cljs.core.realized_QMARK_(scalar_ref_gen)){
return clojure.test.check.generators.recursive_gen((function (p1__52521_SHARP_){
var G__52526 = dschema;
var G__52527 = cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.generator","rec-gen","malli.generator/rec-gen",65631558),ref_id], null),p1__52521_SHARP_);
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52526,G__52527) : malli.generator.generator.call(null,G__52526,G__52527));
}),G__52523);
} else {
return G__52523;
}
}
});
malli.generator.__EQ__GT__gen = (function malli$generator$__EQ__GT__gen(schema__$1,options){
var output_generator = (function (){var G__52531 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(malli.core._function_info(schema__$1));
var G__52532 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52531,G__52532) : malli.generator.generator.call(null,G__52531,G__52532));
})();
return clojure.test.check.generators.return$(malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null),(function() { 
var G__53162__delegate = function (_){
return (malli.generator.generate.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generate.cljs$core$IFn$_invoke$arity$2(output_generator,options) : malli.generator.generate.call(null,output_generator,options));
};
var G__53162 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__53163__i = 0, G__53163__a = new Array(arguments.length -  0);
while (G__53163__i < G__53163__a.length) {G__53163__a[G__53163__i] = arguments[G__53163__i + 0]; ++G__53163__i;}
  _ = new cljs.core.IndexedSeq(G__53163__a,0,null);
} 
return G__53162__delegate.call(this,_);};
G__53162.cljs$lang$maxFixedArity = 0;
G__53162.cljs$lang$applyTo = (function (arglist__53164){
var _ = cljs.core.seq(arglist__53164);
return G__53162__delegate(_);
});
G__53162.cljs$core$IFn$_invoke$arity$variadic = G__53162__delegate;
return G__53162;
})()
));
});
malli.generator._function_gen = (function malli$generator$_function_gen(schema__$1,options){
return clojure.test.check.generators.return$(malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"gen","gen",142575302),(function (p1__52533_SHARP_){
return (malli.generator.generate.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generate.cljs$core$IFn$_invoke$arity$2(p1__52533_SHARP_,options) : malli.generator.generate.call(null,p1__52533_SHARP_,options));
})], null),options));
});
malli.generator._regex_generator = (function malli$generator$_regex_generator(schema__$1,options){
if(cljs.core.truth_(malli.core._regex_op_QMARK_(schema__$1))){
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(schema__$1,options) : malli.generator.generator.call(null,schema__$1,options));
} else {
var g = (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(schema__$1,options) : malli.generator.generator.call(null,schema__$1,options));
var G__52545 = g;
if(cljs.core.truth_(malli.generator._not_unreachable(g))){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__52545], 0));
} else {
return G__52545;
}
}
});
malli.generator.entry__GT_schema = (function malli$generator$entry__GT_schema(e){
if(cljs.core.vector_QMARK_(e)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,(2));
} else {
return e;
}
});
malli.generator._cat_gen = (function malli$generator$_cat_gen(schema__$1,options){
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52551_SHARP_){
return malli.generator._regex_generator(malli.generator.entry__GT_schema(p1__52551_SHARP_),options);
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options));
if(cljs.core.truth_(cljs.core.some(malli.generator._unreachable_gen_QMARK_,gs))){
return malli.generator._never_gen(options);
} else {
return clojure.test.check.generators.fmap((function (p1__52552_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__52552_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,gs));
}
});
malli.generator._alt_gen = (function malli$generator$_alt_gen(schema__$1,options){
var gs = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__52553_SHARP_){
return malli.generator._regex_generator(malli.generator.entry__GT_schema(p1__52553_SHARP_),options);
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options));
if(cljs.core.every_QMARK_(malli.generator._unreachable_gen_QMARK_,gs)){
return malli.generator._never_gen(options);
} else {
return malli.generator.gen_one_of(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(malli.generator._not_unreachable),gs));
}
});
malli.generator.__QMARK__gen = (function malli$generator$__QMARK__gen(schema__$1,options){
var child = malli.core._get(schema__$1,(0),null);
var temp__5806__auto__ = malli.generator._not_unreachable((malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options) : malli.generator.generator.call(null,child,options)));
if((temp__5806__auto__ == null)){
return clojure.test.check.generators.return$(cljs.core.List.EMPTY);
} else {
var g = temp__5806__auto__;
if(cljs.core.truth_(malli.core._regex_op_QMARK_(child))){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,clojure.test.check.generators.return$(cljs.core.List.EMPTY)], null));
} else {
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(g,(0),(1));
}
}
});
malli.generator.__STAR__gen = (function malli$generator$__STAR__gen(schema__$1,options){
var child = malli.core._get(schema__$1,(0),null);
var mode = new cljs.core.Keyword("malli.generator","-*-gen-mode","malli.generator/-*-gen-mode",-571864514).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"*","*",-1294732318));
var options__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword("malli.generator","-*-gen-mode","malli.generator/-*-gen-mode",-571864514));
var temp__5806__auto__ = malli.generator._not_unreachable((malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(child,options__$1) : malli.generator.generator.call(null,child,options__$1)));
if((temp__5806__auto__ == null)){
var G__52571 = mode;
var G__52571__$1 = (((G__52571 instanceof cljs.core.Keyword))?G__52571.fqn:null);
switch (G__52571__$1) {
case "*":
return clojure.test.check.generators.return$(cljs.core.List.EMPTY);

break;
case "+":
return malli.generator._never_gen(options__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52571__$1)].join('')));

}
} else {
var g = temp__5806__auto__;
var G__52574 = (function (){var G__52575 = mode;
var G__52575__$1 = (((G__52575 instanceof cljs.core.Keyword))?G__52575.fqn:null);
switch (G__52575__$1) {
case "*":
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(g);

break;
case "+":
return malli.generator.gen_vector_min(g,(1),options__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52575__$1)].join('')));

}
})();
if(cljs.core.truth_(malli.core._regex_op_QMARK_(child))){
return clojure.test.check.generators.fmap((function (p1__52570_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__52570_SHARP_);
}),G__52574);
} else {
return G__52574;
}
}
});
malli.generator.__PLUS__gen = (function malli$generator$__PLUS__gen(schema__$1,options){
return malli.generator.__STAR__gen(schema__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.generator","-*-gen-mode","malli.generator/-*-gen-mode",-571864514),new cljs.core.Keyword(null,"+","+",1913524883)));
});
malli.generator._repeat_gen = (function malli$generator$_repeat_gen(schema__$1,options){
var child = malli.core._get(schema__$1,(0),null);
var temp__5806__auto__ = malli.generator._not_unreachable(malli.generator._coll_gen(schema__$1,cljs.core.identity,options));
if((temp__5806__auto__ == null)){
return clojure.test.check.generators.return$(cljs.core.List.EMPTY);
} else {
var g = temp__5806__auto__;
var G__52599 = g;
if(cljs.core.truth_(malli.core._regex_op_QMARK_(child))){
return clojure.test.check.generators.fmap((function (p1__52581_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__52581_SHARP_);
}),G__52599);
} else {
return G__52599;
}
}
});
malli.generator._qualified_ident_gen = (function malli$generator$_qualified_ident_gen(schema__$1,mk_value_with_ns,value_with_ns_gen_size,pred,gen){
var temp__5802__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1));
if(cljs.core.truth_(temp__5802__auto__)){
var namespace_unparsed = temp__5802__auto__;
return clojure.test.check.generators.fmap((function (k){
var G__52628 = cljs.core.name(namespace_unparsed);
var G__52629 = cljs.core.name(k);
return (mk_value_with_ns.cljs$core$IFn$_invoke$arity$2 ? mk_value_with_ns.cljs$core$IFn$_invoke$arity$2(G__52628,G__52629) : mk_value_with_ns.call(null,G__52628,G__52629));
}),value_with_ns_gen_size);
} else {
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(pred,gen);
}
});
malli.generator._qualified_keyword_gen = (function malli$generator$_qualified_keyword_gen(schema__$1){
return malli.generator._qualified_ident_gen(schema__$1,cljs.core.keyword,clojure.test.check.generators.keyword,cljs.core.qualified_keyword_QMARK_,clojure.test.check.generators.keyword_ns);
});
malli.generator._qualified_symbol_gen = (function malli$generator$_qualified_symbol_gen(schema__$1){
return malli.generator._qualified_ident_gen(schema__$1,cljs.core.symbol,clojure.test.check.generators.symbol,cljs.core.qualified_symbol_QMARK_,clojure.test.check.generators.symbol_ns);
});
malli.generator.gen_elements = (function malli$generator$gen_elements(es){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(es))){
return clojure.test.check.generators.return$(cljs.core.first(es));
} else {
return clojure.test.check.generators.elements(es);
}
});
if((typeof malli !== 'undefined') && (typeof malli.generator !== 'undefined') && (typeof malli.generator._schema_generator !== 'undefined')){
} else {
malli.generator._schema_generator = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("malli.generator","default","malli.generator/default",-943988734)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52686 = cljs.core.get_global_hierarchy;
return (fexpr__52686.cljs$core$IFn$_invoke$arity$0 ? fexpr__52686.cljs$core$IFn$_invoke$arity$0() : fexpr__52686.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.generator","-schema-generator"),(function (schema__$1,options){
return malli.core.type.cljs$core$IFn$_invoke$arity$2(schema__$1,options);
}),new cljs.core.Keyword("malli.generator","default","malli.generator/default",-943988734),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.generator","default","malli.generator/default",-943988734),(function (schema__$1,options){
return cljs.spec.gen.alpha.gen_for_pred(malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema__$1,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">",">",-555517146),(function (schema__$1,options){
return malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options)) + (1))], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">=",">=",-623615505),(function (schema__$1,options){
return malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options))], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<","<",-646864291),(function (schema__$1,options){
return malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options)) - (1))], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<=","<=",-395636158),(function (schema__$1,options){
return malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options))], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=","=",1152933628),(function (schema__$1,options){
return clojure.test.check.generators.return$(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options)));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not=","not=",-173995323),(function (schema__$1,options){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((function (p1__52705_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__52705_SHARP_,cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options)));
}),clojure.test.check.generators.any_printable,(100));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),(function (_,___$1){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),1.0E-5], null)),clojure.test.check.generators.fmap(cljs.core.inc,clojure.test.check.generators.nat)], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),(function (_,___$1){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.generator._double_gen(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),-1.0E-4], null)),clojure.test.check.generators.fmap(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core._),clojure.test.check.generators.nat)], null));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not","not",-595976884),(function (schema__$1,options){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3(malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema__$1,options),cljs.spec.gen.alpha.gen_for_pred(cljs.core.any_QMARK_),(100));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (schema__$1,options){
return malli.generator._and_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (schema__$1,options){
return malli.generator._or_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"orn","orn",738436484),(function (schema__$1,options){
return malli.generator._or_gen(malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"or","or",235744169),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1)),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema__$1)),options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","val","malli.core/val",39501268),(function (schema__$1,options){
var G__52734 = cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1));
var G__52735 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52734,G__52735) : malli.generator.generator.call(null,G__52734,G__52735));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (schema__$1,options){
return malli.generator._map_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),(function (schema__$1,options){
return malli.generator._map_of_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi","multi",-190293005),(function (schema__$1,options){
return malli.generator._multi_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (schema__$1,options){
return malli.generator._coll_gen(schema__$1,cljs.core.identity,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sequential","sequential",-1082983960),(function (schema__$1,options){
return malli.generator._coll_gen(schema__$1,cljs.core.identity,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (schema__$1,options){
return malli.generator._coll_distinct_gen(schema__$1,cljs.core.set,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"enum","enum",1679018432),(function (schema__$1,options){
return malli.generator.gen_elements(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"maybe","maybe",-314397560),(function (schema__$1,options){
var g = malli.generator._not_unreachable((function (){var G__52773 = cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options));
var G__52774 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52773,G__52774) : malli.generator.generator.call(null,G__52773,G__52774));
})());
return malli.generator.gen_one_of((function (){var G__52776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.return$(null)], null);
if(cljs.core.truth_(g)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52776,g);
} else {
return G__52776;
}
})());
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (schema__$1,options){
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52780_SHARP_){
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(p1__52780_SHARP_,options) : malli.generator.generator.call(null,p1__52780_SHARP_,options));
}),malli.core.children.cljs$core$IFn$_invoke$arity$2(schema__$1,options));
if(cljs.core.not_any_QMARK_(malli.generator._unreachable_gen_QMARK_,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,gs);
} else {
return malli.generator._never_gen(options);
}
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"any","any",1705907423),(function (_,___$1){
return cljs.spec.gen.alpha.gen_for_pred(cljs.core.any_QMARK_);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"some","some",-1951079573),(function (_,___$1){
return clojure.test.check.generators.any_printable;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_,___$1){
return clojure.test.check.generators.return$(null);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (schema__$1,options){
return malli.generator._string_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"int","int",-1741416922),(function (schema__$1,options){
return clojure.test.check.generators.large_integer_STAR_(malli.generator._min_max(schema__$1,options));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"double","double",884886883),(function (schema__$1,options){
return clojure.test.check.generators.double_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var props = malli.core.properties.cljs$core$IFn$_invoke$arity$2(schema__$1,options);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("gen","infinite?","gen/infinite?",-2017652832),false),new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("gen","NaN?","gen/NaN?",-1917993267),false)], null);
})(),malli.generator._min_max(schema__$1,options)], 0)));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_,___$1){
return clojure.test.check.generators.boolean$;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (_,___$1){
return clojure.test.check.generators.keyword;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (_,___$1){
return clojure.test.check.generators.symbol;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),(function (schema__$1,_){
return malli.generator._qualified_keyword_gen(schema__$1);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),(function (schema__$1,_){
return malli.generator._qualified_symbol_gen(schema__$1);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(function (_,___$1){
return clojure.test.check.generators.uuid;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=>","=>",1841166128),(function (schema__$1,options){
return malli.generator.__EQ__GT__gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"function","function",-2127255473),(function (schema__$1,options){
return malli.generator._function_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),(function (_,___$1){
return clojure.test.check.generators.keyword;
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (schema__$1,options){
return malli.generator._ref_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),(function (schema__$1,options){
var G__52919 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema__$1);
var G__52920 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52919,G__52920) : malli.generator.generator.call(null,G__52919,G__52920));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863),(function (schema__$1,options){
var G__52925 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema__$1);
var G__52926 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52925,G__52926) : malli.generator.generator.call(null,G__52925,G__52926));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (schema__$1,options){
var G__52931 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema__$1);
var G__52932 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52931,G__52932) : malli.generator.generator.call(null,G__52931,G__52932));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (schema__$1,options){
var G__52934 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema__$1);
var G__52935 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52934,G__52935) : malli.generator.generator.call(null,G__52934,G__52935));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),(function (schema__$1,options){
var G__52942 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema__$1);
var G__52944 = options;
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52942,G__52944) : malli.generator.generator.call(null,G__52942,G__52944));
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cat","cat",-1457810207),(function (schema__$1,options){
return malli.generator._cat_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"catn","catn",-48807277),(function (schema__$1,options){
return malli.generator._cat_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"alt","alt",-3214426),(function (schema__$1,options){
return malli.generator._alt_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"altn","altn",1717854417),(function (schema__$1,options){
return malli.generator._alt_gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"?","?",-1703165233),(function (schema__$1,options){
return malli.generator.__QMARK__gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"*","*",-1294732318),(function (schema__$1,options){
return malli.generator.__STAR__gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"+","+",1913524883),(function (schema__$1,options){
return malli.generator.__PLUS__gen(schema__$1,options);
}));
malli.generator._schema_generator.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"repeat","repeat",832692087),(function (schema__$1,options){
return malli.generator._repeat_gen(schema__$1,options);
}));
malli.generator._create_from_elements = (function malli$generator$_create_from_elements(props){
var G__52961 = new cljs.core.Keyword("gen","elements","gen/elements",657813311).cljs$core$IFn$_invoke$arity$1(props);
if((G__52961 == null)){
return null;
} else {
return malli.generator.gen_elements(G__52961);
}
});
malli.generator._create_from_gen = (function malli$generator$_create_from_gen(props,schema__$1,options){
var or__5045__auto__ = new cljs.core.Keyword("gen","gen","gen/gen",142743606).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("gen","elements","gen/elements",657813311).cljs$core$IFn$_invoke$arity$1(props))){
return null;
} else {
if((((!((schema__$1 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.malli$generator$Generator$))))?true:(((!schema__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.generator.Generator,schema__$1):false)):cljs.core.native_satisfies_QMARK_(malli.generator.Generator,schema__$1))){
return malli.generator._generator(schema__$1,options);
} else {
return malli.generator._schema_generator.cljs$core$IFn$_invoke$arity$2(schema__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.generator","original-generator-schema","malli.generator/original-generator-schema",-1122475395),schema__$1));
}
}
}
});
malli.generator._create_from_schema = (function malli$generator$_create_from_schema(props,options){
var G__52980 = new cljs.core.Keyword("gen","schema","gen/schema",-1582038959).cljs$core$IFn$_invoke$arity$1(props);
if((G__52980 == null)){
return null;
} else {
return (malli.generator.generator.cljs$core$IFn$_invoke$arity$2 ? malli.generator.generator.cljs$core$IFn$_invoke$arity$2(G__52980,options) : malli.generator.generator.call(null,G__52980,options));
}
});
malli.generator._create_from_fmap = (function malli$generator$_create_from_fmap(props,schema__$1,options){
var temp__5808__auto__ = new cljs.core.Keyword("gen","fmap","gen/fmap",-1585733563).cljs$core$IFn$_invoke$arity$1(props);
if((temp__5808__auto__ == null)){
return null;
} else {
var fmap = temp__5808__auto__;
return clojure.test.check.generators.fmap(malli.core.eval.cljs$core$IFn$_invoke$arity$2(fmap,(function (){var or__5045__auto__ = options;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return malli.core.options.cljs$core$IFn$_invoke$arity$1(schema__$1);
}
})()),(function (){var or__5045__auto__ = malli.generator._create_from_elements(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = malli.generator._create_from_schema(props,options);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = malli.generator._create_from_gen(props,schema__$1,options);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return clojure.test.check.generators.return$(null);
}
}
}
})());
}
});
malli.generator._create = (function malli$generator$_create(schema__$1,options){
var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema__$1),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1)], 0));
var or__5045__auto__ = malli.generator._create_from_fmap(props,schema__$1,options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = malli.generator._create_from_elements(props);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = malli.generator._create_from_schema(props,options);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = malli.generator._create_from_gen(props,schema__$1,options);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","no-generator","malli.generator/no-generator",934332770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null));
}
}
}
}
});
malli.generator.generator = (function malli$generator$generator(var_args){
var G__52991 = arguments.length;
switch (G__52991) {
case 1:
return malli.generator.generator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.generator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.generator.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.generator.generator.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.generator.generator.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
if(cljs.core.truth_(new cljs.core.Keyword("malli.generator","rec-gen","malli.generator/rec-gen",65631558).cljs$core$IFn$_invoke$arity$1(options))){
return malli.generator._create(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),options);
} else {
return malli.core._cached(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),new cljs.core.Keyword(null,"generator","generator",-572962281),(function (p1__52989_SHARP_){
return malli.generator._create(p1__52989_SHARP_,options);
}));
}
}));

(malli.generator.generator.cljs$lang$maxFixedArity = 2);

malli.generator.generate = (function malli$generator$generate(var_args){
var G__52993 = arguments.length;
switch (G__52993) {
case 1:
return malli.generator.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.generate.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_gen_or_schema){
return malli.generator.generate.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,null);
}));

(malli.generator.generate.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_gen_or_schema,p__52994){
var map__52995 = p__52994;
var map__52995__$1 = cljs.core.__destructure_map(map__52995);
var options = map__52995__$1;
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52995__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52995__$1,new cljs.core.Keyword(null,"size","size",1098693007),(30));
var gen = ((clojure.test.check.generators.generator_QMARK_(_QMARK_gen_or_schema))?_QMARK_gen_or_schema:malli.generator.generator.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,options));
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(gen,malli.generator._random(seed),size));
}));

(malli.generator.generate.cljs$lang$maxFixedArity = 2);

malli.generator.sample = (function malli$generator$sample(var_args){
var G__53005 = arguments.length;
switch (G__53005) {
case 1:
return malli.generator.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.sample.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_gen_or_schema){
return malli.generator.sample.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,null);
}));

(malli.generator.sample.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_gen_or_schema,p__53007){
var map__53008 = p__53007;
var map__53008__$1 = cljs.core.__destructure_map(map__53008);
var options = map__53008__$1;
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53008__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53008__$1,new cljs.core.Keyword(null,"size","size",1098693007),(10));
var gen = ((clojure.test.check.generators.generator_QMARK_(_QMARK_gen_or_schema))?_QMARK_gen_or_schema:malli.generator.generator.cljs$core$IFn$_invoke$arity$2(_QMARK_gen_or_schema,options));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__52998_SHARP_,p2__52999_SHARP_){
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(gen,p1__52998_SHARP_,p2__52999_SHARP_));
}),clojure.test.check.generators.lazy_random_states(malli.generator._random(seed)),clojure.test.check.generators.make_size_range_seq(size)));
}));

(malli.generator.sample.cljs$lang$maxFixedArity = 2);

malli.generator.function_checker = (function malli$generator$function_checker(var_args){
var G__53023 = arguments.length;
switch (G__53023) {
case 1:
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.function_checker.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,p__53027){
var map__53028 = p__53027;
var map__53028__$1 = cljs.core.__destructure_map(map__53028);
var options = map__53028__$1;
var _EQ__GT_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53028__$1,new cljs.core.Keyword("malli.generator","=>iterations","malli.generator/=>iterations",-1726832707),(100));
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
var check = (function (schema__$2){
var map__53030 = malli.core._function_info(schema__$2);
var map__53030__$1 = cljs.core.__destructure_map(map__53030);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53030__$1,new cljs.core.Keyword(null,"input","input",556931961));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53030__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var input_generator = malli.generator.generator.cljs$core$IFn$_invoke$arity$2(input,options);
var output_validator = malli.core.validator.cljs$core$IFn$_invoke$arity$2(output,options);
var validate = (function (f,args){
var G__53035 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
return (output_validator.cljs$core$IFn$_invoke$arity$1 ? output_validator.cljs$core$IFn$_invoke$arity$1(G__53035) : output_validator.call(null,G__53035));
});
return (function (f){
var map__53036 = clojure.test.check.quick_check(_EQ__GT_iterations,clojure.test.check.properties.for_all_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_generator], null),(function (p1__53014_SHARP_){
return validate(f,p1__53014_SHARP_);
})));
var map__53036__$1 = cljs.core.__destructure_map(map__53036);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53036__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var shrunk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53036__$1,new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412));
var smallest = cljs.core.first(new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(shrunk));
if(result === true){
return null;
} else {
var explain_input = malli.core.explain.cljs$core$IFn$_invoke$arity$2(input,smallest);
var response = (cljs.core.truth_(explain_input)?null:(function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,smallest);
}catch (e53041){if((e53041 instanceof Error)){
var e = e53041;
return e;
} else {
throw e53041;

}
}})());
var explain_output = (cljs.core.truth_(explain_input)?null:malli.core.explain.cljs$core$IFn$_invoke$arity$2(output,response));
var G__53042 = shrunk;
var G__53042__$1 = (cljs.core.truth_(explain_input)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53042,new cljs.core.Keyword("malli.generator","explain-input","malli.generator/explain-input",-480505211),explain_input):G__53042);
var G__53042__$2 = (cljs.core.truth_(explain_output)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53042__$1,new cljs.core.Keyword("malli.generator","explain-output","malli.generator/explain-output",-2096857927),explain_output):G__53042__$1);
if(cljs.core.truth_(cljs.core.ex_message(result))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__53042__$2,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.ex_message),new cljs.core.Keyword(null,"result-data","result-data",-1724248844));
} else {
return G__53042__$2;
}
}
});
});
var pred__53045 = cljs.core._EQ_;
var expr__53046 = malli.core.type.cljs$core$IFn$_invoke$arity$1(schema__$1);
if(cljs.core.truth_((pred__53045.cljs$core$IFn$_invoke$arity$2 ? pred__53045.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"=>","=>",1841166128),expr__53046) : pred__53045.call(null,new cljs.core.Keyword(null,"=>","=>",1841166128),expr__53046)))){
return check(schema__$1);
} else {
if(cljs.core.truth_((pred__53045.cljs$core$IFn$_invoke$arity$2 ? pred__53045.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"function","function",-2127255473),expr__53046) : pred__53045.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__53046)))){
var checkers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53018_SHARP_){
return malli.generator.function_checker.cljs$core$IFn$_invoke$arity$2(p1__53018_SHARP_,options);
}),malli.core._children(schema__$1));
return (function (x){
return cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__53019_SHARP_){
return (p1__53019_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53019_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__53019_SHARP_.call(null,x));
}),checkers));
});
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.generator","invalid-function-schema","malli.generator/invalid-function-schema",-1857583937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core._type(schema__$1)], null));
}
}
}));

(malli.generator.function_checker.cljs$lang$maxFixedArity = 2);

malli.generator.check = (function malli$generator$check(var_args){
var G__53050 = arguments.length;
switch (G__53050) {
case 2:
return malli.generator.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.generator.check.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.generator.check.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,f){
return malli.generator.check.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,f,null);
}));

(malli.generator.check.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,f,options){
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
return malli.core.explain.cljs$core$IFn$_invoke$arity$2(malli.core._update_options(schema__$1,(function (p1__53048_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53048_SHARP_,new cljs.core.Keyword("malli.core","function-checker","malli.core/function-checker",-792030936),malli.generator.function_checker);
})),f);
}));

(malli.generator.check.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "_map_of_gen", { enumerable: false, get: function() { return malli.generator._map_of_gen; } });
Object.defineProperty(module.exports, "_cat_gen", { enumerable: false, get: function() { return malli.generator._cat_gen; } });
Object.defineProperty(module.exports, "_coll_gen", { enumerable: false, get: function() { return malli.generator._coll_gen; } });
Object.defineProperty(module.exports, "_and_gen", { enumerable: false, get: function() { return malli.generator._and_gen; } });
Object.defineProperty(module.exports, "_maybe_recur", { enumerable: false, get: function() { return malli.generator._maybe_recur; } });
Object.defineProperty(module.exports, "_ref_gen", { enumerable: false, get: function() { return malli.generator._ref_gen; } });
Object.defineProperty(module.exports, "__QMARK__gen", { enumerable: false, get: function() { return malli.generator.__QMARK__gen; } });
Object.defineProperty(module.exports, "gen_elements", { enumerable: false, get: function() { return malli.generator.gen_elements; } });
Object.defineProperty(module.exports, "_min_max", { enumerable: false, get: function() { return malli.generator._min_max; } });
Object.defineProperty(module.exports, "_create", { enumerable: false, get: function() { return malli.generator._create; } });
Object.defineProperty(module.exports, "_qualified_ident_gen", { enumerable: false, get: function() { return malli.generator._qualified_ident_gen; } });
Object.defineProperty(module.exports, "_qualified_symbol_gen", { enumerable: false, get: function() { return malli.generator._qualified_symbol_gen; } });
Object.defineProperty(module.exports, "__PLUS__gen", { enumerable: false, get: function() { return malli.generator.__PLUS__gen; } });
Object.defineProperty(module.exports, "_create_from_gen", { enumerable: false, get: function() { return malli.generator._create_from_gen; } });
Object.defineProperty(module.exports, "entry__GT_schema", { enumerable: false, get: function() { return malli.generator.entry__GT_schema; } });
Object.defineProperty(module.exports, "_qualified_keyword_gen", { enumerable: false, get: function() { return malli.generator._qualified_keyword_gen; } });
Object.defineProperty(module.exports, "__STAR__gen", { enumerable: false, get: function() { return malli.generator.__STAR__gen; } });
Object.defineProperty(module.exports, "_create_from_fmap", { enumerable: false, get: function() { return malli.generator._create_from_fmap; } });
Object.defineProperty(module.exports, "gen_one_of", { enumerable: false, get: function() { return malli.generator.gen_one_of; } });
Object.defineProperty(module.exports, "_schema_generator", { enumerable: false, get: function() { return malli.generator._schema_generator; } });
Object.defineProperty(module.exports, "_coll_distinct_gen", { enumerable: false, get: function() { return malli.generator._coll_distinct_gen; } });
Object.defineProperty(module.exports, "check", { enumerable: false, get: function() { return malli.generator.check; } });
Object.defineProperty(module.exports, "_random", { enumerable: false, get: function() { return malli.generator._random; } });
Object.defineProperty(module.exports, "_or_gen", { enumerable: false, get: function() { return malli.generator._or_gen; } });
Object.defineProperty(module.exports, "_not_unreachable", { enumerable: false, get: function() { return malli.generator._not_unreachable; } });
Object.defineProperty(module.exports, "_generator", { enumerable: false, get: function() { return malli.generator._generator; } });
Object.defineProperty(module.exports, "Generator", { enumerable: false, get: function() { return malli.generator.Generator; } });
Object.defineProperty(module.exports, "_multi_gen", { enumerable: false, get: function() { return malli.generator._multi_gen; } });
Object.defineProperty(module.exports, "generate", { enumerable: false, get: function() { return malli.generator.generate; } });
Object.defineProperty(module.exports, "_alt_gen", { enumerable: false, get: function() { return malli.generator._alt_gen; } });
Object.defineProperty(module.exports, "_double_gen", { enumerable: false, get: function() { return malli.generator._double_gen; } });
Object.defineProperty(module.exports, "_map_gen", { enumerable: false, get: function() { return malli.generator._map_gen; } });
Object.defineProperty(module.exports, "_function_gen", { enumerable: false, get: function() { return malli.generator._function_gen; } });
Object.defineProperty(module.exports, "_regex_generator", { enumerable: false, get: function() { return malli.generator._regex_generator; } });
Object.defineProperty(module.exports, "function_checker", { enumerable: false, get: function() { return malli.generator.function_checker; } });
Object.defineProperty(module.exports, "_create_from_schema", { enumerable: false, get: function() { return malli.generator._create_from_schema; } });
Object.defineProperty(module.exports, "sample", { enumerable: false, get: function() { return malli.generator.sample; } });
Object.defineProperty(module.exports, "gen_vector_min", { enumerable: false, get: function() { return malli.generator.gen_vector_min; } });
Object.defineProperty(module.exports, "_unreachable_gen_QMARK_", { enumerable: false, get: function() { return malli.generator._unreachable_gen_QMARK_; } });
Object.defineProperty(module.exports, "__EQ__GT__gen", { enumerable: false, get: function() { return malli.generator.__EQ__GT__gen; } });
Object.defineProperty(module.exports, "_recur", { enumerable: false, get: function() { return malli.generator._recur; } });
Object.defineProperty(module.exports, "_repeat_gen", { enumerable: false, get: function() { return malli.generator._repeat_gen; } });
Object.defineProperty(module.exports, "_identify_ref_schema", { enumerable: false, get: function() { return malli.generator._identify_ref_schema; } });
Object.defineProperty(module.exports, "_never_gen", { enumerable: false, get: function() { return malli.generator._never_gen; } });
Object.defineProperty(module.exports, "_string_gen", { enumerable: false, get: function() { return malli.generator._string_gen; } });
Object.defineProperty(module.exports, "_create_from_elements", { enumerable: false, get: function() { return malli.generator._create_from_elements; } });
Object.defineProperty(module.exports, "generator", { enumerable: false, get: function() { return malli.generator.generator; } });
//# sourceMappingURL=malli.generator.js.map
