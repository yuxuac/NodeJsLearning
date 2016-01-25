var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	// Must call this.
	next();
});

// Static server, no need to create different file type handlers
app.use(express.static("./public"));
app.use(express.static("./view"));
app.use(express.static("./view/dictionary"));

// default page
app.get("/", function(req, res){
	res.redirect('./index.html');
});

/*
	***** dictionary-api *****
*/
// GET
app.get("/dictionary-api", function(req, res){
	res.json(skierTerms);
});

// POST
app.post("/dictionary-api", function(req, res){
	skierTerms.push(req.body);
	res.json(skierTerms);
});

// DELETE
app.delete("/dictionary-api/:anyName", function(req, res) {

	// javascript filter here.
	skierTerms = skierTerms.filter(function(definition) {
		return definition.term.toLowerCase() !== req.params.anyName.toLowerCase();
	});
	res.json(skierTerms);
});

app.get("/dictionary", function(req, res){
	res.redirect('./dic-index.html');
});

app.listen(3000);

console.log("Express is running on port:3000.");

module.experts = app;