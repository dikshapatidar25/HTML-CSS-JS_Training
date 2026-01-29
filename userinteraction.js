            //All javascript code will come here
            console.log("This is a simple java script inside my webpage!")
            
            function helloWorld()
            {
                console.log("Hello world")
            }
            function confirmDialog()
            {
            let decision = window.confirm("Is it OK?")
            console.log(decision)
            }

            function confirmDialog1()
            {
                let remove = confirm("Remove all data?")
                let message = remove ? "Deleting Data" : "Cancelled"
                console.log(message)
            }
            function promptDialogExample()
            {
                let name = window.prompt("What is your name?", "John Doe")
                name = name ? name : "anonymous"
                let age = prompt("Hello " + name + " how old are you?")
                alert(name + " is " + age + " years old")
            }

// // IF ElSE

// IF Statement

// let isUserReady = confirm("Are you ready?")
// console.log(isUserReady)
// if (isUserReady)
// {
// alert("User ready!")
// }

// let unitPrice = 10
// let pieces = prompt("How many pieces do you order?", 0)
// if (pieces > 0)
// {
// let total = unitPrice * pieces
// console.log(total)
// }

// let userAge = 23
// let isFemale = false
// let points = 703
// let cartValue = 299
// let shippingCost = 9.99
// if (userAge > 21)
// {
// // if (cartValue >= 300 || points >= 500)
// if(userAge > 21 && (cartValue >= 300 || points >= 500))
//     {
//         shippingCost = 0
//     }
// }
// console.log(shippingCost)


// IF ELSE Statement

// let num = 10
// if (num > 0)
//     {
//     console.log("The number is positive.")
//     }
// let num1 = -5
// if (num <= 0)
//     {
//     console.log("Positive")
//     }
// else 
//     {
//     console.log("Negative")
//     }

// let age = prompt("Enter your age:")
// if (age >= 18)
//     {
//     console.log("You are an adult.")
//     }
// else
//     {
//     console.log("You are a minor.")
//     // }

// let number = prompt("Enter a number", 0)
// if (number < 10)
//     {
//     alert("<10")
//     }
// else if (number < 30)
//     {
//     alert("<30")
//     }
// else if (number < 60)
//     {
//     alert("<60")
//     }
// else if (number < 90)
//     {
//     alert("<90")
//     }
// else if (number < 100)
//     {
//     alert("<100")
//     }
// else if (number == 100)
//     {
//     alert("100")
//     }
// else
//     {
//     alert(">100")
//     }


// With Cnditional Operaator

// let price = 100
// let shippingCost = price > 50 ? 0 : 5
// console.log(`price = ${price}, shipping = ${shippingCost}`)

// let start = confirm("Start?")
// start ? alert("Here we go!") :alert("Aborted")

// let start = confirm("Start?")
// let message = start ? "Here we go!":"Aborted"
// alert(message)


// let age = 20
// let message = (age >= 18) ? "You are an adult." : "You are a minor."
// console.log(message)

// let number = 2
// let result = (number % 2 === 0) ? "Even" : "Odd"
// console.log(result)

// let isLoggedIn = false
// let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please log in."
// console.log(welcomeMessage)

// let score = 55
// let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" :
// (score >= 60) ? "D" : "F"
// console.log(grade)


// // The switch ... case statement
// let gate = prompt("Choose gate: a, b, or c")
// let win = false
// switch (gate)
//     {
//     case "a":
//     alert("Gate A: empty")
//     break;
//     case "b":
//     alert("Gate B: main prize")
//     win = true
//     break
//     case "c":
//     alert("Gate C: empty")
//     break
//     default:
//     alert("No gate " + String(gate))
//     }

// if (win) 
//     {
//     alert("Winner!")
//     }

// let number = 4
// switch (number)
// {
//     case 1:
//     console.log("One")
//     break
//     case 2:
//     console.log("Two")
//     break
//     case 3:
//     console.log("Three")
//     break
//     default:
//     console.log("Unknown number")
// }

// Control Flow- Loop

// console.log(total)
// console.log(0)
// console.log(10)
// console.log(20)
// console.log(30)
// console.log(40)
// console.log(50)
// console.log(60)
// console.log(70)
// console.log(80)
// console.log(90)

// let n = 0
// console.log(n)
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10


// while loop

// let n = 0;
// while(n < 91)
// {
// console.log(n);
// n += 10;
// }

// let isOver = false
// let counter = 1
// while (isOver != true)
// {

//     let continueLoop = confirm(`[${counter}] Continue the loop?`);
//     isOver = continueLoop === true ? false : true;
//     counter = counter + 1;

