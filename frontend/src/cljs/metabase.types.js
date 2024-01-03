var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./metabase.types.coercion_hierarchies.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.types.js");

goog.provide('metabase.types');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804),new cljs.core.Keyword("entity","*","entity/*",-2043291259));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","UserTable","entity/UserTable",-1504290772),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","CompanyTable","entity/CompanyTable",-1166853089),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","TransactionTable","entity/TransactionTable",-888813059),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","ProductTable","entity/ProductTable",1692844366),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","SubscriptionTable","entity/SubscriptionTable",1660366729),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","EventTable","entity/EventTable",-2132834802),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity","GoogleAnalyticsTable","entity/GoogleAnalyticsTable",910090965),new cljs.core.Keyword("entity","GenericTable","entity/GenericTable",1152424804));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Number","type/Number",-2071693690),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.Keyword("type","Number","type/Number",-2071693690));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","BigInteger","type/BigInteger",1152965666),new cljs.core.Keyword("type","Integer","type/Integer",-638928316));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Quantity","type/Quantity",-1936151227),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Quantity","type/Quantity",-1936151227),new cljs.core.Keyword("type","Integer","type/Integer",-638928316));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.Keyword("type","Number","type/Number",-2071693690));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Decimal","type/Decimal",-1657568790),new cljs.core.Keyword("type","Float","type/Float",1261800143));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Share","type/Share",-1285033895),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Share","type/Share",-1285033895),new cljs.core.Keyword("type","Float","type/Float",1261800143));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Currency","type/Currency",713609092),new cljs.core.Keyword("type","Decimal","type/Decimal",-1657568790));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Currency","type/Currency",713609092),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Income","type/Income",-342566883),new cljs.core.Keyword("type","Currency","type/Currency",713609092));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Discount","type/Discount",109235331),new cljs.core.Keyword("type","Currency","type/Currency",713609092));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Price","type/Price",286577051),new cljs.core.Keyword("type","Currency","type/Currency",713609092));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","GrossMargin","type/GrossMargin",1961535799),new cljs.core.Keyword("type","Currency","type/Currency",713609092));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Cost","type/Cost",363698341),new cljs.core.Keyword("type","Currency","type/Currency",713609092));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Location","type/Location",-1929284186),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043),new cljs.core.Keyword("type","Location","type/Location",-1929284186));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043),new cljs.core.Keyword("type","Float","type/Float",1261800143));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Latitude","type/Latitude",-1080544141),new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Longitude","type/Longitude",-196788672),new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Score","type/Score",188189565),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Score","type/Score",188189565),new cljs.core.Keyword("type","Number","type/Number",-2071693690));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Duration","type/Duration",1970868302),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Duration","type/Duration",1970868302),new cljs.core.Keyword("type","Number","type/Number",-2071693690));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UUID","type/UUID",1767712212),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","URL","type/URL",-1433976351),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","URL","type/URL",-1433976351),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","ImageURL","type/ImageURL",2081541690),new cljs.core.Keyword("type","URL","type/URL",-1433976351));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","AvatarURL","type/AvatarURL",-425042887),new cljs.core.Keyword("type","ImageURL","type/ImageURL",2081541690));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Email","type/Email",-1486863280),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Email","type/Email",-1486863280),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Category","type/Category",-264699550),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Enum","type/Enum",-1132893505),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Address","type/Address",-413689880),new cljs.core.Keyword("type","Location","type/Location",-1929284186));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","City","type/City",420361040),new cljs.core.Keyword("type","Address","type/Address",-413689880));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","City","type/City",420361040),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","City","type/City",420361040),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","State","type/State",-154641657),new cljs.core.Keyword("type","Address","type/Address",-413689880));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","State","type/State",-154641657),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","State","type/State",-154641657),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Country","type/Country",2058497652),new cljs.core.Keyword("type","Address","type/Address",-413689880));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Country","type/Country",2058497652),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Country","type/Country",2058497652),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","ZipCode","type/ZipCode",845484542),new cljs.core.Keyword("type","Address","type/Address",-413689880));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","ZipCode","type/ZipCode",845484542),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Name","type/Name",-134787639),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Name","type/Name",-134787639),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Title","type/Title",1977060721),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Title","type/Title",1977060721),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Description","type/Description",-680883950),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Description","type/Description",-680883950),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Comment","type/Comment",-1406574403),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Comment","type/Comment",-1406574403),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","PostgresEnum","type/PostgresEnum",-900722397),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Date","type/Date",-690428629),new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Time","type/Time",-814852413),new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","TimeWithTZ","type/TimeWithTZ",-442869120),new cljs.core.Keyword("type","Time","type/Time",-814852413));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","TimeWithLocalTZ","type/TimeWithLocalTZ",-259094111),new cljs.core.Keyword("type","TimeWithTZ","type/TimeWithTZ",-442869120));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","TimeWithZoneOffset","type/TimeWithZoneOffset",959948573),new cljs.core.Keyword("type","TimeWithTZ","type/TimeWithTZ",-442869120));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DateTime","type/DateTime",352113310),new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DateTimeWithTZ","type/DateTimeWithTZ",-1919106635),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DateTimeWithLocalTZ","type/DateTimeWithLocalTZ",339704031),new cljs.core.Keyword("type","DateTimeWithTZ","type/DateTimeWithTZ",-1919106635));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DateTimeWithZoneOffset","type/DateTimeWithZoneOffset",1768393068),new cljs.core.Keyword("type","DateTimeWithTZ","type/DateTimeWithTZ",-1919106635));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DateTimeWithZoneID","type/DateTimeWithZoneID",-1588069560),new cljs.core.Keyword("type","DateTimeWithTZ","type/DateTimeWithTZ",-1919106635));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Instant","type/Instant",1168385286),new cljs.core.Keyword("type","DateTimeWithLocalTZ","type/DateTimeWithLocalTZ",339704031));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationTemporal","type/CreationTemporal",-1324176405),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationTimestamp","type/CreationTimestamp",-687400081),new cljs.core.Keyword("type","CreationTemporal","type/CreationTemporal",-1324176405));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationTimestamp","type/CreationTimestamp",-687400081),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationTime","type/CreationTime",-1473681229),new cljs.core.Keyword("type","CreationTemporal","type/CreationTemporal",-1324176405));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationTime","type/CreationTime",-1473681229),new cljs.core.Keyword("type","Time","type/Time",-814852413));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationDate","type/CreationDate",-1102411433),new cljs.core.Keyword("type","CreationTemporal","type/CreationTemporal",-1324176405));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CreationDate","type/CreationDate",-1102411433),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinTemporal","type/JoinTemporal",-1465575331),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinTimestamp","type/JoinTimestamp",1554527110),new cljs.core.Keyword("type","JoinTemporal","type/JoinTemporal",-1465575331));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinTimestamp","type/JoinTimestamp",1554527110),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinTime","type/JoinTime",1290040594),new cljs.core.Keyword("type","JoinTemporal","type/JoinTemporal",-1465575331));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinTime","type/JoinTime",1290040594),new cljs.core.Keyword("type","Time","type/Time",-814852413));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinDate","type/JoinDate",-793235819),new cljs.core.Keyword("type","JoinTemporal","type/JoinTemporal",-1465575331));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JoinDate","type/JoinDate",-793235819),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationTemporal","type/CancelationTemporal",-532782161),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationTimestamp","type/CancelationTimestamp",-741584330),new cljs.core.Keyword("type","CancelationTemporal","type/CancelationTemporal",-532782161));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationTimestamp","type/CancelationTimestamp",-741584330),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationTime","type/CancelationTime",1076177064),new cljs.core.Keyword("type","CancelationTemporal","type/CancelationTemporal",-532782161));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationTime","type/CancelationTime",1076177064),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationDate","type/CancelationDate",561287015),new cljs.core.Keyword("type","CancelationTemporal","type/CancelationTemporal",-532782161));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","CancelationDate","type/CancelationDate",561287015),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionTemporal","type/DeletionTemporal",2136289994),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionTimestamp","type/DeletionTimestamp",-935598691),new cljs.core.Keyword("type","DeletionTemporal","type/DeletionTemporal",2136289994));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionTimestamp","type/DeletionTimestamp",-935598691),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionTime","type/DeletionTime",-1426373145),new cljs.core.Keyword("type","DeletionTemporal","type/DeletionTemporal",2136289994));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionTime","type/DeletionTime",-1426373145),new cljs.core.Keyword("type","Time","type/Time",-814852413));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionDate","type/DeletionDate",-2052285784),new cljs.core.Keyword("type","DeletionTemporal","type/DeletionTemporal",2136289994));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DeletionDate","type/DeletionDate",-2052285784),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedTemporal","type/UpdatedTemporal",-596775941),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedTimestamp","type/UpdatedTimestamp",-754878742),new cljs.core.Keyword("type","UpdatedTemporal","type/UpdatedTemporal",-596775941));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedTimestamp","type/UpdatedTimestamp",-754878742),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedTime","type/UpdatedTime",-1278858780),new cljs.core.Keyword("type","UpdatedTemporal","type/UpdatedTemporal",-596775941));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedTime","type/UpdatedTime",-1278858780),new cljs.core.Keyword("type","Time","type/Time",-814852413));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedDate","type/UpdatedDate",-1756161562),new cljs.core.Keyword("type","UpdatedTemporal","type/UpdatedTemporal",-596775941));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","UpdatedDate","type/UpdatedDate",-1756161562),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Birthdate","type/Birthdate",619594666),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Birthdate","type/Birthdate",619594666),new cljs.core.Keyword("type","Date","type/Date",-690428629));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Interval","type/Interval",-365323617),new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Boolean","type/Boolean",26348630),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","DruidHyperUnique","type/DruidHyperUnique",-585863040),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","TextLike","type/TextLike",-1295784190),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","MongoBSONID","type/MongoBSONID",663302764),new cljs.core.Keyword("type","TextLike","type/TextLike",-1295784190));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","IPAddress","type/IPAddress",-808425343),new cljs.core.Keyword("type","TextLike","type/TextLike",-1295784190));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","IPAddress","type/IPAddress",-808425343),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Collection","type/Collection",1447925820),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Structured","type/Structured",-1651495863),new cljs.core.Keyword("type","*","type/*",-1283496752));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Dictionary","type/Dictionary",1352048818),new cljs.core.Keyword("type","Collection","type/Collection",1447925820));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Array","type/Array",-2060534244),new cljs.core.Keyword("type","Collection","type/Collection",1447925820));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JSON","type/JSON",-14729800),new cljs.core.Keyword("type","Structured","type/Structured",-1651495863));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","JSON","type/JSON",-14729800),new cljs.core.Keyword("type","Collection","type/Collection",1447925820));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","XML","type/XML",-804526569),new cljs.core.Keyword("type","Structured","type/Structured",-1651495863));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","XML","type/XML",-804526569),new cljs.core.Keyword("type","Collection","type/Collection",1447925820));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Structured","type/Structured",-1651495863),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Structured","type/Structured",-1651495863),new cljs.core.Keyword("type","Text","type/Text",603746827));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","SerializedJSON","type/SerializedJSON",300065547),new cljs.core.Keyword("type","Structured","type/Structured",-1651495863));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","XML","type/XML",-804526569),new cljs.core.Keyword("type","Structured","type/Structured",-1651495863));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","User","type/User",832931932),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Author","type/Author",-836053084),new cljs.core.Keyword("type","User","type/User",832931932));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Owner","type/Owner",1745970850),new cljs.core.Keyword("type","User","type/User",832931932));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Product","type/Product",1803490713),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Company","type/Company",-1114287726),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Subscription","type/Subscription",-1076112474),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Source","type/Source",1060815848),new cljs.core.Keyword("type","Category","type/Category",-264699550));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","FK","type/FK",360937035),new cljs.core.Keyword("Relation","*","Relation/*",-706261522));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","PK","type/PK",-1723274286),new cljs.core.Keyword("Relation","*","Relation/*",-706261522));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","String->Temporal","Coercion/String->Temporal",946586714),new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","ISO8601->Temporal","Coercion/ISO8601->Temporal",410003391),new cljs.core.Keyword("Coercion","String->Temporal","Coercion/String->Temporal",946586714));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","ISO8601->DateTime","Coercion/ISO8601->DateTime",-1255976090),new cljs.core.Keyword("Coercion","ISO8601->Temporal","Coercion/ISO8601->Temporal",410003391));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","ISO8601->Time","Coercion/ISO8601->Time",-1197754849),new cljs.core.Keyword("Coercion","ISO8601->Temporal","Coercion/ISO8601->Temporal",410003391));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","ISO8601->Date","Coercion/ISO8601->Date",-103814729),new cljs.core.Keyword("Coercion","ISO8601->Temporal","Coercion/ISO8601->Temporal",410003391));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","YYYYMMDDHHMMSSString->Temporal","Coercion/YYYYMMDDHHMMSSString->Temporal",41716060),new cljs.core.Keyword("Coercion","String->Temporal","Coercion/String->Temporal",946586714));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","Bytes->Temporal","Coercion/Bytes->Temporal",-2023274781),new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","YYYYMMDDHHMMSSBytes->Temporal","Coercion/YYYYMMDDHHMMSSBytes->Temporal",-624663946),new cljs.core.Keyword("Coercion","Bytes->Temporal","Coercion/Bytes->Temporal",-2023274781));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","Number->Temporal","Coercion/Number->Temporal",-1061171580),new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","UNIXTime->Temporal","Coercion/UNIXTime->Temporal",-968093468),new cljs.core.Keyword("Coercion","Number->Temporal","Coercion/Number->Temporal",-1061171580));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","UNIXSeconds->DateTime","Coercion/UNIXSeconds->DateTime",-1635093627),new cljs.core.Keyword("Coercion","UNIXTime->Temporal","Coercion/UNIXTime->Temporal",-968093468));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","UNIXMilliSeconds->DateTime","Coercion/UNIXMilliSeconds->DateTime",-1296453709),new cljs.core.Keyword("Coercion","UNIXTime->Temporal","Coercion/UNIXTime->Temporal",-968093468));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","UNIXMicroSeconds->DateTime","Coercion/UNIXMicroSeconds->DateTime",1299502399),new cljs.core.Keyword("Coercion","UNIXTime->Temporal","Coercion/UNIXTime->Temporal",-968093468));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("Coercion","UNIXNanoSeconds->DateTime","Coercion/UNIXNanoSeconds->DateTime",925800243),new cljs.core.Keyword("Coercion","UNIXTime->Temporal","Coercion/UNIXTime->Temporal",-968093468));
/**
 * True if a Dashboard `Field` instance has a temporal base or semantic type, i.e. if this Field represents a value
 *   relating to a moment in time.
 */
