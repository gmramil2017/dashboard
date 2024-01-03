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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.formatting.internal.date_builder.js");

goog.provide('metabase.shared.formatting.internal.date_builder');
/**
 * This is the complete set of keys the formats can contain, mapped to the platform-specific magic string expected
 *   by Moment.js or java.time.format.DateTimeFormatter. Many are the same, but not all.
 */
metabase.shared.formatting.internal.date_builder.format_strings = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"quarter","quarter",-508147616),new cljs.core.Keyword(null,"second-dd","second-dd",267328546),new cljs.core.Keyword(null,"day-of-week-short","day-of-week-short",-1161935710),new cljs.core.Keyword(null,"day-of-month-dd","day-of-month-dd",1447745891),new cljs.core.Keyword(null,"month-dd","month-dd",-765979484),new cljs.core.Keyword(null,"hour-12-dd","hour-12-dd",-2040583034),new cljs.core.Keyword(null,"minute-d","minute-d",1161226726),new cljs.core.Keyword(null,"am-pm","am-pm",-2014941402),new cljs.core.Keyword(null,"millisecond-ddd","millisecond-ddd",1751196715),new cljs.core.Keyword(null,"day-of-week-full","day-of-week-full",-1338599604),new cljs.core.Keyword(null,"month-d","month-d",-417018321),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"day-of-year","day-of-year",478600113),new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),new cljs.core.Keyword(null,"month-short","month-short",-1531335142),new cljs.core.Keyword(null,"hour-24-dd","hour-24-dd",520374299),new cljs.core.Keyword(null,"hour-12-d","hour-12-d",-1761180644),new cljs.core.Keyword(null,"month-full","month-full",-980003620),new cljs.core.Keyword(null,"hour-24-d","hour-24-d",358782876),new cljs.core.Keyword(null,"week-of-year","week-of-year",-910114435),new cljs.core.Keyword(null,"minute-dd","minute-dd",-53740577)],["Q","ss","ddd","DD","MM","hh","m","A","SSS","dddd","M","YYYY","DDD","D","MMM","HH","h","MMMM","H","wo","mm"]);
metabase.shared.formatting.internal.date_builder.format_string_literal = (function metabase$shared$formatting$internal$date_builder$format_string_literal(lit){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lit),"]"].join('');
});
/**
 * Given a data structure describing the date format, as given in [[format-strings]], return a function that takes a
 *   date object and formats it.
 */
metabase.shared.formatting.internal.date_builder.__GT_formatter = (function metabase$shared$formatting$internal$date_builder$__GT_formatter(format_list){
var js__GT_clj = cljs.core.js__GT_clj;
var parts = (function (){var iter__5523__auto__ = (function metabase$shared$formatting$internal$date_builder$__GT_formatter_$_iter__81527(s__81529){
return (new cljs.core.LazySeq(null,(function (){
var s__81529__$1 = s__81529;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__81529__$1);
if(temp__5804__auto__){
var s__81529__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81529__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__81529__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__81531 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__81530 = (0);
while(true){
if((i__81530 < size__5522__auto__)){
var fmt = cljs.core._nth(c__5521__auto__,i__81530);
cljs.core.chunk_append(b__81531,(((fmt instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_builder.format_strings,fmt):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,":"))?metabase.shared.formatting.internal.date_builder.format_string_literal(":"):((clojure.string.starts_with_QMARK_(fmt,":"))?(function (){var G__81553 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fmt,(1)));
return (metabase.shared.formatting.internal.date_builder.format_strings.cljs$core$IFn$_invoke$arity$1 ? metabase.shared.formatting.internal.date_builder.format_strings.cljs$core$IFn$_invoke$arity$1(G__81553) : metabase.shared.formatting.internal.date_builder.format_strings.call(null,G__81553));
})():((typeof fmt === 'string')?metabase.shared.formatting.internal.date_builder.format_string_literal(fmt):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown element of date format",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bad-element","bad-element",-1574328629),fmt,new cljs.core.Keyword(null,"format","format",-1306924766),format_list], null))})()
)))));

var G__81579 = (i__81530 + (1));
i__81530 = G__81579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81531),metabase$shared$formatting$internal$date_builder$__GT_formatter_$_iter__81527(cljs.core.chunk_rest(s__81529__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81531),null);
}
} else {
var fmt = cljs.core.first(s__81529__$2);
return cljs.core.cons((((fmt instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_builder.format_strings,fmt):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,":"))?metabase.shared.formatting.internal.date_builder.format_string_literal(":"):((clojure.string.starts_with_QMARK_(fmt,":"))?(function (){var G__81571 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fmt,(1)));
return (metabase.shared.formatting.internal.date_builder.format_strings.cljs$core$IFn$_invoke$arity$1 ? metabase.shared.formatting.internal.date_builder.format_strings.cljs$core$IFn$_invoke$arity$1(G__81571) : metabase.shared.formatting.internal.date_builder.format_strings.call(null,G__81571));
})():((typeof fmt === 'string')?metabase.shared.formatting.internal.date_builder.format_string_literal(fmt):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown element of date format",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bad-element","bad-element",-1574328629),fmt,new cljs.core.Keyword(null,"format","format",-1306924766),format_list], null))})()
)))),metabase$shared$formatting$internal$date_builder$__GT_formatter_$_iter__81527(cljs.core.rest(s__81529__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__((js__GT_clj.cljs$core$IFn$_invoke$arity$1 ? js__GT_clj.cljs$core$IFn$_invoke$arity$1(format_list) : js__GT_clj.call(null,format_list)));
})();
var fmt_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,parts);
return (function (p1__81521_SHARP_){
return p1__81521_SHARP_.format(fmt_str);
});
});
Object.defineProperty(module.exports, "format_strings", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_builder.format_strings; } });
Object.defineProperty(module.exports, "format_string_literal", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_builder.format_string_literal; } });
Object.defineProperty(module.exports, "__GT_formatter", { enumerable: false, get: function() { return metabase.shared.formatting.internal.date_builder.__GT_formatter; } });
//# sourceMappingURL=metabase.shared.formatting.internal.date_builder.js.map
