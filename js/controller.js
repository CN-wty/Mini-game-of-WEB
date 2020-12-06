const boom = document.getElementsByClassName('isBoom');

let startGame = () => {
    initGame();
    gameArea.addEventListener('click', handleClick);
    document.getElementById('info').innerHTML = `游戏开始`;
    document.getElementById('least-boom').innerHTML = `炸弹：${boomNum}`;
    if (timer) {
        timeEnd();
        timeStart();
    } else {
        timeStart();
    }
    leastBoom();
}

let handleClick = (event) => {
    //    TODO：点击为0的情况
    event.stopPropagation();  //阻止捕获、冒泡事件进行，防止污染父元素类名
    let target = event.target;
    target.className += ' clicked';
    gameArea.className = '';
    if (target.innerHTML === '@') defeat();
    else isWin();
}

let isWin = () => {
    const clickedBlock = document.querySelectorAll('.clicked');
    if (clickedBlock.length >= size * size - boomNum) {
        for (let i = 0; i < boom.length; i++) {
            boom[i].style.backgroundColor = '#5AFF43';
        }
        document.getElementById('info').innerHTML = `胜利✌`;
        gameArea.removeEventListener('click', handleClick);
        timeEnd();
    }
}

let defeat = () => {
    for (let i = 0; i < boom.length; i++) {
        boom[i].style.backgroundColor = '#ff5511';
    }
    document.getElementById('info').innerHTML = `失败💔`;
    gameArea.removeEventListener('click', handleClick);
    timeEnd()
}

let timer;

let timeStart = () => {
    const timerDoc = document.getElementById('used-time');
    let second = 0;
    timer = setInterval(() => {
        second++;
        timerDoc.innerHTML = `时间：${second}`;
        console.log(second);
    }, 1000)
}

let timeEnd = () => {
    clearInterval(timer);
}

let leastBoom = () => {
//    TODO

}






