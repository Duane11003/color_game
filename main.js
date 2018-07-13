var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    // mode buttons event listeners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            resetGame();
            // figure out how many squares to show
            // pick new colors
            // pick a new picked color
            // update page to reflect changes
        });
    }
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color of pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            reset.textContent = "Play Again?";
            h1.style.backgroundColor = clickedColor;
        } else {
           this.style.backgroundColor = "#232323";
           messageDisplay.textContent = "Try Again";
        }
        })
    };
    resetGame();
}





function resetGame(){
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // reset play again button
    reset.textContent = "New Colors";
    //change message display on span
    messageDisplay.textContent = "";
    //change colors on squares on page
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = "none";
    }
}
    h1.style.backgroundColor = "steelblue";
}


// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     numSquares = 6;
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
// });


reset.addEventListener("click", function(){
 resetGame();
})

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
        // change each color to match given color
    }
 
}

function pickColor(){
    // pick random number from 0 to last index of array
    var random = Math.floor(Math.random() * colors.length)
    // use that number to access color in array
    return colors[random];
}

function generateRandomColors(num){
    //make array
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor())
    }
    // return array
    return arr;
}


function randomColor(){
    // pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}