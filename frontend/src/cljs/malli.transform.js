var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("malli.transform.js");

goog.provide('malli.transform');
malli.transform._STAR_max_compile_depth_STAR_ = (10);
/**
 * Utility function to convert input into an interceptor. Works with functions,
 *   map and sequence of those.
 */
malli.transform._interceptor = (function malli$transform$_interceptor(_QMARK_interceptor,schema__$1,options){
if(cljs.core.fn_QMARK_(_QMARK_interceptor)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),_QMARK_interceptor], null);
} else {
if(((cljs.core.map_QMARK_(_QMARK_interceptor)) && (cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"compile","compile",608186429))))){
var compiled = new cljs.core.Keyword("malli.transform","compiled","malli.transform/compiled",-1910053091).cljs$core$IFn$_invoke$arity$2(options,(0));
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.transform","compiled","malli.transform/compiled",-1910053091),(compiled + (1)));
if((compiled >= malli.transform._STAR_max_compile_depth_STAR_)){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.transform","too-deep-compilation","malli.transform/too-deep-compilation",-1157462070),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"this","this",-611633625),_QMARK_interceptor,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"options","options",99638489),options__$1], null));
} else {
}

var temp__5804__auto__ = (function (){var G__53509 = (function (){var fexpr__53512 = new cljs.core.Keyword(null,"compile","compile",608186429).cljs$core$IFn$_invoke$arity$1(_QMARK_interceptor);
return (fexpr__53512.cljs$core$IFn$_invoke$arity$2 ? fexpr__53512.cljs$core$IFn$_invoke$arity$2(schema__$1,options__$1) : fexpr__53512.call(null,schema__$1,options__$1));
})();
var G__53510 = schema__$1;
var G__53511 = options__$1;
return (malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3 ? malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3(G__53509,G__53510,G__53511) : malli.transform._interceptor.call(null,G__53509,G__53510,G__53511));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var interceptor = temp__5804__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_interceptor,new cljs.core.Keyword(null,"compile","compile",608186429)),interceptor], 0));
} else {
return null;
}
} else {
if(((cljs.core.map_QMARK_(_QMARK_interceptor)) && (((cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"enter","enter",1792452624))) || (cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"leave","leave",1022579443))))))){
return _QMARK_interceptor;
} else {
if(cljs.core.coll_QMARK_(_QMARK_interceptor)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p__53523,p__53524){
var map__53526 = p__53523;
var map__53526__$1 = cljs.core.__destructure_map(map__53526);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53526__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53526__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
var map__53527 = p__53524;
var map__53527__$1 = cljs.core.__destructure_map(map__53527);
var new_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53527__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var new_leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53527__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
var enter__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = enter;
if(cljs.core.truth_(and__5043__auto__)){
return new_enter;
} else {
return and__5043__auto__;
}
})())?(function (p1__53502_SHARP_){
var G__53528 = (enter.cljs$core$IFn$_invoke$arity$1 ? enter.cljs$core$IFn$_invoke$arity$1(p1__53502_SHARP_) : enter.call(null,p1__53502_SHARP_));
return (new_enter.cljs$core$IFn$_invoke$arity$1 ? new_enter.cljs$core$IFn$_invoke$arity$1(G__53528) : new_enter.call(null,G__53528));
}):(function (){var or__5045__auto__ = enter;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new_enter;
}
})());
var leave__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = leave;
if(cljs.core.truth_(and__5043__auto__)){
return new_leave;
} else {
return and__5043__auto__;
}
})())?(function (p1__53503_SHARP_){
var G__53529 = (new_leave.cljs$core$IFn$_invoke$arity$1 ? new_leave.cljs$core$IFn$_invoke$arity$1(p1__53503_SHARP_) : new_leave.call(null,p1__53503_SHARP_));
return (leave.cljs$core$IFn$_invoke$arity$1 ? leave.cljs$core$IFn$_invoke$arity$1(G__53529) : leave.call(null,G__53529));
}):(function (){var or__5045__auto__ = leave;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new_leave;
}
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),enter__$1,new cljs.core.Keyword(null,"leave","leave",1022579443),leave__$1], null);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__53504_SHARP_){
return (malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3 ? malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3(p1__53504_SHARP_,schema__$1,options) : malli.transform._interceptor.call(null,p1__53504_SHARP_,schema__$1,options));
}),_QMARK_interceptor));
} else {
if((_QMARK_interceptor == null)){
return null;
} else {
if(cljs.core.ifn_QMARK_(_QMARK_interceptor)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),_QMARK_interceptor], null);
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.transform","invalid-transformer","malli.transform/invalid-transformer",-1717093616),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),_QMARK_interceptor], null));

}
}
}
}
}
}
});
malli.transform._safe = (function malli$transform$_safe(f){
return (function (p1__53533_SHARP_){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__53533_SHARP_) : f.call(null,p1__53533_SHARP_));
}catch (e53538){if((e53538 instanceof Error)){
var _ = e53538;
return p1__53533_SHARP_;
} else {
throw e53538;

}
}});
});
malli.transform._string__GT_long = (function malli$transform$_string__GT_long(x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = (cljs.core.truth_(cljs.core.re_find(/\D/,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,(1))))?NaN:parseInt(x,(10)));
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
if((x_SINGLEQUOTE_ > Number.MAX_SAFE_INTEGER)){
return x;
} else {
if((x_SINGLEQUOTE_ < Number.MIN_SAFE_INTEGER)){
return x;
} else {
return x_SINGLEQUOTE_;

}
}
}
}catch (e53544){if((e53544 instanceof Error)){
var _ = e53544;
return x;
} else {
throw e53544;

}
}} else {
return x;
}
});
malli.transform._string__GT_double = (function malli$transform$_string__GT_double(x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
return x_SINGLEQUOTE_;
}
}catch (e53546){if((e53546 instanceof Error)){
var _ = e53546;
return x;
} else {
throw e53546;

}
}} else {
return x;
}
});
malli.transform._number__GT_double = (function malli$transform$_number__GT_double(x){
if(typeof x === 'number'){
return x;
} else {
return x;
}
});
malli.transform._string__GT_keyword = (function malli$transform$_string__GT_keyword(x){
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
malli.transform._string__GT_boolean = (function malli$transform$_string__GT_boolean(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",x)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",x)){
return false;
} else {
return x;

}
}
} else {
return x;
}
});
malli.transform._string__GT_uuid = (function malli$transform$_string__GT_uuid(x){
if(typeof x === 'string'){
try{if(cljs.core.truth_(cljs.core.re_find(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,x))){
return cljs.core.uuid(x);
} else {
return x;
}
}catch (e53554){if((e53554 instanceof Error)){
var _ = e53554;
return x;
} else {
throw e53554;

}
}} else {
return x;
}
});
malli.transform._string__GT_date = (function malli$transform$_string__GT_date(x){
if(typeof x === 'string'){
try{return (new Date(goog.date.UtcDateTime.fromIsoString(x).getTime()));
}catch (e53559){if((e53559 instanceof Error)){
var _ = e53559;
return x;
} else {
throw e53559;

}
}} else {
return x;
}
});
malli.transform._string__GT_symbol = (function malli$transform$_string__GT_symbol(x){
if(typeof x === 'string'){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
malli.transform._string__GT_nil = (function malli$transform$_string__GT_nil(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",x)){
return null;
} else {
return x;
}
});
malli.transform._any__GT_string = (function malli$transform$_any__GT_string(x){
if((x == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
});
malli.transform._any__GT_any = (function malli$transform$_any__GT_any(x){
return x;
});
malli.transform._date__GT_string = (function malli$transform$_date__GT_string(x){
if(cljs.core.inst_QMARK_(x)){
try{return x.toISOString();
}catch (e53569){if((e53569 instanceof Error)){
var _ = e53569;
return x;
} else {
throw e53569;

}
}} else {
return x;
}
});
malli.transform._transform_map_keys = (function malli$transform$_transform_map_keys(f){
return (function (p1__53570_SHARP_){
var G__53572 = p1__53570_SHARP_;
if(cljs.core.map_QMARK_(p1__53570_SHARP_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__53574){
var vec__53575 = p__53574;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53575,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53575,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null);
})),G__53572);
} else {
return G__53572;
}
});
});
malli.transform._transform_if_valid = (function malli$transform$_transform_if_valid(f,schema__$1){
var validator = malli.core._validator(schema__$1);
return (function (x){
var out = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(out) : validator.call(null,out)))){
return out;
} else {
return x;
}
});
});
malli.transform._sequential__GT_set = (function malli$transform$_sequential__GT_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.set(x);
} else {
return x;

}
}
});
malli.transform._sequential__GT_vector = (function malli$transform$_sequential__GT_vector(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return x;

}
}
});
malli.transform._sequential_or_set__GT_vector = (function malli$transform$_sequential_or_set__GT_vector(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.set_QMARK_(x)){
return cljs.core.vec(x);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return x;

}
}
}
});
malli.transform._sequential_or_set__GT_seq = (function malli$transform$_sequential_or_set__GT_seq(x){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.seq(x);
} else {
if(cljs.core.set_QMARK_(x)){
return cljs.core.seq(x);
} else {
return x;

}
}
});
malli.transform._infer_child_decoder_compiler = (function malli$transform$_infer_child_decoder_compiler(schema__$1,_){
var G__53588 = malli.core._infer(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1));
var fexpr__53587 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keyword","keyword",811389747),malli.transform._string__GT_keyword,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),malli.transform._string__GT_symbol,new cljs.core.Keyword(null,"int","int",-1741416922),malli.transform._string__GT_long,new cljs.core.Keyword(null,"double","double",884886883),malli.transform._string__GT_double], null);
return (fexpr__53587.cljs$core$IFn$_invoke$arity$1 ? fexpr__53587.cljs$core$IFn$_invoke$arity$1(G__53588) : fexpr__53587.call(null,G__53588));
});
malli.transform._json_decoders = (function malli$transform$_json_decoders(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Keyword(null,"=","=",1152933628)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),malli.transform._infer_child_decoder_compiler], null),malli.transform._string__GT_symbol,malli.transform._string__GT_keyword,malli.transform._number__GT_double,malli.transform._string__GT_uuid,malli.transform._string__GT_date,malli.transform._string__GT_keyword,malli.transform._string__GT_symbol,malli.transform._string__GT_keyword,malli.transform._string__GT_keyword,malli.transform._string__GT_symbol,malli.transform._string__GT_keyword,malli.transform._string__GT_keyword,malli.transform._string__GT_symbol,malli.transform._string__GT_keyword,malli.transform._string__GT_keyword,malli.transform._string__GT_symbol,malli.transform._string__GT_uuid,malli.transform._sequential__GT_set,malli.transform._number__GT_double,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),malli.transform._infer_child_decoder_compiler], null)]);
});
malli.transform._json_encoders = (function malli$transform$_json_encoders(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)],[malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.transform._date__GT_string,malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string]);
});
malli.transform._string_decoders = (function malli$transform$_string_decoders(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.transform._json_decoders(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)],[malli.transform._string__GT_boolean,malli.transform._string__GT_long,malli.transform._string__GT_double,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_double,malli.transform._string__GT_boolean,malli.transform._string__GT_long,malli.transform._sequential__GT_vector,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._transform_map_keys(malli.core._keyword__GT_string),malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_boolean,malli.transform._string__GT_double,malli.transform._string__GT_double,malli.transform._string__GT_boolean,malli.transform._string__GT_long,malli.transform._string__GT_long])], 0));
});
malli.transform._string_encoders = (function malli$transform$_string_encoders(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.transform._json_encoders(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"double","double",-1769548886,null),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)],[malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string])], 0));
});

