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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.metadata.protocols.js");

goog.provide('metabase.lib.metadata.protocols');

/**
 * Protocol for something that we can get information about Tables and Fields from. This can be provided in various ways
 *   various ways:
 * 
 *   1. By raw metadata attached to the query itself
 * 
 *   2. By the application database in Clj code
 * 
 *   3. By the Query Processor store in Clj code
 * 
 *   4. By the Redux store in JS
 * 
 *   5. By (hopefully cached) REST API calls
 * 
 *   This protocol is pretty limited at this point; in the future, we'll probably want to add:
 * 
 *   - methods for searching for Tables or Fields matching some string
 * 
 *   - paging, so if you have 10k Tables we don't do crazy requests that fetch them all at once
 * 
 *   For all of these methods: if no matching object can be found, you should generally return `nil` rather than throwing
 *   an Exception. Let [[metabase.lib.metadata]] worry about throwing exceptions.
 * @interface
 */
metabase.lib.metadata.protocols.MetadataProvider = function(){};

var metabase$lib$metadata$protocols$MetadataProvider$database$dyn_60268 = (function (metadata_provider){
var x__5393__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.database[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(metadata_provider) : m__5394__auto__.call(null,metadata_provider));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.database["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(metadata_provider) : m__5392__auto__.call(null,metadata_provider));
} else {
throw cljs.core.missing_protocol("MetadataProvider.database",metadata_provider);
}
}
});
/**
 * Metadata about the Database we're querying. Should match the [[metabase.lib.metadata/DatabaseMetadata]] schema.
 *   This includes important info such as the supported `:features` and the like.
 */
metabase.lib.metadata.protocols.database = (function metabase$lib$metadata$protocols$database(metadata_provider){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$database$arity$1 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$database$arity$1(metadata_provider);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$database$dyn_60268(metadata_provider);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$table$dyn_60269 = (function (metadata_provider,table_id){
var x__5393__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.table[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,table_id) : m__5394__auto__.call(null,metadata_provider,table_id));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.table["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,table_id) : m__5392__auto__.call(null,metadata_provider,table_id));
} else {
throw cljs.core.missing_protocol("MetadataProvider.table",metadata_provider);
}
}
});
/**
 * Return metadata for a specific Table. Metadata should satisfy [[metabase.lib.metadata/TableMetadata]].
 */
metabase.lib.metadata.protocols.table = (function metabase$lib$metadata$protocols$table(metadata_provider,table_id){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$table$arity$2 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$table$arity$2(metadata_provider,table_id);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$table$dyn_60269(metadata_provider,table_id);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$field$dyn_60270 = (function (metadata_provider,field_id){
var x__5393__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.field[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,field_id) : m__5394__auto__.call(null,metadata_provider,field_id));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.field["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,field_id) : m__5392__auto__.call(null,metadata_provider,field_id));
} else {
throw cljs.core.missing_protocol("MetadataProvider.field",metadata_provider);
}
}
});
/**
 * Return metadata for a specific Field. Metadata should satisfy [[metabase.lib.metadata/ColumnMetadata]].
 */
metabase.lib.metadata.protocols.field = (function metabase$lib$metadata$protocols$field(metadata_provider,field_id){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$field$arity$2 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$field$arity$2(metadata_provider,field_id);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$field$dyn_60270(metadata_provider,field_id);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$card$dyn_60272 = (function (metadata_provider,card_id){
var x__5393__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.card[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,card_id) : m__5394__auto__.call(null,metadata_provider,card_id));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.card["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,card_id) : m__5392__auto__.call(null,metadata_provider,card_id));
} else {
throw cljs.core.missing_protocol("MetadataProvider.card",metadata_provider);
}
}
});
/**
 * Return information about a specific Saved Question, aka a Card. This should
 *  match [[metabase.lib.metadata/CardMetadata]. Currently just used for display name purposes if you have a Card as a
 *  source query.
 */
