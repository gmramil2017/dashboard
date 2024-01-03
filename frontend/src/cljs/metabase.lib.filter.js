var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./medley.core.js");
require("./metabase.lib.common.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.filter.operator.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.filter.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.filter.js");

goog.provide('metabase.lib.filter');
var seq__79591_79830 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"or","or",235744169)], null));
var chunk__79592_79831 = null;
var count__79593_79832 = (0);
var i__79594_79833 = (0);
while(true){
if((i__79594_79833 < count__79593_79832)){
var tag_79834 = chunk__79592_79831.cljs$core$IIndexed$_nth$arity$2(null,i__79594_79833);
metabase.lib.hierarchy.derive(tag_79834,new cljs.core.Keyword("metabase.lib.filter","compound","metabase.lib.filter/compound",1924103780));


var G__79835 = seq__79591_79830;
var G__79836 = chunk__79592_79831;
var G__79837 = count__79593_79832;
var G__79838 = (i__79594_79833 + (1));
seq__79591_79830 = G__79835;
chunk__79592_79831 = G__79836;
count__79593_79832 = G__79837;
i__79594_79833 = G__79838;
continue;
} else {
var temp__5804__auto___79839 = cljs.core.seq(seq__79591_79830);
if(temp__5804__auto___79839){
var seq__79591_79840__$1 = temp__5804__auto___79839;
if(cljs.core.chunked_seq_QMARK_(seq__79591_79840__$1)){
var c__5568__auto___79841 = cljs.core.chunk_first(seq__79591_79840__$1);
var G__79842 = cljs.core.chunk_rest(seq__79591_79840__$1);
var G__79843 = c__5568__auto___79841;
var G__79844 = cljs.core.count(c__5568__auto___79841);
var G__79845 = (0);
seq__79591_79830 = G__79842;
chunk__79592_79831 = G__79843;
count__79593_79832 = G__79844;
i__79594_79833 = G__79845;
continue;
} else {
var tag_79846 = cljs.core.first(seq__79591_79840__$1);
metabase.lib.hierarchy.derive(tag_79846,new cljs.core.Keyword("metabase.lib.filter","compound","metabase.lib.filter/compound",1924103780));


var G__79847 = cljs.core.next(seq__79591_79840__$1);
var G__79848 = null;
var G__79849 = (0);
var G__79850 = (0);
seq__79591_79830 = G__79847;
chunk__79592_79831 = G__79848;
count__79593_79832 = G__79849;
i__79594_79833 = G__79850;
continue;
}
} else {
}
}
break;
}
var seq__79601_79852 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"!=","!=",-1841737356)], null));
var chunk__79602_79853 = null;
var count__79603_79854 = (0);
var i__79604_79855 = (0);
while(true){
if((i__79604_79855 < count__79603_79854)){
var tag_79856 = chunk__79602_79853.cljs$core$IIndexed$_nth$arity$2(null,i__79604_79855);
metabase.lib.hierarchy.derive(tag_79856,new cljs.core.Keyword("metabase.lib.filter","varargs","metabase.lib.filter/varargs",1417033079));


var G__79857 = seq__79601_79852;
var G__79858 = chunk__79602_79853;
var G__79859 = count__79603_79854;
var G__79860 = (i__79604_79855 + (1));
seq__79601_79852 = G__79857;
chunk__79602_79853 = G__79858;
count__79603_79854 = G__79859;
i__79604_79855 = G__79860;
continue;
} else {
var temp__5804__auto___79861 = cljs.core.seq(seq__79601_79852);
if(temp__5804__auto___79861){
var seq__79601_79862__$1 = temp__5804__auto___79861;
if(cljs.core.chunked_seq_QMARK_(seq__79601_79862__$1)){
var c__5568__auto___79863 = cljs.core.chunk_first(seq__79601_79862__$1);
var G__79864 = cljs.core.chunk_rest(seq__79601_79862__$1);
var G__79865 = c__5568__auto___79863;
var G__79866 = cljs.core.count(c__5568__auto___79863);
var G__79867 = (0);
seq__79601_79852 = G__79864;
chunk__79602_79853 = G__79865;
count__79603_79854 = G__79866;
i__79604_79855 = G__79867;
continue;
} else {
var tag_79868 = cljs.core.first(seq__79601_79862__$1);
metabase.lib.hierarchy.derive(tag_79868,new cljs.core.Keyword("metabase.lib.filter","varargs","metabase.lib.filter/varargs",1417033079));


var G__79869 = cljs.core.next(seq__79601_79862__$1);
var G__79870 = null;
var G__79871 = (0);
var G__79872 = (0);
seq__79601_79852 = G__79869;
chunk__79602_79853 = G__79870;
count__79603_79854 = G__79871;
i__79604_79855 = G__79872;
continue;
}
} else {
}
}
break;
}
var seq__79617_79873 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Keyword(null,"starts-with","starts-with",366503009),new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853)], null));
var chunk__79618_79874 = null;
var count__79619_79875 = (0);
var i__79620_79876 = (0);
while(true){
if((i__79620_79876 < count__79619_79875)){
var tag_79877 = chunk__79618_79874.cljs$core$IIndexed$_nth$arity$2(null,i__79620_79876);
metabase.lib.hierarchy.derive(tag_79877,new cljs.core.Keyword("metabase.lib.filter","binary","metabase.lib.filter/binary",-1921360491));


var G__79878 = seq__79617_79873;
var G__79879 = chunk__79618_79874;
var G__79880 = count__79619_79875;
var G__79881 = (i__79620_79876 + (1));
seq__79617_79873 = G__79878;
chunk__79618_79874 = G__79879;
count__79619_79875 = G__79880;
i__79620_79876 = G__79881;
continue;
} else {
var temp__5804__auto___79882 = cljs.core.seq(seq__79617_79873);
if(temp__5804__auto___79882){
var seq__79617_79883__$1 = temp__5804__auto___79882;
if(cljs.core.chunked_seq_QMARK_(seq__79617_79883__$1)){
var c__5568__auto___79884 = cljs.core.chunk_first(seq__79617_79883__$1);
var G__79885 = cljs.core.chunk_rest(seq__79617_79883__$1);
var G__79886 = c__5568__auto___79884;
var G__79887 = cljs.core.count(c__5568__auto___79884);
var G__79888 = (0);
seq__79617_79873 = G__79885;
chunk__79618_79874 = G__79886;
count__79619_79875 = G__79887;
i__79620_79876 = G__79888;
continue;
} else {
var tag_79890 = cljs.core.first(seq__79617_79883__$1);
metabase.lib.hierarchy.derive(tag_79890,new cljs.core.Keyword("metabase.lib.filter","binary","metabase.lib.filter/binary",-1921360491));


var G__79891 = cljs.core.next(seq__79617_79883__$1);
var G__79892 = null;
var G__79893 = (0);
var G__79894 = (0);
seq__79617_79873 = G__79891;
chunk__79618_79874 = G__79892;
count__79619_79875 = G__79893;
i__79620_79876 = G__79894;
continue;
}
} else {
}
}
break;
}
var seq__79625_79895 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908),new cljs.core.Keyword(null,"not-empty","not-empty",388922063),new cljs.core.Keyword(null,"not","not",-595976884)], null));
var chunk__79626_79896 = null;
var count__79627_79897 = (0);
var i__79628_79898 = (0);
while(true){
if((i__79628_79898 < count__79627_79897)){
var tag_79899 = chunk__79626_79896.cljs$core$IIndexed$_nth$arity$2(null,i__79628_79898);
metabase.lib.hierarchy.derive(tag_79899,new cljs.core.Keyword("metabase.lib.filter","unary","metabase.lib.filter/unary",-336199667));


var G__79900 = seq__79625_79895;
var G__79901 = chunk__79626_79896;
var G__79902 = count__79627_79897;
var G__79903 = (i__79628_79898 + (1));
seq__79625_79895 = G__79900;
chunk__79626_79896 = G__79901;
count__79627_79897 = G__79902;
i__79628_79898 = G__79903;
continue;
} else {
var temp__5804__auto___79904 = cljs.core.seq(seq__79625_79895);
if(temp__5804__auto___79904){
var seq__79625_79905__$1 = temp__5804__auto___79904;
if(cljs.core.chunked_seq_QMARK_(seq__79625_79905__$1)){
var c__5568__auto___79906 = cljs.core.chunk_first(seq__79625_79905__$1);
var G__79907 = cljs.core.chunk_rest(seq__79625_79905__$1);
var G__79908 = c__5568__auto___79906;
var G__79909 = cljs.core.count(c__5568__auto___79906);
var G__79910 = (0);
seq__79625_79895 = G__79907;
chunk__79626_79896 = G__79908;
count__79627_79897 = G__79909;
i__79628_79898 = G__79910;
continue;
} else {
var tag_79911 = cljs.core.first(seq__79625_79905__$1);
metabase.lib.hierarchy.derive(tag_79911,new cljs.core.Keyword("metabase.lib.filter","unary","metabase.lib.filter/unary",-336199667));


var G__79912 = cljs.core.next(seq__79625_79905__$1);
var G__79913 = null;
var G__79914 = (0);
var G__79915 = (0);
seq__79625_79895 = G__79912;
chunk__79626_79896 = G__79913;
count__79627_79897 = G__79914;
i__79628_79898 = G__79915;
continue;
}
} else {
}
}
break;
}
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"filters","filters",974726919),(function (query,stage_number,_key){
var temp__5804__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if(cljs.core.truth_(temp__5804__auto__)){
var filters = temp__5804__auto__;
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Filtered by {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.util.join_strings_with_conjunction(metabase.shared.util.i18n.js_i18n("and"),(function (){var iter__5523__auto__ = (function metabase$lib$filter$iter__79639(s__79640){
return (new cljs.core.LazySeq(null,(function (){
var s__79640__$1 = s__79640;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__79640__$1);
if(temp__5804__auto____$1){
var s__79640__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79640__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__79640__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__79642 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__79641 = (0);
while(true){
if((i__79641 < size__5522__auto__)){
var filter = cljs.core._nth(c__5521__auto__,i__79641);
cljs.core.chunk_append(b__79642,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,filter,new cljs.core.Keyword(null,"long","long",-171452093)));

var G__79917 = (i__79641 + (1));
i__79641 = G__79917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79642),metabase$lib$filter$iter__79639(cljs.core.chunk_rest(s__79640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79642),null);
}
} else {
var filter = cljs.core.first(s__79640__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,filter,new cljs.core.Keyword(null,"long","long",-171452093)),metabase$lib$filter$iter__79639(cljs.core.rest(s__79640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(filters);
})())], 0));
} else {
return null;
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.filter","compound","metabase.lib.filter/compound",1924103780),(function (query,stage_number,p__79652,style){
var vec__79655 = p__79652;
var seq__79656 = cljs.core.seq(vec__79655);
var first__79657 = cljs.core.first(seq__79656);
var seq__79656__$1 = cljs.core.next(seq__79656);
var tag = first__79657;
var first__79657__$1 = cljs.core.first(seq__79656__$1);
var seq__79656__$2 = cljs.core.next(seq__79656__$1);
var _opts = first__79657__$1;
var subclauses = seq__79656__$2;
return metabase.lib.util.join_strings_with_conjunction((function (){var G__79661 = tag;
var G__79661__$1 = (((G__79661 instanceof cljs.core.Keyword))?G__79661.fqn:null);
switch (G__79661__$1) {
case "and":
return metabase.shared.util.i18n.js_i18n("and");

break;
case "or":
return metabase.shared.util.i18n.js_i18n("or");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79661__$1)].join('')));

}
})(),(function (){var iter__5523__auto__ = (function metabase$lib$filter$iter__79662(s__79663){
return (new cljs.core.LazySeq(null,(function (){
var s__79663__$1 = s__79663;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79663__$1);
if(temp__5804__auto__){
var s__79663__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79663__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__79663__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__79665 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__79664 = (0);
while(true){
if((i__79664 < size__5522__auto__)){
var clause = cljs.core._nth(c__5521__auto__,i__79664);
cljs.core.chunk_append(b__79665,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,clause,style));

var G__79921 = (i__79664 + (1));
i__79664 = G__79921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79665),metabase$lib$filter$iter__79662(cljs.core.chunk_rest(s__79663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79665),null);
}
} else {
var clause = cljs.core.first(s__79663__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,clause,style),metabase$lib$filter$iter__79662(cljs.core.rest(s__79663__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(subclauses);
})());
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.filter","varargs","metabase.lib.filter/varargs",1417033079),(function (query,stage_number,p__79667,style){
var vec__79668 = p__79667;
var seq__79669 = cljs.core.seq(vec__79668);
var first__79670 = cljs.core.first(seq__79669);
var seq__79669__$1 = cljs.core.next(seq__79669);
var tag = first__79670;
var first__79670__$1 = cljs.core.first(seq__79669__$1);
var seq__79669__$2 = cljs.core.next(seq__79669__$1);
var _opts = first__79670__$1;
var exprs = seq__79669__$2;
var display_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79666_SHARP_){
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,p1__79666_SHARP_,style);
}),exprs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),(2))){
var vec__79671 = display_names;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79671,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79671,(1),null);
var G__79674 = tag;
var G__79674__$1 = (((G__79674 instanceof cljs.core.Keyword))?G__79674.fqn:null);
switch (G__79674__$1) {
case "=":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} equals {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

break;
case "!=":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} does not equal {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79674__$1)].join('')));

}
} else {
var expr = cljs.core.first(display_names);
var values = metabase.lib.util.join_strings_with_conjunction(metabase.shared.util.i18n.js_i18n("or"),cljs.core.rest(display_names));
var G__79675 = tag;
var G__79675__$1 = (((G__79675 instanceof cljs.core.Keyword))?G__79675.fqn:null);
switch (G__79675__$1) {
case "=":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} equals any of {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr,values], 0));

