var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.types.constants.js");
require("./metabase.lib.util.js");
require("./metabase.types.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.types.isa.js");

goog.provide('metabase.lib.types.isa');
/**
 * Decide if `_column` is a subtype of the type denoted by the keyword `type-kw`.
 *   Both effective and semantic types are taken into account.
 */
metabase.lib.types.isa.isa_QMARK_ = (function metabase$lib$types$isa$isa_QMARK_(p__64796,type_kw){
var map__64797 = p__64796;
var map__64797__$1 = cljs.core.__destructure_map(map__64797);
var _column = map__64797__$1;
var effective_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64797__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458));
var semantic_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64797__$1,new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107));
return ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,type_kw)) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(semantic_type,type_kw)));
});
/**
 * Returns if `column` is of category `category`.
 *   The possible categories are the keys in [[metabase.lib.types.constants/type-hierarchies]].
 */
metabase.lib.types.isa.field_type_QMARK_ = (function metabase$lib$types$isa$field_type_QMARK_(category,column){
var type_definition = (metabase.lib.types.constants.type_hierarchies.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.types.constants.type_hierarchies.cljs$core$IFn$_invoke$arity$1(category) : metabase.lib.types.constants.type_hierarchies.call(null,category));
if((column == null)){
return false;
} else {
if(cljs.core.truth_(cljs.core.some((function (p__64802){
var vec__64803 = p__64802;
var type_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64803,(0),null);
var types = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64803,(1),null);
var and__5043__auto__ = (function (){var fexpr__64806 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),null,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),null], null), null);
return (fexpr__64806.cljs$core$IFn$_invoke$arity$1 ? fexpr__64806.cljs$core$IFn$_invoke$arity$1(type_type) : fexpr__64806.call(null,type_type));
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.some((function (p1__64799_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2((type_type.cljs$core$IFn$_invoke$arity$1 ? type_type.cljs$core$IFn$_invoke$arity$1(column) : type_type.call(null,column)),p1__64799_SHARP_);
}),types);
} else {
return and__5043__auto__;
}
}),type_definition))){
return true;
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__64800_SHARP_){
return (metabase.lib.types.isa.field_type_QMARK_.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.types.isa.field_type_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__64800_SHARP_,column) : metabase.lib.types.isa.field_type_QMARK_.call(null,p1__64800_SHARP_,column));
}),new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(type_definition)))){
return false;
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__64801_SHARP_){
return (metabase.lib.types.isa.field_type_QMARK_.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.types.isa.field_type_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__64801_SHARP_,column) : metabase.lib.types.isa.field_type_QMARK_.call(null,p1__64801_SHARP_,column));
}),new cljs.core.Keyword(null,"include","include",153360230).cljs$core$IFn$_invoke$arity$1(type_definition)))){
return true;
} else {
return false;

}
}
}
}
});
/**
 * Return the category `column` belongs to.
 *   The possible categories are the keys in [[metabase.lib.types.constants/type-hierarchies]].
 */
metabase.lib.types.isa.field_type = (function metabase$lib$types$isa$field_type(column){
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__64808_SHARP_){
return metabase.lib.types.isa.field_type_QMARK_(p1__64808_SHARP_,column);
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.types.constants","temporal","metabase.lib.types.constants/temporal",896988859),new cljs.core.Keyword("metabase.lib.types.constants","location","metabase.lib.types.constants/location",1597944369),new cljs.core.Keyword("metabase.lib.types.constants","coordinate","metabase.lib.types.constants/coordinate",-565327840),new cljs.core.Keyword("metabase.lib.types.constants","foreign_key","metabase.lib.types.constants/foreign_key",-1061052182),new cljs.core.Keyword("metabase.lib.types.constants","primary_key","metabase.lib.types.constants/primary_key",1915474107),new cljs.core.Keyword("metabase.lib.types.constants","boolean","metabase.lib.types.constants/boolean",-2002690319),new cljs.core.Keyword("metabase.lib.types.constants","string","metabase.lib.types.constants/string",-2076057579),new cljs.core.Keyword("metabase.lib.types.constants","string_like","metabase.lib.types.constants/string_like",-1907279613),new cljs.core.Keyword("metabase.lib.types.constants","number","metabase.lib.types.constants/number",1385378285)], null));
});
/**
 * Is `column` of a temporal type?
 */
