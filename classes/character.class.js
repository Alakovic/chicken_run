class Character extends MovableObject {

    images_running = [
        '../assets/images/character/run/Run_000.png',
        '../assets/images/character/run/Run_001.png',
        '../assets/images/character/run/Run_002.png',
        '../assets/images/character/run/Run_003.png',
        '../assets/images/character/run/Run_004.png',
        '../assets/images/character/run/Run_005.png',
        '../assets/images/character/run/Run_006.png',
        '../assets/images/character/run/Run_007.png'
    ]

    images_walking = [
        '../assets/images/character/walk/Walk_000.png',
        '../assets/images/character/walk/Walk_001.png',
        '../assets/images/character/walk/Walk_002.png',
        '../assets/images/character/walk/Walk_003.png',
        '../assets/images/character/walk/Walk_004.png',
        '../assets/images/character/walk/Walk_005.png',
        '../assets/images/character/walk/Walk_006.png',
        '../assets/images/character/walk/Walk_007.png',
        '../assets/images/character/walk/Walk_008.png',
        '../assets/images/character/walk/Walk_009.png'
    ]

    images_sliding = [
        '../assets/images/character/sliding/Sliding_000.png',
        '../assets/images/character/sliding/Sliding_001.png',
        '../assets/images/character/sliding/Sliding_002.png',
        '../assets/images/character/sliding/Sliding_003.png'
    ]
    currentImage = 0;
    world;
    speed = 10;

    constructor(){
        super();
        this.loadImage('assets/images/character/idle/Idle_000.png');
        this.loadImages(this.images_walking);
        this.loadImages(this.images_running);
        this.loadImages(this.images_sliding);
        this.width = 200;
        this.height = 200;
        this.x = 50;
        this.y = 420;
        this.animate();
    }

    animate() {
        setInterval(()=>{
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.x += this.speed
            this.otherDirection = false;
            } else if (this.world.keyboard.LEFT && this.x > 0) {
            this.x -= this.speed   
            this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 50;
        }, 1000/60);

        setInterval (() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT ) {
            let i = this.currentImage % this.images_walking.length; // i = 0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8....
            let path = this.images_walking[i];
            this.img = this.imageCache[path];
            this.currentImage++;}
        },50)

         setInterval (() => {
            if(this.world.keyboard.DOWN ) {
            let i = this.currentImage % this.images_sliding.length; // i = 0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8....
            let path = this.images_sliding[i];
            this.img = this.imageCache[path];
            this.currentImage++;}
        },50)

         setInterval (() => {
            if(this.world.keyboard.SHIFT && (this.world.keyboard.RIGHT || this.world.keyboard.LEFT )) {
            let i = this.currentImage % this.images_running.length; // i = 0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8....
            let path = this.images_running[i];
            this.img = this.imageCache[path];
            this.currentImage++;}
        },50)

    }
    
    jump(){

    }
}