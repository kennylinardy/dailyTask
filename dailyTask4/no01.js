const  { sum, sum2 } = require("./penjumlahan")

const readline = require('readline');
const { log } = require("console");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

console.log('=== No 01 ===');
rl.question('Angka pertama yang mau dijumlahkan :  ', (angka1) => {
    rl.question('Angka kedua yang mau dijumlahkan : ', (angka2) => {
        const result = sum(parseInt(angka1), parseInt(angka2));
        console.log(result); 
        rl.close();
    })
});
