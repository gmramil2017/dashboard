var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./malli.core.js");require("./metabase.lib.schema.common.js");require("./metabase.lib.schema.expression.js");require("./metabase.lib.schema.mbql_clause.js");require("./metabase.util.malli.registry.js");
'use strict';var DW,EW,Rma,Sma,Tma,GW,HW,IW,JW,LW,Uma,NW;DW=function(a){switch(arguments.length){case 2:return $CLJS.DU(arguments[0],arguments[1]);case 3:return $CLJS.CU(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",$CLJS.p.g(arguments.length)].join(""));}};EW=function(a){return["(?:",$CLJS.p.g($CLJS.Q.h($CLJS.p,a)),")?"].join("")};Rma=new $CLJS.N("metabase.lib.schema.literal","temporal","metabase.lib.schema.literal/temporal",1227892305);
Sma=new $CLJS.N("metabase.lib.schema.literal","non-integer-real","metabase.lib.schema.literal/non-integer-real",1396696695);$CLJS.FW=new $CLJS.N("metabase.lib.schema.literal","string.year","metabase.lib.schema.literal/string.year",-936788792);Tma=new $CLJS.N("metabase.lib.schema.literal","string","metabase.lib.schema.literal/string",-1434211409);GW=new $CLJS.N("metabase.lib.schema.literal","time","metabase.lib.schema.literal/time",1928421901);
HW=new $CLJS.N("metabase.lib.schema.literal","string.time","metabase.lib.schema.literal/string.time",1501090167);IW=new $CLJS.N("metabase.lib.schema.literal","string.date","metabase.lib.schema.literal/string.date",1716358402);JW=new $CLJS.N("metabase.lib.schema.literal","string.datetime","metabase.lib.schema.literal/string.datetime",-1597850940);$CLJS.KW=new $CLJS.N("metabase.lib.schema.literal","date","metabase.lib.schema.literal/date",-906463835);
LW=new $CLJS.N("metabase.lib.schema.literal","value.options","metabase.lib.schema.literal/value.options",-1918568845);Uma=new $CLJS.N("metabase.lib.schema.literal","integer","metabase.lib.schema.literal/integer",-1120986283);$CLJS.MW=new $CLJS.N("metabase.lib.schema.literal","string.year-month","metabase.lib.schema.literal/string.year-month",-1014149016);NW=new $CLJS.N("metabase.lib.schema.literal","boolean","metabase.lib.schema.literal/boolean",1793502815);
$CLJS.OW=new $CLJS.N("metabase.lib.schema.literal","datetime","metabase.lib.schema.literal/datetime",985830761);$CLJS.KK.o(null,$CLJS.OF,function(){return $CLJS.sl});$CLJS.rK(NW,$CLJS.pk);$CLJS.KK.o(null,$CLJS.SF,function(){return $CLJS.Fl});$CLJS.rK(NW,$CLJS.pk);$CLJS.rK(Uma,$CLJS.zt);$CLJS.KK.o(null,$CLJS.DF,function(){return $CLJS.nl});$CLJS.rK(Sma,$CLJS.yt);$CLJS.KK.o(null,$CLJS.BF,function(){return $CLJS.QJ});$CLJS.rK(Tma,$CLJS.Tl);
var Vma=[":\\d{2}",EW($CLJS.J(["\\.\\d{1,6}"]))].join(""),PW=["\\d{2}:\\d{2}",EW($CLJS.J([Vma]))].join(""),QW=["\\d{4}-\\d{2}-\\d{2}T",PW].join(""),RW=["(?:Z|(?:[+-]",PW,"))"].join(""),Wma=$CLJS.Li("^\\d{4}-\\d{2}-\\d{2}$"),Xma=$CLJS.Li(["^",PW,"$"].join("")),Yma=$CLJS.Li(["^",PW,RW,"$"].join("")),Zma=$CLJS.Li(["^",QW,"$"].join("")),$ma=$CLJS.Li(["^",QW,RW,"$"].join(""));$CLJS.rK(IW,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.st,new $CLJS.k(null,1,[$CLJS.Wu,"date string literal"],null),Wma],null));
$CLJS.rK(HW,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Gk,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.st,new $CLJS.k(null,1,[$CLJS.Wu,"local time string literal"],null),Xma],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.st,new $CLJS.k(null,1,[$CLJS.Wu,"offset time string literal"],null),Yma],null)],null));
$CLJS.rK(JW,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Gk,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.st,new $CLJS.k(null,1,[$CLJS.Wu,"local date time string literal"],null),Zma],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.st,new $CLJS.k(null,1,[$CLJS.Wu,"offset date time string literal"],null),$ma],null)],null));
$CLJS.KK.o(null,$CLJS.CF,function(a){return $CLJS.m($CLJS.DU?$CLJS.DU(JW,a):DW.call(null,JW,a))?new $CLJS.ti(null,new $CLJS.k(null,2,[$CLJS.Xl,null,$CLJS.YI,null],null),null):$CLJS.m($CLJS.DU?$CLJS.DU(IW,a):DW.call(null,IW,a))?new $CLJS.ti(null,new $CLJS.k(null,2,[$CLJS.UH,null,$CLJS.Xl,null],null),null):$CLJS.m($CLJS.DU?$CLJS.DU(HW,a):DW.call(null,HW,a))?new $CLJS.ti(null,new $CLJS.k(null,2,[$CLJS.eK,null,$CLJS.Xl,null],null),null):$CLJS.Xl});$CLJS.rK($CLJS.KW,IW);$CLJS.rK(GW,HW);
$CLJS.rK($CLJS.OW,JW);$CLJS.rK(Rma,new $CLJS.R(null,4,5,$CLJS.S,[$CLJS.Gk,$CLJS.KW,GW,$CLJS.OW],null));$CLJS.SW=$CLJS.Li("^\\d{4}-\\d{2}$");$CLJS.rK($CLJS.MW,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.st,new $CLJS.k(null,1,[$CLJS.Wu,"year-month string literal"],null),$CLJS.SW],null));$CLJS.TW=$CLJS.Li("^\\d{4}$");$CLJS.rK($CLJS.FW,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.st,new $CLJS.k(null,1,[$CLJS.Wu,"year string literal"],null),$CLJS.TW],null));
$CLJS.rK(LW,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Qt,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.DK],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.bm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.qk,$CLJS.FK],null)],null)],null));$CLJS.IU($CLJS.vl,new $CLJS.R(null,5,5,$CLJS.S,[$CLJS.tt,new $CLJS.k(null,1,[$CLJS.Wu,"Value :value clause"],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.lm,$CLJS.vl],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,LW],null),$CLJS.Lb],null));