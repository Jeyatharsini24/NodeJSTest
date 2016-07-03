var shared = require('./sharedStateModule1');
shared.attributeTest = "sharedStateModule2";
console.log('module2 : ' + shared.attributeTest);