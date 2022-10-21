
const validationInput = document.querySelector('#validation-input');
const requiredLength = Number(document.querySelector('[data-length="6"]').dataset.length);
console.log(requiredLength);

validationInput.addEventListener('blur', notOnFocus)

function notOnFocus() {
 if (validationInput.value.length !== requiredLength) {
        return validationInput.classList.add('invalid');
    } else {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
        return
    }
}



// validationInput.addEventListener('blur', () => {
//     validationInput.value.length !== requiredLength ?
//         validationInput.classList.add('invalid') :
//         validationInput.classList.add('valid') || validationInput.classList.remove('invalid');
//     })