var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	if(req.method === "GET") {
		res.writeHead(200, {"Content-Type" : "text/html"});
		fs.createReadStream("./public/form.html", "utf-8").pipe(res);
	} else if(req.method === "POST") {
		var body = [];

		req.on("data", function(chunk){
			body.push(chunk);
		});

		req.on("end", function(){
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(`
					<!DOCTYPE html>
					<html>
						<head>
							<title>Form Results</title>
						</head>
						<body>
							<h1>Your form Results</h1>
							<p>${body.join('')}</p>
						</body>
					</html>`);
		});
	}
	
}).listen(3000);

console.log("Form server listenning on port 3000");