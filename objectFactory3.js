var shared = require('./objectFactory1');

var module1ofmodule3 = shared();
module1ofmodule3.attributeTest = "Module 3";
console.log("Module 3's attributeTest : " + module1ofmodule3.attributeTest);