break;
case "!=":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} does not equal any of {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr,values], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79675__$1)].join('')));

}
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.filter","binary","metabase.lib.filter/binary",-1921360491),(function (query,stage_number,p__79678,style){
var vec__79681 = p__79678;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79681,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79681,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79681,(2),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79681,(3),null);
var x__$1 = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style);
var y__$1 = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,y,style);
var G__79685 = tag;
var G__79685__$1 = (((G__79685 instanceof cljs.core.Keyword))?G__79685.fqn:null);
switch (G__79685__$1) {
case "<":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is less than {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1,y__$1], 0));

break;
case "<=":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is less than or equal to {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1,y__$1], 0));

break;
case ">":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is greater than {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1,y__$1], 0));

break;
case ">=":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is greater than or equal to {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1,y__$1], 0));

break;
case "starts-with":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} starts with {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1,y__$1], 0));

break;
case "ends-with":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} ends with {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1,y__$1], 0));

break;
case "contains":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} contains {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1,y__$1], 0));

break;
case "does-not-contain":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} does not contain {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1,y__$1], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79685__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"between","between",1131099276),(function (query,stage_number,p__79692,style){
var vec__79693 = p__79692;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79693,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79693,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79693,(2),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79693,(3),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79693,(4),null);
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is between {1} and {2}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,expr,style),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,y,style)], 0));
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"inside","inside",1972503011),(function (query,stage_number,p__79696,style){
var vec__79697 = p__79696;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79697,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79697,(1),null);
var lat_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79697,(2),null);
var lon_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79697,(3),null);
var lat_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79697,(4),null);
var lon_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79697,(5),null);
var lat_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79697,(6),null);
var lon_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79697,(7),null);
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),opts,lat_expr,lat_min,lat_max], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),opts,lon_expr,lon_min,lon_max], null)], null),style);
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.filter","unary","metabase.lib.filter/unary",-336199667),(function (query,stage_number,p__79700,style){
var vec__79701 = p__79700;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79701,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79701,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79701,(2),null);
var expr__$1 = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,expr,style);
var G__79706 = tag;
var G__79706__$1 = (((G__79706 instanceof cljs.core.Keyword))?G__79706.fqn:null);
switch (G__79706__$1) {
case "is-null":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is empty",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__$1], 0));

break;
case "not-null":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is not empty",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__$1], 0));

break;
case "is-empty":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is empty",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__$1], 0));

break;
case "not-empty":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is not empty",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__$1], 0));

break;
case "not":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("not {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__$1], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79706__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(function (query,stage_number,p__79708,style){
var vec__79709 = p__79708;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79709,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79709,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79709,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79709,(3),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79709,(4),null);
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is within {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,expr,style),clojure.string.lower_case(metabase.lib.temporal_bucket.describe_temporal_interval(n,unit))], 0));
}));
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/and
 *        
 * 
 *   Create a standalone clause of type `and`.
 */
