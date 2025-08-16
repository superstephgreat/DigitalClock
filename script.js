function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amPm = hours < 12 ? "AM" : "PM";

  hours = hours % 12 || 12; // convert 0 -> 12
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${amPm}`;

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const dateNumber = now.getDate();
  const year = now.getFullYear();

  document.getElementById('date').textContent = `${dayName}, ${monthName} ${dateNumber}, ${year}`;
}

// Update clock immediately
updateClock();
// Update every second
setInterval(updateClock, 1000);

let timer;
let totalSeconds = 0;
let isRunning = false;

const display = document.getElementById('timer-display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

function updateTimerDisplay() {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      totalSeconds++;
      updateTimerDisplay();
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
  totalSeconds = 0;
  updateTimerDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// initialize
updateTimerDisplay();