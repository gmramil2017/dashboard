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

$CLJS.SHADOW_ENV.setLoaded("flatland.ordered.map.js");

goog.provide('flatland.ordered.map');
flatland.ordered.map.print_ordered_map = (function flatland$ordered$map$print_ordered_map(writer,kvs,ks,opts){
return cljs.core.pr_sequential_writer(writer,(function (k,w,opts__$1){
cljs.core._write(w,"[");

cljs.core._write(w,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)));

cljs.core._write(w," ");

cljs.core._write(w,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k)], 0)));

return cljs.core._write(w,"]");
}),"("," ",")",opts,ks);
});

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
flatland.ordered.map.OrderedMap = (function (kvs,ks){
this.kvs = kvs;
this.ks = ks;
this.cljs$lang$protocol_mask$partition0$ = 2297825039;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
(flatland.ordered.map.OrderedMap.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IFind$_find$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._find(self__.kvs,k);
}));

(flatland.ordered.map.OrderedMap.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,self__.kvs));
}));

(flatland.ordered.map.OrderedMap.prototype.forEach = (function() {
var G__52584 = null;
var G__52584__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__52462 = cljs.core.seq(self__.ks);
var chunk__52463 = null;
var count__52464 = (0);
var i__52465 = (0);
while(true){
if((i__52465 < count__52464)){
var k = chunk__52463.cljs$core$IIndexed$_nth$arity$2(null,i__52465);
var G__52482_52585 = k;
var G__52483_52586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.kvs,k);
var G__52484_52587 = this$;
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__52482_52585,G__52483_52586,G__52484_52587) : f.call(null,G__52482_52585,G__52483_52586,G__52484_52587));


var G__52588 = seq__52462;
var G__52589 = chunk__52463;
var G__52590 = count__52464;
var G__52591 = (i__52465 + (1));
seq__52462 = G__52588;
chunk__52463 = G__52589;
count__52464 = G__52590;
i__52465 = G__52591;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52462);
if(temp__5804__auto__){
var seq__52462__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52462__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52462__$1);
var G__52594 = cljs.core.chunk_rest(seq__52462__$1);
var G__52595 = c__5568__auto__;
var G__52596 = cljs.core.count(c__5568__auto__);
var G__52597 = (0);
seq__52462 = G__52594;
chunk__52463 = G__52595;
count__52464 = G__52596;
i__52465 = G__52597;
continue;
} else {
var k = cljs.core.first(seq__52462__$1);
var G__52489_52601 = k;
var G__52490_52602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.kvs,k);
var G__52491_52603 = this$;
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__52489_52601,G__52490_52602,G__52491_52603) : f.call(null,G__52489_52601,G__52490_52602,G__52491_52603));


var G__52604 = cljs.core.next(seq__52462__$1);
var G__52605 = null;
var G__52606 = (0);
var G__52607 = (0);
seq__52462 = G__52604;
chunk__52463 = G__52605;
count__52464 = G__52606;
i__52465 = G__52607;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__52584__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__52493 = cljs.core.seq(self__.ks);
var chunk__52494 = null;
var count__52495 = (0);
var i__52496 = (0);
while(true){
if((i__52496 < count__52495)){
var k = chunk__52494.cljs$core$IIndexed$_nth$arity$2(null,i__52496);
f.call(use_as_this,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.kvs,k),this$);


var G__52609 = seq__52493;
var G__52610 = chunk__52494;
var G__52611 = count__52495;
var G__52612 = (i__52496 + (1));
seq__52493 = G__52609;
chunk__52494 = G__52610;
count__52495 = G__52611;
i__52496 = G__52612;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52493);
if(temp__5804__auto__){
var seq__52493__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52493__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52493__$1);
var G__52618 = cljs.core.chunk_rest(seq__52493__$1);
var G__52619 = c__5568__auto__;
var G__52620 = cljs.core.count(c__5568__auto__);
var G__52621 = (0);
seq__52493 = G__52618;
chunk__52494 = G__52619;
count__52495 = G__52620;
i__52496 = G__52621;
continue;
} else {
var k = cljs.core.first(seq__52493__$1);
f.call(use_as_this,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.kvs,k),this$);


