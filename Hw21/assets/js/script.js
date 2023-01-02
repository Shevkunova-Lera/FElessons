//Task 1.1
// function functionName(parameters) {
//     // function body
//     // ...
// }
// const functionName = function(parameters) {
//     // function body
//     // ...
// };
// const functionName = (parameters) => {
//     // function body
//     // ...
// };
// const objectName = {
//     functionName(parameters) {
//       // function body
//       // ...
//     }
// };
// function FunctionName(parameters) {
//     // function body
//     // ...
// }

// const functionName = new FunctionName(arguments);

//Task 1.2
// function countArguments() {
//     console.log(arguments.length);
// }

//   countArguments(); // outputs: 0
//   countArguments(1, 2, 3); // outputs: 3
//   countArguments('a', 'b', 'c', 'd'); // outputs: 4

//Task 1.3
// function compareNumbers(num1, num2) {
//     if (num1 < num2) {
//         return -1;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// const num1 = prompt('Enter the first number:');
// const num2 = prompt('Enter the second number:');

// console.log(compareNumbers(num1, num2));

//Task 1.4
// function factorial(n) {
//     let result = 1;
//     for (let i = n; i > 1; i--) {
//       result *= i;
//     }
//     return result;
// }

// let n = prompt('Enter a number:');
// console.log(factorial(n));

//Task 1.5
// function combineDigits(digit1, digit2, digit3) {
//     return Number(`${digit1}${digit2}${digit3}`);
// }

// const digit1 = prompt('Enter the first digit:');
// const digit2 = prompt('Enter the second digit:');
// const digit3 = prompt('Enter the third digit:');

// console.log(combineDigits(digit1, digit2, digit3));

//Task 1.6
// function calculateArea(length, width) {
//     if (width === undefined) {
//     width = length;
//     }
//     return length * width;
// }

// let length = prompt("Enter the length:");
// let width = prompt("Enter the width:");

// let area = calculateArea(length, width);
// console.log(`The area is ${area}.`);

//Task 2.1
// function isPerfect(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//         sum += i;
//     }
//     }
//     return sum === num;
// }

// let num = Number(prompt("Enter a number:"));
// if (isPerfect(num)) {
//     console.log(`${num} is a perfect number.`);
// } else {
//     console.log(`${num} is not a perfect number.`);
// }

//Task 2.2
function isPerfectNum(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        sum += i;
    }
    }
    return sum === num;
}

function printPerfectNumbers(min, max) {
    for (let i = min; i <= max; i++) {
    if (isPerfectNum(i)) {
        console.log(i);
    }
    }
}

let min = Number(prompt("Enter the minimum number:"));
let max = Number(prompt("Enter the maximum number:"));
printPerfectNumbers(min, max);