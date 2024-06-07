// Структура

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    skills: [
        'Программирование',
        'Готовка'
    ],
    eduBasic: 'Школа',
    eduPro: 'МФТИ'
};


// Обращение к элементам

// два варианта записи, второй используем, когда нужно сложить свойства

console.log(user.skills);
console.log(user['skills']);

const level = 'Pro';
console.log(user['edu' + level]);

// создание нового свойства

user.city = 'Москва';
console.log(user.city);

// изменение свойства

const res = prompt('Введите свойство');
user.age = 30;
console.log(user);


// отсортировать пользователей по возрасту

const users = [
    {name: 'Вася', age: 30},
    {name: 'Катя', age: 18},
    {name: 'Аня', age: 40},
    {name: 'Петя', age: 25}
];

console.log(users.sort((a,b) => a.age - b.age));


// Упражнение: ПРЕОБРАЗОВАНИЕ ОБЪЕКТОВ.
// преобразовать пользователей до вида {fullName: 'Вася Пупкин', skillNum: 2};

// Дано:

const users1 = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'DevOps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн']
    },
];

// Решение

const userData = users1.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skillNum: user.skills.length
    };
});

console.log(userData);


//Методы объектов

/* Методы в объектах JavaScript — это функции, инкапсулированные в свойствах объектов,
позволяющие выполнять операции над данными объекта.
Использование this в методах объекта дает гибкость в обращении к свойствам объекта,
делая код более универсальным и читабельным.
 */


const user1 = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    getFullName: function () {
        return this.name + '' + this.surname;
    }
};

console.log(user1.getFullName());


/* Упражнение = реализовать методы увеличения и уменьшения баланса, при котором
каждая операция сохраняется в массив operations в виде {reason: 'Оплата налогов', sum: -100}.
Возвращается true, если успешно и false, если не хватает баланса. И реализовать
метод вывода числа операций по кошельку.
 */

const wallet = {
    balance: 0,
    operations: [],
    increase: function (reason, sum) {
        this.balance += sum;
        this.operations.push({
            reason,
            sum
        })
        return true;
    },
    decrease: function (reason, sum) {
        if (this.balance < sum) {
            console.log('Недостаточно средств');
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason,
            sum: -sum
        })
        return true;
    },
    getOperationLength: function () {
        return this.operations.length;
    }
};

console.log(wallet.increase('Зарплата', 1000));
console.log(wallet.getOperationLength());
console.log(wallet.decrease('Покупка', 2000));
console.log(wallet.balance);


// Итерирование по объекту

// Прямой способ (for of) не работает, поскольку объекты не являются итерируемыми в обычном понимании.
// Использование for in позволяет обойти ключи объекта

const cities = {
    msk: {
        let: 200,
        temp: 25
    },
    spb: {
        let: 100,
        temp: 25
    }
};

let sumTemp = 0;
let citiesCount = Object.keys(cities).length;
for (const key in cities) {
    sumTemp += cities[key].temp;
}
console.log(sumTemp / citiesCount);


// Деструктуризация и rest

/* REST-оператор (три точки ...) позволяет оставить остальные свойства объекта в отдельном объекте.
Это полезно, когда нужно извлечь одно или несколько свойств, но также работать с оставшимися.
Spread-оператор позволяет добавлять дополнительные свойства в объект.
Пример: обогащение пользователя дополнительными данными без вложенности.
 */

let user2 = {
    name: '',
    age: 40,
    city: 'Moscow'
};

const additionalData = {
    skills: ['', ''],
    creditCard: '2342-2345-2355-6554'
};

user2 = {
    ...user2,
    ...additionalData
}

console.log(user2);


// Optional chaining

const citiesOf = {
    msk: {
        temp: {
            celcius: 25
        }
    },
    spb: {

    }
};

const city = 'msk';

//старый способ проверки

if (citiesOf[city] !== undefined && citiesOf[city].temp !== undefined) {
    console.log(citiesOf[city].temp.celcius);
}

// новый способ

console.log(citiesOf[city]?.temp?.celcius);


// Упражнение = Сделать объект склад с методами добавления на склад, поиска по складу товара и расчет веса

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return this.goods.find(g => g.id === id);
    },
    addGood: function (good) {
        const existedGood = this.findGoodById(good.id)
        if (existedGood) {
            console.log('Товар уже есть на складе');
            return;
        }
        this.goods.push(good);
    },
    getWeightKg: function () {
        return this.goods.reduce((acc, el) =>
            acc += el.weight?.kg ? el.weight.kg : 0,
            0
        )
    }
};

/* Товары */
const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
}

const chair = {
    id: 2,
    weight: {
        kg: 2
    }
}

const paper = {
    id: 3,
    color: 'red'
}

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
let findedItem = warehouse.findGoodById(1);
console.log(findedItem);
const weight = warehouse.getWeightKg();
console.log(weight);