/**
* @constructor
 * @implements {malli.core.Transformer}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.transform.t_malli$transform53615 = (function (_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,meta53616){
this._QMARK_transformers = _QMARK_transformers;
this.__GT_data = __GT_data;
this.__GT_eval = __GT_eval;
this.__GT_chain = __GT_chain;
this.chain = chain;
this.chain_SINGLEQUOTE_ = chain_SINGLEQUOTE_;
this.meta53616 = meta53616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.transform.t_malli$transform53615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53617,meta53616__$1){
var self__ = this;
var _53617__$1 = this;
return (new malli.transform.t_malli$transform53615(self__._QMARK_transformers,self__.__GT_data,self__.__GT_eval,self__.__GT_chain,self__.chain,self__.chain_SINGLEQUOTE_,meta53616__$1));
}));

(malli.transform.t_malli$transform53615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53617){
var self__ = this;
var _53617__$1 = this;
return self__.meta53616;
}));

(malli.transform.t_malli$transform53615.prototype.malli$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(malli.transform.t_malli$transform53615.prototype.malli$core$Transformer$_transformer_chain$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.chain;
}));

(malli.transform.t_malli$transform53615.prototype.malli$core$Transformer$_value_transformer$arity$4 = (function (_,schema__$1,method,options){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__53623){
var map__53624 = p__53623;
var map__53624__$1 = cljs.core.__destructure_map(map__53624);
var map__53625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53624__$1,method);
var map__53625__$1 = cljs.core.__destructure_map(map__53625);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53625__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53625__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53625__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var options__$1 = (function (){var or__5045__auto__ = options;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return malli.core.options.cljs$core$IFn$_invoke$arity$1(schema__$1);
}
})();
var from = (function (f){
return (function (p1__53599_SHARP_){
var G__53626 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(schema__$1) : f.call(null,schema__$1)),p1__53599_SHARP_);
if((G__53626 == null)){
return null;
} else {
return (self__.__GT_eval.cljs$core$IFn$_invoke$arity$2 ? self__.__GT_eval.cljs$core$IFn$_invoke$arity$2(G__53626,options__$1) : self__.__GT_eval.call(null,G__53626,options__$1));
}
});
});
var from_properties = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(from(malli.core.properties),from(malli.core.type_properties));
var temp__5802__auto__ = (function (){var or__5045__auto__ = cljs.core.some(from_properties,keys);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(transformers,malli.core.type.cljs$core$IFn$_invoke$arity$1(schema__$1));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return default$;
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var _QMARK_interceptor = temp__5802__auto__;
var interceptor = malli.transform._interceptor(_QMARK_interceptor,schema__$1,options__$1);
if((acc == null)){
return interceptor;
} else {
return malli.transform._interceptor(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,interceptor], null),schema__$1,options__$1);
}
} else {
return acc;
}
}),null,self__.chain_SINGLEQUOTE_);
}));

(malli.transform.t_malli$transform53615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?transformers","?transformers",1611212010,null),new cljs.core.Symbol(null,"->data","->data",912474639,null),new cljs.core.Symbol(null,"->eval","->eval",1090195269,null),new cljs.core.Symbol(null,"->chain","->chain",923961567,null),new cljs.core.Symbol(null,"chain","chain",1656162556,null),new cljs.core.Symbol(null,"chain'","chain'",-156051191,null),new cljs.core.Symbol(null,"meta53616","meta53616",-2069204374,null)], null);
}));

(malli.transform.t_malli$transform53615.cljs$lang$type = true);

(malli.transform.t_malli$transform53615.cljs$lang$ctorStr = "malli.transform/t_malli$transform53615");

(malli.transform.t_malli$transform53615.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.transform/t_malli$transform53615");
}));

/**
 * Positional factory function for malli.transform/t_malli$transform53615.
 */