metabase.lib.filter.and = (function metabase$lib$filter$and(var_args){
var args__5775__auto__ = [];
var len__5769__auto___79948 = arguments.length;
var i__5770__auto___79949 = (0);
while(true){
if((i__5770__auto___79949 < len__5769__auto___79948)){
args__5775__auto__.push((arguments[i__5770__auto___79949]));

var G__79950 = (i__5770__auto___79949 + (1));
i__5770__auto___79949 = G__79950;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.filter.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.filter.and.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
}));

(metabase.lib.filter.and.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.filter.and.cljs$lang$applyTo = (function (seq79713){
var G__79714 = cljs.core.first(seq79713);
var seq79713__$1 = cljs.core.next(seq79713);
var G__79715 = cljs.core.first(seq79713__$1);
var seq79713__$2 = cljs.core.next(seq79713__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79714,G__79715,seq79713__$2);
}));

/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/or
 *        
 * 
 *   Create a standalone clause of type `or`.
 */
metabase.lib.filter.or = (function metabase$lib$filter$or(var_args){
var args__5775__auto__ = [];
var len__5769__auto___79951 = arguments.length;
var i__5770__auto___79952 = (0);
while(true){
if((i__5770__auto___79952 < len__5769__auto___79951)){
args__5775__auto__.push((arguments[i__5770__auto___79952]));

var G__79953 = (i__5770__auto___79952 + (1));
i__5770__auto___79952 = G__79953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.filter.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.filter.or.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"or","or",235744169),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
}));

(metabase.lib.filter.or.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.filter.or.cljs$lang$applyTo = (function (seq79717){
var G__79718 = cljs.core.first(seq79717);
var seq79717__$1 = cljs.core.next(seq79717);
var G__79719 = cljs.core.first(seq79717__$1);
var seq79717__$2 = cljs.core.next(seq79717__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79718,G__79719,seq79717__$2);
}));

/**
 * Inputs: ([x])
 *   Return: :mbql.clause/not
 *        
 * 
 *   Create a standalone clause of type `not`.
 */
metabase.lib.filter.not = (function metabase$lib$filter$not(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/=
 *        
 * 
 *   Create a standalone clause of type `=`.
 */
metabase.lib.filter._EQ_ = (function metabase$lib$filter$_EQ_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___79956 = arguments.length;
var i__5770__auto___79957 = (0);
while(true){
if((i__5770__auto___79957 < len__5769__auto___79956)){
args__5775__auto__.push((arguments[i__5770__auto___79957]));

var G__79958 = (i__5770__auto___79957 + (1));
i__5770__auto___79957 = G__79958;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.filter._EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.filter._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"=","=",1152933628),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
}));

(metabase.lib.filter._EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.filter._EQ_.cljs$lang$applyTo = (function (seq79735){
var G__79736 = cljs.core.first(seq79735);
var seq79735__$1 = cljs.core.next(seq79735);
var G__79737 = cljs.core.first(seq79735__$1);
var seq79735__$2 = cljs.core.next(seq79735__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79736,G__79737,seq79735__$2);
}));

/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/!=
 *        
 * 
 *   Create a standalone clause of type `!=`.
 */
metabase.lib.filter._BANG__EQ_ = (function metabase$lib$filter$_BANG__EQ_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___79962 = arguments.length;
var i__5770__auto___79963 = (0);
while(true){
if((i__5770__auto___79963 < len__5769__auto___79962)){
args__5775__auto__.push((arguments[i__5770__auto___79963]));

var G__79964 = (i__5770__auto___79963 + (1));
i__5770__auto___79963 = G__79964;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.filter._BANG__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.filter._BANG__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"!=","!=",-1841737356),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
}));

(metabase.lib.filter._BANG__EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.filter._BANG__EQ_.cljs$lang$applyTo = (function (seq79744){
var G__79745 = cljs.core.first(seq79744);
var seq79744__$1 = cljs.core.next(seq79744);
var G__79746 = cljs.core.first(seq79744__$1);
var seq79744__$2 = cljs.core.next(seq79744__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79745,G__79746,seq79744__$2);
}));

/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/<
 *        
 * 
 *   Create a standalone clause of type `<`.
 */
metabase.lib.filter._LT_ = (function metabase$lib$filter$_LT_(x,y){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/<=
 *        
 * 
 *   Create a standalone clause of type `<=`.
 */
metabase.lib.filter._LT__EQ_ = (function metabase$lib$filter$_LT__EQ_(x,y){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/>
 *        
 * 
 *   Create a standalone clause of type `>`.
 */
metabase.lib.filter._GT_ = (function metabase$lib$filter$_GT_(x,y){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/>=
 *        
 * 
 *   Create a standalone clause of type `>=`.
 */
metabase.lib.filter._GT__EQ_ = (function metabase$lib$filter$_GT__EQ_(x,y){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x lower upper])
 *   Return: :mbql.clause/between
 *        
 * 
 *   Create a standalone clause of type `between`.
 */
metabase.lib.filter.between = (function metabase$lib$filter$between(x,lower,upper){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,lower,upper], null));
});
/**
 * Inputs: ([lat lon lat-max lon-min lat-min lon-max])
 *   Return: :mbql.clause/inside
 *        
 * 
 *   Create a standalone clause of type `inside`.
 */
metabase.lib.filter.inside = (function metabase$lib$filter$inside(lat,lon,lat_max,lon_min,lat_min,lon_max){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"inside","inside",1972503011),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon,lat_max,lon_min,lat_min,lon_max], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/is-null
 *        
 * 
 *   Create a standalone clause of type `is-null`.
 */
metabase.lib.filter.is_null = (function metabase$lib$filter$is_null(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/not-null
 *        
 * 
 *   Create a standalone clause of type `not-null`.
 */
metabase.lib.filter.not_null = (function metabase$lib$filter$not_null(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/is-empty
 *        
 * 
 *   Create a standalone clause of type `is-empty`.
 */
metabase.lib.filter.is_empty = (function metabase$lib$filter$is_empty(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/not-empty
 *        
 * 
 *   Create a standalone clause of type `not-empty`.
 */
metabase.lib.filter.not_empty = (function metabase$lib$filter$not_empty(x){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"not-empty","not-empty",388922063),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([whole part])
 *   Return: :mbql.clause/starts-with
 *        
 * 
 *   Create a standalone clause of type `starts-with`.
 */
metabase.lib.filter.starts_with = (function metabase$lib$filter$starts_with(whole,part){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"starts-with","starts-with",366503009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [whole,part], null));
});
/**
 * Inputs: ([whole part])
 *   Return: :mbql.clause/ends-with
 *        
 * 
 *   Create a standalone clause of type `ends-with`.
 */
metabase.lib.filter.ends_with = (function metabase$lib$filter$ends_with(whole,part){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [whole,part], null));
});
/**
 * Inputs: ([whole part])
 *   Return: :mbql.clause/contains
 *        
 * 
 *   Create a standalone clause of type `contains`.
 */
metabase.lib.filter.contains = (function metabase$lib$filter$contains(whole,part){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [whole,part], null));
});
/**
 * Inputs: ([whole part])
 *   Return: :mbql.clause/does-not-contain
 *        
 * 
 *   Create a standalone clause of type `does-not-contain`.
 */
metabase.lib.filter.does_not_contain = (function metabase$lib$filter$does_not_contain(whole,part){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [whole,part], null));
});
/**
 * Inputs: ([x amount unit])
 *   Return: :mbql.clause/time-interval
 *        
 * 
 *   Create a standalone clause of type `time-interval`.
 */
metabase.lib.filter.time_interval = (function metabase$lib$filter$time_interval(x,amount,unit){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"time-interval","time-interval",704622015),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,amount,unit], null));
});
/**
 * Inputs: ([segment-id])
 *   Return: :mbql.clause/segment
 *        
 * 
 *   Create a standalone clause of type `segment`.
 */
