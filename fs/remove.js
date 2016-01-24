var fs = require('fs');

// remove file sync
try{
	fs.unlinkSync("./ss/sample2.md");
	console.log('sample2.md was removed.');
}catch(err){
	console.log(err);
}

// remove file async
fs.unlink('./ss/sample3.md', function(err){
	if(err){
		console.log(err);
	}else{
		console.log('sample3 was removed.');
	}
});