var G__52623 = cljs.core.next(seq__52493__$1);
var G__52624 = null;
var G__52625 = (0);
var G__52626 = (0);
seq__52493 = G__52623;
chunk__52494 = G__52624;
count__52495 = G__52625;
i__52496 = G__52626;
continue;
}
} else {
return null;
}
}
break;
}
});
G__52584 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__52584__1.call(this,f);
case 2:
return G__52584__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52584.cljs$core$IFn$_invoke$arity$1 = G__52584__1;
G__52584.cljs$core$IFn$_invoke$arity$2 = G__52584__2;
return G__52584;
})()
);

(flatland.ordered.map.OrderedMap.prototype.get = (function (k){
var self__ = this;
var this$ = this;
return self__.kvs.get(k);
}));

(flatland.ordered.map.OrderedMap.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.keys(self__.kvs));
}));

(flatland.ordered.map.OrderedMap.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(self__.kvs));
}));

(flatland.ordered.map.OrderedMap.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.val,self__.kvs));
}));

(flatland.ordered.map.OrderedMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(flatland.ordered.map.OrderedMap.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(self__.ks);
}));

(flatland.ordered.map.OrderedMap.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.vals(self__.kvs));
}));

(flatland.ordered.map.OrderedMap.prototype.equiv = (function (that){
var self__ = this;
var this$ = this;
return (flatland.ordered.map.equiv_impl.cljs$core$IFn$_invoke$arity$2 ? flatland.ordered.map.equiv_impl.cljs$core$IFn$_invoke$arity$2(self__.kvs,that) : flatland.ordered.map.equiv_impl.call(null,self__.kvs,that));
}));

(flatland.ordered.map.OrderedMap.prototype.has = (function (k){
var self__ = this;
var this$ = this;
return (!((self__.kvs.get(k) == null)));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup(self__.kvs,attr);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup(self__.kvs,attr,not_found);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__52513 = acc;
var G__52514 = k;
var G__52515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.kvs,k);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__52513,G__52514,G__52515) : f.call(null,G__52513,G__52514,G__52515));
}),init,self__.ks);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#ordered/map ");

return flatland.ordered.map.print_ordered_map(writer,self__.kvs,self__.ks,opts);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.meta(self__.kvs);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new flatland.ordered.map.OrderedMap(self__.kvs,self__.ks));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.kvs);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(self__.ks)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52442_SHARP_){
return cljs.core._find(self__.kvs,p1__52442_SHARP_);
}),cljs.core.rseq(self__.ks));
} else {
return null;
}
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.kvs);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (flatland.ordered.map.equiv_impl.cljs$core$IFn$_invoke$arity$2 ? flatland.ordered.map.equiv_impl.cljs$core$IFn$_invoke$arity$2(self__.kvs,that) : flatland.ordered.map.equiv_impl.call(null,self__.kvs,that));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(self__.ks)){
return (new flatland.ordered.map.OrderedMap(cljs.core._empty(self__.kvs),cljs.core.PersistentVector.EMPTY));
} else {
return this$__$1;
}
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(self__.kvs,k)){
return (new flatland.ordered.map.OrderedMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.kvs,k),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([k])),self__.ks)));
} else {
return this$__$1;
}
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
return (new flatland.ordered.map.OrderedMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.kvs,k,v),((cljs.core.contains_QMARK_(self__.kvs,k))?self__.ks:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.ks,k))));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.kvs,k);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(self__.ks)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52441_SHARP_){
return cljs.core._find(self__.kvs,p1__52441_SHARP_);
}),self__.ks);
} else {
return null;
}
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
if((cljs.core.meta(self__.kvs) === new_meta)){
return this$__$1;
} else {
return (new flatland.ordered.map.OrderedMap(cljs.core.with_meta(self__.kvs,new_meta),self__.ks));
}
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return (new flatland.ordered.map.OrderedMap(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.kvs,entry),((cljs.core.contains_QMARK_(self__.kvs,cljs.core._nth(entry,(0))))?self__.ks:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.ks,cljs.core._nth(entry,(0))))));
} else {
return (new flatland.ordered.map.OrderedMap(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.kvs,entry),cljs.core.into.cljs$core$IFn$_invoke$arity$3(self__.ks,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__52439_SHARP_){
return cljs.core._nth(p1__52439_SHARP_,(0));
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__52440_SHARP_){
return cljs.core.contains_QMARK_(self__.kvs,p1__52440_SHARP_);
}))),entry)));
}
}));

