var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.metadata.protocols.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.util.js");
require("./metabase.util.malli.js");
require("./metabase.util.malli.registry.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.metadata.js");

goog.provide('metabase.lib.metadata');
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.metadata","column-source","metabase.lib.metadata/column-source",-458963769),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword("source","card","source/card",-139977973),new cljs.core.Keyword("source","native","source/native",-1444604147),new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878),new cljs.core.Keyword("source","table-defaults","source/table-defaults",909975194),new cljs.core.Keyword("source","fields","source/fields",-649667981),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137),new cljs.core.Keyword("source","breakouts","source/breakouts",-1706018158),new cljs.core.Keyword("source","joins","source/joins",1225821486),new cljs.core.Keyword("source","expressions","source/expressions",-458367840),new cljs.core.Keyword("source","implicitly-joinable","source/implicitly-joinable",-729101197)], null));
/**
 * Malli schema for a valid map of column metadata, which can mean one of two things:
 * 
 *   1. Metadata about a particular Field in the application database. This will always have an `:id`
 * 
 *   2. Results metadata from a column in `data.cols` and/or `data.results_metadata.columns` in a Query Processor
 *   response, or saved in something like `Card.result_metadata`. These *may* have an `:id`, or may not -- columns
 *   coming back from native queries or things like `SELECT count(*)` aren't associated with any particular `Field`
 *   and thus will not have an `:id`.
 * 
 *   Now maybe these should be two different schemas, but `:id` being there or not is the only real difference; besides
 *   that they are largely compatible. So they're the same for now. We can revisit this in the future if we actually want
 *   to differentiate between the two versions.
 */
metabase.lib.metadata.ColumnMetadata = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid column metadata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword("metabase.lib.schema.common","base-type","metabase.lib.schema.common/base-type",999524206)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema.id","field","metabase.lib.schema.id/field",-985236431)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","base-type","metabase.lib.schema.common/base-type",999524206)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.id","field","metabase.lib.schema.id/field",-985236431)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-alias","source-alias",1652088724),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.metadata","column-source","metabase.lib.metadata/column-source",-458963769)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(60)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
/**
 * Schema for metadata about a specific Saved Question (which may or may not be a Model). More or less the same as
 *   a [[metabase.models.card]], but with kebab-case keys. Note that the `:dataset-query` is not necessarily converted to
 *   pMBQL yet. Probably safe to assume it is normalized however. Likewise, `:result-metadata` is probably not quite
 *   massaged into a sequence of `ColumnMetadata`s just yet. See [[metabase.lib.card/card-metadata-columns]] that
 *   converts these as needed.
 */
metabase.lib.metadata.CardMetadata = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid Card metadata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("metadata","card","metadata/card",-1039333889)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("metabase.lib.schema.id","card","metabase.lib.schema.id/card",-801728009)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result-metadata","result-metadata",2017934672),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"database-id","database-id",1883826326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.id","database","metabase.lib.schema.id/database",2063511424)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.id","table","metabase.lib.schema.id/table",-583250693)], null)], null)], null);
/**
 * More or less the same as a [[metabase.models.segment]], but with kebab-case keys.
 */
metabase.lib.metadata.SegmentMetadata = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid Segment metadata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("metabase.lib.schema.id","segment","metabase.lib.schema.id/segment",-983297351)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null);
/**
 * Malli schema for a legacy v1 [[metabase.models.metric]], but with kebab-case keys. A Metric defines an MBQL snippet
 *   with an aggregation and optionally a filter clause. You can add a `:metric` reference to the `:aggregations` in an
 *   MBQL stage, and the QP treats it like a macro and expands it to the underlying clauses --
 *   see [[metabase.query-processor.middleware.expand-macros]].
 */
metabase.lib.metadata.MetricMetadata = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid Metric metadata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("metadata","metric","metadata/metric",538003406)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("metabase.lib.schema.id","metric","metabase.lib.schema.id/metric",369478774)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword("metabase.lib.schema.id","table","metabase.lib.schema.id/table",-583250693)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"definition","definition",-1198729982),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null)], null);
/**
 * Schema for metadata about a specific [[metabase.models.table]]. More or less the same as a [[metabase.models.table]],
 *   but with kebab-case keys.
 */
metabase.lib.metadata.TableMetadata = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid Table metadata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("metadata","table","metadata/table",-882499405)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("metabase.lib.schema.id","table","metabase.lib.schema.id/table",-583250693)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null)], null);
/**
 * Malli schema for the DatabaseMetadata as returned by `GET /api/database/:id/metadata` -- what should be available to
 *   the frontend Query Builder.
 */