malli.transform.__GT_t_malli$transform53615 = (function malli$transform$__GT_t_malli$transform53615(_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,meta53616){
return (new malli.transform.t_malli$transform53615(_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,meta53616));
});


malli.transform.transformer = (function malli$transform$transformer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53781 = arguments.length;
var i__5770__auto___53782 = (0);
while(true){
if((i__5770__auto___53782 < len__5769__auto___53781)){
args__5775__auto__.push((arguments[i__5770__auto___53782]));

var G__53784 = (i__5770__auto___53782 + (1));
i__5770__auto___53782 = G__53784;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_transformers){
var __GT_data = (function (ts,default$,name,key){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),ts,new cljs.core.Keyword(null,"default","default",-1987822328),default$,new cljs.core.Keyword(null,"keys","keys",1068423698),(cljs.core.truth_(name)?(function (){var G__53605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),name], null)], null);
if((!(cljs.core.qualified_keyword_QMARK_(name)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53605,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(key,cljs.core.name(name))], null));
} else {
return G__53605;
}
})():null)], null);
});
var __GT_eval = (function (x,options){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (x__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x__$1,k,malli.core.eval.cljs$core$IFn$_invoke$arity$2(v,options));
}),x,x);
} else {
return malli.core.eval.cljs$core$IFn$_invoke$arity$1(x);
}
});
var __GT_chain = malli.core._comp.cljs$core$IFn$_invoke$arity$2(malli.core._transformer_chain,malli.core._into_transformer);
var chain = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__53597_SHARP_){
if(cljs.core.map_QMARK_(p1__53597_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53597_SHARP_], null);
} else {
return __GT_chain(p1__53597_SHARP_);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,_QMARK_transformers)], 0)));
var chain_SINGLEQUOTE_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53598_SHARP_){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__53598_SHARP_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decode","decode",-1306165281),__GT_data(new cljs.core.Keyword(null,"decoders","decoders",1132818244).cljs$core$IFn$_invoke$arity$1(p1__53598_SHARP_),new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161).cljs$core$IFn$_invoke$arity$1(p1__53598_SHARP_),name,"decode"),new cljs.core.Keyword(null,"encode","encode",-1753429702),__GT_data(new cljs.core.Keyword(null,"encoders","encoders",-111722908).cljs$core$IFn$_invoke$arity$1(p1__53598_SHARP_),new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207).cljs$core$IFn$_invoke$arity$1(p1__53598_SHARP_),name,"encode")], null);
}),chain);
if(cljs.core.seq(chain)){
return (new malli.transform.t_malli$transform53615(_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
}));

