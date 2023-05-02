// Playing a different sound when a button or key is pressed
// 1.Detecting Button pressed

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// using for loop to add a click-event-listener to each button with the class "drum"
// when a button is clicked, the makeSound function is called with the innerHTML of the button as an argument
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // what to do
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// 2.Detecting Keyboard pressed: using the addEventListener method to listen for a key press event
// When a key is pressed, the makeSound function is called

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// the makeSound function uses a switch statement to determine which sound to play based on the key or button that was pressed
// Each case statement corresponds to a different sound file, which is played using the Audio obj and the play method
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1a = new Audio("./sounds/tom-1.mp3");
      tom1a.play();
      break;

    case "a":
      var tom2a = new Audio("sounds/tom-2.mp3");
      tom2a.play();
      break;

    case "s":
      var tom3a = new Audio("sounds/tom-3.mp3");
      tom3a.play();
      break;

    case "d":
      var tom4a = new Audio("sounds/tom-4.mp3");
      tom4a.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash1 = new Audio("sounds/crash.mp3");
      crash1.play();
      break;

    case "l":
      var kick1 = new Audio("sounds/kick-bass.mp3");
      kick1.play();
      break;

    default:
      console.log(key);
    // if a key or button is pressed that's not associated with a sound file,
    // the default case is trigger and a message is logged to the console with the innerHTML of the button that was clicked
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
