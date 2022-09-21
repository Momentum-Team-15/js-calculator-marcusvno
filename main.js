let squares = document.querySelectorAll(".square");
let display = document.querySelector("#inputDisplay");

// console.log(squares)
// JS, go find all the elements with the class 'square'
// querySelector only finds the first element
// JS gets the literal chunks of HTML


let displayStorageArray = [];
let dotCheck = false;
let sumCheck = false;

console.log(displayStorageArray);



for (let square of squares) {
  square.addEventListener("click", (event) => {
    switch (square.id) {
      //NUMBER PAD

      
      case 'squareZero':
        if(sumCheck===true)
          resetDisplay();
        displayStorageArray.push("0");
        display.innerText = displayStorageArray.join('');

        break;


      case 'squareOne':
        if(sumCheck===true)
          resetDisplay();
        displayStorageArray.push(1);
        display.innerText = displayStorageArray.join('');
        break;



      case 'squareTwo':
        if(sumCheck===true)
          resetDisplay();
        displayStorageArray.push(2);
        display.innerText = displayStorageArray.join('');
        break;

      case 'squareThree':
        if(sumCheck===true)
          resetDisplay();
        displayStorageArray.push(3);
        display.innerText = displayStorageArray.join('');


        break;

      case 'squareFour':
        if(sumCheck===true)
          resetDisplay();
        displayStorageArray.push(4);
        display.innerText = displayStorageArray.join('');

        break;

      case 'squareFive':
        if(sumCheck===true)
          resetDisplay();
        displayStorageArray.push(5);
        display.innerText = displayStorageArray.join('');
        break;

      case 'squareSix':
        if(sumCheck===true)
          resetDisplay();
        displayStorageArray.push(6);
        display.innerText = displayStorageArray.join('');
        break;

      case 'squareSeven':
        if(sumCheck===true)
          resetDisplay();
        displayStorageArray.push(7);
        display.innerText = displayStorageArray.join('');
        break;

      case 'squareEight':
        if(sumCheck===true)
          resetDisplay();
        displayStorageArray.push(8);
        display.innerText = displayStorageArray.join('');
        break;

      case 'squareNine':
        if(sumCheck===true)
          resetDisplay();
        displayStorageArray.push(9);
        display.innerText = displayStorageArray.join('');
        break;






      // OPERATORS  
      case 'squareMinus':
        if (displayStorageArray.at(-1) !== '*' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/') {
          displayStorageArray.push('-');
          display.innerText = displayStorageArray.join('');
          dotCheck = false;

        }
        break;

      case 'squarePlus':
        if (displayStorageArray.at(-1) !== '*' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/') {
          displayStorageArray.push('+');
          display.innerText = displayStorageArray.join('');
          dotCheck = false;

        }
        break;

      case 'squareMultiply':
        if (displayStorageArray.at(-1) !== '*' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/') {
          displayStorageArray.push('*');
          display.innerText = displayStorageArray.join('')
          dotCheck = false;

        }
        break;

      case 'squareDivide':
        if (displayStorageArray.at(-1) !== '*' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/') {
          displayStorageArray.push('/');
          display.innerText = displayStorageArray.join('') + " ";
          dotCheck = false;

        }
        break;

      case 'squareDot':
        if (displayStorageArray.at(-1) !== '*' && displayStorageArray.at(-1) !== '-' && displayStorageArray.at(-1) !== "+" && displayStorageArray.at(-1) !== '/' && displayStorageArray.at(-1) !== "." && dotCheck!==true) {
          displayStorageArray.push('.');
          dotCheck = true;
          display.innerText = displayStorageArray.join('') + " ";
        }
        break;



      case 'square--C':
        display.innerText = "";
        displayStorageArray = [];
        dotCheck = false;
        sumCheck = false;
        break;

      case 'squareEqual':
        let calcTotal = eval(displayStorageArray.join(''));
        display.innerText = calcTotal;
        displayStorageArray.length = 0;
        displayStorageArray.push(calcTotal);
        dotCheck = false;
        sumCheck = true;
        break;


    }



  });
}


function resetDisplay(){
  displayStorageArray.length = 0;
  display.innerText = ""
  sumCheck = false;
}