metabase.lib.metadata.protocols.card = (function metabase$lib$metadata$protocols$card(metadata_provider,card_id){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$card$arity$2 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$card$arity$2(metadata_provider,card_id);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$card$dyn_60272(metadata_provider,card_id);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$metric$dyn_60276 = (function (metadata_provider,metric_id){
var x__5393__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.metric[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,metric_id) : m__5394__auto__.call(null,metadata_provider,metric_id));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.metric["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,metric_id) : m__5392__auto__.call(null,metadata_provider,metric_id));
} else {
throw cljs.core.missing_protocol("MetadataProvider.metric",metadata_provider);
}
}
});
/**
 * Return metadata for a particular capital-M Metric, i.e. something from the `metric` table in the application
 *  database. Metadata should match [[metabase.lib.metadata/MetricMetadata]].
 */
metabase.lib.metadata.protocols.metric = (function metabase$lib$metadata$protocols$metric(metadata_provider,metric_id){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$metric$arity$2 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$metric$arity$2(metadata_provider,metric_id);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$metric$dyn_60276(metadata_provider,metric_id);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$segment$dyn_60277 = (function (metadata_provider,segment_id){
var x__5393__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.segment[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,segment_id) : m__5394__auto__.call(null,metadata_provider,segment_id));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.segment["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,segment_id) : m__5392__auto__.call(null,metadata_provider,segment_id));
} else {
throw cljs.core.missing_protocol("MetadataProvider.segment",metadata_provider);
}
}
});
/**
 * Return metadata for a particular captial-S Segment, i.e. something from the `segment` table in the application
 *  database. Metadata should match [[metabase.lib.metadata/SegmentMetadata]].
 */
metabase.lib.metadata.protocols.segment = (function metabase$lib$metadata$protocols$segment(metadata_provider,segment_id){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$segment$arity$2 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$segment$arity$2(metadata_provider,segment_id);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$segment$dyn_60277(metadata_provider,segment_id);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$tables$dyn_60278 = (function (metadata_provider){
var x__5393__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.tables[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(metadata_provider) : m__5394__auto__.call(null,metadata_provider));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.tables["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(metadata_provider) : m__5392__auto__.call(null,metadata_provider));
} else {
throw cljs.core.missing_protocol("MetadataProvider.tables",metadata_provider);
}
}
});
/**
 * Return a sequence of Tables in this Database. Tables should satisfy the [[metabase.lib.metadata/TableMetadata]]
 *   schema. This should also include things that serve as 'virtual' tables, e.g. Saved Questions or Models. But users of
 *   MLv2 should not need to know that! If we add support for Super Models or Quantum Questions in the future, they can
 *   just come back from this method in the same shape as everything else, the Query Builder can display them, and the
 *   internals can be tucked away here in MLv2.
 */
metabase.lib.metadata.protocols.tables = (function metabase$lib$metadata$protocols$tables(metadata_provider){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$tables$arity$1 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$tables$arity$1(metadata_provider);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$tables$dyn_60278(metadata_provider);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$fields$dyn_60279 = (function (metadata_provider,table_id){
var x__5393__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.fields[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,table_id) : m__5394__auto__.call(null,metadata_provider,table_id));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.fields["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,table_id) : m__5392__auto__.call(null,metadata_provider,table_id));
} else {
throw cljs.core.missing_protocol("MetadataProvider.fields",metadata_provider);
}
}
});
/**
 * Return a sequence of Fields associated with a Table with the given `table-id`. Fields should satisfy
 *   the [[metabase.lib.metadata/ColumnMetadata]] schema. If no such Table exists, this should error.
 */
metabase.lib.metadata.protocols.fields = (function metabase$lib$metadata$protocols$fields(metadata_provider,table_id){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$fields$arity$2 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$fields$arity$2(metadata_provider,table_id);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$fields$dyn_60279(metadata_provider,table_id);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$metrics$dyn_60280 = (function (metadata_provider,table_id){
var x__5393__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.metrics[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,table_id) : m__5394__auto__.call(null,metadata_provider,table_id));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.metrics["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,table_id) : m__5392__auto__.call(null,metadata_provider,table_id));
} else {
throw cljs.core.missing_protocol("MetadataProvider.metrics",metadata_provider);
}
}
});
/**
 * Return a sequence of legacy v1 Metrics associated with a Table with the given `table-id`. Metrics should satisfy
 *   the [[metabase.lib.metadata/MetricMetadata]] schema. If no such Table exists, this should error.
 */
metabase.lib.metadata.protocols.metrics = (function metabase$lib$metadata$protocols$metrics(metadata_provider,table_id){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$metrics$arity$2 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$metrics$arity$2(metadata_provider,table_id);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$metrics$dyn_60280(metadata_provider,table_id);
}
});

