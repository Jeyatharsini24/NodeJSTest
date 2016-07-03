var path = require('path');
var websiteRoot = "Desktop/omg//Miyaav/index.html";
var websiteAbout = "Desktop/omg/Miyaav/about.html";

// file path symbol (/ or \) depends on OS. By normalizing,
// it is able to make it as to support the OS in use
console.log(path.normalize(websiteRoot));
console.log(path.dirname(websiteRoot));
console.log(path.basename(websiteRoot));
console.log(path.extname(websiteRoot));// extension name
