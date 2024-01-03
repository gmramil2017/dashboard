var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./malli.core.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.literal.js");
require("./metabase.lib.schema.mbql_clause.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.util.malli.registry.js");
require("./shadow.js.shim.module$moment.js");
require("./shadow.js.shim.module$moment_timezone.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.expression.temporal.js");

goog.provide('metabase.lib.schema.expression.temporal');
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interval","interval",1708495417),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Interval","type/Interval",-365323617),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time.interval","metabase.lib.schema.temporal-bucketing/unit.date-time.interval",659301368)], 0));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib.type-of","type-is-temporal-type-of-first-arg","lib.type-of/type-is-temporal-type-of-first-arg",76272405),(function (p__60795){
var vec__60796 = p__60795;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60796,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60796,(1),null);
var temporal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60796,(2),null);
var inner_type = metabase.lib.schema.expression.type_of(temporal);
if(cljs.core.set_QMARK_(inner_type)){
var temporal_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(inner_type,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("type","Date","type/Date",-690428629),null,new cljs.core.Keyword("type","DateTime","type/DateTime",352113310),null], null), null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(temporal_set),(1))){
return cljs.core.first(temporal_set);
} else {
return temporal_set;
}
} else {
return inner_type;
}
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword("lib.type-of","type-is-temporal-type-of-first-arg","lib.type-of/type-is-temporal-type-of-first-arg",76272405),new cljs.core.Keyword("lib.type-of","type-is-type-of-first-arg","lib.type-of/type-is-type-of-first-arg",-317600808));
var seq__60799_60839 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),new cljs.core.Keyword(null,"datetime-subtract","datetime-subtract",275307697)], null));
var chunk__60800_60840 = null;
var count__60801_60841 = (0);
var i__60802_60842 = (0);
while(true){
if((i__60802_60842 < count__60801_60841)){
var op_60843 = chunk__60800_60840.cljs$core$IIndexed$_nth$arity$2(null,i__60802_60842);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_60843,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time.interval","metabase.lib.schema.temporal-bucketing/unit.date-time.interval",659301368)], null)], 0));

metabase.lib.hierarchy.derive(op_60843,new cljs.core.Keyword("lib.type-of","type-is-temporal-type-of-first-arg","lib.type-of/type-is-temporal-type-of-first-arg",76272405));


var G__60844 = seq__60799_60839;
var G__60845 = chunk__60800_60840;
var G__60846 = count__60801_60841;
var G__60847 = (i__60802_60842 + (1));
seq__60799_60839 = G__60844;
chunk__60800_60840 = G__60845;
count__60801_60841 = G__60846;
i__60802_60842 = G__60847;
continue;
} else {
var temp__5804__auto___60848 = cljs.core.seq(seq__60799_60839);
if(temp__5804__auto___60848){
var seq__60799_60849__$1 = temp__5804__auto___60848;
if(cljs.core.chunked_seq_QMARK_(seq__60799_60849__$1)){
var c__5568__auto___60850 = cljs.core.chunk_first(seq__60799_60849__$1);
var G__60851 = cljs.core.chunk_rest(seq__60799_60849__$1);
var G__60852 = c__5568__auto___60850;
var G__60853 = cljs.core.count(c__5568__auto___60850);
var G__60854 = (0);
seq__60799_60839 = G__60851;
chunk__60800_60840 = G__60852;
count__60801_60841 = G__60853;
i__60802_60842 = G__60854;
continue;
} else {
var op_60855 = cljs.core.first(seq__60799_60849__$1);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_60855,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time.interval","metabase.lib.schema.temporal-bucketing/unit.date-time.interval",659301368)], null)], 0));

metabase.lib.hierarchy.derive(op_60855,new cljs.core.Keyword("lib.type-of","type-is-temporal-type-of-first-arg","lib.type-of/type-is-temporal-type-of-first-arg",76272405));


var G__60856 = cljs.core.next(seq__60799_60849__$1);
var G__60857 = null;
var G__60858 = (0);
var G__60859 = (0);
seq__60799_60839 = G__60856;
chunk__60800_60840 = G__60857;
count__60801_60841 = G__60858;
i__60802_60842 = G__60859;
continue;
}
} else {
}
}
break;
}
var seq__60803_60860 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-year","get-year",-936011274),new cljs.core.Keyword(null,"get-month","get-month",-369374731),new cljs.core.Keyword(null,"get-day","get-day",127568857),new cljs.core.Keyword(null,"get-hour","get-hour",622714059),new cljs.core.Keyword(null,"get-minute","get-minute",1468086343),new cljs.core.Keyword(null,"get-second","get-second",-2065946318),new cljs.core.Keyword(null,"get-quarter","get-quarter",1327778593)], null));
var chunk__60804_60861 = null;
var count__60805_60862 = (0);
var i__60806_60863 = (0);
while(true){
if((i__60806_60863 < count__60805_60862)){
var op_60865 = chunk__60804_60861.cljs$core$IIndexed$_nth$arity$2(null,i__60806_60863);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_60865,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null)], 0));


