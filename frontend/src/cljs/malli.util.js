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

$CLJS.SHADOW_ENV.setLoaded("malli.util.js");

goog.provide('malli.util');
malli.util.equals = (function malli$util$equals(var_args){
var G__52338 = arguments.length;
switch (G__52338) {
case 2:
return malli.util.equals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.equals.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.equals.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.equals.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.equals.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema1,options),malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema2,options));
}));

(malli.util.equals.cljs$lang$maxFixedArity = 3);

malli.util._simplify_map_entry = (function malli$util$_simplify_map_entry(p__52339){
var vec__52340 = p__52339;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52340,(0),null);
var _QMARK_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52340,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52340,(2),null);
if(cljs.core.not(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,_QMARK_p], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = _QMARK_p;
if(cljs.core.truth_(and__5043__auto__)){
return ((new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(_QMARK_p))));
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
} else {
if(cljs.core.not(cljs.core.seq(_QMARK_p))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
} else {
if(new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === false){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_p,new cljs.core.Keyword(null,"optional","optional",2053951509)),s], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,_QMARK_p,s], null);

}
}
}
}
});
malli.util._required_map_entry_QMARK_ = (function malli$util$_required_map_entry_QMARK_(p__52350){
var vec__52351 = p__52350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52351,(0),null);
var _QMARK_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52351,(1),null);
return (!(((cljs.core.map_QMARK_(_QMARK_p)) && (new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === true))));
});
malli.util._entry = (function malli$util$_entry(p__52424,p__52425,merge_required,merge,options){
var vec__52426 = p__52424;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52426,(0),null);
var _QMARK_p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52426,(1),null);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52426,(2),null);
var e1 = vec__52426;
var vec__52429 = p__52425;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52429,(0),null);
var _QMARK_p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52429,(1),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52429,(2),null);
var e2 = vec__52429;
var required = (function (){var G__52434 = malli.util._required_map_entry_QMARK_(e1);
var G__52435 = malli.util._required_map_entry_QMARK_(e2);
return (merge_required.cljs$core$IFn$_invoke$arity$2 ? merge_required.cljs$core$IFn$_invoke$arity$2(G__52434,G__52435) : merge_required.call(null,G__52434,G__52435));
})();
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_QMARK_p1,_QMARK_p2], 0));
return malli.util._simplify_map_entry(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"optional","optional",2053951509),cljs.core.not(required)),(merge.cljs$core$IFn$_invoke$arity$3 ? merge.cljs$core$IFn$_invoke$arity$3(s1,s2,options) : merge.call(null,s1,s2,options))], null));
});
malli.util._ok_to_close_or_open_QMARK_ = (function malli$util$_ok_to_close_or_open_QMARK_(schema__$1,options){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.type.cljs$core$IFn$_invoke$arity$2(schema__$1,options))) && ((!(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1)) === false))));
});

/**
* @constructor
 * @implements {malli.core.Walker}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.util.t_malli$util52459 = (function (_QMARK_schema,f,options,result,meta52460){
this._QMARK_schema = _QMARK_schema;
this.f = f;
this.options = options;
this.result = result;
this.meta52460 = meta52460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.util.t_malli$util52459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52461,meta52460__$1){
var self__ = this;
var _52461__$1 = this;
return (new malli.util.t_malli$util52459(self__._QMARK_schema,self__.f,self__.options,self__.result,meta52460__$1));
}));

(malli.util.t_malli$util52459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52461){
var self__ = this;
var _52461__$1 = this;
return self__.meta52460;
}));

(malli.util.t_malli$util52459.prototype.malli$core$Walker$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util52459.prototype.malli$core$Walker$_accept$arity$4 = (function (_,s,path,options__$1){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var or__5045__auto__ = cljs.core.deref(self__.result);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.reset_BANG_(self__.result,(self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(s,path,options__$1) : self__.f.call(null,s,path,options__$1)));
}
})());
}));

(malli.util.t_malli$util52459.prototype.malli$core$Walker$_inner$arity$4 = (function (this$,s,path,options__$1){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref(self__.result))){
return null;
} else {
return malli.core._walk(s,this$__$1,path,options__$1);
}
}));

(malli.util.t_malli$util52459.prototype.malli$core$Walker$_outer$arity$5 = (function (_,___$1,___$2,___$3,___$4){
var self__ = this;
var ___$5 = this;
return null;
}));

(malli.util.t_malli$util52459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?schema","?schema",-271534072,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"meta52460","meta52460",346406816,null)], null);
}));

(malli.util.t_malli$util52459.cljs$lang$type = true);

(malli.util.t_malli$util52459.cljs$lang$ctorStr = "malli.util/t_malli$util52459");

(malli.util.t_malli$util52459.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.util/t_malli$util52459");
}));

/**
 * Positional factory function for malli.util/t_malli$util52459.
 */
malli.util.__GT_t_malli$util52459 = (function malli$util$__GT_t_malli$util52459(_QMARK_schema,f,options,result,meta52460){
return (new malli.util.t_malli$util52459(_QMARK_schema,f,options,result,meta52460));
});


/**
 * Prewalks the Schema recursively with a 3-arity fn [schema path options], returns with
 *   and as soon as the function returns non-null value.
 */
malli.util.find_first = (function malli$util$find_first(var_args){
var G__52448 = arguments.length;
switch (G__52448) {
case 2:
return malli.util.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.find_first.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.find_first.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,f){
return malli.util.find_first.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,f,null);
}));

(malli.util.find_first.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,f,options){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
malli.core._walk(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),(new malli.util.t_malli$util52459(_QMARK_schema,f,options,result,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.PersistentVector.EMPTY,options);

return cljs.core.deref(result);
}));

(malli.util.find_first.cljs$lang$maxFixedArity = 3);

/**
 * Merges two schemas into one with the following rules:
 * 
 *   * if either schemas is `nil`, the other one is used, regardless of value
 *   * with two :map schemas, both keys and values are merged
 *   * for :and schemas, the first child is used in merge, rest kept as-is
 *   * with two :map entries, `:merge-entries` fn is used (default last one wins)
 *   * with any other schemas, `:merge-default` fn is used (default last one wins)
 * 
 *   | key               | description
 *   | ------------------|-------------
 *   | `:merge-default`  | `schema1 schema2 options -> schema` fn to merge unknown entries
 *   | `:merge-required` | `boolean boolean -> boolean` fn to resolve how required keys are merged
 */
