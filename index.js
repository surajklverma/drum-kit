
document.body.style.setProperty("-webkit-transform", "rotate(-90deg)", null);


var numberOfDrums=document.querySelectorAll(".drum").length;//number of Drums


//function for playing sound on clicks of buttons
for (i=0; i<numberOfDrums; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


//function for taking input from keyboard and playing sounds
document.addEventListener("keypress", function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});



//make sound function
function makeSound(key)
{
  switch (key) {
    case "w":
      var audio=new Audio("sounds/crash.mp3")
      audio.play();
    break;

    case "a":
      var audio=new Audio("sounds/kick-bass.mp3")
      audio.play();
    break;

    case "s":
      var audio=new Audio("sounds/snare.mp3")
      audio.play();
    break;

    case "d":
      var audio=new Audio("sounds/tom-1.mp3")
      audio.play();
    break;

    case "j":
      var audio=new Audio("sounds/tom-2.mp3")
      audio.play();
    break;

    case "k":
      var audio=new Audio("sounds/tom-3.mp3")
      audio.play();
    break;

    case "l":
      var audio=new Audio("sounds/tom-4.mp3")
      audio.play();
    break;
    default: console.log(key);

  }
}




function buttonAnimation(currentKey)
{
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}
