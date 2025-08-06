class StatusBar extends DrawableObject {

    images_bar = [
        'assets/images/background/health_bar/0.png',
        'assets/images/background/health_bar/5.png',
        'assets/images/background/health_bar/10.png',
        'assets/images/background/health_bar/15.png',
        'assets/images/background/health_bar/20.png',
        'assets/images/background/health_bar/25.png',
        'assets/images/background/health_bar/30.png',
        'assets/images/background/health_bar/35.png',
        'assets/images/background/health_bar/40.png',
        'assets/images/background/health_bar/45.png',
        'assets/images/background/health_bar/50.png',
        'assets/images/background/health_bar/55.png',
        'assets/images/background/health_bar/60.png',
        'assets/images/background/health_bar/65.png',
        'assets/images/background/health_bar/70.png',
        'assets/images/background/health_bar/75.png',
        'assets/images/background/health_bar/80.png',
        'assets/images/background/health_bar/85.png',
        'assets/images/background/health_bar/90.png',
        'assets/images/background/health_bar/95.png',
        'assets/images/background/health_bar/100.png',
    ];

    percentage = 100;

    constructor(){
        super();
        this.loadImages(this.images_bar)
        this.x = 35;
        this.y = 10;
        this.width = 300;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let index = this.resolveImageIndex();
        let path = this.images_bar[index];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        const maxIndex = this.images_bar.length - 1;
        let index = Math.round((this.percentage / 100) * maxIndex);
        if (index > maxIndex) index = maxIndex;
        if (index < 0) index = 0;
        return index;
    }
}