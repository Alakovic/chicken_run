class Cloud extends MovableObject{
        x =  Math.random() * 800; 
        y = 50;
        height = 100;
        width = 200;

    cloudImages = [
        'assets/images/background/clouds/image (1).png',
        'assets/images/background/clouds/image (2).png',
        'assets/images/background/clouds/image (3).png'
    ]

    randomIndex = Math.floor(Math.random() * this.cloudImages.length)

    constructor(){
        super().loadImage(this.cloudImages[this.randomIndex]);
        
    }
}