var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./metabase.lib.schema.aggregation.js");require("./metabase.lib.schema.common.js");require("./metabase.lib.schema.expression.js");require("./metabase.lib.schema.expression.arithmetic.js");require("./metabase.lib.schema.expression.conditional.js");require("./metabase.lib.schema.expression.string.js");require("./metabase.lib.schema.expression.temporal.js");require("./metabase.lib.schema.filter.js");require("./metabase.lib.schema.id.js");require("./metabase.lib.schema.join.js");require("./metabase.lib.schema.literal.js");require("./metabase.lib.schema.order_by.js");require("./metabase.lib.schema.ref.js");require("./metabase.lib.schema.template_tag.js");require("./metabase.lib.schema.util.js");require("./metabase.mbql.util.match.js");require("./metabase.util.malli.registry.js");
'use strict';var Una,YY,ZY,Wna,$Y,aZ,cZ,dZ,eZ,fZ,gZ,iZ,jZ,kZ,Xna,nZ,oZ,Vna;Una=function(a){function b(d){return $CLJS.yg(c,$CLJS.J([$CLJS.fO.g(d)]))}function c(d){return $CLJS.pf($CLJS.qI.g(d),$CLJS.yg(b,$CLJS.J([$CLJS.yY.g(d)])))}return $CLJS.m($CLJS.XY.g(a))?$CLJS.eg(!0):$CLJS.yi(b(a))};
YY=function(a){for(var b=$CLJS.eg(!1),c=$CLJS.A(a),d=$CLJS.C(c),e=$CLJS.D(c),f=b,g=0,l=a;;){var n=f,q=g,u=l,v=$CLJS.A(u),x=$CLJS.C(v),z=$CLJS.D(v),B=x,H=z,I=$CLJS.Tm.h(n,Una(B));f=$CLJS.C($CLJS.A($CLJS.Ag($CLJS.Gb,function(T,W,ba,ha,pa,Ga){return function Zb(Hb,Rb){try{if($CLJS.qe(Rb)&&3===$CLJS.E(Rb))try{var qc=$CLJS.G(Rb,0);if($CLJS.O(qc,$CLJS.PP))try{var Eb=$CLJS.G(Rb,1);if($CLJS.m($CLJS.yP.g(Eb)))try{var Sb=$CLJS.G(Rb,1);if(null!=Sb?Sb.D&256||$CLJS.t===Sb.He||(Sb.D?0:$CLJS.Mb($CLJS.kc,Sb)):$CLJS.Mb($CLJS.kc,
Sb))try{var Hd=$CLJS.M.j(Sb,$CLJS.yP,$CLJS.lP);if($CLJS.m($CLJS.dg(ha)(Hd))){var Ct=$CLJS.M.h(Sb,$CLJS.yP);$CLJS.G(Rb,2);return new $CLJS.R(null,1,5,$CLJS.S,[["Invalid :field reference in stage ",$CLJS.p.g(Ga),": no join named ",$CLJS.gj.l($CLJS.J([Ct]))].join("")],null)}throw $CLJS.Z;}catch(mg){if(mg instanceof Error){var uh=mg;if(uh===$CLJS.Z)throw $CLJS.Z;throw uh;}throw mg;}else throw $CLJS.Z;}catch(mg){if(mg instanceof Error){uh=mg;if(uh===$CLJS.Z)throw $CLJS.Z;throw uh;}throw mg;}else throw $CLJS.Z;
}catch(mg){if(mg instanceof Error){uh=mg;if(uh===$CLJS.Z)throw $CLJS.Z;throw uh;}throw mg;}else throw $CLJS.Z;}catch(mg){if(mg instanceof Error){uh=mg;if(uh===$CLJS.Z)throw $CLJS.Z;throw uh;}throw mg;}else throw $CLJS.Z;}catch(mg){if(mg instanceof Error){uh=mg;if(uh===$CLJS.Z)return $CLJS.WY(Zb,Hb,Rb);throw uh;}throw mg;}}}(f,g,l,I,n,q,u,v,x,z,B,H,b,0,a,a,c,d,e,d,e)($CLJS.Rg,$CLJS.Jm.l(B,$CLJS.fO,$CLJS.J([Vna]))))));if($CLJS.m(f))return f;if($CLJS.A(H))g=q+1,f=I,l=H;else return null}};
ZY=new $CLJS.N("metabase.lib.schema","breakouts","metabase.lib.schema/breakouts",1354104361);Wna=new $CLJS.N("metabase.lib.schema","stage","metabase.lib.schema/stage",1626908550);$Y=new $CLJS.N("metabase.lib.schema","stage.mbql.with-source-table","metabase.lib.schema/stage.mbql.with-source-table",-2119049176);aZ=new $CLJS.N("metabase.lib.schema","stage.mbql.with-source-card","metabase.lib.schema/stage.mbql.with-source-card",-1292215799);$CLJS.bZ=new $CLJS.N("mbql.stage","mbql","mbql.stage/mbql",1578747798);
cZ=new $CLJS.N("metabase.lib.schema","stage.additional","metabase.lib.schema/stage.additional",1347605157);dZ=new $CLJS.N("metabase.lib.schema","stage.mbql.with-source","metabase.lib.schema/stage.mbql.with-source",1947556064);eZ=new $CLJS.N("metabase.lib.schema","stage.native","metabase.lib.schema/stage.native",-1206212320);fZ=new $CLJS.N("metabase.lib.schema","stage.mbql.without-source","metabase.lib.schema/stage.mbql.without-source",1507072886);
gZ=new $CLJS.N("metabase.lib.schema","stage.type","metabase.lib.schema/stage.type",1362996639);$CLJS.hZ=new $CLJS.N("mbql.stage","native","mbql.stage/native",359422194);iZ=new $CLJS.N("metabase.lib.schema","filters","metabase.lib.schema/filters",889389881);jZ=new $CLJS.N("metabase.lib.schema","fields","metabase.lib.schema/fields",-2010307316);kZ=new $CLJS.N("metabase.lib.schema","stage.valid-refs","metabase.lib.schema/stage.valid-refs",-383625241);
$CLJS.lZ=new $CLJS.N("mbql","query","mbql/query",-1285688662);$CLJS.XY=new $CLJS.N(null,"source-card","source-card",-1580820390);Xna=new $CLJS.N("metabase.lib.schema","query","metabase.lib.schema/query",-1207387140);$CLJS.mZ=new $CLJS.N(null,"filters","filters",974726919);nZ=new $CLJS.N("metabase.lib.schema","stages.valid-refs","metabase.lib.schema/stages.valid-refs",-193458245);oZ=new $CLJS.N("metabase.lib.schema","stage.initial","metabase.lib.schema/stage.initial",-1483255395);
$CLJS.pZ=new $CLJS.N("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388);Vna=new $CLJS.N("stage","metadata","stage/metadata",1707239131);$CLJS.rK(eZ,new $CLJS.R(null,6,5,$CLJS.S,[$CLJS.bm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.wl,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.lm,$CLJS.hZ],null)],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.fQ,$CLJS.Gb],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.pl,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.rl,$CLJS.Lb],null)],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.AO,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),$CLJS.zK],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.uQ,new $CLJS.k(null,1,[$CLJS.Wj,
!0],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.IY],null)],null)],null));$CLJS.rK(ZY,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.rl,new $CLJS.k(null,1,[$CLJS.vk,1],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.RU],null)],null));$CLJS.rK(jZ,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.rl,new $CLJS.k(null,1,[$CLJS.vk,1],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.RU],null)],null));
$CLJS.rK(iZ,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.rl,new $CLJS.k(null,1,[$CLJS.vk,1],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.SK],null)],null));
var qZ=$CLJS.Tm.h(function(a){var b=$CLJS.th.j($CLJS.ui,$CLJS.xg.g($CLJS.Rm.h($CLJS.VK,$CLJS.Zd)),$CLJS.aQ.g(a));return $CLJS.C($CLJS.A($CLJS.Ag($CLJS.Gb,function f(d,e){try{if($CLJS.qe(e)&&3===$CLJS.E(e))try{var g=$CLJS.G(e,0);if($CLJS.O(g,$CLJS.IF))try{var l=$CLJS.G(e,2);if($CLJS.m($CLJS.dg(b)(l))){var n=$CLJS.G(e,2);$CLJS.G(e,1);return new $CLJS.R(null,1,5,$CLJS.S,[["Invalid :expression reference: no expression named ",$CLJS.gj.l($CLJS.J([n]))].join("")],null)}throw $CLJS.Z;}catch(u){if(u instanceof
Error){var q=u;if(q===$CLJS.Z)throw $CLJS.Z;throw q;}throw u;}else throw $CLJS.Z;}catch(u){if(u instanceof Error){q=u;if(q===$CLJS.Z)throw $CLJS.Z;throw q;}throw u;}else throw $CLJS.Z;}catch(u){if(u instanceof Error){q=u;if(q===$CLJS.Z)return $CLJS.WY(f,d,e);throw q;}throw u;}}($CLJS.Rg,$CLJS.Jm.l(a,$CLJS.fO,$CLJS.J([$CLJS.SY]))))))},function(a){var b=$CLJS.th.j($CLJS.ui,$CLJS.xg.g($CLJS.Rm.h($CLJS.EK,$CLJS.Zd)),$CLJS.ZO.g(a));return $CLJS.C($CLJS.A($CLJS.Ag($CLJS.Gb,function f(d,e){try{if($CLJS.qe(e)&&
3===$CLJS.E(e))try{var g=$CLJS.G(e,0);if($CLJS.O(g,$CLJS.ZO))try{var l=$CLJS.G(e,2);if($CLJS.m($CLJS.dg(b)(l))){var n=$CLJS.G(e,2);$CLJS.G(e,1);return new $CLJS.R(null,1,5,$CLJS.S,[["Invalid :aggregation reference: no aggregation with uuid ",$CLJS.p.g(n)].join("")],null)}throw $CLJS.Z;}catch(u){if(u instanceof Error){var q=u;if(q===$CLJS.Z)throw $CLJS.Z;throw q;}throw u;}else throw $CLJS.Z;}catch(u){if(u instanceof Error){q=u;if(q===$CLJS.Z)throw $CLJS.Z;throw q;}throw u;}else throw $CLJS.Z;}catch(u){if(u instanceof
Error){q=u;if(q===$CLJS.Z)return $CLJS.WY(f,d,e);throw q;}throw u;}}($CLJS.Rg,$CLJS.Jm.l(a,$CLJS.fO,$CLJS.J([$CLJS.SY]))))))});$CLJS.rK(kZ,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.pt,new $CLJS.k(null,2,[$CLJS.Wu,"Valid references for a single query stage",$CLJS.Yu,function(a){a=$CLJS.Uf(a);a=$CLJS.M.h(a,$CLJS.vl);return qZ(a)}],null),$CLJS.dg(qZ)],null));
$CLJS.rK($CLJS.pZ,new $CLJS.R(null,5,5,$CLJS.S,[$CLJS.Qj,new $CLJS.R(null,11,5,$CLJS.S,[$CLJS.bm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.wl,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.lm,$CLJS.bZ],null)],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.fO,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.wY],null)],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.aQ,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.QK],null)],null),new $CLJS.R(null,3,5,$CLJS.S,
[$CLJS.SO,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),ZY],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.ZO,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.CV],null)],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.AH,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),jZ],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.mZ,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),iZ],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.kR,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.DY],
null)],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.kP,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.tU],null)],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.XY,new $CLJS.k(null,1,[$CLJS.Wj,!0],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.uU],null)],null)],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.pt,new $CLJS.k(null,1,[$CLJS.Wu,":source-query is not allowed in pMBQL queries."],null),function(a){return!$CLJS.Ie(a,$CLJS.xQ)}],null),new $CLJS.R(null,3,5,$CLJS.S,
[$CLJS.pt,new $CLJS.k(null,1,[$CLJS.Wu,"A query cannot have both a :source-table and a :source-card."],null),$CLJS.dg($CLJS.Sm.h($CLJS.kP,$CLJS.XY))],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,kZ],null)],null));$CLJS.rK($Y,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Qt,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.pZ],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.bm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.kP,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.tU],null)],null)],null)],null));
$CLJS.rK(aZ,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Qt,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.pZ],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.bm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.XY,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.uU],null)],null)],null)],null));$CLJS.rK(dZ,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Gk,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$Y],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,aZ],null)],null));
$CLJS.rK(fZ,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Qj,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.pZ],null),new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.pt,new $CLJS.k(null,1,[$CLJS.Wu,"Only the initial stage of a query can have a :source-table or :source-card."],null),$CLJS.dg($CLJS.Tm.h($CLJS.kP,$CLJS.XY))],null)],null));$CLJS.rK(gZ,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.ot,$CLJS.hZ,$CLJS.bZ],null));
$CLJS.rK(Wna,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Qj,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.bm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.wl,gZ],null)],null),new $CLJS.R(null,4,5,$CLJS.S,[$CLJS.vt,new $CLJS.k(null,1,[$CLJS.Bk,$CLJS.wl],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hZ,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,eZ],null)],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.bZ,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.pZ],null)],null)],null)],null));
$CLJS.rK(oZ,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Qj,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.bm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.wl,gZ],null)],null),new $CLJS.R(null,4,5,$CLJS.S,[$CLJS.vt,new $CLJS.k(null,1,[$CLJS.Bk,$CLJS.wl],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hZ,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,eZ],null)],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.bZ,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,dZ],null)],null)],null)],null));$CLJS.rK(cZ,fZ);
$CLJS.rK(nZ,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.pt,new $CLJS.k(null,2,[$CLJS.Wu,"Valid references for all query stages",$CLJS.Yu,function(a){a=$CLJS.Uf(a);a=$CLJS.M.h(a,$CLJS.vl);return YY.g?YY.g(a):YY.call(null,a)}],null),$CLJS.dg(YY)],null));
$CLJS.rK($CLJS.uY,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Qj,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.ft,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,oZ],null)],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.sm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.hm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,cZ],null)],null)],null)],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,nZ],null)],null));
$CLJS.rK(Xna,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Qj,new $CLJS.R(null,4,5,$CLJS.S,[$CLJS.bm,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.wl,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.lm,$CLJS.lZ],null)],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.YP,new $CLJS.R(null,3,5,$CLJS.S,[$CLJS.Gk,$CLJS.vU,$CLJS.wU],null)],null),new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.yY,new $CLJS.R(null,2,5,$CLJS.S,[$CLJS.nq,$CLJS.uY],null)],null)],null),$CLJS.Tna],null));