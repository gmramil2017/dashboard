var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.cljs.devtools.client.env.js");
require("./shadow.cljs.devtools.client.shared.js");
require("./shadow.remote.runtime.cljs.js_builtins.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.websocket.js");

goog.provide('shadow.cljs.devtools.client.websocket');
shadow.cljs.devtools.client.websocket.start = (function shadow$cljs$devtools$client$websocket$start(var_args){
var G__39456 = arguments.length;
switch (G__39456) {
case 1:
return shadow.cljs.devtools.client.websocket.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.websocket.start.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.websocket.start.cljs$core$IFn$_invoke$arity$1 = (function (runtime){
return shadow.cljs.devtools.client.websocket.start.cljs$core$IFn$_invoke$arity$2(WebSocket,runtime);
}));

(shadow.cljs.devtools.client.websocket.start.cljs$core$IFn$_invoke$arity$2 = (function (ws_impl,runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new ws_impl(ws_url));
(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,e.data);
}));

(socket.onopen = (function (e){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
}));

(socket.onclose = (function (e){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
}));

(socket.onerror = (function (e){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
}));

return socket;
}));

(shadow.cljs.devtools.client.websocket.start.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.websocket.send = (function shadow$cljs$devtools$client$websocket$send(socket,msg){
return socket.send(msg);
});
shadow.cljs.devtools.client.websocket.stop = (function shadow$cljs$devtools$client$websocket$stop(socket){
(socket.onopen = null);

(socket.onclose = null);

(socket.onmessage = null);

(socket.onerror = null);

return socket.close();
});
Object.defineProperty(module.exports, "start", { enumerable: false, get: function() { return shadow.cljs.devtools.client.websocket.start; } });
Object.defineProperty(module.exports, "send", { enumerable: false, get: function() { return shadow.cljs.devtools.client.websocket.send; } });
Object.defineProperty(module.exports, "stop", { enumerable: false, get: function() { return shadow.cljs.devtools.client.websocket.stop; } });
//# sourceMappingURL=shadow.cljs.devtools.client.websocket.js.map
