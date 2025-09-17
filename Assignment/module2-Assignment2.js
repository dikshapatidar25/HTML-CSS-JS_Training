// // QUESTION1
// let rosePrice = 8
// let roseQuantity = 70

// let lilyPrice = 10
// let lilyQuantity = 50

// let tulipPrice = 2
// let tulipQuantity = 120

// let roseValue = rosePrice * roseQuantity;
// let lilyValue = lilyPrice * lilyQuantity;
// let tulipValue = tulipPrice * tulipQuantity;

// let totalValue = roseValue + lilyValue + tulipValue;

// console.log("Rose – unit price:", rosePrice, ",rose quantity is:", roseQuantity, ",rose value is:", roseValue);
// console.log("Lily – unit price:", lilyPrice, ",lily quantity is:", lilyQuantity, ",lily value is:", lilyValue);
// console.log("Tulip – unit price:", tulipPrice, ",tulip quantity is:", tulipQuantity, ",tulip value is:", tulipValue);
// console.log("Total:", totalValue);


// // QUESTION2
// const rosePrice = 8;
// const lilyPrice = 10;
// const tulipPrice = 2;

// let roseQuantity = 70;
// let lilyQuantity = 50;
// let tulipQuantity = 120;

// let roseValue = rosePrice * roseQuantity;
// let lilyValue = lilyPrice * lilyQuantity;
// let tulipValue = tulipPrice * tulipQuantity;
// let totalValue = roseValue + lilyValue + tulipValue;

// console.log("=== Initial  ===");
// console.log("Rose – unit price:", rosePrice, ",rose quantity is:", roseQuantity, ",rose value is:", roseValue);
// console.log("Lily – unit price:", lilyPrice, ",lily quantity is:", lilyQuantity, ",lily value is:", lilyValue);
// console.log("Tulip – unit price:", tulipPrice, ",tulip quantity is:", tulipQuantity, ",tulip value is:", tulipValue);
// console.log("Total:", totalValue);

// roseQuantity -= 20; // 70 - 20 = 50
// lilyQuantity -= 30; // 50 - 30 = 20

// roseValue = rosePrice * roseQuantity;
// lilyValue = lilyPrice * lilyQuantity;
// tulipValue = tulipPrice * tulipQuantity;
// totalValue = roseValue + lilyValue + tulipValue;

// console.log("\n=== Updated ===");
// console.log("Rose – unit price:", rosePrice, ",rose quantity is:", roseQuantity, ",rose value is:", roseValue);
// console.log("Lily – unit price:", lilyPrice, ",lily quantity is:", lilyQuantity, ",lily value is:", lilyValue);
// console.log("Tulip – unit price:", tulipPrice, ",tulip quantity is:", tulipQuantity, ",tulip value is:", tulipValue);
// console.log("Total:", totalValue);


// // QUESTION 3
// let name1 = "Maxwell Wright"
// let phone1 = "(0191) 719 6495"
// let email1 = "Curabitur.egestas.nunc@nonummyac.co.uk"

// let name2 = "Raja Villarreal"
// let phone2 = "0866 398 2895"
// let email2 = "posuere.vulputate@sed.com"

// let name3 = "Helen Richards"
// let phone3 = "0800 1111"
// let email3 = "libero@convallis.edu"

// console.log(name1 + " / " + phone1 + " / " + email1);
// console.log(name2 + " / " + phone2 + " / " + email2);
// console.log(name3 + " / " + phone3 + " / " + email3);


// QUESTION 4
// === 1.  ===

// // Boolean
// let bool1 = true;              
// console.log(bool1);
// console.log(typeof bool1);

// let bool2 = Boolean(false);    
// console.log(bool2);
// console.log(typeof bool2);

// // Number
// let num1 =54;                
// console.log(num1);
// console.log(typeof num1);

// let num2 = Number(200);        
// console.log(num2);
// console.log(typeof num2);


// // BigInt
// let big1 = 1234n;  
// console.log(big1);
// console.log(typeof big1);            

// let big2 = BigInt(5678); 
// console.log(big2);
// console.log(typeof big2);  

// // String
// let str1 = "Hello";  
// console.log(str1);
// console.log(typeof str1); 

// let str2 = String("World");    
// console.log(str2);
// console.log(typeof str2); 

// // Undefined
// let undef1 = undefined; 
// console.log(undef1)
// console.log(typeof undef1); 
       
// let undef2;  
// console.log(undef2)
// console.log(typeof undef2);            


// // === 2.  ===
// // Boolean
// let booll1 = true;
// let booll2 = Boolean(false);
// console.log(`${booll1} [${typeof booll1}]`);
// console.log(`${booll2} [${typeof booll2}]`);

// // Number
// let numm1 = 1560;
// let numm2 = Number(42);
// console.log(`${numm1} [${typeof numm1}]`);
// console.log(`${numm2} [${typeof numm2}]`);

// // BigInt
// let bigg1 = 154n;
// let bigg2 = BigInt(5678);
// console.log(`${bigg1} [${typeof bigg1}]`);
// console.log(`${bigg2} [${typeof bigg2}]`);

// // String
// let strr1 = "Diksha";
// let strr2 = String("Patidar");
// console.log(`${strr1} [${typeof strr1}]`);
// console.log(`${strr2} [${typeof strr2}]`);

// // Undefined
// let undeff1 = undefined;
// let undeff2; 
// console.log(`${undeff1} [${typeof undeff1}]`);
// console.log(`${undeff2} [${typeof undeff2}]`);



