function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  controlsEl: document.querySelector('#controls'),
  boxesEl : document.querySelector('#boxes'),
}

refs.controlsEl.addEventListener('click', onButtonClick)

function onButtonClick ( e ) {
  if ( e.target.nodeName !== 'BUTTON' ) {
    return
  }
  let valueInput = refs.controlsEl.firstElementChild.value

  if ( e.target.textContent == "Create" ) {
    createBoxes(valueInput)
  }

  else if ( e.target.textContent == "Destroy" ) {
    destroyBoxes()
  }
}


function createBoxes(amount) {
  let i;
  let width = 30;
  let height = 30;
  let step = 10;
  const boxElements = [];

  for (i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.classList.add('box')
    boxEl.style.width = `${width+(i-1)*step}px`
    boxEl.style.height = `${height+(i-1)*step}px`
    boxEl.style.backgroundColor = `${getRandomHexColor()}`
    boxElements.push(boxEl)
  }
  refs.boxesEl.append(...boxElements);
  console.log(`Create ${amount} boxes`)
  
}

function destroyBoxes() {
  const boxEl = document.querySelectorAll('.box');
    boxEl.forEach(element => {
    element.remove()
    });
  console.log(`Destroy ${boxEl.length} boxes`)
};


