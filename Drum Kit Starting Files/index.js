for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll(".drum") [i].addEventListener("click", handleClick);

function handleClick(){

    var buttonInnerHTML =  this.innerHTML;
    
    switch (buttonInnerHTML) {
        case "w":
                let tom_1 = new Audio('./sounds/tom-1.mp3')
                tom_1.play()
            break;
        case "a":
                let tom_2 = new Audio('./sounds/tom-2.mp3')
                tom_2.play()
            break;
        case "s":
                let tom_3 = new Audio('./sounds/tom-3.mp3')
                tom_3.play()
            break;
        case "d":
                let tom_4 = new Audio('./sounds/tom-4.mp3')
                tom_4.play()
            break;
        case "j":
                let crash = new Audio('./sounds/crash.mp3')
                crash.play()            
            break;
        case "k":
                let kickBASS = new Audio('./sounds/kick-bass.mp3')
                kickBASS.play() 
            break;
        case "l":
                let snare = new Audio('./sounds/snare.mp3')
                snare.play()  
            break;

        default:
            break;
    }
    
}
}

