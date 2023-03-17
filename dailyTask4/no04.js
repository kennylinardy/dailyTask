const { divide } = require("./pembagian")

const readline = require('readline');
const { log } = require("console");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

console.log('=== No 04 ===');
rl.question('Angka pertama yang mau dibagi :  ', (angka1) => {
    rl.question('Angka kedua yang mau dibagi : ', (angka2) => {
        const result = divide(parseInt(angka1), parseInt(angka2));
        console.log(result); 
        rl.close();
    })
});
