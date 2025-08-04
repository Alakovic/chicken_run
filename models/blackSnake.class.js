class blackSnake extends Snake {

    images_walking = [
        'assets/images/enemies/snakes/black/move/__black_snake_move_000.png',
        'assets/images/enemies/snakes/black/move/__black_snake_move_001.png',
        'assets/images/enemies/snakes/black/move/__black_snake_move_002.png',
        'assets/images/enemies/snakes/black/move/__black_snake_move_003.png',
        'assets/images/enemies/snakes/black/move/__black_snake_move_004.png'
    ];

    constructor(x) {
        super();
        this.loadImage('assets/images/enemies/snakes/black/idle/__black_snake_idle_001.png');
        this.loadImages(this.images_walking);
        this.animate(this.images_walking);
        this.x = x;
        this.speed = 1.5;
        this.damage = 10;
        this.moveLeftRight(this.x-50, this.x+50);
    }
}