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

window.addEventListener("click", function()
{
console.log("clicked!");
})

