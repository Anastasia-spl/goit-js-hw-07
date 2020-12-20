const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const makeIngredientItem = ingredient => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = `${ingredient}`; 
    return listItemRef;
}

const arrayOfIngrItems = ingredients.map(arrayElement => makeIngredientItem(arrayElement));

ingredientsListRef.append(...arrayOfIngrItems);
