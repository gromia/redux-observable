export var identity = function identity(x) {
  return x;
};

export var defaultAdapter = {
  input: identity,
  output: identity
};

export var defaultOptions = {
  adapter: defaultAdapter
};