var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./devtools.formatters.templating.js");
require("./devtools.formatters.state.js");
require("./devtools.formatters.helpers.js");
require("./devtools.formatters.markup.js");
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

$CLJS.SHADOW_ENV.setLoaded("devtools.formatters.budgeting.js");

goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__29638__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__29638__auto__["add"]).call(o__29638__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__29638__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__29638__auto__["delete"]).call(o__29638__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__29638__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__29638__auto__["has"]).call(o__29638__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__32688 = data;
var target__29660__auto__ = G__32688;
if(cljs.core.truth_(target__29660__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32688)].join(''),"\n","target__29660__auto__"].join('')));
}

(target__29660__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__32688;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_32849 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_32849);
} else {
var seq__32706_32855 = cljs.core.seq(json_ml);
var chunk__32707_32856 = null;
var count__32708_32857 = (0);
var i__32709_32858 = (0);
while(true){
if((i__32709_32858 < count__32708_32857)){
var item_32862 = chunk__32707_32856.cljs$core$IIndexed$_nth$arity$2(null,i__32709_32858);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_32862,new_depth_budget_32849) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_32862,new_depth_budget_32849));


var G__32863 = seq__32706_32855;
var G__32864 = chunk__32707_32856;
var G__32865 = count__32708_32857;
var G__32866 = (i__32709_32858 + (1));
seq__32706_32855 = G__32863;
chunk__32707_32856 = G__32864;
count__32708_32857 = G__32865;
i__32709_32858 = G__32866;
continue;
} else {
var temp__5804__auto___32869 = cljs.core.seq(seq__32706_32855);
if(temp__5804__auto___32869){
var seq__32706_32870__$1 = temp__5804__auto___32869;
if(cljs.core.chunked_seq_QMARK_(seq__32706_32870__$1)){
var c__5568__auto___32874 = cljs.core.chunk_first(seq__32706_32870__$1);
var G__32875 = cljs.core.chunk_rest(seq__32706_32870__$1);
var G__32876 = c__5568__auto___32874;
var G__32877 = cljs.core.count(c__5568__auto___32874);
var G__32878 = (0);
seq__32706_32855 = G__32875;
chunk__32707_32856 = G__32876;
count__32708_32857 = G__32877;
i__32709_32858 = G__32878;
continue;
} else {
var item_32881 = cljs.core.first(seq__32706_32870__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_32881,new_depth_budget_32849) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_32881,new_depth_budget_32849));


var G__32882 = cljs.core.next(seq__32706_32870__$1);
var G__32883 = null;
var G__32884 = (0);
var G__32885 = (0);
seq__32706_32855 = G__32882;
chunk__32707_32856 = G__32883;
count__32708_32857 = G__32884;
i__32709_32858 = G__32885;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5802__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5802__auto__)){
var initial_hierarchy_depth_budget = temp__5802__auto__;
var remaining_depth_budget = (function (){var or__5045__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});
Object.defineProperty(module.exports, "transfer_remaining_depth_budget_BANG_", { enumerable: false, get: function() { return devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_; } });
Object.defineProperty(module.exports, "was_over_budget_QMARK__BANG_", { enumerable: false, get: function() { return devtools.formatters.budgeting.was_over_budget_QMARK__BANG_; } });
Object.defineProperty(module.exports, "determine_depth", { enumerable: false, get: function() { return devtools.formatters.budgeting.determine_depth; } });
Object.defineProperty(module.exports, "add_over_budget_value_BANG_", { enumerable: false, get: function() { return devtools.formatters.budgeting.add_over_budget_value_BANG_; } });
Object.defineProperty(module.exports, "over_budget_values", { enumerable: false, get: function() { return devtools.formatters.budgeting.over_budget_values; } });
Object.defineProperty(module.exports, "has_any_object_reference_QMARK_", { enumerable: false, get: function() { return devtools.formatters.budgeting.has_any_object_reference_QMARK_; } });
Object.defineProperty(module.exports, "distribute_budget_BANG_", { enumerable: false, get: function() { return devtools.formatters.budgeting.distribute_budget_BANG_; } });
Object.defineProperty(module.exports, "has_over_budget_value_QMARK_", { enumerable: false, get: function() { return devtools.formatters.budgeting.has_over_budget_value_QMARK_; } });
Object.defineProperty(module.exports, "delete_over_budget_value_BANG_", { enumerable: false, get: function() { return devtools.formatters.budgeting.delete_over_budget_value_BANG_; } });
Object.defineProperty(module.exports, "header_expander_depth_cost", { enumerable: false, get: function() { return devtools.formatters.budgeting.header_expander_depth_cost; } });
Object.defineProperty(module.exports, "object_reference_QMARK_", { enumerable: false, get: function() { return devtools.formatters.budgeting.object_reference_QMARK_; } });
Object.defineProperty(module.exports, "alter_json_ml_to_fit_in_remaining_budget_BANG_", { enumerable: false, get: function() { return devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_; } });
//# sourceMappingURL=devtools.formatters.budgeting.js.map
