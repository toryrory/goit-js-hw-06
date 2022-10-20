
let counterValue = 0;
const decrementCount = document.querySelector('button[data-action="decrement"]');
const incrementCount = document.querySelector('button[data-action="increment"]');

const value = document.querySelector('#value');

decrementCount.addEventListener('click', () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
})
incrementCount.addEventListener('click', () => {
    counterValue += 1;
    value.innerHTML = counterValue;
})


//                  ПОЧЕМУ КОД ГДЕ Я ИСПОЛЬЗУЮ ССЫЛКУ НА КОЛБЕК ФУНКЦИЮ НЕ РАБОТАЕТ???
// const decrementClick = () => {
//     counterValue -= 1;
//     value.innerHTML = counterValue;
// }
// const incrementClick = () => {
//     counterValue += 1;
//     document.getElementById('value').textContent = counterValue
// }
// decrementCount.addEventListener('click,', decrementClick)
// incrementCount.addEventListener('click,', incrementClick)

// console.log(counterValue)
// console.log(decrementCount.dataset.action)
// console.log(incrementCount)