metabase.lib.filter.segment = (function metabase$lib$filter$segment(segment_id){

return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segment_id], null));
});
/**
 * Inputs: ([query :- :metabase.lib.schema/query boolean-expression]
 *         [query :- :metabase.lib.schema/query stage-number :- [:maybe :int] boolean-expression])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Sets `boolean-expression` as a filter on `query`.
 */
metabase.lib.filter.filter = (function metabase$lib$filter$filter(var_args){
var G__79793 = arguments.length;
switch (G__79793) {
case 2:
return metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$2 = (function (query,boolean_expression){

return metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(query,null,boolean_expression);
}));

(metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,boolean_expression){

var stage_number__$1 = (function (){var or__5045__auto__ = stage_number;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-1);
}
})();
var new_filter = metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(boolean_expression);
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number__$1,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new_filter], 0));
}));

(metabase.lib.filter.filter.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query stage-number :- [:maybe :int]])
 *   Return: [:maybe [:ref :metabase.lib.schema/filters]]
 *        
 * 
 *   Returns the current filters in stage with `stage-number` of `query`.
 *   If `stage-number` is omitted, the last stage is used. Logicaly, the
 *   filter attached to the query is the conjunction of the expressions
 *   in the returned list. If the returned list is empty, then there is no
 *   filter attached to the query.
 *   See also [[metabase.lib.util/query-stage]].
 */
