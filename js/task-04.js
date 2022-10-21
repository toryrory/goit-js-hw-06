
let counterValue = 0;
const decrementCount = document.querySelector('button[data-action="decrement"]');
const incrementCount = document.querySelector('button[data-action="increment"]');

const value = document.querySelector('#value');

decrementCount.addEventListener('click', decrementClick)
incrementCount.addEventListener('click', incrementClick)

function decrementClick() {
    counterValue -= 1;
    value.innerHTML = counterValue;
}
function incrementClick() {
    counterValue += 1;
    value.innerHTML = counterValue;
}
