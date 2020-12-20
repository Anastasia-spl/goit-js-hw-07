// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// НЕ ВЫПОЛНЕНО

const inputRef = document.querySelector('#controls > input')
const createBtnRef = document.querySelector('button[data-action="render"]');
const deleteBtnRef = document.querySelector('button[data-action="destroy"]');
const resultBoxRef = document.querySelector('#boxes');

// const inputValue = { value: +inputRef.textContent };
// console.log(inputValue)

function rand() {
    return Math.floor(Math.random() * 256);
}

function setRandomColor(el) {
    el.style.backgroundColor =
      "rgb(" + rand() + "," + rand() + "," + rand() + ")";
}

// inputRef.addEventListener('change', (event) => {
//     inputValue.value = event.target.value;
//     inputRef.textContent = inputValue.value;
// });

createBtnRef.addEventListener('click', createBoxes(inputRef.textContent))
// deleteBtnRef.addEventListener('click', destroyBoxes())

function createBoxes(amount) {
    const createdBoxRef = document.createElement('div');
    setRandomColor(createdBoxRef);
    let width = 30;
    let height = 30;
    createdBoxRef.style.width = width + "px";
    createdBoxRef.style.height = height + "px";

    console.log(amount)

    if (amount === null || amount === 0) {
        return; 
    } else { return resultBoxRef.append(createdBoxRef);}
}

// function destroyBoxes() {
//    
// }
