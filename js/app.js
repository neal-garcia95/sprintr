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
      // Set interval for every 1000 ms (1 sec)
      timer = setInterval(() => {
        // If timer reaches zero
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          isRunning = false;
          alert('Time is up!');
        } else {
          // Count down
          if (seconds === 0) {
            minutes--; // Decrement minutes once seconds reaches zero
            seconds = 59;
          } else {
            seconds--;
          }
          updateTimer();
        }
      }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
  }
  
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateTimer();
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Initialize the timer display
updateTimer();