// }
// alert("Complete the loop!")

// while(!isOver)
// {
//     isOver = !confirm(`[${counter++}] Continue the loop?`)
// }
// alert("Complete the loop!")

// let fruits = ["apple", "banana", "mango"]
// let index = 0
// let myLine=" "
// while (index < fruits.length)
// {
// console.log(fruits[index])
// myLine +=fruits[index]+""
// index++
// }
// console.log(fruits.join(" "))

// let num = 2
// let str=" "
// while (num <= 20)
//     {
  
//     num += 2
//     str +=num
//     str+=" "
//     }
// console.log(str)


// let num=20
// while(num >=1)
// {
//     console.log("Num:",num)
//     num -=2
// }

//The do ... while loop
// let isOver
// let counter = 1
// do
//     {

//     isOver = !confirm('[${counter++}] Continue the loop?')

//     }
// while (!isOver)

// let condition = false;
// while(condition)
//     {

//     console.log("A while loop iteration.") // never executed

//     }
// do
//     {

//     console.log("A do ... while loop iteration.") // executed once

//     }
// while (condition)
//     console.log("Out of the loop")


// let text = "Divya"
// let i = 0
// do
//     {
//     console.log(text[i])
//     i++
//     }
// while (i < text.length)


// for loop
// for (let i = 0; i < 10; i++)
//     {
//     console.log(i)
//     }

// let values = [10, 30, 50, 100]
// let sum = 0
// for(let index = 0; index < 4; index++)
// {
// sum += values[index]
// console.log(sum)
// }
// console.log(sum)// 190

// let numbers = [2, 5, 8, 11, 14]
// let evenCount = 0
// for (let i = 0; i < numbers.length; i++)
// {
// if(numbers[i] % 2 === 0)
// {
// evenCount++
// }
// }
// console.log("Even numbers count:", evenCount)


// let fruits = ["apple", "banana", "mango", "grape"]
// for(let i = fruits.length - 1; i >= 0; i--)
// {
// console.log(fruits[i])
// }

// Loops and arrays
// let names = []
// let isOver = false
// while (!isOver)
// {
// let name = prompt("Enter another name or press cancel.")
// if (name != null)
//     {
//     names.push(name)
//     }
// else
//     {
//     isOver = true
//     }
// }

// for (let i = 0; i < names.length; i++)
// {
// console.log(names[i])
// }

// let values = [10, 30, 50, 100]
// console.log("----Forward------")

// for (let i = 0; i < values.length; i++)
//     {
//     console.log(values[i]); // -> 10, 30, 50, 100
//     }

// console.log("----Backward------")

// for (let i = values.length - 1; i > 0; i--)
//     {
//     console.log(values[i]); // -> 100, 50, 30, 10
//     }
// console.log("----Altevative----")

// for (let i = 0; i < values.length; i += 2)
//     {
//     console.log(values[i]); // -> 10, 50
//     }


// // for ... of :
// let values = [10, 30, 50, 100]
// let sum = 0;
// for (let i = 0; i < values.length; i++)
//     {
//     sum += values[i]
//     }
// console.log(sum)

// let values = [10, 30, 50, 100]
// let sum = 0
// for(let number of values)
//     {
//     sum += number;
//     }
// console.log(sum)


// let cities = [
// { name: "New York", population: 18.65e6 },
// { name: "Cairo", population: 18.82e6 },
// { name: "Mumbai", population: 19.32e6 },
// { name: "São Paulo", population: 20.88e6 },
// { name: "Mexico City", population: 21.34e6 },
// { name: "Shanghai", population: 23.48e6 },
// { name: "Delhi", population: 25.87e6 },
// { name: "Tokyo", population: 37.26e6 }
// ];
// for (let city of cities)

// {
//     if(city.population>20e6)
// console.log("city:"+city.name+" | Population:"+city.population)
// }



// let names = ["Alice", "Bob", "Charlie"]
// for (let name of names)
// {
// console.log(name)
// }

// let fruits = ["apple", "banana", "mango"]
// for (let fruit of fruits)
// {
// console.log(fruit)
// }



// for ... in:

// let user =
// {
// name: "Calvin",
// surname: "Hart",
// age: 66,
// email: "CalvinMHart@teleworm.us"
// }
// for(let key in user)
// {
// console.log("Key:",key)
// console.log("Value:",user[key])

// }

// let user = { name: "Swati", age: 25 }
// for (let key in user)
//     {
//     console.log(`${key}: ${user[key]}`)
//     }

// const array1 = ["a", "b", "c"]
// for (const element of array1)
// {

// console.log(element)

// }




// Break and Continue

