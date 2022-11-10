let num_1 = 0.1;
let num_2 = 0.2;
sum = num_1 + num_2;
console.log(sum.toFixed(1));

let text = 'I love you ';
let number = 3000;
result = text + number;
console.log(result);

let size_file = 860;
let size = prompt("Введіть обсяг флешки (у Гб)");
alert("На флешці поміщається " + (size*1024/size_file).toFixed(0) + " файлів");
