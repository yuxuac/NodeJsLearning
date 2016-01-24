var questions = [
	'What is your name?',
	'What is your fav hobby?',
	'What is your perferred programming language?'
];

var answers = [];

function ask (i) {
	process.stdout.write(questions[i] + ' > ');
}

ask(0);

process.stdin.on('data', function(data){
	answers.push(data.toString().trim());
	if(answers.length < questions.length){
		ask(answers.length);
	}else{
		process.exit();
	}
});

process.on('exit', function(){
	answers.forEach(function(item){
		console.log(item);
	});
});