// let i =0
// while(true)
// {
//     console.log(i)
//     i++
//     console.log("...")
//     if(i>=5)
//     {
//         console.log("now Braking")
//         break
//         console.log("breaked now")

//     }
// }
// console.log("Ecited the lop with break")


// for(let i=0; i<10;i++)
// {
//     if(i==3)
//     {
//         continue
//     }
//     console.log("i:",i)
// }


// let fruits = ["apple", "banana", "mango", "orange", "grapes"];
// for (let i = 0; i < fruits.length; i++)
// {
// if (fruits[i] === "mango")

//     {

//     console.log("Mango found at index " + i);
//     break

//     }
//     console.log("Fruit:",fruits[i])
// }
// console.log("outide the loop!")

// for (let i = 1; i <= 10; i++)
// {
// if (i % 2 !== 0)
//     {
//     continue;
//     }
// console.log(i)
// }



// // Function
// let temperatures
// let sum
// let meanTemp
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17,
//  16]
// sum = 0;
// for (let i = 0; i < temperatures.length; i++)
// {
// sum += temperatures[i]
// }
// meanTemp = sum / temperatures.length;
// console.log(`mean: ${meanTemp}`)
// console.log("-------------")
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18,
// 17, 16]
// sum = 0
// for (let i = 0; i < temperatures.length; i++) {
// sum += temperatures[i]
// }
// meanTemp = sum / temperatures.length
// console.log(`mean: ${meanTemp}`)

// Declaring functions
// let temperatures;
// let sum;
// let meanTemp;
// function getMeanTemp()
// {
// sum = 0;
// for (let i = 0; i < temperatures.length; i++)
// {
// sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// }
// console.log(meanTemp)

// Calling functions :
// showName()
// function showName()
// {
// console.log(name)
// }
// let name = "Alice"

// let temperatures
// let sum
// let meanTemp
// function getMeanTemp() {
// sum = 0;
// for (let i = 0; i < temperatures.length; i++)
// {
// sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// }
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
// 20, 19, 17, 16];
// getMeanTemp();
// console.log('mean: ${meanTemp}',meanTemp);
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21,
// 19, 18, 17, 16];
// getMeanTemp();
// console.log('mean: ${meanTemp}',meanTemp)



// function welcomeMsg(name)
// {
// return ("Hello " + name + " welcome to Uraan");
// }
// let nameVal = "User"
// console.log(welcomeMsg(nameVal))
// function sayHello()
// {
// console.log("Hello, world!");
// }
// console.log("About to call the function...");
// sayHello();
// console.log("Function call finished.");
// function showMessage()
// {
// alert( 'Hello everyone!' );
// }
// showMessage()


// Functions - Local variables
// let temperatures
// let meanTemp
// function getMeanTemp()
//     {
//     let sum = 0
//     for (let i = 0; i < temperatures.length; i++)
//     {
//     sum += temperatures[i]
//     }
//     meanTemp = sum / temperatures.length
//     }
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23,
// 21, 20, 19, 17, 16]
// getMeanTemp()
// console.log(`mean: ${meanTemp}`)
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26,
// 24, 21, 19, 18, 17, 16]
// getMeanTemp()
// console.log(`mean: ${meanTemp}`)


// function getMeanTemp(temperatures)
// {
// let sum = 0;
// for (let i = 0; i < temperatures.length; i++)
// {
// sum += temperatures[i];
// }
// return sum / temperatures.length;
// }
// let result = getMeanTemp([12, 13, 14])
// console.log(`mean: ${result}`)

// let userName = 'John'
// function showMessage()
// {
// let message = 'Hello, ' + userName;
// alert(message)
// }
// showMessage()



// The return statement :
// function showMsg()
// {
// console.log("message 1");
// return
// console.log("message 2");
// }
// showMsg()


// function getTrue()
// {
// return true;
// }
// let test = getTrue()
// console.log(test);

// let temperatures;
// let meanTemp;
// function getMeanTemp() {
// let sum = 0;
// let result;
// for (let i = 0; i < temperatures.length; i++)
// {
// sum += temperatures[i];
// }
// result = sum / temperatures.length;
// return result;
// }
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
// 20, 19, 17, 16];
// meanTemp = getMeanTemp();
// console.log('mean: ${meanTemp}');
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
// 21, 19, 18, 17, 16];
// meanTemp = getMeanTemp();
// console.log('mean: ${meanTemp}')


// function getMeanTemp()
// {
// let sum = 0;
// for (let i = 0; i < temperatures.length; i++)
// {
// sum += temperatures[i];
// }
// return sum / temperatures.length
// }