malli.util.merge = (function malli$util$merge(var_args){
var G__52517 = arguments.length;
switch (G__52517) {
case 2:
return malli.util.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.merge.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.merge.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
var s1 = (cljs.core.truth_(_QMARK_schema1)?malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema1,options)):null);
var s2 = (cljs.core.truth_(_QMARK_schema2)?malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema2,options)):null);
var t1 = (cljs.core.truth_(s1)?malli.core.type.cljs$core$IFn$_invoke$arity$1(s1):null);
var t2 = (cljs.core.truth_(s2)?malli.core.type.cljs$core$IFn$_invoke$arity$1(s2):null);
var map__52522 = options;
var map__52522__$1 = cljs.core.__destructure_map(map__52522);
var merge_default = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52522__$1,new cljs.core.Keyword(null,"merge-default","merge-default",1152742083),(function (_,s2__$1,___$1){
return s2__$1;
}));
var merge_required = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52522__$1,new cljs.core.Keyword(null,"merge-required","merge-required",75277811),(function (_,r2){
return r2;
}));
var bear = (function (p1,p2){
if(cljs.core.truth_((function (){var and__5043__auto__ = p1;
if(cljs.core.truth_(and__5043__auto__)){
return p2;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));
} else {
var or__5045__auto__ = p1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return p2;
}
}
});
var tear = (function (t,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.core.properties.cljs$core$IFn$_invoke$arity$1(s)], null),malli.core.children.cljs$core$IFn$_invoke$arity$1(s));
}
});
var join = (function (p__52534,p__52535){
var vec__52536 = p__52534;
var seq__52537 = cljs.core.seq(vec__52536);
var first__52538 = cljs.core.first(seq__52537);
var seq__52537__$1 = cljs.core.next(seq__52537);
var p1 = first__52538;
var first__52538__$1 = cljs.core.first(seq__52537__$1);
var seq__52537__$2 = cljs.core.next(seq__52537__$1);
var c1 = first__52538__$1;
var cs1 = seq__52537__$2;
var vec__52539 = p__52535;
var seq__52540 = cljs.core.seq(vec__52539);
var first__52541 = cljs.core.first(seq__52540);
var seq__52540__$1 = cljs.core.next(seq__52540);
var p2 = first__52541;
var first__52541__$1 = cljs.core.first(seq__52540__$1);
var seq__52540__$2 = cljs.core.next(seq__52540__$1);
var c2 = first__52541__$1;
var cs2 = seq__52540__$2;
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"and","and",-971899817),bear(p1,p2),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.util.merge.cljs$core$IFn$_invoke$arity$3(c1,c2,options)], null),cs1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cs2], 0)),options);
});
if((s1 == null)){
return s2;
} else {
if((s2 == null)){
return s1;
} else {
if(cljs.core.not((function (){var and__5043__auto__ = (function (){var fexpr__52554 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__52554.cljs$core$IFn$_invoke$arity$1 ? fexpr__52554.cljs$core$IFn$_invoke$arity$1(t1) : fexpr__52554.call(null,t1));
})();
if(cljs.core.truth_(and__5043__auto__)){
var fexpr__52555 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__52555.cljs$core$IFn$_invoke$arity$1 ? fexpr__52555.cljs$core$IFn$_invoke$arity$1(t2) : fexpr__52555.call(null,t2));
} else {
return and__5043__auto__;
}
})())){
return (merge_default.cljs$core$IFn$_invoke$arity$3 ? merge_default.cljs$core$IFn$_invoke$arity$3(s1,s2,options) : merge_default.call(null,s1,s2,options));
} else {
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,new cljs.core.Keyword(null,"map","map",1371690461))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t2,new cljs.core.Keyword(null,"map","map",1371690461))))))){
return join(tear(t1,s1),tear(t2,s2));
} else {
var p = bear(malli.core._properties(s1),malli.core._properties(s2));
var ks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form,p__52561){
var vec__52562 = p__52561;
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52562,(0),null);
var e2 = vec__52562;
if(cljs.core.truth_((function (){var fexpr__52565 = cljs.core.deref(ks);
return (fexpr__52565.cljs$core$IFn$_invoke$arity$1 ? fexpr__52565.cljs$core$IFn$_invoke$arity$1(k2) : fexpr__52565.call(null,k2));
})())){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_SINGLEQUOTE_,p__52566){
var vec__52567 = p__52566;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52567,(0),null);
var e1 = vec__52567;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_SINGLEQUOTE_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2))?malli.util._entry(e1,e2,merge_required,malli.util.merge,options):e1));
}),cljs.core.PersistentVector.EMPTY,form);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ks,cljs.core.conj,k2);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form,e2);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(malli.core._children(s1),malli.core._children(s2)));
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"map","map",1371690461),p,children,options);

}
}
}
}
}));

(malli.util.merge.cljs$lang$maxFixedArity = 3);

/**
 * Union of two schemas. See [[merge]] for more details.
 */
malli.util.union = (function malli$util$union(var_args){
var G__52573 = arguments.length;
switch (G__52573) {
case 2:
return malli.util.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.union.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.union.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.union.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.union.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
var merge_default = (function (s1,s2,options__$1){
if(cljs.core.truth_(malli.util.equals.cljs$core$IFn$_invoke$arity$2(s1,s2))){
return s1;
} else {
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),s1,s2], null),options__$1);
}
});
var merge_required = (function (r1,r2){
var and__5043__auto__ = r1;
if(cljs.core.truth_(and__5043__auto__)){
return r2;
} else {
return and__5043__auto__;
}
});
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"merge-default","merge-default",1152742083),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,merge_default)),new cljs.core.Keyword(null,"merge-required","merge-required",75277811),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,merge_required)));
}));

(malli.util.union.cljs$lang$maxFixedArity = 3);

/**
 * Returns a Schema instance with updated properties.
 */
malli.util.update_properties = (function malli$util$update_properties(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53415 = arguments.length;
var i__5770__auto___53416 = (0);
while(true){
if((i__5770__auto___53416 < len__5769__auto___53415)){
args__5775__auto__.push((arguments[i__5770__auto___53416]));

var G__53417 = (i__5770__auto___53416 + (1));
i__5770__auto___53416 = G__53417;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_schema,f,args){
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$1(_QMARK_schema);
return malli.core._set_properties(schema__$1,cljs.core.not_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,malli.core._properties(schema__$1),args)));
}));

(malli.util.update_properties.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(malli.util.update_properties.cljs$lang$applyTo = (function (seq52592){
var G__52593 = cljs.core.first(seq52592);
var seq52592__$1 = cljs.core.next(seq52592);
var G__52598 = cljs.core.first(seq52592__$1);
var seq52592__$2 = cljs.core.next(seq52592__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52593,G__52598,seq52592__$2);
}));

/**
 * Maps are implicitly open by default. They can be explicitly closed or
 *   open by specifying the `{:closed (true|false)}` property.
 * 
 *   This function converts implicitly open maps to explicitly closed
 *   maps, recursively. Explicitly open maps are left untouched.
 * 
 *   See [[open-schema]]
 */
malli.util.closed_schema = (function malli$util$closed_schema(var_args){
var G__52638 = arguments.length;
switch (G__52638) {
case 1:
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.core.schema_walker((function (schema__$1){
if(malli.util._ok_to_close_or_open_QMARK_(schema__$1,options)){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closed","closed",-919675359),true], 0));
} else {
return schema__$1;
}
})),options);
}));

