/**
 * http://usejsdoc.org/
 */
console.log(19 == '19');
// even if one is number && other is text : true
// compare value only

console.log(19 === '19');
// compare value with type

var Miyaav = {
	printFirstName: function(){
		console.log("My name is Miyaav");
		console.log(this === Miyaav);
	}
};

Miyaav.printFirstName();

// the default calling context is global
function doSomethingWorthless()
{
	console.log("\nOmg");
	console.log(this === global);
}

doSomethingWorthless();