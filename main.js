//  IIFE are those type of function htat automatically runs when project is run
// IIFE = imediatly invoked function expressions.
// IIFE functions = IIFE functions has different types.
(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");
  console.log(buttons);

  //  first functionality

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let userInput = e.target.dataset.num;
      screen.value += userInput;
    });
  });
  // second functionality : equal sign
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  // third functionality, clear button for clearing screen
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();

console.log("hello word");
