var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
require("./malli.transform.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.domain_entities.converters.js");

goog.provide('metabase.domain_entities.converters');
metabase.domain_entities.converters.decode_map = (function metabase$domain_entities$converters$decode_map(schema__$1,_){
var by_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$domain_entities$converters$decode_map_$_iter__56829(s__56830){
return (new cljs.core.LazySeq(null,(function (){
var s__56830__$1 = s__56830;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56830__$1);
if(temp__5804__auto__){
var s__56830__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56830__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56830__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56832 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56831 = (0);
while(true){
if((i__56831 < size__5522__auto__)){
var vec__56842 = cljs.core._nth(c__5521__auto__,i__56831);
var map_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56842,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56842,(1),null);
cljs.core.chunk_append(b__56832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("js","prop","js/prop",-515165077));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.util.__GT_snake_case_en(metabase.util.qualified_name(map_key));
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-key","map-key",1899483661),map_key], null)], null));

var G__57001 = (i__56831 + (1));
i__56831 = G__57001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56832),metabase$domain_entities$converters$decode_map_$_iter__56829(cljs.core.chunk_rest(s__56830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56832),null);
}
} else {
var vec__56846 = cljs.core.first(s__56830__$2);
var map_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56846,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56846,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("js","prop","js/prop",-515165077));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.util.__GT_snake_case_en(metabase.util.qualified_name(map_key));
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-key","map-key",1899483661),map_key], null)], null),metabase$domain_entities$converters$decode_map_$_iter__56829(cljs.core.rest(s__56830__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1));
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (x){
if(cljs.core.map_QMARK_(x)){
return x;
} else {
if(cljs.core.object_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$domain_entities$converters$decode_map_$_iter__56852(s__56853){
return (new cljs.core.LazySeq(null,(function (){
var s__56853__$1 = s__56853;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56853__$1);
if(temp__5804__auto__){
var s__56853__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56853__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56853__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56855 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56854 = (0);
while(true){
if((i__56854 < size__5522__auto__)){
var prop = cljs.core._nth(c__5521__auto__,i__56854);
var js_val = (x[prop]);
var map_key = (function (){var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(by_prop,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,new cljs.core.Keyword(null,"map-key","map-key",1899483661)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(metabase.util.__GT_kebab_case_en(prop));
}
})();
cljs.core.chunk_append(b__56855,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [map_key,js_val], null));

var G__57006 = (i__56854 + (1));
i__56854 = G__57006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56855),metabase$domain_entities$converters$decode_map_$_iter__56852(cljs.core.chunk_rest(s__56853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56855),null);
}
} else {
var prop = cljs.core.first(s__56853__$2);
var js_val = (x[prop]);
var map_key = (function (){var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(by_prop,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,new cljs.core.Keyword(null,"map-key","map-key",1899483661)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(metabase.util.__GT_kebab_case_en(prop));
}
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [map_key,js_val], null),metabase$domain_entities$converters$decode_map_$_iter__56852(cljs.core.rest(s__56853__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.js_keys(x));
})());
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"leave","leave",1022579443),(function (x){
if(cljs.core.object_QMARK_(x)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("decode-map leaving with a JS object not a CLJS map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.form.cljs$core$IFn$_invoke$arity$1(schema__$1)], null));
} else {
return x;
}
})], null);
});
metabase.domain_entities.converters.infer_child_decoder = (function metabase$domain_entities$converters$infer_child_decoder(schema__$1,_){
var mapping = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$domain_entities$converters$infer_child_decoder_$_iter__56867(s__56868){
return (new cljs.core.LazySeq(null,(function (){
var s__56868__$1 = s__56868;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56868__$1);
if(temp__5804__auto__){
var s__56868__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56868__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56868__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56870 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56869 = (0);
while(true){
if((i__56869 < size__5522__auto__)){
var c = cljs.core._nth(c__5521__auto__,i__56869);
cljs.core.chunk_append(b__56870,(((c instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(c),c], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null)));

var G__57009 = (i__56869 + (1));
i__56869 = G__57009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56870),metabase$domain_entities$converters$infer_child_decoder_$_iter__56867(cljs.core.chunk_rest(s__56868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56870),null);
}
} else {
var c = cljs.core.first(s__56868__$2);
return cljs.core.cons((((c instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(c),c], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null)),metabase$domain_entities$converters$infer_child_decoder_$_iter__56867(cljs.core.rest(s__56868__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1));
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__56865_SHARP_){
return (mapping.cljs$core$IFn$_invoke$arity$2 ? mapping.cljs$core$IFn$_invoke$arity$2(p1__56865_SHARP_,p1__56865_SHARP_) : mapping.call(null,p1__56865_SHARP_,p1__56865_SHARP_));
})], null);
});
metabase.domain_entities.converters.infer_child_encoder = (function metabase$domain_entities$converters$infer_child_encoder(schema__$1,_){
var mapping = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$domain_entities$converters$infer_child_encoder_$_iter__56882(s__56883){
return (new cljs.core.LazySeq(null,(function (){
var s__56883__$1 = s__56883;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56883__$1);
if(temp__5804__auto__){
var s__56883__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56883__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56883__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56885 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56884 = (0);
while(true){
if((i__56884 < size__5522__auto__)){
var c = cljs.core._nth(c__5521__auto__,i__56884);
cljs.core.chunk_append(b__56885,(((c instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.name(c)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null)));

var G__57019 = (i__56884 + (1));
i__56884 = G__57019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56885),metabase$domain_entities$converters$infer_child_encoder_$_iter__56882(cljs.core.chunk_rest(s__56883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56885),null);
}
} else {
var c = cljs.core.first(s__56883__$2);
return cljs.core.cons((((c instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.name(c)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null)),metabase$domain_entities$converters$infer_child_encoder_$_iter__56882(cljs.core.rest(s__56883__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1));
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__56879_SHARP_){
return (mapping.cljs$core$IFn$_invoke$arity$2 ? mapping.cljs$core$IFn$_invoke$arity$2(p1__56879_SHARP_,p1__56879_SHARP_) : mapping.call(null,p1__56879_SHARP_,p1__56879_SHARP_));
})], null);
});
metabase.domain_entities.converters.decode_map_of = (function metabase$domain_entities$converters$decode_map_of(keydec,x){
if(cljs.core.map_QMARK_(x)){
return x;
} else {
if(cljs.core.object_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$domain_entities$converters$decode_map_of_$_iter__56902(s__56903){
return (new cljs.core.LazySeq(null,(function (){
var s__56903__$1 = s__56903;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56903__$1);
if(temp__5804__auto__){
var s__56903__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56903__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56903__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56905 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56904 = (0);
while(true){
if((i__56904 < size__5522__auto__)){
var prop = cljs.core._nth(c__5521__auto__,i__56904);
cljs.core.chunk_append(b__56905,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keydec.cljs$core$IFn$_invoke$arity$1 ? keydec.cljs$core$IFn$_invoke$arity$1(prop) : keydec.call(null,prop)),(x[prop])], null));

var G__57028 = (i__56904 + (1));
i__56904 = G__57028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56905),metabase$domain_entities$converters$decode_map_of_$_iter__56902(cljs.core.chunk_rest(s__56903__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56905),null);
}
} else {
var prop = cljs.core.first(s__56903__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keydec.cljs$core$IFn$_invoke$arity$1 ? keydec.cljs$core$IFn$_invoke$arity$1(prop) : keydec.call(null,prop)),(x[prop])], null),metabase$domain_entities$converters$decode_map_of_$_iter__56902(cljs.core.rest(s__56903__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(Object.keys(x));
})());
} else {
return null;
}
}
});
metabase.domain_entities.converters.encode_map = (function metabase$domain_entities$converters$encode_map(x,keyenc){
if(cljs.core.object_QMARK_(x)){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (obj,k,v){
(obj[(keyenc.cljs$core$IFn$_invoke$arity$1 ? keyenc.cljs$core$IFn$_invoke$arity$1(k) : keyenc.call(null,k))] = v);

return obj;
}),({}),x);
} else {
return null;
}
}
});
metabase.domain_entities.converters.identity_transformers = cljs.core.zipmap(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Keyword(null,"float","float",-1732389368)], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),cljs.core.identity], null)));
/**
 * Malli transformer for converting JavaScript data to and from CLJS data.
 * 
 *   This is a bit more flexible than a JSON transformer. In particular, it normalizes the keys of `:map`
 *   schema objects to `:kebab-case-keywords`, and restores them to strings with the original spelling when
 *   converting back.
 * 
 *   **On keyword conversion**
 * 
 *   Note that `"snake_case"` is the default spelling we expect in the JS data.
 *   This can be overridden with the `{:js/prop "correctSpelling"}` property on the schema, eg.
 *   ```
 *   [:map
 * [:camel-case {:js/prop "camelCase"} string?]
 * [:kebab-case {:js/prop "kebab-case"} number?]
 * [:snake-case [:enum "foo" "bar"]]]
 *   ```
 * 
 *   Observe that `:snake-case` does not need a `:js/prop` setting, since that is the default.
 * 
 *   **On `:map-of`**
 * 
 *   Note that `:map-of` is not `:map`. The spelling of the keys in a `:map-of` is not changed. If the key
 *   schema is `keyword?`, they will be converted to keywords and back, but with the original spelling.
 * 
 *   **On sequences**
 *   `:tuple`, `:vector` and `:sequential` all get transformed into CLJS vectors. When converting back to JS,
 *   they are JS arrays.
 */
metabase.domain_entities.converters.js_transformer = malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"decoders","decoders",1132818244),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.domain_entities.converters.identity_transformers,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"map","map",1371690461)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),metabase.domain_entities.converters.infer_child_decoder], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__56929_SHARP_){
var and__5043__auto__ = p1__56929_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.vec(p1__56929_SHARP_);
} else {
return and__5043__auto__;
}
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__56927_SHARP_){
var and__5043__auto__ = p1__56927_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.vec(p1__56927_SHARP_);
} else {
return and__5043__auto__;
}
})], null),cljs.core.keyword,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__56928_SHARP_){
var and__5043__auto__ = p1__56928_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.vec(p1__56928_SHARP_);
} else {
return and__5043__auto__;
}
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__56926_SHARP_){
var and__5043__auto__ = p1__56926_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.vec(p1__56926_SHARP_);
} else {
return and__5043__auto__;
}
})], null),cljs.core.keyword,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema__$1,_){
var vec__56939 = malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1);
var key_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56939,(0),null);
var keydec = malli.core.decoder.cljs$core$IFn$_invoke$arity$2(key_schema,metabase.domain_entities.converters.js_transformer);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__56931_SHARP_){
return metabase.domain_entities.converters.decode_map_of(keydec,p1__56931_SHARP_);
})], null);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__56930_SHARP_){
var and__5043__auto__ = p1__56930_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.vec(p1__56930_SHARP_);
} else {
return and__5043__auto__;
}
})], null),cljs.core.keyword,cljs.core.parse_uuid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),metabase.domain_entities.converters.infer_child_decoder], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),metabase.domain_entities.converters.decode_map], null)])], 0)),new cljs.core.Keyword(null,"encoders","encoders",-111722908),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.domain_entities.converters.identity_transformers,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"map","map",1371690461)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),metabase.domain_entities.converters.infer_child_encoder], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.clj__GT_js], null),(function (p1__56932_SHARP_){
return [cljs.core.namespace(p1__56932_SHARP_),"/",cljs.core.name(p1__56932_SHARP_)].join('');
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.clj__GT_js], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.clj__GT_js], null),cljs.core.name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),(function (p1__56935_SHARP_){
return metabase.domain_entities.converters.encode_map(p1__56935_SHARP_,cljs.core.name);
})], null),cljs.core.name,cljs.core.str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),metabase.domain_entities.converters.infer_child_encoder], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema__$1,_){
var js_props = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$domain_entities$converters$iter__56947(s__56948){
return (new cljs.core.LazySeq(null,(function (){
var s__56948__$1 = s__56948;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56948__$1);
if(temp__5804__auto__){
var s__56948__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56948__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56948__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56950 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56949 = (0);
while(true){
if((i__56949 < size__5522__auto__)){
var vec__56962 = cljs.core._nth(c__5521__auto__,i__56949);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword("js","prop","js/prop",-515165077).cljs$core$IFn$_invoke$arity$1(props))){
cljs.core.chunk_append(b__56950,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("js","prop","js/prop",-515165077).cljs$core$IFn$_invoke$arity$1(props)], null));

var G__57041 = (i__56949 + (1));
i__56949 = G__57041;
continue;
} else {
var G__57042 = (i__56949 + (1));
i__56949 = G__57042;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56950),metabase$domain_entities$converters$iter__56947(cljs.core.chunk_rest(s__56948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56950),null);
}
} else {
var vec__56971 = cljs.core.first(s__56948__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56971,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56971,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword("js","prop","js/prop",-515165077).cljs$core$IFn$_invoke$arity$1(props))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("js","prop","js/prop",-515165077).cljs$core$IFn$_invoke$arity$1(props)], null),metabase$domain_entities$converters$iter__56947(cljs.core.rest(s__56948__$2)));
} else {
var G__57043 = cljs.core.rest(s__56948__$2);
s__56948__$1 = G__57043;
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
return iter__5523__auto__(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1));
})());
var keyenc = (function (k){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_props,k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.util.__GT_snake_case_en(metabase.util.qualified_name(k));
}
});
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),(function (p1__56933_SHARP_){
return metabase.domain_entities.converters.encode_map(p1__56933_SHARP_,keyenc);
})], null);
})], null)])], 0))], null)], 0));
/**
 * Returns a function for converting a JS value into CLJS data structures, based on a schema.
 */
