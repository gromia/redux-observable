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