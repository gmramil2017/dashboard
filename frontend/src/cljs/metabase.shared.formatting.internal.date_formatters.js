var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.shared.formatting.constants.js");
require("./metabase.shared.formatting.internal.date_builder.js");
require("./metabase.util.log.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.formatting.internal.date_formatters.js");

goog.provide('metabase.shared.formatting.internal.date_formatters');
metabase.shared.formatting.internal.date_formatters.apply_date_separator = (function metabase$shared$formatting$internal$date_formatters$apply_date_separator(format_list,date_separator){
if(cljs.core.truth_(date_separator)){
var iter__5523__auto__ = (function metabase$shared$formatting$internal$date_formatters$apply_date_separator_$_iter__81613(s__81614){
return (new cljs.core.LazySeq(null,(function (){
var s__81614__$1 = s__81614;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81614__$1);
if(temp__5804__auto__){
var s__81614__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81614__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81614__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81616 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81615 = (0);
while(true){
if((i__81615 < size__5522__auto__)){
var fmt = cljs.core._nth(c__5521__auto__,i__81615);
cljs.core.chunk_append(b__81616,((typeof fmt === 'string')?clojure.string.replace(fmt,/\//,date_separator):fmt));

var G__81664 = (i__81615 + (1));
i__81615 = G__81664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81616),metabase$shared$formatting$internal$date_formatters$apply_date_separator_$_iter__81613(cljs.core.chunk_rest(s__81614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81616),null);
}
} else {
var fmt = cljs.core.first(s__81614__$2);
return cljs.core.cons(((typeof fmt === 'string')?clojure.string.replace(fmt,/\//,date_separator):fmt),metabase$shared$formatting$internal$date_formatters$apply_date_separator_$_iter__81613(cljs.core.rest(s__81614__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(format_list);
} else {
return format_list;
}
});
metabase.shared.formatting.internal.date_formatters.apply_date_abbreviation = (function metabase$shared$formatting$internal$date_formatters$apply_date_abbreviation(format_list){
var iter__5523__auto__ = (function metabase$shared$formatting$internal$date_formatters$apply_date_abbreviation_$_iter__81620(s__81621){
return (new cljs.core.LazySeq(null,(function (){
var s__81621__$1 = s__81621;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81621__$1);
if(temp__5804__auto__){
var s__81621__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81621__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81621__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81623 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81622 = (0);
while(true){
if((i__81622 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__81622);
cljs.core.chunk_append(b__81623,(function (){var G__81625 = k;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"month-full","month-full",-980003620),G__81625)){
return new cljs.core.Keyword(null,"month-short","month-short",-1531335142);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":month-full",G__81625)){
return new cljs.core.Keyword(null,"month-short","month-short",-1531335142);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"day-of-week-full","day-of-week-full",-1338599604),G__81625)){
return new cljs.core.Keyword(null,"day-of-week-short","day-of-week-short",-1161935710);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":day-of-week-full",G__81625)){
return new cljs.core.Keyword(null,"day-of-week-short","day-of-week-short",-1161935710);
} else {
return k;

}
}
}
}
})());

var G__81665 = (i__81622 + (1));
i__81622 = G__81665;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81623),metabase$shared$formatting$internal$date_formatters$apply_date_abbreviation_$_iter__81620(cljs.core.chunk_rest(s__81621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81623),null);
}
} else {
var k = cljs.core.first(s__81621__$2);
return cljs.core.cons((function (){var G__81630 = k;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"month-full","month-full",-980003620),G__81630)){
return new cljs.core.Keyword(null,"month-short","month-short",-1531335142);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":month-full",G__81630)){
return new cljs.core.Keyword(null,"month-short","month-short",-1531335142);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"day-of-week-full","day-of-week-full",-1338599604),G__81630)){
return new cljs.core.Keyword(null,"day-of-week-short","day-of-week-short",-1161935710);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":day-of-week-full",G__81630)){
return new cljs.core.Keyword(null,"day-of-week-short","day-of-week-short",-1161935710);
} else {
return k;

}
}
}
}
})(),metabase$shared$formatting$internal$date_formatters$apply_date_abbreviation_$_iter__81620(cljs.core.rest(s__81621__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(format_list);
});
/**
 * Maps each unit to the default way of formatting that unit.
 *   This uses full month and weekday names; abbreviated output replaces these with the short forms later.
 */
metabase.shared.formatting.internal.date_formatters.default_date_formats_for_unit = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"quarter","quarter",-508147616),new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"day-of-year","day-of-year",478600113),new cljs.core.Keyword(null,"week-of-year","week-of-year",-910114435),new cljs.core.Keyword(null,"quarter-of-year","quarter-of-year",-472803491),new cljs.core.Keyword(null,"minute-of-hour","minute-of-hour",1903220478)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Q",new cljs.core.Keyword(null,"quarter","quarter",-508147616)," - ",new cljs.core.Keyword(null,"year","year",335913393)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-week-full","day-of-week-full",-1338599604)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-full","month-full",-980003620)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-year","day-of-year",478600113)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"week-of-year","week-of-year",-910114435)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Q",new cljs.core.Keyword(null,"quarter","quarter",-508147616)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minute-d","minute-d",1161226726)], null)]);
/**
 * Map of `{date_style {unit format}}`.
 *   If given eg. the style `"M/D/YYYY"` but a unit of months, we don't want to use that directly for the format,
 *   since it contains days.
 *   This map transforms the `date_style + unit` pair to the format data structure.
 */
