var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.filter.js");
require("./metabase.lib.types.isa.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.filter.operator.js");

goog.provide('metabase.lib.filter.operator');
/**
 * Inputs: ([tag]
 *         [tag display-name-style])
 *   Return: :metabase.lib.schema.filter/operator
 *        
 * 
 *   Get a filter operator definition for the MBQL filter with `tag`, e.g. `:=`. In some cases various tags have alternate
 *   display names used for different situations e.g. for numbers vs temporal values; pass in the
 *   `display-name-style` to choose a non-default display-name.
 */
metabase.lib.filter.operator.operator_def = (function metabase$lib$filter$operator$operator_def(var_args){
var G__65134 = arguments.length;
switch (G__65134) {
case 1:
return metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1 = (function (tag){

return metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2 = (function (tag,display_name_style){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("operator","filter","operator/filter",-1518842858),new cljs.core.Keyword(null,"short","short",1928760516),tag,new cljs.core.Keyword(null,"display-name-variant","display-name-variant",-1831788853),display_name_style], null);
}));

(metabase.lib.filter.operator.operator_def.cljs$lang$maxFixedArity = 2);

metabase.lib.filter.operator.key_operators = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">",">",-555517146)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<","<",-646864291)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"between","between",1131099276)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">=",">=",-623615505)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<=","<=",-395636158)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"not-empty","not-empty",388922063))], null);
metabase.lib.filter.operator.location_operators = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-empty","not-empty",388922063)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"contains","contains",676899812)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"starts-with","starts-with",366503009)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ends-with","ends-with",-456791011))], null);
metabase.lib.filter.operator.temporal_operators = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!=","!=",-1841737356),new cljs.core.Keyword(null,"excludes","excludes",-1791725945)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"before","before",-1633692388)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"after","after",594996914)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"between","between",1131099276)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"not-empty","not-empty",388922063))], null);
metabase.lib.filter.operator.coordinate_operators = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"inside","inside",1972503011)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">",">",-555517146)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<","<",-646864291)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"between","between",1131099276)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">=",">=",-623615505)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<=","<=",-395636158))], null);
metabase.lib.filter.operator.number_operators = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"equal-to","equal-to",608296653)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!=","!=",-1841737356),new cljs.core.Keyword(null,"not-equal-to","not-equal-to",-343181655)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">",">",-555517146)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<","<",-646864291)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"between","between",1131099276)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">=",">=",-623615505)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<=","<=",-395636158)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"not-empty","not-empty",388922063))], null);
metabase.lib.filter.operator.text_operators = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"contains","contains",676899812)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-null","is-null",-1997050930)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-null","not-null",-1326718535)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-empty","not-empty",388922063)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"starts-with","starts-with",366503009)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ends-with","ends-with",-456791011))], null);
metabase.lib.filter.operator.text_like_operators = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-null","is-null",-1997050930)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-null","not-null",-1326718535)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-empty","not-empty",388922063))], null);
metabase.lib.filter.operator.boolean_operators = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"not-empty","not-empty",388922063))], null);
metabase.lib.filter.operator.default_operators = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-null","is-null",-1997050930)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-null","not-null",-1326718535))], null);
/**
 * Operators that should be listed as options in join conditions.
 */
metabase.lib.filter.operator.join_operators = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),new cljs.core.Keyword(null,"default","default",-1987822328),true),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">",">",-555517146)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<","<",-646864291)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">=",">=",-623615505)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<=","<=",-395636158)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356))], null);
/**
 * Inputs: [column :- lib.metadata/ColumnMetadata]
 *   Return: [:sequential :metabase.lib.schema.filter/operator]
 *        
 * 
 *   The list of available filter operators.
 * The order of operators is relevant for the front end.
 * There are slight differences between names and ordering for the different base types.
 */
