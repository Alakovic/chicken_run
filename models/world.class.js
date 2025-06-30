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

    constructor(canvas) {
        this.ctx =canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
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
        this.ctx.drawImage(mo.img,mo.x,mo.y,mo.width,mo.height);
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

}