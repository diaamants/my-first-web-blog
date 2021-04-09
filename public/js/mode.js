const state2 = {};
const carouselList2 = document.querySelector('.carousel-list-2');
const carouselItems2 = document.querySelectorAll('.carousel-item-2');
const elems2 = Array.from(carouselItems2);

carouselList2.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel-item-2');

  if (!isItem || newActive.classList.contains('carousel-item-2-active')) {
    return;
  };
  
  update1(newActive);
});

const update1 = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems2.find((elem) => elem.dataset.pos == 0);
  const prev = elems2.find((elem) => elem.dataset.pos == -1);
  const next = elems2.find((elem) => elem.dataset.pos == 1);
  const prev1 = elems2.find((elem) => elem.dataset.pos == -2);
  const next1 = elems2.find((elem) => elem.dataset.pos == 2);
  const first = elems2.find((elem) => elem.dataset.pos == -3);
  const last = elems2.find((elem) => elem.dataset.pos == 3);
  
  current.classList.remove('carousel-item-2-active');
  
  [current, prev, next, prev1, next1, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos1(itemPos, newActivePos)
  });
};

const getPos1 = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 3) {
    return -current
  }

  return diff;
}
