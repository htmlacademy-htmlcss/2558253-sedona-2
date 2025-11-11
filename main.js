const modalOpenButton = document.querySelector('.popup-open-button');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');

const decrementButtonAdults = document.querySelector('.counter-minus-adults');
const incrementButtonAdults = document.querySelector('.counter-plus-adults');
const counterInputAdults = document.querySelector('.modal-counter-input-adults');

const decrementButtonChildren = document.querySelector('.counter-minus-children');
const incrementButtonChildren = document.querySelector('.counter-plus-children');
const counterInputChildren = document.querySelector('.modal-counter-input-children');

modalOpenButton.addEventListener('click', function() {
  modal.classList.remove('modal-close');
  modal.classList.add('modal-open');
})

function closeModal() {
  modal.classList.remove('modal-open');
  modal.classList.add('modal-close');
  counterInputAdults.value = '2';
  counterInputChildren.value = '2';
};

modalCloseButton.addEventListener('click', closeModal);

window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
});

function handleMinusClickAdults() {
  let currentValue = parseInt(counterInputAdults.value);
  if (currentValue > 1) {
    counterInputAdults.value = currentValue - 1;
  }
};

function handlePlusClickAdults() {
  let currentValue = parseInt(counterInputAdults.value);
  counterInputAdults.value = currentValue + 1;
};

decrementButtonAdults.addEventListener('click', handleMinusClickAdults);
incrementButtonAdults.addEventListener('click', handlePlusClickAdults);

function handleMinusClickChildren() {
  let currentValue = parseInt(counterInputChildren.value);
  if (currentValue > 0) {
    counterInputChildren.value = currentValue - 1;
  }
};

function handlePlusClickChildren() {
  let currentValue = parseInt(counterInputChildren.value);
  counterInputChildren.value = currentValue + 1;
};

decrementButtonChildren.addEventListener('click', handleMinusClickChildren);
incrementButtonChildren.addEventListener('click', handlePlusClickChildren);