(malli.util.closed_schema.cljs$lang$maxFixedArity = 2);

/**
 * Maps are implicitly open by default. They can be explicitly closed or
 *   open by specifying the `{:closed (true|false)}` property.
 * 
 *   This function converts explicitly closed maps to implicitly open
 *   maps, recursively. Explicitly open maps are left untouched.
 * 
 *   See [[closed-schema]]
 */
malli.util.open_schema = (function malli$util$open_schema(var_args){
var G__52651 = arguments.length;
switch (G__52651) {
case 1:
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.open_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.open_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.core.schema_walker((function (schema__$1){
if(malli.util._ok_to_close_or_open_QMARK_(schema__$1,options)){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closed","closed",-919675359)], 0));
} else {
return schema__$1;
}
})),options);
}));

(malli.util.open_schema.cljs$lang$maxFixedArity = 2);

/**
 * Returns all subschemas for unique paths as a vector of maps with :schema, :path and :in keys.
 * Walks over :schema references and top-level :refs. See [[malli.core/-walk]] for all options.
 */
malli.util.subschemas = (function malli$util$subschemas(var_args){
var G__52669 = arguments.length;
switch (G__52669) {
case 1:
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.subschemas.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.subschemas.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
var options__$1 = (function (){var ref = (function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema__$1));
if(and__5043__auto__){
return malli.core._ref(schema__$1);
} else {
return and__5043__auto__;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.core","walk-schema-refs","malli.core/walk-schema-refs",-1140065954),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,true)),new cljs.core.Keyword("malli.core","walk-refs","malli.core/walk-refs",755904802),(function (f){
return (function (p1__52665_SHARP_){
var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref,p1__52665_SHARP_);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__52679 = malli.core._boolean_fn(f);
return (fexpr__52679.cljs$core$IFn$_invoke$arity$1 ? fexpr__52679.cljs$core$IFn$_invoke$arity$1(p1__52665_SHARP_) : fexpr__52679.call(null,p1__52665_SHARP_));
}
});
}));
})();
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
malli.util.find_first.cljs$core$IFn$_invoke$arity$3(schema__$1,(function (s,p,_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"in","in",-1531184865),(malli.util.path__GT_in.cljs$core$IFn$_invoke$arity$2 ? malli.util.path__GT_in.cljs$core$IFn$_invoke$arity$2(schema__$1,p) : malli.util.path__GT_in.call(null,schema__$1,p)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

return null;
}),options__$1);

return cljs.core.deref(state);
}));

(malli.util.subschemas.cljs$lang$maxFixedArity = 2);

/**
 * Returns a sequence of distinct (f x) values)
 */
malli.util.distinct_by = (function malli$util$distinct_by(f,coll){
var seen = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.truth_((function (){var fexpr__52687 = cljs.core.deref(seen);
return (fexpr__52687.cljs$core$IFn$_invoke$arity$1 ? fexpr__52687.cljs$core$IFn$_invoke$arity$1(v) : fexpr__52687.call(null,v));
})())){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,v);
}
}),coll);
});
/**
 * Returns a value path for a given Schema and schema path
 */
malli.util.path__GT_in = (function malli$util$path__GT_in(schema__$1,path){
var i = (0);
var s = schema__$1;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var or__5045__auto__ = (function (){var and__5043__auto__ = (i >= cljs.core.count(path));
if(and__5043__auto__){
return acc;
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__53422 = (i + (1));
var G__53423 = malli.core._get(s,(path.cljs$core$IFn$_invoke$arity$1 ? path.cljs$core$IFn$_invoke$arity$1(i) : path.call(null,i)),null);
var G__53424 = (function (){var G__52700 = acc;
if(cljs.core.truth_(malli.core._keep(s))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52700,(path.cljs$core$IFn$_invoke$arity$1 ? path.cljs$core$IFn$_invoke$arity$1(i) : path.call(null,i)));
} else {
return G__52700;
}
})();
i = G__53422;
s = G__53423;
acc = G__53424;
continue;
}
break;
}
});
/**
 * Returns a vector of schema paths for a given Schema and value path
 */
malli.util.in__GT_paths = (function malli$util$in__GT_paths(schema__$1,in$){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var in_equals = (function (p__52707,p__52708){
while(true){
var vec__52711 = p__52707;
var seq__52712 = cljs.core.seq(vec__52711);
var first__52713 = cljs.core.first(seq__52712);
var seq__52712__$1 = cljs.core.next(seq__52712);
var x = first__52713;
var xs = seq__52712__$1;
var vec__52714 = p__52708;
var seq__52715 = cljs.core.seq(vec__52714);
var first__52716 = cljs.core.first(seq__52715);
var seq__52715__$1 = cljs.core.next(seq__52715);
var y = first__52716;
var ys = seq__52715__$1;
if(cljs.core.truth_((function (){var and__5043__auto__ = x;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
} else {
return and__5043__auto__;
}
})())){
var G__53426 = xs;
var G__53427 = ys;
p__52707 = G__53426;
p__52708 = G__53427;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.core","in","malli.core/in",-1208578537),x)){
var G__53428 = xs;
var G__53429 = ys;
p__52707 = G__53428;
p__52708 = G__53429;
continue;
} else {
return null;
}
}
}
break;
}
});
var parent_exists = (function (v1,v2){
var i = (function (){var x__5133__auto__ = cljs.core.count(v1);
var y__5134__auto__ = cljs.core.count(v2);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v1,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v2,(0),i));
});
malli.util.find_first.cljs$core$IFn$_invoke$arity$2(schema__$1,(function (_,path,___$1){
if(cljs.core.truth_((function (){var and__5043__auto__ = in_equals(malli.util.path__GT_in(schema__$1,path),in$);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some((function (p1__52703_SHARP_){
return parent_exists(path,p1__52703_SHARP_);
}),cljs.core.deref(state)));
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.conj,path);

return null;
} else {
return null;
}
}));

return cljs.core.deref(state);
});
/**
 * Like `m/explainer` but output is pure clojure data. Schema objects have been replaced with their m/form.
 * Useful when you need to serialise errrors.
 */
