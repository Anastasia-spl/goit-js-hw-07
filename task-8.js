// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('#controls > input')
const createBtnRef = document.querySelector('button[data-action="render"]');
const deleteBtnRef = document.querySelector('button[data-action="destroy"]');
const resultBoxRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', function () {
    const amount = +inputRef.value; 
    createBoxes(amount);
});
    
deleteBtnRef.addEventListener('click', function () {
    destroyBoxes();
});

const allBoxes = document.createElement('div');

function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
        const createdBoxRef = document.createElement('div');
        setRandomColor(createdBoxRef);
        let width = 30;
        let height = 30;
        width += 10 * i;
        height += 10 * i;
        createdBoxRef.style.width = width + "px";
        createdBoxRef.style.height = height + "px";
        createdBoxRef.style.margin = "15px";
        allBoxes.style.display = "flex";
        
        allBoxes.appendChild(createdBoxRef);
    }

    if (amount !== 0) {
        return resultBoxRef.appendChild(allBoxes); 
    } 
}

function destroyBoxes() {
    allBoxes.remove();
}

function rand() {
    return Math.floor(Math.random() * 256);
}

function setRandomColor(el) {
    el.style.backgroundColor =
      "rgb(" + rand() + "," + rand() + "," + rand() + ")";
}