class World {
    character = new Character();
    enemies = [
    new Enemy(),
    new Enemy(),
    new Enemy()
    ];

    ctx;
    game_width;
    game_height;
    clouds = [
        new Cloud('assets/images/map/1.png'),
        new Cloud('assets/images/map/2.png')
    ];

    backgroundObjects = [ // (img, x,y,width,height)
        new BackgroundObject('assets/images/map/background.png',0,0,1500,750),
        new BackgroundObject('assets/images/map/image-05.png',300,200,380,400),
        new BackgroundObject('assets/images/map/image-05.png',900,200,380,400),
        new BackgroundObject('assets/images/map/image-03.png',200,110,300,500),
        new BackgroundObject('assets/images/map/image-03.png',800,110,300,500),
        new BackgroundObject('assets/images/map/image-04.png',500,280,200,350),
        new BackgroundObject('assets/images/map/image-04.png',1100,280,200,350),
        new BackgroundObject('assets/images/map/image-09.png',0,600,1600,100)
    ]

    constructor(canvas){
        this.ctx = canvas.getContext('2d')
        this.game_width = canvas.width;
        this.game_height = canvas.height;
        this.draw()
    }


    draw(){
        this.ctx.clearRect(0,0,this.game_width,this.game_height)
        this.addObjectsToMap(this.backgroundObjects)
        this.addObjectsToMap(this.clouds)
        this.addToMap(this.character);

        // draw() wird immer wieder aufgerufen 
        requestAnimationFrame(() => this.draw());
    }

    addObjectsToMap(objects){
        objects.forEach(o =>{
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x,mo.y,mo.width,mo.height);
    }

}