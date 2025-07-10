class Coin extends MovableObject {
    images_coin = [
        'assets/images/background/coin/Coin_0000000.png',
        'assets/images/background/coin/Coin_0000001.png',
        'assets/images/background/coin/Coin_0000002.png',
        'assets/images/background/coin/Coin_0000003.png'
    ];

    constructor(x,y) {
        super().loadImage(this.images_coin[0]);
        this.loadImages(this.images_coin);
        this.animate();
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 80;
    }


    animate() {
        setInterval(() => {
            this.playAnimations(this.images_coin);
        }, 150 ); 
    }
}