const inputRef = document.querySelector('#validation-input'); 

inputRef.addEventListener('blur', checkSymbolQuantity);
inputRef.addEventListener('input', removeCheckingClasslist)

function checkSymbolQuantity(event) {
    if (event.target.value.length === Number(inputRef.getAttribute('data-length'))) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {inputRef.classList.add('invalid');}
}

function removeCheckingClasslist() {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
}