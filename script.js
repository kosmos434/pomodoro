let sec
  , currentMin
  , currentSec
  , countdown
  , htmlMin = document.getElementById("minutes")
  , htmlSec = document.getElementById("seconds")
  , twentyfive = true
  , five = false
  ;


function pomTimer () {
    if (sec >= 0) { // stop condition
        currentMin = Math.floor(sec / 60);
        currentSec = sec % 60;

        // padding zero at the front of seconds
        if (currentSec.toString().length === 1) {
            currentSec = `0${currentSec}`;
        }


        htmlMin.innerHTML = currentMin;
        htmlSec.innerHTML = currentSec;
        document.title = `${currentMin}:${currentSec}`;

        sec--;
    }
}


// stop and reset time to "00:00"
function stopButton() {
    clearInterval(countdown);
    htmlMin.innerHTML = "00";
    htmlSec.innerHTML = "00";
}

// start button
function startButton() {
    clearInterval(countdown);
    if (twentyfive == true) { // for 25 minutes
        sec = 1500;
        countdown = setInterval(pomTimer, 1000);
        twentyfive = false;
        five = true;
    } else if (twentyfive == false) { // press start again for 5
        sec = 300;
        countdown = setInterval(pomTimer, 1000);
        twentyfive = true;
        five = false
    }
}