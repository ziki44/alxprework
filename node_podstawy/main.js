// console.log('Hello World!')

// Typ Zmiennych

// String
// Number
// Boolean
// Object
// null/undefined


// Jak zapisujemy zmienne (3 sposoby)

// Scope globalny
// var name = "damian";

// Scope leksykalny (if, for)
// let name2 = 'Damian2';

// const nie mozna nadpisac, ale mozna dopisac/usunac dane ze srodka (w przypadku array lub obiektow)

// const name3 = 'Damian3';


// Typy zlozone

// Array

// const names = ['Damian', 'Paweł', 'Dominik'];

// Metody

// push - dodawanie
// names.push('Marcin');
// pop - usuwanie z konca listy
// names.pop()
// slice - tworzenie tablicy z innej tablicy przez wyciecie kilku elementow zdefiniowanych indeksem
// names.slice(0, 2);
// splice - usuniecie lub dodanie elementu
// names.splice(0, 1, 'Daniel');
// shift - usuniecie 1 elemenetu
// names.shift()
// unshift
// names.unshift(1, 2)

// concat - dodawanie do tablicy

// names.concat('Paweł')

// join - tworzenie tablicy ze stringa
// split - tworzenie stringa z tablicy
// includes - sprawdzenie czy tablica zawiera element



// forEach
// np. do sumowania wartości lub do przechodzenia przez elementy

// names.forEach(name => {
//   console.log(name);
// })

// map

// const arrayOfLetters = [];

// names.forEach(name => {
//   arrayOfLetters.push(name.length)
// });

// console.log(arrayOfLetters)

// const arrayOfLetters = names.map(name => {
//   return name.length
// });

// console.log(arrayOfLetters)

// filter

// const shopping = [
//   {
//     name: "banan",
//     price: 3.99
//   },
//   {
//     name: "Chleb",
//     price: 4.99
//   },
//   {
//     name: "Wiśnie",
//     price: 19.99
//   }
// ]

// const calculateMostExpensiveProducts = (price) => {
//   return shopping.filter(product => {
//     return product.price > price
//   })
// }

// const expensiveProducts = shopping.filter(product => {
//   return product.price > 10
// })

// console.log(expensiveProducts)


// 1. Za pomoca funkcji forEach, policz sume produktow
// 2. Oblicz cenę produktów (shopping), które w swojej nazwie mają literę e

// let resum = 0;
// shopping.forEach(product => {
//     resum += product.price
// })

// // console.log(`ZADANIE 1 - ${resum}`);

// let array = [];


// let resum2 = 0
// let arr = shopping.filter(product => {
//     if (product.name.includes("e")) {
//         resum2 += product.price
//     }
// })



// console.log(`ZADANIE 2 - ${resum2.toFixed(2)}`);






// sort
// reduce


// Properties

// .length dlugosc


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ćwiczenia forEach, map , filter 

// Mamy listę ksiązek

// 1. Przy uzyciu funkcji filter, wyswietl tablice ksiazek z kategorii adventure
// 2. Przy uzyciu funkcji filter, wyszukaj elementy, ktore maja w swojej nazwie ciag znakow 'er'
// 3. Przy uzyciu funkcji map, stworz tablice zawierajaca ile jest liter w nazwie ksiazki


// const books = [
//   {
//     name: "Harry Potter",
//     category: "adventure"
//   },
//   {
//     name: 'Alice in Wonderland',
//     category: 'fantasy'
//   },
//   {
//     name: 'Lord of the Rings',
//     category: 'fantasy'
//   }
// ]

// let adventureBooks = books.filter(item => item.category === "adventure")

// for (const val of adventureBooks) {
//   console.log(`ADVENTURE BOOKS - ${val.name}`);
// }

// let booksIncludeER = books.filter(item => {
//   return item.name.includes("er")
// })

// for (const val of booksIncludeER) {
//   console.log(`INCLUDES ER - ${val.name}`);
// }

