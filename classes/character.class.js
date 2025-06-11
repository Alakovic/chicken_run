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

    images_jumping = [
       ' assets/images/character/jump/Jump_000.png',
       ' assets/images/character/jump/Jump_001.png',
       ' assets/images/character/jump/Jump_002.png',
       ' assets/images/character/jump/Jump_003.png',
       ' assets/images/character/jump/Jump_004.png'
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
    ]

    currentImage = 0;
    world;
    speed = 10;

    constructor(y){
        super();
        this.loadImage('assets/images/character/idle/Idle_000.png');
        this.loadImages(this.images_walking);
        this.loadImages(this.images_running);
        this.loadImages(this.images_sliding);
        this.loadImages(this.images_jumping);
        this.loadImages(this.images_idle);
        this.width = 200;
        this.height = 200;
        this.x = 50;
        this.y = 420;
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(()=>{
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            } else if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            }

            if(this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = -this.x + 50;
        }, 1000/60);

         setInterval (() => {
            if(this.world.keyboard.SHIFT && (this.world.keyboard.RIGHT || this.world.keyboard.LEFT )) {
            this.playAnimations(this.images_running)
            }else if(this.world.keyboard.DOWN && (this.world.keyboard.RIGHT || this.world.keyboard.LEFT )){
            this.playAnimations(this.images_sliding)
            }else if(this.world.keyboard.UP && (this.world.keyboard.RIGHT || this.world.keyboard.LEFT )) { // no space walking !! 
            this.playAnimations(this.images_jumping)
            }else if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT ) {
            this.playAnimations(this.images_walking)   
            }else if(this.world.keyboard.UP){
            this.playAnimations(this.images_jumping);   
            }else{
            this.playAnimations(this.images_idle)
            }
        },50)

    }
    
    jump(){
      return  this.speedY = 15;
    }
}