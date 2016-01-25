var fs = require('fs');
var http = require('http');
var path = require('path');

var data = require("./public/data");

http.createServer(function(req, res) {

	if(req.url === "/") {
		res.writeHead(200, {"Content-Type": "text/json"});
		res.end(JSON.stringify(data));
	} else if(req.url === "/instock") {
		listInStock(res);
	} else if(req.url === "/onorder") {
		listOnBackOrder(res);
	} else{
		res.writeHead(404, {"Content-Type" : "text/plain"});
		res.end("Whoops... data not found.");
	}

}).listen(3000);

console.log("Server is running on port 3000..");

function listInStock(res) {
	res.writeHead(200, {"Content-Type": "text/json"});
	var inStock = data.filter(function(item) {
		return item.id === 2;
	});

	res.end(JSON.stringify(inStock));
};

function listOnBackOrder(res) {
	res.writeHead(200, {"Content-Type": "text/json"});
	var onOrder = data.filter(function(item) {
		return item.id === 1
	});

	res.end(JSON.stringify(onOrder));
};