(malli.transform.transformer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.transform.transformer.cljs$lang$applyTo = (function (seq53600){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53600));
}));

malli.transform.json_transformer = (function malli$transform$json_transformer(var_args){
var G__53629 = arguments.length;
switch (G__53629) {
case 0:
return malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$1 = (function (p__53630){
var map__53631 = p__53630;
var map__53631__$1 = cljs.core.__destructure_map(map__53631);
var json_vectors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53631__$1,new cljs.core.Keyword("malli.transform","json-vectors","malli.transform/json-vectors",-1108071835));
var map_of_key_decoders = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53631__$1,new cljs.core.Keyword("malli.transform","map-of-key-decoders","malli.transform/map-of-key-decoders",-1029175759),malli.transform._string_decoders());
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoders","decoders",1132818244),(function (){var G__53637 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(malli.transform._json_decoders(),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema__$1,_){
var key_schema = (function (){var G__53638 = schema__$1;
var G__53638__$1 = (((G__53638 == null))?null:malli.core.children.cljs$core$IFn$_invoke$arity$1(G__53638));
if((G__53638__$1 == null)){
return null;
} else {
return cljs.core.first(G__53638__$1);
}
})();
var or__5045__auto__ = (function (){var G__53639 = key_schema;
var G__53639__$1 = (((G__53639 == null))?null:malli.core.type.cljs$core$IFn$_invoke$arity$1(G__53639));
var G__53639__$2 = (((G__53639__$1 == null))?null:(map_of_key_decoders.cljs$core$IFn$_invoke$arity$1 ? map_of_key_decoders.cljs$core$IFn$_invoke$arity$1(G__53639__$1) : map_of_key_decoders.call(null,G__53639__$1)));
var G__53639__$3 = (((G__53639__$2 == null))?null:malli.transform._interceptor(G__53639__$2,schema__$1,cljs.core.PersistentArrayMap.EMPTY));
var G__53639__$4 = (((G__53639__$3 == null))?null:malli.core._intercepting.cljs$core$IFn$_invoke$arity$1(G__53639__$3));
var G__53639__$5 = (((G__53639__$4 == null))?null:malli.core._comp.cljs$core$IFn$_invoke$arity$2(G__53639__$4,malli.core._keyword__GT_string));
var G__53639__$6 = (((G__53639__$5 == null))?null:malli.transform._transform_if_valid(G__53639__$5,key_schema));
if((G__53639__$6 == null)){
return null;
} else {
return malli.transform._transform_map_keys(G__53639__$6);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return malli.transform._transform_map_keys(malli.core._keyword__GT_string);
}
})], null));
if(cljs.core.truth_(json_vectors)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53637,new cljs.core.Keyword(null,"vector","vector",1902966158),malli.transform._sequential__GT_vector);
} else {
return G__53637;
}
})(),new cljs.core.Keyword(null,"encoders","encoders",-111722908),malli.transform._json_encoders()], null)], 0));
}));

