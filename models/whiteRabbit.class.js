class whiteRabbit extends Rabbit {
    images_walking = [
        'assets/images/enemies/rabbits/white/move/crouched/__white_rabbit_move_jump_crouched_000.png',
        'assets/images/enemies/rabbits/white/move/crouched/__white_rabbit_move_jump_crouched_001.png',
        'assets/images/enemies/rabbits/white/move/crouched/__white_rabbit_move_jump_crouched_002.png',
        'assets/images/enemies/rabbits/white/move/crouched/__white_rabbit_move_jump_crouched_003.png',
        'assets/images/enemies/rabbits/white/move/crouched/__white_rabbit_move_jump_crouched_004.png',
        'assets/images/enemies/rabbits/white/move/crouched/__white_rabbit_move_jump_crouched_005.png',
        'assets/images/enemies/rabbits/white/move/crouched/__white_rabbit_move_jump_crouched_006.png',
        'assets/images/enemies/rabbits/white/move/crouched/__white_rabbit_move_jump_crouched_007.png',
        'assets/images/enemies/rabbits/white/move/crouched/__white_rabbit_move_jump_crouched_008.png',
        'assets/images/enemies/rabbits/white/move/crouched/__white_rabbit_move_jump_crouched_009.png',
    ];

    constructor(x) {
        super();
        this.loadImage('assets/images/enemies/rabbits/white/idle/stand/__white_rabbit_idle_standing_000.png');
        this.loadImages(this.images_walking);
        this.animate(this.images_walking);
        this.x = x;
        this.speed = 0.8;
        this.damage = 10;
        this.moveLeftRight(this.x-200, this.x+200);
    }
}