metabase.lib.filter.filters = (function metabase$lib$filter$filters(var_args){
var G__79799 = arguments.length;
switch (G__79799) {
case 1:
return metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$2(query,null);
}));

(metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

return cljs.core.not_empty(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,(function (){var or__5045__auto__ = stage_number;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-1);
}
})())));
}));

(metabase.lib.filter.filters.cljs$lang$maxFixedArity = 2);

metabase.lib.filter.ColumnWithOperators = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),metabase.lib.metadata.ColumnMetadata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operators","operators",-2064102509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword("metabase.lib.schema.filter","operator","metabase.lib.schema.filter/operator",-805746630)], null)], null)], null)], null);
/**
 * Inputs: [filterable-column :- ColumnWithOperators]
 *   Return: [:maybe [:sequential :metabase.lib.schema.filter/operator]]
 *        
 * 
 *   Returns the operators for which `filterable-column` is applicable.
 */
metabase.lib.filter.filterable_column_operators = (function metabase$lib$filter$filterable_column_operators(filterable_column){

return new cljs.core.Keyword(null,"operators","operators",-2064102509).cljs$core$IFn$_invoke$arity$1(filterable_column);
});
/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:sequential ColumnWithOperators]
 *        
 * 
 *   Get column metadata for all the columns that can be filtered in
 *   the stage number `stage-number` of the query `query`
 *   If `stage-number` is omitted, the last stage is used.
 *   The rules for determining which columns can be broken out by are as follows:
 * 
 *   1. custom `:expressions` in this stage of the query
 * 
 *   2. Fields 'exported' by the previous stage of the query, if there is one;
 *   otherwise Fields from the current `:source-table`
 * 
 *   3. Fields exported by explicit joins
 * 
 *   4. Fields in Tables that are implicitly joinable.
 */
