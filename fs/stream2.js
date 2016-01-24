var fs = require('fs');
var fileName = './chatlog.txt';

var stream = fs.createReadStream(fileName, 'UTF-8');

var data = "";

stream.once("data", function() {
	console.log("Started reading file.");
});

stream.on("data", function(chunk) {
	process.stdout.write(` chunk: ${chunk.length} | `);
	data += chunk;
});

stream.on("end", function(){
	console.log(`Finished reading file ${data.length}`);
})

/*

fs.readFile('./chatlog.txt', 'utf-8', function(err, data){
	if(err){
		throw err;
	}else{
		//console.log(data);
		console.log(`File read ${data.length}`);
	}
});

console.log('Reading file...');*/