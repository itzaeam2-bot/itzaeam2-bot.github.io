// FocusBloom - simple timer

let totalSeconds = 25 * 60;
let remaining = totalSeconds;
let timer = null;
let running = false;
let sessions = 0;
let totalMinutes = 0;

// Load saved data
if (localStorage.getItem("sessions")) {
    sessions = parseInt(localStorage.getItem("sessions"));
}
if (localStorage.getItem("totalMinutes")) {
    totalMinutes = parseInt(localStorage.getItem("totalMinutes"));
}
updateStats();

function updateDisplay() {
    let mins = Math.floor(remaining / 60);
    let secs = remaining % 60;

    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    document.getElementById("time").innerText = mins + ":" + secs;
}

function updateStats() {
    document.getElementById("sessions").innerText = sessions;
    document.getElementById("total").innerText = totalMinutes;
}

function startTimer() {
    if (running) return;
    running = true;

    timer = setInterval(function() {
        remaining = remaining - 1;
        updateDisplay();

        if (remaining <= 0) {
            clearInterval(timer);
            running = false;

            // Only count focus sessions
            if (totalSeconds === 25 * 60) {
                sessions = sessions + 1;
                totalMinutes = totalMinutes + 25;
                localStorage.setItem("sessions", sessions);
                localStorage.setItem("totalMinutes", totalMinutes);
                updateStats();
            }

            alert("Time is up!");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    remaining = totalSeconds;
    updateDisplay();
}

function setMode(minutes, mode) {
    clearInterval(timer);
    running = false;
    totalSeconds = minutes * 60;
    remaining = totalSeconds;
    updateDisplay();

    // Update active button
    document.getElementById("btn-focus").classList.remove("active");
    document.getElementById("btn-short").classList.remove("active");
    document.getElementById("btn-long").classList.remove("active");

    if (mode === "focus") {
        document.getElementById("btn-focus").classList.add("active");
    } else if (mode === "short") {
        document.getElementById("btn-short").classList.add("active");
    } else {
        document.getElementById("btn-long").classList.add("active");
    }
}

updateDisplay();
