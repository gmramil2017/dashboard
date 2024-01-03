var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./metabase.lib.hierarchy.js");require("./metabase.lib.schema.expression.js");require("./metabase.lib.schema.mbql_clause.js");require("./metabase.shared.util.i18n.js");require("./metabase.util.malli.registry.js");
'use strict';var Wla,Xla,Yla,Zla,$la,ama,bma,GV,cma,dma,ema,fma,gma,hma,ima,jma,IV,kma;$CLJS.BV=new $CLJS.N(null,"supported-field","supported-field",-2061545519);Wla=new $CLJS.N("mbql.clause","distinct","mbql.clause/distinct",843025748);$CLJS.CV=new $CLJS.N("metabase.lib.schema.aggregation","aggregations","metabase.lib.schema.aggregation/aggregations",-203649172);Xla=new $CLJS.N("mbql.clause","count-where","mbql.clause/count-where",2010666417);
Yla=new $CLJS.N("mbql.clause","sum-where","mbql.clause/sum-where",-1599647617);$CLJS.DV=new $CLJS.N(null,"requires-column?","requires-column?",1623131448);$CLJS.EV=new $CLJS.N(null,"column-name","column-name",551523580);Zla=new $CLJS.N("metabase.lib.schema.aggregation","operator","metabase.lib.schema.aggregation/operator",2070038764);$CLJS.FV=new $CLJS.N(null,"display-info","display-info",-816930907);$la=new $CLJS.N("mbql.clause","max","mbql.clause/max",1615385533);
ama=new $CLJS.N("mbql.clause","cum-count","mbql.clause/cum-count",-1408720642);bma=new $CLJS.N("mbql.clause","median","mbql.clause/median",-1026386338);GV=new $CLJS.N("metabase.lib.schema.aggregation","percentile.percentile","metabase.lib.schema.aggregation/percentile.percentile",-144637711);cma=new $CLJS.N("mbql.clause","min","mbql.clause/min",2074448531);dma=new $CLJS.N("mbql.clause","percentile","mbql.clause/percentile",2064253651);ema=new $CLJS.N("mbql.clause","stddev","mbql.clause/stddev",659381076);
fma=new $CLJS.N("mbql.clause","var","mbql.clause/var",809434920);gma=new $CLJS.N("mbql.clause","share","mbql.clause/share",-37921592);hma=new $CLJS.N("mbql.clause","count","mbql.clause/count",-454225910);ima=new $CLJS.N("mbql.clause","cum-sum","mbql.clause/cum-sum",468410018);$CLJS.HV=new $CLJS.N(null,"driver-feature","driver-feature",1905324248);jma=new $CLJS.N("mbql.clause","avg","mbql.clause/avg",1826863173);
IV=new $CLJS.N("metabase.lib.schema.aggregation","aggregation","metabase.lib.schema.aggregation/aggregation",-736862750);$CLJS.JV=new $CLJS.N("operator","aggregation","operator/aggregation",-1961510924);kma=new $CLJS.N("mbql.clause","sum","mbql.clause/sum",1691012107);$CLJS.OU($CLJS.cD,$CLJS.J([$CLJS.hu,$CLJS.nl,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.IF,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.Zs,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.TK],null)],null)],null)],null)]));$CLJS.OU($CLJS.SI,$CLJS.J([$CLJS.hu,$CLJS.nl,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.IF,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.Zs,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.TK],null)],null)],null)],null)]));
$CLJS.MU($CLJS.HI,$CLJS.J([$CLJS.hu,$CLJS.QJ,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.$K],null)],null)]));$CLJS.MU($CLJS.SH,$CLJS.J([$CLJS.hu,$CLJS.nl,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.TK],null)],null)]));$CLJS.MU($CLJS.kJ,$CLJS.J([$CLJS.hu,$CLJS.nl,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.SK],null)],null)]));
$CLJS.MU($CLJS.cm,$CLJS.J([new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.YK],null)],null)]));$CLJS.BU($CLJS.cm,$CLJS.XK);$CLJS.MU($CLJS.BJ,$CLJS.J([new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.$K],null)],null)]));$CLJS.BU($CLJS.BJ,$CLJS.XK);$CLJS.MU($CLJS.vk,$CLJS.J([new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.YK],null)],null)]));$CLJS.BU($CLJS.vk,$CLJS.XK);
$CLJS.rK(GV,new $CLJS.R(null,4,5,$CLJS.S,[$CLJS.Qj,new $CLJS.k(null,1,[$CLJS.Wu,"valid percentile"],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.$K],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.pt,new $CLJS.k(null,1,[$CLJS.Wu,"percentile must be between zero and one"],null),function(a){return 0<=a&&1>=a}],null)],null));$CLJS.MU($CLJS.rI,$CLJS.J([new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.$K],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,GV],null)]));$CLJS.BU($CLJS.rI,$CLJS.XK);
$CLJS.MU($CLJS.dJ,$CLJS.J([$CLJS.hu,$CLJS.QJ,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.SK],null)],null)]));$CLJS.MU($CLJS.GJ,$CLJS.J([$CLJS.hu,$CLJS.QJ,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.$K],null)],null)]));$CLJS.MU($CLJS.zJ,$CLJS.J([new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.$K],null)],null)]));
$CLJS.MU($CLJS.YJ,$CLJS.J([new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.$K],null)],null)]));$CLJS.BU($CLJS.zJ,$CLJS.XK);$CLJS.BU($CLJS.YJ,$CLJS.XK);$CLJS.MU($CLJS.VJ,$CLJS.J([new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.$K],null)],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.SK],null)],null)]));$CLJS.BU($CLJS.VJ,$CLJS.XK);
$CLJS.MU($CLJS.VH,$CLJS.J([$CLJS.hu,$CLJS.QJ,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.$K],null)],null)]));$CLJS.rK(IV,new $CLJS.R(null,17,5,$CLJS.S,[$CLJS.Gk,jma,hma,ama,Xla,Wla,$la,bma,cma,dma,gma,ema,kma,ima,Yla,fma,$CLJS.Lb],null));$CLJS.rK($CLJS.CV,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.rl,new $CLJS.k(null,1,[$CLJS.vk,1],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,IV],null)],null));
$CLJS.KV=new $CLJS.R(null,10,5,$CLJS.S,[new $CLJS.k(null,4,[$CLJS.QU,$CLJS.cD,$CLJS.DV,!1,$CLJS.HV,$CLJS.lH,$CLJS.FV,function(){return new $CLJS.k(null,3,[$CLJS.YH,$CLJS.bH("Count of rows"),$CLJS.EV,$CLJS.bH("Count"),$CLJS.$F,$CLJS.bH("Total number of rows in the answer.")],null)}],null),new $CLJS.k(null,5,[$CLJS.QU,$CLJS.zJ,$CLJS.BV,$CLJS.$l,$CLJS.DV,!0,$CLJS.HV,$CLJS.lH,$CLJS.FV,function(){return new $CLJS.k(null,3,[$CLJS.YH,$CLJS.bH("Sum of ..."),$CLJS.EV,$CLJS.bH("Sum"),$CLJS.$F,$CLJS.bH("Sum of all the values of a column.")],
null)}],null),new $CLJS.k(null,5,[$CLJS.QU,$CLJS.HI,$CLJS.BV,$CLJS.$l,$CLJS.DV,!0,$CLJS.HV,$CLJS.lH,$CLJS.FV,function(){return new $CLJS.k(null,3,[$CLJS.YH,$CLJS.bH("Average of ..."),$CLJS.EV,$CLJS.bH("Average"),$CLJS.$F,$CLJS.bH("Average of all the values of a column")],null)}],null),new $CLJS.k(null,5,[$CLJS.QU,$CLJS.BJ,$CLJS.BV,$CLJS.$l,$CLJS.DV,!0,$CLJS.HV,$CLJS.JI,$CLJS.FV,function(){return new $CLJS.k(null,3,[$CLJS.YH,$CLJS.bH("Median of ..."),$CLJS.EV,$CLJS.bH("Median"),$CLJS.$F,$CLJS.bH("Median of all the values of a column")],
null)}],null),new $CLJS.k(null,5,[$CLJS.QU,$CLJS.SH,$CLJS.BV,$CLJS.Et,$CLJS.DV,!0,$CLJS.HV,$CLJS.lH,$CLJS.FV,function(){return new $CLJS.k(null,3,[$CLJS.YH,$CLJS.bH("Number of distinct values of ..."),$CLJS.EV,$CLJS.bH("Distinct values"),$CLJS.$F,$CLJS.bH("Number of unique values of a column among all the rows in the answer.")],null)}],null),new $CLJS.k(null,5,[$CLJS.QU,$CLJS.YJ,$CLJS.BV,$CLJS.$l,$CLJS.DV,!0,$CLJS.HV,$CLJS.lH,$CLJS.FV,function(){return new $CLJS.k(null,3,[$CLJS.YH,$CLJS.bH("Cumulative sum of ..."),
$CLJS.EV,$CLJS.bH("Sum"),$CLJS.$F,$CLJS.bH("Additive sum of all the values of a column.\ne.x. total revenue over time.")],null)}],null),new $CLJS.k(null,4,[$CLJS.QU,$CLJS.SI,$CLJS.DV,!1,$CLJS.HV,$CLJS.lH,$CLJS.FV,function(){return new $CLJS.k(null,3,[$CLJS.YH,$CLJS.bH("Cumulative count of rows"),$CLJS.EV,$CLJS.bH("Count"),$CLJS.$F,$CLJS.bH("Additive count of the number of rows.\ne.x. total number of sales over time.")],null)}],null),new $CLJS.k(null,5,[$CLJS.QU,$CLJS.GJ,$CLJS.BV,$CLJS.$l,$CLJS.DV,
!0,$CLJS.HV,$CLJS.qJ,$CLJS.FV,function(){return new $CLJS.k(null,3,[$CLJS.YH,$CLJS.bH("Standard deviation of ..."),$CLJS.EV,$CLJS.bH("SD"),$CLJS.$F,$CLJS.bH("Number which expresses how much the values of a column vary among all rows in the answer.")],null)}],null),new $CLJS.k(null,5,[$CLJS.QU,$CLJS.vk,$CLJS.BV,$CLJS.Kk,$CLJS.DV,!0,$CLJS.HV,$CLJS.lH,$CLJS.FV,function(){return new $CLJS.k(null,3,[$CLJS.YH,$CLJS.bH("Minimum of ..."),$CLJS.EV,$CLJS.bH("Min"),$CLJS.$F,$CLJS.bH("Minimum value of a column")],
null)}],null),new $CLJS.k(null,5,[$CLJS.QU,$CLJS.cm,$CLJS.BV,$CLJS.Kk,$CLJS.DV,!0,$CLJS.HV,$CLJS.lH,$CLJS.FV,function(){return new $CLJS.k(null,3,[$CLJS.YH,$CLJS.bH("Maximum of ..."),$CLJS.EV,$CLJS.bH("Max"),$CLJS.$F,$CLJS.bH("Maximum value of a column")],null)}],null)],null);
$CLJS.rK(Zla,new $CLJS.R(null,7,5,$CLJS.S,[$CLJS.bm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.wl,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.lm,$CLJS.JV],null)],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.QU,$CLJS.th.j(new $CLJS.R(null,1,5,$CLJS.S,[$CLJS.ot],null),$CLJS.xg.g($CLJS.QU),$CLJS.KV)],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.BV,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.rt,$CLJS.Jk],null)],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.DV,$CLJS.pk],null),new $CLJS.R(null,2,
5,$CLJS.S,[$CLJS.HV,$CLJS.Jk],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.FV,$CLJS.de],null)],null));