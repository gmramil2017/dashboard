var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.dom.js");
require("./cljs.core.async.js");
require("./clojure.string.js");
require("./clojure.data.js");
require("./cljs.core.async.impl.protocols.js");
require("./shadow.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.object.js");

goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_39170 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._id[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.object._id["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_39170(this$);
}
});

var shadow$object$IObject$_type$dyn_39171 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._type[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.object._type["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_39171(this$);
}
});

var shadow$object$IObject$_data$dyn_39174 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.object._data["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_39174(this$);
}
});

var shadow$object$IObject$_update$dyn_39175 = (function (this$,update_fn){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._update[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5394__auto__.call(null,this$,update_fn));
} else {
var m__5392__auto__ = (shadow.object._update["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5392__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_39175(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_39176 = (function (this$,cause){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5394__auto__.call(null,this$,cause));
} else {
var m__5392__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5392__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_39176(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__38155 = arguments.length;
switch (G__38155) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__5045__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5804__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5804__auto__)){
var oid = temp__5804__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5804__auto__)){
var parent_id = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__39184 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__39184;
continue;
}
} else {
return null;
}
break;
}
});
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38293_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__38293_SHARP_);
}),child_ids));
});
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__38326 = arguments.length;
switch (G__38326) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38376_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__38376_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__38399){
var map__38400 = p__38399;
var map__38400__$1 = cljs.core.__destructure_map(map__38400);
var oref = map__38400__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38400__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__38429 = arguments.length;
switch (G__38429) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38410_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__38410_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5802__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5802__auto__)){
var obj = temp__5802__auto__;
return obj;
} else {
var temp__5804__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__39192 = parent;
dom = G__39192;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39193 = arguments.length;
var i__5770__auto___39194 = (0);
while(true){
if((i__5770__auto___39194 < len__5769__auto___39193)){
args__5775__auto__.push((arguments[i__5770__auto___39194]));

var G__39195 = (i__5770__auto___39194 + (1));
i__5770__auto___39194 = G__39195;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5804__auto__)){
var reactions_to_trigger = temp__5804__auto__;
var seq__38469 = cljs.core.seq(reactions_to_trigger);
var chunk__38470 = null;
var count__38471 = (0);
var i__38472 = (0);
while(true){
if((i__38472 < count__38471)){
var rfn = chunk__38470.cljs$core$IIndexed$_nth$arity$2(null,i__38472);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__39196 = seq__38469;
var G__39197 = chunk__38470;
var G__39198 = count__38471;
var G__39199 = (i__38472 + (1));
seq__38469 = G__39196;
chunk__38470 = G__39197;
count__38471 = G__39198;
i__38472 = G__39199;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__38469);
if(temp__5804__auto____$1){
var seq__38469__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38469__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38469__$1);
var G__39200 = cljs.core.chunk_rest(seq__38469__$1);
var G__39201 = c__5568__auto__;
var G__39202 = cljs.core.count(c__5568__auto__);
var G__39203 = (0);
seq__38469 = G__39200;
chunk__38470 = G__39201;
count__38471 = G__39202;
i__38472 = G__39203;
continue;
} else {
var rfn = cljs.core.first(seq__38469__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__39204 = cljs.core.next(seq__38469__$1);
var G__39205 = null;
var G__39206 = (0);
var G__39207 = (0);
seq__38469 = G__39204;
chunk__38470 = G__39205;
count__38471 = G__39206;
i__38472 = G__39207;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq38458){
var G__38459 = cljs.core.first(seq38458);
var seq38458__$1 = cljs.core.next(seq38458);
var G__38460 = cljs.core.first(seq38458__$1);
var seq38458__$2 = cljs.core.next(seq38458__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38459,G__38460,seq38458__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__38483_39208 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__38484_39209 = null;
var count__38485_39210 = (0);
var i__38486_39211 = (0);
while(true){
if((i__38486_39211 < count__38485_39210)){
var child_39212 = chunk__38484_39209.cljs$core$IIndexed$_nth$arity$2(null,i__38486_39211);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_39212,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_39212,ev,notify_fn));


var G__39213 = seq__38483_39208;
var G__39214 = chunk__38484_39209;
var G__39215 = count__38485_39210;
var G__39216 = (i__38486_39211 + (1));
seq__38483_39208 = G__39213;
chunk__38484_39209 = G__39214;
count__38485_39210 = G__39215;
i__38486_39211 = G__39216;
continue;
} else {
var temp__5804__auto___39217 = cljs.core.seq(seq__38483_39208);
if(temp__5804__auto___39217){
var seq__38483_39218__$1 = temp__5804__auto___39217;
if(cljs.core.chunked_seq_QMARK_(seq__38483_39218__$1)){
var c__5568__auto___39219 = cljs.core.chunk_first(seq__38483_39218__$1);
var G__39220 = cljs.core.chunk_rest(seq__38483_39218__$1);
var G__39221 = c__5568__auto___39219;
var G__39222 = cljs.core.count(c__5568__auto___39219);
var G__39223 = (0);
seq__38483_39208 = G__39220;
chunk__38484_39209 = G__39221;
count__38485_39210 = G__39222;
i__38486_39211 = G__39223;
continue;
} else {
var child_39224 = cljs.core.first(seq__38483_39218__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_39224,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_39224,ev,notify_fn));


var G__39225 = cljs.core.next(seq__38483_39218__$1);
var G__39226 = null;
var G__39227 = (0);
var G__39228 = (0);
seq__38483_39208 = G__39225;
chunk__38484_39209 = G__39226;
count__38485_39210 = G__39227;
i__38486_39211 = G__39228;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39229 = arguments.length;
var i__5770__auto___39230 = (0);
while(true){
if((i__5770__auto___39230 < len__5769__auto___39229)){
args__5775__auto__.push((arguments[i__5770__auto___39230]));

var G__39231 = (i__5770__auto___39230 + (1));
i__5770__auto___39230 = G__39231;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq38502){
var G__38503 = cljs.core.first(seq38502);
var seq38502__$1 = cljs.core.next(seq38502);
var G__38504 = cljs.core.first(seq38502__$1);
var seq38502__$2 = cljs.core.next(seq38502__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38503,G__38504,seq38502__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39232 = arguments.length;
var i__5770__auto___39233 = (0);
while(true){
if((i__5770__auto___39233 < len__5769__auto___39232)){
args__5775__auto__.push((arguments[i__5770__auto___39233]));

var G__39234 = (i__5770__auto___39233 + (1));
i__5770__auto___39233 = G__39234;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__39235 = shadow.object.get_parent(current);
current = G__39235;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq38594){
var G__38603 = cljs.core.first(seq38594);
var seq38594__$1 = cljs.core.next(seq38594);
var G__38604 = cljs.core.first(seq38594__$1);
var seq38594__$2 = cljs.core.next(seq38594__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38603,G__38604,seq38594__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39236 = arguments.length;
var i__5770__auto___39237 = (0);
while(true){
if((i__5770__auto___39237 < len__5769__auto___39236)){
args__5775__auto__.push((arguments[i__5770__auto___39237]));

var G__39238 = (i__5770__auto___39237 + (1));
i__5770__auto___39237 = G__39238;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq38673){
var G__38674 = cljs.core.first(seq38673);
var seq38673__$1 = cljs.core.next(seq38673);
var G__38675 = cljs.core.first(seq38673__$1);
var seq38673__$2 = cljs.core.next(seq38673__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38674,G__38675,seq38673__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5802__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5802__auto__)){
var custom_remove = temp__5802__auto__;
var G__38709 = this$;
var G__38710 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__38709,G__38710) : custom_remove.call(null,G__38709,G__38710));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__38729 = arguments.length;
switch (G__38729) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__38768 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__38769 = null;
var count__38770 = (0);
var i__38771 = (0);
while(true){
if((i__38771 < count__38770)){
var vec__38794 = chunk__38769.cljs$core$IIndexed$_nth$arity$2(null,i__38771);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38794,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38794,(1),null);
var ev_def = vec__38794;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_39243__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__38768,chunk__38769,count__38770,i__38771,vec__38794,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__38768,chunk__38769,count__38770,i__38771,vec__38794,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__38768,chunk__38769,count__38770,i__38771,handler_39243__$1,vec__38794,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_39243__$1.cljs$core$IFn$_invoke$arity$3 ? handler_39243__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_39243__$1.call(null,oref,e,el));
});})(seq__38768,chunk__38769,count__38770,i__38771,handler_39243__$1,vec__38794,ev,handler,ev_def))
);


var G__39249 = seq__38768;
var G__39250 = chunk__38769;
var G__39251 = count__38770;
var G__39252 = (i__38771 + (1));
seq__38768 = G__39249;
chunk__38769 = G__39250;
count__38770 = G__39251;
i__38771 = G__39252;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38768);
if(temp__5804__auto__){
var seq__38768__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38768__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38768__$1);
var G__39253 = cljs.core.chunk_rest(seq__38768__$1);
var G__39254 = c__5568__auto__;
var G__39255 = cljs.core.count(c__5568__auto__);
var G__39256 = (0);
seq__38768 = G__39253;
chunk__38769 = G__39254;
count__38770 = G__39255;
i__38771 = G__39256;
continue;
} else {
var vec__38814 = cljs.core.first(seq__38768__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38814,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38814,(1),null);
var ev_def = vec__38814;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_39257__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__38768,chunk__38769,count__38770,i__38771,vec__38814,ev,handler,ev_def,seq__38768__$1,temp__5804__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__38768,chunk__38769,count__38770,i__38771,vec__38814,ev,handler,ev_def,seq__38768__$1,temp__5804__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__38768,chunk__38769,count__38770,i__38771,handler_39257__$1,vec__38814,ev,handler,ev_def,seq__38768__$1,temp__5804__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_39257__$1.cljs$core$IFn$_invoke$arity$3 ? handler_39257__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_39257__$1.call(null,oref,e,el));
});})(seq__38768,chunk__38769,count__38770,i__38771,handler_39257__$1,vec__38814,ev,handler,ev_def,seq__38768__$1,temp__5804__auto__))
);


