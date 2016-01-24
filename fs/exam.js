/*
	1. Create a file
	2. Write some data, 5000 lines
	3. Rename it
	4. Move it to a non-existing sub folder.
	5. Read whole file and print
	6. Read file by stream and print each chunk's content and size.
	7. Clear all conent.
	8. Write your name in it 100 times and print it.
	9. Delete it
*/
var fs = require('fs');

var content = "Hello world.";
var folderName = "exam";
var fileName = "exam.log";
var badFileName = "examBad.log";
var encoding = "utf-8";
var linesOfData = 10000;


// 1. Create a file
console.log('1. Create a file');
fs.writeFileSync(fileName, `${1}: ${content} \r\n`, encoding);

// 2. Write some data, 5000 lines
console.log('\r\n2. Write some data, 5000 lines');
for(var i = 2 ; i <= linesOfData; i++){
	fs.appendFileSync(fileName, `${i}: ${content} \r\n`, encoding);
}
console.log("Write file done.");

// 3. Rename it
console.log('\r\n3. Rename it');
fs.renameSync(fileName, "helloWorld.log");
console.log('Rename file done.');
fs.renameSync("helloWorld.log", fileName);

// 4. Move it to a non-existing sub folder.
console.log('\r\n4. Move it to a non-existing sub folder.');
if(fs.existsSync(folderName)){
	console.log(`Folder ${folderName} already exists.`);
}else{
	fs.mkdirSync(folderName);
	console.log(`Folder create done: ${folderName} created.`);
}

fs.renameSync(fileName, folderName + '/' + fileName);
console.log(`Move file done: file '${fileName}' was moved to '${folderName}/${fileName}'`);

fs.renameSync(folderName + '/' + fileName, fileName);
console.log(`Move file back: file '${folderName}/${fileName}' was moved to '${fileName}'`);

// 5. Read whole file and print
console.log('\r\n5. Read whole file and print.');
try{
	var data = fs.readFileSync(fileName, encoding);
	console.log(`File read done: Length:${data.length}`);
}catch(err){
	console.log(err);
}

// 6. Read file by stream and print each chunk's content and size.
console.log('\r\n6. Read file by stream and print each chunk-s content and size.');
var stream = fs.createReadStream(fileName);
var data = [];

// Async call: data may display after all execution.
stream.once('data', function(){
	console.log(`Start reading file: '${fileName}'`);
});

// Async call: data may display after all execution.
stream.on('data', function(chunk){
	data.push(chunk);
	console.log(`Chunk read size: ${chunk.length}`);
})
// Async call: data may display after all execution.
stream.on('end', function(){
	console.log(`Read file '${fileName}' done. Total size:${data.join('').length}`);
})

// 7. Clear all conent.
console.log('\r\n7. Clear all conent.');
fs.writeFileSync(fileName, '');
console.log('File content was cleared.');

// 8. Write your name in it 100 times and print it.
console.log('\r\n8. Write your name in it 100 times and print it.');
for(var i = 0 ; i < 100 ; i++) {
	fs.appendFileSync(fileName, `${i} Cui`);
}
// Async call: data may display after all execution.
fs.readFileSync(fileName, encoding, function(err, data){
	if(err)
		console.log(err);
	else
		console.log(data)
});

// 9. Delete it
console.log('\r\n9. Delete it.');
fs.unlink(fileName, function(err){
	if(err)
		console.log(err);
	else
		console.log(`File '${fileName}' was deleted.`);
})

/*
	Async call will crush
fs.writeFile(badFileName, `${1}: ${content} \r\n`, encoding, function(err){
	if(err){
		console.log(err);
	}
});

for(var i = 2; i < linesOfData; i++){
	var j = i;
	var dataToWrite = `${j}: ${content} \r\n`;
	fs.appendFile(badFileName, dataToWrite, encoding, function(err){
		if(err){
			console.log(err);
		}else{
			console.log(`Write data:${dataToWrite}`);
		}
	});
}
*/

