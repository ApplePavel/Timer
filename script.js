let timer;
let seconds = 0;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');

function updateDisplay() {
    display.innerText = `${seconds} sec`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(function () {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