(malli.transform.json_transformer.cljs$lang$maxFixedArity = 1);

malli.transform.string_transformer = (function malli$transform$string_transformer(){
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"decoders","decoders",1132818244),malli.transform._string_decoders(),new cljs.core.Keyword(null,"encoders","encoders",-111722908),malli.transform._string_encoders()], null)], 0));
});
malli.transform.strip_extra_keys_transformer = (function malli$transform$strip_extra_keys_transformer(var_args){
var G__53655 = arguments.length;
switch (G__53655) {
case 0:
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1 = (function (p__53657){
var map__53658 = p__53657;
var map__53658__$1 = cljs.core.__destructure_map(map__53658);
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53658__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),malli.core._comp.cljs$core$IFn$_invoke$arity$3((function (p1__53646_SHARP_){
return (((p1__53646_SHARP_ == null)) || (p1__53646_SHARP_ === true));
}),new cljs.core.Keyword(null,"closed","closed",-919675359),malli.core.properties));
var transform = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema__$1,_){
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(schema__$1) : accept.call(null,schema__$1)))){
var temp__5804__auto__ = (function (){var G__53659 = schema__$1;
var G__53659__$1 = (((G__53659 == null))?null:malli.core.entries.cljs$core$IFn$_invoke$arity$1(G__53659));
var G__53659__$2 = (((G__53659__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,G__53659__$1));
var G__53659__$3 = (((G__53659__$2 == null))?null:cljs.core.seq(G__53659__$2));
if((G__53659__$3 == null)){
return null;
} else {
return cljs.core.set(G__53659__$3);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var ks = temp__5804__auto__;
return (function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,k,___$1){
if(cljs.core.not((ks.cljs$core$IFn$_invoke$arity$1 ? ks.cljs$core$IFn$_invoke$arity$1(k) : ks.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),x,x);
} else {
return x;
}
});
} else {
return null;
}
} else {
return null;
}
})], null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),transform], null),new cljs.core.Keyword(null,"encoders","encoders",-111722908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),transform], null)], null)], 0));
}));

