var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./lambdaisland.glogi.js");require("./lambdaisland.glogi.console.js");
'use strict';var Afa,Bfa,VE,WE,Cfa,XE,YE,Dfa;Afa=function(){};Bfa=function(){return!1};VE=function(){};WE=function(a,b){if(null!=a&&null!=a.sh)a=a.sh(a,b);else{var c=WE[$CLJS.Na(null==a?null:a)];if(null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else if(c=WE._,null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else throw $CLJS.Ob("IEncodeClojure.-js-\x3eclj",a);}return a};Cfa=function(a,b){b=$CLJS.Q.j($CLJS.U,$CLJS.Ua(a,"__glogi_handlers__"),b);a.__glogi_handlers__=b};
XE=function(a,b){function c(e){e=new $CLJS.k(null,6,[$CLJS.sfa,e.fj,$CLJS.QD,e.hj,$CLJS.Qu,$CLJS.Ui.g(e.Mg.name.toLowerCase()),$CLJS.Dk,e.Ri,$CLJS.KD,e.Rh,$CLJS.VD,e.$f],null);return b.g?b.g(e):b.call(null,e)}a=$CLJS.yD($CLJS.AD(a));if($CLJS.m(a)){var d=$CLJS.M.h($CLJS.Ua(a,"__glogi_handlers__"),b);$CLJS.m(d)&&("undefined"!==typeof $CLJS.Aa&&"undefined"!==typeof $CLJS.BD&&"undefined"!==typeof Bfa||a.Tj(d));Cfa(a,$CLJS.J([b,c]));return null==a?null:"undefined"!==typeof $CLJS.Aa&&"undefined"!==typeof $CLJS.BD&&
"undefined"!==typeof Afa?void 0:a.Aj(c)}return null};YE=function(a){return XE("",a)};Dfa=function(a){switch(arguments.length){case 1:YE(arguments[0]);break;case 2:XE(arguments[0],arguments[1]);break;default:throw Error(["Invalid arity: ",$CLJS.p.g(arguments.length)].join(""));}};
$CLJS.ZE=function(a,b){var c=$CLJS.Uf(b);c=$CLJS.M.h(c,$CLJS.kk);var d=$CLJS.m(c)?$CLJS.Ui:$CLJS.p;return function g(f){return(null!=f?$CLJS.t===f.Ej||(f.nd?0:$CLJS.Mb(VE,f)):$CLJS.Mb(VE,f))?WE(f,$CLJS.Q.h($CLJS.ln,b)):$CLJS.we(f)?$CLJS.Ii($CLJS.xg.h(g,f)):$CLJS.Og(f)?new $CLJS.Ke(g($CLJS.tc(f)),g($CLJS.uc(f))):$CLJS.ke(f)?$CLJS.th.j($CLJS.ae(f),$CLJS.xg.g(g),f):$CLJS.Cb(f)?$CLJS.Vc($CLJS.Tb(function(l,n){return $CLJS.Mf(l,g(n))},$CLJS.Tc($CLJS.Rg),f)):$CLJS.Nb(f)===Object?$CLJS.Vc($CLJS.Tb(function(l,
n){return $CLJS.xh.j(l,d.g?d.g(n):d.call(null,n),g($CLJS.Ua(f,n)))},$CLJS.Tc($CLJS.P),$CLJS.Ta(f))):f}(a)};$CLJS.$E=function(a){return $CLJS.ZE(a,$CLJS.J([$CLJS.kk,!1]))};$CLJS.aF=new $CLJS.N(null,"date-style","date-style",-192846325);$CLJS.Efa=new $CLJS.N(null,"fatal","fatal",1874419888);$CLJS.bF=new $CLJS.N(null,"weekday-enabled","weekday-enabled",-1447123049);$CLJS.cF=new $CLJS.N(null,"time-enabled","time-enabled",-1856094894);$CLJS.dF=new $CLJS.N(null,"time-style","time-style",-1943466186);
$CLJS.eF=new $CLJS.N(null,"date-enabled","date-enabled",1961030769);$CLJS.m(null)&&null.setCapturing(!1);var fF,gF="undefined"!==typeof devtools&&"undefined"!==typeof devtools.core&&"undefined"!==typeof devtools.core.installed_QMARK_;fF=gF?devtools.core.installed_QMARK_():gF;
var hF=$CLJS.m(fF)?$CLJS.xfa:"undefined"===typeof window||"undefined"!==typeof window&&"undefined"!==typeof window&&"undefined"!==typeof window.navigator&&"undefined"!==typeof window&&"undefined"!==typeof window.navigator&&"undefined"!==typeof window.navigator.userAgent&&(-1<window.navigator.userAgent.indexOf("MSIE")||-1<window.navigator.userAgent.indexOf("Trident"))?$CLJS.zfa:$CLJS.yfa;YE?YE(hF):Dfa.call(null,hF);$CLJS.GD(new $CLJS.k(null,1,[$CLJS.zD,$CLJS.RD],null));