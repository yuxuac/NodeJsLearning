var questions = [
    "what is your name?",
    "what is your fav hobby?",
    "what is your preferred programming language?"
];

var answers = [];

function ask(i) {
    process.stdout.write(`${questions[i] }`);
    process.stdout.write("    >    ");
}

process.stdin.on('data', function (data) {
    //process.stdout.write(data.toString().trim() + '\n');
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function () {
    console.log(`Hi, ${answers[0]} Go ${answers[1]} write code with ${answers[2]}`);
})

ask(0);