var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("schema.utils.js");

goog.provide('schema.utils');
goog.scope(function(){
  schema.utils.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59603 = arguments.length;
var i__5770__auto___59604 = (0);
while(true){
if((i__5770__auto___59604 < len__5769__auto___59603)){
args__5775__auto__.push((arguments[i__5770__auto___59604]));

var G__59605 = (i__5770__auto___59604 + (1));
i__5770__auto___59604 = G__59605;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = m;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5523__auto__ = (function schema$utils$iter__59532(s__59533){
return (new cljs.core.LazySeq(null,(function (){
var s__59533__$1 = s__59533;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__59533__$1);
if(temp__5804__auto__){
var s__59533__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59533__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__59533__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__59535 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__59534 = (0);
while(true){
if((i__59534 < size__5522__auto__)){
var vec__59536 = cljs.core._nth(c__5521__auto__,i__59534);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59536,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__59535,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__59608 = (i__59534 + (1));
i__59534 = G__59608;
continue;
} else {
var G__59609 = (i__59534 + (1));
i__59534 = G__59609;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59535),schema$utils$iter__59532(cljs.core.chunk_rest(s__59533__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59535),null);
}
} else {
var vec__59539 = cljs.core.first(s__59533__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59539,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__59532(cljs.core.rest(s__59533__$2)));
} else {
var G__59610 = cljs.core.rest(s__59533__$2);
s__59533__$1 = G__59610;
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
return iter__5523__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
}));

(schema.utils.assoc_when.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema.utils.assoc_when.cljs$lang$applyTo = (function (seq59530){
var G__59531 = cljs.core.first(seq59530);
var seq59530__$1 = cljs.core.next(seq59530);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59531,seq59530__$1);
}));

schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59611 = arguments.length;
var i__5770__auto___59612 = (0);
while(true){
if((i__5770__auto___59612 < len__5769__auto___59611)){
args__5775__auto__.push((arguments[i__5770__auto___59612]));

var G__59613 = (i__5770__auto___59612 + (1));
i__5770__auto___59612 = G__59613;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq59542){
var G__59543 = cljs.core.first(seq59542);
var seq59542__$1 = cljs.core.next(seq59542);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59543,seq59542__$1);
}));

schema.utils.max_value_length = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((19));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of(value);
if((((cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)).length) <= cljs.core.deref(schema.utils.max_value_length))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
}
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
var vec__59545 = cljs.core.re_matches(/#object\[(.*)\]/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59545,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59545,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Function",s)){
return "function";
} else {
return cljs.core.re_find(/[^\/]+(?:$|(?=\/+$))/,cljs.core.demunge(s));
}
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IRecord$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.validation_error_explain.call(null,this$__$1)),writer,opts);
}));

(schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"expectation-delay","expectation-delay",-1886214669,null),new cljs.core.Symbol(null,"fail-explanation","fail-explanation",530278923,null)], null);
}));

(schema.utils.ValidationError.cljs$lang$type = true);

(schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError");

(schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"schema.utils/ValidationError");
}));

/**
 * Positional factory function for schema.utils/ValidationError.
 */
schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return (new cljs.core.List(null,(function (){var or__5045__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})(),(new cljs.core.List(null,cljs.core.deref(err.expectation_delay),null,(1),null)),(2),null));
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.named_error_explain.call(null,this$__$1)),writer,opts);
}));

(schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(schema.utils.NamedError.cljs$lang$type = true);

(schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError");

(schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"schema.utils/NamedError");
}));

/**
 * Positional factory function for schema.utils/NamedError.
 */
schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"named","named",1218138048,null),(new cljs.core.List(null,err.error,(new cljs.core.List(null,err.name,null,(1),null)),(2),null)),(3),null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k59565,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__59569 = k59565;
var G__59569__$1 = (((G__59569 instanceof cljs.core.Keyword))?G__59569.fqn:null);
switch (G__59569__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59565,else__5346__auto__);

}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__59570){
var vec__59575 = p__59570;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59575,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59575,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59564){
var self__ = this;
var G__59564__$1 = this;
return (new cljs.core.RecordIter((0),G__59564__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1172277899 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59566,other59567){
var self__ = this;
var this59566__$1 = this;
return (((!((other59567 == null)))) && ((((this59566__$1.constructor === other59567.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59566__$1.error,other59567.error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59566__$1.__extmap,other59567.__extmap)))))));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k59565){
var self__ = this;
var this__5350__auto____$1 = this;
var G__59587 = k59565;
var G__59587__$1 = (((G__59587 instanceof cljs.core.Keyword))?G__59587.fqn:null);
switch (G__59587__$1) {
case "error":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k59565);

}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__59564){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__59591 = cljs.core.keyword_identical_QMARK_;
var expr__59592 = k__5352__auto__;
if(cljs.core.truth_((pred__59591.cljs$core$IFn$_invoke$arity$2 ? pred__59591.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),expr__59592) : pred__59591.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__59592)))){
return (new schema.utils.ErrorContainer(G__59564,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__59564),null));
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null))], null),self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__59564){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__59564,self__.__extmap,self__.__hash));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(schema.utils.ErrorContainer.cljs$lang$type = true);

(schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.utils/ErrorContainer",null,(1),null));
}));

(schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.utils/ErrorContainer");
}));

/**
 * Positional factory function for schema.utils/ErrorContainer.
 */
schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

/**
 * Factory function for schema.utils/ErrorContainer, taking a map of keywords to field values.
 */
schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__59568){
var extmap__5385__auto__ = (function (){var G__59600 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59568,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.record_QMARK_(G__59568)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59600);
} else {
return G__59600;
}
})();
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__59568),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error("Assert failed: x"));
}

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(schema.utils.error_QMARK_(x)){
return x.error;
} else {
return null;
}
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return schema.utils.goog$module$goog$object.set(klass,"schema$utils$schema",schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return schema.utils.goog$module$goog$object.get(klass,"schema$utils$schema");
});
/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
Object.defineProperty(module.exports, "max_value_length", { enumerable: false, get: function() { return schema.utils.max_value_length; } });
Object.defineProperty(module.exports, "NamedError", { enumerable: false, get: function() { return schema.utils.NamedError; } });
Object.defineProperty(module.exports, "error_QMARK_", { enumerable: false, get: function() { return schema.utils.error_QMARK_; } });
Object.defineProperty(module.exports, "make_ValidationError", { enumerable: false, get: function() { return schema.utils.make_ValidationError; } });
Object.defineProperty(module.exports, "map__GT_ErrorContainer", { enumerable: false, get: function() { return schema.utils.map__GT_ErrorContainer; } });
Object.defineProperty(module.exports, "value_name", { enumerable: false, get: function() { return schema.utils.value_name; } });
Object.defineProperty(module.exports, "use_fn_validation", { enumerable: false, get: function() { return schema.utils.use_fn_validation; } });
Object.defineProperty(module.exports, "ValidationError", { enumerable: false, get: function() { return schema.utils.ValidationError; } });
Object.defineProperty(module.exports, "format_STAR_", { enumerable: false, get: function() { return schema.utils.format_STAR_; } });
Object.defineProperty(module.exports, "fn_schema_bearer", { enumerable: false, get: function() { return schema.utils.fn_schema_bearer; } });
Object.defineProperty(module.exports, "__GT_ValidationError", { enumerable: false, get: function() { return schema.utils.__GT_ValidationError; } });
Object.defineProperty(module.exports, "named_error_explain", { enumerable: false, get: function() { return schema.utils.named_error_explain; } });
Object.defineProperty(module.exports, "fn_name", { enumerable: false, get: function() { return schema.utils.fn_name; } });
Object.defineProperty(module.exports, "record_QMARK_", { enumerable: false, get: function() { return schema.utils.record_QMARK_; } });
Object.defineProperty(module.exports, "__GT_NamedError", { enumerable: false, get: function() { return schema.utils.__GT_NamedError; } });
Object.defineProperty(module.exports, "type_of", { enumerable: false, get: function() { return schema.utils.type_of; } });
Object.defineProperty(module.exports, "declare_class_schema_BANG_", { enumerable: false, get: function() { return schema.utils.declare_class_schema_BANG_; } });
Object.defineProperty(module.exports, "ErrorContainer", { enumerable: false, get: function() { return schema.utils.ErrorContainer; } });
Object.defineProperty(module.exports, "__GT_ErrorContainer", { enumerable: false, get: function() { return schema.utils.__GT_ErrorContainer; } });
Object.defineProperty(module.exports, "class_schema", { enumerable: false, get: function() { return schema.utils.class_schema; } });
Object.defineProperty(module.exports, "validation_error_explain", { enumerable: false, get: function() { return schema.utils.validation_error_explain; } });
Object.defineProperty(module.exports, "error_val", { enumerable: false, get: function() { return schema.utils.error_val; } });
Object.defineProperty(module.exports, "assoc_when", { enumerable: false, get: function() { return schema.utils.assoc_when; } });
Object.defineProperty(module.exports, "error", { enumerable: false, get: function() { return schema.utils.error; } });
//# sourceMappingURL=schema.utils.js.map
