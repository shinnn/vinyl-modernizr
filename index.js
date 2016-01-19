/*!
 * vinyl-modernizr | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/vinyl-modernizr
*/
'use strict';

var path = require('path');

var modernizrStream = require('modernizr-stream');
var objectAssign = require('object-assign');
var Vinyl = require('vinyl');

module.exports = function vinylModernizr(options) {
  return new Vinyl(objectAssign({
    path: path.resolve('modernizr.js')
  }, options, {
    contents: modernizrStream(options)
  }));
};
