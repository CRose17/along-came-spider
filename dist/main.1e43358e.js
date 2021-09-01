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
})({"src/kaboom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.k = void 0;
var k = kaboom({
  fullscreen: false,
  width: 720,
  height: 540,
  scale: 1,
  debug: true,
  clearColor: [0.28627450980392155, 0.7647058823529411, 0.7725490196078432, 1]
});
exports.k = k;
var _default = k;
exports.default = _default;
},{}],"scenes/win.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Win;

var _kaboom = _interopRequireDefault(require("../src/kaboom"));

var _game = _interopRequireDefault(require("./game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_kaboom.default.scene("game", _game.default);

function Win() {
  _kaboom.default.add([_kaboom.default.text("You Win!", 32), _kaboom.default.pos(_kaboom.default.width() / 2, _kaboom.default.height() / 2), _kaboom.default.color(1, 1, 1, 1), _kaboom.default.origin("top")]);

  _kaboom.default.add([_kaboom.default.rect(185, 40), _kaboom.default.pos(_kaboom.default.width() / 2 - 90, _kaboom.default.height() / 2 + 80), "button", {
    clickAction: function clickAction() {
      return _kaboom.default.go("game");
    }
  }]);

  _kaboom.default.add([_kaboom.default.text("Play again?", 16), _kaboom.default.pos(_kaboom.default.width() / 2 - 85, _kaboom.default.height() / 2 + 90), _kaboom.default.color(0, 0, 0)]);

  _kaboom.default.action("button", function (b) {
    if (b.isHovered()) b.use(_kaboom.default.color(0.7, 0.7, 0.7));else b.use(_kaboom.default.color(1, 1, 1));
    if (b.isClicked()) b.clickAction();
  });
}
},{"../src/kaboom":"src/kaboom.js","./game":"scenes/game.js"}],"scenes/lose.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Lose;

var _kaboom = _interopRequireDefault(require("../src/kaboom"));

var _game = _interopRequireDefault(require("./game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_kaboom.default.scene("game", _game.default);

function Lose() {
  _kaboom.default.add([_kaboom.default.text("So close", 32), _kaboom.default.pos(_kaboom.default.width() / 2, _kaboom.default.height() / 2), _kaboom.default.color(1, 1, 1, 1), _kaboom.default.origin("top")]);

  _kaboom.default.add([_kaboom.default.rect(165, 40), _kaboom.default.pos(_kaboom.default.width() / 2 - 85, _kaboom.default.height() / 2 + 80), "button", {
    clickAction: function clickAction() {
      return _kaboom.default.go("game");
    }
  }]);

  _kaboom.default.add([_kaboom.default.text("Try again!", 16), _kaboom.default.pos(_kaboom.default.width() / 2 - 80, _kaboom.default.height() / 2 + 90), _kaboom.default.color(0, 0, 0)]);

  _kaboom.default.action("button", function (b) {
    if (b.isHovered()) b.use(_kaboom.default.color(0.7, 0.7, 0.7));else b.use(_kaboom.default.color(1, 1, 1));
    if (b.isClicked()) b.clickAction();
  });
}
},{"../src/kaboom":"src/kaboom.js","./game":"scenes/game.js"}],"scenes/game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Game;

var _kaboom = _interopRequireDefault(require("../src/kaboom"));

var _win = _interopRequireDefault(require("./win"));