// let numberOfLetters = books.map(item => item.name.length)

// for (const item of numberOfLetters) {
//   console.log(`NUMBER OF LETTERS- ${item}`);
// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////
// !------------------------------FUNKCJE ------------------------------------------------

// 1. Stworz funkcje multiply, ktorej zadaniem bedzie wymnozyc przez siebie 2 liczby

// multiply(3, 3) -> 9

// 2. Stworz funkcje, ktora zwroci liczbe znakow z danego stringa

// checkLetter('Damian') -> 6

// 3. Stworz funkcje findByCategory, ktora przyjmuje kolekcje i kategorie, a nastepnie wyszukaj wszystkie ksiazki, ktore maja podana kategorie.

// findByCategory(books2, 'adventure') -> [{ob1}]

// 4. Rozszerz zadanie 3 o warunek, ze jesli nie znajdziemy zadnej ksiazki o podanej kategorii, to funkcja wyswietli napis "No books"

// const books2 = [
//   {
//     name: "Harry Potter",
//     category: "adventure"
//   },
//   {
//     name: 'Alice in Wonderland',
//     category: 'fantasy'
//   },
//   {
//     name: 'Lord of the Rings',
//     category: 'fantasy'
//   }
// ]



// const multiply = (a, b) => a * b;

// console.log(`WYNIK MULTIPLY - ${multiply(2,2)}`);

// const checkLetter = (string) => string.length;

// console.log(`ILOŚĆ ZNAKÓW - ${checkLetter("Daniel")}`);

// const findByCategory = (collection, category) => collection.filter(item => item.category === category)

// console.log(findByCategory(books2, "fantasy"));

// // console.log(findByCategory(books2, "history").length === 0 ? "No book" :  findByCategory(books2, "history"));

// const findByCategoryNoBooks = (collection, category) => {
//   const arr = collection.filter(item => item.category === category)
//   return !!arr.length ? arr : "No books"
// };

// console.log(findByCategoryNoBooks(books2, "history"));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// !! ------------------------------------ Pozostałe funkcje w programowaniu funkcyjnym 


// ! ------- POZOSTALE FUNKCJE w PROG FUNKCYJNYM ----------

// find

const books4 = [
  {
    name: "Harry Potter",
    category: "adventure"
  },
  {
    name: 'Alice in Wonderland',
    category: 'fantasy'
  },
  {
    name: 'Lord of the Rings',
    category: 'fantasy'
  }
]

// Find sluzy do zlapania pierwszego elementu znalezionego

// const fantasyBook = books4.find(book => book.category === 'adventure')

// console.log(fantasyBook)

// reduce

const shopping3 = [
  {
    name: "banan",
    price: 3.99
  },
  {
    name: "Wiśnie",
    price: 19.99
  },
  {
    name: "Chleb",
    price: 4.99
  },
]

// const price3 = shopping3.reduce((accumulator, product) => {
//   console.log(accumulator);

//   return accumulator - product.price;
// }, 500)

// console.log(price3)

// Sort

// const sortedShoppingList = shopping3.sort((a, b) => {
//   return a.name > b.name ? 1 : -1;
// })

// console.log(sortedShoppingList)

// 1. Za pomocą funkcji sort, zwróc produkt, który jest najdrozszy
// 2. Za pomoca funkcji find, sprawdz cene chleba
// 3. Za pomoca funkcji reduce, sprawdz srednia wzrostu w klasie. W klasie sa 3 osoby [178, 164, 199]

const sortArr = shopping3.sort((a, b) => {
  return a.price > b.price ? 1 : -1; 
})

console.log(sortArr[sortArr.length -1]);

const breadPrice = shopping3.find(product => product.name === "Chleb");

console.log(breadPrice.price);

personHeight = [178, 164, 199]

const arr = personHeight.reduce((accumulator, person) => {
  return accumulator += person
}, 0)



console.log(arr/3);