var G__60869 = seq__60803_60860;
var G__60870 = chunk__60804_60861;
var G__60871 = count__60805_60862;
var G__60872 = (i__60806_60863 + (1));
seq__60803_60860 = G__60869;
chunk__60804_60861 = G__60870;
count__60805_60862 = G__60871;
i__60806_60863 = G__60872;
continue;
} else {
var temp__5804__auto___60873 = cljs.core.seq(seq__60803_60860);
if(temp__5804__auto___60873){
var seq__60803_60874__$1 = temp__5804__auto___60873;
if(cljs.core.chunked_seq_QMARK_(seq__60803_60874__$1)){
var c__5568__auto___60875 = cljs.core.chunk_first(seq__60803_60874__$1);
var G__60876 = cljs.core.chunk_rest(seq__60803_60874__$1);
var G__60877 = c__5568__auto___60875;
var G__60878 = cljs.core.count(c__5568__auto___60875);
var G__60879 = (0);
seq__60803_60860 = G__60876;
chunk__60804_60861 = G__60877;
count__60805_60862 = G__60878;
i__60806_60863 = G__60879;
continue;
} else {
var op_60880 = cljs.core.first(seq__60803_60874__$1);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_60880,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null)], 0));


var G__60881 = cljs.core.next(seq__60803_60874__$1);
var G__60882 = null;
var G__60883 = (0);
var G__60884 = (0);
seq__60803_60860 = G__60881;
chunk__60804_60861 = G__60882;
count__60805_60862 = G__60883;
i__60806_60863 = G__60884;
continue;
}
} else {
}
}
break;
}
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"datetime-diff","datetime-diff",1133112155),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time.truncate","metabase.lib.schema.temporal-bucketing/unit.date-time.truncate",686665771)], null)], 0));
var seq__60811_60885 = cljs.core.seq(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"get-quarter","get-quarter",1327778593),null,new cljs.core.Keyword(null,"get-minute","get-minute",1468086343),null,new cljs.core.Keyword(null,"get-hour","get-hour",622714059),null,new cljs.core.Keyword(null,"get-day-of-week","get-day-of-week",2010140752),null,new cljs.core.Keyword(null,"get-second","get-second",-2065946318),null,new cljs.core.Keyword(null,"get-month","get-month",-369374731),null,new cljs.core.Keyword(null,"get-year","get-year",-936011274),null,new cljs.core.Keyword(null,"get-day","get-day",127568857),null], null), null));
var chunk__60812_60886 = null;
var count__60813_60887 = (0);
var i__60814_60888 = (0);
while(true){
if((i__60814_60888 < count__60813_60887)){
var temporal_extract_op_60889 = chunk__60812_60886.cljs$core$IIndexed$_nth$arity$2(null,i__60814_60888);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(temporal_extract_op_60889,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null)], 0));


