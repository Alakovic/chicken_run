class Platform extends MovableObject {

    height = 100;

    constructor(imagePath,x, width){
        super().loadImage(imagePath)
        this.x = x;
        this.y = 600 - this.height;
        this.width = width;
    }
}