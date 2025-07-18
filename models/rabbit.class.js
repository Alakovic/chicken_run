class Rabbit extends MovableObject {
    y= 440;
    height = 80;
    width =80;

    constructor(){
    super();
    }

    offset = {
        top: 80,
        bottom: 60,
        left: 50,
        right: 70
    }

    animate(images) {
        setInterval(() => {
            this.animationFrameSpeed(1);
            this.playAnimations(images);
        }, 40);
    }
}