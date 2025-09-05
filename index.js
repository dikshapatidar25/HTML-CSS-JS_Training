// "use strict";
// console.log("Hello ")
// let and var for variable

// let height=165
// console.log(height)

// let height=1000
// let anotherHeight= height
// console.log(anotherHeight)
// console.log(height)
// console.log("height")
// console.log("height:"+height)


// var length
// console.log(length)

// length=566
// console.log(length)

// let weight       //Declaration
// weight =100      //initilization
// console.log(weight)  //acceing the variable

// "use strict";
// count = 18; // -> Uncaught ReferenceError: height is not defined
// console.log(count);


// let steps = 100;
// console.log(steps); // -> 100
// steps = 120; // -> 120
// console.log(steps);
// steps = steps + 200;
// console.log(steps); // -> 320

// let greeting = "Hello!";
// let counter = 100;

// console.log(greeting); // -> Hello!
// greeting = 1;
// console.log(greeting); // -> 1

// greeting = "Hello!";
// greeting = greeting + counter ;
// console.log(greeting); // -> Hello!100



// CONSTANT
// const name="Diksha"
// console.log("constant:",name)

// name= "Khushi"
// console.log("constant:",name)

// const age 
// console.log("Age:",age)



// VARIABLES
//PROGRAMING BLOCK
// let counter;
// console.log(counter) // -> undefined
// { //local scope //programming block
//     counter = 1;
//     {
//         console.log(counter);// -> 1
//     }
//     let count= 2
//     console.log("count:",count)

//     var number =10
//     console.log("Number:",Number)
// }
// //count=3
// console.log("Count:",count)  //erroneous

// //number=12
// counter = counter + 1;
//     console.log("Number:",Number)

// console.log(counter);// -> 2





// VARIABLE  SCOPE ND PROGRAM BLOCK

// let height = 180;
// {
//   let weight = 70;
//   console.log(height); // -> 180
//   console.log(weight); // -> 70
// }
// console.log(height); // -> 180
// console.log(weight); // -> Uncaught ReferenceError: weight is not defined

// let height2 = 200; // Renamed to avoid redeclaration error
// {
//   let weight = 100;
//   {
//     let info = "tall";
//     console.log(height2); // -> 200
//     console.log(weight);  // -> 100
//     console.log(info);    // -> tall
//   }
//   console.log(height2); // -> 200
//   console.log(weight);  // -> 100
//   console.log(info);    // -> Uncaught ReferenceError: info is not defined
// }
// var height3 = 180; // Renamed to avoid redeclaration error
// {
//   var weight = 70;
//   console.log(height3); // -> 180
//   console.log(weight);  // -> 70
// }
// console.log(height3); // -> 180
// console.log(weight);  // -> 70



// // FUNCTION
// function testFunction()
// {
// console.log("Hello");
// console.log("World");
// }

// console.log("let's begin:"); // -> let's begin:
// console.log("Hello"); // -> Hello
// console.log("World"); // -> World
// console.log("and again:"); // -> and again:
// console.log("Hello"); // -> Hello
// console.log("World"); // -> World
// console.log("and once more:"); // -> and once more:
// console.log("Hello"); // -> Hello
// console.log("World"); // -> World


// function testFunction()
// {
// console.log("Hello");
// console.log("World");
// }
// console.log("let's begin:");
// testFunction();
// console.log("and again:");
// testFunction();
// console.log("and once more:");
// testFunction();

// var counter = 100;         //declear
// function testFunction()    //#function definition
// {
// var counter = 200;         //#same named variable
// console.log(counter);
// }
// console.log(counter); // -> 100
// testFunction(); // -> 200
// console.log(counter); // -> 100



// // HOISTING
// var height = 180;
// console.log(height); // -> 180
// console.log(weight); // -> undefined
// var weight = 70;
// console.log(weight); // -> 70

// var weight;
// var height = 180;
// console.log(height); // -> 180
// console.log(weight); // -> undefined
// weight = 70;
// console.log(weight); // -> 70



