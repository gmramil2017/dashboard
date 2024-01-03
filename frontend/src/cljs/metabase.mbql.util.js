var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.mbql.predicates.js");
require("./metabase.mbql.schema.js");
require("./metabase.mbql.schema.helpers.js");
require("./metabase.mbql.util.match.js");
require("./metabase.shared.util.i18n.js");
require("./schema.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.mbql.util.js");

goog.provide('metabase.mbql.util');
/**
 * Like `name`, but if `x` is a namespace-qualified keyword, returns that a string including the namespace.
 */
metabase.mbql.util.qualified_name = (function metabase$mbql$util$qualified_name(x){
if(cljs.core.truth_((function (){var and__5043__auto__ = (x instanceof cljs.core.Keyword);
if(and__5043__auto__){
return cljs.core.namespace(x);
} else {
return and__5043__auto__;
}
})())){
return [cljs.core.namespace(x),"/",cljs.core.name(x)].join('');
} else {
return cljs.core.name(x);
}
});
var ufv63605_64419 = schema.utils.use_fn_validation;
var output_schema63604_64420 = schema.core.Keyword;
var input_schema63606_64421 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.helpers.KeywordOrString,cljs.core.with_meta(new cljs.core.Symbol(null,"token","token",429068312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.helpers","KeywordOrString","schema.helpers/KeywordOrString",-360677001,null)], null)))], null);
var input_checker63607_64422 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema63606_64421);
}),null));
var output_checker63608_64423 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema63604_64420);
}),null));
var ret__51869__auto___64424 = /**
 * Inputs: [token :- schema.helpers/KeywordOrString]
 *   Returns: s/Keyword
 * 
 *   Convert a string or keyword in various cases (`lisp-case`, `snake_case`, or `SCREAMING_SNAKE_CASE`) to a lisp-cased
 *   keyword.
 */
metabase.mbql.util.normalize_token = (function metabase$mbql$util$normalize_token(G__63609){
var validate__50237__auto__ = cljs.core.deref(ufv63605_64419);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64425 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__63609], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63611_64426 = new cljs.core.Keyword(null,"input","input",556931961);
var G__63612_64427 = cljs.core.with_meta(new cljs.core.Symbol(null,"normalize-token","normalize-token",-2048623092,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a string or keyword in various cases (`lisp-case`, `snake_case`, or `SCREAMING_SNAKE_CASE`) to a lisp-cased\n  keyword."], null));
var G__63613_64428 = input_schema63606_64421;
var G__63614_64429 = cljs.core.deref(input_checker63607_64422);
var G__63615_64430 = args__50238__auto___64425;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63611_64426,G__63612_64427,G__63613_64428,G__63614_64429,G__63615_64430) : schema.core.fn_validator.call(null,G__63611_64426,G__63612_64427,G__63613_64428,G__63614_64429,G__63615_64430));
} else {
var temp__5804__auto___64431 = (function (){var fexpr__63616 = cljs.core.deref(input_checker63607_64422);
return (fexpr__63616.cljs$core$IFn$_invoke$arity$1 ? fexpr__63616.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64425) : fexpr__63616.call(null,args__50238__auto___64425));
})();
if(cljs.core.truth_(temp__5804__auto___64431)){
var error__50239__auto___64432 = temp__5804__auto___64431;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"normalize-token","normalize-token",-2048623092,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a string or keyword in various cases (`lisp-case`, `snake_case`, or `SCREAMING_SNAKE_CASE`) to a lisp-cased\n  keyword."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64432], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema63606_64421,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64425,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64432], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var token = G__63609;
while(true){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.lower_case(metabase.mbql.util.qualified_name(token)),/_/,"-"));
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63617_64433 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__63618_64434 = cljs.core.with_meta(new cljs.core.Symbol(null,"normalize-token","normalize-token",-2048623092,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a string or keyword in various cases (`lisp-case`, `snake_case`, or `SCREAMING_SNAKE_CASE`) to a lisp-cased\n  keyword."], null));
var G__63619_64435 = output_schema63604_64420;
var G__63620_64436 = cljs.core.deref(output_checker63608_64423);
var G__63621_64437 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63617_64433,G__63618_64434,G__63619_64435,G__63620_64436,G__63621_64437) : schema.core.fn_validator.call(null,G__63617_64433,G__63618_64434,G__63619_64435,G__63620_64436,G__63621_64437));
} else {
var temp__5804__auto___64438 = (function (){var fexpr__63622 = cljs.core.deref(output_checker63608_64423);
return (fexpr__63622.cljs$core$IFn$_invoke$arity$1 ? fexpr__63622.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__63622.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64438)){
var error__50239__auto___64439 = temp__5804__auto___64438;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"normalize-token","normalize-token",-2048623092,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a string or keyword in various cases (`lisp-case`, `snake_case`, or `SCREAMING_SNAKE_CASE`) to a lisp-cased\n  keyword."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64439], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema63604_64420,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64439], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.normalize_token),schema.core.__GT_FnSchema(output_schema63604_64420,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema63606_64421], null)));

/**
 * True if `x` is an MBQL clause (a sequence with a keyword as its first arg). (Since this is used by the code in
 *   `normalize` this handles pre-normalized clauses as well.)
 */
metabase.mbql.util.mbql_clause_QMARK_ = (function metabase$mbql$util$mbql_clause_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && ((((!(cljs.core.map_entry_QMARK_(x)))) && ((cljs.core.first(x) instanceof cljs.core.Keyword)))));
});
/**
 * If `x` an MBQL clause, and an instance of clauses defined by keyword(s) `k-or-ks`?
 * 
 *  (is-clause? :count [:count 10])        ; -> true
 *  (is-clause? #{:+ :- :* :/} [:+ 10 20]) ; -> true
 */
metabase.mbql.util.is_clause_QMARK_ = (function metabase$mbql$util$is_clause_QMARK_(k_or_ks,x){
var and__5043__auto__ = metabase.mbql.util.mbql_clause_QMARK_(x);
if(and__5043__auto__){
if(cljs.core.coll_QMARK_(k_or_ks)){
var G__63624 = cljs.core.first(x);
var fexpr__63623 = cljs.core.set(k_or_ks);
return (fexpr__63623.cljs$core$IFn$_invoke$arity$1 ? fexpr__63623.cljs$core$IFn$_invoke$arity$1(G__63624) : fexpr__63623.call(null,G__63624));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_or_ks,cljs.core.first(x));
}
} else {
return and__5043__auto__;
}
});
metabase.mbql.util.combine_compound_filters_of_type = (function metabase$mbql$util$combine_compound_filters_of_type(compound_type,subclauses){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__63625_SHARP_){
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$mbql$util$combine_compound_filters_of_type_$_match_63626(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__63632 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__63632)) && ((cljs.core.count(_AMPERSAND_match_left__63632) === (1))))){
try{var _AMPERSAND_match_left__63632_0__63637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63632,(0));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,compound_type)(_AMPERSAND_match_left__63632_0__63637))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63643){if((e63643 instanceof Error)){
var e__62528__auto__ = e63643;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63643;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63640){if((e63640 instanceof Error)){
var e__62528__auto__ = e63640;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63640;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63639){if((e63639 instanceof Error)){
var e__62528__auto__ = e63639;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null)], null);
} else {
throw e__62528__auto__;
}
} else {
throw e63639;

}
}})(cljs.core.PersistentVector.EMPTY,p1__63625_SHARP_))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subclauses], 0));
});
/**
 * Simplify compound `:and`, `:or`, and `:not` compound filters, combining or eliminating them where possible. This
 *   also fixes theoretically disallowed compound filters like `:and` with only a single subclause, and eliminates `nils`
 *   and duplicate subclauses from the clauses.
 */
metabase.mbql.util.simplify_compound_filter = (function metabase$mbql$util$simplify_compound_filter(filter_clause){
return (function metabase$mbql$util$simplify_compound_filter_$_replace_63647(_AMPERSAND_parents,_AMPERSAND_match){
try{if(cljs.core.truth_((function (){var fexpr__63748 = metabase.mbql.util.match.impl.match_with_pred_or_class(cljs.core.seq_QMARK_);
return (fexpr__63748.cljs$core$IFn$_invoke$arity$1 ? fexpr__63748.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : fexpr__63748.call(null,_AMPERSAND_match));
})())){
return metabase$mbql$util$simplify_compound_filter_$_replace_63647(_AMPERSAND_parents,cljs.core.vec(_AMPERSAND_match));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63702){if((e63702 instanceof Error)){
var e__62528__auto__ = e63702;
if((e__62528__auto__ === cljs.core.match.backtrack)){
try{if((_AMPERSAND_match === null)){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e63703){if((e63703 instanceof Error)){
var e__62528__auto____$1 = e63703;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (0))))){
try{var _AMPERSAND_match_left__63663 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(0));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__63663)) && ((cljs.core.count(_AMPERSAND_match_left__63663) === (0))))){
try{var _AMPERSAND_match_right__63664 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.nil_QMARK_)(_AMPERSAND_match_right__63664))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e63747){if((e63747 instanceof Error)){
var e__62528__auto____$2 = e63747;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$2;
}
} else {
throw e63747;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63746){if((e63746 instanceof Error)){
var e__62528__auto____$2 = e63746;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$2;
}
} else {
throw e63746;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63704){if((e63704 instanceof Error)){
var e__62528__auto____$2 = e63704;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 0)))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e63705){if((e63705 instanceof Error)){
var e__62528__auto____$3 = e63705;
if((e__62528__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 1)))){
try{var _AMPERSAND_match_0__63665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63665,new cljs.core.Keyword(null,"and","and",-971899817))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e63744){if((e63744 instanceof Error)){
var e__62528__auto____$4 = e63744;
if((e__62528__auto____$4 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__63665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63665,new cljs.core.Keyword(null,"or","or",235744169))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e63745){if((e63745 instanceof Error)){
var e__62528__auto____$5 = e63745;
if((e__62528__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$5;
}
} else {
throw e63745;

}
}} else {
throw e__62528__auto____$4;
}
} else {
throw e63744;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63706){if((e63706 instanceof Error)){
var e__62528__auto____$4 = e63706;
if((e__62528__auto____$4 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__63676 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__63676)) && ((cljs.core.count(_AMPERSAND_match_left__63676) === (1))))){
try{var _AMPERSAND_match_left__63676_0__63678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63676,(0));
if(cljs.core.truth_((function (){var fexpr__63742 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"and","and",-971899817),null], null), null);
return (fexpr__63742.cljs$core$IFn$_invoke$arity$1 ? fexpr__63742.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_left__63676_0__63678) : fexpr__63742.call(null,_AMPERSAND_match_left__63676_0__63678));
})())){
try{var _AMPERSAND_match_right__63677 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,cljs.core.nil_QMARK_)(_AMPERSAND_match_right__63677))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63676,(0));
return metabase$mbql$util$simplify_compound_filter_$_replace_63647(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,clause_name,cljs.core.filterv(cljs.core.some_QMARK_,args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63743){if((e63743 instanceof Error)){
var e__62528__auto____$5 = e63743;
if((e__62528__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$5;
}
} else {
throw e63743;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63741){if((e63741 instanceof Error)){
var e__62528__auto____$5 = e63741;
if((e__62528__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$5;
}
} else {
throw e63741;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63740){if((e63740 instanceof Error)){
var e__62528__auto____$5 = e63740;
if((e__62528__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$5;
}
} else {
throw e63740;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63707){if((e63707 instanceof Error)){
var e__62528__auto____$5 = e63707;
if((e__62528__auto____$5 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__63680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63680,new cljs.core.Keyword(null,"not","not",-595976884))){
try{var _AMPERSAND_match_1__63681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_1__63681)) && ((cljs.core.count(_AMPERSAND_match_1__63681) >= (1))))){
try{var _AMPERSAND_match_1__63681_left__63682 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match_1__63681,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_1__63681_left__63682)) && ((cljs.core.count(_AMPERSAND_match_1__63681_left__63682) === (1))))){
try{var _AMPERSAND_match_1__63681_left__63682_0__63684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__63681_left__63682,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__63681_left__63682_0__63684,new cljs.core.Keyword(null,"and","and",-971899817))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__63681,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_63647(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"or","or",235744169),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63644_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"not","not",-595976884),p1__63644_SHARP_],null));
}),args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63738){if((e63738 instanceof Error)){
var e__62528__auto____$6 = e63738;
if((e__62528__auto____$6 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__63681_left__63682_0__63684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__63681_left__63682,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__63681_left__63682_0__63684,new cljs.core.Keyword(null,"or","or",235744169))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__63681,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_63647(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63645_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"not","not",-595976884),p1__63645_SHARP_],null));
}),args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63739){if((e63739 instanceof Error)){
var e__62528__auto____$7 = e63739;
if((e__62528__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$7;
}
} else {
throw e63739;

}
}} else {
throw e__62528__auto____$6;
}
} else {
throw e63738;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63737){if((e63737 instanceof Error)){
var e__62528__auto____$6 = e63737;
if((e__62528__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$6;
}
} else {
throw e63737;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63736){if((e63736 instanceof Error)){
var e__62528__auto____$6 = e63736;
if((e__62528__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$6;
}
} else {
throw e63736;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63732){if((e63732 instanceof Error)){
var e__62528__auto____$6 = e63732;
if((e__62528__auto____$6 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__63680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63680,new cljs.core.Keyword(null,"and","and",-971899817))){
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_63647(_AMPERSAND_parents,arg);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63734){if((e63734 instanceof Error)){
var e__62528__auto____$7 = e63734;
if((e__62528__auto____$7 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__63680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63680,new cljs.core.Keyword(null,"or","or",235744169))){
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_63647(_AMPERSAND_parents,arg);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63735){if((e63735 instanceof Error)){
var e__62528__auto____$8 = e63735;
if((e__62528__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$8;
}
} else {
throw e63735;

}
}} else {
throw e__62528__auto____$7;
}
} else {
throw e63734;

}
}} else {
throw e__62528__auto____$6;
}
} else {
throw e63732;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63708){if((e63708 instanceof Error)){
var e__62528__auto____$6 = e63708;
if((e__62528__auto____$6 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__63685 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__63685)) && ((cljs.core.count(_AMPERSAND_match_left__63685) === (1))))){
try{var _AMPERSAND_match_left__63685_0__63691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63685,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__63685_0__63691,new cljs.core.Keyword(null,"and","and",-971899817))){
try{var _AMPERSAND_match_right__63686 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.is_clause_QMARK_,new cljs.core.Keyword(null,"and","and",-971899817)))(_AMPERSAND_match_right__63686))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_63647(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"and","and",-971899817),metabase.mbql.util.combine_compound_filters_of_type(new cljs.core.Keyword(null,"and","and",-971899817),args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63730){if((e63730 instanceof Error)){
var e__62528__auto____$7 = e63730;
if((e__62528__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$7;
}
} else {
throw e63730;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63723){if((e63723 instanceof Error)){
var e__62528__auto____$7 = e63723;
if((e__62528__auto____$7 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__63685_0__63691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63685,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__63685_0__63691,new cljs.core.Keyword(null,"or","or",235744169))){
try{var _AMPERSAND_match_right__63686 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.is_clause_QMARK_,new cljs.core.Keyword(null,"or","or",235744169)))(_AMPERSAND_match_right__63686))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_63647(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"or","or",235744169),metabase.mbql.util.combine_compound_filters_of_type(new cljs.core.Keyword(null,"or","or",235744169),args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63729){if((e63729 instanceof Error)){
var e__62528__auto____$8 = e63729;
if((e__62528__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$8;
}
} else {
throw e63729;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63724){if((e63724 instanceof Error)){
var e__62528__auto____$8 = e63724;
if((e__62528__auto____$8 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__63685_0__63691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63685,(0));
if(cljs.core.truth_((function (){var fexpr__63726 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"and","and",-971899817),null], null), null);
return (fexpr__63726.cljs$core$IFn$_invoke$arity$1 ? fexpr__63726.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_left__63685_0__63691) : fexpr__63726.call(null,_AMPERSAND_match_left__63685_0__63691));
})())){
try{var _AMPERSAND_match_right__63686 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if((function (p1__63646_SHARP_){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,p1__63646_SHARP_));
})(_AMPERSAND_match_right__63686)){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63685,(0));
return metabase$mbql$util$simplify_compound_filter_$_replace_63647(_AMPERSAND_parents,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,clause,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(args)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63727){if((e63727 instanceof Error)){
var e__62528__auto____$9 = e63727;
if((e__62528__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$9;
}
} else {
throw e63727;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63725){if((e63725 instanceof Error)){
var e__62528__auto____$9 = e63725;
if((e__62528__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$9;
}
} else {
throw e63725;

}
}} else {
throw e__62528__auto____$8;
}
} else {
throw e63724;

}
}} else {
throw e__62528__auto____$7;
}
} else {
throw e63723;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63722){if((e63722 instanceof Error)){
var e__62528__auto____$7 = e63722;
if((e__62528__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$7;
}
} else {
throw e63722;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63709){if((e63709 instanceof Error)){
var e__62528__auto____$7 = e63709;
if((e__62528__auto____$7 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__63692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63692,new cljs.core.Keyword(null,"not","not",-595976884))){
try{var _AMPERSAND_match_1__63693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_1__63693)) && ((cljs.core.count(_AMPERSAND_match_1__63693) === 2)))){
try{var _AMPERSAND_match_1__63693_0__63696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__63693,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__63693_0__63696,new cljs.core.Keyword(null,"not","not",-595976884))){
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__63693,(1));
return metabase$mbql$util$simplify_compound_filter_$_replace_63647(_AMPERSAND_parents,arg);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63721){if((e63721 instanceof Error)){
var e__62528__auto____$8 = e63721;
if((e__62528__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$8;
}
} else {
throw e63721;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63720){if((e63720 instanceof Error)){
var e__62528__auto____$8 = e63720;
if((e__62528__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$8;
}
} else {
throw e63720;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63718){if((e63718 instanceof Error)){
var e__62528__auto____$8 = e63718;
if((e__62528__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$8;
}
} else {
throw e63718;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63710){if((e63710 instanceof Error)){
var e__62528__auto____$8 = e63710;
if((e__62528__auto____$8 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__63698 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__63698)) && ((cljs.core.count(_AMPERSAND_match_left__63698) === (1))))){
try{var _AMPERSAND_match_left__63698_0__63700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63698,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__63698_0__63700,new cljs.core.Keyword(null,"else","else",-1508377146))){
return filter_clause;
} else {
throw cljs.core.match.backtrack;

}
}catch (e63716){if((e63716 instanceof Error)){
var e__62528__auto____$9 = e63716;
if((e__62528__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$9;
}
} else {
throw e63716;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63714){if((e63714 instanceof Error)){
var e__62528__auto____$9 = e63714;
if((e__62528__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$9;
}
} else {
throw e63714;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63711){if((e63711 instanceof Error)){
var e__62528__auto____$9 = e63711;
if((e__62528__auto____$9 === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$simplify_compound_filter_$_replace_63647,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto____$9;
}
} else {
throw e63711;

}
}} else {
throw e__62528__auto____$8;
}
} else {
throw e63710;

}
}} else {
throw e__62528__auto____$7;
}
} else {
throw e63709;

}
}} else {
throw e__62528__auto____$6;
}
} else {
throw e63708;

}
}} else {
throw e__62528__auto____$5;
}
} else {
throw e63707;

}
}} else {
throw e__62528__auto____$4;
}
} else {
throw e63706;

}
}} else {
throw e__62528__auto____$3;
}
} else {
throw e63705;

}
}} else {
throw e__62528__auto____$2;
}
} else {
throw e63704;

}
}} else {
throw e__62528__auto____$1;
}
} else {
throw e63703;

}
}} else {
throw e__62528__auto__;
}
} else {
throw e63702;

}
}})(cljs.core.PersistentVector.EMPTY,filter_clause);
});
var ufv63750_64449 = schema.utils.use_fn_validation;
var output_schema63749_64450 = metabase.mbql.schema.Filter;
var input_schema63751_64451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"filter-clause","filter-clause",-1237814159,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker63752_64452 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema63751_64451);
}),null));
var output_checker63753_64453 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema63749_64450);
}),null));
var ret__51869__auto___64454 = (function (){
/**
 * Inputs: [filter-clause & more-filter-clauses]
 *   Returns: mbql.s/Filter
 * 
 *   Combine two filter clauses into a single clause in a way that minimizes slapping a bunch of `:and`s together if
 *   possible.
 */
metabase.mbql.util.combine_filter_clauses = (function metabase$mbql$util$combine_filter_clauses(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64455 = arguments.length;
var i__5770__auto___64456 = (0);
while(true){
if((i__5770__auto___64456 < len__5769__auto___64455)){
args__5775__auto__.push((arguments[i__5770__auto___64456]));

var G__64457 = (i__5770__auto___64456 + (1));
i__5770__auto___64456 = G__64457;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.mbql.util.combine_filter_clauses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.mbql.util.combine_filter_clauses.cljs$core$IFn$_invoke$arity$variadic = (function (G__63754,rest63755){
var validate__50237__auto__ = cljs.core.deref(ufv63750_64449);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64458 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__63754,rest63755);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63758_64459 = new cljs.core.Keyword(null,"input","input",556931961);
var G__63759_64460 = cljs.core.with_meta(new cljs.core.Symbol(null,"combine-filter-clauses","combine-filter-clauses",1245054425,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Combine two filter clauses into a single clause in a way that minimizes slapping a bunch of `:and`s together if\n  possible."], null));
var G__63760_64461 = input_schema63751_64451;
var G__63761_64462 = cljs.core.deref(input_checker63752_64452);
var G__63762_64463 = args__50238__auto___64458;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63758_64459,G__63759_64460,G__63760_64461,G__63761_64462,G__63762_64463) : schema.core.fn_validator.call(null,G__63758_64459,G__63759_64460,G__63760_64461,G__63761_64462,G__63762_64463));
} else {
var temp__5804__auto___64464 = (function (){var fexpr__63766 = cljs.core.deref(input_checker63752_64452);
return (fexpr__63766.cljs$core$IFn$_invoke$arity$1 ? fexpr__63766.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64458) : fexpr__63766.call(null,args__50238__auto___64458));
})();
if(cljs.core.truth_(temp__5804__auto___64464)){
var error__50239__auto___64465 = temp__5804__auto___64464;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"combine-filter-clauses","combine-filter-clauses",1245054425,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Combine two filter clauses into a single clause in a way that minimizes slapping a bunch of `:and`s together if\n  possible."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64465], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema63751_64451,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64458,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64465], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var filter_clause = G__63754;
var more_filter_clauses = rest63755;
while(true){
return metabase.mbql.util.simplify_compound_filter(cljs.core.cons(new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.cons(filter_clause,more_filter_clauses)));
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63767_64468 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__63768_64469 = cljs.core.with_meta(new cljs.core.Symbol(null,"combine-filter-clauses","combine-filter-clauses",1245054425,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Combine two filter clauses into a single clause in a way that minimizes slapping a bunch of `:and`s together if\n  possible."], null));
var G__63769_64470 = output_schema63749_64450;
var G__63770_64471 = cljs.core.deref(output_checker63753_64453);
var G__63771_64472 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63767_64468,G__63768_64469,G__63769_64470,G__63770_64471,G__63771_64472) : schema.core.fn_validator.call(null,G__63767_64468,G__63768_64469,G__63769_64470,G__63770_64471,G__63771_64472));
} else {
var temp__5804__auto___64473 = (function (){var fexpr__63772 = cljs.core.deref(output_checker63753_64453);
return (fexpr__63772.cljs$core$IFn$_invoke$arity$1 ? fexpr__63772.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__63772.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64473)){
var error__50239__auto___64474 = temp__5804__auto___64473;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"combine-filter-clauses","combine-filter-clauses",1245054425,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Combine two filter clauses into a single clause in a way that minimizes slapping a bunch of `:and`s together if\n  possible."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64474], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema63749_64450,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64474], null));
} else {
}
}
} else {
}

return o__50240__auto__;
}));

(metabase.mbql.util.combine_filter_clauses.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.mbql.util.combine_filter_clauses.cljs$lang$applyTo = (function (seq63756){
var G__63757 = cljs.core.first(seq63756);
var seq63756__$1 = cljs.core.next(seq63756);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63757,seq63756__$1);
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.combine_filter_clauses),schema.core.__GT_FnSchema(output_schema63749_64450,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema63751_64451], null)));

var ufv63774_64475 = schema.utils.use_fn_validation;
var output_schema63773_64476 = metabase.mbql.schema.MBQLQuery;
var input_schema63775_64477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.MBQLQuery,cljs.core.with_meta(new cljs.core.Symbol(null,"inner-query","inner-query",-907556093,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null)], null))),schema.core.one(schema.core.maybe(metabase.mbql.schema.Filter),cljs.core.with_meta(new cljs.core.Symbol(null,"new-clause","new-clause",-910348391,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null))], null)))], null);
var input_checker63776_64478 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema63775_64477);
}),null));
var output_checker63777_64479 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema63773_64476);
}),null));
var ret__51869__auto___64480 = /**
 * Inputs: [inner-query :- mbql.s/MBQLQuery new-clause :- (s/maybe mbql.s/Filter)]
 *   Returns: mbql.s/MBQLQuery
 * 
 *   Add a additional filter clause to an *inner* MBQL query, merging with the existing filter clause with `:and` if
 *   needed.
 */
