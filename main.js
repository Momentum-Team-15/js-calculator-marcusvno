let squares = document.querySelectorAll(".square");
let display = document.querySelector("#inputDisplay");

// console.log(squares)
// JS, go find all the elements with the class 'square'
// querySelector only finds the first element
// JS gets the literal chunks of HTML


let displayStorageArray = [];
let numberOne;
let numberTwo;

console.log(displayStorageArray);



for (let square of squares) {
  square.addEventListener("click", (event) => {
    switch(square.id){
      //NUMBER PAD
      case 'squareZero' :
          if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" &&  displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" && displayStorageArray.length !== 0){
            displayStorageArray.push(0);
            drawDisplay();
          }
          break;
      case 'squareOne' :
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          displayStorageArray.push(1);
          drawDisplay();
        } else if(displayStorageArray.at(-1) === 'x' && displayStorageArray.at(-1) === '-' && displayStorageArray.at(-1) === "+" && displayStorageArray.at(-1) === '/' && displayStorageArray === "=" ) {
          numberOne = parseInt(displayStorageArray.join(''));
          


        }
        break;

      case 'squareTwo' :
        display.innerText = 2;
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          displayStorageArray.push(2);
          drawDisplay();
        }
        break;

      case 'squareThree':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          displayStorageArray.push(3);
          drawDisplay();

        }
        break;

      case 'squareFour':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          displayStorageArray.push(4);
          drawDisplay();
        }
        break;

      case 'squareFive':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          displayStorageArray.push(5);
          drawDisplay();
        }
        break;

      case 'squareSix':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          displayStorageArray.push(6);
          drawDisplay();
        }
        break;
      
      case 'squareSeven':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          displayStorageArray.push(7);
          drawDisplay();
        }
        break;
 
      case 'squareEight':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          displayStorageArray.push(8);
          display.innerText = 8;
          drawDisplay();

        }
        break;
 
      case 'squareNine':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          displayStorageArray.push(9);
          drawDisplay();

        }
        break;






        // OPERATORS  
      case 'squareMinus':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          drawDisplay('-')
        }
        break;
 
      case 'squarePlus':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          display.innerText = '+';

        }
        break;
 
      case 'squareMultiply':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          display.innerText = '0';
        }
        break;
 
      case 'squareDivide':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray !== "=" ){
          display.innerText = '/';
        }
        break;

      case 'square--C':
        display.innerText = "";
        displayStorageArray = [" "];
        console.log = [displayStorageArray]
        break;

    }
    

    
  });
}


function drawDisplay(operator){
  if(operator === undefined)
    display.innerText = displayStorageArray.join('');
  else{
    numberOne = parseInt(displayStorageArray.join(''));
    displayStorageArray.push(operator);
    display.innerText = displayStorageArray.join('') + " ";
  }
}

/*function drawCalc(numOp){
  
}*/