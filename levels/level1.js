const level1 = new Level(
[ // x 
    new greenAnt(9200),
    new greenAnt(9500),
    new greenAnt(9800)
],
[
    new Cloud(),
    new Cloud(),
    new Cloud()
],
[   //imagePath, x,width,height, y=500 by default, can be changed 
    //Platform 1 
    new Platform('assets/images/background/floor/image-09.png',0,1200,100),
    new Platform('assets/images/background/floor/image-09.png',1185,1200,100),
    new Platform('assets/images/background/floor/image-08.png',2340 ,280,100),
    //Platform 2 
    new Platform('assets/images/background/floor/image-07.png',2620,280,100,350),
    new Platform('assets/images/background/floor/image-09.png',2852,1200,100,350),
    new Platform('assets/images/background/floor/image-08.png',4006 ,280,100,350),
    //Platform 3 
    new Platform('assets/images/background/floor/image-09.png',4526,1200,100),
    new Platform('assets/images/background/floor/image-07.png',4280,280,100),
    new Platform('assets/images/background/floor/image-09.png',5500,1200,100),
    new Platform('assets/images/background/floor/image-09.png',6684,1200,100),
    new Platform('assets/images/background/floor/image-09.png',7868,1200,100),
    new Platform('assets/images/background/floor/image-09.png',8936,1200,100),
    new Platform('assets/images/background/floor/image-09.png',10122,1200,100),
    //Platform 3 =>  sky platforms
    new Platform('assets/images/background/floor/image-07.png',4880,80,80,380),
    new Platform('assets/images/background/floor/image-08.png',4960 ,80,80,380),
    new Platform('assets/images/background/floor/image-07.png',5050,80,80,330),
    new Platform('assets/images/background/floor/image-08.png',5130 ,80,80,330),
    new Platform('assets/images/background/floor/image-07.png',5220,160,80,260),
    new Platform('assets/images/background/floor/image-08.png',5380,160,80,260),
    new Platform('assets/images/background/floor/image-07.png',5550,80,80,330),
    new Platform('assets/images/background/floor/image-08.png',5630 ,80,80,330),
    new Platform('assets/images/background/floor/image-07.png',5720,80,80,380),
    new Platform('assets/images/background/floor/image-08.png',5800 ,80,80,380)
    //Platform 3 =>  sky platforms  end 
],
[   //imagePath,x,y,width,height
    new BackgroundObject('assets/images/background/background_img/background.png',-5,0,1200,650),
    new BackgroundObject('assets/images/background/background_img/background.png',1190,0,1200,650),
    new BackgroundObject('assets/images/background/background_img/background.png',1190 * 2,0,1200,650),
    new BackgroundObject('assets/images/background/background_img/background.png',1190 * 3,0,1200,650),
    new BackgroundObject('assets/images/background/background_img/background.png',1190 * 4,0,1200,650),
    new BackgroundObject('assets/images/background/background_img/background.png',1190 * 5,0,1200,650),
    new BackgroundObject('assets/images/background/background_img/background.png',1190 * 6,0,1200,650),
    new BackgroundObject('assets/images/background/background_img/background.png',1190 * 7,0,1200,650),
    new BackgroundObject('assets/images/background/background_img/background.png',1190 * 8,0,1200,650),
    new BackgroundObject('assets/images/background/background_img/background.png',1190 * 9,0,1200,650)
],
[ //imagePath,x,y,width,height
    new Box('assets/images/background/box/box.png',2520,410,100,100),
    new Box('assets/images/background/box/box.png',2445,430,80,80),
    new Box('assets/images/background/box/box.png',2390,450,60,60),
    new Box('assets/images/background/box/box.png',4285,410,100,100),
    new Box('assets/images/background/box/box.png',4380,430,80,80),
    new Box('assets/images/background/box/box.png',4455,450,60,60)
],
[ //imagePath,x,y,width,height,damage
    new Obstacle('assets/images/background/obstacles/rock1.png', 600,430,80,80,10),
    new Obstacle('assets/images/background/obstacles/rock2.png', 1200,430,80,80,10),
    new Obstacle('assets/images/background/obstacles/rock3.png', 1800,430,80,80,10),
    new Obstacle('assets/images/background/obstacles/spike.png', 6640,440,100,70,20),
    new Obstacle('assets/images/background/obstacles/spike.png', 7240,440,100,70,20),
    new Obstacle('assets/images/background/obstacles/spike.png', 7840,440,100,70,20)
],
staticDecorations,
13000
);
