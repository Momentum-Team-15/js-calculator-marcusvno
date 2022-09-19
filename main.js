let squares = document.querySelectorAll(".square");
// console.log(squares)
// JS, go find all the elements with the class 'square'
// querySelector only finds the first element
// JS gets the literal chunks of HTML
let frame = document.querySelector("#picture-frame");
// JS gets the picture frame element

for (let square of squares) {
  // use a loop to apply the behavior to every square
  square.addEventListener("click", (event) => {
    // listen (wait) for the user to click and then do
    // the stuff inside the {}

    // template literal allows us to put variable values in the middle
    // text
    square.classList.remove("purple");
    square.classList.add("teal");
    if (square.id === "square--one") {
      console.log(`The ${square.innerText} was clicked`);
      frame.style.backgroundImage = 'url("http://placekitten.com/300/300")';
      console.log(frame.style.backgroundImage);
    }
  });
}