// function getTrue()
// {
// return true;
// }
// let test = getTrue();
// console.log(test);


// function showMsg()
// {
// console.log("This will be displayed.");
// return;
// console.log("This will NEVER be displayed.");
// }
// showMsg()


// Parameters
// function add(first, second)
// {
// return first + second;
// }
// let result = add(5, 7)
// console.log(result)

// let names = ["Alice", "Bob", "Eve", "John"];
// let name = getElement(names, 2)
// console.log(name)

// function getMeanTemp(temperatures)
// {
// let sum = 0;
// for (let i = 0; i < temperatures.length; i++)
// {
// sum += temperatures[i];
// }
// return sum / temperatures.length;
// }
// let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23,
// 25, 25, 23, 21, 20, 19, 17, 16];
// console.log(`mean: ${getMeanTemp(day1)}`);
// let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29,
// 29, 27, 26, 24, 21, 19, 18, 17, 16];
// console.log(`mean: ${getMeanTemp(day2)}`)

// Shadowing
// function add(first, second)
// {
// return first + second;
// }
// let first = 10, second = 20, third = 40, fourth = 80;
// console.log(add(first, second))
// console.log(add(second, third))
// console.log(add(third, fourth))

// let a = 100, b = 200, c = 300;
// function test(a)
// {
// let b = 10;
// console.log(a);
// console.log(b);
// console.log(c);
// }
// test(1);
// console.log(a)
// console.log(b)
// console.log(c)

// Functions as first-class members 

// function showMessage(message)
// {
// console.log('Message: ${message}')
// }
// let sm = showMessage
// sm("This works!"); // -> Message: This works!
// console.log(typeof sm); // -> function

// function doNothing()
// {
// return undefined;
// }
// let a = doNothing(); // assign result of function call
// let b = doNothing; // assign a function
// console.log(typeof a); // -> undefined
// console.log(typeof b); // -> function

// function add(a, b)
// {
// return a + b
// }
// function multiply(a, b)
// {
// return a * b
// }
// function operation(func, first, second)
// {
// return func(first, second)
// }
// console.log(operation(add, 10, 20))
// console.log(operation(multiply, 10, 20))

// Function Expression:
// function add(a, b)
// {
// return a + b
// }
// let myAdd = add;
// console.log(myAdd(10, 20))
// console.log(add(10, 20))

// let myAdd = function(a, b)
// {
// return a + b;
// }
// console.log(myAdd(10, 20))

// function operation(func, first, second)
// {
// return func(first, second);
// }
// let myAdd = function(a, b)
// {
// return a + b
// }
// console.log(operation(myAdd, 10, 20));
// console.log(operation(function(a, b)
// {
// return a * b;
// }, 10, 20))

// // Parameters validation :
// function getMeanTemp(temperatures)
// {
// if (!(temperatures instanceof Array))

// {

// return NaN;
// }
// let sum = 0;
// for (let i = 0; i < temperatures.length; i++)

// {

// sum += temperatures[i];

// }

// return sum / temperatures.length;
// }
// console.log(getMeanTemp([10, 20, 30]));
// console.log(getMeanTemp("not an array"))


// // Callbacks :
// function addNumbers(a, b)
// {
// if (typeof a !== "number" || typeof b !== "number")

// {

// return "Invalid input: numbers expected";
// }
// return a + b;
// }
// console.log(addNumbers(5, 7));
// console.log(addNumbers("5", 7));

// let inner = function()
// {
//     console.log('inner 1');
// }
// let outer = function(callback)
// {
//     console.log('outer 1');

//     callback();
//     console.log('outer 2');
// }
// console.log('test 1');
// outer(inner);
// console.log('test 2');

// function calculate(a, b, operation)
// {

// return operation(a, b)

// }
// function add(x, y)
// {

// return x + y

// }
// function subtract(x, y)
// {

// return x - y

// }
// console.log(calculate(5, 3, add))
// console.log(calculate(5, 3, subtract))


// Asynchronous callbacks   setTimeout – Delayed Callback :
// console.log("Start")
// setTimeout(function()
// {

// console.log("This runs after 1 second")

// }, 1000);
// console.log("End")

// setInterval – Repeated Asynchronous Callback :
// let counter = 0;
// console.log("Start")
// let intervalId = setInterval(function()
// {
// console.log("Repeating:", ++counter);
// }, 1000);
// setTimeout(function()
// {
// clearInterval(intervalId);
// console.log("Stopped");
// }, 5500);
// console.log("End")

// window.addEventListener("click", function()
// {
// console.log("clicked!");
// })

// Arrow functions:

//Filter function 
// let array =[1,2,3,4,5,6,7,8,9,10]
// let evenArray = array.filter(function(element)
// {
//     if(element%2 !==0)
//     {
//         return true
//     }
//     return false
// })
// console.log(array)
// console.log(evenArray)

// let array = ["Aditya","sandeep","Diksha","George","Chandresh","Anjali"]

// let result = array.filter(function(name) 
// {
//   return name !== "Aditya" && name !== "Diksha" && name !== "Chandresh";
// })

// console.log(result)


// Map Function

//// Map Function

// let array = ["Aditya","sandeep","Diksha","George","Chandresh","Anjali"]

// let newArray = array.map(function(elemnet)
// {
//     if (elemnet==="Aditya")
//         return"Aditya Gupta"
//     return elemnet+"__"

// })
// console.log(array)
// console.log(newArray)


// let array = [10, 20, 30, 40, 50, 60];

// let newArray = array.map(function(element) 
// {
  
//         return element +2     // Modify one specific number (like "Aditya" before)
// })

// console.log(array)
// console.log(newArray)

// function sum(a,b)
// {
//         return a+b
// }
// console.log(sum(5,3))
// let newSum = (a,b) => a+b
// console.log(newSum(5,4))

// // Arrow Function
// let names = ['Alice', 'Eve', 'John'];
// function showName(element)
// {

// console.log(element);

// }
// names.forEach(showName); // -> Alice, Eve, John


// let multiply = (a, b) => a * b
// console.log(multiply(4, 3))
// let add = (a, b) =>
// {
// let result = a + b
// return result
// }
// console.log(add(10, 5))

// let square = x => x * x;
// console.log(square(5));


// // RECURSION
// function factorial(n)
// {
// return n > 1 ? n * factorial(n - 1) : 1
// }
// console.log(factorial(5))


// MODULE 6
// ERROR AND EXCEPTION
// let multiply = (a, b) => a + b;
// let result = multiply(10, 20);
// console.log(result)

// try...catch:
// try
// {
// console.log('abc');
// conole.log('abc');
// }
// catch (error)
// {
// console.log(error.message);
// }

// try
// {
// console.log("Start");
// conole.log("Oops!");
// console.log("This won't run");
// }
// catch (error)
// {
// console.log("Caught an error:");
// console.log(error.message);
// }
// console.log("Program continues...")



// ///Errors without exceptions:

// console.log(100 / 0); // -> Infinity
// console.log(100 * "2"); // -> 200
// console.log(100 * "abc"); // -> NaN
// console.log(Math.pow("abc", "def")); // -> NaN

// let result = 100 / 0
// console.log(result)

// let value = 100 * "xyz"
// if (isNaN(value))
// {
// console.log("Error: Result is not a number.")
// }

// let array =1
// if (array instanceof Array)
// {
//     console.log("Yes, we got the Array")

// }
// else{
//     console.log("Error:Not an Array!!!")
// }
// console.log("Yes, we got the Array")



// The try ... catch statement - Examples:
// let a=-2;
// try{
//     a=-2
// }
// catch(error)
// {
//     if(error instanceof ReferenceError){
//         console.log("Reference Error, reset a to -2")

//     }
// else
// {
//     console.log("Other error-"+error);
// }
// }
// console.log(a)

// let a = 10;
// try
// {
// a = 5;
// }
// finally
// {
// console.log("finally",a);
// }
// console.log("Outside",a);

// let a = 10;
// try
// {
// a = b; // ReferenceError
// }
// catch (error)
// {
// console.log("An Error!")
// }
// finally
// {
// console.log("Finally!")
// }
// console.log("otside",a)

// let a = 10;
// try
// {
//     a = b
// }
// catch (error)
// {
//     try
//     {
//         console.log(b);
//     }
// catch(error2)
//     {
//         console.log("Second catch!",error2);
//     }
// }
// finally
// {
//     console.log("Finally!");
// }



// console.log("start");
// try
// {
// throw 100;
// }
// catch (error)
// {
// console.log(error);
// }
// console.log("end");




// console.log("start");
// throw 100;
// console.log("end")

// console.log("start");
// throw ReferenceError("This is my custom Reference eror");
// console.log("end")

// function factorial(n)
// {
// let result = 1;
// for (; n > 1; n--)
// {
// result = result * n;
// }
// return result;
// }
// console.log(factorial(3));
// console.log(factorial(5));
// console.log(factorial(8));
// console.log(factorial(20));
// console.log(factorial(1000));