metabase.lib.metadata.DatabaseMetadata = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid Database metadata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("metadata","database","metadata/database",-924828824)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("metabase.lib.schema.id","database","metabase.lib.schema.id/database",2063511424)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),metabase.lib.metadata.TableMetadata], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)], null);
/**
 * Schema for something that satisfies the [[lib.metadata.protocols/MetadataProvider]] protocol.
 */
metabase.lib.metadata.MetadataProvider = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid MetadataProvider"], null),new cljs.core.Var(function(){return metabase.lib.metadata.protocols.metadata_provider_QMARK_;},new cljs.core.Symbol("metabase.lib.metadata.protocols","metadata-provider?","metabase.lib.metadata.protocols/metadata-provider?",-472923865,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"metabase.lib.metadata.protocols","metabase.lib.metadata.protocols",128660233,null),new cljs.core.Symbol(null,"metadata-provider?","metadata-provider?",1669871524,null),"metabase/lib/metadata/protocols.cljc",25,1,70,70,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Whether `x` is a valid [[MetadataProvider]].",(cljs.core.truth_(metabase.lib.metadata.protocols.metadata_provider_QMARK_)?metabase.lib.metadata.protocols.metadata_provider_QMARK_.cljs$lang$test:null)]))], null);
/**
 * Something that can be used to get a MetadataProvider. Either a MetadataProvider, or a map with a MetadataProvider in
 *   the key `:lib/metadata` (i.e., a query).
 */
metabase.lib.metadata.MetadataProviderable = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),metabase.lib.metadata.MetadataProvider,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"map with a MetadataProvider in the key :lib/metadata (i.e. a query)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220),metabase.lib.metadata.MetadataProvider], null)], null)], null);
/**
 * Inputs: [metadata-providerable :- MetadataProviderable]
 *   Return: MetadataProvider
 *        
 * 
 *   Get a MetadataProvider from something that can provide one.
 */
metabase.lib.metadata.__GT_metadata_provider = (function metabase$lib$metadata$__GT_metadata_provider(metadata_providerable){

if(metabase.lib.metadata.protocols.metadata_provider_QMARK_(metadata_providerable)){
return metadata_providerable;
} else {
return new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220).cljs$core$IFn$_invoke$arity$1(metadata_providerable);
}
});
/**
 * Inputs: [metadata-providerable :- MetadataProviderable]
 *   Return: DatabaseMetadata
 *        
 * 
 *   Get metadata about the Database we're querying.
 */
metabase.lib.metadata.database = (function metabase$lib$metadata$database(metadata_providerable){

return metabase.lib.metadata.protocols.database(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable));
});
/**
 * Inputs: [metadata-providerable :- MetadataProviderable]
 *   Return: [:sequential TableMetadata]
 *        
 * 
 *   Get metadata about all Tables for the Database we're querying.
 */
metabase.lib.metadata.tables = (function metabase$lib$metadata$tables(metadata_providerable){

return metabase.lib.metadata.protocols.tables(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable));
});
/**
 * Inputs: [metadata-providerable :- MetadataProviderable table-id :- :metabase.lib.schema.id/table]
 *   Return: TableMetadata
 *        
 * 
 *   Find metadata for a specific Table, either by string `table-name`, and optionally `schema`, or by ID.
 */
metabase.lib.metadata.table = (function metabase$lib$metadata$table(metadata_providerable,table_id){

return metabase.lib.metadata.protocols.table(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),table_id);
});
/**
 * Inputs: [metadata-providerable :- MetadataProviderable table-id :- :metabase.lib.schema.id/table]
 *   Return: [:sequential ColumnMetadata]
 *        
 * 
 *   Get metadata about all the Fields belonging to a specific Table.
 */
metabase.lib.metadata.fields = (function metabase$lib$metadata$fields(metadata_providerable,table_id){

return metabase.lib.metadata.protocols.fields(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),table_id);
});
/**
 * Inputs: [metadata-providerable :- MetadataProviderable field-id :- :metabase.lib.schema.id/field]
 *   Return: ColumnMetadata
 *        
 * 
 *   Get metadata about a specific Field in the Database we're querying.
 */
