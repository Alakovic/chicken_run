class Platform extends MovableObject {

    constructor(imagePath,x, width,height,y=500){
        super().loadImage(imagePath)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}