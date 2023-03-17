const { multiply } = require("./perkalian")

const readline = require('readline');
const { log } = require("console");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

console.log('=== No 03 ===');
rl.question('Angka pertama yang mau dikali :  ', (angka1) => {
    rl.question('Angka kedua yang mau dikali : ', (angka2) => {
        const result = multiply(parseInt(angka1), parseInt(angka2));
        console.log(result); 
        rl.close();
    })
});
