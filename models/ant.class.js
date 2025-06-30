class Ant extends MovableObject{

    y= 430;
    height = 80;
    width =80;

    constructor(){
    super().loadImage('assets/images/enemies/ants/green/idle/__green_enemy_ant_idle_001.png');
    this.x = 400 + Math.random() * 600; // Zahl zwischen 400 und 1000
    }
}