metabase.shared.formatting.internal.date_formatters.date_style_to_format_overrides = (function (){var m_y = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-d","month-d",-417018321),"/",new cljs.core.Keyword(null,"year","year",335913393)], null);
var mmm_y = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-full","month-full",-980003620),", ",new cljs.core.Keyword(null,"year","year",335913393)], null);
return new cljs.core.PersistentArrayMap(null, 6, ["M/D/YYYY",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),m_y], null),"D/M/YYYY",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),m_y], null),"YYYY/M/D",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"/",new cljs.core.Keyword(null,"month-d","month-d",-417018321)], null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393)," - Q",new cljs.core.Keyword(null,"quarter","quarter",-508147616)], null)], null),"MMMM D, YYYY",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),mmm_y], null),"D MMMM, YYYY",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),mmm_y], null),"dddd, MMMM D, YYYY",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"week","week",-1326473278),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-full","month-full",-980003620)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),", ",new cljs.core.Keyword(null,"year","year",335913393)], null),new cljs.core.Keyword(null,"month","month",-1960248533),mmm_y], null)], null);
})();
metabase.shared.formatting.internal.date_formatters.fallback_iso_format = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"-",new cljs.core.Keyword(null,"month-dd","month-dd",-765979484),"-",new cljs.core.Keyword(null,"day-of-month-dd","day-of-month-dd",1447745891),"T",new cljs.core.Keyword(null,"hour-24-dd","hour-24-dd",520374299),":",new cljs.core.Keyword(null,"minute-dd","minute-dd",-53740577),":",new cljs.core.Keyword(null,"second-dd","second-dd",267328546)], null);
/**
 * The `:date-style` is transformed to a `:date-format` as follows:
 *   0. If `:date-format` is set, just use that.
 *   1. Check [[date-style-to-format-overrides]] for a style + unit override.
 *   2. Check [[default-date-formats-for-unit]] for a unit-specific format.
 *   3. Check [[constants/known-date-styles]] for a basic format.
 *   4. Fall back to a standard ISO date string, emitting a warning.
 */
metabase.shared.formatting.internal.date_formatters.resolve_date_style = (function metabase$shared$formatting$internal$date_formatters$resolve_date_style(p__81632){
var map__81633 = p__81632;
var map__81633__$1 = cljs.core.__destructure_map(map__81633);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81633__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var date_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81633__$1,new cljs.core.Keyword(null,"date-style","date-style",-192846325));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81633__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var or__5045__auto__ = date_format;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_formatters.date_style_to_format_overrides,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_style,unit], null));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_formatters.default_date_formats_for_unit,unit);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.constants.known_date_styles,date_style);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var level__47249__auto___81670 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__47250__auto___81671 = "metabase.shared.formatting.internal.date-formatters";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47250__auto___81671,level__47249__auto___81670))){
var x__47251__auto___81672 = "Unrecognized date style";
if((x__47251__auto___81672 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___81671,level__47249__auto___81670,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date-style","date-style",-192846325),date_style,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], 0)),x__47251__auto___81672);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___81671,level__47249__auto___81670,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__47251__auto___81672,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date-style","date-style",-192846325),date_style,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], 0)),null);
}
} else {
}