metabase.lib.metadata.field = (function metabase$lib$metadata$field(metadata_providerable,field_id){

return metabase.lib.metadata.protocols.field(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),field_id);
});
/**
 * Metadata about the columns returned by a particular stage of a pMBQL query. For example a single-stage native query
 *   like
 * 
 *  {:database 1
 *   :lib/type :mbql/query
 *   :stages   [{:lib/type :mbql.stage/mbql
 *               :native   "SELECT id, name FROM VENUES;"}]}
 * 
 *   might have stage metadata like
 * 
 *  {:columns [{:name "id", :base-type :type/Integer}
 *             {:name "name", :base-type :type/Text}]}
 * 
 *   associated with the query's lone stage.
 * 
 *   At some point in the near future we will hopefully attach this metadata directly to each stage in a query, so a
 *   multi-stage query will have `:lib/stage-metadata` for each stage. The main goal is to facilitate things like
 *   returning lists of visible or filterable columns for a given stage of a query. This is TBD, see #28717 for a WIP
 *   implementation of this idea.
 * 
 *   This is the same format as the results metadata returned with QP results in `data.results_metadata`. The `:columns`
 *   portion of this (`data.results_metadata.columns`) is also saved as `Card.result_metadata` for Saved Questions.
 * 
 *   Note that queries currently actually come back with both `data.results_metadata` AND `data.cols`; it looks like the
 *   Frontend actually *merges* these together -- see `applyMetadataDiff` in
 *   `frontend/src/metabase/query_builder/selectors.js` -- but this is ridiculous. Let's try to merge anything missing in
 *   `results_metadata` into `cols` going forward so things don't need to be manually merged in the future.
 */
metabase.lib.metadata.StageMetadata = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("metadata","results","metadata/results",330329298)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),metabase.lib.metadata.ColumnMetadata], null)], null)], null);
/**
 * Inputs: [query :- :map stage-number :- :int]
 *   Return: [:maybe StageMetadata]
 *        
 * 
 *   Get metadata associated with a particular `stage-number` of the query, if any. `stage-number` can be a negative
 *   index.
 * 
 *   Currently, only returns metadata if it is explicitly attached to a stage; in the future we will probably dynamically
 *   calculate this stuff if possible based on DatabaseMetadata and previous stages. Stay tuned!
 */
metabase.lib.metadata.stage = (function metabase$lib$metadata$stage(query,stage_number){

return new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number));
});
/**
 * Inputs: ([query :- :map column-name :- :metabase.lib.schema.common/non-blank-string]
 *         [query :- :map stage-number :- :int column-name :- :metabase.lib.schema.common/non-blank-string])
 *   Return: [:maybe ColumnMetadata]
 *        
 * 
 *   Metadata about a specific column returned by a specific stage of the query, e.g. perhaps the first stage of the
 *   query has an expression `num_cans`, then
 * 
 *  (lib.metadata/stage-column query stage "num_cans")
 * 
 *   should return something like
 * 
 *  {:name "num_cans", :base-type :type/Integer, ...}
 * 
 *   This is currently a best-effort thing and will only return information about columns if stage metadata is attached
 *   to a particular stage. In the near term future this should be better about calculating that metadata dynamically and
 *   returning correct info here.
 */
metabase.lib.metadata.stage_column = (function metabase$lib$metadata$stage_column(var_args){
var G__64845 = arguments.length;
switch (G__64845) {
case 2:
return metabase.lib.metadata.stage_column.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.metadata.stage_column.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.metadata.stage_column.cljs$core$IFn$_invoke$arity$2 = (function (query,column_name){

return metabase.lib.metadata.stage_column.cljs$core$IFn$_invoke$arity$3(query,(-1),column_name);
}));

(metabase.lib.metadata.stage_column.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,column_name){

return cljs.core.some((function (column){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column),column_name)){
return column;
} else {
return null;
}
}),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.stage(query,stage_number)));
}));

(metabase.lib.metadata.stage_column.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: [metadata-providerable :- MetadataProviderable card-id :- :metabase.lib.schema.id/card]
 *   Return: [:maybe CardMetadata]
 *        
 * 
 *   Get metadata for a Card, aka Saved Question, with `card-id`, if it can be found.
 */
metabase.lib.metadata.card = (function metabase$lib$metadata$card(metadata_providerable,card_id){

return metabase.lib.metadata.protocols.card(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),card_id);
});
/**
 * Inputs: [metadata-providerable :- MetadataProviderable segment-id :- :metabase.lib.schema.id/segment]
 *   Return: [:maybe SegmentMetadata]
 *        
 * 
 *   Get metadata for the Segment with `segment-id`, if it can be found.
 */