metabase.lib.filter.operator.filter_operators = (function metabase$lib$filter$operator$filter_operators(column){

var pred__65146 = metabase.lib.types.isa.field_type_QMARK_;
var expr__65147 = column;
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","primary_key","metabase.lib.types.constants/primary_key",1915474107),expr__65147) : pred__65146.call(null,new cljs.core.Keyword("metabase.lib.types.constants","primary_key","metabase.lib.types.constants/primary_key",1915474107),expr__65147)))){
return metabase.lib.filter.operator.key_operators;
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","foreign_key","metabase.lib.types.constants/foreign_key",-1061052182),expr__65147) : pred__65146.call(null,new cljs.core.Keyword("metabase.lib.types.constants","foreign_key","metabase.lib.types.constants/foreign_key",-1061052182),expr__65147)))){
return metabase.lib.filter.operator.key_operators;
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","location","metabase.lib.types.constants/location",1597944369),expr__65147) : pred__65146.call(null,new cljs.core.Keyword("metabase.lib.types.constants","location","metabase.lib.types.constants/location",1597944369),expr__65147)))){
return metabase.lib.filter.operator.location_operators;
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","temporal","metabase.lib.types.constants/temporal",896988859),expr__65147) : pred__65146.call(null,new cljs.core.Keyword("metabase.lib.types.constants","temporal","metabase.lib.types.constants/temporal",896988859),expr__65147)))){
return metabase.lib.filter.operator.temporal_operators;
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","coordinate","metabase.lib.types.constants/coordinate",-565327840),expr__65147) : pred__65146.call(null,new cljs.core.Keyword("metabase.lib.types.constants","coordinate","metabase.lib.types.constants/coordinate",-565327840),expr__65147)))){
return metabase.lib.filter.operator.coordinate_operators;
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","number","metabase.lib.types.constants/number",1385378285),expr__65147) : pred__65146.call(null,new cljs.core.Keyword("metabase.lib.types.constants","number","metabase.lib.types.constants/number",1385378285),expr__65147)))){
return metabase.lib.filter.operator.number_operators;
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","string","metabase.lib.types.constants/string",-2076057579),expr__65147) : pred__65146.call(null,new cljs.core.Keyword("metabase.lib.types.constants","string","metabase.lib.types.constants/string",-2076057579),expr__65147)))){
return metabase.lib.filter.operator.text_operators;
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","string_like","metabase.lib.types.constants/string_like",-1907279613),expr__65147) : pred__65146.call(null,new cljs.core.Keyword("metabase.lib.types.constants","string_like","metabase.lib.types.constants/string_like",-1907279613),expr__65147)))){
return metabase.lib.filter.operator.text_like_operators;
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","boolean","metabase.lib.types.constants/boolean",-2002690319),expr__65147) : pred__65146.call(null,new cljs.core.Keyword("metabase.lib.types.constants","boolean","metabase.lib.types.constants/boolean",-2002690319),expr__65147)))){
return metabase.lib.filter.operator.boolean_operators;
} else {
return metabase.lib.filter.operator.default_operators;
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
/**
 * Inputs: [tag :- :keyword display-name-variant :- :keyword]
 *   Return: :metabase.lib.schema.common/non-blank-string
 */
metabase.lib.filter.operator.filter_operator_long_display_name = (function metabase$lib$filter$operator$filter_operator_long_display_name(tag,display_name_variant){

var G__65150 = tag;
var G__65150__$1 = (((G__65150 instanceof cljs.core.Keyword))?G__65150.fqn:null);
switch (G__65150__$1) {
case "=":
var G__65151 = display_name_variant;
var G__65151__$1 = (((G__65151 instanceof cljs.core.Keyword))?G__65151.fqn:null);
switch (G__65151__$1) {
case "equal-to":
return metabase.shared.util.i18n.js_i18n("Equal to");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Is");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65151__$1)].join('')));

}

break;
case "!=":
var G__65153 = display_name_variant;
var G__65153__$1 = (((G__65153 instanceof cljs.core.Keyword))?G__65153.fqn:null);
switch (G__65153__$1) {
case "not-equal-to":
return metabase.shared.util.i18n.js_i18n("Not equal to");

break;
case "excludes":
return metabase.shared.util.i18n.js_i18n("Excludes");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Is not");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65153__$1)].join('')));

}

break;
case ">":
var G__65154 = display_name_variant;
var G__65154__$1 = (((G__65154 instanceof cljs.core.Keyword))?G__65154.fqn:null);
switch (G__65154__$1) {
case "after":
return metabase.shared.util.i18n.js_i18n("After");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Greater than");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65154__$1)].join('')));

}

break;
case "<":
var G__65155 = display_name_variant;
var G__65155__$1 = (((G__65155 instanceof cljs.core.Keyword))?G__65155.fqn:null);
switch (G__65155__$1) {
case "before":
return metabase.shared.util.i18n.js_i18n("Before");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Less than");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65155__$1)].join('')));

}

break;
case ">=":
var G__65158 = display_name_variant;
var G__65158__$1 = (((G__65158 instanceof cljs.core.Keyword))?G__65158.fqn:null);
switch (G__65158__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Greater than or equal to");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65158__$1)].join('')));

}

break;
case "<=":
var G__65160 = display_name_variant;
var G__65160__$1 = (((G__65160 instanceof cljs.core.Keyword))?G__65160.fqn:null);
switch (G__65160__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Less than or equal to");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65160__$1)].join('')));

}

break;
case "between":
var G__65165 = display_name_variant;
var G__65165__$1 = (((G__65165 instanceof cljs.core.Keyword))?G__65165.fqn:null);
switch (G__65165__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Between");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65165__$1)].join('')));

}

break;
case "is-null":
var G__65170 = display_name_variant;
var G__65170__$1 = (((G__65170 instanceof cljs.core.Keyword))?G__65170.fqn:null);
switch (G__65170__$1) {
case "is-empty":
return metabase.shared.util.i18n.js_i18n("Is empty");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Is null");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65170__$1)].join('')));

}

break;
case "not-null":
var G__65171 = display_name_variant;
var G__65171__$1 = (((G__65171 instanceof cljs.core.Keyword))?G__65171.fqn:null);
switch (G__65171__$1) {
case "not-empty":
return metabase.shared.util.i18n.js_i18n("Not empty");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Not null");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65171__$1)].join('')));

}

break;
case "is-empty":
var G__65173 = display_name_variant;
var G__65173__$1 = (((G__65173 instanceof cljs.core.Keyword))?G__65173.fqn:null);
switch (G__65173__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Is empty");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65173__$1)].join('')));

}

break;
case "not-empty":
var G__65174 = display_name_variant;
var G__65174__$1 = (((G__65174 instanceof cljs.core.Keyword))?G__65174.fqn:null);
switch (G__65174__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Not empty");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65174__$1)].join('')));

}

break;
case "contains":
var G__65175 = display_name_variant;
var G__65175__$1 = (((G__65175 instanceof cljs.core.Keyword))?G__65175.fqn:null);
switch (G__65175__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Contains");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65175__$1)].join('')));

}

break;
case "does-not-contain":
var G__65180 = display_name_variant;
var G__65180__$1 = (((G__65180 instanceof cljs.core.Keyword))?G__65180.fqn:null);
switch (G__65180__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Does not contain");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65180__$1)].join('')));

}

break;
case "starts-with":
var G__65181 = display_name_variant;
var G__65181__$1 = (((G__65181 instanceof cljs.core.Keyword))?G__65181.fqn:null);
switch (G__65181__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Starts with");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65181__$1)].join('')));

}

break;
case "ends-with":
var G__65183 = display_name_variant;
var G__65183__$1 = (((G__65183 instanceof cljs.core.Keyword))?G__65183.fqn:null);
switch (G__65183__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Ends with");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65183__$1)].join('')));

}

break;
case "inside":
var G__65185 = display_name_variant;
var G__65185__$1 = (((G__65185 instanceof cljs.core.Keyword))?G__65185.fqn:null);
switch (G__65185__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Inside");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65185__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65150__$1)].join('')));

}
});
/**
 * Inputs: [tag :- :keyword display-name-variant :- :keyword]
 *   Return: :metabase.lib.schema.common/non-blank-string
 */
metabase.lib.filter.operator.filter_operator_display_name = (function metabase$lib$filter$operator$filter_operator_display_name(tag,display_name_variant){

var G__65195 = tag;
var G__65195__$1 = (((G__65195 instanceof cljs.core.Keyword))?G__65195.fqn:null);
switch (G__65195__$1) {
case "=":
return "=";

break;
case "!=":
return "\u2260";

break;
case ">":
return ">";

break;
case "<":
return "<";

break;
case ">=":
return "\u2265";

break;
case "<=":
return "\u2264";

break;
default:
return metabase.lib.filter.operator.filter_operator_long_display_name(tag,display_name_variant);

}
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("operator","filter","operator/filter",-1518842858),(function (_query,_stage_number,p__65202,display_name_style){
var map__65203 = p__65202;
var map__65203__$1 = cljs.core.__destructure_map(map__65203);
var short_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65203__$1,new cljs.core.Keyword(null,"short","short",1928760516));
var display_name_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65203__$1,new cljs.core.Keyword(null,"display-name-variant","display-name-variant",-1831788853));
var G__65206 = display_name_style;
var G__65206__$1 = (((G__65206 instanceof cljs.core.Keyword))?G__65206.fqn:null);
switch (G__65206__$1) {
case "default":
return metabase.lib.filter.operator.filter_operator_display_name(short_name,display_name_variant);

break;
case "long":
return metabase.lib.filter.operator.filter_operator_long_display_name(short_name,display_name_variant);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65206__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("operator","filter","operator/filter",-1518842858),(function (_query,_stage_number,p__65211){
var map__65212 = p__65211;
var map__65212__$1 = cljs.core.__destructure_map(map__65212);
var short_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65212__$1,new cljs.core.Keyword(null,"short","short",1928760516));
var display_name_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65212__$1,new cljs.core.Keyword(null,"display-name-variant","display-name-variant",-1831788853));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65212__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var G__65215 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"short-name","short-name",-1767085022),metabase.util.qualified_name(short_name),new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.filter.operator.filter_operator_display_name(short_name,display_name_variant),new cljs.core.Keyword(null,"long-display-name","long-display-name",1550784464),metabase.lib.filter.operator.filter_operator_long_display_name(short_name,display_name_variant)], null);
if(cljs.core.truth_(default$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65215,new cljs.core.Keyword(null,"default","default",-1987822328),true);
} else {
return G__65215;
}
}));
Object.defineProperty(module.exports, "boolean_operators", { enumerable: false, get: function() { return metabase.lib.filter.operator.boolean_operators; } });
Object.defineProperty(module.exports, "join_operators", { enumerable: false, get: function() { return metabase.lib.filter.operator.join_operators; } });
Object.defineProperty(module.exports, "location_operators", { enumerable: false, get: function() { return metabase.lib.filter.operator.location_operators; } });
Object.defineProperty(module.exports, "filter_operators", { enumerable: false, get: function() { return metabase.lib.filter.operator.filter_operators; } });
Object.defineProperty(module.exports, "text_like_operators", { enumerable: false, get: function() { return metabase.lib.filter.operator.text_like_operators; } });
Object.defineProperty(module.exports, "key_operators", { enumerable: false, get: function() { return metabase.lib.filter.operator.key_operators; } });
Object.defineProperty(module.exports, "temporal_operators", { enumerable: false, get: function() { return metabase.lib.filter.operator.temporal_operators; } });
Object.defineProperty(module.exports, "coordinate_operators", { enumerable: false, get: function() { return metabase.lib.filter.operator.coordinate_operators; } });
Object.defineProperty(module.exports, "number_operators", { enumerable: false, get: function() { return metabase.lib.filter.operator.number_operators; } });
Object.defineProperty(module.exports, "filter_operator_display_name", { enumerable: false, get: function() { return metabase.lib.filter.operator.filter_operator_display_name; } });
Object.defineProperty(module.exports, "text_operators", { enumerable: false, get: function() { return metabase.lib.filter.operator.text_operators; } });
Object.defineProperty(module.exports, "filter_operator_long_display_name", { enumerable: false, get: function() { return metabase.lib.filter.operator.filter_operator_long_display_name; } });
Object.defineProperty(module.exports, "default_operators", { enumerable: false, get: function() { return metabase.lib.filter.operator.default_operators; } });
Object.defineProperty(module.exports, "operator_def", { enumerable: false, get: function() { return metabase.lib.filter.operator.operator_def; } });
//# sourceMappingURL=metabase.lib.filter.operator.js.map
