var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//deceting button press.
for(var i=0;i<numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAmimation(buttonInnerHtml);
  
})}
//detecting keyboard press.
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAmimation(event.key);
});

function makeSound(key){

    switch(key){
     case "w":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
 
     case "a":
             var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
             break; 
      case "s":
             var tom3 = new Audio("sounds/tom-3.mp3");
                 tom3.play();
                 break; 
     case "d":
             var tom4 = new Audio("sounds/tom-4.mp3");
                     tom4.play();
                     break;
     case "j":
              var snare = new Audio("sounds/snare.mp3");
                         snare.play();
                         break;    
      case "k":
              var kick = new Audio("sounds/kick-bass.mp3");
                             kick.play();
                             break;    
     case "l":
             var crash = new Audio("sounds/crash.mp3");
                                 crash.play();
                                 break;    
                                 
         
        
 
    }
}
//adding animation to the button.

function buttonAmimation (currentkey){
   var activeButton = document.querySelector("."+currentkey);
   activeButton.classList.add("pressed");
   
   //setting timeout the animation.

   setTimeout(function() {
    activeButton.classList.remove("pressed");
    
   }, 100);
}