const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question('Berapa kali diulang? ', (apa) => {
    apa = parseInt(apa);

    for (let i = 0; i < apa; i++) {
        console.log(i + 1);
    }

    input.close();
});