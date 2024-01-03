var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.spec.alpha.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.repl.js");

goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38104){
var map__38105 = p__38104;
var map__38105__$1 = cljs.core.__destructure_map(map__38105);
var m = map__38105__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38105__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38118_38682 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38119_38683 = null;
var count__38120_38684 = (0);
var i__38121_38685 = (0);
while(true){
if((i__38121_38685 < count__38120_38684)){
var f_38687 = chunk__38119_38683.cljs$core$IIndexed$_nth$arity$2(null,i__38121_38685);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38687], 0));


var G__38688 = seq__38118_38682;
var G__38689 = chunk__38119_38683;
var G__38690 = count__38120_38684;
var G__38691 = (i__38121_38685 + (1));
seq__38118_38682 = G__38688;
chunk__38119_38683 = G__38689;
count__38120_38684 = G__38690;
i__38121_38685 = G__38691;
continue;
} else {
var temp__5804__auto___38692 = cljs.core.seq(seq__38118_38682);
if(temp__5804__auto___38692){
var seq__38118_38693__$1 = temp__5804__auto___38692;
if(cljs.core.chunked_seq_QMARK_(seq__38118_38693__$1)){
var c__5568__auto___38694 = cljs.core.chunk_first(seq__38118_38693__$1);
var G__38695 = cljs.core.chunk_rest(seq__38118_38693__$1);
var G__38696 = c__5568__auto___38694;
var G__38697 = cljs.core.count(c__5568__auto___38694);
var G__38698 = (0);
seq__38118_38682 = G__38695;
chunk__38119_38683 = G__38696;
count__38120_38684 = G__38697;
i__38121_38685 = G__38698;
continue;
} else {
var f_38699 = cljs.core.first(seq__38118_38693__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38699], 0));


var G__38700 = cljs.core.next(seq__38118_38693__$1);
var G__38701 = null;
var G__38702 = (0);
var G__38703 = (0);
seq__38118_38682 = G__38700;
chunk__38119_38683 = G__38701;
count__38120_38684 = G__38702;
i__38121_38685 = G__38703;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38704 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38704], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38704)))?cljs.core.second(arglists_38704):arglists_38704)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38138_38711 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38139_38712 = null;
var count__38140_38713 = (0);
var i__38141_38714 = (0);
while(true){
if((i__38141_38714 < count__38140_38713)){
var vec__38245_38715 = chunk__38139_38712.cljs$core$IIndexed$_nth$arity$2(null,i__38141_38714);
var name_38716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38245_38715,(0),null);
var map__38248_38717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38245_38715,(1),null);
var map__38248_38718__$1 = cljs.core.__destructure_map(map__38248_38717);
var doc_38719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38248_38718__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38248_38718__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38716], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38720], 0));

if(cljs.core.truth_(doc_38719)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38719], 0));
} else {
}


var G__38722 = seq__38138_38711;
var G__38723 = chunk__38139_38712;
var G__38724 = count__38140_38713;
var G__38725 = (i__38141_38714 + (1));
seq__38138_38711 = G__38722;
chunk__38139_38712 = G__38723;
count__38140_38713 = G__38724;
i__38141_38714 = G__38725;
continue;
} else {
var temp__5804__auto___38726 = cljs.core.seq(seq__38138_38711);
if(temp__5804__auto___38726){
var seq__38138_38727__$1 = temp__5804__auto___38726;
if(cljs.core.chunked_seq_QMARK_(seq__38138_38727__$1)){
var c__5568__auto___38728 = cljs.core.chunk_first(seq__38138_38727__$1);
var G__38730 = cljs.core.chunk_rest(seq__38138_38727__$1);
var G__38731 = c__5568__auto___38728;
var G__38732 = cljs.core.count(c__5568__auto___38728);
var G__38733 = (0);
seq__38138_38711 = G__38730;
chunk__38139_38712 = G__38731;
count__38140_38713 = G__38732;
i__38141_38714 = G__38733;
continue;
} else {
var vec__38260_38734 = cljs.core.first(seq__38138_38727__$1);
var name_38735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38260_38734,(0),null);
var map__38263_38736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38260_38734,(1),null);
var map__38263_38737__$1 = cljs.core.__destructure_map(map__38263_38736);
var doc_38738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38263_38737__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38263_38737__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38735], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38739], 0));

