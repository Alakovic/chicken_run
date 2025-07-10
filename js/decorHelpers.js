const trees = [
    'assets/images/background/decorations/tree/t1.png',
    'assets/images/background/decorations/tree/t2.png',
    'assets/images/background/decorations/tree/t3.png',
    'assets/images/background/decorations/tree/t4.png',
    'assets/images/background/decorations/tree/t5.png',
    'assets/images/background/decorations/tree/t6.png'
];

const mushrooms = [
    'assets/images/background/decorations/mushrooms/m1.png',
    'assets/images/background/decorations/mushrooms/m2.png',
    'assets/images/background/decorations/mushrooms/m3.png'
];

const flowers = [
    'assets/images/background/decorations/flowers/f1.png',
    'assets/images/background/decorations/flowers/f2.png'
];



function generateDecorations(images, xStart, xEnd, y, width, height, spacing) {
    let decorations = [];
    let imageCount = images.length;
    let index = 0;  

    for(let x = xStart; x <= xEnd; x += spacing){
        let imagePath = images[index % imageCount];
        decorations.push(new Decoration(imagePath, x, y, width, height));
        index++;
    }
    return decorations;
}

const staticDecorations = [ //images, xStart, xEnd, y, width, height, spacing
    ...generateDecorations(trees, 300, 2400, 120, 150, 400, 200),
    ...generateDecorations(mushrooms,300,2400,465,40,40,200),
    ...generateDecorations(flowers,400,2400,465,40,40,200),
    ...generateDecorations(trees,5900,14260, 120, 150, 400, 200),
    ...generateDecorations(mushrooms,2650,4200,315,40,40,100),
    ...generateDecorations(flowers,2700,4200,315,40,40,100),
    ...generateDecorations(mushrooms,4700,14300,465,40,40,200),
    ...generateDecorations(flowers,4600,14300,465,40,40,200),
    ...generateDecorations(flowers,14800,16000,315,40,40,200),
    ...generateDecorations(mushrooms,14850,15900,315,40,40,200)
];