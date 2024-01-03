var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./cljs.core.async.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.dom.js");

goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38073 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38073(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38074 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38074(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37120 = coll;
var G__37121 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37120,G__37121) : shadow.dom.lazy_native_coll_seq.call(null,G__37120,G__37121));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37137 = arguments.length;
switch (G__37137) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37144 = arguments.length;
switch (G__37144) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37154 = arguments.length;
switch (G__37154) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37160 = arguments.length;
switch (G__37160) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37177 = arguments.length;
switch (G__37177) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37194 = arguments.length;
switch (G__37194) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37210){if((e37210 instanceof Object)){
var e = e37210;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37210;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37221 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37222 = null;
var count__37223 = (0);
var i__37224 = (0);
while(true){
if((i__37224 < count__37223)){
var el = chunk__37222.cljs$core$IIndexed$_nth$arity$2(null,i__37224);
var handler_38089__$1 = ((function (seq__37221,chunk__37222,count__37223,i__37224,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37221,chunk__37222,count__37223,i__37224,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38089__$1);


var G__38090 = seq__37221;
var G__38091 = chunk__37222;
var G__38092 = count__37223;
var G__38093 = (i__37224 + (1));
seq__37221 = G__38090;
chunk__37222 = G__38091;
count__37223 = G__38092;
i__37224 = G__38093;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37221);
if(temp__5804__auto__){
var seq__37221__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37221__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37221__$1);
var G__38094 = cljs.core.chunk_rest(seq__37221__$1);
var G__38095 = c__5568__auto__;
var G__38096 = cljs.core.count(c__5568__auto__);
var G__38097 = (0);
seq__37221 = G__38094;
chunk__37222 = G__38095;
count__37223 = G__38096;
i__37224 = G__38097;
continue;
} else {
var el = cljs.core.first(seq__37221__$1);
var handler_38098__$1 = ((function (seq__37221,chunk__37222,count__37223,i__37224,el,seq__37221__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37221,chunk__37222,count__37223,i__37224,el,seq__37221__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38098__$1);


var G__38099 = cljs.core.next(seq__37221__$1);
var G__38100 = null;
var G__38101 = (0);
var G__38102 = (0);
seq__37221 = G__38099;
chunk__37222 = G__38100;
count__37223 = G__38101;
i__37224 = G__38102;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37240 = arguments.length;
switch (G__37240) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37247 = cljs.core.seq(events);
var chunk__37248 = null;
var count__37249 = (0);
var i__37250 = (0);
while(true){
if((i__37250 < count__37249)){
var vec__37261 = chunk__37248.cljs$core$IIndexed$_nth$arity$2(null,i__37250);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37261,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38106 = seq__37247;
var G__38107 = chunk__37248;
var G__38108 = count__37249;
var G__38109 = (i__37250 + (1));
seq__37247 = G__38106;
chunk__37248 = G__38107;
count__37249 = G__38108;
i__37250 = G__38109;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37247);
if(temp__5804__auto__){
var seq__37247__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37247__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37247__$1);
var G__38110 = cljs.core.chunk_rest(seq__37247__$1);
var G__38111 = c__5568__auto__;
var G__38112 = cljs.core.count(c__5568__auto__);
var G__38113 = (0);
seq__37247 = G__38110;
chunk__37248 = G__38111;
count__37249 = G__38112;
i__37250 = G__38113;
continue;
} else {
var vec__37271 = cljs.core.first(seq__37247__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37271,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37271,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38114 = cljs.core.next(seq__37247__$1);
var G__38115 = null;
var G__38116 = (0);
var G__38117 = (0);
seq__37247 = G__38114;
chunk__37248 = G__38115;
count__37249 = G__38116;
i__37250 = G__38117;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37281 = cljs.core.seq(styles);
var chunk__37282 = null;
var count__37283 = (0);
var i__37284 = (0);
while(true){
if((i__37284 < count__37283)){
var vec__37300 = chunk__37282.cljs$core$IIndexed$_nth$arity$2(null,i__37284);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37300,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38122 = seq__37281;
var G__38123 = chunk__37282;
var G__38124 = count__37283;
var G__38125 = (i__37284 + (1));
seq__37281 = G__38122;
chunk__37282 = G__38123;
count__37283 = G__38124;
i__37284 = G__38125;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37281);
if(temp__5804__auto__){
var seq__37281__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37281__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37281__$1);
var G__38126 = cljs.core.chunk_rest(seq__37281__$1);
var G__38127 = c__5568__auto__;
var G__38128 = cljs.core.count(c__5568__auto__);
var G__38129 = (0);
seq__37281 = G__38126;
chunk__37282 = G__38127;
count__37283 = G__38128;
i__37284 = G__38129;
continue;
} else {
var vec__37309 = cljs.core.first(seq__37281__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37309,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38130 = cljs.core.next(seq__37281__$1);
var G__38131 = null;
var G__38132 = (0);
var G__38133 = (0);
seq__37281 = G__38130;
chunk__37282 = G__38131;
count__37283 = G__38132;
i__37284 = G__38133;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37318_38134 = key;
var G__37318_38135__$1 = (((G__37318_38134 instanceof cljs.core.Keyword))?G__37318_38134.fqn:null);
switch (G__37318_38135__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38137 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_38137,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_38137,"aria-");
}
})())){
el.setAttribute(ks_38137,value);
} else {
(el[ks_38137] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37346){
var map__37350 = p__37346;
var map__37350__$1 = cljs.core.__destructure_map(map__37350);
var props = map__37350__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37350__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37359 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37365 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37365,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37365;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37382 = arguments.length;
switch (G__37382) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37410){
var vec__37411 = p__37410;
var seq__37412 = cljs.core.seq(vec__37411);
var first__37413 = cljs.core.first(seq__37412);
var seq__37412__$1 = cljs.core.next(seq__37412);
var nn = first__37413;
var first__37413__$1 = cljs.core.first(seq__37412__$1);
var seq__37412__$2 = cljs.core.next(seq__37412__$1);
var np = first__37413__$1;
var nc = seq__37412__$2;
var node = vec__37411;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37416 = nn;
var G__37417 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37416,G__37417) : create_fn.call(null,G__37416,G__37417));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37419 = nn;
var G__37420 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37419,G__37420) : create_fn.call(null,G__37419,G__37420));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37427 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37427,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37427,(1),null);
var seq__37431_38160 = cljs.core.seq(node_children);
var chunk__37432_38161 = null;
var count__37433_38162 = (0);
var i__37434_38163 = (0);
while(true){
if((i__37434_38163 < count__37433_38162)){
var child_struct_38164 = chunk__37432_38161.cljs$core$IIndexed$_nth$arity$2(null,i__37434_38163);
var children_38165 = shadow.dom.dom_node(child_struct_38164);
if(cljs.core.seq_QMARK_(children_38165)){
var seq__37496_38166 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38165));
var chunk__37498_38167 = null;
var count__37499_38168 = (0);
var i__37500_38169 = (0);
while(true){
if((i__37500_38169 < count__37499_38168)){
var child_38170 = chunk__37498_38167.cljs$core$IIndexed$_nth$arity$2(null,i__37500_38169);
if(cljs.core.truth_(child_38170)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38170);


var G__38171 = seq__37496_38166;
var G__38172 = chunk__37498_38167;
var G__38173 = count__37499_38168;
var G__38174 = (i__37500_38169 + (1));
seq__37496_38166 = G__38171;
chunk__37498_38167 = G__38172;
count__37499_38168 = G__38173;
i__37500_38169 = G__38174;
continue;
} else {
var G__38175 = seq__37496_38166;
var G__38176 = chunk__37498_38167;
var G__38177 = count__37499_38168;
var G__38178 = (i__37500_38169 + (1));
seq__37496_38166 = G__38175;
chunk__37498_38167 = G__38176;
count__37499_38168 = G__38177;
i__37500_38169 = G__38178;
continue;
}
} else {
var temp__5804__auto___38179 = cljs.core.seq(seq__37496_38166);
if(temp__5804__auto___38179){
var seq__37496_38180__$1 = temp__5804__auto___38179;
if(cljs.core.chunked_seq_QMARK_(seq__37496_38180__$1)){
var c__5568__auto___38181 = cljs.core.chunk_first(seq__37496_38180__$1);
var G__38182 = cljs.core.chunk_rest(seq__37496_38180__$1);
var G__38183 = c__5568__auto___38181;
var G__38184 = cljs.core.count(c__5568__auto___38181);
var G__38185 = (0);
seq__37496_38166 = G__38182;
chunk__37498_38167 = G__38183;
count__37499_38168 = G__38184;
i__37500_38169 = G__38185;
continue;
} else {
var child_38186 = cljs.core.first(seq__37496_38180__$1);
if(cljs.core.truth_(child_38186)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38186);


var G__38187 = cljs.core.next(seq__37496_38180__$1);
var G__38188 = null;
var G__38189 = (0);
var G__38190 = (0);
seq__37496_38166 = G__38187;
chunk__37498_38167 = G__38188;
count__37499_38168 = G__38189;
i__37500_38169 = G__38190;
continue;
} else {
var G__38191 = cljs.core.next(seq__37496_38180__$1);
var G__38192 = null;
var G__38193 = (0);
var G__38194 = (0);
seq__37496_38166 = G__38191;
chunk__37498_38167 = G__38192;
count__37499_38168 = G__38193;
i__37500_38169 = G__38194;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38165);
}


var G__38195 = seq__37431_38160;
var G__38196 = chunk__37432_38161;
var G__38197 = count__37433_38162;
var G__38198 = (i__37434_38163 + (1));
seq__37431_38160 = G__38195;
chunk__37432_38161 = G__38196;
count__37433_38162 = G__38197;
i__37434_38163 = G__38198;
continue;
} else {
var temp__5804__auto___38199 = cljs.core.seq(seq__37431_38160);
if(temp__5804__auto___38199){
var seq__37431_38200__$1 = temp__5804__auto___38199;
if(cljs.core.chunked_seq_QMARK_(seq__37431_38200__$1)){
var c__5568__auto___38201 = cljs.core.chunk_first(seq__37431_38200__$1);
var G__38202 = cljs.core.chunk_rest(seq__37431_38200__$1);
var G__38203 = c__5568__auto___38201;
var G__38204 = cljs.core.count(c__5568__auto___38201);
var G__38205 = (0);
seq__37431_38160 = G__38202;
chunk__37432_38161 = G__38203;
count__37433_38162 = G__38204;
i__37434_38163 = G__38205;
continue;
} else {
var child_struct_38206 = cljs.core.first(seq__37431_38200__$1);
var children_38207 = shadow.dom.dom_node(child_struct_38206);
if(cljs.core.seq_QMARK_(children_38207)){
var seq__37517_38208 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38207));
var chunk__37519_38209 = null;
var count__37520_38210 = (0);
var i__37521_38211 = (0);
while(true){
if((i__37521_38211 < count__37520_38210)){
var child_38212 = chunk__37519_38209.cljs$core$IIndexed$_nth$arity$2(null,i__37521_38211);
if(cljs.core.truth_(child_38212)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38212);


var G__38213 = seq__37517_38208;
var G__38214 = chunk__37519_38209;
var G__38215 = count__37520_38210;
var G__38216 = (i__37521_38211 + (1));
seq__37517_38208 = G__38213;
chunk__37519_38209 = G__38214;
count__37520_38210 = G__38215;
i__37521_38211 = G__38216;
continue;
} else {
var G__38217 = seq__37517_38208;
var G__38218 = chunk__37519_38209;
var G__38219 = count__37520_38210;
var G__38220 = (i__37521_38211 + (1));
seq__37517_38208 = G__38217;
chunk__37519_38209 = G__38218;
count__37520_38210 = G__38219;
i__37521_38211 = G__38220;
continue;
}
} else {
var temp__5804__auto___38221__$1 = cljs.core.seq(seq__37517_38208);
if(temp__5804__auto___38221__$1){
var seq__37517_38222__$1 = temp__5804__auto___38221__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37517_38222__$1)){
var c__5568__auto___38225 = cljs.core.chunk_first(seq__37517_38222__$1);
var G__38226 = cljs.core.chunk_rest(seq__37517_38222__$1);
var G__38227 = c__5568__auto___38225;
var G__38228 = cljs.core.count(c__5568__auto___38225);
var G__38229 = (0);
seq__37517_38208 = G__38226;
chunk__37519_38209 = G__38227;
count__37520_38210 = G__38228;
i__37521_38211 = G__38229;
continue;
} else {
var child_38230 = cljs.core.first(seq__37517_38222__$1);
if(cljs.core.truth_(child_38230)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38230);


var G__38231 = cljs.core.next(seq__37517_38222__$1);
var G__38232 = null;
var G__38233 = (0);
var G__38234 = (0);
seq__37517_38208 = G__38231;
chunk__37519_38209 = G__38232;
count__37520_38210 = G__38233;
i__37521_38211 = G__38234;
continue;
} else {
var G__38235 = cljs.core.next(seq__37517_38222__$1);
var G__38236 = null;
var G__38237 = (0);
var G__38238 = (0);
seq__37517_38208 = G__38235;
chunk__37519_38209 = G__38236;
count__37520_38210 = G__38237;
i__37521_38211 = G__38238;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38207);
}


var G__38239 = cljs.core.next(seq__37431_38200__$1);
var G__38240 = null;
var G__38241 = (0);
var G__38242 = (0);
seq__37431_38160 = G__38239;
chunk__37432_38161 = G__38240;
count__37433_38162 = G__38241;
i__37434_38163 = G__38242;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37570 = cljs.core.seq(node);
var chunk__37571 = null;
var count__37572 = (0);
var i__37573 = (0);
while(true){
if((i__37573 < count__37572)){
var n = chunk__37571.cljs$core$IIndexed$_nth$arity$2(null,i__37573);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38251 = seq__37570;
var G__38252 = chunk__37571;
var G__38253 = count__37572;
var G__38254 = (i__37573 + (1));
seq__37570 = G__38251;
chunk__37571 = G__38252;
count__37572 = G__38253;
i__37573 = G__38254;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37570);
if(temp__5804__auto__){
var seq__37570__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37570__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37570__$1);
var G__38256 = cljs.core.chunk_rest(seq__37570__$1);
var G__38257 = c__5568__auto__;
var G__38258 = cljs.core.count(c__5568__auto__);
var G__38259 = (0);
seq__37570 = G__38256;
chunk__37571 = G__38257;
count__37572 = G__38258;
i__37573 = G__38259;
continue;
} else {
var n = cljs.core.first(seq__37570__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38264 = cljs.core.next(seq__37570__$1);
var G__38265 = null;
var G__38266 = (0);
var G__38267 = (0);
seq__37570 = G__38264;
chunk__37571 = G__38265;
count__37572 = G__38266;
i__37573 = G__38267;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37581 = arguments.length;
switch (G__37581) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37584 = arguments.length;
switch (G__37584) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37604 = arguments.length;
switch (G__37604) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38294 = arguments.length;
var i__5770__auto___38295 = (0);
while(true){
if((i__5770__auto___38295 < len__5769__auto___38294)){
args__5775__auto__.push((arguments[i__5770__auto___38295]));

var G__38296 = (i__5770__auto___38295 + (1));
i__5770__auto___38295 = G__38296;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37635_38301 = cljs.core.seq(nodes);
var chunk__37636_38302 = null;
var count__37637_38303 = (0);
var i__37638_38304 = (0);
while(true){
if((i__37638_38304 < count__37637_38303)){
var node_38308 = chunk__37636_38302.cljs$core$IIndexed$_nth$arity$2(null,i__37638_38304);
fragment.appendChild(shadow.dom._to_dom(node_38308));


var G__38309 = seq__37635_38301;
var G__38310 = chunk__37636_38302;
var G__38311 = count__37637_38303;
var G__38312 = (i__37638_38304 + (1));
seq__37635_38301 = G__38309;
chunk__37636_38302 = G__38310;
count__37637_38303 = G__38311;
i__37638_38304 = G__38312;
continue;
} else {
var temp__5804__auto___38313 = cljs.core.seq(seq__37635_38301);
if(temp__5804__auto___38313){
var seq__37635_38314__$1 = temp__5804__auto___38313;
if(cljs.core.chunked_seq_QMARK_(seq__37635_38314__$1)){
var c__5568__auto___38315 = cljs.core.chunk_first(seq__37635_38314__$1);
var G__38316 = cljs.core.chunk_rest(seq__37635_38314__$1);
var G__38317 = c__5568__auto___38315;
var G__38318 = cljs.core.count(c__5568__auto___38315);
var G__38319 = (0);
seq__37635_38301 = G__38316;
chunk__37636_38302 = G__38317;
count__37637_38303 = G__38318;
i__37638_38304 = G__38319;
continue;
} else {
var node_38320 = cljs.core.first(seq__37635_38314__$1);
fragment.appendChild(shadow.dom._to_dom(node_38320));


var G__38322 = cljs.core.next(seq__37635_38314__$1);
var G__38323 = null;
var G__38324 = (0);
var G__38325 = (0);
seq__37635_38301 = G__38322;
chunk__37636_38302 = G__38323;
count__37637_38303 = G__38324;
i__37638_38304 = G__38325;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37623){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37623));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37674_38332 = cljs.core.seq(scripts);
var chunk__37675_38333 = null;
var count__37676_38334 = (0);
var i__37677_38335 = (0);
while(true){
if((i__37677_38335 < count__37676_38334)){
var vec__37691_38337 = chunk__37675_38333.cljs$core$IIndexed$_nth$arity$2(null,i__37677_38335);
var script_tag_38339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37691_38337,(0),null);
var script_body_38340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37691_38337,(1),null);
eval(script_body_38340);


var G__38348 = seq__37674_38332;
var G__38349 = chunk__37675_38333;
var G__38350 = count__37676_38334;
var G__38351 = (i__37677_38335 + (1));
seq__37674_38332 = G__38348;
chunk__37675_38333 = G__38349;
count__37676_38334 = G__38350;
i__37677_38335 = G__38351;
continue;
} else {
var temp__5804__auto___38352 = cljs.core.seq(seq__37674_38332);
if(temp__5804__auto___38352){
var seq__37674_38353__$1 = temp__5804__auto___38352;
if(cljs.core.chunked_seq_QMARK_(seq__37674_38353__$1)){
var c__5568__auto___38354 = cljs.core.chunk_first(seq__37674_38353__$1);
var G__38355 = cljs.core.chunk_rest(seq__37674_38353__$1);
var G__38356 = c__5568__auto___38354;
var G__38357 = cljs.core.count(c__5568__auto___38354);
var G__38358 = (0);
seq__37674_38332 = G__38355;
chunk__37675_38333 = G__38356;
count__37676_38334 = G__38357;
i__37677_38335 = G__38358;
continue;
} else {
var vec__37701_38359 = cljs.core.first(seq__37674_38353__$1);
var script_tag_38360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37701_38359,(0),null);
var script_body_38361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37701_38359,(1),null);
eval(script_body_38361);


var G__38366 = cljs.core.next(seq__37674_38353__$1);
var G__38367 = null;
var G__38368 = (0);
var G__38369 = (0);
seq__37674_38332 = G__38366;
chunk__37675_38333 = G__38367;
count__37676_38334 = G__38368;
i__37677_38335 = G__38369;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37707){
var vec__37709 = p__37707;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37709,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37709,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37728 = arguments.length;
switch (G__37728) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37752 = cljs.core.seq(style_keys);
var chunk__37753 = null;
var count__37754 = (0);
var i__37755 = (0);
while(true){
if((i__37755 < count__37754)){
var it = chunk__37753.cljs$core$IIndexed$_nth$arity$2(null,i__37755);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38406 = seq__37752;
var G__38407 = chunk__37753;
var G__38408 = count__37754;
var G__38409 = (i__37755 + (1));
seq__37752 = G__38406;
chunk__37753 = G__38407;
count__37754 = G__38408;
i__37755 = G__38409;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37752);
if(temp__5804__auto__){
var seq__37752__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37752__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37752__$1);
var G__38417 = cljs.core.chunk_rest(seq__37752__$1);
var G__38418 = c__5568__auto__;
var G__38419 = cljs.core.count(c__5568__auto__);
var G__38420 = (0);
seq__37752 = G__38417;
chunk__37753 = G__38418;
count__37754 = G__38419;
i__37755 = G__38420;
continue;
} else {
var it = cljs.core.first(seq__37752__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38425 = cljs.core.next(seq__37752__$1);
var G__38426 = null;
var G__38427 = (0);
var G__38428 = (0);
seq__37752 = G__38425;
chunk__37753 = G__38426;
count__37754 = G__38427;
i__37755 = G__38428;
continue;
}
} else {
return null;
}
}
break;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37764,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37769 = k37764;
var G__37769__$1 = (((G__37769 instanceof cljs.core.Keyword))?G__37769.fqn:null);
switch (G__37769__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37764,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37770){
var vec__37771 = p__37770;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37771,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37771,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37763){
var self__ = this;
var G__37763__$1 = this;
return (new cljs.core.RecordIter((0),G__37763__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37765,other37766){
var self__ = this;
var this37765__$1 = this;
return (((!((other37766 == null)))) && ((((this37765__$1.constructor === other37766.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37765__$1.x,other37766.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37765__$1.y,other37766.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37765__$1.__extmap,other37766.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37764){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37815 = k37764;
var G__37815__$1 = (((G__37815 instanceof cljs.core.Keyword))?G__37815.fqn:null);
switch (G__37815__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37764);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37763){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37824 = cljs.core.keyword_identical_QMARK_;
var expr__37825 = k__5352__auto__;
if(cljs.core.truth_((pred__37824.cljs$core$IFn$_invoke$arity$2 ? pred__37824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37825) : pred__37824.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37825)))){
return (new shadow.dom.Coordinate(G__37763,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37824.cljs$core$IFn$_invoke$arity$2 ? pred__37824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37825) : pred__37824.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37825)))){
return (new shadow.dom.Coordinate(self__.x,G__37763,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37763),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37763){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37763,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37768){
var extmap__5385__auto__ = (function (){var G__37836 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37768,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37768)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37836);
} else {
return G__37836;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37768),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37768),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37860,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37869 = k37860;
var G__37869__$1 = (((G__37869 instanceof cljs.core.Keyword))?G__37869.fqn:null);
switch (G__37869__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37860,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37872){
var vec__37874 = p__37872;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37874,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37874,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37859){
var self__ = this;
var G__37859__$1 = this;
return (new cljs.core.RecordIter((0),G__37859__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37861,other37862){
var self__ = this;
var this37861__$1 = this;
return (((!((other37862 == null)))) && ((((this37861__$1.constructor === other37862.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37861__$1.w,other37862.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37861__$1.h,other37862.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37861__$1.__extmap,other37862.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37860){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37908 = k37860;
var G__37908__$1 = (((G__37908 instanceof cljs.core.Keyword))?G__37908.fqn:null);
switch (G__37908__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37860);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37859){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37920 = cljs.core.keyword_identical_QMARK_;
var expr__37921 = k__5352__auto__;
if(cljs.core.truth_((pred__37920.cljs$core$IFn$_invoke$arity$2 ? pred__37920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37921) : pred__37920.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37921)))){
return (new shadow.dom.Size(G__37859,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37920.cljs$core$IFn$_invoke$arity$2 ? pred__37920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37921) : pred__37920.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37921)))){
return (new shadow.dom.Size(self__.w,G__37859,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37859),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37859){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37859,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37865){
var extmap__5385__auto__ = (function (){var G__37941 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37865,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37865)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37941);
} else {
return G__37941;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37865),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37865),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__38487 = (i + (1));
var G__38488 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38487;
ret = G__38488;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37966){
var vec__37967 = p__37966;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37967,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37967,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37971 = arguments.length;
switch (G__37971) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38500 = ps;
var G__38501 = (i + (1));
el__$1 = G__38500;
i = G__38501;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37980 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37980,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37980,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37980,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37983_38510 = cljs.core.seq(props);
var chunk__37984_38511 = null;
var count__37985_38512 = (0);
var i__37986_38513 = (0);
while(true){
if((i__37986_38513 < count__37985_38512)){
var vec__38001_38519 = chunk__37984_38511.cljs$core$IIndexed$_nth$arity$2(null,i__37986_38513);
var k_38520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38001_38519,(0),null);
var v_38521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38001_38519,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_38520);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38520),v_38521);


var G__38531 = seq__37983_38510;
var G__38532 = chunk__37984_38511;
var G__38533 = count__37985_38512;
var G__38534 = (i__37986_38513 + (1));
seq__37983_38510 = G__38531;
chunk__37984_38511 = G__38532;
count__37985_38512 = G__38533;
i__37986_38513 = G__38534;
continue;
} else {
var temp__5804__auto___38535 = cljs.core.seq(seq__37983_38510);
if(temp__5804__auto___38535){
var seq__37983_38540__$1 = temp__5804__auto___38535;
if(cljs.core.chunked_seq_QMARK_(seq__37983_38540__$1)){
var c__5568__auto___38541 = cljs.core.chunk_first(seq__37983_38540__$1);
var G__38542 = cljs.core.chunk_rest(seq__37983_38540__$1);
var G__38543 = c__5568__auto___38541;
var G__38544 = cljs.core.count(c__5568__auto___38541);
var G__38545 = (0);
seq__37983_38510 = G__38542;
chunk__37984_38511 = G__38543;
count__37985_38512 = G__38544;
i__37986_38513 = G__38545;
continue;
} else {
var vec__38004_38549 = cljs.core.first(seq__37983_38540__$1);
var k_38551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38004_38549,(0),null);
var v_38552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38004_38549,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38551);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38551),v_38552);


var G__38553 = cljs.core.next(seq__37983_38540__$1);
var G__38554 = null;
var G__38555 = (0);
var G__38556 = (0);
seq__37983_38510 = G__38553;
chunk__37984_38511 = G__38554;
count__37985_38512 = G__38555;
i__37986_38513 = G__38556;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38010 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(1),null);
var seq__38013_38561 = cljs.core.seq(node_children);
var chunk__38015_38562 = null;
var count__38016_38563 = (0);
var i__38017_38564 = (0);
while(true){
if((i__38017_38564 < count__38016_38563)){
var child_struct_38570 = chunk__38015_38562.cljs$core$IIndexed$_nth$arity$2(null,i__38017_38564);
if((!((child_struct_38570 == null)))){
if(typeof child_struct_38570 === 'string'){
var text_38571 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38571),child_struct_38570].join(''));
} else {
var children_38572 = shadow.dom.svg_node(child_struct_38570);
if(cljs.core.seq_QMARK_(children_38572)){
var seq__38035_38573 = cljs.core.seq(children_38572);
var chunk__38037_38574 = null;
var count__38038_38575 = (0);
var i__38039_38576 = (0);
while(true){
if((i__38039_38576 < count__38038_38575)){
var child_38577 = chunk__38037_38574.cljs$core$IIndexed$_nth$arity$2(null,i__38039_38576);
if(cljs.core.truth_(child_38577)){
node.appendChild(child_38577);


var G__38578 = seq__38035_38573;
var G__38579 = chunk__38037_38574;
var G__38580 = count__38038_38575;
var G__38581 = (i__38039_38576 + (1));
seq__38035_38573 = G__38578;
chunk__38037_38574 = G__38579;
count__38038_38575 = G__38580;
i__38039_38576 = G__38581;
continue;
} else {
var G__38582 = seq__38035_38573;
var G__38583 = chunk__38037_38574;
var G__38584 = count__38038_38575;
var G__38585 = (i__38039_38576 + (1));
seq__38035_38573 = G__38582;
chunk__38037_38574 = G__38583;
count__38038_38575 = G__38584;
i__38039_38576 = G__38585;
continue;
}
} else {
var temp__5804__auto___38586 = cljs.core.seq(seq__38035_38573);
if(temp__5804__auto___38586){
var seq__38035_38587__$1 = temp__5804__auto___38586;
if(cljs.core.chunked_seq_QMARK_(seq__38035_38587__$1)){
var c__5568__auto___38588 = cljs.core.chunk_first(seq__38035_38587__$1);
var G__38589 = cljs.core.chunk_rest(seq__38035_38587__$1);
var G__38590 = c__5568__auto___38588;
var G__38591 = cljs.core.count(c__5568__auto___38588);
var G__38592 = (0);
seq__38035_38573 = G__38589;
chunk__38037_38574 = G__38590;
count__38038_38575 = G__38591;
i__38039_38576 = G__38592;
continue;
} else {
var child_38593 = cljs.core.first(seq__38035_38587__$1);
if(cljs.core.truth_(child_38593)){
node.appendChild(child_38593);


var G__38595 = cljs.core.next(seq__38035_38587__$1);
var G__38596 = null;
var G__38597 = (0);
var G__38598 = (0);
seq__38035_38573 = G__38595;
chunk__38037_38574 = G__38596;
count__38038_38575 = G__38597;
i__38039_38576 = G__38598;
continue;
} else {
var G__38599 = cljs.core.next(seq__38035_38587__$1);
var G__38600 = null;
var G__38601 = (0);
var G__38602 = (0);
seq__38035_38573 = G__38599;
chunk__38037_38574 = G__38600;
count__38038_38575 = G__38601;
i__38039_38576 = G__38602;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38572);
}
}


var G__38605 = seq__38013_38561;
var G__38606 = chunk__38015_38562;
var G__38607 = count__38016_38563;
var G__38608 = (i__38017_38564 + (1));
seq__38013_38561 = G__38605;
chunk__38015_38562 = G__38606;
count__38016_38563 = G__38607;
i__38017_38564 = G__38608;
continue;
} else {
var G__38609 = seq__38013_38561;
var G__38610 = chunk__38015_38562;
var G__38611 = count__38016_38563;
var G__38612 = (i__38017_38564 + (1));
seq__38013_38561 = G__38609;
chunk__38015_38562 = G__38610;
count__38016_38563 = G__38611;
i__38017_38564 = G__38612;
continue;
}
} else {
var temp__5804__auto___38613 = cljs.core.seq(seq__38013_38561);
if(temp__5804__auto___38613){
var seq__38013_38614__$1 = temp__5804__auto___38613;
if(cljs.core.chunked_seq_QMARK_(seq__38013_38614__$1)){
var c__5568__auto___38615 = cljs.core.chunk_first(seq__38013_38614__$1);
var G__38616 = cljs.core.chunk_rest(seq__38013_38614__$1);
var G__38617 = c__5568__auto___38615;
var G__38618 = cljs.core.count(c__5568__auto___38615);
var G__38619 = (0);
seq__38013_38561 = G__38616;
chunk__38015_38562 = G__38617;
count__38016_38563 = G__38618;
i__38017_38564 = G__38619;
continue;
} else {
var child_struct_38620 = cljs.core.first(seq__38013_38614__$1);
if((!((child_struct_38620 == null)))){
if(typeof child_struct_38620 === 'string'){
var text_38621 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38621),child_struct_38620].join(''));
} else {
var children_38622 = shadow.dom.svg_node(child_struct_38620);
if(cljs.core.seq_QMARK_(children_38622)){
var seq__38044_38623 = cljs.core.seq(children_38622);
var chunk__38046_38624 = null;
var count__38047_38625 = (0);
var i__38048_38626 = (0);
while(true){
if((i__38048_38626 < count__38047_38625)){
var child_38627 = chunk__38046_38624.cljs$core$IIndexed$_nth$arity$2(null,i__38048_38626);
if(cljs.core.truth_(child_38627)){
node.appendChild(child_38627);


var G__38628 = seq__38044_38623;
var G__38629 = chunk__38046_38624;
var G__38630 = count__38047_38625;
var G__38631 = (i__38048_38626 + (1));
seq__38044_38623 = G__38628;
chunk__38046_38624 = G__38629;
count__38047_38625 = G__38630;
i__38048_38626 = G__38631;
continue;
} else {
var G__38632 = seq__38044_38623;
var G__38633 = chunk__38046_38624;
var G__38634 = count__38047_38625;
var G__38635 = (i__38048_38626 + (1));
seq__38044_38623 = G__38632;
chunk__38046_38624 = G__38633;
count__38047_38625 = G__38634;
i__38048_38626 = G__38635;
continue;
}
} else {
var temp__5804__auto___38636__$1 = cljs.core.seq(seq__38044_38623);
if(temp__5804__auto___38636__$1){
var seq__38044_38639__$1 = temp__5804__auto___38636__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38044_38639__$1)){
var c__5568__auto___38642 = cljs.core.chunk_first(seq__38044_38639__$1);
var G__38643 = cljs.core.chunk_rest(seq__38044_38639__$1);
var G__38644 = c__5568__auto___38642;
var G__38645 = cljs.core.count(c__5568__auto___38642);
var G__38646 = (0);
seq__38044_38623 = G__38643;
chunk__38046_38624 = G__38644;
count__38047_38625 = G__38645;
i__38048_38626 = G__38646;
continue;
} else {
var child_38647 = cljs.core.first(seq__38044_38639__$1);
if(cljs.core.truth_(child_38647)){
node.appendChild(child_38647);


var G__38648 = cljs.core.next(seq__38044_38639__$1);
var G__38649 = null;
var G__38650 = (0);
var G__38651 = (0);
seq__38044_38623 = G__38648;
chunk__38046_38624 = G__38649;
count__38047_38625 = G__38650;
i__38048_38626 = G__38651;
continue;
} else {
var G__38653 = cljs.core.next(seq__38044_38639__$1);
var G__38654 = null;
var G__38655 = (0);
var G__38656 = (0);
seq__38044_38623 = G__38653;
chunk__38046_38624 = G__38654;
count__38047_38625 = G__38655;
i__38048_38626 = G__38656;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38622);
}
}


var G__38657 = cljs.core.next(seq__38013_38614__$1);
var G__38658 = null;
var G__38659 = (0);
var G__38660 = (0);
seq__38013_38561 = G__38657;
chunk__38015_38562 = G__38658;
count__38016_38563 = G__38659;
i__38017_38564 = G__38660;
continue;
} else {
var G__38661 = cljs.core.next(seq__38013_38614__$1);
var G__38662 = null;
var G__38663 = (0);
var G__38664 = (0);
seq__38013_38561 = G__38661;
chunk__38015_38562 = G__38662;
count__38016_38563 = G__38663;
i__38017_38564 = G__38664;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38666 = arguments.length;
var i__5770__auto___38667 = (0);
while(true){
if((i__5770__auto___38667 < len__5769__auto___38666)){
args__5775__auto__.push((arguments[i__5770__auto___38667]));

var G__38668 = (i__5770__auto___38667 + (1));
i__5770__auto___38667 = G__38668;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38051){
var G__38052 = cljs.core.first(seq38051);
var seq38051__$1 = cljs.core.next(seq38051);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38052,seq38051__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38057 = arguments.length;
switch (G__38057) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__34881__auto___38678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_38062){
var state_val_38063 = (state_38062[(1)]);
if((state_val_38063 === (1))){
var state_38062__$1 = state_38062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38062__$1,(2),once_or_cleanup);
} else {
if((state_val_38063 === (2))){
var inst_38059 = (state_38062[(2)]);
var inst_38060 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38062__$1 = (function (){var statearr_38064 = state_38062;
(statearr_38064[(7)] = inst_38059);

return statearr_38064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38062__$1,inst_38060);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34648__auto__ = null;
var shadow$dom$state_machine__34648__auto____0 = (function (){
var statearr_38066 = [null,null,null,null,null,null,null,null];
(statearr_38066[(0)] = shadow$dom$state_machine__34648__auto__);

(statearr_38066[(1)] = (1));

return statearr_38066;
});
var shadow$dom$state_machine__34648__auto____1 = (function (state_38062){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_38062);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e38068){var ex__34651__auto__ = e38068;
var statearr_38069_38679 = state_38062;
(statearr_38069_38679[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_38062[(4)]))){
var statearr_38070_38680 = state_38062;
(statearr_38070_38680[(1)] = cljs.core.first((state_38062[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38681 = state_38062;
state_38062 = G__38681;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
shadow$dom$state_machine__34648__auto__ = function(state_38062){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34648__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34648__auto____1.call(this,state_38062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34648__auto____0;
shadow$dom$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34648__auto____1;
return shadow$dom$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_38072 = f__34882__auto__();
(statearr_38072[(6)] = c__34881__auto___38678);

return statearr_38072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);

Object.defineProperty(module.exports, "contains_QMARK_", { enumerable: false, get: function() { return shadow.dom.contains_QMARK_; } });
Object.defineProperty(module.exports, "eval_scripts", { enumerable: false, get: function() { return shadow.dom.eval_scripts; } });
Object.defineProperty(module.exports, "redirect", { enumerable: false, get: function() { return shadow.dom.redirect; } });
Object.defineProperty(module.exports, "native_coll", { enumerable: false, get: function() { return shadow.dom.native_coll; } });
Object.defineProperty(module.exports, "NativeColl", { enumerable: false, get: function() { return shadow.dom.NativeColl; } });
Object.defineProperty(module.exports, "query", { enumerable: false, get: function() { return shadow.dom.query; } });
Object.defineProperty(module.exports, "make_svg_node", { enumerable: false, get: function() { return shadow.dom.make_svg_node; } });
Object.defineProperty(module.exports, "str__GT_fragment", { enumerable: false, get: function() { return shadow.dom.str__GT_fragment; } });
Object.defineProperty(module.exports, "_to_svg", { enumerable: false, get: function() { return shadow.dom._to_svg; } });
Object.defineProperty(module.exports, "child_nodes", { enumerable: false, get: function() { return shadow.dom.child_nodes; } });
Object.defineProperty(module.exports, "insert_before", { enumerable: false, get: function() { return shadow.dom.insert_before; } });
Object.defineProperty(module.exports, "merge_class_string", { enumerable: false, get: function() { return shadow.dom.merge_class_string; } });
Object.defineProperty(module.exports, "has_class_QMARK_", { enumerable: false, get: function() { return shadow.dom.has_class_QMARK_; } });
Object.defineProperty(module.exports, "map__GT_Size", { enumerable: false, get: function() { return shadow.dom.map__GT_Size; } });
Object.defineProperty(module.exports, "text", { enumerable: false, get: function() { return shadow.dom.text; } });
Object.defineProperty(module.exports, "data", { enumerable: false, get: function() { return shadow.dom.data; } });
Object.defineProperty(module.exports, "transition_supported_QMARK_", { enumerable: false, get: function() { return shadow.dom.transition_supported_QMARK_; } });
Object.defineProperty(module.exports, "attr", { enumerable: false, get: function() { return shadow.dom.attr; } });
Object.defineProperty(module.exports, "remove_styles", { enumerable: false, get: function() { return shadow.dom.remove_styles; } });
Object.defineProperty(module.exports, "remove_event_handler", { enumerable: false, get: function() { return shadow.dom.remove_event_handler; } });
Object.defineProperty(module.exports, "remove_class", { enumerable: false, get: function() { return shadow.dom.remove_class; } });
Object.defineProperty(module.exports, "select_option_values", { enumerable: false, get: function() { return shadow.dom.select_option_values; } });
Object.defineProperty(module.exports, "insert_after", { enumerable: false, get: function() { return shadow.dom.insert_after; } });
Object.defineProperty(module.exports, "svg_node", { enumerable: false, get: function() { return shadow.dom.svg_node; } });
Object.defineProperty(module.exports, "children", { enumerable: false, get: function() { return shadow.dom.children; } });
Object.defineProperty(module.exports, "first_child", { enumerable: false, get: function() { return shadow.dom.first_child; } });
Object.defineProperty(module.exports, "get_html", { enumerable: false, get: function() { return shadow.dom.get_html; } });
Object.defineProperty(module.exports, "remove", { enumerable: false, get: function() { return shadow.dom.remove; } });
Object.defineProperty(module.exports, "__GT_Coordinate", { enumerable: false, get: function() { return shadow.dom.__GT_Coordinate; } });
Object.defineProperty(module.exports, "dom_listen_remove", { enumerable: false, get: function() { return shadow.dom.dom_listen_remove; } });
Object.defineProperty(module.exports, "by_id", { enumerable: false, get: function() { return shadow.dom.by_id; } });
Object.defineProperty(module.exports, "checked_QMARK_", { enumerable: false, get: function() { return shadow.dom.checked_QMARK_; } });
Object.defineProperty(module.exports, "tag_name", { enumerable: false, get: function() { return shadow.dom.tag_name; } });
Object.defineProperty(module.exports, "get_size", { enumerable: false, get: function() { return shadow.dom.get_size; } });
Object.defineProperty(module.exports, "dom_listen", { enumerable: false, get: function() { return shadow.dom.dom_listen; } });
Object.defineProperty(module.exports, "get_viewport_size", { enumerable: false, get: function() { return shadow.dom.get_viewport_size; } });
Object.defineProperty(module.exports, "add_event_listeners", { enumerable: false, get: function() { return shadow.dom.add_event_listeners; } });
Object.defineProperty(module.exports, "set_attr", { enumerable: false, get: function() { return shadow.dom.set_attr; } });
Object.defineProperty(module.exports, "reset", { enumerable: false, get: function() { return shadow.dom.reset; } });
Object.defineProperty(module.exports, "IElement", { enumerable: false, get: function() { return shadow.dom.IElement; } });
Object.defineProperty(module.exports, "make_dom_node", { enumerable: false, get: function() { return shadow.dom.make_dom_node; } });
Object.defineProperty(module.exports, "SVGElement", { enumerable: false, get: function() { return shadow.dom.SVGElement; } });
Object.defineProperty(module.exports, "form_elements", { enumerable: false, get: function() { return shadow.dom.form_elements; } });
Object.defineProperty(module.exports, "Size", { enumerable: false, get: function() { return shadow.dom.Size; } });
Object.defineProperty(module.exports, "lazy_native_coll_seq", { enumerable: false, get: function() { return shadow.dom.lazy_native_coll_seq; } });
Object.defineProperty(module.exports, "get_parent", { enumerable: false, get: function() { return shadow.dom.get_parent; } });
Object.defineProperty(module.exports, "get_height", { enumerable: false, get: function() { return shadow.dom.get_height; } });
Object.defineProperty(module.exports, "event_chan", { enumerable: false, get: function() { return shadow.dom.event_chan; } });
Object.defineProperty(module.exports, "fragment", { enumerable: false, get: function() { return shadow.dom.fragment; } });
Object.defineProperty(module.exports, "check", { enumerable: false, get: function() { return shadow.dom.check; } });
Object.defineProperty(module.exports, "Coordinate", { enumerable: false, get: function() { return shadow.dom.Coordinate; } });
Object.defineProperty(module.exports, "parse_tag", { enumerable: false, get: function() { return shadow.dom.parse_tag; } });
Object.defineProperty(module.exports, "del_attr", { enumerable: false, get: function() { return shadow.dom.del_attr; } });
Object.defineProperty(module.exports, "reload_BANG_", { enumerable: false, get: function() { return shadow.dom.reload_BANG_; } });
Object.defineProperty(module.exports, "destructure_node", { enumerable: false, get: function() { return shadow.dom.destructure_node; } });
Object.defineProperty(module.exports, "remove_style", { enumerable: false, get: function() { return shadow.dom.remove_style; } });
Object.defineProperty(module.exports, "append", { enumerable: false, get: function() { return shadow.dom.append; } });
Object.defineProperty(module.exports, "px", { enumerable: false, get: function() { return shadow.dom.px; } });
Object.defineProperty(module.exports, "get_value", { enumerable: false, get: function() { return shadow.dom.get_value; } });
Object.defineProperty(module.exports, "ev_stop", { enumerable: false, get: function() { return shadow.dom.ev_stop; } });
Object.defineProperty(module.exports, "_to_dom", { enumerable: false, get: function() { return shadow.dom._to_dom; } });
Object.defineProperty(module.exports, "xmlns", { enumerable: false, get: function() { return shadow.dom.xmlns; } });
Object.defineProperty(module.exports, "matches", { enumerable: false, get: function() { return shadow.dom.matches; } });
Object.defineProperty(module.exports, "insert_first", { enumerable: false, get: function() { return shadow.dom.insert_first; } });
Object.defineProperty(module.exports, "map__GT_Coordinate", { enumerable: false, get: function() { return shadow.dom.map__GT_Coordinate; } });
Object.defineProperty(module.exports, "create_dom_node", { enumerable: false, get: function() { return shadow.dom.create_dom_node; } });
Object.defineProperty(module.exports, "__GT_NativeColl", { enumerable: false, get: function() { return shadow.dom.__GT_NativeColl; } });
Object.defineProperty(module.exports, "get_position", { enumerable: false, get: function() { return shadow.dom.get_position; } });
Object.defineProperty(module.exports, "dom_node", { enumerable: false, get: function() { return shadow.dom.dom_node; } });
Object.defineProperty(module.exports, "set_data", { enumerable: false, get: function() { return shadow.dom.set_data; } });
Object.defineProperty(module.exports, "get_client_position", { enumerable: false, get: function() { return shadow.dom.get_client_position; } });
Object.defineProperty(module.exports, "get_page_offset", { enumerable: false, get: function() { return shadow.dom.get_page_offset; } });
Object.defineProperty(module.exports, "query_one", { enumerable: false, get: function() { return shadow.dom.query_one; } });
Object.defineProperty(module.exports, "get_next_sibling", { enumerable: false, get: function() { return shadow.dom.get_next_sibling; } });
Object.defineProperty(module.exports, "set_style", { enumerable: false, get: function() { return shadow.dom.set_style; } });
Object.defineProperty(module.exports, "pct", { enumerable: false, get: function() { return shadow.dom.pct; } });
Object.defineProperty(module.exports, "get_previous_sibling", { enumerable: false, get: function() { return shadow.dom.get_previous_sibling; } });
Object.defineProperty(module.exports, "ancestor_by_tag", { enumerable: false, get: function() { return shadow.dom.ancestor_by_tag; } });
Object.defineProperty(module.exports, "build", { enumerable: false, get: function() { return shadow.dom.build; } });
Object.defineProperty(module.exports, "set_html", { enumerable: false, get: function() { return shadow.dom.set_html; } });
Object.defineProperty(module.exports, "build_url", { enumerable: false, get: function() { return shadow.dom.build_url; } });
Object.defineProperty(module.exports, "ancestor_by_class", { enumerable: false, get: function() { return shadow.dom.ancestor_by_class; } });
Object.defineProperty(module.exports, "__GT_Size", { enumerable: false, get: function() { return shadow.dom.__GT_Size; } });
Object.defineProperty(module.exports, "add_class", { enumerable: false, get: function() { return shadow.dom.add_class; } });
Object.defineProperty(module.exports, "node_name", { enumerable: false, get: function() { return shadow.dom.node_name; } });
Object.defineProperty(module.exports, "parents", { enumerable: false, get: function() { return shadow.dom.parents; } });
Object.defineProperty(module.exports, "on_query", { enumerable: false, get: function() { return shadow.dom.on_query; } });
Object.defineProperty(module.exports, "create_svg_node", { enumerable: false, get: function() { return shadow.dom.create_svg_node; } });
Object.defineProperty(module.exports, "set_attrs", { enumerable: false, get: function() { return shadow.dom.set_attrs; } });
Object.defineProperty(module.exports, "svg", { enumerable: false, get: function() { return shadow.dom.svg; } });
Object.defineProperty(module.exports, "index_of", { enumerable: false, get: function() { return shadow.dom.index_of; } });
Object.defineProperty(module.exports, "replace_node", { enumerable: false, get: function() { return shadow.dom.replace_node; } });
Object.defineProperty(module.exports, "size__GT_clj", { enumerable: false, get: function() { return shadow.dom.size__GT_clj; } });
Object.defineProperty(module.exports, "set_attr_STAR_", { enumerable: false, get: function() { return shadow.dom.set_attr_STAR_; } });
Object.defineProperty(module.exports, "on", { enumerable: false, get: function() { return shadow.dom.on; } });
Object.defineProperty(module.exports, "remove_style_STAR_", { enumerable: false, get: function() { return shadow.dom.remove_style_STAR_; } });
Object.defineProperty(module.exports, "toggle_class", { enumerable: false, get: function() { return shadow.dom.toggle_class; } });
Object.defineProperty(module.exports, "set_value", { enumerable: false, get: function() { return shadow.dom.set_value; } });
//# sourceMappingURL=shadow.dom.js.map
