const form = document.querySelector('login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
   event.preventDefault();
    // const {elements: { email, password }} = event.currentTarget;
    console.log('eto sabmit formy')
}