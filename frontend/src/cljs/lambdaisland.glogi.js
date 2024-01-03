var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("lambdaisland.glogi.js");

goog.provide('lambdaisland.glogi');
goog.scope(function(){
  lambdaisland.glogi.goog$module$goog$array = goog.module.get('goog.array');
  lambdaisland.glogi.goog$module$goog$object = goog.module.get('goog.object');
});
lambdaisland.glogi.Level = (((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.Level !== 'undefined'))?goog.log.Level:goog.debug.logger.Level);
lambdaisland.glogi.goog_setLevel = (function lambdaisland$glogi$goog_setLevel(logger,level){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.setLevel !== 'undefined')){
return goog.log.setLevel(logger,level);
} else {
return logger.setLevel(level);
}
});
lambdaisland.glogi.goog_logRecord = (function lambdaisland$glogi$goog_logRecord(logger,record){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.publishLogRecord !== 'undefined')){
return goog.log.publishLogRecord(logger,record);
} else {
return logger.logRecord(record);
}
});
lambdaisland.glogi.goog_addHandler = (function lambdaisland$glogi$goog_addHandler(logger,handler){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.addHandler !== 'undefined')){
return goog.log.addHandler(logger,handler);
} else {
return logger.addHandler(handler);
}
});
lambdaisland.glogi.goog_removeHandler = (function lambdaisland$glogi$goog_removeHandler(logger,handler){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.removeHandler !== 'undefined')){
return goog.log.removeHandler(logger,handler);
} else {
return logger.removeHandler(handler);
}
});
lambdaisland.glogi.logger_handlers_prop = "__glogi_handlers__";
lambdaisland.glogi.name_str = (function lambdaisland$glogi$name_str(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("glogi","root","glogi/root",-77414841),x)){
return "";
} else {
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.simple_ident_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.qualified_ident_QMARK_(x)){
return [cljs.core.namespace(x),"/",cljs.core.name(x)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
});
/**
 * Get a logger by name, and optionally set its level. Name can be a string
 *   keyword, or symbol. The special keyword :glogi/root returns the root logger.
 */
lambdaisland.glogi.logger = (function lambdaisland$glogi$logger(var_args){
var G__52997 = arguments.length;
switch (G__52997) {
case 1:
return lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1 = (function (n){
return goog.log.getLogger(lambdaisland.glogi.name_str(n),undefined);
}));

(lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$2 = (function (n,level){
return goog.log.getLogger(lambdaisland.glogi.name_str(n),level);
}));

(lambdaisland.glogi.logger.cljs$lang$maxFixedArity = 2);

lambdaisland.glogi.root_logger = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1("");
lambdaisland.glogi.predefined_level = (function lambdaisland$glogi$predefined_level(name){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.Level !== 'undefined')){
return goog.log.Level.getPredefinedLevel(name);
} else {
return null;
}
});
lambdaisland.glogi.levels = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shout","shout",186018337),new cljs.core.Keyword(null,"finest","finest",-1359568890),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"severe","severe",-1364500238),new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"fine","fine",-873037193),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"finer","finer",974902846)],[(function (){var or__5045__auto__ = lambdaisland.glogi.Level.SHOUT;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("SHOUT");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.FINEST;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("FINEST");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.CONFIG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("CONFIG");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.WARNING;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("WARNING");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.FINER;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("FINER");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.FINE;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("FINE");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.ALL;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("ALL");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.WARNING;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("WARNING");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.SEVERE;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("SEVERE");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.OFF;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("OFF");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.INFO;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("INFO");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.FINE;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("FINE");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.SEVERE;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("SEVERE");
}
})(),(function (){var or__5045__auto__ = lambdaisland.glogi.Level.FINER;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lambdaisland.glogi.predefined_level("FINER");
}
})()]);
lambdaisland.glogi.level = (function lambdaisland$glogi$level(lvl){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.levels,lvl);
});
/**
 * Get the numeric value of a log level (keyword).
 */
lambdaisland.glogi.level_value = (function lambdaisland$glogi$level_value(lvl){
return lambdaisland.glogi.level(lvl).value;
});
lambdaisland.glogi.make_log_record = (function lambdaisland$glogi$make_log_record(level,message,name,exception){
var LogRecord = (((typeof goog !== 'undefined') && (typeof goog.debug !== 'undefined') && (typeof goog.debug.LogRecord !== 'undefined'))?goog.debug.LogRecord:goog.log.LogRecord);
var record = (new LogRecord(level,message,name));
if(cljs.core.truth_(exception)){
record.setException(exception);
} else {
}

return record;
});
/**
 * Output a log message to the given logger, optionally with an exception to be
 *   logged.
 */
