var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./com.cognitect.transit.js");
require("./com.cognitect.transit.types.js");
require("./com.cognitect.transit.eq.js");
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

$CLJS.SHADOW_ENV.setLoaded("cognitect.transit.js");

goog.provide('cognitect.transit');
goog.scope(function(){
  cognitect.transit.goog$module$goog$object = goog.module.get('goog.object');
  cognitect.transit.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
(cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
}));
(cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));
(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return other.cljs$core$IEquiv$_equiv$arity$2(null,this$__$1);
} else {
return this$__$1.equiv(other);
}
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));
(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash(this$__$1.toString());
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
}));
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__34763_34995 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__34764_34996 = null;
var count__34765_34997 = (0);
var i__34766_34998 = (0);
while(true){
if((i__34766_34998 < count__34765_34997)){
var k_34999 = chunk__34764_34996.cljs$core$IIndexed$_nth$arity$2(null,i__34766_34998);
var v_35000 = cognitect.transit.goog$module$goog$object.get(b,k_34999);
cognitect.transit.goog$module$goog$object.set(a,k_34999,v_35000);


var G__35001 = seq__34763_34995;
var G__35002 = chunk__34764_34996;
var G__35003 = count__34765_34997;
var G__35004 = (i__34766_34998 + (1));
seq__34763_34995 = G__35001;
chunk__34764_34996 = G__35002;
count__34765_34997 = G__35003;
i__34766_34998 = G__35004;
continue;
} else {
var temp__5804__auto___35005 = cljs.core.seq(seq__34763_34995);
if(temp__5804__auto___35005){
var seq__34763_35006__$1 = temp__5804__auto___35005;
if(cljs.core.chunked_seq_QMARK_(seq__34763_35006__$1)){
var c__5568__auto___35007 = cljs.core.chunk_first(seq__34763_35006__$1);
var G__35008 = cljs.core.chunk_rest(seq__34763_35006__$1);
var G__35009 = c__5568__auto___35007;
var G__35010 = cljs.core.count(c__5568__auto___35007);
var G__35011 = (0);
seq__34763_34995 = G__35008;
chunk__34764_34996 = G__35009;
count__34765_34997 = G__35010;
i__34766_34998 = G__35011;
continue;
} else {
var k_35012 = cljs.core.first(seq__34763_35006__$1);
var v_35013 = cognitect.transit.goog$module$goog$object.get(b,k_35012);
cognitect.transit.goog$module$goog$object.set(a,k_35012,v_35013);


var G__35015 = cljs.core.next(seq__34763_35006__$1);
var G__35016 = null;
var G__35017 = (0);
var G__35018 = (0);
seq__34763_34995 = G__35015;
chunk__34764_34996 = G__35016;
count__34765_34997 = G__35017;
i__34766_34998 = G__35018;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
});
(cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
}));

(cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
}));

(cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
}));

(cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(arr,true,true) : cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true));
}));

(cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapBuilder.cljs$lang$type = true);

(cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder");

(cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/MapBuilder");
}));

/**
 * Positional factory function for cognitect.transit/MapBuilder.
 */
cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
});
(cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
}));

(cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
}));

(cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
}));

(cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(arr,true) : cljs.core.PersistentVector.fromArray.call(null,arr,true));
}));

(cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorBuilder.cljs$lang$type = true);

(cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder");

(cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/VectorBuilder");
}));

/**
 * Positional factory function for cognitect.transit/VectorBuilder.
 */
cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from string tag to a decoder function of one
 * argument which returns the in-memory representation of the semantic transit
 * value. If a :default handler is provided, it will be used when no matching
 * read handler can be found.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__34822 = arguments.length;
switch (G__34822) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name(type),cognitect.transit.opts_merge(({"handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, ["$",(function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
}),":",(function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
}),"set",(function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__35029 = (i + (2));
var G__35030 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__35029;
ret = G__35030;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
}),"with-meta",(function (v){
return cljs.core.with_meta((v[(0)]),(v[(1)]));
})], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328))], 0))), "defaultHandler": new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "preferStrings": false, "preferBuffers": false}),cljs.core.clj__GT_js(clojure.set.rename_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"array-builder","array-builder",1275998041),new cljs.core.Keyword(null,"arrayBuilder","arrayBuilder",1446317421),new cljs.core.Keyword(null,"map-builder","map-builder",-1843343288),new cljs.core.Keyword(null,"mapBuilder","mapBuilder",-278083754),new cljs.core.Keyword(null,"prefer-strings","prefer-strings",1254507185),new cljs.core.Keyword(null,"preferStrings","preferStrings",-1532249482),new cljs.core.Keyword(null,"prefer-buffers","prefer-buffers",377042081),new cljs.core.Keyword(null,"preferBuffers","preferBuffers",1843176451)], null)))));
}));

