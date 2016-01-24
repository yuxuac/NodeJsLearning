var fs = require('fs');

var files = fs.readdirSync('./ss1').forEach(function(fileName){
	fs.unlinkSync('./ss1/' + fileName);
});

console.log('files were all removed.');

fs.rmdir('./ss1', function(err){
	if(err){
		console.log(err);
	}else{
		console.log("directory was removed.");
	}
});