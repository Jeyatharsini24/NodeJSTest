/**
 * http://usejsdoc.org/
 */
var Bucky = {
	favFood : "omg",
	favMovie: "miyaav"
};

var Person = Bucky;
console.log(Person.favFood);
Person.favFood = "salad"
console.log(Person.favFood);