var G__39258 = cljs.core.next(seq__38768__$1);
var G__39259 = null;
var G__39260 = (0);
var G__39261 = (0);
seq__38768 = G__39258;
chunk__38769 = G__39259;
count__38770 = G__39260;
i__38771 = G__39261;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__38828){
var vec__38829 = p__38828;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38829,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38829,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = event;
if(cljs.core.truth_(and__5043__auto__)){
return handler;
} else {
return and__5043__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39267 = arguments.length;
var i__5770__auto___39268 = (0);
while(true){
if((i__5770__auto___39268 < len__5769__auto___39267)){
args__5775__auto__.push((arguments[i__5770__auto___39268]));

var G__39269 = (i__5770__auto___39268 + (1));
i__5770__auto___39268 = G__39269;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e38871){if((e38871 instanceof Object)){
var e = e38871;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e38871;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq38854){
var G__38855 = cljs.core.first(seq38854);
var seq38854__$1 = cljs.core.next(seq38854);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38855,seq38854__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__38889 = arguments.length;
switch (G__38889) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__38896 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__38896) : shadow.dom.build.call(null,G__38896));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k38902,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__38915 = k38902;
var G__38915__$1 = (((G__38915 instanceof cljs.core.Keyword))?G__38915.fqn:null);
switch (G__38915__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38902,else__5346__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__38926){
var vec__38927 = p__38926;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38927,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38927,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.object.Watch{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38901){
var self__ = this;
var G__38901__$1 = this;
return (new cljs.core.RecordIter((0),G__38901__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38903,other38904){
var self__ = this;
var this38903__$1 = this;
return (((!((other38904 == null)))) && ((((this38903__$1.constructor === other38904.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38903__$1.key,other38904.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38903__$1.handler,other38904.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38903__$1.__extmap,other38904.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k38902){
var self__ = this;
var this__5350__auto____$1 = this;
var G__38943 = k38902;
var G__38943__$1 = (((G__38943 instanceof cljs.core.Keyword))?G__38943.fqn:null);
switch (G__38943__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38902);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__38901){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__38945 = cljs.core.keyword_identical_QMARK_;
var expr__38947 = k__5352__auto__;
if(cljs.core.truth_((pred__38945.cljs$core$IFn$_invoke$arity$2 ? pred__38945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__38947) : pred__38945.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__38947)))){
return (new shadow.object.Watch(G__38901,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38945.cljs$core$IFn$_invoke$arity$2 ? pred__38945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__38947) : pred__38945.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__38947)))){
return (new shadow.object.Watch(self__.key,G__38901,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__38901),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__38901){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__38901,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__38905){
var extmap__5385__auto__ = (function (){var G__38955 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38905,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__38905)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38955);
} else {
return G__38955;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__38905),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__38905),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38970_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__38970_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__39007 = cljs.core.seq(self__.watches);
var chunk__39008 = null;
var count__39009 = (0);
var i__39010 = (0);
while(true){
if((i__39010 < count__39009)){
var map__39014 = chunk__39008.cljs$core$IIndexed$_nth$arity$2(null,i__39010);
var map__39014__$1 = cljs.core.__destructure_map(map__39014);
var watch = map__39014__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39014__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39014__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__39301 = seq__39007;
var G__39302 = chunk__39008;
var G__39303 = count__39009;
var G__39304 = (i__39010 + (1));
seq__39007 = G__39301;
chunk__39008 = G__39302;
count__39009 = G__39303;
i__39010 = G__39304;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39007);
if(temp__5804__auto__){
var seq__39007__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39007__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39007__$1);
var G__39305 = cljs.core.chunk_rest(seq__39007__$1);
var G__39306 = c__5568__auto__;
var G__39307 = cljs.core.count(c__5568__auto__);
var G__39308 = (0);
seq__39007 = G__39305;
chunk__39008 = G__39306;
count__39009 = G__39307;
i__39010 = G__39308;
continue;
} else {
var map__39015 = cljs.core.first(seq__39007__$1);
var map__39015__$1 = cljs.core.__destructure_map(map__39015);
var watch = map__39015__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39015__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39015__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__39309 = cljs.core.next(seq__39007__$1);
var G__39310 = null;
var G__39311 = (0);
var G__39312 = (0);
seq__39007 = G__39309;
chunk__39008 = G__39310;
count__39009 = G__39311;
i__39010 = G__39312;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__39016_39313 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__39017_39314 = null;
var count__39018_39315 = (0);
var i__39019_39316 = (0);
while(true){
if((i__39019_39316 < count__39018_39315)){
var child_39317 = chunk__39017_39314.cljs$core$IIndexed$_nth$arity$2(null,i__39019_39316);
shadow.object._destroy_BANG_(child_39317,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__39318 = seq__39016_39313;
var G__39319 = chunk__39017_39314;
var G__39320 = count__39018_39315;
var G__39321 = (i__39019_39316 + (1));
seq__39016_39313 = G__39318;
chunk__39017_39314 = G__39319;
count__39018_39315 = G__39320;
i__39019_39316 = G__39321;
continue;
} else {
var temp__5804__auto___39322 = cljs.core.seq(seq__39016_39313);
if(temp__5804__auto___39322){
var seq__39016_39323__$1 = temp__5804__auto___39322;
if(cljs.core.chunked_seq_QMARK_(seq__39016_39323__$1)){
var c__5568__auto___39324 = cljs.core.chunk_first(seq__39016_39323__$1);
var G__39325 = cljs.core.chunk_rest(seq__39016_39323__$1);
var G__39326 = c__5568__auto___39324;
var G__39327 = cljs.core.count(c__5568__auto___39324);
var G__39328 = (0);
seq__39016_39313 = G__39325;
chunk__39017_39314 = G__39326;
count__39018_39315 = G__39327;
i__39019_39316 = G__39328;
continue;
} else {
var child_39329 = cljs.core.first(seq__39016_39323__$1);
shadow.object._destroy_BANG_(child_39329,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__39331 = cljs.core.next(seq__39016_39323__$1);
var G__39332 = null;
var G__39333 = (0);
var G__39334 = (0);
seq__39016_39313 = G__39331;
chunk__39017_39314 = G__39332;
count__39018_39315 = G__39333;
i__39019_39316 = G__39334;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_39335 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_39335 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_39335);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__39023 = arguments.length;
switch (G__39023) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__39026 = arguments.length;
switch (G__39026) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39343 = arguments.length;
var i__5770__auto___39344 = (0);
while(true){
if((i__5770__auto___39344 < len__5769__auto___39343)){
args__5775__auto__.push((arguments[i__5770__auto___39344]));

var G__39345 = (i__5770__auto___39344 + (1));
i__5770__auto___39344 = G__39345;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_39350 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5802__auto___39351 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5802__auto___39351)){
var dom_39352 = temp__5802__auto___39351;
shadow.dom.set_data(dom_39352,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_39352,dom_events_39350);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_39352], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_39352], 0));
} else {
var temp__5804__auto___39353 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5804__auto___39353)){
var dom_fn_39354 = temp__5804__auto___39353;
var dom_39355 = (function (){var G__39032 = (dom_fn_39354.cljs$core$IFn$_invoke$arity$2 ? dom_fn_39354.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_39354.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__39032) : shadow.dom.build.call(null,G__39032));
})();
shadow.dom.set_data(dom_39355,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_39355], 0));

shadow.object.bind_dom_events(oref,dom_39355,dom_events_39350);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_39355], 0));
} else {
}
}

var temp__5804__auto___39358 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5804__auto___39358)){
var watches_39359 = temp__5804__auto___39358;
var seq__39033_39360 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_39359));
var chunk__39034_39361 = null;
var count__39035_39362 = (0);
var i__39036_39363 = (0);
while(true){
if((i__39036_39363 < count__39035_39362)){
var vec__39043_39364 = chunk__39034_39361.cljs$core$IIndexed$_nth$arity$2(null,i__39036_39363);
var attr_39365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39043_39364,(0),null);
var handler_39366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39043_39364,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_39365,((function (seq__39033_39360,chunk__39034_39361,count__39035_39362,i__39036_39363,vec__39043_39364,attr_39365,handler_39366,watches_39359,temp__5804__auto___39358,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_39366.cljs$core$IFn$_invoke$arity$3 ? handler_39366.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_39366.call(null,oref,old,new$));
});})(seq__39033_39360,chunk__39034_39361,count__39035_39362,i__39036_39363,vec__39043_39364,attr_39365,handler_39366,watches_39359,temp__5804__auto___39358,oid,parent,result_chan,odef,obj,oref))
);