metabase.mbql.util.add_filter_clause_to_inner_query = (function metabase$mbql$util$add_filter_clause_to_inner_query(G__63778,G__63779){
var validate__50237__auto__ = cljs.core.deref(ufv63774_64475);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__63778,G__63779], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63780_64482 = new cljs.core.Keyword(null,"input","input",556931961);
var G__63781_64483 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause-to-inner-query","add-filter-clause-to-inner-query",407708628,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a additional filter clause to an *inner* MBQL query, merging with the existing filter clause with `:and` if\n  needed."], null));
var G__63782_64484 = input_schema63775_64477;
var G__63783_64485 = cljs.core.deref(input_checker63776_64478);
var G__63784_64486 = args__50238__auto___64481;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63780_64482,G__63781_64483,G__63782_64484,G__63783_64485,G__63784_64486) : schema.core.fn_validator.call(null,G__63780_64482,G__63781_64483,G__63782_64484,G__63783_64485,G__63784_64486));
} else {
var temp__5804__auto___64487 = (function (){var fexpr__63785 = cljs.core.deref(input_checker63776_64478);
return (fexpr__63785.cljs$core$IFn$_invoke$arity$1 ? fexpr__63785.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64481) : fexpr__63785.call(null,args__50238__auto___64481));
})();
if(cljs.core.truth_(temp__5804__auto___64487)){
var error__50239__auto___64488 = temp__5804__auto___64487;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause-to-inner-query","add-filter-clause-to-inner-query",407708628,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a additional filter clause to an *inner* MBQL query, merging with the existing filter clause with `:and` if\n  needed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64488], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema63775_64477,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64481,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64488], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var inner_query = G__63778;
var new_clause = G__63779;
while(true){
if(cljs.core.not(new_clause)){
return inner_query;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(inner_query,new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.mbql.util.combine_filter_clauses,new_clause);
}
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63786_64489 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__63787_64490 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause-to-inner-query","add-filter-clause-to-inner-query",407708628,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a additional filter clause to an *inner* MBQL query, merging with the existing filter clause with `:and` if\n  needed."], null));
var G__63788_64491 = output_schema63773_64476;
var G__63789_64492 = cljs.core.deref(output_checker63777_64479);
var G__63790_64493 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63786_64489,G__63787_64490,G__63788_64491,G__63789_64492,G__63790_64493) : schema.core.fn_validator.call(null,G__63786_64489,G__63787_64490,G__63788_64491,G__63789_64492,G__63790_64493));
} else {
var temp__5804__auto___64494 = (function (){var fexpr__63791 = cljs.core.deref(output_checker63777_64479);
return (fexpr__63791.cljs$core$IFn$_invoke$arity$1 ? fexpr__63791.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__63791.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64494)){
var error__50239__auto___64495 = temp__5804__auto___64494;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause-to-inner-query","add-filter-clause-to-inner-query",407708628,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a additional filter clause to an *inner* MBQL query, merging with the existing filter clause with `:and` if\n  needed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64495], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema63773_64476,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64495], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.add_filter_clause_to_inner_query),schema.core.__GT_FnSchema(output_schema63773_64476,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema63775_64477], null)));

var ufv63793_64496 = schema.utils.use_fn_validation;
var output_schema63792_64497 = metabase.mbql.schema.Query;
var input_schema63794_64498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.Query,cljs.core.with_meta(new cljs.core.Symbol(null,"outer-query","outer-query",-395069361,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null)], null))),schema.core.one(schema.core.maybe(metabase.mbql.schema.Filter),cljs.core.with_meta(new cljs.core.Symbol(null,"new-clause","new-clause",-910348391,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null))], null)))], null);
var input_checker63795_64499 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema63794_64498);
}),null));
var output_checker63796_64500 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema63792_64497);
}),null));
var ret__51869__auto___64503 = /**
 * Inputs: [outer-query :- mbql.s/Query new-clause :- (s/maybe mbql.s/Filter)]
 *   Returns: mbql.s/Query
 * 
 *   Add an additional filter clause to an `outer-query`. If `new-clause` is `nil` this is a no-op.
 */
metabase.mbql.util.add_filter_clause = (function metabase$mbql$util$add_filter_clause(G__63797,G__63798){
var validate__50237__auto__ = cljs.core.deref(ufv63793_64496);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__63797,G__63798], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63799_64505 = new cljs.core.Keyword(null,"input","input",556931961);
var G__63800_64506 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause","add-filter-clause",-1464926076,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add an additional filter clause to an `outer-query`. If `new-clause` is `nil` this is a no-op."], null));
var G__63801_64507 = input_schema63794_64498;
var G__63802_64508 = cljs.core.deref(input_checker63795_64499);
var G__63803_64509 = args__50238__auto___64504;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63799_64505,G__63800_64506,G__63801_64507,G__63802_64508,G__63803_64509) : schema.core.fn_validator.call(null,G__63799_64505,G__63800_64506,G__63801_64507,G__63802_64508,G__63803_64509));
} else {
var temp__5804__auto___64511 = (function (){var fexpr__63804 = cljs.core.deref(input_checker63795_64499);
return (fexpr__63804.cljs$core$IFn$_invoke$arity$1 ? fexpr__63804.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64504) : fexpr__63804.call(null,args__50238__auto___64504));
})();
if(cljs.core.truth_(temp__5804__auto___64511)){
var error__50239__auto___64512 = temp__5804__auto___64511;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause","add-filter-clause",-1464926076,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add an additional filter clause to an `outer-query`. If `new-clause` is `nil` this is a no-op."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64512], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema63794_64498,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64504,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64512], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var outer_query = G__63797;
var new_clause = G__63798;
while(true){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(outer_query,new cljs.core.Keyword(null,"query","query",-1288509510),metabase.mbql.util.add_filter_clause_to_inner_query,new_clause);
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63805_64514 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__63806_64515 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause","add-filter-clause",-1464926076,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add an additional filter clause to an `outer-query`. If `new-clause` is `nil` this is a no-op."], null));
var G__63807_64516 = output_schema63792_64497;
var G__63808_64517 = cljs.core.deref(output_checker63796_64500);
var G__63809_64518 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63805_64514,G__63806_64515,G__63807_64516,G__63808_64517,G__63809_64518) : schema.core.fn_validator.call(null,G__63805_64514,G__63806_64515,G__63807_64516,G__63808_64517,G__63809_64518));
} else {
var temp__5804__auto___64519 = (function (){var fexpr__63810 = cljs.core.deref(output_checker63796_64500);
return (fexpr__63810.cljs$core$IFn$_invoke$arity$1 ? fexpr__63810.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__63810.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64519)){
var error__50239__auto___64520 = temp__5804__auto___64519;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-filter-clause","add-filter-clause",-1464926076,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add an additional filter clause to an `outer-query`. If `new-clause` is `nil` this is a no-op."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64520], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema63792_64497,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64520], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.add_filter_clause),schema.core.__GT_FnSchema(output_schema63792_64497,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema63794_64498], null)));

/**
 * Rewrite `:inside` filter clauses as a pair of `:between` clauses.
 */
