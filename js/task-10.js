function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const REFS = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('#controls input'),
  boxesCont: document.querySelector('#boxes')
}
REFS.controls.addEventListener('click',handleControls);
function handleControls(e){
  if(e.target.nodeName!=='BUTTON')return
  if(e.target.hasAttribute('data-create')){
    const amount=+REFS.input.value;
    createBoxes(amount)
  } else if (e.target.hasAttribute('data-destroy')){
    destroyBoxes();
  }
}
function createBoxes(amount){
  let markup='';
  for(let i=0,size=30; i<amount; i+=1, size+=10){
    const color=getRandomHexColor();
    markup+=`<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
  }
  REFS.boxesCont.innerHTML=markup;
}
function destroyBoxes(){
  REFS.boxesCont.innerHTML='';
}