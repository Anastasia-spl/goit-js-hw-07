const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const imgListRef = document.querySelector('#gallery');
// const makeImg = obj => {
//     const imgItem = document.createElement('li');
//     const img = document.createElement('img');
//     imgItem.appendChild(img);

//     img.src = obj.url;
//     img.alt = obj.alt;
//     img.classList = 'picture';
//     return imgItem;
// }
// const imgItemsArray = images.map(image => makeImg(image));
// imgListRef.append(...imgItemsArray);

const imgListRef = document.querySelector('#gallery');

const createdImgList = images.map(image => makeImg(image)).join(' ');

function makeImg(obj) {
  const imgItem = `<li><img alt="${obj.alt}" src="${obj.url}" class = "picture" /></li>`;
  return imgItem;
}

imgListRef.insertAdjacentHTML('beforeend', createdImgList);