metabase.mbql.util.desugar_inside = (function metabase$mbql$util$desugar_inside(m){
return (function metabase$mbql$util$desugar_inside_$_replace_63811(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 7)))){
try{var _AMPERSAND_match_0__63813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63813,new cljs.core.Keyword(null,"inside","inside",1972503011))){
var lat_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var lon_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var lat_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var lon_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
var lat_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(5));
var lon_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(6));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),lat_field,lat_min,lat_max], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),lon_field,lon_min,lon_max], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63821){if((e63821 instanceof Error)){
var e__62528__auto__ = e63821;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63821;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63820){if((e63820 instanceof Error)){
var e__62528__auto__ = e63820;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_inside_$_replace_63811,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e63820;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:is-null` and `:not-null` filter clauses as simpler `:=` and `:!=`, respectively.
 */
metabase.mbql.util.desugar_is_null_and_not_null = (function metabase$mbql$util$desugar_is_null_and_not_null(m){
return (function metabase$mbql$util$desugar_is_null_and_not_null_$_replace_63822(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__63824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63824,new cljs.core.Keyword(null,"is-null","is-null",-1997050930))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,null], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63827){if((e63827 instanceof Error)){
var e__62528__auto__ = e63827;
if((e__62528__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__63824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63824,new cljs.core.Keyword(null,"not-null","not-null",-1326718535))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,null], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63828){if((e63828 instanceof Error)){
var e__62528__auto____$1 = e63828;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$1;
}
} else {
throw e63828;

}
}} else {
throw e__62528__auto__;
}
} else {
throw e63827;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63826){if((e63826 instanceof Error)){
var e__62528__auto__ = e63826;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_is_null_and_not_null_$_replace_63822,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e63826;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:is-empty` and `:not-empty` filter clauses as simpler `:=` and `:!=`, respectively.
 */
metabase.mbql.util.desugar_is_empty_and_not_empty = (function metabase$mbql$util$desugar_is_empty_and_not_empty(m){
return (function metabase$mbql$util$desugar_is_empty_and_not_empty_$_replace_63829(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__63831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63831,new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,""], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63834){if((e63834 instanceof Error)){
var e__62528__auto__ = e63834;
if((e__62528__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__63831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63831,new cljs.core.Keyword(null,"not-empty","not-empty",388922063))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,""], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63835){if((e63835 instanceof Error)){
var e__62528__auto____$1 = e63835;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$1;
}
} else {
throw e63835;

}
}} else {
throw e__62528__auto__;
}
} else {
throw e63834;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63833){if((e63833 instanceof Error)){
var e__62528__auto__ = e63833;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_is_empty_and_not_empty_$_replace_63829,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e63833;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Replace a field or expression inside :time-interval
 */
metabase.mbql.util.replace_field_or_expression = (function metabase$mbql$util$replace_field_or_expression(m,unit){
return (function metabase$mbql$util$replace_field_or_expression_$_replace_63836(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__63838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63838,new cljs.core.Keyword(null,"field","field",-1302436500))){
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63846){if((e63846 instanceof Error)){
var e__62528__auto__ = e63846;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63846;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63843){if((e63843 instanceof Error)){
var e__62528__auto__ = e63843;
if((e__62528__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__63841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63841,new cljs.core.Keyword(null,"expression","expression",202311876))){
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),expression_name], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63845){if((e63845 instanceof Error)){
var e__62528__auto____$1 = e63845;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$1;
}
} else {
throw e63845;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63844){if((e63844 instanceof Error)){
var e__62528__auto____$1 = e63844;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$replace_field_or_expression_$_replace_63836,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto____$1;
}
} else {
throw e63844;

}
}} else {
throw e__62528__auto__;
}
} else {
throw e63843;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:time-interval` filter clauses as simpler ones like `:=` or `:between`.
 */
metabase.mbql.util.desugar_time_interval = (function metabase$mbql$util$desugar_time_interval(m){
return (function metabase$mbql$util$desugar_time_interval_$_replace_63847(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__63856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63856,new cljs.core.Keyword(null,"time-interval","time-interval",704622015))){
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return metabase$mbql$util$desugar_time_interval_$_replace_63847(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field_or_expression,n,unit,null], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63882){if((e63882 instanceof Error)){
var e__62528__auto__ = e63882;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63882;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63865){if((e63865 instanceof Error)){
var e__62528__auto__ = e63865;
if((e__62528__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 5)))){
try{var _AMPERSAND_match_0__63860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63860,new cljs.core.Keyword(null,"time-interval","time-interval",704622015))){
try{var _AMPERSAND_match_2__63862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__63862,new cljs.core.Keyword(null,"current","current",-1088038603))){
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return metabase$mbql$util$desugar_time_interval_$_replace_63847(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field_or_expression,(0),unit,options], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63868){if((e63868 instanceof Error)){
var e__62528__auto____$1 = e63868;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__63862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__63862,new cljs.core.Keyword(null,"last","last",1105735132))){
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return metabase$mbql$util$desugar_time_interval_$_replace_63847(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field_or_expression,(-1),unit,options], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63869){if((e63869 instanceof Error)){
var e__62528__auto____$2 = e63869;
if((e__62528__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__63862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__63862,new cljs.core.Keyword(null,"next","next",-117701485))){
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return metabase$mbql$util$desugar_time_interval_$_replace_63847(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field_or_expression,(1),unit,options], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63870){if((e63870 instanceof Error)){
var e__62528__auto____$3 = e63870;
if((e__62528__auto____$3 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__63862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_((function (){var fexpr__63880 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(-1),null], null), null);
return (fexpr__63880.cljs$core$IFn$_invoke$arity$1 ? fexpr__63880.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__63862) : fexpr__63880.call(null,_AMPERSAND_match_2__63862));
})())){
try{var _AMPERSAND_match_4__63864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__63864))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63881){if((e63881 instanceof Error)){
var e__62528__auto____$4 = e63881;
if((e__62528__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$4;
}
} else {
throw e63881;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63871){if((e63871 instanceof Error)){
var e__62528__auto____$4 = e63871;
if((e__62528__auto____$4 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__63862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_((function (){var fexpr__63878 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null);
return (fexpr__63878.cljs$core$IFn$_invoke$arity$1 ? fexpr__63878.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__63862) : fexpr__63878.call(null,_AMPERSAND_match_2__63862));
})())){
try{var _AMPERSAND_match_4__63864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__63864))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63879){if((e63879 instanceof Error)){
var e__62528__auto____$5 = e63879;
if((e__62528__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$5;
}
} else {
throw e63879;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63872){if((e63872 instanceof Error)){
var e__62528__auto____$5 = e63872;
if((e__62528__auto____$5 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__63862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_((function (){var fexpr__63877 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,(1),null,(-1),null], null), null);
return (fexpr__63877.cljs$core$IFn$_invoke$arity$1 ? fexpr__63877.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__63862) : fexpr__63877.call(null,_AMPERSAND_match_2__63862));
})())){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),metabase.mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63873){if((e63873 instanceof Error)){
var e__62528__auto____$6 = e63873;
if((e__62528__auto____$6 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__63862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if((_AMPERSAND_match_2__63862 < (0))){
try{var _AMPERSAND_match_4__63864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__63864))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63876){if((e63876 instanceof Error)){
var e__62528__auto____$7 = e63876;
if((e__62528__auto____$7 === cljs.core.match.backtrack)){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(-1),unit], null)], null);
} else {
throw e__62528__auto____$7;
}
} else {
throw e63876;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63874){if((e63874 instanceof Error)){
var e__62528__auto____$7 = e63874;
if((e__62528__auto____$7 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_4__63864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__63864))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63875){if((e63875 instanceof Error)){
var e__62528__auto____$8 = e63875;
if((e__62528__auto____$8 === cljs.core.match.backtrack)){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(1),unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw e__62528__auto____$8;
}
} else {
throw e63875;

}
}} else {
throw e__62528__auto____$7;
}
} else {
throw e63874;

}
}} else {
throw e__62528__auto____$6;
}
} else {
throw e63873;

}
}} else {
throw e__62528__auto____$5;
}
} else {
throw e63872;

}
}} else {
throw e__62528__auto____$4;
}
} else {
throw e63871;

}
}} else {
throw e__62528__auto____$3;
}
} else {
throw e63870;

}
}} else {
throw e__62528__auto____$2;
}
} else {
throw e63869;

}
}} else {
throw e__62528__auto____$1;
}
} else {
throw e63868;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63867){if((e63867 instanceof Error)){
var e__62528__auto____$1 = e63867;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$1;
}
} else {
throw e63867;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63866){if((e63866 instanceof Error)){
var e__62528__auto____$1 = e63866;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_time_interval_$_replace_63847,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto____$1;
}
} else {
throw e63866;

}
}} else {
throw e__62528__auto__;
}
} else {
throw e63865;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:does-not-contain` filter clauses as simpler `:not` clauses.
 */
metabase.mbql.util.desugar_does_not_contain = (function metabase$mbql$util$desugar_does_not_contain(m){
return (function metabase$mbql$util$desugar_does_not_contain_$_replace_63883(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__63885 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__63885)) && ((cljs.core.count(_AMPERSAND_match_left__63885) === (1))))){
try{var _AMPERSAND_match_left__63885_0__63887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63885,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__63885_0__63887,new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contains","contains",676899812)], null),args)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63890){if((e63890 instanceof Error)){
var e__62528__auto__ = e63890;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63890;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63889){if((e63889 instanceof Error)){
var e__62528__auto__ = e63889;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63889;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63888){if((e63888 instanceof Error)){
var e__62528__auto__ = e63888;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_does_not_contain_$_replace_63883,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e63888;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * `:=` and `!=` clauses with more than 2 args automatically get rewritten as compound filters.
 * 
 *   [:= field x y]  -> [:or  [:=  field x] [:=  field y]]
 *   [:!= field x y] -> [:and [:!= field x] [:!= field y]]
 */
metabase.mbql.util.desugar_equals_and_not_equals_with_extra_args = (function metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args(m){
return (function metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_63891(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (4))))){
try{var _AMPERSAND_match_left__63893 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(4));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__63893)) && ((cljs.core.count(_AMPERSAND_match_left__63893) === (4))))){
try{var _AMPERSAND_match_left__63893_0__63895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63893,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__63893_0__63895,new cljs.core.Keyword(null,"=","=",1152933628))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63893,(1));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63893,(2));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63893,(3));
var more = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"or","or",235744169),(function (){var iter__5523__auto__ = (function metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_63891_$_iter__63907(s__63908){
return (new cljs.core.LazySeq(null,(function (){
var s__63908__$1 = s__63908;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__63908__$1);
if(temp__5804__auto__){
var s__63908__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63908__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__63908__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__63910 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__63909 = (0);
while(true){
if((i__63909 < size__5522__auto__)){
var x__$1 = cljs.core._nth(c__5521__auto__,i__63909);
cljs.core.chunk_append(b__63910,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,x__$1], null));

var G__64531 = (i__63909 + (1));
i__63909 = G__64531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63910),metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_63891_$_iter__63907(cljs.core.chunk_rest(s__63908__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63910),null);
}
} else {
var x__$1 = cljs.core.first(s__63908__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,x__$1], null),metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_63891_$_iter__63907(cljs.core.rest(s__63908__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),more));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e63901){if((e63901 instanceof Error)){
var e__62528__auto__ = e63901;
if((e__62528__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__63893_0__63895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63893,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__63893_0__63895,new cljs.core.Keyword(null,"!=","!=",-1841737356))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63893,(1));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63893,(2));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63893,(3));
var more = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"and","and",-971899817),(function (){var iter__5523__auto__ = (function metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_63891_$_iter__63903(s__63904){
return (new cljs.core.LazySeq(null,(function (){
var s__63904__$1 = s__63904;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__63904__$1);
if(temp__5804__auto__){
var s__63904__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63904__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__63904__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__63906 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__63905 = (0);
while(true){
if((i__63905 < size__5522__auto__)){
var x__$1 = cljs.core._nth(c__5521__auto__,i__63905);
cljs.core.chunk_append(b__63906,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,x__$1], null));

var G__64533 = (i__63905 + (1));
i__63905 = G__64533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63906),metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_63891_$_iter__63903(cljs.core.chunk_rest(s__63904__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63906),null);
}
} else {
var x__$1 = cljs.core.first(s__63904__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,x__$1], null),metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_63891_$_iter__63903(cljs.core.rest(s__63904__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),more));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e63902){if((e63902 instanceof Error)){
var e__62528__auto____$1 = e63902;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$1;
}
} else {
throw e63902;

}
}} else {
throw e__62528__auto__;
}
} else {
throw e63901;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63900){if((e63900 instanceof Error)){
var e__62528__auto__ = e63900;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63900;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63899){if((e63899 instanceof Error)){
var e__62528__auto__ = e63899;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_equals_and_not_equals_with_extra_args_$_replace_63891,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e63899;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Replace `relative-datetime` clauses like `[:relative-datetime :current]` with `[:relative-datetime 0 <unit>]`.
 *   `<unit>` is inferred from the `:field` the clause is being compared to (if any), otherwise falls back to `default.`
 */
metabase.mbql.util.desugar_current_relative_datetime = (function metabase$mbql$util$desugar_current_relative_datetime(m){
return (function metabase$mbql$util$desugar_current_relative_datetime_$_replace_63911(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (2))))){
try{var _AMPERSAND_match_left__63913 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__63913)) && ((cljs.core.count(_AMPERSAND_match_left__63913) === (2))))){
try{var _AMPERSAND_match_right__63914 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),new cljs.core.Keyword(null,"current","current",-1088038603)], null)))(_AMPERSAND_match_right__63914))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63913,(0));
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63913,(1));
var temporal_unit = (function (){var or__5045__auto__ = cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$mbql$util$desugar_current_relative_datetime_$_replace_63911_$_match_63920(_AMPERSAND_parents__$1,_AMPERSAND_match__$1){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match__$1)) && ((cljs.core.count(_AMPERSAND_match__$1) === 3)))){
try{var _AMPERSAND_match_0__63923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match__$1,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63923,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_2__63925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match__$1,(2));
if((((!((_AMPERSAND_match_2__63925 == null))))?(((((_AMPERSAND_match_2__63925.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === _AMPERSAND_match_2__63925.cljs$core$ILookup$))))?true:(((!_AMPERSAND_match_2__63925.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_2__63925):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_2__63925))){
try{var _AMPERSAND_match_2__63925_temporal_unit__63928 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match_2__63925,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__63925_temporal_unit__63928,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__63925,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [temporal_unit], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63933){if((e63933 instanceof Error)){
var e__62528__auto__ = e63933;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63933;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63931){if((e63931 instanceof Error)){
var e__62528__auto__ = e63931;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63931;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63930){if((e63930 instanceof Error)){
var e__62528__auto__ = e63930;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63930;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63929){if((e63929 instanceof Error)){
var e__62528__auto__ = e63929;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$mbql$util$desugar_current_relative_datetime_$_replace_63911_$_match_63920,_AMPERSAND_parents__$1,_AMPERSAND_match__$1);
} else {
throw e__62528__auto__;
}
} else {
throw e63929;

}
}})(cljs.core.PersistentVector.EMPTY,field))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause,field], null),(function metabase$mbql$util$desugar_current_relative_datetime_$_replace_63911_$_replace_63934(_AMPERSAND_parents__$1,_AMPERSAND_match__$1){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match__$1)) && ((cljs.core.count(_AMPERSAND_match__$1) === 2)))){
try{var _AMPERSAND_match_0__63936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match__$1,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__63936,new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278))){
try{var _AMPERSAND_match_1__63937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match__$1,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__63937,new cljs.core.Keyword(null,"current","current",-1088038603))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),temporal_unit], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63940){if((e63940 instanceof Error)){
var e__62528__auto__ = e63940;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63940;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63939){if((e63939 instanceof Error)){
var e__62528__auto__ = e63939;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63939;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63938){if((e63938 instanceof Error)){
var e__62528__auto__ = e63938;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_current_relative_datetime_$_replace_63911_$_replace_63934,_AMPERSAND_parents__$1,_AMPERSAND_match__$1);
} else {
throw e__62528__auto__;
}
} else {
throw e63938;

}
}})(cljs.core.PersistentVector.EMPTY,args));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63919){if((e63919 instanceof Error)){
var e__62528__auto__ = e63919;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63919;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63918){if((e63918 instanceof Error)){
var e__62528__auto__ = e63918;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63918;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63917){if((e63917 instanceof Error)){
var e__62528__auto__ = e63917;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_current_relative_datetime_$_replace_63911,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e63917;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Mapping from the sugar syntax to extract datetime to the unit.
 */
metabase.mbql.util.temporal_extract_ops__GT_unit = cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-quarter","get-quarter",1327778593),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-year","get-year",-936011274),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),new cljs.core.Keyword(null,"us","us",746429226)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-hour","get-hour",622714059),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-day","get-day",127568857),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-minute","get-minute",1468086343),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-month","get-month",-369374731),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-day-of-week","get-day-of-week",2010140752),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),new cljs.core.Keyword(null,"iso","iso",-1366207543)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-second","get-second",-2065946318),null], null)],[new cljs.core.Keyword(null,"quarter-of-year","quarter-of-year",-472803491),new cljs.core.Keyword(null,"year-of-era","year-of-era",682445876),new cljs.core.Keyword(null,"week-of-year-us","week-of-year-us",849423511),new cljs.core.Keyword(null,"week-of-year-iso","week-of-year-iso",-1827744293),new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099),new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),new cljs.core.Keyword(null,"minute-of-hour","minute-of-hour",1903220478),new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),new cljs.core.Keyword(null,"week-of-year-iso","week-of-year-iso",-1827744293),new cljs.core.Keyword(null,"week-of-year-instance","week-of-year-instance",2047974624),new cljs.core.Keyword(null,"second-of-minute","second-of-minute",222734326)]);
metabase.mbql.util.temporal_extract_ops = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.keys(metabase.mbql.util.temporal_extract_ops__GT_unit)));
/**
 * Replace datetime extractions clauses like `[:get-year field]` with `[:temporal-extract field :year]`.
 */
metabase.mbql.util.desugar_temporal_extract = (function metabase$mbql$util$desugar_temporal_extract(m){
return (function metabase$mbql$util$desugar_temporal_extract_$_replace_63941(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (2))))){
try{var _AMPERSAND_match_left__63943 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__63943)) && ((cljs.core.count(_AMPERSAND_match_left__63943) === (2))))){
try{var _AMPERSAND_match_left__63943_0__63945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63943,(0));
if(cljs.core.truth_((metabase.mbql.util.temporal_extract_ops.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.util.temporal_extract_ops.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_left__63943_0__63945) : metabase.mbql.util.temporal_extract_ops.call(null,_AMPERSAND_match_left__63943_0__63945)))){
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63943,(0));
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63943,(1));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temporal-extract","temporal-extract",1781686405),field,(function (){var G__63950 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,cljs.core.first(args)], null);
return (metabase.mbql.util.temporal_extract_ops__GT_unit.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.util.temporal_extract_ops__GT_unit.cljs$core$IFn$_invoke$arity$1(G__63950) : metabase.mbql.util.temporal_extract_ops__GT_unit.call(null,G__63950));
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63949){if((e63949 instanceof Error)){
var e__62528__auto__ = e63949;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63949;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63948){if((e63948 instanceof Error)){
var e__62528__auto__ = e63948;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63948;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63947){if((e63947 instanceof Error)){
var e__62528__auto__ = e63947;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_temporal_extract_$_replace_63941,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e63947;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
metabase.mbql.util.desugar_divide_with_extra_args = (function metabase$mbql$util$desugar_divide_with_extra_args(expression){
return (function metabase$mbql$util$desugar_divide_with_extra_args_$_replace_63951(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (4))))){
try{var _AMPERSAND_match_left__63953 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(4));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__63953)) && ((cljs.core.count(_AMPERSAND_match_left__63953) === (4))))){
try{var _AMPERSAND_match_left__63953_0__63955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63953,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__63953_0__63955,new cljs.core.Keyword(null,"/","/",1282502798))){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63953,(1));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63953,(2));
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__63953,(3));
var more = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return metabase$mbql$util$desugar_divide_with_extra_args_$_replace_63951(_AMPERSAND_parents,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"/","/",1282502798),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"/","/",1282502798),x,y], null)], null),cljs.core.cons(z,more)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e63961){if((e63961 instanceof Error)){
var e__62528__auto__ = e63961;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63961;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63960){if((e63960 instanceof Error)){
var e__62528__auto__ = e63960;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e63960;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63959){if((e63959 instanceof Error)){
var e__62528__auto__ = e63959;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$desugar_divide_with_extra_args_$_replace_63951,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e63959;

}
}})(cljs.core.PersistentVector.EMPTY,expression);
});
var ufv63963_64542 = schema.utils.use_fn_validation;
var output_schema63962_64543 = metabase.mbql.schema.FieldOrExpressionDef;
var input_schema63964_64544 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.FieldOrExpressionDef,cljs.core.with_meta(new cljs.core.Symbol(null,"expression","expression",1842843403,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null)], null)))], null);
var input_checker63965_64545 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema63964_64544);
}),null));
var output_checker63966_64546 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema63962_64543);
}),null));
var ret__51869__auto___64547 = /**
 * Inputs: [expression :- mbql.s/FieldOrExpressionDef]
 *   Returns: mbql.s/FieldOrExpressionDef
 * 
 *   Rewrite various 'syntactic sugar' expressions like `:/` with more than two args into something simpler for drivers
 *   to compile.
 */
metabase.mbql.util.desugar_expression = (function metabase$mbql$util$desugar_expression(G__63967){
var validate__50237__auto__ = cljs.core.deref(ufv63963_64542);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__63967], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63968_64549 = new cljs.core.Keyword(null,"input","input",556931961);
var G__63969_64550 = cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-expression","desugar-expression",374099700,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntactic sugar' expressions like `:/` with more than two args into something simpler for drivers\n  to compile."], null));
var G__63970_64551 = input_schema63964_64544;
var G__63971_64552 = cljs.core.deref(input_checker63965_64545);
var G__63972_64553 = args__50238__auto___64548;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63968_64549,G__63969_64550,G__63970_64551,G__63971_64552,G__63972_64553) : schema.core.fn_validator.call(null,G__63968_64549,G__63969_64550,G__63970_64551,G__63971_64552,G__63972_64553));
} else {
var temp__5804__auto___64554 = (function (){var fexpr__63973 = cljs.core.deref(input_checker63965_64545);
return (fexpr__63973.cljs$core$IFn$_invoke$arity$1 ? fexpr__63973.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64548) : fexpr__63973.call(null,args__50238__auto___64548));
})();
if(cljs.core.truth_(temp__5804__auto___64554)){
var error__50239__auto___64555 = temp__5804__auto___64554;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-expression","desugar-expression",374099700,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntactic sugar' expressions like `:/` with more than two args into something simpler for drivers\n  to compile."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64555], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema63964_64544,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64548,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64555], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var expression = G__63967;
while(true){
return metabase.mbql.util.desugar_divide_with_extra_args(expression);
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63974_64556 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__63975_64557 = cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-expression","desugar-expression",374099700,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntactic sugar' expressions like `:/` with more than two args into something simpler for drivers\n  to compile."], null));
var G__63976_64558 = output_schema63962_64543;
var G__63977_64559 = cljs.core.deref(output_checker63966_64546);
var G__63978_64560 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63974_64556,G__63975_64557,G__63976_64558,G__63977_64559,G__63978_64560) : schema.core.fn_validator.call(null,G__63974_64556,G__63975_64557,G__63976_64558,G__63977_64559,G__63978_64560));
} else {
var temp__5804__auto___64561 = (function (){var fexpr__63979 = cljs.core.deref(output_checker63966_64546);
return (fexpr__63979.cljs$core$IFn$_invoke$arity$1 ? fexpr__63979.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__63979.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64561)){
var error__50239__auto___64562 = temp__5804__auto___64561;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-expression","desugar-expression",374099700,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntactic sugar' expressions like `:/` with more than two args into something simpler for drivers\n  to compile."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64562], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema63962_64543,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64562], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.desugar_expression),schema.core.__GT_FnSchema(output_schema63962_64543,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema63964_64544], null)));

