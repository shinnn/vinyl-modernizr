/*!
 * vinyl-modernizr | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/vinyl-modernizr
*/
'use strict';

const path = require('path');

const modernizrStream = require('modernizr-stream');
const Vinyl = require('vinyl');

module.exports = function vinylModernizr(options) {
  return new Vinyl(Object.assign({
    path: path.resolve('modernizr.js')
  }, options, {
    contents: modernizrStream(options)
  }));
};
