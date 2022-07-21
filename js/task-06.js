const inputEl = document.querySelector('#validation-input');
const valHandler = function (ev) {
  if (this.value.length === +this.dataset.length) {
    // console.log('valid');
    this.classList.contains('invalid')
      ? this.classList.replace('invalid', 'valid')
      : this.classList.add('valid');
  } else {
    // console.log('invalid');
    this.classList.contains('valid')
      ? this.classList.replace('valid', 'invalid')
      : this.classList.add('invalid');
  }
};
inputEl.addEventListener('blur', valHandler);
