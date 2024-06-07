// Базовые методы

const userName1 = 'Вася Пупкина';

// вернут В
console.log(userName1[0]);
console.log(userName1.charAt(0));

console.log(userName1.indexOf('а'));
console.log(userName1.lastIndexOf('а'));
console.log(userName1.includes('а')); // true
console.log(userName1.slice(5)); //отрежет Вася
console.log(userName1.startsWith('В'));
console.log(userName1.endsWith('а'));
console.log(userName1.replace('В', 'Ф'));
console.log(userName1.replaceAll('а', 'и'));

// Из длинной строки, содержащей имя, фамилию пользователя и его никнейм, необходимо выделить только имя и фамилию.

const fullUserName = 'Вася aka Terminator Perdinator Пупкин';

const userName = fullUserName.slice(0, fullUserName.indexOf(' '));
console.log(userName);

const userSurname = fullUserName.slice(
    fullUserName.lastIndexOf(' ') + 1,
    fullUserName.length);
console.log(userSurname);


// Проверить, являются ли эти номера номерами телефонов России

// верные
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 3235356';
const num5 = ' +7(910) 3235356 ';

// не верные номера
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103q35356';

function isPhoneNumber(num) {
    num = num.trim();
    num = num.replace('+7', '8');
    if (!num.startsWith('8')) {
        return false;
    }
    num = num.replaceAll('(', '');
    num = num.replaceAll(')', '');
    num = num.replaceAll('-', '');
    num = num.replaceAll(' ', '');
    if (num.length !== 11) {
        return false;
    }

    let onlyNumber = true;
    for (const char of num) {
        if (isNaN(Number(char))) {
            onlyNumber = false;
            break;
        }
    }
}

console.log(isPhoneNumber(num1));
console.log(isPhoneNumber(num2));
console.log(isPhoneNumber(num3));
console.log(isPhoneNumber(num4));
console.log(isPhoneNumber(num5));

console.log(isPhoneNumber(num1Error));
console.log(isPhoneNumber(num2Error));
console.log(isPhoneNumber(num3Error));
console.log(isPhoneNumber(num4Error));


// Дополнение строк

const film = 'Звездные воины';
console.log(film.padStart('*'));
console.log(film.padEnd('*'));
console.log(film.repeat(10));

// Научиться маскировать номер карты, оставляя видимыми только последние четыре символа.

const card = '2834234503458353';

console.log(card.slice(-4).padStart(16, '*'));

