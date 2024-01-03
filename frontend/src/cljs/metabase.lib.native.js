var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.domain_entities.converters.js");
require("./clojure.set.js");
require("./clojure.string.js");
require("./medley.core.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.options.js");
require("./metabase.lib.query.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.humanization.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.native.js");

goog.provide('metabase.lib.native$');
metabase.lib.native$.TemplateTag = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Keyword(null,"card","card",-1430355152)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("js","prop","js/prop",-515165077),"display-name",new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snippet-name","snippet-name",819240328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("js","prop","js/prop",-515165077),"snippet-name",new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-id","card-id",-1770060179),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("js","prop","js/prop",-515165077),"card-id",new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("js","prop","js/prop",-515165077),"widget-type",new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
metabase.lib.native$.TemplateTags = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),metabase.lib.native$.TemplateTag], null);
metabase.lib.native$.variable_tag_regex = /\{\{\s*([A-Za-z0-9_\.]+)\s*\}\}/;
metabase.lib.native$.snippet_tag_regex = /\{\{\s*(snippet:\s*[^}]+)\s*\}\}/;
metabase.lib.native$.card_tag_regex = /\{\{\s*(#([0-9]*)(-[a-z0-9-]*)?)\s*\}\}/;
metabase.lib.native$.tag_regexes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.native$.variable_tag_regex,metabase.lib.native$.snippet_tag_regex,metabase.lib.native$.card_tag_regex], null);
/**
 * Inputs: [query-text :- :metabase.lib.schema.common/non-blank-string]
 *   Return: [:set :metabase.lib.schema.common/non-blank-string]
 *        
 * 
 *   Given the text of a native query, extract a possibly-empty set of template tag strings from it.
 */
metabase.lib.native$.recognize_template_tags = (function metabase$lib$native$recognize_template_tags(query_text){

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__80418_SHARP_){
return cljs.core.re_seq(p1__80418_SHARP_,query_text);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second)),metabase.lib.native$.tag_regexes);
});
metabase.lib.native$.tag_name__GT_card_id = (function metabase$lib$native$tag_name__GT_card_id(tag_name){
var temp__5804__auto__ = cljs.core.re_matches(/^#(\d+)(-[a-z0-9-]*)?$/,tag_name);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__80424 = temp__5804__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80424,(0),null);
var id_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80424,(1),null);
return cljs.core.parse_long(id_str);
} else {
return null;
}
});
metabase.lib.native$.tag_name__GT_snippet_name = (function metabase$lib$native$tag_name__GT_snippet_name(tag_name){
if(clojure.string.starts_with_QMARK_(tag_name,"snippet:")){
return clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(tag_name,(("snippet:").length)));
} else {
return null;
}
});
metabase.lib.native$.fresh_tag = (function metabase$lib$native$fresh_tag(tag_name){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177),tag_name,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null);
});
metabase.lib.native$.finish_tag = (function metabase$lib$native$finish_tag(p__80474){
var map__80475 = p__80474;
var map__80475__$1 = cljs.core.__destructure_map(map__80475);
var tag = map__80475__$1;
var tag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80475__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,(function (){var temp__5804__auto__ = metabase.lib.native$.tag_name__GT_card_id(tag_name);
if(cljs.core.truth_(temp__5804__auto__)){
var card_id = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"card-id","card-id",-1770060179),card_id], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = metabase.lib.native$.tag_name__GT_snippet_name(tag_name);
if(cljs.core.truth_(temp__5804__auto__)){
var snippet_name = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Keyword(null,"snippet-name","snippet-name",819240328),snippet_name], null);
} else {
return null;
}
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(tag))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.util.humanization.name__GT_human_readable_name.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"simple","simple",-581868663),tag_name)], null))], 0));
});
metabase.lib.native$.rename_template_tag = (function metabase$lib$native$rename_template_tag(existing_tags,old_name,new_name){
var old_tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing_tags,old_name);
var display_name = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(old_tag),metabase.util.humanization.name__GT_human_readable_name.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"simple","simple",-581868663),old_name)))?metabase.util.humanization.name__GT_human_readable_name.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"simple","simple",-581868663),new_name):new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(old_tag));
var new_tag = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(old_tag,new cljs.core.Keyword(null,"snippet-name","snippet-name",819240328),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"card-id","card-id",-1770060179)], 0)),new cljs.core.Keyword(null,"display-name","display-name",694513143),display_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),new_name], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(existing_tags,old_name),new_name,new_tag);
});
metabase.lib.native$.unify_template_tags = (function metabase$lib$native$unify_template_tags(query_tag_names,existing_tags,existing_tag_names){
var new_tags = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(query_tag_names,existing_tag_names);
var old_tags = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(existing_tag_names,query_tag_names);
var tags = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((1),cljs.core.count(new_tags),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(old_tags)], 0)))?metabase.lib.native$.rename_template_tag(existing_tags,cljs.core.first(old_tags),cljs.core.first(new_tags)):cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([medley.core.remove_keys(old_tags,existing_tags),medley.core.index_by(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.fresh_tag,new_tags))], 0)));
return cljs.core.update_vals(tags,metabase.lib.native$.finish_tag);
});
/**
 * Inputs: ([query-text :- :metabase.lib.schema.common/non-blank-string]
 *         [query-text :- :metabase.lib.schema.common/non-blank-string existing-tags :- [:maybe TemplateTags]])
 *   Return: TemplateTags
 *        
 * 
 *   Extract the template tags from a native query's text.
 * 
 *   If the optional map of existing tags previously parsed is given, this will reuse the existing tags where
 *   they match up with the new one (in particular, it will preserve the UUIDs).
 * 
 *   Given the text of a native query, extract a possibly-empty set of template tag strings from it.
 * 
 *   These looks like mustache templates. For variables, we only allow alphanumeric characters, eg. `{{foo}}`.
 *   For snippets they start with `snippet:`, eg. `{{ snippet: arbitrary text here }}`.
 *   And for card references either `{{ #123 }}` or with the optional human label `{{ #123-card-title-slug }}`.
 * 
 *   Invalid patterns are simply ignored, so something like `{{&foo!}}` is just disregarded.
 */
