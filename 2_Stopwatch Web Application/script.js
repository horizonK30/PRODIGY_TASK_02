// Selecting elements
const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");

// Variables to track time
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;

// Start the stopwatch
function startStopwatch() {
  if (!isRunning) {
    interval = setInterval(updateTime, 10);
    isRunning = true;
  }
}

// Pause the stopwatch
function pauseStopwatch() {
  clearInterval(interval);
  isRunning = false;
}

// Reset the stopwatch
function resetStopwatch() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  isRunning = false;
  updateDisplay();
  lapsContainer.innerHTML = "";
}

// Update the time display
function updateTime() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

// Update the display to show the current time
function updateDisplay() {
  let formattedHours = hours < 10 ? `0${hours}` : hours;
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  let formattedMilliseconds =
    milliseconds < 100 ? `0${milliseconds}` : milliseconds;

  timeDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
}

// Record a lap time
function recordLap() {
  if (isRunning) {
    const lapTime = timeDisplay.textContent;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap: ${lapTime}`;
    lapsContainer.appendChild(lapItem);
  }
}

// Event listeners
startButton.addEventListener("click", startStopwatch);
pauseButton.addEventListener("click", pauseStopwatch);
resetButton.addEventListener("click", resetStopwatch);
lapButton.addEventListener("click", recordLap);

