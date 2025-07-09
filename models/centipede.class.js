class Centipede extends MovableObject {

    y=430;
    height = 80;
    width =80;

    constructor(){
    super();
    }

    playAnimationsOnce(images, onFinish, interval) {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
            this.currentImage = 0;
            this.animationInterval = setInterval(() => {
        if (this.currentImage >= images.length) {
            clearInterval(this.animationInterval);
            this.animationInterval = null;
            if (onFinish) onFinish();
            return;
        }
            this.playAnimations(images);
        }, interval);
    } 

    centipedeComeOutAndGoBack(imageOut, imageIdle, imageGoIn) {
    this.playAnimationsOnce(imageOut, () => {
        this.playAnimationsOnce(imageIdle, () => {
            this.playAnimationsOnce(imageGoIn, () => {
                this.centipedeComeOutAndGoBack(imageOut, imageIdle, imageGoIn); // loop
            });
        },1000 / 25); // Brzina idle animacije
    }, 1000 / 25); // Brzina izlaska
}
}

