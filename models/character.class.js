class Character extends MovableObject {
    
    y=320
    height = 200;
    width = 150;
    speed = 10 ;
    world;
    energy = 100;
    coinCount = 0;

    offset = {
        top: 50,
        bottom: 20,
        left: 30,
        right: 30
    }

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

    images_jumping = [
        'assets/images/character/jump/Jump_000.png',
        'assets/images/character/jump/Jump_001.png',
        'assets/images/character/jump/Jump_002.png',
        'assets/images/character/jump/Jump_003.png',
        'assets/images/character/jump/Jump_004.png'
    ];

    images_idle = [
        'assets/images/character/idle/Idle_000.png',
        'assets/images/character/idle/Idle_001.png',
        'assets/images/character/idle/Idle_002.png',
        'assets/images/character/idle/Idle_003.png',
        'assets/images/character/idle/Idle_004.png',
        'assets/images/character/idle/Idle_005.png',
        'assets/images/character/idle/Idle_006.png',
        'assets/images/character/idle/Idle_007.png',
        'assets/images/character/idle/Idle_008.png',
        'assets/images/character/idle/Idle_009.png',
        'assets/images/character/idle/Idle_010.png',
        'assets/images/character/idle/Idle_011.png'
    ];

    images_die = [
        'assets/images/character/die/Die_000.png',
        'assets/images/character/die/Die_001.png',
        'assets/images/character/die/Die_002.png',
        'assets/images/character/die/Die_003.png',
        'assets/images/character/die/Die_004.png',
        'assets/images/character/die/Die_005.png',
        'assets/images/character/die/Die_006.png',
        'assets/images/character/die/Die_007.png',
        'assets/images/character/die/Die_008.png',
        'assets/images/character/die/Die_009.png',
    ];

    images_hurt = [
        'assets/images/character/hurt/Hurt_000.png',
        'assets/images/character/hurt/Hurt_001.png',
        'assets/images/character/hurt/Hurt_002.png',
    ];

    constructor(){
    super().loadImage('assets/images/character/idle/Idle_000.png') ;
    this.loadImages(this.images_walking);
    this.loadImages(this.images_jumping);
    this.loadImages(this.images_idle);
    this.loadImages(this.images_die);
    this.loadImages(this.images_hurt);
    this.applyGravity();
    this.animate();
    }

    animate(){
        setInterval (() => {
            const maxX = this.world.level.end_level_x - this.width;
            if(this.world.keyboard.RIGHT && this.x < maxX) {
            this.otherDirection = false;
            this.moveRight();
        }
            if(this.world.keyboard.LEFT && this.x > 100 ) {
            this.otherDirection = true ;
            this.moveLeft();
        }
            if(this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            const margin = 100; // Distance in pixels from the left edge of the screen where the character should be positioned
            const maxCameraX = -(this.world.level.end_level_x - this.world.canvas.width); // The furthest left the camera can scroll, so the right edge of the level aligns with the right edge of the screen
            let cameraX = -this.x + margin; // Calculate camera position so the character stays 100px from the left
            if (cameraX < maxCameraX) {  // Prevent camera from going beyond the right edge of the level
            cameraX = maxCameraX;
        }
            const rightEdge = this.world.level.end_level_x - this.width; // The maximum x-position where the character is fully visible on screen
            if (this.x > rightEdge) { // Lock the camera at the end so the character doesn’t go partially off-screen
            cameraX = -(this.world.level.end_level_x - this.world.canvas.width); 
        }

        this.world.camera_x = cameraX;
        }, 1000 / 60 );

        setInterval(() => {
            if(this.isDead()) {
                this.animationFrameSpeed(2)
                this.playAnimations(this.images_die)
            }else if (this.isHurt())
            {
                this.animationFrameSpeed(3)
                this.playAnimations(this.images_hurt);
                console.log("Frame:", this.currentImage);
            }else if(this.isAboveGround()) {
                this.animationFrameSpeed(1)
                this.playAnimations(this.images_jumping);
            } else {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.animationFrameSpeed(1)
                this.playAnimations(this.images_walking);
            } 
            else {
                this.animationFrameSpeed(1)
                this.playAnimations(this.images_idle);
            }}
        }, 50);
    } 
}