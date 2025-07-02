class Character extends MovableObject {
    
    y=320
    height = 200;
    width = 150;
    speed = 10 ;
    world;

    images_walking = [
        'assets/images/character/walk/Walk_000.png',
        'assets/images/character/walk/Walk_001.png',
        'assets/images/character/walk/Walk_002.png',
        'assets/images/character/walk/Walk_003.png',
        'assets/images/character/walk/Walk_004.png',
        'assets/images/character/walk/Walk_005.png',
        'assets/images/character/walk/Walk_006.png',
        'assets/images/character/walk/Walk_007.png',
        'assets/images/character/walk/Walk_008.png',
        'assets/images/character/walk/Walk_009.png'
    ];

    constructor(){
    super().loadImage('assets/images/character/idle/Idle_000.png') ;
    this.loadImages(this.images_walking);
    this.animate();
    }

    animate(){
        setInterval (() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.end_level_x) {
            this.x += this.speed;
            this.otherDirection = false;
        }
            if(this.world.keyboard.LEFT && this.x > 100 ) {
            this.x -= this.speed;
            this.otherDirection = true ;
        }
        this.world.camera_x = -this.x + 100;
        }, 1000 / 60 );

        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimations(this.images_walking);
            }
        }, 50);
    }

    jump(){

    }
}