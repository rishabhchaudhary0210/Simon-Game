
let buttonColors = ["green", "red", "yellow", "blue"];
let chosenColor = [];
let clickColor = [];
// console.log(randomNumber);
// console.log(chosenColor);
primaryHeading = document.querySelector("h1");
let level = 1;

// buttonClass="."+buttonColors[randomNumber];
function patternDisplay() {
    var randomNumber = Math.floor((Math.random()) * 4);
    chosenColor.push(buttonColors[randomNumber]);
    console.log("chosen = "+chosenColor);
    primaryHeading.innerHTML = `LEVEL-${level}`;
    clickColor=[];
    var buttonSelect = document.querySelector("." + buttonColors[randomNumber]);
    buttonSelect.classList.add("pressed");
    var displaySound = new Audio("sounds/Pattern-Display-Sound.wav");
    displaySound.play();
    setTimeout(function () {
        buttonSelect.classList.remove("pressed");
    }, 300);
    level++;
    console.log(randomNumber);
}

console.log(chosenColor);
let start = false;
addEventListener("keypress", function (event) {
    if (start == false) {
        if (event.key === "a" || event.key === "A") {
            patternDisplay();
            start = true;
        }
        console.log(event.key);
    }
});
for (var i = 0; i < buttonColors.length; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", handleClick);
}

function handleClick() {
    // console.log(this.getAttribute("id"));
    var clickSound = new Audio("sounds/cartoon-jump.mp3");
    clickAnimation(this.getAttribute("id"));
    clickSound.play();
    clickColor.push(this.getAttribute("id"));
    // console.log("Chosen = " + chosenColor);
    console.log("Clicked = " + clickColor);
    checkPattern();
    // patternDisplay();
}

function clickAnimation(element) {
    var clickButton = document.querySelector("#" + element);
    clickButton.classList.add("click");
    setTimeout(function () {
        clickButton.classList.remove("click");
    }, 200);
}

function gameOver(){
    var overSound = new Audio("sounds/negative_beeps-6008.mp3");
    setTimeout(function (){
        overSound.play();
    },200);
    primaryHeading.innerHTML="BETTER LUCK NEXT TIME";
    setTimeout(function (){
        location.reload();
    },5000);
}

function checkPattern(){
    for(var i=0;i<clickColor.length;i++){
        if(chosenColor[i]!=clickColor[i]){
            console.log("Wrong Pattern"+chosenColor[i]+" != "+clickColor[i]);
            gameOver();
            break;
        }
    }
    if(clickColor.length==chosenColor.length){
        clickColor=[];
        setTimeout(patternDisplay,1000);
    }
}

// function checkPattern(){

// }