(malli.transform.strip_extra_keys_transformer.cljs$lang$maxFixedArity = 1);

malli.transform.key_transformer = (function malli$transform$key_transformer(p__53669){
var map__53670 = p__53669;
var map__53670__$1 = cljs.core.__destructure_map(map__53670);
var decode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53670__$1,new cljs.core.Keyword(null,"decode","decode",-1306165281));
var encode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53670__$1,new cljs.core.Keyword(null,"encode","encode",-1753429702));
var types = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53670__$1,new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),null], null), null));
var transform = (function (f,stage){
if(cljs.core.truth_(f)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([stage,malli.transform._transform_map_keys(f)]);
} else {
return null;
}
});
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(types))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),cljs.core.zipmap(types,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(transform(decode,new cljs.core.Keyword(null,"enter","enter",1792452624)))),new cljs.core.Keyword(null,"encoders","encoders",-111722908),cljs.core.zipmap(types,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(transform(encode,new cljs.core.Keyword(null,"leave","leave",1022579443))))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),types))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161),transform(decode,new cljs.core.Keyword(null,"enter","enter",1792452624)),new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),transform(encode,new cljs.core.Keyword(null,"leave","leave",1022579443))], null):null))], 0));
});
malli.transform.default_value_transformer = (function malli$transform$default_value_transformer(var_args){
var G__53678 = arguments.length;
switch (G__53678) {
case 0:
return malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$1 = (function (p__53681){
var map__53682 = p__53681;
var map__53682__$1 = cljs.core.__destructure_map(map__53682);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53682__$1,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"default","default",-1987822328));
var default_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53682__$1,new cljs.core.Keyword(null,"default-fn","default-fn",-473729550),(function (_,x){
return x;
}));
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53682__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var add_optional_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53682__$1,new cljs.core.Keyword("malli.transform","add-optional-keys","malli.transform/add-optional-keys",964281447));
var get_default = (function (schema__$1){
var temp__5806__auto__ = (function (){var G__53685 = schema__$1;
var G__53685__$1 = (((G__53685 == null))?null:malli.core.properties.cljs$core$IFn$_invoke$arity$1(G__53685));
if((G__53685__$1 == null)){
return null;
} else {
return cljs.core.find(G__53685__$1,key);
}
})();
if((temp__5806__auto__ == null)){
var G__53686 = schema__$1;
var G__53686__$1 = (((G__53686 == null))?null:malli.core.type.cljs$core$IFn$_invoke$arity$1(G__53686));
var G__53686__$2 = (((G__53686__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,G__53686__$1));
if((G__53686__$2 == null)){
return null;
} else {
return (function (p1__53675_SHARP_){
return cljs.core.constantly((p1__53675_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53675_SHARP_.cljs$core$IFn$_invoke$arity$1(schema__$1) : p1__53675_SHARP_.call(null,schema__$1)));
})(G__53686__$2);
}
} else {
var e = temp__5806__auto__;
return cljs.core.constantly(cljs.core.val(e));
}
});
var set_default = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema__$1,_){
var temp__5808__auto__ = get_default(schema__$1);
if((temp__5808__auto__ == null)){
return null;
} else {
var f = temp__5808__auto__;
return (function (x){
if((x == null)){
var G__53690 = schema__$1;
var G__53691 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
return (default_fn.cljs$core$IFn$_invoke$arity$2 ? default_fn.cljs$core$IFn$_invoke$arity$2(G__53690,G__53691) : default_fn.call(null,G__53690,G__53691));
} else {
return x;
}
});
}
})], null);
var add_defaults = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema__$1,_){
var defaults__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__53697){
var vec__53699 = p__53697;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53699,(0),null);
var map__53702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53699,(1),null);
var map__53702__$1 = cljs.core.__destructure_map(map__53702);
var p = map__53702__$1;
var optional = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53702__$1,new cljs.core.Keyword(null,"optional","optional",2053951509));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53699,(2),null);
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.not(optional);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return add_optional_keys;
}
})())){
var e = cljs.core.find(p,key);
var temp__5808__auto__ = (cljs.core.truth_(e)?cljs.core.constantly(cljs.core.val(e)):get_default(v));
if((temp__5808__auto__ == null)){
return null;
} else {
var f = temp__5808__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){
var G__53706 = schema__$1;
var G__53707 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
return (default_fn.cljs$core$IFn$_invoke$arity$2 ? default_fn.cljs$core$IFn$_invoke$arity$2(G__53706,G__53707) : default_fn.call(null,G__53706,G__53707));
})], null);
}
} else {
return null;
}
})),malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1));
if(cljs.core.seq(defaults__$1)){
return (function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,k,f){
if((!(cljs.core.contains_QMARK_(x,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
} else {
return acc;
}
}),x,defaults__$1);
} else {
return x;
}
});
} else {
return null;
}
})], null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161),set_default,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),set_default], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),add_defaults], null),new cljs.core.Keyword(null,"encoders","encoders",-111722908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),add_defaults], null)], null)], 0));
}));

