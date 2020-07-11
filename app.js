// Chalte rahega //

// function sec() {
//     console.log("run")
// }

// setInterval(sec, 1000)

// ONE TIME CHALEGA //

// function timeout() {
//     console.log("ameen")

// }

// setTimeout(timeout, 5000)

// STOP AFTER 5 sec //

// var count = 0;
// var intervel;

// function timer() {
//     count++
//     console.log(count)
// }

// intervel = setInterval(timer, 1000)

// setTimeout(function() {
//     clearInterval(intervel)

// }, 5000)


var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0
    }
    if (sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = 0
    }
}


function start() {
    interval = setInterval(timer, 10)
    document.getElementById('dis').disabled = true

}

function stop() {
    clearInterval(interval)
    document.getElementById('dis').disabled = false

}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop()
    document.getElementById('dis').disabled = false
    alert("You Want To Reset Your Stopwatch")

}

function visibility() {
    document.getElementById("dis").style.visibility = "hidden"
}

function visible() {
    document.getElementById("dis").style.visibility = "visible"
}