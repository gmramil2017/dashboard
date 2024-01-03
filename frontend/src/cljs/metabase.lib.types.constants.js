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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.types.constants.js");

goog.provide('metabase.lib.types.constants');
goog.scope(function(){
  metabase.lib.types.constants.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * A map of Type name (as string, without `:type/` namespace) -> type keyword
 * 
 *       {"Temporal" :type/Temporal, ...}
 */
metabase.lib.types.constants.name__GT_type = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,typ){
var G__63604 = m;
metabase.lib.types.constants.goog$module$goog$object.set(G__63604,cljs.core.name(typ),typ);

return G__63604;
}),({}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.descendants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","*","type/*",-1283496752),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996),new cljs.core.Keyword("Relation","*","Relation/*",-706261522)], null)], 0))));
goog.exportSymbol('metabase.lib.types.constants.name__GT_type', metabase.lib.types.constants.name__GT_type);

/**
 * JS-friendly access for the number type
 */
metabase.lib.types.constants.key_number = new cljs.core.Keyword("metabase.lib.types.constants","number","metabase.lib.types.constants/number",1385378285);
goog.exportSymbol('metabase.lib.types.constants.key_number', metabase.lib.types.constants.key_number);

/**
 * JS-friendly access for the string type
 */
metabase.lib.types.constants.key_string = new cljs.core.Keyword("metabase.lib.types.constants","string","metabase.lib.types.constants/string",-2076057579);
goog.exportSymbol('metabase.lib.types.constants.key_string', metabase.lib.types.constants.key_string);

/**
 * JS-friendly access for the string-like type
 */
metabase.lib.types.constants.key_string_like = new cljs.core.Keyword("metabase.lib.types.constants","string-like","metabase.lib.types.constants/string-like",776315654);
goog.exportSymbol('metabase.lib.types.constants.key_string_like', metabase.lib.types.constants.key_string_like);

/**
 * JS-friendly access for the boolean type
 */
metabase.lib.types.constants.key_boolean = new cljs.core.Keyword("metabase.lib.types.constants","boolean","metabase.lib.types.constants/boolean",-2002690319);
goog.exportSymbol('metabase.lib.types.constants.key_boolean', metabase.lib.types.constants.key_boolean);

/**
 * JS-friendly access for the temporal type
 */
metabase.lib.types.constants.key_temporal = new cljs.core.Keyword("metabase.lib.types.constants","temporal","metabase.lib.types.constants/temporal",896988859);
goog.exportSymbol('metabase.lib.types.constants.key_temporal', metabase.lib.types.constants.key_temporal);

/**
 * JS-friendly access for the location type
 */
metabase.lib.types.constants.key_location = new cljs.core.Keyword("metabase.lib.types.constants","location","metabase.lib.types.constants/location",1597944369);
goog.exportSymbol('metabase.lib.types.constants.key_location', metabase.lib.types.constants.key_location);

/**
 * JS-friendly access for the coordinate type
 */
metabase.lib.types.constants.key_coordinate = new cljs.core.Keyword("metabase.lib.types.constants","coordinate","metabase.lib.types.constants/coordinate",-565327840);
goog.exportSymbol('metabase.lib.types.constants.key_coordinate', metabase.lib.types.constants.key_coordinate);

/**
 * JS-friendly access for the foreign-key type
 */
metabase.lib.types.constants.key_foreign_KEY = new cljs.core.Keyword("metabase.lib.types.constants","foreign-key","metabase.lib.types.constants/foreign-key",7703392);
goog.exportSymbol('metabase.lib.types.constants.key_foreign_KEY', metabase.lib.types.constants.key_foreign_KEY);

/**
 * JS-friendly access for the primary-key type
 */
metabase.lib.types.constants.key_primary_KEY = new cljs.core.Keyword("metabase.lib.types.constants","primary-key","metabase.lib.types.constants/primary-key",1371730630);
goog.exportSymbol('metabase.lib.types.constants.key_primary_KEY', metabase.lib.types.constants.key_primary_KEY);

/**
 * JS-friendly access for the summable type
 */
metabase.lib.types.constants.key_summable = new cljs.core.Keyword("metabase.lib.types.constants","summable","metabase.lib.types.constants/summable",54756759);
goog.exportSymbol('metabase.lib.types.constants.key_summable', metabase.lib.types.constants.key_summable);

/**
 * JS-friendly access for the scope type
 */
metabase.lib.types.constants.key_scope = new cljs.core.Keyword("metabase.lib.types.constants","scope","metabase.lib.types.constants/scope",-390150453);
goog.exportSymbol('metabase.lib.types.constants.key_scope', metabase.lib.types.constants.key_scope);

/**
 * JS-friendly access for the category type
 */
metabase.lib.types.constants.key_category = new cljs.core.Keyword("metabase.lib.types.constants","category","metabase.lib.types.constants/category",-644284871);
goog.exportSymbol('metabase.lib.types.constants.key_category', metabase.lib.types.constants.key_category);

/**
 * JS-friendly access for the unknown type
 */
metabase.lib.types.constants.key_unknown = new cljs.core.Keyword("metabase.lib.types.constants","unknown","metabase.lib.types.constants/unknown",-886227696);
goog.exportSymbol('metabase.lib.types.constants.key_unknown', metabase.lib.types.constants.key_unknown);
/**
 * A front-end specific type hierarchy used by [[metabase.lib.types.isa/field-type?]].
 *   It is not meant to be used directly.
 */
metabase.lib.types.constants.type_hierarchies = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("metabase.lib.types.constants","coordinate","metabase.lib.types.constants/coordinate",-565327840),new cljs.core.Keyword("metabase.lib.types.constants","string_like","metabase.lib.types.constants/string_like",-1907279613),new cljs.core.Keyword("metabase.lib.types.constants","entity","metabase.lib.types.constants/entity",-64775675),new cljs.core.Keyword("metabase.lib.types.constants","foreign_key","metabase.lib.types.constants/foreign_key",-1061052182),new cljs.core.Keyword("metabase.lib.types.constants","integer","metabase.lib.types.constants/integer",1592888555),new cljs.core.Keyword("metabase.lib.types.constants","scope","metabase.lib.types.constants/scope",-390150453),new cljs.core.Keyword("metabase.lib.types.constants","number","metabase.lib.types.constants/number",1385378285),new cljs.core.Keyword("metabase.lib.types.constants","location","metabase.lib.types.constants/location",1597944369),new cljs.core.Keyword("metabase.lib.types.constants","boolean","metabase.lib.types.constants/boolean",-2002690319),new cljs.core.Keyword("metabase.lib.types.constants","string","metabase.lib.types.constants/string",-2076057579),new cljs.core.Keyword("metabase.lib.types.constants","summable","metabase.lib.types.constants/summable",54756759),new cljs.core.Keyword("metabase.lib.types.constants","category","metabase.lib.types.constants/category",-644284871),new cljs.core.Keyword("metabase.lib.types.constants","primary_key","metabase.lib.types.constants/primary_key",1915474107),new cljs.core.Keyword("metabase.lib.types.constants","temporal","metabase.lib.types.constants/temporal",896988859),new cljs.core.Keyword("metabase.lib.types.constants","dimension","metabase.lib.types.constants/dimension",728254877)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","TextLike","type/TextLike",-1295784190)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","FK","type/FK",360937035),new cljs.core.Keyword("type","PK","type/PK",-1723274286),new cljs.core.Keyword("type","Name","type/Name",-134787639)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","FK","type/FK",360937035)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Integer","type/Integer",-638928316)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include","include",153360230),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.types.constants","number","metabase.lib.types.constants/number",1385378285),new cljs.core.Keyword("metabase.lib.types.constants","temporal","metabase.lib.types.constants/temporal",896988859),new cljs.core.Keyword("metabase.lib.types.constants","category","metabase.lib.types.constants/category",-644284871),new cljs.core.Keyword("metabase.lib.types.constants","entity","metabase.lib.types.constants/entity",-64775675),new cljs.core.Keyword("metabase.lib.types.constants","string","metabase.lib.types.constants/string",-2076057579)], null),new cljs.core.Keyword(null,"exclude","exclude",-1230250334),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.types.constants","location","metabase.lib.types.constants/location",1597944369)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Number","type/Number",-2071693690)], null),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Number","type/Number",-2071693690)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Address","type/Address",-413689880)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Boolean","type/Boolean",26348630)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Text","type/Text",603746827)], null),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("type","Category","type/Category",-264699550)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include","include",153360230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.types.constants","number","metabase.lib.types.constants/number",1385378285)], null),new cljs.core.Keyword(null,"exclude","exclude",-1230250334),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.types.constants","entity","metabase.lib.types.constants/entity",-64775675),new cljs.core.Keyword("metabase.lib.types.constants","location","metabase.lib.types.constants/location",1597944369),new cljs.core.Keyword("metabase.lib.types.constants","temporal","metabase.lib.types.constants/temporal",896988859)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Boolean","type/Boolean",26348630)], null),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Category","type/Category",-264699550)], null),new cljs.core.Keyword(null,"include","include",153360230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.types.constants","location","metabase.lib.types.constants/location",1597944369)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","PK","type/PK",-1723274286)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010)], null),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include","include",153360230),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.types.constants","temporal","metabase.lib.types.constants/temporal",896988859),new cljs.core.Keyword("metabase.lib.types.constants","category","metabase.lib.types.constants/category",-644284871),new cljs.core.Keyword("metabase.lib.types.constants","entity","metabase.lib.types.constants/entity",-64775675)], null)], null)]);
Object.defineProperty(module.exports, "key_scope", { enumerable: true, get: function() { return metabase.lib.types.constants.key_scope; } });
Object.defineProperty(module.exports, "key_summable", { enumerable: true, get: function() { return metabase.lib.types.constants.key_summable; } });
Object.defineProperty(module.exports, "key_location", { enumerable: true, get: function() { return metabase.lib.types.constants.key_location; } });
Object.defineProperty(module.exports, "key_coordinate", { enumerable: true, get: function() { return metabase.lib.types.constants.key_coordinate; } });
Object.defineProperty(module.exports, "key_boolean", { enumerable: true, get: function() { return metabase.lib.types.constants.key_boolean; } });
Object.defineProperty(module.exports, "key_temporal", { enumerable: true, get: function() { return metabase.lib.types.constants.key_temporal; } });
Object.defineProperty(module.exports, "key_category", { enumerable: true, get: function() { return metabase.lib.types.constants.key_category; } });
Object.defineProperty(module.exports, "key_string", { enumerable: true, get: function() { return metabase.lib.types.constants.key_string; } });
Object.defineProperty(module.exports, "key_foreign_KEY", { enumerable: true, get: function() { return metabase.lib.types.constants.key_foreign_KEY; } });
Object.defineProperty(module.exports, "key_primary_KEY", { enumerable: true, get: function() { return metabase.lib.types.constants.key_primary_KEY; } });
Object.defineProperty(module.exports, "type_hierarchies", { enumerable: false, get: function() { return metabase.lib.types.constants.type_hierarchies; } });
Object.defineProperty(module.exports, "key_string_like", { enumerable: true, get: function() { return metabase.lib.types.constants.key_string_like; } });
Object.defineProperty(module.exports, "key_unknown", { enumerable: true, get: function() { return metabase.lib.types.constants.key_unknown; } });
Object.defineProperty(module.exports, "key_number", { enumerable: true, get: function() { return metabase.lib.types.constants.key_number; } });
Object.defineProperty(module.exports, "name__GT_type", { enumerable: true, get: function() { return metabase.lib.types.constants.name__GT_type; } });
//# sourceMappingURL=metabase.lib.types.constants.js.map
