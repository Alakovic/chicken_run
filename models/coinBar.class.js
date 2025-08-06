class CoinBar extends DrawableObject {

    images_bar = [
        'assets/images/background/coinBar/0.png',
        'assets/images/background/coinBar/5.png',
        'assets/images/background/coinBar/10.png',
        'assets/images/background/coinBar/15.png',
        'assets/images/background/coinBar/20.png',
        'assets/images/background/coinBar/30.png',
        'assets/images/background/coinBar/35.png',
        'assets/images/background/coinBar/40.png',
        'assets/images/background/coinBar/45.png',
        'assets/images/background/coinBar/50.png',
        'assets/images/background/coinBar/55.png',
        'assets/images/background/coinBar/60.png',
        'assets/images/background/coinBar/65.png',
        'assets/images/background/coinBar/70.png',
        'assets/images/background/coinBar/75.png',
        'assets/images/background/coinBar/80.png',
        'assets/images/background/coinBar/85.png',
        'assets/images/background/coinBar/90.png',
        'assets/images/background/coinBar/95.png',
        'assets/images/background/coinBar/100.png'
    ];

    percentage = 100;

    constructor(){
        super();
        this.loadImages(this.images_bar)
        this.x = 30;
        this.y = 60;
        this.width = 240;
        this.height = 60;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let index = this.resolveImageIndex();
        let path = this.images_bar[index];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        const maxIndex = this.images_bar.length - 1;
        let index = Math.floor((this.percentage / 100) * maxIndex);
        if (index > maxIndex) index = maxIndex;
        if (index < 0) index = 0;
        return index;
    }
} 