metabase.mbql.util.maybe_desugar_expression = (function metabase$mbql$util$maybe_desugar_expression(clause){
var G__63980 = clause;
if(cljs.core.truth_(metabase.mbql.predicates.FieldOrExpressionDef_QMARK_(clause))){
return metabase.mbql.util.desugar_expression(G__63980);
} else {
return G__63980;
}
});
var ufv63982_64563 = schema.utils.use_fn_validation;
var output_schema63981_64564 = metabase.mbql.schema.Filter;
var input_schema63983_64565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.Filter,cljs.core.with_meta(new cljs.core.Symbol(null,"filter-clause","filter-clause",-1237814159,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null)], null)))], null);
var input_checker63984_64566 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema63983_64565);
}),null));
var output_checker63985_64567 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema63981_64564);
}),null));
var ret__51869__auto___64568 = /**
 * Inputs: [filter-clause :- mbql.s/Filter]
 *   Returns: mbql.s/Filter
 * 
 *   Rewrite various 'syntatic sugar' filter clauses like `:time-interval` and `:inside` as simpler, logically
 *   equivalent clauses. This can be used to simplify the number of filter clauses that need to be supported by anything
 *   that needs to enumerate all the possible filter types (such as driver query processor implementations, or the
 *   implementation [[negate-filter-clause]] below.)
 */
metabase.mbql.util.desugar_filter_clause = (function metabase$mbql$util$desugar_filter_clause(G__63986){
var validate__50237__auto__ = cljs.core.deref(ufv63982_64563);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__63986], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63987_64571 = new cljs.core.Keyword(null,"input","input",556931961);
var G__63988_64572 = cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-filter-clause","desugar-filter-clause",1980710942,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntatic sugar' filter clauses like `:time-interval` and `:inside` as simpler, logically\n  equivalent clauses. This can be used to simplify the number of filter clauses that need to be supported by anything\n  that needs to enumerate all the possible filter types (such as driver query processor implementations, or the\n  implementation [[negate-filter-clause]] below.)"], null));
var G__63989_64573 = input_schema63983_64565;
var G__63990_64574 = cljs.core.deref(input_checker63984_64566);
var G__63991_64575 = args__50238__auto___64570;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63987_64571,G__63988_64572,G__63989_64573,G__63990_64574,G__63991_64575) : schema.core.fn_validator.call(null,G__63987_64571,G__63988_64572,G__63989_64573,G__63990_64574,G__63991_64575));
} else {
var temp__5804__auto___64576 = (function (){var fexpr__63992 = cljs.core.deref(input_checker63984_64566);
return (fexpr__63992.cljs$core$IFn$_invoke$arity$1 ? fexpr__63992.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64570) : fexpr__63992.call(null,args__50238__auto___64570));
})();
if(cljs.core.truth_(temp__5804__auto___64576)){
var error__50239__auto___64577 = temp__5804__auto___64576;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-filter-clause","desugar-filter-clause",1980710942,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntatic sugar' filter clauses like `:time-interval` and `:inside` as simpler, logically\n  equivalent clauses. This can be used to simplify the number of filter clauses that need to be supported by anything\n  that needs to enumerate all the possible filter types (such as driver query processor implementations, or the\n  implementation [[negate-filter-clause]] below.)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64577], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema63983_64565,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64570,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64577], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var filter_clause = G__63986;
while(true){
return metabase.mbql.util.maybe_desugar_expression(metabase.mbql.util.desugar_temporal_extract(metabase.mbql.util.simplify_compound_filter(metabase.mbql.util.desugar_inside(metabase.mbql.util.desugar_is_empty_and_not_empty(metabase.mbql.util.desugar_is_null_and_not_null(metabase.mbql.util.desugar_time_interval(metabase.mbql.util.desugar_does_not_contain(metabase.mbql.util.desugar_equals_and_not_equals_with_extra_args(metabase.mbql.util.desugar_current_relative_datetime(filter_clause))))))))));
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__63993_64578 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__63994_64579 = cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-filter-clause","desugar-filter-clause",1980710942,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntatic sugar' filter clauses like `:time-interval` and `:inside` as simpler, logically\n  equivalent clauses. This can be used to simplify the number of filter clauses that need to be supported by anything\n  that needs to enumerate all the possible filter types (such as driver query processor implementations, or the\n  implementation [[negate-filter-clause]] below.)"], null));
var G__63995_64580 = output_schema63981_64564;
var G__63996_64581 = cljs.core.deref(output_checker63985_64567);
var G__63997_64582 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__63993_64578,G__63994_64579,G__63995_64580,G__63996_64581,G__63997_64582) : schema.core.fn_validator.call(null,G__63993_64578,G__63994_64579,G__63995_64580,G__63996_64581,G__63997_64582));
} else {
var temp__5804__auto___64583 = (function (){var fexpr__63998 = cljs.core.deref(output_checker63985_64567);
return (fexpr__63998.cljs$core$IFn$_invoke$arity$1 ? fexpr__63998.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__63998.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64583)){
var error__50239__auto___64584 = temp__5804__auto___64583;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"desugar-filter-clause","desugar-filter-clause",1980710942,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rewrite various 'syntatic sugar' filter clauses like `:time-interval` and `:inside` as simpler, logically\n  equivalent clauses. This can be used to simplify the number of filter clauses that need to be supported by anything\n  that needs to enumerate all the possible filter types (such as driver query processor implementations, or the\n  implementation [[negate-filter-clause]] below.)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64584], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema63981_64564,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64584], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.desugar_filter_clause),schema.core.__GT_FnSchema(output_schema63981_64564,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema63983_64565], null)));

if((typeof metabase !== 'undefined') && (typeof metabase.mbql !== 'undefined') && (typeof metabase.mbql.util !== 'undefined') && (typeof metabase.mbql.util.negate_STAR_ !== 'undefined')){
} else {
metabase.mbql.util.negate_STAR_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__63999 = cljs.core.get_global_hierarchy;
return (fexpr__63999.cljs$core$IFn$_invoke$arity$0 ? fexpr__63999.cljs$core$IFn$_invoke$arity$0() : fexpr__63999.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.mbql.util","negate*"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not","not",-595976884),(function (p__64000){
var vec__64001 = p__64000;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64001,(0),null);
var subclause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64001,(1),null);
return subclause;
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (p__64004){
var vec__64005 = p__64004;
var seq__64006 = cljs.core.seq(vec__64005);
var first__64007 = cljs.core.first(seq__64006);
var seq__64006__$1 = cljs.core.next(seq__64006);
var _ = first__64007;
var subclauses = seq__64006__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.negate_STAR_,subclauses));
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (p__64008){
var vec__64009 = p__64008;
var seq__64010 = cljs.core.seq(vec__64009);
var first__64011 = cljs.core.first(seq__64010);
var seq__64010__$1 = cljs.core.next(seq__64010);
var _ = first__64011;
var subclauses = seq__64010__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.negate_STAR_,subclauses));
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=","=",1152933628),(function (p__64012){
var vec__64013 = p__64012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64013,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64013,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64013,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"!=","!=",-1841737356),(function (p__64016){
var vec__64017 = p__64016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64017,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64017,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64017,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">",">",-555517146),(function (p__64020){
var vec__64021 = p__64020;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64021,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64021,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64021,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<=","<=",-395636158),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<","<",-646864291),(function (p__64024){
var vec__64025 = p__64024;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64025,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64025,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64025,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">=",">=",-623615505),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">=",">=",-623615505),(function (p__64028){
var vec__64029 = p__64028;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64029,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64029,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64029,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<","<",-646864291),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<=","<=",-395636158),(function (p__64032){
var vec__64033 = p__64032;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64033,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64033,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64033,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),field,value], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"between","between",1131099276),(function (p__64036){
var vec__64037 = p__64036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64037,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64037,(1),null);
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64037,(2),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64037,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<","<",-646864291),field,min], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),field,max], null)], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"contains","contains",676899812),(function (clause){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),clause], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"starts-with","starts-with",366503009),(function (clause){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),clause], null);
}));
metabase.mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),(function (clause){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),clause], null);
}));
var ufv64041_64586 = schema.utils.use_fn_validation;
var output_schema64040_64587 = metabase.mbql.schema.Filter;
var input_schema64042_64588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.Filter,cljs.core.with_meta(new cljs.core.Symbol(null,"filter-clause","filter-clause",-1237814159,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null)], null)))], null);
var input_checker64043_64589 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64042_64588);
}),null));
var output_checker64044_64590 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64040_64587);
}),null));
var ret__51869__auto___64591 = /**
 * Inputs: [filter-clause :- mbql.s/Filter]
 *   Returns: mbql.s/Filter
 * 
 *   Return the logical compliment of an MBQL filter clause, generally without using `:not` (except for the string
 *   filter clause types). Useful for generating highly optimized filter clauses and for drivers that do not support
 *   top-level `:not` filter clauses.
 */
metabase.mbql.util.negate_filter_clause = (function metabase$mbql$util$negate_filter_clause(G__64045){
var validate__50237__auto__ = cljs.core.deref(ufv64041_64586);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64045], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64046_64593 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64047_64594 = cljs.core.with_meta(new cljs.core.Symbol(null,"negate-filter-clause","negate-filter-clause",1540259292,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the logical compliment of an MBQL filter clause, generally without using `:not` (except for the string\n  filter clause types). Useful for generating highly optimized filter clauses and for drivers that do not support\n  top-level `:not` filter clauses."], null));
var G__64048_64595 = input_schema64042_64588;
var G__64049_64596 = cljs.core.deref(input_checker64043_64589);
var G__64050_64597 = args__50238__auto___64592;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64046_64593,G__64047_64594,G__64048_64595,G__64049_64596,G__64050_64597) : schema.core.fn_validator.call(null,G__64046_64593,G__64047_64594,G__64048_64595,G__64049_64596,G__64050_64597));
} else {
var temp__5804__auto___64598 = (function (){var fexpr__64051 = cljs.core.deref(input_checker64043_64589);
return (fexpr__64051.cljs$core$IFn$_invoke$arity$1 ? fexpr__64051.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64592) : fexpr__64051.call(null,args__50238__auto___64592));
})();
if(cljs.core.truth_(temp__5804__auto___64598)){
var error__50239__auto___64599 = temp__5804__auto___64598;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"negate-filter-clause","negate-filter-clause",1540259292,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the logical compliment of an MBQL filter clause, generally without using `:not` (except for the string\n  filter clause types). Useful for generating highly optimized filter clauses and for drivers that do not support\n  top-level `:not` filter clauses."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64599], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64042_64588,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64592,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64599], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var filter_clause = G__64045;
while(true){
return metabase.mbql.util.simplify_compound_filter(metabase.mbql.util.negate_STAR_.cljs$core$IFn$_invoke$arity$1(metabase.mbql.util.desugar_filter_clause(filter_clause)));
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64052_64601 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64053_64602 = cljs.core.with_meta(new cljs.core.Symbol(null,"negate-filter-clause","negate-filter-clause",1540259292,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the logical compliment of an MBQL filter clause, generally without using `:not` (except for the string\n  filter clause types). Useful for generating highly optimized filter clauses and for drivers that do not support\n  top-level `:not` filter clauses."], null));
var G__64054_64603 = output_schema64040_64587;
var G__64055_64604 = cljs.core.deref(output_checker64044_64590);
var G__64056_64605 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64052_64601,G__64053_64602,G__64054_64603,G__64055_64604,G__64056_64605) : schema.core.fn_validator.call(null,G__64052_64601,G__64053_64602,G__64054_64603,G__64055_64604,G__64056_64605));
} else {
var temp__5804__auto___64606 = (function (){var fexpr__64057 = cljs.core.deref(output_checker64044_64590);
return (fexpr__64057.cljs$core$IFn$_invoke$arity$1 ? fexpr__64057.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64057.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64606)){
var error__50239__auto___64607 = temp__5804__auto___64606;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"negate-filter-clause","negate-filter-clause",1540259292,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Filter","mbql.s/Filter",650308569,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the logical compliment of an MBQL filter clause, generally without using `:not` (except for the string\n  filter clause types). Useful for generating highly optimized filter clauses and for drivers that do not support\n  top-level `:not` filter clauses."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64607], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64040_64587,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64607], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.negate_filter_clause),schema.core.__GT_FnSchema(output_schema64040_64587,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64042_64588], null)));

var ufv64059_64608 = schema.utils.use_fn_validation;
var output_schema64058_64609 = schema.core.maybe(metabase.mbql.schema.helpers.IntGreaterThanZero);
var input_schema64060_64610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker64061_64611 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64060_64610);
}),null));
var output_checker64062_64612 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64058_64609);
}),null));
var ret__51869__auto___64613 = /**
 * Inputs: [{{source-table-id :source-table, source-query :source-query} :query, query-type :type, :as query}]
 *   Returns: (s/maybe schema.helpers/IntGreaterThanZero)
 * 
 *   Return the source Table ID associated with `query`, if applicable; handles nested queries as well. If `query` is
 *   `nil`, returns `nil`.
 * 
 *   Throws an Exception when it encounters a unresolved source query (i.e., the `:source-table "card__id"`
 *   form), because it cannot return an accurate result for a query that has not yet been preprocessed.
 */
metabase.mbql.util.query__GT_source_table_id = (function metabase$mbql$util$query__GT_source_table_id(G__64063){
var validate__50237__auto__ = cljs.core.deref(ufv64059_64608);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64614 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64063], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64064_64615 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64065_64616 = cljs.core.with_meta(new cljs.core.Symbol(null,"query->source-table-id","query->source-table-id",246142827,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"outer-query","outer-query",-395069361,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the source Table ID associated with `query`, if applicable; handles nested queries as well. If `query` is\n  `nil`, returns `nil`.\n\n  Throws an Exception when it encounters a unresolved source query (i.e., the `:source-table \"card__id\"`\n  form), because it cannot return an accurate result for a query that has not yet been preprocessed."], null));
var G__64066_64617 = input_schema64060_64610;
var G__64067_64618 = cljs.core.deref(input_checker64061_64611);
var G__64068_64619 = args__50238__auto___64614;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64064_64615,G__64065_64616,G__64066_64617,G__64067_64618,G__64068_64619) : schema.core.fn_validator.call(null,G__64064_64615,G__64065_64616,G__64066_64617,G__64067_64618,G__64068_64619));
} else {
var temp__5804__auto___64620 = (function (){var fexpr__64069 = cljs.core.deref(input_checker64061_64611);
return (fexpr__64069.cljs$core$IFn$_invoke$arity$1 ? fexpr__64069.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64614) : fexpr__64069.call(null,args__50238__auto___64614));
})();
if(cljs.core.truth_(temp__5804__auto___64620)){
var error__50239__auto___64621 = temp__5804__auto___64620;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"query->source-table-id","query->source-table-id",246142827,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"outer-query","outer-query",-395069361,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the source Table ID associated with `query`, if applicable; handles nested queries as well. If `query` is\n  `nil`, returns `nil`.\n\n  Throws an Exception when it encounters a unresolved source query (i.e., the `:source-table \"card__id\"`\n  form), because it cannot return an accurate result for a query that has not yet been preprocessed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64621], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64060_64610,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64614,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64621], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var G__64072 = G__64063;
var map__64073 = G__64072;
var map__64073__$1 = cljs.core.__destructure_map(map__64073);
var query = map__64073__$1;
var map__64074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64073__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__64074__$1 = cljs.core.__destructure_map(map__64074);
var source_table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64074__$1,new cljs.core.Keyword(null,"source-table","source-table",-225307692));
var source_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64074__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var query_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64073__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__64072__$1 = G__64072;
while(true){
var map__64075 = G__64072__$1;
var map__64075__$1 = cljs.core.__destructure_map(map__64075);
var query__$1 = map__64075__$1;
var map__64076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64075__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__64076__$1 = cljs.core.__destructure_map(map__64076);
var source_table_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64076__$1,new cljs.core.Keyword(null,"source-table","source-table",-225307692));
var source_query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64076__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var query_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64075__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_type__$1,new cljs.core.Keyword(null,"query","query",-1288509510))){
return null;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = (source_table_id__$1 == null);
if(and__5043__auto__){
var and__5043__auto____$1 = source_query__$1;
if(cljs.core.truth_(and__5043__auto____$1)){
return new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(source_query__$1);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = (source_table_id__$1 == null);
if(and__5043__auto__){
return source_query__$1;
} else {
return and__5043__auto__;
}
})())){
var G__64622 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query__$1,new cljs.core.Keyword(null,"query","query",-1288509510),source_query__$1);
G__64072__$1 = G__64622;
continue;
} else {
if(cljs.core.truth_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,metabase.mbql.schema.source_table_card_id_regex))(source_table_id__$1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n("Error: query''s source query has not been resolved. You probably need to `preprocess` the query first."),cljs.core.PersistentArrayMap.EMPTY);
} else {
return source_table_id__$1;

}
}
}
}
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64077_64624 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64078_64625 = cljs.core.with_meta(new cljs.core.Symbol(null,"query->source-table-id","query->source-table-id",246142827,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"outer-query","outer-query",-395069361,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the source Table ID associated with `query`, if applicable; handles nested queries as well. If `query` is\n  `nil`, returns `nil`.\n\n  Throws an Exception when it encounters a unresolved source query (i.e., the `:source-table \"card__id\"`\n  form), because it cannot return an accurate result for a query that has not yet been preprocessed."], null));
var G__64079_64626 = output_schema64058_64609;
var G__64080_64627 = cljs.core.deref(output_checker64062_64612);
var G__64081_64628 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64077_64624,G__64078_64625,G__64079_64626,G__64080_64627,G__64081_64628) : schema.core.fn_validator.call(null,G__64077_64624,G__64078_64625,G__64079_64626,G__64080_64627,G__64081_64628));
} else {
var temp__5804__auto___64630 = (function (){var fexpr__64082 = cljs.core.deref(output_checker64062_64612);
return (fexpr__64082.cljs$core$IFn$_invoke$arity$1 ? fexpr__64082.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64082.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64630)){
var error__50239__auto___64632 = temp__5804__auto___64630;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"query->source-table-id","query->source-table-id",246142827,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"outer-query","outer-query",-395069361,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the source Table ID associated with `query`, if applicable; handles nested queries as well. If `query` is\n  `nil`, returns `nil`.\n\n  Throws an Exception when it encounters a unresolved source query (i.e., the `:source-table \"card__id\"`\n  form), because it cannot return an accurate result for a query that has not yet been preprocessed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64632], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64058_64609,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64632], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.query__GT_source_table_id),schema.core.__GT_FnSchema(output_schema64058_64609,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64060_64610], null)));

var ufv64084_64633 = schema.utils.use_fn_validation;
var output_schema64083_64634 = schema.core.maybe(metabase.mbql.schema.helpers.IntGreaterThanZero);
var input_schema64085_64635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"join","join",881669637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker64086_64636 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64085_64635);
}),null));
var output_checker64087_64637 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64083_64634);
}),null));
var ret__51869__auto___64638 = /**
 * Inputs: [join]
 *   Returns: (s/maybe schema.helpers/IntGreaterThanZero)
 * 
 *   Like `query->source-table-id`, but for a join.
 */
