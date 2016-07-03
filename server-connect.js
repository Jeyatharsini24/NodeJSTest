/**
'connect' - server side framework
to work with 'connect', need to install connect module:
in the project open terminal -> enter "npm install connect" command.
It will create a folder named node_modules which consists 'connect' module
*/

var connect = require('connect');
var http = require('http');

var app = connect(); // create a dispatcher to handle request

function handleRequest(request,response,next) // next : to denote the next method to run after this method
{
	console.log("Handle Request");
	next(); // by calling like this, it invokes the next method passed inside app.use
}

function handleRequestSecond(request,response,next) // next : to denote the second method to run after this method
{
	console.log("Handle Request second");
}

app.use(handleRequest);
app.use(handleRequestSecond);

http.createServer(app).listen(8888);
console.log('Server is running...');


