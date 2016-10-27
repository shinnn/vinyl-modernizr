'use strict';

const concatStream = require('concat-stream');
const test = require('tape');
const Vinyl = require('vinyl');
const vinylModernizr = require('.');

test('vinylModernizr', t => {
  t.plan(4);

  t.strictEqual(vinylModernizr.name, 'vinylModernizr', 'should have a function name.');

  t.ok(Vinyl.isVinyl(vinylModernizr()), 'should create a vinyl instance.');

  const file = vinylModernizr({
    cwd: 'foo',
    minify: true
  });

  t.strictEqual(file.relative, '../modernizr.js', 'should support Vinyl constructor options.');

  file.pipe(concatStream(data => {
    t.ok(data.length < 1200, 'should support Modernizr build options.');
  }));
});
