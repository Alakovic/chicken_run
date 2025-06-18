class Tree extends BackgroundObject {
    treeImages = [
        'assets/images/map/tree/image(4).png',
        'assets/images/map/tree/image(5).png',
        'assets/images/map/tree/image(6).png',
        'assets/images/map/tree/image(7).png',
        'assets/images/map/tree/image(11).png',
        'assets/images/map/tree/image(12).png'
    ];

    constructor(x =50, y = 260, width = 250, height = 350, imagePath = null) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imagePath = imagePath || this.treeImages[0];
        this.loadImage(this.imagePath);
    }

    intervals = [
        { startX: 50, endX: 4000 },
        { startX: 6500, endX: 14500 }
    ];


   generateTrees() {
    const trees = [];
    const gap = 180;
   
    let currentImageIndex = 0;

    for (const interval of this.intervals) {
        for (let x = interval.startX, i = 0; x <= interval.endX; x += gap, i++) {
            const imagePath = this.treeImages[currentImageIndex % this.treeImages.length];
            trees.push(new Tree(x, this.y, this.width, this.height, imagePath));
            currentImageIndex++;
        }
    }

    return trees;
}
}