'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createEpicEnhancer = createEpicEnhancer;

var _Subject = require('rxjs/Subject');

var _map = require('rxjs/operator/map');

var _switchMap = require('rxjs/operator/switchMap');

var _ActionsObservable = require('./ActionsObservable');

var _EPIC_INIT = require('./EPIC_INIT');

var _EPIC_END = require('./EPIC_END');

var _defaults = require('./defaults');

var _queueUntilType = require('./queueUntilType');

var _merge = require('rxjs/operator/merge');

var _first = require('rxjs/operator/first');

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