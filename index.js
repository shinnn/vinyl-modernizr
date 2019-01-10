'use strict';

const {resolve} = require('path');

const modernizrStream = require('modernizr-stream');
const Vinyl = require('vinyl');

module.exports = function vinylModernizr(...args) {
	const argLen = args.length;

	if (argLen > 1) {
		const error = new RangeError(`Expected 0 or 1 argument (<Object>), but got ${argLen} arguments.`);
		error.code = 'ERR_TOO_MANY_ARGS';

		throw error;
	}

	return new Vinyl({path: resolve('modernizr.js'), ...args[0], contents: modernizrStream(...args)});
};