// Scope-chain (цепочка областей видимости) –

/* это механизм, благодаря которому можно получить
доступ к переменным, находящимся за пределами текущей области видимости.
 */

'user strict';

const successMessage = 'Успех';
const user3 = {
    name: 'Вася',
    roles: []
}

function addRole(user, role) {
    if (role === 'admin') {
        const message = 'Ошибка';
        console.log(message);
        return user;
    }
    user.roles.push(role);
    console.log(successMessage);

    function logRoles() {
        console.log(user.roles);
    }
    logRoles();
    return  user;
}

console.log(addRole(user, 'dev'));


// THIS

/* В глобальном контексте this равен глобальному объекту window.
    В strict режиме this внутри функций равен undefined.
    В нестрогом режиме this указывает на глобальный объект window.
    this в стрелочных функциях не создается, а наследуется из внешнего контекста.
    this в методах объекта указывает на сам объект.
    При вызове метода у другого объекта this динамически изменяется и указывает на последний объект-владелец метода.
 */

const user4 = {
    firstName: '',
    lastName: '',
    age: 20,
    getUserInfo:function () {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);

        const canDrink = () => {
            if (this.age >= 18) {
                console.log('Уже может пить')
            } else {
                console.log('Уже не может пить')
            }
        };
        canDrink();
    },
}


// Упражнение - дополнить объект методами для получения имени: компании, сео, сотрудника

const company = {
    name: 'ООО Агро',
    employees: [
        {
            name: 'Света',
            getName: function () {
                return this.name;
            }
        }
    ],
    ceo: {
        name: 'Вася',
        getName: function () {
            return this.name;
        }
    },
    getName: function () {
        return this.name;
    }
}

console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map(employee => employee.getName()));


// Управление THIS
//  Enhanced Object Literals - EOL для методов

const b = 1;
const a = {
    b,
    getBAlt() {
        return this.b; // вместо getB: function()
    }
}
console.log(a.getBAlt());


// Call, apply

/* call применяется, когда аргументы известны сразу и их количество фиксировано.
apply удобен при работе с массивом аргументов, например, когда аргументы динамичны или их количество неизвестно заранее.
bind используется для фиксации контекста для будущих вызовов функции.
 */

const audi = {
    make: 'Audi',
    model: 'A3',
    year: 2021,
    damages: [],
    addDamage(part, rate) {
        console.log(`У авто ${this.make} ${this.year} ${this.model} 
        добавлено: повреждение ${part} со степенью ${rate}`)
        this.damages.push({
            part,
            rate
        })
    }
}
audi.addDamage('Капот', 1);

const bmw = {
    make: 'BMW',
    model: 'X5',
    year: 2022,
    damages: [],
};
bmw.addDamage = audi.addDamage;
bmw.addDamage('Бампер', 2);

const addDamageFunc = audi.addDamage;
addDamageFunc.call(bmw, 'Бампер', 2);
addDamageFunc.call(audi, 'Бампер', 2);

addDamageFunc.apply(bmw, ['Бампер', 2]);
addDamageFunc.apply(audi, ['Бампер', 2]);


// Bind - метод, используемый для связывания контекста (this) с функцией. В отличие от методов call и apply,
// который сразу вызывают функцию, bind откладывает вызов функции, позволяя нам привязать к ней специфический контекст.

const opel = {
    make: 'Opel',
    model: 'Astra',
    damages: []
};
const carManipulation = {
    addDamage(part, rate) {
        this.damages.push({ part, rate });
        console.log(`Добавить повреждение на ${this.make} ${this.model}`);
    }
}

// метод 1
const addDamageOpel = carManipulation.addDamage.bind(opel);
addDamageOpel('Крыло', 3);

// метод 2
const addDamageOpelRoof = carManipulation.addDamage.bind(opel, 'Крыша');
addDamageOpelRoof(5);
console.log(opel);


// Упражнение - создайте объект пользователя с паролем. С помощью функции ниже удалить
// пароль, сделав функцию сброса пароля

function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user5 = {
    login: 'a@a.ru',
    password: '12345'
};
const resetUserPassword = removePassword.bind(user, true);
resetUserPassword();
console.log(user5);


//  Упражнение - работа с замыканиями

/* Сделать функцию пользователя которая берет за основу userInfo и за счет замыкания создает новый объект,
с которым можно работать как user1().increase(100) */

const userInfo = {
    balance: 0,
    operations: 0,
    increase(sum) {
        this.balance += sum;
        this.operations++;
    },
};

function user6() {
    const userObj = {
        balance: 0,
        operations: 0,
        increase(sum) {
            this.balance += sum;
            this.operations++;
        }
    };
    return function () {
        return userObj;
    }
}

const userr = user6();
userr().increase(100);
userr().increase(100);
console.log(userr());

const userr2 = user6();
userr2().increase(100);
console.log(userr2());










