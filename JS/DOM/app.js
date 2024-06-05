'use strict';

// Обработка нажатий, Обработка событий клавиатуры, Работа со стилями и иклассами, Установка атрибутов


// document.querySelector('.button').addEventListener('click', function() {
// 	const input = document.querySelector('.input').value;
// 	if (!input) {
// 		return;
// 	}
// 	document.querySelector('.panel').innerText = input;
// 	document.querySelector('.input').value = '';
//
// });

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    // document.querySelector('.notification').classList.add('notification_active');
    document.querySelector('.notification').classList.remove('notification_hidden');}


    // Упражнение - сохранение JSON - превратить объект в строку и сохранить её в LocalStorage.

    const textString = JSON.stringify({
        text: input
    });
    localStorage.setItem('text', textString);


    console.log(document.querySelector('.notification').getAttribute('class'));
    document.querySelector('.notification').setAttribute('class', 'notification');
    document.querySelector('.notification').setAttribute('key', 1);
    console.log(Number(document.querySelector('.notification').getAttribute('key')));

function inputChanged(e) {
    if (e.code === 'Enter') {
        submitForm()
    }
}

// document.querySelector('.input').addEventListener('keydown', (e) => {
// 	if (e.code == 'Enter') {
// 		submitForm()
// 	}
// });



// Local Storage

localStorage.setItem('token', 'fgthbrsg');
localStorage.setItem('token1', 1);
const token1 = localStorage.getItem('token1');
console.log(typeof token1);
localStorage.removeItem('token1');
localStorage.clear();



// Упражнение - получение DOM элементов

// console.log(document.querySelector('.one').innerText);
// console.log(document.querySelector('.one ~ div').innerText);
console.log(document.querySelectorAll('.one')[0].innerText);
console.log(document.querySelectorAll('.one')[1].innerText);

// console.log(document.querySelector('#two').innerText);
console.log(document.getElementById('two').innerText);
console.log(document.getElementsByClassName('one'));
console.log(document.querySelector('[user-id="4"]').innerText);


// Добавление html на лету

const panelText = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
// newElement.innerText = 'Кнопка';
newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`;
document.querySelector('.test').appendChild(newElement);


// JSON

const obj = JSON.parse('{ "a": 1}');
console.log(obj.a);
const str = JSON.stringify(obj);
console.log(str);


