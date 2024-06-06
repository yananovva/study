'use strict';

let habits = [];
const HABIT_KEY = 'HABIT_KEY';
let globalActiveHabitId;


// page
const page = {
    menu: document.querySelector('.menu__list'),
    header: {
        h1: document.querySelector('.h1'),
        progressPercent: document.querySelector('.progress__percent'),
        progressCoverBar: document.querySelector('.progress__cover-bar'),
    },
    content: {
        daysContainer: document.getElementById('days'),
        nextDay: document.querySelector('.habit__day'),
    },
    popup: {
        index: document.getElementById('add-habit-popup')
    }
}

// utils
function loadData() {
    const habitsString = localStorage.getItem(HABIT_KEY);
    const habitArray = JSON.parse(habitsString);
    if (Array.isArray(habitArray)) {
        console.log('Данные успешно загружены из localStorage');
        habits = habitArray;
    } else {
        console.log('Загружаются тестовые данные');
        habits = [
            {
                id: 1,
                icon: 'sport',
                name: 'Отжимания',
                target: 10,
                days: [{ comment: 'Первый подход всегда даётся тяжело' },
                    { comment: 'Второй день уже проще' }],
            },
            {
                id: 2,
                icon: 'food',
                name: 'Правильное питание',
                target: 10,
                days: [{ comment: 'Круто!' }],
            },
        ];
        saveData();
    }
}

function saveData() {
    localStorage.setItem(HABIT_KEY, JSON.stringify(habits))
}

function togglePopup() {
    if (page.popup.index.classList.contains('cover_hidden')) {
        page.popup.index.classList.remove('cover_hidden');
    } else {
        page.popup.index.classList.add('cover_hidden');
    }
}

// render

function rerenderMenu(activeHabit) {
    for (const habit of habits) {
        const existed = document.querySelector(`[menu-habit-id = "${habit.id}"]`);
        if (!existed) {
            // создание
            const element = document.createElement('button');
            element.setAttribute('menu-habit-id', habit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => rerender(habit.id));
            element.innerHTML = ` <img src="./images/${habit.icon}.svg" alt="${habit.name}" />`
            if (activeHabit.id === habit.id) {
                element.classList.add('menu__item_active');
            }
            page.menu.appendChild(element);
            continue;
        }
        if (activeHabit.id === habit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    }
}

function rerenderHead(activeHabit) {
    page.header.h1.innerText = activeHabit.name;
    const progress = activeHabit.days.length / activeHabit.target > 1
        ? 100
        : activeHabit.days.length / activeHabit.target * 100;
    page.header.progressPercent.innerText = progress.toFixed(0) + '%';
    page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
}

function rerenderContent(activeHabit) {
    page.content.daysContainer.innerHTML = '';
    for (const index in activeHabit.days) {
        const element = document.createElement('div');
        element.classList.add('habit');
        element.innerHTML = ` <div class="habit__day">День ${Number(index) + 1}</div>
                    <div class="habit__comment">${activeHabit.days[index].comment}</div>
                    <button class="habit__delete" onclick="deleteDay(${index})">
                        <img src="./images/delete.svg" alt="Удалить день ${index + 1}"/>
                    </button>`;
        page.content.daysContainer.appendChild(element);
    }
    page.content.nextDay.innerHTML = `День ${activeHabit.days.length + 1}`;
}

function rerender(activeHabitId) {
    globalActiveHabitId = activeHabitId;
    const activeHabit = habits.find(habit => habit.id === activeHabitId);
    if (!activeHabit) {
        return;
    }
    rerenderMenu(activeHabit);
    rerenderHead(activeHabit);
    rerenderContent(activeHabit);
}

// work with days

function addDays(event) {
    const form = event.target;
    event.preventDefault();
    const data = new FormData(form);
    const comment = data.get('comment');
    form['comment'].classList.remove('error');
    if (!comment) {
        form['comment'].classList.add('error');
    }
    habits = habits.map(habit => {
        if (habit.id === globalActiveHabitId) {
            return {
                ...habit,
                days: habit.days.concat([{ comment }])
            }
        }
        return habit;
    });
    form['comment'].value = ''; // очистить форму
    rerender(globalActiveHabitId);
    saveData();
}

function deleteDay(index) {
    habits = habits.map(habit => {
        if (habit.id === globalActiveHabitId) {
            habit.days.splice(index, 1);
            return {
                ...habit,
                days: habit.days
            };
        }
        return habit;
    });
    rerender(globalActiveHabitId);
    saveData();
}


//init
(() => {
    loadData();

    rerender(habits[0]?.id);
})();
/* ID первой привычки в массиве habits. Оператор ?. используется для безопасного доступа к свойству
id первой привычки, не вызывая ошибки, если массив пуст., если мы обратимся к habits[0].id - будет ошибка
если habits[0]?.id - будет undefined */