return metabase.shared.formatting.internal.date_formatters.fallback_iso_format;
}
}
}
}
});
metabase.shared.formatting.internal.date_formatters.normalize_date_format = (function metabase$shared$formatting$internal$date_formatters$normalize_date_format(p__81637){
var map__81638 = p__81637;
var map__81638__$1 = cljs.core.__destructure_map(map__81638);
var options = map__81638__$1;
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81638__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.constants.known_datetime_styles,date_format)], 0));
});
metabase.shared.formatting.internal.date_formatters.prepend_weekday = (function metabase$shared$formatting$internal$date_formatters$prepend_weekday(date_format){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-week-short","day-of-week-short",-1161935710),", "], null),date_format);
});
/**
 * Derives a date format data structure from an options map.
 * 
 *   There are three possible sources of the final date format:
 *   1. A directly provided `:date-format`, which is either a string or a
 *   [[metabase.shared.formatting.internal.date-builder]] format structure.
 *   2. `:date_style` as a provided string, a legacy Moment.js format string.
 *   3. [[constants/default-date-style]]
 * 
 *   A string `:date-format` is converted to a `date-builder` structure.
 *   If `:date-format` is provided in either form, `:date-style` is ignored.
 *   See [[resolve-date-style]] for the details of how the `:date-style` is transformed to a format structure.
 *   
 */
metabase.shared.formatting.internal.date_formatters.date_format_for_options = (function metabase$shared$formatting$internal$date_formatters$date_format_for_options(p__81639){
var map__81640 = p__81639;
var map__81640__$1 = cljs.core.__destructure_map(map__81640);
var options = map__81640__$1;
var date_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81640__$1,new cljs.core.Keyword(null,"date-separator","date-separator",-882342810));
var weekday_enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81640__$1,new cljs.core.Keyword(null,"weekday-enabled","weekday-enabled",-1447123049));
var date_format = metabase.shared.formatting.internal.date_formatters.resolve_date_style(metabase.shared.formatting.internal.date_formatters.normalize_date_format(options));
var G__81641 = date_format;
var G__81641__$1 = (cljs.core.truth_(date_separator)?metabase.shared.formatting.internal.date_formatters.apply_date_separator(G__81641,date_separator):G__81641);
var G__81641__$2 = (cljs.core.truth_(weekday_enabled)?metabase.shared.formatting.internal.date_formatters.prepend_weekday(G__81641__$1):G__81641__$1);
if(metabase.shared.formatting.constants.abbreviated_QMARK_(options)){
return metabase.shared.formatting.internal.date_formatters.apply_date_abbreviation(G__81641__$2);
} else {
return G__81641__$2;
}
});
metabase.shared.formatting.internal.date_formatters.short_month_day = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-short","month-short",-1531335142)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973)], null));
metabase.shared.formatting.internal.date_formatters.full_month_day = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-full","month-full",-980003620)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973)], null));
metabase.shared.formatting.internal.date_formatters.short_month_day_year = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-short","month-short",-1531335142)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),", ",new cljs.core.Keyword(null,"year","year",335913393)], null));
metabase.shared.formatting.internal.date_formatters.full_month_day_year = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-full","month-full",-980003620)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),", ",new cljs.core.Keyword(null,"year","year",335913393)], null));
metabase.shared.formatting.internal.date_formatters.short_months_QMARK_ = (function metabase$shared$formatting$internal$date_formatters$short_months_QMARK_(p__81642){
var map__81643 = p__81642;
var map__81643__$1 = cljs.core.__destructure_map(map__81643);
var options = map__81643__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81643__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return ((metabase.shared.formatting.constants.abbreviated_QMARK_(options)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,"tooltip")));
});
/**
 * Helper that gets the right month-day-year format based on the options: either full `"April 6, 2022"` or shortened
 *   `"Apr 6, 2022"`.
 */