metabase.types.field_is_type_QMARK_ = (function metabase$types$field_is_type_QMARK_(tyype,p__58940){
var map__58941 = p__58940;
var map__58941__$1 = cljs.core.__destructure_map(map__58941);
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58941__$1,new cljs.core.Keyword(null,"base_type","base_type",1908272670));
var effective_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58941__$1,new cljs.core.Keyword(null,"effective_type","effective_type",1699478099));
return cljs.core.some((function (p1__58939_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__58939_SHARP_,tyype);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_type,effective_type], null));
});
/**
 * True if a Dashboard `Field` instance has a temporal base or semantic type, i.e. if this Field represents a value
 *   relating to a moment in time.
 */
metabase.types.temporal_field_QMARK_ = (function metabase$types$temporal_field_QMARK_(field){
return metabase.types.field_is_type_QMARK_(new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010),field);
});
/**
 * Impl for [[most-specific-common-ancestor]].
 */
metabase.types.most_specific_common_ancestor_STAR_ = (function metabase$types$most_specific_common_ancestor_STAR_(x,y){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("type","*","type/*",-1283496752))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,new cljs.core.Keyword("type","*","type/*",-1283496752))){
return null;
} else {
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y)){
return y;
} else {
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(y,x)){
return x;
} else {
return cljs.core.some((function (x_SINGLEQUOTE_){
return cljs.core.some((function (y_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return null;
} else {
return (metabase.types.most_specific_common_ancestor_STAR_.cljs$core$IFn$_invoke$arity$2 ? metabase.types.most_specific_common_ancestor_STAR_.cljs$core$IFn$_invoke$arity$2(x_SINGLEQUOTE_,y_SINGLEQUOTE_) : metabase.types.most_specific_common_ancestor_STAR_.call(null,x_SINGLEQUOTE_,y_SINGLEQUOTE_));
}
}),cljs.core.cons(y,cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y)));
}),cljs.core.cons(x,cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x)));

}
}
}
}
});
/**
 * Return the most-specific type that is an ancestor of both `x` and `y`.
 * 
 *  (most-specific-common-ancestor :type/BigInteger :type/Decimal) => :type/Number
 */