malli.util.data_explainer = (function malli$util$data_explainer(var_args){
var G__52730 = arguments.length;
switch (G__52730) {
case 1:
return malli.util.data_explainer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.data_explainer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.data_explainer.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.data_explainer.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.data_explainer.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var explainer_SINGLEQUOTE_ = malli.core.explainer.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
return (function() {
var malli$util$data_explainer = null;
var malli$util$data_explainer__1 = (function (value){
return malli$util$data_explainer.cljs$core$IFn$_invoke$arity$3(value,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});
var malli$util$data_explainer__3 = (function (value,in$,acc){
var G__52746 = explainer_SINGLEQUOTE_(value,in$,acc);
var G__52746__$1 = (((G__52746 == null))?null:cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__52746,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.form));
if((G__52746__$1 == null)){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__52746__$1,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__52728_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__52728_SHARP_,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.form);
})));
}
});
malli$util$data_explainer = function(value,in$,acc){
switch(arguments.length){
case 1:
return malli$util$data_explainer__1.call(this,value);
case 3:
return malli$util$data_explainer__3.call(this,value,in$,acc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
malli$util$data_explainer.cljs$core$IFn$_invoke$arity$1 = malli$util$data_explainer__1;
malli$util$data_explainer.cljs$core$IFn$_invoke$arity$3 = malli$util$data_explainer__3;
return malli$util$data_explainer;
})()
}));

(malli.util.data_explainer.cljs$lang$maxFixedArity = 2);

/**
 * Explains a value against a given schema. Like `m/explain` but output is pure clojure data.
 *   Schema objects have been replaced with their `m/form`. Useful when you need to serialise errrors.
 * 
 *   Creates the `mu/data-explainer` for every call. When performance matters, (re-)use `mu/data-explainer` instead.
 */
malli.util.explain_data = (function malli$util$explain_data(var_args){
var G__52758 = arguments.length;
switch (G__52758) {
case 2:
return malli.util.explain_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.explain_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.explain_data.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,value){
return malli.util.explain_data.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,value,null);
}));

(malli.util.explain_data.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,value,options){
return malli.util.data_explainer.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options)(value,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
}));

(malli.util.explain_data.cljs$lang$maxFixedArity = 3);

/**
 * Transforms entries with f.
 */
malli.util.transform_entries = (function malli$util$transform_entries(var_args){
var G__52778 = arguments.length;
switch (G__52778) {
case 2:
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.transform_entries.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,f){
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,f,null);
}));

(malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,f,options){
var schema__$1 = malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options));
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(malli.core._parent(schema__$1),malli.core._properties(schema__$1),(function (){var G__52799 = malli.core._children(schema__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52799) : f.call(null,G__52799));
})(),(function (){var or__5045__auto__ = malli.core.options.cljs$core$IFn$_invoke$arity$1(schema__$1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return options;
}
})());
}));

(malli.util.transform_entries.cljs$lang$maxFixedArity = 3);

/**
 * Makes map keys optional.
 */
malli.util.optional_keys = (function malli$util$optional_keys(var_args){
var G__52806 = arguments.length;
switch (G__52806) {
case 1:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,null,null);
}));

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,_QMARK_keys){
var vec__52807 = ((cljs.core.map_QMARK_(_QMARK_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,_QMARK_keys], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_keys,null], null));
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52807,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52807,(1),null);
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,options);
}));

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var accept = (cljs.core.truth_(keys)?cljs.core.set(keys):cljs.core.constantly(true));
var mapper = (function (p__52810){
var vec__52811 = p__52810;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52811,(0),null);
var e = vec__52811;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(k) : accept.call(null,k)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(e,(1),cljs.core.assoc,new cljs.core.Keyword(null,"optional","optional",2053951509),true);
} else {
return e;
}
});
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__52804_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mapper,p1__52804_SHARP_);
}),options);
}));

(malli.util.optional_keys.cljs$lang$maxFixedArity = 3);

/**
 * Makes map keys required.
 */
malli.util.required_keys = (function malli$util$required_keys(var_args){
var G__52923 = arguments.length;
switch (G__52923) {
case 1:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,null,null);
}));

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,_QMARK_keys){
var vec__52936 = ((cljs.core.map_QMARK_(_QMARK_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,_QMARK_keys], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_keys,null], null));
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52936,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52936,(1),null);
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,options);
}));

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var accept = (cljs.core.truth_(keys)?cljs.core.set(keys):cljs.core.constantly(true));
var required = (function (p){
var p_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"optional","optional",2053951509));
if(cljs.core.seq(p_SINGLEQUOTE_)){
return p_SINGLEQUOTE_;
} else {
return null;
}
});
var mapper = (function (p__52953){
var vec__52956 = p__52953;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52956,(0),null);
var e = vec__52956;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(k) : accept.call(null,k)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,(1),required);
} else {
return e;
}
});
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__52915_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mapper,p1__52915_SHARP_);
}),options);
}));

(malli.util.required_keys.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/select-keys]], but for EntrySchemas.
 */
malli.util.select_keys = (function malli$util$select_keys(var_args){
var G__52964 = arguments.length;
switch (G__52964) {
case 2:
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.select_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,keys){
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,null);
}));

(malli.util.select_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var key_set = cljs.core.set(keys);
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__52959_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__52976){
var vec__52977 = p__52976;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52977,(0),null);
return (key_set.cljs$core$IFn$_invoke$arity$1 ? key_set.cljs$core$IFn$_invoke$arity$1(k) : key_set.call(null,k));
}),p1__52959_SHARP_);
}),options);
}));

(malli.util.select_keys.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.set/rename-keys]], but for EntrySchemas. Collisions are resolved in favor of the renamed key, like `assoc`-ing.
 */
malli.util.rename_keys = (function malli$util$rename_keys(var_args){
var G__52982 = arguments.length;
switch (G__52982) {
case 2:
return malli.util.rename_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.rename_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.rename_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,kmap){
return malli.util.rename_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,kmap,null);
}));

(malli.util.rename_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,kmap,options){
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (entries){
var source_keys = cljs.core.set(cljs.core.keys(kmap));
var target_keys = cljs.core.set(cljs.core.vals(kmap));
var remove_conflicts = (function (p__53009){
var vec__53010 = p__53009;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53010,(0),null);
var or__5045__auto__ = (source_keys.cljs$core$IFn$_invoke$arity$1 ? source_keys.cljs$core$IFn$_invoke$arity$1(k) : source_keys.call(null,k));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not((target_keys.cljs$core$IFn$_invoke$arity$1 ? target_keys.cljs$core$IFn$_invoke$arity$1(k) : target_keys.call(null,k)));
}
});
var alter_keys = (function (p__53013){
var vec__53015 = p__53013;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53015,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53015,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53015,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(kmap,k,k),m,v], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(alter_keys,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(remove_conflicts,entries));
}),options);
}));

(malli.util.rename_keys.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/dissoc]], but for EntrySchemas.
 */
