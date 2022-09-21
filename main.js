let squares = document.querySelectorAll(".square");
let display = document.querySelector("#inputDisplay");

// console.log(squares)
// JS, go find all the elements with the class 'square'
// querySelector only finds the first element
// JS gets the literal chunks of HTML


let displayStorageArray = [0];



for (let square of squares) {
  square.addEventListener("click", (event) => {
    switch(square.id){
      case 'squareZero' :
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' &&  )
          displayStorageArray.push(0);
        console.log(displayArray);
        break;
      case 'squareOne' :
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' &&  )
        displayStorageArray.push(0);
        break;

      case 'squareTwo' :
        display.innerText = 2;
         if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' &&  )
          displayStorageArray.push(0);
        break;

      case 'squareThree':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' &&  )
        displayStorageArray.push(0);
        display.innerText = 3;
        break;

      case 'squareFour':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' &&  ){
          displayStorageArray.push(0);
          display.innerText = 4;
        }
        break;

      case 'squareFive':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' &&  ){
          displayStorageArray.push(0);
          display.innerText = 5;
        }
        break;

      case 'squareSix':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' &&  ){
          displayStorageArray.push(0);
          display.innerText = 6;
        }
        break;
      
      case 'squareSeven':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' &&  ) {
          displayStorageArray.push(0);
        }
            
        }
        display.innerText = 7;
        break;
 
      case 'squareEight':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' &&  )
          displayStorageArray.push(0);
        display.innerText = 8;
        break;
 
      case 'squareNine':
        if(displayStorageArray.at(-1) !== 'x' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' &&  )
          displayStorageArray.push(0);
        display.innerText = 9;
        break;
 
      case 'squareMinus':
        
        display.innerText = '-';
        break;
 
      case 'squarePlus':
        display.innerText = '+';
        break;
 
      case 'squareMultiply':
        display.innerText = '0';
        break;
 
      case 'squareDivide':
        display.innerText = '/';
        break;

      case 'square--C':
        display.innerText = "";
        displayStorageArray = [0];
        console.log = [displayStorageArray]
        break;

    }
    
    if (square.id === "squareOne") {
      console.log(`The ${square.innerText} was clicked`);
    }
  });
}