// //  === 3.  ===

// // Start with a String
// let str = "1234";

// // Convert String -> Number
// let num = Number(str);

// // Convert Number -> BigInt
// let big = BigInt(num);

// // Convert BigInt -> Boolean
// let bool = Boolean(big);

// console.log(`"${str}" -> ${num} [${typeof num}] -> ${big} [${typeof big}] -> ${bool} [${typeof bool}]`);


// //  === 4 ===
// // Numbers
// console.log(10 + 20, `[${typeof (10 + 20)}]`);

// // Strings
// console.log("abc" + "xyz", `[${typeof ("abc" + "xyz")}]`);

// // Booleans
// console.log(true + false, `[${typeof (true + false)}]`);

// // BigInts
// console.log(100n + 200n, `[${typeof (100n + 200n)}]`);


// //  === 5.  ===

// // Number + String 
// let numStr = 10 + "5";
// console.log(numStr);

// // Boolean + Number 
// let boolNum = true + 5;
// console.log(boolNum);

// // Boolean + String 
// let boolStr = false + "hello";
// console.log(boolStr);

// // Number + BigInt 
// let numBig = 10n + BigInt(5);
// console.log(numBig);

// String + BigInt 
// let strBig = "Value: "+100n;
// console.log(strBig);

// // Undefined + Number 
// let undefNum = undefined + 10;
// console.log(undefNum);

// Null + Number 
// let nullNum = null + 5;
// console.log(nullNum);

// === 6. ===
// numb = 42 + + "1";
// console.log(numb, `[${typeof numb}]`);

// Task 1

// let ticket = 
// {
//   from: "Indore Junction",   
//   to: "Ujjain Junction",     
//   price: 100                 
// }
// console.log("From:", ticket.from)
// console.log("To:", ticket.to)
// console.log("Price:", ticket.price)

// let person = {}

// person.firstName = "Diksha"
// person.lastName = "Patidar"
// console.log("First Name:", person.firstName)
// console.log("Last Name:", person.lastName)

// Task 2

// let person = {}
// person.name = "Diksha"
// person.surname = "Patidar"
// console.log("Name:", person.name)
// console.log("Surname:", person.surname)

// // Task 3
// let books = [
//   {
//     title: "Speaking JavaScript",
//     author: "Axel Rauschmayer",
//     pages: 460
//   },
//   {
//     title: "Programming JavaScript Applications",
//     author: "Eric Elliott",
//     pages: 254
//   },
//   {
//     title: "Understanding ECMAScript 6",
//     author: "Nicholas C. Zakas",
//     pages: 352
//   }
// ];
// console.log(" Title:", books[0].title)
// console.log(" Author:", books[0].author)
// console.log(" Pages:", books[0].pages)
// console.log("--------------------")
// console.log(" Title:", books[1].title)
// console.log(" Author:", books[1].author)
// console.log(" Pages:", books[1].pages)
// console.log("--------------------")
// console.log(" Title:", books[2].title)
// console.log(" Author:", books[2].author)
// console.log(" Pages:", books[2].pages)

// // Task 4
// let books = [
//   {
//     title: "Speaking JavaScript",
//     author: "Axel Rauschmayer",
//     pages: 460
//   },
//   {
//     title: "Programming JavaScript Applications",
//     author: "Eric Elliott",
//     pages: 254
//   },
//   {
//     title: "Understanding ECMAScript 6",
//     author: "Nicholas C. Zakas",
//     pages: 352
//   }
// ];

// books.push(
//   {
//   title: "Learning JavaScript Design Patterns",
//   author: "Addy Osmani",
//   pages: 254
// })

// console.log("Total number of books:", books.length)
// console.log(books[0].title)
// console.log(books[1].title)
// console.log(books[2].title)
// console.log(books[3].title)

// Task 5
// let books = [
//   {
//     title: "Speaking JavaScript",
//     author: "Axel Rauschmayer",
//     pages: 460
//   },
//   {
//     title: "Programming JavaScript Applications",
//     author: "Eric Elliott",
//     pages: 254
//   },
//   {
//     title: "Understanding ECMAScript 6",
//     author: "Nicholas C. Zakas",
//     pages: 352
//   },
//   {
//     title: "Learning JavaScript Design Patterns",
//     author: "Addy Osmani",
//     pages: 254
//   }
// ]
// let lastTwoBooks = books.slice(-2)
// console.log("Copy the last two books to the new array:")
// console.log(lastTwoBooks)

// // Task 6
// let books = [
//   {
//     title: "Speaking JavaScript",
//     author: "Axel Rauschmayer",
//     pages: 460
//   },
//   {
//     title: "Programming JavaScript Applications",
//     author: "Eric Elliott",
//     pages: 254
//   },
//   {
//     title: "Understanding ECMAScript 6",
//     author: "Nicholas C. Zakas",
//     pages: 352
//   },
//   {
//     title: "Learning JavaScript Design Patterns",
//     author: "Addy Osmani",
//     pages: 254
//   }
// ]
// let totalPages = books[0].pages + books[1].pages + books[2].pages + books[3].pages
// console.log("Total number of pages in the collection:", totalPages)

// Task 5
// Original array of books
let books = [
  {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460
  },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
  },
  {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
  }
]

books.shift();
console.log("Total number of books after removal:", books.length)

console.log(books[0].title)
console.log(books[1].title)
console.log(books[2].title)










