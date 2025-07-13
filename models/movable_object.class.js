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
    speedY = 0;
    acceleration = 1;
    
    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0 ) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        return this.y < 310;
    }

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
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed; 
    }

    moveLeftRight(minX, maxX) {
                let direction = -1; // Initial direction left , so -1
    setInterval(() => {
                this.x += this.speed * direction;
            if (this.x <= minX) {
                direction = 1;            // Change direction to right 
                this.otherDirection = true;  // look right
            } else if (this.x >= maxX) {
                direction = -1;           // Change direction to left 
                this.otherDirection = false; //look left 
            }
        }, 1000 / 60);
    }

    jump(){
        return  this.speedY = 15;
    }

}