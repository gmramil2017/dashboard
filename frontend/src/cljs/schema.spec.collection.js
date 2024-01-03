var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./schema.utils.js");
require("./schema.spec.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("schema.spec.collection.js");

goog.provide('schema.spec.collection');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
if(cljs.core.vector_QMARK_(e)){
var G__59709 = cljs.core.first(e);
var G__59709__$1 = (((G__59709 instanceof cljs.core.Keyword))?G__59709.fqn:null);
switch (G__59709__$1) {
case "schema.spec.collection/optional":
var G__59722 = cljs.core.next(e);
var G__59723 = params;
var G__59724 = then;
return (schema.spec.collection.sequence_transformer.cljs$core$IFn$_invoke$arity$3 ? schema.spec.collection.sequence_transformer.cljs$core$IFn$_invoke$arity$3(G__59722,G__59723,G__59724) : schema.spec.collection.sequence_transformer.call(null,G__59722,G__59723,G__59724));

break;
case "schema.spec.collection/remaining":
var _ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(e)))?null:(function(){throw (new Error(schema.utils.format_STAR_("remaining can have only one schema.")))})());
var c = schema.spec.core.sub_checker(cljs.core.second(e),params);
return (function (res,x){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(c,x));

return (then.cljs$core$IFn$_invoke$arity$2 ? then.cljs$core$IFn$_invoke$arity$2(res,null) : then.call(null,res,null));
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59709__$1)].join('')));

}
} else {
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker(e,params);
return (function (res,x){
var G__59735 = res;
var G__59736 = (function (){var G__59737 = (function (t){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,((schema.utils.error_QMARK_(t))?t:(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(t) : c.call(null,t))));
});
var G__59738 = x;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__59737,G__59738) : parser.call(null,G__59737,G__59738));
})();
return (then.cljs$core$IFn$_invoke$arity$2 ? then.cljs$core$IFn$_invoke$arity$2(G__59735,G__59736) : then.call(null,G__59735,G__59736));
});
}
});
schema.spec.collection.sequence_transformer = (function schema$spec$collection$sequence_transformer(elts,params,then){
if(cljs.core.not_any_QMARK_((function (p1__59739_SHARP_){
return ((cljs.core.vector_QMARK_(p1__59739_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__59739_SHARP_),new cljs.core.Keyword("schema.spec.collection","remaining","schema.spec.collection/remaining",-421177821))));
}),cljs.core.butlast(elts))){
} else {
throw (new Error(schema.utils.format_STAR_("Remaining schemas must be in tail position.")));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (f,e){
return schema.spec.collection.element_transformer(e,params,f);
}),then,cljs.core.reverse(elts));
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some(schema.utils.error_QMARK_,l);
});
schema.spec.collection.subschemas = (function schema$spec$collection$subschemas(elt){
if(cljs.core.map_QMARK_(elt)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(elt)], null);
} else {
if(cljs.core.vector_QMARK_(elt)){
} else {
throw (new Error("Assert failed: (vector? elt)"));
}

if(cljs.core.truth_((function (){var G__59744 = cljs.core.first(elt);
var fexpr__59743 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("schema.spec.collection","remaining","schema.spec.collection/remaining",-421177821),null,new cljs.core.Keyword("schema.spec.collection","optional","schema.spec.collection/optional",-854614927),null], null), null);
return (fexpr__59743.cljs$core$IFn$_invoke$arity$1 ? fexpr__59743.cljs$core$IFn$_invoke$arity$1(G__59744) : fexpr__59743.call(null,G__59744));
})())){
} else {
throw (new Error("Assert failed: (#{:schema.spec.collection/remaining :schema.spec.collection/optional} (first elt))"));
}

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(schema.spec.collection.subschemas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(elt)], 0));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
schema.spec.collection.CollectionSpec = (function (pre,konstructor,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.konstructor = konstructor;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k59747,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__59757 = k59747;
var G__59757__$1 = (((G__59757 instanceof cljs.core.Keyword))?G__59757.fqn:null);
switch (G__59757__$1) {
case "pre":
return self__.pre;

break;
case "konstructor":
return self__.konstructor;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59747,else__5346__auto__);

}
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__59758){
var vec__59759 = p__59758;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59759,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59759,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(schema.spec.collection.subschemas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.elements], 0));
}));

(schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var konstructor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015).cljs$core$IFn$_invoke$arity$1(params))?self__.konstructor:(function (_){
return null;
}));
var t = schema.spec.collection.sequence_transformer(self__.elements,params,(function (_,x){
return x;
}));
return (function (x){
var or__5045__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var remaining = (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(res,x) : t.call(null,res,x));
var res__$1 = cljs.core.deref(res);
if(cljs.core.truth_((function (){var or__5045__auto____$1 = cljs.core.seq(remaining);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_(res__$1);
}
})())){
return schema.utils.error((self__.on_error.cljs$core$IFn$_invoke$arity$3 ? self__.on_error.cljs$core$IFn$_invoke$arity$3(x,res__$1,remaining) : self__.on_error.call(null,x,res__$1,remaining)));
} else {
return (konstructor__$1.cljs$core$IFn$_invoke$arity$1 ? konstructor__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : konstructor__$1.call(null,res__$1));
}
}
});
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),self__.konstructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59746){
var self__ = this;
var G__59746__$1 = this;
return (new cljs.core.RecordIter((0),G__59746__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1800698765 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59748,other59749){
var self__ = this;
var this59748__$1 = this;
return (((!((other59749 == null)))) && ((((this59748__$1.constructor === other59749.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59748__$1.pre,other59749.pre)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59748__$1.konstructor,other59749.konstructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59748__$1.elements,other59749.elements)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59748__$1.on_error,other59749.on_error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59748__$1.__extmap,other59749.__extmap)))))))))))));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"elements","elements",657646735),null,new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k59747){
var self__ = this;
var this__5350__auto____$1 = this;
var G__59776 = k59747;
var G__59776__$1 = (((G__59776 instanceof cljs.core.Keyword))?G__59776.fqn:null);
switch (G__59776__$1) {
case "pre":
case "konstructor":
case "elements":
case "on-error":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k59747);

}
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__59746){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__59777 = cljs.core.keyword_identical_QMARK_;
var expr__59778 = k__5352__auto__;
if(cljs.core.truth_((pred__59777.cljs$core$IFn$_invoke$arity$2 ? pred__59777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pre","pre",2118456869),expr__59778) : pred__59777.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__59778)))){
return (new schema.spec.collection.CollectionSpec(G__59746,self__.konstructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59777.cljs$core$IFn$_invoke$arity$2 ? pred__59777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),expr__59778) : pred__59777.call(null,new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),expr__59778)))){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__59746,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59777.cljs$core$IFn$_invoke$arity$2 ? pred__59777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elements","elements",657646735),expr__59778) : pred__59777.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__59778)))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,G__59746,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59777.cljs$core$IFn$_invoke$arity$2 ? pred__59777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-error","on-error",1728533530),expr__59778) : pred__59777.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),expr__59778)))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,self__.elements,G__59746,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__59746),null));
}
}
}
}
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),self__.konstructor,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error,null))], null),self__.__extmap));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__59746){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,self__.elements,self__.on_error,G__59746,self__.__extmap,self__.__hash));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"konstructor","konstructor",218206970,null),new cljs.core.Symbol(null,"elements","elements",-1996789034,null),new cljs.core.Symbol(null,"on-error","on-error",-925902239,null)], null);
}));

(schema.spec.collection.CollectionSpec.cljs$lang$type = true);

(schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.spec.collection/CollectionSpec",null,(1),null));
}));

(schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.spec.collection/CollectionSpec");
}));

/**
 * Positional factory function for schema.spec.collection/CollectionSpec.
 */
schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,konstructor,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,konstructor,elements,on_error,null,null,null));
});

/**
 * Factory function for schema.spec.collection/CollectionSpec, taking a map of keywords to field values.
 */
schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__59751){
var extmap__5385__auto__ = (function (){var G__59788 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59751,new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], 0));
if(cljs.core.record_QMARK_(G__59751)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59788);
} else {
return G__59788;
}
})();
return (new schema.spec.collection.CollectionSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__59751),new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557).cljs$core$IFn$_invoke$arity$1(G__59751),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__59751),new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(G__59751),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a nested list structure, in which the leaf elements each
 * provide an element schema, parser (allowing for efficient processing of structured
 * collections), and optional error wrapper.  Each item in the list can be a leaf
 * element or an `optional` nested element spec (see below).  In addition, the final
 * element can be a `remaining` schema (see below).
 * 
 * Note that the `optional` carries no semantics with respect to validation;
 * the user must ensure that the parser enforces the desired semantics, which
 * should match the structure of the spec for proper generation.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,konstructor,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec(pre,konstructor,elements,on_error);
});
/**
 * All remaining elements must match schema s
 */
schema.spec.collection.remaining = (function schema$spec$collection$remaining(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("schema.spec.collection","remaining","schema.spec.collection/remaining",-421177821),s], null);
});
/**
 * If any more elements are present, they must match the elements in 'ss'
 */
schema.spec.collection.optional = (function schema$spec$collection$optional(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59882 = arguments.length;
var i__5770__auto___59883 = (0);
while(true){
if((i__5770__auto___59883 < len__5769__auto___59882)){
args__5775__auto__.push((arguments[i__5770__auto___59883]));

var G__59884 = (i__5770__auto___59883 + (1));
i__5770__auto___59883 = G__59884;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic = (function (ss){
return cljs.core.vec(cljs.core.cons(new cljs.core.Keyword("schema.spec.collection","optional","schema.spec.collection/optional",-854614927),ss));
}));

(schema.spec.collection.optional.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.spec.collection.optional.cljs$lang$applyTo = (function (seq59794){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59794));
}));

schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return schema.spec.collection.remaining(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (coll){
throw (new Error("should never be not called"));
})], null));
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
var base = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
if(cljs.core.truth_(required_QMARK_)){
return base;
} else {
return schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base], 0));
}
});
schema.spec.collection.optional_tail = (function schema$spec$collection$optional_tail(schema__$1,parser,more){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null)], 0)),more);
});
Object.defineProperty(module.exports, "sequence_transformer", { enumerable: false, get: function() { return schema.spec.collection.sequence_transformer; } });
Object.defineProperty(module.exports, "optional_tail", { enumerable: false, get: function() { return schema.spec.collection.optional_tail; } });
Object.defineProperty(module.exports, "__GT_CollectionSpec", { enumerable: false, get: function() { return schema.spec.collection.__GT_CollectionSpec; } });
Object.defineProperty(module.exports, "map__GT_CollectionSpec", { enumerable: false, get: function() { return schema.spec.collection.map__GT_CollectionSpec; } });
Object.defineProperty(module.exports, "remaining", { enumerable: false, get: function() { return schema.spec.collection.remaining; } });
Object.defineProperty(module.exports, "has_error_QMARK_", { enumerable: false, get: function() { return schema.spec.collection.has_error_QMARK_; } });
Object.defineProperty(module.exports, "element_transformer", { enumerable: false, get: function() { return schema.spec.collection.element_transformer; } });
Object.defineProperty(module.exports, "CollectionSpec", { enumerable: false, get: function() { return schema.spec.collection.CollectionSpec; } });
Object.defineProperty(module.exports, "one_element", { enumerable: false, get: function() { return schema.spec.collection.one_element; } });
Object.defineProperty(module.exports, "optional", { enumerable: false, get: function() { return schema.spec.collection.optional; } });
Object.defineProperty(module.exports, "subschemas", { enumerable: false, get: function() { return schema.spec.collection.subschemas; } });
Object.defineProperty(module.exports, "all_elements", { enumerable: false, get: function() { return schema.spec.collection.all_elements; } });
Object.defineProperty(module.exports, "collection_spec", { enumerable: false, get: function() { return schema.spec.collection.collection_spec; } });
//# sourceMappingURL=schema.spec.collection.js.map
