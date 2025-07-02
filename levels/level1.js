const level1 = new Level(
    [
    new Ant(),
    new Ant(),
    new Ant()
],
[
    new Cloud(),
    new Cloud(),
    new Cloud()
],
[   //imagePath, x,width
    new Platform('assets/images/background/floor/image-09.png',0,1200),
    new Platform('assets/images/background/floor/image-09.png',1185,1200),
],
[   //imagePath,x,y,width,height
    new BackgroundObject('assets/images/background/background_img/background.png',-5,0,1200,600),
    new BackgroundObject('assets/images/background/background_img/background.png',1190,0,1200,600)
],
staticDecorations,
2000
);
