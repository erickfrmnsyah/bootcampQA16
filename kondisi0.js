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
            console.log('frequensi tidak boleh 0')
            return input.close()
        }

    for (let i = 0; i < frequensi; i++) {
        console.log(i + 1);
    }

    input.close();
});