metabase.lib.filter.filterable_columns = (function metabase$lib$filter$filterable_columns(var_args){
var G__79803 = arguments.length;
switch (G__79803) {
case 1:
return metabase.lib.filter.filterable_columns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.filter.filterable_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.filter.filterable_columns.cljs$core$IFn$_invoke$arity$1 = (function (query){

return metabase.lib.filter.filterable_columns.cljs$core$IFn$_invoke$arity$2(query,(-1));
}));

(metabase.lib.filter.filterable_columns.cljs$core$IFn$_invoke$arity$2 = (function (query,stage_number){

var stage = metabase.lib.util.query_stage(query,stage_number);
var columns = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
var with_operators = (function (column){
var temp__5804__auto__ = cljs.core.not_empty(metabase.lib.filter.operator.filter_operators(column));
if(cljs.core.truth_(temp__5804__auto__)){
var operators = temp__5804__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(column,new cljs.core.Keyword(null,"operators","operators",-2064102509),operators);
} else {
return null;
}
});
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(with_operators),columns));
}));

(metabase.lib.filter.filterable_columns.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: [filter-operator :- :metabase.lib.schema.filter/operator column :- lib.metadata/ColumnMetadata & args]
 *   Return: :metabase.lib.schema.expression/boolean
 *        
 * 
 *   Returns a standalone filter clause for a `filter-operator`,
 *   a `column`, and arguments.
 */
metabase.lib.filter.filter_clause = (function metabase$lib$filter$filter_clause(var_args){
var args__5775__auto__ = [];
var len__5769__auto___79974 = arguments.length;
var i__5770__auto___79975 = (0);
while(true){
if((i__5770__auto___79975 < len__5769__auto___79974)){
args__5775__auto__.push((arguments[i__5770__auto___79975]));

var G__79976 = (i__5770__auto___79975 + (1));
i__5770__auto___79975 = G__79976;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.lib.filter.filter_clause.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.lib.filter.filter_clause.cljs$core$IFn$_invoke$arity$variadic = (function (filter_operator,column,args){

return metabase.lib.options.ensure_uuid(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(filter_operator),cljs.core.PersistentArrayMap.EMPTY,metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(column)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.common.__GT_op_arg,args)));
}));

(metabase.lib.filter.filter_clause.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.filter.filter_clause.cljs$lang$applyTo = (function (seq79806){
var G__79807 = cljs.core.first(seq79806);
var seq79806__$1 = cljs.core.next(seq79806);
var G__79808 = cljs.core.first(seq79806__$1);
var seq79806__$2 = cljs.core.next(seq79806__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79807,G__79808,seq79806__$2);
}));

/**
 * Inputs: ([query a-filter-clause]
 *         [query :- :metabase.lib.schema/query stage-number :- :int a-filter-clause :- :metabase.lib.schema.expression/boolean])
 *   Return: :metabase.lib.schema.filter/operator
 *        
 * 
 *   Return the filter operator of the boolean expression `filter-clause`
 *   at `stage-number` in `query`.
 *   If `stage-number` is omitted, the last stage is used.
 */
metabase.lib.filter.filter_operator = (function metabase$lib$filter$filter_operator(var_args){
var G__79818 = arguments.length;
switch (G__79818) {
case 2:
return metabase.lib.filter.filter_operator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.filter.filter_operator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.filter.filter_operator.cljs$core$IFn$_invoke$arity$2 = (function (query,a_filter_clause){

return metabase.lib.filter.filter_operator.cljs$core$IFn$_invoke$arity$3(query,(-1),a_filter_clause);
}));

(metabase.lib.filter.filter_operator.cljs$core$IFn$_invoke$arity$3 = (function (query,stage_number,a_filter_clause){

var vec__79820 = a_filter_clause;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79820,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79820,(1),null);
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79820,(2),null);
var stage = metabase.lib.util.query_stage(query,stage_number);
var columns = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
var ref__GT_col = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,columns),columns);
var col_ref = metabase.lib.equality.find_closest_matching_ref.cljs$core$IFn$_invoke$arity$2(first_arg,cljs.core.keys(ref__GT_col));
var or__5045__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__79815_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(p1__79815_SHARP_),op);
}),metabase.lib.filter.operator.filter_operators((ref__GT_col.cljs$core$IFn$_invoke$arity$1 ? ref__GT_col.cljs$core$IFn$_invoke$arity$1(col_ref) : ref__GT_col.call(null,col_ref))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(op);
}
}));