/**
 * Whether `x` is a valid [[MetadataProvider]].
 */
metabase.lib.metadata.protocols.metadata_provider_QMARK_ = (function metabase$lib$metadata$protocols$metadata_provider_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.metabase$lib$metadata$protocols$MetadataProvider$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(metabase.lib.metadata.protocols.MetadataProvider,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(metabase.lib.metadata.protocols.MetadataProvider,x);
}
});

/**
 * Optional. A protocol for a MetadataProvider that some sort of internal cache. This is mostly useful for
 *   MetadataProviders that can hit some sort of relatively expensive external service,
 *   e.g. [[metabase.lib.metadata.jvm/application-database-metadata-provider]]. The main purpose of this is to allow
 *   pre-warming the cache with stuff that was already fetched elsewhere.
 *   See [[metabase.models.metric/warmed-metadata-provider]] for example.
 * 
 *   See [[cached-metadata-provider]] below to wrap for a way to wrap an existing MetadataProvider to add caching on top
 *   of it.
 * @interface
 */
metabase.lib.metadata.protocols.CachedMetadataProvider = function(){};

var metabase$lib$metadata$protocols$CachedMetadataProvider$cached_database$dyn_60281 = (function (cached_metadata_provider){
var x__5393__auto__ = (((cached_metadata_provider == null))?null:cached_metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.cached_database[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(cached_metadata_provider) : m__5394__auto__.call(null,cached_metadata_provider));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.cached_database["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(cached_metadata_provider) : m__5392__auto__.call(null,cached_metadata_provider));
} else {
throw cljs.core.missing_protocol("CachedMetadataProvider.cached-database",cached_metadata_provider);
}
}
});
/**
 * Get cached metadata for the query's Database.
 */
metabase.lib.metadata.protocols.cached_database = (function metabase$lib$metadata$protocols$cached_database(cached_metadata_provider){
if((((!((cached_metadata_provider == null)))) && ((!((cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$cached_database$arity$1 == null)))))){
return cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$cached_database$arity$1(cached_metadata_provider);
} else {
return metabase$lib$metadata$protocols$CachedMetadataProvider$cached_database$dyn_60281(cached_metadata_provider);
}
});

var metabase$lib$metadata$protocols$CachedMetadataProvider$cached_metadata$dyn_60282 = (function (cached_metadata_provider,metadata_type,id){
var x__5393__auto__ = (((cached_metadata_provider == null))?null:cached_metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.cached_metadata[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(cached_metadata_provider,metadata_type,id) : m__5394__auto__.call(null,cached_metadata_provider,metadata_type,id));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.cached_metadata["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(cached_metadata_provider,metadata_type,id) : m__5392__auto__.call(null,cached_metadata_provider,metadata_type,id));
} else {
throw cljs.core.missing_protocol("CachedMetadataProvider.cached-metadata",cached_metadata_provider);
}
}
});
/**
 * Get cached metadata of a specific type, e.g. `:metadata/table`.
 */
metabase.lib.metadata.protocols.cached_metadata = (function metabase$lib$metadata$protocols$cached_metadata(cached_metadata_provider,metadata_type,id){
if((((!((cached_metadata_provider == null)))) && ((!((cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$cached_metadata$arity$3 == null)))))){
return cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$cached_metadata$arity$3(cached_metadata_provider,metadata_type,id);
} else {
return metabase$lib$metadata$protocols$CachedMetadataProvider$cached_metadata$dyn_60282(cached_metadata_provider,metadata_type,id);
}
});