metabase.lib.native$.extract_template_tags = (function metabase$lib$native$extract_template_tags(var_args){
var G__80515 = arguments.length;
switch (G__80515) {
case 1:
return metabase.lib.native$.extract_template_tags.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.native$.extract_template_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.native$.extract_template_tags.cljs$core$IFn$_invoke$arity$1 = (function (query_text){

return metabase.lib.native$.extract_template_tags.cljs$core$IFn$_invoke$arity$2(query_text,null);
}));

(metabase.lib.native$.extract_template_tags.cljs$core$IFn$_invoke$arity$2 = (function (query_text,existing_tags){

var query_tag_names = cljs.core.not_empty(metabase.lib.native$.recognize_template_tags(query_text));
var existing_tag_names = cljs.core.not_empty(cljs.core.set(cljs.core.keys(existing_tags)));
if(cljs.core.truth_((function (){var or__5045__auto__ = query_tag_names;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return existing_tag_names;
}
})())){
return metabase.lib.native$.unify_template_tags(query_tag_names,existing_tags,existing_tag_names);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));

(metabase.lib.native$.extract_template_tags.cljs$lang$maxFixedArity = 2);

/**
 * Converter to a map of `TemplateTag`s keyed by their string names.
 */
metabase.lib.native$.__GT_TemplateTags = metabase.domain_entities.converters.incoming(metabase.lib.native$.TemplateTags);

/**
 * Converter from a map of `TemplateTag`s keyed by their string names to vanilla JS.
 */
metabase.lib.native$.TemplateTags__GT_ = metabase.domain_entities.converters.outgoing(metabase.lib.native$.TemplateTags);
metabase.lib.native$.assert_native_query_BANG_ = (function metabase$lib$native$assert_native_query_BANG_(stage){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(stage),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194))){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n("Must be a native query")),"\n","(= (:lib/type stage) :mbql.stage/native)"].join('')));
}
});
metabase.lib.native$.all_native_extra_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collection","collection",-683361892),null], null), null);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.native","native-extras","metabase.lib.native/native-extras",1125545077),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null));
/**
 * Inputs: [metadata-provider :- lib.metadata/MetadataProviderable]
 *   Return: set?
 *        
 * 
 *   Returns the extra keys that are required for this database's native queries.
 */
metabase.lib.native$.required_native_extras = (function metabase$lib$native$required_native_extras(metadata_provider){

var db = metabase.lib.metadata.database(metadata_provider);
var G__80544 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.Keyword(null,"native-requires-specified-collection","native-requires-specified-collection",1239149925)], null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__80544,new cljs.core.Keyword(null,"collection","collection",-683361892));
} else {
return G__80544;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query native-extras :- [:maybe :metabase.lib.native/native-extras]]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Updates the extras required for the db to run this query.
 * The first stage must be a native type. Will ignore extras not in `required-native-extras`
 */
metabase.lib.native$.with_native_extras = (function metabase$lib$native$with_native_extras(query,native_extras){

var required_extras = metabase.lib.native$.required_native_extras(query);
return metabase.lib.util.update_query_stage(query,(0),(function (stage){
var extras_to_remove = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.all_native_extra_keys,required_extras);
var stage_without_old_extras = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,stage,extras_to_remove);
var result = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stage_without_old_extras,cljs.core.select_keys(native_extras,required_extras)], 0));
var missing_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_extras,cljs.core.set(cljs.core.keys(native_extras)));
metabase.lib.native$.assert_native_query_BANG_(metabase.lib.util.query_stage(query,(0)));

