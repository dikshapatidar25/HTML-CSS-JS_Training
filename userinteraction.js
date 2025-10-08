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

let number = 4
switch (number)
{
    case 1:
    console.log("One")
    break
    case 2:
    console.log("Two")
    break
    case 3:
    console.log("Three")
    break
    default:
    console.log("Unknown number")
}

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