if(cljs.core.truth_(doc_38738)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38738], 0));
} else {
}


var G__38740 = cljs.core.next(seq__38138_38727__$1);
var G__38741 = null;
var G__38742 = (0);
var G__38743 = (0);
seq__38138_38711 = G__38740;
chunk__38139_38712 = G__38741;
count__38140_38713 = G__38742;
i__38141_38714 = G__38743;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38271 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38272 = null;
var count__38273 = (0);
var i__38274 = (0);
while(true){
if((i__38274 < count__38273)){
var role = chunk__38272.cljs$core$IIndexed$_nth$arity$2(null,i__38274);
var temp__5804__auto___38744__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38744__$1)){
var spec_38747 = temp__5804__auto___38744__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38747)], 0));
} else {
}


var G__38748 = seq__38271;
var G__38749 = chunk__38272;
var G__38750 = count__38273;
var G__38751 = (i__38274 + (1));
seq__38271 = G__38748;
chunk__38272 = G__38749;
count__38273 = G__38750;
i__38274 = G__38751;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__38271);
if(temp__5804__auto____$1){
var seq__38271__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38271__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38271__$1);
var G__38752 = cljs.core.chunk_rest(seq__38271__$1);
var G__38753 = c__5568__auto__;
var G__38754 = cljs.core.count(c__5568__auto__);
var G__38755 = (0);
seq__38271 = G__38752;
chunk__38272 = G__38753;
count__38273 = G__38754;
i__38274 = G__38755;
continue;
} else {
var role = cljs.core.first(seq__38271__$1);
var temp__5804__auto___38756__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38756__$2)){
var spec_38757 = temp__5804__auto___38756__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38757)], 0));
} else {
}


var G__38760 = cljs.core.next(seq__38271__$1);
var G__38761 = null;
var G__38762 = (0);
var G__38763 = (0);
seq__38271 = G__38760;
chunk__38272 = G__38761;
count__38273 = G__38762;
i__38274 = G__38763;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38765 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38766 = cljs.core.ex_cause(t);
via = G__38765;
t = G__38766;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38445 = datafied_throwable;
var map__38445__$1 = cljs.core.__destructure_map(map__38445);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38445__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38445__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38445__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38446 = cljs.core.last(via);
var map__38446__$1 = cljs.core.__destructure_map(map__38446);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38446__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38446__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38446__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38447 = data;
var map__38447__$1 = cljs.core.__destructure_map(map__38447);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38448 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38448__$1 = cljs.core.__destructure_map(map__38448);
var top_data = map__38448__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38448__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38449 = phase;
var G__38449__$1 = (((G__38449 instanceof cljs.core.Keyword))?G__38449.fqn:null);
switch (G__38449__$1) {
case "read-source":
var map__38451 = data;
var map__38451__$1 = cljs.core.__destructure_map(map__38451);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38451__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38451__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38452 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38452__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38452,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38452);
var G__38452__$2 = (cljs.core.truth_((function (){var fexpr__38453 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38453.cljs$core$IFn$_invoke$arity$1 ? fexpr__38453.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38453.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38452__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38452__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38452__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38452__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38455 = top_data;
var G__38455__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38455,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38455);
var G__38455__$2 = (cljs.core.truth_((function (){var fexpr__38457 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38457.cljs$core$IFn$_invoke$arity$1 ? fexpr__38457.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38457.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38455__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38455__$1);
var G__38455__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38455__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38455__$2);
var G__38455__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38455__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38455__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38455__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38455__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38461 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38461,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38461,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38461,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38461,(3),null);
var G__38464 = top_data;
var G__38464__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38464,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38464);
var G__38464__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38464__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38464__$1);
var G__38464__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38464__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38464__$2);
var G__38464__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38464__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38464__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38464__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38464__$4;
}

