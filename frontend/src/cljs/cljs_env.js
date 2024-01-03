var $CLJS = {};
var CLJS_GLOBAL = global;
var CLOSURE_DEFINES = CLJS_GLOBAL.CLOSURE_DEFINES = $CLJS.CLOSURE_DEFINES = {"shadow.cljs.devtools.client.env.repl_pprint":false,"shadow.cljs.devtools.client.env.reload_strategy":"optimized","shadow.cljs.devtools.client.env.devtools_url":"","shadow.cljs.devtools.client.env.autoload":true,"shadow.cljs.devtools.client.env.proc_id":"b5260258-129f-4479-ac58-31e3c3b5497f","shadow.cljs.devtools.client.env.use_document_protocol":false,"goog.ENABLE_DEBUG_LOADER":false,"shadow.cljs.devtools.client.env.server_port":9630,"shadow.cljs.devtools.client.env.server_token":"0a6a6872-896b-417a-be22-323a0cccf2f8","shadow.cljs.devtools.client.env.use_document_host":true,"shadow.cljs.devtools.client.env.module_format":"js","goog.LOCALE":"en","shadow.cljs.devtools.client.env.build_id":"app","shadow.cljs.devtools.client.env.ignore_warnings":false,"goog.DEBUG":true,"shadow.cljs.devtools.client.env.log":true,"shadow.cljs.devtools.client.env.ssl":false,"shadow.cljs.devtools.client.env.enabled":true,"shadow.cljs.devtools.client.env.server_host":"localhost","shadow.cljs.devtools.client.env.worker_client_id":2,"goog.TRANSPILE":"never"};
CLJS_GLOBAL.CLOSURE_NO_DEPS = true;
CLJS_GLOBAL.$CLJS = $CLJS;
global.shadow$provide = {};
var goog = $CLJS.goog = {};
var COMPILED = false;
var goog = goog || {};
goog.global = global;
goog.global.CLOSURE_UNCOMPILED_DEFINES;
goog.global.CLOSURE_DEFINES;
goog.exportPath_ = function(name, object, overwriteImplicit, objectToExportTo) {
  var parts = name.split(".");
  var cur = objectToExportTo || goog.global;
  if (!(parts[0] in cur) && typeof cur.execScript != "undefined") {
    cur.execScript("var " + parts[0]);
  }
  for (var part; parts.length && (part = parts.shift());) {
    if (!parts.length && object !== undefined) {
      if (!overwriteImplicit && goog.isObject(object) && goog.isObject(cur[part])) {
        for (var prop in object) {
          if (object.hasOwnProperty(prop)) {
            cur[part][prop] = object[prop];
          }
        }
      } else {
        cur[part] = object;
      }
    } else if (cur[part] && cur[part] !== Object.prototype[part]) {
      cur = cur[part];
    } else {
      cur = cur[part] = {};
    }
  }
};
goog.define = function(name, defaultValue) {
  var value = defaultValue;
  if (!COMPILED) {
    var uncompiledDefines = goog.global.CLOSURE_UNCOMPILED_DEFINES;
    var defines = goog.global.CLOSURE_DEFINES;
    if (uncompiledDefines && uncompiledDefines.nodeType === undefined && Object.prototype.hasOwnProperty.call(uncompiledDefines, name)) {
      value = uncompiledDefines[name];
    } else if (defines && defines.nodeType === undefined && Object.prototype.hasOwnProperty.call(defines, name)) {
      value = defines[name];
    }
  }
  return value;
};
goog.FEATURESET_YEAR = goog.define("goog.FEATURESET_YEAR", 2012);
goog.DEBUG = goog.define("goog.DEBUG", true);
goog.LOCALE = goog.define("goog.LOCALE", "en");
goog.TRUSTED_SITE = goog.define("goog.TRUSTED_SITE", true);
goog.DISALLOW_TEST_ONLY_CODE = goog.define("goog.DISALLOW_TEST_ONLY_CODE", COMPILED && !goog.DEBUG);
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = goog.define("goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING", false);
goog.provide = function(name) {
  if (goog.isInModuleLoader_()) {
    throw new Error("goog.provide cannot be used within a module.");
  }
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      throw new Error('Namespace "' + name + '" already declared.');
    }
  }
  goog.constructNamespace_(name);
};
goog.constructNamespace_ = function(name, object, overwriteImplicit) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[name];
    var namespace = name;
    while (namespace = namespace.substring(0, namespace.lastIndexOf("."))) {
      if (goog.getObjectByName(namespace)) {
        break;
      }
      goog.implicitNamespaces_[namespace] = true;
    }
  }
  goog.exportPath_(name, object, overwriteImplicit);
};
goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.getScriptNonce_ = function(opt_window) {
  var doc = (opt_window || goog.global).document;
  var script = doc.querySelector && doc.querySelector("script[nonce]");
  if (script) {
    var nonce = script["nonce"] || script.getAttribute("nonce");
    if (nonce && goog.NONCE_PATTERN_.test(nonce)) {
      return nonce;
    }
  }
  return "";
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(name) {
  if (typeof name !== "string" || !name || name.search(goog.VALID_MODULE_RE_) == -1) {
    throw new Error("Invalid module identifier");
  }
  if (!goog.isInGoogModuleLoader_()) {
    throw new Error("Module " + name + " has been loaded incorrectly. Note, " + "modules cannot be loaded as normal scripts. They require some kind of " + "pre-processing step. You're likely trying to load a module via a " + "script tag or as a part of a concatenated bundle without rewriting the " + "module. For more info see: " + "https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw new Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = name;
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      throw new Error('Namespace "' + name + '" already declared.');
    }
    delete goog.implicitNamespaces_[name];
  }
};
goog.module.get = function(name) {
  return goog.module.getInternal_(name);
};
goog.module.getInternal_ = function(name) {
  if (!COMPILED) {
    if (name in goog.loadedModules_) {
      return goog.loadedModules_[name].exports;
    } else if (!goog.implicitNamespaces_[name]) {
      var ns = goog.getObjectByName(name);
      return ns != null ? ns : null;
    }
  }
  return null;
};
goog.ModuleType = {ES6:"es6", GOOG:"goog"};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
};
goog.isInGoogModuleLoader_ = function() {
  return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
};
goog.isInEs6ModuleLoader_ = function() {
  var inLoader = !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6;
  if (inLoader) {
    return true;
  }
  var jscomp = goog.global["$jscomp"];
  if (jscomp) {
    if (typeof jscomp.getCurrentModulePath != "function") {
      return false;
    }
    return !!jscomp.getCurrentModulePath();
  }
  return false;
};
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInGoogModuleLoader_()) {
    throw new Error("goog.module.declareLegacyNamespace must be called from " + "within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw new Error("goog.module must be called prior to " + "goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = true;
};
goog.declareModuleId = function(namespace) {
  if (!COMPILED) {
    if (!goog.isInEs6ModuleLoader_()) {
      throw new Error("goog.declareModuleId may only be called from " + "within an ES6 module");
    }
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) {
      throw new Error("goog.declareModuleId may only be called once per module.");
    }
    if (namespace in goog.loadedModules_) {
      throw new Error('Module with namespace "' + namespace + '" already exists.');
    }
  }
  if (goog.moduleLoaderState_) {
    goog.moduleLoaderState_.moduleName = namespace;
  } else {
    var jscomp = goog.global["$jscomp"];
    if (!jscomp || typeof jscomp.getCurrentModulePath != "function") {
      throw new Error('Module with namespace "' + namespace + '" has been loaded incorrectly.');
    }
    var exports = jscomp.require(jscomp.getCurrentModulePath());
    goog.loadedModules_[namespace] = {exports:exports, type:goog.ModuleType.ES6, moduleId:namespace};
  }
};
goog.setTestOnly = function(opt_message) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    opt_message = opt_message || "";
    throw new Error("Importing test-only code into non-debug environment" + (opt_message ? ": " + opt_message : "."));
  }
};
goog.forwardDeclare = function(name) {
};
goog.forwardDeclare("Document");
goog.forwardDeclare("HTMLScriptElement");
goog.forwardDeclare("XMLHttpRequest");
if (!COMPILED) {
  goog.isProvided_ = function(name) {
    return name in goog.loadedModules_ || !goog.implicitNamespaces_[name] && goog.getObjectByName(name) != null;
  };
  goog.implicitNamespaces_ = {"goog.module":true};
}
goog.getObjectByName = function(name, opt_obj) {
  var parts = name.split(".");
  var cur = opt_obj || goog.global;
  for (var i = 0; i < parts.length; i++) {
    cur = cur[parts[i]];
    if (cur == null) {
      return null;
    }
  }
  return cur;
};
goog.addDependency = function(relPath, provides, requires, opt_loadFlags) {
  if (!COMPILED && goog.DEPENDENCIES_ENABLED) {
    goog.debugLoader_.addDependency(relPath, provides, requires, opt_loadFlags);
  }
};
goog.ENABLE_DEBUG_LOADER = goog.define("goog.ENABLE_DEBUG_LOADER", true);
goog.logToConsole_ = function(msg) {
  if (goog.global.console) {
    goog.global.console["error"](msg);
  }
};
goog.require = function(namespace) {
  if (!COMPILED) {
    if (goog.ENABLE_DEBUG_LOADER) {
      goog.debugLoader_.requested(namespace);
    }
    if (goog.isProvided_(namespace)) {
      if (goog.isInModuleLoader_()) {
        return goog.module.getInternal_(namespace);
      }
    } else if (goog.ENABLE_DEBUG_LOADER) {
      var moduleLoaderState = goog.moduleLoaderState_;
      goog.moduleLoaderState_ = null;
      try {
        goog.debugLoader_.load_(namespace);
      } finally {
        goog.moduleLoaderState_ = moduleLoaderState;
      }
    }
    return null;
  }
};
goog.requireType = function(namespace) {
  return {};
};
goog.basePath = "";
goog.global.CLOSURE_BASE_PATH;
goog.global.CLOSURE_NO_DEPS;
goog.global.CLOSURE_IMPORT_SCRIPT;
goog.abstractMethod = function() {
  throw new Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(ctor) {
  ctor.instance_ = undefined;
  ctor.getInstance = function() {
    if (ctor.instance_) {
      return ctor.instance_;
    }
    if (goog.DEBUG) {
      goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = ctor;
    }
    return ctor.instance_ = new ctor();
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = goog.define("goog.LOAD_MODULE_USING_EVAL", true);
goog.SEAL_MODULE_EXPORTS = goog.define("goog.SEAL_MODULE_EXPORTS", goog.DEBUG);
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.TRANSPILE = goog.define("goog.TRANSPILE", "detect");
goog.ASSUME_ES_MODULES_TRANSPILED = goog.define("goog.ASSUME_ES_MODULES_TRANSPILED", false);
goog.TRUSTED_TYPES_POLICY_NAME = goog.define("goog.TRUSTED_TYPES_POLICY_NAME", "goog");
goog.hasBadLetScoping = null;
goog.loadModule = function(moduleDef) {
  var previousState = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:"", declareLegacyNamespace:false, type:goog.ModuleType.GOOG};
    var origExports = {};
    var exports = origExports;
    if (typeof moduleDef === "function") {
      exports = moduleDef.call(undefined, exports);
    } else if (typeof moduleDef === "string") {
      exports = goog.loadModuleFromSource_.call(undefined, exports, moduleDef);
    } else {
      throw new Error("Invalid module definition");
    }
    var moduleName = goog.moduleLoaderState_.moduleName;
    if (typeof moduleName === "string" && moduleName) {
      if (goog.moduleLoaderState_.declareLegacyNamespace) {
        var isDefaultExport = origExports !== exports;
        goog.constructNamespace_(moduleName, exports, isDefaultExport);
      } else if (goog.SEAL_MODULE_EXPORTS && Object.seal && typeof exports == "object" && exports != null) {
        Object.seal(exports);
      }
      var data = {exports:exports, type:goog.ModuleType.GOOG, moduleId:goog.moduleLoaderState_.moduleName};
      goog.loadedModules_[moduleName] = data;
    } else {
      throw new Error('Invalid module name "' + moduleName + '"');
    }
  } finally {
    goog.moduleLoaderState_ = previousState;
  }
};
goog.loadModuleFromSource_ = function(exports) {
  eval(goog.CLOSURE_EVAL_PREFILTER_.createScript(arguments[1]));
  return exports;
};
goog.normalizePath_ = function(path) {
  var components = path.split("/");
  var i = 0;
  while (i < components.length) {
    if (components[i] == ".") {
      components.splice(i, 1);
    } else if (i && components[i] == ".." && components[i - 1] && components[i - 1] != "..") {
      components.splice(--i, 2);
    } else {
      i++;
    }
  }
  return components.join("/");
};
goog.global.CLOSURE_LOAD_FILE_SYNC;
goog.loadFileSync_ = function(src) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC(src);
  } else {
    try {
      var xhr = new goog.global["XMLHttpRequest"]();
      xhr.open("get", src, false);
      xhr.send();
      return xhr.status == 0 || xhr.status == 200 ? xhr.responseText : null;
    } catch (err) {
      return null;
    }
  }
};
goog.typeOf = function(value) {
  var s = typeof value;
  if (s != "object") {
    return s;
  }
  if (!value) {
    return "null";
  }
  if (Array.isArray(value)) {
    return "array";
  }
  return s;
};
goog.isArrayLike = function(val) {
  var type = goog.typeOf(val);
  return type == "array" || type == "object" && typeof val.length == "number";
};
goog.isDateLike = function(val) {
  return goog.isObject(val) && typeof val.getFullYear == "function";
};
goog.isObject = function(val) {
  var type = typeof val;
  return type == "object" && val != null || type == "function";
};
goog.getUid = function(obj) {
  return Object.prototype.hasOwnProperty.call(obj, goog.UID_PROPERTY_) && obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(obj) {
  return !!obj[goog.UID_PROPERTY_];
};
goog.removeUid = function(obj) {
  if (obj !== null && "removeAttribute" in obj) {
    obj.removeAttribute(goog.UID_PROPERTY_);
  }
  try {
    delete obj[goog.UID_PROPERTY_];
  } catch (ex) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (Math.random() * 1e9 >>> 0);
goog.uidCounter_ = 0;
goog.cloneObject = function(obj) {
  var type = goog.typeOf(obj);
  if (type == "object" || type == "array") {
    if (typeof obj.clone === "function") {
      return obj.clone();
    }
    if (typeof Map !== "undefined" && obj instanceof Map) {
      return new Map(obj);
    } else if (typeof Set !== "undefined" && obj instanceof Set) {
      return new Set(obj);
    }
    var clone = type == "array" ? [] : {};
    for (var key in obj) {
      clone[key] = goog.cloneObject(obj[key]);
    }
    return clone;
  }
  return obj;
};
goog.bindNative_ = function(fn, selfObj, var_args) {
  return fn.call.apply(fn.bind, arguments);
};
goog.bindJs_ = function(fn, selfObj, var_args) {
  if (!fn) {
    throw new Error();
  }
  if (arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(selfObj, newArgs);
    };
  } else {
    return function() {
      return fn.apply(selfObj, arguments);
    };
  }
};
goog.bind = function(fn, selfObj, var_args) {
  if (Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1) {
    goog.bind = goog.bindNative_;
  } else {
    goog.bind = goog.bindJs_;
  }
  return goog.bind.apply(null, arguments);
};
goog.partial = function(fn, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = args.slice();
    newArgs.push.apply(newArgs, arguments);
    return fn.apply(this, newArgs);
  };
};
goog.now = function() {
  return Date.now();
};
goog.globalEval = function(script) {
  (0,eval)(script);
};
goog.cssNameMapping_;
goog.cssNameMappingStyle_;
goog.global.CLOSURE_CSS_NAME_MAP_FN;
goog.getCssName = function(className, opt_modifier) {
  if (String(className).charAt(0) == ".") {
    throw new Error('className passed in goog.getCssName must not start with ".".' + " You passed: " + className);
  }
  var getMapping = function(cssName) {
    return goog.cssNameMapping_[cssName] || cssName;
  };
  var renameByParts = function(cssName) {
    var parts = cssName.split("-");
    var mapped = [];
    for (var i = 0; i < parts.length; i++) {
      mapped.push(getMapping(parts[i]));
    }
    return mapped.join("-");
  };
  var rename;
  if (goog.cssNameMapping_) {
    rename = goog.cssNameMappingStyle_ == "BY_WHOLE" ? getMapping : renameByParts;
  } else {
    rename = function(a) {
      return a;
    };
  }
  var result = opt_modifier ? className + "-" + rename(opt_modifier) : rename(className);
  if (goog.global.CLOSURE_CSS_NAME_MAP_FN) {
    return goog.global.CLOSURE_CSS_NAME_MAP_FN(result);
  }
  return result;
};
goog.setCssNameMapping = function(mapping, opt_style) {
  goog.cssNameMapping_ = mapping;
  goog.cssNameMappingStyle_ = opt_style;
};
goog.global.CLOSURE_CSS_NAME_MAPPING;
if (!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING) {
  goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING;
}
goog.GetMsgOptions = function() {
};
goog.GetMsgOptions.prototype.html;
goog.GetMsgOptions.prototype.unescapeHtmlEntities;
goog.GetMsgOptions.prototype.original_code;
goog.GetMsgOptions.prototype.example;
goog.getMsg = function(str, opt_values, opt_options) {
  if (opt_options && opt_options.html) {
    str = str.replace(/</g, "\x26lt;");
  }
  if (opt_options && opt_options.unescapeHtmlEntities) {
    str = str.replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "\x26");
  }
  if (opt_values) {
    str = str.replace(/\{\$([^}]+)}/g, function(match, key) {
      return opt_values != null && key in opt_values ? opt_values[key] : match;
    });
  }
  return str;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(publicPath, object, objectToExportTo) {
  goog.exportPath_(publicPath, object, true, objectToExportTo);
};
goog.exportProperty = function(object, publicName, symbol) {
  object[publicName] = symbol;
};
goog.inherits = function(childCtor, parentCtor) {
  function tempCtor() {
  }
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  childCtor.prototype.constructor = childCtor;
  childCtor.base = function(me, methodName, var_args) {
    var args = new Array(arguments.length - 2);
    for (var i = 2; i < arguments.length; i++) {
      args[i - 2] = arguments[i];
    }
    return parentCtor.prototype[methodName].apply(me, args);
  };
};
goog.scope = function(fn) {
  if (goog.isInModuleLoader_()) {
    throw new Error("goog.scope is not supported within a module.");
  }
  fn.call(goog.global);
};
if (!COMPILED) {
  goog.global["COMPILED"] = COMPILED;
}
goog.defineClass = function(superClass, def) {
  var constructor = def.constructor;
  var statics = def.statics;
  if (!constructor || constructor == Object.prototype.constructor) {
    constructor = function() {
      throw new Error("cannot instantiate an interface (no constructor defined).");
    };
  }
  var cls = goog.defineClass.createSealingConstructor_(constructor, superClass);
  if (superClass) {
    goog.inherits(cls, superClass);
  }
  delete def.constructor;
  delete def.statics;
  goog.defineClass.applyProperties_(cls.prototype, def);
  if (statics != null) {
    if (statics instanceof Function) {
      statics(cls);
    } else {
      goog.defineClass.applyProperties_(cls, statics);
    }
  }
  return cls;
};
goog.defineClass.ClassDescriptor;
goog.defineClass.SEAL_CLASS_INSTANCES = goog.define("goog.defineClass.SEAL_CLASS_INSTANCES", goog.DEBUG);
goog.defineClass.createSealingConstructor_ = function(ctr, superClass) {
  if (!goog.defineClass.SEAL_CLASS_INSTANCES) {
    return ctr;
  }
  var wrappedCtr = function() {
    var instance = ctr.apply(this, arguments) || this;
    instance[goog.UID_PROPERTY_] = instance[goog.UID_PROPERTY_];
    return instance;
  };
  return wrappedCtr;
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
goog.defineClass.applyProperties_ = function(target, source) {
  var key;
  for (key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  for (var i = 0; i < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; i++) {
    key = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[i];
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
};
goog.identity_ = function(s) {
  return s;
};
goog.createTrustedTypesPolicy = function(name) {
  var policy = null;
  var policyFactory = goog.global.trustedTypes;
  if (!policyFactory || !policyFactory.createPolicy) {
    return policy;
  }
  try {
    policy = policyFactory.createPolicy(name, {createHTML:goog.identity_, createScript:goog.identity_, createScriptURL:goog.identity_});
  } catch (e) {
    goog.logToConsole_(e.message);
  }
  return policy;
};
if (!COMPILED && goog.DEPENDENCIES_ENABLED) {
  goog.isEdge_ = function() {
    var userAgent = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
    var edgeRe = /Edge\/(\d+)(\.\d)*/i;
    return !!userAgent.match(edgeRe);
  };
  goog.inHtmlDocument_ = function() {
    var doc = goog.global.document;
    return doc != null && "write" in doc;
  };
  goog.isDocumentLoading_ = function() {
    var doc = goog.global.document;
    return doc.attachEvent ? doc.readyState != "complete" : doc.readyState == "loading";
  };
  goog.findBasePath_ = function() {
    if (goog.global.CLOSURE_BASE_PATH != undefined && typeof goog.global.CLOSURE_BASE_PATH === "string") {
      goog.basePath = goog.global.CLOSURE_BASE_PATH;
      return;
    } else if (!goog.inHtmlDocument_()) {
      return;
    }
    var doc = goog.global.document;
    var currentScript = doc.currentScript;
    if (currentScript) {
      var scripts = [currentScript];
    } else {
      var scripts = doc.getElementsByTagName("SCRIPT");
    }
    for (var i = scripts.length - 1; i >= 0; --i) {
      var script = scripts[i];
      var src = script.src;
      var qmark = src.lastIndexOf("?");
      var l = qmark == -1 ? src.length : qmark;
      if (src.slice(l - 7, l) == "base.js") {
        goog.basePath = src.slice(0, l - 7);
        return;
      }
    }
  };
  goog.findBasePath_();
  goog.protectScriptTag_ = function(str) {
    return str.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
  };
  goog.DebugLoader_ = function() {
    this.dependencies_ = {};
    this.idToPath_ = {};
    this.written_ = {};
    this.loadingDeps_ = [];
    this.depsToLoad_ = [];
    this.paused_ = false;
    this.factory_ = new goog.DependencyFactory();
    this.deferredCallbacks_ = {};
    this.deferredQueue_ = [];
  };
  goog.DebugLoader_.prototype.bootstrap = function(namespaces, callback) {
    var cb = callback;
    function resolve() {
      if (cb) {
        goog.global.setTimeout(cb, 0);
        cb = null;
      }
    }
    if (!namespaces.length) {
      resolve();
      return;
    }
    var deps = [];
    for (var i = 0; i < namespaces.length; i++) {
      var path = this.getPathFromDeps_(namespaces[i]);
      if (!path) {
        throw new Error("Unregonized namespace: " + namespaces[i]);
      }
      deps.push(this.dependencies_[path]);
    }
    var require = goog.require;
    var loaded = 0;
    for (var i = 0; i < namespaces.length; i++) {
      require(namespaces[i]);
      deps[i].onLoad(function() {
        if (++loaded == namespaces.length) {
          resolve();
        }
      });
    }
  };
  goog.DebugLoader_.prototype.loadClosureDeps = function() {
    var relPath = "deps.js";
    this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + relPath), relPath, [], [], {}));
    this.loadDeps_();
  };
  goog.DebugLoader_.prototype.requested = function(absPathOrId, opt_force) {
    var path = this.getPathFromDeps_(absPathOrId);
    if (path && (opt_force || this.areDepsLoaded_(this.dependencies_[path].requires))) {
      var callback = this.deferredCallbacks_[path];
      if (callback) {
        delete this.deferredCallbacks_[path];
        callback();
      }
    }
  };
  goog.DebugLoader_.prototype.setDependencyFactory = function(factory) {
    this.factory_ = factory;
  };
  goog.DebugLoader_.prototype.load_ = function(namespace) {
    if (!this.getPathFromDeps_(namespace)) {
      var errorMessage = "goog.require could not find: " + namespace;
      goog.logToConsole_(errorMessage);
    } else {
      var loader = this;
      var deps = [];
      var visit = function(namespace) {
        var path = loader.getPathFromDeps_(namespace);
        if (!path) {
          throw new Error("Bad dependency path or symbol: " + namespace);
        }
        if (loader.written_[path]) {
          return;
        }
        loader.written_[path] = true;
        var dep = loader.dependencies_[path];
        for (var i = 0; i < dep.requires.length; i++) {
          if (!goog.isProvided_(dep.requires[i])) {
            visit(dep.requires[i]);
          }
        }
        deps.push(dep);
      };
      visit(namespace);
      var wasLoading = !!this.depsToLoad_.length;
      this.depsToLoad_ = this.depsToLoad_.concat(deps);
      if (!this.paused_ && !wasLoading) {
        this.loadDeps_();
      }
    }
  };
  goog.DebugLoader_.prototype.loadDeps_ = function() {
    var loader = this;
    var paused = this.paused_;
    while (this.depsToLoad_.length && !paused) {
      (function() {
        var loadCallDone = false;
        var dep = loader.depsToLoad_.shift();
        var loaded = false;
        loader.loading_(dep);
        var controller = {pause:function() {
          if (loadCallDone) {
            throw new Error("Cannot call pause after the call to load.");
          } else {
            paused = true;
          }
        }, resume:function() {
          if (loadCallDone) {
            loader.resume_();
          } else {
            paused = false;
          }
        }, loaded:function() {
          if (loaded) {
            throw new Error("Double call to loaded.");
          }
          loaded = true;
          loader.loaded_(dep);
        }, pending:function() {
          var pending = [];
          for (var i = 0; i < loader.loadingDeps_.length; i++) {
            pending.push(loader.loadingDeps_[i]);
          }
          return pending;
        }, setModuleState:function(type) {
          goog.moduleLoaderState_ = {type:type, moduleName:"", declareLegacyNamespace:false};
        }, registerEs6ModuleExports:function(path, exports, opt_closureNamespace) {
          if (opt_closureNamespace) {
            goog.loadedModules_[opt_closureNamespace] = {exports:exports, type:goog.ModuleType.ES6, moduleId:opt_closureNamespace || ""};
          }
        }, registerGoogModuleExports:function(moduleId, exports) {
          goog.loadedModules_[moduleId] = {exports:exports, type:goog.ModuleType.GOOG, moduleId:moduleId};
        }, clearModuleState:function() {
          goog.moduleLoaderState_ = null;
        }, defer:function(callback) {
          if (loadCallDone) {
            throw new Error("Cannot register with defer after the call to load.");
          }
          loader.defer_(dep, callback);
        }, areDepsLoaded:function() {
          return loader.areDepsLoaded_(dep.requires);
        }};
        try {
          dep.load(controller);
        } finally {
          loadCallDone = true;
        }
      })();
    }
    if (paused) {
      this.pause_();
    }
  };
  goog.DebugLoader_.prototype.pause_ = function() {
    this.paused_ = true;
  };
  goog.DebugLoader_.prototype.resume_ = function() {
    if (this.paused_) {
      this.paused_ = false;
      this.loadDeps_();
    }
  };
  goog.DebugLoader_.prototype.loading_ = function(dep) {
    this.loadingDeps_.push(dep);
  };
  goog.DebugLoader_.prototype.loaded_ = function(dep) {
    for (var i = 0; i < this.loadingDeps_.length; i++) {
      if (this.loadingDeps_[i] == dep) {
        this.loadingDeps_.splice(i, 1);
        break;
      }
    }
    for (var i = 0; i < this.deferredQueue_.length; i++) {
      if (this.deferredQueue_[i] == dep.path) {
        this.deferredQueue_.splice(i, 1);
        break;
      }
    }
    if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length) {
      while (this.deferredQueue_.length) {
        this.requested(this.deferredQueue_.shift(), true);
      }
    }
    dep.loaded();
  };
  goog.DebugLoader_.prototype.areDepsLoaded_ = function(pathsOrIds) {
    for (var i = 0; i < pathsOrIds.length; i++) {
      var path = this.getPathFromDeps_(pathsOrIds[i]);
      if (!path || !(path in this.deferredCallbacks_) && !goog.isProvided_(pathsOrIds[i])) {
        return false;
      }
    }
    return true;
  };
  goog.DebugLoader_.prototype.getPathFromDeps_ = function(absPathOrId) {
    if (absPathOrId in this.idToPath_) {
      return this.idToPath_[absPathOrId];
    } else if (absPathOrId in this.dependencies_) {
      return absPathOrId;
    } else {
      return null;
    }
  };
  goog.DebugLoader_.prototype.defer_ = function(dependency, callback) {
    this.deferredCallbacks_[dependency.path] = callback;
    this.deferredQueue_.push(dependency.path);
  };
  goog.LoadController = function() {
  };
  goog.LoadController.prototype.pause = function() {
  };
  goog.LoadController.prototype.resume = function() {
  };
  goog.LoadController.prototype.loaded = function() {
  };
  goog.LoadController.prototype.pending = function() {
  };
  goog.LoadController.prototype.registerEs6ModuleExports = function(path, exports, opt_closureNamespace) {
  };
  goog.LoadController.prototype.setModuleState = function(type) {
  };
  goog.LoadController.prototype.clearModuleState = function() {
  };
  goog.LoadController.prototype.defer = function(callback) {
  };
  goog.LoadController.prototype.areDepsLoaded = function() {
  };
  goog.Dependency = function(path, relativePath, provides, requires, loadFlags) {
    this.path = path;
    this.relativePath = relativePath;
    this.provides = provides;
    this.requires = requires;
    this.loadFlags = loadFlags;
    this.loaded_ = false;
    this.loadCallbacks_ = [];
  };
  goog.Dependency.prototype.getPathName = function() {
    var pathName = this.path;
    var protocolIndex = pathName.indexOf("://");
    if (protocolIndex >= 0) {
      pathName = pathName.substring(protocolIndex + 3);
      var slashIndex = pathName.indexOf("/");
      if (slashIndex >= 0) {
        pathName = pathName.substring(slashIndex + 1);
      }
    }
    return pathName;
  };
  goog.Dependency.prototype.onLoad = function(callback) {
    if (this.loaded_) {
      callback();
    } else {
      this.loadCallbacks_.push(callback);
    }
  };
  goog.Dependency.prototype.loaded = function() {
    this.loaded_ = true;
    var callbacks = this.loadCallbacks_;
    this.loadCallbacks_ = [];
    for (var i = 0; i < callbacks.length; i++) {
      callbacks[i]();
    }
  };
  goog.Dependency.defer_ = false;
  goog.Dependency.callbackMap_ = {};
  goog.Dependency.registerCallback_ = function(callback) {
    var key = Math.random().toString(32);
    goog.Dependency.callbackMap_[key] = callback;
    return key;
  };
  goog.Dependency.unregisterCallback_ = function(key) {
    delete goog.Dependency.callbackMap_[key];
  };
  goog.Dependency.callback_ = function(key, var_args) {
    if (key in goog.Dependency.callbackMap_) {
      var callback = goog.Dependency.callbackMap_[key];
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      callback.apply(undefined, args);
    } else {
      var errorMessage = "Callback key " + key + " does not exist (was base.js loaded more than once?).";
      throw Error(errorMessage);
    }
  };
  goog.Dependency.prototype.load = function(controller) {
    if (goog.global.CLOSURE_IMPORT_SCRIPT) {
      if (goog.global.CLOSURE_IMPORT_SCRIPT(this.path)) {
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    if (!goog.inHtmlDocument_()) {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents.");
      if (this.relativePath == "deps.js") {
        goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, " + "or setting CLOSURE_NO_DEPS to true.");
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    var doc = goog.global.document;
    if (doc.readyState == "complete" && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
      var isDeps = /\bdeps.js$/.test(this.path);
      if (isDeps) {
        controller.loaded();
        return;
      } else {
        throw Error('Cannot write "' + this.path + '" after document load');
      }
    }
    var nonce = goog.getScriptNonce_();
    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
      var key;
      var callback = function(script) {
        if (script.readyState && script.readyState != "complete") {
          script.onload = callback;
          return;
        }
        goog.Dependency.unregisterCallback_(key);
        controller.loaded();
      };
      key = goog.Dependency.registerCallback_(callback);
      var defer = goog.Dependency.defer_ ? " defer" : "";
      var nonceAttr = nonce ? ' nonce\x3d"' + nonce + '"' : "";
      var script = '\x3cscript src\x3d"' + this.path + '"' + nonceAttr + defer + ' id\x3d"script-' + key + '"\x3e\x3c/script\x3e';
      script += "\x3cscript" + nonceAttr + "\x3e";
      if (goog.Dependency.defer_) {
        script += "document.getElementById('script-" + key + "').onload \x3d function() {\n" + "  goog.Dependency.callback_('" + key + "', this);\n" + "};\n";
      } else {
        script += "goog.Dependency.callback_('" + key + "', document.getElementById('script-" + key + "'));";
      }
      script += "\x3c/script\x3e";
      doc.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(script) : script);
    } else {
      var scriptEl = doc.createElement("script");
      scriptEl.defer = goog.Dependency.defer_;
      scriptEl.async = false;
      if (nonce) {
        scriptEl.nonce = nonce;
      }
      scriptEl.onload = function() {
        scriptEl.onload = null;
        controller.loaded();
      };
      scriptEl.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
      doc.head.appendChild(scriptEl);
    }
  };
  goog.Es6ModuleDependency = function(path, relativePath, provides, requires, loadFlags) {
    goog.Es6ModuleDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
  };
  goog.inherits(goog.Es6ModuleDependency, goog.Dependency);
  goog.Es6ModuleDependency.prototype.load = function(controller) {
    if (goog.global.CLOSURE_IMPORT_SCRIPT) {
      if (goog.global.CLOSURE_IMPORT_SCRIPT(this.path)) {
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    if (!goog.inHtmlDocument_()) {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents.");
      controller.pause();
      return;
    }
    var doc = goog.global.document;
    var dep = this;
    function write(src, contents) {
      var nonceAttr = "";
      var nonce = goog.getScriptNonce_();
      if (nonce) {
        nonceAttr = ' nonce\x3d"' + nonce + '"';
      }
      if (contents) {
        var script = '\x3cscript type\x3d"module" crossorigin' + nonceAttr + "\x3e" + contents + "\x3c/" + "script\x3e";
        doc.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(script) : script);
      } else {
        var script = '\x3cscript type\x3d"module" crossorigin src\x3d"' + src + '"' + nonceAttr + "\x3e\x3c/" + "script\x3e";
        doc.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(script) : script);
      }
    }
    function append(src, contents) {
      var scriptEl = doc.createElement("script");
      scriptEl.defer = true;
      scriptEl.async = false;
      scriptEl.type = "module";
      scriptEl.setAttribute("crossorigin", true);
      var nonce = goog.getScriptNonce_();
      if (nonce) {
        scriptEl.nonce = nonce;
      }
      if (contents) {
        scriptEl.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(contents) : contents;
      } else {
        scriptEl.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(src) : src;
      }
      doc.head.appendChild(scriptEl);
    }
    var create;
    if (goog.isDocumentLoading_()) {
      create = write;
      goog.Dependency.defer_ = true;
    } else {
      create = append;
    }
    var beforeKey = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(beforeKey);
      controller.setModuleState(goog.ModuleType.ES6);
    });
    create(undefined, 'goog.Dependency.callback_("' + beforeKey + '")');
    create(this.path, undefined);
    var registerKey = goog.Dependency.registerCallback_(function(exports) {
      goog.Dependency.unregisterCallback_(registerKey);
      controller.registerEs6ModuleExports(dep.path, exports, goog.moduleLoaderState_.moduleName);
    });
    create(undefined, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + registerKey + '", m)');
    var afterKey = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(afterKey);
      controller.clearModuleState();
      controller.loaded();
    });
    create(undefined, 'goog.Dependency.callback_("' + afterKey + '")');
  };
  goog.TransformedDependency = function(path, relativePath, provides, requires, loadFlags) {
    goog.TransformedDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
    this.contents_ = null;
    this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
  };
  goog.inherits(goog.TransformedDependency, goog.Dependency);
  goog.TransformedDependency.prototype.load = function(controller) {
    var dep = this;
    function fetch() {
      dep.contents_ = goog.loadFileSync_(dep.path);
      if (dep.contents_) {
        dep.contents_ = dep.transform(dep.contents_);
        if (dep.contents_) {
          dep.contents_ += "\n//# sourceURL\x3d" + dep.path;
        }
      }
    }
    if (goog.global.CLOSURE_IMPORT_SCRIPT) {
      fetch();
      if (this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_)) {
        this.contents_ = null;
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    var isEs6 = this.loadFlags["module"] == goog.ModuleType.ES6;
    if (!this.lazyFetch_) {
      fetch();
    }
    function load() {
      if (dep.lazyFetch_) {
        fetch();
      }
      if (!dep.contents_) {
        return;
      }
      if (isEs6) {
        controller.setModuleState(goog.ModuleType.ES6);
      }
      var namespace;
      try {
        var contents = dep.contents_;
        dep.contents_ = null;
        goog.globalEval(goog.CLOSURE_EVAL_PREFILTER_.createScript(contents));
        if (isEs6) {
          namespace = goog.moduleLoaderState_.moduleName;
        }
      } finally {
        if (isEs6) {
          controller.clearModuleState();
        }
      }
      if (isEs6) {
        goog.global["$jscomp"]["require"]["ensure"]([dep.getPathName()], function() {
          controller.registerEs6ModuleExports(dep.path, goog.global["$jscomp"]["require"](dep.getPathName()), namespace);
        });
      }
      controller.loaded();
    }
    function fetchInOwnScriptThenLoad() {
      var doc = goog.global.document;
      var key = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(key);
        load();
      });
      var nonce = goog.getScriptNonce_();
      var nonceAttr = nonce ? ' nonce\x3d"' + nonce + '"' : "";
      var script = "\x3cscript" + nonceAttr + "\x3e" + goog.protectScriptTag_('goog.Dependency.callback_("' + key + '");') + "\x3c/" + "script\x3e";
      doc.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(script) : script);
    }
    var anythingElsePending = controller.pending().length > 1;
    var needsAsyncLoading = goog.Dependency.defer_ && (anythingElsePending || goog.isDocumentLoading_());
    if (needsAsyncLoading) {
      controller.defer(function() {
        load();
      });
      return;
    }
    var doc = goog.global.document;
    var isInternetExplorerOrEdge = goog.inHtmlDocument_() && ("ActiveXObject" in goog.global || goog.isEdge_());
    if (isEs6 && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !isInternetExplorerOrEdge) {
      goog.Dependency.defer_ = true;
      controller.pause();
      var oldCallback = doc.onreadystatechange;
      doc.onreadystatechange = function() {
        if (doc.readyState == "interactive") {
          doc.onreadystatechange = oldCallback;
          load();
          controller.resume();
        }
        if (typeof oldCallback === "function") {
          oldCallback.apply(undefined, arguments);
        }
      };
    } else {
      if (!goog.inHtmlDocument_() || !goog.isDocumentLoading_()) {
        load();
      } else {
        fetchInOwnScriptThenLoad();
      }
    }
  };
  goog.TransformedDependency.prototype.transform = function(contents) {
  };
  goog.PreTranspiledEs6ModuleDependency = function(path, relativePath, provides, requires, loadFlags) {
    goog.PreTranspiledEs6ModuleDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
  };
  goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency);
  goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(contents) {
    return contents;
  };
  goog.GoogModuleDependency = function(path, relativePath, provides, requires, loadFlags) {
    goog.GoogModuleDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
  };
  goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency);
  goog.GoogModuleDependency.prototype.transform = function(contents) {
    if (!goog.LOAD_MODULE_USING_EVAL || goog.global.JSON === undefined) {
      return "" + "goog.loadModule(function(exports) {" + '"use strict";' + contents + "\n" + ";return exports" + "});" + "\n//# sourceURL\x3d" + this.path + "\n";
    } else {
      return "" + "goog.loadModule(" + goog.global.JSON.stringify(contents + "\n//# sourceURL\x3d" + this.path + "\n") + ");";
    }
  };
  goog.DebugLoader_.prototype.addDependency = function(relPath, provides, requires, opt_loadFlags) {
    provides = provides || [];
    relPath = relPath.replace(/\\/g, "/");
    var path = goog.normalizePath_(goog.basePath + relPath);
    if (!opt_loadFlags || typeof opt_loadFlags === "boolean") {
      opt_loadFlags = opt_loadFlags ? {"module":goog.ModuleType.GOOG} : {};
    }
    var dep = this.factory_.createDependency(path, relPath, provides, requires, opt_loadFlags);
    this.dependencies_[path] = dep;
    for (var i = 0; i < provides.length; i++) {
      this.idToPath_[provides[i]] = path;
    }
    this.idToPath_[relPath] = path;
  };
  goog.DependencyFactory = function() {
  };
  goog.DependencyFactory.prototype.createDependency = function(path, relativePath, provides, requires, loadFlags) {
    if (loadFlags["module"] == goog.ModuleType.GOOG) {
      return new goog.GoogModuleDependency(path, relativePath, provides, requires, loadFlags);
    } else {
      if (loadFlags["module"] == goog.ModuleType.ES6) {
        if (goog.ASSUME_ES_MODULES_TRANSPILED) {
          return new goog.PreTranspiledEs6ModuleDependency(path, relativePath, provides, requires, loadFlags);
        } else {
          return new goog.Es6ModuleDependency(path, relativePath, provides, requires, loadFlags);
        }
      } else {
        return new goog.Dependency(path, relativePath, provides, requires, loadFlags);
      }
    }
  };
  goog.debugLoader_ = new goog.DebugLoader_();
  goog.loadClosureDeps = function() {
    goog.debugLoader_.loadClosureDeps();
  };
  goog.setDependencyFactory = function(factory) {
    goog.debugLoader_.setDependencyFactory(factory);
  };
  goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
  if (!goog.global.CLOSURE_NO_DEPS) {
    goog.debugLoader_.loadClosureDeps();
  }
  goog.bootstrap = function(namespaces, callback) {
    goog.debugLoader_.bootstrap(namespaces, callback);
  };
}
if (!COMPILED) {
  var isChrome87 = false;
  try {
    isChrome87 = eval(goog.global.trustedTypes.emptyScript) !== goog.global.trustedTypes.emptyScript;
  } catch (err) {
  }
  goog.CLOSURE_EVAL_PREFILTER_ = goog.global.trustedTypes && isChrome87 && goog.createTrustedTypesPolicy("goog#base#devonly#eval") || {createScript:goog.identity_};
}

$CLJS.$jscomp = {};
goog.global = CLJS_GLOBAL;var SHADOW_ENV = $CLJS.SHADOW_ENV = (function() {
    var env = {};

    var loadedFiles = {};

    env.setLoaded = function(name) {
        loadedFiles[name] = true;
    };

    env.load = function(opts, paths) {
        paths.forEach(function(name) {
            env.setLoaded(name);
        });
    };

    env.isLoaded = function(name) {
        // this is only used by live-reload checking if it should reload a file
        // since all files will always be loaded we don't really need to track this?
        return true;
        // return loadedFiles[name] || false;
    }

    return env;
})();

var originalGoogExportPath = goog.exportPath_;

goog.exportPath_ = function(name, object, overwriteImplicit, objectToExportTo) {
  // must keep the export to global for things like (goog/exportSymbol js/React ...)
  originalGoogExportPath(name, object, overwriteImplicit, objectToExportTo);
  // goog.module.declareLegacyNamespace() otherwise only exports to global but we need it on the $CLJS object
  if (goog.isInModuleLoader_()) {
    originalGoogExportPath(name, object, overwriteImplicit, $CLJS);
  }
}

goog.provide = function(name) {
  return originalGoogExportPath(name, undefined, undefined, $CLJS);
};


// in goog.module this needs to have a return value
// the getObjectByName will only find modules that declareLegacyNamespace
// otherwise get the module directly. can't use default goog.require since
// we are never using the debug loader and it never has a return value in that case
goog.require = function(name) {
  return goog.getObjectByName(name, $CLJS) || goog.module.getInternal_(name);
};

module.exports = $CLJS;

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.debug.Error");
  goog.module.declareLegacyNamespace();
  function DebugError(msg = undefined, cause = undefined) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DebugError);
    } else {
      const stack = (new Error()).stack;
      if (stack) {
        this.stack = stack;
      }
    }
    if (msg) {
      this.message = String(msg);
    }
    if (cause !== undefined) {
      this.cause = cause;
    }
    this.reportErrorToServer = true;
  }
  goog.inherits(DebugError, Error);
  DebugError.prototype.name = "CustomError";
  exports = DebugError;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.debug.error.js");

goog.provide("goog.dom.NodeType");
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};

$CLJS.SHADOW_ENV.setLoaded("goog.dom.nodetype.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.asserts");
  goog.module.declareLegacyNamespace();
  const DebugError = goog.require("goog.debug.Error");
  const NodeType = goog.require("goog.dom.NodeType");
  exports.ENABLE_ASSERTS = goog.define("goog.asserts.ENABLE_ASSERTS", goog.DEBUG);
  function AssertionError(messagePattern, messageArgs) {
    DebugError.call(this, subs(messagePattern, messageArgs));
    this.messagePattern = messagePattern;
  }
  goog.inherits(AssertionError, DebugError);
  exports.AssertionError = AssertionError;
  AssertionError.prototype.name = "AssertionError";
  exports.DEFAULT_ERROR_HANDLER = function(e) {
    throw e;
  };
  let errorHandler_ = exports.DEFAULT_ERROR_HANDLER;
  function subs(pattern, subs) {
    const splitParts = pattern.split("%s");
    let returnString = "";
    const subLast = splitParts.length - 1;
    for (let i = 0; i < subLast; i++) {
      const sub = i < subs.length ? subs[i] : "%s";
      returnString += splitParts[i] + sub;
    }
    return returnString + splitParts[subLast];
  }
  function doAssertFailure(defaultMessage, defaultArgs, givenMessage, givenArgs) {
    let message = "Assertion failed";
    let args;
    if (givenMessage) {
      message += ": " + givenMessage;
      args = givenArgs;
    } else if (defaultMessage) {
      message += ": " + defaultMessage;
      args = defaultArgs;
    }
    const e = new AssertionError("" + message, args || []);
    errorHandler_(e);
  }
  exports.setErrorHandler = function(errorHandler) {
    if (exports.ENABLE_ASSERTS) {
      errorHandler_ = errorHandler;
    }
  };
  exports.assert = function(condition, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && !condition) {
      doAssertFailure("", null, opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return condition;
  };
  exports.assertExists = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && value == null) {
      doAssertFailure("Expected to exist: %s.", [value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.fail = function(opt_message, var_args) {
    if (exports.ENABLE_ASSERTS) {
      errorHandler_(new AssertionError("Failure" + (opt_message ? ": " + opt_message : ""), Array.prototype.slice.call(arguments, 1)));
    }
  };
  exports.assertNumber = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && typeof value !== "number") {
      doAssertFailure("Expected number but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertString = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && typeof value !== "string") {
      doAssertFailure("Expected string but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertFunction = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && typeof value !== "function") {
      doAssertFailure("Expected function but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertObject = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && !goog.isObject(value)) {
      doAssertFailure("Expected object but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertArray = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && !Array.isArray(value)) {
      doAssertFailure("Expected array but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertBoolean = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && typeof value !== "boolean") {
      doAssertFailure("Expected boolean but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertElement = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && (!goog.isObject(value) || value.nodeType != NodeType.ELEMENT)) {
      doAssertFailure("Expected Element but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertInstanceof = function(value, type, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && !(value instanceof type)) {
      doAssertFailure("Expected instanceof %s but got %s.", [getType(type), getType(value)], opt_message, Array.prototype.slice.call(arguments, 3));
    }
    return value;
  };
  exports.assertFinite = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && (typeof value != "number" || !isFinite(value))) {
      doAssertFailure("Expected %s to be a finite number but it is not.", [value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  function getType(value) {
    if (value instanceof Function) {
      return value.displayName || value.name || "unknown type name";
    } else if (value instanceof Object) {
      return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
    } else {
      return value === null ? "null" : typeof value;
    }
  }
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.asserts.asserts.js");

goog.provide("goog.reflect");
goog.reflect.object = function(type, object) {
  return object;
};
goog.reflect.objectProperty = function(prop, object) {
  return prop;
};
goog.reflect.sinkValue = function(x) {
  goog.reflect.sinkValue[" "](x);
  return x;
};
goog.reflect.sinkValue[" "] = function() {
};
goog.reflect.canAccessProperty = function(obj, prop) {
  try {
    goog.reflect.sinkValue(obj[prop]);
    return true;
  } catch (e) {
  }
  return false;
};
goog.reflect.cache = function(cacheObj, key, valueFn, opt_keyFn) {
  const storedKey = opt_keyFn ? opt_keyFn(key) : key;
  if (Object.prototype.hasOwnProperty.call(cacheObj, storedKey)) {
    return cacheObj[storedKey];
  }
  return cacheObj[storedKey] = valueFn(key);
};

$CLJS.SHADOW_ENV.setLoaded("goog.reflect.reflect.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.math.Long");
  goog.module.declareLegacyNamespace();
  const asserts = goog.require("goog.asserts");
  const reflect = goog.require("goog.reflect");
  class Long {
    constructor(low, high) {
      this.low_ = low | 0;
      this.high_ = high | 0;
    }
    toInt() {
      return this.low_;
    }
    toNumber() {
      return this.high_ * TWO_PWR_32_DBL_ + this.getLowBitsUnsigned();
    }
    isSafeInteger() {
      var top11Bits = this.high_ >> 21;
      return top11Bits == 0 || top11Bits == -1 && !(this.low_ == 0 && this.high_ == (4292870144 | 0));
    }
    toString(opt_radix) {
      var radix = opt_radix || 10;
      if (radix < 2 || 36 < radix) {
        throw new Error("radix out of range: " + radix);
      }
      if (this.isSafeInteger()) {
        var asNumber = this.toNumber();
        return radix == 10 ? "" + asNumber : asNumber.toString(radix);
      }
      var safeDigits = 14 - (radix >> 2);
      var radixPowSafeDigits = Math.pow(radix, safeDigits);
      var radixToPower = Long.fromBits(radixPowSafeDigits, radixPowSafeDigits / TWO_PWR_32_DBL_);
      var remDiv = this.div(radixToPower);
      var val = Math.abs(this.subtract(remDiv.multiply(radixToPower)).toNumber());
      var digits = radix == 10 ? "" + val : val.toString(radix);
      if (digits.length < safeDigits) {
        digits = "0000000000000".slice(digits.length - safeDigits) + digits;
      }
      val = remDiv.toNumber();
      return (radix == 10 ? val : val.toString(radix)) + digits;
    }
    toUnsignedString(opt_radix) {
      if (this.high_ >= 0) {
        return this.toString(opt_radix);
      }
      var radix = opt_radix || 10;
      if (radix < 2 || 36 < radix) {
        throw new Error("radix out of range: " + radix);
      }
      var longRadix = Long.fromInt(radix);
      var quotient = this.shiftRightUnsigned(1).div(longRadix).shiftLeft(1);
      var remainder = this.subtract(quotient.multiply(longRadix));
      if (remainder.greaterThanOrEqual(longRadix)) {
        quotient = quotient.add(Long.getOne());
        remainder = this.subtract(quotient.multiply(longRadix));
      }
      return quotient.toString(radix) + remainder.toString(radix);
    }
    getHighBits() {
      return this.high_;
    }
    getLowBits() {
      return this.low_;
    }
    getLowBitsUnsigned() {
      return this.low_ >>> 0;
    }
    getNumBitsAbs() {
      if (this.isNegative()) {
        if (this.equals(Long.getMinValue())) {
          return 64;
        } else {
          return this.negate().getNumBitsAbs();
        }
      } else {
        var val = this.high_ != 0 ? this.high_ : this.low_;
        for (var bit = 31; bit > 0; bit--) {
          if ((val & 1 << bit) != 0) {
            break;
          }
        }
        return this.high_ != 0 ? bit + 33 : bit + 1;
      }
    }
    isZero() {
      return this.low_ == 0 && this.high_ == 0;
    }
    isNegative() {
      return this.high_ < 0;
    }
    isOdd() {
      return (this.low_ & 1) == 1;
    }
    hashCode() {
      return this.getLowBits() ^ this.getHighBits();
    }
    equals(other) {
      return this.low_ == other.low_ && this.high_ == other.high_;
    }
    notEquals(other) {
      return !this.equals(other);
    }
    lessThan(other) {
      return this.compare(other) < 0;
    }
    lessThanOrEqual(other) {
      return this.compare(other) <= 0;
    }
    greaterThan(other) {
      return this.compare(other) > 0;
    }
    greaterThanOrEqual(other) {
      return this.compare(other) >= 0;
    }
    compare(other) {
      if (this.high_ == other.high_) {
        if (this.low_ == other.low_) {
          return 0;
        }
        return this.getLowBitsUnsigned() > other.getLowBitsUnsigned() ? 1 : -1;
      }
      return this.high_ > other.high_ ? 1 : -1;
    }
    negate() {
      var negLow = ~this.low_ + 1 | 0;
      var overflowFromLow = !negLow;
      var negHigh = ~this.high_ + overflowFromLow | 0;
      return Long.fromBits(negLow, negHigh);
    }
    add(other) {
      var a48 = this.high_ >>> 16;
      var a32 = this.high_ & 65535;
      var a16 = this.low_ >>> 16;
      var a00 = this.low_ & 65535;
      var b48 = other.high_ >>> 16;
      var b32 = other.high_ & 65535;
      var b16 = other.low_ >>> 16;
      var b00 = other.low_ & 65535;
      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 + b00;
      c16 += c00 >>> 16;
      c00 &= 65535;
      c16 += a16 + b16;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c32 += a32 + b32;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c48 += a48 + b48;
      c48 &= 65535;
      return Long.fromBits(c16 << 16 | c00, c48 << 16 | c32);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    multiply(other) {
      if (this.isZero()) {
        return this;
      }
      if (other.isZero()) {
        return other;
      }
      var a48 = this.high_ >>> 16;
      var a32 = this.high_ & 65535;
      var a16 = this.low_ >>> 16;
      var a00 = this.low_ & 65535;
      var b48 = other.high_ >>> 16;
      var b32 = other.high_ & 65535;
      var b16 = other.low_ >>> 16;
      var b00 = other.low_ & 65535;
      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 * b00;
      c16 += c00 >>> 16;
      c00 &= 65535;
      c16 += a16 * b00;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c16 += a00 * b16;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c32 += a32 * b00;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c32 += a16 * b16;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c32 += a00 * b32;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
      c48 &= 65535;
      return Long.fromBits(c16 << 16 | c00, c48 << 16 | c32);
    }
    div(other) {
      if (other.isZero()) {
        throw new Error("division by zero");
      }
      if (this.isNegative()) {
        if (this.equals(Long.getMinValue())) {
          if (other.equals(Long.getOne()) || other.equals(Long.getNegOne())) {
            return Long.getMinValue();
          }
          if (other.equals(Long.getMinValue())) {
            return Long.getOne();
          }
          var halfThis = this.shiftRight(1);
          var approx = halfThis.div(other).shiftLeft(1);
          if (approx.equals(Long.getZero())) {
            return other.isNegative() ? Long.getOne() : Long.getNegOne();
          }
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
        if (other.isNegative()) {
          return this.negate().div(other.negate());
        }
        return this.negate().div(other).negate();
      }
      if (this.isZero()) {
        return Long.getZero();
      }
      if (other.isNegative()) {
        if (other.equals(Long.getMinValue())) {
          return Long.getZero();
        }
        return this.div(other.negate()).negate();
      }
      var res = Long.getZero();
      var rem = this;
      while (rem.greaterThanOrEqual(other)) {
        var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
        var log2 = Math.ceil(Math.log(approx) / Math.LN2);
        var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
        var approxRes = Long.fromNumber(approx);
        var approxRem = approxRes.multiply(other);
        while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
          approx -= delta;
          approxRes = Long.fromNumber(approx);
          approxRem = approxRes.multiply(other);
        }
        if (approxRes.isZero()) {
          approxRes = Long.getOne();
        }
        res = res.add(approxRes);
        rem = rem.subtract(approxRem);
      }
      return res;
    }
    modulo(other) {
      return this.subtract(this.div(other).multiply(other));
    }
    not() {
      return Long.fromBits(~this.low_, ~this.high_);
    }
    and(other) {
      return Long.fromBits(this.low_ & other.low_, this.high_ & other.high_);
    }
    or(other) {
      return Long.fromBits(this.low_ | other.low_, this.high_ | other.high_);
    }
    xor(other) {
      return Long.fromBits(this.low_ ^ other.low_, this.high_ ^ other.high_);
    }
    shiftLeft(numBits) {
      numBits &= 63;
      if (numBits == 0) {
        return this;
      } else {
        var low = this.low_;
        if (numBits < 32) {
          var high = this.high_;
          return Long.fromBits(low << numBits, high << numBits | low >>> 32 - numBits);
        } else {
          return Long.fromBits(0, low << numBits - 32);
        }
      }
    }
    shiftRight(numBits) {
      numBits &= 63;
      if (numBits == 0) {
        return this;
      } else {
        var high = this.high_;
        if (numBits < 32) {
          var low = this.low_;
          return Long.fromBits(low >>> numBits | high << 32 - numBits, high >> numBits);
        } else {
          return Long.fromBits(high >> numBits - 32, high >= 0 ? 0 : -1);
        }
      }
    }
    shiftRightUnsigned(numBits) {
      numBits &= 63;
      if (numBits == 0) {
        return this;
      } else {
        var high = this.high_;
        if (numBits < 32) {
          var low = this.low_;
          return Long.fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits);
        } else if (numBits == 32) {
          return Long.fromBits(high, 0);
        } else {
          return Long.fromBits(high >>> numBits - 32, 0);
        }
      }
    }
    static fromInt(value) {
      var intValue = value | 0;
      asserts.assert(value === intValue, "value should be a 32-bit integer");
      if (-128 <= intValue && intValue < 128) {
        return getCachedIntValue_(intValue);
      } else {
        return new Long(intValue, intValue < 0 ? -1 : 0);
      }
    }
    static fromNumber(value) {
      if (value > 0) {
        if (value >= TWO_PWR_63_DBL_) {
          return Long.getMaxValue();
        }
        return new Long(value, value / TWO_PWR_32_DBL_);
      } else if (value < 0) {
        if (value <= -TWO_PWR_63_DBL_) {
          return Long.getMinValue();
        }
        return (new Long(-value, -value / TWO_PWR_32_DBL_)).negate();
      } else {
        return Long.getZero();
      }
    }
    static fromBits(lowBits, highBits) {
      return new Long(lowBits, highBits);
    }
    static fromString(str, opt_radix) {
      if (str.charAt(0) == "-") {
        return Long.fromString(str.substring(1), opt_radix).negate();
      }
      var numberValue = parseInt(str, opt_radix || 10);
      if (numberValue <= MAX_SAFE_INTEGER_) {
        return new Long(numberValue % TWO_PWR_32_DBL_ | 0, numberValue / TWO_PWR_32_DBL_ | 0);
      }
      if (str.length == 0) {
        throw new Error("number format error: empty string");
      }
      if (str.indexOf("-") >= 0) {
        throw new Error('number format error: interior "-" character: ' + str);
      }
      var radix = opt_radix || 10;
      if (radix < 2 || 36 < radix) {
        throw new Error("radix out of range: " + radix);
      }
      var radixToPower = Long.fromNumber(Math.pow(radix, 8));
      var result = Long.getZero();
      for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i);
        var value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
          var power = Long.fromNumber(Math.pow(radix, size));
          result = result.multiply(power).add(Long.fromNumber(value));
        } else {
          result = result.multiply(radixToPower);
          result = result.add(Long.fromNumber(value));
        }
      }
      return result;
    }
    static isStringInRange(str, opt_radix) {
      var radix = opt_radix || 10;
      if (radix < 2 || 36 < radix) {
        throw new Error("radix out of range: " + radix);
      }
      var extremeValue = str.charAt(0) == "-" ? MIN_VALUE_FOR_RADIX_[radix] : MAX_VALUE_FOR_RADIX_[radix];
      if (str.length < extremeValue.length) {
        return true;
      } else if (str.length == extremeValue.length && str <= extremeValue) {
        return true;
      } else {
        return false;
      }
    }
    static getZero() {
      return ZERO_;
    }
    static getOne() {
      return ONE_;
    }
    static getNegOne() {
      return NEG_ONE_;
    }
    static getMaxValue() {
      return MAX_VALUE_;
    }
    static getMinValue() {
      return MIN_VALUE_;
    }
    static getTwoPwr24() {
      return TWO_PWR_24_;
    }
  }
  exports = Long;
  const IntCache_ = {};
  function getCachedIntValue_(value) {
    return reflect.cache(IntCache_, value, function(val) {
      return new Long(val, val < 0 ? -1 : 0);
    });
  }
  const MAX_VALUE_FOR_RADIX_ = ["", "", "111111111111111111111111111111111111111111111111111111111111111", "2021110011022210012102010021220101220221", "13333333333333333333333333333333", "1104332401304422434310311212", "1540241003031030222122211", "22341010611245052052300", "777777777777777777777", "67404283172107811827", "9223372036854775807", "1728002635214590697", "41a792678515120367", "10b269549075433c37", "4340724c6c71dc7a7", "160e2ad3246366807", "7fffffffffffffff", "33d3d8307b214008", "16agh595df825fa7", 
  "ba643dci0ffeehh", "5cbfjia3fh26ja7", "2heiciiie82dh97", "1adaibb21dckfa7", "i6k448cf4192c2", "acd772jnc9l0l7", "64ie1focnn5g77", "3igoecjbmca687", "27c48l5b37oaop", "1bk39f3ah3dmq7", "q1se8f0m04isb", "hajppbc1fc207", "bm03i95hia437", "7vvvvvvvvvvvv", "5hg4ck9jd4u37", "3tdtk1v8j6tpp", "2pijmikexrxp7", "1y2p0ij32e8e7"];
  const MIN_VALUE_FOR_RADIX_ = ["", "", "-1000000000000000000000000000000000000000000000000000000000000000", "-2021110011022210012102010021220101220222", "-20000000000000000000000000000000", "-1104332401304422434310311213", "-1540241003031030222122212", "-22341010611245052052301", "-1000000000000000000000", "-67404283172107811828", "-9223372036854775808", "-1728002635214590698", "-41a792678515120368", "-10b269549075433c38", "-4340724c6c71dc7a8", "-160e2ad3246366808", "-8000000000000000", "-33d3d8307b214009", 
  "-16agh595df825fa8", "-ba643dci0ffeehi", "-5cbfjia3fh26ja8", "-2heiciiie82dh98", "-1adaibb21dckfa8", "-i6k448cf4192c3", "-acd772jnc9l0l8", "-64ie1focnn5g78", "-3igoecjbmca688", "-27c48l5b37oaoq", "-1bk39f3ah3dmq8", "-q1se8f0m04isc", "-hajppbc1fc208", "-bm03i95hia438", "-8000000000000", "-5hg4ck9jd4u38", "-3tdtk1v8j6tpq", "-2pijmikexrxp8", "-1y2p0ij32e8e8"];
  const MAX_SAFE_INTEGER_ = 9007199254740991;
  const TWO_PWR_32_DBL_ = 4294967296;
  const TWO_PWR_63_DBL_ = 0x7fffffffffffffff;
  const ZERO_ = Long.fromBits(0, 0);
  const ONE_ = Long.fromBits(1, 0);
  const NEG_ONE_ = Long.fromBits(-1, -1);
  const MAX_VALUE_ = Long.fromBits(4294967295, 2147483647);
  const MIN_VALUE_ = Long.fromBits(0, 2147483648);
  const TWO_PWR_24_ = Long.fromBits(1 << 24, 0);
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.math.long.js");

goog.provide("goog.math.Integer");
goog.require("goog.reflect");
goog.math.Integer = function(bits, sign) {
  this.sign_ = sign;
  var localBits = [];
  var top = true;
  for (var i = bits.length - 1; i >= 0; i--) {
    var val = bits[i] | 0;
    if (!top || val != sign) {
      localBits[i] = val;
      top = false;
    }
  }
  this.bits_ = localBits;
};
goog.math.Integer.IntCache_ = {};
goog.math.Integer.fromInt = function(value) {
  if (-128 <= value && value < 128) {
    return goog.reflect.cache(goog.math.Integer.IntCache_, value, function(val) {
      return new goog.math.Integer([val | 0], val < 0 ? -1 : 0);
    });
  }
  return new goog.math.Integer([value | 0], value < 0 ? -1 : 0);
};
goog.math.Integer.fromNumber = function(value) {
  if (isNaN(value) || !isFinite(value)) {
    return goog.math.Integer.ZERO;
  } else if (value < 0) {
    return goog.math.Integer.fromNumber(-value).negate();
  } else {
    var bits = [];
    var pow = 1;
    for (var i = 0; value >= pow; i++) {
      bits[i] = value / pow | 0;
      pow *= goog.math.Integer.TWO_PWR_32_DBL_;
    }
    return new goog.math.Integer(bits, 0);
  }
};
goog.math.Integer.fromBits = function(bits) {
  var high = bits[bits.length - 1];
  return new goog.math.Integer(bits, high & 1 << 31 ? -1 : 0);
};
goog.math.Integer.fromString = function(str, opt_radix) {
  if (str.length == 0) {
    throw new Error("number format error: empty string");
  }
  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw new Error("radix out of range: " + radix);
  }
  if (str.charAt(0) == "-") {
    return goog.math.Integer.fromString(str.substring(1), radix).negate();
  } else if (str.indexOf("-") >= 0) {
    throw new Error('number format error: interior "-" character');
  }
  var radixToPower = goog.math.Integer.fromNumber(Math.pow(radix, 8));
  var result = goog.math.Integer.ZERO;
  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i);
    var value = parseInt(str.substring(i, i + size), radix);
    if (size < 8) {
      var power = goog.math.Integer.fromNumber(Math.pow(radix, size));
      result = result.multiply(power).add(goog.math.Integer.fromNumber(value));
    } else {
      result = result.multiply(radixToPower);
      result = result.add(goog.math.Integer.fromNumber(value));
    }
  }
  return result;
};
goog.math.Integer.TWO_PWR_32_DBL_ = (1 << 16) * (1 << 16);
goog.math.Integer.ZERO = goog.math.Integer.fromInt(0);
goog.math.Integer.ONE = goog.math.Integer.fromInt(1);
goog.math.Integer.TWO_PWR_24_ = goog.math.Integer.fromInt(1 << 24);
goog.math.Integer.prototype.toInt = function() {
  return this.bits_.length > 0 ? this.bits_[0] : this.sign_;
};
goog.math.Integer.prototype.toNumber = function() {
  if (this.isNegative()) {
    return -this.negate().toNumber();
  } else {
    var val = 0;
    var pow = 1;
    for (var i = 0; i < this.bits_.length; i++) {
      val += this.getBitsUnsigned(i) * pow;
      pow *= goog.math.Integer.TWO_PWR_32_DBL_;
    }
    return val;
  }
};
goog.math.Integer.prototype.toString = function(opt_radix) {
  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw new Error("radix out of range: " + radix);
  }
  if (this.isZero()) {
    return "0";
  } else if (this.isNegative()) {
    return "-" + this.negate().toString(radix);
  }
  var radixToPower = goog.math.Integer.fromNumber(Math.pow(radix, 6));
  var rem = this;
  var result = "";
  while (true) {
    var remDiv = rem.divide(radixToPower);
    var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt() >>> 0;
    var digits = intval.toString(radix);
    rem = remDiv;
    if (rem.isZero()) {
      return digits + result;
    } else {
      while (digits.length < 6) {
        digits = "0" + digits;
      }
      result = "" + digits + result;
    }
  }
};
goog.math.Integer.prototype.getBits = function(index) {
  if (index < 0) {
    return 0;
  } else if (index < this.bits_.length) {
    return this.bits_[index];
  } else {
    return this.sign_;
  }
};
goog.math.Integer.prototype.getBitsUnsigned = function(index) {
  var val = this.getBits(index);
  return val >= 0 ? val : goog.math.Integer.TWO_PWR_32_DBL_ + val;
};
goog.math.Integer.prototype.getSign = function() {
  return this.sign_;
};
goog.math.Integer.prototype.isZero = function() {
  if (this.sign_ != 0) {
    return false;
  }
  for (var i = 0; i < this.bits_.length; i++) {
    if (this.bits_[i] != 0) {
      return false;
    }
  }
  return true;
};
goog.math.Integer.prototype.isNegative = function() {
  return this.sign_ == -1;
};
goog.math.Integer.prototype.isOdd = function() {
  return this.bits_.length == 0 && this.sign_ == -1 || this.bits_.length > 0 && (this.bits_[0] & 1) != 0;
};
goog.math.Integer.prototype.equals = function(other) {
  if (this.sign_ != other.sign_) {
    return false;
  }
  var len = Math.max(this.bits_.length, other.bits_.length);
  for (var i = 0; i < len; i++) {
    if (this.getBits(i) != other.getBits(i)) {
      return false;
    }
  }
  return true;
};
goog.math.Integer.prototype.notEquals = function(other) {
  return !this.equals(other);
};
goog.math.Integer.prototype.greaterThan = function(other) {
  return this.compare(other) > 0;
};
goog.math.Integer.prototype.greaterThanOrEqual = function(other) {
  return this.compare(other) >= 0;
};
goog.math.Integer.prototype.lessThan = function(other) {
  return this.compare(other) < 0;
};
goog.math.Integer.prototype.lessThanOrEqual = function(other) {
  return this.compare(other) <= 0;
};
goog.math.Integer.prototype.compare = function(other) {
  var diff = this.subtract(other);
  if (diff.isNegative()) {
    return -1;
  } else if (diff.isZero()) {
    return 0;
  } else {
    return +1;
  }
};
goog.math.Integer.prototype.shorten = function(numBits) {
  var arr_index = numBits - 1 >> 5;
  var bit_index = (numBits - 1) % 32;
  var bits = [];
  for (var i = 0; i < arr_index; i++) {
    bits[i] = this.getBits(i);
  }
  var sigBits = bit_index == 31 ? 4294967295 : (1 << bit_index + 1) - 1;
  var val = this.getBits(arr_index) & sigBits;
  if (val & 1 << bit_index) {
    val |= 4294967295 - sigBits;
    bits[arr_index] = val;
    return new goog.math.Integer(bits, -1);
  } else {
    bits[arr_index] = val;
    return new goog.math.Integer(bits, 0);
  }
};
goog.math.Integer.prototype.negate = function() {
  return this.not().add(goog.math.Integer.ONE);
};
goog.math.Integer.prototype.abs = function() {
  return this.isNegative() ? this.negate() : this;
};
goog.math.Integer.prototype.add = function(other) {
  var len = Math.max(this.bits_.length, other.bits_.length);
  var arr = [];
  var carry = 0;
  for (var i = 0; i <= len; i++) {
    var a1 = this.getBits(i) >>> 16;
    var a0 = this.getBits(i) & 65535;
    var b1 = other.getBits(i) >>> 16;
    var b0 = other.getBits(i) & 65535;
    var c0 = carry + a0 + b0;
    var c1 = (c0 >>> 16) + a1 + b1;
    carry = c1 >>> 16;
    c0 &= 65535;
    c1 &= 65535;
    arr[i] = c1 << 16 | c0;
  }
  return goog.math.Integer.fromBits(arr);
};
goog.math.Integer.prototype.subtract = function(other) {
  return this.add(other.negate());
};
goog.math.Integer.prototype.multiply = function(other) {
  if (this.isZero()) {
    return goog.math.Integer.ZERO;
  } else if (other.isZero()) {
    return goog.math.Integer.ZERO;
  }
  if (this.isNegative()) {
    if (other.isNegative()) {
      return this.negate().multiply(other.negate());
    } else {
      return this.negate().multiply(other).negate();
    }
  } else if (other.isNegative()) {
    return this.multiply(other.negate()).negate();
  }
  if (this.lessThan(goog.math.Integer.TWO_PWR_24_) && other.lessThan(goog.math.Integer.TWO_PWR_24_)) {
    return goog.math.Integer.fromNumber(this.toNumber() * other.toNumber());
  }
  var len = this.bits_.length + other.bits_.length;
  var arr = [];
  for (var i = 0; i < 2 * len; i++) {
    arr[i] = 0;
  }
  for (var i = 0; i < this.bits_.length; i++) {
    for (var j = 0; j < other.bits_.length; j++) {
      var a1 = this.getBits(i) >>> 16;
      var a0 = this.getBits(i) & 65535;
      var b1 = other.getBits(j) >>> 16;
      var b0 = other.getBits(j) & 65535;
      arr[2 * i + 2 * j] += a0 * b0;
      goog.math.Integer.carry16_(arr, 2 * i + 2 * j);
      arr[2 * i + 2 * j + 1] += a1 * b0;
      goog.math.Integer.carry16_(arr, 2 * i + 2 * j + 1);
      arr[2 * i + 2 * j + 1] += a0 * b1;
      goog.math.Integer.carry16_(arr, 2 * i + 2 * j + 1);
      arr[2 * i + 2 * j + 2] += a1 * b1;
      goog.math.Integer.carry16_(arr, 2 * i + 2 * j + 2);
    }
  }
  for (var i = 0; i < len; i++) {
    arr[i] = arr[2 * i + 1] << 16 | arr[2 * i];
  }
  for (var i = len; i < 2 * len; i++) {
    arr[i] = 0;
  }
  return new goog.math.Integer(arr, 0);
};
goog.math.Integer.carry16_ = function(bits, index) {
  while ((bits[index] & 65535) != bits[index]) {
    bits[index + 1] += bits[index] >>> 16;
    bits[index] &= 65535;
    index++;
  }
};
goog.math.Integer.prototype.slowDivide_ = function(other) {
  if (this.isNegative() || other.isNegative()) {
    throw new Error("slowDivide_ only works with positive integers.");
  }
  var twoPower = goog.math.Integer.ONE;
  var multiple = other;
  while (multiple.lessThanOrEqual(this)) {
    twoPower = twoPower.shiftLeft(1);
    multiple = multiple.shiftLeft(1);
  }
  var res = twoPower.shiftRight(1);
  var total = multiple.shiftRight(1);
  var total2;
  multiple = multiple.shiftRight(2);
  twoPower = twoPower.shiftRight(2);
  while (!multiple.isZero()) {
    total2 = total.add(multiple);
    if (total2.lessThanOrEqual(this)) {
      res = res.add(twoPower);
      total = total2;
    }
    multiple = multiple.shiftRight(1);
    twoPower = twoPower.shiftRight(1);
  }
  var remainder = this.subtract(res.multiply(other));
  return new goog.math.Integer.DivisionResult(res, remainder);
};
goog.math.Integer.prototype.divide = function(other) {
  return this.divideAndRemainder(other).quotient;
};
goog.math.Integer.DivisionResult = function(quotient, remainder) {
  this.quotient = quotient;
  this.remainder = remainder;
};
goog.math.Integer.prototype.divideAndRemainder = function(other) {
  if (other.isZero()) {
    throw new Error("division by zero");
  } else if (this.isZero()) {
    return new goog.math.Integer.DivisionResult(goog.math.Integer.ZERO, goog.math.Integer.ZERO);
  }
  if (this.isNegative()) {
    var result = this.negate().divideAndRemainder(other);
    return new goog.math.Integer.DivisionResult(result.quotient.negate(), result.remainder.negate());
  } else if (other.isNegative()) {
    var result = this.divideAndRemainder(other.negate());
    return new goog.math.Integer.DivisionResult(result.quotient.negate(), result.remainder);
  }
  if (this.bits_.length > 30) {
    return this.slowDivide_(other);
  }
  var res = goog.math.Integer.ZERO;
  var rem = this;
  while (rem.greaterThanOrEqual(other)) {
    var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
    var log2 = Math.ceil(Math.log(approx) / Math.LN2);
    var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
    var approxRes = goog.math.Integer.fromNumber(approx);
    var approxRem = approxRes.multiply(other);
    while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
      approx -= delta;
      approxRes = goog.math.Integer.fromNumber(approx);
      approxRem = approxRes.multiply(other);
    }
    if (approxRes.isZero()) {
      approxRes = goog.math.Integer.ONE;
    }
    res = res.add(approxRes);
    rem = rem.subtract(approxRem);
  }
  return new goog.math.Integer.DivisionResult(res, rem);
};
goog.math.Integer.prototype.modulo = function(other) {
  return this.divideAndRemainder(other).remainder;
};
goog.math.Integer.prototype.not = function() {
  var len = this.bits_.length;
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = ~this.bits_[i];
  }
  return new goog.math.Integer(arr, ~this.sign_);
};
goog.math.Integer.prototype.and = function(other) {
  var len = Math.max(this.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = this.getBits(i) & other.getBits(i);
  }
  return new goog.math.Integer(arr, this.sign_ & other.sign_);
};
goog.math.Integer.prototype.or = function(other) {
  var len = Math.max(this.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = this.getBits(i) | other.getBits(i);
  }
  return new goog.math.Integer(arr, this.sign_ | other.sign_);
};
goog.math.Integer.prototype.xor = function(other) {
  var len = Math.max(this.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = this.getBits(i) ^ other.getBits(i);
  }
  return new goog.math.Integer(arr, this.sign_ ^ other.sign_);
};
goog.math.Integer.prototype.shiftLeft = function(numBits) {
  var arr_delta = numBits >> 5;
  var bit_delta = numBits % 32;
  var len = this.bits_.length + arr_delta + (bit_delta > 0 ? 1 : 0);
  var arr = [];
  for (var i = 0; i < len; i++) {
    if (bit_delta > 0) {
      arr[i] = this.getBits(i - arr_delta) << bit_delta | this.getBits(i - arr_delta - 1) >>> 32 - bit_delta;
    } else {
      arr[i] = this.getBits(i - arr_delta);
    }
  }
  return new goog.math.Integer(arr, this.sign_);
};
goog.math.Integer.prototype.shiftRight = function(numBits) {
  var arr_delta = numBits >> 5;
  var bit_delta = numBits % 32;
  var len = this.bits_.length - arr_delta;
  var arr = [];
  for (var i = 0; i < len; i++) {
    if (bit_delta > 0) {
      arr[i] = this.getBits(i + arr_delta) >>> bit_delta | this.getBits(i + arr_delta + 1) << 32 - bit_delta;
    } else {
      arr[i] = this.getBits(i + arr_delta);
    }
  }
  return new goog.math.Integer(arr, this.sign_);
};

$CLJS.SHADOW_ENV.setLoaded("goog.math.integer.js");

goog.provide("goog.dom.HtmlElement");
goog.dom.HtmlElement = function() {
};

$CLJS.SHADOW_ENV.setLoaded("goog.dom.htmlelement.js");

goog.provide("goog.dom.TagName");
goog.require("goog.dom.HtmlElement");
goog.dom.TagName = class {
  static cast(name, type) {
    return name;
  }
  constructor() {
    this.googDomTagName_doNotImplementThisTypeOrElse_;
    this.ensureTypeScriptRemembersTypeT_;
  }
  toString() {
  }
};
goog.dom.TagName.A = "A";
goog.dom.TagName.ABBR = "ABBR";
goog.dom.TagName.ACRONYM = "ACRONYM";
goog.dom.TagName.ADDRESS = "ADDRESS";
goog.dom.TagName.APPLET = "APPLET";
goog.dom.TagName.AREA = "AREA";
goog.dom.TagName.ARTICLE = "ARTICLE";
goog.dom.TagName.ASIDE = "ASIDE";
goog.dom.TagName.AUDIO = "AUDIO";
goog.dom.TagName.B = "B";
goog.dom.TagName.BASE = "BASE";
goog.dom.TagName.BASEFONT = "BASEFONT";
goog.dom.TagName.BDI = "BDI";
goog.dom.TagName.BDO = "BDO";
goog.dom.TagName.BIG = "BIG";
goog.dom.TagName.BLOCKQUOTE = "BLOCKQUOTE";
goog.dom.TagName.BODY = "BODY";
goog.dom.TagName.BR = "BR";
goog.dom.TagName.BUTTON = "BUTTON";
goog.dom.TagName.CANVAS = "CANVAS";
goog.dom.TagName.CAPTION = "CAPTION";
goog.dom.TagName.CENTER = "CENTER";
goog.dom.TagName.CITE = "CITE";
goog.dom.TagName.CODE = "CODE";
goog.dom.TagName.COL = "COL";
goog.dom.TagName.COLGROUP = "COLGROUP";
goog.dom.TagName.COMMAND = "COMMAND";
goog.dom.TagName.DATA = "DATA";
goog.dom.TagName.DATALIST = "DATALIST";
goog.dom.TagName.DD = "DD";
goog.dom.TagName.DEL = "DEL";
goog.dom.TagName.DETAILS = "DETAILS";
goog.dom.TagName.DFN = "DFN";
goog.dom.TagName.DIALOG = "DIALOG";
goog.dom.TagName.DIR = "DIR";
goog.dom.TagName.DIV = "DIV";
goog.dom.TagName.DL = "DL";
goog.dom.TagName.DT = "DT";
goog.dom.TagName.EM = "EM";
goog.dom.TagName.EMBED = "EMBED";
goog.dom.TagName.FIELDSET = "FIELDSET";
goog.dom.TagName.FIGCAPTION = "FIGCAPTION";
goog.dom.TagName.FIGURE = "FIGURE";
goog.dom.TagName.FONT = "FONT";
goog.dom.TagName.FOOTER = "FOOTER";
goog.dom.TagName.FORM = "FORM";
goog.dom.TagName.FRAME = "FRAME";
goog.dom.TagName.FRAMESET = "FRAMESET";
goog.dom.TagName.H1 = "H1";
goog.dom.TagName.H2 = "H2";
goog.dom.TagName.H3 = "H3";
goog.dom.TagName.H4 = "H4";
goog.dom.TagName.H5 = "H5";
goog.dom.TagName.H6 = "H6";
goog.dom.TagName.HEAD = "HEAD";
goog.dom.TagName.HEADER = "HEADER";
goog.dom.TagName.HGROUP = "HGROUP";
goog.dom.TagName.HR = "HR";
goog.dom.TagName.HTML = "HTML";
goog.dom.TagName.I = "I";
goog.dom.TagName.IFRAME = "IFRAME";
goog.dom.TagName.IMG = "IMG";
goog.dom.TagName.INPUT = "INPUT";
goog.dom.TagName.INS = "INS";
goog.dom.TagName.ISINDEX = "ISINDEX";
goog.dom.TagName.KBD = "KBD";
goog.dom.TagName.KEYGEN = "KEYGEN";
goog.dom.TagName.LABEL = "LABEL";
goog.dom.TagName.LEGEND = "LEGEND";
goog.dom.TagName.LI = "LI";
goog.dom.TagName.LINK = "LINK";
goog.dom.TagName.MAIN = "MAIN";
goog.dom.TagName.MAP = "MAP";
goog.dom.TagName.MARK = "MARK";
goog.dom.TagName.MATH = "MATH";
goog.dom.TagName.MENU = "MENU";
goog.dom.TagName.MENUITEM = "MENUITEM";
goog.dom.TagName.META = "META";
goog.dom.TagName.METER = "METER";
goog.dom.TagName.NAV = "NAV";
goog.dom.TagName.NOFRAMES = "NOFRAMES";
goog.dom.TagName.NOSCRIPT = "NOSCRIPT";
goog.dom.TagName.OBJECT = "OBJECT";
goog.dom.TagName.OL = "OL";
goog.dom.TagName.OPTGROUP = "OPTGROUP";
goog.dom.TagName.OPTION = "OPTION";
goog.dom.TagName.OUTPUT = "OUTPUT";
goog.dom.TagName.P = "P";
goog.dom.TagName.PARAM = "PARAM";
goog.dom.TagName.PICTURE = "PICTURE";
goog.dom.TagName.PRE = "PRE";
goog.dom.TagName.PROGRESS = "PROGRESS";
goog.dom.TagName.Q = "Q";
goog.dom.TagName.RP = "RP";
goog.dom.TagName.RT = "RT";
goog.dom.TagName.RTC = "RTC";
goog.dom.TagName.RUBY = "RUBY";
goog.dom.TagName.S = "S";
goog.dom.TagName.SAMP = "SAMP";
goog.dom.TagName.SCRIPT = "SCRIPT";
goog.dom.TagName.SECTION = "SECTION";
goog.dom.TagName.SELECT = "SELECT";
goog.dom.TagName.SMALL = "SMALL";
goog.dom.TagName.SOURCE = "SOURCE";
goog.dom.TagName.SPAN = "SPAN";
goog.dom.TagName.STRIKE = "STRIKE";
goog.dom.TagName.STRONG = "STRONG";
goog.dom.TagName.STYLE = "STYLE";
goog.dom.TagName.SUB = "SUB";
goog.dom.TagName.SUMMARY = "SUMMARY";
goog.dom.TagName.SUP = "SUP";
goog.dom.TagName.SVG = "SVG";
goog.dom.TagName.TABLE = "TABLE";
goog.dom.TagName.TBODY = "TBODY";
goog.dom.TagName.TD = "TD";
goog.dom.TagName.TEMPLATE = "TEMPLATE";
goog.dom.TagName.TEXTAREA = "TEXTAREA";
goog.dom.TagName.TFOOT = "TFOOT";
goog.dom.TagName.TH = "TH";
goog.dom.TagName.THEAD = "THEAD";
goog.dom.TagName.TIME = "TIME";
goog.dom.TagName.TITLE = "TITLE";
goog.dom.TagName.TR = "TR";
goog.dom.TagName.TRACK = "TRACK";
goog.dom.TagName.TT = "TT";
goog.dom.TagName.U = "U";
goog.dom.TagName.UL = "UL";
goog.dom.TagName.VAR = "VAR";
goog.dom.TagName.VIDEO = "VIDEO";
goog.dom.TagName.WBR = "WBR";

$CLJS.SHADOW_ENV.setLoaded("goog.dom.tagname.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.dom.element");
  goog.module.declareLegacyNamespace();
  const NodeType = goog.require("goog.dom.NodeType");
  const TagName = goog.require("goog.dom.TagName");
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  const isElement = value => {
    return goog.isObject(value) && value.nodeType === NodeType.ELEMENT;
  };
  const isHtmlElement = value => {
    return goog.isObject(value) && isElement(value) && (!value.namespaceURI || value.namespaceURI === HTML_NAMESPACE);
  };
  const isHtmlElementOfType = (value, tagName) => {
    return goog.isObject(value) && isHtmlElement(value) && value.tagName.toUpperCase() === tagName.toString();
  };
  const isHtmlAnchorElement = value => {
    return isHtmlElementOfType(value, TagName.A);
  };
  const isHtmlButtonElement = value => {
    return isHtmlElementOfType(value, TagName.BUTTON);
  };
  const isHtmlLinkElement = value => {
    return isHtmlElementOfType(value, TagName.LINK);
  };
  const isHtmlImageElement = value => {
    return isHtmlElementOfType(value, TagName.IMG);
  };
  const isHtmlAudioElement = value => {
    return isHtmlElementOfType(value, TagName.AUDIO);
  };
  const isHtmlVideoElement = value => {
    return isHtmlElementOfType(value, TagName.VIDEO);
  };
  const isHtmlInputElement = value => {
    return isHtmlElementOfType(value, TagName.INPUT);
  };
  const isHtmlTextAreaElement = value => {
    return isHtmlElementOfType(value, TagName.TEXTAREA);
  };
  const isHtmlCanvasElement = value => {
    return isHtmlElementOfType(value, TagName.CANVAS);
  };
  const isHtmlEmbedElement = value => {
    return isHtmlElementOfType(value, TagName.EMBED);
  };
  const isHtmlFormElement = value => {
    return isHtmlElementOfType(value, TagName.FORM);
  };
  const isHtmlFrameElement = value => {
    return isHtmlElementOfType(value, TagName.FRAME);
  };
  const isHtmlIFrameElement = value => {
    return isHtmlElementOfType(value, TagName.IFRAME);
  };
  const isHtmlObjectElement = value => {
    return isHtmlElementOfType(value, TagName.OBJECT);
  };
  const isHtmlScriptElement = value => {
    return isHtmlElementOfType(value, TagName.SCRIPT);
  };
  exports = {isElement, isHtmlElement, isHtmlElementOfType, isHtmlAnchorElement, isHtmlButtonElement, isHtmlLinkElement, isHtmlImageElement, isHtmlAudioElement, isHtmlVideoElement, isHtmlInputElement, isHtmlTextAreaElement, isHtmlCanvasElement, isHtmlEmbedElement, isHtmlFormElement, isHtmlFrameElement, isHtmlIFrameElement, isHtmlObjectElement, isHtmlScriptElement,};
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.dom.element.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.asserts.dom");
  goog.module.declareLegacyNamespace();
  const TagName = goog.require("goog.dom.TagName");
  const asserts = goog.require("goog.asserts");
  const element = goog.require("goog.dom.element");
  const assertIsElement = value => {
    if (asserts.ENABLE_ASSERTS && !element.isElement(value)) {
      asserts.fail(`Argument is not an Element; got: ${debugStringForType(value)}`);
    }
    return value;
  };
  const assertIsHtmlElement = value => {
    if (asserts.ENABLE_ASSERTS && !element.isHtmlElement(value)) {
      asserts.fail(`Argument is not an HTML Element; got: ${debugStringForType(value)}`);
    }
    return value;
  };
  const assertIsHtmlElementOfType = (value, tagName) => {
    if (asserts.ENABLE_ASSERTS && !element.isHtmlElementOfType(value, tagName)) {
      asserts.fail(`Argument is not an HTML Element with tag name ` + `${tagName.toString()}; got: ${debugStringForType(value)}`);
    }
    return value;
  };
  const assertIsHtmlAnchorElement = value => {
    return assertIsHtmlElementOfType(value, TagName.A);
  };
  const assertIsHtmlButtonElement = value => {
    return assertIsHtmlElementOfType(value, TagName.BUTTON);
  };
  const assertIsHtmlLinkElement = value => {
    return assertIsHtmlElementOfType(value, TagName.LINK);
  };
  const assertIsHtmlImageElement = value => {
    return assertIsHtmlElementOfType(value, TagName.IMG);
  };
  const assertIsHtmlAudioElement = value => {
    return assertIsHtmlElementOfType(value, TagName.AUDIO);
  };
  const assertIsHtmlVideoElement = value => {
    return assertIsHtmlElementOfType(value, TagName.VIDEO);
  };
  const assertIsHtmlInputElement = value => {
    return assertIsHtmlElementOfType(value, TagName.INPUT);
  };
  const assertIsHtmlTextAreaElement = value => {
    return assertIsHtmlElementOfType(value, TagName.TEXTAREA);
  };
  const assertIsHtmlCanvasElement = value => {
    return assertIsHtmlElementOfType(value, TagName.CANVAS);
  };
  const assertIsHtmlEmbedElement = value => {
    return assertIsHtmlElementOfType(value, TagName.EMBED);
  };
  const assertIsHtmlFormElement = value => {
    return assertIsHtmlElementOfType(value, TagName.FORM);
  };
  const assertIsHtmlFrameElement = value => {
    return assertIsHtmlElementOfType(value, TagName.FRAME);
  };
  const assertIsHtmlIFrameElement = value => {
    return assertIsHtmlElementOfType(value, TagName.IFRAME);
  };
  const assertIsHtmlObjectElement = value => {
    return assertIsHtmlElementOfType(value, TagName.OBJECT);
  };
  const assertIsHtmlScriptElement = value => {
    return assertIsHtmlElementOfType(value, TagName.SCRIPT);
  };
  const debugStringForType = value => {
    if (goog.isObject(value)) {
      try {
        return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
      } catch (e) {
        return "\x3cobject could not be stringified\x3e";
      }
    } else {
      return value === undefined ? "undefined" : value === null ? "null" : typeof value;
    }
  };
  exports = {assertIsElement, assertIsHtmlElement, assertIsHtmlElementOfType, assertIsHtmlAnchorElement, assertIsHtmlButtonElement, assertIsHtmlLinkElement, assertIsHtmlImageElement, assertIsHtmlAudioElement, assertIsHtmlVideoElement, assertIsHtmlInputElement, assertIsHtmlTextAreaElement, assertIsHtmlCanvasElement, assertIsHtmlEmbedElement, assertIsHtmlFormElement, assertIsHtmlFrameElement, assertIsHtmlIFrameElement, assertIsHtmlObjectElement, assertIsHtmlScriptElement,};
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.asserts.dom.js");

goog.provide("goog.dom.asserts");
goog.require("goog.asserts");
goog.dom.asserts.assertIsLocation = function(o) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var win = goog.dom.asserts.getWindow_(o);
    if (win) {
      if (!o || !(o instanceof win.Location) && o instanceof win.Element) {
        goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(o));
      }
    }
  }
  return o;
};
goog.dom.asserts.debugStringForType_ = function(value) {
  if (goog.isObject(value)) {
    try {
      return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
    } catch (e) {
      return "\x3cobject could not be stringified\x3e";
    }
  } else {
    return value === undefined ? "undefined" : value === null ? "null" : typeof value;
  }
};
goog.dom.asserts.getWindow_ = function(o) {
  try {
    var doc = o && o.ownerDocument;
    var win = doc && (doc.defaultView || doc.parentWindow);
    win = win || goog.global;
    if (win.Element && win.Location) {
      return win;
    }
  } catch (ex) {
  }
  return null;
};

$CLJS.SHADOW_ENV.setLoaded("goog.dom.asserts.js");

goog.provide("goog.functions");
goog.functions.constant = function(retValue) {
  return function() {
    return retValue;
  };
};
goog.functions.FALSE = function() {
  return false;
};
goog.functions.TRUE = function() {
  return true;
};
goog.functions.NULL = function() {
  return null;
};
goog.functions.UNDEFINED = function() {
  return undefined;
};
goog.functions.EMPTY = goog.functions.UNDEFINED;
goog.functions.identity = function(opt_returnValue, var_args) {
  return opt_returnValue;
};
goog.functions.error = function(message) {
  return function() {
    throw new Error(message);
  };
};
goog.functions.fail = function(err) {
  return function() {
    throw err;
  };
};
goog.functions.lock = function(f, opt_numArgs) {
  opt_numArgs = opt_numArgs || 0;
  return function() {
    const self = this;
    return f.apply(self, Array.prototype.slice.call(arguments, 0, opt_numArgs));
  };
};
goog.functions.nth = function(n) {
  return function() {
    return arguments[n];
  };
};
goog.functions.partialRight = function(fn, var_args) {
  const rightArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    let self = this;
    if (self === goog.global) {
      self = undefined;
    }
    const newArgs = Array.prototype.slice.call(arguments);
    newArgs.push.apply(newArgs, rightArgs);
    return fn.apply(self, newArgs);
  };
};
goog.functions.withReturnValue = function(f, retValue) {
  return goog.functions.sequence(f, goog.functions.constant(retValue));
};
goog.functions.equalTo = function(value, opt_useLooseComparison) {
  return function(other) {
    return opt_useLooseComparison ? value == other : value === other;
  };
};
goog.functions.compose = function(fn, var_args) {
  const functions = arguments;
  const length = functions.length;
  return function() {
    const self = this;
    let result;
    if (length) {
      result = functions[length - 1].apply(self, arguments);
    }
    for (let i = length - 2; i >= 0; i--) {
      result = functions[i].call(self, result);
    }
    return result;
  };
};
goog.functions.sequence = function(var_args) {
  const functions = arguments;
  const length = functions.length;
  return function() {
    const self = this;
    let result;
    for (let i = 0; i < length; i++) {
      result = functions[i].apply(self, arguments);
    }
    return result;
  };
};
goog.functions.and = function(var_args) {
  const functions = arguments;
  const length = functions.length;
  return function() {
    const self = this;
    for (let i = 0; i < length; i++) {
      if (!functions[i].apply(self, arguments)) {
        return false;
      }
    }
    return true;
  };
};
goog.functions.or = function(var_args) {
  const functions = arguments;
  const length = functions.length;
  return function() {
    const self = this;
    for (let i = 0; i < length; i++) {
      if (functions[i].apply(self, arguments)) {
        return true;
      }
    }
    return false;
  };
};
goog.functions.not = function(f) {
  return function() {
    const self = this;
    return !f.apply(self, arguments);
  };
};
goog.functions.create = function(constructor, var_args) {
  const temp = function() {
  };
  temp.prototype = constructor.prototype;
  const obj = new temp();
  constructor.apply(obj, Array.prototype.slice.call(arguments, 1));
  return obj;
};
goog.functions.CACHE_RETURN_VALUE = goog.define("goog.functions.CACHE_RETURN_VALUE", true);
goog.functions.cacheReturnValue = function(fn) {
  let called = false;
  let value;
  return function() {
    if (!goog.functions.CACHE_RETURN_VALUE) {
      return fn();
    }
    if (!called) {
      value = fn();
      called = true;
    }
    return value;
  };
};
goog.functions.once = function(f) {
  let inner = f;
  return function() {
    if (inner) {
      const tmp = inner;
      inner = null;
      tmp();
    }
  };
};
goog.functions.debounce = function(f, interval, opt_scope) {
  let timeout = 0;
  return function(var_args) {
    goog.global.clearTimeout(timeout);
    const args = arguments;
    timeout = goog.global.setTimeout(function() {
      f.apply(opt_scope, args);
    }, interval);
  };
};
goog.functions.throttle = function(f, interval, opt_scope) {
  let timeout = 0;
  let shouldFire = false;
  let storedArgs = [];
  const handleTimeout = function() {
    timeout = 0;
    if (shouldFire) {
      shouldFire = false;
      fire();
    }
  };
  const fire = function() {
    timeout = goog.global.setTimeout(handleTimeout, interval);
    let args = storedArgs;
    storedArgs = [];
    f.apply(opt_scope, args);
  };
  return function(var_args) {
    storedArgs = arguments;
    if (!timeout) {
      fire();
    } else {
      shouldFire = true;
    }
  };
};
goog.functions.rateLimit = function(f, interval, opt_scope) {
  let timeout = 0;
  const handleTimeout = function() {
    timeout = 0;
  };
  return function(var_args) {
    if (!timeout) {
      timeout = goog.global.setTimeout(handleTimeout, interval);
      f.apply(opt_scope, arguments);
    }
  };
};
goog.functions.isFunction = val => {
  return typeof val === "function";
};

$CLJS.SHADOW_ENV.setLoaded("goog.functions.functions.js");

goog.provide("goog.string.TypedString");
goog.string.TypedString = function() {
};
goog.string.TypedString.prototype.implementsGoogStringTypedString;
goog.string.TypedString.prototype.getTypedStringValue;

$CLJS.SHADOW_ENV.setLoaded("goog.string.typedstring.js");

goog.provide("goog.string.Const");
goog.require("goog.asserts");
goog.require("goog.string.TypedString");
goog.string.Const = function(opt_token, opt_content) {
  this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = opt_token === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && opt_content || "";
  this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
};
goog.string.Const.prototype.implementsGoogStringTypedString = true;
goog.string.Const.prototype.getTypedStringValue = function() {
  return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
};
if (goog.DEBUG) {
  goog.string.Const.prototype.toString = function() {
    return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
  };
}
goog.string.Const.unwrap = function(stringConst) {
  if (stringConst instanceof goog.string.Const && stringConst.constructor === goog.string.Const && stringConst.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_) {
    return stringConst.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
  } else {
    goog.asserts.fail("expected object of type Const, got '" + stringConst + "'");
    return "type_error:Const";
  }
};
goog.string.Const.from = function(s) {
  return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, s);
};
goog.string.Const.TYPE_MARKER_ = {};
goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.string.Const.EMPTY = goog.string.Const.from("");

$CLJS.SHADOW_ENV.setLoaded("goog.string.const.js");

goog.provide("goog.html.trustedtypes");
goog.html.trustedtypes.POLICY_NAME = goog.define("goog.html.trustedtypes.POLICY_NAME", goog.TRUSTED_TYPES_POLICY_NAME ? goog.TRUSTED_TYPES_POLICY_NAME + "#html" : "");
goog.html.trustedtypes.cachedPolicy_;
goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function() {
  if (!goog.html.trustedtypes.POLICY_NAME) {
    return null;
  }
  if (goog.html.trustedtypes.cachedPolicy_ === undefined) {
    goog.html.trustedtypes.cachedPolicy_ = goog.createTrustedTypesPolicy(goog.html.trustedtypes.POLICY_NAME);
  }
  return goog.html.trustedtypes.cachedPolicy_;
};

$CLJS.SHADOW_ENV.setLoaded("goog.html.trustedtypes.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeScript");
  goog.module.declareLegacyNamespace();
  const Const = goog.require("goog.string.Const");
  const TypedString = goog.require("goog.string.TypedString");
  const trustedtypes = goog.require("goog.html.trustedtypes");
  const {fail} = goog.require("goog.asserts");
  const CONSTRUCTOR_TOKEN_PRIVATE = {};
  class SafeScript {
    constructor(value, token) {
      this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
      this.implementsGoogStringTypedString = true;
    }
    toString() {
      return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
    }
    static fromConstant(script) {
      const scriptString = Const.unwrap(script);
      if (scriptString.length === 0) {
        return SafeScript.EMPTY;
      }
      return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(scriptString);
    }
    static fromJson(val) {
      return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(SafeScript.stringify_(val));
    }
    getTypedStringValue() {
      return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
    }
    static unwrap(safeScript) {
      return SafeScript.unwrapTrustedScript(safeScript).toString();
    }
    static unwrapTrustedScript(safeScript) {
      if (safeScript instanceof SafeScript && safeScript.constructor === SafeScript) {
        return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_;
      } else {
        fail("expected object of type SafeScript, got '" + safeScript + "' of type " + goog.typeOf(safeScript));
        return "type_error:SafeScript";
      }
    }
    static stringify_(val) {
      const json = JSON.stringify(val);
      return json.replace(/</g, "\\x3c");
    }
    static createSafeScriptSecurityPrivateDoNotAccessOrElse(script) {
      const noinlineScript = script;
      const policy = trustedtypes.getPolicyPrivateDoNotAccessOrElse();
      const trustedScript = policy ? policy.createScript(noinlineScript) : noinlineScript;
      return new SafeScript(trustedScript, CONSTRUCTOR_TOKEN_PRIVATE);
    }
  }
  SafeScript.EMPTY = {valueOf:function() {
    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
  },}.valueOf();
  exports = SafeScript;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.html.safescript.js");

goog.provide("goog.fs.url");
goog.fs.url.createObjectUrl = function(obj) {
  return goog.fs.url.getUrlObject_().createObjectURL(obj);
};
goog.fs.url.revokeObjectUrl = function(url) {
  goog.fs.url.getUrlObject_().revokeObjectURL(url);
};
goog.fs.url.UrlObject_ = function() {
};
goog.fs.url.UrlObject_.prototype.createObjectURL = function(arg) {
};
goog.fs.url.UrlObject_.prototype.revokeObjectURL = function(s) {
};
goog.fs.url.getUrlObject_ = function() {
  const urlObject = goog.fs.url.findUrlObject_();
  if (urlObject != null) {
    return urlObject;
  } else {
    throw new Error("This browser doesn't seem to support blob URLs");
  }
};
goog.fs.url.findUrlObject_ = function() {
  if (goog.global.URL !== undefined && goog.global.URL.createObjectURL !== undefined) {
    return goog.global.URL;
  } else if (goog.global.createObjectURL !== undefined) {
    return goog.global;
  } else {
    return null;
  }
};
goog.fs.url.browserSupportsObjectUrls = function() {
  return goog.fs.url.findUrlObject_() != null;
};

$CLJS.SHADOW_ENV.setLoaded("goog.fs.url.js");

goog.provide("goog.fs.blob");
goog.fs.blob.getBlob = function(var_args) {
  const BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (BlobBuilder !== undefined) {
    const bb = new BlobBuilder();
    for (let i = 0; i < arguments.length; i++) {
      bb.append(arguments[i]);
    }
    return bb.getBlob();
  } else {
    return goog.fs.blob.getBlobWithProperties(Array.prototype.slice.call(arguments));
  }
};
goog.fs.blob.getBlobWithProperties = function(parts, opt_type, opt_endings) {
  const BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (BlobBuilder !== undefined) {
    const bb = new BlobBuilder();
    for (let i = 0; i < parts.length; i++) {
      bb.append(parts[i], opt_endings);
    }
    return bb.getBlob(opt_type);
  } else if (goog.global.Blob !== undefined) {
    const properties = {};
    if (opt_type) {
      properties["type"] = opt_type;
    }
    if (opt_endings) {
      properties["endings"] = opt_endings;
    }
    return new Blob(parts, properties);
  } else {
    throw new Error("This browser doesn't seem to support creating Blobs");
  }
};

$CLJS.SHADOW_ENV.setLoaded("goog.fs.blob.js");

goog.provide("goog.html.TrustedResourceUrl");
goog.require("goog.asserts");
goog.require("goog.fs.blob");
goog.require("goog.fs.url");
goog.require("goog.html.SafeScript");
goog.require("goog.html.trustedtypes");
goog.require("goog.string.Const");
goog.require("goog.string.TypedString");
goog.html.TrustedResourceUrl = class {
  constructor(value, token) {
    this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = token === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? value : "";
  }
  toString() {
    return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "";
  }
};
goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
  return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
};
goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(searchParams, opt_hashParams) {
  var url = goog.html.TrustedResourceUrl.unwrap(this);
  var parts = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(url);
  var urlBase = parts[1];
  var urlSearch = parts[2] || "";
  var urlHash = parts[3] || "";
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(urlBase + goog.html.TrustedResourceUrl.stringifyParams_("?", urlSearch, searchParams) + goog.html.TrustedResourceUrl.stringifyParams_("#", urlHash, opt_hashParams));
};
goog.html.TrustedResourceUrl.unwrap = function(trustedResourceUrl) {
  return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(trustedResourceUrl).toString();
};
goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(trustedResourceUrl) {
  if (trustedResourceUrl instanceof goog.html.TrustedResourceUrl && trustedResourceUrl.constructor === goog.html.TrustedResourceUrl) {
    return trustedResourceUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
  } else {
    goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + trustedResourceUrl + "' of type " + goog.typeOf(trustedResourceUrl));
    return "type_error:TrustedResourceUrl";
  }
};
goog.html.TrustedResourceUrl.format = function(format, args) {
  var formatStr = goog.string.Const.unwrap(format);
  if (!goog.html.TrustedResourceUrl.BASE_URL_.test(formatStr)) {
    throw new Error("Invalid TrustedResourceUrl format: " + formatStr);
  }
  var result = formatStr.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(match, id) {
    if (!Object.prototype.hasOwnProperty.call(args, id)) {
      throw new Error('Found marker, "' + id + '", in format string, "' + formatStr + '", but no valid label mapping found ' + "in args: " + JSON.stringify(args));
    }
    var arg = args[id];
    if (arg instanceof goog.string.Const) {
      return goog.string.Const.unwrap(arg);
    } else {
      return encodeURIComponent(String(arg));
    }
  });
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(result);
};
goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
goog.html.TrustedResourceUrl.BASE_URL_ = new RegExp("^((https:)?//[0-9a-z.:[\\]-]+/" + "|/[^/\\\\]" + "|[^:/\\\\%]+/" + "|[^:/\\\\%]*[?#]" + "|about:blank#" + ")", "i");
goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
goog.html.TrustedResourceUrl.formatWithParams = function(format, args, searchParams, opt_hashParams) {
  var url = goog.html.TrustedResourceUrl.format(format, args);
  return url.cloneWithParams(searchParams, opt_hashParams);
};
goog.html.TrustedResourceUrl.fromConstant = function(url) {
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(url));
};
goog.html.TrustedResourceUrl.fromConstants = function(parts) {
  var unwrapped = "";
  for (var i = 0; i < parts.length; i++) {
    unwrapped += goog.string.Const.unwrap(parts[i]);
  }
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(unwrapped);
};
goog.html.TrustedResourceUrl.fromSafeScript = function(safeScript) {
  var blob = goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(safeScript)], "text/javascript");
  var url = goog.fs.url.createObjectUrl(blob);
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(url) {
  const noinlineUrl = url;
  const policy = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
  const value = policy ? policy.createScriptURL(noinlineUrl) : noinlineUrl;
  return new goog.html.TrustedResourceUrl(value, goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_);
};
goog.html.TrustedResourceUrl.stringifyParams_ = function(prefix, currentString, params) {
  if (params == null) {
    return currentString;
  }
  if (typeof params === "string") {
    return params ? prefix + encodeURIComponent(params) : "";
  }
  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      var value = params[key];
      var outputValues = Array.isArray(value) ? value : [value];
      for (var i = 0; i < outputValues.length; i++) {
        var outputValue = outputValues[i];
        if (outputValue != null) {
          if (!currentString) {
            currentString = prefix;
          }
          currentString += (currentString.length > prefix.length ? "\x26" : "") + encodeURIComponent(key) + "\x3d" + encodeURIComponent(String(outputValue));
        }
      }
    }
  }
  return currentString;
};

$CLJS.SHADOW_ENV.setLoaded("goog.html.trustedresourceurl.js");

goog.provide("goog.string.internal");
goog.string.internal.startsWith = function(str, prefix) {
  return str.lastIndexOf(prefix, 0) == 0;
};
goog.string.internal.endsWith = function(str, suffix) {
  const l = str.length - suffix.length;
  return l >= 0 && str.indexOf(suffix, l) == l;
};
goog.string.internal.caseInsensitiveStartsWith = function(str, prefix) {
  return goog.string.internal.caseInsensitiveCompare(prefix, str.slice(0, prefix.length)) == 0;
};
goog.string.internal.caseInsensitiveEndsWith = function(str, suffix) {
  return goog.string.internal.caseInsensitiveCompare(suffix, str.slice(str.length - suffix.length)) == 0;
};
goog.string.internal.caseInsensitiveEquals = function(str1, str2) {
  return str1.toLowerCase() == str2.toLowerCase();
};
goog.string.internal.isEmptyOrWhitespace = function(str) {
  return /^[\s\xa0]*$/.test(str);
};
goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(str) {
  return str.trim();
} : function(str) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(str)[1];
};
goog.string.internal.caseInsensitiveCompare = function(str1, str2) {
  const test1 = String(str1).toLowerCase();
  const test2 = String(str2).toLowerCase();
  if (test1 < test2) {
    return -1;
  } else if (test1 == test2) {
    return 0;
  } else {
    return 1;
  }
};
goog.string.internal.newLineToBr = function(str, opt_xml) {
  return str.replace(/(\r\n|\r|\n)/g, opt_xml ? "\x3cbr /\x3e" : "\x3cbr\x3e");
};
goog.string.internal.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {
  if (opt_isLikelyToContainHtmlChars) {
    str = str.replace(goog.string.internal.AMP_RE_, "\x26amp;").replace(goog.string.internal.LT_RE_, "\x26lt;").replace(goog.string.internal.GT_RE_, "\x26gt;").replace(goog.string.internal.QUOT_RE_, "\x26quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "\x26#39;").replace(goog.string.internal.NULL_RE_, "\x26#0;");
    return str;
  } else {
    if (!goog.string.internal.ALL_RE_.test(str)) {
      return str;
    }
    if (str.indexOf("\x26") != -1) {
      str = str.replace(goog.string.internal.AMP_RE_, "\x26amp;");
    }
    if (str.indexOf("\x3c") != -1) {
      str = str.replace(goog.string.internal.LT_RE_, "\x26lt;");
    }
    if (str.indexOf("\x3e") != -1) {
      str = str.replace(goog.string.internal.GT_RE_, "\x26gt;");
    }
    if (str.indexOf('"') != -1) {
      str = str.replace(goog.string.internal.QUOT_RE_, "\x26quot;");
    }
    if (str.indexOf("'") != -1) {
      str = str.replace(goog.string.internal.SINGLE_QUOTE_RE_, "\x26#39;");
    }
    if (str.indexOf("\x00") != -1) {
      str = str.replace(goog.string.internal.NULL_RE_, "\x26#0;");
    }
    return str;
  }
};
goog.string.internal.AMP_RE_ = /&/g;
goog.string.internal.LT_RE_ = /</g;
goog.string.internal.GT_RE_ = />/g;
goog.string.internal.QUOT_RE_ = /"/g;
goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
goog.string.internal.NULL_RE_ = /\x00/g;
goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
goog.string.internal.whitespaceEscape = function(str, opt_xml) {
  return goog.string.internal.newLineToBr(str.replace(/  /g, " \x26#160;"), opt_xml);
};
goog.string.internal.contains = function(str, subString) {
  return str.indexOf(subString) != -1;
};
goog.string.internal.caseInsensitiveContains = function(str, subString) {
  return goog.string.internal.contains(str.toLowerCase(), subString.toLowerCase());
};
goog.string.internal.compareVersions = function(version1, version2) {
  let order = 0;
  const v1Subs = goog.string.internal.trim(String(version1)).split(".");
  const v2Subs = goog.string.internal.trim(String(version2)).split(".");
  const subCount = Math.max(v1Subs.length, v2Subs.length);
  for (let subIdx = 0; order == 0 && subIdx < subCount; subIdx++) {
    let v1Sub = v1Subs[subIdx] || "";
    let v2Sub = v2Subs[subIdx] || "";
    do {
      const v1Comp = /(\d*)(\D*)(.*)/.exec(v1Sub) || ["", "", "", ""];
      const v2Comp = /(\d*)(\D*)(.*)/.exec(v2Sub) || ["", "", "", ""];
      if (v1Comp[0].length == 0 && v2Comp[0].length == 0) {
        break;
      }
      const v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);
      const v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);
      order = goog.string.internal.compareElements_(v1CompNum, v2CompNum) || goog.string.internal.compareElements_(v1Comp[2].length == 0, v2Comp[2].length == 0) || goog.string.internal.compareElements_(v1Comp[2], v2Comp[2]);
      v1Sub = v1Comp[3];
      v2Sub = v2Comp[3];
    } while (order == 0);
  }
  return order;
};
goog.string.internal.compareElements_ = function(left, right) {
  if (left < right) {
    return -1;
  } else if (left > right) {
    return 1;
  }
  return 0;
};

$CLJS.SHADOW_ENV.setLoaded("goog.string.internal.js");

goog.provide("goog.html.SafeUrl");
goog.require("goog.asserts");
goog.require("goog.fs.url");
goog.require("goog.html.TrustedResourceUrl");
goog.require("goog.string.Const");
goog.require("goog.string.TypedString");
goog.require("goog.string.internal");
goog.html.SafeUrl = class {
  constructor(value, token) {
    this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = token === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? value : "";
  }
  toString() {
    return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
  }
};
goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
goog.html.SafeUrl.prototype.getTypedStringValue = function() {
  return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
};
goog.html.SafeUrl.unwrap = function(safeUrl) {
  if (safeUrl instanceof goog.html.SafeUrl && safeUrl.constructor === goog.html.SafeUrl) {
    return safeUrl.privateDoNotAccessOrElseSafeUrlWrappedValue_;
  } else {
    goog.asserts.fail("expected object of type SafeUrl, got '" + safeUrl + "' of type " + goog.typeOf(safeUrl));
    return "type_error:SafeUrl";
  }
};
goog.html.SafeUrl.fromConstant = function(url) {
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(url));
};
goog.html.SAFE_MIME_TYPE_PATTERN_ = new RegExp("^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|" + "font/\\w+|" + "image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif)|" + "video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))" + '(?:;\\w+\x3d(?:\\w+|"[\\w;,\x3d ]+"))*$', "i");
goog.html.SafeUrl.isSafeMimeType = function(mimeType) {
  return goog.html.SAFE_MIME_TYPE_PATTERN_.test(mimeType);
};
goog.html.SafeUrl.fromBlob = function(blob) {
  var url = goog.html.SafeUrl.isSafeMimeType(blob.type) ? goog.fs.url.createObjectUrl(blob) : goog.html.SafeUrl.INNOCUOUS_STRING;
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.SafeUrl.revokeObjectUrl = function(safeUrl) {
  var url = safeUrl.getTypedStringValue();
  if (url !== goog.html.SafeUrl.INNOCUOUS_STRING) {
    goog.fs.url.revokeObjectUrl(url);
  }
};
goog.html.SafeUrl.fromMediaSource = function(mediaSource) {
  goog.asserts.assert("MediaSource" in goog.global, "No support for MediaSource");
  const url = mediaSource instanceof MediaSource ? goog.fs.url.createObjectUrl(mediaSource) : goog.html.SafeUrl.INNOCUOUS_STRING;
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
goog.html.SafeUrl.tryFromDataUrl = function(dataUrl) {
  dataUrl = String(dataUrl);
  var filteredDataUrl = dataUrl.replace(/(%0A|%0D)/g, "");
  var match = filteredDataUrl.match(goog.html.DATA_URL_PATTERN_);
  if (match) {
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(filteredDataUrl);
  }
  return null;
};
goog.html.SafeUrl.fromDataUrl = function(dataUrl) {
  return goog.html.SafeUrl.tryFromDataUrl(dataUrl) || goog.html.SafeUrl.INNOCUOUS_URL;
};
goog.html.SafeUrl.fromTelUrl = function(telUrl) {
  if (!goog.string.internal.caseInsensitiveStartsWith(telUrl, "tel:")) {
    telUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(telUrl);
};
goog.html.SIP_URL_PATTERN_ = new RegExp("^sip[s]?:[+a-z0-9_.!$%\x26'*\\/\x3d^`{|}~-]+@([a-z0-9-]+\\.)+[a-z0-9]{2,63}$", "i");
goog.html.SafeUrl.fromSipUrl = function(sipUrl) {
  if (!goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(sipUrl))) {
    sipUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(sipUrl);
};
goog.html.SafeUrl.fromFacebookMessengerUrl = function(facebookMessengerUrl) {
  if (!goog.string.internal.caseInsensitiveStartsWith(facebookMessengerUrl, "fb-messenger://share")) {
    facebookMessengerUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(facebookMessengerUrl);
};
goog.html.SafeUrl.fromWhatsAppUrl = function(whatsAppUrl) {
  if (!goog.string.internal.caseInsensitiveStartsWith(whatsAppUrl, "whatsapp://send")) {
    whatsAppUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(whatsAppUrl);
};
goog.html.SafeUrl.fromSmsUrl = function(smsUrl) {
  if (!goog.string.internal.caseInsensitiveStartsWith(smsUrl, "sms:") || !goog.html.SafeUrl.isSmsUrlBodyValid_(smsUrl)) {
    smsUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(smsUrl);
};
goog.html.SafeUrl.isSmsUrlBodyValid_ = function(smsUrl) {
  var hash = smsUrl.indexOf("#");
  if (hash > 0) {
    smsUrl = smsUrl.substring(0, hash);
  }
  var bodyParams = smsUrl.match(/[?&]body=/gi);
  if (!bodyParams) {
    return true;
  }
  if (bodyParams.length > 1) {
    return false;
  }
  var bodyValue = smsUrl.match(/[?&]body=([^&]*)/)[1];
  if (!bodyValue) {
    return true;
  }
  try {
    decodeURIComponent(bodyValue);
  } catch (error) {
    return false;
  }
  return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(bodyValue);
};
goog.html.SafeUrl.fromSshUrl = function(sshUrl) {
  if (!goog.string.internal.caseInsensitiveStartsWith(sshUrl, "ssh://")) {
    sshUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(sshUrl);
};
goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(url, extensionId) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, url, extensionId);
};
goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(url, extensionId) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, url, extensionId);
};
goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(url, extensionId) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, url, extensionId);
};
goog.html.SafeUrl.sanitizeExtensionUrl_ = function(scheme, url, extensionId) {
  var matches = scheme.exec(url);
  if (!matches) {
    url = goog.html.SafeUrl.INNOCUOUS_STRING;
  } else {
    var extractedExtensionId = matches[1];
    var acceptedExtensionIds;
    if (extensionId instanceof goog.string.Const) {
      acceptedExtensionIds = [goog.string.Const.unwrap(extensionId)];
    } else {
      acceptedExtensionIds = extensionId.map(function unwrap(x) {
        return goog.string.Const.unwrap(x);
      });
    }
    if (acceptedExtensionIds.indexOf(extractedExtensionId) == -1) {
      url = goog.html.SafeUrl.INNOCUOUS_STRING;
    }
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.SafeUrl.fromTrustedResourceUrl = function(trustedResourceUrl) {
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(trustedResourceUrl));
};
goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
goog.html.SafeUrl.trySanitize = function(url) {
  if (url instanceof goog.html.SafeUrl) {
    return url;
  }
  if (typeof url == "object" && url.implementsGoogStringTypedString) {
    url = url.getTypedStringValue();
  } else {
    url = String(url);
  }
  if (!goog.html.SAFE_URL_PATTERN_.test(url)) {
    return goog.html.SafeUrl.tryFromDataUrl(url);
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.SafeUrl.sanitize = function(url) {
  return goog.html.SafeUrl.trySanitize(url) || goog.html.SafeUrl.INNOCUOUS_URL;
};
goog.html.SafeUrl.sanitizeAssertUnchanged = function(url, opt_allowDataUrl) {
  if (url instanceof goog.html.SafeUrl) {
    return url;
  } else if (typeof url == "object" && url.implementsGoogStringTypedString) {
    url = url.getTypedStringValue();
  } else {
    url = String(url);
  }
  if (opt_allowDataUrl && /^data:/i.test(url)) {
    var safeUrl = goog.html.SafeUrl.fromDataUrl(url);
    if (safeUrl.getTypedStringValue() == url) {
      return safeUrl;
    }
  }
  if (!goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(url), "%s does not match the safe URL pattern", url)) {
    url = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.SafeUrl.extractScheme = function(url) {
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch (e) {
    return "https:";
  }
  return parsedUrl.protocol;
};
goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged = function(url) {
  if (url instanceof goog.html.SafeUrl) {
    return url;
  } else if (typeof url == "object" && url.implementsGoogStringTypedString) {
    url = url.getTypedStringValue();
  } else {
    url = String(url);
  }
  const parsedScheme = goog.html.SafeUrl.extractScheme(url);
  if (!goog.asserts.assert(parsedScheme !== "javascript:", "%s is a javascript: URL", url)) {
    url = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(url) {
  return new goog.html.SafeUrl(url, goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_);
};
goog.html.SafeUrl.INNOCUOUS_URL = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.SafeUrl.INNOCUOUS_STRING);
goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");

$CLJS.SHADOW_ENV.setLoaded("goog.html.safeurl.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeStyle");
  goog.module.declareLegacyNamespace();
  const Const = goog.require("goog.string.Const");
  const SafeUrl = goog.require("goog.html.SafeUrl");
  const TypedString = goog.require("goog.string.TypedString");
  const {AssertionError, assert, fail} = goog.require("goog.asserts");
  const {contains, endsWith} = goog.require("goog.string.internal");
  const CONSTRUCTOR_TOKEN_PRIVATE = {};
  class SafeStyle {
    constructor(value, token) {
      this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
      this.implementsGoogStringTypedString = true;
    }
    static fromConstant(style) {
      const styleString = Const.unwrap(style);
      if (styleString.length === 0) {
        return SafeStyle.EMPTY;
      }
      assert(endsWith(styleString, ";"), `Last character of style string is not ';': ${styleString}`);
      assert(contains(styleString, ":"), "Style string must contain at least one ':', to " + 'specify a "name: value" pair: ' + styleString);
      return SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(styleString);
    }
    getTypedStringValue() {
      return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
    }
    toString() {
      return this.privateDoNotAccessOrElseSafeStyleWrappedValue_.toString();
    }
    static unwrap(safeStyle) {
      if (safeStyle instanceof SafeStyle && safeStyle.constructor === SafeStyle) {
        return safeStyle.privateDoNotAccessOrElseSafeStyleWrappedValue_;
      } else {
        fail(`expected object of type SafeStyle, got '${safeStyle}` + "' of type " + goog.typeOf(safeStyle));
        return "type_error:SafeStyle";
      }
    }
    static createSafeStyleSecurityPrivateDoNotAccessOrElse(style) {
      return new SafeStyle(style, CONSTRUCTOR_TOKEN_PRIVATE);
    }
    static create(map) {
      let style = "";
      for (let name in map) {
        if (Object.prototype.hasOwnProperty.call(map, name)) {
          if (!/^[-_a-zA-Z0-9]+$/.test(name)) {
            throw new Error(`Name allows only [-_a-zA-Z0-9], got: ${name}`);
          }
          let value = map[name];
          if (value == null) {
            continue;
          }
          if (Array.isArray(value)) {
            value = value.map(sanitizePropertyValue).join(" ");
          } else {
            value = sanitizePropertyValue(value);
          }
          style += `${name}:${value};`;
        }
      }
      if (!style) {
        return SafeStyle.EMPTY;
      }
      return SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style);
    }
    static concat(var_args) {
      let style = "";
      const addArgument = argument => {
        if (Array.isArray(argument)) {
          argument.forEach(addArgument);
        } else {
          style += SafeStyle.unwrap(argument);
        }
      };
      Array.prototype.forEach.call(arguments, addArgument);
      if (!style) {
        return SafeStyle.EMPTY;
      }
      return SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style);
    }
  }
  SafeStyle.EMPTY = SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
  SafeStyle.INNOCUOUS_STRING = "zClosurez";
  SafeStyle.PropertyValue;
  SafeStyle.PropertyMap;
  function sanitizePropertyValue(value) {
    if (value instanceof SafeUrl) {
      const url = SafeUrl.unwrap(value);
      return 'url("' + url.replace(/</g, "%3c").replace(/[\\"]/g, "\\$\x26") + '")';
    }
    const result = value instanceof Const ? Const.unwrap(value) : sanitizePropertyValueString(String(value));
    if (/[{;}]/.test(result)) {
      throw new AssertionError("Value does not allow [{;}], got: %s.", [result]);
    }
    return result;
  }
  function sanitizePropertyValueString(value) {
    const valueWithoutFunctions = value.replace(FUNCTIONS_RE, "$1").replace(FUNCTIONS_RE, "$1").replace(URL_RE, "url");
    if (!VALUE_RE.test(valueWithoutFunctions)) {
      fail(`String value allows only ${VALUE_ALLOWED_CHARS}` + " and simple functions, got: " + value);
      return SafeStyle.INNOCUOUS_STRING;
    } else if (COMMENT_RE.test(value)) {
      fail(`String value disallows comments, got: ${value}`);
      return SafeStyle.INNOCUOUS_STRING;
    } else if (!hasBalancedQuotes(value)) {
      fail(`String value requires balanced quotes, got: ${value}`);
      return SafeStyle.INNOCUOUS_STRING;
    } else if (!hasBalancedSquareBrackets(value)) {
      fail("String value requires balanced square brackets and one" + " identifier per pair of brackets, got: " + value);
      return SafeStyle.INNOCUOUS_STRING;
    }
    return sanitizeUrl(value);
  }
  function hasBalancedQuotes(value) {
    let outsideSingle = true;
    let outsideDouble = true;
    for (let i = 0; i < value.length; i++) {
      const c = value.charAt(i);
      if (c == "'" && outsideDouble) {
        outsideSingle = !outsideSingle;
      } else if (c == '"' && outsideSingle) {
        outsideDouble = !outsideDouble;
      }
    }
    return outsideSingle && outsideDouble;
  }
  function hasBalancedSquareBrackets(value) {
    let outside = true;
    const tokenRe = /^[-_a-zA-Z0-9]$/;
    for (let i = 0; i < value.length; i++) {
      const c = value.charAt(i);
      if (c == "]") {
        if (outside) {
          return false;
        }
        outside = true;
      } else if (c == "[") {
        if (!outside) {
          return false;
        }
        outside = false;
      } else if (!outside && !tokenRe.test(c)) {
        return false;
      }
    }
    return outside;
  }
  const VALUE_ALLOWED_CHARS = "[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]";
  const VALUE_RE = new RegExp(`^${VALUE_ALLOWED_CHARS}+\$`);
  const URL_RE = new RegExp("\\b(url\\([ \t\n]*)(" + "'[ -\x26(-\\[\\]-~]*'" + '|"[ !#-\\[\\]-~]*"' + "|[!#-\x26*-\\[\\]-~]*" + ")([ \t\n]*\\))", "g");
  const ALLOWED_FUNCTIONS = ["calc", "cubic-bezier", "fit-content", "hsl", "hsla", "linear-gradient", "matrix", "minmax", "radial-gradient", "repeat", "rgb", "rgba", "(rotate|scale|translate)(X|Y|Z|3d)?", "steps", "var",];
  const FUNCTIONS_RE = new RegExp("\\b(" + ALLOWED_FUNCTIONS.join("|") + ")" + "\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
  const COMMENT_RE = /\/\*/;
  function sanitizeUrl(value) {
    return value.replace(URL_RE, (match, before, url, after) => {
      let quote = "";
      url = url.replace(/^(['"])(.*)\1$/, (match, start, inside) => {
        quote = start;
        return inside;
      });
      const sanitized = SafeUrl.sanitize(url).getTypedStringValue();
      return before + quote + sanitized + quote + after;
    });
  }
  exports = SafeStyle;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.html.safestyle.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.object");
  goog.module.declareLegacyNamespace();
  function forEach(obj, f, opt_obj) {
    for (const key in obj) {
      f.call(opt_obj, obj[key], key, obj);
    }
  }
  function filter(obj, f, opt_obj) {
    const res = {};
    for (const key in obj) {
      if (f.call(opt_obj, obj[key], key, obj)) {
        res[key] = obj[key];
      }
    }
    return res;
  }
  function map(obj, f, opt_obj) {
    const res = {};
    for (const key in obj) {
      res[key] = f.call(opt_obj, obj[key], key, obj);
    }
    return res;
  }
  function some(obj, f, opt_obj) {
    for (const key in obj) {
      if (f.call(opt_obj, obj[key], key, obj)) {
        return true;
      }
    }
    return false;
  }
  function every(obj, f, opt_obj) {
    for (const key in obj) {
      if (!f.call(opt_obj, obj[key], key, obj)) {
        return false;
      }
    }
    return true;
  }
  function getCount(obj) {
    let rv = 0;
    for (const key in obj) {
      rv++;
    }
    return rv;
  }
  function getAnyKey(obj) {
    for (const key in obj) {
      return key;
    }
  }
  function getAnyValue(obj) {
    for (const key in obj) {
      return obj[key];
    }
  }
  function contains(obj, val) {
    return containsValue(obj, val);
  }
  function getValues(obj) {
    const res = [];
    let i = 0;
    for (const key in obj) {
      res[i++] = obj[key];
    }
    return res;
  }
  function getKeys(obj) {
    const res = [];
    let i = 0;
    for (const key in obj) {
      res[i++] = key;
    }
    return res;
  }
  function getValueByKeys(obj, var_args) {
    const isArrayLike = goog.isArrayLike(var_args);
    const keys = isArrayLike ? var_args : arguments;
    for (let i = isArrayLike ? 0 : 1; i < keys.length; i++) {
      if (obj == null) {
        return undefined;
      }
      obj = obj[keys[i]];
    }
    return obj;
  }
  function containsKey(obj, key) {
    return obj !== null && key in obj;
  }
  function containsValue(obj, val) {
    for (const key in obj) {
      if (obj[key] == val) {
        return true;
      }
    }
    return false;
  }
  function findKey(obj, f, thisObj = undefined) {
    for (const key in obj) {
      if (f.call(thisObj, obj[key], key, obj)) {
        return key;
      }
    }
    return undefined;
  }
  function findValue(obj, f, thisObj = undefined) {
    const key = findKey(obj, f, thisObj);
    return key && obj[key];
  }
  function isEmpty(obj) {
    for (const key in obj) {
      return false;
    }
    return true;
  }
  function clear(obj) {
    for (const i in obj) {
      delete obj[i];
    }
  }
  function remove(obj, key) {
    let rv;
    if (rv = key in obj) {
      delete obj[key];
    }
    return rv;
  }
  function add(obj, key, val) {
    if (obj !== null && key in obj) {
      throw new Error(`The object already contains the key "${key}"`);
    }
    set(obj, key, val);
  }
  function get(obj, key, val = undefined) {
    if (obj !== null && key in obj) {
      return obj[key];
    }
    return val;
  }
  function set(obj, key, value) {
    obj[key] = value;
  }
  function setIfUndefined(obj, key, value) {
    return key in obj ? obj[key] : obj[key] = value;
  }
  function setWithReturnValueIfNotSet(obj, key, f) {
    if (key in obj) {
      return obj[key];
    }
    const val = f();
    obj[key] = val;
    return val;
  }
  function equals(a, b) {
    for (const k in a) {
      if (!(k in b) || a[k] !== b[k]) {
        return false;
      }
    }
    for (const k in b) {
      if (!(k in a)) {
        return false;
      }
    }
    return true;
  }
  function clone(obj) {
    const res = {};
    for (const key in obj) {
      res[key] = obj[key];
    }
    return res;
  }
  function unsafeClone(obj) {
    if (!obj || typeof obj !== "object") {
      return obj;
    }
    if (typeof obj.clone === "function") {
      return obj.clone();
    }
    if (typeof Map !== "undefined" && obj instanceof Map) {
      return new Map(obj);
    } else if (typeof Set !== "undefined" && obj instanceof Set) {
      return new Set(obj);
    } else if (obj instanceof Date) {
      return new Date(obj.getTime());
    }
    const clone = Array.isArray(obj) ? [] : typeof ArrayBuffer === "function" && typeof ArrayBuffer.isView === "function" && ArrayBuffer.isView(obj) && !(obj instanceof DataView) ? new obj.constructor(obj.length) : {};
    for (const key in obj) {
      clone[key] = unsafeClone(obj[key]);
    }
    return clone;
  }
  function transpose(obj) {
    const transposed = {};
    for (const key in obj) {
      transposed[obj[key]] = key;
    }
    return transposed;
  }
  const PROTOTYPE_FIELDS = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf",];
  function extend(target, var_args) {
    let key;
    let source;
    for (let i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (key in source) {
        target[key] = source[key];
      }
      for (let j = 0; j < PROTOTYPE_FIELDS.length; j++) {
        key = PROTOTYPE_FIELDS[j];
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }
  function create(var_args) {
    const argLength = arguments.length;
    if (argLength == 1 && Array.isArray(arguments[0])) {
      return create.apply(null, arguments[0]);
    }
    if (argLength % 2) {
      throw new Error("Uneven number of arguments");
    }
    const rv = {};
    for (let i = 0; i < argLength; i += 2) {
      rv[arguments[i]] = arguments[i + 1];
    }
    return rv;
  }
  function createSet(var_args) {
    const argLength = arguments.length;
    if (argLength == 1 && Array.isArray(arguments[0])) {
      return createSet.apply(null, arguments[0]);
    }
    const rv = {};
    for (let i = 0; i < argLength; i++) {
      rv[arguments[i]] = true;
    }
    return rv;
  }
  function createImmutableView(obj) {
    let result = obj;
    if (Object.isFrozen && !Object.isFrozen(obj)) {
      result = Object.create(obj);
      Object.freeze(result);
    }
    return result;
  }
  function isImmutableView(obj) {
    return !!Object.isFrozen && Object.isFrozen(obj);
  }
  function getAllPropertyNames(obj, includeObjectPrototype = undefined, includeFunctionPrototype = undefined) {
    if (!obj) {
      return [];
    }
    if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
      return getKeys(obj);
    }
    const visitedSet = {};
    let proto = obj;
    while (proto && (proto !== Object.prototype || !!includeObjectPrototype) && (proto !== Function.prototype || !!includeFunctionPrototype)) {
      const names = Object.getOwnPropertyNames(proto);
      for (let i = 0; i < names.length; i++) {
        visitedSet[names[i]] = true;
      }
      proto = Object.getPrototypeOf(proto);
    }
    return getKeys(visitedSet);
  }
  function getSuperClass(constructor) {
    const proto = Object.getPrototypeOf(constructor.prototype);
    return proto && proto.constructor;
  }
  exports = {add, clear, clone, contains, containsKey, containsValue, create, createImmutableView, createSet, equals, every, extend, filter, findKey, findValue, forEach, get, getAllPropertyNames, getAnyKey, getAnyValue, getCount, getKeys, getSuperClass, getValueByKeys, getValues, isEmpty, isImmutableView, map, remove, set, setIfUndefined, setWithReturnValueIfNotSet, some, transpose, unsafeClone,};
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.object.object.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeStyleSheet");
  goog.module.declareLegacyNamespace();
  const Const = goog.require("goog.string.Const");
  const SafeStyle = goog.require("goog.html.SafeStyle");
  const TypedString = goog.require("goog.string.TypedString");
  const googObject = goog.require("goog.object");
  const {assert, fail} = goog.require("goog.asserts");
  const {contains} = goog.require("goog.string.internal");
  const CONSTRUCTOR_TOKEN_PRIVATE = {};
  class SafeStyleSheet {
    constructor(value, token) {
      this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
      this.implementsGoogStringTypedString = true;
    }
    toString() {
      return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_.toString();
    }
    static createRule(selector, style) {
      if (contains(selector, "\x3c")) {
        throw new Error(`Selector does not allow '<', got: ${selector}`);
      }
      const selectorToCheck = selector.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
      if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(selectorToCheck)) {
        throw new Error("Selector allows only [-_a-zA-Z0-9#.:* ,\x3e+~[\\]()\x3d^$|] and " + "strings, got: " + selector);
      }
      if (!SafeStyleSheet.hasBalancedBrackets_(selectorToCheck)) {
        throw new Error("() and [] in selector must be balanced, got: " + selector);
      }
      if (!(style instanceof SafeStyle)) {
        style = SafeStyle.create(style);
      }
      const styleSheet = `${selector}{` + SafeStyle.unwrap(style).replace(/</g, "\\3C ") + "}";
      return SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);
    }
    static hasBalancedBrackets_(s) {
      const brackets = {"(":")", "[":"]"};
      const expectedBrackets = [];
      for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (brackets[ch]) {
          expectedBrackets.push(brackets[ch]);
        } else if (googObject.contains(brackets, ch)) {
          if (expectedBrackets.pop() != ch) {
            return false;
          }
        }
      }
      return expectedBrackets.length == 0;
    }
    static concat(var_args) {
      let result = "";
      const addArgument = argument => {
        if (Array.isArray(argument)) {
          argument.forEach(addArgument);
        } else {
          result += SafeStyleSheet.unwrap(argument);
        }
      };
      Array.prototype.forEach.call(arguments, addArgument);
      return SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(result);
    }
    static fromConstant(styleSheet) {
      const styleSheetString = Const.unwrap(styleSheet);
      if (styleSheetString.length === 0) {
        return SafeStyleSheet.EMPTY;
      }
      assert(!contains(styleSheetString, "\x3c"), `Forbidden '<' character in style sheet string: ${styleSheetString}`);
      return SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheetString);
    }
    getTypedStringValue() {
      return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
    }
    static unwrap(safeStyleSheet) {
      if (safeStyleSheet instanceof SafeStyleSheet && safeStyleSheet.constructor === SafeStyleSheet) {
        return safeStyleSheet.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
      } else {
        fail("expected object of type SafeStyleSheet, got '" + safeStyleSheet + "' of type " + goog.typeOf(safeStyleSheet));
        return "type_error:SafeStyleSheet";
      }
    }
    static createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet) {
      return new SafeStyleSheet(styleSheet, CONSTRUCTOR_TOKEN_PRIVATE);
    }
  }
  SafeStyleSheet.EMPTY = SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
  exports = SafeStyleSheet;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.html.safestylesheet.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.flags");
  goog.module.declareLegacyNamespace();
  exports.USE_USER_AGENT_CLIENT_HINTS = false;
  exports.ASYNC_THROW_ON_UNICODE_TO_BYTE = false;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.flags.flags.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent");
  goog.module.declareLegacyNamespace();
  const flags = goog.require("goog.flags");
  const USE_CLIENT_HINTS_OVERRIDE = goog.define("goog.labs.userAgent.USE_CLIENT_HINTS_OVERRIDE", "");
  const USE_CLIENT_HINTS = goog.define("goog.labs.userAgent.USE_CLIENT_HINTS", false);
  let forceClientHintsInTests = false;
  exports.setUseClientHintsForTesting = use => {
    forceClientHintsInTests = use;
  };
  const useClientHintsRuntimeOverride = USE_CLIENT_HINTS_OVERRIDE ? !!goog.getObjectByName(USE_CLIENT_HINTS_OVERRIDE) : false;
  exports.useClientHints = () => {
    return flags.USE_USER_AGENT_CLIENT_HINTS || USE_CLIENT_HINTS || useClientHintsRuntimeOverride || forceClientHintsInTests;
  };
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.labs.useragent.useragent.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.util");
  goog.module.declareLegacyNamespace();
  const {caseInsensitiveContains, contains} = goog.require("goog.string.internal");
  const {useClientHints} = goog.require("goog.labs.userAgent");
  const ASSUME_CLIENT_HINTS_SUPPORT = false;
  function getNativeUserAgentString() {
    const navigator = getNavigator();
    if (navigator) {
      const userAgent = navigator.userAgent;
      if (userAgent) {
        return userAgent;
      }
    }
    return "";
  }
  function getNativeUserAgentData() {
    const navigator = getNavigator();
    if (navigator) {
      return navigator.userAgentData || null;
    }
    return null;
  }
  function getNavigator() {
    return goog.global.navigator;
  }
  let userAgentInternal = null;
  let userAgentDataInternal = getNativeUserAgentData();
  function setUserAgent(userAgent = undefined) {
    userAgentInternal = typeof userAgent === "string" ? userAgent : getNativeUserAgentString();
  }
  function getUserAgent() {
    return userAgentInternal == null ? getNativeUserAgentString() : userAgentInternal;
  }
  function setUserAgentData(userAgentData) {
    userAgentDataInternal = userAgentData;
  }
  function resetUserAgentData() {
    userAgentDataInternal = getNativeUserAgentData();
  }
  function getUserAgentData() {
    return userAgentDataInternal;
  }
  function matchUserAgentDataBrand(str) {
    if (!useClientHints()) {
      return false;
    }
    const data = getUserAgentData();
    if (!data) {
      return false;
    }
    return data.brands.some(({brand}) => brand && contains(brand, str));
  }
  function matchUserAgent(str) {
    const userAgent = getUserAgent();
    return contains(userAgent, str);
  }
  function matchUserAgentIgnoreCase(str) {
    const userAgent = getUserAgent();
    return caseInsensitiveContains(userAgent, str);
  }
  function extractVersionTuples(userAgent) {
    const versionRegExp = new RegExp("([A-Z][\\w ]+)" + "/" + "([^\\s]+)" + "\\s*" + "(?:\\((.*?)\\))?", "g");
    const data = [];
    let match;
    while (match = versionRegExp.exec(userAgent)) {
      data.push([match[1], match[2], match[3] || undefined]);
    }
    return data;
  }
  exports = {ASSUME_CLIENT_HINTS_SUPPORT, extractVersionTuples, getNativeUserAgentString, getUserAgent, getUserAgentData, matchUserAgent, matchUserAgentDataBrand, matchUserAgentIgnoreCase, resetUserAgentData, setUserAgent, setUserAgentData,};
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.labs.useragent.util.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.highEntropy.highEntropyValue");
  const util = goog.require("goog.labs.userAgent.util");
  const {compareVersions} = goog.require("goog.string.internal");
  class AsyncValue {
    getIfLoaded() {
    }
    load() {
    }
  }
  exports.AsyncValue = AsyncValue;
  class HighEntropyValue {
    constructor(key) {
      this.key_ = key;
      this.value_ = undefined;
      this.promise_ = undefined;
      this.pending_ = false;
    }
    getIfLoaded() {
      const userAgentData = util.getUserAgentData();
      if (!userAgentData) {
        return undefined;
      }
      return this.value_;
    }
    async load() {
      const userAgentData = util.getUserAgentData();
      if (!userAgentData) {
        return undefined;
      }
      if (!this.promise_) {
        this.pending_ = true;
        this.promise_ = (async() => {
          try {
            const dataValues = await userAgentData.getHighEntropyValues([this.key_]);
            this.value_ = dataValues[this.key_];
            return this.value_;
          } finally {
            this.pending_ = false;
          }
        })();
      }
      return await this.promise_;
    }
    resetForTesting() {
      if (this.pending_) {
        throw new Error("Unsafe call to resetForTesting");
      }
      this.promise_ = undefined;
      this.value_ = undefined;
      this.pending_ = false;
    }
  }
  exports.HighEntropyValue = HighEntropyValue;
  class Version {
    constructor(versionString) {
      this.versionString_ = versionString;
    }
    toVersionStringForLogging() {
      return this.versionString_;
    }
    isAtLeast(version) {
      return compareVersions(this.versionString_, version) >= 0;
    }
  }
  exports.Version = Version;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.labs.useragent.highentropy.highentropyvalue.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.highEntropy.highEntropyData");
  const {HighEntropyValue} = goog.require("goog.labs.userAgent.highEntropy.highEntropyValue");
  const fullVersionList = new HighEntropyValue("fullVersionList");
  exports.fullVersionList = fullVersionList;
  const platformVersion = new HighEntropyValue("platformVersion");
  exports.platformVersion = platformVersion;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.labs.useragent.highentropy.highentropydata.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.browser");
  goog.module.declareLegacyNamespace();
  const util = goog.require("goog.labs.userAgent.util");
  const {AsyncValue, Version} = goog.require("goog.labs.userAgent.highEntropy.highEntropyValue");
  const {assert, assertExists} = goog.require("goog.asserts");
  const {compareVersions} = goog.require("goog.string.internal");
  const {fullVersionList} = goog.require("goog.labs.userAgent.highEntropy.highEntropyData");
  const {useClientHints} = goog.require("goog.labs.userAgent");
  const Brand = {ANDROID_BROWSER:"Android Browser", CHROMIUM:"Chromium", EDGE:"Microsoft Edge", FIREFOX:"Firefox", IE:"Internet Explorer", OPERA:"Opera", SAFARI:"Safari", SILK:"Silk",};
  exports.Brand = Brand;
  function useUserAgentDataBrand(ignoreClientHintsFlag = false) {
    if (util.ASSUME_CLIENT_HINTS_SUPPORT) {
      return true;
    }
    if (!ignoreClientHintsFlag && !useClientHints()) {
      return false;
    }
    const userAgentData = util.getUserAgentData();
    return !!userAgentData && userAgentData.brands.length > 0;
  }
  function hasFullVersionList() {
    return isAtLeast(Brand.CHROMIUM, 98);
  }
  function matchOpera() {
    if (useUserAgentDataBrand()) {
      return false;
    }
    return util.matchUserAgent("Opera");
  }
  function matchIE() {
    if (useUserAgentDataBrand()) {
      return false;
    }
    return util.matchUserAgent("Trident") || util.matchUserAgent("MSIE");
  }
  function matchEdgeHtml() {
    if (useUserAgentDataBrand()) {
      return false;
    }
    return util.matchUserAgent("Edge");
  }
  function matchEdgeChromium() {
    if (useUserAgentDataBrand()) {
      return util.matchUserAgentDataBrand(Brand.EDGE);
    }
    return util.matchUserAgent("Edg/");
  }
  function matchOperaChromium() {
    if (useUserAgentDataBrand()) {
      return util.matchUserAgentDataBrand(Brand.OPERA);
    }
    return util.matchUserAgent("OPR");
  }
  function matchFirefox() {
    return util.matchUserAgent("Firefox") || util.matchUserAgent("FxiOS");
  }
  function matchSafari() {
    return util.matchUserAgent("Safari") && !(matchChrome() || matchCoast() || matchOpera() || matchEdgeHtml() || matchEdgeChromium() || matchOperaChromium() || matchFirefox() || isSilk() || util.matchUserAgent("Android"));
  }
  function matchCoast() {
    if (useUserAgentDataBrand()) {
      return false;
    }
    return util.matchUserAgent("Coast");
  }
  function matchIosWebview() {
    return (util.matchUserAgent("iPad") || util.matchUserAgent("iPhone")) && !matchSafari() && !matchChrome() && !matchCoast() && !matchFirefox() && util.matchUserAgent("AppleWebKit");
  }
  function matchChrome() {
    if (useUserAgentDataBrand()) {
      return util.matchUserAgentDataBrand(Brand.CHROMIUM);
    }
    return (util.matchUserAgent("Chrome") || util.matchUserAgent("CriOS")) && !matchEdgeHtml() || isSilk();
  }
  function matchAndroidBrowser() {
    return util.matchUserAgent("Android") && !(isChrome() || isFirefox() || isOpera() || isSilk());
  }
  const isOpera = matchOpera;
  exports.isOpera = isOpera;
  const isIE = matchIE;
  exports.isIE = isIE;
  const isEdge = matchEdgeHtml;
  exports.isEdge = isEdge;
  const isEdgeChromium = matchEdgeChromium;
  exports.isEdgeChromium = isEdgeChromium;
  const isOperaChromium = matchOperaChromium;
  exports.isOperaChromium = isOperaChromium;
  const isFirefox = matchFirefox;
  exports.isFirefox = isFirefox;
  const isSafari = matchSafari;
  exports.isSafari = isSafari;
  const isCoast = matchCoast;
  exports.isCoast = isCoast;
  const isIosWebview = matchIosWebview;
  exports.isIosWebview = isIosWebview;
  const isChrome = matchChrome;
  exports.isChrome = isChrome;
  const isAndroidBrowser = matchAndroidBrowser;
  exports.isAndroidBrowser = isAndroidBrowser;
  function isSilk() {
    return util.matchUserAgent("Silk");
  }
  exports.isSilk = isSilk;
  function createVersionMap(versionTuples) {
    const versionMap = {};
    versionTuples.forEach(tuple => {
      const key = tuple[0];
      const value = tuple[1];
      versionMap[key] = value;
    });
    return keys => versionMap[keys.find(key => key in versionMap)] || "";
  }
  function getVersion() {
    const userAgentString = util.getUserAgent();
    if (isIE()) {
      return getIEVersion(userAgentString);
    }
    const versionTuples = util.extractVersionTuples(userAgentString);
    const lookUpValueWithKeys = createVersionMap(versionTuples);
    if (isOpera()) {
      return lookUpValueWithKeys(["Version", "Opera"]);
    }
    if (isEdge()) {
      return lookUpValueWithKeys(["Edge"]);
    }
    if (isEdgeChromium()) {
      return lookUpValueWithKeys(["Edg"]);
    }
    if (isSilk()) {
      return lookUpValueWithKeys(["Silk"]);
    }
    if (isChrome()) {
      return lookUpValueWithKeys(["Chrome", "CriOS", "HeadlessChrome"]);
    }
    const tuple = versionTuples[2];
    return tuple && tuple[1] || "";
  }
  exports.getVersion = getVersion;
  function isVersionOrHigher(version) {
    return compareVersions(getVersion(), version) >= 0;
  }
  exports.isVersionOrHigher = isVersionOrHigher;
  function getIEVersion(userAgent) {
    const rv = /rv: *([\d\.]*)/.exec(userAgent);
    if (rv && rv[1]) {
      return rv[1];
    }
    let version = "";
    const msie = /MSIE +([\d\.]+)/.exec(userAgent);
    if (msie && msie[1]) {
      const tridentVersion = /Trident\/(\d.\d)/.exec(userAgent);
      if (msie[1] == "7.0") {
        if (tridentVersion && tridentVersion[1]) {
          switch(tridentVersion[1]) {
            case "4.0":
              version = "8.0";
              break;
            case "5.0":
              version = "9.0";
              break;
            case "6.0":
              version = "10.0";
              break;
            case "7.0":
              version = "11.0";
              break;
          }
        } else {
          version = "7.0";
        }
      } else {
        version = msie[1];
      }
    }
    return version;
  }
  function getFullVersionFromUserAgentString(browser) {
    const userAgentString = util.getUserAgent();
    if (browser === Brand.IE) {
      return isIE() ? getIEVersion(userAgentString) : "";
    }
    const versionTuples = util.extractVersionTuples(userAgentString);
    const lookUpValueWithKeys = createVersionMap(versionTuples);
    switch(browser) {
      case Brand.OPERA:
        if (isOpera()) {
          return lookUpValueWithKeys(["Version", "Opera"]);
        } else if (isOperaChromium()) {
          return lookUpValueWithKeys(["OPR"]);
        }
        break;
      case Brand.EDGE:
        if (isEdge()) {
          return lookUpValueWithKeys(["Edge"]);
        } else if (isEdgeChromium()) {
          return lookUpValueWithKeys(["Edg"]);
        }
        break;
      case Brand.CHROMIUM:
        if (isChrome()) {
          return lookUpValueWithKeys(["Chrome", "CriOS", "HeadlessChrome"]);
        }
        break;
    }
    if (browser === Brand.FIREFOX && isFirefox() || browser === Brand.SAFARI && isSafari() || browser === Brand.ANDROID_BROWSER && isAndroidBrowser() || browser === Brand.SILK && isSilk()) {
      const tuple = versionTuples[2];
      return tuple && tuple[1] || "";
    }
    return "";
  }
  function versionOf_(browser) {
    let versionParts;
    if (useUserAgentDataBrand() && browser !== Brand.SILK) {
      const data = util.getUserAgentData();
      const matchingBrand = data.brands.find(({brand}) => brand === browser);
      if (!matchingBrand || !matchingBrand.version) {
        return NaN;
      }
      versionParts = matchingBrand.version.split(".");
    } else {
      const fullVersion = getFullVersionFromUserAgentString(browser);
      if (fullVersion === "") {
        return NaN;
      }
      versionParts = fullVersion.split(".");
    }
    if (versionParts.length === 0) {
      return NaN;
    }
    const majorVersion = versionParts[0];
    return Number(majorVersion);
  }
  function isAtLeast(brand, majorVersion) {
    assert(Math.floor(majorVersion) === majorVersion, "Major version must be an integer");
    return versionOf_(brand) >= majorVersion;
  }
  exports.isAtLeast = isAtLeast;
  function isAtMost(brand, majorVersion) {
    assert(Math.floor(majorVersion) === majorVersion, "Major version must be an integer");
    return versionOf_(brand) <= majorVersion;
  }
  exports.isAtMost = isAtMost;
  class HighEntropyBrandVersion {
    constructor(brand, useUach, fallbackVersion) {
      this.brand_ = brand;
      this.version_ = new Version(fallbackVersion);
      this.useUach_ = useUach;
    }
    getIfLoaded() {
      if (this.useUach_) {
        const loadedVersionList = fullVersionList.getIfLoaded();
        if (loadedVersionList !== undefined) {
          const matchingBrand = loadedVersionList.find(({brand}) => this.brand_ === brand);
          assertExists(matchingBrand);
          return new Version(matchingBrand.version);
        }
      }
      if (preUachHasLoaded) {
        return this.version_;
      }
      return;
    }
    async load() {
      if (this.useUach_) {
        const loadedVersionList = await fullVersionList.load();
        if (loadedVersionList !== undefined) {
          const matchingBrand = loadedVersionList.find(({brand}) => this.brand_ === brand);
          assertExists(matchingBrand);
          return new Version(matchingBrand.version);
        }
      } else {
        await 0;
      }
      preUachHasLoaded = true;
      return this.version_;
    }
  }
  let preUachHasLoaded = false;
  async function loadFullVersions() {
    if (useUserAgentDataBrand(true)) {
      await fullVersionList.load();
    }
    preUachHasLoaded = true;
  }
  exports.loadFullVersions = loadFullVersions;
  exports.resetForTesting = () => {
    preUachHasLoaded = false;
    fullVersionList.resetForTesting();
  };
  function fullVersionOf(browser) {
    let fallbackVersionString = "";
    if (!hasFullVersionList()) {
      fallbackVersionString = getFullVersionFromUserAgentString(browser);
    }
    const useUach = browser !== Brand.SILK && useUserAgentDataBrand(true);
    if (useUach) {
      const data = util.getUserAgentData();
      if (!data.brands.find(({brand}) => brand === browser)) {
        return undefined;
      }
    } else if (fallbackVersionString === "") {
      return undefined;
    }
    return new HighEntropyBrandVersion(browser, useUach, fallbackVersionString);
  }
  exports.fullVersionOf = fullVersionOf;
  function getVersionStringForLogging(browser) {
    if (useUserAgentDataBrand(true)) {
      const fullVersionObj = fullVersionOf(browser);
      if (fullVersionObj) {
        const fullVersion = fullVersionObj.getIfLoaded();
        if (fullVersion) {
          return fullVersion.toVersionStringForLogging();
        }
        const data = util.getUserAgentData();
        const matchingBrand = data.brands.find(({brand}) => brand === browser);
        assertExists(matchingBrand);
        return matchingBrand.version;
      }
      return "";
    } else {
      return getFullVersionFromUserAgentString(browser);
    }
  }
  exports.getVersionStringForLogging = getVersionStringForLogging;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.labs.useragent.browser.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.array");
  goog.module.declareLegacyNamespace();
  const asserts = goog.require("goog.asserts");
  goog.NATIVE_ARRAY_PROTOTYPES = goog.define("goog.NATIVE_ARRAY_PROTOTYPES", goog.TRUSTED_SITE);
  const ASSUME_NATIVE_FUNCTIONS = goog.define("goog.array.ASSUME_NATIVE_FUNCTIONS", goog.FEATURESET_YEAR > 2012);
  exports.ASSUME_NATIVE_FUNCTIONS = ASSUME_NATIVE_FUNCTIONS;
  function peek(array) {
    return array[array.length - 1];
  }
  exports.peek = peek;
  exports.last = peek;
  const indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(arr, obj, opt_fromIndex) {
    asserts.assert(arr.length != null);
    return Array.prototype.indexOf.call(arr, obj, opt_fromIndex);
  } : function(arr, obj, opt_fromIndex) {
    const fromIndex = opt_fromIndex == null ? 0 : opt_fromIndex < 0 ? Math.max(0, arr.length + opt_fromIndex) : opt_fromIndex;
    if (typeof arr === "string") {
      if (typeof obj !== "string" || obj.length != 1) {
        return -1;
      }
      return arr.indexOf(obj, fromIndex);
    }
    for (let i = fromIndex; i < arr.length; i++) {
      if (i in arr && arr[i] === obj) {
        return i;
      }
    }
    return -1;
  };
  exports.indexOf = indexOf;
  const lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(arr, obj, opt_fromIndex) {
    asserts.assert(arr.length != null);
    const fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
    return Array.prototype.lastIndexOf.call(arr, obj, fromIndex);
  } : function(arr, obj, opt_fromIndex) {
    let fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
    if (fromIndex < 0) {
      fromIndex = Math.max(0, arr.length + fromIndex);
    }
    if (typeof arr === "string") {
      if (typeof obj !== "string" || obj.length != 1) {
        return -1;
      }
      return arr.lastIndexOf(obj, fromIndex);
    }
    for (let i = fromIndex; i >= 0; i--) {
      if (i in arr && arr[i] === obj) {
        return i;
      }
    }
    return -1;
  };
  exports.lastIndexOf = lastIndexOf;
  const forEach = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    Array.prototype.forEach.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2) {
        f.call(opt_obj, arr2[i], i, arr);
      }
    }
  };
  exports.forEach = forEach;
  function forEachRight(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = l - 1; i >= 0; --i) {
      if (i in arr2) {
        f.call(opt_obj, arr2[i], i, arr);
      }
    }
  }
  exports.forEachRight = forEachRight;
  const filter = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.filter.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    const l = arr.length;
    const res = [];
    let resLength = 0;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2) {
        const val = arr2[i];
        if (f.call(opt_obj, val, i, arr)) {
          res[resLength++] = val;
        }
      }
    }
    return res;
  };
  exports.filter = filter;
  const map = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.map.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    const l = arr.length;
    const res = new Array(l);
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2) {
        res[i] = f.call(opt_obj, arr2[i], i, arr);
      }
    }
    return res;
  };
  exports.map = map;
  const reduce = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(arr, f, val, opt_obj) {
    asserts.assert(arr.length != null);
    if (opt_obj) {
      f = goog.bind(f, opt_obj);
    }
    return Array.prototype.reduce.call(arr, f, val);
  } : function(arr, f, val, opt_obj) {
    let rval = val;
    forEach(arr, function(val, index) {
      rval = f.call(opt_obj, rval, val, index, arr);
    });
    return rval;
  };
  exports.reduce = reduce;
  const reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(arr, f, val, opt_obj) {
    asserts.assert(arr.length != null);
    asserts.assert(f != null);
    if (opt_obj) {
      f = goog.bind(f, opt_obj);
    }
    return Array.prototype.reduceRight.call(arr, f, val);
  } : function(arr, f, val, opt_obj) {
    let rval = val;
    forEachRight(arr, function(val, index) {
      rval = f.call(opt_obj, rval, val, index, arr);
    });
    return rval;
  };
  exports.reduceRight = reduceRight;
  const some = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.some.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return true;
      }
    }
    return false;
  };
  exports.some = some;
  const every = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.every.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2 && !f.call(opt_obj, arr2[i], i, arr)) {
        return false;
      }
    }
    return true;
  };
  exports.every = every;
  function count(arr, f, opt_obj) {
    let count = 0;
    forEach(arr, function(element, index, arr) {
      if (f.call(opt_obj, element, index, arr)) {
        ++count;
      }
    }, opt_obj);
    return count;
  }
  exports.count = count;
  function find(arr, f, opt_obj) {
    const i = findIndex(arr, f, opt_obj);
    return i < 0 ? null : typeof arr === "string" ? arr.charAt(i) : arr[i];
  }
  exports.find = find;
  function findIndex(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return i;
      }
    }
    return -1;
  }
  exports.findIndex = findIndex;
  function findRight(arr, f, opt_obj) {
    const i = findIndexRight(arr, f, opt_obj);
    return i < 0 ? null : typeof arr === "string" ? arr.charAt(i) : arr[i];
  }
  exports.findRight = findRight;
  function findIndexRight(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = l - 1; i >= 0; i--) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return i;
      }
    }
    return -1;
  }
  exports.findIndexRight = findIndexRight;
  function contains(arr, obj) {
    return indexOf(arr, obj) >= 0;
  }
  exports.contains = contains;
  function isEmpty(arr) {
    return arr.length == 0;
  }
  exports.isEmpty = isEmpty;
  function clear(arr) {
    if (!Array.isArray(arr)) {
      for (let i = arr.length - 1; i >= 0; i--) {
        delete arr[i];
      }
    }
    arr.length = 0;
  }
  exports.clear = clear;
  function insert(arr, obj) {
    if (!contains(arr, obj)) {
      arr.push(obj);
    }
  }
  exports.insert = insert;
  function insertAt(arr, obj, opt_i) {
    splice(arr, opt_i, 0, obj);
  }
  exports.insertAt = insertAt;
  function insertArrayAt(arr, elementsToAdd, opt_i) {
    goog.partial(splice, arr, opt_i, 0).apply(null, elementsToAdd);
  }
  exports.insertArrayAt = insertArrayAt;
  function insertBefore(arr, obj, opt_obj2) {
    let i;
    if (arguments.length == 2 || (i = indexOf(arr, opt_obj2)) < 0) {
      arr.push(obj);
    } else {
      insertAt(arr, obj, i);
    }
  }
  exports.insertBefore = insertBefore;
  function remove(arr, obj) {
    const i = indexOf(arr, obj);
    let rv;
    if (rv = i >= 0) {
      removeAt(arr, i);
    }
    return rv;
  }
  exports.remove = remove;
  function removeLast(arr, obj) {
    const i = lastIndexOf(arr, obj);
    if (i >= 0) {
      removeAt(arr, i);
      return true;
    }
    return false;
  }
  exports.removeLast = removeLast;
  function removeAt(arr, i) {
    asserts.assert(arr.length != null);
    return Array.prototype.splice.call(arr, i, 1).length == 1;
  }
  exports.removeAt = removeAt;
  function removeIf(arr, f, opt_obj) {
    const i = findIndex(arr, f, opt_obj);
    if (i >= 0) {
      removeAt(arr, i);
      return true;
    }
    return false;
  }
  exports.removeIf = removeIf;
  function removeAllIf(arr, f, opt_obj) {
    let removedCount = 0;
    forEachRight(arr, function(val, index) {
      if (f.call(opt_obj, val, index, arr)) {
        if (removeAt(arr, index)) {
          removedCount++;
        }
      }
    });
    return removedCount;
  }
  exports.removeAllIf = removeAllIf;
  function concat(var_args) {
    return Array.prototype.concat.apply([], arguments);
  }
  exports.concat = concat;
  function join(var_args) {
    return Array.prototype.concat.apply([], arguments);
  }
  exports.join = join;
  function toArray(object) {
    const length = object.length;
    if (length > 0) {
      const rv = new Array(length);
      for (let i = 0; i < length; i++) {
        rv[i] = object[i];
      }
      return rv;
    }
    return [];
  }
  exports.toArray = toArray;
  const clone = toArray;
  exports.clone = clone;
  function extend(arr1, var_args) {
    for (let i = 1; i < arguments.length; i++) {
      const arr2 = arguments[i];
      if (goog.isArrayLike(arr2)) {
        const len1 = arr1.length || 0;
        const len2 = arr2.length || 0;
        arr1.length = len1 + len2;
        for (let j = 0; j < len2; j++) {
          arr1[len1 + j] = arr2[j];
        }
      } else {
        arr1.push(arr2);
      }
    }
  }
  exports.extend = extend;
  function splice(arr, index, howMany, var_args) {
    asserts.assert(arr.length != null);
    return Array.prototype.splice.apply(arr, slice(arguments, 1));
  }
  exports.splice = splice;
  function slice(arr, start, opt_end) {
    asserts.assert(arr.length != null);
    if (arguments.length <= 2) {
      return Array.prototype.slice.call(arr, start);
    } else {
      return Array.prototype.slice.call(arr, start, opt_end);
    }
  }
  exports.slice = slice;
  function removeDuplicates(arr, opt_rv, opt_hashFn) {
    const returnArray = opt_rv || arr;
    const defaultHashFn = function(item) {
      return goog.isObject(item) ? "o" + goog.getUid(item) : (typeof item).charAt(0) + item;
    };
    const hashFn = opt_hashFn || defaultHashFn;
    let cursorInsert = 0;
    let cursorRead = 0;
    const seen = {};
    while (cursorRead < arr.length) {
      const current = arr[cursorRead++];
      const key = hashFn(current);
      if (!Object.prototype.hasOwnProperty.call(seen, key)) {
        seen[key] = true;
        returnArray[cursorInsert++] = current;
      }
    }
    returnArray.length = cursorInsert;
  }
  exports.removeDuplicates = removeDuplicates;
  function binarySearch(arr, target, opt_compareFn) {
    return binarySearch_(arr, opt_compareFn || defaultCompare, false, target);
  }
  exports.binarySearch = binarySearch;
  function binarySelect(arr, evaluator, opt_obj) {
    return binarySearch_(arr, evaluator, true, undefined, opt_obj);
  }
  exports.binarySelect = binarySelect;
  function binarySearch_(arr, compareFn, isEvaluator, opt_target, opt_selfObj) {
    let left = 0;
    let right = arr.length;
    let found;
    while (left < right) {
      const middle = left + (right - left >>> 1);
      let compareResult;
      if (isEvaluator) {
        compareResult = compareFn.call(opt_selfObj, arr[middle], middle, arr);
      } else {
        compareResult = compareFn(opt_target, arr[middle]);
      }
      if (compareResult > 0) {
        left = middle + 1;
      } else {
        right = middle;
        found = !compareResult;
      }
    }
    return found ? left : -left - 1;
  }
  function sort(arr, opt_compareFn) {
    arr.sort(opt_compareFn || defaultCompare);
  }
  exports.sort = sort;
  function stableSort(arr, opt_compareFn) {
    const compArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      compArr[i] = {index:i, value:arr[i]};
    }
    const valueCompareFn = opt_compareFn || defaultCompare;
    function stableCompareFn(obj1, obj2) {
      return valueCompareFn(obj1.value, obj2.value) || obj1.index - obj2.index;
    }
    sort(compArr, stableCompareFn);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = compArr[i].value;
    }
  }
  exports.stableSort = stableSort;
  function sortByKey(arr, keyFn, opt_compareFn) {
    const keyCompareFn = opt_compareFn || defaultCompare;
    sort(arr, function(a, b) {
      return keyCompareFn(keyFn(a), keyFn(b));
    });
  }
  exports.sortByKey = sortByKey;
  function sortObjectsByKey(arr, key, opt_compareFn) {
    sortByKey(arr, function(obj) {
      return obj[key];
    }, opt_compareFn);
  }
  exports.sortObjectsByKey = sortObjectsByKey;
  function isSorted(arr, opt_compareFn, opt_strict) {
    const compare = opt_compareFn || defaultCompare;
    for (let i = 1; i < arr.length; i++) {
      const compareResult = compare(arr[i - 1], arr[i]);
      if (compareResult > 0 || compareResult == 0 && opt_strict) {
        return false;
      }
    }
    return true;
  }
  exports.isSorted = isSorted;
  function equals(arr1, arr2, opt_equalsFn) {
    if (!goog.isArrayLike(arr1) || !goog.isArrayLike(arr2) || arr1.length != arr2.length) {
      return false;
    }
    const l = arr1.length;
    const equalsFn = opt_equalsFn || defaultCompareEquality;
    for (let i = 0; i < l; i++) {
      if (!equalsFn(arr1[i], arr2[i])) {
        return false;
      }
    }
    return true;
  }
  exports.equals = equals;
  function compare3(arr1, arr2, opt_compareFn) {
    const compare = opt_compareFn || defaultCompare;
    const l = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < l; i++) {
      const result = compare(arr1[i], arr2[i]);
      if (result != 0) {
        return result;
      }
    }
    return defaultCompare(arr1.length, arr2.length);
  }
  exports.compare3 = compare3;
  function defaultCompare(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  exports.defaultCompare = defaultCompare;
  function inverseDefaultCompare(a, b) {
    return -defaultCompare(a, b);
  }
  exports.inverseDefaultCompare = inverseDefaultCompare;
  function defaultCompareEquality(a, b) {
    return a === b;
  }
  exports.defaultCompareEquality = defaultCompareEquality;
  function binaryInsert(array, value, opt_compareFn) {
    const index = binarySearch(array, value, opt_compareFn);
    if (index < 0) {
      insertAt(array, value, -(index + 1));
      return true;
    }
    return false;
  }
  exports.binaryInsert = binaryInsert;
  function binaryRemove(array, value, opt_compareFn) {
    const index = binarySearch(array, value, opt_compareFn);
    return index >= 0 ? removeAt(array, index) : false;
  }
  exports.binaryRemove = binaryRemove;
  function bucket(array, sorter, opt_obj) {
    const buckets = {};
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const key = sorter.call(opt_obj, value, i, array);
      if (key !== undefined) {
        const bucket = buckets[key] || (buckets[key] = []);
        bucket.push(value);
      }
    }
    return buckets;
  }
  exports.bucket = bucket;
  function bucketToMap(array, sorter) {
    const buckets = new Map();
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const key = sorter(value, i, array);
      if (key !== undefined) {
        let bucket = buckets.get(key);
        if (!bucket) {
          bucket = [];
          buckets.set(key, bucket);
        }
        bucket.push(value);
      }
    }
    return buckets;
  }
  exports.bucketToMap = bucketToMap;
  function toObject(arr, keyFunc, opt_obj) {
    const ret = {};
    forEach(arr, function(element, index) {
      ret[keyFunc.call(opt_obj, element, index, arr)] = element;
    });
    return ret;
  }
  exports.toObject = toObject;
  function toMap(arr, keyFunc) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      map.set(keyFunc(element, i, arr), element);
    }
    return map;
  }
  exports.toMap = toMap;
  function range(startOrEnd, opt_end, opt_step) {
    const array = [];
    let start = 0;
    let end = startOrEnd;
    const step = opt_step || 1;
    if (opt_end !== undefined) {
      start = startOrEnd;
      end = opt_end;
    }
    if (step * (end - start) < 0) {
      return [];
    }
    if (step > 0) {
      for (let i = start; i < end; i += step) {
        array.push(i);
      }
    } else {
      for (let i = start; i > end; i += step) {
        array.push(i);
      }
    }
    return array;
  }
  exports.range = range;
  function repeat(value, n) {
    const array = [];
    for (let i = 0; i < n; i++) {
      array[i] = value;
    }
    return array;
  }
  exports.repeat = repeat;
  function flatten(var_args) {
    const CHUNK_SIZE = 8192;
    const result = [];
    for (let i = 0; i < arguments.length; i++) {
      const element = arguments[i];
      if (Array.isArray(element)) {
        for (let c = 0; c < element.length; c += CHUNK_SIZE) {
          const chunk = slice(element, c, c + CHUNK_SIZE);
          const recurseResult = flatten.apply(null, chunk);
          for (let r = 0; r < recurseResult.length; r++) {
            result.push(recurseResult[r]);
          }
        }
      } else {
        result.push(element);
      }
    }
    return result;
  }
  exports.flatten = flatten;
  function rotate(array, n) {
    asserts.assert(array.length != null);
    if (array.length) {
      n %= array.length;
      if (n > 0) {
        Array.prototype.unshift.apply(array, array.splice(-n, n));
      } else if (n < 0) {
        Array.prototype.push.apply(array, array.splice(0, -n));
      }
    }
    return array;
  }
  exports.rotate = rotate;
  function moveItem(arr, fromIndex, toIndex) {
    asserts.assert(fromIndex >= 0 && fromIndex < arr.length);
    asserts.assert(toIndex >= 0 && toIndex < arr.length);
    const removedItems = Array.prototype.splice.call(arr, fromIndex, 1);
    Array.prototype.splice.call(arr, toIndex, 0, removedItems[0]);
  }
  exports.moveItem = moveItem;
  function zip(var_args) {
    if (!arguments.length) {
      return [];
    }
    const result = [];
    let minLen = arguments[0].length;
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i].length < minLen) {
        minLen = arguments[i].length;
      }
    }
    for (let i = 0; i < minLen; i++) {
      const value = [];
      for (let j = 0; j < arguments.length; j++) {
        value.push(arguments[j][i]);
      }
      result.push(value);
    }
    return result;
  }
  exports.zip = zip;
  function shuffle(arr, opt_randFn) {
    const randFn = opt_randFn || Math.random;
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(randFn() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
  exports.shuffle = shuffle;
  function copyByIndex(arr, index_arr) {
    const result = [];
    forEach(index_arr, function(index) {
      result.push(arr[index]);
    });
    return result;
  }
  exports.copyByIndex = copyByIndex;
  function concatMap(arr, f, opt_obj) {
    return concat.apply([], map(arr, f, opt_obj));
  }
  exports.concatMap = concatMap;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.array.array.js");

goog.provide("goog.dom.tags");
goog.require("goog.object");
goog.dom.tags.VOID_TAGS_ = goog.object.createSet("area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr");
goog.dom.tags.isVoidTag = function(tagName) {
  return goog.dom.tags.VOID_TAGS_[tagName] === true;
};

$CLJS.SHADOW_ENV.setLoaded("goog.dom.tags.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeHtml");
  goog.module.declareLegacyNamespace();
  const Const = goog.require("goog.string.Const");
  const SafeScript = goog.require("goog.html.SafeScript");
  const SafeStyle = goog.require("goog.html.SafeStyle");
  const SafeStyleSheet = goog.require("goog.html.SafeStyleSheet");
  const SafeUrl = goog.require("goog.html.SafeUrl");
  const TagName = goog.require("goog.dom.TagName");
  const TrustedResourceUrl = goog.require("goog.html.TrustedResourceUrl");
  const TypedString = goog.require("goog.string.TypedString");
  const asserts = goog.require("goog.asserts");
  const browser = goog.require("goog.labs.userAgent.browser");
  const googArray = goog.require("goog.array");
  const googObject = goog.require("goog.object");
  const internal = goog.require("goog.string.internal");
  const tags = goog.require("goog.dom.tags");
  const trustedtypes = goog.require("goog.html.trustedtypes");
  const CONSTRUCTOR_TOKEN_PRIVATE = {};
  class SafeHtml {
    constructor(value, token) {
      this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
      this.implementsGoogStringTypedString = true;
    }
    getTypedStringValue() {
      return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
    }
    toString() {
      return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
    }
    static unwrap(safeHtml) {
      return SafeHtml.unwrapTrustedHTML(safeHtml).toString();
    }
    static unwrapTrustedHTML(safeHtml) {
      if (safeHtml instanceof SafeHtml && safeHtml.constructor === SafeHtml) {
        return safeHtml.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
      } else {
        asserts.fail(`expected object of type SafeHtml, got '${safeHtml}' of type ` + goog.typeOf(safeHtml));
        return "type_error:SafeHtml";
      }
    }
    static htmlEscape(textOrHtml) {
      if (textOrHtml instanceof SafeHtml) {
        return textOrHtml;
      }
      const textIsObject = typeof textOrHtml == "object";
      let textAsString;
      if (textIsObject && textOrHtml.implementsGoogStringTypedString) {
        textAsString = textOrHtml.getTypedStringValue();
      } else {
        textAsString = String(textOrHtml);
      }
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.htmlEscape(textAsString));
    }
    static htmlEscapePreservingNewlines(textOrHtml) {
      if (textOrHtml instanceof SafeHtml) {
        return textOrHtml;
      }
      const html = SafeHtml.htmlEscape(textOrHtml);
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.newLineToBr(SafeHtml.unwrap(html)));
    }
    static htmlEscapePreservingNewlinesAndSpaces(textOrHtml) {
      if (textOrHtml instanceof SafeHtml) {
        return textOrHtml;
      }
      const html = SafeHtml.htmlEscape(textOrHtml);
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.whitespaceEscape(SafeHtml.unwrap(html)));
    }
    static comment(text) {
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!--" + internal.htmlEscape(text) + "--\x3e");
    }
    static create(tagName, attributes = undefined, content = undefined) {
      SafeHtml.verifyTagName(String(tagName));
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(tagName), attributes, content);
    }
    static verifyTagName(tagName) {
      if (!VALID_NAMES_IN_TAG.test(tagName)) {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Invalid tag name <${tagName}>.` : "");
      }
      if (tagName.toUpperCase() in NOT_ALLOWED_TAG_NAMES) {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Tag name <${tagName}> is not allowed for SafeHtml.` : "");
      }
    }
    static createIframe(src = undefined, srcdoc = undefined, attributes = undefined, content = undefined) {
      if (src) {
        TrustedResourceUrl.unwrap(src);
      }
      const fixedAttributes = {};
      fixedAttributes["src"] = src || null;
      fixedAttributes["srcdoc"] = srcdoc && SafeHtml.unwrap(srcdoc);
      const defaultAttributes = {"sandbox":""};
      const combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", combinedAttrs, content);
    }
    static createSandboxIframe(src = undefined, srcdoc = undefined, attributes = undefined, content = undefined) {
      if (!SafeHtml.canUseSandboxIframe()) {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
      }
      const fixedAttributes = {};
      if (src) {
        fixedAttributes["src"] = SafeUrl.unwrap(SafeUrl.sanitize(src));
      } else {
        fixedAttributes["src"] = null;
      }
      fixedAttributes["srcdoc"] = srcdoc || null;
      fixedAttributes["sandbox"] = "";
      const combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, {}, attributes);
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", combinedAttrs, content);
    }
    static canUseSandboxIframe() {
      return goog.global["HTMLIFrameElement"] && "sandbox" in goog.global["HTMLIFrameElement"].prototype;
    }
    static createScriptSrc(src, attributes = undefined) {
      TrustedResourceUrl.unwrap(src);
      const fixedAttributes = {"src":src};
      const defaultAttributes = {};
      const combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", combinedAttrs);
    }
    static createScript(script, attributes = undefined) {
      for (let attr in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, attr)) {
          const attrLower = attr.toLowerCase();
          if (attrLower == "language" || attrLower == "src" || attrLower == "text") {
            throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Cannot set "${attrLower}" attribute` : "");
          }
        }
      }
      let content = "";
      script = googArray.concat(script);
      for (let i = 0; i < script.length; i++) {
        content += SafeScript.unwrap(script[i]);
      }
      const htmlContent = SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content);
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", attributes, htmlContent);
    }
    static createStyle(styleSheet, attributes = undefined) {
      const fixedAttributes = {"type":"text/css"};
      const defaultAttributes = {};
      const combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
      let content = "";
      styleSheet = googArray.concat(styleSheet);
      for (let i = 0; i < styleSheet.length; i++) {
        content += SafeStyleSheet.unwrap(styleSheet[i]);
      }
      const htmlContent = SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content);
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", combinedAttrs, htmlContent);
    }
    static createMetaRefresh(url, secs = undefined) {
      let unwrappedUrl = SafeUrl.unwrap(SafeUrl.sanitize(url));
      if (browser.isIE() || browser.isEdge()) {
        if (internal.contains(unwrappedUrl, ";")) {
          unwrappedUrl = "'" + unwrappedUrl.replace(/'/g, "%27") + "'";
        }
      }
      const attributes = {"http-equiv":"refresh", "content":(secs || 0) + "; url\x3d" + unwrappedUrl,};
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", attributes);
    }
    static join(separator, parts) {
      const separatorHtml = SafeHtml.htmlEscape(separator);
      const content = [];
      const addArgument = argument => {
        if (Array.isArray(argument)) {
          argument.forEach(addArgument);
        } else {
          const html = SafeHtml.htmlEscape(argument);
          content.push(SafeHtml.unwrap(html));
        }
      };
      parts.forEach(addArgument);
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content.join(SafeHtml.unwrap(separatorHtml)));
    }
    static concat(var_args) {
      return SafeHtml.join(SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
    }
    static createSafeHtmlSecurityPrivateDoNotAccessOrElse(html) {
      const noinlineHtml = html;
      const policy = trustedtypes.getPolicyPrivateDoNotAccessOrElse();
      const trustedHtml = policy ? policy.createHTML(noinlineHtml) : noinlineHtml;
      return new SafeHtml(trustedHtml, CONSTRUCTOR_TOKEN_PRIVATE);
    }
    static createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(tagName, attributes = undefined, content = undefined) {
      let result = `<${tagName}`;
      result += SafeHtml.stringifyAttributes(tagName, attributes);
      if (content == null) {
        content = [];
      } else if (!Array.isArray(content)) {
        content = [content];
      }
      if (tags.isVoidTag(tagName.toLowerCase())) {
        asserts.assert(!content.length, `Void tag <${tagName}> does not allow content.`);
        result += "\x3e";
      } else {
        const html = SafeHtml.concat(content);
        result += "\x3e" + SafeHtml.unwrap(html) + "\x3c/" + tagName + "\x3e";
      }
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(result);
    }
    static stringifyAttributes(tagName, attributes = undefined) {
      let result = "";
      if (attributes) {
        for (let name in attributes) {
          if (Object.prototype.hasOwnProperty.call(attributes, name)) {
            if (!VALID_NAMES_IN_TAG.test(name)) {
              throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Invalid attribute name "${name}".` : "");
            }
            const value = attributes[name];
            if (value == null) {
              continue;
            }
            result += " " + getAttrNameAndValue(tagName, name, value);
          }
        }
      }
      return result;
    }
    static combineAttributes(fixedAttributes, defaultAttributes, attributes = undefined) {
      const combinedAttributes = {};
      for (const name in fixedAttributes) {
        if (Object.prototype.hasOwnProperty.call(fixedAttributes, name)) {
          asserts.assert(name.toLowerCase() == name, "Must be lower case");
          combinedAttributes[name] = fixedAttributes[name];
        }
      }
      for (const name in defaultAttributes) {
        if (Object.prototype.hasOwnProperty.call(defaultAttributes, name)) {
          asserts.assert(name.toLowerCase() == name, "Must be lower case");
          combinedAttributes[name] = defaultAttributes[name];
        }
      }
      if (attributes) {
        for (const name in attributes) {
          if (Object.prototype.hasOwnProperty.call(attributes, name)) {
            const nameLower = name.toLowerCase();
            if (nameLower in fixedAttributes) {
              throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Cannot override "${nameLower}" attribute, got "` + name + '" with value "' + attributes[name] + '"' : "");
            }
            if (nameLower in defaultAttributes) {
              delete combinedAttributes[nameLower];
            }
            combinedAttributes[name] = attributes[name];
          }
        }
      }
      return combinedAttributes;
    }
  }
  SafeHtml.ENABLE_ERROR_MESSAGES = goog.define("goog.html.SafeHtml.ENABLE_ERROR_MESSAGES", goog.DEBUG);
  SafeHtml.SUPPORT_STYLE_ATTRIBUTE = goog.define("goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE", true);
  SafeHtml.TextOrHtml_;
  SafeHtml.from = SafeHtml.htmlEscape;
  const VALID_NAMES_IN_TAG = /^[a-zA-Z0-9-]+$/;
  const URL_ATTRIBUTES = googObject.createSet("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
  const NOT_ALLOWED_TAG_NAMES = googObject.createSet(TagName.APPLET, TagName.BASE, TagName.EMBED, TagName.IFRAME, TagName.LINK, TagName.MATH, TagName.META, TagName.OBJECT, TagName.SCRIPT, TagName.STYLE, TagName.SVG, TagName.TEMPLATE);
  SafeHtml.AttributeValue;
  function getAttrNameAndValue(tagName, name, value) {
    if (value instanceof Const) {
      value = Const.unwrap(value);
    } else if (name.toLowerCase() == "style") {
      if (SafeHtml.SUPPORT_STYLE_ATTRIBUTE) {
        value = getStyleValue(value);
      } else {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
      }
    } else if (/^on/i.test(name)) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Attribute "${name}` + '" requires goog.string.Const value, "' + value + '" given.' : "");
    } else if (name.toLowerCase() in URL_ATTRIBUTES) {
      if (value instanceof TrustedResourceUrl) {
        value = TrustedResourceUrl.unwrap(value);
      } else if (value instanceof SafeUrl) {
        value = SafeUrl.unwrap(value);
      } else if (typeof value === "string") {
        value = SafeUrl.sanitize(value).getTypedStringValue();
      } else {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Attribute "${name}" on tag "${tagName}` + '" requires goog.html.SafeUrl, goog.string.Const, or' + ' string, value "' + value + '" given.' : "");
      }
    }
    if (value.implementsGoogStringTypedString) {
      value = value.getTypedStringValue();
    }
    asserts.assert(typeof value === "string" || typeof value === "number", "String or number value expected, got " + typeof value + " with value: " + value);
    return `${name}="` + internal.htmlEscape(String(value)) + '"';
  }
  function getStyleValue(value) {
    if (!goog.isObject(value)) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map ' + "of style properties, " + typeof value + " given: " + value : "");
    }
    if (!(value instanceof SafeStyle)) {
      value = SafeStyle.create(value);
    }
    return SafeStyle.unwrap(value);
  }
  SafeHtml.DOCTYPE_HTML = {valueOf:function() {
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!DOCTYPE html\x3e");
  },}.valueOf();
  SafeHtml.EMPTY = new SafeHtml(goog.global.trustedTypes && goog.global.trustedTypes.emptyHTML || "", CONSTRUCTOR_TOKEN_PRIVATE);
  SafeHtml.BR = {valueOf:function() {
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3cbr\x3e");
  },}.valueOf();
  exports = SafeHtml;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.html.safehtml.js");

goog.provide("goog.html.uncheckedconversions");
goog.require("goog.asserts");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.SafeScript");
goog.require("goog.html.SafeStyle");
goog.require("goog.html.SafeStyleSheet");
goog.require("goog.html.SafeUrl");
goog.require("goog.html.TrustedResourceUrl");
goog.require("goog.string.Const");
goog.require("goog.string.internal");
goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(justification, html) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(html);
};
goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(justification, script) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(script);
};
goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(justification, style) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style);
};
goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(justification, styleSheet) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);
};
goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(justification, url) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(justification, url) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);
};

$CLJS.SHADOW_ENV.setLoaded("goog.html.uncheckedconversions.js");

goog.provide("goog.dom.safe");
goog.provide("goog.dom.safe.InsertAdjacentHtmlPosition");
goog.require("goog.asserts");
goog.require("goog.asserts.dom");
goog.require("goog.dom.asserts");
goog.require("goog.functions");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.SafeScript");
goog.require("goog.html.SafeStyle");
goog.require("goog.html.SafeUrl");
goog.require("goog.html.TrustedResourceUrl");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.string.Const");
goog.require("goog.string.internal");
goog.dom.safe.InsertAdjacentHtmlPosition = {AFTERBEGIN:"afterbegin", AFTEREND:"afterend", BEFOREBEGIN:"beforebegin", BEFOREEND:"beforeend"};
goog.dom.safe.insertAdjacentHtml = function(node, position, html) {
  node.insertAdjacentHTML(position, goog.html.SafeHtml.unwrapTrustedHTML(html));
};
goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {"MATH":true, "SCRIPT":true, "STYLE":true, "SVG":true, "TEMPLATE":true};
goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
  if (goog.DEBUG && typeof document === "undefined") {
    return false;
  }
  var div = document.createElement("div");
  var childDiv = document.createElement("div");
  childDiv.appendChild(document.createElement("div"));
  div.appendChild(childDiv);
  if (goog.DEBUG && !div.firstChild) {
    return false;
  }
  var innerChild = div.firstChild.firstChild;
  div.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);
  return !innerChild.parentElement;
});
goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(elem, html) {
  if (goog.dom.safe.isInnerHtmlCleanupRecursive_()) {
    while (elem.lastChild) {
      elem.removeChild(elem.lastChild);
    }
  }
  elem.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(html);
};
goog.dom.safe.setInnerHtml = function(elem, html) {
  if (goog.asserts.ENABLE_ASSERTS && elem.tagName) {
    var tagName = elem.tagName.toUpperCase();
    if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[tagName]) {
      throw new Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + elem.tagName + ".");
    }
  }
  goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(elem, html);
};
goog.dom.safe.setInnerHtmlFromConstant = function(element, constHtml) {
  goog.dom.safe.setInnerHtml(element, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Constant HTML to be immediatelly used."), goog.string.Const.unwrap(constHtml)));
};
goog.dom.safe.setOuterHtml = function(elem, html) {
  elem.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(html);
};
goog.dom.safe.setFormElementAction = function(form, url) {
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(url);
  }
  goog.asserts.dom.assertIsHtmlFormElement(form).action = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setButtonFormAction = function(button, url) {
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(url);
  }
  goog.asserts.dom.assertIsHtmlButtonElement(button).formAction = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setInputFormAction = function(input, url) {
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(url);
  }
  goog.asserts.dom.assertIsHtmlInputElement(input).formAction = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setStyle = function(elem, style) {
  elem.style.cssText = goog.html.SafeStyle.unwrap(style);
};
goog.dom.safe.documentWrite = function(doc, html) {
  doc.write(goog.html.SafeHtml.unwrapTrustedHTML(html));
};
goog.dom.safe.setAnchorHref = function(anchor, url) {
  goog.asserts.dom.assertIsHtmlAnchorElement(anchor);
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(url);
  }
  anchor.href = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setAudioSrc = function(audioElement, url) {
  goog.asserts.dom.assertIsHtmlAudioElement(audioElement);
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(url);
  }
  audioElement.src = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setVideoSrc = function(videoElement, url) {
  goog.asserts.dom.assertIsHtmlVideoElement(videoElement);
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(url);
  }
  videoElement.src = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setEmbedSrc = function(embed, url) {
  goog.asserts.dom.assertIsHtmlEmbedElement(embed);
  embed.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(url);
};
goog.dom.safe.setFrameSrc = function(frame, url) {
  goog.asserts.dom.assertIsHtmlFrameElement(frame);
  frame.src = goog.html.TrustedResourceUrl.unwrap(url);
};
goog.dom.safe.setIframeSrc = function(iframe, url) {
  goog.asserts.dom.assertIsHtmlIFrameElement(iframe);
  iframe.src = goog.html.TrustedResourceUrl.unwrap(url);
};
goog.dom.safe.setIframeSrcdoc = function(iframe, html) {
  goog.asserts.dom.assertIsHtmlIFrameElement(iframe);
  iframe.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(html);
};
goog.dom.safe.setLinkHrefAndRel = function(link, url, rel) {
  goog.asserts.dom.assertIsHtmlLinkElement(link);
  link.rel = rel;
  if (goog.string.internal.caseInsensitiveContains(rel, "stylesheet")) {
    goog.asserts.assert(url instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"');
    link.href = goog.html.TrustedResourceUrl.unwrap(url);
    const win = link.ownerDocument && link.ownerDocument.defaultView;
    const nonce = goog.dom.safe.getStyleNonce(win);
    if (nonce) {
      link.setAttribute("nonce", nonce);
    }
  } else if (url instanceof goog.html.TrustedResourceUrl) {
    link.href = goog.html.TrustedResourceUrl.unwrap(url);
  } else if (url instanceof goog.html.SafeUrl) {
    link.href = goog.html.SafeUrl.unwrap(url);
  } else {
    link.href = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(url));
  }
};
goog.dom.safe.setObjectData = function(object, url) {
  goog.asserts.dom.assertIsHtmlObjectElement(object);
  object.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(url);
};
goog.dom.safe.setScriptSrc = function(script, url) {
  goog.asserts.dom.assertIsHtmlScriptElement(script);
  goog.dom.safe.setNonceForScriptElement_(script);
  script.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(url);
};
goog.dom.safe.setScriptContent = function(script, content) {
  goog.asserts.dom.assertIsHtmlScriptElement(script);
  goog.dom.safe.setNonceForScriptElement_(script);
  script.textContent = goog.html.SafeScript.unwrapTrustedScript(content);
};
goog.dom.safe.setNonceForScriptElement_ = function(script) {
  var win = script.ownerDocument && script.ownerDocument.defaultView;
  const nonce = goog.dom.safe.getScriptNonce(win);
  if (nonce) {
    script.setAttribute("nonce", nonce);
  }
};
goog.dom.safe.setLocationHref = function(loc, url) {
  goog.dom.asserts.assertIsLocation(loc);
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(url);
  }
  loc.href = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.assignLocation = function(loc, url) {
  goog.dom.asserts.assertIsLocation(loc);
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(url);
  }
  loc.assign(goog.html.SafeUrl.unwrap(safeUrl));
};
goog.dom.safe.replaceLocation = function(loc, url) {
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(url);
  }
  loc.replace(goog.html.SafeUrl.unwrap(safeUrl));
};
goog.dom.safe.openInWindow = function(url, opt_openerWin, opt_name, opt_specs) {
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(url);
  }
  var win = opt_openerWin || goog.global;
  var name = opt_name instanceof goog.string.Const ? goog.string.Const.unwrap(opt_name) : opt_name || "";
  if (opt_specs !== undefined) {
    return win.open(goog.html.SafeUrl.unwrap(safeUrl), name, opt_specs);
  } else {
    return win.open(goog.html.SafeUrl.unwrap(safeUrl), name);
  }
};
goog.dom.safe.parseFromStringHtml = function(parser, html) {
  return goog.dom.safe.parseFromString(parser, html, "text/html");
};
goog.dom.safe.parseFromString = function(parser, content, type) {
  return parser.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(content), type);
};
goog.dom.safe.createImageFromBlob = function(blob) {
  if (!/^image\/.*/g.test(blob.type)) {
    throw new Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
  }
  var objectUrl = goog.global.URL.createObjectURL(blob);
  var image = new goog.global.Image();
  image.onload = function() {
    goog.global.URL.revokeObjectURL(objectUrl);
  };
  image.src = objectUrl;
  return image;
};
goog.dom.safe.createContextualFragment = function(range, html) {
  return range.createContextualFragment(goog.html.SafeHtml.unwrapTrustedHTML(html));
};
goog.dom.safe.getScriptNonce = function(opt_window) {
  return goog.dom.safe.getNonce_("script[nonce]", opt_window);
};
goog.dom.safe.getStyleNonce = function(opt_window) {
  return goog.dom.safe.getNonce_('style[nonce],link[rel\x3d"stylesheet"][nonce]', opt_window);
};
goog.dom.safe.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.dom.safe.getNonce_ = function(selector, win) {
  const doc = (win || goog.global).document;
  if (!doc.querySelector) {
    return "";
  }
  let el = doc.querySelector(selector);
  if (el) {
    const nonce = el["nonce"] || el.getAttribute("nonce");
    if (nonce && goog.dom.safe.NONCE_PATTERN_.test(nonce)) {
      return nonce;
    }
  }
  return "";
};

$CLJS.SHADOW_ENV.setLoaded("goog.dom.safe.js");

goog.provide("goog.string");
goog.provide("goog.string.Unicode");
goog.require("goog.dom.safe");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.string.Const");
goog.require("goog.string.internal");
goog.string.DETECT_DOUBLE_ESCAPING = goog.define("goog.string.DETECT_DOUBLE_ESCAPING", false);
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = goog.define("goog.string.FORCE_NON_DOM_HTML_UNESCAPING", false);
goog.string.Unicode = {NBSP:" ", ZERO_WIDTH_SPACE:"​"};
goog.string.startsWith = goog.string.internal.startsWith;
goog.string.endsWith = goog.string.internal.endsWith;
goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
goog.string.subs = function(str, var_args) {
  const splitParts = str.split("%s");
  let returnString = "";
  const subsArguments = Array.prototype.slice.call(arguments, 1);
  while (subsArguments.length && splitParts.length > 1) {
    returnString += splitParts.shift() + subsArguments.shift();
  }
  return returnString + splitParts.join("%s");
};
goog.string.collapseWhitespace = function(str) {
  return str.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
goog.string.isEmptyString = function(str) {
  return str.length == 0;
};
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function(str) {
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(str));
};
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function(str) {
  return !/[^\t\n\r ]/.test(str);
};
goog.string.isAlpha = function(str) {
  return !/[^a-zA-Z]/.test(str);
};
goog.string.isNumeric = function(str) {
  return !/[^0-9]/.test(str);
};
goog.string.isAlphaNumeric = function(str) {
  return !/[^a-zA-Z0-9]/.test(str);
};
goog.string.isSpace = function(ch) {
  return ch == " ";
};
goog.string.isUnicodeChar = function(ch) {
  return ch.length == 1 && ch >= " " && ch <= "~" || ch >= "" && ch <= "�";
};
goog.string.stripNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function(str) {
  return str.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function(str) {
  return str.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function(str) {
  return str.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = goog.string.internal.trim;
goog.string.trimLeft = function(str) {
  return str.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function(str) {
  return str.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
goog.string.numberAwareCompare_ = function(str1, str2, tokenizerRegExp) {
  if (str1 == str2) {
    return 0;
  }
  if (!str1) {
    return -1;
  }
  if (!str2) {
    return 1;
  }
  const tokens1 = str1.toLowerCase().match(tokenizerRegExp);
  const tokens2 = str2.toLowerCase().match(tokenizerRegExp);
  const count = Math.min(tokens1.length, tokens2.length);
  for (let i = 0; i < count; i++) {
    const a = tokens1[i];
    const b = tokens2[i];
    if (a != b) {
      const num1 = parseInt(a, 10);
      if (!isNaN(num1)) {
        const num2 = parseInt(b, 10);
        if (!isNaN(num2) && num1 - num2) {
          return num1 - num2;
        }
      }
      return a < b ? -1 : 1;
    }
  }
  if (tokens1.length != tokens2.length) {
    return tokens1.length - tokens2.length;
  }
  return str1 < str2 ? -1 : 1;
};
goog.string.intAwareCompare = function(str1, str2) {
  return goog.string.numberAwareCompare_(str1, str2, /\d+|\D+/g);
};
goog.string.floatAwareCompare = function(str1, str2) {
  return goog.string.numberAwareCompare_(str1, str2, /\d+|\.\d+|\D+/g);
};
goog.string.numerateCompare = goog.string.floatAwareCompare;
goog.string.urlEncode = function(str) {
  return encodeURIComponent(String(str));
};
goog.string.urlDecode = function(str) {
  return decodeURIComponent(str.replace(/\+/g, " "));
};
goog.string.newLineToBr = goog.string.internal.newLineToBr;
goog.string.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {
  str = goog.string.internal.htmlEscape(str, opt_isLikelyToContainHtmlChars);
  if (goog.string.DETECT_DOUBLE_ESCAPING) {
    str = str.replace(goog.string.E_RE_, "\x26#101;");
  }
  return str;
};
goog.string.E_RE_ = /e/g;
goog.string.unescapeEntities = function(str) {
  if (goog.string.contains(str, "\x26")) {
    if (!goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global) {
      return goog.string.unescapeEntitiesUsingDom_(str);
    } else {
      return goog.string.unescapePureXmlEntities_(str);
    }
  }
  return str;
};
goog.string.unescapeEntitiesWithDocument = function(str, document) {
  if (goog.string.contains(str, "\x26")) {
    return goog.string.unescapeEntitiesUsingDom_(str, document);
  }
  return str;
};
goog.string.unescapeEntitiesUsingDom_ = function(str, opt_document) {
  const seen = {"\x26amp;":"\x26", "\x26lt;":"\x3c", "\x26gt;":"\x3e", "\x26quot;":'"'};
  let div;
  if (opt_document) {
    div = opt_document.createElement("div");
  } else {
    div = goog.global.document.createElement("div");
  }
  return str.replace(goog.string.HTML_ENTITY_PATTERN_, function(s, entity) {
    let value = seen[s];
    if (value) {
      return value;
    }
    if (entity.charAt(0) == "#") {
      const n = Number("0" + entity.slice(1));
      if (!isNaN(n)) {
        value = String.fromCharCode(n);
      }
    }
    if (!value) {
      goog.dom.safe.setInnerHtml(div, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), s + " "));
      value = div.firstChild.nodeValue.slice(0, -1);
    }
    return seen[s] = value;
  });
};
goog.string.unescapePureXmlEntities_ = function(str) {
  return str.replace(/&([^;]+);/g, function(s, entity) {
    switch(entity) {
      case "amp":
        return "\x26";
      case "lt":
        return "\x3c";
      case "gt":
        return "\x3e";
      case "quot":
        return '"';
      default:
        if (entity.charAt(0) == "#") {
          const n = Number("0" + entity.slice(1));
          if (!isNaN(n)) {
            return String.fromCharCode(n);
          }
        }
        return s;
    }
  });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function(str, opt_xml) {
  return goog.string.newLineToBr(str.replace(/  /g, " \x26#160;"), opt_xml);
};
goog.string.preserveSpaces = function(str) {
  return str.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function(str, quoteChars) {
  const length = quoteChars.length;
  for (let i = 0; i < length; i++) {
    const quoteChar = length == 1 ? quoteChars : quoteChars.charAt(i);
    if (str.charAt(0) == quoteChar && str.charAt(str.length - 1) == quoteChar) {
      return str.substring(1, str.length - 1);
    }
  }
  return str;
};
goog.string.truncate = function(str, chars, opt_protectEscapedCharacters) {
  if (opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str);
  }
  if (str.length > chars) {
    str = str.substring(0, chars - 3) + "...";
  }
  if (opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str);
  }
  return str;
};
goog.string.truncateMiddle = function(str, chars, opt_protectEscapedCharacters, opt_trailingChars) {
  if (opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str);
  }
  if (opt_trailingChars && str.length > chars) {
    if (opt_trailingChars > chars) {
      opt_trailingChars = chars;
    }
    const endPoint = str.length - opt_trailingChars;
    const startPoint = chars - opt_trailingChars;
    str = str.substring(0, startPoint) + "..." + str.substring(endPoint);
  } else if (str.length > chars) {
    let half = Math.floor(chars / 2);
    const endPos = str.length - half;
    half += chars % 2;
    str = str.substring(0, half) + "..." + str.substring(endPos);
  }
  if (opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str);
  }
  return str;
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\v":"\\x0B", '"':'\\"', "\\":"\\\\", "\x3c":"\\u003C"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(s) {
  s = String(s);
  const sb = ['"'];
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    const cc = ch.charCodeAt(0);
    sb[i + 1] = goog.string.specialEscapeChars_[ch] || (cc > 31 && cc < 127 ? ch : goog.string.escapeChar(ch));
  }
  sb.push('"');
  return sb.join("");
};
goog.string.escapeString = function(str) {
  const sb = [];
  for (let i = 0; i < str.length; i++) {
    sb[i] = goog.string.escapeChar(str.charAt(i));
  }
  return sb.join("");
};
goog.string.escapeChar = function(c) {
  if (c in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[c];
  }
  if (c in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[c] = goog.string.specialEscapeChars_[c];
  }
  let rv = c;
  const cc = c.charCodeAt(0);
  if (cc > 31 && cc < 127) {
    rv = c;
  } else {
    if (cc < 256) {
      rv = "\\x";
      if (cc < 16 || cc > 256) {
        rv += "0";
      }
    } else {
      rv = "\\u";
      if (cc < 4096) {
        rv += "0";
      }
    }
    rv += cc.toString(16).toUpperCase();
  }
  return goog.string.jsEscapeCache_[c] = rv;
};
goog.string.contains = goog.string.internal.contains;
goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
goog.string.countOf = function(s, ss) {
  return s && ss ? s.split(ss).length - 1 : 0;
};
goog.string.removeAt = function(s, index, stringLength) {
  let resultStr = s;
  if (index >= 0 && index < s.length && stringLength > 0) {
    resultStr = s.slice(0, index) + s.slice(index + stringLength);
  }
  return resultStr;
};
goog.string.remove = function(str, substr) {
  return str.replace(substr, "");
};
goog.string.removeAll = function(s, ss) {
  const re = new RegExp(goog.string.regExpEscape(ss), "g");
  return s.replace(re, "");
};
goog.string.replaceAll = function(s, ss, replacement) {
  const re = new RegExp(goog.string.regExpEscape(ss), "g");
  return s.replace(re, replacement.replace(/\$/g, "$$$$"));
};
goog.string.regExpEscape = function(s) {
  return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
goog.string.repeat = String.prototype.repeat ? function(string, length) {
  return string.repeat(length);
} : function(string, length) {
  return (new Array(length + 1)).join(string);
};
goog.string.padNumber = function(num, length, opt_precision) {
  if (!Number.isFinite(num)) {
    return String(num);
  }
  let s = opt_precision !== undefined ? num.toFixed(opt_precision) : String(num);
  let index = s.indexOf(".");
  if (index === -1) {
    index = s.length;
  }
  const sign = s[0] === "-" ? "-" : "";
  if (sign) {
    s = s.substring(1);
  }
  return sign + goog.string.repeat("0", Math.max(0, length - index)) + s;
};
goog.string.makeSafe = function(obj) {
  return obj == null ? "" : String(obj);
};
goog.string.getRandomString = function() {
  const x = 2147483648;
  return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ goog.now()).toString(36);
};
goog.string.compareVersions = goog.string.internal.compareVersions;
goog.string.hashCode = function(str) {
  let result = 0;
  for (let i = 0; i < str.length; ++i) {
    result = 31 * result + str.charCodeAt(i) >>> 0;
  }
  return result;
};
goog.string.uniqueStringCounter_ = Math.random() * 2147483648 | 0;
goog.string.createUniqueString = function() {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function(str) {
  const num = Number(str);
  if (num == 0 && goog.string.isEmptyOrWhitespace(str)) {
    return NaN;
  }
  return num;
};
goog.string.isLowerCamelCase = function(str) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(str);
};
goog.string.isUpperCamelCase = function(str) {
  return /^([A-Z][a-z]*)+$/.test(str);
};
goog.string.toCamelCase = function(str) {
  return String(str).replace(/\-([a-z])/g, function(all, match) {
    return match.toUpperCase();
  });
};
goog.string.toSelectorCase = function(str) {
  return String(str).replace(/([A-Z])/g, "-$1").toLowerCase();
};
goog.string.toTitleCase = function(str, opt_delimiters) {
  let delimiters = typeof opt_delimiters === "string" ? goog.string.regExpEscape(opt_delimiters) : "\\s";
  delimiters = delimiters ? "|[" + delimiters + "]+" : "";
  const regexp = new RegExp("(^" + delimiters + ")([a-z])", "g");
  return str.replace(regexp, function(all, p1, p2) {
    return p1 + p2.toUpperCase();
  });
};
goog.string.capitalize = function(str) {
  return String(str.charAt(0)).toUpperCase() + String(str.slice(1)).toLowerCase();
};
goog.string.parseInt = function(value) {
  if (isFinite(value)) {
    value = String(value);
  }
  if (typeof value === "string") {
    return /^\s*-?0x/i.test(value) ? parseInt(value, 16) : parseInt(value, 10);
  }
  return NaN;
};
goog.string.splitLimit = function(str, separator, limit) {
  const parts = str.split(separator);
  const returnVal = [];
  while (limit > 0 && parts.length) {
    returnVal.push(parts.shift());
    limit--;
  }
  if (parts.length) {
    returnVal.push(parts.join(separator));
  }
  return returnVal;
};
goog.string.lastComponent = function(str, separators) {
  if (!separators) {
    return str;
  } else if (typeof separators == "string") {
    separators = [separators];
  }
  let lastSeparatorIndex = -1;
  for (let i = 0; i < separators.length; i++) {
    if (separators[i] == "") {
      continue;
    }
    const currentSeparatorIndex = str.lastIndexOf(separators[i]);
    if (currentSeparatorIndex > lastSeparatorIndex) {
      lastSeparatorIndex = currentSeparatorIndex;
    }
  }
  if (lastSeparatorIndex == -1) {
    return str;
  }
  return str.slice(lastSeparatorIndex + 1);
};
goog.string.editDistance = function(a, b) {
  const v0 = [];
  const v1 = [];
  if (a == b) {
    return 0;
  }
  if (!a.length || !b.length) {
    return Math.max(a.length, b.length);
  }
  for (let i = 0; i < b.length + 1; i++) {
    v0[i] = i;
  }
  for (let i = 0; i < a.length; i++) {
    v1[0] = i + 1;
    for (let j = 0; j < b.length; j++) {
      const cost = Number(a[i] != b[j]);
      v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
    }
    for (let j = 0; j < v0.length; j++) {
      v0[j] = v1[j];
    }
  }
  return v1[b.length];
};

$CLJS.SHADOW_ENV.setLoaded("goog.string.string.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.collections.maps");
  goog.module.declareLegacyNamespace();
  class MapLike {
    constructor() {
      this.size;
    }
    set(key, val) {
    }
    get(key) {
    }
    keys() {
    }
    values() {
    }
    has(key) {
    }
  }
  exports.MapLike = MapLike;
  function setAll(map, entries) {
    if (!entries) {
      return;
    }
    for (const [k, v] of entries) {
      map.set(k, v);
    }
  }
  exports.setAll = setAll;
  function hasValue(map, val, valueEqualityFn = defaultEqualityFn) {
    for (const v of map.values()) {
      if (valueEqualityFn(v, val)) {
        return true;
      }
    }
    return false;
  }
  exports.hasValue = hasValue;
  const defaultEqualityFn = (a, b) => a === b;
  function equals(map, otherMap, valueEqualityFn = defaultEqualityFn) {
    if (map === otherMap) {
      return true;
    }
    if (map.size !== otherMap.size) {
      return false;
    }
    for (const key of map.keys()) {
      if (!otherMap.has(key)) {
        return false;
      }
      if (!valueEqualityFn(map.get(key), otherMap.get(key))) {
        return false;
      }
    }
    return true;
  }
  exports.equals = equals;
  function transpose(map) {
    const transposed = new Map();
    for (const key of map.keys()) {
      const val = map.get(key);
      transposed.set(val, key);
    }
    return transposed;
  }
  exports.transpose = transpose;
  function toObject(map) {
    const obj = {};
    for (const key of map.keys()) {
      obj[key] = map.get(key);
    }
    return obj;
  }
  exports.toObject = toObject;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.collections.maps.js");

goog.provide("goog.structs");
goog.require("goog.array");
goog.require("goog.object");
goog.structs.getCount = function(col) {
  if (col.getCount && typeof col.getCount == "function") {
    return col.getCount();
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return col.length;
  }
  return goog.object.getCount(col);
};
goog.structs.getValues = function(col) {
  if (col.getValues && typeof col.getValues == "function") {
    return col.getValues();
  }
  if (typeof Map !== "undefined" && col instanceof Map || typeof Set !== "undefined" && col instanceof Set) {
    return Array.from(col.values());
  }
  if (typeof col === "string") {
    return col.split("");
  }
  if (goog.isArrayLike(col)) {
    var rv = [];
    var l = col.length;
    for (var i = 0; i < l; i++) {
      rv.push(col[i]);
    }
    return rv;
  }
  return goog.object.getValues(col);
};
goog.structs.getKeys = function(col) {
  if (col.getKeys && typeof col.getKeys == "function") {
    return col.getKeys();
  }
  if (col.getValues && typeof col.getValues == "function") {
    return undefined;
  }
  if (typeof Map !== "undefined" && col instanceof Map) {
    return Array.from(col.keys());
  }
  if (typeof Set !== "undefined" && col instanceof Set) {
    return undefined;
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    var rv = [];
    var l = col.length;
    for (var i = 0; i < l; i++) {
      rv.push(i);
    }
    return rv;
  }
  return goog.object.getKeys(col);
};
goog.structs.contains = function(col, val) {
  if (col.contains && typeof col.contains == "function") {
    return col.contains(val);
  }
  if (col.containsValue && typeof col.containsValue == "function") {
    return col.containsValue(val);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return goog.array.contains(col, val);
  }
  return goog.object.containsValue(col, val);
};
goog.structs.isEmpty = function(col) {
  if (col.isEmpty && typeof col.isEmpty == "function") {
    return col.isEmpty();
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return col.length === 0;
  }
  return goog.object.isEmpty(col);
};
goog.structs.clear = function(col) {
  if (col.clear && typeof col.clear == "function") {
    col.clear();
  } else if (goog.isArrayLike(col)) {
    goog.array.clear(col);
  } else {
    goog.object.clear(col);
  }
};
goog.structs.forEach = function(col, f, opt_obj) {
  if (col.forEach && typeof col.forEach == "function") {
    col.forEach(f, opt_obj);
  } else if (goog.isArrayLike(col) || typeof col === "string") {
    Array.prototype.forEach.call(col, f, opt_obj);
  } else {
    var keys = goog.structs.getKeys(col);
    var values = goog.structs.getValues(col);
    var l = values.length;
    for (var i = 0; i < l; i++) {
      f.call(opt_obj, values[i], keys && keys[i], col);
    }
  }
};
goog.structs.filter = function(col, f, opt_obj) {
  if (typeof col.filter == "function") {
    return col.filter(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return Array.prototype.filter.call(col, f, opt_obj);
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if (keys) {
    rv = {};
    for (var i = 0; i < l; i++) {
      if (f.call(opt_obj, values[i], keys[i], col)) {
        rv[keys[i]] = values[i];
      }
    }
  } else {
    rv = [];
    for (var i = 0; i < l; i++) {
      if (f.call(opt_obj, values[i], undefined, col)) {
        rv.push(values[i]);
      }
    }
  }
  return rv;
};
goog.structs.map = function(col, f, opt_obj) {
  if (typeof col.map == "function") {
    return col.map(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return Array.prototype.map.call(col, f, opt_obj);
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if (keys) {
    rv = {};
    for (var i = 0; i < l; i++) {
      rv[keys[i]] = f.call(opt_obj, values[i], keys[i], col);
    }
  } else {
    rv = [];
    for (var i = 0; i < l; i++) {
      rv[i] = f.call(opt_obj, values[i], undefined, col);
    }
  }
  return rv;
};
goog.structs.some = function(col, f, opt_obj) {
  if (typeof col.some == "function") {
    return col.some(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return Array.prototype.some.call(col, f, opt_obj);
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    if (f.call(opt_obj, values[i], keys && keys[i], col)) {
      return true;
    }
  }
  return false;
};
goog.structs.every = function(col, f, opt_obj) {
  if (typeof col.every == "function") {
    return col.every(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return Array.prototype.every.call(col, f, opt_obj);
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    if (!f.call(opt_obj, values[i], keys && keys[i], col)) {
      return false;
    }
  }
  return true;
};

$CLJS.SHADOW_ENV.setLoaded("goog.structs.structs.js");

goog.provide("goog.uri.utils");
goog.provide("goog.uri.utils.ComponentIndex");
goog.provide("goog.uri.utils.QueryArray");
goog.provide("goog.uri.utils.QueryValue");
goog.provide("goog.uri.utils.StandardQueryParam");
goog.require("goog.asserts");
goog.require("goog.string");
goog.uri.utils.CharCode_ = {AMPERSAND:38, EQUAL:61, HASH:35, QUESTION:63};
goog.uri.utils.buildFromEncodedParts = function(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
  var out = "";
  if (opt_scheme) {
    out += opt_scheme + ":";
  }
  if (opt_domain) {
    out += "//";
    if (opt_userInfo) {
      out += opt_userInfo + "@";
    }
    out += opt_domain;
    if (opt_port) {
      out += ":" + opt_port;
    }
  }
  if (opt_path) {
    out += opt_path;
  }
  if (opt_queryData) {
    out += "?" + opt_queryData;
  }
  if (opt_fragment) {
    out += "#" + opt_fragment;
  }
  return out;
};
goog.uri.utils.splitRe_ = new RegExp("^" + "(?:" + "([^:/?#.]+)" + ":)?" + "(?://" + "(?:([^\\\\/?#]*)@)?" + "([^\\\\/?#]*?)" + "(?::([0-9]+))?" + "(?\x3d[\\\\/?#]|$)" + ")?" + "([^?#]+)?" + "(?:\\?([^#]*))?" + "(?:#([\\s\\S]*))?" + "$");
goog.uri.utils.ComponentIndex = {SCHEME:1, USER_INFO:2, DOMAIN:3, PORT:4, PATH:5, QUERY_DATA:6, FRAGMENT:7};
goog.uri.utils.urlPackageSupportLoggingHandler_ = null;
goog.uri.utils.setUrlPackageSupportLoggingHandler = function(handler) {
  goog.uri.utils.urlPackageSupportLoggingHandler_ = handler;
};
goog.uri.utils.split = function(uri) {
  var result = uri.match(goog.uri.utils.splitRe_);
  if (goog.uri.utils.urlPackageSupportLoggingHandler_ && ["http", "https", "ws", "wss", "ftp"].indexOf(result[goog.uri.utils.ComponentIndex.SCHEME]) >= 0) {
    goog.uri.utils.urlPackageSupportLoggingHandler_(uri);
  }
  return result;
};
goog.uri.utils.decodeIfPossible_ = function(uri, opt_preserveReserved) {
  if (!uri) {
    return uri;
  }
  return opt_preserveReserved ? decodeURI(uri) : decodeURIComponent(uri);
};
goog.uri.utils.getComponentByIndex_ = function(componentIndex, uri) {
  return goog.uri.utils.split(uri)[componentIndex] || null;
};
goog.uri.utils.getScheme = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME, uri);
};
goog.uri.utils.getEffectiveScheme = function(uri) {
  var scheme = goog.uri.utils.getScheme(uri);
  if (!scheme && goog.global.self && goog.global.self.location) {
    var protocol = goog.global.self.location.protocol;
    scheme = protocol.slice(0, -1);
  }
  return scheme ? scheme.toLowerCase() : "";
};
goog.uri.utils.getUserInfoEncoded = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO, uri);
};
goog.uri.utils.getUserInfo = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded(uri));
};
goog.uri.utils.getDomainEncoded = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN, uri);
};
goog.uri.utils.getDomain = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded(uri), true);
};
goog.uri.utils.getPort = function(uri) {
  return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT, uri)) || null;
};
goog.uri.utils.getPathEncoded = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH, uri);
};
goog.uri.utils.getPath = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded(uri), true);
};
goog.uri.utils.getQueryData = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA, uri);
};
goog.uri.utils.getFragmentEncoded = function(uri) {
  var hashIndex = uri.indexOf("#");
  return hashIndex < 0 ? null : uri.slice(hashIndex + 1);
};
goog.uri.utils.setFragmentEncoded = function(uri, fragment) {
  return goog.uri.utils.removeFragment(uri) + (fragment ? "#" + fragment : "");
};
goog.uri.utils.getFragment = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded(uri));
};
goog.uri.utils.getHost = function(uri) {
  var pieces = goog.uri.utils.split(uri);
  return goog.uri.utils.buildFromEncodedParts(pieces[goog.uri.utils.ComponentIndex.SCHEME], pieces[goog.uri.utils.ComponentIndex.USER_INFO], pieces[goog.uri.utils.ComponentIndex.DOMAIN], pieces[goog.uri.utils.ComponentIndex.PORT]);
};
goog.uri.utils.getOrigin = function(uri) {
  var pieces = goog.uri.utils.split(uri);
  return goog.uri.utils.buildFromEncodedParts(pieces[goog.uri.utils.ComponentIndex.SCHEME], null, pieces[goog.uri.utils.ComponentIndex.DOMAIN], pieces[goog.uri.utils.ComponentIndex.PORT]);
};
goog.uri.utils.getPathAndAfter = function(uri) {
  var pieces = goog.uri.utils.split(uri);
  return goog.uri.utils.buildFromEncodedParts(null, null, null, null, pieces[goog.uri.utils.ComponentIndex.PATH], pieces[goog.uri.utils.ComponentIndex.QUERY_DATA], pieces[goog.uri.utils.ComponentIndex.FRAGMENT]);
};
goog.uri.utils.removeFragment = function(uri) {
  var hashIndex = uri.indexOf("#");
  return hashIndex < 0 ? uri : uri.slice(0, hashIndex);
};
goog.uri.utils.haveSameDomain = function(uri1, uri2) {
  var pieces1 = goog.uri.utils.split(uri1);
  var pieces2 = goog.uri.utils.split(uri2);
  return pieces1[goog.uri.utils.ComponentIndex.DOMAIN] == pieces2[goog.uri.utils.ComponentIndex.DOMAIN] && pieces1[goog.uri.utils.ComponentIndex.SCHEME] == pieces2[goog.uri.utils.ComponentIndex.SCHEME] && pieces1[goog.uri.utils.ComponentIndex.PORT] == pieces2[goog.uri.utils.ComponentIndex.PORT];
};
goog.uri.utils.assertNoFragmentsOrQueries_ = function(uri) {
  goog.asserts.assert(uri.indexOf("#") < 0 && uri.indexOf("?") < 0, "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", uri);
};
goog.uri.utils.QueryValue;
goog.uri.utils.QueryArray;
goog.uri.utils.parseQueryData = function(encodedQuery, callback) {
  if (!encodedQuery) {
    return;
  }
  var pairs = encodedQuery.split("\x26");
  for (var i = 0; i < pairs.length; i++) {
    var indexOfEquals = pairs[i].indexOf("\x3d");
    var name = null;
    var value = null;
    if (indexOfEquals >= 0) {
      name = pairs[i].substring(0, indexOfEquals);
      value = pairs[i].substring(indexOfEquals + 1);
    } else {
      name = pairs[i];
    }
    callback(name, value ? goog.string.urlDecode(value) : "");
  }
};
goog.uri.utils.splitQueryData_ = function(uri) {
  var hashIndex = uri.indexOf("#");
  if (hashIndex < 0) {
    hashIndex = uri.length;
  }
  var questionIndex = uri.indexOf("?");
  var queryData;
  if (questionIndex < 0 || questionIndex > hashIndex) {
    questionIndex = hashIndex;
    queryData = "";
  } else {
    queryData = uri.substring(questionIndex + 1, hashIndex);
  }
  return [uri.slice(0, questionIndex), queryData, uri.slice(hashIndex)];
};
goog.uri.utils.joinQueryData_ = function(parts) {
  return parts[0] + (parts[1] ? "?" + parts[1] : "") + parts[2];
};
goog.uri.utils.appendQueryData_ = function(queryData, newData) {
  if (!newData) {
    return queryData;
  }
  return queryData ? queryData + "\x26" + newData : newData;
};
goog.uri.utils.appendQueryDataToUri_ = function(uri, queryData) {
  if (!queryData) {
    return uri;
  }
  var parts = goog.uri.utils.splitQueryData_(uri);
  parts[1] = goog.uri.utils.appendQueryData_(parts[1], queryData);
  return goog.uri.utils.joinQueryData_(parts);
};
goog.uri.utils.appendKeyValuePairs_ = function(key, value, pairs) {
  goog.asserts.assertString(key);
  if (Array.isArray(value)) {
    goog.asserts.assertArray(value);
    for (var j = 0; j < value.length; j++) {
      goog.uri.utils.appendKeyValuePairs_(key, String(value[j]), pairs);
    }
  } else if (value != null) {
    pairs.push(key + (value === "" ? "" : "\x3d" + goog.string.urlEncode(value)));
  }
};
goog.uri.utils.buildQueryData = function(keysAndValues, opt_startIndex) {
  goog.asserts.assert(Math.max(keysAndValues.length - (opt_startIndex || 0), 0) % 2 == 0, "goog.uri.utils: Key/value lists must be even in length.");
  var params = [];
  for (var i = opt_startIndex || 0; i < keysAndValues.length; i += 2) {
    var key = keysAndValues[i];
    goog.uri.utils.appendKeyValuePairs_(key, keysAndValues[i + 1], params);
  }
  return params.join("\x26");
};
goog.uri.utils.buildQueryDataFromMap = function(map) {
  var params = [];
  for (var key in map) {
    goog.uri.utils.appendKeyValuePairs_(key, map[key], params);
  }
  return params.join("\x26");
};
goog.uri.utils.appendParams = function(uri, var_args) {
  var queryData = arguments.length == 2 ? goog.uri.utils.buildQueryData(arguments[1], 0) : goog.uri.utils.buildQueryData(arguments, 1);
  return goog.uri.utils.appendQueryDataToUri_(uri, queryData);
};
goog.uri.utils.appendParamsFromMap = function(uri, map) {
  var queryData = goog.uri.utils.buildQueryDataFromMap(map);
  return goog.uri.utils.appendQueryDataToUri_(uri, queryData);
};
goog.uri.utils.appendParam = function(uri, key, opt_value) {
  var value = opt_value != null ? "\x3d" + goog.string.urlEncode(opt_value) : "";
  return goog.uri.utils.appendQueryDataToUri_(uri, key + value);
};
goog.uri.utils.findParam_ = function(uri, startIndex, keyEncoded, hashOrEndIndex) {
  var index = startIndex;
  var keyLength = keyEncoded.length;
  while ((index = uri.indexOf(keyEncoded, index)) >= 0 && index < hashOrEndIndex) {
    var precedingChar = uri.charCodeAt(index - 1);
    if (precedingChar == goog.uri.utils.CharCode_.AMPERSAND || precedingChar == goog.uri.utils.CharCode_.QUESTION) {
      var followingChar = uri.charCodeAt(index + keyLength);
      if (!followingChar || followingChar == goog.uri.utils.CharCode_.EQUAL || followingChar == goog.uri.utils.CharCode_.AMPERSAND || followingChar == goog.uri.utils.CharCode_.HASH) {
        return index;
      }
    }
    index += keyLength + 1;
  }
  return -1;
};
goog.uri.utils.hashOrEndRe_ = /#|$/;
goog.uri.utils.hasParam = function(uri, keyEncoded) {
  return goog.uri.utils.findParam_(uri, 0, keyEncoded, uri.search(goog.uri.utils.hashOrEndRe_)) >= 0;
};
goog.uri.utils.getParamValue = function(uri, keyEncoded) {
  var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
  var foundIndex = goog.uri.utils.findParam_(uri, 0, keyEncoded, hashOrEndIndex);
  if (foundIndex < 0) {
    return null;
  } else {
    var endPosition = uri.indexOf("\x26", foundIndex);
    if (endPosition < 0 || endPosition > hashOrEndIndex) {
      endPosition = hashOrEndIndex;
    }
    foundIndex += keyEncoded.length + 1;
    return goog.string.urlDecode(uri.slice(foundIndex, endPosition !== -1 ? endPosition : 0));
  }
};
goog.uri.utils.getParamValues = function(uri, keyEncoded) {
  var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
  var position = 0;
  var foundIndex;
  var result = [];
  while ((foundIndex = goog.uri.utils.findParam_(uri, position, keyEncoded, hashOrEndIndex)) >= 0) {
    position = uri.indexOf("\x26", foundIndex);
    if (position < 0 || position > hashOrEndIndex) {
      position = hashOrEndIndex;
    }
    foundIndex += keyEncoded.length + 1;
    result.push(goog.string.urlDecode(uri.slice(foundIndex, Math.max(position, 0))));
  }
  return result;
};
goog.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
goog.uri.utils.removeParam = function(uri, keyEncoded) {
  var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
  var position = 0;
  var foundIndex;
  var buffer = [];
  while ((foundIndex = goog.uri.utils.findParam_(uri, position, keyEncoded, hashOrEndIndex)) >= 0) {
    buffer.push(uri.substring(position, foundIndex));
    position = Math.min(uri.indexOf("\x26", foundIndex) + 1 || hashOrEndIndex, hashOrEndIndex);
  }
  buffer.push(uri.slice(position));
  return buffer.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_, "$1");
};
goog.uri.utils.setParam = function(uri, keyEncoded, value) {
  return goog.uri.utils.appendParam(goog.uri.utils.removeParam(uri, keyEncoded), keyEncoded, value);
};
goog.uri.utils.setParamsFromMap = function(uri, params) {
  var parts = goog.uri.utils.splitQueryData_(uri);
  var queryData = parts[1];
  var buffer = [];
  if (queryData) {
    queryData.split("\x26").forEach(function(pair) {
      var indexOfEquals = pair.indexOf("\x3d");
      var name = indexOfEquals >= 0 ? pair.slice(0, indexOfEquals) : pair;
      if (!params.hasOwnProperty(name)) {
        buffer.push(pair);
      }
    });
  }
  parts[1] = goog.uri.utils.appendQueryData_(buffer.join("\x26"), goog.uri.utils.buildQueryDataFromMap(params));
  return goog.uri.utils.joinQueryData_(parts);
};
goog.uri.utils.appendPath = function(baseUri, path) {
  goog.uri.utils.assertNoFragmentsOrQueries_(baseUri);
  if (goog.string.endsWith(baseUri, "/")) {
    baseUri = baseUri.slice(0, -1);
  }
  if (goog.string.startsWith(path, "/")) {
    path = path.slice(1);
  }
  return "" + baseUri + "/" + path;
};
goog.uri.utils.setPath = function(uri, path) {
  if (!goog.string.startsWith(path, "/")) {
    path = "/" + path;
  }
  var parts = goog.uri.utils.split(uri);
  return goog.uri.utils.buildFromEncodedParts(parts[goog.uri.utils.ComponentIndex.SCHEME], parts[goog.uri.utils.ComponentIndex.USER_INFO], parts[goog.uri.utils.ComponentIndex.DOMAIN], parts[goog.uri.utils.ComponentIndex.PORT], path, parts[goog.uri.utils.ComponentIndex.QUERY_DATA], parts[goog.uri.utils.ComponentIndex.FRAGMENT]);
};
goog.uri.utils.StandardQueryParam = {RANDOM:"zx"};
goog.uri.utils.makeUnique = function(uri) {
  return goog.uri.utils.setParam(uri, goog.uri.utils.StandardQueryParam.RANDOM, goog.string.getRandomString());
};

$CLJS.SHADOW_ENV.setLoaded("goog.uri.utils.js");

goog.provide("goog.Uri");
goog.provide("goog.Uri.QueryData");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.collections.maps");
goog.require("goog.string");
goog.require("goog.structs");
goog.require("goog.uri.utils");
goog.require("goog.uri.utils.ComponentIndex");
goog.require("goog.uri.utils.StandardQueryParam");
goog.Uri = function(opt_uri, opt_ignoreCase) {
  this.scheme_ = "";
  this.userInfo_ = "";
  this.domain_ = "";
  this.port_ = null;
  this.path_ = "";
  this.fragment_ = "";
  this.isReadOnly_ = false;
  this.ignoreCase_ = false;
  this.queryData_;
  var m;
  if (opt_uri instanceof goog.Uri) {
    this.ignoreCase_ = opt_ignoreCase !== undefined ? opt_ignoreCase : opt_uri.getIgnoreCase();
    this.setScheme(opt_uri.getScheme());
    this.setUserInfo(opt_uri.getUserInfo());
    this.setDomain(opt_uri.getDomain());
    this.setPort(opt_uri.getPort());
    this.setPath(opt_uri.getPath());
    this.setQueryData(opt_uri.getQueryData().clone());
    this.setFragment(opt_uri.getFragment());
  } else if (opt_uri && (m = goog.uri.utils.split(String(opt_uri)))) {
    this.ignoreCase_ = !!opt_ignoreCase;
    this.setScheme(m[goog.uri.utils.ComponentIndex.SCHEME] || "", true);
    this.setUserInfo(m[goog.uri.utils.ComponentIndex.USER_INFO] || "", true);
    this.setDomain(m[goog.uri.utils.ComponentIndex.DOMAIN] || "", true);
    this.setPort(m[goog.uri.utils.ComponentIndex.PORT]);
    this.setPath(m[goog.uri.utils.ComponentIndex.PATH] || "", true);
    this.setQueryData(m[goog.uri.utils.ComponentIndex.QUERY_DATA] || "", true);
    this.setFragment(m[goog.uri.utils.ComponentIndex.FRAGMENT] || "", true);
  } else {
    this.ignoreCase_ = !!opt_ignoreCase;
    this.queryData_ = new goog.Uri.QueryData(null, this.ignoreCase_);
  }
};
goog.Uri.RANDOM_PARAM = goog.uri.utils.StandardQueryParam.RANDOM;
goog.Uri.prototype.toString = function() {
  var out = [];
  var scheme = this.getScheme();
  if (scheme) {
    out.push(goog.Uri.encodeSpecialChars_(scheme, goog.Uri.reDisallowedInSchemeOrUserInfo_, true), ":");
  }
  var domain = this.getDomain();
  if (domain || scheme == "file") {
    out.push("//");
    var userInfo = this.getUserInfo();
    if (userInfo) {
      out.push(goog.Uri.encodeSpecialChars_(userInfo, goog.Uri.reDisallowedInSchemeOrUserInfo_, true), "@");
    }
    out.push(goog.Uri.removeDoubleEncoding_(goog.string.urlEncode(domain)));
    var port = this.getPort();
    if (port != null) {
      out.push(":", String(port));
    }
  }
  var path = this.getPath();
  if (path) {
    if (this.hasDomain() && path.charAt(0) != "/") {
      out.push("/");
    }
    out.push(goog.Uri.encodeSpecialChars_(path, path.charAt(0) == "/" ? goog.Uri.reDisallowedInAbsolutePath_ : goog.Uri.reDisallowedInRelativePath_, true));
  }
  var query = this.getEncodedQuery();
  if (query) {
    out.push("?", query);
  }
  var fragment = this.getFragment();
  if (fragment) {
    out.push("#", goog.Uri.encodeSpecialChars_(fragment, goog.Uri.reDisallowedInFragment_));
  }
  return out.join("");
};
goog.Uri.prototype.resolve = function(relativeUri) {
  var absoluteUri = this.clone();
  var overridden = relativeUri.hasScheme();
  if (overridden) {
    absoluteUri.setScheme(relativeUri.getScheme());
  } else {
    overridden = relativeUri.hasUserInfo();
  }
  if (overridden) {
    absoluteUri.setUserInfo(relativeUri.getUserInfo());
  } else {
    overridden = relativeUri.hasDomain();
  }
  if (overridden) {
    absoluteUri.setDomain(relativeUri.getDomain());
  } else {
    overridden = relativeUri.hasPort();
  }
  var path = relativeUri.getPath();
  if (overridden) {
    absoluteUri.setPort(relativeUri.getPort());
  } else {
    overridden = relativeUri.hasPath();
    if (overridden) {
      if (path.charAt(0) != "/") {
        if (this.hasDomain() && !this.hasPath()) {
          path = "/" + path;
        } else {
          var lastSlashIndex = absoluteUri.getPath().lastIndexOf("/");
          if (lastSlashIndex != -1) {
            path = absoluteUri.getPath().slice(0, lastSlashIndex + 1) + path;
          }
        }
      }
      path = goog.Uri.removeDotSegments(path);
    }
  }
  if (overridden) {
    absoluteUri.setPath(path);
  } else {
    overridden = relativeUri.hasQuery();
  }
  if (overridden) {
    absoluteUri.setQueryData(relativeUri.getQueryData().clone());
  } else {
    overridden = relativeUri.hasFragment();
  }
  if (overridden) {
    absoluteUri.setFragment(relativeUri.getFragment());
  }
  return absoluteUri;
};
goog.Uri.prototype.clone = function() {
  return new goog.Uri(this);
};
goog.Uri.prototype.getScheme = function() {
  return this.scheme_;
};
goog.Uri.prototype.setScheme = function(newScheme, opt_decode) {
  this.enforceReadOnly();
  this.scheme_ = opt_decode ? goog.Uri.decodeOrEmpty_(newScheme, true) : newScheme;
  if (this.scheme_) {
    this.scheme_ = this.scheme_.replace(/:$/, "");
  }
  return this;
};
goog.Uri.prototype.hasScheme = function() {
  return !!this.scheme_;
};
goog.Uri.prototype.getUserInfo = function() {
  return this.userInfo_;
};
goog.Uri.prototype.setUserInfo = function(newUserInfo, opt_decode) {
  this.enforceReadOnly();
  this.userInfo_ = opt_decode ? goog.Uri.decodeOrEmpty_(newUserInfo) : newUserInfo;
  return this;
};
goog.Uri.prototype.hasUserInfo = function() {
  return !!this.userInfo_;
};
goog.Uri.prototype.getDomain = function() {
  return this.domain_;
};
goog.Uri.prototype.setDomain = function(newDomain, opt_decode) {
  this.enforceReadOnly();
  this.domain_ = opt_decode ? goog.Uri.decodeOrEmpty_(newDomain, true) : newDomain;
  return this;
};
goog.Uri.prototype.hasDomain = function() {
  return !!this.domain_;
};
goog.Uri.prototype.getPort = function() {
  return this.port_;
};
goog.Uri.prototype.setPort = function(newPort) {
  this.enforceReadOnly();
  if (newPort) {
    newPort = Number(newPort);
    if (isNaN(newPort) || newPort < 0) {
      throw new Error("Bad port number " + newPort);
    }
    this.port_ = newPort;
  } else {
    this.port_ = null;
  }
  return this;
};
goog.Uri.prototype.hasPort = function() {
  return this.port_ != null;
};
goog.Uri.prototype.getPath = function() {
  return this.path_;
};
goog.Uri.prototype.setPath = function(newPath, opt_decode) {
  this.enforceReadOnly();
  this.path_ = opt_decode ? goog.Uri.decodeOrEmpty_(newPath, true) : newPath;
  return this;
};
goog.Uri.prototype.hasPath = function() {
  return !!this.path_;
};
goog.Uri.prototype.hasQuery = function() {
  return this.queryData_.toString() !== "";
};
goog.Uri.prototype.setQueryData = function(queryData, opt_decode) {
  this.enforceReadOnly();
  if (queryData instanceof goog.Uri.QueryData) {
    this.queryData_ = queryData;
    this.queryData_.setIgnoreCase(this.ignoreCase_);
  } else {
    if (!opt_decode) {
      queryData = goog.Uri.encodeSpecialChars_(queryData, goog.Uri.reDisallowedInQuery_);
    }
    this.queryData_ = new goog.Uri.QueryData(queryData, this.ignoreCase_);
  }
  return this;
};
goog.Uri.prototype.setQuery = function(newQuery, opt_decode) {
  return this.setQueryData(newQuery, opt_decode);
};
goog.Uri.prototype.getEncodedQuery = function() {
  return this.queryData_.toString();
};
goog.Uri.prototype.getDecodedQuery = function() {
  return this.queryData_.toDecodedString();
};
goog.Uri.prototype.getQueryData = function() {
  return this.queryData_;
};
goog.Uri.prototype.getQuery = function() {
  return this.getEncodedQuery();
};
goog.Uri.prototype.setParameterValue = function(key, value) {
  this.enforceReadOnly();
  this.queryData_.set(key, value);
  return this;
};
goog.Uri.prototype.setParameterValues = function(key, values) {
  this.enforceReadOnly();
  if (!Array.isArray(values)) {
    values = [String(values)];
  }
  this.queryData_.setValues(key, values);
  return this;
};
goog.Uri.prototype.getParameterValues = function(name) {
  return this.queryData_.getValues(name);
};
goog.Uri.prototype.getParameterValue = function(paramName) {
  return this.queryData_.get(paramName);
};
goog.Uri.prototype.getFragment = function() {
  return this.fragment_;
};
goog.Uri.prototype.setFragment = function(newFragment, opt_decode) {
  this.enforceReadOnly();
  this.fragment_ = opt_decode ? goog.Uri.decodeOrEmpty_(newFragment) : newFragment;
  return this;
};
goog.Uri.prototype.hasFragment = function() {
  return !!this.fragment_;
};
goog.Uri.prototype.hasSameDomainAs = function(uri2) {
  return (!this.hasDomain() && !uri2.hasDomain() || this.getDomain() == uri2.getDomain()) && (!this.hasPort() && !uri2.hasPort() || this.getPort() == uri2.getPort());
};
goog.Uri.prototype.makeUnique = function() {
  this.enforceReadOnly();
  this.setParameterValue(goog.Uri.RANDOM_PARAM, goog.string.getRandomString());
  return this;
};
goog.Uri.prototype.removeParameter = function(key) {
  this.enforceReadOnly();
  this.queryData_.remove(key);
  return this;
};
goog.Uri.prototype.setReadOnly = function(isReadOnly) {
  this.isReadOnly_ = isReadOnly;
  return this;
};
goog.Uri.prototype.isReadOnly = function() {
  return this.isReadOnly_;
};
goog.Uri.prototype.enforceReadOnly = function() {
  if (this.isReadOnly_) {
    throw new Error("Tried to modify a read-only Uri");
  }
};
goog.Uri.prototype.setIgnoreCase = function(ignoreCase) {
  this.ignoreCase_ = ignoreCase;
  if (this.queryData_) {
    this.queryData_.setIgnoreCase(ignoreCase);
  }
  return this;
};
goog.Uri.prototype.getIgnoreCase = function() {
  return this.ignoreCase_;
};
goog.Uri.parse = function(uri, opt_ignoreCase) {
  return uri instanceof goog.Uri ? uri.clone() : new goog.Uri(uri, opt_ignoreCase);
};
goog.Uri.create = function(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_query, opt_fragment, opt_ignoreCase) {
  var uri = new goog.Uri(null, opt_ignoreCase);
  opt_scheme && uri.setScheme(opt_scheme);
  opt_userInfo && uri.setUserInfo(opt_userInfo);
  opt_domain && uri.setDomain(opt_domain);
  opt_port && uri.setPort(opt_port);
  opt_path && uri.setPath(opt_path);
  opt_query && uri.setQueryData(opt_query);
  opt_fragment && uri.setFragment(opt_fragment);
  return uri;
};
goog.Uri.resolve = function(base, rel) {
  if (!(base instanceof goog.Uri)) {
    base = goog.Uri.parse(base);
  }
  if (!(rel instanceof goog.Uri)) {
    rel = goog.Uri.parse(rel);
  }
  return base.resolve(rel);
};
goog.Uri.removeDotSegments = function(path) {
  if (path == ".." || path == ".") {
    return "";
  } else if (!goog.string.contains(path, "./") && !goog.string.contains(path, "/.")) {
    return path;
  } else {
    var leadingSlash = goog.string.startsWith(path, "/");
    var segments = path.split("/");
    var out = [];
    for (var pos = 0; pos < segments.length;) {
      var segment = segments[pos++];
      if (segment == ".") {
        if (leadingSlash && pos == segments.length) {
          out.push("");
        }
      } else if (segment == "..") {
        if (out.length > 1 || out.length == 1 && out[0] != "") {
          out.pop();
        }
        if (leadingSlash && pos == segments.length) {
          out.push("");
        }
      } else {
        out.push(segment);
        leadingSlash = true;
      }
    }
    return out.join("/");
  }
};
goog.Uri.decodeOrEmpty_ = function(val, opt_preserveReserved) {
  if (!val) {
    return "";
  }
  return opt_preserveReserved ? decodeURI(val.replace(/%25/g, "%2525")) : decodeURIComponent(val);
};
goog.Uri.encodeSpecialChars_ = function(unescapedPart, extra, opt_removeDoubleEncoding) {
  if (typeof unescapedPart === "string") {
    var encoded = encodeURI(unescapedPart).replace(extra, goog.Uri.encodeChar_);
    if (opt_removeDoubleEncoding) {
      encoded = goog.Uri.removeDoubleEncoding_(encoded);
    }
    return encoded;
  }
  return null;
};
goog.Uri.encodeChar_ = function(ch) {
  var n = ch.charCodeAt(0);
  return "%" + (n >> 4 & 15).toString(16) + (n & 15).toString(16);
};
goog.Uri.removeDoubleEncoding_ = function(doubleEncodedString) {
  return doubleEncodedString.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
};
goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
goog.Uri.reDisallowedInRelativePath_ = /[#\?:]/g;
goog.Uri.reDisallowedInAbsolutePath_ = /[#\?]/g;
goog.Uri.reDisallowedInQuery_ = /[#\?@]/g;
goog.Uri.reDisallowedInFragment_ = /#/g;
goog.Uri.haveSameDomain = function(uri1String, uri2String) {
  var pieces1 = goog.uri.utils.split(uri1String);
  var pieces2 = goog.uri.utils.split(uri2String);
  return pieces1[goog.uri.utils.ComponentIndex.DOMAIN] == pieces2[goog.uri.utils.ComponentIndex.DOMAIN] && pieces1[goog.uri.utils.ComponentIndex.PORT] == pieces2[goog.uri.utils.ComponentIndex.PORT];
};
goog.Uri.QueryData = function(opt_query, opt_ignoreCase) {
  this.keyMap_ = null;
  this.count_ = null;
  this.encodedQuery_ = opt_query || null;
  this.ignoreCase_ = !!opt_ignoreCase;
};
goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function() {
  if (!this.keyMap_) {
    this.keyMap_ = new Map();
    this.count_ = 0;
    if (this.encodedQuery_) {
      var self = this;
      goog.uri.utils.parseQueryData(this.encodedQuery_, function(name, value) {
        self.add(goog.string.urlDecode(name), value);
      });
    }
  }
};
goog.Uri.QueryData.createFromMap = function(map, opt_ignoreCase) {
  var keys = goog.structs.getKeys(map);
  if (typeof keys == "undefined") {
    throw new Error("Keys are undefined");
  }
  var queryData = new goog.Uri.QueryData(null, opt_ignoreCase);
  var values = goog.structs.getValues(map);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = values[i];
    if (!Array.isArray(value)) {
      queryData.add(key, value);
    } else {
      queryData.setValues(key, value);
    }
  }
  return queryData;
};
goog.Uri.QueryData.createFromKeysValues = function(keys, values, opt_ignoreCase) {
  if (keys.length != values.length) {
    throw new Error("Mismatched lengths for keys/values");
  }
  var queryData = new goog.Uri.QueryData(null, opt_ignoreCase);
  for (var i = 0; i < keys.length; i++) {
    queryData.add(keys[i], values[i]);
  }
  return queryData;
};
goog.Uri.QueryData.prototype.getCount = function() {
  this.ensureKeyMapInitialized_();
  return this.count_;
};
goog.Uri.QueryData.prototype.add = function(key, value) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  key = this.getKeyName_(key);
  var values = this.keyMap_.get(key);
  if (!values) {
    this.keyMap_.set(key, values = []);
  }
  values.push(value);
  this.count_ = goog.asserts.assertNumber(this.count_) + 1;
  return this;
};
goog.Uri.QueryData.prototype.remove = function(key) {
  this.ensureKeyMapInitialized_();
  key = this.getKeyName_(key);
  if (this.keyMap_.has(key)) {
    this.invalidateCache_();
    this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get(key).length;
    return this.keyMap_.delete(key);
  }
  return false;
};
goog.Uri.QueryData.prototype.clear = function() {
  this.invalidateCache_();
  this.keyMap_ = null;
  this.count_ = 0;
};
goog.Uri.QueryData.prototype.isEmpty = function() {
  this.ensureKeyMapInitialized_();
  return this.count_ == 0;
};
goog.Uri.QueryData.prototype.containsKey = function(key) {
  this.ensureKeyMapInitialized_();
  key = this.getKeyName_(key);
  return this.keyMap_.has(key);
};
goog.Uri.QueryData.prototype.containsValue = function(value) {
  var vals = this.getValues();
  return goog.array.contains(vals, value);
};
goog.Uri.QueryData.prototype.forEach = function(f, opt_scope) {
  this.ensureKeyMapInitialized_();
  this.keyMap_.forEach(function(values, key) {
    values.forEach(function(value) {
      f.call(opt_scope, value, key, this);
    }, this);
  }, this);
};
goog.Uri.QueryData.prototype.getKeys = function() {
  this.ensureKeyMapInitialized_();
  const vals = Array.from(this.keyMap_.values());
  const keys = Array.from(this.keyMap_.keys());
  const rv = [];
  for (let i = 0; i < keys.length; i++) {
    const val = vals[i];
    for (let j = 0; j < val.length; j++) {
      rv.push(keys[i]);
    }
  }
  return rv;
};
goog.Uri.QueryData.prototype.getValues = function(opt_key) {
  this.ensureKeyMapInitialized_();
  let rv = [];
  if (typeof opt_key === "string") {
    if (this.containsKey(opt_key)) {
      rv = rv.concat(this.keyMap_.get(this.getKeyName_(opt_key)));
    }
  } else {
    const values = Array.from(this.keyMap_.values());
    for (let i = 0; i < values.length; i++) {
      rv = rv.concat(values[i]);
    }
  }
  return rv;
};
goog.Uri.QueryData.prototype.set = function(key, value) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  key = this.getKeyName_(key);
  if (this.containsKey(key)) {
    this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get(key).length;
  }
  this.keyMap_.set(key, [value]);
  this.count_ = goog.asserts.assertNumber(this.count_) + 1;
  return this;
};
goog.Uri.QueryData.prototype.get = function(key, opt_default) {
  if (!key) {
    return opt_default;
  }
  var values = this.getValues(key);
  return values.length > 0 ? String(values[0]) : opt_default;
};
goog.Uri.QueryData.prototype.setValues = function(key, values) {
  this.remove(key);
  if (values.length > 0) {
    this.invalidateCache_();
    this.keyMap_.set(this.getKeyName_(key), goog.array.clone(values));
    this.count_ = goog.asserts.assertNumber(this.count_) + values.length;
  }
};
goog.Uri.QueryData.prototype.toString = function() {
  if (this.encodedQuery_) {
    return this.encodedQuery_;
  }
  if (!this.keyMap_) {
    return "";
  }
  const sb = [];
  const keys = Array.from(this.keyMap_.keys());
  for (var i = 0; i < keys.length; i++) {
    const key = keys[i];
    const encodedKey = goog.string.urlEncode(key);
    const val = this.getValues(key);
    for (var j = 0; j < val.length; j++) {
      var param = encodedKey;
      if (val[j] !== "") {
        param += "\x3d" + goog.string.urlEncode(val[j]);
      }
      sb.push(param);
    }
  }
  return this.encodedQuery_ = sb.join("\x26");
};
goog.Uri.QueryData.prototype.toDecodedString = function() {
  return goog.Uri.decodeOrEmpty_(this.toString());
};
goog.Uri.QueryData.prototype.invalidateCache_ = function() {
  this.encodedQuery_ = null;
};
goog.Uri.QueryData.prototype.filterKeys = function(keys) {
  this.ensureKeyMapInitialized_();
  this.keyMap_.forEach(function(value, key) {
    if (!goog.array.contains(keys, key)) {
      this.remove(key);
    }
  }, this);
  return this;
};
goog.Uri.QueryData.prototype.clone = function() {
  var rv = new goog.Uri.QueryData();
  rv.encodedQuery_ = this.encodedQuery_;
  if (this.keyMap_) {
    rv.keyMap_ = new Map(this.keyMap_);
    rv.count_ = this.count_;
  }
  return rv;
};
goog.Uri.QueryData.prototype.getKeyName_ = function(arg) {
  var keyName = String(arg);
  if (this.ignoreCase_) {
    keyName = keyName.toLowerCase();
  }
  return keyName;
};
goog.Uri.QueryData.prototype.setIgnoreCase = function(ignoreCase) {
  var resetKeys = ignoreCase && !this.ignoreCase_;
  if (resetKeys) {
    this.ensureKeyMapInitialized_();
    this.invalidateCache_();
    this.keyMap_.forEach(function(value, key) {
      var lowerCase = key.toLowerCase();
      if (key != lowerCase) {
        this.remove(key);
        this.setValues(lowerCase, value);
      }
    }, this);
  }
  this.ignoreCase_ = ignoreCase;
};
goog.Uri.QueryData.prototype.extend = function(var_args) {
  for (var i = 0; i < arguments.length; i++) {
    var data = arguments[i];
    goog.structs.forEach(data, function(value, key) {
      this.add(key, value);
    }, this);
  }
};

$CLJS.SHADOW_ENV.setLoaded("goog.uri.uri.js");

goog.provide("goog.string.StringBuffer");
goog.string.StringBuffer = function(opt_a1, var_args) {
  if (opt_a1 != null) {
    this.append.apply(this, arguments);
  }
};
goog.string.StringBuffer.prototype.buffer_ = "";
goog.string.StringBuffer.prototype.set = function(s) {
  this.buffer_ = "" + s;
};
goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
  this.buffer_ += String(a1);
  if (opt_a2 != null) {
    for (let i = 1; i < arguments.length; i++) {
      this.buffer_ += arguments[i];
    }
  }
  return this;
};
goog.string.StringBuffer.prototype.clear = function() {
  this.buffer_ = "";
};
goog.string.StringBuffer.prototype.getLength = function() {
  return this.buffer_.length;
};
goog.string.StringBuffer.prototype.toString = function() {
  return this.buffer_;
};

$CLJS.SHADOW_ENV.setLoaded("goog.string.stringbuffer.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.engine");
  goog.module.declareLegacyNamespace();
  const googArray = goog.require("goog.array");
  const googString = goog.require("goog.string.internal");
  const util = goog.require("goog.labs.userAgent.util");
  function isPresto() {
    return util.matchUserAgent("Presto");
  }
  function isTrident() {
    return util.matchUserAgent("Trident") || util.matchUserAgent("MSIE");
  }
  function isEdge() {
    return util.matchUserAgent("Edge");
  }
  function isWebKit() {
    return util.matchUserAgentIgnoreCase("WebKit") && !isEdge();
  }
  function isGecko() {
    return util.matchUserAgent("Gecko") && !isWebKit() && !isTrident() && !isEdge();
  }
  function getVersion() {
    const userAgentString = util.getUserAgent();
    if (userAgentString) {
      const tuples = util.extractVersionTuples(userAgentString);
      const engineTuple = getEngineTuple(tuples);
      if (engineTuple) {
        if (engineTuple[0] == "Gecko") {
          return getVersionForKey(tuples, "Firefox");
        }
        return engineTuple[1];
      }
      const browserTuple = tuples[0];
      let info;
      if (browserTuple && (info = browserTuple[2])) {
        const match = /Trident\/([^\s;]+)/.exec(info);
        if (match) {
          return match[1];
        }
      }
    }
    return "";
  }
  function getEngineTuple(tuples) {
    if (!isEdge()) {
      return tuples[1];
    }
    for (let i = 0; i < tuples.length; i++) {
      const tuple = tuples[i];
      if (tuple[0] == "Edge") {
        return tuple;
      }
    }
  }
  function isVersionOrHigher(version) {
    return googString.compareVersions(getVersion(), version) >= 0;
  }
  function getVersionForKey(tuples, key) {
    const pair = googArray.find(tuples, function(pair) {
      return key == pair[0];
    });
    return pair && pair[1] || "";
  }
  exports = {getVersion, isEdge, isGecko, isPresto, isTrident, isVersionOrHigher, isWebKit,};
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.labs.useragent.engine.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.platform");
  goog.module.declareLegacyNamespace();
  const googString = goog.require("goog.string.internal");
  const util = goog.require("goog.labs.userAgent.util");
  const {AsyncValue, Version} = goog.require("goog.labs.userAgent.highEntropy.highEntropyValue");
  const {platformVersion} = goog.require("goog.labs.userAgent.highEntropy.highEntropyData");
  const {useClientHints} = goog.require("goog.labs.userAgent");
  function useUserAgentDataPlatform(ignoreClientHintsFlag = false) {
    if (util.ASSUME_CLIENT_HINTS_SUPPORT) {
      return true;
    }
    if (!ignoreClientHintsFlag && !useClientHints()) {
      return false;
    }
    const userAgentData = util.getUserAgentData();
    return !!userAgentData && !!userAgentData.platform;
  }
  function isAndroid() {
    if (useUserAgentDataPlatform()) {
      return util.getUserAgentData().platform === "Android";
    }
    return util.matchUserAgent("Android");
  }
  function isIpod() {
    return util.matchUserAgent("iPod");
  }
  function isIphone() {
    return util.matchUserAgent("iPhone") && !util.matchUserAgent("iPod") && !util.matchUserAgent("iPad");
  }
  function isIpad() {
    return util.matchUserAgent("iPad");
  }
  function isIos() {
    return isIphone() || isIpad() || isIpod();
  }
  function isMacintosh() {
    if (useUserAgentDataPlatform()) {
      return util.getUserAgentData().platform === "macOS";
    }
    return util.matchUserAgent("Macintosh");
  }
  function isLinux() {
    if (useUserAgentDataPlatform()) {
      return util.getUserAgentData().platform === "Linux";
    }
    return util.matchUserAgent("Linux");
  }
  function isWindows() {
    if (useUserAgentDataPlatform()) {
      return util.getUserAgentData().platform === "Windows";
    }
    return util.matchUserAgent("Windows");
  }
  function isChromeOS() {
    if (useUserAgentDataPlatform()) {
      return util.getUserAgentData().platform === "Chrome OS";
    }
    return util.matchUserAgent("CrOS");
  }
  function isChromecast() {
    return util.matchUserAgent("CrKey");
  }
  function isKaiOS() {
    return util.matchUserAgentIgnoreCase("KaiOS");
  }
  function getVersion() {
    const userAgentString = util.getUserAgent();
    let version = "", re;
    if (isWindows()) {
      re = /Windows (?:NT|Phone) ([0-9.]+)/;
      const match = re.exec(userAgentString);
      if (match) {
        version = match[1];
      } else {
        version = "0.0";
      }
    } else if (isIos()) {
      re = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/;
      const match = re.exec(userAgentString);
      version = match && match[1].replace(/_/g, ".");
    } else if (isMacintosh()) {
      re = /Mac OS X ([0-9_.]+)/;
      const match = re.exec(userAgentString);
      version = match ? match[1].replace(/_/g, ".") : "10";
    } else if (isKaiOS()) {
      re = /(?:KaiOS)\/(\S+)/i;
      const match = re.exec(userAgentString);
      version = match && match[1];
    } else if (isAndroid()) {
      re = /Android\s+([^\);]+)(\)|;)/;
      const match = re.exec(userAgentString);
      version = match && match[1];
    } else if (isChromeOS()) {
      re = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/;
      const match = re.exec(userAgentString);
      version = match && match[1];
    }
    return version || "";
  }
  function isVersionOrHigher(version) {
    return googString.compareVersions(getVersion(), version) >= 0;
  }
  class PlatformVersion {
    constructor() {
      this.preUachHasLoaded_ = false;
    }
    getIfLoaded() {
      if (useUserAgentDataPlatform(true)) {
        const loadedPlatformVersion = platformVersion.getIfLoaded();
        if (loadedPlatformVersion === undefined) {
          return undefined;
        }
        return new Version(loadedPlatformVersion);
      } else if (!this.preUachHasLoaded_) {
        return undefined;
      } else {
        return new Version(getVersion());
      }
    }
    async load() {
      if (useUserAgentDataPlatform(true)) {
        return new Version(await platformVersion.load());
      } else {
        this.preUachHasLoaded_ = true;
        return new Version(getVersion());
      }
    }
    resetForTesting() {
      platformVersion.resetForTesting();
      this.preUachHasLoaded_ = false;
    }
  }
  const version = new PlatformVersion();
  exports = {getVersion, isAndroid, isChromeOS, isChromecast, isIos, isIpad, isIphone, isIpod, isKaiOS, isLinux, isMacintosh, isVersionOrHigher, isWindows, version,};
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.labs.useragent.platform.js");

goog.provide("goog.userAgent");
goog.require("goog.labs.userAgent.browser");
goog.require("goog.labs.userAgent.engine");
goog.require("goog.labs.userAgent.platform");
goog.require("goog.labs.userAgent.util");
goog.require("goog.reflect");
goog.require("goog.string.internal");
goog.userAgent.ASSUME_IE = goog.define("goog.userAgent.ASSUME_IE", false);
goog.userAgent.ASSUME_EDGE = goog.define("goog.userAgent.ASSUME_EDGE", false);
goog.userAgent.ASSUME_GECKO = goog.define("goog.userAgent.ASSUME_GECKO", false);
goog.userAgent.ASSUME_WEBKIT = goog.define("goog.userAgent.ASSUME_WEBKIT", false);
goog.userAgent.ASSUME_MOBILE_WEBKIT = goog.define("goog.userAgent.ASSUME_MOBILE_WEBKIT", false);
goog.userAgent.ASSUME_OPERA = goog.define("goog.userAgent.ASSUME_OPERA", false);
goog.userAgent.ASSUME_ANY_VERSION = goog.define("goog.userAgent.ASSUME_ANY_VERSION", false);
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
  return goog.labs.userAgent.util.getUserAgent();
};
goog.userAgent.getNavigatorTyped = function() {
  return goog.global["navigator"] || null;
};
goog.userAgent.getNavigator = function() {
  return goog.userAgent.getNavigatorTyped();
};
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
goog.userAgent.isMobile_ = function() {
  return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
};
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
  var navigator = goog.userAgent.getNavigatorTyped();
  return navigator && navigator.platform || "";
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = goog.define("goog.userAgent.ASSUME_MAC", false);
goog.userAgent.ASSUME_WINDOWS = goog.define("goog.userAgent.ASSUME_WINDOWS", false);
goog.userAgent.ASSUME_LINUX = goog.define("goog.userAgent.ASSUME_LINUX", false);
goog.userAgent.ASSUME_X11 = goog.define("goog.userAgent.ASSUME_X11", false);
goog.userAgent.ASSUME_ANDROID = goog.define("goog.userAgent.ASSUME_ANDROID", false);
goog.userAgent.ASSUME_IPHONE = goog.define("goog.userAgent.ASSUME_IPHONE", false);
goog.userAgent.ASSUME_IPAD = goog.define("goog.userAgent.ASSUME_IPAD", false);
goog.userAgent.ASSUME_IPOD = goog.define("goog.userAgent.ASSUME_IPOD", false);
goog.userAgent.ASSUME_KAIOS = goog.define("goog.userAgent.ASSUME_KAIOS", false);
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
goog.userAgent.isLegacyLinux_ = function() {
  return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
};
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
goog.userAgent.isX11_ = function() {
  var navigator = goog.userAgent.getNavigatorTyped();
  return !!navigator && goog.string.internal.contains(navigator["appVersion"] || "", "X11");
};
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
goog.userAgent.determineVersion_ = function() {
  var version = "";
  var arr = goog.userAgent.getVersionRegexResult_();
  if (arr) {
    version = arr ? arr[1] : "";
  }
  if (goog.userAgent.IE) {
    var docMode = goog.userAgent.getDocumentMode_();
    if (docMode != null && docMode > parseFloat(version)) {
      return String(docMode);
    }
  }
  return version;
};
goog.userAgent.getVersionRegexResult_ = function() {
  var userAgent = goog.userAgent.getUserAgentString();
  if (goog.userAgent.GECKO) {
    return /rv:([^\);]+)(\)|;)/.exec(userAgent);
  }
  if (goog.userAgent.EDGE) {
    return /Edge\/([\d\.]+)/.exec(userAgent);
  }
  if (goog.userAgent.IE) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(userAgent);
  }
  if (goog.userAgent.WEBKIT) {
    return /WebKit\/(\S+)/.exec(userAgent);
  }
  if (goog.userAgent.OPERA) {
    return /(?:Version)[ \/]?(\S+)/.exec(userAgent);
  }
  return undefined;
};
goog.userAgent.getDocumentMode_ = function() {
  var doc = goog.global["document"];
  return doc ? doc["documentMode"] : undefined;
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(v1, v2) {
  return goog.string.internal.compareVersions(v1, v2);
};
goog.userAgent.isVersionOrHigherCache_ = {};
goog.userAgent.isVersionOrHigher = function(version) {
  return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, version, function() {
    return goog.string.internal.compareVersions(goog.userAgent.VERSION, version) >= 0;
  });
};
goog.userAgent.isDocumentModeOrHigher = function(documentMode) {
  return Number(goog.userAgent.DOCUMENT_MODE) >= documentMode;
};
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
goog.userAgent.DOCUMENT_MODE = function() {
  var doc = goog.global["document"];
  if (!doc || !goog.userAgent.IE) {
    return undefined;
  }
  var documentMode = goog.userAgent.getDocumentMode_();
  if (documentMode) {
    return documentMode;
  }
  var ieVersion = parseInt(goog.userAgent.VERSION, 10);
  return ieVersion || undefined;
}();

$CLJS.SHADOW_ENV.setLoaded("goog.useragent.useragent.js");

goog.provide("goog.debug.EntryPointMonitor");
goog.provide("goog.debug.entryPointRegistry");
goog.require("goog.asserts");
goog.debug.entryPointRegistry.EntryPointMonitor = function() {
};
goog.debug.entryPointRegistry.EntryPointMonitor.prototype.wrap;
goog.debug.entryPointRegistry.EntryPointMonitor.prototype.unwrap;
goog.debug.EntryPointMonitor = goog.debug.entryPointRegistry.EntryPointMonitor;
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.monitors_ = [];
goog.debug.entryPointRegistry.monitorsMayExist_ = false;
goog.debug.entryPointRegistry.register = function(callback) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = callback;
  if (goog.debug.entryPointRegistry.monitorsMayExist_) {
    var monitors = goog.debug.entryPointRegistry.monitors_;
    for (var i = 0; i < monitors.length; i++) {
      callback(goog.bind(monitors[i].wrap, monitors[i]));
    }
  }
};
goog.debug.entryPointRegistry.monitorAll = function(monitor) {
  goog.debug.entryPointRegistry.monitorsMayExist_ = true;
  var transformer = goog.bind(monitor.wrap, monitor);
  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer);
  }
  goog.debug.entryPointRegistry.monitors_.push(monitor);
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(monitor) {
  var monitors = goog.debug.entryPointRegistry.monitors_;
  goog.asserts.assert(monitor == monitors[monitors.length - 1], "Only the most recent monitor can be unwrapped.");
  var transformer = goog.bind(monitor.unwrap, monitor);
  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer);
  }
  monitors.length--;
};

$CLJS.SHADOW_ENV.setLoaded("goog.debug.entrypointregistry.js");

goog.provide("goog.dom.BrowserFeature");
goog.require("goog.userAgent");
goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS = goog.define("goog.dom.ASSUME_NO_OFFSCREEN_CANVAS", false);
goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS = goog.define("goog.dom.ASSUME_OFFSCREEN_CANVAS", false);
goog.dom.BrowserFeature.detectOffscreenCanvas_ = function(contextName) {
  try {
    return Boolean((new self.OffscreenCanvas(0, 0)).getContext(contextName));
  } catch (ex) {
  }
  return false;
};
goog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D = !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS && (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS || goog.dom.BrowserFeature.detectOffscreenCanvas_("2d"));
goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES = true;
goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE = true;
goog.dom.BrowserFeature.CAN_USE_INNER_TEXT = false;
goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY = goog.userAgent.IE || goog.userAgent.WEBKIT;
goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;

$CLJS.SHADOW_ENV.setLoaded("goog.dom.browserfeature.js");

goog.provide("goog.math");
goog.require("goog.asserts");
goog.math.randomInt = function(a) {
  return Math.floor(Math.random() * a);
};
goog.math.uniformRandom = function(a, b) {
  return a + Math.random() * (b - a);
};
goog.math.clamp = function(value, min, max) {
  return Math.min(Math.max(value, min), max);
};
goog.math.modulo = function(a, b) {
  var r = a % b;
  return r * b < 0 ? r + b : r;
};
goog.math.lerp = function(a, b, x) {
  return a + x * (b - a);
};
goog.math.nearlyEquals = function(a, b, opt_tolerance) {
  return Math.abs(a - b) <= (opt_tolerance || 0.000001);
};
goog.math.standardAngle = function(angle) {
  return goog.math.modulo(angle, 360);
};
goog.math.standardAngleInRadians = function(angle) {
  return goog.math.modulo(angle, 2 * Math.PI);
};
goog.math.toRadians = function(angleDegrees) {
  return angleDegrees * Math.PI / 180;
};
goog.math.toDegrees = function(angleRadians) {
  return angleRadians * 180 / Math.PI;
};
goog.math.angleDx = function(degrees, radius) {
  return radius * Math.cos(goog.math.toRadians(degrees));
};
goog.math.angleDy = function(degrees, radius) {
  return radius * Math.sin(goog.math.toRadians(degrees));
};
goog.math.angle = function(x1, y1, x2, y2) {
  return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(y2 - y1, x2 - x1)));
};
goog.math.angleDifference = function(startAngle, endAngle) {
  var d = goog.math.standardAngle(endAngle) - goog.math.standardAngle(startAngle);
  if (d > 180) {
    d = d - 360;
  } else if (d <= -180) {
    d = 360 + d;
  }
  return d;
};
goog.math.sign = function(x) {
  if (x > 0) {
    return 1;
  }
  if (x < 0) {
    return -1;
  }
  return x;
};
goog.math.longestCommonSubsequence = function(array1, array2, opt_compareFn, opt_collectorFn) {
  var compare = opt_compareFn || function(a, b) {
    return a == b;
  };
  var collect = opt_collectorFn || function(i1, i2) {
    return array1[i1];
  };
  var length1 = array1.length;
  var length2 = array2.length;
  var arr = [];
  for (var i = 0; i < length1 + 1; i++) {
    arr[i] = [];
    arr[i][0] = 0;
  }
  for (var j = 0; j < length2 + 1; j++) {
    arr[0][j] = 0;
  }
  for (i = 1; i <= length1; i++) {
    for (j = 1; j <= length2; j++) {
      if (compare(array1[i - 1], array2[j - 1])) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
      }
    }
  }
  var result = [];
  var i = length1, j = length2;
  while (i > 0 && j > 0) {
    if (compare(array1[i - 1], array2[j - 1])) {
      result.unshift(collect(i - 1, j - 1));
      i--;
      j--;
    } else {
      if (arr[i - 1][j] > arr[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }
  return result;
};
goog.math.sum = function(var_args) {
  return Array.prototype.reduce.call(arguments, function(sum, value) {
    return sum + value;
  }, 0);
};
goog.math.average = function(var_args) {
  return goog.math.sum.apply(null, arguments) / arguments.length;
};
goog.math.sampleVariance = function(var_args) {
  var sampleSize = arguments.length;
  if (sampleSize < 2) {
    return 0;
  }
  var mean = goog.math.average.apply(null, arguments);
  var variance = goog.math.sum.apply(null, Array.prototype.map.call(arguments, function(val) {
    return Math.pow(val - mean, 2);
  })) / (sampleSize - 1);
  return variance;
};
goog.math.standardDeviation = function(var_args) {
  return Math.sqrt(goog.math.sampleVariance.apply(null, arguments));
};
goog.math.isInt = function(num) {
  return isFinite(num) && num % 1 == 0;
};
goog.math.isFiniteNumber = function(num) {
  return isFinite(num);
};
goog.math.isNegativeZero = function(num) {
  return num == 0 && 1 / num < 0;
};
goog.math.log10Floor = function(num) {
  if (num > 0) {
    var x = Math.round(Math.log(num) * Math.LOG10E);
    return x - (parseFloat("1e" + x) > num ? 1 : 0);
  }
  return num == 0 ? -Infinity : NaN;
};
goog.math.safeFloor = function(num, opt_epsilon) {
  goog.asserts.assert(opt_epsilon === undefined || opt_epsilon > 0);
  return Math.floor(num + (opt_epsilon || 2e-15));
};
goog.math.safeCeil = function(num, opt_epsilon) {
  goog.asserts.assert(opt_epsilon === undefined || opt_epsilon > 0);
  return Math.ceil(num - (opt_epsilon || 2e-15));
};

$CLJS.SHADOW_ENV.setLoaded("goog.math.math.js");

goog.provide("goog.math.Coordinate");
goog.require("goog.math");
goog.math.Coordinate = function(opt_x, opt_y) {
  this.x = opt_x !== undefined ? opt_x : 0;
  this.y = opt_y !== undefined ? opt_y : 0;
};
goog.math.Coordinate.prototype.clone = function() {
  return new goog.math.Coordinate(this.x, this.y);
};
if (goog.DEBUG) {
  goog.math.Coordinate.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")";
  };
}
goog.math.Coordinate.prototype.equals = function(other) {
  return other instanceof goog.math.Coordinate && goog.math.Coordinate.equals(this, other);
};
goog.math.Coordinate.equals = function(a, b) {
  if (a == b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.x == b.x && a.y == b.y;
};
goog.math.Coordinate.distance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
};
goog.math.Coordinate.magnitude = function(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
goog.math.Coordinate.azimuth = function(a) {
  return goog.math.angle(0, 0, a.x, a.y);
};
goog.math.Coordinate.squaredDistance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return dx * dx + dy * dy;
};
goog.math.Coordinate.difference = function(a, b) {
  return new goog.math.Coordinate(a.x - b.x, a.y - b.y);
};
goog.math.Coordinate.sum = function(a, b) {
  return new goog.math.Coordinate(a.x + b.x, a.y + b.y);
};
goog.math.Coordinate.prototype.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
goog.math.Coordinate.prototype.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
goog.math.Coordinate.prototype.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
goog.math.Coordinate.prototype.translate = function(tx, opt_ty) {
  if (tx instanceof goog.math.Coordinate) {
    this.x += tx.x;
    this.y += tx.y;
  } else {
    this.x += Number(tx);
    if (typeof opt_ty === "number") {
      this.y += opt_ty;
    }
  }
  return this;
};
goog.math.Coordinate.prototype.scale = function(sx, opt_sy) {
  var sy = typeof opt_sy === "number" ? opt_sy : sx;
  this.x *= sx;
  this.y *= sy;
  return this;
};
goog.math.Coordinate.prototype.rotateRadians = function(radians, opt_center) {
  var center = opt_center || new goog.math.Coordinate(0, 0);
  var x = this.x;
  var y = this.y;
  var cos = Math.cos(radians);
  var sin = Math.sin(radians);
  this.x = (x - center.x) * cos - (y - center.y) * sin + center.x;
  this.y = (x - center.x) * sin + (y - center.y) * cos + center.y;
};
goog.math.Coordinate.prototype.rotateDegrees = function(degrees, opt_center) {
  this.rotateRadians(goog.math.toRadians(degrees), opt_center);
};

$CLJS.SHADOW_ENV.setLoaded("goog.math.coordinate.js");

goog.provide("goog.math.Size");
goog.math.Size = function(width, height) {
  this.width = width;
  this.height = height;
};
goog.math.Size.equals = function(a, b) {
  if (a == b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.width == b.width && a.height == b.height;
};
goog.math.Size.prototype.clone = function() {
  return new goog.math.Size(this.width, this.height);
};
if (goog.DEBUG) {
  goog.math.Size.prototype.toString = function() {
    return "(" + this.width + " x " + this.height + ")";
  };
}
goog.math.Size.prototype.getLongest = function() {
  return Math.max(this.width, this.height);
};
goog.math.Size.prototype.getShortest = function() {
  return Math.min(this.width, this.height);
};
goog.math.Size.prototype.area = function() {
  return this.width * this.height;
};
goog.math.Size.prototype.perimeter = function() {
  return (this.width + this.height) * 2;
};
goog.math.Size.prototype.aspectRatio = function() {
  return this.width / this.height;
};
goog.math.Size.prototype.isEmpty = function() {
  return !this.area();
};
goog.math.Size.prototype.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
goog.math.Size.prototype.fitsInside = function(target) {
  return this.width <= target.width && this.height <= target.height;
};
goog.math.Size.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
goog.math.Size.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
goog.math.Size.prototype.scale = function(sx, opt_sy) {
  const sy = typeof opt_sy === "number" ? opt_sy : sx;
  this.width *= sx;
  this.height *= sy;
  return this;
};
goog.math.Size.prototype.scaleToCover = function(target) {
  const s = this.aspectRatio() <= target.aspectRatio() ? target.width / this.width : target.height / this.height;
  return this.scale(s);
};
goog.math.Size.prototype.scaleToFit = function(target) {
  const s = this.aspectRatio() > target.aspectRatio() ? target.width / this.width : target.height / this.height;
  return this.scale(s);
};

$CLJS.SHADOW_ENV.setLoaded("goog.math.size.js");

goog.provide("goog.dom");
goog.provide("goog.dom.Appendable");
goog.provide("goog.dom.DomHelper");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.asserts.dom");
goog.require("goog.dom.BrowserFeature");
goog.require("goog.dom.NodeType");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Size");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.string.Const");
goog.require("goog.string.Unicode");
goog.require("goog.userAgent");
goog.dom.ASSUME_QUIRKS_MODE = goog.define("goog.dom.ASSUME_QUIRKS_MODE", false);
goog.dom.ASSUME_STANDARDS_MODE = goog.define("goog.dom.ASSUME_STANDARDS_MODE", false);
goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
goog.dom.getDomHelper = function(opt_element) {
  return opt_element ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(opt_element)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper());
};
goog.dom.defaultDomHelper_;
goog.dom.getDocument = function() {
  return document;
};
goog.dom.getElement = function(element) {
  return goog.dom.getElementHelper_(document, element);
};
goog.dom.getHTMLElement = function(id) {
  const element = goog.dom.getElement(id);
  if (!element) {
    return null;
  }
  return goog.asserts.dom.assertIsHtmlElement(element);
};
goog.dom.getElementHelper_ = function(doc, element) {
  return typeof element === "string" ? doc.getElementById(element) : element;
};
goog.dom.getRequiredElement = function(id) {
  return goog.dom.getRequiredElementHelper_(document, id);
};
goog.dom.getRequiredHTMLElement = function(id) {
  return goog.asserts.dom.assertIsHtmlElement(goog.dom.getRequiredElementHelper_(document, id));
};
goog.dom.getRequiredElementHelper_ = function(doc, id) {
  goog.asserts.assertString(id);
  var element = goog.dom.getElementHelper_(doc, id);
  return goog.asserts.assert(element, "No element found with id: " + id);
};
goog.dom.$ = goog.dom.getElement;
goog.dom.getElementsByTagName = function(tagName, opt_parent) {
  var parent = opt_parent || document;
  return parent.getElementsByTagName(String(tagName));
};
goog.dom.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(document, opt_tag, opt_class, opt_el);
};
goog.dom.getElementByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementByTagNameAndClass_(document, opt_tag, opt_class, opt_el);
};
goog.dom.getElementsByClass = function(className, opt_el) {
  var parent = opt_el || document;
  if (goog.dom.canUseQuerySelector_(parent)) {
    return parent.querySelectorAll("." + className);
  }
  return goog.dom.getElementsByTagNameAndClass_(document, "*", className, opt_el);
};
goog.dom.getElementByClass = function(className, opt_el) {
  var parent = opt_el || document;
  var retVal = null;
  if (parent.getElementsByClassName) {
    retVal = parent.getElementsByClassName(className)[0];
  } else {
    retVal = goog.dom.getElementByTagNameAndClass_(document, "*", className, opt_el);
  }
  return retVal || null;
};
goog.dom.getHTMLElementByClass = function(className, opt_parent) {
  const element = goog.dom.getElementByClass(className, opt_parent);
  if (!element) {
    return null;
  }
  return goog.asserts.dom.assertIsHtmlElement(element);
};
goog.dom.getRequiredElementByClass = function(className, opt_root) {
  var retValue = goog.dom.getElementByClass(className, opt_root);
  return goog.asserts.assert(retValue, "No element found with className: " + className);
};
goog.dom.getRequiredHTMLElementByClass = function(className, opt_parent) {
  const retValue = goog.dom.getElementByClass(className, opt_parent);
  goog.asserts.assert(retValue, "No HTMLElement found with className: " + className);
  return goog.asserts.dom.assertIsHtmlElement(retValue);
};
goog.dom.canUseQuerySelector_ = function(parent) {
  return !!(parent.querySelectorAll && parent.querySelector);
};
goog.dom.getElementsByTagNameAndClass_ = function(doc, opt_tag, opt_class, opt_el) {
  var parent = opt_el || doc;
  var tagName = opt_tag && opt_tag != "*" ? String(opt_tag).toUpperCase() : "";
  if (goog.dom.canUseQuerySelector_(parent) && (tagName || opt_class)) {
    var query = tagName + (opt_class ? "." + opt_class : "");
    return parent.querySelectorAll(query);
  }
  if (opt_class && parent.getElementsByClassName) {
    var els = parent.getElementsByClassName(opt_class);
    if (tagName) {
      var arrayLike = {};
      var len = 0;
      for (var i = 0, el; el = els[i]; i++) {
        if (tagName == el.nodeName) {
          arrayLike[len++] = el;
        }
      }
      arrayLike.length = len;
      return arrayLike;
    } else {
      return els;
    }
  }
  var els = parent.getElementsByTagName(tagName || "*");
  if (opt_class) {
    var arrayLike = {};
    var len = 0;
    for (var i = 0, el; el = els[i]; i++) {
      var className = el.className;
      if (typeof className.split == "function" && goog.array.contains(className.split(/\s+/), opt_class)) {
        arrayLike[len++] = el;
      }
    }
    arrayLike.length = len;
    return arrayLike;
  } else {
    return els;
  }
};
goog.dom.getElementByTagNameAndClass_ = function(doc, opt_tag, opt_class, opt_el) {
  var parent = opt_el || doc;
  var tag = opt_tag && opt_tag != "*" ? String(opt_tag).toUpperCase() : "";
  if (goog.dom.canUseQuerySelector_(parent) && (tag || opt_class)) {
    return parent.querySelector(tag + (opt_class ? "." + opt_class : ""));
  }
  var elements = goog.dom.getElementsByTagNameAndClass_(doc, opt_tag, opt_class, opt_el);
  return elements[0] || null;
};
goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
goog.dom.setProperties = function(element, properties) {
  goog.object.forEach(properties, function(val, key) {
    if (val && typeof val == "object" && val.implementsGoogStringTypedString) {
      val = val.getTypedStringValue();
    }
    if (key == "style") {
      element.style.cssText = val;
    } else if (key == "class") {
      element.className = val;
    } else if (key == "for") {
      element.htmlFor = val;
    } else if (goog.dom.DIRECT_ATTRIBUTE_MAP_.hasOwnProperty(key)) {
      element.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[key], val);
    } else if (goog.string.startsWith(key, "aria-") || goog.string.startsWith(key, "data-")) {
      element.setAttribute(key, val);
    } else {
      element[key] = val;
    }
  });
};
goog.dom.DIRECT_ATTRIBUTE_MAP_ = {"cellpadding":"cellPadding", "cellspacing":"cellSpacing", "colspan":"colSpan", "frameborder":"frameBorder", "height":"height", "maxlength":"maxLength", "nonce":"nonce", "role":"role", "rowspan":"rowSpan", "type":"type", "usemap":"useMap", "valign":"vAlign", "width":"width"};
goog.dom.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize_(opt_window || window);
};
goog.dom.getViewportSize_ = function(win) {
  var doc = win.document;
  var el = goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body;
  return new goog.math.Size(el.clientWidth, el.clientHeight);
};
goog.dom.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(window);
};
goog.dom.getDocumentHeightForWindow = function(win) {
  return goog.dom.getDocumentHeight_(win);
};
goog.dom.getDocumentHeight_ = function(win) {
  var doc = win.document;
  var height = 0;
  if (doc) {
    var body = doc.body;
    var docEl = doc.documentElement;
    if (!(docEl && body)) {
      return 0;
    }
    var vh = goog.dom.getViewportSize_(win).height;
    if (goog.dom.isCss1CompatMode_(doc) && docEl.scrollHeight) {
      height = docEl.scrollHeight != vh ? docEl.scrollHeight : docEl.offsetHeight;
    } else {
      var sh = docEl.scrollHeight;
      var oh = docEl.offsetHeight;
      if (docEl.clientHeight != oh) {
        sh = body.scrollHeight;
        oh = body.offsetHeight;
      }
      if (sh > vh) {
        height = sh > oh ? sh : oh;
      } else {
        height = sh < oh ? sh : oh;
      }
    }
  }
  return height;
};
goog.dom.getPageScroll = function(opt_window) {
  var win = opt_window || goog.global || window;
  return goog.dom.getDomHelper(win.document).getDocumentScroll();
};
goog.dom.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(document);
};
goog.dom.getDocumentScroll_ = function(doc) {
  var el = goog.dom.getDocumentScrollElement_(doc);
  var win = goog.dom.getWindow_(doc);
  if (goog.userAgent.IE && win.pageYOffset != el.scrollTop) {
    return new goog.math.Coordinate(el.scrollLeft, el.scrollTop);
  }
  return new goog.math.Coordinate(win.pageXOffset || el.scrollLeft, win.pageYOffset || el.scrollTop);
};
goog.dom.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(document);
};
goog.dom.getDocumentScrollElement_ = function(doc) {
  if (doc.scrollingElement) {
    return doc.scrollingElement;
  }
  if (!goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(doc)) {
    return doc.documentElement;
  }
  return doc.body || doc.documentElement;
};
goog.dom.getWindow = function(opt_doc) {
  return opt_doc ? goog.dom.getWindow_(opt_doc) : window;
};
goog.dom.getWindow_ = function(doc) {
  return doc.parentWindow || doc.defaultView;
};
goog.dom.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(document, arguments);
};
goog.dom.createDom_ = function(doc, args) {
  var tagName = String(args[0]);
  var attributes = args[1];
  var element = goog.dom.createElement_(doc, tagName);
  if (attributes) {
    if (typeof attributes === "string") {
      element.className = attributes;
    } else if (Array.isArray(attributes)) {
      element.className = attributes.join(" ");
    } else {
      goog.dom.setProperties(element, attributes);
    }
  }
  if (args.length > 2) {
    goog.dom.append_(doc, element, args, 2);
  }
  return element;
};
goog.dom.append_ = function(doc, parent, args, startIndex) {
  function childHandler(child) {
    if (child) {
      parent.appendChild(typeof child === "string" ? doc.createTextNode(child) : child);
    }
  }
  for (var i = startIndex; i < args.length; i++) {
    var arg = args[i];
    if (goog.isArrayLike(arg) && !goog.dom.isNodeLike(arg)) {
      goog.array.forEach(goog.dom.isNodeList(arg) ? goog.array.toArray(arg) : arg, childHandler);
    } else {
      childHandler(arg);
    }
  }
};
goog.dom.$dom = goog.dom.createDom;
goog.dom.createElement = function(name) {
  return goog.dom.createElement_(document, name);
};
goog.dom.createElement_ = function(doc, name) {
  name = String(name);
  if (doc.contentType === "application/xhtml+xml") {
    name = name.toLowerCase();
  }
  return doc.createElement(name);
};
goog.dom.createTextNode = function(content) {
  return document.createTextNode(String(content));
};
goog.dom.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(document, rows, columns, !!opt_fillWithNbsp);
};
goog.dom.createTable_ = function(doc, rows, columns, fillWithNbsp) {
  var table = goog.dom.createElement_(doc, goog.dom.TagName.TABLE);
  var tbody = table.appendChild(goog.dom.createElement_(doc, goog.dom.TagName.TBODY));
  for (var i = 0; i < rows; i++) {
    var tr = goog.dom.createElement_(doc, goog.dom.TagName.TR);
    for (var j = 0; j < columns; j++) {
      var td = goog.dom.createElement_(doc, goog.dom.TagName.TD);
      if (fillWithNbsp) {
        goog.dom.setTextContent(td, goog.string.Unicode.NBSP);
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  return table;
};
goog.dom.constHtmlToNode = function(var_args) {
  var stringArray = Array.prototype.map.call(arguments, goog.string.Const.unwrap);
  var safeHtml = goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Constant HTML string, that gets turned into a " + "Node later, so it will be automatically balanced."), stringArray.join(""));
  return goog.dom.safeHtmlToNode(safeHtml);
};
goog.dom.safeHtmlToNode = function(html) {
  return goog.dom.safeHtmlToNode_(document, html);
};
goog.dom.safeHtmlToNode_ = function(doc, html) {
  var tempDiv = goog.dom.createElement_(doc, goog.dom.TagName.DIV);
  if (goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT) {
    goog.dom.safe.setInnerHtml(tempDiv, goog.html.SafeHtml.concat(goog.html.SafeHtml.BR, html));
    tempDiv.removeChild(goog.asserts.assert(tempDiv.firstChild));
  } else {
    goog.dom.safe.setInnerHtml(tempDiv, html);
  }
  return goog.dom.childrenToNode_(doc, tempDiv);
};
goog.dom.childrenToNode_ = function(doc, tempDiv) {
  if (tempDiv.childNodes.length == 1) {
    return tempDiv.removeChild(goog.asserts.assert(tempDiv.firstChild));
  } else {
    var fragment = doc.createDocumentFragment();
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }
    return fragment;
  }
};
goog.dom.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(document);
};
goog.dom.isCss1CompatMode_ = function(doc) {
  if (goog.dom.COMPAT_MODE_KNOWN_) {
    return goog.dom.ASSUME_STANDARDS_MODE;
  }
  return doc.compatMode == "CSS1Compat";
};
goog.dom.canHaveChildren = function(node) {
  if (node.nodeType != goog.dom.NodeType.ELEMENT) {
    return false;
  }
  switch(node.tagName) {
    case String(goog.dom.TagName.APPLET):
    case String(goog.dom.TagName.AREA):
    case String(goog.dom.TagName.BASE):
    case String(goog.dom.TagName.BR):
    case String(goog.dom.TagName.COL):
    case String(goog.dom.TagName.COMMAND):
    case String(goog.dom.TagName.EMBED):
    case String(goog.dom.TagName.FRAME):
    case String(goog.dom.TagName.HR):
    case String(goog.dom.TagName.IMG):
    case String(goog.dom.TagName.INPUT):
    case String(goog.dom.TagName.IFRAME):
    case String(goog.dom.TagName.ISINDEX):
    case String(goog.dom.TagName.KEYGEN):
    case String(goog.dom.TagName.LINK):
    case String(goog.dom.TagName.NOFRAMES):
    case String(goog.dom.TagName.NOSCRIPT):
    case String(goog.dom.TagName.META):
    case String(goog.dom.TagName.OBJECT):
    case String(goog.dom.TagName.PARAM):
    case String(goog.dom.TagName.SCRIPT):
    case String(goog.dom.TagName.SOURCE):
    case String(goog.dom.TagName.STYLE):
    case String(goog.dom.TagName.TRACK):
    case String(goog.dom.TagName.WBR):
      return false;
  }
  return true;
};
goog.dom.appendChild = function(parent, child) {
  goog.asserts.assert(parent != null && child != null, "goog.dom.appendChild expects non-null arguments");
  parent.appendChild(child);
};
goog.dom.append = function(parent, var_args) {
  goog.dom.append_(goog.dom.getOwnerDocument(parent), parent, arguments, 1);
};
goog.dom.removeChildren = function(node) {
  var child;
  while (child = node.firstChild) {
    node.removeChild(child);
  }
};
goog.dom.insertSiblingBefore = function(newNode, refNode) {
  goog.asserts.assert(newNode != null && refNode != null, "goog.dom.insertSiblingBefore expects non-null arguments");
  if (refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode);
  }
};
goog.dom.insertSiblingAfter = function(newNode, refNode) {
  goog.asserts.assert(newNode != null && refNode != null, "goog.dom.insertSiblingAfter expects non-null arguments");
  if (refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
  }
};
goog.dom.insertChildAt = function(parent, child, index) {
  goog.asserts.assert(parent != null, "goog.dom.insertChildAt expects a non-null parent");
  parent.insertBefore(child, parent.childNodes[index] || null);
};
goog.dom.removeNode = function(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null;
};
goog.dom.replaceNode = function(newNode, oldNode) {
  goog.asserts.assert(newNode != null && oldNode != null, "goog.dom.replaceNode expects non-null arguments");
  var parent = oldNode.parentNode;
  if (parent) {
    parent.replaceChild(newNode, oldNode);
  }
};
goog.dom.copyContents = function(target, source) {
  goog.asserts.assert(target != null && source != null, "goog.dom.copyContents expects non-null arguments");
  var childNodes = source.cloneNode(true).childNodes;
  goog.dom.removeChildren(target);
  while (childNodes.length) {
    target.appendChild(childNodes[0]);
  }
};
goog.dom.flattenElement = function(element) {
  var child, parent = element.parentNode;
  if (parent && parent.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
    if (element.removeNode) {
      return element.removeNode(false);
    } else {
      while (child = element.firstChild) {
        parent.insertBefore(child, element);
      }
      return goog.dom.removeNode(element);
    }
  }
};
goog.dom.getChildren = function(element) {
  if (element.children != undefined) {
    return element.children;
  }
  return Array.prototype.filter.call(element.childNodes, function(node) {
    return node.nodeType == goog.dom.NodeType.ELEMENT;
  });
};
goog.dom.getFirstElementChild = function(node) {
  if (node.firstElementChild !== undefined) {
    return node.firstElementChild;
  }
  return goog.dom.getNextElementNode_(node.firstChild, true);
};
goog.dom.getLastElementChild = function(node) {
  if (node.lastElementChild !== undefined) {
    return node.lastElementChild;
  }
  return goog.dom.getNextElementNode_(node.lastChild, false);
};
goog.dom.getNextElementSibling = function(node) {
  if (node.nextElementSibling !== undefined) {
    return node.nextElementSibling;
  }
  return goog.dom.getNextElementNode_(node.nextSibling, true);
};
goog.dom.getPreviousElementSibling = function(node) {
  if (node.previousElementSibling !== undefined) {
    return node.previousElementSibling;
  }
  return goog.dom.getNextElementNode_(node.previousSibling, false);
};
goog.dom.getNextElementNode_ = function(node, forward) {
  while (node && node.nodeType != goog.dom.NodeType.ELEMENT) {
    node = forward ? node.nextSibling : node.previousSibling;
  }
  return node;
};
goog.dom.getNextNode = function(node) {
  if (!node) {
    return null;
  }
  if (node.firstChild) {
    return node.firstChild;
  }
  while (node && !node.nextSibling) {
    node = node.parentNode;
  }
  return node ? node.nextSibling : null;
};
goog.dom.getPreviousNode = function(node) {
  if (!node) {
    return null;
  }
  if (!node.previousSibling) {
    return node.parentNode;
  }
  node = node.previousSibling;
  while (node && node.lastChild) {
    node = node.lastChild;
  }
  return node;
};
goog.dom.isNodeLike = function(obj) {
  return goog.isObject(obj) && obj.nodeType > 0;
};
goog.dom.isElement = function(obj) {
  return goog.isObject(obj) && obj.nodeType == goog.dom.NodeType.ELEMENT;
};
goog.dom.isWindow = function(obj) {
  return goog.isObject(obj) && obj["window"] == obj;
};
goog.dom.getParentElement = function(element) {
  var parent;
  if (goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY) {
    parent = element.parentElement;
    if (parent) {
      return parent;
    }
  }
  parent = element.parentNode;
  return goog.dom.isElement(parent) ? parent : null;
};
goog.dom.contains = function(parent, descendant) {
  if (!parent || !descendant) {
    return false;
  }
  if (parent.contains && descendant.nodeType == goog.dom.NodeType.ELEMENT) {
    return parent == descendant || parent.contains(descendant);
  }
  if (typeof parent.compareDocumentPosition != "undefined") {
    return parent == descendant || Boolean(parent.compareDocumentPosition(descendant) & 16);
  }
  while (descendant && parent != descendant) {
    descendant = descendant.parentNode;
  }
  return descendant == parent;
};
goog.dom.compareNodeOrder = function(node1, node2) {
  if (node1 == node2) {
    return 0;
  }
  if (node1.compareDocumentPosition) {
    return node1.compareDocumentPosition(node2) & 2 ? 1 : -1;
  }
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
    if (node1.nodeType == goog.dom.NodeType.DOCUMENT) {
      return -1;
    }
    if (node2.nodeType == goog.dom.NodeType.DOCUMENT) {
      return 1;
    }
  }
  if ("sourceIndex" in node1 || node1.parentNode && "sourceIndex" in node1.parentNode) {
    var isElement1 = node1.nodeType == goog.dom.NodeType.ELEMENT;
    var isElement2 = node2.nodeType == goog.dom.NodeType.ELEMENT;
    if (isElement1 && isElement2) {
      return node1.sourceIndex - node2.sourceIndex;
    } else {
      var parent1 = node1.parentNode;
      var parent2 = node2.parentNode;
      if (parent1 == parent2) {
        return goog.dom.compareSiblingOrder_(node1, node2);
      }
      if (!isElement1 && goog.dom.contains(parent1, node2)) {
        return -1 * goog.dom.compareParentsDescendantNodeIe_(node1, node2);
      }
      if (!isElement2 && goog.dom.contains(parent2, node1)) {
        return goog.dom.compareParentsDescendantNodeIe_(node2, node1);
      }
      return (isElement1 ? node1.sourceIndex : parent1.sourceIndex) - (isElement2 ? node2.sourceIndex : parent2.sourceIndex);
    }
  }
  var doc = goog.dom.getOwnerDocument(node1);
  var range1, range2;
  range1 = doc.createRange();
  range1.selectNode(node1);
  range1.collapse(true);
  range2 = doc.createRange();
  range2.selectNode(node2);
  range2.collapse(true);
  return range1.compareBoundaryPoints(goog.global["Range"].START_TO_END, range2);
};
goog.dom.compareParentsDescendantNodeIe_ = function(textNode, node) {
  var parent = textNode.parentNode;
  if (parent == node) {
    return -1;
  }
  var sibling = node;
  while (sibling.parentNode != parent) {
    sibling = sibling.parentNode;
  }
  return goog.dom.compareSiblingOrder_(sibling, textNode);
};
goog.dom.compareSiblingOrder_ = function(node1, node2) {
  var s = node2;
  while (s = s.previousSibling) {
    if (s == node1) {
      return -1;
    }
  }
  return 1;
};
goog.dom.findCommonAncestor = function(var_args) {
  var i, count = arguments.length;
  if (!count) {
    return null;
  } else if (count == 1) {
    return arguments[0];
  }
  var paths = [];
  var minLength = Infinity;
  for (i = 0; i < count; i++) {
    var ancestors = [];
    var node = arguments[i];
    while (node) {
      ancestors.unshift(node);
      node = node.parentNode;
    }
    paths.push(ancestors);
    minLength = Math.min(minLength, ancestors.length);
  }
  var output = null;
  for (i = 0; i < minLength; i++) {
    var first = paths[0][i];
    for (var j = 1; j < count; j++) {
      if (first != paths[j][i]) {
        return output;
      }
    }
    output = first;
  }
  return output;
};
goog.dom.isInDocument = function(node) {
  return (node.ownerDocument.compareDocumentPosition(node) & 16) == 16;
};
goog.dom.getOwnerDocument = function(node) {
  goog.asserts.assert(node, "Node cannot be null or undefined.");
  return node.nodeType == goog.dom.NodeType.DOCUMENT ? node : node.ownerDocument || node.document;
};
goog.dom.getFrameContentDocument = function(frame) {
  return frame.contentDocument || frame.contentWindow.document;
};
goog.dom.getFrameContentWindow = function(frame) {
  try {
    return frame.contentWindow || (frame.contentDocument ? goog.dom.getWindow(frame.contentDocument) : null);
  } catch (e) {
  }
  return null;
};
goog.dom.setTextContent = function(node, text) {
  goog.asserts.assert(node != null, "goog.dom.setTextContent expects a non-null value for node");
  if ("textContent" in node) {
    node.textContent = text;
  } else if (node.nodeType == goog.dom.NodeType.TEXT) {
    node.data = String(text);
  } else if (node.firstChild && node.firstChild.nodeType == goog.dom.NodeType.TEXT) {
    while (node.lastChild != node.firstChild) {
      node.removeChild(goog.asserts.assert(node.lastChild));
    }
    node.firstChild.data = String(text);
  } else {
    goog.dom.removeChildren(node);
    var doc = goog.dom.getOwnerDocument(node);
    node.appendChild(doc.createTextNode(String(text)));
  }
};
goog.dom.getOuterHtml = function(element) {
  goog.asserts.assert(element !== null, "goog.dom.getOuterHtml expects a non-null value for element");
  if ("outerHTML" in element) {
    return element.outerHTML;
  } else {
    var doc = goog.dom.getOwnerDocument(element);
    var div = goog.dom.createElement_(doc, goog.dom.TagName.DIV);
    div.appendChild(element.cloneNode(true));
    return div.innerHTML;
  }
};
goog.dom.findNode = function(root, p) {
  var rv = [];
  var found = goog.dom.findNodes_(root, p, rv, true);
  return found ? rv[0] : undefined;
};
goog.dom.findNodes = function(root, p) {
  var rv = [];
  goog.dom.findNodes_(root, p, rv, false);
  return rv;
};
goog.dom.findNodes_ = function(root, p, rv, findOne) {
  if (root != null) {
    var child = root.firstChild;
    while (child) {
      if (p(child)) {
        rv.push(child);
        if (findOne) {
          return true;
        }
      }
      if (goog.dom.findNodes_(child, p, rv, findOne)) {
        return true;
      }
      child = child.nextSibling;
    }
  }
  return false;
};
goog.dom.findElement = function(root, pred) {
  var stack = goog.dom.getChildrenReverse_(root);
  while (stack.length > 0) {
    var next = stack.pop();
    if (pred(next)) {
      return next;
    }
    for (var c = next.lastElementChild; c; c = c.previousElementSibling) {
      stack.push(c);
    }
  }
  return null;
};
goog.dom.findElements = function(root, pred) {
  var result = [], stack = goog.dom.getChildrenReverse_(root);
  while (stack.length > 0) {
    var next = stack.pop();
    if (pred(next)) {
      result.push(next);
    }
    for (var c = next.lastElementChild; c; c = c.previousElementSibling) {
      stack.push(c);
    }
  }
  return result;
};
goog.dom.getChildrenReverse_ = function(node) {
  if (node.nodeType == goog.dom.NodeType.DOCUMENT) {
    return [node.documentElement];
  } else {
    var children = [];
    for (var c = node.lastElementChild; c; c = c.previousElementSibling) {
      children.push(c);
    }
    return children;
  }
};
goog.dom.TAGS_TO_IGNORE_ = {"SCRIPT":1, "STYLE":1, "HEAD":1, "IFRAME":1, "OBJECT":1};
goog.dom.PREDEFINED_TAG_VALUES_ = {"IMG":" ", "BR":"\n"};
goog.dom.isFocusableTabIndex = function(element) {
  return goog.dom.hasSpecifiedTabIndex_(element) && goog.dom.isTabIndexFocusable_(element);
};
goog.dom.setFocusableTabIndex = function(element, enable) {
  if (enable) {
    element.tabIndex = 0;
  } else {
    element.tabIndex = -1;
    element.removeAttribute("tabIndex");
  }
};
goog.dom.isFocusable = function(element) {
  var focusable;
  if (goog.dom.nativelySupportsFocus_(element)) {
    focusable = !element.disabled && (!goog.dom.hasSpecifiedTabIndex_(element) || goog.dom.isTabIndexFocusable_(element));
  } else {
    focusable = goog.dom.isFocusableTabIndex(element);
  }
  return focusable && goog.userAgent.IE ? goog.dom.hasNonZeroBoundingRect_(element) : focusable;
};
goog.dom.hasSpecifiedTabIndex_ = function(element) {
  return element.hasAttribute("tabindex");
};
goog.dom.isTabIndexFocusable_ = function(element) {
  var index = element.tabIndex;
  return typeof index === "number" && index >= 0 && index < 32768;
};
goog.dom.nativelySupportsFocus_ = function(element) {
  return element.tagName == goog.dom.TagName.A && element.hasAttribute("href") || element.tagName == goog.dom.TagName.INPUT || element.tagName == goog.dom.TagName.TEXTAREA || element.tagName == goog.dom.TagName.SELECT || element.tagName == goog.dom.TagName.BUTTON;
};
goog.dom.hasNonZeroBoundingRect_ = function(element) {
  var rect;
  if (typeof element["getBoundingClientRect"] !== "function" || goog.userAgent.IE && element.parentElement == null) {
    rect = {"height":element.offsetHeight, "width":element.offsetWidth};
  } else {
    rect = element.getBoundingClientRect();
  }
  return rect != null && rect.height > 0 && rect.width > 0;
};
goog.dom.getTextContent = function(node) {
  var textContent;
  var buf = [];
  goog.dom.getTextContent_(node, buf, true);
  textContent = buf.join("");
  textContent = textContent.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  textContent = textContent.replace(/\u200B/g, "");
  textContent = textContent.replace(/ +/g, " ");
  if (textContent != " ") {
    textContent = textContent.replace(/^\s*/, "");
  }
  return textContent;
};
goog.dom.getRawTextContent = function(node) {
  var buf = [];
  goog.dom.getTextContent_(node, buf, false);
  return buf.join("");
};
goog.dom.getTextContent_ = function(node, buf, normalizeWhitespace) {
  if (node.nodeName in goog.dom.TAGS_TO_IGNORE_) {
  } else if (node.nodeType == goog.dom.NodeType.TEXT) {
    if (normalizeWhitespace) {
      buf.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ""));
    } else {
      buf.push(node.nodeValue);
    }
  } else if (node.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
    buf.push(goog.dom.PREDEFINED_TAG_VALUES_[node.nodeName]);
  } else {
    var child = node.firstChild;
    while (child) {
      goog.dom.getTextContent_(child, buf, normalizeWhitespace);
      child = child.nextSibling;
    }
  }
};
goog.dom.getNodeTextLength = function(node) {
  return goog.dom.getTextContent(node).length;
};
goog.dom.getNodeTextOffset = function(node, opt_offsetParent) {
  var root = opt_offsetParent || goog.dom.getOwnerDocument(node).body;
  var buf = [];
  while (node && node != root) {
    var cur = node;
    while (cur = cur.previousSibling) {
      buf.unshift(goog.dom.getTextContent(cur));
    }
    node = node.parentNode;
  }
  return goog.string.trimLeft(buf.join("")).replace(/ +/g, " ").length;
};
goog.dom.getNodeAtOffset = function(parent, offset, opt_result) {
  var stack = [parent], pos = 0, cur = null;
  while (stack.length > 0 && pos < offset) {
    cur = stack.pop();
    if (cur.nodeName in goog.dom.TAGS_TO_IGNORE_) {
    } else if (cur.nodeType == goog.dom.NodeType.TEXT) {
      var text = cur.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
      pos += text.length;
    } else if (cur.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
      pos += goog.dom.PREDEFINED_TAG_VALUES_[cur.nodeName].length;
    } else {
      for (var i = cur.childNodes.length - 1; i >= 0; i--) {
        stack.push(cur.childNodes[i]);
      }
    }
  }
  if (goog.isObject(opt_result)) {
    opt_result.remainder = cur ? cur.nodeValue.length + offset - pos - 1 : 0;
    opt_result.node = cur;
  }
  return cur;
};
goog.dom.isNodeList = function(val) {
  if (val && typeof val.length == "number") {
    if (goog.isObject(val)) {
      return typeof val.item == "function" || typeof val.item == "string";
    } else if (typeof val === "function") {
      return typeof val.item == "function";
    }
  }
  return false;
};
goog.dom.getAncestorByTagNameAndClass = function(element, opt_tag, opt_class, opt_maxSearchSteps) {
  if (!opt_tag && !opt_class) {
    return null;
  }
  var tagName = opt_tag ? String(opt_tag).toUpperCase() : null;
  return goog.dom.getAncestor(element, function(node) {
    return (!tagName || node.nodeName == tagName) && (!opt_class || typeof node.className === "string" && goog.array.contains(node.className.split(/\s+/), opt_class));
  }, true, opt_maxSearchSteps);
};
goog.dom.getAncestorByClass = function(element, className, opt_maxSearchSteps) {
  return goog.dom.getAncestorByTagNameAndClass(element, null, className, opt_maxSearchSteps);
};
goog.dom.getAncestor = function(element, matcher, opt_includeNode, opt_maxSearchSteps) {
  if (element && !opt_includeNode) {
    element = element.parentNode;
  }
  var steps = 0;
  while (element && (opt_maxSearchSteps == null || steps <= opt_maxSearchSteps)) {
    goog.asserts.assert(element.name != "parentNode");
    if (matcher(element)) {
      return element;
    }
    element = element.parentNode;
    steps++;
  }
  return null;
};
goog.dom.getActiveElement = function(doc) {
  try {
    var activeElement = doc && doc.activeElement;
    return activeElement && activeElement.nodeName ? activeElement : null;
  } catch (e) {
    return null;
  }
};
goog.dom.getPixelRatio = function() {
  var win = goog.dom.getWindow();
  if (win.devicePixelRatio !== undefined) {
    return win.devicePixelRatio;
  } else if (win.matchMedia) {
    return goog.dom.matchesPixelRatio_(3) || goog.dom.matchesPixelRatio_(2) || goog.dom.matchesPixelRatio_(1.5) || goog.dom.matchesPixelRatio_(1) || .75;
  }
  return 1;
};
goog.dom.matchesPixelRatio_ = function(pixelRatio) {
  var win = goog.dom.getWindow();
  var dpiPerDppx = 96;
  var query = "(min-resolution: " + pixelRatio + "dppx)," + "(min--moz-device-pixel-ratio: " + pixelRatio + ")," + "(min-resolution: " + pixelRatio * dpiPerDppx + "dpi)";
  return win.matchMedia(query).matches ? pixelRatio : 0;
};
goog.dom.getCanvasContext2D = function(canvas) {
  return canvas.getContext("2d");
};
goog.dom.DomHelper = function(opt_document) {
  this.document_ = opt_document || goog.global.document || document;
};
goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument = function(document) {
  this.document_ = document;
};
goog.dom.DomHelper.prototype.getDocument = function() {
  return this.document_;
};
goog.dom.DomHelper.prototype.getElement = function(element) {
  return goog.dom.getElementHelper_(this.document_, element);
};
goog.dom.DomHelper.prototype.getRequiredElement = function(id) {
  return goog.dom.getRequiredElementHelper_(this.document_, id);
};
goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
goog.dom.DomHelper.prototype.getElementsByTagName = function(tagName, opt_parent) {
  var parent = opt_parent || this.document_;
  return parent.getElementsByTagName(String(tagName));
};
goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(this.document_, opt_tag, opt_class, opt_el);
};
goog.dom.DomHelper.prototype.getElementByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementByTagNameAndClass_(this.document_, opt_tag, opt_class, opt_el);
};
goog.dom.DomHelper.prototype.getElementsByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementsByClass(className, doc);
};
goog.dom.DomHelper.prototype.getElementByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementByClass(className, doc);
};
goog.dom.DomHelper.prototype.getRequiredElementByClass = function(className, opt_root) {
  var root = opt_root || this.document_;
  return goog.dom.getRequiredElementByClass(className, root);
};
goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
goog.dom.DomHelper.prototype.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize(opt_window || this.getWindow());
};
goog.dom.DomHelper.prototype.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(this.getWindow());
};
goog.dom.Appendable;
goog.dom.DomHelper.prototype.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(this.document_, arguments);
};
goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
goog.dom.DomHelper.prototype.createElement = function(name) {
  return goog.dom.createElement_(this.document_, name);
};
goog.dom.DomHelper.prototype.createTextNode = function(content) {
  return this.document_.createTextNode(String(content));
};
goog.dom.DomHelper.prototype.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(this.document_, rows, columns, !!opt_fillWithNbsp);
};
goog.dom.DomHelper.prototype.safeHtmlToNode = function(html) {
  return goog.dom.safeHtmlToNode_(this.document_, html);
};
goog.dom.DomHelper.prototype.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(this.document_);
};
goog.dom.DomHelper.prototype.getWindow = function() {
  return goog.dom.getWindow_(this.document_);
};
goog.dom.DomHelper.prototype.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(this.document_);
};
goog.dom.DomHelper.prototype.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(this.document_);
};
goog.dom.DomHelper.prototype.getActiveElement = function(opt_doc) {
  return goog.dom.getActiveElement(opt_doc || this.document_);
};
goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
goog.dom.DomHelper.prototype.append = goog.dom.append;
goog.dom.DomHelper.prototype.canHaveChildren = goog.dom.canHaveChildren;
goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
goog.dom.DomHelper.prototype.insertChildAt = goog.dom.insertChildAt;
goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
goog.dom.DomHelper.prototype.copyContents = goog.dom.copyContents;
goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
goog.dom.DomHelper.prototype.getChildren = goog.dom.getChildren;
goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
goog.dom.DomHelper.prototype.isElement = goog.dom.isElement;
goog.dom.DomHelper.prototype.isWindow = goog.dom.isWindow;
goog.dom.DomHelper.prototype.getParentElement = goog.dom.getParentElement;
goog.dom.DomHelper.prototype.contains = goog.dom.contains;
goog.dom.DomHelper.prototype.compareNodeOrder = goog.dom.compareNodeOrder;
goog.dom.DomHelper.prototype.findCommonAncestor = goog.dom.findCommonAncestor;
goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
goog.dom.DomHelper.prototype.getOuterHtml = goog.dom.getOuterHtml;
goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
goog.dom.DomHelper.prototype.isFocusableTabIndex = goog.dom.isFocusableTabIndex;
goog.dom.DomHelper.prototype.setFocusableTabIndex = goog.dom.setFocusableTabIndex;
goog.dom.DomHelper.prototype.isFocusable = goog.dom.isFocusable;
goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
goog.dom.DomHelper.prototype.getNodeAtOffset = goog.dom.getNodeAtOffset;
goog.dom.DomHelper.prototype.isNodeList = goog.dom.isNodeList;
goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
goog.dom.DomHelper.prototype.getAncestorByClass = goog.dom.getAncestorByClass;
goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
goog.dom.DomHelper.prototype.getCanvasContext2D = goog.dom.getCanvasContext2D;

$CLJS.SHADOW_ENV.setLoaded("goog.dom.dom.js");

goog.provide("goog.async.nextTick");
goog.require("goog.debug.entryPointRegistry");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.functions");
goog.require("goog.labs.userAgent.browser");
goog.require("goog.labs.userAgent.engine");
goog.async.nextTick = function(callback, opt_context, opt_useSetImmediate) {
  var cb = callback;
  if (opt_context) {
    cb = goog.bind(callback, opt_context);
  }
  cb = goog.async.nextTick.wrapCallback_(cb);
  if (typeof goog.global.setImmediate === "function" && (opt_useSetImmediate || goog.async.nextTick.useSetImmediate_())) {
    goog.global.setImmediate(cb);
    return;
  }
  if (!goog.async.nextTick.nextTickImpl) {
    goog.async.nextTick.nextTickImpl = goog.async.nextTick.getNextTickImpl_();
  }
  goog.async.nextTick.nextTickImpl(cb);
};
goog.async.nextTick.useSetImmediate_ = function() {
  if (!goog.global.Window || !goog.global.Window.prototype) {
    return true;
  }
  if (goog.labs.userAgent.browser.isEdge() || goog.global.Window.prototype.setImmediate != goog.global.setImmediate) {
    return true;
  }
  return false;
};
goog.async.nextTick.nextTickImpl;
goog.async.nextTick.getNextTickImpl_ = function() {
  var Channel = goog.global["MessageChannel"];
  if (typeof Channel === "undefined" && typeof window !== "undefined" && window.postMessage && window.addEventListener && !goog.labs.userAgent.engine.isPresto()) {
    Channel = function() {
      var iframe = goog.dom.createElement(goog.dom.TagName.IFRAME);
      iframe.style.display = "none";
      document.documentElement.appendChild(iframe);
      var win = iframe.contentWindow;
      var doc = win.document;
      doc.open();
      doc.close();
      var message = "callImmediate" + Math.random();
      var origin = win.location.protocol == "file:" ? "*" : win.location.protocol + "//" + win.location.host;
      var onmessage = goog.bind(function(e) {
        if (origin != "*" && e.origin != origin || e.data != message) {
          return;
        }
        this["port1"].onmessage();
      }, this);
      win.addEventListener("message", onmessage, false);
      this["port1"] = {};
      this["port2"] = {postMessage:function() {
        win.postMessage(message, origin);
      }};
    };
  }
  if (typeof Channel !== "undefined" && !goog.labs.userAgent.browser.isIE()) {
    var channel = new Channel();
    var head = {};
    var tail = head;
    channel["port1"].onmessage = function() {
      if (head.next !== undefined) {
        head = head.next;
        var cb = head.cb;
        head.cb = null;
        cb();
      }
    };
    return function(cb) {
      tail.next = {cb:cb};
      tail = tail.next;
      channel["port2"].postMessage(0);
    };
  }
  return function(cb) {
    goog.global.setTimeout(cb, 0);
  };
};
goog.async.nextTick.wrapCallback_ = goog.functions.identity;
goog.debug.entryPointRegistry.register(function(transformer) {
  goog.async.nextTick.wrapCallback_ = transformer;
});

$CLJS.SHADOW_ENV.setLoaded("goog.async.nexttick.js");

goog.provide("goog.userAgent.product");
goog.require("goog.labs.userAgent.browser");
goog.require("goog.labs.userAgent.platform");
goog.require("goog.userAgent");
goog.userAgent.product.ASSUME_FIREFOX = goog.define("goog.userAgent.product.ASSUME_FIREFOX", false);
goog.userAgent.product.ASSUME_IPHONE = goog.define("goog.userAgent.product.ASSUME_IPHONE", false);
goog.userAgent.product.ASSUME_IPAD = goog.define("goog.userAgent.product.ASSUME_IPAD", false);
goog.userAgent.product.ASSUME_ANDROID = goog.define("goog.userAgent.product.ASSUME_ANDROID", false);
goog.userAgent.product.ASSUME_CHROME = goog.define("goog.userAgent.product.ASSUME_CHROME", false);
goog.userAgent.product.ASSUME_SAFARI = goog.define("goog.userAgent.product.ASSUME_SAFARI", false);
goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
goog.userAgent.product.OPERA = goog.userAgent.OPERA;
goog.userAgent.product.IE = goog.userAgent.IE;
goog.userAgent.product.EDGE = goog.userAgent.EDGE;
goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
goog.userAgent.product.isIphoneOrIpod_ = function() {
  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
};
goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
goog.userAgent.product.isSafariDesktop_ = function() {
  return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
};
goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();

$CLJS.SHADOW_ENV.setLoaded("goog.useragent.product.js");

goog.provide("goog.dom.InputType");
goog.dom.InputType = {BUTTON:"button", CHECKBOX:"checkbox", COLOR:"color", DATE:"date", DATETIME:"datetime", DATETIME_LOCAL:"datetime-local", EMAIL:"email", FILE:"file", HIDDEN:"hidden", IMAGE:"image", MENU:"menu", MONTH:"month", NUMBER:"number", PASSWORD:"password", RADIO:"radio", RANGE:"range", RESET:"reset", SEARCH:"search", SELECT_MULTIPLE:"select-multiple", SELECT_ONE:"select-one", SUBMIT:"submit", TEL:"tel", TEXT:"text", TEXTAREA:"textarea", TIME:"time", URL:"url", WEEK:"week"};

$CLJS.SHADOW_ENV.setLoaded("goog.dom.inputtype.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.collections.iters");
  goog.module.declareLegacyNamespace();
  function getIterator(iterable) {
    return iterable[goog.global.Symbol.iterator]();
  }
  exports.getIterator = getIterator;
  function forEach(iterator, f) {
    let result;
    while (!(result = iterator.next()).done) {
      f(result.value);
    }
  }
  exports.forEach = forEach;
  class MapIterator {
    constructor(childIter, mapFn) {
      this.childIterator_ = getIterator(childIter);
      this.mapFn_ = mapFn;
    }
    [Symbol.iterator]() {
      return this;
    }
    next() {
      const childResult = this.childIterator_.next();
      return {value:childResult.done ? undefined : this.mapFn_.call(undefined, childResult.value), done:childResult.done,};
    }
  }
  exports.map = function(iterable, f) {
    return new MapIterator(iterable, f);
  };
  class FilterIterator {
    constructor(childIter, filterFn) {
      this.childIter_ = getIterator(childIter);
      this.filterFn_ = filterFn;
    }
    [Symbol.iterator]() {
      return this;
    }
    next() {
      while (true) {
        const childResult = this.childIter_.next();
        if (childResult.done) {
          return {done:true, value:undefined};
        }
        const passesFilter = this.filterFn_.call(undefined, childResult.value);
        if (passesFilter) {
          return childResult;
        }
      }
    }
  }
  exports.filter = function(iterable, f) {
    return new FilterIterator(iterable, f);
  };
  class ConcatIterator {
    constructor(iterators) {
      this.iterators_ = iterators;
      this.iterIndex_ = 0;
    }
    [Symbol.iterator]() {
      return this;
    }
    next() {
      while (this.iterIndex_ < this.iterators_.length) {
        const result = this.iterators_[this.iterIndex_].next();
        if (!result.done) {
          return result;
        }
        this.iterIndex_++;
      }
      return {done:true};
    }
  }
  exports.concat = function(...iterables) {
    return new ConcatIterator(iterables.map(getIterator));
  };
  exports.toArray = function(iterator) {
    const arr = [];
    forEach(iterator, e => arr.push(e));
    return arr;
  };
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.collections.iters.js");

goog.provide("goog.debug.errorcontext");
goog.debug.errorcontext.addErrorContext = function(err, contextKey, contextValue) {
  if (!err[goog.debug.errorcontext.CONTEXT_KEY_]) {
    err[goog.debug.errorcontext.CONTEXT_KEY_] = {};
  }
  err[goog.debug.errorcontext.CONTEXT_KEY_][contextKey] = contextValue;
};
goog.debug.errorcontext.getErrorContext = function(err) {
  return err[goog.debug.errorcontext.CONTEXT_KEY_] || {};
};
goog.debug.errorcontext.CONTEXT_KEY_ = "__closure__error__context__984382";

$CLJS.SHADOW_ENV.setLoaded("goog.debug.errorcontext.js");

goog.provide("goog.debug");
goog.require("goog.array");
goog.require("goog.debug.errorcontext");
goog.debug.LOGGING_ENABLED = goog.define("goog.debug.LOGGING_ENABLED", goog.DEBUG);
goog.debug.FORCE_SLOPPY_STACKS = goog.define("goog.debug.FORCE_SLOPPY_STACKS", false);
goog.debug.CHECK_FOR_THROWN_EVENT = goog.define("goog.debug.CHECK_FOR_THROWN_EVENT", false);
goog.debug.catchErrors = function(logFunc, opt_cancel, opt_target) {
  var target = opt_target || goog.global;
  var oldErrorHandler = target.onerror;
  var retVal = !!opt_cancel;
  target.onerror = function(message, url, line, opt_col, opt_error) {
    if (oldErrorHandler) {
      oldErrorHandler(message, url, line, opt_col, opt_error);
    }
    logFunc({message:message, fileName:url, line:line, lineNumber:line, col:opt_col, error:opt_error});
    return retVal;
  };
};
goog.debug.expose = function(obj, opt_showFn) {
  if (typeof obj == "undefined") {
    return "undefined";
  }
  if (obj == null) {
    return "NULL";
  }
  var str = [];
  for (var x in obj) {
    if (!opt_showFn && typeof obj[x] === "function") {
      continue;
    }
    var s = x + " \x3d ";
    try {
      s += obj[x];
    } catch (e) {
      s += "*** " + e + " ***";
    }
    str.push(s);
  }
  return str.join("\n");
};
goog.debug.deepExpose = function(obj, opt_showFn) {
  var str = [];
  var uidsToCleanup = [];
  var ancestorUids = {};
  var helper = function(obj, space) {
    var nestspace = space + "  ";
    var indentMultiline = function(str) {
      return str.replace(/\n/g, "\n" + space);
    };
    try {
      if (obj === undefined) {
        str.push("undefined");
      } else if (obj === null) {
        str.push("NULL");
      } else if (typeof obj === "string") {
        str.push('"' + indentMultiline(obj) + '"');
      } else if (typeof obj === "function") {
        str.push(indentMultiline(String(obj)));
      } else if (goog.isObject(obj)) {
        if (!goog.hasUid(obj)) {
          uidsToCleanup.push(obj);
        }
        var uid = goog.getUid(obj);
        if (ancestorUids[uid]) {
          str.push("*** reference loop detected (id\x3d" + uid + ") ***");
        } else {
          ancestorUids[uid] = true;
          str.push("{");
          for (var x in obj) {
            if (!opt_showFn && typeof obj[x] === "function") {
              continue;
            }
            str.push("\n");
            str.push(nestspace);
            str.push(x + " \x3d ");
            helper(obj[x], nestspace);
          }
          str.push("\n" + space + "}");
          delete ancestorUids[uid];
        }
      } else {
        str.push(obj);
      }
    } catch (e) {
      str.push("*** " + e + " ***");
    }
  };
  helper(obj, "");
  for (var i = 0; i < uidsToCleanup.length; i++) {
    goog.removeUid(uidsToCleanup[i]);
  }
  return str.join("");
};
goog.debug.exposeArray = function(arr) {
  var str = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      str.push(goog.debug.exposeArray(arr[i]));
    } else {
      str.push(arr[i]);
    }
  }
  return "[ " + str.join(", ") + " ]";
};
goog.debug.normalizeErrorObject = function(err) {
  var href = goog.getObjectByName("window.location.href");
  if (err == null) {
    err = 'Unknown Error of type "null/undefined"';
  }
  if (typeof err === "string") {
    return {"message":err, "name":"Unknown error", "lineNumber":"Not available", "fileName":href, "stack":"Not available"};
  }
  var lineNumber, fileName;
  var threwError = false;
  try {
    lineNumber = err.lineNumber || err.line || "Not available";
  } catch (e) {
    lineNumber = "Not available";
    threwError = true;
  }
  try {
    fileName = err.fileName || err.filename || err.sourceURL || goog.global["$googDebugFname"] || href;
  } catch (e) {
    fileName = "Not available";
    threwError = true;
  }
  var stack = goog.debug.serializeErrorStack_(err);
  if (threwError || !err.lineNumber || !err.fileName || !err.stack || !err.message || !err.name) {
    var message = err.message;
    if (message == null) {
      if (err.constructor && err.constructor instanceof Function) {
        var ctorName = err.constructor.name ? err.constructor.name : goog.debug.getFunctionName(err.constructor);
        message = 'Unknown Error of type "' + ctorName + '"';
        if (goog.debug.CHECK_FOR_THROWN_EVENT && ctorName == "Event") {
          try {
            message = message + ' with Event.type "' + (err.type || "") + '"';
          } catch (e) {
          }
        }
      } else {
        message = "Unknown Error of unknown type";
      }
      if (typeof err.toString === "function" && Object.prototype.toString !== err.toString) {
        message += ": " + err.toString();
      }
    }
    return {"message":message, "name":err.name || "UnknownError", "lineNumber":lineNumber, "fileName":fileName, "stack":stack || "Not available"};
  }
  err.stack = stack;
  return {"message":err.message, "name":err.name, "lineNumber":err.lineNumber, "fileName":err.fileName, "stack":err.stack};
};
goog.debug.serializeErrorStack_ = function(e, seen) {
  if (!seen) {
    seen = {};
  }
  seen[goog.debug.serializeErrorAsKey_(e)] = true;
  var stack = e["stack"] || "";
  var cause = e.cause;
  if (cause && !seen[goog.debug.serializeErrorAsKey_(cause)]) {
    stack += "\nCaused by: ";
    if (!cause.stack || cause.stack.indexOf(cause.toString()) != 0) {
      stack += typeof cause === "string" ? cause : cause.message + "\n";
    }
    stack += goog.debug.serializeErrorStack_(cause, seen);
  }
  return stack;
};
goog.debug.serializeErrorAsKey_ = function(e) {
  var keyPrefix = "";
  if (typeof e.toString === "function") {
    keyPrefix = "" + e;
  }
  return keyPrefix + e["stack"];
};
goog.debug.enhanceError = function(err, opt_message) {
  var error;
  if (!(err instanceof Error)) {
    error = Error(err);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, goog.debug.enhanceError);
    }
  } else {
    error = err;
  }
  if (!error.stack) {
    error.stack = goog.debug.getStacktrace(goog.debug.enhanceError);
  }
  if (opt_message) {
    var x = 0;
    while (error["message" + x]) {
      ++x;
    }
    error["message" + x] = String(opt_message);
  }
  return error;
};
goog.debug.enhanceErrorWithContext = function(err, opt_context) {
  var error = goog.debug.enhanceError(err);
  if (opt_context) {
    for (var key in opt_context) {
      goog.debug.errorcontext.addErrorContext(error, key, opt_context[key]);
    }
  }
  return error;
};
goog.debug.getStacktraceSimple = function(opt_depth) {
  if (!goog.debug.FORCE_SLOPPY_STACKS) {
    var stack = goog.debug.getNativeStackTrace_(goog.debug.getStacktraceSimple);
    if (stack) {
      return stack;
    }
  }
  var sb = [];
  var fn = arguments.callee.caller;
  var depth = 0;
  while (fn && (!opt_depth || depth < opt_depth)) {
    sb.push(goog.debug.getFunctionName(fn));
    sb.push("()\n");
    try {
      fn = fn.caller;
    } catch (e) {
      sb.push("[exception trying to get caller]\n");
      break;
    }
    depth++;
    if (depth >= goog.debug.MAX_STACK_DEPTH) {
      sb.push("[...long stack...]");
      break;
    }
  }
  if (opt_depth && depth >= opt_depth) {
    sb.push("[...reached max depth limit...]");
  } else {
    sb.push("[end]");
  }
  return sb.join("");
};
goog.debug.MAX_STACK_DEPTH = 50;
goog.debug.getNativeStackTrace_ = function(fn) {
  var tempErr = new Error();
  if (Error.captureStackTrace) {
    Error.captureStackTrace(tempErr, fn);
    return String(tempErr.stack);
  } else {
    try {
      throw tempErr;
    } catch (e) {
      tempErr = e;
    }
    var stack = tempErr.stack;
    if (stack) {
      return String(stack);
    }
  }
  return null;
};
goog.debug.getStacktrace = function(fn) {
  var stack;
  if (!goog.debug.FORCE_SLOPPY_STACKS) {
    var contextFn = fn || goog.debug.getStacktrace;
    stack = goog.debug.getNativeStackTrace_(contextFn);
  }
  if (!stack) {
    stack = goog.debug.getStacktraceHelper_(fn || arguments.callee.caller, []);
  }
  return stack;
};
goog.debug.getStacktraceHelper_ = function(fn, visited) {
  var sb = [];
  if (goog.array.contains(visited, fn)) {
    sb.push("[...circular reference...]");
  } else if (fn && visited.length < goog.debug.MAX_STACK_DEPTH) {
    sb.push(goog.debug.getFunctionName(fn) + "(");
    var args = fn.arguments;
    for (var i = 0; args && i < args.length; i++) {
      if (i > 0) {
        sb.push(", ");
      }
      var argDesc;
      var arg = args[i];
      switch(typeof arg) {
        case "object":
          argDesc = arg ? "object" : "null";
          break;
        case "string":
          argDesc = arg;
          break;
        case "number":
          argDesc = String(arg);
          break;
        case "boolean":
          argDesc = arg ? "true" : "false";
          break;
        case "function":
          argDesc = goog.debug.getFunctionName(arg);
          argDesc = argDesc ? argDesc : "[fn]";
          break;
        case "undefined":
        default:
          argDesc = typeof arg;
          break;
      }
      if (argDesc.length > 40) {
        argDesc = argDesc.slice(0, 40) + "...";
      }
      sb.push(argDesc);
    }
    visited.push(fn);
    sb.push(")\n");
    try {
      sb.push(goog.debug.getStacktraceHelper_(fn.caller, visited));
    } catch (e) {
      sb.push("[exception trying to get caller]\n");
    }
  } else if (fn) {
    sb.push("[...long stack...]");
  } else {
    sb.push("[end]");
  }
  return sb.join("");
};
goog.debug.getFunctionName = function(fn) {
  if (goog.debug.fnNameCache_[fn]) {
    return goog.debug.fnNameCache_[fn];
  }
  var functionSource = String(fn);
  if (!goog.debug.fnNameCache_[functionSource]) {
    var matches = /function\s+([^\(]+)/m.exec(functionSource);
    if (matches) {
      var method = matches[1];
      goog.debug.fnNameCache_[functionSource] = method;
    } else {
      goog.debug.fnNameCache_[functionSource] = "[Anonymous]";
    }
  }
  return goog.debug.fnNameCache_[functionSource];
};
goog.debug.makeWhitespaceVisible = function(string) {
  return string.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
goog.debug.runtimeType = function(value) {
  if (value instanceof Function) {
    return value.displayName || value.name || "unknown type name";
  } else if (value instanceof Object) {
    return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
  } else {
    return value === null ? "null" : typeof value;
  }
};
goog.debug.fnNameCache_ = {};
goog.debug.freezeInternal_ = goog.DEBUG && Object.freeze || function(arg) {
  return arg;
};
goog.debug.freeze = function(arg) {
  return {valueOf:function() {
    return goog.debug.freezeInternal_(arg);
  }}.valueOf();
};

$CLJS.SHADOW_ENV.setLoaded("goog.debug.debug.js");

goog.provide("goog.iter");
goog.provide("goog.iter.Iterable");
goog.provide("goog.iter.Iterator");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.debug");
goog.require("goog.functions");
goog.require("goog.math");
goog.iter.Iterable;
goog.iter.Iterator = function() {
};
goog.iter.Iterator.prototype.next = function() {
  return goog.iter.ES6_ITERATOR_DONE;
};
goog.iter.ES6_ITERATOR_DONE = goog.debug.freeze({done:true, value:undefined});
goog.iter.createEs6IteratorYield = function(value) {
  return {value, done:false};
};
goog.iter.Iterator.prototype.__iterator__ = function(opt_keys) {
  return this;
};
goog.iter.toIterator = function(iterable) {
  if (iterable instanceof goog.iter.Iterator) {
    return iterable;
  }
  if (typeof iterable.__iterator__ == "function") {
    return iterable.__iterator__(false);
  }
  if (goog.isArrayLike(iterable)) {
    const like = iterable;
    let i = 0;
    const newIter = new goog.iter.Iterator();
    newIter.next = function() {
      while (true) {
        if (i >= like.length) {
          return goog.iter.ES6_ITERATOR_DONE;
        }
        if (!(i in like)) {
          i++;
          continue;
        }
        return goog.iter.createEs6IteratorYield(like[i++]);
      }
    };
    return newIter;
  }
  throw new Error("Not implemented");
};
goog.iter.forEach = function(iterable, f, opt_obj) {
  if (goog.isArrayLike(iterable)) {
    goog.array.forEach(iterable, f, opt_obj);
  } else {
    const iterator = goog.iter.toIterator(iterable);
    while (true) {
      const {done, value} = iterator.next();
      if (done) {
        return;
      }
      f.call(opt_obj, value, undefined, iterator);
    }
  }
};
goog.iter.filter = function(iterable, f, opt_obj) {
  const iterator = goog.iter.toIterator(iterable);
  const newIter = new goog.iter.Iterator();
  newIter.next = function() {
    while (true) {
      const {done, value} = iterator.next();
      if (done) {
        return goog.iter.ES6_ITERATOR_DONE;
      }
      if (f.call(opt_obj, value, undefined, iterator)) {
        return goog.iter.createEs6IteratorYield(value);
      }
    }
  };
  return newIter;
};
goog.iter.filterFalse = function(iterable, f, opt_obj) {
  return goog.iter.filter(iterable, goog.functions.not(f), opt_obj);
};
goog.iter.range = function(startOrStop, opt_stop, opt_step) {
  let start = 0;
  let stop = startOrStop;
  let step = opt_step || 1;
  if (arguments.length > 1) {
    start = startOrStop;
    stop = +opt_stop;
  }
  if (step == 0) {
    throw new Error("Range step argument must not be zero");
  }
  const newIter = new goog.iter.Iterator();
  newIter.next = function() {
    if (step > 0 && start >= stop || step < 0 && start <= stop) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    const rv = start;
    start += step;
    return goog.iter.createEs6IteratorYield(rv);
  };
  return newIter;
};
goog.iter.join = function(iterable, deliminator) {
  return goog.iter.toArray(iterable).join(deliminator);
};
goog.iter.map = function(iterable, f, opt_obj) {
  const iterator = goog.iter.toIterator(iterable);
  const newIter = new goog.iter.Iterator();
  newIter.next = function() {
    const {done, value} = iterator.next();
    if (done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    const mappedVal = f.call(opt_obj, value, undefined, iterator);
    return goog.iter.createEs6IteratorYield(mappedVal);
  };
  return newIter;
};
goog.iter.reduce = function(iterable, f, val, opt_obj) {
  let rval = val;
  goog.iter.forEach(iterable, function(val) {
    rval = f.call(opt_obj, rval, val);
  });
  return rval;
};
goog.iter.some = function(iterable, f, opt_obj) {
  const iterator = goog.iter.toIterator(iterable);
  while (true) {
    const {done, value} = iterator.next();
    if (done) {
      return false;
    }
    if (f.call(opt_obj, value, undefined, iterator)) {
      return true;
    }
  }
};
goog.iter.every = function(iterable, f, opt_obj) {
  const iterator = goog.iter.toIterator(iterable);
  while (true) {
    const {done, value} = iterator.next();
    if (done) {
      return true;
    }
    if (!f.call(opt_obj, value, undefined, iterator)) {
      return false;
    }
  }
};
goog.iter.chain = function(var_args) {
  return goog.iter.chainFromIterable(arguments);
};
goog.iter.chainFromIterable = function(iterable) {
  const iteratorOfIterators = goog.iter.toIterator(iterable);
  const iter = new goog.iter.Iterator();
  let current = null;
  iter.next = function() {
    while (true) {
      if (current == null) {
        const it = iteratorOfIterators.next();
        if (it.done) {
          return goog.iter.ES6_ITERATOR_DONE;
        }
        const value = it.value;
        current = goog.iter.toIterator(value);
      }
      const it = current.next();
      if (it.done) {
        current = null;
        continue;
      }
      const value = it.value;
      return goog.iter.createEs6IteratorYield(value);
    }
  };
  return iter;
};
goog.iter.dropWhile = function(iterable, f, opt_obj) {
  const iterator = goog.iter.toIterator(iterable);
  const newIter = new goog.iter.Iterator();
  let dropping = true;
  newIter.next = function() {
    while (true) {
      const {done, value} = iterator.next();
      if (done) {
        return goog.iter.ES6_ITERATOR_DONE;
      }
      if (dropping && f.call(opt_obj, value, undefined, iterator)) {
        continue;
      } else {
        dropping = false;
      }
      return goog.iter.createEs6IteratorYield(value);
    }
  };
  return newIter;
};
goog.iter.takeWhile = function(iterable, f, opt_obj) {
  const iterator = goog.iter.toIterator(iterable);
  const iter = new goog.iter.Iterator();
  iter.next = function() {
    const {done, value} = iterator.next();
    if (done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    if (f.call(opt_obj, value, undefined, iterator)) {
      return goog.iter.createEs6IteratorYield(value);
    }
    return goog.iter.ES6_ITERATOR_DONE;
  };
  return iter;
};
goog.iter.toArray = function(iterable) {
  if (goog.isArrayLike(iterable)) {
    return goog.array.toArray(iterable);
  }
  iterable = goog.iter.toIterator(iterable);
  const array = [];
  goog.iter.forEach(iterable, function(val) {
    array.push(val);
  });
  return array;
};
goog.iter.equals = function(iterable1, iterable2, opt_equalsFn) {
  const fillValue = {};
  const pairs = goog.iter.zipLongest(fillValue, iterable1, iterable2);
  const equalsFn = opt_equalsFn || goog.array.defaultCompareEquality;
  return goog.iter.every(pairs, function(pair) {
    return equalsFn(pair[0], pair[1]);
  });
};
goog.iter.nextOrValue = function(iterable, defaultValue) {
  const iterator = goog.iter.toIterator(iterable);
  const {done, value} = iterator.next();
  if (done) {
    return defaultValue;
  }
  return value;
};
goog.iter.product = function(var_args) {
  const someArrayEmpty = Array.prototype.some.call(arguments, function(arr) {
    return !arr.length;
  });
  if (someArrayEmpty || !arguments.length) {
    return new goog.iter.Iterator();
  }
  const iter = new goog.iter.Iterator();
  const arrays = arguments;
  let indices = goog.array.repeat(0, arrays.length);
  iter.next = function() {
    if (indices) {
      const retVal = goog.array.map(indices, function(valueIndex, arrayIndex) {
        return arrays[arrayIndex][valueIndex];
      });
      for (let i = indices.length - 1; i >= 0; i--) {
        goog.asserts.assert(indices);
        if (indices[i] < arrays[i].length - 1) {
          indices[i]++;
          break;
        }
        if (i == 0) {
          indices = null;
          break;
        }
        indices[i] = 0;
      }
      return goog.iter.createEs6IteratorYield(retVal);
    }
    return goog.iter.ES6_ITERATOR_DONE;
  };
  return iter;
};
goog.iter.cycle = function(iterable) {
  const baseIterator = goog.iter.toIterator(iterable);
  const cache = [];
  let cacheIndex = 0;
  const iter = new goog.iter.Iterator();
  let useCache = false;
  iter.next = function() {
    let returnElement = null;
    if (!useCache) {
      const it = baseIterator.next();
      if (it.done) {
        if (goog.array.isEmpty(cache)) {
          return goog.iter.ES6_ITERATOR_DONE;
        }
        useCache = true;
      } else {
        cache.push(it.value);
        return it;
      }
    }
    returnElement = cache[cacheIndex];
    cacheIndex = (cacheIndex + 1) % cache.length;
    return goog.iter.createEs6IteratorYield(returnElement);
  };
  return iter;
};
goog.iter.count = function(opt_start, opt_step) {
  let counter = opt_start || 0;
  const step = opt_step !== undefined ? opt_step : 1;
  const iter = new goog.iter.Iterator();
  iter.next = function() {
    const returnValue = counter;
    counter += step;
    return goog.iter.createEs6IteratorYield(returnValue);
  };
  return iter;
};
goog.iter.repeat = function(value) {
  const iter = new goog.iter.Iterator();
  iter.next = function() {
    return goog.iter.createEs6IteratorYield(value);
  };
  return iter;
};
goog.iter.accumulate = function(iterable) {
  const iterator = goog.iter.toIterator(iterable);
  let total = 0;
  const iter = new goog.iter.Iterator();
  iter.next = function() {
    const {done, value} = iterator.next();
    if (done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    total += value;
    return goog.iter.createEs6IteratorYield(total);
  };
  return iter;
};
goog.iter.zip = function(var_args) {
  const args = arguments;
  const iter = new goog.iter.Iterator();
  if (args.length > 0) {
    const iterators = goog.array.map(args, goog.iter.toIterator);
    let allDone = false;
    iter.next = function() {
      if (allDone) {
        return goog.iter.ES6_ITERATOR_DONE;
      }
      const arr = [];
      for (let i = 0, iterator; iterator = iterators[i++];) {
        const it = iterator.next();
        if (it.done) {
          allDone = true;
          return goog.iter.ES6_ITERATOR_DONE;
        }
        arr.push(it.value);
      }
      return goog.iter.createEs6IteratorYield(arr);
    };
  }
  return iter;
};
goog.iter.zipLongest = function(fillValue, var_args) {
  const args = Array.prototype.slice.call(arguments, 1);
  const iter = new goog.iter.Iterator();
  if (args.length > 0) {
    const iterators = goog.array.map(args, goog.iter.toIterator);
    let allDone = false;
    iter.next = function() {
      if (allDone) {
        return goog.iter.ES6_ITERATOR_DONE;
      }
      let iteratorsHaveValues = false;
      const arr = [];
      for (let i = 0, iterator; iterator = iterators[i++];) {
        const it = iterator.next();
        if (it.done) {
          arr.push(fillValue);
          continue;
        }
        arr.push(it.value);
        iteratorsHaveValues = true;
      }
      if (!iteratorsHaveValues) {
        allDone = true;
        return goog.iter.ES6_ITERATOR_DONE;
      }
      return goog.iter.createEs6IteratorYield(arr);
    };
  }
  return iter;
};
goog.iter.compress = function(iterable, selectors) {
  const valueIterator = goog.iter.toIterator(iterable);
  const selectorIterator = goog.iter.toIterator(selectors);
  const iter = new goog.iter.Iterator();
  let allDone = false;
  iter.next = function() {
    if (allDone) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    while (true) {
      const valIt = valueIterator.next();
      if (valIt.done) {
        allDone = true;
        return goog.iter.ES6_ITERATOR_DONE;
      }
      const selectorIt = selectorIterator.next();
      if (selectorIt.done) {
        allDone = true;
        return goog.iter.ES6_ITERATOR_DONE;
      }
      const val = valIt.value;
      const selectorVal = selectorIt.value;
      if (selectorVal) {
        return goog.iter.createEs6IteratorYield(val);
      }
    }
  };
  return iter;
};
goog.iter.GroupByIterator_ = function(iterable, opt_keyFunc) {
  this.iterator = goog.iter.toIterator(iterable);
  this.keyFunc = opt_keyFunc || goog.functions.identity;
  this.targetKey;
  this.currentKey;
  this.currentValue;
};
goog.inherits(goog.iter.GroupByIterator_, goog.iter.Iterator);
goog.iter.GroupByIterator_.prototype.next = function() {
  while (this.currentKey == this.targetKey) {
    const it = this.iterator.next();
    if (it.done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    this.currentValue = it.value;
    this.currentKey = this.keyFunc(this.currentValue);
  }
  this.targetKey = this.currentKey;
  return goog.iter.createEs6IteratorYield([this.currentKey, this.groupItems_(this.targetKey)]);
};
goog.iter.GroupByIterator_.prototype.groupItems_ = function(targetKey) {
  const arr = [];
  while (this.currentKey == targetKey) {
    arr.push(this.currentValue);
    const it = this.iterator.next();
    if (it.done) {
      break;
    }
    this.currentValue = it.value;
    this.currentKey = this.keyFunc(this.currentValue);
  }
  return arr;
};
goog.iter.groupBy = function(iterable, opt_keyFunc) {
  return new goog.iter.GroupByIterator_(iterable, opt_keyFunc);
};
goog.iter.starMap = function(iterable, f, opt_obj) {
  const iterator = goog.iter.toIterator(iterable);
  const iter = new goog.iter.Iterator();
  iter.next = function() {
    const it = iterator.next();
    if (it.done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    const args = goog.iter.toArray(it.value);
    const value = f.apply(opt_obj, [].concat(args, undefined, iterator));
    return goog.iter.createEs6IteratorYield(value);
  };
  return iter;
};
goog.iter.tee = function(iterable, opt_num) {
  const iterator = goog.iter.toIterator(iterable);
  const num = typeof opt_num === "number" ? opt_num : 2;
  const buffers = goog.array.map(goog.array.range(num), function() {
    return [];
  });
  function addNextIteratorValueToBuffers() {
    const {done, value} = iterator.next();
    if (done) {
      return false;
    }
    for (let i = 0, buffer; buffer = buffers[i++];) {
      buffer.push(value);
    }
    return true;
  }
  function createIterator(buffer) {
    const iter = new goog.iter.Iterator();
    iter.next = function() {
      if (goog.array.isEmpty(buffer)) {
        const added = addNextIteratorValueToBuffers();
        if (!added) {
          return goog.iter.ES6_ITERATOR_DONE;
        }
      }
      goog.asserts.assert(!goog.array.isEmpty(buffer));
      return goog.iter.createEs6IteratorYield(buffer.shift());
    };
    return iter;
  }
  return goog.array.map(buffers, createIterator);
};
goog.iter.enumerate = function(iterable, opt_start) {
  return goog.iter.zip(goog.iter.count(opt_start), iterable);
};
goog.iter.limit = function(iterable, limitSize) {
  goog.asserts.assert(goog.math.isInt(limitSize) && limitSize >= 0);
  const iterator = goog.iter.toIterator(iterable);
  const iter = new goog.iter.Iterator();
  let remaining = limitSize;
  iter.next = function() {
    if (remaining-- > 0) {
      return iterator.next();
    }
    return goog.iter.ES6_ITERATOR_DONE;
  };
  return iter;
};
goog.iter.consume = function(iterable, count) {
  goog.asserts.assert(goog.math.isInt(count) && count >= 0);
  const iterator = goog.iter.toIterator(iterable);
  while (count-- > 0) {
    goog.iter.nextOrValue(iterator, null);
  }
  return iterator;
};
goog.iter.slice = function(iterable, start, opt_end) {
  goog.asserts.assert(goog.math.isInt(start) && start >= 0);
  let iterator = goog.iter.consume(iterable, start);
  if (typeof opt_end === "number") {
    goog.asserts.assert(goog.math.isInt(opt_end) && opt_end >= start);
    iterator = goog.iter.limit(iterator, opt_end - start);
  }
  return iterator;
};
goog.iter.hasDuplicates_ = function(arr) {
  const deduped = [];
  goog.array.removeDuplicates(arr, deduped);
  return arr.length != deduped.length;
};
goog.iter.permutations = function(iterable, opt_length) {
  const elements = goog.iter.toArray(iterable);
  const length = typeof opt_length === "number" ? opt_length : elements.length;
  const sets = goog.array.repeat(elements, length);
  const product = goog.iter.product.apply(undefined, sets);
  return goog.iter.filter(product, function(arr) {
    return !goog.iter.hasDuplicates_(arr);
  });
};
goog.iter.combinations = function(iterable, length) {
  const elements = goog.iter.toArray(iterable);
  const indexes = goog.iter.range(elements.length);
  const indexIterator = goog.iter.permutations(indexes, length);
  const sortedIndexIterator = goog.iter.filter(indexIterator, function(arr) {
    return goog.array.isSorted(arr);
  });
  const iter = new goog.iter.Iterator();
  function getIndexFromElements(index) {
    return elements[index];
  }
  iter.next = function() {
    const {done, value} = sortedIndexIterator.next();
    if (done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    return goog.iter.createEs6IteratorYield(goog.array.map(value, getIndexFromElements));
  };
  return iter;
};
goog.iter.combinationsWithReplacement = function(iterable, length) {
  const elements = goog.iter.toArray(iterable);
  const indexes = goog.array.range(elements.length);
  const sets = goog.array.repeat(indexes, length);
  const indexIterator = goog.iter.product.apply(undefined, sets);
  const sortedIndexIterator = goog.iter.filter(indexIterator, function(arr) {
    return goog.array.isSorted(arr);
  });
  const iter = new goog.iter.Iterator();
  function getIndexFromElements(index) {
    return elements[index];
  }
  iter.next = function() {
    const {done, value} = sortedIndexIterator.next();
    if (done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    return goog.iter.createEs6IteratorYield(goog.array.map(value, getIndexFromElements));
  };
  return iter;
};

$CLJS.SHADOW_ENV.setLoaded("goog.iter.iter.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.iter.es6");
  goog.module.declareLegacyNamespace();
  const GoogIterable = goog.require("goog.iter.Iterable");
  const GoogIterator = goog.require("goog.iter.Iterator");
  class ShimIterable {
    __iterator__() {
    }
    toGoog() {
    }
    toEs6() {
    }
    static of(iter) {
      if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator || iter instanceof ShimEs6Iterator) {
        return iter;
      } else if (typeof iter.next == "function") {
        return new ShimIterableImpl(() => iter);
      } else if (typeof iter[Symbol.iterator] == "function") {
        return new ShimIterableImpl(() => iter[Symbol.iterator]());
      } else if (typeof iter.__iterator__ == "function") {
        return new ShimIterableImpl(() => iter.__iterator__());
      }
      throw new Error("Not an iterator or iterable.");
    }
  }
  class ShimIterableImpl {
    constructor(func) {
      this.func_ = func;
    }
    __iterator__() {
      return new ShimGoogIterator(this.func_());
    }
    toGoog() {
      return new ShimGoogIterator(this.func_());
    }
    [Symbol.iterator]() {
      return new ShimEs6Iterator(this.func_());
    }
    toEs6() {
      return new ShimEs6Iterator(this.func_());
    }
  }
  class ShimGoogIterator extends GoogIterator {
    constructor(iter) {
      super();
      this.iter_ = iter;
    }
    next() {
      return this.iter_.next();
    }
    toGoog() {
      return this;
    }
    [Symbol.iterator]() {
      return new ShimEs6Iterator(this.iter_);
    }
    toEs6() {
      return new ShimEs6Iterator(this.iter_);
    }
  }
  class ShimEs6Iterator extends ShimIterableImpl {
    constructor(iter) {
      super(() => iter);
      this.iter_ = iter;
    }
    next() {
      return this.iter_.next();
    }
  }
  exports = {ShimIterable, ShimEs6Iterator, ShimGoogIterator,};
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.iter.es6.js");

goog.provide("goog.structs.Map");
goog.require("goog.collections.iters");
goog.require("goog.iter");
goog.require("goog.iter.Iterator");
goog.require("goog.iter.es6");
goog.structs.Map = function(opt_map, var_args) {
  this.map_ = {};
  this.keys_ = [];
  this.size = 0;
  this.version_ = 0;
  var argLength = arguments.length;
  if (argLength > 1) {
    if (argLength % 2) {
      throw new Error("Uneven number of arguments");
    }
    for (var i = 0; i < argLength; i += 2) {
      this.set(arguments[i], arguments[i + 1]);
    }
  } else if (opt_map) {
    this.addAll(opt_map);
  }
};
goog.structs.Map.prototype.getCount = function() {
  return this.size;
};
goog.structs.Map.prototype.getValues = function() {
  this.cleanupKeysArray_();
  var rv = [];
  for (var i = 0; i < this.keys_.length; i++) {
    var key = this.keys_[i];
    rv.push(this.map_[key]);
  }
  return rv;
};
goog.structs.Map.prototype.getKeys = function() {
  this.cleanupKeysArray_();
  return this.keys_.concat();
};
goog.structs.Map.prototype.containsKey = function(key) {
  return this.has(key);
};
goog.structs.Map.prototype.has = function(key) {
  return goog.structs.Map.hasKey_(this.map_, key);
};
goog.structs.Map.prototype.containsValue = function(val) {
  for (var i = 0; i < this.keys_.length; i++) {
    var key = this.keys_[i];
    if (goog.structs.Map.hasKey_(this.map_, key) && this.map_[key] == val) {
      return true;
    }
  }
  return false;
};
goog.structs.Map.prototype.equals = function(otherMap, opt_equalityFn) {
  if (this === otherMap) {
    return true;
  }
  if (this.size != otherMap.getCount()) {
    return false;
  }
  var equalityFn = opt_equalityFn || goog.structs.Map.defaultEquals;
  this.cleanupKeysArray_();
  for (var key, i = 0; key = this.keys_[i]; i++) {
    if (!equalityFn(this.get(key), otherMap.get(key))) {
      return false;
    }
  }
  return true;
};
goog.structs.Map.defaultEquals = function(a, b) {
  return a === b;
};
goog.structs.Map.prototype.isEmpty = function() {
  return this.size == 0;
};
goog.structs.Map.prototype.clear = function() {
  this.map_ = {};
  this.keys_.length = 0;
  this.setSizeInternal_(0);
  this.version_ = 0;
};
goog.structs.Map.prototype.remove = function(key) {
  return this.delete(key);
};
goog.structs.Map.prototype.delete = function(key) {
  if (goog.structs.Map.hasKey_(this.map_, key)) {
    delete this.map_[key];
    this.setSizeInternal_(this.size - 1);
    this.version_++;
    if (this.keys_.length > 2 * this.size) {
      this.cleanupKeysArray_();
    }
    return true;
  }
  return false;
};
goog.structs.Map.prototype.cleanupKeysArray_ = function() {
  if (this.size != this.keys_.length) {
    var srcIndex = 0;
    var destIndex = 0;
    while (srcIndex < this.keys_.length) {
      var key = this.keys_[srcIndex];
      if (goog.structs.Map.hasKey_(this.map_, key)) {
        this.keys_[destIndex++] = key;
      }
      srcIndex++;
    }
    this.keys_.length = destIndex;
  }
  if (this.size != this.keys_.length) {
    var seen = {};
    var srcIndex = 0;
    var destIndex = 0;
    while (srcIndex < this.keys_.length) {
      var key = this.keys_[srcIndex];
      if (!goog.structs.Map.hasKey_(seen, key)) {
        this.keys_[destIndex++] = key;
        seen[key] = 1;
      }
      srcIndex++;
    }
    this.keys_.length = destIndex;
  }
};
goog.structs.Map.prototype.get = function(key, opt_val) {
  if (goog.structs.Map.hasKey_(this.map_, key)) {
    return this.map_[key];
  }
  return opt_val;
};
goog.structs.Map.prototype.set = function(key, value) {
  if (!goog.structs.Map.hasKey_(this.map_, key)) {
    this.setSizeInternal_(this.size + 1);
    this.keys_.push(key);
    this.version_++;
  }
  this.map_[key] = value;
};
goog.structs.Map.prototype.addAll = function(map) {
  if (map instanceof goog.structs.Map) {
    var keys = map.getKeys();
    for (var i = 0; i < keys.length; i++) {
      this.set(keys[i], map.get(keys[i]));
    }
  } else {
    for (var key in map) {
      this.set(key, map[key]);
    }
  }
};
goog.structs.Map.prototype.forEach = function(f, opt_obj) {
  var keys = this.getKeys();
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = this.get(key);
    f.call(opt_obj, value, key, this);
  }
};
goog.structs.Map.prototype.clone = function() {
  return new goog.structs.Map(this);
};
goog.structs.Map.prototype.transpose = function() {
  var transposed = new goog.structs.Map();
  for (var i = 0; i < this.keys_.length; i++) {
    var key = this.keys_[i];
    var value = this.map_[key];
    transposed.set(value, key);
  }
  return transposed;
};
goog.structs.Map.prototype.toObject = function() {
  this.cleanupKeysArray_();
  var obj = {};
  for (var i = 0; i < this.keys_.length; i++) {
    var key = this.keys_[i];
    obj[key] = this.map_[key];
  }
  return obj;
};
goog.structs.Map.prototype.getKeyIterator = function() {
  return this.__iterator__(true);
};
goog.structs.Map.prototype.keys = function() {
  return goog.iter.es6.ShimIterable.of(this.getKeyIterator()).toEs6();
};
goog.structs.Map.prototype.getValueIterator = function() {
  return this.__iterator__(false);
};
goog.structs.Map.prototype.values = function() {
  return goog.iter.es6.ShimIterable.of(this.getValueIterator()).toEs6();
};
goog.structs.Map.prototype.entries = function() {
  const self = this;
  return goog.collections.iters.map(this.keys(), function(key) {
    return [key, self.get(key)];
  });
};
goog.structs.Map.prototype.__iterator__ = function(opt_keys) {
  this.cleanupKeysArray_();
  var i = 0;
  var version = this.version_;
  var selfObj = this;
  var newIter = new goog.iter.Iterator();
  newIter.next = function() {
    if (version != selfObj.version_) {
      throw new Error("The map has changed since the iterator was created");
    }
    if (i >= selfObj.keys_.length) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    var key = selfObj.keys_[i++];
    return goog.iter.createEs6IteratorYield(opt_keys ? key : selfObj.map_[key]);
  };
  return newIter;
};
goog.structs.Map.prototype.setSizeInternal_ = function(newSize) {
  this.size = newSize;
};
goog.structs.Map.hasKey_ = function(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

$CLJS.SHADOW_ENV.setLoaded("goog.structs.map.js");

goog.provide("goog.window");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.html.SafeUrl");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.labs.userAgent.platform");
goog.require("goog.string");
goog.require("goog.string.Const");
goog.require("goog.userAgent");
goog.requireType("goog.string.TypedString");
goog.window.DEFAULT_POPUP_HEIGHT = 500;
goog.window.DEFAULT_POPUP_WIDTH = 690;
goog.window.DEFAULT_POPUP_TARGET = "google_popup";
goog.window.createFakeWindow_ = function() {
  return {};
};
goog.window.open = function(linkRef, opt_options, opt_parentWin) {
  if (!opt_options) {
    opt_options = {};
  }
  var parentWin = opt_parentWin || window;
  var safeLinkRef;
  if (linkRef instanceof goog.html.SafeUrl) {
    safeLinkRef = linkRef;
  } else {
    var url = typeof linkRef.href != "undefined" ? linkRef.href : String(linkRef);
    safeLinkRef = goog.html.SafeUrl.sanitize(url);
  }
  const browserSupportsCoop = self.crossOriginIsolated !== undefined;
  let referrerPolicy = "strict-origin-when-cross-origin";
  if (window.Request) {
    referrerPolicy = (new Request("/")).referrerPolicy;
  }
  const pageSetsUnsafeReferrerPolicy = referrerPolicy === "unsafe-url";
  let noReferrerOption = opt_options["noreferrer"];
  if (browserSupportsCoop && noReferrerOption) {
    if (pageSetsUnsafeReferrerPolicy) {
      throw new Error("Cannot use the noreferrer option on a page that sets a referrer-policy of `unsafe-url` in modern browsers!");
    }
    noReferrerOption = false;
  }
  var target = opt_options.target || linkRef.target;
  var sb = [];
  for (var option in opt_options) {
    switch(option) {
      case "width":
      case "height":
      case "top":
      case "left":
        sb.push(option + "\x3d" + opt_options[option]);
        break;
      case "target":
      case "noopener":
      case "noreferrer":
        break;
      default:
        sb.push(option + "\x3d" + (opt_options[option] ? 1 : 0));
    }
  }
  var optionString = sb.join(",");
  var newWin;
  if (goog.labs.userAgent.platform.isIos() && parentWin.navigator && parentWin.navigator["standalone"] && target && target != "_self") {
    var a = goog.dom.createElement(goog.dom.TagName.A);
    goog.dom.safe.setAnchorHref(a, safeLinkRef);
    a.target = target;
    if (noReferrerOption) {
      a.rel = "noreferrer";
    }
    var click = document.createEvent("MouseEvent");
    click.initMouseEvent("click", true, true, parentWin, 1);
    a.dispatchEvent(click);
    newWin = goog.window.createFakeWindow_();
  } else if (noReferrerOption) {
    newWin = goog.dom.safe.openInWindow("", parentWin, target, optionString);
    var sanitizedLinkRef = goog.html.SafeUrl.unwrap(safeLinkRef);
    if (newWin) {
      if (goog.userAgent.EDGE_OR_IE) {
        if (goog.string.contains(sanitizedLinkRef, ";")) {
          sanitizedLinkRef = "'" + sanitizedLinkRef.replace(/'/g, "%27") + "'";
        }
      }
      newWin.opener = null;
      if (sanitizedLinkRef === "") {
        sanitizedLinkRef = "javascript:''";
      }
      var safeHtml = goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("b/12014412, meta tag with sanitized URL"), '\x3cmeta name\x3d"referrer" content\x3d"no-referrer"\x3e' + '\x3cmeta http-equiv\x3d"refresh" content\x3d"0; url\x3d' + goog.string.htmlEscape(sanitizedLinkRef) + '"\x3e');
      var newDoc = newWin.document;
      if (newDoc && newDoc.write) {
        goog.dom.safe.documentWrite(newDoc, safeHtml);
        newDoc.close();
      }
    }
  } else {
    newWin = goog.dom.safe.openInWindow(safeLinkRef, parentWin, target, optionString);
    if (newWin && opt_options["noopener"]) {
      newWin.opener = null;
    }
    if (newWin && opt_options["noreferrer"]) {
      newWin.opener = null;
    }
  }
  return newWin;
};
goog.window.openBlank = function(opt_message, opt_options, opt_parentWin) {
  const win = goog.window.open("", opt_options, opt_parentWin);
  if (win && opt_message) {
    const body = win.document.body;
    if (body) {
      body.textContent = opt_message;
    }
  }
  return win;
};
goog.window.popup = function(linkRef, opt_options) {
  if (!opt_options) {
    opt_options = {};
  }
  opt_options["target"] = opt_options["target"] || linkRef["target"] || goog.window.DEFAULT_POPUP_TARGET;
  opt_options["width"] = opt_options["width"] || goog.window.DEFAULT_POPUP_WIDTH;
  opt_options["height"] = opt_options["height"] || goog.window.DEFAULT_POPUP_HEIGHT;
  var newWin = goog.window.open(linkRef, opt_options);
  if (!newWin) {
    return true;
  }
  newWin.focus();
  return false;
};

$CLJS.SHADOW_ENV.setLoaded("goog.window.window.js");

goog.provide("goog.dom.forms");
goog.require("goog.dom.InputType");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.structs.Map");
goog.require("goog.window");
goog.dom.forms.submitFormInNewWindow = function(form, opt_submitElement) {
  var formData = goog.dom.forms.getFormDataMap(form);
  var action = form.action;
  var method = form.method;
  if (opt_submitElement) {
    if (goog.dom.InputType.SUBMIT != opt_submitElement.type.toLowerCase()) {
      throw new Error("opt_submitElement does not have a valid type.");
    }
    var submitValue = goog.dom.forms.getValue(opt_submitElement);
    if (submitValue != null) {
      goog.dom.forms.addFormDataToMap_(formData, opt_submitElement.name, submitValue);
    }
    if (opt_submitElement.getAttribute("formaction")) {
      action = opt_submitElement.getAttribute("formaction");
    }
    if (opt_submitElement.getAttribute("formmethod")) {
      method = opt_submitElement.getAttribute("formmethod");
    }
  }
  return goog.dom.forms.submitFormDataInNewWindow(action, method, formData);
};
goog.dom.forms.submitFormDataInNewWindow = function(actionUri, method, formData) {
  var newWin = goog.window.openBlank("", {noreferrer:true});
  if (!newWin) {
    return false;
  }
  var newDocument = newWin.document;
  var newForm = newDocument.createElement("form");
  newForm.method = method;
  goog.dom.safe.setFormElementAction(newForm, actionUri);
  formData.forEach(function(fieldValues, fieldName) {
    for (var i = 0; i < fieldValues.length; i++) {
      var fieldValue = fieldValues[i];
      var newInput = newDocument.createElement("input");
      newInput.name = fieldName;
      newInput.value = fieldValue;
      newInput.type = "hidden";
      HTMLFormElement.prototype.appendChild.call(newForm, newInput);
    }
  });
  HTMLFormElement.prototype.submit.call(newForm);
  return true;
};
goog.dom.forms.getFormDataMap = function(form) {
  var map = new goog.structs.Map();
  goog.dom.forms.getFormDataHelper_(form, map, goog.dom.forms.addFormDataToMap_);
  return map;
};
goog.dom.forms.getFormDataString = function(form) {
  var sb = [];
  goog.dom.forms.getFormDataHelper_(form, sb, goog.dom.forms.addFormDataToStringBuffer_);
  return sb.join("\x26");
};
goog.dom.forms.getFormDataHelper_ = function(form, result, fnAppend) {
  var els = form.elements;
  for (var el, i = 0; el = els.item(i); i++) {
    if (el.form != form || el.disabled || el.tagName == goog.dom.TagName.FIELDSET) {
      continue;
    }
    var name = el.name;
    switch(el.type.toLowerCase()) {
      case goog.dom.InputType.FILE:
      case goog.dom.InputType.SUBMIT:
      case goog.dom.InputType.RESET:
      case goog.dom.InputType.BUTTON:
        break;
      case goog.dom.InputType.SELECT_MULTIPLE:
        var values = goog.dom.forms.getValue(el);
        if (values != null) {
          for (var value, j = 0; value = values[j]; j++) {
            fnAppend(result, name, value);
          }
        }
        break;
      default:
        var value = goog.dom.forms.getValue(el);
        if (value != null) {
          fnAppend(result, name, value);
        }
    }
  }
  var inputs = form.getElementsByTagName(String(goog.dom.TagName.INPUT));
  for (var input, i = 0; input = inputs[i]; i++) {
    if (input.form == form && input.type.toLowerCase() == goog.dom.InputType.IMAGE) {
      name = input.name;
      fnAppend(result, name, input.value);
      fnAppend(result, name + ".x", "0");
      fnAppend(result, name + ".y", "0");
    }
  }
};
goog.dom.forms.addFormDataToMap_ = function(map, name, value) {
  var array = map.get(name);
  if (!array) {
    array = [];
    map.set(name, array);
  }
  array.push(value);
};
goog.dom.forms.addFormDataToStringBuffer_ = function(sb, name, value) {
  sb.push(encodeURIComponent(name) + "\x3d" + encodeURIComponent(value));
};
goog.dom.forms.hasFileInput = function(form) {
  var els = form.elements;
  for (var el, i = 0; el = els[i]; i++) {
    if (!el.disabled && el.type && el.type.toLowerCase() == goog.dom.InputType.FILE) {
      return true;
    }
  }
  return false;
};
goog.dom.forms.setDisabled = function(el, disabled) {
  if (el.tagName == goog.dom.TagName.FORM) {
    var els = el.elements;
    for (var i = 0; el = els.item(i); i++) {
      goog.dom.forms.setDisabled(el, disabled);
    }
  } else {
    if (disabled == true) {
      el.blur();
    }
    el.disabled = disabled;
  }
};
goog.dom.forms.focusAndSelect = function(el) {
  el.focus();
  if (el.select) {
    el.select();
  }
};
goog.dom.forms.hasValue = function(el) {
  var value = goog.dom.forms.getValue(el);
  return !!value;
};
goog.dom.forms.hasValueByName = function(form, name) {
  var value = goog.dom.forms.getValueByName(form, name);
  return !!value;
};
goog.dom.forms.getValue = function(input) {
  var type = input.type;
  if (typeof type === "string") {
    var el = input;
    switch(type.toLowerCase()) {
      case goog.dom.InputType.CHECKBOX:
      case goog.dom.InputType.RADIO:
        return goog.dom.forms.getInputChecked_(el);
      case goog.dom.InputType.SELECT_ONE:
        return goog.dom.forms.getSelectSingle_(el);
      case goog.dom.InputType.SELECT_MULTIPLE:
        return goog.dom.forms.getSelectMultiple_(el);
      default:
    }
  }
  return input.value != null ? input.value : null;
};
goog.dom.forms.getValueByName = function(form, name) {
  var els = form.elements[name];
  if (!els) {
    return null;
  } else if (els.type) {
    return goog.dom.forms.getValue(els);
  } else {
    for (var i = 0; i < els.length; i++) {
      var val = goog.dom.forms.getValue(els[i]);
      if (val) {
        return val;
      }
    }
    return null;
  }
};
goog.dom.forms.getInputChecked_ = function(el) {
  return el.checked ? el.value : null;
};
goog.dom.forms.getSelectSingle_ = function(el) {
  var selectedIndex = el.selectedIndex;
  return selectedIndex >= 0 ? el.options[selectedIndex].value : null;
};
goog.dom.forms.getSelectMultiple_ = function(el) {
  var values = [];
  for (var option, i = 0; option = el.options[i]; i++) {
    if (option.selected) {
      values.push(option.value);
    }
  }
  return values.length ? values : null;
};
goog.dom.forms.setValue = function(el, opt_value) {
  var type = el.type;
  switch(typeof type === "string" && type.toLowerCase()) {
    case goog.dom.InputType.CHECKBOX:
    case goog.dom.InputType.RADIO:
      goog.dom.forms.setInputChecked_(el, opt_value);
      return;
    case goog.dom.InputType.SELECT_ONE:
      goog.dom.forms.setSelectSingle_(el, opt_value);
      return;
    case goog.dom.InputType.SELECT_MULTIPLE:
      goog.dom.forms.setSelectMultiple_(el, opt_value);
      return;
    default:
      el.value = opt_value != null ? opt_value : "";
  }
};
goog.dom.forms.setInputChecked_ = function(el, opt_value) {
  el.checked = opt_value;
};
goog.dom.forms.setSelectSingle_ = function(el, opt_value) {
  el.selectedIndex = -1;
  if (typeof opt_value === "string") {
    for (var option, i = 0; option = el.options[i]; i++) {
      if (option.value == opt_value) {
        option.selected = true;
        break;
      }
    }
  }
};
goog.dom.forms.setSelectMultiple_ = function(el, opt_value) {
  if (typeof opt_value === "string") {
    opt_value = [opt_value];
  }
  for (var option, i = 0; option = el.options[i]; i++) {
    option.selected = false;
    if (opt_value) {
      for (var value, j = 0; value = opt_value[j]; j++) {
        if (option.value == value) {
          option.selected = true;
        }
      }
    }
  }
};

$CLJS.SHADOW_ENV.setLoaded("goog.dom.forms.js");

goog.provide("goog.dom.classlist");
goog.require("goog.array");
goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST = goog.define("goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST", false);
goog.dom.classlist.getClassName_ = function(element) {
  return typeof element.className == "string" ? element.className : element.getAttribute && element.getAttribute("class") || "";
};
goog.dom.classlist.get = function(element) {
  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {
    return element.classList;
  }
  return goog.dom.classlist.getClassName_(element).match(/\S+/g) || [];
};
goog.dom.classlist.set = function(element, className) {
  if (typeof element.className == "string") {
    element.className = className;
    return;
  } else if (element.setAttribute) {
    element.setAttribute("class", className);
  }
};
goog.dom.classlist.contains = function(element, className) {
  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {
    return element.classList.contains(className);
  }
  return goog.array.contains(goog.dom.classlist.get(element), className);
};
goog.dom.classlist.add = function(element, className) {
  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {
    element.classList.add(className);
    return;
  }
  if (!goog.dom.classlist.contains(element, className)) {
    var oldClassName = goog.dom.classlist.getClassName_(element);
    goog.dom.classlist.set(element, oldClassName + (oldClassName.length > 0 ? " " + className : className));
  }
};
goog.dom.classlist.addAll = function(element, classesToAdd) {
  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {
    Array.prototype.forEach.call(classesToAdd, function(className) {
      goog.dom.classlist.add(element, className);
    });
    return;
  }
  var classMap = {};
  Array.prototype.forEach.call(goog.dom.classlist.get(element), function(className) {
    classMap[className] = true;
  });
  Array.prototype.forEach.call(classesToAdd, function(className) {
    classMap[className] = true;
  });
  var newClassName = "";
  for (var className in classMap) {
    newClassName += newClassName.length > 0 ? " " + className : className;
  }
  goog.dom.classlist.set(element, newClassName);
};
goog.dom.classlist.remove = function(element, className) {
  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {
    element.classList.remove(className);
    return;
  }
  if (goog.dom.classlist.contains(element, className)) {
    goog.dom.classlist.set(element, Array.prototype.filter.call(goog.dom.classlist.get(element), function(c) {
      return c != className;
    }).join(" "));
  }
};
goog.dom.classlist.removeAll = function(element, classesToRemove) {
  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {
    Array.prototype.forEach.call(classesToRemove, function(className) {
      goog.dom.classlist.remove(element, className);
    });
    return;
  }
  goog.dom.classlist.set(element, Array.prototype.filter.call(goog.dom.classlist.get(element), function(className) {
    return !goog.array.contains(classesToRemove, className);
  }).join(" "));
};
goog.dom.classlist.enable = function(element, className, enabled) {
  if (enabled) {
    goog.dom.classlist.add(element, className);
  } else {
    goog.dom.classlist.remove(element, className);
  }
};
goog.dom.classlist.enableAll = function(element, classesToEnable, enabled) {
  var f = enabled ? goog.dom.classlist.addAll : goog.dom.classlist.removeAll;
  f(element, classesToEnable);
};
goog.dom.classlist.swap = function(element, fromClass, toClass) {
  if (goog.dom.classlist.contains(element, fromClass)) {
    goog.dom.classlist.remove(element, fromClass);
    goog.dom.classlist.add(element, toClass);
    return true;
  }
  return false;
};
goog.dom.classlist.toggle = function(element, className) {
  var add = !goog.dom.classlist.contains(element, className);
  goog.dom.classlist.enable(element, className, add);
  return add;
};
goog.dom.classlist.addRemove = function(element, classToRemove, classToAdd) {
  goog.dom.classlist.remove(element, classToRemove);
  goog.dom.classlist.add(element, classToAdd);
};

$CLJS.SHADOW_ENV.setLoaded("goog.dom.classlist.js");

goog.provide("goog.dom.vendor");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.dom.vendor.getVendorJsPrefix = function() {
  if (goog.userAgent.WEBKIT) {
    return "Webkit";
  } else if (goog.userAgent.GECKO) {
    return "Moz";
  } else if (goog.userAgent.IE) {
    return "ms";
  }
  return null;
};
goog.dom.vendor.getVendorPrefix = function() {
  if (goog.userAgent.WEBKIT) {
    return "-webkit";
  } else if (goog.userAgent.GECKO) {
    return "-moz";
  } else if (goog.userAgent.IE) {
    return "-ms";
  }
  return null;
};
goog.dom.vendor.getPrefixedPropertyName = function(propertyName, opt_object) {
  if (opt_object && propertyName in opt_object) {
    return propertyName;
  }
  var prefix = goog.dom.vendor.getVendorJsPrefix();
  if (prefix) {
    prefix = prefix.toLowerCase();
    var prefixedPropertyName = prefix + goog.string.toTitleCase(propertyName);
    return opt_object === undefined || prefixedPropertyName in opt_object ? prefixedPropertyName : null;
  }
  return null;
};
goog.dom.vendor.getPrefixedEventType = function(eventType) {
  var prefix = goog.dom.vendor.getVendorJsPrefix() || "";
  return (prefix + eventType).toLowerCase();
};

$CLJS.SHADOW_ENV.setLoaded("goog.dom.vendor.js");

goog.provide("goog.math.Box");
goog.require("goog.asserts");
goog.require("goog.math.Coordinate");
goog.math.Box = function(top, right, bottom, left) {
  this.top = top;
  this.right = right;
  this.bottom = bottom;
  this.left = left;
};
goog.math.Box.boundingBox = function(var_args) {
  var box = new goog.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x);
  for (var i = 1; i < arguments.length; i++) {
    box.expandToIncludeCoordinate(arguments[i]);
  }
  return box;
};
goog.math.Box.prototype.getWidth = function() {
  return this.right - this.left;
};
goog.math.Box.prototype.getHeight = function() {
  return this.bottom - this.top;
};
goog.math.Box.prototype.clone = function() {
  return new goog.math.Box(this.top, this.right, this.bottom, this.left);
};
if (goog.DEBUG) {
  goog.math.Box.prototype.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
  };
}
goog.math.Box.prototype.contains = function(other) {
  return goog.math.Box.contains(this, other);
};
goog.math.Box.prototype.expand = function(top, opt_right, opt_bottom, opt_left) {
  if (goog.isObject(top)) {
    this.top -= top.top;
    this.right += top.right;
    this.bottom += top.bottom;
    this.left -= top.left;
  } else {
    this.top -= top;
    this.right += Number(opt_right);
    this.bottom += Number(opt_bottom);
    this.left -= Number(opt_left);
  }
  return this;
};
goog.math.Box.prototype.expandToInclude = function(box) {
  this.left = Math.min(this.left, box.left);
  this.top = Math.min(this.top, box.top);
  this.right = Math.max(this.right, box.right);
  this.bottom = Math.max(this.bottom, box.bottom);
};
goog.math.Box.prototype.expandToIncludeCoordinate = function(coord) {
  this.top = Math.min(this.top, coord.y);
  this.right = Math.max(this.right, coord.x);
  this.bottom = Math.max(this.bottom, coord.y);
  this.left = Math.min(this.left, coord.x);
};
goog.math.Box.equals = function(a, b) {
  if (a == b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left;
};
goog.math.Box.contains = function(box, other) {
  if (!box || !other) {
    return false;
  }
  if (other instanceof goog.math.Box) {
    return other.left >= box.left && other.right <= box.right && other.top >= box.top && other.bottom <= box.bottom;
  }
  return other.x >= box.left && other.x <= box.right && other.y >= box.top && other.y <= box.bottom;
};
goog.math.Box.relativePositionX = function(box, coord) {
  if (coord.x < box.left) {
    return coord.x - box.left;
  } else if (coord.x > box.right) {
    return coord.x - box.right;
  }
  return 0;
};
goog.math.Box.relativePositionY = function(box, coord) {
  if (coord.y < box.top) {
    return coord.y - box.top;
  } else if (coord.y > box.bottom) {
    return coord.y - box.bottom;
  }
  return 0;
};
goog.math.Box.distance = function(box, coord) {
  var x = goog.math.Box.relativePositionX(box, coord);
  var y = goog.math.Box.relativePositionY(box, coord);
  return Math.sqrt(x * x + y * y);
};
goog.math.Box.intersects = function(a, b) {
  return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom;
};
goog.math.Box.intersectsWithPadding = function(a, b, padding) {
  return a.left <= b.right + padding && b.left <= a.right + padding && a.top <= b.bottom + padding && b.top <= a.bottom + padding;
};
goog.math.Box.prototype.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
goog.math.Box.prototype.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
goog.math.Box.prototype.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
goog.math.Box.prototype.translate = function(tx, opt_ty) {
  if (tx instanceof goog.math.Coordinate) {
    this.left += tx.x;
    this.right += tx.x;
    this.top += tx.y;
    this.bottom += tx.y;
  } else {
    goog.asserts.assertNumber(tx);
    this.left += tx;
    this.right += tx;
    if (typeof opt_ty === "number") {
      this.top += opt_ty;
      this.bottom += opt_ty;
    }
  }
  return this;
};
goog.math.Box.prototype.scale = function(sx, opt_sy) {
  var sy = typeof opt_sy === "number" ? opt_sy : sx;
  this.left *= sx;
  this.right *= sx;
  this.top *= sy;
  this.bottom *= sy;
  return this;
};

$CLJS.SHADOW_ENV.setLoaded("goog.math.box.js");

goog.provide("goog.math.IRect");
goog.math.IRect = function() {
};
goog.math.IRect.prototype.left;
goog.math.IRect.prototype.top;
goog.math.IRect.prototype.width;
goog.math.IRect.prototype.height;

$CLJS.SHADOW_ENV.setLoaded("goog.math.irect.js");

goog.provide("goog.math.Rect");
goog.require("goog.asserts");
goog.require("goog.math.Box");
goog.require("goog.math.Coordinate");
goog.require("goog.math.IRect");
goog.require("goog.math.Size");
goog.math.Rect = function(x, y, w, h) {
  this.left = x;
  this.top = y;
  this.width = w;
  this.height = h;
};
goog.math.Rect.prototype.clone = function() {
  return new goog.math.Rect(this.left, this.top, this.width, this.height);
};
goog.math.Rect.prototype.toBox = function() {
  var right = this.left + this.width;
  var bottom = this.top + this.height;
  return new goog.math.Box(this.top, right, bottom, this.left);
};
goog.math.Rect.createFromPositionAndSize = function(position, size) {
  return new goog.math.Rect(position.x, position.y, size.width, size.height);
};
goog.math.Rect.createFromBox = function(box) {
  return new goog.math.Rect(box.left, box.top, box.right - box.left, box.bottom - box.top);
};
if (goog.DEBUG) {
  goog.math.Rect.prototype.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)";
  };
}
goog.math.Rect.equals = function(a, b) {
  if (a == b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.left == b.left && a.width == b.width && a.top == b.top && a.height == b.height;
};
goog.math.Rect.prototype.intersection = function(rect) {
  var x0 = Math.max(this.left, rect.left);
  var x1 = Math.min(this.left + this.width, rect.left + rect.width);
  if (x0 <= x1) {
    var y0 = Math.max(this.top, rect.top);
    var y1 = Math.min(this.top + this.height, rect.top + rect.height);
    if (y0 <= y1) {
      this.left = x0;
      this.top = y0;
      this.width = x1 - x0;
      this.height = y1 - y0;
      return true;
    }
  }
  return false;
};
goog.math.Rect.intersection = function(a, b) {
  var x0 = Math.max(a.left, b.left);
  var x1 = Math.min(a.left + a.width, b.left + b.width);
  if (x0 <= x1) {
    var y0 = Math.max(a.top, b.top);
    var y1 = Math.min(a.top + a.height, b.top + b.height);
    if (y0 <= y1) {
      return new goog.math.Rect(x0, y0, x1 - x0, y1 - y0);
    }
  }
  return null;
};
goog.math.Rect.intersects = function(a, b) {
  return a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
};
goog.math.Rect.prototype.intersects = function(rect) {
  return goog.math.Rect.intersects(this, rect);
};
goog.math.Rect.difference = function(a, b) {
  var intersection = goog.math.Rect.intersection(a, b);
  if (!intersection || !intersection.height || !intersection.width) {
    return [a.clone()];
  }
  var result = [];
  var top = a.top;
  var height = a.height;
  var ar = a.left + a.width;
  var ab = a.top + a.height;
  var br = b.left + b.width;
  var bb = b.top + b.height;
  if (b.top > a.top) {
    result.push(new goog.math.Rect(a.left, a.top, a.width, b.top - a.top));
    top = b.top;
    height -= b.top - a.top;
  }
  if (bb < ab) {
    result.push(new goog.math.Rect(a.left, bb, a.width, ab - bb));
    height = bb - top;
  }
  if (b.left > a.left) {
    result.push(new goog.math.Rect(a.left, top, b.left - a.left, height));
  }
  if (br < ar) {
    result.push(new goog.math.Rect(br, top, ar - br, height));
  }
  return result;
};
goog.math.Rect.prototype.difference = function(rect) {
  return goog.math.Rect.difference(this, rect);
};
goog.math.Rect.prototype.boundingRect = function(rect) {
  var right = Math.max(this.left + this.width, rect.left + rect.width);
  var bottom = Math.max(this.top + this.height, rect.top + rect.height);
  this.left = Math.min(this.left, rect.left);
  this.top = Math.min(this.top, rect.top);
  this.width = right - this.left;
  this.height = bottom - this.top;
};
goog.math.Rect.boundingRect = function(a, b) {
  if (!a || !b) {
    return null;
  }
  var newRect = new goog.math.Rect(a.left, a.top, a.width, a.height);
  newRect.boundingRect(b);
  return newRect;
};
goog.math.Rect.prototype.contains = function(another) {
  if (another instanceof goog.math.Coordinate) {
    return another.x >= this.left && another.x <= this.left + this.width && another.y >= this.top && another.y <= this.top + this.height;
  } else {
    return this.left <= another.left && this.left + this.width >= another.left + another.width && this.top <= another.top && this.top + this.height >= another.top + another.height;
  }
};
goog.math.Rect.prototype.squaredDistance = function(point) {
  var dx = point.x < this.left ? this.left - point.x : Math.max(point.x - (this.left + this.width), 0);
  var dy = point.y < this.top ? this.top - point.y : Math.max(point.y - (this.top + this.height), 0);
  return dx * dx + dy * dy;
};
goog.math.Rect.prototype.distance = function(point) {
  return Math.sqrt(this.squaredDistance(point));
};
goog.math.Rect.prototype.getSize = function() {
  return new goog.math.Size(this.width, this.height);
};
goog.math.Rect.prototype.getTopLeft = function() {
  return new goog.math.Coordinate(this.left, this.top);
};
goog.math.Rect.prototype.getCenter = function() {
  return new goog.math.Coordinate(this.left + this.width / 2, this.top + this.height / 2);
};
goog.math.Rect.prototype.getBottomRight = function() {
  return new goog.math.Coordinate(this.left + this.width, this.top + this.height);
};
goog.math.Rect.prototype.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
goog.math.Rect.prototype.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
goog.math.Rect.prototype.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
goog.math.Rect.prototype.translate = function(tx, opt_ty) {
  if (tx instanceof goog.math.Coordinate) {
    this.left += tx.x;
    this.top += tx.y;
  } else {
    this.left += goog.asserts.assertNumber(tx);
    if (typeof opt_ty === "number") {
      this.top += opt_ty;
    }
  }
  return this;
};
goog.math.Rect.prototype.scale = function(sx, opt_sy) {
  var sy = typeof opt_sy === "number" ? opt_sy : sx;
  this.left *= sx;
  this.width *= sx;
  this.top *= sy;
  this.height *= sy;
  return this;
};

$CLJS.SHADOW_ENV.setLoaded("goog.math.rect.js");

goog.provide("goog.style");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.NodeType");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.dom.vendor");
goog.require("goog.html.SafeStyleSheet");
goog.require("goog.math.Box");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Rect");
goog.require("goog.math.Size");
goog.require("goog.object");
goog.require("goog.reflect");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.requireType("goog.events.Event");
goog.style.setStyle = function(element, style, opt_value) {
  if (typeof style === "string") {
    goog.style.setStyle_(element, opt_value, style);
  } else {
    for (var key in style) {
      goog.style.setStyle_(element, style[key], key);
    }
  }
};
goog.style.setStyle_ = function(element, value, style) {
  var propertyName = goog.style.getVendorJsStyleName_(element, style);
  if (propertyName) {
    element.style[propertyName] = value;
  }
};
goog.style.styleNameCache_ = {};
goog.style.getVendorJsStyleName_ = function(element, style) {
  var propertyName = goog.style.styleNameCache_[style];
  if (!propertyName) {
    var camelStyle = goog.string.toCamelCase(style);
    propertyName = camelStyle;
    if (element.style[camelStyle] === undefined) {
      var prefixedStyle = goog.dom.vendor.getVendorJsPrefix() + goog.string.toTitleCase(camelStyle);
      if (element.style[prefixedStyle] !== undefined) {
        propertyName = prefixedStyle;
      }
    }
    goog.style.styleNameCache_[style] = propertyName;
  }
  return propertyName;
};
goog.style.getVendorStyleName_ = function(element, style) {
  var camelStyle = goog.string.toCamelCase(style);
  if (element.style[camelStyle] === undefined) {
    var prefixedStyle = goog.dom.vendor.getVendorJsPrefix() + goog.string.toTitleCase(camelStyle);
    if (element.style[prefixedStyle] !== undefined) {
      return goog.dom.vendor.getVendorPrefix() + "-" + style;
    }
  }
  return style;
};
goog.style.getStyle = function(element, property) {
  var styleValue = element.style[goog.string.toCamelCase(property)];
  if (typeof styleValue !== "undefined") {
    return styleValue;
  }
  return element.style[goog.style.getVendorJsStyleName_(element, property)] || "";
};
goog.style.getComputedStyle = function(element, property) {
  var doc = goog.dom.getOwnerDocument(element);
  if (doc.defaultView && doc.defaultView.getComputedStyle) {
    var styles = doc.defaultView.getComputedStyle(element, null);
    if (styles) {
      return styles[property] || styles.getPropertyValue(property) || "";
    }
  }
  return "";
};
goog.style.getCascadedStyle = function(element, style) {
  return element.currentStyle ? element.currentStyle[style] : null;
};
goog.style.getStyle_ = function(element, style) {
  return goog.style.getComputedStyle(element, style) || goog.style.getCascadedStyle(element, style) || element.style && element.style[style];
};
goog.style.getComputedBoxSizing = function(element) {
  return goog.style.getStyle_(element, "boxSizing") || goog.style.getStyle_(element, "MozBoxSizing") || goog.style.getStyle_(element, "WebkitBoxSizing") || null;
};
goog.style.getComputedPosition = function(element) {
  return goog.style.getStyle_(element, "position");
};
goog.style.getBackgroundColor = function(element) {
  return goog.style.getStyle_(element, "backgroundColor");
};
goog.style.getComputedOverflowX = function(element) {
  return goog.style.getStyle_(element, "overflowX");
};
goog.style.getComputedOverflowY = function(element) {
  return goog.style.getStyle_(element, "overflowY");
};
goog.style.getComputedZIndex = function(element) {
  return goog.style.getStyle_(element, "zIndex");
};
goog.style.getComputedTextAlign = function(element) {
  return goog.style.getStyle_(element, "textAlign");
};
goog.style.getComputedCursor = function(element) {
  return goog.style.getStyle_(element, "cursor");
};
goog.style.getComputedTransform = function(element) {
  var property = goog.style.getVendorStyleName_(element, "transform");
  return goog.style.getStyle_(element, property) || goog.style.getStyle_(element, "transform");
};
goog.style.setPosition = function(el, arg1, opt_arg2) {
  var x, y;
  if (arg1 instanceof goog.math.Coordinate) {
    x = arg1.x;
    y = arg1.y;
  } else {
    x = arg1;
    y = opt_arg2;
  }
  el.style.left = goog.style.getPixelStyleValue_(x, false);
  el.style.top = goog.style.getPixelStyleValue_(y, false);
};
goog.style.getPosition = function(element) {
  return new goog.math.Coordinate(element.offsetLeft, element.offsetTop);
};
goog.style.getClientViewportElement = function(opt_node) {
  var doc;
  if (opt_node) {
    doc = goog.dom.getOwnerDocument(opt_node);
  } else {
    doc = goog.dom.getDocument();
  }
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9) && !goog.dom.getDomHelper(doc).isCss1CompatMode()) {
    return doc.body;
  }
  return doc.documentElement;
};
goog.style.getViewportPageOffset = function(doc) {
  var body = doc.body;
  var documentElement = doc.documentElement;
  var scrollLeft = body.scrollLeft || documentElement.scrollLeft;
  var scrollTop = body.scrollTop || documentElement.scrollTop;
  return new goog.math.Coordinate(scrollLeft, scrollTop);
};
goog.style.getBoundingClientRect_ = function(el) {
  try {
    return el.getBoundingClientRect();
  } catch (e) {
    return {"left":0, "top":0, "right":0, "bottom":0};
  }
};
goog.style.getOffsetParent = function(element) {
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(8)) {
    goog.asserts.assert(element && "offsetParent" in element);
    return element.offsetParent;
  }
  var doc = goog.dom.getOwnerDocument(element);
  var positionStyle = goog.style.getStyle_(element, "position");
  var skipStatic = positionStyle == "fixed" || positionStyle == "absolute";
  for (var parent = element.parentNode; parent && parent != doc; parent = parent.parentNode) {
    if (parent.nodeType == goog.dom.NodeType.DOCUMENT_FRAGMENT && parent.host) {
      parent = parent.host;
    }
    positionStyle = goog.style.getStyle_(parent, "position");
    skipStatic = skipStatic && positionStyle == "static" && parent != doc.documentElement && parent != doc.body;
    if (!skipStatic && (parent.scrollWidth > parent.clientWidth || parent.scrollHeight > parent.clientHeight || positionStyle == "fixed" || positionStyle == "absolute" || positionStyle == "relative")) {
      return parent;
    }
  }
  return null;
};
goog.style.getVisibleRectForElement = function(element) {
  var visibleRect = new goog.math.Box(0, Infinity, Infinity, 0);
  var dom = goog.dom.getDomHelper(element);
  var body = dom.getDocument().body;
  var documentElement = dom.getDocument().documentElement;
  var scrollEl = dom.getDocumentScrollElement();
  for (var el = element; el = goog.style.getOffsetParent(el);) {
    if ((!goog.userAgent.IE || el.clientWidth != 0) && (!goog.userAgent.WEBKIT || el.clientHeight != 0 || el != body) && (el != body && el != documentElement && goog.style.getStyle_(el, "overflow") != "visible")) {
      var pos = goog.style.getPageOffset(el);
      var client = goog.style.getClientLeftTop(el);
      pos.x += client.x;
      pos.y += client.y;
      visibleRect.top = Math.max(visibleRect.top, pos.y);
      visibleRect.right = Math.min(visibleRect.right, pos.x + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.y + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.x);
    }
  }
  var scrollX = scrollEl.scrollLeft, scrollY = scrollEl.scrollTop;
  visibleRect.left = Math.max(visibleRect.left, scrollX);
  visibleRect.top = Math.max(visibleRect.top, scrollY);
  var winSize = dom.getViewportSize();
  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
};
goog.style.getContainerOffsetToScrollInto = function(element, opt_container, opt_center) {
  var container = opt_container || goog.dom.getDocumentScrollElement();
  var elementPos = goog.style.getPageOffset(element);
  var containerPos = goog.style.getPageOffset(container);
  var containerBorder = goog.style.getBorderBox(container);
  if (container == goog.dom.getDocumentScrollElement()) {
    var relX = elementPos.x - container.scrollLeft;
    var relY = elementPos.y - container.scrollTop;
    if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(10)) {
      relX += containerBorder.left;
      relY += containerBorder.top;
    }
  } else {
    var relX = elementPos.x - containerPos.x - containerBorder.left;
    var relY = elementPos.y - containerPos.y - containerBorder.top;
  }
  var elementSize = goog.style.getSizeWithDisplay_(element);
  var spaceX = container.clientWidth - elementSize.width;
  var spaceY = container.clientHeight - elementSize.height;
  var scrollLeft = container.scrollLeft;
  var scrollTop = container.scrollTop;
  if (opt_center) {
    scrollLeft += relX - spaceX / 2;
    scrollTop += relY - spaceY / 2;
  } else {
    scrollLeft += Math.min(relX, Math.max(relX - spaceX, 0));
    scrollTop += Math.min(relY, Math.max(relY - spaceY, 0));
  }
  return new goog.math.Coordinate(scrollLeft, scrollTop);
};
goog.style.scrollIntoContainerView = function(element, opt_container, opt_center) {
  var container = opt_container || goog.dom.getDocumentScrollElement();
  var offset = goog.style.getContainerOffsetToScrollInto(element, container, opt_center);
  container.scrollLeft = offset.x;
  container.scrollTop = offset.y;
};
goog.style.getClientLeftTop = function(el) {
  return new goog.math.Coordinate(el.clientLeft, el.clientTop);
};
goog.style.getPageOffset = function(el) {
  var doc = goog.dom.getOwnerDocument(el);
  goog.asserts.assertObject(el, "Parameter is required");
  var pos = new goog.math.Coordinate(0, 0);
  var viewportElement = goog.style.getClientViewportElement(doc);
  if (el == viewportElement) {
    return pos;
  }
  var box = goog.style.getBoundingClientRect_(el);
  var scrollCoord = goog.dom.getDomHelper(doc).getDocumentScroll();
  pos.x = box.left + scrollCoord.x;
  pos.y = box.top + scrollCoord.y;
  return pos;
};
goog.style.getPageOffsetLeft = function(el) {
  return goog.style.getPageOffset(el).x;
};
goog.style.getPageOffsetTop = function(el) {
  return goog.style.getPageOffset(el).y;
};
goog.style.getFramedPageOffset = function(el, relativeWin) {
  var position = new goog.math.Coordinate(0, 0);
  var currentWin = goog.dom.getWindow(goog.dom.getOwnerDocument(el));
  if (!goog.reflect.canAccessProperty(currentWin, "parent")) {
    return position;
  }
  var currentEl = el;
  do {
    var offset = currentWin == relativeWin ? goog.style.getPageOffset(currentEl) : goog.style.getClientPositionForElement_(goog.asserts.assert(currentEl));
    position.x += offset.x;
    position.y += offset.y;
  } while (currentWin && currentWin != relativeWin && currentWin != currentWin.parent && (currentEl = currentWin.frameElement) && (currentWin = currentWin.parent));
  return position;
};
goog.style.translateRectForAnotherFrame = function(rect, origBase, newBase) {
  if (origBase.getDocument() != newBase.getDocument()) {
    var body = origBase.getDocument().body;
    var pos = goog.style.getFramedPageOffset(body, newBase.getWindow());
    pos = goog.math.Coordinate.difference(pos, goog.style.getPageOffset(body));
    if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9) && !origBase.isCss1CompatMode()) {
      pos = goog.math.Coordinate.difference(pos, origBase.getDocumentScroll());
    }
    rect.left += pos.x;
    rect.top += pos.y;
  }
};
goog.style.getRelativePosition = function(a, b) {
  var ap = goog.style.getClientPosition(a);
  var bp = goog.style.getClientPosition(b);
  return new goog.math.Coordinate(ap.x - bp.x, ap.y - bp.y);
};
goog.style.getClientPositionForElement_ = function(el) {
  var box = goog.style.getBoundingClientRect_(el);
  return new goog.math.Coordinate(box.left, box.top);
};
goog.style.getClientPosition = function(el) {
  goog.asserts.assert(el);
  if (el.nodeType == goog.dom.NodeType.ELEMENT) {
    return goog.style.getClientPositionForElement_(el);
  } else {
    var targetEvent = el.changedTouches ? el.changedTouches[0] : el;
    return new goog.math.Coordinate(targetEvent.clientX, targetEvent.clientY);
  }
};
goog.style.setPageOffset = function(el, x, opt_y) {
  var cur = goog.style.getPageOffset(el);
  if (x instanceof goog.math.Coordinate) {
    opt_y = x.y;
    x = x.x;
  }
  var dx = goog.asserts.assertNumber(x) - cur.x;
  var dy = Number(opt_y) - cur.y;
  goog.style.setPosition(el, el.offsetLeft + dx, el.offsetTop + dy);
};
goog.style.setSize = function(element, w, opt_h) {
  var h;
  if (w instanceof goog.math.Size) {
    h = w.height;
    w = w.width;
  } else {
    if (opt_h == undefined) {
      throw new Error("missing height argument");
    }
    h = opt_h;
  }
  goog.style.setWidth(element, w);
  goog.style.setHeight(element, h);
};
goog.style.getPixelStyleValue_ = function(value, round) {
  if (typeof value == "number") {
    value = (round ? Math.round(value) : value) + "px";
  }
  return value;
};
goog.style.setHeight = function(element, height) {
  element.style.height = goog.style.getPixelStyleValue_(height, true);
};
goog.style.setWidth = function(element, width) {
  element.style.width = goog.style.getPixelStyleValue_(width, true);
};
goog.style.getSize = function(element) {
  return goog.style.evaluateWithTemporaryDisplay_(goog.style.getSizeWithDisplay_, element);
};
goog.style.evaluateWithTemporaryDisplay_ = function(fn, element) {
  if (goog.style.getStyle_(element, "display") != "none") {
    return fn(element);
  }
  var style = element.style;
  var originalDisplay = style.display;
  var originalVisibility = style.visibility;
  var originalPosition = style.position;
  style.visibility = "hidden";
  style.position = "absolute";
  style.display = "inline";
  var retVal = fn(element);
  style.display = originalDisplay;
  style.position = originalPosition;
  style.visibility = originalVisibility;
  return retVal;
};
goog.style.getSizeWithDisplay_ = function(element) {
  var offsetWidth = element.offsetWidth;
  var offsetHeight = element.offsetHeight;
  var webkitOffsetsZero = goog.userAgent.WEBKIT && !offsetWidth && !offsetHeight;
  if ((offsetWidth === undefined || webkitOffsetsZero) && element.getBoundingClientRect) {
    var clientRect = goog.style.getBoundingClientRect_(element);
    return new goog.math.Size(clientRect.right - clientRect.left, clientRect.bottom - clientRect.top);
  }
  return new goog.math.Size(offsetWidth, offsetHeight);
};
goog.style.getTransformedSize = function(element) {
  if (!element.getBoundingClientRect) {
    return null;
  }
  var clientRect = goog.style.evaluateWithTemporaryDisplay_(goog.style.getBoundingClientRect_, element);
  return new goog.math.Size(clientRect.right - clientRect.left, clientRect.bottom - clientRect.top);
};
goog.style.getBounds = function(element) {
  var o = goog.style.getPageOffset(element);
  var s = goog.style.getSize(element);
  return new goog.math.Rect(o.x, o.y, s.width, s.height);
};
goog.style.toCamelCase = function(selector) {
  return goog.string.toCamelCase(String(selector));
};
goog.style.toSelectorCase = function(selector) {
  return goog.string.toSelectorCase(selector);
};
goog.style.getOpacity = function(el) {
  goog.asserts.assert(el);
  var style = el.style;
  var result = "";
  if ("opacity" in style) {
    result = style.opacity;
  } else if ("MozOpacity" in style) {
    result = style.MozOpacity;
  } else if ("filter" in style) {
    var match = style.filter.match(/alpha\(opacity=([\d.]+)\)/);
    if (match) {
      result = String(match[1] / 100);
    }
  }
  return result == "" ? result : Number(result);
};
goog.style.setOpacity = function(el, alpha) {
  goog.asserts.assert(el);
  var style = el.style;
  if ("opacity" in style) {
    style.opacity = alpha;
  } else if ("MozOpacity" in style) {
    style.MozOpacity = alpha;
  } else if ("filter" in style) {
    if (alpha === "") {
      style.filter = "";
    } else {
      style.filter = "alpha(opacity\x3d" + Number(alpha) * 100 + ")";
    }
  }
};
goog.style.setTransparentBackgroundImage = function(el, src) {
  var style = el.style;
  style.backgroundImage = "url(" + src + ")";
  style.backgroundPosition = "top left";
  style.backgroundRepeat = "no-repeat";
};
goog.style.clearTransparentBackgroundImage = function(el) {
  var style = el.style;
  if ("filter" in style) {
    style.filter = "";
  } else {
    style.backgroundImage = "none";
  }
};
goog.style.showElement = function(el, display) {
  goog.style.setElementShown(el, display);
};
goog.style.setElementShown = function(el, isShown) {
  el.style.display = isShown ? "" : "none";
};
goog.style.isElementShown = function(el) {
  return el.style.display != "none";
};
goog.style.installSafeStyleSheet = function(safeStyleSheet, opt_node) {
  var dh = goog.dom.getDomHelper(opt_node);
  var doc = dh.getDocument();
  if (goog.userAgent.IE && doc.createStyleSheet) {
    var styleSheet = doc.createStyleSheet();
    goog.style.setSafeStyleSheet(styleSheet, safeStyleSheet);
    return styleSheet;
  } else {
    var head = dh.getElementsByTagNameAndClass(goog.dom.TagName.HEAD)[0];
    if (!head) {
      var body = dh.getElementsByTagNameAndClass(goog.dom.TagName.BODY)[0];
      head = dh.createDom(goog.dom.TagName.HEAD);
      body.parentNode.insertBefore(head, body);
    }
    var el = dh.createDom(goog.dom.TagName.STYLE);
    const nonce = goog.dom.safe.getStyleNonce();
    if (nonce) {
      el.setAttribute("nonce", nonce);
    }
    goog.style.setSafeStyleSheet(el, safeStyleSheet);
    dh.appendChild(head, el);
    return el;
  }
};
goog.style.uninstallStyles = function(styleSheet) {
  var node = styleSheet.ownerNode || styleSheet.owningElement || styleSheet;
  goog.dom.removeNode(node);
};
goog.style.setSafeStyleSheet = function(element, safeStyleSheet) {
  var stylesString = goog.html.SafeStyleSheet.unwrap(safeStyleSheet);
  if (goog.userAgent.IE && element.cssText !== undefined) {
    element.cssText = stylesString;
  } else if (goog.global.trustedTypes) {
    goog.dom.setTextContent(element, stylesString);
  } else {
    element.innerHTML = stylesString;
  }
};
goog.style.setPreWrap = function(el) {
  var style = el.style;
  if (goog.userAgent.GECKO) {
    style.whiteSpace = "-moz-pre-wrap";
  } else {
    style.whiteSpace = "pre-wrap";
  }
};
goog.style.setInlineBlock = function(el) {
  var style = el.style;
  style.position = "relative";
  style.display = "inline-block";
};
goog.style.isRightToLeft = function(el) {
  return "rtl" == goog.style.getStyle_(el, "direction");
};
goog.style.unselectableStyle_ = goog.userAgent.GECKO ? "MozUserSelect" : goog.userAgent.WEBKIT || goog.userAgent.EDGE ? "WebkitUserSelect" : null;
goog.style.isUnselectable = function(el) {
  if (goog.style.unselectableStyle_) {
    return el.style[goog.style.unselectableStyle_].toLowerCase() == "none";
  } else if (goog.userAgent.IE) {
    return el.getAttribute("unselectable") == "on";
  }
  return false;
};
goog.style.setUnselectable = function(el, unselectable, opt_noRecurse) {
  var descendants = !opt_noRecurse ? el.getElementsByTagName("*") : null;
  var name = goog.style.unselectableStyle_;
  if (name) {
    var value = unselectable ? "none" : "";
    if (el.style) {
      el.style[name] = value;
    }
    if (descendants) {
      for (var i = 0, descendant; descendant = descendants[i]; i++) {
        if (descendant.style) {
          descendant.style[name] = value;
        }
      }
    }
  } else if (goog.userAgent.IE) {
    var value = unselectable ? "on" : "";
    el.setAttribute("unselectable", value);
    if (descendants) {
      for (var i = 0, descendant; descendant = descendants[i]; i++) {
        descendant.setAttribute("unselectable", value);
      }
    }
  }
};
goog.style.getBorderBoxSize = function(element) {
  return new goog.math.Size(element.offsetWidth, element.offsetHeight);
};
goog.style.setBorderBoxSize = function(element, size) {
  goog.style.setBoxSizingSize_(element, size, "border-box");
};
goog.style.getContentBoxSize = function(element) {
  var doc = goog.dom.getOwnerDocument(element);
  var ieCurrentStyle = goog.userAgent.IE && element.currentStyle;
  if (ieCurrentStyle && goog.dom.getDomHelper(doc).isCss1CompatMode() && ieCurrentStyle.width != "auto" && ieCurrentStyle.height != "auto" && !ieCurrentStyle.boxSizing) {
    var width = goog.style.getIePixelValue_(element, ieCurrentStyle.width, "width", "pixelWidth");
    var height = goog.style.getIePixelValue_(element, ieCurrentStyle.height, "height", "pixelHeight");
    return new goog.math.Size(width, height);
  } else {
    var borderBoxSize = goog.style.getBorderBoxSize(element);
    var paddingBox = goog.style.getPaddingBox(element);
    var borderBox = goog.style.getBorderBox(element);
    return new goog.math.Size(borderBoxSize.width - borderBox.left - paddingBox.left - paddingBox.right - borderBox.right, borderBoxSize.height - borderBox.top - paddingBox.top - paddingBox.bottom - borderBox.bottom);
  }
};
goog.style.setContentBoxSize = function(element, size) {
  goog.style.setBoxSizingSize_(element, size, "content-box");
};
goog.style.setBoxSizingSize_ = function(element, size, boxSizing) {
  var style = element.style;
  if (goog.userAgent.GECKO) {
    style.MozBoxSizing = boxSizing;
  } else if (goog.userAgent.WEBKIT) {
    style.WebkitBoxSizing = boxSizing;
  } else {
    style.boxSizing = boxSizing;
  }
  style.width = Math.max(size.width, 0) + "px";
  style.height = Math.max(size.height, 0) + "px";
};
goog.style.getIePixelValue_ = function(element, value, name, pixelName) {
  if (/^\d+px?$/.test(value)) {
    return parseInt(value, 10);
  } else {
    var oldStyleValue = element.style[name];
    var oldRuntimeValue = element.runtimeStyle[name];
    element.runtimeStyle[name] = element.currentStyle[name];
    element.style[name] = value;
    var pixelValue = element.style[pixelName];
    element.style[name] = oldStyleValue;
    element.runtimeStyle[name] = oldRuntimeValue;
    return +pixelValue;
  }
};
goog.style.getIePixelDistance_ = function(element, propName) {
  var value = goog.style.getCascadedStyle(element, propName);
  return value ? goog.style.getIePixelValue_(element, value, "left", "pixelLeft") : 0;
};
goog.style.getBox_ = function(element, stylePrefix) {
  if (goog.userAgent.IE) {
    var left = goog.style.getIePixelDistance_(element, stylePrefix + "Left");
    var right = goog.style.getIePixelDistance_(element, stylePrefix + "Right");
    var top = goog.style.getIePixelDistance_(element, stylePrefix + "Top");
    var bottom = goog.style.getIePixelDistance_(element, stylePrefix + "Bottom");
    return new goog.math.Box(top, right, bottom, left);
  } else {
    var left = goog.style.getComputedStyle(element, stylePrefix + "Left");
    var right = goog.style.getComputedStyle(element, stylePrefix + "Right");
    var top = goog.style.getComputedStyle(element, stylePrefix + "Top");
    var bottom = goog.style.getComputedStyle(element, stylePrefix + "Bottom");
    return new goog.math.Box(parseFloat(top), parseFloat(right), parseFloat(bottom), parseFloat(left));
  }
};
goog.style.getPaddingBox = function(element) {
  return goog.style.getBox_(element, "padding");
};
goog.style.getMarginBox = function(element) {
  return goog.style.getBox_(element, "margin");
};
goog.style.ieBorderWidthKeywords_ = {"thin":2, "medium":4, "thick":6};
goog.style.getIePixelBorder_ = function(element, prop) {
  if (goog.style.getCascadedStyle(element, prop + "Style") == "none") {
    return 0;
  }
  var width = goog.style.getCascadedStyle(element, prop + "Width");
  if (width in goog.style.ieBorderWidthKeywords_) {
    return goog.style.ieBorderWidthKeywords_[width];
  }
  return goog.style.getIePixelValue_(element, width, "left", "pixelLeft");
};
goog.style.getBorderBox = function(element) {
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
    var left = goog.style.getIePixelBorder_(element, "borderLeft");
    var right = goog.style.getIePixelBorder_(element, "borderRight");
    var top = goog.style.getIePixelBorder_(element, "borderTop");
    var bottom = goog.style.getIePixelBorder_(element, "borderBottom");
    return new goog.math.Box(top, right, bottom, left);
  } else {
    var left = goog.style.getComputedStyle(element, "borderLeftWidth");
    var right = goog.style.getComputedStyle(element, "borderRightWidth");
    var top = goog.style.getComputedStyle(element, "borderTopWidth");
    var bottom = goog.style.getComputedStyle(element, "borderBottomWidth");
    return new goog.math.Box(parseFloat(top), parseFloat(right), parseFloat(bottom), parseFloat(left));
  }
};
goog.style.getFontFamily = function(el) {
  var doc = goog.dom.getOwnerDocument(el);
  var font = "";
  if (doc.body.createTextRange && goog.dom.contains(doc, el)) {
    var range = doc.body.createTextRange();
    range.moveToElementText(el);
    try {
      font = range.queryCommandValue("FontName");
    } catch (e) {
      font = "";
    }
  }
  if (!font) {
    font = goog.style.getStyle_(el, "fontFamily");
  }
  var fontsArray = font.split(",");
  if (fontsArray.length > 1) {
    font = fontsArray[0];
  }
  return goog.string.stripQuotes(font, "\"'");
};
goog.style.lengthUnitRegex_ = /[^\d]+$/;
goog.style.getLengthUnits = function(value) {
  var units = value.match(goog.style.lengthUnitRegex_);
  return units && units[0] || null;
};
goog.style.ABSOLUTE_CSS_LENGTH_UNITS_ = {"cm":1, "in":1, "mm":1, "pc":1, "pt":1};
goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_ = {"em":1, "ex":1};
goog.style.getFontSize = function(el) {
  var fontSize = goog.style.getStyle_(el, "fontSize");
  var sizeUnits = goog.style.getLengthUnits(fontSize);
  if (fontSize && "px" == sizeUnits) {
    return parseInt(fontSize, 10);
  }
  if (goog.userAgent.IE) {
    if (String(sizeUnits) in goog.style.ABSOLUTE_CSS_LENGTH_UNITS_) {
      return goog.style.getIePixelValue_(el, fontSize, "left", "pixelLeft");
    } else if (el.parentNode && el.parentNode.nodeType == goog.dom.NodeType.ELEMENT && String(sizeUnits) in goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_) {
      var parentElement = el.parentNode;
      var parentSize = goog.style.getStyle_(parentElement, "fontSize");
      return goog.style.getIePixelValue_(parentElement, fontSize == parentSize ? "1em" : fontSize, "left", "pixelLeft");
    }
  }
  var sizeElement = goog.dom.createDom(goog.dom.TagName.SPAN, {"style":"visibility:hidden;position:absolute;" + "line-height:0;padding:0;margin:0;border:0;height:1em;"});
  goog.dom.appendChild(el, sizeElement);
  fontSize = sizeElement.offsetHeight;
  goog.dom.removeNode(sizeElement);
  return fontSize;
};
goog.style.parseStyleAttribute = function(value) {
  var result = {};
  value.split(/\s*;\s*/).forEach(function(pair) {
    var keyValue = pair.match(/\s*([\w-]+)\s*:(.+)/);
    if (keyValue) {
      var styleName = keyValue[1];
      var styleValue = goog.string.trim(keyValue[2]);
      result[goog.string.toCamelCase(styleName.toLowerCase())] = styleValue;
    }
  });
  return result;
};
goog.style.toStyleAttribute = function(obj) {
  var buffer = [];
  goog.object.forEach(obj, function(value, key) {
    buffer.push(goog.string.toSelectorCase(key), ":", value, ";");
  });
  return buffer.join("");
};
goog.style.setFloat = function(el, value) {
  el.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] = value;
};
goog.style.getFloat = function(el) {
  return el.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] || "";
};
goog.style.getScrollbarWidth = function(opt_className) {
  var outerDiv = goog.dom.createElement(goog.dom.TagName.DIV);
  if (opt_className) {
    outerDiv.className = opt_className;
  }
  outerDiv.style.cssText = "overflow:auto;" + "position:absolute;top:0;width:100px;height:100px";
  var innerDiv = goog.dom.createElement(goog.dom.TagName.DIV);
  goog.style.setSize(innerDiv, "200px", "200px");
  outerDiv.appendChild(innerDiv);
  goog.dom.appendChild(goog.dom.getDocument().body, outerDiv);
  var width = outerDiv.offsetWidth - outerDiv.clientWidth;
  goog.dom.removeNode(outerDiv);
  return width;
};
goog.style.MATRIX_TRANSLATION_REGEX_ = new RegExp("matrix\\([0-9\\.\\-]+, [0-9\\.\\-]+, " + "[0-9\\.\\-]+, [0-9\\.\\-]+, " + "([0-9\\.\\-]+)p?x?, ([0-9\\.\\-]+)p?x?\\)");
goog.style.getCssTranslation = function(element) {
  var transform = goog.style.getComputedTransform(element);
  if (!transform) {
    return new goog.math.Coordinate(0, 0);
  }
  var matches = transform.match(goog.style.MATRIX_TRANSLATION_REGEX_);
  if (!matches) {
    return new goog.math.Coordinate(0, 0);
  }
  return new goog.math.Coordinate(parseFloat(matches[1]), parseFloat(matches[2]));
};

$CLJS.SHADOW_ENV.setLoaded("goog.style.style.js");

goog.provide("goog.style.transition");
goog.provide("goog.style.transition.Css3Property");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.dom.vendor");
goog.require("goog.functions");
goog.require("goog.html.SafeHtml");
goog.require("goog.style");
goog.require("goog.userAgent");
goog.style.transition.Css3Property;
goog.style.transition.set = function(element, properties) {
  if (!Array.isArray(properties)) {
    properties = [properties];
  }
  goog.asserts.assert(properties.length > 0, "At least one Css3Property should be specified.");
  var values = properties.map(function(p) {
    if (typeof p === "string") {
      return p;
    } else {
      goog.asserts.assertObject(p, "Expected css3 property to be an object.");
      var propString = p.property + " " + p.duration + "s " + p.timing + " " + p.delay + "s";
      goog.asserts.assert(p.property && typeof p.duration === "number" && p.timing && typeof p.delay === "number", "Unexpected css3 property value: %s", propString);
      return propString;
    }
  });
  goog.style.transition.setPropertyValue_(element, values.join(","));
};
goog.style.transition.removeAll = function(element) {
  goog.style.transition.setPropertyValue_(element, "");
};
goog.style.transition.isSupported = goog.functions.cacheReturnValue(function() {
  if (goog.userAgent.IE) {
    return true;
  }
  var el = goog.dom.createElement(goog.dom.TagName.DIV);
  var transition = "opacity 1s linear";
  var vendorPrefix = goog.dom.vendor.getVendorPrefix();
  var style = {"transition":transition};
  if (vendorPrefix) {
    style[vendorPrefix + "-transition"] = transition;
  }
  goog.dom.safe.setInnerHtml(el, goog.html.SafeHtml.create("div", {"style":style}));
  var testElement = el.firstChild;
  goog.asserts.assert(testElement.nodeType == Node.ELEMENT_NODE);
  return goog.style.getStyle(testElement, "transition") != "";
});
goog.style.transition.setPropertyValue_ = function(element, transitionValue) {
  goog.style.setStyle(element, "transition", transitionValue);
};

$CLJS.SHADOW_ENV.setLoaded("goog.style.transition.js");

goog.provide("goog.string.format");
goog.require("goog.string");
goog.string.format = function(formatString, var_args) {
  const args = Array.prototype.slice.call(arguments);
  const template = args.shift();
  if (typeof template == "undefined") {
    throw new Error("[goog.string.format] Template required");
  }
  const formatRe = /%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g;
  function replacerDemuxer(match, flags, width, dotp, precision, type, offset, wholeString) {
    if (type == "%") {
      return "%";
    }
    const value = args.shift();
    if (typeof value == "undefined") {
      throw new Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = value;
    return goog.string.format.demuxes_[type].apply(null, arguments);
  }
  return template.replace(formatRe, replacerDemuxer);
};
goog.string.format.demuxes_ = {};
goog.string.format.demuxes_["s"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {
  let replacement = value;
  if (isNaN(width) || width == "" || replacement.length >= Number(width)) {
    return replacement;
  }
  if (flags.indexOf("-", 0) > -1) {
    replacement = replacement + goog.string.repeat(" ", Number(width) - replacement.length);
  } else {
    replacement = goog.string.repeat(" ", Number(width) - replacement.length) + replacement;
  }
  return replacement;
};
goog.string.format.demuxes_["f"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {
  let replacement = value.toString();
  if (!(isNaN(precision) || precision == "")) {
    replacement = parseFloat(value).toFixed(precision);
  }
  let sign;
  if (Number(value) < 0) {
    sign = "-";
  } else if (flags.indexOf("+") >= 0) {
    sign = "+";
  } else if (flags.indexOf(" ") >= 0) {
    sign = " ";
  } else {
    sign = "";
  }
  if (Number(value) >= 0) {
    replacement = sign + replacement;
  }
  if (isNaN(width) || replacement.length >= Number(width)) {
    return replacement;
  }
  replacement = isNaN(precision) ? Math.abs(Number(value)).toString() : Math.abs(Number(value)).toFixed(precision);
  const padCount = Number(width) - replacement.length - sign.length;
  if (flags.indexOf("-", 0) >= 0) {
    replacement = sign + replacement + goog.string.repeat(" ", padCount);
  } else {
    const paddingChar = flags.indexOf("0", 0) >= 0 ? "0" : " ";
    replacement = sign + goog.string.repeat(paddingChar, padCount) + replacement;
  }
  return replacement;
};
goog.string.format.demuxes_["d"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {
  return goog.string.format.demuxes_["f"](parseInt(value, 10), flags, width, dotp, 0, type, offset, wholeString);
};
goog.string.format.demuxes_["i"] = goog.string.format.demuxes_["d"];
goog.string.format.demuxes_["u"] = goog.string.format.demuxes_["d"];

$CLJS.SHADOW_ENV.setLoaded("goog.string.stringformat.js");

goog.provide("goog.log");
goog.provide("goog.log.Level");
goog.provide("goog.log.LogBuffer");
goog.provide("goog.log.LogRecord");
goog.provide("goog.log.Logger");
goog.require("goog.asserts");
goog.require("goog.debug");
goog.log.Loggable;
goog.log.ENABLED = goog.define("goog.log.ENABLED", goog.debug.LOGGING_ENABLED);
goog.log.ROOT_LOGGER_NAME = "";
goog.log.Level = class Level {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
  toString() {
    return this.name;
  }
};
goog.log.Level.OFF = new goog.log.Level("OFF", Infinity);
goog.log.Level.SHOUT = new goog.log.Level("SHOUT", 1200);
goog.log.Level.SEVERE = new goog.log.Level("SEVERE", 1000);
goog.log.Level.WARNING = new goog.log.Level("WARNING", 900);
goog.log.Level.INFO = new goog.log.Level("INFO", 800);
goog.log.Level.CONFIG = new goog.log.Level("CONFIG", 700);
goog.log.Level.FINE = new goog.log.Level("FINE", 500);
goog.log.Level.FINER = new goog.log.Level("FINER", 400);
goog.log.Level.FINEST = new goog.log.Level("FINEST", 300);
goog.log.Level.ALL = new goog.log.Level("ALL", 0);
goog.log.Level.PREDEFINED_LEVELS = [goog.log.Level.OFF, goog.log.Level.SHOUT, goog.log.Level.SEVERE, goog.log.Level.WARNING, goog.log.Level.INFO, goog.log.Level.CONFIG, goog.log.Level.FINE, goog.log.Level.FINER, goog.log.Level.FINEST, goog.log.Level.ALL];
goog.log.Level.predefinedLevelsCache_ = null;
goog.log.Level.createPredefinedLevelsCache_ = function() {
  goog.log.Level.predefinedLevelsCache_ = {};
  for (let i = 0, level; level = goog.log.Level.PREDEFINED_LEVELS[i]; i++) {
    goog.log.Level.predefinedLevelsCache_[level.value] = level;
    goog.log.Level.predefinedLevelsCache_[level.name] = level;
  }
};
goog.log.Level.getPredefinedLevel = function(name) {
  if (!goog.log.Level.predefinedLevelsCache_) {
    goog.log.Level.createPredefinedLevelsCache_();
  }
  return goog.log.Level.predefinedLevelsCache_[name] || null;
};
goog.log.Level.getPredefinedLevelByValue = function(value) {
  if (!goog.log.Level.predefinedLevelsCache_) {
    goog.log.Level.createPredefinedLevelsCache_();
  }
  if (value in goog.log.Level.predefinedLevelsCache_) {
    return goog.log.Level.predefinedLevelsCache_[value];
  }
  for (let i = 0; i < goog.log.Level.PREDEFINED_LEVELS.length; ++i) {
    let level = goog.log.Level.PREDEFINED_LEVELS[i];
    if (level.value <= value) {
      return level;
    }
  }
  return null;
};
goog.log.Logger = class Logger {
  getName() {
  }
};
goog.log.Logger.Level = goog.log.Level;
goog.log.LogBuffer = class LogBuffer {
  constructor(capacity) {
    this.capacity_ = typeof capacity === "number" ? capacity : goog.log.LogBuffer.CAPACITY;
    this.buffer_;
    this.curIndex_;
    this.isFull_;
    this.clear();
  }
  addRecord(level, msg, loggerName) {
    if (!this.isBufferingEnabled()) {
      return new goog.log.LogRecord(level, msg, loggerName);
    }
    const curIndex = (this.curIndex_ + 1) % this.capacity_;
    this.curIndex_ = curIndex;
    if (this.isFull_) {
      const ret = this.buffer_[curIndex];
      ret.reset(level, msg, loggerName);
      return ret;
    }
    this.isFull_ = curIndex == this.capacity_ - 1;
    return this.buffer_[curIndex] = new goog.log.LogRecord(level, msg, loggerName);
  }
  forEachRecord(func) {
    const buffer = this.buffer_;
    if (!buffer[0]) {
      return;
    }
    const curIndex = this.curIndex_;
    let i = this.isFull_ ? curIndex : -1;
    do {
      i = (i + 1) % this.capacity_;
      func(buffer[i]);
    } while (i !== curIndex);
  }
  isBufferingEnabled() {
    return this.capacity_ > 0;
  }
  isFull() {
    return this.isFull_;
  }
  clear() {
    this.buffer_ = new Array(this.capacity_);
    this.curIndex_ = -1;
    this.isFull_ = false;
  }
};
goog.log.LogBuffer.instance_;
goog.log.LogBuffer.CAPACITY = goog.define("goog.debug.LogBuffer.CAPACITY", 0);
goog.log.LogBuffer.getInstance = function() {
  if (!goog.log.LogBuffer.instance_) {
    goog.log.LogBuffer.instance_ = new goog.log.LogBuffer(goog.log.LogBuffer.CAPACITY);
  }
  return goog.log.LogBuffer.instance_;
};
goog.log.LogBuffer.isBufferingEnabled = function() {
  return goog.log.LogBuffer.getInstance().isBufferingEnabled();
};
goog.log.LogRecord = class LogRecord {
  constructor(level, msg, loggerName, time, sequenceNumber) {
    this.level_;
    this.loggerName_;
    this.msg_;
    this.time_;
    this.sequenceNumber_;
    this.exception_ = undefined;
    this.reset(level || goog.log.Level.OFF, msg, loggerName, time, sequenceNumber);
  }
  reset(level, msg, loggerName, time, sequenceNumber) {
    this.time_ = time || goog.now();
    this.level_ = level;
    this.msg_ = msg;
    this.loggerName_ = loggerName;
    this.exception_ = undefined;
    this.sequenceNumber_ = typeof sequenceNumber === "number" ? sequenceNumber : goog.log.LogRecord.nextSequenceNumber_;
  }
  getLoggerName() {
    return this.loggerName_;
  }
  setLoggerName(name) {
    this.loggerName_ = name;
  }
  getException() {
    return this.exception_;
  }
  setException(exception) {
    this.exception_ = exception;
  }
  getLevel() {
    return this.level_;
  }
  setLevel(level) {
    this.level_ = level;
  }
  getMessage() {
    return this.msg_;
  }
  setMessage(msg) {
    this.msg_ = msg;
  }
  getMillis() {
    return this.time_;
  }
  setMillis(time) {
    this.time_ = time;
  }
  getSequenceNumber() {
    return this.sequenceNumber_;
  }
};
goog.log.LogRecord.nextSequenceNumber_ = 0;
goog.log.LogRecordHandler;
goog.log.LogRegistryEntry_ = class LogRegistryEntry_ {
  constructor(name, parent = null) {
    this.level = null;
    this.handlers = [];
    this.parent = parent || null;
    this.children = [];
    this.logger = {getName:() => name};
  }
  getEffectiveLevel() {
    if (this.level) {
      return this.level;
    } else if (this.parent) {
      return this.parent.getEffectiveLevel();
    }
    goog.asserts.fail("Root logger has no level set.");
    return goog.log.Level.OFF;
  }
  publish(logRecord) {
    let target = this;
    while (target) {
      target.handlers.forEach(handler => {
        handler(logRecord);
      });
      target = target.parent;
    }
  }
};
goog.log.LogRegistry_ = class LogRegistry_ {
  constructor() {
    this.entries = {};
    const rootLogRegistryEntry = new goog.log.LogRegistryEntry_(goog.log.ROOT_LOGGER_NAME);
    rootLogRegistryEntry.level = goog.log.Level.CONFIG;
    this.entries[goog.log.ROOT_LOGGER_NAME] = rootLogRegistryEntry;
  }
  getLogRegistryEntry(name, level) {
    const entry = this.entries[name];
    if (entry) {
      if (level !== undefined) {
        entry.level = level;
      }
      return entry;
    } else {
      const lastDotIndex = name.lastIndexOf(".");
      const parentName = name.slice(0, Math.max(lastDotIndex, 0));
      const parentLogRegistryEntry = this.getLogRegistryEntry(parentName);
      const logRegistryEntry = new goog.log.LogRegistryEntry_(name, parentLogRegistryEntry);
      this.entries[name] = logRegistryEntry;
      parentLogRegistryEntry.children.push(logRegistryEntry);
      if (level !== undefined) {
        logRegistryEntry.level = level;
      }
      return logRegistryEntry;
    }
  }
  getAllLoggers() {
    return Object.keys(this.entries).map(loggerName => this.entries[loggerName].logger);
  }
};
goog.log.LogRegistry_.getInstance = function() {
  if (!goog.log.LogRegistry_.instance_) {
    goog.log.LogRegistry_.instance_ = new goog.log.LogRegistry_();
  }
  return goog.log.LogRegistry_.instance_;
};
goog.log.LogRegistry_.instance_;
goog.log.getLogger = function(name, level) {
  if (goog.log.ENABLED) {
    const loggerEntry = goog.log.LogRegistry_.getInstance().getLogRegistryEntry(name, level);
    return loggerEntry.logger;
  } else {
    return null;
  }
};
goog.log.getRootLogger = function() {
  if (goog.log.ENABLED) {
    const loggerEntry = goog.log.LogRegistry_.getInstance().getLogRegistryEntry(goog.log.ROOT_LOGGER_NAME);
    return loggerEntry.logger;
  } else {
    return null;
  }
};
goog.log.addHandler = function(logger, handler) {
  if (goog.log.ENABLED && logger) {
    const loggerEntry = goog.log.LogRegistry_.getInstance().getLogRegistryEntry(logger.getName());
    loggerEntry.handlers.push(handler);
  }
};
goog.log.removeHandler = function(logger, handler) {
  if (goog.log.ENABLED && logger) {
    const loggerEntry = goog.log.LogRegistry_.getInstance().getLogRegistryEntry(logger.getName());
    const indexOfHandler = loggerEntry.handlers.indexOf(handler);
    if (indexOfHandler !== -1) {
      loggerEntry.handlers.splice(indexOfHandler, 1);
      return true;
    }
  }
  return false;
};
goog.log.setLevel = function(logger, level) {
  if (goog.log.ENABLED && logger) {
    const loggerEntry = goog.log.LogRegistry_.getInstance().getLogRegistryEntry(logger.getName());
    loggerEntry.level = level;
  }
};
goog.log.getLevel = function(logger) {
  if (goog.log.ENABLED && logger) {
    const loggerEntry = goog.log.LogRegistry_.getInstance().getLogRegistryEntry(logger.getName());
    return loggerEntry.level;
  }
  return null;
};
goog.log.getEffectiveLevel = function(logger) {
  if (goog.log.ENABLED && logger) {
    const loggerEntry = goog.log.LogRegistry_.getInstance().getLogRegistryEntry(logger.getName());
    return loggerEntry.getEffectiveLevel();
  }
  return goog.log.Level.OFF;
};
goog.log.isLoggable = function(logger, level) {
  if (goog.log.ENABLED && logger && level) {
    return level.value >= goog.log.getEffectiveLevel(logger).value;
  }
  return false;
};
goog.log.getAllLoggers = function() {
  if (goog.log.ENABLED) {
    return goog.log.LogRegistry_.getInstance().getAllLoggers();
  }
  return [];
};
goog.log.getLogRecord = function(logger, level, msg, exception = undefined) {
  const logRecord = goog.log.LogBuffer.getInstance().addRecord(level || goog.log.Level.OFF, msg, logger.getName());
  logRecord.setException(exception);
  return logRecord;
};
goog.log.publishLogRecord = function(logger, logRecord) {
  if (goog.log.ENABLED && logger && goog.log.isLoggable(logger, logRecord.getLevel())) {
    const loggerEntry = goog.log.LogRegistry_.getInstance().getLogRegistryEntry(logger.getName());
    loggerEntry.publish(logRecord);
  }
};
goog.log.log = function(logger, level, msg, exception = undefined) {
  if (goog.log.ENABLED && logger && goog.log.isLoggable(logger, level)) {
    level = level || goog.log.Level.OFF;
    const loggerEntry = goog.log.LogRegistry_.getInstance().getLogRegistryEntry(logger.getName());
    if (typeof msg === "function") {
      msg = msg();
    }
    const logRecord = goog.log.LogBuffer.getInstance().addRecord(level, msg, logger.getName());
    logRecord.setException(exception);
    loggerEntry.publish(logRecord);
  }
};
goog.log.error = function(logger, msg, exception = undefined) {
  if (goog.log.ENABLED && logger) {
    goog.log.log(logger, goog.log.Level.SEVERE, msg, exception);
  }
};
goog.log.warning = function(logger, msg, exception = undefined) {
  if (goog.log.ENABLED && logger) {
    goog.log.log(logger, goog.log.Level.WARNING, msg, exception);
  }
};
goog.log.info = function(logger, msg, exception = undefined) {
  if (goog.log.ENABLED && logger) {
    goog.log.log(logger, goog.log.Level.INFO, msg, exception);
  }
};
goog.log.fine = function(logger, msg, exception = undefined) {
  if (goog.log.ENABLED && logger) {
    goog.log.log(logger, goog.log.Level.FINE, msg, exception);
  }
};

$CLJS.SHADOW_ENV.setLoaded("goog.log.log.js");

goog.provide("goog.debug.RelativeTimeProvider");
goog.debug.RelativeTimeProvider = function() {
  this.relativeTimeStart_ = goog.now();
};
goog.debug.RelativeTimeProvider.defaultInstance_ = null;
goog.debug.RelativeTimeProvider.prototype.set = function(timeStamp) {
  this.relativeTimeStart_ = timeStamp;
};
goog.debug.RelativeTimeProvider.prototype.reset = function() {
  this.set(goog.now());
};
goog.debug.RelativeTimeProvider.prototype.get = function() {
  return this.relativeTimeStart_;
};
goog.debug.RelativeTimeProvider.getDefaultInstance = function() {
  if (!goog.debug.RelativeTimeProvider.defaultInstance_) {
    goog.debug.RelativeTimeProvider.defaultInstance_ = new goog.debug.RelativeTimeProvider();
  }
  return goog.debug.RelativeTimeProvider.defaultInstance_;
};

$CLJS.SHADOW_ENV.setLoaded("goog.debug.relativetimeprovider.js");

goog.provide("goog.debug.Formatter");
goog.provide("goog.debug.HtmlFormatter");
goog.provide("goog.debug.TextFormatter");
goog.provide("goog.debug.formatter");
goog.require("goog.debug");
goog.require("goog.debug.RelativeTimeProvider");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.SafeUrl");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.log");
goog.require("goog.string.Const");
goog.requireType("goog.log.LogRecord");
goog.debug.formatter.Formatter = function(opt_prefix) {
  this.prefix_ = opt_prefix || "";
  this.startTimeProvider_ = goog.debug.RelativeTimeProvider.getDefaultInstance();
};
goog.debug.formatter.Formatter.prototype.appendNewline = true;
goog.debug.formatter.Formatter.prototype.showAbsoluteTime = true;
goog.debug.formatter.Formatter.prototype.showRelativeTime = true;
goog.debug.formatter.Formatter.prototype.showLoggerName = true;
goog.debug.formatter.Formatter.prototype.showExceptionText = false;
goog.debug.formatter.Formatter.prototype.showSeverityLevel = false;
goog.debug.formatter.Formatter.prototype.formatRecord = goog.abstractMethod;
goog.debug.formatter.Formatter.prototype.formatRecordAsHtml = goog.abstractMethod;
goog.debug.formatter.Formatter.prototype.setStartTimeProvider = function(provider) {
  this.startTimeProvider_ = provider;
};
goog.debug.formatter.Formatter.prototype.getStartTimeProvider = function() {
  return this.startTimeProvider_;
};
goog.debug.formatter.Formatter.prototype.resetRelativeTimeStart = function() {
  this.startTimeProvider_.reset();
};
goog.debug.formatter.Formatter.getDateTimeStamp_ = function(logRecord) {
  var time = new Date(logRecord.getMillis());
  return goog.debug.formatter.Formatter.getTwoDigitString_(time.getFullYear() - 2000) + goog.debug.formatter.Formatter.getTwoDigitString_(time.getMonth() + 1) + goog.debug.formatter.Formatter.getTwoDigitString_(time.getDate()) + " " + goog.debug.formatter.Formatter.getTwoDigitString_(time.getHours()) + ":" + goog.debug.formatter.Formatter.getTwoDigitString_(time.getMinutes()) + ":" + goog.debug.formatter.Formatter.getTwoDigitString_(time.getSeconds()) + "." + goog.debug.formatter.Formatter.getTwoDigitString_(Math.floor(time.getMilliseconds() / 
  10));
};
goog.debug.formatter.Formatter.getTwoDigitString_ = function(n) {
  if (n < 10) {
    return "0" + n;
  }
  return String(n);
};
goog.debug.formatter.Formatter.getRelativeTime_ = function(logRecord, relativeTimeStart) {
  var ms = logRecord.getMillis() - relativeTimeStart;
  var sec = ms / 1000;
  var str = sec.toFixed(3);
  var spacesToPrepend = 0;
  if (sec < 1) {
    spacesToPrepend = 2;
  } else {
    while (sec < 100) {
      spacesToPrepend++;
      sec *= 10;
    }
  }
  while (spacesToPrepend-- > 0) {
    str = " " + str;
  }
  return str;
};
goog.debug.formatter.HtmlFormatter = function(opt_prefix) {
  goog.debug.formatter.Formatter.call(this, opt_prefix);
};
goog.inherits(goog.debug.formatter.HtmlFormatter, goog.debug.formatter.Formatter);
goog.debug.formatter.HtmlFormatter.exposeException = function(err, fn) {
  var html = goog.debug.formatter.HtmlFormatter.exposeExceptionAsHtml(err, fn);
  return goog.html.SafeHtml.unwrap(html);
};
goog.debug.formatter.HtmlFormatter.exposeExceptionAsHtml = function(err, fn) {
  try {
    var e = goog.debug.normalizeErrorObject(err);
    var viewSourceUrl = goog.debug.formatter.HtmlFormatter.createViewSourceUrl_(e.fileName);
    var error = goog.html.SafeHtml.concat(goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces("Message: " + e.message + "\nUrl: "), goog.html.SafeHtml.create("a", {href:viewSourceUrl, target:"_new"}, e.fileName), goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces("\nLine: " + e.lineNumber + "\n\nBrowser stack:\n" + e.stack + "-\x3e " + "[end]\n\nJS stack traversal:\n" + goog.debug.getStacktrace(fn) + "-\x3e "));
    return error;
  } catch (e2) {
    return goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces("Exception trying to expose exception! You win, we lose. " + e2);
  }
};
goog.debug.formatter.HtmlFormatter.createViewSourceUrl_ = function(fileName) {
  if (fileName == null) {
    fileName = "";
  }
  if (!/^https?:\/\//i.test(fileName)) {
    return goog.html.SafeUrl.fromConstant(goog.string.Const.from("sanitizedviewsrc"));
  }
  var sanitizedFileName = goog.html.SafeUrl.sanitize(fileName);
  return goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("view-source scheme plus HTTP/HTTPS URL"), "view-source:" + goog.html.SafeUrl.unwrap(sanitizedFileName));
};
goog.debug.formatter.HtmlFormatter.prototype.showExceptionText = true;
goog.debug.formatter.HtmlFormatter.prototype.formatRecord = function(logRecord) {
  if (!logRecord) {
    return "";
  }
  return this.formatRecordAsHtml(logRecord).getTypedStringValue();
};
goog.debug.formatter.HtmlFormatter.prototype.formatRecordAsHtml = function(logRecord) {
  if (!logRecord) {
    return goog.html.SafeHtml.EMPTY;
  }
  var className;
  switch(logRecord.getLevel().value) {
    case goog.log.Level.SHOUT.value:
      className = "dbg-sh";
      break;
    case goog.log.Level.SEVERE.value:
      className = "dbg-sev";
      break;
    case goog.log.Level.WARNING.value:
      className = "dbg-w";
      break;
    case goog.log.Level.INFO.value:
      className = "dbg-i";
      break;
    case goog.log.Level.FINE.value:
    default:
      className = "dbg-f";
      break;
  }
  var sb = [];
  sb.push(this.prefix_, " ");
  if (this.showAbsoluteTime) {
    sb.push("[", goog.debug.formatter.Formatter.getDateTimeStamp_(logRecord), "] ");
  }
  if (this.showRelativeTime) {
    sb.push("[", goog.debug.formatter.Formatter.getRelativeTime_(logRecord, this.startTimeProvider_.get()), "s] ");
  }
  if (this.showLoggerName) {
    sb.push("[", logRecord.getLoggerName(), "] ");
  }
  if (this.showSeverityLevel) {
    sb.push("[", logRecord.getLevel().name, "] ");
  }
  var fullPrefixHtml = goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces(sb.join(""));
  var exceptionHtml = goog.html.SafeHtml.EMPTY;
  if (this.showExceptionText && logRecord.getException()) {
    exceptionHtml = goog.html.SafeHtml.concat(goog.html.SafeHtml.BR, goog.debug.formatter.HtmlFormatter.exposeExceptionAsHtml(logRecord.getException()));
  }
  var logRecordHtml = goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces(logRecord.getMessage());
  var recordAndExceptionHtml = goog.html.SafeHtml.create("span", {"class":className}, goog.html.SafeHtml.concat(logRecordHtml, exceptionHtml));
  var html;
  if (this.appendNewline) {
    html = goog.html.SafeHtml.concat(fullPrefixHtml, recordAndExceptionHtml, goog.html.SafeHtml.BR);
  } else {
    html = goog.html.SafeHtml.concat(fullPrefixHtml, recordAndExceptionHtml);
  }
  return html;
};
goog.debug.formatter.TextFormatter = function(opt_prefix) {
  goog.debug.formatter.Formatter.call(this, opt_prefix);
};
goog.inherits(goog.debug.formatter.TextFormatter, goog.debug.formatter.Formatter);
goog.debug.formatter.TextFormatter.prototype.formatRecord = function(logRecord) {
  var sb = [];
  sb.push(this.prefix_, " ");
  if (this.showAbsoluteTime) {
    sb.push("[", goog.debug.formatter.Formatter.getDateTimeStamp_(logRecord), "] ");
  }
  if (this.showRelativeTime) {
    sb.push("[", goog.debug.formatter.Formatter.getRelativeTime_(logRecord, this.startTimeProvider_.get()), "s] ");
  }
  if (this.showLoggerName) {
    sb.push("[", logRecord.getLoggerName(), "] ");
  }
  if (this.showSeverityLevel) {
    sb.push("[", logRecord.getLevel().name, "] ");
  }
  sb.push(logRecord.getMessage());
  if (this.showExceptionText) {
    var exception = logRecord.getException();
    if (exception !== undefined) {
      var exceptionText = exception instanceof Error ? exception.message : String(exception);
      sb.push("\n", exceptionText);
    }
  }
  if (this.appendNewline) {
    sb.push("\n");
  }
  return sb.join("");
};
goog.debug.formatter.TextFormatter.prototype.formatRecordAsHtml = function(logRecord) {
  return goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces(goog.debug.formatter.TextFormatter.prototype.formatRecord(logRecord));
};
goog.debug.Formatter = goog.debug.formatter.Formatter;
goog.debug.TextFormatter = goog.debug.formatter.TextFormatter;
goog.debug.HtmlFormatter = goog.debug.formatter.HtmlFormatter;

$CLJS.SHADOW_ENV.setLoaded("goog.debug.formatter.js");

goog.provide("goog.debug.Console");
goog.require("goog.debug.TextFormatter");
goog.require("goog.log");
goog.requireType("goog.log.LogRecord");
goog.debug.Console = function() {
  this.publishHandler_ = goog.bind(this.addLogRecord, this);
  this.formatter_ = new goog.debug.TextFormatter();
  this.formatter_.showAbsoluteTime = false;
  this.formatter_.showExceptionText = false;
  this.formatter_.appendNewline = false;
  this.isCapturing_ = false;
  this.logBuffer_ = "";
  this.filteredLoggers_ = {};
};
goog.debug.Console.prototype.getFormatter = function() {
  return this.formatter_;
};
goog.debug.Console.prototype.setCapturing = function(capturing) {
  if (capturing == this.isCapturing_) {
    return;
  }
  var rootLogger = goog.log.getRootLogger();
  if (capturing) {
    goog.log.addHandler(rootLogger, this.publishHandler_);
  } else {
    goog.log.removeHandler(rootLogger, this.publishHandler_);
  }
  this.isCapturing_ = capturing;
};
goog.debug.Console.prototype.addLogRecord = function(logRecord) {
  if (this.filteredLoggers_[logRecord.getLoggerName()]) {
    return;
  }
  function getConsoleMethodName_(level) {
    if (level) {
      if (level.value >= goog.log.Level.SEVERE.value) {
        return "error";
      }
      if (level.value >= goog.log.Level.WARNING.value) {
        return "warn";
      }
      if (level.value >= goog.log.Level.CONFIG.value) {
        return "log";
      }
    }
    return "debug";
  }
  var record = this.formatter_.formatRecord(logRecord);
  var console = goog.debug.Console.console_;
  if (console) {
    var logMethod = getConsoleMethodName_(logRecord.getLevel());
    goog.debug.Console.logToConsole_(console, logMethod, record, logRecord.getException());
  } else {
    this.logBuffer_ += record;
  }
};
goog.debug.Console.prototype.addFilter = function(loggerName) {
  this.filteredLoggers_[loggerName] = true;
};
goog.debug.Console.prototype.removeFilter = function(loggerName) {
  delete this.filteredLoggers_[loggerName];
};
goog.debug.Console.instance = null;
goog.debug.Console.console_ = goog.global["console"];
goog.debug.Console.setConsole = function(console) {
  goog.debug.Console.console_ = console;
};
goog.debug.Console.autoInstall = function() {
  if (!goog.debug.Console.instance) {
    goog.debug.Console.instance = new goog.debug.Console();
  }
  if (goog.global.location && goog.global.location.href.indexOf("Debug\x3dtrue") != -1) {
    goog.debug.Console.instance.setCapturing(true);
  }
};
goog.debug.Console.show = function() {
  alert(goog.debug.Console.instance.logBuffer_);
};
goog.debug.Console.logToConsole_ = function(console, fnName, record, exception) {
  if (console[fnName]) {
    console[fnName](record, exception === undefined ? "" : exception);
  } else {
    console.log(record, exception === undefined ? "" : exception);
  }
};

$CLJS.SHADOW_ENV.setLoaded("goog.debug.console.js");

goog.provide("goog.structs.CircularBuffer");
goog.structs.CircularBuffer = function(opt_maxSize) {
  this.nextPtr_ = 0;
  this.maxSize_ = opt_maxSize || 100;
  this.buff_ = [];
};
goog.structs.CircularBuffer.prototype.add = function(item) {
  const previousItem = this.buff_[this.nextPtr_];
  this.buff_[this.nextPtr_] = item;
  this.nextPtr_ = (this.nextPtr_ + 1) % this.maxSize_;
  return previousItem;
};
goog.structs.CircularBuffer.prototype.get = function(index) {
  index = this.normalizeIndex_(index);
  return this.buff_[index];
};
goog.structs.CircularBuffer.prototype.set = function(index, item) {
  index = this.normalizeIndex_(index);
  this.buff_[index] = item;
};
goog.structs.CircularBuffer.prototype.getCount = function() {
  return this.buff_.length;
};
goog.structs.CircularBuffer.prototype.isEmpty = function() {
  return this.buff_.length == 0;
};
goog.structs.CircularBuffer.prototype.clear = function() {
  this.buff_.length = 0;
  this.nextPtr_ = 0;
};
goog.structs.CircularBuffer.prototype.getValues = function() {
  return this.getNewestValues(this.getCount());
};
goog.structs.CircularBuffer.prototype.getNewestValues = function(maxCount) {
  const l = this.getCount();
  const start = this.getCount() - maxCount;
  const rv = [];
  for (let i = start; i < l; i++) {
    rv.push(this.get(i));
  }
  return rv;
};
goog.structs.CircularBuffer.prototype.getKeys = function() {
  const rv = [];
  const l = this.getCount();
  for (let i = 0; i < l; i++) {
    rv[i] = i;
  }
  return rv;
};
goog.structs.CircularBuffer.prototype.containsKey = function(key) {
  return key < this.getCount();
};
goog.structs.CircularBuffer.prototype.containsValue = function(value) {
  const l = this.getCount();
  for (let i = 0; i < l; i++) {
    if (this.get(i) == value) {
      return true;
    }
  }
  return false;
};
goog.structs.CircularBuffer.prototype.getLast = function() {
  if (this.getCount() == 0) {
    return null;
  }
  return this.get(this.getCount() - 1);
};
goog.structs.CircularBuffer.prototype.normalizeIndex_ = function(index) {
  if (index >= this.buff_.length) {
    throw new Error("Out of bounds exception");
  }
  if (this.buff_.length < this.maxSize_) {
    return index;
  }
  return (this.nextPtr_ + Number(index)) % this.maxSize_;
};

$CLJS.SHADOW_ENV.setLoaded("goog.structs.circularbuffer.js");

goog.provide("goog.debug.DebugWindow");
goog.require("goog.debug.HtmlFormatter");
goog.require("goog.dom.safe");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.SafeStyleSheet");
goog.require("goog.log");
goog.require("goog.string.Const");
goog.require("goog.structs.CircularBuffer");
goog.require("goog.userAgent");
goog.requireType("goog.debug.Formatter");
goog.debug.DebugWindow = function(opt_identifier, opt_prefix) {
  this.identifier = opt_identifier || "";
  this.outputBuffer = [];
  this.prefix_ = opt_prefix || "";
  this.savedMessages_ = new goog.structs.CircularBuffer(goog.debug.DebugWindow.MAX_SAVED);
  this.publishHandler_ = goog.bind(this.addLogRecord, this);
  this.formatter_ = new goog.debug.HtmlFormatter(this.prefix_);
  this.filteredLoggers_ = {};
  this.setCapturing(true);
  this.enabled_ = goog.debug.DebugWindow.isEnabled(this.identifier);
  goog.global.setInterval(goog.bind(this.saveWindowPositionSize_, this), 7500);
};
goog.debug.DebugWindow.MAX_SAVED = 500;
goog.debug.DebugWindow.COOKIE_TIME = 30 * 24 * 60 * 60 * 1000;
goog.debug.DebugWindow.prototype.welcomeMessage = "LOGGING";
goog.debug.DebugWindow.prototype.enableOnSevere_ = false;
goog.debug.DebugWindow.prototype.win = null;
goog.debug.DebugWindow.prototype.winOpening_ = false;
goog.debug.DebugWindow.prototype.isCapturing_ = false;
goog.debug.DebugWindow.showedBlockedAlert_ = false;
goog.debug.DebugWindow.prototype.bufferTimeout_ = null;
goog.debug.DebugWindow.prototype.lastCall = goog.now();
goog.debug.DebugWindow.prototype.setWelcomeMessage = function(msg) {
  this.welcomeMessage = msg;
};
goog.debug.DebugWindow.prototype.init = function() {
  if (this.enabled_) {
    this.openWindow_();
  }
};
goog.debug.DebugWindow.prototype.isEnabled = function() {
  return this.enabled_;
};
goog.debug.DebugWindow.prototype.setEnabled = function(enable) {
  this.enabled_ = enable;
  if (this.enabled_) {
    this.openWindow_();
  }
  this.setCookie_("enabled", enable ? "1" : "0");
};
goog.debug.DebugWindow.prototype.setForceEnableOnSevere = function(enableOnSevere) {
  this.enableOnSevere_ = enableOnSevere;
};
goog.debug.DebugWindow.prototype.isCapturing = function() {
  return this.isCapturing_;
};
goog.debug.DebugWindow.prototype.setCapturing = function(capturing) {
  if (capturing == this.isCapturing_) {
    return;
  }
  this.isCapturing_ = capturing;
  var rootLogger = goog.log.getRootLogger();
  if (capturing) {
    goog.log.addHandler(rootLogger, this.publishHandler_);
  } else {
    goog.log.removeHandler(rootLogger, this.publishHandler_);
  }
};
goog.debug.DebugWindow.prototype.getFormatter = function() {
  return this.formatter_;
};
goog.debug.DebugWindow.prototype.setFormatter = function(formatter) {
  this.formatter_ = formatter;
};
goog.debug.DebugWindow.prototype.addSeparator = function() {
  this.write_(goog.html.SafeHtml.create("hr"));
};
goog.debug.DebugWindow.prototype.hasActiveWindow = function() {
  return !!this.win && !this.win.closed;
};
goog.debug.DebugWindow.prototype.clear = function() {
  this.savedMessages_.clear();
  if (this.hasActiveWindow()) {
    this.writeInitialDocument();
  }
};
goog.debug.DebugWindow.prototype.addLogRecord = function(logRecord) {
  if (this.filteredLoggers_[logRecord.getLoggerName()]) {
    return;
  }
  var html = this.formatter_.formatRecordAsHtml(logRecord);
  this.write_(html);
  if (this.enableOnSevere_ && logRecord.getLevel().value >= goog.log.Level.SEVERE.value) {
    this.setEnabled(true);
  }
};
goog.debug.DebugWindow.prototype.write_ = function(html) {
  if (this.enabled_) {
    this.openWindow_();
    this.savedMessages_.add(html);
    this.writeToLog_(html);
  } else {
    this.savedMessages_.add(html);
  }
};
goog.debug.DebugWindow.prototype.writeToLog_ = function(html) {
  this.outputBuffer.push(html);
  goog.global.clearTimeout(this.bufferTimeout_);
  if (goog.now() - this.lastCall > 750) {
    this.writeBufferToLog();
  } else {
    this.bufferTimeout_ = goog.global.setTimeout(goog.bind(this.writeBufferToLog, this), 250);
  }
};
goog.debug.DebugWindow.prototype.writeBufferToLog = function() {
  this.lastCall = goog.now();
  if (this.hasActiveWindow()) {
    var body = this.win.document.body;
    var scroll = body && body.scrollHeight - (body.scrollTop + body.clientHeight) <= 100;
    goog.dom.safe.documentWrite(this.win.document, goog.html.SafeHtml.concat(this.outputBuffer));
    this.outputBuffer.length = 0;
    if (scroll) {
      this.win.scrollTo(0, 1000000);
    }
  }
};
goog.debug.DebugWindow.prototype.writeSavedMessages = function() {
  var messages = this.savedMessages_.getValues();
  for (var i = 0; i < messages.length; i++) {
    this.writeToLog_(messages[i]);
  }
};
goog.debug.DebugWindow.prototype.openWindow_ = function() {
  if (this.hasActiveWindow() || this.winOpening_) {
    return;
  }
  var winpos = this.getCookie_("dbg", "0,0,800,500").split(",");
  var x = Number(winpos[0]);
  var y = Number(winpos[1]);
  var w = Number(winpos[2]);
  var h = Number(winpos[3]);
  this.winOpening_ = true;
  this.win = goog.dom.safe.openInWindow("", window, this.getWindowName_(), "width\x3d" + w + ",height\x3d" + h + ",toolbar\x3dno,resizable\x3dyes," + "scrollbars\x3dyes,left\x3d" + x + ",top\x3d" + y + ",status\x3dno,screenx\x3d" + x + ",screeny\x3d" + y);
  if (!this.win) {
    if (!goog.debug.DebugWindow.showedBlockedAlert_) {
      alert("Logger popup was blocked");
      goog.debug.DebugWindow.showedBlockedAlert_ = true;
    }
  }
  this.winOpening_ = false;
  if (this.win) {
    this.writeInitialDocument();
  }
};
goog.debug.DebugWindow.prototype.getWindowName_ = function() {
  return goog.userAgent.IE ? this.identifier.replace(/[\s\-\.,]/g, "_") : this.identifier;
};
goog.debug.DebugWindow.prototype.getStyleRules = function() {
  return goog.html.SafeStyleSheet.fromConstant(goog.string.Const.from("*{font:normal 14px monospace;}" + ".dbg-sev{color:#F00}" + ".dbg-w{color:#E92}" + ".dbg-sh{background-color:#fd4;font-weight:bold;color:#000}" + ".dbg-i{color:#666}" + ".dbg-f{color:#999}" + ".dbg-ev{color:#0A0}" + ".dbg-m{color:#990}"));
};
goog.debug.DebugWindow.prototype.writeInitialDocument = function() {
  if (!this.hasActiveWindow()) {
    return;
  }
  this.win.document.open();
  var div = goog.html.SafeHtml.create("div", {"class":"dbg-ev", "style":goog.string.Const.from("text-align:center;")}, goog.html.SafeHtml.concat(this.welcomeMessage, goog.html.SafeHtml.BR, goog.html.SafeHtml.create("small", {}, "Logger: " + this.identifier)));
  var html = goog.html.SafeHtml.concat(goog.html.SafeHtml.createStyle(this.getStyleRules()), goog.html.SafeHtml.create("hr"), div, goog.html.SafeHtml.create("hr"));
  this.writeToLog_(html);
  this.writeSavedMessages();
};
goog.debug.DebugWindow.prototype.setCookie_ = function(key, value) {
  var fullKey = goog.debug.DebugWindow.getCookieKey_(this.identifier, key);
  document.cookie = fullKey + "\x3d" + encodeURIComponent(value) + ";path\x3d/;expires\x3d" + (new Date(goog.now() + goog.debug.DebugWindow.COOKIE_TIME)).toUTCString();
};
goog.debug.DebugWindow.prototype.getCookie_ = function(key, opt_default) {
  return goog.debug.DebugWindow.getCookieValue_(this.identifier, key, opt_default);
};
goog.debug.DebugWindow.getCookieKey_ = function(identifier, key) {
  var fullKey = key + identifier;
  return fullKey.replace(/[;=\s]/g, "_");
};
goog.debug.DebugWindow.getCookieValue_ = function(identifier, key, opt_default) {
  var fullKey = goog.debug.DebugWindow.getCookieKey_(identifier, key);
  var cookie = String(document.cookie);
  var start = cookie.indexOf(fullKey + "\x3d");
  if (start != -1) {
    var end = cookie.indexOf(";", start);
    return decodeURIComponent(cookie.substring(start + fullKey.length + 1, end == -1 ? cookie.length : end));
  } else {
    return opt_default || "";
  }
};
goog.debug.DebugWindow.isEnabled = function(identifier) {
  return goog.debug.DebugWindow.getCookieValue_(identifier, "enabled") == "1";
};
goog.debug.DebugWindow.prototype.saveWindowPositionSize_ = function() {
  if (!this.hasActiveWindow()) {
    return;
  }
  var x = this.win.screenX || this.win.screenLeft || 0;
  var y = this.win.screenY || this.win.screenTop || 0;
  var w = this.win.outerWidth || 800;
  var h = this.win.outerHeight || 500;
  this.setCookie_("dbg", x + "," + y + "," + w + "," + h);
};
goog.debug.DebugWindow.prototype.addFilter = function(loggerName) {
  this.filteredLoggers_[loggerName] = 1;
};
goog.debug.DebugWindow.prototype.removeFilter = function(loggerName) {
  delete this.filteredLoggers_[loggerName];
};
goog.debug.DebugWindow.prototype.resetBufferWithNewSize = function(size) {
  if (size > 0 && size < 50000) {
    this.clear();
    this.savedMessages_ = new goog.structs.CircularBuffer(size);
  }
};

$CLJS.SHADOW_ENV.setLoaded("goog.debug.debugwindow.js");

goog.provide("goog.debug.FancyWindow");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.debug.DebugWindow");
goog.require("goog.dom.DomHelper");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.SafeStyleSheet");
goog.require("goog.log");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.string.Const");
goog.require("goog.userAgent");
goog.debug.FancyWindow = function(opt_identifier, opt_prefix) {
  this.readOptionsFromLocalStorage_();
  goog.debug.FancyWindow.base(this, "constructor", opt_identifier, opt_prefix);
  this.dh_ = null;
};
goog.inherits(goog.debug.FancyWindow, goog.debug.DebugWindow);
goog.debug.FancyWindow.HAS_LOCAL_STORE = function() {
  try {
    return !!window["localStorage"].getItem;
  } catch (e) {
  }
  return false;
}();
goog.debug.FancyWindow.LOCAL_STORE_PREFIX = "fancywindow.sel.";
goog.debug.FancyWindow.prototype.writeBufferToLog = function() {
  this.lastCall = goog.now();
  if (this.hasActiveWindow()) {
    var logel = this.dh_.getElement("log");
    var scroll = logel.scrollHeight - (logel.scrollTop + logel.offsetHeight) <= 100;
    for (var i = 0; i < this.outputBuffer.length; i++) {
      var div = this.dh_.createDom(goog.dom.TagName.DIV, "logmsg");
      goog.dom.safe.setInnerHtml(div, this.outputBuffer[i]);
      logel.appendChild(div);
    }
    this.outputBuffer.length = 0;
    this.resizeStuff_();
    if (scroll) {
      logel.scrollTop = logel.scrollHeight;
    }
  }
};
goog.debug.FancyWindow.prototype.writeInitialDocument = function() {
  if (!this.hasActiveWindow()) {
    return;
  }
  var doc = this.win.document;
  doc.open();
  goog.dom.safe.documentWrite(doc, this.getHtml_());
  doc.close();
  (goog.userAgent.IE ? doc.body : this.win).onresize = goog.bind(this.resizeStuff_, this);
  this.dh_ = new goog.dom.DomHelper(doc);
  this.dh_.getElement("openbutton").onclick = goog.bind(this.openOptions_, this);
  this.dh_.getElement("closebutton").onclick = goog.bind(this.closeOptions_, this);
  this.dh_.getElement("clearbutton").onclick = goog.bind(this.clear, this);
  this.dh_.getElement("exitbutton").onclick = goog.bind(this.exit_, this);
  this.writeSavedMessages();
};
goog.debug.FancyWindow.prototype.openOptions_ = function() {
  var el = goog.asserts.assert(this.dh_.getElement("optionsarea"));
  goog.dom.safe.setInnerHtml(el, goog.html.SafeHtml.EMPTY);
  var loggers = goog.debug.FancyWindow.getLoggers_();
  var dh = this.dh_;
  for (var i = 0; i < loggers.length; i++) {
    var logger = loggers[i];
    var curlevel = goog.log.getLevel(logger) ? goog.log.getLevel(logger).name : "INHERIT";
    var div = dh.createDom(goog.dom.TagName.DIV, {}, this.getDropDown_("sel" + logger.getName(), curlevel), dh.createDom(goog.dom.TagName.SPAN, {}, logger.getName() || "(root)"));
    el.appendChild(div);
  }
  this.dh_.getElement("options").style.display = "block";
  return false;
};
goog.debug.FancyWindow.prototype.getDropDown_ = function(id, selected) {
  var dh = this.dh_;
  var sel = dh.createDom(goog.dom.TagName.SELECT, {"id":id});
  var levels = goog.log.Level.PREDEFINED_LEVELS;
  for (var i = 0; i < levels.length; i++) {
    var level = levels[i];
    var option = dh.createDom(goog.dom.TagName.OPTION, {}, level.name);
    if (selected == level.name) {
      option.selected = true;
    }
    sel.appendChild(option);
  }
  sel.appendChild(dh.createDom(goog.dom.TagName.OPTION, {"selected":selected == "INHERIT"}, "INHERIT"));
  return sel;
};
goog.debug.FancyWindow.prototype.closeOptions_ = function() {
  this.dh_.getElement("options").style.display = "none";
  const loggers = goog.debug.FancyWindow.getLoggers_();
  const dh = this.dh_;
  for (let i = 0; i < loggers.length; i++) {
    const logger = loggers[i];
    const sel = dh.getElement("sel" + logger.getName());
    if (!sel) {
      continue;
    }
    const level = sel.options[sel.selectedIndex].text;
    if (level == "INHERIT") {
      goog.log.setLevel(logger, null);
    } else {
      goog.log.setLevel(logger, goog.log.Level.getPredefinedLevel(level));
    }
  }
  this.writeOptionsToLocalStorage_();
  return false;
};
goog.debug.FancyWindow.prototype.resizeStuff_ = function() {
  var dh = this.dh_;
  var logel = dh.getElement("log");
  var headel = dh.getElement("head");
  logel.style.top = headel.offsetHeight + "px";
  logel.style.height = dh.getDocument().body.offsetHeight - headel.offsetHeight - (goog.userAgent.IE ? 4 : 0) + "px";
};
goog.debug.FancyWindow.prototype.exit_ = function(e) {
  this.setEnabled(false);
  if (this.win) {
    this.win.close();
  }
};
goog.debug.FancyWindow.prototype.getStyleRules = function() {
  var baseRules = goog.debug.FancyWindow.base(this, "getStyleRules");
  var extraRules = goog.html.SafeStyleSheet.fromConstant(goog.string.Const.from("html,body{height:100%;width:100%;margin:0px;padding:0px;" + "background-color:#FFF;overflow:hidden}" + "*{}" + ".logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}" + "#head{position:absolute;width:100%;font:x-small arial;" + "border-bottom:2px solid #999;background-color:#EEE;}" + "#head p{margin:0px 5px;}" + "#log{position:absolute;width:100%;background-color:#FFF;}" + "#options{position:absolute;right:0px;width:50%;height:100%;" + 
  "border-left:1px solid #999;background-color:#DDD;display:none;" + "padding-left: 5px;font:normal small arial;overflow:auto;}" + "#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:" + "pointer;position:absolute;top:0px;right:5px;font:x-small arial;}" + "#clearbutton{text-decoration:underline;color:#00F;cursor:" + "pointer;position:absolute;top:0px;right:80px;font:x-small arial;}" + "#exitbutton{text-decoration:underline;color:#00F;cursor:" + "pointer;position:absolute;top:0px;right:50px;font:x-small arial;}" + 
  "select{font:x-small arial;margin-right:10px;}" + "hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"));
  return goog.html.SafeStyleSheet.concat(baseRules, extraRules);
};
goog.debug.FancyWindow.prototype.getHtml_ = function() {
  var SafeHtml = goog.html.SafeHtml;
  var head = SafeHtml.create("head", {}, SafeHtml.concat(SafeHtml.create("title", {}, "Logging: " + this.identifier), SafeHtml.createStyle(this.getStyleRules())));
  var body = SafeHtml.create("body", {}, SafeHtml.concat(SafeHtml.create("div", {"id":"log", "style":goog.string.Const.from("overflow:auto")}), SafeHtml.create("div", {"id":"head"}, SafeHtml.concat(SafeHtml.create("p", {}, SafeHtml.create("b", {}, "Logging: " + this.identifier)), SafeHtml.create("p", {}, this.welcomeMessage), SafeHtml.create("span", {"id":"clearbutton"}, "clear"), SafeHtml.create("span", {"id":"exitbutton"}, "exit"), SafeHtml.create("span", {"id":"openbutton"}, "options"))), SafeHtml.create("div", 
  {"id":"options"}, SafeHtml.concat(SafeHtml.create("big", {}, SafeHtml.create("b", {}, "Options:")), SafeHtml.create("div", {"id":"optionsarea"}), SafeHtml.create("span", {"id":"closebutton"}, "save and close")))));
  return SafeHtml.create("html", {}, SafeHtml.concat(head, body));
};
goog.debug.FancyWindow.prototype.writeOptionsToLocalStorage_ = function() {
  if (!goog.debug.FancyWindow.HAS_LOCAL_STORE) {
    return;
  }
  var loggers = goog.debug.FancyWindow.getLoggers_();
  var storedKeys = goog.debug.FancyWindow.getStoredKeys_();
  for (var i = 0; i < loggers.length; i++) {
    var key = goog.debug.FancyWindow.LOCAL_STORE_PREFIX + loggers[i].getName();
    var level = goog.log.getLevel(loggers[i]);
    if (key in storedKeys) {
      if (!level) {
        window.localStorage.removeItem(key);
      } else if (window.localStorage.getItem(key) != level.name) {
        window.localStorage.setItem(key, level.name);
      }
    } else if (level) {
      window.localStorage.setItem(key, level.name);
    }
  }
};
goog.debug.FancyWindow.prototype.readOptionsFromLocalStorage_ = function() {
  if (!goog.debug.FancyWindow.HAS_LOCAL_STORE) {
    return;
  }
  var storedKeys = goog.debug.FancyWindow.getStoredKeys_();
  for (var key in storedKeys) {
    var loggerName = key.replace(goog.debug.FancyWindow.LOCAL_STORE_PREFIX, "");
    var logger = goog.log.getLogger(loggerName);
    var curLevel = goog.log.getLevel(logger);
    var storedLevel = window.localStorage.getItem(key).toString();
    if (!curLevel || curLevel.toString() != storedLevel) {
      goog.log.setLevel(logger, goog.log.Level.getPredefinedLevel(storedLevel));
    }
  }
};
goog.debug.FancyWindow.getStoredKeys_ = function() {
  var storedKeys = {};
  for (var i = 0, len = window.localStorage.length; i < len; i++) {
    var key = window.localStorage.key(i);
    if (key != null && goog.string.startsWith(key, goog.debug.FancyWindow.LOCAL_STORE_PREFIX)) {
      storedKeys[key] = true;
    }
  }
  return storedKeys;
};
goog.debug.FancyWindow.getLoggers_ = function() {
  const loggers = goog.log.getAllLoggers();
  const loggerSort = (a, b) => {
    return goog.array.defaultCompare(a.getName(), b.getName());
  };
  loggers.sort(loggerSort);
  return loggers;
};

$CLJS.SHADOW_ENV.setLoaded("goog.debug.fancywindow.js");

goog.provide("goog.debug.DivConsole");
goog.require("goog.debug.HtmlFormatter");
goog.require("goog.dom.DomHelper");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.SafeStyleSheet");
goog.require("goog.log");
goog.require("goog.string.Const");
goog.require("goog.style");
goog.requireType("goog.debug.Formatter");
goog.requireType("goog.log.LogRecord");
goog.debug.DivConsole = function(element) {
  this.publishHandler_ = goog.bind(this.addLogRecord, this);
  this.formatter_ = new goog.debug.HtmlFormatter();
  this.formatter_.showAbsoluteTime = false;
  this.isCapturing_ = false;
  this.element_ = element;
  this.elementOwnerDocument_ = this.element_.ownerDocument || this.element_.document;
  this.domHelper_ = new goog.dom.DomHelper(this.elementOwnerDocument_);
  this.installStyles();
};
goog.debug.DivConsole.prototype.installStyles = function() {
  goog.style.installSafeStyleSheet(goog.html.SafeStyleSheet.fromConstant(goog.string.Const.from(".dbg-sev{color:#F00}" + ".dbg-w{color:#C40}" + ".dbg-sh{font-weight:bold;color:#000}" + ".dbg-i{color:#444}" + ".dbg-f{color:#999}" + ".dbg-ev{color:#0A0}" + ".dbg-m{color:#990}" + ".logmsg{border-bottom:1px solid #CCC;padding:2px}" + ".logsep{background-color: #8C8;}" + ".logdiv{border:1px solid #CCC;background-color:#FCFCFC;" + "font:medium monospace}")), this.element_);
  this.element_.className += " logdiv";
};
goog.debug.DivConsole.prototype.setCapturing = function(capturing) {
  if (capturing == this.isCapturing_) {
    return;
  }
  var rootLogger = goog.log.getRootLogger();
  if (capturing) {
    goog.log.addHandler(rootLogger, this.publishHandler_);
  } else {
    goog.log.removeHandler(rootLogger, this.publishHandler_);
  }
  this.isCapturing_ = capturing;
};
goog.debug.DivConsole.prototype.addLogRecord = function(logRecord) {
  if (!logRecord) {
    return;
  }
  var scroll = this.element_.scrollHeight - this.element_.scrollTop - this.element_.clientHeight <= 100;
  var div = this.domHelper_.createElement(goog.dom.TagName.DIV);
  div.className = "logmsg";
  goog.dom.safe.setInnerHtml(div, this.formatter_.formatRecordAsHtml(logRecord));
  this.element_.appendChild(div);
  if (scroll) {
    this.element_.scrollTop = this.element_.scrollHeight;
  }
};
goog.debug.DivConsole.prototype.getFormatter = function() {
  return this.formatter_;
};
goog.debug.DivConsole.prototype.setFormatter = function(formatter) {
  this.formatter_ = formatter;
};
goog.debug.DivConsole.prototype.addSeparator = function() {
  var div = this.domHelper_.createElement(goog.dom.TagName.DIV);
  div.className = "logmsg logsep";
  this.element_.appendChild(div);
};
goog.debug.DivConsole.prototype.clear = function() {
  if (this.element_) {
    goog.dom.safe.setInnerHtml(this.element_, goog.html.SafeHtml.EMPTY);
  }
};

$CLJS.SHADOW_ENV.setLoaded("goog.debug.divconsole.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.i18n.cldrversion");
  goog.module.declareLegacyNamespace();
  exports.USE_CLDR_NEXT = goog.define("goog.i18n.USE_CLDR_NEXT_FOR_TESTING_USE_ONLY_PLEASE_DO_NOT_USE_IN_PRODUCTION", false);
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.i18n.cldrversion.js");

goog.provide("goog.i18n.DateTimeSymbols");
goog.provide("goog.i18n.DateTimeSymbolsType");
goog.provide("goog.i18n.DateTimeSymbols_af");
goog.provide("goog.i18n.DateTimeSymbols_am");
goog.provide("goog.i18n.DateTimeSymbols_ar");
goog.provide("goog.i18n.DateTimeSymbols_ar_DZ");
goog.provide("goog.i18n.DateTimeSymbols_ar_EG");
goog.provide("goog.i18n.DateTimeSymbols_az");
goog.provide("goog.i18n.DateTimeSymbols_be");
goog.provide("goog.i18n.DateTimeSymbols_bg");
goog.provide("goog.i18n.DateTimeSymbols_bn");
goog.provide("goog.i18n.DateTimeSymbols_br");
goog.provide("goog.i18n.DateTimeSymbols_bs");
goog.provide("goog.i18n.DateTimeSymbols_ca");
goog.provide("goog.i18n.DateTimeSymbols_chr");
goog.provide("goog.i18n.DateTimeSymbols_cs");
goog.provide("goog.i18n.DateTimeSymbols_cy");
goog.provide("goog.i18n.DateTimeSymbols_da");
goog.provide("goog.i18n.DateTimeSymbols_de");
goog.provide("goog.i18n.DateTimeSymbols_de_AT");
goog.provide("goog.i18n.DateTimeSymbols_de_CH");
goog.provide("goog.i18n.DateTimeSymbols_el");
goog.provide("goog.i18n.DateTimeSymbols_en");
goog.provide("goog.i18n.DateTimeSymbols_en_AU");
goog.provide("goog.i18n.DateTimeSymbols_en_CA");
goog.provide("goog.i18n.DateTimeSymbols_en_GB");
goog.provide("goog.i18n.DateTimeSymbols_en_IE");
goog.provide("goog.i18n.DateTimeSymbols_en_IN");
goog.provide("goog.i18n.DateTimeSymbols_en_ISO");
goog.provide("goog.i18n.DateTimeSymbols_en_SG");
goog.provide("goog.i18n.DateTimeSymbols_en_US");
goog.provide("goog.i18n.DateTimeSymbols_en_ZA");
goog.provide("goog.i18n.DateTimeSymbols_es");
goog.provide("goog.i18n.DateTimeSymbols_es_419");
goog.provide("goog.i18n.DateTimeSymbols_es_ES");
goog.provide("goog.i18n.DateTimeSymbols_es_MX");
goog.provide("goog.i18n.DateTimeSymbols_es_US");
goog.provide("goog.i18n.DateTimeSymbols_et");
goog.provide("goog.i18n.DateTimeSymbols_eu");
goog.provide("goog.i18n.DateTimeSymbols_fa");
goog.provide("goog.i18n.DateTimeSymbols_fi");
goog.provide("goog.i18n.DateTimeSymbols_fil");
goog.provide("goog.i18n.DateTimeSymbols_fr");
goog.provide("goog.i18n.DateTimeSymbols_fr_CA");
goog.provide("goog.i18n.DateTimeSymbols_ga");
goog.provide("goog.i18n.DateTimeSymbols_gl");
goog.provide("goog.i18n.DateTimeSymbols_gsw");
goog.provide("goog.i18n.DateTimeSymbols_gu");
goog.provide("goog.i18n.DateTimeSymbols_haw");
goog.provide("goog.i18n.DateTimeSymbols_he");
goog.provide("goog.i18n.DateTimeSymbols_hi");
goog.provide("goog.i18n.DateTimeSymbols_hr");
goog.provide("goog.i18n.DateTimeSymbols_hu");
goog.provide("goog.i18n.DateTimeSymbols_hy");
goog.provide("goog.i18n.DateTimeSymbols_id");
goog.provide("goog.i18n.DateTimeSymbols_in");
goog.provide("goog.i18n.DateTimeSymbols_is");
goog.provide("goog.i18n.DateTimeSymbols_it");
goog.provide("goog.i18n.DateTimeSymbols_iw");
goog.provide("goog.i18n.DateTimeSymbols_ja");
goog.provide("goog.i18n.DateTimeSymbols_ka");
goog.provide("goog.i18n.DateTimeSymbols_kk");
goog.provide("goog.i18n.DateTimeSymbols_km");
goog.provide("goog.i18n.DateTimeSymbols_kn");
goog.provide("goog.i18n.DateTimeSymbols_ko");
goog.provide("goog.i18n.DateTimeSymbols_ky");
goog.provide("goog.i18n.DateTimeSymbols_ln");
goog.provide("goog.i18n.DateTimeSymbols_lo");
goog.provide("goog.i18n.DateTimeSymbols_lt");
goog.provide("goog.i18n.DateTimeSymbols_lv");
goog.provide("goog.i18n.DateTimeSymbols_mk");
goog.provide("goog.i18n.DateTimeSymbols_ml");
goog.provide("goog.i18n.DateTimeSymbols_mn");
goog.provide("goog.i18n.DateTimeSymbols_mo");
goog.provide("goog.i18n.DateTimeSymbols_mr");
goog.provide("goog.i18n.DateTimeSymbols_ms");
goog.provide("goog.i18n.DateTimeSymbols_mt");
goog.provide("goog.i18n.DateTimeSymbols_my");
goog.provide("goog.i18n.DateTimeSymbols_nb");
goog.provide("goog.i18n.DateTimeSymbols_ne");
goog.provide("goog.i18n.DateTimeSymbols_nl");
goog.provide("goog.i18n.DateTimeSymbols_no");
goog.provide("goog.i18n.DateTimeSymbols_no_NO");
goog.provide("goog.i18n.DateTimeSymbols_or");
goog.provide("goog.i18n.DateTimeSymbols_pa");
goog.provide("goog.i18n.DateTimeSymbols_pl");
goog.provide("goog.i18n.DateTimeSymbols_pt");
goog.provide("goog.i18n.DateTimeSymbols_pt_BR");
goog.provide("goog.i18n.DateTimeSymbols_pt_PT");
goog.provide("goog.i18n.DateTimeSymbols_ro");
goog.provide("goog.i18n.DateTimeSymbols_ru");
goog.provide("goog.i18n.DateTimeSymbols_sh");
goog.provide("goog.i18n.DateTimeSymbols_si");
goog.provide("goog.i18n.DateTimeSymbols_sk");
goog.provide("goog.i18n.DateTimeSymbols_sl");
goog.provide("goog.i18n.DateTimeSymbols_sq");
goog.provide("goog.i18n.DateTimeSymbols_sr");
goog.provide("goog.i18n.DateTimeSymbols_sr_Latn");
goog.provide("goog.i18n.DateTimeSymbols_sv");
goog.provide("goog.i18n.DateTimeSymbols_sw");
goog.provide("goog.i18n.DateTimeSymbols_ta");
goog.provide("goog.i18n.DateTimeSymbols_te");
goog.provide("goog.i18n.DateTimeSymbols_th");
goog.provide("goog.i18n.DateTimeSymbols_tl");
goog.provide("goog.i18n.DateTimeSymbols_tr");
goog.provide("goog.i18n.DateTimeSymbols_uk");
goog.provide("goog.i18n.DateTimeSymbols_ur");
goog.provide("goog.i18n.DateTimeSymbols_uz");
goog.provide("goog.i18n.DateTimeSymbols_vi");
goog.provide("goog.i18n.DateTimeSymbols_zh");
goog.provide("goog.i18n.DateTimeSymbols_zh_CN");
goog.provide("goog.i18n.DateTimeSymbols_zh_HK");
goog.provide("goog.i18n.DateTimeSymbols_zh_TW");
goog.provide("goog.i18n.DateTimeSymbols_zu");
goog.require("goog.i18n.cldrversion");
goog.i18n.DateTimeSymbols_en_ISO = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], STANDALONEMONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
"November", "December"], SHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], WEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], STANDALONEWEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], SHORTWEEKDAYS:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], STANDALONESHORTWEEKDAYS:["Sun", 
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], NARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, y MMMM dd", "y MMMM d", "y MMM d", "yyyy-MM-dd"], TIMEFORMATS:["HH:mm:ss v", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], AVAILABLEFORMATS:{"Md":"M/d", 
"MMMMd":"MMMM d", "MMMd":"MMM d"}, FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_af = {ERAS:["v.C.", "n.C."], ERANAMES:["voor Christus", "na Christus"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"], STANDALONEMONTHS:["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", 
"Oktober", "November", "Desember"], SHORTMONTHS:["Jan.", "Feb.", "Mrt.", "Apr.", "Mei", "Jun.", "Jul.", "Aug.", "Sep.", "Okt.", "Nov.", "Des."], STANDALONESHORTMONTHS:["Jan.", "Feb.", "Mrt.", "Apr.", "Mei", "Jun.", "Jul.", "Aug.", "Sep.", "Okt.", "Nov.", "Des."], WEEKDAYS:["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"], STANDALONEWEEKDAYS:["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"], SHORTWEEKDAYS:["So.", "Ma.", "Di.", "Wo.", "Do.", 
"Vr.", "Sa."], STANDALONESHORTWEEKDAYS:["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."], NARROWWEEKDAYS:["S", "M", "D", "W", "D", "V", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "D", "W", "D", "V", "S"], SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["1ste kwartaal", "2de kwartaal", "3de kwartaal", "4de kwartaal"], AMPMS:["vm.", "nm."], DATEFORMATS:["EEEE dd MMMM y", "dd MMMM y", "dd MMM y", "y-MM-dd"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'om' {0}", 
"{1} 'om' {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_am = {ERAS:["ዓ/ዓ", "ዓ/ም"], ERANAMES:["ዓመተ ዓለም", "ዓመተ ምሕረት"], NARROWMONTHS:["ጃ", "ፌ", "ማ", "ኤ", "ሜ", "ጁ", "ጁ", "ኦ", "ሴ", "ኦ", "ኖ", "ዲ"], STANDALONENARROWMONTHS:["ጃ", "ፌ", "ማ", "ኤ", "ሜ", "ጁ", "ጁ", "ኦ", "ሴ", "ኦ", "ኖ", "ዲ"], MONTHS:["ጃንዩወሪ", "ፌብሩወሪ", "ማርች", "ኤፕሪል", "ሜይ", "ጁን", "ጁላይ", "ኦገስት", "ሴፕቴምበር", "ኦክቶበር", "ኖቬምበር", "ዲሴምበር"], STANDALONEMONTHS:["ጃንዩወሪ", "ፌብሩወሪ", "ማርች", "ኤፕሪል", "ሜይ", "ጁን", "ጁላይ", "ኦገስት", "ሴፕቴምበር", "ኦክቶበር", "ኖቬምበር", "ዲሴምበር"], SHORTMONTHS:["ጃንዩ", "ፌብሩ", "ማርች", 
"ኤፕሪ", "ሜይ", "ጁን", "ጁላይ", "ኦገስ", "ሴፕቴ", "ኦክቶ", "ኖቬም", "ዲሴም"], STANDALONESHORTMONTHS:["ጃንዩ", "ፌብሩ", "ማርች", "ኤፕሪ", "ሜይ", "ጁን", "ጁላይ", "ኦገስ", "ሴፕቴ", "ኦክቶ", "ኖቬም", "ዲሴም"], WEEKDAYS:["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"], STANDALONEWEEKDAYS:["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"], SHORTWEEKDAYS:["እሑድ", "ሰኞ", "ማክሰ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"], STANDALONESHORTWEEKDAYS:["እሑድ", "ሰኞ", "ማክሰ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"], NARROWWEEKDAYS:["እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ"], STANDALONENARROWWEEKDAYS:["እ", 
"ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ"], SHORTQUARTERS:["ሩብ1", "ሩብ2", "ሩብ3", "ሩብ4"], QUARTERS:["1ኛው ሩብ", "2ኛው ሩብ", "3ኛው ሩብ", "4ኛው ሩብ"], AMPMS:["ጥዋት", "ከሰዓት"], DATEFORMATS:["y MMMM d, EEEE", "d MMMM y", "d MMM y", "dd/MM/y"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_ar = {ERAS:["ق.م", "م"], ERANAMES:["قبل الميلاد", "ميلادي"], NARROWMONTHS:["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"], STANDALONENARROWMONTHS:["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"], MONTHS:["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], STANDALONEMONTHS:["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], SHORTMONTHS:["يناير", 
"فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], STANDALONESHORTMONTHS:["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], WEEKDAYS:["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], STANDALONEWEEKDAYS:["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], SHORTWEEKDAYS:["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], 
STANDALONESHORTWEEKDAYS:["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], NARROWWEEKDAYS:["ح", "ن", "ث", "ر", "خ", "ج", "س"], STANDALONENARROWWEEKDAYS:["ح", "ن", "ث", "ر", "خ", "ج", "س"], SHORTQUARTERS:["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"], QUARTERS:["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"], AMPMS:["ص", "م"], DATEFORMATS:["EEEE، d MMMM y", "d MMMM y", "dd‏/MM‏/y", "d‏/M‏/y"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", 
"h:mm a"], DATETIMEFORMATS:["{1} في {0}", "{1} في {0}", "{1}، {0}", "{1}، {0}"], FIRSTDAYOFWEEK:5, WEEKENDRANGE:[4, 5], FIRSTWEEKCUTOFFDAY:4};
goog.i18n.DateTimeSymbols_ar_DZ = {ERAS:["ق.م", "م"], ERANAMES:["قبل الميلاد", "ميلادي"], NARROWMONTHS:["ج", "ف", "م", "أ", "م", "ج", "ج", "أ", "س", "أ", "ن", "د"], STANDALONENARROWMONTHS:["ج", "ف", "م", "أ", "م", "ج", "ج", "أ", "س", "أ", "ن", "د"], MONTHS:["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], STANDALONEMONTHS:["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], SHORTMONTHS:["جانفي", 
"فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], STANDALONESHORTMONTHS:["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], WEEKDAYS:["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], STANDALONEWEEKDAYS:["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], SHORTWEEKDAYS:["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], STANDALONESHORTWEEKDAYS:["الأحد", 
"الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], NARROWWEEKDAYS:["ح", "ن", "ث", "ر", "خ", "ج", "س"], STANDALONENARROWWEEKDAYS:["ح", "ن", "ث", "ر", "خ", "ج", "س"], SHORTQUARTERS:["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"], QUARTERS:["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"], AMPMS:["ص", "م"], DATEFORMATS:["EEEE، d MMMM y", "d MMMM y", "dd‏/MM‏/y", "d‏/M‏/y"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} في {0}", 
"{1} في {0}", "{1}، {0}", "{1}، {0}"], FIRSTDAYOFWEEK:5, WEEKENDRANGE:[4, 5], FIRSTWEEKCUTOFFDAY:4};
goog.i18n.DateTimeSymbols_ar_EG = {ZERODIGIT:1632, ERAS:["ق.م", "م"], ERANAMES:["قبل الميلاد", "ميلادي"], NARROWMONTHS:["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"], STANDALONENARROWMONTHS:["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"], MONTHS:["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], STANDALONEMONTHS:["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", 
"ديسمبر"], SHORTMONTHS:["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], STANDALONESHORTMONTHS:["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], WEEKDAYS:["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], STANDALONEWEEKDAYS:["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], SHORTWEEKDAYS:["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", 
"الخميس", "الجمعة", "السبت"], STANDALONESHORTWEEKDAYS:["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], NARROWWEEKDAYS:["ح", "ن", "ث", "ر", "خ", "ج", "س"], STANDALONENARROWWEEKDAYS:["ح", "ن", "ث", "ر", "خ", "ج", "س"], SHORTQUARTERS:["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"], QUARTERS:["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"], AMPMS:["ص", "م"], DATEFORMATS:["EEEE، d MMMM y", "d MMMM y", "dd‏/MM‏/y", "d‏/M‏/y"], TIMEFORMATS:["h:mm:ss a zzzz", 
"h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} في {0}", "{1} في {0}", "{1}، {0}", "{1}، {0}"], FIRSTDAYOFWEEK:5, WEEKENDRANGE:[4, 5], FIRSTWEEKCUTOFFDAY:4};
goog.i18n.DateTimeSymbols_az = {ERAS:["e.ə.", "y.e."], ERANAMES:["eramızdan əvvəl", "yeni era"], NARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], STANDALONENARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], MONTHS:["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"], STANDALONEMONTHS:["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", 
"dekabr"], SHORTMONTHS:["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avq", "sen", "okt", "noy", "dek"], STANDALONESHORTMONTHS:["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avq", "sen", "okt", "noy", "dek"], WEEKDAYS:["bazar", "bazar ertəsi", "çərşənbə axşamı", "çərşənbə", "cümə axşamı", "cümə", "şənbə"], STANDALONEWEEKDAYS:["bazar", "bazar ertəsi", "çərşənbə axşamı", "çərşənbə", "cümə axşamı", "cümə", "şənbə"], SHORTWEEKDAYS:["B.", "B.e.", "Ç.a.", "Ç.", "C.a.", "C.", "Ş."], STANDALONESHORTWEEKDAYS:["B.", 
"B.E.", "Ç.A.", "Ç.", "C.A.", "C.", "Ş."], NARROWWEEKDAYS:["7", "1", "2", "3", "4", "5", "6"], STANDALONENARROWWEEKDAYS:["7", "1", "2", "3", "4", "5", "6"], SHORTQUARTERS:["1-ci kv.", "2-ci kv.", "3-cü kv.", "4-cü kv."], QUARTERS:["1-ci kvartal", "2-ci kvartal", "3-cü kvartal", "4-cü kvartal"], AMPMS:["AM", "PM"], DATEFORMATS:["d MMMM y, EEEE", "d MMMM y", "d MMM y", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1}/{0}", "{1} 'at' {0}", "{1}, {0}", 
"{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_be = {ERAS:["да н.э.", "н.э."], ERANAMES:["да нараджэння Хрыстова", "ад нараджэння Хрыстова"], NARROWMONTHS:["с", "л", "с", "к", "м", "ч", "л", "ж", "в", "к", "л", "с"], STANDALONENARROWMONTHS:["с", "л", "с", "к", "м", "ч", "л", "ж", "в", "к", "л", "с"], MONTHS:["студзеня", "лютага", "сакавіка", "красавіка", "мая", "чэрвеня", "ліпеня", "жніўня", "верасня", "кастрычніка", "лістапада", "снежня"], STANDALONEMONTHS:["студзень", "люты", "сакавік", "красавік", "май", "чэрвень", 
"ліпень", "жнівень", "верасень", "кастрычнік", "лістапад", "снежань"], SHORTMONTHS:["сту", "лют", "сак", "кра", "мая", "чэр", "ліп", "жні", "вер", "кас", "ліс", "сне"], STANDALONESHORTMONTHS:["сту", "лют", "сак", "кра", "май", "чэр", "ліп", "жні", "вер", "кас", "ліс", "сне"], WEEKDAYS:["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"], STANDALONEWEEKDAYS:["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"], SHORTWEEKDAYS:["нд", "пн", "аў", "ср", 
"чц", "пт", "сб"], STANDALONESHORTWEEKDAYS:["нд", "пн", "аў", "ср", "чц", "пт", "сб"], NARROWWEEKDAYS:["н", "п", "а", "с", "ч", "п", "с"], STANDALONENARROWWEEKDAYS:["н", "п", "а", "с", "ч", "п", "с"], SHORTQUARTERS:["1-шы кв.", "2-гі кв.", "3-ці кв.", "4-ты кв."], QUARTERS:["1-шы квартал", "2-гі квартал", "3-ці квартал", "4-ты квартал"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y 'г'.", "d MMMM y 'г'.", "d MMM y 'г'.", "d.MM.yy"], TIMEFORMATS:["HH:mm:ss, zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], 
DATETIMEFORMATS:["{1} 'у' {0}", "{1} 'у' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_bg = {ERAS:["пр.Хр.", "сл.Хр."], ERANAMES:["преди Христа", "след Христа"], NARROWMONTHS:["я", "ф", "м", "а", "м", "ю", "ю", "а", "с", "о", "н", "д"], STANDALONENARROWMONTHS:["я", "ф", "м", "а", "м", "ю", "ю", "а", "с", "о", "н", "д"], MONTHS:["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"], STANDALONEMONTHS:["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", 
"ноември", "декември"], SHORTMONTHS:["яну", "фев", "март", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"], STANDALONESHORTMONTHS:["яну", "фев", "март", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"], WEEKDAYS:["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"], STANDALONEWEEKDAYS:["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"], SHORTWEEKDAYS:["нд", "пн", "вт", "ср", "чт", "пт", "сб"], STANDALONESHORTWEEKDAYS:["нд", 
"пн", "вт", "ср", "чт", "пт", "сб"], NARROWWEEKDAYS:["н", "п", "в", "с", "ч", "п", "с"], STANDALONENARROWWEEKDAYS:["н", "п", "в", "с", "ч", "п", "с"], SHORTQUARTERS:["1. трим.", "2. трим.", "3. трим.", "4. трим."], QUARTERS:["1. тримесечие", "2. тримесечие", "3. тримесечие", "4. тримесечие"], AMPMS:["пр.об.", "сл.об."], DATEFORMATS:["EEEE, d MMMM y 'г'.", "d MMMM y 'г'.", "d.MM.y 'г'.", "d.MM.yy 'г'."], TIMEFORMATS:["H:mm:ss 'ч'. zzzz", "H:mm:ss 'ч'. z", "H:mm:ss 'ч'.", "H:mm 'ч'."], DATETIMEFORMATS:["{1} 'в' {0}", 
"{1} 'в' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_bn = {ZERODIGIT:2534, ERAS:["খ্রিস্টপূর্ব", "খৃষ্টাব্দ"], ERANAMES:["খ্রিস্টপূর্ব", "খ্রীষ্টাব্দ"], NARROWMONTHS:["জা", "ফে", "মা", "এ", "মে", "জুন", "জু", "আ", "সে", "অ", "ন", "ডি"], STANDALONENARROWMONTHS:["জা", "ফে", "মা", "এ", "মে", "জুন", "জু", "আ", "সে", "অ", "ন", "ডি"], MONTHS:["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"], STANDALONEMONTHS:["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", 
"মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"], SHORTMONTHS:["জানু", "ফেব", "মার্চ", "এপ্রি", "মে", "জুন", "জুল", "আগ", "সেপ", "অক্টো", "নভে", "ডিসে"], STANDALONESHORTMONTHS:["জানু", "ফেব", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"], WEEKDAYS:["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"], STANDALONEWEEKDAYS:["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"], 
SHORTWEEKDAYS:["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"], STANDALONESHORTWEEKDAYS:["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"], NARROWWEEKDAYS:["র", "সো", "ম", "বু", "বৃ", "শু", "শ"], STANDALONENARROWWEEKDAYS:["র", "সো", "ম", "বু", "বৃ", "শু", "শ"], SHORTQUARTERS:["ত্রৈমাসিক", "দ্বিতীয় ত্রৈমাসিক", "তৃতীয় ত্রৈমাসিক", "চতুর্থ ত্রৈমাসিক"], QUARTERS:["ত্রৈমাসিক", "দ্বিতীয় ত্রৈমাসিক", "তৃতীয় ত্রৈমাসিক", "চতুর্থ ত্রৈমাসিক"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM, y", 
"d MMMM, y", "d MMM, y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} এ {0}", "{1} এ {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_br = {ERAS:["a-raok J.K.", "goude J.K."], ERANAMES:["a-raok Jezuz-Krist", "goude Jezuz-Krist"], NARROWMONTHS:["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], STANDALONENARROWMONTHS:["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], MONTHS:["Genver", "Cʼhwevrer", "Meurzh", "Ebrel", "Mae", "Mezheven", "Gouere", "Eost", "Gwengolo", "Here", "Du", "Kerzu"], STANDALONEMONTHS:["Genver", "Cʼhwevrer", "Meurzh", "Ebrel", "Mae", "Mezheven", 
"Gouere", "Eost", "Gwengolo", "Here", "Du", "Kerzu"], SHORTMONTHS:["Gen.", "Cʼhwe.", "Meur.", "Ebr.", "Mae", "Mezh.", "Goue.", "Eost", "Gwen.", "Here", "Du", "Kzu."], STANDALONESHORTMONTHS:["Gen.", "Cʼhwe.", "Meur.", "Ebr.", "Mae", "Mezh.", "Goue.", "Eost", "Gwen.", "Here", "Du", "Kzu."], WEEKDAYS:["Sul", "Lun", "Meurzh", "Mercʼher", "Yaou", "Gwener", "Sadorn"], STANDALONEWEEKDAYS:["Sul", "Lun", "Meurzh", "Mercʼher", "Yaou", "Gwener", "Sadorn"], SHORTWEEKDAYS:["Sul", "Lun", "Meu.", "Mer.", "Yaou", 
"Gwe.", "Sad."], STANDALONESHORTWEEKDAYS:["Sul", "Lun", "Meu.", "Mer.", "Yaou", "Gwe.", "Sad."], NARROWWEEKDAYS:["Su", "L", "Mz", "Mc", "Y", "G", "Sa"], STANDALONENARROWWEEKDAYS:["Su", "L", "Mz", "Mc", "Y", "G", "Sa"], SHORTQUARTERS:["1añ trim.", "2l trim.", "3e trim.", "4e trim."], QUARTERS:["1añ trimiziad", "2l trimiziad", "3e trimiziad", "4e trimiziad"], AMPMS:["A.M.", "G.M."], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", 
"HH:mm"], DATETIMEFORMATS:["{1} 'da' {0}", "{1} 'da' {0}", "{1}, {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_bs = {ERAS:["p. n. e.", "n. e."], ERANAMES:["prije nove ere", "nove ere"], NARROWMONTHS:["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], STANDALONENARROWMONTHS:["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], MONTHS:["januar", "februar", "mart", "april", "maj", "juni", "juli", "august", "septembar", "oktobar", "novembar", "decembar"], STANDALONEMONTHS:["januar", "februar", "mart", "april", "maj", "juni", "juli", "august", "septembar", "oktobar", 
"novembar", "decembar"], SHORTMONTHS:["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], STANDALONESHORTMONTHS:["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], WEEKDAYS:["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"], STANDALONEWEEKDAYS:["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"], SHORTWEEKDAYS:["ned", "pon", "uto", "sri", "čet", "pet", "sub"], STANDALONESHORTWEEKDAYS:["ned", 
"pon", "uto", "sri", "čet", "pet", "sub"], NARROWWEEKDAYS:["N", "P", "U", "S", "Č", "P", "S"], STANDALONENARROWWEEKDAYS:["n", "p", "u", "s", "č", "p", "s"], SHORTQUARTERS:["KV1", "KV2", "KV3", "KV4"], QUARTERS:["Prvi kvartal", "Drugi kvartal", "Treći kvartal", "Četvrti kvartal"], AMPMS:["prijepodne", "popodne"], DATEFORMATS:["EEEE, d. MMMM y.", "d. MMMM y.", "d. MMM y.", "d. M. y."], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'u' {0}", "{1} 'u' {0}", "{1} {0}", 
"{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_ca = {ERAS:["aC", "dC"], ERANAMES:["abans de Crist", "després de Crist"], NARROWMONTHS:["GN", "FB", "MÇ", "AB", "MG", "JN", "JL", "AG", "ST", "OC", "NV", "DS"], STANDALONENARROWMONTHS:["GN", "FB", "MÇ", "AB", "MG", "JN", "JL", "AG", "ST", "OC", "NV", "DS"], MONTHS:["de gener", "de febrer", "de març", "d’abril", "de maig", "de juny", "de juliol", "d’agost", "de setembre", "d’octubre", "de novembre", "de desembre"], STANDALONEMONTHS:["gener", "febrer", "març", "abril", "maig", 
"juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"], SHORTMONTHS:["de gen.", "de febr.", "de març", "d’abr.", "de maig", "de juny", "de jul.", "d’ag.", "de set.", "d’oct.", "de nov.", "de des."], STANDALONESHORTMONTHS:["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."], WEEKDAYS:["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"], STANDALONEWEEKDAYS:["diumenge", "dilluns", "dimarts", "dimecres", "dijous", 
"divendres", "dissabte"], SHORTWEEKDAYS:["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."], STANDALONESHORTWEEKDAYS:["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."], NARROWWEEKDAYS:["dg", "dl", "dt", "dc", "dj", "dv", "ds"], STANDALONENARROWWEEKDAYS:["dg", "dl", "dt", "dc", "dj", "dv", "ds"], SHORTQUARTERS:["1T", "2T", "3T", "4T"], QUARTERS:["1r trimestre", "2n trimestre", "3r trimestre", "4t trimestre"], AMPMS:["a. m.", "p. m."], DATEFORMATS:["EEEE, d MMMM 'de' y", "d MMMM 'de' y", "d MMM y", "d/M/yy"], 
TIMEFORMATS:["H:mm:ss (zzzz)", "H:mm:ss z", "H:mm:ss", "H:mm"], DATETIMEFORMATS:["{1}, 'a' 'les' {0}", "{1}, 'a' 'les' {0}", "{1}, {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_chr = {ERAS:["BC", "AD"], ERANAMES:["ᏧᏓᎷᎸ ᎤᎷᎯᏍᏗ ᎦᎶᏁᏛ", "ᎠᏃ ᏙᎻᏂ"], NARROWMONTHS:["Ꭴ", "Ꭷ", "Ꭰ", "Ꭷ", "Ꭰ", "Ꮥ", "Ꭻ", "Ꭶ", "Ꮪ", "Ꮪ", "Ꮕ", "Ꭵ"], STANDALONENARROWMONTHS:["Ꭴ", "Ꭷ", "Ꭰ", "Ꭷ", "Ꭰ", "Ꮥ", "Ꭻ", "Ꭶ", "Ꮪ", "Ꮪ", "Ꮕ", "Ꭵ"], MONTHS:["ᎤᏃᎸᏔᏅ", "ᎧᎦᎵ", "ᎠᏅᏱ", "ᎧᏬᏂ", "ᎠᏂᏍᎬᏘ", "ᏕᎭᎷᏱ", "ᎫᏰᏉᏂ", "ᎦᎶᏂ", "ᏚᎵᏍᏗ", "ᏚᏂᏅᏗ", "ᏅᏓᏕᏆ", "ᎥᏍᎩᏱ"], STANDALONEMONTHS:["ᎤᏃᎸᏔᏅ", "ᎧᎦᎵ", "ᎠᏅᏱ", "ᎧᏬᏂ", "ᎠᏂᏍᎬᏘ", "ᏕᎭᎷᏱ", "ᎫᏰᏉᏂ", "ᎦᎶᏂ", "ᏚᎵᏍᏗ", "ᏚᏂᏅᏗ", "ᏅᏓᏕᏆ", "ᎥᏍᎩᏱ"], SHORTMONTHS:["ᎤᏃ", "ᎧᎦ", "ᎠᏅ", "ᎧᏬ", 
"ᎠᏂ", "ᏕᎭ", "ᎫᏰ", "ᎦᎶ", "ᏚᎵ", "ᏚᏂ", "ᏅᏓ", "ᎥᏍ"], STANDALONESHORTMONTHS:["ᎤᏃ", "ᎧᎦ", "ᎠᏅ", "ᎧᏬ", "ᎠᏂ", "ᏕᎭ", "ᎫᏰ", "ᎦᎶ", "ᏚᎵ", "ᏚᏂ", "ᏅᏓ", "ᎥᏍ"], WEEKDAYS:["ᎤᎾᏙᏓᏆᏍᎬ", "ᎤᎾᏙᏓᏉᏅᎯ", "ᏔᎵᏁᎢᎦ", "ᏦᎢᏁᎢᎦ", "ᏅᎩᏁᎢᎦ", "ᏧᎾᎩᎶᏍᏗ", "ᎤᎾᏙᏓᏈᏕᎾ"], STANDALONEWEEKDAYS:["ᎤᎾᏙᏓᏆᏍᎬ", "ᎤᎾᏙᏓᏉᏅᎯ", "ᏔᎵᏁᎢᎦ", "ᏦᎢᏁᎢᎦ", "ᏅᎩᏁᎢᎦ", "ᏧᎾᎩᎶᏍᏗ", "ᎤᎾᏙᏓᏈᏕᎾ"], SHORTWEEKDAYS:["ᏆᏍᎬ", "ᏉᏅᎯ", "ᏔᎵᏁ", "ᏦᎢᏁ", "ᏅᎩᏁ", "ᏧᎾᎩ", "ᏈᏕᎾ"], STANDALONESHORTWEEKDAYS:["ᏆᏍᎬ", "ᏉᏅᎯ", "ᏔᎵᏁ", "ᏦᎢᏁ", "ᏅᎩᏁ", "ᏧᎾᎩ", "ᏈᏕᎾ"], NARROWWEEKDAYS:["Ꮖ", "Ꮙ", "Ꮤ", "Ꮶ", "Ꮕ", "Ꮷ", 
"Ꭴ"], STANDALONENARROWWEEKDAYS:["Ꮖ", "Ꮙ", "Ꮤ", "Ꮶ", "Ꮕ", "Ꮷ", "Ꭴ"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1st ᎩᏄᏙᏗ", "2nd ᎩᏄᏙᏗ", "3rd ᎩᏄᏙᏗ", "4th ᎩᏄᏙᏗ"], AMPMS:["ᏌᎾᎴ", "ᏒᎯᏱᎢᏗᏢ"], DATEFORMATS:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} ᎤᎾᎢ {0}", "{1} ᎤᎾᎢ {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_cs = {ERAS:["př. n. l.", "n. l."], ERANAMES:["před naším letopočtem", "našeho letopočtu"], NARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], STANDALONENARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], MONTHS:["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"], STANDALONEMONTHS:["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", 
"září", "říjen", "listopad", "prosinec"], SHORTMONTHS:["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"], STANDALONESHORTMONTHS:["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"], WEEKDAYS:["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"], STANDALONEWEEKDAYS:["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"], SHORTWEEKDAYS:["ne", "po", "út", "st", "čt", "pá", "so"], STANDALONESHORTWEEKDAYS:["ne", 
"po", "út", "st", "čt", "pá", "so"], NARROWWEEKDAYS:["N", "P", "Ú", "S", "Č", "P", "S"], STANDALONENARROWWEEKDAYS:["N", "P", "Ú", "S", "Č", "P", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1. čtvrtletí", "2. čtvrtletí", "3. čtvrtletí", "4. čtvrtletí"], AMPMS:["dop.", "odp."], DATEFORMATS:["EEEE d. MMMM y", "d. MMMM y", "d. M. y", "dd.MM.yy"], TIMEFORMATS:["H:mm:ss, zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], DATETIMEFORMATS:["{1} 'v' {0}", "{1} 'v' {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, 
WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_cy = {ERAS:["CC", "OC"], ERANAMES:["Cyn Crist", "Oed Crist"], NARROWMONTHS:["I", "Ch", "M", "E", "M", "M", "G", "A", "M", "H", "T", "Rh"], STANDALONENARROWMONTHS:["I", "Ch", "M", "E", "M", "M", "G", "A", "M", "H", "T", "Rh"], MONTHS:["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"], STANDALONEMONTHS:["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", 
"Tachwedd", "Rhagfyr"], SHORTMONTHS:["Ion", "Chwef", "Maw", "Ebr", "Mai", "Meh", "Gorff", "Awst", "Medi", "Hyd", "Tach", "Rhag"], STANDALONESHORTMONTHS:["Ion", "Chw", "Maw", "Ebr", "Mai", "Meh", "Gor", "Awst", "Medi", "Hyd", "Tach", "Rhag"], WEEKDAYS:["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"], STANDALONEWEEKDAYS:["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"], SHORTWEEKDAYS:["Sul", "Llun", "Maw", 
"Mer", "Iau", "Gwen", "Sad"], STANDALONESHORTWEEKDAYS:["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"], NARROWWEEKDAYS:["S", "Ll", "M", "M", "I", "G", "S"], STANDALONENARROWWEEKDAYS:["S", "Ll", "M", "M", "I", "G", "S"], SHORTQUARTERS:["Ch1", "Ch2", "Ch3", "Ch4"], QUARTERS:["chwarter 1af", "2il chwarter", "3ydd chwarter", "4ydd chwarter"], AMPMS:["yb", "yh"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'am' {0}", 
"{1} 'am' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_da = {ERAS:["f.Kr.", "e.Kr."], ERANAMES:["før Kristus", "efter Kristus"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"], STANDALONEMONTHS:["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", 
"november", "december"], SHORTMONTHS:["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], STANDALONESHORTMONTHS:["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], WEEKDAYS:["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"], STANDALONEWEEKDAYS:["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"], SHORTWEEKDAYS:["søn.", "man.", "tirs.", "ons.", "tors.", "fre.", "lør."], 
STANDALONESHORTWEEKDAYS:["søn.", "man.", "tirs.", "ons.", "tors.", "fre.", "lør."], NARROWWEEKDAYS:["S", "M", "T", "O", "T", "F", "L"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "O", "T", "F", "L"], SHORTQUARTERS:["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."], QUARTERS:["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE 'den' d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.y"], TIMEFORMATS:["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"], DATETIMEFORMATS:["{1} 'kl'. {0}", 
"{1} 'kl'. {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_de = {ERAS:["v. Chr.", "n. Chr."], ERANAMES:["v. Chr.", "n. Chr."], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], STANDALONEMONTHS:["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", 
"Dezember"], SHORTMONTHS:["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."], STANDALONESHORTMONTHS:["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], WEEKDAYS:["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], STANDALONEWEEKDAYS:["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], SHORTWEEKDAYS:["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], STANDALONESHORTWEEKDAYS:["So", 
"Mo", "Di", "Mi", "Do", "Fr", "Sa"], NARROWWEEKDAYS:["S", "M", "D", "M", "D", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "D", "M", "D", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "dd.MM.y", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'um' {0}", "{1} 'um' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, 
WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_de_AT = {ERAS:["v. Chr.", "n. Chr."], ERANAMES:["v. Chr.", "n. Chr."], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], STANDALONEMONTHS:["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", 
"Dezember"], SHORTMONTHS:["Jän.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], STANDALONESHORTMONTHS:["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], WEEKDAYS:["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], STANDALONEWEEKDAYS:["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], SHORTWEEKDAYS:["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], STANDALONESHORTWEEKDAYS:["So", 
"Mo", "Di", "Mi", "Do", "Fr", "Sa"], NARROWWEEKDAYS:["S", "M", "D", "M", "D", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "D", "M", "D", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "dd.MM.y", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'um' {0}", "{1} 'um' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, 
WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_de_CH = goog.i18n.DateTimeSymbols_de;
goog.i18n.DateTimeSymbols_el = {ERAS:["π.Χ.", "μ.Χ."], ERANAMES:["προ Χριστού", "μετά Χριστόν"], NARROWMONTHS:["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"], STANDALONENARROWMONTHS:["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"], MONTHS:["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαΐου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"], STANDALONEMONTHS:["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", 
"Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"], SHORTMONTHS:["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαΐ", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"], STANDALONESHORTMONTHS:["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιούν", "Ιούλ", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"], WEEKDAYS:["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"], STANDALONEWEEKDAYS:["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"], SHORTWEEKDAYS:["Κυρ", "Δευ", 
"Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"], STANDALONESHORTWEEKDAYS:["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"], NARROWWEEKDAYS:["Κ", "Δ", "Τ", "Τ", "Π", "Π", "Σ"], STANDALONENARROWWEEKDAYS:["Κ", "Δ", "Τ", "Τ", "Π", "Π", "Σ"], SHORTQUARTERS:["Τ1", "Τ2", "Τ3", "Τ4"], QUARTERS:["1ο τρίμηνο", "2ο τρίμηνο", "3ο τρίμηνο", "4ο τρίμηνο"], AMPMS:["π.μ.", "μ.μ."], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} στις {0}", 
"{1} στις {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_en = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], STANDALONEMONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
"November", "December"], SHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], WEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], STANDALONEWEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], SHORTWEEKDAYS:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], STANDALONESHORTWEEKDAYS:["Sun", 
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], NARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, 
WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_en_AU = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], STANDALONEMONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
"November", "December"], SHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], WEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], STANDALONEWEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], SHORTWEEKDAYS:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], STANDALONESHORTWEEKDAYS:["Sun", 
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], NARROWWEEKDAYS:["Su.", "M.", "Tu.", "W.", "Th.", "F.", "Sa."], STANDALONENARROWWEEKDAYS:["Su.", "M.", "Tu.", "W.", "Th.", "F.", "Sa."], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["am", "pm"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", 
"{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_en_CA = {ERAS:["BC", "AD"], ERANAMES:["before Christ", "Anno Domini"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], STANDALONEMONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
"November", "December"], SHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], WEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], STANDALONEWEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], SHORTWEEKDAYS:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], STANDALONESHORTWEEKDAYS:["Sun", 
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], NARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], 
FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_en_GB = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], STANDALONEMONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
"November", "December"], SHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], WEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], STANDALONEWEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], SHORTWEEKDAYS:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], STANDALONESHORTWEEKDAYS:["Sun", 
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], NARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["am", "pm"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, 
WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_en_IE = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], STANDALONEMONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
"November", "December"], SHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], WEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], STANDALONEWEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], SHORTWEEKDAYS:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], STANDALONESHORTWEEKDAYS:["Sun", 
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], NARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, 
WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_en_IN = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], STANDALONEMONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
"November", "December"], SHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], WEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], STANDALONEWEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], SHORTWEEKDAYS:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], STANDALONESHORTWEEKDAYS:["Sun", 
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], NARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["am", "pm"], DATEFORMATS:["EEEE, d MMMM, y", "d MMMM y", "dd-MMM-y", "dd/MM/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], 
FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_en_SG = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], STANDALONEMONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
"November", "December"], SHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], WEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], STANDALONEWEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], SHORTWEEKDAYS:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], STANDALONESHORTWEEKDAYS:["Sun", 
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], NARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["am", "pm"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, 
WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_en_US = goog.i18n.DateTimeSymbols_en;
goog.i18n.DateTimeSymbols_en_ZA = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], STANDALONEMONTHS:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
"November", "December"], SHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], WEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], STANDALONEWEEKDAYS:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], SHORTWEEKDAYS:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], STANDALONESHORTWEEKDAYS:["Sun", 
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], NARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], AMPMS:["am", "pm"], DATEFORMATS:["EEEE, dd MMMM y", "dd MMMM y", "dd MMM y", "y/MM/dd"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, 
WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_es = {ERAS:["a. C.", "d. C."], ERANAMES:["antes de Cristo", "después de Cristo"], NARROWMONTHS:["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"], STANDALONEMONTHS:["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", 
"octubre", "noviembre", "diciembre"], SHORTMONTHS:["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], STANDALONESHORTMONTHS:["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], WEEKDAYS:["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"], STANDALONEWEEKDAYS:["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"], SHORTWEEKDAYS:["dom", "lun", "mar", "mié", "jue", "vie", "sáb"], STANDALONESHORTWEEKDAYS:["dom", 
"lun", "mar", "mié", "jue", "vie", "sáb"], NARROWWEEKDAYS:["D", "L", "M", "X", "J", "V", "S"], STANDALONENARROWWEEKDAYS:["D", "L", "M", "X", "J", "V", "S"], SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1.er trimestre", "2.º trimestre", "3.er trimestre", "4.º trimestre"], AMPMS:["a. m.", "p. m."], DATEFORMATS:["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d MMM y", "d/M/yy"], TIMEFORMATS:["H:mm:ss (zzzz)", "H:mm:ss z", "H:mm:ss", "H:mm"], DATETIMEFORMATS:["{1}, {0}", "{1}, {0}", "{1}, {0}", 
"{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_es_419 = {ERAS:["a.C.", "d.C."], ERANAMES:["antes de Cristo", "después de Cristo"], NARROWMONTHS:["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"], STANDALONEMONTHS:["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", 
"octubre", "noviembre", "diciembre"], SHORTMONTHS:["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], STANDALONESHORTMONTHS:["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], WEEKDAYS:["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"], STANDALONEWEEKDAYS:["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"], SHORTWEEKDAYS:["dom", "lun", "mar", "mié", "jue", "vie", "sáb"], STANDALONESHORTWEEKDAYS:["dom", 
"lun", "mar", "mié", "jue", "vie", "sáb"], NARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], STANDALONENARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1.º trimestre", "2.º trimestre", "3.º trimestre", "4.º trimestre"], AMPMS:["a. m.", "p. m."], DATEFORMATS:["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d MMM y", "d/M/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1}, {0}", "{1}, {0}", "{1}, {0}", 
"{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_es_ES = goog.i18n.DateTimeSymbols_es;
goog.i18n.DateTimeSymbols_es_MX = {ERAS:["a.C.", "d.C."], ERANAMES:["antes de Cristo", "después de Cristo"], NARROWMONTHS:["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"], STANDALONEMONTHS:["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", 
"octubre", "noviembre", "diciembre"], SHORTMONTHS:["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], STANDALONESHORTMONTHS:["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], WEEKDAYS:["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"], STANDALONEWEEKDAYS:["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"], SHORTWEEKDAYS:["dom", "lun", "mar", "mié", "jue", "vie", "sáb"], STANDALONESHORTWEEKDAYS:["dom", 
"lun", "mar", "mié", "jue", "vie", "sáb"], NARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], STANDALONENARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1.er trimestre", "2.º trimestre", "3.er trimestre", "4.º trimestre"], AMPMS:["a. m.", "p. m."], DATEFORMATS:["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d MMM y", "dd/MM/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1}, {0}", "{1}, {0}", "{1}, {0}", 
"{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_es_US = {ERAS:["a.C.", "d.C."], ERANAMES:["antes de Cristo", "después de Cristo"], NARROWMONTHS:["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"], STANDALONEMONTHS:["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", 
"octubre", "noviembre", "diciembre"], SHORTMONTHS:["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], STANDALONESHORTMONTHS:["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], WEEKDAYS:["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"], STANDALONEWEEKDAYS:["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"], SHORTWEEKDAYS:["dom", "lun", "mar", "mié", "jue", "vie", "sáb"], STANDALONESHORTWEEKDAYS:["dom", 
"lun", "mar", "mié", "jue", "vie", "sáb"], NARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], STANDALONENARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1er trimestre", "2.º trimestre", "3.º trimestre", "4.º trimestre"], AMPMS:["a. m.", "p. m."], DATEFORMATS:["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d MMM y", "d/M/y"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1}, {0}", "{1}, {0}", "{1}, {0}", 
"{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_et = {ERAS:["eKr", "pKr"], ERANAMES:["enne Kristust", "pärast Kristust"], NARROWMONTHS:["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"], STANDALONEMONTHS:["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", 
"oktoober", "november", "detsember"], SHORTMONTHS:["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"], STANDALONESHORTMONTHS:["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"], WEEKDAYS:["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"], STANDALONEWEEKDAYS:["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"], SHORTWEEKDAYS:["P", "E", "T", "K", 
"N", "R", "L"], STANDALONESHORTWEEKDAYS:["P", "E", "T", "K", "N", "R", "L"], NARROWWEEKDAYS:["P", "E", "T", "K", "N", "R", "L"], STANDALONENARROWWEEKDAYS:["P", "E", "T", "K", "N", "R", "L"], SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1}, 'kell' {0}", "{1}, 'kell' {0}", 
"{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_eu = {ERAS:["K.a.", "K.o."], ERANAMES:["K.a.", "Kristo ondoren"], NARROWMONTHS:["U", "O", "M", "A", "M", "E", "U", "A", "I", "U", "A", "A"], STANDALONENARROWMONTHS:["U", "O", "M", "A", "M", "E", "U", "A", "I", "U", "A", "A"], MONTHS:["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"], STANDALONEMONTHS:["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", 
"urria", "azaroa", "abendua"], SHORTMONTHS:["urt.", "ots.", "mar.", "api.", "mai.", "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe."], STANDALONESHORTMONTHS:["urt.", "ots.", "mar.", "api.", "mai.", "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe."], WEEKDAYS:["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"], STANDALONEWEEKDAYS:["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"], SHORTWEEKDAYS:["ig.", "al.", "ar.", 
"az.", "og.", "or.", "lr."], STANDALONESHORTWEEKDAYS:["ig.", "al.", "ar.", "az.", "og.", "or.", "lr."], NARROWWEEKDAYS:["I", "A", "A", "A", "O", "O", "L"], STANDALONENARROWWEEKDAYS:["I", "A", "A", "A", "O", "O", "L"], SHORTQUARTERS:["1Hh", "2Hh", "3Hh", "4Hh"], QUARTERS:["1. hiruhilekoa", "2. hiruhilekoa", "3. hiruhilekoa", "4. hiruhilekoa"], AMPMS:["AM", "PM"], DATEFORMATS:["y('e')'ko' MMMM'ren' d('a'), EEEE", "y('e')'ko' MMMM'ren' d('a')", "y('e')'ko' MMM d('a')", "yy/M/d"], TIMEFORMATS:["HH:mm:ss (zzzz)", 
"HH:mm:ss (z)", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} ({0})", "{1} ({0})", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_fa = {ZERODIGIT:1776, ERAS:["ق.م.", "م."], ERANAMES:["قبل از میلاد", "میلادی"], NARROWMONTHS:["ژ", "ف", "م", "آ", "م", "ژ", "ژ", "ا", "س", "ا", "ن", "د"], STANDALONENARROWMONTHS:["ژ", "ف", "م", "آ", "م", "ژ", "ژ", "ا", "س", "ا", "ن", "د"], MONTHS:["ژانویهٔ", "فوریهٔ", "مارس", "آوریل", "مهٔ", "ژوئن", "ژوئیهٔ", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"], STANDALONEMONTHS:["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"], 
SHORTMONTHS:["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"], STANDALONESHORTMONTHS:["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"], WEEKDAYS:["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"], STANDALONEWEEKDAYS:["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"], SHORTWEEKDAYS:["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"], 
STANDALONESHORTWEEKDAYS:["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"], NARROWWEEKDAYS:["ی", "د", "س", "چ", "پ", "ج", "ش"], STANDALONENARROWWEEKDAYS:["ی", "د", "س", "چ", "پ", "ج", "ش"], SHORTQUARTERS:["س‌م۱", "س‌م۲", "س‌م۳", "س‌م۴"], QUARTERS:["سه‌ماههٔ اول", "سه‌ماههٔ دوم", "سه‌ماههٔ سوم", "سه‌ماههٔ چهارم"], AMPMS:["قبل‌ازظهر", "بعدازظهر"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "y/M/d"], TIMEFORMATS:["H:mm:ss (zzzz)", "H:mm:ss (z)", "H:mm:ss", "H:mm"], DATETIMEFORMATS:["{1} ساعت {0}", 
"{1} ساعت {0}", "{1}، {0}", "{1}, {0}"], FIRSTDAYOFWEEK:5, WEEKENDRANGE:[4, 4], FIRSTWEEKCUTOFFDAY:4};
goog.i18n.DateTimeSymbols_fi = {ERAS:["eKr.", "jKr."], ERANAMES:["ennen Kristuksen syntymää", "jälkeen Kristuksen syntymän"], NARROWMONTHS:["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"], STANDALONENARROWMONTHS:["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"], MONTHS:["tammikuuta", "helmikuuta", "maaliskuuta", "huhtikuuta", "toukokuuta", "kesäkuuta", "heinäkuuta", "elokuuta", "syyskuuta", "lokakuuta", "marraskuuta", "joulukuuta"], STANDALONEMONTHS:["tammikuu", "helmikuu", 
"maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"], SHORTMONTHS:["tammik.", "helmik.", "maalisk.", "huhtik.", "toukok.", "kesäk.", "heinäk.", "elok.", "syysk.", "lokak.", "marrask.", "jouluk."], STANDALONESHORTMONTHS:["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"], WEEKDAYS:["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"], 
STANDALONEWEEKDAYS:["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"], SHORTWEEKDAYS:["su", "ma", "ti", "ke", "to", "pe", "la"], STANDALONESHORTWEEKDAYS:["su", "ma", "ti", "ke", "to", "pe", "la"], NARROWWEEKDAYS:["S", "M", "T", "K", "T", "P", "L"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "K", "T", "P", "L"], SHORTQUARTERS:["1. nelj.", "2. nelj.", "3. nelj.", "4. nelj."], QUARTERS:["1. neljännes", "2. neljännes", "3. neljännes", "4. neljännes"], AMPMS:["ap.", 
"ip."], DATEFORMATS:["cccc d. MMMM y", "d. MMMM y", "d.M.y", "d.M.y"], TIMEFORMATS:["H.mm.ss zzzz", "H.mm.ss z", "H.mm.ss", "H.mm"], DATETIMEFORMATS:["{1} 'klo' {0}", "{1} 'klo' {0}", "{1} 'klo' {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_fil = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], STANDALONENARROWMONTHS:["E", "P", "M", "A", "M", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], MONTHS:["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", "Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"], STANDALONEMONTHS:["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", 
"Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"], SHORTMONTHS:["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], STANDALONESHORTMONTHS:["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], WEEKDAYS:["Linggo", "Lunes", "Martes", "Miyerkules", "Huwebes", "Biyernes", "Sabado"], STANDALONEWEEKDAYS:["Linggo", "Lunes", "Martes", "Miyerkules", "Huwebes", "Biyernes", "Sabado"], SHORTWEEKDAYS:["Lin", "Lun", "Mar", "Miy", "Huw", 
"Biy", "Sab"], STANDALONESHORTWEEKDAYS:["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"], NARROWWEEKDAYS:["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"], STANDALONENARROWWEEKDAYS:["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["ika-1 quarter", "ika-2 quarter", "ika-3 quarter", "ika-4 na quarter"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", 
"h:mm a"], DATETIMEFORMATS:["{1} 'nang' {0}", "{1} 'nang' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_fr = {ERAS:["av. J.-C.", "ap. J.-C."], ERANAMES:["avant Jésus-Christ", "après Jésus-Christ"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"], STANDALONEMONTHS:["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", 
"septembre", "octobre", "novembre", "décembre"], SHORTMONTHS:["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], STANDALONESHORTMONTHS:["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], WEEKDAYS:["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], STANDALONEWEEKDAYS:["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], SHORTWEEKDAYS:["dim.", "lun.", "mar.", 
"mer.", "jeu.", "ven.", "sam."], STANDALONESHORTWEEKDAYS:["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], NARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], STANDALONENARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'à' {0}", 
"{1} 'à' {0}", "{1}, {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_fr_CA = {ERAS:["av. J.-C.", "ap. J.-C."], ERANAMES:["avant Jésus-Christ", "après Jésus-Christ"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"], STANDALONEMONTHS:["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", 
"septembre", "octobre", "novembre", "décembre"], SHORTMONTHS:["janv.", "févr.", "mars", "avr.", "mai", "juin", "juill.", "août", "sept.", "oct.", "nov.", "déc."], STANDALONESHORTMONTHS:["janv.", "févr.", "mars", "avr.", "mai", "juin", "juill.", "août", "sept.", "oct.", "nov.", "déc."], WEEKDAYS:["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], STANDALONEWEEKDAYS:["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], SHORTWEEKDAYS:["dim.", "lun.", "mar.", 
"mer.", "jeu.", "ven.", "sam."], STANDALONESHORTWEEKDAYS:["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], NARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], STANDALONENARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "y-MM-dd"], TIMEFORMATS:["HH 'h' mm 'min' ss 's' zzzz", "HH 'h' mm 'min' ss 's' z", 
"HH 'h' mm 'min' ss 's'", "HH 'h' mm"], DATETIMEFORMATS:["{1} 'à' {0}", "{1} 'à' {0}", "{1}, {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_ga = {ERAS:["RC", "AD"], ERANAMES:["Roimh Chríost", "Anno Domini"], NARROWMONTHS:["E", "F", "M", "A", "B", "M", "I", "L", "M", "D", "S", "N"], STANDALONENARROWMONTHS:["E", "F", "M", "A", "B", "M", "I", "L", "M", "D", "S", "N"], MONTHS:["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"], STANDALONEMONTHS:["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", 
"Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"], SHORTMONTHS:["Ean", "Feabh", "Márta", "Aib", "Beal", "Meith", "Iúil", "Lún", "MFómh", "DFómh", "Samh", "Noll"], STANDALONESHORTMONTHS:["Ean", "Feabh", "Márta", "Aib", "Beal", "Meith", "Iúil", "Lún", "MFómh", "DFómh", "Samh", "Noll"], WEEKDAYS:["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"], STANDALONEWEEKDAYS:["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", 
"Dé Sathairn"], SHORTWEEKDAYS:["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"], STANDALONESHORTWEEKDAYS:["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"], NARROWWEEKDAYS:["D", "L", "M", "C", "D", "A", "S"], STANDALONENARROWWEEKDAYS:["D", "L", "M", "C", "D", "A", "S"], SHORTQUARTERS:["R1", "R2", "R3", "R4"], QUARTERS:["1ú ráithe", "2ú ráithe", "3ú ráithe", "4ú ráithe"], AMPMS:["r.n.", "i.n."], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], TIMEFORMATS:["HH:mm:ss zzzz", 
"HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'ag' {0}", "{1} 'ag' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_gl = {ERAS:["a.C.", "d.C."], ERANAMES:["antes de Cristo", "despois de Cristo"], NARROWMONTHS:["x.", "f.", "m.", "a.", "m.", "x.", "x.", "a.", "s.", "o.", "n.", "d."], STANDALONENARROWMONTHS:["X", "F", "M", "A", "M", "X", "X", "A", "S", "O", "N", "D"], MONTHS:["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"], STANDALONEMONTHS:["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", 
"Setembro", "Outubro", "Novembro", "Decembro"], SHORTMONTHS:["xan.", "feb.", "mar.", "abr.", "maio", "xuño", "xul.", "ago.", "set.", "out.", "nov.", "dec."], STANDALONESHORTMONTHS:["Xan.", "Feb.", "Mar.", "Abr.", "Maio", "Xuño", "Xul.", "Ago.", "Set.", "Out.", "Nov.", "Dec."], WEEKDAYS:["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"], STANDALONEWEEKDAYS:["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"], SHORTWEEKDAYS:["dom.", "luns", "mar.", "mér.", "xov.", 
"ven.", "sáb."], STANDALONESHORTWEEKDAYS:["Dom.", "Luns", "Mar.", "Mér.", "Xov.", "Ven.", "Sáb."], NARROWWEEKDAYS:["d.", "l.", "m.", "m.", "x.", "v.", "s."], STANDALONENARROWWEEKDAYS:["D", "L", "M", "M", "X", "V", "S"], SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1.º trimestre", "2.º trimestre", "3.º trimestre", "4.º trimestre"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d 'de' MMM 'de' y", "dd/MM/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", 
"HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_gsw = {ERAS:["v. Chr.", "n. Chr."], ERANAMES:["v. Chr.", "n. Chr."], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "Auguscht", "Septämber", "Oktoober", "Novämber", "Dezämber"], STANDALONEMONTHS:["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "Auguscht", "Septämber", "Oktoober", 
"Novämber", "Dezämber"], SHORTMONTHS:["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], WEEKDAYS:["Sunntig", "Määntig", "Ziischtig", "Mittwuch", "Dunschtig", "Friitig", "Samschtig"], STANDALONEWEEKDAYS:["Sunntig", "Määntig", "Ziischtig", "Mittwuch", "Dunschtig", "Friitig", "Samschtig"], SHORTWEEKDAYS:["Su.", "Mä.", "Zi.", "Mi.", "Du.", "Fr.", "Sa."], STANDALONESHORTWEEKDAYS:["Su.", 
"Mä.", "Zi.", "Mi.", "Du.", "Fr.", "Sa."], NARROWWEEKDAYS:["S", "M", "D", "M", "D", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "D", "M", "D", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"], AMPMS:["am Vormittag", "am Namittag"], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "dd.MM.y", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, 
WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_gu = {ERAS:["ઈ.સ.પૂર્વે", "ઈ.સ."], ERANAMES:["ઈસવીસન પૂર્વે", "ઇસવીસન"], NARROWMONTHS:["જા", "ફે", "મા", "એ", "મે", "જૂ", "જુ", "ઑ", "સ", "ઑ", "ન", "ડિ"], STANDALONENARROWMONTHS:["જા", "ફે", "મા", "એ", "મે", "જૂ", "જુ", "ઑ", "સ", "ઑ", "ન", "ડિ"], MONTHS:["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટેમ્બર", "ઑક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"], STANDALONEMONTHS:["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટેમ્બર", 
"ઑક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"], SHORTMONTHS:["જાન્યુ", "ફેબ્રુ", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટે", "ઑક્ટો", "નવે", "ડિસે"], STANDALONESHORTMONTHS:["જાન્યુ", "ફેબ્રુ", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટે", "ઑક્ટો", "નવે", "ડિસે"], WEEKDAYS:["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"], STANDALONEWEEKDAYS:["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"], SHORTWEEKDAYS:["રવિ", "સોમ", "મંગળ", "બુધ", 
"ગુરુ", "શુક્ર", "શનિ"], STANDALONESHORTWEEKDAYS:["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"], NARROWWEEKDAYS:["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"], STANDALONENARROWWEEKDAYS:["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1લો ત્રિમાસ", "2જો ત્રિમાસ", "3જો ત્રિમાસ", "4થો ત્રિમાસ"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d/M/yy"], TIMEFORMATS:["hh:mm:ss a zzzz", "hh:mm:ss a z", "hh:mm:ss a", "hh:mm a"], 
DATETIMEFORMATS:["{1} એ {0} વાગ્યે", "{1} એ {0} વાગ્યે", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_haw = {ERAS:["BCE", "CE"], ERANAMES:["BCE", "CE"], NARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], STANDALONENARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], MONTHS:["Ianuali", "Pepeluali", "Malaki", "ʻApelila", "Mei", "Iune", "Iulai", "ʻAukake", "Kepakemapa", "ʻOkakopa", "Nowemapa", "Kekemapa"], STANDALONEMONTHS:["Ianuali", "Pepeluali", "Malaki", "ʻApelila", "Mei", "Iune", "Iulai", "ʻAukake", "Kepakemapa", "ʻOkakopa", 
"Nowemapa", "Kekemapa"], SHORTMONTHS:["Ian.", "Pep.", "Mal.", "ʻAp.", "Mei", "Iun.", "Iul.", "ʻAu.", "Kep.", "ʻOk.", "Now.", "Kek."], STANDALONESHORTMONTHS:["Ian.", "Pep.", "Mal.", "ʻAp.", "Mei", "Iun.", "Iul.", "ʻAu.", "Kep.", "ʻOk.", "Now.", "Kek."], WEEKDAYS:["Lāpule", "Poʻakahi", "Poʻalua", "Poʻakolu", "Poʻahā", "Poʻalima", "Poʻaono"], STANDALONEWEEKDAYS:["Lāpule", "Poʻakahi", "Poʻalua", "Poʻakolu", "Poʻahā", "Poʻalima", "Poʻaono"], SHORTWEEKDAYS:["LP", "P1", "P2", "P3", "P4", "P5", "P6"], STANDALONESHORTWEEKDAYS:["LP", 
"P1", "P2", "P3", "P4", "P5", "P6"], NARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["Q1", "Q2", "Q3", "Q4"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_he = {ERAS:["לפנה״ס", "לספירה"], ERANAMES:["לפני הספירה", "לספירה"], NARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], STANDALONENARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], MONTHS:["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], STANDALONEMONTHS:["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], 
SHORTMONTHS:["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"], STANDALONESHORTMONTHS:["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"], WEEKDAYS:["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"], STANDALONEWEEKDAYS:["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"], SHORTWEEKDAYS:["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", 
"שבת"], STANDALONESHORTWEEKDAYS:["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", "שבת"], NARROWWEEKDAYS:["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"], STANDALONENARROWWEEKDAYS:["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["רבעון 1", "רבעון 2", "רבעון 3", "רבעון 4"], AMPMS:["לפנה״צ", "אחה״צ"], DATEFORMATS:["EEEE, d בMMMM y", "d בMMMM y", "d בMMM y", "d.M.y"], TIMEFORMATS:["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], DATETIMEFORMATS:["{1} בשעה {0}", 
"{1} בשעה {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[4, 5], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_hi = {ERAS:["ईसा-पूर्व", "ईस्वी"], ERANAMES:["ईसा-पूर्व", "ईसवी सन"], NARROWMONTHS:["ज", "फ़", "मा", "अ", "म", "जू", "जु", "अ", "सि", "अ", "न", "दि"], STANDALONENARROWMONTHS:["ज", "फ़", "मा", "अ", "म", "जू", "जु", "अ", "सि", "अ", "न", "दि"], MONTHS:["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्तूबर", "नवंबर", "दिसंबर"], STANDALONEMONTHS:["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्तूबर", "नवंबर", 
"दिसंबर"], SHORTMONTHS:["जन॰", "फ़र॰", "मार्च", "अप्रैल", "मई", "जून", "जुल॰", "अग॰", "सित॰", "अक्तू॰", "नव॰", "दिस॰"], STANDALONESHORTMONTHS:["जन॰", "फ़र॰", "मार्च", "अप्रैल", "मई", "जून", "जुल॰", "अग॰", "सित॰", "अक्तू॰", "नव॰", "दिस॰"], WEEKDAYS:["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"], STANDALONEWEEKDAYS:["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"], SHORTWEEKDAYS:["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"], STANDALONESHORTWEEKDAYS:["रवि", 
"सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"], NARROWWEEKDAYS:["र", "सो", "मं", "बु", "गु", "शु", "श"], STANDALONENARROWWEEKDAYS:["र", "सो", "मं", "बु", "गु", "शु", "श"], SHORTQUARTERS:["ति1", "ति2", "ति3", "ति4"], QUARTERS:["पहली तिमाही", "दूसरी तिमाही", "तीसरी तिमाही", "चौथी तिमाही"], AMPMS:["am", "pm"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} को {0} बजे", "{1} को {0} बजे", "{1}, {0}", 
"{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_hr = {ERAS:["pr. Kr.", "po. Kr."], ERANAMES:["prije Krista", "poslije Krista"], NARROWMONTHS:["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], STANDALONENARROWMONTHS:["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], MONTHS:["siječnja", "veljače", "ožujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenoga", "prosinca"], STANDALONEMONTHS:["siječanj", "veljača", "ožujak", "travanj", 
"svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"], SHORTMONTHS:["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], STANDALONESHORTMONTHS:["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], WEEKDAYS:["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"], STANDALONEWEEKDAYS:["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"], SHORTWEEKDAYS:["ned", 
"pon", "uto", "sri", "čet", "pet", "sub"], STANDALONESHORTWEEKDAYS:["ned", "pon", "uto", "sri", "čet", "pet", "sub"], NARROWWEEKDAYS:["N", "P", "U", "S", "Č", "P", "S"], STANDALONENARROWWEEKDAYS:["n", "p", "u", "s", "č", "p", "s"], SHORTQUARTERS:["1kv", "2kv", "3kv", "4kv"], QUARTERS:["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d. MMMM y.", "d. MMMM y.", "d. MMM y.", "dd. MM. y."], TIMEFORMATS:["HH:mm:ss (zzzz)", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], 
DATETIMEFORMATS:["{1} 'u' {0}", "{1} 'u' {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_hu = {ERAS:["i. e.", "i. sz."], ERANAMES:["Krisztus előtt", "időszámításunk szerint"], NARROWMONTHS:["J", "F", "M", "Á", "M", "J", "J", "A", "Sz", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "Á", "M", "J", "J", "A", "Sz", "O", "N", "D"], MONTHS:["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"], STANDALONEMONTHS:["január", "február", "március", "április", "május", "június", "július", 
"augusztus", "szeptember", "október", "november", "december"], SHORTMONTHS:["jan.", "febr.", "márc.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."], STANDALONESHORTMONTHS:["jan.", "febr.", "márc.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."], WEEKDAYS:["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"], STANDALONEWEEKDAYS:["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"], SHORTWEEKDAYS:["V", "H", 
"K", "Sze", "Cs", "P", "Szo"], STANDALONESHORTWEEKDAYS:["V", "H", "K", "Sze", "Cs", "P", "Szo"], NARROWWEEKDAYS:["V", "H", "K", "Sz", "Cs", "P", "Sz"], STANDALONENARROWWEEKDAYS:["V", "H", "K", "Sz", "Cs", "P", "Sz"], SHORTQUARTERS:["I. n.év", "II. n.év", "III. n.év", "IV. n.év"], QUARTERS:["I. negyedév", "II. negyedév", "III. negyedév", "IV. negyedév"], AMPMS:["de.", "du."], DATEFORMATS:["y. MMMM d., EEEE", "y. MMMM d.", "y. MMM d.", "y. MM. dd."], TIMEFORMATS:["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", 
"H:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_hy = {ERAS:["մ.թ.ա.", "մ.թ."], ERANAMES:["Քրիստոսից առաջ", "Քրիստոսից հետո"], NARROWMONTHS:["Հ", "Փ", "Մ", "Ա", "Մ", "Հ", "Հ", "Օ", "Ս", "Հ", "Ն", "Դ"], STANDALONENARROWMONTHS:["Հ", "Փ", "Մ", "Ա", "Մ", "Հ", "Հ", "Օ", "Ս", "Հ", "Ն", "Դ"], MONTHS:["հունվարի", "փետրվարի", "մարտի", "ապրիլի", "մայիսի", "հունիսի", "հուլիսի", "օգոստոսի", "սեպտեմբերի", "հոկտեմբերի", "նոյեմբերի", "դեկտեմբերի"], STANDALONEMONTHS:["հունվար", "փետրվար", "մարտ", "ապրիլ", "մայիս", "հունիս", "հուլիս", 
"օգոստոս", "սեպտեմբեր", "հոկտեմբեր", "նոյեմբեր", "դեկտեմբեր"], SHORTMONTHS:["հնվ", "փտվ", "մրտ", "ապր", "մյս", "հնս", "հլս", "օգս", "սեպ", "հոկ", "նոյ", "դեկ"], STANDALONESHORTMONTHS:["հնվ", "փտվ", "մրտ", "ապր", "մյս", "հնս", "հլս", "օգս", "սեպ", "հոկ", "նոյ", "դեկ"], WEEKDAYS:["կիրակի", "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"], STANDALONEWEEKDAYS:["կիրակի", "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"], SHORTWEEKDAYS:["կիր", "երկ", "երք", 
"չրք", "հնգ", "ուր", "շբթ"], STANDALONESHORTWEEKDAYS:["կիր", "երկ", "երք", "չրք", "հնգ", "ուր", "շբթ"], NARROWWEEKDAYS:["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"], STANDALONENARROWWEEKDAYS:["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"], SHORTQUARTERS:["1-ին եռմս.", "2-րդ եռմս.", "3-րդ եռմս.", "4-րդ եռմս."], QUARTERS:["1-ին եռամսյակ", "2-րդ եռամսյակ", "3-րդ եռամսյակ", "4-րդ եռամսյակ"], AMPMS:["AM", "PM"], DATEFORMATS:["y թ. MMMM d, EEEE", "dd MMMM, y թ.", "dd MMM, y թ.", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", 
"HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_id = {ERAS:["SM", "M"], ERANAMES:["Sebelum Masehi", "Masehi"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], STANDALONEMONTHS:["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", 
"Desember"], SHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"], WEEKDAYS:["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], STANDALONEWEEKDAYS:["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], SHORTWEEKDAYS:["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"], STANDALONESHORTWEEKDAYS:["Min", "Sen", "Sel", "Rab", "Kam", 
"Jum", "Sab"], NARROWWEEKDAYS:["M", "S", "S", "R", "K", "J", "S"], STANDALONENARROWWEEKDAYS:["M", "S", "S", "R", "K", "J", "S"], SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, dd MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"], TIMEFORMATS:["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"], DATETIMEFORMATS:["{1} 'pukul' {0}", "{1} 'pukul' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 
6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_in = {ERAS:["SM", "M"], ERANAMES:["Sebelum Masehi", "Masehi"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], STANDALONEMONTHS:["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", 
"Desember"], SHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"], WEEKDAYS:["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], STANDALONEWEEKDAYS:["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], SHORTWEEKDAYS:["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"], STANDALONESHORTWEEKDAYS:["Min", "Sen", "Sel", "Rab", "Kam", 
"Jum", "Sab"], NARROWWEEKDAYS:["M", "S", "S", "R", "K", "J", "S"], STANDALONENARROWWEEKDAYS:["M", "S", "S", "R", "K", "J", "S"], SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, dd MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"], TIMEFORMATS:["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"], DATETIMEFORMATS:["{1} 'pukul' {0}", "{1} 'pukul' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 
6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_is = {ERAS:["f.Kr.", "e.Kr."], ERANAMES:["fyrir Krist", "eftir Krist"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "Á", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "Á", "S", "O", "N", "D"], MONTHS:["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember"], STANDALONEMONTHS:["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", 
"desember"], SHORTMONTHS:["jan.", "feb.", "mar.", "apr.", "maí", "jún.", "júl.", "ágú.", "sep.", "okt.", "nóv.", "des."], STANDALONESHORTMONTHS:["jan.", "feb.", "mar.", "apr.", "maí", "jún.", "júl.", "ágú.", "sep.", "okt.", "nóv.", "des."], WEEKDAYS:["sunnudagur", "mánudagur", "þriðjudagur", "miðvikudagur", "fimmtudagur", "föstudagur", "laugardagur"], STANDALONEWEEKDAYS:["sunnudagur", "mánudagur", "þriðjudagur", "miðvikudagur", "fimmtudagur", "föstudagur", "laugardagur"], SHORTWEEKDAYS:["sun.", "mán.", 
"þri.", "mið.", "fim.", "fös.", "lau."], STANDALONESHORTWEEKDAYS:["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau."], NARROWWEEKDAYS:["S", "M", "Þ", "M", "F", "F", "L"], STANDALONENARROWWEEKDAYS:["S", "M", "Þ", "M", "F", "F", "L"], SHORTQUARTERS:["F1", "F2", "F3", "F4"], QUARTERS:["1. fjórðungur", "2. fjórðungur", "3. fjórðungur", "4. fjórðungur"], AMPMS:["f.h.", "e.h."], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "d. MMM y", "d.M.y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", 
"HH:mm"], DATETIMEFORMATS:["{1} 'kl'. {0}", "{1} 'kl'. {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_it = {ERAS:["a.C.", "d.C."], ERANAMES:["avanti Cristo", "dopo Cristo"], NARROWMONTHS:["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], MONTHS:["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"], STANDALONEMONTHS:["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", 
"ottobre", "novembre", "dicembre"], SHORTMONTHS:["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], STANDALONESHORTMONTHS:["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], WEEKDAYS:["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"], STANDALONEWEEKDAYS:["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"], SHORTWEEKDAYS:["dom", "lun", "mar", "mer", "gio", "ven", "sab"], STANDALONESHORTWEEKDAYS:["dom", 
"lun", "mar", "mer", "gio", "ven", "sab"], NARROWWEEKDAYS:["D", "L", "M", "M", "G", "V", "S"], STANDALONENARROWWEEKDAYS:["D", "L", "M", "M", "G", "V", "S"], SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'alle' 'ore' {0}", "{1} 'alle' 'ore' {0}", "{1}, {0}", 
"{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_iw = {ERAS:["לפנה״ס", "לספירה"], ERANAMES:["לפני הספירה", "לספירה"], NARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], STANDALONENARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], MONTHS:["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], STANDALONEMONTHS:["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], 
SHORTMONTHS:["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"], STANDALONESHORTMONTHS:["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"], WEEKDAYS:["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"], STANDALONEWEEKDAYS:["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"], SHORTWEEKDAYS:["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", 
"שבת"], STANDALONESHORTWEEKDAYS:["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", "שבת"], NARROWWEEKDAYS:["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"], STANDALONENARROWWEEKDAYS:["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["רבעון 1", "רבעון 2", "רבעון 3", "רבעון 4"], AMPMS:["לפנה״צ", "אחה״צ"], DATEFORMATS:["EEEE, d בMMMM y", "d בMMMM y", "d בMMM y", "d.M.y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "H:mm:ss", "H:mm"], DATETIMEFORMATS:["{1} בשעה {0}", 
"{1} בשעה {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[4, 5], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_ja = {ERAS:["紀元前", "西暦"], ERANAMES:["紀元前", "西暦"], NARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], STANDALONENARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], MONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], STANDALONEMONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], SHORTMONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", 
"12月"], STANDALONESHORTMONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], WEEKDAYS:["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"], STANDALONEWEEKDAYS:["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"], SHORTWEEKDAYS:["日", "月", "火", "水", "木", "金", "土"], STANDALONESHORTWEEKDAYS:["日", "月", "火", "水", "木", "金", "土"], NARROWWEEKDAYS:["日", "月", "火", "水", "木", "金", "土"], STANDALONENARROWWEEKDAYS:["日", "月", "火", "水", "木", "金", "土"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], 
QUARTERS:["第1四半期", "第2四半期", "第3四半期", "第4四半期"], AMPMS:["午前", "午後"], DATEFORMATS:["y年M月d日EEEE", "y年M月d日", "y/MM/dd", "y/MM/dd"], TIMEFORMATS:["H時mm分ss秒 zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_ka = {ERAS:["ძვ. წ.", "ახ. წ."], ERANAMES:["ძველი წელთაღრიცხვით", "ახალი წელთაღრიცხვით"], NARROWMONTHS:["ი", "თ", "მ", "ა", "მ", "ი", "ი", "ა", "ს", "ო", "ნ", "დ"], STANDALONENARROWMONTHS:["ი", "თ", "მ", "ა", "მ", "ი", "ი", "ა", "ს", "ო", "ნ", "დ"], MONTHS:["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"], STANDALONEMONTHS:["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", 
"აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"], SHORTMONTHS:["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"], STANDALONESHORTMONTHS:["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"], WEEKDAYS:["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"], STANDALONEWEEKDAYS:["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"], SHORTWEEKDAYS:["კვი", "ორშ", "სამ", 
"ოთხ", "ხუთ", "პარ", "შაბ"], STANDALONESHORTWEEKDAYS:["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"], NARROWWEEKDAYS:["კ", "ო", "ს", "ო", "ხ", "პ", "შ"], STANDALONENARROWWEEKDAYS:["კ", "ო", "ს", "ო", "ხ", "პ", "შ"], SHORTQUARTERS:["I კვ.", "II კვ.", "III კვ.", "IV კვ."], QUARTERS:["I კვარტალი", "II კვარტალი", "III კვარტალი", "IV კვარტალი"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, dd MMMM, y", "d MMMM, y", "d MMM. y", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], 
DATETIMEFORMATS:["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_kk = {ERAS:["б.з.д.", "б.з."], ERANAMES:["Біздің заманымызға дейін", "біздің заманымыз"], NARROWMONTHS:["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"], STANDALONENARROWMONTHS:["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"], MONTHS:["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"], STANDALONEMONTHS:["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", 
"Қазан", "Қараша", "Желтоқсан"], SHORTMONTHS:["қаң.", "ақп.", "нау.", "сәу.", "мам.", "мау.", "шіл.", "там.", "қыр.", "қаз.", "қар.", "жел."], STANDALONESHORTMONTHS:["қаң.", "ақп.", "нау.", "сәу.", "мам.", "мау.", "шіл.", "там.", "қыр.", "қаз.", "қар.", "жел."], WEEKDAYS:["жексенбі", "дүйсенбі", "сейсенбі", "сәрсенбі", "бейсенбі", "жұма", "сенбі"], STANDALONEWEEKDAYS:["жексенбі", "дүйсенбі", "сейсенбі", "сәрсенбі", "бейсенбі", "жұма", "сенбі"], SHORTWEEKDAYS:["жс", "дс", "сс", "ср", "бс", "жм", "сб"], 
STANDALONESHORTWEEKDAYS:["жс", "дс", "сс", "ср", "бс", "жм", "сб"], NARROWWEEKDAYS:["Ж", "Д", "С", "С", "Б", "Ж", "С"], STANDALONENARROWWEEKDAYS:["Ж", "Д", "С", "С", "Б", "Ж", "С"], SHORTQUARTERS:["І тқс.", "ІІ тқс.", "ІІІ тқс.", "IV тқс."], QUARTERS:["І тоқсан", "ІІ тоқсан", "ІІІ тоқсан", "IV тоқсан"], AMPMS:["AM", "PM"], DATEFORMATS:["y 'ж'. d MMMM, EEEE", "y 'ж'. d MMMM", "y 'ж'. dd MMM", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1}, {0}", 
"{1}, {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_km = {ERAS:["មុន គ.ស.", "គ.ស."], ERANAMES:["មុន​គ្រិស្តសករាជ", "គ្រិស្តសករាជ"], NARROWMONTHS:["ម", "ក", "ម", "ម", "ឧ", "ម", "ក", "ស", "ក", "ត", "វ", "ធ"], STANDALONENARROWMONTHS:["ម", "ក", "ម", "ម", "ឧ", "ម", "ក", "ស", "ក", "ត", "វ", "ធ"], MONTHS:["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"], STANDALONEMONTHS:["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"], 
SHORTMONTHS:["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"], STANDALONESHORTMONTHS:["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"], WEEKDAYS:["អាទិត្យ", "ច័ន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"], STANDALONEWEEKDAYS:["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"], SHORTWEEKDAYS:["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហ", "សុក្រ", "សៅរ៍"], STANDALONESHORTWEEKDAYS:["អាទិត្យ", 
"ចន្ទ", "អង្គារ", "ពុធ", "ព្រហ", "សុក្រ", "សៅរ៍"], NARROWWEEKDAYS:["អ", "ច", "អ", "ព", "ព", "ស", "ស"], STANDALONENARROWWEEKDAYS:["អ", "ច", "អ", "ព", "ព", "ស", "ស"], SHORTQUARTERS:["ត្រីមាសទី 1", "ត្រីមាសទី 2", "ត្រីមាសទី 3", "ត្រីមាសទី 4"], QUARTERS:["ត្រីមាសទី 1", "ត្រីមាសទី 2", "ត្រីមាសទី 3", "ត្រីមាសទី 4"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} នៅ​ម៉ោង {0}", 
"{1} នៅ​ម៉ោង {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_kn = {ERAS:["ಕ್ರಿ.ಪೂ", "ಕ್ರಿ.ಶ"], ERANAMES:["ಕ್ರಿಸ್ತ ಪೂರ್ವ", "ಕ್ರಿಸ್ತ ಶಕ"], NARROWMONTHS:["ಜ", "ಫೆ", "ಮಾ", "ಏ", "ಮೇ", "ಜೂ", "ಜು", "ಆ", "ಸೆ", "ಅ", "ನ", "ಡಿ"], STANDALONENARROWMONTHS:["ಜ", "ಫೆ", "ಮಾ", "ಏ", "ಮೇ", "ಜೂ", "ಜು", "ಆ", "ಸೆ", "ಅ", "ನ", "ಡಿ"], MONTHS:["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"], STANDALONEMONTHS:["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", 
"ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"], SHORTMONTHS:["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿ", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂ", "ಅಕ್ಟೋ", "ನವೆಂ", "ಡಿಸೆಂ"], STANDALONESHORTMONTHS:["ಜನ", "ಫೆಬ್ರ", "ಮಾರ್ಚ್", "ಏಪ್ರಿ", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗ", "ಸೆಪ್ಟೆಂ", "ಅಕ್ಟೋ", "ನವೆಂ", "ಡಿಸೆಂ"], WEEKDAYS:["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"], STANDALONEWEEKDAYS:["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"], SHORTWEEKDAYS:["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", 
"ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"], STANDALONESHORTWEEKDAYS:["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"], NARROWWEEKDAYS:["ಭಾ", "ಸೋ", "ಮಂ", "ಬು", "ಗು", "ಶು", "ಶ"], STANDALONENARROWWEEKDAYS:["ಭಾ", "ಸೋ", "ಮಂ", "ಬು", "ಗು", "ಶು", "ಶ"], SHORTQUARTERS:["ತ್ರೈ 1", "ತ್ರೈ 2", "ತ್ರೈ 3", "ತ್ರೈ 4"], QUARTERS:["1ನೇ ತ್ರೈಮಾಸಿಕ", "2ನೇ ತ್ರೈಮಾಸಿಕ", "3ನೇ ತ್ರೈಮಾಸಿಕ", "4ನೇ ತ್ರೈಮಾಸಿಕ"], AMPMS:["ಪೂರ್ವಾಹ್ನ", "ಅಪರಾಹ್ನ"], DATEFORMATS:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "d/M/yy"], TIMEFORMATS:["hh:mm:ss a zzzz", 
"hh:mm:ss a z", "hh:mm:ss a", "hh:mm a"], DATETIMEFORMATS:["{1} ರಂದು {0} ಸಮಯಕ್ಕೆ", "{1} ರಂದು {0} ಸಮಯಕ್ಕೆ", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_ko = {ERAS:["BC", "AD"], ERANAMES:["기원전", "서기"], NARROWMONTHS:["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], STANDALONENARROWMONTHS:["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], MONTHS:["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], STANDALONEMONTHS:["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], SHORTMONTHS:["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", 
"9월", "10월", "11월", "12월"], STANDALONESHORTMONTHS:["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], WEEKDAYS:["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"], STANDALONEWEEKDAYS:["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"], SHORTWEEKDAYS:["일", "월", "화", "수", "목", "금", "토"], STANDALONESHORTWEEKDAYS:["일", "월", "화", "수", "목", "금", "토"], NARROWWEEKDAYS:["일", "월", "화", "수", "목", "금", "토"], STANDALONENARROWWEEKDAYS:["일", "월", "화", "수", "목", "금", "토"], SHORTQUARTERS:["1분기", 
"2분기", "3분기", "4분기"], QUARTERS:["제 1/4분기", "제 2/4분기", "제 3/4분기", "제 4/4분기"], AMPMS:["오전", "오후"], DATEFORMATS:["y년 M월 d일 EEEE", "y년 M월 d일", "y. M. d.", "yy. M. d."], TIMEFORMATS:["a h시 m분 s초 zzzz", "a h시 m분 s초 z", "a h:mm:ss", "a h:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_ky = {ERAS:["б.з.ч.", "б.з."], ERANAMES:["биздин заманга чейин", "биздин заман"], NARROWMONTHS:["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], STANDALONENARROWMONTHS:["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], MONTHS:["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"], STANDALONEMONTHS:["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", 
"Ноябрь", "Декабрь"], SHORTMONTHS:["янв.", "фев.", "мар.", "апр.", "май", "июн.", "июл.", "авг.", "сен.", "окт.", "ноя.", "дек."], STANDALONESHORTMONTHS:["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"], WEEKDAYS:["жекшемби", "дүйшөмбү", "шейшемби", "шаршемби", "бейшемби", "жума", "ишемби"], STANDALONEWEEKDAYS:["жекшемби", "дүйшөмбү", "шейшемби", "шаршемби", "бейшемби", "жума", "ишемби"], SHORTWEEKDAYS:["жек.", "дүй.", "шейш.", "шарш.", "бейш.", "жума", "ишм."], 
STANDALONESHORTWEEKDAYS:["жек.", "дүй.", "шейш.", "шарш.", "бейш.", "жума", "ишм."], NARROWWEEKDAYS:["Ж", "Д", "Ш", "Ш", "Б", "Ж", "И"], STANDALONENARROWWEEKDAYS:["Ж", "Д", "Ш", "Ш", "Б", "Ж", "И"], SHORTQUARTERS:["1-чей.", "2-чей.", "3-чей.", "4-чей."], QUARTERS:["1-чейрек", "2-чейрек", "3-чейрек", "4-чейрек"], AMPMS:["таңкы", "түштөн кийинки"], DATEFORMATS:["y-'ж'., d-MMMM, EEEE", "y-'ж'., d-MMMM", "y-'ж'., d-MMM", "d/M/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", 
"{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_ln = {ERAS:["libóso ya", "nsima ya Y"], ERANAMES:["Yambo ya Yézu Krís", "Nsima ya Yézu Krís"], NARROWMONTHS:["y", "f", "m", "a", "m", "y", "y", "a", "s", "ɔ", "n", "d"], STANDALONENARROWMONTHS:["y", "f", "m", "a", "m", "y", "y", "a", "s", "ɔ", "n", "d"], MONTHS:["sánzá ya yambo", "sánzá ya míbalé", "sánzá ya mísáto", "sánzá ya mínei", "sánzá ya mítáno", "sánzá ya motóbá", "sánzá ya nsambo", "sánzá ya mwambe", "sánzá ya libwa", "sánzá ya zómi", "sánzá ya zómi na mɔ̌kɔ́", 
"sánzá ya zómi na míbalé"], STANDALONEMONTHS:["sánzá ya yambo", "sánzá ya míbalé", "sánzá ya mísáto", "sánzá ya mínei", "sánzá ya mítáno", "sánzá ya motóbá", "sánzá ya nsambo", "sánzá ya mwambe", "sánzá ya libwa", "sánzá ya zómi", "sánzá ya zómi na mɔ̌kɔ́", "sánzá ya zómi na míbalé"], SHORTMONTHS:["yan", "fbl", "msi", "apl", "mai", "yun", "yul", "agt", "stb", "ɔtb", "nvb", "dsb"], STANDALONESHORTMONTHS:["yan", "fbl", "msi", "apl", "mai", "yun", "yul", "agt", "stb", "ɔtb", "nvb", "dsb"], WEEKDAYS:["eyenga", 
"mokɔlɔ mwa yambo", "mokɔlɔ mwa míbalé", "mokɔlɔ mwa mísáto", "mokɔlɔ ya mínéi", "mokɔlɔ ya mítáno", "mpɔ́sɔ"], STANDALONEWEEKDAYS:["eyenga", "mokɔlɔ mwa yambo", "mokɔlɔ mwa míbalé", "mokɔlɔ mwa mísáto", "mokɔlɔ ya mínéi", "mokɔlɔ ya mítáno", "mpɔ́sɔ"], SHORTWEEKDAYS:["eye", "ybo", "mbl", "mst", "min", "mtn", "mps"], STANDALONESHORTWEEKDAYS:["eye", "ybo", "mbl", "mst", "min", "mtn", "mps"], NARROWWEEKDAYS:["e", "y", "m", "m", "m", "m", "p"], STANDALONENARROWWEEKDAYS:["e", "y", "m", "m", "m", "m", 
"p"], SHORTQUARTERS:["SM1", "SM2", "SM3", "SM4"], QUARTERS:["sánzá mísáto ya yambo", "sánzá mísáto ya míbalé", "sánzá mísáto ya mísáto", "sánzá mísáto ya mínei"], AMPMS:["ntɔ́ngɔ́", "mpókwa"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "d/M/y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_lo = {ERAS:["ກ່ອນ ຄ.ສ.", "ຄ.ສ."], ERANAMES:["ກ່ອນຄຣິດສັກກະລາດ", "ຄຣິດສັກກະລາດ"], NARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], STANDALONENARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], MONTHS:["ມັງກອນ", "ກຸມພາ", "ມີນາ", "ເມສາ", "ພຶດສະພາ", "ມິຖຸນາ", "ກໍລະກົດ", "ສິງຫາ", "ກັນຍາ", "ຕຸລາ", "ພະຈິກ", "ທັນວາ"], STANDALONEMONTHS:["ມັງກອນ", "ກຸມພາ", "ມີນາ", "ເມສາ", "ພຶດສະພາ", "ມິຖຸນາ", "ກໍລະກົດ", "ສິງຫາ", "ກັນຍາ", "ຕຸລາ", 
"ພະຈິກ", "ທັນວາ"], SHORTMONTHS:["ມ.ກ.", "ກ.ພ.", "ມ.ນ.", "ມ.ສ.", "ພ.ພ.", "ມິ.ຖ.", "ກ.ລ.", "ສ.ຫ.", "ກ.ຍ.", "ຕ.ລ.", "ພ.ຈ.", "ທ.ວ."], STANDALONESHORTMONTHS:["ມ.ກ.", "ກ.ພ.", "ມ.ນ.", "ມ.ສ.", "ພ.ພ.", "ມິ.ຖ.", "ກ.ລ.", "ສ.ຫ.", "ກ.ຍ.", "ຕ.ລ.", "ພ.ຈ.", "ທ.ວ."], WEEKDAYS:["ວັນອາທິດ", "ວັນຈັນ", "ວັນອັງຄານ", "ວັນພຸດ", "ວັນພະຫັດ", "ວັນສຸກ", "ວັນເສົາ"], STANDALONEWEEKDAYS:["ວັນອາທິດ", "ວັນຈັນ", "ວັນອັງຄານ", "ວັນພຸດ", "ວັນພະຫັດ", "ວັນສຸກ", "ວັນເສົາ"], SHORTWEEKDAYS:["ອາທິດ", "ຈັນ", "ອັງຄານ", "ພຸດ", "ພະຫັດ", "ສຸກ", 
"ເສົາ"], STANDALONESHORTWEEKDAYS:["ອາທິດ", "ຈັນ", "ອັງຄານ", "ພຸດ", "ພະຫັດ", "ສຸກ", "ເສົາ"], NARROWWEEKDAYS:["ອາ", "ຈ", "ອ", "ພ", "ພຫ", "ສຸ", "ສ"], STANDALONENARROWWEEKDAYS:["ອາ", "ຈ", "ອ", "ພ", "ພຫ", "ສຸ", "ສ"], SHORTQUARTERS:["ຕມ1", "ຕມ2", "ຕມ3", "ຕມ4"], QUARTERS:["ໄຕຣມາດ 1", "ໄຕຣມາດ 2", "ໄຕຣມາດ 3", "ໄຕຣມາດ 4"], AMPMS:["ກ່ອນທ່ຽງ", "ຫຼັງທ່ຽງ"], DATEFORMATS:["EEEE ທີ d MMMM G y", "d MMMM y", "d MMM y", "d/M/y"], TIMEFORMATS:["H ໂມງ m ນາທີ ss ວິນາທີ zzzz", "H ໂມງ m ນາທີ ss ວິນາທີ z", "H:mm:ss", "H:mm"], 
DATETIMEFORMATS:["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_lt = {ERAS:["pr. Kr.", "po Kr."], ERANAMES:["prieš Kristų", "po Kristaus"], NARROWMONTHS:["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"], STANDALONENARROWMONTHS:["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"], MONTHS:["sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio", "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio"], STANDALONEMONTHS:["sausis", "vasaris", "kovas", "balandis", "gegužė", "birželis", "liepa", "rugpjūtis", 
"rugsėjis", "spalis", "lapkritis", "gruodis"], SHORTMONTHS:["saus.", "vas.", "kov.", "bal.", "geg.", "birž.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."], STANDALONESHORTMONTHS:["saus.", "vas.", "kov.", "bal.", "geg.", "birž.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."], WEEKDAYS:["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"], STANDALONEWEEKDAYS:["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", 
"penktadienis", "šeštadienis"], SHORTWEEKDAYS:["sk", "pr", "an", "tr", "kt", "pn", "št"], STANDALONESHORTWEEKDAYS:["sk", "pr", "an", "tr", "kt", "pn", "št"], NARROWWEEKDAYS:["S", "P", "A", "T", "K", "P", "Š"], STANDALONENARROWWEEKDAYS:["S", "P", "A", "T", "K", "P", "Š"], SHORTQUARTERS:["I k.", "II k.", "III k.", "IV k."], QUARTERS:["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"], AMPMS:["priešpiet", "popiet"], DATEFORMATS:["y 'm'. MMMM d 'd'., EEEE", "y 'm'. MMMM d 'd'.", "y-MM-dd", 
"y-MM-dd"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_lv = {ERAS:["p.m.ē.", "m.ē."], ERANAMES:["pirms mūsu ēras", "mūsu ērā"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["janvāris", "februāris", "marts", "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", "septembris", "oktobris", "novembris", "decembris"], STANDALONEMONTHS:["janvāris", "februāris", "marts", "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", 
"septembris", "oktobris", "novembris", "decembris"], SHORTMONTHS:["janv.", "febr.", "marts", "apr.", "maijs", "jūn.", "jūl.", "aug.", "sept.", "okt.", "nov.", "dec."], STANDALONESHORTMONTHS:["janv.", "febr.", "marts", "apr.", "maijs", "jūn.", "jūl.", "aug.", "sept.", "okt.", "nov.", "dec."], WEEKDAYS:["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"], STANDALONEWEEKDAYS:["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"], 
SHORTWEEKDAYS:["svētd.", "pirmd.", "otrd.", "trešd.", "ceturtd.", "piektd.", "sestd."], STANDALONESHORTWEEKDAYS:["Svētd.", "Pirmd.", "Otrd.", "Trešd.", "Ceturtd.", "Piektd.", "Sestd."], NARROWWEEKDAYS:["S", "P", "O", "T", "C", "P", "S"], STANDALONENARROWWEEKDAYS:["S", "P", "O", "T", "C", "P", "S"], SHORTQUARTERS:["1. cet.", "2. cet.", "3. cet.", "4. cet."], QUARTERS:["1. ceturksnis", "2. ceturksnis", "3. ceturksnis", "4. ceturksnis"], AMPMS:["priekšpusdienā", "pēcpusdienā"], DATEFORMATS:["EEEE, y. 'gada' d. MMMM", 
"y. 'gada' d. MMMM", "y. 'gada' d. MMM", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_mk = {ERAS:["п.н.е.", "н.е."], ERANAMES:["пред нашата ера", "од нашата ера"], NARROWMONTHS:["ј", "ф", "м", "а", "м", "ј", "ј", "а", "с", "о", "н", "д"], STANDALONENARROWMONTHS:["ј", "ф", "м", "а", "м", "ј", "ј", "а", "с", "о", "н", "д"], MONTHS:["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"], STANDALONEMONTHS:["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", 
"ноември", "декември"], SHORTMONTHS:["јан.", "фев.", "мар.", "апр.", "мај", "јун.", "јул.", "авг.", "септ.", "окт.", "ноем.", "дек."], STANDALONESHORTMONTHS:["јан.", "фев.", "мар.", "апр.", "мај", "јун.", "јул.", "авг.", "септ.", "окт.", "ноем.", "дек."], WEEKDAYS:["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"], STANDALONEWEEKDAYS:["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"], SHORTWEEKDAYS:["нед.", "пон.", "вто.", "сре.", "чет.", "пет.", 
"саб."], STANDALONESHORTWEEKDAYS:["нед.", "пон.", "вто.", "сре.", "чет.", "пет.", "саб."], NARROWWEEKDAYS:["н", "п", "в", "с", "ч", "п", "с"], STANDALONENARROWWEEKDAYS:["н", "п", "в", "с", "ч", "п", "с"], SHORTQUARTERS:["јан – мар", "апр – јун", "јул – септ", "окт – дек"], QUARTERS:["прво тримесечје", "второ тримесечје", "трето тримесечје", "четврто тримесечје"], AMPMS:["претпл.", "попл."], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d.M.y", "d.M.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", 
"HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1}, 'во' {0}", "{1}, 'во' {0}", "{1}, 'во' {0}", "{1}, 'во' {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_ml = {ERAS:["ക്രി.മു.", "എഡി"], ERANAMES:["ക്രിസ്‌തുവിന് മുമ്പ്", "ആന്നോ ഡൊമിനി"], NARROWMONTHS:["ജ", "ഫെ", "മാ", "ഏ", "മെ", "ജൂൺ", "ജൂ", "ഓ", "സെ", "ഒ", "ന", "ഡി"], STANDALONENARROWMONTHS:["ജ", "ഫെ", "മാ", "ഏ", "മെ", "ജൂൺ", "ജൂ", "ഓ", "സെ", "ഒ", "ന", "ഡി"], MONTHS:["ജനുവരി", "ഫെബ്രുവരി", "മാർച്ച്", "ഏപ്രിൽ", "മേയ്", "ജൂൺ", "ജൂലൈ", "ഓഗസ്റ്റ്", "സെപ്റ്റംബർ", "ഒക്‌ടോബർ", "നവംബർ", "ഡിസംബർ"], STANDALONEMONTHS:["ജനുവരി", "ഫെബ്രുവരി", "മാർച്ച്", "ഏപ്രിൽ", "മേയ്", "ജൂൺ", "ജൂലൈ", 
"ഓഗസ്റ്റ്", "സെപ്റ്റംബർ", "ഒക്‌ടോബർ", "നവംബർ", "ഡിസംബർ"], SHORTMONTHS:["ജനു", "ഫെബ്രു", "മാർ", "ഏപ്രി", "മേയ്", "ജൂൺ", "ജൂലൈ", "ഓഗ", "സെപ്റ്റം", "ഒക്ടോ", "നവം", "ഡിസം"], STANDALONESHORTMONTHS:["ജനു", "ഫെബ്രു", "മാർ", "ഏപ്രി", "മേയ്", "ജൂൺ", "ജൂലൈ", "ഓഗ", "സെപ്റ്റം", "ഒക്ടോ", "നവം", "ഡിസം"], WEEKDAYS:["ഞായറാഴ്‌ച", "തിങ്കളാഴ്‌ച", "ചൊവ്വാഴ്ച", "ബുധനാഴ്‌ച", "വ്യാഴാഴ്‌ച", "വെള്ളിയാഴ്‌ച", "ശനിയാഴ്‌ച"], STANDALONEWEEKDAYS:["ഞായറാഴ്‌ച", "തിങ്കളാഴ്‌ച", "ചൊവ്വാഴ്‌ച", "ബുധനാഴ്‌ച", "വ്യാഴാഴ്‌ച", "വെള്ളിയാഴ്‌ച", 
"ശനിയാഴ്‌ച"], SHORTWEEKDAYS:["ഞായർ", "തിങ്കൾ", "ചൊവ്വ", "ബുധൻ", "വ്യാഴം", "വെള്ളി", "ശനി"], STANDALONESHORTWEEKDAYS:["ഞായർ", "തിങ്കൾ", "ചൊവ്വ", "ബുധൻ", "വ്യാഴം", "വെള്ളി", "ശനി"], NARROWWEEKDAYS:["ഞ", "തി", "ചൊ", "ബു", "വ്യാ", "വെ", "ശ"], STANDALONENARROWWEEKDAYS:["ഞാ", "തി", "ചൊ", "ബു", "വ്യാ", "വെ", "ശ"], SHORTQUARTERS:["ഒന്നാം പാദം", "രണ്ടാം പാദം", "മൂന്നാം പാദം", "നാലാം പാദം"], QUARTERS:["ഒന്നാം പാദം", "രണ്ടാം പാദം", "മൂന്നാം പാദം", "നാലാം പാദം"], AMPMS:["AM", "PM"], DATEFORMATS:["y, MMMM d, EEEE", 
"y, MMMM d", "y, MMM d", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_mn = {ERAS:["МЭӨ", "МЭ"], ERANAMES:["манай эриний өмнөх", "манай эриний"], NARROWMONTHS:["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"], STANDALONENARROWMONTHS:["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"], MONTHS:["нэгдүгээр сар", "хоёрдугаар сар", "гуравдугаар сар", "дөрөвдүгээр сар", "тавдугаар сар", "зургаадугаар сар", "долоодугаар сар", "наймдугаар сар", "есдүгээр сар", "аравдугаар сар", "арван нэгдүгээр сар", 
"арван хоёрдугаар сар"], STANDALONEMONTHS:["Нэгдүгээр сар", "Хоёрдугаар сар", "Гуравдугаар сар", "Дөрөвдүгээр сар", "Тавдугаар сар", "Зургаадугаар сар", "Долоодугаар сар", "Наймдугаар сар", "Есдүгээр сар", "Аравдугаар сар", "Арван нэгдүгээр сар", "Арван хоёрдугаар сар"], SHORTMONTHS:["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"], STANDALONESHORTMONTHS:["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", 
"7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"], WEEKDAYS:["ням", "даваа", "мягмар", "лхагва", "пүрэв", "баасан", "бямба"], STANDALONEWEEKDAYS:["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"], SHORTWEEKDAYS:["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"], STANDALONESHORTWEEKDAYS:["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"], NARROWWEEKDAYS:["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"], STANDALONENARROWWEEKDAYS:["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"], SHORTQUARTERS:["I улирал", 
"II улирал", "III улирал", "IV улирал"], QUARTERS:["1-р улирал", "2-р улирал", "3-р улирал", "4-р улирал"], AMPMS:["ү.ө.", "ү.х."], DATEFORMATS:["y 'оны' MMMM'ын' d, EEEE 'гараг'", "y 'оны' MMMM'ын' d", "y 'оны' MMM'ын' d", "y.MM.dd"], TIMEFORMATS:["HH:mm:ss (zzzz)", "HH:mm:ss (z)", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_mo = {ERAS:["î.Hr.", "d.Hr."], ERANAMES:["înainte de Hristos", "după Hristos"], NARROWMONTHS:["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], MONTHS:["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"], STANDALONEMONTHS:["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", 
"septembrie", "octombrie", "noiembrie", "decembrie"], SHORTMONTHS:["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."], STANDALONESHORTMONTHS:["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."], WEEKDAYS:["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"], STANDALONEWEEKDAYS:["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"], SHORTWEEKDAYS:["dum.", "lun.", "mar.", "mie.", 
"joi", "vin.", "sâm."], STANDALONESHORTWEEKDAYS:["dum.", "lun.", "mar.", "mie.", "joi", "vin.", "sâm."], NARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], STANDALONENARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], SHORTQUARTERS:["trim. I", "trim. II", "trim. III", "trim. IV"], QUARTERS:["trimestrul I", "trimestrul al II-lea", "trimestrul al III-lea", "trimestrul al IV-lea"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd.MM.y"], TIMEFORMATS:["HH:mm:ss zzzz", 
"HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'la' {0}", "{1} 'la' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_mr = {ZERODIGIT:2406, ERAS:["ई. स. पू.", "इ. स."], ERANAMES:["ईसवीसनपूर्व", "ईसवीसन"], NARROWMONTHS:["जा", "फे", "मा", "ए", "मे", "जू", "जु", "ऑ", "स", "ऑ", "नो", "डि"], STANDALONENARROWMONTHS:["जा", "फे", "मा", "ए", "मे", "जू", "जु", "ऑ", "स", "ऑ", "नो", "डि"], MONTHS:["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"], STANDALONEMONTHS:["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", 
"ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"], SHORTMONTHS:["जाने", "फेब्रु", "मार्च", "एप्रि", "मे", "जून", "जुलै", "ऑग", "सप्टें", "ऑक्टो", "नोव्हें", "डिसें"], STANDALONESHORTMONTHS:["जाने", "फेब्रु", "मार्च", "एप्रि", "मे", "जून", "जुलै", "ऑग", "सप्टें", "ऑक्टो", "नोव्हें", "डिसें"], WEEKDAYS:["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"], STANDALONEWEEKDAYS:["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"], SHORTWEEKDAYS:["रवि", 
"सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"], STANDALONESHORTWEEKDAYS:["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"], NARROWWEEKDAYS:["र", "सो", "मं", "बु", "गु", "शु", "श"], STANDALONENARROWWEEKDAYS:["र", "सो", "मं", "बु", "गु", "शु", "श"], SHORTQUARTERS:["ति१", "ति२", "ति३", "ति४"], QUARTERS:["प्रथम तिमाही", "द्वितीय तिमाही", "तृतीय तिमाही", "चतुर्थ तिमाही"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", 
"h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} रोजी {0}", "{1} रोजी {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_ms = {ERAS:["S.M.", "TM"], ERANAMES:["S.M.", "TM"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"], MONTHS:["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"], STANDALONEMONTHS:["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"], 
SHORTMONTHS:["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"], WEEKDAYS:["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"], STANDALONEWEEKDAYS:["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"], SHORTWEEKDAYS:["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"], STANDALONESHORTWEEKDAYS:["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"], 
NARROWWEEKDAYS:["A", "I", "S", "R", "K", "J", "S"], STANDALONENARROWWEEKDAYS:["A", "I", "S", "R", "K", "J", "S"], SHORTQUARTERS:["S1", "S2", "S3", "S4"], QUARTERS:["Suku pertama", "Suku Ke-2", "Suku Ke-3", "Suku Ke-4"], AMPMS:["PG", "PTG"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/MM/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} 'pada' {0}", "{1} 'pada' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_mt = {ERAS:["QK", "WK"], ERANAMES:["Qabel Kristu", "Wara Kristu"], NARROWMONTHS:["J", "F", "M", "A", "M", "Ġ", "L", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["Jn", "Fr", "Mz", "Ap", "Mj", "Ġn", "Lj", "Aw", "St", "Ob", "Nv", "Dċ"], MONTHS:["Jannar", "Frar", "Marzu", "April", "Mejju", "Ġunju", "Lulju", "Awwissu", "Settembru", "Ottubru", "Novembru", "Diċembru"], STANDALONEMONTHS:["Jannar", "Frar", "Marzu", "April", "Mejju", "Ġunju", "Lulju", "Awwissu", "Settembru", 
"Ottubru", "Novembru", "Diċembru"], SHORTMONTHS:["Jan", "Fra", "Mar", "Apr", "Mej", "Ġun", "Lul", "Aww", "Set", "Ott", "Nov", "Diċ"], STANDALONESHORTMONTHS:["Jan", "Fra", "Mar", "Apr", "Mej", "Ġun", "Lul", "Aww", "Set", "Ott", "Nov", "Diċ"], WEEKDAYS:["Il-Ħadd", "It-Tnejn", "It-Tlieta", "L-Erbgħa", "Il-Ħamis", "Il-Ġimgħa", "Is-Sibt"], STANDALONEWEEKDAYS:["Il-Ħadd", "It-Tnejn", "It-Tlieta", "L-Erbgħa", "Il-Ħamis", "Il-Ġimgħa", "Is-Sibt"], SHORTWEEKDAYS:["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"], 
STANDALONESHORTWEEKDAYS:["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"], NARROWWEEKDAYS:["Ħd", "T", "Tl", "Er", "Ħm", "Ġm", "Sb"], STANDALONENARROWWEEKDAYS:["Ħd", "Tn", "Tl", "Er", "Ħm", "Ġm", "Sb"], SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["1el kwart", "2ni kwart", "3et kwart", "4ba’ kwart"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d 'ta'’ MMMM y", "d 'ta'’ MMMM y", "dd MMM y", "dd/MM/y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", 
"{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_my = {ZERODIGIT:4160, ERAS:["ဘီစီ", "အဒေီ"], ERANAMES:["ခရစ်တော် မပေါ်မီနှစ်", "ခရစ်နှစ်"], NARROWMONTHS:["ဇ", "ဖ", "မ", "ဧ", "မ", "ဇ", "ဇ", "ဩ", "စ", "အ", "န", "ဒ"], STANDALONENARROWMONTHS:["ဇ", "ဖ", "မ", "ဧ", "မ", "ဇ", "ဇ", "ဩ", "စ", "အ", "န", "ဒ"], MONTHS:["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "ဩဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ"], STANDALONEMONTHS:["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "ဩဂုတ်", 
"စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ"], SHORTMONTHS:["ဇန်", "ဖေ", "မတ်", "ဧ", "မေ", "ဇွန်", "ဇူ", "ဩ", "စက်", "အောက်", "နို", "ဒီ"], STANDALONESHORTMONTHS:["ဇန်", "ဖေ", "မတ်", "ဧ", "မေ", "ဇွန်", "ဇူ", "ဩ", "စက်", "အောက်", "နို", "ဒီ"], WEEKDAYS:["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"], STANDALONEWEEKDAYS:["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"], SHORTWEEKDAYS:["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", 
"သောကြာ", "စနေ"], STANDALONESHORTWEEKDAYS:["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"], NARROWWEEKDAYS:["တ", "တ", "အ", "ဗ", "က", "သ", "စ"], STANDALONENARROWWEEKDAYS:["တ", "တ", "အ", "ဗ", "က", "သ", "စ"], SHORTQUARTERS:["ပထမ သုံးလပတ်", "ဒုတိယ သုံးလပတ်", "တတိယ သုံးလပတ်", "စတုတ္ထ သုံးလပတ်"], QUARTERS:["ပထမ သုံးလပတ်", "ဒုတိယ သုံးလပတ်", "တတိယ သုံးလပတ်", "စတုတ္ထ သုံးလပတ်"], AMPMS:["နံနက်", "ညနေ"], DATEFORMATS:["y၊ MMMM d၊ EEEE", "y၊ MMMM d", "y၊ MMM d", "d/M/yy"], TIMEFORMATS:["zzzz HH:mm:ss", 
"z HH:mm:ss", "H:mm:ss", "H:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_nb = {ERAS:["f.Kr.", "e.Kr."], ERANAMES:["før Kristus", "etter Kristus"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"], STANDALONEMONTHS:["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", 
"november", "desember"], SHORTMONTHS:["jan.", "feb.", "mar.", "apr.", "mai", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "des."], STANDALONESHORTMONTHS:["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"], WEEKDAYS:["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"], STANDALONEWEEKDAYS:["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"], SHORTWEEKDAYS:["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."], STANDALONESHORTWEEKDAYS:["søn.", 
"man.", "tir.", "ons.", "tor.", "fre.", "lør."], NARROWWEEKDAYS:["S", "M", "T", "O", "T", "F", "L"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "O", "T", "F", "L"], SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'kl'. {0}", "{1} 'kl'. {0}", "{1}, {0}", "{1}, {0}"], 
FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_ne = {ZERODIGIT:2406, ERAS:["ईसा पूर्व", "सन्"], ERANAMES:["ईसा पूर्व", "सन्"], NARROWMONTHS:["जन", "फेब", "मार्च", "अप्र", "मे", "जुन", "जुल", "अग", "सेप", "अक्टो", "नोभे", "डिसे"], STANDALONENARROWMONTHS:["जन", "फेेब", "मार्च", "अप्र", "मे", "जुन", "जुल", "अग", "सेप", "अक्टो", "नोभे", "डिसे"], MONTHS:["जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर"], STANDALONEMONTHS:["जनवरी", "फेब्रुअरी", "मार्च", 
"अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर"], SHORTMONTHS:["जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर"], STANDALONESHORTMONTHS:["जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर"], WEEKDAYS:["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"], STANDALONEWEEKDAYS:["आइतबार", "सोमबार", "मङ्गलबार", 
"बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"], SHORTWEEKDAYS:["आइत", "सोम", "मङ्गल", "बुध", "बिहि", "शुक्र", "शनि"], STANDALONESHORTWEEKDAYS:["आइत", "सोम", "मङ्गल", "बुध", "बिहि", "शुक्र", "शनि"], NARROWWEEKDAYS:["आ", "सो", "म", "बु", "बि", "शु", "श"], STANDALONENARROWWEEKDAYS:["आ", "सो", "म", "बु", "बि", "शु", "श"], SHORTQUARTERS:["पहिलो सत्र", "दोस्रो सत्र", "तेस्रो सत्र", "चौथो सत्र"], QUARTERS:["पहिलो सत्र", "दोस्रो सत्र", "तेस्रो सत्र", "चौथो सत्र"], AMPMS:["पूर्वाह्न", "अपराह्न"], DATEFORMATS:["y MMMM d, EEEE", 
"y MMMM d", "y MMM d", "yy/M/d"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1}: {0}", "{1}: {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_nl = {ERAS:["v.Chr.", "n.Chr."], ERANAMES:["voor Christus", "na Christus"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], STANDALONEMONTHS:["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", 
"oktober", "november", "december"], SHORTMONTHS:["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], STANDALONESHORTMONTHS:["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], WEEKDAYS:["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], STANDALONEWEEKDAYS:["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], SHORTWEEKDAYS:["zo", "ma", "di", "wo", "do", "vr", "za"], STANDALONESHORTWEEKDAYS:["zo", 
"ma", "di", "wo", "do", "vr", "za"], NARROWWEEKDAYS:["Z", "M", "D", "W", "D", "V", "Z"], STANDALONENARROWWEEKDAYS:["Z", "M", "D", "W", "D", "V", "Z"], SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd-MM-y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'om' {0}", "{1} 'om' {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, 
WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_no = {ERAS:["f.Kr.", "e.Kr."], ERANAMES:["før Kristus", "etter Kristus"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"], STANDALONEMONTHS:["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", 
"november", "desember"], SHORTMONTHS:["jan.", "feb.", "mar.", "apr.", "mai", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "des."], STANDALONESHORTMONTHS:["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"], WEEKDAYS:["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"], STANDALONEWEEKDAYS:["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"], SHORTWEEKDAYS:["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."], STANDALONESHORTWEEKDAYS:["søn.", 
"man.", "tir.", "ons.", "tor.", "fre.", "lør."], NARROWWEEKDAYS:["S", "M", "T", "O", "T", "F", "L"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "O", "T", "F", "L"], SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'kl'. {0}", "{1} 'kl'. {0}", "{1}, {0}", "{1}, {0}"], 
FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_no_NO = goog.i18n.DateTimeSymbols_no;
goog.i18n.DateTimeSymbols_or = {ERAS:["BC", "AD"], ERANAMES:["ଖ୍ରୀଷ୍ଟପୂର୍ବ", "ଖ୍ରୀଷ୍ଟାବ୍ଦ"], NARROWMONTHS:["ଜା", "ଫେ", "ମା", "ଅ", "ମଇ", "ଜୁ", "ଜୁ", "ଅ", "ସେ", "ଅ", "ନ", "ଡି"], STANDALONENARROWMONTHS:["ଜା", "ଫେ", "ମା", "ଅ", "ମଇ", "ଜୁ", "ଜୁ", "ଅ", "ସେ", "ଅ", "ନ", "ଡି"], MONTHS:["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଅପ୍ରେଲ", "ମଇ", "ଜୁନ", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର"], STANDALONEMONTHS:["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଅପ୍ରେଲ", "ମଇ", "ଜୁନ", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", 
"ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର"], SHORTMONTHS:["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଅପ୍ରେଲ", "ମଇ", "ଜୁନ", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର"], STANDALONESHORTMONTHS:["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଅପ୍ରେଲ", "ମଇ", "ଜୁନ", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର"], WEEKDAYS:["ରବିବାର", "ସୋମବାର", "ମଙ୍ଗଳବାର", "ବୁଧବାର", "ଗୁରୁବାର", "ଶୁକ୍ରବାର", "ଶନିବାର"], STANDALONEWEEKDAYS:["ରବିବାର", "ସୋମବାର", "ମଙ୍ଗଳବାର", "ବୁଧବାର", "ଗୁରୁବାର", "ଶୁକ୍ରବାର", "ଶନିବାର"], SHORTWEEKDAYS:["ରବି", 
"ସୋମ", "ମଙ୍ଗଳ", "ବୁଧ", "ଗୁରୁ", "ଶୁକ୍ର", "ଶନି"], STANDALONESHORTWEEKDAYS:["ରବି", "ସୋମ", "ମଙ୍ଗଳ", "ବୁଧ", "ଗୁରୁ", "ଶୁକ୍ର", "ଶନି"], NARROWWEEKDAYS:["ର", "ସୋ", "ମ", "ବୁ", "ଗୁ", "ଶୁ", "ଶ"], STANDALONENARROWWEEKDAYS:["ର", "ସୋ", "ମ", "ବୁ", "ଗୁ", "ଶୁ", "ଶ"], SHORTQUARTERS:["1ମ ତ୍ରୟମାସ", "2ୟ ତ୍ରୟମାସ", "3ୟ ତ୍ରୟମାସ", "4ର୍ଥ ତ୍ରୟମାସ"], QUARTERS:["1ମ ତ୍ରୟମାସ", "2ୟ ତ୍ରୟମାସ", "3ୟ ତ୍ରୟମାସ", "4ର୍ଥ ତ୍ରୟମାସ"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], TIMEFORMATS:["h:mm:ss a zzzz", 
"h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{0} ଠାରେ {1}", "{0} ଠାରେ {1}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_pa = {ERAS:["ਈ. ਪੂ.", "ਸੰਨ"], ERANAMES:["ਈਸਵੀ ਪੂਰਵ", "ਈਸਵੀ ਸੰਨ"], NARROWMONTHS:["ਜ", "ਫ਼", "ਮਾ", "ਅ", "ਮ", "ਜੂ", "ਜੁ", "ਅ", "ਸ", "ਅ", "ਨ", "ਦ"], STANDALONENARROWMONTHS:["ਜ", "ਫ਼", "ਮਾ", "ਅ", "ਮ", "ਜੂ", "ਜੁ", "ਅ", "ਸ", "ਅ", "ਨ", "ਦ"], MONTHS:["ਜਨਵਰੀ", "ਫ਼ਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਸੰਬਰ"], STANDALONEMONTHS:["ਜਨਵਰੀ", "ਫ਼ਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਸੰਬਰ"], SHORTMONTHS:["ਜਨ", 
"ਫ਼ਰ", "ਮਾਰਚ", "ਅਪ੍ਰੈ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾ", "ਅਗ", "ਸਤੰ", "ਅਕਤੂ", "ਨਵੰ", "ਦਸੰ"], STANDALONESHORTMONTHS:["ਜਨ", "ਫ਼ਰ", "ਮਾਰਚ", "ਅਪ੍ਰੈ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾ", "ਅਗ", "ਸਤੰ", "ਅਕਤੂ", "ਨਵੰ", "ਦਸੰ"], WEEKDAYS:["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁੱਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁੱਕਰਵਾਰ", "ਸ਼ਨਿੱਚਰਵਾਰ"], STANDALONEWEEKDAYS:["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁੱਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁੱਕਰਵਾਰ", "ਸ਼ਨਿੱਚਰਵਾਰ"], SHORTWEEKDAYS:["ਐਤ", "ਸੋਮ", "ਮੰਗਲ", "ਬੁੱਧ", "ਵੀਰ", "ਸ਼ੁੱਕਰ", "ਸ਼ਨਿੱਚਰ"], STANDALONESHORTWEEKDAYS:["ਐਤ", "ਸੋਮ", "ਮੰਗਲ", "ਬੁੱਧ", 
"ਵੀਰ", "ਸ਼ੁੱਕਰ", "ਸ਼ਨਿੱਚਰ"], NARROWWEEKDAYS:["ਐ", "ਸੋ", "ਮੰ", "ਬੁੱ", "ਵੀ", "ਸ਼ੁੱ", "ਸ਼"], STANDALONENARROWWEEKDAYS:["ਐ", "ਸੋ", "ਮੰ", "ਬੁੱ", "ਵੀ", "ਸ਼ੁੱ", "ਸ਼"], SHORTQUARTERS:["ਤਿਮਾਹੀ1", "ਤਿਮਾਹੀ2", "ਤਿਮਾਹੀ3", "ਤਿਮਾਹੀ4"], QUARTERS:["ਪਹਿਲੀ ਤਿਮਾਹੀ", "ਦੂਜੀ ਤਿਮਾਹੀ", "ਤੀਜੀ ਤਿਮਾਹੀ", "ਚੌਥੀ ਤਿਮਾਹੀ"], AMPMS:["ਪੂ.ਦੁ.", "ਬਾ.ਦੁ."], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1}, {0}", 
"{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_pl = {ERAS:["p.n.e.", "n.e."], ERANAMES:["przed naszą erą", "naszej ery"], NARROWMONTHS:["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"], STANDALONENARROWMONTHS:["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"], MONTHS:["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"], STANDALONEMONTHS:["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", 
"wrzesień", "październik", "listopad", "grudzień"], SHORTMONTHS:["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"], STANDALONESHORTMONTHS:["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"], WEEKDAYS:["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"], STANDALONEWEEKDAYS:["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"], SHORTWEEKDAYS:["niedz.", "pon.", "wt.", "śr.", "czw.", 
"pt.", "sob."], STANDALONESHORTWEEKDAYS:["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."], NARROWWEEKDAYS:["n", "p", "w", "ś", "c", "p", "s"], STANDALONENARROWWEEKDAYS:["N", "P", "W", "Ś", "C", "P", "S"], SHORTQUARTERS:["I kw.", "II kw.", "III kw.", "IV kw."], QUARTERS:["I kwartał", "II kwartał", "III kwartał", "IV kwartał"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d.MM.y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", 
"{1} {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_pt = {ERAS:["a.C.", "d.C."], ERANAMES:["antes de Cristo", "depois de Cristo"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"], STANDALONEMONTHS:["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", 
"outubro", "novembro", "dezembro"], SHORTMONTHS:["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."], STANDALONESHORTMONTHS:["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."], WEEKDAYS:["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"], STANDALONEWEEKDAYS:["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"], SHORTWEEKDAYS:["dom.", 
"seg.", "ter.", "qua.", "qui.", "sex.", "sáb."], STANDALONESHORTWEEKDAYS:["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sáb."], NARROWWEEKDAYS:["D", "S", "T", "Q", "Q", "S", "S"], STANDALONENARROWWEEKDAYS:["D", "S", "T", "Q", "Q", "S", "S"], SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d 'de' MMM 'de' y", "dd/MM/y"], TIMEFORMATS:["HH:mm:ss zzzz", 
"HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'às' {0}", "{1} 'às' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_pt_BR = goog.i18n.DateTimeSymbols_pt;
goog.i18n.DateTimeSymbols_pt_PT = {ERAS:["a.C.", "d.C."], ERANAMES:["antes de Cristo", "depois de Cristo"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"], STANDALONEMONTHS:["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", 
"outubro", "novembro", "dezembro"], SHORTMONTHS:["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."], STANDALONESHORTMONTHS:["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."], WEEKDAYS:["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"], STANDALONEWEEKDAYS:["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"], SHORTWEEKDAYS:["domingo", 
"segunda", "terça", "quarta", "quinta", "sexta", "sábado"], STANDALONESHORTWEEKDAYS:["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"], NARROWWEEKDAYS:["D", "S", "T", "Q", "Q", "S", "S"], STANDALONENARROWWEEKDAYS:["D", "S", "T", "Q", "Q", "S", "S"], SHORTQUARTERS:["T1", "T2", "T3", "T4"], QUARTERS:["1.º trimestre", "2.º trimestre", "3.º trimestre", "4.º trimestre"], AMPMS:["da manhã", "da tarde"], DATEFORMATS:["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "dd/MM/y", "dd/MM/yy"], 
TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'às' {0}", "{1} 'às' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:2};
goog.i18n.DateTimeSymbols_ro = {ERAS:["î.Hr.", "d.Hr."], ERANAMES:["înainte de Hristos", "după Hristos"], NARROWMONTHS:["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], MONTHS:["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"], STANDALONEMONTHS:["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", 
"septembrie", "octombrie", "noiembrie", "decembrie"], SHORTMONTHS:["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."], STANDALONESHORTMONTHS:["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."], WEEKDAYS:["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"], STANDALONEWEEKDAYS:["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"], SHORTWEEKDAYS:["dum.", "lun.", "mar.", "mie.", 
"joi", "vin.", "sâm."], STANDALONESHORTWEEKDAYS:["dum.", "lun.", "mar.", "mie.", "joi", "vin.", "sâm."], NARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], STANDALONENARROWWEEKDAYS:["D", "L", "M", "M", "J", "V", "S"], SHORTQUARTERS:["trim. I", "trim. II", "trim. III", "trim. IV"], QUARTERS:["trimestrul I", "trimestrul al II-lea", "trimestrul al III-lea", "trimestrul al IV-lea"], AMPMS:["a.m.", "p.m."], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd.MM.y"], TIMEFORMATS:["HH:mm:ss zzzz", 
"HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'la' {0}", "{1} 'la' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_ru = {ERAS:["до н. э.", "н. э."], ERANAMES:["до Рождества Христова", "от Рождества Христова"], NARROWMONTHS:["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], STANDALONENARROWMONTHS:["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], MONTHS:["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"], STANDALONEMONTHS:["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", 
"октябрь", "ноябрь", "декабрь"], SHORTMONTHS:["янв.", "февр.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."], STANDALONESHORTMONTHS:["янв.", "февр.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."], WEEKDAYS:["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"], STANDALONEWEEKDAYS:["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"], SHORTWEEKDAYS:["вс", "пн", "вт", "ср", 
"чт", "пт", "сб"], STANDALONESHORTWEEKDAYS:["вс", "пн", "вт", "ср", "чт", "пт", "сб"], NARROWWEEKDAYS:["В", "П", "В", "С", "Ч", "П", "С"], STANDALONENARROWWEEKDAYS:["В", "П", "В", "С", "Ч", "П", "С"], SHORTQUARTERS:["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."], QUARTERS:["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y 'г'.", "d MMMM y 'г'.", "d MMM y 'г'.", "dd.MM.y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'в' {0}", 
"{1} 'в' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_sh = {ERAS:["p. n. e.", "n. e."], ERANAMES:["pre nove ere", "nove ere"], NARROWMONTHS:["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], STANDALONENARROWMONTHS:["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], MONTHS:["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"], STANDALONEMONTHS:["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", 
"decembar"], SHORTMONTHS:["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], STANDALONESHORTMONTHS:["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], WEEKDAYS:["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"], STANDALONEWEEKDAYS:["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"], SHORTWEEKDAYS:["ned", "pon", "uto", "sre", "čet", "pet", "sub"], STANDALONESHORTWEEKDAYS:["ned", "pon", 
"uto", "sre", "čet", "pet", "sub"], NARROWWEEKDAYS:["n", "p", "u", "s", "č", "p", "s"], STANDALONENARROWWEEKDAYS:["n", "p", "u", "s", "č", "p", "s"], SHORTQUARTERS:["1. kv.", "2. kv.", "3. kv.", "4. kv."], QUARTERS:["prvi kvartal", "drugi kvartal", "treći kvartal", "četvrti kvartal"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d. MMMM y.", "d. MMMM y.", "d. M. y.", "d.M.yy."], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], 
FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_si = {ERAS:["ක්‍රි.පූ.", "ක්‍රි.ව."], ERANAMES:["ක්‍රිස්තු පූර්ව", "ක්‍රිස්තු වර්ෂ"], NARROWMONTHS:["ජ", "පෙ", "මා", "අ", "මැ", "ජූ", "ජූ", "අ", "සැ", "ඔ", "නෙ", "දෙ"], STANDALONENARROWMONTHS:["ජ", "පෙ", "මා", "අ", "මැ", "ජූ", "ජූ", "අ", "සැ", "ඔ", "නෙ", "දෙ"], MONTHS:["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"], STANDALONEMONTHS:["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", 
"ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"], SHORTMONTHS:["ජන", "පෙබ", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"], STANDALONESHORTMONTHS:["ජන", "පෙබ", "මාර්", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"], WEEKDAYS:["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"], STANDALONEWEEKDAYS:["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"], 
SHORTWEEKDAYS:["ඉරිදා", "සඳුදා", "අඟහ", "බදාදා", "බ්‍රහස්", "සිකු", "සෙන"], STANDALONESHORTWEEKDAYS:["ඉරිදා", "සඳුදා", "අඟහ", "බදාදා", "බ්‍රහස්", "සිකු", "සෙන"], NARROWWEEKDAYS:["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"], STANDALONENARROWWEEKDAYS:["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"], SHORTQUARTERS:["කාර්:1", "කාර්:2", "කාර්:3", "කාර්:4"], QUARTERS:["1 වන කාර්තුව", "2 වන කාර්තුව", "3 වන කාර්තුව", "4 වන කාර්තුව"], AMPMS:["පෙ.ව.", "ප.ව."], DATEFORMATS:["y MMMM d, EEEE", "y MMMM d", "y MMM d", "y-MM-dd"], 
TIMEFORMATS:["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"], DATETIMEFORMATS:["{1} දින {0}", "{1} දින {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_sk = {ERAS:["pred Kr.", "po Kr."], ERANAMES:["pred Kristom", "po Kristovi"], NARROWMONTHS:["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], STANDALONENARROWMONTHS:["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], MONTHS:["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"], STANDALONEMONTHS:["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", 
"november", "december"], SHORTMONTHS:["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"], STANDALONESHORTMONTHS:["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"], WEEKDAYS:["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"], STANDALONEWEEKDAYS:["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"], SHORTWEEKDAYS:["ne", "po", "ut", "st", "št", "pi", "so"], STANDALONESHORTWEEKDAYS:["ne", "po", 
"ut", "st", "št", "pi", "so"], NARROWWEEKDAYS:["n", "p", "u", "s", "š", "p", "s"], STANDALONENARROWWEEKDAYS:["n", "p", "u", "s", "š", "p", "s"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["1. štvrťrok", "2. štvrťrok", "3. štvrťrok", "4. štvrťrok"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE d. MMMM y", "d. MMMM y", "d. M. y", "d. M. y"], TIMEFORMATS:["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], DATETIMEFORMATS:["{1} 'o' {0}", "{1} 'o' {0}", "{1}, {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 
6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_sl = {ERAS:["pr. Kr.", "po Kr."], ERANAMES:["pred Kristusom", "po Kristusu"], NARROWMONTHS:["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], STANDALONENARROWMONTHS:["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], MONTHS:["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"], STANDALONEMONTHS:["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", 
"november", "december"], SHORTMONTHS:["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "avg.", "sep.", "okt.", "nov.", "dec."], STANDALONESHORTMONTHS:["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "avg.", "sep.", "okt.", "nov.", "dec."], WEEKDAYS:["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"], STANDALONEWEEKDAYS:["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"], SHORTWEEKDAYS:["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."], 
STANDALONESHORTWEEKDAYS:["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."], NARROWWEEKDAYS:["n", "p", "t", "s", "č", "p", "s"], STANDALONENARROWWEEKDAYS:["n", "p", "t", "s", "č", "p", "s"], SHORTQUARTERS:["1. čet.", "2. čet.", "3. čet.", "4. čet."], QUARTERS:["1. četrtletje", "2. četrtletje", "3. četrtletje", "4. četrtletje"], AMPMS:["dop.", "pop."], DATEFORMATS:["EEEE, d. MMMM y", "d. MMMM y", "d. MMM y", "d. MM. yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'ob' {0}", 
"{1} 'ob' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_sq = {ERAS:["p.K.", "mb.K."], ERANAMES:["para Krishtit", "mbas Krishtit"], NARROWMONTHS:["j", "sh", "m", "p", "m", "q", "k", "g", "sh", "t", "n", "dh"], STANDALONENARROWMONTHS:["j", "sh", "m", "p", "m", "q", "k", "g", "sh", "t", "n", "dh"], MONTHS:["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor"], STANDALONEMONTHS:["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", 
"nëntor", "dhjetor"], SHORTMONTHS:["jan", "shk", "mar", "pri", "maj", "qer", "korr", "gush", "sht", "tet", "nën", "dhj"], STANDALONESHORTMONTHS:["jan", "shk", "mar", "pri", "maj", "qer", "korr", "gush", "sht", "tet", "nën", "dhj"], WEEKDAYS:["e diel", "e hënë", "e martë", "e mërkurë", "e enjte", "e premte", "e shtunë"], STANDALONEWEEKDAYS:["e diel", "e hënë", "e martë", "e mërkurë", "e enjte", "e premte", "e shtunë"], SHORTWEEKDAYS:["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Sht"], STANDALONESHORTWEEKDAYS:["die", 
"hën", "mar", "mër", "enj", "pre", "sht"], NARROWWEEKDAYS:["d", "h", "m", "m", "e", "p", "sh"], STANDALONENARROWWEEKDAYS:["d", "h", "m", "m", "e", "p", "sh"], SHORTQUARTERS:["tremujori I", "tremujori II", "tremujori III", "tremujori IV"], QUARTERS:["tremujori i parë", "tremujori i dytë", "tremujori i tretë", "tremujori i katërt"], AMPMS:["e paradites", "e pasdites"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d.M.yy"], TIMEFORMATS:["h:mm:ss a, zzzz", "h:mm:ss a, z", "h:mm:ss a", "h:mm a"], 
DATETIMEFORMATS:["{1} 'në' {0}", "{1} 'në' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_sr = {ERAS:["п. н. е.", "н. е."], ERANAMES:["пре нове ере", "нове ере"], NARROWMONTHS:["ј", "ф", "м", "а", "м", "ј", "ј", "а", "с", "о", "н", "д"], STANDALONENARROWMONTHS:["ј", "ф", "м", "а", "м", "ј", "ј", "а", "с", "о", "н", "д"], MONTHS:["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"], STANDALONEMONTHS:["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", 
"децембар"], SHORTMONTHS:["јан", "феб", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "нов", "дец"], STANDALONESHORTMONTHS:["јан", "феб", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "нов", "дец"], WEEKDAYS:["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"], STANDALONEWEEKDAYS:["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"], SHORTWEEKDAYS:["нед", "пон", "уто", "сре", "чет", "пет", "суб"], STANDALONESHORTWEEKDAYS:["нед", "пон", 
"уто", "сре", "чет", "пет", "суб"], NARROWWEEKDAYS:["н", "п", "у", "с", "ч", "п", "с"], STANDALONENARROWWEEKDAYS:["н", "п", "у", "с", "ч", "п", "с"], SHORTQUARTERS:["1. кв.", "2. кв.", "3. кв.", "4. кв."], QUARTERS:["први квартал", "други квартал", "трећи квартал", "четврти квартал"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d. MMMM y.", "d. MMMM y.", "d. M. y.", "d.M.yy."], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], 
FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_sr_Latn = {ERAS:["p. n. e.", "n. e."], ERANAMES:["pre nove ere", "nove ere"], NARROWMONTHS:["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], STANDALONENARROWMONTHS:["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], MONTHS:["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"], STANDALONEMONTHS:["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", 
"novembar", "decembar"], SHORTMONTHS:["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], STANDALONESHORTMONTHS:["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], WEEKDAYS:["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"], STANDALONEWEEKDAYS:["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"], SHORTWEEKDAYS:["ned", "pon", "uto", "sre", "čet", "pet", "sub"], STANDALONESHORTWEEKDAYS:["ned", 
"pon", "uto", "sre", "čet", "pet", "sub"], NARROWWEEKDAYS:["n", "p", "u", "s", "č", "p", "s"], STANDALONENARROWWEEKDAYS:["n", "p", "u", "s", "č", "p", "s"], SHORTQUARTERS:["1. kv.", "2. kv.", "3. kv.", "4. kv."], QUARTERS:["prvi kvartal", "drugi kvartal", "treći kvartal", "četvrti kvartal"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d. MMMM y.", "d. MMMM y.", "d. M. y.", "d.M.yy."], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], 
FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_sv = {ERAS:["f.Kr.", "e.Kr."], ERANAMES:["före Kristus", "efter Kristus"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"], STANDALONEMONTHS:["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", 
"november", "december"], SHORTMONTHS:["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], STANDALONESHORTMONTHS:["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], WEEKDAYS:["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"], STANDALONEWEEKDAYS:["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"], SHORTWEEKDAYS:["sön", "mån", "tis", "ons", "tors", "fre", "lör"], STANDALONESHORTWEEKDAYS:["sön", 
"mån", "tis", "ons", "tors", "fre", "lör"], NARROWWEEKDAYS:["S", "M", "T", "O", "T", "F", "L"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "O", "T", "F", "L"], SHORTQUARTERS:["K1", "K2", "K3", "K4"], QUARTERS:["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"], AMPMS:["fm", "em"], DATEFORMATS:["EEEE d MMMM y", "d MMMM y", "d MMM y", "y-MM-dd"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'kl'. {0}", "{1} 'kl'. {0}", "{1} {0}", "{1} {0}"], 
FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:3};
goog.i18n.DateTimeSymbols_sw = {ERAS:["KK", "BK"], ERANAMES:["Kabla ya Kristo", "Baada ya Kristo"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"], STANDALONEMONTHS:["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", 
"Novemba", "Desemba"], SHORTMONTHS:["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ago", "Sep", "Okt", "Nov", "Des"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ago", "Sep", "Okt", "Nov", "Des"], WEEKDAYS:["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"], STANDALONEWEEKDAYS:["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"], SHORTWEEKDAYS:["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", 
"Jumamosi"], STANDALONESHORTWEEKDAYS:["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"], NARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], SHORTQUARTERS:["Robo ya 1", "Robo ya 2", "Robo ya 3", "Robo ya 4"], QUARTERS:["Robo ya 1", "Robo ya 2", "Robo ya 3", "Robo ya 4"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", 
"HH:mm"], DATETIMEFORMATS:["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_ta = {ERAS:["கி.மு.", "கி.பி."], ERANAMES:["கிறிஸ்துவுக்கு முன்", "அன்னோ டோமினி"], NARROWMONTHS:["ஜ", "பி", "மா", "ஏ", "மே", "ஜூ", "ஜூ", "ஆ", "செ", "அ", "ந", "டி"], STANDALONENARROWMONTHS:["ஜ", "பி", "மா", "ஏ", "மே", "ஜூ", "ஜூ", "ஆ", "செ", "அ", "ந", "டி"], MONTHS:["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"], STANDALONEMONTHS:["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", 
"செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"], SHORTMONTHS:["ஜன.", "பிப்.", "மார்.", "ஏப்.", "மே", "ஜூன்", "ஜூலை", "ஆக.", "செப்.", "அக்.", "நவ.", "டிச."], STANDALONESHORTMONTHS:["ஜன.", "பிப்.", "மார்.", "ஏப்.", "மே", "ஜூன்", "ஜூலை", "ஆக.", "செப்.", "அக்.", "நவ.", "டிச."], WEEKDAYS:["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"], STANDALONEWEEKDAYS:["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"], SHORTWEEKDAYS:["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", 
"வெள்.", "சனி"], STANDALONESHORTWEEKDAYS:["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", "வெள்.", "சனி"], NARROWWEEKDAYS:["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"], STANDALONENARROWWEEKDAYS:["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"], SHORTQUARTERS:["காலா.1", "காலா.2", "காலா.3", "காலா.4"], QUARTERS:["ஒன்றாம் காலாண்டு", "இரண்டாம் காலாண்டு", "மூன்றாம் காலாண்டு", "நான்காம் காலாண்டு"], AMPMS:["முற்பகல்", "பிற்பகல்"], DATEFORMATS:["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d/M/yy"], TIMEFORMATS:["a h:mm:ss zzzz", 
"a h:mm:ss z", "a h:mm:ss", "a h:mm"], DATETIMEFORMATS:["{1} அன்று {0}", "{1} அன்று {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_te = {ERAS:["క్రీపూ", "క్రీశ"], ERANAMES:["క్రీస్తు పూర్వం", "క్రీస్తు శకం"], NARROWMONTHS:["జ", "ఫి", "మా", "ఏ", "మే", "జూ", "జు", "ఆ", "సె", "అ", "న", "డి"], STANDALONENARROWMONTHS:["జ", "ఫి", "మా", "ఏ", "మే", "జూ", "జు", "ఆ", "సె", "అ", "న", "డి"], MONTHS:["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జులై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"], STANDALONEMONTHS:["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జులై", "ఆగస్టు", 
"సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"], SHORTMONTHS:["జన", "ఫిబ్ర", "మార్చి", "ఏప్రి", "మే", "జూన్", "జులై", "ఆగ", "సెప్టెం", "అక్టో", "నవం", "డిసెం"], STANDALONESHORTMONTHS:["జన", "ఫిబ్ర", "మార్చి", "ఏప్రి", "మే", "జూన్", "జులై", "ఆగ", "సెప్టెం", "అక్టో", "నవం", "డిసెం"], WEEKDAYS:["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"], STANDALONEWEEKDAYS:["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"], SHORTWEEKDAYS:["ఆది", "సోమ", 
"మంగళ", "బుధ", "గురు", "శుక్ర", "శని"], STANDALONESHORTWEEKDAYS:["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"], NARROWWEEKDAYS:["ఆ", "సో", "మ", "బు", "గు", "శు", "శ"], STANDALONENARROWWEEKDAYS:["ఆ", "సో", "మ", "బు", "గు", "శు", "శ"], SHORTQUARTERS:["త్రై1", "త్రై2", "త్రై3", "త్రై4"], QUARTERS:["1వ త్రైమాసికం", "2వ త్రైమాసికం", "3వ త్రైమాసికం", "4వ త్రైమాసికం"], AMPMS:["AM", "PM"], DATEFORMATS:["d, MMMM y, EEEE", "d MMMM, y", "d MMM, y", "dd-MM-yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", 
"h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} {0}కి", "{1} {0}కి", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[6, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_th = {ERAS:["ก่อน ค.ศ.", "ค.ศ."], ERANAMES:["ปีก่อนคริสตกาล", "คริสต์ศักราช"], NARROWMONTHS:["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."], STANDALONENARROWMONTHS:["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."], MONTHS:["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"], STANDALONEMONTHS:["มกราคม", 
"กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"], SHORTMONTHS:["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."], STANDALONESHORTMONTHS:["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."], WEEKDAYS:["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"], STANDALONEWEEKDAYS:["วันอาทิตย์", "วันจันทร์", 
"วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"], SHORTWEEKDAYS:["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."], STANDALONESHORTWEEKDAYS:["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."], NARROWWEEKDAYS:["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"], STANDALONENARROWWEEKDAYS:["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"], SHORTQUARTERS:["ไตรมาส 1", "ไตรมาส 2", "ไตรมาส 3", "ไตรมาส 4"], QUARTERS:["ไตรมาส 1", "ไตรมาส 2", "ไตรมาส 3", "ไตรมาส 4"], AMPMS:["ก่อนเที่ยง", "หลังเที่ยง"], DATEFORMATS:["EEEEที่ d MMMM G y", 
"d MMMM G y", "d MMM y", "d/M/yy"], TIMEFORMATS:["H นาฬิกา mm นาที ss วินาที zzzz", "H นาฬิกา mm นาที ss วินาที z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} เวลา {0}", "{1} เวลา {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_tl = {ERAS:["BC", "AD"], ERANAMES:["Before Christ", "Anno Domini"], NARROWMONTHS:["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], STANDALONENARROWMONTHS:["E", "P", "M", "A", "M", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], MONTHS:["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", "Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"], STANDALONEMONTHS:["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", 
"Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"], SHORTMONTHS:["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], STANDALONESHORTMONTHS:["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], WEEKDAYS:["Linggo", "Lunes", "Martes", "Miyerkules", "Huwebes", "Biyernes", "Sabado"], STANDALONEWEEKDAYS:["Linggo", "Lunes", "Martes", "Miyerkules", "Huwebes", "Biyernes", "Sabado"], SHORTWEEKDAYS:["Lin", "Lun", "Mar", "Miy", "Huw", 
"Biy", "Sab"], STANDALONESHORTWEEKDAYS:["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"], NARROWWEEKDAYS:["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"], STANDALONENARROWWEEKDAYS:["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["ika-1 quarter", "ika-2 quarter", "ika-3 quarter", "ika-4 na quarter"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", 
"h:mm a"], DATETIMEFORMATS:["{1} 'nang' {0}", "{1} 'nang' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_tr = {ERAS:["MÖ", "MS"], ERANAMES:["Milattan Önce", "Milattan Sonra"], NARROWMONTHS:["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"], STANDALONENARROWMONTHS:["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"], MONTHS:["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], STANDALONEMONTHS:["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], 
SHORTMONTHS:["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], STANDALONESHORTMONTHS:["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], WEEKDAYS:["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], STANDALONEWEEKDAYS:["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], SHORTWEEKDAYS:["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], STANDALONESHORTWEEKDAYS:["Paz", "Pzt", "Sal", "Çar", 
"Per", "Cum", "Cmt"], NARROWWEEKDAYS:["P", "P", "S", "Ç", "P", "C", "C"], STANDALONENARROWWEEKDAYS:["P", "P", "S", "Ç", "P", "C", "C"], SHORTQUARTERS:["Ç1", "Ç2", "Ç3", "Ç4"], QUARTERS:["1. çeyrek", "2. çeyrek", "3. çeyrek", "4. çeyrek"], AMPMS:["ÖÖ", "ÖS"], DATEFORMATS:["d MMMM y EEEE", "d MMMM y", "d MMM y", "d.MM.y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_uk = {ERAS:["до н. е.", "н. е."], ERANAMES:["до нашої ери", "нашої ери"], NARROWMONTHS:["с", "л", "б", "к", "т", "ч", "л", "с", "в", "ж", "л", "г"], STANDALONENARROWMONTHS:["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"], MONTHS:["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"], STANDALONEMONTHS:["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", 
"жовтень", "листопад", "грудень"], SHORTMONTHS:["січ.", "лют.", "бер.", "квіт.", "трав.", "черв.", "лип.", "серп.", "вер.", "жовт.", "лист.", "груд."], STANDALONESHORTMONTHS:["січ", "лют", "бер", "кві", "тра", "чер", "лип", "сер", "вер", "жов", "лис", "гру"], WEEKDAYS:["неділя", "понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота"], STANDALONEWEEKDAYS:["неділя", "понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота"], SHORTWEEKDAYS:["нд", "пн", "вт", "ср", "чт", "пт", "сб"], 
STANDALONESHORTWEEKDAYS:["нд", "пн", "вт", "ср", "чт", "пт", "сб"], NARROWWEEKDAYS:["Н", "П", "В", "С", "Ч", "П", "С"], STANDALONENARROWWEEKDAYS:["Н", "П", "В", "С", "Ч", "П", "С"], SHORTQUARTERS:["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."], QUARTERS:["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"], AMPMS:["дп", "пп"], DATEFORMATS:["EEEE, d MMMM y 'р'.", "d MMMM y 'р'.", "d MMM y 'р'.", "dd.MM.yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} 'о' {0}", 
"{1} 'о' {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_ur = {ERAS:["قبل مسیح", "عیسوی"], ERANAMES:["قبل مسیح", "عیسوی"], NARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"], STANDALONEMONTHS:["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"], SHORTMONTHS:["جنوری", 
"فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"], STANDALONESHORTMONTHS:["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"], WEEKDAYS:["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"], STANDALONEWEEKDAYS:["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"], SHORTWEEKDAYS:["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"], STANDALONESHORTWEEKDAYS:["اتوار", "پیر", "منگل", "بدھ", "جمعرات", 
"جمعہ", "ہفتہ"], NARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], STANDALONENARROWWEEKDAYS:["S", "M", "T", "W", "T", "F", "S"], SHORTQUARTERS:["پہلی سہ ماہی", "دوسری سہ ماہی", "تیسری سہ ماہی", "چوتهی سہ ماہی"], QUARTERS:["پہلی سہ ماہی", "دوسری سہ ماہی", "تیسری سہ ماہی", "چوتهی سہ ماہی"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE، d MMMM، y", "d MMMM، y", "d MMM، y", "d/M/yy"], TIMEFORMATS:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], DATETIMEFORMATS:["{1} کو {0}", "{1} کو {0}", "{1}، {0}", 
"{1}، {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_uz = {ERAS:["m.a.", "milodiy"], ERANAMES:["miloddan avvalgi", "milodiy"], NARROWMONTHS:["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], MONTHS:["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"], STANDALONEMONTHS:["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"], 
SHORTMONTHS:["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"], STANDALONESHORTMONTHS:["Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"], WEEKDAYS:["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"], STANDALONEWEEKDAYS:["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"], SHORTWEEKDAYS:["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"], STANDALONESHORTWEEKDAYS:["Yak", 
"Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"], NARROWWEEKDAYS:["Y", "D", "S", "C", "P", "J", "S"], STANDALONENARROWWEEKDAYS:["Y", "D", "S", "C", "P", "J", "S"], SHORTQUARTERS:["1-ch", "2-ch", "3-ch", "4-ch"], QUARTERS:["1-chorak", "2-chorak", "3-chorak", "4-chorak"], AMPMS:["TO", "TK"], DATEFORMATS:["EEEE, d-MMMM, y", "d-MMMM, y", "d-MMM, y", "dd/MM/yy"], TIMEFORMATS:["H:mm:ss (zzzz)", "H:mm:ss (z)", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"], FIRSTDAYOFWEEK:0, 
WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_vi = {ERAS:["TCN", "CN"], ERANAMES:["Trước Thiên Chúa", "Sau Công Nguyên"], NARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], STANDALONENARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], MONTHS:["tháng 1", "tháng 2", "tháng 3", "tháng 4", "tháng 5", "tháng 6", "tháng 7", "tháng 8", "tháng 9", "tháng 10", "tháng 11", "tháng 12"], STANDALONEMONTHS:["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", 
"Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"], SHORTMONTHS:["thg 1", "thg 2", "thg 3", "thg 4", "thg 5", "thg 6", "thg 7", "thg 8", "thg 9", "thg 10", "thg 11", "thg 12"], STANDALONESHORTMONTHS:["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"], WEEKDAYS:["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"], STANDALONEWEEKDAYS:["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"], 
SHORTWEEKDAYS:["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"], STANDALONESHORTWEEKDAYS:["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"], NARROWWEEKDAYS:["CN", "T2", "T3", "T4", "T5", "T6", "T7"], STANDALONENARROWWEEKDAYS:["CN", "T2", "T3", "T4", "T5", "T6", "T7"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["Quý 1", "Quý 2", "Quý 3", "Quý 4"], AMPMS:["SA", "CH"], DATEFORMATS:["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "dd/MM/y"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", 
"HH:mm"], DATETIMEFORMATS:["'lúc' {0} {1}", "'lúc' {0} {1}", "{0} {1}", "{0} {1}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_zh = {ERAS:["公元前", "公元"], ERANAMES:["公元前", "公元"], NARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], STANDALONENARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], MONTHS:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], STANDALONEMONTHS:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], SHORTMONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], 
STANDALONESHORTMONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], WEEKDAYS:["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], STANDALONEWEEKDAYS:["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], SHORTWEEKDAYS:["周日", "周一", "周二", "周三", "周四", "周五", "周六"], STANDALONESHORTWEEKDAYS:["周日", "周一", "周二", "周三", "周四", "周五", "周六"], NARROWWEEKDAYS:["日", "一", "二", "三", "四", "五", "六"], STANDALONENARROWWEEKDAYS:["日", "一", "二", "三", "四", "五", "六"], SHORTQUARTERS:["1季度", "2季度", "3季度", 
"4季度"], QUARTERS:["第一季度", "第二季度", "第三季度", "第四季度"], AMPMS:["上午", "下午"], DATEFORMATS:["y年M月d日EEEE", "y年M月d日", "y年M月d日", "y/M/d"], TIMEFORMATS:["zzzz HH:mm:ss", "z HH:mm:ss", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:0, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:6};
goog.i18n.DateTimeSymbols_zh_CN = goog.i18n.DateTimeSymbols_zh;
goog.i18n.DateTimeSymbols_zh_HK = {ERAS:["公元前", "公元"], ERANAMES:["公元前", "公元"], NARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], STANDALONENARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], MONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], STANDALONEMONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], SHORTMONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", 
"12月"], STANDALONESHORTMONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], WEEKDAYS:["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], STANDALONEWEEKDAYS:["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], SHORTWEEKDAYS:["週日", "週一", "週二", "週三", "週四", "週五", "週六"], STANDALONESHORTWEEKDAYS:["週日", "週一", "週二", "週三", "週四", "週五", "週六"], NARROWWEEKDAYS:["日", "一", "二", "三", "四", "五", "六"], STANDALONENARROWWEEKDAYS:["日", "一", "二", "三", "四", "五", "六"], SHORTQUARTERS:["Q1", "Q2", 
"Q3", "Q4"], QUARTERS:["第1季", "第2季", "第3季", "第4季"], AMPMS:["上午", "下午"], DATEFORMATS:["y年M月d日EEEE", "y年M月d日", "y年M月d日", "d/M/y"], TIMEFORMATS:["ah:mm:ss [zzzz]", "ah:mm:ss [z]", "ah:mm:ss", "ah:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_zh_TW = {ERAS:["西元前", "西元"], ERANAMES:["西元前", "西元"], NARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], STANDALONENARROWMONTHS:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], MONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], STANDALONEMONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], SHORTMONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", 
"12月"], STANDALONESHORTMONTHS:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], WEEKDAYS:["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], STANDALONEWEEKDAYS:["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], SHORTWEEKDAYS:["週日", "週一", "週二", "週三", "週四", "週五", "週六"], STANDALONESHORTWEEKDAYS:["週日", "週一", "週二", "週三", "週四", "週五", "週六"], NARROWWEEKDAYS:["日", "一", "二", "三", "四", "五", "六"], STANDALONENARROWWEEKDAYS:["日", "一", "二", "三", "四", "五", "六"], SHORTQUARTERS:["第1季", "第2季", 
"第3季", "第4季"], QUARTERS:["第1季", "第2季", "第3季", "第4季"], AMPMS:["上午", "下午"], DATEFORMATS:["y年M月d日 EEEE", "y年M月d日", "y年M月d日", "y/M/d"], TIMEFORMATS:["Bh:mm:ss [zzzz]", "Bh:mm:ss [z]", "Bh:mm:ss", "Bh:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbols_zu = {ERAS:["BC", "AD"], ERANAMES:["BC", "AD"], NARROWMONTHS:["J", "F", "M", "E", "M", "J", "J", "A", "S", "O", "N", "D"], STANDALONENARROWMONTHS:["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], MONTHS:["Januwari", "Februwari", "Mashi", "Ephreli", "Meyi", "Juni", "Julayi", "Agasti", "Septhemba", "Okthoba", "Novemba", "Disemba"], STANDALONEMONTHS:["Januwari", "Februwari", "Mashi", "Ephreli", "Meyi", "Juni", "Julayi", "Agasti", "Septhemba", "Okthoba", "Novemba", 
"Disemba"], SHORTMONTHS:["Jan", "Feb", "Mas", "Eph", "Mey", "Jun", "Jul", "Aga", "Sep", "Okt", "Nov", "Dis"], STANDALONESHORTMONTHS:["Jan", "Feb", "Mas", "Eph", "Mey", "Jun", "Jul", "Aga", "Sep", "Okt", "Nov", "Dis"], WEEKDAYS:["ISonto", "UMsombuluko", "ULwesibili", "ULwesithathu", "ULwesine", "ULwesihlanu", "UMgqibelo"], STANDALONEWEEKDAYS:["ISonto", "UMsombuluko", "ULwesibili", "ULwesithathu", "ULwesine", "ULwesihlanu", "UMgqibelo"], SHORTWEEKDAYS:["Son", "Mso", "Bil", "Tha", "Sin", "Hla", "Mgq"], 
STANDALONESHORTWEEKDAYS:["Son", "Mso", "Bil", "Tha", "Sin", "Hla", "Mgq"], NARROWWEEKDAYS:["S", "M", "B", "T", "S", "H", "M"], STANDALONENARROWWEEKDAYS:["S", "M", "B", "T", "S", "H", "M"], SHORTQUARTERS:["Q1", "Q2", "Q3", "Q4"], QUARTERS:["ikota yesi-1", "ikota yesi-2", "ikota yesi-3", "ikota yesi-4"], AMPMS:["AM", "PM"], DATEFORMATS:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], TIMEFORMATS:["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], DATETIMEFORMATS:["{1} {0}", "{1} {0}", "{1} {0}", 
"{1} {0}"], FIRSTDAYOFWEEK:6, WEEKENDRANGE:[5, 6], FIRSTWEEKCUTOFFDAY:5};
goog.i18n.DateTimeSymbolsType = function() {
};
goog.i18n.DateTimeSymbolsType.prototype.ERAS;
goog.i18n.DateTimeSymbolsType.prototype.ERANAMES;
goog.i18n.DateTimeSymbolsType.prototype.NARROWMONTHS;
goog.i18n.DateTimeSymbolsType.prototype.STANDALONENARROWMONTHS;
goog.i18n.DateTimeSymbolsType.prototype.MONTHS;
goog.i18n.DateTimeSymbolsType.prototype.STANDALONEMONTHS;
goog.i18n.DateTimeSymbolsType.prototype.SHORTMONTHS;
goog.i18n.DateTimeSymbolsType.prototype.STANDALONESHORTMONTHS;
goog.i18n.DateTimeSymbolsType.prototype.WEEKDAYS;
goog.i18n.DateTimeSymbolsType.prototype.SHORTWEEKDAYS;
goog.i18n.DateTimeSymbolsType.prototype.STANDALONESHORTWEEKDAYS;
goog.i18n.DateTimeSymbolsType.prototype.STANDALONEWEEKDAYS;
goog.i18n.DateTimeSymbolsType.prototype.NARROWWEEKDAYS;
goog.i18n.DateTimeSymbolsType.prototype.STANDALONENARROWWEEKDAYS;
goog.i18n.DateTimeSymbolsType.prototype.SHORTQUARTERS;
goog.i18n.DateTimeSymbolsType.prototype.QUARTERS;
goog.i18n.DateTimeSymbolsType.prototype.AMPMS;
goog.i18n.DateTimeSymbolsType.prototype.DATEFORMATS;
goog.i18n.DateTimeSymbolsType.prototype.TIMEFORMATS;
goog.i18n.DateTimeSymbolsType.prototype.DATETIMEFORMATS;
goog.i18n.DateTimeSymbolsType.prototype.ZERODIGIT;
goog.i18n.DateTimeSymbolsType.prototype.FIRSTDAYOFWEEK;
goog.i18n.DateTimeSymbolsType.prototype.WEEKENDRANGE;
goog.i18n.DateTimeSymbolsType.prototype.FIRSTWEEKCUTOFFDAY;
goog.i18n.DateTimeSymbols;
goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en;
switch(goog.LOCALE) {
  case "en_ISO":
  case "en-ISO":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_ISO;
    break;
  case "af":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_af;
    break;
  case "am":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_am;
    break;
  case "ar":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ar;
    break;
  case "ar_DZ":
  case "ar-DZ":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ar_DZ;
    break;
  case "ar_EG":
  case "ar-EG":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ar_EG;
    break;
  case "az":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_az;
    break;
  case "be":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_be;
    break;
  case "bg":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_bg;
    break;
  case "bn":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_bn;
    break;
  case "br":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_br;
    break;
  case "bs":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_bs;
    break;
  case "ca":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ca;
    break;
  case "chr":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_chr;
    break;
  case "cs":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_cs;
    break;
  case "cy":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_cy;
    break;
  case "da":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_da;
    break;
  case "de":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_de;
    break;
  case "de_AT":
  case "de-AT":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_de_AT;
    break;
  case "de_CH":
  case "de-CH":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_de_CH;
    break;
  case "el":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_el;
    break;
  case "en":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en;
    break;
  case "en_AU":
  case "en-AU":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_AU;
    break;
  case "en_CA":
  case "en-CA":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_CA;
    break;
  case "en_GB":
  case "en-GB":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_GB;
    break;
  case "en_IE":
  case "en-IE":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_IE;
    break;
  case "en_IN":
  case "en-IN":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_IN;
    break;
  case "en_SG":
  case "en-SG":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_SG;
    break;
  case "en_US":
  case "en-US":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_US;
    break;
  case "en_ZA":
  case "en-ZA":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_en_ZA;
    break;
  case "es":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_es;
    break;
  case "es_419":
  case "es-419":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_es_419;
    break;
  case "es_ES":
  case "es-ES":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_es_ES;
    break;
  case "es_MX":
  case "es-MX":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_es_MX;
    break;
  case "es_US":
  case "es-US":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_es_US;
    break;
  case "et":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_et;
    break;
  case "eu":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_eu;
    break;
  case "fa":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_fa;
    break;
  case "fi":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_fi;
    break;
  case "fil":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_fil;
    break;
  case "fr":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_fr;
    break;
  case "fr_CA":
  case "fr-CA":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_fr_CA;
    break;
  case "ga":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ga;
    break;
  case "gl":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_gl;
    break;
  case "gsw":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_gsw;
    break;
  case "gu":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_gu;
    break;
  case "haw":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_haw;
    break;
  case "he":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_he;
    break;
  case "hi":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_hi;
    break;
  case "hr":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_hr;
    break;
  case "hu":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_hu;
    break;
  case "hy":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_hy;
    break;
  case "id":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_id;
    break;
  case "in":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_in;
    break;
  case "is":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_is;
    break;
  case "it":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_it;
    break;
  case "iw":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_iw;
    break;
  case "ja":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ja;
    break;
  case "ka":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ka;
    break;
  case "kk":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_kk;
    break;
  case "km":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_km;
    break;
  case "kn":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_kn;
    break;
  case "ko":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ko;
    break;
  case "ky":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ky;
    break;
  case "ln":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ln;
    break;
  case "lo":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_lo;
    break;
  case "lt":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_lt;
    break;
  case "lv":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_lv;
    break;
  case "mk":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_mk;
    break;
  case "ml":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ml;
    break;
  case "mn":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_mn;
    break;
  case "mo":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_mo;
    break;
  case "mr":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_mr;
    break;
  case "ms":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ms;
    break;
  case "mt":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_mt;
    break;
  case "my":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_my;
    break;
  case "nb":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_nb;
    break;
  case "ne":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ne;
    break;
  case "nl":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_nl;
    break;
  case "no":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_no;
    break;
  case "no_NO":
  case "no-NO":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_no_NO;
    break;
  case "or":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_or;
    break;
  case "pa":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_pa;
    break;
  case "pl":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_pl;
    break;
  case "pt":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_pt;
    break;
  case "pt_BR":
  case "pt-BR":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_pt_BR;
    break;
  case "pt_PT":
  case "pt-PT":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_pt_PT;
    break;
  case "ro":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ro;
    break;
  case "ru":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ru;
    break;
  case "sh":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sh;
    break;
  case "si":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_si;
    break;
  case "sk":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sk;
    break;
  case "sl":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sl;
    break;
  case "sq":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sq;
    break;
  case "sr":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sr;
    break;
  case "sr_Latn":
  case "sr-Latn":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sr_Latn;
    break;
  case "sv":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sv;
    break;
  case "sw":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_sw;
    break;
  case "ta":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ta;
    break;
  case "te":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_te;
    break;
  case "th":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_th;
    break;
  case "tl":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_tl;
    break;
  case "tr":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_tr;
    break;
  case "uk":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_uk;
    break;
  case "ur":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_ur;
    break;
  case "uz":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_uz;
    break;
  case "vi":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_vi;
    break;
  case "zh":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_zh;
    break;
  case "zh_CN":
  case "zh-CN":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_zh_CN;
    break;
  case "zh_HK":
  case "zh-HK":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_zh_HK;
    break;
  case "zh_TW":
  case "zh-TW":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_zh_TW;
    break;
  case "zu":
    goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_zu;
    break;
}

$CLJS.SHADOW_ENV.setLoaded("goog.i18n.datetimesymbols.js");

goog.provide("goog.date");
goog.provide("goog.date.Date");
goog.provide("goog.date.DateLike");
goog.provide("goog.date.DateTime");
goog.provide("goog.date.Interval");
goog.provide("goog.date.month");
goog.provide("goog.date.weekDay");
goog.require("goog.asserts");
goog.require("goog.i18n.DateTimeSymbols");
goog.require("goog.string");
goog.date.weekDay = {MON:0, TUE:1, WED:2, THU:3, FRI:4, SAT:5, SUN:6};
goog.date.month = {JAN:0, FEB:1, MAR:2, APR:3, MAY:4, JUN:5, JUL:6, AUG:7, SEP:8, OCT:9, NOV:10, DEC:11};
goog.date.splitDateStringRegex_ = new RegExp("^((?:[-+]\\d*)?\\d{4})(?:(?:-?(\\d{2})(?:-?(\\d{2}))?)|" + "(?:-?(\\d{3}))|(?:-?W(\\d{2})(?:-?([1-7]))?))?$");
goog.date.splitTimeStringRegex_ = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/;
goog.date.splitTimezoneStringRegex_ = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;
goog.date.splitDurationRegex_ = new RegExp("^(-)?P(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)D)?" + "(T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$");
goog.date.MS_PER_DAY = 24 * 60 * 60 * 1000;
goog.date.MS_PER_GREGORIAN_CYCLE_ = 146097 * 24 * 60 * 60 * 1000;
goog.date.isLeapYear = function(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
};
goog.date.isLongIsoYear = function(year) {
  var n = 5 * year + 12 - 4 * (Math.floor(year / 100) - Math.floor(year / 400));
  n += Math.floor((year - 100) / 400) - Math.floor((year - 102) / 400);
  n += Math.floor((year - 200) / 400) - Math.floor((year - 199) / 400);
  return n % 28 < 5;
};
goog.date.getNumberOfDaysInMonth = function(year, month) {
  switch(month) {
    case goog.date.month.FEB:
      return goog.date.isLeapYear(year) ? 29 : 28;
    case goog.date.month.JUN:
    case goog.date.month.SEP:
    case goog.date.month.NOV:
    case goog.date.month.APR:
      return 30;
  }
  return 31;
};
goog.date.isSameDay = function(date, opt_now) {
  var now = opt_now || new Date(goog.now());
  return date.getDate() == now.getDate() && goog.date.isSameMonth(date, now);
};
goog.date.isSameMonth = function(date, opt_now) {
  var now = opt_now || new Date(goog.now());
  return date.getMonth() == now.getMonth() && goog.date.isSameYear(date, now);
};
goog.date.isSameYear = function(date, opt_now) {
  var now = opt_now || new Date(goog.now());
  return date.getFullYear() == now.getFullYear();
};
goog.date.getCutOffSameWeek_ = function(year, month, date, opt_weekDay, opt_firstDayOfWeek) {
  var d = new Date(year, month, date);
  var cutoff = opt_weekDay !== undefined ? opt_weekDay : goog.date.weekDay.THU;
  var firstday = opt_firstDayOfWeek || goog.date.weekDay.MON;
  var isoday = (d.getDay() + 6) % 7;
  var daypos = (isoday - firstday + 7) % 7;
  var cutoffpos = (cutoff - firstday + 7) % 7;
  return d.valueOf() + (cutoffpos - daypos) * goog.date.MS_PER_DAY;
};
goog.date.getWeekNumber = function(year, month, date, opt_weekDay, opt_firstDayOfWeek) {
  var cutoffSameWeek = goog.date.getCutOffSameWeek_(year, month, date, opt_weekDay, opt_firstDayOfWeek);
  var jan1 = (new Date((new Date(cutoffSameWeek)).getFullYear(), 0, 1)).valueOf();
  return Math.floor(Math.round((cutoffSameWeek - jan1) / goog.date.MS_PER_DAY) / 7) + 1;
};
goog.date.getYearOfWeek = function(year, month, date, opt_weekDay, opt_firstDayOfWeek) {
  var cutoffSameWeek = goog.date.getCutOffSameWeek_(year, month, date, opt_weekDay, opt_firstDayOfWeek);
  return (new Date(cutoffSameWeek)).getFullYear();
};
goog.date.min = function(date1, date2) {
  return date1 < date2 ? date1 : date2;
};
goog.date.max = function(date1, date2) {
  return date1 > date2 ? date1 : date2;
};
goog.date.setIso8601DateTime = function(dateTime, formatted) {
  formatted = goog.string.trim(formatted);
  var delim = formatted.indexOf("T") == -1 ? " " : "T";
  var parts = formatted.split(delim);
  return goog.date.setIso8601DateOnly_(dateTime, parts[0]) && (parts.length < 2 || goog.date.setIso8601TimeOnly_(dateTime, parts[1]));
};
goog.date.setIso8601DateOnly_ = function(d, formatted) {
  var parts = formatted.match(goog.date.splitDateStringRegex_);
  if (!parts) {
    return false;
  }
  var year = Number(parts[1]);
  var month = Number(parts[2]);
  var date = Number(parts[3]);
  var dayOfYear = Number(parts[4]);
  var week = Number(parts[5]);
  var dayOfWeek = Number(parts[6]) || 1;
  d.setFullYear(year);
  if (dayOfYear) {
    d.setDate(1);
    d.setMonth(0);
    var offset = dayOfYear - 1;
    d.add(new goog.date.Interval(goog.date.Interval.DAYS, offset));
  } else if (week) {
    goog.date.setDateFromIso8601Week_(d, week, dayOfWeek);
  } else {
    if (month) {
      d.setDate(1);
      d.setMonth(month - 1);
    }
    if (date) {
      d.setDate(date);
    }
  }
  return true;
};
goog.date.setDateFromIso8601Week_ = function(d, week, dayOfWeek) {
  d.setMonth(0);
  d.setDate(1);
  var jsDay = d.getDay();
  var jan1WeekDay = jsDay || 7;
  var THURSDAY = 4;
  if (jan1WeekDay <= THURSDAY) {
    var startDelta = 1 - jan1WeekDay;
  } else {
    startDelta = 8 - jan1WeekDay;
  }
  var absoluteDays = Number(dayOfWeek) + 7 * (Number(week) - 1);
  var delta = startDelta + absoluteDays - 1;
  var interval = new goog.date.Interval(goog.date.Interval.DAYS, delta);
  d.add(interval);
};
goog.date.setIso8601TimeOnly_ = function(d, formatted) {
  var timezoneParts = formatted.match(goog.date.splitTimezoneStringRegex_);
  var offsetMinutes;
  var formattedTime;
  if (timezoneParts) {
    formattedTime = formatted.substring(0, formatted.length - timezoneParts[0].length);
    if (timezoneParts[0] === "Z") {
      offsetMinutes = 0;
    } else {
      offsetMinutes = Number(timezoneParts[2]) * 60 + Number(timezoneParts[3]);
      offsetMinutes *= timezoneParts[1] == "-" ? 1 : -1;
    }
  } else {
    formattedTime = formatted;
  }
  var timeParts = formattedTime.match(goog.date.splitTimeStringRegex_);
  if (!timeParts) {
    return false;
  }
  if (timezoneParts) {
    goog.asserts.assertNumber(offsetMinutes);
    var year = d.getYear();
    var month = d.getMonth();
    var day = d.getDate();
    var hour = Number(timeParts[1]);
    var minute = Number(timeParts[2]) || 0;
    var second = Number(timeParts[3]) || 0;
    var millisecond = timeParts[4] ? Number(timeParts[4]) * 1000 : 0;
    const twoDigitYear = year >= 0 && year < 100;
    if (twoDigitYear) {
      year += 400;
    }
    let utc = Date.UTC(year, month, day, hour, minute, second, millisecond);
    if (twoDigitYear) {
      utc -= goog.date.MS_PER_GREGORIAN_CYCLE_;
    }
    d.setTime(utc + offsetMinutes * 60000);
  } else {
    d.setHours(Number(timeParts[1]));
    d.setMinutes(Number(timeParts[2]) || 0);
    d.setSeconds(Number(timeParts[3]) || 0);
    d.setMilliseconds(timeParts[4] ? Number(timeParts[4]) * 1000 : 0);
  }
  return true;
};
goog.date.padYear_ = function(year) {
  const sign = year < 0 ? "-" : year >= 10000 ? "+" : "";
  return sign + goog.string.padNumber(Math.abs(year), sign ? 6 : 4);
};
goog.date.Interval = function(opt_years, opt_months, opt_days, opt_hours, opt_minutes, opt_seconds) {
  if (typeof opt_years === "string") {
    var type = opt_years;
    var interval = opt_months;
    this.years = type == goog.date.Interval.YEARS ? interval : 0;
    this.months = type == goog.date.Interval.MONTHS ? interval : 0;
    this.days = type == goog.date.Interval.DAYS ? interval : 0;
    this.hours = type == goog.date.Interval.HOURS ? interval : 0;
    this.minutes = type == goog.date.Interval.MINUTES ? interval : 0;
    this.seconds = type == goog.date.Interval.SECONDS ? interval : 0;
  } else {
    this.years = opt_years || 0;
    this.months = opt_months || 0;
    this.days = opt_days || 0;
    this.hours = opt_hours || 0;
    this.minutes = opt_minutes || 0;
    this.seconds = opt_seconds || 0;
  }
};
goog.date.Interval.fromIsoString = function(duration) {
  var parts = duration.match(goog.date.splitDurationRegex_);
  if (!parts) {
    return null;
  }
  var timeEmpty = !(parts[6] || parts[7] || parts[8]);
  var dateTimeEmpty = timeEmpty && !(parts[2] || parts[3] || parts[4]);
  if (dateTimeEmpty || timeEmpty && parts[5]) {
    return null;
  }
  var negative = parts[1];
  var years = parseInt(parts[2], 10) || 0;
  var months = parseInt(parts[3], 10) || 0;
  var days = parseInt(parts[4], 10) || 0;
  var hours = parseInt(parts[6], 10) || 0;
  var minutes = parseInt(parts[7], 10) || 0;
  var seconds = parseFloat(parts[8]) || 0;
  return negative ? new goog.date.Interval(-years, -months, -days, -hours, -minutes, -seconds) : new goog.date.Interval(years, months, days, hours, minutes, seconds);
};
goog.date.Interval.prototype.toIsoString = function(opt_verbose) {
  var minField = Math.min(this.years, this.months, this.days, this.hours, this.minutes, this.seconds);
  var maxField = Math.max(this.years, this.months, this.days, this.hours, this.minutes, this.seconds);
  if (minField < 0 && maxField > 0) {
    return null;
  }
  if (!opt_verbose && minField == 0 && maxField == 0) {
    return "PT0S";
  }
  var res = [];
  if (minField < 0) {
    res.push("-");
  }
  res.push("P");
  if (this.years || opt_verbose) {
    res.push(Math.abs(this.years) + "Y");
  }
  if (this.months || opt_verbose) {
    res.push(Math.abs(this.months) + "M");
  }
  if (this.days || opt_verbose) {
    res.push(Math.abs(this.days) + "D");
  }
  if (this.hours || this.minutes || this.seconds || opt_verbose) {
    res.push("T");
    if (this.hours || opt_verbose) {
      res.push(Math.abs(this.hours) + "H");
    }
    if (this.minutes || opt_verbose) {
      res.push(Math.abs(this.minutes) + "M");
    }
    if (this.seconds || opt_verbose) {
      res.push(Math.abs(this.seconds) + "S");
    }
  }
  return res.join("");
};
goog.date.Interval.prototype.equals = function(other) {
  return other.years == this.years && other.months == this.months && other.days == this.days && other.hours == this.hours && other.minutes == this.minutes && other.seconds == this.seconds;
};
goog.date.Interval.prototype.clone = function() {
  return new goog.date.Interval(this.years, this.months, this.days, this.hours, this.minutes, this.seconds);
};
goog.date.Interval.YEARS = "y";
goog.date.Interval.MONTHS = "m";
goog.date.Interval.DAYS = "d";
goog.date.Interval.HOURS = "h";
goog.date.Interval.MINUTES = "n";
goog.date.Interval.SECONDS = "s";
goog.date.Interval.prototype.isZero = function() {
  return this.years == 0 && this.months == 0 && this.days == 0 && this.hours == 0 && this.minutes == 0 && this.seconds == 0;
};
goog.date.Interval.prototype.getInverse = function() {
  return this.times(-1);
};
goog.date.Interval.prototype.times = function(n) {
  return new goog.date.Interval(this.years * n, this.months * n, this.days * n, this.hours * n, this.minutes * n, this.seconds * n);
};
goog.date.Interval.prototype.getTotalSeconds = function() {
  goog.asserts.assert(this.years == 0 && this.months == 0);
  return ((this.days * 24 + this.hours) * 60 + this.minutes) * 60 + this.seconds;
};
goog.date.Interval.prototype.add = function(interval) {
  this.years += interval.years;
  this.months += interval.months;
  this.days += interval.days;
  this.hours += interval.hours;
  this.minutes += interval.minutes;
  this.seconds += interval.seconds;
};
goog.date.DateLike;
goog.date.Date = function(opt_year, opt_month, opt_date) {
  this.date;
  if (typeof opt_year === "number") {
    this.date = this.buildDate_(opt_year, opt_month || 0, opt_date || 1);
    this.maybeFixDst_(opt_date || 1);
  } else if (goog.isObject(opt_year)) {
    this.date = this.buildDate_(opt_year.getFullYear(), opt_year.getMonth(), opt_year.getDate());
    this.maybeFixDst_(opt_year.getDate());
  } else {
    this.date = new Date(goog.now());
    var expectedDate = this.date.getDate();
    this.date.setHours(0);
    this.date.setMinutes(0);
    this.date.setSeconds(0);
    this.date.setMilliseconds(0);
    this.maybeFixDst_(expectedDate);
  }
};
goog.date.Date.prototype.buildDate_ = function(fullYear, month, date) {
  var d = new Date(fullYear, month, date);
  if (fullYear >= 0 && fullYear < 100) {
    d.setFullYear(d.getFullYear() - 1900);
  }
  return d;
};
goog.date.Date.prototype.firstDayOfWeek_ = goog.i18n.DateTimeSymbols.FIRSTDAYOFWEEK;
goog.date.Date.prototype.firstWeekCutOffDay_ = goog.i18n.DateTimeSymbols.FIRSTWEEKCUTOFFDAY;
goog.date.Date.prototype.clone = function() {
  var date = new goog.date.Date(this.date);
  date.firstDayOfWeek_ = this.firstDayOfWeek_;
  date.firstWeekCutOffDay_ = this.firstWeekCutOffDay_;
  return date;
};
goog.date.Date.prototype.getFullYear = function() {
  return this.date.getFullYear();
};
goog.date.Date.prototype.getYear = function() {
  return this.getFullYear();
};
goog.date.Date.prototype.getMonth = function() {
  return this.date.getMonth();
};
goog.date.Date.prototype.getDate = function() {
  return this.date.getDate();
};
goog.date.Date.prototype.getTime = function() {
  return this.date.getTime();
};
goog.date.Date.prototype.getDay = function() {
  return this.date.getDay();
};
goog.date.Date.prototype.getIsoWeekday = function() {
  return (this.getDay() + 6) % 7;
};
goog.date.Date.prototype.getWeekday = function() {
  return (this.getIsoWeekday() - this.firstDayOfWeek_ + 7) % 7;
};
goog.date.Date.prototype.getUTCFullYear = function() {
  return this.date.getUTCFullYear();
};
goog.date.Date.prototype.getUTCMonth = function() {
  return this.date.getUTCMonth();
};
goog.date.Date.prototype.getUTCDate = function() {
  return this.date.getUTCDate();
};
goog.date.Date.prototype.getUTCDay = function() {
  return this.date.getDay();
};
goog.date.Date.prototype.getUTCHours = function() {
  return this.date.getUTCHours();
};
goog.date.Date.prototype.getUTCMinutes = function() {
  return this.date.getUTCMinutes();
};
goog.date.Date.prototype.getUTCIsoWeekday = function() {
  return (this.date.getUTCDay() + 6) % 7;
};
goog.date.Date.prototype.getUTCWeekday = function() {
  return (this.getUTCIsoWeekday() - this.firstDayOfWeek_ + 7) % 7;
};
goog.date.Date.prototype.getFirstDayOfWeek = function() {
  return this.firstDayOfWeek_;
};
goog.date.Date.prototype.getFirstWeekCutOffDay = function() {
  return this.firstWeekCutOffDay_;
};
goog.date.Date.prototype.getNumberOfDaysInMonth = function() {
  return goog.date.getNumberOfDaysInMonth(this.getFullYear(), this.getMonth());
};
goog.date.Date.prototype.getWeekNumber = function() {
  return goog.date.getWeekNumber(this.getFullYear(), this.getMonth(), this.getDate(), this.firstWeekCutOffDay_, this.firstDayOfWeek_);
};
goog.date.Date.prototype.getYearOfWeek = function() {
  return goog.date.getYearOfWeek(this.getFullYear(), this.getMonth(), this.getDate(), this.firstWeekCutOffDay_, this.firstDayOfWeek_);
};
goog.date.Date.prototype.getDayOfYear = function() {
  var dayOfYear = this.getDate();
  var year = this.getFullYear();
  for (var m = this.getMonth() - 1; m >= 0; m--) {
    dayOfYear += goog.date.getNumberOfDaysInMonth(year, m);
  }
  return dayOfYear;
};
goog.date.Date.prototype.getTimezoneOffset = function() {
  return this.date.getTimezoneOffset();
};
goog.date.Date.prototype.getTimezoneOffsetString = function() {
  var tz;
  var offset = this.getTimezoneOffset();
  if (offset == 0) {
    tz = "Z";
  } else {
    var n = Math.abs(offset) / 60;
    var h = Math.floor(n);
    var m = (n - h) * 60;
    tz = (offset > 0 ? "-" : "+") + goog.string.padNumber(h, 2) + ":" + goog.string.padNumber(m, 2);
  }
  return tz;
};
goog.date.Date.prototype.set = function(date) {
  this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
};
goog.date.Date.prototype.setFullYear = function(year) {
  this.date.setFullYear(year);
};
goog.date.Date.prototype.setYear = function(year) {
  this.setFullYear(year);
};
goog.date.Date.prototype.setMonth = function(month) {
  this.date.setMonth(month);
};
goog.date.Date.prototype.setDate = function(date) {
  this.date.setDate(date);
};
goog.date.Date.prototype.setTime = function(ms) {
  this.date.setTime(ms);
};
goog.date.Date.prototype.setUTCFullYear = function(year) {
  this.date.setUTCFullYear(year);
};
goog.date.Date.prototype.setUTCMonth = function(month) {
  this.date.setUTCMonth(month);
};
goog.date.Date.prototype.setUTCDate = function(date) {
  this.date.setUTCDate(date);
};
goog.date.Date.prototype.setFirstDayOfWeek = function(day) {
  this.firstDayOfWeek_ = day;
};
goog.date.Date.prototype.setFirstWeekCutOffDay = function(day) {
  this.firstWeekCutOffDay_ = day;
};
goog.date.Date.prototype.add = function(interval) {
  if (interval.years || interval.months) {
    var month = this.getMonth() + interval.months + interval.years * 12;
    var year = this.getYear() + Math.floor(month / 12);
    month %= 12;
    if (month < 0) {
      month += 12;
    }
    var daysInTargetMonth = goog.date.getNumberOfDaysInMonth(year, month);
    var date = Math.min(daysInTargetMonth, this.getDate());
    this.setDate(1);
    this.setFullYear(year);
    this.setMonth(month);
    this.setDate(date);
  }
  if (interval.days) {
    const initialYear = this.getYear();
    const yearAdjustment = initialYear >= 0 && initialYear <= 99 ? -1900 : 0;
    const noon = new Date(initialYear, this.getMonth(), this.getDate(), 12);
    const result = new Date(noon.getTime() + interval.days * 86400000);
    this.setDate(1);
    this.setFullYear(result.getFullYear() + yearAdjustment);
    this.setMonth(result.getMonth());
    this.setDate(result.getDate());
    this.maybeFixDst_(result.getDate());
  }
};
goog.date.Date.prototype.toIsoString = function(opt_verbose, opt_tz) {
  var str = [goog.date.padYear_(this.getFullYear()), goog.string.padNumber(this.getMonth() + 1, 2), goog.string.padNumber(this.getDate(), 2)];
  return str.join(opt_verbose ? "-" : "") + (opt_tz ? this.getTimezoneOffsetString() : "");
};
goog.date.Date.prototype.toUTCIsoString = function(opt_verbose, opt_tz) {
  var str = [goog.date.padYear_(this.getUTCFullYear()), goog.string.padNumber(this.getUTCMonth() + 1, 2), goog.string.padNumber(this.getUTCDate(), 2)];
  return str.join(opt_verbose ? "-" : "") + (opt_tz ? "Z" : "");
};
goog.date.Date.prototype.equals = function(other) {
  return !!(other && this.getYear() == other.getYear() && this.getMonth() == other.getMonth() && this.getDate() == other.getDate());
};
goog.date.Date.prototype.toString = function() {
  return this.toIsoString();
};
goog.date.Date.prototype.maybeFixDst_ = function(expected) {
  if (this.getDate() != expected) {
    var dir = this.getDate() < expected ? 1 : -1;
    this.date.setUTCHours(this.date.getUTCHours() + dir);
  }
};
goog.date.Date.prototype.valueOf = function() {
  return this.date.valueOf();
};
goog.date.Date.compare = function(date1, date2) {
  return date1.getTime() - date2.getTime();
};
goog.date.Date.fromIsoString = function(formatted) {
  var ret = new goog.date.Date(2000);
  return goog.date.setIso8601DateOnly_(ret, formatted) ? ret : null;
};
goog.date.DateTime = function(opt_year, opt_month, opt_date, opt_hours, opt_minutes, opt_seconds, opt_milliseconds) {
  if (typeof opt_year === "number") {
    this.date = new Date(opt_year, opt_month || 0, opt_date || 1, opt_hours || 0, opt_minutes || 0, opt_seconds || 0, opt_milliseconds || 0);
  } else {
    this.date = new Date(opt_year && opt_year.getTime ? opt_year.getTime() : goog.now());
  }
};
goog.inherits(goog.date.DateTime, goog.date.Date);
goog.date.DateTime.fromTimestamp = function(timestamp) {
  var date = new goog.date.DateTime();
  date.setTime(timestamp);
  return date;
};
goog.date.DateTime.fromRfc822String = function(formatted) {
  var date = new Date(formatted);
  return !isNaN(date.getTime()) ? new goog.date.DateTime(date) : null;
};
goog.date.DateTime.prototype.getHours = function() {
  return this.date.getHours();
};
goog.date.DateTime.prototype.getMinutes = function() {
  return this.date.getMinutes();
};
goog.date.DateTime.prototype.getSeconds = function() {
  return this.date.getSeconds();
};
goog.date.DateTime.prototype.getMilliseconds = function() {
  return this.date.getMilliseconds();
};
goog.date.DateTime.prototype.getUTCDay = function() {
  return this.date.getUTCDay();
};
goog.date.DateTime.prototype.getUTCHours = function() {
  return this.date.getUTCHours();
};
goog.date.DateTime.prototype.getUTCMinutes = function() {
  return this.date.getUTCMinutes();
};
goog.date.DateTime.prototype.getUTCSeconds = function() {
  return this.date.getUTCSeconds();
};
goog.date.DateTime.prototype.getUTCMilliseconds = function() {
  return this.date.getUTCMilliseconds();
};
goog.date.DateTime.prototype.setHours = function(hours) {
  this.date.setHours(hours);
};
goog.date.DateTime.prototype.setMinutes = function(minutes) {
  this.date.setMinutes(minutes);
};
goog.date.DateTime.prototype.setSeconds = function(seconds) {
  this.date.setSeconds(seconds);
};
goog.date.DateTime.prototype.setMilliseconds = function(ms) {
  this.date.setMilliseconds(ms);
};
goog.date.DateTime.prototype.setUTCHours = function(hours) {
  this.date.setUTCHours(hours);
};
goog.date.DateTime.prototype.setUTCMinutes = function(minutes) {
  this.date.setUTCMinutes(minutes);
};
goog.date.DateTime.prototype.setUTCSeconds = function(seconds) {
  this.date.setUTCSeconds(seconds);
};
goog.date.DateTime.prototype.setUTCMilliseconds = function(ms) {
  this.date.setUTCMilliseconds(ms);
};
goog.date.DateTime.prototype.isMidnight = function() {
  return this.getHours() == 0 && this.getMinutes() == 0 && this.getSeconds() == 0 && this.getMilliseconds() == 0;
};
goog.date.DateTime.prototype.add = function(interval) {
  goog.date.Date.prototype.add.call(this, interval);
  if (interval.hours) {
    this.setUTCHours(this.date.getUTCHours() + interval.hours);
  }
  if (interval.minutes) {
    this.setUTCMinutes(this.date.getUTCMinutes() + interval.minutes);
  }
  if (interval.seconds) {
    this.setUTCSeconds(this.date.getUTCSeconds() + interval.seconds);
  }
};
goog.date.DateTime.prototype.toIsoString = function(opt_verbose, opt_tz) {
  var dateString = goog.date.Date.prototype.toIsoString.call(this, opt_verbose);
  if (opt_verbose) {
    return dateString + "T" + goog.string.padNumber(this.getHours(), 2) + ":" + goog.string.padNumber(this.getMinutes(), 2) + ":" + goog.string.padNumber(this.getSeconds(), 2) + (opt_tz ? this.getTimezoneOffsetString() : "");
  }
  return dateString + "T" + goog.string.padNumber(this.getHours(), 2) + goog.string.padNumber(this.getMinutes(), 2) + goog.string.padNumber(this.getSeconds(), 2) + (opt_tz ? this.getTimezoneOffsetString() : "");
};
goog.date.DateTime.prototype.toXmlDateTime = function(opt_timezone) {
  return goog.date.Date.prototype.toIsoString.call(this, true) + "T" + goog.string.padNumber(this.getHours(), 2) + ":" + goog.string.padNumber(this.getMinutes(), 2) + ":" + goog.string.padNumber(this.getSeconds(), 2) + (opt_timezone ? this.getTimezoneOffsetString() : "");
};
goog.date.DateTime.prototype.toUTCIsoString = function(opt_verbose, opt_tz) {
  var dateStr = goog.date.Date.prototype.toUTCIsoString.call(this, opt_verbose);
  if (opt_verbose) {
    return dateStr + "T" + goog.string.padNumber(this.getUTCHours(), 2) + ":" + goog.string.padNumber(this.getUTCMinutes(), 2) + ":" + goog.string.padNumber(this.getUTCSeconds(), 2) + (opt_tz ? "Z" : "");
  }
  return dateStr + "T" + goog.string.padNumber(this.getUTCHours(), 2) + goog.string.padNumber(this.getUTCMinutes(), 2) + goog.string.padNumber(this.getUTCSeconds(), 2) + (opt_tz ? "Z" : "");
};
goog.date.DateTime.prototype.toUTCRfc3339String = function() {
  var date = this.toUTCIsoString(true);
  var millis = this.getUTCMilliseconds();
  return (millis ? date + "." + goog.string.padNumber(millis, 3) : date) + "Z";
};
goog.date.DateTime.prototype.equals = function(other) {
  return this.getTime() == other.getTime();
};
goog.date.DateTime.prototype.toString = function() {
  return this.toIsoString();
};
goog.date.DateTime.prototype.toUsTimeString = function(opt_padHours, opt_showAmPm, opt_omitZeroMinutes) {
  var hours = this.getHours();
  if (opt_showAmPm === undefined) {
    opt_showAmPm = true;
  }
  var isPM = hours == 12;
  if (hours > 12) {
    hours -= 12;
    isPM = true;
  }
  if (hours == 0 && opt_showAmPm) {
    hours = 12;
  }
  var label = opt_padHours ? goog.string.padNumber(hours, 2) : String(hours);
  var minutes = this.getMinutes();
  if (!opt_omitZeroMinutes || minutes > 0) {
    label += ":" + goog.string.padNumber(minutes, 2);
  }
  if (opt_showAmPm) {
    label += isPM ? " PM" : " AM";
  }
  return label;
};
goog.date.DateTime.prototype.toIsoTimeString = function(opt_showSeconds) {
  var hours = this.getHours();
  var label = goog.string.padNumber(hours, 2) + ":" + goog.string.padNumber(this.getMinutes(), 2);
  if (opt_showSeconds === undefined || opt_showSeconds) {
    label += ":" + goog.string.padNumber(this.getSeconds(), 2);
  }
  return label;
};
goog.date.DateTime.prototype.clone = function() {
  var date = new goog.date.DateTime(this.date);
  date.setFirstDayOfWeek(this.getFirstDayOfWeek());
  date.setFirstWeekCutOffDay(this.getFirstWeekCutOffDay());
  return date;
};
goog.date.DateTime.fromIsoString = function(formatted) {
  var ret = new goog.date.DateTime(2000);
  return goog.date.setIso8601DateTime(ret, formatted) ? ret : null;
};

$CLJS.SHADOW_ENV.setLoaded("goog.date.date.js");

goog.provide("goog.date.UtcDateTime");
goog.require("goog.date");
goog.require("goog.date.Date");
goog.require("goog.date.DateTime");
goog.require("goog.date.Interval");
goog.date.UtcDateTime = function(opt_year, opt_month, opt_date, opt_hours, opt_minutes, opt_seconds, opt_milliseconds) {
  var timestamp;
  if (typeof opt_year === "number") {
    timestamp = Date.UTC(opt_year, opt_month || 0, opt_date || 1, opt_hours || 0, opt_minutes || 0, opt_seconds || 0, opt_milliseconds || 0);
  } else {
    timestamp = opt_year ? opt_year.getTime() : goog.now();
  }
  this.date = new Date(timestamp);
};
goog.inherits(goog.date.UtcDateTime, goog.date.DateTime);
goog.date.UtcDateTime.fromTimestamp = function(timestamp) {
  var date = new goog.date.UtcDateTime();
  date.setTime(timestamp);
  return date;
};
goog.date.UtcDateTime.fromIsoString = function(formatted) {
  var ret = new goog.date.UtcDateTime(2000);
  return goog.date.setIso8601DateTime(ret, formatted) ? ret : null;
};
goog.date.UtcDateTime.prototype.clone = function() {
  var date = new goog.date.UtcDateTime(this.date);
  date.setFirstDayOfWeek(this.getFirstDayOfWeek());
  date.setFirstWeekCutOffDay(this.getFirstWeekCutOffDay());
  return date;
};
goog.date.UtcDateTime.prototype.add = function(interval) {
  if (interval.years || interval.months) {
    var yearsMonths = new goog.date.Interval(interval.years, interval.months);
    goog.date.Date.prototype.add.call(this, yearsMonths);
  }
  var daysAndTimeMillis = 1000 * (interval.seconds + 60 * (interval.minutes + 60 * (interval.hours + 24 * interval.days)));
  this.date = new Date(this.date.getTime() + daysAndTimeMillis);
};
goog.date.UtcDateTime.prototype.getTimezoneOffset = function() {
  return 0;
};
goog.date.UtcDateTime.prototype.getFullYear = goog.date.DateTime.prototype.getUTCFullYear;
goog.date.UtcDateTime.prototype.getMonth = goog.date.DateTime.prototype.getUTCMonth;
goog.date.UtcDateTime.prototype.getDate = goog.date.DateTime.prototype.getUTCDate;
goog.date.UtcDateTime.prototype.getHours = goog.date.DateTime.prototype.getUTCHours;
goog.date.UtcDateTime.prototype.getMinutes = goog.date.DateTime.prototype.getUTCMinutes;
goog.date.UtcDateTime.prototype.getSeconds = goog.date.DateTime.prototype.getUTCSeconds;
goog.date.UtcDateTime.prototype.getMilliseconds = goog.date.DateTime.prototype.getUTCMilliseconds;
goog.date.UtcDateTime.prototype.getDay = goog.date.DateTime.prototype.getUTCDay;
goog.date.UtcDateTime.prototype.setFullYear = goog.date.DateTime.prototype.setUTCFullYear;
goog.date.UtcDateTime.prototype.setMonth = goog.date.DateTime.prototype.setUTCMonth;
goog.date.UtcDateTime.prototype.setDate = goog.date.DateTime.prototype.setUTCDate;
goog.date.UtcDateTime.prototype.setHours = goog.date.DateTime.prototype.setUTCHours;
goog.date.UtcDateTime.prototype.setMinutes = goog.date.DateTime.prototype.setUTCMinutes;
goog.date.UtcDateTime.prototype.setSeconds = goog.date.DateTime.prototype.setUTCSeconds;
goog.date.UtcDateTime.prototype.setMilliseconds = goog.date.DateTime.prototype.setUTCMilliseconds;

$CLJS.SHADOW_ENV.setLoaded("goog.date.utcdatetime.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.async.throwException");
  goog.module.declareLegacyNamespace();
  function throwException(exception) {
    goog.global.setTimeout(() => {
      throw exception;
    }, 0);
  }
  exports = throwException;
  return exports;
});

$CLJS.SHADOW_ENV.setLoaded("goog.async.throwexception.js");

goog.provide("goog.crypt");
goog.require("goog.asserts");
goog.require("goog.async.throwException");
goog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE = goog.define("goog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE", goog.DEBUG);
goog.crypt.TEST_ONLY = {};
goog.crypt.TEST_ONLY.throwException = goog.async.throwException;
goog.crypt.TEST_ONLY.alwaysThrowSynchronously = goog.DEBUG;
goog.crypt.binaryStringToByteArray = function(str) {
  return goog.crypt.stringToByteArray(str, true);
};
goog.crypt.stringToByteArray = function(str, throwSync) {
  var output = [], p = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c > 255) {
      var err = new Error("go/unicode-to-byte-error");
      if (goog.crypt.TEST_ONLY.alwaysThrowSynchronously || throwSync) {
        throw err;
      } else if (goog.crypt.ASYNC_THROW_ON_UNICODE_TO_BYTE) {
        goog.crypt.TEST_ONLY.throwException(err);
      }
      output[p++] = c & 255;
      c >>= 8;
    }
    output[p++] = c;
  }
  return output;
};
goog.crypt.byteArrayToString = function(bytes) {
  return goog.crypt.byteArrayToBinaryString(bytes);
};
goog.crypt.byteArrayToBinaryString = function(bytes) {
  var CHUNK_SIZE = 8192;
  if (bytes.length <= CHUNK_SIZE) {
    return String.fromCharCode.apply(null, bytes);
  }
  var str = "";
  for (var i = 0; i < bytes.length; i += CHUNK_SIZE) {
    var chunk = Array.prototype.slice.call(bytes, i, i + CHUNK_SIZE);
    str += String.fromCharCode.apply(null, chunk);
  }
  return str;
};
goog.crypt.byteArrayToHex = function(array, opt_separator) {
  return Array.prototype.map.call(array, function(numByte) {
    var hexByte = numByte.toString(16);
    return hexByte.length > 1 ? hexByte : "0" + hexByte;
  }).join(opt_separator || "");
};
goog.crypt.hexToByteArray = function(hexString) {
  goog.asserts.assert(hexString.length % 2 == 0, "Key string length must be multiple of 2");
  var arr = [];
  for (var i = 0; i < hexString.length; i += 2) {
    arr.push(parseInt(hexString.substring(i, i + 2), 16));
  }
  return arr;
};
goog.crypt.stringToUtf8ByteArray = function(str) {
  return goog.crypt.textToByteArray(str);
};
goog.crypt.textToByteArray = function(str) {
  var out = [], p = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 64512) == 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) == 56320) {
      c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }
  return out;
};
goog.crypt.utf8ByteArrayToString = function(bytes) {
  return goog.crypt.byteArrayToText(bytes);
};
goog.crypt.byteArrayToText = function(bytes) {
  var out = [], pos = 0, c = 0;
  while (pos < bytes.length) {
    var c1 = bytes[pos++];
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      var c4 = bytes[pos++];
      var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
      out[c++] = String.fromCharCode(55296 + (u >> 10));
      out[c++] = String.fromCharCode(56320 + (u & 1023));
    } else {
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }
  return out.join("");
};
goog.crypt.xorByteArray = function(bytes1, bytes2) {
  goog.asserts.assert(bytes1.length == bytes2.length, "XOR array lengths must match");
  var result = [];
  for (var i = 0; i < bytes1.length; i++) {
    result.push(bytes1[i] ^ bytes2[i]);
  }
  return result;
};

$CLJS.SHADOW_ENV.setLoaded("goog.crypt.crypt.js");

goog.provide("goog.crypt.base64");
goog.require("goog.asserts");
goog.require("goog.crypt");
goog.require("goog.string.internal");
goog.require("goog.userAgent");
goog.require("goog.userAgent.product");
goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789";
goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/\x3d";
goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
goog.crypt.base64.Alphabet = {DEFAULT:0, NO_PADDING:1, WEBSAFE:2, WEBSAFE_DOT_PADDING:3, WEBSAFE_NO_PADDING:4,};
goog.crypt.base64.paddingChars_ = "\x3d.";
goog.crypt.base64.isPadding_ = function(char) {
  return goog.string.internal.contains(goog.crypt.base64.paddingChars_, char);
};
goog.crypt.base64.byteToCharMaps_ = {};
goog.crypt.base64.charToByteMap_ = null;
goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT;
goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || typeof goog.global.btoa == "function";
goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && typeof goog.global.atob == "function";
goog.crypt.base64.encodeByteArray = function(input, alphabet) {
  goog.asserts.assert(goog.isArrayLike(input), "encodeByteArray takes an array as a parameter");
  if (alphabet === undefined) {
    alphabet = goog.crypt.base64.Alphabet.DEFAULT;
  }
  goog.crypt.base64.init_();
  const byteToCharMap = goog.crypt.base64.byteToCharMaps_[alphabet];
  const output = new Array(Math.floor(input.length / 3));
  const paddingChar = byteToCharMap[64] || "";
  let inputIdx = 0;
  let outputIdx = 0;
  for (; inputIdx < input.length - 2; inputIdx += 3) {
    const byte1 = input[inputIdx];
    const byte2 = input[inputIdx + 1];
    const byte3 = input[inputIdx + 2];
    const outChar1 = byteToCharMap[byte1 >> 2];
    const outChar2 = byteToCharMap[(byte1 & 3) << 4 | byte2 >> 4];
    const outChar3 = byteToCharMap[(byte2 & 15) << 2 | byte3 >> 6];
    const outChar4 = byteToCharMap[byte3 & 63];
    output[outputIdx++] = "" + outChar1 + outChar2 + outChar3 + outChar4;
  }
  let byte2 = 0;
  let outChar3 = paddingChar;
  switch(input.length - inputIdx) {
    case 2:
      byte2 = input[inputIdx + 1];
      outChar3 = byteToCharMap[(byte2 & 15) << 2] || paddingChar;
    case 1:
      const byte1 = input[inputIdx];
      const outChar1 = byteToCharMap[byte1 >> 2];
      const outChar2 = byteToCharMap[(byte1 & 3) << 4 | byte2 >> 4];
      output[outputIdx] = "" + outChar1 + outChar2 + outChar3 + paddingChar;
    default:
  }
  return output.join("");
};
goog.crypt.base64.encodeBinaryString = function(input, alphabet) {
  return goog.crypt.base64.encodeString(input, alphabet, true);
};
goog.crypt.base64.encodeString = function(input, alphabet, throwSync) {
  if (goog.crypt.base64.HAS_NATIVE_ENCODE_ && !alphabet) {
    return goog.global.btoa(input);
  }
  return goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(input, throwSync), alphabet);
};
goog.crypt.base64.encodeStringUtf8 = function(input, alphabet) {
  return goog.crypt.base64.encodeText(input, alphabet);
};
goog.crypt.base64.encodeText = function(input, alphabet) {
  if (goog.crypt.base64.HAS_NATIVE_ENCODE_ && !alphabet) {
    return goog.global.btoa(unescape(encodeURIComponent(input)));
  }
  return goog.crypt.base64.encodeByteArray(goog.crypt.stringToUtf8ByteArray(input), alphabet);
};
goog.crypt.base64.decodeToBinaryString = function(input, useCustomDecoder) {
  if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !useCustomDecoder) {
    return goog.global.atob(input);
  }
  var output = "";
  function pushByte(b) {
    output += String.fromCharCode(b);
  }
  goog.crypt.base64.decodeStringInternal_(input, pushByte);
  return output;
};
goog.crypt.base64.decodeString = goog.crypt.base64.decodeToBinaryString;
goog.crypt.base64.decodeStringUtf8 = function(input, useCustomDecoder) {
  return goog.crypt.base64.decodeToText(input, useCustomDecoder);
};
goog.crypt.base64.decodeToText = function(input, useCustomDecoder) {
  return decodeURIComponent(escape(goog.crypt.base64.decodeString(input, useCustomDecoder)));
};
goog.crypt.base64.decodeStringToByteArray = function(input, opt_ignored) {
  var output = [];
  function pushByte(b) {
    output.push(b);
  }
  goog.crypt.base64.decodeStringInternal_(input, pushByte);
  return output;
};
goog.crypt.base64.decodeStringToUint8Array = function(input) {
  var len = input.length;
  var approxByteLength = len * 3 / 4;
  if (approxByteLength % 3) {
    approxByteLength = Math.floor(approxByteLength);
  } else if (goog.crypt.base64.isPadding_(input[len - 1])) {
    if (goog.crypt.base64.isPadding_(input[len - 2])) {
      approxByteLength -= 2;
    } else {
      approxByteLength -= 1;
    }
  }
  var output = new Uint8Array(approxByteLength);
  var outLen = 0;
  function pushByte(b) {
    output[outLen++] = b;
  }
  goog.crypt.base64.decodeStringInternal_(input, pushByte);
  return outLen !== approxByteLength ? output.subarray(0, outLen) : output;
};
goog.crypt.base64.decodeStringInternal_ = function(input, pushByte) {
  goog.crypt.base64.init_();
  var nextCharIndex = 0;
  function getByte(default_val) {
    while (nextCharIndex < input.length) {
      var ch = input.charAt(nextCharIndex++);
      var b = goog.crypt.base64.charToByteMap_[ch];
      if (b != null) {
        return b;
      }
      if (!goog.string.internal.isEmptyOrWhitespace(ch)) {
        throw new Error("Unknown base64 encoding at char: " + ch);
      }
    }
    return default_val;
  }
  while (true) {
    var byte1 = getByte(-1);
    var byte2 = getByte(0);
    var byte3 = getByte(64);
    var byte4 = getByte(64);
    if (byte4 === 64) {
      if (byte1 === -1) {
        return;
      }
    }
    var outByte1 = byte1 << 2 | byte2 >> 4;
    pushByte(outByte1);
    if (byte3 != 64) {
      var outByte2 = byte2 << 4 & 240 | byte3 >> 2;
      pushByte(outByte2);
      if (byte4 != 64) {
        var outByte3 = byte3 << 6 & 192 | byte4;
        pushByte(outByte3);
      }
    }
  }
};
goog.crypt.base64.init_ = function() {
  if (goog.crypt.base64.charToByteMap_) {
    return;
  }
  goog.crypt.base64.charToByteMap_ = {};
  var commonChars = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split("");
  var specialChars = ["+/\x3d", "+/", "-_\x3d", "-_.", "-_",];
  for (var i = 0; i < 5; i++) {
    var chars = commonChars.concat(specialChars[i].split(""));
    goog.crypt.base64.byteToCharMaps_[i] = chars;
    for (var j = 0; j < chars.length; j++) {
      var char = chars[j];
      var existingByte = goog.crypt.base64.charToByteMap_[char];
      if (existingByte === undefined) {
        goog.crypt.base64.charToByteMap_[char] = j;
      } else {
        goog.asserts.assert(existingByte === j);
      }
    }
  }
};

$CLJS.SHADOW_ENV.setLoaded("goog.crypt.base64.js");