malli.util.dissoc = (function malli$util$dissoc(var_args){
var G__53026 = arguments.length;
switch (G__53026) {
case 2:
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.dissoc.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,key){
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,key,null);
}));

(malli.util.dissoc.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,key,options){
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__53024_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53037){
var vec__53038 = p__53037;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,k);
}),p1__53024_SHARP_);
}),options);
}));

(malli.util.dissoc.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/find]], but for EntrySchemas.
 */
malli.util.find = (function malli$util$find(var_args){
var G__53044 = arguments.length;
switch (G__53044) {
case 2:
return malli.util.find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.find.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.find.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,k){
return malli.util.find.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,k,null);
}));

(malli.util.find.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,k,options){
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = _QMARK_schema;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
})(),options);
if(cljs.core.truth_(schema__$1)){
return malli.core._get(schema__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.core","find","malli.core/find",163301512),k], null),null);
} else {
return null;
}
}));

(malli.util.find.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/keys]], but for EntrySchemas.
 */
malli.util.keys = (function malli$util$keys(_QMARK_schema){
var temp__5804__auto__ = malli.core.entries.cljs$core$IFn$_invoke$arity$1(_QMARK_schema);
if(cljs.core.truth_(temp__5804__auto__)){
var ents = temp__5804__auto__;
var iter__5523__auto__ = (function malli$util$keys_$_iter__53051(s__53052){
return (new cljs.core.LazySeq(null,(function (){
var s__53052__$1 = s__53052;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__53052__$1);
if(temp__5804__auto____$1){
var s__53052__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53052__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53052__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53054 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53053 = (0);
while(true){
if((i__53053 < size__5522__auto__)){
var vec__53090 = cljs.core._nth(c__5521__auto__,i__53053);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53090,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53090,(1),null);
cljs.core.chunk_append(b__53054,k);

var G__53460 = (i__53053 + (1));
i__53053 = G__53460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53054),malli$util$keys_$_iter__53051(cljs.core.chunk_rest(s__53052__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53054),null);
}
} else {
var vec__53094 = cljs.core.first(s__53052__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53094,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53094,(1),null);
return cljs.core.cons(k,malli$util$keys_$_iter__53051(cljs.core.rest(s__53052__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(ents);
} else {
return null;
}
});
/**
 * Like [[clojure.core/get]], but for LensSchemas.
 */
malli.util.get = (function malli$util$get(var_args){
var G__53101 = arguments.length;
switch (G__53101) {
case 2:
return malli.util.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.get.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,k){
return malli.util.get.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,k,null,null);
}));

(malli.util.get.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,k,default$){
return malli.util.get.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,k,default$,null);
}));

(malli.util.get.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,k,default$,options){
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = _QMARK_schema;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
})(),options);
if(cljs.core.truth_(schema__$1)){
return malli.core._get(schema__$1,k,default$);
} else {
return null;
}
}));

(malli.util.get.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/assoc]], but for LensSchemas.
 */
malli.util.assoc = (function malli$util$assoc(var_args){
var G__53109 = arguments.length;
switch (G__53109) {
case 3:
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.assoc.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.assoc.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,key,value){
return malli.util.assoc.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,key,value,null);
}));

(malli.util.assoc.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,key,value,options){
return malli.core._set(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),key,value);
}));

(malli.util.assoc.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/update]], but for LensSchema instances.
 */
malli.util.update = (function malli$util$update(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53472 = arguments.length;
var i__5770__auto___53473 = (0);
while(true){
if((i__5770__auto___53473 < len__5769__auto___53472)){
args__5775__auto__.push((arguments[i__5770__auto___53473]));

var G__53474 = (i__5770__auto___53473 + (1));
i__5770__auto___53473 = G__53474;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return malli.util.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(malli.util.update.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,key,f,args){
return malli.core._set(malli.core.schema.cljs$core$IFn$_invoke$arity$1(schema__$1),key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,malli.util.get.cljs$core$IFn$_invoke$arity$2(schema__$1,key),args));
}));

(malli.util.update.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(malli.util.update.cljs$lang$applyTo = (function (seq53114){
var G__53115 = cljs.core.first(seq53114);
var seq53114__$1 = cljs.core.next(seq53114);
var G__53116 = cljs.core.first(seq53114__$1);
var seq53114__$2 = cljs.core.next(seq53114__$1);
var G__53117 = cljs.core.first(seq53114__$2);
var seq53114__$3 = cljs.core.next(seq53114__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53115,G__53116,G__53117,seq53114__$3);
}));

/**
 * Like [[clojure.core/get-in]], but for LensSchemas.
 */
malli.util.get_in = (function malli$util$get_in(var_args){
var G__53126 = arguments.length;
switch (G__53126) {
case 2:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.get_in.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,ks){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,null,null);
}));

(malli.util.get_in.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,ks,default$){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,default$,null);
}));

(malli.util.get_in.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,p__53130,default$,options){
var vec__53131 = p__53130;
var seq__53132 = cljs.core.seq(vec__53131);
var first__53133 = cljs.core.first(seq__53132);
var seq__53132__$1 = cljs.core.next(seq__53132);
var k = first__53133;
var ks = seq__53132__$1;
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = _QMARK_schema;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
})(),options);
if(cljs.core.not(k)){
return schema__$1;
} else {
var sentinel = ({});
var schema__$2 = malli.util.get.cljs$core$IFn$_invoke$arity$3(schema__$1,k,sentinel);
if((schema__$2 === sentinel)){
return default$;
} else {
if(ks){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$3(schema__$2,ks,default$);
} else {
return schema__$2;

}
}
}
}));

(malli.util.get_in.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/assoc-in]], but for LensSchemas.
 */
malli.util.assoc_in = (function malli$util$assoc_in(var_args){
var G__53159 = arguments.length;
switch (G__53159) {
case 3:
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,ks,value){
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,value,null);
}));

(malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,p__53171,value,options){
var vec__53176 = p__53171;
var seq__53177 = cljs.core.seq(vec__53176);
var first__53178 = cljs.core.first(seq__53177);
var seq__53177__$1 = cljs.core.next(seq__53177);
var k = first__53178;
var ks = seq__53177__$1;
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,k,((ks)?malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3(malli.util.get.cljs$core$IFn$_invoke$arity$3(schema__$1,k,malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema__$1))),ks,value):value));
}));

(malli.util.assoc_in.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/update-in]], but for LensSchemas.
 */
