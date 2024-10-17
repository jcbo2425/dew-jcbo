const gameZone = document.querySelector('#table-container')

let initialX  = 24;
let initialY  = 24;
let time=1000;
let brickWidth = 50;
let timeLapse;
let id=1;

function startBricks(){
    timeLapse = setInterval(createBrick, time);
}

function stopCreate(){
    clearInterval(timeLapse);
}

function createBrick(){
    if ((brickWidth + 24) <= gameZone.clientWidth) {
        let brick = document.createElement('div');
        brick.classList.add('brick');

        brick.style.left = initialX + 'px';
        brick.style.top = (gameZone.clientHeight/2 - brickWidth/2) + 'px';
        initialX += (brickWidth+2);

        brick.addEventListener('click',function(){
            gameZone.removeChild();
        });

        gameZone.appendChild(brick)
    }
    else {
        
    }
}