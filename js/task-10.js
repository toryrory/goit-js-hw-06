function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const boxesContainer = document.querySelector('#boxes');
let basicBoxSize = 30;

const btnCreate = document.querySelector('[data-create]');
const btnRemove = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
let boxesQuantity = 0;

btnCreate.addEventListener('click', dataCreate);
btnRemove.addEventListener('click', dextroyBoxes);
input.addEventListener('input', inputNumber);

function inputNumber(event) {
  boxesQuantity = event.currentTarget.value;
}


function dataCreate(amount) {
  amount = boxesQuantity;
  for (let i = 0; i < amount; i += 1){
    const box = document.createElement('div');
    boxesContainer.append(box);

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${basicBoxSize}`+ 'px';
    box.style.height = `${basicBoxSize}`+ 'px';
    basicBoxSize += 10;
  }
}

function dextroyBoxes() {
  boxesContainer.querySelectorAll('div').forEach(element => element.remove());
}


// как убрать boxesQuantity при нажатии на кнопку destroy???
// КАК ПО ДРУГОМУ УКАЗАТЬ ВЫСОТУ ШИРИНУ ПЕРВОГО БОКСА (30PX)????
// как ргб формат цвета перевести в хекс???