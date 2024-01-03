var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.schema.common.js");
require("./metabase.mbql.schema.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.id.js");

goog.provide('metabase.lib.schema.id');
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","database","metabase.lib.schema.id/database",2063511424),new cljs.core.Keyword("metabase.lib.schema.common","int-greater-than-or-equal-to-zero","metabase.lib.schema.common/int-greater-than-or-equal-to-zero",-1646435681));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","saved-questions-virtual-database","metabase.lib.schema.id/saved-questions-virtual-database",700243236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),metabase.mbql.schema.saved_questions_virtual_database_id], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","table","metabase.lib.schema.id/table",-583250693),new cljs.core.Keyword("metabase.lib.schema.common","int-greater-than-or-equal-to-zero","metabase.lib.schema.common/int-greater-than-or-equal-to-zero",-1646435681));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","field","metabase.lib.schema.id/field",-985236431),new cljs.core.Keyword("metabase.lib.schema.common","int-greater-than-or-equal-to-zero","metabase.lib.schema.common/int-greater-than-or-equal-to-zero",-1646435681));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","card","metabase.lib.schema.id/card",-801728009),new cljs.core.Keyword("metabase.lib.schema.common","int-greater-than-or-equal-to-zero","metabase.lib.schema.common/int-greater-than-or-equal-to-zero",-1646435681));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","segment","metabase.lib.schema.id/segment",-983297351),new cljs.core.Keyword("metabase.lib.schema.common","int-greater-than-or-equal-to-zero","metabase.lib.schema.common/int-greater-than-or-equal-to-zero",-1646435681));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","metric","metabase.lib.schema.id/metric",369478774),new cljs.core.Keyword("metabase.lib.schema.common","int-greater-than-or-equal-to-zero","metabase.lib.schema.common/int-greater-than-or-equal-to-zero",-1646435681));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","snippet","metabase.lib.schema.id/snippet",909029873),new cljs.core.Keyword("metabase.lib.schema.common","int-greater-than-or-equal-to-zero","metabase.lib.schema.common/int-greater-than-or-equal-to-zero",-1646435681));

//# sourceMappingURL=metabase.lib.schema.id.js.map