metabase.types.most_specific_common_ancestor = (function metabase$types$most_specific_common_ancestor(x,y){
var or__5045__auto__ = metabase.types.most_specific_common_ancestor_STAR_(x,y);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
});
/**
 * Is `x` the same as, or a descendant type of, `y`?
 */
metabase.types.isa = (function metabase$types$isa(x,y){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(y));
});
/**
 * A map of Type name (as string, without `:type/` namespace) -> qualified type name as string
 * 
 *       {"Temporal" "type/Temporal", ...}
 */
metabase.types.TYPE = cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function metabase$types$iter__58961(s__58962){
return (new cljs.core.LazySeq(null,(function (){
var s__58962__$1 = s__58962;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__58962__$1);
if(temp__5804__auto__){
var s__58962__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58962__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__58962__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__58964 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__58963 = (0);
while(true){
if((i__58963 < size__5522__auto__)){
var tyype = cljs.core._nth(c__5521__auto__,i__58963);
cljs.core.chunk_append(b__58964,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(tyype),metabase.util.qualified_name(tyype)], null));

var G__59024 = (i__58963 + (1));
i__58963 = G__59024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58964),metabase$types$iter__58961(cljs.core.chunk_rest(s__58962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58964),null);
}
} else {
var tyype = cljs.core.first(s__58962__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(tyype),metabase.util.qualified_name(tyype)], null),metabase$types$iter__58961(cljs.core.rest(s__58962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.descendants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("type","*","type/*",-1283496752),new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996),new cljs.core.Keyword("Relation","*","Relation/*",-706261522)], null)], 0))));
})()));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","UNIXNanoSeconds->DateTime","Coercion/UNIXNanoSeconds->DateTime",925800243),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("type","Integer","type/Integer",-638928316),null,new cljs.core.Keyword("type","Decimal","type/Decimal",-1657568790),null], null), null),new cljs.core.Keyword("type","Instant","type/Instant",1168385286));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","UNIXMicroSeconds->DateTime","Coercion/UNIXMicroSeconds->DateTime",1299502399),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("type","Integer","type/Integer",-638928316),null,new cljs.core.Keyword("type","Decimal","type/Decimal",-1657568790),null], null), null),new cljs.core.Keyword("type","Instant","type/Instant",1168385286));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","UNIXMilliSeconds->DateTime","Coercion/UNIXMilliSeconds->DateTime",-1296453709),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("type","Integer","type/Integer",-638928316),null,new cljs.core.Keyword("type","Decimal","type/Decimal",-1657568790),null], null), null),new cljs.core.Keyword("type","Instant","type/Instant",1168385286));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","UNIXSeconds->DateTime","Coercion/UNIXSeconds->DateTime",-1635093627),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("type","Integer","type/Integer",-638928316),null,new cljs.core.Keyword("type","Decimal","type/Decimal",-1657568790),null], null), null),new cljs.core.Keyword("type","Instant","type/Instant",1168385286));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","ISO8601->Date","Coercion/ISO8601->Date",-103814729),new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("type","Date","type/Date",-690428629));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","ISO8601->DateTime","Coercion/ISO8601->DateTime",-1255976090),new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","ISO8601->Time","Coercion/ISO8601->Time",-1197754849),new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("type","Time","type/Time",-814852413));
metabase.types.coercion_hierarchies.define_types_BANG_(new cljs.core.Keyword("Coercion","YYYYMMDDHHMMSSString->Temporal","Coercion/YYYYMMDDHHMMSSString->Temporal",41716060),new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
metabase.types.coercion_hierarchies.define_non_inheritable_type_BANG_(new cljs.core.Keyword("Coercion","YYYYMMDDHHMMSSBytes->Temporal","Coercion/YYYYMMDDHHMMSSBytes->Temporal",-624663946),new cljs.core.Keyword("type","*","type/*",-1283496752),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
/**
 * Whether `coercion-strategy` is allowed for `base-type`.
 */
metabase.types.is_coercible_from_QMARK_ = (function metabase$types$is_coercible_from_QMARK_(coercion_strategy,base_type){
return ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(metabase.types.coercion_hierarchies.base_type_hierarchy(),base_type,coercion_strategy)) || (cljs.core.boolean$((function (){var G__58978 = metabase.types.coercion_hierarchies.non_descending_strategies();
var G__58978__$1 = (((G__58978 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__58978,base_type));
if((G__58978__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__58978__$1,coercion_strategy);
}
})())));
});
/**
 * Whether `coercion-strategy` coerces to `effective-type` or some subtype thereof.
 */
metabase.types.is_coercible_to_QMARK_ = (function metabase$types$is_coercible_to_QMARK_(coercion_strategy,effective_type){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(metabase.types.coercion_hierarchies.effective_type_hierarchy(),coercion_strategy,effective_type);
});
/**
 * Whether `coercion-strategy` is allowed for `base-type` and coerces to `effective-type` or some subtype thereof.
 */
metabase.types.is_coercible_QMARK_ = (function metabase$types$is_coercible_QMARK_(coercion_strategy,base_type,effective_type){
return ((metabase.types.is_coercible_from_QMARK_(coercion_strategy,base_type)) && (metabase.types.is_coercible_to_QMARK_(coercion_strategy,effective_type)));
});
/**
 * Possible coercions for a base type, returned as a map of `effective-type -> #{coercion-strategy}`
 */
metabase.types.coercion_possibilities = (function metabase$types$coercion_possibilities(base_type){
var base_type_hierarchy = metabase.types.coercion_hierarchies.base_type_hierarchy();
var effective_type_hierarchy = metabase.types.coercion_hierarchies.effective_type_hierarchy();
return cljs.core.not_empty(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.select_keys(metabase.types.coercion_hierarchies.non_descending_strategies(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_type], null)),(function (){var iter__5523__auto__ = (function metabase$types$coercion_possibilities_$_iter__58984(s__58985){
return (new cljs.core.LazySeq(null,(function (){
var s__58985__$1 = s__58985;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__58985__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var strategy = cljs.core.first(xs__6360__auto__);
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(strategy,new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116))){
var effective_types = cljs.core.parents.cljs$core$IFn$_invoke$arity$2(effective_type_hierarchy,strategy);
var iterys__5519__auto__ = ((function (s__58985__$1,effective_types,strategy,xs__6360__auto__,temp__5804__auto__,base_type_hierarchy,effective_type_hierarchy){
return (function metabase$types$coercion_possibilities_$_iter__58984_$_iter__58986(s__58987){
return (new cljs.core.LazySeq(null,((function (s__58985__$1,effective_types,strategy,xs__6360__auto__,temp__5804__auto__,base_type_hierarchy,effective_type_hierarchy){
return (function (){
var s__58987__$1 = s__58987;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__58987__$1);
if(temp__5804__auto____$1){
var s__58987__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58987__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__58987__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__58989 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__58988 = (0);
while(true){
if((i__58988 < size__5522__auto__)){
var effective_type = cljs.core._nth(c__5521__auto__,i__58988);
if((!(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116))))){
cljs.core.chunk_append(b__58989,cljs.core.PersistentArrayMap.createAsIfByAssoc([effective_type,cljs.core.PersistentHashSet.createAsIfByAssoc([strategy])]));

var G__59030 = (i__58988 + (1));
i__58988 = G__59030;
continue;
} else {
var G__59031 = (i__58988 + (1));
i__58988 = G__59031;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58989),metabase$types$coercion_possibilities_$_iter__58984_$_iter__58986(cljs.core.chunk_rest(s__58987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58989),null);
}
} else {
var effective_type = cljs.core.first(s__58987__$2);
if((!(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("Coercion","*","Coercion/*",1713686116))))){
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([effective_type,cljs.core.PersistentHashSet.createAsIfByAssoc([strategy])]),metabase$types$coercion_possibilities_$_iter__58984_$_iter__58986(cljs.core.rest(s__58987__$2)));
} else {
var G__59032 = cljs.core.rest(s__58987__$2);
s__58987__$1 = G__59032;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__58985__$1,effective_types,strategy,xs__6360__auto__,temp__5804__auto__,base_type_hierarchy,effective_type_hierarchy))
,null,null));
});})(s__58985__$1,effective_types,strategy,xs__6360__auto__,temp__5804__auto__,base_type_hierarchy,effective_type_hierarchy))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(effective_types));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,metabase$types$coercion_possibilities_$_iter__58984(cljs.core.rest(s__58985__$1)));
} else {
var G__59036 = cljs.core.rest(s__58985__$1);
s__58985__$1 = G__59036;
continue;
}
} else {
var G__59037 = cljs.core.rest(s__58985__$1);
s__58985__$1 = G__59037;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.ancestors.cljs$core$IFn$_invoke$arity$2(base_type_hierarchy,base_type));
})()));
});
/**
 * Returns a boolean of whether a field base-type has any coercion strategies available.
 */
metabase.types.is_coerceable = (function metabase$types$is_coerceable(base_type){
return cljs.core.boolean$(cljs.core.not_empty(metabase.types.coercion_possibilities(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_type))));
});
/**
 * The effective type resulting from a coercion.
 */
