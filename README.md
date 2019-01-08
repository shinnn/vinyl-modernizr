# vinyl-modernizr

[![npm version](https://img.shields.io/npm/v/vinyl-modernizr.svg)](https://www.npmjs.com/package/vinyl-modernizr)
[![Build Status](https://travis-ci.com/shinnn/vinyl-modernizr.svg?branch=master)](https://travis-ci.com/shinnn/vinyl-modernizr)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/vinyl-modernizr.svg)](https://coveralls.io/github/shinnn/vinyl-modernizr?branch=master)

Create a [vinyl](https://github.com/gulpjs/vinyl) object of a [Modernizr](https://modernizr.com/) JavaScript file

```javascript
const vinylModernizr = require('vinyl-modernizr');

const file = vinylModernizr();
file.path; //=> '/Users/you/current/working/directory/modernizr.js'
file.contents.pipe(process.stdout); // prints '/*!\n * modernizr v3.6.0\n * Build http://modernizr.com/download? ...'
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install vinyl-modernizr
```

## API

```javascript
const vinylModernizr = require('vinyl-modernizr');
```

### vinylModernizr([*options*])

*options*: `Object`  
Return: [`Vinyl`](https://www.npmjs.com/package/vinyl)

It returns a [Vinyl](https://github.com/gulpjs/vinyl#new-vinyloptions) object that contains [modernizr-stream](https://github.com/shinnn/modernizr-stream) as its [`contents`](https://github.com/gulpjs/vinyl#filecontents) property.

#### Options

All options are passed to [modernizr-stream](https://github.com/shinnn/modernizr-stream#modernizrstreamoptions) and [`Vinyl`](https://github.com/gulpjs/vinyl#options) constructor. Note that [`path`](https://github.com/gulpjs/vinyl#optionspath) option defaults to `modernizr.js` right under the current directory.

```javascript
vinylModernizr().relative; //=> 'modernizr.js'
```

## License

Copyright (c) 2016 - 2019 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
