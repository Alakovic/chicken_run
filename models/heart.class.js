class Hearth extends MovableObject {

    images_hearth = [
        'assets/images/background/hearth/1.png',
        'assets/images/background/hearth/2.png',
        'assets/images/background/hearth/3.png',
        'assets/images/background/hearth/4.png',
        'assets/images/background/hearth/5.png',
        'assets/images/background/hearth/6.png'
    ];

    constructor(x,y) {
        super().loadImage(this.images_hearth[0]);
        this.loadImages(this.images_hearth);
        this.animate();
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;
    }
    
    offset = {
        top: 60,
        bottom: 60,
        left: 60,
        right: 60
    }

    animate() {
        setInterval(() => {
            this.animationFrameSpeed(1)
            this.playAnimations(this.images_hearth);
        }, 200 ); 
    }
}