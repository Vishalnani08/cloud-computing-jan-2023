console.log('Below is the content of hello.txt');
console.log('\n');

const callBackToHandleFileContent = function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data);
}

const fs = require('fs');
fs.readFile('hello.txt', 'utf-8', callBackToHandleFileContent)