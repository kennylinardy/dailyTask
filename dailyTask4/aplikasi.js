// import (sum) from './penjumlahan';

const  { sum, sum2 } = require("./penjumlahan")
const { minus, minus2 } = require("./pengurangan")

// console.log(sum2(10, 300));
// console.log(minus(100, 1));

const readline = require('readline');
const { log } = require("console");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });

console.log('=========== No1');
rl.question('Angka pertama yang mau dijumlahkan :  ', (angka1) => {
    rl.question('Angka kedua yang mau dijumlahkan : ', (angka2) => {
        const result = sum(parseInt(angka1), parseInt(angka2));
        console.log(result); 
        rl.close();
    })
});

console.log('=========== No2');
rl.question('Angka pertama yang mau dikurang :  ', (angka1) => {
    rl.question('Angka kedua yang mau dikurang : ', (angka2) => {
        const result = minus2(parseInt(angka1), parseInt(angka2));
        console.log(result); 
        rl.close();
    })
});

/*
1. Hasil tambah inputan user
2. Hasil kurang inputan user
3. Hasil kali inputan user
4. Hasil bagi inputan user
5. Hasil total harga kali kuantitas barang
*/