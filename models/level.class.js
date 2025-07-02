class Level {
    enemies;
    clouds;
    platforms;
    backgroundObjects;
    platforms;
    decorations;
    end_level_x;

    constructor(enemies, clouds, platforms, backgroundObjects, decorations,end_level_x) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.platforms = platforms;
        this.backgroundObjects = backgroundObjects;
        this.decorations = decorations;
        this.end_level_x = end_level_x;
    }
}