metabase.lib.types.isa.date_QMARK_ = (function metabase$lib$types$isa$date_QMARK_(column){
return metabase.lib.types.isa.field_type_QMARK_(new cljs.core.Keyword("metabase.lib.types.constants","temporal","metabase.lib.types.constants/temporal",896988859),column);
});
/**
 * Is `column` of a numeric type?
 */
metabase.lib.types.isa.numeric_QMARK_ = (function metabase$lib$types$isa$numeric_QMARK_(column){
return metabase.lib.types.isa.field_type_QMARK_(new cljs.core.Keyword("metabase.lib.types.constants","number","metabase.lib.types.constants/number",1385378285),column);
});
/**
 * Is `column` of a boolean type?
 */
metabase.lib.types.isa.boolean_QMARK_ = (function metabase$lib$types$isa$boolean_QMARK_(column){
return metabase.lib.types.isa.field_type_QMARK_(new cljs.core.Keyword("metabase.lib.types.constants","boolean","metabase.lib.types.constants/boolean",-2002690319),column);
});
/**
 * Is `column` of a string type?
 */
metabase.lib.types.isa.string_QMARK_ = (function metabase$lib$types$isa$string_QMARK_(column){
return metabase.lib.types.isa.field_type_QMARK_(new cljs.core.Keyword("metabase.lib.types.constants","string","metabase.lib.types.constants/string",-2076057579),column);
});
/**
 * Is `column` of a summable type?
 */
metabase.lib.types.isa.summable_QMARK_ = (function metabase$lib$types$isa$summable_QMARK_(column){
return metabase.lib.types.isa.field_type_QMARK_(new cljs.core.Keyword("metabase.lib.types.constants","summable","metabase.lib.types.constants/summable",54756759),column);
});
/**
 * Is `column` of a scope type?
 */
metabase.lib.types.isa.scope_QMARK_ = (function metabase$lib$types$isa$scope_QMARK_(column){
return metabase.lib.types.isa.field_type_QMARK_(new cljs.core.Keyword("metabase.lib.types.constants","scope","metabase.lib.types.constants/scope",-390150453),column);
});
/**
 * Is `column` of a categorical type?
 */
metabase.lib.types.isa.category_QMARK_ = (function metabase$lib$types$isa$category_QMARK_(column){
return metabase.lib.types.isa.field_type_QMARK_(new cljs.core.Keyword("metabase.lib.types.constants","category","metabase.lib.types.constants/category",-644284871),column);
});
/**
 * Is `column` of a location type?
 */
metabase.lib.types.isa.location_QMARK_ = (function metabase$lib$types$isa$location_QMARK_(column){
return metabase.lib.types.isa.field_type_QMARK_(new cljs.core.Keyword("metabase.lib.types.constants","location","metabase.lib.types.constants/location",1597944369),column);
});
/**
 * Is `column` a description?
 */
metabase.lib.types.isa.description_QMARK_ = (function metabase$lib$types$isa$description_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Description","type/Description",-680883950));
});
/**
 * Is `column` a dimension?
 */
metabase.lib.types.isa.dimension_QMARK_ = (function metabase$lib$types$isa$dimension_QMARK_(column){
var and__5043__auto__ = column;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","aggregation","source/aggregation",849868605))) && ((!(metabase.lib.types.isa.description_QMARK_(column)))));
} else {
return and__5043__auto__;
}
});
/**
 * Is `column` a metric?
 */
metabase.lib.types.isa.metric_QMARK_ = (function metabase$lib$types$isa$metric_QMARK_(column){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","breakout","source/breakout",-1763158991))) && (metabase.lib.types.isa.summable_QMARK_(column)));
});
/**
 * Is `column` a foreign-key?
 */
metabase.lib.types.isa.foreign_key_QMARK_ = (function metabase$lib$types$isa$foreign_key_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","FK","type/FK",360937035));
});
/**
 * Is `column` a primary-key?
 */
metabase.lib.types.isa.primary_key_QMARK_ = (function metabase$lib$types$isa$primary_key_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","PK","type/PK",-1723274286));
});
/**
 * Is `column` an entity name?
 */
metabase.lib.types.isa.entity_name_QMARK_ = (function metabase$lib$types$isa$entity_name_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Name","type/Name",-134787639));
});
/**
 * Is this `_column` whatever (including nil)?
 */
metabase.lib.types.isa.any_QMARK_ = (function metabase$lib$types$isa$any_QMARK_(_column){
return true;
});
/**
 * Is `column` a numneric base type?
 */
metabase.lib.types.isa.numeric_base_type_QMARK_ = (function metabase$lib$types$isa$numeric_base_type_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Number","type/Number",-2071693690));
});
/**
 * Is `column` a date without time?
 */
