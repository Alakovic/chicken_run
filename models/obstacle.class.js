class Obstacle extends MovableObject {

    constructor(imagePath,x,y,width,height,damage){
        super().loadImage(imagePath)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.damage = damage;
    }
}