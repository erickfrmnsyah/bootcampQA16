const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question('Berapa kali diulang? ', (frequensi) => {
    frequensi = parseInt(frequensi);
        if (frequensi>10){
            console.log('frequensi terlalu besar')
            return input.close()
        }
        if (frequensi<1){
            console.log('tidak ada output karena frequensi 0ad')
            return input.close()
        }

    for (let i = 0; i < frequensi; i++) {
        console.log(i + 1);
    }

    input.close();
});