var express = require('express');

var app = express();

var skierTerms = [
	{
		term: "Rip1",
		defined: "To move at a high rate of speed."
	},
	{
		term: "Rip2",
		defined: "sssdsdsd"
	},
	{
		term: "Rip3",
		defined: "545454fdfd"
	},
];

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	// Must call this.
	next();
});

// Static server, no need to create different file type handlers
app.use(express.static("./public"));

//
app.get("/dictionary-api", function(req, res){
	res.json(skierTerms);
});

app.listen(3000);

console.log("Express is running on port:3000.");

module.experts = app;