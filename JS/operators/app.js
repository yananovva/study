// Переменные

let a = 1;
console.log(a);
a = 'test';

console.log(a);

// Базовые арифметические операторы

const width = 10;
const height = 5;
const space = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2;
const volume = 2 ** 3; // 2 в третьей степени

console.log(volume);


// Строки

const city = 'Москва';
const street = 'Новослободская';

console.log(city + ', ' + street);

// Операторы присваивания

let age = 18 + 5;
age += 2; // age = age + 2
age -= 2;
age *= 2;
age /= 2;
age++; // age = age + 1
age--;

console.log(age);

// Операторы сравнения

const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);

// Шаблонные строки

const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

const template = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template);

const template2 = `Проект
Цена: ${price}$`;
console.log(template2);

// Преобразование типов

const age = '18';
console.log(Number(age) + 5);
console.log(age - 3); // -,*,/ будут как арифметические операции, + распознается как конкатенация
console.log(String(4) + 7);
console.log(Boolean('')) // 0 и пустая строка будут false


// if else

//Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль,
// сможет ли он купить дом за 13 500$ через 2 года после снятия вклада и остаток после покупки.
//Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

const res = deposit * (1 + rate / 12) ** 24;
if (res > houseCost) {
    console.log(`Мы накопили: ${res}. Можем купить. Остаток ${res - houseCost}`)
} else {
    console.log(`Мы накопили: ${res}. Купить не сможем((`);
}

// Switch

//неверно
const role = 'manager';
if (role === 'manager') {
    console.log('Менеджер');
} else if (role === 'admin') {
    console.log('Админ');
} else {
    console.log('Мы тебя не знаем');
}

//верно
const role = 'manager';
switch (role) {
    case 'manager':
        console.log('Менеджер');
        break;
    case 'admin':
        console.log('Админ');
        break;
    default:
        console.log('Мы тебя не знаем');
}


const num = 1;
switch (true) {
    case num > 0:
        console.log('Положительный');
        break;
    case num < 0:
        console.log('Положительный');
        break;
    default:
        console.log('Ноль');
}

//Тернарные операторы

const bmwX3Price = 100000;
const budget = 20000;
const fordFocus = 10000;

let message;
if (budget > bmwX3Price) {
    message = 'BMW';
} else {
    message = 'Велосипед';
}

console.log(`Я хочу купить ${budget > bmwX3Price ? 'BMW' : 'Велосипед'}`);

// если в условие добавить const fordFocus = 10000, то будет наследование тернарных операторов

let message = budget > bmwX3Price
    ? 'BMW'
    : budget > fordFocus ? 'Ford' : 'Велосипед';
console.log(`Я хочу купить ${message}`);

//или вариант проще

let message = budget > bmwX3Price ? 'BMW' : 'Велосипед';
console.log(`Я хочу купить ${message}`);


//Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?".
// Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!", а если
// он введёт "Я не робот", то тоже "Успех".

const result = prompt(`Сколько будет 7 + или - 15?`);
switch (true) {
    case result === 'Я не робот':
    case Number(result) === 22:
    case Number(result) === -8:
        console.log('Успех');
        break;
    default:
        console.log('Вы робот!');

}

// Логические операторы

const isAdmin = false;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`); //&& - и (должны быть все true)
console.log(`Обычный файл ${isAdmin || canWrite}`); // || - или (достаточно одного true)
console.log(`Инвертируем права админа ${!isAdmin}`); // меняем его значение false на true

const isEdited = true;
const isSuperAdmin = true;

console.log(`Системный файл с редактированием ${
    isAdmin && canWrite && (!isEdited || isSuperAdmin)
}`); //superAdmin перезаписал isEdited

// Операторы с другими типами

let b = 'Марина';
const username = b || 'Петя';
console.log(username);

const isAdmin1 = true;
const filename = isAdmin && 'file.mp4';
console.log(filename);

// Оператор нулевого слияния

let ages = 0;
console.log(ages || 18);
console.log(ages ?? 18); // Использование позволяет считать пустую строку и 0 валидными значениями,
// Активируется только если переменная равна null или undefined


/* Пользователь хочет приобрести игру в магазине. ОН может это сделать только если:
    - его баланс больше 1000(balance) или число бонусов больше 100(bonusBalance)
    - он не забанен(isBanned)
    - игра не куплена(isExist)
    - игра в продаже(isSelling)
    Напишите условия для покупки и результат
 */

const balance = 1200;
const bonusBalance = 90;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100)
    && !isBanned
    && !isExist
    && isSelling;
console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`);