(cognitect.transit.reader.cljs$lang$maxFixedArity = 2);

/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
});
(cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
}));

(cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.KeywordHandler.cljs$lang$type = true);

(cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler");

(cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/KeywordHandler");
}));

/**
 * Positional factory function for cognitect.transit/KeywordHandler.
 */
cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
});
(cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
}));

(cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SymbolHandler.cljs$lang$type = true);

(cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler");

(cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/SymbolHandler");
}));

/**
 * Positional factory function for cognitect.transit/SymbolHandler.
 */
cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
});
(cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
}));

(cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__34830_35039 = cljs.core.seq(v);
var chunk__34831_35040 = null;
var count__34832_35041 = (0);
var i__34833_35042 = (0);
while(true){
if((i__34833_35042 < count__34832_35041)){
var x_35043 = chunk__34831_35040.cljs$core$IIndexed$_nth$arity$2(null,i__34833_35042);
ret.push(x_35043);


var G__35044 = seq__34830_35039;
var G__35045 = chunk__34831_35040;
var G__35046 = count__34832_35041;
var G__35047 = (i__34833_35042 + (1));
seq__34830_35039 = G__35044;
chunk__34831_35040 = G__35045;
count__34832_35041 = G__35046;
i__34833_35042 = G__35047;
continue;
} else {
var temp__5804__auto___35048 = cljs.core.seq(seq__34830_35039);
if(temp__5804__auto___35048){
var seq__34830_35049__$1 = temp__5804__auto___35048;
if(cljs.core.chunked_seq_QMARK_(seq__34830_35049__$1)){
var c__5568__auto___35050 = cljs.core.chunk_first(seq__34830_35049__$1);
var G__35051 = cljs.core.chunk_rest(seq__34830_35049__$1);
var G__35052 = c__5568__auto___35050;
var G__35053 = cljs.core.count(c__5568__auto___35050);
var G__35054 = (0);
seq__34830_35039 = G__35051;
chunk__34831_35040 = G__35052;
count__34832_35041 = G__35053;
i__34833_35042 = G__35054;
continue;
} else {
var x_35055 = cljs.core.first(seq__34830_35049__$1);
ret.push(x_35055);


var G__35056 = cljs.core.next(seq__34830_35049__$1);
var G__35057 = null;
var G__35058 = (0);
var G__35059 = (0);
seq__34830_35039 = G__35056;
chunk__34831_35040 = G__35057;
count__34832_35041 = G__35058;
i__34833_35042 = G__35059;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.ListHandler.cljs$lang$type = true);

(cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler");

(cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/ListHandler");
}));

/**
 * Positional factory function for cognitect.transit/ListHandler.
 */
cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
});
(cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
}));

(cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
}));

(cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapHandler.cljs$lang$type = true);

(cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler");

(cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/MapHandler");
}));

/**
 * Positional factory function for cognitect.transit/MapHandler.
 */
cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
});
(cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
}));

(cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__34834_35067 = cljs.core.seq(v);
var chunk__34835_35068 = null;
var count__34836_35069 = (0);
var i__34837_35070 = (0);
while(true){
if((i__34837_35070 < count__34836_35069)){
var x_35071 = chunk__34835_35068.cljs$core$IIndexed$_nth$arity$2(null,i__34837_35070);
ret.push(x_35071);


var G__35072 = seq__34834_35067;
var G__35073 = chunk__34835_35068;
var G__35074 = count__34836_35069;
var G__35075 = (i__34837_35070 + (1));
seq__34834_35067 = G__35072;
chunk__34835_35068 = G__35073;
count__34836_35069 = G__35074;
i__34837_35070 = G__35075;
continue;
} else {
var temp__5804__auto___35076 = cljs.core.seq(seq__34834_35067);
if(temp__5804__auto___35076){
var seq__34834_35078__$1 = temp__5804__auto___35076;
if(cljs.core.chunked_seq_QMARK_(seq__34834_35078__$1)){
var c__5568__auto___35079 = cljs.core.chunk_first(seq__34834_35078__$1);
var G__35080 = cljs.core.chunk_rest(seq__34834_35078__$1);
var G__35081 = c__5568__auto___35079;
var G__35082 = cljs.core.count(c__5568__auto___35079);
var G__35083 = (0);
seq__34834_35067 = G__35080;
chunk__34835_35068 = G__35081;
count__34836_35069 = G__35082;
i__34837_35070 = G__35083;
continue;
} else {
var x_35084 = cljs.core.first(seq__34834_35078__$1);
ret.push(x_35084);


var G__35085 = cljs.core.next(seq__34834_35078__$1);
var G__35086 = null;
var G__35087 = (0);
var G__35088 = (0);
seq__34834_35067 = G__35085;
chunk__34835_35068 = G__35086;
count__34836_35069 = G__35087;
i__34837_35070 = G__35088;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
}));

(cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SetHandler.cljs$lang$type = true);

(cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler");

(cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/SetHandler");
}));

/**
 * Positional factory function for cognitect.transit/SetHandler.
 */
cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
});
(cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
}));

(cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__34841_35091 = cljs.core.seq(v);
var chunk__34842_35092 = null;
var count__34843_35093 = (0);
var i__34844_35094 = (0);
while(true){
if((i__34844_35094 < count__34843_35093)){
var x_35095 = chunk__34842_35092.cljs$core$IIndexed$_nth$arity$2(null,i__34844_35094);
ret.push(x_35095);


var G__35096 = seq__34841_35091;
var G__35097 = chunk__34842_35092;
var G__35098 = count__34843_35093;
var G__35099 = (i__34844_35094 + (1));
seq__34841_35091 = G__35096;
chunk__34842_35092 = G__35097;
count__34843_35093 = G__35098;
i__34844_35094 = G__35099;
continue;
} else {
var temp__5804__auto___35100 = cljs.core.seq(seq__34841_35091);
if(temp__5804__auto___35100){
var seq__34841_35101__$1 = temp__5804__auto___35100;
if(cljs.core.chunked_seq_QMARK_(seq__34841_35101__$1)){
var c__5568__auto___35102 = cljs.core.chunk_first(seq__34841_35101__$1);
var G__35103 = cljs.core.chunk_rest(seq__34841_35101__$1);
var G__35104 = c__5568__auto___35102;
var G__35105 = cljs.core.count(c__5568__auto___35102);
var G__35106 = (0);
seq__34841_35091 = G__35103;
chunk__34842_35092 = G__35104;
count__34843_35093 = G__35105;
i__34844_35094 = G__35106;
continue;
} else {
var x_35107 = cljs.core.first(seq__34841_35101__$1);
ret.push(x_35107);


var G__35108 = cljs.core.next(seq__34841_35101__$1);
var G__35109 = null;
var G__35110 = (0);
var G__35111 = (0);
seq__34841_35091 = G__35108;
chunk__34842_35092 = G__35109;
count__34843_35093 = G__35110;
i__34844_35094 = G__35111;
continue;
}
} else {
}
}
break;
}

return ret;
}));

(cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorHandler.cljs$lang$type = true);

(cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler");

(cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/VectorHandler");
}));

/**
 * Positional factory function for cognitect.transit/VectorHandler.
 */
cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
});
(cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
}));

(cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
}));

(cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
}));

(cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.UUIDHandler.cljs$lang$type = true);

(cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler");

(cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/UUIDHandler");
}));

/**
 * Positional factory function for cognitect.transit/UUIDHandler.
 */
cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});


/**
* @constructor
*/
cognitect.transit.WithMeta = (function (value,meta){
this.value = value;
this.meta = meta;
});

(cognitect.transit.WithMeta.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(cognitect.transit.WithMeta.cljs$lang$type = true);

(cognitect.transit.WithMeta.cljs$lang$ctorStr = "cognitect.transit/WithMeta");

(cognitect.transit.WithMeta.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/WithMeta");
}));

/**
 * Positional factory function for cognitect.transit/WithMeta.
 */
cognitect.transit.__GT_WithMeta = (function cognitect$transit$__GT_WithMeta(value,meta){
return (new cognitect.transit.WithMeta(value,meta));
});


