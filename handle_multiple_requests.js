/**
 * http://usejsdoc.org/
 */
function placeAnOrder(orderNumber)
{
	console.log("Customer order: ",orderNumber);
	
	cookAndDeliverFood(function(){
		console.log("Delivered food order: ", orderNumber);
	});
}

// callback will be invoked after 5 second
// simulate a 5 second operations
function cookAndDeliverFood(callback)
{
	setTimeout(callback, 10000)
}

// Simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

