function generateCoinsLine(startX, y, count, spacing) {
    const coins = [];
    for (let i = 0; i < count; i++) {
        let x = startX + i * spacing;
        coins.push(new Coin(x, y));
    }
    return coins;
}

function generateCoinsArc(startX, startY, count, spacing, arcHeight) {
    const coins = [];
    for (let i = 0; i < count; i++) {
        const x = startX + i * spacing;
        const angle = (Math.PI / (count - 1)) * i; 
        const y = startY - Math.sin(angle) * arcHeight;
        coins.push(new Coin(x, y));
    }
    return coins;
}

function generateCoinsStairsUp(startX, startY, count, spacingX, spacingY) {
    const coins = [];
    for (let i = 0; i < count; i++) {
        let x = startX + i * spacingX; 
        let y = startY - i * spacingY;  
        coins.push(new Coin(x, y));
    }
    return coins;
}

function generateCoinsStairsDown(startX, startY, count, spacingX, spacingY) {
    const coins = [];
    for (let i = 0; i < count; i++) {
        let x = startX + i * spacingX; 
        let y = startY + i * spacingY;  
        coins.push(new Coin(x, y));
    }
    return coins;
}


const coins1 = [
    ...generateCoinsLine(300, 410, 2, 100),
    ...generateCoinsArc(500,410,3,100,80),
    ...generateCoinsLine(800,410,3,100),
    ...generateCoinsArc(1100,410,3,100,80),
    ...generateCoinsLine(1400,410,3,100),
    ...generateCoinsArc(1700,410,3,100,80),
    ...generateCoinsLine(2000,410,4,100),
    ...generateCoinsStairsUp(2370, 380, 3, 80, 20),
    ...generateCoinsLine(2600,260,3,100),
    ...generateCoinsArc(2900,260,3,100,80),
    ...generateCoinsLine(3200,260,2,100),
    ...generateCoinsArc(3400,260,3,100,80),
    ...generateCoinsLine(3700,260,2,100),
    ...generateCoinsArc(3900,260,3,100,80),
    ...generateCoinsLine(4200,260,1,0),
    ...generateCoinsStairsDown(4300,340,3,80,20),
    ...generateCoinsLine(4550,410,3,100),
    ...generateCoinsLine(4880,310,2,90),
    ...generateCoinsLine(5050,260,2,90),
    ...generateCoinsLine(5250,190,3,100),
    ...generateCoinsLine(5550,260,2,90),
    ...generateCoinsLine(5720,310,2,90),
]