# vinyl-modernizr

[![NPM version](https://img.shields.io/npm/v/vinyl-modernizr.svg)](https://www.npmjs.com/package/vinyl-modernizr)
[![Build Status](https://travis-ci.org/shinnn/vinyl-modernizr.svg?branch=master)](https://travis-ci.org/shinnn/vinyl-modernizr)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/vinyl-modernizr.svg)](https://coveralls.io/github/shinnn/is-gist-starred?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/vinyl-modernizr.svg)](https://david-dm.org/shinnn/vinyl-modernizr)
[![devDependency Status](https://david-dm.org/shinnn/vinyl-modernizr/dev-status.svg)](https://david-dm.org/shinnn/vinyl-modernizr#info=devDependencies)

Create a [vinyl](https://github.com/gulpjs/vinyl) object of a [Modernizr](https://modernizr.com/) JavaScript file

```javascript
const vinylModernizr = require('vinyl-modernizr');

const file = vinylModernizr();
file.path; //=> '/path/to/cwd/modernizr.js'
file.pipe(process.stdout); // prints '/*!\n * modernizr v3.3.1\n * Build http://modernizr.com/download? ...'
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install vinyl-modernizr
```

## API

```javascript
const vinylModernizr = require('vinyl-modernizr');
```

### vinylModernizr([*options*])

*options*: `Object`  
Return: `Object` ([`Vinyl`](https://www.npmjs.com/package/vinyl) instance)

It returns a [vinyl](https://github.com/gulpjs/vinyl#file) object that contains [modernizr-stream](https://github.com/shinnn/modernizr-stream) as its [`contents`](https://github.com/gulpjs/vinyl#contents) property.

#### Options

All options are passed to [modernizr-stream](https://github.com/shinnn/modernizr-stream#modernizrstreamoptions) and [vinyl](https://github.com/gulpjs/vinyl#constructoroptions) constructor. Note that [`path`](https://github.com/gulpjs/vinyl#optionspath) option defaults to `modernizr.js` right under the current directory.

```javascript
vinylModernizr().relative; //=> 'modernizr.js'
vinylModernizr({base: 'foo'}).relative; //=> '../modernizr.js'
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