var G__39367 = seq__39033_39360;
var G__39368 = chunk__39034_39361;
var G__39369 = count__39035_39362;
var G__39370 = (i__39036_39363 + (1));
seq__39033_39360 = G__39367;
chunk__39034_39361 = G__39368;
count__39035_39362 = G__39369;
i__39036_39363 = G__39370;
continue;
} else {
var temp__5804__auto___39371__$1 = cljs.core.seq(seq__39033_39360);
if(temp__5804__auto___39371__$1){
var seq__39033_39372__$1 = temp__5804__auto___39371__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39033_39372__$1)){
var c__5568__auto___39373 = cljs.core.chunk_first(seq__39033_39372__$1);
var G__39374 = cljs.core.chunk_rest(seq__39033_39372__$1);
var G__39375 = c__5568__auto___39373;
var G__39376 = cljs.core.count(c__5568__auto___39373);
var G__39377 = (0);
seq__39033_39360 = G__39374;
chunk__39034_39361 = G__39375;
count__39035_39362 = G__39376;
i__39036_39363 = G__39377;
continue;
} else {
var vec__39046_39378 = cljs.core.first(seq__39033_39372__$1);
var attr_39379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39046_39378,(0),null);
var handler_39380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39046_39378,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_39379,((function (seq__39033_39360,chunk__39034_39361,count__39035_39362,i__39036_39363,vec__39046_39378,attr_39379,handler_39380,seq__39033_39372__$1,temp__5804__auto___39371__$1,watches_39359,temp__5804__auto___39358,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_39380.cljs$core$IFn$_invoke$arity$3 ? handler_39380.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_39380.call(null,oref,old,new$));
});})(seq__39033_39360,chunk__39034_39361,count__39035_39362,i__39036_39363,vec__39046_39378,attr_39379,handler_39380,seq__39033_39372__$1,temp__5804__auto___39371__$1,watches_39359,temp__5804__auto___39358,oid,parent,result_chan,odef,obj,oref))
);


