const level_1 = new Level(
[
    new Enemy(),
    new Enemy(),
    new Enemy()
],
[
    new Cloud('assets/images/map/1.png'),
    new Cloud('assets/images/map/2.png')
],
[
    // (img, x,y,width,height)
    new BackgroundObject('assets/images/map/background.png',-1400,0,1500,750),
    new BackgroundObject('assets/images/map/image-09.png',-1300,600,1600,100),
    new BackgroundObject('assets/images/map/background.png',0,0,1500,750),
    new BackgroundObject('assets/images/map/image-05.png',300,200,380,400),
    new BackgroundObject('assets/images/map/image-05.png',900,200,380,400),
    new BackgroundObject('assets/images/map/image-03.png',200,110,300,500),
    new BackgroundObject('assets/images/map/image-03.png',800,110,300,500),
    new BackgroundObject('assets/images/map/image-04.png',500,280,200,350),
    new BackgroundObject('assets/images/map/image-04.png',1100,280,200,350),
    new BackgroundObject('assets/images/map/image-09.png',0,600,1600,100),
    new BackgroundObject('assets/images/map/background.png',1400,0,1500,750),
    new BackgroundObject('assets/images/map/image-09.png',1300,600,1600,100),
    new BackgroundObject('assets/images/map/background.png',2700,0,1500,750),
    new BackgroundObject('assets/images/map/image-09.png',2600,600,1600,100)
]
);