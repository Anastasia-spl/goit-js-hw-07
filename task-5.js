const inputRef = document.querySelector('#name-input');
const greetingRef = document.querySelector('#name-output');

inputRef.addEventListener('input', changeNameOutput);
inputRef.addEventListener('blur', saveInitialGreeting);

function changeNameOutput(event) { greetingRef.textContent = event.target.value; } 
function saveInitialGreeting(event) { if (event.target.value = '') {greetingRef.textContent = 'незнакомец'}}