(malli.transform.default_value_transformer.cljs$lang$maxFixedArity = 1);

malli.transform.collection_transformer = (function malli$transform$collection_transformer(){
var coders = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vector","vector",1902966158),malli.transform._sequential_or_set__GT_vector,new cljs.core.Keyword(null,"sequential","sequential",-1082983960),malli.transform._sequential_or_set__GT_seq,new cljs.core.Keyword(null,"set","set",304602554),malli.transform._sequential__GT_set,new cljs.core.Keyword(null,"tuple","tuple",-472667284),malli.transform._sequential__GT_vector], null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),coders,new cljs.core.Keyword(null,"encoders","encoders",-111722908),coders], null)], 0));
});
Object.defineProperty(module.exports, "_safe", { enumerable: false, get: function() { return malli.transform._safe; } });
Object.defineProperty(module.exports, "_sequential_or_set__GT_vector", { enumerable: false, get: function() { return malli.transform._sequential_or_set__GT_vector; } });
Object.defineProperty(module.exports, "_transform_map_keys", { enumerable: false, get: function() { return malli.transform._transform_map_keys; } });
Object.defineProperty(module.exports, "_string_encoders", { enumerable: false, get: function() { return malli.transform._string_encoders; } });
Object.defineProperty(module.exports, "key_transformer", { enumerable: false, get: function() { return malli.transform.key_transformer; } });
Object.defineProperty(module.exports, "_any__GT_string", { enumerable: false, get: function() { return malli.transform._any__GT_string; } });
Object.defineProperty(module.exports, "_string__GT_keyword", { enumerable: false, get: function() { return malli.transform._string__GT_keyword; } });
Object.defineProperty(module.exports, "string_transformer", { enumerable: false, get: function() { return malli.transform.string_transformer; } });
Object.defineProperty(module.exports, "_string__GT_nil", { enumerable: false, get: function() { return malli.transform._string__GT_nil; } });
Object.defineProperty(module.exports, "json_transformer", { enumerable: false, get: function() { return malli.transform.json_transformer; } });
Object.defineProperty(module.exports, "default_value_transformer", { enumerable: false, get: function() { return malli.transform.default_value_transformer; } });
Object.defineProperty(module.exports, "_string__GT_symbol", { enumerable: false, get: function() { return malli.transform._string__GT_symbol; } });
Object.defineProperty(module.exports, "_sequential__GT_set", { enumerable: false, get: function() { return malli.transform._sequential__GT_set; } });
Object.defineProperty(module.exports, "_string__GT_long", { enumerable: false, get: function() { return malli.transform._string__GT_long; } });
Object.defineProperty(module.exports, "transformer", { enumerable: false, get: function() { return malli.transform.transformer; } });
Object.defineProperty(module.exports, "t_malli$transform53615", { enumerable: false, get: function() { return malli.transform.t_malli$transform53615; } });
Object.defineProperty(module.exports, "_sequential__GT_vector", { enumerable: false, get: function() { return malli.transform._sequential__GT_vector; } });
Object.defineProperty(module.exports, "_string__GT_date", { enumerable: false, get: function() { return malli.transform._string__GT_date; } });
Object.defineProperty(module.exports, "_sequential_or_set__GT_seq", { enumerable: false, get: function() { return malli.transform._sequential_or_set__GT_seq; } });
Object.defineProperty(module.exports, "_number__GT_double", { enumerable: false, get: function() { return malli.transform._number__GT_double; } });
Object.defineProperty(module.exports, "_json_encoders", { enumerable: false, get: function() { return malli.transform._json_encoders; } });
Object.defineProperty(module.exports, "__GT_t_malli$transform53615", { enumerable: false, get: function() { return malli.transform.__GT_t_malli$transform53615; } });
Object.defineProperty(module.exports, "_string__GT_boolean", { enumerable: false, get: function() { return malli.transform._string__GT_boolean; } });
Object.defineProperty(module.exports, "collection_transformer", { enumerable: false, get: function() { return malli.transform.collection_transformer; } });
Object.defineProperty(module.exports, "_json_decoders", { enumerable: false, get: function() { return malli.transform._json_decoders; } });
Object.defineProperty(module.exports, "_STAR_max_compile_depth_STAR_", { enumerable: false, get: function() { return malli.transform._STAR_max_compile_depth_STAR_; } });
Object.defineProperty(module.exports, "strip_extra_keys_transformer", { enumerable: false, get: function() { return malli.transform.strip_extra_keys_transformer; } });
Object.defineProperty(module.exports, "_interceptor", { enumerable: false, get: function() { return malli.transform._interceptor; } });
Object.defineProperty(module.exports, "_date__GT_string", { enumerable: false, get: function() { return malli.transform._date__GT_string; } });
Object.defineProperty(module.exports, "_string__GT_double", { enumerable: false, get: function() { return malli.transform._string__GT_double; } });
Object.defineProperty(module.exports, "_infer_child_decoder_compiler", { enumerable: false, get: function() { return malli.transform._infer_child_decoder_compiler; } });
Object.defineProperty(module.exports, "_string_decoders", { enumerable: false, get: function() { return malli.transform._string_decoders; } });
Object.defineProperty(module.exports, "_string__GT_uuid", { enumerable: false, get: function() { return malli.transform._string__GT_uuid; } });
Object.defineProperty(module.exports, "_transform_if_valid", { enumerable: false, get: function() { return malli.transform._transform_if_valid; } });
Object.defineProperty(module.exports, "_any__GT_any", { enumerable: false, get: function() { return malli.transform._any__GT_any; } });
//# sourceMappingURL=malli.transform.js.map
