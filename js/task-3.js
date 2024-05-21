const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const defaultName = nameOutput.textContent;

nameInput.addEventListener('input', onInput)
function onInput(evt) {
    nameOutput.textContent = evt.currentTarget.value.trim() || defaultName;
};

