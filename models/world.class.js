class World {
    character = new Character();
    enemies = [
        new Ant(),
        new Ant(),
        new Ant()
    ];
    
    clouds = [
        new Cloud(),
        new Cloud(),
        new Cloud()
    ]
    
    platforms= [ //imagePath, x,width
        new Platform('assets/images/background/floor/image-09.png',0,1200),
    ]

    backgroundObjects = [ //imagePath,x,y,width,height
        new BackgroundObject('assets/images/background/background_img/background.png',-5,0,1200,600),
        new BackgroundObject('assets/images/background/background_img/background.png',1190,0,1200,600)
    ]

    decorations = staticDecorations;
    ctx;    
    canvas;
    keyboard;

    constructor(canvas , keyboard) {
        this.ctx =canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }


    draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.decorations);
        this.addObjectsToMap(this.platforms);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds)
    
        requestAnimationFrame(() => {this.draw()}); // draw() wird immer wieder aufgerufen
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width,0);
            this.ctx.scale(-1,1);
            mo.x = mo.x * -1 ;
        }
            this.ctx.drawImage(mo.img,mo.x,mo.y,mo.width,mo.height);
        if (mo.otherDirection){
            mo.x = mo.x * -1 ;
            this.ctx.restore();
        }
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

}