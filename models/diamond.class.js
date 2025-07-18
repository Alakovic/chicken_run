class Diamond extends MovableObject {

    blue_diamond = [
        'assets/images/background/diamonds/blue1.png',
        'assets/images/background/diamonds/blue2.png'
    ]

    red_diamond = [
        'assets/images/background/diamonds/red_diamond_1.png',
        'assets/images/background/diamonds/red_diamond_2.png'
    ]

    yellow_diamond = [
        'assets/images/background/diamonds/yellow_diamond_1.png',
        'assets/images/background/diamonds/yellow_diamond_2.png'
    ]

    constructor(x,y,level){
        super();
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
        this.setDiamondByLevel(level)
        this.animate();
    }

    offset = {
        top:100,
        bottom: 100,
        left: 100,
        right:100
    }

    setDiamondByLevel(level) {
    if (level === 1) {
            this.images = this.blue_diamond;
        } else if (level === 2) {
            this.images = this.red_diamond;
        } else {
            this.images = this.yellow_diamond;
        }
            this.loadImage(this.images[0]);
            this.loadImages(this.images);
    }

    animate() {
        setInterval(() => {
            this.animationFrameSpeed(1)
            this.playAnimations(this.images);
        }, 200 ); 
    }
}