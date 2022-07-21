const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const updateName = function () {
  spanEl.textContent = inputEl.value || 'Anonymous';
};
inputEl.addEventListener('input', updateName);
