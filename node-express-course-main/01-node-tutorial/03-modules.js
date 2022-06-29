// CommonJS, every file is module (by default)
// every file in node is a module
// Modules - Encapsulated Code (only share minimum)

// names is assigned to the exported names file(where the data is coming from)
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');

require('./07-mind-grenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