metabase.mbql.util.join__GT_source_table_id = (function metabase$mbql$util$join__GT_source_table_id(G__64088){
var validate__50237__auto__ = cljs.core.deref(ufv64084_64633);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64088], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64089_64640 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64090_64641 = cljs.core.with_meta(new cljs.core.Symbol(null,"join->source-table-id","join->source-table-id",1032348273,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `query->source-table-id`, but for a join."], null));
var G__64091_64642 = input_schema64085_64635;
var G__64092_64643 = cljs.core.deref(input_checker64086_64636);
var G__64093_64644 = args__50238__auto___64639;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64089_64640,G__64090_64641,G__64091_64642,G__64092_64643,G__64093_64644) : schema.core.fn_validator.call(null,G__64089_64640,G__64090_64641,G__64091_64642,G__64092_64643,G__64093_64644));
} else {
var temp__5804__auto___64645 = (function (){var fexpr__64094 = cljs.core.deref(input_checker64086_64636);
return (fexpr__64094.cljs$core$IFn$_invoke$arity$1 ? fexpr__64094.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64639) : fexpr__64094.call(null,args__50238__auto___64639));
})();
if(cljs.core.truth_(temp__5804__auto___64645)){
var error__50239__auto___64646 = temp__5804__auto___64645;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"join->source-table-id","join->source-table-id",1032348273,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `query->source-table-id`, but for a join."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64646], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64085_64635,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64639,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64646], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var join = G__64088;
while(true){
return metabase.mbql.util.query__GT_source_table_id(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),join], null));
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64095_64647 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64096_64648 = cljs.core.with_meta(new cljs.core.Symbol(null,"join->source-table-id","join->source-table-id",1032348273,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `query->source-table-id`, but for a join."], null));
var G__64097_64649 = output_schema64083_64634;
var G__64098_64650 = cljs.core.deref(output_checker64087_64637);
var G__64099_64651 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64095_64647,G__64096_64648,G__64097_64649,G__64098_64650,G__64099_64651) : schema.core.fn_validator.call(null,G__64095_64647,G__64096_64648,G__64097_64649,G__64098_64650,G__64099_64651));
} else {
var temp__5804__auto___64652 = (function (){var fexpr__64100 = cljs.core.deref(output_checker64087_64637);
return (fexpr__64100.cljs$core$IFn$_invoke$arity$1 ? fexpr__64100.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64100.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64652)){
var error__50239__auto___64653 = temp__5804__auto___64652;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"join->source-table-id","join->source-table-id",1032348273,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("schema.helpers","IntGreaterThanZero","schema.helpers/IntGreaterThanZero",-728908174,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `query->source-table-id`, but for a join."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64653], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64083_64634,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64653], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.join__GT_source_table_id),schema.core.__GT_FnSchema(output_schema64083_64634,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64085_64635], null)));

var ufv64102_64654 = schema.utils.use_fn_validation;
var output_schema64101_64655 = metabase.mbql.schema.MBQLQuery;
var input_schema64103_64656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.MBQLQuery,cljs.core.with_meta(new cljs.core.Symbol(null,"inner-query","inner-query",-907556093,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null)], null))),schema.core.one(metabase.mbql.schema.OrderBy,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker64104_64657 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64103_64656);
}),null));
var output_checker64105_64658 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64101_64655);
}),null));
var ret__51869__auto___64659 = /**
 * Inputs: [inner-query :- mbql.s/MBQLQuery [_ [_ id-or-name :as _field] :as order-by-clause] :- mbql.s/OrderBy]
 *   Returns: mbql.s/MBQLQuery
 * 
 *   Add a new `:order-by` clause to an MBQL `inner-query`. If the new order-by clause references a Field that is
 *   already being used in another order-by clause, this function does nothing.
 */
metabase.mbql.util.add_order_by_clause = (function metabase$mbql$util$add_order_by_clause(G__64106,G__64107){
var validate__50237__auto__ = cljs.core.deref(ufv64102_64654);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64106,G__64107], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64108_64661 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64109_64662 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-order-by-clause","add-order-by-clause",240938699,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a new `:order-by` clause to an MBQL `inner-query`. If the new order-by clause references a Field that is\n  already being used in another order-by clause, this function does nothing."], null));
var G__64110_64663 = input_schema64103_64656;
var G__64111_64664 = cljs.core.deref(input_checker64104_64657);
var G__64112_64665 = args__50238__auto___64660;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64108_64661,G__64109_64662,G__64110_64663,G__64111_64664,G__64112_64665) : schema.core.fn_validator.call(null,G__64108_64661,G__64109_64662,G__64110_64663,G__64111_64664,G__64112_64665));
} else {
var temp__5804__auto___64666 = (function (){var fexpr__64113 = cljs.core.deref(input_checker64104_64657);
return (fexpr__64113.cljs$core$IFn$_invoke$arity$1 ? fexpr__64113.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64660) : fexpr__64113.call(null,args__50238__auto___64660));
})();
if(cljs.core.truth_(temp__5804__auto___64666)){
var error__50239__auto___64668 = temp__5804__auto___64666;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-order-by-clause","add-order-by-clause",240938699,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a new `:order-by` clause to an MBQL `inner-query`. If the new order-by clause references a Field that is\n  already being used in another order-by clause, this function does nothing."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64668], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64103_64656,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64660,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64668], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var inner_query = G__64106;
var G__64120 = G__64107;
var vec__64121 = G__64120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64121,(0),null);
var vec__64124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64121,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64124,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64124,(1),null);
var _field = vec__64124;
var order_by_clause = vec__64121;
var inner_query__$1 = inner_query;
var G__64120__$1 = G__64120;
while(true){
var inner_query__$2 = inner_query__$1;
var vec__64127 = G__64120__$1;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64127,(0),null);
var vec__64130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64127,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64130,(0),null);
var id_or_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64130,(1),null);
var _field__$1 = vec__64130;
var order_by_clause__$1 = vec__64127;
var existing_fields = cljs.core.set((function (){var iter__5523__auto__ = ((function (inner_query__$2,vec__64127,___$2,vec__64130,___$3,id_or_name__$1,_field__$1,order_by_clause__$1,inner_query,G__64120,vec__64121,_,vec__64124,___$1,id_or_name,_field,order_by_clause,validate__50237__auto__,ufv64102_64654,output_schema64101_64655,input_schema64103_64656,input_checker64104_64657,output_checker64105_64658){
return (function metabase$mbql$util$add_order_by_clause_$_iter__64133(s__64134){
return (new cljs.core.LazySeq(null,(function (){
var s__64134__$1 = s__64134;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__64134__$1);
if(temp__5804__auto__){
var s__64134__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64134__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__64134__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__64136 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__64135 = (0);
while(true){
if((i__64135 < size__5522__auto__)){
var vec__64137 = cljs.core._nth(c__5521__auto__,i__64135);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64137,(0),null);
var vec__64140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64137,(1),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64140,(0),null);
var id_or_name__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64140,(1),null);
cljs.core.chunk_append(b__64136,id_or_name__$2);

var G__64672 = (i__64135 + (1));
i__64135 = G__64672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64136),metabase$mbql$util$add_order_by_clause_$_iter__64133(cljs.core.chunk_rest(s__64134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64136),null);
}
} else {
var vec__64143 = cljs.core.first(s__64134__$2);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64143,(0),null);
var vec__64146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64143,(1),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64146,(0),null);
var id_or_name__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64146,(1),null);
return cljs.core.cons(id_or_name__$2,metabase$mbql$util$add_order_by_clause_$_iter__64133(cljs.core.rest(s__64134__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(inner_query__$2,vec__64127,___$2,vec__64130,___$3,id_or_name__$1,_field__$1,order_by_clause__$1,inner_query,G__64120,vec__64121,_,vec__64124,___$1,id_or_name,_field,order_by_clause,validate__50237__auto__,ufv64102_64654,output_schema64101_64655,input_schema64103_64656,input_checker64104_64657,output_checker64105_64658))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(inner_query__$2));
})());
if(cljs.core.truth_((existing_fields.cljs$core$IFn$_invoke$arity$1 ? existing_fields.cljs$core$IFn$_invoke$arity$1(id_or_name__$1) : existing_fields.call(null,id_or_name__$1)))){
return inner_query__$2;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(inner_query__$2,new cljs.core.Keyword(null,"order-by","order-by",1527318070),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.vec,cljs.core.distinct,cljs.core.conj),order_by_clause__$1);
}
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64149_64674 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64150_64675 = cljs.core.with_meta(new cljs.core.Symbol(null,"add-order-by-clause","add-order-by-clause",240938699,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a new `:order-by` clause to an MBQL `inner-query`. If the new order-by clause references a Field that is\n  already being used in another order-by clause, this function does nothing."], null));
var G__64151_64676 = output_schema64101_64655;
var G__64152_64677 = cljs.core.deref(output_checker64105_64658);
var G__64153_64678 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64149_64674,G__64150_64675,G__64151_64676,G__64152_64677,G__64153_64678) : schema.core.fn_validator.call(null,G__64149_64674,G__64150_64675,G__64151_64676,G__64152_64677,G__64153_64678));
} else {
var temp__5804__auto___64679 = (function (){var fexpr__64154 = cljs.core.deref(output_checker64105_64658);
return (fexpr__64154.cljs$core$IFn$_invoke$arity$1 ? fexpr__64154.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64154.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64679)){
var error__50239__auto___64680 = temp__5804__auto___64679;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"add-order-by-clause","add-order-by-clause",240938699,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","MBQLQuery","mbql.s/MBQLQuery",-332777720,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add a new `:order-by` clause to an MBQL `inner-query`. If the new order-by clause references a Field that is\n  already being used in another order-by clause, this function does nothing."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64680], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64101_64655,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64680], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.add_order_by_clause),schema.core.__GT_FnSchema(output_schema64101_64655,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64103_64656], null)));

/**
 * Dispatch function perfect for use with multimethods that dispatch off elements of an MBQL query. If `x` is an MBQL
 *   clause, dispatches off the clause name; otherwise dispatches off `x`'s class.
 */
metabase.mbql.util.dispatch_by_clause_name_or_class = (function metabase$mbql$util$dispatch_by_clause_name_or_class(var_args){
var G__64156 = arguments.length;
switch (G__64156) {
case 1:
return metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(metabase.mbql.util.mbql_clause_QMARK_(x)){
return cljs.core.first(x);
} else {
return cljs.core.type(x);
}
}));

(metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$2 = (function (x,_){
return metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$1(x);
}));

(metabase.mbql.util.dispatch_by_clause_name_or_class.cljs$lang$maxFixedArity = 2);

var ufv64158_64683 = schema.utils.use_fn_validation;
var output_schema64157_64684 = metabase.mbql.schema.FieldOrExpressionDef;
var input_schema64159_64685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"inner-query","inner-query",-907556093,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.core.Keyword,metabase.mbql.schema.helpers.NonBlankString], 0)),cljs.core.with_meta(new cljs.core.Symbol(null,"expression-name","expression-name",-157919182,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","cond-pre","s/cond-pre",-923707600,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("schema.helpers","NonBlankString","schema.helpers/NonBlankString",1984244415,null))], null)))], null);
var input_checker64160_64686 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64159_64685);
}),null));
var output_checker64161_64687 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64157_64684);
}),null));
var ret__51869__auto___64688 = /**
 * Inputs: [inner-query expression-name :- (s/cond-pre s/Keyword schema.helpers/NonBlankString)]
 *   Returns: mbql.s/FieldOrExpressionDef
 * 
 *   Return the `Expression` referenced by a given `expression-name`.
 */
metabase.mbql.util.expression_with_name = (function metabase$mbql$util$expression_with_name(G__64162,G__64163){
var validate__50237__auto__ = cljs.core.deref(ufv64158_64683);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64162,G__64163], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64164_64691 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64165_64692 = cljs.core.with_meta(new cljs.core.Symbol(null,"expression-with-name","expression-with-name",-417674245,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the `Expression` referenced by a given `expression-name`."], null));
var G__64166_64693 = input_schema64159_64685;
var G__64167_64694 = cljs.core.deref(input_checker64160_64686);
var G__64168_64695 = args__50238__auto___64690;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64164_64691,G__64165_64692,G__64166_64693,G__64167_64694,G__64168_64695) : schema.core.fn_validator.call(null,G__64164_64691,G__64165_64692,G__64166_64693,G__64167_64694,G__64168_64695));
} else {
var temp__5804__auto___64696 = (function (){var fexpr__64169 = cljs.core.deref(input_checker64160_64686);
return (fexpr__64169.cljs$core$IFn$_invoke$arity$1 ? fexpr__64169.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64690) : fexpr__64169.call(null,args__50238__auto___64690));
})();
if(cljs.core.truth_(temp__5804__auto___64696)){
var error__50239__auto___64697 = temp__5804__auto___64696;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"expression-with-name","expression-with-name",-417674245,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the `Expression` referenced by a given `expression-name`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64697], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64159_64685,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64690,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64697], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var inner_query = G__64162;
var expression_name = G__64163;
while(true){
var allowed_names = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.qualified_name(expression_name),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(expression_name)], null);
var G__64171 = inner_query;
var map__64172 = G__64171;
var map__64172__$1 = cljs.core.__destructure_map(map__64172);
var expressions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64172__$1,new cljs.core.Keyword(null,"expressions","expressions",255689909));
var source_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64172__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var found = cljs.core.PersistentHashSet.EMPTY;
var G__64171__$1 = G__64171;
var found__$1 = found;
while(true){
var map__64174 = G__64171__$1;
var map__64174__$1 = cljs.core.__destructure_map(map__64174);
var expressions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64174__$1,new cljs.core.Keyword(null,"expressions","expressions",255689909));
var source_query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64174__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var found__$2 = found__$1;
var or__5045__auto__ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,expressions__$1),allowed_names);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var found__$3 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(found__$2,cljs.core.keys(expressions__$1));
if(cljs.core.truth_(source_query__$1)){
var G__64698 = source_query__$1;
var G__64699 = found__$3;
G__64171__$1 = G__64698;
found__$1 = G__64699;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No expression named ''{0}''",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.mbql.util.qualified_name(expression_name)], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid-query","invalid-query",-1009703371),new cljs.core.Keyword(null,"expression-name","expression-name",-1798450709),expression_name,new cljs.core.Keyword(null,"tried","tried",-1728444308),allowed_names,new cljs.core.Keyword(null,"found","found",-584700170),found__$3], null));
}
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64175_64701 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64176_64702 = cljs.core.with_meta(new cljs.core.Symbol(null,"expression-with-name","expression-with-name",-417674245,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the `Expression` referenced by a given `expression-name`."], null));
var G__64177_64703 = output_schema64157_64684;
var G__64178_64704 = cljs.core.deref(output_checker64161_64687);
var G__64179_64705 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64175_64701,G__64176_64702,G__64177_64703,G__64178_64704,G__64179_64705) : schema.core.fn_validator.call(null,G__64175_64701,G__64176_64702,G__64177_64703,G__64178_64704,G__64179_64705));
} else {
var temp__5804__auto___64706 = (function (){var fexpr__64180 = cljs.core.deref(output_checker64161_64687);
return (fexpr__64180.cljs$core$IFn$_invoke$arity$1 ? fexpr__64180.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64180.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64706)){
var error__50239__auto___64707 = temp__5804__auto___64706;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"expression-with-name","expression-with-name",-417674245,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrExpressionDef","mbql.s/FieldOrExpressionDef",-1851966074,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return the `Expression` referenced by a given `expression-name`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64707], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64157_64684,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64707], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.expression_with_name),schema.core.__GT_FnSchema(output_schema64157_64684,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64159_64685], null)));

var ufv64182_64710 = schema.utils.use_fn_validation;
var output_schema64181_64711 = metabase.mbql.schema.Aggregation;
var input_schema64183_64712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema64188_64713 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.Query,cljs.core.with_meta(new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Query","mbql.s/Query",1061827921,null)], null))),schema.core.one(metabase.mbql.schema.helpers.IntGreaterThanOrEqualToZero,cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.helpers","IntGreaterThanOrEqualToZero","schema.helpers/IntGreaterThanOrEqualToZero",-1218348852,null)], null))),schema.core.one(metabase.mbql.schema.helpers.IntGreaterThanOrEqualToZero,cljs.core.with_meta(new cljs.core.Symbol(null,"nesting-level","nesting-level",-2057556677,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.helpers","IntGreaterThanOrEqualToZero","schema.helpers/IntGreaterThanOrEqualToZero",-1218348852,null)], null)))], null);
var input_checker64184_64714 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64183_64712);
}),null));
var output_checker64185_64715 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64181_64711);
}),null));
var input_checker64189_64716 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64188_64713);
}),null));
var output_checker64190_64717 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64181_64711);
}),null));
var ret__51869__auto___64719 = (function (){
/**
 * Inputs: ([query index] [query :- mbql.s/Query index :- schema.helpers/IntGreaterThanOrEqualToZero nesting-level :- schema.helpers/IntGreaterThanOrEqualToZero])
 *   Returns: mbql.s/Aggregation
 * 
 *   Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).
 * This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To
 * support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this
 * number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting.
 */
metabase.mbql.util.aggregation_at_index = (function metabase$mbql$util$aggregation_at_index(var_args){
var G__64195 = arguments.length;
switch (G__64195) {
case 2:
return metabase.mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$2 = (function (G__64186,G__64187){
var validate__50237__auto__ = cljs.core.deref(ufv64182_64710);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64186,G__64187], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64196_64722 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64197_64723 = cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null));
var G__64198_64724 = input_schema64183_64712;
var G__64199_64725 = cljs.core.deref(input_checker64184_64714);
var G__64200_64726 = args__50238__auto___64721;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64196_64722,G__64197_64723,G__64198_64724,G__64199_64725,G__64200_64726) : schema.core.fn_validator.call(null,G__64196_64722,G__64197_64723,G__64198_64724,G__64199_64725,G__64200_64726));
} else {
var temp__5804__auto___64727 = (function (){var fexpr__64201 = cljs.core.deref(input_checker64184_64714);
return (fexpr__64201.cljs$core$IFn$_invoke$arity$1 ? fexpr__64201.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64721) : fexpr__64201.call(null,args__50238__auto___64721));
})();
if(cljs.core.truth_(temp__5804__auto___64727)){
var error__50239__auto___64728 = temp__5804__auto___64727;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64728], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64183_64712,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64721,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64728], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var query = G__64186;
var index = G__64187;
while(true){
return metabase.mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$3(query,index,(0));
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64202_64729 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64203_64730 = cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null));
var G__64204_64731 = output_schema64181_64711;
var G__64205_64732 = cljs.core.deref(output_checker64185_64715);
var G__64206_64733 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64202_64729,G__64203_64730,G__64204_64731,G__64205_64732,G__64206_64733) : schema.core.fn_validator.call(null,G__64202_64729,G__64203_64730,G__64204_64731,G__64205_64732,G__64206_64733));
} else {
var temp__5804__auto___64734 = (function (){var fexpr__64207 = cljs.core.deref(output_checker64185_64715);
return (fexpr__64207.cljs$core$IFn$_invoke$arity$1 ? fexpr__64207.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64207.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64734)){
var error__50239__auto___64735 = temp__5804__auto___64734;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64735], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64181_64711,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64735], null));
} else {
}
}
} else {
}

return o__50240__auto__;
}));

