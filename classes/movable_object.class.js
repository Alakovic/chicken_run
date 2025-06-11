class MovableObject {
    x;
    y;
    img;
    width;
    height;
    imageCache = {};
    otherDirection = false;
    speedY = 0;
    acceleration = 1;

    applyGravity(){
        setInterval( () => {
            if(this.isAboveGround() || this.speedY > 0 ) {
                this.y -=  this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25 ) ;
    }

    isAboveGround(){
        return this.y < 420;
    }

    loadImage(path) {
        this.img = new Image ();
        this.img.src = path
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
            this.x += this.speed
            this.otherDirection = false;
        
    }

    moveLeft(){
        this.x -= this.speed   
        this.otherDirection = true;
    }

    playAnimations(images) {
        let i = this.currentImage % images.length; // i = 0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8....
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
    }
}