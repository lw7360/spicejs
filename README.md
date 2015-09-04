[![Build Status](https://travis-ci.org/lw7360/spicejs.svg?branch=master)](https://travis-ci.org/lw7360/spicejs)
[![Coverage Status](https://coveralls.io/repos/lw7360/spicejs/badge.svg?branch=master&service=github)](https://coveralls.io/github/lw7360/spicejs?branch=master)

# Spice

Python style slices in JavaScript.

# Code Example

## Basic usage
```js
var spice = require('spicejs');

spice('123456789', '2:6'); // '3456'
spice('123456789', '6:2'); // ''
spice('123456789', ':'); // '123456789'
```

## Extended syntax

```js
var spice = require('spicejs');

spice([1, 2, 3, 4, 5, 6, 7, 8, 9], '::3'); // [1, 4, 7]
```

# Installation

```bash
npm install spice
```

# License

MIT. Copyright (c) [Larry Wu](http://larrywu.com/)