const loginFormRef = document.querySelector('.login-form');
function formSubmitHandler(event) {
  event.preventDefault();
  const email = this.elements.email.value;
  const password = this.elements.password.value;
  if (email.trim() === '' || password.trim() === '') {
    alert('All fields must be filled!');
    return;
  }
  console.log({ email, password });
  this.reset();
}
loginFormRef.addEventListener('submit', formSubmitHandler);
