class MovableObject {
    x = 120;
    y = 400;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0 ;
    speed = 0.15;
    otherDirection = false;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimations(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight(){

    }

    moveLeft(){
        setInterval(() =>{
            this.x -= this.speed ;
        },1000 / 60);
        
    }

}