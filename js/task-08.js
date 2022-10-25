const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
     
    const formElem = event.currentTarget.elements;
    const email = formElem.email.value;
    const password = formElem.password.value;
    
    const formData = {
        email,
        password,
    }

    if (email === '' || password === '') {
        alert('Please, fill in all the fields!!!');
    } else {
        console.log(formData);
    event.currentTarget.reset(formData);
        }
}

// const {elements: { email, password }} = event.currentTarget;


//              Почему так не срабатывает?
    // const formDatas = new formData(event.currentTarget);
// task-08.js:10 Uncaught ReferenceError: Cannot access 'formData' before initialization
    // at HTMLFormElement.formSubmit