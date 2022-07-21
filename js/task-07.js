const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
const changeFontSize = function () {
  spanEl.style.fontSize = this.value + 'px';
};
inputEl.addEventListener('input', changeFontSize);