/**
* @constructor
*/
cognitect.transit.WithMetaHandler = (function (){
});
(cognitect.transit.WithMetaHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "with-meta";
}));

(cognitect.transit.WithMetaHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return com.cognitect.transit.tagged("array",[v.value,v.meta]);
}));

(cognitect.transit.WithMetaHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.WithMetaHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.WithMetaHandler.cljs$lang$type = true);

(cognitect.transit.WithMetaHandler.cljs$lang$ctorStr = "cognitect.transit/WithMetaHandler");

(cognitect.transit.WithMetaHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/WithMetaHandler");
}));

/**
 * Positional factory function for cognitect.transit/WithMetaHandler.
 */
cognitect.transit.__GT_WithMetaHandler = (function cognitect$transit$__GT_WithMetaHandler(){
return (new cognitect.transit.WithMetaHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map with the following optional keys:
 * 
 *  :handlers  - a map of type constructors to handler instances. Can optionally
 *               provide a :default write handler which will be used if no
 *               matching handler can be found.
 *  :transform - a function of one argument returning a transformed value. Will
 *               be invoked on a value before it is written.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__34919 = arguments.length;
switch (G__34919) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var meta_handler = (new cognitect.transit.WithMetaHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.BlackNode,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cognitect.transit.WithMeta,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq,cljs.core.RedNode],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,vector_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,meta_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler,vector_handler]),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Eduction !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Eduction,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Repeat !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Repeat,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.MapEntry !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.MapEntry,vector_handler]):null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));
return com.cognitect.transit.writer(cljs.core.name(type),cognitect.transit.opts_merge(({"objectBuilder": (function (m,kfn,vfn){
return cljs.core.reduce_kv((function (obj,k,v){
var G__34930 = obj;
G__34930.push((kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(k) : kfn.call(null,k)),(vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(v) : vfn.call(null,v)));

return G__34930;
}),["^ "],m);
}), "handlers": (function (){var x34931 = cljs.core.clone(handlers);
(x34931.forEach = (function (f){
var coll = this;
var seq__34933 = cljs.core.seq(coll);
var chunk__34934 = null;
var count__34935 = (0);
var i__34936 = (0);
while(true){
if((i__34936 < count__34935)){
var vec__34947 = chunk__34934.cljs$core$IIndexed$_nth$arity$2(null,i__34936);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34947,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34947,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),k)){
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,"default") : f.call(null,v,"default"));
} else {
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));
}


var G__35130 = seq__34933;
var G__35131 = chunk__34934;
var G__35132 = count__34935;
var G__35133 = (i__34936 + (1));
seq__34933 = G__35130;
chunk__34934 = G__35131;
count__34935 = G__35132;
i__34936 = G__35133;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34933);
if(temp__5804__auto__){
var seq__34933__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34933__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34933__$1);
var G__35135 = cljs.core.chunk_rest(seq__34933__$1);
var G__35136 = c__5568__auto__;
var G__35137 = cljs.core.count(c__5568__auto__);
var G__35138 = (0);
seq__34933 = G__35135;
chunk__34934 = G__35136;
count__34935 = G__35137;
i__34936 = G__35138;
continue;
} else {
var vec__34955 = cljs.core.first(seq__34933__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),k)){
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,"default") : f.call(null,v,"default"));
} else {
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));
}


var G__35140 = cljs.core.next(seq__34933__$1);
var G__35141 = null;
var G__35142 = (0);
var G__35143 = (0);
seq__34933 = G__35140;
chunk__34934 = G__35141;
count__34935 = G__35142;
i__34936 = G__35143;
continue;
}
} else {
return null;
}
}
break;
}
}));

return x34931;
})(), "unpack": (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
})}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.writer.cljs$lang$maxFixedArity = 2);

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
cognitect.transit.fn_or_val = (function cognitect$transit$fn_or_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
return cljs.core.constantly(f);
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit34965 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta34966){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta34966 = meta34966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cognitect.transit.t_cognitect$transit34965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34967,meta34966__$1){
var self__ = this;
var _34967__$1 = this;
return (new cognitect.transit.t_cognitect$transit34965(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta34966__$1));
}));

(cognitect.transit.t_cognitect$transit34965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34967){
var self__ = this;
var _34967__$1 = this;
return self__.meta34966;
}));

