/**
 * http://usejsdoc.org/
 */
// ./ : look for the file with the name
// module1 in the same directory
var module1 = require('./module1exportonebyone');
var module2 = require('./module2exportAllTogether');

module1.module11();
module2.printModule21();
module2.printModule22();

console.log(module2.attributeTest);