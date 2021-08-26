for(let i=0;i<7;i++)
document.querySelectorAll("button")[i].addEventListener("click",function(){
    //this keyword gives u that element where u've perfome an operation(here we perfome click of addeventlisten )
    
//    this.style.color="white"; // extra task
    var buttonPress=this.innerHTML;
    makesound(buttonPress);
});

// event= passes event as parameter in the function
addEventListener("keypress",function(event){
    makesound(event.key);
});

function makesound(key){
    switch (key) {
        case 'w':
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':    
        var audio=new Audio('sounds/tom-2.mp3');
        audio.play();break;
        case 's':    
        var audio=new Audio('sounds/tom-4.mp3');
        audio.play();break;
        case 'd':    
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play();break;
        case 'j':    
        var audio=new Audio('sounds/snare.mp3');
        audio.play();break;
        case 'k':    
        var audio=new Audio('sounds/crash.mp3');
        audio.play();break;
        case 'l':    
        var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();break;
        
    }
}