(cognitect.transit.t_cognitect$transit34965.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.tag_fn.call(null,o));
}));

(cognitect.transit.t_cognitect$transit34965.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.rep_fn.call(null,o));
}));

(cognitect.transit.t_cognitect$transit34965.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.str_rep_fn.call(null,o));
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit34965.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit34965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta34966","meta34966",-1113152732,null)], null);
}));

(cognitect.transit.t_cognitect$transit34965.cljs$lang$type = true);

(cognitect.transit.t_cognitect$transit34965.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit34965");

(cognitect.transit.t_cognitect$transit34965.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/t_cognitect$transit34965");
}));

/**
 * Positional factory function for cognitect.transit/t_cognitect$transit34965.
 */
cognitect.transit.__GT_t_cognitect$transit34965 = (function cognitect$transit$__GT_t_cognitect$transit34965(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta34966){
return (new cognitect.transit.t_cognitect$transit34965(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta34966));
});


/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__34961 = arguments.length;
switch (G__34961) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
var tag_fn__$1 = cognitect.transit.fn_or_val(tag_fn);
var rep_fn__$1 = cognitect.transit.fn_or_val(rep_fn);
var str_rep_fn__$1 = cognitect.transit.fn_or_val(str_rep_fn);
var verbose_handler_fn__$1 = cognitect.transit.fn_or_val(verbose_handler_fn);
return (new cognitect.transit.t_cognitect$transit34965(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,cljs.core.PersistentArrayMap.EMPTY));
}));

(cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4);

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__5045__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});
/**
 * For :transform. Will write any metadata present on the value.
 */