lambdaisland.glogi.log = (function lambdaisland$glogi$log(var_args){
var G__53056 = arguments.length;
switch (G__53056) {
case 3:
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$3 = (function (name,lvl,message){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(name,lvl,message,null);
}));

(lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4 = (function (name,lvl,message,exception){
if(cljs.core.truth_(goog.log.ENABLED)){
var temp__5804__auto__ = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.truth_(temp__5804__auto__)){
var l = temp__5804__auto__;
return lambdaisland.glogi.goog_logRecord(l,lambdaisland.glogi.make_log_record(lambdaisland.glogi.level(lvl),message,name,exception));
} else {
return null;
}
} else {
return null;
}
}));

(lambdaisland.glogi.log.cljs$lang$maxFixedArity = 4);

/**
 * Set the level (a keyword) of the given logger, identified by name, or :root for
 *   the root logger.
 */
lambdaisland.glogi.set_level = (function lambdaisland$glogi$set_level(name,lvl){
if(cljs.core.contains_QMARK_(lambdaisland.glogi.levels,lvl)){
} else {
throw (new Error("Assert failed: (contains? levels lvl)"));
}

var G__53065 = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
if((G__53065 == null)){
return null;
} else {
return lambdaisland.glogi.goog_setLevel(G__53065,lambdaisland.glogi.level(lvl));
}
});
/**
 * Convenience function for setting several levels at one.
 * 
 *   Takes a map of logger name => level keyword. The logger name can be a string,
 *   keyword, or symbol. The keyword :glogi/root refers to the root logger and is
 *   equivalent to using an empty string.
 * 
 *   This function is exported so it is still available in optimized builds to set
 *   levels from the javascript console. In this case use nested arrays and
 *   strings. Use `:root` for the root logger.
 * 
 *   ``` javascript
 *   lambdaisland.glogi.set_levels([["" "debug"] ["lambdaisland" "trace"]])
 *   ```
 *   
 */
lambdaisland.glogi.set_levels = (function lambdaisland$glogi$set_levels(lvls){
var seq__53067 = cljs.core.seq(lvls);
var chunk__53069 = null;
var count__53070 = (0);
var i__53071 = (0);
while(true){
if((i__53071 < count__53070)){
var vec__53081 = chunk__53069.cljs$core$IIndexed$_nth$arity$2(null,i__53071);
var logger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53081,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53081,(1),null);
var level_53165__$1 = ((typeof level === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(level):level);
lambdaisland.glogi.set_level(logger,level_53165__$1);


var G__53166 = seq__53067;
var G__53167 = chunk__53069;
var G__53168 = count__53070;
var G__53169 = (i__53071 + (1));
seq__53067 = G__53166;
chunk__53069 = G__53167;
count__53070 = G__53168;
i__53071 = G__53169;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53067);
if(temp__5804__auto__){
var seq__53067__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53067__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53067__$1);
var G__53172 = cljs.core.chunk_rest(seq__53067__$1);
var G__53173 = c__5568__auto__;
var G__53174 = cljs.core.count(c__5568__auto__);
var G__53175 = (0);
seq__53067 = G__53172;
chunk__53069 = G__53173;
count__53070 = G__53174;
i__53071 = G__53175;
continue;
} else {
var vec__53084 = cljs.core.first(seq__53067__$1);
var logger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53084,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53084,(1),null);
var level_53180__$1 = ((typeof level === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(level):level);
lambdaisland.glogi.set_level(logger,level_53180__$1);


var G__53181 = cljs.core.next(seq__53067__$1);
var G__53182 = null;
var G__53183 = (0);
var G__53184 = (0);
seq__53067 = G__53181;
chunk__53069 = G__53182;
count__53070 = G__53183;
i__53071 = G__53184;
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
 * Log to the browser console. This uses goog.debug.Console directly,
 *   use [lambdaisland.glogi.console/install!] for a version that plays nicely with
 *   cljs-devtools.
 */
lambdaisland.glogi.enable_console_logging_BANG_ = (function lambdaisland$glogi$enable_console_logging_BANG_(){
var temp__5804__auto___53185 = goog.debug.Console.instance;
if(cljs.core.truth_(temp__5804__auto___53185)){
var instance_53186 = temp__5804__auto___53185;
instance_53186.setCapturing(true);

var instance_53187__$1 = (new goog.debug.Console());
(goog.debug.Console.instance = instance_53187__$1);

instance_53187__$1.setCapturing();
} else {
}

return null;
});
/**
 * Log to the browser console if the browser location contains Debug=true.
 */
lambdaisland.glogi.console_autoinstall_BANG_ = (function lambdaisland$glogi$console_autoinstall_BANG_(){
goog.debug.Console.autoInstall();

return null;
});
/**
 * Pop up a browser window which will display log messages. Returns the FancyWindow instance.
 */
lambdaisland.glogi.popup_logger_window_BANG_ = (function lambdaisland$glogi$popup_logger_window_BANG_(){
var G__53089 = (new goog.debug.FancyWindow());
G__53089.setEnabled(true);

return G__53089;
});
/**
 * Log messages to an element on the page. Returns the DivConsole instance.
 */
lambdaisland.glogi.log_to_div_BANG_ = (function lambdaisland$glogi$log_to_div_BANG_(element){
var G__53093 = (new goog.debug.DivConsole(element));
G__53093.setCapturing(true);

return G__53093;
});
lambdaisland.glogi.logger_glogi_handlers = (function lambdaisland$glogi$logger_glogi_handlers(logger){
return lambdaisland.glogi.goog$module$goog$object.get(logger,lambdaisland.glogi.logger_handlers_prop);
});
lambdaisland.glogi.swap_handlers_BANG_ = (function lambdaisland$glogi$swap_handlers_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53196 = arguments.length;
var i__5770__auto___53197 = (0);
while(true){
if((i__5770__auto___53197 < len__5769__auto___53196)){
args__5775__auto__.push((arguments[i__5770__auto___53197]));

var G__53198 = (i__5770__auto___53197 + (1));
i__5770__auto___53197 = G__53198;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (logger,f,args){
return lambdaisland.glogi.goog$module$goog$object.set(logger,lambdaisland.glogi.logger_handlers_prop,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,lambdaisland.glogi.logger_glogi_handlers(logger),args));
}));

(lambdaisland.glogi.swap_handlers_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lambdaisland.glogi.swap_handlers_BANG_.cljs$lang$applyTo = (function (seq53097){
var G__53098 = cljs.core.first(seq53097);
var seq53097__$1 = cljs.core.next(seq53097);
var G__53099 = cljs.core.first(seq53097__$1);
var seq53097__$2 = cljs.core.next(seq53097__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53098,G__53099,seq53097__$2);
}));

/**
 * Add a log handler to the given logger, or to the root logger if no logger is
 *   specified. The handler is a function which receives a map as its argument.
 * 
 *   A given handler-fn is only added to a given logger once, even when called
 *   repeatedly.
 */
lambdaisland.glogi.add_handler = (function lambdaisland$glogi$add_handler(var_args){
var G__53105 = arguments.length;
switch (G__53105) {
case 1:
return lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler_fn){
return lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$2("",handler_fn);
}));

(lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$2 = (function (name,handler_fn){
var logger = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
var log_record_handler = (function (record){
var G__53110 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sequenceNumber","sequenceNumber",-543983615),record.sequenceNumber_,new cljs.core.Keyword(null,"time","time",1385887882),record.time_,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(record.level_.name)),new cljs.core.Keyword(null,"message","message",-406056002),record.msg_,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927),record.loggerName_,new cljs.core.Keyword(null,"exception","exception",-335277064),record.exception_], null);
return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(G__53110) : handler_fn.call(null,G__53110));
});
if(cljs.core.truth_(logger)){
var temp__5804__auto___53214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.logger_glogi_handlers(logger),handler_fn);
if(cljs.core.truth_(temp__5804__auto___53214)){
var handler_53216 = temp__5804__auto___53214;
lambdaisland.glogi.goog_removeHandler(logger,handler_53216);
} else {
}

lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(logger,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler_fn,log_record_handler], 0));

var G__53113 = logger;
if((G__53113 == null)){
return null;
} else {
return lambdaisland.glogi.goog_addHandler(G__53113,log_record_handler);
}
} else {
return null;
}
}));

