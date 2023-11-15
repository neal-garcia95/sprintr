let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function updateTimer(){
    const timerElement = document.getElementById('timer');
    timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
      isRunning = true;
      timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          isRunning = false;
          alert('Time is up!');
        } else {
          if (seconds === 0) {
            minutes--;
            seconds = 59;
          } else {
            seconds--;
          }
          updateTimer();
        }
      }, 1000);
    }
}
  
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateTimer();
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Initialize the timer display
updateTimer();