cognitect.transit.write_meta = (function cognitect$transit$write_meta(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMeta$))))?true:false):false)){
var m = x.cljs$core$IMeta$_meta$arity$1(null);
if((!((m == null)))){
return (new cognitect.transit.WithMeta(x.cljs$core$IWithMeta$_with_meta$arity$2(null,null),m));
} else {
return x;
}
} else {
return x;
}
});
Object.defineProperty(module.exports, "uri", { enumerable: false, get: function() { return cognitect.transit.uri; } });
Object.defineProperty(module.exports, "uuid", { enumerable: false, get: function() { return cognitect.transit.uuid; } });
Object.defineProperty(module.exports, "KeywordHandler", { enumerable: false, get: function() { return cognitect.transit.KeywordHandler; } });
Object.defineProperty(module.exports, "VectorHandler", { enumerable: false, get: function() { return cognitect.transit.VectorHandler; } });
Object.defineProperty(module.exports, "write_meta", { enumerable: false, get: function() { return cognitect.transit.write_meta; } });
Object.defineProperty(module.exports, "bigint_QMARK_", { enumerable: false, get: function() { return cognitect.transit.bigint_QMARK_; } });
Object.defineProperty(module.exports, "MapBuilder", { enumerable: false, get: function() { return cognitect.transit.MapBuilder; } });
Object.defineProperty(module.exports, "__GT_UUIDHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_UUIDHandler; } });
Object.defineProperty(module.exports, "__GT_MapBuilder", { enumerable: false, get: function() { return cognitect.transit.__GT_MapBuilder; } });
Object.defineProperty(module.exports, "__GT_KeywordHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_KeywordHandler; } });
Object.defineProperty(module.exports, "binary", { enumerable: false, get: function() { return cognitect.transit.binary; } });
Object.defineProperty(module.exports, "__GT_SymbolHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_SymbolHandler; } });
Object.defineProperty(module.exports, "write_handler", { enumerable: false, get: function() { return cognitect.transit.write_handler; } });
Object.defineProperty(module.exports, "VectorBuilder", { enumerable: false, get: function() { return cognitect.transit.VectorBuilder; } });
Object.defineProperty(module.exports, "WithMeta", { enumerable: false, get: function() { return cognitect.transit.WithMeta; } });
Object.defineProperty(module.exports, "read", { enumerable: false, get: function() { return cognitect.transit.read; } });
Object.defineProperty(module.exports, "uri_QMARK_", { enumerable: false, get: function() { return cognitect.transit.uri_QMARK_; } });
Object.defineProperty(module.exports, "binary_QMARK_", { enumerable: false, get: function() { return cognitect.transit.binary_QMARK_; } });
Object.defineProperty(module.exports, "__GT_MapHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_MapHandler; } });
Object.defineProperty(module.exports, "__GT_t_cognitect$transit34965", { enumerable: false, get: function() { return cognitect.transit.__GT_t_cognitect$transit34965; } });
Object.defineProperty(module.exports, "MapHandler", { enumerable: false, get: function() { return cognitect.transit.MapHandler; } });
Object.defineProperty(module.exports, "bigint", { enumerable: false, get: function() { return cognitect.transit.bigint; } });
Object.defineProperty(module.exports, "bigdec_QMARK_", { enumerable: false, get: function() { return cognitect.transit.bigdec_QMARK_; } });
Object.defineProperty(module.exports, "SetHandler", { enumerable: false, get: function() { return cognitect.transit.SetHandler; } });
Object.defineProperty(module.exports, "SymbolHandler", { enumerable: false, get: function() { return cognitect.transit.SymbolHandler; } });
Object.defineProperty(module.exports, "tagged_value", { enumerable: false, get: function() { return cognitect.transit.tagged_value; } });
Object.defineProperty(module.exports, "t_cognitect$transit34965", { enumerable: false, get: function() { return cognitect.transit.t_cognitect$transit34965; } });
Object.defineProperty(module.exports, "__GT_ListHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_ListHandler; } });
Object.defineProperty(module.exports, "__GT_VectorHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_VectorHandler; } });
Object.defineProperty(module.exports, "ListHandler", { enumerable: false, get: function() { return cognitect.transit.ListHandler; } });
Object.defineProperty(module.exports, "__GT_SetHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_SetHandler; } });
Object.defineProperty(module.exports, "__GT_WithMetaHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_WithMetaHandler; } });
Object.defineProperty(module.exports, "UUIDHandler", { enumerable: false, get: function() { return cognitect.transit.UUIDHandler; } });
Object.defineProperty(module.exports, "__GT_WithMeta", { enumerable: false, get: function() { return cognitect.transit.__GT_WithMeta; } });
Object.defineProperty(module.exports, "tagged_value_QMARK_", { enumerable: false, get: function() { return cognitect.transit.tagged_value_QMARK_; } });
Object.defineProperty(module.exports, "read_handler", { enumerable: false, get: function() { return cognitect.transit.read_handler; } });
Object.defineProperty(module.exports, "write", { enumerable: false, get: function() { return cognitect.transit.write; } });
Object.defineProperty(module.exports, "integer_QMARK_", { enumerable: false, get: function() { return cognitect.transit.integer_QMARK_; } });
Object.defineProperty(module.exports, "link_QMARK_", { enumerable: false, get: function() { return cognitect.transit.link_QMARK_; } });
Object.defineProperty(module.exports, "integer", { enumerable: false, get: function() { return cognitect.transit.integer; } });
Object.defineProperty(module.exports, "WithMetaHandler", { enumerable: false, get: function() { return cognitect.transit.WithMetaHandler; } });
Object.defineProperty(module.exports, "uuid_QMARK_", { enumerable: false, get: function() { return cognitect.transit.uuid_QMARK_; } });
Object.defineProperty(module.exports, "bigdec", { enumerable: false, get: function() { return cognitect.transit.bigdec; } });
Object.defineProperty(module.exports, "fn_or_val", { enumerable: false, get: function() { return cognitect.transit.fn_or_val; } });
Object.defineProperty(module.exports, "writer", { enumerable: false, get: function() { return cognitect.transit.writer; } });
Object.defineProperty(module.exports, "link", { enumerable: false, get: function() { return cognitect.transit.link; } });
Object.defineProperty(module.exports, "quoted_QMARK_", { enumerable: false, get: function() { return cognitect.transit.quoted_QMARK_; } });
Object.defineProperty(module.exports, "__GT_VectorBuilder", { enumerable: false, get: function() { return cognitect.transit.__GT_VectorBuilder; } });
Object.defineProperty(module.exports, "reader", { enumerable: false, get: function() { return cognitect.transit.reader; } });
Object.defineProperty(module.exports, "opts_merge", { enumerable: false, get: function() { return cognitect.transit.opts_merge; } });
Object.defineProperty(module.exports, "quoted", { enumerable: false, get: function() { return cognitect.transit.quoted; } });
//# sourceMappingURL=cognitect.transit.js.map
