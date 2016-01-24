var https = require('http');
var fs = require('fs');

var options = {
	hostname: "baidu.com",
	port: 80, 
	//path: "/wiki/Beijing",
	mehtod: "GET"
};

var req = https.request(options, function(res){
	var responseBody = [];

	console.log("Response from server started.");
	console.log(`Server status: ${res.statusCode} `);
	console.log("Response Headers: %j", res.headers);

	res.setEncoding("utf-8");

	res.once("data", function(chunk){
		console.log(chunk);
	});

	res.on("data", function(chunk){
		console.log(`--chunk-- ${chunk.length}`);
		responseBody.push(chunk);
	});

	res.on("end", function(){
		fs.writeFile("douban.html", responseBody.join(''), function(err){
			if(err){
				throw err;
			}
			console.log("File downloaded.");
		});
	});
});

req.on("error", function(err){
	if(err){
		console.log(`problem with request: ${err.message}`);
	}
})

req.end();