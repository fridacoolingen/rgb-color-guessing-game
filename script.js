var numSquares = 6
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var headerContent = document.getElementById("colorText");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  // add event listener to mode buttons
  for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function() {
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    // add click listener to squares
    squares[i].addEventListener("click", function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color of pickedColor
      if (clickedColor === pickedColor) {
        changeColors(clickedColor);
        messageDisplay.textContent = "Correct!";
        header.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play again?";
      } else {
        this.style.backgroundColor = "#4c4c4c";
        messageDisplay.textContent = "Try again";
      }
    })
  };
}


function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  headerContent.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  header.style.backgroundColor = "#95A5A6";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function(){
  reset();
});


function changeColors(color){
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color
  }
};

function pickColor(){
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
};

function generateRandomColors(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColors());
  }
  return arr;
};

function randomColors(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};
