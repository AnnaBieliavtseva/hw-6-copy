function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.getElementById('boxes')
}

function createBoxes(amount) {
  if (+amount > 100 || +amount < 0) {
    return;
  } 
const elements = []
let size = 30;
for (let i = 1; i <= amount; i++) {
  const markup = document.createElement('div');
  markup.style.width = `${size}px`;
  markup.style.height = `${size}px`;
  markup.style.marginTop = '10px'
  markup.style.backgroundColor = getRandomHexColor();
  elements.push(markup);
  size+=10;
}
refs.boxes.append(...elements);
}

 refs.btnCreate.addEventListener('click', onBtnCreate)

function onBtnCreate() {
const inputValue = Number(refs.input.value);
  createBoxes(inputValue);
  refs.btnCreate.removeEventListener('click', onBtnCreate);
}

function destroyBoxes() {
  refs.btnCreate.addEventListener('click', onBtnCreate);
  refs.boxes.innerHTML = '';
  refs.input.value = '';
  size = 30;
}

refs.btnDestroy.addEventListener('click', destroyBoxes)


