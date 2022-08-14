function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnRef = document.querySelector('button.change-color');
const spanRef = document.querySelector('span.color');
function btnColorHandler() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanRef.textContent = color;
}
btnRef.addEventListener('click', btnColorHandler);
