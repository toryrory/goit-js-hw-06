const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
const text = textOutput.textContent;

textInput.addEventListener('input', event => {
    if (event.currentTarget.value) {
       return textOutput.textContent = event.currentTarget.value;
        
    }
   return textOutput.textContent = text;
}) 