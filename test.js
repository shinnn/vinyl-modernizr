'use strict';

const concatStream = require('concat-stream');
const {isVinyl} = require('vinyl');
const test = require('tape');
const vinylModernizr = require('.');

test('vinylModernizr', t => {
  t.plan(4);

  t.ok(isVinyl(vinylModernizr()), 'should create a vinyl instance.');

  const file = vinylModernizr({
    cwd: 'foo',
    minify: true
  });

  t.equal(file.relative, '../modernizr.js', 'should support Vinyl constructor options.');

  file.contents.pipe(concatStream(data => {
    t.ok(data.length < 1200, 'should support Modernizr build options.');
  }));

  t.throws(
    () => vinylModernizr({}, {}),
    /^RangeError: Expected 0 or 1 argument \(<Object>\), but got 2 arguments\./u,
    'should throw an error when it takes too many arguments.'
  );
});