// DATA TYPES
//  (TYPE OF OPERATOR)

// let year = 1990;
// console.log(typeof year); // -> number
// console.log(typeof 1991); // -> number
// let name = "Alice";
// console.log(typeof name); // -> string
// console.log(typeof "Bob"); // -> string
// let typeOfYear = typeof year;
// console.log(typeOfYear); // -> number
// console.log(typeof typeOfYear); // -> string

//  PRIMITIVE DATA TYPE 
// (BOOLEAN)

// let isDataValid = true;
// let isStringTooLong = false;
// let isGameOver = false;
// continueLoop = true;
// console.log(false); // -> false
// console.log(typeof false); // -> boolean
// console.log(isDataValid); // -> true
// console.log(typeof isDataValid); // -> boolean

// (BOOLEAN)
// const year = 1991;
// let delayInSeconds = 0.00016;
// let area = (16 * 3.14);
// let halfArea = area / 2;
// console.log(year); // -> 1991;
// console.log(typeof year); // -> number;

// (Number)
// let a = 10; // decimal - default
// let b = 0x10; // hexadecimal
// let c = 0o10; // octal
// let d = 0b10; // binary
// console.log(a); // -> 10
// console.log(b); // -> 16
// console.log(c); // -> 8
// console.log(d); // -> 2
// let x = 9e3;
// let y = 123e-5;
// console.log(x); // -> 9000
// console.log(y); // -> 0.00123

// let a = 1 / 0;
// let b = -Infinity;
// console.log(a); // -> Infinity
// console.log(b); // -> -Infinity
// console.log(typeof a); // -> number
// console.log(typeof b); // -> number
// let s = "it's definitely not a number";
// let n = s * 10;
// console.log(n); // -> NaN
// console.log(typeof n); // -> number

// BIGLNT
// let big = 1234567890000000000000n;
// let big2 = 1n;
// console.log(big); // -> 1234567890000000000000n
// console.log(typeof big); // -> bigint
// console.log(big2); // -> 1n
// console.log(7n / 4n); // -> 1n

// (STRING)

// let country = "Malawi";
// let continent = 'Africa';
// console.log(country); // -> Malawi
// console.log(typeof country); // -> string
// console.log(continent); // -> Africa
// console.log(typeof continent); // -> string

// let message1 = "The vessel 'Mars' called at the port.";
// let message2 = 'Cyclone "Cilida" to pass close to Mauritius.';
// console.log(message1); // -> The vessel 'Mars' called at the port.
// console.log(message2); // -> Cyclone "Cilida" to pass close to Mauritius.

// let message1 = 'The vessel \'Mars\' called at the port.';
// let message2 = "Cyclone \"Cilida\" to pass close to Mauritius.";
// console.log(message1); // -> The vessel 'Mars' called at the port.
// console.log(message2); // -> Cyclone "Cilida" to pass close to Mauritius.
// let path = "C:\\Windows";
// console.log(path); // -> C:\Windows

// let path = "C:\\Windows" - "Windows";
// console.log(path); // -> NaN
// let test = "100" - "10";
// console.log(test); // -> 90
// console.log(typeof test); // -> number

//  test = "100" + "10";
// console.log(test); 
// console.log(typeof test); // -> number

// test = "100" * "10";
// console.log(test); // -> 90
// console.log(typeof test); // -> number

// test = "100" / "10";
// console.log(test); // -> 90
// console.log(typeof test); // -> number

// let country = "Malawi";
// let continent = "Africa";
// let sentence = `${country} is located in ${continent}.`;
// console.log(sentence); // -> Malawi is located in Africa.

// function myFunction()
// {

// }
// myFunction()
// console.log(console)

// console.time();
// console.log("test console"); // -> test console
// console.timeEnd(); // -> default: 0.108154296875 ms

// let river = "Mekong";
// let character = river.charAt(4);
// console.log(character); // -> n

