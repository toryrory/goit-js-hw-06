// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arr = [];
for (let i = 0; i <= ingredients.length - 1; i += 1) {
  const listElem = document.createElement('li');
  listElem.classList.add('item');
  // listElem.setAttribute('class', 'item')
  listElem.textContent = ingredients[i];
  arr.push(listElem)
  
}
const ingredientsList = document.querySelector('#ingredients').append(...arr);