const person = [
    {
      "_id": "640b3d7f4efa30f6c22881c5",
      "isActive": true,
      "age": 39,
      "eyeColor": "brown",
      "name": "Dana Carpenter",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d7f30f847be5ef40c15",
      "isActive": false,
      "age": 28,
      "eyeColor": "blue",
      "name": "Saundra Shaffer",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d7f5019f63c915861fb",
      "isActive": false,
      "age": 29,
      "eyeColor": "green",
      "name": "Santiago Chan",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d7f1167022184fcbf9e",
      "isActive": false,
      "age": 21,
      "eyeColor": "green",
      "name": "Galloway Gordon",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d7f0c7aaf3cdb4b7683",
      "isActive": false,
      "age": 33,
      "eyeColor": "blue",
      "name": "Lela Prince",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d7fbc160fa39b75a8ae",
      "isActive": true,
      "age": 21,
      "eyeColor": "brown",
      "name": "Wilda Oneal",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d7fb13aea6e19ad0c1a",
      "isActive": true,
      "age": 21,
      "eyeColor": "brown",
      "name": "Kaitlin Branch",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d7fe4cc19b61192b915",
      "isActive": false,
      "age": 29,
      "eyeColor": "blue",
      "name": "Travis Gilliam",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d7f59cb9a6c790687d9",
      "isActive": false,
      "age": 37,
      "eyeColor": "blue",
      "name": "Tia Quinn",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d7fd39ccaae510e687d",
      "isActive": true,
      "age": 21,
      "eyeColor": "green",
      "name": "Conner Carroll",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d7fa81b55066cb1fc68",
      "isActive": false,
      "age": 20,
      "eyeColor": "blue",
      "name": "Hallie Goff",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d7f092f3a0b20045a46",
      "isActive": true,
      "age": 23,
      "eyeColor": "blue",
      "name": "Marquez Bartlett",
      "gender": "male",
      "favoriteFruit": "apple"
    }
  ]

  // print person yang mengandung huruf W di name nya
  for (let i = 0; i < person.length; i++) {
    if (person[i].name.includes("W")) {
      // console.log(person[i])
    };
  }

  // Array numbers
  let arr =  [1, 2, 3, 4, 5, 6, 7]
  // console.log(`panjang index dari array ini : ${arr.length}`);

  // console.log(`Isi dari array ini adalah ${arr}`);

  // Object
  // let obj = {
  //   name: 'Imam',
  //   age: 22,
  //   city: 'Bandung'
  // }

  // console.log(obj);

  // Array of Object
  let arrObj = [
    {
      name: 'Imam',
      age: 22,
      city: 'Bandung'
    },
    {
      name: 'Ferdy',
      age: 18,
      city: 'Mars',
      hobby: [
        'futsal',
        'anime',
        'belajar'
      ]
    },
    {
      name: 'Fauzi',
      age: 16,
      city: 'Pluto'
    }
  ]

// Memanggil umur dari index kedua 
// console.log(arrObj[2].age);

// Memanggil hobby kedua dari index kedua arrObj
console.log(arrObj[1].hobby[0]);