malli.util.update_in = (function malli$util$update_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53494 = arguments.length;
var i__5770__auto___53495 = (0);
while(true){
if((i__5770__auto___53495 < len__5769__auto___53494)){
args__5775__auto__.push((arguments[i__5770__auto___53495]));

var G__53496 = (i__5770__auto___53495 + (1));
i__5770__auto___53495 = G__53496;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return malli.util.update_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(malli.util.update_in.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,ks,f,args){
var up = (function malli$util$up(s,p__53215,f__$1,args__$1){
var vec__53217 = p__53215;
var seq__53218 = cljs.core.seq(vec__53217);
var first__53219 = cljs.core.first(seq__53218);
var seq__53218__$1 = cljs.core.next(seq__53218);
var k = first__53219;
var ks__$1 = seq__53218__$1;
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3(s,k,((ks__$1)?malli$util$up(malli.util.get.cljs$core$IFn$_invoke$arity$3(s,k,malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema__$1))),ks__$1,f__$1,args__$1):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,malli.util.get.cljs$core$IFn$_invoke$arity$2(s,k),args__$1)));
});
return up(schema__$1,ks,f,args);
}));

(malli.util.update_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(malli.util.update_in.cljs$lang$applyTo = (function (seq53188){
var G__53190 = cljs.core.first(seq53188);
var seq53188__$1 = cljs.core.next(seq53188);
var G__53191 = cljs.core.first(seq53188__$1);
var seq53188__$2 = cljs.core.next(seq53188__$1);
var G__53192 = cljs.core.first(seq53188__$2);
var seq53188__$3 = cljs.core.next(seq53188__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53190,G__53191,G__53192,seq53188__$3);
}));

malli.util._map_syntax_walker = (function malli$util$_map_syntax_walker(schema__$1,_,children,___$1){
var properties = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1);
var options = malli.core.options.cljs$core$IFn$_invoke$arity$1(schema__$1);
var r = (cljs.core.truth_(properties)?(properties.cljs$core$IFn$_invoke$arity$1 ? properties.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"registry","registry",1021159018)) : properties.call(null,new cljs.core.Keyword(null,"registry","registry",1021159018))):null);
var properties__$1 = (cljs.core.truth_(r)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties,new cljs.core.Keyword(null,"registry","registry",1021159018),malli.core._property_registry(r,options,malli.core._form)):properties);
var G__53230 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema__$1)], null);
var G__53230__$1 = ((cljs.core.seq(properties__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53230,new cljs.core.Keyword(null,"properties","properties",685819552),properties__$1):G__53230);
if(cljs.core.seq(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53230__$1,new cljs.core.Keyword(null,"children","children",-940561982),children);
} else {
return G__53230__$1;
}
});
malli.util.to_map_syntax = (function malli$util$to_map_syntax(var_args){
var G__53237 = arguments.length;
switch (G__53237) {
case 1:
return malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.util._map_syntax_walker,options);
}));

(malli.util.to_map_syntax.cljs$lang$maxFixedArity = 2);

malli.util.from_map_syntax = (function malli$util$from_map_syntax(var_args){
var G__53248 = arguments.length;
switch (G__53248) {
case 1:
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$1 = (function (m){
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2(m,null);
}));

(malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2 = (function (p__53253,options){
var map__53254 = p__53253;
var map__53254__$1 = cljs.core.__destructure_map(map__53254);
var m = map__53254__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53254__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53254__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.map_QMARK_(m)){
var _LT__child = ((cljs.core.vector_QMARK_(cljs.core.first(children)))?(function (f){
return (function (p1__53245_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__53245_SHARP_,(2),f);
});
}):cljs.core.identity);
var vec__53255 = malli.core._properties_and_options(properties,options,malli.core._form);
var properties__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53255,(0),null);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53255,(1),null);
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(type,properties__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (){var G__53258 = (function (p1__53246_SHARP_){
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2(p1__53246_SHARP_,options__$1);
});
return (_LT__child.cljs$core$IFn$_invoke$arity$1 ? _LT__child.cljs$core$IFn$_invoke$arity$1(G__53258) : _LT__child.call(null,G__53258));
})(),children),options__$1);
} else {
return m;
}
}));

(malli.util.from_map_syntax.cljs$lang$maxFixedArity = 2);

malli.util._reducing = (function malli$util$_reducing(f){
return (function (_,p__53262,options){
var vec__53263 = p__53262;
var seq__53264 = cljs.core.seq(vec__53263);
var first__53265 = cljs.core.first(seq__53264);
var seq__53264__$1 = cljs.core.next(seq__53264);
var first = first__53265;
var rest = seq__53264__$1;
var children = vec__53263;
var children__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53259_SHARP_){
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(p1__53259_SHARP_,options);
}),children);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [children__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.core.form,children__$1),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53260_SHARP_,p2__53261_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__53260_SHARP_,p2__53261_SHARP_,options) : f.call(null,p1__53260_SHARP_,p2__53261_SHARP_,options));
}),first,rest)], null);
});
});
malli.util._applying = (function malli$util$_applying(f){
return (function (_,children,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(children,(0),(function (p1__53270_SHARP_){
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(p1__53270_SHARP_,options);
})),cljs.core.update.cljs$core$IFn$_invoke$arity$3(children,(0),(function (p1__53271_SHARP_){
return malli.core.form.cljs$core$IFn$_invoke$arity$2(p1__53271_SHARP_,options);
})),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,options))], null);
});
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.Cached}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {malli.core.RefSchema}
 * @implements {cljs.core.IWithMeta}
*/
malli.util.t_malli$util53290 = (function (form,options,forms,properties,childs,schema,children,min,type_properties,fn,parent,meta53275,map__53273,type,vec__53284,p__53272,cache,max,meta53291){
this.form = form;
this.options = options;
this.forms = forms;
this.properties = properties;
this.childs = childs;
this.schema = schema;
this.children = children;
this.min = min;
this.type_properties = type_properties;
this.fn = fn;
this.parent = parent;
this.meta53275 = meta53275;
this.map__53273 = map__53273;
this.type = type;
this.vec__53284 = vec__53284;
this.p__53272 = p__53272;
this.cache = cache;
this.max = max;
this.meta53291 = meta53291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.util.t_malli$util53290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53292,meta53291__$1){
var self__ = this;
var _53292__$1 = this;
return (new malli.util.t_malli$util53290(self__.form,self__.options,self__.forms,self__.properties,self__.childs,self__.schema,self__.children,self__.min,self__.type_properties,self__.fn,self__.parent,self__.meta53275,self__.map__53273,self__.type,self__.vec__53284,self__.p__53272,self__.cache,self__.max,meta53291__$1));
}));

(malli.util.t_malli$util53290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53292){
var self__ = this;
var _53292__$1 = this;
return self__.meta53291;
}));

(malli.util.t_malli$util53290.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util53290.prototype.malli$core$Schema$_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._validator(self__.schema);
}));

(malli.util.t_malli$util53290.prototype.malli$core$Schema$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(malli.util.t_malli$util53290.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._parent_children_transformer(this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.schema], null),transformer,method,options__$1);
}));

