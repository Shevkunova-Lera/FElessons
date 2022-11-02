const current_year = 2022;
const Pi = 3.14;
const euro = 1.01;

let userName = prompt("Як вас звати?");
alert("Привіт, " + userName)

let userAge = prompt("Введіть ваш рік народження")
alert("Вам " + (current_year - userAge) + " років")

let sideSquare = prompt("Введіть сторону квадрата")
alert("Периметр квадрата дорівнює " + (sideSquare * 4) + " сантиметрів")

let radius = prompt("Введіть радіус кола")
alert("Площа окружності дорівнює " + (Pi * Math.pow(radius, 2)))

let distanse = prompt("Введіть відстань між двома містами (у км)")
let time = prompt("Введіть час, за який ви хочете туди дістатись (у г)")
alert("Швидкість, з якою вам потрібно рухатись, щоб дістатись вчастно дорівнює " + (distanse/time) + " м/с")

let dollar = prompt("Введіть суму в доларах")
let result = dollar * euro;
alert("Сума в євро = " + result.toFixed(2))