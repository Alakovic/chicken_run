class Cloud extends MovableObject {

    constructor(path){
        super().loadImage(path)
        this.x = 200 + Math.random() * 500 ; // Zahl zwischen 200 und 700 
        this.y = 10;
        this.width = 1000;
        this.height = 400;
        this.animate();
    }

    animate() {
        setInterval(()=>{
            this.x -= 0.15;
        },1000 / 60)
    }
}