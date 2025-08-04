class World {
    character = new Character();
    level;
    ctx;    
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();

    constructor(canvas , keyboard,level) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld(){
        this.character.world = this;
    }


    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if( this.character.isColliding(enemy)) {
                    this.character.hit(enemy.damage);
                    this.statusBar.setPercentage(this.character.energy);
                }
            });
            this.level.obstacle.forEach((o) => {
                if(this.character.isColliding(o)) {
                    this.character.hit(o.damage);
                    this.statusBar.setPercentage(this.character.energy);
                }
            })
        }, 200)
    }

    draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.ctx.translate(this.camera_x,0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.decorations);
        this.addObjectsToMap(this.level.platforms);
        this.addObjectsToMap(this.level.box);
        this.addObjectsToMap(this.level.obstacle);
        this.addObjectsToMap(this.level.diamond);
        this.addObjectsToMap(this.level.hearth);
        this.addObjectsToMap(this.level.coin);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x,0);
        //----Space for fixed objects --- 
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x,0);
        this.ctx.translate(-this.camera_x,0);
    
        requestAnimationFrame(() => {this.draw()}); // draw() wird immer wieder aufgerufen
    }

    addToMap(mo) {
        this.ctx.save();
        mo.flipImage(this.ctx);       
        mo.drawHitbox(this.ctx);
        this.ctx.restore();
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

}