var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./clojure.set.js");require("./metabase.util.malli.registry.js");
'use strict';var zla,Ala,Bla,Cla,Dla,Ela,Fla;$CLJS.SU=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.date-time","metabase.lib.schema.temporal-bucketing/unit.date-time",1924841408);zla=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.date-time.extract","metabase.lib.schema.temporal-bucketing/unit.date-time.extract",1230935001);Ala=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.time","metabase.lib.schema.temporal-bucketing/unit.time",713582593);
$CLJS.TU=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.date-time.truncate","metabase.lib.schema.temporal-bucketing/unit.date-time.truncate",686665771);$CLJS.UU=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.time.interval","metabase.lib.schema.temporal-bucketing/unit.time.interval",-718964325);$CLJS.VU=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.date","metabase.lib.schema.temporal-bucketing/unit.date",1876937510);
Bla=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.time.extract","metabase.lib.schema.temporal-bucketing/unit.time.extract",-456342719);Cla=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.date.truncate","metabase.lib.schema.temporal-bucketing/unit.date.truncate",1199064479);Dla=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.date.extract","metabase.lib.schema.temporal-bucketing/unit.date.extract",1595055425);
Ela=new $CLJS.N("metabase.lib.schema.temporal-bucketing","option","metabase.lib.schema.temporal-bucketing/option",-1756789401);$CLJS.WU=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.date-time.interval","metabase.lib.schema.temporal-bucketing/unit.date-time.interval",659301368);$CLJS.XU=new $CLJS.N("option","temporal-bucketing","option/temporal-bucketing",-108914562);$CLJS.YU=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit","metabase.lib.schema.temporal-bucketing/unit",1808010880);
$CLJS.ZU=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.date.interval","metabase.lib.schema.temporal-bucketing/unit.date.interval",-1463811525);Fla=new $CLJS.N("metabase.lib.schema.temporal-bucketing","unit.time.truncate","metabase.lib.schema.temporal-bucketing/unit.time.truncate",-948820335);var $U=new $CLJS.R(null,7,5,$CLJS.S,[$CLJS.rk,$CLJS.zl,$CLJS.yl,$CLJS.Zj,$CLJS.fm,$CLJS.lk,$CLJS.Oj],null),aV=$CLJS.yi($U),Gla,Ila,jV;$CLJS.rK(Dla,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid date extraction unit"],null)],null),aV));var bV=new $CLJS.R(null,5,5,$CLJS.S,[$CLJS.oz,$CLJS.cl,$CLJS.ol,$CLJS.Yj,$CLJS.Oj],null),cV=$CLJS.yi(bV);
$CLJS.rK(Cla,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid date truncation unit"],null)],null),cV));$CLJS.dV=$CLJS.th.j($CLJS.Rg,$CLJS.on.A(),$CLJS.wg.h(bV,$U));Gla=$CLJS.yi($CLJS.dV);$CLJS.rK($CLJS.VU,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid date bucketing unit"],null)],null),Gla));var eV=new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.Wk,$CLJS.gk],null),fV=$CLJS.yi(eV);
$CLJS.rK(Bla,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid time extraction unit"],null)],null),fV));var gV=new $CLJS.R(null,4,5,$CLJS.S,[$CLJS.lz,$CLJS.kz,$CLJS.mz,$CLJS.nz],null),hV=$CLJS.yi(gV);$CLJS.rK(Fla,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid time truncation unit"],null)],null),hV));
$CLJS.Hla=$CLJS.th.j($CLJS.Rg,$CLJS.Rm.h($CLJS.Um.g(new $CLJS.ti(null,new $CLJS.k(null,2,[$CLJS.kz,null,$CLJS.lz,null],null),null)),$CLJS.on.A()),$CLJS.wg.h(gV,eV));Ila=$CLJS.yi(eV);$CLJS.rK(Ala,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid time bucketing unit"],null)],null),Ila));$CLJS.iV=$CLJS.th.j($CLJS.Rg,$CLJS.Rm.h($CLJS.Um.g(new $CLJS.ti(null,new $CLJS.k(null,2,[$CLJS.kz,null,$CLJS.lz,null],null),null)),$CLJS.on.A()),$CLJS.wg.l(gV,bV,$CLJS.J([eV,$U])));
jV=$CLJS.yi($CLJS.iV);$CLJS.rK($CLJS.SU,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid datetime bucketing unit"],null)],null),jV));var Jla=$CLJS.mf.h(jV,$CLJS.Uj);$CLJS.rK($CLJS.YU,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid temporal bucketing unit"],null)],null),Jla));var Kla=$CLJS.pz.h(cV,hV);
$CLJS.rK($CLJS.TU,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid datetime truncation unit"],null)],null),Kla));$CLJS.kV=$CLJS.pz.h(aV,fV);$CLJS.rK(zla,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid datetime extraction unit"],null)],null),$CLJS.kV));var lV=$CLJS.mf.h(cV,$CLJS.Oj);$CLJS.rK($CLJS.ZU,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid date interval unit"],null)],null),lV));
$CLJS.rK($CLJS.UU,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid time interval unit"],null)],null),hV));var Lla=$CLJS.pz.h(lV,hV);$CLJS.rK($CLJS.WU,$CLJS.th.h(new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.ot,new $CLJS.k(null,1,[$CLJS.Wu,"Valid datetime interval unit"],null)],null),Lla));
$CLJS.rK(Ela,new $CLJS.R(null,4,5,$CLJS.S,[$CLJS.bm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.wl,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.lm,$CLJS.XU],null)],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.bk,$CLJS.YU],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Uj,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),$CLJS.pk],null)],null));