(flatland.ordered.map.OrderedMap.prototype.call = (function (unused__11805__auto__){
var self__ = this;
var self__ = this;
var G__52544 = (arguments.length - (1));
switch (G__52544) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(flatland.ordered.map.OrderedMap.prototype.apply = (function (self__,args52454){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args52454)));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return (self__.kvs.cljs$core$IFn$_invoke$arity$1 ? self__.kvs.cljs$core$IFn$_invoke$arity$1(k) : self__.kvs.call(null,k));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return (self__.kvs.cljs$core$IFn$_invoke$arity$2 ? self__.kvs.cljs$core$IFn$_invoke$arity$2(k,not_found) : self__.kvs.call(null,k,not_found));
}));

(flatland.ordered.map.OrderedMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null);
}));

(flatland.ordered.map.OrderedMap.cljs$lang$type = true);

(flatland.ordered.map.OrderedMap.cljs$lang$ctorStr = "flatland.ordered.map/OrderedMap");

(flatland.ordered.map.OrderedMap.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"flatland.ordered.map/OrderedMap");
}));

/**
 * Positional factory function for flatland.ordered.map/OrderedMap.
 */
flatland.ordered.map.__GT_OrderedMap = (function flatland$ordered$map$__GT_OrderedMap(kvs,ks){
return (new flatland.ordered.map.OrderedMap(kvs,ks));
});

flatland.ordered.map.equiv_impl = (function flatland$ordered$map$equiv_impl(kvs,that){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kvs,(((that instanceof flatland.ordered.map.OrderedMap))?that.kvs:that));
});
flatland.ordered.map.empty_ordered_map = (new flatland.ordered.map.OrderedMap(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY));
flatland.ordered.map.ordered_map = (function flatland$ordered$map$ordered_map(var_args){
var G__52560 = arguments.length;
switch (G__52560) {
case 0:
return flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___52663 = arguments.length;
var i__5770__auto___52664 = (0);
while(true){
if((i__5770__auto___52664 < len__5769__auto___52663)){
args_arr__5794__auto__.push((arguments[i__5770__auto___52664]));

var G__52666 = (i__5770__auto___52664 + (1));
i__5770__auto___52664 = G__52666;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$0 = (function (){
return flatland.ordered.map.empty_ordered_map;
}));

(flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(flatland.ordered.map.empty_ordered_map,coll);
}));

(flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$variadic = (function (k,v,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc,flatland.ordered.map.empty_ordered_map,k,v,kvs);
}));

/** @this {Function} */
(flatland.ordered.map.ordered_map.cljs$lang$applyTo = (function (seq52557){
var G__52558 = cljs.core.first(seq52557);
var seq52557__$1 = cljs.core.next(seq52557);
var G__52559 = cljs.core.first(seq52557__$1);
var seq52557__$2 = cljs.core.next(seq52557__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52558,G__52559,seq52557__$2);
}));

(flatland.ordered.map.ordered_map.cljs$lang$maxFixedArity = (2));

Object.defineProperty(module.exports, "equiv_impl", { enumerable: false, get: function() { return flatland.ordered.map.equiv_impl; } });
Object.defineProperty(module.exports, "print_ordered_map", { enumerable: false, get: function() { return flatland.ordered.map.print_ordered_map; } });
Object.defineProperty(module.exports, "OrderedMap", { enumerable: false, get: function() { return flatland.ordered.map.OrderedMap; } });
Object.defineProperty(module.exports, "__GT_OrderedMap", { enumerable: false, get: function() { return flatland.ordered.map.__GT_OrderedMap; } });
Object.defineProperty(module.exports, "empty_ordered_map", { enumerable: false, get: function() { return flatland.ordered.map.empty_ordered_map; } });
Object.defineProperty(module.exports, "ordered_map", { enumerable: false, get: function() { return flatland.ordered.map.ordered_map; } });
//# sourceMappingURL=flatland.ordered.map.js.map
