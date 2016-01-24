var fs = require("fs");

var from = "./sample.md";
var to = "./sample1.md";

fs.renameSync(from, to);
console.log(from + ' was changed to ' + to);

fs.rename(to, from, function(err){
	if(err){
		throw err;
	}else{
		console.log(to + ' was changed to ' + from);
	}
});



