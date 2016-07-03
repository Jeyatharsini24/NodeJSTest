require('./sharedStateModule2');
require('./sharedStateModule3');

/**
 * When a module is imported by various modules,
 * actually the module is shared by them.
 */

/**
If use 
require('./sharedStateModule3');
require('./sharedStateModule2');

module3 is blank. No chance to get value from module 2
*/