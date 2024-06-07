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
        index: document.getElementById('add-habit-popup'),
        iconField: document.querySelector('.popup__form input[name="icon"]')
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
    if (page.popup.index.classList.contains('cover__hidden')) {
        page.popup.index.classList.remove('cover__hidden');
    } else {
        page.popup.index.classList.add('cover__hidden');
    }
}

function resetForm(form, fields) {
    for (const field of fields) {
        form[field].value = '';
    }
}
function validateAndGetFormData(form, fields) {
    const formData = new FormData(form);
    const res = {};
    for (const field of fields) {
        const fieldValue = formData.get(field);
        form[field].classList.remove('error');
        if (!fieldValue) {
            form[field].classList.add('error');
        }
        res[field] = fieldValue;
    }
    let isValid = true;
    for (const field of fields) {
        if (!res[field]) {
            isValid = false;
        }
    }
    if (!isValid) {
        return;
    }
    return res;
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
    document.location.replace(document.location.pathname + '#' + activeHabitId);
    rerenderMenu(activeHabit);
    rerenderHead(activeHabit);
    rerenderContent(activeHabit);
}

// work with days

function addDays(event) {
    event.preventDefault();
    const data = validateAndGetFormData(event.target, ['comment']);
    if (!data) {
      return;
    }
    habits = habits.map(habit => {
        if (habit.id === globalActiveHabitId) {
            return {
                ...habit,
                days: habit.days.concat([{ comment: data.comment }])
            }
        }
        return habit;
    });
    resetForm(event.target, ['comment']);
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

// work with habits

function setIcon(context, icon) {
    page.popup.iconField.value = icon;
    const activeIcon = document.querySelector('.icon.icon_active');
    activeIcon.classList.remove('icon_active');
    context.classList.add('icon_active');
}

function addHabit(event) {
    event.preventDefault();
    const data = validateAndGetFormData(event.target, ['name', 'icon', 'target']);
    if (!data) {
        return;
    }
    const maxId = habits.reduce((acc,habit) => acc > habit.id ? acc : habit.id, 0);
    habits.push({
        id: maxId + 1,
        name: data.name,
        target: data.target,
        icon: data.icon,
        days: []
    });
    resetForm(event.target,['name', 'target']);
    togglePopup();
    saveData();
    rerender(maxId + 1);
}


//init
(() => {
    loadData();
    const hashId = Number(document.location.hash.replace('#', ''));
    const urlHabit = habits.find(habit => habit.id === hashId);
    if (urlHabit) {
        rerender(urlHabit.id)
    } else {
        rerender(habits[0]?.id);
    }
})();
/* ID первой привычки в массиве habits. Оператор ?. используется для безопасного доступа к свойству
id первой привычки, не вызывая ошибки, если массив пуст., если мы обратимся к habits[0].id - будет ошибка
если habits[0]?.id - будет undefined */