(metabase.mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$3 = (function (G__64191,G__64192,G__64193){
var validate__50237__auto__ = cljs.core.deref(ufv64182_64710);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64736 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64191,G__64192,G__64193], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64208_64737 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64209_64738 = cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null));
var G__64210_64739 = input_schema64188_64713;
var G__64211_64740 = cljs.core.deref(input_checker64189_64716);
var G__64212_64741 = args__50238__auto___64736;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64208_64737,G__64209_64738,G__64210_64739,G__64211_64740,G__64212_64741) : schema.core.fn_validator.call(null,G__64208_64737,G__64209_64738,G__64210_64739,G__64211_64740,G__64212_64741));
} else {
var temp__5804__auto___64742 = (function (){var fexpr__64213 = cljs.core.deref(input_checker64189_64716);
return (fexpr__64213.cljs$core$IFn$_invoke$arity$1 ? fexpr__64213.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64736) : fexpr__64213.call(null,args__50238__auto___64736));
})();
if(cljs.core.truth_(temp__5804__auto___64742)){
var error__50239__auto___64743 = temp__5804__auto___64742;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64743], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64188_64713,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64736,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64743], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var query = G__64191;
var index = G__64192;
var nesting_level = G__64193;
while(true){
if((nesting_level === (0))){
var or__5045__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696)], null)),index);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No aggregation at index: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null));
}
} else {
var G__64744 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"source-query","source-query",198004422)], null))], null);
var G__64745 = index;
var G__64746 = (nesting_level - (1));
query = G__64744;
index = G__64745;
nesting_level = G__64746;
continue;
}
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64214_64747 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64215_64748 = cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null));
var G__64216_64749 = output_schema64181_64711;
var G__64217_64750 = cljs.core.deref(output_checker64190_64717);
var G__64218_64751 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64214_64747,G__64215_64748,G__64216_64749,G__64217_64750,G__64218_64751) : schema.core.fn_validator.call(null,G__64214_64747,G__64215_64748,G__64216_64749,G__64217_64750,G__64218_64751));
} else {
var temp__5804__auto___64752 = (function (){var fexpr__64219 = cljs.core.deref(output_checker64190_64717);
return (fexpr__64219.cljs$core$IFn$_invoke$arity$1 ? fexpr__64219.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64219.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64752)){
var error__50239__auto___64753 = temp__5804__auto___64752;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation-at-index","aggregation-at-index",1145258383,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).\n   This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To\n   support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this\n   number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64753], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64181_64711,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64753], null));
} else {
}
}
} else {
}

return o__50240__auto__;
}));

(metabase.mbql.util.aggregation_at_index.cljs$lang$maxFixedArity = 3);

return null;
})()
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.aggregation_at_index),schema.core.make_fn_schema(output_schema64181_64711,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64183_64712,input_schema64188_64713], null)));

/**
 * Is this ID (presumably of a Metric or Segment) a GA one?
 */
metabase.mbql.util.ga_id_QMARK_ = (function metabase$mbql$util$ga_id_QMARK_(id){
return cljs.core.boolean$((cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.keyword_QMARK_)(id))?cljs.core.re_find(/^ga(id)?:/,cljs.core.name(id)):null));
});
/**
 * Is this metric or segment clause not a Dashboard Metric or Segment, but rather a GA one? E.g. something like `[:metric
 *   ga:users]`. We want to ignore those because they're not the same thing at all as MB Metrics/Segments and don't
 *   correspond to objects in our application DB.
 */
metabase.mbql.util.ga_metric_or_segment_QMARK_ = (function metabase$mbql$util$ga_metric_or_segment_QMARK_(p__64220){
var vec__64221 = p__64220;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64221,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64221,(1),null);
return metabase.mbql.util.ga_id_QMARK_(id);
});
/**
 * Return a function that can be used to uniquify string names. Function maintains an internal counter that will suffix
 *   any names passed to it as needed so all results will be unique.
 * 
 *  (let [unique-name (unique-name-generator)]
 *    [(unique-name "A")
 *     (unique-name "B")
 *     (unique-name "A")])
 *  ;; -> ["A" "B" "A_2"]
 * 
 *   By default, unique aliases are generated for each unique `[id original-name]` key pair. By default, a unique `id` is
 *   generated for every call, meaning repeated calls to [[unique-name-generator]] with the same `original-name` will
 *   return different unique aliases. If idempotence is desired, the function returned by the generator also has a 2
 *   airity version with the signature
 * 
 *  (unique-name-fn id original-name)
 * 
 *   for example:
 * 
 *  (let [unique-name (unique-name-generator)]
 *    [(unique-name :x "A")
 *     (unique-name :x "B")
 *     (unique-name :x "A")
 *     (unique-name :y "A")])
 *  ;; -> ["A" "B" "A" "A_2"]
 * 
 *   Finally, [[unique-name-generator]] accepts the following options to further customize behavior:
 * 
 *   ### `:name-key-fn`
 * 
 *   Generated aliases are unique by the value of `[id (name-key-fn original-name)]`; the default is `identity`, so by
 *   default aliases are unique by `[id name-key-fn]`. Specify something custom here if you want to make the unique
 *   aliases unique by some other value, for example to make them unique without regards to case:
 * 
 *  (let [f (unique-name-generator :name-key-fn str/lower-case)]
 *    [(f "x")
 *     (f "X")
 *     (f "X")])
 *  ;; -> ["x" "X_2" "X_3"]
 * 
 *   This is useful for databases that treat column aliases as case-insensitive (see #19618 for some examples of this).
 * 
 *   ### `:unique-alias-fn`
 * 
 *   The function used to generate a potentially-unique alias given an original alias and unique suffix with the signature
 * 
 *  (unique-alias-fn original suffix)
 * 
 *   By default, combines them like `original_suffix`, but you can supply a custom function if you need to change this
 *   behavior:
 * 
 *  (let [f (unique-name-generator :unique-alias-fn (fn [x y] (format "%s~~%s" y x)))]
 *    [(f "x")
 *     (f "x")])
 *   ;; -> ["x" "2~~x"]
 * 
 *   This is useful if you need to constrain the generated suffix in some way, for example by limiting its length or
 *   escaping characters disallowed in a column alias.
 * 
 *   Values generated by this function are recursively checked for uniqueness, and will keep trying values a unique value
 *   is generated; for this reason the function *must* return a unique value for every unique input. Use caution when
 *   limiting the length of the identifier generated (consider appending a hash in cases like these).
 */
metabase.mbql.util.unique_name_generator = (function metabase$mbql$util$unique_name_generator(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64755 = arguments.length;
var i__5770__auto___64756 = (0);
while(true){
if((i__5770__auto___64756 < len__5769__auto___64755)){
args__5775__auto__.push((arguments[i__5770__auto___64756]));

var G__64757 = (i__5770__auto___64756 + (1));
i__5770__auto___64756 = G__64757;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return metabase.mbql.util.unique_name_generator.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(metabase.mbql.util.unique_name_generator.cljs$core$IFn$_invoke$arity$variadic = (function (p__64225){
var map__64226 = p__64225;
var map__64226__$1 = cljs.core.__destructure_map(map__64226);
var name_key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64226__$1,new cljs.core.Keyword(null,"name-key-fn","name-key-fn",-1634839199),cljs.core.identity);
var unique_alias_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64226__$1,new cljs.core.Keyword(null,"unique-alias-fn","unique-alias-fn",32555420),(function (original,suffix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(original),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}));
var id_PLUS_original__GT_unique = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var original__GT_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function() {
var metabase$mbql$util$generate_name = null;
var metabase$mbql$util$generate_name__1 = (function (alias){
return metabase$mbql$util$generate_name.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),alias);
});
var metabase$mbql$util$generate_name__2 = (function (id,original){
while(true){
var name_key = (name_key_fn.cljs$core$IFn$_invoke$arity$1 ? name_key_fn.cljs$core$IFn$_invoke$arity$1(original) : name_key_fn.call(null,original));
var or__5045__auto__ = (function (){var G__64228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,name_key], null);
var fexpr__64227 = cljs.core.deref(id_PLUS_original__GT_unique);
return (fexpr__64227.cljs$core$IFn$_invoke$arity$1 ? fexpr__64227.cljs$core$IFn$_invoke$arity$1(G__64228) : fexpr__64227.call(null,G__64228));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var total_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(original__GT_count,cljs.core.update,name_key,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),name_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_count,(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(id_PLUS_original__GT_unique,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,name_key], null),original);

return original;
} else {
var candidate = (function (){var G__64229 = original;
var G__64230 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_count);
return (unique_alias_fn.cljs$core$IFn$_invoke$arity$2 ? unique_alias_fn.cljs$core$IFn$_invoke$arity$2(G__64229,G__64230) : unique_alias_fn.call(null,G__64229,G__64230));
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(candidate,original)){
} else {
throw (new Error(["Assert failed: ",["unique-alias-fn must return a different string than its input. Input: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([candidate], 0))].join(''),"\n","(not= candidate original)"].join('')));
}

var G__64758 = id;
var G__64759 = candidate;
id = G__64758;
original = G__64759;
continue;
}
}
break;
}
});
metabase$mbql$util$generate_name = function(id,original){
switch(arguments.length){
case 1:
return metabase$mbql$util$generate_name__1.call(this,id);
case 2:
return metabase$mbql$util$generate_name__2.call(this,id,original);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$mbql$util$generate_name.cljs$core$IFn$_invoke$arity$1 = metabase$mbql$util$generate_name__1;
metabase$mbql$util$generate_name.cljs$core$IFn$_invoke$arity$2 = metabase$mbql$util$generate_name__2;
return metabase$mbql$util$generate_name;
})()
}));

(metabase.mbql.util.unique_name_generator.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metabase.mbql.util.unique_name_generator.cljs$lang$applyTo = (function (seq64224){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64224));
}));

var ufv64232_64760 = schema.utils.use_fn_validation;
var output_schema64231_64761 = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null),cljs.core.distinct_QMARK_,"sequence of unique strings");
var input_schema64233_64762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null),cljs.core.with_meta(new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)], null)))], null);
var input_checker64234_64763 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64233_64762);
}),null));
var output_checker64235_64764 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64231_64761);
}),null));
var ret__51869__auto___64765 = /**
 * Inputs: [names :- [s/Str]]
 *   Returns: (s/constrained [s/Str] distinct? "sequence of unique strings")
 * 
 *   Make the names in a sequence of string names unique by adding suffixes such as `_2`.
 * 
 *   (uniquify-names ["count" "sum" "count" "count_2"])
 *   ;; -> ["count" "sum" "count_2" "count_2_2"]
 */
metabase.mbql.util.uniquify_names = (function metabase$mbql$util$uniquify_names(G__64236){
var validate__50237__auto__ = cljs.core.deref(ufv64232_64760);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64236], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64237_64767 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64238_64768 = cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-names","uniquify-names",1444516604,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","constrained","s/constrained",-2057147677,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),"sequence of unique strings"),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names in a sequence of string names unique by adding suffixes such as `_2`.\n\n     (uniquify-names [\"count\" \"sum\" \"count\" \"count_2\"])\n     ;; -> [\"count\" \"sum\" \"count_2\" \"count_2_2\"]"], null));
var G__64239_64769 = input_schema64233_64762;
var G__64240_64770 = cljs.core.deref(input_checker64234_64763);
var G__64241_64771 = args__50238__auto___64766;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64237_64767,G__64238_64768,G__64239_64769,G__64240_64770,G__64241_64771) : schema.core.fn_validator.call(null,G__64237_64767,G__64238_64768,G__64239_64769,G__64240_64770,G__64241_64771));
} else {
var temp__5804__auto___64772 = (function (){var fexpr__64242 = cljs.core.deref(input_checker64234_64763);
return (fexpr__64242.cljs$core$IFn$_invoke$arity$1 ? fexpr__64242.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64766) : fexpr__64242.call(null,args__50238__auto___64766));
})();
if(cljs.core.truth_(temp__5804__auto___64772)){
var error__50239__auto___64773 = temp__5804__auto___64772;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-names","uniquify-names",1444516604,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","constrained","s/constrained",-2057147677,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),"sequence of unique strings"),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names in a sequence of string names unique by adding suffixes such as `_2`.\n\n     (uniquify-names [\"count\" \"sum\" \"count\" \"count_2\"])\n     ;; -> [\"count\" \"sum\" \"count_2\" \"count_2_2\"]"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64773], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64233_64762,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64766,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64773], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var names = G__64236;
while(true){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.unique_name_generator(),names);
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64243_64774 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64244_64775 = cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-names","uniquify-names",1444516604,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","constrained","s/constrained",-2057147677,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),"sequence of unique strings"),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names in a sequence of string names unique by adding suffixes such as `_2`.\n\n     (uniquify-names [\"count\" \"sum\" \"count\" \"count_2\"])\n     ;; -> [\"count\" \"sum\" \"count_2\" \"count_2_2\"]"], null));
var G__64245_64776 = output_schema64231_64761;
var G__64246_64777 = cljs.core.deref(output_checker64235_64764);
var G__64247_64778 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64243_64774,G__64244_64775,G__64245_64776,G__64246_64777,G__64247_64778) : schema.core.fn_validator.call(null,G__64243_64774,G__64244_64775,G__64245_64776,G__64246_64777,G__64247_64778));
} else {
var temp__5804__auto___64779 = (function (){var fexpr__64248 = cljs.core.deref(output_checker64235_64764);
return (fexpr__64248.cljs$core$IFn$_invoke$arity$1 ? fexpr__64248.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64248.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64779)){
var error__50239__auto___64780 = temp__5804__auto___64779;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-names","uniquify-names",1444516604,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","constrained","s/constrained",-2057147677,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),"sequence of unique strings"),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names in a sequence of string names unique by adding suffixes such as `_2`.\n\n     (uniquify-names [\"count\" \"sum\" \"count\" \"count_2\"])\n     ;; -> [\"count\" \"sum\" \"count_2\" \"count_2_2\"]"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64780], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64231_64761,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64780], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.uniquify_names),schema.core.__GT_FnSchema(output_schema64231_64761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64233_64762], null)));

metabase.mbql.util.NamedAggregation = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(metabase.mbql.schema.aggregation_options,(function (p1__64249_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__64249_SHARP_,(2)));
}),"`:aggregation-options` with a `:name`");
metabase.mbql.util.UniquelyNamedAggregations = schema.core.constrained.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.NamedAggregation], null),(function (clauses){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,(function (){var iter__5523__auto__ = (function metabase$mbql$util$iter__64250(s__64251){
return (new cljs.core.LazySeq(null,(function (){
var s__64251__$1 = s__64251;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__64251__$1);
if(temp__5804__auto__){
var s__64251__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64251__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__64251__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__64253 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__64252 = (0);
while(true){
if((i__64252 < size__5522__auto__)){
var vec__64254 = cljs.core._nth(c__5521__auto__,i__64252);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64254,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64254,(1),null);
var map__64257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64254,(2),null);
var map__64257__$1 = cljs.core.__destructure_map(map__64257);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64257__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__64253,ag_name);

var G__64783 = (i__64252 + (1));
i__64252 = G__64783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64253),metabase$mbql$util$iter__64250(cljs.core.chunk_rest(s__64251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64253),null);
}
} else {
var vec__64258 = cljs.core.first(s__64251__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64258,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64258,(1),null);
var map__64261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64258,(2),null);
var map__64261__$1 = cljs.core.__destructure_map(map__64261);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64261__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(ag_name,metabase$mbql$util$iter__64250(cljs.core.rest(s__64251__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(clauses);
})());
}),"sequence of named aggregations with unique names");
var ufv64263_64784 = schema.utils.use_fn_validation;
var output_schema64262_64785 = metabase.mbql.util.UniquelyNamedAggregations;
var input_schema64264_64786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.NamedAggregation], null),cljs.core.with_meta(new cljs.core.Symbol(null,"named-aggregations","named-aggregations",-771029585,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NamedAggregation","NamedAggregation",1856050571,null)], null)], null)))], null);
var input_checker64265_64787 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64264_64786);
}),null));
var output_checker64266_64788 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64262_64785);
}),null));
var ret__51869__auto___64792 = /**
 * Inputs: [named-aggregations :- [NamedAggregation]]
 *   Returns: UniquelyNamedAggregations
 * 
 *   Make the names of a sequence of named aggregations unique by adding suffixes such as `_2`.
 */
metabase.mbql.util.uniquify_named_aggregations = (function metabase$mbql$util$uniquify_named_aggregations(G__64267){
var validate__50237__auto__ = cljs.core.deref(ufv64263_64784);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64793 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64267], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64268_64794 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64269_64795 = cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-named-aggregations","uniquify-named-aggregations",1690441863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names of a sequence of named aggregations unique by adding suffixes such as `_2`."], null));
var G__64270_64796 = input_schema64264_64786;
var G__64271_64797 = cljs.core.deref(input_checker64265_64787);
var G__64272_64798 = args__50238__auto___64793;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64268_64794,G__64269_64795,G__64270_64796,G__64271_64797,G__64272_64798) : schema.core.fn_validator.call(null,G__64268_64794,G__64269_64795,G__64270_64796,G__64271_64797,G__64272_64798));
} else {
var temp__5804__auto___64799 = (function (){var fexpr__64273 = cljs.core.deref(input_checker64265_64787);
return (fexpr__64273.cljs$core$IFn$_invoke$arity$1 ? fexpr__64273.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64793) : fexpr__64273.call(null,args__50238__auto___64793));
})();
if(cljs.core.truth_(temp__5804__auto___64799)){
var error__50239__auto___64800 = temp__5804__auto___64799;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-named-aggregations","uniquify-named-aggregations",1690441863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names of a sequence of named aggregations unique by adding suffixes such as `_2`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64800], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64264_64786,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64793,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64800], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var named_aggregations = G__64267;
while(true){
var unique_names = metabase.mbql.util.uniquify_names((function (){var iter__5523__auto__ = ((function (validate__50237__auto__,ufv64263_64784,output_schema64262_64785,input_schema64264_64786,input_checker64265_64787,output_checker64266_64788){
return (function metabase$mbql$util$uniquify_named_aggregations_$_iter__64274(s__64275){
return (new cljs.core.LazySeq(null,(function (){
var s__64275__$1 = s__64275;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__64275__$1);
if(temp__5804__auto__){
var s__64275__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64275__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__64275__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__64277 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__64276 = (0);
while(true){
if((i__64276 < size__5522__auto__)){
var vec__64278 = cljs.core._nth(c__5521__auto__,i__64276);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64278,(0),null);
var _wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64278,(1),null);
var map__64281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64278,(2),null);
var map__64281__$1 = cljs.core.__destructure_map(map__64281);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64281__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__64277,ag_name);

var G__64806 = (i__64276 + (1));
i__64276 = G__64806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64277),metabase$mbql$util$uniquify_named_aggregations_$_iter__64274(cljs.core.chunk_rest(s__64275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64277),null);
}
} else {
var vec__64282 = cljs.core.first(s__64275__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64282,(0),null);
var _wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64282,(1),null);
var map__64285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64282,(2),null);
var map__64285__$1 = cljs.core.__destructure_map(map__64285);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64285__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(ag_name,metabase$mbql$util$uniquify_named_aggregations_$_iter__64274(cljs.core.rest(s__64275__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(validate__50237__auto__,ufv64263_64784,output_schema64262_64785,input_schema64264_64786,input_checker64265_64787,output_checker64266_64788))
;
return iter__5523__auto__(named_aggregations);
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (unique_names,validate__50237__auto__,ufv64263_64784,output_schema64262_64785,input_schema64264_64786,input_checker64265_64787,output_checker64266_64788){
return (function (p__64286,unique_name){
var vec__64287 = p__64286;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64287,(0),null);
var wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64287,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64287,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),wrapped_ag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"name","name",1843675177),unique_name)], null);
});})(unique_names,validate__50237__auto__,ufv64263_64784,output_schema64262_64785,input_schema64264_64786,input_checker64265_64787,output_checker64266_64788))
,named_aggregations,unique_names);
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64290_64807 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64291_64808 = cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-named-aggregations","uniquify-named-aggregations",1690441863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names of a sequence of named aggregations unique by adding suffixes such as `_2`."], null));
var G__64292_64810 = output_schema64262_64785;
var G__64293_64811 = cljs.core.deref(output_checker64266_64788);
var G__64294_64812 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64290_64807,G__64291_64808,G__64292_64810,G__64293_64811,G__64294_64812) : schema.core.fn_validator.call(null,G__64290_64807,G__64291_64808,G__64292_64810,G__64293_64811,G__64294_64812));
} else {
var temp__5804__auto___64813 = (function (){var fexpr__64295 = cljs.core.deref(output_checker64266_64788);
return (fexpr__64295.cljs$core$IFn$_invoke$arity$1 ? fexpr__64295.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64295.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64813)){
var error__50239__auto___64814 = temp__5804__auto___64813;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"uniquify-named-aggregations","uniquify-named-aggregations",1690441863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Make the names of a sequence of named aggregations unique by adding suffixes such as `_2`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64814], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64262_64785,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64814], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.uniquify_named_aggregations),schema.core.__GT_FnSchema(output_schema64262_64785,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64264_64786], null)));

