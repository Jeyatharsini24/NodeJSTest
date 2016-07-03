var shared = require('./objectFactory1');

var module1ofmodule2 = shared();
module1ofmodule2.attributeTest = "Module 2";
console.log("Module 2's attributeTest : " + module1ofmodule2.attributeTest);