metabase.lib.metadata.segment = (function metabase$lib$metadata$segment(metadata_providerable,segment_id){

return metabase.lib.metadata.protocols.segment(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),segment_id);
});
/**
 * Inputs: [metadata-providerable :- MetadataProviderable metric-id :- :metabase.lib.schema.id/metric]
 *   Return: [:maybe MetricMetadata]
 *        
 * 
 *   Get metadata for the Metric with `metric-id`, if it can be found.
 */
metabase.lib.metadata.metric = (function metabase$lib$metadata$metric(metadata_providerable,metric_id){

return metabase.lib.metadata.protocols.metric(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),metric_id);
});
/**
 * Inputs: [metadata-providerable :- MetadataProviderable table-id :- [:or :metabase.lib.schema.id/table :string]]
 *   Return: [:maybe [:or CardMetadata TableMetadata]]
 *        
 * 
 *   Convenience, for frontend JS usage (see #31915): look up metadata based on Table ID, handling legacy-style
 *   `card__<id>` strings as well. Throws an Exception (Clj-only, due to Malli validation) if passed an integer Table ID
 *   and the Table does not exist, since this is a real error; however if passed a `card__<id>` that does not exist,
 *   simply returns `nil` (since we do not have a strict expectation that Cards always be present in the
 *   MetadataProvider).
 */
metabase.lib.metadata.table_or_card = (function metabase$lib$metadata$table_or_card(metadata_providerable,table_id){

var temp__5802__auto__ = metabase.lib.util.legacy_string_table_id__GT_card_id(table_id);
if(cljs.core.truth_(temp__5802__auto__)){
var card_id = temp__5802__auto__;
return metabase.lib.metadata.card(metadata_providerable,card_id);
} else {
return metabase.lib.metadata.table(metadata_providerable,table_id);
}
});
Object.defineProperty(module.exports, "metric", { enumerable: false, get: function() { return metabase.lib.metadata.metric; } });
Object.defineProperty(module.exports, "MetricMetadata", { enumerable: false, get: function() { return metabase.lib.metadata.MetricMetadata; } });
Object.defineProperty(module.exports, "stage", { enumerable: false, get: function() { return metabase.lib.metadata.stage; } });
Object.defineProperty(module.exports, "table", { enumerable: false, get: function() { return metabase.lib.metadata.table; } });
Object.defineProperty(module.exports, "DatabaseMetadata", { enumerable: false, get: function() { return metabase.lib.metadata.DatabaseMetadata; } });
Object.defineProperty(module.exports, "fields", { enumerable: false, get: function() { return metabase.lib.metadata.fields; } });
Object.defineProperty(module.exports, "StageMetadata", { enumerable: false, get: function() { return metabase.lib.metadata.StageMetadata; } });
Object.defineProperty(module.exports, "tables", { enumerable: false, get: function() { return metabase.lib.metadata.tables; } });
Object.defineProperty(module.exports, "CardMetadata", { enumerable: false, get: function() { return metabase.lib.metadata.CardMetadata; } });
Object.defineProperty(module.exports, "field", { enumerable: false, get: function() { return metabase.lib.metadata.field; } });
Object.defineProperty(module.exports, "table_or_card", { enumerable: false, get: function() { return metabase.lib.metadata.table_or_card; } });
Object.defineProperty(module.exports, "stage_column", { enumerable: false, get: function() { return metabase.lib.metadata.stage_column; } });
Object.defineProperty(module.exports, "SegmentMetadata", { enumerable: false, get: function() { return metabase.lib.metadata.SegmentMetadata; } });
Object.defineProperty(module.exports, "card", { enumerable: false, get: function() { return metabase.lib.metadata.card; } });
Object.defineProperty(module.exports, "ColumnMetadata", { enumerable: false, get: function() { return metabase.lib.metadata.ColumnMetadata; } });
Object.defineProperty(module.exports, "__GT_metadata_provider", { enumerable: false, get: function() { return metabase.lib.metadata.__GT_metadata_provider; } });
Object.defineProperty(module.exports, "TableMetadata", { enumerable: false, get: function() { return metabase.lib.metadata.TableMetadata; } });
Object.defineProperty(module.exports, "segment", { enumerable: false, get: function() { return metabase.lib.metadata.segment; } });
Object.defineProperty(module.exports, "MetadataProvider", { enumerable: false, get: function() { return metabase.lib.metadata.MetadataProvider; } });
Object.defineProperty(module.exports, "database", { enumerable: false, get: function() { return metabase.lib.metadata.database; } });
Object.defineProperty(module.exports, "MetadataProviderable", { enumerable: false, get: function() { return metabase.lib.metadata.MetadataProviderable; } });
//# sourceMappingURL=metabase.lib.metadata.js.map
