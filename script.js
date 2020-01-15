// TODO 
//// max-width for divs
// pause?
// set time amounts
//// sound notification?
//// minute padding
//// time's up title
//// object design pattern for declarations


let sec, currentMin, currentSec, countdown;

let ringer = new Audio("chime.mp3")


let switchNum = {
    twentyfive: true,
    five: false
};

let page = {
    htmlMin: document.getElementById("minutes"),
    htmlSec: document.getElementById("seconds")
};

function pomTimer() {
    if (sec >= 0) { // stop condition
        currentMin = Math.floor(sec / 60);
        currentSec = sec % 60;

        // padding zero at the front of seconds
        if (currentSec.toString().length === 1) {
            currentSec = `0${currentSec}`;
        }

        // padding zero at the front of minutes
        if (currentMin.toString().length === 1) {
            currentMin = `0${currentMin}`;
        }


        page.htmlMin.innerHTML = currentMin;
        page.htmlSec.innerHTML = currentSec;
        document.title = `${currentMin}:${currentSec}`;

        // time's up notification
        if (sec < 1) {
            document.title = "⏰";
            ringer.play();
        }

        sec--;
    }
}


// stop and reset time to "00:00"
function stopButton() {
    clearInterval(countdown);
    page.htmlMin.innerHTML = "00";
    page.htmlSec.innerHTML = "00";
    document.title = "pomodoro timer";
}

// start button
function startButton() {
    clearInterval(countdown);
    if (switchNum.twentyfive == true) { // for 25 minutes
        sec = 3000;
        countdown = setInterval(pomTimer, 1000);
        switchNum.twentyfive = false;
        switchNum.five = true;
    } else if (switchNum.twentyfive == false) { // press start again for 5
        sec = 600;
        countdown = setInterval(pomTimer, 1000);
        switchNum.twentyfive = true;
        switchNum.five = false
    }
}