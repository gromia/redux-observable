var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operator/map';
import { switchMap } from 'rxjs/operator/switchMap';
import { ActionsObservable } from './ActionsObservable';
import { EPIC_END } from './EPIC_END';
import { defaultOptions } from './defaults';

export function createEpicMiddleware(rootEpic) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;

  if (typeof rootEpic !== 'function') {
    throw new TypeError('You must provide a root Epic to createEpicMiddleware');
  }

  // even though we used default param, we need to merge the defaults
  // inside the options object as well in case they declare only some
  options = _extends({}, defaultOptions, options);
  var input$ = new Subject();
  var action$ = options.adapter.input(new ActionsObservable(input$));
  var epic$ = new Subject();
  var store = void 0;

  var epicMiddleware = function epicMiddleware(_store) {
    store = _store;

    return function (next) {
      var _context;

      (_context = map.call(epic$, function (epic) {
        var vault = process.env.NODE_ENV === 'production' ? store : {
          getState: store.getState,
          dispatch: function dispatch(action) {
            require('./utils/console').deprecate('calling store.dispatch() directly in your Epics is deprecated and will be removed. Instead, emit actions through the Observable your Epic returns.\n\n  https://goo.gl/WWNYSP');
            return store.dispatch(action);
          }
        };

        var output$ = 'dependencies' in options ? epic(action$, vault, options.dependencies) : epic(action$, vault);

        if (!output$) {
          throw new TypeError('Your root Epic "' + (epic.name || '<anonymous>') + '" does not return a stream. Double check you\'re not missing a return statement!');
        }

        return output$;
      }), switchMap).call(_context, function (output$) {
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
    store.dispatch({ type: EPIC_END });
    // switches to the new root Epic, synchronously terminating
    // the previous one
    epic$.next(rootEpic);
  };

  return epicMiddleware;
}