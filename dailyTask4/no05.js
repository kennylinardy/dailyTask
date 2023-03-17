const { totalPrice } = require("./items")

const readline = require('readline');
const { log } = require("console");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

console.log('=== No 05 ===');
rl.question('Harga barang yang diinginkan :  ', (angka1) => {
    rl.question('Total barang yang diinginkan : ', (angka2) => {
        const result = totalPrice(parseInt(angka1), parseInt(angka2));
        console.log(result); 
        rl.close();
    })
});
