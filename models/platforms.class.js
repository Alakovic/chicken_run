class Platform extends MovableObject {

    

    constructor(imagePath,x, width,height){
        super().loadImage(imagePath)
        this.x = x;
        this.y = 500;
        this.width = width;
        this.height = height;
    }
}