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

$CLJS.SHADOW_ENV.setLoaded("malli.registry.js");

goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_39757 = (function (this$,type){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (malli.registry._schema[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5394__auto__.call(null,this$,type));
} else {
var m__5392__auto__ = (malli.registry._schema["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5392__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_39757(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_39760 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (malli.registry._schemas[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (malli.registry._schemas["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_39760(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39640 = (function (m,fm,meta39641){
this.m = m;
this.fm = fm;
this.meta39641 = meta39641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39642,meta39641__$1){
var self__ = this;
var _39642__$1 = this;
return (new malli.registry.t_malli$registry39640(self__.m,self__.fm,meta39641__$1));
}));

(malli.registry.t_malli$registry39640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39642){
var self__ = this;
var _39642__$1 = this;
return self__.meta39641;
}));

(malli.registry.t_malli$registry39640.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39640.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry39640.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry39640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta39641","meta39641",-1192427347,null)], null);
}));

(malli.registry.t_malli$registry39640.cljs$lang$type = true);

(malli.registry.t_malli$registry39640.cljs$lang$ctorStr = "malli.registry/t_malli$registry39640");

(malli.registry.t_malli$registry39640.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry39640");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39640.
 */
malli.registry.__GT_t_malli$registry39640 = (function malli$registry$__GT_t_malli$registry39640(m,fm,meta39641){
return (new malli.registry.t_malli$registry39640(m,fm,meta39641));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry39640(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39674 = (function (m,meta39675){
this.m = m;
this.meta39675 = meta39675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39676,meta39675__$1){
var self__ = this;
var _39676__$1 = this;
return (new malli.registry.t_malli$registry39674(self__.m,meta39675__$1));
}));

(malli.registry.t_malli$registry39674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39676){
var self__ = this;
var _39676__$1 = this;
return self__.meta39675;
}));

(malli.registry.t_malli$registry39674.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39674.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry39674.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry39674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta39675","meta39675",-348851219,null)], null);
}));

(malli.registry.t_malli$registry39674.cljs$lang$type = true);

(malli.registry.t_malli$registry39674.cljs$lang$ctorStr = "malli.registry/t_malli$registry39674");

(malli.registry.t_malli$registry39674.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry39674");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39674.
 */
malli.registry.__GT_t_malli$registry39674 = (function malli$registry$__GT_t_malli$registry39674(m,meta39675){
return (new malli.registry.t_malli$registry39674(m,meta39675));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry39674(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39691 = (function (meta39692){
this.meta39692 = meta39692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39693,meta39692__$1){
var self__ = this;
var _39693__$1 = this;
return (new malli.registry.t_malli$registry39691(meta39692__$1));
}));

(malli.registry.t_malli$registry39691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39693){
var self__ = this;
var _39693__$1 = this;
return self__.meta39692;
}));

(malli.registry.t_malli$registry39691.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39691.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry39691.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry39691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39692","meta39692",416728973,null)], null);
}));

(malli.registry.t_malli$registry39691.cljs$lang$type = true);

(malli.registry.t_malli$registry39691.cljs$lang$ctorStr = "malli.registry/t_malli$registry39691");

(malli.registry.t_malli$registry39691.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry39691");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39691.
 */
malli.registry.__GT_t_malli$registry39691 = (function malli$registry$__GT_t_malli$registry39691(meta39692){
return (new malli.registry.t_malli$registry39691(meta39692));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry39691(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39699 = (function (_QMARK_registries,registries,meta39700){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta39700 = meta39700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39701,meta39700__$1){
var self__ = this;
var _39701__$1 = this;
return (new malli.registry.t_malli$registry39699(self__._QMARK_registries,self__.registries,meta39700__$1));
}));

(malli.registry.t_malli$registry39699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39701){
var self__ = this;
var _39701__$1 = this;
return self__.meta39700;
}));

(malli.registry.t_malli$registry39699.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39699.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__39696_SHARP_){
return malli.registry._schema(p1__39696_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry39699.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry39699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta39700","meta39700",1553476028,null)], null);
}));

(malli.registry.t_malli$registry39699.cljs$lang$type = true);

(malli.registry.t_malli$registry39699.cljs$lang$ctorStr = "malli.registry/t_malli$registry39699");

