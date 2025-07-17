class greenAnt extends Ant {

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

    constructor(x) {
        super();
        this.loadImage('assets/images/enemies/ants/green/idle/__green_enemy_ant_idle_001.png');
        this.loadImages(this.images_walking);
        this.animate(this.images_walking);
        this.x = x;
        this.speed = 2.4;
        this.damage = 10;
        this.moveLeftRight(this.x-100, this.x+100);
    }
}