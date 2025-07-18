class Snake extends MovableObject {
    y= 430;
    height = 80;
    width =80;

    constructor(){
    super();
    }

    offset = {
        top: 80,
        bottom: 60,
        left: 75,
        right: 75
    }

    animate(images) {
        setInterval(() => {
            this.animationFrameSpeed(1);
            this.playAnimations(images);
        }, 100);
    }
}