var fs = require('fs');

/*
fs.renameSync('./sample1.md','./sample2.md');

console.log('File renamed.');

if(!fs.existsSync('./ss')){
	fs.mkdirSync('./ss');
	console.log('Directory created.');
}*/

var file1 = "sample1.md";
var file2 = "sample2.md";

fs.renameSync(file1, file2);

fs.rename(file2, './ss/'+ file2, function(err){
	if(err){
		console.log(err);
	}else{
		console.log("sample2.md moved.");
	}
});