(lambdaisland.glogi.add_handler.cljs$lang$maxFixedArity = 2);

lambdaisland.glogi.remove_handler = (function lambdaisland$glogi$remove_handler(var_args){
var G__53120 = arguments.length;
switch (G__53120) {
case 1:
return lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler_fn){
return lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$2("",handler_fn);
}));

(lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$2 = (function (name,handler_fn){
var logger = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.truth_(logger)){
var temp__5804__auto___53223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.logger_glogi_handlers(logger),handler_fn);
if(cljs.core.truth_(temp__5804__auto___53223)){
var handler_53224 = temp__5804__auto___53223;
lambdaisland.glogi.goog_removeHandler(logger,handler_53224);
} else {
}

return lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(logger,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler_fn], 0));
} else {
return null;
}
}));

(lambdaisland.glogi.remove_handler.cljs$lang$maxFixedArity = 2);

lambdaisland.glogi.add_handler_once = lambdaisland.glogi.add_handler;
lambdaisland.glogi.set_level(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"info","info",-317069002));
Object.defineProperty(module.exports, "remove_handler", { enumerable: false, get: function() { return lambdaisland.glogi.remove_handler; } });
Object.defineProperty(module.exports, "logger_glogi_handlers", { enumerable: false, get: function() { return lambdaisland.glogi.logger_glogi_handlers; } });
Object.defineProperty(module.exports, "goog_addHandler", { enumerable: false, get: function() { return lambdaisland.glogi.goog_addHandler; } });
Object.defineProperty(module.exports, "log", { enumerable: false, get: function() { return lambdaisland.glogi.log; } });
Object.defineProperty(module.exports, "level_value", { enumerable: false, get: function() { return lambdaisland.glogi.level_value; } });
Object.defineProperty(module.exports, "set_levels", { enumerable: true, get: function() { return lambdaisland.glogi.set_levels; } });
Object.defineProperty(module.exports, "console_autoinstall_BANG_", { enumerable: false, get: function() { return lambdaisland.glogi.console_autoinstall_BANG_; } });
Object.defineProperty(module.exports, "root_logger", { enumerable: false, get: function() { return lambdaisland.glogi.root_logger; } });
Object.defineProperty(module.exports, "predefined_level", { enumerable: false, get: function() { return lambdaisland.glogi.predefined_level; } });
Object.defineProperty(module.exports, "goog_setLevel", { enumerable: false, get: function() { return lambdaisland.glogi.goog_setLevel; } });
Object.defineProperty(module.exports, "level", { enumerable: false, get: function() { return lambdaisland.glogi.level; } });
Object.defineProperty(module.exports, "goog_logRecord", { enumerable: false, get: function() { return lambdaisland.glogi.goog_logRecord; } });
Object.defineProperty(module.exports, "levels", { enumerable: false, get: function() { return lambdaisland.glogi.levels; } });
Object.defineProperty(module.exports, "Level", { enumerable: false, get: function() { return lambdaisland.glogi.Level; } });
Object.defineProperty(module.exports, "add_handler_once", { enumerable: false, get: function() { return lambdaisland.glogi.add_handler_once; } });
Object.defineProperty(module.exports, "enable_console_logging_BANG_", { enumerable: false, get: function() { return lambdaisland.glogi.enable_console_logging_BANG_; } });
Object.defineProperty(module.exports, "logger_handlers_prop", { enumerable: false, get: function() { return lambdaisland.glogi.logger_handlers_prop; } });
Object.defineProperty(module.exports, "swap_handlers_BANG_", { enumerable: false, get: function() { return lambdaisland.glogi.swap_handlers_BANG_; } });
Object.defineProperty(module.exports, "set_level", { enumerable: false, get: function() { return lambdaisland.glogi.set_level; } });
Object.defineProperty(module.exports, "add_handler", { enumerable: false, get: function() { return lambdaisland.glogi.add_handler; } });
Object.defineProperty(module.exports, "name_str", { enumerable: false, get: function() { return lambdaisland.glogi.name_str; } });
Object.defineProperty(module.exports, "logger", { enumerable: false, get: function() { return lambdaisland.glogi.logger; } });
Object.defineProperty(module.exports, "make_log_record", { enumerable: false, get: function() { return lambdaisland.glogi.make_log_record; } });
Object.defineProperty(module.exports, "log_to_div_BANG_", { enumerable: false, get: function() { return lambdaisland.glogi.log_to_div_BANG_; } });
Object.defineProperty(module.exports, "goog_removeHandler", { enumerable: false, get: function() { return lambdaisland.glogi.goog_removeHandler; } });
Object.defineProperty(module.exports, "popup_logger_window_BANG_", { enumerable: false, get: function() { return lambdaisland.glogi.popup_logger_window_BANG_; } });
//# sourceMappingURL=lambdaisland.glogi.js.map
