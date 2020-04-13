// This file isn't transpiled. So you must use CommonJS and ES5.

// Register babel to transpile before our tests run
require('@babel/register');

// Disable any webpack features that mocha doesn't understand.
require.extensions['.css'] = function () { };