break;
case "execution":
var vec__38466 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38466,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38466,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38466,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38466,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38431_SHARP_){
var or__5045__auto__ = (p1__38431_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__38474 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38474.cljs$core$IFn$_invoke$arity$1 ? fexpr__38474.cljs$core$IFn$_invoke$arity$1(p1__38431_SHARP_) : fexpr__38474.call(null,p1__38431_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__38476 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38476__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38476,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38476);
var G__38476__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38476__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38476__$1);
var G__38476__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38476__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38476__$2);
var G__38476__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38476__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38476__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38476__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38476__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38449__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38481){
var map__38482 = p__38481;
var map__38482__$1 = cljs.core.__destructure_map(map__38482);
var triage_data = map__38482__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38490 = phase;
var G__38490__$1 = (((G__38490 instanceof cljs.core.Keyword))?G__38490.fqn:null);
switch (G__38490__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38492 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38493 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38494 = loc;
var G__38495 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38496_38787 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38497_38788 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38498_38789 = true;
var _STAR_print_fn_STAR__temp_val__38499_38790 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38498_38789);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38499_38790);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38479_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38479_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38497_38788);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38496_38787);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38492,G__38493,G__38494,G__38495) : format.call(null,G__38492,G__38493,G__38494,G__38495));

break;
case "macroexpansion":
var G__38505 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38506 = cause_type;
var G__38507 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38508 = loc;
var G__38509 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38505,G__38506,G__38507,G__38508,G__38509) : format.call(null,G__38505,G__38506,G__38507,G__38508,G__38509));

break;
case "compile-syntax-check":
var G__38514 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38515 = cause_type;
var G__38516 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38517 = loc;
var G__38518 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38514,G__38515,G__38516,G__38517,G__38518) : format.call(null,G__38514,G__38515,G__38516,G__38517,G__38518));

break;
case "compilation":
var G__38524 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38525 = cause_type;
var G__38526 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38527 = loc;
var G__38528 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38524,G__38525,G__38526,G__38527,G__38528) : format.call(null,G__38524,G__38525,G__38526,G__38527,G__38528));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38536 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38537 = symbol;
var G__38538 = loc;
var G__38539 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38546_38801 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38547_38802 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38548_38803 = true;
var _STAR_print_fn_STAR__temp_val__38550_38804 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38548_38803);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38550_38804);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38480_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38480_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38547_38802);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38546_38801);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38536,G__38537,G__38538,G__38539) : format.call(null,G__38536,G__38537,G__38538,G__38539));
} else {
var G__38565 = "Execution error%s at %s(%s).\n%s\n";
var G__38566 = cause_type;
var G__38567 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38568 = loc;
var G__38569 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38565,G__38566,G__38567,G__38568,G__38569) : format.call(null,G__38565,G__38566,G__38567,G__38568,G__38569));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38490__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
Object.defineProperty(module.exports, "print_doc", { enumerable: false, get: function() { return cljs.repl.print_doc; } });
Object.defineProperty(module.exports, "Error__GT_map", { enumerable: false, get: function() { return cljs.repl.Error__GT_map; } });
Object.defineProperty(module.exports, "ex_triage", { enumerable: false, get: function() { return cljs.repl.ex_triage; } });
Object.defineProperty(module.exports, "ex_str", { enumerable: false, get: function() { return cljs.repl.ex_str; } });
Object.defineProperty(module.exports, "error__GT_str", { enumerable: false, get: function() { return cljs.repl.error__GT_str; } });
//# sourceMappingURL=cljs.repl.js.map
