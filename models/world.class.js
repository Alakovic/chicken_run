class World {
    character = new Character();
    level;
    ctx;    
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    timeBar = new TimeBar();
    totalCoins; 

    constructor(canvas , keyboard,level) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.startLevel(level);
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    startLevel(level) {
        this.level = level;
        this.character.coinCount = 0;
        this.totalCoins = this.level.coin.length;
        this.timeBar.seconds = 0;
        this.startTimer();
        
        // <----- Place for other things that need to be reset ----
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
            });

            this.checkCoinCollection();

        }, 200)
    }

    checkCoinCollection() {
        this.level.coin.forEach((coin, index) => {
            if(this.character.isColliding(coin)) {
                this.character.coinCount += coin.value;
                let percentage = Math.min((this.character.coinCount / this.totalCoins) * 100 , 100);
                this.coinBar.setPercentage(percentage)
                this.level.coin.splice(index,1) ; // Remove collected coin
            }
        });
    }

    startTimer(){
        if (this.timeInterval) clearInterval(this.timeInterval);
        this.timeInterval = setInterval(() => {
        this.timeBar.second++;
    }, 1000);
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
        this.addToMap(this.coinBar);
        this.addToMap(this.timeBar)
        this.ctx.translate(this.camera_x,0);
        this.ctx.translate(-this.camera_x,0);
    
        requestAnimationFrame(() => {this.draw()}); // draw() wird immer wieder aufgerufen
    }

    addToMap(mo) {
        this.ctx.save();
        if (mo instanceof MovableObject) {
            mo.flipImage(this.ctx);
        } else {
            this.ctx.translate(mo.x, mo.y); 
        }
        mo.draw(this.ctx);         
        this.ctx.restore();
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

}