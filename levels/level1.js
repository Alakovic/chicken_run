const level_1 = new Level(
[
    new Enemy(),
    new Enemy(),
    new Enemy()
],
[
    new Cloud('assets/images/map/clouds/image (1).png'),
    new Cloud('assets/images/map/clouds/image (2).png'),
    new Cloud('assets/images/map/clouds/image (3).png')
],
[
    // (img, x,y,width,height)
    new BackgroundObject('assets/images/map/objects/background.png',-1400,0,1500,750),
    new BackgroundObject('assets/images/map/objects/image-09.png',-1300,600,1600,100),
    new BackgroundObject('assets/images/map/objects/background.png',0,0,1500,750),
    new BackgroundObject('assets/images/map/objects/image-09.png',0,600,1600,100),
    new BackgroundObject('assets/images/map/objects/background.png',1400,0,1500,750),
    new BackgroundObject('assets/images/map/objects/image-09.png',1300,600,1600,100),
    new BackgroundObject('assets/images/map/objects/background.png',2700,0,1500,750),
    new BackgroundObject('assets/images/map/objects/image-09.png',2600,600,1600,100)
]
);