var G__39381 = cljs.core.next(seq__39033_39372__$1);
var G__39382 = null;
var G__39383 = (0);
var G__39384 = (0);
seq__39033_39360 = G__39381;
chunk__39034_39361 = G__39382;
count__39035_39362 = G__39383;
i__39036_39363 = G__39384;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq39028){
var G__39029 = cljs.core.first(seq39028);
var seq39028__$1 = cljs.core.next(seq39028);
var G__39030 = cljs.core.first(seq39028__$1);
var seq39028__$2 = cljs.core.next(seq39028__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39029,G__39030,seq39028__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__39059 = arguments.length;
switch (G__39059) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__39053_SHARP_){
var G__39064 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__39053_SHARP_) : node_gen.call(null,p1__39053_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__39064) : shadow.dom.build.call(null,G__39064));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__39065_39392 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__39066_39393 = null;
var count__39067_39394 = (0);
var i__39068_39395 = (0);
while(true){
if((i__39068_39395 < count__39067_39394)){
var obj_39397 = chunk__39066_39393.cljs$core$IIndexed$_nth$arity$2(null,i__39068_39395);
var obj_39398__$1 = shadow.object.get_from_dom(obj_39397);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_39398__$1);


var G__39400 = seq__39065_39392;
var G__39401 = chunk__39066_39393;
var G__39402 = count__39067_39394;
var G__39403 = (i__39068_39395 + (1));
seq__39065_39392 = G__39400;
chunk__39066_39393 = G__39401;
count__39067_39394 = G__39402;
i__39068_39395 = G__39403;
continue;
} else {
var temp__5804__auto___39404 = cljs.core.seq(seq__39065_39392);
if(temp__5804__auto___39404){
var seq__39065_39405__$1 = temp__5804__auto___39404;
if(cljs.core.chunked_seq_QMARK_(seq__39065_39405__$1)){
var c__5568__auto___39406 = cljs.core.chunk_first(seq__39065_39405__$1);
var G__39407 = cljs.core.chunk_rest(seq__39065_39405__$1);
var G__39408 = c__5568__auto___39406;
var G__39409 = cljs.core.count(c__5568__auto___39406);
var G__39410 = (0);
seq__39065_39392 = G__39407;
chunk__39066_39393 = G__39408;
count__39067_39394 = G__39409;
i__39068_39395 = G__39410;
continue;
} else {
var obj_39415 = cljs.core.first(seq__39065_39405__$1);
var obj_39416__$1 = shadow.object.get_from_dom(obj_39415);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_39416__$1);


var G__39418 = cljs.core.next(seq__39065_39405__$1);
var G__39419 = null;
var G__39420 = (0);
var G__39421 = (0);
seq__39065_39392 = G__39418;
chunk__39066_39393 = G__39419;
count__39067_39394 = G__39420;
i__39068_39395 = G__39421;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__39073 = arguments.length;
switch (G__39073) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__39071_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__39071_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__39080){
var vec__39081 = p__39080;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39081,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39081,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__39084_39425 = cljs.core.seq((function (){var G__39089 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__39089) : coll_transform.call(null,G__39089));
})());
var chunk__39085_39426 = null;
var count__39086_39427 = (0);
var i__39087_39428 = (0);
while(true){
if((i__39087_39428 < count__39086_39427)){
var item_39429 = chunk__39085_39426.cljs$core$IIndexed$_nth$arity$2(null,i__39087_39428);
shadow.object.dom_enter(coll_dom,make_item_fn(item_39429));


var G__39430 = seq__39084_39425;
var G__39431 = chunk__39085_39426;
var G__39432 = count__39086_39427;
var G__39433 = (i__39087_39428 + (1));
seq__39084_39425 = G__39430;
chunk__39085_39426 = G__39431;
count__39086_39427 = G__39432;
i__39087_39428 = G__39433;
continue;
} else {
var temp__5804__auto___39434 = cljs.core.seq(seq__39084_39425);
if(temp__5804__auto___39434){
var seq__39084_39435__$1 = temp__5804__auto___39434;
if(cljs.core.chunked_seq_QMARK_(seq__39084_39435__$1)){
var c__5568__auto___39436 = cljs.core.chunk_first(seq__39084_39435__$1);
var G__39437 = cljs.core.chunk_rest(seq__39084_39435__$1);
var G__39438 = c__5568__auto___39436;
var G__39439 = cljs.core.count(c__5568__auto___39436);
var G__39440 = (0);
seq__39084_39425 = G__39437;
chunk__39085_39426 = G__39438;
count__39086_39427 = G__39439;
i__39087_39428 = G__39440;
continue;
} else {
var item_39441 = cljs.core.first(seq__39084_39435__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_39441));


var G__39442 = cljs.core.next(seq__39084_39435__$1);
var G__39443 = null;
var G__39444 = (0);
var G__39445 = (0);
seq__39084_39425 = G__39442;
chunk__39085_39426 = G__39443;
count__39086_39427 = G__39444;
i__39087_39428 = G__39445;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__5133__auto__ = count_new;
var y__5134__auto__ = count_children;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var n__5636__auto___39446 = count_children__$1;
var idx_39447 = (0);
while(true){
if((idx_39447 < n__5636__auto___39446)){
var cn_39448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_39447);
var cc_39449 = shadow.object.get_from_dom(cn_39448);
var ckey_39450 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_39449);
var cval_39451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_39449,item_key);
var vec__39090_39452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_39447);
var nkey_39453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39090_39452,(0),null);
var nval_39454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39090_39452,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_39450,nkey_39453)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_39451,nval_39454)))){
} else {
var new_obj_39457 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_39453,nval_39454], null));
shadow.dom.replace_node(cn_39448,new_obj_39457);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_39449);