var G__60890 = seq__60811_60885;
var G__60891 = chunk__60812_60886;
var G__60892 = count__60813_60887;
var G__60893 = (i__60814_60888 + (1));
seq__60811_60885 = G__60890;
chunk__60812_60886 = G__60891;
count__60813_60887 = G__60892;
i__60814_60888 = G__60893;
continue;
} else {
var temp__5804__auto___60894 = cljs.core.seq(seq__60811_60885);
if(temp__5804__auto___60894){
var seq__60811_60895__$1 = temp__5804__auto___60894;
if(cljs.core.chunked_seq_QMARK_(seq__60811_60895__$1)){
var c__5568__auto___60896 = cljs.core.chunk_first(seq__60811_60895__$1);
var G__60897 = cljs.core.chunk_rest(seq__60811_60895__$1);
var G__60898 = c__5568__auto___60896;
var G__60899 = cljs.core.count(c__5568__auto___60896);
var G__60900 = (0);
seq__60811_60885 = G__60897;
chunk__60812_60886 = G__60898;
count__60813_60887 = G__60899;
i__60814_60888 = G__60900;
continue;
} else {
var temporal_extract_op_60901 = cljs.core.first(seq__60811_60895__$1);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(temporal_extract_op_60901,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null)], 0));


var G__60902 = cljs.core.next(seq__60811_60895__$1);
var G__60903 = null;
var G__60904 = (0);
var G__60905 = (0);
seq__60811_60885 = G__60902;
chunk__60812_60886 = G__60903;
count__60813_60887 = G__60904;
i__60814_60888 = G__60905;
continue;
}
} else {
}
}
break;
}
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.temporal","get-week-mode","metabase.lib.schema.expression.temporal/get-week-mode",1489967652),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"iso","iso",-1366207543),new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-week","get-week",-888059349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.temporal","get-week-mode","metabase.lib.schema.expression.temporal/get-week-mode",1489967652)], null)], null)], null)], null)], 0));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.temporal","timezone-id","metabase.lib.schema.expression.temporal/timezone-id",-1909635091),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"valid timezone ID",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__60815,_){
var map__60816 = p__60815;
var map__60816__$1 = cljs.core.__destructure_map(map__60816);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60816__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["invalid timezone ID: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
})], null)], null),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$moment.tz.names()))], null));
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"convert-timezone","convert-timezone",-124803001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.temporal","timezone-id","metabase.lib.schema.expression.temporal/timezone-id",-1909635091)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.temporal","timezone-id","metabase.lib.schema.expression.temporal/timezone-id",-1909635091)], null)], null)], null)], null)], 0));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"convert-timezone","convert-timezone",-124803001),new cljs.core.Keyword("lib.type-of","type-is-temporal-type-of-first-arg","lib.type-of/type-is-temporal-type-of-first-arg",76272405));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"now","now",-1650525531),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","DateTimeWithTZ","type/DateTimeWithTZ",-1919106635)], 0));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.temporal","absolute-datetime.base-type","metabase.lib.schema.expression.temporal/absolute-datetime.base-type",-904703365),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","base-type","metabase.lib.schema.common/base-type",999524206)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":absolute-datetime base-type must derive from :type/Date or :type/DateTime"], null),(function (base_type){
return cljs.core.some((function (p1__60817_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(base_type,p1__60817_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","Date","type/Date",-690428629),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310)], null));
})], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.temporal","absolute-datetime.options","metabase.lib.schema.expression.temporal/absolute-datetime.options",-925669633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.temporal","absolute-datetime.base-type","metabase.lib.schema.expression.temporal/absolute-datetime.base-type",-904703365)], null)], null)], null)], null));
metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"absolute-datetime","absolute-datetime",-560340465),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"valid :absolute-datetime clause"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"absolute-datetime","absolute-datetime",-560340465)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.temporal","absolute-datetime.options","metabase.lib.schema.expression.temporal/absolute-datetime.options",-925669633)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":absolute-datetime literal and unit for :type/Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.literal","date","metabase.lib.schema.literal/date",-906463835)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.literal","string.year-month","metabase.lib.schema.literal/string.year-month",-1014149016)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.literal","string.year","metabase.lib.schema.literal/string.year",-936788792)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date","metabase.lib.schema.temporal-bucketing/unit.date",1876937510)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":absolute-datetime literal and unit for :type/DateTime"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.literal","datetime","metabase.lib.schema.literal/datetime",985830761)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time","metabase.lib.schema.temporal-bucketing/unit.date-time",1924841408)], null)], null)], null)], null)], null)], null));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"absolute-datetime","absolute-datetime",-560340465),(function (p__60820){
var vec__60821 = p__60820;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60821,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60821,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60821,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60821,(3),null);
var or__5045__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"current","current",-1088038603)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"default","default",-1987822328)))?new cljs.core.Keyword("type","DateTime","type/DateTime",352113310):(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date","metabase.lib.schema.temporal-bucketing/unit.date",1876937510),unit))?new cljs.core.Keyword("type","Date","type/Date",-690428629):new cljs.core.Keyword("type","DateTime","type/DateTime",352113310)
)):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = ((typeof value === 'string')?(cljs.core.truth_(cljs.core.re_matches(metabase.lib.schema.literal.year_month_regex,value))?new cljs.core.Keyword("type","Date","type/Date",-690428629):(cljs.core.truth_(cljs.core.re_matches(metabase.lib.schema.literal.year_regex,value))?new cljs.core.Keyword("type","Date","type/Date",-690428629):null)):null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var value_type = metabase.lib.schema.expression.type_of(value);
var value_type__$1 = ((cljs.core.set_QMARK_(value_type))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__60819_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__60819_SHARP_,new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
})),value_type):value_type);
if(((cljs.core.set_QMARK_(value_type__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(value_type__$1),(1))))){
return cljs.core.first(value_type__$1);
} else {
return value_type__$1;
}
}
}
}));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.temporal","relative-datetime.amount","metabase.lib.schema.expression.temporal/relative-datetime.amount",7216442),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null));
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.temporal","relative-datetime.amount","metabase.lib.schema.expression.temporal/relative-datetime.amount",7216442)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time.interval","metabase.lib.schema.temporal-bucketing/unit.date-time.interval",659301368)], null)], null)], null)], null)], 0));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Time","type/Time",-814852413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","string","metabase.lib.schema.expression/string",1750008170)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.time.interval","metabase.lib.schema.temporal-bucketing/unit.time.interval",-718964325)], null)], 0));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.temporal","temporal-extract.unit","metabase.lib.schema.expression.temporal/temporal-extract.unit",339336486),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"year-of-era","year-of-era",682445876),new cljs.core.Keyword(null,"quarter-of-year","quarter-of-year",-472803491),new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),new cljs.core.Keyword(null,"week-of-year-iso","week-of-year-iso",-1827744293),new cljs.core.Keyword(null,"week-of-year-us","week-of-year-us",849423511),new cljs.core.Keyword(null,"week-of-year-instance","week-of-year-instance",2047974624),new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099),new cljs.core.Keyword(null,"minute-of-hour","minute-of-hour",1903220478),new cljs.core.Keyword(null,"second-of-minute","second-of-minute",222734326)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.temporal","temporal-extract.week-mode","metabase.lib.schema.expression.temporal/temporal-extract.week-mode",430590916),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"iso","iso",-1366207543),new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"temporal-extract","temporal-extract",1781686405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.temporal","temporal-extract.unit","metabase.lib.schema.expression.temporal/temporal-extract.unit",339336486)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.temporal","temporal-extract.week-mode","metabase.lib.schema.expression.temporal/temporal-extract.week-mode",430590916)], null)], null)], null)], null)], 0));

//# sourceMappingURL=metabase.lib.schema.expression.temporal.js.map
