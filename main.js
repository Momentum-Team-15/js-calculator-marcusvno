let squares = document.querySelectorAll(".square");
let display = document.querySelector("#inputDisplay");

// console.log(squares)
// JS, go find all the elements with the class 'square'
// querySelector only finds the first element
// JS gets the literal chunks of HTML


let displayStorageArray = [];
let operatorCheck = false;
let operatorStore;

console.log(displayStorageArray);



for (let square of squares) {
  square.addEventListener("click", (event) => {
    switch (square.id) {
      //NUMBER PAD
      case 'squareZero':
        displayStorageArray.push("0");
        display.innerText = displayStorageArray.join('');

        break;


      case 'squareOne':
        displayStorageArray.push(1);
        display.innerText = displayStorageArray.join('');
        break;



      case 'squareTwo':
        displayStorageArray.push(2);
        display.innerText = displayStorageArray.join('');
        break;

      case 'squareThree':
        displayStorageArray.push(3);
        display.innerText = displayStorageArray.join('');


        break;

      case 'squareFour':
        displayStorageArray.push(4);
        display.innerText = displayStorageArray.join('');

        break;

      case 'squareFive':
        displayStorageArray.push(5);
        display.innerText = displayStorageArray.join('');
        break;

      case 'squareSix':
        displayStorageArray.push(6);
        display.innerText = displayStorageArray.join('');
        break;

      case 'squareSeven':
        displayStorageArray.push(7);
        display.innerText = displayStorageArray.join('');
        break;

      case 'squareEight':
        displayStorageArray.push(8);
        display.innerText = displayStorageArray.join('');
        break;

      case 'squareNine':
        displayStorageArray.push(9);
        display.innerText = displayStorageArray.join('');
        break;






      // OPERATORS  
      case 'squareMinus':
        if (displayStorageArray.at(-1) !== '*' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/') {
          displayStorageArray.push('-');
          display.innerText = displayStorageArray.join('');
        }
        break;

      case 'squarePlus':
        if (displayStorageArray.at(-1) !== '*' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/') {
          displayStorageArray.push('+');
          display.innerText = displayStorageArray.join('');
        }
        break;

      case 'squareMultiply':
        if (displayStorageArray.at(-1) !== '*' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/') {
          displayStorageArray.push('*');
          display.innerText = displayStorageArray.join('')
        }
        break;

      case 'squareDivide':
        if (displayStorageArray.at(-1) !== '*' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/') {
          displayStorageArray.push('/');
          display.innerText = displayStorageArray.join('') + " ";
        }
        break;

      case 'squareDot':
        if (displayStorageArray.at(-1) !== '*' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray.at(-1) !== ".") {
          displayStorageArray.push('.');
          display.innerText = displayStorageArray.join('') + " ";
        }
        break;



      case 'square--C':
        display.innerText = "";
        displayStorageArray = [];
        operatorCheck = false;
        operatorStore = "";
        break;

      case 'squareEqual':
        let calcTotal = eval(displayStorageArray.join(''));
        display.innerText = calcTotal;
        displayStorageArray.length = 0;
        displayStorageArray.push(calcTotal);
        break;


    }



  });
}


