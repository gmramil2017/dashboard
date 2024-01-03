var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.channels.js");
require("./cljs.core.async.impl.buffers.js");
require("./cljs.core.async.impl.timers.js");
require("./cljs.core.async.impl.dispatch.js");
require("./cljs.core.async.impl.ioc_helpers.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.core.async.js");

goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34962 = (function (f,blockable,meta34963){
this.f = f;
this.blockable = blockable;
this.meta34963 = meta34963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34964,meta34963__$1){
var self__ = this;
var _34964__$1 = this;
return (new cljs.core.async.t_cljs$core$async34962(self__.f,self__.blockable,meta34963__$1));
}));

(cljs.core.async.t_cljs$core$async34962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34964){
var self__ = this;
var _34964__$1 = this;
return self__.meta34963;
}));

(cljs.core.async.t_cljs$core$async34962.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34963","meta34963",-934522167,null)], null);
}));

(cljs.core.async.t_cljs$core$async34962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34962");

(cljs.core.async.t_cljs$core$async34962.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34962.
 */
cljs.core.async.__GT_t_cljs$core$async34962 = (function cljs$core$async$__GT_t_cljs$core$async34962(f,blockable,meta34963){
return (new cljs.core.async.t_cljs$core$async34962(f,blockable,meta34963));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34959 = arguments.length;
switch (G__34959) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async34962(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34970 = arguments.length;
switch (G__34970) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34974 = arguments.length;
switch (G__34974) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34981 = arguments.length;
switch (G__34981) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_37095 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37095) : fn1.call(null,val_37095));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37095) : fn1.call(null,val_37095));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34991 = arguments.length;
switch (G__34991) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___37117 = n;
var x_37118 = (0);
while(true){
if((x_37118 < n__5636__auto___37117)){
(a[x_37118] = x_37118);

var G__37119 = (x_37118 + (1));
x_37118 = G__37119;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35026 = (function (flag,meta35027){
this.flag = flag;
this.meta35027 = meta35027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35028,meta35027__$1){
var self__ = this;
var _35028__$1 = this;
return (new cljs.core.async.t_cljs$core$async35026(self__.flag,meta35027__$1));
}));

(cljs.core.async.t_cljs$core$async35026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35028){
var self__ = this;
var _35028__$1 = this;
return self__.meta35027;
}));

(cljs.core.async.t_cljs$core$async35026.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35026.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35027","meta35027",-683667671,null)], null);
}));

