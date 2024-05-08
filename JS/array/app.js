// Массивы

const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
console.log(roles); //выводим массив в консоль
console.log(roles[0]); //выводим нулевой элемент массива в консоль
console.log(roles.length); //узнаем длину массива
console.log(roles[roles.length - 1]); //выводим последний элемент массива в консоль

const usersAge = [2040 - 2022, 10 > 0 ? 5 : 0]; //можно использовать тернарные операторы и проводить вычисления
console.log(usersAge);

// Управление элементами массива

const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина';
console.log(users);

//Добавить новый элемент в конец массива

const arrLength = users.push('Никита'); // используем const,если сразу надо получить длину массива
console.log(users);
console.log(arrLength);

// в начало массива

users.unshift('Вася');
console.log(users);

// Удалить последний элемент массива

const el = users.pop(); // pop возвращает удаленный элемент
console.log(el);
console.log(users);

// Удаляем нулевой элемент

const el2 = users.shift(); // pop возвращает удаленный элемент
console.log(el2);
console.log(users);

// Поиск элемента

const roles1 = ['user', 'admin', 'manager'];

const elIndex = roles.indexOf('admin');
console.log(elIndex); // выведется индекс элемента в массиве
const elIndex2 = roles.indexOf('superuser');
console.log(elIndex2); // будет -1, тк такого в массиве нет

if (roles.indexOf('admin') >= 0) {
    console.log('Доступ есть');
}

console.log(roles.includes('admin')); // выведется true
console.log(roles.includes('superuser')); // выведется false

if (roles.includes('admin')) {
    console.log('Доступ есть');
}


// Метод Slice - не изменяет исхожный массив

const role = ['user', 'admin', 'manager', 'superuser'];

const res = role.slice(2); // отрезает первые два элемента
console.log(res);

const res2 = role.slice(0, 2); // с нулевого элемента до второго НЕ включительно
console.log(res2);

const res3 = role.slice(-1); // выводит последний элемент
console.log(res3);

const res4 = role.slice(1, -2); // от первого до предпоследнего НЕ включительно
console.log(res4);


// Метод Splice - модифицирует исходный массив

const res5 = role.slice(2, 2); // берем со второго элемента два элемента
console.log(res5);
console.log(role);

// Метод Reverse - переворачивает элементы массива в обратном порядке

const res6 = role.reverse();
console.log(res6);
console.log(role);

// Метод Concat

const newRoles = ['sysadmin', 'developer'];
const res7 = role.concat(newRoles);
console.log(res7);

// Из строки в массив и обратно

const role4 = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login';
const res8 = url.split('/'); // split разделяет строку в массив
console.log(res8);

console.log(role4.join('-')); // split разделяет массив в строку через тире


// Упражнение
/* const tasks = ['Задача 1'];
Сделать функции:
- Добавление задачи в конец
- Удаление задачи по названию
- Перенос задачи в начало списка по названию
! Всегда меняем исходный массив
*/

const tasks = ['Задача 1'];

function Add(task) {
    tasks.push(task);
}

function Remove(task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
    return tasks.splice(index, 1);
}

function Prioritize(task) {
   const result = Remove(task);
   if (!result) {
       return;
   }
    tasks.unshift(result[0]);

}

Add('Задача 2');
Add('Задача 3');
console.log(tasks);
Remove('Задача 2');
console.log(tasks);
Prioritize('Задача 3');
console.log(tasks);

// Деструктуризация

const userData = ['Антон', 18, 'Москва'];
const [userName, age, city] = userData;
console.log(userName, age, city);


// Rest оператор - ...

// Расположение: REST оператор может быть использован только в конце при деструктуризации.
// Нельзя использовать его в середине или начале.

const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;
console.log(one, two, others);

/* Дан произвольный url вида - https://purpleschool.ru/course/javascript
Нужно сделать функцию, которая выводит в консоль:

- Протокол (https)
- Доменное имя (purpleschool.ru)
- Путь внутри сайта (/course/javascript)
 */

const url2 = 'https://purpleschool.ru/course/javascript';

function getUrlParts(url) {
    const [protocol, _, host, ...path] = url.split('/');
    if(protocol === 'https:' || protocol === 'http:'){
        console.log(protocol, _, host, path);
        console.log(`Протокол: ${protocol.split(':')[0]}`);
        console.log(`Доменное имя: ${host}`);
        console.log(`Путь внутри сайта: /${path.join('/')}`);
    }
}
getUrlParts(url2);



