// "use strict";
console.log("Hello ")
// let and var for variable

// let height=165
// console.log(height)

let height=1000
let anotherHeight= height
console.log(anotherHeight)
console.log(height)
console.log("height")
console.log("height:"+height)


var length
console.log(length)

length=566
console.log(length)

let weight       //Declaration
weight =100      //initilization
console.log(weight)  //acceing the variable

// "use strict";
count = 18; // -> Uncaught ReferenceError: height is not defined
console.log(count);


let steps = 100;
console.log(steps); // -> 100
steps = 120; // -> 120
console.log(steps);
steps = steps + 200;
console.log(steps); // -> 320

let greeting = "Hello!";
let counter = 100;

console.log(greeting); // -> Hello!
greeting = 1;
console.log(greeting); // -> 1

greeting = "Hello!";
greeting = greeting + counter ;
console.log(greeting); // -> Hello!100