shadow.object.notify_tree_BANG_(new_obj_39457,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__39458 = (idx_39447 + (1));
idx_39447 = G__39458;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__39098_39459 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__39099_39460 = null;
var count__39100_39461 = (0);
var i__39101_39462 = (0);
while(true){
if((i__39101_39462 < count__39100_39461)){
var item_39463 = chunk__39099_39460.cljs$core$IIndexed$_nth$arity$2(null,i__39101_39462);
shadow.object.dom_enter(coll_dom,make_item_fn(item_39463));


var G__39464 = seq__39098_39459;
var G__39465 = chunk__39099_39460;
var G__39466 = count__39100_39461;
var G__39467 = (i__39101_39462 + (1));
seq__39098_39459 = G__39464;
chunk__39099_39460 = G__39465;
count__39100_39461 = G__39466;
i__39101_39462 = G__39467;
continue;
} else {
var temp__5804__auto___39468 = cljs.core.seq(seq__39098_39459);
if(temp__5804__auto___39468){
var seq__39098_39469__$1 = temp__5804__auto___39468;
if(cljs.core.chunked_seq_QMARK_(seq__39098_39469__$1)){
var c__5568__auto___39470 = cljs.core.chunk_first(seq__39098_39469__$1);
var G__39471 = cljs.core.chunk_rest(seq__39098_39469__$1);
var G__39472 = c__5568__auto___39470;
var G__39473 = cljs.core.count(c__5568__auto___39470);
var G__39474 = (0);
seq__39098_39459 = G__39471;
chunk__39099_39460 = G__39472;
count__39100_39461 = G__39473;
i__39101_39462 = G__39474;
continue;
} else {
var item_39475 = cljs.core.first(seq__39098_39469__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_39475));


var G__39476 = cljs.core.next(seq__39098_39469__$1);
var G__39477 = null;
var G__39478 = (0);
var G__39479 = (0);
seq__39098_39459 = G__39476;
chunk__39099_39460 = G__39477;
count__39100_39461 = G__39478;
i__39101_39462 = G__39479;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__5043__auto__ = key;
if(cljs.core.truth_(and__5043__auto__)){
return path;
} else {
return and__5043__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__39104 = "inspect!";
var G__39105 = shadow.object._id(oref);
var G__39106 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__39107 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__39104,G__39105,G__39106,G__39107) : shadow.object.info.call(null,G__39104,G__39105,G__39106,G__39107));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__39108_39482 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__39109_39483 = null;
var count__39110_39484 = (0);
var i__39111_39485 = (0);
while(true){
if((i__39111_39485 < count__39110_39484)){
var vec__39145_39487 = chunk__39109_39483.cljs$core$IIndexed$_nth$arity$2(null,i__39111_39485);
var id_39488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39145_39487,(0),null);
var oref_39489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39145_39487,(1),null);
var G__39148_39490 = "dump";
var G__39149_39491 = id_39488;
var G__39150_39492 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_39489)], 0));
var G__39151_39493 = cljs.core.deref(shadow.object._data(oref_39489));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__39148_39490,G__39149_39491,G__39150_39492,G__39151_39493) : shadow.object.info.call(null,G__39148_39490,G__39149_39491,G__39150_39492,G__39151_39493));