(cljs.core.async.t_cljs$core$async35026.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35026");

(cljs.core.async.t_cljs$core$async35026.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35026");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35026.
 */
cljs.core.async.__GT_t_cljs$core$async35026 = (function cljs$core$async$__GT_t_cljs$core$async35026(flag,meta35027){
return (new cljs.core.async.t_cljs$core$async35026(flag,meta35027));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async35026(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35062 = (function (flag,cb,meta35063){
this.flag = flag;
this.cb = cb;
this.meta35063 = meta35063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35064,meta35063__$1){
var self__ = this;
var _35064__$1 = this;
return (new cljs.core.async.t_cljs$core$async35062(self__.flag,self__.cb,meta35063__$1));
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35064){
var self__ = this;
var _35064__$1 = this;
return self__.meta35063;
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35063","meta35063",-610278315,null)], null);
}));

(cljs.core.async.t_cljs$core$async35062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35062");

(cljs.core.async.t_cljs$core$async35062.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35062.
 */
cljs.core.async.__GT_t_cljs$core$async35062 = (function cljs$core$async$__GT_t_cljs$core$async35062(flag,cb,meta35063){
return (new cljs.core.async.t_cljs$core$async35062(flag,cb,meta35063));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async35062(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__35116_SHARP_){
var G__35128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35116_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35128) : fret.call(null,G__35128));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__35117_SHARP_){
var G__35129 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35117_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35129) : fret.call(null,G__35129));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37125 = (i + (1));
i = G__37125;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37126 = arguments.length;
var i__5770__auto___37127 = (0);
while(true){
if((i__5770__auto___37127 < len__5769__auto___37126)){
args__5775__auto__.push((arguments[i__5770__auto___37127]));

var G__37128 = (i__5770__auto___37127 + (1));
i__5770__auto___37127 = G__37128;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35156){
var map__35157 = p__35156;
var map__35157__$1 = cljs.core.__destructure_map(map__35157);
var opts = map__35157__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35148){
var G__35149 = cljs.core.first(seq35148);
var seq35148__$1 = cljs.core.next(seq35148);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35149,seq35148__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__35163 = arguments.length;
switch (G__35163) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34881__auto___37134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_35235){
var state_val_35236 = (state_35235[(1)]);
if((state_val_35236 === (7))){
var inst_35223 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35237_37136 = state_35235__$1;
(statearr_35237_37136[(2)] = inst_35223);

(statearr_35237_37136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (1))){
var state_35235__$1 = state_35235;
var statearr_35238_37138 = state_35235__$1;
(statearr_35238_37138[(2)] = null);

(statearr_35238_37138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (4))){
var inst_35194 = (state_35235[(7)]);
var inst_35194__$1 = (state_35235[(2)]);
var inst_35195 = (inst_35194__$1 == null);
var state_35235__$1 = (function (){var statearr_35239 = state_35235;
(statearr_35239[(7)] = inst_35194__$1);

return statearr_35239;
})();
if(cljs.core.truth_(inst_35195)){
var statearr_35240_37139 = state_35235__$1;
(statearr_35240_37139[(1)] = (5));

} else {
var statearr_35241_37140 = state_35235__$1;
(statearr_35241_37140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (13))){
var state_35235__$1 = state_35235;
var statearr_35242_37141 = state_35235__$1;
(statearr_35242_37141[(2)] = null);

(statearr_35242_37141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (6))){
var inst_35194 = (state_35235[(7)]);
var state_35235__$1 = state_35235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35235__$1,(11),to,inst_35194);
} else {
if((state_val_35236 === (3))){
var inst_35233 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35235__$1,inst_35233);
} else {
if((state_val_35236 === (12))){
var state_35235__$1 = state_35235;
var statearr_35243_37142 = state_35235__$1;
(statearr_35243_37142[(2)] = null);

(statearr_35243_37142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (2))){
var state_35235__$1 = state_35235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35235__$1,(4),from);
} else {
if((state_val_35236 === (11))){
var inst_35204 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
if(cljs.core.truth_(inst_35204)){
var statearr_35244_37145 = state_35235__$1;
(statearr_35244_37145[(1)] = (12));

} else {
var statearr_35245_37146 = state_35235__$1;
(statearr_35245_37146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (9))){
var state_35235__$1 = state_35235;
var statearr_35246_37147 = state_35235__$1;
(statearr_35246_37147[(2)] = null);

(statearr_35246_37147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (5))){
var state_35235__$1 = state_35235;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35247_37148 = state_35235__$1;
(statearr_35247_37148[(1)] = (8));

} else {
var statearr_35248_37149 = state_35235__$1;
(statearr_35248_37149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (14))){
var inst_35221 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35249_37150 = state_35235__$1;
(statearr_35249_37150[(2)] = inst_35221);

(statearr_35249_37150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (10))){
var inst_35201 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35250_37151 = state_35235__$1;
(statearr_35250_37151[(2)] = inst_35201);

(statearr_35250_37151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (8))){
var inst_35198 = cljs.core.async.close_BANG_(to);
var state_35235__$1 = state_35235;
var statearr_35251_37153 = state_35235__$1;
(statearr_35251_37153[(2)] = inst_35198);

(statearr_35251_37153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34648__auto__ = null;
var cljs$core$async$state_machine__34648__auto____0 = (function (){
var statearr_35252 = [null,null,null,null,null,null,null,null];
(statearr_35252[(0)] = cljs$core$async$state_machine__34648__auto__);

(statearr_35252[(1)] = (1));

return statearr_35252;
});
var cljs$core$async$state_machine__34648__auto____1 = (function (state_35235){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35235);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e35253){var ex__34651__auto__ = e35253;
var statearr_35254_37155 = state_35235;
(statearr_35254_37155[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35235[(4)]))){
var statearr_35255_37156 = state_35235;
(statearr_35255_37156[(1)] = cljs.core.first((state_35235[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37157 = state_35235;
state_35235 = G__37157;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$state_machine__34648__auto__ = function(state_35235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34648__auto____1.call(this,state_35235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34648__auto____0;
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34648__auto____1;
return cljs$core$async$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_35256 = f__34882__auto__();
(statearr_35256[(6)] = c__34881__auto___37134);

return statearr_35256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__35257){
var vec__35258 = p__35257;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258,(1),null);
var job = vec__35258;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34881__auto___37159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_35265){
var state_val_35266 = (state_35265[(1)]);
if((state_val_35266 === (1))){
var state_35265__$1 = state_35265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35265__$1,(2),res,v);
} else {
if((state_val_35266 === (2))){
var inst_35262 = (state_35265[(2)]);
var inst_35263 = cljs.core.async.close_BANG_(res);
var state_35265__$1 = (function (){var statearr_35267 = state_35265;
(statearr_35267[(7)] = inst_35262);

return statearr_35267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35265__$1,inst_35263);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0 = (function (){
var statearr_35268 = [null,null,null,null,null,null,null,null];
(statearr_35268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__);

(statearr_35268[(1)] = (1));

return statearr_35268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1 = (function (state_35265){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35265);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e35269){var ex__34651__auto__ = e35269;
var statearr_35270_37161 = state_35265;
(statearr_35270_37161[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35265[(4)]))){
var statearr_35271_37162 = state_35265;
(statearr_35271_37162[(1)] = cljs.core.first((state_35265[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37163 = state_35265;
state_35265 = G__37163;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__ = function(state_35265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1.call(this,state_35265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_35273 = f__34882__auto__();
(statearr_35273[(6)] = c__34881__auto___37159);

return statearr_35273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35274){
var vec__35275 = p__35274;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35275,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35275,(1),null);
var job = vec__35275;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___37164 = n;
var __37165 = (0);
while(true){
if((__37165 < n__5636__auto___37164)){
var G__35278_37166 = type;
var G__35278_37167__$1 = (((G__35278_37166 instanceof cljs.core.Keyword))?G__35278_37166.fqn:null);
switch (G__35278_37167__$1) {
case "compute":
var c__34881__auto___37169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37165,c__34881__auto___37169,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async){
return (function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = ((function (__37165,c__34881__auto___37169,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async){
return (function (state_35291){
var state_val_35292 = (state_35291[(1)]);
if((state_val_35292 === (1))){
var state_35291__$1 = state_35291;
var statearr_35293_37170 = state_35291__$1;
(statearr_35293_37170[(2)] = null);

(statearr_35293_37170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (2))){
var state_35291__$1 = state_35291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35291__$1,(4),jobs);
} else {
if((state_val_35292 === (3))){
var inst_35289 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35291__$1,inst_35289);
} else {
if((state_val_35292 === (4))){
var inst_35281 = (state_35291[(2)]);
var inst_35282 = process__$1(inst_35281);
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35282)){
var statearr_35294_37171 = state_35291__$1;
(statearr_35294_37171[(1)] = (5));

} else {
var statearr_35295_37172 = state_35291__$1;
(statearr_35295_37172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (5))){
var state_35291__$1 = state_35291;
var statearr_35296_37173 = state_35291__$1;
(statearr_35296_37173[(2)] = null);

(statearr_35296_37173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (6))){
var state_35291__$1 = state_35291;
var statearr_35297_37174 = state_35291__$1;
(statearr_35297_37174[(2)] = null);

(statearr_35297_37174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (7))){
var inst_35287 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35299_37175 = state_35291__$1;
(statearr_35299_37175[(2)] = inst_35287);

(statearr_35299_37175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37165,c__34881__auto___37169,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async))
;
return ((function (__37165,switch__34647__auto__,c__34881__auto___37169,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0 = (function (){
var statearr_35300 = [null,null,null,null,null,null,null];
(statearr_35300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__);

(statearr_35300[(1)] = (1));

return statearr_35300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1 = (function (state_35291){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35291);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e35301){var ex__34651__auto__ = e35301;
var statearr_35302_37178 = state_35291;
(statearr_35302_37178[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35291[(4)]))){
var statearr_35303_37179 = state_35291;
(statearr_35303_37179[(1)] = cljs.core.first((state_35291[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37180 = state_35291;
state_35291 = G__37180;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__ = function(state_35291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1.call(this,state_35291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__;
})()
;})(__37165,switch__34647__auto__,c__34881__auto___37169,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async))
})();
var state__34883__auto__ = (function (){var statearr_35304 = f__34882__auto__();
(statearr_35304[(6)] = c__34881__auto___37169);

return statearr_35304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
});})(__37165,c__34881__auto___37169,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async))
);


break;
case "async":
var c__34881__auto___37181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37165,c__34881__auto___37181,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async){
return (function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = ((function (__37165,c__34881__auto___37181,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async){
return (function (state_35317){
var state_val_35318 = (state_35317[(1)]);
if((state_val_35318 === (1))){
var state_35317__$1 = state_35317;
var statearr_35319_37182 = state_35317__$1;
(statearr_35319_37182[(2)] = null);

(statearr_35319_37182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (2))){
var state_35317__$1 = state_35317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35317__$1,(4),jobs);
} else {
if((state_val_35318 === (3))){
var inst_35315 = (state_35317[(2)]);
var state_35317__$1 = state_35317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35317__$1,inst_35315);
} else {
if((state_val_35318 === (4))){
var inst_35307 = (state_35317[(2)]);
var inst_35308 = async(inst_35307);
var state_35317__$1 = state_35317;
if(cljs.core.truth_(inst_35308)){
var statearr_35320_37183 = state_35317__$1;
(statearr_35320_37183[(1)] = (5));

} else {
var statearr_35321_37184 = state_35317__$1;
(statearr_35321_37184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (5))){
var state_35317__$1 = state_35317;
var statearr_35322_37185 = state_35317__$1;
(statearr_35322_37185[(2)] = null);

(statearr_35322_37185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (6))){
var state_35317__$1 = state_35317;
var statearr_35323_37186 = state_35317__$1;
(statearr_35323_37186[(2)] = null);

(statearr_35323_37186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35318 === (7))){
var inst_35313 = (state_35317[(2)]);
var state_35317__$1 = state_35317;
var statearr_35324_37187 = state_35317__$1;
(statearr_35324_37187[(2)] = inst_35313);

(statearr_35324_37187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37165,c__34881__auto___37181,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async))
;
return ((function (__37165,switch__34647__auto__,c__34881__auto___37181,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0 = (function (){
var statearr_35325 = [null,null,null,null,null,null,null];
(statearr_35325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__);

(statearr_35325[(1)] = (1));

return statearr_35325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1 = (function (state_35317){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35317);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e35326){var ex__34651__auto__ = e35326;
var statearr_35327_37188 = state_35317;
(statearr_35327_37188[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35317[(4)]))){
var statearr_35328_37189 = state_35317;
(statearr_35328_37189[(1)] = cljs.core.first((state_35317[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37190 = state_35317;
state_35317 = G__37190;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__ = function(state_35317){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1.call(this,state_35317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__;
})()
;})(__37165,switch__34647__auto__,c__34881__auto___37181,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async))
})();
var state__34883__auto__ = (function (){var statearr_35329 = f__34882__auto__();
(statearr_35329[(6)] = c__34881__auto___37181);

return statearr_35329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
});})(__37165,c__34881__auto___37181,G__35278_37166,G__35278_37167__$1,n__5636__auto___37164,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35278_37167__$1)].join('')));

}

var G__37192 = (__37165 + (1));
__37165 = G__37192;
continue;
} else {
}
break;
}

var c__34881__auto___37193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_35351){
var state_val_35352 = (state_35351[(1)]);
if((state_val_35352 === (7))){
var inst_35347 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
var statearr_35353_37195 = state_35351__$1;
(statearr_35353_37195[(2)] = inst_35347);

(statearr_35353_37195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (1))){
var state_35351__$1 = state_35351;
var statearr_35355_37196 = state_35351__$1;
(statearr_35355_37196[(2)] = null);

(statearr_35355_37196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (4))){
var inst_35332 = (state_35351[(7)]);
var inst_35332__$1 = (state_35351[(2)]);
var inst_35333 = (inst_35332__$1 == null);
var state_35351__$1 = (function (){var statearr_35356 = state_35351;
(statearr_35356[(7)] = inst_35332__$1);

return statearr_35356;
})();
if(cljs.core.truth_(inst_35333)){
var statearr_35357_37197 = state_35351__$1;
(statearr_35357_37197[(1)] = (5));

} else {
var statearr_35358_37198 = state_35351__$1;
(statearr_35358_37198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (6))){
var inst_35332 = (state_35351[(7)]);
var inst_35337 = (state_35351[(8)]);
var inst_35337__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35339 = [inst_35332,inst_35337__$1];
var inst_35340 = (new cljs.core.PersistentVector(null,2,(5),inst_35338,inst_35339,null));
var state_35351__$1 = (function (){var statearr_35359 = state_35351;
(statearr_35359[(8)] = inst_35337__$1);

return statearr_35359;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35351__$1,(8),jobs,inst_35340);
} else {
if((state_val_35352 === (3))){
var inst_35349 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35351__$1,inst_35349);
} else {
if((state_val_35352 === (2))){
var state_35351__$1 = state_35351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35351__$1,(4),from);
} else {
if((state_val_35352 === (9))){
var inst_35344 = (state_35351[(2)]);
var state_35351__$1 = (function (){var statearr_35361 = state_35351;
(statearr_35361[(9)] = inst_35344);

return statearr_35361;
})();
var statearr_35362_37199 = state_35351__$1;
(statearr_35362_37199[(2)] = null);

(statearr_35362_37199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (5))){
var inst_35335 = cljs.core.async.close_BANG_(jobs);
var state_35351__$1 = state_35351;
var statearr_35363_37200 = state_35351__$1;
(statearr_35363_37200[(2)] = inst_35335);

(statearr_35363_37200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (8))){
var inst_35337 = (state_35351[(8)]);
var inst_35342 = (state_35351[(2)]);
var state_35351__$1 = (function (){var statearr_35364 = state_35351;
(statearr_35364[(10)] = inst_35342);

return statearr_35364;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35351__$1,(9),results,inst_35337);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0 = (function (){
var statearr_35365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__);

(statearr_35365[(1)] = (1));

return statearr_35365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1 = (function (state_35351){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35351);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e35366){var ex__34651__auto__ = e35366;
var statearr_35367_37209 = state_35351;
(statearr_35367_37209[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35351[(4)]))){
var statearr_35368_37211 = state_35351;
(statearr_35368_37211[(1)] = cljs.core.first((state_35351[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37212 = state_35351;
state_35351 = G__37212;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__ = function(state_35351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1.call(this,state_35351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_35369 = f__34882__auto__();
(statearr_35369[(6)] = c__34881__auto___37193);

return statearr_35369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


var c__34881__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_35409){
var state_val_35410 = (state_35409[(1)]);
if((state_val_35410 === (7))){
var inst_35404 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35412_37216 = state_35409__$1;
(statearr_35412_37216[(2)] = inst_35404);

(statearr_35412_37216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (20))){
var state_35409__$1 = state_35409;
var statearr_35414_37217 = state_35409__$1;
(statearr_35414_37217[(2)] = null);

(statearr_35414_37217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (1))){
var state_35409__$1 = state_35409;
var statearr_35415_37218 = state_35409__$1;
(statearr_35415_37218[(2)] = null);

(statearr_35415_37218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (4))){
var inst_35372 = (state_35409[(7)]);
var inst_35372__$1 = (state_35409[(2)]);
var inst_35373 = (inst_35372__$1 == null);
var state_35409__$1 = (function (){var statearr_35416 = state_35409;
(statearr_35416[(7)] = inst_35372__$1);

return statearr_35416;
})();
if(cljs.core.truth_(inst_35373)){
var statearr_35417_37219 = state_35409__$1;
(statearr_35417_37219[(1)] = (5));

} else {
var statearr_35418_37220 = state_35409__$1;
(statearr_35418_37220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (15))){
var inst_35385 = (state_35409[(8)]);
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35409__$1,(18),to,inst_35385);
} else {
if((state_val_35410 === (21))){
var inst_35399 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35420_37225 = state_35409__$1;
(statearr_35420_37225[(2)] = inst_35399);

(statearr_35420_37225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (13))){
var inst_35401 = (state_35409[(2)]);
var state_35409__$1 = (function (){var statearr_35421 = state_35409;
(statearr_35421[(9)] = inst_35401);

return statearr_35421;
})();
var statearr_35422_37226 = state_35409__$1;
(statearr_35422_37226[(2)] = null);

(statearr_35422_37226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (6))){
var inst_35372 = (state_35409[(7)]);
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35409__$1,(11),inst_35372);
} else {
if((state_val_35410 === (17))){
var inst_35394 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
if(cljs.core.truth_(inst_35394)){
var statearr_35423_37227 = state_35409__$1;
(statearr_35423_37227[(1)] = (19));

} else {
var statearr_35424_37228 = state_35409__$1;
(statearr_35424_37228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (3))){
var inst_35406 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35409__$1,inst_35406);
} else {
if((state_val_35410 === (12))){
var inst_35382 = (state_35409[(10)]);
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35409__$1,(14),inst_35382);
} else {
if((state_val_35410 === (2))){
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35409__$1,(4),results);
} else {
if((state_val_35410 === (19))){
var state_35409__$1 = state_35409;
var statearr_35425_37229 = state_35409__$1;
(statearr_35425_37229[(2)] = null);

(statearr_35425_37229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (11))){
var inst_35382 = (state_35409[(2)]);
var state_35409__$1 = (function (){var statearr_35427 = state_35409;
(statearr_35427[(10)] = inst_35382);

return statearr_35427;
})();
var statearr_35428_37230 = state_35409__$1;
(statearr_35428_37230[(2)] = null);

(statearr_35428_37230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (9))){
var state_35409__$1 = state_35409;
var statearr_35430_37231 = state_35409__$1;
(statearr_35430_37231[(2)] = null);

(statearr_35430_37231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (5))){
var state_35409__$1 = state_35409;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35431_37232 = state_35409__$1;
(statearr_35431_37232[(1)] = (8));

} else {
var statearr_35432_37233 = state_35409__$1;
(statearr_35432_37233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (14))){
var inst_35385 = (state_35409[(8)]);
var inst_35388 = (state_35409[(11)]);
var inst_35385__$1 = (state_35409[(2)]);
var inst_35387 = (inst_35385__$1 == null);
var inst_35388__$1 = cljs.core.not(inst_35387);
var state_35409__$1 = (function (){var statearr_35433 = state_35409;
(statearr_35433[(8)] = inst_35385__$1);

(statearr_35433[(11)] = inst_35388__$1);

return statearr_35433;
})();
if(inst_35388__$1){
var statearr_35434_37234 = state_35409__$1;
(statearr_35434_37234[(1)] = (15));

} else {
var statearr_35435_37235 = state_35409__$1;
(statearr_35435_37235[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (16))){
var inst_35388 = (state_35409[(11)]);
var state_35409__$1 = state_35409;
var statearr_35436_37236 = state_35409__$1;
(statearr_35436_37236[(2)] = inst_35388);

(statearr_35436_37236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (10))){
var inst_35379 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35438_37237 = state_35409__$1;
(statearr_35438_37237[(2)] = inst_35379);

(statearr_35438_37237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (18))){
var inst_35391 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35439_37239 = state_35409__$1;
(statearr_35439_37239[(2)] = inst_35391);

(statearr_35439_37239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (8))){
var inst_35376 = cljs.core.async.close_BANG_(to);
var state_35409__$1 = state_35409;
var statearr_35440_37241 = state_35409__$1;
(statearr_35440_37241[(2)] = inst_35376);

(statearr_35440_37241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0 = (function (){
var statearr_35441 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__);

(statearr_35441[(1)] = (1));

return statearr_35441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1 = (function (state_35409){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35409);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e35442){var ex__34651__auto__ = e35442;
var statearr_35443_37242 = state_35409;
(statearr_35443_37242[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35409[(4)]))){
var statearr_35444_37243 = state_35409;
(statearr_35444_37243[(1)] = cljs.core.first((state_35409[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37244 = state_35409;
state_35409 = G__37244;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__ = function(state_35409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1.call(this,state_35409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_35446 = f__34882__auto__();
(statearr_35446[(6)] = c__34881__auto__);

return statearr_35446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));

return c__34881__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35448 = arguments.length;
switch (G__35448) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__35451 = arguments.length;
switch (G__35451) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__35454 = arguments.length;
switch (G__35454) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34881__auto___37255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_35481){
var state_val_35482 = (state_35481[(1)]);
if((state_val_35482 === (7))){
var inst_35477 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
var statearr_35483_37259 = state_35481__$1;
(statearr_35483_37259[(2)] = inst_35477);

(statearr_35483_37259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (1))){
var state_35481__$1 = state_35481;
var statearr_35484_37260 = state_35481__$1;
(statearr_35484_37260[(2)] = null);

(statearr_35484_37260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (4))){
var inst_35458 = (state_35481[(7)]);
var inst_35458__$1 = (state_35481[(2)]);
var inst_35459 = (inst_35458__$1 == null);
var state_35481__$1 = (function (){var statearr_35486 = state_35481;
(statearr_35486[(7)] = inst_35458__$1);

return statearr_35486;
})();
if(cljs.core.truth_(inst_35459)){
var statearr_35487_37265 = state_35481__$1;
(statearr_35487_37265[(1)] = (5));

} else {
var statearr_35488_37266 = state_35481__$1;
(statearr_35488_37266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (13))){
var state_35481__$1 = state_35481;
var statearr_35489_37267 = state_35481__$1;
(statearr_35489_37267[(2)] = null);

(statearr_35489_37267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (6))){
var inst_35458 = (state_35481[(7)]);
var inst_35464 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35458) : p.call(null,inst_35458));
var state_35481__$1 = state_35481;
if(cljs.core.truth_(inst_35464)){
var statearr_35490_37269 = state_35481__$1;
(statearr_35490_37269[(1)] = (9));

} else {
var statearr_35491_37270 = state_35481__$1;
(statearr_35491_37270[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (3))){
var inst_35479 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35481__$1,inst_35479);
} else {
if((state_val_35482 === (12))){
var state_35481__$1 = state_35481;
var statearr_35492_37274 = state_35481__$1;
(statearr_35492_37274[(2)] = null);

(statearr_35492_37274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (2))){
var state_35481__$1 = state_35481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35481__$1,(4),ch);
} else {
if((state_val_35482 === (11))){
var inst_35458 = (state_35481[(7)]);
var inst_35468 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35481__$1,(8),inst_35468,inst_35458);
} else {
if((state_val_35482 === (9))){
var state_35481__$1 = state_35481;
var statearr_35494_37277 = state_35481__$1;
(statearr_35494_37277[(2)] = tc);

(statearr_35494_37277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (5))){
var inst_35461 = cljs.core.async.close_BANG_(tc);
var inst_35462 = cljs.core.async.close_BANG_(fc);
var state_35481__$1 = (function (){var statearr_35495 = state_35481;
(statearr_35495[(8)] = inst_35461);

return statearr_35495;
})();
var statearr_35496_37278 = state_35481__$1;
(statearr_35496_37278[(2)] = inst_35462);

(statearr_35496_37278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (14))){
var inst_35475 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
var statearr_35497_37279 = state_35481__$1;
(statearr_35497_37279[(2)] = inst_35475);

(statearr_35497_37279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (10))){
var state_35481__$1 = state_35481;
var statearr_35498_37280 = state_35481__$1;
(statearr_35498_37280[(2)] = fc);

(statearr_35498_37280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (8))){
var inst_35470 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
if(cljs.core.truth_(inst_35470)){
var statearr_35499_37285 = state_35481__$1;
(statearr_35499_37285[(1)] = (12));

} else {
var statearr_35500_37286 = state_35481__$1;
(statearr_35500_37286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34648__auto__ = null;
var cljs$core$async$state_machine__34648__auto____0 = (function (){
var statearr_35501 = [null,null,null,null,null,null,null,null,null];
(statearr_35501[(0)] = cljs$core$async$state_machine__34648__auto__);

(statearr_35501[(1)] = (1));

return statearr_35501;
});
var cljs$core$async$state_machine__34648__auto____1 = (function (state_35481){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35481);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e35502){var ex__34651__auto__ = e35502;
var statearr_35503_37291 = state_35481;
(statearr_35503_37291[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35481[(4)]))){
var statearr_35504_37292 = state_35481;
(statearr_35504_37292[(1)] = cljs.core.first((state_35481[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37294 = state_35481;
state_35481 = G__37294;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$state_machine__34648__auto__ = function(state_35481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34648__auto____1.call(this,state_35481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34648__auto____0;
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34648__auto____1;
return cljs$core$async$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_35506 = f__34882__auto__();
(statearr_35506[(6)] = c__34881__auto___37255);

return statearr_35506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34881__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_35528){
var state_val_35529 = (state_35528[(1)]);
if((state_val_35529 === (7))){
var inst_35524 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35531_37298 = state_35528__$1;
(statearr_35531_37298[(2)] = inst_35524);

(statearr_35531_37298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (1))){
var inst_35507 = init;
var inst_35508 = inst_35507;
var state_35528__$1 = (function (){var statearr_35532 = state_35528;
(statearr_35532[(7)] = inst_35508);

return statearr_35532;
})();
var statearr_35533_37299 = state_35528__$1;
(statearr_35533_37299[(2)] = null);

(statearr_35533_37299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (4))){
var inst_35511 = (state_35528[(8)]);
var inst_35511__$1 = (state_35528[(2)]);
var inst_35512 = (inst_35511__$1 == null);
var state_35528__$1 = (function (){var statearr_35534 = state_35528;
(statearr_35534[(8)] = inst_35511__$1);

return statearr_35534;
})();
if(cljs.core.truth_(inst_35512)){
var statearr_35535_37303 = state_35528__$1;
(statearr_35535_37303[(1)] = (5));

} else {
var statearr_35536_37304 = state_35528__$1;
(statearr_35536_37304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (6))){
var inst_35508 = (state_35528[(7)]);
var inst_35511 = (state_35528[(8)]);
var inst_35515 = (state_35528[(9)]);
var inst_35515__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35508,inst_35511) : f.call(null,inst_35508,inst_35511));
var inst_35516 = cljs.core.reduced_QMARK_(inst_35515__$1);
var state_35528__$1 = (function (){var statearr_35537 = state_35528;
(statearr_35537[(9)] = inst_35515__$1);

return statearr_35537;
})();
if(inst_35516){
var statearr_35538_37305 = state_35528__$1;
(statearr_35538_37305[(1)] = (8));

} else {
var statearr_35539_37306 = state_35528__$1;
(statearr_35539_37306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (3))){
var inst_35526 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35528__$1,inst_35526);
} else {
if((state_val_35529 === (2))){
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35528__$1,(4),ch);
} else {
if((state_val_35529 === (9))){
var inst_35515 = (state_35528[(9)]);
var inst_35508 = inst_35515;
var state_35528__$1 = (function (){var statearr_35540 = state_35528;
(statearr_35540[(7)] = inst_35508);

return statearr_35540;
})();
var statearr_35541_37312 = state_35528__$1;
(statearr_35541_37312[(2)] = null);

(statearr_35541_37312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (5))){
var inst_35508 = (state_35528[(7)]);
var state_35528__$1 = state_35528;
var statearr_35543_37313 = state_35528__$1;
(statearr_35543_37313[(2)] = inst_35508);

(statearr_35543_37313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (10))){
var inst_35522 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35544_37314 = state_35528__$1;
(statearr_35544_37314[(2)] = inst_35522);

(statearr_35544_37314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (8))){
var inst_35515 = (state_35528[(9)]);
var inst_35518 = cljs.core.deref(inst_35515);
var state_35528__$1 = state_35528;
var statearr_35545_37315 = state_35528__$1;
(statearr_35545_37315[(2)] = inst_35518);

(statearr_35545_37315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34648__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34648__auto____0 = (function (){
var statearr_35546 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35546[(0)] = cljs$core$async$reduce_$_state_machine__34648__auto__);

(statearr_35546[(1)] = (1));

return statearr_35546;
});
var cljs$core$async$reduce_$_state_machine__34648__auto____1 = (function (state_35528){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35528);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e35547){var ex__34651__auto__ = e35547;
var statearr_35548_37316 = state_35528;
(statearr_35548_37316[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35528[(4)]))){
var statearr_35549_37317 = state_35528;
(statearr_35549_37317[(1)] = cljs.core.first((state_35528[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37319 = state_35528;
state_35528 = G__37319;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34648__auto__ = function(state_35528){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34648__auto____1.call(this,state_35528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34648__auto____0;
cljs$core$async$reduce_$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34648__auto____1;
return cljs$core$async$reduce_$_state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_35550 = f__34882__auto__();
(statearr_35550[(6)] = c__34881__auto__);

return statearr_35550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));

return c__34881__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34881__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_35557){
var state_val_35558 = (state_35557[(1)]);
if((state_val_35558 === (1))){
var inst_35552 = cljs.core.async.reduce(f__$1,init,ch);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35557__$1,(2),inst_35552);
} else {
if((state_val_35558 === (2))){
var inst_35554 = (state_35557[(2)]);
var inst_35555 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35554) : f__$1.call(null,inst_35554));
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35557__$1,inst_35555);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34648__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34648__auto____0 = (function (){
var statearr_35559 = [null,null,null,null,null,null,null];
(statearr_35559[(0)] = cljs$core$async$transduce_$_state_machine__34648__auto__);

(statearr_35559[(1)] = (1));

return statearr_35559;
});
var cljs$core$async$transduce_$_state_machine__34648__auto____1 = (function (state_35557){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35557);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e35560){var ex__34651__auto__ = e35560;
var statearr_35561_37320 = state_35557;
(statearr_35561_37320[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35557[(4)]))){
var statearr_35562_37321 = state_35557;
(statearr_35562_37321[(1)] = cljs.core.first((state_35557[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37322 = state_35557;
state_35557 = G__37322;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34648__auto__ = function(state_35557){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34648__auto____1.call(this,state_35557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34648__auto____0;
cljs$core$async$transduce_$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34648__auto____1;
return cljs$core$async$transduce_$_state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_35563 = f__34882__auto__();
(statearr_35563[(6)] = c__34881__auto__);

return statearr_35563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));

return c__34881__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__35566 = arguments.length;
switch (G__35566) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34881__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_35591){
var state_val_35592 = (state_35591[(1)]);
if((state_val_35592 === (7))){
var inst_35573 = (state_35591[(2)]);
var state_35591__$1 = state_35591;
var statearr_35594_37324 = state_35591__$1;
(statearr_35594_37324[(2)] = inst_35573);

(statearr_35594_37324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (1))){
var inst_35567 = cljs.core.seq(coll);
var inst_35568 = inst_35567;
var state_35591__$1 = (function (){var statearr_35595 = state_35591;
(statearr_35595[(7)] = inst_35568);

return statearr_35595;
})();
var statearr_35596_37325 = state_35591__$1;
(statearr_35596_37325[(2)] = null);

(statearr_35596_37325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (4))){
var inst_35568 = (state_35591[(7)]);
var inst_35571 = cljs.core.first(inst_35568);
var state_35591__$1 = state_35591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35591__$1,(7),ch,inst_35571);
} else {
if((state_val_35592 === (13))){
var inst_35585 = (state_35591[(2)]);
var state_35591__$1 = state_35591;
var statearr_35597_37326 = state_35591__$1;
(statearr_35597_37326[(2)] = inst_35585);

(statearr_35597_37326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (6))){
var inst_35576 = (state_35591[(2)]);
var state_35591__$1 = state_35591;
if(cljs.core.truth_(inst_35576)){
var statearr_35598_37327 = state_35591__$1;
(statearr_35598_37327[(1)] = (8));

} else {
var statearr_35599_37328 = state_35591__$1;
(statearr_35599_37328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (3))){
var inst_35589 = (state_35591[(2)]);
var state_35591__$1 = state_35591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35591__$1,inst_35589);
} else {
if((state_val_35592 === (12))){
var state_35591__$1 = state_35591;
var statearr_35600_37329 = state_35591__$1;
(statearr_35600_37329[(2)] = null);

(statearr_35600_37329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (2))){
var inst_35568 = (state_35591[(7)]);
var state_35591__$1 = state_35591;
if(cljs.core.truth_(inst_35568)){
var statearr_35601_37330 = state_35591__$1;
(statearr_35601_37330[(1)] = (4));

} else {
var statearr_35602_37331 = state_35591__$1;
(statearr_35602_37331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (11))){
var inst_35582 = cljs.core.async.close_BANG_(ch);
var state_35591__$1 = state_35591;
var statearr_35603_37332 = state_35591__$1;
(statearr_35603_37332[(2)] = inst_35582);

(statearr_35603_37332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (9))){
var state_35591__$1 = state_35591;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35604_37333 = state_35591__$1;
(statearr_35604_37333[(1)] = (11));

} else {
var statearr_35605_37334 = state_35591__$1;
(statearr_35605_37334[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (5))){
var inst_35568 = (state_35591[(7)]);
var state_35591__$1 = state_35591;
var statearr_35607_37335 = state_35591__$1;
(statearr_35607_37335[(2)] = inst_35568);

(statearr_35607_37335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (10))){
var inst_35587 = (state_35591[(2)]);
var state_35591__$1 = state_35591;
var statearr_35608_37336 = state_35591__$1;
(statearr_35608_37336[(2)] = inst_35587);

(statearr_35608_37336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35592 === (8))){
var inst_35568 = (state_35591[(7)]);
var inst_35578 = cljs.core.next(inst_35568);
var inst_35568__$1 = inst_35578;
var state_35591__$1 = (function (){var statearr_35609 = state_35591;
(statearr_35609[(7)] = inst_35568__$1);

return statearr_35609;
})();
var statearr_35610_37337 = state_35591__$1;
(statearr_35610_37337[(2)] = null);

(statearr_35610_37337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34648__auto__ = null;
var cljs$core$async$state_machine__34648__auto____0 = (function (){
var statearr_35611 = [null,null,null,null,null,null,null,null];
(statearr_35611[(0)] = cljs$core$async$state_machine__34648__auto__);

(statearr_35611[(1)] = (1));

return statearr_35611;
});
var cljs$core$async$state_machine__34648__auto____1 = (function (state_35591){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35591);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e35612){var ex__34651__auto__ = e35612;
var statearr_35613_37341 = state_35591;
(statearr_35613_37341[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35591[(4)]))){
var statearr_35614_37342 = state_35591;
(statearr_35614_37342[(1)] = cljs.core.first((state_35591[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37343 = state_35591;
state_35591 = G__37343;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$state_machine__34648__auto__ = function(state_35591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34648__auto____1.call(this,state_35591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34648__auto____0;
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34648__auto____1;
return cljs$core$async$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_35615 = f__34882__auto__();
(statearr_35615[(6)] = c__34881__auto__);

return statearr_35615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));

return c__34881__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35618 = arguments.length;
switch (G__35618) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37345 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37345(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37354 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37354(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37366 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37366(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37368 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37368(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35622 = (function (ch,cs,meta35623){
this.ch = ch;
this.cs = cs;
this.meta35623 = meta35623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35624,meta35623__$1){
var self__ = this;
var _35624__$1 = this;
return (new cljs.core.async.t_cljs$core$async35622(self__.ch,self__.cs,meta35623__$1));
}));

(cljs.core.async.t_cljs$core$async35622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35624){
var self__ = this;
var _35624__$1 = this;
return self__.meta35623;
}));

(cljs.core.async.t_cljs$core$async35622.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35622.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35622.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35622.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35622.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35623","meta35623",-1627719471,null)], null);
}));

(cljs.core.async.t_cljs$core$async35622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35622");

(cljs.core.async.t_cljs$core$async35622.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35622.
 */
cljs.core.async.__GT_t_cljs$core$async35622 = (function cljs$core$async$__GT_t_cljs$core$async35622(ch,cs,meta35623){
return (new cljs.core.async.t_cljs$core$async35622(ch,cs,meta35623));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async35622(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34881__auto___37390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_35760){
var state_val_35761 = (state_35760[(1)]);
if((state_val_35761 === (7))){
var inst_35755 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35762_37391 = state_35760__$1;
(statearr_35762_37391[(2)] = inst_35755);

(statearr_35762_37391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (20))){
var inst_35659 = (state_35760[(7)]);
var inst_35672 = cljs.core.first(inst_35659);
var inst_35673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35672,(0),null);
var inst_35674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35672,(1),null);
var state_35760__$1 = (function (){var statearr_35763 = state_35760;
(statearr_35763[(8)] = inst_35673);

return statearr_35763;
})();
if(cljs.core.truth_(inst_35674)){
var statearr_35764_37395 = state_35760__$1;
(statearr_35764_37395[(1)] = (22));

} else {
var statearr_35765_37396 = state_35760__$1;
(statearr_35765_37396[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (27))){
var inst_35702 = (state_35760[(9)]);
var inst_35704 = (state_35760[(10)]);
var inst_35709 = (state_35760[(11)]);
var inst_35628 = (state_35760[(12)]);
var inst_35709__$1 = cljs.core._nth(inst_35702,inst_35704);
var inst_35710 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35709__$1,inst_35628,done);
var state_35760__$1 = (function (){var statearr_35766 = state_35760;
(statearr_35766[(11)] = inst_35709__$1);

return statearr_35766;
})();
if(cljs.core.truth_(inst_35710)){
var statearr_35767_37401 = state_35760__$1;
(statearr_35767_37401[(1)] = (30));

} else {
var statearr_35769_37402 = state_35760__$1;
(statearr_35769_37402[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (1))){
var state_35760__$1 = state_35760;
var statearr_35770_37403 = state_35760__$1;
(statearr_35770_37403[(2)] = null);

(statearr_35770_37403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (24))){
var inst_35659 = (state_35760[(7)]);
var inst_35679 = (state_35760[(2)]);
var inst_35680 = cljs.core.next(inst_35659);
var inst_35637 = inst_35680;
var inst_35638 = null;
var inst_35639 = (0);
var inst_35640 = (0);
var state_35760__$1 = (function (){var statearr_35771 = state_35760;
(statearr_35771[(13)] = inst_35679);

(statearr_35771[(14)] = inst_35637);

(statearr_35771[(15)] = inst_35638);

(statearr_35771[(16)] = inst_35639);

(statearr_35771[(17)] = inst_35640);

return statearr_35771;
})();
var statearr_35772_37406 = state_35760__$1;
(statearr_35772_37406[(2)] = null);

(statearr_35772_37406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (39))){
var state_35760__$1 = state_35760;
var statearr_35776_37407 = state_35760__$1;
(statearr_35776_37407[(2)] = null);

(statearr_35776_37407[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (4))){
var inst_35628 = (state_35760[(12)]);
var inst_35628__$1 = (state_35760[(2)]);
var inst_35629 = (inst_35628__$1 == null);
var state_35760__$1 = (function (){var statearr_35777 = state_35760;
(statearr_35777[(12)] = inst_35628__$1);

return statearr_35777;
})();
if(cljs.core.truth_(inst_35629)){
var statearr_35778_37408 = state_35760__$1;
(statearr_35778_37408[(1)] = (5));

} else {
var statearr_35779_37409 = state_35760__$1;
(statearr_35779_37409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (15))){
var inst_35640 = (state_35760[(17)]);
var inst_35637 = (state_35760[(14)]);
var inst_35638 = (state_35760[(15)]);
var inst_35639 = (state_35760[(16)]);
var inst_35655 = (state_35760[(2)]);
var inst_35656 = (inst_35640 + (1));
var tmp35773 = inst_35638;
var tmp35774 = inst_35637;
var tmp35775 = inst_35639;
var inst_35637__$1 = tmp35774;
var inst_35638__$1 = tmp35773;
var inst_35639__$1 = tmp35775;
var inst_35640__$1 = inst_35656;
var state_35760__$1 = (function (){var statearr_35780 = state_35760;
(statearr_35780[(18)] = inst_35655);

(statearr_35780[(14)] = inst_35637__$1);

(statearr_35780[(15)] = inst_35638__$1);

(statearr_35780[(16)] = inst_35639__$1);

(statearr_35780[(17)] = inst_35640__$1);

return statearr_35780;
})();
var statearr_35781_37414 = state_35760__$1;
(statearr_35781_37414[(2)] = null);

(statearr_35781_37414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (21))){
var inst_35683 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35786_37415 = state_35760__$1;
(statearr_35786_37415[(2)] = inst_35683);

(statearr_35786_37415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (31))){
var inst_35709 = (state_35760[(11)]);
var inst_35713 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35709);
var state_35760__$1 = state_35760;
var statearr_35787_37418 = state_35760__$1;
(statearr_35787_37418[(2)] = inst_35713);

(statearr_35787_37418[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (32))){
var inst_35704 = (state_35760[(10)]);
var inst_35701 = (state_35760[(19)]);
var inst_35702 = (state_35760[(9)]);
var inst_35703 = (state_35760[(20)]);
var inst_35715 = (state_35760[(2)]);
var inst_35716 = (inst_35704 + (1));
var tmp35783 = inst_35703;
var tmp35784 = inst_35702;
var tmp35785 = inst_35701;
var inst_35701__$1 = tmp35785;
var inst_35702__$1 = tmp35784;
var inst_35703__$1 = tmp35783;
var inst_35704__$1 = inst_35716;
var state_35760__$1 = (function (){var statearr_35788 = state_35760;
(statearr_35788[(21)] = inst_35715);

(statearr_35788[(19)] = inst_35701__$1);

(statearr_35788[(9)] = inst_35702__$1);

(statearr_35788[(20)] = inst_35703__$1);

(statearr_35788[(10)] = inst_35704__$1);

return statearr_35788;
})();
var statearr_35789_37421 = state_35760__$1;
(statearr_35789_37421[(2)] = null);

(statearr_35789_37421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (40))){
var inst_35728 = (state_35760[(22)]);
var inst_35732 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35728);
var state_35760__$1 = state_35760;
var statearr_35790_37422 = state_35760__$1;
(statearr_35790_37422[(2)] = inst_35732);

(statearr_35790_37422[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (33))){
var inst_35719 = (state_35760[(23)]);
var inst_35721 = cljs.core.chunked_seq_QMARK_(inst_35719);
var state_35760__$1 = state_35760;
if(inst_35721){
var statearr_35791_37423 = state_35760__$1;
(statearr_35791_37423[(1)] = (36));

} else {
var statearr_35792_37424 = state_35760__$1;
(statearr_35792_37424[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (13))){
var inst_35649 = (state_35760[(24)]);
var inst_35652 = cljs.core.async.close_BANG_(inst_35649);
var state_35760__$1 = state_35760;
var statearr_35793_37425 = state_35760__$1;
(statearr_35793_37425[(2)] = inst_35652);

(statearr_35793_37425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (22))){
var inst_35673 = (state_35760[(8)]);
var inst_35676 = cljs.core.async.close_BANG_(inst_35673);
var state_35760__$1 = state_35760;
var statearr_35795_37426 = state_35760__$1;
(statearr_35795_37426[(2)] = inst_35676);

(statearr_35795_37426[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (36))){
var inst_35719 = (state_35760[(23)]);
var inst_35723 = cljs.core.chunk_first(inst_35719);
var inst_35724 = cljs.core.chunk_rest(inst_35719);
var inst_35725 = cljs.core.count(inst_35723);
var inst_35701 = inst_35724;
var inst_35702 = inst_35723;
var inst_35703 = inst_35725;
var inst_35704 = (0);
var state_35760__$1 = (function (){var statearr_35796 = state_35760;
(statearr_35796[(19)] = inst_35701);

(statearr_35796[(9)] = inst_35702);

(statearr_35796[(20)] = inst_35703);

(statearr_35796[(10)] = inst_35704);

return statearr_35796;
})();
var statearr_35797_37430 = state_35760__$1;
(statearr_35797_37430[(2)] = null);

(statearr_35797_37430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (41))){
var inst_35719 = (state_35760[(23)]);
var inst_35734 = (state_35760[(2)]);
var inst_35735 = cljs.core.next(inst_35719);
var inst_35701 = inst_35735;
var inst_35702 = null;
var inst_35703 = (0);
var inst_35704 = (0);
var state_35760__$1 = (function (){var statearr_35798 = state_35760;
(statearr_35798[(25)] = inst_35734);

(statearr_35798[(19)] = inst_35701);

(statearr_35798[(9)] = inst_35702);

(statearr_35798[(20)] = inst_35703);

(statearr_35798[(10)] = inst_35704);

return statearr_35798;
})();
var statearr_35799_37435 = state_35760__$1;
(statearr_35799_37435[(2)] = null);

(statearr_35799_37435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (43))){
var state_35760__$1 = state_35760;
var statearr_35801_37437 = state_35760__$1;
(statearr_35801_37437[(2)] = null);

(statearr_35801_37437[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (29))){
var inst_35743 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35802_37443 = state_35760__$1;
(statearr_35802_37443[(2)] = inst_35743);

(statearr_35802_37443[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (44))){
var inst_35752 = (state_35760[(2)]);
var state_35760__$1 = (function (){var statearr_35803 = state_35760;
(statearr_35803[(26)] = inst_35752);

return statearr_35803;
})();
var statearr_35804_37444 = state_35760__$1;
(statearr_35804_37444[(2)] = null);

(statearr_35804_37444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (6))){
var inst_35693 = (state_35760[(27)]);
var inst_35692 = cljs.core.deref(cs);
var inst_35693__$1 = cljs.core.keys(inst_35692);
var inst_35694 = cljs.core.count(inst_35693__$1);
var inst_35695 = cljs.core.reset_BANG_(dctr,inst_35694);
var inst_35700 = cljs.core.seq(inst_35693__$1);
var inst_35701 = inst_35700;
var inst_35702 = null;
var inst_35703 = (0);
var inst_35704 = (0);
var state_35760__$1 = (function (){var statearr_35805 = state_35760;
(statearr_35805[(27)] = inst_35693__$1);

(statearr_35805[(28)] = inst_35695);

(statearr_35805[(19)] = inst_35701);

(statearr_35805[(9)] = inst_35702);

(statearr_35805[(20)] = inst_35703);

(statearr_35805[(10)] = inst_35704);

return statearr_35805;
})();
var statearr_35806_37445 = state_35760__$1;
(statearr_35806_37445[(2)] = null);

(statearr_35806_37445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (28))){
var inst_35701 = (state_35760[(19)]);
var inst_35719 = (state_35760[(23)]);
var inst_35719__$1 = cljs.core.seq(inst_35701);
var state_35760__$1 = (function (){var statearr_35807 = state_35760;
(statearr_35807[(23)] = inst_35719__$1);

return statearr_35807;
})();
if(inst_35719__$1){
var statearr_35809_37446 = state_35760__$1;
(statearr_35809_37446[(1)] = (33));

} else {
var statearr_35810_37447 = state_35760__$1;
(statearr_35810_37447[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (25))){
var inst_35704 = (state_35760[(10)]);
var inst_35703 = (state_35760[(20)]);
var inst_35706 = (inst_35704 < inst_35703);
var inst_35707 = inst_35706;
var state_35760__$1 = state_35760;
if(cljs.core.truth_(inst_35707)){
var statearr_35812_37448 = state_35760__$1;
(statearr_35812_37448[(1)] = (27));

} else {
var statearr_35813_37449 = state_35760__$1;
(statearr_35813_37449[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (34))){
var state_35760__$1 = state_35760;
var statearr_35814_37450 = state_35760__$1;
(statearr_35814_37450[(2)] = null);

(statearr_35814_37450[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (17))){
var state_35760__$1 = state_35760;
var statearr_35815_37451 = state_35760__$1;
(statearr_35815_37451[(2)] = null);

(statearr_35815_37451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (3))){
var inst_35757 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35760__$1,inst_35757);
} else {
if((state_val_35761 === (12))){
var inst_35688 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35816_37452 = state_35760__$1;
(statearr_35816_37452[(2)] = inst_35688);

(statearr_35816_37452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (2))){
var state_35760__$1 = state_35760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35760__$1,(4),ch);
} else {
if((state_val_35761 === (23))){
var state_35760__$1 = state_35760;
var statearr_35818_37453 = state_35760__$1;
(statearr_35818_37453[(2)] = null);

(statearr_35818_37453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (35))){
var inst_35741 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35819_37454 = state_35760__$1;
(statearr_35819_37454[(2)] = inst_35741);

(statearr_35819_37454[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (19))){
var inst_35659 = (state_35760[(7)]);
var inst_35664 = cljs.core.chunk_first(inst_35659);
var inst_35665 = cljs.core.chunk_rest(inst_35659);
var inst_35666 = cljs.core.count(inst_35664);
var inst_35637 = inst_35665;
var inst_35638 = inst_35664;
var inst_35639 = inst_35666;
var inst_35640 = (0);
var state_35760__$1 = (function (){var statearr_35820 = state_35760;
(statearr_35820[(14)] = inst_35637);

(statearr_35820[(15)] = inst_35638);

(statearr_35820[(16)] = inst_35639);

(statearr_35820[(17)] = inst_35640);

return statearr_35820;
})();
var statearr_35821_37455 = state_35760__$1;
(statearr_35821_37455[(2)] = null);

(statearr_35821_37455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (11))){
var inst_35637 = (state_35760[(14)]);
var inst_35659 = (state_35760[(7)]);
var inst_35659__$1 = cljs.core.seq(inst_35637);
var state_35760__$1 = (function (){var statearr_35823 = state_35760;
(statearr_35823[(7)] = inst_35659__$1);

return statearr_35823;
})();
if(inst_35659__$1){
var statearr_35824_37456 = state_35760__$1;
(statearr_35824_37456[(1)] = (16));

} else {
var statearr_35825_37457 = state_35760__$1;
(statearr_35825_37457[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (9))){
var inst_35690 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35826_37458 = state_35760__$1;
(statearr_35826_37458[(2)] = inst_35690);

(statearr_35826_37458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (5))){
var inst_35635 = cljs.core.deref(cs);
var inst_35636 = cljs.core.seq(inst_35635);
var inst_35637 = inst_35636;
var inst_35638 = null;
var inst_35639 = (0);
var inst_35640 = (0);
var state_35760__$1 = (function (){var statearr_35827 = state_35760;
(statearr_35827[(14)] = inst_35637);

(statearr_35827[(15)] = inst_35638);

(statearr_35827[(16)] = inst_35639);

(statearr_35827[(17)] = inst_35640);

return statearr_35827;
})();
var statearr_35828_37459 = state_35760__$1;
(statearr_35828_37459[(2)] = null);

(statearr_35828_37459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (14))){
var state_35760__$1 = state_35760;
var statearr_35829_37466 = state_35760__$1;
(statearr_35829_37466[(2)] = null);

(statearr_35829_37466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (45))){
var inst_35749 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35830_37467 = state_35760__$1;
(statearr_35830_37467[(2)] = inst_35749);

(statearr_35830_37467[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (26))){
var inst_35693 = (state_35760[(27)]);
var inst_35745 = (state_35760[(2)]);
var inst_35746 = cljs.core.seq(inst_35693);
var state_35760__$1 = (function (){var statearr_35832 = state_35760;
(statearr_35832[(29)] = inst_35745);

return statearr_35832;
})();
if(inst_35746){
var statearr_35833_37468 = state_35760__$1;
(statearr_35833_37468[(1)] = (42));

} else {
var statearr_35834_37469 = state_35760__$1;
(statearr_35834_37469[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (16))){
var inst_35659 = (state_35760[(7)]);
var inst_35662 = cljs.core.chunked_seq_QMARK_(inst_35659);
var state_35760__$1 = state_35760;
if(inst_35662){
var statearr_35835_37472 = state_35760__$1;
(statearr_35835_37472[(1)] = (19));

} else {
var statearr_35836_37473 = state_35760__$1;
(statearr_35836_37473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (38))){
var inst_35738 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35837_37474 = state_35760__$1;
(statearr_35837_37474[(2)] = inst_35738);

(statearr_35837_37474[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (30))){
var state_35760__$1 = state_35760;
var statearr_35838_37475 = state_35760__$1;
(statearr_35838_37475[(2)] = null);

(statearr_35838_37475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (10))){
var inst_35638 = (state_35760[(15)]);
var inst_35640 = (state_35760[(17)]);
var inst_35648 = cljs.core._nth(inst_35638,inst_35640);
var inst_35649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35648,(0),null);
var inst_35650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35648,(1),null);
var state_35760__$1 = (function (){var statearr_35839 = state_35760;
(statearr_35839[(24)] = inst_35649);

return statearr_35839;
})();
if(cljs.core.truth_(inst_35650)){
var statearr_35841_37476 = state_35760__$1;
(statearr_35841_37476[(1)] = (13));

} else {
var statearr_35842_37477 = state_35760__$1;
(statearr_35842_37477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (18))){
var inst_35686 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35843_37478 = state_35760__$1;
(statearr_35843_37478[(2)] = inst_35686);

(statearr_35843_37478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (42))){
var state_35760__$1 = state_35760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35760__$1,(45),dchan);
} else {
if((state_val_35761 === (37))){
var inst_35719 = (state_35760[(23)]);
var inst_35728 = (state_35760[(22)]);
var inst_35628 = (state_35760[(12)]);
var inst_35728__$1 = cljs.core.first(inst_35719);
var inst_35729 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35728__$1,inst_35628,done);
var state_35760__$1 = (function (){var statearr_35844 = state_35760;
(statearr_35844[(22)] = inst_35728__$1);

return statearr_35844;
})();
if(cljs.core.truth_(inst_35729)){
var statearr_35845_37480 = state_35760__$1;
(statearr_35845_37480[(1)] = (39));

} else {
var statearr_35846_37481 = state_35760__$1;
(statearr_35846_37481[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (8))){
var inst_35640 = (state_35760[(17)]);
var inst_35639 = (state_35760[(16)]);
var inst_35642 = (inst_35640 < inst_35639);
var inst_35643 = inst_35642;
var state_35760__$1 = state_35760;
if(cljs.core.truth_(inst_35643)){
var statearr_35848_37482 = state_35760__$1;
(statearr_35848_37482[(1)] = (10));

} else {
var statearr_35849_37483 = state_35760__$1;
(statearr_35849_37483[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34648__auto__ = null;
var cljs$core$async$mult_$_state_machine__34648__auto____0 = (function (){
var statearr_35850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35850[(0)] = cljs$core$async$mult_$_state_machine__34648__auto__);

(statearr_35850[(1)] = (1));

return statearr_35850;
});
var cljs$core$async$mult_$_state_machine__34648__auto____1 = (function (state_35760){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35760);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e35851){var ex__34651__auto__ = e35851;
var statearr_35852_37494 = state_35760;
(statearr_35852_37494[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35760[(4)]))){
var statearr_35853_37495 = state_35760;
(statearr_35853_37495[(1)] = cljs.core.first((state_35760[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37502 = state_35760;
state_35760 = G__37502;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34648__auto__ = function(state_35760){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34648__auto____1.call(this,state_35760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34648__auto____0;
cljs$core$async$mult_$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34648__auto____1;
return cljs$core$async$mult_$_state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_35855 = f__34882__auto__();
(statearr_35855[(6)] = c__34881__auto___37390);

return statearr_35855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35858 = arguments.length;
switch (G__35858) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37505 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37505(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37506 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37506(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37508 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37508(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37509 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37509(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37510 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37510(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37511 = arguments.length;
var i__5770__auto___37512 = (0);
while(true){
if((i__5770__auto___37512 < len__5769__auto___37511)){
args__5775__auto__.push((arguments[i__5770__auto___37512]));

var G__37513 = (i__5770__auto___37512 + (1));
i__5770__auto___37512 = G__37513;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35870){
var map__35871 = p__35870;
var map__35871__$1 = cljs.core.__destructure_map(map__35871);
var opts = map__35871__$1;
var statearr_35872_37514 = state;
(statearr_35872_37514[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35873_37515 = state;
(statearr_35873_37515[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_35874_37516 = state;
(statearr_35874_37516[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35864){
var G__35865 = cljs.core.first(seq35864);
var seq35864__$1 = cljs.core.next(seq35864);
var G__35866 = cljs.core.first(seq35864__$1);
var seq35864__$2 = cljs.core.next(seq35864__$1);
var G__35867 = cljs.core.first(seq35864__$2);
var seq35864__$3 = cljs.core.next(seq35864__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35865,G__35866,G__35867,seq35864__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35877 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35878){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35878 = meta35878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35879,meta35878__$1){
var self__ = this;
var _35879__$1 = this;
return (new cljs.core.async.t_cljs$core$async35877(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35878__$1));
}));

(cljs.core.async.t_cljs$core$async35877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35879){
var self__ = this;
var _35879__$1 = this;
return self__.meta35878;
}));

(cljs.core.async.t_cljs$core$async35877.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35877.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35877.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35877.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35877.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35877.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35877.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35877.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35878","meta35878",2115287432,null)], null);
}));

(cljs.core.async.t_cljs$core$async35877.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35877");

(cljs.core.async.t_cljs$core$async35877.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35877");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35877.
 */
cljs.core.async.__GT_t_cljs$core$async35877 = (function cljs$core$async$__GT_t_cljs$core$async35877(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35878){
return (new cljs.core.async.t_cljs$core$async35877(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35878));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async35877(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__34881__auto___37523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_35949){
var state_val_35950 = (state_35949[(1)]);
if((state_val_35950 === (7))){
var inst_35909 = (state_35949[(2)]);
var state_35949__$1 = state_35949;
if(cljs.core.truth_(inst_35909)){
var statearr_35951_37524 = state_35949__$1;
(statearr_35951_37524[(1)] = (8));

} else {
var statearr_35952_37525 = state_35949__$1;
(statearr_35952_37525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (20))){
var inst_35902 = (state_35949[(7)]);
var state_35949__$1 = state_35949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35949__$1,(23),out,inst_35902);
} else {
if((state_val_35950 === (1))){
var inst_35885 = calc_state();
var inst_35886 = cljs.core.__destructure_map(inst_35885);
var inst_35887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35886,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35886,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35886,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35890 = inst_35885;
var state_35949__$1 = (function (){var statearr_35956 = state_35949;
(statearr_35956[(8)] = inst_35887);

(statearr_35956[(9)] = inst_35888);

(statearr_35956[(10)] = inst_35889);

(statearr_35956[(11)] = inst_35890);

return statearr_35956;
})();
var statearr_35957_37526 = state_35949__$1;
(statearr_35957_37526[(2)] = null);

(statearr_35957_37526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (24))){
var inst_35893 = (state_35949[(12)]);
var inst_35890 = inst_35893;
var state_35949__$1 = (function (){var statearr_35961 = state_35949;
(statearr_35961[(11)] = inst_35890);

return statearr_35961;
})();
var statearr_35962_37527 = state_35949__$1;
(statearr_35962_37527[(2)] = null);

(statearr_35962_37527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (4))){
var inst_35902 = (state_35949[(7)]);
var inst_35904 = (state_35949[(13)]);
var inst_35901 = (state_35949[(2)]);
var inst_35902__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35901,(0),null);
var inst_35903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35901,(1),null);
var inst_35904__$1 = (inst_35902__$1 == null);
var state_35949__$1 = (function (){var statearr_35966 = state_35949;
(statearr_35966[(7)] = inst_35902__$1);

(statearr_35966[(14)] = inst_35903);

(statearr_35966[(13)] = inst_35904__$1);

return statearr_35966;
})();
if(cljs.core.truth_(inst_35904__$1)){
var statearr_35967_37528 = state_35949__$1;
(statearr_35967_37528[(1)] = (5));

} else {
var statearr_35968_37529 = state_35949__$1;
(statearr_35968_37529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (15))){
var inst_35894 = (state_35949[(15)]);
var inst_35923 = (state_35949[(16)]);
var inst_35923__$1 = cljs.core.empty_QMARK_(inst_35894);
var state_35949__$1 = (function (){var statearr_35969 = state_35949;
(statearr_35969[(16)] = inst_35923__$1);

return statearr_35969;
})();
if(inst_35923__$1){
var statearr_35970_37530 = state_35949__$1;
(statearr_35970_37530[(1)] = (17));

} else {
var statearr_35971_37531 = state_35949__$1;
(statearr_35971_37531[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (21))){
var inst_35893 = (state_35949[(12)]);
var inst_35890 = inst_35893;
var state_35949__$1 = (function (){var statearr_35973 = state_35949;
(statearr_35973[(11)] = inst_35890);

return statearr_35973;
})();
var statearr_35974_37532 = state_35949__$1;
(statearr_35974_37532[(2)] = null);

(statearr_35974_37532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (13))){
var inst_35916 = (state_35949[(2)]);
var inst_35917 = calc_state();
var inst_35890 = inst_35917;
var state_35949__$1 = (function (){var statearr_35978 = state_35949;
(statearr_35978[(17)] = inst_35916);

(statearr_35978[(11)] = inst_35890);

return statearr_35978;
})();
var statearr_35979_37535 = state_35949__$1;
(statearr_35979_37535[(2)] = null);

(statearr_35979_37535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (22))){
var inst_35943 = (state_35949[(2)]);
var state_35949__$1 = state_35949;
var statearr_35981_37536 = state_35949__$1;
(statearr_35981_37536[(2)] = inst_35943);

(statearr_35981_37536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (6))){
var inst_35903 = (state_35949[(14)]);
var inst_35907 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35903,change);
var state_35949__$1 = state_35949;
var statearr_35985_37537 = state_35949__$1;
(statearr_35985_37537[(2)] = inst_35907);

(statearr_35985_37537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (25))){
var state_35949__$1 = state_35949;
var statearr_35987_37538 = state_35949__$1;
(statearr_35987_37538[(2)] = null);

(statearr_35987_37538[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (17))){
var inst_35895 = (state_35949[(18)]);
var inst_35903 = (state_35949[(14)]);
var inst_35925 = (inst_35895.cljs$core$IFn$_invoke$arity$1 ? inst_35895.cljs$core$IFn$_invoke$arity$1(inst_35903) : inst_35895.call(null,inst_35903));
var inst_35926 = cljs.core.not(inst_35925);
var state_35949__$1 = state_35949;
var statearr_35990_37539 = state_35949__$1;
(statearr_35990_37539[(2)] = inst_35926);

(statearr_35990_37539[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (3))){
var inst_35947 = (state_35949[(2)]);
var state_35949__$1 = state_35949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35949__$1,inst_35947);
} else {
if((state_val_35950 === (12))){
var state_35949__$1 = state_35949;
var statearr_35993_37540 = state_35949__$1;
(statearr_35993_37540[(2)] = null);

(statearr_35993_37540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (2))){
var inst_35890 = (state_35949[(11)]);
var inst_35893 = (state_35949[(12)]);
var inst_35893__$1 = cljs.core.__destructure_map(inst_35890);
var inst_35894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35893__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35893__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35893__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35949__$1 = (function (){var statearr_35997 = state_35949;
(statearr_35997[(12)] = inst_35893__$1);

(statearr_35997[(15)] = inst_35894);

(statearr_35997[(18)] = inst_35895);

return statearr_35997;
})();
return cljs.core.async.ioc_alts_BANG_(state_35949__$1,(4),inst_35896);
} else {
if((state_val_35950 === (23))){
var inst_35934 = (state_35949[(2)]);
var state_35949__$1 = state_35949;
if(cljs.core.truth_(inst_35934)){
var statearr_35999_37542 = state_35949__$1;
(statearr_35999_37542[(1)] = (24));

} else {
var statearr_36000_37543 = state_35949__$1;
(statearr_36000_37543[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (19))){
var inst_35929 = (state_35949[(2)]);
var state_35949__$1 = state_35949;
var statearr_36004_37544 = state_35949__$1;
(statearr_36004_37544[(2)] = inst_35929);

(statearr_36004_37544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (11))){
var inst_35903 = (state_35949[(14)]);
var inst_35913 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35903);
var state_35949__$1 = state_35949;
var statearr_36006_37545 = state_35949__$1;
(statearr_36006_37545[(2)] = inst_35913);

(statearr_36006_37545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (9))){
var inst_35894 = (state_35949[(15)]);
var inst_35903 = (state_35949[(14)]);
var inst_35920 = (state_35949[(19)]);
var inst_35920__$1 = (inst_35894.cljs$core$IFn$_invoke$arity$1 ? inst_35894.cljs$core$IFn$_invoke$arity$1(inst_35903) : inst_35894.call(null,inst_35903));
var state_35949__$1 = (function (){var statearr_36010 = state_35949;
(statearr_36010[(19)] = inst_35920__$1);

return statearr_36010;
})();
if(cljs.core.truth_(inst_35920__$1)){
var statearr_36011_37546 = state_35949__$1;
(statearr_36011_37546[(1)] = (14));

} else {
var statearr_36012_37547 = state_35949__$1;
(statearr_36012_37547[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (5))){
var inst_35904 = (state_35949[(13)]);
var state_35949__$1 = state_35949;
var statearr_36014_37548 = state_35949__$1;
(statearr_36014_37548[(2)] = inst_35904);

(statearr_36014_37548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (14))){
var inst_35920 = (state_35949[(19)]);
var state_35949__$1 = state_35949;
var statearr_36017_37549 = state_35949__$1;
(statearr_36017_37549[(2)] = inst_35920);

(statearr_36017_37549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (26))){
var inst_35939 = (state_35949[(2)]);
var state_35949__$1 = state_35949;
var statearr_36019_37550 = state_35949__$1;
(statearr_36019_37550[(2)] = inst_35939);

(statearr_36019_37550[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (16))){
var inst_35931 = (state_35949[(2)]);
var state_35949__$1 = state_35949;
if(cljs.core.truth_(inst_35931)){
var statearr_36021_37551 = state_35949__$1;
(statearr_36021_37551[(1)] = (20));

} else {
var statearr_36022_37552 = state_35949__$1;
(statearr_36022_37552[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (10))){
var inst_35945 = (state_35949[(2)]);
var state_35949__$1 = state_35949;
var statearr_36026_37553 = state_35949__$1;
(statearr_36026_37553[(2)] = inst_35945);

(statearr_36026_37553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (18))){
var inst_35923 = (state_35949[(16)]);
var state_35949__$1 = state_35949;
var statearr_36027_37554 = state_35949__$1;
(statearr_36027_37554[(2)] = inst_35923);

(statearr_36027_37554[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35950 === (8))){
var inst_35902 = (state_35949[(7)]);
var inst_35911 = (inst_35902 == null);
var state_35949__$1 = state_35949;
if(cljs.core.truth_(inst_35911)){
var statearr_36029_37555 = state_35949__$1;
(statearr_36029_37555[(1)] = (11));

} else {
var statearr_36032_37556 = state_35949__$1;
(statearr_36032_37556[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34648__auto__ = null;
var cljs$core$async$mix_$_state_machine__34648__auto____0 = (function (){
var statearr_36035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36035[(0)] = cljs$core$async$mix_$_state_machine__34648__auto__);

(statearr_36035[(1)] = (1));

return statearr_36035;
});
var cljs$core$async$mix_$_state_machine__34648__auto____1 = (function (state_35949){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_35949);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e36038){var ex__34651__auto__ = e36038;
var statearr_36040_37567 = state_35949;
(statearr_36040_37567[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_35949[(4)]))){
var statearr_36041_37568 = state_35949;
(statearr_36041_37568[(1)] = cljs.core.first((state_35949[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37569 = state_35949;
state_35949 = G__37569;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34648__auto__ = function(state_35949){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34648__auto____1.call(this,state_35949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34648__auto____0;
cljs$core$async$mix_$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34648__auto____1;
return cljs$core$async$mix_$_state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_36044 = f__34882__auto__();
(statearr_36044[(6)] = c__34881__auto___37523);

return statearr_36044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37574 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37574(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37576 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37576(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37577 = (function() {
var G__37578 = null;
var G__37578__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37578__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37578 = function(p,v){
switch(arguments.length){
case 1:
return G__37578__1.call(this,p);
case 2:
return G__37578__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37578.cljs$core$IFn$_invoke$arity$1 = G__37578__1;
G__37578.cljs$core$IFn$_invoke$arity$2 = G__37578__2;
return G__37578;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36083 = arguments.length;
switch (G__36083) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37577(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37577(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36108 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36109){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36109 = meta36109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36110,meta36109__$1){
var self__ = this;
var _36110__$1 = this;
return (new cljs.core.async.t_cljs$core$async36108(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36109__$1));
}));

(cljs.core.async.t_cljs$core$async36108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36110){
var self__ = this;
var _36110__$1 = this;
return self__.meta36109;
}));

(cljs.core.async.t_cljs$core$async36108.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36108.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36108.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36108.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36108.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async36108.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36108.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36109","meta36109",1283764006,null)], null);
}));

(cljs.core.async.t_cljs$core$async36108.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36108");

(cljs.core.async.t_cljs$core$async36108.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36108");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36108.
 */
cljs.core.async.__GT_t_cljs$core$async36108 = (function cljs$core$async$__GT_t_cljs$core$async36108(ch,topic_fn,buf_fn,mults,ensure_mult,meta36109){
return (new cljs.core.async.t_cljs$core$async36108(ch,topic_fn,buf_fn,mults,ensure_mult,meta36109));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__36098 = arguments.length;
switch (G__36098) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36092_SHARP_){
if(cljs.core.truth_((p1__36092_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36092_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36092_SHARP_.call(null,topic)))){
return p1__36092_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36092_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async36108(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__34881__auto___37585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_36212){
var state_val_36213 = (state_36212[(1)]);
if((state_val_36213 === (7))){
var inst_36207 = (state_36212[(2)]);
var state_36212__$1 = state_36212;
var statearr_36218_37586 = state_36212__$1;
(statearr_36218_37586[(2)] = inst_36207);

(statearr_36218_37586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (20))){
var state_36212__$1 = state_36212;
var statearr_36222_37587 = state_36212__$1;
(statearr_36222_37587[(2)] = null);

(statearr_36222_37587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (1))){
var state_36212__$1 = state_36212;
var statearr_36224_37588 = state_36212__$1;
(statearr_36224_37588[(2)] = null);

(statearr_36224_37588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (24))){
var inst_36189 = (state_36212[(7)]);
var inst_36199 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36189);
var state_36212__$1 = state_36212;
var statearr_36227_37589 = state_36212__$1;
(statearr_36227_37589[(2)] = inst_36199);

(statearr_36227_37589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (4))){
var inst_36134 = (state_36212[(8)]);
var inst_36134__$1 = (state_36212[(2)]);
var inst_36135 = (inst_36134__$1 == null);
var state_36212__$1 = (function (){var statearr_36229 = state_36212;
(statearr_36229[(8)] = inst_36134__$1);

return statearr_36229;
})();
if(cljs.core.truth_(inst_36135)){
var statearr_36231_37590 = state_36212__$1;
(statearr_36231_37590[(1)] = (5));

} else {
var statearr_36232_37591 = state_36212__$1;
(statearr_36232_37591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (15))){
var inst_36181 = (state_36212[(2)]);
var state_36212__$1 = state_36212;
var statearr_36235_37592 = state_36212__$1;
(statearr_36235_37592[(2)] = inst_36181);

(statearr_36235_37592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (21))){
var inst_36204 = (state_36212[(2)]);
var state_36212__$1 = (function (){var statearr_36237 = state_36212;
(statearr_36237[(9)] = inst_36204);

return statearr_36237;
})();
var statearr_36239_37593 = state_36212__$1;
(statearr_36239_37593[(2)] = null);

(statearr_36239_37593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (13))){
var inst_36162 = (state_36212[(10)]);
var inst_36164 = cljs.core.chunked_seq_QMARK_(inst_36162);
var state_36212__$1 = state_36212;
if(inst_36164){
var statearr_36243_37596 = state_36212__$1;
(statearr_36243_37596[(1)] = (16));

} else {
var statearr_36245_37597 = state_36212__$1;
(statearr_36245_37597[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (22))){
var inst_36196 = (state_36212[(2)]);
var state_36212__$1 = state_36212;
if(cljs.core.truth_(inst_36196)){
var statearr_36247_37598 = state_36212__$1;
(statearr_36247_37598[(1)] = (23));

} else {
var statearr_36249_37599 = state_36212__$1;
(statearr_36249_37599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (6))){
var inst_36134 = (state_36212[(8)]);
var inst_36189 = (state_36212[(7)]);
var inst_36191 = (state_36212[(11)]);
var inst_36189__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36134) : topic_fn.call(null,inst_36134));
var inst_36190 = cljs.core.deref(mults);
var inst_36191__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36190,inst_36189__$1);
var state_36212__$1 = (function (){var statearr_36253 = state_36212;
(statearr_36253[(7)] = inst_36189__$1);

(statearr_36253[(11)] = inst_36191__$1);

return statearr_36253;
})();
if(cljs.core.truth_(inst_36191__$1)){
var statearr_36254_37600 = state_36212__$1;
(statearr_36254_37600[(1)] = (19));

} else {
var statearr_36256_37601 = state_36212__$1;
(statearr_36256_37601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (25))){
var inst_36201 = (state_36212[(2)]);
var state_36212__$1 = state_36212;
var statearr_36257_37602 = state_36212__$1;
(statearr_36257_37602[(2)] = inst_36201);

(statearr_36257_37602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (17))){
var inst_36162 = (state_36212[(10)]);
var inst_36172 = cljs.core.first(inst_36162);
var inst_36173 = cljs.core.async.muxch_STAR_(inst_36172);
var inst_36174 = cljs.core.async.close_BANG_(inst_36173);
var inst_36175 = cljs.core.next(inst_36162);
var inst_36144 = inst_36175;
var inst_36145 = null;
var inst_36146 = (0);
var inst_36147 = (0);
var state_36212__$1 = (function (){var statearr_36262 = state_36212;
(statearr_36262[(12)] = inst_36174);

(statearr_36262[(13)] = inst_36144);

(statearr_36262[(14)] = inst_36145);

(statearr_36262[(15)] = inst_36146);

(statearr_36262[(16)] = inst_36147);

return statearr_36262;
})();
var statearr_36263_37605 = state_36212__$1;
(statearr_36263_37605[(2)] = null);

(statearr_36263_37605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (3))){
var inst_36209 = (state_36212[(2)]);
var state_36212__$1 = state_36212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36212__$1,inst_36209);
} else {
if((state_val_36213 === (12))){
var inst_36183 = (state_36212[(2)]);
var state_36212__$1 = state_36212;
var statearr_36267_37606 = state_36212__$1;
(statearr_36267_37606[(2)] = inst_36183);

(statearr_36267_37606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (2))){
var state_36212__$1 = state_36212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36212__$1,(4),ch);
} else {
if((state_val_36213 === (23))){
var state_36212__$1 = state_36212;
var statearr_36270_37608 = state_36212__$1;
(statearr_36270_37608[(2)] = null);

(statearr_36270_37608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (19))){
var inst_36191 = (state_36212[(11)]);
var inst_36134 = (state_36212[(8)]);
var inst_36194 = cljs.core.async.muxch_STAR_(inst_36191);
var state_36212__$1 = state_36212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36212__$1,(22),inst_36194,inst_36134);
} else {
if((state_val_36213 === (11))){
var inst_36144 = (state_36212[(13)]);
var inst_36162 = (state_36212[(10)]);
var inst_36162__$1 = cljs.core.seq(inst_36144);
var state_36212__$1 = (function (){var statearr_36274 = state_36212;
(statearr_36274[(10)] = inst_36162__$1);

return statearr_36274;
})();
if(inst_36162__$1){
var statearr_36275_37609 = state_36212__$1;
(statearr_36275_37609[(1)] = (13));

} else {
var statearr_36278_37610 = state_36212__$1;
(statearr_36278_37610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (9))){
var inst_36185 = (state_36212[(2)]);
var state_36212__$1 = state_36212;
var statearr_36280_37612 = state_36212__$1;
(statearr_36280_37612[(2)] = inst_36185);

(statearr_36280_37612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (5))){
var inst_36141 = cljs.core.deref(mults);
var inst_36142 = cljs.core.vals(inst_36141);
var inst_36143 = cljs.core.seq(inst_36142);
var inst_36144 = inst_36143;
var inst_36145 = null;
var inst_36146 = (0);
var inst_36147 = (0);
var state_36212__$1 = (function (){var statearr_36283 = state_36212;
(statearr_36283[(13)] = inst_36144);

(statearr_36283[(14)] = inst_36145);

(statearr_36283[(15)] = inst_36146);

(statearr_36283[(16)] = inst_36147);

return statearr_36283;
})();
var statearr_36286_37613 = state_36212__$1;
(statearr_36286_37613[(2)] = null);

(statearr_36286_37613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (14))){
var state_36212__$1 = state_36212;
var statearr_36291_37614 = state_36212__$1;
(statearr_36291_37614[(2)] = null);

(statearr_36291_37614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (16))){
var inst_36162 = (state_36212[(10)]);
var inst_36166 = cljs.core.chunk_first(inst_36162);
var inst_36167 = cljs.core.chunk_rest(inst_36162);
var inst_36168 = cljs.core.count(inst_36166);
var inst_36144 = inst_36167;
var inst_36145 = inst_36166;
var inst_36146 = inst_36168;
var inst_36147 = (0);
var state_36212__$1 = (function (){var statearr_36294 = state_36212;
(statearr_36294[(13)] = inst_36144);

(statearr_36294[(14)] = inst_36145);

(statearr_36294[(15)] = inst_36146);

(statearr_36294[(16)] = inst_36147);

return statearr_36294;
})();
var statearr_36295_37615 = state_36212__$1;
(statearr_36295_37615[(2)] = null);

(statearr_36295_37615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (10))){
var inst_36145 = (state_36212[(14)]);
var inst_36147 = (state_36212[(16)]);
var inst_36144 = (state_36212[(13)]);
var inst_36146 = (state_36212[(15)]);
var inst_36153 = cljs.core._nth(inst_36145,inst_36147);
var inst_36154 = cljs.core.async.muxch_STAR_(inst_36153);
var inst_36155 = cljs.core.async.close_BANG_(inst_36154);
var inst_36156 = (inst_36147 + (1));
var tmp36287 = inst_36146;
var tmp36288 = inst_36145;
var tmp36289 = inst_36144;
var inst_36144__$1 = tmp36289;
var inst_36145__$1 = tmp36288;
var inst_36146__$1 = tmp36287;
var inst_36147__$1 = inst_36156;
var state_36212__$1 = (function (){var statearr_36296 = state_36212;
(statearr_36296[(17)] = inst_36155);

(statearr_36296[(13)] = inst_36144__$1);

(statearr_36296[(14)] = inst_36145__$1);

(statearr_36296[(15)] = inst_36146__$1);

(statearr_36296[(16)] = inst_36147__$1);

return statearr_36296;
})();
var statearr_36297_37616 = state_36212__$1;
(statearr_36297_37616[(2)] = null);

(statearr_36297_37616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (18))){
var inst_36178 = (state_36212[(2)]);
var state_36212__$1 = state_36212;
var statearr_36298_37617 = state_36212__$1;
(statearr_36298_37617[(2)] = inst_36178);

(statearr_36298_37617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (8))){
var inst_36147 = (state_36212[(16)]);
var inst_36146 = (state_36212[(15)]);
var inst_36150 = (inst_36147 < inst_36146);
var inst_36151 = inst_36150;
var state_36212__$1 = state_36212;
if(cljs.core.truth_(inst_36151)){
var statearr_36299_37618 = state_36212__$1;
(statearr_36299_37618[(1)] = (10));

} else {
var statearr_36300_37619 = state_36212__$1;
(statearr_36300_37619[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34648__auto__ = null;
var cljs$core$async$state_machine__34648__auto____0 = (function (){
var statearr_36301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36301[(0)] = cljs$core$async$state_machine__34648__auto__);

(statearr_36301[(1)] = (1));

return statearr_36301;
});
var cljs$core$async$state_machine__34648__auto____1 = (function (state_36212){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_36212);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e36302){var ex__34651__auto__ = e36302;
var statearr_36303_37620 = state_36212;
(statearr_36303_37620[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_36212[(4)]))){
var statearr_36304_37621 = state_36212;
(statearr_36304_37621[(1)] = cljs.core.first((state_36212[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37622 = state_36212;
state_36212 = G__37622;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$state_machine__34648__auto__ = function(state_36212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34648__auto____1.call(this,state_36212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34648__auto____0;
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34648__auto____1;
return cljs$core$async$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_36305 = f__34882__auto__();
(statearr_36305[(6)] = c__34881__auto___37585);

return statearr_36305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36307 = arguments.length;
switch (G__36307) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36315 = arguments.length;
switch (G__36315) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36322 = arguments.length;
switch (G__36322) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__34881__auto___37639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_36381){
var state_val_36382 = (state_36381[(1)]);
if((state_val_36382 === (7))){
var state_36381__$1 = state_36381;
var statearr_36387_37640 = state_36381__$1;
(statearr_36387_37640[(2)] = null);

(statearr_36387_37640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (1))){
var state_36381__$1 = state_36381;
var statearr_36388_37641 = state_36381__$1;
(statearr_36388_37641[(2)] = null);

(statearr_36388_37641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (4))){
var inst_36334 = (state_36381[(7)]);
var inst_36333 = (state_36381[(8)]);
var inst_36336 = (inst_36334 < inst_36333);
var state_36381__$1 = state_36381;
if(cljs.core.truth_(inst_36336)){
var statearr_36389_37642 = state_36381__$1;
(statearr_36389_37642[(1)] = (6));

} else {
var statearr_36390_37652 = state_36381__$1;
(statearr_36390_37652[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (15))){
var inst_36367 = (state_36381[(9)]);
var inst_36372 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36367);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36381__$1,(17),out,inst_36372);
} else {
if((state_val_36382 === (13))){
var inst_36367 = (state_36381[(9)]);
var inst_36367__$1 = (state_36381[(2)]);
var inst_36368 = cljs.core.some(cljs.core.nil_QMARK_,inst_36367__$1);
var state_36381__$1 = (function (){var statearr_36392 = state_36381;
(statearr_36392[(9)] = inst_36367__$1);

return statearr_36392;
})();
if(cljs.core.truth_(inst_36368)){
var statearr_36393_37653 = state_36381__$1;
(statearr_36393_37653[(1)] = (14));

} else {
var statearr_36394_37654 = state_36381__$1;
(statearr_36394_37654[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (6))){
var state_36381__$1 = state_36381;
var statearr_36395_37655 = state_36381__$1;
(statearr_36395_37655[(2)] = null);

(statearr_36395_37655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (17))){
var inst_36374 = (state_36381[(2)]);
var state_36381__$1 = (function (){var statearr_36405 = state_36381;
(statearr_36405[(10)] = inst_36374);

return statearr_36405;
})();
var statearr_36406_37656 = state_36381__$1;
(statearr_36406_37656[(2)] = null);

(statearr_36406_37656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (3))){
var inst_36379 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36381__$1,inst_36379);
} else {
if((state_val_36382 === (12))){
var _ = (function (){var statearr_36410 = state_36381;
(statearr_36410[(4)] = cljs.core.rest((state_36381[(4)])));

return statearr_36410;
})();
var state_36381__$1 = state_36381;
var ex36404 = (state_36381__$1[(2)]);
var statearr_36412_37657 = state_36381__$1;
(statearr_36412_37657[(5)] = ex36404);


if((ex36404 instanceof Object)){
var statearr_36413_37658 = state_36381__$1;
(statearr_36413_37658[(1)] = (11));

(statearr_36413_37658[(5)] = null);

} else {
throw ex36404;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (2))){
var inst_36332 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36333 = cnt;
var inst_36334 = (0);
var state_36381__$1 = (function (){var statearr_36418 = state_36381;
(statearr_36418[(11)] = inst_36332);

(statearr_36418[(8)] = inst_36333);

(statearr_36418[(7)] = inst_36334);

return statearr_36418;
})();
var statearr_36419_37663 = state_36381__$1;
(statearr_36419_37663[(2)] = null);

(statearr_36419_37663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (11))){
var inst_36342 = (state_36381[(2)]);
var inst_36346 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36381__$1 = (function (){var statearr_36423 = state_36381;
(statearr_36423[(12)] = inst_36342);

return statearr_36423;
})();
var statearr_36425_37664 = state_36381__$1;
(statearr_36425_37664[(2)] = inst_36346);

(statearr_36425_37664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (9))){
var inst_36334 = (state_36381[(7)]);
var _ = (function (){var statearr_36426 = state_36381;
(statearr_36426[(4)] = cljs.core.cons((12),(state_36381[(4)])));

return statearr_36426;
})();
var inst_36352 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36334) : chs__$1.call(null,inst_36334));
var inst_36353 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36334) : done.call(null,inst_36334));
var inst_36354 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36352,inst_36353);
var ___$1 = (function (){var statearr_36427 = state_36381;
(statearr_36427[(4)] = cljs.core.rest((state_36381[(4)])));

return statearr_36427;
})();
var state_36381__$1 = state_36381;
var statearr_36428_37672 = state_36381__$1;
(statearr_36428_37672[(2)] = inst_36354);

(statearr_36428_37672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (5))){
var inst_36365 = (state_36381[(2)]);
var state_36381__$1 = (function (){var statearr_36429 = state_36381;
(statearr_36429[(13)] = inst_36365);

return statearr_36429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36381__$1,(13),dchan);
} else {
if((state_val_36382 === (14))){
var inst_36370 = cljs.core.async.close_BANG_(out);
var state_36381__$1 = state_36381;
var statearr_36430_37673 = state_36381__$1;
(statearr_36430_37673[(2)] = inst_36370);

(statearr_36430_37673[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (16))){
var inst_36377 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36432_37678 = state_36381__$1;
(statearr_36432_37678[(2)] = inst_36377);

(statearr_36432_37678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (10))){
var inst_36334 = (state_36381[(7)]);
var inst_36358 = (state_36381[(2)]);
var inst_36359 = (inst_36334 + (1));
var inst_36334__$1 = inst_36359;
var state_36381__$1 = (function (){var statearr_36433 = state_36381;
(statearr_36433[(14)] = inst_36358);

(statearr_36433[(7)] = inst_36334__$1);

return statearr_36433;
})();
var statearr_36434_37683 = state_36381__$1;
(statearr_36434_37683[(2)] = null);

(statearr_36434_37683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (8))){
var inst_36363 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36435_37684 = state_36381__$1;
(statearr_36435_37684[(2)] = inst_36363);

(statearr_36435_37684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34648__auto__ = null;
var cljs$core$async$state_machine__34648__auto____0 = (function (){
var statearr_36436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36436[(0)] = cljs$core$async$state_machine__34648__auto__);

(statearr_36436[(1)] = (1));

return statearr_36436;
});
var cljs$core$async$state_machine__34648__auto____1 = (function (state_36381){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_36381);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e36441){var ex__34651__auto__ = e36441;
var statearr_36442_37685 = state_36381;
(statearr_36442_37685[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_36381[(4)]))){
var statearr_36446_37689 = state_36381;
(statearr_36446_37689[(1)] = cljs.core.first((state_36381[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37690 = state_36381;
state_36381 = G__37690;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$state_machine__34648__auto__ = function(state_36381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34648__auto____1.call(this,state_36381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34648__auto____0;
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34648__auto____1;
return cljs$core$async$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_36448 = f__34882__auto__();
(statearr_36448[(6)] = c__34881__auto___37639);

return statearr_36448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36455 = arguments.length;
switch (G__36455) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34881__auto___37697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_36491){
var state_val_36492 = (state_36491[(1)]);
if((state_val_36492 === (7))){
var inst_36469 = (state_36491[(7)]);
var inst_36471 = (state_36491[(8)]);
var inst_36469__$1 = (state_36491[(2)]);
var inst_36471__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36469__$1,(0),null);
var inst_36472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36469__$1,(1),null);
var inst_36473 = (inst_36471__$1 == null);
var state_36491__$1 = (function (){var statearr_36497 = state_36491;
(statearr_36497[(7)] = inst_36469__$1);

(statearr_36497[(8)] = inst_36471__$1);

(statearr_36497[(9)] = inst_36472);

return statearr_36497;
})();
if(cljs.core.truth_(inst_36473)){
var statearr_36498_37706 = state_36491__$1;
(statearr_36498_37706[(1)] = (8));

} else {
var statearr_36499_37708 = state_36491__$1;
(statearr_36499_37708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (1))){
var inst_36456 = cljs.core.vec(chs);
var inst_36457 = inst_36456;
var state_36491__$1 = (function (){var statearr_36500 = state_36491;
(statearr_36500[(10)] = inst_36457);

return statearr_36500;
})();
var statearr_36502_37712 = state_36491__$1;
(statearr_36502_37712[(2)] = null);

(statearr_36502_37712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (4))){
var inst_36457 = (state_36491[(10)]);
var state_36491__$1 = state_36491;
return cljs.core.async.ioc_alts_BANG_(state_36491__$1,(7),inst_36457);
} else {
if((state_val_36492 === (6))){
var inst_36487 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36503_37713 = state_36491__$1;
(statearr_36503_37713[(2)] = inst_36487);

(statearr_36503_37713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (3))){
var inst_36489 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36491__$1,inst_36489);
} else {
if((state_val_36492 === (2))){
var inst_36457 = (state_36491[(10)]);
var inst_36462 = cljs.core.count(inst_36457);
var inst_36463 = (inst_36462 > (0));
var state_36491__$1 = state_36491;
if(cljs.core.truth_(inst_36463)){
var statearr_36505_37715 = state_36491__$1;
(statearr_36505_37715[(1)] = (4));

} else {
var statearr_36506_37716 = state_36491__$1;
(statearr_36506_37716[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (11))){
var inst_36457 = (state_36491[(10)]);
var inst_36480 = (state_36491[(2)]);
var tmp36504 = inst_36457;
var inst_36457__$1 = tmp36504;
var state_36491__$1 = (function (){var statearr_36511 = state_36491;
(statearr_36511[(11)] = inst_36480);

(statearr_36511[(10)] = inst_36457__$1);

return statearr_36511;
})();
var statearr_36512_37720 = state_36491__$1;
(statearr_36512_37720[(2)] = null);

(statearr_36512_37720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (9))){
var inst_36471 = (state_36491[(8)]);
var state_36491__$1 = state_36491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36491__$1,(11),out,inst_36471);
} else {
if((state_val_36492 === (5))){
var inst_36485 = cljs.core.async.close_BANG_(out);
var state_36491__$1 = state_36491;
var statearr_36520_37722 = state_36491__$1;
(statearr_36520_37722[(2)] = inst_36485);

(statearr_36520_37722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (10))){
var inst_36483 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36522_37723 = state_36491__$1;
(statearr_36522_37723[(2)] = inst_36483);

(statearr_36522_37723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (8))){
var inst_36457 = (state_36491[(10)]);
var inst_36469 = (state_36491[(7)]);
var inst_36471 = (state_36491[(8)]);
var inst_36472 = (state_36491[(9)]);
var inst_36475 = (function (){var cs = inst_36457;
var vec__36465 = inst_36469;
var v = inst_36471;
var c = inst_36472;
return (function (p1__36449_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36449_SHARP_);
});
})();
var inst_36476 = cljs.core.filterv(inst_36475,inst_36457);
var inst_36457__$1 = inst_36476;
var state_36491__$1 = (function (){var statearr_36526 = state_36491;
(statearr_36526[(10)] = inst_36457__$1);

return statearr_36526;
})();
var statearr_36527_37725 = state_36491__$1;
(statearr_36527_37725[(2)] = null);

(statearr_36527_37725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34648__auto__ = null;
var cljs$core$async$state_machine__34648__auto____0 = (function (){
var statearr_36529 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36529[(0)] = cljs$core$async$state_machine__34648__auto__);

(statearr_36529[(1)] = (1));

return statearr_36529;
});
var cljs$core$async$state_machine__34648__auto____1 = (function (state_36491){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_36491);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e36530){var ex__34651__auto__ = e36530;
var statearr_36531_37726 = state_36491;
(statearr_36531_37726[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_36491[(4)]))){
var statearr_36532_37729 = state_36491;
(statearr_36532_37729[(1)] = cljs.core.first((state_36491[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37730 = state_36491;
state_36491 = G__37730;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$state_machine__34648__auto__ = function(state_36491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34648__auto____1.call(this,state_36491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34648__auto____0;
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34648__auto____1;
return cljs$core$async$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_36537 = f__34882__auto__();
(statearr_36537[(6)] = c__34881__auto___37697);

return statearr_36537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36539 = arguments.length;
switch (G__36539) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34881__auto___37739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_36567){
var state_val_36568 = (state_36567[(1)]);
if((state_val_36568 === (7))){
var inst_36549 = (state_36567[(7)]);
var inst_36549__$1 = (state_36567[(2)]);
var inst_36550 = (inst_36549__$1 == null);
var inst_36551 = cljs.core.not(inst_36550);
var state_36567__$1 = (function (){var statearr_36570 = state_36567;
(statearr_36570[(7)] = inst_36549__$1);

return statearr_36570;
})();
if(inst_36551){
var statearr_36571_37741 = state_36567__$1;
(statearr_36571_37741[(1)] = (8));

} else {
var statearr_36572_37742 = state_36567__$1;
(statearr_36572_37742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (1))){
var inst_36544 = (0);
var state_36567__$1 = (function (){var statearr_36573 = state_36567;
(statearr_36573[(8)] = inst_36544);

return statearr_36573;
})();
var statearr_36574_37743 = state_36567__$1;
(statearr_36574_37743[(2)] = null);

(statearr_36574_37743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (4))){
var state_36567__$1 = state_36567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36567__$1,(7),ch);
} else {
if((state_val_36568 === (6))){
var inst_36562 = (state_36567[(2)]);
var state_36567__$1 = state_36567;
var statearr_36575_37744 = state_36567__$1;
(statearr_36575_37744[(2)] = inst_36562);

(statearr_36575_37744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (3))){
var inst_36564 = (state_36567[(2)]);
var inst_36565 = cljs.core.async.close_BANG_(out);
var state_36567__$1 = (function (){var statearr_36576 = state_36567;
(statearr_36576[(9)] = inst_36564);

return statearr_36576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36567__$1,inst_36565);
} else {
if((state_val_36568 === (2))){
var inst_36544 = (state_36567[(8)]);
var inst_36546 = (inst_36544 < n);
var state_36567__$1 = state_36567;
if(cljs.core.truth_(inst_36546)){
var statearr_36577_37745 = state_36567__$1;
(statearr_36577_37745[(1)] = (4));

} else {
var statearr_36578_37746 = state_36567__$1;
(statearr_36578_37746[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (11))){
var inst_36544 = (state_36567[(8)]);
var inst_36554 = (state_36567[(2)]);
var inst_36555 = (inst_36544 + (1));
var inst_36544__$1 = inst_36555;
var state_36567__$1 = (function (){var statearr_36580 = state_36567;
(statearr_36580[(10)] = inst_36554);

(statearr_36580[(8)] = inst_36544__$1);

return statearr_36580;
})();
var statearr_36582_37747 = state_36567__$1;
(statearr_36582_37747[(2)] = null);

(statearr_36582_37747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (9))){
var state_36567__$1 = state_36567;
var statearr_36583_37750 = state_36567__$1;
(statearr_36583_37750[(2)] = null);

(statearr_36583_37750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (5))){
var state_36567__$1 = state_36567;
var statearr_36584_37751 = state_36567__$1;
(statearr_36584_37751[(2)] = null);

(statearr_36584_37751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (10))){
var inst_36559 = (state_36567[(2)]);
var state_36567__$1 = state_36567;
var statearr_36585_37756 = state_36567__$1;
(statearr_36585_37756[(2)] = inst_36559);

(statearr_36585_37756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (8))){
var inst_36549 = (state_36567[(7)]);
var state_36567__$1 = state_36567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36567__$1,(11),out,inst_36549);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34648__auto__ = null;
var cljs$core$async$state_machine__34648__auto____0 = (function (){
var statearr_36586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36586[(0)] = cljs$core$async$state_machine__34648__auto__);

(statearr_36586[(1)] = (1));

return statearr_36586;
});
var cljs$core$async$state_machine__34648__auto____1 = (function (state_36567){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_36567);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e36587){var ex__34651__auto__ = e36587;
var statearr_36588_37759 = state_36567;
(statearr_36588_37759[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_36567[(4)]))){
var statearr_36589_37760 = state_36567;
(statearr_36589_37760[(1)] = cljs.core.first((state_36567[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37761 = state_36567;
state_36567 = G__37761;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$state_machine__34648__auto__ = function(state_36567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34648__auto____1.call(this,state_36567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34648__auto____0;
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34648__auto____1;
return cljs$core$async$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_36590 = f__34882__auto__();
(statearr_36590[(6)] = c__34881__auto___37739);

return statearr_36590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36595 = (function (f,ch,meta36593,_,fn1,meta36596){
this.f = f;
this.ch = ch;
this.meta36593 = meta36593;
this._ = _;
this.fn1 = fn1;
this.meta36596 = meta36596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36597,meta36596__$1){
var self__ = this;
var _36597__$1 = this;
return (new cljs.core.async.t_cljs$core$async36595(self__.f,self__.ch,self__.meta36593,self__._,self__.fn1,meta36596__$1));
}));

(cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36597){
var self__ = this;
var _36597__$1 = this;
return self__.meta36596;
}));

(cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36591_SHARP_){
var G__36598 = (((p1__36591_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36591_SHARP_) : self__.f.call(null,p1__36591_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36598) : f1.call(null,G__36598));
});
}));

(cljs.core.async.t_cljs$core$async36595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36593","meta36593",34582923,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36592","cljs.core.async/t_cljs$core$async36592",-1574803641,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36596","meta36596",-225893379,null)], null);
}));

(cljs.core.async.t_cljs$core$async36595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36595");

(cljs.core.async.t_cljs$core$async36595.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36595.
 */
cljs.core.async.__GT_t_cljs$core$async36595 = (function cljs$core$async$__GT_t_cljs$core$async36595(f,ch,meta36593,_,fn1,meta36596){
return (new cljs.core.async.t_cljs$core$async36595(f,ch,meta36593,_,fn1,meta36596));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36592 = (function (f,ch,meta36593){
this.f = f;
this.ch = ch;
this.meta36593 = meta36593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36594,meta36593__$1){
var self__ = this;
var _36594__$1 = this;
return (new cljs.core.async.t_cljs$core$async36592(self__.f,self__.ch,meta36593__$1));
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36594){
var self__ = this;
var _36594__$1 = this;
return self__.meta36593;
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async36595(self__.f,self__.ch,self__.meta36593,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36599 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36599) : self__.f.call(null,G__36599));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36593","meta36593",34582923,null)], null);
}));

(cljs.core.async.t_cljs$core$async36592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36592");

(cljs.core.async.t_cljs$core$async36592.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36592.
 */
cljs.core.async.__GT_t_cljs$core$async36592 = (function cljs$core$async$__GT_t_cljs$core$async36592(f,ch,meta36593){
return (new cljs.core.async.t_cljs$core$async36592(f,ch,meta36593));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36592(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36602 = (function (f,ch,meta36603){
this.f = f;
this.ch = ch;
this.meta36603 = meta36603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36604,meta36603__$1){
var self__ = this;
var _36604__$1 = this;
return (new cljs.core.async.t_cljs$core$async36602(self__.f,self__.ch,meta36603__$1));
}));

(cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36604){
var self__ = this;
var _36604__$1 = this;
return self__.meta36603;
}));

(cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36603","meta36603",-1979221267,null)], null);
}));

(cljs.core.async.t_cljs$core$async36602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36602");

(cljs.core.async.t_cljs$core$async36602.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36602.
 */
cljs.core.async.__GT_t_cljs$core$async36602 = (function cljs$core$async$__GT_t_cljs$core$async36602(f,ch,meta36603){
return (new cljs.core.async.t_cljs$core$async36602(f,ch,meta36603));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36602(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36607 = (function (p,ch,meta36608){
this.p = p;
this.ch = ch;
this.meta36608 = meta36608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36609,meta36608__$1){
var self__ = this;
var _36609__$1 = this;
return (new cljs.core.async.t_cljs$core$async36607(self__.p,self__.ch,meta36608__$1));
}));

(cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36609){
var self__ = this;
var _36609__$1 = this;
return self__.meta36608;
}));

(cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36608","meta36608",90520288,null)], null);
}));

(cljs.core.async.t_cljs$core$async36607.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36607");

(cljs.core.async.t_cljs$core$async36607.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36607");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36607.
 */
cljs.core.async.__GT_t_cljs$core$async36607 = (function cljs$core$async$__GT_t_cljs$core$async36607(p,ch,meta36608){
return (new cljs.core.async.t_cljs$core$async36607(p,ch,meta36608));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async36607(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36613 = arguments.length;
switch (G__36613) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34881__auto___37779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_36634){
var state_val_36635 = (state_36634[(1)]);
if((state_val_36635 === (7))){
var inst_36630 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
var statearr_36636_37780 = state_36634__$1;
(statearr_36636_37780[(2)] = inst_36630);

(statearr_36636_37780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (1))){
var state_36634__$1 = state_36634;
var statearr_36637_37781 = state_36634__$1;
(statearr_36637_37781[(2)] = null);

(statearr_36637_37781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (4))){
var inst_36616 = (state_36634[(7)]);
var inst_36616__$1 = (state_36634[(2)]);
var inst_36617 = (inst_36616__$1 == null);
var state_36634__$1 = (function (){var statearr_36638 = state_36634;
(statearr_36638[(7)] = inst_36616__$1);

return statearr_36638;
})();
if(cljs.core.truth_(inst_36617)){
var statearr_36639_37783 = state_36634__$1;
(statearr_36639_37783[(1)] = (5));

} else {
var statearr_36640_37784 = state_36634__$1;
(statearr_36640_37784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (6))){
var inst_36616 = (state_36634[(7)]);
var inst_36621 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36616) : p.call(null,inst_36616));
var state_36634__$1 = state_36634;
if(cljs.core.truth_(inst_36621)){
var statearr_36641_37785 = state_36634__$1;
(statearr_36641_37785[(1)] = (8));

} else {
var statearr_36642_37786 = state_36634__$1;
(statearr_36642_37786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (3))){
var inst_36632 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36634__$1,inst_36632);
} else {
if((state_val_36635 === (2))){
var state_36634__$1 = state_36634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36634__$1,(4),ch);
} else {
if((state_val_36635 === (11))){
var inst_36624 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
var statearr_36643_37787 = state_36634__$1;
(statearr_36643_37787[(2)] = inst_36624);

(statearr_36643_37787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (9))){
var state_36634__$1 = state_36634;
var statearr_36644_37788 = state_36634__$1;
(statearr_36644_37788[(2)] = null);

(statearr_36644_37788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (5))){
var inst_36619 = cljs.core.async.close_BANG_(out);
var state_36634__$1 = state_36634;
var statearr_36645_37795 = state_36634__$1;
(statearr_36645_37795[(2)] = inst_36619);

(statearr_36645_37795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (10))){
var inst_36627 = (state_36634[(2)]);
var state_36634__$1 = (function (){var statearr_36646 = state_36634;
(statearr_36646[(8)] = inst_36627);

return statearr_36646;
})();
var statearr_36647_37796 = state_36634__$1;
(statearr_36647_37796[(2)] = null);

(statearr_36647_37796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (8))){
var inst_36616 = (state_36634[(7)]);
var state_36634__$1 = state_36634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36634__$1,(11),out,inst_36616);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34648__auto__ = null;
var cljs$core$async$state_machine__34648__auto____0 = (function (){
var statearr_36649 = [null,null,null,null,null,null,null,null,null];
(statearr_36649[(0)] = cljs$core$async$state_machine__34648__auto__);

(statearr_36649[(1)] = (1));

return statearr_36649;
});
var cljs$core$async$state_machine__34648__auto____1 = (function (state_36634){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_36634);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e36651){var ex__34651__auto__ = e36651;
var statearr_36652_37800 = state_36634;
(statearr_36652_37800[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_36634[(4)]))){
var statearr_36653_37803 = state_36634;
(statearr_36653_37803[(1)] = cljs.core.first((state_36634[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37806 = state_36634;
state_36634 = G__37806;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$state_machine__34648__auto__ = function(state_36634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34648__auto____1.call(this,state_36634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34648__auto____0;
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34648__auto____1;
return cljs$core$async$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_36654 = f__34882__auto__();
(statearr_36654[(6)] = c__34881__auto___37779);

return statearr_36654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36656 = arguments.length;
switch (G__36656) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34881__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_36724){
var state_val_36725 = (state_36724[(1)]);
if((state_val_36725 === (7))){
var inst_36720 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36728_37814 = state_36724__$1;
(statearr_36728_37814[(2)] = inst_36720);

(statearr_36728_37814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (20))){
var inst_36689 = (state_36724[(7)]);
var inst_36701 = (state_36724[(2)]);
var inst_36702 = cljs.core.next(inst_36689);
var inst_36674 = inst_36702;
var inst_36675 = null;
var inst_36676 = (0);
var inst_36677 = (0);
var state_36724__$1 = (function (){var statearr_36730 = state_36724;
(statearr_36730[(8)] = inst_36701);

(statearr_36730[(9)] = inst_36674);

(statearr_36730[(10)] = inst_36675);

(statearr_36730[(11)] = inst_36676);

(statearr_36730[(12)] = inst_36677);

return statearr_36730;
})();
var statearr_36731_37816 = state_36724__$1;
(statearr_36731_37816[(2)] = null);

(statearr_36731_37816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (1))){
var state_36724__$1 = state_36724;
var statearr_36732_37823 = state_36724__$1;
(statearr_36732_37823[(2)] = null);

(statearr_36732_37823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (4))){
var inst_36663 = (state_36724[(13)]);
var inst_36663__$1 = (state_36724[(2)]);
var inst_36664 = (inst_36663__$1 == null);
var state_36724__$1 = (function (){var statearr_36733 = state_36724;
(statearr_36733[(13)] = inst_36663__$1);

return statearr_36733;
})();
if(cljs.core.truth_(inst_36664)){
var statearr_36734_37827 = state_36724__$1;
(statearr_36734_37827[(1)] = (5));

} else {
var statearr_36735_37828 = state_36724__$1;
(statearr_36735_37828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (15))){
var state_36724__$1 = state_36724;
var statearr_36739_37829 = state_36724__$1;
(statearr_36739_37829[(2)] = null);

(statearr_36739_37829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (21))){
var state_36724__$1 = state_36724;
var statearr_36743_37830 = state_36724__$1;
(statearr_36743_37830[(2)] = null);

(statearr_36743_37830[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (13))){
var inst_36677 = (state_36724[(12)]);
var inst_36674 = (state_36724[(9)]);
var inst_36675 = (state_36724[(10)]);
var inst_36676 = (state_36724[(11)]);
var inst_36685 = (state_36724[(2)]);
var inst_36686 = (inst_36677 + (1));
var tmp36736 = inst_36674;
var tmp36737 = inst_36676;
var tmp36738 = inst_36675;
var inst_36674__$1 = tmp36736;
var inst_36675__$1 = tmp36738;
var inst_36676__$1 = tmp36737;
var inst_36677__$1 = inst_36686;
var state_36724__$1 = (function (){var statearr_36744 = state_36724;
(statearr_36744[(14)] = inst_36685);

(statearr_36744[(9)] = inst_36674__$1);

(statearr_36744[(10)] = inst_36675__$1);

(statearr_36744[(11)] = inst_36676__$1);

(statearr_36744[(12)] = inst_36677__$1);

return statearr_36744;
})();
var statearr_36745_37832 = state_36724__$1;
(statearr_36745_37832[(2)] = null);

(statearr_36745_37832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (22))){
var state_36724__$1 = state_36724;
var statearr_36746_37833 = state_36724__$1;
(statearr_36746_37833[(2)] = null);

(statearr_36746_37833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (6))){
var inst_36663 = (state_36724[(13)]);
var inst_36672 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36663) : f.call(null,inst_36663));
var inst_36673 = cljs.core.seq(inst_36672);
var inst_36674 = inst_36673;
var inst_36675 = null;
var inst_36676 = (0);
var inst_36677 = (0);
var state_36724__$1 = (function (){var statearr_36747 = state_36724;
(statearr_36747[(9)] = inst_36674);

(statearr_36747[(10)] = inst_36675);

(statearr_36747[(11)] = inst_36676);

(statearr_36747[(12)] = inst_36677);

return statearr_36747;
})();
var statearr_36748_37835 = state_36724__$1;
(statearr_36748_37835[(2)] = null);

(statearr_36748_37835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (17))){
var inst_36689 = (state_36724[(7)]);
var inst_36693 = cljs.core.chunk_first(inst_36689);
var inst_36694 = cljs.core.chunk_rest(inst_36689);
var inst_36695 = cljs.core.count(inst_36693);
var inst_36674 = inst_36694;
var inst_36675 = inst_36693;
var inst_36676 = inst_36695;
var inst_36677 = (0);
var state_36724__$1 = (function (){var statearr_36756 = state_36724;
(statearr_36756[(9)] = inst_36674);

(statearr_36756[(10)] = inst_36675);

(statearr_36756[(11)] = inst_36676);

(statearr_36756[(12)] = inst_36677);

return statearr_36756;
})();
var statearr_36763_37837 = state_36724__$1;
(statearr_36763_37837[(2)] = null);

(statearr_36763_37837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (3))){
var inst_36722 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36724__$1,inst_36722);
} else {
if((state_val_36725 === (12))){
var inst_36710 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36770_37838 = state_36724__$1;
(statearr_36770_37838[(2)] = inst_36710);

(statearr_36770_37838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (2))){
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36724__$1,(4),in$);
} else {
if((state_val_36725 === (23))){
var inst_36718 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36771_37844 = state_36724__$1;
(statearr_36771_37844[(2)] = inst_36718);

(statearr_36771_37844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (19))){
var inst_36705 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36772_37845 = state_36724__$1;
(statearr_36772_37845[(2)] = inst_36705);

(statearr_36772_37845[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (11))){
var inst_36674 = (state_36724[(9)]);
var inst_36689 = (state_36724[(7)]);
var inst_36689__$1 = cljs.core.seq(inst_36674);
var state_36724__$1 = (function (){var statearr_36773 = state_36724;
(statearr_36773[(7)] = inst_36689__$1);

return statearr_36773;
})();
if(inst_36689__$1){
var statearr_36774_37851 = state_36724__$1;
(statearr_36774_37851[(1)] = (14));

} else {
var statearr_36779_37852 = state_36724__$1;
(statearr_36779_37852[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (9))){
var inst_36712 = (state_36724[(2)]);
var inst_36713 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36724__$1 = (function (){var statearr_36786 = state_36724;
(statearr_36786[(15)] = inst_36712);

return statearr_36786;
})();
if(cljs.core.truth_(inst_36713)){
var statearr_36787_37853 = state_36724__$1;
(statearr_36787_37853[(1)] = (21));

} else {
var statearr_36788_37854 = state_36724__$1;
(statearr_36788_37854[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (5))){
var inst_36666 = cljs.core.async.close_BANG_(out);
var state_36724__$1 = state_36724;
var statearr_36789_37855 = state_36724__$1;
(statearr_36789_37855[(2)] = inst_36666);

(statearr_36789_37855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (14))){
var inst_36689 = (state_36724[(7)]);
var inst_36691 = cljs.core.chunked_seq_QMARK_(inst_36689);
var state_36724__$1 = state_36724;
if(inst_36691){
var statearr_36793_37856 = state_36724__$1;
(statearr_36793_37856[(1)] = (17));

} else {
var statearr_36794_37857 = state_36724__$1;
(statearr_36794_37857[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (16))){
var inst_36708 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36795_37858 = state_36724__$1;
(statearr_36795_37858[(2)] = inst_36708);

(statearr_36795_37858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (10))){
var inst_36675 = (state_36724[(10)]);
var inst_36677 = (state_36724[(12)]);
var inst_36683 = cljs.core._nth(inst_36675,inst_36677);
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36724__$1,(13),out,inst_36683);
} else {
if((state_val_36725 === (18))){
var inst_36689 = (state_36724[(7)]);
var inst_36698 = cljs.core.first(inst_36689);
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36724__$1,(20),out,inst_36698);
} else {
if((state_val_36725 === (8))){
var inst_36677 = (state_36724[(12)]);
var inst_36676 = (state_36724[(11)]);
var inst_36679 = (inst_36677 < inst_36676);
var inst_36680 = inst_36679;
var state_36724__$1 = state_36724;
if(cljs.core.truth_(inst_36680)){
var statearr_36796_37863 = state_36724__$1;
(statearr_36796_37863[(1)] = (10));

} else {
var statearr_36797_37866 = state_36724__$1;
(statearr_36797_37866[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34648__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34648__auto____0 = (function (){
var statearr_36798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36798[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34648__auto__);

(statearr_36798[(1)] = (1));

return statearr_36798;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34648__auto____1 = (function (state_36724){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_36724);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e36800){var ex__34651__auto__ = e36800;
var statearr_36804_37867 = state_36724;
(statearr_36804_37867[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_36724[(4)]))){
var statearr_36805_37868 = state_36724;
(statearr_36805_37868[(1)] = cljs.core.first((state_36724[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37870 = state_36724;
state_36724 = G__37870;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34648__auto__ = function(state_36724){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34648__auto____1.call(this,state_36724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34648__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34648__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_36806 = f__34882__auto__();
(statearr_36806[(6)] = c__34881__auto__);

return statearr_36806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));

return c__34881__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36808 = arguments.length;
switch (G__36808) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36814 = arguments.length;
switch (G__36814) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36819 = arguments.length;
switch (G__36819) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34881__auto___37878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_36844){
var state_val_36845 = (state_36844[(1)]);
if((state_val_36845 === (7))){
var inst_36839 = (state_36844[(2)]);
var state_36844__$1 = state_36844;
var statearr_36846_37879 = state_36844__$1;
(statearr_36846_37879[(2)] = inst_36839);

(statearr_36846_37879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (1))){
var inst_36821 = null;
var state_36844__$1 = (function (){var statearr_36847 = state_36844;
(statearr_36847[(7)] = inst_36821);

return statearr_36847;
})();
var statearr_36848_37881 = state_36844__$1;
(statearr_36848_37881[(2)] = null);

(statearr_36848_37881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (4))){
var inst_36824 = (state_36844[(8)]);
var inst_36824__$1 = (state_36844[(2)]);
var inst_36825 = (inst_36824__$1 == null);
var inst_36826 = cljs.core.not(inst_36825);
var state_36844__$1 = (function (){var statearr_36851 = state_36844;
(statearr_36851[(8)] = inst_36824__$1);

return statearr_36851;
})();
if(inst_36826){
var statearr_36852_37882 = state_36844__$1;
(statearr_36852_37882[(1)] = (5));

} else {
var statearr_36853_37883 = state_36844__$1;
(statearr_36853_37883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (6))){
var state_36844__$1 = state_36844;
var statearr_36854_37884 = state_36844__$1;
(statearr_36854_37884[(2)] = null);

(statearr_36854_37884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (3))){
var inst_36841 = (state_36844[(2)]);
var inst_36842 = cljs.core.async.close_BANG_(out);
var state_36844__$1 = (function (){var statearr_36855 = state_36844;
(statearr_36855[(9)] = inst_36841);

return statearr_36855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36844__$1,inst_36842);
} else {
if((state_val_36845 === (2))){
var state_36844__$1 = state_36844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36844__$1,(4),ch);
} else {
if((state_val_36845 === (11))){
var inst_36824 = (state_36844[(8)]);
var inst_36833 = (state_36844[(2)]);
var inst_36821 = inst_36824;
var state_36844__$1 = (function (){var statearr_36858 = state_36844;
(statearr_36858[(10)] = inst_36833);

(statearr_36858[(7)] = inst_36821);

return statearr_36858;
})();
var statearr_36859_37890 = state_36844__$1;
(statearr_36859_37890[(2)] = null);

(statearr_36859_37890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (9))){
var inst_36824 = (state_36844[(8)]);
var state_36844__$1 = state_36844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36844__$1,(11),out,inst_36824);
} else {
if((state_val_36845 === (5))){
var inst_36824 = (state_36844[(8)]);
var inst_36821 = (state_36844[(7)]);
var inst_36828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36824,inst_36821);
var state_36844__$1 = state_36844;
if(inst_36828){
var statearr_36864_37891 = state_36844__$1;
(statearr_36864_37891[(1)] = (8));

} else {
var statearr_36865_37892 = state_36844__$1;
(statearr_36865_37892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (10))){
var inst_36836 = (state_36844[(2)]);
var state_36844__$1 = state_36844;
var statearr_36866_37893 = state_36844__$1;
(statearr_36866_37893[(2)] = inst_36836);

(statearr_36866_37893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (8))){
var inst_36821 = (state_36844[(7)]);
var tmp36863 = inst_36821;
var inst_36821__$1 = tmp36863;
var state_36844__$1 = (function (){var statearr_36867 = state_36844;
(statearr_36867[(7)] = inst_36821__$1);

return statearr_36867;
})();
var statearr_36868_37894 = state_36844__$1;
(statearr_36868_37894[(2)] = null);

(statearr_36868_37894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34648__auto__ = null;
var cljs$core$async$state_machine__34648__auto____0 = (function (){
var statearr_36869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36869[(0)] = cljs$core$async$state_machine__34648__auto__);

(statearr_36869[(1)] = (1));

return statearr_36869;
});
var cljs$core$async$state_machine__34648__auto____1 = (function (state_36844){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_36844);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e36870){var ex__34651__auto__ = e36870;
var statearr_36871_37895 = state_36844;
(statearr_36871_37895[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_36844[(4)]))){
var statearr_36872_37896 = state_36844;
(statearr_36872_37896[(1)] = cljs.core.first((state_36844[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37897 = state_36844;
state_36844 = G__37897;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$state_machine__34648__auto__ = function(state_36844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34648__auto____1.call(this,state_36844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34648__auto____0;
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34648__auto____1;
return cljs$core$async$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_36873 = f__34882__auto__();
(statearr_36873[(6)] = c__34881__auto___37878);

return statearr_36873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36875 = arguments.length;
switch (G__36875) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34881__auto___37903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_36917){
var state_val_36918 = (state_36917[(1)]);
if((state_val_36918 === (7))){
var inst_36913 = (state_36917[(2)]);
var state_36917__$1 = state_36917;
var statearr_36921_37904 = state_36917__$1;
(statearr_36921_37904[(2)] = inst_36913);

(statearr_36921_37904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36918 === (1))){
var inst_36876 = (new Array(n));
var inst_36877 = inst_36876;
var inst_36878 = (0);
var state_36917__$1 = (function (){var statearr_36923 = state_36917;
(statearr_36923[(7)] = inst_36877);

(statearr_36923[(8)] = inst_36878);

return statearr_36923;
})();
var statearr_36924_37905 = state_36917__$1;
(statearr_36924_37905[(2)] = null);

(statearr_36924_37905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36918 === (4))){
var inst_36881 = (state_36917[(9)]);
var inst_36881__$1 = (state_36917[(2)]);
var inst_36882 = (inst_36881__$1 == null);
var inst_36883 = cljs.core.not(inst_36882);
var state_36917__$1 = (function (){var statearr_36925 = state_36917;
(statearr_36925[(9)] = inst_36881__$1);

return statearr_36925;
})();
if(inst_36883){
var statearr_36926_37906 = state_36917__$1;
(statearr_36926_37906[(1)] = (5));

} else {
var statearr_36927_37907 = state_36917__$1;
(statearr_36927_37907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36918 === (15))){
var inst_36905 = (state_36917[(2)]);
var state_36917__$1 = state_36917;
var statearr_36930_37909 = state_36917__$1;
(statearr_36930_37909[(2)] = inst_36905);

(statearr_36930_37909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36918 === (13))){
var state_36917__$1 = state_36917;
var statearr_36931_37910 = state_36917__$1;
(statearr_36931_37910[(2)] = null);

(statearr_36931_37910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36918 === (6))){
var inst_36878 = (state_36917[(8)]);
var inst_36899 = (inst_36878 > (0));
var state_36917__$1 = state_36917;
if(cljs.core.truth_(inst_36899)){
var statearr_36935_37911 = state_36917__$1;
(statearr_36935_37911[(1)] = (12));

} else {
var statearr_36936_37915 = state_36917__$1;
(statearr_36936_37915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36918 === (3))){
var inst_36915 = (state_36917[(2)]);
var state_36917__$1 = state_36917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36917__$1,inst_36915);
} else {
if((state_val_36918 === (12))){
var inst_36877 = (state_36917[(7)]);
var inst_36903 = cljs.core.vec(inst_36877);
var state_36917__$1 = state_36917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36917__$1,(15),out,inst_36903);
} else {
if((state_val_36918 === (2))){
var state_36917__$1 = state_36917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36917__$1,(4),ch);
} else {
if((state_val_36918 === (11))){
var inst_36893 = (state_36917[(2)]);
var inst_36894 = (new Array(n));
var inst_36877 = inst_36894;
var inst_36878 = (0);
var state_36917__$1 = (function (){var statearr_36937 = state_36917;
(statearr_36937[(10)] = inst_36893);

(statearr_36937[(7)] = inst_36877);

(statearr_36937[(8)] = inst_36878);

return statearr_36937;
})();
var statearr_36938_37926 = state_36917__$1;
(statearr_36938_37926[(2)] = null);

(statearr_36938_37926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36918 === (9))){
var inst_36877 = (state_36917[(7)]);
var inst_36891 = cljs.core.vec(inst_36877);
var state_36917__$1 = state_36917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36917__$1,(11),out,inst_36891);
} else {
if((state_val_36918 === (5))){
var inst_36877 = (state_36917[(7)]);
var inst_36878 = (state_36917[(8)]);
var inst_36881 = (state_36917[(9)]);
var inst_36886 = (state_36917[(11)]);
var inst_36885 = (inst_36877[inst_36878] = inst_36881);
var inst_36886__$1 = (inst_36878 + (1));
var inst_36887 = (inst_36886__$1 < n);
var state_36917__$1 = (function (){var statearr_36939 = state_36917;
(statearr_36939[(12)] = inst_36885);

(statearr_36939[(11)] = inst_36886__$1);

return statearr_36939;
})();
if(cljs.core.truth_(inst_36887)){
var statearr_36940_37927 = state_36917__$1;
(statearr_36940_37927[(1)] = (8));

} else {
var statearr_36941_37928 = state_36917__$1;
(statearr_36941_37928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36918 === (14))){
var inst_36909 = (state_36917[(2)]);
var inst_36911 = cljs.core.async.close_BANG_(out);
var state_36917__$1 = (function (){var statearr_36943 = state_36917;
(statearr_36943[(13)] = inst_36909);

return statearr_36943;
})();
var statearr_36944_37929 = state_36917__$1;
(statearr_36944_37929[(2)] = inst_36911);

(statearr_36944_37929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36918 === (10))){
var inst_36897 = (state_36917[(2)]);
var state_36917__$1 = state_36917;
var statearr_36949_37930 = state_36917__$1;
(statearr_36949_37930[(2)] = inst_36897);

(statearr_36949_37930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36918 === (8))){
var inst_36877 = (state_36917[(7)]);
var inst_36886 = (state_36917[(11)]);
var tmp36942 = inst_36877;
var inst_36877__$1 = tmp36942;
var inst_36878 = inst_36886;
var state_36917__$1 = (function (){var statearr_36950 = state_36917;
(statearr_36950[(7)] = inst_36877__$1);

(statearr_36950[(8)] = inst_36878);

return statearr_36950;
})();
var statearr_36951_37931 = state_36917__$1;
(statearr_36951_37931[(2)] = null);

(statearr_36951_37931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34648__auto__ = null;
var cljs$core$async$state_machine__34648__auto____0 = (function (){
var statearr_36956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36956[(0)] = cljs$core$async$state_machine__34648__auto__);

(statearr_36956[(1)] = (1));

return statearr_36956;
});
var cljs$core$async$state_machine__34648__auto____1 = (function (state_36917){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_36917);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e36957){var ex__34651__auto__ = e36957;
var statearr_36958_37932 = state_36917;
(statearr_36958_37932[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_36917[(4)]))){
var statearr_36959_37933 = state_36917;
(statearr_36959_37933[(1)] = cljs.core.first((state_36917[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37934 = state_36917;
state_36917 = G__37934;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$state_machine__34648__auto__ = function(state_36917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34648__auto____1.call(this,state_36917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34648__auto____0;
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34648__auto____1;
return cljs$core$async$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_36960 = f__34882__auto__();
(statearr_36960[(6)] = c__34881__auto___37903);

return statearr_36960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36963 = arguments.length;
switch (G__36963) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34881__auto___37939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34882__auto__ = (function (){var switch__34647__auto__ = (function (state_37012){
var state_val_37013 = (state_37012[(1)]);
if((state_val_37013 === (7))){
var inst_37008 = (state_37012[(2)]);
var state_37012__$1 = state_37012;
var statearr_37014_37940 = state_37012__$1;
(statearr_37014_37940[(2)] = inst_37008);

(statearr_37014_37940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (1))){
var inst_36968 = [];
var inst_36969 = inst_36968;
var inst_36970 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37012__$1 = (function (){var statearr_37015 = state_37012;
(statearr_37015[(7)] = inst_36969);

(statearr_37015[(8)] = inst_36970);

return statearr_37015;
})();
var statearr_37016_37942 = state_37012__$1;
(statearr_37016_37942[(2)] = null);

(statearr_37016_37942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (4))){
var inst_36973 = (state_37012[(9)]);
var inst_36973__$1 = (state_37012[(2)]);
var inst_36974 = (inst_36973__$1 == null);
var inst_36975 = cljs.core.not(inst_36974);
var state_37012__$1 = (function (){var statearr_37017 = state_37012;
(statearr_37017[(9)] = inst_36973__$1);

return statearr_37017;
})();
if(inst_36975){
var statearr_37018_37943 = state_37012__$1;
(statearr_37018_37943[(1)] = (5));

} else {
var statearr_37019_37944 = state_37012__$1;
(statearr_37019_37944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (15))){
var inst_36969 = (state_37012[(7)]);
var inst_37000 = cljs.core.vec(inst_36969);
var state_37012__$1 = state_37012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37012__$1,(18),out,inst_37000);
} else {
if((state_val_37013 === (13))){
var inst_36995 = (state_37012[(2)]);
var state_37012__$1 = state_37012;
var statearr_37020_37945 = state_37012__$1;
(statearr_37020_37945[(2)] = inst_36995);

(statearr_37020_37945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (6))){
var inst_36969 = (state_37012[(7)]);
var inst_36997 = inst_36969.length;
var inst_36998 = (inst_36997 > (0));
var state_37012__$1 = state_37012;
if(cljs.core.truth_(inst_36998)){
var statearr_37021_37946 = state_37012__$1;
(statearr_37021_37946[(1)] = (15));

} else {
var statearr_37022_37947 = state_37012__$1;
(statearr_37022_37947[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (17))){
var inst_37005 = (state_37012[(2)]);
var inst_37006 = cljs.core.async.close_BANG_(out);
var state_37012__$1 = (function (){var statearr_37023 = state_37012;
(statearr_37023[(10)] = inst_37005);

return statearr_37023;
})();
var statearr_37024_37948 = state_37012__$1;
(statearr_37024_37948[(2)] = inst_37006);

(statearr_37024_37948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (3))){
var inst_37010 = (state_37012[(2)]);
var state_37012__$1 = state_37012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37012__$1,inst_37010);
} else {
if((state_val_37013 === (12))){
var inst_36969 = (state_37012[(7)]);
var inst_36988 = cljs.core.vec(inst_36969);
var state_37012__$1 = state_37012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37012__$1,(14),out,inst_36988);
} else {
if((state_val_37013 === (2))){
var state_37012__$1 = state_37012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37012__$1,(4),ch);
} else {
if((state_val_37013 === (11))){
var inst_36969 = (state_37012[(7)]);
var inst_36973 = (state_37012[(9)]);
var inst_36977 = (state_37012[(11)]);
var inst_36985 = inst_36969.push(inst_36973);
var tmp37025 = inst_36969;
var inst_36969__$1 = tmp37025;
var inst_36970 = inst_36977;
var state_37012__$1 = (function (){var statearr_37026 = state_37012;
(statearr_37026[(12)] = inst_36985);

(statearr_37026[(7)] = inst_36969__$1);

(statearr_37026[(8)] = inst_36970);

return statearr_37026;
})();
var statearr_37027_37949 = state_37012__$1;
(statearr_37027_37949[(2)] = null);

(statearr_37027_37949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (9))){
var inst_36970 = (state_37012[(8)]);
var inst_36981 = cljs.core.keyword_identical_QMARK_(inst_36970,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37012__$1 = state_37012;
var statearr_37028_37950 = state_37012__$1;
(statearr_37028_37950[(2)] = inst_36981);

(statearr_37028_37950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (5))){
var inst_36973 = (state_37012[(9)]);
var inst_36977 = (state_37012[(11)]);
var inst_36970 = (state_37012[(8)]);
var inst_36978 = (state_37012[(13)]);
var inst_36977__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36973) : f.call(null,inst_36973));
var inst_36978__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36977__$1,inst_36970);
var state_37012__$1 = (function (){var statearr_37029 = state_37012;
(statearr_37029[(11)] = inst_36977__$1);

(statearr_37029[(13)] = inst_36978__$1);

return statearr_37029;
})();
if(inst_36978__$1){
var statearr_37030_37951 = state_37012__$1;
(statearr_37030_37951[(1)] = (8));

} else {
var statearr_37031_37952 = state_37012__$1;
(statearr_37031_37952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (14))){
var inst_36973 = (state_37012[(9)]);
var inst_36977 = (state_37012[(11)]);
var inst_36990 = (state_37012[(2)]);
var inst_36991 = [];
var inst_36992 = inst_36991.push(inst_36973);
var inst_36969 = inst_36991;
var inst_36970 = inst_36977;
var state_37012__$1 = (function (){var statearr_37033 = state_37012;
(statearr_37033[(14)] = inst_36990);

(statearr_37033[(15)] = inst_36992);

(statearr_37033[(7)] = inst_36969);

(statearr_37033[(8)] = inst_36970);

return statearr_37033;
})();
var statearr_37034_37953 = state_37012__$1;
(statearr_37034_37953[(2)] = null);

(statearr_37034_37953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (16))){
var state_37012__$1 = state_37012;
var statearr_37035_37954 = state_37012__$1;
(statearr_37035_37954[(2)] = null);

(statearr_37035_37954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (10))){
var inst_36983 = (state_37012[(2)]);
var state_37012__$1 = state_37012;
if(cljs.core.truth_(inst_36983)){
var statearr_37036_37955 = state_37012__$1;
(statearr_37036_37955[(1)] = (11));

} else {
var statearr_37037_37956 = state_37012__$1;
(statearr_37037_37956[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (18))){
var inst_37002 = (state_37012[(2)]);
var state_37012__$1 = state_37012;
var statearr_37038_37957 = state_37012__$1;
(statearr_37038_37957[(2)] = inst_37002);

(statearr_37038_37957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37013 === (8))){
var inst_36978 = (state_37012[(13)]);
var state_37012__$1 = state_37012;
var statearr_37039_37958 = state_37012__$1;
(statearr_37039_37958[(2)] = inst_36978);

(statearr_37039_37958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34648__auto__ = null;
var cljs$core$async$state_machine__34648__auto____0 = (function (){
var statearr_37043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37043[(0)] = cljs$core$async$state_machine__34648__auto__);

(statearr_37043[(1)] = (1));

return statearr_37043;
});
var cljs$core$async$state_machine__34648__auto____1 = (function (state_37012){
while(true){
var ret_value__34649__auto__ = (function (){try{while(true){
var result__34650__auto__ = switch__34647__auto__(state_37012);
if(cljs.core.keyword_identical_QMARK_(result__34650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34650__auto__;
}
break;
}
}catch (e37044){var ex__34651__auto__ = e37044;
var statearr_37045_37959 = state_37012;
(statearr_37045_37959[(2)] = ex__34651__auto__);


if(cljs.core.seq((state_37012[(4)]))){
var statearr_37046_37960 = state_37012;
(statearr_37046_37960[(1)] = cljs.core.first((state_37012[(4)])));

} else {
throw ex__34651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37961 = state_37012;
state_37012 = G__37961;
continue;
} else {
return ret_value__34649__auto__;
}
break;
}
});
cljs$core$async$state_machine__34648__auto__ = function(state_37012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34648__auto____1.call(this,state_37012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34648__auto____0;
cljs$core$async$state_machine__34648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34648__auto____1;
return cljs$core$async$state_machine__34648__auto__;
})()
})();
var state__34883__auto__ = (function (){var statearr_37047 = f__34882__auto__();
(statearr_37047[(6)] = c__34881__auto___37939);

return statearr_37047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34883__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "Pub", { enumerable: false, get: function() { return cljs.core.async.Pub; } });
Object.defineProperty(module.exports, "reduce", { enumerable: false, get: function() { return cljs.core.async.reduce; } });
Object.defineProperty(module.exports, "remove_GT_", { enumerable: false, get: function() { return cljs.core.async.remove_GT_; } });
Object.defineProperty(module.exports, "timeout", { enumerable: false, get: function() { return cljs.core.async.timeout; } });
Object.defineProperty(module.exports, "unsub_STAR_", { enumerable: false, get: function() { return cljs.core.async.unsub_STAR_; } });
Object.defineProperty(module.exports, "admix_STAR_", { enumerable: false, get: function() { return cljs.core.async.admix_STAR_; } });
Object.defineProperty(module.exports, "unmix_STAR_", { enumerable: false, get: function() { return cljs.core.async.unmix_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async35062", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async35062; } });
Object.defineProperty(module.exports, "mapcat_STAR_", { enumerable: false, get: function() { return cljs.core.async.mapcat_STAR_; } });
Object.defineProperty(module.exports, "mix", { enumerable: false, get: function() { return cljs.core.async.mix; } });
Object.defineProperty(module.exports, "pub", { enumerable: false, get: function() { return cljs.core.async.pub; } });
Object.defineProperty(module.exports, "take", { enumerable: false, get: function() { return cljs.core.async.take; } });
Object.defineProperty(module.exports, "unsub_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.unsub_all_STAR_; } });
Object.defineProperty(module.exports, "_LT__BANG_", { enumerable: false, get: function() { return cljs.core.async._LT__BANG_; } });
Object.defineProperty(module.exports, "map", { enumerable: false, get: function() { return cljs.core.async.map; } });
Object.defineProperty(module.exports, "Mux", { enumerable: false, get: function() { return cljs.core.async.Mux; } });
Object.defineProperty(module.exports, "mapcat_GT_", { enumerable: false, get: function() { return cljs.core.async.mapcat_GT_; } });
Object.defineProperty(module.exports, "fhnop", { enumerable: false, get: function() { return cljs.core.async.fhnop; } });
Object.defineProperty(module.exports, "buffer", { enumerable: false, get: function() { return cljs.core.async.buffer; } });
Object.defineProperty(module.exports, "close_BANG_", { enumerable: false, get: function() { return cljs.core.async.close_BANG_; } });
Object.defineProperty(module.exports, "t_cljs$core$async36595", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async36595; } });
Object.defineProperty(module.exports, "offer_BANG_", { enumerable: false, get: function() { return cljs.core.async.offer_BANG_; } });
Object.defineProperty(module.exports, "chan", { enumerable: false, get: function() { return cljs.core.async.chan; } });
Object.defineProperty(module.exports, "solo_mode_STAR_", { enumerable: false, get: function() { return cljs.core.async.solo_mode_STAR_; } });
Object.defineProperty(module.exports, "onto_chan_BANG_", { enumerable: false, get: function() { return cljs.core.async.onto_chan_BANG_; } });
Object.defineProperty(module.exports, "tap", { enumerable: false, get: function() { return cljs.core.async.tap; } });
Object.defineProperty(module.exports, "admix", { enumerable: false, get: function() { return cljs.core.async.admix; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async36108", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async36108; } });
Object.defineProperty(module.exports, "promise_chan", { enumerable: false, get: function() { return cljs.core.async.promise_chan; } });
Object.defineProperty(module.exports, "unique", { enumerable: false, get: function() { return cljs.core.async.unique; } });
Object.defineProperty(module.exports, "muxch_STAR_", { enumerable: false, get: function() { return cljs.core.async.muxch_STAR_; } });
Object.defineProperty(module.exports, "solo_mode", { enumerable: false, get: function() { return cljs.core.async.solo_mode; } });
Object.defineProperty(module.exports, "transduce", { enumerable: false, get: function() { return cljs.core.async.transduce; } });
Object.defineProperty(module.exports, "onto_chan", { enumerable: false, get: function() { return cljs.core.async.onto_chan; } });
Object.defineProperty(module.exports, "to_chan", { enumerable: false, get: function() { return cljs.core.async.to_chan; } });
Object.defineProperty(module.exports, "dropping_buffer", { enumerable: false, get: function() { return cljs.core.async.dropping_buffer; } });
Object.defineProperty(module.exports, "untap_all", { enumerable: false, get: function() { return cljs.core.async.untap_all; } });
Object.defineProperty(module.exports, "into", { enumerable: false, get: function() { return cljs.core.async.into; } });
Object.defineProperty(module.exports, "to_chan_BANG_", { enumerable: false, get: function() { return cljs.core.async.to_chan_BANG_; } });
Object.defineProperty(module.exports, "pipeline", { enumerable: false, get: function() { return cljs.core.async.pipeline; } });
Object.defineProperty(module.exports, "sub", { enumerable: false, get: function() { return cljs.core.async.sub; } });
Object.defineProperty(module.exports, "alt_flag", { enumerable: false, get: function() { return cljs.core.async.alt_flag; } });
Object.defineProperty(module.exports, "map_GT_", { enumerable: false, get: function() { return cljs.core.async.map_GT_; } });
Object.defineProperty(module.exports, "pipeline_STAR_", { enumerable: false, get: function() { return cljs.core.async.pipeline_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async36592", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async36592; } });
Object.defineProperty(module.exports, "t_cljs$core$async36607", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async36607; } });
Object.defineProperty(module.exports, "pipe", { enumerable: false, get: function() { return cljs.core.async.pipe; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async35026", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async35026; } });
Object.defineProperty(module.exports, "unmix", { enumerable: false, get: function() { return cljs.core.async.unmix; } });
Object.defineProperty(module.exports, "t_cljs$core$async35062", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async35062; } });
Object.defineProperty(module.exports, "filter_LT_", { enumerable: false, get: function() { return cljs.core.async.filter_LT_; } });
Object.defineProperty(module.exports, "sub_STAR_", { enumerable: false, get: function() { return cljs.core.async.sub_STAR_; } });
Object.defineProperty(module.exports, "t_cljs$core$async36602", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async36602; } });
Object.defineProperty(module.exports, "remove_LT_", { enumerable: false, get: function() { return cljs.core.async.remove_LT_; } });
Object.defineProperty(module.exports, "untap_STAR_", { enumerable: false, get: function() { return cljs.core.async.untap_STAR_; } });
Object.defineProperty(module.exports, "toggle", { enumerable: false, get: function() { return cljs.core.async.toggle; } });
Object.defineProperty(module.exports, "untap_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.untap_all_STAR_; } });
Object.defineProperty(module.exports, "t_cljs$core$async35622", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async35622; } });
Object.defineProperty(module.exports, "sliding_buffer", { enumerable: false, get: function() { return cljs.core.async.sliding_buffer; } });
Object.defineProperty(module.exports, "partition", { enumerable: false, get: function() { return cljs.core.async.partition; } });
Object.defineProperty(module.exports, "Mult", { enumerable: false, get: function() { return cljs.core.async.Mult; } });
Object.defineProperty(module.exports, "merge", { enumerable: false, get: function() { return cljs.core.async.merge; } });
Object.defineProperty(module.exports, "partition_by", { enumerable: false, get: function() { return cljs.core.async.partition_by; } });
Object.defineProperty(module.exports, "t_cljs$core$async34962", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async34962; } });
Object.defineProperty(module.exports, "unsub_all", { enumerable: false, get: function() { return cljs.core.async.unsub_all; } });
Object.defineProperty(module.exports, "_GT__BANG_", { enumerable: false, get: function() { return cljs.core.async._GT__BANG_; } });
Object.defineProperty(module.exports, "unmix_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.unmix_all_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async36595", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async36595; } });
Object.defineProperty(module.exports, "nop", { enumerable: false, get: function() { return cljs.core.async.nop; } });
Object.defineProperty(module.exports, "t_cljs$core$async36108", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async36108; } });
Object.defineProperty(module.exports, "split", { enumerable: false, get: function() { return cljs.core.async.split; } });
Object.defineProperty(module.exports, "unmix_all", { enumerable: false, get: function() { return cljs.core.async.unmix_all; } });
Object.defineProperty(module.exports, "filter_GT_", { enumerable: false, get: function() { return cljs.core.async.filter_GT_; } });
Object.defineProperty(module.exports, "tap_STAR_", { enumerable: false, get: function() { return cljs.core.async.tap_STAR_; } });
Object.defineProperty(module.exports, "untap", { enumerable: false, get: function() { return cljs.core.async.untap; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async34962", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async34962; } });
Object.defineProperty(module.exports, "alt_handler", { enumerable: false, get: function() { return cljs.core.async.alt_handler; } });
Object.defineProperty(module.exports, "alts_BANG_", { enumerable: false, get: function() { return cljs.core.async.alts_BANG_; } });
Object.defineProperty(module.exports, "unsub", { enumerable: false, get: function() { return cljs.core.async.unsub; } });
Object.defineProperty(module.exports, "poll_BANG_", { enumerable: false, get: function() { return cljs.core.async.poll_BANG_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async36607", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async36607; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async35622", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async35622; } });
Object.defineProperty(module.exports, "map_LT_", { enumerable: false, get: function() { return cljs.core.async.map_LT_; } });
Object.defineProperty(module.exports, "fn_handler", { enumerable: false, get: function() { return cljs.core.async.fn_handler; } });
Object.defineProperty(module.exports, "t_cljs$core$async35026", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async35026; } });
Object.defineProperty(module.exports, "do_alts", { enumerable: false, get: function() { return cljs.core.async.do_alts; } });
Object.defineProperty(module.exports, "random_array", { enumerable: false, get: function() { return cljs.core.async.random_array; } });
Object.defineProperty(module.exports, "t_cljs$core$async36592", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async36592; } });
Object.defineProperty(module.exports, "pipeline_async", { enumerable: false, get: function() { return cljs.core.async.pipeline_async; } });
Object.defineProperty(module.exports, "t_cljs$core$async35877", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async35877; } });
Object.defineProperty(module.exports, "Mix", { enumerable: false, get: function() { return cljs.core.async.Mix; } });
Object.defineProperty(module.exports, "toggle_STAR_", { enumerable: false, get: function() { return cljs.core.async.toggle_STAR_; } });
Object.defineProperty(module.exports, "mult", { enumerable: false, get: function() { return cljs.core.async.mult; } });
Object.defineProperty(module.exports, "mapcat_LT_", { enumerable: false, get: function() { return cljs.core.async.mapcat_LT_; } });
Object.defineProperty(module.exports, "ioc_alts_BANG_", { enumerable: false, get: function() { return cljs.core.async.ioc_alts_BANG_; } });
Object.defineProperty(module.exports, "unblocking_buffer_QMARK_", { enumerable: false, get: function() { return cljs.core.async.unblocking_buffer_QMARK_; } });
Object.defineProperty(module.exports, "put_BANG_", { enumerable: false, get: function() { return cljs.core.async.put_BANG_; } });
Object.defineProperty(module.exports, "take_BANG_", { enumerable: false, get: function() { return cljs.core.async.take_BANG_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async36602", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async36602; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async35877", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async35877; } });
//# sourceMappingURL=cljs.core.async.js.map