metabase.shared.formatting.internal.date_formatters.month_day_year = (function metabase$shared$formatting$internal$date_formatters$month_day_year(options){
if(metabase.shared.formatting.internal.date_formatters.short_months_QMARK_(options)){
return metabase.shared.formatting.internal.date_formatters.short_month_day_year;
} else {
return metabase.shared.formatting.internal.date_formatters.full_month_day_year;
}
});
/**
 * Helper that gets the right month-day format based on the options: either full `"April 6"` or shortened
 *   `"Apr 6"`.
 */
metabase.shared.formatting.internal.date_formatters.month_day = (function metabase$shared$formatting$internal$date_formatters$month_day(options){
if(metabase.shared.formatting.internal.date_formatters.short_months_QMARK_(options)){
return metabase.shared.formatting.internal.date_formatters.short_month_day;
} else {
return metabase.shared.formatting.internal.date_formatters.full_month_day;
}
});
metabase.shared.formatting.internal.date_formatters.big_endian_day_format = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"-",new cljs.core.Keyword(null,"month-dd","month-dd",-765979484),"-",new cljs.core.Keyword(null,"day-of-month-dd","day-of-month-dd",1447745891)], null);
/**
 * A cached, commonly used formatter for dates in `"2022-04-22"` form.
 */
metabase.shared.formatting.internal.date_formatters.big_endian_day = metabase.shared.formatting.internal.date_builder.__GT_formatter(metabase.shared.formatting.internal.date_formatters.big_endian_day_format);
/**
 * A cached, commonly used formatter for times in 12-hour `"7 PM"` form.
 */
metabase.shared.formatting.internal.date_formatters.hour_only = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-12-d","hour-12-d",-1761180644)," ",new cljs.core.Keyword(null,"am-pm","am-pm",-2014941402)], null));
/**
 * A cached, commonly used formatter for full weekday names.
 */
metabase.shared.formatting.internal.date_formatters.weekday = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-week-full","day-of-week-full",-1338599604)], null));
metabase.shared.formatting.internal.date_formatters.english_time_seconds = (function metabase$shared$formatting$internal$date_formatters$english_time_seconds(inner){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-12-d","hour-12-d",-1761180644),":",new cljs.core.Keyword(null,"minute-dd","minute-dd",-53740577),":",new cljs.core.Keyword(null,"second-dd","second-dd",267328546)], null),inner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"am-pm","am-pm",-2014941402)], null)], 0)));
});
metabase.shared.formatting.internal.date_formatters.iso_time_seconds = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-24-dd","hour-24-dd",520374299),":",new cljs.core.Keyword(null,"minute-dd","minute-dd",-53740577),":",new cljs.core.Keyword(null,"second-dd","second-dd",267328546)], null);
metabase.shared.formatting.internal.date_formatters.time_style_to_format = new cljs.core.PersistentArrayMap(null, 2, ["h:mm A",new cljs.core.PersistentArrayMap(null, 3, [null,metabase.shared.formatting.internal.date_formatters.english_time_seconds(cljs.core.PersistentVector.EMPTY),"seconds",metabase.shared.formatting.internal.date_formatters.english_time_seconds(cljs.core.PersistentVector.EMPTY),"milliseconds",metabase.shared.formatting.internal.date_formatters.english_time_seconds(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",new cljs.core.Keyword(null,"millisecond-ddd","millisecond-ddd",1751196715)], null))], null),"HH:mm",new cljs.core.PersistentArrayMap(null, 3, [null,metabase.shared.formatting.internal.date_formatters.iso_time_seconds,"seconds",metabase.shared.formatting.internal.date_formatters.iso_time_seconds,"milliseconds",cljs.core.into.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_formatters.iso_time_seconds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",new cljs.core.Keyword(null,"millisecond-ddd","millisecond-ddd",1751196715)], null))], null)], null);
metabase.shared.formatting.internal.date_formatters.fallback_iso_time = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-24-dd","hour-24-dd",520374299),":",new cljs.core.Keyword(null,"minute-dd","minute-dd",-53740577),":",new cljs.core.Keyword(null,"second-dd","second-dd",267328546)], null);
/**
 * The time format is resolved as follows:
 *   1. If a `:time-format` is provided as a string, look it up in [[constants/known-time-styles]], throwing if not found.
 *   2. If a `:time-format` is provided directly as a [[builder]] structure, use that.
 *   3. Check [[time-style-to-format]] for a supported `:time-style + :time-enabled` resolution pair.
 *   4. Look up `:time-style` in [[constants/known-time-styles]].
 *   5. Throw an exception, since the time style is unknown.
 */