var G__39495 = seq__39108_39482;
var G__39496 = chunk__39109_39483;
var G__39497 = count__39110_39484;
var G__39498 = (i__39111_39485 + (1));
seq__39108_39482 = G__39495;
chunk__39109_39483 = G__39496;
count__39110_39484 = G__39497;
i__39111_39485 = G__39498;
continue;
} else {
var temp__5804__auto___39499 = cljs.core.seq(seq__39108_39482);
if(temp__5804__auto___39499){
var seq__39108_39500__$1 = temp__5804__auto___39499;
if(cljs.core.chunked_seq_QMARK_(seq__39108_39500__$1)){
var c__5568__auto___39501 = cljs.core.chunk_first(seq__39108_39500__$1);
var G__39503 = cljs.core.chunk_rest(seq__39108_39500__$1);
var G__39504 = c__5568__auto___39501;
var G__39505 = cljs.core.count(c__5568__auto___39501);
var G__39506 = (0);
seq__39108_39482 = G__39503;
chunk__39109_39483 = G__39504;
count__39110_39484 = G__39505;
i__39111_39485 = G__39506;
continue;
} else {
var vec__39152_39507 = cljs.core.first(seq__39108_39500__$1);
var id_39508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39152_39507,(0),null);
var oref_39509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39152_39507,(1),null);
var G__39155_39511 = "dump";
var G__39156_39512 = id_39508;
var G__39157_39513 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_39509)], 0));
var G__39158_39514 = cljs.core.deref(shadow.object._data(oref_39509));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__39155_39511,G__39156_39512,G__39157_39513,G__39158_39514) : shadow.object.info.call(null,G__39155_39511,G__39156_39512,G__39157_39513,G__39158_39514));


