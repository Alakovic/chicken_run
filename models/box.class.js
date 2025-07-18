class Box extends MovableObject {

    constructor(imagePath,x,y,width,height){
        super().loadImage(imagePath)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.setOffsetBySize();
    }

    setOffsetBySize() {
        if (this.width === 100) {
            this.offset = { top: 5, bottom: 5, left:5 , right:5 };
        } else if (this.width === 80) {
            this.offset = { top: 5, bottom: 5, left: 5, right: 5 };
        } else if (this.width === 60) {
            this.offset = { top: 5, bottom: 5, left: 5, right: 5 };
        } else {
            this.offset = { top: 10, bottom: 10, left: 10, right: 10 };
        }
    }
}