var _lose = _interopRequireDefault(require("./lose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_kaboom.default.scene("lose", _lose.default);

_kaboom.default.scene("win", _win.default);

_kaboom.default.loadRoot("https://i.imgur.com/");

_kaboom.default.loadSprite("spider", "aTxTD53.png");

_kaboom.default.loadSprite("fly1", "7FtRXwP.png");

_kaboom.default.loadSprite("fly2", "7FtRXwP.png");

_kaboom.default.loadSprite("fly3", "7FtRXwP.png");

_kaboom.default.loadSprite("bolt", "0PndioM.png");

_kaboom.default.loadSprite("web", "6iE2HD3.png?1");

_kaboom.default.loadSprite("wall", "7JzKe7Xs.png");

_kaboom.default.loadSprite("ground", "8hfkcDUs.png");

var block_size = 20;
var MOVE_SPEED = 200;
var WEB_SPEED = 300;
var FLY1_SPEED = 50;
var FLY2_SPEED = 170;
var FLY3_SPEED = 100;
var TIME_LEFT = 30;

_kaboom.default.layers(["bg", "obj", "ui"], "obj");

function Game() {
  _kaboom.default.addLevel(["     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     w                            h", "     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"], {
    width: block_size,
    height: block_size,
    pos: (0, 0),
    w: [_kaboom.default.sprite("wall"), "left-wall", _kaboom.default.solid(), _kaboom.default.scale(0.5)],
    h: [_kaboom.default.sprite("wall"), "right-wall", _kaboom.default.solid(), _kaboom.default.scale(0.5)],
    x: [_kaboom.default.sprite("ground"), "ground", _kaboom.default.solid(), _kaboom.default.scale(0.5)],
    b: [_kaboom.default.sprite("bolt"), _kaboom.default.solid()]
  });

  var score = _kaboom.default.add([_kaboom.default.text("0"), _kaboom.default.pos(40, 40), _kaboom.default.layer("ui"), _kaboom.default.scale(2.5), {
    value: 0
  }]);

  var timer = _kaboom.default.add([_kaboom.default.text("0"), _kaboom.default.pos(20, 150), _kaboom.default.scale(2), _kaboom.default.layer("ui"), {
    time: TIME_LEFT
  }]);

  timer.action(function () {
    timer.time -= _kaboom.default.dt();
    timer.text = timer.time.toFixed(2);

    if (timer.time <= 0) {
      _kaboom.default.go("lose", {
        score: score.value
      });
    } else if (score.value === 10) {
      _kaboom.default.go("win", {
        score: score.value
      });
    }
  });

  var spider = _kaboom.default.add([_kaboom.default.sprite("spider"), _kaboom.default.pos(_kaboom.default.width() / 2, _kaboom.default.height() / 2 - 270)]);

  _kaboom.default.keyDown("right", function () {
    spider.move(MOVE_SPEED, 0);
  });

  _kaboom.default.keyDown("left", function () {
    spider.move(-MOVE_SPEED, 0);
  });

  function respawn_all() {
    _kaboom.default.run_loop = false;

    _kaboom.default.wait(0.5, function () {
      respawn_fly1();
      respawn_fly2();
      respawn_fly3();
      _kaboom.default.run_loop = true;
    });
  }

  respawn_all();
  var fly1 = null;
  var CURRENT1_SPEED = FLY1_SPEED;

  function respawn_fly1() {
    var new_pos = _kaboom.default.rand(_kaboom.default.vec2(200, 100), _kaboom.default.vec2(700, 400));

    new_pos.x = Math.floor(new_pos.x);
    new_pos.y = Math.floor(new_pos.y);

    if (fly1) {
      _kaboom.default.destroy(fly1);
    }

    fly1 = _kaboom.default.add([_kaboom.default.sprite("fly1"), _kaboom.default.pos(new_pos), "fly1"]);
  }

  _kaboom.default.action("fly1", function (s) {
    s.move(CURRENT1_SPEED, 0);
  });

  _kaboom.default.collides("fly1", "right-wall", function () {
    CURRENT1_SPEED = -FLY1_SPEED;

    _kaboom.default.every("fly1", function (s) {
      s.move(0, 0);
    });
  });

  _kaboom.default.collides("fly1", "left-wall", function () {
    CURRENT1_SPEED = FLY1_SPEED;

    _kaboom.default.every("fly1", function (s) {
      s.move(0, 0);
    });
  });

  var fly2 = null;
  var CURRENT2_SPEED = FLY2_SPEED;

  function respawn_fly2() {
    var new_pos = _kaboom.default.rand(_kaboom.default.vec2(200, 100), _kaboom.default.vec2(700, 400));

    new_pos.x = Math.floor(new_pos.x);
    new_pos.y = Math.floor(new_pos.y);

    if (fly2) {
      _kaboom.default.destroy(fly2);
    }

    fly2 = _kaboom.default.add([_kaboom.default.sprite("fly2"), _kaboom.default.pos(new_pos), "fly2"]);
  }

  _kaboom.default.action("fly2", function (s) {
    s.move(CURRENT2_SPEED, 0);
  });

  _kaboom.default.collides("fly2", "right-wall", function () {
    CURRENT2_SPEED = -FLY2_SPEED;

    _kaboom.default.every("fly2", function (s) {
      s.move(0, 0);
    });
  });

  _kaboom.default.collides("fly2", "left-wall", function () {
    CURRENT2_SPEED = FLY2_SPEED;

    _kaboom.default.every("fly2", function (s) {
      s.move(0, 0);
    });
  });

  var fly3 = null;
  var CURRENT3_SPEED = FLY3_SPEED;

  function respawn_fly3() {
    var new_pos = _kaboom.default.rand(_kaboom.default.vec2(200, 100), _kaboom.default.vec2(700, 400));

    new_pos.x = Math.floor(new_pos.x);
    new_pos.y = Math.floor(new_pos.y);

    if (fly3) {
      _kaboom.default.destroy(fly3);
    }

    fly3 = _kaboom.default.add([_kaboom.default.sprite("fly3"), _kaboom.default.pos(new_pos), "fly3"]);
  }

  _kaboom.default.action("fly3", function (s) {
    s.move(CURRENT3_SPEED, 0);
  });

  _kaboom.default.collides("fly3", "right-wall", function () {
    CURRENT3_SPEED = -FLY3_SPEED;

    _kaboom.default.every("fly3", function (s) {
      s.move(0, 0);
    });
  });

  _kaboom.default.collides("fly3", "left-wall", function () {
    CURRENT3_SPEED = FLY3_SPEED;

    _kaboom.default.every("fly3", function (s) {
      s.move(0, 0);
    });
  });

  function spawnWeb(p) {
    _kaboom.default.add([_kaboom.default.sprite("web"), _kaboom.default.pos(p), _kaboom.default.origin("center"), "webHit"]);
  }

  _kaboom.default.keyPress("space", function () {
    spawnWeb(spider.pos.add(30, 60));
  });

  _kaboom.default.action("webHit", function (b) {
    b.move(0, WEB_SPEED);
  });

  _kaboom.default.collides("webHit", "ground", function (b) {
    _kaboom.default.destroy(b);
  });

  _kaboom.default.collides("webHit", "fly1", function (b, s) {
    _kaboom.default.camShake(4);

    _kaboom.default.destroy(b);

    respawn_fly1();

    _kaboom.default.destroy(s);

    score.value++;
    score.text = score.value;
  });

  _kaboom.default.collides("webHit", "fly2", function (b, s) {
    _kaboom.default.camShake(4);

    _kaboom.default.destroy(b);

    respawn_fly2();

    _kaboom.default.destroy(s);

    score.value++;
    score.text = score.value;
  });

  _kaboom.default.collides("webHit", "fly3", function (b, s) {
    _kaboom.default.camShake(4);

    _kaboom.default.destroy(b);

    respawn_fly3();

    _kaboom.default.destroy(s);

    score.value++;
    score.text = score.value;
  });

  _kaboom.default.add([_kaboom.default.rect(310, 30), _kaboom.default.pos(_kaboom.default.width() / 2 - 100, _kaboom.default.height() / 2 + 240), _kaboom.default.color(0, 0, 0)]);

  _kaboom.default.add([_kaboom.default.text("Capture 10 flies and WIN!", 12), _kaboom.default.pos(_kaboom.default.width() / 2 - 95, _kaboom.default.height() / 2 + 250), _kaboom.default.color(1, 1, 1)]);
}
},{"../src/kaboom":"src/kaboom.js","./win":"scenes/win.js","./lose":"scenes/lose.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _kaboom = _interopRequireDefault(require("./kaboom"));

var _game = _interopRequireDefault(require("../scenes/game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_kaboom.default.scene("game", _game.default);

_kaboom.default.scene("main", function () {
  _kaboom.default.add([_kaboom.default.text("Along Came A Spider", 32), _kaboom.default.pos(_kaboom.default.width() / 2, _kaboom.default.height() / 2), _kaboom.default.color(1, 1, 1, 1), _kaboom.default.origin("top")]);

  _kaboom.default.add([_kaboom.default.rect(155, 40), _kaboom.default.pos(_kaboom.default.width() / 2 - 200, _kaboom.default.height() / 2 + 100), "button", {
    clickAction: function clickAction() {
      return _kaboom.default.go("game");
    }
  }]);

  _kaboom.default.add([_kaboom.default.text("Play game", 16), _kaboom.default.pos(_kaboom.default.width() / 2 - 195, _kaboom.default.height() / 2 + 110), _kaboom.default.color(0, 0, 0)]);

  _kaboom.default.add([_kaboom.default.rect(250, 30), _kaboom.default.pos(_kaboom.default.width() / 2 + 50, _kaboom.default.height() / 2 + 100), "button", {
    clickAction: function clickAction() {
      return _kaboom.default.go("game");
    }
  }]);

  _kaboom.default.add([_kaboom.default.text("<- arrow = move left", 12), _kaboom.default.pos(_kaboom.default.width() / 2 + 55, _kaboom.default.height() / 2 + 110), _kaboom.default.color(0, 0, 0)]);

  _kaboom.default.add([_kaboom.default.rect(260, 30), _kaboom.default.pos(_kaboom.default.width() / 2 + 50, _kaboom.default.height() / 2 + 140), "button", {
    clickAction: function clickAction() {
      return _kaboom.default.go("game");
    }
  }]);

  _kaboom.default.add([_kaboom.default.text("-> arrow = move right", 12), _kaboom.default.pos(_kaboom.default.width() / 2 + 55, _kaboom.default.height() / 2 + 150), _kaboom.default.color(0, 0, 0)]);

  _kaboom.default.add([_kaboom.default.rect(250, 30), _kaboom.default.pos(_kaboom.default.width() / 2 + 50, _kaboom.default.height() / 2 + 180), "button", {
    clickAction: function clickAction() {
      return _kaboom.default.go("game");
    }
  }]);

  _kaboom.default.add([_kaboom.default.text("spacebar = shoot web", 12), _kaboom.default.pos(_kaboom.default.width() / 2 + 55, _kaboom.default.height() / 2 + 190), _kaboom.default.color(0, 0, 0)]);

  _kaboom.default.action("button", function (b) {
    if (b.isHovered()) b.use(_kaboom.default.color(0.7, 0.7, 0.7));else b.use(_kaboom.default.color(1, 1, 1));
    if (b.isClicked()) b.clickAction();
  });
});

_kaboom.default.start("main");
},{"./kaboom":"src/kaboom.js","../scenes/game":"scenes/game.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60455" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map