(metabase.lib.filter.filter_operator.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "not_null", { enumerable: false, get: function() { return metabase.lib.filter.not_null; } });
Object.defineProperty(module.exports, "filter_operator", { enumerable: false, get: function() { return metabase.lib.filter.filter_operator; } });
Object.defineProperty(module.exports, "does_not_contain", { enumerable: false, get: function() { return metabase.lib.filter.does_not_contain; } });
Object.defineProperty(module.exports, "_EQ_", { enumerable: false, get: function() { return metabase.lib.filter._EQ_; } });
Object.defineProperty(module.exports, "_LT_", { enumerable: false, get: function() { return metabase.lib.filter._LT_; } });
Object.defineProperty(module.exports, "ends_with", { enumerable: false, get: function() { return metabase.lib.filter.ends_with; } });
Object.defineProperty(module.exports, "time_interval", { enumerable: false, get: function() { return metabase.lib.filter.time_interval; } });
Object.defineProperty(module.exports, "filterable_column_operators", { enumerable: false, get: function() { return metabase.lib.filter.filterable_column_operators; } });
Object.defineProperty(module.exports, "ColumnWithOperators", { enumerable: false, get: function() { return metabase.lib.filter.ColumnWithOperators; } });
Object.defineProperty(module.exports, "starts_with", { enumerable: false, get: function() { return metabase.lib.filter.starts_with; } });
Object.defineProperty(module.exports, "_LT__EQ_", { enumerable: false, get: function() { return metabase.lib.filter._LT__EQ_; } });
Object.defineProperty(module.exports, "inside", { enumerable: false, get: function() { return metabase.lib.filter.inside; } });
Object.defineProperty(module.exports, "contains", { enumerable: false, get: function() { return metabase.lib.filter.contains; } });
Object.defineProperty(module.exports, "is_empty", { enumerable: false, get: function() { return metabase.lib.filter.is_empty; } });
Object.defineProperty(module.exports, "_GT_", { enumerable: false, get: function() { return metabase.lib.filter._GT_; } });
Object.defineProperty(module.exports, "filterable_columns", { enumerable: false, get: function() { return metabase.lib.filter.filterable_columns; } });
Object.defineProperty(module.exports, "filters", { enumerable: false, get: function() { return metabase.lib.filter.filters; } });
Object.defineProperty(module.exports, "or", { enumerable: false, get: function() { return metabase.lib.filter.or; } });
Object.defineProperty(module.exports, "filter_clause", { enumerable: false, get: function() { return metabase.lib.filter.filter_clause; } });
Object.defineProperty(module.exports, "between", { enumerable: false, get: function() { return metabase.lib.filter.between; } });
Object.defineProperty(module.exports, "not", { enumerable: false, get: function() { return metabase.lib.filter.not; } });
Object.defineProperty(module.exports, "is_null", { enumerable: false, get: function() { return metabase.lib.filter.is_null; } });
Object.defineProperty(module.exports, "_GT__EQ_", { enumerable: false, get: function() { return metabase.lib.filter._GT__EQ_; } });
Object.defineProperty(module.exports, "not_empty", { enumerable: false, get: function() { return metabase.lib.filter.not_empty; } });
Object.defineProperty(module.exports, "filter", { enumerable: false, get: function() { return metabase.lib.filter.filter; } });
Object.defineProperty(module.exports, "segment", { enumerable: false, get: function() { return metabase.lib.filter.segment; } });
Object.defineProperty(module.exports, "_BANG__EQ_", { enumerable: false, get: function() { return metabase.lib.filter._BANG__EQ_; } });
Object.defineProperty(module.exports, "and", { enumerable: false, get: function() { return metabase.lib.filter.and; } });
//# sourceMappingURL=metabase.lib.filter.js.map
