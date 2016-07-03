/**
 * core modules are modules provided by nodejs.
 * custom modules are specified with ./ (directory symbol).
 * but enough to specify core modules with their name.
 */

/**
 * best practice : name of the variable is same as module
 */
var fs = require('fs'); // fs: file system

// create a file as follows
fs.writeFileSync('filename.txt', 'text to include in file');
console.log(fs.readFileSync('filename.txt').toString());