(malli.registry.t_malli$registry39699.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry39699");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39699.
 */
malli.registry.__GT_t_malli$registry39699 = (function malli$registry$__GT_t_malli$registry39699(_QMARK_registries,registries,meta39700){
return (new malli.registry.t_malli$registry39699(_QMARK_registries,registries,meta39700));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39767 = arguments.length;
var i__5770__auto___39768 = (0);
while(true){
if((i__5770__auto___39768 < len__5769__auto___39767)){
args__5775__auto__.push((arguments[i__5770__auto___39768]));

var G__39770 = (i__5770__auto___39768 + (1));
i__5770__auto___39768 = G__39770;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry39699(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq39697){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39697));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39709 = (function (db,meta39710){
this.db = db;
this.meta39710 = meta39710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39711,meta39710__$1){
var self__ = this;
var _39711__$1 = this;
return (new malli.registry.t_malli$registry39709(self__.db,meta39710__$1));
}));

(malli.registry.t_malli$registry39709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39711){
var self__ = this;
var _39711__$1 = this;
return self__.meta39710;
}));

(malli.registry.t_malli$registry39709.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39709.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry39709.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry39709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta39710","meta39710",1254821857,null)], null);
}));

(malli.registry.t_malli$registry39709.cljs$lang$type = true);

(malli.registry.t_malli$registry39709.cljs$lang$ctorStr = "malli.registry/t_malli$registry39709");

(malli.registry.t_malli$registry39709.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry39709");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39709.
 */
malli.registry.__GT_t_malli$registry39709 = (function malli$registry$__GT_t_malli$registry39709(db,meta39710){
return (new malli.registry.t_malli$registry39709(db,meta39710));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry39709(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39721 = (function (meta39722){
this.meta39722 = meta39722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39723,meta39722__$1){
var self__ = this;
var _39723__$1 = this;
return (new malli.registry.t_malli$registry39721(meta39722__$1));
}));

(malli.registry.t_malli$registry39721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39723){
var self__ = this;
var _39723__$1 = this;
return self__.meta39722;
}));

(malli.registry.t_malli$registry39721.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39721.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry39721.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry39721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39722","meta39722",1140132632,null)], null);
}));

(malli.registry.t_malli$registry39721.cljs$lang$type = true);

(malli.registry.t_malli$registry39721.cljs$lang$ctorStr = "malli.registry/t_malli$registry39721");

(malli.registry.t_malli$registry39721.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry39721");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39721.
 */
malli.registry.__GT_t_malli$registry39721 = (function malli$registry$__GT_t_malli$registry39721(meta39722){
return (new malli.registry.t_malli$registry39721(meta39722));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry39721(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39739 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta39740){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta39740 = meta39740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39741,meta39740__$1){
var self__ = this;
var _39741__$1 = this;
return (new malli.registry.t_malli$registry39739(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta39740__$1));
}));

(malli.registry.t_malli$registry39739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39741){
var self__ = this;
var _39741__$1 = this;
return self__.meta39740;
}));

(malli.registry.t_malli$registry39739.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39739.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5045__auto__ = (function (){var fexpr__39746 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__39746.cljs$core$IFn$_invoke$arity$1 ? fexpr__39746.cljs$core$IFn$_invoke$arity$1(name) : fexpr__39746.call(null,name));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5804__auto__ = (function (){var G__39747 = name;
var G__39748 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__39747,G__39748) : self__.provider.call(null,G__39747,G__39748));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var schema__$1 = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema__$1);

return schema__$1;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry39739.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry39739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta39740","meta39740",1245634164,null)], null);
}));

(malli.registry.t_malli$registry39739.cljs$lang$type = true);

(malli.registry.t_malli$registry39739.cljs$lang$ctorStr = "malli.registry/t_malli$registry39739");

