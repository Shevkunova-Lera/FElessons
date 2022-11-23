// let userAge = prompt("Введіть ваш вік")
// if(userAge <= 0){
//     alert("Ви ще не народились, тоді як в ввели свій вік?")
// }
// else if (userAge <= 11){
//     alert("Ви малюк");
// }
// else if (userAge > 11, userAge <= 17){
//     alert("Ви підліток");
// }
// else if (userAge > 17, userAge <= 59){
//     alert("Ви дорослий");
// }
// else if (userAge > 59){
//     alert("Ви пожилой");
// }

// let symbol = prompt("Введіть число від 0 до 9")
// switch(symbol) {
//     case '0':
//         alert(")");
//         break;
//     case '1':
//         alert("!");
//         break;
//     case '2':
//         alert("@");
//         break;
//     case '3':
//         alert("#");
//         break;
//     case '4':
//         alert("$");
//         break;
//     case '5':
//         alert("%");
//         break;
//     case '6':
//         alert("^");
//         break;
//     case '7':
//         alert("&");
//         break;
//     case '8':
//         alert("*");
//         break;
//     case '9':
//         alert("(");
//         break;
// }

// let a = Number(prompt("Введіть початок діапазону",""));
// let n = Number(prompt("Введіть кінець діапазону",""));
// let sum = 0;
// while (a <= n) {       
//         sum+=a;  
//         a++;
//     }
// alert(sum)

alert('Введіть 2 числа, щоб знайти найбільший спільний дільник')
let number_1 = prompt('Введіть перше число');
let number_2 = prompt('Введіть друге число');
let number_3;

calc(number_1, number_2)
alert('Найбільший спільний дільник чисел ' + number_1 + ' и ' + number_2 + ' буде: ' + number_3)

function calc(a, b) {
    let c;
    while (a != b) {
    if (a > b) {
        a = a - b;

    } else
    if (a < b) {
        c = a;
        a = b;
        b = c;
    }

    }
    return number_3 = a
}
