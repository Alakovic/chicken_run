class blueCentipede extends Centipede {
    images_comingOut = [
        'assets/images/enemies/centipeds/green/come_out/__blue_centipede_come_out_000.png',
        'assets/images/enemies/centipeds/green/come_out/__blue_centipede_come_out_001.png',
        'assets/images/enemies/centipeds/green/come_out/__blue_centipede_come_out_002.png',
        'assets/images/enemies/centipeds/green/come_out/__blue_centipede_come_out_003.png',
        'assets/images/enemies/centipeds/green/come_out/__blue_centipede_come_out_004.png',
        'assets/images/enemies/centipeds/green/come_out/__blue_centipede_come_out_005.png',
        'assets/images/enemies/centipeds/green/come_out/__blue_centipede_come_out_006.png',
        'assets/images/enemies/centipeds/green/come_out/__blue_centipede_come_out_007.png',
        'assets/images/enemies/centipeds/green/come_out/__blue_centipede_come_out_008.png',
        'assets/images/enemies/centipeds/green/come_out/__blue_centipede_come_out_009.png'
    ];

    images_goIn = [
        'assets/images/enemies/centipeds/green/go_in/__blue_centipede_go_in_000.png',
        'assets/images/enemies/centipeds/green/go_in/__blue_centipede_go_in_001.png',
        'assets/images/enemies/centipeds/green/go_in/__blue_centipede_go_in_002.png',
        'assets/images/enemies/centipeds/green/go_in/__blue_centipede_go_in_003.png',
        'assets/images/enemies/centipeds/green/go_in/__blue_centipede_go_in_004.png',
        'assets/images/enemies/centipeds/green/go_in/__blue_centipede_go_in_005.png',
        'assets/images/enemies/centipeds/green/go_in/__blue_centipede_go_in_006.png',
        'assets/images/enemies/centipeds/green/go_in/__blue_centipede_go_in_007.png',
        'assets/images/enemies/centipeds/green/go_in/__blue_centipede_go_in_008.png',
        'assets/images/enemies/centipeds/green/go_in/__blue_centipede_go_in_009.png'
    ];

    images_goRight = [
        'assets/images/enemies/centipeds/green/more_right/__blue_centipede_move_right_to_center_004.png',
        'assets/images/enemies/centipeds/green/more_right/__blue_centipede_move_right_to_center_003.png',
        'assets/images/enemies/centipeds/green/more_right/__blue_centipede_move_right_to_center_002.png',
        'assets/images/enemies/centipeds/green/more_right/__blue_centipede_move_right_to_center_001.png',
        'assets/images/enemies/centipeds/green/more_right/__blue_centipede_move_right_to_center_000.png'
    ];

    images_goLeft = [
        'assets/images/enemies/centipeds/green/move_left/__blue_centipede_move_left_to_center_004.png',
        'assets/images/enemies/centipeds/green/move_left/__blue_centipede_move_left_to_center_003.png',
        'assets/images/enemies/centipeds/green/move_left/__blue_centipede_move_left_to_center_002.png',
        'assets/images/enemies/centipeds/green/move_left/__blue_centipede_move_left_to_center_001.png',
        'assets/images/enemies/centipeds/green/move_left/__blue_centipede_move_left_to_center_000.png'
    ];
    images_idle = [
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_000.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_001.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_002.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_003.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_004.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_005.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_006.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_007.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_008.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_009.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_010.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_011.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_012.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_013.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_014.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_015.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_016.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_017.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_018.png',
        'assets/images/enemies/centipeds/green/idle_out/__blue_centipede_ilde_out_019.png'
    ];

    constructor(x,y) {
        super();
        this.loadImage('assets/images/enemies/centipeds/green/come_out/__blue_centipede_come_out_000.png');
        this.loadImages(this.images_comingOut);
        this.loadImages(this.images_goIn);
        this.loadImages(this.images_idle);
        this.centipedeComeOutAndGoBack(this.images_comingOut,this.images_idle,this.images_goIn);
        this.x = x;
        this.y = y;
    }
}