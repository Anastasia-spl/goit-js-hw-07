// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

// inputRef.setAttribute('min', '10');
// inputRef.setAttribute('max', '82');

inputRef.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    console.log(textRef.style.fontSize = event.target.value + 'px');
}