(malli.registry.t_malli$registry39739.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry39739");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39739.
 */
malli.registry.__GT_t_malli$registry39739 = (function malli$registry$__GT_t_malli$registry39739(default_registry,provider,cache_STAR_,registry_STAR_,meta39740){
return (new malli.registry.t_malli$registry39739(default_registry,provider,cache_STAR_,registry_STAR_,meta39740));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry39739(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});
Object.defineProperty(module.exports, "custom_default_registry", { enumerable: false, get: function() { return malli.registry.custom_default_registry; } });
Object.defineProperty(module.exports, "t_malli$registry39691", { enumerable: false, get: function() { return malli.registry.t_malli$registry39691; } });
Object.defineProperty(module.exports, "__GT_t_malli$registry39721", { enumerable: false, get: function() { return malli.registry.__GT_t_malli$registry39721; } });
Object.defineProperty(module.exports, "mutable_registry", { enumerable: false, get: function() { return malli.registry.mutable_registry; } });
Object.defineProperty(module.exports, "__GT_t_malli$registry39674", { enumerable: false, get: function() { return malli.registry.__GT_t_malli$registry39674; } });
Object.defineProperty(module.exports, "_STAR_registry_STAR_", { enumerable: false, get: function() { return malli.registry._STAR_registry_STAR_; } });
Object.defineProperty(module.exports, "schema", { enumerable: false, get: function() { return malli.registry.schema; } });
Object.defineProperty(module.exports, "t_malli$registry39721", { enumerable: false, get: function() { return malli.registry.t_malli$registry39721; } });
Object.defineProperty(module.exports, "set_default_registry_BANG_", { enumerable: false, get: function() { return malli.registry.set_default_registry_BANG_; } });
Object.defineProperty(module.exports, "registry_QMARK_", { enumerable: false, get: function() { return malli.registry.registry_QMARK_; } });
Object.defineProperty(module.exports, "t_malli$registry39640", { enumerable: false, get: function() { return malli.registry.t_malli$registry39640; } });
Object.defineProperty(module.exports, "t_malli$registry39699", { enumerable: false, get: function() { return malli.registry.t_malli$registry39699; } });
Object.defineProperty(module.exports, "__GT_t_malli$registry39691", { enumerable: false, get: function() { return malli.registry.__GT_t_malli$registry39691; } });
Object.defineProperty(module.exports, "fast_registry", { enumerable: false, get: function() { return malli.registry.fast_registry; } });
Object.defineProperty(module.exports, "t_malli$registry39674", { enumerable: false, get: function() { return malli.registry.t_malli$registry39674; } });
Object.defineProperty(module.exports, "__GT_t_malli$registry39640", { enumerable: false, get: function() { return malli.registry.__GT_t_malli$registry39640; } });
Object.defineProperty(module.exports, "t_malli$registry39709", { enumerable: false, get: function() { return malli.registry.t_malli$registry39709; } });
Object.defineProperty(module.exports, "registry", { enumerable: false, get: function() { return malli.registry.registry; } });
Object.defineProperty(module.exports, "composite_registry", { enumerable: false, get: function() { return malli.registry.composite_registry; } });
Object.defineProperty(module.exports, "dynamic_registry", { enumerable: false, get: function() { return malli.registry.dynamic_registry; } });
Object.defineProperty(module.exports, "mode", { enumerable: false, get: function() { return malli.registry.mode; } });
Object.defineProperty(module.exports, "type", { enumerable: false, get: function() { return malli.registry.type; } });
Object.defineProperty(module.exports, "t_malli$registry39739", { enumerable: false, get: function() { return malli.registry.t_malli$registry39739; } });
Object.defineProperty(module.exports, "__GT_t_malli$registry39709", { enumerable: false, get: function() { return malli.registry.__GT_t_malli$registry39709; } });
Object.defineProperty(module.exports, "registry_STAR_", { enumerable: false, get: function() { return malli.registry.registry_STAR_; } });
Object.defineProperty(module.exports, "simple_registry", { enumerable: false, get: function() { return malli.registry.simple_registry; } });
Object.defineProperty(module.exports, "__GT_t_malli$registry39739", { enumerable: false, get: function() { return malli.registry.__GT_t_malli$registry39739; } });
Object.defineProperty(module.exports, "Registry", { enumerable: false, get: function() { return malli.registry.Registry; } });
Object.defineProperty(module.exports, "_schemas", { enumerable: false, get: function() { return malli.registry._schemas; } });
Object.defineProperty(module.exports, "schemas", { enumerable: false, get: function() { return malli.registry.schemas; } });
Object.defineProperty(module.exports, "__GT_t_malli$registry39699", { enumerable: false, get: function() { return malli.registry.__GT_t_malli$registry39699; } });
Object.defineProperty(module.exports, "_schema", { enumerable: false, get: function() { return malli.registry._schema; } });
Object.defineProperty(module.exports, "lazy_registry", { enumerable: false, get: function() { return malli.registry.lazy_registry; } });
//# sourceMappingURL=malli.registry.js.map
