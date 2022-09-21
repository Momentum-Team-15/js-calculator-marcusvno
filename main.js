let squares = document.querySelectorAll(".square");
let display = document.querySelector("#inputDisplay");

// console.log(squares)
// JS, go find all the elements with the class 'square'
// querySelector only finds the first element
// JS gets the literal chunks of HTML






for (let i; i< squares.length; i++) {
  // use a loop to apply the behavior to every square
  square.addEventListener("click", (event) => {
    // listen (wait) for the user to click and then do
    // the stuff inside the {}

    // template literal allows us to put variable values in the middle
    // text
    
    console.log("Click #" + i );
    if (square.id === "squareOne") {
      console.log(`The ${square.innerText} was clicked`);
    }
  });
}