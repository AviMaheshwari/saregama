// var numberOfDrumButtons = document.querySelectorAll(".coloum").length;

function alphabetsa(){
  const tomy1 = new Audio("sounds/tom-1.mp3");
   tomy1.play();
}
function alphabetre(){
    const tomy1 = new Audio("sounds/tom-2.mp3");
     tomy1.play();
  }
  function alphabetga(){
    const tomy1 = new Audio("sounds/tom-3.mp3");
     tomy1.play();
  }
  function alphabetma(){
    const tomy1 = new Audio("sounds/tom-4.mp3");
     tomy1.play();
  }
  function alphabetpa(){
    const tomy1 = new Audio("sounds/snare.mp3");
     tomy1.play();
  }
  function alphabetda(){
    const tomy1 = new Audio("sounds/crash.mp3");
     tomy1.play();
  }
  function alphabetne(){
    const tomy1 = new Audio("sounds/kick-bass.mp3");
     tomy1.play();
  }
// for (var i = 0; i < numberOfDrumButtons; i++) {

//   document.querySelectorAll(".coloum")[i].addEventListener("click", function() {

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     // buttonAnimation(buttonInnerHTML);

//   });

// }

document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
    // buttonAnimation(event.key);
  
  });
  
  
  function makeSound(key) {
  
    switch (key) {
      case "s":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "r":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
  
      case "g":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
  
      case "m":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
  
      case "p":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
  
      case "d":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
  
      case "n":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
  
  
      default: console.log(key);
  
    }
  }
  
  
  // function buttonAnimation(currentKey) {
  
  //   var activeButton = document.querySelector("." + currentKey);
  
  //   activeButton.classList.add("pressed");
  
  //   setTimeout(function() {
  //     activeButton.classList.remove("pressed");
  //   }, 100);
  
  // }
  