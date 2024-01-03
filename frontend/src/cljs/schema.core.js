var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./schema.utils.js");
require("./schema.spec.core.js");
require("./schema.spec.leaf.js");
require("./schema.spec.variant.js");
require("./schema.spec.collection.js");
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

$CLJS.SHADOW_ENV.setLoaded("schema.core.js");

goog.provide('schema.core');

/**
 * @interface
 */
schema.core.Schema = function(){};

var schema$core$Schema$spec$dyn_60937 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (schema.core.spec[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (schema.core.spec["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.spec",this$);
}
}
});
/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$Schema$spec$arity$1 == null)))))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
return schema$core$Schema$spec$dyn_60937(this$);
}
});

var schema$core$Schema$explain$dyn_60938 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (schema.core.explain[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (schema.core.explain["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
});
/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$Schema$explain$arity$1 == null)))))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
return schema$core$Schema$explain$dyn_60938(this$);
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.spec.core.run_checker((function (s,params){
return schema.spec.core.checker(schema.core.spec(s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker(schema__$1)(x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return (function (value){
var temp__5804__auto___60939 = c(value);
if(cljs.core.truth_(temp__5804__auto___60939)){
var error_60940 = temp__5804__auto___60939;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_60940], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_60940], null));
} else {
}

return value;
});
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator(schema__$1)(value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__59971_SHARP_){
var and__5043__auto__ = (!((p1__59971_SHARP_ == null)));
if(and__5043__auto__){
var or__5045__auto__ = (klass === p1__59971_SHARP_.constructor);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return p1__59971_SHARP_ instanceof klass;
}
} else {
return and__5043__auto__;
}
}),(function (p1__59972_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,klass,(new cljs.core.List(null,p1__59972_SHARP_,null,(1),null)),(2),null)),(3),null));
}));
});
schema.core._class_spec = (function schema$core$_class_spec(this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__5802__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var class_schema = temp__5802__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
});
schema.core._class_explain = (function schema$core$_class_explain(this$){
var temp__5802__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var more_schema = temp__5802__auto__;
return schema.core.explain(more_schema);
} else {
var pred__59983 = cljs.core._EQ_;
var expr__59984 = this$;
if(cljs.core.truth_((pred__59983.cljs$core$IFn$_invoke$arity$2 ? pred__59983.cljs$core$IFn$_invoke$arity$2(Boolean,expr__59984) : pred__59983.call(null,Boolean,expr__59984)))){
return new cljs.core.Symbol(null,"Bool","Bool",195910502,null);
} else {
if(cljs.core.truth_((pred__59983.cljs$core$IFn$_invoke$arity$2 ? pred__59983.cljs$core$IFn$_invoke$arity$2(Number,expr__59984) : pred__59983.call(null,Number,expr__59984)))){
return new cljs.core.Symbol(null,"Num","Num",-2044934708,null);
} else {
if(cljs.core.truth_((pred__59983.cljs$core$IFn$_invoke$arity$2 ? pred__59983.cljs$core$IFn$_invoke$arity$2(Date,expr__59984) : pred__59983.call(null,Date,expr__59984)))){
return new cljs.core.Symbol(null,"Inst","Inst",292408622,null);
} else {
if(cljs.core.truth_((pred__59983.cljs$core$IFn$_invoke$arity$2 ? pred__59983.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__59984) : pred__59983.call(null,cljs.core.UUID,expr__59984)))){
return new cljs.core.Symbol(null,"Uuid","Uuid",-1866694318,null);
} else {
return this$;
}
}
}
}
}
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
return schema.core._class_spec(this$);
}));

(schema.core.explain["function"] = (function (this$){
return schema.core._class_explain(this$);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k59990,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__59996 = k59990;
var G__59996__$1 = (((G__59996 instanceof cljs.core.Keyword))?G__59996.fqn:null);
switch (G__59996__$1) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59990,else__5346__auto__);

}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__59998){
var vec__59999 = p__59998;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59999,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59999,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.AnythingSchema{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59989){
var self__ = this;
var G__59989__$1 = this;
return (new cljs.core.RecordIter((0),G__59989__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1432036169 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59991,other59992){
var self__ = this;
var this59991__$1 = this;
return (((!((other59992 == null)))) && ((((this59991__$1.constructor === other59992.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59991__$1._,other59992._)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59991__$1.__extmap,other59992.__extmap)))))));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k59990){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60019 = k59990;
var G__60019__$1 = (((G__60019 instanceof cljs.core.Keyword))?G__60019.fqn:null);
switch (G__60019__$1) {
case "_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k59990);

}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__59989){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60024 = cljs.core.keyword_identical_QMARK_;
var expr__60025 = k__5352__auto__;
if(cljs.core.truth_((pred__60024.cljs$core$IFn$_invoke$arity$2 ? pred__60024.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_","_",1453416199),expr__60025) : pred__60024.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__60025)))){
return (new schema.core.AnythingSchema(G__59989,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__59989),null));
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"_","_",1453416199),self__._,null))], null),self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__59989){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__59989,self__.__extmap,self__.__hash));
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.AnythingSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core._PLUS_no_precondition_PLUS_);
}));

(schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
}));

(schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
}));

(schema.core.AnythingSchema.cljs$lang$type = true);

(schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/AnythingSchema",null,(1),null));
}));

(schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/AnythingSchema");
}));

/**
 * Positional factory function for schema.core/AnythingSchema.
 */
schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

/**
 * Factory function for schema.core/AnythingSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__59993){
var extmap__5385__auto__ = (function (){var G__60040 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59993,new cljs.core.Keyword(null,"_","_",1453416199));
if(cljs.core.record_QMARK_(G__59993)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60040);
} else {
return G__60040;
}
})();
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__59993),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60048,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60052 = k60048;
var G__60052__$1 = (((G__60052 instanceof cljs.core.Keyword))?G__60052.fqn:null);
switch (G__60052__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60048,else__5346__auto__);

}
}));

(schema.core.EqSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60053){
var vec__60054 = p__60053;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60054,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60054,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.EqSchema{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60047){
var self__ = this;
var G__60047__$1 = this;
return (new cljs.core.RecordIter((0),G__60047__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-907989292 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60049,other60050){
var self__ = this;
var this60049__$1 = this;
return (((!((other60050 == null)))) && ((((this60049__$1.constructor === other60050.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60049__$1.v,other60050.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60049__$1.__extmap,other60050.__extmap)))))));
}));

(schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.EqSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60048){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60067 = k60048;
var G__60067__$1 = (((G__60067 instanceof cljs.core.Keyword))?G__60067.fqn:null);
switch (G__60067__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60048);

}
}));

(schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60047){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60070 = cljs.core.keyword_identical_QMARK_;
var expr__60071 = k__5352__auto__;
if(cljs.core.truth_((pred__60070.cljs$core$IFn$_invoke$arity$2 ? pred__60070.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__60071) : pred__60070.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__60071)))){
return (new schema.core.EqSchema(G__60047,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60047),null));
}
}));

(schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60047){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__60047,self__.__extmap,self__.__hash));
}));

(schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.EqSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__60045_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__60045_SHARP_);
}),(function (p1__60046_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,self__.v,(new cljs.core.List(null,p1__60046_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"eq","eq",1021992460,null),(new cljs.core.List(null,self__.v,null,(1),null)),(2),null));
}));

(schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(schema.core.EqSchema.cljs$lang$type = true);

(schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/EqSchema",null,(1),null));
}));

(schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/EqSchema");
}));

/**
 * Positional factory function for schema.core/EqSchema.
 */
schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
 * Factory function for schema.core/EqSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__60051){
var extmap__5385__auto__ = (function (){var G__60076 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60051,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__60051)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60076);
} else {
return G__60076;
}
})();
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__60051),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60086,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60097 = k60086;
var G__60097__$1 = (((G__60097 instanceof cljs.core.Keyword))?G__60097.fqn:null);
switch (G__60097__$1) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60086,else__5346__auto__);

}
}));

(schema.core.Isa.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60098){
var vec__60099 = p__60098;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60099,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60099,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.Isa{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60085){
var self__ = this;
var G__60085__$1 = this;
return (new cljs.core.RecordIter((0),G__60085__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1593744337 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60087,other60088){
var self__ = this;
var this60087__$1 = this;
return (((!((other60088 == null)))) && ((((this60087__$1.constructor === other60088.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60087__$1.h,other60088.h)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60087__$1.parent,other60088.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60087__$1.__extmap,other60088.__extmap)))))))));
}));

(schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.Isa.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60086){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60117 = k60086;
var G__60117__$1 = (((G__60117 instanceof cljs.core.Keyword))?G__60117.fqn:null);
switch (G__60117__$1) {
case "h":
case "parent":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60086);

}
}));

(schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60085){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60119 = cljs.core.keyword_identical_QMARK_;
var expr__60120 = k__5352__auto__;
if(cljs.core.truth_((pred__60119.cljs$core$IFn$_invoke$arity$2 ? pred__60119.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__60120) : pred__60119.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__60120)))){
return (new schema.core.Isa(G__60085,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60119.cljs$core$IFn$_invoke$arity$2 ? pred__60119.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__60120) : pred__60119.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__60120)))){
return (new schema.core.Isa(self__.h,G__60085,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60085),null));
}
}
}));

(schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null))], null),self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60085){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__60085,self__.__extmap,self__.__hash));
}));

(schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.Isa.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__60083_SHARP_){
if(cljs.core.truth_(self__.h)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__60083_SHARP_,self__.parent);
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__60083_SHARP_,self__.parent);
}
}),(function (p1__60084_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"isa?","isa?",1358492324,null),(new cljs.core.List(null,p1__60084_SHARP_,(new cljs.core.List(null,self__.parent,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"isa?","isa?",1358492324,null),(new cljs.core.List(null,self__.parent,null,(1),null)),(2),null));
}));

(schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
}));

(schema.core.Isa.cljs$lang$type = true);

(schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/Isa",null,(1),null));
}));

(schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/Isa");
}));

/**
 * Positional factory function for schema.core/Isa.
 */
schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

/**
 * Factory function for schema.core/Isa, taking a map of keywords to field values.
 */
schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__60089){
var extmap__5385__auto__ = (function (){var G__60124 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60089,new cljs.core.Keyword(null,"h","h",1109658740),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent","parent",-878878779)], 0));
if(cljs.core.record_QMARK_(G__60089)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60124);
} else {
return G__60124;
}
})();
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__60089),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__60089),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.Isa.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var G__60127 = arguments.length;
switch (G__60127) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
}));

(schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
}));

(schema.core.isa.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60134,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60138 = k60134;
var G__60138__$1 = (((G__60138 instanceof cljs.core.Keyword))?G__60138.fqn:null);
switch (G__60138__$1) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60134,else__5346__auto__);

}
}));

(schema.core.EnumSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60141){
var vec__60143 = p__60141;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60143,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60143,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.EnumSchema{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60133){
var self__ = this;
var G__60133__$1 = this;
return (new cljs.core.RecordIter((0),G__60133__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vs","vs",-2022097090)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (2002701468 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60135,other60136){
var self__ = this;
var this60135__$1 = this;
return (((!((other60136 == null)))) && ((((this60135__$1.constructor === other60136.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60135__$1.vs,other60136.vs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60135__$1.__extmap,other60136.__extmap)))))));
}));

(schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.EnumSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60134){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60176 = k60134;
var G__60176__$1 = (((G__60176 instanceof cljs.core.Keyword))?G__60176.fqn:null);
switch (G__60176__$1) {
case "vs":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60134);

}
}));

(schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60133){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60177 = cljs.core.keyword_identical_QMARK_;
var expr__60178 = k__5352__auto__;
if(cljs.core.truth_((pred__60177.cljs$core$IFn$_invoke$arity$2 ? pred__60177.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__60178) : pred__60177.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__60178)))){
return (new schema.core.EnumSchema(G__60133,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60133),null));
}
}));

(schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs,null))], null),self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60133){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__60133,self__.__extmap,self__.__hash));
}));

(schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.EnumSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__60131_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__60131_SHARP_);
}),(function (p1__60132_SHARP_){
return (new cljs.core.List(null,self__.vs,(new cljs.core.List(null,p1__60132_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
}));

(schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
}));

(schema.core.EnumSchema.cljs$lang$type = true);

(schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/EnumSchema",null,(1),null));
}));

(schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/EnumSchema");
}));

/**
 * Positional factory function for schema.core/EnumSchema.
 */
schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

/**
 * Factory function for schema.core/EnumSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__60137){
var extmap__5385__auto__ = (function (){var G__60186 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60137,new cljs.core.Keyword(null,"vs","vs",-2022097090));
if(cljs.core.record_QMARK_(G__60137)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60186);
} else {
return G__60186;
}
})();
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__60137),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61074 = arguments.length;
var i__5770__auto___61079 = (0);
while(true){
if((i__5770__auto___61079 < len__5769__auto___61074)){
args__5775__auto__.push((arguments[i__5770__auto___61079]));

var G__61080 = (i__5770__auto___61079 + (1));
i__5770__auto___61079 = G__61080;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
}));

(schema.core.enum$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.enum$.cljs$lang$applyTo = (function (seq60190){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60190));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60196,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60200 = k60196;
var G__60200__$1 = (((G__60200 instanceof cljs.core.Keyword))?G__60200.fqn:null);
switch (G__60200__$1) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60196,else__5346__auto__);

}
}));

(schema.core.Predicate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60201){
var vec__60202 = p__60201;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60202,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60202,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.Predicate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60195){
var self__ = this;
var G__60195__$1 = this;
return (new cljs.core.RecordIter((0),G__60195__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (2041221968 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60197,other60198){
var self__ = this;
var this60197__$1 = this;
return (((!((other60198 == null)))) && ((((this60197__$1.constructor === other60198.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60197__$1.p_QMARK_,other60198.p_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60197__$1.pred_name,other60198.pred_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60197__$1.__extmap,other60198.__extmap)))))))));
}));

(schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.Predicate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60196){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60205 = k60196;
var G__60205__$1 = (((G__60205 instanceof cljs.core.Keyword))?G__60205.fqn:null);
switch (G__60205__$1) {
case "p?":
case "pred-name":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60196);

}
}));

(schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60195){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60206 = cljs.core.keyword_identical_QMARK_;
var expr__60207 = k__5352__auto__;
if(cljs.core.truth_((pred__60206.cljs$core$IFn$_invoke$arity$2 ? pred__60206.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__60207) : pred__60206.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__60207)))){
return (new schema.core.Predicate(G__60195,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60206.cljs$core$IFn$_invoke$arity$2 ? pred__60206.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__60207) : pred__60206.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__60207)))){
return (new schema.core.Predicate(self__.p_QMARK_,G__60195,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60195),null));
}
}
}));

(schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name,null))], null),self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60195){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__60195,self__.__extmap,self__.__hash));
}));

(schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.Predicate.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,self__.p_QMARK_,(function (p1__60194_SHARP_){
return (new cljs.core.List(null,self__.pred_name,(new cljs.core.List(null,p1__60194_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"pred","pred",-727012372,null),(new cljs.core.List(null,self__.pred_name,null,(1),null)),(2),null));

}
}
}
}
}));

(schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
}));

(schema.core.Predicate.cljs$lang$type = true);

(schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/Predicate",null,(1),null));
}));

(schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/Predicate");
}));

/**
 * Positional factory function for schema.core/Predicate.
 */
schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

/**
 * Factory function for schema.core/Predicate, taking a map of keywords to field values.
 */
schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__60199){
var extmap__5385__auto__ = (function (){var G__60209 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60199,new cljs.core.Keyword(null,"p?","p?",-1172161701),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], 0));
if(cljs.core.record_QMARK_(G__60199)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60209);
} else {
return G__60209;
}
})();
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__60199),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__60199),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var G__60211 = arguments.length;
switch (G__60211) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
}));

(schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
}));

(schema.core.pred.cljs$lang$maxFixedArity = 2);

schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60214,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60218 = k60214;
var G__60218__$1 = (((G__60218 instanceof cljs.core.Keyword))?G__60218.fqn:null);
switch (G__60218__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60214,else__5346__auto__);

}
}));

(schema.core.Protocol.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60219){
var vec__60220 = p__60219;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60220,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60220,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.Protocol{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60213){
var self__ = this;
var G__60213__$1 = this;
return (new cljs.core.RecordIter((0),G__60213__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1892592712 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60215,other60216){
var self__ = this;
var this60215__$1 = this;
return (((!((other60216 == null)))) && ((((this60215__$1.constructor === other60216.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60215__$1.p,other60216.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60215__$1.__extmap,other60216.__extmap)))))));
}));

(schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.Protocol.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60214){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60223 = k60214;
var G__60223__$1 = (((G__60223 instanceof cljs.core.Keyword))?G__60223.fqn:null);
switch (G__60223__$1) {
case "p":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60214);

}
}));

(schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60213){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60224 = cljs.core.keyword_identical_QMARK_;
var expr__60225 = k__5352__auto__;
if(cljs.core.truth_((pred__60224.cljs$core$IFn$_invoke$arity$2 ? pred__60224.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),expr__60225) : pred__60224.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__60225)))){
return (new schema.core.Protocol(G__60213,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60213),null));
}
}));

(schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60213){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__60213,self__.__extmap,self__.__hash));
}));

(schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.Protocol.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)),(function (p1__60212_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),(new cljs.core.List(null,schema.core.protocol_name(this$__$1),(new cljs.core.List(null,p1__60212_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),(new cljs.core.List(null,schema.core.protocol_name(this$__$1),null,(1),null)),(2),null));
}));

(schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
}));

(schema.core.Protocol.cljs$lang$type = true);

(schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/Protocol",null,(1),null));
}));

(schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/Protocol");
}));

/**
 * Positional factory function for schema.core/Protocol.
 */
schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

/**
 * Factory function for schema.core/Protocol, taking a map of keywords to field values.
 */
schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__60217){
var extmap__5385__auto__ = (function (){var G__60227 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60217,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_(G__60217)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60227);
} else {
return G__60227;
}
})();
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__60217),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

(RegExp.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,(function (p1__50581__50582__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),(new cljs.core.List(null,p1__50581__50582__auto__,null,(1),null)),(2),null));
})),schema.spec.core.precondition(this$__$1,(function (p1__60230_SHARP_){
return cljs.core.re_find(this$__$1,p1__60230_SHARP_);
}),(function (p1__60231_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),(new cljs.core.List(null,schema.core.explain(this$__$1),(new cljs.core.List(null,p1__60231_SHARP_,null,(1),null)),(2),null)),(3),null));
}))));
}));

(RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1).slice((1),(-1))),"\""].join(''));
}));
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core60234 = (function (meta60235){
this.meta60235 = meta60235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.core.t_schema$core60234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60236,meta60235__$1){
var self__ = this;
var _60236__$1 = this;
return (new schema.core.t_schema$core60234(meta60235__$1));
}));

(schema.core.t_schema$core60234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60236){
var self__ = this;
var _60236__$1 = this;
return self__.meta60235;
}));

(schema.core.t_schema$core60234.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.t_schema$core60234.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,(function (p1__60232_SHARP_){
return (p1__60232_SHARP_ instanceof RegExp);
}),(function (p1__60233_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null),(new cljs.core.List(null,p1__60233_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.t_schema$core60234.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
}));

(schema.core.t_schema$core60234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60235","meta60235",-249533911,null)], null);
}));

(schema.core.t_schema$core60234.cljs$lang$type = true);

(schema.core.t_schema$core60234.cljs$lang$ctorStr = "schema.core/t_schema$core60234");

(schema.core.t_schema$core60234.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"schema.core/t_schema$core60234");
}));

/**
 * Positional factory function for schema.core/t_schema$core60234.
 */
schema.core.__GT_t_schema$core60234 = (function schema$core$__GT_t_schema$core60234(meta60235){
return (new schema.core.t_schema$core60234(meta60235));
});


/**
 * A regular expression
 */
schema.core.Regex = (new schema.core.t_schema$core60234(cljs.core.PersistentArrayMap.EMPTY));
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60238,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60242 = k60238;
var G__60242__$1 = (((G__60242 instanceof cljs.core.Keyword))?G__60242.fqn:null);
switch (G__60242__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60238,else__5346__auto__);

}
}));

(schema.core.Maybe.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60243){
var vec__60244 = p__60243;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60244,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60244,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.Maybe{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60237){
var self__ = this;
var G__60237__$1 = this;
return (new cljs.core.RecordIter((0),G__60237__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-805411239 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60239,other60240){
var self__ = this;
var this60239__$1 = this;
return (((!((other60240 == null)))) && ((((this60239__$1.constructor === other60240.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60239__$1.schema,other60240.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60239__$1.__extmap,other60240.__extmap)))))));
}));

(schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.Maybe.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60238){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60247 = k60238;
var G__60247__$1 = (((G__60247 instanceof cljs.core.Keyword))?G__60247.fqn:null);
switch (G__60247__$1) {
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60238);

}
}));

(schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60237){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60248 = cljs.core.keyword_identical_QMARK_;
var expr__60249 = k__5352__auto__;
if(cljs.core.truth_((pred__60248.cljs$core$IFn$_invoke$arity$2 ? pred__60248.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60249) : pred__60248.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60249)))){
return (new schema.core.Maybe(G__60237,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60237),null));
}
}));

(schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60237){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__60237,self__.__extmap,self__.__hash));
}));

(schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.Maybe.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema.core.eq(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
}));

(schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"maybe","maybe",1326133967,null),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Maybe.cljs$lang$type = true);

(schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/Maybe",null,(1),null));
}));

(schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/Maybe");
}));

/**
 * Positional factory function for schema.core/Maybe.
 */
schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Maybe, taking a map of keywords to field values.
 */
schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__60241){
var extmap__5385__auto__ = (function (){var G__60252 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60241,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_(G__60241)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60252);
} else {
return G__60252;
}
})();
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__60241),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60255,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60259 = k60255;
var G__60259__$1 = (((G__60259 instanceof cljs.core.Keyword))?G__60259.fqn:null);
switch (G__60259__$1) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60255,else__5346__auto__);

}
}));

(schema.core.NamedSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60260){
var vec__60261 = p__60260;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60261,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60261,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.NamedSchema{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60254){
var self__ = this;
var G__60254__$1 = this;
return (new cljs.core.RecordIter((0),G__60254__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (456601728 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60256,other60257){
var self__ = this;
var this60256__$1 = this;
return (((!((other60257 == null)))) && ((((this60256__$1.constructor === other60257.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60256__$1.schema,other60257.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60256__$1.name,other60257.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60256__$1.__extmap,other60257.__extmap)))))))));
}));

(schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.NamedSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60255){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60271 = k60255;
var G__60271__$1 = (((G__60271 instanceof cljs.core.Keyword))?G__60271.fqn:null);
switch (G__60271__$1) {
case "schema":
case "name":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60255);

}
}));

(schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60254){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60273 = cljs.core.keyword_identical_QMARK_;
var expr__60274 = k__5352__auto__;
if(cljs.core.truth_((pred__60273.cljs$core$IFn$_invoke$arity$2 ? pred__60273.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60274) : pred__60273.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60274)))){
return (new schema.core.NamedSchema(G__60254,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60273.cljs$core$IFn$_invoke$arity$2 ? pred__60273.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__60274) : pred__60273.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__60274)))){
return (new schema.core.NamedSchema(self__.schema,G__60254,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60254),null));
}
}
}));

(schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null))], null),self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60254){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__60254,self__.__extmap,self__.__hash));
}));

(schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.NamedSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809),(function (p1__60253_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__60253_SHARP_);
})], null)], null));
}));

(schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"named","named",1218138048,null),(new cljs.core.List(null,schema.core.explain(self__.schema),(new cljs.core.List(null,self__.name,null,(1),null)),(2),null)),(3),null));
}));

(schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
}));

(schema.core.NamedSchema.cljs$lang$type = true);

(schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/NamedSchema",null,(1),null));
}));

(schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/NamedSchema");
}));

/**
 * Positional factory function for schema.core/NamedSchema.
 */
schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
 * Factory function for schema.core/NamedSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__60258){
var extmap__5385__auto__ = (function (){var G__60284 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60258,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177)], 0));
if(cljs.core.record_QMARK_(G__60258)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60284);
} else {
return G__60284;
}
})();
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__60258),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__60258),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60293,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60305 = k60293;
var G__60305__$1 = (((G__60305 instanceof cljs.core.Keyword))?G__60305.fqn:null);
switch (G__60305__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60293,else__5346__auto__);

}
}));

(schema.core.Either.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60306){
var vec__60307 = p__60306;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60307,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60307,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.Either{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60292){
var self__ = this;
var G__60292__$1 = this;
return (new cljs.core.RecordIter((0),G__60292__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1018568510 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60294,other60295){
var self__ = this;
var this60294__$1 = this;
return (((!((other60295 == null)))) && ((((this60294__$1.constructor === other60295.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60294__$1.schemas,other60295.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60294__$1.__extmap,other60295.__extmap)))))));
}));

(schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.Either.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60293){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60310 = k60293;
var G__60310__$1 = (((G__60310 instanceof cljs.core.Keyword))?G__60310.fqn:null);
switch (G__60310__$1) {
case "schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60293);

}
}));

(schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60292){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60311 = cljs.core.keyword_identical_QMARK_;
var expr__60312 = k__5352__auto__;
if(cljs.core.truth_((pred__60311.cljs$core$IFn$_invoke$arity$2 ? pred__60311.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__60312) : pred__60311.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__60312)))){
return (new schema.core.Either(G__60292,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60292),null));
}
}));

(schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60292){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__60292,self__.__extmap,self__.__hash));
}));

(schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.Either.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5523__auto__ = (function schema$core$iter__60314(s__60315){
return (new cljs.core.LazySeq(null,(function (){
var s__60315__$1 = s__60315;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60315__$1);
if(temp__5804__auto__){
var s__60315__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60315__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60315__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60317 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60316 = (0);
while(true){
if((i__60316 < size__5522__auto__)){
var s = cljs.core._nth(c__5521__auto__,i__60316);
cljs.core.chunk_append(b__60317,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement(schema.core.checker(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__61157 = (i__60316 + (1));
i__60316 = G__61157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60317),schema$core$iter__60314(cljs.core.chunk_rest(s__60315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60317),null);
}
} else {
var s = cljs.core.first(s__60315__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement(schema.core.checker(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__60314(cljs.core.rest(s__60315__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(self__.schemas);
})(),(function (p1__60287_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"some-matching-either-clause?","some-matching-either-clause?",-1443305015,null),(new cljs.core.List(null,p1__60287_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
}));

(schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.Either.cljs$lang$type = true);

(schema.core.Either.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/Either",null,(1),null));
}));

(schema.core.Either.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/Either");
}));

/**
 * Positional factory function for schema.core/Either.
 */
schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

/**
 * Factory function for schema.core/Either, taking a map of keywords to field values.
 */
schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__60304){
var extmap__5385__auto__ = (function (){var G__60318 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60304,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_(G__60304)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60318);
} else {
return G__60318;
}
})();
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__60304),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.Either.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `conditional` or `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61158 = arguments.length;
var i__5770__auto___61159 = (0);
while(true){
if((i__5770__auto___61159 < len__5769__auto___61158)){
args__5775__auto__.push((arguments[i__5770__auto___61159]));

var G__61160 = (i__5770__auto___61159 + (1));
i__5770__auto___61159 = G__61160;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
}));

(schema.core.either.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.either.cljs$lang$applyTo = (function (seq60319){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60319));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60322,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60326 = k60322;
var G__60326__$1 = (((G__60326 instanceof cljs.core.Keyword))?G__60326.fqn:null);
switch (G__60326__$1) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60322,else__5346__auto__);

}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60328){
var vec__60329 = p__60328;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60329,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60329,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60321){
var self__ = this;
var G__60321__$1 = this;
return (new cljs.core.RecordIter((0),G__60321__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1418435858 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60323,other60324){
var self__ = this;
var this60323__$1 = this;
return (((!((other60324 == null)))) && ((((this60323__$1.constructor === other60324.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60323__$1.preds_and_schemas,other60324.preds_and_schemas)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60323__$1.error_symbol,other60324.error_symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60323__$1.__extmap,other60324.__extmap)))))))));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60322){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60332 = k60322;
var G__60332__$1 = (((G__60332 instanceof cljs.core.Keyword))?G__60332.fqn:null);
switch (G__60332__$1) {
case "preds-and-schemas":
case "error-symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60322);

}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60321){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60333 = cljs.core.keyword_identical_QMARK_;
var expr__60334 = k__5352__auto__;
if(cljs.core.truth_((pred__60333.cljs$core$IFn$_invoke$arity$2 ? pred__60333.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__60334) : pred__60333.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__60334)))){
return (new schema.core.ConditionalSchema(G__60321,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60333.cljs$core$IFn$_invoke$arity$2 ? pred__60333.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__60334) : pred__60333.call(null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__60334)))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__60321,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60321),null));
}
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol,null))], null),self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60321){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__60321,self__.__extmap,self__.__hash));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.ConditionalSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5523__auto__ = (function schema$core$iter__60336(s__60337){
return (new cljs.core.LazySeq(null,(function (){
var s__60337__$1 = s__60337;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60337__$1);
if(temp__5804__auto__){
var s__60337__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60337__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60337__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60339 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60338 = (0);
while(true){
if((i__60338 < size__5522__auto__)){
var vec__60340 = cljs.core._nth(c__5521__auto__,i__60338);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60340,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60340,(1),null);
cljs.core.chunk_append(b__60339,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__61167 = (i__60338 + (1));
i__60338 = G__61167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60339),schema$core$iter__60336(cljs.core.chunk_rest(s__60337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60339),null);
}
} else {
var vec__60343 = cljs.core.first(s__60337__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60343,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60343,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__60336(cljs.core.rest(s__60337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(self__.preds_and_schemas);
})(),(function (p1__60320_SHARP_){
return (new cljs.core.List(null,(function (){var or__5045__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.preds_and_schemas))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(cljs.core.ffirst(self__.preds_and_schemas)));
} else {
return new cljs.core.Symbol(null,"some-matching-condition?","some-matching-condition?",1512398506,null);
}
}
})(),(new cljs.core.List(null,p1__60320_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__60346){
var vec__60347 = p__60346;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60347,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60347,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(pred)),schema.core.explain(schema__$1)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.preds_and_schemas], 0)),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
}));

(schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null),new cljs.core.Symbol(null,"error-symbol","error-symbol",817051099,null)], null);
}));

(schema.core.ConditionalSchema.cljs$lang$type = true);

(schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/ConditionalSchema",null,(1),null));
}));

(schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/ConditionalSchema");
}));

/**
 * Positional factory function for schema.core/ConditionalSchema.
 */
schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

/**
 * Factory function for schema.core/ConditionalSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__60325){
var extmap__5385__auto__ = (function (){var G__60350 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60325,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], 0));
if(cljs.core.record_QMARK_(G__60325)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60350);
} else {
return G__60350;
}
})();
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__60325),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428).cljs$core$IFn$_invoke$arity$1(G__60325),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schemaX where predX (an ordinary Clojure function
 * that returns true or false) returns true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61168 = arguments.length;
var i__5770__auto___61169 = (0);
while(true){
if((i__5770__auto___61169 < len__5769__auto___61168)){
args__5775__auto__.push((arguments[i__5770__auto___61169]));

var G__61170 = (i__5770__auto___61169 + (1));
i__5770__auto___61169 = G__61170;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if(((cljs.core.seq(preds_and_schemas)) && (((cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))) || ((cljs.core.last(preds_and_schemas) instanceof cljs.core.Symbol)))))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema(cljs.core.vec((function (){var iter__5523__auto__ = (function schema$core$iter__60352(s__60353){
return (new cljs.core.LazySeq(null,(function (){
var s__60353__$1 = s__60353;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60353__$1);
if(temp__5804__auto__){
var s__60353__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60353__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60353__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60355 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60354 = (0);
while(true){
if((i__60354 < size__5522__auto__)){
var vec__60356 = cljs.core._nth(c__5521__auto__,i__60354);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60356,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60356,(1),null);
cljs.core.chunk_append(b__60355,(function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null);
})()
);

var G__61171 = (i__60354 + (1));
i__60354 = G__61171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60355),schema$core$iter__60352(cljs.core.chunk_rest(s__60353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60355),null);
}
} else {
var vec__60359 = cljs.core.first(s__60353__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60359,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60359,(1),null);
return cljs.core.cons((function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null);
})()
,schema$core$iter__60352(cljs.core.rest(s__60353__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})()),((cljs.core.odd_QMARK_(cljs.core.count(preds_and_schemas)))?cljs.core.last(preds_and_schemas):null),null,null,null));
}));

(schema.core.conditional.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.conditional.cljs$lang$applyTo = (function (seq60351){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60351));
}));


/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

var schema$core$HasPrecondition$precondition$dyn_61172 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (schema.core.precondition[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (schema.core.precondition["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("HasPrecondition.precondition",this$);
}
}
});
/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
return schema$core$HasPrecondition$precondition$dyn_61172(this$);
}
});

(schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
}));

(schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(this$__$1.pre),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,(function (){var iter__5523__auto__ = (function schema$core$iter__60362(s__60363){
return (new cljs.core.LazySeq(null,(function (){
var s__60363__$1 = s__60363;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60363__$1);
if(temp__5804__auto__){
var s__60363__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60363__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60363__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60365 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60364 = (0);
while(true){
if((i__60364 < size__5522__auto__)){
var map__60366 = cljs.core._nth(c__5521__auto__,i__60364);
var map__60366__$1 = cljs.core.__destructure_map(map__60366);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60366__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60366__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
cljs.core.chunk_append(b__60365,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__61173 = (i__60364 + (1));
i__60364 = G__61173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60365),schema$core$iter__60362(cljs.core.chunk_rest(s__60363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60365),null);
}
} else {
var map__60367 = cljs.core.first(s__60363__$2);
var map__60367__$1 = cljs.core.__destructure_map(map__60367);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60367__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60367__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__60362(cljs.core.rest(s__60363__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(this$__$1.options);
})()));
}));

(schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60370,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60374 = k60370;
var G__60374__$1 = (((G__60374 instanceof cljs.core.Keyword))?G__60374.fqn:null);
switch (G__60374__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60370,else__5346__auto__);

}
}));

(schema.core.CondPre.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60375){
var vec__60376 = p__60375;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60376,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60376,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.CondPre{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60369){
var self__ = this;
var G__60369__$1 = this;
return (new cljs.core.RecordIter((0),G__60369__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-56613580 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60371,other60372){
var self__ = this;
var this60371__$1 = this;
return (((!((other60372 == null)))) && ((((this60371__$1.constructor === other60372.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60371__$1.schemas,other60372.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60371__$1.__extmap,other60372.__extmap)))))));
}));

(schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.CondPre.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60370){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60379 = k60370;
var G__60379__$1 = (((G__60379 instanceof cljs.core.Keyword))?G__60379.fqn:null);
switch (G__60379__$1) {
case "schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60370);

}
}));

(schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60369){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60380 = cljs.core.keyword_identical_QMARK_;
var expr__60381 = k__5352__auto__;
if(cljs.core.truth_((pred__60380.cljs$core$IFn$_invoke$arity$2 ? pred__60380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__60381) : pred__60380.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__60381)))){
return (new schema.core.CondPre(G__60369,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60369),null));
}
}));

(schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60369){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__60369,self__.__extmap,self__.__hash));
}));

(schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.CondPre.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5523__auto__ = (function schema$core$iter__60383(s__60384){
return (new cljs.core.LazySeq(null,(function (){
var s__60384__$1 = s__60384;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60384__$1);
if(temp__5804__auto__){
var s__60384__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60384__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60384__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60386 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60385 = (0);
while(true){
if((i__60385 < size__5522__auto__)){
var s = cljs.core._nth(c__5521__auto__,i__60385);
cljs.core.chunk_append(b__60386,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition(schema.core.spec(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__61176 = (i__60385 + (1));
i__60385 = G__61176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60386),schema$core$iter__60383(cljs.core.chunk_rest(s__60384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60386),null);
}
} else {
var s = cljs.core.first(s__60384__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition(schema.core.spec(s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__60383(cljs.core.rest(s__60384__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(self__.schemas);
})(),(function (p1__60368_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"matches-some-precondition?","matches-some-precondition?",2123072832,null),(new cljs.core.List(null,p1__60368_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"cond-pre","cond-pre",-923707731,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
}));

(schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.CondPre.cljs$lang$type = true);

(schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/CondPre",null,(1),null));
}));

(schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/CondPre");
}));

/**
 * Positional factory function for schema.core/CondPre.
 */
schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

/**
 * Factory function for schema.core/CondPre, taking a map of keywords to field values.
 */
schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__60373){
var extmap__5385__auto__ = (function (){var G__60401 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60373,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_(G__60373)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60401);
} else {
return G__60401;
}
})();
return (new schema.core.CondPre(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__60373),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * Given a datum, the preconditions for each schema (which typically
 * check just the outermost class) are tested against the datum in turn.
 * The first schema whose precondition matches is greedily selected,
 * and the datum is validated against that schema.  Unlike `either`,
 * a validation failure is final (and there is no backtracking to try
 * other schemas that might match).
 * 
 * Thus, `cond-pre` is only suitable for schemas with mutually exclusive
 * preconditions (e.g., s/Int and s/Str).  If this doesn't hold
 * (e.g. {:a s/Int} and {:b s/Str}), you must use `conditional` instead
 * and provide an explicit condition for distinguishing the cases.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61177 = arguments.length;
var i__5770__auto___61178 = (0);
while(true){
if((i__5770__auto___61178 < len__5769__auto___61177)){
args__5775__auto__.push((arguments[i__5770__auto___61178]));

var G__61179 = (i__5770__auto___61178 + (1));
i__5770__auto___61178 = G__61179;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
}));

(schema.core.cond_pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.cond_pre.cljs$lang$applyTo = (function (seq60404){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60404));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60412,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60417 = k60412;
var G__60417__$1 = (((G__60417 instanceof cljs.core.Keyword))?G__60417.fqn:null);
switch (G__60417__$1) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60412,else__5346__auto__);

}
}));

(schema.core.Constrained.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60419){
var vec__60420 = p__60419;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60420,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60420,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.Constrained{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60411){
var self__ = this;
var G__60411__$1 = this;
return (new cljs.core.RecordIter((0),G__60411__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (725895648 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60413,other60414){
var self__ = this;
var this60413__$1 = this;
return (((!((other60414 == null)))) && ((((this60413__$1.constructor === other60414.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60413__$1.schema,other60414.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60413__$1.postcondition,other60414.postcondition)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60413__$1.post_name,other60414.post_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60413__$1.__extmap,other60414.__extmap)))))))))));
}));

(schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"post-name","post-name",491455269),null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.Constrained.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60412){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60435 = k60412;
var G__60435__$1 = (((G__60435 instanceof cljs.core.Keyword))?G__60435.fqn:null);
switch (G__60435__$1) {
case "schema":
case "postcondition":
case "post-name":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60412);

}
}));

(schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60411){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60440 = cljs.core.keyword_identical_QMARK_;
var expr__60441 = k__5352__auto__;
if(cljs.core.truth_((pred__60440.cljs$core$IFn$_invoke$arity$2 ? pred__60440.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60441) : pred__60440.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60441)))){
return (new schema.core.Constrained(G__60411,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60440.cljs$core$IFn$_invoke$arity$2 ? pred__60440.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__60441) : pred__60440.call(null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__60441)))){
return (new schema.core.Constrained(self__.schema,G__60411,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60440.cljs$core$IFn$_invoke$arity$2 ? pred__60440.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__60441) : pred__60440.call(null,new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__60441)))){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__60411,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60411),null));
}
}
}
}));

(schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name,null))], null),self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60411){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__60411,self__.__extmap,self__.__hash));
}));

(schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.Constrained.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null),null,schema.spec.core.precondition(this$__$1,self__.postcondition,(function (p1__60410_SHARP_){
return (new cljs.core.List(null,self__.post_name,(new cljs.core.List(null,p1__60410_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"constrained","constrained",-2057147788,null),(new cljs.core.List(null,schema.core.explain(self__.schema),(new cljs.core.List(null,self__.post_name,null,(1),null)),(2),null)),(3),null));
}));

(schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"postcondition","postcondition",903430305,null),new cljs.core.Symbol(null,"post-name","post-name",2131986796,null)], null);
}));

(schema.core.Constrained.cljs$lang$type = true);

(schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/Constrained",null,(1),null));
}));

(schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/Constrained");
}));

/**
 * Positional factory function for schema.core/Constrained.
 */
schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

/**
 * Factory function for schema.core/Constrained, taking a map of keywords to field values.
 */
schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__60415){
var extmap__5385__auto__ = (function (){var G__60447 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60415,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], 0));
if(cljs.core.record_QMARK_(G__60415)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60447);
} else {
return G__60447;
}
})();
return (new schema.core.Constrained(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__60415),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222).cljs$core$IFn$_invoke$arity$1(G__60415),new cljs.core.Keyword(null,"post-name","post-name",491455269).cljs$core$IFn$_invoke$arity$1(G__60415),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var G__60449 = arguments.length;
switch (G__60449) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(s,p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
}));

(schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
}));

(schema.core.constrained.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60452,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60502 = k60452;
var G__60502__$1 = (((G__60502 instanceof cljs.core.Keyword))?G__60502.fqn:null);
switch (G__60502__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60452,else__5346__auto__);

}
}));

(schema.core.Both.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60520){
var vec__60521 = p__60520;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60521,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60521,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.Both.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
}));

(schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (f,t){
return (function (x){
var tx = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(schema.utils.error_QMARK_(tx)){
return tx;
} else {
var G__60524 = (function (){var or__5045__auto__ = tx;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60524) : f.call(null,G__60524));
}
});
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60450_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),p1__60450_SHARP_], null),params);
}),cljs.core.reverse(self__.schemas)));
}));

(schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.Both{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60451){
var self__ = this;
var G__60451__$1 = this;
return (new cljs.core.RecordIter((0),G__60451__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1189778852 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60453,other60454){
var self__ = this;
var this60453__$1 = this;
return (((!((other60454 == null)))) && ((((this60453__$1.constructor === other60454.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60453__$1.schemas,other60454.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60453__$1.__extmap,other60454.__extmap)))))));
}));

(schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.Both.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.core.precondition,schema.core.spec),self__.schemas));
}));

(schema.core.Both.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60452){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60525 = k60452;
var G__60525__$1 = (((G__60525 instanceof cljs.core.Keyword))?G__60525.fqn:null);
switch (G__60525__$1) {
case "schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60452);

}
}));

(schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60451){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60526 = cljs.core.keyword_identical_QMARK_;
var expr__60527 = k__5352__auto__;
if(cljs.core.truth_((pred__60526.cljs$core$IFn$_invoke$arity$2 ? pred__60526.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__60527) : pred__60526.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__60527)))){
return (new schema.core.Both(G__60451,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60451),null));
}
}));

(schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60451){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__60451,self__.__extmap,self__.__hash));
}));

(schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.Both.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
}));

(schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.Both.cljs$lang$type = true);

(schema.core.Both.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/Both",null,(1),null));
}));

(schema.core.Both.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/Both");
}));

/**
 * Positional factory function for schema.core/Both.
 */
schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

/**
 * Factory function for schema.core/Both, taking a map of keywords to field values.
 */
schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__60466){
var extmap__5385__auto__ = (function (){var G__60529 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60466,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_(G__60466)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60529);
} else {
return G__60529;
}
})();
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__60466),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.Both.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61189 = arguments.length;
var i__5770__auto___61190 = (0);
while(true){
if((i__5770__auto___61190 < len__5769__auto___61189)){
args__5775__auto__.push((arguments[i__5770__auto___61190]));

var G__61191 = (i__5770__auto___61190 + (1));
i__5770__auto___61190 = G__61191;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
}));

(schema.core.both.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.both.cljs$lang$applyTo = (function (seq60530){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60530));
}));

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__60531 = cljs.core.meta(v);
var map__60531__$1 = cljs.core.__destructure_map(map__60531);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60531__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60533,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60537 = k60533;
var G__60537__$1 = (((G__60537 instanceof cljs.core.Keyword))?G__60537.fqn:null);
switch (G__60537__$1) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60533,else__5346__auto__);

}
}));

(schema.core.Recursive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60538){
var vec__60539 = p__60538;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60539,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60539,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.Recursive{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60532){
var self__ = this;
var G__60532__$1 = this;
return (new cljs.core.RecordIter((0),G__60532__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derefable","derefable",377265868)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1521498755 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60534,other60535){
var self__ = this;
var this60534__$1 = this;
return (((!((other60535 == null)))) && ((((this60534__$1.constructor === other60535.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60534__$1.derefable,other60535.derefable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60534__$1.__extmap,other60535.__extmap)))))));
}));

(schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derefable","derefable",377265868),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.Recursive.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60533){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60542 = k60533;
var G__60542__$1 = (((G__60542 instanceof cljs.core.Keyword))?G__60542.fqn:null);
switch (G__60542__$1) {
case "derefable":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60533);

}
}));

(schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60532){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60543 = cljs.core.keyword_identical_QMARK_;
var expr__60544 = k__5352__auto__;
if(cljs.core.truth_((pred__60543.cljs$core$IFn$_invoke$arity$2 ? pred__60543.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__60544) : pred__60543.call(null,new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__60544)))){
return (new schema.core.Recursive(G__60532,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60532),null));
}
}));

(schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable,null))], null),self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60532){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__60532,self__.__extmap,self__.__hash));
}));

(schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.Recursive.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref(self__.derefable)], null)], null));
}));

(schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"recursive","recursive",-1935549897,null),(new cljs.core.List(null,(((self__.derefable instanceof cljs.core.Var))?(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,schema.core.var_name(self__.derefable),null,(1),null)),(2),null)):new cljs.core.Symbol(null,"...","...",-1926939749,null)),null,(1),null)),(2),null));
}));

(schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefable","derefable",2017797395,null)], null);
}));

(schema.core.Recursive.cljs$lang$type = true);

(schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/Recursive",null,(1),null));
}));

(schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/Recursive");
}));

/**
 * Positional factory function for schema.core/Recursive.
 */
schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

/**
 * Factory function for schema.core/Recursive, taking a map of keywords to field values.
 */
schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__60536){
var extmap__5385__auto__ = (function (){var G__60546 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60536,new cljs.core.Keyword(null,"derefable","derefable",377265868));
if(cljs.core.record_QMARK_(G__60536)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60546);
} else {
return G__60546;
}
})();
return (new schema.core.Recursive(new cljs.core.Keyword(null,"derefable","derefable",377265868).cljs$core$IFn$_invoke$arity$1(G__60536),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if((((!((schema__$1 == null))))?(((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.cljs$core$IDeref$))))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not an IDeref: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema__$1], 0))));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60550,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60554 = k60550;
var G__60554__$1 = (((G__60554 instanceof cljs.core.Keyword))?G__60554.fqn:null);
switch (G__60554__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60550,else__5346__auto__);

}
}));

(schema.core.Atomic.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60555){
var vec__60556 = p__60555;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60556,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60556,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.Atomic{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60549){
var self__ = this;
var G__60549__$1 = this;
return (new cljs.core.RecordIter((0),G__60549__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1019346599 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60551,other60552){
var self__ = this;
var this60551__$1 = this;
return (((!((other60552 == null)))) && ((((this60551__$1.constructor === other60552.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60551__$1.schema,other60552.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60551__$1.__extmap,other60552.__extmap)))))));
}));

(schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.Atomic.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60550){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60559 = k60550;
var G__60559__$1 = (((G__60559 instanceof cljs.core.Keyword))?G__60559.fqn:null);
switch (G__60559__$1) {
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60550);

}
}));

(schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60549){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60560 = cljs.core.keyword_identical_QMARK_;
var expr__60561 = k__5352__auto__;
if(cljs.core.truth_((pred__60560.cljs$core$IFn$_invoke$arity$2 ? pred__60560.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60561) : pred__60560.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60561)))){
return (new schema.core.Atomic(G__60549,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60549),null));
}
}));

(schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60549){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__60549,self__.__extmap,self__.__hash));
}));

(schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.Atomic.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.atom_QMARK_,(function (p1__50581__50582__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),(new cljs.core.List(null,p1__50581__50582__auto__,null,(1),null)),(2),null));
})),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.schema,(function (item_fn,coll){
var G__60563_61201 = cljs.core.deref(coll);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__60563_61201) : item_fn.call(null,G__60563_61201));

return null;
}))], null),(function (_,xs,___$1){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(xs));
}));
}));

(schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atom","atom",1243487874,null),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Atomic.cljs$lang$type = true);

(schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/Atomic",null,(1),null));
}));

(schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/Atomic");
}));

/**
 * Positional factory function for schema.core/Atomic.
 */
schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Atomic, taking a map of keywords to field values.
 */
schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__60553){
var extmap__5385__auto__ = (function (){var G__60564 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60553,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_(G__60553)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60564);
} else {
return G__60564;
}
})();
return (new schema.core.Atomic(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__60553),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic(schema__$1);
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
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60574,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60582 = k60574;
var G__60582__$1 = (((G__60582 instanceof cljs.core.Keyword))?G__60582.fqn:null);
switch (G__60582__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60574,else__5346__auto__);

}
}));

(schema.core.RequiredKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60583){
var vec__60584 = p__60583;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60584,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60584,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.RequiredKey{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60573){
var self__ = this;
var G__60573__$1 = this;
return (new cljs.core.RecordIter((0),G__60573__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1805575094 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60575,other60576){
var self__ = this;
var this60575__$1 = this;
return (((!((other60576 == null)))) && ((((this60575__$1.constructor === other60576.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60575__$1.k,other60576.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60575__$1.__extmap,other60576.__extmap)))))));
}));

(schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.RequiredKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60574){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60587 = k60574;
var G__60587__$1 = (((G__60587 instanceof cljs.core.Keyword))?G__60587.fqn:null);
switch (G__60587__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60574);

}
}));

(schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60573){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60588 = cljs.core.keyword_identical_QMARK_;
var expr__60589 = k__5352__auto__;
if(cljs.core.truth_((pred__60588.cljs$core$IFn$_invoke$arity$2 ? pred__60588.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__60589) : pred__60588.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__60589)))){
return (new schema.core.RequiredKey(G__60573,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60573),null));
}
}));

(schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60573){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__60573,self__.__extmap,self__.__hash));
}));

(schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(schema.core.RequiredKey.cljs$lang$type = true);

(schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/RequiredKey",null,(1),null));
}));

(schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/RequiredKey");
}));

/**
 * Positional factory function for schema.core/RequiredKey.
 */
schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

/**
 * Factory function for schema.core/RequiredKey, taking a map of keywords to field values.
 */
schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__60581){
var extmap__5385__auto__ = (function (){var G__60591 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60581,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__60581)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60591);
} else {
return G__60591;
}
})();
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__60581),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return (((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey)));
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
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60593,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60597 = k60593;
var G__60597__$1 = (((G__60597 instanceof cljs.core.Keyword))?G__60597.fqn:null);
switch (G__60597__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60593,else__5346__auto__);

}
}));

(schema.core.OptionalKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60598){
var vec__60599 = p__60598;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60599,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60599,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.OptionalKey{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60592){
var self__ = this;
var G__60592__$1 = this;
return (new cljs.core.RecordIter((0),G__60592__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1508333161 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60594,other60595){
var self__ = this;
var this60594__$1 = this;
return (((!((other60595 == null)))) && ((((this60594__$1.constructor === other60595.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60594__$1.k,other60595.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60594__$1.__extmap,other60595.__extmap)))))));
}));

(schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.OptionalKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60593){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60602 = k60593;
var G__60602__$1 = (((G__60602 instanceof cljs.core.Keyword))?G__60602.fqn:null);
switch (G__60602__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60593);

}
}));

(schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60592){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60603 = cljs.core.keyword_identical_QMARK_;
var expr__60604 = k__5352__auto__;
if(cljs.core.truth_((pred__60603.cljs$core$IFn$_invoke$arity$2 ? pred__60603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__60604) : pred__60603.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__60604)))){
return (new schema.core.OptionalKey(G__60592,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60592),null));
}
}));

(schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60592){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__60592,self__.__extmap,self__.__hash));
}));

(schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(schema.core.OptionalKey.cljs$lang$type = true);

(schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/OptionalKey",null,(1),null));
}));

(schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/OptionalKey");
}));

/**
 * Positional factory function for schema.core/OptionalKey.
 */
schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

/**
 * Factory function for schema.core/OptionalKey, taking a map of keywords to field values.
 */
schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__60596){
var extmap__5385__auto__ = (function (){var G__60606 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60596,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__60596)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60606);
} else {
return G__60606;
}
})();
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__60596),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(schema.core.optional_key_QMARK_(ks)){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
return ((schema.core.required_key_QMARK_(ks)) || (schema.core.optional_key_QMARK_(ks)));
});
schema.core.map_entry_ctor = (function schema$core$map_entry_ctor(p__60607){
var vec__60608 = p__60607;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60608,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60608,(1),null);
var coll = vec__60608;
return (new cljs.core.MapEntry(k,v,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60612,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60620 = k60612;
var G__60620__$1 = (((G__60620 instanceof cljs.core.Keyword))?G__60620.fqn:null);
switch (G__60620__$1) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60612,else__5346__auto__);

}
}));

(schema.core.MapEntry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60621){
var vec__60622 = p__60621;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60622,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60622,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.MapEntry{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60611){
var self__ = this;
var G__60611__$1 = this;
return (new cljs.core.RecordIter((0),G__60611__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-804356212 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60613,other60614){
var self__ = this;
var this60613__$1 = this;
return (((!((other60614 == null)))) && ((((this60613__$1.constructor === other60614.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60613__$1.key_schema,other60614.key_schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60613__$1.val_schema,other60614.val_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60613__$1.__extmap,other60614.__extmap)))))))));
}));

(schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.MapEntry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60612){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60634 = k60612;
var G__60634__$1 = (((G__60634 instanceof cljs.core.Keyword))?G__60634.fqn:null);
switch (G__60634__$1) {
case "key-schema":
case "val-schema":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60612);

}
}));

(schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60611){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60655 = cljs.core.keyword_identical_QMARK_;
var expr__60656 = k__5352__auto__;
if(cljs.core.truth_((pred__60655.cljs$core$IFn$_invoke$arity$2 ? pred__60655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__60656) : pred__60655.call(null,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__60656)))){
return (new schema.core.MapEntry(G__60611,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60655.cljs$core$IFn$_invoke$arity$2 ? pred__60655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__60656) : pred__60655.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__60656)))){
return (new schema.core.MapEntry(self__.key_schema,G__60611,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60611),null));
}
}
}));

(schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema,null))], null),self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60611){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__60611,self__.__extmap,self__.__hash));
}));

(schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.MapEntry.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core._PLUS_no_precondition_PLUS_,schema.core.map_entry_ctor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.key_schema,(function (item_fn,e){
var G__60675_61208 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__60675_61208) : item_fn.call(null,G__60675_61208));

return e;
})),schema.spec.collection.one_element(true,self__.val_schema,(function (item_fn,e){
var G__60676_61209 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__60676_61209) : item_fn.call(null,G__60676_61209));

return null;
}))], null),(function (p__60677,p__60678,_){
var vec__60679 = p__60677;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60679,(0),null);
var vec__60682 = p__60678;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60682,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60682,(1),null);
var temp__5802__auto__ = schema.utils.error_val(xk);
if(cljs.core.truth_(temp__5802__auto__)){
var k_err = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val(xv)], null);
}
}));
}));

(schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null),(new cljs.core.List(null,schema.core.explain(self__.key_schema),(new cljs.core.List(null,schema.core.explain(self__.val_schema),null,(1),null)),(2),null)),(3),null));
}));

(schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-schema","key-schema",543870801,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
}));

(schema.core.MapEntry.cljs$lang$type = true);

(schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/MapEntry",null,(1),null));
}));

(schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/MapEntry");
}));

/**
 * Positional factory function for schema.core/MapEntry.
 */
schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

/**
 * Factory function for schema.core/MapEntry, taking a map of keywords to field values.
 */
schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__60615){
var extmap__5385__auto__ = (function (){var G__60685 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60615,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], 0));
if(cljs.core.record_QMARK_(G__60615)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60685);
} else {
return G__60685;
}
})();
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726).cljs$core$IFn$_invoke$arity$1(G__60615),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__60615),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(schema.core.specific_key_QMARK_(kspec)){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return (new cljs.core.List(null,((schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)),(new cljs.core.List(null,schema.core.explicit_schema_key(kspec),null,(1),null)),(2),null));
}
} else {
return schema.core.explain(kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema(this$);
var duplicate_keys_61210 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60686_SHARP_){
return (cljs.core.count(p1__60686_SHARP_) > (1));
}),cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_61210)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duplicate_keys_61210], 0))));
}

var without_extra_keys_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5523__auto__ = (function schema$core$map_elements_$_iter__60688(s__60689){
return (new cljs.core.LazySeq(null,(function (){
var s__60689__$1 = s__60689;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60689__$1);
if(temp__5804__auto__){
var s__60689__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60689__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60689__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60691 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60690 = (0);
while(true){
if((i__60690 < size__5522__auto__)){
var vec__60692 = cljs.core._nth(c__5521__auto__,i__60690);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60692,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60692,(1),null);
cljs.core.chunk_append(b__60691,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__60690,rk,required_QMARK_,vec__60692,k,v,c__5521__auto__,size__5522__auto__,b__60691,s__60689__$2,temp__5804__auto__,without_extra_keys_schema,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(required_QMARK_){
var G__60695_61211 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__60695_61211) : item_fn.call(null,G__60695_61211));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__60690,rk,required_QMARK_,vec__60692,k,v,c__5521__auto__,size__5522__auto__,b__60691,s__60689__$2,temp__5804__auto__,without_extra_keys_schema,extra_keys_schema))
);
})());

var G__61212 = (i__60690 + (1));
i__60690 = G__61212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60691),schema$core$map_elements_$_iter__60688(cljs.core.chunk_rest(s__60689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60691),null);
}
} else {
var vec__60696 = cljs.core.first(s__60689__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60696,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__60696,k,v,s__60689__$2,temp__5804__auto__,without_extra_keys_schema,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(required_QMARK_){
var G__60699_61213 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__60699_61213) : item_fn.call(null,G__60699_61213));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__60696,k,v,s__60689__$2,temp__5804__auto__,without_extra_keys_schema,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__60688(cljs.core.rest(s__60689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(without_extra_keys_schema);
})(),(cljs.core.truth_(extra_keys_schema)?(function (){var specific_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explicit_schema_key,cljs.core.keys(without_extra_keys_schema)));
var vec__60700 = cljs.core.find(this$,extra_keys_schema);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60700,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60700,(1),null);
var restricted_ks = schema.core.constrained.cljs$core$IFn$_invoke$arity$2(ks,(function (p1__60687_SHARP_){
return (!(cljs.core.contains_QMARK_(specific_keys,p1__60687_SHARP_)));
}));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(schema.core.map_entry(restricted_ks,vs))], null);
})():null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__5523__auto__ = (function schema$core$map_error_$_iter__60703(s__60704){
return (new cljs.core.LazySeq(null,(function (){
var s__60704__$1 = s__60704;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60704__$1);
if(temp__5804__auto__){
var s__60704__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60704__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60704__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60706 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60705 = (0);
while(true){
if((i__60705 < size__5522__auto__)){
var vec__60707 = cljs.core._nth(c__5521__auto__,i__60705);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60707,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60707,(1),null);
cljs.core.chunk_append(b__60706,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));

var G__61214 = (i__60705 + (1));
i__60705 = G__61214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60706),schema$core$map_error_$_iter__60703(cljs.core.chunk_rest(s__60704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60706),null);
}
} else {
var vec__60710 = cljs.core.first(s__60704__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60710,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60710,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null),schema$core$map_error_$_iter__60703(cljs.core.rest(s__60704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__50581__50582__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"map?","map?",-1780568534,null),(new cljs.core.List(null,p1__50581__50582__auto__,null,(1),null)),(2),null));
})),(function (p1__60713_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__60713_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function schema$core$map_explain_$_iter__60714(s__60715){
return (new cljs.core.LazySeq(null,(function (){
var s__60715__$1 = s__60715;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60715__$1);
if(temp__5804__auto__){
var s__60715__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60715__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60715__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60717 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60716 = (0);
while(true){
if((i__60716 < size__5522__auto__)){
var vec__60718 = cljs.core._nth(c__5521__auto__,i__60716);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60718,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60718,(1),null);
cljs.core.chunk_append(b__60717,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__61215 = (i__60716 + (1));
i__60716 = G__61215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60717),schema$core$map_explain_$_iter__60714(cljs.core.chunk_rest(s__60715__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60717),null);
}
} else {
var vec__60721 = cljs.core.first(s__60715__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60721,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60721,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__60714(cljs.core.rest(s__60715__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(this$);
})());
});
(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
}));
(cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,cljs.core.set_QMARK_,(function (p1__50581__50582__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),(new cljs.core.List(null,p1__50581__50582__auto__,null,(1),null)),(2),null));
})),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.first(this$__$1))], null),(function (_,xs,___$1){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
}));
}));

(cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
}));
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60725,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60729 = k60725;
var G__60729__$1 = (((G__60729 instanceof cljs.core.Keyword))?G__60729.fqn:null);
switch (G__60729__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60725,else__5346__auto__);

}
}));

(schema.core.Queue.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60730){
var vec__60731 = p__60730;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60731,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60731,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.Queue{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60724){
var self__ = this;
var G__60724__$1 = this;
return (new cljs.core.RecordIter((0),G__60724__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1542973436 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60726,other60727){
var self__ = this;
var this60726__$1 = this;
return (((!((other60727 == null)))) && ((((this60726__$1.constructor === other60727.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60726__$1.schema,other60727.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60726__$1.__extmap,other60727.__extmap)))))));
}));

(schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.Queue.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60725){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60735 = k60725;
var G__60735__$1 = (((G__60735 instanceof cljs.core.Keyword))?G__60735.fqn:null);
switch (G__60735__$1) {
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60725);

}
}));

(schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60724){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60736 = cljs.core.keyword_identical_QMARK_;
var expr__60737 = k__5352__auto__;
if(cljs.core.truth_((pred__60736.cljs$core$IFn$_invoke$arity$2 ? pred__60736.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60737) : pred__60736.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60737)))){
return (new schema.core.Queue(G__60724,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60724),null));
}
}));

(schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60724){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__60724,self__.__extmap,self__.__hash));
}));

(schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.Queue.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.queue_QMARK_,(function (p1__50581__50582__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"queue?","queue?",-880510795,null),(new cljs.core.List(null,p1__50581__50582__auto__,null,(1),null)),(2),null));
})),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(self__.schema)], null),(function (_,xs,___$1){
return schema.core.as_queue(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
}));
}));

(schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Queue.cljs$lang$type = true);

(schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/Queue",null,(1),null));
}));

(schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/Queue");
}));

/**
 * Positional factory function for schema.core/Queue.
 */
schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Queue, taking a map of keywords to field values.
 */
schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__60728){
var extmap__5385__auto__ = (function (){var G__60742 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60728,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_(G__60728)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60742);
} else {
return G__60742;
}
})();
return (new schema.core.Queue(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__60728),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.Queue.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
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
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60744,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60751 = k60744;
var G__60751__$1 = (((G__60751 instanceof cljs.core.Keyword))?G__60751.fqn:null);
switch (G__60751__$1) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60744,else__5346__auto__);

}
}));

(schema.core.One.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60752){
var vec__60753 = p__60752;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60753,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60753,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.One{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60743){
var self__ = this;
var G__60743__$1 = this;
return (new cljs.core.RecordIter((0),G__60743__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-197981045 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60745,other60746){
var self__ = this;
var this60745__$1 = this;
return (((!((other60746 == null)))) && ((((this60745__$1.constructor === other60746.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60745__$1.schema,other60746.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60745__$1.optional_QMARK_,other60746.optional_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60745__$1.name,other60746.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60745__$1.__extmap,other60746.__extmap)))))))))));
}));

(schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.One.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60744){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60756 = k60744;
var G__60756__$1 = (((G__60756 instanceof cljs.core.Keyword))?G__60756.fqn:null);
switch (G__60756__$1) {
case "schema":
case "optional?":
case "name":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60744);

}
}));

(schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60743){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60757 = cljs.core.keyword_identical_QMARK_;
var expr__60758 = k__5352__auto__;
if(cljs.core.truth_((pred__60757.cljs$core$IFn$_invoke$arity$2 ? pred__60757.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60758) : pred__60757.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60758)))){
return (new schema.core.One(G__60743,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60757.cljs$core$IFn$_invoke$arity$2 ? pred__60757.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__60758) : pred__60757.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__60758)))){
return (new schema.core.One(self__.schema,G__60743,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60757.cljs$core$IFn$_invoke$arity$2 ? pred__60757.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__60758) : pred__60757.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__60758)))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__60743,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60743),null));
}
}
}
}));

(schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null))], null),self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60743){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__60743,self__.__extmap,self__.__hash));
}));

(schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
}));

(schema.core.One.cljs$lang$type = true);

(schema.core.One.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/One",null,(1),null));
}));

(schema.core.One.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/One");
}));

/**
 * Positional factory function for schema.core/One.
 */
schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

/**
 * Factory function for schema.core/One, taking a map of keywords to field values.
 */
schema.core.map__GT_One = (function schema$core$map__GT_One(G__60750){
var extmap__5385__auto__ = (function (){var G__60760 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60750,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], 0));
if(cljs.core.record_QMARK_(G__60750)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60760);
} else {
return G__60760;
}
})();
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__60750),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__60750),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__60750),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
/**
 * Parses and validates a sequence schema, returning a vector in the form
 *   [singles multi] where singles is a sequence of 'one' and 'optional' schemas
 *   and multi is the rest-schema (which may be nil). A valid sequence schema is
 *   a vector in the form [one* optional* rest-schema?].
 */
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){
var vec__60764 = cljs.core.split_with((function (p1__60761_SHARP_){
return (((p1__60761_SHARP_ instanceof schema.core.One)) && (cljs.core.not(new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__60761_SHARP_))));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60764,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60764,(1),null);
var vec__60767 = cljs.core.split_with((function (p1__60762_SHARP_){
var and__5043__auto__ = (p1__60762_SHARP_ instanceof schema.core.One);
if(and__5043__auto__){
return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__60762_SHARP_);
} else {
return and__5043__auto__;
}
}),more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60767,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60767,(1),null);
if((((cljs.core.count(more__$1) <= (1))) && (cljs.core.not_any_QMARK_((function (p1__60763_SHARP_){
return (p1__60763_SHARP_ instanceof schema.core.One);
}),more__$1)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("%s is not a valid sequence schema; %s%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,"a valid sequence schema consists of zero or more `one` elements, ","followed by zero or more `optional` elements, followed by an optional ","schema that will match the remaining elements."], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
(cljs.core.PersistentVector.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,(function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_(x)));
}),(function (p1__60770_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),(new cljs.core.List(null,p1__60770_SHARP_,null,(1),null)),(2),null));
})),cljs.core.vec,(function (){var vec__60771 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60771,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60771,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (more,s){
if(cljs.core.not(s.optional_QMARK_)){
return cljs.core.cons(schema.spec.collection.one_element(true,schema.core.named(s.schema,s.name),(function (item_fn,x){
var temp__5802__auto__ = cljs.core.seq(x);
if(temp__5802__auto__){
var x__$1 = temp__5802__auto__;
var G__60774_61220 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__60774_61220) : item_fn.call(null,G__60774_61220));

return cljs.core.rest(x__$1);
} else {
var G__60775_61221 = schema.utils.error(schema.utils.make_ValidationError(s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay((function (){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(new cljs.core.List(null,s.name,null,(1),null)),(2),null));
}),null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__60775_61221) : item_fn.call(null,G__60775_61221));

return null;
}
})),more);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.optional_tail(schema.core.named(s.schema,s.name),(function (item_fn,x){
var temp__5804__auto__ = cljs.core.seq(x);
if(temp__5804__auto__){
var x__$1 = temp__5804__auto__;
var G__60776_61222 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__60776_61222) : item_fn.call(null,G__60776_61222));

return cljs.core.rest(x__$1);
} else {
return null;
}
}),more)], null);
}
}),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(multi)], null):null),cljs.core.reverse(singles));
})(),(function (_,elts,extra){
var head = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts);
var G__60777 = head;
if(cljs.core.seq(extra)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60777,schema.utils.error_val(schema.utils.error(schema.utils.make_ValidationError(null,extra,(new cljs.core.Delay((function (){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null),(new cljs.core.List(null,cljs.core.count(extra),null,(1),null)),(2),null));
}),null)),null))));
} else {
return G__60777;
}
}));
}));

(cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__60778 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60778,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60778,(1),null);
var G__60781 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (s){
return (new cljs.core.List(null,(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null)),(new cljs.core.List(null,schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s),null,(1),null)),(2),null)),(3),null));
}),singles);
if(cljs.core.truth_(multi)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60781,schema.core.explain(multi));
} else {
return G__60781;
}
}));
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60786,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60790 = k60786;
var G__60790__$1 = (((G__60790 instanceof cljs.core.Keyword))?G__60790.fqn:null);
switch (G__60790__$1) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60786,else__5346__auto__);

}
}));

(schema.core.Record.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60791){
var vec__60792 = p__60791;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60792,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60792,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.Record{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60785){
var self__ = this;
var G__60785__$1 = this;
return (new cljs.core.RecordIter((0),G__60785__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1486476872 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60787,other60788){
var self__ = this;
var this60787__$1 = this;
return (((!((other60788 == null)))) && ((((this60787__$1.constructor === other60788.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60787__$1.klass,other60788.klass)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60787__$1.schema,other60788.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60787__$1.__extmap,other60788.__extmap)))))))));
}));

(schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.Record.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60786){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60807 = k60786;
var G__60807__$1 = (((G__60807 instanceof cljs.core.Keyword))?G__60807.fqn:null);
switch (G__60807__$1) {
case "klass":
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60786);

}
}));

(schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60785){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60808 = cljs.core.keyword_identical_QMARK_;
var expr__60809 = k__5352__auto__;
if(cljs.core.truth_((pred__60808.cljs$core$IFn$_invoke$arity$2 ? pred__60808.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__60809) : pred__60808.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__60809)))){
return (new schema.core.Record(G__60785,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60808.cljs$core$IFn$_invoke$arity$2 ? pred__60808.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60809) : pred__60808.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__60809)))){
return (new schema.core.Record(self__.klass,G__60785,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60785),null));
}
}
}));

(schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60785){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__60785,self__.__extmap,self__.__hash));
}));

(schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.Record.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec((function (){var p = schema.spec.core.precondition(this$__$1,(function (p1__60782_SHARP_){
return (p1__60782_SHARP_ instanceof self__.klass);
}),(function (p1__60783_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,self__.klass,(new cljs.core.List(null,p1__60783_SHARP_,null,(1),null)),(2),null)),(3),null));
}));
var temp__5802__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var evf = temp__5802__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,(function (p1__60784_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"passes-extra-validation?","passes-extra-validation?",-1964809231,null),(new cljs.core.List(null,p1__60784_SHARP_,null,(1),null)),(2),null));
})));
} else {
return p;
}
})(),new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)),schema.core.map_elements(self__.schema),schema.core.map_error());
}));

(schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"record","record",861424668,null),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.klass], 0))),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null)),(3),null));
}));

(schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Record.cljs$lang$type = true);

(schema.core.Record.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/Record",null,(1),null));
}));

(schema.core.Record.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/Record");
}));

/**
 * Positional factory function for schema.core/Record.
 */
schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Record, taking a map of keywords to field values.
 */
schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__60789){
var extmap__5385__auto__ = (function (){var G__60818 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60789,new cljs.core.Keyword(null,"klass","klass",-1386752349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"schema","schema",-1582001791)], 0));
if(cljs.core.record_QMARK_(G__60789)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60818);
} else {
return G__60818;
}
})();
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__60789),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__60789),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.Record.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__60830 = cljs.core.split_with((function (p1__60828_SHARP_){
return (p1__60828_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60830,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60830,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60829_SHARP_){
return schema.core.explain(p1__60829_SHARP_.schema);
}),required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60834,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60838 = k60834;
var G__60838__$1 = (((G__60838 instanceof cljs.core.Keyword))?G__60838.fqn:null);
switch (G__60838__$1) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60834,else__5346__auto__);

}
}));

(schema.core.FnSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60864){
var vec__60866 = p__60864;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60866,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60866,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.core.FnSchema{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60833){
var self__ = this;
var G__60833__$1 = this;
return (new cljs.core.RecordIter((0),G__60833__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-2054647546 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60835,other60836){
var self__ = this;
var this60835__$1 = this;
return (((!((other60836 == null)))) && ((((this60835__$1.constructor === other60836.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60835__$1.output_schema,other60836.output_schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60835__$1.input_schemas,other60836.input_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60835__$1.__extmap,other60836.__extmap)))))))));
}));

(schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.core.FnSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60834){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60906 = k60834;
var G__60906__$1 = (((G__60906 instanceof cljs.core.Keyword))?G__60906.fqn:null);
switch (G__60906__$1) {
case "output-schema":
case "input-schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60834);

}
}));

(schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60833){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60907 = cljs.core.keyword_identical_QMARK_;
var expr__60908 = k__5352__auto__;
if(cljs.core.truth_((pred__60907.cljs$core$IFn$_invoke$arity$2 ? pred__60907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__60908) : pred__60907.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__60908)))){
return (new schema.core.FnSchema(G__60833,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60907.cljs$core$IFn$_invoke$arity$2 ? pred__60907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__60908) : pred__60907.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__60908)))){
return (new schema.core.FnSchema(self__.output_schema,G__60833,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60833),null));
}
}
}));

(schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas,null))], null),self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60833){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__60833,self__.__extmap,self__.__hash));
}));

(schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.core.FnSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,cljs.core.ifn_QMARK_,(function (p1__50581__50582__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),(new cljs.core.List(null,p1__50581__50582__auto__,null,(1),null)),(2),null));
})));
}));

(schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
}));

(schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
}));

(schema.core.FnSchema.cljs$lang$type = true);

(schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.core/FnSchema",null,(1),null));
}));

(schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.core/FnSchema");
}));

/**
 * Positional factory function for schema.core/FnSchema.
 */
schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

/**
 * Factory function for schema.core/FnSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__60837){
var extmap__5385__auto__ = (function (){var G__60910 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60837,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], 0));
if(cljs.core.record_QMARK_(G__60837)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60910);
} else {
return G__60910;
}
})();
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__60837),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__60837),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


(schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__50296__auto__,w__50297__auto__,___50298__auto__){
var s__50296__auto____$1 = this;
return cljs.core._write(w__50297__auto__,s__50296__auto____$1.schema$core$Schema$explain$arity$1(null));
}));

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
if((((!((schema__$1 == null))))?(((((schema__$1.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.cljs$core$IWithMeta$))))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,schema__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Named schema (such as the right-most `s/defalias` arg) must support metadata: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return cljs.core.deref(schema.utils.use_fn_validation);
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return cljs.core.reset_BANG_(schema.utils.use_fn_validation,on_QMARK_);
});
/**
 * A var that can be rebound to a function to customize the behavior
 *   of fn validation. When fn validation is on and `fn-validator` is
 *   bound to a function, normal argument and return value checks will
 *   be substituted with a call to this function with five arguments:
 * 
 *  direction   - :input or :output
 *  fn-name     - a symbol, the function's name
 *  schema      - the schema for the arglist or the return value
 *  checker     - a precompiled checker to check a value against
 *                the schema
 *  value       - the actual arglist or return value
 * 
 *   The function's return value will be ignored.
 */
schema.core.fn_validator = null;
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(f)], 0))));
}

var or__5045__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var m__50274__auto__ = cljs.core.meta(f);
var k__50275__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__5802__auto__ = cljs.core.find(m__50274__auto__,k__50275__auto__);
if(cljs.core.truth_(temp__5802__auto__)){
var pair__50276__auto__ = temp__5802__auto__;
return cljs.core.val(pair__50276__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__50275__auto__,m__50274__auto__], 0))));
}
}
});
if((typeof schema !== 'undefined') && (typeof schema.core !== 'undefined') && (typeof schema.core._STAR_elide_defprotocol_instrumentation_STAR_ !== 'undefined')){
} else {
/**
 * If the s/defprotocol instrumentation strategy is problematic
 *  for your platform, set atom to true and instrumentation will not
 *  be performed.
 * 
 *  Atom defaults to false.
 */
schema.core._STAR_elide_defprotocol_instrumentation_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
/**
 * If true, elide s/defprotocol instrumentation.
 * 
 *   Instrumentation is elided for any of the following cases:
 *   *   `@*elide-defprotocol-instrumentation*` is true during s/defprotocol macroexpansion
 *   *   `@*elide-defprotocol-instrumentation*` is true during s/defprotocol evaluation
 */
schema.core.instrument_defprotocol_QMARK_ = (function schema$core$instrument_defprotocol_QMARK_(){
return cljs.core.not(cljs.core.deref(schema.core._STAR_elide_defprotocol_instrumentation_STAR_));
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_(schema.utils.max_value_length,max_length);
});
Object.defineProperty(module.exports, "map__GT_Queue", { enumerable: false, get: function() { return schema.core.map__GT_Queue; } });
Object.defineProperty(module.exports, "__GT_Predicate", { enumerable: false, get: function() { return schema.core.__GT_Predicate; } });
Object.defineProperty(module.exports, "ConditionalSchema", { enumerable: false, get: function() { return schema.core.ConditionalSchema; } });
Object.defineProperty(module.exports, "arity", { enumerable: false, get: function() { return schema.core.arity; } });
Object.defineProperty(module.exports, "map__GT_FnSchema", { enumerable: false, get: function() { return schema.core.map__GT_FnSchema; } });
Object.defineProperty(module.exports, "map_error", { enumerable: false, get: function() { return schema.core.map_error; } });
Object.defineProperty(module.exports, "__GT_One", { enumerable: false, get: function() { return schema.core.__GT_One; } });
Object.defineProperty(module.exports, "named", { enumerable: false, get: function() { return schema.core.named; } });
Object.defineProperty(module.exports, "optional_key", { enumerable: false, get: function() { return schema.core.optional_key; } });
Object.defineProperty(module.exports, "instance_precondition", { enumerable: false, get: function() { return schema.core.instance_precondition; } });
Object.defineProperty(module.exports, "Protocol", { enumerable: false, get: function() { return schema.core.Protocol; } });
Object.defineProperty(module.exports, "map__GT_Atomic", { enumerable: false, get: function() { return schema.core.map__GT_Atomic; } });
Object.defineProperty(module.exports, "map__GT_AnythingSchema", { enumerable: false, get: function() { return schema.core.map__GT_AnythingSchema; } });
Object.defineProperty(module.exports, "map_explain", { enumerable: false, get: function() { return schema.core.map_explain; } });
Object.defineProperty(module.exports, "atom", { enumerable: false, get: function() { return schema.core.atom; } });
Object.defineProperty(module.exports, "Maybe", { enumerable: false, get: function() { return schema.core.Maybe; } });
Object.defineProperty(module.exports, "MapEntry", { enumerable: false, get: function() { return schema.core.MapEntry; } });
Object.defineProperty(module.exports, "One", { enumerable: false, get: function() { return schema.core.One; } });
Object.defineProperty(module.exports, "__GT_Isa", { enumerable: false, get: function() { return schema.core.__GT_Isa; } });
Object.defineProperty(module.exports, "map__GT_ConditionalSchema", { enumerable: false, get: function() { return schema.core.map__GT_ConditionalSchema; } });
Object.defineProperty(module.exports, "NamedSchema", { enumerable: false, get: function() { return schema.core.NamedSchema; } });
Object.defineProperty(module.exports, "map__GT_MapEntry", { enumerable: false, get: function() { return schema.core.map__GT_MapEntry; } });
Object.defineProperty(module.exports, "required_key_QMARK_", { enumerable: false, get: function() { return schema.core.required_key_QMARK_; } });
Object.defineProperty(module.exports, "__GT_Both", { enumerable: false, get: function() { return schema.core.__GT_Both; } });
Object.defineProperty(module.exports, "schema_with_name", { enumerable: false, get: function() { return schema.core.schema_with_name; } });
Object.defineProperty(module.exports, "atom_QMARK_", { enumerable: false, get: function() { return schema.core.atom_QMARK_; } });
Object.defineProperty(module.exports, "Symbol", { enumerable: false, get: function() { return schema.core.Symbol; } });
Object.defineProperty(module.exports, "__GT_Constrained", { enumerable: false, get: function() { return schema.core.__GT_Constrained; } });
Object.defineProperty(module.exports, "Either", { enumerable: false, get: function() { return schema.core.Either; } });
Object.defineProperty(module.exports, "map__GT_One", { enumerable: false, get: function() { return schema.core.map__GT_One; } });
Object.defineProperty(module.exports, "__GT_t_schema$core60234", { enumerable: false, get: function() { return schema.core.__GT_t_schema$core60234; } });
Object.defineProperty(module.exports, "fn_schema", { enumerable: false, get: function() { return schema.core.fn_schema; } });
Object.defineProperty(module.exports, "conditional", { enumerable: false, get: function() { return schema.core.conditional; } });
Object.defineProperty(module.exports, "precondition", { enumerable: false, get: function() { return schema.core.precondition; } });
Object.defineProperty(module.exports, "either", { enumerable: false, get: function() { return schema.core.either; } });
Object.defineProperty(module.exports, "explicit_schema_key", { enumerable: false, get: function() { return schema.core.explicit_schema_key; } });
Object.defineProperty(module.exports, "schema_name", { enumerable: false, get: function() { return schema.core.schema_name; } });
Object.defineProperty(module.exports, "Bool", { enumerable: false, get: function() { return schema.core.Bool; } });
Object.defineProperty(module.exports, "__GT_EqSchema", { enumerable: false, get: function() { return schema.core.__GT_EqSchema; } });
Object.defineProperty(module.exports, "enum$", { enumerable: false, get: function() { return schema.core.enum$; } });
Object.defineProperty(module.exports, "one", { enumerable: false, get: function() { return schema.core.one; } });
Object.defineProperty(module.exports, "_class_spec", { enumerable: false, get: function() { return schema.core._class_spec; } });
Object.defineProperty(module.exports, "find_extra_keys_schema", { enumerable: false, get: function() { return schema.core.find_extra_keys_schema; } });
Object.defineProperty(module.exports, "map__GT_Predicate", { enumerable: false, get: function() { return schema.core.map__GT_Predicate; } });
Object.defineProperty(module.exports, "fn_validator", { enumerable: false, get: function() { return schema.core.fn_validator; } });
Object.defineProperty(module.exports, "map__GT_RequiredKey", { enumerable: false, get: function() { return schema.core.map__GT_RequiredKey; } });
Object.defineProperty(module.exports, "Record", { enumerable: false, get: function() { return schema.core.Record; } });
Object.defineProperty(module.exports, "parse_sequence_schema", { enumerable: false, get: function() { return schema.core.parse_sequence_schema; } });
Object.defineProperty(module.exports, "_class_explain", { enumerable: false, get: function() { return schema.core._class_explain; } });
Object.defineProperty(module.exports, "OptionalKey", { enumerable: false, get: function() { return schema.core.OptionalKey; } });
Object.defineProperty(module.exports, "map__GT_Record", { enumerable: false, get: function() { return schema.core.map__GT_Record; } });
Object.defineProperty(module.exports, "EqSchema", { enumerable: false, get: function() { return schema.core.EqSchema; } });
Object.defineProperty(module.exports, "explain", { enumerable: false, get: function() { return schema.core.explain; } });
Object.defineProperty(module.exports, "map_spec", { enumerable: false, get: function() { return schema.core.map_spec; } });
Object.defineProperty(module.exports, "__GT_RequiredKey", { enumerable: false, get: function() { return schema.core.__GT_RequiredKey; } });
Object.defineProperty(module.exports, "CondPre", { enumerable: false, get: function() { return schema.core.CondPre; } });
Object.defineProperty(module.exports, "map__GT_Protocol", { enumerable: false, get: function() { return schema.core.map__GT_Protocol; } });
Object.defineProperty(module.exports, "set_max_value_length_BANG_", { enumerable: false, get: function() { return schema.core.set_max_value_length_BANG_; } });
Object.defineProperty(module.exports, "map__GT_Recursive", { enumerable: false, get: function() { return schema.core.map__GT_Recursive; } });
Object.defineProperty(module.exports, "Constrained", { enumerable: false, get: function() { return schema.core.Constrained; } });
Object.defineProperty(module.exports, "fn_validation_QMARK_", { enumerable: false, get: function() { return schema.core.fn_validation_QMARK_; } });
Object.defineProperty(module.exports, "isa", { enumerable: false, get: function() { return schema.core.isa; } });
Object.defineProperty(module.exports, "Num", { enumerable: false, get: function() { return schema.core.Num; } });
Object.defineProperty(module.exports, "eq", { enumerable: false, get: function() { return schema.core.eq; } });
Object.defineProperty(module.exports, "validate", { enumerable: false, get: function() { return schema.core.validate; } });
Object.defineProperty(module.exports, "__GT_Atomic", { enumerable: false, get: function() { return schema.core.__GT_Atomic; } });
Object.defineProperty(module.exports, "pred", { enumerable: false, get: function() { return schema.core.pred; } });
Object.defineProperty(module.exports, "AnythingSchema", { enumerable: false, get: function() { return schema.core.AnythingSchema; } });
Object.defineProperty(module.exports, "Any", { enumerable: false, get: function() { return schema.core.Any; } });
Object.defineProperty(module.exports, "__GT_CondPre", { enumerable: false, get: function() { return schema.core.__GT_CondPre; } });
Object.defineProperty(module.exports, "Regex", { enumerable: false, get: function() { return schema.core.Regex; } });
Object.defineProperty(module.exports, "__GT_EnumSchema", { enumerable: false, get: function() { return schema.core.__GT_EnumSchema; } });
Object.defineProperty(module.exports, "RequiredKey", { enumerable: false, get: function() { return schema.core.RequiredKey; } });
Object.defineProperty(module.exports, "cond_pre", { enumerable: false, get: function() { return schema.core.cond_pre; } });
Object.defineProperty(module.exports, "explain_kspec", { enumerable: false, get: function() { return schema.core.explain_kspec; } });
Object.defineProperty(module.exports, "record_STAR_", { enumerable: false, get: function() { return schema.core.record_STAR_; } });
Object.defineProperty(module.exports, "Inst", { enumerable: false, get: function() { return schema.core.Inst; } });
Object.defineProperty(module.exports, "queue", { enumerable: false, get: function() { return schema.core.queue; } });
Object.defineProperty(module.exports, "validator", { enumerable: false, get: function() { return schema.core.validator; } });
Object.defineProperty(module.exports, "map__GT_OptionalKey", { enumerable: false, get: function() { return schema.core.map__GT_OptionalKey; } });
Object.defineProperty(module.exports, "FnSchema", { enumerable: false, get: function() { return schema.core.FnSchema; } });
Object.defineProperty(module.exports, "if$", { enumerable: false, get: function() { return schema.core.if$; } });
Object.defineProperty(module.exports, "Predicate", { enumerable: false, get: function() { return schema.core.Predicate; } });
Object.defineProperty(module.exports, "make_fn_schema", { enumerable: false, get: function() { return schema.core.make_fn_schema; } });
Object.defineProperty(module.exports, "as_queue", { enumerable: false, get: function() { return schema.core.as_queue; } });
Object.defineProperty(module.exports, "Str", { enumerable: false, get: function() { return schema.core.Str; } });
Object.defineProperty(module.exports, "map__GT_EqSchema", { enumerable: false, get: function() { return schema.core.map__GT_EqSchema; } });
Object.defineProperty(module.exports, "__GT_AnythingSchema", { enumerable: false, get: function() { return schema.core.__GT_AnythingSchema; } });
Object.defineProperty(module.exports, "maybe", { enumerable: false, get: function() { return schema.core.maybe; } });
Object.defineProperty(module.exports, "check", { enumerable: false, get: function() { return schema.core.check; } });
Object.defineProperty(module.exports, "pair", { enumerable: false, get: function() { return schema.core.pair; } });
Object.defineProperty(module.exports, "map_entry_ctor", { enumerable: false, get: function() { return schema.core.map_entry_ctor; } });
Object.defineProperty(module.exports, "set_fn_validation_BANG_", { enumerable: false, get: function() { return schema.core.set_fn_validation_BANG_; } });
Object.defineProperty(module.exports, "EnumSchema", { enumerable: false, get: function() { return schema.core.EnumSchema; } });
Object.defineProperty(module.exports, "__GT_OptionalKey", { enumerable: false, get: function() { return schema.core.__GT_OptionalKey; } });
Object.defineProperty(module.exports, "map__GT_Constrained", { enumerable: false, get: function() { return schema.core.map__GT_Constrained; } });
Object.defineProperty(module.exports, "__GT_ConditionalSchema", { enumerable: false, get: function() { return schema.core.__GT_ConditionalSchema; } });
Object.defineProperty(module.exports, "__GT_NamedSchema", { enumerable: false, get: function() { return schema.core.__GT_NamedSchema; } });
Object.defineProperty(module.exports, "schematize_fn", { enumerable: false, get: function() { return schema.core.schematize_fn; } });
Object.defineProperty(module.exports, "Uuid", { enumerable: false, get: function() { return schema.core.Uuid; } });
Object.defineProperty(module.exports, "map__GT_Isa", { enumerable: false, get: function() { return schema.core.map__GT_Isa; } });
Object.defineProperty(module.exports, "map__GT_Either", { enumerable: false, get: function() { return schema.core.map__GT_Either; } });
Object.defineProperty(module.exports, "schema_ns", { enumerable: false, get: function() { return schema.core.schema_ns; } });
Object.defineProperty(module.exports, "__GT_Record", { enumerable: false, get: function() { return schema.core.__GT_Record; } });
Object.defineProperty(module.exports, "__GT_Recursive", { enumerable: false, get: function() { return schema.core.__GT_Recursive; } });
Object.defineProperty(module.exports, "protocol_name", { enumerable: false, get: function() { return schema.core.protocol_name; } });
Object.defineProperty(module.exports, "constrained", { enumerable: false, get: function() { return schema.core.constrained; } });
Object.defineProperty(module.exports, "Isa", { enumerable: false, get: function() { return schema.core.Isa; } });
Object.defineProperty(module.exports, "_STAR_elide_defprotocol_instrumentation_STAR_", { enumerable: false, get: function() { return schema.core._STAR_elide_defprotocol_instrumentation_STAR_; } });
Object.defineProperty(module.exports, "map__GT_CondPre", { enumerable: false, get: function() { return schema.core.map__GT_CondPre; } });
Object.defineProperty(module.exports, "queue_QMARK_", { enumerable: false, get: function() { return schema.core.queue_QMARK_; } });
Object.defineProperty(module.exports, "__GT_Either", { enumerable: false, get: function() { return schema.core.__GT_Either; } });
Object.defineProperty(module.exports, "map__GT_NamedSchema", { enumerable: false, get: function() { return schema.core.map__GT_NamedSchema; } });
Object.defineProperty(module.exports, "HasPrecondition", { enumerable: false, get: function() { return schema.core.HasPrecondition; } });
Object.defineProperty(module.exports, "Queue", { enumerable: false, get: function() { return schema.core.Queue; } });
Object.defineProperty(module.exports, "checker", { enumerable: false, get: function() { return schema.core.checker; } });
Object.defineProperty(module.exports, "Keyword", { enumerable: false, get: function() { return schema.core.Keyword; } });
Object.defineProperty(module.exports, "recursive", { enumerable: false, get: function() { return schema.core.recursive; } });
Object.defineProperty(module.exports, "instrument_defprotocol_QMARK_", { enumerable: false, get: function() { return schema.core.instrument_defprotocol_QMARK_; } });
Object.defineProperty(module.exports, "spec", { enumerable: false, get: function() { return schema.core.spec; } });
Object.defineProperty(module.exports, "Recursive", { enumerable: false, get: function() { return schema.core.Recursive; } });
Object.defineProperty(module.exports, "__GT_MapEntry", { enumerable: false, get: function() { return schema.core.__GT_MapEntry; } });
Object.defineProperty(module.exports, "__GT_Queue", { enumerable: false, get: function() { return schema.core.__GT_Queue; } });
Object.defineProperty(module.exports, "__GT_Protocol", { enumerable: false, get: function() { return schema.core.__GT_Protocol; } });
Object.defineProperty(module.exports, "__GT_Maybe", { enumerable: false, get: function() { return schema.core.__GT_Maybe; } });
Object.defineProperty(module.exports, "explain_input_schema", { enumerable: false, get: function() { return schema.core.explain_input_schema; } });
Object.defineProperty(module.exports, "map_elements", { enumerable: false, get: function() { return schema.core.map_elements; } });
Object.defineProperty(module.exports, "optional_key_QMARK_", { enumerable: false, get: function() { return schema.core.optional_key_QMARK_; } });
Object.defineProperty(module.exports, "Atomic", { enumerable: false, get: function() { return schema.core.Atomic; } });
Object.defineProperty(module.exports, "map__GT_Both", { enumerable: false, get: function() { return schema.core.map__GT_Both; } });
Object.defineProperty(module.exports, "required_key", { enumerable: false, get: function() { return schema.core.required_key; } });
Object.defineProperty(module.exports, "optional", { enumerable: false, get: function() { return schema.core.optional; } });
Object.defineProperty(module.exports, "Int", { enumerable: false, get: function() { return schema.core.Int; } });
Object.defineProperty(module.exports, "__GT_FnSchema", { enumerable: false, get: function() { return schema.core.__GT_FnSchema; } });
Object.defineProperty(module.exports, "Schema", { enumerable: false, get: function() { return schema.core.Schema; } });
Object.defineProperty(module.exports, "t_schema$core60234", { enumerable: false, get: function() { return schema.core.t_schema$core60234; } });
Object.defineProperty(module.exports, "Both", { enumerable: false, get: function() { return schema.core.Both; } });
Object.defineProperty(module.exports, "map__GT_Maybe", { enumerable: false, get: function() { return schema.core.map__GT_Maybe; } });
Object.defineProperty(module.exports, "map_entry", { enumerable: false, get: function() { return schema.core.map_entry; } });
Object.defineProperty(module.exports, "specific_key_QMARK_", { enumerable: false, get: function() { return schema.core.specific_key_QMARK_; } });
Object.defineProperty(module.exports, "var_name", { enumerable: false, get: function() { return schema.core.var_name; } });
Object.defineProperty(module.exports, "map__GT_EnumSchema", { enumerable: false, get: function() { return schema.core.map__GT_EnumSchema; } });
Object.defineProperty(module.exports, "both", { enumerable: false, get: function() { return schema.core.both; } });
//# sourceMappingURL=schema.core.js.map
