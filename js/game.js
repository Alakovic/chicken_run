let canvas;
let world ;
let keyboard = new Keyboard();
let currentLevel = level1;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas , keyboard,currentLevel)

    console.log('My character is',world.character);
    
}

window.addEventListener("keydown", (e) =>{
    if(e.keyCode == 39 ){
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 37 ){
        keyboard.LEFT = true;
    }

    if(e.keyCode == 40 ){
        keyboard.DOWN = true;
    }

    if(e.keyCode == 32 ){
        keyboard.SPACE = true;
    }  
    
});


window.addEventListener("keyup", (e) =>{
    if(e.keyCode == 39 ){
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37 ){
        keyboard.LEFT = false;
    }

    if(e.keyCode == 40 ){
        keyboard.DOWN = false;
    }

    if(e.keyCode == 32 ){
        keyboard.SPACE = false;
    }    
});