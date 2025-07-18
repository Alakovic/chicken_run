class Spike extends Obstacle {
    offset = {
        top: 70,
        bottom: 70,
        left: 100,
        right: 100
    }

    constructor(imagePath,x,y,width,height,damage) {
        super(imagePath,x,y,width,height,damage).loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.damage = damage;
    }
}