metabase.lib.types.isa.date_without_time_QMARK_ = (function metabase$lib$types$isa$date_without_time_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Date","type/Date",-690428629));
});
/**
 * Is `column` a number without some other semantic type (like ZIP code)?
 */
metabase.lib.types.isa.number_QMARK_ = (function metabase$lib$types$isa$number_QMARK_(column){
var and__5043__auto__ = metabase.lib.types.isa.numeric_base_type_QMARK_(column);
if(and__5043__auto__){
var semantic_type = new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column);
return (((semantic_type == null)) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(semantic_type,new cljs.core.Keyword("type","Number","type/Number",-2071693690))));
} else {
return and__5043__auto__;
}
});
/**
 * Is `column` a integer column?
 */
metabase.lib.types.isa.integer_QMARK_ = (function metabase$lib$types$isa$integer_QMARK_(column){
return metabase.lib.types.isa.field_type_QMARK_(new cljs.core.Keyword("metabase.lib.types.constants","integer","metabase.lib.types.constants/integer",1592888555),column);
});
/**
 * Is `column` a time?
 */
metabase.lib.types.isa.time_QMARK_ = (function metabase$lib$types$isa$time_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Time","type/Time",-814852413));
});
/**
 * Is `column` an address?
 */
metabase.lib.types.isa.address_QMARK_ = (function metabase$lib$types$isa$address_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Address","type/Address",-413689880));
});
/**
 * Is `column` a city?
 */
metabase.lib.types.isa.city_QMARK_ = (function metabase$lib$types$isa$city_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","City","type/City",420361040));
});
/**
 * Is `column` a state?
 */
metabase.lib.types.isa.state_QMARK_ = (function metabase$lib$types$isa$state_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","State","type/State",-154641657));
});
/**
 * Is `column` a zip-code?
 */
metabase.lib.types.isa.zip_code_QMARK_ = (function metabase$lib$types$isa$zip_code_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","ZipCode","type/ZipCode",845484542));
});
/**
 * Is `column` a country?
 */
metabase.lib.types.isa.country_QMARK_ = (function metabase$lib$types$isa$country_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Country","type/Country",2058497652));
});
/**
 * Is `column` a coordinate?
 */
metabase.lib.types.isa.coordinate_QMARK_ = (function metabase$lib$types$isa$coordinate_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043));
});
/**
 * Is `column` a latitude?
 */
metabase.lib.types.isa.latitude_QMARK_ = (function metabase$lib$types$isa$latitude_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Latitude","type/Latitude",-1080544141));
});
/**
 * Is `column` a longitude?
 */
metabase.lib.types.isa.longitude_QMARK_ = (function metabase$lib$types$isa$longitude_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Longitude","type/Longitude",-196788672));
});
/**
 * Is `column` a currency?
 */
metabase.lib.types.isa.currency_QMARK_ = (function metabase$lib$types$isa$currency_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Currency","type/Currency",713609092));
});
/**
 * Is `column` a comment?
 */
metabase.lib.types.isa.comment_QMARK_ = (function metabase$lib$types$isa$comment_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Comment","type/Comment",-1406574403));
});
/**
 * Is `column` an ID?
 */
metabase.lib.types.isa.id_QMARK_ = (function metabase$lib$types$isa$id_QMARK_(column){
return ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","FK","type/FK",360937035))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","PK","type/PK",-1723274286))));
});
/**
 * Is `column` a URL?
 */
metabase.lib.types.isa.URL_QMARK_ = (function metabase$lib$types$isa$URL_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","URL","type/URL",-1433976351));
});
/**
 * Is `column` an email?
 */
metabase.lib.types.isa.email_QMARK_ = (function metabase$lib$types$isa$email_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","Email","type/Email",-1486863280));
});
/**
 * Is `column` an avatar URL?
 */
metabase.lib.types.isa.avatar_URL_QMARK_ = (function metabase$lib$types$isa$avatar_URL_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","AvatarURL","type/AvatarURL",-425042887));
});
/**
 * Is `column` an image URL?
 */
metabase.lib.types.isa.image_URL_QMARK_ = (function metabase$lib$types$isa$image_URL_QMARK_(column){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("type","ImageURL","type/ImageURL",2081541690));
});
/**
 * Does the collection `columns` contain both a latitude and a longitude column?
 */
