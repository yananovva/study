// Итерации в массивах

// forEach - метод для итерации по элементам массива. Позволяет выполнять функцию
// на каждом элементе массива. Может принимать дополнительный аргумент - сам массив. Пример
// использования включает вывод каждого элемента в консоль. Важно, что forEach не возвращает
// новый массив и часто используется для создания "побочных эффектов".

const score = [5, 10, 0, 15];

// for (const [i, el] of score.entries()) {
//     console.log(`Раунд ${i + 1}: ${el}`);
// }

score.forEach((el, i) => {
    console.log(`Раунд ${i + 1}: ${el}`);
});


// map - метод, который также итеррирует по каждому элементу массива, но в отличие от forEach,
// возвращает новый массив, созданный путем преобразования каждого элемента оригинального массива.
// Пример преобразования включает конвертацию валюты с долларов в рубли.

const transactionsInUsd = [10, -7, 50, -10, 100];
const exchangeRate = 60;
const transactionsInRub = [];

// for (const transaction of transactionsInUsd) {
//     transactionsInRub.push(transaction * exchangeRate);
// }
// console.log(transactionsInRub);


const transactionsInRub2 = transactionsInUsd
    .map(transaction => transaction * exchangeRate);
console.log(transactionsInRub2);


// filter -  Уменьшает количество кода, упрощая фильтрацию

const operations = [100, -20, 7, -20, 50];
const positiveOperations = operations
    .filter(operation => {
        return operation > 0;
    });

console.log(positiveOperations);

const positiveRUBOperations = operations
    .filter(operation => {
        return operation > 0;
    })
    .map(operation => operation * 60);

console.log(positiveRUBOperations);


/* Имеется массив изменения цен prices, где внутри 1й элемент массива является ценой в момент Х,
2й - ценой в момент Y. Нужно преобразовать данные в массив, где будут отображены только
положительные изменения цен: [100, 150]
 */

const prices = [[100, 200], [120, 100], [200, 350]];

const result = prices
    .map(product => product[1] - product[0])
    .filter(price => price > 0);

console.log(result);


// reduce - Цель Reduce: Сокращение массива до одного конкретного значения. Помимо суммирования,
// Reduce может использоваться для выполнения логических операций (например, поиска минимального значения в массиве).

const operations1 = [100, -20, 7, -30, 50];

// let balance = 0;
// for (const operation of operations1) {
//     balance += operation;
// }
// console.log(balance);

// с помощью reduce

const finalBalance = operations1
    .reduce((acc, operation, i) => {
        console.log(`Итерация ${i}, acc: ${acc}, operation ${operation}`);
        return acc += operation;
    }, 0);

console.log(finalBalance);


// Найти среднее значение последоватедьности чисел с помощью reduce

const arr = [2, 4, 4, 10];

const avg = arr
    .reduce((acc, el, i) => {
        if (i != arr.length - 1) {
            return acc + el;
        } else {
            return (acc + el) / arr.length;
        }
    }, 0);

console.log(avg);


// find, findIndex
/* Метод find используется для поиска первого элемента в массиве, который удовлетворяет заданному условию.
   Метод findIndex возвращает индекс первого элемента, подходящего под условие, в противном случае возвращает -1.
*/

const arr1 = [2, 4, 4, 10, 20];

let elMore5;
// for (const el of arr1) {
//     if (el > 5) {
//         elMore5 = el;
//         break;
//     }
// }
// console.log(elMore5);

let elMore5Index;

elMore5 = arr1.find(el => el > 5);
elMore5Index = arr1.findIndex(el => el > 5);
console.log(elMore5);
console.log(elMore5Index);


// Написать функцию, которая возвращает true, если элемент есть, и false, если нет,
// используя функцию some. Метод some представляет собой простой и лаконичный способ проверки
// наличия элемента в массиве, делая код более понятным и читабельным.

const arr2 = [2, 4, 4, 10, 20];

function some(array, element) {
    const res = array.find(el => el === element);
    return res == undefined ? false : true;
}

console.log(some(arr, 2));


// flat, flatMap. Цель функции flat: Преобразование вложенных массивов в один плоский массив.
// flatMap - это комбинация функций map и flat. Она предназначена для преобразования и
// последующего "разглаживания" массива.

const price = [[2, 4], [3, 4], [10, [20, 50]]];

const res = price.flat(10);
const res2 = price.flatMap(el => el.concat([1]));

console.log(res);
console.log(res2);


// sort - Использование метода sort() без параметров сортирует строки по алфавиту.
// Важно: sort() мутирует исходный массив, в отличие от методов как map().
// использование sort() без параметров приводит к сортировке чисел как строк, что дает неожиданные результаты.

const users = ['Вася', 'Маша', 'Катя', 'Аня'];
users.sort();

console.log(users);

const operations2 = [100, -300, -100, 50, 480];

// < 0 - a,b - сохраняем порядок
// > 0 - b,a - меняем порядок

operations2.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
});
console.log(operations2);

operations2.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
});
console.log(operations2);


// Создание массивов (new Array, fill)

const arr3 = [1, 2, 3, 4, 5];

const arr4 = new Array(5);
arr4.fill(1, 0, 3);
arr4.fill(2, 3, 5);

console.log(arr4); // [1,1,1,2,2]

// более короткая запись создания массива из одинаковых элементов [5,5,5,5,5]

const arr5 = Array.from({length: 5}, () => 5);
console.log(arr5);

// [1,2,3,4,5]
const arr6 = Array.from({length: 5}, (cur, i) => i + 1);
console.log(arr5);









