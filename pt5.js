const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question('Berapa kali diulang? ', (frequensi) => {
    frequensi = parseInt(frequensi);

    for (let i = 0; i < frequensi; i++) {
        if (frequensi>10){
            console.log('frequensi terlalu besar')
            return input.close()
        }
        console.log(i + 1);
    }

    input.close();
});