const state1 = {};
const carouselListN = document.querySelector('.nails-list');
const carouselListB = document.querySelector('.books-list');
const carouselItemsN = document.querySelectorAll('.nails');
const carouselItemsB = document.querySelectorAll('.book');
const elemsN = Array.from(carouselItemsN);
const elemsB = Array.from(carouselItemsB);


carouselListB.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.book');

  if (!isItem || newActive.classList.contains('carousel-item-1-active')) {
    return;
  };
  
    
  update(newActive, elemsB);
});

carouselListN.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.nails');

  if (!isItem || newActive.classList.contains('carousel-item-1-active')) {
    return;
  };
  
  update(newActive, elemsN);
});


const update = function(newActive, items) {
  const newActivePos = newActive.dataset.pos;

  const current = items.find((elem) => elem.dataset.pos == 0);
  const first = items.find((elem) => elem.dataset.pos == -1);
  const last = items.find((elem) => elem.dataset.pos == 1);
  
  current.classList.remove('carousel-item-1-active');
  
  [current, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 1) {
    return -current
  }

  return diff;
}



