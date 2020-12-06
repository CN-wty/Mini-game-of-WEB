const gameArea = document.getElementById('game');


let game = [];
let size = 10;//游戏地图尺寸
let boomNum = 10;//炸弹数量


let initBlock = () => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (game[i][j] === 0) gameArea.innerHTML += `<div class="block isZero">${game[i][j]}</div>`;
            else if(game[i][j] === '@') gameArea.innerHTML += `<div class="block isBoom">${game[i][j]}</div>`
            else gameArea.innerHTML += `<div class="block">${game[i][j]}</div>`;

        }
    }
}


let initBoom = () => {
    let nowBoomNum = 0;
    let randomX;
    let randomY;
    while (nowBoomNum < boomNum) {
        //parseInt被放弃使用，其本身用法是将字符串转为一个radix进制的数字
        //parseInt(string, radix);
        randomX = Math.floor(Math.random() * size);
        randomY = Math.floor(Math.random() * size);
        if (game[randomX][randomY] === 0) {
            game[randomX][randomY] = '@';
            nowBoomNum++;
        }
    }
}

let getCenterCount = (x, y) => {
    //将中心点周围8个点的坐标保存在数组中
    let aroundPoint = [
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1]
    ];
    let count = 0;
    for (let i = 0; i < aroundPoint.length; i++) {
        let a = aroundPoint[i][0];
        let b = aroundPoint[i][1];
        //利用try catch把遍历不到的点强行不抛出错误
        try {
            count += (game[a][b] === '@');
        } catch (e) {
        }
    }
    return count;
}

let initDisplay = () => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let center = game[i][j];
            if (center === '@') continue;
            game[i][j] = getCenterCount(i, j);
        }
    }
}


let initGame = () => {
    game = [];
    gameArea.innerHTML = '';
    for (let i = 0; i < size; i++) {
        game.push(
            Array(size).fill(0)
        )
    }
    initBoom();
    initDisplay();
    initBlock();
    console.log('game数组：')
    console.log(game);
}