if(cljs.core.empty_QMARK_(missing_keys)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Missing extra, required keys for native query: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_keys], 0))], 0))),"\n","(empty? missing-keys)"].join('')));
}

return result;
}));
});
/**
 * Inputs: ([metadata-providerable :- lib.metadata/MetadataProviderable inner-query :- :metabase.lib.schema.common/non-blank-string]
 *         [metadata-providerable :- lib.metadata/MetadataProviderable inner-query :- :metabase.lib.schema.common/non-blank-string results-metadata :- [:maybe lib.metadata/StageMetadata] native-extras :- [:maybe :metabase.lib.native/native-extras]])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Create a new native query.
 * 
 *   Native in this sense means a pMBQL query with a first stage that is a native query.
 */
metabase.lib.native$.native_query = (function metabase$lib$native$native_query(var_args){
var G__80572 = arguments.length;
switch (G__80572) {
case 2:
return metabase.lib.native$.native_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return metabase.lib.native$.native_query.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.native$.native_query.cljs$core$IFn$_invoke$arity$2 = (function (metadata_providerable,inner_query){

return metabase.lib.native$.native_query.cljs$core$IFn$_invoke$arity$4(metadata_providerable,inner_query,null,null);
}));

(metabase.lib.native$.native_query.cljs$core$IFn$_invoke$arity$4 = (function (metadata_providerable,inner_query,results_metadata,native_extras){

var tags = metabase.lib.native$.extract_template_tags.cljs$core$IFn$_invoke$arity$1(inner_query);
return metabase.lib.native$.with_native_extras(metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(metadata_providerable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.options.ensure_uuid(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610),results_metadata,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),tags,new cljs.core.Keyword(null,"native","native",-613060878),inner_query], null))], null)),native_extras);
}));

(metabase.lib.native$.native_query.cljs$lang$maxFixedArity = 4);

/**
 * Inputs: ([query :- :metabase.lib.schema/query metadata-provider :- lib.metadata/MetadataProviderable]
 *         [query :- :metabase.lib.schema/query metadata-provider :- lib.metadata/MetadataProviderable native-extras :- [:maybe :metabase.lib.native/native-extras]])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Changes the database for this query. The first stage must be a native type.
 * Native extras must be provided if the new database requires it.
 */
metabase.lib.native$.with_different_database = (function metabase$lib$native$with_different_database(var_args){
var G__80579 = arguments.length;
switch (G__80579) {
case 2:
return metabase.lib.native$.with_different_database.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.native$.with_different_database.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.native$.with_different_database.cljs$core$IFn$_invoke$arity$2 = (function (query,metadata_provider){

return metabase.lib.native$.with_different_database.cljs$core$IFn$_invoke$arity$3(query,metadata_provider,null);
}));

(metabase.lib.native$.with_different_database.cljs$core$IFn$_invoke$arity$3 = (function (query,metadata_provider,native_extras){

metabase.lib.native$.assert_native_query_BANG_(metabase.lib.util.query_stage(query,(0)));

return metabase.lib.native$.with_native_extras(metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(metadata_provider,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query)),native_extras);
}));

(metabase.lib.native$.with_different_database.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: [:maybe :metabase.lib.native/native-extras]
 *        
 * 
 *   Returns the extra keys for native queries associated with this query.
 */
metabase.lib.native$.native_extras = (function metabase$lib$native$native_extras(query){

return cljs.core.not_empty(cljs.core.select_keys(metabase.lib.util.query_stage(query,(0)),metabase.lib.native$.required_native_extras(query)));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query inner-query :- :metabase.lib.schema.common/non-blank-string]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Update the raw native query, the first stage must already be a native type.
 * Replaces templates tags
 */
metabase.lib.native$.with_native_query = (function metabase$lib$native$with_native_query(query,inner_query){

return metabase.lib.util.update_query_stage(query,(0),(function (p__80597){
var map__80598 = p__80597;
var map__80598__$1 = cljs.core.__destructure_map(map__80598);
var stage = map__80598__$1;
var existing_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80598__$1,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685));
metabase.lib.native$.assert_native_query_BANG_(stage);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(stage,new cljs.core.Keyword(null,"native","native",-613060878),inner_query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),metabase.lib.native$.extract_template_tags.cljs$core$IFn$_invoke$arity$2(inner_query,existing_tags)], 0));
}));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query tags :- TemplateTags]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Updates the native query's template tags.
 */