var ufv64297_64816 = schema.utils.use_fn_validation;
var output_schema64296_64817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.util.NamedAggregation], null);
var input_schema64298_64818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.fn_QMARK_),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation->name-fn","aggregation->name-fn",596978962,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null))], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.schema.Aggregation], null),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregations","aggregations",559417189,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null)], null)], null)))], null);
var input_checker64299_64819 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64298_64818);
}),null));
var output_checker64300_64820 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64296_64817);
}),null));
var ret__51869__auto___64821 = /**
 * Inputs: [aggregation->name-fn :- (s/pred fn?) aggregations :- [mbql.s/Aggregation]]
 *   Returns: [NamedAggregation]
 * 
 *   Wrap every aggregation clause in an `:aggregation-options` clause, using the name returned
 *   by `(aggregation->name-fn ag-clause)` as names for any clauses that do not already have a `:name` in
 *   `:aggregation-options`.
 * 
 *  (pre-alias-aggregations annotate/aggregation-name
 *   [[:count] [:count] [:aggregation-options [:sum [:field 1 nil] {:name "Sum-41"}]])
 *  ;; -> [[:aggregation-options [:count] {:name "count"}]
 *         [:aggregation-options [:count] {:name "count"}]
 *         [:aggregation-options [:sum [:field 1 nil]] {:name "Sum-41"}]]
 * 
 *   Most often, `aggregation->name-fn` will be something like `annotate/aggregation-name`, but for purposes of keeping
 *   the `metabase.mbql` module seperate from the `metabase.query-processor` code we'll let you pass that in yourself.
 */
metabase.mbql.util.pre_alias_aggregations = (function metabase$mbql$util$pre_alias_aggregations(G__64301,G__64302){
var validate__50237__auto__ = cljs.core.deref(ufv64297_64816);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64301,G__64302], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64303_64823 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64304_64824 = cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-aggregations","pre-alias-aggregations",-480645200,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NamedAggregation","NamedAggregation",1856050571,null)], null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in an `:aggregation-options` clause, using the name returned\n  by `(aggregation->name-fn ag-clause)` as names for any clauses that do not already have a `:name` in\n  `:aggregation-options`.\n\n    (pre-alias-aggregations annotate/aggregation-name\n     [[:count] [:count] [:aggregation-options [:sum [:field 1 nil] {:name \"Sum-41\"}]])\n    ;; -> [[:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:sum [:field 1 nil]] {:name \"Sum-41\"}]]\n\n  Most often, `aggregation->name-fn` will be something like `annotate/aggregation-name`, but for purposes of keeping\n  the `metabase.mbql` module seperate from the `metabase.query-processor` code we'll let you pass that in yourself."], null));
var G__64305_64825 = input_schema64298_64818;
var G__64306_64826 = cljs.core.deref(input_checker64299_64819);
var G__64307_64827 = args__50238__auto___64822;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64303_64823,G__64304_64824,G__64305_64825,G__64306_64826,G__64307_64827) : schema.core.fn_validator.call(null,G__64303_64823,G__64304_64824,G__64305_64825,G__64306_64826,G__64307_64827));
} else {
var temp__5804__auto___64829 = (function (){var fexpr__64308 = cljs.core.deref(input_checker64299_64819);
return (fexpr__64308.cljs$core$IFn$_invoke$arity$1 ? fexpr__64308.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64822) : fexpr__64308.call(null,args__50238__auto___64822));
})();
if(cljs.core.truth_(temp__5804__auto___64829)){
var error__50239__auto___64830 = temp__5804__auto___64829;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-aggregations","pre-alias-aggregations",-480645200,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NamedAggregation","NamedAggregation",1856050571,null)], null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in an `:aggregation-options` clause, using the name returned\n  by `(aggregation->name-fn ag-clause)` as names for any clauses that do not already have a `:name` in\n  `:aggregation-options`.\n\n    (pre-alias-aggregations annotate/aggregation-name\n     [[:count] [:count] [:aggregation-options [:sum [:field 1 nil] {:name \"Sum-41\"}]])\n    ;; -> [[:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:sum [:field 1 nil]] {:name \"Sum-41\"}]]\n\n  Most often, `aggregation->name-fn` will be something like `annotate/aggregation-name`, but for purposes of keeping\n  the `metabase.mbql` module seperate from the `metabase.query-processor` code we'll let you pass that in yourself."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64830], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64298_64818,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64822,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64830], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var aggregation__GT_name_fn = G__64301;
var aggregations = G__64302;
while(true){
return ((function (validate__50237__auto__,ufv64297_64816,output_schema64296_64817,input_schema64298_64818,input_checker64299_64819,output_checker64300_64820){
return (function metabase$mbql$util$pre_alias_aggregations_$_replace_64309(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__64315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__64315,new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550))){
try{var _AMPERSAND_match_2__64317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__64317))){
return _AMPERSAND_match;
} else {
throw cljs.core.match.backtrack;

}
}catch (e64326){if((e64326 instanceof Error)){
var e__62528__auto__ = e64326;
if((e__62528__auto__ === cljs.core.match.backtrack)){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),wrapped_ag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"name","name",1843675177),(aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1 ? aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1(wrapped_ag) : aggregation__GT_name_fn.call(null,wrapped_ag)))], null);
} else {
throw e__62528__auto__;
}
} else {
throw e64326;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64325){if((e64325 instanceof Error)){
var e__62528__auto__ = e64325;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e64325;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64321){if((e64321 instanceof Error)){
var e__62528__auto__ = e64321;
if((e__62528__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__64318 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__64318)) && ((cljs.core.count(_AMPERSAND_match_left__64318) === (1))))){
try{var _AMPERSAND_match_left__64318_0__64320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__64318,(0));
if((_AMPERSAND_match_left__64318_0__64320 instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),_AMPERSAND_match,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1 ? aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : aggregation__GT_name_fn.call(null,_AMPERSAND_match))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64324){if((e64324 instanceof Error)){
var e__62528__auto____$1 = e64324;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$1;
}
} else {
throw e64324;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64323){if((e64323 instanceof Error)){
var e__62528__auto____$1 = e64323;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto____$1;
}
} else {
throw e64323;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64322){if((e64322 instanceof Error)){
var e__62528__auto____$1 = e64322;
if((e__62528__auto____$1 === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.replace_in_collection(metabase$mbql$util$pre_alias_aggregations_$_replace_64309,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto____$1;
}
} else {
throw e64322;

}
}} else {
throw e__62528__auto__;
}
} else {
throw e64321;

}
}});})(validate__50237__auto__,ufv64297_64816,output_schema64296_64817,input_schema64298_64818,input_checker64299_64819,output_checker64300_64820))
(cljs.core.PersistentVector.EMPTY,aggregations);
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64327_64832 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64328_64833 = cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-aggregations","pre-alias-aggregations",-480645200,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NamedAggregation","NamedAggregation",1856050571,null)], null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in an `:aggregation-options` clause, using the name returned\n  by `(aggregation->name-fn ag-clause)` as names for any clauses that do not already have a `:name` in\n  `:aggregation-options`.\n\n    (pre-alias-aggregations annotate/aggregation-name\n     [[:count] [:count] [:aggregation-options [:sum [:field 1 nil] {:name \"Sum-41\"}]])\n    ;; -> [[:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:sum [:field 1 nil]] {:name \"Sum-41\"}]]\n\n  Most often, `aggregation->name-fn` will be something like `annotate/aggregation-name`, but for purposes of keeping\n  the `metabase.mbql` module seperate from the `metabase.query-processor` code we'll let you pass that in yourself."], null));
var G__64329_64834 = output_schema64296_64817;
var G__64330_64835 = cljs.core.deref(output_checker64300_64820);
var G__64331_64836 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64327_64832,G__64328_64833,G__64329_64834,G__64330_64835,G__64331_64836) : schema.core.fn_validator.call(null,G__64327_64832,G__64328_64833,G__64329_64834,G__64330_64835,G__64331_64836));
} else {
var temp__5804__auto___64837 = (function (){var fexpr__64332 = cljs.core.deref(output_checker64300_64820);
return (fexpr__64332.cljs$core$IFn$_invoke$arity$1 ? fexpr__64332.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64332.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64837)){
var error__50239__auto___64838 = temp__5804__auto___64837;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-aggregations","pre-alias-aggregations",-480645200,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NamedAggregation","NamedAggregation",1856050571,null)], null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in an `:aggregation-options` clause, using the name returned\n  by `(aggregation->name-fn ag-clause)` as names for any clauses that do not already have a `:name` in\n  `:aggregation-options`.\n\n    (pre-alias-aggregations annotate/aggregation-name\n     [[:count] [:count] [:aggregation-options [:sum [:field 1 nil] {:name \"Sum-41\"}]])\n    ;; -> [[:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:count] {:name \"count\"}]\n           [:aggregation-options [:sum [:field 1 nil]] {:name \"Sum-41\"}]]\n\n  Most often, `aggregation->name-fn` will be something like `annotate/aggregation-name`, but for purposes of keeping\n  the `metabase.mbql` module seperate from the `metabase.query-processor` code we'll let you pass that in yourself."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64838], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64296_64817,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64838], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.pre_alias_aggregations),schema.core.__GT_FnSchema(output_schema64296_64817,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64298_64818], null)));

var ufv64334_64840 = schema.utils.use_fn_validation;
var output_schema64333_64841 = metabase.mbql.util.UniquelyNamedAggregations;
var input_schema64335_64842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.fn_QMARK_),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregation->name-fn","aggregation->name-fn",596978962,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null))], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.mbql.schema.Aggregation], null),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregations","aggregations",559417189,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("mbql.s","Aggregation","mbql.s/Aggregation",124504849,null)], null)], null)))], null);
var input_checker64336_64843 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64335_64842);
}),null));
var output_checker64337_64844 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64333_64841);
}),null));
var ret__51869__auto___64845 = /**
 * Inputs: [aggregation->name-fn :- (s/pred fn?) aggregations :- [mbql.s/Aggregation]]
 *   Returns: UniquelyNamedAggregations
 * 
 *   Wrap every aggregation clause in a `:named` clause with a unique name. Combines `pre-alias-aggregations` with
 *   `uniquify-named-aggregations`.
 */
metabase.mbql.util.pre_alias_and_uniquify_aggregations = (function metabase$mbql$util$pre_alias_and_uniquify_aggregations(G__64338,G__64339){
var validate__50237__auto__ = cljs.core.deref(ufv64334_64840);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64338,G__64339], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64340_64847 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64341_64848 = cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-and-uniquify-aggregations","pre-alias-and-uniquify-aggregations",-1180929281,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in a `:named` clause with a unique name. Combines `pre-alias-aggregations` with\n  `uniquify-named-aggregations`."], null));
var G__64342_64849 = input_schema64335_64842;
var G__64343_64850 = cljs.core.deref(input_checker64336_64843);
var G__64344_64851 = args__50238__auto___64846;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64340_64847,G__64341_64848,G__64342_64849,G__64343_64850,G__64344_64851) : schema.core.fn_validator.call(null,G__64340_64847,G__64341_64848,G__64342_64849,G__64343_64850,G__64344_64851));
} else {
var temp__5804__auto___64853 = (function (){var fexpr__64345 = cljs.core.deref(input_checker64336_64843);
return (fexpr__64345.cljs$core$IFn$_invoke$arity$1 ? fexpr__64345.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64846) : fexpr__64345.call(null,args__50238__auto___64846));
})();
if(cljs.core.truth_(temp__5804__auto___64853)){
var error__50239__auto___64854 = temp__5804__auto___64853;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-and-uniquify-aggregations","pre-alias-and-uniquify-aggregations",-1180929281,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in a `:named` clause with a unique name. Combines `pre-alias-aggregations` with\n  `uniquify-named-aggregations`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64854], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64335_64842,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64846,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64854], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var aggregation__GT_name_fn = G__64338;
var aggregations = G__64339;
while(true){
return metabase.mbql.util.uniquify_named_aggregations(metabase.mbql.util.pre_alias_aggregations(aggregation__GT_name_fn,aggregations));
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64346_64855 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64347_64856 = cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-and-uniquify-aggregations","pre-alias-and-uniquify-aggregations",-1180929281,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in a `:named` clause with a unique name. Combines `pre-alias-aggregations` with\n  `uniquify-named-aggregations`."], null));
var G__64348_64857 = output_schema64333_64841;
var G__64349_64858 = cljs.core.deref(output_checker64337_64844);
var G__64350_64859 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64346_64855,G__64347_64856,G__64348_64857,G__64349_64858,G__64350_64859) : schema.core.fn_validator.call(null,G__64346_64855,G__64347_64856,G__64348_64857,G__64349_64858,G__64350_64859));
} else {
var temp__5804__auto___64860 = (function (){var fexpr__64351 = cljs.core.deref(output_checker64337_64844);
return (fexpr__64351.cljs$core$IFn$_invoke$arity$1 ? fexpr__64351.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64351.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64860)){
var error__50239__auto___64861 = temp__5804__auto___64860;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"pre-alias-and-uniquify-aggregations","pre-alias-and-uniquify-aggregations",-1180929281,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"UniquelyNamedAggregations","UniquelyNamedAggregations",119403282,null),new cljs.core.Keyword("style","indent","style/indent",-39468490),(1),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrap every aggregation clause in a `:named` clause with a unique name. Combines `pre-alias-aggregations` with\n  `uniquify-named-aggregations`."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64861], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64333_64841,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64861], null));
} else {
}
}
} else {
}

return o__50240__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.pre_alias_and_uniquify_aggregations),schema.core.__GT_FnSchema(output_schema64333_64841,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64335_64842], null)));

/**
 * Calculate the absolute maximum number of results that should be returned by this query (MBQL or native), useful for
 *   doing the equivalent of
 * 
 *  java.sql.Statement statement = ...;
 *  statement.setMaxRows(<max-rows-limit>).
 * 
 *   to ensure the DB cursor or equivalent doesn't fetch more rows than will be consumed.
 * 
 *   This is calculated as follows:
 * 
 *   *  If query is `MBQL` and has a `:limit` or `:page` clause, returns appropriate number
 *   *  If query has `:constraints` with `:max-results-bare-rows` or `:max-results`, returns the appropriate number
 *   *  `:max-results-bare-rows` is returned if set and Query does not have any aggregations
 *   *  `:max-results` is returned otherwise
 *   *  If none of the above are set, returns `nil`. In this case, you should use something like the Dashboard QP's
 *   `max-rows-limit`
 */
