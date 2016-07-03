// plain js has been written to work with browser
// nodejs : work with server

var http = require('http');
var fs = require('fs');

//404 response
function send404Response(response)
{
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: Page not found!");
	response.end();
}

// handle a user request
function onRequest(request,response)
{
	if(request.method == 'GET' && request.url == '/')// root
	{
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream('./index.html').pipe(response);
		// create a read stream for the index.html
		// which presents in this directory &
		// pass that to response object to send back to
		// the client which made request
	}
	else
	{
		send404Response(response);
	}
}

// onRequest is the listener for the server
// method to execute when there is a request
http.createServer(onRequest).listen(8888);
console.log("Omg.. Server is now running..");