var metabase$lib$metadata$protocols$CachedMetadataProvider$store_database_BANG_$dyn_60283 = (function (cached_metadata_provider,database_metadata){
var x__5393__auto__ = (((cached_metadata_provider == null))?null:cached_metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.store_database_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(cached_metadata_provider,database_metadata) : m__5394__auto__.call(null,cached_metadata_provider,database_metadata));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.store_database_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(cached_metadata_provider,database_metadata) : m__5392__auto__.call(null,cached_metadata_provider,database_metadata));
} else {
throw cljs.core.missing_protocol("CachedMetadataProvider.store-database!",cached_metadata_provider);
}
}
});
/**
 * Store metadata for the query's Database.
 */
metabase.lib.metadata.protocols.store_database_BANG_ = (function metabase$lib$metadata$protocols$store_database_BANG_(cached_metadata_provider,database_metadata){
if((((!((cached_metadata_provider == null)))) && ((!((cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$store_database_BANG_$arity$2 == null)))))){
return cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$store_database_BANG_$arity$2(cached_metadata_provider,database_metadata);
} else {
return metabase$lib$metadata$protocols$CachedMetadataProvider$store_database_BANG_$dyn_60283(cached_metadata_provider,database_metadata);
}
});

var metabase$lib$metadata$protocols$CachedMetadataProvider$store_metadata_BANG_$dyn_60285 = (function (cached_metadata_provider,metadata_type,id,metadata){
var x__5393__auto__ = (((cached_metadata_provider == null))?null:cached_metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.store_metadata_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(cached_metadata_provider,metadata_type,id,metadata) : m__5394__auto__.call(null,cached_metadata_provider,metadata_type,id,metadata));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.store_metadata_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(cached_metadata_provider,metadata_type,id,metadata) : m__5392__auto__.call(null,cached_metadata_provider,metadata_type,id,metadata));
} else {
throw cljs.core.missing_protocol("CachedMetadataProvider.store-metadata!",cached_metadata_provider);
}
}
});
/**
 * Store metadata of a specific type, e.g. `:metadata/table`.
 */
metabase.lib.metadata.protocols.store_metadata_BANG_ = (function metabase$lib$metadata$protocols$store_metadata_BANG_(cached_metadata_provider,metadata_type,id,metadata){
if((((!((cached_metadata_provider == null)))) && ((!((cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$store_metadata_BANG_$arity$4 == null)))))){
return cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$store_metadata_BANG_$arity$4(cached_metadata_provider,metadata_type,id,metadata);
} else {
return metabase$lib$metadata$protocols$CachedMetadataProvider$store_metadata_BANG_$dyn_60285(cached_metadata_provider,metadata_type,id,metadata);
}
});


/**
 * A protocol for a MetadataProvider that can fetch several objects in a single batched operation. This is mostly
 *   useful for MetadataProviders e.g. [[metabase.lib.metadata.jvm/application-database-metadata-provider]].
 * @interface
 */
metabase.lib.metadata.protocols.BulkMetadataProvider = function(){};

