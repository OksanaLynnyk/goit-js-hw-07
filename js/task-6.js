function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputNum = document.querySelector('input')
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', onClick);
destroyButton.addEventListener('click', destroyBoxes);

function onClick() {
  boxes.innerHTML = '';
  const amount = inputNum.value;
  
  if (+amount >= 1 && +amount <= 100)
    createBoxes(amount);
  
  inputNum.value = '';
};

function createBoxes(amount) {
  let size = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    fragment.append(box);
    size += 10;
    };
  boxes.append(fragment);
};

function destroyBoxes() {
  boxes.innerHTML = '';
};


