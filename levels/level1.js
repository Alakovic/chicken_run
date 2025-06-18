let backgroundObjects = [];

let trees = new Tree().generateTrees();
backgroundObjects.push(...trees);
//Zone 1 
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image (22).png',10,505,100,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',-100,600,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',1200,600,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',2500,600,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-08.png',3750,600,600,100));
//Zone 2
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-07.png',4300,400,600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',4580,400,1000,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-08.png',5545,400,620,100));
//Zone 3
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',6655,600,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-07.png',6100,600,600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',8235,600,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',9168,600,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',10100,600,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',11180,600,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',12260,600,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',13340,600,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-08.png',14595,600,620,100));
//Zone 4 
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',15450,400,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-07.png',15100,400,600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',16530,400,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',17610,400,1600,100));
backgroundObjects.push(new BackgroundObject('assets/images/map/objects/image-09.png',18690,400,1600,100));




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
    backgroundObjects
);