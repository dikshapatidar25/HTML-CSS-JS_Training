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
// const str1 = 42 + "1";
// console.log(str1); // -> 421
// console.log(typeof str1); // -> string
// const str2 = 42 - "2";
// console.log(str2); // -> 41
// console.log(typeof str2); // -> number

// // OBJECT
// let testObj = 
// {
//     nr: 600,
//     str: "text"
// }
// console.log("testObj:",testObj)
// console.log(typeof testObj) // -> object
// console.log("nr:",testObj.nr)
// console.log("str:",testObj.str)

// let student_Diksha = 
// {
//     name: "Diksha",
//     course:"HTML",
//     contact:7773048771,
//     email:"asghh@.gmail.com"
// }
// let student_Khushi=
// {
//    name: "Khushi",
//     course:"REACT",
//     contact:7773058946,
//     email:"khushi@.gmail.com"
// } 
// console.log("Name:",student_Diksha.name)
// console.log("Name:",student_Diksha.course)
// console.log("Name:",student_Diksha.contact)
// console.log("Name:",student_Diksha.email)

// student_Diksha.contact=6862547617
// student_Diksha.email="diksha@gmail.com"

// console.log("Name:",student_Khushi.name)
// console.log("Name:",student_Khushi.course)
// console.log("Name:",student_Khushi.contact)
// console.log("Name:",student_Khushi.email)

// student_Diksha.age=20
// console.log("Diksha Age:",student_Diksha)
// console.log("Khushi Age:",student_Khushi)


// ARRAY

// a[0]=address of a+0(*2)=10  (*2 store 2byte implicit )
// a[1]=address of a+1(*2)=20
// a[2]=address of a+2(*2)=30
// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(days[0]); // -> Sun
// console.log(days[2]); // -> Tue
// console.log(days[5]); // -> Fri
// days[0] = "Sunday";
// console.log(days[0]); // -> Sunday
// let emptyArray = [];
// console.log(emptyArray[0]); // -> undefined

// let animals = [];
// console.log(animals[0]) // -> undefined
// animals[0] = "dog"
// animals[2] = "cat"
// console.log(animals[0]) // -> dog
// console.log(animals[1]) // -> undefined
// console.log(animals[2]) // -> cat

// let values = ["Test", 7, 12.3, false];
// console.log(typeof values)
// console.log(values[0])
// console.log(values[1])
// console.log(values[2])
// console.log(values[3])

// let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];

// console.log(names[0])
// console.log(names[0][1])
// console.log(names[1][1])
// console.log(names[0][1])

//  let user1 = 
// {
// name: "Calvin",
// surname: "Hart",
// age: 66,
// email: "CalvinMHart@teleworm.us"
// }
// let user2 =
// {
// name: "Mateus",
// surname: "Pinto",
// age: 21,
// email: "MateusPinto@dayrep.com"
// }
// let objArray=[user1,user2]
// console.log(objArray)
// console.log(objArray[1])
// console.log(objArray[1].surname)

// objArray[2]= {
//     name: "Diksha",
//     surname: "Patidar",
//     age: 21,
//     email: "diksha@dayrep.com"

// }
// console.log(objArray)
// console.log(objArray[2].name)

// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = "Sunday";
// console.log(typeof days); // -> object
// console.log(typeof day); // -> string
// console.log(days instanceof Array) // -> true
// console.log(day instanceof Array) // -> false
// console.log(day instanceof String)// -> false

// console.log("Days length:",days.length)
// console.log("objArray length:",objArray.length)
// days[7]="Someday"
// console.log("Days length:",days.length)

// console.log("Index of Wednesday",days.indexOf("Wed"))
// console.log("Index of Wednesday:",days.indexOf("Wednesday"))


// Push method
// let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.length); // -> 4
// names.push("Amelia")    //Add the element
// console.log(names.length); // -> 6
// console.log(names)
// console.log(names[3])
// console.log(names[4])
// console.log(names[5]) 


// UNshift method
// let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.indexOf("Mateo"))  // -> 2
// console.log(names.indexOf("Victor"))  // -> -1

// names.unshift("Victor")  //change the index position
// console.log(names.indexOf("Victor"))
// console.log(names)

// Pop method
// let names= ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.length); // -> 4
// let name = names.pop();
// console.log(names.length); // -> 3
// console.log(name); // -> Samuel
// console.log(names); // -> ["Olivia", "Emma", "Mateo"]

// SHIFT Method
// let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.length) // -> 4
// let name = names.shift()
// console.log(names.length) // -> 3
// console.log(name) // -> Olivia
// console.log(names) // -> ["Emma", "Mateo", "Samuel"]

//REVERSE Method
// let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// names.reverse();
// console.log(names);

// Slice Method
// let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// let n1 = names.slice(2)
// console.log(n1)
// let n2 = names.slice(1,3)
// console.log(n2)
// let n3 = names.slice(0, -1)
// console.log(n3)
// let n4 = names.slice(-1)
// console.log(n4)
// console.log(names) 

// concat Method

// let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// let otherNames = ["William", "Jane"];
// let allNames = names.concat( otherNames);
// console.log(names); // -> ["Olivia", "Emma", "Mateo","Samuel"]
// console.log(otherNames); // -> ["William", "Jane"]
// console.log(allNames); // -> ["Olivia", "Emma", "Mateo",
// "Samuel", "William", "Jane"]


// let name= ["Payal","Maya","Khuhi"]
// name1= name.concat(name)
// console.log(name1)

// Module3  Operator 
// //  Assignment operator
// let year= 2050;
// let newyear = year=2051;
// console.log("year:",year)
// console.log("newyear:",newyear)

// console.log(2 + 2 * 2)
// console.log(2 + (2 * 2))
// console.log((2 + 2) * 2)

// // Arithmetic Operator
// const x = 5;
// const y = 2;
// console.log("addition: ", x + y)
// console.log("subtraction: ", x - y)
// console.log("multiplication: ", x * y)
// console.log("division: ", x / y)
// console.log("division remainder :", x % y)
// console.log("exponent: ", x ** y)

// // Unary Arithmetic Operator
// let str = "123";
// let n1 = +str
// let n2 = -str
// let n3 = -n2;
// let n4 = +"abcd";
// console.log(`${str} : ${typeof str}`)
// console.log(`${n1} : ${typeof n1}`)
// console.log(`${n2} : ${typeof n2}`)
// console.log(`${n3} : ${typeof n3}`)
// console.log(`${n4} : ${typeof n4}`)

// // Unary increment and decrement operators
// let a= 10
// console.log("a:",a)
// console.log("a++:",a++)
// console.log("a:",a)
// console.log("--a:",++a)

// console.log("a:",a)
// console.log("a--:",a--)
// console.log("a:",a)
// console.log("--a:",--a)

// console.log(0.2 + 0.1)
// console.log(0.2 * 0.1)
// console.log(0.3 / 0.1)

// Compound Assignment operators
let x = 10;
x += 2;
console.log(x)
x -= 4;
console.log(x)
x *= 3;
console.log(x)
x /= 6;
console.log(x)
x **= 3;
console.log(x)
x %= 10;
console.log(x)

// Logical operators
// AND 
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// OR
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

const a = false;
const b = true;
const c = false;
const d = true;
console.log(a && b && c || d)
console.log(a && b && (c || d))