// function factorial(n)
// {
// if (n > 20)
// {
// throw new RangeError("Max value 20");
// }
// let result = 1;
// for (; n > 1; n--)
// {
// result = result * n;
// }
// return result;
// }
// console.log(factorial(20));
// console.log(factorial(1000));



// Testing and debugging your code :
// function average(a, b)
// {
// return a + b / 2;
// }
// console.log(average(2, 10));
// console.log(average(5, 5));


// function largest(a, b, c)
// {
// if (a > b && a > c)
// {
// return a;
// }
// else if (b > a && b > c)
// {
// return b;
// }
// else
// {
// return c;
// }
// }

// console.log(largest(1, 1, 2));
// console.log(largest(1, 2, 3));
// console.log(largest(3, 2, 1));
// console.log(largest(2, 2, 1));


// DEBUGGING
// console.log("Before debugger");
// debugger;
// console.log("After debugger");


// function outer()
// {
// let name = "outer";
// let str = inner();
// return str;
// }
// function inner()
// {
// let name = "inner";
// return "Hello !";
// }
// console.log("before outer() call");
// // debugger;
// console.log(outer());
// console.log("after outer() call");




// MEASURING CODE EXECUTION TIME
// let part = 0;
// console.time('Leibniz');
// for (let k = 0; k < 10000000; k++)
// {
// part = part + ((-1) ** k) / (2 * k + 1);
// }
// console.timeEnd('Leibniz'); // -> Leibniz: 456.60498046875 ms
// let pi = part * 4;
// console.log(pi); // -> 3.1415925535897915


// TROUBLESHOTTING
// let end = 2;
// for(let i=1; i<end; i++)

// {
//     debugger;
//    console.log(i);
//  }

// let counter = 0;
// let maxValue = 10;
// let result = 1;
// debugger;
// for (counter = 0; counter < maxValue; counter++)
// {
//     console.log(result);
//     result *= maxValue - counter - 1;
// }
// console.log("Final result: ", result);


// // MODULE 7 CLASSES AND OBJECT
// console.log(typeof 2.5);
// console.log(typeof "one two three");
// console.log(typeof false);

// let nr = 2.5;
// nr = nr / 2;
// console.log(typeof nr);


// let a = [10, 20, "en to tre", true, 50];
// a[4] = a[4] * 2;
// console.log(a[0]);
// console.log(a[2]);
// console.log(a[4]);

// let sampleObject =
// {
// id: 10,
// delay: 20,
// name: "en to tre",
// isPresent: true,
// delay: 50
// };
// sampleObject.delay = sampleObject.delay * 2;
// console.log(sampleObject.id);
// console.log(sampleObject.name);
// console.log(sampleObject.delay);


//  let contact={}
// console.log("Contact: ",contact)
// console.log(typeof contact)
// contact.tel= "2034567473385"
// console.log(contact)
// console.log(contact.tel)
// console.log("Contact: ",contact)
// console.log(typeof contact)

// contact["#code"]= 1234
// console.log(contact["#code"])  // Flexibility

// contact["email.work"]="abc@work.com"
// contact["email.personal"]="def@work.com"

// console.log(contact["email.work"])
// console.log(contact["email.personal"])

// contact["first name"]= "Additya"
// console.log(contact["first name"])

// let contact =
// {
// email_1: "RonaldSMurphy@freepost.org",
// email_2: "rsmurphy@briazz.com"
// };
// for(i=1; i<=2; i++)
// {
// let key = "email_" + i;
// console.log(key);
// console.log(contact[key]);
// }

// let contact= {}
// let email = prompt("Enter email...")
// let count=1
// while(email)
// {
//     contact["email_"+count]= email
//     count++
//     email = prompt("Enter email...")
// }
// console.log("contact",contact)
// for(let count1 =1; count1<=Object.keys(contact).length; count1++)
// {
//     console.log(contact["email_"+count1])
// }




// Enumeration "for ... in" Example:
// let contact =
// {
//     tel: "207-662-5412",
//     email: "RonaldSMurphy@freepost.org"
// };
//     for(x in contact)
// {
// // print property name
//     console.log(x);
// }
// console.log (x+": "+contact[x])

// // The Object.keys method:
// let propArray = Object.keys(contact)
// console.log("propArray:",propArray)

// contact.tel = "+91 9856258645"
// console.log("contact.tel:",contact.tel)
// contact.name = "Payal"
// console.log("contact.name:",contact.name)


// var point1 = {x: 10, y: 20};
// var point2 = {x: 10, y: 20};
// console.log(point1 === point2);
// let point3 = point1;
// console.log(point1 === point3);    
// point1.x=30
// console.log("point1.x:" , point1.x);  
// console.log("point3.x:" ,point3.x);    


