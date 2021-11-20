class ArithmeticError extends Error {
  constructor(message, type) {
    super(message);
    this.name = 'Arithmetic Error';
    this.type = type;
  }
}

let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  try {
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    if (!Number(secondNum)) {
      throw new ArithmeticError('Second value has invalid type', typeof(secondNum))
    }
    if (!Number(firstNum)) {
      throw new Error('First value has invalid type');
    }
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    console.log('Nothing wrong with the operation')
  } catch (err) {
    if (err instanceof ArithmeticError) {
      console.error(`Invalid Type for Arithmetic Operation: \n ${err.message} \n ${err.type} instead of a number`)
    } else {
      console.error('Another Error: ', err)
    }
  } finally {
    console.log('Try again with valid arithmetic values')
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

errorBtns[0].addEventListener('click', () => console.log('Console Log Demo'));
errorBtns[1].addEventListener('click', () => console.error('Console Error Demo'));
errorBtns[2].addEventListener('click', () => console.count('Console Count Demo'));
errorBtns[3].addEventListener('click', () => console.warn('Console Warn Demo'));
errorBtns[4].addEventListener('click', () => console.assert(3 % 2 === 0, {number: 3, errorMsg: 'The number is not even'}));
errorBtns[5].addEventListener('click', () => console.clear('Console Clear Demo'));
errorBtns[6].addEventListener('click', () => console.dir(errorBtns[6]));
errorBtns[7].addEventListener('click', () => console.dirxml(errorBtns[7]));
errorBtns[8].addEventListener('click', () => console.group());
errorBtns[9].addEventListener('click', () => console.groupEnd());
errorBtns[10].addEventListener('click', () => 
  console.table([
    { firstName: 'jane', lastName: 'doe' }, 
    { firstName: 'alex', lastName: 'doe' }
  ])
);
errorBtns[11].addEventListener('click', () => console.time('Timer Button'));
errorBtns[12].addEventListener('click', () => console.timeEnd('Timer Button'));
errorBtns[13].addEventListener('click', () => {
  function deep() {
    function deeper() {
      console.trace();
    }
    deeper();
  }
  deep();
});
errorBtns[14].addEventListener('click', () => boo());

window.onerror = (e) => {
  console.log('Oof something bad happened', e)
  TrackJS.track(e);
}
