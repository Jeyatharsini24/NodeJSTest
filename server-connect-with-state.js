/**
'connect' - server side framework
to work with 'connect', need to install connect module:
in the project open terminal -> enter "npm install connect" command.
It will create a folder named node_modules which consists 'connect' module
*/

var connect = require('connect');
var http = require('http');

var app = connect(); // create a dispatcher to handle request

function functionForState1(request, response)
{
	console.log('state1 has been requested');
}

function functionForState2(request, response)
{
	console.log('state2 has been requested');
}

app.use('/state1',functionForState1);// request for http://localhost:8888/state1 in browser will invoke
// 'functionForState1' function
app.use('/state2',functionForState2);// request for http://localhost:8888/state2 in browser will invoke
//'functionForState2' function

http.createServer(app).listen(8888);
console.log('Server is running...');