metabase.types.effective_type_for_coercion = (function metabase$types$effective_type_for_coercion(coercion){
return metabase.types.coercion_hierarchies.effective_type_for_strategy(coercion);
});
/**
 * Coercions available for a type. In cljs will return a js array of strings like ["Coercion/ISO8601->Time" ...]. In
 *   clojure will return a sequence of keywords.
 */
metabase.types.coercions_for_type = (function metabase$types$coercions_for_type(base_type){
var applicable = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.List.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.cat),cljs.core.vals(metabase.types.coercion_possibilities(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_type))));
return cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (kw){
return [cljs.core.namespace(kw),"/",cljs.core.name(kw)].join('');
}),applicable));
});
Object.defineProperty(module.exports, "temporal_field_QMARK_", { enumerable: false, get: function() { return metabase.types.temporal_field_QMARK_; } });
Object.defineProperty(module.exports, "is_coercible_QMARK_", { enumerable: false, get: function() { return metabase.types.is_coercible_QMARK_; } });
Object.defineProperty(module.exports, "is_coercible_from_QMARK_", { enumerable: false, get: function() { return metabase.types.is_coercible_from_QMARK_; } });
Object.defineProperty(module.exports, "field_is_type_QMARK_", { enumerable: false, get: function() { return metabase.types.field_is_type_QMARK_; } });
Object.defineProperty(module.exports, "isa", { enumerable: true, get: function() { return metabase.types.isa; } });
Object.defineProperty(module.exports, "coercions_for_type", { enumerable: true, get: function() { return metabase.types.coercions_for_type; } });
Object.defineProperty(module.exports, "is_coercible_to_QMARK_", { enumerable: false, get: function() { return metabase.types.is_coercible_to_QMARK_; } });
Object.defineProperty(module.exports, "most_specific_common_ancestor_STAR_", { enumerable: false, get: function() { return metabase.types.most_specific_common_ancestor_STAR_; } });
Object.defineProperty(module.exports, "most_specific_common_ancestor", { enumerable: false, get: function() { return metabase.types.most_specific_common_ancestor; } });
Object.defineProperty(module.exports, "is_coerceable", { enumerable: true, get: function() { return metabase.types.is_coerceable; } });
Object.defineProperty(module.exports, "effective_type_for_coercion", { enumerable: false, get: function() { return metabase.types.effective_type_for_coercion; } });
Object.defineProperty(module.exports, "TYPE", { enumerable: true, get: function() { return metabase.types.TYPE; } });
Object.defineProperty(module.exports, "coercion_possibilities", { enumerable: false, get: function() { return metabase.types.coercion_possibilities; } });
//# sourceMappingURL=metabase.types.js.map
