const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
const text = textOutput.textContent;

textInput.addEventListener('input', createOutput);

function createOutput(event) {
if (event.currentTarget.value) {
       return textOutput.textContent = event.currentTarget.value;  
    }
   return textOutput.innerHTML = text;
}
