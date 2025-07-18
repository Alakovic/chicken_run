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
    acceleration = 2.5;
    energy;
    damage;
    lastHit = 0
    animationFrameCounter = 0; 
    currentAnimationImages;

    offset = {
        top : 0,
        bottom: 0,
        left: 0,
        right:30
    }
    
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
        if (this.currentAnimationImages !== images) {
        this.currentAnimationImages = images;
        this.currentImage = 0;
        this.animationFrameCounter = 0;
        }

        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
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
        return  this.speedY = 20;
    }

    isCollidable() {
        return (
            this instanceof Character || 
            this instanceof Ant ||
            this instanceof Snake ||
            this instanceof Rabbit ||
            this instanceof Obstacle ||
            this instanceof Box ||
            this instanceof Coin ||
            this instanceof Hearth ||
            this instanceof Diamond ||
            this instanceof Centipede
        );
    }

    flipImage(ctx) {
        if (this.otherDirection) {
            ctx.translate(this.x + this.width, this.y);
            ctx.scale(-1, 1);
        } else {
            ctx.translate(this.x, this.y);
        }
        ctx.drawImage(this.img, 0, 0, this.width, this.height);
    }

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x &&
            this.y + this.height - this.offset.bottom > mo.y &&
            this.x + this.offset.left < mo.x &&
            this.y  + this.offset.top < mo.y + mo.height
    }

    drawHitbox(ctx) {
    if(this.isCollidable()) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.rect(
        this.offset.left,
        this.offset.top,
        this.width - this.offset.left - this.offset.right,
        this.height - this.offset.top - this.offset.bottom
    );
        ctx.stroke();
        }
    }

    hit(damage) {
        this.energy -= damage
        if(this.energy < 0) {
            this.energy = 0; 
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    
    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms 
        timepassed = timepassed / 1000 ; // Difference in s 
        return timepassed < 0.25;
    }

    animationFrameSpeed(speed){
        this.animationFrameCounter++;
        if(this.animationFrameCounter >= speed) {
            this.animationFrameCounter = 0;
            this.currentImage++;
        }
    }

}