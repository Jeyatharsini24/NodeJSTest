// module.exports = {}
// Even we export it or not, internally
// nodejs creates this

function printModule11()
{
	console.log("Module11");
}

function printModule12()
{
	console.log("Module12");
}

// only export the "printModule11" function
module.exports.module11 = printModule11;