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
  let width = 30;
  let height = 30;
  let step = 10;
  const boxElements = [];

  for (let i = 1; i <= amount; i += 1) {
    const boxEl = (width, height, i, step)=> {
    return `<div class = "box" 
    style="background-color:${getRandomHexColor()}; width:${width + (i - 1) * step}px; height:${height + (i - 1) * step}px">
    </div>`;
  }
    boxElements.push(boxEl(width, height, i, step))
  }

  refs.boxesEl.insertAdjacentHTML('afterbegin', boxElements.join(''));
  console.log(`Create ${amount} boxes`)
}


function destroyBoxes() {
  const boxEl = document.querySelectorAll('.box');
    boxEl.forEach(element => {
      element.remove();
    });
  console.log(`Destroy ${boxEl.length} boxes`)
};


