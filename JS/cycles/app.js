// Цикл For

/*Структура цикла FOR:
- Инициализация: объявление и начальное значение переменной (let i = 1).
- Условие: критерий завершения цикла (цикл исполняется, пока условие истинно).
- Обновление: изменение переменной после каждой итерации (i++).
 */

for (let i = 1; i < 10; i++) {
    console.log(`Наш баланс ${i}$`);
}


// Break, continue

/* continue позволяет перейти к следующей итерации цикла без выполнения оставшегося кода в теле цикла.
Пример использования: пропустить определенный элемент массива.

break останавливает выполнение цикла полностью.
Пример использования: прервать цикл при выполнении определенного условия.
 */

const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Задача 2') {
        continue;
    }
    console.log(tasks[i]);
}

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Задача 2') {
        break;
    }
    console.log(tasks[i]);
}


// Упражнение
/*Необходимо написать цикл, который проходит по исходному массиву в обратном порядке и формирует
новый массив с обратным порядком элементов.
    Исходный массив: ["!", "js", "люблю", "я"].
    Цель: Получить строку "я люблю js !"
 */

const arr = ["!", "js", "люблю", "я"];
const resultArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
    resultArray.push(arr[i]);
}
console.log(resultArray.join(' '));

// или решение через reverse

console.log(arr.reverse().join(' '));


// Цикл в цикле

for (let i = 1; i < 5; i++) {
    console.log(`Цикл 1 - ${i}`);
    for (let j = 1; i < 5; j++) {
        console.log(`Цикл 2 - ${j}`);
    }
}

const task = [[1, 'Задача 1'], [2, 'Задача 2']]; //массив в массиве

for (let i = 0; i < task.length; i++) {
    for (let j = 0; j < task[i].length; j++) {
        console.log(task[i][j]);
    }
}


// Цикл While

let m = 1;
while (m < 5) {
    console.log(`Вывод - ${m}`);
    m++;
}

const array = [1, 4, 8, 7];

let l = 0;
while (arr[l] <= 5 && l < array.length) {
    console.log(array[l]);
    l++;
}

let r = 0;
do {
    console.log(r);
    r++;
} while (r < 0)


// Задан список пользователей сайта. Вывести на экран количество пользоватетелей, которые пользуется google почтой.

const users = ['urgmaker@yandex.ru', 'uranovrg@gmail.com', 'yanaarr@mail.ru', 'yana@inbox.ru', 'uranovayr@gmail.com'];

function counter(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes('gmail.com')) {
            count++;
        }
    }
    return count;
}

console.log(counter(users));


// Циклы for of и for in

const arrays = [1, 4, 8, 7];

for (let i = 0; i < arrays.length; i++) {
    console.log(arrays[i]);
}

// равнозначная и читаемая запись
// Используйте for...of для простой итерации по элементам массива, когда вам не требуется работа с индексами

for (let element of arrays) {
    console.log(element);
}

// Используйте for...in, когда вам важно работать именно с индексами элементов
for (let index in arrays) {
    console.log(index);
}


// Упражнение - расчет итогового баланса
/*
Есть выгрузка операций пользователя, а также начальный баланс в 100$. Необходимо сделать
функции расчета:
- Расчёт итогового баланса
- Проверка наличия отрицательного баланса
- Расчёт среднего дохода и среднего расхода
 */

const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

function getBalance(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    for (const element of arrayOfOperations) {
        balance += element; //balance = balance + element
    }
    return balance;
}

console.log(getBalance(operations, startingBalance));

function checkOperations(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    let isOkay = true;
    for (const element of arrayOfOperations) {
        balance += element; //balance = balance + element
        if (balance < 0) {
            isOkay = false;
        }
    }
    return isOkay;
}

console.log(checkOperations(operations, startingBalance));

function avarageOperations(arrayOfOperations) {
    let positiveCount = 0;
    let positiveSum = 0;
    let negativeCount = 0;
    let negativeSum = 0;
    for (const element of arrayOfOperations) {
        if (element > 0) {
            positiveCount++;
            positiveSum += element;
        }
        if (element < 0) {
            negativeCount++;
            negativeSum += element;
        }
    }
    return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log(avarageOperations(operations));


// Написать функцию, которая возвращает массив с именами, начинающимися на букву R
const names = ['Roman', 'Yana', 'Ruslan', 'Eva'];

function filter(array) {
    const newNames = [];
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        let characters = word.split('');
        if (characters[0] === 'R') {
            newNames.push(word);
        }
    }
    return newNames;
}

console.log(filter(names));

// Написать функцию, которая возвращает массив из строк, записанных в обратном порядке.
// Записать в консоль этот массив и количество элементов в массиве
const myArr = ['12', '15', '98', '1234'];

function reverseStrings(array) {
    const reversedStrings = [];
    for (let i = 0; i < array.length; i++) {
        let string = array[i];
        let newString = string.split('').reverse().join('');
        reversedStrings.push(newString);
    }
    return reversedStrings;
}
console.log(reverseStrings(myArr));