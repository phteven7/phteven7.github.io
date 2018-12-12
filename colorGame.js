var numSquares = 6
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i<squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";``
    }
});

resetButton.addEventListener("click", function(){
  //Generate new Colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;
  //Reset the correct message after the player wins
  messageDisplay.textContent = " ";
  //change colors of squares
  for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
  //Add color to squares
  squares[i].style.backgroundColor = colors[i];

  //Add click listeners to squares
  squares[i].addEventListener("click", function(){
  //Grab color of picked square
    var clickedColor = this.style.backgroundColor;
  //Compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = (pickedColor);
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color){
  //Loop through all squares
  for(var i=0;i < colors.length; i++){
  //Change color to match pickedColor
    squares[i].style.backgroundColor = color;
  }
}
function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num){
  //Make an array
  var arr = [];
  //Repeat num times
  for(var i=0; i<num; i++){
    //getRandomColor and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //Pick a "red" 0-255
  var r = Math.floor(Math.random() * 256)
  //Pick a "green" 0-255
  var g = Math.floor(Math.random() * 256)
  //Pick a "blue" 0-255
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