// let point0 = {x:10, y: 20 };
// let point1 = point0; // copy reference
// let point2 = {};
// Object.assign(point2, point0); // copy properties into the new object
// console.log(point2.x);
// console.log(point2.y);
// console.log(point1 === point0); // true
// console.log(point1 === point2); // false


// point1.x=30
// point1.y=50
// console.log("point1.x:",point1.x)
// console.log("point1.x:",point1.x)
// console.log("point2.y:",point1.y)
// console.log("point2.y:",point1.y)

// console.log(point1 === point0); // true
// console.log(point1 === point2); // false

// let point3 = {};
// Object.assign(point3, point0, {z: 100})
// console.log(point3.x)
// console.log(point3.y)
// console.log(point3.z)
// console.log("point3:",point3); 


// let point4 = {};
// Object.assign(point4, point3, {z: 120});
// console.log("point4:",point4); 

// let reallyEmptyObject = Object.create(null);
// console.log("reallyEmptyObject :",reallyEmptyObject)
// console.log(typeof reallyEmptyObject.constructor);



// let point = {
//     x:0,
//      y:0
//      printX()
//      {

//      }

// let coloredPoint = {color: "red"};
// console.log("point:",point)
// console.log("point.__proto__:",point.__proto__)
// console.log("coloredPoint:",coloredPoint)
// console.log("coloredPoint.__proto__:",coloredPoint.__proto__)
// console.log("Before changing proto of colouredPoint object:")
// console.log("coloredPoint.x:",coloredPoint.x)
// coloredPoint.__proto__ = point;

// console.log("point:",point)
// console.log("point.__proto__:",point.__proto__)
// console.log("coloredPoint:",coloredPoint)
// console.log("coloredPoint.__proto__:",coloredPoint.__proto__)



// console.log("object.getOwnPropertynmaes(coloredPoint):",Object.getOwnPropertyNames(coloredPoint))
// console.log("coloredPoint.color:",coloredPoint.color)
// console.log("coloredPoint.x:",coloredPoint.x)

// coloredPoint.x = 100; // new property
// console.log(coloredPoint.x);
// console.log(point.x);
// console.log(Object.getOwnPropertyNames(coloredPoint));

// point.y = 200;
// console.log(coloredPoint.y);
// console.log(point.y);
// console.log(point.printX())
// console.log(coloredPoint.printX())

// figure =
// {
// getType: function()
// {
//     return this.type ? this.type : "unknown";
// }
// };
// let circle =
// {
//     type: "circle",
//     center: {x:0, y:0},
//     radius: 100
// };
// circle.__proto__ = figure;

// let proto=Object.getPrototypeOf(circle)
// console.log("proto of circle:",proto)
// Object.setPrototypeOf(circle,figure)
// proto = Object.getPrototypeOf(circle)
// console.log("proto of circle:",proto)
// console.log(circle.getType())

// class ABC
// {
//     a
// }
// class DEF extends ABC{
//     b
// }
// class GHI extends DEF
// {
//     c
// }
// let abc =new ABC()
// let def =new DEF()
// let ghi =new GHI()

// console.log("abc instanceof ABC:",abc instanceof ABC)
// console.log("abc instanceof DEF:",def instanceof DEF)
// console.log("abc instanceof GHI:",ghi instanceof GHI)

// console.log("abc instanceof DEF:",ghi instanceof DEF)
// console.log("abc instanceof ABC:",ghi instanceof ABC)
// console.log("abc instanceof object:",abc instanceof Object)

// console.log("def instanceof GHI:",def instanceof GHI)

// console.log(abc.a)
// abc.a=24
// console.log()

// Destructor
// let myObject ={
//     a:1,
//     b: 2,
//     c:"c"
// }
// console.log("myObject:",myObject)
// console.log("a:",myObject.a)
// console.log("b:",myObject.b)
// console.log("c:",myObject.c)

// let{a,c} = myObject 
//  console.log("a:",a)
//   console.log("c:",c)




// class Vehicle
// {
//     id
//     position
//     status
//     time
//     #latitude
//     #longitude

//     constructor({id, latitude,longitude})
//     {
//         this.id = id
//         this.position= {latitude,longitude}
//         this.status = "unavailable"
//     }
//     set position({latitude,longitude})
//     {
//         console.log("setting position values!")
//         this.time = Date.now()
//         this.#longitude = longitude
//         this.#latitude = latitude
//     }
//     get position()
//     {
//         console.log("Getting Position now!")
//         return{
//             latitude: this.latitude,
//             longitude: this.longitude
//         }
//     }
// }

