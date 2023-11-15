let timer;
let isWorking = true; // Track whether it's a work or break period
let isRunning = false;
let minutes = parseInt(document.getElementById('time-length').value, 10);
let seconds = 0;

function updateTimer() {
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
        alert(`Time is up! Take a ${isWorking ? 'break' : 'work'}!`);
        toggleWorkBreak();
        resetTimer();
        startTimer(); // Automatically start the next period
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

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = parseInt(document.getElementById('time-length').value, 10);
  seconds = 0;
  updateTimer();
}

function toggleWorkBreak() {
  isWorking = !isWorking;
  if (!isWorking) {
    // Set break period duration
    minutes = document.getElementById('break').value === 'short' ? 5 : 15;
  }
  updateTimer();
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Update the timer duration when the work period changes
document.getElementById('time-length').addEventListener('change', function () {
  resetTimer();
});

// Initialize the timer display
updateTimer();