metabase.shared.formatting.internal.date_formatters.time_format_for_options = (function metabase$shared$formatting$internal$date_formatters$time_format_for_options(p__81657){
var map__81658 = p__81657;
var map__81658__$1 = cljs.core.__destructure_map(map__81658);
var options = map__81658__$1;
var time_enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81658__$1,new cljs.core.Keyword(null,"time-enabled","time-enabled",-1856094894));
var time_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81658__$1,new cljs.core.Keyword(null,"time-format","time-format",511469226));
var time_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81658__$1,new cljs.core.Keyword(null,"time-style","time-style",-1943466186));
var or__5045__auto__ = (function (){var and__5043__auto__ = typeof time_format === 'string';
if(and__5043__auto__){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.constants.known_time_styles,time_format);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown time format",options);
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = time_format;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_formatters.time_style_to_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_style,time_enabled], null));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.constants.known_time_styles,time_style);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var level__47249__auto___81678 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__47250__auto___81679 = "metabase.shared.formatting.internal.date-formatters";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47250__auto___81679,level__47249__auto___81678))){
var x__47251__auto___81680 = "Unrecognized time style";
if((x__47251__auto___81680 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___81679,level__47249__auto___81678,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time-style","time-style",-1943466186),time_style,new cljs.core.Keyword(null,"time-enabled","time-enabled",-1856094894),time_enabled], null)], 0)),x__47251__auto___81680);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___81679,level__47249__auto___81678,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__47251__auto___81680,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time-style","time-style",-1943466186),time_style,new cljs.core.Keyword(null,"time-enabled","time-enabled",-1856094894),time_enabled], null)], 0)),null);
}
} else {
}

return metabase.shared.formatting.internal.date_formatters.fallback_iso_time;
}
}
}
}
});
metabase.shared.formatting.internal.date_formatters.options__GT_formatter_STAR_ = (function metabase$shared$formatting$internal$date_formatters$options__GT_formatter_STAR_(p__81662){
var map__81663 = p__81662;
var map__81663__$1 = cljs.core.__destructure_map(map__81663);
var options = map__81663__$1;
var date_enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81663__$1,new cljs.core.Keyword(null,"date-enabled","date-enabled",1961030769));
var time_enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81663__$1,new cljs.core.Keyword(null,"time-enabled","time-enabled",-1856094894));
var date_format = (cljs.core.truth_(date_enabled)?metabase.shared.formatting.internal.date_formatters.date_format_for_options(options):null);
var time_format = (cljs.core.truth_(time_enabled)?metabase.shared.formatting.internal.date_formatters.time_format_for_options(options):null);
var format_list = (cljs.core.truth_((function (){var and__5043__auto__ = date_format;
if(cljs.core.truth_(and__5043__auto__)){
return time_format;
} else {
return and__5043__auto__;
}
})())?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(date_format,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [", "], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([time_format], 0)):(function (){var or__5045__auto__ = date_format;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = time_format;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var level__47249__auto___81684 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__47250__auto___81685 = "metabase.shared.formatting.internal.date-formatters";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__47250__auto___81685,level__47249__auto___81684))){
var x__47251__auto___81686 = "Unrecognized date/time format";
if((x__47251__auto___81686 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___81685,level__47249__auto___81684,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0)),x__47251__auto___81686);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__47250__auto___81685,level__47249__auto___81684,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__47251__auto___81686,options], 0)),null);
}
} else {
}