metabase.lib.native$.with_template_tags = (function metabase$lib$native$with_template_tags(query,tags){

return metabase.lib.util.update_query_stage(query,(0),(function (p__80607){
var map__80608 = p__80607;
var map__80608__$1 = cljs.core.__destructure_map(map__80608);
var stage = map__80608__$1;
var existing_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80608__$1,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685));
metabase.lib.native$.assert_native_query_BANG_(stage);

var valid_tags = cljs.core.keys(existing_tags);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stage,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2(existing_tags,cljs.core.select_keys(tags,valid_tags)));
}));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Returns the native query string
 */
metabase.lib.native$.raw_native_query = (function metabase$lib$native$raw_native_query(query){

return new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,(0)));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: TemplateTags
 *        
 * 
 *   Returns the native query's template tags
 */
metabase.lib.native$.template_tags = (function metabase$lib$native$template_tags(query){

return new cljs.core.Keyword(null,"template-tags","template-tags",1853115685).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,(0)));
});
Object.defineProperty(module.exports, "extract_template_tags", { enumerable: false, get: function() { return metabase.lib.native$.extract_template_tags; } });
Object.defineProperty(module.exports, "rename_template_tag", { enumerable: false, get: function() { return metabase.lib.native$.rename_template_tag; } });
Object.defineProperty(module.exports, "snippet_tag_regex", { enumerable: false, get: function() { return metabase.lib.native$.snippet_tag_regex; } });
Object.defineProperty(module.exports, "TemplateTags__GT_", { enumerable: false, get: function() { return metabase.lib.native$.TemplateTags__GT_; } });
Object.defineProperty(module.exports, "native_extras", { enumerable: false, get: function() { return metabase.lib.native$.native_extras; } });
Object.defineProperty(module.exports, "tag_name__GT_card_id", { enumerable: false, get: function() { return metabase.lib.native$.tag_name__GT_card_id; } });
Object.defineProperty(module.exports, "raw_native_query", { enumerable: false, get: function() { return metabase.lib.native$.raw_native_query; } });
Object.defineProperty(module.exports, "fresh_tag", { enumerable: false, get: function() { return metabase.lib.native$.fresh_tag; } });
Object.defineProperty(module.exports, "with_different_database", { enumerable: false, get: function() { return metabase.lib.native$.with_different_database; } });
Object.defineProperty(module.exports, "TemplateTag", { enumerable: false, get: function() { return metabase.lib.native$.TemplateTag; } });
Object.defineProperty(module.exports, "assert_native_query_BANG_", { enumerable: false, get: function() { return metabase.lib.native$.assert_native_query_BANG_; } });
Object.defineProperty(module.exports, "all_native_extra_keys", { enumerable: false, get: function() { return metabase.lib.native$.all_native_extra_keys; } });
Object.defineProperty(module.exports, "recognize_template_tags", { enumerable: false, get: function() { return metabase.lib.native$.recognize_template_tags; } });
Object.defineProperty(module.exports, "tag_regexes", { enumerable: false, get: function() { return metabase.lib.native$.tag_regexes; } });
Object.defineProperty(module.exports, "tag_name__GT_snippet_name", { enumerable: false, get: function() { return metabase.lib.native$.tag_name__GT_snippet_name; } });
Object.defineProperty(module.exports, "template_tags", { enumerable: false, get: function() { return metabase.lib.native$.template_tags; } });
Object.defineProperty(module.exports, "TemplateTags", { enumerable: false, get: function() { return metabase.lib.native$.TemplateTags; } });
Object.defineProperty(module.exports, "variable_tag_regex", { enumerable: false, get: function() { return metabase.lib.native$.variable_tag_regex; } });
Object.defineProperty(module.exports, "finish_tag", { enumerable: false, get: function() { return metabase.lib.native$.finish_tag; } });
Object.defineProperty(module.exports, "unify_template_tags", { enumerable: false, get: function() { return metabase.lib.native$.unify_template_tags; } });
Object.defineProperty(module.exports, "native_query", { enumerable: false, get: function() { return metabase.lib.native$.native_query; } });
Object.defineProperty(module.exports, "with_native_extras", { enumerable: false, get: function() { return metabase.lib.native$.with_native_extras; } });
Object.defineProperty(module.exports, "__GT_TemplateTags", { enumerable: false, get: function() { return metabase.lib.native$.__GT_TemplateTags; } });
Object.defineProperty(module.exports, "card_tag_regex", { enumerable: false, get: function() { return metabase.lib.native$.card_tag_regex; } });
Object.defineProperty(module.exports, "with_template_tags", { enumerable: false, get: function() { return metabase.lib.native$.with_template_tags; } });
Object.defineProperty(module.exports, "required_native_extras", { enumerable: false, get: function() { return metabase.lib.native$.required_native_extras; } });
Object.defineProperty(module.exports, "with_native_query", { enumerable: false, get: function() { return metabase.lib.native$.with_native_query; } });
//# sourceMappingURL=metabase.lib.native.js.map