// print()
// {
//     console.log("id:",this.id)
//     console.log("Position:",this.position)
//     console.log("Time:",this,time)

// }

// let vehicle= new Vehicle({longitude:18.21345,latitude:59.367628,id:"AL1024"})
// vehicle.position = {longitude:18.21345,latitude:59.367628}
// console.log("Vechicle:",vechicle.position)
// console.log("_---------")
// vehicle.print()

// class Car extends Vehicle
// {
//      constructor({color,gears,id,latitude, longitude})
//      {
//         super({id,latitude,longitude})
//         this.color = color
//         this.gears = gears
//      }
//      print()
//      {
//         super.print()
//         console.log("color:", this.color)
//         console.log("gears:", this.gears)

//      }
// }
// console.log("-_------")
// let toyota = new Car({color:"Black",gears: 7,id:"ABC", latitude:45.157,longitude:12.55878})
// toyota.print()


// class AlmostEmptyClass 
// {
//     constructor(sth) 
//     {
//         console.log(sth)
//     }
//     sayHi() 
//     {
//         console.log("Hi!")
//     }
//     static sayHello() 
//     {
//         console.log("Hello!")
//     }
// }
// let almostEmptyObject = new AlmostEmptyClass(120) // 120
// almostEmptyObject.sayHi() // -> Hi!
// //almostEmptyObject.sayHello() // error
// AlmostEmptyClass.sayHello() // -> Hello!


// class Vehicle 
// {
//     constructor({id, latitude, longitude})
//     {
//         this.id = id
//         this.status = "unavailable"
//         this.setPosition({latitude, longitude})
//     }
//     setPosition({latitude, longitude})
//     {
//         this.time = Date.now()
//         this.longitude = longitude
//         this.latitude = latitude
//     }
//     getPosition() 
//     {
//         return{
//             latitude: this.latitude,
//             longitude: this.longitude
//         }
//     }
//     static isSameId(v1, v2)
//     {
//         return v1.id === v2.id
//     }

//     static isSameLongitude(v1, v2)
//     {
//         return v1.longitude === v2.longitude
//     }
// }

// Vehicle.isSameId =  function(v1, v2) 
// {
//     return v1.id === v2.id
// }


// let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"})
// let vehicle2 = new Vehicle({longitude: 0, latitude: 0, id: "AL1024"})
// let vehicle3 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1026"})
// console.log("Vehicle.isSameId(vehicle1, vehicle2)", Vehicle.isSameId(vehicle1, vehicle2)) // -> true
// console.log("Vehicle.isSameId(vehicle1, vehicle3)", Vehicle.isSameId(vehicle1, vehicle3)) // -> false
// console.log("Vehicle.isSameLongitude(vehicle1, vehicle2)", Vehicle.isSameLongitude(vehicle1, vehicle2))
// console.log("Vehicle.isSameLongitude(vehicle1, vehicle3)", Vehicle.isSameLongitude(vehicle1, vehicle3))


// Classes vs. constructors

// class TestClass
// {
// constructor(arg)
// {
//     this.arg = arg;
//     console.log(this.arg)
// }
// showSth()
//     {
//         console.log("I'm prototyped!")
//     }

// static showSth()
// {
//     console.log(`Hi, I'm static!`)
// }
// }

// let TestClass = function(arg)
// {
// this.arg = arg
// console.log(this.arg)
// }


// TestClass.prototype.showSth = function()
// {
// console.log("I'm prototyped!")
// };

// TestClass.showSth = function()
// {
// console.log(`Hi, I'm static!`)
// }


// let test = new TestClass("Hello")
// test.showSth()  
// TestClass.showSth() 
// console.log(test instanceof TestClass)



// Built in object

// let n = new Number(100.123);
// console.log("n:",n)
// let fixed = n.toFixed(2)
// console.log("fixed:",fixed)

// let test1 = Number.isInteger(100)
// console.log("test1:",test1)


// let test2 = n.isInteger(100); // -> n.isInteger is not afunction
// console.log("test2:",test2)


let  batch = "javascript + ReactJS"
console.log("Include Example:", batch.toLocaleLowerCase().includes("reactjs"))
console.log("Indexof Example",batch.toLowerCase().indexOf("a"))
console.log("Indexof Example",batch.toLowerCase().lastIndexOf("a"))
console.log("Indexof Example",batch.toLowerCase().charAt(15))

console.log("substr check:",batch.substr(4,5))
console.log("substring check:",batch.substring(4,10))
console.log("substring check:",batch.substring(4,-2))

console.log("slice check:",batch.slice(4,5))

let num = "123456789"
console.log("Include Example:",num.includes("5"))