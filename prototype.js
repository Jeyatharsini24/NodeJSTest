/**
 * http://usejsdoc.org/
 */
function User()
{
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer)
	{
		targetPlayer.life += 1;
		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	}
}

var user1 = new User();
var user2 = new User();

user1.name = "user1";
user2.name = "user2";

user1.giveLife(user2);
console.log("User1: " + user1.life);
console.log("User2: " + user2.life);

// function is added to all instances
User.prototype.uppercut = function uppercut(targetPlayer)
{
	targetPlayer.life -= 3;
	console.log(this.name + " just uppercutted " + targetPlayer.name);
}

user2.uppercut(user1);

console.log("User1: " + user1.life);
console.log("User2: " + user2.life);

// attribute is added to all instances
User.prototype.magic = 60;
console.log(user1.magic);
console.log(user2.magic);