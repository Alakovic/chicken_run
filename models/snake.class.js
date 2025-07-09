class Snake extends MovableObject {
    y= 430;
    height = 80;
    width =80;

    constructor(){
    super();
    }

    animate(images) {
        setInterval(() => {
            this.playAnimations(images);
        }, 100);
    }
}