const categoriesRef = document.querySelector('#categories');
const categoriesItemRef = document.querySelectorAll('#categories > .item');
console.log(
    `В списке ${categoriesItemRef.length} категории.`
);

[...categoriesItemRef].map(item => { 
    const category = item.querySelector('h2');
    const elementsList = item.querySelectorAll('li');
    console.log(`Категория: ${ category.textContent }`);
    console.log(`Количество элементов: ${elementsList.length}`)
 })