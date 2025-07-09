class Level {
    enemies;
    clouds;
    platforms;
    backgroundObjects;
    platforms;
    box;
    obstacle;
    decorations;
    end_level_x;
    diamond;

    constructor(enemies, clouds, platforms, backgroundObjects,box,obstacle,diamond, decorations,end_level_x) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.platforms = platforms;
        this.backgroundObjects = backgroundObjects;
        this.box = box;
        this.obstacle = obstacle;
        this.diamond = diamond;
        this.decorations = decorations;
        this.end_level_x = end_level_x;
    }
}