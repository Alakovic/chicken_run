class Centipede extends MovableObject {

    y=430;
    height = 80;
    width =80;

    constructor(){
    super();
    }

    offset = {
        top: 80,
        bottom: 80,
        left: 60,
        right:60
    }

    playAnimationsOnce(images, onFinish, interval) {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
            this.animationInterval = setInterval(() => {
        if (this.currentImage < images.length) {
            this.playAnimations(images);
            this.currentImage++;
        } else {
            const lastImage = images[images.length - 1];
            this.img = this.imageCache[lastImage];
            clearInterval(this.animationInterval);
            this.animationInterval = null;
            if (onFinish) onFinish();
        }
    }, interval);
}

    playAnimationLoop(images, interval) {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
            this.currentImage = 0;
            this.animationInterval = setInterval(() => {
            this.animationFrameSpeed(2);
            this.playAnimations(images);
            this.currentImage = (this.currentImage + 1) % images.length;
        }, interval);
    }

    centipedeComeOutAndGoBack(imageOut, imageIdle, imageGoIn) {
                    this.playAnimationsOnce(imageOut, () => {
                    this.playAnimationLoop(imageIdle, 1000 / 25); 
        setTimeout(() => {
                if (this.animationInterval) {
                    clearInterval(this.animationInterval);
                    this.animationInterval = null;
                    }
                    this.playAnimationsOnce(imageGoIn, () => {
                    this.centipedeComeOutAndGoBack(imageOut, imageIdle, imageGoIn);
                }, 1000 / 10); 
            },2000); 
        }, 1000 / 10); 
    }

}


