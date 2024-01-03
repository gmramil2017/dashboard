var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./devtools.protocols.js");
require("./devtools.formatters.templating.js");
require("./devtools.formatters.markup.js");
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

$CLJS.SHADOW_ENV.setLoaded("devtools.toolbox.js");

goog.provide('devtools.toolbox');

/**
* @constructor
 * @implements {devtools.protocols.IFormat}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devtools.toolbox.t_devtools$toolbox32810 = (function (obj,header,style,tag,meta32811){
this.obj = obj;
this.header = header;
this.style = style;
this.tag = tag;
this.meta32811 = meta32811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(devtools.toolbox.t_devtools$toolbox32810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32812,meta32811__$1){
var self__ = this;
var _32812__$1 = this;
return (new devtools.toolbox.t_devtools$toolbox32810(self__.obj,self__.header,self__.style,self__.tag,meta32811__$1));
}));

(devtools.toolbox.t_devtools$toolbox32810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32812){
var self__ = this;
var _32812__$1 = this;
return self__.meta32811;
}));

(devtools.toolbox.t_devtools$toolbox32810.prototype.devtools$protocols$IFormat$ = cljs.core.PROTOCOL_SENTINEL);

(devtools.toolbox.t_devtools$toolbox32810.prototype.devtools$protocols$IFormat$_header$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return devtools.formatters.templating.render_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.tag,self__.style], null),((cljs.core.fn_QMARK_(self__.header))?(self__.header.cljs$core$IFn$_invoke$arity$1 ? self__.header.cljs$core$IFn$_invoke$arity$1(self__.obj) : self__.header.call(null,self__.obj)):self__.header)], null));
}));

(devtools.toolbox.t_devtools$toolbox32810.prototype.devtools$protocols$IFormat$_has_body$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(devtools.toolbox.t_devtools$toolbox32810.prototype.devtools$protocols$IFormat$_body$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_body_GT_(devtools.formatters.markup._LT_standard_body_reference_GT_(self__.obj)));
}));

(devtools.toolbox.t_devtools$toolbox32810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta32811","meta32811",-748503315,null)], null);
}));

(devtools.toolbox.t_devtools$toolbox32810.cljs$lang$type = true);

(devtools.toolbox.t_devtools$toolbox32810.cljs$lang$ctorStr = "devtools.toolbox/t_devtools$toolbox32810");

(devtools.toolbox.t_devtools$toolbox32810.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"devtools.toolbox/t_devtools$toolbox32810");
}));

/**
 * Positional factory function for devtools.toolbox/t_devtools$toolbox32810.
 */
devtools.toolbox.__GT_t_devtools$toolbox32810 = (function devtools$toolbox$__GT_t_devtools$toolbox32810(obj,header,style,tag,meta32811){
return (new devtools.toolbox.t_devtools$toolbox32810(obj,header,style,tag,meta32811));
});


/**
 * This is a simple wrapper for logging "busy" objects.
 *   This is especially handy when you happen to be logging javascript objects with many properties.
 *   Standard javascript console renderer tends to print a lot of infomation in the header in some cases and that can make
 *   console output pretty busy. By using envelope you can force your own short header and let the details expand on demand
 *   via disclosure triangle. The header can be styled and you can optionally specify preferred wrapping tag (advanced).
 */
devtools.toolbox.envelope = (function devtools$toolbox$envelope(var_args){
var G__32787 = arguments.length;
switch (G__32787) {
case 1:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$2(obj,new cljs.core.Keyword(null,"default-envelope-header","default-envelope-header",-90723598));
}));

(devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$2 = (function (obj,header){
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$3(obj,header,new cljs.core.Keyword(null,"default-envelope-style","default-envelope-style",-1676750479));
}));

(devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$3 = (function (obj,header,style){
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$4(obj,header,style,new cljs.core.Keyword(null,"span","span",1394872991));
}));

(devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$4 = (function (obj,header,style,tag){
return (new devtools.toolbox.t_devtools$toolbox32810(obj,header,style,tag,cljs.core.PersistentArrayMap.EMPTY));
}));

(devtools.toolbox.envelope.cljs$lang$maxFixedArity = 4);

/**
 * Forces object to be rendered by cljs-devtools during console logging.
 * 
 *   Unfortunately custom formatters subsystem in DevTools is not applied to primitive values like numbers, strings, null, etc.
 *   This wrapper can be used as a workaround if you really need to force cljs-devtools rendering:
 * 
 *  (.log js/console nil) ; will render 'null'
 *  (.log js/console (force-format nil)) ; will render 'nil' and not 'null'
 * 
 *   See https://github.com/binaryage/cljs-devtools/issues/17
 *   
 */
devtools.toolbox.force_format = (function devtools$toolbox$force_format(obj){
return devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
Object.defineProperty(module.exports, "envelope", { enumerable: false, get: function() { return devtools.toolbox.envelope; } });
Object.defineProperty(module.exports, "t_devtools$toolbox32810", { enumerable: false, get: function() { return devtools.toolbox.t_devtools$toolbox32810; } });
Object.defineProperty(module.exports, "__GT_t_devtools$toolbox32810", { enumerable: false, get: function() { return devtools.toolbox.__GT_t_devtools$toolbox32810; } });
Object.defineProperty(module.exports, "force_format", { enumerable: false, get: function() { return devtools.toolbox.force_format; } });
//# sourceMappingURL=devtools.toolbox.js.map
