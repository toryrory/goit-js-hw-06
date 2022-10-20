
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// const numbOfCategories = document.querySelectorAll('li.item').length;
// console.log(`Number of categories: ${numbOfCategories}`)

const categories = document.querySelector('#categories');
const categoriesItem = categories.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length}`);

for (let i = 0; i <= categoriesItem.length; i += 1) {
    const categoriesItemTitle = categoriesItem[i].querySelector('h2').textContent;
    console.log('Category:', categoriesItemTitle);
    const categoriesItemElem = categoriesItem[i].querySelectorAll('li').length;
    console.log('Elements:', categoriesItemElem);
}

 