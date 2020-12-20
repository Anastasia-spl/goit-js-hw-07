// // Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// // Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// // Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

//   <div id="counter">
//      <button type="button" data-action="decrement">-1</button>
//      <span id="value">0</span>
//     <button type="button" data-action="increment">+1</button>
//    </div>

const resultRef = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const counterValue = { value: +resultRef.textContent };

btnDecrement.addEventListener('click', () => {
    decrement(counterValue);
});

btnIncrement.addEventListener('click', () => {
    increment(counterValue);
});

function decrement(obj) {
    obj.value -= 1;
    resultRef.textContent = counterValue.value;
}

function increment(obj) {
    obj.value += 1;
    resultRef.textContent = counterValue.value;
}