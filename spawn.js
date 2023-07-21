const readline = require("readline");
const { stdin: input, stdout: output } = require('process');
const language = readline.createInterface({ input, output });
const { spawn } = require('child_process');

language.question('어떤 언어를 선택하시겠습니까? (1번은 Java, 2번은 Python)', (answer) => {
    const selected = (answer === '1') ? 'java' : 'python';
    const fileName = (answer === '1') ? 'Test.java' : 'test.py';
    
    const process = spawn(selected.toLowerCase(), [fileName]);

    process.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    process.stderr.on('data', (data) => {
        console.error(data.toString());
    });

    language.close();
});