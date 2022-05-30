// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.skin* {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n.skin*::before,\n.skin*::after {\n  box-sizing: border-box;\n}\n.skin { \n    background: #ffe600;\n    min-height: 100vh;\n  position: relative;\n}\n.nose {\n  border: 10px solid red;\n  border-color: black transparent transparent;\n  border-bottom: none;\n  width: 0px;\n  height: 0px;\n  position: relative;\n  left: 50%;\n  top: 100px;\n  margin-left: -10px;\n  z-index: 10;\n}\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(10deg);\n  }\n  66% {\n    transform: rotate(-10deg);\n\n  }\n  100% {\n    transform: rotate(0deg);\n\n  }\n}\n.nose:hover {\n    transform-origin:center bottom ;\n    animation: wave 300ms infinite linear;\n}\n.yuan {\n  position: absolute;\n  width: 20px;\n  height: 6px;\n  top: -16px;\n  left: -10px;\n  border-radius: 20px 20px 0 0;\n  background: black;\n}\n.eye {\n  border: 2px solid #000;\n  background: #2e2e2e;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 50%;\n  top: 60px;\n  margin-left: -32px;\n  border-radius: 100%;\n}\n.eye::before {\n  content: \"\";\n  display: block;\n  border: 3px solid #000;\n  width: 30px;\n  height: 30px;\n  background: white;\n  border-radius: 50%;\n  position: relative;\n  left: 8px;\n  top: 3px;\n}\n.eye.left {\n  transform: translateX(-100px);\n}\n.eye.right {\n  transform: translateX(100px);\n}\n.mouth {\n  /* border: 1px solid red; */\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  margin-left: -100px;\n  top: 130px;\n}\n.mouth .up {\n  position: relative;\n  top: -20px;\n  z-index: 1;\n}\n.mouth .up .lip {\n  border: 5px solid black;\n  width: 100px;\n  height: 30px;\n  position: relative;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n  background: #ffe600;\n}\n.mouth .up .lip.left {\n  border-radius: 0 0 0 50px;\n  transform: rotate(-25deg) translateX(-55px);\n}\n.mouth .up .lip::before {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 25px;\n  position: absolute;\n  bottom: -0.5px;\n  background: #ffe600;\n}\n.mouth .up .lip.left::before {\n  right: -6px;\n}\n.mouth .up .lip::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -8px;\n  width: 95px;\n  height: 10px;\n  background: #ffe600;\n}\n.mouth .up .lip.left::after {\n  left: 0px;\n}\n\n.mouth .up .lip.right {\n  border-radius: 0 0 50px 0px;\n  transform: rotate(25deg) translateX(55px);\n}\n.mouth .up .lip.right::before {\n  left: -6px;\n}\n.mouth .up .lip.right::after {\n  right: 0px;\n}\n.mouth .down {\n  /* border: 1px solid rgb(155, 76, 76); */\n  height: 170px;\n  width: 100%;\n  position: absolute;\n  top: 8px;\n  overflow: hidden;\n}\n.mouth .down .big-yuan {\n  border: 5px solid black;\n  width: 150px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 75px/300px;\n  background: #9b000a;\n  overflow: hidden;\n}\n.mouth .down .big-yuan .small-yuan {\n  width: 200px;\n  height: 300px;\n  background: #ff485f;\n  position: absolute;\n  bottom: -170px;\n  left: 50%;\n  margin-left: -100px;\n  border-radius: 100px;\n}\n.face {\n  border: 1px solid red;\n  width: 88px;\n  height: 88px;\n  position: absolute;\n  left: 50%;\n  top: 185px;\n  margin-left: -44px;\n  z-index: 3;\n}\n.face>img{\n  /* border: 1px solid red; */\n  position: absolute;\n  top: 50%;\n  left: 50%;  \n}\n.face.left {\n  border: 3px solid black;\n  transform: translateX(-180px);\n  background: #f00;\n  border-radius: 44px;\n}\n.face.left>img{\n  transform: rotateY(180deg);\n  transform-origin: 0 0;\n}\n.face.right {\n  border: 3px solid black;\n  transform: translateX(180px);\n  background: #f00;\n  border-radius: 50%;\n}\n\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  // 设置初始速度
  time: 100,
  n: 1,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  // 绑定函数事件
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    // 绑定事件
    player.bindEvents(); // 默认播放,把id提出来

    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  // 写页面
  run: function run() {
    player.n += 1; // 当写完时，n不再+1

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    } // 在页面上写css


    player.ui.demo.innerText = _css.default.substring(0, player.n); // 在结构中写css

    player.ui.demo2.innerHTML = _css.default.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  // 播放
  play: function play() {
    // console.log("play");
    player.id = setInterval(player.run, player.time);
  },
  //暂停
  pause: function pause() {
    window.clearInterval(player.id);
  },
  // 慢速
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  // 中速
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  // 快速
  fast: function fast() {
    player.pause();
    player.time = -100;
    player.play();
  }
}; // 调用初始化

player.init();
},{"./css.js":"css.js"}],"C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53013" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map