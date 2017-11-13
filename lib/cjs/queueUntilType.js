'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queueUntilType = queueUntilType;

var _subscribeToResult = require('rxjs/util/subscribeToResult');

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