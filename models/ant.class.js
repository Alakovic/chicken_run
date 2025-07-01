class Ant extends MovableObject{

    y= 430;
    height = 80;
    width =80;

    images_walking = [
        'assets/images/enemies/ants/green/move/__green_enemy_ant_move_000.png',
        'assets/images/enemies/ants/green/move/__green_enemy_ant_move_001.png',
        'assets/images/enemies/ants/green/move/__green_enemy_ant_move_002.png',
        'assets/images/enemies/ants/green/move/__green_enemy_ant_move_003.png',
        'assets/images/enemies/ants/green/move/__green_enemy_ant_move_004.png',
        'assets/images/enemies/ants/green/move/__green_enemy_ant_move_005.png',
        'assets/images/enemies/ants/green/move/__green_enemy_ant_move_006.png',
        'assets/images/enemies/ants/green/move/__green_enemy_ant_move_007.png',
    ];

    constructor(){
    super().loadImage('assets/images/enemies/ants/green/idle/__green_enemy_ant_idle_001.png');
    this.x = 400 + Math.random() * 600; // Zahl zwischen 400 und 1000
    this.loadImages(this.images_walking);
    this.animate();
    }


    animate(){
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.images_walking.length;
            let path = this.images_walking[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}