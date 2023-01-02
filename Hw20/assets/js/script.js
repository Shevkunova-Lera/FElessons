// //Task 1.1
let userAge = prompt("Введіть ваш вік")
if(userAge <= 0){
    alert("Ви ще не народились, тоді як в ввели свій вік?")
}
else if (userAge <= 11){
    alert("Ви малюк");
}
else if (userAge > 11, userAge <= 17){
    alert("Ви підліток");
}
else if (userAge > 17, userAge <= 59){
    alert("Ви дорослий");
}
else if (userAge > 59){
    alert("Ви пожилой");
}

// //Task 1.2
let symbol = prompt("Введіть число від 0 до 9")
switch(symbol) {
    case '0':
        alert(")");
        break;
    case '1':
        alert("!");
        break;
    case '2':
        alert("@");
        break;
    case '3':
        alert("#");
        break;
    case '4':
        alert("$");
        break;
    case '5':
        alert("%");
        break;
    case '6':
        alert("^");
        break;
    case '7':
        alert("&");
        break;
    case '8':
        alert("*");
        break;
    case '9':
        alert("(");
        break;
}

// //Task 1.3
let rangeStart = Number(prompt("Введіть початок діапазону",""));
let rangeFinish = Number(prompt("Введіть кінець діапазону",""));
let sum = 0;
while (rangeStart <= rangeFinish) {       
        sum+=rangeStart;  
        rangeStart++;
    }
alert(sum)

// //Task 1.4
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

// //Task 1.5
let userNumber = prompt('Введіть число');
i = 1
while (i <= userNumber/2) {
    if (userNumber % i == 0) {
        console.log(i)
    }
    i+=1
}
console.log(userNumber)

// // Task 2.1
let b;
let c;
let e;
let a=+prompt("Введіть п’ятирозрядне число","")
    if((a > 9999)&&(a < 100000))
    {
                b=a / 10000;
                a=a % 10000;
                c=a / 1000;
                a=a % 1000;
                a=a % 100;
                e=a / 10;
                a=a % 10;

                if ((b == a)&&(c == e))
                {
                    alert("Це число паліндром");
                }
                    else {
                    alert("Це число не паліндром");
    }
}
else{
alert("Ви ввели не п'ятирозрядне число");
}

//Task 2.2
let sumBuy = prompt('Введіть суму покупки');
if (sumBuy < 200) {
    alert("Знижка не запропонована");
}
else if (sumBuy > 200, sumBuy < 300) {
    firstDiscount = (sumBuy/100) * 3;
    alert(firstDiscount)
}
else if (sumBuy > 300, sumBuy < 500) {
    secondDiscount = (sumBuy/100) * 5;
    alert(secondDiscount)
}
else if (sumBuy > 500) {
    thirdDiscount = (sumBuy/100) * 7;
    alert(thirdDiscount)
}

//Task 2.3
let arr = prompt('введите 10 чисел через побел').split` `;
let positive = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == 1).length,
    negative = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == -1).length,
    loyal = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == 0).length;

if(positive) alert('Положительных: ' + positive);
if(negative) alert('Отрицательных: ' + negative);
if(loyal) alert('Нулей: ' + loyal);

//Task 2.4
const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let currentDayIndex = 0

while (true) {
const userResponse = prompt(`День тижня: ${daysOfWeek[currentDayIndex]}. Хочеш побачити наступний день?`);
if (userResponse === 'OK') {
    currentDayIndex = (currentDayIndex + 1) % daysOfWeek.length;
    alert(currentDayIndex)
} else {
    break;
}
}

