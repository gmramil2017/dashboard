var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./metabase.lib.metadata.calculation.js");require("./metabase.lib.schema.js");require("./metabase.lib.schema.common.js");require("./metabase.lib.util.js");require("./metabase.shared.util.i18n.js");require("./metabase.util.malli.js");
'use strict';$CLJS.O5=function(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;return $CLJS.t0(arguments[0],arguments[1],arguments[2],3<b.length?new $CLJS.y(b.slice(3),0,null):null)};$CLJS.Y0.o(null,$CLJS.ER,function(a,b){a=$CLJS.ER.g($CLJS.s0(a,b));return $CLJS.m(a)?[$CLJS.p.g(a)," ",$CLJS.p.g($CLJS.zZ("row","rows",a))].join(""):null});var P5=function P5(a){switch(arguments.length){case 2:return P5.h(arguments[0],arguments[1]);case 3:return P5.j(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",$CLJS.p.g(arguments.length)].join(""));}};$CLJS.Ra("metabase.lib.limit.limit",P5);P5.h=function(a,b){return P5.j(a,-1,b)};
P5.j=function(a,b,c){return $CLJS.O5(a,b,function(d){return $CLJS.m(c)?$CLJS.U.j(d,$CLJS.ER,c):$CLJS.Jm.h(d,$CLJS.ER)})};P5.v=3;var Q5=function Q5(a){switch(arguments.length){case 1:return Q5.g(arguments[0]);case 2:return Q5.h(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",$CLJS.p.g(arguments.length)].join(""));}};$CLJS.Ra("metabase.lib.limit.current_limit",Q5);Q5.g=function(a){return Q5.h(a,-1)};Q5.h=function(a,b){return $CLJS.ER.g($CLJS.s0(a,b))};Q5.v=2;
module.exports={limit:P5,current_limit:Q5};