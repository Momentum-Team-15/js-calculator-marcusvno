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
        if (displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" && displayStorageArray.length !== 0) {
          displayStorageArray.push(0);
        }
        break;
      case 'squareOne':
        displayStorageArray.push(1);
        display.innerText = displayStorageArray.join('') + " ";
        break;



      case 'squareTwo':
        display.innerText = 2;
        if (displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=") {
          displayStorageArray.push(2);
          display.innerText = displayStorageArray.join('') + " ";
        }
        break;

      case 'squareThree':
        if (displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=") {
          displayStorageArray.push(3);
          display.innerText = displayStorageArray.join('') + " ";

        }
        break;

      case 'squareFour':
        if (displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=") {
          displayStorageArray.push(4);
          display.innerText = displayStorageArray.join('') + " ";
        }
        break;

      case 'squareFive':
        if (displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=") {
          displayStorageArray.push(5);
          display.innerText = displayStorageArray.join('') + " ";
        }
        break;

      case 'squareSix':
        if (displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=") {
          displayStorageArray.push(6);
          display.innerText = displayStorageArray.join('') + " ";
        }
        break;

      case 'squareSeven':
        if (displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=") {
          displayStorageArray.push(7);
          display.innerText = displayStorageArray.join('') + " ";
        }
        break;

      case 'squareEight':
        if (displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=") {
          displayStorageArray.push(8);
          display.innerText = displayStorageArray.join('') + " ";

        }
        break;

      case 'squareNine':
        if (displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=") {
          displayStorageArray.push(9);
          display.innerText = displayStorageArray.join('') + " ";

        }
        break;






      // OPERATORS  
       case 'squareMinus':
          displayStorageArray.push('-');          
          display.innerText = displayStorageArray.join('');
          break; 

       case 'squarePlus':
        displayStorageArray.push('+');
        display.innerText = displayStorageArray.join('');

        break;

      case 'squareMultiply':
        displayStorageArray.push('*');
        display.innerText = displayStorageArray.join('');
  

    break;
 
       case 'squareDivide':
    displayStorageArray.push('/');
    display.innerText = displayStorageArray.join('');

    break;

       case 'squareDot':
    displayStorageArray.push('.');
    break;

          

      case 'square--C':
        display.innerText = "";
        displayStorageArray = [];
        operatorCheck = false;
        operatorStore = "";
        break;

      case 'squareEqual':
        display.innerText = math.evaluate(displayStorageArray.join(''))
        break;
    

  }
    

    
  });
}