metabase.mbql.util.query__GT_max_rows_limit = (function metabase$mbql$util$query__GT_max_rows_limit(p__64352){
var map__64353 = p__64352;
var map__64353__$1 = cljs.core.__destructure_map(map__64353);
var map__64354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64353__$1,new cljs.core.Keyword(null,"constraints","constraints",422775616));
var map__64354__$1 = cljs.core.__destructure_map(map__64354);
var max_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64354__$1,new cljs.core.Keyword(null,"max-results","max-results",-32858165));
var max_results_bare_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64354__$1,new cljs.core.Keyword(null,"max-results-bare-rows","max-results-bare-rows",2096475889));
var map__64355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64353__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__64355__$1 = cljs.core.__destructure_map(map__64355);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64355__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var aggregations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64355__$1,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696));
var map__64356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64355__$1,new cljs.core.Keyword(null,"page","page",849072397));
var map__64356__$1 = cljs.core.__destructure_map(map__64356);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64356__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var query_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64353__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var safe_min = (function() { 
var G__64863__delegate = function (args){
var temp__5804__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,args));
if(temp__5804__auto__){
var args__$1 = temp__5804__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,args__$1);
} else {
return null;
}
};
var G__64863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64864__i = 0, G__64864__a = new Array(arguments.length -  0);
while (G__64864__i < G__64864__a.length) {G__64864__a[G__64864__i] = arguments[G__64864__i + 0]; ++G__64864__i;}
  args = new cljs.core.IndexedSeq(G__64864__a,0,null);
} 
return G__64863__delegate.call(this,args);};
G__64863.cljs$lang$maxFixedArity = 0;
G__64863.cljs$lang$applyTo = (function (arglist__64865){
var args = cljs.core.seq(arglist__64865);
return G__64863__delegate(args);
});
G__64863.cljs$core$IFn$_invoke$arity$variadic = G__64863__delegate;
return G__64863;
})()
;
var mbql_limit = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query_type,new cljs.core.Keyword(null,"query","query",-1288509510)))?safe_min(items,limit):null);
var constraints_limit = (function (){var or__5045__auto__ = (cljs.core.truth_(aggregations)?null:max_results_bare_rows);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return max_results;
}
})();
return safe_min(mbql_limit,constraints_limit);
});
metabase.mbql.util.remove_empty = (function metabase$mbql$util$remove_empty(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$mbql$util$remove_empty_$_iter__64357(s__64358){
return (new cljs.core.LazySeq(null,(function (){
var s__64358__$1 = s__64358;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__64358__$1);
if(temp__5804__auto__){
var s__64358__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64358__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__64358__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__64360 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__64359 = (0);
while(true){
if((i__64359 < size__5522__auto__)){
var vec__64361 = cljs.core._nth(c__5521__auto__,i__64359);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64361,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64361,(1),null);
var v__$1 = (metabase.mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1(v) : metabase.mbql.util.remove_empty.call(null,v));
if((!((v__$1 == null)))){
cljs.core.chunk_append(b__64360,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null));

var G__64866 = (i__64359 + (1));
i__64359 = G__64866;
continue;
} else {
var G__64867 = (i__64359 + (1));
i__64359 = G__64867;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64360),metabase$mbql$util$remove_empty_$_iter__64357(cljs.core.chunk_rest(s__64358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64360),null);
}
} else {
var vec__64364 = cljs.core.first(s__64358__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64364,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64364,(1),null);
var v__$1 = (metabase.mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1 ? metabase.mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1(v) : metabase.mbql.util.remove_empty.call(null,v));
if((!((v__$1 == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null),metabase$mbql$util$remove_empty_$_iter__64357(cljs.core.rest(s__64358__$2)));
} else {
var G__64869 = cljs.core.rest(s__64358__$2);
s__64358__$1 = G__64869;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(x);
})()));
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.mbql.util.remove_empty,x))));
} else {
return x;

}
}
});
var ufv64368_64870 = schema.utils.use_fn_validation;
var output_schema64367_64871 = metabase.mbql.schema.FieldOrAggregationReference;
var input_schema64369_64872 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(metabase.mbql.schema.FieldOrAggregationReference,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker64370_64873 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema64369_64872);
}),null));
var output_checker64371_64874 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema64367_64871);
}),null));
var ret__51869__auto___64875 = (function (){
/**
 * Inputs: [[clause-type id-or-name opts] :- mbql.s/FieldOrAggregationReference f & args]
 *   Returns: mbql.s/FieldOrAggregationReference
 * 
 *   Like [[clojure.core/update]], but for the options in a `:field`, `:expression`, or `:aggregation` clause.
 */
metabase.mbql.util.update_field_options = (function metabase$mbql$util$update_field_options(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64876 = arguments.length;
var i__5770__auto___64877 = (0);
while(true){
if((i__5770__auto___64877 < len__5769__auto___64876)){
args__5775__auto__.push((arguments[i__5770__auto___64877]));

var G__64878 = (i__5770__auto___64877 + (1));
i__5770__auto___64877 = G__64878;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return metabase.mbql.util.update_field_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(metabase.mbql.util.update_field_options.cljs$core$IFn$_invoke$arity$variadic = (function (G__64372,G__64373,rest64374){
var validate__50237__auto__ = cljs.core.deref(ufv64368_64870);
if(cljs.core.truth_(validate__50237__auto__)){
var args__50238__auto___64880 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(G__64372,G__64373,rest64374);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64378_64881 = new cljs.core.Keyword(null,"input","input",556931961);
var G__64379_64882 = cljs.core.with_meta(new cljs.core.Symbol(null,"update-field-options","update-field-options",-330736515,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrAggregationReference","mbql.s/FieldOrAggregationReference",-990538387,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"field-or-ag-ref-or-expression-ref","field-or-ag-ref-or-expression-ref",722676055,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like [[clojure.core/update]], but for the options in a `:field`, `:expression`, or `:aggregation` clause."], null));
var G__64380_64883 = input_schema64369_64872;
var G__64381_64884 = cljs.core.deref(input_checker64370_64873);
var G__64382_64885 = args__50238__auto___64880;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64378_64881,G__64379_64882,G__64380_64883,G__64381_64884,G__64382_64885) : schema.core.fn_validator.call(null,G__64378_64881,G__64379_64882,G__64380_64883,G__64381_64884,G__64382_64885));
} else {
var temp__5804__auto___64886 = (function (){var fexpr__64383 = cljs.core.deref(input_checker64370_64873);
return (fexpr__64383.cljs$core$IFn$_invoke$arity$1 ? fexpr__64383.cljs$core$IFn$_invoke$arity$1(args__50238__auto___64880) : fexpr__64383.call(null,args__50238__auto___64880));
})();
if(cljs.core.truth_(temp__5804__auto___64886)){
var error__50239__auto___64887 = temp__5804__auto___64886;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"update-field-options","update-field-options",-330736515,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrAggregationReference","mbql.s/FieldOrAggregationReference",-990538387,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"field-or-ag-ref-or-expression-ref","field-or-ag-ref-or-expression-ref",722676055,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like [[clojure.core/update]], but for the options in a `:field`, `:expression`, or `:aggregation` clause."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64887], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64369_64872,new cljs.core.Keyword(null,"value","value",305978217),args__50238__auto___64880,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64887], null));
} else {
}
}
} else {
}

var o__50240__auto__ = (function (){var G__64387 = G__64372;
var vec__64388 = G__64387;
var clause_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64388,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64388,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64388,(2),null);
var f = G__64373;
var args = rest64374;
var G__64387__$1 = G__64387;
var f__$1 = f;
var args__$1 = args;
while(true){
var vec__64391 = G__64387__$1;
var clause_type__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64391,(0),null);
var id_or_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64391,(1),null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64391,(2),null);
var f__$2 = f__$1;
var args__$2 = args__$1;
var opts__$2 = cljs.core.not_empty(metabase.mbql.util.remove_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$2,opts__$1,args__$2)));
if(cljs.core.truth_(opts__$2)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_type__$1,id_or_name__$1,opts__$2], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clause_type__$1,new cljs.core.Keyword(null,"field","field",-1302436500))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_type__$1,id_or_name__$1,null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_type__$1,id_or_name__$1], null);

}
}
break;
}
})();
if(cljs.core.truth_(validate__50237__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__64394_64889 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__64395_64890 = cljs.core.with_meta(new cljs.core.Symbol(null,"update-field-options","update-field-options",-330736515,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrAggregationReference","mbql.s/FieldOrAggregationReference",-990538387,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"field-or-ag-ref-or-expression-ref","field-or-ag-ref-or-expression-ref",722676055,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like [[clojure.core/update]], but for the options in a `:field`, `:expression`, or `:aggregation` clause."], null));
var G__64396_64891 = output_schema64367_64871;
var G__64397_64892 = cljs.core.deref(output_checker64371_64874);
var G__64398_64893 = o__50240__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__64394_64889,G__64395_64890,G__64396_64891,G__64397_64892,G__64398_64893) : schema.core.fn_validator.call(null,G__64394_64889,G__64395_64890,G__64396_64891,G__64397_64892,G__64398_64893));
} else {
var temp__5804__auto___64895 = (function (){var fexpr__64399 = cljs.core.deref(output_checker64371_64874);
return (fexpr__64399.cljs$core$IFn$_invoke$arity$1 ? fexpr__64399.cljs$core$IFn$_invoke$arity$1(o__50240__auto__) : fexpr__64399.call(null,o__50240__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___64895)){
var error__50239__auto___64896 = temp__5804__auto___64895;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"update-field-options","update-field-options",-330736515,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("mbql.s","FieldOrAggregationReference","mbql.s/FieldOrAggregationReference",-990538387,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"field-or-ag-ref-or-expression-ref","field-or-ag-ref-or-expression-ref",722676055,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like [[clojure.core/update]], but for the options in a `:field`, `:expression`, or `:aggregation` clause."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__50239__auto___64896], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64367_64871,new cljs.core.Keyword(null,"value","value",305978217),o__50240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__50239__auto___64896], null));
} else {
}
}
} else {
}

return o__50240__auto__;
}));

(metabase.mbql.util.update_field_options.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.mbql.util.update_field_options.cljs$lang$applyTo = (function (seq64375){
var G__64376 = cljs.core.first(seq64375);
var seq64375__$1 = cljs.core.next(seq64375);
var G__64377 = cljs.core.first(seq64375__$1);
var seq64375__$2 = cljs.core.next(seq64375__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64376,G__64377,seq64375__$2);
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(metabase.mbql.util.update_field_options),schema.core.__GT_FnSchema(output_schema64367_64871,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64369_64872], null)));

/**
 * Like [[clojure.core/assoc]], but for the options in a `:field`, `:expression`, or `:aggregation` clause.
 */
metabase.mbql.util.assoc_field_options = (function metabase$mbql$util$assoc_field_options(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64898 = arguments.length;
var i__5770__auto___64899 = (0);
while(true){
if((i__5770__auto___64899 < len__5769__auto___64898)){
args__5775__auto__.push((arguments[i__5770__auto___64899]));

var G__64900 = (i__5770__auto___64899 + (1));
i__5770__auto___64899 = G__64900;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return metabase.mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(metabase.mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic = (function (clause,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(metabase.mbql.util.update_field_options,clause,cljs.core.assoc,kvs);
}));

(metabase.mbql.util.assoc_field_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.mbql.util.assoc_field_options.cljs$lang$applyTo = (function (seq64400){
var G__64401 = cljs.core.first(seq64400);
var seq64400__$1 = cljs.core.next(seq64400);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64401,seq64400__$1);
}));

/**
 * Set the `:temporal-unit` of a `:field` clause to `unit`.
 */
metabase.mbql.util.with_temporal_unit = (function metabase$mbql$util$with_temporal_unit(p__64402,unit){
var vec__64403 = p__64402;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64403,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64403,(1),null);
var map__64406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64403,(2),null);
var map__64406__$1 = cljs.core.__destructure_map(map__64406);
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64406__$1,new cljs.core.Keyword(null,"base-type","base-type",1167971299));
var clause = vec__64403;
if(cljs.core.truth_(metabase.mbql.util.is_clause_QMARK_(new cljs.core.Keyword(null,"field","field",-1302436500),clause))){
} else {
throw (new Error("Assert failed: (is-clause? :field clause)"));
}

if(((cljs.core.not(base_type)) || (metabase.mbql.schema.valid_temporal_unit_for_base_type_QMARK_.cljs$core$IFn$_invoke$arity$2(base_type,unit)))){
return metabase.mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic(clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit], 0));
} else {
return clause;
}
});
/**
 * Update a `:field`, `:expression` reference, or `:aggregation` reference clause by removing all namespaced keys in the
 *   options map. This is mainly for clause equality comparison purposes -- in current usage namespaced keys are used by
 *   individual pieces of middleware or driver implementations for tracking little bits of information that should not be
 *   considered relevant when comparing clauses for equality.
 */
metabase.mbql.util.remove_namespaced_options = (function metabase$mbql$util$remove_namespaced_options(field_or_ref){
return metabase.mbql.util.update_field_options(field_or_ref,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__64407){
var vec__64408 = p__64407;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64408,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64408,(1),null);
return cljs.core.qualified_keyword_QMARK_(k);
}))));
});
/**
 * Find all the `:field` references with integer IDs in `coll`, which can be a full MBQL query, a snippet of MBQL, or a
 *   sequence of those things; return a set of Field IDs. Includes Fields referenced indirectly via `:source-field`.
 *   Returns `nil` if no IDs are found.
 */
metabase.mbql.util.referenced_field_ids = (function metabase$mbql$util$referenced_field_ids(coll){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cat,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)),cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$mbql$util$referenced_field_ids_$_match_64411(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__64413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__64413,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_1__64414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.integer_QMARK_(_AMPERSAND_match_1__64414)){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"source-field","source-field",933829534).cljs$core$IFn$_invoke$arity$1(opts)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64418){if((e64418 instanceof Error)){
var e__62528__auto__ = e64418;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e64418;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64417){if((e64417 instanceof Error)){
var e__62528__auto__ = e64417;
if((e__62528__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__62528__auto__;
}
} else {
throw e64417;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e64416){if((e64416 instanceof Error)){
var e__62528__auto__ = e64416;
if((e__62528__auto__ === cljs.core.match.backtrack)){
return metabase.mbql.util.match.impl.match_in_collection(metabase$mbql$util$referenced_field_ids_$_match_64411,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__62528__auto__;
}
} else {
throw e64416;

}
}})(cljs.core.PersistentVector.EMPTY,coll)))));
});
Object.defineProperty(module.exports, "referenced_field_ids", { enumerable: false, get: function() { return metabase.mbql.util.referenced_field_ids; } });
Object.defineProperty(module.exports, "desugar_is_null_and_not_null", { enumerable: false, get: function() { return metabase.mbql.util.desugar_is_null_and_not_null; } });
Object.defineProperty(module.exports, "desugar_current_relative_datetime", { enumerable: false, get: function() { return metabase.mbql.util.desugar_current_relative_datetime; } });
Object.defineProperty(module.exports, "ga_id_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.ga_id_QMARK_; } });
Object.defineProperty(module.exports, "add_filter_clause", { enumerable: false, get: function() { return metabase.mbql.util.add_filter_clause; } });
Object.defineProperty(module.exports, "dispatch_by_clause_name_or_class", { enumerable: false, get: function() { return metabase.mbql.util.dispatch_by_clause_name_or_class; } });
Object.defineProperty(module.exports, "mbql_clause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.mbql_clause_QMARK_; } });
Object.defineProperty(module.exports, "uniquify_named_aggregations", { enumerable: false, get: function() { return metabase.mbql.util.uniquify_named_aggregations; } });
Object.defineProperty(module.exports, "remove_namespaced_options", { enumerable: false, get: function() { return metabase.mbql.util.remove_namespaced_options; } });
Object.defineProperty(module.exports, "desugar_is_empty_and_not_empty", { enumerable: false, get: function() { return metabase.mbql.util.desugar_is_empty_and_not_empty; } });
Object.defineProperty(module.exports, "desugar_divide_with_extra_args", { enumerable: false, get: function() { return metabase.mbql.util.desugar_divide_with_extra_args; } });
Object.defineProperty(module.exports, "simplify_compound_filter", { enumerable: false, get: function() { return metabase.mbql.util.simplify_compound_filter; } });
Object.defineProperty(module.exports, "NamedAggregation", { enumerable: false, get: function() { return metabase.mbql.util.NamedAggregation; } });
Object.defineProperty(module.exports, "add_order_by_clause", { enumerable: false, get: function() { return metabase.mbql.util.add_order_by_clause; } });
Object.defineProperty(module.exports, "query__GT_source_table_id", { enumerable: false, get: function() { return metabase.mbql.util.query__GT_source_table_id; } });
Object.defineProperty(module.exports, "normalize_token", { enumerable: false, get: function() { return metabase.mbql.util.normalize_token; } });
Object.defineProperty(module.exports, "qualified_name", { enumerable: false, get: function() { return metabase.mbql.util.qualified_name; } });
Object.defineProperty(module.exports, "desugar_inside", { enumerable: false, get: function() { return metabase.mbql.util.desugar_inside; } });
Object.defineProperty(module.exports, "aggregation_at_index", { enumerable: false, get: function() { return metabase.mbql.util.aggregation_at_index; } });
Object.defineProperty(module.exports, "maybe_desugar_expression", { enumerable: false, get: function() { return metabase.mbql.util.maybe_desugar_expression; } });
Object.defineProperty(module.exports, "query__GT_max_rows_limit", { enumerable: false, get: function() { return metabase.mbql.util.query__GT_max_rows_limit; } });
Object.defineProperty(module.exports, "negate_STAR_", { enumerable: false, get: function() { return metabase.mbql.util.negate_STAR_; } });
Object.defineProperty(module.exports, "pre_alias_aggregations", { enumerable: false, get: function() { return metabase.mbql.util.pre_alias_aggregations; } });
Object.defineProperty(module.exports, "is_clause_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.is_clause_QMARK_; } });
Object.defineProperty(module.exports, "join__GT_source_table_id", { enumerable: false, get: function() { return metabase.mbql.util.join__GT_source_table_id; } });
Object.defineProperty(module.exports, "ga_metric_or_segment_QMARK_", { enumerable: false, get: function() { return metabase.mbql.util.ga_metric_or_segment_QMARK_; } });
Object.defineProperty(module.exports, "UniquelyNamedAggregations", { enumerable: false, get: function() { return metabase.mbql.util.UniquelyNamedAggregations; } });
Object.defineProperty(module.exports, "desugar_time_interval", { enumerable: false, get: function() { return metabase.mbql.util.desugar_time_interval; } });
Object.defineProperty(module.exports, "temporal_extract_ops", { enumerable: false, get: function() { return metabase.mbql.util.temporal_extract_ops; } });
Object.defineProperty(module.exports, "desugar_expression", { enumerable: false, get: function() { return metabase.mbql.util.desugar_expression; } });
Object.defineProperty(module.exports, "add_filter_clause_to_inner_query", { enumerable: false, get: function() { return metabase.mbql.util.add_filter_clause_to_inner_query; } });
Object.defineProperty(module.exports, "combine_compound_filters_of_type", { enumerable: false, get: function() { return metabase.mbql.util.combine_compound_filters_of_type; } });
Object.defineProperty(module.exports, "temporal_extract_ops__GT_unit", { enumerable: false, get: function() { return metabase.mbql.util.temporal_extract_ops__GT_unit; } });
Object.defineProperty(module.exports, "remove_empty", { enumerable: false, get: function() { return metabase.mbql.util.remove_empty; } });
Object.defineProperty(module.exports, "desugar_does_not_contain", { enumerable: false, get: function() { return metabase.mbql.util.desugar_does_not_contain; } });
Object.defineProperty(module.exports, "replace_field_or_expression", { enumerable: false, get: function() { return metabase.mbql.util.replace_field_or_expression; } });
Object.defineProperty(module.exports, "with_temporal_unit", { enumerable: false, get: function() { return metabase.mbql.util.with_temporal_unit; } });
Object.defineProperty(module.exports, "combine_filter_clauses", { enumerable: false, get: function() { return metabase.mbql.util.combine_filter_clauses; } });
Object.defineProperty(module.exports, "unique_name_generator", { enumerable: false, get: function() { return metabase.mbql.util.unique_name_generator; } });
Object.defineProperty(module.exports, "desugar_temporal_extract", { enumerable: false, get: function() { return metabase.mbql.util.desugar_temporal_extract; } });
Object.defineProperty(module.exports, "expression_with_name", { enumerable: false, get: function() { return metabase.mbql.util.expression_with_name; } });
Object.defineProperty(module.exports, "assoc_field_options", { enumerable: false, get: function() { return metabase.mbql.util.assoc_field_options; } });
Object.defineProperty(module.exports, "negate_filter_clause", { enumerable: false, get: function() { return metabase.mbql.util.negate_filter_clause; } });
Object.defineProperty(module.exports, "uniquify_names", { enumerable: false, get: function() { return metabase.mbql.util.uniquify_names; } });
Object.defineProperty(module.exports, "update_field_options", { enumerable: false, get: function() { return metabase.mbql.util.update_field_options; } });
Object.defineProperty(module.exports, "desugar_filter_clause", { enumerable: false, get: function() { return metabase.mbql.util.desugar_filter_clause; } });
Object.defineProperty(module.exports, "desugar_equals_and_not_equals_with_extra_args", { enumerable: false, get: function() { return metabase.mbql.util.desugar_equals_and_not_equals_with_extra_args; } });
Object.defineProperty(module.exports, "pre_alias_and_uniquify_aggregations", { enumerable: false, get: function() { return metabase.mbql.util.pre_alias_and_uniquify_aggregations; } });
//# sourceMappingURL=metabase.mbql.util.js.map
