const inputRef = document.querySelector('#name-input');
const greetingRef = document.querySelector('#name-output');

inputRef.addEventListener('input', changeNameOutput);

function changeNameOutput(event) {
    greetingRef.textContent = event.target.value;
    if(event.target.value === '') {
        greetingRef.textContent = 'незнакомец';
    }
}