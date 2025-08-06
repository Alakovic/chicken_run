class TimeBar extends  DrawableObject {

    second = 0 ; 

    constructor(){
        super();
        this.loadImage('assets/images/background/time_bar/Image (34).png')
        this.x = 30;
        this.y = 115;
        this.width = 200;
        this.height = 50;
    }

    draw(ctx) {
        super.draw(ctx);
        this.drawTimeText(ctx);
    }

    drawTimeText(ctx) {
        ctx.font = '22px Arial';
        ctx.fillStyle = '#ffffff' ;
        ctx.textAlign = 'left' ;
        ctx.fillText(this.formatTime(), 100 , 30);
    }

    formatTime() {
        const minutes = Math.floor(this.second / 60);
        const seconds = this.second % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
}