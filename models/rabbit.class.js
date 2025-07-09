class Rabbit extends MovableObject {
    y= 440;
    height = 80;
    width =80;

    constructor(){
    super();
    }

    animate(images) {
        setInterval(() => {
            this.playAnimations(images);
        }, 40);
    }
}