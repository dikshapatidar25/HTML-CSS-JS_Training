// Tasks 1
// function div(a, b)
// {
//     if (b === 0) 
//     {
//         throw new RangeError("Cannot divide by zero!")
//     }
//     return a / b
// }

// try 
// {
//     console.log(div(10, 2))   
//     console.log(div(5, 0))
// } 
// catch (error) 
// {
//     console.error("Error:", error.message)
// }

// Tasks 2

// function divide(a, b) 
// {
//     if (b === 0) 
//     {
//         throw new RangeError("Cannot divide by zero!")
//     }
//     return a / b
// }

// let numbers = [10, 40, 0, 20, 50]

// for (let i = 0; i < numbers.length; i++) 
// {
//     try 
//     {
//         let result = divide(1000, numbers[i])
//         console.log(`1000 / ${numbers[i]} = ${result}`)

//     } 
//     catch (error)
//     {
//         console.log(error.message)
//     }
// }

// 1. Write code to throw an error if a number is negative.

function checkNegative(num) 
{
    if (num < 0) 
    {
        throw new Error("Number cannot be negative!")
    }
    return "Number is valid."
}

try 
{
    console.log(checkNegative(-5))
} 
catch (error) 
{
    console.log("Error:", error.message)
}


// 2. Write a function that takes a number and throws an error if it is not even.

function checkEven(num) 
{
    if (num % 2 !== 0) 
    {
        throw new  Error("Number  is even!")
    }
    return "Valid even number."
}

try 
{
    console.log(checkEven(7))
} 
catch (error) 
{
    console.log("Error:", error.message)
}

// 3. Create a calculator function that throws error on division by 0.

function divide(a, b) 
{
    if (b === 0) 
    {
        throw new Error("Cannot divide by 0!")
    }
    return a / b
}

try 
{
    console.log(divide(10, 0))
} 
catch (error) 
{
    console.log("Error:", error.message)
}

// 4. Write code to validate that input is a number using custom error.

function number(value) 
{
    if (isNaN(value)) 
    {
        throw new Error("Invalid input! Value must be a number.")
    }
    return "Valid number."
}

try 
{
    console.log(number("abc"))
} 
catch (error) 
{
    console.log("Error:", error.message)
}

// 5. Write code to validate user age. Throw an error if not between 0–100.

function validateAge(age) 
{
    if (age < 0 || age > 100) 
    {
        throw new Error("Age must be between 0 and 100.")
    }
    return "Valid age."
}

try 
{
    console.log(validateAge(150))
} 
catch (error) 
{
    console.log("Error:", error.message)
}