(malli.util.t_malli$util53290.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
var children__$1 = (cljs.core.truth_(self__.childs)?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.children,(0),self__.childs):self__.children);
if(cljs.core.truth_(malli.core._accept(walker,this$__$1,path,options__$1))){
return malli.core._outer(walker,this$__$1,path,malli.core._inner_indexed(walker,path,children__$1,options__$1),options__$1);
} else {
return null;
}
}));

(malli.util.t_malli$util53290.prototype.malli$core$Schema$_parser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._parser(self__.schema);
}));

(malli.util.t_malli$util53290.prototype.malli$core$Schema$_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.properties;
}));

(malli.util.t_malli$util53290.prototype.malli$core$Schema$_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(malli.util.t_malli$util53290.prototype.malli$core$Schema$_form$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.form);
}));

(malli.util.t_malli$util53290.prototype.malli$core$Schema$_explainer$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return malli.core._explainer(self__.schema,path);
}));

(malli.util.t_malli$util53290.prototype.malli$core$Schema$_unparser$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.core._unparser(self__.schema);
}));

(malli.util.t_malli$util53290.prototype.malli$core$Schema$_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(malli.util.t_malli$util53290.prototype.malli$core$Cached$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util53290.prototype.malli$core$Cached$_cache$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cache;
}));

(malli.util.t_malli$util53290.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util53290.prototype.malli$core$LensSchema$_keep$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.util.t_malli$util53290.prototype.malli$core$LensSchema$_get$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.children,key,default$);
}));

(malli.util.t_malli$util53290.prototype.malli$core$LensSchema$_set$arity$3 = (function (_,key,value){
var self__ = this;
var ___$1 = this;
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$3(self__.type,self__.properties,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.children,key,value));
}));

(malli.util.t_malli$util53290.prototype.malli$core$RefSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util53290.prototype.malli$core$RefSchema$_ref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.util.t_malli$util53290.prototype.malli$core$RefSchema$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.schema;
}));

(malli.util.t_malli$util53290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.util","t_malli$util53274","malli.util/t_malli$util53274",-753948791,null)], null)),new cljs.core.Symbol(null,"meta53275","meta53275",-2015913965,null),new cljs.core.Symbol(null,"map__53273","map__53273",1720674867,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"vec__53284","vec__53284",-1961430060,null),new cljs.core.Symbol(null,"p__53272","p__53272",1320281464,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"meta53291","meta53291",-391705723,null)], null);
}));

(malli.util.t_malli$util53290.cljs$lang$type = true);

(malli.util.t_malli$util53290.cljs$lang$ctorStr = "malli.util/t_malli$util53290");

(malli.util.t_malli$util53290.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.util/t_malli$util53290");
}));

/**
 * Positional factory function for malli.util/t_malli$util53290.
 */
malli.util.__GT_t_malli$util53290 = (function malli$util$__GT_t_malli$util53290(form,options,forms,properties,childs,schema__$1,children,min,type_properties,fn,parent,meta53275,map__53273,type,vec__53284,p__53272,cache,max,meta53291){
return (new malli.util.t_malli$util53290(form,options,forms,properties,childs,schema__$1,children,min,type_properties,fn,parent,meta53275,map__53273,type,vec__53284,p__53272,cache,max,meta53291));
});



/**
* @constructor
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.util.t_malli$util53274 = (function (p__53272,map__53273,type,min,max,childs,type_properties,fn,meta53275){
this.p__53272 = p__53272;
this.map__53273 = map__53273;
this.type = type;
this.min = min;
this.max = max;
this.childs = childs;
this.type_properties = type_properties;
this.fn = fn;
this.meta53275 = meta53275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.util.t_malli$util53274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53276,meta53275__$1){
var self__ = this;
var _53276__$1 = this;
return (new malli.util.t_malli$util53274(self__.p__53272,self__.map__53273,self__.type,self__.min,self__.max,self__.childs,self__.type_properties,self__.fn,meta53275__$1));
}));

(malli.util.t_malli$util53274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53276){
var self__ = this;
var _53276__$1 = this;
return self__.meta53275;
}));

(malli.util.t_malli$util53274.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util53274.prototype.malli$core$IntoSchema$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(malli.util.t_malli$util53274.prototype.malli$core$IntoSchema$_type_properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type_properties;
}));

(malli.util.t_malli$util53274.prototype.malli$core$IntoSchema$_properties_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.util.t_malli$util53274.prototype.malli$core$IntoSchema$_children_schema$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.util.t_malli$util53274.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (parent,properties,children,options){
var self__ = this;
var parent__$1 = this;
malli.core._check_children_BANG_.cljs$core$IFn$_invoke$arity$5(self__.type,properties,children,self__.min,self__.max);

var vec__53284 = (function (){var G__53287 = properties;
var G__53288 = cljs.core.vec(children);
var G__53289 = options;
return (self__.fn.cljs$core$IFn$_invoke$arity$3 ? self__.fn.cljs$core$IFn$_invoke$arity$3(G__53287,G__53288,G__53289) : self__.fn.call(null,G__53287,G__53288,G__53289));
})();
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53284,(0),null);
var forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53284,(1),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53284,(2),null);
var form = (new cljs.core.Delay((function (){
return malli.core._create_form(self__.type,properties,forms,options);
}),null));
var cache = malli.core._create_cache(options);
return (new malli.util.t_malli$util53290(form,options,forms,properties,self__.childs,schema__$1,children__$1,self__.min,self__.type_properties,self__.fn,parent__$1,self__.meta53275,self__.map__53273,self__.type,vec__53284,self__.p__53272,cache,self__.max,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.util.t_malli$util53274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__53272","p__53272",1320281464,null),new cljs.core.Symbol(null,"map__53273","map__53273",1720674867,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"meta53275","meta53275",-2015913965,null)], null);
}));

(malli.util.t_malli$util53274.cljs$lang$type = true);

(malli.util.t_malli$util53274.cljs$lang$ctorStr = "malli.util/t_malli$util53274");

(malli.util.t_malli$util53274.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.util/t_malli$util53274");
}));

/**
 * Positional factory function for malli.util/t_malli$util53274.
 */
malli.util.__GT_t_malli$util53274 = (function malli$util$__GT_t_malli$util53274(p__53272,map__53273,type,min,max,childs,type_properties,fn,meta53275){
return (new malli.util.t_malli$util53274(p__53272,map__53273,type,min,max,childs,type_properties,fn,meta53275));
});