var metabase$lib$metadata$protocols$BulkMetadataProvider$bulk_metadata$dyn_60286 = (function (bulk_metadata_provider,metadata_type,ids){
var x__5393__auto__ = (((bulk_metadata_provider == null))?null:bulk_metadata_provider);
var m__5394__auto__ = (metabase.lib.metadata.protocols.bulk_metadata[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(bulk_metadata_provider,metadata_type,ids) : m__5394__auto__.call(null,bulk_metadata_provider,metadata_type,ids));
} else {
var m__5392__auto__ = (metabase.lib.metadata.protocols.bulk_metadata["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(bulk_metadata_provider,metadata_type,ids) : m__5392__auto__.call(null,bulk_metadata_provider,metadata_type,ids));
} else {
throw cljs.core.missing_protocol("BulkMetadataProvider.bulk-metadata",bulk_metadata_provider);
}
}
});
/**
 * Fetch lots of metadata of a specific type, e.g. `:metadata/table`, in a single bulk operation.
 */
metabase.lib.metadata.protocols.bulk_metadata = (function metabase$lib$metadata$protocols$bulk_metadata(bulk_metadata_provider,metadata_type,ids){
if((((!((bulk_metadata_provider == null)))) && ((!((bulk_metadata_provider.metabase$lib$metadata$protocols$BulkMetadataProvider$bulk_metadata$arity$3 == null)))))){
return bulk_metadata_provider.metabase$lib$metadata$protocols$BulkMetadataProvider$bulk_metadata$arity$3(bulk_metadata_provider,metadata_type,ids);
} else {
return metabase$lib$metadata$protocols$BulkMetadataProvider$bulk_metadata$dyn_60286(bulk_metadata_provider,metadata_type,ids);
}
});

/**
 * Convenience. Store several metadata maps at once.
 */
metabase.lib.metadata.protocols.store_metadatas_BANG_ = (function metabase$lib$metadata$protocols$store_metadatas_BANG_(cached_metadata_provider,metadata_type,metadatas){
var seq__60264 = cljs.core.seq(metadatas);
var chunk__60265 = null;
var count__60266 = (0);
var i__60267 = (0);
while(true){
if((i__60267 < count__60266)){
var metadata = chunk__60265.cljs$core$IIndexed$_nth$arity$2(null,i__60267);
metabase.lib.metadata.protocols.store_metadata_BANG_(cached_metadata_provider,metadata_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metadata),metadata);


var G__60288 = seq__60264;
var G__60289 = chunk__60265;
var G__60290 = count__60266;
var G__60291 = (i__60267 + (1));
seq__60264 = G__60288;
chunk__60265 = G__60289;
count__60266 = G__60290;
i__60267 = G__60291;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60264);
if(temp__5804__auto__){
var seq__60264__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60264__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__60264__$1);
var G__60296 = cljs.core.chunk_rest(seq__60264__$1);
var G__60297 = c__5568__auto__;
var G__60298 = cljs.core.count(c__5568__auto__);
var G__60299 = (0);
seq__60264 = G__60296;
chunk__60265 = G__60297;
count__60266 = G__60298;
i__60267 = G__60299;
continue;
} else {
var metadata = cljs.core.first(seq__60264__$1);
metabase.lib.metadata.protocols.store_metadata_BANG_(cached_metadata_provider,metadata_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metadata),metadata);


var G__60300 = cljs.core.next(seq__60264__$1);
var G__60301 = null;
var G__60302 = (0);
var G__60303 = (0);
seq__60264 = G__60300;
chunk__60265 = G__60301;
count__60266 = G__60302;
i__60267 = G__60303;
continue;
}
} else {
return null;
}
}
break;
}
});
Object.defineProperty(module.exports, "metric", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.metric; } });
Object.defineProperty(module.exports, "metrics", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.metrics; } });
Object.defineProperty(module.exports, "metadata_provider_QMARK_", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.metadata_provider_QMARK_; } });
Object.defineProperty(module.exports, "store_metadata_BANG_", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.store_metadata_BANG_; } });
Object.defineProperty(module.exports, "bulk_metadata", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.bulk_metadata; } });
Object.defineProperty(module.exports, "table", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.table; } });
Object.defineProperty(module.exports, "BulkMetadataProvider", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.BulkMetadataProvider; } });
Object.defineProperty(module.exports, "fields", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.fields; } });
Object.defineProperty(module.exports, "store_metadatas_BANG_", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.store_metadatas_BANG_; } });
Object.defineProperty(module.exports, "tables", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.tables; } });
Object.defineProperty(module.exports, "field", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.field; } });
Object.defineProperty(module.exports, "cached_metadata", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.cached_metadata; } });
Object.defineProperty(module.exports, "store_database_BANG_", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.store_database_BANG_; } });
Object.defineProperty(module.exports, "card", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.card; } });
Object.defineProperty(module.exports, "segment", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.segment; } });
Object.defineProperty(module.exports, "MetadataProvider", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.MetadataProvider; } });
Object.defineProperty(module.exports, "cached_database", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.cached_database; } });
Object.defineProperty(module.exports, "CachedMetadataProvider", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.CachedMetadataProvider; } });
Object.defineProperty(module.exports, "database", { enumerable: false, get: function() { return metabase.lib.metadata.protocols.database; } });
//# sourceMappingURL=metabase.lib.metadata.protocols.js.map
