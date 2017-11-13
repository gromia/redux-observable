(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs/Subject"), require("rxjs/operator/map"), require("rxjs/operator/switchMap"), require("rxjs/Observable"), require("rxjs/util/subscribeToResult"), require("rxjs/operator/filter"), require("rxjs/operator/first"), require("rxjs/operator/merge"), require("rxjs/observable/from"), require("rxjs/observable/merge"), require("rxjs/observable/of"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs/Subject", "rxjs/operator/map", "rxjs/operator/switchMap", "rxjs/Observable", "rxjs/util/subscribeToResult", "rxjs/operator/filter", "rxjs/operator/first", "rxjs/operator/merge", "rxjs/observable/from", "rxjs/observable/merge", "rxjs/observable/of"], factory);
	else if(typeof exports === 'object')
		exports["ReduxObservable"] = factory(require("rxjs/Subject"), require("rxjs/operator/map"), require("rxjs/operator/switchMap"), require("rxjs/Observable"), require("rxjs/util/subscribeToResult"), require("rxjs/operator/filter"), require("rxjs/operator/first"), require("rxjs/operator/merge"), require("rxjs/observable/from"), require("rxjs/observable/merge"), require("rxjs/observable/of"));
	else
		root["ReduxObservable"] = factory(root["Rx"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["Rx"], root["Rx"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"], root["Rx"]["Observable"], root["Rx"]["Observable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsObservable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Observable2 = __webpack_require__(14);

var _of2 = __webpack_require__(21);

var _from2 = __webpack_require__(19);

var _operators = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionsObservable = exports.ActionsObservable = function (_Observable) {
  _inherits(ActionsObservable, _Observable);

  _createClass(ActionsObservable, null, [{
    key: 'of',
    value: function of() {
      return new this(_of2.of.apply(undefined, arguments));
    }
  }, {
    key: 'from',
    value: function from(actions, scheduler) {
      return new this((0, _from2.from)(actions, scheduler));
    }
  }]);

  function ActionsObservable(actionsSubject) {
    _classCallCheck(this, ActionsObservable);

    var _this = _possibleConstructorReturn(this, (ActionsObservable.__proto__ || Object.getPrototypeOf(ActionsObservable)).call(this));

    _this.source = actionsSubject;
    return _this;
  }

  _createClass(ActionsObservable, [{
    key: 'lift',
    value: function lift(operator) {
      var observable = new ActionsObservable(this);
      observable.operator = operator;
      return observable;
    }
  }, {
    key: 'ofType',
    value: function ofType() {
      return _operators.ofType.apply(undefined, arguments)(this);
    }
  }]);

  return ActionsObservable;
}(_Observable2.Observable);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EPIC_END = exports.EPIC_END = '@@redux-observable/EPIC_END';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EPIC_INIT = exports.EPIC_INIT = '@@redux-observable/EPIC_INIT';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ofType = ofType;

var _filter = __webpack_require__(16);

var keyHasType = function keyHasType(type, key) {
  return type === key || typeof key === 'function' && type === key.toString();
};

function ofType() {
  for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
    keys[_key] = arguments[_key];
  }

  return function ofTypeOperatorFunction(source) {
    return _filter.filter.call(source, function (_ref) {
      var type = _ref.type;

      var len = keys.length;
      if (len === 1) {
        return keyHasType(type, keys[0]);
      } else {
        for (var i = 0; i < len; i++) {
          if (keyHasType(type, keys[i])) {
            return true;
          }
        }
      }
      return false;
    });
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queueUntilType = queueUntilType;

var _subscribeToResult = __webpack_require__(15);

function queueUntilType(expectedType) {
  return this.lift(function (source) {
    var _this = this;

    var queue = [];
    var hasSeenType = false;
    var nullifyQueue = function nullifyQueue() {
      queue = null;
    };

    var outer = {
      notifyNext: function notifyNext(_, action) {
        return _this.next(action);
      },
      notifyComplete: nullifyQueue
    };
    return source.subscribe({
      next: function next(action) {
        // It's important to check this first because of possible re-entry
        // before we've finished flushing the queue.
        if (hasSeenType) {
          return _this.next(action);
        }

        if (action && action.type === expectedType) {
          hasSeenType = true;
          _this.add((0, _subscribeToResult.subscribeToResult)(outer, queue));
          // no longer needed, free up memory
          nullifyQueue();
        } else {
          queue.push(action);
        }
      },
      error: function error(e) {
        return _this.error(e);
      },
      complete: function complete() {
        return _this.complete();
      },
      unsubscribe: nullifyQueue
    });
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var identity = exports.identity = function identity(x) {
  return x;
};

var defaultAdapter = exports.defaultAdapter = {
  input: identity,
  output: identity
};

var defaultOptions = exports.defaultOptions = {
  adapter: defaultAdapter
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineEpics = undefined;

var _merge = __webpack_require__(20);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
  Merges all epics into a single one.
 */
var combineEpics = exports.combineEpics = function combineEpics() {
  for (var _len = arguments.length, epics = Array(_len), _key = 0; _key < _len; _key++) {
    epics[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _merge.merge.apply(undefined, _toConsumableArray(epics.map(function (epic) {
      var output$ = epic.apply(undefined, args);
      if (!output$) {
        throw new TypeError('combineEpics: one of the provided Epics "' + (epic.name || '<anonymous>') + '" does not return a stream. Double check you\'re not missing a return statement!');
      }
      return output$;
    })));
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createEpicEnhancer = createEpicEnhancer;

var _Subject = __webpack_require__(6);

var _map = __webpack_require__(7);

var _switchMap = __webpack_require__(8);

var _ActionsObservable = __webpack_require__(0);

var _EPIC_INIT = __webpack_require__(2);

var _EPIC_END = __webpack_require__(1);

var _defaults = __webpack_require__(5);

var _queueUntilType = __webpack_require__(4);

var _merge = __webpack_require__(18);

var _first = __webpack_require__(17);

function createEpicEnhancer(epic) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults.defaultOptions;

  if (typeof epic !== 'function') {
    throw new TypeError('You must provide a root Epic to createEpicEnhancer');
  }
  options = _extends({}, _defaults.defaultOptions, options);

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var _context;

      var store = createStore(reducer, preloadedState, enhancer);
      var epic$ = new _Subject.Subject();
      var input$ = new _Subject.Subject();
      var _action$ = new _ActionsObservable.ActionsObservable(input$);
      var action$ = options.adapter.input(_action$);

      var actionsQueue = [];
      var dispatch = function dispatch(action) {
        // enqueue action before passing to reducers/middleware
        actionsQueue.push(action);
        // let action hit reducers and other middleware first
        // note the follow caveats:
        // 1. middleware may call dispatch synchronously before
        //    this function call resolves
        // 2. state changes will update store subscribers which
        //    may cause a synchronous call to dispatch before this call resolves
        var result = store.dispatch(action);
        // at this point we may have many nested
        // dispatch calls on the call stack
        // we dequeue actions, one per dispatch on the call stack,
        // this ensures that actions are always FIFO and preserves the order
        // of actions between reducers and epics
        input$.next(actionsQueue.shift());
        return result;
      };

      var mockStore = { dispatch: dispatch, getState: function getState() {
          return store.getState();
        }
      };

      (_context = (_context = _map.map.call(epic$, function (epic) {
        var output$ = 'dependencies' in options ? epic(action$, mockStore, options.dependencies) : epic(action$, mockStore);

        if (!output$) {
          throw new TypeError('Your root Epic "' + (epic.name || '<anonymous>') + '" does not return a stream. Double check you\'re not missing a return statement!');
        }

        return output$;
      }), _map.map).call(_context, function (output$) {
        return options.adapter.output(output$);
      }), _switchMap.switchMap).call(_context, function (epic) {
        var _context2;

        return (_context2 = (0, _merge.mergeStatic)(epic,
        // add epic that passes INIT through
        // this allows us to detect when all epics have subscribed
        // to action$.
        (_context2 = _action$.ofType(_EPIC_INIT.EPIC_INIT), _first.first).call(_context2))
        // actions are cached by this operator until the INIT action
        // we use the INIT as a signal to flush cached actions
        // this allows actions emitted by epics at subscribe (i.e. startWith),
        // before subscribing to input$, to loop back into the epics
        // this happens synchronously
        // all future actions are passed through
        , _queueUntilType.queueUntilType).call(_context2, _EPIC_INIT.EPIC_INIT);
      }).subscribe(dispatch);

      var replaceEpic = function replaceEpic(epic) {
        // gives the previous root Epic a last chance
        // to do some clean up
        dispatch({ type: _EPIC_END.EPIC_END });
        // switches to the new root Epic, synchronously terminating
        // the previous one
        epic$.next(epic);

        dispatch({ type: _EPIC_INIT.EPIC_INIT });
      };

      epic$.next(epic);

      // we dispatch INIT to open up the queueUntilType operator
      dispatch({ type: _EPIC_INIT.EPIC_INIT });

      return _extends({}, store, {
        dispatch: dispatch,
        replaceEpic: replaceEpic
      });
    };
  };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createEpicMiddleware = createEpicMiddleware;

var _Subject = __webpack_require__(6);

var _map = __webpack_require__(7);

var _switchMap = __webpack_require__(8);

var _ActionsObservable = __webpack_require__(0);

var _EPIC_END = __webpack_require__(1);

var _defaults = __webpack_require__(5);

function createEpicMiddleware(rootEpic) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults.defaultOptions;

  if (typeof rootEpic !== 'function') {
    throw new TypeError('You must provide a root Epic to createEpicMiddleware');
  }

  // even though we used default param, we need to merge the defaults
  // inside the options object as well in case they declare only some
  options = _extends({}, _defaults.defaultOptions, options);
  var input$ = new _Subject.Subject();
  var action$ = options.adapter.input(new _ActionsObservable.ActionsObservable(input$));
  var epic$ = new _Subject.Subject();
  var store = void 0;

  var epicMiddleware = function epicMiddleware(_store) {
    store = _store;

    return function (next) {
      var _context;

      (_context = _map.map.call(epic$, function (epic) {
        var vault =  false ? store : {
          getState: store.getState,
          dispatch: function dispatch(action) {
            __webpack_require__(13).deprecate('calling store.dispatch() directly in your Epics is deprecated and will be removed. Instead, emit actions through the Observable your Epic returns.\n\n  https://goo.gl/WWNYSP');
            return store.dispatch(action);
          }
        };

        var output$ = 'dependencies' in options ? epic(action$, vault, options.dependencies) : epic(action$, vault);

        if (!output$) {
          throw new TypeError('Your root Epic "' + (epic.name || '<anonymous>') + '" does not return a stream. Double check you\'re not missing a return statement!');
        }

        return output$;
      }), _switchMap.switchMap).call(_context, function (output$) {
        return options.adapter.output(output$);
      }).subscribe(store.dispatch);

      // Setup initial root epic
      epic$.next(rootEpic);

      return function (action) {
        var result = next(action);
        input$.next(action);
        return result;
      };
    };
  };

  epicMiddleware.replaceEpic = function (rootEpic) {
    // gives the previous root Epic a last chance
    // to do some clean up
    store.dispatch({ type: _EPIC_END.EPIC_END });
    // switches to the new root Epic, synchronously terminating
    // the previous one
    epic$.next(rootEpic);
  };

  return epicMiddleware;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createEpicMiddleware = __webpack_require__(11);

Object.defineProperty(exports, 'createEpicMiddleware', {
  enumerable: true,
  get: function get() {
    return _createEpicMiddleware.createEpicMiddleware;
  }
});

var _createEpicEnhancer = __webpack_require__(10);

Object.defineProperty(exports, 'createEpicEnhancer', {
  enumerable: true,
  get: function get() {
    return _createEpicEnhancer.createEpicEnhancer;
  }
});

var _ActionsObservable = __webpack_require__(0);

Object.defineProperty(exports, 'ActionsObservable', {
  enumerable: true,
  get: function get() {
    return _ActionsObservable.ActionsObservable;
  }
});

var _combineEpics = __webpack_require__(9);

Object.defineProperty(exports, 'combineEpics', {
  enumerable: true,
  get: function get() {
    return _combineEpics.combineEpics;
  }
});

var _EPIC_INIT = __webpack_require__(2);

Object.defineProperty(exports, 'EPIC_INIT', {
  enumerable: true,
  get: function get() {
    return _EPIC_INIT.EPIC_INIT;
  }
});

var _EPIC_END = __webpack_require__(1);

Object.defineProperty(exports, 'EPIC_END', {
  enumerable: true,
  get: function get() {
    return _EPIC_END.EPIC_END;
  }
});

var _operators = __webpack_require__(3);

Object.defineProperty(exports, 'ofType', {
  enumerable: true,
  get: function get() {
    return _operators.ofType;
  }
});

var _queueUntilType = __webpack_require__(4);

Object.defineProperty(exports, 'queueUntilType', {
  enumerable: true,
  get: function get() {
    return _queueUntilType.queueUntilType;
  }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var deprecationsSeen = {};

var deprecate = exports.deprecate = (typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object' && typeof console.warn === 'function' ? function (msg) {
  if (!deprecationsSeen[msg]) {
    deprecationsSeen[msg] = true;
    console.warn('redux-observable | DEPRECATION: ' + msg);
  }
} : function () {};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ })
/******/ ]);
});