var G__39516 = cljs.core.next(seq__39108_39500__$1);
var G__39517 = null;
var G__39518 = (0);
var G__39519 = (0);
seq__39108_39482 = G__39516;
chunk__39109_39483 = G__39517;
count__39110_39484 = G__39518;
i__39111_39485 = G__39519;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
Object.defineProperty(module.exports, "dump_BANG_", { enumerable: true, get: function() { return shadow.object.dump_BANG_; } });
Object.defineProperty(module.exports, "tree_seq", { enumerable: true, get: function() { return shadow.object.tree_seq; } });
Object.defineProperty(module.exports, "object_defs", { enumerable: false, get: function() { return shadow.object.object_defs; } });
Object.defineProperty(module.exports, "get_from_dom", { enumerable: true, get: function() { return shadow.object.get_from_dom; } });
Object.defineProperty(module.exports, "get_siblings", { enumerable: false, get: function() { return shadow.object.get_siblings; } });
Object.defineProperty(module.exports, "get_parent_of_type", { enumerable: true, get: function() { return shadow.object.get_parent_of_type; } });
Object.defineProperty(module.exports, "alive_QMARK_", { enumerable: false, get: function() { return shadow.object.alive_QMARK_; } });
Object.defineProperty(module.exports, "notify_down_BANG_", { enumerable: false, get: function() { return shadow.object.notify_down_BANG_; } });
Object.defineProperty(module.exports, "return_value", { enumerable: false, get: function() { return shadow.object.return_value; } });
Object.defineProperty(module.exports, "reaction_merge", { enumerable: false, get: function() { return shadow.object.reaction_merge; } });
Object.defineProperty(module.exports, "log", { enumerable: false, get: function() { return shadow.object.log; } });
Object.defineProperty(module.exports, "add_reaction_BANG_", { enumerable: false, get: function() { return shadow.object.add_reaction_BANG_; } });
Object.defineProperty(module.exports, "find_containing_object", { enumerable: false, get: function() { return shadow.object.find_containing_object; } });
Object.defineProperty(module.exports, "get_dom", { enumerable: true, get: function() { return shadow.object.get_dom; } });
Object.defineProperty(module.exports, "dom_enter", { enumerable: false, get: function() { return shadow.object.dom_enter; } });
Object.defineProperty(module.exports, "do_notify_tree", { enumerable: false, get: function() { return shadow.object.do_notify_tree; } });
Object.defineProperty(module.exports, "bind", { enumerable: false, get: function() { return shadow.object.bind; } });
Object.defineProperty(module.exports, "notify_tree_BANG_", { enumerable: false, get: function() { return shadow.object.notify_tree_BANG_; } });
Object.defineProperty(module.exports, "notify_BANG_", { enumerable: false, get: function() { return shadow.object.notify_BANG_; } });
Object.defineProperty(module.exports, "get_type", { enumerable: false, get: function() { return shadow.object.get_type; } });
Object.defineProperty(module.exports, "unmunge", { enumerable: false, get: function() { return shadow.object.unmunge; } });
Object.defineProperty(module.exports, "map__GT_Watch", { enumerable: false, get: function() { return shadow.object.map__GT_Watch; } });
Object.defineProperty(module.exports, "destroy_BANG_", { enumerable: false, get: function() { return shadow.object.destroy_BANG_; } });
Object.defineProperty(module.exports, "instance_parent", { enumerable: false, get: function() { return shadow.object.instance_parent; } });
Object.defineProperty(module.exports, "dom_destroy", { enumerable: false, get: function() { return shadow.object.dom_destroy; } });
Object.defineProperty(module.exports, "ObjectRef", { enumerable: false, get: function() { return shadow.object.ObjectRef; } });
Object.defineProperty(module.exports, "notify_up_BANG_", { enumerable: false, get: function() { return shadow.object.notify_up_BANG_; } });
Object.defineProperty(module.exports, "next_id", { enumerable: false, get: function() { return shadow.object.next_id; } });
Object.defineProperty(module.exports, "_type", { enumerable: false, get: function() { return shadow.object._type; } });
Object.defineProperty(module.exports, "remove_in_parent_BANG_", { enumerable: false, get: function() { return shadow.object.remove_in_parent_BANG_; } });
Object.defineProperty(module.exports, "get_parent", { enumerable: true, get: function() { return shadow.object.get_parent; } });
Object.defineProperty(module.exports, "create", { enumerable: false, get: function() { return shadow.object.create; } });
Object.defineProperty(module.exports, "warn", { enumerable: false, get: function() { return shadow.object.warn; } });
Object.defineProperty(module.exports, "__GT_ObjectRef", { enumerable: false, get: function() { return shadow.object.__GT_ObjectRef; } });
Object.defineProperty(module.exports, "_update", { enumerable: false, get: function() { return shadow.object._update; } });
Object.defineProperty(module.exports, "get_children_of_type", { enumerable: false, get: function() { return shadow.object.get_children_of_type; } });
Object.defineProperty(module.exports, "coll_destroy_children", { enumerable: false, get: function() { return shadow.object.coll_destroy_children; } });
Object.defineProperty(module.exports, "define_event", { enumerable: false, get: function() { return shadow.object.define_event; } });
Object.defineProperty(module.exports, "events", { enumerable: false, get: function() { return shadow.object.events; } });
Object.defineProperty(module.exports, "_id", { enumerable: false, get: function() { return shadow.object._id; } });
Object.defineProperty(module.exports, "is_object_QMARK_", { enumerable: false, get: function() { return shadow.object.is_object_QMARK_; } });
Object.defineProperty(module.exports, "__GT_Watch", { enumerable: false, get: function() { return shadow.object.__GT_Watch; } });
Object.defineProperty(module.exports, "_data", { enumerable: false, get: function() { return shadow.object._data; } });
Object.defineProperty(module.exports, "debug", { enumerable: false, get: function() { return shadow.object.debug; } });
Object.defineProperty(module.exports, "behavior_fns", { enumerable: false, get: function() { return shadow.object.behavior_fns; } });
Object.defineProperty(module.exports, "get_type_attr", { enumerable: false, get: function() { return shadow.object.get_type_attr; } });
Object.defineProperty(module.exports, "inspect_BANG_", { enumerable: false, get: function() { return shadow.object.inspect_BANG_; } });
Object.defineProperty(module.exports, "merge_behaviors", { enumerable: false, get: function() { return shadow.object.merge_behaviors; } });
Object.defineProperty(module.exports, "get_children", { enumerable: true, get: function() { return shadow.object.get_children; } });
Object.defineProperty(module.exports, "equal_QMARK_", { enumerable: false, get: function() { return shadow.object.equal_QMARK_; } });
Object.defineProperty(module.exports, "define", { enumerable: false, get: function() { return shadow.object.define; } });
Object.defineProperty(module.exports, "bind_children", { enumerable: false, get: function() { return shadow.object.bind_children; } });
Object.defineProperty(module.exports, "get_siblings_of_type", { enumerable: false, get: function() { return shadow.object.get_siblings_of_type; } });
Object.defineProperty(module.exports, "bind_change", { enumerable: false, get: function() { return shadow.object.bind_change; } });
Object.defineProperty(module.exports, "IObject", { enumerable: false, get: function() { return shadow.object.IObject; } });
Object.defineProperty(module.exports, "obj_id", { enumerable: false, get: function() { return shadow.object.obj_id; } });
Object.defineProperty(module.exports, "get_collection_item", { enumerable: false, get: function() { return shadow.object.get_collection_item; } });
Object.defineProperty(module.exports, "instances", { enumerable: false, get: function() { return shadow.object.instances; } });
Object.defineProperty(module.exports, "console_friendly", { enumerable: false, get: function() { return shadow.object.console_friendly; } });
Object.defineProperty(module.exports, "bind_simple", { enumerable: false, get: function() { return shadow.object.bind_simple; } });
Object.defineProperty(module.exports, "_destroy_BANG_", { enumerable: false, get: function() { return shadow.object._destroy_BANG_; } });
Object.defineProperty(module.exports, "update_BANG_", { enumerable: false, get: function() { return shadow.object.update_BANG_; } });
Object.defineProperty(module.exports, "bind_dom_events", { enumerable: false, get: function() { return shadow.object.bind_dom_events; } });
Object.defineProperty(module.exports, "info", { enumerable: false, get: function() { return shadow.object.info; } });
Object.defineProperty(module.exports, "merge_reactions", { enumerable: false, get: function() { return shadow.object.merge_reactions; } });
Object.defineProperty(module.exports, "make_dom", { enumerable: false, get: function() { return shadow.object.make_dom; } });
Object.defineProperty(module.exports, "set_parent_BANG_", { enumerable: false, get: function() { return shadow.object.set_parent_BANG_; } });
Object.defineProperty(module.exports, "instance_children", { enumerable: false, get: function() { return shadow.object.instance_children; } });
Object.defineProperty(module.exports, "merge_defaults", { enumerable: false, get: function() { return shadow.object.merge_defaults; } });
Object.defineProperty(module.exports, "get_by_id", { enumerable: true, get: function() { return shadow.object.get_by_id; } });
Object.defineProperty(module.exports, "error", { enumerable: false, get: function() { return shadow.object.error; } });
Object.defineProperty(module.exports, "Watch", { enumerable: false, get: function() { return shadow.object.Watch; } });
//# sourceMappingURL=shadow.object.js.map