// // len string
// console.log(river.length)

// slice
// let str= "my name is Diksha"
// let str1="my-name-is-Diksha"
// console.log(str.length)
// console.log("--"+str.slice(3,7)+"--")
// console.log("--"+str.slice(3)+"--")
// console.log(str1.split("--"))
// console.log(str.split(""))
// console.log(str.split("s"))
// console.log(str.split("D"))

// let declaredVar;
// console.log(typeof declaredVar); // -> undefined
// declaredVar = 5;
// console.log(typeof declaredVar); // -> number
// declaredVar = undefined;
// console.log(typeof declaredVar); // -> undefined
// // The undefined value can also be returned by the typeof operator when a non-existent variable is used as an argument.
// console.log(typeof notDeclaredVar); // -> undefined
// console.log(notDeclaredVar); // -> Uncaught ReferenceError:

// (NULL)
// let someResource;
// console.log(someResource); // -> undefined
// console.log(typeof someResource); // -> undefined
// someResource = null;
// console.log(someResource); // -> null
// console.log(typeof someResource); // -> object

// TYPE CONVERSION
// const str = String()
// const num = Number()
// const bool = Boolean()
// console.log(str) // ->
// console.log("Type of str:",typeof str)// -> 42n

// console.log(num) // -> 0
// console.log("Type of num:",typeof num)// -> 42n

// console.log(bool) // -> false
// console.log("Type of bool:",typeof bool) // -> 42n

// const big1 = BigInt(42)
// console.log(big1)
// console.log("Type of big1:",typeof big1) // -> 42n
// const big2 = BigInt() // -> Uncaught TypeError: Cannot convert undefined to a BigInt

// Const num = 42
// console.log(("num:",num))
// const strFromNum1 = String(num)
// console.log("type of strFromNum1:",strFromNum1)

// const strFromNum2 = String(8)
// const strFromBool = String(true)
// const numFromStr = Number("312")
// const boolFromNumber = Boolean(0)

// CONVRT to NUMBER
// console.log(Number(42)); // -> 42
// console.log(Number("11")); // -> 11
// console.log(Number("0x11")); // -> 17
// console.log(Number("0o11")); // -> 9
// console.log(Number("0b11")); // -> 3
// console.log(Number("12e3")); // -> 12000
// console.log(Number("Infinity"));// -> Infinity
// console.log(Number("text")); // -> NaN
// console.log(Number(14n)); // -> 14
// console.log(Number(123456789123456789123n)); // - > 123456789123
// console.log(Number(true)); // -> 1
// console.log(Number(false)); // -> 0
// console.log(Number(undefined)); // -> NaN
// console.log(Number(null));// -> 0`

// Convert to Boolean
// console.log(Boolean(true)); // -> true
// console.log(Boolean(42)); // -> true
// console.log(Boolean(0)); // -> false
// console.log(Boolean(NaN)); // -> false
// console.log(Boolean("text")); // -> true
// console.log(Boolean("")); // -> false
// console.log(Boolean(undefined)); // -> false
// console.log(Boolean(null)); // -> false

// Convert to BigInt
// console.log(BigInt(11)); // -> 11n
// console.log(BigInt(0x11)); // -> 17n
// console.log(BigInt(11e2)); // -> 1100n
// console.log(BigInt(true)); // -> 1n
// console.log(BigInt("11")); // -> 11n
// console.log(BigInt("0x11")); // -> 17n
// console.log(BigInt(null)); // -> Uncaught TypeError: Cannot convert null to a BigInt
// console.log(BigInt(undefined)); // -> Uncaught TypeError: Cannot convert undefined to a BigInt
// console.log(BigInt(NaN)); // -> Uncaught RangeError: The number NaN cannot

// Implicit Conversions
const str1 = 42 + "1";
console.log(str1); // -> 421
console.log(typeof str1); // -> string
const str2 = 42 - "2";
console.log(str2); // -> 41
console.log(typeof str2); // -> number