metabase.lib.types.isa.has_latitude_and_longitude_QMARK_ = (function metabase$lib$types$isa$has_latitude_and_longitude_QMARK_(columns){
return cljs.core.every_QMARK_((function (p1__64936_SHARP_){
return cljs.core.some(p1__64936_SHARP_,columns);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.types.isa.latitude_QMARK_,metabase.lib.types.isa.longitude_QMARK_], null));
});
/**
 * Return a prdicate for checking if a column is a primary key.
 */
metabase.lib.types.isa.primary_key_pred = (function metabase$lib$types$isa$primary_key_pred(table_id){
return (function metabase$lib$types$isa$primary_key_pred_$_primary_key_pred_for_table_id(column){
var pk_QMARK_ = metabase.lib.types.isa.primary_key_QMARK_(column);
if(cljs.core.truth_(metabase.lib.util.legacy_string_table_id__GT_card_id(table_id))){
return pk_QMARK_;
} else {
return ((pk_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(column),table_id)));
}
});
});
Object.defineProperty(module.exports, "date_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.date_QMARK_; } });
Object.defineProperty(module.exports, "URL_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.URL_QMARK_; } });
Object.defineProperty(module.exports, "any_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.any_QMARK_; } });
Object.defineProperty(module.exports, "description_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.description_QMARK_; } });
Object.defineProperty(module.exports, "foreign_key_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.foreign_key_QMARK_; } });
Object.defineProperty(module.exports, "metric_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.metric_QMARK_; } });
Object.defineProperty(module.exports, "address_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.address_QMARK_; } });
Object.defineProperty(module.exports, "isa_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.isa_QMARK_; } });
Object.defineProperty(module.exports, "boolean_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.boolean_QMARK_; } });
Object.defineProperty(module.exports, "category_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.category_QMARK_; } });
Object.defineProperty(module.exports, "email_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.email_QMARK_; } });
Object.defineProperty(module.exports, "numeric_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.numeric_QMARK_; } });
Object.defineProperty(module.exports, "zip_code_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.zip_code_QMARK_; } });
Object.defineProperty(module.exports, "field_type_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.field_type_QMARK_; } });
Object.defineProperty(module.exports, "longitude_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.longitude_QMARK_; } });
Object.defineProperty(module.exports, "time_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.time_QMARK_; } });
Object.defineProperty(module.exports, "id_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.id_QMARK_; } });
Object.defineProperty(module.exports, "state_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.state_QMARK_; } });
Object.defineProperty(module.exports, "entity_name_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.entity_name_QMARK_; } });
Object.defineProperty(module.exports, "city_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.city_QMARK_; } });
Object.defineProperty(module.exports, "string_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.string_QMARK_; } });
Object.defineProperty(module.exports, "field_type", { enumerable: true, get: function() { return metabase.lib.types.isa.field_type; } });
Object.defineProperty(module.exports, "latitude_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.latitude_QMARK_; } });
Object.defineProperty(module.exports, "location_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.location_QMARK_; } });
Object.defineProperty(module.exports, "primary_key_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.primary_key_QMARK_; } });
Object.defineProperty(module.exports, "dimension_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.dimension_QMARK_; } });
Object.defineProperty(module.exports, "image_URL_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.image_URL_QMARK_; } });
Object.defineProperty(module.exports, "coordinate_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.coordinate_QMARK_; } });
Object.defineProperty(module.exports, "avatar_URL_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.avatar_URL_QMARK_; } });
Object.defineProperty(module.exports, "summable_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.summable_QMARK_; } });
Object.defineProperty(module.exports, "scope_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.scope_QMARK_; } });
Object.defineProperty(module.exports, "country_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.country_QMARK_; } });
Object.defineProperty(module.exports, "integer_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.integer_QMARK_; } });
Object.defineProperty(module.exports, "has_latitude_and_longitude_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.has_latitude_and_longitude_QMARK_; } });
Object.defineProperty(module.exports, "comment_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.comment_QMARK_; } });
Object.defineProperty(module.exports, "currency_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.currency_QMARK_; } });
Object.defineProperty(module.exports, "numeric_base_type_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.numeric_base_type_QMARK_; } });
Object.defineProperty(module.exports, "primary_key_pred", { enumerable: true, get: function() { return metabase.lib.types.isa.primary_key_pred; } });
Object.defineProperty(module.exports, "date_without_time_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.date_without_time_QMARK_; } });
Object.defineProperty(module.exports, "number_QMARK_", { enumerable: true, get: function() { return metabase.lib.types.isa.number_QMARK_; } });
//# sourceMappingURL=metabase.lib.types.isa.js.map
