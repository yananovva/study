// Введение в функции
function logName(name, surname) {
    console.log(`Мое имя ${name} ${surname}`);
}

logName(`Антон`, `Ларичев`);

logName('Roman', 'Uranov')


function countDepositSum(depositInUSD, month, rate) {
    return depositInUSD * (1 + rate / 12) ** month;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

const example2 = countDepositSum(12009, 23, 0.10);

console.log(countDepositSum(1000, 48, 0.10));

//Анонимные функции

const poft = function (num) {
    return num * num;
}
console.log(poft(6));

// Стрелочные функции

//1 способ
const poft1 = num => num * num;
console.log(poft1(6));

//2 способ
const poft2 = num => {
    console.log(num);
    return num * num
};
console.log(poft2(6));

//Задание: переписать функцию в стрелочную

function toPower(num, power) {
    const res = num ** power;
    return res;
}

console.log(toPower(2, 3));

// Решение
const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 3));

// Параметры по умолчанию
// Эта запись значит, что если значение степени не будет задано, то по умолчанию число будет во 2 степени
function toPower2(num, power = 2) {
    const result = num ** power;
    return result;
}

console.log(toPower2(2, 3));

// Условия в функциях

function canAccessWebsite(age) {
    if (age < 18) {
        return 'Нет'; /*оператор прекращает функцию на этом*/
    }
    return 'Да';
}

console.log(canAccessWebsite(16));

// То же самое, только короче
const canAccessWebsite2 = age => 18 ? 'Нет' : 'Да';
console.log(canAccessWebsite2(16));

// Функции в функциях

/* Рассчитать стоимость доставки подарков между двумя пользователями, учитывая вес подарков и дистанцию.
Создание вспомогательных функций:
calculateW: Расчет стоимости доставки по весу подарка.
calculateD: Расчет стоимости доставки по дистанции между пользователями.
Использование констант для стоимости перевозки за единицу веса
(например, $7 за кг) и за единицу дистанции (например, $5 за км)
 */

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
    return present * KG_IN_USD;
}

function calculateD(distance) {
    return distance * KM_IN_USD;
}

function gerExchangePrice(present1, present2, distance) {
    const price1 = calculateW(present1);
    const price2 = calculateW(present2);
    const distancePrice = calculateD(distance);
    return price1 + price2 + distancePrice;
}

console.log(gerExchangePrice(1, 2, 10));

// Задача

/* Пользователь:
Возраст
Наличие работы
Деньги
Нужно проверить может ли он купить новый MacBook за 2000$? Он может брать не только свои деньги,
но и взять кредит. Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если
ему просто больше 24-х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя
и товара и возвращает true или false.
 */

function computeCredit(age, hasJob = false) {
    switch (true) {
        case age > 24 && hasJob:
            return 500;
        case age > 24:
            return 100;
        default:
            return 0;
    }
}

function canBy(productPrice, age, money, hasJob = false) {
    const creditMoney = computeCredit(age, hasJob);
    return productPrice <= money + creditMoney;
}

console.log(canBy(2000, 25, 1500, true));


// Функции высшего порядка
// Callback

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function power(a, b) {
    return a ** b;
}

function calculate(a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}

let res = calculate(3, 5, add);
console.log(res);
res = calculate(3, 5, subtract());
console.log(res);
res = calculate(3, 5, power());
console.log(res);


// Возврат функции

function powerr(pow) {
    return function (num) {
        return num * pow;
    }
}

const powerOfTwo = powerr(2); //выбрали вторую степень
console.log(powerOfTwo(5));
console.log(powerr(2)(5)) // число 5 в степени 2

// эта же функция в виде стрелочной

const poweer = pow => num => num**pow;