metabase.domain_entities.converters.incoming = (function metabase$domain_entities$converters$incoming(schema__$1){
return malli.core.decoder.cljs$core$IFn$_invoke$arity$2(schema__$1,metabase.domain_entities.converters.js_transformer);
});
/**
 * Returns a function for converting a CLJS value back into a plain JS one, based on its schema.
 */
metabase.domain_entities.converters.outgoing = (function metabase$domain_entities$converters$outgoing(schema__$1){
return malli.core.encoder.cljs$core$IFn$_invoke$arity$2(schema__$1,metabase.domain_entities.converters.js_transformer);
});
Object.defineProperty(module.exports, "infer_child_decoder", { enumerable: false, get: function() { return metabase.domain_entities.converters.infer_child_decoder; } });
Object.defineProperty(module.exports, "identity_transformers", { enumerable: false, get: function() { return metabase.domain_entities.converters.identity_transformers; } });
Object.defineProperty(module.exports, "incoming", { enumerable: false, get: function() { return metabase.domain_entities.converters.incoming; } });
Object.defineProperty(module.exports, "outgoing", { enumerable: false, get: function() { return metabase.domain_entities.converters.outgoing; } });
Object.defineProperty(module.exports, "js_transformer", { enumerable: false, get: function() { return metabase.domain_entities.converters.js_transformer; } });
Object.defineProperty(module.exports, "decode_map", { enumerable: false, get: function() { return metabase.domain_entities.converters.decode_map; } });
Object.defineProperty(module.exports, "infer_child_encoder", { enumerable: false, get: function() { return metabase.domain_entities.converters.infer_child_encoder; } });
Object.defineProperty(module.exports, "decode_map_of", { enumerable: false, get: function() { return metabase.domain_entities.converters.decode_map_of; } });
Object.defineProperty(module.exports, "encode_map", { enumerable: false, get: function() { return metabase.domain_entities.converters.encode_map; } });
//# sourceMappingURL=metabase.domain_entities.converters.js.map
