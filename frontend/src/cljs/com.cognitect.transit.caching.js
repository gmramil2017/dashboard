var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./com.cognitect.transit.delimiters.js");
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

$CLJS.SHADOW_ENV.setLoaded("com.cognitect.transit.caching.js");

goog.provide("com.cognitect.transit.caching");
goog.require("com.cognitect.transit.delimiters");
goog.scope(function() {
  var caching = com.cognitect.transit.caching, d = com.cognitect.transit.delimiters;
  caching.MIN_SIZE_CACHEABLE = 3;
  caching.BASE_CHAR_IDX = 48;
  caching.CACHE_CODE_DIGITS = 44;
  caching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS * caching.CACHE_CODE_DIGITS;
  caching.MAX_CACHE_SIZE = 4096;
  caching.isCacheable = function(string, asMapKey) {
    if (string.length > caching.MIN_SIZE_CACHEABLE) {
      if (asMapKey) {
        return true;
      } else {
        var c0 = string.charAt(0), c1 = string.charAt(1);
        if (c0 === d.ESC) {
          return c1 === ":" || c1 === "$" || c1 === "#";
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  };
  caching.idxToCode = function(idx) {
    var hi = Math.floor(idx / caching.CACHE_CODE_DIGITS), lo = idx % caching.CACHE_CODE_DIGITS, loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX);
    if (hi === 0) {
      return d.SUB + loc;
    } else {
      return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;
    }
  };
  caching.WriteCache = function() {
    this.idx = 0;
    this.gen = 0;
    this.cacheSize = 0;
    this.cache = {};
  };
  caching.WriteCache.prototype.write = function(string, asMapKey) {
    if (caching.isCacheable(string, asMapKey)) {
      if (this.cacheSize === caching.MAX_CACHE_SIZE) {
        this.clear();
        this.gen = 0;
        this.cache = {};
      } else if (this.idx === caching.MAX_CACHE_ENTRIES) {
        this.clear();
      }
      var entry = this.cache[string];
      if (entry == null) {
        this.cache[string] = [caching.idxToCode(this.idx), this.gen];
        this.idx++;
        return string;
      } else if (entry[1] != this.gen) {
        entry[1] = this.gen;
        entry[0] = caching.idxToCode(this.idx);
        this.idx++;
        return string;
      } else {
        return entry[0];
      }
    } else {
      return string;
    }
  };
  caching.WriteCache.prototype.clear = function Transit$WriteCache() {
    this.idx = 0;
    this.gen++;
  };
  caching.writeCache = function() {
    return new caching.WriteCache();
  };
  caching.isCacheCode = function(string) {
    return string.charAt(0) === d.SUB && string.charAt(1) !== " ";
  };
  caching.codeToIdx = function(code) {
    if (code.length === 2) {
      return code.charCodeAt(1) - caching.BASE_CHAR_IDX;
    } else {
      var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS, lo = code.charCodeAt(2) - caching.BASE_CHAR_IDX;
      return hi + lo;
    }
  };
  caching.ReadCache = function Transit$ReadCache() {
    this.idx = 0;
    this.cache = [];
  };
  caching.ReadCache.prototype.write = function(obj, asMapKey) {
    if (this.idx == caching.MAX_CACHE_ENTRIES) {
      this.idx = 0;
    }
    this.cache[this.idx] = obj;
    this.idx++;
    return obj;
  };
  caching.ReadCache.prototype.read = function(string, asMapKey) {
    return this.cache[caching.codeToIdx(string)];
  };
  caching.ReadCache.prototype.clear = function() {
    this.idx = 0;
  };
  caching.readCache = function() {
    return new caching.ReadCache();
  };
});

module.exports = com.cognitect.transit.caching;

//# sourceMappingURL=com.cognitect.transit.caching.js.map
