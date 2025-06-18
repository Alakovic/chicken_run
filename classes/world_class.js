class World {
    character = new Character();
    level = level_1;
    ctx;
    keyboard;
    game_width;
    game_height;
    clouds =level_1.clouds;
    backgroundObjects =level_1.backgroundObjects;
    camera_x = -100;
    backgroundImage = new Image();
    backgroundWidth = 1600;
    backgroundHeight = 800;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d')
        this.game_width = canvas.width;
        this.game_height = canvas.height;
        this.keyboard = keyboard;
        this.backgroundImage.src= 'assets/images/map/objects/background.png';
        this.draw()
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }

    draw(){
        this.ctx.clearRect(0,0,this.game_width,this.game_height)
        this.drawBackground();
        this.ctx.translate(this.camera_x,0)
        this.addObjectsToMap(this.level.backgroundObjects)
        this.addObjectsToMap(this.level.clouds)
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x,0)

        // draw() wird immer wieder aufgerufen 
        requestAnimationFrame(() => this.draw());
    }

    addObjectsToMap(objects){
        objects.forEach(o =>{
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if(mo.otherDirection) { // reverse character 
        this.flipImage(mo)
        }
        this.ctx.drawImage(mo.img, mo.x,mo.y,mo.width,mo.height);
        if(mo.otherDirection) {
        this.flipImageBack(mo)
        }
    }

    flipImage(mo) {
        this.ctx.save();
            this.ctx.translate(mo.width,0);
            this.ctx.scale(-1,1);
            mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
            this.ctx.restore();
    }

    drawBackground() {
        let x = -this.camera_x % this.backgroundWidth;
        this.ctx.drawImage(this.backgroundImage, x - this.backgroundWidth, 0, this.backgroundWidth + 2, this.backgroundHeight);
        this.ctx.drawImage(this.backgroundImage, x, 0, this.backgroundWidth + 2, this.backgroundHeight);
    }

}