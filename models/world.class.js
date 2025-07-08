class World {
    character = new Character();
    level;
    ctx;    
    canvas;
    keyboard;
    camera_x = 0;

    constructor(canvas , keyboard,level) {
        this.ctx =canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }


    draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.ctx.translate(this.camera_x,0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.decorations);
        this.addObjectsToMap(this.level.platforms);
        this.addObjectsToMap(this.level.box);
        this.addObjectsToMap(this.level.obstacle);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds)
        this.ctx.translate(-this.camera_x,0);
    
        requestAnimationFrame(() => {this.draw()}); // draw() wird immer wieder aufgerufen
    }

    addToMap(mo) {
            this.ctx.save();
        if (mo.otherDirection) {
            this.ctx.translate(mo.x + mo.width, mo.y);
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(mo.img, 0, 0, mo.width, mo.height);
        } else {
            this.ctx.translate(mo.x, mo.y);
            this.ctx.drawImage(mo.img, 0, 0, mo.width, mo.height);
        }
            this.ctx.restore();
    }
    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

}