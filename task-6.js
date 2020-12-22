const inputRef = document.querySelector('#validation-input'); 

inputRef.addEventListener('blur', checkSymbolQuantity);

function checkSymbolQuantity(event) {
    if (event.target.value.length === Number(inputRef.getAttribute('data-length'))) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {inputRef.classList.add('invalid');}
}