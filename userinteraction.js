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

for (let i = 1; i <= 10; i++)
{
if (i % 2 !== 0)
    {
    continue;
    }
console.log(i);
}