malli.util._util_schema = (function malli$util$_util_schema(p__53272){
var map__53273 = p__53272;
var map__53273__$1 = cljs.core.__destructure_map(map__53273);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53273__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53273__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53273__$1,new cljs.core.Keyword(null,"max","max",61366548));
var childs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53273__$1,new cljs.core.Keyword(null,"childs","childs",-1293201887));
var type_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53273__$1,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53273__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return (new malli.util.t_malli$util53274(p__53272,map__53273__$1,type,min,max,childs,type_properties,fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.util._merge = (function malli$util$_merge(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._reducing(malli.util.merge)], null));
});
malli.util._union = (function malli$util$_union(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._reducing(malli.util.union)], null));
});
malli.util._select_keys = (function malli$util$_select_keys(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),new cljs.core.Keyword(null,"childs","childs",-1293201887),(1),new cljs.core.Keyword(null,"min","min",444991522),(2),new cljs.core.Keyword(null,"max","max",61366548),(2),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._applying(malli.util.select_keys)], null));
});
malli.util.schemas = (function malli$util$schemas(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"merge","merge",-1804319409),malli.util._merge(),new cljs.core.Keyword(null,"union","union",2142937499),malli.util._union(),new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),malli.util._select_keys()], null);
});
Object.defineProperty(module.exports, "open_schema", { enumerable: false, get: function() { return malli.util.open_schema; } });
Object.defineProperty(module.exports, "_simplify_map_entry", { enumerable: false, get: function() { return malli.util._simplify_map_entry; } });
Object.defineProperty(module.exports, "data_explainer", { enumerable: false, get: function() { return malli.util.data_explainer; } });
Object.defineProperty(module.exports, "_util_schema", { enumerable: false, get: function() { return malli.util._util_schema; } });
Object.defineProperty(module.exports, "__GT_t_malli$util53274", { enumerable: false, get: function() { return malli.util.__GT_t_malli$util53274; } });
Object.defineProperty(module.exports, "dissoc", { enumerable: false, get: function() { return malli.util.dissoc; } });
Object.defineProperty(module.exports, "_applying", { enumerable: false, get: function() { return malli.util._applying; } });
Object.defineProperty(module.exports, "union", { enumerable: false, get: function() { return malli.util.union; } });
Object.defineProperty(module.exports, "distinct_by", { enumerable: false, get: function() { return malli.util.distinct_by; } });
Object.defineProperty(module.exports, "find", { enumerable: false, get: function() { return malli.util.find; } });
Object.defineProperty(module.exports, "_reducing", { enumerable: false, get: function() { return malli.util._reducing; } });
Object.defineProperty(module.exports, "find_first", { enumerable: false, get: function() { return malli.util.find_first; } });
Object.defineProperty(module.exports, "_select_keys", { enumerable: false, get: function() { return malli.util._select_keys; } });
Object.defineProperty(module.exports, "t_malli$util52459", { enumerable: false, get: function() { return malli.util.t_malli$util52459; } });
Object.defineProperty(module.exports, "get", { enumerable: false, get: function() { return malli.util.get; } });
Object.defineProperty(module.exports, "t_malli$util53274", { enumerable: false, get: function() { return malli.util.t_malli$util53274; } });
Object.defineProperty(module.exports, "to_map_syntax", { enumerable: false, get: function() { return malli.util.to_map_syntax; } });
Object.defineProperty(module.exports, "path__GT_in", { enumerable: false, get: function() { return malli.util.path__GT_in; } });
Object.defineProperty(module.exports, "from_map_syntax", { enumerable: false, get: function() { return malli.util.from_map_syntax; } });
Object.defineProperty(module.exports, "_map_syntax_walker", { enumerable: false, get: function() { return malli.util._map_syntax_walker; } });
Object.defineProperty(module.exports, "_required_map_entry_QMARK_", { enumerable: false, get: function() { return malli.util._required_map_entry_QMARK_; } });
Object.defineProperty(module.exports, "required_keys", { enumerable: false, get: function() { return malli.util.required_keys; } });
Object.defineProperty(module.exports, "__GT_t_malli$util53290", { enumerable: false, get: function() { return malli.util.__GT_t_malli$util53290; } });
Object.defineProperty(module.exports, "closed_schema", { enumerable: false, get: function() { return malli.util.closed_schema; } });
Object.defineProperty(module.exports, "in__GT_paths", { enumerable: false, get: function() { return malli.util.in__GT_paths; } });
Object.defineProperty(module.exports, "assoc_in", { enumerable: false, get: function() { return malli.util.assoc_in; } });
Object.defineProperty(module.exports, "__GT_t_malli$util52459", { enumerable: false, get: function() { return malli.util.__GT_t_malli$util52459; } });
Object.defineProperty(module.exports, "_ok_to_close_or_open_QMARK_", { enumerable: false, get: function() { return malli.util._ok_to_close_or_open_QMARK_; } });
Object.defineProperty(module.exports, "_union", { enumerable: false, get: function() { return malli.util._union; } });
Object.defineProperty(module.exports, "explain_data", { enumerable: false, get: function() { return malli.util.explain_data; } });
Object.defineProperty(module.exports, "_entry", { enumerable: false, get: function() { return malli.util._entry; } });
Object.defineProperty(module.exports, "select_keys", { enumerable: false, get: function() { return malli.util.select_keys; } });
Object.defineProperty(module.exports, "update", { enumerable: false, get: function() { return malli.util.update; } });
Object.defineProperty(module.exports, "update_in", { enumerable: false, get: function() { return malli.util.update_in; } });
Object.defineProperty(module.exports, "equals", { enumerable: false, get: function() { return malli.util.equals; } });
Object.defineProperty(module.exports, "merge", { enumerable: false, get: function() { return malli.util.merge; } });
Object.defineProperty(module.exports, "rename_keys", { enumerable: false, get: function() { return malli.util.rename_keys; } });
Object.defineProperty(module.exports, "keys", { enumerable: false, get: function() { return malli.util.keys; } });
Object.defineProperty(module.exports, "schemas", { enumerable: false, get: function() { return malli.util.schemas; } });
Object.defineProperty(module.exports, "_merge", { enumerable: false, get: function() { return malli.util._merge; } });
Object.defineProperty(module.exports, "update_properties", { enumerable: false, get: function() { return malli.util.update_properties; } });
Object.defineProperty(module.exports, "assoc", { enumerable: false, get: function() { return malli.util.assoc; } });
Object.defineProperty(module.exports, "subschemas", { enumerable: false, get: function() { return malli.util.subschemas; } });
Object.defineProperty(module.exports, "optional_keys", { enumerable: false, get: function() { return malli.util.optional_keys; } });
Object.defineProperty(module.exports, "get_in", { enumerable: false, get: function() { return malli.util.get_in; } });
Object.defineProperty(module.exports, "t_malli$util53290", { enumerable: false, get: function() { return malli.util.t_malli$util53290; } });
Object.defineProperty(module.exports, "transform_entries", { enumerable: false, get: function() { return malli.util.transform_entries; } });
//# sourceMappingURL=malli.util.js.map
