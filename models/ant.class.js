class Ant extends MovableObject{

    y= 430;
    height = 80;
    width =80;

    offset = {
        top: 80,
        bottom: 60,
        left: 70,
        right: 70
    }

    constructor(){
    super();
    }

    animate(images) {
        setInterval(() => {
            this.animationFrameSpeed(1);
            this.playAnimations(images);
        }, 100);
    }

}