return metabase.shared.formatting.internal.date_formatters.fallback_iso_format;
}
}
})());
return metabase.shared.formatting.internal.date_builder.__GT_formatter(format_list);
});
metabase.shared.formatting.internal.date_formatters.options__GT_formatter_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Given the options map, this reduces it to a formatter function.
 *   Expects `date-style` and `time-style`, if provided, to be in the known set.
 *   If they're unknown, this logs a warning and defaults to a full ISO 8601 string format.
 *   If `date-style` or `time-style` are set to nil, that part will not be included.
 * 
 *   The options and corresponding formatters are cached indefinitely, since there are generally only a few dozen
 *   different sets of options, and from hundreds to many thousands of dates will be formatted in a typical session.
 */
metabase.shared.formatting.internal.date_formatters.options__GT_formatter = (function metabase$shared$formatting$internal$date_formatters$options__GT_formatter(options){
if(cljs.core.map_QMARK_(options)){
} else {
throw (new Error("Assert failed: (map? options)"));
}

var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(metabase.shared.formatting.internal.date_formatters.options__GT_formatter_cache),options);
if(cljs.core.truth_(temp__5802__auto__)){
var fmt = temp__5802__auto__;
return fmt;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_formatters.options__GT_formatter_cache,(function (cache){
if(cljs.core.contains_QMARK_(cache,options)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,options,metabase.shared.formatting.internal.date_formatters.options__GT_formatter_STAR_(options));
}
})),options);
}
});
Object.defineProperty(module.exports, "options__GT_formatter", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.options__GT_formatter; } });
Object.defineProperty(module.exports, "big_endian_day_format", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.big_endian_day_format; } });
Object.defineProperty(module.exports, "short_month_day", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.short_month_day; } });
Object.defineProperty(module.exports, "time_format_for_options", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.time_format_for_options; } });
Object.defineProperty(module.exports, "full_month_day", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.full_month_day; } });
Object.defineProperty(module.exports, "date_style_to_format_overrides", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.date_style_to_format_overrides; } });
Object.defineProperty(module.exports, "date_format_for_options", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.date_format_for_options; } });
Object.defineProperty(module.exports, "default_date_formats_for_unit", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.default_date_formats_for_unit; } });
Object.defineProperty(module.exports, "month_day_year", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.month_day_year; } });
Object.defineProperty(module.exports, "english_time_seconds", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.english_time_seconds; } });
Object.defineProperty(module.exports, "normalize_date_format", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.normalize_date_format; } });
Object.defineProperty(module.exports, "short_months_QMARK_", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.short_months_QMARK_; } });
Object.defineProperty(module.exports, "fallback_iso_time", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.fallback_iso_time; } });
Object.defineProperty(module.exports, "full_month_day_year", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.full_month_day_year; } });
Object.defineProperty(module.exports, "short_month_day_year", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.short_month_day_year; } });
Object.defineProperty(module.exports, "iso_time_seconds", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.iso_time_seconds; } });
Object.defineProperty(module.exports, "hour_only", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.hour_only; } });
Object.defineProperty(module.exports, "prepend_weekday", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.prepend_weekday; } });
Object.defineProperty(module.exports, "apply_date_separator", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.apply_date_separator; } });
Object.defineProperty(module.exports, "resolve_date_style", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.resolve_date_style; } });
Object.defineProperty(module.exports, "time_style_to_format", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.time_style_to_format; } });
Object.defineProperty(module.exports, "fallback_iso_format", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.fallback_iso_format; } });
Object.defineProperty(module.exports, "month_day", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.month_day; } });
Object.defineProperty(module.exports, "options__GT_formatter_STAR_", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.options__GT_formatter_STAR_; } });
Object.defineProperty(module.exports, "options__GT_formatter_cache", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.options__GT_formatter_cache; } });
Object.defineProperty(module.exports, "weekday", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.weekday; } });
Object.defineProperty(module.exports, "big_endian_day", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.big_endian_day; } });
Object.defineProperty(module.exports, "apply_date_abbreviation", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_formatters.apply_date_abbreviation; } });
//# sourceMappingURL=metabase.shared.formatting.internal.date_formatters.js.map
