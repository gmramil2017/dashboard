var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.util.js");
require("./metabase.mbql.schema.js");
require("./metabase.util.malli.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.database.js");

goog.provide('metabase.lib.database');
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: [:maybe :metabase.lib.schema.id/database]
 *        
 * 
 *   Get the Database ID (`:database`) associated with a query. If the query is using
 *   the [[mbql.s/saved-questions-virtual-database-id]] (used in some situations for queries with a `:source-card`)
 * 
 *  {:database -1337}
 * 
 *   we will attempt to resolve the correct Database ID by getting metadata for the source Card and returning its
 *   `:database-id`; if this is not available for one reason or another this will return `nil`.
 */
metabase.lib.database.database_id = (function metabase$lib$database$database_id(query){

var temp__5804__auto__ = new cljs.core.Keyword(null,"database","database",1849087575).cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,metabase.mbql.schema.saved_questions_virtual_database_id)){
return id;
} else {
var temp__5804__auto____$1 = metabase.lib.util.source_card_id(query);
if(cljs.core.truth_(temp__5804__auto____$1)){
var source_card_id = temp__5804__auto____$1;
var temp__5804__auto____$2 = metabase.lib.metadata.card(query,source_card_id);
if(cljs.core.truth_(temp__5804__auto____$2)){
var card_metadata = temp__5804__auto____$2;
return new cljs.core.Keyword(null,"database-id","database-id",1883826326).cljs$core$IFn$_invoke$arity$1(card_metadata);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
});
Object.defineProperty(module.exports, "database_id", { enumerable: false, get: function() { return metabase.lib.database.database_id; } });
//# sourceMappingURL=metabase.lib.database.js.map
